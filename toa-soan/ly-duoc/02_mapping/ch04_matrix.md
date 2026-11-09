# ch04_matrix.md — S2 Mapping & Restructuring Plan · Chương 04

**Môn:** Lý dược – Master Lecture Notes · **Stage:** S2 Mapping · **Ngày:** 2026-11-09  
**Nguồn đầu vào:** `00_source_original/ch04_doc-ld-c3.html` (D-04), `01_audit/ch04_audit.md`, `_state/carryover_latest.md`  
**Khung cấu trúc:** Template v2 (`T1`–`T8`, `DISCIPLINE_TYPE: STEM-quantitative` theo `00_config.md`)  
**Quy tắc:** Ánh xạ 100% `S-04.1`–`S-04.5` sang `T-04.x.y` không làm mất nội dung; KHÔNG viết bài giảng chi tiết; dừng ở GATE A.

---

## A. Content Mapping Matrix

| Row ID | S-ID(s) | Summary (≤15 words) | Target T-ID and Name | Primary Action | Secondary Actions | Provenance After Transformation | Notes and Risks |
|---|---|---|---|---|---|---|---|
| M-04.01 | — | Tên chương, giới thiệu khái quát và phạm vi nội dung | `T-04.1` Chương 4: Nhiệt động lực học sinh học (Bioenergetics & Thermodynamics) | ADD | — | `[ADDED: structural frame]` | Nguồn `D-04` thiếu T1, tên chương chỉ ở `MANIFEST.md` (Q1). |
| M-04.02 | — | Kiến thức tiên kỳ và thời lượng học tập | `T-04.1.1` / `T-04.1.2` (phần của `T-04.1`) Phạm vi, Kiến thức Tiên quyết & Thời lượng Học tập | ADD | — | `[ADDED: study time estimate]` | Nguồn `D-04` không có phần kiến thức tiên quyết; bổ sung theo `STUDY_TIME_RULE`. |
| M-04.03 | — | Bốn chuẩn đầu ra kiến thức, kỹ năng, vận dụng, đánh giá mô hình | `T-04.2` Mục tiêu Học tập (Learning Objectives `LO-1`..`LO-4`) | ADD | — | `[ADDED: learning objectives]` | Suy ra từ `S-04.1`–`S-04.5`. |
| M-04.04 | S-04.1 | Hệ cô lập/kín/mở; trạng thái dừng vs cân bằng nhiệt động | `T-04.4.1` Hệ Nhiệt động & Trạng thái Dừng | KEEP | EXPAND, REWRITE | S-04.1 `[SRC]` | Giữ nguyên phân biệt hệ cô lập/kín/mở và trạng thái dừng vs cân bằng nhiệt động (trạng thái chết). |
| M-04.05 | S-04.2 | Nguyên lý I: $\Delta U = Q - A$; $\Delta E_{hóa\ học} = Q_{tỏa} + A_{sinh}$; nhiệt sơ cấp/thứ cấp; công hóa học/cơ học/thẩm thấu/điện | `T-04.4.2` Nguyên lý I Nhiệt động học & Năng lượng Hóa học trong Cơ thể Sống | KEEP | EXPAND, REWRITE | S-04.2 `[SRC]` | Giữ nguyên phương trình tổng quát và các dạng công năng lượng sinh học. |
| M-04.06 | S-04.3 | Nguyên lý II: entropy; phương trình Prigogine $dS = d_iS + d_eS$; điều kiện trạng thái dừng | `T-04.4.3` Nguyên lý II Nhiệt động học & Phương trình Prigogine | KEEP | EXPAND, REWRITE | S-04.3 `[SRC]` | Giữ nguyên $d_iS > 0$, $d_eS < 0$, $|d_eS| = d_iS \implies dS = 0$; Schrödinger "hút entropy âm". |
| M-04.07 | S-04.4 | Năng lượng tự do Gibbs $\Delta G = \Delta H - T \cdot \Delta S$; chiều phản ứng; liên hợp năng lượng ATP | `T-04.4.4` Năng lượng Tự do Gibbs & Chiều Phản ứng Sinh hóa | KEEP | EXPAND, REWRITE | S-04.4 `[SRC]` | Giữ nguyên $\Delta G < 0 / > 0 / = 0$; liên hợp với thủy phân ATP ($\Delta G^{\circ\prime} \approx -30,5\text{ kJ/mol}$). |
| M-04.08 | S-04.5 | Ý nghĩa và tác dụng: chuyển hóa năng lượng, sinh nhiệt, công cơ thể; ATP coupling; trạng thái dừng phân biệt cơ thể sống | `T-04.4.5` Ý nghĩa & Ứng dụng Dược lý | KEEP | EXPAND, MERGE | S-04.5 `[SRC]` | Gộp ý nghĩa các mục 1–4 thành một tiểu mục ứng dụng. |
| M-04.09 | — | Ví dụ ghép cặp năng lượng ở hexokinase (glucose + Pi → glucose-6-phosphate, ghép ATP) | `T-04.5.1` Ví dụ 1: Ghép cặp năng lượng tại hexokinase | MERGE | MOVE | S-04.4 (example-box) `[SRC]` | Hộp ví dụ nguồn đã có sẵn, giữ nguyên số liệu ($\Delta G_1 = +16,7$, $\Delta G_2 = -30,5$, tổng $-13,8\text{ kJ/mol}$). |
| M-04.10 | — | Cách nhớ Gibbs ($G = H - T \cdot S$; âm = tự phát, dương = cần ghép ATP, 0 = cân bằng); Prigogine 3 bước | `T-04.5.2` Mẹo nhớ Gibbs & Prigogine | MERGE | MOVE | S-04.4, S-04.3 (callout) `[SRC]` | Callout nguồn đã có sẵn. |
| M-04.11 | — | Sơ đồ hệ nhiệt động (cô lập/kín/mở) & chu kỳ ATP/ADP (Mermaid) | `T-04.5.3` Sơ đồ hệ nhiệt động & chu kỳ ATP/ADP (Mermaid) | ADD | — | `[ADDED: Mermaid flowchart]` | Chuyển quy tắc của S-04.1, S-04.3, S-04.4 thành flowchart; không thêm dữ kiện mới. |
| M-04.12 | — | Placeholder hình hệ nhiệt động, phương trình Prigogine, chu kỳ ATP/ADP | `T-04.5.4` Minh họa Trực quan (Placeholders) | ADD | — | `[ADDED: figure placeholders]` + `[FIGURE]` | Nguồn có 0 hình (`I-04.04`); đặt placeholder theo `FIGURE_POLICY`. |
| M-04.13 | — | Tóm tắt nội dung trọng tâm & quy tắc ghi nhớ | `T-04.6.1` Tóm tắt Nội dung Trọng tâm & Quy tắc Ghi nhớ | MERGE | MOVE | S-04.1–S-04.5 `[SRC]` | Gộp nguyên lý I/II, Gibbs, ATP coupling thành tóm tắt. |
| M-04.14 | — | Bảng tổng hợp công thức, đơn vị, quy ước dấu | `T-04.6.2` Bảng Tổng hợp Công thức & Lưu ý | ADD | — | `[ADDED: summary concept tables]` | Nguồn có 0 bảng (`I-04.05`); bổ sung bảng tổng hợp. |
| M-04.15 | — | Bộ 10 câu hỏi/bài tập tự lượng giá | `T-04.7` Đánh giá & Bài tập tự lượng giá | ADD | — | `[ADDED: exercises]` | Nguồn hoàn toàn không có bài tập (Q3). |
| M-04.16 | — | Đáp án & hướng dẫn giải từng bước | `T-04.7.4` Đáp án & Hướng dẫn Giải Chi tiết (Answer Key) | ADD | — | `[ADDED: step-by-step answer key]` | Mỗi đáp án ghi `LO` và cấp độ; tính $\Delta G$ hiển đủ bước. |
| M-04.17 | — | Danh mục tài liệu tham khảo và ghi chú truy vết theo R4 | `T-04.8.1` Tài liệu Tham khảo & Đọc thêm | ADD | — | `[ADDED: reference section structure]` + `[VERIFY: textbook references needed]` | Nguồn `D-04` có 0 trích dẫn (`I-04.05`, `V-04.04`); chờ người dùng cung cấp giáo trình chuẩn. |

