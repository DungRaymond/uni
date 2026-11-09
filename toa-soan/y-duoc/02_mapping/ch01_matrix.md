# ch01_matrix.md — S2 Mapping & Restructuring Plan · Chương 01

**Môn:** Y dược – Master Lecture Notes · **Stage:** S2 Mapping · **Ngày:** 2026-11-09  
**Nguồn đầu vào:** `00_source_original/ch01_doc-myd-1.html` (D-01), `01_audit/ch01_audit.md`, `_state/carryover_latest.md`  
**Khung cấu trúc:** Template v2 (`T1`–`T8`, `DISCIPLINE_TYPE: STEM-qualitative` theo `00_config.md`)  
**Quy tắc:** Ánh xạ 100% `S-01.1`–`S-01.3` sang `T-01.x.y` không làm mất nội dung; KHÔNG viết bài giảng chi tiết; dừng ở GATE A.

---

## A. Content Mapping Matrix

| Row ID | S-ID(s) | Summary (≤15 words) | Target T-ID and Name | Primary Action | Secondary Actions | Provenance After Transformation | Notes and Risks |
|---|---|---|---|---|---|---|---|
| M-01.01 | — | Tên chương, giới thiệu khái quát & phạm vi nội dung | `T-01.1` Chuyên đề 1: Sinh lý tim mạch & Hệ thống điều hòa huyết áp thể dịch - thần kinh | ADD | — | `[ADDED: structural frame]` | Nguồn `D-01` thiếu T1, tên chương chỉ ở `MANIFEST.md` (Q1). |
| M-01.02 | — | Kiến thức tiên kỳ và thời lượng học tập | `T-01.1.1` / `T-01.1.2` (phần của `T-01.1`) Phạm vi, Kiến thức Tiên quyết & Thời lượng Học tập | ADD | — | `[ADDED: study time estimate]` | Nguồn `D-01` không có phần kiến thức tiên quyết; bổ sung theo `STUDY_TIME_RULE`. |
| M-01.03 | — | Bốn chuẩn đầu ra kiến thức, kỹ năng, vận dụng, đánh giá mô hình | `T-01.2` Mục tiêu Học tập (Learning Objectives `LO-1`..`LO-4`) | ADD | — | `[ADDED: learning objectives]` | Suy ra từ `S-01.1`–`S-01.3`. |
| M-01.04 | — | Đặt vấn đề & ý nghĩa thực tiễn | `T-01.3` Đặt vấn đề & Ý nghĩa thực tiễn (Introduction) | ADD | — | `[ADDED: introduction frame]` | Nguồn `D-01` thiếu phần mở luận cấu trúc. |
| M-01.05 | S-01.1 | Cung lượng tim $CO = HR \times SV$; $HR \approx 70-80$ nhịp/phút, $SV \approx 60-80$ ml/nhát; $CO$ nghỉ $\approx 4,5-5,5$ L/phút; yếu tố điều hòa $SV$: tiền tải, hậu tải, sức co bóp | `T-01.4.1` Cung Lượng Tim & Các Yếu Tố Điều Hòa | KEEP | EXPAND | S-01.1 `[SRC]` | Giữ nguyên công thức $CO = HR \times SV$ và các yếu tố điều hòa thể tích nhát bóp. |
| M-01.06 | S-01.2 | Phản xạ áp thụ quan (xoang cảnh, quai động mạch chủ → điều chỉnh giao cảm/phó giao cảm trong vài giây). Hệ RAA: Renin → Angiotensin I → (ACE) → Angiotensin II → Aldosterone (giữ $Na^+$ và nước) | `T-01.4.2` Hệ Trục Điều Hòa Huyết Áp Thần Kinh & Nội Tiết | KEEP | EXPAND | S-01.2 `[SRC]` | Giữ nguyên phản xạ áp thụ quan và hệ RAA. |
| M-01.07 | S-01.3 | Cung lượng tim và cơ chế điều hòa giúp duy trì tưới máu, cung cấp oxy, ổn định huyết áp. Giải thích đáp ứng mất máu/mất nước, cơ chế tăng huyết áp, tác dụng thuốc ức chế ACE/chẹn thụ thể angiotensin/lợi tiểu | `T-01.4.3` Ý Nghĩa & Ứng Dụng Lâm Sàng | KEEP | EXPAND | S-01.3 `[SRC]` | Gộp ý nghĩa của mục 1–3 thành tiểu mục ứng dụng lâm sàng. |
| M-01.08 | — | Ví dụ tính cung lượng tim khi nghỉ và khi sốc: $75 \times 70 = 5,25$ L/phút; $110 \times 45 = 4,95$ L/phút | `T-01.5.1` Ví dụ 1: Tính Cung Lượng Tim | MERGE | MOVE | S-01.3 (example-box) `[SRC]` | Hộp ví dụ nguồn đã có sẵn, giữ nguyên số liệu. |
| M-01.09 | — | Cách nhớ: $CO = HR \times SV$ — "nhịp tim × lượng máu mỗi nhịp". Ba yếu tố của $SV$: Tiền tải (Frank-Starling) — Hậu tải — Sức co bóp. Hai tầng điều hòa: Baroreceptor phản ứng "vài giây"; hệ RAA phản ứng "vài giờ đến vài ngày". Dòng RAA: Renin → Angiotensin I → (ACE) → Angiotensin II → Aldosterone → giữ $Na^+$ và nước | `T-01.5.2` Mẹo nhớ Cung Lượng Tim & Điều Hòa Huyết Áp | MERGE | MOVE | S-01.3 (callout) `[SRC]` | Callout nguồn đã có sẵn. |
| M-01.10 | — | Sơ đồ quy trình hệ RAA và phản xạ áp thụ quan (Mermaid) | `T-01.5.3` Sơ Đồ Hệ RAA & Phản Xạ Áp Thụ Quan (Mermaid) | ADD | — | `[ADDED: Mermaid flowchart]` | Chuyển quy tắc của S-01.1, S-01.2 thành flowchart; không thêm dữ kiện mới. |
| M-01.11 | — | Placeholder hình cung lượng tim, hệ RAA, phản xạ áp thụ quan | `T-01.5.4` Minh Họa Trực quan (Placeholders) | ADD | — | `[ADDED: figure placeholders]` + `[FIGURE]` | Nguồn có 0 hình (`I-01.04`); đặt placeholder theo `FIGURE_POLICY`. |
| M-01.12 | — | Tóm tắt nội dung trọng tâm & quy tắc ghi nhớ | `T-01.6.1` Tóm tắt Nội dung Trọng tâm & Quy tắc Ghi nhớ | MERGE | MOVE | S-01.1–S-01.3 `[SRC]` | Gộp cung lượng tim, hệ trục điều hòa, ý nghĩa lâm sàng thành tóm tắt. |
| M-01.13 | — | Bảng tổng hợp công thức, đơn vị, quy ước dấu | `T-01.6.2` Bảng Tổng hợp Công thức & Lưu ý | ADD | — | `[ADDED: summary concept tables]` | Nguồn có 0 bảng (`I-01.05`); bổ sung bảng tổng hợp. |
| M-01.14 | — | Bộ 10 câu hỏi/bài tập tự lượng giá | `T-01.7` Đánh giá & Bài tập tự lượng giá | ADD | — | `[ADDED: exercises]` | Nguồn hoàn toàn không có bài tập (Q3). |
| M-01.15 | — | Đáp án & hướng dẫn giải từng bước | `T-01.7.4` Đáp án & Hướng dẫn Giải Chi tiết (Answer Key) | ADD | — | `[ADDED: step-by-step answer key]` | Mỗi đáp án ghi `LO` và cấp độ; tính $CO$ hiển đủ bước. |
| M-01.16 | — | Danh mục tài liệu tham khảo và ghi chú truy vết theo R4 | `T-01.8.1` Tài liệu Tham khảo & Đọc thêm | ADD | — | `[ADDED: reference section structure]` + `[VERIFY: textbook references needed]` | Nguồn `D-01` có 0 trích dẫn (`I-01.05`, `V-01.04`); chờ người dùng cung cấp giáo trình chuẩn. |

