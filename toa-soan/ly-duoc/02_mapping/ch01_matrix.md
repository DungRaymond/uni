# ch01_matrix.md — S2 Mapping & Restructuring Plan · Chương 01

**Môn:** Lý dược – Master Lecture Notes · **Stage:** S2 Mapping · **Ngày:** 2026-11-09  
**Nguồn đầu vào:** `00_source_original/ch01_doc-ld-1.html` (D-01), `01_audit/ch01_audit.md`, `_state/carryover_latest.md`  
**Khung cấu trúc:** Template v2 (`T1`–`T8`, `DISCIPLINE_TYPE: STEM-quantitative` theo `00_config.md`)  
**Quy tắc:** Ánh xạ 100% `S-01.1`–`S-01.3` sang `T-01.x.y` không làm mất nội dung; KHÔNG viết bài giảng chi tiết; dừng ở GATE A.

---

## A. Content Mapping Matrix

| Row ID | S-ID(s) | Summary (≤15 words) | Target T-ID and Name | Primary Action | Secondary Actions | Provenance After Transformation | Notes and Risks |
|---|---|---|---|---|---|---|---|
| M-01.01 | — | Tên chuyên đề, giới thiệu khái quát và phạm vi nội dung | `T-01.1` Chuyên đề 1: Nhiệt động học sinh học & Động học chất lưu trong hệ tuần hoàn | ADD | — | `[ADDED: structural frame]` | Nguồn `D-01` thiếu T1, tên chương chỉ ở `MANIFEST.md` (Q1). |
| M-01.02 | — | Kiến thức tiên quyết Chương hóa phổ thông và thời lượng học tập | `T-01.1.1` / `T-01.1.2` (phần của `T-01.1`) Phạm vi, Kiến thức Tiên quyết & Thời lượng Học tập | ADD | — | `[ADDED: study time estimate]` | Nguồn `D-01` không có phần kiến thức tiên quyết; bổ sung theo `STUDY_TIME_RULE`. |
| M-01.03 | — | Bốn chuẩn đầu ra kiến thức, kỹ năng, vận dụng, đánh giá mô hình | `T-01.2` Mục tiêu Học tập (Learning Objectives `LO-1`..`LO-4`) | ADD | — | `[ADDED: learning objectives]` | Suy ra từ `S-01.1`–`S-01.3`. |
| M-01.04 | S-01.1 | Hệ mở, steady state, nguyên lý I & II, entropy | `T-01.4.1` Nguyên lý Nhiệt động học trong Hệ Sống | KEEP | EXPAND, REWRITE | S-01.1 `[SRC]` | Giữ nguyên ΔE = Q − A và nguyên lý II entropy. |
| M-01.05 | S-01.2 | Động học dòng máu, định luật Poiseuille, sức cản, số Reynolds | `T-01.4.2` Động học Dòng Máu & Định luật Poiseuille | KEEP | EXPAND, REWRITE | S-01.2 `[SRC]` | Giữ nguyên Q = πΔPr⁴/8ηl, R = 8ηl/πr⁴, Re < 2000 / > 2000. |
| M-01.06 | S-01.3 | Ý nghĩa và tác dụng: huyết động, tiếng thổi tim, co/giãn mạch | `T-01.4.3` Ý nghĩa & Ứng dụng Dược lý | KEEP | EXPAND, MERGE | S-01.3 `[SRC]` | Gộp ý nghĩa các mục 1–2 thành một tiểu mục ứng dụng. |
| M-01.07 | — | Ví dụ mạch hẹp 20% → lưu lượng 41% (r⁴) | `T-01.5.1` Ví dụ 1: Mạch hẹp 20%, lưu lượng còn bao nhiêu? | MERGE | MOVE | S-01.3 (example-box) `[SRC]` | Hộp ví dụ nguồn đã có sẵn, giữ nguyên số liệu. |
| M-01.08 | — | Cách nhớ Poiseuille "bậc 4 bán kính" và quy trình 3 bước | `T-01.5.2` Mẹo nhớ & Quy trình 3 bước | MERGE | MOVE | S-01.3 (callout) `[SRC]` | Callout nguồn đã có sẵn. |
| M-01.09 | — | Sơ đồ hệ mở / steady state và dòng chảy tầng vs xoáy (Mermaid) | `T-01.5.3` Sơ đồ thuật toán hệ mở & dòng chảy chất lưu (Mermaid) | ADD | — | `[ADDED: Mermaid flowchart]` | Chuyển quy tắc của S-01.1, S-01.2 thành flowchart; không thêm dữ kiện mới. |
| M-01.10 | — | Placeholder hình hệ mở, steady state, sức cản mạch theo r⁴ | `T-01.5.4` Minh họa Trực quan (Placeholders) | ADD | — | `[ADDED: figure placeholders]` + `[FIGURE]` | Nguồn có 0 hình (`I-01.04`); đặt placeholder theo `FIGURE_POLICY`. |
| M-01.11 | — | Tóm tắt nội dung trọng tâm & quy tắc ghi nhớ | `T-01.6.1` Tóm tắt Nội dung Trọng tâm & Quy tắc Ghi nhớ | MERGE | MOVE | S-01.1–S-01.3 `[SRC]` | Gộp nguyên lý I/II, Poiseuille, Re thành tóm tắt. |
| M-01.12 | — | Bảng tổng hợp công thức, đơn vị, quy ước dấu | `T-01.6.2` Bảng Tổng hợp Công thức & Lưu ý | ADD | — | `[ADDED: summary concept tables]` | Nguồn có 0 bảng (`I-01.05`); bổ sung bảng tổng hợp. |
| M-01.13 | — | Bộ 10 câu hỏi/bài tập tự lượng giá | `T-01.7` Đánh giá & Bài tập tự lượng giá | ADD | — | `[ADDED: exercises]` | Nguồn hoàn toàn không có bài tập (Q3). |
| M-01.14 | — | Đáp án & hướng dẫn giải từng bước | `T-01.7.4` Đáp án & Hướng dẫn Giải Chi tiết (Answer Key) | ADD | — | `[ADDED: step-by-step answer key]` | Mỗi đáp án ghi `LO` và cấp độ; tính Poiseuille hiển đủ bước. |
| M-01.15 | — | Danh mục tài liệu tham khảo và ghi chú truy vết theo R4 | `T-01.8.1` Tài liệu Tham khảo & Đọc thêm | ADD | — | `[ADDED: reference section structure]` + `[VERIFY: textbook references needed]` | Nguồn `D-01` có 0 trích dẫn (`I-01.06`, `V-01.05`); chờ người dùng cung cấp giáo trình chuẩn. |

