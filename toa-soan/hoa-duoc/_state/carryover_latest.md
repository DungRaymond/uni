# CARRY-OVER — Hóa vô cơ dược – Master Lecture Notes

**Chương vừa hoàn thành:** Chương 04 (Stage S3) · **Cập nhật:** 2026-11-07

## 1. Thuật ngữ đã định nghĩa (kèm T-ID)

### Từ Chương 04 (`ch04_draft.md`)
- **Thuyết Orbital Phân tử (Molecular Orbital Theory – MO)** {T-04.4.1}: Mô hình lượng tử xem phân tử là một tập hợp hạt nhân + electron thống nhất; electron chiếm các MO trải trên toàn phân tử (quan điểm đa tâm), thay vì các cặp electron định xứ của VB.
- **Tổ hợp tuyến tính các orbital nguyên tử (Linear Combination of Atomic Orbitals – LCAO)** {T-04.4.1.2}: $\Psi = c_A\varphi_A + c_B\varphi_B$; tổ hợp đồng pha tạo MO liên kết ($\Psi$), nghịch pha tạo MO phản liên kết ($\Psi^*$).
- **Điều kiện chuẩn hóa** {T-04.4.1.3}: $c_A^2 + c_B^2 = 1$ (bỏ qua xen phủ); đồng hạch $c_A = \pm c_B = 1/\sqrt{2}$; dị hạch $c_A \neq c_B$. Năng lượng $E_\pm = (\alpha \pm \beta)/(1 \pm S)$ `[ADDED]` `[VERIFY: V-04.11]`.
- **Ba điều kiện tổ hợp AO hiệu quả** {T-04.4.2}: (i) năng lượng xấp xỉ ($\Delta E$ khoảng $10$–$14\text{ eV}$); (ii) xen phủ đáng kể ($S_{AB} > 0$); (iii) cùng đối xứng với trục liên kết $Oz$.
- **Tích phân xen phủ ($S_{AB}$)** {T-04.4.2.2}: $S_{AB} = \int \varphi_A\varphi_B\,d\tau$, không thứ nguyên, $0 \le S_{AB} \le 1$.
- **MO liên kết ($\sigma, \pi$), MO phản liên kết ($\sigma^*, \pi^*$), MO không liên kết ($n$)** {T-04.4.3.1}: Phân loại theo kiểu xen phủ và số mặt phẳng nút; $\sigma$ đối xứng xoay quanh trục, $\pi$ có 1 mặt phẳng nút chứa trục.
- **Bậc liên kết theo MO ($BO$)** {T-04.4.3.2}: $BO = (N_b - N_a)/2$; bậc bán nguyên khi electron độc thân chỉ chiếm một trong hai MO suy biến (ví dụ $H_2^+$: 0,5; $O_2^-$: 1,5; $O_2^+$: 2,5). Không áp dụng cho liên kết đa tâm $3c\text{–}2e$.
- **Tính thuận từ (Paramagnetic) / nghịch từ (Diamagnetic)** {T-04.4.3.3}: Tiêu chí duy nhất là **có electron độc thân** (thuận từ) hay toàn bộ ghép đôi (nghịch từ); **không** dùng "BO lẻ" làm tiêu chí.
- **Trộn cấu hình $2s$–$2p$ (s–p mixing)** {T-04.4.4.2}: Với $B_2, C_2, N_2$ ($Z \le 7$), $\Delta E(2p-2s)$ nhỏ làm $\sigma_{2p_z}$ bị đẩy lên trên $\pi_{2p}$; với $O_2, F_2$ thì không.
- **Orbital biên (Frontier orbital), HOMO và LUMO** {T-04.4.5.2}: HOMO là MO bị chiếm có năng lượng cao nhất; LUMO là MO trống có năng lượng thấp nhất; phản ứng/liên kết phối trí được điều khiển bởi tương tác HOMO–LUMO.
- **Liên kết ba tâm – hai electron ($3c\text{–}2e$)** {T-04.4.6}: Hai AO $sp^3$ của B + một AO $1s$ của H cầu tạo 3 MO; 2 electron chiếm MO liên kết trải trên ba tâm, mô tả cầu $\text{B–H–B}$ trong $B_2H_6$.
- **$\sigma$-donor và $\pi$-backbonding** {T-04.4.5.2}: CO cho cặp electron ở HOMO ($\sigma$ trên $C$) vào $d$ trống của kim loại ($\sigma$-donor) và nhận mật độ electron phản hồi vào LUMO $\pi^*$ ($\pi$-backbonding).