**Tổng cộng:** 16 dòng ma trận.

---

## B. Coverage Check

### 1. Kiểm tra độ phủ S-ID từ Audit Register

- **Danh sách S-ID trong `01_audit/ch01_audit.md` (tổng cộng = 3 S-ID):** `S-01.1`, `S-01.2`, `S-01.3`.
- **Ánh xạ từng S-ID trong Ma trận Mapping (Bảng A):**
  - `S-01.1` → `M-01.05` (`T-01.4.1`)
  - `S-01.2` → `M-01.06` (`T-01.4.2`)
  - `S-01.3` → `M-01.07` (`T-01.4.3`)
- **Số S-ID chưa được ánh xạ (Unmapped / Missing S-IDs): 0** (độ phủ **100,0%**).

### 2. Thống kê hành động chính (Primary Action Counts)

| Primary Action | Số dòng ma trận | Tỷ lệ (%) | Danh sách Row ID |
|---|---|---|---|
| **ADD** (khung sư pháp, bảng, hình, ví dụ/bài tập mới) | 10 | 62,5% | M-01.01, M-01.02, M-01.03, M-01.04, M-01.10, M-01.11, M-01.13, M-01.14, M-01.15, M-01.16 |
| **KEEP** (giữ nội dung cốt lõi tại đúng phân khu) | 3 | 18,8% | M-01.05, M-01.06, M-01.07 |
| **MERGE** | 3 | 18,8% | M-01.08, M-01.09, M-01.12 |
| **MOVE** | 0 | 0,0% | (dùng làm secondary cho M-01.08, M-01.09, M-01.12) |
| **REMOVE** | 0 | 0,0% | Không có dòng REMOVE (bảo toàn 100% dữ liệu nguồn) |
| **Tổng cộng** | **16 dòng** | **100,0%** | — |

