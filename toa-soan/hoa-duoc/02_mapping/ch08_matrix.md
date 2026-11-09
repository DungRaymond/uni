# ch08_matrix.md — S2 Mapping & Restructuring Plan · Chương 08

**Môn:** Hóa vô cơ dược · **Stage:** S2 Mapping · **Ngày:** 2026-11-09  
**Nguồn đầu vào:** `00_source_original/ch08_doc-hvc-8.html` (D-08), `01_audit/ch08_audit.md`, `_state/carryover_latest.md`  
**Khung cấu trúc:** Template v2 (`T1`–`T8`, `DISCIPLINE_TYPE: STEM-quantitative` theo `00_config.md`)  
**Quy tắc:** Ánh xạ 100% `S-08.1`–`S-08.9` sang `T-08.x.y` không làm mất nội dung; KHÔNG viết bài giảng chi tiết; dừng ở GATE A.

---

## A. Content Mapping Matrix

| Row ID | S-ID(s) | Summary (≤15 words) | Target T-ID and Name | Primary Action | Secondary Actions | Provenance After Transformation | Notes and Risks |
|---|---|---|---|---|---|---|---|
| M-08.01 | — | Tên chương, giới thiệu khái quát và phạm vi nội dung | `T-08.1` Chương 8: Nhiệt hóa học & Ứng dụng dược | ADD | — | `[ADDED: structural frame]` | Nguồn `D-08` thiếu T1, tên chương chỉ ở `MANIFEST.md` (Q1). |
| M-08.02 | — | Kiến thức tiên quyết Chương 1–6 và thời lượng học tập | `T-08.1.1` / `T-08.1.2` (phần của `T-08.1`) Phạm vi, Kiến thức Tiên quyết & Thời lượng | ADD | — | `[ADDED: study time estimate]` | Nối `T-01.4.1` (liên kết), `T-02.4.2` (hình học), `T-06.4.x` (phức chất); áp dụng `STUDY_TIME_RULE`. |
| M-08.03 | — | Bốn chuẩn đầu ra kiến thức, kỹ năng, vận dụng, đánh giá mô hình | `T-08.2` Mục tiêu Học tập (Learning Objectives `LO-1`..`LO-4`) | ADD | — | `[ADDED: learning objectives]` | Suy ra từ `S-08.1`–`S-08.9`. |
| M-08.04 | S-08.1 | Hệ, trạng thái, nội năng, enthalpy, quy ước dấu | `T-08.4.1` Hệ, Trạng thái, Nội năng & Enthalpy | KEEP | EXPAND, REWRITE | S-08.1 `[SRC]` | Bảng đại lượng nhiệt hóa đã có sẵn. |
| M-08.05 | S-08.2 | Định luật I, Q = ΔU + A, ΔH = ΔU + ΔnRT, các loại nhiệt phản ứng | `T-08.4.2` Định luật I & Nhiệt Phản Ứng | KEEP | EXPAND, REWRITE | S-08.2 `[SRC]` | Ví dụ glucose 5 g đã có sẵn. |
| M-08.06 | S-08.3 | Định luật Hess, ΔH°pư = ΣΔHf°(sp) − ΣΔHf°(tg), ví dụ urê | `T-08.4.3` Định luật Hess & Cách Tính Nhiệt Phản Ứng | KEEP | EXPAND | S-08.3 `[SRC]` | Ví dụ tổng hợp urê đã có sẵn. |
| M-08.07 | S-08.4 | Năng lượng liên kết, ΔH ≈ ΣE_bẻ − ΣE_tạo, bảng năng lượng liên kết | `T-08.4.4` Năng量 Liên kết | KEEP | EXPAND | S-08.4 `[SRC]` | Ví dụ đốt methane đã có sẵn. |
| M-08.08 | S-08.5 | Nhiệt dung, Q = mcΔT, nhiệt lượng kế bom, ΔU vs ΔH | `T-08.4.5` Nhiệt Dung & Nhiệt Lượng Kế | KEEP | EXPAND | S-08.5 `[SRC]` | Ví dụ đo nhiệt cháy glucose đã có sẵn. |
| M-08.09 | S-08.6 | Định luật II, entropy, ΔG = ΔH − TΔS, nhiệt độ đảo chiều | `T-08.4.6` Định luật II, Entropy & Năng lượng Gibbs | KEEP | EXPAND, REWRITE | S-08.6 `[SRC]` | Ví dụ nung đá vôi, NH4NO3 tan đã có sẵn. |
| M-08.10 | S-08.7 | Arrhenius, Q10, đa hình, DSC/TGA, đông khô, nhiệt hòa tan, ICH | `T-08.4.7` Ứng dụng trong Bào chế, Bảo quản & Phân tích Thuốc | KEEP | EXPAND | S-08.7 `[SRC]` | Rất giàu ứng dụng dược lý (vaccine, insulin, kháng sinh, ritonavir). |
| M-08.11 | S-08.8 | Quy trình 4 bước giải một bài nhiệt hóa, bảng công thức | `T-08.4.8` Quy trình 4 Bước Giải Một Bài Nhiệt Hóa | KEEP | EXPAND | S-08.8 `[SRC]` | Bảng công thức với lưu ý đã có sẵn. |
| M-08.12 | S-08.9 | Ý nghĩa và tác dụng: tóm tắt chương | `T-08.6.1` Tóm tắt Nội dung Trọng tâm & Quy tắc Ghi nhớ | MERGE | MOVE | S-08.9 `[SRC]` | Đoạn tóm tắt (~110 từ); mở rộng ở S3. |
| M-08.13 | — | Ví dụ glucose 5 g (đốt cháy) | `T-08.5.1` Ví dụ 8.1: Một viên glucose 5 g | MERGE | MOVE | S-08.2 (example-box) `[SRC]` | Hộp ví dụ nguồn đã có sẵn. |
| M-08.14 | — | Ví dụ tổng hợp urê (Hess) | `T-08.5.2` Ví dụ 8.2: Tính nhiệt tổng hợp urê | MERGE | MOVE | S-08.3 (example-box) `[SRC]` | Hộp ví dụ nguồn đã có sẵn. |
| M-08.15 | — | Ví dụ đốt methane (năng lượng liên kết) | `T-08.5.3` Ví dụ 8.3: Đốt methane bằng năng lượng liên kết | MERGE | MOVE | S-08.4 (example-box) `[SRC]` | Hộp ví dụ nguồn đã có sẵn. |
| M-08.16 | — | Ví dụ đo nhiệt cháy glucose (nhiệt lượng kế) | `T-08.5.4` Ví dụ 8.4: Đo nhiệt cháy glucose | MERGE | MOVE | S-08.5 (example-box) `[SRC]` | Hộp ví dụ nguồn đã có sẵn. |
| M-08.17 | — | Ví dụ nung đá vôi, NH4NO3 tan (ΔG, tự xảy ra) | `T-08.5.5` Ví dụ 8.5–8.6: Nung đá vôi & NH4NO3 tan | MERGE | MOVE | S-08.6 (example-box) `[SRC]` | Hai hộp ví dụ nguồn đã có sẵn. |
| M-08.18 | — | Ví dụ Arrhenius Q10 (thuốc phân hủy 10 °C) | `T-08.5.6` Ví dụ 8.7: Tăng 10 °C, thuốc phân hủy nhanh | MERGE | MOVE | S-08.7 (example-box) `[SRC]` | Hộp ví dụ nguồn đã có sẵn. |
| M-08.19 | — | Sơ đồ thuật toán 4 bước giải bài nhiệt hóa (Mermaid) | `T-08.5.7` Sơ đồ thuật toán 4 bước (Mermaid) | ADD | — | `[ADDED: Mermaid flowchart]` | Chuyển quy trình 4 bước của `S-08.8` thành flowchart; không thêm dữ kiện mới. |
| M-08.20 | — | Placeholder hình Arrhenius, đa hình, lyophilization, quy trình 4 bước | `T-08.5.8` Minh họa Trực quan (Placeholders) | ADD | — | `[ADDED: figure placeholders]` + `[FIGURE]` | Nguồn có 0 hình (`I-08.04`); đặt placeholder theo `FIGURE_POLICY`. |
| M-08.21 | — | Tóm tắt nội dung trọng tâm & quy tắc ghi nhớ | `T-08.6.1` (phần) Tóm tắt Nội dung Trọng tâm & Quy tắc Ghi nhớ | MERGE | MOVE | S-08.9 `[SRC]` | Gộp "Cách nhớ toàn chuyên đề" và bảng công thức. |
| M-08.22 | — | Bảng tổng hợp công thức, công dụng, lưu ý | `T-08.6.2` Bảng Tổng hợp Công thức & Lưu ý | ADD | — | `[ADDED: summary concept tables]` | Nguồn có 4 bảng nhưng chưa có bảng tổng hợp toàn chương. |
| M-08.23 | — | Bộ 10 câu hỏi/bài tập tự lượng giá | `T-08.7` Đánh giá & Bài tập tự lượng giá | ADD | — | `[ADDED: exercises]` | Nguồn hoàn toàn không có bài tập (Q3). |
| M-08.24 | — | Đáp án & hướng dẫn giải từng bước | `T-08.7.4` Đáp án & Hướng dẫn Giải Chi tiết (Answer Key) | ADD | — | `[ADDED: step-by-step answer key]` | Mỗi đáp án ghi `LO` và cấp độ; tính ΔH, ΔG, ΔS hiển đủ bước. |
| M-08.25 | — | Danh mục tài liệu tham khảo và ghi chú truy vết theo R4 | `T-08.8.1` Tài liệu Tham khảo & Đọc thêm | ADD | — | `[ADDED: reference section structure]` + `[VERIFY: textbook references needed]` | Nguồn `D-08` có 0 trích dẫn (`I-08.05`, `V-08.06`); chờ người dùng cung cấp giáo trình chuẩn. |

