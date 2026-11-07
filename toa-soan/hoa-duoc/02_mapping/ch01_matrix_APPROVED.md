# ch01_matrix.md — S2 Mapping & Restructuring Plan · Chương 01

**Môn:** Hóa vô cơ dược · **Stage:** S2 Mapping · **Ngày:** 2026-11-07  
**Nguồn đầu vào:** `00_source_original/ch01_doc-hvc-1.html` (D-01), `01_audit/ch01_audit.md`  
**Khung cấu trúc:** Template v2 (STEM-quantitative, DISCIPLINE_TYPE theo `00_config.md`)  
**Quy tắc:** Chỉ lập kế hoạch tái cấu trúc & ánh xạ S-ID → T-ID; KHÔNG viết nội dung bài giảng chi tiết; dừng ở GATE A.

---

## A. Content Mapping Matrix

| Row ID | S-ID(s) | Summary (≤15 words) | Target T-ID and Name | Primary Action | Secondary Actions | Provenance After Transformation | Notes and Risks |
|---|---|---|---|---|---|---|---|
| M-01.01 | — | Khung tổng quan, tên chương, phạm vi và ngữ cảnh môn Dược | `T-01.1.1` Chương 1: Đại cương liên kết hóa học, Thuyết Lewis & Quy tắc Bát tử | ADD | — | `[ADDED: structural frame]` | Nguồn D-01 thiếu T1; dựng theo chuẩn Template v2. |
| M-01.02 | — | Kiến thức nền tảng và thời lượng học tập ước tính (1,5 h) | `T-01.1.2` Phạm vi, Tiên quyết & Thời lượng học | ADD | — | `[ADDED: study rule estimate]` | Áp dụng STUDY_TIME_RULE: ~1.400 từ nguồn → 1 h lý thuyết + 30 min bài tập. |
| M-01.03 | — | Mục tiêu học tập (Kiến thức, Kỹ năng, Năng lực ứng dụng) | `T-01.2.1` Mục tiêu học tập chuẩn đầu ra (LO 1–4) | ADD | — | `[ADDED: learning objectives]` | D-01 không có LO; tổng hợp từ S-01.1–S-01.3; không thêm chuẩn ngoài nguồn. |
| M-01.04 | — | Bối cảnh và tầm quan trọng của liên kết phân tử trong ngành Dược | `T-01.3.1` Đặt vấn đề & Ý nghĩa liên kết trong Dược học | ADD | EXPAND | `[ADDED: pedagogical context]` | Dẫn nhập nối hóa đại cương với hóa học các chất thuốc vô cơ. |
| M-01.05 | S-01.1 | Năng lượng liên kết, độ dài liên kết và mối quan hệ bậc liên kết | `T-01.4.1` Các đại lượng đặc trưng của liên kết hóa học | KEEP | REWRITE, EXPAND | S-01.1 `[SRC]` + `[ADDED: definitions]` + `[VERIFY: numbers]` | Chuẩn hóa ký hiệu `r` (bỏ `d_lk` theo I-07); định nghĩa bậc liên kết (I-10); V-01, V-02. |
| M-01.06 | S-01.1 | Góc liên kết và momen lưỡng cực phân tử (định nghĩa vector, đơn vị) | `T-01.4.2` Góc liên kết, Momen lưỡng cực & Độ phân cực | MOVE | EXPAND, REWRITE | S-01.1 `[SRC]` + `[ADDED: vector formula explanation]` | Tách `μ` momen liên kết và `μ_pt` momen phân tử (I-08); bổ sung định nghĩa biến `q, d` (I-09); giữ đơn vị D kèm SI C·m. |
| M-01.07 | S-01.1 | Phân loại liên kết dựa trên ngưỡng hiệu độ âm điện Pauling (Δχ) | `T-01.4.3` Bản chất liên kết & Ngưỡng hiệu độ âm điện | MOVE | REWRITE | S-01.1 `[SRC]` + `[VERIFY: convention]` | Trình bày ngưỡng 0,4 và 1,7 dưới dạng quy ước thực nghiệm (I-21, V-04); bổ sung bảng so sánh. |
| M-01.08 | S-01.2, S-01.7 | Thuyết Lewis, quy tắc bát tử và công thức tính điện tích hình thức (FC) | `T-01.4.4` Thuyết Lewis & Điện tích hình thức (Formal Charge) | MERGE | EXPAND | S-01.2 `[SRC]` + S-01.7 `[SRC]` | Gộp công thức FC với tiêu chuẩn cấu trúc bền; giải thích rõ tiêu chí cực tiểu hóa \|FC\| (I-14). |
| M-01.09 | S-01.2 | Hiện tượng lai hóa cộng hưởng và cấu trúc cộng hưởng ion đa nguyên tử | `T-01.4.5` Cấu trúc cộng hưởng (Resonance Structures) | KEEP | REWRITE | S-01.2 `[SRC]` + `[ADDED: clarification]` | Giữ nguyên các ví dụ CO₃²⁻, NO₃⁻, SO₄²⁻, benzen; tránh dùng nhầm thuật ngữ "lai hóa orbital" (I-13). |
| M-01.10 | S-01.3, S-01.6 | Ba trường hợp ngoại lệ quy tắc bát tử (thiếu e, e lẻ, mở rộng) | `T-01.4.6` Các ngoại lệ của Quy tắc Bát tử | MERGE | REWRITE | S-01.3 `[SRC]` + S-01.6 `[SRC]` + `[VERIFY: theory]` | Gộp lý thuyết và các ví dụ minh họa BF₃/NH₃, PCl₅, SF₆; chuyển văn phong luyện thi (I-18); xử lý V-08. |
| M-01.11 | S-01.1, S-01.3, S-01.4, S-01.6 | Tổng hợp ý nghĩa liên kết, độ tan, ổn định thuốc và vai trò NO sinh học | `T-01.4.7` Ý nghĩa và ứng dụng trong Dược học | MERGE | REWRITE | S-01.1, S-01.3, S-01.4, S-01.6 `[SRC]` + `[VERIFY: pharmacology]` | Gộp 4 đoạn ý nghĩa trùng lặp (DUP-01, DUP-02); chỉ giữ khẳng định NO–guanylyl cyclase trong nguồn (V-07); xử lý CO theo Q2. |
| M-01.12 | S-01.5 | Bài tập mẫu tính điện tích hình thức cho phân tử CO₂ và ion NO₃⁻ | `T-01.5.1` Ví dụ tính toán: Xác định điện tích hình thức (CO₂, NO₃⁻) | KEEP | REWRITE | S-01.5 `[SRC]` | Trình bày chuẩn hóa theo cấu trúc Given \| Find \| Approach \| Solution \| Check; kiểm tra tính toán bằng script. |
| M-01.13 | S-01.7 | Quy trình 4 bước lập công thức Lewis và lựa chọn cấu trúc ưu thế | `T-01.5.2` Quy trình chuẩn hóa: 4 bước thiết lập công thức Lewis | MOVE | REWRITE | S-01.7 `[SRC]` | Chuyển từ "Cách nhớ" (CALL-01.2) thành quy trình thuật toán sư phạm rõ ràng; làm rõ tiêu chí chọn cấu trúc bền. |
| M-01.14 | — | Sơ đồ tư duy dạng Mermaid mô tả phân nhánh liên kết & ngoại lệ | `T-01.5.3` Sơ đồ tổng hợp các dạng liên kết và ngoại lệ bát tử | ADD | — | `[ADDED: diagram]` | Dùng cú pháp Mermaid `graph TD` theo FIGURE_POLICY; không mô tả hình cấu trúc vẽ tay. |
| M-01.15 | — | Tóm tắt các khái niệm then chốt, quy tắc và nguyên lý trọng tâm | `T-01.6.1` Tóm tắt nội dung cốt lõi | ADD | — | `[ADDED: summary]` | Bảng tóm tắt đối chiếu năng lượng, độ dài, góc, momen; 3 ngoại lệ bát tử. |
| M-01.16 | — | Bảng tổng hợp các công thức tính toán và hằng số của chương | `T-01.6.2` Bảng công thức và đại lượng cần nhớ | ADD | — | `[ADDED: formula sheet]` | Hệ thống hóa công thức FC, momen lưỡng cực `μ`, quy đổi Debye sang SI (C·m). |
| M-01.17 | — | Bộ câu hỏi kiểm tra đánh giá: Nhận biết, Thông hiểu (phủ LO-1, LO-2) | `T-01.7.1` Câu hỏi lý thuyết & Thông hiểu | ADD | — | `[ADDED: assessment questions]` | Câu hỏi trắc nghiệm/tự luận ngắn về bát tử, momen lưỡng cực, cộng hưởng. |
| M-01.18 | — | Bài tập tính toán điện tích hình thức và dự đoán cấu trúc bền (phủ LO-3) | `T-01.7.2` Bài tập áp dụng & Tính toán | ADD | — | `[ADDED: exercises]` | Bài tập tính FC cho SO₄²⁻, O₃, BF₄⁻; kèm đáp án chi tiết và các bước kiểm tra điện tích. |
| M-01.19 | — | Câu hỏi phân tích, vận dụng nâng cao và giải thích hiện tượng Dược học (phủ LO-4) | `T-01.7.3` Câu hỏi phân tích & Vận dụng nâng cao | ADD | — | `[ADDED: advanced assessment]` | Giải thích tính thuận từ của NO, nguyên nhân PCl₅ tồn tại nhưng NCl₅ không tồn tại. |
| M-01.20 | — | Hướng dẫn giải và thang điểm chi tiết cho các câu hỏi T7 | `T-01.7.4` Hướng dẫn giải chi tiết (Answer Key) | ADD | — | `[ADDED: answer key]` | Lời giải từng bước có kiểm tra đơn vị và bảo toàn electron. |
| M-01.21 | — | Danh mục tài liệu tham khảo giáo trình chuẩn và ghi chú nguồn gốc R4 | `T-01.8.1` Tài liệu tham khảo | ADD | — | `[ADDED / VERIFY: references needed]` | Ghi nhận tài liệu nguồn không có trích dẫn; đưa đề xuất sách giáo khoa Hóa vô cơ Dược theo R4/V-11. |

