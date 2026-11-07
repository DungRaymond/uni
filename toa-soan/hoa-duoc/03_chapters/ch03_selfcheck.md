# ch03_selfcheck.md — Báo cáo Tự Kiểm tra Chương 03 (Stage S3 Self-Check)

**Môn:** Hóa vô cơ dược · **Chương:** 03 · **Stage:** S3 Write · **Ngày:** 2026-11-07  
**Bản thảo kiểm tra:** `03_chapters/ch03_draft.md`  
**Nhật ký thay đổi:** `03_chapters/ch03_changelog.md`  
**Nguồn gốc (READ-ONLY):** `00_source_original/ch03_doc-hvc-3.html` (D-03)

---

## 1. Đối soát Độ phủ S-ID (S-ID Coverage — `check_coverage.py`)

Kết quả chạy công cụ `_tools/check_coverage.py` (lưu tại `_state/checks/ch03_s3_coverage.md`):
- **Trạng thái:** **✅ PASS (`100.0%`)**
- **Tổng số S-ID trong Audit Register (`01_audit/ch03_audit.md`):** `8` (`S-03.1` đến `S-03.8`)
- **Số S-ID đã sử dụng trong bản thảo:** `8`
- **Số S-ID chưa sử dụng / bị bỏ sót (`Missing S-IDs`):** **`0`**

| S-ID | Nội dung nguồn (`D-03`) | Vị trí sử dụng trong `ch03_draft.md` (`T-ID`) | Trạng thái bảo toàn |
|---|---|---|---|
| `S-03.1` | 1. Luận điểm cơ bản của Thuyết VB (Heitler - London - Pauling) | `T-03.3.1`, `T-03.4.1` | ✅ Bảo toàn 100% |
| `S-03.2` | 2. Phân loại kiểu xen phủ tạo liên kết ($\sigma, \pi, \delta$) | `T-03.4.2`, `T-03.5.1` | ✅ Bảo toàn 100% |
| `S-03.3` | 3. Thuyết Lai hóa Orbital (Orbital Hybridization) | `T-03.4.3`, `T-03.4.4`, `T-03.4.5`, `T-03.5.3`, `T-03.5.4` | ✅ Bảo toàn 100% |
| `S-03.4` | 4. Ưu điểm và Hạn chế chí mạng của Thuyết VB | `T-03.4.6` | ✅ Bảo toàn 100% |
| `S-03.5` | Ý nghĩa và tác dụng | `T-03.3.1`, `T-03.4.6`, `T-03.6.1` | ✅ Bảo toàn 100% |
| `S-03.6` | Ví dụ — Lai hóa của C trong $CH_4, C_2H_4, C_2H_2$ | `T-03.5.1` (`Example 3.1`) | ✅ Bảo toàn 100% |
| `S-03.7` | Ví dụ — Vì sao góc $H-O-H$ chỉ $104,5^\circ$? | `T-03.5.2` (`Example 3.2`) | ✅ Bảo toàn 100% |
| `S-03.8` | Hộp ghi nhớ "Cách nhớ" | `T-03.4.3`, `T-03.5.4`, `T-03.6.1` | ✅ Bảo toàn 100% |

---

## 2. Thống kê Thẻ, Độ dài và Tính duy nhất của T-ID (Script Outputs)

1. **Thống kê thẻ (`_state/checks/ch03_s3_tags.md`):**
   - `[ADDED]` = **`149`**
   - `[VERIFY]` = **`25`** (phủ kín 100% cả 7 hạng mục `V-03.01`..`V-03.07` từ Audit Queue)
   - `[CONFLICT]` = **`0`**
   - `[FIGURE]` = **`4`** (`Hình 3.2` đến `Hình 3.5` tại `T-03.5.5`, cùng 1 sơ đồ thuật toán Mermaid `Hình 3.1` tại `T-03.5.4`)
2. **Kiểm tra độ dài (`_state/checks/ch03_s3_length.md`):**
   - Số từ bản thảo (`ch03_draft.md`): **`4,240` từ**
   - Số từ nguồn (`ch03_doc-hvc-3.html` sau lọc markup): **`1,131` từ** (`1,321` từ thô)
   - Tỷ lệ: **`3.75x`** (**✅ PASS**, đáp ứng quy tắc R7 không nén nội dung).
3. **Kiểm tra tính duy nhất của T-ID (`_state/checks/ch03_s3_ids.md`):**
   - Tổng số T-ID duy nhất: **`30`** (`T-03.1`..`T-03.8` và `T-03.1.1`..`T-03.8.1`), `Duplicates = 0` (**✅ PASS**).

---

## 3. Bảng Độ phủ Chuẩn đầu ra Học tập (`LO` → `T7` Questions)

| Mã CĐR (`LO`) | Mục giảng dạy (`T-ID`) | Câu hỏi / Bài tập đánh giá (`T7`) | Đáp án tại `T-03.7.4` |
|---|---|---|---|
| `LO-1` | `T-03.4.1`, `T-03.4.2`, `T-03.5.5` | Câu 1, Câu 2 (`T-03.7.1`); Câu 9 (`T-03.7.3`) | ✅ Có đầy đủ |
| `LO-2` | `T-03.4.3`, `T-03.4.4`, `T-03.5.1`, `T-03.5.2`, `T-03.5.4`, `T-03.6` | Câu 3, Câu 4 (`T-03.7.1`); Bài tập 5, Bài tập 6 (`T-03.7.2`) | ✅ Có đầy đủ |
| `LO-3` | `T-03.4.5`, `T-03.5.1`, `T-03.5.2`, `T-03.5.3` | Câu 4 (`T-03.7.1`); Bài tập 7 (`T-03.7.2`); Câu 8, Câu 9 (`T-03.7.3`) | ✅ Có đầy đủ |
| `LO-4` | `T-03.4.6`, `T-03.5.5`, `T-03.6.1` | Câu 10 (`T-03.7.3`) | ✅ Có đầy đủ |

---

## 4. Chưa kiểm chứng / Giới hạn (Not Verified / Limitations — R10 & R12)

1. **Dữ liệu góc liên kết và cấu trúc phức chất (`V-03.01`..`V-03.06`):** Giữ nguyên toàn bộ số liệu và ví dụ của nguồn gốc (`D-03`), gắn thẻ `[VERIFY]` để giảng viên/chuyên gia xác nhận.
2. **Tài liệu tham khảo (`V-03.07`):** Tuân thủ nghiêm ngặt quy tắc R4 (`APPROVED_REFERENCE_LIST: none`), đặt 3 thẻ giữ chỗ `[VERIFY: reference needed for ... (V-03.07)]` tại `T-03.8.1`.
3. **Tuân thủ `DOMAIN_RULES`:** Đối với Cisplatin ($cis\text{-}[Pt(NH_3)_2Cl_2]$), chỉ trình bày cấu trúc hóa học, trạng thái lai hóa $dsp^2$ và vai trò "thuốc chống ung thư" đúng như trong nguồn, tuyệt đối không thêm liều lượng, chỉ định lâm sàng chi tiết hay thông số dược động học.
4. **Bảo toàn file nguồn:** Tệp `00_source_original/ch03_doc-hvc-3.html` được giữ nguyên trạng (READ-ONLY).
