# ch07_matrix.md — S2 Mapping & Restructuring Plan · Chương 07

**Môn:** Hóa vô cơ dược · **Stage:** S2 Mapping · **Ngày:** 2026-11-09  
**Nguồn đầu vào:** `00_source_original/ch07_doc-hvc-7.html` (D-07), `01_audit/ch07_audit.md`, `_state/carryover_latest.md`  
**Khung cấu trúc:** Template v2 (`T1`–`T8`, `DISCIPLINE_TYPE: STEM-quantitative` theo `00_config.md`)  
**Quy tắc:** Ánh xạ 100% `S-07.1`–`S-07.9` sang `T-07.x.y` không làm mất nội dung; KHÔNG viết bài giảng chi tiết; dừng ở GATE A.

---

## A. Content Mapping Matrix

| Row ID | S-ID(s) | Summary (≤15 words) | Target T-ID and Name | Primary Action | Secondary Actions | Provenance After Transformation | Notes and Risks |
|---|---|---|---|---|---|---|---|
| M-07.01 | — | Tên chương, giới thiệu khái quát và phạm vi nội dung | `T-07.1` Chương 7: Đồng phân Phức chất & Ý nghĩa Dược lý | ADD | — | `[ADDED: structural frame]` | Nguồn `D-07` thiếu T1, tên chương chỉ ở `MANIFEST.md` (Q1). |
| M-07.02 | — | Kiến thức tiên quyết Chương 4–6 và thời lượng học tập | `T-07.1.1` / `T-07.1.2` (phần của `T-07.1`) Phạm vi, Kiến thức Tiên quyết & Thời lượng | ADD | — | `[ADDED: study time estimate]` | Nối `T-03.4.1` (VB), `T-04.4.6` (3c-2e), `T-06.4.x` (phức chất); áp dụng `STUDY_TIME_RULE`. |
| M-07.03 | — | Bốn chuẩn đầu ra kiến thức, kỹ năng, vận dụng, đánh giá mô hình | `T-07.2` Mục tiêu Học tập (Learning Objectives `LO-1`..`LO-4`) | ADD | — | `[ADDED: learning objectives]` | Suy ra từ `S-07.1`–`S-07.9`. |
| M-07.04 | S-07.1 | Tổng quan & phân loại hai nhánh lớn (cấu trúc & lập thể) | `T-07.4.1` Tổng quan & Phân loại Tổng thể Đồng phân Phức chất | KEEP | EXPAND, REWRITE | S-07.1 `[SRC]` | Bảng phân loại tổng thể đã có sẵn; giữ nguyên tiêu chí phân biệt. |
| M-07.05 | S-07.2 | Đồng phân ion hóa: anion/cation hoán đổi cầu nội-ngoại | `T-07.4.2` Đồng phân Ion hóa | KEEP | EXPAND | S-07.2 `[SRC]` | Bảng $[Co(NH_3)_5Br]SO_4$ vs $[Co(NH_3)_5(SO_4)]Br$ đã có sẵn. |
| M-07.06 | S-07.3 | Đồng phân solvat/hydrat hóa: nước ở cầu nội hay cầu ngoại | `T-07.4.3` Đồng phân Solvat hóa / Hydrat hóa | KEEP | EXPAND | S-07.3 `[SRC]` | 3 đồng phân hydrat của Chromium(III) chloride đã có sẵn. |
| M-07.07 | S-07.4 | Đồng phân liên kết: phối tử lưỡng nha $NO_2^-$, $SCN^-$ | `T-07.4.4` Đồng phân Liên kết | KEEP | EXPAND | S-07.4 `[SRC]` | Nitro/Nitrito, Thiocyanato/Isothiocyanato; HSAB giải thích chọn lọc. |
| M-07.08 | S-07.5 | Đồng phân phối trí: cation và anion đều là ion phức | `T-07.4.5` Đồng phân Phối trí | KEEP | EXPAND | S-07.5 `[SRC]` | Ví dụ $[Co(NH_3)_6][Cr(CN)_6]$ đã có sẵn. |
| M-07.09 | S-07.6 | Đồng phân hình học: cis/trans, fac/mer, $[MA_2B_2C_2]$ | `T-07.4.6` Đồng phân Hình học | KEEP | EXPAND, REWRITE | S-07.6 `[SRC]` | Cisplatin/transplatin dược lý đã có sẵn. |
| M-07.10 | S-07.7 | Đồng phân quark học: đối quang Δ/Λ, R/S, tính quark hoạt | `T-07.4.7` Đồng phân Quang học | KEEP | EXPAND | S-07.7 `[SRC]` | $[Co(en)_3]^{3+}$, $[Fe(ox)_3]^{3-}$; Δ/Λ không tự cho biết dấu quay. |
| M-07.11 | S-07.8 | Ý nghĩa dược lý tổng hợp: bảng liên hệ loại đồng phân & ứng dụng | `T-07.4.8` Ý nghĩa Dược lý Tổng hợp | KEEP | EXPAND | S-07.8 `[SRC]` | Bảng 6 loại đồng phân & ý nghĩa dược lý/lâm sàng đã có sẵn. |
| M-07.12 | S-07.9 | Ý nghĩa và tác dụng: tóm tắt chương | `T-07.6.1` Tóm tắt Nội dung Trọng tâm & Quy tắc Ghi nhớ | MERGE | MOVE | S-07.9 `[SRC]` | Đoạn tóm tắt ngắn (~40 từ); mở rộng ở S3. |
| M-07.13 | — | Ví dụ cisplatin & transplatin: cùng công thức, khác số phận | `T-07.5.1` Ví dụ 7.1: cisplatin và transplatin | MERGE | MOVE | S-07.6, S-07.8 (example-box) `[SRC]` | Hộp ví dụ nguồn đã có sẵn. |
| M-07.14 | — | Ví dụ đồng phân quark học Δ/Λ của $[Co(en)_3]^{3+}$ | `T-07.5.2` Ví dụ 7.2: Đồng phân quark học | MERGE | MOVE | S-07.7 (example-box) `[SRC]` | Hộp ví dụ nguồn đã có sẵn. |
| M-07.15 | — | Sơ đồ thuật toán phân loại loại đồng phân (Mermaid) | `T-07.5.3` Sơ đồ thuật toán xác định loại đồng phân (Mermaid) | ADD | — | `[ADDED: Mermaid flowchart]` | Chuyển quy tắc của `S-07.1`–`S-07.7` thành flowchart; không thêm dữ kiện mới. |
| M-07.16 | — | Placeholder hình cơ cấu cis/trans, đối quang Δ/Λ, sơ đồ phân loại | `T-07.5.4` Minh họa Trực quan (Placeholders) | ADD | — | `[ADDED: figure placeholders]` + `[FIGURE]` | Nguồn có 0 hình (`I-07.04`); đặt placeholder theo `FIGURE_POLICY`. |
| M-07.17 | — | Bảng tổng hợp loại đồng phân, tiêu chí, ý nghĩa dược lý | `T-07.6.2` Bảng Tổng hợp Loại Đồng phân & Ý nghĩa Dược lý | ADD | — | `[ADDED: summary concept tables]` | Nguồn có 8 bảng nhưng chưa có bảng tổng hợp toàn chương. |
| M-07.18 | — | Bộ 10 câu hỏi/bài tập tự lượng giá | `T-07.7` Đánh giá & Bài tập tự lượng giá | ADD | — | `[ADDED: exercises]` | Nguồn hoàn toàn không có bài tập (Q3). |
| M-07.19 | — | Đáp án & hướng dẫn giải từng bước | `T-07.7.4` Đáp án & Hướng dẫn Giải Chi tiết (Answer Key) | ADD | — | `[ADDED: step-by-step answer key]` | Mỗi đáp án ghi `LO` và cấp độ. |
| M-07.20 | — | Danh mục tài liệu tham khảo và ghi chú truy vết theo R4 | `T-07.8.1` Tài liệu Tham khảo & Đọc thêm | ADD | — | `[ADDED: reference section structure]` + `[VERIFY: textbook references needed]` | Nguồn `D-07` có 0 trích dẫn (`I-07.05`, `V-07.06`); chờ người dùng cung cấp giáo trình chuẩn. |

