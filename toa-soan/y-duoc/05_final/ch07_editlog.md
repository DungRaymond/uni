# Nhật ký Biên tập Chuẩn hóa (S5A Edit Log) · Chương 07

- **Chế độ xuất bản:** `Mode A — Per-chapter standardization (REVIEW DRAFT)`
- **Dự án:** Y dược – Master Lecture Notes
- **Chương:** Chương 07 — Trao đổi chất qua màng tế bào
- **Đầu vào:** `03_chapters/ch07_draft.md` (S4 QA `04_qa/ch07_qa_r1.md`: **PASS**, `Critical = 0`, `Major = 0`, `Minor = 0`; Gate B Ch07 được coi là duyệt theo lệnh "duyệt hết")
- **Đầu ra:**
  - `05_final/ch07_std_review.md`
  - `05_final/MLN_LyDuoc_Ch07_v2.0_review.md` (bản sao byte-identical của `ch07_std_review.md`)
  - `05_final/ch07_editlog.md` (file này)
- **Ngày thực hiện:** 2026-11-09
- **Người thực hiện:** Subagent `editor` (Stage S5A, Mode A)

---

## A. Bảng ánh xạ `T-ID` → Số mục cuối

Toàn bộ mã `T-ID` trên tiêu đề của `03_chapters/ch07_draft.md` đã được thay thế bằng hệ thống đánh số phân cấp chính thức của Chương 07 (tối đa 4 cấp: `7.x` → `7.x.y` → `7.x.y.z`). Không còn chuỗi `{T-...}` nào trong đầu ra. (Chi tiết xem mục C.1 của `02_mapping/ch07_matrix.md`: các mục `7.1`–`7.8.1`.)

---

## B. Bảng nhật ký chỉnh sửa chuẩn hóa & phi-typographic

| # | Vị trí | Trước | Sau | Lý do |
|---|---|---|---|---|
| — | Toàn chương | Các mã `{T-07.x.y}` trên tiêu đề | Số mục chính thức `7.x.y` | Đánh số lại theo quy tắc S5A (Rule 7.6). |

*(Không có chỉnh sửa nội dung nào khác — QA R1 không tìm thấy lỗi Critical/Major/Minor.)*

---

## C. Bảng các thẻ `[VERIFY]` còn giữ lại (REVIEW DRAFT)

Tất cả **4 thẻ `[VERIFY]`** được giữ lại (không gỡ bất kỳ thẻ nào):

| V-ID | Số thẻ | Vị trí | Lý do giữ |
|---|---|---|---|
| `V-07.01` | 1 | `7.1.1` | Tên chuyên đề chưa chốt (chờ MANIFEST) |
| `V-07.02` | 2 | `7.4.1`, `7.5.1` | Giá trị điện thế nghỉ ($E_K \approx -95\text{ mV}$), tỷ số nồng độ ion cần chuyên gia xác nhận |
| `V-07.03` | 1 | `7.5.4` | Cấu trúc phân tử cần vẽ hình |
| `V-07.04` | 1 (bao gồm 3 thẻ gốc) | `7.8.1` | Tài liệu tham khảo giáo trình (`APPROVED_REFERENCE_LIST: none`) |
| **TOTAL** | **4** | | |

Bản đầu ra là **REVIEW DRAFT** (còn 4 thẻ `[VERIFY]`), không phải CLEAN RELEASE.

---

## D. Đề xuất chỉnh sửa nội dung (Recommended Content Changes)

1. Xác định tên chuyên đề chính thức (`V-07.01`).
2. Chuyên gia xác nhận giá trị điện thế nghỉ của kali ($E_K \approx -95\text{ mV}$), tỷ số nồng độ ion (`V-07.02`).
3. Cần vẽ 3 khung `[FIGURE]` (màng tế bào, kênh ion/chất tải, nhập/xuất bào) (`V-07.03`).
4. Cung cấp tài liệu tham khảo giáo trình (`V-07.04`).

---

## E. Chưa kiểm chứng / Giới hạn

- 4 thẻ `[VERIFY]` chưa giải quyết.
- 0 khung `[FIGURE]` — cần thêm 3 khung hình.
- Tên chuyên đề tạm (V-07.01), chờ MANIFEST xác nhận.
- Không có `APPROVED_REFERENCE_LIST`.
