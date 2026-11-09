# ch07_matrix.md — S2 Mapping & Restructuring Plan · Chương 07

**Môn:** Y dược – Master Lecture Notes · **Stage:** S2 Mapping · **Ngày:** 2026-11-09  
**Nguồn đầu vào:** `00_source_original/ch07_doc-myd-7.html` (D-07), `01_audit/ch07_audit.md`, `_state/carryover_latest.md`  
**Khung cấu trúc:** Template v2 (`T1`–`T8`, `DISCIPLINE_TYPE: STEM-quantitative` theo `00_config.md`)  
**Quy tắc:** Ánh xạ 100% `S-07.1`–`S-07.8` sang `T-07.x.y` không làm mất nội dung; KHÔNG viết bài giảng chi tiết; dừng ở GATE A.

---

## A. Content Mapping Matrix

| Row ID | S-ID(s) | Summary (≤15 words) | Target T-ID and Name | Primary Action | Secondary Actions | Provenance After Transformation | Notes and Risks |
|---|---|---|---|---|---|---|---|
| M-07.01 | — | Tên chuyên đề, giới thiệu khái quát và phạm vi nội dung | `T-07.1` Chuyên đề 7: Trao đổi chất qua màng tế bào | ADD | — | `[ADDED: structural frame]` | Nguồn `D-07` thiếu T1, tên chương chỉ ở `MANIFEST.md` (Q1). |
| M-07.02 | — | Kiến thức tiên kỳ và thời lượng học tập | `T-07.1.1` / `T-07.1.2` (phần của `T-07.1`) Phạm vi, Kiến thức Tiên quyết & Thời lượng Học tập | ADD | — | `[ADDED: study time estimate]` | Nguồn `D-07` không có phần kiến thức tiên quyết; bổ sung theo `STUDY_TIME_RULE`. |
| M-07.03 | — | Bốn chuẩn đầu ra kiến thức, kỹ năng, vận dụng, đánh giá mô hình | `T-07.2` Mục tiêu Học tập (Learning Objectives `LO-1`..`LO-4`) | ADD | — | `[ADDED: learning objectives]` | Suy ra từ `S-07.1`–`S-07.8`. |
| M-07.04 | S-07.1 | Hệ mở/kín/mở; trạng thái dừng vs cân bằng nhiệt động | `T-07.4.1` Hệ Nhiệt động & Trạng thái Dừng | KEEP | EXPAND | S-07.1 `[SRC]` | Giữ nguyên phân biệt hệ côlap/kín/mở và trạng thái dừng vs cân bằng nhiệt động (trạng thái chết). |
| M-07.05 | S-06.2 | Nguyên lý I: $\Delta U = Q - A$; $\Delta E_{hóa\ học} = Q_{tỏa} + A_{sinh}$; nhiệt sơ cấp/thứ cấp; công hóa học/cơ học/thẩm thấu/điện | `T-07.4.2` Nguyên lý I Nhiệt động học & Năng lượng Hóa học trong Cơ thể Sống | KEEP | EXPAND, REWRITE | S-06.2 `[SRC]` | Giữ nguyên phương trình tổng quát và các dạng công năng lượng sinh học. |
| M-07.06 | S-06.3 | Nguyên lý II: entropy; phương trình Prigogine $dS = d_iS + d_eS$; điều kiện trạng thái dừng | `T-07.4.3` Nguyên lý II Nhiệt động học & Phương trình Prigogine | KEEP | EXPAND | S-06.3 `[SRC]` | Giữ nguyên $d_iS > 0$, $d_eS < 0$, $|d_eS| = d_iS \implies dS = 0$; Schrödinger "hút entropy âm". |
| M-07.07 | S-06.4 | Năng lượng tự do Gibbs $\Delta G = \Delta H - T \cdot \Delta S$; chiều phản ứng; liên hợp năng lượng ATP | `T-06.4.4` Năng lượng Tự do Gibbs & Chiều Phản ứng Sinh hóa | KEEP | EXPAND, REWRITE | S-06.4 `[SRC]` | Giữ nguyên $\Delta G < 0 / > 0 / = 0$; liên hợp với thủy phân ATP ($\Delta G^{\circ\prime} \approx -30,5\text{ kJ/mol}$). |
| M-06.10 | S-06.8 | Ý nghĩa và tác dụng tổng kết | `T-07.4.8` Ý nghĩa & Ứng dụng Dược lý | KEEP | EXPAND | S-06.8 `[SRC]` | Gộp ý nghĩa các mục 1–7 thành một tiểu mục ứng dụng. |
| M-07.09 | — | Ví dụ Nernst với $K^+$ | `T-07.5.1` Ví dụ 1: Phương trình Nernst với $K^+$ | MERGE | MOVE | S-07.1 (example-box) `[SRC]` | Hộp ví dụ nguồn đã có sẵn, giữ nguyên số liệu. |
| M-07.10 | — | Cách nhớ Nernst-GHK & điện thế hoạt động | `T-07.5.2` Mẹo nhớ Nernst-GHK & điện thế hoạt động | MERGE | MOVE | S-07.7 (callout) `[SRC]` | Callout nguồn đã có sẵn. |
| M-07.11 | — | Sơ đồ hệ nhiệt động (côlap/kín/mở) & chu kỳ ATP/ADP (Mermaid) | `T-07.5.3` Sơ đồ hệ nhiệt động & chu kỳ ATP/ADP (Mermaid) | ADD | — | `[ADDED: Mermaid flowchart]` | Chuyển quy tắc của S-06.1, S-06.2, S-06.3, S-06.4 thành flowchart; không thêm dữ kiện mới. |
| M-06.12 | — | Placeholder hình màng tế bào, kênh ion/chất tải, nhập/xuất bào | `T-07.5.4` Minh họa Trực quan (Placeholders) | ADD | — | `[ADDED: figure placeholders]` + `[FIGURE]` | Nguồn có 0 hình (`I-07.04`); đặt placeholder theo `FIGURE_POLICY`. |
| M-07.13 | — | Tóm tắt nội dung trọng tâm & quy tắc ghi nhớ | `T-07.6.1` Tóm tắt Nội dung Trọng tâm & Quy tắc Ghi nhớ | MERGE | MOVE | S-07.1–S-07.8 `[SRC]` | Gộp nguyên lý I/II, Gibbs, ATP coupling thành tóm tắt. |
| M-06.12 | — | Bảng tổng hợp đại lượng & đơn vị | `T-07.6.2` Bảng Tổng hợp Đại lượng & Đơn vị | ADD | — | `[ADDED: summary concept tables]` | Nguồn có 0 bảng (`I-06.11`); bổ sung bảng tổng hợp. |
| M-06.15 | — | Bộ 10 câu hỏi/bài tập tự lượng giá | `T-07.7` Đánh giá & Bài tập tự lượng giá | ADD | — | `[ADDED: exercises]` | Nguồn hoàn toàn không có bài tập (Q3). |
| M-06.16 | — | Đáp án & hướng dẫn giải từng bước | `T-07.7.4` Đáp án & Hướng dẫn Giải Chi tiết (Answer Key) | ADD | — | `[ADDED: step-by-step answer key]` | Mỗi đáp án ghi `LO` và cấp độ; tính $E_K$ hiển đủ bước. |
| M-06.17 | — | Danh mục tài liệu tham khảo và ghi chú truy vết theo R4 | `T-07.8.1` Tài liệu Tham khảo & Đọc thêm | ADD | — | `[ADDED: reference section structure]` + `[VERIFY: textbook references needed]` | Nguồn `D-07` có 0 trích dẫn (`I-06.05`, `V-06.04`); chờ người dùng cung cấp giáo trình chuẩn. |