### Từ Chương 03 (`ch03_draft.md`)
- **Thuyết Liên kết Hóa trị (Valence Bond Theory – VB)** {T-03.4.1}: Mô hình lượng tử mô tả liên kết cộng hóa trị hình thành do sự xen phủ của hai orbital nguyên tử (AO) kèm sự ghép đôi electron có spin đối song song ($\uparrow\downarrow$).
- **Nguyên lý xen phủ cực đại (Maximum Overlap Principle – Pauling)** {T-03.4.1}: Liên kết hình thành theo hướng mà độ xen phủ giữa các AO đạt cực đại.
- **Liên kết sigma ($\sigma$), liên kết pi ($\pi$), liên kết delta ($\delta$)** {T-03.4.2}: Phân loại theo kiểu xen phủ trục (0 mặt phẳng nút qua $Oz$), xen phủ bên (1 mặt phẳng nút) và xen phủ 4 thùy $d$ (2 mặt phẳng nút); độ bền $\sigma > \pi > \delta$.
- **Sự lai hóa orbital (Orbital Hybridization)** {T-03.4.3}: Sự tổ hợp tuyến tính các AO hóa trị có năng lượng xấp xỉ nhau trên cùng một nguyên tử tạo ra các AO lai hóa đồng nhất; số AO lai hóa bằng $SN = m + n$ (đối với nguyên tố nhóm chính).
- **Phần trăm đặc tính $s$ và đặc tính $p$ ($\%s, \%p$)** {T-03.4.3}: $sp\ (50\%\,s)$, $sp^2\ (33,3\%\,s)$, $sp^3\ (25\%\,s)$ — cơ sở định lượng của Quy tắc Bent.
- **Lai hóa phân lớp $d$ trong phức chất ($dsp^2, sp^3d^2, d^2sp^3$)** {T-03.4.5}: Phức vuông phẳng $dsp^2$ ($d^8$: $[Ni(CN)_4]^{2-}$, Cisplatin $cis\text{-}[Pt(NH_3)_2Cl_2]$), phức bát diện ngoài $sp^3d^2$ (spin cao: $[FeF_6]^{3-}$) và phức bát diện trong $d^2sp^3$ (spin thấp: $[Fe(CN)_6]^{3-}$).
- **Liên kết 3 tâm – 2 electron ($3c\text{–}2e$, liên kết chuối)** {T-03.4.6}: Liên kết cầu hydro $\text{B–H–B}$ trong Diborane ($B_2H_6$, 12 e hóa trị).

### Từ Chương 01 (`ch01_v2.md`)
- **Năng lượng liên kết ($E_{lk}$)** {T-01.4.1}: Năng lượng bẻ gãy 1 mol liên kết ở trạng thái khí ($\text{kJ/mol}$).
- **Độ dài liên kết ($r$)** {T-01.4.1}: Khoảng cách cân bằng giữa hai hạt nhân nguyên tử ($\text{pm, Å}$).
- **Bậc liên kết** {T-01.4.1}: Số cặp electron liên kết được chia sẻ giữa hai nguyên tử.
- **Góc liên kết ($\theta$)** {T-01.4.2}: Góc tạo bởi hai trục liên kết xuất phát từ cùng nguyên tử trung tâm ($^\circ$).
- **Momen lưỡng cực liên kết ($\vec{\mu}_{lk}$)** {T-01.4.2}: $\vec{\mu} = q \cdot \vec{d}$ ($\text{C}\cdot\text{m}$ hoặc Debye).
- **Momen lưỡng cực toàn phân tử ($\vec{\mu}_{pt}$)** {T-01.4.2}: Tổng vector $\sum \vec{\mu}_i$.
- **Thuyết Lewis & Quy tắc Bát tử** {T-01.4.4}: Xu hướng đạt cấu hình bền $ns^2np^6$.
- **Điện tích hình thức ($FC$)** {T-01.4.4}: $FC = V - N - B/2$.
- **Cấu trúc cộng hưởng (Resonance Hybrid)** {T-01.4.5}: Sự giải tỏa electron $\pi$ làm tăng độ bền phân tử.
- **Acid Lewis** {T-01.4.6}: Hợp chất có orbital trống nhận cặp electron (ví dụ $BF_3$).
- **Gốc tự do** {T-01.4.6}: Phân tử có số electron hóa trị lẻ mang tính thuận từ (ví dụ $NO$).
- **Siêu hóa trị (Hypervalency / Bát tử mở rộng)** {T-01.4.6}: Phân tử chứa $>8$ electron hóa trị quanh nguyên tố chu kỳ $\ge 3$ nhờ orbital $d$ trống (ví dụ $PCl_5, SF_6$).

