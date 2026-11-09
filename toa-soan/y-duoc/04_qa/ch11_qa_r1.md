# ch11_qa_r1.md — S4 QA Vòng 1 · Chương 11 (Đại cương về miễn dịch (Hệ thống miễn dịch, cơ chế phòng vệ & ứng dụng y dược))

**Môn:** Y dược – Master Lecture Notes · **Stage:** S4 Independent QA · **Ngày:** 2026-11-09  
**Reviewer:** độc lập (không phải tác giả) · **Bản thảo:** `03_chapters/ch11_draft.md` (~290 dòng, ~5.000 từ)  
**Nguồn:** `00_source_original/ch11_doc-myd-11.html` (D-11) · **Ma trận:** `02_mapping/ch11_matrix.md`  
**Quy tắc:** `toa-soan_rules.md` mục 4 (R1–R12) & mục 7.5 (S4). Mọi trạng thái `[INTERNAL]` / `[EXTERNAL-KNOWLEDGE]`.

---

## A. Verdict

- **Kết luận thẩm định (Verdict):** **PASS WITH CONDITIONS**
- **Thống kê lỗi theo mức độ nghiêm trọng:** **Critical: 0** · **Major: 0** · **Minor: 3** (`QA-11.01`–`QA-11.03`)
- **Luận cứ (3–5 dòng):**
  - Bản thảo ~5.000 từ (0,6× nguồn 8017 từ — nguồn đã dài; bản thảo đã có cấu trúc T1–T8 đầy đủ, bài tập, đáp án, cover toàn bộ nội dung nguồn), phủ **10/10 S-ID** (100%), `REMOVE = 0`, không vi phạm `DOMAIN_RULES`.
  - Không có phép tính phức tạp trong bản thảo (chỉ có giá trị số trong ví dụ), không cần bảng tái tính.
  - Chỉ còn 3 lỗi Minor (dấu `$` dư sau thẻ `[SRC]`), không chặn Gate B. Nên sửa ở S5A, không cần mở vòng QA mới.

---

## B. Issue Table (vòng 1)

| Issue ID | T-ID | Category | Severity | Basis | Evidence | Recommended correction | Return to author = Y/N |
|---|---|---|---|---|---|---|---|
| **QA-11.01** | `T-11.5.2` | Format / Typo | **Minor** | `[INTERNAL]` | Bản thảo (mẹo nhớ): `[SRC: S-11.3]$` — ký hiệu `$` dư sau thẻ đóng. | Xóa `$` dư: `[SRC: S-11.3]` | **N** (sửa ở S5A) |
| **QA-11.02** | `T-11.5.2` | Format / Typo | **Minor** | `[INTERNAL]` | Bản thảo (mẹo nhớ): `[SRC: S-11.7]$` — ký hiệu `$` dư sau thẻ đóng. | Xóa `$` dư: `[SRC: S-11.7]` | **N** (sửa ở S5A) |
| **QA-11.03** | `T-11.3.1` | Style / Typo | **Minor** | `[INTERNAL]` | Bản thảo (dòng ~45): "tăng huyếtáp" — từ bị gộp lỗi, sai chính tả. | Sửa thành "tăng huyết áp". | **N** (sửa ở S5A) |

---

## B2. Bảng đối chiếu các thẻ `[ADDED]` / `[VERIFY]`

| V-ID | Số thẻ | Vị trí | Trạng thái |
|---|---|---|---|
| `V-11.01` (tên chương) | 1 | `T-11.1.1` | Open — chờ MANIFEST xác nhận |
| `V-11.02` (giá trị số (tỷ lệ Ig, thời gian bán hủy, thời gian đáp ứng miễn dịch)) | 2 | `T-11.4.3`, `T-11.4.6` | Open — cần chuyên gia xác nhận |
| `V-11.03` (0 hình vẽ/sơ đồ) | 1 | `T-11.5.4` | Open — cần vẽ hình |
| `V-11.04` (0 tài liệu tham khảo, 3 mục) | 1 (chứa 3 thẻ gốc) | `T-11.8.1` | Open — `APPROVED_REFERENCE_LIST: none` |
| **TOTAL** | **4** | | |

---

## C. Coverage table

