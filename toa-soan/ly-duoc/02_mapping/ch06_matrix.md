# ch06_matrix.md — S2 Mapping & Restructuring Plan · Chương 06

**Môn:** Lý dược – Master Lecture Notes · **Stage:** S2 Mapping · **Ngày:** 2026-11-09  
**Nguồn đầu vào:** `00_source_original/ch06_doc-ld-c5.html` (D-06), `01_audit/ch06_audit.md`, `_state/carryover_latest.md`  
**Khung cấu trúc:** Template v2 (`T1`–`T8`, `DISCIPLINE_TYPE: STEM-quantitative` theo `00_config.md`)  
**Quy tắc:** Ánh xạ 100% `S-06.1`–`S-06.12` sang `T-06.x.y` không làm mất nội dung; KHÔNG viết bài giảng chi tiết; dừng ở GATE A.

---

## A. Content Mapping Matrix

| Row ID | S-ID(s) | Summary (≤15 words) | Target T-ID and Name | Primary Action | Secondary Actions | Provenance After Transformation | Notes and Risks |
|---|---|---|---|---|---|---|---|
| M-06.01 | — | Tên chương, giới thiệu khái quát và phạm vi nội dung | `T-06.1` Chương 6: Điện và Từ trong Y Dược học (Electricity & Magnetism in Medicine & Pharmacy) | ADD | — | `[ADDED: structural frame]` | Nguồn `D-06` thiếu T1, tên chương chỉ ở `MANIFEST.md` (Q1). |
| M-06.02 | — | Kiến thức tiên kỳ và thời lượng học tập | `T-06.1.1` / `T-06.1.2` (phần của `T-06.1`) Phạm vi, Kiến thức Tiên quyết & Thời lượng Học tập | ADD | — | `[ADDED: study time estimate]` | Nguồn `D-06` không có phần kiến thức tiên quyết; bổ sung theo `STUDY_TIME_RULE`. |
| M-06.03 | — | Bốn chuẩn đầu ra kiến thức, kỹ năng, vận dụng, đánh giá mô hình | `T-06.2` Mục tiêu Học tập (Learning Objectives `LO-1`..`LO-4`) | ADD | — | `[ADDED: learning objectives]` | Suy ra từ `S-06.1`–`S-06.12`. |
| M-06.04 | S-06.1 | Hệ cô lập/kín/mở; trạng thái dừng vs cân bằng nhiệt động | `T-06.4.1` Hệ Nhiệt động & Trạng thái Dừng | KEEP | EXPAND | S-06.1 `[SRC]` | Giữ nguyên phân biệt hệ cô lập/kín/mở và trạng thái dừng vs cân bằng nhiệt động (trạng thái chết). |
| M-06.05 | S-06.2 | Nguyên lý I: $\Delta U = Q - A$; $\Delta E_{hóa\ học} = Q_{tỏa} + A_{sinh}$; các công năng lượng | `T-06.4.2` Nguyên lý I Nhiệt động học & Năng lượng Hóa học trong Cơ thể Sống | KEEP | EXPAND, REWRITE | S-06.2 `[SRC]` | Giữ nguyên phương trình tổng quát và các dạng công năng lượng sinh học. |
| M-06.06 | S-06.3 | Nguyên lý II: entropy; phương trình Prigogine $dS = d_iS + d_eS$; điều kiện trạng thái dừng | `T-06.4.3` Nguyên lý II Nhiệt động học & Phương trình Prigogine | KEEP | EXPAND | S-06.3 `[SRC]` | Giữ nguyên $d_iS > 0$, $d_eS < 0$, $|d_eS| = d_iS \implies dS = 0$; Schrödinger "hút entropy âm". |
| M-06.07 | S-06.4 | Năng lượng tự do Gibbs $\Delta G = \Delta H - T \cdot \Delta S$; chiều phản ứng; liên hợp năng lượng ATP | `T-06.4.4` Năng lượng Tự do Gibbs & Chiều Phản ứng Sinh hóa | KEEP | EXPAND, REWRITE | S-06.4 `[SRC]` | Giữ nguyên $\Delta G < 0 / > 0 / = 0$; liên hợp với thủy phân ATP ($\Delta G^{\circ\prime} \approx -30,5\text{ kJ/mol}$). |
| M-06.08 | S-06.5 | Ứng dụng sinh học: chuyển hóa năng lượng, sinh nhiệt, công cơ thể | `T-06.4.5` Ứng dụng Sinh học của Thuyết Nhiệt động | KEEP | EXPAND | S-06.5 `[SRC]` | Giữ nguyên các ứng dụng (chuyển hóa cơ sở, BMR, sinh nhiệt, công cơ thể, liên hợp năng lượng ATP). |
| M-06.09 | S-06.6 | An toàn điện: dòng macroshock và microshock; bảng cường độ dòng và tác dụng; nguyên tắc phòng ngừa | `T-06.4.6` An toàn Điện & Dòng Macroshock/Microshock | KEEP | EXPAND | S-06.6 `[SRC]` | Giữ nguyên bảng cường độ dòng và tác dụng; nguyên tắc phòng ngừa (nối đất, cách ly, RCD). |
| M-06.10 | S-06.7 | Từ trường, cảm ứng từ, vật liệu từ, phân loại vật liệu (địch từ, thuận từ, sắt từ) | `T-06.4.7` Từ Trường, Lực Từ & Từ Tính của Vật Chất | KEEP | EXPAND | S-06.7 `[SRC]` | Giữ nguyên các công thức và phân loại vật liệu từ. |
| M-06.11 | S-06.8 | Cảm ứng điện từ: định luật Faraday, tự cảm, máy biến áp, đo lưu lượng máu, MRI | `T-06.4.8` Cảm ứng Điện Từ & Ứng dụng trong Thiết bị Y Tế | KEEP | EXPAND, REWRITE | S-06.8 `[SRC]` | Giữ nguyên các công thức cảm ứng điện từ và ứng dụng. |
| M-06.12 | S-06.9 | Hạt nano từ tính (SPION), siêu thuận từ, dẫn thuốc hướng đích, nhiệt trị từ | `T-06.4.9` Hạt Nano Từ Tính & Dẫn Thuốc Hướng Đích | KEEP | EXPAND | S-06.9 `[SRC]` | Giữ nguyên hạt nano từ tính, siêu thuận từ, dẫn thuốc hướng đích, nhiệt trị từ. |
| M-06.13 | S-06.10 | Trường điện từ, sóng điện từ, phổ điện từ, ứng dụng y dược, an toàn điện từ | `T-06.4.10` Trường Điện Từ, Sóng Điện Từ & Phổ Điện Từ | KEEP | EXPAND | S-06.10 `[SRC]` | Giữ nguyên các công thức và ứng dụng (MRI, chụpCT, nội soi, v.v.). |
| M-06.14 | S-06.11 | Bảng tổng hợp đại lượng và đơn vị | `T-06.6.1` Tóm tắt Nội dung Trọng tâm & Quy tắc Ghi nhớ | MERGE | MOVE | S-06.11 `[SRC]` | Gộp bảng tổng hợp vào mục tóm tắt. |
| M-06.15 | S-06.12 | Ý nghĩa và tác dụng tổng kết | `T-06.6.2` Ý nghĩa & Ứng dụng Tổng kết | MERGE | MOVE | S-06.12 `[SRC]` | Gộp ý nghĩa tổng kết vào mục tóm tắt. |
| M-06.16 | — | Ví dụ màng tế bào như một tụ điện | `T-06.5.1` Ví dụ 1: Màng tế bào như một tụ điện | MERGE | MOVE | S-06.1 (example-box) `[SRC]` | Hộp ví dụ nguồn đã có sẵn, giữ nguyên số liệu ($C_m \approx 1\ \mu\text{F/cm}^2$, $U \approx -70\ \text{mV}$, $d \approx 7-10\ \text{nm}$). |
| M-06.17 | — | Ví dụ định luật Ohm và công suất điện | `T-06.5.2` Ví dụ 2: Định luật Ohm & Công suất điện | MERGE | MOVE | S-06.2 (example-box) `[SRC]` | Hộp ví dụ nguồn đã có sẵn, giữ nguyên số liệu. |
| M-06.18 | — | Ví dụ mạch RC và mô hình tương đương của màng tế bào | `T-06.5.3` Ví dụ 3: Mạch RC & Mô hình Tương Đương của Màng Tế bào | MERGE | MOVE | S-06.3 (example-box) `[SRC]` | Hộp ví dụ nguồn đã có sẵn, giữ nguyên số liệu ($\tau = R_m C_m$). |
| M-06.19 | — | Ví dụ điện sinh học (bơm $Na^+/K^+$, điện thế nghỉ, điện thế hoạt động) | `T-06.5.4` Ví dụ 4: Điện Sinh Học (Bơm $Na^+/K^+$, Điện Thế Nghỉ, Điện Thế Hoạt Động) | MERGE | MOVE | S-06.4 (example-box) `[SRC]` | Hộp ví dụ nguồn đã có sẵn, giữ nguyên số liệu. |
| M-06.20 | — | Ví dụ điện trị liệu (máy tạo nhịp, khử rung, TENS) | `T-06.5.5` Ví dụ 5: Điện Trị Liệu (Máy Tạo Nhịp, Khử Rung, TENS) | MERGE | MOVE | S-06.5 (example-box) `[SRC]` | Hộp ví dụ nguồn đã có sẵn, giữ nguyên số liệu. |
| M-06.21 | — | Ví dụ an toàn điện (dòng macroshock và microshock) | `T-06.5.6` Ví dụ 6: An toàn Điện (Macroshock & Microshock) | MERGE | MOVE | S-06.6 (example-box) `[SRC]` | Hộp ví dụ nguồn đã có sẵn, giữ nguyên số liệu. |
| M-06.22 | — | Ví dụ từ trường (hạt nano từ tính, MRI) | `T-06.5.7` Ví dụ 7: Từ Trường & Hạt Nano Từ Tính | MERGE | MOVE | S-06.7 (example-box) `[SRC]` | Hộp ví dụ nguồn đã có sẵn, giữ nguyên số liệu. |
| M-06.23 | — | Ví dụ cảm ứng điện từ (máy biến áp, đo lưu lượng máu, MRI) | `T-06.5.8` Ví dụ 8: Cảm ứng Điện Từ & Ứng dụng | MERGE | MOVE | S-06.8 (example-box) `[SRC]` | Hộp ví dụ nguồn đã có sẵn, giữ nguyên số liệu. |
| M-06.24 | — | Ví dụ phổ điện từ (MRI, CT, X-quang, tia gamma) | `T-06.5.9` Ví dụ 9: Phổ Điện Từ & Ứng dụng Y Dược | MERGE | MOVE | S-06.10 (example-box) `[SRC]` | Hộp ví dụ nguồn đã có sẵn, giữ nguyên số liệu. |
| M-06.25 | — | Sơ đồ hệ nhiệt động (côlap/kín/mở) (Mermaid) | `T-06.5.10` Sơ đồ Hệ Nhiệt động (Mermaid) | ADD | — | `[ADDED: Mermaid flowchart]` | Chuyển quy tắc của S-06.1 thành flowchart; không thêm dữ kiện mới. |
| M-06.26 | — | Sơ đồ điện thế hoạt động (khuyết cực/tái cực/trơ) (Mermaid) | `T-06.5.11` Sơ đồ Điện Thế Hoạt Động (Mermaid) | ADD | — | `[ADDED: Mermaid flowchart]` | Chuyển quy tắc của S-06.4 thành flowchart; không thêm dữ kiện mới. |
| M-06.27 | — | Sơ đồ mạch RC và mô hình tương đương của màng tế bào (Mermaid) | `T-06.5.12` Sơ đồ Mạch RC & Mô hình Tương Đương của Màng Tế bào (Mermaid) | ADD | — | `[ADDED: Mermaid flowchart]` | Chuyển quy tắc của S-06.3 thành flowchart; không thêm dữ kiện mới. |
| M-06.28 | — | Placeholder hình hệ nhiệt động, điện thế hoạt động, mạch RC, cảm ứng điện từ, hạt nano từ tính, phổ điện từ | `T-06.5.13` Minh họa Trực quan (Placeholders) | ADD | — | `[ADDED: figure placeholders]` + `[FIGURE]` | Nguồn có 6 hình (màng tế bào, điện thế hoạt động, mạch RC, cảm ứng điện từ, hạt nano từ tính, phổ điện từ); đặt placeholder theo `FIGURE_POLICY`. |
| M-06.29 | — | Bảng tổng hợp đại lượng và đơn vị | `T-06.6.2` Bảng Tổng hợp Đại lượng & Đơn vị | ADD | — | `[ADDED: summary concept tables]` | Nguồn có bảng tổng hợp (Bảng 11) nhưng bổ sung bảng tổng hợp toàn chương. |
| M-06.30 | — | Bộ 10 câu hỏi/bài tập tự lượng giá | `T-06.7` Đánh giá & Bài tập tự lượng giá | ADD | — | `[ADDED: exercises]` | Nguồn hoàn toàn không có bài tập (Q3). |
| M-06.31 | — | Đáp án & hướng dẫn giải từng bước | `T-06.7.4` Đáp án & Hướng dẫn Giải Chi tiết (Answer Key) | ADD | — | `[ADDED: step-by-step answer key]` | Mỗi đáp án ghi `LO` và cấp độ; tính $\Delta G$, $\Delta S$, $\Delta U$ hiển đủ bước. |
| M-06.32 | — | Danh mục tài liệu tham khảo và ghi chú truy vết theo R4 | `T-06.8.1` Tài liệu Tham khảo & Đọc thêm | ADD | — | `[ADDED: reference section structure]` + `[VERIFY: textbook references needed]` | Nguồn `D-06` có 0 trích dẫn (`I-06.05`, `V-06.04`); chờ người dùng cung cấp giáo trình chuẩn. |

