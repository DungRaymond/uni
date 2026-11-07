import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getDocs, getSubject } from '@/lib/db';
import CardReader from '@/components/CardReader';
import SiteFooter from '@/components/SiteFooter';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

type Params = { params: Promise<{ subject: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { subject: slug } = await params;
  const subject = getSubject(slug);
  return { title: subject ? `${subject.name} — Tài liệu` : 'Không tìm thấy môn học' };
}

export default async function SubjectDocsPage({ params }: Params) {
  const { subject: slug } = await params;
  const subject = getSubject(slug);
  if (!subject) notFound();

  const docs = getDocs(subject.id);
  const style = {
    '--accent': subject.accent,
    '--accent-soft': subject.accent_soft,
    '--primary': subject.accent,
  } as CSSProperties;

  return (
    <div style={style}>
      <header className="site-header">
        <span className="eyebrow">Kho tài liệu · {subject.doc_count} tài liệu</span>
        <h1>
          {subject.emoji} Môn: {subject.name}
        </h1>
        <p>{subject.description}</p>
      </header>

      <CardReader
        kind="doc"
        backHref="/docs"
        backLabel="⬅️ Danh Sách Môn Học (Tài Liệu)"
        extraHref={subject.question_count > 0 ? `/homework/${subject.slug}` : undefined}
        extraLabel={subject.question_count > 0 ? `📚 Sang Bài Tập (${subject.question_count})` : undefined}
        items={docs.map((doc) => ({
          slug: doc.slug,
          num: doc.num,
          title: doc.title,
          tag: doc.tag,
          bodyHtml: doc.body_html,
          isGlossary: doc.is_glossary === 1,
        }))}
        emptyText="Môn này chưa có chuyên đề"
      />

      <div className="action-row" style={{ marginTop: 20 }}>
        <Link href="/" className="btn">
          🏠 Trang chủ
        </Link>
        <Link href="/search" className="btn">
          🔍 Tìm trong toàn bộ tài liệu
        </Link>
      </div>

      <SiteFooter />
    </div>
  );
}
