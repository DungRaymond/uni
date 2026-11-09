# ch02_matrix.md — S2 Mapping & Restructuring Plan · Chương 02

**Môn:** Lý dược – Master Lecture Notes · **Stage:** S2 Mapping · **Ngày:** 2026-11-09  
**Nguồn đầu vào:** `00_source_original/ch02_doc-ld-2.html` (D-02), `01_audit/ch02_audit.md`, `_state/carryover_latest.md`  
**Khung cấu trúc:** Template v2 (`T1`–`T8`, `DISCIPLINE_TYPE: STEM-quantitative` theo `00_config.md`)  
**Quy tắc:** Ánh xạ 100% `S-02.1`–`S-02.3` sang `T-02.x.y` không làm mất nội dung; KHÔNG viết bài giảng chi tiết; dừng ở GATE A.

---

## A. Content Mapping Matrix

| Row ID | S-ID(s) | Summary (≤15 words) | Target T-ID and Name | Primary Action | Secondary Actions | Provenance After Transformation | Notes and Risks |
|---|---|---|---|---|---|---|---|
| M-02.01 | — | Tên chuyên đề, giới thiệu khái quát và phạm vi nội dung | `T-02.1` Chuyên đề 2: Điện thế sinh học & Tín hiệu điện từ của màng tế bào | ADD | — | `[ADDED: structural frame]` | Nguồn `D-02` thiếu T1, tên chương chỉ ở `MANIFEST.md` (Q1). |
| M-02.02 | — | Kiến thức tiên kỳ và thời lượng học tập | `T-02.1.1` / `T-02.1.2` (phần của `T-02.1`) Phạm vi, Kiến thức Tiên quyết & Thời lượng Học tập | ADD | — | `[ADDED: study time estimate]` | Nguồn `D-02` không có phần kiến thức tiên quyết; bổ sung theo `STUDY_TIME_RULE`. |
| M-02.03 | — | Bốn chuẩn đầu ra kiến thức, kỹ năng, vận dụng, đánh giá mô hình | `T-02.2` Mục tiêu Học tập (Learning Objectives `LO-1`..`LO-4`) | ADD | — | `[ADDED: learning objectives]` | Suy ra từ `S-02.1`–`S-02.3`. |
| M-02.04 | S-02.1 | Điện thế nghỉ, phương trình Nernst & GHK | `T-02.4.1` Điện thế nghỉ & Phương trình Nernst-GHK | KEEP | EXPAND, REWRITE | S-02.1 `[SRC]` | Giữ nguyên Nernst & GHK, điện thế nghỉ −70 đến −90 mV. |
| M-02.05 | S-02.2 | Điện thế hoạt động: khử cực, tái cực, trơ; ECG/EEG | `T-02.4.2` Điện thế hoạt động & Ứng dụng chẩn đoán | KEEP | EXPAND, REWRITE | S-02.2 `[SRC]` | Giữ nguyên Na⁺ vào/K⁺ ra, trơ tuyệt đối/tương đối, ECG/EEG. |
| M-02.06 | S-02.3 | Ý nghĩa và tác dụng: ECG/EEG, thuốc chẹn kênh ion, kali máu | `T-02.4.3` Ý nghĩa & Ứng dụng Dược lý | KEEP | EXPAND, MERGE | S-02.3 `[SRC]` | Gộp ý nghĩa các mục 1–2 thành một tiểu mục ứng dụng. |
| M-02.07 | — | Ví dụ tính thế Nernst của K⁺ ở 37°C | `T-02.5.1` Ví dụ 1: Thế Nernst của K⁺ | MERGE | MOVE | S-02.3 (example-box) `[SRC]` | Hộp ví dụ nguồn đã có sẵn, giữ nguyên số liệu. |
| M-02.08 | — | Cách nhớ Nernst/GHK & điện thế hoạt động | `T-02.5.2` Mẹo nhớ Nernst-GHK & điện thế hoạt động | MERGE | MOVE | S-02.3 (callout) `[SRC]` | Callout nguồn đã có sẵn. |
| M-02.09 | — | Sơ đồ điện thế màng & khử cực/tái cực (Mermaid) | `T-02.5.3` Sơ đồ điện thế màng & chu kỳ điện thế hoạt động (Mermaid) | ADD | — | `[ADDED: Mermaid flowchart]` | Chuyển quy tắc của S-02.1, S-02.2 thành flowchart; không thêm dữ kiện mới. |
| M-02.10 | — | Placeholder hình điện thế màng, khử cực/tái cực, ECG/EEG | `T-02.5.4` Minh họa Trực quan (Placeholders) | ADD | — | `[ADDED: figure placeholders]` + `[FIGURE]` | Nguồn có 0 hình (`I-02.04`); đặt placeholder theo `FIGURE_POLICY`. |
| M-02.11 | — | Tóm tắt nội dung trọng tâm & quy tắc ghi nhớ | `T-02.6.1` Tóm tắt Nội dung Trọng tâm & Quy tắc Ghi nhớ | MERGE | MOVE | S-02.1–S-02.3 `[SRC]` | Gộp Nernst/GHK, điện thế hoạt động thành tóm tắt. |
| M-02.12 | — | Bảng tổng hợp công thức, đơn vị, quy ước dấu | `T-02.6.2` Bảng Tổng hợp Công thức & Lưu ý | ADD | — | `[ADDED: summary concept tables]` | Nguồn có 0 bảng (`I-02.05`); bổ sung bảng tổng hợp. |
| M-02.13 | — | Bộ 10 câu hỏi/bài tập tự lượng giá | `T-02.7` Đánh giá & Bài tập tự lượng giá | ADD | — | `[ADDED: exercises]` | Nguồn hoàn toàn không có bài tập (Q3). |
| M-02.14 | — | Đáp án & hướng dẫn giải từng bước | `T-02.7.4` Đáp án & Hướng dẫn Giải Chi tiết (Answer Key) | ADD | — | `[ADDED: step-by-step answer key]` | Mỗi đáp án ghi `LO` và cấp độ; tính Nernst hiển đủ bước. |
| M-02.15 | — | Danh mục tài liệu tham khảo và ghi chú truy vết theo R4 | `T-02.8.1` Tài liệu Tham khảo & Đọc thêm | ADD | — | `[ADDED: reference section structure]` + `[VERIFY: textbook references needed]` | Nguồn `D-02` có 0 trích dẫn (`I-02.05`, `V-02.04`); chờ người dùng cung cấp giáo trình chuẩn. |

