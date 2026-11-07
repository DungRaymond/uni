#!/usr/bin/env node
/**
 * ingest.mjs — Trích xuất nội dung từ các file HTML cũ vào SQLite (data/uni.db)
 *
 * Chạy:  npm run ingest          (chỉ tạo lại nếu DB chưa có)
 *        npm run db:reset        (xoá và tạo lại toàn bộ)
 *
 * Nguồn: legacy/*.html  (sau khi migrate) hoặc *.html ở thư mục gốc.
 */
import { DatabaseSync } from 'node:sqlite';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const DATA_DIR = path.join(ROOT, 'data');
const DB_PATH = path.join(DATA_DIR, 'uni.db');
const force = process.argv.includes('--force');

/* ------------------------------------------------------------------ */
/* Nguồn dữ liệu                                                       */
/* ------------------------------------------------------------------ */

const SUBJECTS = [
  {
    slug: 'ly-duoc',
    name: 'Lý - Dược',
    emoji: '🩺',
    accent: '#0369a1',
    accentSoft: '#bae6fd',
    docFile: 'ly-duoc.doc.html',
    hwFile: 'ly-duoc.hw.html',
    legacyId: 'subject-ly-duoc',
  },
  {
    slug: 'y-duoc',
    name: 'Modul Y - Dược',
    emoji: '💊',
    accent: '#6d28d9',
    accentSoft: '#ddd6fe',
    docFile: 'y-duoc.doc.html',
    hwFile: 'y-duoc.hw.html',
    legacyId: 'subject-modul-y-duoc',
  },
  {
    slug: 'hoa-duoc',
    name: 'Hóa Vô cơ - Dược',
    emoji: '⚗️',
    accent: '#047857',
    accentSoft: '#a7f3d0',
    docFile: 'hoa-duoc.doc.html',
    hwFile: null,
    legacyId: 'subject-hoa-vo-co-duoc',
  },
];

function findSource(file) {
  for (const dir of ['legacy', '.']) {
    const p = path.join(ROOT, dir, file);
    if (fs.existsSync(p)) return p;
  }
  return null;
}

/* ------------------------------------------------------------------ */
/* Tiện ích parse HTML (không cần thư viện ngoài)                      */
/* ------------------------------------------------------------------ */

const ENTITIES = {
  amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ',
  ndash: '–', mdash: '—', hellip: '…', laquo: '«', raquo: '»',
  times: '×', divide: '÷', deg: '°', plusmn: '±', middot: '·',
};

function decodeEntities(str = '') {
  return str.replace(/&(#x?[0-9a-f]+|[a-z]+);/gi, (m, code) => {
    if (code[0] === '#') {
      const n = code[1].toLowerCase() === 'x'
        ? parseInt(code.slice(2), 16)
        : parseInt(code.slice(1), 10);
      return Number.isFinite(n) ? String.fromCodePoint(n) : m;
    }
    const key = code.toLowerCase();
    return ENTITIES[key] ?? m;
  });
}

const stripTags = (html = '') => decodeEntities(html.replace(/<[^>]*>/g, ' '));
const collapse = (str = '') => str.replace(/\s+/g, ' ').trim();

function textOf(html) {
  return collapse(stripTags(html));
}

/** Trả về { start, end } của khối <div> bắt đầu tại startIdx (đã tính cả thẻ đóng). */
function balancedDiv(html, startIdx) {
  const re = /<(\/?)div\b[^>]*>/gi;
  re.lastIndex = startIdx;
  let depth = 0;
  let m;
  while ((m = re.exec(html))) {
    if (m[1] === '/') {
      depth -= 1;
      if (depth === 0) return { start: startIdx, end: re.lastIndex };
    } else {
      depth += 1;
    }
  }
  throw new Error('Thẻ <div> không cân bằng tại offset ' + startIdx);
}

/** Nội dung bên trong một khối div bắt đầu tại startIdx. */
function innerDiv(html, startIdx) {
  const { end } = balancedDiv(html, startIdx);
  const openEnd = html.indexOf('>', startIdx) + 1;
  const closeStart = html.lastIndexOf('</div>', end);
  return { inner: html.slice(openEnd, closeStart), end };
}

const firstMatch = (html, re) => {
  const m = html.match(re);
  return m ? m[1] : '';
};