**Tổng cộng:** 17 dòng ma trận.

---

## B. Coverage Check

### 1. Kiểm tra độ phủ S-ID từ Audit Register

- **Danh sách S-ID trong `01_audit/ch07_audit.md` (tổng cộng = 8 S-ID):** `S-07.1`, `S-07.2`, `S-07.3`, `S-07.4`, `S-07.5`, `S-07.6`, `S-07.7`, `S-07.8`.
- **Ánh xạ từng S-ID trong Ma trận Mapping (Bảng A):**
  - `S-07.1` → `M-07.04` (`T-07.4.1`)
  - `S-07.2` → `M-07.05` (`T-06.4.2`)
  - `S-07.3` → `M-07.06` (`T-06.4.3`)
  - `S-07.4` → `M-07.07` (`T-06.4.4`)
  - `S-07.5` → `M-06.08` (`T-06.4.5`)
  - `S-06.6` → `M-06.09` (`T-06.4.6`)
  - `S-06.7` → `M-06.10` (`T-06.4.7`)
  - `S-06.8` → `M-06.10` (`T-06.4.8`)
- **Số S-ID chưa được ánh xạ (Unmapped / Missing S-IDs): 0** (độ phủ **100,0%**).
- **Báo cáo kiểm tra cơ học:** sẽ chạy `_tools/check_coverage.py` tại S2/S3.