**Tổng cộng:** 15 dòng ma trận.

---

## B. Coverage Check

### 1. Kiểm tra độ phủ S-ID từ Audit Register

- **Danh sách S-ID trong `01_audit/ch02_audit.md` (tổng cộng = 3 S-ID):** `S-02.1`, `S-02.2`, `S-02.3`.
- **Ánh xạ từng S-ID trong Ma trận Mapping (Bảng A):**
  - `S-02.1` → `M-02.04` (`T-02.4.1`)
  - `S-02.2` → `M-02.05` (`T-02.4.2`)
  - `S-02.3` → `M-02.06` (`T-02.4.3`)
- **Số S-ID chưa được ánh xạ (Unmapped / Missing S-IDs): 0** (độ phủ **100,0%**).
- **Báo cáo kiểm tra cơ học:** sẽ chạy `_tools/check_coverage.py` tại S2/S3.

### 2. Thống kê hành động chính (Primary Action Counts)

| Primary Action | Số dòng ma trận | Tỷ lệ (%) | Danh sách Row ID |
|---|---|---|---|
| **ADD** (khung sư phạm, bảng, hình, ví dụ/bài tập mới) | 9 | 60,0% | M-02.01, M-02.02, M-02.03, M-02.09, M-02.10, M-02.11, M-02.12, M-02.13, M-02.14, M-02.15 |
| **KEEP** (giữ nội dung cốt lõi tại đúng phân khu) | 3 | 20,0% | M-02.04, M-02.05, M-02.06 |
| **MERGE** | 0 | 0,0% | (ví dụ nguồn đã nằm đúng phân khu) |
| **MOVE** | 0 | 0,0% | (dùng làm secondary cho M-02.07, M-02.08) |
| **REMOVE** | 0 | 0,0% | Không có dòng REMOVE (bảo toàn 100% dữ liệu nguồn) |
| **Tổng cộng** | **15 dòng** | **100,0%** | — |

