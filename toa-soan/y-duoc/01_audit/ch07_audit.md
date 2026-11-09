# ch07_audit.md — S1 Audit · Chương 07 (D-07)

**Môn:** Y dược – Master Lecture Notes · **Stage:** S1 Audit · **Ngày:** 2026-11-09  
**Nguồn audit:** `00_source_original/ch07_doc-myd-7.html` (D-07) — READ-ONLY, không sửa.  
**Ngữ cảnh đối chiếu:** `00_config.md`, `00_source_original/MANIFEST.md`, `_state/carryover_latest.md`, `_state/glossary_running.md`, `_state/verification_list_running.md`.  
**Nguyên tắc:** Chỉ phân tích và lập hồ sơ truy vết; không viết lại, không sửa lỗi, không tự bổ sung kiến thức học thuật.

---

## A. Document Inventory

| D-ID | File | Type | Chapter | Slug gốc | Num | Lines | Approx. words | h4 / h5 | Formula boxes | Example boxes | Callouts | Tables | Figures/Images | References |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| D-07 | `00_source_original/ch07_doc-myd-7.html` | chapter-source (HTML fragment, MathJax) | 07 | doc-myd-7 | 7 | 28 | 872 (đếm bằng script) | 8 / 0 | 1 | 1 | 2 | 0 | 0 / 0 | 0 |

**Đặc điểm kỹ thuật (kiểm tra bằng script Python):**
- **Mã hóa & dung lượng:** UTF-8; 6.264 byte; 28 dòng; thẻ HTML đóng/mở cân bằng (`8 <h4>`, `2 <ul>`, `6 <li>`, `6 <p>`, `4 <div>`, `13 <strong>`, `1 <em>`, `4 <br>`).
- **Biểu thức toán/hóa (MathJax):** 1 khối công thức hiển thị riêng (`$$…$$`, tức 4 dấu `$$`), 32 biểu thức inline `$…$`.
- **Cấu trúc tiêu đề:** File bắt đầu trực tiếp bằng `<h4>1. Cấu trúc màng và gradient</h4>`; không có `<h1>/<h2>/<h3>` và không có tên chương bên trong file (tên chương chỉ nằm ở `MANIFEST.md`: *Chuyên đề 7: Trao đổi chất qua màng tế bào*).
- **Hộp nội dung:** 1 `formula-box` (phương trình Nernst); 1 `example-box` (định lý Nernst với K⁺); 2 `callout` (Cách nhớ ×2).
- **Bảng biểu & Hình vẽ:** 0 bảng (`<table>`), 0 hình vẽ/sơ đồ.
- **Tài liệu tham khảo:** 0 trích dẫn (`http`, `doi`, `ISBN`, "Tài liệu tham khảo", "NXB", "giáo trình" đều bằng 0). Trạng thái: **none present**.
- **Phân bổ số từ theo 8 mục (tổng = 814 từ):** `S-07.1` (~121) + `S-07.2` (~97) + `S-07.3` (~72) + `S-07.4` (~83) + `S-07.5` (~77) + `S-07.6` (~78) + `S-07.7` (~129) + `S-07.8` (~157).

> **Ghi chú dung lượng:** Nguồn ngắn (872 từ), chỉ 8 mục, 1 công thức, 1 ví dụ. Không có bài tập, không có bảng, không có hình, không có tài liệu tham khảo.

---

## B. Source Section Register

