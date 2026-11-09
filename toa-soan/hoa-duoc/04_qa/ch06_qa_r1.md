# ch06_qa_r1.md — S4 QA Vòng 1 · Chương 06 (Hóa học phối trí & Ứng dụng dược)

**Môn:** Hóa vô cơ dược · **Stage:** S4 Independent QA · **Ngày:** 2026-11-09  
**Reviewer:** độc lập (không phải tác giả) · **Bản thảo:** `03_chapters/ch06_draft.md` (497 dòng, ~8.324 từ)  
**Nguồn:** `00_source_original/ch06_doc-hvc-6.html` (D-06) · **Ma trận:** `02_mapping/ch06_matrix.md`  
**Quy tắc:** `toa-soan_rules.md` mục 4 (R1–R12) & mục 7.5 (S4). Mọi trạng thái `[INTERNAL]` / `[EXTERNAL-KNOWLEDGE]`.

---

## A. Verdict

- **Kết luận thẩm định (Verdict):** **PASS**
- **Thống kê lỗi theo mức độ nghiêm trọng:** **Critical: 0** · **Major: 0** · **Minor: 0**
- **Luận cứ (3–5 dòng):**
  - Bản thảo ~8.324 từ (1,65× nguồn 5.050 từ), phủ **9/9 S-ID** (100%), `REMOVE = 0`, không vi phạm `DOMAIN_RULES` (không bổ sung liều/chỉ định/PK).
  - Tính toán: CFSE $[Fe(CN)_6]^{4-}$ = $-2,4\Delta_o$ ✓; ví dụ đọc phép điện tích khớp ✓.
  - Bản thảo tuân thủ chặt chẽ ma trận đã duyệt, cấu trúc T1–T8 đầy đủ, ví dụ có Given/Find/Approach/Solution/Check/Interpretation, công thức giữ nguyên nguồn.

---

## B. Issue Table (vòng 1)

| Issue ID | T-ID | Category | Severity | Basis | Evidence | Recommended correction | Return to author = Y/N |
|---|---|---|---|---|---|---|---|
| — | — | — | — | — | Không tìm thấy lỗi Critical/Major/Minor thực sự sau khi đọc kỹ toàn bộ bản thảo. | — | — |

---

## B2. Bảng đối chiếu các thẻ `[ADDED]` / `[VERIFY]`

| V-ID | Số thẻ | Vị trí | Trạng thái |
|---|---|---|---|
| `V-06.01` (tên chương) | 1 | `T-06.1.1` | Open — chờ MANIFEST xác nhận |
| `V-06.02` (giá trị $\log\beta$, $\Delta_o$, CFSE; thuật toán CN) | 3 | `T-06.4.4`, `T-06.4.7`, `T-06.4.8`, `T-06.5.3` | Open — cần chuyên gia xác nhận |
| `V-06.03` (0 hình vẽ/sơ đồ) | 1 | `T-06.5.4` | Open — cần vẽ hình |
| `V-06.04` (0 tài liệu tham khảo, 3 mục) | 1 (chứa 3 thẻ gốc) | `T-06.8.1` | Open — `APPROVED_REFERENCE_LIST: none` |
| **TOTAL** | **6** | | |

---

## C. Coverage table

| S-ID | Nguồn | T-ID tiếp nhận | Trạng thái |
|---|---|---|---|
| S-06.1 | Thuyết phối trí Werner & Cầu nội/ngoại | `T-06.4.1` | Preserved + Expanded |
| S-06.2 | Nguyên tử Trung tâm, Hóa trị & Số Phối trí CN | `T-06.4.2` | Preserved + Expanded |
| S-06.3 | Phân loại Phối tử & Dung lượng | `T-06.4.3` | Preserved + Expanded |
| S-06.4 | Hiệu ứng Chelat & Nhiệt động học | `T-06.4.4` | Preserved + Expanded |
| S-06.5 | Danh pháp IUPAC | `T-06.4.5` | Preserved + Expanded |
| S-06.6 | Đồng phân cấu trúc & lập thể | `T-06.4.6` | Preserved + Expanded |
| S-06.7 | CFT & Bản chất Liên kết Phối trí | `T-06.4.7` | Preserved + Expanded |
| S-06.8 | Cân bằng, Hằng số Bền & HSAB | `T-06.4.8` | Preserved + Expanded |
| S-06.9 | Ứng dụng Y Dược (bảng 10 ứng dụng) | `T-06.4.9` | Preserved + Expanded |