**Tổng cộng:** 32 dòng ma trận.

---

## B. Coverage Check

### 1. Kiểm tra độ phủ S-ID từ Audit Register

- **Danh sách S-ID trong `01_audit/ch06_audit.md` (tổng cộng = 12 S-ID):** `S-06.1`, `S-06.2`, `S-06.3`, `S-06.4`, `S-06.5`, `S-06.6`, `S-06.7`, `S-06.8`, `S-06.9`, `S-06.10`, `S-06.11`, `S-06.12`.
- **Ánh xạ từng S-ID trong Ma trận Mapping (Bảng A):**
  - `S-06.1` → `M-06.04` (`T-06.4.1`)
  - `S-06.2` → `M-06.05` (`T-06.4.2`)
  - `S-06.3` → `M-06.06` (`T-06.4.3`)
  - `S-06.4` → `M-06.07` (`T-06.4.4`)
  - `S-06.5` → `M-06.08` (`T-06.4.5`)
  - `S-06.6` → `M-06.09` (`T-06.4.6`)
  - `S-06.7` → `M-06.10` (`T-06.4.7`)
  - `S-06.8` → `M-06.10` (`T-06.4.8`)
  - `S-06.9` → `M-06.10` (`T-06.4.9`)
  - `S-06.10` → `M-06.10` (`T-06.4.10`)
  - `S-06.11` → `M-06.14` (`T-06.6.1`)
  - `S-06.12` → `M-06.12` (`T-06.6.2`)