| S-ID | D-ID | chapter | heading path | location | content types | approx. words | ≤20-word summary |
|---|---|---|---|---|---|---|---|
| S-07.1 | D-07 | 07 | `1. Cấu trúc màng và gradient` | dòng 1–3 | theory/principle; definition; equation/model | ~121 | Màng tế bào là lớp lipid kép dày khoảng 7–10 nm, có cholesterol, protein màng và carbohydrate bề mặt. Màng tế bào có tính bán thấm chọn lọc: một số chất (như nước, oxy, carbon dioxide) đi qua dễ dàng; ion và chất phân cực thường cần kênh ion hoặc chất tải. Mỗi chất di chuyển theo gradient nồng độ và điện thế màng. Với ion, lực thúc đẩy tổng hợp gọi là gradient điện hóa. Phương trình Nernst mô tả điện thế cân bằng của một ion đơn lẻ: $E_{ion}=\frac{RT}{zF}\ln\frac{[ion]_{ngoài}}{[ion]_{trong}}$ trong đó $z$ là hóa trị ion, $R$ là hằng số khí, $T$ là nhiệt độ tuyệt đối và $F$ là hằng số Faraday. |
| S-07.2 | D-07 | 07 | `2. Khuếch tán đơn giản và thẩm thấu` | dòng 4–8 | theory/principle; definition | ~97 | Khuếch tán đơn giản: chất đi xuôi gradient qua lớp lipid hoặc lỗ màng, không tiêu thụ ATP; tốc độ phụ thuộc gradient, diện tích, độ thấm và khoảng cách khuếch tán. Thẩm thấu: nước di chuyển qua màng bán thấm về phía có nồng độ chất tan cao hơn. Aquaporin tạo đường dẫn nước nhanh ở nhiều mô. Áp suất thẩm thấu: gần đúng theo định luật van ’t Hoff, $\pi=iCRT$ với dung dịch loãng. Trong thực hành sinh lý, cần phân biệt osmolality (mOsm/kg nước) với osmolarity (mOsm/L dung dịch). |
| S-07.3 | D-07 | 07 | `3. Khuếch tán được hỗ trợ` | dòng 10–13 | theory/principle; mechanism | ~72 | Chất đi xuôi gradient qua protein màng, không tiêu thụ ATP trực tiếp. Kênh ion tạo lỗ chọn lọc, có thể đóng/mở theo điện thế, liên hệ hoặc lực cơ học; ví dụ kênh $Na^+$, $K^+$, $Ca^{2+}$ và $Cl^-$. Chất tải gắn chất rồi đổi cấu hình; ví dụ GLUT vận chuyển glucose theo gradient. Tính chọn lọc và bão hòa khiến tốc độ chất tải có giới hạn, khác khuếch tán đơn giản. |
| S-07.4 | D-07 | 07 | `4. Vận chuyển chủ động sơ cấp` | dòng 14–15 | theory/principle; equation/model | ~83 | Bơm dùng trực tiếp năng lượng ATP để chuyển chất ngược gradient điện hóa. Bơm $Na^+/K^+$-ATPase mỗi chu kỳ thủy phân một ATP, đưa $3\ Na^+$ ra và $2\ K^+$ vào; nhờ vậy duy trì thể tích tế bào, gradient ion và điều kiện cho vận chuyển thứ cấp. $Ca^{2+}$-ATPase đưa $Ca^{2+}$ khỏi bào tương hoặc vào lưới nội cơ tương; $H^+/K^+$-ATPase ở tế bào viền dạ dày bài tiết acid, là đích của thuốc ức chế bơm proton. |
| S-07.5 | D-07 | 07 | `5. Vận chuyển chủ động thứ cấp` | dòng 16–18 | theory/principle; mechanism | ~77 | Không dùng trực tiếp năng lượng ATP tại chất tải; năng lượng đến từ gradient ion do bơm sơ cấp tạo ra. Đồng vận chuyển (symport) đưa hai hay nhiều chất cùng chiều, ví dụ đồng vận chuyển $Na^+$-glucose (SGLT) ở ruột/thận. Đối vận chuyển (antiport) đưa chất theo hai chiều ngược nhau, ví dụ trao đổi $Na^+/Ca^{2+}$. Ức chế bơm $Na^+/K^+$-ATPase có thể làm suy giảm gián tiếp các vận chuyển phụ thuộc gradient $Na^+$. |
| S-07.6 | D-07 | 07 | `6. Nhập bào, xuất bào và vận chuyển qua biểu mô` | dòng 19–21 | theory/principle; application | ~78 | Nhập bào: màng lõm vào tạo túi; gồm thực bào hạt lớn, ẩm bào dịch và nhập bào qua thụ thể có chọn lọc. Xuất bào: túi hòa màng giải phóng chất, ví dụ phóng thích chất dẫn truyền thần kinh, hormone và enzym. Vận chuyển qua biểu mô: chất có thể đi xuyên tế bào (transcellular) hoặc qua khe liên bào (paracellular); tính phân cực mặt lòng ống/mặt đáy-bên quyết định chiều hấp thụ và bài tiết. |
| S-07.7 | D-07 | 07 | `7. Liên hệ dược lý và lâm sàng` | dòng 22–27 | theory/principle; application | ~129 | Đường dùng và tính tan ảnh hưởng hấp thu thuốc; chất vận chuyển ở ruột, gan, thận và hàng rào máu–não có thể làm thay đổi nồng độ thuốc. SGLT2 là đích của thuốc ức chế đồng vận chuyển $Na^+$-glucose ở thận; thuốc chẹn kênh ion thay đổi tính hưng phấn tế bào. Dung dịch ưu trương kéo nước khỏi tế bào; dung dịch nhược trương có thể làm tế bào trương. Nội dung thực tế phụ thuộc thành phần dung dịch, tốc độ truyền và tình trạng người bệnh. |
| S-07.8 | D-07 | 07 | `Ý nghĩa và tác dụng` (không đánh số) | dòng 28–30 | other (summary); application | ~157 | Trao đổi qua màng duy trì thành phần dịch nội–ngoại bào, hấp thụ chất dinh dưỡng, bài tiết và tương tác sinh học. Nhận diện đúng đồng phân giúp đọc công thức, dự đoán sản phẩm phản ứng và hiểu vì sao hình ảnh phối trí ảnh hưởng hiệu quả của thuốc kim loại. |

