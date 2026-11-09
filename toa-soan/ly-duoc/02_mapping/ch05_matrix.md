# ch05_matrix.md — S2 Mapping & Restructuring Plan · Chương 05

**Môn:** Lý dược – Master Lecture Notes · **Stage:** S2 Mapping · **Ngày:** 2026-11-09  
**Nguồn đầu vào:** `00_source_original/ch05_doc-ld-c4.html` (D-05), `01_audit/ch05_audit.md`, `_state/carryover_latest.md`  
**Khung cấu trúc:** Template v2 (`T1`–`T8`, `DISCIPLINE_TYPE: STEM-quantitative` theo `00_config.md`)  
**Quy tắc:** Ánh xạ 100% `S-05.1`–`S-05.7` sang `T-05.x.y` không làm mất nội dung; KHÔNG viết bài giảng chi tiết; dừng ở GATE A.

---

## A. Content Mapping Matrix

| Row ID | S-ID(s) | Summary (≤15 words) | Target T-ID and Name | Primary Action | Secondary Actions | Provenance After Transformation | Notes and Risks |
|---|---|---|---|---|---|---|---|
| M-05.01 | — | Tên chuyên đề, giới thiệu khái quát và phạm vi nội dung | `T-05.1` Chuyên đề 5: Siêu âm trong Y Dược học (Ultrasound in Medicine & Pharmacy) | ADD | — | `[ADDED: structural frame]` | Nguồn `D-05` thiếu T1, tên chương chỉ ở `MANIFEST.md` (Q1). |
| M-05.02 | — | Kiến thức tiên kỳ và thời lượng học tập | `T-05.1.1` / `T-05.1.2` (phần của `T-05.1`) Phạm vi, Kiến thức Tiên quyết & Thời lượng Học tập | ADD | — | `[ADDED: study time estimate]` | Nguồn `D-05` không có phần kiến thức tiên quyết; bổ sung theo `STUDY_TIME_RULE`. |
| M-05.03 | — | Bốn chuẩn đầu ra kiến thức, kỹ năng, vận dụng, đánh giá mô hình | `T-05.2` Mục tiêu Học tập (Learning Objectives `LO-1`..`LO-4`) | ADD | — | `[ADDED: learning objectives]` | Suy ra từ `S-05.1`–`S-05.7`. |
| M-05.04 | S-05.1 | Bản chất và đặc trưng của sóng siêu âm (tần số, dạng sóng, vận tốc) | `T-05.4.1` Bản chất Vật lý của Sóng siêu âm | KEEP | EXPAND, REWRITE | S-05.1 `[SRC]` | Giữ nguyên tần số > 20 kHz, dạng sóng dọc trong chất lỏng, vận tốc âm $v = \sqrt{K/\rho} = \lambda f$. |
| M-05.05 | S-05.2 | Trở kháng âm, phản xạ/khuếch xạ, suy giảm âm, quy tắc đánh đổi tần số/độ phân giải/độ sâu | `T-05.4.2` Tương tác của Sóng siêu âm với Mô sinh học | KEEP | EXPAND, REWRITE | S-05.2 `[SRC]` | Giữ nguyên $Z = \rho v$, $R = ((Z_2-Z_1)/(Z_2+Z_1))^2$, $I(x) = I_0e^{-\mu x}$. |
| M-05.06 | S-05.3 | Hiệu ứng áp điện nghịch (phát) và thuận (thu) của PZT | `T-05.4.3` Cơ chế Phát - Thu sóng siêu âm: Hiệu ứng áp điện | KEEP | EXPAND | S-05.3 `[SRC]` | Giữ nguyên hiệu ứng áp điện nghịch (phát) và thuận (thu). |
| M-05.07 | S-05.4 | Các phương thức chẩn đoán hình ảnh siêu âm (A-mode, B-mode, M-mode, Doppler) | `T-05.4.4` Các phương thức Chẩn đoán Hình ảnh Siêu âm | KEEP | EXPAND, REWRITE | S-05.4 `[SRC]` | Giữ nguyên A-mode, B-mode, M-mode, Doppler. |
| M-05.08 | S-05.5 | Ứng dụng siêu âm trong Dược học: xâm thực, UAE, liposome, phonophoresis, HIFU | `T-05.4.5` Ứng dụng của Sóng siêu âm trong Dược học và Điều trị y sinh | KEEP | EXPAND | S-05.5 `[SRC]` | Giữ nguyên các ứng dụng xâm thực, UAE, liposome, phonophoresis, HIFU. |
| M-05.09 | S-05.6 | An toàn sinh học và chỉ số an toàn (TI, MI, ALARA) | `T-05.4.6` An toàn sinh học và Các chỉ số An toàn của Sóng siêu âm | KEEP | EXPAND | S-05.6 `[SRC]` | Giữ nguyên TI < 1,0; MI ≤ 1,9; nguyên lý ALARA. |
| M-05.09 | S-05.7 | Ý nghĩa và tác dụng tổng kết | `T-04.6.1` Tóm tắt Nội dung Trọng tâm & Quy tắc Ghi nhớ | MERGE | MOVE | S-05.7 `[SRC]` | Gộp ý nghĩa các mục 1–6 thành một tiểu mục tóm tắt. |
| M-05.10 | — | Ví dụ tính độ sâu từ thời gian dội âm ($d = v \cdot t/2$) | `T-05.5.1` Ví dụ 1: Tính độ sâu từ thời gian dội âm | MERGE | MOVE | S-05.1 (example-box) `[SRC]` | Hộp ví dụ nguồn đã có sẵn, giữ nguyên số liệu. |
| M-05.11 | — | Cách nhớ tần số (cao-nông-nét, thấp-sâu-mờ); công thức echo ($d = v \cdot t/2$); an toàn (TI < 1,0; MI ≤ 1,9; ALARA) | `T-05.5.2` Mẹo nhớ Siêu âm | MERGE | MOVE | S-05.6 (callout) `[SRC]` | Callout nguồn đã có sẵn. |
| M-05.12 | — | Sơ đồ nguyên lý áp điện & hiệu ứng Doppler (Mermaid) | `T-05.5.3` Sơ đồ nguyên lý áp điện & hiệu ứng Doppler (Mermaid) | ADD | — | `[ADDED: Mermaid flowchart]` | Chuyển quy tắc của S-05.3, S-05.4 thành flowchart; không thêm dữ kiện mới. |
| M-05.13 | — | Placeholder hình sóng dọc/ngang, trở kháng âm, hình ảnh B-mode/Doppler | `T-05.5.4` Minh họa Trực quan (Placeholders) | ADD | — | `[ADDED: figure placeholders]` + `[FIGURE]` | Nguồn có 0 hình (`I-05.04`); đặt placeholder theo `FIGURE_POLICY`. |
| M-05.14 | — | Tóm tắt nội dung trọng tâm & quy tắc ghi nhớ | `T-05.6.1` Tóm tắt Nội dung Trọng tâm & Quy tắc Ghi nhớ | MERGE | MOVE | S-05.1–S-05.7 `[SRC]` | Gộp các nguyên lý vật lý, tương tác, ứng dụng, an toàn thành tóm tắt. |
| M-05.15 | — | Bảng tổng hợp công thức, đơn vị, quy ước dấu | `T-05.6.2` Bảng Tổng hợp Công thức & Lưu ý | ADD | — | `[ADDED: summary concept tables]` | Nguồn có 0 bảng (`I-05.05`); bổ sung bảng tổng hợp. |
| M-05.16 | — | Bộ 10 câu hỏi/bài tập tự lượng giá | `T-05.7` Đánh giá & Bài tập tự lượng giá | ADD | — | `[ADDED: exercises]` | Nguồn hoàn toàn không có bài tập (Q3). |
| M-05.17 | — | Đáp án & hướng dẫn giải từng bước | `T-05.7.4` Đáp án & Hướng dẫn Giải Chi tiết (Answer Key) | ADD | — | `[ADDED: step-by-step answer key]` | Mỗi đáp án ghi `LO` và cấp độ; tính độ sâu từ thời gian dội âm hiển đủ bước. |
| M-05.18 | — | Danh mục tài liệu tham khảo và ghi chú truy vết theo R4 | `T-05.8.1` Tài liệu Tham khảo & Đọc thêm | ADD | — | `[ADDED: reference section structure]` + `[VERIFY: textbook references needed]` | Nguồn `D-05` có 0 trích dẫn (`I-05.05`, `V-05.04`); chờ người dùng cung cấp giáo trình chuẩn. |

