# ch03_matrix.md — S2 Mapping & Restructuring Plan · Chương 03

**Môn:** Lý dược – Master Lecture Notes · **Stage:** S2 Mapping · **Ngày:** 2026-11-09  
**Nguồn đầu vào:** `00_source_original/ch03_doc-ld-3.html` (D-03), `01_audit/ch03_audit.md`, `_state/carryover_latest.md`  
**Khung cấu trúc:** Template v2 (`T1`–`T8`, `DISCIPLINE_TYPE: STEM-quantitative` theo `00_config.md`)  
**Quy tắc:** Ánh xạ 100% `S-03.1`–`S-03.3` sang `T-03.x.y` không làm mất nội dung; KHÔNG viết bài giảng chi tiết; dừng ở GATE A.

---

## A. Content Mapping Matrix

| Row ID | S-ID(s) | Summary (≤15 words) | Target T-ID and Name | Primary Action | Secondary Actions | Provenance After Transformation | Notes and Risks |
|---|---|---|---|---|---|---|---|
| M-03.01 | — | Tên chuyên đề, giới thiệu khái quát và phạm vi nội dung | `T-03.1` Chuyên đề 3: Bức xạ & Quang phổ học ứng dụng trong kiểm nghiệm thuốc | ADD | — | `[ADDED: structural frame]` | Nguồn `D-03` thiếu T1, tên chương chỉ ở `MANIFEST.md` (Q1). |
| M-03.02 | — | Kiến thức tiên kỳ và thời lượng học tập | `T-03.1.1` / `T-03.1.2` (phần của `T-03.1`) Phạm vi, Kiến thức Tiên quyết & Thời lượng Học tập | ADD | — | `[ADDED: study time estimate]` | Nguồn `D-03` không có phần kiến thức tiên quyết; bổ sung theo `STUDY_TIME_RULE`. |
| M-03.03 | — | Bốn chuẩn đầu ra kiến thức, kỹ năng, vận dụng, đánh giá mô hình | `T-03.2` Mục tiêu Học tập (Learning Objectives `LO-1`..`LO-4`) | ADD | — | `[ADDED: learning objectives]` | Suy ra từ `S-03.1`–`S-03.3`. |
| M-03.04 | S-03.1 | Định luật Beer–Lambert ($A = \varepsilon l C$), đại lượng $A, \varepsilon, l, C$ | `T-03.4.1` Định luật Beer–Lambert & Phân tích định lượng | KEEP | EXPAND, REWRITE | S-03.1 `[SRC]` | Giữ nguyên công thức Beer–Lambert và định nghĩa đại lượng. |
| M-03.05 | S-03.2 | Tiệt khuẩn bằng tia gamma ($^{60}Co$); sóng siêu âm (đồng hóa, chiết xuất, phá vỡ tế bào) | `T-03.4.2` Bức xạ ion hóa & Siêu âm trong Dược phẩm | KEEP | EXPAND, REWRITE | S-03.2 `[SRC]` | Giữ nguyên ứng dụng tiệt khuẩn và siêu âm. |
| M-03.06 | S-03.3 | Ý nghĩa và tác dụng: UV-Vis định lượng, tiệt khuẩn gamma cần thẩm định liều, siêu âm chẩn đoán | `T-03.4.3` Ý nghĩa & Ứng dụng Dược lý | KEEP | EXPAND, MERGE | S-03.3 `[SRC]` | Gộp ý nghĩa các mục 1–2 thành một tiểu mục ứng dụng. |
| M-03.07 | — | Ví dụ định lượng hoạt chất bằng UV-Vis ($A = 0,600$, $\varepsilon = 1,2\times10^4$, $l = 1$ cm) | `T-03.5.1` Ví dụ 1: Định lượng hoạt chất bằng UV-Vis | MERGE | MOVE | S-03.3 (example-box) `[SRC]` | Hộp ví dụ nguồn đã có sẵn, giữ nguyên số liệu. |
| M-03.08 | — | Cách nhớ Beer ($A = \varepsilon l C$, "Ép Lên Cân") | `T-03.5.2` Mẹo nhớ Beer–Lambert & quy ước $A$ | MERGE | MOVE | S-03.3 (callout) `[SRC]` | Callout nguồn đã có sẵn. |
| M-03.09 | — | Sơ đồ Beer–Lambert & ứng dụng tia gamma/siêu âm (Mermaid) | `T-03.5.3` Sơ đồ Beer–Lambert & ứng dụng bức xạ/siêu âm (Mermaid) | ADD | — | `[ADDED: Mermaid flowchart]` | Chuyển quy tắc của S-03.1, S-03.2 thành flowchart; không thêm dữ kiện mới. |
| M-03.10 | — | Placeholder hình Beer–Lambert, tia gamma, siêu âm | `T-03.5.4` Minh họa Trực quan (Placeholders) | ADD | — | `[ADDED: figure placeholders]` + `[FIGURE]` | Nguồn có 0 hình (`I-03.04`); đặt placeholder theo `FIGURE_POLICY`. |
| M-03.11 | — | Tóm tắt nội dung trọng tâm & quy tắc ghi nhớ | `T-03.6.1` Tóm tắt Nội dung Trọng tâm & Quy tắc Ghi nhớ | MERGE | MOVE | S-03.1–S-03.3 `[SRC]` | Gộp Beer–Lambert, tia gamma, siêu âm thành tóm tắt. |
| M-03.12 | — | Bảng tổng hợp công thức, đơn vị, quy ước dấu | `T-03.6.2` Bảng Tổng hợp Công thức & Lưu ý | ADD | — | `[ADDED: summary concept tables]` | Nguồn có 0 bảng (`I-03.05`); bổ sung bảng tổng hợp. |
| M-03.13 | — | Bộ 10 câu hỏi/bài tập tự lượng giá | `T-03.7` Đánh giá & Bài tập tự lượng giá | ADD | — | `[ADDED: exercises]` | Nguồn hoàn toàn không có bài tập (Q3). |
| M-03.14 | — | Đáp án & hướng dẫn giải từng bước | `T-03.7.4` Đáp án & Hướng dẫn Giải Chi tiết (Answer Key) | ADD | — | `[ADDED: step-by-step answer key]` | Mỗi đáp án ghi `LO` và cấp độ; tính Beer–Lambert hiển đủ bước. |
| M-03.15 | — | Danh mục tài liệu tham khảo và ghi chú truy vết theo R4 | `T-03.8.1` Tài liệu Tham khảo & Đọc thêm | ADD | — | `[ADDED: reference section structure]` + `[VERIFY: textbook references needed]` | Nguồn `D-03` có 0 trích dẫn (`I-03.05`, `V-03.04`); chờ người dùng cung cấp giáo trình chuẩn. |

