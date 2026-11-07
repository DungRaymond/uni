# Cổng Y Dược — Next.js + SQLite

Cổng học tập cá nhân cho 3 môn **Lý - Dược**, **Modul Y - Dược**, **Hóa Vô cơ - Dược**.
Nội dung nằm trong SQLite (`data/uni.db`) khi làm việc nội bộ; app đọc bản
snapshot JSON chia theo từng môn (mỗi môn một file) nên chạy được bất kỳ đâu,
kể cả Vercel.

## Chạy

```bash
npm install
npm run ingest     # lần đầu: trích xuất legacy/*.html → data/uni.db + snapshot JSON
npm run dev        # http://localhost:3000
```

Bản production:

```bash
npm run build
npm start
```

### Deploy lên Vercel

```bash
npm run export     # đảm bảo data/index.json + data/content/*.json mới nhất
npx vercel --prod  # hoặc git push nếu kết nối GitHub
```

`data/index.json` + `data/content/<môn>.json` được **static/dynamic import** vào
server bundle — không cần node:sqlite hay file DB trên serverless. Trang môn chỉ
load đúng file JSON của môn mình; trang tìm kiếm mới gộp cả ba. Chỉnh sửa nội
dung → `npm run export` (tự chạy sau `ingest`/`add-doc`) → deploy lại.

## Cấu trúc

```
app/
  page.tsx                    Trang chủ: tài liệu + bài tập + tìm kiếm
  docs/page.tsx               Danh sách môn (tài liệu)
  docs/[subject]/page.tsx     Đọc toàn bộ chuyên đề của một môn
  homework/page.tsx           Danh sách môn (bài tập)
  homework/[subject]/page.tsx Đọc toàn bộ bài giải của một môn
  search/page.tsx             Tìm kiếm toàn văn (không phân biệt dấu)
  api/search/route.ts         API JSON: /api/search?q=...
components/
  CardReader.tsx              Accordion + mục lục + MathJax + link từ khóa
  Overview.tsx                Khối thống kê & danh sách môn
lib/db.ts                     Truy vấn dữ liệu (đọc index.json + content/<môn>.json)
scripts/ingest.mjs            Trích xuất legacy/*.html → data/uni.db (+ export)
scripts/add-doc.mjs           Thêm chuyên đề / bài tập (tự export)
scripts/export-data.mjs       uni.db → index.json + content/<môn>.json
data/uni.db                   Source-of-truth khi làm việc (node:sqlite)
data/index.json               Snapshot nhẹ: môn + tiêu đề (dùng cho hub)
data/content/<môn>.json       Snapshot đầy đủ từng môn (trang môn + search)
public/images/                Ảnh minh họa (dien-sinh-*.png)
legacy/                       HTML gốc — chỉ để tham chiếu / nhập lại
```

## Chỉnh sửa nội dung

**Cách thường dùng (khuyến nghị):** thao tác trên DB rồi export.

```bash
node scripts/add-doc.mjs doc --subject hoa-duoc \
  --title "Chuyên đề 9: ..." --tag "Nhãn" --file body.html

node scripts/add-doc.mjs question --subject ly-duoc \
  --title "..." --status "✅ Hoàn thành" --note "..." --file loi-giai.html
```

Cả hai lệnh đều tự chạy export nên snapshot JSON luôn đồng bộ.

**Nhập lại toàn bộ từ HTML cũ:** `npm run db:reset` (xoá DB và mọi mục thêm tay).

## Tìm kiếm

- Không phân biệt dấu, hoa/thường (`NHiet Hoa Hoc` ≡ `nhiệt hóa học`).
- Ưu tiên cụm từ nguyên vẹn, sau đó từng từ; snippet bôi đậm kết quả.
- Điểm: khớp tiêu đề cao hơn khớp nội dung.

## Ghi chú

- Ảnh minh họa: `public/images/`, tên `dien-sinh-1.png` … `dien-sinh-6.png`.
  Thiếu ảnh trang hiện khung chờ, không hiện icon lỗi.
- MathJax tải từ CDN jsDelivr; cần mạng khi xem công thức.
- `homework.md` trong `legacy/` là bảng theo dõi đã lịch sử; dữ liệu hiện sống
  trong DB (`questions.status`, `questions.note`).