**Tổng cộng:** 20 dòng ma trận.

---

## B. Coverage Check

### 1. Kiểm tra độ phủ S-ID từ Audit Register

- **Danh sách S-ID trong `01_audit/ch07_audit.md` (tổng cộng = 9 S-ID):** `S-07.1`, `S-07.2`, `S-07.3`, `S-07.4`, `S-07.5`, `S-07.6`, `S-07.7`, `S-07.8`, `S-07.9`.
- **Ánh xạ từng S-ID trong Ma trận Mapping (Bảng A):**
  - `S-07.1` → `M-07.04` (`T-07.4.1`)
  - `S-07.2` → `M-07.05` (`T-07.4.2`)
  - `S-07.3` → `M-07.06` (`T-07.4.3`)
  - `S-07.4` → `M-07.07` (`T-07.4.4`)
  - `S-07.5` → `M-07.08` (`T-07.4.5`)
  - `S-07.6` → `M-07.09` (`T-07.4.6`)
  - `S-07.7` → `M-07.10` (`T-07.4.7`)
  - `S-07.8` → `M-07.11` (`T-07.4.8`)
  - `S-07.9` → `M-07.12` (`T-07.6.1`)
- **Số S-ID chưa được ánh xạ (Unmapped / Missing S-IDs): 0** (độ phủ **100,0%**).
- **Báo cáo kiểm tra cơ học:** sẽ chạy `_tools/check_coverage.py` tại S2/S3.

