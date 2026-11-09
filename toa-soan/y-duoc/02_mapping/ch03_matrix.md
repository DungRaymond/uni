# ch03_matrix.md — S2 Mapping & Restructuring Plan · Chương 03

**Môn:** Y dược – Master Lecture Notes · **Stage:** S2 Mapping · **Ngày:** 2026-11-09  
**Nguồn đầu vào:** `00_source_original/ch03_doc-myd-3.html` (D-03), `01_audit/ch03_audit.md`, `_state/carryover_latest.md`  
**Khung cấu trúc:** Template v2 (`T1`–`T8`, `DISCIPLINE_TYPE: STEM-qualitative` theo `00_config.md`)  
**Quy tắc:** Ánh xạ 100% `S-03.1`–`S-03.7` sang `T-03.x.y` không làm mất nội dung; KHÔNG viết bài giảng chi tiết; dừng ở GATE A.

---

## A. Content Mapping Matrix

| Row ID | S-ID(s) | Summary (≤15 words) | Target T-ID and Name | Primary Action | Secondary Actions | Provenance After Transformation | Notes and Risks |
|---|---|---|---|---|---|---|---|
| M-03.01 | — | Tên chương, giới thiệu khái quát & phạm vi nội dung | `T-03.1` Chuyên đề 3: Chuyển hóa năng lượng và hô hấp tế bào | ADD | — | `[ADDED: structural frame]` | Nguồn `D-03` thiếu T1, tên chương chỉ ở `MANIFEST.md` (Q1). |
| M-03.02 | — | Kiến thức tiên kỳ và thời lượng học tập | `T-03.1.1` / `T-03.1.2` (phần của `T-03.1`) Phạm vi, Kiến thức Tiên quyết & Thời lượng Học tập | ADD | — | `[ADDED: study time estimate]` | Nguồn `D-03` không có phần kiến thức tiên quyết; bổ sung theo `STUDY_TIME_RULE`. |
| M-03.03 | — | Bốn chuẩn đầu ra kiến thức, kỹ năng, vận dụng, đánh giá mô hình | `T-03.2` Mục tiêu Học tập (Learning Objectives `LO-1`..`LO-4`) | ADD | — | `[ADDED: learning objectives]` | Suy ra từ `S-03.1`–`S-03.7`. |
| M-03.04 | — | Đặt vấn đề & ý nghĩa thực tiễn | `T-03.3` Đặt vấn đề & Ý nghĩa thực tiễn (Introduction) | ADD | — | `[ADDED: introduction frame]` | Nguồn `D-03` thiếu phần mở luận cấu trúc. |
| M-03.05 | S-03.1 | ATP: dạng năng lượng trực tiếp của tế bào; ADP, phosphate vô cơ; phosphocreatine là đệm năng lượng nhanh ở cơ | `T-03.4.1` ATP & Năng Lượng Trực Tiếp Của Tế Bào | KEEP | EXPAND | S-03.1 `[SRC]` | Giữ nguyên định nghĩa ATP, ADP, phosphocreatine. |
| M-03.06 | S-03.2 | Ba giai đoạn oxy hóa glucose: đường phân (bào tương), oxy hóa pyruvat + chu kỳ acid citric (chất nền ty thể), chuỗi chuyền electron + phosphoryl hóa oxy hóa (màng trong ty thể) | `T-03.4.2` Ba Giai Đoạn Oxy Hóa Glucose | KEEP | EXPAND | S-03.2 `[SRC]` | Giữ nguyên bảng 3 giai đoạn oxy hóa glucose. |
| M-03.07 | S-03.3 | Đường phân gồm pha đầu tư (tiêu thụ 2 ATP) và pha thu hồi (tạo 4 ATP + 2 NADH → thu ròng 2 ATP); pyruvat → acetyl-CoA hoặc → lactat | `T-03.4.3` Đường Phân & Số Phận Của Pyruvat | KEEP | EXPAND | S-03.3 `[SRC]` | Giữ nguyên cơ chế đường phân và số phận pyruvat. |
| M-03.08 | S-03.4 | Mỗi acetyl-CoA tạo 3 NADH, 1 FADH₂, 1 GTP, 2 CO₂; NADH/FADH₂ bơm H⁺ qua màng trong ty thể; O₂ là chất nhận electron cuối; rò rỉ proton làm giảm hiệu suất | `T-03.4.4` Chu Kỳ Acid Citric & Chuỗi Hô Hấp | KEEP | EXPAND | S-03.4 `[SRC]` | Giữ nguyên cơ chế chu kỳ acid citric và chuỗi hô hấp. |
| M-03.09 | S-03.5 | Hồng cầu không ty thể → tạo ATP bằng đường phân, tạo lactat; cơ vận động cao tăng đường phân; lactat về gan → chu trình Cori → glucose | `T-03.4.5` Chuyển Hóa Yếm Khí & Chu trình Cori | KEEP | EXPAND | S-03.5 `[SRC]` | Giữ nguyên chuyển hóa yếm khí và chu trình Cori. |
| M-03.10 | S-03.6 | Insulin sau ăn (tăng thu nhận glucose, tổng hợp glycogen/lipid); glucagon khi đói (tăng phân giải glycogen gan, tân tạo glucose); AMP/ADP tăng (thúc đẩy dị hóa); thiamine (B₁) cần cho các enzym oxy hóa | `T-03.4.6` Điều Hòa Theo Nhu Cả & Nhiên Liệu | KEEP | EXPAND | S-03.6 `[SRC]` | Giữ nguyên điều hòa insulin/glucagon và vai trò thiamine. |
| M-03.11 | S-03.7 | Thiếu oxy, thiếu máu, sốc, độc chất ty thể → giảm hô hấp tế bào → tăng lactat, giảm ATP → suy bơm ion, phù tế bào, tổn thương cơ quan | `T-03.4.7` Liên Hệ Lâm Sàng & Dược Lý | KEEP | EXPAND | S-03.7 `[SRC]` | Gộp liên hệ lâm sàng thành tiểu mục ứng dụng. |
| M-03.12 | — | Ví dụ cân bằng ATP và hệ số hô hấp: oxy hóa hoàn toàn 1 glucose giải phóng khoảng 686 kcal/mol; 30 ATP × 7,3 kcal/mol ≈ 219 kcal; hiệu suất ≈ 32%; RQ carbohydrate ≈ 1,0, lipid ≈ 0,7, protein ≈ 0,8 | `T-03.5.1` Ví dụ 1: Cân Bằng ATP & Hệ Số Hô Hấp | MERGE | MOVE | S-03.2 (example-box) `[SRC]` | Hộp ví dụ nguồn đã có sẵn, giữ nguyên số liệu. |
| M-03.13 | — | Cách nhớ: 3 chặng — 3 vị trí (Đường phân ở bào tương; chu kỳ Krebs ở chất nền ty thể; chuỗi hô hấp ở màng trong ty thể). Sản phẩm khí: mỗi glucose tạo 6CO₂ và tiêu thụ 6O₂. Không có O₂: pyruvat → lactat để tái sinh NAD⁺, chỉ thu 2 ATP/glucose | `T-03.5.2` Mẹo nhớ Oxy Hóa Glucose | MERGE | MOVE | S-03.2 (callout) `[SRC]` | Callout nguồn đã có sẵn. |
| M-03.14 | — | Sơ đồ thuật toán oxy hóa glucose (Mermaid) | `T-03.5.3` Sơ Đồ Oxy Hóa Glucose (Mermaid) | ADD | — | `[ADDED: Mermaid flowchart]` | Chuyển quy tắc của S-03.2, S-03.3, S-03.4 thành flowchart; không thêm dữ kiện mới. |
| M-03.15 | — | Placeholder hình màng trong ty thể, chuỗi hô hấp, ATP synthase | `T-03.5.4` Minh Họa Trực quan (Placeholders) | ADD | — | `[ADDED: figure placeholders]` + `[FIGURE]` | Nguồn có 0 hình (`I-03.04`); đặt placeholder theo `FIGURE_POLICY`. |
| M-03.16 | — | Tóm tắt nội dung trọng tâm & quy tắc ghi nhớ | `T-03.6.1` Tóm tắt Nội dung Trọng tâm & Quy tắc Ghi nhớ | MERGE | MOVE | S-03.1–S-03.7 `[SRC]` | Gộp ATP, 3 giai đoạn, đường phân, chu kỳ acid citric, chuỗi hô hấp, chuyển hóa yếm khí, điều hòa thành tóm tắt. |
| M-03.17 | — | Bảng tổng hợp công thức, đơn vị, quy ước dấu | `T-03.6.2` Bảng Tổng hợp Công thức & Lưu ý | ADD | — | `[ADDED: summary concept tables]` | Nguồn có 0 bảng (`I-03.05`); bổ sung bảng tổng hợp. |
| M-03.18 | — | Bộ 10 câu hỏi/bài tập tự lượng giá | `T-03.7` Đánh giá & Bài tập tự lượng giá | ADD | — | `[ADDED: exercises]` | Nguồn hoàn toàn không có bài tập (Q3). |
| M-03.19 | — | Đáp án & hướng dẫn giải từng bước | `T-03.7.4` Đáp án & Hướng dẫn Giải Chi tiết (Answer Key) | ADD | — | `[ADDED: step-by-step answer key]` | Mỗi đáp án ghi `LO` và cấp độ; tính $\Delta G$, $\Delta S$, $\Delta U$ hiển đủ bước. |
| M-03.20 | — | Danh mục tài liệu tham khảo và ghi chú truy vết theo R4 | `T-03.8.1` Tài liệu Tham khảo & Đọc thêm | ADD | — | `[ADDED: reference section structure]` + `[VERIFY: textbook references needed]` | Nguồn `D-03` có 0 trích dẫn (`I-03.05`, `V-03.04`); chờ người dùng cung cấp giáo trình chuẩn. |

