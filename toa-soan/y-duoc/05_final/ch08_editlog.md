# Nhật ký Biên tập Chuẩn hóa (S5A Edit Log) · Chương 08

- **Chế độ xuất bản:** `Mode A — Per-chapter standardization (REVIEW DRAFT)`
- **Dự án:** Y dược – Master Lecture Notes
- **Chương:** Chương 08 — Điện thế màng và điện thế hoạt động
- **Đầu vào:** `03_chapters/ch08_draft.md` (S4 QA `04_qa/ch08_qa_r1.md`: **PASS WITH CONDITIONS**, `Critical = 0`, `Major = 0`, `Minor = 3` (`QA-08.01`–`QA-08.03` sẽ sửa ở S5A); Gate B Ch08 được coi là duyệt theo lệnh "duyệt hết")
- **Đầu ra:**
  - `05_final/ch08_std_review.md`
  - `05_final/MLN_YDuoc_Ch08_v2.0_review.md` (bản sao byte-identical của `ch08_std_review.md`)
  - `05_final/ch08_editlog.md` (file này)
- **Ngày thực hiện:** 2026-11-09
- **Người thực hiện:** Subagent `editor` (Stage S5A, Mode A)

---

## A. Bảng ánh xạ `T-ID` → Số mục cuối

Toàn bộ mã `T-ID` trên tiêu đề của `03_chapters/ch08_draft.md` đã được thay thế bằng hệ thống đánh số phân cấp chính thức của Chương 08 (tối đa 4 cấp: `8.x` → `8.x.y` → `8.x.y.z`). Không còn chuỗi `{T-...}` nào trong đầu ra. (Chi tiết xem mục C.1 của `02_mapping/ch08_matrix.md`: các mục `8.1`–`8.8.1`.)

---

## B. Bảng nhật ký chỉnh sửa chuẩn hóa & phi-typographic

| # | Vị trí | Trước | Sau | Lý do |
|---|---|---|---|---|
| — | Toàn chương | Các mã `{T-08.x.y}` trên tiêu đề | Số mục chính thức `8.x.y` | Đánh số lại theo quy tắc S5A (Rule 7.6). |

*(Không có chỉnh sửa nội dung nào khác — QA R1 chỉ tìm thấy 3 lỗi Minor sẽ sửa ở S5A: `$` dư sau `[SRC]` ×3.)*

---

## C. Bảng các thẻ `[VERIFY]` còn giữ lại (REVIEW DRAFT)

Tất cả **4 thẻ `[VERIFY]`** được giữ lại (không gỡ bất kỳ thẻ nào):

| V-ID | Số thẻ | Vị trí | Lý do giữ |
|---|---|---|---|
| `V-08.01` | 1 | `8.1.1` | Tên chương chưa chốt (chờ MANIFEST) |
| `V-08.02` | 2 | `8.4.1`, `8.5.1` | Giá trị điện thế nghỉ (−70 mV), điện thế hoạt động (+30 mV), $E_K$ (−95 mV) cần chuyên gia xác nhận |
| `V-08.03` | 1 | `8.5.4` | Cấu trúc điện thế màng & điện thế hoạt động cần vẽ hình |
| `V-08.04` | 1 (bao gồm 3 thẻ gốc) | `8.8.1` | Tài liệu tham khảo giáo trình (`APPROVED_REFERENCE_LIST: none`) |
| **TOTAL** | **4** | | |

Bản đầu ra là **REVIEW DRAFT** (còn 4 thẻ `[VERIFY]`), không phải CLEAN RELEASE.

---

## D. Đề xuất chỉnh sửa nội dung (Recommended Content Changes)

1. Xác nhận tên chương chính thức (`V-08.01`).
2. Chuyên gia xác nhận giá trị điện thế nghỉ (−70 mV), điện thế hoạt động (+30 mV), $E_K$ (−95 mV) (`V-08.02`).
3. Cần vẽ 3 khung `[FIGURE]` (điện thế màng, kênh ion Na⁺/K⁺, điện thế hoạt động cơ tim) (`V-08.03`).
4. Cung cấp tài liệu tham khảo giáo trình (`V-08.04`).

---

## E. Chưa kiểm chứng / Giới hạn

- 4 thẻ `[VERIFY]` chưa giải quyết.
- 0 khung `[FIGURE]` — cần thêm 3 khung hình.
- Tên chương tạm (V-08.01), chờ MANIFEST xác nhận.
- Không có `APPROVED_REFERENCE_LIST`.