**Tổng cộng:** 18 dòng ma trận.

---

## B. Coverage Check

### 1. Kiểm tra độ phủ S-ID từ Audit Register

- **Danh sách S-ID trong `01_audit/ch05_audit.md` (tổng cộng = 7 S-ID):** `S-05.1`, `S-05.2`, `S-05.3`, `S-05.4`, `S-05.5`, `S-05.6`, `S-05.7`.
- **Ánh xạ từng S-ID trong Ma trận Mapping (Bảng A):**
  - `S-05.1` → `M-05.04` (`T-05.4.1`)
  - `S-05.2` → `M-05.05` (`T-05.4.2`)
  - `S-05.3` → `M-05.06` (`T-05.4.3`)
  - `S-05.4` → `M-05.07` (`T-05.4.4`)
  - `S-05.5` → `M-05.08` (`T-05.4.5`)
  - `S-05.6` → `M-05.09` (`T-05.4.6`)
  - `S-05.7` → `M-05.10` (`T-04.6.1`)
- **Số S-ID chưa được ánh xạ (Unmapped / Missing S-IDs): 0** (độ phủ **100,0%**).
- **Báo cáo kiểm tra cơ học:** sẽ chạy `_tools/check_coverage.py` tại S2/S3.

### 2. Thống kê hành động chính (Primary Action Counts)

