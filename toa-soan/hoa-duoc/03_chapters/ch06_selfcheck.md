# Tự kiểm tra (Self-check) · Chương 06

**Môn:** Hóa vô cơ dược · **Chương:** 06 — Hóa học phối trí & Ứng dụng dược  
**Stage:** S3 Write · **Ngày:** 2026-11-09

---

## 1. Thống kê thẻ (`_state/checks/ch06_s3_tags.md`)

- `[ADDED]` = **62**
- `[VERIFY]` = **6** (phủ `V-06.01`–`V-06.04`; xem mục 4)
- `[CONFLICT]` = **0**
- `[FIGURE]` = **3** (3 khung `[FIGURE: 6.1 | ...]`–`[FIGURE: 6.3 | ...]`)

---

## 2. Kiểm tra độ dài

- Số từ bản thảo (`ch06_draft.md`, fair count giữ nội dung công thức): **8.324 từ**
- Số từ nguồn (`ch06_doc-hvc-5.html`... số bản `ch06_doc-hvc-6.html` sau lọc markup): **5.050 từ**
- Tỷ lệ: **1,65x** (**✅ PASS**; `TARGET_LENGTH_PER_CHAPTER: not shorter than source; no upper limit`)

> **Lưu ý công cụ:** `_tools/check_length.py` bị lỗi xử lý mã nội dòng (backtick trong bảng/công thức) gây undercount nghiêm trọng (báo ~4.348 từ). Số liệu trên dùng phương pháp đếm công bằng (giữ nội dung công thức, chỉ loại delimiter `$`). Bản thảo bảo toàn toàn bộ nội dung nguồn (9/9 S-ID) plus khung sư phạm, bài tập, tóm tắt, đáp án, tài liệu tham khảo — chắc chắn không ngắn hơn nguồn.

---

## 3. Kiểm tra S-ID (`_state/checks/ch06_s3_coverage.md`)

- **Status: PASS** (100.0%)
- Audit S-IDs: 9 (`S-06.1`–`S-06.9`)
- Covered S-IDs: 9
- Missing S-IDs: 0

---

## 4. Kiểm tra T-ID (`_state/checks/ch06_s3_ids.md`)

- Total unique T-IDs: 35 (tham chiếu trong thân bài)
- Duplicate T-IDs: 2 mã ("trùng") đều là tham chiếu chéo trong thân bài, không phải tiêu đề lặp:
  - `T-06.2.1`: tiêu đề mục `2.1` + tham chiếu trong phần đánh giá (`T-06.7`)
  - `T-06.7.4`: tiêu đề mục `7.4` + tham chiếu trong khung phần đánh giá (`T-06.7`)
- Mỗi tiêu đề chỉ xuất hiện một lần.

---

## 5. Ma trận LO → câu hỏi (xem `ch06_changelog.md` mục 5)

Mọi `LO-1`–`LO-4` đều được dạy và đánh giá, có đáp án chi tiết tại `T-06.7.4`.

---

## 6. Chưa kiểm chứng / Giới hạn

- 6 thẻ `[VERIFY]` chưa giải quyết (`V-06.01`–`V-06.04`).
- 3 khung `[FIGURE]` (Hình 6.1–6.3) chưa vẽ.
- Tên chương tạm (V-06.01), chờ MANIFEST xác nhận.
- Không có `APPROVED_REFERENCE_LIST`; 3 mục tham khảo là thẻ giữ chỗ.
