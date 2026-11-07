import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <span>Cổng Y Dược · Next.js + SQLite · dữ liệu trong <code>data/uni.db</code></span>
      <span>
        <Link href="/docs">Tài liệu</Link>
        {' · '}
        <Link href="/homework">Bài tập</Link>
        {' · '}
        <Link href="/search">Tìm kiếm</Link>
      </span>
    </footer>
  );
}
