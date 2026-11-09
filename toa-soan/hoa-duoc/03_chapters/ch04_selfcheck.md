# ch04_selfcheck.md — Báo cáo Tự Kiểm tra Chương 04 (Stage S3 Self-Check)

**Môn:** Hóa vô cơ dược · **Chương:** 04 · **Stage:** S3 Write + S3-FIX (sau QA R1) · **Ngày:** 2026-11-07  
**Bản thảo kiểm tra:** `03_chapters/ch04_draft.md` (ghép từ `ch04_part1.md` + `ch04_part2.md` + `ch04_part3.md`)  
**Nhật ký thay đổi:** `03_chapters/ch04_changelog.md`  
**Nguồn gốc (READ-ONLY):** `00_source_original/ch04_doc-hvc-4.html` (D-04)  
**Ma trận có thẩm quyền:** `02_mapping/ch04_matrix_APPROVED.md`

---

## 1. Đối soát Độ phủ S-ID (S-ID Coverage — `check_coverage.py`)

Kết quả chạy `_tools/check_coverage.py` (lưu tại `_state/checks/ch04_s3_coverage.md`):
- **Trạng thái:** **✅ PASS (`100.0%`)**
- **Tổng số S-ID trong Audit Register (`01_audit/ch04_audit.md`):** `9` (`S-04.1` đến `S-04.9`)
- **Số S-ID đã sử dụng trong bản thảo:** `9`
- **Số S-ID chưa sử dụng / bị bỏ sót (`Missing S-IDs`):** **`0`**

| S-ID | Nội dung nguồn (`D-04`) | Vị trí sử dụng trong `ch04_draft.md` (`T-ID`) | Trạng thái bảo toàn |
|---|---|---|---|
| `S-04.1` | 1. Bản chất Thuyết MO & Phương pháp LCAO | `T-04.4.1`, `T-04.5.6` | ✅ Bảo toàn 100% |
| `S-04.2` | 2. Ba điều kiện tiên quyết để tổ hợp AO | `T-04.4.2`, `T-04.5.5` | ✅ Bảo toàn 100% |
| `S-04.3` | 3. Phân loại MO, Bậc liên kết & Từ tính | `T-04.4.3`, `T-04.5.1`, `T-04.7` | ✅ Bảo toàn 100% |
| `S-04.4` | 4. Giản đồ năng lượng MO phân tử đồng hạch chu kỳ 2 | `T-04.4.4`, `T-04.5.1`, `T-04.5.2`, `T-04.5.6` | ✅ Bảo toàn 100% |
| `S-04.5` | 5. Phân tử dị hạch & Thuyết orbital biên (HOMO–LUMO) | `T-04.4.5`, `T-04.5.3`, `T-04.5.6` | ✅ Bảo toàn 100% |
| `S-04.6` | Ý nghĩa và tác dụng (phần dẫn nhập) | `T-04.3.1`, `T-04.6.1` | ✅ Bảo toàn 100% |
| `S-04.7` | Ví dụ — Giản đồ MO của $O_2$ (thuận từ) và $N_2$ (nghịch từ) | `T-04.5.2` (`Example 4.2`) | ✅ Bảo toàn 100% |
| `S-04.8` | Ví dụ — Bậc liên kết của họ loài oxygen | `T-04.5.1` (`Example 4.1`) | ✅ Bảo toàn 100% |
| `S-04.9` | Hộp ghi nhớ "Cách nhớ" | `T-04.6.1`, `T-04.7` | ✅ Bảo toàn 100% |

**Không có S-ID nào bị bỏ sót hoặc không giải thích.**

---

## 2. Thống kê Thẻ, Độ dài và Tính duy nhất của T-ID (Script Outputs)

1. **Thống kê thẻ (`_state/checks/ch04_s3_tags.md`, sau S3-FIX):**
   - `[ADDED]` = **`57`**
   - `[VERIFY]` = **`44`** (phủ `V-04.01`–`V-04.12`; xem mục 4)
   - `[CONFLICT]` = **`0`**
   - `[FIGURE]` = **`5`** (5 khung `[FIGURE: 4.2 | ...]`–`[FIGURE: 4.6 | ...]`, đã chuẩn hóa cú pháp theo `check_tags.py`); cộng 1 sơ đồ Mermaid (**Hình 4.1**) không gắn thẻ → tổng **6 hình**.
