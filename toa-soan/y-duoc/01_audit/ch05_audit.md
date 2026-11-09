# ch05_audit.md — S1 Audit · Chương 05 (D-05)

**Môn:** Y dược – Master Lecture Notes · **Stage:** S1 Audit · **Ngày:** 2026-11-09  
**Nguồn audit:** `00_source_original/ch05_doc-myd-5.html` (D-05) — READ-ONLY, không sửa.  
**Ngữ cảnh đối chiếu:** `00_config.md`, `00_source_original/MANIFEST.md`, `_state/carryover_latest.md`, `_state/glossary_running.md`, `_state/verification_list_running.md`.  
**Nguyên tắc:** Chỉ phân tích và lập hồ sơ truy vết; không viết lại, không sửa lỗi, không tự bổ sung kiến thức học thuật.

---

## A. Document Inventory

| D-ID | File | Type | Chapter | Slug gốc | Num | Lines | Approx. words | h4 / h5 | Formula boxes | Example boxes | Callouts | Tables | Figures/Images | References |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| D-05 | `00_source_original/ch05_doc-myd-5.html` | chapter-source (HTML fragment, MathJax) | 05 | doc-myd-5 | 5 | 28 | 1083 (đếm bằng script) | 6 / 0 | 0 | 1 | 1 | 1 | 0 / 0 | 0 |

**Đặc điểm kỹ thuật (kiểm tra bằng script Python):**
- **Mã hóa & dung lượng:** UTF-8; ~6.500 byte; 28 dòng; thẻ HTML đóng/mở cân bằng (`6 <h4>`, `1 <table>`, `1 <thead>`, `1 <tbody>`, `3 <tr>`, `9 <th>/<td>`, `4 <ul>`, `~10 <li>`, `3 <p>`, `1 <div>`, `16 <strong>`, `1 <em>`, `5 <br>`).
- **Biểu thức toán/hóa (MathJax):** 0 khối công thức hiển thị riêng (`$$…$$`), 0 biểu thức inline `$…$`.
- **Cấu trúc tiêu đề:** File bắt đầu trực tiếp bằng `<h4>1. Chuyển hóa là gì?</h4>`; không có `<h1>/<h2>/<h3>` và không có tên chương bên trong file (tên chương chỉ nằm ở `MANIFEST.md`: `Chuyển hóa và rối loạn chuyển hóa thường gặp`).
- **Hộp nội dung:** 0 `formula-box`; 1 `example-box` (đái tháo đường và hạ đường huyết: 3 ca); 1 `callout` (Khung tư duy ×1).
- **Bảng biểu & Hình vẽ:** 1 bảng (`<table>`: trạng thái sau ăn/đói ngắn/đói dài), 0 hình vẽ/sơ đồ.
- **Tài liệu tham khảo:** 0 trích dẫn (`http`, `doi`, `ISBN`, "Tài liệu tham khảo", "NXB", "giáo trình" đều bằng 0). Trạng thái: **none present**.
- **Phân bổ số từ theo 6 mục (tổng = 1083 từ):** `S-05.1` (~180) + `S-05.2` (~200) + `S-05.3` (~220) + `S-05.4` (~130) + `S-05.5` (~180) + `S-05.6` (~173) — xem mục B.

> **Ghi chú dung lượng:** Nếu ngắn vừa (1083 từ), 6 mục, 0 công thức, 1 ví dụ, 1 bảng. Không có bài tập, không có hình, không có tài liệu tham khảo.

---

## B. Source Section Register