**Tổng cộng:** 15 dòng ma trận.

---

## B. Coverage Check

### 1. Kiểm tra độ phủ S-ID từ Audit Register

- **Danh sách S-ID trong `01_audit/ch01_audit.md` (tổng cộng = 3 S-ID):** `S-01.1`, `S-01.2`, `S-01.3`.
- **Ánh xạ từng S-ID trong Ma trận Mapping (Bảng A):**
  - `S-01.1` → `M-01.04` (`T-01.4.1`)
  - `S-01.2` → `M-01.05` (`T-01.4.2`)
  - `S-01.3` → `M-01.06` (`T-01.4.3`)
- **Số S-ID chưa được ánh xạ (Unmapped / Missing S-IDs): 0** (độ phủ **100,0%**).
- **Báo cáo kiểm tra cơ học:** sẽ chạy `_tools/check_coverage.py` tại S2/S3.

### 2. Thống kê hành động chính (Primary Action Counts)

| Primary Action | Số dòng ma trận | Tỷ lệ (%) | Danh sách Row ID |
|---|---|---|---|
| **ADD** (khung sư phạm, bảng, hình, ví dụ/bài tập mới) | 9 | 60,0% | M-01.01, M-01.02, M-01.03, M-01.09, M-01.10, M-01.11, M-01.12, M-01.13, M-01.14, M-01.15 |
| **KEEP** (giữ nội dung cốt lõi tại đúng phân khu) | 3 | 20,0% | M-01.04, M-01.05, M-01.06 |
| **MERGE** | 0 | 0,0% | (ví dụ nguồn đã nằm đúng phân khu) |
| **MOVE** | 0 | 0,0% | (dùng làm secondary cho M-01.07, M-01.08) |
| **REMOVE** | 0 | 0,0% | Không có dòng REMOVE (bảo toàn 100% dữ liệu nguồn) |
| **Tổng cộng** | **15 dòng** | **100,0%** | — |

### 3. Ước tính tỷ lệ nội dung mới và thống kê thẻ

- **Dung lượng nguồn gốc (`D-01`):** 579 từ (bảo toàn toàn bộ).
- **Dung lượng dự kiến bản thảo hoàn chỉnh (`ch01_draft.md`):** khoảng **4.000–4.500 từ** (đáp ứng `TARGET_LENGTH_PER_CHAPTER: not shorter than source; no upper limit`), tương đương **7–8 lần** nguồn (nguồn rất ngắn, cần mở rộng khung sư phạm và bài tập).
- Nguồn rất ngắn, S3 sẽ mở rộng đáng kể khung sư phạm T1–T3 và bổ sung bài tập T7.

---

## C. Chapter Restructuring Plan

### C.1 Đề cương chi tiết đến cấp Tiểu mục / Chủ đề