---

## B. Coverage Check

### 1. Kiểm tra độ phủ S-ID từ Audit Register
- Danh sách S-ID từ `ch01_audit.md`: `S-01.1`, `S-01.2`, `S-01.3`, `S-01.4`, `S-01.5`, `S-01.6`, `S-01.7` (Tổng cộng: 7 S-ID).
- Danh sách S-ID xuất hiện trong Ma trận Mapping (Bảng A):
  - `S-01.1` → M-01.05, M-01.06, M-01.07, M-01.11
  - `S-01.2` → M-01.08, M-01.09
  - `S-01.3` → M-01.10, M-01.11
  - `S-01.4` → M-01.11
  - `S-01.5` → M-01.12
  - `S-01.6` → M-01.10, M-01.11
  - `S-01.7` → M-01.08, M-01.13
- **Số S-ID bị bỏ sót (Missing): 0** (Độ phủ đạt 100,0%).
- *Đã xác nhận bằng script cơ học `hoa-duoc/_tools/check_coverage.py`.*

### 2. Thống kê hành động (Action Counts)
| Hành động chính | Số dòng ma trận | Tỷ lệ (%) | Các dòng tương ứng |
|---|---|---|---|
| **ADD** (Bổ sung khung sư phạm/bài tập) | 12 | 57,1% | M-01.01, M-01.02, M-01.03, M-01.04, M-01.14, M-01.15, M-01.16, M-01.17, M-01.18, M-01.19, M-01.20, M-01.21 |
| **KEEP** (Giữ nguyên cấu trúc cốt lõi) | 3 | 14,3% | M-01.05, M-01.09, M-01.12 |
| **MOVE** (Di chuyển vị trí logic) | 3 | 14,3% | M-01.06, M-01.07, M-01.13 |
| **MERGE** (Hợp nhất nội dung trùng lặp) | 3 | 14,3% | M-01.08, M-01.10, M-01.11 |
| **REMOVE** (Đề xuất loại bỏ) | 0 | 0,0% | Không có (tuân thủ nguyên tắc không tự ý xóa nội dung) |
| **Tổng cộng** | **21 dòng** | **100,0%** | — |