**Tổng cộng:** 15 dòng ma trận.

---

## B. Coverage Check

### 1. Kiểm tra độ phủ S-ID từ Audit Register

- **Danh sách S-ID trong `01_audit/ch03_audit.md` (tổng cộng = 3 S-ID):** `S-03.1`, `S-03.2`, `S-03.3`.
- **Ánh xạ từng S-ID trong Ma trận Mapping (Bảng A):**
  - `S-03.1` → `M-03.04` (`T-03.4.1`)
  - `S-03.2` → `M-03.05` (`T-03.4.2`)
  - `S-03.3` → `M-03.06` (`T-03.4.3`)
- **Số S-ID chưa được ánh xạ (Unmapped / Missing S-IDs): 0** (độ phủ **100,0%**).
- **Báo cáo kiểm tra cơ học:** sẽ chạy `_tools/check_coverage.py` tại S2/S3.

### 2. Thống kê hành động chính (Primary Action Counts)

| Primary Action | Số dòng ma trận | Tỷ lệ (%) | Danh sách Row ID |
|---|---|---|---|
| **ADD** (khung sư pháp, bảng, hình, ví dụ/bài tập mới) | 9 | 60,0% | M-03.01, M-03.02, M-03.03, M-03.09, M-03.10, M-03.11, M-03.12, M-03.13, M-03.14, M-03.15 |
| **KEEP** (giữ nội dung cốt lõi tại đúng phân khu) | 3 | 20,0% | M-03.04, M-03.05, M-03.06 |
| **MERGE** | 0 | 0,0% | (ví dụ nguồn đã nằm đúng phân khu) |
| **MOVE** | 0 | 0,0% | (dùng làm secondary cho M-03.07, M-03.08) |
| **REMOVE** | 0 | 0,0% | Không có dòng REMOVE (bảo toàn 100% dữ liệu nguồn) |
| **Tổng cộng** | **15 dòng** | **100,0%** | — |

