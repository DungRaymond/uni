# ch05_matrix.md — S2 Mapping & Restructuring Plan · Chương 05

**Môn:** Hóa vô cơ dược · **Stage:** S2 Mapping · **Ngày:** 2026-11-09  
**Nguồn đầu vào:** `00_source_original/ch05_doc-hvc-5.html` (D-05), `01_audit/ch05_audit.md`, `_state/carryover_latest.md`  
**Khung cấu trúc:** Template v2 (`T1`–`T8`, `DISCIPLINE_TYPE: STEM-quantitative` theo `00_config.md`)  
**Quy tắc:** Ánh xạ 100% `S-05.1`–`S-05.6` sang `T-05.x.y` không làm mất nội dung; KHÔNG viết bài giảng chi tiết; dừng ở GATE A.

---

## A. Content Mapping Matrix

| Row ID | S-ID(s) | Summary (≤15 words) | Target T-ID and Name | Primary Action | Secondary Actions | Provenance After Transformation | Notes and Risks |
|---|---|---|---|---|---|---|---|
| M-05.01 | — | Tên chương, giới thiệu khái quát và phạm vi nội dung | `T-05.1` Chương 5: Lực liên phân tử & Liên kết hydro | ADD | — | `[ADDED: structural frame]` | Nguồn `D-05` thiếu T1 (`I-05.01`); tên chương chưa có trong file HTML, chỉ ở `MANIFEST.md` — cần xác nhận (Q1). |
| M-05.02 | — | Kiến thức tiên quyết Chương 1–3 và thời lượng học tập dự kiến | `T-05.1.1` / `T-05.1.2` (phần của `T-05.1`) Phạm vi, Kiến thức Tiên quyết & Thời lượng Học tập | ADD | — | `[ADDED: study time estimate]` | Nối `T-01.4.1` (liên kết), `T-02.4.2` ($SN$), áp dụng `STUDY_TIME_RULE`. |
| M-05.03 | — | Bốn chuẩn đầu ra kiến thức, kỹ năng, vận dụng, đánh giá mô hình | `T-05.2` Mục tiêu Học tập (Learning Objectives `LO-1`..`LO-4`) | ADD | — | `[ADDED: learning objectives]` | Suy ra từ `S-05.1`–`S-05.6`; không thêm chuẩn ngoài phạm vi nguồn. |
| M-05.04 | S-05.1 | Ba thành phần lực Van der Waals: Keesom, Debye, London | `T-05.4.1` Lực tương tác Van der Waals | KEEP | EXPAND, REWRITE | S-05.1 `[SRC]` + `[ADDED: quy luật nhiệt độ sôi]` | Công thức chỉ dạng tỷ lệ (∝), thiếu hệ số; chưa có công thức London định lượng (`I-05.02`). |
| M-05.05 | S-05.2 | Bản chất & phân loại liên kết hydro (liên phân tử / nội phân tử) | `T-05.4.2` Liên kết Hydro & Phân loại | KEEP | EXPAND, REWRITE | S-05.2 `[SRC]` + `[ADDED: ứng dụng DNA/protein/thuốc–thụ thể]` | Đã có trong nguồn; chỉ cần hệ thống hóa. |
| M-05.06 | S-05.3 | Ý nghĩa và tác dụng (tóm tắt) | `T-05.6.1` Tóm tắt Nội dung Trọng tâm | MERGE | MOVE | S-05.3 `[SRC]` | Nguồn chỉ có 1 đoạn tóm tắt ngắn (~40 từ); sẽ mở rộng ở S3. |
| M-05.07 | S-05.4 | Ví dụ H2O vs H2S (liên kết hydro ảnh hưởng nhiệt độ sôi) | `T-05.5.1` Ví dụ 5.1: Vì sao $H_2O$ sôi cao hơn $H_2S$? | MERGE | MOVE | S-05.4 `[SRC]` | Hộp ví dụ đã có sẵn; giữ nguyên số liệu. |
| M-05.08 | S-05.5 | Ví dụ acid salicylic & paracetamol (liên kết hydro nội phân tử) | `T-05.5.2` Ví dụ 5.2: Liên kết hydro nội phân tử | MERGE | MOVE | S-05.5 `[SRC]` | Hai ca: acid salicylic & paracetamol; giữ nguyên số liệu $t_{nc}$. |
| M-05.09 | S-05.6 | Mẹo ghi nhớ "F–O–N mới đủ mạnh" | `T-05.6.1` (phần quy tắc ghi nhớ) | MERGE | — | S-05.6 `[SRC]` | Callout "Cách nhớ"; gộp vào mục tóm tắt. |
| M-05.10 | — | Bảng tổng hợp lực liên phân tử & liên kết hydro | `T-05.6.2` Bảng Tổng hợp Công thức & Quy tắc | ADD | — | `[ADDED: summary concept tables]` | Nguồn có 0 bảng (`I-05.03`); bổ sung bảng so sánh Keesom/Debye/London và liên kết hydro liên/nội phân tử. |
| M-05.11 | — | Sơ đồ Mermaid quy trình xác định loại liên kết अंतर phân tử | `T-05.5.3` Sơ đồ thuật toán xác định tương tác liên phân tử (Mermaid) | ADD | — | `[ADDED: Mermaid flowchart]` | Chuyển quy tắc của `S-05.1`–`S-05.2` thành `flowchart TD`; không thêm dữ kiện mới. |
| M-05.12 | — | Placeholder hình liên kết hydro DNA, acid salicylic, Van der Waals | `T-05.5.4` Minh họa Trực quan (Placeholders) | ADD | — | `[ADDED: figure placeholders]` + `[FIGURE]` | Nguồn có 0 hình (`I-05.04`); đặt placeholder theo `FIGURE_POLICY`, không mô tả như đã vẽ. |
| M-05.13 | — | Bộ 10 câu hỏi/bài tập tự lượng giá | `T-05.7` Đánh giá & Bài tập tự lượng giá | ADD | — | `[ADDED: exercises]` | Phủ `LO-1`..`LO-4`; 10 câu/bài có đáp án chi tiết (Q5). |
| M-05.14 | — | Đáp án & hướng dẫn giải từng bước | `T-05.7.4` Đáp án & Hướng dẫn Giải Chi tiết (Answer Key) | ADD | — | `[ADDED: step-by-step answer key]` | Mỗi đáp án ghi `LO` và cấp độ; phép tính hiển đủ bước để S4 tái tính. |
| M-05.15 | — | Danh mục tài liệu tham khảo và ghi chú truy vết theo R4 | `T-05.8.1` Tài liệu Tham khảo & Đọc thêm | ADD | — | `[ADDED: reference section structure]` + `[VERIFY: textbook references needed]` | Nguồn `D-05` có 0 trích dẫn (`I-05.05`, `V-05.06`); chờ người dùng cung cấp giáo trình chuẩn. |