### 3. Ước tính tỷ lệ nội dung mới
- **Nguồn gốc (`[SRC]`):** 1.373 từ (chiếm toàn bộ phần lý thuyết và bài tập mẫu cốt lõi của T4, T5).
- **Bổ sung mới (`[ADDED]`):** Khung T1 (Tổng quan, thời lượng ~150 từ), T2 (Mục tiêu học tập ~120 từ), T3 (Mở đầu ~200 từ), T5.3 (Sơ đồ Mermaid ~100 từ), T6 (Tóm tắt & công thức ~250 từ), T7 (Bộ 8–10 câu hỏi & bài tập kèm đáp án ~800–1.000 từ), T8 (Tài liệu tham khảo ~100 từ).
- **Tổng dung lượng dự kiến:** ~3.000 – 3.500 từ.
- **Tỷ lệ nội dung bổ sung sư phạm:** ~55% – 60% tổng dung lượng bản thảo cuối (chủ yếu nằm ở phần đánh giá T7 và hệ thống hóa T1/T6 theo chuẩn Template v2, nội dung lý thuyết khoa học hoàn toàn bám sát nguồn gốc).

---

## C. Chapter Restructuring Plan

### C.1 Đề cương chi tiết (Chi tiết đến cấp Subsection/Topic)

```text
Chương 1: Đại cương Liên kết Hóa học, Thuyết Lewis & Quy tắc Bát tử
├── 1. Tổng quan chương (Chapter Overview) {T-01.1}
│   ├── 1.1 Tên chương, giới thiệu & phạm vi kiến thức {T-01.1.1} [ADDED]
│   └── 1.2 Kiến thức tiên quyết & Thời lượng học tập dự kiến {T-01.1.2} [ADDED]
├── 2. Mục tiêu học tập (Learning Objectives) {T-01.2}
│   └── 2.1 Chuẩn đầu ra về Kiến thức, Kỹ năng và Năng lực vận dụng {T-01.2.1} [ADDED]
├── 3. Đặt vấn đề & Ý nghĩa thực tiễn (Introduction) {T-01.3}
│   └── 3.1 Vai trò của liên kết hóa học trong thiết kế và tác dụng của dược chất {T-01.3.1} [ADDED]
├── 4. Nội dung bài giảng chính (Main Content) {T-01.4}
│   ├── 4.1 Các đại lượng đặc trưng của liên kết hóa học {T-01.4.1} [SRC: S-01.1]
│   │   ├── 4.1.1 Năng lượng liên kết (E_lk) và độ bền phân tử
│   │   ├── 4.1.2 Độ dài liên kết (r) và ảnh hưởng của bậc liên kết
│   │   └── 4.1.3 Mối quan hệ thực nghiệm giữa bậc liên kết, độ dài và năng lượng
│   ├── 4.2 Góc liên kết, Momen lưỡng cực & Độ phân cực phân tử {T-01.4.2} [SRC: S-01.1]
│   │   ├── 4.2.1 Góc liên kết (θ) và cấu hình không gian cơ bản
│   │   ├── 4.2.2 Momen lưỡng cực liên kết và quy tắc cộng vector momen phân tử (μ_pt)
│   │   └── 4.2.3 Tiêu chuẩn đối xứng và phân loại phân tử có cực / không cực
│   ├── 4.3 Bản chất liên kết & Hiệu độ âm điện Pauling {T-01.4.3} [SRC: S-01.1]
│   │   ├── 4.3.1 Độ âm điện và thang thực nghiệm Pauling (Δχ)
│   │   └── 4.3.2 Phân định liên kết cộng hóa trị không cực, có cực và liên kết ion
│   ├── 4.4 Thuyết Lewis & Điện tích hình thức (Formal Charge) {T-01.4.4} [SRC: S-01.2, S-01.7]
│   │   ├── 4.4.1 Quy tắc bát tử kinh điển (ns²np⁶)
│   │   ├── 4.4.2 Định nghĩa và công thức tính điện tích hình thức (FC = V - N - B/2)
│   │   └── 4.4.3 Tiêu chuẩn đánh giá và lựa chọn cấu trúc Lewis bền vững nhất
│   ├── 4.5 Cấu trúc cộng hưởng (Resonance Structures) {T-01.4.5} [SRC: S-01.2]
│   │   ├── 4.5.1 Bản chất của hiện tượng cộng hưởng (sự giải tỏa electron)
│   │   └── 4.5.2 Phân tích các trường hợp kinh điển: CO₃²⁻, NO₃⁻, SO₄²⁻ và vòng benzen
│   ├── 4.6 Các ngoại lệ của Quy tắc Bát tử {T-01.4.6} [SRC: S-01.3, S-01.6]
│   │   ├── 4.6.1 Phân tử thiếu electron (BeCl₂, BF₃, AlCl₃) và tính acid Lewis
│   │   ├── 4.6.2 Phân tử có số electron lẻ (gốc tự do NO, NO₂, ClO₂) và tính thuận từ
│   │   └── 4.6.3 Bát tử mở rộng / Hợp chất siêu hóa trị (PCl₅, SF₆, H₂SO₄)
│   └── 4.7 Ý nghĩa và ứng dụng trong Dược học {T-01.4.7} [SRC: S-01.1, S-01.3, S-01.4, S-01.6]
│       ├── 4.7.1 Tác động của momen lưỡng cực đến độ tan, tính thấm sinh học của thuốc
│       └── 4.7.2 Phân tử nitric oxide (NO): Cấu trúc gốc tự do và truyền tín hiệu mạch máu
├── 5. Ví dụ minh họa & Quy trình thực hành (Examples & Illustrations) {T-01.5}
│   ├── 5.1 Ví dụ tính toán chi tiết: Xác định điện tích hình thức của CO₂ và NO₃⁻ {T-01.5.1} [SRC: S-01.5]
│   ├── 5.2 Các ví dụ minh họa ngoại lệ bát tử (BF₃·NH₃, PCl₅, SF₆, NO) {T-01.5.2} [SRC: S-01.6]
│   ├── 5.3 Quy trình chuẩn 4 bước thiết lập công thức Lewis tối ưu {T-01.5.3} [SRC: S-01.7]
│   └── 5.4 Sơ đồ hệ thống hóa các dạng liên kết hóa học (Mermaid) {T-01.5.4} [ADDED]
├── 6. Tóm tắt chương (Chapter Summary) {T-01.6}
│   ├── 6.1 Bảng đối chiếu các đại lượng đặc trưng và 3 nhóm ngoại lệ {T-01.6.1} [ADDED]
│   └── 6.2 Hệ thống công thức, đơn vị và quy tắc then chốt {T-01.6.2} [ADDED]
├── 7. Đánh giá & Bài tập tự lượng giá (Review & Assessment) {T-01.7}
│   ├── 7.1 Câu hỏi nhận biết và thông hiểu (LO-1, LO-2) {T-01.7.1} [ADDED]
│   ├── 7.2 Bài tập áp dụng tính toán điện tích hình thức & độ phân cực (LO-3) {T-01.7.2} [ADDED]
│   ├── 7.3 Câu hỏi phân tích, ngoại lệ và liên hệ dược lý học (LO-4) {T-01.7.3} [ADDED]
│   └── 7.4 Hướng dẫn giải chi tiết và biểu điểm đánh giá {T-01.7.4} [ADDED]
└── 8. Tài liệu tham khảo (References) {T-01.8}
    └── 8.1 Danh mục tài liệu tham khảo giáo trình chuẩn {T-01.8.1} [ADDED / VERIFY]
```