2. **Kiểm tra độ dài (`_state/checks/ch04_s3_length.md`, sau S3-FIX):**
   - Số từ bản thảo (`ch04_draft.md`): **`6.940` từ**
   - Số từ nguồn (`ch04_doc-hvc-4.html` sau lọc markup): **`1.153` từ**
   - Tỷ lệ: **`6,02x`** (**✅ PASS**; `TARGET_LENGTH_PER_CHAPTER: not shorter than source; no upper limit`).
   - Phân bổ: Mục 1–6 (lý thuyết + ví dụ + tóm tắt) = **4.235 từ**; Mục 7 (đề + đáp án) = **2.577 từ**; Mục 8 = **128 từ**.
   - **Lưu ý công cụ:** `_tools/check_length.py` được sửa thứ tự xử lý (gỡ math **trước** khi gỡ thẻ HTML) vì dấu `<`, `>` trong công thức từng bị hiểu nhầm là thẻ HTML, làm undercount nghiêm trọng. Số liệu của các chương trước vì vậy thấp hơn thực tế; **không** chạy lại báo cáo cũ trong phiên này.
3. **Kiểm tra T-ID (`_state/checks/ch04_s3_ids.md`):**
   - Tổng số T-ID duy nhất: **`51`** (`T-04.1`–`T-04.8` và các tiểu mục đến cấp 4).
   - Script báo 5 T-ID xuất hiện nhiều lần: `T-01.4.1`, `T-03.4.6`, `T-04.2.1`, `T-04.5.5`, `T-04.7.4`. **Đã kiểm tra thủ công: cả 5 đều là tham chiếu chéo trong thân bài** (ví dụ "xem `T-04.5.5`"), không phải tiêu đề trùng. Mỗi tiêu đề `T-04.x` chỉ xuất hiện đúng một lần (đã liệt kê 51 tiêu đề, không trùng).
   - `check_ids.py` không phân biệt tiêu đề và tham chiếu chéo — giới hạn của script, không phải lỗi cấu trúc.

---

## 3. Bảng Độ phủ Chuẩn đầu ra Học tập (`LO` → `T7` Questions)

| Mã CĐR (`LO`) | Mục giảng dạy (`T-ID`) | Câu hỏi / Bài tập đánh giá (`T7`) | Đáp án tại `T-04.7.4` |
|---|---|---|---|
| `LO-1` | `T-04.4.1`, `T-04.4.2`, `T-04.4.3` | Câu 1 (Knowledge); Câu 2, Câu 3, Câu 4 (Comprehension) — `T-04.7.1` | ✅ Có đầy đủ |
| `LO-2` | `T-04.4.4`, `T-04.5.1`, `T-04.5.2`, `T-04.5.5` | Bài tập 5, Bài tập 6 — `T-04.7.2` | ✅ Có đầy đủ (từng bước $N_b, N_a, BO$) |
| `LO-3` | `T-04.4.4`, `T-04.4.5`, `T-04.6.2` | Bài tập 7 (`T-04.7.2`); Câu 8, Câu 9 (`T-04.7.3`) | ✅ Có đầy đủ |
| `LO-4` | `T-04.4.5.3`, `T-04.4.6`, `T-04.6.1` | Câu 8 (`LO-3`, `LO-4`); Câu 10 (`LO-4`) — `T-04.7.3` | ✅ Có đầy đủ |

**Kết luận:** 10/10 câu hỏi/bài tập có nhãn `LO` và cấp độ nhận thức; mỗi `LO-1`..`LO-4` được phủ bởi ít nhất một câu; 10/10 có đáp án/hướng dẫn giải.

---

## 4. Đối soát Verification Queue (`V-04.01`–`V-04.11`)

