#!/usr/bin/env node
/**
 * export-data.mjs — Xuất data/uni.db → JSON (mỗi môn một file, chia nhỏ)
 *
 *   data/index.json      thông tin môn + danh sách tiêu đề (nhẹ, dùng cho hub)
 *   data/content/<slug>.json  đầy đủ body của 1 môn (dùng cho trang môn + search)
 *
 * Chạy:  npm run export        (hoặc tự động sau ingest / add-doc)
 */
import { DatabaseSync } from 'node:sqlite';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const DB_PATH = path.join(ROOT, 'data', 'uni.db');
const CONTENT_DIR = path.join(ROOT, 'data', 'content');
const INDEX_PATH = path.join(ROOT, 'data', 'index.json');

export function writeContentJson(dbPath = DB_PATH) {
  if (!fs.existsSync(dbPath)) {
    console.error(`Không tìm thấy ${dbPath} — chạy "npm run ingest" trước.`);
    process.exit(1);
  }

  const db = new DatabaseSync(dbPath, { readOnly: true });
  const subjects = db.prepare('SELECT * FROM subjects ORDER BY sort').all();
  const allDocs = db
    .prepare(
      `SELECT id, subject_id, slug, num, title, tag, body_html, text, is_glossary, sort
       FROM docs ORDER BY subject_id, sort`,
    )
    .all();
  const allQuestions = db
    .prepare(
      `SELECT id, subject_id, slug, num, title, status, note, body_html, text, sort
       FROM questions ORDER BY subject_id, sort`,
    )
    .all();
  db.close();

  fs.rmSync(CONTENT_DIR, { recursive: true, force: true });
  fs.mkdirSync(CONTENT_DIR, { recursive: true });

  const indexSubjects = [];
  let totalDocs = 0;
  let totalQuestions = 0;

  for (const subject of subjects) {
    const docs = allDocs.filter((doc) => doc.subject_id === subject.id);
    const questions = allQuestions.filter((question) => question.subject_id === subject.id);

    fs.writeFileSync(
      path.join(CONTENT_DIR, `${subject.slug}.json`),
      JSON.stringify({ subject, docs, questions }, null, 1),
    );

    indexSubjects.push({
      slug: subject.slug,
      name: subject.name,
      emoji: subject.emoji,
      accent: subject.accent,
      accent_soft: subject.accent_soft,
      description: subject.description,
      doc_count: docs.length,
      question_count: questions.length,
      docs: docs.map(({ slug, num, title, tag }) => ({ slug, num, title, tag })),
      questions: questions.map(({ slug, num, title, status, note }) => ({ slug, num, title, status, note })),
    });

    totalDocs += docs.length;
    totalQuestions += questions.length;
  }

  fs.writeFileSync(
    INDEX_PATH,
    JSON.stringify({ generated_at: new Date().toISOString(), subjects: indexSubjects }, null, 1),
  );

  // Dọn bản snapshot cũ dạng 1 file nếu còn
  const legacyPath = path.join(ROOT, 'data', 'content.json');
  if (fs.existsSync(legacyPath)) fs.rmSync(legacyPath);

  return { subjects: subjects.length, docs: totalDocs, questions: totalQuestions };
}

const invokedDirectly = process.argv[1] && path.resolve(process.argv[1]) === import.meta.filename.replace(/\\/g, '/');
if (invokedDirectly) {
  const stats = writeContentJson();
  console.log('✅ Đã xuất data/index.json + data/content/<môn>.json');
  console.log(`   • ${stats.subjects} môn · ${stats.docs} chuyên đề · ${stats.questions} bài tập`);
}