### C.2 Kế hoạch bổ sung nội dung mới (`[ADDED]`) và lý do
1. **Khung T1, T2, T3 (Mở đầu & Mục tiêu):** Cần thiết cho tính sư phạm đại học; nguồn D-01 bắt đầu đột ngột bằng `<h4>1. Các đại lượng đặc trưng...` mà không có tiêu đề, mở đầu hay mục tiêu.
2. **Quy trình 4 bước (T-01.5.3):** Chuẩn hóa từ hộp callout "Cách nhớ" (S-01.7) thành quy trình có các bước thao tác rõ ràng, có căn cứ khoa học thay cho văn phong luyện thi.
3. **Sơ đồ Mermaid (T-01.5.4):** Trực quan hóa mối quan hệ giữa hiệu độ âm điện Δχ và bản chất liên kết, cùng sơ đồ phân loại ngoại lệ bát tử theo đúng `FIGURE_POLICY`.
4. **Bộ câu hỏi & bài tập T7:** Xây dựng bám sát 4 chuẩn đầu ra (LO 1–4) để sinh viên có công cụ tự đánh giá, gồm cả trắc nghiệm và bài tập tính toán từng bước.

### C.3 Rủi ro về độ sâu kiến thức (Depth Risks) & Biện pháp xử lý
- **Rủi ro 1 (Đơn vị và ký hiệu):** Nguồn dùng lẫn lộn Å và pm, Debye và C·m. *Xử lý:* Trình bày giá trị SI chuẩn trước, ghi chú đơn vị truyền thống trong ngoặc đơn (ví dụ: `154 pm (1,54 Å)`), tuân thủ `NOTATION: SI units`.
- **Rủi ro 2 (Khẳng định dược lý):** Nguồn có câu "hoạt hóa enzym Guanylyl Cyclase làm giãn cơ trơn mạch máu (hạ huyết áp)" nhưng không có trích dẫn. *Xử lý:* Giữ đúng khẳng định của nguồn, gắn thẻ `[VERIFY: pharmacology claim without reference]` và không tự ý bịa đặt thêm thông tin liều lượng hay cơ chế lâm sàng chi tiết theo `DOMAIN_RULES`.
- **Rủi ro 3 (Orbital d và bát tử mở rộng):** Việc giải thích PCl₅, SF₆ bằng orbital d là thuyết cổ điển đang có tranh luận. *Xử lý:* Trình bày thuyết orbital d như tài liệu nguồn đã nêu, đồng thời ghi chú mở ngoặc `[VERIFY: modern bonding models]` để người học nhận thức được giới hạn mô hình.

