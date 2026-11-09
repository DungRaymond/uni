# ch04_matrix.md — S2 Mapping & Restructuring Plan · Chương 04

**Môn:** Y dược – Master Lecture Notes · **Stage:** S2 Mapping · **Ngày:** 2026-11-09  
**Nguồn đầu vào:** `00_source_original/ch04_doc-myd-4.html` (D-04), `01_audit/ch04_audit.md`, `_state/carryover_latest.md`  
**Khung cấu trúc:** Template v2 (`T1`–`T8`, `DISCIPLINE_TYPE: STEM-qualitative` theo `00_config.md`)  
**Quy tắc:** Ánh xạ 100% `S-04.1`–`S-04.7` sang `T-04.x.y` không làm mất nội dung; KHÔNG viết bài giảng chi tiết; dừng ở GATE A.

---

## A. Content Mapping Matrix

| Row ID | S-ID(s) | Summary (≤15 words) | Target T-ID and Name | Primary Action | Secondary Actions | Provenance After Transformation | Notes and Risks |
|---|---|---|---|---|---|---|---|
| M-04.01 | — | Tên chương, giới thiệu khái quát & phạm vi nội dung | `T-04.1` Chương 4: Máu, tạo máu và rối loạn huyết học cơ bản | ADD | — | `[ADDED: structural frame]` | Nguồn `D-04` thiếu T1, tên chương chỉ ở `MANIFEST.md` (Q1). |
| M-04.02 | — | Kiến thức tiên kỳ và thời lượng học tập | `T-04.1.1` / `T-04.1.2` (phần của `T-04.1`) Phạm vi, Kiến thức Tiên quyết & Thời lượng Học tập | ADD | — | `[ADDED: study time estimate]` | Nguồn `D-04` không có phần kiến thức tiên quyết; bổ sung theo `STUDY_TIME_RULE`. |
| M-04.03 | — | Bốn chuẩn đầu ra kiến thức, kỹ năng, vận dụng, đánh giá mô hình | `T-04.2` Mục tiêu Học tập (Learning Objectives `LO-1`..`LO-4`) | ADD | — | `[ADDED: learning objectives]` | Suy ra từ `S-04.1`–`S-04.7`. |
| M-04.04 | — | Đặt vấn đề & ý nghĩa thực tiễn | `T-04.3` Đặt vấn đề & Ý nghĩa thực tiễn (Introduction) | ADD | — | `[ADDED: introduction frame]` | Nguồn `D-04` thiếu phần mở luận cấu trúc. |
| M-04.05 | S-04.1 | Thành phần máu và các chỉ số cơ bản: huyết tương + thành phần hữu hình (hồng cầu, bạch cầu, tiểu cầu); hematocrit; hemoglobin | `T-04.4.1` Thành Phần Máu & Các Chỉ Số Cơ Bản | KEEP | EXPAND | S-04.1 `[SRC]` | Giữ nguyên định nghĩa thành phần máu và các chỉ số cơ bản. |
| M-04.06 | S-04.2 | Vận chuyển khí: O₂ gắn thuận nghịch với hemoglobin; CO₂ vận chuyển hòa tan/gắn protein/bicarbonate (carbonic anhydrase); hemoglobin đệm H⁺ | `T-04.4.2` Vận Chuyển Khí | KEEP | EXPAND | S-04.2 `[SRC]` | Giữ nguyên cơ chế vận chuyển O₂/CO₂ hemoglobin. |
| M-04.07 | S-04.3 | Tạo máu và biệt hóa tế bào: tạo máu ở tủy xương đỏ từ tế bào gốc đa tiềm năng; biệt hóa thành dòng tủy và dòng lympho; cytokine điều hòa | `T-04.4.3` Tạo Máu & Biệt Hóa Tế Bào | KEEP | EXPAND | S-04.3 `[SRC]` | Giữ nguyên cơ chế tạo máu và biệt hóa tế bào. |
| M-04.08 | S-04.4 | Sinh hồng cầu và chuyển hóa sắt: EPO kích thích tiền thân hồng cầu; sắt, folate, B₁₂ cần cho hemoglobin/DNA; hồng cầu lưu hành 120 ngày; hepcidin điều hòa sắt | `T-04.4.4` Sinh Hồng Cầu & Chuyển Hóa Sắt | KEEP | EXPAND | S-04.4 `[SRC]` | Giữ nguyên cơ chế sinh hồng cầu và chuyển hóa sắt. |
| M-04.09 | S-04.5 | Cầm máu, đông máu và tiêu sợi huyết: cầm máu ban đầu (co mạch, vWF, tiểu cầu); đông máu (yếu tố → thrombin → fibrin); điều hòa (antithrombin, protein C/S, plasmin) | `T-04.4.5` Cầm Máu, Đông Máu & Tiêu Sợi Huyết | KEEP | EXPAND | S-04.5 `[SRC]` | Giữ nguyên cơ chế cầm máu, đông máu và tiêu sợi huyết. |
| M-04.10 | S-04.6 | Rối loạn huyết học thường gặp: thiếu máu (phân loại MCV), tan máu, tăng hồng cầu, giảm bạch cầu trung tính, giảm tiểu cầu, bệnh ác tính (leukemia, lymphoma, myeloma) | `T-04.4.6` Rối Loạn Huyết Học Thường Gặp | KEEP | EXPAND | S-04.6 `[SRC]` | Gộp các rối loạn huyết học thành tiểu mục ứng dụng. |
| M-04.11 | S-04.7 | Đọc công thức máu theo trình tự: đánh giá Hb/Hct → MCV/RDW/hồng cầu lưới → ferritin/sắt/B₁₂ → tổng bạch cầu → tiểu cầu/phết máu | `T-04.4.7` Đọc Công Thức Máu Theo Trình Tự | KEEP | EXPAND | S-04.7 `[SRC]` | Giữ nguyên trình tự đọc công thức máu. |
| M-04.12 | — | Ví dụ phân loại thiếu máu theo MCV/MCH: 3 ca (nữ 28 tuổi thiếu sắt; nam 65 tuổi thiếu B₁₂; đọc thêm hồng cầu lưới) | `T-04.5.1` Ví dụ 1: Phân Loại Thiếu Máu Theo MCV/MCH | MERGE | MOVE | S-04.6 (example-box) `[SRC]` | Hộp ví dụ nguồn đã có sẵn, giữ nguyên số liệu. |
| M-04.13 | — | Cách nhớ: MCV 3 nhóm ($<80$ fL = nhỏ; $80-100$ fL = bình thường; $>100$ fL = to). Bộ ba thiếu sắt: Hb thấp + MCV nhỏ + ferritin thấp. Thứ tự đọc: Hb/Hct → MCV → hồng cầu lưới → ferritin/B₁₂ → phết máu | `T-04.5.2` Mẹo nhớ Đọc Công Thức Máu | MERGE | MOVE | S-04.6 (callout) `[SRC]` | Callout nguồn đã có sẵn. |
| M-04.14 | — | Sơ đồ quy trình đọc công thức máu (Mermaid) | `T-04.5.3` Sơ Đồ Quy Trình Đọc Công Thức Máu (Mermaid) | ADD | — | `[ADDED: Mermaid flowchart]` | Chuyển quy tắc của S-04.7 thành flowchart; không thêm dữ kiện mới. |
| M-04.15 | — | Placeholder hình thành phần máu, quy trình đông máu, chu trình sắt | `T-04.5.4` Minh Họa Trực quan (Placeholders) | ADD | — | `[ADDED: figure placeholders]` + `[FIGURE]` | Nguồn có 0 hình (`I-04.04`); đặt placeholder theo `FIGURE_POLICY`. |
| M-04.16 | — | Tóm tắt nội dung trọng tâm & quy tắc ghi nhớ | `T-04.6.1` Tóm tắt Nội dung Trọng tâm & Quy tắc Ghi nhớ | MERGE | MOVE | S-04.1–S-04.7 `[SRC]` | Gộp thành phần máu, vận chuyển khí, tạo máu, sinh hồng cầu, đông máu, rối loạn thành tóm tắt. |
| M-04.17 | — | Bảng tổng hợp công thức, đơn vị, quy ước dấu | `T-04.6.2` Bảng Tổng hợp Công thức & Lưu ý | ADD | — | `[ADDED: summary concept tables]` | Nguồn có 0 bảng (`I-04.05`); bổ sung bảng tổng hợp. |
| M-04.18 | — | Bộ 10 câu hỏi/bài tập tự lượng giá | `T-04.7` Đánh giá & Bài tập tự lượng giá | ADD | — | `[ADDED: exercises]` | Nguồn hoàn toàn không có bài tập (Q3). |
| M-04.19 | — | Đáp án & hướng dẫn giải từng bước | `T-04.7.4` Đáp án & Hướng dẫn Giải Chi tiết (Answer Key) | ADD | — | `[ADDED: step-by-step answer key]` | Mỗi đáp án ghi `LO` và cấp độ; tính MCV, MCH hiển đủ bước. |
| M-04.20 | — | Danh mục tài liệu tham khảo và ghi chú truy vết theo R4 | `T-04.8.1` Tài liệu Tham khảo & Đọc thêm | ADD | — | `[ADDED: reference section structure]` + `[VERIFY: textbook references needed]` | Nguồn `D-04` có 0 trích dẫn (`I-04.05`, `V-04.04`); chờ người dùng cung cấp giáo trình chuẩn. |

