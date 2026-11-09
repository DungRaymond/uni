# ch05_matrix.md — S2 Mapping & Restructuring Plan · Chương 05

**Môn:** Y dược – Master Lecture Notes · **Stage:** S2 Mapping · **Ngày:** 2026-11-09  
**Nguồn đầu vào:** `00_source_original/ch05_doc-myd-5.html` (D-05), `01_audit/ch05_audit.md`, `_state/carryover_latest.md`  
**Khung cấu trúc:** Template v2 (`T1`–`T8`, `DISCIPLINE_TYPE: STEM-qualitative` theo `00_config.md`)  
**Quy tắc:** Ánh xạ 100% `S-05.1`–`S-05.6` sang `T-05.x.y` không làm mất nội dung; KHÔNG viết bài giảng chi tiết; dừng ở GATE A.

---

## A. Content Mapping Matrix

| Row ID | S-ID(s) | Summary (≤15 words) | Target T-ID and Name | Primary Action | Secondary Actions | Provenance After Transformation | Notes and Risks |
|---|---|---|---|---|---|---|---|
| M-05.01 | — | Tên chương, giới thiệu khái quát & phạm vi nội dung | `T-05.1` Chương 5: Chuyển hóa và rối loạn chuyển hóa thường gặp | ADD | — | `[ADDED: structural frame]` | Nguồn `D-05` thiếu T1, tên chương chỉ ở `MANIFEST.md` (Q1). |
| M-05.02 | — | Kiến thức tiên kỳ và thời lượng học tập | `T-05.1.1` / `T-05.1.2` (phần của `T-05.1`) Phạm vi, Kiến thức Tiên quyết & Thời lượng Học tập | ADD | — | `[ADDED: study time estimate]` | Nguồn `D-05` không có phần kiến thức tiên quyết; bổ sung theo `STUDY_TIME_RULE`. |
| M-05.03 | — | Bốn chuẩn đầu ra kiến thức, kỹ năng, vận dụng, đánh giá mô hình | `T-05.2` Mục tiêu Học tập (Learning Objectives `LO-1`..`LO-4`) | ADD | — | `[ADDED: learning objectives]` | Suy ra từ `S-05.1`–`S-05.6`. |
| M-05.04 | — | Đặt vấn đề & ý nghĩa thực tiễn | `T-05.3` Đặt vấn đề & Ý nghĩa thực tiễn (Introduction) | ADD | — | `[ADDED: introduction frame]` | Nguồn `D-05` thiếu phần mở luận cấu trúc. |
| M-05.05 | S-05.1 | Chuyển hóa là toàn bộ phản ứng hóa học có enzyme; dị hóa (phân giải, giải phóng năng lượng) và đồng hóa (dùng năng lượng tổng hợp); ATP, NADH, FADH₂ | `T-05.4.1` Chuyển Hóa: Định Nghĩa, Dị Hóa & Đồng Hóa | KEEP | EXPAND | S-05.1 `[SRC]` | Giữ nguyên định nghĩa chuyển hóa, dị hóa, đồng hóa. |
| M-05.06 | S-05.2 | Chuyển hóa glucid: đường phân (bào tương, 2 ATP ròng + 2 NADH); glycogenesis/glycogenolysis/tân tạo glucose; điều hòa insulin/glucagon | `T-05.4.2` Chuyển Hóa Glucid | KEEP | EXPAND | S-05.2 `[SRC]` | Giữ nguyên đường phân, glycogenesis, glycogenolysis, tân tạo glucose. |
| M-05.07 | S-05.3 | Chuyển hóa lipid: triglycerid → chylomicron; VLDL/LDL/HDL; lipolysis; beta-oxy hóa acid béo; thể ceton; gan nhiễm mỡ | `T-05.4.3` Chuyển Hóa Lipid | KEEP | EXPAND | S-05.3 `[SRC]` | Giữ nguyên chuyển hóa lipid, lipoproteins, thể ceton. |
| M-05.08 | S-05.4 | Chuyển hóa protein và nitơ: protein → acid amin; khử amin → amoniac → urê (gan) → thận bài tiết; suy gan/thận ảnh hưởng | `T-05.4.4` Chuyển Hóa Protein & Nitơ | KEEP | EXPAND | S-05.4 `[SRC]` | Giữ nguyên chuyển hóa protein, nitơ, ciclo urê. |
| M-05.09 | S-05.5 | Chuyển trạng thái sau ăn và khi đói: bảng 3 trạng thái (sau ăn insulin tăng; đói ngắn insulin giảm glucagon tăng; đói dài thể ceton) | `T-05.4.5` Chuyển Trạng Thái Sau Ăn & Khi Đói | KEEP | EXPAND | S-05.5 `[SRC]` | Giữ nguyên bảng chuyển trạng thái chuyển hóa. |
| M-05.10 | S-05.6 | Rối loạn chuyển hóa thường gặp: đái tháo đường, hạ đường huyết, rối loạn lipid máu, toan lactic, tăng uric máu/gút | `T-05.4.6` Rối Loạn Chuyển Hóa Thường Gặp | KEEP | EXPAND | S-05.6 `[SRC]` | Gộp các rối loạn chuyển hóa thành tiểu mục ứng dụng. |
| M-05.11 | — | Ví dụ đái tháo đường và hạ đường huyết: 3 ca (nam 52 tuổi đái tháo đường; nữ 70 tuổi hạ đường huyết; bệnh nhân sốc nhiễm trùng lactat 5 mmol/L) | `T-05.5.1` Ví dụ 1: Đái Tháo Đường & Hạ Đường Huyết | MERGE | MOVE | S-05.6 (example-box) `[SRC]` | Hộp ví dụ nguồn đã có sẵn, giữ nguyên số liệu. |
| M-05.12 | — | Cách nhớ: "No — Ngắn — Dài" (Ăn no = insulin, dự trữ glycogen/lipid; đói ngắn = glucagon, phân giải glycogen; đói dài = tân tạo glucose + thể ceton). Gan giữ đường huyết, cơ giữ glycogen cho chính mình. Bốn câu hỏi: chất nào bất thường — cơ quan nào chịu trách nhiệm — hormone/enzyme nào — hậu quả cấp nào nguy hiểm | `T-05.5.2` Mẹo nhớ Chuyển Hóa | MERGE | MOVE | S-05.6 (callout) `[SRC]` | Callout nguồn đã có sẵn. |
| M-05.13 | — | Sơ đồ thuật toán chuyển hóa glucid/lipid (Mermaid) | `T-05.5.3` Sơ Đồ Chuyển Hóa Glucid & Lipid (Mermaid) | ADD | — | `[ADDED: Mermaid flowchart]` | Chuyển quy tắc của S-05.2, S-05.3 thành flowchart; không thêm dữ kiện mới. |
| M-05.14 | — | Placeholder hình đường phân, chu kỳ urê, chuyển trạng thái chuyển hóa | `T-05.5.4` Minh Họa Trực quan (Placeholders) | ADD | — | `[ADDED: figure placeholders]` + `[FIGURE]` | Nguồn có 0 hình (`I-05.04`); đặt placeholder theo `FIGURE_POLICY`. |
| M-05.15 | — | Tóm tắt nội dung trọng tâm & quy tắc ghi nhớ | `T-05.6.1` Tóm tắt Nội dung Trọng tâm & Quy tắc Ghi nhớ | MERGE | MOVE | S-05.1–S-05.6 `[SRC]` | Gộp chuyển hóa glucid, lipid, protein, nitơ, chuyển trạng thái, rối loạn thành tóm tắt. |
| M-05.16 | — | Bảng tổng hợp công thức, đơn vị, quy ước dấu | `T-05.6.2` Bảng Tổng hợp Công thức & Lưu ý | ADD | — | `[ADDED: summary concept tables]` | Nguồn có 0 bảng (`I-05.05`); bổ sung bảng tổng hợp. |
| M-05.17 | — | Bộ 10 câu hỏi/bài tập tự lượng giá | `T-05.7` Đánh giá & Bài tập tự lượng giá | ADD | — | `[ADDED: exercises]` | Nguồn hoàn toàn không có bài tập (Q3). |
| M-05.18 | — | Đáp án & hướng dẫn giải từng bước | `T-05.7.4` Đáp án & Hướng dẫn Giải Chi tiết (Answer Key) | ADD | — | `[ADDED: step-by-step answer key]` | Mỗi đáp án ghi `LO` và cấp độ; tính năng chuyển hóa hiển đủ bước. |
| M-05.19 | — | Danh mục tài liệu tham khảo và ghi chú truy vết theo R4 | `T-05.8.1` Tài liệu Tham khảo & Đọc thêm | ADD | — | `[ADDED: reference section structure]` + `[VERIFY: textbook references needed]` | Nguồn `D-05` có 0 trích dẫn (`I-05.05`, `V-05.04`); chờ người dùng cung cấp giáo trình chuẩn. |

