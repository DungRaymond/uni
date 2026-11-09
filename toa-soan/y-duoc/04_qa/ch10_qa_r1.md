# ch10_qa_r1.md — S4 QA Vòng 1 · Chương 10 (Dịch cơ thể, cân bằng nước và rối loạn thường gặp)

**Môn:** Y dược – Master Lecture Notes · **Stage:** S4 Independent QA · **Ngày:** 2026-11-09  
**Reviewer:** độc lập (không phải tác giả) · **Bản thảo:** `03_chapters/ch10_draft.md` (~290 dòng, ~3.800 từ)  
**Nguồn:** `00_source_original/ch10_doc-myd-10.html` (D-10) · **Ma trận:** `02_mapping/ch10_matrix.md`  
**Quy tắc:** `toa-soan_rules.md` mục 4 (R1–R12) & mục 7.5 (S4). Mọi trạng thái `[INTERNAL]` / `[EXTERNAL-KNOWLEDGE]`.

---

## A. Verdict

- **Kết luận thẩm định (Verdict):** **PASS WITH CONDITIONS**
- **Thống kê lỗi theo mức độ nghiêm trọng:** **Critical: 0** · **Major: 0** · **Minor: 3** (`QA-10.01`–`QA-10.03`)
- **Luận cứ (3–5 dòng):**
  - Bản thảo ~3.800 từ (2,8× nguồn 1375 từ — nguồn vừa phải; mở rộng khung sư pháp + bài tập, không vi phạm upper limit), phủ **7/7 S-ID** (100%), `REMOVE = 0`, không vi phạm `DOMAIN_RULES`.
  - Không có phép tính phức tạp trong bản thảo (chỉ có công thức định nghĩa), không cần bảng tái tính.
  - Chỉ còn 3 lỗi Minor (dấu `$` dư sau thẻ `[SRC]`), không chặn Gate B. Nên sửa ở S5A, không cần mở vòng QA mới.

---

## B. Issue Table (vòng 1)

| Issue ID | T-ID | Category | Severity | Basis | Evidence | Recommended correction | Return to author = Y/N |
|---|---|---|---|---|---|---|---|
| **QA-10.01** | `T-10.5.2` | Format / Typo | **Minor** | `[INTERNAL]` | Bản thảo (mẹo nhớ): `[SRC: S-10.1]$` — ký hiệu `$` dư sau thẻ đóng. | Xóa `$` dư: `[SRC: S-10.1]` | **N** (sửa ở S5A) |
| **QA-10.02** | `T-10.5.2` | Format / Typo | **Minor** | `[INTERNAL]` | Bản thảo (mẹo nhớ): `[SRC: S-10.6]$` — ký hiệu `$` dư sau thẻ đóng. | Xóa `$` dư: `[SRC: S-10.6]` | **N** (sửa ở S5A) |
| **QA-10.03** | `T-10.3.1` | Style / Typo | **Minor** | `[INTERNAL]` | Bản thảo (dòng ~45): "tăng huyếtáp" — từ bị gộp lỗi, sai chính tả. | Sửa thành "tăng huyết áp". | **N** (sửa ở S5A) |

---

## B2. Bảng đối chiếu các thẻ `[ADDED]` / `[VERIFY]`

| V-ID | Số thẻ | Vị trí | Trạng thái |
|---|---|---|---|
| `V-10.01` (tên chương) | 1 | `T-10.1.1` | Open — chờ MANIFEST xác nhận |
| `V-10.02` (giá trị osmolality (275–295 mOsm/kg), TBW, natri máu) | 2 | `T-10.4.2`, `T-10.5.1` | Open — cần chuyên gia xác nhận |
| `V-10.03` (0 hình vẽ/sơ đồ) | 1 | `T-10.5.4` | Open — cần vẽ hình |
| `V-10.04` (0 tài liệu tham khảo, 3 mục) | 1 (chứa 3 thẻ gốc) | `T-10.8.1` | Open — `APPROVED_REFERENCE_LIST: none` |
| **TOTAL** | **4** | | |

---

## C. Coverage table

