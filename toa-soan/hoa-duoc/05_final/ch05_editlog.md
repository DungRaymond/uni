# Nhật ký Biên tập Chuẩn hóa (S5A Edit Log) · Chương 05

- **Chế độ xuất bản:** `Mode A — Per-chapter standardization (REVIEW DRAFT)`
- **Dự án:** Hóa vô cơ dược – Master Lecture Notes
- **Chương:** Chương 05 — Lực liên phân tử & Liên kết hydro
- **Đầu vào:** `03_chapters/ch05_draft.md` (đã qua S4 QA Vòng 1 `04_qa/ch05_qa_r1.md` với phán quyết **PASS WITH CONDITIONS**, `Critical = 0`, `Major = 0`, `Minor = 2`; Gate B Ch05 được coi là duyệt theo lệnh "duyệt hết")
- **Đầu ra:**
  - `05_final/ch05_std_review.md`
  - `05_final/MLN_HoaVoCoDuoc_Ch05_v2.0_review.md` (bản sao byte-identical)
- **Ngày thực hiện:** 2026-11-09
- **Người thực hiện:** Subagent `editor` (Stage S5A, Mode A)

---

## A. Bảng ánh xạ `T-ID` → Số mục cuối

Toàn bộ **26** mã `T-ID` trên tiêu đề của `03_chapters/ch05_draft.md` đã được thay thế bằng hệ thống đánh số phân cấp chính thức của Chương 5 (tối đa 4 cấp). Không còn chuỗi `{T-...}` nào trong đầu ra.

| STT | Mã `T-ID` | Số mục chính thức | Cấp |
|---|---|---|---|
| 1 | `T-05.1` | `5.1` | Cấp 2 |
| 2 | `T-05.1.1` | `5.1.1` | Cấp 3 |
| 3 | `T-05.1.2` | `5.1.2` | Cấp 3 |
| 4 | `T-05.2` | `5.2` | Cấp 2 |
| 5 | `T-05.2.1` | `5.2.1` | Cấp 3 |
| 6 | `T-05.3` | `5.3` | Cấp 2 |
| 7 | `T-05.3.1` | `5.3.1` | Cấp 3 |
| 8 | `T-05.4` | `5.4` | Cấp 2 |
| 9 | `T-05.4.1` | `5.4.1` | Cấp 3 |
| 10 | `T-05.4.1.1` | `5.4.1.1` | Cấp 4 |
| 11 | `T-05.4.1.2` | `5.4.1.2` | Cấp 4 |
| 12 | `T-05.4.1.3` | `5.4.1.3` | Cấp 4 |
| 13 | `T-05.4.1.4` | `5.4.1.4` | Cấp 4 |
| 14 | `T-05.4.2` | `5.4.2` | Cấp 3 |
| 15 | `T-05.4.2.1` | `5.4.2.1` | Cấp 4 |
| 16 | `T-05.4.2.2` | `5.4.2.2` | Cấp 4 |
| 17 | `T-05.4.2.3` | `5.4.2.3` | Cấp 4 |
| 18 | `T-05.4.3` | `5.4.3` | Cấp 3 |
| 19 | `T-05.4.3.1` | `5.4.3.1` | Cấp 4 |
| 20 | `T-05.4.3.2` | `5.4.3.2` | Cấp 4 |
| 21 | `T-05.4.3.3` | `5.4.3.3` | Cấp 4 |
| 22 | `T-05.5` | `5.5` | Cấp 2 |
| 23 | `T-05.5.1` | `5.5.1` | Cấp 3 |
| 24 | `T-05.5.2` | `5.5.2` | Cấp 3 |
| 25 | `T-05.5.3` | `5.5.3` | Cấp 3 |
| 26 | `T-05.5.4` | `5.5.4` | Cấp 3 |
| 27 | `T-05.6` | `5.6` | Cấp 2 |
| 28 | `T-05.6.1` | `5.6.1` | Cấp 3 |
| 29 | `T-05.6.2` | `5.6.2` | Cấp 3 |
| 30 | `T-05.7` | `5.7` | Cấp 2 |
| 31 | `T-05.7.1` | `5.7.1` | Cấp 3 |
| 32 | `T-05.7.2` | `5.7.2` | Cấp 3 |
| 33 | `T-05.7.3` | `5.7.3` | Cấp 3 |
| 34 | `T-05.7.4` | `5.7.4` | Cấp 3 |
| 35 | `T-05.8` | `5.8` | Cấp 2 |
| 36 | `T-05.8.1` | `5.8.1` | Cấp 3 |

---

## B. Bảng nhật ký chỉnh sửa chuẩn hóa & phi-typographic

| # | Vị trí | Trước | Sau | Lý do |
|---|---|---|---|---|
| 1 | `5.1.1` | "vẫn tồn tại các lực hút yếu,rile qua khoảng cách" | "vẫn tồn tại các lực hút yếu, giảm theo khoảng cách" | Sửa `QA-05.01` (Minor): lỗi gõ "rile". |
| 2 | `5.4.3.1` | "Ổn định đại phân tử sinh cheveux" | "Ổn định đại phân tử sinh học" | Sửa `QA-05.02` (Minor): lỗi chính tả "cheveux". |

---

## C. Bảng các thẻ `[VERIFY]` còn giữ lại (REVIEW DRAFT)

Tất cả **8 thẻ `[VERIFY]`** đều được giữ lại (không gỡ bất kỳ thẻ nào), vì tất cả các V-ID còn Open theo quyết định Gate A:

| V-ID | Số thẻ | Vị trí | Lý do giữ |
|---|---|---|---|
| `V-05.01` | 1 | `5.1.1` | Tên chương chưa chốt (chờ MANIFEST) |
| `V-05.02` | 1 | `5.5.3` | Sơ đồ Mermaid cần chuyên gia xác nhận |
| `V-05.03` | 1 | `5.5.4` (Hình 5.3) | Cấu trúc phân tử cần vẽ hình |
| `V-05.04` | 1 | `5.7.4` Câu 8 | Dữ kiện liên kết hydro nước |
| `V-05.05` | 4 | `5.8.1` | Tài liệu tham khảo giáo trình (`APPROVED_REFERENCE_LIST: none`) |
| **TOTAL** | **8** | | |

Bản đầu ra là **REVIEW DRAFT** (còn 8 thẻ `[VERIFY]`), không phải CLEAN RELEASE.

---

## D. Đề xuất chỉnh sửa nội dung (Recommended Content Changes)

Các điểm từ mục H của `04_qa/ch05_qa_r1.md` — chưa sửa trong S5A:
1. Xác nhận tên chương chính thức (`V-05.01`).
2. Chuyên gia xác nhận sơ đồ Mermaid phân loại tương tác (`V-05.02`).
3. Cần vẽ 3 khung `[FIGURE]` (Hình 5.1–5.3).
4. Cung cấp tài liệu tham khảo giáo trình (`V-05.05`).

---

## E. Chưa kiểm chứng / Giới hạn

- 8 thẻ `[VERIFY]` chưa giải quyết.
- 3 khung `[FIGURE]` chưa vẽ.
- Tên chương tạm thời.
- Không có `APPROVED_REFERENCE_LIST`.