**Tổng cộng:** 8 S-ID (`S-07.1` đến `S-07.8`); tổng số từ 814 từ (phân bổ mục) / 872 (toàn file).

---

## C. Content Coverage Matrix

| chapter | Definitions | Theory | Mechanisms | Equations | Examples | Case studies | Applications | Questions/Exercises | References | Figures/Tables |
|---|---|---|---|---|---|---|---|---|---|---|
| 07 (D-07) | Present (S-07.1, S-07.2, S-07.3, S-07.4, S-07.5, S-07.6) | Present (S-07.1–S-07.6) | Present (S-07.1 hệ mở/đóng/côlap; S-06.1 nguyên lý I & II; S-06.2 nguyên lý II/Prigogine; S-06.4 Gibbs/ATP coupling) | Present (S-06.1–S-06.4, 4 công thức) | Present (S-07.1 ví dụ inline; S-07.1 hộp ví dụ Nernst $K^+$) | Absent | Present (S-07.1–S-07.8 đều có ứng dụng dược lý: hấp thụ thuốc, SGLT2, thuốc chẹn kênh ion, dung dịch ưu trương/nhược trương) | Absent | Absent | Absent (0 bảng, 0 hình vẽ) |

**Ghi chú chi tiết về độ phủ:**
- **Definitions & Theory — Present:** Có định nghĩa hệ nhiệt động (côlap/kín/mở), nguyên lý I & II, enthalpy, entropy, năng lượng tự do Gibbs, định luật Hess, năng lượng liên kết, nhiệt dung, nhiệt lượng kế, nguyên lý II & Gibbs, hệ thống đồng hóa ATP.
- **Mechanisms — Present:** Cơ chế chuyển hóa năng lượng trong cơ thể, nguyên lý I (bảo toàn năng lượng), nguyên lý II (entropy tăng trong hệ cô lập, cơ thể sống thải entropy ra ngoài), liên hợp năng lượng ATP.
- **Equations — Present:** 4 công thức ($\Delta U = Q - A$, $\Delta E_{hóa\ học} = Q_{tỏa} + A_{sinh}$, $dS = d_iS + d_eS$, $\Delta G = \Delta H - T\cdot\Delta S$).
- **Examples — Present:** 1 hộp ví dụ (ghép cặp năng lượng ở hexokinase).
- **Case studies — Absent:** 0 ca bệnh cụ thể.
- **Applications — Present:** Ứng dụng dược lý: điện sinh học (ECG/EEG/EMG), điện trị liệu (đốt điện, cầm máu, TENS), an toàn điện (macroshock/microshock), từ trường (MRI, từ phân liều), cảm ứng điện từ (đo lưu lượng máu, máy biến áp), hạt nano từ tính (dẫn thuốc hướng đích, nhiệt trị từ, cản quang MRI).
- **Questions/Exercises — Absent:** 0 câu hỏi, 0 bài tập trong nguồn (tập exercises riêng).
- **References — Absent:** 0 tài liệu tham khảo.
- **Figures/Tables — Absent:** 0 bảng và 0 hình, trong khi nội dung nói về điện thế màng, điện thế hoạt động, từ trường, cảm ứng điện từ, hạt nano từ tính có thể minh họa bằng sơ đồ.

