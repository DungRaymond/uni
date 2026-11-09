# ch09_matrix.md — S2 Mapping & Restructuring Plan · Chương 09

**Môn:** Y dược – Master Lecture Notes · **Stage:** S2 Mapping · **Ngày:** 2026-11-09  
**Nguồn đầu vào:** `00_source_original/ch09_doc-myd-9.html` (D-09), `01_audit/ch09_audit.md`, `_state/carryover_latest.md`  
**Khung cấu trúc:** Template v2 (`T1`–`T8`, `DISCIPLINE_TYPE: STEM-qualitative` theo `00_config.md`)  
**Quy tắc:** Ánh xạ 100% `S-09.1`–`S-09.7` sang `T-09.x.y` không làm mất nội dung; KHÔNG viết bài giảng chi tiết; dừng ở GATE A.

---

## A. Content Mapping Matrix

| Row ID | S-ID(s) | Summary (≤15 words) | Target T-ID and Name | Primary Action | Secondary Actions | Provenance After Transformation | Notes and Risks |
|---|---|---|---|---|---|---|---|
| M-09.01 | — | Tên chương, giới thiệu khái quát & phạm vi nội dung | `T-09.1` Chương 9: Bệnh nguyên và bệnh sinh | ADD | — | `[ADDED: structural frame]` | Nguồn `D-09` thiếu T1, tên chương chỉ ở `MANIFEST.md` (Q1). |
| M-09.02 | — | Kiến thức tiên kỳ và thời lượng học tập | `T-09.1.1` / `T-09.1.2` (phần của `T-09.1`) Phạm vi, Kiến thức Tiên quyết & Thời lượng Học tập | ADD | — | `[ADDED: study time estimate]` | Nguồn `D-09` không có phần kiến thức tiên quyết; bổ sung theo `STUDY_TIME_RULE`. |
| M-09.03 | — | Bốn chuẩn đầu ra kiến thức, kỹ năng, vận dụng, đánh giá mô hình | `T-09.2` Mục tiêu Học tập (Learning Objectives `LO-1`..`LO-4`) | ADD | — | `[ADDED: learning objectives]` | Suy ra từ `S-09.1`–`S-09.7`. |
| M-09.04 | — | Đặt vấn đề & ý nghĩa thực tiễn | `T-09.3` Đặt vấn đề & Ý nghĩa thực tiễn (Introduction) | ADD | — | `[ADDED: introduction frame]` | Nguồn `D-09` thiếu phần mở luận cấu trúc. |
| M-09.05 | S-09.1 | Bệnh nguyên: căn nguyên và điều kiện; phân biệt nguyên nhân với điều kiện thuận lợi/nguy cơ; đa yếu tố; 5 nhóm (sinh học, di truyền, vật lý/hóa, miễn dịch, môi trường/hành vi) | `T-09.4.1` Bệnh Nguyên: Căn Nguyên & Điều Kiện | KEEP | EXPAND | S-09.1 `[SRC]` | Giữ nguyên phân biệt nguyên nhân vs điều kiện nguy cơ. |
| M-09.06 | S-09.2 | Bệnh sinh: chuỗi cơ chế phát triển bệnh (tác nhân → tương tác cơ thể → tổn thương → rối loạn chức năng → dấu hiệu/triệu chứng/biến chứng); ví dụ xơ vữa động mạch | `T-09.4.2` Bệnh Sinh: Từ Nguyên Nhân Tới Biểu Hiện | KEEP | EXPAND | S-09.2 `[SRC]` | Giữ nguyên mô hình khái quát bệnh sinh. |
| M-09.07 | S-09.3 | Viêm: đáp ứng bảo vệ của mô có mạch máu; 5 dấu hiệu; chất trung gian (histamine, prostaglandin, cytokine, chemokine, bổ thể); 5 giai đoạn; 7 kiểu rối loạn viêm; sốt | `T-09.4.3` Viêm | KEEP | EXPAND | S-09.3 `[SRC]` | Giữ nguyên cơ chế viêm, chất trung gian, giai đoạn viêm. |
| M-09.08 | S-09.4 | Sốt: tăng thân nhiệt có điều hòa; chất gây sốt ngoại sinh → cytokine (IL-1, IL-6, TNF) → PGE₂ ở dưới đồi → nâng điểm điều nhiệt; phân biệt sốt với tăng thân nhiệt | `T-09.4.4` Sốt | KEEP | EXPAND | S-09.4 `[SRC]` | Giữ nguyên cơ chế sốt và phân biệt với tăng thân nhiệt. |
| M-09.09 | S-09.5 | Tổn thương tế bào và đáp ứng: tổn thương do thiếu oxy, hóa chất, nhiễm trùng, miễn dịch, dinh dưỡng; tế bào thích nghi (phì đại, tăng sản, teo, chuyển sản) hoặc chết tế bào (hoại tử, apoptosis) | `T-09.4.5` Tổn Thương Tế Bào & Đáp Ứng | KEEP | EXPAND | S-09.5 `[SRC]` | Giữ nguyên cơ chế tổn thương tế bào và cách thích nghi. |
| M-09.10 | S-09.6 | Diễn biến bệnh và khái niệm lâm sàng: bệnh cấp tính vs mạn tính; giai đoạn tiềm tàng/khởi phát/toàn phát/kết thúc; triệu chứng (chủ quan), dấu hiệu (khách quan), hội chứng | `T-09.4.6` Diễn Biến Bệnh & Khái Niêm Lâm Sàng | KEEP | EXPAND | S-09.6 `[SRC]` | Giữ nguyên khái niệm diễn biến bệnh và triệu chứng/dấu hiệu/hội chứng. |
| M-09.11 | S-09.7 | Dự phòng, chẩn đoán và điều trị theo cơ chế: dự phòng nguyên phát/thứ phát/tam cấp; chẩn đoán kết hợp bệnh sử/khám/xét nghiệm/hình ảnh; điều trị loại bỏ nguyên nhân/chặn mắt xích bệnh sinh/hỗ trợ chức năng/giảm triệu chứng | `T-09.4.7` Dự Phòng, Chẩn Đoán & Điều Trị Theo Cơ Chế | KEEP | EXPAND | S-09.7 `[SRC]` | Gộp dự phòng, chẩn đoán, điều trị thành tiểu mục ứng dụng. |
| M-09.12 | — | Ví dụ từ viêm họng đến biến chứng (liên cầu tan máu nhóm A → viêm họng → thấp tim); sốt khác tăng thân nhiệt (sốt virus 39°C vs say nóng 41°C) | `T-09.5.1` Ví dụ 1: Từ Viêm Họng Đến Biến Chứng & Sốt Khác Tăng Thân Nhiệt | MERGE | MOVE | S-09.2, S-09.4 (example-box) `[SRC]` | Hộp ví dụ nguồn đã có sẵn, giữ nguyên số liệu. |
| M-09.13 | — | Cách nhớ: 5 dấu hiệu viêm (Đỏ — Nóng — Sưng — Đau — Mất chức năng); Chuỗi sốt 3 bước (tác nhân ngoại sinh → cytokine IL-1/IL-6/TNF → PGE₂ ở dưới đồi → nâng điểm điều nhiệt); Phân biệt nhanh: sốt = "máy điều hòa bị chỉnh lên"; tăng thân nhiệt = "máy điều hòa vẫn cũ nhưng phòng quá nóng" | `T-09.5.2` Mẹo nhớ Viêm & Sốt | MERGE | MOVE | S-09.3, S-09.4 (callout) `[SRC]` | Callout nguồn đã có sẵn. |
| M-09.14 | — | Sơ đồ thuật toán chuỗi viêm và sốt (Mermaid) | `T-09.5.3` Sơ Đồ Chuỗi Viêm & Sốt (Mermaid) | ADD | — | `[ADDED: Mermaid flowchart]` | Chuyển quy tắc của S-09.3, S-09.4 thành flowchart; không thêm dữ kiện mới. |
| M-09.15 | — | Placeholder hình viêm, sốt, tổn thương tế bào | `T-09.5.4` Minh Họa Trực quan (Placeholders) | ADD | — | `[ADDED: figure placeholders]` + `[FIGURE]` | Nguồn có 0 hình (`I-09.04`); đặt placeholder theo `FIGURE_POLICY`. |
| M-09.16 | — | Tóm tắt nội dung trọng tâm & quy tắc ghi nhớ | `T-09.6.1` Tóm tắt Nội dung Trọng tâm & Quy tắc Ghi nhớ | MERGE | MOVE | S-09.1–S-09.7 `[SRC]` | Gộp bệnh nguyên, bệnh sinh, viêm, sốt, tổn thương tế bào, diễn biến bệnh, dự phòng/điều trị thành tóm tắt. |
| M-09.17 | — | Bảng tổng hợp công thức, đơn vị, quy ước dấu | `T-09.6.2` Bảng Tổng hợp Công thức & Lưu ý | ADD | — | `[ADDED: summary concept tables]` | Nguồn có 0 bảng (`I-09.05`); bổ sung bảng tổng hợp. |
| M-09.18 | — | Bộ 10 câu hỏi/bài tập tự lượng giá | `T-09.7` Đánh giá & Bài tập tự lượng giá | ADD | — | `[ADDED: exercises]` | N源 hoàn toàn không có bài tập (Q3). |
| M-09.19 | — | Đáp án & hướng dẫn giải từng bước | `T-09.7.4` Đáp án & Hướng dẫn Giải Chi tiết (Answer Key) | ADD | — | `[ADDED: step-by-step answer key]` | Mỗi đáp án ghi `LO` và cấp độ; phân tích bệnh nguyên/bệnh sinh hiển đủ bước. |
| M-09.20 | — | Danh mục tài liệu tham khảo và ghi chú truy vết theo R4 | `T-09.8.1` Tài liệu Tham khảo & Đọc thêm | ADD | — | `[ADDED: reference section structure]` + `[VERIFY: textbook references needed]` | Nguồn `D-09` có 0 trích dẫn (`I-09.05`, `V-09.04`); chờ người dùng cung cấp giáo trình chuẩn. |

