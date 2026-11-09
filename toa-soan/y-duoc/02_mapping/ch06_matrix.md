# ch06_matrix.md — S2 Mapping & Restructuring Plan · Chương 06

**Môn:** Y dược – Master Lecture Notes · **Stage:** S2 Mapping · **Ngày:** 2026-11-09  
**Nguồn đầu vào:** `00_source_original/ch06_doc-myd-6.html` (D-06), `01_audit/ch06_audit.md`, `_state/carryover_latest.md`  
**Khung cấu trúc:** Template v2 (`T1`–`T8`, `DISCIPLINE_TYPE: STEM-qualitative` theo `00_config.md`)  
**Quy tắc:** Ánh xạ 100% `S-06.1`–`S-06.3` sang `T-06.x.y` không làm mất nội dung; KHÔNG viết bài giảng chi tiết; dừng ở GATE A.

---

## A. Content Mapping Matrix

| Row ID | S-ID(s) | Summary (≤15 words) | Target T-ID and Name | Primary Action | Secondary Actions | Provenance After Transformation | Notes and Risks |
|---|---|---|---|---|---|---|---|
| M-06.01 | — | Tên chương, giới thiệu khái quát & phạm vi nội dung | `T-06.1` Chương 6: Thực hành đo huyết áp và diễn giải kết quả | ADD | — | `[ADDED: structural frame]` | Nguồn `D-06` thiếu T1, tên chương chỉ ở `MANIFEST.md` (Q1). |
| M-06.02 | — | Kiến thức tiên kỳ và thời lượng học tập | `T-06.1.1` / `T-06.1.2` (phần của `T-06.1`) Phạm vi, Kiến thức Tiên quyết & Thời lượng Học tập | ADD | — | `[ADDED: study time estimate]` | Nguồn `D-06` không có phần kiến thức tiên quyết; bổ sung theo `STUDY_TIME_RULE`. |
| M-06.03 | — | Bốn chuẩn đầu ra kiến thức, kỹ năng, vận dụng, đánh giá mô hình | `T-06.2` Mục tiêu Học tập (Learning Objectives `LO-1`..`LO-4`) | ADD | — | `[ADDED: learning objectives]` | Suy ra từ `S-06.1`–`S-06.3`. |
| M-06.04 | — | Đặt vấn đề & ý nghĩa thực tiễn | `T-06.3` Đặt vấn đề & Ý nghĩa thực tiễn (Introduction) | ADD | — | `[ADDED: introduction frame]` | Nguồn `D-06` thiếu phần mở luận cấu trúc. |
| M-06.05 | S-06.1 | Quy chuẩn đo huyết áp: nghỉ 5 phút, tư thế ngồi tựa, băng quấn đúng cỡ, tay ngang mức tim, đo ít nhất 2 lần cách 1 phút | `T-06.4.1` Chuẩn Bị & Thao Tác Đo Huyết Áp | KEEP | EXPAND | S-06.1 `[SRC]` | Giữ nguyên 4 bước chuẩn bị; bổ sung lý do từng bước. |
| M-06.06 | S-06.2 | Huyết áp tâm thu/tâm trương; sai số do băng quấn nhỏ, tay thấp hơn tim, nói chuyện, lo âu; chẩn đoán dựa trên đo lặp lại | `T-06.4.2` Ý Nghĩa & Sai Số Kỹ Thuật Đo Huyết Áp | KEEP | EXPAND | S-06.2 `[SRC]` | Giữ nguyên phân biệt tâm thu/tâm trương và các yếu tố gây sai số. |
| M-06.07 | S-06.3 | Đo đúng giúp phát hiện tăng huyết áp, đánh giá nguy cơ tim mạch và đáp ứng điều trị | `T-06.4.3` Ý Nghĩa & Tác Dụng Lâm Sàng | KEEP | EXPAND | S-06.3 `[SRC]` | Gộp ý nghĩa của mục 1–3 thành tiểu mục ứng dụng lâm sàng. |
| M-06.08 | — | Ví dụ đo lặp lại: 150/95 → 132/84 → 130/82 mmHg | `T-06.5.1` Ví dụ 1: Một Lần Đo Cao Chưa Phải Tăng Huyết Áp | MERGE | MOVE | S-06.3 (example-box) `[SRC]` | Hộp ví dụ nguồn đã có sẵn, giữ nguyên số liệu. |
| M-06.09 | — | Cách nhớ 4 bước "Nghỉ — Thế — Quấn — Lặp"; 3 sai số hay gặp; một con số không phải chẩn đoán | `T-06.5.2` Mẹo nhớ Đo Huyết Áp | MERGE | MOVE | S-06.2 (callout) `[SRC]` | Callout nguồn đã có sẵn. |
| M-06.10 | — | Sơ đồ quy trình đo huyết áp chuẩn (Mermaid) | `T-06.5.3` Sơ Quy Trình Đo Huyết Áp Chuẩn (Mermaid) | ADD | — | `[ADDED: Mermaid flowchart]` | Chuyển quy tắc của S-06.1 thành flowchart; không thêm dữ kiện mới. |
| M-06.11 | — | Placeholder hình thiết bị đo huyết áp, tư thế đúng/sai, băng quấn đúng cỡ | `T-06.5.4` Minh Họa Trực quan (Placeholders) | ADD | — | `[ADDED: figure placeholders]` + `[FIGURE]` | Nguồn có 0 hình (`I-06.04`); đặt placeholder theo `FIGURE_POLICY`. |
| M-06.12 | — | Tóm tắt nội dung trọng tâm & quy tắc ghi nhớ | `T-06.6.1` Tóm tắt Nội dung Trọng tâm & Quy tắc Ghi nhớ | MERGE | MOVE | S-06.1–S-06.3 `[SRC]` | Gộp quy chuẩn đo, sai số, ý nghĩa lâm sàng thành tóm tắt. |
| M-06.13 | — | Bảng tổng hợp quy chuẩn, đơn vị, lưu ý | `T-06.6.2` Bảng Tổng hợp Quy Chuẩn & Lưu ý | ADD | — | `[ADDED: summary concept tables]` | Nguồn có 0 bảng (`I-06.05`); bổ sung bảng tổng hợp. |
| M-06.14 | — | Bộ 10 câu hỏi/bài tập tự lượng giá | `T-06.7` Đánh giá & Bài tập tự lượng giá | ADD | — | `[ADDED: exercises]` | Nguồn hoàn toàn không có bài tập (Q3). |
| M-06.15 | — | Đáp án & hướng dẫn giải từng bước | `T-06.7.4` Đáp án & Hướng dẫn Giải Chi tiết (Answer Key) | ADD | — | `[ADDED: step-by-step answer key]` | Mỗi đáp án ghi `LO` và cấp độ; tính toán mmHg hiển đủ bước. |
| M-06.16 | — | Danh mục tài liệu tham khảo và ghi chú truy vết theo R4 | `T-06.8.1` Tài liệu Tham khảo & Đọc thêm | ADD | — | `[ADDED: reference section structure]` + `[VERIFY: textbook references needed]` | Nguồn `D-06` có 0 trích dẫn (`I-06.05`, `V-06.04`); chờ người dùng cung cấp giáo trình chuẩn. |