### 3. Ước tính tỷ lệ nội dung mới và thống kê thẻ

- **Dung lượng nguồn gốc (`D-02`):** 574 từ (bảo toàn toàn bộ).
- **Dung lượng dự kiến bản thảo hoàn chỉnh (`ch02_draft.md`):** khoảng **4.000–4.500 từ** (đáp ứng `TARGET_LENGTH_PER_CHAPTER: not shorter than source; no upper limit`), tương đương **7–8 lần** nguồn (nguồn rất ngắn, cần mở rộng khung sư phạm và bài tập).
- Nguồn rất ngắn, S3 sẽ mở rộng đáng kể khung sư phạm T1–T3 và bổ sung bài tập T7.

---

## C. Chapter Restructuring Plan

### C.1 Đề cương chi tiết đến cấp Tiểu mục / Chủ đề

```text
Chuyên đề 2: Điện thế sinh học & Tín hiệu điện từ của màng tế bào (tên tạm, chờ xác nhận MANIFEST)
├── 1. Tổng quan chương (Chapter Overview) {T-02.1}
│   ├── 1.1 Tên chuyên đề, giới thiệu khái quát & phạm vi nội dung {T-02.1.1} (M-02.01)
│   └── 1.2 Kiến thức tiên kỳ & Thời lượng học tập dự kiến {T-02.1.2} (M-02.02)
├── 2. Mục tiêu học tập (Learning Objectives) {T-02.2}
│   └── 2.1 Chuẩn đầu ra Kiến thức, Kỹ năng, Vận dụng và Đánh giá mô hình (LO-1..LO-4) {T-02.2.1} (M-02.03)
├── 3. Đặt vấn đề & Ý nghĩa thực tiễn (Introduction) {T-02.3}
│   └── 3.1 Từ điện thế màng đến tín hiệu điện sinh lý (phần mở đầu)
├── 4. Nội dung bài giảng chính (Main Content) {T-02.4}
│   ├── 4.1 Điện thế nghỉ & Phương trình Nernst-GHK {T-02.4.1} [SRC: S-02.1] (M-02.04)
│   ├── 4.2 Điện thế hoạt động & Ứng dụng chẩn đoán {T-02.4.2} [SRC: S-02.2] (M-02.05)
│   └── 4.3 Ý nghĩa & Ứng dụng Dược lý {T-02.4.3} [SRC: S-02.3] (M-02.06)
├── 5. Ví dụ minh họa & Quy trình thực hành (Examples & Illustrations) {T-02.5}
│   ├── 5.1 Ví dụ 1: Thế Nernst của K⁺ ở 37°C {T-02.5.1} [SRC] (M-02.07)
│   ├── 5.2 Mẹo nhớ Nernst-GHK & điện thế hoạt động {T-02.5.2} [SRC] (M-02.08)
│   ├── 5.3 Sơ đồ điện thế màng & chu kỳ điện thế hoạt động (Mermaid) {T-02.5.3} (M-02.09)
│   └── 5.4 Minh họa Trực quan (Placeholders) {T-02.5.4} (M-02.10)
├── 6. Tóm tắt chương (Chapter Summary) {T-02.6}
│   ├── 6.1 Tóm tắt Nội dung Trọng tâm & Quy tắc Ghi nhớ {T-02.6.1} (M-02.11)
│   └── 6.2 Bảng Tổng hợp Công thức & Lưu ý {T-02.6.2} (M-02.12)
├── 7. Đánh giá & Bài tập tự lượng giá (Review & Assessment) {T-02.7}
│   ├── 7.1 Câu hỏi lý thuyết: Nhận biết & Thông hiểu (LO-1) {T-02.7.1} (phần của M-02.13)
│   ├── 7.2 Bài tập áp dụng: Tính toán Nernst & Poiseuille (LO-2, LO-3) {T-02.7.2} (phần của M-02.13)
│   ├── 7.3 Câu hỏi phân tích & vận dụng nâng cao (LO-3, LO-4) {T-02.7.3} (phần của M-02.13)
│   └── 7.4 Đáp án & Hướng dẫn giải chi tiết (Answer Key) {T-02.7.4} (M-02.14)
└── 8. Tài liệu tham khảo (References) {T-02.8}
    └── 8.1 Danh mục Tài liệu tham khảo & Đọc thêm {T-02.8.1} (M-02.15)
```

