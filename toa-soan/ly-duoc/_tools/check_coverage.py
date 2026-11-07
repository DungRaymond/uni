#!/usr/bin/env python3
"""
Mechanical Check: Coverage verification (Rule 6.5, R3, R12b)
Checks that all source IDs (S-NN.n) in audit register appear in mapping matrix or draft changelog.
Only uses Python standard library.
"""
import sys
import re
import json
import argparse
from pathlib import Path

SID_PATTERN = re.compile(r"\bS-(\d+\.\d+)\b")

def extract_sids(text):
    return sorted(list(set(SID_PATTERN.findall(text))))

def main():
    parser = argparse.ArgumentParser(description="Check S-ID coverage between audit, matrix, or draft.")
    parser.add_argument("--audit", required=True, help="Audit markdown file (register of S-IDs)")
    parser.add_argument("--target", required=True, help="Matrix or draft file to verify coverage")
    parser.add_argument("--json", action="store_true", help="Output JSON format")
    parser.add_argument("--output", help="Save output report to file")
    args = parser.parse_args()

    audit_path = Path(args.audit)
    target_path = Path(args.target)

    if not audit_path.is_file():
        raise FileNotFoundError(f"Audit file not found: {args.audit}")
    if not target_path.is_file():
        raise FileNotFoundError(f"Target file not found: {args.target}")

    audit_text = audit_path.read_text(encoding="utf-8", errors="replace")
    target_text = target_path.read_text(encoding="utf-8", errors="replace")

    audit_sids = extract_sids(audit_text)
    target_sids = extract_sids(target_text)

    audit_set = set(audit_sids)
    target_set = set(target_sids)

    missing = sorted(list(audit_set - target_set))
    extra = sorted(list(target_set - audit_set))
    covered = sorted(list(audit_set & target_set))
    coverage_rate = (len(covered) / len(audit_set)) if audit_set else 1.0

    res = {
        "audit_file": str(audit_path),
        "target_file": str(target_path),
        "total_audit_sids": len(audit_sids),
        "total_target_sids": len(target_sids),
        "covered_count": len(covered),
        "missing_count": len(missing),
        "missing_sids": [f"S-{s}" for s in missing],
        "extra_sids": [f"S-{s}" for s in extra],
        "coverage_percentage": round(coverage_rate * 100, 2),
        "pass": len(missing) == 0
    }

    if args.json:
        out = json.dumps(res, indent=2, ensure_ascii=False)
    else:
        status_icon = "✅ PASS" if res["pass"] else "❌ INCOMPLETE"
        out_lines = [
            f"# S-ID Coverage Report: {target_path.name}",
            f"- Status: **{status_icon}** ({res['coverage_percentage']}%)",
            f"- Audit S-IDs: {len(audit_sids)}",
            f"- Covered S-IDs: {len(covered)}",
            f"- Missing S-IDs: {len(missing)}",
        ]
        if missing:
            out_lines.append("")
            out_lines.append("## Missing S-IDs (Must be mapped or explicitly justified)")
            for s in missing:
                out_lines.append(f"- S-{s}")
        if extra:
            out_lines.append("")
            out_lines.append("## Extra S-IDs (Found in target but not in audit)")
            for s in extra:
                out_lines.append(f"- S-{s}")

        out = "\n".join(out_lines)

    print(out)
    if args.output:
        out_path = Path(args.output)
        out_path.parent.mkdir(parents=True, exist_ok=True)
        out_path.write_text(out, encoding="utf-8")
        print(f"Report saved to {args.output}")

if __name__ == "__main__":
    main()
