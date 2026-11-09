# ch07_qa_r1.md — S4 QA Vòng 1 · Chương 07 (Trao đổi chất qua màng tế bào)

**Môn:** Y dược – Master Lecture Notes · **Stage:** S4 Independent QA · **Ngày:** 2026-11-09  
**Reviewer:** độc lập (không phải tác giả) · **Bản thảo:** `03_chapters/ch07_draft.md` (291 dòng, ~4.593 từ)  
**Nguồn:** `00_source_original/ch07_doc-myd-7.html` (D-07) · **Ma trận:** `02_mapping/ch07_matrix.md`  
**Quy tắc:** `toa-soan_rules.md` mục 4 (R1–R12) & mục 7.5 (S4). Mọi trạng thái `[INTERNAL]` / `[EXTERNAL-KNOWLEDGE]`.

---

## A. Verdict

- **Kết luận thẩm định (Verdict):** **PASS WITH CONDITIONS**
- **Thống kê lỗi theo mức độ nghiêm trọng:** **Critical: 0** · **Major: 0** · **Minor: 5** (`QA-07.01`–`QA-07.05`)
- **Luận cứ (3–5 dòng):**
  - Bản thảo ~4.593 từ (5,48× nguồn 839 từ — nguồn rất ngắn; mở rộng khung sư pháp + bài tập, không vi phạm upper limit), phủ **8/8 S-ID** (100%), `REMOVE = 0`, không vi phạm `DOMAIN_RULES` (không bổ sung liều/chỉ định/PK).
  - Tính toán: Example 5.1 ($E_K = 61,5 \\times \\log_{10}(4/140) \\approx -95\\text{ mV}$ ✓), Bài tập 5 (khớp ✓), Bài tập 6 ($C=0,1\\mu\\text{F}$, $Q=7\\text{ nC}$, $E\\approx 9,3\\times 10^6\\text{ V/m}$ ✓), Bài tập 7 ($E_K^{trước}\\approx -95\\text{ mV}$, $E_K^{sau}\\approx -84,3\\text{ mV}$ ✓) — khớp 100%.
  - Chỉ còn 5 lỗi Minor (dấu `$` dư sau thẻ `[SRC]`, lỗi gõ, hàng trùng bảng, tham chiếu sai môn), không chặn Gate B. Nên sửa ở S5A, không cần mở vòng QA mới.

---

## B. Issue Table (vòng 1)

| Issue ID | T-ID | Category | Severity | Basis | Evidence (nguồn/đối chiếu vs. bản thảo, mỗi trích ≤25 từ) | Recommended correction | Return to author = Y/N |
|---|---|---|---|---|---|---|---|
| **QA-07.01** | `T-07.5.1` | Format / Typo | **Minor** | `[INTERNAL]` | Bản thảo (dòng 132): `[SRC: S-06.4]$` — ký hiệu `$` dư sau thẻ đóng, làm hỏng định dạng Markdown. | Xóa `$` dư: `[SRC: S-06.4]` | **N** (sửa ở S5A) |
| **QA-07.02** | `T-07.5.1` | Format / Typo | **Minor** | `[INTERNAL]` | Bản thảo (dòng 133): `[SRC: S-06.4]$` — ký hiệu `$` dư sau thẻ đóng. | Xóa `$` dư: `[SRC: S-06.4]` | **N** (sửa ở S5A) |
| **QA-07.03** | `T-07.7.1` | Style / Typo | **Minor** | `[INTERNAL]` | Bản thảo (dòng 193): "chất não ion" — từ "não" sai lề, khó hiểu. | Sửa thành "chất không ion" hoặc "chất non-ion". | **N** (sửa ở S5A) |
| **QA-07.04** | `T-07.6.2` | Format / Duplicate | **Minor** | `[INTERNAL]` | Bản thảo (dòng 172 & 177): Hàng "Điện thế cân bằng ion đơn lẻ" bị lặp lại 2 lần trong Bảng 7.1. | Gỡ bỏ hàng trùng (dòng 177). | **N** (sửa ở S5A) |
| **QA-07.05** | `T-07.1.2` | Cross-reference | **Minor** | `[INTERNAL]` | Bản thảo (dòng 18): "từ Chuyên đề 1 & Chương 4 ly-duoc" — tham chiếu sai môn (ly-duoc thay vì y-duoc). | Sửa thành "từ Chuyên đề 1 & Chương 4 y-duoc". | **N** (sửa ở S5A) |

---

## B2. Bảng đối chiếu các thẻ `[ADDED]` / `[VERIFY]`

| V-ID | Số thẻ | Vị trí | Trạng thái |
|---|---|---|---|
| `V-07.01` (tên chuyên đề) | 1 | `T-07.1.1` | Open — chờ MANIFEST xác nhận |
| `V-07.02` (điện thế nghỉ K⁺, tỷ số nồng độ) | 2 | `T-07.4.1`, `T-07.5.1` | Open — cần chuyên gia xác nhận |
| `V-07.03` (0 hình vẽ/sơ đồ) | 1 | `T-07.5.4` | Open — cần vẽ hình |
| `V-07.04` (0 tài liệu tham khảo, 3 mục) | 1 (chứa 3 thẻ gốc) | `T-07.8.1` | Open — `APPROVED_REFERENCE_LIST: none` |
| **TOTAL** | **4** | | |

---

## C. Coverage table

