/**
 * Nguồn dữ liệu: data/content/<môn>.json sinh từ data/uni.db (npm run export).
 *
 * Mỗi môn một file → trang môn chỉ load đúng file của môn đó (bundle nhỏ hơn khi
 * deploy serverless); index.json nhẹ dùng cho hub & tiêu đề.
 *
 * Tất cả hàm đều async vì đọc qua dynamic import.
 */
import indexRaw from '@/data/index.json';

export type Subject = {
  slug: string;
  name: string;
  emoji: string;
  accent: string;
  accent_soft: string;
  description: string;
  doc_count: number;
  question_count: number;
};

export type DocCard = {
  slug: string;
  num: string;
  title: string;
  tag: string;
  body_html: string;
  is_glossary: boolean;
  subject_slug: string;
};

export type QuestionCard = {
  slug: string;
  num: string;
  title: string;
  status: string;
  note: string;
  body_html: string;
  subject_slug: string;
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

type Ids = { id: number };

type SubjectIndexRow = Omit<Subject, 'doc_count' | 'question_count'> & {
  doc_count: number;
  question_count: number;
  docs: Pick<DocTitle, 'slug' | 'num' | 'title' | 'tag'>[];
  questions: { slug: string; num: string; title: string; status: string; note: string }[];
};

type RawDoc = Omit<DocCard, 'is_glossary' | 'subject_slug'> & {
  subject_id: number;
  text: string;
  is_glossary: number;
};

type RawQuestion = Omit<QuestionCard, 'subject_slug'> & {
  subject_id: number;
  text: string;
};

type SubjectChunk = {
  subject: SubjectIndexRow & Ids;
  docs: RawDoc[];
  questions: RawQuestion[];
};

export type DocTitle = Pick<DocCard, 'slug' | 'num' | 'title' | 'tag'>;

const indexData = indexRaw as unknown as { subjects: SubjectIndexRow[] };

const subjectBySlug = new Map<string, SubjectIndexRow>();
for (const row of indexData.subjects) subjectBySlug.set(row.slug, row);

/* Load 1 môn (có cache) — mỗi file chỉ được import khi cần */
const loaders: Record<string, () => Promise<SubjectChunk>> = {
  'ly-duoc': () => import('@/data/content/ly-duoc.json') as unknown as Promise<SubjectChunk>,
  'y-duoc': () => import('@/data/content/y-duoc.json') as unknown as Promise<SubjectChunk>,
  'hoa-duoc': () => import('@/data/content/hoa-duoc.json') as unknown as Promise<SubjectChunk>,
};

const chunkCache = new Map<string, Promise<SubjectChunk>>();

function loadChunk(slug: string): Promise<SubjectChunk> | null {
  const cached = chunkCache.get(slug);
  if (cached) return cached;
  const loader = loaders[slug];
  if (!loader) return null;
  const promise = loader();
  chunkCache.set(slug, promise);
  return promise;
}

async function loadAllChunks(): Promise<SubjectChunk[]> {
  const chunks = await Promise.all(
    Object.keys(loaders).map((slug) => loadChunk(slug)!),
  );
  return chunks.filter(Boolean);
}

/* ------------------------------------------------------------------ */
/* API đọc                                                             */
/* ------------------------------------------------------------------ */

export async function getSubjects(): Promise<Subject[]> {
  return indexData.subjects.map((subject) => ({
    slug: subject.slug,
    name: subject.name,
    emoji: subject.emoji,
    accent: subject.accent,
    accent_soft: subject.accent_soft,
    description: subject.description,
    doc_count: subject.doc_count,
    question_count: subject.question_count,
  }));
}

export async function getSubject(slug: string): Promise<Subject | null> {
  const row = subjectBySlug.get(slug);
  if (!row) return null;
  return {
    slug: row.slug,
    name: row.name,
    emoji: row.emoji,
    accent: row.accent,
    accent_soft: row.accent_soft,
    description: row.description,
    doc_count: row.doc_count,
    question_count: row.question_count,
  };
}

export async function getDocs(subjectSlug: string): Promise<DocCard[]> {
  const chunkPromise = loadChunk(subjectSlug);
  if (!chunkPromise) return [];
  const { docs } = await chunkPromise;
  return docs.map((doc) => ({
    slug: doc.slug,
    num: doc.num,
    title: doc.title,
    tag: doc.tag,
    body_html: doc.body_html,
    is_glossary: doc.is_glossary === 1,
    subject_slug: subjectSlug,
  }));
}

export async function getQuestions(subjectSlug: string): Promise<QuestionCard[]> {
  const chunkPromise = loadChunk(subjectSlug);
  if (!chunkPromise) return [];
  const { questions } = await chunkPromise;
  return questions.map((question) => ({
    slug: question.slug,
    num: question.num,
    title: question.title,
    status: question.status,
    note: question.note,
    body_html: question.body_html,
    subject_slug: subjectSlug,
  }));
}

export async function getDocTitles(subjectSlug: string): Promise<DocTitle[]> {
  return subjectBySlug.get(subjectSlug)?.docs ?? [];
}

export function countSubjects(): number {
  return indexData.subjects.length;
}

export function countAll(): {
  docs: number;
  questions: number;
  subjects: number;
} {
  return {
    docs: indexData.subjects.reduce((sum, subject) => sum + subject.doc_count, 0),
    questions: indexData.subjects.reduce((sum, subject) => sum + subject.question_count, 0),
    subjects: indexData.subjects.length,
  };
}

/* ------------------------------------------------------------------ */
/* Tìm kiếm (không phân biệt dấu tiếng Việt + highlight theo ký tự gốc) */
/* ------------------------------------------------------------------ */

const DIACRITICS = /[\u0300-\u036f]/g;

/** Chuyển một ký tự về dạng gốc (thường, không dấu). */
function foldChar(ch: string): string {
  const lowered = ch === 'Đ' ? 'd' : ch === 'đ' ? 'd' : ch.toLowerCase();
  return lowered.normalize('NFD').replace(DIACRITICS, '');
}

/** Gồm fold cho toàn bộ chữ (dùng để tính điểm). */
function fold(input: string): string {
  return input.toLowerCase().replace(/đ/g, 'd').normalize('NFD').replace(DIACRITICS, '');
}

/** Fold kèm bảng tham chiếu vị trí ký tự gốc — dùng để highlight chính xác. */
function foldWithMap(input: string): { text: string; map: number[] } {
  let text = '';
  const map: number[] = [];
  for (let i = 0; i < input.length; i += 1) {
    const folded = foldChar(input[i]);
    for (let k = 0; k < folded.length; k += 1) {
      text += folded[k];
      map.push(i);
    }
  }
  return { text, map };
}

const escapeHtml = (input: string) =>
  input.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

type Scored = { hit: Omit<SearchHit, 'snippet'>; score: number; snippet: string };

type FoldedEntry = { title: string; text: string };

function countOccurrences(haystack: string, needle: string): number {
  let count = 0;
  let from = 0;
  if (!needle) return 0;
  while ((from = haystack.indexOf(needle, from)) !== -1) {
    count += 1;
    from += needle.length;
  }
  return count;
}

function scoreEntry(
  entry: FoldedEntry,
  tokens: string[],
  phraseNorm: string,
): { score: number; start: number; matchLen: number } {
  const { title, text } = entry;

  let score = 0;
  let start = phraseNorm ? text.indexOf(phraseNorm) : -1;
  let matchLen = phraseNorm ? phraseNorm.length : 0;

  if (start >= 0) score += 120;

  for (const token of tokens) {
    const titleHits = countOccurrences(title, token);
    const textHits = countOccurrences(text, token);
    score += titleHits * 12 + Math.min(textHits, 8) * 2;
    if (start < 0) {
      const idx = text.indexOf(token);
      if (idx >= 0) {
        start = idx;
        matchLen = token.length;
      }
    }
  }

  return { score, start, matchLen };
}

/** Vị trí ký tự gốc của chỉ mục folded (hoặc cuối nếu vượt). */
function mapRawEnd(map: number[], foldedIdx: number): number {
  if (foldedIdx >= map.length) return map.length === 0 ? 0 : map[map.length - 1] + 1;
  return map[foldedIdx];
}

function buildSnippet(
  rawText: string,
  start: number,
  matchLen: number,
  tokens: string[],
  wantPhrase: string,
): string {
  if (start < 0) return escapeHtml(rawText.slice(0, 220).trimEnd()) + '…';

  // Ước lượng vị trí gốc (folded ngắn hơn raw) rồi siết về khung nhỏ có map
  const ratio = rawText.length / Math.max(start + matchLen, 1);
  const approx = Math.min(Math.max(0, Math.floor(start * ratio)), Math.max(0, rawText.length - 1));
  const winFrom = Math.max(0, approx - 100);
  const winTo = Math.min(rawText.length, approx + 460);
  const windowRaw = rawText.slice(winFrom, winTo);
  const win = foldWithMap(windowRaw);

  // Tìm các khớp trong khung, ưu tiên cụm từ nguyên vẹn rồi tới từng từ
  const ranges: [number, number][] = [];
  const tryMatch = (needle: string) => {
    const idx = win.text.indexOf(needle);
    if (idx === -1) return;
    ranges.push([idx, needle.length]);
  };

  if (wantPhrase && win.text.includes(wantPhrase)) tryMatch(wantPhrase);
  for (const token of tokens) {
    if (token.length < 2) continue;
    if (wantPhrase && wantPhrase.includes(token)) continue; // cụm đã bôi đậm vùng đó
    tryMatch(token);
  }

  if (ranges.length === 0) {
    const fallback = escapeHtml(rawText.slice(Math.max(0, approx - 110), approx + 260).trim());
    return (winFrom > 0 ? '…' : '') + fallback + (winTo < rawText.length ? '…' : '');
  }

  // Chuyển khoảng folded → khoảng vùng gốc, gộp rồi bôi đậm
  const intervals: [number, number][] = ranges.map(([offset, length]) => [
    win.map[offset],
    mapRawEnd(win.map, offset + length),
  ]);
  intervals.sort((a, b) => a[0] - b[0]);
  const merged: [number, number][] = [];
  for (const [a, b] of intervals) {
    const last = merged[merged.length - 1];
    if (last && a <= last[1]) last[1] = Math.max(last[1], b);
    else merged.push([a, b]);
  }

  let out = '';
  let cursor = 0;
  for (const [a, b] of merged) {
    if (a < cursor) continue; // trùng phần đã bôi đậm
    out += escapeHtml(windowRaw.slice(cursor, a)) + '<mark>' + escapeHtml(windowRaw.slice(a, b)) + '</mark>';
    cursor = b;
  }
  out += escapeHtml(windowRaw.slice(cursor));

  let result = out;
  if (winFrom > 0) result = '…' + result;
  if (winTo < rawText.length) result = result + '…';
  return result;
}

async function runSearch<T>(
  chunks: SubjectChunk[],
  pick: (subject: SubjectIndexRow & Ids, entry: T) => Omit<SearchHit, 'snippet'>,
  getDocEntries: (chunk: SubjectChunk) => T[],
  query: string,
  limit: number,
): Promise<SearchHit[]> {
  const tokens = fold(query)
    .replace(/["*()]/g, ' ')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 8);
  if (tokens.length === 0) return [];
  const phraseNorm = tokens.length > 1 ? tokens.join(' ') : '';

  const scored: Scored[] = [];
  for (const chunk of chunks) {
    for (const entry of getDocEntries(chunk)) {
      const title = (entry as { title: string }).title;
      const text = (entry as { text: string }).text;
      const folded = { title: fold(title), text: fold(text) };
      const result = scoreEntry(folded, tokens, phraseNorm);
      if (result.score <= 0) continue;
      const hit = pick(chunk.subject, entry);
      scored.push({
        hit,
        score: result.score,
        snippet: buildSnippet(text, result.start, result.matchLen, tokens, phraseNorm),
      });
    }
  }

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map(({ hit, snippet }) => ({ ...hit, snippet }));
}

export async function search(
  rawQuery: string,
  kind: 'all' | 'doc' | 'question' = 'all',
  limit = 40,
): Promise<SearchHit[]> {
  const query = rawQuery.trim();
  if (!query) return [] as SearchHit[];
  const chunks = await loadAllChunks();

  const mapDoc = (subject: SubjectIndexRow & Ids, doc: RawDoc) => ({
    kind: 'doc' as const,
    subject_slug: subject.slug,
    subject_name: subject.name,
    subject_emoji: subject.emoji,
    accent: subject.accent,
    slug: doc.slug,
    num: doc.num,
    title: doc.title,
    tag: doc.tag,
  });

  const mapQuestion = (subject: SubjectIndexRow & Ids, question: RawQuestion) => ({
    kind: 'question' as const,
    subject_slug: subject.slug,
    subject_name: subject.name,
    subject_emoji: subject.emoji,
    accent: subject.accent,
    slug: question.slug,
    num: question.num,
    title: question.title,
    tag: question.status || question.note,
  });

  if (kind === 'question') {
    return runSearch(chunks, mapQuestion, (chunk) => chunk.questions, query, limit);
  }
  if (kind === 'doc') {
    return runSearch(chunks, mapDoc, (chunk) => chunk.docs, query, limit);
  }

  const [docHits, questionHits] = await Promise.all([
    runSearch(chunks, mapDoc, (chunk) => chunk.docs, query, limit),
    runSearch(chunks, mapQuestion, (chunk) => chunk.questions, query, limit),
  ]);
  const hits = [...docHits, ...questionHits];
  hits.sort((a, b) => {
    const aScore = a.snippet.includes('<mark>') ? 1 : 0;
    const bScore = b.snippet.includes('<mark>') ? 1 : 0;
    return bScore - aScore;
  });
  return hits.slice(0, limit);
}

export function hasFts(): boolean {
  return true;
}