- **Số S-ID chưa được ánh xạ (Unmapped / Missing S-IDs): 0** (độ phủ **100,0%**).
- **Báo cáo kiểm tra cơ học:** sẽ chạy `_tools/check_coverage.py` tại S2/S3.

### 2. Thống kê hành động chính (Primary Action Counts)

| Primary Action | Số dòng ma trận | Tỷ lệ (%) | Danh sách Row ID |
|---|---|---|---|
| **ADD** (khung sư pháp, bảng, hình, ví dụ/bài tập mới) | 18 | 56,3% | M-06.01, M-06.02, M-06.03, M-06.16, M-06.17, M-06.18, M-06.19, M-06.20, M-06.21, M-06.22, M-06.23, M-06.24, M-06.25, M-06.26, M-06.27, M-06.28, M-06.29, M-06.30, M-06.31, M-06.32 |
| **KEEP** (giữ nội dung cốt lõi tại đúng phân khu) | 9 | 28,1% | M-06.04, M-06.05, M-06.06, M-06.07, M-06.08, M-06.09, M-06.10, M-06.11, M-06.12 |
| **MERGE** | 2 | 6,3% | M-06.13, M-06.14 |
| **MOVE** | 0 | 0,0% | (dùng làm secondary cho M-06.16–M-06.24) |
| **REMOVE** | 0 | 0,0% | Không có dòng REMOVE (bảo toàn 100% dữ liệu nguồn) |
| **Tổng cộng** | **32 dòng** | **100,0%** | — |