| S-ID | Nguồn | T-ID tiếp nhận | Trạng thái |
|---|---|---|---|
| S-07.1 | Cấu trúc màng và gradient | `T-07.4.1` | Preserved + Expanded |
| S-07.2 | Khuếch tán đơn giản & thẩm thấu | `T-07.4.2` | Preserved + Expanded |
| S-07.3 | Khuếch tán được hỗ trợ | `T-07.4.3` | Preserved + Expanded |
| S-07.4 | Vận chuyển chủ động sơ cấp | `T-07.4.4` | Preserved + Expanded |
| S-07.5 | Vận chuyển chủ động thứ cấp | `T-07.4.5` | Preserved + Expanded |
| S-07.6 | Nhập bào, xuất bào & vận chuyển qua biểu mô | `T-07.4.6` | Preserved + Expanded |
| S-07.7 | Liên hệ dược lý & lâm sàng | `T-07.4.7` | Preserved + Expanded |
| S-07.8 | Ý nghĩa và tác dụng | `T-07.6.1` | Merged |

**8/8 S-ID (100%), 0 missing.**

---

## D. Calculation table

| Mục | Giá trị bản thảo | Tái tính độc lập | Khớp? |
|---|---|---|---|
| Example 5.1 — điện thế cân bằng K⁺ | $E_K = 61,5 \\times \\log_{10}(4/140) \\approx -95\\text{ mV}$ | $-95\\text{ mV}$ | Yes |
| Bài tập 5 — điện thế cân bằng K⁺ | $E_K = 61,5 \\times \\log_{10}(4/140) \\approx -95\\text{ mV}$ | $-95\\text{ mV}$ | Yes |
| Bài tập 6 — điện dung/điện tích/cường độ trường | $C=0,1\\mu\\text{F}$, $Q=7\\text{ nC}$, $E\\approx 9,3\\times 10^6\\text{ V/m}$ | $0,1\\mu\\text{F}$, $7\\text{ nC}$, $9,3\\times 10^6\\text{ V/m}$ | Yes |
| Bài tập 7 — hạ kali máu | $E_K^{trước}\\approx -95\\text{ mV}$, $E_K^{sau}\\approx -84,3\\text{ mV}$ | $-95\\text{ mV}$, $-84,3\\text{ mV}$ | Yes |

**4/4 phép tính khớp.**

---

## E. Tag and Reference Audit

- `[ADDED]=60`, `[VERIFY]=4`, `[CONFLICT]=0`, `[FIGURE]=0`.
- Không có thẻ `[ADDED]` nào chứa dữ liệu mới bịa đặt (tất cả là khung sư phạm, ví dụ, bảng, bài tập — đã ghi lý do).
- 3 mục tham khảo tại `T-07.8.1` đều là `[VERIFY]` placeholder, không bịa tên sách/tác giả/năm. Tuân thủ R4.
- Không có tài liệu nào được khẳng định là tồn tại.
- Chưa có khung `[FIGURE]` — cần thêm 3 khung hình (`V-07.03`).

---

## F. Learning Objective Alignment Matrix

| LO | Được dạy tại | Được đánh giá tại | Câu hỏi | Đáp án |
|---|---|---|---|---|
| LO-1 | `4.1`–`4.5` | `7.1` | Câu 1–4 | Câu 1–4 |
| LO-2 | `4.1`, `4.2`, `4.4`, `4.5` | `7.2` | Bài tập 5–7 | Bài tập 5–7 |
| LO-3 | `4.1`, `4.3`, `4.4`, `4.5` | `7.2`, `7.3` | Bài tập 7, Câu 8–9 | Bài tập 7, Câu 8–9 |
| LO-4 | `4.1`, `4.3`, `4.4`, `4.5`, `6.1` | `7.3` | Câu 10 | Câu 10 |

Mọi LO đều được dạy và đánh giá, có đáp án chi tiết.

---

## G. Strengths

- Cấu trúc T1–T8 đầy đủ, tuân thủ ma trận đã duyệt.
- Giữ nguyên tất cả công thức, số liệu, ví dụ của nguồn (phương trình Nernst, bơm Na⁺/K⁺-ATPase, SGLT2, osmolarity/osmolality).
- Ví dụ tính toán có đầy đủ Given/Find/Approach/Solution/Check/Interpretation.
- DOMAIN_RULES tuân thủ: chỉ giải thích cơ chế, không liều/chỉ định/PK.
- Bảng 7.1 (tổng hợp công thức & đơn vị) hữu ích cho sinh viên Dược.

---

## H. Items for Human Expert Decision

1. **`V-07.01` (tên chuyên đề):** xác nhận tên chính thức tại `MANIFEST.md` (hiện dùng tên tạm "Trao đổi chất qua màng tế bào").
2. **`V-07.02` (điện thế nghỉ K⁺, tỷ số nồng độ):** chuyên gia xác nhận ($E_K \\approx -95\\text{ mV}$).
3. **`V-07.03` (hình vẽ/sơ đồ):** cần vẽ 3 khung `[FIGURE]` (màng tế bào, kênh ion/chất tải, nhập/xuất bào).
4. **`V-07.04` (tài liệu tham khảo):** cung cấp giáo trình chuẩn.
5. 5 lỗi Minor `QA-07.01`–`QA-07.05` sẽ sửa ở S5A.

---

## I. Not verified / limitations

- Không có `APPROVED_REFERENCE_LIST`; 3 mục tham khảo là thẻ giữ chỗ.
- Reviewer không thể xác nhận tài liệu tham khảo tồn tại (R4).
- Chưa có khung `[FIGURE]` — cần thêm 3 khung hình.
- Tên chuyên đề chưa chốt.

---

Gate B: **ĐỦ ĐIỀU KIỆN QUA** (0 Critical / 0 Major). Minor để lại S5A.