**Tổng cộng:** 15 dòng ma trận.

---

## B. Coverage Check

### 1. Kiểm tra độ phủ S-ID từ Audit Register

- **Danh sách S-ID trong `01_audit/ch05_audit.md` (tổng cộng = 6 S-ID):** `S-05.1`, `S-05.2`, `S-05.3`, `S-05.4`, `S-05.5`, `S-05.6`.
- **Ánh xạ từng S-ID trong Ma trận Mapping (Bảng A):**
  - `S-05.1` → `M-05.04` (`T-05.4.1`)
  - `S-05.2` → `M-05.05` (`T-05.4.2`)
  - `S-05.3` → `M-05.06` (`T-05.6.1`)
  - `S-05.4` → `M-05.07` (`T-05.5.1`)
  - `S-05.5` → `M-05.08` (`T-05.5.2`)
  - `S-05.6` → `M-05.09` (`T-05.6.1`)
- **Số S-ID chưa được ánh xạ (Unmapped / Missing S-IDs): 0** (độ phủ **100,0%**).
- **Báo cáo kiểm tra cơ học:** sẽ chạy `_tools/check_coverage.py` tại S2/S3.

### 2. Thống kê hành động chính (Primary Action Counts)

| Primary Action | Số dòng ma trận | Tỷ lệ (%) | Danh sách Row ID |
|---|---|---|---|
| **ADD** (khung sư phạm, bảng, hình, ví dụ/bài tập mới) | 9 | 60,0% | M-05.01, M-05.02, M-05.03, M-05.10, M-05.11, M-05.12, M-05.13, M-05.14, M-05.15 |
| **KEEP** (giữ nội dung cốt lõi tại đúng phân khu) | 2 | 13,3% | M-05.04, M-05.05 |
| **MERGE** (hợp nhất nội dung trùng lặp/phân tán) | 4 | 26,7% | M-05.06, M-05.07, M-05.08, M-05.09 |
| **MOVE** (di chuyển về đúng phân khu Template v2) | 0 | 0,0% | Dùng làm secondary cho M-05.06–M-05.09 |
| **SPLIT** (tách mục lớn — chỉ là secondary action) | 0 | 0,0% | — |
| **REMOVE** (đề xuất loại bỏ) | 0 | 0,0% | Không có dòng REMOVE (bảo toàn 100% dữ liệu nguồn) |
| **Tổng cộng** | **15 dòng** | **100,0%** | — |