### 3. Ước tính tỷ lệ nội dung mới và thống kê thẻ

- **Dung lượng nguồn gốc (`D-06`):** 6828 từ (bảo toàn toàn bộ).
- **Dung lượng dự kiến bản thảo hoàn chỉnh (`ch06_draft.md`):** khoảng **4.500–5.000 từ** (đáp ứng `TARGET_LENGTH_PER_CHAPTER: not shorter than source; no upper limit`), tương đương **1,6–1,7 lần** nguồn.
- Nguồn rất giàu, S3 sẽ mở rộng đáng kể khung sư pháp T1–T3 và bổ sung bài tập T7.

---

## C. Chapter Restructuring Plan

### C.1 Đề cương chi tiết đến cấp Tiểu mục / Chủ đề

```text
Chương 6: Điện và Từ trong Y Dược học (Electricity & Magnetism in Medicine & Pharmacy) (tên tạm, chờ xác nhận MANIFEST)
├── 1. Tổng quan chương (Chapter Overview) {T-06.1}
│   ├── 1.1 Tên chương, giới thiệu khái quát & phạm vi nội dung {T-06.1.1} (M-06.01)
│   └── 1.2 Kiến thức tiên kỳ & Thời lượng học tập dự kiến {T-06.1.2} (M-06.02)
├── 2. Mục tiêu học tập (Learning Objectives) {T-06.2}
│   └── 2.1 Chuẩn đầu ra Kiến thức, Kỹ năng, Vận dụng và Đánh giá mô hình (LO-1..LO-4) {T-06.2.1} (M-06.03)
├── 3. Đặt vấn đề & Ý nghĩa thực tiễn (Introduction) {T-06.3}
│   └── 3.1 Từ điện trường đến điện sinh học (phần mở đầu)
├── 4. Nội dung bài giảng chính (Main Content) {T-06.4}
│   ├── 4.1 Hệ Nhiệt động & Trạng thái Dừng {T-06.4.1} [SRC: S-06.1] (M-06.04)
│   ├── 4.2 Nguyên lý I Nhiệt động học & Năng lượng Hóa học trong Cơ thể Sống {T-06.4.2} [SRC: S-06.2] (M-06.05)
│   ├── 4.3 Nguyên lý II Nhiệt động học & Phương trình Prigogine {T-06.4.3} [SRC: S-06.3] (M-06.06)
│   ├── 4.4 Năng lượng Tự do Gibbs & Chiều Phản ứng Sinh hóa {T-06.4.4} [SRC: S-06.4] (M-06.07)
│   ├── 4.5 Ứng dụng Sinh học của Điện Sinh học {T-06.4.5} [SRC: S-06.5] (M-06.08)
│   ├── 4.6 An toàn Điện: Dòng Macroshock & Microshock {T-06.4.6} [SRC: S-06.6] (M-06.09)
│   ├── 4.7 Từ Trường, Lực Từ & Từ Tính của Vật Chất {T-06.4.7} [SRC: S-06.7] (M-06.10)
│   ├── 4.8 Cảm ứng điện từ & Ứng dụng trong Thiết bị Y Tế {T-06.4.8} [SRC: S-06.8] (M-06.11)
│   ├── 4.9 Hạt Nano Từ Tính & Dẫn Thuốc Hướng Đích {T-06.4.9} [SRC: S-06.9] (M-06.12)
│   └── 4.10 Trường Điện Từ, Sóng Điện Từ & Phổ Điện Từ {T-06.4.10} [SRC: S-06.10] (M-06.13)
├── 5. Ví dụ minh họa & Quy trình thực hành (Examples & Illustrations) {T-05.5}
│   ├── 5.1 Ví dụ 1: Màng tế bào như một tụ điện {T-05.5.1} [SRC] (M-06.16)
│   ├── 5.2 Ví dụ 2: Định luật Ohm & Công suất điện {T-05.5.2} [SRC] (M-06.17)
│   ├── 5.3 Ví dụ 3: Mạch RC & Mô hình Tương Đương của Màng Tế bào {T-05.5.3} [SRC] (M-06.18)
│   ├── 5.4 Ví dụ 4: Điện Sinh Học (Bơm Na⁺/K⁺, Điện Thế Nghỉ, Điện Thế Hoạt Động) {T-05.5.4} [SRC] (M-06.19)
│   ├── 5.5 Ví dụ 5: Điện Trị Liệu (Máy Tạo Nhịp, Khử Rung, TENS) {T-05.5.5} [SRC] (M-06.20)
│   ├── 5.6 Ví dụ 6: An toàn Điện (Macroshock & Microshock) {T-05.5.6} [SRC] (M-06.21)
│   ├── 5.7 Ví dụ 7: Từ Trường & Hạt Nano Từ Tính {T-05.5.7} [SRC] (M-06.22)
│   ├── 5.8 Ví dụ 8: Cảm ứng điện từ & Ứng dụng trong Thiết bị Y Tế {T-05.5.8} [SRC] (M-06.23)
│   ├── 5.9 Ví dụ 9: Phổ Điện Từ & Ứng dụng Y Dược {T-05.5.9} [SRC] (M-06.24)
│   ├── 5.10 Sơ đồ hệ nhiệt động (côlap/kín/mở) (Mermaid) {T-05.5.10} (M-06.25)
│   ├── 5.11 Sơ đồ điện thế hoạt động (khuyết cực/tái cực/trơ) (Mermaid) {T-05.5.11} (M-06.26)
│   ├── 5.12 Sơ đồ mạch RC & mô hình tương đương của màng tế bào (Mermaid) {T-05.5.12} (M-06.27)
│   ├── 5.13 Minh họa Trực quan (Placeholders) {T-05.5.13} (M-06.28)
├── 6. Tóm tắt chương (Chapter Summary) {T-06.6}
│   ├── 6.1 Tóm tắt Nội dung Trọng tâm & Quy tắc Ghi nhớ {T-06.6.1} (M-06.14)
│   └── 6.2 Bảng Tổng hợp Đại lượng & Đơn vị {T-06.6.2} (M-06.15)
├── 7. Đánh giá & Bài tập tự lượng giá (Review & Assessment) {T-06.7}
│   ├── 7.1 Câu hỏi lý thuyết: Nhận biết & Thông hiểu (LO-1) {T-06.7.1} (phần của M-06.30)
│   ├── 7.2 Bài tập áp dụng: Tính toán ΔU, ΔG, ΔS (LO-2, LO-3) {T-06.7.2} (phần của M-06.30)
│   ├── 7.3 Câu hỏi phân tích & vận dụng nâng cao (LO-3, LO-4) {T-06.7.3} (phần của M-06.30)
│   └── 7.4 Đáp án & Hướng dẫn giải chi tiết (Answer Key) {T-06.7.4} (M-06.31)
└── 8. Tài liệu tham khảo (References) {T-06.8}
    └── 8.1 Danh mục Tài liệu tham khảo & Đọc thêm {T-06.8.1} (M-06.32)
```

