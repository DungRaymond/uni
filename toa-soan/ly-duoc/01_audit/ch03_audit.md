# ch03_audit.md — S1 Audit · Chương 03 (D-03)

**Môn:** Lý dược – Master Lecture Notes · **Stage:** S1 Audit · **Ngày:** 2026-11-09  
**Nguồn audit:** `00_source_original/ch03_doc-ld-3.html` (D-03) — READ-ONLY, không sửa.  
**Ngữ cảnh đối chiếu:** `00_config.md`, `00_source_original/MANIFEST.md`, `_state/carryover_latest.md`, `_state/glossary_running.md`, `_state/verification_list_running.md`, `01_audit/ch02_audit.md`.  
**Nguyên tắc:** Chỉ phân tích và lập hồ sơ truy vết; không viết lại, không sửa lỗi, không tự bổ sung kiến thức học thuật.

---

## A. Document Inventory

| D-ID | File | Type | Chapter | Slug gốc | Num | Lines | Approx. words | h4 / h5 | Formula boxes | Example boxes | Callouts | Tables | Figures/Images | References |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| D-03 | `00_source_original/ch03_doc-ld-3.html` | chapter-source (HTML fragment, MathJax) | 03 | doc-ld-3 | 3 | 30 | 504 (đếm bằng script) | 3 / 0 | 1 | 1 | 2 | 0 | 0 / 0 | 0 |

**Đặc điểm kỹ thuật (kiểm tra bằng script Python):**
- **Mã hóa & dung lượng:** UTF-8; 3.762 byte; 30 dòng; thẻ HTML đóng/mở cân bằng (`3 <h4>`, `2 <ul>`, `7 <li>`, `3 <p>`, `5 <div>`, `6 <strong>`, `1 <em>`, `5 <br>`).
- **Biểu thức toán/hóa (MathJax):** 1 khối công thức hiển thị riêng (`$$…$$`, tức 2 dấu `$$`), 48 biểu thức inline `$…$`.
- **Cấu trúc tiêu đề:** File bắt đầu trực tiếp bằng `<h4>1. Định luật Lambert - Beer trong phân tích định lượng</h4>`; không có `<h1>/<h2>/<h3>` và không có tên chương bên trong file (tên chương chỉ nằm ở `MANIFEST.md`: *Chuyên đề 3: Bức xạ & Quang phổ học ứng dụng trong kiểm nghiệm thuốc*).
- **Hộp nội dung:** 1 `formula-box` (Beer-Lambert); 1 `example-box` (định lượng hoạt chất bằng UV-Vis); 2 `callout` (Cách nhớ ×2).
- **Bảng biểu & Hình vẽ:** 0 bảng (`<table>`), 0 hình vẽ/sơ đồ.
- **Tài liệu tham khảo:** 0 trích dẫn (`http`, `doi`, `ISBN`, "Tài liệu tham khảo", "NXB", "giáo trình" đều bằng 0). Trạng thái: **none present**.
- **Phân bổ số từ theo 3 mục (tổng = 476 từ):** `S-03.1` (~118) + `S-03.2` (~111) + `S-03.3` (~247).

> **Ghi chú dung lượng:** Nguồn ngắn (504 từ), chỉ 3 mục, 1 công thức, 1 ví dụ. Không có bài tập, không có bảng, không có hình, không có tài liệu tham khảo.

---

## B. Source Section Register

| S-ID | D-ID | chapter | heading path | location | content types | approx. words | ≤20-word summary |
|---|---|---|---|---|---|---|---|
| S-03.1 | D-03 | 03 | `1. Định luật Lambert - Beer trong phân tích định lượng` | dòng 1–10 | theory/principle; equation/model; definition | ~118 | Định luật Beer–Lambert $A = \varepsilon l C$; định nghĩa $A, \varepsilon, l, C$; ứng dụng định lượng nồng độ, kiểm tra chất lượng. |
| S-03.2 | D-03 | 03 | `2. Ứng dụng bức xạ ion hóa và siêu âm trong Dược phẩm` | dòng 12–18 | theory/principle; application; example (case) | ~111 | Tiệt trùng dược phẩm bằng tia gamma ($\gamma$, $^{60}Co$); sóng siêu âm (đồng hóa nhũ tương, chiết xuất hoạt chất, phá vỡ tế bào). |
| S-03.3 | D-03 | 03 | `Ý nghĩa và tác dụng` (không đánh số) | dòng 19–30 | other (summary); application; example (boxed); callout | ~247 | Quang phổ UV-Vis định lượng hoạt chất; tiệt khuẩn gamma cần thẩm định liều; siêu âm chẩn đoán, xử lý mẫu, bào chế. |