| S-ID | D-ID | chapter | heading path | location | content types | approx. words | ≤20-word summary |
|---|---|---|---|---|---|---|---|
| S-05.1 | D-05 | 05 | `1. Chuyển hóa là gì?` | dòng 1–2 | theory/principle; definition | ~180 | Chuyển hóa = toàn bộ phản ứng hóa học có enzyme; dị hóa (phân giải, giải phóng năng lượng) và đồng hóa (dùng năng lượng tổng hợp); ATP, NADH, FADH₂. |
| S-05.2 | D-05 | 05 | `2. Chuyển hóa glucid` | dòng 3–8 | theory/principle; mechanism | ~200 | Đường phân (bào tương, 2 ATP ròng + 2 NADH); glycogenesis/glycogenolysis/tân tạo glucose; điều hòa insulin/glucagon. |
| S-05.3 | D-05 | 05 | `3. Chuyển hóa lipid` | dòng 9–12 | theory/principle; mechanism | ~220 | Triglycerid → chylomicron; VLDL/LDL/HDL; lipolysis; beta-oxy hóa acid béo; thể ceton; gan nhiễm mỡ. |
| S-05.4 | D-05 | 05 | `4. Chuyển hóa protein và nitơ` | dòng 13–14 | theory/principle; mechanism | ~130 | Protein → acid amin; khử amin → amoniac → urê (gan) → thận bài tiết; suy gan/thận ảnh hưởng. |
| S-05.5 | D-05 | 05 | `5. Chuyển trạng thái sau ăn và khi đói` | dòng 15–17 | theory/principle; table (data-table) | ~180 | Bảng 3 trạng thái: sau ăn (insulin tăng); đói ngắn (insulin giảm, glucagon tăng); đói dài (thể ceton, giảm dùng protein). |
| S-05.6 | D-05 | 05 | `6. Rối loạn chuyển hóa thường gặp` | dòng 18–21 | theory/principle; application | ~173 | Đái tháo đường, hạ đường huyết, rối loạn lipid máu, toan lactic, tăng uric máu/gút. |

**Tổng cộng:** 6 S-ID (`S-05.1` đến `S-05.6`); tổng số từ 1083 từ (phân bổ mục) / 1083 (toàn file).

---

## C. Content Coverage Matrix

| chapter | Definitions | Theory | Mechanisms | Equations | Examples | Case studies | Applications | Questions/Exercises | References | Figures/Tables |
|---|---|---|---|---|---|---|---|---|---|---|
| 05 (D-05) | Present (S-05.1–S-05.6) | Present (S-05.1–S-05.6) | Present (S-05.2 đường phân/glycogenesis; S-05.3 lipolysis/beta-oxy hóa; S-05.4 khử amin/urê) | Absent | Present (S-05.2 bảng trạng thái chuyển hóa; S-05.6 ví dụ 3 ca đái tháo đường/hạ đường huyết/toan lactic) | Present (S-05.6 ca nam 52 tuổi đái tháo đường, nữ 70 tuổi hạ đường huyết, bệnh nhân sốc nhiễm trùng) | Present (S-05.1–S-05.6 lựa chọn xét nghiệm, theo dõi biến chứng, điều trị nguyên nhân) | Absent | Absent | Present (1 bảng: trạng thái chuyển hóa sau ăn/đói) |

**Ghi chú chi tiết về độ phủ:**
- **Definitions & Theory — Present:** Định nghĩa chuyển hóa, dị hóa, đồng hóa, ATP, NADH, FADH₂; chuyển hóa glucid, lipid, protein, nitơ; chuyển trạng thái sau ăn/đói; rối loạn chuyển hóa.
- **Mechanisms — Present:** Cơ chế đường phân, tổng hợp/phân giải glycogen, tân tạo glucose; lipolysis, beta-oxy hóa acid béo, tạo thể ceton; khử amin acid amin, ciclo urê.
- **Equations — Absent:** 0 công thức toán/hóa.
- **Examples — Present:** 1 bảng (trạng thái chuyển hóa sau ăn/đói ngắn/đói dài); 1 ví dụ (3 ca: đái tháo đường, hạ đường huyết, toan lactic).
- **Case studies — Present:** 3 ca bệnh cụ thể (đái tháo đường, hạ đường huyết, toan lactic do sốc nhiễm trùng).
- **Applications — Present:** Ứng dụng dược lý: lựa chọn xét nghiệm, theo dõi biến chứng, điều trị nguyên nhân rối loạn chuyển hóa.
- **Questions/Exercises — Absent:** 0 câu hỏi, 0 bài tập trong nguồn.
- **References — Absent:** 0 tài liệu tham khảo.
- **Figures/Tables — Present:** 1 bảng (trạng thái chuyển hóa theo thời gian).