| Primary Action | Số dòng ma trận | Tỷ lệ (%) | Danh sách Row ID |
|---|---|---|---|
| **ADD** (khung sư pháp, bảng, hình, ví dụ/bài tập mới) | 10 | 55,6% | M-05.01, M-05.02, M-05.03, M-05.12, M-05.13, M-05.14, M-05.15, M-05.16, M-05.17, M-05.18 |
| **KEEP** (giữ nội dung cốt lõi tại đúng phân khu) | 7 | 38,9% | M-05.04, M-05.05, M-05.06, M-05.07, M-05.08, M-05.09, M-05.10 |
| **MERGE** | 0 | 0,0% | (ví dụ nguồn đã nằm đúng phân khu) |
| **MOVE** | 0 | 0,0% | (dùng làm secondary cho M-05.10, M-05.11) |
| **REMOVE** | 0 | 0,0% | Không có dòng REMOVE (bảo toàn 100% dữ liệu nguồn) |
| **Tổng cộng** | **18 dòng** | **100,0%** | — |

### 3. Ước tính tỷ lệ nội dung mới và thống kê thẻ

- **Dung lượng nguồn gốc (`D-05`):** 2407 từ (bảo toàn toàn bộ).
- **Dung lượng dự kiến bản thảo hoàn chỉnh (`ch05_draft.md`):** khoảng **4.000–4.500 từ** (đáp ứng `TARGET_LENGTH_PER_CHAPTER: not shorter than source; no upper limit`), tương đương **1,7–1,9 lần** nguồn.
- Nguồn vừa phải, S3 sẽ mở rộng đáng kể khung sư pháp T1–T3 và bổ sung bài tập T7.

---