**Tổng cộng:** 25 dòng ma trận.

---

## B. Coverage Check

### 1. Kiểm tra độ phủ S-ID từ Audit Register

- **Danh sách S-ID trong `01_audit/ch08_audit.md` (tổng cộng = 9 S-ID):** `S-08.1`, `S-08.2`, `S-08.3`, `S-08.4`, `S-08.5`, `S-08.6`, `S-08.7`, `S-08.8`, `S-08.9`.
- **Ánh xạ từng S-ID trong Ma trận Mapping (Bảng A):**
  - `S-08.1` → `M-08.04` (`T-08.4.1`)
  - `S-08.2` → `M-08.05` (`T-08.4.2`)
  - `S-08.3` → `M-08.06` (`T-08.4.3`)
  - `S-08.4` → `M-08.07` (`T-08.4.4`)
  - `S-08.5` → `M-08.08` (`T-08.4.5`)
  - `S-08.6` → `M-08.09` (`T-08.4.6`)
  - `S-08.7` → `M-08.10` (`T-08.4.7`)
  - `S-08.8` → `M-08.11` (`T-08.4.8`)
  - `S-08.9` → `M-08.12` (`T-08.6.1`)
- **Số S-ID chưa được ánh xạ (Unmapped / Missing S-IDs): 0** (độ phủ **100,0%**).
- **Báo cáo kiểm tra cơ học:** sẽ chạy `_tools/check_coverage.py` tại S2/S3.

