# ch03_audit.md — S1 Audit · Chương 03 (D-03)

**Môn:** Y dược – Master Lecture Notes · **Stage:** S1 Audit · **Ngày:** 2026-11-09  
**Nguồn audit:** `00_source_original/ch03_doc-myd-3.html` (D-03) — READ-ONLY, không sửa.  
**Ngữ cảnh đối chiếu:** `00_config.md`, `00_source_original/MANIFEST.md`, `_state/carryover_latest.md`, `_state/glossary_running.md`, `_state/verification_list_running.md`.  
**Nguyên tắc:** Chỉ phân tích và lập hồ sơ truy vết; không viết lại, không sửa lỗi, không tự bổ sung kiến thức học thuật.

---

## A. Document Inventory

| D-ID | File | Type | Chapter | Slug gốc | Num | Lines | Approx. words | h4 / h5 | Formula boxes | Example boxes | Callouts | Tables | Figures/Images | References |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| D-03 | `00_source_original/ch03_doc-myd-3.html` | chapter-source (HTML fragment, MathJax) | 03 | doc-myd-3 | 3 | 28 | 1028 (đếm bằng script) | 7 / 0 | 0 | 1 | 1 | 1 | 0 / 0 | 0 |

**Đặc điểm kỹ thuật (kiểm tra bằng script Python):**
- **Mã hóa & dung lượng:** UTF-8; ~6.200 byte; 28 dòng; thẻ HTML đóng/mở cân bằng (`7 <h4>`, `1 <table>`, `1 <thead>`, `1 <tbody>`, `3 <tr>`, `9 <th>/<td>`, `2 <ul>`, `~8 <li>`, `4 <p>`, `1 <div>`, `14 <strong>`, `1 <em>`, `5 <br>`).
- **Biểu thức toán/hóa (MathJax):** 0 khối công thức hiển thị riêng (`$$…$$`), 0 biểu thức inline `$…$`.
- **Cấu trúc tiêu đề:** File bắt đầu trực tiếp bằng `<h4>1. ATP: dạng năng lượng trực tiếp của tế bào</h4>`; không có `<h1>/<h2>/<h3>` và không có tên chương bên trong file (tên chương chỉ nằm ở `MANIFEST.md`: `Chuyển hóa năng lượng và hô hấp tế bào`).
- **Hộp nội dung:** 0 `formula-box`; 1 `example-box` (cân bằng ATP và hệ số hô hấp); 1 `callout` (Sơ đồ nhớ ×1).
- **Bảng biểu & Hình vẽ:** 1 bảng (`<table>`: 3 giai đoạn oxy hóa glucose), 0 hình vẽ/sơ đồ.
- **Tài liệu tham khảo:** 0 trích dẫn (`http`, `doi`, `ISBN`, "Tài liệu tham khảo", "NXB", "giáo trình" đều bằng 0). Trạng thái: **none present**.
- **Phân bổ số từ theo 7 mục (tổng = 1028 từ):** `S-03.1` (~140) + `S-03.2` (~180) + `S-03.3` (~160) + `S-03.4` (~200) + `S-03.5` (~120) + `S-03.6` (~120) + `S-03.7` (~108) — xem mục B.

> **Ghi chú dung lượng:** Nếu ngắn vừa (1028 từ), 7 mục, 0 công thức, 1 ví dụ, 1 bảng. Không có bài tập, không có hình, không có tài liệu tham khảo.

---

## B. Source Section Register

| S-ID | D-ID | chapter | heading path | location | content types | approx. words | ≤20-word summary |
|---|---|---|---|---|---|---|---|
| S-03.1 | D-03 | 03 | `1. ATP: dạng năng lượng trực tiếp của tế bào` | dòng 1–2 | theory/principle; definition | ~140 | ATP cung cấp năng lượng cho co cơ, vận chuyển chủ động, tổng hợp đại phân tử, duy trì gradient ion; phosphocreatine là đệm năng lượng nhanh ở cơ. |
| S-03.2 | D-03 | 03 | `2. Ba giai đoạn oxy hóa glucose` | dòng 3–5 | theory/principle; table (data-table) | ~180 | Bảng 3 giai đoạn: đường phân (bào tương: 2 pyruvat, 2 ATP ròng, 2 NADH); oxy hóa pyruvat + chu kỳ acid citric (chất nền ty thể); chuỗi chuyền electron + phosphoryl hóa oxy hóa (màng trong ty thể). |
| S-03.3 | D-03 | 03 | `3. Đường phân và số phận của pyruvat` | dòng 6–8 | theory/principle; mechanism | ~160 | Đường phân gồm pha đầu tư (tiêu thụ 2 ATP) và pha thu hồi (tạo 4 ATP + 2 NADH → thu ròng 2 ATP); pyruvat → acetyl-CoA hoặc → lactat (tái sinh NAD⁺). |
| S-03.4 | D-03 | 03 | `4. Chu trình acid citric và chuỗi hô hấp` | dòng 9–13 | theory/principle; mechanism | ~200 | Mỗi acetyl-CoA tạo 3 NADH, 1 FADH₂, 1 GTP, 2 CO₂; NADH/FADH₂ bơm H⁺ qua màng trong ty thể; O₂ là chất nhận electron cuối; rò rỉ proton làm giảm hiệu suất. |
| S-03.5 | D-03 | 03 | `5. Chuyển hóa yếm khí và chu trình Cori` | dòng 14–15 | theory/principle; application | ~120 | Hồng cầu không ty thể → tạo ATP bằng đường phân, tạo lactat; cơ vận động cao tăng đường phân; lactat về gan → chu trình Cori → glucose. |
| S-03.6 | D-03 | 03 | `6. Điều hòa theo nhu cầu và nhiên liệu` | dòng 16–19 | theory/principle; regulation | ~120 | Insulin sau ăn (tăng thu nhận glucose, tổng hợp glycogen/lipid); glucagon khi đói (tăng phân giải glycogen gan, tân tạo glucose); AMP/ADP tăng (thúc đẩy dị hóa); thiamine (B₁) cần cho các enzym oxy hóa. |
| S-03.7 | D-03 | 03 | `7. Liên hệ lâm sàng và dược lý` | dòng 20–21 | theory/principle; application | ~108 | Thiếu oxy, thiếu máu, sốc, độc chất ty thể → giảm hô hấp tế bào → tăng lactat, giảm ATP → suy bơm ion, phù tế bào, tổn thương cơ quan. |