### 2. Thống kê hành động chính (Primary Action Counts)

| Primary Action | Số dòng ma trận | Tỷ lệ (%) | Danh sách Row ID |
|---|---|---|---|
| **ADD** (khung sư pháp, bảng, hình, ví dụ/bài tập mới) | 9 | 52,9% | M-07.01, M-07.02, M-07.03, M-07.11, M-07.12, M-07.13, M-07.14, M-07.15, M-07.16, M-07.17 |
| **KEEP** (giữ nội dung cốt lõi tại đúng phân khu) | 5 | 29,4% | M-07.04, M-06.05, M-06.06, M-07.07, M-06.08 |
| **MERGE** | 2 | 11,8% | M-07.13, M-06.14 |
| **MOVE** | 0 | 0,0% | (dùng làm secondary cho M-07.09, M-07.10) |
| **REMOVE** | 0 | 0,0% | Không có dòng REMOVE (bảo toàn 100% dữ liệu nguồn) |
| **Tổng cộng** | **17 dòng** | **100,0%** | — |

### 3. Ước tính tỷ lệ nội dung mới và thống kê thẻ

- **Dung lượng nguồn gốc (`D-07`):** 872 từ (bảo toàn toàn bộ).
- **Dung lượng dự kiến bản thảo hoàn chỉnh (`ch07_draft.md`):** khoảng **4.000–4.500 từ** (đáp ứng `TARGET_LENGTH_PER_CHAPTER: not shorter than source; no upper limit`), tương đương **4–5 lần** nguồn (nguồn rất ngắn, cần mở rộng khung sư pháp và bài tập).
- Nguồn rất ngắn, S3 sẽ mở rộng đáng kể khung sư pháp T1–T3 và bổ sung bài tập T7.

---

## C. Chapter Restructuring Plan

### C.1 Đề cương chi tiết đến cấp Tiểu mục / Chủ đề

```text
Chuyên đề 7: Trao đổi chất qua màng tế bào (tên tạm, chờ xác nhận MANIFEST)
├── 1. Tổng quan chương (Chapter Overview) {T-07.1}
│   ├── 1.1 Tên chuyên đề, giới thiệu khái quát & phạm vi nội dung {T-07.1.1} (M-07.01)
│   └── 1.2 Kiến thức tiên kỳ & Thời lượng học tập dự kiến {T-07.1.2} (M-07.02)
├── 2. Mục tiêu học tập (Learning Objectives) {T-07.2}
│   └── 2.1 Chuẩn đầu ra Kiến thức, Kỹ năng, Vận dụng và Đánh giá mô hình (LO-1..LO-4) {T-07.2.1} (M-07.03)
├── 3. Đặt vấn đề & Ý nghĩa thực tiễn (Introduction) {T-07.3}
│   └── 3.1 Từ màng tế bào đến vận chuyển chất (phần mở đầu)
├── 4. Nội dung bài giảng chính (Main Content) {T-07.4}
│   ├── 4.1 Cấu trúc Màng & Gradient {T-07.4.1} [SRC: S-07.1] (M-07.04)
│   ├── 4.2 Khuếch tán đơn giản & Thẩm thấu {T-07.4.2} [SRC: S-07.2] (M-07.05)
│   ├── 4.3 Khuếch tán được hỗ trợ {T-07.4.3} [SRC: S-07.3] (M-07.06)
│   ├── 4.4 Vận chuyển chủ động sơ cấp {T-07.4.4} [SRC: S-07.4] (M-07.07)
│   ├── 4.5 Vận chuyển chủ động thứ cấp {T-07.4.5} [SRC: S-07.5] (M-07.08)
│   └── 4.6 Nhập bào, Xuất bào & Vận chuyển qua Biểu mô {T-07.4.6} [SRC: S-07.6] (M-07.09)
├── 5. Ví dụ minh họa & Quy trình thực hành (Examples & Illustrations) {T-07.5}
│   ├── 5.1 Ví dụ 1: Phương trình Nernst với $K^+$ {T-07.5.1} [SRC] (M-07.09)
│   ├── 5.2 Mẹo nhớ Nernst & Điện thế hoạt động {T-07.5.2} [SRC] (M-07.10)
│   ├── 5.3 Sơ đồ hệ nhiệt động & chu kỳ ATP/ADP (Mermaid) {T-07.5.3} (M-07.11)
│   └── 5.4 Minh họa Trực quan (Placeholders) {T-07.5.4} (M-07.12)
├── 6. Tóm tắt chương (Chapter Summary) {T-07.6}
│   ├── 6.1 Tóm tắt Nội dung Trọng tâm & Quy tắc Ghi nhớ {T-07.6.1} (M-07.13)
│   └── 6.2 Bảng Tổng hợp Đại lượng & Đơn vị {T-07.6.2} (M-06.14)
├── 7. Đánh giá & Bài tập tự lượng giá (Review & Assessment) {T-07.7}
│   ├── 7.1 Câu hỏi lý thuyết: Nhận biết & Thông hiểu (LO-1) {T-07.7.1} (phần của M-07.15)
│   ├── 7.2 Bài tập áp dụng: Tính toán Nernst & vận chuyển chất (LO-2, LO-3) {T-07.7.2} (phần của M-07.15)
│   ├── 7.3 Câu hỏi phân tích & vận dụng nâng cao (LO-3, LO-4) {T-07.7.3} (phần của M-07.15)
│   └── 7.4 Đáp án & Hướng dẫn giải chi tiết (Answer Key) {T-07.7.4} (M-06.16)
└── 8. Tài liệu tham khảo (References) {T-06.8}
    └── 8.1 Danh mục Tài liệu tham khảo & Đọc thêm {T-07.8.1} (M-07.17)
```