**9/9 S-ID (100%), 0 missing.**

---

## D. Calculation table

| Mục | Giá trị bản thảo | Tái tính độc lập | Khớp? |
|---|---|---|---|
| CFSE $[Fe(CN)_6]^{4-}$ (low-spin $d^6$) | $(-0,4 \cdot 6 + 0,6 \cdot 0)\Delta_o = -2,4\Delta_o$ | $-2,4\Delta_o$ | Yes |
| Điện tích $[Co(NH_3)_6]^{3+}$ | Co $+3$, 6 $NH_3$ trung hòa → ion phức $+3$ | $+3$ | Yes |
| Điện tích $[Fe(CN)_6]^{3-}$ | $3+ + 6(-1) = -3$ | $-3$ | Yes |

**3/3 phép tính khớp.**

---

## E. Tag and Reference Audit

- `[ADDED]=62`, `[VERIFY]=6`, `[CONFLICT]=0`, `[FIGURE]=3`.
- Không có thẻ `[ADDED]` nào chứa dữ liệu mới bịa đặt.
- 3 mục tham khảo tại `T-06.8.1` đều là `[VERIFY]` placeholder, không bịa tên sách/tác giả/năm. Tuân thủ R4.
- 3 khung `[FIGURE]` (Hình 6.1–6.3) đúng là placeholder, không mô tả như đã vẽ.

---

## F. Learning Objective Alignment Matrix

| LO | Được dạy tại | Được đánh giá tại | Câu hỏi | Đáp án |
|---|---|---|---|---|
| LO-1 | `4.1`, `4.2`, `4.3`, `4.5` | `7.1` | Câu 1–4 | Câu 1–4 |
| LO-2 | `4.2`, `4.4`, `4.7`, `4.8` | `7.2` | Bài tập 5–7 | Bài tập 5–7 |
| LO-3 | `4.4`, `4.7`, `4.8` | `7.2`, `7.3` | Bài tập 7, Câu 8–9 | Bài tập 7, Câu 8–9 |
| LO-4 | `4.6`, `4.9`, `6.1` | `7.3` | Câu 10 | Câu 10 |

Mọi LO đều được dạy và đánh giá, có đáp án chi tiết.

---

## G. Strengths

- Cấu trúc T1–T8 đầy đủ, tuân thủ ma trận đã duyệt.
- Giữ nguyên tất cả công thức, số liệu, ví dụ của nguồn (Cisplatin, EDTA, $\log\beta$, $\Delta_o$, CFSE, …).
- Ví dụ tính toán có đầy đủ Given/Find/Approach/Solution/Check/Interpretation.
- DOMAIN_RULES tuân thủ: chỉ giải thích cơ chế, không liều/chỉ định/PK.
- Bảng 6.4 (10 ứng dụng y dược) rất giàu, hữu ích cho sinh viên Dược.

---

## H. Items for Human Expert Decision

1. **`V-06.01` (tên chương):** xác nhận tên chính thức tại `MANIFEST.md`.
2. **`V-06.02` (giá trị $\log\beta$, $\Delta_o$, CFSE):** chuyên gia xác nhận số liệu.
3. **`V-06.03` (Hình 6.1–6.3):** cần vẽ 3 khung `[FIGURE]`.
4. **`V-06.04` (tài liệu tham khảo):** cung cấp giáo trình chuẩn.

---

## I. Not verified / limitations

- Không có `APPROVED_REFERENCE_LIST`; 3 mục tham khảo là thẻ giữ chỗ.
- Reviewer không thể xác nhận tài liệu tham khảo tồn tại (R4).
- 3 khung `[FIGURE]` chưa vẽ.
- Tên chương chưa chốt.

---
Gate B: **ĐỦ ĐIỀU KIỆN QUA** (0 Critical / 0 Major / 0 Minor).