### C.4 Chuẩn hóa thuật ngữ & ký hiệu
| Đại lượng / Thuật ngữ | Ký hiệu nguồn ghi | Ký hiệu chuẩn hóa ở S3 | Ghi chú chuẩn hóa |
|---|---|---|---|
| Độ dài liên kết | $d_{lk}$ hay $r_{lk}$, $r$ | $r$ (hoặc $r_{lk}$) | Thống nhất dùng $r$, đơn vị pm (Å trong ngoặc) |
| Momen lưỡng cực liên kết | $\vec{\mu}$ | $\vec{\mu}_{lk}$ | Tách rõ với momen lưỡng cực phân tử |
| Momen lưỡng cực phân tử | $\vec{\mu}$, $\vec{\mu}_{pt}$ | $\vec{\mu}_{pt} = \sum \vec{\mu}_{i}$ | Tránh tự quy chiếu ký hiệu $\vec{\mu}$ |
| Điện tích hình thức | $FC$ | $FC = V - N - \frac{B}{2}$ | Thống nhất định nghĩa biến: $V$ (valence e), $N$ (non-bonding e), $B$ (bonding e) |
| Hiện tượng cộng hưởng | "lai hóa cộng hưởng" | "Cấu trúc cộng hưởng (Resonance)" | Bỏ chữ "lai hóa" để tránh nhầm với lai hóa orbital ở Chương 3 |