**Tổng cộng:** 16 dòng ma trận.

---

## B. Coverage Check

### 1. Kiểm tra độ phủ S-ID từ Audit Register

- **Danh sách S-ID trong `01_audit/ch06_audit.md` (tổng cộng = 3 S-ID):** `S-06.1`, `S-06.2`, `S-06.3`.
- **Ánh xạ từng S-ID trong Ma trận Mapping (Bảng A):**
  - `S-06.1` → `M-06.05` (`T-06.4.1`)
  - `S-06.2` → `M-06.06` (`T-06.4.2`)
  - `S-06.3` → `M-06.07` (`T-06.4.3`)
- **Số S-ID chưa được ánh xạ (Unmapped / Missing S-IDs): 0** (độ phủ **100,0%**).

### 2. Thống kê hành động chính (Primary Action Counts)

| Primary Action | Số dòng ma trận | Tỷ lệ (%) | Danh sách Row ID |
|---|---|---|---|
| **ADD** (khung sư pháp, bảng, hình, ví dụ/bài tập mới) | 10 | 62,5% | M-06.01, M-06.02, M-06.03, M-06.04, M-06.10, M-06.11, M-06.13, M-06.14, M-06.15, M-06.16 |
| **KEEP** (giữ nội dung cốt lõi tại đúng phân khu) | 3 | 18,8% | M-06.05, M-06.06, M-06.07 |
| **MERGE** | 3 | 18,8% | M-06.08, M-06.09, M-06.12 |
| **MOVE** | 0 | 0,0% | (dùng làm secondary cho M-06.08, M-06.09, M-06.12) |
| **REMOVE** | 0 | 0,0% | Không có dòng REMOVE (bảo toàn 100% dữ liệu nguồn) |
| **Tổng cộng** | **16 dòng** | **100,0%** | — |

