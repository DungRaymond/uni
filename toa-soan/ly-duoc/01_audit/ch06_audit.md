# ch06_audit.md — S1 Audit · Chương 06 (D-06)

**Môn:** Lý dược – Master Lecture Notes · **Stage:** S1 Audit · **Ngày:** 2026-11-09  
**Nguồn audit:** `00_source_original/ch06_doc-ld-c5.html` (D-06) — READ-ONLY, không sửa.  
**Ngữ cảnh đối chiếu:** `00_config.md`, `00_source_original/MANIFEST.md`, `_state/carryover_latest.md`, `_state/glossary_running.md`, `_state/verification_list_running.md`, `01_audit/ch05_audit.md`.  
**Nguyên tắc:** Chỉ phân tích và lập hồ sơ truy vết; không viết lại, không sửa lỗi, không tự bổ sung kiến thức học thuật.

---

## A. Document Inventory

| D-ID | File | Type | Chapter | Slug gốc | Num | Lines | Approx. words | h4 / h5 | Formula boxes | Example boxes | Callouts | Tables | Figures/Images | References |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| D-06 | `00_source_original/ch06_doc-ld-c5.html` | chapter-source (HTML fragment, MathJax) | 06 | doc-ld-c5 | 6 | 325 | 6828 (đếm bằng script) | 12 / 5 | 19 | 7 | 8 | 5 | 6 / 0 | 0 |

**Đặc điểm kỹ thuật (kiểm tra bằng script Python):**
- **Mã hóa & dung lượng:** UTF-8; 54.552 byte; 325 dòng; thẻ HTML đóng/mở cân bằng (`12 <h4>`, `5 <h5>`, `18 <ul>`, `65 <li>`, `16 <p>`, `54 <div>`, `108 <strong>`, `42 <em>`, `17 <br>`).
- **Biểu thức toán/hóa (MathJax):** 19 khối công thức hiển thị riêng (`$$…$$`, tức 42 dấu `$$`), 698 biểu thức inline `$…$`.
- **Cấu trúc tiêu đề:** File bắt đầu trực tiếp bằng `<h4>1. Điện trường - điện thế - điện dung: màng tế bào như một tụ điện</h4>`; không có `<h1>/<h2>/<h3>` và không có tên chương bên trong file (tên chương chỉ nằm ở `MANIFEST.md`: *Chương 6: Điện và Từ trong Y Dược học (Electricity & Magnetism in Medicine & Pharmacy)*).
- **Hộp nội dung:** 19 `formula-box` (Định luật Coulomb, điện trường, điện thế, điện dung, định luật Ohm, Joule - Lenz, mạch RC, Nernst, GHK, điện thế hành động, tỷ lệ cysteine, từ trường, cảm ứng điện từ, định luật Faraday, tổng quát Avogadro, cảm ứng quang, năng lượng photon); 7 `example-box` (màng tế bào như tụ điện, điện thế nghỉ,電 thế hoạt động, mạch RC, điện sinh học, điện trị liệu, an toàn điện, cảm ứng điện từ, hạt nano từ); 8 `callout` (Cách nhớ ×8).
- **Bảng biểu & Hình vẽ:** 5 bảng (`<table>`) (hệ số điện môi, điện trở các mô, mô hình RC màng tế bào, hệ số thấm ledne, hệ số hấp thụ;) ; 6 hình (`<img>`, `<figure>`) (sơ đồ màng tế bào, điện thế hoạt động, mạch RC, cảm ứng điện từ, hạt nano từ tính, phổ điện từ).
- **Tài liệu tham khảo:** 0 trích dẫn (`http`, `doi`, `ISBN`, "Tài liệu tham khảo", "NXB", "giáo trình" đều bằng 0). Trạng thái: **none present**.
- **Phân bổ số từ theo 12 mục (tổng = 6691 từ):** `S-06.1` (~431) + `S-06.2` (~250) + `S-06.3` (~274) + `S-06.4` (~3039) + `S-06.5` (~468) + `S-06.6` (~320) + `S-06.7` (~380) + `S-06.8` (~328) + `S-06.9` (~400) + `S-06.10` (~419) + `S-06.11` (~218) + `S-06.12` (~164).