**Tổng cộng:** 3 S-ID (`S-03.1` đến `S-03.3`); tổng số từ 476 từ (phân bổ mục) / 504 (toàn file).

---

## C. Content Coverage Matrix

| chapter | Definitions | Theory | Mechanisms | Equations | Examples | Case studies | Applications | Questions/Exercises | References | Figures/Tables |
|---|---|---|---|---|---|---|---|---|---|---|
| 03 (D-03) | Present (S-03.1) | Present (S-03.1, S-03.2) | Present (S-03.1 Beer–Lambert; S-03.2 tia gamma/siêu âm) | Present (S-03.1 Beer–Lambert $A = \varepsilon l C$) | Present (S-03.1 ví dụ inline; S-03.3 hộp ví dụ UV-Vis) | Absent | Present (S-03.1–S-03.3 đều có ứng dụng dược: định lượng hoạt chất, tiệt khuẩn, siêu âm) | Absent | Absent | Absent (0 bảng, 0 hình vẽ) |

**Ghi chú chi tiết về độ phủ:**
- **Definitions & Theory — Present:** Có định nghĩa Beer–Lambert, các đại lượng $A, \varepsilon, l, C$; ứng dụng tia gamma/siêu âm.
- **Mechanisms — Present:** Cơ chế hấp thụ quang (UV-Vis), tiệt khuẩn bằng tia gamma, đồng hóa/chiết xuất bằng siêu âm.
- **Equations — Present:** 1 công thức (Beer–Lambert $A = \varepsilon l C$).
- **Examples — Present:** 1 hộp ví dụ (định lượng hoạt chất bằng UV-Vis).
- **Case studies — Absent:** 0 ca bệnh cụ thể.
- **Applications — Present:** Ứng dụng dược lý: định lượng hoạt chất, kiểm nghiệm, tiệt khuẩn, siêu âm chẩn đoán/xử lý mẫu.
- **Questions/Exercises — Absent:** 0 câu hỏi, 0 bài tập trong nguồn (tập exercises riêng).
- **References — Absent:** 0 tài liệu tham khảo.
- **Figures/Tables — Absent:** 0 bảng và 0 hình, trong khi nội dung nói về hấp thụ quang phổ, tia gamma, siêu âm có thể minh họa bằng sơ đồ.

---

## D. Notation and Terminology Inventory

### D.1 Ký hiệu và đơn vị

| Symbol / unit | As written in source | Defined? | Location | Note |
|---|---|---|---|---|
| $A$ | `Độ hấp thụ quang (Absorbance)` | Yes | S-03.1 (dòng 4) | Không đơn vị (không chiều). |
| $\varepsilon$ | `Hệ số hấp thụ mol ($L \cdot mol^{-1} \cdot cm^{-1}$)` | Yes | S-03.1 (dòng 5) | Hệ số hấp thụ mol. |
| $l$ | `Chiều dày cuvet chứa mẫu ($cm$)` | Yes | S-03.1 (dòng 6) | Chiều dài quang đồng. |
| $C$ | `Nồng độ chất hấp thụ quang trong dung dịch ($mol/L$)` | Yes | S-03.1 (dòng 7) | Nồng độ molari. |
| $\lambda_{max}$ | `đo tại $\lambda_{max}$` | Yes | S-03.3 (dòng 21) | Bước sóng đáp ứng lớn nhất. |
| $\varepsilon = 1,2 \times 10^4$ | `$\varepsilon = 1,2 \times 10^4\text{ L}\cdot\text{mol}^{-1}\cdot\text{cm}^{-1}$` | Yes | S-03.3 (dòng 21) | Giá trị hệ số hấp thụ mol trong ví dụ. |