### 3. Ước tính tỷ lệ nội dung mới và thống kê thẻ

- **Dung lượng nguồn gốc (`D-05`):** 1.129 từ (bảo toàn toàn bộ trong `T3`, `T4`, `T5`, `T6`).
- **Dung lượng dự kiến bản thảo hoàn chỉnh (`ch05_draft.md`):** khoảng **4.000–4.500 từ** (đáp ứng `TARGET_LENGTH_PER_CHAPTER: not shorter than source; no upper limit`), tương đương **3,5–4,0 lần** nguồn.
  - Nội dung lý thuyết và ví dụ phát triển trực tiếp từ nguồn (`T3` + `T4` + `T5.1`–`T5.2` + `T6.1`): ~1.800 – 2.100 từ.
  - Khung sư phạm, bảng tổng hợp mới, sơ đồ Mermaid, placeholder hình và bộ 10 câu hỏi/bài tập kèm đáp án (`T1`–`T2`, `T4.6`, `T5.3`–`T5.4`, `T6.2`, `T7`, `T8`): ~2.200 – 2.400 từ (khoảng 55% tổng dung lượng).

---

## C. Chapter Restructuring Plan

### C.1 Đề cương chi tiết đến cấp Tiểu mục / Chủ đề (Subsection / Topic Outline)

