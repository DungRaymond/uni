# ch04_audit.md — S1 Audit · Chương 04 (D-04)

**Môn:** Lý dược – Master Lecture Notes · **Stage:** S1 Audit · **Ngày:** 2026-11-09  
**Nguồn audit:** `00_source_original/ch04_doc-ld-c3.html` (D-04) — READ-ONLY, không sửa.  
**Ngữ cảnh đối chiếu:** `00_config.md`, `00_source_original/MANIFEST.md`, `_state/carryover_latest.md`, `_state/glossary_running.md`, `_state/verification_list_running.md`, `01_audit/ch03_audit.md`.  
**Nguyên tắc:** Chỉ phân tích và lập hồ sơ truy vết; không viết lại, không sửa lỗi, không tự bổ sung kiến thức học thuật.

---

## A. Document Inventory

| D-ID | File | Type | Chapter | Slug gốc | Num | Lines | Approx. words | h4 / h5 | Formula boxes | Example boxes | Callouts | Tables | Figures/Images | References |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| D-04 | `00_source_original/ch04_doc-ld-c3.html` | chapter-source (HTML fragment, MathJax) | 04 | doc-ld-c3 | 4 | 66 | 1018 (đếm bằng script) | 5 / 0 | 4 | 1 | 2 | 0 | 0 / 0 | 0 |

**Đặc điểm kỹ thuật (kiểm tra bằng script Python):**
- **Mã hóa & dung lượng:** UTF-8; 8.555 byte; 66 dòng; thẻ HTML đóng/mở cân bằng (`5 <h4>`, `6 <ul>`, `20 <li>`, `7 <p>`, `8 <div>`, `19 <strong>`, `8 <em>`, `5 <br>`).
- **Biểu thức toán/hóa (MathJax):** 4 khối công thức hiển thị riêng (`$$…$$`, tức 8 dấu `$$`), 68 biểu thức inline `$…$`.
- **Cấu trúc tiêu đề:** File bắt đầu trực tiếp bằng `<h4>1. Các khái niệm cơ bản về hệ nhiệt động</h4>`; không có `<h1>/<h2>/<h3>` và không có tên chương bên trong file (tên chương chỉ nằm ở `MANIFEST.md`: *Chương 3: Nhiệt động lực học sinh học (Bioenergetics & Thermodynamics)*).
- **Hộp nội dung:** 4 `formula-box` (ΔU = Q − A, ΔE_hóa học = Q_tỏa + A_sinh, dS = d_iS + d_eS, ΔG = ΔH − T·ΔS); 1 `example-box` (ghép cặp năng lượng ở hexokinase); 2 `callout` (Cách nhớ ×2).
- **Bảng biểu & Hình vẽ:** 0 bảng (`<table>`), 0 hình vẽ/sơ đồ.
- **Tài liệu tham khảo:** 0 trích dẫn (`http`, `doi`, `ISBN`, "Tài liệu tham khảo", "NXB", "giáo trình" đều bằng 0). Trạng thái: **none present**.
- **Phân bổ số từ theo 5 mục (tổng = 960 từ):** `S-04.1` (~162) + `S-04.2` (~244) + `S-04.3` (~166) + `S-04.4` (~171) + `S-04.5` (~217).

> **Ghi chú dung lượng:** Nguồn ngắn (1018 từ), chỉ 5 mục, 4 công thức, 1 ví dụ. Không có bài tập, không có bảng, không có hình, không có tài liệu tham khảo.

---

## B. Source Section Register

