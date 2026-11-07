# QUY TẮC QUẢN LÝ & GIẢI BÀI TẬP (NEXT.JS + SQLITE)

Dự án đã chuyển từ các file HTML tĩnh sang **Next.js (App Router) + SQLite**.
Nội dung không còn nằm trong `.html` nữa mà nằm trong `data/uni.db`
(app đọc snapshot JSON chia theo môn: `data/index.json` + `data/content/<môn>.json`
— tự sinh sau mỗi lần đổi dữ liệu).

---

## 1. Kiến trúc

| Thành phần | Vị trí | Vai trò |
|---|---|---|
| Database | `data/uni.db` | Nguồn nội dung chính (subjects, docs, questions, meta, FTS5) |
| Snapshot | `data/index.json` + `data/content/` | JSON app đọc khi build/chạy (1 file/môn) |
| Nhập liệu | `scripts/ingest.mjs` | Trích xuất `legacy/*.html` → DB (tự export) |
| Thêm thủ công | `scripts/add-doc.mjs` | Thêm 1 chuyên đề / bài tập (tự export) |
| Xuất JSON | `scripts/export-data.mjs` | uni.db → index.json + content/<môn>.json |
| Truy vấn | `lib/db.ts` | Đọc snapshot môn qua dynamic import; tìm kiếm không dấu |
| Giao diện | `app/`, `components/` | Trang chủ, tài liệu, bài tập, tìm kiếm |
| HTML gốc | `legacy/` | Chỉ để tham chiếu hoặc nhập lại |

### Bảng dữ liệu

- `subjects(slug, name, emoji, accent, accent_soft, description, …)`
- `docs(subject_id, slug, num, title, tag, body_html, text, is_glossary, sort)`
- `questions(subject_id, slug, num, title, status, note, body_html, text, sort)`
- `docs_fts`, `questions_fts` — tìm kiếm FTS5 (không phân biệt dấu)

> **QUY TẮC TIẾT KIỆM TOKEN:** Khi thêm/sửa nội dung của môn nào, chỉ đọc và ghi
> đúng bản ghi của môn đó (`subject_id` tương ứng). Không đọc `legacy/` nếu không cần.

---

## 2. Quy trình thêm bài tập / chuyên đề

1. Soạn nội dung dưới dạng **HTML fragment** (đúng class có sẵn, xem mục 3) và lưu
   vào `/tmp/opencode/body.html`.
2. Chèn vào DB:
   ```bash
   node scripts/add-doc.mjs question --subject ly-duoc \
     --title "Tiêu đề bài tập" --note "Ghi chú ngắn" \
     --status "✅ Hoàn thành" --file /tmp/opencode/body.html
   ```
   hoặc với tài liệu:
   ```bash
   node scripts/add-doc.mjs doc --subject hoa-duoc \
     --title "Chuyên đề 9: …" --tag "Nhãn" --file /tmp/opencode/body.html
   ```
3. Xác nhận dữ liệu:
   ```bash
   node -e "const{DatabaseSync}=require('node:sqlite');const d=new DatabaseSync('data/uni.db');console.table(d.prepare('SELECT slug,num,title FROM questions ORDER BY subject_id,sort').all())"
   ```
   `add-doc` tự chạy export, nên chỉ cần `npm run build` lại để thay đổi xuất hiện.
   Nếu đổi DB bằng tay: chạy `npm run export` trước khi build.

### Deploy Vercel

```bash
npx vercel --prod   # hoặc git push nếu kết nối GitHub
```

`data/index.json` + `data/content/<môn>.json` được static/dynamic import nên
deploy không cần file DB trên server. Sau khi đổi nội dung: chạy `npm run export`
(tự động với `add-doc`) rồi deploy lại.

4. Trả lời ngắn gọn trên chat kèm đường dẫn:
   - Tài liệu: `/docs/<slug>#<doc-slug>`
   - Bài tập: `/homework/<slug>#<q-slug>`
   - Nếu dev server chạy: `http://localhost:3000/...`

Bộ đếm (badge môn, số mục ở hub) **tự tính từ DB** — không cần sửa tay.

### Nhập lại toàn bộ từ HTML cũ

```bash
npm run db:reset     # XOÁ DB và nhập lại legacy/*.html
```

Lưu ý: `db:reset` làm mất các mục đã thêm bằng `add-doc.mjs`.

---

## 3. Quy cách nội dung HTML trong `body_html`

Dùng đúng các class của design system (`app/globals.css`):

- Tiêu đề mục: `<h4>…</h4>`, tiêu đề phụ `<h5>…</h5>`
- Công thức: `<div class="formula-box">$$…$$</div>`
- Ví dụ: `<div class="example-box"><div class="example-title">🔎 Ví dụ — …</div>…</div>`
- Ghi nhớ: `<div class="callout"><div class="callout-title">Cách nhớ</div>…</div>`
- Bảng: `<div class="table-responsive"><table class="data-table">…</table></div>`
- Hình: `<figure class="doc-fig"><a href="/images/x.png"><img src="/images/x.png" alt=""></a><figcaption><span class="fig-tag">Hình 1</span>…</figcaption></figure>`

Quy ước:

- Tiếng Việt, mức sinh viên Dược, số thập phân dùng dấu phẩy.
- MathJax: `$...$`, `$$...$$`. **Không** dùng `\xrightleftharpoons`; dùng
  `\overset{\text{Xúc tác}}{\rightleftharpoons}`.
- Ảnh phải nằm trong `public/images/`, đường dẫn bắt đầu bằng `/images/`.

---

## 4. Giao diện

- `.container` luôn **80vw** (92vw khi màn hình ≤ 1024px).
- Màu chủ đạo lấy theo môn qua biến `--accent` / `--accent-soft` / `--primary`.
- Thẻ nội dung dùng accordion (`CardReader`), có mục lục, mở rộng/thu gọn tất cả.
- Deep-link `#slug` tự mở đúng thẻ và cuộn tới; link từ khóa (`#kw-…`) cũng vậy.
- Từ khóa trong bảng glossary được tự động gắn link vào phần thân bài (client-side).

---

## 5. Phản hồi trên chat

- **Không** dán toàn bộ nội dung bài làm ra chat.
- Chỉ nêu: đã thêm gì, đã lưu vào DB, link để mở.
- Nêu rõ nếu cần chạy `npm run dev` (hoặc `npm run build && npm start`).
