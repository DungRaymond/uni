# ch07_qa_r1.md — S4 QA Vòng 1 · Chương 07 (Đồng phân Phức chất & Ý nghĩa Dược lý)

**Môn:** Hóa vô cơ dược · **Stage:** S4 Independent QA · **Ngày:** 2026-11-09  
**Reviewer:** độc lập (không phải tác giả) · **Bản thảo:** `03_chapters/ch07_draft.md` (431 dòng, ~6.343 từ)  
**Nguồn:** `00_source_original/ch07_doc-hvc-7.html` (D-07) · **Ma trận:** `02_mapping/ch07_matrix.md`  
**Quy tắc:** `toa-soan_rules.md` mục 4 (R1–R12) & mục 7.5 (S4). Mọi trạng thái `[INTERNAL]` / `[EXTERNAL-KNOWLEDGE]`.

---

## A. Verdict

- **Kết luận thẩm định (Verdict):** **PASS**
- **Thống kê lỗi theo mức độ nghiêm trọng:** **Critical: 0** · **Major: 0** · **Minor: 0**
- **Luận cứ (3–5 dòng):**
  - Bản thảo ~6.343 từ (2,43× nguồn 2.609 từ), phủ **9/9 S-ID** (100%), `REMOVE = 0`, không vi phạm `DOMAIN_RULES`.
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
| `V-07.01` (tên chương) | 1 | `T-07.1.1` | Open — chờ MANIFEST xác nhận |
| `V-07.02` (phân loại đồng phân & ý nghĩa dược lý) | 3 | `T-07.4.1`, `T-07.4.8`, `T-07.5.3` | Open — cần chuyên gia xác nhận |
| `V-07.03` (0 hình vẽ/sơ đồ) | 1 | `T-07.5.4` | Open — cần vẽ hình |
| `V-07.04` (0 tài liệu tham khảo, 3 mục) | 1 (chứa 3 thẻ gốc) | `T-07.8.1` | Open — `APPROVED_REFERENCE_LIST: none` |
| **TOTAL** | **6** | | |

---

## C. Coverage table

| S-ID | Nguồn | T-ID tiếp nhận | Trạng thái |
|---|---|---|---|
| S-07.1 | Tổng quan & Phân loại Hai Nhánh Lớn | `T-07.4.1` | Preserved + Expanded |
| S-07.2 | Đồng phân Ion hóa | `T-07.4.2` | Preserved + Expanded |
| S-07.3 | Đồng phân Solvat hóa / Hydrat hóa | `T-07.4.3` | Preserved + Expanded |
| S-07.4 | Đồng phân Liên kết | `T-07.4.4` | Preserved + Expanded |
| S-07.5 | Đồng phân Phối trí | `T-07.4.5` | Preserved + Expanded |
| S-07.6 | Đồng phân Hình học | `T-07.4.6` | Preserved + Expanded |
| S-07.7 | Đồng phân Quang học | `T-07.4.7` | Preserved + Expanded |
| S-07.8 | Ý nghĩa Dược lý Tổng hợp | `T-07.4.8` | Preserved + Expanded |
| S-07.9 | Ý nghĩa và tác dụng (tóm tắt) | `T-07.6.1` | Merged |

**9/9 S-ID (100%), 0 missing.** (Báo cáo "Missing S-06.9" là false positive do chéo tham chiếu Ch06 trong bản thảo Ch07.)

---

## D. Calculation table

| Mục | Giá trị bản thảo | Tái tính độc lập | Khớp? |
|---|---|---|---|
| Không có phép tính số riêng trong bản thảo Ch07 (công thức giữ nguyên nguồn, không tính toán lại) | — | — | — |

**0/0 phép tính (không có phép tính số cần tái tính).** Công thức trong bản thảo giữ nguyên từ nguồn, không thay đổi giá trị.

---

## E. Tag and Reference Audit

- `[ADDED]=58`, `[VERIFY]=6`, `[CONFLICT]=0`, `[FIGURE]=3`.
- Không có thẻ `[ADDED]` nào chứa dữ liệu mới bịa đặt.
- 3 mục tham khảo tại `T-07.8.1` đều là `[VERIFY]` placeholder, không bịa tên sách/tác giả/năm. Tuân thủ R4.
- 3 khung `[FIGURE]` (Hình 7.1–7.3) đúng là placeholder, không mô tả như đã vẽ.

---

## F. Learning Objective Alignment Matrix

| LO | Được dạy tại | Được đánh giá tại | Câu hỏi | Đáp án |
|---|---|---|---|---|
| LO-1 | `4.1`–`4.5` | `7.1` | Câu 1–4 | Câu 1–4 |
| LO-2 | `4.6`, `4.7` | `7.2` | Bài tập 5–7 | Bài tập 5–7 |
| LO-3 | `4.6`, `4.8` | `7.2`, `7.3` | Bài tập 7, Câu 8–9 | Bài tập 7, Câu 8–9 |
| LO-4 | `4.7`, `4.8`, `6.1` | `7.3` | Câu 10 | Câu 10 |

Mọi LO đều được dạy và đánh giá, có đáp án chi tiết.

---

## G. Strengths

- Cấu trúc T1–T8 đầy đủ, tuân thủ ma trận đã duyệt.
- Giữ nguyên tất cả công thức, số liệu, ví dụ của nguồn (cisplatin/transplatin, $[Cr(H_2O)_6]Cl_3$, $[Co(en)_3]^{3+}$, …).
- Ví dụ có đầy đủ Given/Find/Approach/Solution/Check/Interpretation.
- DOMAIN_RULES tuân thủ: chỉ giải thích cơ chế, không liều/chỉ định/PK.
- Bảng 7.3 (tổng hợp loại đồng phân & ý nghĩa dược lý) rất hữu ích cho sinh viên Dược.

---

## H. Items for Human Expert Decision

1. **`V-07.01` (tên chương):** xác nhận tên chính thức tại `MANIFEST.md`.
2. **`V-07.02` (phân loại đồng phân & ý nghĩa dược lý):** chuyên gia xác nhận.
3. **`V-07.03` (Hình 7.1–7.3):** cần vẽ 3 khung `[FIGURE]`.
4. **`V-07.04` (tài liệu tham khảo):** cung cấp giáo trình chuẩn.

---

## I. Not verified / limitations

- Không có `APPROVED_REFERENCE_LIST`; 3 mục tham khảo là thẻ giữ chỗ.
- Reviewer không thể xác nhận tài liệu tham khảo tồn tại (R4).
- 3 khung `[FIGURE]` chưa vẽ.
- Tên chương chưa chốt.

---
Gate B: **ĐỦ ĐIỀU KIỆN QUA** (0 Critical / 0 Major / 0 Minor).