### Từ Chương 02 (`ch02_draft.md`)
- **Thuyết đẩy cặp electron vỏ hóa trị (Valence Shell Electron Pair Repulsion – VSEPR)** {T-02.4.1}: Mô hình Gillespie–Nyholm dự đoán hình học phân tử dựa trên nguyên lý cực tiểu hóa lực đẩy tĩnh điện giữa các miền electron vỏ hóa trị.
- **Miền electron / Vùng liên kết (Electron Domain)** {T-02.4.1}: Mỗi vùng định xứ mật độ electron quanh nguyên tử trung tâm (gồm liên kết đơn, liên kết đôi, liên kết ba hoặc cặp electron tự do; mỗi liên kết bội chỉ tính là 1 vùng liên kết).
- **Cặp electron tự do (Lone Pair – $\text{LP}$)** & **Cặp electron liên kết (Bonding Pair – $\text{BP}$)** {T-02.4.1}: Thứ tự độ lớn lực đẩy tĩnh điện $\text{LP–LP} > \text{LP–BP} > \text{BP–BP}$.
- **Ký hiệu VSEPR ($AX_mE_n$)** {T-02.4.2}: Công thức tổng quát gồm nguyên tử trung tâm $A$, $m$ phối tử liên kết $\sigma$ trực tiếp $X$, và $n$ cặp electron tự do $E$ trên $A$.
- **Số phối trí lập thể (Steric Number – $SN$)** *(hay Số lập thể / Tổng số miền electron)* {T-02.4.2}: $SN = m + n = \frac{V + M - q}{2}$, suy ra $n = SN - m$.
- **Hình học cặp electron (Electron Geometry)** {T-02.4.3}: Hình học đa diện của tất cả $SN = m + n$ miền electron quanh $A$ ($SN=2$ Đường thẳng; $3$ Tam giác phẳng; $4$ Tứ diện đều; $5$ Lưỡng chóp tam giác; $6$ Bát diện đều).
- **Hình học phân tử (Molecular Shape / Molecular Geometry)** {T-02.4.3}: Hình học không gian chỉ xét vị trí tương đối của các hạt nhân nguyên tử ($A$ và $X$), gồm 13 kiểu từ $AX_2$ đến $AX_4E_2$.
- **Vị trí trục (Axial – $\text{ax}$)** & **Vị trí xích đạo (Equatorial – $\text{eq}$)** {T-02.4.4}: Hai nhóm vị trí không tương đương trong khung lưỡng chóp tam giác ($SN = 5$): 3 vị trí xích đạo (góc $120^\circ$, chỉ chịu 2 tương tác đẩy $90^\circ$) và 2 vị trí trục (góc $90^\circ$ với xích đạo, chịu 3 tương tác đẩy $90^\circ$). Cặp $\text{LP}$ luôn ưu tiên chiếm vị trí xích đạo.
- **Quy tắc Bent (Bent's Rule)** {T-02.4.5}: Nguyên tử trung tâm có xu hướng hướng các orbital có đặc tính $p$ nhiều hơn về phía các nhóm thế có độ âm điện lớn hơn (làm góc liên kết hẹp lại khi độ âm điện phối tử tăng).

## 2. Ký hiệu và Quy ước chuẩn hóa
- Độ dài liên kết: $r$, đơn vị SI $\text{pm}$ đi kèm $\text{Å}$ trong ngoặc: $154\text{ pm } (1,54\text{ Å})$.
- Góc liên kết: Ký hiệu chung $\theta$ ($^\circ$) và ký hiệu góc cụ thể $\widehat{X-A-X}$ (dấu phẩy thập phân chuẩn tiếng Việt: $109,5^\circ$, $107,3^\circ$, $104,5^\circ$).
- Momen lưỡng cực: $\vec{\mu}_{lk}$ cho liên kết và $\vec{\mu}_{pt} = \sum \vec{\mu}_i$ cho toàn phân tử; $1\text{ D} = 3,336 \times 10^{-30}\text{ C}\cdot\text{m}$.
- Điện tích hình thức ($FC$) và Số phối trí lập thể ($SN$):
  - $V$: số electron hóa trị của nguyên tử trung tâm tự do.
  - $M$: số phối tử đơn hóa trị ($H, F, Cl, Br, I$ tính $M=1$/nguyên tử; phối tử hai hóa trị $O, S$ tính $M=0$; phối tử ba hóa trị $N$ trong $HCN$ tính $M=-1$).
  - $q$: điện tích đại số của phân tử/ion trong công thức $SN = (V+M-q)/2$ (phân biệt với điện tích phần $q$ tính bằng Coulomb trong $\vec{\mu}_{lk} = q \cdot \vec{d}$).
  - Chỉ số dưới $\text{ax}$ (axial – trục) và $\text{eq}$ (equatorial – xích đạo) cho liên kết trong khung $SN = 5$.
- Ký hiệu MO (Chương 04): $\Psi$ (MO liên kết), $\Psi^*$ (MO phản liên kết), $\varphi_A, \varphi_B$ (AO gốc), $c_A, c_B$ (hệ số tổ hợp, không thứ nguyên), $\alpha$ (tích phân Coulomb), $\beta$ (tích phân cộng hưởng), $S$ hoặc $S_{AB}$ (tích phân xen phủ).
- Ký hiệu MO theo mức: $\sigma_{2s}, \sigma^*_{2s}, \sigma_{2p_z}, \pi_{2p_x}, \pi_{2p_y}, \pi^*_{2p_x}, \pi^*_{2p_y}, \sigma^*_{2p_z}$; chỉ số dưới là AO gốc, dấu $*$ là phản liên kết.
- Bậc liên kết: $BO$ (không thứ nguyên); $N_b$ = tổng electron trên MO liên kết, $N_a$ = tổng electron trên MO phản liên kết.
- Năng lượng liên kết: $E_{lk}$, đơn vị $\text{kJ/mol}$; năng lượng MO: $E$, đơn vị $\text{eV}$ khi so sánh mức.

## 3. Lời hứa liên kết chéo (Cross-references) sang các chương sau
- **Đã hoàn tất ở Chương 4:** 3 câu hỏi mở của Chương 3 — (a) cấu hình MO và tính thuận từ của $O_2$ (`T-04.4.4.3`, `T-04.5.2`); (b) bậc liên kết phân số (`T-04.4.3.2`, `T-04.5.1`); (c) liên kết $3c\text{–}2e$ trong $B_2H_6$ (`T-04.4.6`, `T-04.5.4`).
- **Chương 3 (Thuyết liên kết hóa trị VB & Lai hóa orbital):**
  - Giải thích bản chất cơ học lượng tử của liên kết $\sigma$ và liên kết $\pi$ đã nhắc ở `T-02.4.2`.
  - Liên hệ trực tiếp số phối trí lập thể $SN = 2, 3, 4, 5, 6$ với các kiểu lai hóa tương ứng $sp, sp^2, sp^3, sp^3d, sp^3d^2$ và lai hóa phức chất $dsp^2, d^2sp^3$ (`T-02.4.3`).
  - Làm rõ cơ sở định lượng của khái niệm "đặc tính $s$" và "đặc tính $p$" trong Quy tắc Bent (`T-02.4.5`).
- **Chương 5 (Tương tác liên phân tử & Liên kết Hydro):**
  - Kết nối hình học phân cực ($\mu_{pt} > 0$) và các cặp electron tự do ($\text{LP}$) của $H_2O$ ($AX_2E_2, 104,5^\circ$), $NH_3$ ($AX_3E, 107,3^\circ$) với sự hình thành liên kết hydro và độ tan của dược chất (`T-02.4.6`).
- **Chương 6 & Chương 7 (Hóa học phối trí & Đồng phân phức chất trong Dược học):**
  - Giải thích cấu trúc bát diện đều của $[Fe(CN)_6]^{4-}$ ($d^6$) và cấu trúc vuông phẳng của $[PtCl_4]^{2-}$ ($d^8$) bằng thuyết Trường phối tử và phân biệt số phối trí ($CN$) của phức chất với số phối trí lập thể ($SN$) của VSEPR (`T-02.4.2`, `T-02.4.3`, `T-02.4.6`).

## 4. Bộ đếm tích lũy (Qua Chương 01–04)
- **Figures:**
  - Chương 01: 2 sơ đồ Mermaid (`T-01.5.3` quy trình 4 bước Lewis, `T-01.5.4` sơ đồ phân loại liên kết)
  - Chương 02: 1 sơ đồ Mermaid (`Hình 2.1` tại `T-02.5.4` quy trình 4 bước VSEPR) + 3 khung giữ chỗ `[FIGURE]` (`Hình 2.2, 2.3, 2.4` tại `T-02.5.5`)
  - Chương 03: 1 sơ đồ Mermaid (`Hình 3.1`) + 4 khung giữ chỗ (`Hình 3.2`–`3.5` tại `T-03.5.5`)
  - Chương 04: 1 sơ đồ Mermaid (`Hình 4.1` tại `T-04.5.5`) + 5 khung giữ chỗ (`Hình 4.2`–`4.6` tại `T-04.5.6`)
- **Tables:**
  - Chương 01: 4 bảng (`T-01.4.3`, `T-01.6.1`, v.v.)
  - Chương 02: 2 bảng (`Bảng 2.1` tại `T-02.4.3` – 13 kiểu hình học VSEPR; `Bảng 2.2` tại `T-02.6.2` – tổng hợp công thức và quy tắc)
  - Chương 03: 3 bảng (`Bảng 3.1` tại `T-03.4.2`; `Bảng 3.2` tại `T-03.4.4`; `Bảng 3.3` tại `T-03.6.2`)
  - Chương 04: 4 bảng (`Bảng 4.1` tại `T-04.4.3.1`; `Bảng 4.2` tại `T-04.4.4.4`; `Bảng 4.3` tại `T-04.5.1`; `Bảng 4.4` tại `T-04.6.2`) + 2 bảng phụ A/B trong đáp án `T-04.7.4`
- **Worked Examples:**
  - Chương 01: 2 ví dụ (`Ví dụ 1`: $CO_2$, `Ví dụ 2`: $NO_3^-$ tại `T-01.5.1`)
  - Chương 02: 3 ví dụ (`Example 2.1`: $CH_4, NH_3, H_2O, SF_6$ tại `T-02.5.1`; `Example 2.2`: $PCl_5, SF_4, ClF_3, XeF_2$ tại `T-02.5.2`; `Example 2.3`: $CO_3^{2-}, NO_2^-, SO_4^{2-}, I_3^-$ tại `T-02.5.3`)
  - Chương 03: 3 ví dụ (`Example 3.1`–`3.3` tại `T-03.5.1`–`T-03.5.3`)
  - Chương 04: 4 ví dụ (`Example 4.1`: dãy oxygen; `Example 4.2`: $N_2$/$O_2$; `Example 4.3`: $CO$; `Example 4.4`: $B_2H_6$ tại `T-04.5.1`–`T-04.5.4`)

## 5. Câu hỏi mở chuyển sang Chương 05 (Carry-over mới)
1. **Liên kết hydro và tương tác liên phân tử:** Chương 05 cần nối tiếp hình học phân cực + cặp electron tự do ($H_2O$ $104,5^\circ$; $NH_3$ $107,3^\circ$) đã nêu ở `T-02.4.6`, đồng thời giải thích liên kết hydro bằng bức tranh orbital/điện tích.
2. **Tương tác phối trí – kim loại:** Cơ chế $\sigma$-donor/$\pi$-backbonding của $CO$ (`T-04.4.5.2`) cần được mở rộng thành lý thuyết trường phối tử/trường tinh thể ở chương phức chất.
3. **Giới hạn của mô hình MO:** Bậc liên kết $BO$ không áp dụng cho liên kết đa tâm (`T-04.4.6`); cần nêu rõ khi nào dùng Lewis/VSEPR/VB/MO.
