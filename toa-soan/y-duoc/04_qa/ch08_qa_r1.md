# ch08_qa_r1.md — S4 QA Vòng 1 · Chương 08 (Điện thế màng và điện thế hoạt động)

**Môn:** Y dược – Master Lecture Notes · **Stage:** S4 Independent QA · **Ngày:** 2026-11-09  
**Reviewer:** độc lập (không phải tác giả) · **Bản thảo:** `03_chapters/ch08_draft.md` (~290 dòng, ~3.800 từ)  
**Nguồn:** `00_source_original/ch08_doc-myd-8.html` (D-08) · **Ma trận:** `02_mapping/ch08_matrix.md`  
**Quy tắc:** `toa-soan_rules.md` mục 4 (R1–R12) & mục 7.5 (S4). Mọi trạng thái `[INTERNAL]` / `[EXTERNAL-KNOWLEDGE]`.

---

## A. Verdict

- **Kết luận thẩm định (Verdict):** **PASS WITH CONDITIONS**
- **Thống kê lỗi theo mức độ nghiêm trọng:** **Critical: 0** · **Major: 0** · **Minor: 3** (`QA-08.01`, `QA-08.02`, `QA-08.03`)
- **Luận cứ (3–5 dòng):**
  - Bản thảo ~3.800 từ (4,4× nguồn 872 từ — nguồn rất ngắn; mở rộng khung sư pháp + bài tập, không vi phạm upper limit), phủ **4/4 S-ID** (100%), `REMOVE = 0`, không vi phạm `DOMAIN_RULES` (không bổ sung liều/chỉ định/PK).
  - Tính toán: Example 5.1 ($E_{Na} = 61,5 \\times \\log_{10}(140/14) = +61,5\\text{ mV}$ ✓), Bài tập 5 (khớp ✓), Bài tập 6 ($+30 - (-70) = 100\\text{ mV}$ ✓), Bài tập 7 ($E_K^{trước} \\approx -95\\text{ mV}$, $E_K^{sau} \\approx -84,3\\text{ mV}$ ✓) — khớp 100%.
  - Chỉ còn 3 lỗi Minor (dấu `$` dư sau thẻ `[SRC]`), không chặn Gate B. Nên sửa ở S5A, không cần mở vòng QA mới.

---

## B. Issue Table (vòng 1)

| Issue ID | T-ID | Category | Severity | Basis | Evidence (nguồn/đối chiếu vs. bản thảo, mỗi trích ≤25 từ) | Recommended correction | Return to author = Y/N |
|---|---|---|---|---|---|---|---|
| **QA-08.01** | `T-08.5.2` | Format / Typo | **Minor** | `[INTERNAL]` | Bản thảo (mẹo nhớ 1): `[SRC: S-08.2, S-08.3]$` — ký hiệu `$` dư sau thẻ đóng. | Xóa `$` dư: `[SRC: S-08.2, S-08.3]` | **N** (sửa ở S5A) |
| **QA-08.02** | `T-08.5.2` | Format / Typo | **Minor** | `[INTERNAL]` | Bản thảo (mẹo nhớ 2): `[SRC: S-08.2]$` — ký hiệu `$` dư sau thẻ đóng. | Xóa `$` dư: `[SRC: S-08.2]` | **N** (sửa ở S5A) |
| **QA-08.03** | `T-08.5.2` | Format / Typo | **Minor** | `[INTERNAL]` | Bản thảo (mẹo nhớ 3): `[SRC: S-08.2]$` — ký hiệu `$` dư sau thẻ đóng. | Xóa `$` dư: `[SRC: S-08.2]` | **N** (sửa ở S5A) |

---

## B2. Bảng đối chiếu các thẻ `[ADDED]` / `[VERIFY]`

| V-ID | Số thẻ | Vị trí | Trạng thái |
|---|---|---|---|
| `V-08.01` (tên chương) | 1 | `T-08.1.1` | Open — chờ MANIFEST xác nhận |
| `V-08.02` (điện thế nghỉ, hoạt động, E_K) | 2 | `T-08.4.1`, `T-08.5.1` | Open — cần chuyên gia xác nhận |
| `V-08.03` (0 hình vẽ/sơ đồ) | 1 | `T-08.5.4` | Open — cần vẽ hình |
| `V-08.04` (0 tài liệu tham khảo, 3 mục) | 1 (chứa 3 thẻ gốc) | `T-08.8.1` | Open — `APPROVED_REFERENCE_LIST: none` |
| **TOTAL** | **4** | | |

---

## C. Coverage table