### 3. Ước tính tỷ lệ nội dung mới và thống kê thẻ

- **Dung lượng nguồn gốc (`D-01`):** 445 từ (bảo toàn toàn bộ).
- **Dung lượng dự kiến bản thảo hoàn chỉnh (`ch01_draft.md`):** khoảng **3.500–4.000 từ** (đáp ứng `TARGET_LENGTH_PER_CHAPTER: not shorter than source; no upper limit`), tương đương **8–9 lần** nguồn (nguồn rất ngắn, cần mở rộng khung sư pháp và bài tập).

---

## C. Chapter Restructuring Plan

### C.1 Đề cương chi tiết đến cấp Tiểu mục / Chủ đề

```text
Chuyên đề 1: Sinh lý tim mạch & Hệ thống điều hòa huyết áp thể dịch - thần kinh (tên tạm, chờ xác nhận MANIFEST)
├── 1. Tổng quan chương (Chapter Overview) {T-01.1}
│   ├── 1.1 Tên chuyên đề, giới thiệu khái quát & phạm vi nội dung {T-01.1.1} (M-01.01)
│   └── 1.2 Kiến thức tiên kỳ & Thời lượng học tập dự kiến {T-01.1.2} (M-01.02)
├── 2. Mục tiêu học tập (Learning Objectives) {T-01.2}
│   └── 2.1 Chuẩn đầu ra Kiến thức, Kỹ năng, Vận dụng và Đánh giá mô hình (LO-1..LO-4) {T-01.2.1} (M-01.03)
├── 3. Đặt vấn đề & Ý nghĩa thực tiễn (Introduction) {T-01.3}
│   └── 3.1 Tại sao cần hiểu cung lượng tim và điều hòa huyết áp {T-01.3.1} (M-01.04)
├── 4. Nội dung bài giảng chính (Main Content) {T-01.4}
│   ├── 4.1 Cung Lượng Tim & Các Yếu Tố Điều Hòa {T-01.4.1} [SRC: S-01.1] (M-01.05)
│   ├── 4.2 Hệ Trục Điều Hòa Huyết Áp Thần Kinh & Nội Tiết {T-01.4.2} [SRC: S-01.2] (M-01.06)
│   └── 4.3 Ý Nghĩa & Ứng Dụng Lâm Sàng {T-01.4.3} [SRC: S-01.3] (M-01.07)
├── 5. Ví dụ minh họa & Quy trình thực hành (Examples & Illustrations) {T-01.5}
│   ├── 5.1 Ví dụ 1: Tính Cung Lượng Tim {T-01.5.1} [SRC] (M-01.08)
│   ├── 5.2 Mẹo nhớ Cung Lượng Tim & Điều Hòa Huyết Áp {T-01.5.2} [SRC] (M-01.09)
│   ├── 5.3 Sơ Đồ Hệ RAA & Phản Xạ Áp Thụ Quan (Mermaid) {T-01.5.3} (M-01.10)
│   └── 5.4 Minh Họa Trực quan (Placeholders) {T-01.5.4} (M-01.11)
├── 6. Tóm tắt chương (Chapter Summary) {T-01.6}
│   ├── 6.1 Tóm tắt Nội dung Trọng tâm & Quy tắc Ghi nhớ {T-01.6.1} (M-01.12)
│   └── 6.2 Bảng Tổng hợp Công thức & Lưu ý {T-01.6.2} (M-01.13)
├── 7. Đánh giá & Bài tập tự lượng giá (Review & Assessment) {T-01.7}
│   ├── 7.1 Câu hỏi lý thuyết: Nhận biết & Thông hiểu (LO-1) {T-01.7.1} (phần của M-01.14)
│   ├── 7.2 Bài tập áp dụng: Tính toán cung lượng tim (LO-2, LO-3) {T-01.7.2} (phần của M-01.14)
│   ├── 7.3 Câu hỏi phân tích & vận dụng nâng cao (LO-3, LO-4) {T-01.7.3} (phần của M-01.14)
│   └── 7.4 Đáp án & Hướng dẫn giải chi tiết (Answer Key) {T-01.7.4} (M-01.15)
└── 8. Tài liệu tham khảo (References) {T-01.8}
    └── 8.1 Danh mục Tài liệu tham khảo & Đọc thêm {T-01.8.1} (M-01.16)
```