```text
Chuyên đề 1: Nhiệt động học sinh học & Động học chất lưu trong hệ tuần hoàn (tên tạm, chờ xác nhận MANIFEST)
├── 1. Tổng quan chương (Chapter Overview) {T-01.1}
│   ├── 1.1 Tên chuyên đề, giới thiệu khái quát & phạm vi nội dung {T-01.1.1} (M-01.01)
│   └── 1.2 Kiến thức tiên quyết & Thời lượng học tập dự kiến {T-01.1.2} (M-01.02)
├── 2. Mục tiêu học tập (Learning Objectives) {T-01.2}
│   └── 2.1 Chuẩn đầu ra Kiến thức, Kỹ năng, Vận dụng và Đánh giá mô hình (LO-1..LO-4) {T-01.2.1} (M-01.03)
├── 3. Đặt vấn đề & Ý nghĩa thực tiễn (Introduction) {T-01.3}
│   └── 3.1 Từ hệ mở đến sự ổn định nội tại của cơ thể sống (phần mở đầu)
├── 4. Nội dung bài giảng chính (Main Content) {T-01.4}
│   ├── 4.1 Nguyên lý Nhiệt động học trong Hệ Sống {T-01.4.1} [SRC: S-01.1] (M-01.04)
│   ├── 4.2 Động học Dòng Máu & Định luật Poiseuille {T-01.4.2} [SRC: S-01.2] (M-01.05)
│   └── 4.3 Ý nghĩa & Ứng dụng Dược lý {T-01.4.3} [SRC: S-01.3] (M-01.06)
├── 5. Ví dụ minh họa & Quy trình thực hành (Examples & Illustrations) {T-01.5}
│   ├── 5.1 Ví dụ 1: Mạch hẹp 20%, lưu lượng còn bao nhiêu? {T-01.5.1} [SRC] (M-01.07)
│   ├── 5.2 Mẹo nhớ & Quy trình 3 bước {T-01.5.2} [SRC] (M-01.08)
│   ├── 5.3 Sơ đồ thuật toán hệ mở & dòng chảy chất lưu (Mermaid) {T-01.5.3} (M-01.09)
│   └── 5.4 Minh họa Trực quan (Placeholders) {T-01.5.4} (M-01.10)
├── 6. Tóm tắt chương (Chapter Summary) {T-01.6}
│   ├── 6.1 Tóm tắt Nội dung Trọng tâm & Quy tắc Ghi nhớ {T-01.6.1} (M-01.11)
│   └── 6.2 Bảng Tổng hợp Công thức & Lưu ý {T-01.6.2} (M-01.12)
├── 7. Đánh giá & Bài tập tự lượng giá (Review & Assessment) {T-01.7}
│   ├── 7.1 Câu hỏi lý thuyết: Nhận biết & Thông hiểu (LO-1) {T-01.7.1} (phần của M-01.13)
│   ├── 7.2 Bài tập áp dụng: Tính toán Poiseuille & nhiệt động (LO-2, LO-3) {T-01.7.2} (phần của M-01.13)
│   ├── 7.3 Câu hỏi phân tích & vận dụng nâng cao (LO-3, LO-4) {T-01.7.3} (phần của M-01.13)
│   └── 7.4 Đáp án & Hướng dẫn giải chi tiết (Answer Key) {T-01.7.4} (M-01.14)
└── 8. Tài liệu tham khảo (References) {T-01.8}
    └── 8.1 Danh mục Tài liệu tham khảo & Đọc thêm {T-01.8.1} (M-01.15)
```

### C.2 Kế hoạch bổ sung nội dung mới và lý do sư phạm

1. **Khung sư phạm T1–T3:** Tên chuyên đề, giới thiệu, kiến thức tiên quyết, thời lượng, 4 chuẩn đầu ra `LO-1`..`LO-4`.
2. **Sơ đồ thuật toán Mermaid (`T-01.5.3`):** Quy trình xác định dòng chảy tầng vs xoáy dựa trên Re, và hệ mở vs kín vs cô lập.
3. **Placeholder hình (`T-01.5.4`):** Hệ mở/cân bằng dừng, dòng chảy tầng/xoáy, sức cản mạch theo r⁴.
4. **Bảng tổng hợp mới (`T-01.6.2`):** Tổng hợp công thức, đơn vị, quy ước dấu của toàn chương.
5. **Bộ 10 câu hỏi/bài tập + đáp án (`T-01.7`):** Nguồn hoàn toàn không có đánh giá.
6. Giữ nguyên 2 công thức và 1 ví dụ của nguồn; không cắt nội dung (Q2).

### C.3 Rủi ro & Biện pháp kiểm soát

- **Rủi ro 1 (Tên chương chưa chốt):** Xác nhận tại MANIFEST (Q1).
- **Rủi ro 2 (Nguồn rất ngắn, 579 từ):** Nếu mở rộng lên 4.000–4.500 thì tỷ lệ > 7×. Đây là mở rộng khung sư phạm và bài tập, không cắt nội dung nguồn.
- **Rủi ro 3 (0 bài tập, 0 hình):** Bổ sung `[ADDED]` bài tập và `[FIGURE]` placeholder (Q3, Q4).
- **Rủi ro 4 (0 tài liệu tham khảo):** Đặt `[VERIFY]` (Q5), không bịa nguồn.