**Tổng cộng:** 20 dòng ma trận.

---

## B. Coverage Check

### 1. Kiểm tra độ phủ S-ID từ Audit Register

- **Danh sách S-ID trong `01_audit/ch09_audit.md` (tổng cộng = 7 S-ID):** `S-09.1`, `S-09.2`, `S-09.3`, `S-09.4`, `S-09.5`, `S-09.6`, `S-09.7`.
- **Ánh xạ từng S-ID trong Ma trận Mapping (Bảng A):**
  - `S-09.1` → `M-09.05` (`T-09.4.1`)
  - `S-09.2` → `M-09.06` (`T-09.4.2`)
  - `S-09.3` → `M-09.07` (`T-09.4.3`)
  - `S-09.4` → `M-09.08` (`T-09.4.4`)
  - `S-09.5` → `M-09.09` (`T-09.4.5`)
  - `S-09.6` → `M-09.10` (`T-09.4.6`)
  - `S-09.7` → `M-09.11` (`T-09.4.7`)
- **Số S-ID chưa được ánh xạ (Unmapped / Missing S-IDs): 0** (độ phủ **100,0%**).

### 2. Thống kê hành động chính (Primary Action Counts)

| Primary Action | Số dòng ma trận | Tỷ lệ (%) | Danh sách Row ID |
|---|---|---|---|
| **ADD** (khung sư pháp, bảng, hình, ví dụ/bài tập mới) | 12 | 60,0% | M-09.01, M-09.02, M-09.03, M-09.04, M-09.14, M-09.15, M-09.17, M-09.18, M-09.19, M-09.20 |
| **KEEP** (giữ nội dung cốt lõi tại đúng phân khu) | 7 | 35,0% | M-09.05, M-09.06, M-09.07, M-09.08, M-09.09, M-09.10, M-09.11 |
| **MERGE** | 1 | 5,0% | M-09.16 |
| **MOVE** | 0 | 0,0% | (dùng làm secondary cho M-09.12, M-09.13, M-09.16) |
| **REMOVE** | 0 | 0,0% | Không có dòng REMOVE (bảo toàn 100% dữ liệu nguồn) |
| **Tổng cộng** | **20 dòng** | **100,0%** | — |

