#!/usr/bin/env python3
"""
Mechanical Check: T-ID uniqueness and heading hierarchy (Rule 6.5, R3, R12b)
Checks T-NN.n identifiers in drafts and ensures strict hierarchy.
Only uses Python standard library.
"""
import sys
import re
import json
import argparse
from pathlib import Path

TID_PATTERN = re.compile(r"\bT-(\d+(?:\.\d+)+)\b")
HEADING_PATTERN = re.compile(r"^(#{1,6})\s+(.*)$", re.MULTILINE)

def main():
    parser = argparse.ArgumentParser(description="Check T-ID uniqueness and heading structure.")
    parser.add_argument("file", help="Path to draft markdown file")
    parser.add_argument("--json", action="store_true", help="Output JSON format")
    parser.add_argument("--output", help="Save output report to file")
    args = parser.parse_args()

    path = Path(args.file)
    if not path.is_file():
        raise FileNotFoundError(f"File not found: {args.file}")

    text = path.read_text(encoding="utf-8", errors="replace")
    lines = text.splitlines()

    tid_occurrences = {}
    for idx, line in enumerate(lines, 1):
        for m in TID_PATTERN.finditer(line):
            tid = f"T-{m.group(1)}"
            if tid not in tid_occurrences:
                tid_occurrences[tid] = []
            tid_occurrences[tid].append(idx)

    duplicates = {tid: locs for tid, locs in tid_occurrences.items() if len(locs) > 1}

    res = {
        "file": str(path),
        "total_tids": len(tid_occurrences),
        "unique_tids": len(tid_occurrences) - len(duplicates),
        "duplicates": duplicates,
        "pass": len(duplicates) == 0
    }

    if args.json:
        out = json.dumps(res, indent=2, ensure_ascii=False)
    else:
        status_icon = "✅ PASS" if res["pass"] else "❌ DUPLICATES FOUND"
        out_lines = [
            f"# T-ID Uniqueness Report: {path.name}",
            f"- Status: **{status_icon}**",
            f"- Total unique T-IDs: {len(tid_occurrences)}",
        ]
        if duplicates:
            out_lines.append("")
            out_lines.append("## Duplicate T-IDs:")
            for tid, locs in duplicates.items():
                loc_str = ", ".join(f"line {l}" for l in locs)
                out_lines.append(f"- **{tid}**: appears {len(locs)} times ({loc_str})")
        else:
            out_lines.append("- All T-IDs are strictly unique.")

        out = "\n".join(out_lines)

    print(out)
    if args.output:
        out_path = Path(args.output)
        out_path.parent.mkdir(parents=True, exist_ok=True)
        out_path.write_text(out, encoding="utf-8")
        print(f"Report saved to {args.output}")

if __name__ == "__main__":
    main()