**Tổng cộng:** 17 dòng ma trận.

---

## B. Coverage Check

### 1. Kiểm tra độ phủ S-ID từ Audit Register

- **Danh sách S-ID trong `01_audit/ch04_audit.md` (tổng cộng = 5 S-ID):** `S-04.1`, `S-04.2`, `S-04.3`, `S-04.4`, `S-04.5`.
- **Ánh xạ từng S-ID trong Ma trận Mapping (Bảng A):**
  - `S-04.1` → `M-04.04` (`T-04.4.1`)
  - `S-04.2` → `M-04.05` (`T-04.4.2`)
  - `S-04.3` → `M-04.06` (`T-04.4.3`)
  - `S-04.4` → `M-04.07` (`T-04.4.4`)
  - `S-04.5` → `M-04.08` (`T-04.4.5`)
- **Số S-ID chưa được ánh xạ (Unmapped / Missing S-IDs): 0** (độ phủ **100,0%**).
- **Báo cáo kiểm tra cơ học:** sẽ chạy `_tools/check_coverage.py` tại S2/S3.

### 2. Thống kê hành động chính (Primary Action Counts)

| Primary Action | Số dòng ma trận | Tỷ lệ (%) | Danh sách Row ID |
|---|---|---|---|
| **ADD** (khung sư pháp, bảng, hình, ví dụ/bài tập mới) | 10 | 66,7% | M-04.01, M-04.02, M-04.03, M-04.09, M-04.10, M-04.11, M-04.12, M-04.13, M-04.14, M-04.15 |
| **KEEP** (giữ nội dung cốt lõi tại đúng phân khu) | 5 | 33,3% | M-04.04, M-04.05, M-04.06, M-04.07, M-04.08 |
| **MERGE** | 0 | 0,0% | (ví dụ nguồn đã nằm đúng phân khu) |
| **MOVE** | 0 | 0,0% | (dùng làm secondary cho M-04.09, M-04.10) |
| **REMOVE** | 0 | 0,0% | Không có dòng REMOVE (bảo toàn 100% dữ liệu nguồn) |
| **Tổng cộng** | **15 dòng** | **100,0%** | — |