| V-ID | Nội dung | Vị trí trong bản thảo | Trạng thái |
|---|---|---|---|
| `V-04.01` | Cấu hình MO và tính thuận từ của $O_2$ | `T-04.4.4.3`, `T-04.5.2` | Open — `[VERIFY]` |
| `V-04.02` | Bậc liên kết bán nguyên của dãy oxygen | `T-04.4.3.2`, `T-04.5.1` | Open — `[VERIFY]` |
| `V-04.03` | $E_{lk}(N_2) \approx 945\text{ kJ/mol}$ | `T-04.4.4.2`, `T-04.5.2` | Open — `[VERIFY]` |
| `V-04.04` | Ngưỡng $\Delta E$ $10$–$14\text{ eV}$ | `T-04.4.2.1` | Open — `[VERIFY]` |
| `V-04.05` | Độ bền $CO$–$Hb$ "200–250 lần" | `T-04.4.5.3`, `T-04.5.3` | Open — `[VERIFY]` |
| `V-04.06` | Giản đồ MO của $CO$, HOMO trên $C$ | `T-04.4.5.2`, `T-04.5.3` | Open — `[VERIFY]` |
| `V-04.07` | Trật tự MO và trộn $s$–$p$; cấu hình $B_2, C_2, F_2$ | `T-04.4.4`, `T-04.5.2` | Open — `[VERIFY]` |
| `V-04.08` | Tài liệu tham khảo (3 thẻ giữ chỗ) | `T-04.8.1` | Open — `[VERIFY]` |
| `V-04.09` | Đếm electron và liên kết $3c\text{–}2e$ trong $B_2H_6$ | `T-04.4.6`, `T-04.5.4` | Open — `[VERIFY]` |
| `V-04.10` | Phát biểu $He_2$ có $BO=0$ "không thể tồn tại" | `T-04.4.3.2` | Open — `[VERIFY]` |
| `V-04.11` | Biểu thức năng lượng LCAO $E_\pm$ và điều kiện chuẩn hóa đầy đủ | `T-04.4.1.3` | Open — `[VERIFY]` (mã mới do S3 đề xuất) |
| `V-04.12` | Mẹo nhớ "BO lẻ → thuận từ" bị bỏ, thay bằng tiêu chí electron độc thân | `T-04.4.3.3`, `T-04.6.1` | Open — `[VERIFY]` (mã mới do S3 đề xuất; tách khỏi `V-04.10`) |

**Đã sửa theo Gate A (Q1–Q5):** thêm $3c\text{–}2e$ ($B_2H_6$); thêm $c_A^2+c_B^2=1$ và $E_\pm$; bỏ vế sai "BO lẻ → thuận từ"; thêm $B_2, C_2, F_2$ vào Bảng 4.2; 10 câu hỏi/bài tập có đáp án.

---

## 5. Chưa kiểm chứng / Giới hạn (Not Verified / Limitations — R10 & R12)

1. **Số liệu nguồn không có trích dẫn:** $BO$ bán nguyên, cấu hình MO của $O_2$, trật tự mức $N_2$/$F_2$, ngưỡng $\Delta E$, $E_{lk}(N_2)$, độ bền $CO$–$Hb$ "200–250 lần" — giữ nguyên theo `D-04`, gắn `[VERIFY]` (`V-04.01`–`V-04.07`).
2. **Nội dung bổ sung ngoài nguồn:** tiểu mục $3c\text{–}2e$ trong $B_2H_6$ và cấu hình/$BO$ của $B_2, C_2, F_2$ là kiến thức giáo trình chuẩn (đã duyệt Q1, Q4), gắn `[ADDED]` + `[VERIFY]`.
3. **Tài liệu tham khảo (`V-04.08`):** `D-04` có 0 tài liệu và `APPROVED_REFERENCE_LIST: none`; 3 mục ở `T-04.8.1` chỉ là thẻ giữ chỗ, **không bịa** tên sách/tác giả/năm/DOI (R4).
4. **Hình vẽ:** Hình 4.2–4.6 là khung giữ chỗ theo `FIGURE_POLICY`, chưa sản xuất; Hình 4.1 là sơ đồ Mermaid 4 bước.
5. **Đánh số hình:** Mermaid = Hình 4.1, placeholder = Hình 4.2–4.6 (ma trận dự kiến 4.1–4.5) — điều chỉnh R6 để đúng thứ tự xuất hiện, đã ghi trong changelog.
6. **Công cụ:** `check_length.py` đã được sửa lỗi thứ tự gỡ markup; `check_ids.py` và `check_tags.py` có giới hạn nhận dạng đã nêu ở mục 2.
7. **Phạm vi:** đây là self-check của tác giả/orchestrator, **không thay thế** S4 QA độc lập.
8. **Bảo toàn file nguồn:** `00_source_original/ch04_doc-hvc-4.html` giữ nguyên trạng (READ-ONLY).