### C.2 Kế hoạch bổ sung nội dung mới và lý do sư phạm

1. **Khung sư phạm T1–T3:** Tên chuyên đề, giới thiệu, kiến thức tiên quyết, thời lượng, 4 chuẩn đầu ra `LO-1`..`LO-4`.
2. **Sơ đồ thuật toán Mermaid (`T-02.5.3`):** Quy trình khử cực/tái cực và ảnh hưởng của độ thấm ion đến điện thế nghỉ.
3. **Placeholder hình (`T-02.5.4`):** Điện thế màng, khử cực/tái cực, ECG/EEG.
4. **Bảng tổng hợp mới (`T-02.6.2`):** Tổng hợp công thức, đơn vị, quy ước dấu của toàn chương.
5. **Bộ 10 câu hỏi/bài tập + đáp án (`T-02.7`):** Nguồn hoàn toàn không có đánh giá.
6. Giữ nguyên 2 công thức và 1 ví dụ của nguồn; không cắt nội dung (Q2).

### C.3 Rủi ro & Biện pháp kiểm soát

- **Rủi ro 1 (Tên chương chưa chốt):** Xác nhận tại MANIFEST (Q1).
- **Rủi ro 2 (Nguồn rất ngắn, 574 từ):** Nếu mở rộng lên 4.000–4.500 thì tỷ lệ > 7×. Đây là mở rộng khung sư phạm và bài tập, không cắt nội dung nguồn.
- **Rủi ro 3 (0 bài tập, 0 hình):** Bổ sung `[ADDED]` bài tập và `[FIGURE]` placeholder (Q3, Q4).
- **Rủi ro 4 (0 tài liệu tham khảo):** Đặt `[VERIFY]` (Q5), không bịa nguồn.

### C.4 Chuẩn đầu ra Học tập (Draft LO)

- **LO-1:** Phát biểu được điện thế nghỉ, phương trình Nernst & GHK, điện thế hoạt động (khử cực/tái cực/trơ), ECG/EEG.
- **LO-2:** Tính toán được thế Nernst của ion đơn lẻ; phân biệt dòng tầng/xoáy qua số Reynolds (liên hệ Ch01).
- **LO-3:** Vận dụng điện thế hoạt động để giải thích ECG/EEG, tác dụng của thuốc chẹn kênh ion, sự liên hệ kali máu với loạn nhịp.
- **LO-4:** Đánh giá vai trò của điện sinh học trong chẩn đoán (ECG/EEG) và điều trị (thuốc chẹn kênh ion).

### C.5 Glossary & Chuẩn hóa