### 3. Ước tính tỷ lệ nội dung mới và thống kê thẻ

- **Dung lượng nguồn gốc (`D-06`):** 872 từ (bảo toàn toàn bộ).
- **Dung lượng dự kiến bản thảo hoàn chỉnh (`ch06_draft.md`):** khoảng **3.500–4.000 từ** (đáp ứng `TARGET_LENGTH_PER_CHAPTER: not shorter than source; no upper limit`), tương đương **4–4,5 lần** nguồn (nguồn rất ngắn, cần mở rộng khung sư pháp và bài tập).

---

## C. Chapter Restructuring Plan

### C.1 Đề cương chi tiết đến cấp Tiểu mục / Chủ đề

```text
Chương 6: Thực hành đo huyết áp và diễn giải kết quả (tên tạm, chờ xác nhận MANIFEST)
├── 1. Tổng quan chương (Chapter Overview) {T-06.1}
│   ├── 1.1 Tên chuyên đề, giới thiệu khái quát & phạm vi nội dung {T-06.1.1} (M-06.01)
│   └── 1.2 Kiến thức tiên kỳ & Thời lượng học tập dự kiến {T-06.1.2} (M-06.02)
├── 2. Mục tiêu học tập (Learning Objectives) {T-06.2}
│   └── 2.1 Chuẩn đầu ra Kiến thức, Kỹ năng, Vận dụng và Đánh giá mô hình (LO-1..LO-4) {T-06.2.1} (M-06.03)
├── 3. Đặt vấn đề & Ý nghĩa thực tiễn (Introduction) {T-06.3}
│   └── 3.1 Tại sao cần đo huyết áp đúng quy trình {T-06.3.1} (M-06.04)
├── 4. Nội dung bài giảng chính (Main Content) {T-06.4}
│   ├── 4.1 Chuẩn Bị & Thao Tác Đo Huyết Áp {T-06.4.1} [SRC: S-06.1] (M-06.05)
│   ├── 4.2 Ý Nghĩa & Sai Số Kỹ Thuật Đo Huyết Áp {T-06.4.2} [SRC: S-06.2] (M-06.06)
│   └── 4.3 Ý Nghĩa & Tác Dụng Lâm Sàng {T-06.4.3} [SRC: S-06.3] (M-06.07)
├── 5. Ví dụ minh họa & Quy trình thực hành (Examples & Illustrations) {T-06.5}
│   ├── 5.1 Ví dụ 1: Một Lần Đo Cao Chưa Phải Tăng Huyết Áp {T-06.5.1} [SRC] (M-06.08)
│   ├── 5.2 Mẹo nhớ Đo Huyết Áp {T-06.5.2} [SRC] (M-06.09)
│   ├── 5.3 Sơ Quy Trình Đo Huyết Áp Chuẩn (Mermaid) {T-06.5.3} (M-06.10)
│   └── 5.4 Minh Họa Trực quan (Placeholders) {T-06.5.4} (M-06.11)
├── 6. Tóm tắt chương (Chapter Summary) {T-06.6}
│   ├── 6.1 Tóm tắt Nội dung Trọng tâm & Quy tắc Ghi nhớ {T-06.6.1} (M-06.12)
│   └── 6.2 Bảng Tổng hợp Quy Chuẩn & Lưu ý {T-06.6.2} (M-06.13)
├── 7. Đánh giá & Bài tập tự lượng giá (Review & Assessment) {T-06.7}
│   ├── 7.1 Câu hỏi lý thuyết: Nhận biết & Thông hiểu (LO-1) {T-06.7.1} (phần của M-06.14)
│   ├── 7.2 Bài tập áp dụng: Đọc chỉ số & phân loại huyết áp (LO-2, LO-3) {T-06.7.2} (phần của M-06.14)
│   ├── 7.3 Câu hỏi phân tích & vận dụng nâng cao (LO-3, LO-4) {T-06.7.3} (phần của M-06.14)
│   └── 7.4 Đáp án & Hướng dẫn giải chi tiết (Answer Key) {T-06.7.4} (M-06.15)
└── 8. Tài liệu tham khảo (References) {T-06.8}
    └── 8.1 Danh mục Tài liệu tham khảo & Đọc thêm {T-06.8.1} (M-06.16)
```