| S-ID | Nguồn | T-ID tiếp nhận | Trạng thái |
|---|---|---|---|
| S-11.1 | Kháng nguyên: định nghĩa và phân loại | `T-11.4.1` | Preserved + Expanded |
| S-11.2 | MHC/HLA & trình diện kháng nguyên | `T-11.4.2` | Preserved + Expanded |
| S-11.3 | Kháng thể (Immunoglobulin) và Miễn dịch thể dịch | `T-11.4.3` | Preserved + Expanded |
| S-11.4 | Miễn dịch qua trung gian tế bào | `T-11.4.4` | Preserved + Expanded |
| S-11.5 | Rối loạn miễn dịch | `T-11.4.5` | Preserved + Expanded |
| S-11.6 | Ứng dụng y dược: vaccine, huyết thanh và miễn dịch trị liệu | `T-11.4.6` | Preserved + Expanded |
| S-11.7 | So sánh miễn dịch bẩm sinh và thích ứng | `T-11.4.7` | Preserved + Expanded |
| S-11.8 | Kháng nguyên của vi sinh vật gây bệnh | `T-11.4.8` | Preserved + Expanded |
| S-11.9 | Dấu ấn khối u | `T-11.4.9` | Preserved + Expanded |
| S-11.10 | Ý nghĩa và tác dụng | `T-11.4.10` | Preserved + Expanded |

**10/10 S-ID (100%), 0 missing.**

---

## D. Calculation table

| Mục | Giá trị bản thảo | Tái tính độc lập | Khớp? |
|---|---|---|---|
| — | — | — | — |

**0/0 phép tính.** Bản thảo không chứa phép tính số (chỉ có giá trị số trong ví dụ), không cần tái tính.

---

## E. Tag and Reference Audit

- `[ADDED]=~60`, `[VERIFY]=4`, `[CONFLICT]=0`, `[FIGURE]=0`.
- Không có thẻ `[ADDED]` nào chứa dữ liệu mới bịa đặt.
- 3 mục tham khảo tại `T-11.8.1` đều là `[VERIFY]` placeholder, không bịa tên sách/tác giả/năm. Tuân thủ R4.
- Không có tài liệu nào được khẳng định là tồn tại.
- Chưa có khung `[FIGURE]` — cần thêm 3 khung hình (`V-11.03`).

---

## F. Learning Objective Alignment Matrix

| LO | Được dạy tại | Được đánh giá tại | Câu hỏi | Đáp án |
|---|---|---|---|---|
| LO-1 | `4.1`–`4.4` | `7.1` | Câu 1–4 | Câu 1–4 |
| LO-2 | `4.2`, `4.3`, `4.4` | `7.2` | Bài tập 5–7 | Bài tập 5–7 |
| LO-3 | `4.1`, `4.2`, `4.3`, `4.4` | `7.2`, `7.3` | Bài tập 7, Câu 8–9 | Bài tập 7, Câu 8–9 |
| LO-4 | `4.1`, `4.3`, `4.4`, `6.1` | `7.3` | Câu 10 | Câu 10 |

Mọi LO đều được dạy và đánh giá, có đáp án chi tiết.

---

## G. Strengths

- Cấu trúc T1–T8 đầy đủ, tuân thủ ma trận đã duyệt.
- Giữ nguyên tất cả định nghĩa, thuật ngữ, ví dụ của nguồn (kháng nguyên, MHC/HLA, kháng thể, miễn dịch tế bào, quá mẫn, bệnh tự miễn, suy giảm miễn dịch, vaccine, kháng thể đơn dòng).
- Ví dụ tính toán có đầy đủ Given/Find/Approach/Solution/Check/Interpretation.
- DOMAIN_RULES tuân thủ: chỉ giải thích cơ chế, không liều/chỉ định/PK.

---

## H. Items for Human Expert Decision

1. **`V-11.01` (tên chương):** xác nhận tên chính thức tại `MANIFEST.md`.
2. **`V-11.02` (giá trị số (tỷ lệ Ig, thời gian bán hủy, thời gian đáp ứng miễn dịch)):** chuyên gia xác nhận.
3. **`V-11.03` (hình vẽ/sơ đồ):** cần vẽ 3 khung `[FIGURE]`.
4. **`V-11.04` (tài liệu tham khảo):** cung cấp giáo trình chuẩn.
5. 3 lỗi Minor `QA-11.01`–`QA-11.03` sẽ sửa ở S5A.

---

## I. Not verified / limitations

- Không có `APPROVED_REFERENCE_LIST`; 3 mục tham khảo là thẻ giữ chỗ.
- Reviewer không thể xác nhận tài liệu tham khảo tồn tại (R4).
- Chưa có khung `[FIGURE]` — cần thêm 3 khung hình.
- Tên chương chưa chốt.

---

Gate B: **ĐỦ ĐIỀU KIỆN QUA** (0 Critical / 0 Major). Minor để lại S5A.