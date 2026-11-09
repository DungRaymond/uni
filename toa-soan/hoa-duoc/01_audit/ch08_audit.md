# ch08_audit.md — S1 Audit · Chương 08 (D-08)

**Môn:** Hóa vô cơ dược · **Stage:** S1 Audit · **Ngày:** 2026-11-09  
**Nguồn audit:** `00_source_original/ch08_doc-hvc-8.html` (D-08) — READ-ONLY, không sửa.  
**Ngữ cảnh đối chiếu:** `00_config.md`, `00_source_original/MANIFEST.md`, `_state/carryover_latest.md`, `_state/glossary_running.md`, `_state/verification_list_running.md`, `01_audit/ch07_audit.md`.  
**Nguyên tắc:** Chỉ phân tích và lập hồ sơ truy vết; không viết lại, không sửa lỗi, không tự bổ sung kiến thức học thuật.

---

## A. Document Inventory

| D-ID | File | Type | Chapter | Slug gốc | Num | Lines | Approx. words | h4 / h5 | Formula boxes | Example boxes | Callouts | Tables | Figures/Images | References |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| D-08 | `00_source_original/ch08_doc-hvc-8.html` | chapter-source (HTML fragment, MathJax) | 08 | doc-hvc-8 | 8 | 171 | 2.886 (đếm bằng script) | 9 / 0 | 9 | 7 | 8 | 4 | 0 / 0 | 0 |

**Đặc điểm kỹ thuật (kiểm tra bằng script Python):**
- **Mã hóa & dung lượng:** UTF-8; 23.309 byte; 171 dòng; thẻ HTML đóng/mở cân bằng (`9 <h4>`, `4 <table>`, `7 <ul>`, `1 <ol>`, `30 <li>`, `4 <p>`, `35 <div>`, `53 <strong>`, `15 <em>`, `14 <br>`).
- **Biểu thức toán/hóa (MathJax):** 9 khối công thức hiển thị riêng (`$$…$$`, tức 28 dấu `$$`), 284 biểu thức inline `$…$`.
- **Cấu trúc tiêu đề:** File bắt đầu trực tiếp bằng `<h4>1. Hệ - trạng thái - nội năng - enthalpy</h4>`; không có `<h1>/<h2>/<h3>` và không có tên chương bên trong file (tên chương chỉ nằm ở `MANIFEST.md` — cần xác nhận).
- **Hộp nội dung:** 9 `formula-box`; 7 `example-box` (glucose đốt cháy, urê Hess, methane đốt, nhiệt lượng kế glucose, nung đá vôi, NH4NO3 tan, Arrhenius Q10); 8 `callout` (cách nhớ tỏa/thu, công thức Hess, Cách nhớ toàn chuyên đề, v.v.).
- **Bảng biểu & Hình vẽ:** 4 bảng (`<table>`): đại lượng nhiệt hóa, năng lượng liên kết, tiêu chí tự diễn biến, công thức tổng hợp. 0 hình vẽ/sơ đồ.
- **Tài liệu tham khảo:** 0 trích dẫn (`http`, `doi`, `ISBN`, "Tài liệu tham khảo", "NXB", "giáo trình" đều bằng 0). Trạng thái: **none present**.
- **Phân bổ số từ theo 9 mục (tổng ≈ 2.708 theo phân bổ mục, 2.886 toàn file):** `S-08.1` (~325) + `S-08.2` (~287) + `S-08.3` (~249) + `S-08.4` (~246) + `S-08.5` (~216) + `S-08.6` (~408) + `S-08.7` (~536) + `S-08.8` (~331) + `S-08.9` (~110).

> **Ghi chú dung lượng:** Nguồn giàu (2.886 từ), 9 mục, 4 bảng, 9 công thức, 7 ví dụ. Nội dung đặc biệt liên quan dược lý (độ bền thuốc, Arrhenius, Q10, đa hình, lyophilization, DSC/TGA, ICH). Không có bài tập, không có hình, không có tài liệu tham khảo.

