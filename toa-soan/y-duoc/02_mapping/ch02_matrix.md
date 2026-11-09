# ch02_matrix.md — S2 Mapping & Restructuring Plan · Chương 02

**Môn:** Y dược – Master Lecture Notes · **Stage:** S2 Mapping · **Ngày:** 2026-11-09  
**Nguồn đầu vào:** `00_source_original/ch02_doc-myd-2.html` (D-02), `01_audit/ch02_audit.md`, `_state/carryover_latest.md`  
**Khung cấu trúc:** Template v2 (`T1`–`T8`, `DISCIPLINE_TYPE: STEM-qualitative` theo `00_config.md`)  
**Quy tắc:** Ánh xạ 100% `S-02.1`–`S-02.3` sang `T-02.x.y` không làm mất nội dung; KHÔNG viết bài giảng chi tiết; dừng ở GATE A.

---

## A. Content Mapping Matrix

| Row ID | S-ID(s) | Summary (≤15 words) | Target T-ID and Name | Primary Action | Secondary Actions | Provenance After Transformation | Notes and Risks |
|---|---|---|---|---|---|---|---|
| M-02.01 | — | Tên chương, giới thiệu khái quát & phạm vi nội dung | `T-02.1` Chuyên đề 2: Các thông tin Dược động học cơ bản (Hệ ADME) | ADD | — | `[ADDED: structural frame]` | Nguồn `D-02` thiếu T1, tên chương chỉ ở `MANIFEST.md` (Q1). |
| M-02.02 | — | Kiến thức tiên kỳ và thời lượng học tập | `T-02.1.1` / `T-02.1.2` (phần của `T-02.1`) Phạm vi, Kiến thức Tiên quyết & Thời lượng Học tập | ADD | — | `[ADDED: study time estimate]` | Nguồn `D-02` không có phần kiến thức tiên quyết; bổ sung theo `STUDY_TIME_RULE`. |
| M-02.03 | — | Bốn chuẩn đầu ra kiến thức, kỹ năng, vận dụng, đánh giá mô hình | `T-02.2` Mục tiêu Học tập (Learning Objectives `LO-1`..`LO-4`) | ADD | — | `[ADDED: learning objectives]` | Suy ra từ `S-02.1`–`S-02.3`. |
| M-02.04 | — | Đặt vấn đề & ý nghĩa thực tiễn | `T-02.3` Đặt vấn đề & Ý nghĩa thực tiễn (Introduction) | ADD | — | `[ADDED: introduction frame]` | Nguồn `D-02` thiếu phần mở luận cấu trúc. |
| M-02.05 | S-02.1 | Sinh khả dụng $F = AUC_{đường\ dùng}/AUC_{tiêm\ tĩnh\ mạch} \times 100\%$; $IV = 100\%$; $PO$ chịu ảnh hưởng first-pass effect qua gan | `T-02.4.1` Hấp Thu & Sinh Khả Dụng | KEEP | EXPAND | S-02.1 `[SRC]` | Giữ nguyên công thức sinh khả dụng và phân biệt đường dùng IV/PO. |
| M-02.06 | S-02.2 | Thể tích phân bố $V_d = D/C_0$; $V_d$ nhỏ ($< 5$ L): trong lòng mạch, gắn albumin; $V_d$ lớn ($> 40$ L): phân bố rộng mô/khoang nội bào | `T-02.4.2` Phân Bố & Thể Tích Phân Bố | KEEP | EXPAND | S-02.2 `[SRC]` | Giữ nguyên công thức $V_d = D/C_0$ và phân biệt $V_d$ nhỏ/lớn. |
| M-02.07 | S-02.3 | Thời gian bán thải $t_{1/2} = 0,693 \cdot V_d/Cl$; $Cl$ = độ thanh thải; cần $\approx 5 \times t_{1/2}$ để đạt $C_{ss}$ và thải $> 97\%$ thuốc | `T-02.4.3` Thải Trừ & Thời Gian Bán Thải | KEEP | EXPAND | S-02.3 `[SRC]` | Giữ nguyên công thức $t_{1/2}$ và quy tắc $5 \times t_{1/2}$. |
| M-02.08 | — | Ví dụ tính $V_d$, $t_{1/2}$ và chỉnh liều theo thận: $V_d = 500/25 = 20$ L; $t_{1/2} = 0,693 \times 40/4 \approx 6,9$ giờ; suy thận $Cl = 1$ L/giờ → $t_{1/2} \approx 28$ giờ | `T-02.5.1` Ví dụ 1: Tính $V_d$, $t_{1/2}$ & Chỉnh Liều Theo Thận | MERGE | MOVE | S-02.3 (example-box) `[SRC]` | Hộp ví dụ nguồn đã có sẵn, giữ nguyên số liệu. |
| M-02.09 | — | Cách nhớ: ADME = Hấp thu — Phân bố — Chuyển hóa — Thải trừ; $V_d$ nhỏ (vài L): thuốc ở lòng mạch, gắn albumin nhiều; $V_d$ lớn (hàng chục L): thuốc vào mô, mỡ. Quy tắc 5: $5 \times t_{1/2}$ để đạt $C_{ss}$ và cũng $5 \times t_{1/2}$ để thải $> 97\%$ thuốc. Thận yếu: $Cl$ giảm → $t_{1/2}$ dài ra → giảm liều hoặc giãn khoảng cách | `T-02.5.2` Mẹo nhớ ADME & Thông Số Dược Động Học | MERGE | MOVE | S-02.2 (callout) `[SRC]` | Callout nguồn đã có sẵn. |
| M-02.10 | — | Sơ đồ quy trình ADME (Hấp thu → Phân bố → Chuyển hóa → Thải trừ) (Mermaid) | `T-02.5.3` Sơ Đồ Quy Trình ADME (Mermaid) | ADD | — | `[ADDED: Mermaid flowchart]` | Chuyển quy tắc của S-02.1, S-02.2, S-02.3 thành flowchart; không thêm dữ kiện mới. |
| M-02.11 | — | Placeholder hình đường cong nồng độ-thời gian, thể tích phân bố, độ thanh thải | `T-02.5.4` Minh Họa Trực quan (Placeholders) | ADD | — | `[ADDED: figure placeholders]` + `[FIGURE]` | Nguồn có 0 hình (`I-02.04`); đặt placeholder theo `FIGURE_POLICY`. |
| M-02.12 | — | Tóm tắt nội dung trọng tâm & quy tắc ghi nhớ | `T-02.6.1` Tóm tắt Nội dung Trọng tâm & Quy tắc Ghi nhớ | MERGE | MOVE | S-02.1–S-02.3 `[SRC]` | Gộp hấp thu, phân bố, thải trừ thành tóm tắt. |
| M-02.13 | — | Bảng tổng hợp công thức, đơn vị, quy ước dấu | `T-02.6.2` Bảng Tổng hợp Công thức & Lưu ý | ADD | — | `[ADDED: summary concept tables]` | Nguồn có 0 bảng (`I-02.05`); bổ sung bảng tổng hợp. |
| M-02.14 | — | Bộ 10 câu hỏi/bài tập tự lượng giá | `T-02.7` Đánh giá & Bài tập tự lượng giá | ADD | — | `[ADDED: exercises]` | Nguồn hoàn toàn không có bài tập (Q3). |
| M-02.15 | — | Đáp án & hướng dẫn giải từng bước | `T-02.7.4` Đáp án & Hướng dẫn Giải Chi tiết (Answer Key) | ADD | — | `[ADDED: step-by-step answer key]` | Mỗi đáp án ghi `LO` và cấp độ; tính $V_d$, $t_{1/2}$ hiển đủ bước. |
| M-02.16 | — | Danh mục tài liệu tham khảo và ghi chú truy vết theo R4 | `T-02.8.1` Tài liệu Tham khảo & Đọc thêm | ADD | — | `[ADDED: reference section structure]` + `[VERIFY: textbook references needed]` | Nguồn `D-02` có 0 trích dẫn (`I-02.05`, `V-02.04`); chờ người dùng cung cấp giáo trình chuẩn. |