**Tổng cộng:** 20 dòng ma trận.

---

## B. Coverage Check

### 1. Kiểm tra độ phủ S-ID từ Audit Register

- **Danh sách S-ID trong `01_audit/ch04_audit.md` (tổng cộng = 7 S-ID):** `S-04.1`, `S-04.2`, `S-04.3`, `S-04.4`, `S-04.5`, `S-04.6`, `S-04.7`.
- **Ánh xạ từng S-ID trong Ma trận Mapping (Bảng A):**
  - `S-04.1` → `M-04.05` (`T-04.4.1`)
  - `S-04.2` → `M-04.06` (`T-04.4.2`)
  - `S-04.3` → `M-04.07` (`T-04.4.3`)
  - `S-04.4` → `M-04.08` (`T-04.4.4`)
  - `S-04.5` → `M-04.09` (`T-04.4.5`)
  - `S-04.6` → `M-04.10` (`T-04.4.6`)
  - `S-04.7` → `M-04.11` (`T-04.4.7`)
- **Số S-ID chưa được ánh xạ (Unmapped / Missing S-IDs): 0** (độ phủ **100,0%**).

### 2. Thống kê hành động chính (Primary Action Counts)

| Primary Action | Số dòng ma trận | Tỷ lệ (%) | Danh sách Row ID |
|---|---|---|---|
| **ADD** (khung sư pháp, bảng, hình, ví dụ/bài tập mới) | 12 | 60,0% | M-04.01, M-04.02, M-04.03, M-04.04, M-04.14, M-04.15, M-04.17, M-04.18, M-04.19, M-04.20 |
| **KEEP** (giữ nội dung cốt lõi tại đúng phân khu) | 7 | 35,0% | M-04.05, M-04.06, M-04.07, M-04.08, M-04.09, M-04.10, M-04.11 |
| **MERGE** | 1 | 5,0% | M-04.16 |
| **MOVE** | 0 | 0,0% | (dùng làm secondary cho M-04.12, M-04.13, M-04.16) |
| **REMOVE** | 0 | 0,0% | Không có dòng REMOVE (bảo toàn 100% dữ liệu nguồn) |
| **Tổng cộng** | **20 dòng** | **100,0%** | — |

