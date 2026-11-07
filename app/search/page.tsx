import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { search, type SearchHit } from '@/lib/db';
import SearchForm from '@/components/SearchForm';
import SiteFooter from '@/components/SiteFooter';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = { title: 'Tìm kiếm' };

type SearchParams = Promise<{ q?: string; kind?: string }>;

const FILTERS: { key: 'all' | 'doc' | 'question'; label: string }[] = [
  { key: 'all', label: 'Tất cả' },
  { key: 'doc', label: '📂 Tài liệu' },
  { key: 'question', label: '📝 Bài tập' },
];

function hrefFor(hit: SearchHit) {
  return hit.kind === 'doc'
    ? `/docs/${hit.subject_slug}#${hit.slug}`
    : `/homework/${hit.subject_slug}#${hit.slug}`;
}

export default async function SearchPage({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const q = (params.q ?? '').trim();
  const kind = (['all', 'doc', 'question'] as const).find((value) => value === params.kind) ?? 'all';
  const results = q ? search(q, kind, 60) : [];

  return (
    <>
      <header className="site-header">
        <span className="eyebrow">Tra cứu toàn văn</span>
        <h1>🔍 Tìm kiếm tài liệu &amp; bài tập</h1>
        <p>
          Tìm theo tiêu đề, nội dung, công thức hoặc từ khóa. Không phân biệt chữ hoa/thường và có thể
          gõ không dấu.
        </p>
      </header>

      <SearchForm defaultValue={q} />

      <div className="toolbar" style={{ marginTop: -6 }}>
        <div className="search-filters">
          {FILTERS.map((filter) => {
            const query = new URLSearchParams();
            if (q) query.set('q', q);
            if (filter.key !== 'all') query.set('kind', filter.key);
            const href = `/search${query.toString() ? `?${query.toString()}` : ''}`;
            return (
              <Link key={filter.key} href={href} className={kind === filter.key ? 'active' : ''}>
                {filter.label}
              </Link>
            );
          })}
        </div>
        <span className="spacer" />
        <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
          {q ? `${results.length} kết quả` : 'Nhập từ khóa để bắt đầu'}
        </span>
      </div>

      {!q ? (
        <div className="empty-state">
          <strong>Bạn muốn tìm gì?</strong>
          Thử <Link href="/search?q=nhiệt+hóa+học">nhiệt hóa học</Link>,{' '}
          <Link href="/search?q=Poiseuille">Poiseuille</Link>,{' '}
          <Link href="/search?q=huyết+áp">huyết áp</Link> hoặc{' '}
          <Link href="/search?q=polymorph">polymorph</Link>.
        </div>
      ) : results.length === 0 ? (
        <div className="empty-state">
          <strong>Không tìm thấy kết quả cho “{q}”</strong>
          Thử từ khóa ngắn hơn, gõ không dấu, hoặc chuyển bộ lọc sang “Tất cả”.
        </div>
      ) : (
        <>
          {results.map((hit) => (
            <Link
              key={`${hit.kind}-${hit.slug}`}
              href={hrefFor(hit)}
              className="search-result"
              style={
                {
                  '--accent': hit.accent,
                  '--accent-soft': `${hit.accent}1a`,
                } as CSSProperties
              }
            >
              <div className="result-meta">
                <span className="result-kind">{hit.kind === 'doc' ? 'TÀI LIỆU' : 'BÀI TẬP'}</span>
                <span>
                  {hit.subject_emoji} {hit.subject_name}
                </span>
                <span>#{hit.slug}</span>
              </div>
              <h3>{hit.title}</h3>
              <p dangerouslySetInnerHTML={{ __html: hit.snippet || '' }} />
            </Link>
          ))}
        </>
      )}

      <SiteFooter />
    </>
  );
}