> **Ghi chú dung lượng:** Nguồn rất giàu (6828 từ), 12 mục, 19 công thức, 7 ví dụ, 8 callout, 5 bảng, 6 hình. Không có tài liệu tham khảo.

---

## B. Source Section Register

| S-ID | D-ID | chapter | heading path | location | content types | approx. words | ≤20-word summary |
|---|---|---|---|---|---|---|---|
| S-06.1 | D-06 | 06 | `1. Điện trường - điện thế - điện dung: màng tế bào như một tụ điện` | dòng 1–16 | theory/principle; equation/model; definition | ~431 | Hệ cô lập/kín/mở; điện trường, điện thế, hiệu điện thế; tụ điện phẳng, điện dung; màng tế bào như tụ điện, điện dung riêng, điện thế nghỉ, điện trường trong màng. |
| S-06.2 | D-06 | 06 | `2. Dòng điện một chiều, định luật Ohm và công suất điện` | dòng 17–33 | theory/principle; equation/model; example (inline) | ~250 | Cường độ dòng điện; định luật Ohm ($U = IR$, $R = \rho l/S$); công và công suất điện ($A = UI$, $P = UI = I^2R = U^2/R$); định luật Joule - Lenz ($Q = I^2Rt$). |
| S-06.3 | D-06 | 06 | `3. Mạch RC và mô hình tương đương của màng tế bào` | dòng 34–42 | theory/principle; equation/model | ~274 | Màng tế bào như tụ điện song song điện trở; hằng số thời gian $\tau = R_m C_m$; $U_C(t) = U_0(1 - e^{-t/\tau})$ (nạp) và $U_C(t) = U_0 e^{-t/\tau}$ (xả); hằng số không gian $\lambda$. |
| S-06.4 | D-06 | 06 | `4. Điện sinh học: nguồn gốc và lan truyền tín hiệu điện của cơ thể` | dòng 44–133 | theory/principle; equation/model; example; case study | ~3039 | Bơm $Na^+/K^+$-ATPase; điện thế nghỉ; điện thế hoạt động; phương trình Nernst; phương trình GHK; điện thế hoạt động (khử cực/tái cực/trơ); đồngссинхрон; ECG/EEG/EMG; điện sinh học ứng dụng. |
| S-06.5 | D-06 | 06 | `5. Tác dụng của dòng điện lên cơ thể và ứng dụng điện trị liệu` | dòng 196–214 | theory/principle; application; example | ~468 | Tác dụng kích thích/điện phân/nhiệt; điện phân dẫn thuốc qua da (iontophoresis); kích thích điện qua da (TENS); dòng cao tần; máy khử rung tim; máy tạo nhịp tim; an toàn điện. |
| S-06.6 | D-06 | 06 | `6. An toàn điện: dòng macroshock và microshock` | dòng 216–228 | theory/principle; table | ~320 | Bảng cường độ dòng và tác dụng sinh học (cảm nhận, "buông không được", rung thất); microshock qua catheter tim; nguyên tắc phòng ngừa (nối đất, cách ly, RCD). |
| S-06.7 | D-06 | 06 | `7. Từ trường, lực từ và từ tính của vật chất` | dòng 272–287 | theory/principle; equation/model | ~380 | Cảm ứng từ ($B$), từ thông ($\Phi$); lực từ ($F = qvB\sin\theta$, $F = BIl\sin\theta$); từ trường do dòng điện ($B = \mu_0 I/2\pi r$, $B = \mu_0 nI$); mômen từ; phân loại vật liệu (địch từ, thuận từ, sắt từ). |
| S-06.8 | D-06 | 06 | `8. Cảm ứng điện từ và ứng dụng trong thiết bị y tế` | dòng 288–270 | theory/principle; equation/model; example | ~328 | Định luật Faraday ($$\varepsilon = -N\frac{d\Phi}{dt}$$); tự cảm ($L$, $W = \frac{1}{2}LI^2$); máy biến áp ($\frac{U_1}{U_2} = \frac{N_1}{N_2} = \frac{I_2}{I_1}$); cảm ứng điện từ đo lưu lượng máu; máy biến áp cách liye; cắt quang MRI. |
| S-06.9 | D-06 | 06 | `9. Hạt nano từ tính và dẫn thuốc hướng đích` | dòng 288–287 | theory/principle; equation/model | ~400 | Hạt nano từ tính (SPION, $Fe_3O_4$, $\gamma-Fe_2O_3$); hạt nano siêu thuận từ; dẫn thuốc hướng đích bằng từ trường gradient ($F = (\vec{m}\cdot\nabla)\vec{B}$); nhiệt trị từ (SAR); dùng chụp cản quang MRI và điều trị ung thư. |
| S-06.10 | D-06 | 06 | `10. Trường điện từ, sóng điện từ và phổ điện từ` | dòng 289–295 | theory/principle; equation/model; table | ~419 | Phương trình Maxwell; sóng điện từ ($c = 1/\sqrt{\varepsilon_0\mu_0} = \lambda f$); năng lượng photon ($E = hf$); phổ điện từ (tử ngoại, quang phổ hấp thụ UV-Vis, tia X, tia gamma); an toàn điện từ (ICNIRP, SAR). |
| S-06.11 | D-06 | 06 | `11. Bảng tổng hợp đại lượng và đơn vị` | dòng 296–303 | table; definition | ~218 | Bảng tổng hợp các đại lượng vật lý điện từ với ký hiệu, đơn vị và ý nghĩa thực tế. |
| S-06.12 | D-06 | 06 | `Ý nghĩa và tác dụng tổng kết` | dòng 304–325 | other (summary); application | ~164 | Từ trường sinh học (tùy chọn từ, ACC, MRI); điện sinh học chẩn đoán; an toàn điện; ứng dụng điện từ trong y dược. |