### 3. Ước tính tỷ lệ nội dung mới và thống kê thẻ

- **Dung lượng nguồn gốc (`D-04`):** 1018 từ (bảo toàn toàn bộ).
- **Dung lượng dự kiến bản thảo hoàn chỉnh (`ch04_draft.md`):** khoảng **4.000–4.500 từ** (đáp ứng `TARGET_LENGTH_PER_CHAPTER: not shorter than source; no upper limit`), tương đương **4–4,5 lần** nguồn.
- Nguồn vừa phải, S3 sẽ mở rộng đáng kể khung sư pháp T1–T3 và bổ sung bài tập T7.

---

## C. Chapter Restructuring Plan

### C.1 Đề cương chi tiết đến cấp Tiểu mục / Chủ đề

```text
Chương 4: Nhiệt động lực học sinh học (Bioenergetics & Thermodynamics) (tên tạm, chờ xác nhận MANIFEST)
├── 1. Tổng quan chương (Chapter Overview) {T-04.1}
│   ├── 1.1 Tên chương, giới thiệu khái quát & phạm vi nội dung {T-04.1.1} (M-04.01)
│   └── 1.2 Kiến thức tiên kỳ & Thời lượng học tập dự kiến {T-04.1.2} (M-04.02)
├── 2. Mục tiêu học tập (Learning Objectives) {T-04.2}
│   └── 2.1 Chuẩn đầu ra Kiến thức, Kỹ năng, Vận dụng và Đánh giá mô hình (LO-1..LO-4) {T-04.2.1} (M-04.03)
├── 3. Đặt vấn đề & Ý nghĩa thực tiễn (Introduction) {T-04.3}
│   └── 3.1 Từ hệ nhiệt động đến sự sống như hệ mở (phần mở đầu)
├── 4. Nội dung bài giảng chính (Main Content) {T-04.4}
│   ├── 4.1 Hệ Nhiệt động & Trạng thái Dừng {T-04.4.1} [SRC: S-04.1] (M-04.04)
│   ├── 4.2 Nguyên lý I Nhiệt động học & Năng lượng Hóa học trong Cơ thể Sống {T-04.4.2} [SRC: S-04.2] (M-04.05)
│   ├── 4.3 Nguyên lý II Nhiệt động học & Phương trình Prigogine {T-04.4.3} [SRC: S-04.3] (M-04.06)
│   ├── 4.4 Năng lượng Tự do Gibbs & Chiều Phản ứng Sinh hóa {T-04.4.4} [SRC: S-04.4] (M-04.07)
│   └── 4.5 Ý nghĩa & Ứng dụng Dược lý {T-04.4.5} [SRC: S-04.5] (M-04.08)
├── 5. Ví dụ minh họa & Quy trình thực hành (Examples & Illustrations) {T-04.5}
│   ├── 5.1 Ví dụ 1: Ghép cặp năng lượng tại hexokinase {T-04.5.1} [SRC] (M-04.09)
│   ├── 5.2 Mẹo nhớ Gibbs & Prigogine {T-04.5.2} [SRC] (M-04.10)
│   ├── 5.3 Sơ đồ hệ nhiệt động & chu kỳ ATP/ADP (Mermaid) {T-04.5.3} (M-04.11)
│   └── 5.4 Minh họa Trực quan (Placeholders) {T-04.5.4} (M-04.12)
├── 6. Tóm tắt chương (Chapter Summary) {T-04.6}
│   ├── 6.1 Tóm tắt Nội dung Trọng tâm & Quy tắc Ghi nhớ {T-04.6.1} (M-04.13)
│   └── 6.2 Bảng Tổng hợp Công thức & Lưu ý {T-04.6.2} (M-04.14)
├── 7. Đánh giá & Bài tập tự lượng giá (Review & Assessment) {T-04.7}
│   ├── 7.1 Câu hỏi lý thuyết: Nhận biết & Thông hiểu (LO-1) {T-04.7.1} (phần của M-04.15)
│   ├── 7.2 Bài tập áp dụng: Tính toán $\Delta G$ & liên hợp năng lượng (LO-2, LO-3) {T-04.7.2} (phần của M-04.15)
│   ├── 7.3 Câu hỏi phân tích & vận dụng nâng cao (LO-3, LO-4) {T-04.7.3} (phần của M-04.15)
│   └── 7.4 Đáp án & Hướng dẫn giải chi tiết (Answer Key) {T-04.7.4} (M-04.16)
└── 8. Tài liệu tham khảo (References) {T-04.8}
    └── 8.1 Danh mục Tài liệu tham khảo & Đọc thêm {T-04.8.1} (M-04.17)
```

