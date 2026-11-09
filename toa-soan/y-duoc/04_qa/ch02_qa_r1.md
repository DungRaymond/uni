# ch02_qa_r1.md — S4 QA Vòng 1 · Chương 02 (Các thông số Dược động học cơ bản (Hệ ADME))

**Môn:** Y dược – Master Lecture Notes · **Stage:** S4 Independent QA · **Ngày:** 2026-11-09  
**Reviewer:** độc lập (không phải tác giả) · **Bản thảo:** `03_chapters/ch02_draft.md` (~290 dòng, ~3.800 từ)  
**Nguồn:** `00_source_original/ch02_doc-myd-2.html` (D-02) · **Ma trận:** `02_mapping/ch02_matrix.md`  
**Quy tắc:** `toa-soan_rules.md` mục 4 (R1–R12) & mục 7.5 (S4). Mọi trạng thái `[INTERNAL]` / `[EXTERNAL-KNOWLEDGE]`.

---

## A. Verdict

- **Kết luận thẩm định (Verdict):** **PASS WITH CONDITIONS**
- **Thống kê lỗi theo mức độ nghiêm trọng:** **Critical: 0** · **Major: 0** · **Minor: 3** (`QA-02.01`–`QA-02.03`)
- **Luận cứ (3–5 dòng):**
  - Bản thảo ~3.800 từ (8,7× nguồn 438 từ — nguồn rất ngắn; mở rộng khung sư pháp + bài tập, không vi phạm upper limit), phủ **3/3 S-ID** (100%), `REMOVE = 0`, không vi phạm `DOMAIN_RULES`.
  - Tính toán: Example 5.1 ($V_d = 500/25 = 20$ L; $t_{1/2} = 0,693 \times 40/4 = 6,9$ giờ) — khớp 100%.
  - Chỉ còn 3 lỗi Minor (dấu `$` dư sau thẻ `[SRC]`, lỗi gõ), không chặn Gate B. Nên sửa ở S5A, không cần mở vòng QA mới.

---

## B. Issue Table (vòng 1)

| Issue ID | T-ID | Category | Severity | Basis | Evidence | Recommended correction | Return to author = Y/N |
|---|---|---|---|---|---|---|---|
| **QA-02.01** | `T-02.5.2` | Format / Typo | **Minor** | `[INTERNAL]` | Bản thảo (mẹo nhớ): `[SRC: S-02.2]$` — ký hiệu `$` dư sau thẻ đóng. | Xóa `$` dư: `[SRC: S-02.2]` | **N** (sửa ở S5A) |
| **QA-02.02** | `T-02.5.2` | Format / Typo | **Minor** | `[INTERNAL]` | Bản thảo (mẹo nhớ): `[SRC: S-02.3]$` — ký hiệu `$` dư sau thẻ đóng. | Xóa `$` dư: `[SRC: S-02.3]` | **N** (sửa ở S5A) |
| **QA-02.03** | `T-02.3.1` | Style / Typo | **Minor** | `[INTERNAL]` | Bản thảo (dòng ~45): "tăng huyếtáp" — từ bị gộp lỗi, sai chính tả. | Sửa thành "tăng huyết áp". | **N** (sửa ở S5A) |

---

## B2. Bảng đối chiếu các thẻ `[ADDED]` / `[VERIFY]`

| V-ID | Số thẻ | Vị trí | Trạng thái |
|---|---|---|---|
| `V-02.01` (tên chương) | 1 | `T-02.1.1` | Open — chờ MANIFEST xác nhận |
| `V-02.02` (giá trị $F$, $V_d$, $t_{1/2}$, $Cl$) | 2 | `T-02.4.1`, `T-02.4.2`, `T-02.4.3` | Open — cần chuyên gia xác nhận |
| `V-02.03` (0 hình vẽ/sơ đồ) | 1 | `T-02.5.4` | Open — cần vẽ hình |
| `V-02.04` (0 tài liệu tham khảo, 3 mục) | 1 (chứa 3 thẻ gốc) | `T-02.8.1` | Open — `APPROVED_REFERENCE_LIST: none` |
| **TOTAL** | **4** | | |

