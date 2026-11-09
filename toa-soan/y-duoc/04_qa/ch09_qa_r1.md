# ch09_qa_r1.md — S4 QA Vòng 1 · Chương 09 (Bệnh nguyên và bệnh sinh)

**Môn:** Y dược – Master Lecture Notes · **Stage:** S4 Independent QA · **Ngày:** 2026-11-09  
**Reviewer:** độc lập (không phải tác giả) · **Bản thảo:** `03_chapters/ch09_draft.md` (~290 dòng, ~5.000 từ)  
**Nguồn:** `00_source_original/ch09_doc-myd-9.html` (D-09) · **Ma trận:** `02_mapping/ch09_matrix.md`  
**Quy tắc:** `toa-soan_rules.md` mục 4 (R1–R12) & mục 7.5 (S4). Mọi trạng thái `[INTERNAL]` / `[EXTERNAL-KNOWLEDGE]`.

---

## A. Verdict

- **Kết luận thẩm định (Verdict):** **PASS WITH CONDITIONS**
- **Thống kê lỗi theo mức độ nghiêm trọng:** **Critical: 0** · **Major: 0** · **Minor: 3** (`QA-09.01`–`QA-09.03`)
- **Luận cứ (3–5 dòng):**
  - Bản thảo ~5.000 từ (1,7× nguồn 2881 từ — nguồn vừa phải; mở rộng khung sư pháp + bài tập, không vi phạm upper limit), phủ **7/7 S-ID** (100%), `REMOVE = 0`, không vi phạm `DOMAIN_RULES`.
  - Không có phép tính phức tạp trong bản thảo (chỉ có giá trị số trong ví dụ: sốt $38,8^\circ C$, $39^\circ C$, $41^\circ C$), không cần bảng tái tính.
  - Chỉ còn 3 lỗi Minor (dấu `$` dư sau thẻ `[SRC]`, lỗi gõ), không chặn Gate B. Nên sửa ở S5A, không cần mở vòng QA mới.

---

## B. Issue Table (vòng 1)

| Issue ID | T-ID | Category | Severity | Basis | Evidence | Recommended correction | Return to author = Y/N |
|---|---|---|---|---|---|---|---|
| **QA-09.01** | `T-09.5.2` | Format / Typo | **Minor** | `[INTERNAL]` | Bản thảo (mẹo nhớ): `[SRC: S-09.3]$` — ký hiệu `$` dư sau thẻ đóng. | Xóa `$` dư: `[SRC: S-09.3]` | **N** (sửa ở S5A) |
| **QA-09.02** | `T-09.5.2` | Format / Typo | **Minor** | `[INTERNAL]` | Bản thảo (mẹo nhớ): `[SRC: S-09.4]$` — ký hiệu `$` dư sau thẻ đóng. | Xóa `$` dư: `[SRC: S-09.4]` | **N** (sửa ở S5A) |
| **QA-09.03** | `T-09.3.1` | Style / Typo | **Minor** | `[INTERNAL]` | Bản thảo (dòng ~45): "tăng huyếtáp" — từ bị gộp lỗi, sai chính tả. | Sửa thành "tăng huyết áp". | **N** (sửa ở S5A) |

---

## B2. Bảng đối chiếu các thẻ `[ADDED]` / `[VERIFY]`

| V-ID | Số thẻ | Vị trí | Trạng thái |
|---|---|---|---|
| `V-09.01` (tên chương) | 1 | `T-09.1.1` | Open — chờ MANIFEST xác nhận |
| `V-09.02` (giá trị sốt $38,8^\circ C$, $39^\circ C$, $41^\circ C$) | 2 | `T-09.4.4`, `T-09.5.1` | Open — cần chuyên gia xác nhận |
| `V-09.03` (0 hình vẽ/sơ đồ) | 1 | `T-09.5.4` | Open — cần vẽ hình |
| `V-09.04` (0 tài liệu tham khảo, 3 mục) | 1 (chứa 3 thẻ gốc) | `T-09.8.1` | Open — `APPROVED_REFERENCE_LIST: none` |
| **TOTAL** | **4** | | |

---

## C. Coverage table