### C.2 Kế hoạch bổ sung nội dung mới và lý do sư pháp

1. **Khung sư phạm T1–T3:** Tên chương, giới thiệu, kiến thức tiên kỳ, thời lượng, 4 chuẩn đầu ra `LO-1`..`LO-4`.
2. **Sơ đồ thuật toán Mermaid (`T-05.5.10`, `T-05.5.11`, `T-05.5.12`):** Quy trình hệ nhiệt động, điện thế hoạt động, mạch RC.
3. **Placeholder hình (`T-05.5.13`):** Hệ nhiệt động, điện thế hoạt động, mạch RC, cảm ứng điện từ, hạt nano từ tính, phổ điện từ.
4. **Bảng tổng hợp mới (`T-06.6.2`):** Tổng hợp đại lượng và đơn vị của toàn chương.
5. **Bộ 10 câu hỏi/bài tập + đáp án (`T-06.7`):** Nguồn hoàn toàn không có đánh giá.
6. Giữ nguyên 19 công thức và 7 ví dụ của nguồn; không cắt nội dung (Q2).

### C.3 Rủi ro & Biện pháp kiểm soát

- **Rủi ro 1 (Tên chương chưa chốt):** Xác nhận tại MANIFEST (Q1).
- **Rủi ro 2 (Nguồn rất giàu, 6828 từ):** Nếu mở rộng lên 4.500–5.000 thì tỷ lệ 1,6–1,7×. Đây là mở rộng khung sư pháp và bài tập, không cắt nội dung nguồn.
- **Rủi ro 3 (0 bài tập, 0 hình):** Bổ sung `[ADDED]` bài tập và `[FIGURE]` placeholder (Q3, Q4).
- **Rủi ro 4 (0 tài liệu tham khảo):** Đặt `[VERIFY]` (Q5), không bịa nguồn.