---

## C. Coverage table

| S-ID | Nguồn | T-ID tiếp nhận | Trạng thái |
|---|---|---|---|
| S-02.1 | Hấp thu & Sinh khả dụng | `T-02.4.1` | Preserved + Expanded |
| S-02.2 | Phân bố & Thể tích phân bố | `T-02.4.2` | Preserved + Expanded |
| S-02.3 | Thải trừ & Thời gian bán thải | `T-02.4.3` | Preserved + Expanded |

**3/3 S-ID (100%), 0 missing.**

---

## D. Calculation table

| Mục | Giá trị bản thảo | Tái tính độc lập | Khớp? |
|---|---|---|---|
| Example 5.1 — thể tích phân bố | $V_d = 500/25 = 20$ L | $20$ L | Yes |
| Example 5.1 — thời gian bán thải | $t_{1/2} = 0,693 \times 40/4 = 6,9$ giờ | $6,9$ giờ | Yes |

**2/2 phép tính khớp.**

---

## E. Tag and Reference Audit

- `[ADDED]=~60`, `[VERIFY]=4`, `[CONFLICT]=0`, `[FIGURE]=0`.
- Không có thẻ `[ADDED]` nào chứa dữ liệu mới bịa đặt.
- 3 mục tham khảo tại `T-02.8.1` đều là `[VERIFY]` placeholder, không bịa tên sách/tác giả/năm. Tuân thủ R4.
- Không có tài liệu nào được khẳng định là tồn tại.
- Chưa có khung `[FIGURE]` — cần thêm 3 khung hình (`V-02.03`).

---

## F. Learning Objective Alignment Matrix

| LO | Được dạy tại | Được đánh giá tại | Câu hỏi | Đáp án |
|---|---|---|---|---|
| LO-1 | `4.1`–`4.3` | `7.1` | Câu 1–4 | Câu 1–4 |
| LO-2 | `4.2`, `4.3`, `4.4` | `7.2` | Bài tập 5–7 | Bài tập 5–7 |
| LO-3 | `4.1`, `4.2`, `4.3` | `7.2`, `7.3` | Bài tập 7, Câu 8–9 | Bài tập 7, Câu 8–9 |
| LO-4 | `4.1`, `4.2`, `4.3`, `6.1` | `7.3` | Câu 10 | Câu 10 |

Mọi LO đều được dạy và đánh giá, có đáp án chi tiết.

---

## G. Strengths

- Cấu trúc T1–T8 đầy đủ, tuân thủ ma trận đã duyệt.
- Giữ nguyên tất cả công thức, số liệu, ví dụ của nguồn ($F = AUC/AUC_{IV} \times 100\%$, $V_d = D/C_0$, $t_{1/2} = 0,693 \cdot V_d/Cl$).
- Ví dụ tính toán có đầy đủ Given/Find/Approach/Solution/Check/Interpretation.
- DOMAIN_RULES tuân thủ: chỉ giải thích cơ chế, không liều/chỉ định/PK.

---

## H. Items for Human Expert Decision

1. **`V-02.01` (tên chương):** xác nhận tên chính thức tại `MANIFEST.md`.
2. **`V-02.02` (giá trị $F$, $V_d$, $t_{1/2}$, $Cl$):** chuyên gia xác nhận.
3. **`V-02.03` (hình vẽ/sơ đồ):** cần vẽ 3 khung `[FIGURE]`.
4. **`V-02.04` (tài liệu tham khảo):** cung cấp giáo trình chuẩn.
5. 3 lỗi Minor `QA-02.01`–`QA-02.03` sẽ sửa ở S5A.

---

## I. Not verified / limitations

- Không có `APPROVED_REFERENCE_LIST`; 3 mục tham khảo là thẻ giữ chỗ.
- Reviewer không thể xác nhận tài liệu tham khảo tồn tại (R4).
- Chưa có khung `[FIGURE]` — cần thêm 3 khung hình.
- Tên chương chưa chốt.

---

Gate B: **ĐỦ ĐIỀU KIỆN QUA** (0 Critical / 0 Major). Minor để lại S5A.