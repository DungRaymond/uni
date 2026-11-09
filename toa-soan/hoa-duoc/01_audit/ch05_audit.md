# ch05_audit.md — S1 Audit · Chương 05 (D-05)

**Môn:** Hóa vô cơ dược · **Stage:** S1 Audit · **Ngày:** 2026-11-09  
**Nguồn audit:** `00_source_original/ch05_doc-hvc-5.html` (D-05) — READ-ONLY, không sửa.  
**Ngữ cảnh đối chiếu:** `00_config.md`, `00_source_original/MANIFEST.md`, `_state/carryover_latest.md`, `_state/glossary_running.md`, `_state/verification_list_running.md`, `01_audit/ch04_audit.md`.  
**Nguyên tắc:** Chỉ phân tích và lập hồ sơ truy vết; không viết lại, không sửa lỗi, không tự bổ sung kiến thức học thuật.

---

## A. Document Inventory

| D-ID | File | Type | Chapter | Slug gốc | Num | Lines | Approx. words | h4 / h5 | Formula boxes | Example boxes | Callouts | Tables | Figures/Images | References |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| D-05 | `00_source_original/ch05_doc-hvc-5.html` | chapter-source (HTML fragment, MathJax) | 05 | doc-hvc-5 | 5 | 58 | 1.129 (đếm bằng script) | 3 / 0 | 2 | 2 | 1 | 0 | 0 / 0 | 0 |

**Đặc điểm kỹ thuật (kiểm tra bằng script Python):**
- **Mã hóa & dung lượng:** UTF-8; 8.969 byte; 58 dòng; thẻ HTML đóng/mở cân bằng (`3 <h4>`, `5 <ul>`, `14 <li>`, `4 <p>`, `8 <div>`, `26 <strong>`, `10 <em>`, `6 <br>`).
- **Biểu thức toán/hóa (MathJax):** 2 khối công thức hiển thị riêng (`$$…$$`, tức 4 dấu `$$`), 104 biểu thức inline `$…$`; tổng 108 dấu `$`.
- **Cấu trúc tiêu đề:** File bắt đầu trực tiếp bằng `<h4>1. Lực tương tác Van der Waals</h4>`; không có `<h1>/<h2>/h3>` và không có tên chương bên trong file (tên chương chỉ nằm ở `MANIFEST.md`: *Chuyên đề 5: Nhiệt động học hóa học / Lực liên phân tử* — cần xác nhận tên chính xác ở MANIFEST).
- **Hộp nội dung:** 2 `formula-box` (Keesom, Debye); 2 `example-box` (Vì sao H2O sôi cao hơn H2S; Liên kết hydro nội phân tử acid salicylic); 1 `callout` (Cách nhớ "F–O–N mới đủ mạnh").
- **Bảng biểu & Hình vẽ:** 0 bảng (`<table>`), 0 hình vẽ/sơ đồ (``, `<svg>`, `<figure>`).
- **Tài liệu tham khảo:** 0 trích dẫn (`http`, `doi`, `ISBN`, "Tài liệu tham khảo", "NXB", "giáo trình" đều bằng 0). Trạng thái: **none present**.
- **Phân bổ số từ theo 6 đơn vị mục/hộp (tổng = 1.129 từ):** `S-05.1` (~295) + `S-05.2` (~416) + `S-05.3` (~391) + `S-05.4` (gộp trong S-05.3) + `S-05.5` (gộp) + `S-05.6` (gộp) — xem chi tiết mục B.

> **Ghi chú dung lượng:** Nguồn ngắn (1.129 từ), chỉ có 3 mục h4 và 2 hộp ví dụ. Không có bài tập, không có bảng, không có hình, không có tài liệu tham khảo.

---

## B. Source Section Register

