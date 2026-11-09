# ch05_qa_r1.md — S4 QA Vòng 1 · Chương 05 (Lực liên phân tử & Liên kết hydro)

**Môn:** Hóa vô cơ dược · **Stage:** S4 Independent QA · **Ngày:** 2026-11-09  
**Reviewer:** độc lập (không phải tác giả) · **Bản thảo:** `03_chapters/ch05_draft.md` (362 dòng, ~4.706 từ)  
**Nguồn:** `00_source_original/ch05_doc-hvc-5.html` (D-05) · **Ma trận:** `02_mapping/ch05_matrix.md`  
**Quy tắc:** `toa-soan_rules.md` mục 4 (R1–R12) & mục 7.5 (S4). Mọi trạng thái `[INTERNAL]` / `[EXTERNAL-KNOWLEDGE]`.

---

## A. Verdict

- **Kết luận thẩm định (Verdict):** **PASS WITH CONDITIONS**
- **Thống kê lỗi theo mức độ nghiêm trọng:** **Critical: 0** · **Major: 0** · **Minor: 2** (`QA-05.01`, `QA-05.02`)
- **Luận cứ (3–5 dòng):**
  - Bản thảo ~4.706 từ (4,17× nguồn 1.129 từ), phủ **6/6 S-ID** (100%), `REMOVE = 0`, không vi phạm `DOMAIN_RULES` (không bổ sung liều/chỉ định/PK).
  - Tính toán: Example 5.1 ($100 - (-60) = 160$ ✓), Example 5.2 ($159 < 170 < 215$ ✓) — khớp 100%.
  - Chỉ còn 2 lỗi Minor (gõ/lỗi chính tả), không chặn Gate B. Nên sửa ở S5A, không cần mở vòng QA mới.

---

## B. Issue Table (vòng 1)

| Issue ID | T-ID | Category | Severity | Basis | Evidence (nguồn/đối chiếu vs. bản thảo, mỗi trích ≤25 từ) | Recommended correction | Return to author = Y/N |
|---|---|---|---|---|---|---|---|
| **QA-05.01** | `T-05.1.1` | Style / Typo | **Minor** | `[INTERNAL]` | Bản thảo (dòng 9): "vẫn tồn tại các lực hút yếu,rile qua khoảng cách". Từ "rile" bị gỡ/lỗi gõ, câu khó hiểu. | Sửa thành "vẫn tồn tại các lực hút yếu, giảm theo khoảng cách". | **N** (sửa ở S5A) |
| **QA-05.02** | `T-05.4.3.1` | Style / Typo | **Minor** | `[INTERNAL]` | Bản thảo (dòng ~126): "Ổn định đại phân tử sinh cheveux". "cheveux" là tiếng Pháp, sai lề. | Sửa thành "sinh học". | **N** (sửa ở S5A) |

---

## B2. Bảng đối chiếu các thẻ `[ADDED]` / `[VERIFY]`

| V-ID | Số thẻ | Vị trí | Trạng thái |
|---|---|---|---|
| `V-05.01` (tên chương) | 1 | `T-05.1.1` | Open — chờ MANIFEST xác nhận |
| `V-05.02` (phân loại tương tác) | 1 | `T-05.5.3` | Open — cần chuyên gia xác nhận sơ đồ |
| `V-05.03` (cấu trúc phân tử) | 1 | `T-05.5.4` (Hình 5.3) | Open — cần vẽ hình |
| `V-05.04` (liên hydro trong nước) | 1 | `T-05.7.4` Câu 8 | Open — dữ kiện chuẩn |
| `V-05.05` (tài liệu tham khảo) | 4 | `T-05.8.1` | Open — `APPROVED_REFERENCE_LIST: none` |
| **TOTAL** | **8** | | |

---

## C. Coverage table

| S-ID | Nguồn | T-ID tiếp nhận | Trạng thái |
|---|---|---|---|
| S-05.1 | Lực Van der Waals | `T-05.4.1` | Preserved + Expanded |
| S-05.2 | Liên kết Hydro | `T-05.4.2`, `T-05.4.3` | Preserved + Expanded |
| S-05.3 | Ý nghĩa và tác dụng | `T-05.6.1` | Merged |
| S-05.4 | Ví dụ H2O vs H2S | `T-05.5.1` | Merged |
| S-05.5 | Ví dụ acid salicylic | `T-05.5.2` | Merged |
| S-05.6 | Callout Cách nhớ | `T-05.6.1` | Merged |