### C.2 Kế hoạch bổ sung nội dung mới và lý do sư pháp

1. **Khung sư pháp T1–T3:** Tên chương, giới thiệu, kiến thức tiên kỳ, thời lượng học tập, 4 chuẩn đầu ra `LO-1`..`LO-4`.
2. **Sơ đồ thuật toán Mermaid (`T-01.5.3`):** Hệ RAA và phản xạ áp thụ quan.
3. **Placeholder hình (`T-01.5.4`):** Cung lượng tim, hệ RAA, phản xạ áp thụ quan.
4. **Bảng tổng hợp mới (`T-01.6.2`):** Tổng hợp công thức, đơn vị, lưu ý lâm sàng.
5. **Bộ 10 câu hỏi/bài tập + đáp án (`T-01.7`):** Nguồn hoàn toàn không có đánh giá.
6. Giữ nguyên toàn bộ nội dung nguồn; không cắt nội dung (Q2).

### C.3 Rủi ro & Biện pháp kiểm soát

- **Rủi ro 1 (Tên chương chưa chốt):** Xác nhận tại MANIFEST (Q1).
- **Rủi ro 2 (Nguồn rất ngắn, 445 từ):** Nếu mở rộng lên 3.500–4.000 thì tỷ lệ 8–9×. Đây là mở rộng khung sư pháp và bài tập, không cắt nội dung nguồn.
- **Rủi ro 3 (0 bài tập, 0 hình):** Bổ sung `[ADDED]` bài tập và `[FIGURE]` placeholder (Q3, Q4).
- **Rủi ro 4 (0 tài liệu tham khảo):** Đặt `[VERIFY]` (Q5), không bịa nguồn.

### C.4 Chuẩn đầu ra Học tập (Draft LO)

- **`LO-1` (Kiến thức):** Phát biểu công thức cung lượng tim $CO = HR \times SV$; phân biệt hồi suất tim và thể tích nhát bóp; liệt kê yếu tố điều hòa thể tích nhát bóp (tiền tải, hậu tải, sức co bóp).
- **`LO-2` (Kỹ năng):** Tính toán cung lượng tim từ hồi suất tim và thể tích nhát bóp; phân biệt phản xạ áp thụ quan (ngắn hạn) và hệ RAA (dài hạn).
- **`LO-3` (Vận dụng):** Giải thích cơ chế tăng huyết áp và tác dụng của thuốc ức chế ACE/chẹn thụ thể angiotensin/lợi tiểu trên hệ điều hòa huyết áp.
- **`LO-4` (Đánh giá mô hình):** Đánh giá vai trò của cung lượng tim và hệ điều hòa huyết áp trong duy trì tưới máu, cung cấp oxy và ổn định huyết áp `[DOMAIN_RULES: chỉ giải thích cơ chế, không liều/chỉ định]`.

### C.5 Glossary & Chuẩn hóa