| S-ID | D-ID | chapter | heading path | location | content types | approx. words | ≤20-word summary |
|---|---|---|---|---|---|---|---|
| S-05.1 | D-05 | 05 | `1. Lực tương tác Van der Waals` | dòng 1–20 | theory/principle; equation/model; example (inline) | ~295 | Ba thành phần lực Van der Waals: Keesom, Debye, London; quy luật nhiệt độ sôi dãy halogen & khí hvir; ứng dụng thuốc mê hô hấp. |
| S-05.2 | D-05 | 05 | `2. Liên kết Hydro (Hydrogen Bond) & Vai trò sống còn trong Sinh học - Dược học` | dòng 22–43 | definition; theory/principle; mechanism/process; application (case studies) | ~416 | Bản chất liên kết hydro; phân loại liên phân tử/nội phân tử; ứng dụng DNA, protein, thuốc–thụ thể, quy tắc Lipinski. |
| S-05.3 | D-05 | 05 | `Ý nghĩa và tác dụng` (không đánh số) | dòng 44–45 | other (summary); application | ~40 | Tóm tắt vai lực liên phân tử & liên kết hydro đối với độ tan, nhiệt độ sôi, cấu dạng, gắn thuốc–thị thể. |
| S-05.4 | D-05 | 05 | `Ý nghĩa và tác dụng` › [example-box: `🔎 Ví dụ — Vì sao H2O sôi cao hơn H2S?`] | dòng 46–50 | example (illustrative / calculation) | ~90 | So sánh H2O (M=18, sôi 100°C, 4 liên kết hydro) vs H2S (M=34, sôi −60°C, không liên kết hydro đủ mạnh). |
| S-05.5 | D-05 | 05 | `Ý nghĩa và tác dụng` › [example-box: `🔎 Ví dụ — Liên kết hydro nội phân tử trong acid salicylic`] | dòng 51–55 | example (case study) | ~110 | Acid salicylic (nội phân tử, t_nc ≈ 159°C) vs para (215°C); Paracetamol (liên phân tử, t_nc ≈ 170°C, kết tinh lại). |
| S-05.6 | D-05 | 05 | `Ý nghĩa và tác dụng` › [callout: `Cách nhớ`] | dòng 56–58 | other (study advice / mnemonic); theory/principle (rule of thumb) | ~70 | Mẹo "F–O–N mới đủ mạnh"; liên phân tử ↑ nhiệt độ sôi & độ tan; nội phân tử "khóa vòng" ↓ nhiệt độ sôi & độ tan; vòng 5–6 cạnh. |

**Tổng cộng:** 6 S-ID (`S-05.1` đến `S-05.6`); tổng số từ ≈ 1.129 từ.

---

## C. Content Coverage Matrix

| chapter | Definitions | Theory | Mechanisms | Equations | Examples | Case studies | Applications | Questions/Exercises | References | Figures/Tables |
|---|---|---|---|---|---|---|---|---|---|---|
| 05 (D-05) | Present (S-05.1, S-05.2) | Present (S-05.1, S-05.2) | Partial (S-05.2 — DNA base pairs, drug–receptor; không có tính toán năng lượng liên kết hydro) | Partial (S-05.1 — E_Keesom, E_Debye ∝ 1/r^6; thiếu công thức London định lượng, công thức lattice energy) | Present (S-05.4, S-05.5 hai hộp ví dụ; S-05.1 ví dụ inline HCl/SO2/NH3) | Partial (S-05.5 — acid salicylic, paracetamol là ca duy nhất) | Partial (S-05.2 thuốc–thụ thể, Lipinski; S-05.1 thuốc mê hô hấp) | Absent | Absent | Absent (0 bảng, 0 hình vẽ) |