### D.2 Thuật ngữ / Glossary candidates

| Thuật ngữ / Đại lượng | Dạng viết trong nguồn (`D-03`) | Dạng chuẩn hóa đề xuất | Ghi chú chuẩn hóa |
|---|---|---|---|
| Định luật Beer–Lambert | `Định luật Lambert - Beer` | **Định luật Beer–Lambert (Beer–Lambert law)** | Giữ nguyên, tên tiếng Anh phổ biến. |
| Độ hấp thụ quang | `Độ hấp thụ quang (Absorbance)` | **Độ hấp thụ quang (absorbance – $A$)** | Giữ nguyên, không đơn vị. |
| Hệ số hấp thụ mol | `Hệ số hấp thụ mol ($\varepsilon$)` | **Hệ số hấp thụ mol (molar absorptivity – $\varepsilon$)** | Giữ nguyên. |
| Tia gamma | `tia gamma ($\gamma$)` | **Tia gamma (gamma ray)** | Giữ nguyên. |
| Cobalt-60 | `Coban-60 ($^{60}Co$)` | **Cobalt-60 ($^{60}Co$)** | Gõ lại tên gốc Cobalt (không phải Coban). |
| Siêu âm | `Sóng siêu âm (Ultrasound)` | **Sóng siêu âm (ultrasound)** | Giữ nguyên. |
| Tiệt khuẩn | `Tiệt trùng` | **Tiệt khuẩn (sterilization)** | Chuẩn hóa thuật ngữ. |

---

## E. Open Questions for Gate A (Câu hỏi xin ý kiến phê duyệt tại Gate A)

1. **Q1 (Tên chương):** `MANIFEST.md` ghi tên chương 03 là "Chuyên đề 3: Bức xạ & Quang phổ học ứng dụng trong kiểm nghiệm thuốc". Nguồn file không có tên chương bên trong HTML. Bạn đồng ý dùng tên từ MANIFEST làm tiêu đề chương S3?
2. **Q2 (Nguồn ngắn, 3 mục):** Nguồn chỉ 504 từ, 3 mục, không có bài tập, không có bảng, không có hình. Bạn đồng ý S3 bổ sung khung sư phạm T1–T3 (kiến thức tiên quyết, chuẩn đầu ra, thời lượng), bảng tổng hợp công thức, sơ đồ Mermaid, và bộ bài tập (gắn `[ADDED]`)?
3. **Q3 (Hình vẽ):** Nguồn có 0 bảng, 0 hình. Bạn đồng ý S3 đặt placeholder `[FIGURE]` cho Beer–Lambert, tia gamma, siêu âm?
4. **Q4 (Tài liệu tham khảo):** Nguồn có 0 trích dẫn và `APPROVED_REFERENCE_LIST: none`. Bạn đồng ý S3 để `[VERIFY: reference needed …]` và chờ cung cấp giáo trình chuẩn?

---

## F. Not verified / limitations

- **Phạm vi dữ liệu:** Chỉ dựa trên `00_source_original/ch03_doc-ld-3.html` (D-03). File nguồn được giữ nguyên trạng tuyệt đối (READ-ONLY).
- **Tài liệu tham khảo:** Không có trích dẫn gốc trong D-03; tất cả công thức, giá trị số ($\varepsilon = 1,2 \times 10^4$, $A = 0,600$, $C = 5,0 \times 10^{-5}$ mol/L) sẽ gắn `[VERIFY]` khi viết nếu không có trong nguồn.
- **Nội dung bổ sung ngoài nguồn:** Khung sư phạm, bài tập, hình vẽ, bảng tổng hợp là kiến thức giáo trình chuẩn, chưa có trong D-03; cần người dùng duyệt ở Gate A (Q2, Q3).
- **Kiểm tra cơ haine:** Thống kê文档 bằng script Python (xem mục A); chưa có script `check_coverage.py` chuyên dụng cho audit (sẽ chạy tại S2/S3).
- **Giới hạn giai đoạn:** Dừng ngay tại GATE A theo R9 và mục 7.2; chưa thực hiện viết bản thảo Stage S3.

---
GATE A: STOP. Awaiting user approval of the Content Mapping Matrix. Do not begin the transformation.
