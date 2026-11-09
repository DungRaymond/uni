# Nhật ký Thay đổi (Changelog) · Chương 06

**Môn:** Hóa vô cơ dược · **Chương:** 06 — Hóa học phối trí & Ứng dụng dược  
**Stage:** S3 Write · **Ngày:** 2026-11-09  
**Nguồn:** `00_source_original/ch06_doc-hvc-6.html` (D-06, 5.158 từ, 9 S-ID)  
**Ma trận:** `02_mapping/ch06_matrix.md` (GATE A đã duyệt theo lệnh "duyệt hết")

---

## 1. Bảng ánh xạ S-ID → T-ID và hành động

| S-ID | Nguồn (D-06) | Mục tiêu T-ID | Hành động chính | Nội dung mới? (what) | Thẻ dùng |
|---|---|---|---|---|---|
| S-06.1 | Thuyết phối trí Werner & Cầu nội/ngoại | `T-06.4.1` | KEEP + EXPAND | Ba thành phần, bảng so sánh 6 tiêu chí, thí nghiệm AgCl/độ dẫn điện Chuỗi Cobalt | `[SRC: S-06.1]` `[ADDED: definition box, historical experiment, interpretation]` |
| S-06.2 | Nguyên tử Trung tâm, Hóa trị & Số Phối trí CN | `T-06.4.2` | KEEP + EXPAND | Acid Lewis, hóa trị chính/phụ, CN=2/4/6 & hình học, phân biệt CN vs $SN$ | `[SRC: S-06.2]` `[ADDED: cross-reference note]` |
| S-06.3 | Phân loại Phối tử & Dung lượng | `T-06.4.3` | KEEP + EXPAND | Bảng phân loại 6 loại phối tử, ứng dụng dược (Oxaliplatin, EDTA) | `[SRC: S-06.3]` `[ADDED: definition]` |
| S-06.4 | Hiệu ứng Chelat & Nhiệt động học | `T-06.4.4` | KEEP + EXPAND | $\Delta G^\circ=\Delta H^\circ-T\Delta S^\circ$, phản ứng Ni(en)3, entropy | `[SRC: S-06.4]` `[ADDED: step-by-step thermodynamic explanation, DOMAIN_RULES scope note]` |
| S-06.5 | Danh pháp IUPAC | `T-06.4.5` | KEEP + EXPAND | Trật tự gọi tên, số oxy hóa La Mã, tên anion -ate, bảng 8 ví dụ | `[SRC: S-06.5]` `[ADDED: interpretation]` |
| S-06.6 | Đồng phân cấu trúc & lập thể | `T-06.4.6` | KEEP + EXPAND | Ion hóa, solvat, liên kết, phối trí; hình học cis/trans fac/mer, đối quang; cisplatin/transplatin | `[SRC: S-06.6]` `[ADDED: pharmaceutical significance, pharmaceutical relevance]` |
| S-06.7 | CFT & Bản chất Liên kết Phối trí | `T-06.4.7` | KEEP + EXPAND | Tách mức $d$ bát diện, dãy phổ, spin cao/thấp, CFSE, màu sắc, Jahn-Teller | `[SRC: S-06.7]` `[ADDED: definition, explanation]` |
| S-06.8 | Cân bằng, Hằng số Bền & HSAB | `T-06.4.8` | KEEP + EXPAND | $\beta_n, k_i, \beta'$, HSAB bảng cứng-mềm, giải độc kim loại nặng | `[SRC: S-06.8]` `[ADDED: tabular summary, clinical mechanism]` `[DOMAIN_RULES: chỉ giải thích cơ chế]` |
| S-06.9 | Ứng dụng Y Dược (bảng 10 ứng dụng) | `T-06.4.9` | KEEP + EXPAND | Bảng cisplatin, EDTA, Deferoxamine, MRI, SPECT, hemoglobin, B12 | `[SRC: S-06.9]` `[ADDED: summary table]` |

---

## 2. Nội dung bổ sung ngoài nguồn (`[ADDED]`, không có trong D-06)