---

## B. Source Section Register

| S-ID | D-ID | chapter | heading path | location | content types | approx. words | ≤20-word summary |
|---|---|---|---|---|---|---|---|
| S-08.1 | D-08 | 08 | `1. Hệ - trạng thái - nội năng - enthalpy` | dòng 3–23 | theory/principle; definition; table; callout | ~325 | Hệ/môi trường, hàm trạng thái, nội năng U, enthalpy H = U + PV, quy ước dấu, bảng đại lượng. |
| S-08.2 | D-08 | 08 | `2. Định luật I nhiệt động học và nhiệt phản ứng` | dòng 25–61 | theory/principle; equation/model; example; callout | ~287 | Định luật I bảo toàn năng lượng, Q = ΔU + A, ΔH = ΔU + ΔnRT, các loại nhiệt phản ứng, ví dụ glucose 5 g. |
| S-08.3 | D-08 | 08 | `3. Định luật Hess và cách tính nhiệt phản ứng` | dòng 50–61 | theory/principle; equation/model; example; callout | ~249 | Định luật Hess, ΔH°pư = ΣΔHf°(sản phẩm) − ΣΔHf°(chất tham gia), ví dụ tổng hợp urê. |
| S-08.4 | D-08 | 08 | `4. Năng lượng liên kết: năng lượng "nằm trong" phân tử` | dòng 64–83 | theory/principle; equation/model; example | ~246 | Năng lượng liên kết, ΔH ≈ ΣE_bẻ − ΣE_tạo, bảng năng lượng liên kết, ví dụ đốt methane. |
| S-08.5 | D-08 | 08 | `5. Nhiệt dung và nhiệt lượng kế` | dòng 86–98 | theory/principle; equation/model; example | ~216 | Q = mcΔT, nhiệt lượng kế bom, ΔU vs ΔH, ví dụ đo nhiệt cháy glucose. |
| S-08.6 | D-08 | 08 | `6. Định luật II - entropy - năng lượng Gibbs: phản ứng có tự xảy ra?` | dòng 101–129 | theory/principle; equation/model; table; example | ~408 | Entropy S, năng lượng Gibbs ΔG = ΔH − TΔS, nhiệt độ đảo chiều, bảng tiêu chí tự diễn biến, ví dụ nung đá vôi, NH4NO3 tan. |
| S-08.7 | D-08 | 08 | `7. Ứng dụng trong bào chế, bảo quản và phân tích thuốc` | dòng 132–144 | theory/principle; application; example | ~536 | Arrhenius, quy tắc Q10, đa hình, DSC/TGA, đông khô, nhiệt hòa tan, năng lượng mạng, ICH. |
| S-08.8 | D-08 | 08 | `8. Quy trình 4 bước giải một bài nhiệt hóa` | dòng 152–166 | theory/principle; table | ~331 | Quy trình 4 bước, bảng công thức với lưu ý. |
| S-08.9 | D-08 | 08 | `Ý nghĩa và tác dụng` (không đánh số) | dòng 170–171 | other (summary) | ~110 | Nhiệt hóa học cung cấp ngôn ngữ định lượng cho vòng đời thuốc: tổng hợp, sản xuất, độ ổn định, bảo quản. |

**Tổng cộng:** 9 S-ID (`S-08.1` đến `S-08.9`); tổng số từ ≈ 2.708 từ (phân bổ mục) / 2.886 (toàn file).

---

## C. Content Coverage Matrix

| chapter | Definitions | Theory | Mechanisms | Equations | Examples | Case studies | Applications | Questions/Exercises | References | Figures/Tables |
|---|---|---|---|---|---|---|---|---|---|---|
| 08 (D-08) | Present (S-08.1, S-08.6) | Present (S-08.1–S-08.8) | Present (S-08.2, S-08.6, S-08.7) | Present (S-08.2–S-08.8, 9 công thức) | Present (S-08.2–S-08.7, 7 ví dụ) | Present (S-08.7 glucose, urê, methane, NH4NO3, đá vôi, Arrhenius) | Present (S-08.7 đều có ứng dụng dược) | Absent | Absent | Present (4 bảng, 0 hình vẽ) |

