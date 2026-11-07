import type { Metadata } from 'next';
import Link from 'next/link';
import { getSubjects } from '@/lib/db';
import { DocsOverview, StatsRow } from '@/components/Overview';
import SearchForm from '@/components/SearchForm';
import SiteFooter from '@/components/SiteFooter';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Kho tài liệu',
};

export default function DocsHubPage() {
  const subjects = getSubjects();

  return (
    <>
      <header className="site-header">
        <span className="eyebrow">Kho tài liệu</span>
        <h1>📂 Danh Sách Môn Học (Tài Liệu)</h1>
        <p>Chọn môn để mở toàn bộ chuyên đề, giáo trình và bảng từ khóa.</p>
      </header>

      <div className="toolbar">
        <Link href="/" className="btn">
          🏠 Trang chủ
        </Link>
        <Link href="/homework" className="btn">
          📚 Sang Bài Tập Về Nhà
        </Link>
        <span className="spacer" />
        <Link href="/search" className="btn">
          🔍 Tìm kiếm
        </Link>
      </div>

      <SearchForm />
      <StatsRow subjects={subjects} />
      <DocsOverview subjects={subjects} />
      <SiteFooter />
    </>
  );
}