### 3. Ước tính tỷ lệ nội dung mới và thống kê thẻ

- **Dung lượng nguồn gốc (`D-09`):** 2881 từ (bảo toàn toàn bộ).
- **Dung lượng dự kiến bản thảo hoàn chỉnh (`ch09_draft.md`):** khoảng **5.000–5.500 từ** (đáp ứng `TARGET_LENGTH_PER_CHAPTER: not shorter than source; no upper limit`), tương đương **1,7–1,9 lần** nguồn.

---

## C. Chapter Restructuring Plan

### C.1 Đề cương chi tiết đến cấp Tiểu mục / Chủ đề

```text
Chương 9: Bệnh nguyên và bệnh sinh (tên tạm, chờ xác nhận MANIFEST)
├── 1. Tổng quan chương (Chapter Overview) {T-09.1}
│   ├── 1.1 Tên chương, giới thiệu khái quát & phạm vi nội dung {T-09.1.1} (M-09.01)
│   └── 1.2 Kiến thức tiên kỳ & Thời lượng học tập dự kiến {T-09.1.2} (M-09.02)
├── 2. Mục tiêu học tập (Learning Objectives) {T-09.2}
│   └── 2.1 Chuẩn đầu ra Kiến thức, Kỹ năng, Vận dụng và Đánh giá mô hình (LO-1..LO-4) {T-09.2.1} (M-09.03)
├── 3. Đặt vấn đề & Ý nghĩa thực tiễn (Introduction) {T-09.3}
│   └── 3.1 Tại sao cần hiểu bệnh nguyên và bệnh sinh {T-09.3.1} (M-09.04)
├── 4. Nội dung bài giảng chính (Main Content) {T-09.4}
│   ├── 4.1 Bệnh Nguyên: Căn Nguyên & Điều Kiện {T-09.4.1} [SRC: S-09.1] (M-09.05)
│   ├── 4.2 Bệnh Sinh: Từ Nguyên Nhân Tới Biểu Hiện {T-09.4.2} [SRC: S-09.2] (M-09.06)
│   ├── 4.3 Viêm {T-09.4.3} [SRC: S-09.3] (M-09.07)
│   ├── 4.4 Sốt {T-09.4.4} [SRC: S-09.4] (M-09.08)
│   ├── 4.5 Tổn Thương Tế Bào & Đáp Ứng {T-09.4.5} [SRC: S-09.5] (M-09.09)
│   ├── 4.6 Diễn Biến Bệnh & Khái Niêm Lâm Sàng {T-09.4.6} [SRC: S-09.6] (M-09.10)
│   └── 4.7 Dự Phòng, Chẩn Đoán & Điều Trị Theo Cơ Chế {T-09.4.7} [SRC: S-09.7] (M-09.11)
├── 5. Ví dụ minh họa & Quy trình thực hành (Examples & Illustrations) {T-09.5}
│   ├── 5.1 Ví dụ 1: Từ Viêm Họng Đến Biến Chứng & Sốt Khác Tăng Thân Nhiệt {T-09.5.1} [SRC] (M-09.12)
│   ├── 5.2 Mẹo nhớ Viêm & Sốt {T-09.5.2} [SRC] (M-09.13)
│   ├── 5.3 Sơ Đồ Chuỗi Viêm & Sốt (Mermaid) {T-09.5.3} (M-09.14)
│   └── 5.4 Minh Họa Trực quan (Placeholders) {T-09.5.4} (M-09.15)
├── 6. Tóm tắt chương (Chapter Summary) {T-09.6}
│   ├── 6.1 Tóm tắt Nội dung Trọng tâm & Quy tắc Ghi nhớ {T-09.6.1} (M-09.16)
│   └── 6.2 Bảng Tổng hợp Công thức & Lưu ý {T-09.6.2} (M-09.17)
├── 7. Đánh giá & Bài tập tự lượng giá (Review & Assessment) {T-09.7}
│   ├── 7.1 Câu hỏi lý thuyết: Nhận biết & Thông hiểu (LO-1) {T-09.7.1} (phần của M-09.18)
│   ├── 7.2 Bài tập áp dụng: Phân tích bệnh nguyên/bệnh sinh (LO-2, LO-3) {T-09.7.2} (phần của M-09.18)
│   ├── 7.3 Câu hỏi phân tích & vận dụng nâng cao (LO-3, LO-4) {T-09.7.3} (phần của M-09.18)
│   └── 7.4 Đáp án & Hướng dẫn giải chi tiết (Answer Key) {T-09.7.4} (M-09.19)
└── 8. Tài liệu tham khảo (References) {T-09.8}
    └── 8.1 Danh mục Tài liệu tham khảo & Đọc thêm {T-09.8.1} (M-09.20)
```

