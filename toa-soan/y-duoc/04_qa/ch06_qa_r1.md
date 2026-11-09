# ch06_qa_r1.md — S4 QA Vòng 1 · Chương 06 (Thực hành đo huyết áp và diễn giải kết quả)

**Môn:** Y dược – Master Lecture Notes · **Stage:** S4 Independent QA · **Ngày:** 2026-11-09  
**Reviewer:** độc lập (không phải tác giả) · **Bản thảo:** `03_chapters/ch06_draft.md` (~290 dòng, ~3.800 từ)  
**Nguồn:** `00_source_original/ch06_doc-myd-6.html` (D-06) · **Ma trận:** `02_mapping/ch06_matrix.md`  
**Quy tắc:** `toa-soan_rules.md` mục 4 (R1–R12) & mục 7.5 (S4). Mọi trạng thái `[INTERNAL]` / `[EXTERNAL-KNOWLEDGE]`.

---

## A. Verdict

- **Kết luận thẩm định (Verdict):** **PASS WITH CONDITIONS**
- **Thống kê lỗi theo mức độ nghiêm trọng:** **Critical: 0** · **Major: 0** · **Minor: 3** (`QA-06.01`, `QA-06.02`, `QA-06.03`)
- **Luận cứ (3–5 dòng):**
  - Bản thảo ~3.800 từ (4,4× nguồn 872 từ — nguồn rất ngắn; mở rộng khung sư pháp + bài tập, không vi phạm upper limit), phủ **3/3 S-ID** (100%), `REMOVE = 0`, không vi phạm `DOMAIN_RULES` (không bổ sung liều/chỉ định/PK).
  - Không có phép tính phức tạp trong bản thảo (chỉ đọc chỉ số mmHg), không cần bảng tái tính.
  - Chỉ còn 3 lỗi Minor (dấu `$` dư sau thẻ `[SRC]`, lỗi gõ), không chặn Gate B. Nên sửa ở S5A, không cần mở vòng QA mới.

---

## B. Issue Table (vòng 1)

| Issue ID | T-ID | Category | Severity | Basis | Evidence (nguồn/đối chiếu vs. bản thảo, mỗi trích ≤25 từ) | Recommended correction | Return to author = Y/N |
|---|---|---|---|---|---|---|---|
| **QA-06.01** | `T-06.5.2` | Format / Typo | **Minor** | `[INTERNAL]` | Bản thảo (mẹo nhớ 2): `[SRC: S-06.2]$` — ký hiệu `$` dư sau thẻ đóng. | Xóa `$` dư: `[SRC: S-06.2]` | **N** (sửa ở S5A) |
| **QA-06.02** | `T-06.5.2` | Format / Typo | **Minor** | `[INTERNAL]` | Bản thảo (mẹo nhớ 3): `[SRC: S-06.3]$` — ký hiệu `$` dư sau thẻ đóng. | Xóa `$` dư: `[SRC: S-06.3]` | **N** (sửa ở S5A) |
| **QA-06.03** | `T-06.3.1` | Style / Typo | **Minor** | `[INTERNAL]` | Bản thảo (dòng ~45): "tăng huyếtáp" — từ bị gộp lỗi, sai chính tả. | Sửa thành "tăng huyết áp". | **N** (sửa ở S5A) |

---

## B2. Bảng đối chiếu các thẻ `[ADDED]` / `[VERIFY]`

| V-ID | Số thẻ | Vị trí | Trạng thái |
|---|---|---|---|
| `V-06.01` (tên chương) | 1 | `T-06.1.1` | Open — chờ MANIFEST xác nhận |
| `V-06.02` (ngưỡng tăng huyết áp, mmHg) | 2 | `T-06.4.2`, `T-06.7.2` | Open — cần chuyên gia xác nhận |
| `V-06.03` (0 hình vẽ/sơ đồ) | 1 | `T-06.5.4` | Open — cần vẽ hình |
| `V-06.04` (0 tài liệu tham khảo, 3 mục) | 1 (chứa 3 thẻ gốc) | `T-06.8.1` | Open — `APPROVED_REFERENCE_LIST: none` |
| **TOTAL** | **4** | | |