---

## D. Notation and Terminology Inventory

### D.1 Ký hiệu và đơn vị

| Symbol / unit | As written in source | Defined? | Location | Note |
|---|---|---|---|---|
| ATP | `ATP` | Yes | S-05.1 (dòng 1) | Chất mang năng lượng chủ yếu. |
| NADH | `NADH` | Yes | S-05.1 (dòng 1) | Mang electron tới chuỗi hô hấp. |
| FADH₂ | `FADH₂` | Yes | S-05.1 (dòng 1) | Mang electron tới chuỗi hô hấp. |
| Glucose | `glucose` | Yes | S-05.2 (dòng 3) | Nguồn năng lượng chính. |
| Pyruvat | `pyruvat` | Yes | S-05.2 (dòng 3) | Sản phẩm đường phân. |
| Acetyl-CoA | `acetyl-CoA` | Yes | S-05.2 (dòng 5) | Sản phẩm oxy hóa pyruvat. |
| Glycogen | `glycogen` | Yes | S-05.2 (dòng 4) | Dạng dự trữ glucose ở gan/cơ. |
| Glucagon | `glucagon` | Yes | S-05.2 (dòng 6) | Hormone tăng đường huyết khi đói. |
| Insulin | `insulin` | Yes | S-05.2 (dòng 6) | Hormone giảm đường huyết sau ăn. |
| Triglycerid | `Triglycerid` | Yes | S-05.3 (dòng 9) | Chất béo trong thức ăn. |
| VLDL | `VLDL` | Yes | S-05.3 (dòng 9) | Lipoprotein tỷ trọng rất thấp từ gan. |
| LDL | `LDL` | Yes | S-05.3 (dòng 9) | Lipoprotein thấp mật độ (đưa cholesterol tới mô). |
| HDL | `HDL` | Yes | S-05.3 (dòng 9) | Lipoprotein cao mật độ (cholesterol ngược về gan). |
| Acetyl-CoA | `acetyl-CoA` | Yes | S-05.3 (dòng 11) | Sản phẩm beta-oxy hóa acid béo. |
| Thể ceton | `thể ceton` | Yes | S-05.3 (dòng 12) | Sản phẩm oxy hóa acid béo khi thiếu insulin. |
| Amoniac | `amoniac` | Yes | S-05.4 (dòng 14) | Chất độc từ khử amin acid amin. |
| Urê | `urê` | Yes | S-05.4 (dòng 14) | Sản phẩm khử độc amoniac ở gan. |
| HbA1c | `HbA1c` | Yes | S-05.6 (dòng 20) | Hemoglobin glucosyl화 - chỉ số đường huyết dài hạn. |
| Lactic acid | `lactat` | Yes | S-05.6 (dòng 20) | Sản phẩm đường phân khi thiếu oxy. |

### D.2 Thuật ngữ / Glossary candidates

