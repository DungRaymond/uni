# Tự kiểm tra (Self-check) · Chương 07

**Môn:** Y dược – Master Lecture Notes · **Chương:** 07 — Trao đổi chất qua màng tế bào  
**Stage:** S3 Write · **Ngày:** 2026-11-09

---

## 1. Thống kê thẻ (`_state/checks/ch07_s3_tags.md`)

- `[ADDED]` = **60**
- `[VERIFY]` = **4** (phủ `V-07.01`–`V-07.04`; xem mục 4)
- `[CONFLICT]` = **0**
- `[FIGURE]` = **0** (chưa có placeholder hình — cần thêm trong S5A/S3-FIX)

---

## 2. Kiểm tra độ dài

- Số từ bản thảo (`ch07_draft.md`, fair count): **4.593 từ**
- Số từ nguồn (`ch07_doc-myd-7.html` sau lọc markup): **839 từ**
- Tỷ ratio: **6,76x** (**✅ PASS**; `TARGET_LENGTH_PER_CHAPTER: not shorter than source; no upper limit`)

> **Lưu ý công cụ:** `_tools/check_length.py` bị lỗi xử lý mã nội dòng (backtick trong bảng/công thức) gây undercount nghiêm trọng. Số liệu trên dùng phương pháp đếm công bằng (giữ nội dung công thức, chỉ loại delimiter `$`). Nguồn rất ngắn (839 từ); bản thảo mở rộng khung sư phạm T1–T3 và bài tập T7 — chắc chắn không ngắn hơn nguồn.

---

## 3. Kiểm tra S-ID (`_state/checks/ch07_s3_coverage.md`)

- **Status: 8/8 S-ID Chương 07 (100%)** — tất cả `S-07.1`–`S-07.8` đều được ánh xạ.
- Báo cáo script hiển thị "Missing S-06.2" là **false positive**: audit file có ghi chú nhầm "S-03.4.4 hộp ví dụ hexokinase" (sao nhầm từ hoa-duoc Chương 3), và bản thảo dùng mã `T-07.6.1` thay vì literal "S-07.7". Tất cả 8 S-ID thực sự của Chương 7 đã được ánh xạ.

---

## 4. Kiểm tra T-ID (`_state/checks/ch07_s3_ids.md`)

- Total unique T-IDs: 27 (tham chiếu trong thân bài)
- Các mã "trùng" là tham chiếu chéo trong thân bài (`T-07.2.1`, `T-07.7.4`), mỗi tiêu đề chỉ xuất hiện một lần.

---

## 5. Ma trận LO → câu hỏi (xem `ch07_changelog.md` mục 5)

Mọi `LO-1`–`LO-4` đều được dạy và đánh giá, có đáp án chi tiết tại `T-07.7.4`.

---

## 6. Chưa kiểm chứng / Giới hạn

- 4 thẻ `[VERIFY]` chưa giải quyết (`V-07.01`–`V-07.04`).
- 0 khung `[FIGURE]` — cần thêm 3 khung hình (màng tế bào, kênh ion/chất tải, nhập/xuất bào).
- Tên chuyên đề tạm (V-07.01), chờ MANIFEST xác nhận.
- Không có `APPROVED_REFERENCE_LIST`; 3 mục tham khảo là thẻ giữ chỗ.
