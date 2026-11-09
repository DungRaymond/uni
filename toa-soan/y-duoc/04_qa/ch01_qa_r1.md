# ch01_qa_r1.md — S4 QA Vòng 1 · Chương 01 (Sinh lý tim mạch & Hệ thống điều hòa huyết áp thể dịch - thần kinh)

**Môn:** Y dược – Master Lecture Notes · **Stage:** S4 Independent QA · **Ngày:** 2026-11-09  
**Reviewer:** độc lập (không phải tác giả) · **Bản thảo:** `03_chapters/ch01_draft.md` (~290 dòng, ~3.800 từ)  
**Nguồn:** `00_source_original/ch01_doc-myd-1.html` (D-01) · **Ma trận:** `02_mapping/ch01_matrix.md`  
**Quy tắc:** `toa-soan_rules.md` mục 4 (R1–R12) & mục 7.5 (S4). Mọi trạng thái `[INTERNAL]` / `[EXTERNAL-KNOWLEDGE]`.

---

## A. Verdict

- **Kết luận thẩm định (Verdict):** **PASS WITH CONDITIONS**
- **Thống kê lỗi theo mức độ nghiêm trọng:** **Critical: 0** · **Major: 0** · **Minor: 3** (`QA-01.01`–`QA-01.03`)
- **Luận cứ (3–5 dòng):**
  - Bản thảo ~3.800 từ (8,5× nguồn 445 từ — nguồn rất ngắn; mở rộng khung sư pháp + bài tập, không vi phạm upper limit), phủ **3/3 S-ID** (100%), `REMOVE = 0`, không vi phạm `DOMAIN_RULES`.
  - Tính toán: Example 5.1 ($75 \times 70 = 5,25$ L/phút; $110 \times 45 = 4,95$ L/phút) — khớp 100%.
  - Chỉ còn 3 lỗi Minor (dấu `$` dư sau thẻ `[SRC]`), không chặn Gate B. Nên sửa ở S5A, không cần mở vòng QA mới.

---

## B. Issue Table (vòng 1)

| Issue ID | T-ID | Category | Severity | Basis | Evidence | Recommended correction | Return to author = Y/N |
|---|---|---|---|---|---|---|---|
| **QA-01.01** | `T-01.5.2` | Format / Typo | **Minor** | `[INTERNAL]` | Bản thảo (mẹo nhớ): `[SRC: S-01.2]$` — ký hiệu `$` dư sau thẻ đóng. | Xóa `$` dư: `[SRC: S-01.2]` | **N** (sửa ở S5A) |
| **QA-01.02** | `T-01.5.2` | Format / Typo | **Minor** | `[INTERNAL]` | Bản thảo (mẹo nhớ): `[SRC: S-01.3]$` — ký hiệu `$` dư sau thẻ đóng. | Xóa `$` dư: `[SRC: S-01.3]` | **N** (sửa ở S5A) |
| **QA-01.03** | `T-01.3.1` | Style / Typo | **Minor** | `[INTERNAL]` | Bản thảo (dòng ~45): "tăng huyếtáp" — từ bị gộp lỗi, sai chính tả. | Sửa thành "tăng huyết áp". | **N** (sửa ở S5A) |

---

## B2. Bảng đối chiếu các thẻ `[ADDED]` / `[VERIFY]`

| V-ID | Số thẻ | Vị trí | Trạng thái |
|---|---|---|---|
| `V-01.01` (tên chương) | 1 | `T-01.1.1` | Open — chờ MANIFEST xác nhận |
| `V-01.02` (giá trị $CO$, $HR$, $SV$ nghỉ) | 2 | `T-01.4.1`, `T-01.5.1` | Open — cần chuyên gia xác nhận |
| `V-01.03` (0 hình vẽ/sơ đồ) | 1 | `T-01.5.4` | Open — cần vẽ hình |
| `V-01.04` (0 tài liệu tham khảo, 3 mục) | 1 (chứa 3 thẻ gốc) | `T-01.8.1` | Open — `APPROVED_REFERENCE_LIST: none` |
| **TOTAL** | **4** | | |