### C.5 Kế hoạch đánh giá (Assessment Plan theo Chuẩn đầu ra)
- **LO-1 (Nhận biết):** Phát biểu định nghĩa các đại lượng liên kết, quy tắc bát tử và 3 nhóm ngoại lệ bát tử → 4 câu hỏi trắc nghiệm khách quan trong T-01.7.1.
- **LO-2 (Thông hiểu):** Phân biệt liên kết cộng hóa trị có cực/không cực và liên kết ion qua ngưỡng Δχ; phân biệt momen liên kết và momen phân tử → 2 câu hỏi giải thích trong T-01.7.1.
- **LO-3 (Vận dụng):** Áp dụng quy trình 4 bước tính điện tích hình thức (FC) và xác định cấu trúc cộng hưởng ưu thế cho các anion vô cơ đa nguyên tử (như $SO_4^{2-}$, $NO_2^-$, $CO_3^{2-}$) → 2 bài tập tự luận tính toán trong T-01.7.2.
- **LO-4 (Phân tích):** Phân tích tính thuận từ và khả năng phản ứng sinh học của gốc tự do NO; so sánh khả năng mở rộng bát tử của các nguyên tố chu kỳ 2 và chu kỳ 3 → 2 câu hỏi phân tích trong T-01.7.3.

