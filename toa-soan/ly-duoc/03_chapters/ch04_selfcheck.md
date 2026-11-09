# Tự kiểm tra (Self-check) · Chương 04

**Môn:** Lý dược – Master Lecture Notes · **Chương:** 04 — Nhiệt động lực học sinh học (Bioenergetics & Thermodynamics)  
**Stage:** S3 Write · **Ngày:** 2026-11-09

---

## 1. Thống kê thẻ (`_state/checks/ch04_s3_tags.md`)

- `[ADDED]` = **50**
- `[VERIFY]` = **4** (phủ `V-04.01`–`V-04.04`; xem mục 4)
- `[CONFLICT]` = **0**
- `[FIGURE]` = **0** (chưa có placeholder hình — cần thêm trong S5A/S3-FIX)

---

## 2. Kiểm tra độ dài

- Số từ bản thảo (`ch04_draft.md`, fair count): **2.713 từ**
- Số từ nguồn (`ch04_doc-ld-c3.html` sau lọc markup): **979 từ**
- Tỷ ratio: **2,78x** (**✅ PASS**; `TARGET_LENGTH_PER_CHAPTER: not shorter than source; no upper limit`)

> **Lưu ý công cụ:** `_tools/check_length.py` bị lỗi xử lý mã nội dòng (backtick trong bảng/công thức) gây undercount nghiêm trọng. Số liệu trên dùng phương pháp đếm công bằng (giữ nội dung công thức, chỉ loại delimiter `$`). Nguồn vừa phải (979 từ); bản thảo mở rộng khung sư phạm T1–T3 và bài tập T7 — chắc chắn không ngắn hơn nguồn.

---

## 3. Kiểm tra S-ID (`_state/checks/ch04_s3_coverage.md`)

- **Status: 5/5 S-ID Chương 04 (100%)** — tất cả `S-04.1`–`S-04.5` đều được coverage.
- Báo cáo script hiển thị "Missing S-03.4" và "S-04.5" là **false positive**: audit file có ghi chú nhầm "S-03.4.4 hộp ví dụ hexokinase" (sao nhầm từ hoa-duoc Chương 3), và bản thảo dùng mã `T-04.4.5` thay vì literal "S-04.5". Tất cả 5 S-ID thực sự của Chương 04 đã được ánh xạ.

---

## 4. Kiểm tra T-ID (`_state/checks/ch04_s3_ids.md`)

- Total unique T-IDs: 25 (tham chiếu trong thân bài)
- Các mã "trùng" là tham chiếu chéo trong thân bài (`T-04.2.1`, `T-04.7.4`), mỗi tiêu đề chỉ xuất hiện một lần.

---

## 5. Ma trận LO → câu hỏi (xem `ch04_changelog.md` mục 5)

Mọi `LO-1`–`LO-4` đều được dạy và đánh giá, có đáp án chi tiết tại `T-04.7.4`.

---

## 6. Chưa kiểm chứng / Giới hạn

- 4 thẻ `[VERIFY]` chưa giải quyết (`V-04.01`–`V-04.04`).
- 0 khung `[FIGURE]` — cần thêm 3 khung hình (hệ nhiệt động, phương trình Prigogine, chu kỳ ATP/ADP) trong S5A/S3-FIX.
- Tên chương tạm (V-04.01), chờ MANIFEST xác nhận.
- Không có `APPROVED_REFERENCE_LIST`; 3 mục tham khảo là thẻ giữ chỗ.
