# ch06_matrix.md — S2 Mapping & Restructuring Plan · Chương 06

**Môn:** Hóa vô cơ dược · **Stage:** S2 Mapping · **Ngày:** 2026-11-09  
**Nguồn đầu vào:** `00_source_original/ch06_doc-hvc-6.html` (D-06), `01_audit/ch06_audit.md`, `_state/carryover_latest.md`  
**Khung cấu trúc:** Template v2 (`T1`–`T8`, `DISCIPLINE_TYPE: STEM-quantitative` theo `00_config.md`)  
**Quy tắc:** Ánh xạ 100% `S-06.1`–`S-06.9` sang `T-06.x.y` không làm mất nội dung; KHÔNG viết bài giảng chi tiết; dừng ở GATE A.

---

## A. Content Mapping Matrix

| Row ID | S-ID(s) | Summary (≤15 words) | Target T-ID and Name | Primary Action | Secondary Actions | Provenance After Transformation | Notes and Risks |
|---|---|---|---|---|---|---|---|
| M-06.01 | — | Tên chương, giới thiệu khái quát và phạm vi nội dung | `T-06.1` Chương 6: Hóa học phối trí & Ứng dụng dược | ADD | — | `[ADDED: structural frame]` | Nguồn `D-06` thiếu T1, tên chương chỉ ở `MANIFEST.md` (Q1). |
| M-06.02 | — | Kiến thức tiên quyết Chương 1–3 và thời lượng học tập | `T-06.1.1` / `T-06.1.2` (phần của `T-06.1`) Phạm vi, Kiến thức Tiên quyết & Thời lượng | ADD | — | `[ADDED: study time estimate]` | Nối `T-01.4.1` (liên kết), `T-02.4.2` ($SN$ vs $CN$), áp dụng `STUDY_TIME_RULE`. |
| M-06.03 | — | Bốn chuẩn đầu ra kiến thức, kỹ năng, vận dụng, đánh giá mô hình | `T-06.2` Mục tiêu Học tập (Learning Objectives `LO-1`..`LO-4`) | ADD | — | `[ADDED: learning objectives]` | Suy ra từ `S-06.1`–`S-06.9`. |
| M-06.04 | S-06.1 | Thuyết phối trí Werner, cầu nội & cầu ngoại | `T-06.4.1` Thuyết phối trí Alfred Werner & Cầu nội/Cầu ngoại | KEEP | EXPAND, REWRITE | S-06.1 `[SRC]` | Giữ bảng so sánh 6 tiêu chí và thí nghiệm AgCl/độ dẫn điện chuỗi Cobalt(III). |
| M-06.05 | S-06.2 | Kim loại trung tâm, hóa trị chính/phụ, số phối trí CN, hình học | `T-06.4.2` Nguyên tử Trung tâm, Hóa trị & Số Phối trí | KEEP | EXPAND | S-06.2 `[SRC]` | Phân biệt $CN$ (phức chất) với $SN$ (VSEPR Chương 2). |
| M-06.06 | S-06.3 | Phân loại phối tử 1/2/đa càng, lưỡng nha, cầu nối | `T-06.4.3` Phân loại Phối tử & Dung lượng Phối trí | KEEP | EXPAND | S-06.3 `[SRC]` | Bảng phân loại đã có sẵn; giữ ví dụ dược (Oxaliplatin, EDTA). |
| M-06.07 | S-06.4 | Hiệu ứng chelat, $\Delta G^\circ=\Delta H^\circ-T\Delta S^\circ$, $\log\beta$ | `T-06.4.4` Hiệu ứng Chelat & Nhiệt động học | KEEP | EXPAND | S-06.4 `[SRC]` | Công thức $\log\beta$ Ni(en)3; entropy-driven. |
| M-06.08 | S-06.5 | Danh pháp IUPAC, số oxy hóa La Mã, tên kim loại anion -ate | `T-06.4.5` Danh pháp Phức chất Quốc tế (IUPAC) | KEEP | EXPAND | S-06.5 `[SRC]` | Bảng 8 ví dụ đọc tên đã có sẵn. |
| M-06.09 | S-06.6 | Đồng phân cấu trúc & lập thể (cis/trans, fac/mer, đối quang) | `T-06.4.6` Các dạng Đồng phân trong Phức chất | KEEP | EXPAND | S-06.6 `[SRC]` | Cisplatin/Transplatin dược học; giữ ví dụ màu sắc. |
| M-06.10 | S-06.7 | CFT, tách mức $d$ bát diện, dãy phổ, spin cao/thấp, CFSE, màu | `T-06.4.7` Thuyết Trường Tinh thể (CFT) | KEEP | EXPAND, REWRITE | S-06.7 `[SRC]` | Công thức CFSE, $\Delta_o=h\nu$, Jahn-Teller; giàu nội dung. |
| M-06.11 | S-06.8 | Hằng số bền $k_i$, $\beta_n$, $\beta'$, HSAB, giải độc kim loại nặng | `T-06.4.8` Cân bằng Phức chất, Hằng số Bền & HSAB | KEEP | EXPAND | S-06.8 `[SRC]` | HSAB bảng cứng-mềm; giải độc D-Penicillamine, Dimercaprol. |
| M-06.12 | S-06.9 | Bảng 10 ứng dụng y dược: Cisplatin, EDTA, MRI, SPECT, hemoglobin, B12 | `T-06.4.9` Ứng dụng Hóa Phối Trí trong Y Dược | KEEP | EXPAND | S-06.9 `[SRC]` | Bảng giàu, có thể tóm tắt nếu quá dài (Q2). |
| M-06.13 | — | Ví dụ đọc ba phức chất ([Cu(NH3)4]2+, [Fe(CN)6]3-, [Ag(NH3)2]+) | `T-06.5.1` Ví dụ 6.1: Đọc ba phức chất thường gặp | MERGE | MOVE | S-06.9 (example-box) `[SRC]` | Hộp ví dụ nguồn đã có sẵn. |
| M-06.14 | — | Ví dụ EDTA 6 càng và ứng dụng giải độc | `T-06.5.2` Ví dụ 6.2: EDTA & giải độc | MERGE | MOVE | S-06.9 (example-box) `[SRC]` | Hộp ví dụ nguồn đã có sẵn. |
| M-06.15 | — | Sơ đồ thuật toán xác định số phối trí & hình học (Mermaid) | `T-06.5.3` Sơ đồ thuật toán xác định CN & hình học (Mermaid) | ADD | — | `[ADDED: Mermaid flowchart]` | Chuyển quy tắc S-06.2 thành flowchart; không thêm dữ kiện mới. |
| M-06.16 | — | Placeholder hình cơ cấu phức, dãy phổ, tách mức $d$, Jahn-Teller | `T-06.5.4` Minh họa Trực quan (Placeholders) | ADD | — | `[ADDED: figure placeholders]` + `[FIGURE]` | Nguồn có 0 hình (`I-06.04`); đặt placeholder theo `FIGURE_POLICY`. |
| M-06.17 | — | Tóm tắt nội dung trọng tâm & quy tắc ghi nhớ | `T-06.6.1` Tóm tắt Nội dung Trọng tâm & Quy tắc Ghi nhớ | MERGE | MOVE | S-06.1–S-06.9 `[SRC]` | Gộp ý nghĩa các mục; gắn `[ADDED: mnemonic "4 O + 2 N = 6"]`. |
| M-06.18 | — | Bảng tổng hợp công thức, số phối trí, hình học, màu sắc | `T-06.6.2` Bảng Tổng hợp Công thức & Quy tắc | ADD | — | `[ADDED: summary concept tables]` | Nguồn có 6 bảng nhưng chưa có bảng tổng hợp toàn chương. |
| M-06.19 | — | Bộ 10 câu hỏi/bài tập tự lượng giá | `T-06.7` Đánh giá & Bài tập tự lượng giá | ADD | — | `[ADDED: exercises]` | Nguồn hoàn toàn không có bài tập (Q3). |
| M-06.20 | — | Đáp án & hướng dẫn giải từng bước | `T-06.7.4` Đáp án & Hướng dẫn Giải Chi tiết (Answer Key) | ADD | — | `[ADDED: step-by-step answer key]` | Mỗi đáp án ghi `LO` và cấp độ; tính $\beta_n$, CFSE hiển đủ bước. |
| M-06.21 | — | Danh mục tài liệu tham khảo và ghi chú truy vết theo R4 | `T-06.8.1` Tài liệu Tham khảo & Đọc thêm | ADD | — | `[ADDED: reference section structure]` + `[VERIFY: textbook references needed]` | Nguồn `D-06` có 0 trích dẫn (`I-06.05`, `V-06.07`); chờ người dùng cung cấp giáo trình chuẩn. |