### C.2 Kế hoạch bổ sung nội dung mới và lý do sư pháp

1. **Khung sư pháp T1–T3:** Tên chuyên đề, giới thiệu, kiến thức tiên kỳ, thời lượng học tập, 4 chuẩn đầu ra `LO-1`..`LO-4`.
2. **Sơ đồ thuật toán Mermaid (`T-07.5.3`):** Quy trình màng tế bào & vận chuyển chất.
3. **Placeholder hình (`T-07.5.4`):** Màng tế bào, kênh ion/chất tải, nhập/xuất bào.
4. **Bảng tổng hợp mới (`T-07.6.2`):** Tổng hợp đại lượng & đơn vị của toàn chương.
5. **Bộ 10 câu hỏi/bài tập + đáp án (`T-07.7`):** Nguồn hoàn toàn không có đánh giá.
6. Giữ nguyên 1 công thức và 1 ví dụ của nguồn; không cắt nội dung (Q2).

### C.3 Rủi ro & Biện pháp kiểm soát

- **Rủi ro 1 (Tên chuyên đề chưa chốt):** Xác nhận tại MANIFEST (Q1).
- **Rủi ro 2 (Nguồn rất ngắn, 872 từ):** Nếu mở rộng lên 4.000–4.500 thì tỷ lệ 4–5×. Đây là mở rộng khung sư pháp và bài tập, không cắt nội dung nguồn.
- **Rủi ro 3 (0 bài tập, 0 hình):** Bổ sung `[ADDED]` bài tập và `[FIGURE]` placeholder (Q3, Q4).
- **Rủi ro 4 (0 tài liệu tham khảo):** Đặt `[VERIFY]` (Q5), không bịa nguồn.

### C.4 Chuẩn đầu ra Học tập (Draft LO)

- **LO-1:** Phát biểu được cấu trúc màng tế bào, gradient nồng độ và điện thế màng; phân loại vận chuyển chất qua màng (khuếch tán đơn giản, thẩm thấu, khuếch tán được hỗ trợ, vận chuyển chủ động sơ cấp & thứ cấp, nhập/xuất bào).
- **LO-2:** Tính toán điện thế nghỉ của ion đơn lẻ bằng phương trình Nernst ($E_{ion} = \frac{RT}{zF}\ln\frac{[ion]_o}{[ion]_i} \approx \frac{61,5}{z}\log_{10}\frac{[ion]_o}{[ion]_i}$ ở $37^\circ\text{C}$); phân biệt vận chuyển chủ động sơ cấp (dùng ATP) và thứ cấp (dùng gradient ion).
- **LO-3:** Vận dụng để giải thích hấp thụ thuốc ở ruột/thận, vận chuyển glucose qua SGLT2, tác dụng của thuốc chẹn kênh ion trên điện thế màng & hoạt động tế bào.
- **LO-4:** Đánh giá vai trò của màng tế bào trong sự sống tế bào, liên hệ biến đổi màng tế bào với bệnh lý & tác dụng của thuốc chẹn kênh ion `[ADDED: LO-4 definition]`.

### C.5 Glossary & Chuẩn hóa