## C. Chapter Restructuring Plan

### C.1 Đề cương chi tiết đến cấp Tiểu mục / Chủ đề

```text
Chương 5: Siêu âm trong Y Dược học (Ultrasound in Medicine & Pharmacy) (tên tạm, chờ xác nhận MANIFEST)
├── 1. Tổng quan chương (Chapter Overview) {T-05.1}
│   ├── 1.1 Tên chuyên đề, giới thiệu khái quát & phạm vi nội dung {T-05.1.1} (M-05.01)
│   └── 1.2 Kiến thức tiên kỳ & Thời lượng học tập dự kiến {T-05.1.2} (M-05.02)
├── 2. Mục tiêu học tập (Learning Objectives) {T-05.2}
│   └── 2.1 Chuẩn đầu ra Kiến thức, Kỹ năng, Vận dụng và Đánh giá mô hình (LO-1..LO-4) {T-05.2.1} (M-05.03)
├── 3. Đặt vấn đề & Ý nghĩa thực tiễn (Introduction) {T-05.3}
│   └── 3.1 Từ sóng cơ học đến hình ảnh siêu âm y dược (phần mở đầu)
├── 4. Nội dung bài giảng chính (Main Content) {T-05.4}
│   ├── 4.1 Bản chất Vật lý của Sóng siêu âm {T-05.4.1} [SRC: S-05.1] (M-05.04)
│   ├── 4.2 Tương tác của Sóng siêu âm với Mô sinh học {T-05.4.2} [SRC: S-05.2] (M-05.05)
│   ├── 4.3 Cơ chế Phát - Thu sóng siêu âm: Hiệu ứng áp điện {T-05.4.3} [SRC: S-05.3] (M-05.06)
│   ├── 4.4 Các phương thức Chẩn đoán Hình ảnh Siêu âm {T-05.4.4} [SRC: S-05.4] (M-05.07)
│   └── 4.5 Ứng dụng của Sóng siêu âm trong Dược học và Điều trị y sinh {T-05.4.5} [SRC: S-05.5] (M-05.08)
│   └── 4.6 An toàn sinh học và các chỉ số An toàn của Sóng siêu âm {T-05.4.6} [SRC: S-05.6] (M-05.09)
├── 5. Ví dụ minh họa & Quy trình thực hành (Examples & Illustrations) {T-05.5}
│   ├── 5.1 Ví dụ 1: Tính độ sâu từ thời gian dội âm {T-05.5.1} [SRC] (M-05.10)
│   ├── 5.2 Mẹo nhớ Siêu âm {T-05.5.2} [SRC] (M-05.11)
│   ├── 5.3 Sơ đồ nguyên lý áp điện & hiệu ứng Doppler (Mermaid) {T-05.5.3} (M-05.12)
│   └── 5.4 Minh họa Trực quan (Placeholders) {T-05.5.4} (M-05.13)
├── 6. Tóm tắt chương (Chapter Summary) {T-05.6}
│   ├── 6.1 Tóm tắt Nội dung Trọng tâm & Quy tắc Ghi nhớ {T-05.6.1} (M-05.14)
│   └── 6.2 Bảng Tổng hợp Công thức & Lưu ý {T-05.6.2} (M-05.15)
├── 7. Đánh giá & Bài tập tự lượng giá (Review & Assessment) {T-05.7}
│   ├── 7.1 Câu hỏi lý thuyết: Nhận biết & Thông hiểu (LO-1) {T-05.7.1} (phần của M-05.16)
│   ├── 7.2 Bài tập áp dụng: Tính toán độ sâu và độ thấm (LO-2, LO-3) {T-05.7.2} (phần của M-05.16)
│   ├── 7.3 Câu hỏi phân tích & vận dụng nâng cao (LO-3, LO-4) {T-05.7.3} (phần của M-05.16)
│   └── 7.4 Đáp án & Hướng dẫn giải chi tiết (Answer Key) {T-05.7.4} (M-05.17)
└── 8. Tài liệu tham khảo (References) {T-05.8}
    └── 8.1 Danh mục Tài liệu tham khảo & Đọc thêm {T-05.8.1} (M-05.18)
```

