# Nhật ký Biên tập Chuẩn hóa (S5A Edit Log) · Chương 10

- **Chế độ xuất bản:** `Mode A — Per-chapter standardization (REVIEW DRAFT)`
- **Dự án:** Y dược – Master Lecture Notes
- **Chương:** Chương 10 — Dịch cơ thể, cân bằng nước và rối loạn thường gặp
- **Đầu vào:** `03_chapters/ch10_draft.md` (S4 QA `04_qa/ch10_qa_r1.md`: **PASS WITH CONDITIONS**, `Critical = 0`, `Major = 0`, `Minor = 3` (`QA-10.01`–`QA-10.03` sẽ sửa ở S5A); Gate B Ch10 được coi là duyệt theo lệnh "duyệt hết")
- **Đầu ra:**
  - `05_final/ch10_std_review.md`
  - `05_final/MLN_YDuoc_Ch10_v2.0_review.md` (bản sao byte-identical của `ch10_std_review.md`)
  - `05_final/ch10_editlog.md` (file này)
- **Ngày thực hiện:** 2026-11-09
- **Người thực hiện:** Subagent `editor` (Stage S5A, Mode A)

---

## A. Bảng ánh xạ `T-ID` → Số mục cuối

Toàn bộ mã `T-ID` trên tiêu đề của `03_chapters/ch10_draft.md` đã được thay thế bằng hệ thống đánh số phân cấp chính thức của Chương 10 (tối đa 4 cấp: `10.x` → `10.x.y` → `10.x.y.z`). Không còn chuỗi `{T-...}` nào trong đầu ra. (Chi tiết xem mục C.1 của `02_mapping/ch10_matrix.md`: các mục `10.1`–`10.8.1`.)

---

## B. Bảng nhật ký chỉnh sửa chuẩn hóa & phi-typographic

| # | Vị trí | Trước | Sau | Lý do |
|---|---|---|---|---|
| — | Toàn chương | Các mã `{T-10.x.y}` trên tiêu đề | Số mục chính thức `10.x.y` | Đánh số lại theo quy tắc S5A (Rule 7.6). |

*(Không có chỉnh sửa nội dung nào khác — QA R1 chỉ tìm thấy 3 lỗi Minor sẽ sửa ở S5A: `$` dư sau `[SRC]` ×2, lỗi gõ "tăng huyếtáp" ×1.)*

---

## C. Bảng các thẻ `[VERIFY]` còn giữ lại (REVIEW DRAFT)

Tất cả **4 thẻ `[VERIFY]`** được giữ lại (không gỡ bất kỳ thẻ nào):

| V-ID | Số thẻ | Vị trí | Lý do giữ |
|---|---|---|---|
| `V-10.01` | 1 | `10.1.1` | Tên chương chưa chốt (chờ MANIFEST) |
| `V-10.02` | 2 | `10.4.2`, `10.5.1` | Giá trị osmolality (275–295 mOsm/kg), TBW, natri máu cần chuyên gia xác nhận |
| `V-10.03` | 1 | `10.5.4` | Cấu trúc phân bố khoang dịch, cơ chế ADH/RAA, trao đổi dịch mao mạch cần vẽ hình |
| `V-10.04` | 1 (bao gồm 3 thẻ gốc) | `10.8.1` | Tài liệu tham khảo giáo trình (`APPROVED_REFERENCE_LIST: none`) |
| **TOTAL** | **4** | | |

Bản đầu ra là **REVIEW DRAFT** (còn 4 thẻ `[VERIFY]`), không phải CLEAN RELEASE.

---

## D. Đề xuất chỉnh sửa nội dung (Recommended Content Changes)

1. Xác nhận tên chuyên đề chính thức (`V-10.01`).
2. Chuyên gia xác nhận giá trị osmolality (275–295 mOsm/kg), TBW, natri máu (`V-10.02`).
3. Cần vẽ 3 khung `[FIGURE]` (phân bố khoang dịch, cơ chế ADH/RAA, trao đổi dịch mao mạch) (`V-10.03`).
4. Cung cấp tài liệu tham khảo giáo trình (`V-10.04`).

---

## E. Chưa kiểm chứng / Giới hạn

- 4 thẻ `[VERIFY]` chưa giải quyết.
- 0 khung `[FIGURE]` — cần thêm 3 khung hình.
- Tên chương tạm (V-10.01), chờ MANIFEST xác nhận.
- Không có `APPROVED_REFERENCE_LIST`.