---

## D. Notation and Terminology Inventory

### D.1 Ký hiệu và đơn vị

| Symbol / unit | As written in source | Defined? | Location | Note |
|---|---|---|---|---|
| $\Delta U = Q - A$ | `$$\Delta U = Q - A$$` (hay $Q = \Delta U + A$) | Yes | S-07.2 (dòng 11) | Nguyên lý I: năng lượng nội tại thay đổi bằng nhiệt trừ công. |
| $\Delta E_{hóa\ học} = Q_{tỏa} + A_{sinh}$ | `$$\Delta E_{hóa\ học} = Q_{tỏa} + A_{sinh}$$` | Yes | S-07.2 (dòng 12) | Năng lượng hóa học thay đổi bằng nhiệt tỏa cộng công sinh. |
| $dS = d_iS + d_eS` | `$$dS = d_iS + d_eS$$` | Yes | S-07.3 (dòng 34) | Phương trình Prigogine: biến thiên entropy = entropy sinh ra nội tại + entropy trao đổi với môi trường. |
| $\Delta G = \Delta H - T \cdot \Delta S` | `$$\Delta G = \Delta H - T \cdot \Delta S$$` | Yes | S-06.4 (dòng 43) | Năng lượng tự do Gibbs; $\Delta G < 0$ tự phát, $\Delta G > 0$ không tự phát, $\Delta G = 0$ cân bằng. |
| $\Delta G^{\circ\prime} \approx -30,5\text{ kJ/mol}$ | `$\Delta G^{\circ\prime} \approx -30,5\text{ kJ/mol}$` | Yes | S-06.4 (dòng 48) | Năng lượng tự do tiêu chuẩn của thủy phân ATP. |
| $A + B \rightarrow C$ | `$A + B \rightarrow C \ (\Delta G_1 > 0)$` | Yes | S-06.4 (dòng 50) | Phản ứng đồng hóa ghép đôi với thủy phân ATP. |

### D.2 Thuật ngữ / Glossary candidates

| Thuật ngữ / Đại lượng | Dạng viết trong nguồn (`D-07`) | Dạng chuẩn hóa đề xuất | Ghi chú chuẩn hóa |
|---|---|---|---|
| Hệ nhiệt động | `Hệ cô lập`, `Hệ kín`, `Hệ mở` | **Hệ nhiệt động (thermodynamic system)**: côlap/kín/mở | Giữ nguyên. |
| Trạng thái dừng | `Trạng thái dừng (Steady State)` | **Trạng thái dừng (steady state)** | Phân biệt với cân bằng nhiệt động (trạng thái chết). |
| Nguyên lý I Nhiệt động học | `Nguyên lý I Nhiệt động học` | **Nguyên lý I nhiệt động học (bảo toàn năng lượng)** | Giữ nguyên. |
| Nguyên lý II Nhiệt động học | `Nguyên lý II Nhiệt động học` | **Nguyên lý II nhiệt động học (tăng entropy trong hệ cô lập)** | Giữ nguyên. |
| Phương trình Prigogine | `Phương trình Prigogine` | **Phương trình Prigogine ($dS = d_iS + d_eS$)** | Giữ nguyên. |
| Năng lượng tự do Gibbs | `Năng lượng tự do Gibbs ($\Delta G$)` | **Năng lượng tự do Gibbs (Gibbs free energy – $\Delta G$)** | Giữ nguyên. |
| Liên hợp năng lượng | `Cơ chế liên hợp năng lượng (Energy Coupling)` | **Liên hợp năng lượng (energy coupling)** | Giữ nguyên. |
| ATP/ADP/Pi | `ATP`, `ADP`, `P_i` | **ATP**, **ADP**, **$P_i$** | Giữ nguyên, INN. |
| Màng tế bào | `Màng tế bào` | **Màng tế bào (cell membrane)** | Giữ nguyên. |
| Lớp lipid kép | `lớp lipid kép` | **Lớp lipid kép (lipid bilayer)** | Giữ nguyên. |
| Màng bán thấm | `màng bán thấm` | **Màng bán thấm (semipermeable membrane)** | Giữ nguyên. |
| Gradient nồng độ | `gradient nồng độ` | **Gradient nồng độ (concentration gradient)** | Giữ nguyên. |
| Điện thế màng | `điện thế màng` | **Điện thế màng (membrane potential)** | Giữ nguyên. |
| Phương trình Nernst | `Phương trình Nernst` | **Phương trình Nernst (Nernst equation)** | Giữ nguyên. |
| Chất tải | `chất tải` | **Chất tải (carrier/transporter)** | Giữ nguyên. |
| Kênh ion | `kênh ion` | **Kênh ion (ion channel)** | Giữ nguyên. |
| Vận chuyển chủ động | `Vận chuyển chủ động` | **Vận chuyển chủ động (active transport)** | Giữ nguyên. |
| Vận chuyển chủ động sơ cấp | `Vận chuyển chủ động sơ cấp` | **Vận chuyển chủ động sơ cấp (primary active transport)** | Giữ nguyên. |
| Vận chuyển chủ động thứ cấp | `Vận chuyển chủ động thứ cấp` | **Vận chuyển chủ động thứ cấp (secondary active transport)** | Giữ nguyên. |
| Nhập bào / Xuất bào | `Nhập bào`, `Xuất bào` | **Nhập bào (endocytosis)**, **Xuất bào (exocytosis)** | Giữ nguyên. |
| Vận chuyển qua biểu mô | `Vận chuyển qua biểu mô` | **Vận chuyển qua biểu mô (transcellular transport)** | Giữ nguyên. |
| Dung dịch ưu trương / nhược trương | `dung dịch ưu trương`, `dung dịch nhược trương` | **Dung dịch ưu trương (hypertonic solution)**, **Dung dịch nhược trương (hypotonic solution)** | Giữ nguyên. |

