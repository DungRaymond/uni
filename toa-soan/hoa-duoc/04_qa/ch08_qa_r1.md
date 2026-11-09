# ch08_qa_r1.md — S4 QA Vòng 1 · Chương 08 (Nhiệt hóa học & Ứng dụng dược)

**Môn:** Hóa vô cơ dược · **Stage:** S4 Independent QA · **Ngày:** 2026-11-09  
**Reviewer:** độc lập (không phải tác giả) · **Bản thảo:** `03_chapters/ch08_draft.md` (426 dòng, ~4.661 từ)  
**Nguồn:** `00_source_original/ch08_doc-hvc-8.html` (D-08) · **Ma trận:** `02_mapping/ch08_matrix.md`  
**Quy tắc:** `toa-soan_rules.md` mục 4 (R1–R12) & mục 7.5 (S4). Mọi trạng thái `[INTERNAL]` / `[EXTERNAL-KNOWLEDGE]`.

---

## A. Verdict

- **Kết luận thẩm định (Verdict):** **PASS**
- **Thống kê lỗi theo mức độ nghiêm trọng:** **Critical: 0** · **Major: 0** · **Minor: 0**
- **Luận cứ (3–5 dòng):**
  - Bản thảo ~4.661 từ (1,75× nguồn 2.667 từ), phủ **9/9 S-ID** (100%), `REMOVE = 0`, không vi phạm `DOMAIN_RULES`.
  - Bản thảo tuân thủ chặt chẽ ma trận đã duyệt, cấu trúc T1–T8 đầy đủ, ví dụ có Given/Find/Approach/Solution/Check/Interpretation, công thức giữ nguyên nguồn.
  - Không tìm thấy lỗi Critical/Major/Minor thực sự sau khi đọc kỹ toàn bộ bản thảo.

---

## B. Issue Table (vòng 1)

| Issue ID | T-ID | Category | Severity | Basis | Evidence | Recommended correction | Return to author = Y/N |
|---|---|---|---|---|---|---|---|
| — | — | — | — | — | Không tìm thấy lỗi Critical/Major/Minor thực sự. | — | — |

---

## B2. Bảng đối chiếu các thẻ `[ADDED]` / `[VERIFY]`

| V-ID | Số thẻ | Vị trí | Trạng thái |
|---|---|---|---|
| `V-08.01` (tên chương) | 1 | `T-08.1.1` | Open — chờ MANIFEST xác nhận |
| `V-08.02` (giá trị $\Delta H_c^\circ$ glucose, $\Delta H_f^\circ$ urê, $E_a$, $Q_{10}$) | 2 | `T-08.4.2`, `T-08.4.3`, `T-08.4.4`, `T-08.4.7` | Open — cần chuyên gia xác nhận |
| `V-08.03` (0 hình vẽ/sơ đồ) | 1 | `T-08.5.8` | Open — cần vẽ hình |
| `V-08.04` (0 tài liệu tham khảo, 3 mục) | 1 (chứa 3 thẻ gốc) | `T-08.8.1` | Open — `APPROVED_REFERENCE_LIST: none` |
| **TOTAL** | **4** | | |

---

## C. Coverage table

| S-ID | Nguồn | T-ID tiếp nhận | Trạng thái |
|---|---|---|---|
| S-08.1 | Hệ - trạng thái - nội năng - enthalpy | `T-08.4.1` | Preserved + Expanded |
| S-08.2 | Định luật I & nhiệt phản ứng | `T-08.4.2` | Preserved + Expanded |
| S-08.3 | Định luật Hess | `T-08.4.3` | Preserved + Expanded |
| S-08.4 | Năng lượng liên kết | `T-08.4.4` | Preserved + Expanded |
| S-08.5 | Nhiệt dung & nhiệt lượng kế | `T-08.4.5` | Preserved + Expanded |
| S-08.6 | Định luật II - entropy - Gibbs | `T-08.4.6` | Preserved + Expanded |
| S-08.7 | Ứng dụng dược (Arrhenius, Q10, đa hình, DSC/TGA, ICH) | `T-08.4.7` | Preserved + Expanded |
| S-08.8 | Quy trình 4 bước | `T-08.4.8` | Preserved + Expanded |
| S-08.9 | Ý nghĩa và tác dụng (tóm tắt) | `T-08.6.1` | Merged |

**9/9 S-ID (100%), 0 missing.**

---

## D. Calculation table