### 3. Ước tính tỷ lệ nội dung mới và thống kê thẻ

- **Dung lượng nguồn gốc (`D-04`):** 1204 từ (bảo toàn toàn bộ).
- **Dung lượng dự kiến bản thảo hoàn chỉnh (`ch04_draft.md`):** khoảng **4.000–4.500 từ** (đáp ứng `TARGET_LENGTH_PER_CHAPTER: not shorter than source; no upper limit`), tương đương **3,3–3,7 lần** nguồn.

---

## C. Chapter Restructuring Plan

### C.1 Đề cương chi tiết đến cấp Tiểu mục / Chủ đề

```text
Chương 4: Máu, tạo máu và rối loạn huyết học cơ bản (tên tạm, chờ xác nhận MANIFEST)
├── 1. Tổng quan chương (Chapter Overview) {T-04.1}
│   ├── 1.1 Tên chương, giới thiệu khái quát & phạm vi nội dung {T-04.1.1} (M-04.01)
│   └── 1.2 Kiến thức tiên kỳ & Thời lượng học tập dự kiến {T-04.1.2} (M-04.02)
├── 2. Mục tiêu học tập (Learning Objectives) {T-04.2}
│   └── 2.1 Chuẩn đầu ra Kiến thức, Kỹ năng, Vận dụng và Đánh giá mô hình (LO-1..LO-4) {T-04.2.1} (M-04.03)
├── 3. Đặt vấn đề & Ý nghĩa thực tiễn (Introduction) {T-04.3}
│   └── 3.1 Tại sao cần hiểu máu và rối loạn huyết học {T-04.3.1} (M-04.04)
├── 4. Nội dung bài giảng chính (Main Content) {T-04.4}
│   ├── 4.1 Thành Phần Máu & Các Chỉ Số Cơ Bản {T-04.4.1} [SRC: S-04.1] (M-04.05)
│   ├── 4.2 Vận Chuyển Khí {T-04.4.2} [SRC: S-04.2] (M-04.06)
│   ├── 4.3 Tạo Máu & Biệt Hóa Tế Bào {T-04.4.3} [SRC: S-04.3] (M-04.07)
│   ├── 4.4 Sinh Hồng Cầu & Chuyển Hóa Sắt {T-04.4.4} [SRC: S-04.4] (M-04.08)
│   ├── 4.5 Cầm Máu, Đông Máu & Tiêu Sợi Huyết {T-04.4.5} [SRC: S-04.5] (M-04.09)
│   ├── 4.6 Rối Loạn Huyết Học Thường Gặp {T-04.4.6} [SRC: S-04.6] (M-04.10)
│   └── 4.7 Đọc Công Thức Máu Theo Trình Tự {T-04.4.7} [SRC: S-04.7] (M-04.11)
├── 5. Ví dụ minh họa & Quy trình thực hành (Examples & Illustrations) {T-04.5}
│   ├── 5.1 Ví dụ 1: Phân Loại Thiếu Máu Theo MCV/MCH {T-04.5.1} [SRC] (M-04.12)
│   ├── 5.2 Mẹo nhớ Đọc Công Thức Máu {T-04.5.2} [SRC] (M-04.13)
│   ├── 5.3 Sơ Đồ Quy Trình Đọc Công Thức Máu (Mermaid) {T-04.5.3} (M-04.14)
│   └── 5.4 Minh Họa Trực quan (Placeholders) {T-04.5.4} (M-04.15)
├── 6. Tóm tắt chương (Chapter Summary) {T-04.6}
│   ├── 6.1 Tóm tắt Nội dung Trọng tâm & Quy tắc Ghi nhớ {T-04.6.1} (M-04.16)
│   └── 6.2 Bảng Tổng hợp Công thức & Lưu ý {T-04.6.2} (M-04.17)
├── 7. Đánh giá & Bài tập tự lượng giá (Review & Assessment) {T-04.7}
│   ├── 7.1 Câu hỏi lý thuyết: Nhận biết & Thông hiểu (LO-1) {T-04.7.1} (phần của M-04.18)
│   ├── 7.2 Bài tập áp dụng: Tính toán MCV/MCH (LO-2, LO-3) {T-04.7.2} (phần của M-04.18)
│   ├── 7.3 Câu hỏi phân tích & vận dụng nâng cao (LO-3, LO-4) {T-04.7.3} (phần của M-04.18)
│   └── 7.4 Đáp án & Hướng dẫn giải chi tiết (Answer Key) {T-04.7.4} (M-04.19)
└── 8. Tài liệu tham khảo (References) {T-04.8}
    └── 8.1 Danh mục Tài liệu tham khảo & Đọc thêm {T-04.8.1} (M-04.20)
```