### C.2 Kế hoạch bổ sung nội dung mới và lý do sư pháp

1. **Khung sư phạm T1–T3:** Tên chương, giới thiệu, kiến thức tiên kỳ, thời lượng, 4 chuẩn đầu ra `LO-1`..`LO-4`.
2. **Sơ đồ thuật toán Mermaid (`T-04.5.3`):** Quy trình hệ nhiệt động (cô lập/kín/mở) & chu kỳ ATP/ADP.
3. **Placeholder hình (`T-04.5.4`):** Hệ nhiệt động, phương trình Prigogine, chu kỳ ATP/ADP.
4. **Bảng tổng hợp mới (`T-04.6.2`):** Tổng hợp công thức, đơn vị, quy ước dấu của toàn chương.
5. **Bộ 10 câu hỏi/bài tập + đáp án (`T-04.7`):** Nguồn hoàn toàn không có đánh giá.
6. Giữ nguyên 4 công thức và 1 ví dụ của nguồn; không cắt nội dung (Q2).

### C.3 Rủi ro & Biện pháp kiểm soát

- **Rủi ro 1 (Tên chương chưa chốt):** Xác nhận tại MANIFEST (Q1).
- **Rủi ro 2 (Nguồn vừa phải, 1018 từ):** Nếu mở rộng lên 4.000–4.500 thì tỷ lệ 4–4,5×. Đây là mở rộng khung sư pháp và bài tập, không cắt nội dung nguồn.
- **Rủi ro 3 (0 bài tập, 0 hình):** Bổ sung `[ADDED]` bài tập và `[FIGURE]` placeholder (Q3, Q4).
- **Rủi ro 4 (0 tài liệu tham khảo):** Đặt `[VERIFY]` (Q5), không bịa nguồn.

### C.4 Chuẩn đầu ra Học tập (Draft LO)

- **LO-1:** Phát biểu được hệ nhiệt động (cô lập/kín/mở), trạng thái dừng vs cân bằng nhiệt động, nguyên lý I & II, enthalpy, entropy, năng lượng tự do Gibbs.
- **LO-2:** Tính toán được $\Delta U = Q - A$, $\Delta E_{hóa\ học} = Q_{tỏa} + A_{sinh}$, $\Delta G = \Delta H - T\Delta S$; phân biệt phản ứng tự phát và không tự phát.
- **LO-3:** Vận dụng để giải thích chuyển hóa năng lượng trong cơ thể, sinh nhiệt, công cơ thể, liên hợp năng lượng ATP.
- **LO-4:** Đánh giá vai trò của nhiệt động học sinh học trong chuyển hóa cơ sở, BMR, hoạt động cơ thể; liên hệ trạng thái dừng với sự sống.