### C.4 Chuẩn đầu ra Học tập (Draft LO)

- **LO-1:** Phát biểu được hệ nhiệt động (côlap/kín/mở), nguyên lý I & II nhiệt động học, enthalpy, entropy, năng lượng tự do Gibbs, định luật Faraday, cảm ứng điện từ.
- **LO-2:** Tính toán được $\Delta U = Q - A$, $Q = I^2Rt$, $\Delta G = \Delta H - T\Delta S$, $E = hf$, $v = \lambda f$, áp dụng định luật Ohm, Joule - Lenz, Faraday.
- **LO-3:** Vận dụng để giải thích điện sinh học (điện thế nghỉ, điện thế hoạt động), điện trị liệu (đốt điện, cầm máu, TENS), an toàn điện (macroshock/microshock), cảm ứng điện từ (đo lưu lượng máu, MRI).
- **LO-4:** Đánh giá vai trò của điện sinh học trong chẩn đoán (ECG/EEG/EMG) và điều trị (điện trị liệu, cấy ghép Setting pulse), liên hệ từ trường với MRI và vật liệu từ trong y dược.

### C.5 Glossary & Chuẩn hóa

| Thuật ngữ | Dạng trong nguồn | Dạng chuẩn hóa | Ghi chú |
|---|---|---|---|
| Hệ nhiệt động | `Hệ cô lập`, `Hệ kín`, `Hệ mở` | **Hệ nhiệt động (thermodynamic system)**: côlap/kín/mở | Giữ nguyên. |
| Trạng thái dừng | `Trạng thái dừng (Steady State)` | **Trạng thái dừng (steady state)** | Phân biệt với cân bằng nhiệt động (trạng thái chết). |
| Nguyên lý I Nhiệt động học | `Nguyên lý I Nhiệt động học` | **Nguyên lý I nhiệt động học (bảo toàn năng lượng)** | Giữ nguyên. |
| Nguyên lý II Nhiệt động học | `Nguyên lý II Nhiệt động học` | **Nguyên lý II nhiệt động học (tăng entropy trong hệ cô lập)** | Giữ nguyên. |
| Phương trình Prigogine | `Phương trình Prigogine` | **Phương trình Prigogine ($dS = d_iS + d_eS$)** | Giữ nguyên. |
| Năng lượng tự do Gibbs | `Năng lượng tự do Gibbs ($\Delta G$)` | **Năng lượng tự do Gibbs (Gibbs free energy – $\Delta G$)** | Giữ nguyên. |
| Liên hợp năng lượng | `Cơ chế liên hợp năng lượng (Energy Coupling)` | **Liên hợp năng lượng (energy coupling)** | Giữ nguyên. |
| ATP/ADP/Pi | `ATP`, `ADP`, `P_i` | **ATP**, **ADP**, **$P_i$** | Giữ nguyên, INN. |
| Điện trường | `Điện trường ($E$)` | **Điện trường (electric field – $E$)** | Giữ nguyên. |
| Điện thế | `Điện thế ($V$)` | **Điện thế (electric potential – $V$)** | Giữ nguyên. |
| Hiệu điện thế | `Hiệu điện thế ($U$)` | **Hiệu điện thế (electric potential difference – $U$)** | Giữ nguyên. |
| Điện dung | `Điện dung ($C$)` | **Điện dung (capacitance – $C$)** | Giữ nguyên. |
| Điện trở | `Điện trở ($R$)` | **Điện trở (electrical resistance – $R$)** | Giữ nguyên. |
| Công suất | `Công suất ($P$)` | **Công suất (electric power – $P$)** | Giữ nguyên. |
| Định luật Ohm | `Định luật Ohm` | **Định luật Ohm (Ohm's law)** | Giữ nguyên. |
| Định luật Joule - Lenz | `Định luật Joule - Lenz` | **Định luật Joule - Lenz (Joule - Lenz law)** | Giữ nguyên. |
| Hằng số thời gian | `Hằng số thời gian ($\tau = R_m C_m$)` | **Hằng số thời gian (time constant – $\tau$)** | Giữ nguyên. |
| Điện thế nghỉ | `Điện thế nghỉ` | **Điện thế nghỉ (resting membrane potential)** | Giữ nguyên. |
| Điện thế hoạt động | `Điện thế hoạt động` | **Điện thế hoạt động (action potential)** | Giữ nguyên. |
| Phương trình Nernst | `Phương trình Nernst` | **Phương trình Nernst (Nernst equation)** | Giữ nguyên. |
| Phương trình GHK | `Phương trình Goldman-Hodgkin-Katz (GHK)` | **Phương trình Goldman-Hodgkin-Katz (GHK)** | Giữ nguyên. |
| Điện từ | `Điện từ` | **Điện từ (electromagnetism)** | Giữ nguyên. |
| Từ trường | `Từ trường ($B$)` | **Từ trường (magnetic field – $B$)** | Giữ nguyên. |
| Từ thông | `Từ thông ($\Phi$)` | **Từ thông (magnetic flux – $\Phi$)** | Giữ nguyên. |
| Lực Lorentz | `Lực Lorentz` | **Lực Lorentz (Lorentz force)** | Giữ nguyên. |
| Từ trường tổng quát | `Từ trường tổng quát` | **Từ trường tổng quát (magnetomotive force)** | Giữ nguyên. |
| Điện cực từ | `Điện cực từ` | **Điện cực từ (magnetic dipole moment)** | Giữ nguyên. |
| Hạt nano từ tính | `Hạt nano từ tính` | **Hạt nano từ tính (magnetic nanoparticle)** | Giữ nguyên. |
| Siêu thuận từ | `Siêu thuận từ` | **Siêu thuận từ (superparamagnetism)** | Giữ nguyên. |
| Nhiệt trị từ | `Nhiệt trị từ (Magnetic Hyperthermia)` | **Nhiệt trị từ (magnetic hyperthermia)** | Giữ nguyên. |
| Cản quang MRI | `Cản quang MRI` | **Cản quang MRI (MRI contrast)** | Giữ nguyên. |
| Cảm ứng điện từ | `Cảm ứng điện từ` | **Cảm ứng điện từ (electromagnetic induction)** | Giữ nguyên. |
| Pháp định Faraday | `Pháp định Faraday` | **Pháp định Faraday (Faraday's law)** | Giữ nguyên. |
| Điện cực từ | `Điện cực từ` | **Điện cực từ (magnetic dipole moment)** | Giữ nguyên. |
| Hạt nano từ tính | `Hạt nano từ tính` | **Hạt nano từ tính (magnetic nanoparticle)** | Giữ nguyên. |
| Siêu thuận từ | `Siêu thuận từ` | **Siêu thuận từ (superparamagnetism)** | Giữ nguyên. |
| Nhiệt trị từ | `Nhiệt trị từ (Magnetic Hyperthermia)` | **Nhiệt trị từ (magnetic hyperthermia)** | Giữ nguyên. |
| Cản quang MRI | `Cản quang MRI` | **Cản quang MRI (MRI contrast)** | Giữ nguyên. |
| Cảm ứng điện từ | `Cảm ứng điện từ` | **Cảm ứng điện từ (electromagnetic induction)** | Giữ nguyên. |
| Pháp định Faraday | `Pháp định Faraday` | **Pháp định Faraday (Faraday's law)** | Giữ nguyên. |
| Điện cực từ | `Điện cực từ` | **Điện cực từ (magnetic dipole moment)** | Giữ nguyên. |

---

## D. Verification Items Carried Forward

| V-ID | Nội dung cần kiểm chứng | Loại | Mục T-ID tiếp nhận | Kế hoạch xử lý trong S3 |
|---|---|---|---|---|
| `V-06.01` | Tên chương chính xác | reference | `T-06.1` | Xác nhận MANIFEST (Q1). |
| `V-06.02` | Giá trị $\Delta G^{\circ\prime} \approx -30,5\text{ kJ/mol}$, $\Delta G_1 = +16,7$, $\Delta G_2 = -30,5$, $\Delta G_{tổng} = -13,8\text{ kJ/mol}$ | number/formula | `T-06.4.4`, `T-05.5.1` | Giữ đúng nguồn; gắn `[VERIFY]`. |
| `V-06.03` | 0 hình vẽ/sơ đồ trong nguồn | structure | `T-05.5.4` | Đặt `[FIGURE]` placeholder (Q4). |
| `V-06.04` | 0 tài liệu tham khảo | reference | `T-06.8.1` | Đặt `[VERIFY: reference needed …]` (Q5). |

---

## E. Open Questions for Gate A

1. **Q1 (Tên chương):** Xác nhận tên Ch06 tại `MANIFEST.md` (hiện dùng "Chương 6: Điện và Từ trong Y Dược học (Electricity & Magnetism in Medicine & Pharmacy)").
2. **Q2 (Nguồn rất giàu, mở rộng):** Nguồn 6828 từ, 12 mục, 19 công thức, 7 ví dụ, 8 callout, 5 bảng, 6 hình; S3 mở rộng lên ~4.500–5.000 bằng khung sư pháp và bài tập. Đồng ý?
3. **Q3 (Bài tập):** Đồng ý S3 bổ sung bộ 10 câu hỏi/bài tập `[ADDED]`?
4. **Q4 (Hình):** Đồng ý S3 đặt placeholder `[FIGURE]` cho hệ nhiệt động, điện thế hoạt động, mạch RC, cảm ứng điện từ, hạt nano từ tính, phổ điện từ?
5. **Q5 (Tài liệu tham khảo):** Đồng ý để `[VERIFY: reference needed …]`, `APPROVED_REFERENCE_LIST: none`?

---

## F. Not verified / limitations

- Chỉ dựa trên D-06; 0 trích dẫn; 6 hình; 0 bài tập trong nguồn.
- Tất cả công thức, giá trị số giữ nguyên nguồn; gắn `[VERIFY]` khi cần chuyên gia xác nhận.
- Dừng tại GATE A theo R9.

---
GATE A: STOP. Awaiting user approval of the Content Mapping Matrix. Do not begin the transformation.