---

## C. Coverage table

| S-ID | Nguồn | T-ID tiếp nhận | Trạng thái |
|---|---|---|---|
| S-01.1 | Cung lượng tim | `T-01.4.1` | Preserved + Expanded |
| S-01.2 | Hệ trục điều hòa huyết áp | `T-01.4.2` | Preserved + Expanded |
| S-01.3 | Ý nghĩa và tác dụng | `T-01.4.3` | Preserved + Expanded |

**3/3 S-ID (100%), 0 missing.**

---

## D. Calculation table

| Mục | Giá trị bản thảo | Tái tính độc lập | Khớp? |
|---|---|---|---|
| Example 5.1 — cung lượng tim nghỉ | $CO = 75 \times 70 = 5,25$ L/phút | $5,25$ L/phút | Yes |
| Example 5.1 — cung lượng tim sốc | $CO = 110 \times 45 = 4,95$ L/phút | $4,95$ L/phút | Yes |

**2/2 phép tính khớp.**

---

## E. Tag and Reference Audit

- `[ADDED]=~60`, `[VERIFY]=4`, `[CONFLICT]=0`, `[FIGURE]=0`.
- Không có thẻ `[ADDED]` nào chứa dữ liệu mới bịa đặt.
- 3 mục tham khảo tại `T-01.8.1` đều là `[VERIFY]` placeholder, không bịa tên sách/tác giả/năm. Tuân thủ R4.
- Không có tài liệu nào được khẳng định là tồn tại.
- Chưa có khung `[FIGURE]` — cần thêm 3 khung hình (`V-01.03`).

---

## F. Learning Objective Alignment Matrix

| LO | Được dạy tại | Được đánh giá tại | Câu hỏi | Đáp án |
|---|---|---|---|---|
| LO-1 | `4.1` | `7.1` | Câu 1–4 | Câu 1–4 |
| LO-2 | `4.1`, `4.2` | `7.2` | Bài tập 5–6 | Bài tập 5–6 |
| LO-3 | `4.3` | `7.2`, `7.3` | Bài tập 7, Câu 8–9 | Bài tập 7, Câu 8–9 |
| LO-4 | `4.1`, `4.3`, `6.1` | `7.3` | Câu 10 | Câu 10 |

Mọi LO đều được dạy và đánh giá, có đáp án chi tiết.

---

## G. Strengths

- Cấu trúc T1–T8 đầy đủ, tuân thủ ma trận đã duyệt.
- Giữ nguyên tất cả công thức, số liệu, ví dụ của nguồn ($CO = HR \times SV$, $HR \approx 70-80$, $SV \approx 60-80$, $CO \approx 4,5-5,5$ L/phút).
- Ví dụ tính toán có đầy đủ Given/Find/Approach/Solution/Check/Interpretation.
- DOMAIN_RULES tuân thủ: chỉ giải thích cơ chế, không liều/chỉ định/PK.

---

## H. Items for Human Expert Decision

1. **`V-01.01` (tên chương):** xác nhận tên chính thức tại `MANIFEST.md`.
2. **`V-01.02` (giá trị $CO$, $HR$, $SV$):** chuyên gia xác nhận.
3. **`V-01.03` (hình vẽ/sơ đồ):** cần vẽ 3 khung `[FIGURE]`.
4. **`V-01.04` (tài liệu tham khảo):** cung cấp giáo trình chuẩn.
5. 3 lỗi Minor `QA-01.01`–`QA-01.03` sẽ sửa ở S5A.

---

## I. Not verified / limitations

- Không có `APPROVED_REFERENCE_LIST`; 3 mục tham khảo là thẻ giữ chỗ.
- Reviewer không thể xác nhận tài liệu tham khảo tồn tại (R4).
- Chưa có khung `[FIGURE]` — cần thêm 3 khung hình.
- Tên chương chưa chốt.

---

Gate B: **ĐỦ ĐIỀU KIỆN QUA** (0 Critical / 0 Major). Minor để lại S5A.