---

## D. Verification Items Carried Forward from Audit

Toàn bộ 13 mục trong Verification Queue (`V-01` đến `V-13`) từ `ch01_audit.md` được phân bổ vào các mục mục tiêu tương ứng:

| V-ID | Nội dung cần kiểm chứng | Loại | Mục T-ID tiếp nhận | Biện pháp xử lý trong S3 |
|---|---|---|---|---|
| `V-01` | Số liệu năng lượng liên kết C–C (348), C=C (614), C≡C (839 kJ/mol) | number | `T-01.4.1` | Giữ nguyên số liệu nguồn; gắn thẻ `[VERIFY: handbook value]`; ghi chú điều kiện chuẩn. |
| `V-02` | Độ dài liên kết C–C (1,54 Å), C=C (1,34 Å), C≡C (1,20 Å) | number | `T-01.4.1` | Đổi sang đơn vị pm kèm Å (`154 pm`, `134 pm`, `120 pm`); gắn thẻ `[VERIFY: bond length data]`. |
| `V-03` | Hệ số quy đổi Debye: 1 D = 3,336 × 10⁻³⁰ C·m | constant | `T-01.4.2` | Giữ nguyên; đối chiếu chuẩn SI CODATA. |
| `V-04` | Ngưỡng thực nghiệm hiệu độ âm điện Δχ (0,4 và 1,7) | convention | `T-01.4.3` | Nêu rõ đây là ranh giới quy ước thực nghiệm của Linus Pauling; gắn `[VERIFY: Pauling scale convention]`. |
| `V-05` | Độ dài liên kết C–O trong $CO_3^{2-}$ (1,28 Å) và bậc liên kết 1⅓ | number | `T-01.4.5` | Giữ nguyên theo nguồn; giải thích cơ chế giải tỏa electron liên kết π; gắn `[VERIFY: crystallographic data]`. |
| `V-06` | Số electron hóa trị lẻ của NO (11 e), NO₂ (17 e), ClO₂ (19 e) | number | `T-01.4.6` | Đã kiểm tra số học chuẩn xác; giữ nguyên. |
| `V-07` | NO kích hoạt Guanylyl Cyclase gây giãn cơ trơn, hạ huyết áp | pharmacology | `T-01.4.7` | Giữ nguyên câu khẳng định của nguồn; gắn `[VERIFY: pharmacology reference needed]`; không mở rộng thêm chỉ định lâm sàng. |
| `V-08` | Giải thích bát tử mở rộng bằng phân lớp d trống (3d, 4d) | theory | `T-01.4.6` | Trình bày mô hình orbital d theo nguồn; gắn ghi chú `[VERIFY: model limitation / modern bonding theory]`. |
| `V-09` | BeCl₂, BF₃, AlCl₃ được coi là "Acid Lewis rất mạnh" | claim | `T-01.4.6` | Bổ sung định nghĩa Acid Lewis theo Bronsted-Lowry/Lewis; gắn thẻ `[VERIFY: Lewis acidity comparison]`. |
| `V-10` | Công thức H₂SO₄ với 12 electron quanh lưu huỳnh | formalism | `T-01.4.6` | Phân tích 2 công thức cộng hưởng: cấu trúc đạt bát tử (tách điện tích) và cấu trúc mở rộng bát tử (2 liên kết đôi S=O, FC=0); gắn `[VERIFY]`. |
| `V-11` | Nguồn hoàn toàn không có danh mục tài liệu tham khảo | reference | `T-01.8.1` | Đưa vào danh mục `[VERIFY: Textbook citation required for Inorganic Pharmaceutical Chemistry]`. |
| `V-12` | Định nghĩa năng lượng phân ly liên kết vs. Enthalpy liên kết trung bình | definition | `T-01.4.1` | Làm rõ khái niệm năng lượng phân ly liên kết phân tử hai nguyên tử và giá trị trung bình trong phân tử đa nguyên tử. |
| `V-13` | Tiêu chí chọn cấu trúc Lewis: cực tiểu hóa tổng trị tuyệt đối FC | method | `T-01.4.4`, `T-01.5.3` | Chuẩn hóa quy tắc: ưu tiên tổng $\sum \|FC\|$ nhỏ nhất, sau đó phân bố điện tích âm trên nguyên tử có độ âm điện lớn hơn. |