### 3. Ước tính tỷ lệ nội dung mới và thống kê thẻ

- **Dung lượng nguồn gốc (`D-03`):** 504 từ (bảo toàn toàn bộ).
- **Dung lượng dự kiến bản thảo hoàn chỉnh (`ch03_draft.md`):** khoảng **4.000–4.500 từ** (đáp ứng `TARGET_LENGTH_PER_CHAPTER: not shorter than source; no upper limit`), tương đương **8–9 lần** nguồn (nguồn rất ngắn, cần mở rộng khung sư pháp và bài tập).
- Nguồn rất ngắn, S3 sẽ mở rộng đáng kể khung sư pháp T1–T3 và bổ sung bài tập T7.

---

## C. Chapter Restructuring Plan

### C.1 Đề cương chi tiết đến cấp Tiểu mục / Chủ đề

```text
Chuyên đề 3: Bức xạ & Quang phổ học ứng dụng trong kiểm nghiệm thuốc (tên tạm, chờ xác nhận MANIFEST)
├── 1. Tổng quan chương (Chapter Overview) {T-03.1}
│   ├── 1.1 Tên chuyên đề, giới thiệu khái quát & phạm vi nội dung {T-03.1.1} (M-03.01)
│   └── 1.2 Kiến thức tiên kỳ & Thời lượng học tập dự kiến {T-03.1.2} (M-03.02)
├── 2. Mục tiêu học tập (Learning Objectives) {T-03.2}
│   └── 2.1 Chuẩn đầu ra Kiến thức, Kỹ năng, Vận dụng và Đánh giá mô hình (LO-1..LO-4) {T-03.2.1} (M-03.03)
├── 3. Đặt vấn đề & Ý nghĩa thực tiễn (Introduction) {T-03.3}
│   └── 3.1 Từ hấp thụ quang đến tiệt khuẩn & siêu âm (phần mở đầu)
├── 4. Nội dung bài giảng chính (Main Content) {T-03.4}
│   ├── 4.1 Định luật Beer–Lambert & Phân tích định lượng {T-03.4.1} [SRC: S-03.1] (M-03.04)
│   ├── 4.2 Bức xạ ion hóa & Siêu âm trong Dược phẩm {T-03.4.2} [SRC: S-03.2] (M-03.05)
│   └── 4.3 Ý nghĩa & Ứng dụng Dược lý {T-03.4.3} [SRC: S-03.3] (M-03.06)
├── 5. Ví dụ minh họa & Quy trình thực hành (Examples & Illustrations) {T-03.5}
│   ├── 5.1 Ví dụ 1: Định lượng hoạt chất bằng UV-Vis {T-03.5.1} [SRC] (M-03.07)
│   ├── 5.2 Mẹo nhớ Beer–Lambert {T-03.5.2} [SRC] (M-03.08)
│   ├── 5.3 Sơ đồ Beer–Lambert & ứng dụng bức xạ/siêu âm (Mermaid) {T-03.5.3} (M-03.09)
│   └── 5.4 Minh họa Trực quan (Placeholders) {T-03.5.4} (M-03.10)
├── 6. Tóm tắt chương (Chapter Summary) {T-03.6}
│   ├── 6.1 Tóm tắt Nội dung Trọng tâm & Quy tắc Ghi nhớ {T-03.6.1} (M-03.11)
│   └── 6.2 Bảng Tổng hợp Công thức & Lưu ý {T-03.6.2} (M-03.12)
├── 7. Đánh giá & Bài tập tự lượng giá (Review & Assessment) {T-03.7}
│   ├── 7.1 Câu hỏi lý thuyết: Nhận biết & Thông hiểu (LO-1) {T-03.7.1} (phần của M-03.13)
│   ├── 7.2 Bài tập áp dụng: Tính toán Beer–Lambert (LO-2, LO-3) {T-03.7.2} (phần của M-03.13)
│   ├── 7.3 Câu hỏi phân tích & vận dụng nâng cao (LO-3, LO-4) {T-03.7.3} (phần của M-03.13)
│   └── 7.4 Đáp án & Hướng dẫn giải chi tiết (Answer Key) {T-03.7.4} (M-03.14)
└── 8. Tài liệu tham khảo (References) {T-03.8}
    └── 8.1 Danh mục Tài liệu tham khảo & Đọc thêm {T-03.8.1} (M-03.15)
```