**Tổng cộng:** 16 dòng ma trận.

---

## B. Coverage Check

### 1. Kiểm tra độ phủ S-ID từ Audit Register

- **Danh sách S-ID trong `01_audit/ch02_audit.md` (tổng cộng = 3 S-ID):** `S-02.1`, `S-02.2`, `S-02.3`.
- **Ánh xạ từng S-ID trong Ma trận Mapping (Bảng A):**
  - `S-02.1` → `M-02.05` (`T-02.4.1`)
  - `S-02.2` → `M-02.06` (`T-02.4.2`)
  - `S-02.3` → `M-02.07` (`T-02.4.3`)
- **Số S-ID chưa được ánh xạ (Unmapped / Missing S-IDs): 0** (độ phủ **100,0%**).

### 2. Thống kê hành động chính (Primary Action Counts)

| Primary Action | Số dòng ma trận | Tỷ lệ (%) | Danh sách Row ID |
|---|---|---|---|
| **ADD** (khung sư pháp, bảng, hình, ví dụ/bài tập mới) | 10 | 62,5% | M-02.01, M-02.02, M-02.03, M-02.04, M-02.10, M-02.11, M-02.13, M-02.14, M-02.15, M-02.16 |
| **KEEP** (giữ nội dung cốt lõi tại đúng phân khu) | 3 | 18,8% | M-02.05, M-02.06, M-02.07 |
| **MERGE** | 3 | 18,8% | M-02.08, M-02.09, M-02.12 |
| **MOVE** | 0 | 0,0% | (dùng làm secondary cho M-02.08, M-02.09, M-02.12) |
| **REMOVE** | 0 | 0,0% | Không có dòng REMOVE (bảo toàn 100% dữ liệu nguồn) |
| **Tổng cộng** | **16 dòng** | **100,0%** | — |