### 2. Thống kê hành động chính (Primary Action Counts)

| Primary Action | Số dòng ma trận | Tỷ lệ (%) | Danh sách Row ID |
|---|---|---|---|
| **ADD** (khung sư phạm, bảng, hình, ví dụ/bài tập mới) | 13 | 52,0% | M-08.01, M-08.02, M-08.03, M-08.19, M-08.20, M-08.21, M-08.22, M-08.23, M-08.24, M-08.25 |
| **KEEP** (giữ nội dung cốt lõi tại đúng phân khu) | 8 | 32,0% | M-08.04, M-08.05, M-08.06, M-08.07, M-08.08, M-08.09, M-08.10, M-08.11 |
| **MERGE** | 0 | 0,0% | (ví dụ nguồn đã nằm đúng phân khu) |
| **MOVE** | 0 | 0,0% | (dùng làm secondary cho M-08.13–M-08.18) |
| **REMOVE** | 0 | 0,0% | Không có dòng REMOVE (bảo toàn 100% dữ liệu nguồn) |
| **Tổng cộng** | **25 dòng** | **100,0%** | — |

### 3. Ước tính tỷ lệ nội dung mới và thống kê thẻ

- **Dung lượng nguồn gốc (`D-08`):** 2.886 từ (bảo toàn toàn bộ).
- **Dung lượng dự kiến bản thảo hoàn chỉnh (`ch08_draft.md`):** khoảng **4.000–4.500 từ** (đáp ứng `TARGET_LENGTH_PER_CHAPTER: not shorter than source; no upper limit`), tương đương **1,4–1,6 lần** nguồn.
- Nguồn đã giàu, S3 chủ yếu là cấu trúc lại, thêm khung sư phạm T1–T3, bài tập T7, và các bảng/hình tổng hợp.