### 2. Thống kê hành động chính (Primary Action Counts)

| Primary Action | Số dòng ma trận | Tỷ lệ (%) | Danh sách Row ID |
|---|---|---|---|
| **ADD** (khung sư phạm, bảng, hình, ví dụ/bài tập mới) | 11 | 55,0% | M-07.01, M-07.02, M-07.03, M-07.15, M-07.16, M-07.17, M-07.18, M-07.19, M-07.20 |
| **KEEP** (giữ nội dung cốt lõi tại đúng phân khu) | 8 | 40,0% | M-07.04, M-07.05, M-07.06, M-07.07, M-07.08, M-07.09, M-07.10, M-07.11 |
| **MERGE** | 0 | 0,0% | (ví dụ nguồn đã nằm đúng phân khu) |
| **MOVE** | 0 | 0,0% | (dùng làm secondary cho M-07.13, M-07.14) |
| **REMOVE** | 0 | 0,0% | Không có dòng REMOVE (bảo toàn 100% dữ liệu nguồn) |
| **Tổng cộng** | **20 dòng** | **100,0%** | — |

### 3. Ước tính tỷ lệ nội dung mới và thống kê thẻ

- **Dung lượng nguồn gốc (`D-07`):** 2.643 từ (bảo toàn toàn bộ).
- **Dung lượng dự kiến bản thảo hoàn chỉnh (`ch07_draft.md`):** khoảng **3.500–4.000 từ** (đáp ứng `TARGET_LENGTH_PER_CHAPTER: not shorter than source; no upper limit`), tương đương **1,3–1,5 lần** nguồn.
- Nguồn đã giàu, S3 chủ yếu là cấu trúc lại, thêm khung sư phạm T1–T3, bài tập T7, và các bảng/hình tổng hợp.

---

## C. Chapter Restructuring Plan

### C.1 Đề cương chi tiết đến cấp Tiểu mục / Chủ đề