### 3. Ước tính tỷ lệ nội dung mới và thống kê thẻ

- **Dung lượng nguồn gốc (`D-02`):** 438 từ (bảo toàn toàn bộ).
- **Dung lượng dự kiến bản thảo hoàn chỉnh (`ch02_draft.md`):** khoảng **3.500–4.000 từ** (đáp ứng `TARGET_LENGTH_PER_CHAPTER: not shorter than source; no upper limit`), tương đương **8–9 lần** nguồn (nguồn rất ngắn, cần mở rộng khung sư pháp và bài tập).

---

## C. Chapter Restructuring Plan

### C.1 Đề cương chi tiết đến cấp Tiểu mục / Chủ đề

```text
Chuyên đề 2: Các thông số Dược động học cơ bản (Hệ ADME) (tên tạm, chờ xác nhận MANIFEST)
├── 1. Tổng quan chương (Chapter Overview) {T-02.1}
│   ├── 1.1 Tên chuyên đề, giới thiệu khái quát & phạm vi nội dung {T-02.1.1} (M-02.01)
│   └── 1.2 Kiến thức tiên kỳ & Thời lượng học tập dự kiến {T-02.1.2} (M-02.02)
├── 2. Mục tiêu học tập (Learning Objectives) {T-02.2}
│   └── 2.1 Chuẩn đầu ra Kiến thức, Kỹ năng, Vận dụng và Đánh giá mô hình (LO-1..LO-4) {T-02.2.1} (M-02.03)
├── 3. Đặt vấn đề & Ý nghĩa thực tiễn (Introduction) {T-02.3}
│   └── 3.1 Tại sao cần nắm thông số dược động học cơ bản {T-02.3.1} (M-02.04)
├── 4. Nội dung bài giảng chính (Main Content) {T-02.4}
│   ├── 4.1 Hấp Thu & Sinh Khả Dụng {T-02.4.1} [SRC: S-02.1] (M-02.05)
│   ├── 4.2 Phân Bố & Thể Tích Phân Bố {T-02.4.2} [SRC: S-02.2] (M-02.06)
│   └── 4.3 Thải Trừ & Thời Gian Bán Thải {T-02.4.3} [SRC: S-02.3] (M-02.07)
├── 5. Ví dụ minh họa & Quy trình thực hành (Examples & Illustrations) {T-02.5}
│   ├── 5.1 Ví dụ 1: Tính $V_d$, $t_{1/2}$ & Chỉnh Liều Theo Thận {T-02.5.1} [SRC] (M-02.08)
│   ├── 5.2 Mẹo nhớ ADME & Thông Số Dược Động Học {T-02.5.2} [SRC] (M-02.09)
│   ├── 5.3 Sơ Đồ Quy Trình ADME (Mermaid) {T-02.5.3} (M-02.10)
│   └── 5.4 Minh Họa Trực quan (Placeholders) {T-02.5.4} (M-02.11)
├── 6. Tóm tắt chương (Chapter Summary) {T-02.6}
│   ├── 6.1 Tóm tắt Nội dung Trọng tâm & Quy tắc Ghi nhớ {T-02.6.1} (M-02.12)
│   └── 6.2 Bảng Tổng hợp Công thức & Lưu ý {T-02.6.2} (M-02.13)
├── 7. Đánh giá & Bài tập tự lượng giá (Review & Assessment) {T-02.7}
│   ├── 7.1 Câu hỏi lý thuyết: Nhận biết & Thông hiểu (LO-1) {T-02.7.1} (phần của M-02.14)
│   ├── 7.2 Bài tập áp dụng: Tính toán $V_d$ & $t_{1/2}$ (LO-2, LO-3) {T-02.7.2} (phần của M-02.14)
│   ├── 7.3 Câu hỏi phân tích & vận dụng nâng cao (LO-3, LO-4) {T-02.7.3} (phần của M-02.14)
│   └── 7.4 Đáp án & Hướng dẫn giải chi tiết (Answer Key) {T-02.7.4} (M-02.15)
└── 8. Tài liệu tham khảo (References) {T-02.8}
    └── 8.1 Danh mục Tài liệu tham khảo & Đọc thêm {T-02.8.1} (M-02.16)
```