---

## E. Open Questions for Gate A (Câu hỏi xin ý kiến phê duyệt tại Gate A)

1. **Q1 (Tên chuyên đề):** `MANIFEST.md` ghi tên chuyên đề 07 là "Trao đổi chất qua màng tế bào". Nguồn file không có tên chuyên đề bên trong HTML. Bạn đồng ý dùng tên từ MANIFEST làm tiêu đề chuyên đề S3?
2. **Q2 (Nguồn rất ngắn, 8 mục):** Nguồn chỉ 872 từ, 8 mục, không có bài tập, không có bảng, không có hình. Bạn đồng ý S3 bổ sung khung sư phạm T1–T3 (kiến thức tiên kỳ, chuẩn đầu ra, thời lượng), bảng tổng hợp công thức, sơ đồ Mermaid, và bộ bài tập (gắn `[ADDED]`)?
3. **Q3 (Hình vẽ):** Nguồn có 0 bảng, 0 hình. Bạn đồng ý S3 đặt placeholder `[FIGURE]` cho màng tế bào, kênh ion/chất tải, nhập/xuất bào?
4. **Q4 (Tài liệu tham khảo):** Nguồn có 0 trích dẫn và `APPROVED_REFERENCE_LIST: none`. Bạn đồng ý S3 để `[VERIFY: reference needed …]` và chờ cung cấp giáo trình chuẩn?

---

## F. Not verified / limitations

- **Phạm vi dữ liệu:** Chỉ dựa trên `00_source_original/ch07_doc-myd-7.html` (D-07). File nguồn được giữ nguyên trạng tuyệt đối (READ-ONLY).
- **Tài liệu tham khảo:** Không có trích dẫn gốc trong D-07; tất cả công thức, giá trị số ($E_K \approx -95\text{ mV}$) sẽ gắn `[VERIFY]` khi viết nếu không có trong nguồn.
- **Nội dung bổ sung ngoài nguồn:** Khung sư phạm, bài tập, hình vẽ, bảng tổng hợp là kiến thức giáo trình chuẩn, chưa có trong D-07; cần người dùng duyệt ở Gate A (Q2, Q3).
- **Kiểm tra cơ haine:** Thống kê文档 bằng script Python (xem mục A); chưa có script `check_coverage.py` chuyên dụng cho audit (sẽ chạy tại S2/S3).
- **Giới hạn giai đoạn:** Dừng ngay tại GATE A theo R9 và mục 7.2; chưa thực hiện viết bản thảo Stage S3.

---
GATE A: STOP. Awaiting user approval of the Content Mapping Matrix. Do not begin the transformation.
