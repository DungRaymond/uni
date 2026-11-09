# ch04_audit.md — S1 Audit · Chương 04 (D-04)

**Môn:** Y dược – Master Lecture Notes · **Stage:** S1 Audit · **Ngày:** 2026-11-09  
**Nguồn audit:** `00_source_original/ch04_doc-myd-4.html` (D-04) — READ-ONLY, không sửa.  
**Ngữ cảnh đối chiếu:** `00_config.md`, `00_source_original/MANIFEST.md`, `_state/carryover_latest.md`, `_state/glossary_running.md`, `_state/verification_list_running.md`.  
**Nguyên tắc:** Chỉ phân tích và lập hồ sơ truy vết; không viết lại, không sửa lỗi, không tự bổ sung kiến thức học thuật.

---

## A. Document Inventory

| D-ID | File | Type | Chapter | Slug gốc | Num | Lines | Approx. words | h4 / h5 | Formula boxes | Example boxes | Callouts | Tables | Figures/Images | References |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| D-04 | `00_source_original/ch04_doc-myd-4.html` | chapter-source (HTML fragment, MathJax) | 04 | doc-myd-4 | 4 | 28 | 1204 (đếm bằng script) | 7 / 0 | 0 | 1 | 1 | 0 | 0 / 0 | 0 |

**Đặc điểm kỹ thuật (kiểm tra bằng script Python):**
- **Mã hóa & dung lượng:** UTF-8; ~7.300 byte; 28 dòng; thẻ HTML đóng/mở cân bằng (`7 <h4>`, `3 <ul>`, `~15 <li>`, `1 <ol>`, `4 <li>` lồng, `3 <p>`, `1 <div>`, `18 <strong>`, `1 <em>`, `6 <br>`).
- **Biểu thức toán/hóa (MathJax):** 0 khối công thức hiển thị riêng (`$$…$$`), 0 biểu thức inline `$…$`.
- **Cấu trúc tiêu đề:** File bắt đầu trực tiếp bằng `<h4>1. Thành phần máu và các chỉ số cơ bản</h4>`; không có `<h1>/<h2>/<h3>` và không có tên chương bên trong file (tên chương chỉ nằm ở `MANIFEST.md`: `Máu, tạo máu và rối loạn huyết học cơ bản`).
- **Hộp nội dung:** 0 `formula-box`; 1 `example-box` (phân loại thiếu máu theo MCV/MCH: 3 ca); 1 `callout` (Dấu hiệu cần đánh giá khẩn ×1).
- **Bảng biểu & Hình vẽ:** 0 bảng (`<table>`), 0 hình vẽ/sơ đồ.
- **Tài liệu tham khảo:** 0 trích dẫn (`http`, `doi`, `ISBN`, "Tài liệu tham khảo", "NXB", "giáo trình" đều bằng 0). Trạng thái: **none present**.
- **Phân bổ số từ theo 7 mục (tổng = 1204 từ):** `S-04.1` (~180) + `S-04.2` (~190) + `S-04.3` (~190) + `S-04.4` (~180) + `S-04.5` (~200) + `S-04.6` (~170) + `S-04.7` (~94) — xem mục B.

> **Ghi chú dung lượng:** Nếu ngắn vừa (1204 từ), 7 mục, 0 công thức, 1 ví dụ, 1 callout. Không có bài tập, không có bảng, không có hình, không có tài liệu tham khảo.

---

## B. Source Section Register

| S-ID | D-ID | chapter | heading path | location | content types | approx. words | ≤20-word summary |
|---|---|---|---|---|---|---|---|
| S-04.1 | D-04 | 04 | `1. Thành phần máu và các chỉ số cơ bản` | dòng 1–4 | theory/principle; definition | ~180 | Máu = huyết tương + thành phần hữu hình (hồng cầu, bạch cầu, tiểu cầu); hematocrit; hemoglobin; thể tích máu thay đổi theo tuổi, giới, thai kỳ. |
| S-04.2 | D-04 | 04 | `2. Vận chuyển khí` | dòng 5–7 | theory/principle; mechanism | ~190 | O₂ gắn thuận nghịch với hemoglobin; CO₂ vận chuyển hòa tan/gắn protein/bicarbonate (carbonic anhydrase); hemoglobin đệm H⁺. |
| S-04.3 | D-04 | 04 | `3. Tạo máu và biệt hóa tế bào` | dòng 8–9 | theory/principle; mechanism | ~190 | Tạo máu ở tủy xương đỏ từ tế bào gốc đa tiềm năng; biệt hóa thành dòng tủy và dòng lympho; cytokine điều hòa. |
| S-04.4 | D-04 | 04 | `4. Sinh hồng cầu và chuyển hóa sắt` | dòng 10–14 | theory/principle; mechanism | ~180 | EPO kích thích tiền thân hồng cầu; sắt, folate, B₁₂ cần cho hemoglobin/DNA; hồng cầu lưu hành 120 ngày; hepcidin điều hòa sắt. |
| S-04.5 | D-04 | 04 | `5. Cầm máu, đông máu và tiêu sợi huyết` | dòng 15–19 | theory/principle; mechanism | ~200 | Cầm máu ban đầu (co mạch, vWF, tiểu cầu); đông máu (yếu tố → thrombin → fibrin); điều hòa (antithrombin, protein C/S, plasmin). |
| S-04.6 | D-04 | 04 | `6. Rối loạn huyết học thường gặp` | dòng 20–26 | theory/principle; application | ~170 | Thiếu máu (phân loại MCV), tan máu, tăng hồng cầu, giảm bạch cầu trung tính, giảm tiểu cầu, bệnh ác tính (leukemia, lymphoma, myeloma). |
| S-04.7 | D-04 | 04 | `7. Đọc công thức máu theo trình tự` | dòng 27–28 | theory/principle; application | ~94 | Bước 1–4: đánh giá Hb/Hct → MCV/RDW/hồng cầu lưới → ferritin/sắt/B₁₂ → tổng bạch cầu → tiểu cầu/phết máu. |