### C.2 Kế hoạch bổ sung nội dung mới và lý do sư pháp

1. **Khung sư pháp T1–T3:** Tên chương, giới thiệu, kiến thức tiên kỳ, thời lượng học tập, 4 chuẩn đầu ra `LO-1`..`LO-4`.
2. **Sơ đồ thuật toán Mermaid (`T-02.5.3`):** Quy trình ADME (Hấp thu → Phân bố → Chuyển hóa → Thải trừ).
3. **Placeholder hình (`T-02.5.4`):** Đường cong nồng độ-thời gian, thể tích phân bố, độ thanh thải.
4. **Bảng tổng hợp mới (`T-02.6.2`):** Tổng hợp công thức ($F$, $V_d$, $t_{1/2}$), đơn vị, lưu ý lâm sàng.
5. **Bộ 10 câu hỏi/bài tập + đáp án (`T-02.7`):** Nguồn hoàn toàn không có đánh giá.
6. Giữ nguyên toàn bộ nội dung nguồn; không cắt nội dung (Q2).

### C.3 Rủi ro & Biện pháp kiểm soát

- **Rủi ro 1 (Tên chương chưa chốt):** Xác nhận tại MANIFEST (Q1).
- **Rủi ro 2 (Nguồn rất ngắn, 438 từ):** Nếu mở rộng lên 3.500–4.000 thì tỷ lệ 8–9×. Đây là mở rộng khung sư pháp và bài tập, không cắt nội dung nguồn.
- **Rủi ro 3 (0 bài tập, 0 hình):** Bổ sung `[ADDED]` bài tập và `[FIGURE]` placeholder (Q3, Q4).
- **Rủi ro 4 (0 tài liệu tham khảo):** Đặt `[VERIFY]` (Q5), không bịa nguồn.

### C.4 Chuẩn đầu ra Học tập (Draft LO)

- **`LO-1` (Kiến thức):** Phát biểu định nghĩa sinh khả dụng, thể tích phân bố, độ thanh thải, thời gian bán thải; phân biệt hấp thu đường uống và tiêm tĩnh mạch (first-pass effect).
- **`LO-2` (Kỹ năng):** Tính toán sinh khả dụng $F$, thể tích phân bố $V_d = D/C_0$, thời gian bán thải $t_{1/2} = 0,693 \cdot V_d/Cl$; áp dụng quy tắc $5 \times t_{1/2}$ để đạt trạng thái nồng độ ổn định.
- **`LO-3` (Vận dụng):** Giải thích liên hệ giữa thông số dược động học và chọn đường dùng, khoảng cách liều, điều chỉnh liều khi chức năng gan/thận thay đổi.
- **`LO-4` (Đánh giá mô hình):** Đánh giá vai trò của thông số dược động học trong dự đoán nồng độ thuốc tại vị trí tác dụng, thời điểm khởi phát, thời gian duy trì và nguy cơ tích lũy `[DOMAIN_RULES: chỉ giải thích cơ chế, không liều/chỉ định]`.

