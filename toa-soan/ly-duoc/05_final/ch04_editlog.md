# Nhật ký Biên tập Chuẩn hóa (S5A Edit Log) · Chương 04

- **Chế độ xuất bản:** `Mode A — Per-chapter standardization (REVIEW DRAFT)`
- **Dự án:** Lý dược – Master Lecture Notes
- **Chương:** Chương 04 — Nhiệt động lực học sinh học (Bioenergetics & Thermodynamics)  
- **Đầu vào:** `03_chapters/ch04_draft.md` (S4 QA `04_qa/ch04_qa_r1.md`: **PASS**, `Critical = 0`, `Major = 0`, `Minor = 0`; Gate B Ch04 được coi là duyệt theo lệnh "duyệt hết")
- **Đầu ra:**
  - `05_final/ch04_std_review.md`
  - `05_final/MLN_LyDuoc_Ch04_v2.0_review.md` (bản sao byte-identical của `ch04_std_review.md`)
  - `05_final/ch04_editlog.md` (file này)
- **Ngày thực hiện:** 2026-11-09
- **Người thực hiện:** Subagent `editor` (Stage S5A, Mode A)

---

## A. Bảng ánh xạ `T-ID` → Số mục cuối

Toàn bộ mã `T-ID` trên tiêu đề của `03_chapters/ch04_draft.md` đã được thay thế bằng hệ thống đánh số phân cấp chính thức của Chương 04 (tối đa 4 cấp: `4.x` → `4.x.y` → `4.x.y.z`). Không còn chuỗi `{T-...}` nào trong đầu ra. (Chi tiết xem mục C.1 của `02_mapping/ch04_matrix.md`: các mục `4.1`–`4.8.1`.)

---

## B. Bảng nhật ký chỉnh sửa chuẩn hóa & phi-typographic

| # | Vị trí | Trước | Sau | Lý do |
|---|---|---|---|---|
| — | Toàn chương | Các mã `{T-04.x.y}` trên tiêu đề | Số mục chính thức `4.x.y` | Đánh số lại theo quy tắc S5A (Rule 7.6). |

*(Không có chỉnh sửa nội dung nào khác — QA R1 không tìm thấy lỗi Critical/Major/Minor.)*

---

## C. Bảng các thẻ `[VERIFY]` còn giữ lại (REVIEW DRAFT)

Tất cả **4 thẻ `[VERIFY]`** được giữ lại (không gỡ bất kỳ thẻ nào):

| V-ID | Số thẻ | Vị trí | Lý do giữ |
|---|---|---|---|
| `V-04.01` | 1 | `4.1.1` | Tên chương chưa chốt (chờ MANIFEST) |
| `V-04.02` | 2 | `4.4.4`, `4.5.1` | Giá trị $\Delta G^{\circ\prime} \approx -30,5\text{ kJ/mol}$, $\Delta G_1 = +16,7$, $\Delta G_2 = -30,5$, $\Delta G_{tổng} = -13,8\text{ kJ/mol}$ cần chuyên gia xác nhận |
| `V-04.03` | 1 | `4.5.4` | Cấu trúc phân tử cần vẽ hình |
| `V-04.04` | 1 (bao gồm 3 thẻ gốc) | `4.8.1` | Tài liệu tham khảo giáo trình (`APPROVED_REFERENCE_LIST: none`) |
| **TOTAL** | **4** | | |

Bản đầu ra là **REVIEW DRAFT** (còn 4 thẻ `[VERIFY]`), không phải CLEAN RELEASE.

---

## D. Đề xuất chỉnh sửa nội dung (Recommended Content Changes)

1. Xác nhận tên chương chính thức (`V-04.01`).
2. Chuyên gia xác nhận giá trị $\Delta G^{\circ\prime} \approx -30,5\text{ kJ/mol}$, $\Delta G_1 = +16,7$, $\Delta G_2 = -30,5$, $\Delta G_{tổng} = -13,8\text{ kJ/mol}$ (`V-04.02`).
3. Cần vẽ 3 khung `[FIGURE]` (hệ nhiệt động, phương trình Prigogine, chu kỳ ATP/ADP) (`V-04.03`).
4. Cung cấp tài liệu tham khảo giáo trình (`V-04.04`).

---

## E. Chưa kiểm chứng / Giới hạn

- 4 thẻ `[VERIFY]` chưa giải quyết.
- 0 khung `[FIGURE]` — cần thêm 3 khung hình.
- Tên chương tạm thời.
- Không có `APPROVED_REFERENCE_LIST`.