**Tổng cộng:** 20 dòng ma trận.

---

## B. Coverage Check

### 1. Kiểm tra độ phủ S-ID từ Audit Register

- **Danh sách S-ID trong `01_audit/ch03_audit.md` (tổng cộng = 7 S-ID):** `S-03.1`, `S-03.2`, `S-03.3`, `S-03.4`, `S-03.5`, `S-03.6`, `S-03.7`.
- **Ánh xạ từng S-ID trong Ma trận Mapping (Bảng A):**
  - `S-03.1` → `M-03.05` (`T-03.4.1`)
  - `S-03.2` → `M-03.06` (`T-03.4.2`)
  - `S-03.3` → `M-03.07` (`T-03.4.3`)
  - `S-03.4` → `M-03.08` (`T-03.4.4`)
  - `S-03.5` → `M-03.09` (`T-03.4.5`)
  - `S-03.6` → `M-03.10` (`T-03.4.6`)
  - `S-03.7` → `M-03.11` (`T-03.4.7`)
- **Số S-ID chưa được ánh xạ (Unmapped / Missing S-IDs): 0** (độ phủ **100,0%**).

### 2. Thống kê hành động chính (Primary Action Counts)

| Primary Action | Số dòng ma trận | Tỷ lệ (%) | Danh sách Row ID |
|---|---|---|---|
| **ADD** (khung sư pháp, bảng, hình, ví dụ/bài tập mới) | 12 | 60,0% | M-03.01, M-03.02, M-03.03, M-03.04, M-03.14, M-03.15, M-03.17, M-03.18, M-03.19, M-03.20 |
| **KEEP** (giữ nội dung cốt lõi tại đúng phân khu) | 7 | 35,0% | M-03.05, M-03.06, M-03.07, M-03.08, M-03.09, M-03.10, M-03.11 |
| **MERGE** | 1 | 5,0% | M-03.16 |
| **MOVE** | 0 | 0,0% | (dùng làm secondary cho M-03.12, M-03.13, M-03.16) |
| **REMOVE** | 0 | 0,0% | Không có dòng REMOVE (bảo toàn 100% dữ liệu nguồn) |
| **Tổng cộng** | **20 dòng** | **100,0%** | — |