---

## C. Coverage table

| S-ID | Nguồn | T-ID tiếp nhận | Trạng thái |
|---|---|---|---|
| S-06.1 | Chuẩn bị và thao tác | `T-06.4.1` | Preserved + Expanded |
| S-06.2 | Ý nghĩa và sai số | `T-06.4.2` | Preserved + Expanded |
| S-06.3 | Ý nghĩa và tác dụng | `T-06.4.3` | Preserved + Expanded |

**3/3 S-ID (100%), 0 missing.**

---

## D. Calculation table

| Mục | Giá trị bản thảo | Tái tính độc lập | Khớp? |
|---|---|---|---|
| — | — | — | — |

**0/0 phép tính.** Bản thảo không chứa phép tính số (chỉ đọc chỉ số mmHg trong ví dụ), không cần tái tính.

---

## E. Tag and Reference Audit

- `[ADDED]=~60`, `[VERIFY]=4`, `[CONFLICT]=0`, `[FIGURE]=0`.
- Không có thẻ `[ADDED]` nào chứa dữ liệu mới bịa đặt (tất cả là khung sư pháp, ví dụ, bảng, bài tập — đã ghi lý do).
- 3 mục tham khảo tại `T-06.8.1` đều là `[VERIFY]` placeholder, không bịa tên sách/tác giả/năm. Tuân thủ R4.
- Không có tài liệu nào được khẳng định là tồn tại.
- Chưa có khung `[FIGURE]` — cần thêm 3 khung hình (`V-06.03`).

---

## F. Learning Objective Alignment Matrix

| LO | Được dạy tại | Được đánh giá tại | Câu hỏi | Đáp án |
|---|---|---|---|---|
| LO-1 | `4.1`, `4.2` | `7.1` | Câu 1–4 | Câu 1–4 |
| LO-2 | `4.1`, `4.2` | `7.2` | Bài tập 5–6 | Bài tập 5–6 |
| LO-3 | `4.1`, `4.2`, `4.3` | `7.2`, `7.3` | Bài tập 6, Câu 8–9 | Bài tập 6, Câu 8–9 |
| LO-4 | `4.1`, `4.2`, `4.3`, `6.1` | `7.3` | Câu 10 | Câu 10 |

Mọi LO đều được dạy và đánh giá, có đáp án chi tiết.

---

## G. Strengths

- Cấu trúc T1–T8 đầy đủ, tuân thủ ma trận đã duyệt.
- Giữ nguyên tất cả nội dung nguồn (4 bước chuẩn đo, 3 sai số, ví dụ đo lặp lại 150/95 → 132/84 → 130/82 mmHg).
- Ví dụ có đầy đủ Given/Find/Approach/Solution/Check/Interpretation.
- DOMAIN_RULES tuân thủ: chỉ giải thích cơ chế, không liều/chỉ định/PK.
- Bảng 6.1 (tổng hợp quy chuẩn & lưu ý) hữu ích cho sinh viên Dược.

---

## H. Items for Human Expert Decision

1. **`V-06.01` (tên chương):** xác nhận tên chính thức tại `MANIFEST.md` (hiện dùng tên tạm "Thực hành đo huyết áp và diễn giải kết quả").
2. **`V-06.02` (ngưỡng tăng huyết áp & mmHg):** chuyên gia xác nhận.
3. **`V-06.03` (hình vẽ/sơ đồ):** cần vẽ 3 khung `[FIGURE]`.
4. **`V-06.04` (tài liệu tham khảo):** cung cấp giáo trình chuẩn.
5. 3 lỗi Minor `QA-06.01`–`QA-06.03` sẽ sửa ở S5A.

---

## I. Not verified / limitations

- Không có `APPROVED_REFERENCE_LIST`; 3 mục tham khảo là thẻ giữ chỗ.
- Reviewer không thể xác nhận tài liệu tham khảo tồn tại (R4).
- Chưa có khung `[FIGURE]` — cần thêm 3 khung hình.
- Tên chương chưa chốt.

---

Gate B: **ĐỦ ĐIỀU KIỆN QUA** (0 Critical / 0 Major). Minor để lại S5A.