**Tổng cộng:** 21 dòng ma trận.

---

## B. Coverage Check

### 1. Kiểm tra độ phủ S-ID từ Audit Register

- **Danh sách S-ID trong `01_audit/ch06_audit.md` (tổng cộng = 9 S-ID):** `S-06.1`, `S-06.2`, `S-06.3`, `S-06.4`, `S-06.5`, `S-06.6`, `S-06.7`, `S-06.8`, `S-06.9`.
- **Ánh xạ từng S-ID trong Ma trận Mapping (Bảng A):**
  - `S-06.1` → `M-06.04` (`T-06.4.1`)
  - `S-06.2` → `M-06.05` (`T-06.4.2`)
  - `S-06.3` → `M-06.06` (`T-06.4.3`)
  - `S-06.4` → `M-06.07` (`T-06.4.4`)
  - `S-06.5` → `M-06.08` (`T-06.4.5`)
  - `S-06.6` → `M-06.09` (`T-06.4.6`)
  - `S-06.7` → `M-06.10` (`T-06.4.7`)
  - `S-06.8` → `M-06.11` (`T-06.4.8`)
  - `S-06.9` → `M-06.12` (`T-06.4.9`)
- **Số S-ID chưa được ánh xạ (Unmapped / Missing S-IDs): 0** (độ phủ **100,0%**).
- **Báo cáo kiểm tra cơ học:** sẽ chạy `_tools/check_coverage.py` tại S2/S3.