---

## C. Chapter Restructuring Plan

### C.1 Đề cương chi tiết đến cấp Tiểu mục / Chủ đề

```text
Chương 8: Nhiệt hóa học & Ứng dụng dược (tên tạm, chờ xác nhận MANIFEST)
├── 1. Tổng quan chương (Chapter Overview) {T-08.1}
│   ├── 1.1 Tên chương, giới thiệu khái quát & phạm vi nội dung {T-08.1.1} (M-08.01)
│   └── 1.2 Kiến thức tiên quyết & Thời lượng học tập dự kiến {T-08.1.2} (M-08.02)
├── 2. Mục tiêu học tập (Learning Objectives) {T-08.2}
│   └── 2.1 Chuẩn đầu ra Kiến thức, Kỹ năng, Vận dụng và Đánh giá mô hình (LO-1..LO-4) {T-08.2.1} (M-08.03)
├── 3. Đặt vấn đề & Ý nghĩa thực tiễn (Introduction) {T-08.3}
│   └── 3.1 Từ phản ứng hóa học đến năng lượng & độ ổn định thuốc (phần mở đầu)
├── 4. Nội dung bài giảng chính (Main Content) {T-08.4}
│   ├── 4.1 Hệ, Trạng thái, Nội năng & Enthalpy {T-08.4.1} [SRC: S-08.1] (M-08.04)
│   ├── 4.2 Định luật I & Nhiệt Phản Ứng {T-08.4.2} [SRC: S-08.2] (M-08.05)
│   ├── 4.3 Định luật Hess & Cách Tính Nhiệt Phản Ứng {T-08.4.3} [SRC: S-08.3] (M-08.06)
│   ├── 4.4 Năng lượng Liên kết {T-08.4.4} [SRC: S-08.4] (M-08.07)
│   ├── 4.5 Nhiệt Dung & Nhiệt Lượng Kế {T-08.4.5} [SRC: S-08.5] (M-08.08)
│   ├── 4.6 Định luật II, Entropy & Năng lượng Gibbs {T-08.4.6} [SRC: S-08.6] (M-08.09)
│   ├── 4.7 Ứng dụng trong Bào chế, Bảo quản & Phân tích Thuốc {T-08.4.7} [SRC: S-08.7] (M-08.10)
│   └── 4.8 Quy trình 4 Bước Giải Một Bài Nhiệt Hóa {T-08.4.8} [SRC: S-08.8] (M-08.11)
├── 5. Ví dụ minh họa & Quy trình thực hành (Examples & Illustrations) {T-08.5}
│   ├── 5.1 Ví dụ 8.1: Một viên glucose 5 g {T-08.5.1} [SRC] (M-08.13)
│   ├── 5.2 Ví dụ 8.2: Tính nhiệt tổng hợp urê (Hess) {T-08.5.2} [SRC] (M-08.14)
│   ├── 5.3 Ví dụ 8.3: Đốt methane bằng năng lượng liên kết {T-08.5.3} [SRC] (M-08.15)
│   ├── 5.4 Ví dụ 8.4: Đo nhiệt cháy glucose bằng nhiệt lượng kế {T-08.5.4} [SRC] (M-08.16)
│   ├── 5.5 Ví dụ 8.5–8.6: Nung đá vôi & NH4NO3 tan {T-08.5.5} [SRC] (M-08.17)
│   ├── 5.6 Ví dụ 8.7: Tăng 10 °C, thuốc phân hủy nhanh {T-08.5.6} [SRC] (M-08.18)
│   ├── 5.7 Sơ đồ thuật toán 4 bước (Mermaid) {T-08.5.7} (M-08.19)
│   └── 5.8 Minh họa Trực quan (Placeholders) {T-08.5.8} (M-08.20)
├── 6. Tóm tắt chương (Chapter Summary) {T-08.6}
│   ├── 6.1 Tóm tắt Nội dung Trọng tâm & Quy tắc Ghi nhớ {T-08.6.1} (M-08.21)
│   └── 6.2 Bảng Tổng hợp Công thức & Lưu ý {T-08.6.2} (M-08.22)
├── 7. Đánh giá & Bài tập tự lượng giá (Review & Assessment) {T-08.7}
│   ├── 7.1 Câu hỏi lý thuyết: Nhận biết & Thông hiểu (LO-1) {T-08.7.1} (phần của M-08.23)
│   ├── 7.2 Bài tập áp dụng: Tính toán ΔH, ΔG, ΔS (LO-2, LO-3) {T-08.7.2} (phần của M-08.23)
│   ├── 7.3 Câu hỏi phân tích & vận dụng nâng cao (LO-3, LO-4) {T-08.7.3} (phần của M-08.23)
│   └── 7.4 Đáp án & Hướng dẫn giải chi tiết (Answer Key) {T-08.7.4} (M-08.24)
└── 8. Tài liệu tham khảo (References) {T-08.8}
    └── 8.1 Danh mục Tài liệu tham khảo & Đọc thêm {T-08.8.1} (M-08.25)
```