```text
Chương 5: Lực liên phân tử & Liên kết hydro (tên tạm, chờ xác nhận MANIFEST)
├── 1. Tổng quan chương (Chapter Overview) {T-05.1}
│   ├── 1.1 Tên chương, giới thiệu khái quát & phạm vi nội dung {T-05.1.1} (M-05.01)
│   └── 1.2 Kiến thức tiên quyết & Thời lượng học tập dự kiến {T-05.1.2} (M-05.02)
├── 2. Mục tiêu học tập (Learning Objectives) {T-05.2}
│   └── 2.1 Chuẩn đầu ra Kiến thức, Kỹ năng, Vận dụng và Đánh giá mô hình (LO-1..LO-4) {T-05.2.1} (M-05.03)
├── 3. Đặt vấn đề & Ý nghĩa thực tiễn (Introduction) {T-05.3}
│   └── 3.1 Từ liên kết cộng hóa trị đến lực liên phân tử (M-05.03 phần mở đầu)
├── 4. Nội dung bài giảng chính (Main Content) {T-05.4}
│   ├── 4.1 Lực tương tác Van der Waals {T-05.4.1} [SRC: S-05.1] (M-05.04)
│   │   ├── 4.1.1 Lực định hướng (Keesom)
│   │   ├── 4.1.2 Lực cảm ứng (Debye)
│   │   └── 4.1.3 Lực phân tán (London) & quy luật nhiệt độ sôi
│   ├── 4.2 Liên kết Hydro & Phân loại {T-05.4.2} [SRC: S-05.2] (M-05.05)
│   │   ├── 4.2.1 Bản chất liên kết hydro
│   │   ├── 4.2.2 Liên kết hydro liên phân tử
│   │   └── 4.2.3 Liên kết hydro nội phân tử
│   └── 4.3 Ứng dụng trong Dược học (DNA, protein, thuốc–thụ thể, Lipinski) {T-05.4.3} (phần của S-05.2)
├── 5. Ví dụ minh họa & Quy trình thực hành (Examples & Illustrations) {T-05.5}
│   ├── 5.1 Ví dụ 5.1: Vì sao $H_2O$ sôi cao hơn $H_2S$? {T-05.5.1} [SRC: S-05.4] (M-05.07)
│   ├── 5.2 Ví dụ 5.2: Liên kết hydro nội phân tử (acid salicylic, paracetamol) {T-05.5.2} [SRC: S-05.5] (M-05.08)
│   ├── 5.3 Sơ đồ thuật toán xác định tương tác liên phân tử (Mermaid) {T-05.5.3} (M-05.11)
│   └── 5.4 Minh họa Trực quan (Placeholders) {T-05.5.4} (M-05.12)
├── 6. Tóm tắt chương (Chapter Summary) {T-05.6}
│   ├── 6.1 Tóm tắt Nội dung Trọng tâm & Quy tắc Ghi nhớ {T-05.6.1} [SRC: S-05.3, S-05.6] (M-05.06, M-05.09)
│   └── 6.2 Bảng Tổng hợp Công thức & Quy tắc {T-05.6.2} (M-05.10)
├── 7. Đánh giá & Bài tập tự lượng giá (Review & Assessment) {T-05.7}
│   ├── 7.1 Câu hỏi lý thuyết: Nhận biết & Thông hiểu (LO-1) {T-05.7.1} (phần của M-05.13)
│   ├── 7.2 Bài tập áp dụng: Tính toán & phân loại (LO-2, LO-3) {T-05.7.2} (phần của M-05.13)
│   ├── 7.3 Câu hỏi phân tích & vận dụng nâng cao (LO-3, LO-4) {T-05.7.3} (phần của M-05.13)
│   └── 7.4 Đáp án & Hướng dẫn giải chi tiết (Answer Key) {T-05.7.4} (M-05.14)
└── 8. Tài liệu tham khảo (References) {T-05.8}
    └── 8.1 Danh mục Tài liệu tham khảo & Đọc thêm {T-05.8.1} (M-05.15)
```

### C.2 Kế hoạch bổ sung nội dung mới và lý do sư phạm

1. **Khung sư phạm đại học (`T-05.1`–`T-05.3`):** Bổ sung tên chương, phạm vi, kiến thức tiên quyết (liên kết cộng hóa trị Chương 1, $SN$ VSEPR Chương 2), thời lượng học tập và 4 chuẩn đầu ra `LO-1`..`LO-4`. Nguồn `D-05` chỉ là đoạn nội dung (`I-05.01`).
2. **Ba bảng hệ thống hóa mới:** `Bảng 5.1` so sánh ba thành phần Van der Waals (Keesom/Debye/London); `Bảng 5.2` so sánh liên kết hydro liên phân tử vs nội phân tử; `Bảng 5.3` quy tắc Lipinski. Nguồn có 0 bảng (`I-05.03`).
3. **Sơ đồ thuật toán Mermaid (`T-05.5.3`):** Quy trình xác định loại tương tác liên phân tử dựa trên cực tính, khối lượng, bán kính.
4. **Placeholder hình (`T-05.5.4`):** 3 placeholder `[FIGURE]`: mạng lưới liên kết hydro DNA, cấu trúc acid salicylic/paracetamol, sơ đồ ba thành phần Van der Waals.
5. **Bộ 10 câu hỏi/bài tập (`T-05.7`):** Nâng nguồn hoàn toàn không có hoạt động đánh giá thành hệ thống đánh giá đầy đủ.

### C.3 Rủi ro về độ sâu kiến thức (Depth Risks) & Biện pháp kiểm soát