### 2. Thống kê hành động chính (Primary Action Counts)

| Primary Action | Số dòng ma trận | Tỷ lệ (%) | Danh sách Row ID |
|---|---|---|---|
| **ADD** (khung sư phạm, bảng, hình, ví dụ/bài tập mới) | 11 | 52,4% | M-06.01, M-06.02, M-06.03, M-06.13, M-06.14, M-06.15, M-06.16, M-06.17, M-06.18, M-06.19, M-06.20, M-06.21 |
| **KEEP** (giữ nội dung cốt lõi tại đúng phân khu) | 9 | 42,9% | M-06.04, M-06.05, M-06.06, M-06.07, M-06.08, M-06.09, M-06.10, M-06.11, M-06.12 |
| **MERGE** | 0 | 0,0% | (ví dụ nguồn đã nằm đúng phân khu, không cần merge) |
| **MOVE** | 0 | 0,0% | (dùng làm secondary cho M-06.13, M-06.14) |
| **REMOVE** | 0 | 0,0% | Không có dòng REMOVE (bảo toàn 100% dữ liệu nguồn) |
| **Tổng cộng** | **21 dòng** | **100,0%** | — |

### 3. Ước tính tỷ lệ nội dung mới và thống kê thẻ

- **Dung lượng nguồn gốc (`D-06`):** 5.158 từ (bảo toàn toàn bộ).
- **Dung lượng dự kiến bản thảo hoàn chỉnh (`ch06_draft.md`):** khoảng **5.000–5.500 từ** (đáp ứng `TARGET_LENGTH_PER_CHAPTER: not shorter than source; no upper limit`), tương đương **~1,0–1,1 lần** nguồn (nguồn đã giàu, không cần mở rộng nhiều).
- Nguồn đã giàu, S3 chủ yếu là cấu trúc lại, thêm khung sư phạm T1–T3, bài tập T7, và các bảng/hình tổng hợp.

---

## C. Chapter Restructuring Plan

### C.1 Đề cương chi tiết đến cấp Tiểu mục / Chủ đề