### 3. Ước tính tỷ lệ nội dung mới và thống kê thẻ

- **Dung lượng nguồn gốc (`D-03`):** 1028 từ (bảo toàn toàn bộ).
- **Dung lượng dự kiến bản thảo hoàn chỉnh (`ch03_draft.md`):** khoảng **4.000–4.500 từ** (đáp ứng `TARGET_LENGTH_PER_CHAPTER: not shorter than source; no upper limit`), tương đương **4–4,4 lần** nguồn.

---

## C. Chapter Restructuring Plan

### C.1 Đề cương chi tiết đến cấp Tiểu mục / Chủ đề

```text
Chuyên đề 3: Chuyển hóa năng lượng và hô hấp tế bào (tên tạm, chờ xác nhận MANIFEST)
├── 1. Tổng quan chương (Chapter Overview) {T-03.1}
│   ├── 1.1 Tên chương, giới thiệu khái quát & phạm vi nội dung {T-03.1.1} (M-03.01)
│   └── 1.2 Kiến thức tiên kỳ & Thời lượng học tập dự kiến {T-03.1.2} (M-03.02)
├── 2. Mục tiêu học tập (Learning Objectives) {T-03.2}
│   └── 2.1 Chuẩn đầu ra Kiến thức, Kỹ năng, Vận dụng và Đánh giá mô hình (LO-1..LO-4) {T-03.2.1} (M-03.03)
├── 3. Đặt vấn đề & Ý nghĩa thực tiễn (Introduction) {T-03.3}
│   └── 3.1 Tại sao cần hiểu chuyển hóa năng lượng và hô hấp tế bào {T-03.3.1} (M-03.04)
├── 4. Nội dung bài giảng chính (Main Content) {T-03.4}
│   ├── 4.1 ATP & Năng Lượng Trực Tiếp Của Tế Bào {T-03.4.1} [SRC: S-03.1] (M-03.05)
│   ├── 4.2 Ba Giai Đoạn Oxy Hóa Glucose {T-03.4.2} [SRC: S-03.2] (M-03.06)
│   ├── 4.3 Đường Phân & Số Phận Của Pyruvat {T-03.4.3} [SRC: S-03.3] (M-03.07)
│   ├── 4.4 Chu Kỳ Acid Citric & Chuỗi Hô Hấp {T-03.4.4} [SRC: S-03.4] (M-03.08)
│   ├── 4.5 Chuyển Hóa Yếm Khí & Chu trình Cori {T-03.4.5} [SRC: S-03.5] (M-03.09)
│   ├── 4.6 Điều Hòa Theo Nhu Cả & Nhiên Liệu {T-03.4.6} [SRC: S-03.6] (M-03.10)
│   └── 4.7 Liên Hệ Lâm Sàng & Dược Lý {T-03.4.7} [SRC: S-03.7] (M-03.11)
├── 5. Ví dụ minh họa & Quy trình thực hành (Examples & Illustrations) {T-03.5}
│   ├── 5.1 Ví dụ 1: Cân Bằng ATP & Hệ Số Hô Hấp {T-03.5.1} [SRC] (M-03.12)
│   ├── 5.2 Mẹo nhớ Oxy Hóa Glucose {T-03.5.2} [SRC] (M-03.13)
│   ├── 5.3 Sơ Đồ Oxy Hóa Glucose (Mermaid) {T-03.5.3} (M-03.14)
│   └── 5.4 Minh Họa Trực quan (Placeholders) {T-03.5.4} (M-03.15)
├── 6. Tóm tắt chương (Chapter Summary) {T-03.6}
│   ├── 6.1 Tóm tắt Nội dung Trọng tâm & Quy tắc Ghi nhớ {T-03.6.1} (M-03.16)
│   └── 6.2 Bảng Tổng hợp Công thức & Lưu ý {T-03.6.2} (M-03.17)
├── 7. Đánh giá & Bài tập tự lượng giá (Review & Assessment) {T-03.7}
│   ├── 7.1 Câu hỏi lý thuyết: Nhận biết & Thông hiểu (LO-1) {T-03.7.1} (phần của M-03.18)
│   ├── 7.2 Bài tập áp dụng: Tính toán năng lượng chuyển hóa (LO-2, LO-3) {T-03.7.2} (phần của M-03.18)
│   ├── 7.3 Câu hỏi phân tích & vận dụng nâng cao (LO-3, LO-4) {T-03.7.3} (phần của M-03.18)
│   └── 7.4 Đáp án & Hướng dẫn giải chi tiết (Answer Key) {T-03.7.4} (M-03.19)
└── 8. Tài liệu tham khảo (References) {T-03.8}
    └── 8.1 Danh mục Tài liệu tham khảo & Đọc thêm {T-03.8.1} (M-03.20)
```