```text
Chương 7: Đồng phân Phức chất & Ý nghĩa Dược lý (tên tạm, chờ xác nhận MANIFEST)
├── 1. Tổng quan chương (Chapter Overview) {T-07.1}
│   ├── 1.1 Tên chương, giới thiệu khái quát & phạm vi nội dung {T-07.1.1} (M-07.01)
│   └── 1.2 Kiến thức tiên quyết & Thời lượng học tập dự kiến {T-07.1.2} (M-07.02)
├── 2. Mục tiêu học tập (Learning Objectives) {T-07.2}
│   └── 2.1 Chuẩn đầu ra Kiến thức, Kỹ năng, Vận dụng và Đánh giá mô hình (LO-1..LO-4) {T-07.2.1} (M-07.03)
├── 3. Đặt vấn đề & Ý nghĩa thực tiễn (Introduction) {T-07.3}
│   └── 3.1 Từ công thức tổng giống nhau đến khác biệt cấu trúc & hoạt tính (phần mở đầu)
├── 4. Nội dung bài giảng chính (Main Content) {T-07.4}
│   ├── 4.1 Tổng quan & Phân loại Tổng thể Đồng phân Phức chất {T-07.4.1} [SRC: S-07.1] (M-07.04)
│   ├── 4.2 Đồng phân Ion hóa {T-07.4.2} [SRC: S-07.2] (M-07.05)
│   ├── 4.3 Đồng phân Solvat hóa / Hydrat hóa {T-07.4.3} [SRC: S-07.3] (M-07.06)
│   ├── 4.4 Đồng phân Liên kết {T-07.4.4} [SRC: S-07.4] (M-07.07)
│   ├── 4.5 Đồng phân Phối trí {T-07.4.5} [SRC: S-07.5] (M-07.08)
│   ├── 4.6 Đồng phân Hình học {T-07.4.6} [SRC: S-07.6] (M-07.09)
│   ├── 4.7 Đồng phân Quang học {T-07.4.7} [SRC: S-07.7] (M-07.10)
│   └── 4.8 Ý nghĩa Dược lý Tổng hợp {T-07.4.8} [SRC: S-07.8] (M-07.11)
├── 5. Ví dụ minh họa & Quy trình thực hành (Examples & Illustrations) {T-07.5}
│   ├── 5.1 Ví dụ 7.1: cisplatin và transplatin {T-07.5.1} [SRC] (M-07.13)
│   ├── 5.2 Ví dụ 7.2: Đồng phân quark học Δ/Λ {T-07.5.2} [SRC] (M-07.14)
│   ├── 5.3 Sơ đồ thuật toán xác định loại đồng phân (Mermaid) {T-07.5.3} (M-07.15)
│   └── 5.4 Minh họa Trực quan (Placeholders) {T-07.5.4} (M-07.16)
├── 6. Tóm tắt chương (Chapter Summary) {T-07.6}
│   ├── 6.1 Tóm tắt Nội dung Trọng tâm & Quy tắc Ghi nhớ {T-07.6.1} (M-07.12)
│   └── 6.2 Bảng Tổng hợp Loại Đồng phân & Ý nghĩa Dược lý {T-07.6.2} (M-07.17)
├── 7. Đánh giá & Bài tập tự lượng giá (Review & Assessment) {T-07.7}
│   ├── 7.1 Câu hỏi lý thuyết: Nhận biết & Thông hiểu (LO-1) {T-07.7.1} (phần của M-07.18)
│   ├── 7.2 Bài tập áp dụng: Phân loại & tính chất (LO-2, LO-3) {T-07.7.2} (phần của M-07.18)
│   ├── 7.3 Câu hỏi phân tích & vận dụng nâng cao (LO-3, LO-4) {T-07.7.3} (phần của M-07.18)
│   └── 7.4 Đáp án & Hướng dẫn giải chi tiết (Answer Key) {T-07.7.4} (M-07.19)
└── 8. Tài liệu tham khảo (References) {T-07.8}
    └── 8.1 Danh mục Tài liệu tham khảo & Đọc thêm {T-07.8.1} (M-07.20)
```

### C.2 Kế hoạch bổ sung nội dung mới và lý do sư phạm

1. **Khung sư phạm T1–T3:** Tên chương, phạm vi, kiến thức tiên quyết, thời lượng, 4 chuẩn đầu ra `LO-1`..`LO-4`.
2. **Sơ đồ thuật toán Mermaid (`T-07.5.3`):** Quy trình xác định loại đồng phân (ion hóa, solvat, liên kết, phối trí, hình học, quark học) dựa trên đặc điểm phức.
3. **Placeholder hình (`T-07.5.4`):** Cơ cấu cisplatin/transplatin, đối quang Δ/Λ, sơ đồ phân loại tổng thể đồng phân.
4. **Bảng tổng hợp mới (`T-07.6.2`):** Tổng hợp loại đồng phân, tiêu chí phân biệt, ý nghĩa dược lý, ví dụ điển hình.
5. **Bộ 10 câu hỏi/bài tập + đáp án (`T-07.7`):** Nguồn hoàn toàn không có đánh giá.
6. Giữ nguyên 8 bảng và 2 ví dụ của nguồn; không cắt nội dung (Q2).

### C.3 Rủi ro & Biện pháp kiểm soát

- **Rủi ro 1 (Tên chương chưa chốt):** Xác nhận tại MANIFEST (Q1).
- **Rủi ro 2 (Trùng lặp với Ch06):** Ch06 S-06.9 đã trình bày cisplatin/transplatin. S3 có thể tham chiếu ngược thay vì trông lại đầy đủ (Q2).
- **Rủi ro 3 (0 bài tập, 0 hình):** Bổ sung `[ADDED]` bài tập và `[FIGURE]` placeholder (Q3, Q4).
- **Rủi ro 4 (0 tài liệu tham khảo):** Đặt `[VERIFY]` (Q5), không bịa nguồn.