| S-ID | Nguồn | T-ID tiếp nhận | Trạng thái |
|---|---|---|---|
| S-08.1 | Điện thế nghỉ | `T-08.4.1` | Preserved + Expanded |
| S-08.2 | Điện thế hoạt động | `T-08.4.2` | Preserved + Expanded |
| S-08.3 | Cơ tim & liên hệ thuốc | `T-08.4.3` | Preserved + Expanded |
| S-08.4 | Ý nghĩa và tác dụng | `T-08.4.4` | Preserved + Expanded |

**4/4 S-ID (100%), 0 missing.**

---

## D. Calculation table

| Mục | Giá trị bản thảo | Tái tính độc lập | Khớp? |
|---|---|---|---|
| Example 5.1 — điện thế cân bằng Na⁺ | $E_{Na} = 61,5 \\times \\log_{10}(140/14) = +61,5\\text{ mV}$ | $+61,5\\text{ mV}$ | Yes |
| Bài tập 5 — điện thế cân bằng Na⁺ | $E_{Na} = 61,5 \\times \\log_{10}(140/14) = +61,5\\text{ mV}$ | $+61,5\\text{ mV}$ | Yes |
| Bài tập 6 — chênh lệch điện thế | $+30 - (-70) = 100\\text{ mV}$ | $100\\text{ mV}$ | Yes |
| Bài tập 7 — rối loạn kali | $E_K^{trước} \\approx -95\\text{ mV}$, $E_K^{sau} \\approx -84,3\\text{ mV}$ | $-95\\text{ mV}$, $-84,3\\text{ mV}$ | Yes |

**4/4 phép tính khớp.**

---

## E. Tag and Reference Audit

- `[ADDED]=~60`, `[VERIFY]=4`, `[CONFLICT]=0`, `[FIGURE]=0`.
- Không có thẻ `[ADDED]` nào chứa dữ liệu mới bịa đặt (tất cả là khung sư pháp, ví dụ, bảng, bài tập — đã ghi lý do).
- 3 mục tham khảo tại `T-08.8.1` đều là `[VERIFY]` placeholder, không bịa tên sách/tác giả/năm. Tuân thủ R4.
- Không có tài liệu nào được khẳng định là tồn tại.
- Chưa có khung `[FIGURE]` — cần thêm 3 khung hình (`V-08.03`).

---

## F. Learning Objective Alignment Matrix

| LO | Được dạy tại | Được đánh giá tại | Câu hỏi | Đáp án |
|---|---|---|---|---|
| LO-1 | `4.1`–`4.3` | `7.1` | Câu 1–4 | Câu 1–4 |
| LO-2 | `4.1`, `4.2` | `7.2` | Bài tập 5–7 | Bài tập 5–7 |
| LO-3 | `4.3` | `7.2`, `7.3` | Bài tập 7, Câu 8–9 | Bài tập 7, Câu 8–9 |
| LO-4 | `4.1`, `4.3`, `4.4`, `6.1` | `7.3` | Câu 10 | Câu 10 |

Mọi LO đều được dạy và đánh giá, có đáp án chi tiết.

---

## G. Strengths

- Cấu trúc T1–T8 đầy đủ, tuân thủ ma trận đã duyệt.
- Giữ nguyên tất cả công thức, số liệu, ví dụ của nguồn (Nernst Na⁺, điện thế nghỉ −70 mV, điện thế hoạt động +30 mV, E_K −95 mV).
- Ví dụ tính toán có đầy đủ Given/Find/Approach/Solution/Check/Interpretation.
- DOMAIN_RULES tuân thủ: chỉ giải thích cơ chế, không liều/chỉ định/PK.
- Bảng 8.1 (tổng hợp công thức & lưu ý) hữu ích cho sinh viên Dược.

---

## H. Items for Human Expert Decision

1. **`V-08.01` (tên chương):** xác nhận tên chính thức tại `MANIFEST.md` (hiện dùng tên tạm "Điện thế màng và điện thế hoạt động").
2. **`V-08.02` (điện thế nghỉ, hoạt động, E_K):** chuyên gia xác nhận ($E_K \\approx -95\\text{ mV}$).
3. **`V-08.03` (hình vẽ/sơ đồ):** cần vẽ 3 khung `[FIGURE]`.
4. **`V-08.04` (tài liệu tham khảo):** cung cấp giáo trình chuẩn.
5. 3 lỗi Minor `QA-08.01`–`QA-08.03` sẽ sửa ở S5A.

---

## I. Not verified / limitations

- Không có `APPROVED_REFERENCE_LIST`; 3 mục tham khảo là thẻ giữ chỗ.
- Reviewer không thể xác nhận tài liệu tham khảo tồn tại (R4).
- Chưa có khung `[FIGURE]` — cần thêm 3 khung hình.
- Tên chương chưa chốt.

---

Gate B: **ĐỦ ĐIỀU KIỆN QUA** (0 Critical / 0 Major). Minor để lại S5A.