### C.2 Kế hoạch bổ sung nội dung mới và lý do sư pháp

1. **Khung sư pháp T1–T3:** Tên chương, giới thiệu, kiến thức tiên kỳ, thời lượng học tập, 4 chuẩn đầu ra `LO-1`..`LO-4`.
2. **Sơ đồ thuật toán Mermaid (`T-03.5.3`):** Quy trình oxy hóa glucose (đường phân → chu kỳ acid citric → chuỗi hô hấp).
3. **Placeholder hình (`T-03.5.4`):** Màng trong ty thể, chuỗi hô hấp, ATP synthase.
4. **Bảng tổng hợp mới (`T-03.6.2`):** Tổng hợp công thức, đơn vị, lưu ý lâm sàng.
5. **Bộ 10 câu hỏi/bài tập + đáp án (`T-03.7`):** Nguồn hoàn toàn không có đánh giá.
6. Giữ nguyên toàn bộ nội dung nguồn; không cắt nội dung (Q2).

### C.3 Rủi ro & Biện pháp kiểm soát

- **Rủi ro 1 (Tên chương chưa chốt):** Xác nhận tại MANIFEST (Q1).
- **Rủi ro 2 (Nguồn ngắn vừa, 1028 từ):** Nếu mở rộng lên 4.000–4.500 thì tỷ lệ 4–4,4×. Đây là mở rộng khung sư pháp và bài tập, không cắt nội dung nguồn.
- **Rủi ro 3 (0 bài tập, 0 hình):** Bổ sung `[ADDED]` bài tập và `[FIGURE]` placeholder (Q3, Q4).
- **Rủi ro 4 (0 tài liệu tham khảo):** Đặt `[VERIFY]` (Q5), không bịa nguồn.