### C.2 Kế hoạch bổ sung nội dung mới và lý do sư pháp

1. **Khung sư pháp T1–T3:** Tên chương, giới thiệu, kiến thức tiên kỳ, thời lượng học tập, 4 chuẩn đầu ra `LO-1`..`LO-4`.
2. **Sơ đồ thuật toán Mermaid (`T-04.5.3`):** Quy trình đọc công thức máu.
3. **Placeholder hình (`T-04.5.4`):** Thành phần máu, quy trình đông máu, chu trình sắt.
4. **Bảng tổng hợp mới (`T-04.6.2`):** Tổng hợp công thức, đơn vị, lưu ý lâm sàng.
5. **Bộ 10 câu hỏi/bài tập + đáp án (`T-04.7`):** Nguồn hoàn toàn không có đánh giá.
6. Giữ nguyên toàn bộ nội dung nguồn; không cắt nội dung (Q2).

### C.3 Rủi ro & Biện pháp kiểm soát

- **Rủi ro 1 (Tên chương chưa chốt):** Xác nhận tại MANIFEST (Q1).
- **Rủi ro 2 (Nguồn ngắn vừa, 1204 từ):** Nếu mở rộng lên 4.000–4.500 thì tỷ lệ 3,3–3,7×. Đây là mở rộng khung sư pháp và bài tập, không cắt nội dung nguồn.
- **Rủi ro 3 (0 bài tập, 0 hình):** Bổ sung `[ADDED]` bài tập và `[FIGURE]` placeholder (Q3, Q4).
- **Rủi ro 4 (0 tài liệu tham khảo):** Đặt `[VERIFY]` (Q5), không bịa nguồn.

