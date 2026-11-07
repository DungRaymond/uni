import { DatabaseSync } from 'node:sqlite';
import path from 'node:path';

export type Subject = {
  id: number;
  slug: string;
  name: string;
  emoji: string;
  accent: string;
  accent_soft: string;
  description: string;
  badge_doc: string;
  badge_hw: string;
  doc_count: number;
  question_count: number;
};

export type DocCard = {
  id: number;
  slug: string;
  num: string;
  title: string;
  tag: string;
  body_html: string;
  is_glossary: number;
};

export type QuestionCard = {
  id: number;
  slug: string;
  num: string;
  title: string;
  status: string;
  note: string;
  body_html: string;
};

export type SearchHit = {
  kind: 'doc' | 'question';
  subject_slug: string;
  subject_name: string;
  subject_emoji: string;
  accent: string;
  slug: string;
  num: string;
  title: string;
  tag: string;
  snippet: string;
};

let connection: DatabaseSync | null = null;

function db(): DatabaseSync {
  if (!connection) {
    const file = path.join(process.cwd(), 'data', 'uni.db');
    connection = new DatabaseSync(file, { readOnly: true });
  }
  return connection;
}

/** Bỏ dấu tiếng Việt để tìm kiếm không phân biệt dấu. */
export function unaccent(input: string): string {
  return input
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D');
}

export function getSubjects(): Subject[] {
  return db()
    .prepare(
      `SELECT s.*,
              (SELECT COUNT(*) FROM docs d WHERE d.subject_id = s.id) AS doc_count,
              (SELECT COUNT(*) FROM questions q WHERE q.subject_id = s.id) AS question_count
       FROM subjects s
       ORDER BY s.sort`,
    )
    .all() as unknown as Subject[];
}

export function getSubject(slug: string): Subject | null {
  return (db()
    .prepare(
      `SELECT s.*,
              (SELECT COUNT(*) FROM docs d WHERE d.subject_id = s.id) AS doc_count,
              (SELECT COUNT(*) FROM questions q WHERE q.subject_id = s.id) AS question_count
       FROM subjects s WHERE s.slug = ?`,
    )
    .get(slug) as unknown as Subject) ?? null;
}

export function getDocs(subjectId: number): DocCard[] {
  return db()
    .prepare(
      `SELECT id, slug, num, title, tag, body_html, is_glossary
       FROM docs WHERE subject_id = ? ORDER BY sort`,
    )
    .all(subjectId) as unknown as DocCard[];
}

export function getQuestions(subjectId: number): QuestionCard[] {
  return db()
    .prepare(
      `SELECT id, slug, num, title, status, note, body_html
       FROM questions WHERE subject_id = ? ORDER BY sort`,
    )
    .all(subjectId) as unknown as QuestionCard[];
}

export function getDocTitles(subjectId: number): Pick<DocCard, 'slug' | 'num' | 'title' | 'tag'>[] {
  return db()
    .prepare(`SELECT slug, num, title, tag FROM docs WHERE subject_id = ? ORDER BY sort`)
    .all(subjectId) as unknown as Pick<DocCard, 'slug' | 'num' | 'title' | 'tag'>[];
}

export function hasFts(): boolean {
  const row = db().prepare(`SELECT value FROM meta WHERE key = 'fts'`).get() as
    | { value: string }
    | undefined;
  return row?.value === '1';
}