**Tổng cộng:** 12 S-ID (`S-06.1` đến `S-06.12`); tổng số từ 6691 từ (phân bổ mục) / 6828 (toàn file).

---

## C. Content Coverage Matrix

| chapter | Definitions | Theory | Mechanisms | Equations | Examples | Case studies | Applications | Questions/Exercises | References | Figures/Tables |
|---|---|---|---|---|---|---|---|---|---|---|
| 06 (D-06) | Present (S-06.1, S-06.2, S-06.4, S-06.7, S-06.8, S-06.9, S-06.10) | Present (S-06.1–S-06.10) | Present (S-06.1, S-06.2, S-06.3, S-06.4, S-06.7, S-06.8, S-06.9) | Present (S-06.1–S-06.10, 19 công thức) | Present (S-06.1–S-06.5, 7 ví dụ) | Present (S-06.1–S-06.5, 7 ví dụ) | Present (S-06.1–S-06.5, S-06.8, S-06.9, S-06.10, S-06.12) | Absent | Absent | Present (5 bảng, 6 hình) |

**Ghi chú chi tiết về độ phủ:**
- **Definitions & Theory — Present:** Có định nghĩa hệ nhiệt động (côlap/kín/mở), nguyên lý I & II, enthalpy, entropy, năng lượng tự do Gibbs, định luật Coulomb, Ohm, Prigogine, Gauss, Faraday, Lenz; có định nghĩa về từ trường, cảm ứng điện từ.
- **Mechanisms — Present:** Cơ chế chuyển hóa năng lượng trong cơ thể, cơ chế điện sinh học (khử cực/tái cực), cơ chế cảm ứng điện từ, cơ chế hạt nano từ tính.
- **Equations — Present:** Có 19 công thức ($Q = I^2Rt$, $E = hf$, $\Phi = BS$, $F = BIl\sin\theta$, $c = 1/\sqrt{\varepsilon_0\mu_0} = \lambda f$, $E = hf$, $k = \frac{1}{4\pi\varepsilon_0}$, $\Delta U = Q - A$, $\Delta E_{hóa\ học} = Q_{tỏa} + A_{sinh}$, $E_{màng} = U/d$, $C = \varepsilon\varepsilon_0 S/d$, $Q = CU$, $W = \frac{1}{2}CU^2$, $dS = d_iS + d_eS$, $\Delta G = \Delta H - T\Delta S$, $E_{ion} = \frac{RT}{zF}\ln\frac{[ion]_o}{[ion]_i}$, $E_m = \frac{RT}{F}\ln(...)$, $v = \sqrt{K/\rho} = \lambda f$, $Z = \rho v$, $R = ((Z_2 - Z_1)/(Z_2 + Z_1))^2$, $I(x) = I_0 e^{-\mu x}$, $\Delta f = \frac{2 f_0 v \cos\theta}{c}$, $SAR = C\frac{\Delta T}{\Delta t}$).
- **Examples — Present:** 7 hộp ví dụ (màng tế bào như tụ điện, điện thế nghỉ, điện thế hoạt động, mạch RC, điện sinh học, điện trị liệu, an toàn điện, từ trường, cảm ứng điện từ, hạt nano từ tính).
- **Case studies — Present:** Các ví dụ thực tế (điện sinh học, điện trị liệu, an toàn điện, từ trường, cảm ứng điện từ, hạt nano từ tính).
- **Applications — Present:** Ứng dụng dược lý: điện sinh học (ECG/EEG/EMG), điện trị liệu (đốt điện, cầm máu, TENS), an toàn điện (microshock, macroshock), từ trường (MRI, từ dữ liệu), cảm ứng điện từ (đo lưu lượng máu, máy biến áp cách liền), hạt nano từ tính (dẫn thuốc hướng đích, nhiệt trị từ, cản quang MRI).
- **Questions/Exercises — Absent:** 0 câu hỏi, 0 bài tập trong nguồn (tập exercises riêng).
- **References — Absent:** 0 tài liệu tham khảo.
- **Figures/Tables — Present (5 bảng, 6 hình):** Có bảng (điện trở các mô, mô hình RC, hệ số thấm ledne, hệ số hấp thụ, quy tắc định màu sóng điện từ, an toàn điện) và 6 hình (sơ đồ màng tế bào, điện thế hoạt động, mạch RC, cảm ứng điện từ, hạt nano từ tính, phổ điện từ).