### C.2 Kế hoạch bổ sung nội dung mới và lý do sư pháp

1. **Khung sư pháp T1–T3:** Tên chương, giới thiệu, kiến thức tiên kỳ, thời lượng học tập, 4 chuẩn đầu ra `LO-1`..`LO-4`.
2. **Sơ đồ thuật toán Mermaid (`T-09.5.3`):** Chuỗi viêm và sốt.
3. **Placeholder hình (`T-09.5.4`):** Viêm, sốt, tổn thương tế bào.
4. **Bảng tổng hợp mới (`T-09.6.2`):** Tổng hợp công thức, đơn vị, lưu ý lâm sàng.
5. **Bộ 10 câu hỏi/bài tập + đáp án (`T-09.7`):** Nguồn hoàn toàn không có đánh giá.
6. Giữ nguyên toàn bộ nội dung nguồn; không cắt nội dung (Q2).

### C.3 Rủi ro & Biện pháp kiểm soát

- **Rủi ro 1 (Tên chương chưa chốt):** Xác nhận tại MANIFEST (Q1).
- **Rủi ro 2 (Nguồn vừa, 2881 từ):** Nếu mở rộng lên 5.000–5.500 thì tỷ lệ 1,7–1,9×. Đây là mở rộng khung sư pháp và bài tập, không cắt nội dung nguồn.
- **Rủi ro 3 (0 bài tập, 0 hình):** Bổ sung `[ADDED]` bài tập và `[FIGURE]` placeholder (Q3, Q4).
- **Rủi ro 4 (0 tài liệu tham khảo):** Đặt `[VERIFY]` (Q5), không bịa nguồn.