| Thuật ngữ / Đại lượng | Dạng viết trong nguồn (`D-05`) | Dạng chuẩn hóa đề xuất | Ghi chú chuẩn hóa |
|---|---|---|---|
| Chuyển hóa | `Chuyển hóa` | **Chuyển hóa (metabolism)** | Giữ nguyên. |
| Dị hóa | `Dị hóa` | **Dị hóa (catabolism)** | Giữ nguyên. |
| Đồng hóa | `Đồng hóa` | **Đồng hóa (anabolism)** | Giữ nguyên. |
| Đường phân | `Đường phân` | **Đường phân (glycolysis)** | Giữ nguyên. |
| Glycogenesis | `Glycogenesis` | **Glycogenesis (tổng hợp glycogen)** | Giữ nguyên. |
| Glycogenolysis | `Glycogenolysis` | **Glycogenolysis (phân giải glycogen)** | Giữ nguyên. |
| Tân tạo glucose | `Tân tạo glucose` | **Tân tạo glucose (gluconeogenesis)** | Giữ nguyên. |
| Lipolysis | `Lipolysis` | **Lipolysis (phân giải lipid)** | Giữ nguyên. |
| Beta-oxy hóa | `Beta-oxy hóa` | **Beta-oxy hóa (beta-oxidation)** | Giữ nguyên. |
| Thể ceton | `Thể ceton` | **Thể ceton (ketone bodies)** | Giữ nguyên. |
| Khử amin | `khử amin` | **Khử amin (deamination)** | Giữ nguyên. |
| Ciclo urê | `ciclo urê` | **Ciclo urê (urea cycle)** | Giữ nguyên. |
| Đái tháo đường | `Đái tháo đường` | **Đái tháo đường (diabetes mellitus)** | Giữ nguyên. |
| Hạ đường huyết | `Hạ đường huyết` | **Hạ đường huyết (hypoglycemia)** | Giữ nguyên. |
| Rối loạn lipid máu | `Rối loạn lipid máu` | **Rối loạn lipid máu (dyslipidemia)** | Giữ nguyên. |
| Toan lactic | `Toan lactic` | **Toan lactic (lactic acidosis)** | Giữ nguyên. |
| Tăng uric máu/gút | `Tăng uric máu/gút` | **Tăng uric máu/gút (hyperuricemia/gout)** | Giữ nguyên. |

---

## E. Open Questions for Gate A (Câu hỏi xin ý kiến phê duyệt tại Gate A)

1. **Q1 (Tên chương):** `MANIFEST.md` ghi tên chương 05 là "Chuyển hóa và rối loạn chuyển hóa thường gặp". Nguồn file không có tên chương bên trong HTML. Bạn đồng ý dùng tên từ MANIFEST làm tiêu đề chương S3?
2. **Q2 (Nguồn ngắn vừa, 6 mục):** Nguồn 1083 từ, 6 mục, không có bài tập, không có bảng, không có hình. Bạn đồng ý S3 bổ sung khung sư pháp T1–T3, sơ đồ Mermaid chuyển hóa glucid/lipid, và bộ bài tập (gắn `[ADDED]`)?
3. **Q3 (Hình vẽ):** Nguồn có 1 bảng, 0 hình. Bạn đồng ý S3 đặt placeholder `[FIGURE]` cho đường phân, chu kỳ urê, chuyển trạng thái chuyển hóa?
4. **Q4 (Tài liệu tham khảo):** Nguồn có 0 trích dẫn và `APPROVED_REFERENCE_LIST: none`. Bạn đồng ý S3 để `[VERIFY: reference needed …]` và chờ cung cấp giáo trình chuẩn?

---

## F. Not verified / limitations

- **Phạm vi dữ liệu:** Chỉ dựa trên `00_source_original/ch05_doc-myd-5.html` (D-05). File nguồn được giữ nguyên trạng tuyệt đối (READ-ONLY).
- **Tài liệu tham khảo:** Không có trích dẫn gốc trong D-05; tất cả giá trị số sẽ gắn `[VERIFY]` khi viết nếu không có trong nguồn.
- **Nội dung bổ sung ngoài nguồn:** Khung sư pháp, bài tập, hình vẽ, bảng tổng hợp là kiến thức giáo trình chuẩn, chưa có trong D-05; cần người dùng duyệt ở Gate A (Q2, Q3).
- **Kiểm tra cơ haine:** Thống kê文档 bằng script Python (xem mục A); chưa có script `check_coverage.py` chuyên dụng cho audit (sẽ chạy tại S2/S3).
- **Giới hạn giai đoạn:** Dừng ngay tại GATE A theo R9 và mục 7.2; chưa thực hiện viết bản thảo Stage S3.

---

GATE A: STOP. Awaiting user approval of the Content Mapping Matrix. Do not begin the transformation.