/** Chuẩn hoá HTML thân bài: bỏ script/style/comment, đổi link nội bộ sang route mới. */
function cleanBody(html) {
  let out = html
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<script\b[\s\S]*?<\/script>/gi, '')
    .replace(/<style\b[\s\S]*?<\/style>/gi, '')
    .replace(/\s(?:onclick|onload|onerror)="[^"]*"/gi, '')
    .replace(/file:\/\/\/home\/madox\/uni\//g, '');

  // Link nội bộ kiểu cũ → route Next.js
  out = out
    .replace(/(src|href)="images\//g, '$1="/images/')
    .replace(/hoa-vo-co-duoc\.doc\.html/g, '/docs/hoa-duoc')
    .replace(/hoa-duoc\.doc\.html/g, '/docs/hoa-duoc')
    .replace(/ly-duoc\.doc\.html/g, '/docs/ly-duoc')
    .replace(/y-duoc\.doc\.html/g, '/docs/y-duoc')
    .replace(/modul-y-duoc\.doc\.html/g, '/docs/y-duoc')
    .replace(/ly-duoc\.hw\.html/g, '/homework/ly-duoc')
    .replace(/y-duoc\.hw\.html/g, '/homework/y-duoc')
    .replace(/modul-y-duoc\.hw\.html/g, '/homework/y-duoc')
    .replace(/homeworked\.html/g, '/homework')
    .replace(/documents\.html/g, '/docs');

  return out.trim();
}

/* ------------------------------------------------------------------ */
/* Đọc file môn học                                                    */
/* ------------------------------------------------------------------ */

function readDocFile(file) {
  const p = findSource(file);
  if (!p) return null;
  const html = fs.readFileSync(p, 'utf8').replace(/<!--[\s\S]*?-->/g, '');
  const h1 = textOf(firstMatch(html, /<h1>([\s\S]*?)<\/h1>/));
  const subtitle = textOf(firstMatch(html, /<\/h1>\s*<p>([\s\S]*?)<\/p>/));
  const badge = textOf(firstMatch(html, /<span class="subject-badge">([\s\S]*?)<\/span>/));

  const cards = [];
  const cardRe = /<div class="(doc-card[^"]*)" id="([^"]+)">/g;
  let m;
  while ((m = cardRe.exec(html))) {
    const cardStart = m.index;
    const cardInner = innerDiv(html, cardStart).inner;

    const headerStart = cardInner.indexOf('<div class="doc-header"');
    const bodyStart = cardInner.indexOf('<div class="doc-body">');
    if (bodyStart < 0) continue;

    const header = headerStart >= 0 ? cardInner.slice(headerStart, bodyStart) : '';
    const bodyHtml = cleanBody(innerDiv(cardInner, bodyStart).inner);

    const num = textOf(firstMatch(header, /<span class="doc-num">([\s\S]*?)<\/span>/));
    const title = textOf(firstMatch(header, /<span class="doc-title">([\s\S]*?)<\/span>/));
    const tag = textOf(firstMatch(header, /<span class="doc-tag">([\s\S]*?)<\/span>/));

    cards.push({
      slug: m[2],
      num: num || String(cards.length + 1),
      title,
      tag,
      bodyHtml,
      text: textOf(bodyHtml),
      isGlossary: /từ khóa thường gặp/i.test(title) ? 1 : 0,
    });
    cardRe.lastIndex = cardStart + m[0].length;
  }

  return { h1, subtitle, badge, cards };
}

function readHomeworkFile(file) {
  if (!file) return null;
  const p = findSource(file);
  if (!p) return null;
  const html = fs.readFileSync(p, 'utf8').replace(/<!--[\s\S]*?-->/g, '');
  const h1 = textOf(firstMatch(html, /<h1>([\s\S]*?)<\/h1>/));
  const subtitle = textOf(firstMatch(html, /<\/h1>\s*<p>([\s\S]*?)<\/p>/));
  const badge = textOf(firstMatch(html, /<span class="subject-badge">([\s\S]*?)<\/span>/));

  const questions = [];
  const cardRe = /<div class="(question-card[^"]*)" id="([^"]+)">/g;
  let m;
  while ((m = cardRe.exec(html))) {
    const cardStart = m.index;
    const cardInner = innerDiv(html, cardStart).inner;

    const headerStart = cardInner.indexOf('<div class="question-header"');
    const bodyStart = cardInner.indexOf('<div class="question-body">');
    if (bodyStart < 0) continue;

    const header = headerStart >= 0 ? cardInner.slice(headerStart, bodyStart) : '';
    const bodyHtml = cleanBody(innerDiv(cardInner, bodyStart).inner);

    questions.push({
      slug: m[2],
      num: textOf(firstMatch(header, /<span class="question-num">([\s\S]*?)<\/span>/)) || String(questions.length + 1),
      title: textOf(firstMatch(header, /<span class="question-title">([\s\S]*?)<\/span>/)),
      status: textOf(firstMatch(header, /<span class="status-tag">([\s\S]*?)<\/span>/)),
      bodyHtml,
      text: textOf(bodyHtml),
    });
    cardRe.lastIndex = cardStart + m[0].length;
  }

  return { h1, subtitle, badge, questions };
}

/* ------------------------------------------------------------------ */
/* Đọc hub (documents.html) để lấy mô tả + danh sách chuyên đề         */
/* ------------------------------------------------------------------ */

function readHub() {
  const p = findSource('documents.html');
  if (!p) return {};
  const html = fs.readFileSync(p, 'utf8');
  const result = {};

  const blockRe = /<div class="subject-card" id="([^"]+)">/g;
  let m;
  while ((m = blockRe.exec(html))) {
    const inner = innerDiv(html, m.index).inner;
    const descMatch = inner.match(/<div class="subject-body"[^>]*>\s*<p[^>]*>([\s\S]*?)<\/p>/);
    const topics = [...inner.matchAll(/<li class="topic-item">[\s\S]*?<\/li>/g)].map((li) =>
      textOf(li[0].replace(/<span class="num">[\s\S]*?<\/span>/, '')),
    );
    result[m[1]] = {
      description: descMatch ? textOf(descMatch[1]) : '',
      topics,
    };
  }
  return result;
}