### C.2 Kế hoạch bổ sung nội dung mới và lý do sư pháp

1. **Khung sư phạm T1–T3:** Tên chuyên đề, giới thiệu, kiến thức tiên kỳ, thời lượng, 4 chuẩn đầu ra `LO-1`..`LO-4`.
2. **Sơ đồ thuật toán Mermaid (`T-05.5.3`):** Quy trình nguyên lý áp điện & hiệu ứng Doppler.
3. **Placeholder hình (`T-05.5.4`):** Sóng dọc/ngang, trở kháng âm, hình ảnh B-mode/Doppler.
4. **Bảng tổng hợp mới (`T-05.6.2`):** Tổng hợp công thức, đơn vị, quy ước dấu của toàn chương.
5. **Bộ 10 câu hỏi/bài tập + đáp án (`T-05.7`):** Nguồn hoàn toàn không có đánh giá.
6. Giữ nguyên 5 công thức và 1 ví dụ của nguồn; không cắt nội dung (Q2).

### C.3 Rủi ro & Biện pháp kiểm soát

- **Rủi ro 1 (Tên chương chưa chốt):** Xác nhận tại MANIFEST (Q1).
- **Rủi ro 2 (Nguồn vừa phải, 2407 từ):** Nếu mở rộng lên 4.000–4.500 thì tỷ lệ 1,7–1,9×. Đây là mở rộng khung sư pháp và bài tập, không cắt nội dung nguồn.
- **Rủi ro 3 (0 bài tập, 0 hình):** Bổ sung `[ADDED]` bài tập và `[FIGURE]` placeholder (Q3, Q4).
- **Rủi ro 4 (0 tài liệu tham khảo):** Đặt `[VERIFY]` (Q5), không bịa nguồn.

### C.4 Chuẩn đầu ra Học tập (Draft LO)

- **LO-1:** Phát biểu được bản chất sóng siêu âm, dạng sóng dọc/ngang, vận tốc âm, trở kháng âm, hiệu ứng áp điện.
- **LO-2:** Tính toán được vận tốc âm, trở kháng âm, hệ số phản xạ/truyền, hệ số suy giảm, độ sâu từ thời gian dội âm ($d = v \cdot t/2$), tần số Doppler.
- **LO-3:** Vận dụng siêu âm để giải thích UAE, liposome, phonophoresis, HIFU, chẩn đoán hình ảnh (B-mode, Doppler).
- **LO-4:** Đánh giá vai trò của siêu âm trong bào chế dược phẩm và điều trị y sinh; liên hệ an toàn sinh học (TI, MI, ALARA).

### C.5 Glossary & Chuẩn hóa