### C.2 Kế hoạch bổ sung nội dung mới và lý do sư phạm

1. **Khung sư phạm T1–T3:** Tên chương, phạm vi, kiến thức tiên quyết, thời lượng, 4 chuẩn đầu ra `LO-1`..`LO-4`.
2. **Sơ đồ thuật toán Mermaid (`T-08.5.7`):** Quy trình 4 bước giải một bài nhiệt hóa.
3. **Placeholder hình (`T-08.5.8`):** Chu kỳ Arrhenius, đa hình tinh thể, lyophilization, sơ đồ quy trình 4 bước.
4. **Bảng tổng hợp mới (`T-08.6.2`):** Tổng hợp công thức, công dụng, lưu ý của toàn chương.
5. **Bộ 10 câu hỏi/bài tập + đáp án (`T-08.7`):** Nguồn hoàn toàn không có đánh giá.
6. Giữ nguyên 4 bảng và 7 ví dụ của nguồn; không cắt nội dung (Q2).

### C.3 Rủi ro & Biện pháp kiểm soát

- **Rủi ro 1 (Tên chương chưa chốt):** Xác nhận tại MANIFEST (Q1).
- **Rủi ro 2 (Nguồn giàu):** Nguồn 2.886 từ, bản thảo dự kiến ~4.000–4.500 từ (1,4–1,6×). Giữ toàn bộ nội dung, không cắt.
- **Rủi ro 3 (0 bài tập, 0 hình):** Bổ sung `[ADDED]` bài tập và `[FIGURE]` placeholder (Q3, Q4).
- **Rủi ro 4 (0 tài liệu tham khảo):** Đặt `[VERIFY]` (Q5), không bịa nguồn.

### C.4 Chuẩn đầu ra Học tập (Draft LO)

