import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getSubjects } from '@/lib/db';
import { HomeworkOverview } from '@/components/Overview';
import SiteFooter from '@/components/SiteFooter';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Bài tập về nhà',
};

export default function HomeworkHubPage() {
  const subjects = getSubjects();
  const style = { '--accent': '#6d28d9', '--accent-soft': '#ddd6fe', '--primary': '#6d28d9' } as CSSProperties;
  const total = subjects.reduce((sum, subject) => sum + subject.question_count, 0);

  return (
    <div style={style}>
      <header className="site-header">
        <span className="eyebrow">Bài tập · {total} lời giải</span>
        <h1>📝 Quản Lý &amp; Lời Giải Bài Tập Về Nhà</h1>
        <p>Chọn môn để xem toàn bộ câu hỏi và lời giải chi tiết.</p>
      </header>

      <div className="toolbar">
        <Link href="/" className="btn">
          🏠 Trang chủ
        </Link>
        <Link href="/docs" className="btn">
          📂 Danh Sách Môn Học (Tài Liệu)
        </Link>
        <span className="spacer" />
        <Link href="/search?kind=question" className="btn">
          🔍 Tìm trong bài tập
        </Link>
      </div>

      <HomeworkOverview subjects={subjects} />

      <div style={{ marginTop: 24 }}>
        <details className="toc">
          <summary className="toc-title" style={{ cursor: 'pointer' }}>
            📌 Hướng dẫn sử dụng
          </summary>
          <ul style={{ margin: '10px 0 0 20px', fontSize: '0.9rem', color: '#334155' }}>
            <li>Nhấn vào tiêu đề câu hỏi hoặc dùng mục lục để mở lời giải.</li>
            <li>Đường dẫn có thể chia sẻ trực tiếp, ví dụ <code>/homework/ly-duoc#q1</code>.</li>
            <li>
              Muốn thêm bài mới: cập nhật cơ sở dữ liệu rồi chạy <code>npm run db:reset</code>.
            </li>
          </ul>
        </details>
      </div>

      <SiteFooter />
    </div>
  );
}
