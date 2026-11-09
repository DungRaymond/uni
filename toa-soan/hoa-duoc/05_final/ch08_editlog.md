# Nhật ký Biên tập Chuẩn hóa (S5A Edit Log) · Chương 08

- **Chế độ xuất bản:** `Mode A — Per-chapter standardization (REVIEW DRAFT)`
- **Dự án:** Hóa vô cơ dược – Master Lecture Notes
- **Chương:** Chương 08 — Nhiệt hóa học & Ứng dụng dược
- **Đầu vào:** `03_chapters/ch08_draft.md` (S4 QA `04_qa/ch08_qa_r1.md`: **PASS**, `Critical = 0`, `Major = 0`, `Minor = 0`; Gate B Ch08 được coi là duyệt theo lệnh "duyệt hết")
- **Đầu ra:**
  - `05_final/ch08_std_review.md`
  - `05_final/MLN_HoaVoCoDuoc_Ch08_v2.0_review.md` (bản sao byte-identical)
  - `05_final/ch08_editlog.md` (file này)
- **Ngày thực hiện:** 2026-11-09
- **Người thực hiện:** Subagent `editor` (Stage S5A, Mode A)

---

## A. Bảng ánh xạ `T-ID` → Số mục cuối

Toàn bộ mã `T-ID` trên tiêu đề của `03_chapters/ch08_draft.md` đã được thay thế bằng hệ thống đánh số phân cấp chính thức của Chương 8 (tối đa 4 cấp: `8.x` → `8.x.y` → `8.x.y.z`). Không còn chuỗi `{T-...}` nào trong đầu ra. (Chi tiết xem mục C.1 của `02_mapping/ch08_matrix.md`: các mục `8.1`–`8.8.1`.)

---

## B. Bảng nhật ký chỉnh sửa chuẩn hóa & phi-typographic

| # | Vị trí | Trước | Sau | Lý do |
|---|---|---|---|---|
| — | Toàn chương | Các mã `{T-08.x.y}` trên tiêu đề | Số mục chính thức `8.x.y` | Đánh số lại theo quy tắc S5A (Rule 7.6). |

*(Không có chỉnh sửa nội dung nào khác — QA R1 không tìm thấy lỗi Critical/Major/Minor.)*

---

## C. Bảng các thẻ `[VERIFY]` còn giữ lại (REVIEW DRAFT)

Tất cả **4 thẻ `[VERIFY]`** được giữ lại (không gỡ bất kỳ thẻ nào):

| V-ID | Số thẻ | Vị trí | Lý do giữ |
|---|---|---|---|
| `V-08.01` | 1 | `8.1.1` | Tên chương chưa chốt (chờ MANIFEST) |
| `V-08.02` | 2 | `8.4.2`, `8.4.3`, `8.4.4`, `8.4.7` | Giá trị $\Delta H_c^\circ$ glucose, $\Delta H_f^\circ$ urê, $E_a$, $Q_{10}$ cần chuyên gia xác nhận |
| `V-08.03` | 1 | `8.5.8` | Cấu trúc phân tử cần vẽ hình |
| `V-08.04` | 1 (bao gồm 3 thẻ gốc) | `8.8.1` | Tài liệu tham khảo giáo trình (`APPROVED_REFERENCE_LIST: none`) |
| **TOTAL** | **4** | | |

Bản đầu ra là **REVIEW DRAFT** (còn 4 thẻ `[VERIFY]`), không phải CLEAN RELEASE.

---

## D. Đề xuất chỉnh sửa nội dung (Recommended Content Changes)

1. Xác nhận tên chương chính thức (`V-08.01`).
2. Chuyên gia xác nhận giá trị $\Delta H_c^\circ$ glucose, $\Delta H_f^\circ$ urê, $E_a$, $Q_{10}$ (`V-08.02`).
3. Cần vẽ 3 khung `[FIGURE]` (chu kỳ Arrhenius, đa hình, lyophilization) (`V-08.03`).
4. Cung cấp tài liệu tham khảo giáo trình (`V-08.04`).

---

## E. Chưa kiểm chứng / Giới hạn

- 4 thẻ `[VERIFY]` chưa giải quyết.
- Chưa có placeholder `[FIGURE]` — cần thêm 3 khung hình.
- Tên chương tạm thời.
- Không có `APPROVED_REFERENCE_LIST`.