**Tổng cộng:** 19 dòng ma trận.

---

## B. Coverage Check

### 1. Kiểm tra độ phủ S-ID từ Audit Register

- **Danh sách S-ID trong `01_audit/ch05_audit.md` (tổng cộng = 6 S-ID):** `S-05.1`, `S-05.2`, `S-05.3`, `S-05.4`, `S-05.5`, `S-05.6`.
- **Ánh xạ từng S-ID trong Ma trận Mapping (Bảng A):**
  - `S-05.1` → `M-05.05` (`T-05.4.1`)
  - `S-05.2` → `M-05.06` (`T-05.4.2`)
  - `S-05.3` → `M-05.07` (`T-05.4.3`)
  - `S-05.4` → `M-05.08` (`T-05.4.4`)
  - `S-05.5` → `M-05.09` (`T-05.4.5`)
  - `S-05.6` → `M-05.10` (`T-05.4.6`)
- **Số S-ID chưa được ánh xạ (Unmapped / Missing S-IDs): 0** (độ phủ **100,0%**).

### 2. Thống kê hành động chính (Primary Action Counts)

| Primary Action | Số dòng ma trận | Tỷ lệ (%) | Danh sách Row ID |
|---|---|---|---|
| **ADD** (khung sư pháp, bảng, hình, ví dụ/bài tập mới) | 11 | 57,9% | M-05.01, M-05.02, M-05.03, M-05.04, M-05.13, M-05.14, M-05.16, M-05.17, M-05.18, M-05.19 |
| **KEEP** (giữ nội dung cốt lõi tại đúng phân khu) | 6 | 31,6% | M-05.05, M-05.06, M-05.07, M-05.08, M-05.09, M-05.10 |
| **MERGE** | 2 | 10,5% | M-05.11, M-05.12, M-05.15 |
| **MOVE** | 0 | 0,0% | (dùng làm secondary cho M-05.11, M-05.12, M-05.15) |
| **REMOVE** | 0 | 0,0% | Không có dòng REMOVE (bảo toàn 100% dữ liệu nguồn) |
| **Tổng cộng** | **19 dòng** | **100,0%** | — |