**Tổng cộng:** 7 S-ID (`S-04.1` đến `S-04.7`); tổng số từ 1204 từ (phân bổ mục) / 1204 (toàn file).

---

## C. Content Coverage Matrix

| chapter | Definitions | Theory | Mechanisms | Equations | Examples | Case studies | Applications | Questions/Exercises | References | Figures/Tables |
|---|---|---|---|---|---|---|---|---|---|---|
| 04 (D-04) | Present (S-04.1–S-04.7) | Present (S-04.1–S-04.6) | Present (S-04.2 vận chuyển khí; S-04.3 tạo máu; S-04.4 sinh hồng cầu; S-04.5 đông máu) | Absent | Present (S-04.6 rối loạn huyết học; S-04.7 ví dụ 3 ca thiếu máu) | Present (S-04.6 ca thiếu sắt, thiếu B₁₂) | Present (S-04.1–S-04.7 đọc công thức máu, theo dõi đáp ứng điều trị) | Absent | Absent | Absent (0 bảng, 0 hình vẽ) |

**Ghi chú chi tiết về độ phủ:**
- **Definitions & Theory — Present:** Định nghĩa thành phần máu, hematocrit, hemoglobin; vận chuyển khí (O₂, CO₂); tạo máu; sinh hồng cầu; chuyển hóa sắt; đông máu; rối loạn huyết học.
- **Mechanisms — Present:** Cơ chế vận chuyển O₂/CO₂ hemoglobin; động triggers sinh hồng cầu (EPO); liên kết sắt; cơ chế đông máu (thrombin, fibrin); cơ chế tiêu sợi huyết (plasmin).
- **Equations — Absent:** 0 công thức toán/hóa.
- **Examples — Present:** 1 ví dụ (3 ca phân loại thiếu máu theo MCV/MCH: thiếu sắt, thiếu B₁₂, đọc hồng cầu lưới).
- **Case studies — Present:** 3 ca bệnh cụ thể (nữ 28 tuổi thiếu sắt, nam 65 tuổi thiếu B₁₂, đọc thêm hồng cầu lưới).
- **Applications — Present:** Ứng dụng dược lý: đọc công thức máu, định hướng xét nghiệm, theo dõi đáp ứng điều trị, đánh giá khẩn (chảy máu, sốt khi giảm bạch cầu).
- **Questions/Exercises — Absent:** 0 câu hỏi, 0 bài tập trong nguồn.
- **References — Absent:** 0 tài liệu tham khảo.
- **Figures/Tables — Absent:** 0 bảng và 0 hình.

---

## D. Notation and Terminology Inventory

### D.1 Ký hiệu và đơn vị

| Symbol / unit | As written in source | Defined? | Location | Note |
|---|---|---|---|---|
| Hematocrit | `Hematocrit` | Yes | S-04.1 (dòng 2) | Tỷ lệ thể tích hồng cầu trong máu. |
| Hemoglobin | `hemoglobin` | Yes | S-04.1 (dòng 2) | Protein vận chuyển oxy. |
| MCV | `MCV` | Yes | S-04.6 (dòng 22) | Thể tích trung bình hồng cầu (fL). |
| MCH | `MCH` | Yes | S-04.6 (dòng 22) | Lượng hemoglobin trung bình mỗi hồng cầu (pg). |
| RDW | `RDW` | Yes | S-04.7 (dòng 28) | Độ rộng phân bố thể tích hồng cầu. |
| EPO | `EPO` | Yes | S-04.4 (dòng 11) | Erythropoietin - hormone kích thích sinh hồng cầu. |
| Hepcidin | `Hepcidin` | Yes | S-04.4 (dòng 14) | Hormone điều hòa sắt của gan. |
| Ferritin | `ferritin` | Yes | S-04.4 (dòng 14) | Protein dự trữ sắt. |
| vWF | `von Willebrand factor` | Yes | S-04.5 (dòng 16) | Yếu tố Willebrand - hỗ trợ tiểu cầu bám collagen. |
| Thrombin | `thrombin` | Yes | S-04.5 (dòng 17) | Enzym chuyển fibrinogen thành fibrin. |
| Plasmin | `plasmin` | Yes | S-04.5 (dòng 18) | Enzym phân giải fibrin trong tiêu sợi huyết. |