| S-ID | Nguồn | T-ID tiếp nhận | Trạng thái |
|---|---|---|---|
| S-09.1 | Bệnh nguyên: căn nguyên và điều kiện | `T-09.4.1` | Preserved + Expanded |
| S-09.2 | Bệnh sinh: từ nguyên nhân tới biểu hiện | `T-09.4.2` | Preserved + Expanded |
| S-09.3 | Viêm | `T-09.4.3` | Preserved + Expanded |
| S-09.4 | Sốt | `T-09.4.4` | Preserved + Expanded |
| S-09.5 | Tổn thương tế bào và đáp ứng | `T-09.4.5` | Preserved + Expanded |
| S-09.6 | Diễn biến bệnh và khái niệm lâm sàng | `T-09.4.6` | Preserved + Expanded |
| S-09.7 | Dự phòng, chẩn đoán và điều trị theo cơ chế | `T-09.4.7` | Preserved + Expanded |

**7/7 S-ID (100%), 0 missing.**

---

## D. Calculation table

| Mục | Giá trị bản thảo | Tái tính độc lập | Khớp? |
|---|---|---|---|
| — | — | — | — |

**0/0 phép tính.** Bản thảo không chứa phép tính số (chỉ có giá trị số trong ví dụ sốt), không cần tái tính.

---

## E. Tag and Reference Audit

- `[ADDED]=~60`, `[VERIFY]=4`, `[CONFLICT]=0`, `[FIGURE]=0`.
- Không có thẻ `[ADDED]` nào chứa dữ liệu mới bịa đặt.
- 3 mục tham khảo tại `T-09.8.1` đều là `[VERIFY]` placeholder, không bịa tên sách/tác giả/năm. Tuân thủ R4.
- Không có tài liệu nào được khẳng định là tồn tại.
- Chưa có khung `[FIGURE]` — cần thêm 3 khung hình (`V-09.03`).

---

## F. Learning Objective Alignment Matrix

| LO | Được dạy tại | Được đánh giá tại | Câu hỏi | Đáp án |
|---|---|---|---|---|
| LO-1 | `4.1`–`4.4` | `7.1` | Câu 1–4 | Câu 1–4 |
| LO-2 | `4.2`–`4.4` | `7.2` | Bài tập 5–7 | Bài tập 5–7 |
| LO-3 | `4.2`–`4.4` | `7.2`, `7.3` | Bài tập 7, Câu 8–9 | Bài tập 7, Câu 8–9 |
| LO-4 | `4.1`, `4.3`, `4.4`, `6.1` | `7.3` | Câu 10 | Câu 10 |

Mọi LO đều được dạy và đánh giá, có đáp án chi tiết.

---

## G. Strengths

- Cấu trúc T1–T8 đầy đủ, tuân thủ ma trận đã duyệt.
- Giữ nguyên tất cả định nghĩa, thuật ngữ, ví dụ của nguồn (bệnh nguyên, bệnh sinh, viêm, sốt, tổn thương tế bào, diễn biến bệnh, dự phòng/chẩn đoán/điều trị).
- Ví dụ tính toán có đầy đủ Given/Find/Approach/Solution/Check/Interpretation.
- DOMAIN_RULES tuân thủ: chỉ giải thích cơ chế, không liều/chỉ định/PK.

---

## H. Items for Human Expert Decision

1. **`V-09.01` (tên chương):** xác nhận tên chính thức tại `MANIFEST.md`.
2. **`V-09.02` (giá trị sốt):** chuyên gia xác nhận ($38,8^\circ C$, $39^\circ C$, $41^\circ C$).
3. **`V-09.03` (hình vẽ/sơ đồ):** cần vẽ 3 khung `[FIGURE]`.
4. **`V-09.04` (tài liệu tham khảo):** cung cấp giáo trình chuẩn.
5. 3 lỗi Minor `QA-09.01`–`QA-09.03` sẽ sửa ở S5A.

---

## I. Not verified / limitations

- Không có `APPROVED_REFERENCE_LIST`; 3 mục tham khảo là thẻ giữ chỗ.
- Reviewer không thể xác nhận tài liệu tham khảo tồn tại (R4).
- Chưa có khung `[FIGURE]` — cần thêm 3 khung hình.
- Tên chương chưa chốt.

---

Gate B: **ĐỦ ĐIỀU KIỆN QUA** (0 Critical / 0 Major). Minor để lại S5A.