### C.4 Chuẩn đầu ra Học tập (Draft LO)

- **`LO-1` (Kiến thức):** Phát biểu thành phần máu (huyết tương, thành phần hữu hình); định nghĩa hematocrit, hemoglobin; phân biệt hồng cầu, bạch cầu, tiểu cầu.
- **`LO-2` (Kỹ năng):** Đọc công thức máu theo trình tự (Hb/Hct → MCV/RDW → hồng cầu lưới → ferritin/B₁₂ → tổng bạch cầu → tiểu cầu/phết máu); phân loại thiếu máu theo MCV (nhỏ, bình thường, to).
- **`LO-3` (Vận dụng):** Giải thích cơ chế vận chuyển O₂/CO₂ hemoglobin; cơ chế cầm máu, đông máu và tiêu sợi huyết.
- **`LO-4` (Đánh giá mô hình):** Đánh giá vai trò của máu trong vận chuyển oxy, miễn dịch và cầm máu; liên hệ rối loạn huyết học với bệnh lý `[DOMAIN_RULES: chỉ giải thích cơ chế, không liều/chỉ định]`.

### C.5 Glossary & Chuẩn hóa

| Thuật ngữ | Dạng trong nguồn | Dạng chuẩn hóa | Ghi chú |
|---|---|---|---|
| Huyết tương | `Huyết tương` | **Huyết tương (plasma)** | Giữ nguyên. |
| Thành phần hữu hình | `thành phần hữu hình` | **Thành phần hữu hình (formed elements)** | Giữ nguyên. |
| Hồng cầu | `hồng cầu` | **Hồng cầu (red blood cell – RBC)** | Giữ nguyên. |
| Bạch cầu | `bạch cầu` | **Bạch cầu (white blood cell – WBC)** | Giữ nguyên. |
| Tiểu cầu | `tiểu cầu` | **Tiểu cầu (platelet)** | Giữ nguyên. |
| Hematocrit | `Hematocrit` | **Hematocrit (Hct)** | Giữ nguyên. |
| Hemoglobin | `hemoglobin` | **Hemoglobin (Hb)** | Giữ nguyên. |
| Erythropoietin | `Erythropoietin` | **Erythropoietin (EPO)** | Giữ nguyên. |
| Bicarbonate | `bicarbonate` | **Bicarbonate (HCO₃⁻)** | Giữ nguyên. |
| Carbonic anhydrase | `carbonic anhydrase` | **Carbonic anhydrase** | Giữ nguyên. |
| Hepcidin | `Hepcidin` | **Hepcidin** | Giữ nguyên. |
| Ferritin | `Ferritin` | **Ferritin** | Giữ nguyên. |
| Thrombin | `Thrombin` | **Thrombin** | Giữ nguyên. |
| Fibrinogen | `fibrinogen` | **Fibrinogen** | Giữ nguyên. |
| Fibrin | `fibrin` | **Fibrin** | Giữ nguyên. |
| Antithrombin | `antithrombin` | **Antithrombin** | Giữ nguyên. |
| Protein C/S | `protein C/S` | **Protein C/S** | Giữ nguyên. |
| Plasmin | `Plasmin` | **Plasmin** | Giữ nguyên. |