**Tổng cộng:** 7 S-ID (`S-03.1` đến `S-03.7`); tổng số từ 1028 từ (phân bổ mục) / 1028 (toàn file).

---

## C. Content Coverage Matrix

| chapter | Definitions | Theory | Mechanisms | Equations | Examples | Case studies | Applications | Questions/Exercises | References | Figures/Tables |
|---|---|---|---|---|---|---|---|---|---|---|
| 03 (D-03) | Present (S-03.1, S-03.2, S-03.3, S-03.4, S-03.5, S-03.6, S-03.7) | Present (S-03.1–S-03.6) | Present (S-03.3 đường phân; S-03.4 chuỗi hô hấp; S-03.5 chu trình Cori) | Absent | Present (S-03.2 bảng 3 giai đoạn; S-03.4 ví dụ hiệu suất 32%, RQ; S-03.7 ca đái tháo đường/hạ đường huyết/toan lactic) | Absent | Present (S-03.1–S-03.7 điều hòa insulin/glucagon, thiếu oxy, độc chất, liên hệ dược lý) | Absent | Absent | Present (1 bảng: 3 giai đoạn oxy hóa glucose) |

**Ghi chú chi tiết về độ phủ:**
- **Definitions & Theory — Present:** Định nghĩa ATP, dị hóa, đồng hóa, NADH, FADH₂; ba giai đoạn oxy hóa glucose; đường phân; chu trình acid citric; chuỗi hô hấp; chuyển hóa yếm khí; điều hòa insulin/glucagon.
- **Mechanisms — Present:** Cơ chế đường phân (pha đầu tư/thu hồi); chuỗi hô hấp (bơm H⁺, ATP synthase); chu trình Cori (lactat → glucose ở gan).
- **Equations — Absent:** 0 công thức toán/hóa (chỉ có mô tả định nghĩa, không có phương trình LaTeX).
- **Examples — Present:** 1 bảng (3 giai đoạn oxy hóa glucose); 1 ví dụ (hiệu suất 32%, RQ = 0,8; ca đái tháo đường/hạ đường huyết/toan lactic).
- **Case studies — Absent:** 0 ca bệnh cụ thể.
- **Applications — Present:** Ứng dụng dược lý: liên hệ lactat/đường huyết/tưới máu với trạng thái năng lượng; tác dụng/độc tính chuyển hóa của thuốc.
- **Questions/Exercises — Absent:** 0 câu hỏi, 0 bài tập trong nguồn.
- **References — Absent:** 0 tài liệu tham khảo.
- **Figures/Tables — Present:** 1 bảng (3 giai đoạn oxy hóa glucose).

---

## D. Notation and Terminology Inventory

### D.1 Ký hiệu và đơn vị

| Symbol / unit | As written in source | Defined? | Location | Note |
|---|---|---|---|---|
| ATP | `ATP` | Yes | S-03.1 (dòng 1) | Năng lượng trực tiếp của tế bào. |
| ADP | `ADP` | Yes | S-03.1 (dòng 1) | Sản phẩm thủy phân ATP. |
| Phosphate vô cơ | `phosphate vô cơ` | Yes | S-03.1 (dòng 1) | Sản phẩm thủy phân ATP. |
| Phosphocreatine | `Phosphocreatine` | Yes | S-03.1 (dòng 1) | Đệm năng lượng nhanh ở cơ. |
| NADH | `NADH` | Yes | S-03.1 (dòng 2) | Mang electron tới chuỗi hô hấp. |
| FADH₂ | `FADH₂` | Yes | S-03.1 (dòng 2) | Mang electron tới chuỗi hô hấp. |
| Acetyl-CoA | `acetyl-CoA` | Yes | S-03.3 (dòng 7) | Sản phẩm của oxy hóa pyruvat. |
| GTP | `GTP` | Yes | S-03.4 (dòng 11) | Tương đương ATP trong chu kỳ acid citric. |
| CO₂ | `CO₂` | Yes | S-03.4 (dòng 11) | Sản phẩm oxy hóa acetyl-CoA. |
| O₂ | `O₂` | Yes | S-03.4 (dòng 13) | Chất nhận electron cuối trong chuỗi hô hấp. |
| H⁺ | `H⁺` | Yes | S-03.4 (dòng 12) | Proton được bơm qua màng trong ty thể. |
| Lactat | `lactat` | Yes | S-03.3 (dòng 8) | Sản phẩm của pyruvat khi thiếu oxy. |
| NAD⁺ | `NAD⁺` | Yes | S-03.3 (dòng 8) | Tái sinh bởi lactate dehydrogenase. |