### C.4 Chuẩn đầu ra Học tập (Draft LO)

- **`LO-1` (Kiến thức):** Phát biểu định nghĩa ATP, ADP, phosphocreatine; phân biệt dị hóa và đồng hóa; liệt kê 3 giai đoạn oxy hóa glucose và vị trí diễn ra.
- **`LO-2` (Kỹ năng):** Giải thích cơ chế đường phân, chu kỳ acid citric, chuỗi hô hấp; phân biệt aerobic và anaerobic.
- **`LO-3` (Vận dụng):** Giải thích liên hệ giữa chuyển hóa năng lượng và trạng thái năng lượng của tế bào (lactat, đường huyết, tưới máu).
- **`LO-4` (Đánh giá mô hình):** Đánh giá vai trò của hô hấp tế bào trong duy trì chức năng sống; liên hệ thiếu oxy, thiếu máu, sốc, độc chất ty thể với suy cơ quan `[DOMAIN_RULES: chỉ giải thích cơ chế, không liều/chỉ định]`.

### C.5 Glossary & Chuẩn hóa

| Thuật ngữ | Dạng trong nguồn | Dạng chuẩn hóa | Ghi chú |
|---|---|---|---|
| ATP | `ATP` | **ATP (adenosine triphosphate)** | Giữ nguyên. |
| ADP | `ADP` | **ADP (adenosine diphosphate)** | Giữ nguyên. |
| Phosphocreatine | `Phosphocreatine` | **Phosphocreatine** | Giữ nguyên. |
| NADH | `NADH` | **NADH (nicotinamide adenine dinucleotide)** | Giữ nguyên. |
| FADH₂ | `FADH₂` | **FADH₂ (flavin adenine dinucleotide)** | Giữ nguyên. |
| Đường phân | `Đường phân` | **Đường phân (glycolysis)** | Giữ nguyên. |
| Pyruvat | `Pyruvat` | **Pyruvat (pyruvate)** | Giữ nguyên. |
| Acetyl-CoA | `acetyl-CoA` | **Acetyl-CoA** | Giữ nguyên. |
| Chu kỳ acid citric | `Chu kỳ acid citric` | **Chu kỳ acid citric (citric acid cycle / Krebs cycle)** | Giữ nguyên. |
| Chuỗi chuyền electron | `Chuỗi chuyền electron` | **Chuỗi chuyền electron (electron transport chain)** | Giữ nguyên. |
| Phosphoryl hóa oxy hóa | `Phosphoryl hóa oxy hóa` | **Phosphoryl hóa oxy hóa (oxidative phosphorylation)** | Giữ nguyên. |
| Chu trình Cori | `chu trình Cori` | **Chu trình Cori (Cori cycle)** | Giữ nguyên. |
| Thiamine | `Thiamine` | **Thiamine (vitamin B₁)** | Giữ nguyên. |
| Hệ số hô hấp | `Hệ số hô hấp` | **Hệ số hô hấp (respiratory quotient – RQ)** | Giữ nguyên. |
| Toan lactic | `Toan lactic` | **Toan lactic (lactic acidosis)** | Giữ nguyên. |

