#!/usr/bin/env node
/**
 * add-doc.mjs — Thêm một chuyên đề hoặc bài tập vào data/uni.db
 *
 * Ví dụ:
 *   node scripts/add-doc.mjs doc \
 *     --subject hoa-duoc \
 *     --title "Chuyên đề 9: Dược động học cơ bản" \
 *     --tag "Dược động học" \
 *     --file /tmp/body.html
 *
 *   node scripts/add-doc.mjs question \
 *     --subject ly-duoc \
 *     --title "Tính lưu lượng máu theo Poiseuille" \
 *     --status "✅ Hoàn thành" \
 *     --note "Áp dụng công thức Q = πΔPr⁴/8ηl" \
 *     --file /tmp/loi-giai.html
 *
 * Nội dung --file là HTML fragment (cho phép $...$ MathJax), hoặc dùng
 * --stdin để đọc từ stdin.
 */
import { DatabaseSync } from 'node:sqlite';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const DB_PATH = path.join(ROOT, 'data', 'uni.db');

function parseArgs(argv) {
  const args = { _: [] };
  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (token.startsWith('--')) {
      const key = token.slice(2);
      const next = argv[i + 1];
      if (next === undefined || next.startsWith('--')) {
        args[key] = true;
      } else {
        args[key] = next;
        i += 1;
      }
    } else {
      args._.push(token);
    }
  }
  return args;
}

const args = parseArgs(process.argv.slice(2));
const kind = args._[0];

if (!['doc', 'question'].includes(kind)) {
  console.error('Cách dùng: node scripts/add-doc.mjs <doc|question> --subject <slug> --title "..." [--file body.html]');
  process.exit(1);
}
if (!args.subject || !args.title) {
  console.error('Thiếu --subject hoặc --title');
  process.exit(1);
}
if (!fs.existsSync(DB_PATH)) {
  console.error('Chưa có data/uni.db — chạy: npm run ingest');
  process.exit(1);
}

const bodyHtml = args.file
  ? fs.readFileSync(path.resolve(args.file), 'utf8')
  : args.stdin
    ? fs.readFileSync(0, 'utf8')
    : '';

const decode = (str) =>
  str.replace(/&(amp|lt|gt|quot|apos|nbsp);/g, (m, e) =>
    ({ amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ' })[e] ?? m,
  );
const plainText = decode(bodyHtml.replace(/<[^>]*>/g, ' ')).replace(/\s+/g, ' ').trim();

const db = new DatabaseSync(DB_PATH);
const subject = db.prepare('SELECT * FROM subjects WHERE slug = ?').get(args.subject);
if (!subject) {
  console.error(`Không tìm thấy môn "${args.subject}"`);
  process.exit(1);
}

const fts = db.prepare(`SELECT value FROM meta WHERE key = 'fts'`).get()?.value === '1';

if (kind === 'doc') {
  const row = db
    .prepare('SELECT COUNT(*) AS n, MAX(CAST(num AS INTEGER)) AS m FROM docs WHERE subject_id = ?')
    .get(subject.id);
  const num = args.num ? String(args.num) : String((row.m ?? row.n) + 1);
  let slug = args.slug ? String(args.slug) : `doc-${subject.slug}-${num}`;
  let suffix = 2;
  while (db.prepare('SELECT 1 FROM docs WHERE slug = ?').get(slug)) {
    slug = `${args.slug ? String(args.slug) : `doc-${subject.slug}-${num}`}-${suffix}`;
    suffix += 1;
  }
  const info = db
    .prepare(
      `INSERT INTO docs (subject_id, slug, num, title, tag, body_html, text, is_glossary, sort)
       VALUES (?, ?, ?, ?, ?, ?, ?, 0, ?)`,
    )
    .run(subject.id, slug, num, String(args.title), String(args.tag ?? ''), bodyHtml, plainText, row.n);
  if (fts) {
    db.prepare('INSERT INTO docs_fts (rowid, title, text) VALUES (?, ?, ?)').run(
      Number(info.lastInsertRowid),
      String(args.title),
      plainText,
    );
  }
  console.log(`✅ Đã thêm chuyên đề "${args.title}" → /docs/${subject.slug}#${slug}`);
} else {
  const row = db
    .prepare('SELECT COUNT(*) AS n, MAX(CAST(num AS INTEGER)) AS m FROM questions WHERE subject_id = ?')
    .get(subject.id);
  const num = args.num ? String(args.num) : String((row.m ?? row.n) + 1);
  let slug = args.slug ? String(args.slug) : `q${num}`;
  let suffix = 2;
  while (db.prepare('SELECT 1 FROM questions WHERE slug = ?').get(slug)) {
    slug = `${args.slug ? String(args.slug) : `q${num}`}-${suffix}`;
    suffix += 1;
  }
  const info = db
    .prepare(
      `INSERT INTO questions (subject_id, slug, num, title, status, note, body_html, text, sort)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    )
    .run(
      subject.id,
      slug,
      num,
      String(args.title),
      String(args.status ?? '✅ Hoàn thành'),
      String(args.note ?? ''),
      bodyHtml,
      plainText,
      row.n,
    );
  if (fts) {
    db.prepare('INSERT INTO questions_fts (rowid, title, text) VALUES (?, ?, ?)').run(
      Number(info.lastInsertRowid),
      String(args.title),
      plainText,
    );
  }
  console.log(`✅ Đã thêm bài tập "${args.title}" → /homework/${subject.slug}#${slug}`);
}

db.close();