```text
Chương 6: Hóa học phối trí & Ứng dụng dược (tên tạm, chờ xác nhận MANIFEST)
├── 1. Tổng quan chương (Chapter Overview) {T-06.1}
│   ├── 1.1 Tên chương, giới thiệu khái quát & phạm vi nội dung {T-06.1.1} (M-06.01)
│   └── 1.2 Kiến thức tiên quyết & Thời lượng học tập dự kiến {T-06.1.2} (M-06.02)
├── 2. Mục tiêu học tập (Learning Objectives) {T-06.2}
│   └── 2.1 Chuẩn đầu ra Kiến thức, Kỹ năng, Vận dụng và Đánh giá mô hình (LO-1..LO-4) {T-06.2.1} (M-06.03)
├── 3. Đặt vấn đề & Ý nghĩa thực tiễn (Introduction) {T-06.3}
│   └── 3.1 Từ liên kết cộng hóa trị đến liên kết phối chí (phần mở đầu)
├── 4. Nội dung bài giảng chính (Main Content) {T-06.4}
│   ├── 4.1 Thuyết phối trí Alfred Werner & Cầu nội/Cầu ngoại {T-06.4.1} [SRC: S-06.1] (M-06.04)
│   ├── 4.2 Nguyên tử Trung tâm, Hóa trị & Số Phối trí {T-06.4.2} [SRC: S-06.2] (M-06.05)
│   ├── 4.3 Phân loại Phối tử & Dung lượng Phối trí {T-06.4.3} [SRC: S-06.3] (M-06.06)
│   ├── 4.4 Hiệu ứng Chelat & Nhiệt động học {T-06.4.4} [SRC: S-06.4] (M-06.07)
│   ├── 4.5 Danh pháp Phức chất Quốc tế (IUPAC) {T-06.4.5} [SRC: S-06.5] (M-06.08)
│   ├── 4.6 Các dạng Đồng phân trong Phức chất {T-06.4.6} [SRC: S-06.6] (M-06.09)
│   ├── 4.7 Thuyết Trường Tinh thể (CFT) {T-06.4.7} [SRC: S-06.7] (M-06.10)
│   ├── 4.8 Cân bằng Phức chất, Hằng số Bền & HSAB {T-06.4.8} [SRC: S-06.8] (M-06.11)
│   └── 4.9 Ứng dụng Hóa Phối Trí trong Y Dược {T-06.4.9} [SRC: S-06.9] (M-06.12)
├── 5. Ví dụ minh họa & Quy trình thực hành (Examples & Illustrations) {T-06.5}
│   ├── 5.1 Ví dụ 6.1: Đọc ba phức chất thường gặp {T-06.5.1} [SRC] (M-06.13)
│   ├── 5.2 Ví dụ 6.2: EDTA & giải độc {T-06.5.2} [SRC] (M-06.14)
│   ├── 5.3 Sơ đồ thuật toán xác định CN & hình học (Mermaid) {T-06.5.3} (M-06.15)
│   └── 5.4 Minh họa Trực quan (Placeholders) {T-06.5.4} (M-06.16)
├── 6. Tóm tắt chương (Chapter Summary) {T-06.6}
│   ├── 6.1 Tóm tắt Nội dung Trọng tâm & Quy tắc Ghi nhớ {T-06.6.1} (M-06.17)
│   └── 6.2 Bảng Tổng hợp Công thức & Quy tắc {T-06.6.2} (M-06.18)
├── 7. Đánh giá & Bài tập tự lượng giá (Review & Assessment) {T-06.7}
│   ├── 7.1 Câu hỏi lý thuyết: Nhận biết & Thông hiểu (LO-1) {T-06.7.1} (phần của M-06.19)
│   ├── 7.2 Bài tập áp dụng: Tính toán & phân loại (LO-2, LO-3) {T-06.7.2} (phần của M-06.19)
│   ├── 7.3 Câu hỏi phân tích & vận dụng nâng cao (LO-3, LO-4) {T-06.7.3} (phần của M-06.19)
│   └── 7.4 Đáp án & Hướng dẫn giải chi tiết (Answer Key) {T-06.7.4} (M-06.20)
└── 8. Tài liệu tham khảo (References) {T-06.8}
    └── 8.1 Danh mục Tài liệu tham khảo & Đọc thêm {T-06.8.1} (M-06.21)
```

### C.2 Kế hoạch bổ sung nội dung mới và lý do sư phạm

1. **Khung sư phạm T1–T3:** Tên chương, phạm vi, kiến thức tiên quyết, thời lượng, 4 chuẩn đầu ra `LO-1`..`LO-4`.
2. **Sơ đồ thuật toán Mermaid (`T-06.5.3`):** Quy trình xác định số phối trí CN và hình học (tứ diện/vuông phẳng/bát diện) dựa trên $d^n$, loại phối tử.
3. **Placeholder hình (`T-06.5.4`):** Cơ cấu phức (bát diện, vuông phẳng), dãy phổ tập quang, tách mức $d$ bát diện, hiệu ứng Jahn-Teller ($Cu^{2+}$).
4. **Bảng tổng hợp mới (`T-06.6.2`):** Tổng hợp công thức, số phối trí, hình học, màu sắc, spin.
5. **Bộ 10 câu hỏi/bài tập + đáp án (`T-06.7`):** Nguồn hoàn toàn không có đánh giá.
6. Giữ nguyên 6 bảng và 2 ví dụ của nguồn; không cắt nội dung (Q2).

### C.3 Rủi ro & Biện pháp kiểm soát