### C.2 Kế hoạch bổ sung nội dung mới và lý do sư pháp

1. **Khung sư pháp T1–T3:** Tên chuyên đề, giới thiệu, kiến thức tiên kỳ, thời lượng, 4 chuẩn đầu ra `LO-1`..`LO-4`.
2. **Sơ đồ thuật toán Mermaid (`T-03.5.3`):** Quy trình áp dụng Beer–Lambert và ứng dụng tia gamma/siêu âm.
3. **Placeholder hình (`T-03.5.4`):** Beer–Lambert, tia gamma, siêu âm.
4. **Bảng tổng hợp mới (`T-03.6.2`):** Tổng hợp công thức, đơn vị, quy ước dấu của toàn chương.
5. **Bộ 10 câu hỏi/bài tập + đáp án (`T-03.7`):** Nguồn hoàn toàn không có đánh giá.
6. Giữ nguyên 1 công thức và 1 ví dụ của nguồn; không cắt nội dung (Q2).

### C.3 Rủi ro & Biện pháp kiểm soát

- **Rủi ro 1 (Tên chuyên đề chưa chốt):** Xác nhận tại MANIFEST (Q1).
- **Rủi ro 2 (Nguồn rất ngắn, 504 từ):** Nếu mở rộng lên 4.000–4.500 thì tỷ lệ > 8×. Đây là mở rộng khung sư pháp và bài tập, không cắt nội dung nguồn.
- **Rủi ro 3 (0 bài tập, 0 hình):** Bổ sung `[ADDED]` bài tập và `[FIGURE]` placeholder (Q3, Q4).
- **Rủi ro 4 (0 tài liệu tham khảo):** Đặt `[VERIFY]` (Q5), không bịa nguồn.

### C.4 Chuẩn đầu ra Học tập (Draft LO)

- **LO-1:** Phát biểu được định luật Beer–Lambert, các đại lượng $A, \varepsilon, l, C$; ứng dụng bức xạ ion hóa và siêu âm trong dược phẩm.
- **LO-2:** Tính toán được nồng độ từ hấp thụ quang ($C = A/\varepsilon l$); áp dụng Beer–Lambert trong phân tích định lượng.
- **LO-3:** Vận dụng Beer–Lambert để định lượng hoạt chất; giải thích ứng dụng tia gamma (tiệt khuẩn) và siêu âm (đồng hóa, chiết xuất).
- **LO-4:** Đánh giá vai trò của quang phổ học trong kiểm nghiệm thuốc và控制 chất lượng; liên hệ tia gamma/siêu âm với an toàn dược phẩm.

