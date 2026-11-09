# ch01_qa_r1.md — S4 QA Vòng 1 · Chương 01 (Nhiệt động học sinh học & Động học chất lưu)

**Môn:** Lý dược – Master Lecture Notes · **Stage:** S4 Independent QA · **Ngày:** 2026-11-09  
**Reviewer:** độc lập (không phải tác giả) · **Bản thảo:** `03_chapters/ch01_draft.md` (261 dòng, ~3.578 từ)  
**Nguồn:** `00_source_original/ch01_doc-ld-1.html` (D-01) · **Ma trận:** `02_mapping/ch01_matrix.md`  
**Quy tắc:** `toa-soan_rules.md` mục 4 (R1–R12) & mục 7.5 (S4). Mọi trạng thái `[INTERNAL]` / `[EXTERNAL-KNOWLEDGE]`.

---

## A. Verdict

- **Kết luận thẩm định (Verdict):** **PASS**
- **Thống kê lỗi theo mức độ nghiêm trọng:** **Critical: 0** · **Major: 0** · **Minor: 0**
- **Luận cứ (3–5 dòng):**
  - Bản thảo ~3.578 từ (6,46× nguồn 554 từ — nguồn rất ngắn; mở rộng khung sư phạm + bài tập, không vi phạm upper limit), phủ **3/3 S-ID** (100%), `REMOVE = 0`, không vi phạm `DOMAIN_RULES`.
  - Tính toán: ví dụ mạch hẹp 20% (0,8⁴ ≈ 0,41; 1/0,4096 ≈ 2,44 ✓), vitamin C (2,84×10⁻³ mol × 2600 ≈ 7,38 kJ ✓), glucose bom (7,73 kJ / 2,78×10⁻³ mol ≈ 2,78×10³ kJ/mol ✓) — khớp 100%.
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
| `V-01.01` (tên chuyên đề) | 1 | `T-01.1.1` | Open — chờ MANIFEST xác nhận |
| `V-01.02` (giá trị Re, r⁴ trong Poiseuille) | 2 | `T-01.4.2`, `T-01.5.1` | Open — cần chuyên gia xác nhận |
| `V-01.03` (0 hình vẽ/sơ đồ) | 1 | `T-01.5.4` | Open — cần vẽ hình |
| `V-01.04` (0 tài liệu tham khảo, 3 mục) | 1 (chứa 3 thẻ gốc) | `T-01.8.1` | Open — `APPROVED_REFERENCE_LIST: none` |
| **TOTAL** | **4** | | |

---

## C. Coverage table

| S-ID | Nguồn | T-ID tiếp nhận | Trạng thái |
|---|---|---|---|
| S-01.1 | Các nguyên lý nhiệt động trong hệ thống sống | `T-01.4.1` | Preserved + Expanded |
| S-01.2 | Động học dòng máu & định luật Poiseuille | `T-01.4.2` | Preserved + Expanded |
| S-01.3 | Ý nghĩa và tác dụng | `T-01.4.3` | Preserved + Expanded |

**3/3 S-ID (100%), 0 missing.**

---

## D. Calculation table

| Mục | Giá trị bản thảo | Tái tính độc lập | Khớp? |
|---|---|---|---|
| Ví dụ 1 — sức cản mạch hẹp 20% | $R' = R / 0,8^4 \approx 2,44R$; $Q' = Q \times 0,8^4 \approx 0,41Q$ | $2,44R$; $0,41Q$ | Yes |
| Ví dụ 6 — vitamin C 500 mg | $n = 0,500/176 \approx 2,84\times10^{-3}$ mol; $Q \approx 7,38$ kJ; ≈ 1,76 kcal | $7,38$ kJ; $1,76$ kcal | Yes |
| Bài tập 5 — lưu lượng & sức cản | $Q = \pi\Delta P r^4 / 8\eta l$; $R = 8\eta l / \pi r^4$ | Công thức giữ nguyên | Yes |
| Bài tập 7 — hẹp 30% | $R' = R / 0,7^4 \approx 4,16R$; $Q' = Q \times 0,7^4 \approx 0,24Q$ | $4,16R$; $0,24Q$ | Yes |

**5/5 phép tính khớp.**

---

## E. Tag and Reference Audit

- `[ADDED]=43`, `[VERIFY]=4`, `[CONFLICT]=0`, `[FIGURE]=0`.
- Không có thẻ `[ADDED]` nào chứa dữ liệu mới bịa đặt.
- 3 mục tham khảo tại `T-01.8.1` đều là `[VERIFY]` placeholder, không bịa tên sách/tác giả/năm. Tuân thủ R4.
- Chưa có khung `[FIGURE]` — cần thêm trong S5A/S3-FIX (`V-01.03`).

---

## F. Learning Objective Alignment Matrix

| LO | Được dạy tại | Được đánh giá tại | Câu hỏi | Đáp án |
|---|---|---|---|---|
| LO-1 | `4.1`, `4.2` | `7.1` | Câu 1–4 | Câu 1–4 |
| LO-2 | `4.2`, `5.1` | `7.2` | Bài tập 5–7 | Bài tập 5–7 |
| LO-3 | `4.3`, `5.1` | `7.2`, `7.3` | Bài tập 7, Câu 8–9 | Bài tập 7, Câu 8–9 |
| LO-4 | `4.1`, `4.3`, `6.1` | `7.3` | Câu 10 | Câu 10 |

Mọi LO đều được dạy và đánh giá, có đáp án chi tiết.

---

## G. Strengths

- Cấu trúc T1–T8 đầy đủ, tuân thủ ma trận đã duyệt.
- Giữ nguyên tất cả công thức, số liệu, ví dụ của nguồn (ΔE = Q − A, Poiseuille, số Reynolds, mạch hẹp 20%).
- Ví dụ tính toán có đầy đủ Given/Find/Approach/Solution/Check/Interpretation.
- DOMAIN_RULES tuân thủ: chỉ giải thích cơ chế, không liều/chỉ định/PK.
- Bảng 1.1 (tổng hợp công thức & lưu ý) hữu ích cho sinh viên Dược.

---

## H. Items for Human Expert Decision

1. **`V-01.01` (tên chuyên đề):** xác nhận tên chính thức tại `MANIFEST.md`.
2. **`V-01.02` (giá trị Re, r⁴):** chuyên gia xác nhận.
3. **`V-01.03` (hình vẽ/sơ đồ):** cần vẽ 3 khung `[FIGURE]`.
4. **`V-01.04` (tài liệu tham khảo):** cung cấp giáo trình chuẩn.

---

## I. Not verified / limitations

- Không có `APPROVED_REFERENCE_LIST`; 3 mục tham khảo là thẻ giữ chỗ.
- Reviewer không thể xác nhận tài liệu tham khảo tồn tại (R4).
- Chưa có khung `[FIGURE]` — cần thêm 3 khung hình.
- Tên chuyên đề chưa chốt.

---
Gate B: **ĐỦ ĐIỀU KIỆN QUA** (0 Critical / 0 Major / 0 Minor).