### C.5 Glossary & Chuẩn hóa

| Thuật ngữ | Dạng trong nguồn | Dạng chuẩn hóa | Ghi chú |
|---|---|---|---|
| Sinh khả dụng | `Sinh khả dụng` | **Sinh khả dụng (bioavailability – $F$)** | Giữ nguyên. |
| Hấp thu | `Hấp thu` | **Hấp thu (absorption)** | Giữ nguyên. |
| Phân bố | `Phân bố` | **Phân bố (distribution)** | Giữ nguyên. |
| Chuyển hóa | `Chuyển hóa` | **Chuyển hóa (metabolism)** | Giữ nguyên. |
| Thải trừ | `Thải trừ` | **Thải trừ (elimination)** | Giữ nguyên. |
| First-pass effect | `chuyển hóa bước đầu qua gan (First-pass effect)` | **Chuyển hóa bước đầu qua gan (first-pass effect)** | Giữ nguyên. |
| Thể tích phân bố | `Thể tích phân bố` | **Thể tích phân bố (volume of distribution – $V_d$)** | Giữ nguyên. |
| Độ thanh thải | `Độ thanh thải` | **Độ thanh thải (clearance – $Cl$)** | Giữ nguyên. |
| Thời gian bán thải | `Thời gian bán thải` | **Thời gian bán thải (half-life – $t_{1/2}$)** | Giữ nguyên. |
| Nồng độ ổn định | `trạng thái nồng độ ổn định ($C_{ss}$)` | **Nồng độ ổn định (steady-state concentration – $C_{ss}$)** | Giữ nguyên. |
| Albumin | `Albumin` | **Albumin** | Giữ nguyên. |

---

## D. Verification Items Carried Forward

| V-ID | Nội dung cần kiểm chứng | Loại | Mục T-ID tiếp nhận | Kế hoạch xử lý trong S3 |
|---|---|---|---|---|
| `V-02.01` | Tên chương chính xác | reference | `T-02.1` | Xác nhận MANIFEST (Q1). |
| `V-02.02` | Giá trị $F$, $V_d$, $t_{1/2}$, $Cl$ | number | `T-02.4.1`, `T-02.4.2`, `T-02.4.3` | Giữ đúng nguồn; gắn `[VERIFY]`. |
| `V-02.03` | 0 hình vẽ/sơ đồ trong nguồn | structure | `T-02.5.4` | Đặt `[FIGURE]` placeholder (Q4). |
| `V-02.04` | 0 tài liệu tham khảo | reference | `T-02.8.1` | Đặt `[VERIFY: reference needed …]` (Q5). |

---

## E. Open Questions for Gate A

1. **Q1 (Tên chương):** Xác nhận tên Ch02 tại `MANIFEST.md` (hiện dùng "Chuyên đề 2: Các thông số Dược động học cơ bản (Hệ ADME)").
2. **Q2 (Nguồn rất ngắn, mở rộng):** Nguồn chỉ 438 từ, 3 mục; S3 mở rộng lên ~3.500–4.000 bằng khung sư pháp và bài tập. Đồng ý?
3. **Q3 (Bài tập):** Đồng ý S3 bổ sung bộ 10 câu hỏi/bài tập `[ADDED]`?
4. **Q4 (Hình):** Đồng ý S3 đặt placeholder `[FIGURE]` cho đường cong nồng độ-thời gian, thể tích phân bố, độ thanh thải?
5. **Q5 (Tài liệu tham khảo):** Đồng ý để `[VERIFY: reference needed …]`, `APPROVED_REFERENCE_LIST: none`?

---

## F. Not verified / limitations

- Chỉ dựa trên D-02; 0 trích dẫn; 0 hình vẽ; 0 bài tập trong nguồn.
- Tất cả giá trị số giữ nguyên nguồn; gắn `[VERIFY]` khi cần chuyên gia xác nhận.
- Dừng tại GATE A theo R9.

---

GATE A: STOP. Awaiting user approval of the Content Mapping Matrix. Do not begin the transformation.