### C.4 Chuẩn đầu ra Học tập (Draft LO)

- **`LO-1` (Kiến thức):** Phát biểu định nghĩa bệnh nguyên, bệnh sinh, viêm, sốt; phân biệt nguyên nhân với điều kiện nguy cơ; liệt kê 5 dấu hiệu kinh điển của viêm.
- **`LO-2` (Kỹ năng):** Phân tích chuỗi bệnh sinh (tác nhân → tổn thương → rối loạn chức năng → biểu hiện); phân biệt sốt với tăng thân nhiệt.
- **`LO-3` (Vận dụng):** Giải thích cơ chế viêm (5 giai đoạn, chất trung gian) và sốt (PGE₂/điểm điều nhiệt); áp dụng để phân tích bệnh nhân viêm nhiễm.
- **`LO-4` (Đánh giá mô hình):** Đánh giá vai trò của viêm trong phòng vệ và bệnh lý; liên hệ rối loạn miễn dịch (tự miễn, quá mẫn, suy giảm miễn dịch) với bệnh lý `[DOMAIN_RULES: chỉ giải thích cơ chế, không liều/chỉ định]`.

### C.5 Glossary & Chuẩn hóa

| Thuật ngữ | Dạng trong nguồn | Dạng chuẩn hóa | Ghi chú |
|---|---|---|---|
| Bệnh nguyên | `Bệnh nguyên` | **Bệnh nguyên (etiology)** | Giữ nguyên. |
| Bệnh sinh | `Bệnh sinh` | **Bệnh sinh (pathogenesis)** | Giữ nguyên. |
| Viêm | `Viêm` | **Viêm (inflammation)** | Giữ nguyên. |
| Sốt | `Sốt` | **Sốt (fever)** | Giữ nguyên. |
| Tăng thân nhiệt | `Tăng thân nhiệt` | **Tăng thân nhiệt (hyperthermia)** | Giữ nguyên. |
| Điểm điều nhiệt | `Điểm điều nhiệt` | **Điểm điều nhiệt (set point)** | Giữ nguyên. |
| Histamine | `histamine` | **Histamine** | Giữ nguyên. |
| Prostaglandin | `prostaglandin` | **Prostaglandin** | Giữ nguyên. |
| Cytokine | `cytokine` | **Cytokine** | Giữ nguyên. |
| Chemokine | `chemokine` | **Chemokine** | Giữ nguyên. |
| TNF | `TNF` | **TNF (tumor necrosis factor)** | Giữ nguyên. |
| IL-1, IL-6 | `IL-1`, `IL-6` | **IL-1**, **IL-6 (interleukin)** | Giữ nguyên. |
| Bổ thể | `Bổ thể` | **Bổ thể (complement)** | Giữ nguyên. |
| SIRS | `SIRS` | **SIRS (systemic inflammatory response syndrome)** | Giữ nguyên. |
| Sepsis | `Sepsis` | **Sepsis (nhiễm khuẩn huyết)** | Giữ nguyên. |
| Hoại tử | `hoại tử` | **Hoại tử (necrosis)** | Giữ nguyên. |
| Apoptosis | `apoptosis` | **Apoptosis (chết tế bào theo chương trình)** | Giữ nguyên. |
| Triệu chứng | `Triệu chứng` | **Triệu chứng (symptom)** | Giữ nguyên. |
| Dấu hiệu | `Dấu hiệu` | **Dấu hiệu (sign)** | Giữ nguyên. |
| Hội chứng | `Hội chứng` | **Hội syndrome (syndrome)** | Giữ nguyên. |