- **Rủi ro 1 (Tên chương chưa chốt — `I-05.01`):** File HTML không có tên chương, chỉ có `<h4>1. Lực tương tác Van der Waals</h4>`. *Biện pháp:* Xác nhận tên tại MANIFEST (Q1); nếu chưa có, dùng tên tạm "Lực liên phân tử & Liên kết hydro".
- **Rủi ro 2 (Thiếu nội dung nhiệt động học — `I-05.02`):** Đề tài "Nhiệt động học hóa học" nhưng nguồn chỉ có lực liên phân tử. *Biện pháp:* Hỏi người dùng (Q2) xem nội dung enthalpy/entropy/Gibbs có ở file khác hay chưa có.
- **Rủi ro 3 (Chỉ 2 công thức tỷ lệ, không có định lượng — `I-05.02`):** *Biện pháp:* Chỉ giữ đúng nội dung nguồn trừ khi người dùng đồng ý bổ sung công thức London định lượng (Q3), gắn `[ADDED]`.
- **Rủi ro 4 (0 bảng, 0 hình — `I-05.03`, `I-05.04`):** *Biện pháp:* Bổ sung bảng và placeholder `[FIGURE]` theo `FIGURE_POLICY` (Q4).
- **Rủi ro 5 (0 tài liệu tham khảo — `I-05.05`):** *Biện pháp:* Đặt thẻ `[VERIFY: reference needed …]` (Q5), không bịa nguồn.

### C.4 Đối chiếu dung lượng nguồn và dung lượng kế hoạch

- **Dung lượng nguồn (`D-05`):** 1.129 từ; 0 bảng; 2 hộp công thức; 2 hộp ví dụ; 1 callout; 0 câu hỏi/bài tập.
- **Dung lượng kế hoạch (`ch05_draft.md`):** ~4.000 – 4.500 từ (đáp ứng `TARGET_LENGTH_PER_CHAPTER: not shorter than source; no upper limit`), tương đương **3,5–4,0 lần** nguồn.
- **Thời lượng học tập ước tính (`STUDY_TIME_RULE`):** ~2.000 từ nội dung lý thuyết/ví dụ chính → khoảng 1 giờ 20 phút; 10 câu hỏi/bài tập → 40 phút; tổng **≈ 2 giờ** (làm tròn 2–2,5 giờ).

### C.5 Dự thảo Chuẩn đầu ra Học tập (Draft Learning Objectives)

- **`LO-1` (Kiến thức – Nhận biết & Thông hiểu):** Phát biểu được ba thành phần lực Van der Waals (Keesom, Debye, London) và bản chất liên kết hydro; phân loại liên kết hydro liên phân tử và nội phân tử.
- **`LO-2` (Kỹ năng – Phân loại & tính toán):** Phân loại được loại tương tác liên phân tử dựa trên cực tính/khối lượng/bán kính; giải thích được vì sao $H_2O$ sôi cao hơn $H_2S$ mặc dù khối lượng nhỏ hơn.
- **`LO-3` (Vận dụng – Giải thích hiện tượng dược học):** Vận dụng liên kết hydro để giải thích ổn định DNA, cấu trúc protein, tương tác thuốc–thụ thể và quy tắc Lipinski.
- **`LO-4` (Năng lực đánh giá mô hình):** Đánh giá được giới hạn của mô hình liên kết hydro so với liên kết cộng hóa trị; nhận diện khi nào liên kết hydro là yếu tố then chốt trong thiết kế thuốc.

### C.6 Kế hoạch kiểm tra đánh giá (Assessment Plan theo cấp độ nhận thức)