- **Rủi ro 1 (Tên chương chưa chốt):** Xác nhận tại MANIFEST (Q1).
- **Rủi ro 2 (Nguồn giàu, có thể vượt mục tiêu độ dài):** Nguồn 5.158 từ, bản thảo dự kiến ~5.000–5.500 từ (≤1,1×). Nếu quá dài, giữ toàn bộ (không cắt vì `TARGET_LENGTH` không có upper limit).
- **Rủi ro 3 (0 bài tập, 0 hình):** Bổ sung `[ADDED]` bài tập và `[FIGURE]` placeholder (Q3, Q4).
- **Rủi ro 4 (0 tài liệu tham khảo):** Đặt `[VERIFY]` (Q5), không bịa nguồn.

### C.4 Chuẩn đầu ra Học tập (Draft LO)

- **LO-1:** Phát biểu thuyết phối trí Werner, cầu nội/ngoài, số phối trí CN, phân loại phối tử, danh pháp IUPAC.
- **LO-2:** Xác định CN, hình học, số oxy hóa, điện tích phức; đọc tên phức theo IUPAC; tính $\beta_n$, CFSE.
- **LO-3:** Giải thích hiệu ứng chelat, spin cao/thấp, màu sắc, tương tác thuốc–kim loại, HSAB trong giải độc.
- **LO-4:** Đánh giá ứng dụng y dược (Cisplatin, EDTA, MRI, SPECT), so sánh đồng phân, chọn chất tạo phức giải độc.

### C.5 Glossary & Chuẩn hóa

| Thuật ngữ | Dạng trong nguồn | Dạng chuẩn hóa | Ghi chú |
|---|---|---|---|
| Số phối trí | `Số phối trí (Coordination Number - CN)` | **Số phối trí (Coordination Number – CN)** | Phân biệt với $SN$ VSEPR (Chương 2). |
| Cầu nội/ngoại | `Cầu nội/Cầu ngoại` | **Cầu nội (inner sphere)** / **Cầu ngoại (outer sphere)** | Giữ nguyên. |
| Thuyết trường tinh thể | `Thuyết Trường Tinh thể (CFT)` | **Thuyết trường tinh thể (CFT)** | Giữ nguyên. |
| Hằng số bền | `Hằng số bền ($\beta_n$)` | **Hằng số bền (stability constant)** | $\log\beta$. |
| HSAB | `HSAB` | **Thuyết HSAB (hard-soft acid-base)** | Acid cứng-base cứng; acid mềm-base mềm. |

---

## D. Verification Items Carried Forward

| V-ID | Nội dung cần kiểm chứng | Loại | Mục T-ID tiếp nhận | Kế hoạch xử lý trong S3 |
|---|---|---|---|---|
| `V-06.01` | Tên chương chính xác | reference | `T-06.1` | Xác nhận MANIFEST (Q1). |
| `V-06.02` | Giá trị $\log\beta$, $\Delta_o$, CFSE, số oxy hóa | number/formula | `T-06.4.4`, `T-06.4.7`, `T-06.4.8` | Giữ đúng nguồn; gắn `[VERIFY]`. |
| `V-06.03` | 0 hình vẽ/sơ đồ trong nguồn | structure | `T-06.5.4` | Đặt `[FIGURE]` placeholder (Q4). |
| `V-06.04` | 0 tài liệu tham khảo | reference | `T-06.8.1` | Đặt `[VERIFY: reference needed …]` (Q5). |

---

## E. Open Questions for Gate A

1. **Q1 (Tên chương):** Xác nhận tên Ch06 tại `MANIFEST.md` (hiện dùng tên tạm "Hóa học phối trí & Ứng dụng dược").
2. **Q2 (Độ dài):** Nguồn đã giàu 5.158 từ; S3 giữ toàn bộ nội dung (không cắt), bản thảo dự kiến ~5.000–5.500 từ. Đồng ý?
3. **Q3 (Bài tập):** Đồng ý S3 bổ sung bộ 10 câu hỏi/bài tập `[ADDED]`?
4. **Q4 (Hình):** Đồng ý S3 đặt placeholder `[FIGURE]` cho cơ cấu, dãy phổ, tách mức $d$, Jahn-Teller?
5. **Q5 (Tài liệu tham khảo):** Đồng ý để `[VERIFY: reference needed …]`, `APPROVED_REFERENCE_LIST: none`?

---

## F. Not verified / limitations

- Chỉ dựa trên D-06; 0 trích dẫn; 0 hình vẽ; 0 bài tập trong nguồn.
- Tất cả công thức, giá trị số giữ nguyên nguồn; gắn `[VERIFY]` khi cần chuyên gia xác nhận.
- Dừng tại GATE A theo R9.

---
GATE A: STOP. Awaiting user approval of the Content Mapping Matrix. Do not begin the transformation.