---

## D. Verification Items Carried Forward

| V-ID | Nội dung cần kiểm chứng | Loại | Mục T-ID tiếp nhận | Kế hoạch xử lý trong S3 |
|---|---|---|---|---|
| `V-09.01` | Tên chương chính xác | reference | `T-09.1` | Xác nhận MANIFEST (Q1). |
| `V-09.02` | Giá trị sốt ($38,8^\circ C$, $39^\circ C$, $41^\circ C$) | number | `T-09.4.4`, `T-09.5.1` | Giữ đúng nguồn; gắn `[VERIFY]`. |
| `V-09.03` | 0 hình vẽ/sơ đồ trong nguồn | structure | `T-09.5.4` | Đặt `[FIGURE]` placeholder (Q4). |
| `V-09.04` | 0 tài liệu tham khảo | reference | `T-09.8.1` | Đặt `[VERIFY: reference needed …]` (Q5). |

---

## E. Open Questions for Gate A

1. **Q1 (Tên chương):** Xác nhận tên Ch09 tại `MANIFEST.md` (hiện dùng "Bệnh nguyên và bệnh sinh").
2. **Q2 (Nguồn vừa, mở rộng):** Nguồn 2881 từ, 7 mục; S3 mở rộng lên ~5.000–5.500 bằng khung sư pháp và bài tập. Đồng ý?
3. **Q3 (Bài tập):** Đồng ý S3 bổ sung bộ 10 câu hỏi/bài tập `[ADDED]`?
4. **Q4 (Hình):** Đồng ý S3 đặt placeholder `[FIGURE]` cho viêm, sốt, tổn thương tế bào?
5. **Q5 (Tài liệu tham khảo):** Đồng ý để `[VERIFY: reference needed …]`, `APPROVED_REFERENCE_LIST: none`?

---

## F. Not verified / limitations

- Chỉ dựa trên D-09; 0 trích dẫn; 0 hình vẽ; 0 bài tập trong nguồn.
- Tất cả giá trị số giữ nguyên nguồn; gắn `[VERIFY]` khi cần chuyên gia xác nhận.
- Dừng tại GATE A theo R9.

---

GATE A: STOP. Awaiting user approval of the Content Mapping Matrix. Do not begin the transformation.