| S-ID | D-ID | chapter | heading path | location | content types | approx. words | ≤20-word summary |
|---|---|---|---|---|---|---|---|
| S-04.1 | D-04 | 04 | `1. Các khái niệm cơ bản về hệ nhiệt động` | dòng 1–8 | theory/principle; definition | ~162 | Hệ cô lập/kín/mở; cơ thể sống là hệ mở nhiệt động; trạng thái dừng (steady state) vs cân bằng nhiệt động (trạng thái chết). |
| S-04.2 | D-04 | 04 | `2. Nguyên lý I Nhiệt động học áp dụng trong cơ thể sống` | dòng 10–30 | theory/principle; equation/model; definition | ~244 | Nguyên lý I: ΔU = Q − A; ΔE_hóa học = Q_tỏa + A_sinh; nhiệt sơ cấp/thứ cấp; công hóa học/cơ học/thẩm thấu/điện; định luật Hess & phương pháp đo nhiệt. |
| S-04.3 | D-04 | 04 | `3. Nguyên lý II Nhiệt động học & Phương trình Prigogine trong hệ sinh vật` | dòng 32–40 | theory/principle; equation/model | ~166 | Entropy ($S$); hệ sinh vật là hệ mở; phương trình Prigogine $dS = d_iS + d_eS$; $d_iS > 0$, $d_eS < 0$; điều kiện trạng thái dừng $|d_eS| = d_iS \implies dS = 0$; Schrödinger "sinh vật hút entropy âm". |
| S-04.4 | D-04 | 04 | `4. Năng lượng tự do Gibbs ($\Delta G$) và chiều hướng các phản ứng sinh hóa` | dòng 42–52 | theory/principle; equation/model; example | ~171 | $\Delta G = \Delta H - T \cdot \Delta S$; $\Delta G < 0$ tự phát, $\Delta G > 0$ không tự phát, $\Delta G = 0$ cân bằng; liên hợp năng lượng với thủy phân ATP ($\Delta G^{\circ\prime} \approx -30,5\text{ kJ/mol}$). |
| S-04.5 | D-04 | 04 | `5. Ý nghĩa và tác dụng` (không đánh số) | dòng 54–66 | other (summary); application; example (boxed); callout | ~217 | Nhiệt động học sinh học định lượng chuyển hóa năng lượng, sinh nhiệt, công cơ thể; $\Delta G$ giải thích chiều phản ứng và ghép cặp ATP; trạng thái dừng phân biệt cơ thể sống với hệ cân bằng tĩnh; ví dụ hexokinase. |

**Tổng cộng:** 5 S-ID (`S-04.1` đến `S-04.5`); tổng số từ 960 từ (phân bổ mục) / 1018 (toàn file).

---

## C. Content Coverage Matrix

| chapter | Definitions | Theory | Mechanisms | Equations | Examples | Case studies | Applications | Questions/Exercises | References | Figures/Tables |
|---|---|---|---|---|---|---|---|---|---|---|
| 04 (D-04) | Present (S-04.1, S-04.3, S-04.4) | Present (S-04.1–S-04.4) | Present (S-04.1 hệ mở/đóng/cô lập, steady state; S-04.2 nguyên lý I; S-04.3 nguyên lý II/Prigogine; S-04.4 Gibbs/ATP coupling) | Present (S-04.1–S-04.4, 4 công thức) | Present (S-04.1 ví dụ inline; S-03.4.4 hộp ví dụ hexokinase) | Absent | Present (S-04.1–S-04.4 đều có ứng dụng dược: chuyển hóa cơ sở, BMR, sinh nhiệt, ATP coupling) | Absent | Absent | Absent (0 bảng, 0 hình vẽ) |

