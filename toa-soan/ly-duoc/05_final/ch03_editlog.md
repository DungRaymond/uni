# Nhật ký Biên tập Chuẩn hóa (S5A Edit Log) · Chương 03

- **Chế độ xuất bản:** `Mode A — Per-chapter standardization (REVIEW DRAFT)`
- **Dự án:** Lý dược – Master Lecture Notes
- **Chương:** Chương 03 — Bức xạ & Quang phổ học ứng dụng trong kiểm nghiệm thuốc  
- **Đầu vào:** `03_chapters/ch03_draft.md` (S4 QA `04_qa/ch03_qa_r1.md`: **PASS**, `Critical = 0`, `Major = 0`, `Minor = 0`; Gate B Ch03 được coi là duyệt theo lệnh "duyệt hết")
- **Đầu ra:**
  - `05_final/ch03_std_review.md`
  - `05_final/MLN_LyDuoc_Ch03_v2.0_review.md` (bản sao byte-identical của `ch03_std_review.md`)
  - `05_final/ch03_editlog.md` (file này)
- **Ngày thực hiện:** 2026-11-09
- **Người thực hiện:** Subagent `editor` (Stage S5A, Mode A)

---

## A. Bảng ánh xạ `T-ID` → Số mục cuối

Toàn bộ mã `T-ID` trên tiêu đề của `03_chapters/ch03_draft.md` đã được thay thế bằng hệ thống đánh số phân cấp chính thức của Chương 03 (tối đa 4 cấp: `3.x` → `3.x.y` → `3.x.y.z`). Không còn chuỗi `{T-...}` nào trong đầu ra. (Chi tiết xem mục C.1 của `02_mapping/ch03_matrix.md`: các mục `3.1`–`3.8.1`.)

---

## B. Bảng nhật ký chỉnh sửa chuẩn hóa & phi-typographic

| # | Vị trí | Trước | Sau | Lý do |
|---|---|---|---|---|
| — | Toàn chương | Các mã `{T-03.x.y}` trên tiêu đề | Số mục chính thức `3.x.y` | Đánh số lại theo quy tắc S5A (Rule 7.6). |

*(Không có chỉnh sửa nội dung nào khác — QA R1 không tìm thấy lỗi Critical/Major/Minor.)*

---

## C. Bảng các thẻ `[VERIFY]` còn giữ lại (REVIEW DRAFT)

Tất cả **4 thẻ `[VERIFY]`** được giữ lại (không gỡ bất kỳ thẻ nào):

| V-ID | Số thẻ | Vị trí | Lý do giữ |
|---|---|---|---|
| `V-03.01` | 1 | `3.1.1` | Tên chuyên đề chưa chốt (chờ MANIFEST) |
| `V-03.02` | 2 | `3.4.1`, `3.5.1` | Giá trị $\varepsilon = 1,2\times10^4$, $A = 0,600$, $C = 5,0\times10^{-5}$ mol/L cần chuyên gia xác nhận |
| `V-03.03` | 1 | `3.5.4` | Cấu trúc phân tử cần vẽ hình |
| `V-03.04` | 1 (bao gồm 3 thẻ gốc) | `3.8.1` | Tài liệu tham khảo giáo trình (`APPROVED_REFERENCE_LIST: none`) |
| **TOTAL** | **4** | | |

Bản đầu ra là **REVIEW DRAFT** (còn 4 thẻ `[VERIFY]`), không phải CLEAN RELEASE.

---

## D. Đề xuất chỉnh sửa nội dung (Recommended Content Changes)

1. Xác nhận tên chuyên đề chính thức (`V-03.01`).
2. Chuyên gia xác nhận giá trị $\varepsilon = 1,2\times10^4$, $A = 0,600$, $C = 5,0\times10^{-5}$ mol/L (`V-03.02`).
3. Cần vẽ 3 khung `[FIGURE]` (Beer–Lambert, tia gamma, siêu âm) (`V-03.03`).
4. Cung cấp tài liệu tham khảo giáo trình (`V-03.04`).

---

## E. Chưa kiểm chứng / Giới hạn

- 4 thẻ `[VERIFY]` chưa giải quyết.
- 0 khung `[FIGURE]` — cần thêm 3 khung hình.
- Tên chuyên đề tạm thời.
- Không có `APPROVED_REFERENCE_LIST`.