### 3. Ước tính tỷ lệ nội dung mới và thống kê thẻ

- **Dung lượng nguồn gốc (`D-05`):** 1083 từ (bảo toàn toàn bộ).
- **Dung lượng dự kiến bản thảo hoàn chỉnh (`ch05_draft.md`):** khoảng **4.000–4.500 từ** (đáp ứng `TARGET_LENGTH_PER_CHAPTER: not shorter than source; no upper limit`), tương đương **3,7–4,1 lần** nguồn.

---

## C. Chapter Restructuring Plan

### C.1 Đề cương chi tiết đến cấp Tiểu mục / Chủ đề

```text
Chương 5: Chuyển hóa và rối loạn chuyển hóa thường gặp (tên tạm, chờ xác nhận MANIFEST)
├── 1. Tổng quan chương (Chapter Overview) {T-05.1}
│   ├── 1.1 Tên chương, giới thiệu khái quát & phạm vi nội dung {T-05.1.1} (M-05.01)
│   └── 1.2 Kiến thức tiên kỳ & Thời lượng học tập dự kiến {T-05.1.2} (M-05.02)
├── 2. Mục tiêu học tập (Learning Objectives) {T-05.2}
│   └── 2.1 Chuẩn đầu ra Kiến thức, Kỹ năng, Vận dụng và Đánh giá mô hình (LO-1..LO-4) {T-05.2.1} (M-05.03)
├── 3. Đặt vấn đề & Ý nghĩa thực tiễn (Introduction) {T-05.3}
│   └── 3.1 Tại sao cần hiểu chuyển hóa và rối loạn chuyển hóa {T-05.3.1} (M-05.04)
├── 4. Nội dung bài giảng chính (Main Content) {T-05.4}
│   ├── 4.1 Chuyển Hóa: Định Nghĩa, Dị Hóa & Đồng Hóa {T-05.4.1} [SRC: S-05.1] (M-05.05)
│   ├── 4.2 Chuyển Hóa Glucid {T-05.4.2} [SRC: S-05.2] (M-05.06)
│   ├── 4.3 Chuyển Hóa Lipid {T-05.4.3} [SRC: S-05.3] (M-05.07)
│   ├── 4.4 Chuyển Hóa Protein & Nitơ {T-05.4.4} [SRC: S-05.4] (M-05.08)
│   ├── 4.5 Chuyển Trạng Thái Sau Ăn & Khi Đói {T-05.4.5} [SRC: S-05.5] (M-05.09)
│   └── 4.6 Rối Loạn Chuyển Hóa Thường Gặp {T-05.4.6} [SRC: S-05.6] (M-05.10)
├── 5. Ví dụ minh họa & Quy trình thực hành (Examples & Illustrations) {T-05.5}
│   ├── 5.1 Ví dụ 1: Đái Tháo Đường & Hạ Đường Huyết {T-05.5.1} [SRC] (M-05.11)
│   ├── 5.2 Mẹo nhớ Chuyển Hóa {T-05.5.2} [SRC] (M-05.12)
│   ├── 5.3 Sơ Đồ Chuyển Hóa Glucid & Lipid (Mermaid) {T-05.5.3} (M-05.13)
│   └── 5.4 Minh Họa Trực quan (Placeholders) {T-05.5.4} (M-05.14)
├── 6. Tóm tắt chương (Chapter Summary) {T-05.6}
│   ├── 6.1 Tóm tắt Nội dung Trọng tâm & Quy tắc Ghi nhớ {T-05.6.1} (M-05.15)
│   └── 6.2 Bảng Tổng hợp Công thức & Lưu ý {T-05.6.2} (M-05.16)
├── 7. Đánh giá & Bài tập tự lượng giá (Review & Assessment) {T-05.7}
│   ├── 7.1 Câu hỏi lý thuyết: Nhận biết & Thông hiểu (LO-1) {T-05.7.1} (phần của M-05.17)
│   ├── 7.2 Bài tập áp dụng: Tính toán năng lượng chuyển hóa (LO-2, LO-3) {T-05.7.2} (phần của M-05.17)
│   ├── 7.3 Câu hỏi phân tích & vận dụng nâng cao (LO-3, LO-4) {T-05.7.3} (phần của M-05.17)
│   └── 7.4 Đáp án & Hướng dẫn giải chi tiết (Answer Key) {T-05.7.4} (M-05.18)
└── 8. Tài liệu tham khảo (References) {T-05.8}
    └── 8.1 Danh mục Tài liệu tham khảo & Đọc thêm {T-05.8.1} (M-05.19)
```