1. **Khung sư phạm T1–T3:** Tên chương, giới thiệu, kiến thức tiên quyết, thời lượng học tập, 4 chuẩn đầu ra `LO-1`..`LO-4`.
2. **Ví dụ mới:** `Ví dụ 6.1` (đọc ba phức chất), `Ví dụ 6.2` (EDTA & giải độc) — dựa trên nội dung nguồn nhưng trình bày theo format Given/Find/Approach/Solution/Check/Interpretation.
3. **Sơ đồ thuật toán Mermaid:** `Hình 6.1` quy trình xác định CN & hình học.
4. **Placeholder hình:** `Hình 6.1`–`6.3` (cầu nội/ngoại, tách mức $d$, dãy phổ). Nguồn có 0 hình.
5. **Bảng tổng hợp mới:** `Bảng 6.5` (tổng hợp công thức, CN, hình học, màu sắc).
6. **Bộ 10 câu hỏi/bài tập + đáp án chi tiết:** `T-06.7`–`T-06.7.4`. Nguồn hoàn toàn không có đánh giá.
7. **Mẹo nhớ:** "4 O + 2 N = 6" (EDTA), cisplatin/transplatin, HSAB.

Tất cả gắn `[ADDED]`, không thêm dữ liệu nghiên cứu mới, không bịa số liệu.

---

## 3. Thẻ `[VERIFY]` trong bản thảo (6 thẻ, 4 nhóm V-ID)

| V-ID | Nội dung cần kiểm chứng | Số thẻ | Vị trí |
|---|---|---|---|
| `V-06.01` | Tên chương chính xác | 1 | `T-06.1.1` |
| `V-06.02` | Giá trị $\log\beta$, $\Delta_o$, CFSE, số oxy hóa; thuật toán CN | 3 | `T-06.4.4`, `T-06.4.7`, `T-06.4.8`, `T-06.5.3` |
| `V-06.03` | 0 hình vẽ/sơ đồ trong nguồn | 1 | `T-06.5.4` |
| `V-06.04` | 0 tài liệu tham khảo (3 mục) | 1 (bao gồm 3 thẻ) | `T-06.8.1` |
| **TOTAL** | | **6** | *(có 3 thẻ chứa 2 mã V-ID: V-06.02 x2, V-06.04 x3)* |

> Lưu ý: 6 thẻ `[VERIFY]` trên bản thảo, nhưng các thẻ có chứa nhiều mã V-ID (ví dụ `(V-06.02)`, `(V-06.04)`). Theo thống kê `check_tags.py`, có 6 thẻ `[VERIFY]` khác nhau; nhóm V-ID có 4 (V-06.01–V-06.04).

---

## 4. Kiểm tra cơ học sau S3 Write

- `check_coverage.py`: **9/9 S-ID (100%)** — `_state/checks/ch06_s3_coverage.md`
- `check_tags.py`: `[ADDED]=62`, `[VERIFY]=6`, `[CONFLICT]=0`, `[FIGURE]=3` — `_state/checks/ch06_s3_tags.md`
- `check_ids.py`: 35 T-ID tham chiếu trong thân bài; 2 mã "trùng" là tham chiếu chéo (`T-06.2.1`, `T-06.7.4`), mỗi tiêu đề chỉ xuất hiện một lần — `_state/checks/ch06_s3_ids.md`
- Độ dài: **8.324 từ** (fair count, giữ nội dung công thức) / nguồn 5.050 từ = **1,65x** (**✅ PASS**, không ngắn hơn nguồn)

---

## 5. Mục tiêu học tập → câu hỏi (LO Alignment)

| LO | Được dạy tại | Được đánh giá tại | Câu hỏi | Đáp án |
|---|---|---|---|---|
| LO-1 | `4.1`, `4.2`, `4.3`, `4.5` | `7.1` | Câu 1–4 | Câu 1–4 |
| LO-2 | `4.2`, `4.4`, `4.7`, `4.8` | `7.2` | Bài tập 5–7 | Bài tập 5–7 |
| LO-3 | `4.4`, `4.7`, `4.8` | `7.2`, `7.3` | Bài tập 7, Câu 8–9 | Bài tập 7, Câu 8–9 |
| LO-4 | `4.6`, `4.9`, `6.1` | `7.3` | Câu 10 | Câu 10 |

Mọi LO đều được dạy và đánh giá.

---

## 6. Chưa kiểm chứng / Giới hạn

- 6 thẻ `[VERIFY]` chưa giải quyết (`V-06.01`–`V-06.04`).
- 3 khung `[FIGURE]` (Hình 6.1–6.3) chưa vẽ.
- Tên chương tạm (V-06.01), chờ MANIFEST xác nhận.
- Không có `APPROVED_REFERENCE_LIST`; 3 mục tham khảo là thẻ giữ chỗ.