**Ghi chú chi tiết về độ phủ:**
- **Definitions & Theory — Present:** Có định nghĩa lực Van der Waals (3 thành phần), liên kết hydro (bản chất, phân loại); lý thuyết đủ cho mức giới thiệu.
- **Mechanisms — Partial:** Có mô tả liên kết hydro trong DNA (A=T 2 liên kết, G≡C 3 liên kết), protein (xoắn α, phiến gấp β), thuốc–thụ thể; nhưng thiếu cơ chế định lượng tạo liên kết hydro, thiếu công thức London đầy đủ.
- **Equations — Partial:** Có 2 công thức (Keesom, Debye) dưới dạng tỷ lệ (∝); **không** có công thức London định lượng, không có công thức nhiệt độ sôi, không có công thức lattice energy.
- **Examples — Present:** Hai hộp ví dụ (`S-05.4`, `S-05.5`) và ví dụ inline (`HCl`, `SO2`, `NH3`, `HCl`, `He`, `Ar`, `CH4`, `O2`, `I2`, `Halothane`, `Isoflurane`, `Sevoflurane`).
- **Case studies — Partial:** Hai ca: acid salicylic & paracetamol (`S-05.5`), không có ca nào cho khí hvir, dã halogen ngoài ví dụ sôi.
- **Applications — Partial:** Ứng dụng dược học: thuốc mê hô hấp (S-05.1), DNA/protein (S-05.2), thuốc–thụ thể & Lipinski (S-05.2), kết tinh lại paracetamol (S-05.5).
- **Questions/Exercises — Absent:** 0 câu hỏi, 0 bài tập.
- **References — Absent:** 0 tài liệu tham khảo.
- **Figures/Tables — Absent:** 0 bảng và 0 hình, trong khi toàn bộ chương nói về mạng lưới liên kết hydro 3 chiều, cấu trúc DNA, cấu trúc tinh thể.

---

## D. Notation and Terminology Inventory

### D.1 Ký hiệu và đơn vị

| Symbol / unit | As written in source | Defined? | Location | Note |
|---|---|---|---|---|
| `E ∝ 1/r^6` | `$E \propto \frac{1}{r^6}$` | Partial | S-05.1 (dòng 2) | Tuỷ theo khoảng cách, không née hệ số tỷ lệ. |
| `E_Keesom` | `$$E_{Keesom} \propto -\frac{\mu_1^2 \cdot \mu_2^2}{r^6 \cdot k \cdot T}$$` | Partial | S-05.1 (dòng 5) | `k` không được định nghĩa rõ (bá hằng Boltzmann?), `T` là nhiệt độ tuyệt đối. |
| `E_Debye` | `$$E_{Debye} \propto -\frac{\mu^2 \cdot \alpha}{r^6}$$` | Partial | S-05.1 (dòng 9) | `α` được định nghĩa là độ phân cực hóa; `μ` là momento극. |
| `μ` | `momento극 ($\mu \ne 0$)` | Yes | S-05.1 (dòng 4) | Momento극 điện. |
| `α` | `độ phân cực hóa của phân tử bị cảm ứng` | Yes | S-05.1 (dòng 10) | — |
| `M` | `khối lượng phân tử ($M$)` | Yes | S-05.1 (dòng 15) | — |
| `10 - 40 kJ/mol` | `$10 - 40\text{ kJ/mol}$` | Yes | S-05.2 (dòng 25) | Năng lượng liên kết hydro. |
| `A = T` / `G ≡ C` | `cặp base bổ sung ($A = T$ bằng 2 liên kết H; $G \equiv C$ bằng 3 liên kết H)` | Yes | S-05.2 (dòng 37) | — |
| `≤ 5` / `≤ 10` | `Số nhóm cho liên kết Hydro (OH, NH) $\le 5$ … $\le 10$` | Yes | S-05.2 (dòng 39) | Quy tắc Lipinski (Rule of 5). |
| `100 °C` / `−60 °C` | `nhiệt độ sôi $+100^\circ\text{C}$ … $-60^\circ\text{C}$` | Yes | S-05.4 (dòng 30, 47) | — |
| `t_nc` | `nhiệt độ nóng chảy ($\approx 159^\circ\text{C}$)` | Yes | S-05.5 (dòng 53) | — |

### D.2 Thuật ngữ / Glossary candidates