### C.5 Glossary & Chuẩn hóa

| Thuật ngữ | Dạng trong nguồn | Dạng chuẩn hóa | Ghi chú |
|---|---|---|---|
| Định luật Beer–Lambert | `Định luật Lambert - Beer` | **Định luật Beer–Lambert (Beer–Lambert law)** | Giữ nguyên, tên tiếng Anh phổ biến. |
| Độ hấp thụ quang | `Độ hấp thụ quang (Absorbance)` | **Độ hấp thụ quang (absorbance – $A$)** | Giữ nguyên, không đơn vị. |
| Hệ số hấp thụ mol | `Hệ số hấp thụ mol ($\varepsilon$)` | **Hệ số hấp thụ mol (molar absorptivity – $\varepsilon$)** | Giữ nguyên. |
| Tia gamma | `tia gamma ($\gamma$)` | **Tia gamma (gamma ray)** | Giữ nguyên. |
| Cobalt-60 | `Coban-60 ($^{60}Co$)` | **Cobalt-60 ($^{60}Co$)** | Gõ lại tên gốc Cobalt (không phải Coban). |
| Siêu âm | `Sóng siêu âm (Ultrasound)` | **Sóng siêu âm (ultrasound)** | Giữ nguyên. |
| Tiệt khuẩn | `Tiệt trùng` | **Tiệt khuẩn (sterilization)** | Chuẩn hóa thuật ngữ. |

---

## D. Verification Items Carried Forward

| V-ID | Nội dung cần kiểm chứng | Loại | Mục T-ID tiếp nhận | Kế hoạch xử lý trong S3 |
|---|---|---|---|---|
| `V-03.01` | Tên chuyên đề chính xác | reference | `T-03.1` | Xác nhận MANIFEST (Q1). |
| `V-03.02` | Giá trị $\varepsilon = 1,2\times10^4$, $A = 0,600$, $C = 5,0\times10^{-5}$ mol/L | number/formula | `T-03.4.1`, `T-03.5.1` | Giữ đúng nguồn; gắn `[VERIFY]`. |
| `V-03.03` | 0 hình vẽ/sơ đồ trong nguồn | structure | `T-03.5.4` | Đặt `[FIGURE]` placeholder (Q4). |
| `V-03.04` | 0 tài liệu tham khảo | reference | `T-03.8.1` | Đặt `[VERIFY: reference needed …]` (Q5). |

---

## E. Open Questions for Gate A

1. **Q1 (Tên chuyên đề):** Xác nhận tên Ch03 tại `MANIFEST.md` (hiện dùng "Chuyên đề 3: Bức xạ & Quang phổ học ứng dụng trong kiểm nghiệm thuốc").
2. **Q2 (Nguồn ngắn, mở rộng):** Nguồn chỉ 504 từ, 3 mục; S3 mở rộng lên ~4.000–4.500 từ bằng khung sư pháp và bài tập. Đồng ý?
3. **Q3 (Bài tập):** Đồng ý S3 bổ sung bộ 10 câu hỏi/bài tập `[ADDED]`?
4. **Q4 (Hình):** Đồng ý S3 đặt placeholder `[FIGURE]` cho Beer–Lambert, tia gamma, siêu âm?
5. **Q5 (Tài liệu tham khảo):** Đồng ý để `[VERIFY: reference needed …]`, `APPROVED_REFERENCE_LIST: none`?

---

## F. Not verified / limitations

- Chỉ dựa trên D-03; 0 trích dẫn; 0 hình vẽ; 0 bài tập trong nguồn.
- Tất cả công thức, giá trị số giữ nguyên nguồn; gắn `[VERIFY]` khi cần chuyên gia xác nhận.
- Dừng tại GATE A theo R9.

---
GATE A: STOP. Awaiting user approval of the Content Mapping Matrix. Do not begin the transformation.