| Thuật ngữ | Dạng trong nguồn | Dạng chuẩn hóa | Ghi chú |
|---|---|---|---|
| Sóng siêu âm | `Sóng siêu âm (Ultrasound)` | **Sóng siêu âm (ultrasound)** | Giữ nguyên. |
| Tần số | `tần số dao động ($f > 20\text{ kHz}$)` | **Tần số (frequency – $f$)** | Giữ nguyên. |
| Vận tốc truyền âm | `Vận tốc truyền âm ($v$)` | **Vận tốc truyền âm (speed of sound – $v$)** | Giữ nguyên. |
| Trở kháng âm | `Trở kháng âm (Acoustic Impedance - $Z$)` | **Trở kháng âm (acoustic impedance – $Z$)** | Giữ nguyên. |
| Hệ số phản xạ | `Hệ số phản xạ cường độ ($R$)` | **Hệ số phản xạ (reflection coefficient – $R$)** | Giữ nguyên. |
| Hệ số truyền | `Hệ số truyền qua cường độ ($T$)` | **Hệ số truyền (transmission coefficient – $T$)** | Giữ nguyên. |
| Hệ số suy giảm âm | `Hệ số suy giảm âm tổng cộng ($\mu$)` | **Hệ số suy giảm âm (attenuation coefficient – $\mu$)** | Giữ nguyên. |
| Hiệu ứng áp điện | `Hiệu ứng áp điện (Piezoelectric Effect)` | **Hiệu ứng áp điện (piezoelectric effect)** | Giữ nguyên. |
| Hiệu ứng Doppler | `hiệu ứng Doppler` | **Hiệu ứng Doppler (Doppler effect)** | Giữ nguyên. |
| Xâm thực sóng âm | `Xâm thực sóng âm (Acoustic Cavitation)` | **Xâm thực sóng âm (acoustic cavitation)** | Giữ nguyên. |
| Chỉ số nhiệt / Cơ học | `Chỉ số nhiệt (Thermal Index - TI)`, `Chỉ số cơ học (Mechanical Index - MI)` | **Chỉ số nhiệt (TI)**, **Chỉ số cơ học (MI)** | Giữ nguyên. |
| Nguyên lý ALARA | `Nguyên lý ALARA (As Low As Reasonably Achievable)` | **Nguyên lý ALARA** | Giữ nguyên. |

---

## D. Verification Items Carried Forward

| V-ID | Nội dung cần kiểm chứng | Loại | Mục T-ID tiếp nhận | Kế hoạch xử lý trong S3 |
|---|---|---|---|---|
| `V-05.01` | Tên chuyên đề chính xác | reference | `T-05.1` | Xác nhận MANIFEST (Q1). |
| `V-05.02` | Giá trị vận tốc âm ($1540\text{ m/s}$ trong mô mềm), trở kháng âm ($Z_{xương} \approx 6-8 \times 10^6\text{ Rayl}$), hệ số phản xạ/truyền | number/formula | `T-05.4.2`, `T-05.5.1` | Giữ đúng nguồn; gắn `[VERIFY]`. |
| `V-05.03` | 0 hình vẽ/sơ đồ trong nguồn | structure | `T-05.5.4` | Đặt `[FIGURE]` placeholder (Q4). |
| `V-05.04` | 0 tài liệu tham khảo | reference | `T-05.8.1` | Đặt `[VERIFY: reference needed …]` (Q5). |

---

## E. Open Questions for Gate A

1. **Q1 (Tên chuyên đề):** Xác nhận tên Ch05 tại `MANIFEST.md` (hiện dùng "Chương 4: Siêu âm trong Y Dược học (Ultrasound in Medicine & Pharmacy)").
2. **Q2 (Nguồn vừa phải, mở rộng):** Nguồn chỉ 2407 từ, 7 mục; S3 mở rộng lên ~4.000–4.500 bằng khung sư pháp và bài tập. Đồng ý?
3. **Q3 (Bài tập):** Đồng ý S3 bổ sung bộ 10 câu hỏi/bài tập `[ADDED]`?
4. **Q4 (Hình):** Đồng ý S3 đặt placeholder `[FIGURE]` cho sóng dọc/ngang, trở kháng âm, hình ảnh B-mode/Doppler?
5. **Q5 (Tài liệu tham khảo):** Đồng ý để `[VERIFY: reference needed …]`, `APPROVED_REFERENCE_LIST: none`?

---

## F. Not verified / limitations

- Chỉ dựa trên D-05; 0 trích dẫn; 0 hình vẽ; 0 bài tập trong nguồn.
- Tất cả công thức, giá trị số giữ nguyên nguồn; gắn `[VERIFY]` khi cần chuyên gia xác nhận.
- Dừng tại GATE A theo R9.

---
GATE A: STOP. Awaiting user approval of the Content Mapping Matrix. Do not begin the transformation.