### D.2 Thuật ngữ / Glossary candidates

| Thuật ngữ / Đại lượng | Dạng viết trong nguồn (`D-03`) | Dạng chuẩn hóa đề xuất | Ghi chú chuẩn hóa |
|---|---|---|---|
| Dị hóa | `Dị hóa` | **Dị hóa (catabolism)** | Giữ nguyên. |
| Đồng hóa | `Đồng hóa` | **Đồng hóa (anabolism)** | Giữ nguyên. |
| Đường phân | `Đường phân` | **Đường phân (glycolysis)** | Giữ nguyên. |
| Pyruvat | `Pyruvat` | **Pyruvat (pyruvate)** | Giữ nguyên. |
| Acetyl-CoA | `acetyl-CoA` | **Acetyl-CoA** | Giữ nguyên. |
| Chu kỳ acid citric | `Chu kỳ acid citric` | **Chu kỳ acid citric (citric acid cycle / Krebs cycle)** | Giữ nguyên. |
| Chuỗi chuyền electron | `Chuỗi chuyền electron` | **Chuỗi chuyền electron (electron transport chain)** | Giữ nguyên. |
| Phosphoryl hóa oxy hóa | `Phosphoryl hóa oxy hóa` | **Phosphoryl hóa oxy hóa (oxidative phosphorylation)** | Giữ nguyên. |
| Chu trình Cori | `chu trình Cori` | **Chu trình Cori (Cori cycle)** | Giữ nguyên. |
| Thiamine | `Thiamine` | **Thiamine (vitamin B₁)** | Giữ nguyên. |
| Hệ số hô hấp | `Hệ số hô hấp` | **Hệ số hô hấp (respiratory quotient – RQ)** | Giữ nguyên. |
| Toan lactic | `Toan lactic` | **Toan lactic (lactic acidosis)** | Giữ nguyên. |

---

## E. Open Questions for Gate A (Câu hỏi xin ý kiến phê duyệt tại Gate A)

1. **Q1 (Tên chương):** `MANIFEST.md` ghi tên chương 03 là "Chuyển hóa năng lượng và hô hấp tế bào". Nguồn file không có tên chương bên trong HTML. Bạn đồng ý dùng tên từ MANIFEST làm tiêu đề chương S3?
2. **Q2 (Nguồn ngắn vừa, 7 mục):** Nguồn 1028 từ, 7 mục, có 1 bảng, 1 ví dụ, 1 callout, không có bài tập. Bạn đồng ý S3 bổ sung khung sư pháp T1–T3, sơ đồ Mermaid oxy hóa glucose, và bộ bài tập (gắn `[ADDED]`)?
3. **Q3 (Hình vẽ):** Nguồn có 1 bảng, 0 hình. Bạn đồng ý S3 đặt placeholder `[FIGURE]` cho màng trong ty thể, chuỗi hô hấp, ATP synthase?
4. **Q4 (Tài liệu tham khảo):** Nguồn có 0 trích dẫn và `APPROVED_REFERENCE_LIST: none`. Bạn đồng ý S3 để `[VERIFY: reference needed …]` và chờ cung cấp giáo trình chuẩn?

---

## F. Not verified / limitations

- **Phạm vi dữ liệu:** Chỉ dựa trên `00_source_original/ch03_doc-myd-3.html` (D-03). File nguồn được giữ nguyên trạng tuyệt đối (READ-ONLY).
- **Tài liệu tham khảo:** Không có trích dẫn gốc trong D-03; tất cả giá trị số sẽ gắn `[VERIFY]` khi viết nếu không có trong nguồn.
- **Nội dung bổ sung ngoài nguồn:** Khung sư pháp, bài tập, hình vẽ, bảng tổng hợp là kiến thức giáo trình chuẩn, chưa có trong D-03; cần người dùng duyệt ở Gate A (Q2, Q3).
- **Kiểm tra cơ haine:** Thống kê文档 bằng script Python (xem mục A); chưa có script `check_coverage.py` chuyên dụng cho audit (sẽ chạy tại S2/S3).
- **Giới hạn giai đoạn:** Dừng ngay tại GATE A theo R9 và mục 7.2; chưa thực hiện viết bản thảo Stage S3.

---

GATE A: STOP. Awaiting user approval of the Content Mapping Matrix. Do not begin the transformation.