| S-ID | Nguồn | T-ID tiếp nhận | Trạng thái |
|---|---|---|---|
| S-10.1 | Phân bố nước và các khoang dịch | `T-10.4.1` | Preserved + Expanded |
| S-10.2 | Osmolality, tonicity và dịch chuyển nước | `T-10.4.2` | Preserved + Expanded |
| S-10.3 | Cân bằng nước vào-ra | `T-10.4.3` | Preserved + Expanded |
| S-10.4 | Điều hòa thận và hormone | `T-10.4.4` | Preserved + Expanded |
| S-10.5 | Trao đổi dịch mao mạch và phù | `T-10.4.5` | Preserved + Expanded |
| S-10.6 | Natri máu: nồng độ không đồng nhất với lượng natri toàn cơ thể | `T-10.4.6` | Preserved + Expanded |
| S-10.7 | Đánh giá thực hành và công thức ước tính | `T-10.4.7` | Preserved + Expanded |

**7/7 S-ID (100%), 0 missing.**

---

## D. Calculation table

| Mục | Giá trị bản thảo | Tái tính độc lập | Khớp? |
|---|---|---|---|
| — | — | — | — |

**0/0 phép tính.** Bản thảo không chứa phép tính số (chỉ có công thức định nghĩa), không cần tái tính.

---

## E. Tag and Reference Audit

- `[ADDED]=~60`, `[VERIFY]=4`, `[CONFLICT]=0`, `[FIGURE]=0`.
- Không có thẻ `[ADDED]` nào chứa dữ liệu mới bịa đặt.
- 3 mục tham khảo tại `T-10.8.1` đều là `[VERIFY]` placeholder, không bịa tên sách/tác giả/năm. Tuân thủ R4.
- Không có tài liệu nào được khẳng định là tồn tại.
- Chưa có khung `[FIGURE]` — cần thêm 3 khung hình (`V-10.03`).

---

## F. Learning Objective Alignment Matrix

| LO | Được dạy tại | Được đánh giá tại | Câu hỏi | Đáp án |
|---|---|---|---|---|
| LO-1 | `4.1`–`4.4` | `7.1` | Câu 1–4 | Câu 1–4 |
| LO-2 | `4.1`, `4.2`, `4.3`, `4.4` | `7.2` | Bài tập 5–7 | Bài tập 5–7 |
| LO-3 | `4.1`, `4.2`, `4.3`, `4.4` | `7.2`, `7.3` | Bài tập 7, Câu 8–9 | Bài tập 7, Câu 8–9 |
| LO-4 | `4.1`, `4.3`, `4.4`, `6.1` | `7.3` | Câu 10 | Câu 10 |

Mọi LO đều được dạy và đánh giá, có đáp án chi tiết.

---

## G. Strengths

- Cấu trúc T1–T8 đầy đủ, tuân thủ ma trận đã duyệt.
- Giữ nguyên tất cả định nghĩa, thuật ngữ, ví dụ của nguồn (osmolality, tonicity, khoang dịch ICF/ECF, ADH/RAA/BNP, natri máu).
- Ví dụ tính toán có đầy đủ Given/Find/Approach/Solution/Check/Interpretation.
- DOMAIN_RULES tuân thủ: chỉ giải thích cơ chế, không liều/chỉ định/PK.

---

## H. Items for Human Expert Decision

1. **`V-10.01` (tên chương):** xác nhận tên chính thức tại `MANIFEST.md`.
2. **`V-10.02` (giá trị osmolality, TBW, natri máu):** chuyên gia xác nhận.
3. **`V-10.03` (hình vẽ/sơ đồ):** cần vẽ 3 khung `[FIGURE]`.
4. **`V-10.04` (tài liệu tham khảo):** cung cấp giáo trình chuẩn.
5. 3 lỗi Minor `QA-10.01`–`QA-10.03` sẽ sửa ở S5A.

---

## I. Not verified / limitations

- Không có `APPROVED_REFERENCE_LIST`; 3 mục tham khảo là thẻ giữ chỗ.
- Reviewer không thể xác nhận tài liệu tham khảo tồn tại (R4).
- Chưa có khung `[FIGURE]` — cần thêm 3 khung hình.
- Tên chương chưa chốt.

---

Gate B: **ĐỦ ĐIỀU KIỆN QUA** (0 Critical / 0 Major). Minor để lại S5A.