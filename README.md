# Cổng Y Dược — Next.js + SQLite

Cổng học tập cá nhân cho 3 môn **Lý - Dược**, **Modul Y - Dược**, **Hóa Vô cơ - Dược**.
Toàn bộ nội dung cũ (HTML) đã được trích xuất vào **SQLite**; website render từ database.

## Chạy

```bash
npm install
npm run ingest     # chỉ chạy lần đầu, tạo data/uni.db từ legacy/
npm run dev        # http://localhost:3000
```

Bản production:

```bash
npm run build
npm start
```

## Cấu trúc

```
app/
  page.tsx                    Trang chủ: tài liệu + bài tập + tìm kiếm
  docs/page.tsx               Danh sách môn (tài liệu)
  docs/[subject]/page.tsx     Đọc toàn bộ chuyên đề của một môn
  homework/page.tsx           Danh sách môn (bài tập)
  homework/[subject]/page.tsx Đọc toàn bộ bài giải của một môn
  search/page.tsx             Tìm kiếm toàn văn (FTS5)
  api/search/route.ts         API JSON: /api/search?q=...
components/
  CardReader.tsx              Accordion + mục lục + MathJax + link từ khóa
  SubjectPanel.tsx            Khối môn học thu gọn/mở rộng
  Overview.tsx                Khối thống kê & danh sách môn
lib/db.ts                     Truy vấn SQLite (node:sqlite)
scripts/ingest.mjs            Trích xuất legacy/*.html → data/uni.db
scripts/add-doc.mjs           Thêm chuyên đề / bài tập mới
data/uni.db                   Database (nguồn nội dung chính)
public/images/                Ảnh minh họa (dien-sinh-*.png)
legacy/                       HTML gốc — chỉ để tham chiếu / nhập lại
```

## Cơ sở dữ liệu

Các bảng: `subjects`, `docs`, `questions`, `meta`, cùng 2 bảng FTS5
(`docs_fts`, `questions_fts`).

- `docs.body_html` giữ nguyên HTML gốc (đã chuẩn hóa link nội bộ).
- `docs.text` / `questions.text` là bản text dùng cho tìm kiếm.
- Tìm kiếm không phân biệt dấu nhờ tokenizer `unicode61 remove_diacritics 2`.

Xem nhanh dữ liệu:

```bash
node -e "const {DatabaseSync}=require('node:sqlite');const db=new DatabaseSync('data/uni.db');console.table(db.prepare('SELECT subject_id,slug,num,title FROM docs').all())"
```

Thêm nội dung mới:

```bash
node scripts/add-doc.mjs doc --subject hoa-duoc --title "Chuyên đề 9: ..." --tag "..." --file body.html
node scripts/add-doc.mjs question --subject ly-duoc --title "..." --file loi-giai.html
```

## Ghi chú

- Nếu sửa trực tiếp file HTML trong `legacy/`, chạy `npm run db:reset` để nhập lại
  (sẽ **xoá** các mục đã thêm bằng `add-doc`).
- Ảnh minh họa đặt tại `public/images/`, tên `dien-sinh-1.png` … `dien-sinh-6.png`.
  Thiếu ảnh thì trang hiện khung chờ, không hiện icon lỗi.
- MathJax tải từ CDN jsDelivr; cần mạng khi xem công thức.