| Thuật ngữ / Đại lượng | Dạng viết trong nguồn (`D-05`) | Dạng chuẩn hóa đề xuất | Ghi chú chuẩn hóa |
|---|---|---|---|
| Lực tương tác Van der Waals | `Lực tương tác Van der Waals` | **Lực liên phân tử Van der Waals** | Giữ nguyên, thêm "liên phân tử" để phân loại. |
| Lực định hướng (Keesom) | `Lực định hướng (Keesom)` | **Lực định hướng (Keesom)** | Giữ nguyên. |
| Lực cảm ứng (Debye) | `Lực cảm ứng (Debye)` | **Lực cảm ứng (Debye)** | Giữ nguyên. |
| Lực phân tán (London) | `Lực phân tán (London)` | **Lực phân tán (London)** | Giữ nguyên. |
| Liên kết Hydro | `Liên kết Hydro (Hydrogen Bond)` | **Liên kết hydro (hydrogen bond)** | Viết thường "hydro" theo quy cách tiếng Việt, giữ tiếng Anh trong ngoặc. |
| Liên kết hydro liên phân tử | `Liên kết Hydro liên phân tử` | **Liên kết hydro liên phân tử** | Giữ nguyên. |
| Liên kết hydro nội phân tử | `Liên kết Hydro nội phân tử` | **Liên kết hydro nội phân tử** | Giữ nguyên. |
| Quy tắc Lipinski (Rule of 5) | `Quy tắc Lipinski (Rule of 5)` | **Quy tắc Lipinski (Rule of 5)** | Giữ nguyên. |
| Mẹo F–O–N | `"F–O–N mới đủ mạnh"` | **Mẹo "F–O–N mới đủ mạnh"** | Giữ nguyên, là mnemonic học tập. |

---

## E. Open Questions for Gate A (Câu hỏi xin ý kiến phê duyệt tại Gate A)

1. **Q1 (Tên chương):** `MANIFEST.md` ghi tên chương 05 là gì? Nguồn file chỉ bắt đầu từ `<h4>1. Lực tương tác Van der Waals</h4>` không có tên chương. Cần xác nhận tên chính xác trước khi đặt tiêu đề S3.
2. **Q2 (Nội dung nhiệt động học):** Tên đề tài trong MANIFEST là "Nhiệt động học hóa học" nhưng nội dung D-05 chỉ là "Lực liên phân tử & liên kết hydro". Nội dung nhiệt động học (enthalpy, entropy, Gibbs) có nằm ở file khác hay chưa có trong nguồn? Cần chốt phạm vi chương.
3. **Q3 (Bổ sung công thức & tính toán):** Nguồn chỉ có 2 công thức tỷ lệ (∝), không có công thức định lượng, không có bài tập. Bạn có đồng ý S3 bổ sung công thức London định lượng, ví dụ tính toán năng lượng liên kết hydro, và bộ bài tập (gắn `[ADDED]`), hay chỉ giữ đúng nội dung nguồn?
4. **Q4 (Hình vẽ & bảng):** Nguồn có 0 bảng, 0 hình. Bạn có đồng ý S3 đặt placeholder `[FIGURE]` cho mạng lưới liên kết hydro DNA, cấu trúc acid salicylic/paracetamol, và sơ đồ ba thành phần Van der Waals?
5. **Q5 (Tài liệu tham khảo):** Nguồn có 0 trích dẫn và `APPROVED_REFERENCE_LIST: none`. Bạn đồng ý để S3 đặt thẻ `[VERIFY: reference needed …]` và chờ cung cấp giáo trình chuẩn?

---

## F. Not verified / limitations

- **Phạm vi dữ liệu:** Chỉ dựa trên `00_source_original/ch05_doc-hvc-5.html` (D-05) và `01_audit/ch04_audit.md` (đối chiếu cấu trúc). File nguồn được giữ nguyên trạng tuyệt đối (READ-ONLY).
- **Số liệu & tài liệu tham khảo:** Không có trích dẫn gốc trong D-05; tất cả công thức, giá trị (10–40 kJ/mol, nhiệt độ sôi, t_nc) sẽ gắn `[VERIFY]` khi viết nếu không có trong nguồn.
- **Nội dung bổ sung ngoài nguồn:** Công thức định lượng, bài tập, hình vẽ, bảng là kiến thức giáo trình chuẩn, chưa có trong D-05; cần người dùng duyệt ở Gate A (Q3, Q4).
- **Kiểm tra cơ haine:** Độ dài file và thống kê thẻ được kiểm tra bằng script Python (xem mục A); chưa có script `check_coverage.py` chuyên dụng cho audit (sẽ chạy tại S2).
- **Giới hạn giai đoạn:** Dừng ngay tại GATE A theo R9 và mục 7.2; chưa thực hiện viết bản thảo Stage S3.

---
GATE A: STOP. Awaiting user approval of the Content Mapping Matrix. Do not begin the transformation.
