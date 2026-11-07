export default function SearchForm({ defaultValue = '' }: { defaultValue?: string }) {
  return (
    <form className="search-bar" action="/search" method="get" role="search">
      <input
        type="search"
        name="q"
        defaultValue={defaultValue}
        placeholder="Tìm chuyên đề, công thức, từ khóa… (ví dụ: nhiệt hóa học, Poiseuille, thận)"
        aria-label="Tìm kiếm tài liệu và bài tập"
      />
      <button type="submit" className="btn btn-primary btn-lg">
        🔍 Tìm kiếm
      </button>
    </form>
  );
}