| Tiểu mục T7 | Cấp độ nhận thức | Chuẩn đầu ra được phủ | Số lượng & Dạng câu hỏi dự kiến |
|---|---|---|---|
| `T-05.7.1` | Knowledge & Comprehension | `LO-1` | 4 câu: định nghĩa lực Van der Waals; ba thành phần; phân loại liên kết hydro; công thức tỷ lệ. |
| `T-05.7.2` | Application | `LO-2`, `LO-3` | 3 bài: phân loại tương tác cho các phân tử cho trước; giải thích $H_2O$/$H_2S$; áp dụng quy tắc Lipinski. |
| `T-05.7.3` | Analytical & Advanced | `LO-3`, `LO-4` | 3 câu: phân tích liên kết hydro trong DNA/protein; đánh giá vai trò liên kết hydro trong thiết kế thuốc; so sánh acid salicylic vs para. |
| `T-05.7.4` | Answer Key | `LO-1`..`LO-4` | Hướng dẫn giải chi tiết 10/10 câu, mỗi câu ghi `LO` và cấp độ. |

### C.7 Ứng viên Thuật ngữ (Glossary Candidates) & Chuẩn hóa Ký hiệu

| Thuật ngữ / Đại lượng | Dạng viết trong nguồn (`D-05`) | Dạng chuẩn hóa cho S3 & Glossary | Ghi chú chuẩn hóa |
|---|---|---|---|
| Lực tương tác Van der Waals | `Lực tương tác Van der Waals` | **Lực liên phân tử Van der Waals** | Giữ nguyên, thêm "liên phân tử". |
| Lực định hướng (Keesom) | `Lực định hướng (Keesom)` | **Lực định hướng (Keesom)** | Giữ nguyên. |
| Lực cảm ứng (Debye) | `Lực cảm ứng (Debye)` | **Lực cảm ứng (Debye)** | Giữ nguyên. |
| Lực phân tán (London) | `Lực phân tán (London)` | **Lực phân tán (London)** | Giữ nguyên. |
| Liên kết Hydro | `Liên kết Hydro (Hydrogen Bond)` | **Liên kết hydro (hydrogen bond)** | Viết thường "hydro", giữ tiếng Anh trong ngoặc. |
| Liên kết hydro liên phân tử | `Liên kết Hydro liên phân tử` | **Liên kết hydro liên phân tử** | Giữ nguyên. |
| Liên kết hydro nội phân tử | `Liên kết Hydro nội phân tử` | **Liên kết hydro nội phân tử** | Giữ nguyên. |
| Quy tắc Lipinski (Rule of 5) | `Quy tắc Lipinski (Rule of 5)` | **Quy tắc Lipinski (Rule of 5)** | Giữ nguyên. |
| Mẹo F–O–N | `"F–O–N mới đủ mạnh"` | **Mẹo "F–O–N mới đủ mạnh"** | Giữ nguyên, là mnemonic học tập. |

### C.8 Liên kết chéo giữa các chương (Cross-References)

- **Liên kết ngược về Chương 1 (`D-01`):**
  - Liên kết cộng hóa trị là nền tảng để so sánh với liên kết hydro (yếu hơn khoảng 10 lần).
- **Liên kết ngược về Chương 2 (`D-02`):**
  - `T-02.4.2` — số phối trí lập thể $SN$ và hình học phân tử; liên quan đến hình ảnh không gian của liên kết hydro (vòng 5–6 cạnh).
- **Liên kết xuôi sang Chương 6 (`D-06` — Phức chất):**
  - Liên kết hydro là nền cho tương tác thuốc–thụ thể và phức hợp trong cơ thể.
- **Liên kết xuôi sang Chương 7 (`D-07` — Đồng phân):**
  - Liên kết hydro nội phân tử ảnh hưởng đến tính chất đồng phân (nhiệt độ sôi, độ tan).

---

## D. Verification Items Carried Forward from Audit

Toàn bộ hạng mục Verification Queue từ `01_audit/ch05_audit.md` được gán vào các mục tiêu `T-05.x.y`:

