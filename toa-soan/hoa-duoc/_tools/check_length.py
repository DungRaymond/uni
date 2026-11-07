#!/usr/bin/env python3
"""
Mechanical Check: Word count and length comparison (Rule 6.5, R7, R12b)
Compares draft vs source vs target length.
Only uses Python standard library.
"""
import sys
import re
import json
import argparse
from pathlib import Path

def strip_markup(text):
    # Remove HTML tags
    text = re.sub(r"<[^>]+>", " ", text)
    # Remove markdown links [text](url) -> text
    text = re.sub(r"\[([^\]]+)\]\([^)]+\)", r"\1", text)
    # Remove code blocks
    text = re.sub(r"```.*?```", " ", text, flags=re.DOTALL)
    text = re.sub(r"`[^`]+`", " ", text)
    # Remove math display and inline
    text = re.sub(r"\$\$.*?\$\$", " ", text, flags=re.DOTALL)
    text = re.sub(r"\$[^$]+\$", " ", text)
    # Normalize whitespace
    return text

def count_words(text):
    clean = strip_markup(text)
    # Vietnamese/English word split by whitespace and punctuation
    words = re.findall(r"[\w\u00C0-\u1EF9]+", clean, flags=re.UNICODE)
    return len(words)

def main():
    parser = argparse.ArgumentParser(description="Check word count and length comparison.")
    parser.add_argument("--source", help="Source file path")
    parser.add_argument("--draft", required=True, help="Draft file path")
    parser.add_argument("--target", type=int, default=0, help="Target minimum word count")
    parser.add_argument("--json", action="store_true", help="Output JSON format")
    parser.add_argument("--output", help="Save output report to file")
    args = parser.parse_args()

    draft_path = Path(args.draft)
    if not draft_path.is_file():
        raise FileNotFoundError(f"Draft file not found: {args.draft}")
    draft_text = draft_path.read_text(encoding="utf-8", errors="replace")
    draft_words = count_words(draft_text)

    source_words = 0
    if args.source:
        source_path = Path(args.source)
        if source_path.is_file():
            source_text = source_path.read_text(encoding="utf-8", errors="replace")
            source_words = count_words(source_text)

    ratio = (draft_words / source_words) if source_words > 0 else None
    warning_compression = (source_words > 0 and draft_words < source_words)

    res = {
        "draft_file": str(draft_path),
        "draft_words": draft_words,
        "source_file": args.source,
        "source_words": source_words,
        "ratio_draft_to_source": round(ratio, 2) if ratio is not None else None,
        "target_words": args.target,
        "warning_compression": warning_compression
    }

    if args.json:
        out = json.dumps(res, indent=2, ensure_ascii=False)
    else:
        out_lines = [
            f"# Length Check Report: {draft_path.name}",
            f"- Draft word count: **{draft_words:,}**",
        ]
        if source_words > 0:
            out_lines.append(f"- Source word count: **{source_words:,}**")
            out_lines.append(f"- Ratio (Draft / Source): **{ratio:.2f}x**")
            if warning_compression:
                out_lines.append("⚠️ **WARNING (R7 Over-compression)**: Draft is shorter than source! This requires explicit QA justification.")
            else:
                out_lines.append("✅ **PASS**: Draft meets or exceeds source length.")
        if args.target > 0:
            out_lines.append(f"- Target words: {args.target:,} ({'MET' if draft_words >= args.target else 'BELOW TARGET'})")
            
        out = "\n".join(out_lines)

    print(out)
    if args.output:
        out_path = Path(args.output)
        out_path.parent.mkdir(parents=True, exist_ok=True)
        out_path.write_text(out, encoding="utf-8")
        print(f"Report saved to {args.output}")

if __name__ == "__main__":
    main()