---

## D. Verification Items Carried Forward

| V-ID | Nội dung cần kiểm chứng | Loại | Mục T-ID tiếp nhận | Kế hoạch xử lý trong S3 |
|---|---|---|---|---|
| `V-04.01` | Tên chương chính xác | reference | `T-04.1` | Xác nhận MANIFEST (Q1). |
| `V-04.02` | Giá trị hematocrit, hemoglobin, MCV, MCH | number | `T-04.4.1`, `T-04.5.1` | Giữ đúng nguồn; gắn `[VERIFY]`. |
| `V-04.03` | 0 hình vẽ/sơ đồ trong nguồn | structure | `T-04.5.4` | Đặt `[FIGURE]` placeholder (Q4). |
| `V-04.04` | 0 tài liệu tham khảo | reference | `T-04.8.1` | Đặt `[VERIFY: reference needed …]` (Q5). |

---

## E. Open Questions for Gate A

1. **Q1 (Tên chương):** Xác nhận tên Ch04 tại `MANIFEST.md` (hiện dùng "Máu, tạo máu và rối loạn huyết học cơ bản").
2. **Q2 (Nguồn ngắn vừa, mở rộng):** Nguồn 1204 từ, 7 mục; S3 mở rộng lên ~4.000–4.500 bằng khung sư pháp và bài tập. Đồng ý?
3. **Q3 (Bài tập):** Đồng ý S3 bổ sung bộ 10 câu hỏi/bài tập `[ADDED]`?
4. **Q4 (Hình):** Đồng ý S3 đặt placeholder `[FIGURE]` cho thành phần máu, quy trình đông máu, chu trình sắt?
5. **Q5 (Tài liệu tham khảo):** Đồng ý để `[VERIFY: reference needed …]`, `APPROVED_REFERENCE_LIST: none`?

---

## F. Not verified / limitations

- Chỉ dựa trên D-04; 0 trích dẫn; 0 hình vẽ; 0 bài tập trong nguồn.
- Tất cả giá trị số giữ nguyên nguồn; gắn `[VERIFY]` khi cần chuyên gia xác nhận.
- Dừng tại GATE A theo R9.

---

GATE A: STOP. Awaiting user approval of the Content Mapping Matrix. Do not begin the transformation.