| Thuật ngữ | Dạng trong nguồn | Dạng chuẩn hóa | Ghi chú |
|---|---|---|---|
| Màng tế bào | `Màng tế bào` | **Màng tế bào (cell membrane)** | Giữ nguyên. |
| Lớp lipid kép | `lớp lipid kép` | **Lớp lipid kép (lipid bilayer)** | Giữ nguyên. |
| Màng bán thấm | `màng bán thấm` | **Màng bán thấm (semipermeable membrane)** | Giữ nguyên. |
| Gradient nồng độ | `gradient nồng độ` | **Gradient nồng độ (concentration gradient)** | Giữ nguyên. |
| Điện thế màng | `điện thế màng` | **Điện thế màng (membrane potential)** | Giữ nguyên. |
| Phương trình Nernst | `Phương trình Nernst` | **Phương trình Nernst (Nernst equation)** | Giữ nguyên. |
| Chất tải | `chất tải` | **Chất tải (carrier/transporter)** | Giữ nguyên. |
| Kênh ion | `kênh ion` | **Kênh ion (ion channel)** | Giữ nguyên. |
| Vận chuyển chủ động | `Vận chuyển chủ động` | **Vận chuyển chủ động (active transport)** | Giữ nguyên. |
| Vận chuyển chủ động sơ cấp | `Vận chuyển chủ động sơ cấp` | **Vận chuyển chủ động sơ cấp (primary active transport)** | Giữ nguyên. |
| Vận chuyển chủ động thứ cấp | `Vận chuyển chủ động thứ cấp` | **Vận chuyển chủ động thứ cấp (secondary active transport)** | Giữ nguyên. |
| Nhập bào / Xuất bào | `Nhập bào`, `Xuất bào` | **Nhập bào (endocytosis)**, **Xuất bào (exocytosis)** | Giữ nguyên. |
| Vận chuyển qua biểu mô | `Vận chuyển qua biểu mô` | **Vận chuyển qua biểu mô (transcellular transport)** | Giữ nguyên. |
| Dung dịch ưu trương / nhược trương | `dung dịch ưu trương`, `dung dịch nhược trương` | **Dung dịch ưu trương (hypertonic solution)**, **Dung dịch nhược trương (hypotonic solution)** | Giữ nguyên. |

---

## D. Verification Items Carried Forward

| V-ID | Nội dung cần kiểm chứng | Loại | Mục T-ID tiếp nhận | Kế hoạch xử lý trong S3 |
|---|---|---|---|---|
| `V-07.01` | Tên chuyên đề chính xác | reference | `T-07.1` | Xác nhận MANIFEST (Q1). |
| `V-07.02` | Giá trị điện thế nghỉ ($E_K \approx -95\text{ mV}$), tỷ số nồng độ ion | number/formula | `T-07.4.1`, `T-07.5.1` | Giữ đúng nguồn; gắn `[VERIFY]`. |
| `V-07.03` | 0 hình vẽ/sơ đồ trong nguồn | structure | `T-07.5.4` | Đặt `[FIGURE]` placeholder (Q4). |
| `V-07.04` | 0 tài liệu tham khảo | reference | `T-07.8.1` | Đặt `[VERIFY: reference needed …]` (Q5). |

---

## E. Open Questions for Gate A

1. **Q1 (Tên chuyên đề):** Xác nhận tên Ch07 tại `MANIFEST.md` (hiện dùng "Chuyên đề 7: Trao đổi chất qua màng tế bào").
2. **Q2 (Nguồn rất ngắn, mở rộng):** Nguồn chỉ 872 từ, 8 mục; S3 mở rộng lên ~4.000–4.500 bằng khung sư pháp và bài tập. Đồng ý?
3. **Q3 (Bài tập):** Đồng ý S3 bổ sung bộ 10 câu hỏi/bài tập `[ADDED]`?
4. **Q4 (Hình):** Đồng ý S3 đặt placeholder `[FIGURE]` cho màng tế bào, kênh ion/chất tải, nhập/xuất bào?
5. **Q5 (Tài liệu tham khảo):** Đồng ý để `[VERIFY: reference needed …]`, `APPROVED_REFERENCE_LIST: none`?

---

## F. Not verified / limitations

- Chỉ dựa trên D-07; 0 trích dẫn; 0 hình vẽ; 0 bài tập trong nguồn.
- Tất cả công thức, giá trị số giữ nguyên nguồn; gắn `[VERIFY]` khi cần chuyên gia xác nhận.
- Dừng tại GATE A theo R9.

---
GATE A: STOP. Awaiting user approval of the Content Mapping Matrix. Do not begin the transformation.