---

## D. Notation and Terminology Inventory

### D.1 Ký hiệu và đơn vị

| Symbol / unit | As written in source | Defined? | Location | Note |
|---|---|---|---|---|
| $Q = \frac{1}{4\pi\varepsilon_0}\frac{q_1q_2}{r^2}$ | `$$F = k\frac{|q_1 q_2|}{\varepsilon r^2} \quad \text{với} \quad k = \frac{1}{4\pi\varepsilon_0} \approx 9 \times 10^9\ \text{N}\cdot\text{m}^2/\text{C}^2$$` | Yes | S-06.1 (dòng 4) | Định luật Coulomb. |
| $E = F/q$ | `Cường độ điện trường ($E$): ... $E = F/q$ ($\text{V/m}$)` | Yes | S-06.1 (dòng 6) | Cường độ điện trường. |
| $V = kq/(\varepsilon r)$ | `Điện thế ($V$) và hiệu điện thế ($U$): $V = kq/(\varepsilon r)$` | Yes | S-06.1 (dòng 7) | Điện thế do điện tích điểm. |
| $C = \frac{\varepsilon \varepsilon_0 S}{d}$ | `$$C = \frac{\varepsilon \varepsilon_0 S}{d}\ \ [\text{F}]$$` | Yes | S-06.1 (dòng 9) | Điện dung tụ điện phẳng. |
| $Q = CU$ ; $W = \frac{1}{2}CU^2 = \frac{Q^2}{2C}$ | `$$Q = CU \qquad W = \frac{1}{2}CU^2 = \frac{Q^2}{2C}$$` | Yes | S-06.1 (dòng 9) | Điện dung, điện năng. |
| $\varepsilon_0 \approx 8,85 \times 10^{-12}\ \text{F/m}$ | `$\varepsilon_0 \approx 8,85 \times 10^{-12}\ \text{F/m}$` | Yes | S-06.1 (dòng 9) | Hằng số điện môi chân không. |
| $E_{màng} = \frac{|U|}{d}$ | `$$E_{màng} = \frac{|U|}{d} = \frac{0,07\ \text{V}}{7,5 \times 10^{-9}\ \text{m}} \approx 9,3 \times 10^6\ \text{V/m}$$` | Yes | S-06.1 (dòng 14) | Cường độ điện trường trong màng tế bào. |
| $\sigma = \frac{Q}{S} = C_m U \approx 70\ \text{nC/cm}^2$ | `$\sigma = \frac{Q}{S} = C_m U \approx 70\ \text{nC/cm}^2$$` | Yes | S-06.1 (dòng 14) | Mật độ điện tích bề mặt của màng tế bào. |
| $I = \Delta q/\Delta t$ | `Cường độ dòng điện: $I = \Delta q/\Delta t$ (A)` | Yes | S-06.2 (dòng 19) | Cường độ dòng điện. |
| $U = IR$ ; $R = \rho\frac{l}{S}$ ; $G = \frac{1}{R}$ | `$$U = IR \qquad R = \rho\frac{l}{S} \qquad G = \frac{1}{R}$$` | Yes | S-06.2 (dòng 21) | Định luật Ohm; điện trở; điện dẫn. |
| $A = UIt$ ; $P = UI = I^2R = \frac{U^2}{R}$ | `$$A = UIt \qquad P = UI = I^2R = \frac{U^2}{R}$$` | Yes | S-06.2 (dòng 25) | Công và công suất điện. |
| $Q = I^2Rt$ | `$$Q = I^2Rt$$` | Yes | S-06.2 (dòng 28) | Định luật Joule - Lenz. |
| $\tau = R_m C_m$ | `$$\tau = R_m C_m$$` | Yes | S-06.3 (dòng 36) | Hằng số thời gian của màng tế bào (mạch RC). |
| $U_C(t) = U_0(1 - e^{-t/\tau})$ ; $U_C(t) = U_0 e^{-t/\tau}$ | `$$U_C(t) = U_0\left(1 - e^{-t/\tau}\right)\ \text{(nạp)} \qquad U_C(t) = U_0 e^{-t/\tau}\ \text{(xả)}$$` | Yes | S-06.3 (dòng 36) | Điện thế trên tụ điện khi nạp/xả. |
| $\lambda = \sqrt{R_m/R_i}$ | `$\lambda = \sqrt{R_m/R_i}$` | Yes | S-06.3 (dòng 39) | Hằng số không gian của sợi trục. |
| $E_{ion} = \frac{RT}{zF}\ln\frac{[ion]_o}{[ion]_i} \approx \frac{61,5}{z}\log_{10}\frac{[ion]_o}{[ion]_i}$ | `$$E_{ion} = \frac{RT}{zF}\ln\frac{[ion]_o}{[ion]_i} \approx \frac{61,5}{z}\log_{10}\frac{[ion]_o}{[ion]_i}\ \ [\text{mV}]\ \text{(ở } 37^\circ\text{C)}$$` | Yes | S-06.4 (dòng 96) | Phương trình Nernst. |
| $E_m = \frac{RT}{F}\ln\left(\frac{P_K[K^+]_o + P_{Na}[Na^+]_o + P_{Cl}[Cl^-]_i}{P_K[K^+]_i + P_{Na}[Na^+]_i + P_{Cl}[Cl^-]_o}\right) \approx -70\ \text{đến}\ -90\ \text{mV}$ | `$$E_m = \frac{RT}{F}\ln\left(\frac{P_K[K^+]_o + P_{Na}[Na^+]_o + P_{Cl}[Cl^-]_i}{P_K[K^+]_i + P_{Na}[Na^+]_i + P_{Cl}[Cl^-]_o}\right) \approx -70\ \text{đến}\ -90\ \text{mV}$$` | Yes | S-06.4 (dòng 100) | Phương trình Goldman-Hodgkin-Katz (GHK). |
| $\Delta f = \frac{2 f_0 v \cos\theta}{c}$ | `$$ \Delta f = \frac{2 f_0 v \cos\theta}{c} \quad \implies \quad v = \frac{c \cdot \Delta f}{2 f_0 \cos\theta}$$` | Yes | S-06.4 (dòng 57) | Hiệu ứng Doppler. |
| $U = BS \cos\theta$ | `$$\Phi = B S \cos\theta$$` | Yes | S-06.7 (dòng 233) | Từ thông qua diện tích. |
| $F = B I l \sin\theta$ ; $F = |q| v B \sin\theta$ | `$$F = B I l \sin\theta \qquad F = |q| v B \sin\theta \quad \text{(lực Lorentz)}$$` | Yes | S-06.7 (dòng 238) | Lực từ tác dụng lên dây điện dòng và lên điện tích chuyển động. |
| $c = \frac{1}{\sqrt{\varepsilon_0\mu_0}} = \lambda f$ | `$$c = \frac{1}{\sqrt{\varepsilon_0\mu_0}} \approx 3 \times 10^8\ \text{m/s} \qquad v = \frac{c}{n} \qquad c = \lambda f$$` | Yes | S-06.10 (dòng 292) | Tốc độ sóng điện từ. |
| $E = hf$ | `$$E = hf$$` với $h = 6,626 \times 10^{-34}\ \text{J}\cdot\text{s}$ | Yes | S-06.10 (dòng 295) | Năng lượng photon. |
| $\varepsilon = -N\frac{d\Phi}{dt}$ | `$$\varepsilon = -N\frac{d\Phi}{dt}$$` | Yes | S-06.8 (dòng 258) | Định luật cảm ứng Faraday. |
| $k = A\frac{dI}{dt}$ | `$$k = A\frac{dI}{dt}$$` | Yes | S-06.8 (dòng 259) | Độ tự cảm. |
| $W = \frac{1}{2}LI^2$ | `$$W = \frac{1}{2}LI^2$$` | Yes | S-06.8 (dòng 259) | Năng lượng từ trường tích trữ trong cuộn cảm. |
| $\frac{U_1}{U_2} = \frac{N_1}{N_2} = \frac{I_2}{I_1}$ | `$$\frac{U_1}{U_2} = \frac{N_1}{N_2} = \frac{I_2}{I_1}$$` | Yes | S-06.8 (dòng 261) | Định luật biến áp. |
| $U = Bvd$ | `$$U = B \cdot v \cdot d$$` | Yes | S-06.8 (dòng 265) | Hiệu điện thế cảm ứng trong dòng máu (đo lưu lượng máu). |
| $SAR = C\frac{\Delta T}{\Delta t}$ | `$$SAR = C\frac{\Delta T}{\Delta t}\ \ [\text{W/kg}]$$` | Yes | S-06.9 (dòng 282) | Công suất hấp thụ riêng (nhiệt trị từ). |

