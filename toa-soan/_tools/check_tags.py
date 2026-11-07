#!/usr/bin/env python3
"""
Mechanical Check: Tags count and analysis (R12b, Rule 6.5)
Extracts [ADDED], [VERIFY], [CONFLICT] tags from markdown files.
Only uses Python standard library.
"""
import sys
import re
import json
import argparse
from pathlib import Path

TAG_PATTERNS = {
    "ADDED": re.compile(r"\[ADDED(?::\s*([^\]]*))?\]"),
    "VERIFY": re.compile(r"\[VERIFY(?::\s*([^\]]*))?\]"),
    "CONFLICT": re.compile(r"\[CONFLICT(?::\s*([^\]]*))?\]"),
    "FIGURE": re.compile(r"\[FIGURE(?::\s*([^\]]*))?\]"),
}

def analyze_file(file_path):
    path = Path(file_path)
    if not path.is_file():
        raise FileNotFoundError(f"File not found: {file_path}")
    
    text = path.read_text(encoding="utf-8", errors="replace")
    lines = text.splitlines()
    
    results = {
        "file": str(path),
        "total_lines": len(lines),
        "counts": {"ADDED": 0, "VERIFY": 0, "CONFLICT": 0, "FIGURE": 0},
        "details": {"ADDED": [], "VERIFY": [], "CONFLICT": [], "FIGURE": []}
    }
    
    for idx, line in enumerate(lines, 1):
        for tag_type, pattern in TAG_PATTERNS.items():
            for match in pattern.finditer(line):
                results["counts"][tag_type] += 1
                reason = match.group(1).strip() if match.group(1) else ""
                results["details"][tag_type].append({
                    "line": idx,
                    "reason": reason,
                    "context": line.strip()[:100]
                })
                
    return results

def main():
    parser = argparse.ArgumentParser(description="Check and count tags in draft/document.")
    parser.add_argument("file", help="Path to markdown file to inspect")
    parser.add_argument("--json", action="store_true", help="Output JSON format")
    parser.add_argument("--output", help="Save output report to file")
    args = parser.parse_args()
    
    res = analyze_file(args.file)
    
    if args.json:
        out = json.dumps(res, indent=2, ensure_ascii=False)
    else:
        out_lines = [
            f"# Tag Analysis Report: {Path(args.file).name}",
            f"- File: `{res['file']}`",
            f"- Lines: {res['total_lines']}",
            f"- Counts: [ADDED]={res['counts']['ADDED']}, [VERIFY]={res['counts']['VERIFY']}, [CONFLICT]={res['counts']['CONFLICT']}, [FIGURE]={res['counts']['FIGURE']}",
            "",
            "## Summary Table",
            "| Tag Type | Count |",
            "|---|---|",
            f"| ADDED | {res['counts']['ADDED']} |",
            f"| VERIFY | {res['counts']['VERIFY']} |",
            f"| CONFLICT | {res['counts']['CONFLICT']} |",
            f"| FIGURE | {res['counts']['FIGURE']} |",
            ""
        ]
        
        for tag_type in ["VERIFY", "CONFLICT", "ADDED", "FIGURE"]:
            items = res["details"][tag_type]
            if items:
                out_lines.append(f"### {tag_type} Items ({len(items)})")
                for it in items:
                    reason_str = f" — *{it['reason']}*" if it['reason'] else ""
                    out_lines.append(f"- Line {it['line']}{reason_str}: `{it['context']}`")
                out_lines.append("")
                
        out = "\n".join(out_lines)
        
    print(out)
    if args.output:
        out_path = Path(args.output)
        out_path.parent.mkdir(parents=True, exist_ok=True)
        out_path.write_text(out, encoding="utf-8")
        print(f"Report saved to {args.output}")

if __name__ == "__main__":
    main()
