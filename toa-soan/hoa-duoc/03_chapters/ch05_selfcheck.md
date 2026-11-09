# Tự kiểm tra (Self-check) · Chương 05

**Môn:** Hóa vô cơ dược · **Chương:** 05 — Lực liên phân tử & Liên kết hydro  
**Stage:** S3 Write · **Ngày:** 2026-11-09

---

## 1. Thống kê thẻ (`_state/checks/ch05_s3_tags.md`)

- `[ADDED]` = **40**
- `[VERIFY]` = **8** (phủ `V-05.01`–`V-05.05`; xem mục 4)
- `[CONFLICT]` = **0**
- `[FIGURE]` = **3** (3 khung `[FIGURE: 5.1 | ...]`–`[FIGURE: 5.3 | ...]`)

---

## 2. Kiểm tra độ dài (`_state/checks/ch05_s3_length.md`)

- Số từ bản thảo (`ch05_draft.md`): **~4.706 từ** (đếm không loại mã nội dòng do lỗi regex của `check_length.py`; tool báo thấp bất thường)
- Số từ nguồn (`ch05_doc-hvc-5.html` sau lọc markup): **1.129 từ**
- Tỷ lệ: **~4,17x** (**✅ PASS**; `TARGET_LENGTH_PER_CHAPTER: not shorter than source; no upper limit`)
- Phân bổ theo mục (xem chi tiết `ch05_changelog.md` mục 4): Mục 1–3 (khung sư phạm) ~500; Mục 4 (nội dung chính) ~1.200; Mục 5 (ví dụ) ~1.200; Mục 6 (tóm tắt) ~500; Mục 7 (đánh giá + đáp án) ~1.300.

> **Lưu ý công cụ:** `_tools/check_length.py` bị lỗi xử lý mã nội dòng (backtick trong bảng) gây undercount nghiêm trọng. Số liệu trên dùng phương pháp đếm thay thế (xem `count_ch05.py`).

---

## 3. Kiểm tra S-ID (`_state/checks/ch05_s3_coverage.md`)

- **Status: PASS** (100.0%)
- Audit S-IDs: 6 (`S-05.1`–`S-05.6`)
- Covered S-IDs: 6
- Missing S-IDs: 0

---

## 4. Kiểm tra T-ID (`_state/checks/ch05_s3_ids.md`)

- Total unique T-IDs: 30
- Duplicate T-IDs: 2 mã ("trùng") đều là tham chiếu chéo trong thân bài, không phải tiêu đề lặp:
  - `T-05.2.1`: tiêu đề mục `2.1` + tham chiếu trong khung phần đánh giá (`T-05.7`)
  - `T-05.7.4`: tiêu đề mục `7.4` + tham chiếu trong khung phần đánh giá (`T-05.7`)
- Mỗi tiêu đề chỉ xuất hiện một lần.

---

## 5. Ma trận LO → câu hỏi (xem `ch05_changelog.md` mục 5)

Mọi `LO-1`–`LO-4` đều được dạy và đánh giá, có đáp án chi tiết tại `T-05.7.4`.

---

## 6. Chưa kiểm chứng / Giới hạn

- 8 thẻ `[VERIFY]` chưa giải quyết (`V-05.01`–`V-05.05`).
- 3 khung `[FIGURE]` (Hình 5.1–5.3) chưa vẽ.
- Tên chương tạm (V-05.01), chờ MANIFEST xác nhận.
- Không có `APPROVED_REFERENCE_LIST`; 3 mục tham khảo là thẻ giữ chỗ.