### C.4 Chuẩn đầu ra Học tập (Draft LO)

- **LO-1:** Phát biểu được hệ mở/kín/cô lập, nguyên lý I & II nhiệt động học, entropy, định luật Poiseuille, số Reynolds.
- **LO-2:** Tính toán được lưu lượng Q, sức cản R qua định luật Poiseuille; số Re phân biệt dòng tầng/xoáy; ΔE = Q − A.
- **LO-3:** Vận dụng để giải thích huyết động, tiếng thổi tim, ảnh hưởng co/giãn mạch, mạch hẹp làm giảm lưu lượng.
- **LO-4:** Đánh giá vai trò của hệ mở và steady state trong sự ổn định sinh học; liên hệ nhiệt động học với sinh lý tim mạch.

### C.5 Glossary & Chuẩn hóa

| Thuật ngữ | Dạng trong nguồn | Dạng chuẩn hóa | Ghi chú |
|---|---|---|---|
| Hệ mở | `Hệ mở (Open system)` | **Hệ mở (open system)** | Giữ nguyên. |
| Cân bằng dừng | `cân bằng dừng (steady state)` | **Cân bằng dừng (steady state)** | Giữ nguyên. |
| Nguyên lý I | `Nguyên lý I nhiệt động học` | **Nguyên lý I nhiệt động học (bảo toàn năng lượng)** | Giữ nguyên. |
| Entropy | `Entropy` | **Entropy (entropy)** | Giữ nguyên. |
| Định luật Poiseuille | `Định luật Poiseuille` | **Định luật Poiseuille** | Giữ nguyên. |
| Sức cản | `Sức cản mạch máu ($R$)` | **Sức cản mạch máu (blood flow resistance – $R$)** | Giữ nguyên. |
| Số Reynolds | `Số Reynolds ($Re$)` | **Số Reynolds (Reynolds number – $Re$)** | Giữ nguyên. |
| Dòng tầng / xoáy | `dòng chảy tầng`, `dòng chảy xoáy` | **Dòng chảy tầng (laminar flow)** / **Dòng chảy xoáy (turbulent flow)** | Giữ nguyên. |

---

## D. Verification Items Carried Forward

| V-ID | Nội dung cần kiểm chứng | Loại | Mục T-ID tiếp nhận | Kế hoạch xử lý trong S3 |
|---|---|---|---|---|
| `V-01.01` | Tên chuyên đề chính xác | reference | `T-01.1` | Xác nhận MANIFEST (Q1). |
| `V-01.02` | Giá trị Re < 2000 / > 2000, r⁴ trong Poiseuille | number/theory | `T-01.4.2`, `T-01.5.1` | Giữ đúng nguồn; gắn `[VERIFY]`. |
| `V-01.03` | 0 hình vẽ/sơ đồ trong nguồn | structure | `T-01.5.4` | Đặt `[FIGURE]` placeholder (Q4). |
| `V-01.04` | 0 tài liệu tham khảo | reference | `T-01.8.1` | Đặt `[VERIFY: reference needed …]` (Q5). |

---

## E. Open Questions for Gate A

1. **Q1 (Tên chuyên đề):** Xác nhận tên Ch01 tại `MANIFEST.md` (hiện dùng "Chuyên đề 1: Nhiệt động học sinh học & Động học chất lưu trong hệ tuần hoàn").
2. **Q2 (Nguồn ngắn, mở rộng):** Nguồn chỉ 579 từ, 3 mục; S3 mở rộng lên ~4.000–4.500 từ bằng khung sư phạm và bài tập. Đồng ý?
3. **Q3 (Bài tập):** Đồng ý S3 bổ sung bộ 10 câu hỏi/bài tập `[ADDED]`?
4. **Q4 (Hình):** Đồng ý S3 đặt placeholder `[FIGURE]` cho hệ mở, dòng tầng/xoáy, sức cản r⁴?
5. **Q5 (Tài liệu tham khảo):** Đồng ý để `[VERIFY: reference needed …]`, `APPROVED_REFERENCE_LIST: none`?

---

## F. Not verified / limitations

- Chỉ dựa trên D-01; 0 trích dẫn; 0 hình vẽ; 0 bài tập trong nguồn.
- Tất cả công thức, giá trị số giữ nguyên nguồn; gắn `[VERIFY]` khi cần chuyên gia xác nhận.
- Dừng tại GATE A theo R9.

---
GATE A: STOP. Awaiting user approval of the Content Mapping Matrix. Do not begin the transformation.
