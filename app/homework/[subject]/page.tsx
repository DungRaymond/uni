import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getQuestions, getSubject } from '@/lib/db';
import CardReader from '@/components/CardReader';
import SiteFooter from '@/components/SiteFooter';

export const dynamic = 'force-dynamic';

type Params = { params: Promise<{ subject: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { subject: slug } = await params;
  const subject = await getSubject(slug);
  return { title: subject ? `${subject.name} — Bài tập` : 'Không tìm thấy môn học' };
}

export default async function SubjectHomeworkPage({ params }: Params) {
  const { subject: slug } = await params;
  const subject = await getSubject(slug);
  if (!subject) notFound();

  const questions = await getQuestions(subject.slug);
  const style = {
    '--accent': subject.accent,
    '--accent-soft': subject.accent_soft,
    '--primary': subject.accent,
  } as CSSProperties;

  return (
    <div style={style}>
      <header className="site-header">
        <span className="eyebrow">Bài tập · {subject.question_count} lời giải</span>
        <h1>
          {subject.emoji} Bài tập môn {subject.name}
        </h1>
        <p>Đề bài và lời giải chi tiết, kèm công thức và ví dụ minh họa.</p>
      </header>

      <CardReader
        kind="question"
        backHref="/homework"
        backLabel="⬅️ Danh Sách Môn Học (Bài Tập)"
        extraHref={`/docs/${subject.slug}`}
        extraLabel="📂 Sang Tài Liệu Môn Học"
        items={questions.map((question) => ({
          slug: question.slug,
          num: question.num,
          title: question.title,
          tag: question.status,
          bodyHtml: question.body_html,
        }))}
        emptyText="Môn này chưa có bài tập"
      />

      <div className="action-row" style={{ marginTop: 20 }}>
        <Link href="/" className="btn">
          🏠 Trang chủ
        </Link>
        <Link href="/search?kind=question" className="btn">
          🔍 Tìm trong bài tập
        </Link>
      </div>

      <SiteFooter />
    </div>
  );
}