/* ------------------------------------------------------------------ */
/* Đọc homework.md (bảng theo dõi)                                     */
/* ------------------------------------------------------------------ */

function readHomeworkTracker() {
  const p = findSource('homework.md');
  if (!p) return [];
  const lines = fs.readFileSync(p, 'utf8').split('\n');
  const rows = [];
  for (const line of lines) {
    if (!line.trim().startsWith('|')) continue;
    const cells = line.split('|').slice(1, -1).map((c) => c.trim());
    if (cells.length < 6 || /^:?-+:?$/.test(cells[0])) continue;
    if (/stt/i.test(cells[0])) continue;
    const link = cells[4].match(/#([\w-]+)/);
    rows.push({
      order: Number(cells[0]) || rows.length + 1,
      subjectName: cells[1],
      title: cells[2],
      status: cells[3],
      anchor: link ? link[1] : '',
      note: cells[5],
    });
  }
  return rows;
}

/* ------------------------------------------------------------------ */
/* Ghi DB                                                              */
/* ------------------------------------------------------------------ */

fs.mkdirSync(DATA_DIR, { recursive: true });
if (fs.existsSync(DB_PATH) && !force) {
  console.log('ℹ️  data/uni.db đã tồn tại — dùng "npm run db:reset" để tạo lại.');
  process.exit(0);
}
if (fs.existsSync(DB_PATH)) fs.rmSync(DB_PATH);
for (const suffix of ['-wal', '-shm']) {
  if (fs.existsSync(DB_PATH + suffix)) fs.rmSync(DB_PATH + suffix);
}

const db = new DatabaseSync(DB_PATH);
db.exec(`
  PRAGMA journal_mode = WAL;
  PRAGMA foreign_keys = ON;
`);

db.exec(`
  CREATE TABLE subjects (
    id          INTEGER PRIMARY KEY,
    slug        TEXT UNIQUE NOT NULL,
    name        TEXT NOT NULL,
    emoji       TEXT NOT NULL DEFAULT '',
    accent      TEXT NOT NULL DEFAULT '#0369a1',
    accent_soft TEXT NOT NULL DEFAULT '#e0f2fe',
    description TEXT NOT NULL DEFAULT '',
    badge_doc   TEXT NOT NULL DEFAULT '',
    badge_hw    TEXT NOT NULL DEFAULT '',
    sort        INTEGER NOT NULL DEFAULT 0
  );

  CREATE TABLE docs (
    id         INTEGER PRIMARY KEY,
    subject_id INTEGER NOT NULL REFERENCES subjects(id) ON DELETE CASCADE,
    slug       TEXT UNIQUE NOT NULL,
    num        TEXT NOT NULL,
    title      TEXT NOT NULL,
    tag        TEXT NOT NULL DEFAULT '',
    body_html  TEXT NOT NULL,
    text       TEXT NOT NULL,
    is_glossary INTEGER NOT NULL DEFAULT 0,
    sort       INTEGER NOT NULL DEFAULT 0
  );

  CREATE TABLE questions (
    id         INTEGER PRIMARY KEY,
    subject_id INTEGER NOT NULL REFERENCES subjects(id) ON DELETE CASCADE,
    slug       TEXT UNIQUE NOT NULL,
    num        TEXT NOT NULL,
    title      TEXT NOT NULL,
    status     TEXT NOT NULL DEFAULT '',
    note       TEXT NOT NULL DEFAULT '',
    body_html  TEXT NOT NULL,
    text       TEXT NOT NULL,
    sort       INTEGER NOT NULL DEFAULT 0
  );

  CREATE INDEX idx_docs_subject ON docs(subject_id, sort);
  CREATE INDEX idx_questions_subject ON questions(subject_id, sort);

  CREATE TABLE meta (key TEXT PRIMARY KEY, value TEXT NOT NULL);
`);

let fts = false;
try {
  db.exec(`
    CREATE VIRTUAL TABLE docs_fts USING fts5(
      title, text, content='docs', content_rowid='id', tokenize='unicode61 remove_diacritics 2'
    );
    CREATE VIRTUAL TABLE questions_fts USING fts5(
      title, text, content='questions', content_rowid='id', tokenize='unicode61 remove_diacritics 2'
    );
  `);
  fts = true;
} catch (err) {
  console.warn('⚠️  FTS5 không khả dụng, dùng tìm kiếm LIKE:', err.message);
}

const insertSubject = db.prepare(`
  INSERT INTO subjects (slug, name, emoji, accent, accent_soft, description, badge_doc, badge_hw, sort)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
`);
const insertDoc = db.prepare(`
  INSERT INTO docs (subject_id, slug, num, title, tag, body_html, text, is_glossary, sort)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
`);
const insertQuestion = db.prepare(`
  INSERT INTO questions (subject_id, slug, num, title, status, note, body_html, text, sort)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
`);
const setMeta = db.prepare('INSERT OR REPLACE INTO meta (key, value) VALUES (?, ?)');

const hub = readHub();
const tracker = readHomeworkTracker();
const stats = { subjects: 0, docs: 0, questions: 0 };

SUBJECTS.forEach((subject, index) => {
  const docData = readDocFile(subject.docFile);
  const hwData = readHomeworkFile(subject.hwFile);
  const hubInfo = hub[subject.legacyId] || {};

  const info = insertSubject.run(
    subject.slug,
    subject.name,
    subject.emoji,
    subject.accent,
    subject.accentSoft,
    hubInfo.description || docData?.subtitle || '',
    docData?.badge || '',
    hwData?.badge || '',
    index,
  );
  const subjectId = Number(info.lastInsertRowid);
  stats.subjects += 1;

  if (docData) {
    docData.cards.forEach((card, i) => {
      const info = insertDoc.run(
        subjectId, card.slug, card.num, card.title, card.tag,
        card.bodyHtml, card.text, card.isGlossary, i,
      );
      if (fts) {
        db.prepare('INSERT INTO docs_fts (rowid, title, text) VALUES (?, ?, ?)')
          .run(Number(info.lastInsertRowid), card.title, card.text);
      }
      stats.docs += 1;
    });
  }

  if (hwData) {
    hwData.questions.forEach((q, i) => {
      const tracked = tracker.find(
        (t) => t.anchor === q.slug && t.subjectName.toLowerCase().includes(subject.name.split(' ')[0].toLowerCase()),
      ) || tracker.find((t) => t.anchor === q.slug);
      const status = q.status || tracked?.status || '';
      const note = tracked?.note || '';
      const info = insertQuestion.run(
        subjectId, q.slug, q.num, q.title, status, note,
        q.bodyHtml, q.text, i,
      );
      if (fts) {
        db.prepare('INSERT INTO questions_fts (rowid, title, text) VALUES (?, ?, ?)')
          .run(Number(info.lastInsertRowid), q.title, q.text);
      }
      stats.questions += 1;
    });
  }
});

setMeta.run('ingested_at', new Date().toISOString());
setMeta.run('fts', fts ? '1' : '0');
setMeta.run('source_subjects', JSON.stringify(SUBJECTS.map((s) => s.slug)));

db.close();

const { writeContentJson } = await import('./export-data.mjs');
writeContentJson(DB_PATH);

console.log('✅ Đã tạo data/uni.db');
console.log('✅ Đã xuất data/content.json');
console.log(`   • ${stats.subjects} môn học`);
console.log(`   • ${stats.docs} chuyên đề / tài liệu`);
console.log(`   • ${stats.questions} bài tập`);
console.log(`   • Tìm kiếm toàn văn (FTS5): ${fts ? 'bật' : 'tắt (dùng LIKE)'}`);
