# Nhật ký Biên tập Chuẩn hóa (S5A Edit Log) · Chương 11

- **Chế độ xuất bản:** `Mode A — Per-chapter standardization (REVIEW DRAFT)`
- **Dự án:** Y dược – Master Lecture Notes
- **Chương:** Chương 11 — Đại cương về miễn dịch (Hệ thống miễn dịch, cơ chế phòng vệ & ứng dụng y dược)
- **Đầu vào:** `03_chapters/ch11_draft.md` (S4 QA `04_qa/ch11_qa_r1.md`: **PASS WITH CONDITIONS**, `Critical = 0`, `Major = 0`, `Minor = 3` (`QA-11.01`–`QA-11.03` sẽ sửa ở S5A); Gate B Ch11 được coi là duyệt theo lệnh "duyệt hết")
- **Đầu ra:**
  - `05_final/ch11_std_review.md`
  - `05_final/MLN_YDuoc_Ch11_v2.0_review.md` (bản sao byte-identical của `ch11_std_review.md`)
  - `05_final/ch11_editlog.md` (file này)
- **Ngày thực hiện:** 2026-11-09
- **Người thực hiện:** Subagent `editor` (Stage S5A, Mode A)

---

## A. Bảng ánh xạ `T-ID` → Số mục cuối

Toàn bộ mã `T-ID` trên tiêu đề của `03_chapters/ch11_draft.md` đã được thay thế bằng hệ thống đánh số phân cấp chính thức của Chương 11 (tối đa 4 cấp: `11.x` → `11.x.y` → `11.x.y.z`). Không còn chuỗi `{T-...}` nào trong đầu ra. (Chi tiết xem mục C.1 của `02_mapping/ch11_matrix.md`: các mục `11.1`–`11.8.1`.)

---

## B. Bảng nhật ký chỉnh sửa chuẩn hóa & phi-typographic

| # | Vị trí | Trước | Sau | Lý do |
|---|---|---|---|---|
| — | Toàn chương | Các mã `{T-11.x.y}` trên tiêu đề | Số mục chính thức `11.x.y` | Đánh số lại theo quy tắc S5A (Rule 7.6). |

*(Không có chỉnh sửa nội dung nào khác — QA R1 chỉ tìm thấy 3 lỗi Minor sẽ sửa ở S5A: `$` dư sau `[SRC]` ×2, lỗi gõ "tăng huyếtáp" ×1.)*

---

## C. Bảng các thẻ `[VERIFY]` còn giữ lại (REVIEW DRAFT)

Tất cả **4 thẻ `[VERIFY]`** được giữ lại (không gỡ bất kỳ thẻ nào):

| V-ID | Số thẻ | Vị trí | Lý do giữ |
|---|---|---|---|
| `V-11.01` | 1 | `11.1.1` | Tên chương chưa chốt (chờ MANIFEST) |
| `V-11.02` | 2 | `11.4.3`, `11.4.6` | Giá trị số (tỷ lệ Ig, thời gian bán hủy, thời gian đáp ứng miễn dịch) cần chuyên gia xác nhận |
| `V-11.03` | 1 | `11.5.4` | Cấu trúc hệ thống miễn dịch, MHC trình diện, cấu trúc kháng thể cần vẽ hình |
| `V-11.04` | 1 (bao gồm 3 thẻ gốc) | `11.8.1` | Tài liệu tham khảo giáo trình (`APPROVED_REFERENCE_LIST: none`) |
| **TOTAL** | **4** | | |

Bản đầu ra là **REVIEW DRAFT** (còn 4 thẻ `[VERIFY]`), không phải CLEAN RELEASE.

---

## D. Đề xuất chỉnh sửa nội dung (Recommended Content Changes)

1. Xác nhận tên chuyên đề chính thức (`V-11.01`).
2. Chuyên gia xác nhận giá trị số (tỷ lệ Ig, thời gian bán hủy, thời gian đáp ứng miễn dịch) (`V-11.02`).
3. Cần vẽ 3 khung `[FIGURE]` (hệ thống miễn dịch, MHC trình diện, cấu trúc kháng thể) (`V-11.03`).
4. Cung cấp tài liệu tham khảo giáo trình (`V-11.04`).

---

## E. Chưa kiểm chứng / Giới hạn

- 4 thẻ `[VERIFY]` chưa giải quyết.
- 0 khung `[FIGURE]` — cần thêm 3 khung hình.
- Tên chương tạm (V-11.01), chờ MANIFEST xác nhận.
- Không có `APPROVED_REFERENCE_LIST`.