### C.5 Glossary & Chuẩn hóa

| Thuật ngữ | Dạng trong nguồn | Dạng chuẩn hóa | Ghi chú |
|---|---|---|---|
| Hệ nhiệt động | `Hệ cô lập`, `Hệ kín`, `Hệ mở` | **Hệ nhiệt động (thermodynamic system)**: cô lập/kín/mở | Giữ nguyên. |
| Trạng thái dừng | `Trạng thái dừng (Steady State)` | **Trạng thái dừng (steady state)** | Phân biệt với cân bằng nhiệt động (trạng thái chết). |
| Nguyên lý I | `Nguyên lý I Nhiệt động học` | **Nguyên lý I nhiệt động học (bảo toàn năng lượng)** | Giữ nguyên. |
| Nguyên lý II | `Nguyên lý II Nhiệt động học` | **Nguyên lý II nhiệt động học (tăng entropy trong hệ cô lập)** | Giữ nguyên. |
| Phương trình Prigogine | `Phương trình Prigogine` | **Phương trình Prigogine ($dS = d_iS + d_eS$)** | Giữ nguyên. |
| Năng lượng tự do Gibbs | `Năng lượng tự do Gibbs ($\Delta G$)` | **Năng lượng tự do Gibbs (Gibbs free energy – $\Delta G$)** | Giữ nguyên. |
| Liên hợp năng lượng | `Cơ chế liên hợp năng lượng (Energy Coupling)` | **Liên hợp năng lượng (energy coupling)** | Giữ nguyên. |
| ATP/ADP/Pi | `ATP`, `ADP`, `P_i` | **ATP**, **ADP**, **$P_i$** | Giữ nguyên, INN. |
| Cobalt-60 | `Coban-60 ($^{60}Co$)* | **Cobalt-60 ($^{60}Co$)** | Sửa lại tên gốc Cobalt (không phải Coban). *Lưu ý: V-04.02 nếu cần |

---

## D. Verification Items Carried Forward

| V-ID | Nội dung cần kiểm chứng | Loại | Mục T-ID tiếp nhận | Kế hoạch xử lý trong S3 |
|---|---|---|---|---|
| `V-04.01` | Tên chương chính xác | reference | `T-04.1` | Xác nhận MANIFEST (Q1). |
| `V-04.02` | Giá trị $\Delta G^{\circ\prime} \approx -30,5\text{ kJ/mol}$, $\Delta G_1 = +16,7$, $\Delta G_2 = -30,5$, $\Delta G_{tổng} = -13,8\text{ kJ/mol}$ | number/formula | `T-04.4.4`, `T-04.5.1` | Giữ đúng nguồn; gắn `[VERIFY]`. |
| `V-04.03` | 0 hình vẽ/sơ đồ trong nguồn | structure | `T-04.5.4` | Đặt `[FIGURE]` placeholder (Q4). |
| `V-04.04` | 0 tài liệu tham khảo | reference | `T-04.8.1` | Đặt `[VERIFY: reference needed …]` (Q5). |

---

## E. Open Questions for Gate A

1. **Q1 (Tên chương):** Xác nhận tên Ch04 tại `MANIFEST.md` (hiện dùng "Chương 4: Nhiệt động lực học sinh học (Bioenergetics & Thermodynamics)").
2. **Q2 (Nguồn vừa phải, mở rộng):** Nguồn chỉ 1018 từ, 5 mục; S3 mở rộng lên ~4.000–4.500 bằng khung sư pháp và bài tập. Đồng ý?
3. **Q3 (Bài tập):** Đồng ý S3 bổ sung bộ 10 câu hỏi/bài tập `[ADDED]`?
4. **Q4 (Hình):** Đồng ý S3 đặt placeholder `[FIGURE]` cho hệ nhiệt động, phương trình Prigogine, chu kỳ ATP/ADP?
5. **Q5 (Tài liệu tham khảo):** Đồng ý để `[VERIFY: reference needed …]`, `APPROVED_REFERENCE_LIST: none`?

---

## F. Not verified / limitations

- Chỉ dựa trên D-04; 0 trích dẫn; 0 hình vẽ; 0 bài tập trong nguồn.
- Tất cả công thức, giá trị số giữ nguyên nguồn; gắn `[VERIFY]` khi cần chuyên gia xác nhận.
- Dừng tại GATE A theo R9.

---
GATE A: STOP. Awaiting user approval of the Content Mapping Matrix. Do not begin the transformation.