### D.2 Thuật ngữ / Glossary candidates

| Thuật ngữ / Đại lượng | Dạng viết trong nguồn (`D-06`) | Dạng chuẩn hóa đề xuất | Ghi chú chuẩn hóa |
|---|---|---|---|
| Điện trường | `Điện trường` | **Điện trường (electric field)** | Giữ nguyên. |
| Điện thế | `Điện thế ($V$)` | **Điện thế (electric potential – $V$)** | Giữ nguyên. |
| Hiệu điện thế | `Hiệu điện thế ($U$)` | **Hiệu điện thế (electric potential difference – $U$)** | Giữ nguyên. |
| Điện dung | `Điện dung ($C$)` | **Điện dung (capacitance – $C$)** | Giữ nguyên. |
| Điện trở | `Điện trở ($R$)` | **Điện trở (electrical resistance – $R$)** | Giữ nguyên. |
| Công suất | `Công suất ($P$)` | **Công suất (electric power – $P$)** | Giữ nguyên. |
| Định luật Ohm | `Định luật Ohm` | **Định luật Ohm (Ohm's law)** | Giữ nguyên. |
| Định luật Joule - Lenz | `Định luật Joule - Lenz` | **Định luật Joule - Lenz (Joule - Lenz law)** | Giữ nguyên. |
| Hằng số thời gian | `Hằng số thời gian ($\tau = R_m C_m$)` | **Hằng số thời gian (time constant – $\tau$)** | Giữ nguyên. |
| Điện thế nghỉ | `Điện thế nghỉ` | **Điện thế nghỉ (resting membrane potential)** | Giữ nguyên. |
| Điện thế hoạt động | `Điện thế hoạt động` | **Điện thế hoạt động (action potential)** | Giữ nguyên. |
| Phương trình Nernst | `Phương trình Nernst` | **Phương trình Nernst (Nernst equation)** | Giữ nguyên. |
| Phương trình GHK | `Phương trình Goldman-Hodgkin-Katz (GHK)` | **Phương trình Goldman-Hodgkin-Katz (GHK)** | Giữ nguyên. |
| Từ trường | `Từ trường ($B$)` | **Từ trường (magnetic field – $B$)** | Giữ nguyên. |
| Từ thông | `Từ thông ($\Phi$)` | **Từ thông (magnetic flux – $\Phi$)** | Giữ nguyên. |
| Lực Lorentz | `Lực Lorentz` | **Lực Lorentz (Lorentz force)** | Giữ nguyên. |
| Từ trường tổng quát | `Từ trường tổng quát` | **Từ trường tổng quát (magnetomotive force)** | Giữ nguyên. |
| Điện cực từ | `Điện cực từ` | **Điện cực từ (magnetic dipole moment)** | Giữ nguyên. |
| Hạt nano từ tính | `Hạt nano từ tính` | **Hạt nano từ tính (magnetic nanoparticle)** | Giữ nguyên. |
| Siêu thuận từ | `Siêu thuận từ` | **Siêu thuận từ (superparamagnetism)** | Giữ nguyên. |
| Nhiệt trị từ | `Nhiệt trị từ (Magnetic Hyperthermia)` | **Nhiệt trị từ (magnetic hyperthermia)** | Giữ nguyên. |
| Cản quang MRI | `Cản quang MRI` | **Cản quang MRI (MRI contrast)** | Giữ nguyên. |

---

## E. Open Questions for Gate A (Câu hỏi xin ý kiến phê duyệt tại Gate A)

1. **Q1 (Tên chương):** `MANIFEST.md` ghi tên chương 06 là "Chương 6: Điện và Từ trong Y Dược học (Electricity & Magnetism in Medicine & Pharmacy)". Nguồn file không có tên chương bên trong HTML. Bạn đồng ý dùng tên từ MANIFEST làm tiêu đề chương S3?
2. **Q2 (Nguồn rất giàu, 6828 từ, 12 mục):** Nguồn đã rất giàu (19 công thức, 7 ví dụ, 8 callout, 5 bảng, 6 hình). S3 có được phép cấu trúc lại, nhóm các mục tương tự để khớp mục tiêu ~4.000–4.500 từ, hay giữ toàn bộ nội dung nguồn?
3. **Q3 (Bài tập):** Nguồn hoàn toàn không có câu hỏi/bài tập. Bạn đồng ý S3 bổ sung bộ 10 câu hỏi/bài tập (gắn `[ADDED]`), tính trên các ví dụ có sẵn trong nguồn (màng tế bào như tụ điện, điện thế nghỉ, điện thế hoạt động, máy tạo nhịp, MRI)?
4. **Q4 (Hình vẽ):** Nguồn có 5 bảng và 6 hình (màng tế bào, điện thế hoạt động, mạch RC, cảm ứng điện từ, hạt nano từ tính, phổ điện từ). Bạn đồng ý S3 đặt placeholder `[FIGURE]` cho các hình còn thiếu (ví dụ mạch RC, chu kỳ ATP/ADP, cảm ứng điện từ, hạt nano từ tính)?
5. **Q5 (Tài liệu tham khảo):** Nguồn có 0 trích dẫn và `APPROVED_REFERENCE_LIST: none`. Bạn đồng ý S3 để `[VERIFY: reference needed …]` và chờ cung cấp giáo trình chuẩn?

---

## F. Not verified / limitations

- **Phạm vi dữ liệu:** Chỉ dựa trên `00_source_original/ch06_doc-ld-c5.html` (D-06). File nguồn được giữ nguyên trạng tuyệt đối (READ-ONLY).
- **Tài liệu tham khảo:** Không có trích dẫn gốc trong D-06; tất cả công thức, giá trị số sẽ gắn `[VERIFY]` khi viết nếu không có trong nguồn.
- **Nội dung bổ sung ngoài nguồn:** Khung sư phạm, bài tập, hình vẽ, bảng tổng hợp là kiến thức giáo trình chuẩn, chưa có trong D-06; cần người dùng duyệt ở Gate A (Q2, Q3).
- **Kiểm tra cơ haine:** Thống kê文档 bằng script Python (xem mục A); chưa có script `check_coverage.py` chuyên dụng cho audit (sẽ chạy tại S2/S3).
- **Giới hạn giai đoạn:** Dừng ngay tại GATE A theo R9 và mục 7.2; chưa thực hiện viết bản thảo Stage S3.

---
GATE A: STOP. Awaiting user approval of the Content Mapping Matrix. Do not begin the transformation.