| Thuật ngữ | Dạng trong nguồn | Dạng chuẩn hóa | Ghi chú |
|---|---|---|---|
| Cung lượng tim | `Cung lượng tim` | **Cung lượng tim (cardiac output – $CO$)** | Giữ nguyên. |
| Hồi suất tim | `Hồi suất tim` | **Hồi suất tim (heart rate – $HR$)** | Giữ nguyên. |
| Thể tích nhát bóp | `Thể tích nhát bóp` | **Thể tích nhát bóp (stroke volume – $SV$)** | Giữ nguyên. |
| Tiền tải | `Tiền tải` | **Tiền tải (preload)** | Giữ nguyên. |
| Hậu tải | `Hậu tải` | **Hậu tải (afterload)** | Giữ nguyên. |
| Sức co bóp cơ tim | `Sức co bóp cơ tim` | **Sức co bóp cơ tim (contractility)** | Giữ nguyên. |
| Phản xạ áp thụ quan | `Phản xạ áp thụ quan` | **Phản xạ áp thụ quan (baroreceptor reflex)** | Giữ nguyên. |
| Hệ Renin-Angiotensin-Aldosterone | `Hệ Renin - Angiotensin - Aldosterone (Hệ RAA)` | **Hệ Renin-Angiotensin-Aldosterone (RAAS)** | Giữ nguyên. |
| Angiotensin II | `Angiotensin II` | **Angiotensin II** | Giữ nguyên. |
| Aldosterone | `Aldosterone` | **Aldosterone** | Giữ nguyên. |
| Thuốc ức chế ACE | `thuốc ức chế ACE` | **Thuốc ức chế ACE (ACE inhibitor)** | Giữ nguyên. |
| Chẹn thụ thể angiotensin | `chẹn thụ thể angiotensin` | **Chẹn thụ thể angiotensin (angiotensin receptor blocker)** | Giữ nguyên. |
| Lợi tiểu | `lợi tiểu` | **Lợi tiểu (diuretic)** | Giữ nguyên. |

---

## D. Verification Items Carried Forward

| V-ID | Nội dung cần kiểm chứng | Loại | Mục T-ID tiếp nhận | Kế hoạch xử lý trong S3 |
|---|---|---|---|---|
| `V-01.01` | Tên chương chính xác | reference | `T-01.1` | Xác nhận MANIFEST (Q1). |
| `V-01.02` | Giá trị $CO$, $HR$, $SV$ nghỉ | number | `T-01.4.1`, `T-01.5.1` | Giữ đúng nguồn; gắn `[VERIFY]`. |
| `V-01.03` | 0 hình vẽ/sơ đồ trong nguồn | structure | `T-01.5.4` | Đặt `[FIGURE]` placeholder (Q4). |
| `V-01.04` | 0 tài liệu tham khảo | reference | `T-01.8.1` | Đặt `[VERIFY: reference needed …]` (Q5). |

---

## E. Open Questions for Gate A

1. **Q1 (Tên chương):** Xác nhận tên Ch01 tại `MANIFEST.md` (hiện dùng "Chuyên đề 1: Sinh lý tim mạch & Hệ thống điều hòa huyết áp thể dịch - thần kinh").
2. **Q2 (Nguồn rất ngắn, mở rộng):** Nguồn chỉ 445 từ, 3 mục; S3 mở rộng lên ~3.500–4.000 bằng khung sư pháp và bài tập. Đồng ý?
3. **Q3 (Bài tập):** Đồng ý S3 bổ sung bộ 10 câu hỏi/bài tập `[ADDED]`?
4. **Q4 (Hình):** Đồng ý S3 đặt placeholder `[FIGURE]` cho cung lượng tim, hệ RAA, phản xạ áp thụ quan?
5. **Q5 (Tài liệu tham khảo):** Đồng ý để `[VERIFY: reference needed …]`, `APPROVED_REFERENCE_LIST: none`?

---

## F. Not verified / limitations

- Chỉ dựa trên D-01; 0 trích dẫn; 0 hình vẽ; 0 bài tập trong nguồn.
- Tất cả giá trị số giữ nguyên nguồn; gắn `[VERIFY]` khi cần chuyên gia xác nhận.
- Dừng tại GATE A theo R9.

---

GATE A: STOP. Awaiting user approval of the Content Mapping Matrix. Do not begin the transformation.