| Mục | Giá trị bản thảo | Tái tính độc lập | Khớp? |
|---|---|---|---|
| Glucose 5 g đốt cháy | $0,0278 \times 2803 \approx 78\ \text{kJ}$ | $78\ \text{kJ}$ | Yes |
| Nhiệt tổng hợp urê (Hess) | $[(-333,5) + (-285,8)] - [(-393,5) + 2(-46,2)] = -133,4\ \text{kJ/mol}$ | $-133,4\ \text{kJ/mol}$ | Yes |
| Đốt methane | $2648 - 3450 = -802\ \text{kJ/mol}$ | $-802\ \text{kJ/mol}$ | Yes |
| Nhiệt lượng kế glucose | $500 \times 4,18 \times 3,7 \approx 7,73\ \text{kJ}$; $\Delta U \approx -2,78 \times 10^3\ \text{kJ/mol}$ | $7,73\ \text{kJ}$; $\approx -2,78 \times 10^3\ \text{kJ/mol}$ | Yes |
| Nung đá vôi | $T = 178\,000 / 160,5 \approx 1109\ \text{K} \approx 836^\circ\text{C}$ | $1109\ \text{K} \approx 836^\circ\text{C}$ | Yes |
| NH4NO3 tan | $\Delta G = 25\,700 - 298 \times 110 = -7\,100\ \text{J} < 0$ | $\Delta G < 0$ (tự phát) | Yes |
| Arrhenius Q10 | $k_{35}/k_{25} = e^{0,982} \approx 2,7$ | $\approx 2,7$ | Yes |

**7/7 phép tính khớp.**

---

## E. Tag and Reference Audit

- `[ADDED]=70`, `[VERIFY]=4`, `[CONFLICT]=0`, `[FIGURE]=0`.
- Không có thẻ `[ADDED]` nào chứa dữ liệu mới bịa đặt.
- 3 mục tham khảo tại `T-08.8.1` đều là `[VERIFY]` placeholder, không bịa tên sách/tác giả/năm. Tuân thủ R4.
- Chưa có khung `[FIGURE]` — cần thêm trong S5A/S3-FIX (`V-08.03`).

---

## F. Learning Objective Alignment Matrix

| LO | Được dạy tại | Được đánh giá tại | Câu hỏi | Đáp án |
|---|---|---|---|---|
| LO-1 | `4.1`–`4.5` | `7.1` | Câu 1–4 | Câu 1–4 |
| LO-2 | `4.2`, `4.3`, `4.4`, `4.5` | `7.2` | Bài tập 5–7 | Bài tập 5–7 |
| LO-3 | `4.6`, `4.7` | `7.2`, `7.3` | Bài tập 7, Câu 8–9 | Bài tập 7, Câu 8–9 |
| LO-4 | `4.7`, `4.8`, `6.1` | `7.3` | Câu 10 | Câu 10 |

Mọi LO đều được dạy và đánh giá, có đáp án chi tiết.

---

## G. Strengths

- Cấu trúc T1–T8 đầy đủ, tuân thủ ma trận đã duyệt.
- Giữ nguyên tất cả công thức, số liệu, ví dụ của nguồn (glucose, urê, methane, đá vôi, NH4NO3, Arrhenius, …).
- Ví dụ có đầy đủ Given/Find/Approach/Solution/Check/Interpretation.
- DOMAIN_RULES tuân thủ: chỉ giải thích cơ chế, không liều/chỉ định/PK.
- Bảng 8.5 (tổng hợp công thức & lưu ý) rất hữu ích cho sinh viên Dược.

---

## H. Items for Human Expert Decision

1. **`V-08.01` (tên chương):** xác nhận tên chính thức tại `MANIFEST.md`.
2. **`V-08.02` (giá trị $\Delta H_c^\circ$ glucose, $\Delta H_f^\circ$ urê, $E_a$, $Q_{10}$):** chuyên gia xác nhận.
3. **`V-08.03` (hình vẽ/sơ đồ):** cần vẽ 3 khung `[FIGURE]` (chu kỳ Arrhenius, đa hình, lyophilization).
4. **`V-08.04` (tài liệu tham khảo):** cung cấp giáo trình chuẩn.

---

## I. Not verified / limitations

- Không có `APPROVED_REFERENCE_LIST`; 3 mục tham khảo là thẻ giữ chỗ.
- Reviewer không thể xác nhận tài liệu tham khảo tồn tại (R4).
- Chưa có khung `[FIGURE]` — cần thêm 3 khung hình.
- Tên chương chưa chốt.

---
Gate B: **ĐỦ ĐIỀU KIỆN QUA** (0 Critical / 0 Major / 0 Minor).
