import Link from 'next/link';
import { getSubjects } from '@/lib/db';
import { DocsOverview, HomeworkOverview, StatsRow } from '@/components/Overview';
import SearchForm from '@/components/SearchForm';
import SiteFooter from '@/components/SiteFooter';

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  const subjects = await getSubjects();

  return (
    <>
      <header className="site-header">
        <span className="eyebrow">Cổng học tập · Y Dược</span>
        <h1>📚 Tài Liệu &amp; Bài Tập Y Dược</h1>
        <p>
          Giáo trình, chuyên đề, bảng từ khóa và lời giải bài tập của ba môn — tra cứu tức thì, không
          cần mở nhiều file.
        </p>
      </header>

      <SearchForm />
      <StatsRow subjects={subjects} />

      <div className="toc-head" style={{ marginBottom: 12 }}>
        <span className="toc-title">📂 Kho tài liệu &amp; giáo trình</span>
        <Link href="/docs" className="btn" style={{ padding: '4px 10px', fontSize: '0.78rem' }}>
          Xem trang riêng →
        </Link>
      </div>
      <DocsOverview subjects={subjects} />

      <div className="toc-head" style={{ margin: '30px 0 12px' }}>
        <span className="toc-title">📝 Bài tập về nhà &amp; lời giải</span>
        <Link href="/homework" className="btn" style={{ padding: '4px 10px', fontSize: '0.78rem' }}>
          Xem trang riêng →
        </Link>
      </div>
      <HomeworkOverview subjects={subjects} />

      <SiteFooter />
    </>
  );
}