### C.2 Kế hoạch bổ sung nội dung mới và lý do sư pháp

1. **Khung sư pháp T1–T3:** Tên chương, giới thiệu, kiến thức tiên kỳ, thời lượng học tập, 4 chuẩn đầu ra `LO-1`..`LO-4`.
2. **Sơ đồ thuật toán Mermaid (`T-06.5.3`):** Quy trình đo huyết áp chuẩn 4 bước.
3. **Placeholder hình (`T-06.5.4`):** Thiết bị đo huyết áp, tư thế đúng/sai, băng quấn đúng cỡ.
4. **Bảng tổng hợp mới (`T-06.6.2`):** Tổng hợp quy chuẩn đo, đơn vị mmHg, lưu ý lâm sàng.
5. **Bộ 10 câu hỏi/bài tập + đáp án (`T-06.7`):** Nguồn hoàn toàn không có đánh giá.
6. Giữ nguyên toàn bộ nội dung nguồn; không cắt nội dung (Q2).

### C.3 Rủi ro & Biện pháp kiểm soát

- **Rủi ro 1 (Tên chương chưa chốt):** Xác nhận tại MANIFEST (Q1).
- **Rủi ro 2 (Nguồn rất ngắn, 872 từ):** Nếu mở rộng lên 3.500–4.000 thì tỷ lệ 4–4,5×. Đây là mở rộng khung sư pháp và bài tập, không cắt nội dung nguồn.
- **Rủi ro 3 (0 bài tập, 0 hình):** Bổ sung `[ADDED]` bài tập và `[FIGURE]` placeholder (Q3, Q4).
- **Rủi ro 4 (0 tài liệu tham khảo):** Đặt `[VERIFY]` (Q5), không bịa nguồn.

### C.4 Chuẩn đầu ra Học tập (Draft LO)