**Ghi chú chi tiết về độ phủ:**
- **Definitions & Theory — Present:** Có định nghĩa hệ nhiệt động (cô lập/kín/mở), trạng thái dừng, nguyên lý I & II, enthalpy (ngầm định qua ΔH), entropy, năng lượng tự do Gibbs.
- **Mechanisms — Present:** Cơ chế chuyển hóa năng lượng trong cơ thể, nguyên lý I (bảo toàn năng lượng), nguyên lý II (entropy tăng trong hệ cô lập, cơ thể sống thải entropy ra ngoài), ghép cặp năng lượng với ATP.
- **Equations — Present:** 4 công thức (ΔU = Q − A, ΔE_hóa học, dS = d_iS + d_eS, ΔG = ΔH − T·ΔS).
- **Examples — Present:** 1 hộp ví dụ (ghép cặp năng lượng ở hexokinase).
- **Case studies — Absent:** 0 ca bệnh cụ thể.
- **Applications — Present:** Ứng dụng dược lý: chuyển hóa cơ sở, BMR, sinh nhiệt, công cơ thể, liên hợp năng lượng ATP, điều khiển chiều phản ứng.
- **Questions/Exercises — Absent:** 0 câu hỏi, 0 bài tập trong nguồn (tập exercises riêng).
- **References — Absent:** 0 tài liệu tham khảo.
- **Figures/Tables — Absent:** 0 bảng và 0 hình, trong khi nội dung nói về hệ nhiệt động, entropy, Gibbs có thể minh họa bằng sơ đồ.

---

## D. Notation and Terminology Inventory

### D.1 Ký hiệu và đơn vị

| Symbol / unit | As written in source | Defined? | Location | Note |
|---|---|---|---|---|
| $\Delta U = Q - A$ | `$$\Delta U = Q - A$$` (hay $Q = \Delta U + A$) | Yes | S-04.2 (dòng 11) | Nguyên lý I: năng lượng nội tại thay đổi bằng nhiệt trừ công. |
| $\Delta E_{hóa\ học} = Q_{tỏa} + A_{sinh}$ | `$$\Delta E_{hóa\ học} = Q_{tỏa} + A_{sinh}$$` | Yes | S-04.2 (dòng 12) | Năng lượng hóa học thay đổi bằng nhiệt tỏa cộng công sinh. |
| $dS = d_iS + d_eS` | `$$dS = d_iS + d_eS$$` | Yes | S-04.3 (dòng 34) | Phương trình Prigogine: biến thiên entropy = entropy sinh ra nội tại + entropy trao đổi với môi trường. |
| $\Delta G = \Delta H - T \cdot \Delta S` | `$$\Delta G = \Delta H - T \cdot \Delta S$$` | Yes | S-04.4 (dòng 43) | Năng lượng tự do Gibbs; $\Delta G < 0$ tự phát, $> 0$ không tự phát, $= 0$ cân bằng. |
| $\Delta G^{\circ\prime} \approx -30,5\text{ kJ/mol}$ | `$\Delta G^{\circ\prime} \approx -30,5\text{ kJ/mol}$` | Yes | S-04.4 (dòng 48) | Năng lượng tự do tiêu chuẩn của thủy phân ATP. |
| $A + B \rightarrow C$ | `$A + B \rightarrow C \ (\Delta G_1 > 0)$` | Yes | S-04.4 (dòng 50) | Phản ứng đồng hóa ghép đôi với thủy phân ATP. |

### D.2 Thuật ngữ / Glossary candidates

| Thuật ngữ / Đại lượng | Dạng viết trong nguồn (`D-04`) | Dạng chuẩn hóa đề xuất | Ghi chú chuẩn hóa |
|---|---|---|---|
| Hệ nhiệt động | `Hệ cô lập`, `Hệ kín`, `Hệ mở` | **Hệ nhiệt động (thermodynamic system)**: cô lập/kín/mở | Giữ nguyên. |
| Trạng thái dừng | `Trạng thái dừng (Steady State)` | **Trạng thái dừng (steady state)** | Phân biệt với cân bằng nhiệt động (trạng thái chết). |
| Nguyên lý I Nhiệt động học | `Nguyên lý I Nhiệt động học` | **Nguyên lý I nhiệt động học (bảo toàn năng lượng)** | Giữ nguyên. |
| Nguyên lý II Nhiệt động học | `Nguyên lý II Nhiệt động học` | **Nguyên lý II nhiệt động học (entropy tăng trong hệ cô lập)** | Giữ nguyên. |
| Phương trình Prigogine | `Phương trình Prigogine` | **Phương trình Prigogine ($dS = d_iS + d_eS$)** | Giữ nguyên. |
| Năng lượng tự do Gibbs | `Năng lượng tự do Gibbs ($\Delta G$)` | **Năng lượng tự do Gibbs (Gibbs free energy – $\Delta G$)** | Giữ nguyên. |
| Liên hợp năng lượng | `Cơ chế liên hợp năng lượng (Energy Coupling)` | **Liên hợp năng lượng (energy coupling)** | Giữ nguyên. |
| ATP/ADP/Pi | `ATP`, `ADP`, `P_i` | **ATP (adenosine triphosphate)**, **ADP (adenosine diphosphate)**, **$P_i$ (phơ phân)** | Giữ nguyên, INN. |
| Tia gamma ($^{60}Co$) | `Coban-60 ($^{60}Co$)` | **Cobalt-60 ($^{60}Co$)** | Chỉnh lại tên gốc Cobalt (không phải Coban). |