- **LO-1:** Phát biểu được định nghĩa hệ/môi trường, hàm trạng thái (U, H, S, G), định luật I & II nhiệt động học, enthalpy, entropy, năng lượng Gibbs.
- **LO-2:** Tính toán được ΔH, ΔU, ΔS, ΔG, Q, CFSE, áp dụng định luật Hess, năng lượng liên kết, Q = mcΔT, Arrhenius.
- **LO-3:** Vận dụng nhiệt hóa học để giải thích độ bền thuốc, quy tắc Q10, đa hình, lyophilization, DSC/TGA, ICH.
- **LO-4:** Đánh giá vai trò của nhiệt hóa học trong sản xuất, bảo quản và phân tích thuốc; chọn điều kiện bảo quản phù hợp.

### C.5 Glossary & Chuẩn hóa

| Thuật ngữ | Dạng trong nguồn | Dạng chuẩn hóa | Ghi chú |
|---|---|---|---|
| Nhiệt hóa học | `Nhiệt hóa học` | **Nhiệt hóa học (thermochemistry)** | Giữ nguyên. |
| Enthalpy | `Enthalpy ($H$)` | **Enthalpy (entalpi – $H$)** | Giữ nguyên. |
| Entropy | `Entropy ($S$)` | **Entropy (entropi – $S$)** | Giữ nguyên. |
| Năng lượng Gibbs | `Năng lượng Gibbs ($G$)` | **Năng lượng Gibbs (Gibbs energy – $G$)** | Giữ nguyên. |
| Định luật Hess | `Định luật Hess` | **Định luật Hess (Hess's law)** | Giữ nguyên. |
| Phương trình Arrhenius | `Phương trình Arrhenius` | **Phương trình Arrhenius (Arrhenius equation)** | Giữ nguyên. |
| Quy tắc Q10 | `Quy tắc $Q_{10}$` | **Quy tắc $Q_{10}$** | Giữ nguyên. |
| Đa hình | `Đa hình (polymorph)` | **Đa hình (polymorphism)** | Giữ nguyên. |

---

## D. Verification Items Carried Forward

| V-ID | Nội dung cần kiểm chứng | Loại | Mục T-ID tiếp nhận | Kế hoạch xử lý trong S3 |
|---|---|---|---|---|
| `V-08.01` | Tên chương chính xác | reference | `T-08.1` | Xác nhận MANIFEST (Q1). |
| `V-08.02` | Giá trị $\Delta H_c^\circ$ glucose, $\Delta H_f^\circ$ urê, $E_a$, $Q_{10}$ | number/formula | `T-08.4.2`, `T-08.4.3`, `T-08.4.4`, `T-08.4.7` | Giữ đúng nguồn; gắn `[VERIFY]`. |
| `V-08.03` | 0 hình vẽ/sơ đồ trong nguồn | structure | `T-08.5.8` | Đặt `[FIGURE]` placeholder (Q4). |
| `V-08.04` | 0 tài liệu tham khảo | reference | `T-08.8.1` | Đặt `[VERIFY: reference needed …]` (Q5). |

---

## E. Open Questions for Gate A

1. **Q1 (Tên chương):** Xác nhận tên Ch08 tại `MANIFEST.md` (hiện dùng tên tạm "Nhiệt hóa học & Ứng dụng dược").
2. **Q2 (Độ dài):** Nguồn đã giàu 2.886 từ; S3 giữ toàn bộ nội dung, bản thảo dự kiến ~4.000–4.500 từ. Đồng ý?
3. **Q3 (Bài tập):** Đồng ý S3 bổ sung bộ 10 câu hỏi/bài tập `[ADDED]`?
4. **Q4 (Hình):** Đồng ý S3 đặt placeholder `[FIGURE]` cho Arrhenius, đa hình, lyophilization, quy trình 4 bước?
5. **Q5 (Tài liệu tham khảo):** Đồng ý để `[VERIFY: reference needed …]`, `APPROVED_REFERENCE_LIST: none`?

---

## F. Not verified / limitations

- Chỉ dựa trên D-08; 0 trích dẫn; 0 hình vẽ; 0 bài tập trong nguồn.
- Tất cả công thức, giá trị số giữ nguyên nguồn; gắn `[VERIFY]` khi cần chuyên gia xác nhận.
- Dừng tại GATE A theo R9.

---
GATE A: STOP. Awaiting user approval of the Content Mapping Matrix. Do not begin the transformation.