- **`LO-1` (Kiến thức):** Phát biểu quy chuẩn chuẩn bị và thao tác đo huyết áp (nghỉ 5 phút, tư thế ngồi tựa, băng quấn đúng cỡ, tay ngang mức tim, ít nhất 2 lần đo cách 1 phút); phân biệt huyết áp tâm thu và tâm trương; liệt kê các sai số kỹ thuật phổ biến.
- **`LO-2` (Kỹ năng):** Đọc và ghi lại chỉ số huyết áp tâm thu/tâm trương đơn vị mmHg; phân loại mức độ tăng huyết áp dựa trên các lần đo lặp lại.
- **`LO-3` (Vận dụng):** Giải thích tại sao đo lặp lại cần thiết; liên hệ kết quả đo với nguy cơ tim mạch và đáp ứng điều trị.
- **`LO-4` (Đánh giá mô hình):** Đánh giá vai trò của chuẩn hóa tư thế, băng quấn và số lần đo trong việc giảm sai số, tránh chẩn đoán hoặc thay đổi thuốc dựa trên kết quả không đáng tin cậy.

### C.5 Glossary & Chuẩn hóa

| Thuật ngữ | Dạng trong nguồn | Dạng chuẩn hóa | Ghi chú |
|---|---|---|---|
| Huyết áp tâm thu | `Huyết áp tâm thu` | **Huyết áp tâm thu (systolic blood pressure)** | Giữ nguyên. |
| Huyết áp tâm trương | `Huyết áp tâm trương` | **Huyết áp tâm trương (diastolic blood pressure)** | Giữ nguyên. |
| Tăng huyết áp | `tăng huyết áp` | **Tăng huyết áp (hypertension)** | Giữ nguyên. |
| Băng quấn | `băng quấn` | **Băng quấn (blood pressure cuff)** | Giữ nguyên. |
| Cao giả | `cao giả` | **Huyết áp cao giả (pseudohypertension)** | Giữ nguyên. |
| Đo lặp lại | `đo lặp lại` | **Đo lặp lại (repeat measurement)** | Giữ nguyên. |

---

## D. Verification Items Carried Forward

| V-ID | Nội dung cần kiểm chứng | Loại | Mục T-ID tiếp nhận | Kế hoạch xử lý trong S3 |
|---|---|---|---|---|
| `V-06.01` | Tên chương chính xác | reference | `T-06.1` | Xác nhận MANIFEST (Q1). |
| `V-06.02` | Ngưỡng tăng huyết áp & giá trị mmHg chuẩn | number | `T-06.4.2`, `T-06.7.2` | Giữ đúng nguồn; gắn `[VERIFY]`. |
| `V-06.03` | 0 hình vẽ/sơ đồ trong nguồn | structure | `T-06.5.4` | Đặt `[FIGURE]` placeholder (Q4). |
| `V-06.04` | 0 tài liệu tham khảo | reference | `T-06.8.1` | Đặt `[VERIFY: reference needed …]` (Q5). |

---

## E. Open Questions for Gate A

1. **Q1 (Tên chương):** Xác nhận tên Ch06 tại `MANIFEST.md` (hiện dùng "Thực hành đo huyết áp và diễn giải kết quả").
2. **Q2 (Nguồn ngắn, mở rộng):** Nguồn chỉ 872 từ, 3 mục; S3 mở rộng lên ~3.500–4.000 bằng khung sư pháp và bài tập. Đồng ý?
3. **Q3 (Bài tập):** Đồng ý S3 bổ sung bộ 10 câu hỏi/bài tập `[ADDED]`?
4. **Q4 (Hình):** Đồng ý S3 đặt placeholder `[FIGURE]` cho thiết bị đo huyết áp, tư thế đúng/sai, băng quấn đúng cỡ?
5. **Q5 (Tài liệu tham khảo):** Đồng ý để `[VERIFY: reference needed …]`, `APPROVED_REFERENCE_LIST: none`?

---

## F. Not verified / limitations

- Chỉ dựa trên D-06; 0 trích dẫn; 0 hình vẽ; 0 bài tập trong nguồn.
- Tất cả giá trị số giữ nguyên nguồn; gắn `[VERIFY]` khi cần chuyên gia xác nhận.
- Dừng tại GATE A theo R9.

---

GATE A: STOP. Awaiting user approval of the Content Mapping Matrix. Do not begin the transformation.