| Thuật ngữ | Dạng trong nguồn | Dạng chuẩn hóa | Ghi chú |
|---|---|---|---|
| Điện thế nghỉ | `Điện thế nghỉ (Resting Membrane Potential)` | **Điện thế nghỉ (resting membrane potential)** | Giữ nguyên. |
| Phương trình Nernst | `Phương trình Nernst` | **Phương trình Nernst (Nernst equation)** | Giữ nguyên. |
| Phương trình GHK | `Phương trình Goldman - Hodgkin - Katz (GHK)` | **Phương trình Goldman-Hodgkin-Katz (GHK)** | Giữ nguyên. |
| Điện thế hoạt động | `Điện thế hoạt động (Action Potential)` | **Điện thế hoạt động (action potential)** | Giữ nguyên. |
| Khử cực / Tái cực | `Khử cực`, `Tái cực` | **Khử cực (depolarization)** / **Tái cực (repolarization)** | Giữ nguyên. |
| Trơ tuyệt đối / tương đối | `Trơ tuyệt đối`, `Trơ tương đối` | **Trơ tuyệt đối (absolute refractory period)** / **Trơ tương đối (relative refractory period)** | Giữ nguyên. |
| ECG/EEG | `Điện tâm đồ (ECG)`, `Điện não đồ (EEG)` | **ECG (electrocardiogram)** / **EEG (electroencephalogram)** | Giữ nguyên, giữ INN. |
| Thuốc chẹn kênh ion | `thuốc chẹn kênh ion` | **Thuốc chẹn kênh ion (ion channel blocker)** | Giữ nguyên. |

---

## D. Verification Items Carried Forward

| V-ID | Nội dung cần kiểm chứng | Loại | Mục T-ID tiếp nhận | Kế hoạch xử lý trong S3 |
|---|---|---|---|---|
| `V-02.01` | Tên chuyên đề chính xác | reference | `T-02.1` | Xác nhận MANIFEST (Q1). |
| `V-02.02` | Giá trị điện thế nghỉ (−70 đến −90 mV), điện thế đỉnh (+30 mV), tỷ số độ thấm K⁺/Na⁺ (50–100 lần) | number/theory | `T-02.4.1`, `T-02.4.2` | Giữ đúng nguồn; gắn `[VERIFY]`. |
| `V-02.03` | 0 hình vẽ/sơ đồ trong nguồn | structure | `T-02.5.4` | Đặt `[FIGURE]` placeholder (Q4). |
| `V-02.04` | 0 tài liệu tham khảo | reference | `T-02.8.1` | Đặt `[VERIFY: reference needed …]` (Q5). |

---

## E. Open Questions for Gate A

1. **Q1 (Tên chuyên đề):** Xác nhận tên Ch02 tại `MANIFEST.md` (hiện dùng "Chuyên đề 2: Điện thế sinh học & Tín hiệu điện từ của màng tế bào").
2. **Q2 (Nguồn ngắn, mở rộng):** Nguồn chỉ 574 từ, 3 mục; S3 mở rộng lên ~4.000–4.500 từ bằng khung sư phạm và bài tập. Đồng ý?
3. **Q3 (Bài tập):** Đồng ý S3 bổ sung bộ 10 câu hỏi/bài tập `[ADDED]`?
4. **Q4 (Hình):** Đồng ý S3 đặt placeholder `[FIGURE]` cho điện thế màng, khử cực/tái cực, ECG/EEG?
5. **Q5 (Tài liệu tham khảo):** Đồng ý để `[VERIFY: reference needed …]`, `APPROVED_REFERENCE_LIST: none`?

---

## F. Not verified / limitations

- Chỉ dựa trên D-02; 0 trích dẫn; 0 hình vẽ; 0 bài tập trong nguồn.
- Tất cả công thức, giá trị số giữ nguyên nguồn; gắn `[VERIFY]` khi cần chuyên gia xác nhận.
- Dừng tại GATE A theo R9.

---
GATE A: STOP. Awaiting user approval of the Content Mapping Matrix. Do not begin the transformation.