### D.2 Thuật ngữ / Glossary candidates

| Thuật ngữ / Đại lượng | Dạng viết trong nguồn (`D-04`) | Dạng chuẩn hóa đề xuất | Ghi chú chuẩn hóa |
|---|---|---|---|
| Huyết tương | `Huyết tương` | **Huyết tương (plasma)** | Giữ nguyên. |
| Thành phần hữu hình | `thành phần hữu hình` | **Thành phần hữu hình (formed elements)** | Giữ nguyên. |
| Hồng cầu | `hồng cầu` | **Hồng cầu (red blood cell – RBC)** | Giữ nguyên. |
| Bạch cầu | `bạch cầu` | **Bạch cầu (white blood cell – WBC)** | Giữ nguyên. |
| Tiểu cầu | `tiểu cầu` | **Tiểu cầu (platelet)** | Giữ nguyên. |
| Hematocrit | `Hematocrit` | **Hematocrit (Hct)** | Giữ nguyên. |
| Hemoglobin | `hemoglobin` | **Hemoglobin (Hb)** | Giữ nguyên. |
| Erythropoietin | `Erythropoietin` | **Erythropoietin (EPO)** | Giữ nguyên. |
| Bicarbonate | `bicarbonate` | **Bicarbonate (HCO₃⁻)** | Giữ nguyên. |
| Carbonic anhydrase | `carbonic anhydrase` | **Carbonic anhydrase** | Giữ nguyên. |
| Hepcidin | `Hepcidin` | **Hepcidin** | Giữ nguyên. |
| Ferritin | `Ferritin` | **Ferritin** | Giữ nguyên. |
| Thrombin | `Thrombin` | **Thrombin** | Giữ nguyên. |
| Fibrinogen | `fibrinogen` | **Fibrinogen** | Giữ nguyên. |
| Fibrin | `fibrin` | **Fibrin** | Giữ nguyên. |
| Antithrombin | `antithrombin` | **Antithrombin** | Giữ nguyên. |
| Protein C/S | `protein C/S` | **Protein C/S** | Giữ nguyên. |
| Plasmin | `Plasmin` | **Plasmin** | Giữ nguyên. |

---

## E. Open Questions for Gate A (Câu hỏi xin ý kiến phê duyệt tại Gate A)

1. **Q1 (Tên chương):** `MANIFEST.md` ghi tên chương 04 là "Máu, tạo máu và rối loạn huyết học cơ bản". Nguồn file không có tên chương bên trong HTML. Bạn đồng ý dùng tên từ MANIFEST làm tiêu đề chương S3?
2. **Q2 (Nguồn ngắn vừa, 7 mục):** Nguồn 1204 từ, 7 mục, không có bài tập, không có bảng, không có hình. Bạn đồng ý S3 bổ sung khung sư pháp T1–T3, sơ đồ Mermaid quy trình đông máu, và bộ bài tập (gắn `[ADDED]`)?
3. **Q3 (Hình vẽ):** Nguồn có 0 bảng, 0 hình. Bạn đồng ý S3 đặt placeholder `[FIGURE]` cho thành phần máu, quy trình đông máu, chu trình sắt?
4. **Q4 (Tài liệu tham khảo):** Nguồn có 0 trích dẫn và `APPROVED_REFERENCE_LIST: none`. Bạn đồng ý S3 để `[VERIFY: reference needed …]` và chờ cung cấp giáo trình chuẩn?

---

## F. Not verified / limitations

- **Phạm vi dữ liệu:** Chỉ dựa trên `00_source_original/ch04_doc-myd-4.html` (D-04). File nguồn được giữ nguyên trạng tuyệt đối (READ-ONLY).
- **Tài liệu tham khảo:** Không có trích dẫn gốc trong D-04; tất cả giá trị số sẽ gắn `[VERIFY]` khi viết nếu không có trong nguồn.
- **Nội dung bổ sung ngoài nguồn:** Khung sư pháp, bài tập, hình vẽ, bảng tổng hợp là kiến thức giáo trình chuẩn, chưa có trong D-04; cần người dùng duyệt ở Gate A (Q2, Q3).
- **Kiểm tra cơ haine:** Thống kê文档 bằng script Python (xem mục A); chưa có script `check_coverage.py` chuyên dụng cho audit (sẽ chạy tại S2/S3).
- **Giới hạn giai đoạn:** Dừng ngay tại GATE A theo R9 và mục 7.2; chưa thực hiện viết bản thảo Stage S3.

---

GATE A: STOP. Awaiting user approval of the Content Mapping Matrix. Do not begin the transformation.