/** Tạo truy vấn FTS5 an toàn: mỗi từ thành tiền tố, nối bằng AND. */
function tokenize(q: string): string[] {
  return q
    .replace(/["*()]/g, ' ')
    .split(/\s+/)
    .filter((t) => t.length > 0)
    .slice(0, 8);
}

function ftsQuery(tokens: string[]): string {
  return tokens.map((t) => `"${t}"*`).join(' AND ');
}

const DOC_FTS_SQL = `
  SELECT 'doc' AS kind, s.slug AS subject_slug, s.name AS subject_name, s.emoji AS subject_emoji,
         s.accent AS accent, d.slug, d.num, d.title, d.tag,
         snippet(docs_fts, 1, '<mark>', '</mark>', '…', 20) AS snippet
  FROM docs_fts
  JOIN docs d ON d.id = docs_fts.rowid
  JOIN subjects s ON s.id = d.subject_id
  WHERE docs_fts MATCH ?
  ORDER BY bm25(docs_fts, 4.0, 1.0)
  LIMIT ?`;

const QUESTION_FTS_SQL = `
  SELECT 'question' AS kind, s.slug AS subject_slug, s.name AS subject_name, s.emoji AS subject_emoji,
         s.accent AS accent, q.slug, q.num, q.title, q.status AS tag,
         snippet(questions_fts, 1, '<mark>', '</mark>', '…', 20) AS snippet
  FROM questions_fts
  JOIN questions q ON q.id = questions_fts.rowid
  JOIN subjects s ON s.id = q.subject_id
  WHERE questions_fts MATCH ?
  ORDER BY bm25(questions_fts, 4.0, 1.0)
  LIMIT ?`;

const DOC_LIKE_SQL = `
  SELECT 'doc' AS kind, s.slug AS subject_slug, s.name AS subject_name, s.emoji AS subject_emoji,
         s.accent AS accent, d.slug, d.num, d.title, d.tag,
         substr(d.text, 1, 240) AS snippet
  FROM docs d JOIN subjects s ON s.id = d.subject_id
  WHERE d.title LIKE ? OR d.text LIKE ?
  LIMIT ?`;

const QUESTION_LIKE_SQL = `
  SELECT 'question' AS kind, s.slug AS subject_slug, s.name AS subject_name, s.emoji AS subject_emoji,
         s.accent AS accent, q.slug, q.num, q.title, q.status AS tag,
         substr(q.text, 1, 240) AS snippet
  FROM questions q JOIN subjects s ON s.id = q.subject_id
  WHERE q.title LIKE ? OR q.text LIKE ?
  LIMIT ?`;

function queryTable(
  table: 'docs' | 'questions',
  rawQuery: string,
  limit: number,
): SearchHit[] {
  const fts = hasFts();
  const tokens = tokenize(rawQuery);
  if (tokens.length === 0) return [];

  const run = (sql: string, params: (string | number)[]): SearchHit[] => {
    try {
      return db().prepare(sql).all(...params) as unknown as SearchHit[];
    } catch {
      return [];
    }
  };

  if (!fts) {
    const sql = table === 'docs' ? DOC_LIKE_SQL : QUESTION_LIKE_SQL;
    return run(sql, [`%${rawQuery}%`, `%${rawQuery}%`, limit]);
  }

  const sql = table === 'docs' ? DOC_FTS_SQL : QUESTION_FTS_SQL;
  const results: SearchHit[] = [];

  // Ưu tiên khớp nguyên cụm (ví dụ "nhiệt hóa học") rồi mới mở rộng ra từng từ.
  if (tokens.length > 1) {
    results.push(...run(sql, [`"${tokens.join(' ')}"`, limit]));
  }
  const seen = new Set(results.map((hit) => hit.slug));
  for (const hit of run(sql, [ftsQuery(tokens), limit])) {
    if (!seen.has(hit.slug)) {
      seen.add(hit.slug);
      results.push(hit);
    }
  }

  // Nếu vẫn chưa có gì, thử nới lỏng thành OR.
  if (results.length === 0) {
    const loose = tokens.map((t) => `"${t}"*`).join(' OR ');
    results.push(...run(sql, [loose, limit]));
  }

  return results.slice(0, limit);
}

export function search(
  rawQuery: string,
  kind: 'all' | 'doc' | 'question' = 'all',
  limit = 40,
): SearchHit[] {
  const query = rawQuery.trim();
  if (!query) return [];

  const hits: SearchHit[] = [];
  if (kind !== 'question') hits.push(...queryTable('docs', query, limit));
  if (kind !== 'doc') hits.push(...queryTable('questions', query, limit));
  return hits;
}

export function countAll(): { docs: number; questions: number; subjects: number } {
  const row = db()
    .prepare(
      `SELECT (SELECT COUNT(*) FROM docs) AS docs,
              (SELECT COUNT(*) FROM questions) AS questions,
              (SELECT COUNT(*) FROM subjects) AS subjects`,
    )
    .get() as unknown as { docs: number; questions: number; subjects: number };
  return row;
}