---

## D. Verification Items Carried Forward

| V-ID | Nội dung cần kiểm chứng | Loại | Mục T-ID tiếp nhận | Kế hoạch xử lý trong S3 |
|---|---|---|---|---|
| `V-03.01` | Tên chương chính xác | reference | `T-03.1` | Xác nhận MANIFEST (Q1). |
| `V-03.02` | Giá trị ATP, NADH, FADH₂, hệ số hô hấp | number | `T-03.4.2`, `T-03.5.1` | Giữ đúng nguồn; gắn `[VERIFY]`. |
| `V-03.03` | 0 hình vẽ/sơ đồ trong nguồn | structure | `T-03.5.4` | Đặt `[FIGURE]` placeholder (Q4). |
| `V-03.04` | 0 tài liệu tham khảo | reference | `T-03.8.1` | Đặt `[VERIFY: reference needed …]` (Q5). |

---

## E. Open Questions for Gate A

1. **Q1 (Tên chương):** Xác nhận tên Ch03 tại `MANIFEST.md` (hiện dùng "Chuyển hóa năng lượng và hô hấp tế bào").
2. **Q2 (Nguồn ngắn vừa, mở rộng):** Nguồn 1028 từ, 7 mục; S3 mở rộng lên ~4.000–4.500 bằng khung sư pháp và bài tập. Đồng ý?
3. **Q3 (Bài tập):** Đồng ý S3 bổ sung bộ 10 câu hỏi/bài tập `[ADDED]`?
4. **Q4 (Hình):** Đồng ý S3 đặt placeholder `[FIGURE]` cho màng trong ty thể, chuỗi hô hấp, ATP synthase?
5. **Q5 (Tài liệu tham khảo):** Đồng ý để `[VERIFY: reference needed …]`, `APPROVED_REFERENCE_LIST: none`?

---

## F. Not verified / limitations

- Chỉ dựa trên D-03; 0 trích dẫn; 0 hình vẽ; 0 bài tập trong nguồn.
- Tất cả giá trị số giữ nguyên nguồn; gắn `[VERIFY]` khi cần chuyên gia xác nhận.
- Dừng tại GATE A theo R9.

---

GATE A: STOP. Awaiting user approval of the Content Mapping Matrix. Do not begin the transformation.