---

## E. Open Questions for Gate A (Câu hỏi cần người dùng quyết định)

1. **Q1 (Xử lý cụm từ "và CO" - Issue I-01):** Trong S-01.3 dòng 66 có ghi: *"NO và CO minh họa liên hệ giữa cấu hình electron với truyền tín hiệu sinh học và độc tính"*, tuy nhiên phân tử CO không có nội dung giảng giải và không phải ngoại lệ bát tử. Bạn muốn:
   - *(A)* Bỏ cụm từ "và CO" để tập trung hoàn toàn vào NO (ngoại lệ electron lẻ)?
   - *(B)* Giữ lại và bổ sung 1 đoạn ngắn giải thích cơ chế gắn kết của CO với Fe²⁺ Hemoglobin (gắn nhãn `[ADDED]` / `[VERIFY]`)?
2. **Q2 (Quy chuẩn đơn vị độ dài - Issue I-15):** Bạn muốn ưu tiên hệ SI chuẩn (`pm`) và đặt đơn vị truyền thống (`Å`) trong ngoặc đơn (ví dụ: `154 pm (1,54 Å)`), hay giữ nguyên `Å` làm đơn vị chính như bản gốc?
3. **Q3 (Văn phong mục "Đề thi" và "Cách nhớ" - Issue I-18):** Chấp nhận chuyển toàn bộ lời khuyên luyện thi ("3 trường hợp ngoại lệ kinh điển cần nắm chắc trong đề thi", "Cách nhớ") thành các mục học thuật sư phạm chính quy ("Quy trình 4 bước xác định cấu trúc Lewis tối ưu", "Hộp lưu ý trọng tâm")?
4. **Q4 (Dung lượng và bài tập T7):** Bạn đồng ý với kế hoạch bổ sung bộ câu hỏi tự lượng giá T7 (gồm 4 câu trắc nghiệm lý thuyết, 2 bài tập tính FC có lời giải chi tiết, 2 câu hỏi phân tích ngoại lệ) nâng dung lượng chương từ 1.373 từ lên khoảng 3.000–3.500 từ?
5. **Q5 (Tài liệu tham khảo T8):** Hiện nguồn không có bất kỳ trích dẫn nào. Bạn có muốn chỉ định một giáo trình Hóa vô cơ Dược cụ thể (ví dụ: Dược điển VN, hoặc giáo trình Đại học Dược Hà Nội / ĐHYD TP.HCM) để đưa vào danh mục tham khảo được phê duyệt (`APPROVED_REFERENCE_LIST`), hay để agent gắn nhãn `[VERIFY: reference needed]`?

---

## F. Not verified / limitations

- **Phạm vi phân tích:** Chỉ dựa trên tài liệu nguồn `D-01` và kết quả audit `01_audit/ch01_audit.md`. Các chương khác (`D-02` đến `D-09`) chưa được phân tích nội dung, các liên kết chéo chỉ dựa trên tiêu đề từ `MANIFEST.md`.
- **Dữ liệu thực nghiệm:** Các thông số số học (348, 614, 839 kJ/mol; 1,54, 1,34, 1,20 Å; ngưỡng 0,4 và 1,7) được giữ nguyên theo nguồn và gắn cờ `[VERIFY]`, chưa đối chiếu trực tiếp với sổ tay hóa lý chuẩn.
- **Tính toán cơ học:** Các công thức và số học trong ví dụ mẫu CO₂, NO₃⁻ đã được kiểm chứng khớp nội bộ; các bài tập mới tại T7 sẽ được tính toán và kiểm tra lại bằng script tại stage S4.
- **Giới hạn thực thi:** Tuyệt đối không tự ý viết bản thảo S3 trước khi có sự phê duyệt tường minh bằng văn bản tại GATE A từ người dùng.

---

GATE A: STOP. Awaiting user approval of the Content Mapping Matrix. Do not begin the transformation.