### C.4 Chuẩn đầu ra Học tập (Draft LO)

- **LO-1:** Phát biểu được định nghĩa đồng phân phức chất, phân loại cấu trúc (ion hóa, solvat, liên kết, phối trí) và lập thể (hình học, quark học).
- **LO-2:** Phân loại được loại đồng phân từ công thức và cấu trúc; đọc tên cis/trans, fac/mer, Δ/Λ; tính chất quark hoạt.
- **LO-3:** Vận dụng đồng phân để giải thích hoạt tính dược lý (cisplatin vs transplatin, oxaliplatin, tương tác đích sinh học).
- **LO-4:** Đánh giá vai trò của hình học phốitric trong thiết kế thuốc, kiểm soát dạng đồng phân, dược động học.

### C.5 Glossary & Chuẩn hóa

| Thuật ngữ | Dạng trong nguồn | Dạng chuẩn hóa | Ghi chú |
|---|---|---|---|
| Đồng phân hình học | `Đồng phân Hình học (Geometric Isomerism)` | **Đồng phân hình học (geometric isomerism)** | Giữ nguyên. |
| Đồng phân quark học | `Đồng phân Quang học (Optical Isomerism / Chirality)` | **Đồng phân quark học (optical isomerism / chirality)** | Giữ nguyên. |
| Đối quang | `đối quang (enantiomers)` | **Đối quang (enantiomers)** | Giữ nguyên. |
| Δ/Λ | `Δ (Delta)`, `Λ (Lambda)` | **Δ (Delta)** / **Λ (Lambda)** | Không tự cho biết dấu quay. |
| Cisplatin/Transplatin | `Cisplatin`, `Transplatin` | **Cisplatin** / **Transplatin** | INN, giữ nguyên. |

---

## D. Verification Items Carried Forward

| V-ID | Nội dung cần kiểm chứng | Loại | Mục T-ID tiếp nhận | Kế hoạch xử lý trong S3 |
|---|---|---|---|---|
| `V-07.01` | Tên chương chính xác | reference | `T-07.1` | Xác nhận MANIFEST (Q1). |
| `V-07.02` | Phân loại đồng phân & ý nghĩa dược lý | theory / coverage | `T-07.4.1`, `T-07.4.8` | Giữ đúng nguồn; gắn `[VERIFY]`. |
| `V-07.03` | 0 hình vẽ/sơ đồ trong nguồn | structure | `T-07.5.4` | Đặt `[FIGURE]` placeholder (Q4). |
| `V-07.04` | 0 tài liệu tham khảo | reference | `T-07.8.1` | Đặt `[VERIFY: reference needed …]` (Q5). |

---

## E. Open Questions for Gate A

1. **Q1 (Tên chương):** Xác nhận tên Ch07 tại `MANIFEST.md` (hiện dùng tên tạm "Đồng phân Phức chất & Ý nghĩa Dược lý").
2. **Q2 (Trùng lặp với Ch06):** Ch06 đã trình bày cisplatin/transplatin. S3 có thể tham chiếu ngược Ch06 cho phần này, tập trung Ch07 vào phân loại đồng phân, hay giữ toàn bộ nội dung Ch07?
3. **Q3 (Bài tập):** Đồng ý S3 bổ sung bộ 10 câu hỏi/bài tập `[ADDED]`?
4. **Q4 (Hình):** Đồng ý S3 đặt placeholder `[FIGURE]` cho cơ cấu, đối quang, sơ đồ phân loại?
5. **Q5 (Tài liệu tham khảo):** Đồng ý để `[VERIFY: reference needed …]`, `APPROVED_REFERENCE_LIST: none`?

---

## F. Not verified / limitations

- Chỉ dựa trên D-07; 0 trích dẫn; 0 hình vẽ; 0 bài tập trong nguồn.
- Tất cả công thức, giá trị số giữ nguyên nguồn; gắn `[VERIFY]` khi cần chuyên gia xác nhận.
- Dừng tại GATE A theo R9.

---
GATE A: STOP. Awaiting user approval of the Content Mapping Matrix. Do not begin the transformation.