---

## E. Open Questions for Gate A (Câu hỏi xin ý kiến phê duyệt tại Gate A)

1. **Q1 (Tên chương):** `MANIFEST.md` ghi tên chương 04 là "Chương 3: Nhiệt động lực học sinh học (Bioenergetics & Thermodynamics)". Nguồn file không có tên chương bên trong HTML. Bạn đồng ý dùng tên từ MANIFEST làm tiêu đề chương S3?
2. **Q2 (Nguồn ngắn, 5 mục):** Nguồn chỉ 1018 từ, 5 mục, không có bài tập, không có bảng, không có hình. Bạn đồng ý S3 bổ sung khung sư phạm T1–T3 (kiến thức tiên kỳ, chuẩn đầu ra, thời lượng), bảng tổng hợp công thức, sơ đồ Mermaid, và bộ bài tập (gắn `[ADDED]`)?
3. **Q3 (Hình vẽ):** Nguồn có 0 bảng, 0 hình. Bạn đồng ý S3 đặt placeholder `[FIGURE]` cho hệ nhiệt động (cô lập/kín/mở), phương trình Prigogine ($dS = d_iS + d_eS$), chu kỳ ATP/ADP?
4. **Q4 (Tài liệu tham khảo):** Nguồn có 0 trích dẫn và `APPROVED_REFERENCE_LIST: none`. Bạn đồng ý S3 để `[VERIFY: reference needed …]` và chờ cung cấp giáo trình chuẩn?

---

## F. Not verified / limitations

- **Phạm vi dữ liệu:** Chỉ dựa trên `00_source_original/ch04_doc-ld-c3.html` (D-04). File nguồn được giữ nguyên trạng tuyệt đối (READ-ONLY).
- **Tài liệu tham khảo:** Không có trích dẫn gốc trong D-04; tất cả công thức, giá trị số ($\Delta G^{\circ\prime} \approx -30,5\text{ kJ/mol}$, $\Delta G_1 \approx +16,7\text{ kJ/mol}$, $\Delta G_2 \approx -30,5\text{ kJ/mol}$, $\Delta G_{tổng} = -13,8\text{ kJ/mol}$) sẽ gắn `[VERIFY]` khi viết nếu không có trong nguồn.
- **Nội dung bổ sung ngoài nguồn:** Khung sư phạm, bài tập, hình vẽ, bảng tổng hợp là kiến thức giáo trình chuẩn, chưa có trong D-04; cần người dùng duyệt ở Gate A (Q2, Q3).
- **Kiểm tra cơ haine:** Thống kê文档 bằng script Python (xem mục A); chưa có script `check_coverage.py` chuyên dụng cho audit (sẽ chạy tại S2/S3).
- **Giới hạn giai đoạn:** Dừng ngay tại GATE A theo R9 và mục 7.2; chưa thực hiện viết bản thảo Stage S3.

---
GATE A: STOP. Awaiting user approval of the Content Mapping Matrix. Do not begin the transformation.