**Ghi chú chi tiết về độ phủ:**
- **Definitions & Theory — Present:** Đủ định nghĩa và lý thuyết nhiệt hóa học.
- **Mechanisms — Present:** Cơ chế đốt cháy, hòa tan, chuyển pha, Arrhenius, đa hình.
- **Equations — Present:** Có 9 công thức (Q = mcΔT, ΔG = ΔH − TΔS, ΔH° = ΣΔHf°, k = Ae^(−Ea/RT), …).
- **Examples — Present:** 7 hộp example-box và nhiều ví dụ inline.
- **Case studies — Present:** Nhiều ví dụ tính toán thực tế.
- **Applications — Present:** Tất cả mục S-08.7 có ứng dụng dược lý (độ bền thuốc, đa hình, DSC, ICH, vaccine, insulin).
- **Questions/Exercises — Absent:** 0 câu hỏi, 0 bài tập.
- **References — Absent:** 0 tài liệu tham khảo.
- **Figures/Tables — Present (4 bảng), 0 hình:** Có bảng nhưng chưa có sơ đồ/hình vẽ (chu trình Arrhenius, đa hình, lyophilization, …).

---

## D. Notation and Terminology Inventory

### D.1 Ký hiệu và đơn vị

| Symbol / unit | As written in source | Defined? | Location | Note |
|---|---|---|---|---|
| $U, H, S, G$ | `Hàm trạng thái: U (nội năng), H (enthalpy), S (entropy), G (năng lượng Gibbs)` | Yes | S-08.1 | Hàm trạng thái, không phụ thuộc đường đi. |
| $Q, A$ | `Q (nhiệt), A (công) là hàm đường đi` | Yes | S-08.1 | Phụ thuộc đường đi. |
| $\Delta H = U + PV$ | `$H = U + PV$`, `$Q_p = \Delta H$` | Yes | S-08.1 | Enthalpy, áp suất không đổi. |
| $\Delta G = \Delta H - T\Delta S$ | `$\Delta G = \Delta H - T\Delta S$` | Yes | S-08.6 | Tiêu chuẩn gộp yếu tố nhiệt và trật tự. |
| $k = Ae^{-E_a/RT}$ | `$k = A e^{-E_a/RT}$` | Yes | S-08.7 | Phương trình Arrhenius, $R = 8,314$ J/(mol·K). |
| $Q_{10}$ | `Q_{10}` | Yes | S-08.7 | Tăng 10 °C → tốc độ tăng 2–3 lần. |
| $\Delta H_c^\circ = -2803$ kJ/mol | glucose đốt cháy | Yes | S-08.2 | Ví dụ glucose 5 g → 78 kJ ≈ 19 kcal. |
| $T_{đảo} = \Delta H/\Delta S$ | `$T_{đảo} = \frac{\Delta H}{\Delta S}$` | Yes | S-08.6 | Nhiệt độ đảo chiều, kết quả tính bằng Kelvin. |

### D.2 Thuật ngữ / Glossary candidates