### C.2 Kế hoạch bổ sung nội dung mới và lý do sư pháp

1. **Khung sư pháp T1–T3:** Tên chương, giới thiệu, kiến thức tiên kỳ, thời lượng học tập, 4 chuẩn đầu ra `LO-1`..`LO-4`.
2. **Sơ đồ thuật toán Mermaid (`T-05.5.3`):** Quy trình chuyển hóa glucid và lipid.
3. **Placeholder hình (`T-05.5.4`):** Đường phân, chu kỳ urê, chuyển trạng thái chuyển hóa.
4. **Bảng tổng hợp mới (`T-05.6.2`):** Tổng hợp công thức, đơn vị, lưu ý lâm sàng.
5. **Bộ 10 câu hỏi/bài tập + đáp án (`T-05.7`):** Nguồn hoàn toàn không có đánh giá.
6. Giữ nguyên toàn bộ nội dung nguồn; không cắt nội dung (Q2).

### C.3 Rủi ro & Biện pháp kiểm soát

- **Rủi ro 1 (Tên chương chưa chốt):** Xác nhận tại MANIFEST (Q1).
- **Rủi ro 2 (Nguồn ngắn vừa, 1083 từ):** Nếu mở rộng lên 4.000–4.500 thì tỷ lệ 3,7–4,1×. Đây là mở rộng khung sư pháp và bài tập, không cắt nội dung nguồn.
- **Rủi ro 3 (0 bài tập, 0 hình):** Bổ sung `[ADDED]` bài tập và `[FIGURE]` placeholder (Q3, Q4).
- **Rủi ro 4 (0 tài liệu tham khảo):** Đặt `[VERIFY]` (Q5), không bịa nguồn.

### C.4 Chuẩn đầu ra Học tập (Draft LO)

- **`LO-1` (Kiến thức):** Phát biểu định nghĩa chuyển hóa, dị hóa, đồng hóa; phân biệt chuyển hóa glucid, lipid, protein, nitơ; liệt kê insulin/glucagon và vai trò điều hòa.
- **`LO-2` (Kỹ năng):** Giải thích cơ chế đường phân, glycogenesis/glycogenolysis, tân tạo glucose; lipolysis, beta-oxy hóa acid béo; khử amin acid amin và ciclo urê.
- **`LO-3` (Vận dụng):** Giải thích liên hệ giữa chuyển trạng thái chuyển hóa (sau ăn/đói ngắn/đói dài) và homeostase năng lượng của cơ thể.
- **`LO-4` (Đánh giá mô hình):** Đánh giá vai trò của chuyển hóa trong duy trì năng lượng và đường huyết; liên hệ rối loạn chuyển hóa (đái tháo đường, hạ đường huyết, rối loạn lipid, toan lactic) với bệnh lý `[DOMAIN_RULES: chỉ giải thích cơ chế, không liều/chỉ định]`.