| V-ID | Nội dung cần kiểm chứng | Loại | Mục T-ID tiếp nhận | Kế hoạch xử lý trong S3 |
|---|---|---|---|---|
| `V-05.01` | Tên chương chính xác (chưa có trong file HTML, chỉ ở MANIFEST) | reference / structure | `T-05.1` | Xác nhận tên tại MANIFEST (Q1); dùng tên tạm nếu chưa có. |
| `V-05.02` | Phạm vi: có enthalpy/entropy/Gibbs hay không (đề tài "Nhiệt động học hóa học" vs nội dung lực liên phân tử) | scope / coverage | `T-05.3`, `T-05.4` | Hỏi người dùng (Q2); nếu không có, giữ chỉ lực liên phân tử. |
| `V-05.03` | Công thức London định lượng (nguồn chỉ có tỷ lệ ∝) | formula | `T-05.4.1` | Chỉ giữ đúng nội dung nguồn trừ khi người dùng đồng ý bổ sung (Q3), gắn `[ADDED]`. |
- `V-05.04` | 0 bảng, 0 hình trong nguồn | structure | `T-05.6.2`, `T-05.5.4` | Bổ sung bảng và placeholder `[FIGURE]` (Q4). |
| `V-05.05` | 0 tài liệu tham khảo | reference | `T-05.8.1` | Đặt thẻ `[VERIFY: reference needed …]` (Q5), không bịa nguồn. |

---

## E. Open Questions for Gate A (Câu hỏi xin ý kiến phê duyệt tại Gate A)

1. **Q1 (Tên chương):** `MANIFEST.md` ghi tên chương 05 là gì? Nguồn file chỉ bắt đầu từ `<h4>1. Lực tương tác Van der Waals</h4>` không có tên chương. Cần xác nhận tên chính xác trước khi đặt tiêu đề S3.
2. **Q2 (Nội dung nhiệt động học):** Tên đề tài trong MANIFEST là "Nhiệt động học hóa học" nhưng nội dung D-05 chỉ là "Lực liên phân tử & liên kết hydro". Nội dung enthalpy/entropy/Gibbs có nằm ở file khác hay chưa có trong nguồn? Cần chốt phạm vi chương.
3. **Q3 (Bổ sung công thức & tính toán):** Nguồn chỉ có 2 công thức tỷ lệ (∝), không có công thức định lượng, không có bài tập. Bạn có đồng ý S3 bổ sung công thức London định lượng, ví dụ tính toán năng lượng liên kết hydro, và bộ bài tập (gắn `[ADDED]`), hay chỉ giữ đúng nội dung nguồn?
4. **Q4 (Hình vẽ & bảng):** Nguồn có 0 bảng, 0 hình. Bạn có đồng ý S3 đặt placeholder `[FIGURE]` cho mạng lưới liên kết hydro DNA, cấu trúc acid salicylic/paracetamol, và sơ đồ ba thành phần Van der Waals?
5. **Q5 (Tài liệu tham khảo):** Nguồn có 0 trích dẫn và `APPROVED_REFERENCE_LIST: none`. Bạn đồng ý để S3 đặt thẻ `[VERIFY: reference needed …]` và chờ cung cấp giáo trình chuẩn?

---

## F. Not verified / limitations

- **Phạm vi dữ liệu:** Chỉ dựa trên `00_source_original/ch05_doc-hvc-5.html` (D-05) và `01_audit/ch04_audit.md` (đối chiếu cấu trúc). File nguồn được giữ nguyên trạng tuyệt đối (READ-ONLY).
- **Số liệu & tài liệu tham khảo:** Không có trích dẫn gốc trong D-05; tất cả công thức, giá trị (10–40 kJ/mol, nhiệt độ sôi, $t_{nc}$) sẽ gắn `[VERIFY]` khi viết nếu không có trong nguồn.
- **Nội dung bổ sung ngoài nguồn:** Công thức định lượng, bài tập, hình vẽ, bảng là kiến thức giáo trình chuẩn, chưa có trong D-05; cần người dùng duyệt ở Gate A (Q3, Q4).
- **Kiểm tra cơ haine:** Độ dài file và thống kê thẻ được kiểm tra bằng script Python (xem mục A); chưa có script `check_coverage.py` chuyên dụng cho audit (sẽ chạy tại S2/S3).
- **Giới hạn giai đoạn:** Dừng ngay tại GATE A theo R9 và mục 7.2; chưa thực hiện viết bản thảo Stage S3.

---
GATE A: STOP. Awaiting user approval of the Content Mapping Matrix. Do not begin the transformation.