| Thuật ngữ / Đại lượng | Dạng viết trong nguồn (`D-08`) | Dạng chuẩn hóa đề xuất | Ghi chú chuẩn hóa |
|---|---|---|---|
| Nhiệt hóa học | `Nhiệt hóa học` | **Nhiệt hóa học (thermochemistry)** | Giữ nguyên. |
| Hệ / môi trường | `Hệ`, `môi trường` | **Hệ (system)** / **Môi trường (surroundings)** | Giữ nguyên. |
| Nội năng | `Nội năng ($U$)` | **Nội năng (internal energy – $U$)** | Giữ nguyên. |
| Enthalpy | `Enthalpy ($H$)` | **Enthalpy (entalpi – $H$)** | Giữ nguyên. |
| Entropy | `Entropy ($S$)` | **Entropy (entropi – $S$)** | Giữ nguyên. |
| Năng lượng Gibbs | `Năng lượng Gibbs ($G$)` | **Năng lượng Gibbs (Gibbs energy – $G$)** | Giữ nguyên. |
| Định luật Hess | `Định luật Hess` | **Định luật Hess (Hess's law)** | Giữ nguyên. |
| Phương trình Arrhenius | `Phương trình Arrhenius` | **Phương trình Arrhenius (Arrhenius equation)** | Giữ nguyên. |
| Quy tắc Q10 | `Quy tắc $Q_{10}$` | **Quy tắc $Q_{10}$** | Giữ nguyên. |
| Đa hình | `Đa hình (polymorph)` | **Đa hình (polymorphism)** | Giữ nguyên. |
| DSC/TGA | `DSC/TGA` | **DSC/TGA (phân tích nhiệt)** | Giữ nguyên. |

---

## E. Open Questions for Gate A (Câu hỏi xin ý kiến phê duyệt tại Gate A)

1. **Q1 (Tên chương):** `MANIFEST.md` ghi tên chương 08 là gì? Nguồn file chỉ bắt đầu từ `<p><strong>Nhiệt hóa học</strong>…</p>` không có tên chương. Cần xác nhận tên chính xác trước S3.
2. **Q2 (Nội dung giàu, cấu trúc lại):** Nguồn 2.886 từ đã rất giàu (9 mục, 4 bảng, 9 công thức, 7 ví dụ). S3 có được phép cấu trúc lại, nhóm các mục tương tự để khớp mục tiêu ~4.000–4.500 từ, hay giữ toàn bộ nội dung nguồn?
3. **Q3 (Bổ sung bài tập):** Nguồn hoàn toàn không có câu hỏi/bài tập. Bạn có đồng ý S3 bổ sung bộ 10 câu hỏi/bài tập (gắn `[ADDED]`), tính trên các ví dụ có sẵn trong nguồn (glucose, urê, methane, đá vôi, NH4NO3, Arrhenius, …)?
4. **Q4 (Hình vẽ):** Nguồn có 4 bảng nhưng 0 hình vẽ/sơ đồ. Bạn có đồng ý S3 đặt placeholder `[FIGURE]` cho chu trình Arrhenius, đa hình tinh thể, lyophilization, sơ đồ quy trình 4 bước?
5. **Q5 (Tài liệu tham khảo):** Nguồn có 0 trích dẫn và `APPROVED_REFERENCE_LIST: none`. Bạn đồng ý S3 để `[VERIFY: reference needed …]` và chờ cung cấp giáo trình chuẩn?

---

## F. Not verified / limitations

- **Phạm vi dữ liệu:** Chỉ dựa trên `00_source_original/ch08_doc-hvc-8.html` (D-08). File nguồn được giữ nguyên trạng tuyệt đối (READ-ONLY).
- **Tài liệu tham khảo:** Không có trích dẫn gốc trong D-08; tất cả công thức, giá trị số ($\Delta H_c^\circ$ glucose, $\Delta H_f^\circ$ urê, $E_a$, $Q_{10}$, …) sẽ gắn `[VERIFY]` khi viết nếu không có trong nguồn.
- **Nội dung bổ sung ngoài nguồn:** Bài tập, hình vẽ, bảng tổng hợp mới là kiến thức giáo trình chuẩn, chưa có trong D-08; cần người dùng duyệt ở Gate A (Q3, Q4).
- **Kiểm tra cơ haine:** Thống kê文档 bằng script Python (xem mục A); chưa có script `check_coverage.py` chuyên dụng cho audit (sẽ chạy tại S2/S3).
- **Giới hạn giai đoạn:** Dừng ngay tại GATE A theo R9 và mục 7.2; chưa thực hiện viết bản thảo Stage S3.

---
GATE A: STOP. Awaiting user approval of the Content Mapping Matrix. Do not begin the transformation.
