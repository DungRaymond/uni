# Tự kiểm tra (Self-check) · Chương 01

**Môn:** Lý dược – Master Lecture Notes · **Chương:** 01 — Nhiệt động học sinh học & Động học chất lưu trong hệ tuần hoàn  
**Stage:** S3 Write · **Ngày:** 2026-11-09

---

## 1. Thống kê thẻ (`_state/checks/ch01_s3_tags.md`)

- `[ADDED]` = **43**
- `[VERIFY]` = **4** (phủ `V-01.01`–`V-01.04`; xem mục 4)
- `[CONFLICT]` = **0**
- `[FIGURE]` = **0** (chưa có placeholder hình — cần thêm trong S5A/S3-FIX)

---

## 2. Kiểm tra độ dài

- Số từ bản thảo (`ch01_draft.md`, fair count): **3.578 từ**
- Số từ nguồn (`ch01_doc-ld-1.html` sau lọc markup): **554 từ**
- Tỷ lệ: **6,46x** (**✅ PASS**; `TARGET_LENGTH_PER_CHAPTER: not shorter than source; no upper limit`)

> **Lưu ý công cụ:** `_tools/check_length.py` bị lỗi xử lý mã nội dòng (backtick trong bảng/công thức) gây undercount nghiêm trọng. Số liệu trên dùng phương pháp đếm công bằng (giữ nội dung công thức, chỉ loại delimiter `$`). Nguồn rất ngắn (554 từ); bản thảo mở rộng khung sư phạm T1–T3 và bài tập T7 — chắc chắn không ngắn hơn nguồn.

---

## 3. Kiểm tra S-ID (`_state/checks/ch01_s3_coverage.md`)

- **Status: PASS** (100.0%)
- Audit S-IDs: 3 (`S-01.1`–`S-01.3`)
- Covered S-IDs: 3
- Missing S-IDs: 0

---

## 4. Kiểm tra T-ID (`_state/checks/ch01_s3_ids.md`)

- Total unique T-IDs: 24 (tham chiếu trong thân bài)
- Các mã "trùng" là tham chiếu chéo trong thân bài (`T-01.2.1`, `T-01.7.4`), mỗi tiêu đề chỉ xuất hiện một lần.

---

## 5. Ma trận LO → câu hỏi (xem `ch01_changelog.md` mục 5)

Mọi `LO-1`–`LO-4` đều được dạy và đánh giá, có đáp án chi tiết tại `T-01.7.4`.

---

## 6. Chưa kiểm chứng / Giới hạn

- 4 thẻ `[VERIFY]` chưa giải quyết (`V-01.01`–`V-01.04`).
- 0 khung `[FIGURE]` — cần thêm 3 khung hình (hệ mở, dòng tầng/xoáy, sức cản r⁴) trong S5A/S3-FIX.
- Tên chuyên đề tạm (V-01.01), chờ MANIFEST xác nhận.
- Không có `APPROVED_REFERENCE_LIST`; 3 mục tham khảo là thẻ giữ chỗ.