### C.5 Glossary & Chuẩn hóa

| Thuật ngữ | Dạng trong nguồn | Dạng chuẩn hóa | Ghi chú |
|---|---|---|---|
| Chuyển hóa | `Chuyển hóa` | **Chuyển hóa (metabolism)** | Giữ nguyên. |
| Dị hóa | `Dị hóa` | **Dị hóa (catabolism)** | Giữ nguyên. |
| Đồng hóa | `Đồng hóa` | **Đồng hóa (anabolism)** | Giữ nguyên. |
| Đường phân | `Đường phân` | **Đường phân (glycolysis)** | Giữ nguyên. |
| Glycogenesis | `Glycogenesis` | **Glycogenesis (tổng hợp glycogen)** | Giữ nguyên. |
| Glycogenolysis | `Glycogenolysis` | **Glycogenolysis (phân giải glycogen)** | Giữ nguyên. |
| Tân tạo glucose | `Tân tạo glucose` | **Tân tạo glucose (gluconeogenesis)** | Giữ nguyên. |
| Lipolysis | `Lipolysis` | **Lipolysis (phân giải lipid)** | Giữ nguyên. |
| Beta-oxy hóa | `Beta-oxy hóa` | **Beta-oxy hóa (beta-oxidation)** | Giữ nguyên. |
| Thể ceton | `Thể ceton` | **Thể ceton (ketone bodies)** | Giữ nguyên. |
| Khử amin | `khử amin` | **Khử amin (deamination)** | Giữ nguyên. |
| Ciclo urê | `ciclo urê` | **Ciclo urê (urea cycle)** | Giữ nguyên. |
| Đái tháo đường | `Đái tháo đường` | **Đái tháo đường (diabetes mellitus)** | Giữ nguyên. |
| Hạ đường huyết | `Hạ đường huyết` | **Hạ đường huyết (hypoglycemia)** | Giữ nguyên. |
| Rối loạn lipid máu | `Rối loạn lipid máu` | **Rối loạn lipid máu (dyslipidemia)** | Giữ nguyên. |
| Toan lactic | `Toan lactic` | **Toan lactic (lactic acidosis)** | Giữ nguyên. |
| Tăng uric máu/gút | `Tăng uric máu/gút` | **Tăng uric máu/gút (hyperuricemia/gout)** | Giữ nguyên. |

---

## D. Verification Items Carried Forward

| V-ID | Nội dung cần kiểm chứng | Loại | Mục T-ID tiếp nhận | Kế hoạch xử lý trong S3 |
|---|---|---|---|---|
| `V-05.01` | Tên chương chính xác | reference | `T-05.1` | Xác nhận MANIFEST (Q1). |
| `V-05.02` | Giá trị ATP, NADH, FADH₂, glucose, lipid | number | `T-05.4.1`, `T-05.4.2`, `T-05.4.3` | Giữ đúng nguồn; gắn `[VERIFY]`. |
| `V-05.03` | 0 hình vẽ/sơ đồ trong nguồn | structure | `T-05.5.4` | Đặt `[FIGURE]` placeholder (Q4). |
| `V-05.04` | 0 tài liệu tham khảo | reference | `T-05.8.1` | Đặt `[VERIFY: reference needed …]` (Q5). |

---

## E. Open Questions for Gate A

1. **Q1 (Tên chương):** Xác nhận tên Ch05 tại `MANIFEST.md` (hiện dùng "Chuyển hóa và rối loạn chuyển hóa thường gặp").
2. **Q2 (Nguồn ngắn vừa, mở rộng):** Nguồn 1083 từ, 6 mục; S3 mở rộng lên ~4.000–4.500 bằng khung sư pháp và bài tập. Đồng ý?
3. **Q3 (Bài tập):** Đồng ý S3 bổ sung bộ 10 câu hỏi/bài tập `[ADDED]`?
4. **Q4 (Hình):** Đồng ý S3 đặt placeholder `[FIGURE]` cho đường phân, chu kỳ urê, chuyển trạng thái chuyển hóa?
5. **Q5 (Tài liệu tham khảo):** Đồng ý để `[VERIFY: reference needed …]`, `APPROVED_REFERENCE_LIST: none`?

---

## F. Not verified / limitations

- Chỉ dựa trên D-05; 0 trích dẫn; 0 hình vẽ; 0 bài tập trong nguồn.
- Tất cả giá trị số giữ nguyên nguồn; gắn `[VERIFY]` khi cần chuyên gia xác nhận.
- Dừng tại GATE A theo R9.

---

GATE A: STOP. Awaiting user approval of the Content Mapping Matrix. Do not begin the transformation.