**6/6 S-ID (100%), 0 missing.**

---

## D. Calculation table

| Mục | Giá trị bản thảo | Tái tính độc lập | Khớp? |
|---|---|---|---|
| Example 5.1 — chênh lệch nhiệt độ sôi | $100 - (-60) = 160^\circ C$ | $160^\circ C$ | Yes |
| Example 5.2 — thứ tự $t_{nc}$ | $159 < 170 < 215^\circ C$ | $159 < 170 < 215$ | Yes |

**2/2 phép tính khớp.** Không có phép tính số khác trong bản thảo (công thức chỉ dạng tỷ lệ $\propto$).

---

## E. Tag and Reference Audit

- `[ADDED]=40`, `[VERIFY]=8`, `[CONFLICT]=0`, `[FIGURE]=3`.
- Không có thẻ `[ADDED]` nào chứa dữ liệu mới bịa đặt (tất cả là khung sư phạm, ví dụ, bảng, bài tập — đã ghi lý do).
- 3 mục tham khảo tại `T-05.8.1` đều là `[VERIFY]` placeholder, không bịa tên sách/tác giả/năm. Tuân thủ R4.
- Không có tài liệu nào được khẳng định là tồn tại.

---

## F. Learning Objective Alignment Matrix

| LO | Được dạy tại | Được đánh giá tại | Câu hỏi | Đáp án |
|---|---|---|---|---|
| LO-1 | `4.1`, `4.2` | `7.1` | Câu 1–4 | Câu 1–4 |
| LO-2 | `4.1.3`, `5.1` | `7.2` | Bài tập 5–6 | Bài tập 5–6 |
| LO-3 | `4.3`, `5.2` | `7.2`, `7.3` | Bài tập 7, Câu 8–9 | Bài tập 7, Câu 8–9 |
| LO-4 | `4.3.3`, `6.1` | `7.3` | Câu 10 | Câu 10 |

Mọi LO đều được dạy và đánh giá, có đáp án chi tiết.

---

## G. Strengths

- Cấu trúc T1–T8 đầy đủ, tuân thủ ma trận đã duyệt.
- Ví dụ giữ nguyên số liệu nguồn ($100^\circ C$, $-60^\circ C$, $159^\circ C$, $215^\circ C$, $170^\circ C$).
- Công thức Keesom/Debye giữ dạng tỷ lệ $\propto$ theo nguồn, không bịa hệ số.
- BOARD RULES tuân thủ: không bổ sung liều/chỉ định/PK.
- Tóm tắt & quy tắc ghi nhớ rõ ràng, hữu ích cho sinh viên Dược.

---

## H. Items for Human Expert Decision

1. **`V-05.01` (tên chương):** xác nhận tên chính thức tại `MANIFEST.md` (hiện dùng tên tạm "Lực liên phân tử & Liên kết hydro").
2. **`V-05.02` (sơ đồ Mermaid):** chuyên gia xác nhận quy trình phân loại tương tác liên phân tử.
3. **`V-05.03` (Hình 5.3):** cần vẽ cấu trúc acid salicylic / acid para.
4. **`V-05.04`–`V-05.05`:** dữ kiện liên kết hydro nước + tài liệu tham khảo giáo trình.
5. Hai lỗi Minor `QA-05.01`, `QA-05.02` sẽ sửa ở S5A.

---

## I. Not verified / limitations

- Không có `APPROVED_REFERENCE_LIST`; 3 mục tham khảo là thẻ giữ chỗ.
- Reviewer không thể xác nhận tài liệu tham khảo tồn tại (R4).
- 3 khung `[FIGURE]` chưa vẽ.
- Tên chương chưa chốt.

---
Gate B: **ĐỦ ĐIỀU KIỆN QUA** (0 Critical / 0 Major). Minor để lại S5A.
