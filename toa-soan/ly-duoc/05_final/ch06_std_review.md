# Chương 6: Điện và Từ trong Y Dược học (Electricity & Magnetism in Medicine & Pharmacy)

---

## 1. Tổng quan chương (Chapter Overview) 1. Tổng quan chương (Chapter Overview)

### 1.1 Tên chương, giới thiệu khái quát & phạm vi nội dung 1.1 Tên chương, giới thiệu khái quát & phạm vi nội dung

Sau Chương 1–5 (nhiệt động học sinh học, điện sinh học, quang phổ học), Chương 6 chuyển sang **điện và từ trong y dược học** — nghiên cứu các hiện tượng điện từ trong cơ thể sống và ứng dụng trong chẩn đoán, điều trị及 dược phẩm `[SRC: S-06.1–S-06.12]` `[ADDED: bridge from Ch01–05]`.

Chương trình bày hệ nhiệt động (côlap/kín/mở), nguyên lý I & II nhiệt động học, định luật Ohm & Joule - Lenz, mạch RC & mô hình tương đương của màng tế bào, điện sinh học (điện thế nghỉ, điện thế hoạt động, Nernst, GHK, ECG/EEG), tác dụng của dòng điện lên cơ thể và ứng dụng điện trị liệu, an toàn điện (macroshock/microshock), từ trường & lực từ, cảm ứng điện từ, hạt nano từ tính & dẫn thuốc hướng đích, trường điện từ & sóng điện từ & phổ điện từ `[ADDED: scope summary]`.

Tên chương tạm thời: **"Điện và Từ trong Y Dược học (Electricity & Magnetism in Medicine & Pharmacy)"** (theo `MANIFEST.md`) `[VERIFY: chapter title (V-06.01)]`.

### 1.2 Phạm vi, Kiến thức Tiên quyết & Thời lượng Học tập 1.2 Phạm vi, Kiến thức Tiên quyết & Thời lượng Học tập

- **Kiến thức tiên kỳ:**
  1. Điện tích, điện cực, coulomb từ vật lý đại cương.
  2. Hệ nhiệt động (côlap/kín/mở), nguyên lý I & II nhiệt động học từ Chuyên đề 1 & Chương 4 ly-duoc.
  3. Màng tế bào, ion ($Na^+, K^+, Ca^{2+}, Cl^-$) từ hóa phổ thông & Chuyên đề 1 ly-duoc `[ADDED: cross-reference to Ch01–05 & general physics]`.
- **Thời lượng dự kiến:** ~**3 giờ 30 phút** (khoảng 2 giờ 50 phút cho ~4.000 từ lý thuyết + ví dụ tại Mục 1–10, tương đương 4.000 / 1.500 ≈ 2,67 giờ; cộng 40 phút cho 10 bài tập ≈ 3 giờ 30 phút), theo `STUDY_TIME_RULE` `[ADDED: study time estimate]`.

---

## 2. Mục tiêu học tập (Learning Objectives) 2. Mục tiêu học tập (Learning Objectives)

### 2.1 Chuẩn đầu ra Kiến thức, Kỹ năng, Vận dụng và Đánh giá mô hình (LO-1..LO-4) 2.1 Chuẩn đầu ra Kiến thức, Kỹ năng, Vận dụng và Đánh giá mô hình (LO-1..LO-4)

Sau chương này, sinh viên có thể `[ADDED: learning objectives]`:

- **`LO-1` (Kiến thức):** Phát biểu hệ nhiệt động (côlap/kín/mở), trạng thái dừng, nguyên lý I & II nhiệt động học, định luật Ohm & Joule - Lenz, mạch RC, điện sinh học (điện thế nghỉ, điện thế hoạt động, Nernst, GHK), từ trường & lực từ, cảm ứng điện từ, hạt nano từ tính, trường điện từ & sóng điện từ.
- **`LO-2` (Kỹ năng):** Tính toán được điện thế màng, điện thế hoạt động (Nernst, GHK), dòng điện, công suất, mạch RC, cảm ứng điện từ (điện thế cảm ứng, động lực từ); áp dụng định luật Ohm & Joule - Lenz vào mạch RC của màng tế bào.
- **`LO-3` (Vận dụng):** Giải thích điện sinh học (điện thế nghỉ, điện thế hoạt động, ECG/EEG/EMG), điện trị liệu (đốt điện, cầm máu, TENS), an toàn điện (macroshock/microshock), từ trường (MRI, từ phân liều), cảm ứng điện từ (đo lưu lượng máu, máy biến áp cách liền), hạt nano từ tính (dẫn thuốc hướng đích, nhiệt trị từ, cản quang MRI).
- **`LO-4` (Đánh giá mô hình):** Đánh giá vai trò của điện từ sinh học trong chẩn đoán (ECG/EEG/EMG, MRI) và điều trị (điện trị liệu, cấy ghép thiết bị cấy ghép như máy tạo nhịp), liên hệ từ trường với an toàn bệnh nhân trong phòng MRI `[ADDED: LO-4 definition]`.

---

## 3. Đặt vấn đề & Ý nghĩa thực tiễn (Introduction) 3. Đặt vấn đề & Ý nghĩa thực tế (Introduction)

### 3.1 Từ điện trường đến điện sinh học & ứng dụng trong y dược 3.1 Từ điện trường đến điện sinh học & ứng dụng trong y dược

Màng tế bào không chỉ là chất cách điện mà còn là một **tụ điện sinh học**: lớp lipid kép (khoảng 7–10 nm) đóng vai trò chất điện môi, hai phía là dịch nội bào và dịch ngoại bào dẫn điện. Màng tế bào có điện dung riêng khoảng $C_m \approx 1\ \mu\text{F/cm}^2$. Với điện thế nghỉ $U \approx -70\ \text{mV}$, cường độ điện trường trong màng đạt:

$$E_{màng} = \frac{|U|}{d} = \frac{0,07\ \text{V}}{7,5 \times 10^{-9}\ \text{m}} \approx 9,3 \times 10^6\ \text{V/m}$$ `[SRC: S-06.1]` `[ADDED: example]`

Cường độ điện trường cỡ $10^7\ \text{V/m}$ — rất lớn so với quy mô phòng thí nghiệm — nên chỉ cần thay đổi nhỏ điện thế màng cũng đủ mở kênh ion. Điện dung màng quyết định "quán tính điện" của tế bào: màng càng lớn điện dung thì điện thế càng chậm thay đổi, từ đó ảnh hưởng tốc độ đáp ứng và dẫn truyền xung. Nguyên lý tụ điện cũng chính là cơ sở của máy sốc điện tim và các bộ lọc trong thiết bị y tế `[SRC: S-06.1]` `[ADDED: interpretation]`.

Điện sinh học là lĩnh vực nghiên cứu sự phát sinh, dẫn truyền và ghi nhận các hiện tượng điện diễn ra trong tế bào, mô và cơ quan sống. Khác với điện trong dây dẫn kim loại (do electron), dòng điện sinh học là dòng **ion** ($Na^+, K^+, Ca^{2+}, Cl^-$) chuyển dịch qua màng tế bào `[SRC: S-06.4]` `[ADDED: definition]`.

---

## 4. Nội dung bài giảng chính (Main Content) 4. Nội dung bài giảng chính (Main Content)

### 4.1 Hệ Nhiệt động & Trạng thái Dừng 4.1 Hệ Nhiệt động & Trạng thái Dừng

**Hệ nhiệt động** phân loại dựa trên khả năng trao đổi với môi trường `[SRC: S-06.1]`:

- **Hệ cô lập (Isolated system):** Không trao đổi vật chất và năng lượng với môi trường ngoài.
- **Hệ kín (Closed system):** Chỉ trao đổi năng lượng, không trao đổi vật chất.
- **Hệ mở (Open system):** Trao đổi cả vật chất và năng lượng với môi trường ngoài $\rightarrow$ **Cơ thể sinh vật là một hệ nhiệt động mở** `[SRC: S-06.1]` `[ADDED: definition]`.

**Trạng thái dừng (Steady State):** Hệ mở ở trạng thái có các thông số trạng thái không đổi theo thời gian nhưng dòng vật chất và năng lượng liên tục lưu chuyển qua hệ. Sinh vật duy trì sự sống ở trạng thái dừng chứ không phải trạng thái cân bằng nhiệt động (cân bằng nhiệt động đồng nghĩa với trạng thái chết) `[SRC: S-06.1]` `[ADDED: definition]`.

**Ý nghĩa:** Phân biệt trạng thái dừng với cân bằng giúp hiểu cơ thể cần liên tục trao đổi vật chất/năng lượng để duy trì chức năng; cũng giúp phân tích phản ứng sinh học ở điều kiện ổn định `[SRC: S-06.1]` `[ADDED: interpretation]`.

---

### 4.2 Nguyên lý I Nhiệt động học & Năng lượng Hóa học trong Cơ thể Sống 4.2 Nguyên lý I Nhiệt động học & Năng lượng Hóa học trong Cơ thể Sống

**Nguyên lý I (bảo toàn năng lượng):** năng lượng không tự sinh ra hay mất đi, chỉ chuyển hóa. Với hệ kín:

$$Q = \Delta U + A$$ `[SRC: S-06.2]` `[ADDED: equation with variable list]`

trong đó $Q$: nhiệt hệ hấp thụ; $\Delta U$: biến thiên năng lượng nội tại; $A$: công hệ sinh ra `[SRC: S-06.2]` `[ADDED: variable list]`.

Đối với hệ sống, phương trình được viết dưới dạng:

$$\Delta E_{hóa\ học} = Q_{tỏa} + A_{sinh}$$ `[SRC: S-06.2]` `[ADDED: equation with variable list]`

**Các thành phần năng lượng** `[SRC: S-06.2]`:
- **Nhiệt lượng tỏa ra ($Q_{tỏa}$):** Nhiệt sơ cấp (sinh ra do tính bất thuận nghịch của các phản ứng hóa sinh nội bào, duy trì thân nhiệt ổn định) & Nhiệt thứ cấp (sinh ra do ma sát cơ học: tim đập, mạch máu, trương lực cơ, ma sát hô hấp).
- **Các dạng công ($A$):** Công hóa học ($A_{hh}$: tổng hợp các đại phân tử sinh học như protein, acid nucleic, glycogen); Công cơ học ($A_{ch}$: co cơ, nhu động ruột, hô hấp, tuần hoàn tim); Công thẩm thấu ($A_{tt}$: vận chuyển các chất ngược gradient nồng độ qua màng tế bào); Công điện ($A_{đ}$: tạo và duy trì điện thế màng, truyền xung động thần kinh) `[SRC: S-06.2]` `[ADDED: variable list & examples]`.

**Định luật Hess & Phương pháp đo nhiệt:** Nhiệt lượng của phản ứng chỉ phụ thuộc trạng thái đầu và cuối, không phụ thuộc đường đi. Ứng dụng: Xác định mức tiêu hao năng lượng và chuyển hóa cơ sở ($BMR$) của cơ thể `[SRC: S-06.2]` `[ADDED: definition]`.

**Ý nghĩa:** Nguyên lý I giúp cân đối năng lượng thức ăn chuyển thành nhiệt và công hóa học, cơ học, thẩm thấu hoặc điện. Đo sinh nhiệt và tiêu hao năng lượng là cơ sở nghiên cứu chuyển hóa cơ sở, dinh dưỡng và hoạt động cơ thể `[SRC: S-06.2]` `[ADDED: interpretation]`.

---

### 4.3 Nguyên lý II Nhiệt động học & Phương trình Prigogine 4.3 Nguyên lý II Nhiệt động học & Phương trình Prigogine

**Entropy ($S$)** là đại lượng đo mức độ hỗn loạn của hệ. Trong một hệ mở như cơ thể sống, sự biến thiên entropy tuân theo phương trình Prigogine:

$$dS = d_iS + d_eS$$ `[SRC: S-06.3]` `[ADDED: equation with variable list]`

trong đó:
- $d_iS > 0$: Lượng entropy luôn tăng sinh ra do các quá trình bất thuận nghịch nội tại (trao đổi chất, ma sát, phân hủy) `[SRC: S-06.3]`.
- $d_eS$: Lượng entropy trao đổi với môi trường ngoài qua hấp thu thức ăn, oxy và đào thải nhiệt, phân, nước tiểu, $CO_2$ `[SRC: S-06.3]` `[ADDED: definition]`.

**Điều kiện duy trì sự sống (Trạng thái dừng):** Cơ thể phải liên tục thải entropy dư thừa ra môi trường ngoài sao cho $d_eS < 0$ và $|d_eS| = d_iS \implies dS = 0$. E. Schrödinger đã phát biểu: "Sinh vật sống nhờ liên tục hút entropy âm từ môi trường" `[SRC: S-06.3]` `[ADDED: definition]`.

**Ý nghĩa:** Nguyên lý II nhấn mạnh chuyển đổi năng lượng thực tế có thất thoát và cơ thể phải trao đổi với môi trường để duy trì tổ chức. Đây là khung hiểu hiệu suất chuyển hóa, sinh nhiệt và tính bất thuận nghịch của quá trình sinh học `[SRC: S-06.3]` `[ADDED: interpretation]`.

---

### 4.4 Năng lượng Tự do Gibbs & Chiều Phản ứng Sinh hóa 4.4 Năng lượng Tự do Gibbs & Chiều Phản ứng Sinh hóa

**Năng lượng tự do Gibbs:**

$$\Delta G = \Delta H - T \cdot \Delta S$$ `[SRC: S-06.4]` `[ADDED: equation with variable list]`

trong đó $\Delta H$: enthalpy thay đổi; $T$: nhiệt độ tuyệt đối (K); $\Delta S$: entropy thay đổi `[SRC: S-06.4]` `[ADDED: variable list]`.

**Chiều phản ứng** `[SRC: S-06.4]`:
- $\Delta G < 0$: Quá trình tỏa năng lượng tự do (exergonic), xảy ra tự phát.
- $\Delta G > 0$: Quá trình thu năng lượng tự do (endergonic), không thể tự phát nếu đứng độc lập.
- $\Delta G = 0$: Hệ đạt trạng thái cân bằng hóa học `[SRC: S-06.4]` `[ADDED: definition]`.

**Cơ chế liên hợp năng lượng (Energy Coupling):** Tế bào thực hiện các phản ứng đồng hóa ($\Delta G > 0$) bằng cách liên hợp (ghép đôi) với sự thủy phân các hợp chất giàu năng lượng như **ATP** ($\Delta G^{\circ\prime} \approx -30,5\text{ kJ/mol}$):

$$A + B \rightarrow C \ (\Delta G_1 > 0) \quad \text{ghép với} \quad \text{ATP} \rightarrow \text{ADP} + P_i \ (\Delta G_2 < 0)$$ `[SRC: S-06.4]` `[ADDED: equation with example]`

Sao cho tổng $\Delta G_{tổng} = \Delta G_1 + \Delta G_2 < 0 \rightarrow$ phản ứng diễn ra thuận lợi `[SRC: S-06.4]` `[ADDED: condition]`.

**Ý nghĩa:** Dấu của $\Delta G$ cho biết phản ứng thuận lợi hay cần ghép cặp năng lượng trong điều kiện xác định. Ghép với thủy phân ATP giải thích cách tế bào thúc đẩy tổng hợp chất và vận chuyển chủ động; enzyme đổi tốc độ, không đổi vị trí cân bằng `[SRC: S-06.4]` `[ADDED: interpretation]`.

---

## 5. Ví dụ minh họa & Quy trình thực hành (Examples & Illustrations) 5. Ví dụ minh họa & Quy trình thực hành (Examples & Illustrations)

### 5.1 Ví dụ 1: Màng tế bào như một tụ điện 5.1 Ví dụ 1: Màng tế bào như một tụ điện

> **Example 1.** Một màng tế bào có diện tích $S = 1\times 10^{-5}\text{ m}^2$, khoảng cách hai lớp lipid $d = 7,5\text{ nm} = 7,5 \times 10^{-9}\text{ m}$, điện dung riêng $C_m \approx 1\ \mu\text{F/cm}^2 = 0,01\text{ F/m}^2$, điện thế nghỉ $U = -70\ \text{mV} = -0,07\ \text{V}$. Tính điện dung màng $C$, điện tích $Q$ & cường độ điện trường trong màng $E$ `[SRC: S-06.1]`.
>
> - **Given (Dữ kiện đã cho):** $S = 1\times 10^{-5}\text{ m}^2$; $d = 7,5 \times 10^{-9}\text{ m}$; $C_m = 1\ \mu\text{F/cm}^2 = 0,01\text{ F/m}^2$; $U = -70\ \text{mV} = -0,07\ \text{V}$; $\varepsilon_0 \approx 8,85 \times 10^{-12}\ \text{F/m}$; $\varepsilon_r \approx 2$ (màng lipid) `[SRC: S-06.1]`.
> - **Find (Yêu cầu):** Tính điện dung $C$, điện tích tích lũy $Q$ & cường độ điện trường trong màng $E$ `[SRC: S-06.1]`.
> - **Approach (Phương pháp giải):** Áp dụng công thức điện dung tụ điện phẳng $C = \varepsilon \varepsilon_0 S/d$; điện tích $Q = CU$; cường độ điện trường $E = U/d$ `[SRC: S-06.1]`.
> - **Solution (Giải):**
>   1. Điện dung: $C = C_m \cdot S = 0,01 \times 1\times 10^{-5} = 1\times 10^{-7}\text{ F} = 0,1\ \mu\text{F}$.
>   2. Điện tích: $Q = C \cdot U = 1\times 10^{-7} \times 0,07 = 7 \times 10^{-9}\text{ C} = 7\ \text{nC}$.
>   3. Cường độ điện trường: $E = U/d = 0,07 / (7,5 \times 10^{-9}) \approx 9,33 \times 10^6\ \text{V/m} \approx 9,3 \times 10^6\ \text{V/m}$.
>   4. **Kết luận:** Màng tế bào có điện dung khoảng $0,1\ \mu\text{F}$, điện tích khoảng $7\ \text{nC}$ & cường độ điện trường khoảng $9,3 \times 10^6\ \text{V/m}$ — rất lớn so với quy mô phòng thí nghiệm, nên chỉ cần thay đổi nhỏ điện thế màng cũng đủ mở kênh ion `[SRC: S-06.1]` `[ADDED: interpretation]`.

### 5.2 Ví dụ 2: Định luật Ohm & Công suất điện 5.2 Ví dụ 2: Định luật Ohm & Công suất điện

> **Example 2.** Một đoạn dây dẫn dẫn điện có điện trở $R = 10\ \Omega$, dòng điện qua dây $I = 2\text{ A}$ trong thời gian $t = 10\text{ s}$. Tính công suất điện $P$ & nhiệt lượng $Q$ tỏa ra trong 10 giây `[SRC: S-06.2]`.
>
> - **Given (Dữ kiện đã cho):** $R = 10\ \Omega$; $I = 2\text{ A}$; $t = 10\text{ s}$ `[SRC: S-06.2]`.
> - **Find (Yêu cầu):** Tính công suất điện $P$ & nhiệt lượng $Q$ tỏa ra trong 10 giây `[SRC: S-06.2]`.
> - **Approach (Phương pháp giải):** Áp dụng công thức công suất $P = I^2R$ & nhiệt lượng $Q = I^2Rt$ `[SRC: S-06.2]`.
> - **Solution (Giải):**
>   1. Công suất: $P = I^2R = 2^2 \times 10 = 4 \times 10 = 40\text{ W}$.
>   2. Nhiệt lượng: $Q = I^2Rt = 40 \times 10 = 400\text{ J}$.
>   3. **Kết luận:** Công suất điện là $40\text{ W}$ & nhiệt lượng tỏa ra trong 10 giây là $400\text{ J}$ `[SRC: S-06.2]` `[ADDED: calculation]`.
> - **Check (Kiểm tra):** $P = UI$; nếu biết $U = IR = 2 \times 10 = 20\text{ V}$ thì $P = 20 \times 2 = 40\text{ W}$ — khớp `[SRC: S-06.2]` `[ADDED: cross-check]`.
> - **Interpretation (Nhận xét):** Công suất điện $I^2R$ là nền tảng của các thiết bị đốt điện cầm máu, RF ablation & cũng là nguy cơ bỏng nhiệt cần kiểm soát `[SRC: S-06.2]` `[ADDED: clinical relevance]`.

### 5.3 Ví dụ 3: Mạch RC & Mô hình tương đương của màng tế bào 5.3 Ví dụ 3: Mạch RC & Mô hình tương đương của màng tế bào

> **Example 3.** Một màng tế bào mô hình là một tụ điện $C_m = 1\ \mu\text{F/cm}^2$ mắc song song với một điện trở $R_m = 10^3\ \Omega\cdot\text{cm}^2$. Hằng số thời gian màng $\tau = R_m C_m$ là bao nhiêu? Nếu ápplied một bước điện thế $U_0 = 100\text{ mV}$, điện thế trên màng sau $t = 1\text{ ms}$ là bao nhiêu? `[SRC: S-06.3]`.
>
> - **Given (Dữ kiện đã cho):** $C_m = 1\ \mu\text{F/cm}^2 = 10^{-6}\text{ F/cm}^2$; $R_m = 10^3\ \Omega\cdot\text{cm}^2$; $U_0 = 100\text{ mV} = 0,1\text{ V}$; $t = 1\text{ ms} = 10^{-3}\text{ s}$ `[SRC: S-06.3]`.
> - **Find (Yêu cầu):** Tính hằng số thời gian màng $\tau$ & điện thế trên màng sau $1\text{ ms}$ `$U_C(1\text{ ms})$` khi nạp `[SRC: S-06.3]`.
> - **Approach (Phương pháp giải):** Áp dụng công thức $\tau = R_m C_m$ & công hiệu điện thế trên tụ điện khi nạp $U_C(t) = U_0(1 - e^{-t/\tau})$ `[SRC: S-06.3]`.
> - **Solution (Giải):**
>   1. Hằng số thời gian: $\tau = R_m C_m = 10^3 \times 10^{-6} = 10^{-3}\text{ s} = 1\text{ ms}$.
>   2. Điện thế sau $1\text{ ms}$: $U_C(1\text{ ms}) = U_0(1 - e^{-t/\tau}) = 0,1 \times (1 - e^{-1}) = 0,1 \times (1 - 0,368) = 0,1 \times 0,632 = 0,0632\text{ V} = 63,2\text{ mV}$.
>   3. **Kết luận:** Hằng số thời gian màng $\tau = 1\text{ ms}$; điện thế trên màng sau $1\text{ ms}$ là khoảng $63,2\text{ mV}$ (khoảng $63\%$ của giá trị cuối cùng) `[SRC: S-06.3]` `[ADDED: interpretation]`.
> - **Check (Kiểm tra):** Sau một hằng số thời gian $\tau$, điện thế trên một tụ điện khi nạp đạt khoảng $63\%$ của giá trị cuối cùng — khớp với tính chất chargning của mạch RC `[SRC: S-06.3]` `[ADDED: cross-check]`.
> - **Interpretation (Nhận xét):** Hằng số thời gian màng $\tau$ quyết định tốc độ thay đổi điện thế màng; $\tau$ lớn hơn $\rightarrow$ màng chậm phản ứng hơn với các kích thích điện \([SRC: S-06.3]\) `[ADDED: physiological interpretation]`.

### 5.4 Ví dụ 4: Điện Sinh Học (Bơm Na⁺/K⁺, Điện Thế Nghỉ, Điện Thế Hoạt Động) 5.4 Ví dụ 4: Điện Sinh Học (Bơm Na⁺/K⁺, Điện Thế Nghỉ, Điện Thế Hoạt Động)

> **Example 4.** Tính toán điện thế nghỉ của tế bào (&hellip;) `[SRC: S-06.4]`.
>
> - **Given (Dữ kiện đã cho):** $[K^+]_o = 4\ \text{mM}$, $[K^+]_i = 140\ \text{mM}$, $z = +1$, $T = 37^\circ\text{C} = 310\text{ K}$ `[SRC: S-06.4]`.
> - **Find (Yêu cầu):** Tính điện thế nghỉ của kali $E_K$ bằng phương trình Nernst `[SRC: S-06.4]`.
> - **Approach (Phương pháp giải):** Áp dụng phương trình Nernst $E_{ion} = \frac{RT}{zF}\ln\frac{[ion]_o}{[ion]_i} \approx \frac{61,5}{z}\log_{10}\frac{[ion]_o}{[ion]_i}$ ở $37^\circ\text{C}$ `[SRC: S-06.4]`.
> - **Solution (Giải):**
>   1. Tỉ số: $[K^+]_o/[K^+]_i = 4/140 = 0,0286$.
>   2. Logarit: $\log_{10}(0,0286) \approx -1,54$.
>   3. Tính: $E_K = 61,5 \times (-1,54) \approx -94,7\text{ mV} \approx -95\text{ mV}$.
>   4. **Kết luận:** Điện thế nghỉ của kali khoảng $-95\text{ mV}$ (xấp xỉ $-90\text{ mV}$ đo được trong tế bào thực tế) `[SRC: S-06.4]` `[ADDED: interpretation]`.
> - **Check (Kiểm tra):** Giá trị $-95\text{ mV}$ trong khoảng điện thế nghỉ típipcal ($-70$ đến $-90\text{ mV}$) $[SRC: S-06.4]$ `[ADDED: cross-check]`.
> - **Interpretation (Nhận xét):** Điện thế nghỉ của kali gần $-90\text{ mV}$ giải thích tại sao điện thế nghỉ của tế bào thường nằm trong khoảng $-70$ đến $-90\text{ mV}$ — do màng bị thấm chọn lọc cho $K^+$ nhiều hơn so với $Na^+$ $[SRC: S-06.4]$ `[ADDED: physiological interpretation]`.

### 5.5 Ví dụ 5: Điện Trị Liệu (Máy Tạo Nhịp, Khử Rung, TENS) 5.5 Ví dụ 5: Điện Trị Liệu (Máy Tạo Nhịp, Khử Rung, TENS)

> **Example 4.** Một máy tạo nhịp tim gửi xung điện với cường độ $I = 5\ \text{mA}$ qua điện cực cấy ghép có điện trở $R = 500\ \Omega$ trong thời gian $t = 0,5\text{ ms}$. Tính công suất điện $P$ & năng lượng $W$ của một xung `[SRC: S-06.5]`.
>
> - **Given (Dữ kiện đã cho):** $I = 5\ \text{mA} = 0,005\text{ A}$; $R = 500\ \Omega$; $t = 0,5\text{ ms} = 0,5 \times 10^{-3}\text{ s}$ `[SRC: S-06.5]`.
> - **Find (Yêu cầu):** Tính công suất điện $P$ & năng lượng $W$ của một xung `[SRC: S-06.5]`.
> - **Approach (Phương pháp giải):** Áp dụng công thức công suất $P = I^2R$ & năng lượng $W = Pt = I^2Rt$ `[SRC: S-06.5]`.
> - **Solution (Giải):**
>   1. Công suất: $P = I^2R = (0,005)^2 \times 500 = 25 \times 10^{-6} \times 500 = 0,0125\text{ W} = 12,5\ \text{mW}$.
>   2. Năng lượng: $W = P \cdot t = 0,0125 \times 0,5 \times 10^{-3} = 6,25 \times 10^{-6}\text{ J} = 6,25\ \mu\text{J}$.
>   3. **Kết luận:** Một xung kích thích tim có công suất khoảng $12,5\ \text{mW}$ & năng lượng khoảng $6,25\ \mu\text{J}$ `[SRC: S-06.5]` `[ADDED: calculation]`.
> - **Check (Kiểm tra):** $P = UI$; nếu biết $U = IR = 0,005 \times 500 = 2,5\text{ V}$ thì $P = 2,5 \times 0,005 = 0,0125\text{ W}$ — khớp $[SRC: S-06.5]$ `[ADDED: cross-check]`.
> - **Interpretation (Nhận xét):** Công suất điện $I^2R$ là nền tảng của các thiết bị đốt điện cầm máu, RF ablation & cũng là nguy cơ bỏng nhiệt cần kiểm soát `[SRC: S-06.5]` `[ADDED: clinical relevance]`.

### 5.6 Ví dụ 6: An toàn Điện (Macroshock & Microshock) 5.6 Ví dụ 6: An toàn Điện (Macroshock & Microshock)

> **Example 4.** Một bệnh nhân có catheter tim (catheter tim) và dây dẫn của máy tạo nhịp đi qua tim. Một dòng rò từ thiết bị điện y tế qua dây dẫn có cường độ $I = 50\ \mu\text{A}$. Tính điện thế màng tim $U_m = I \cdot R_t$ với điện trở tim $R_t \approx 100\ \Omega$ & đánh giá nguy cơ rung thất `[SRC: S-06.6]`.
>
> - **Given (Dữ kiện đã cho):** $I = 50\ \mu\text{A} = 50 \times 10^{-6}\text{ A}$; $R_t = 100\ \Omega$ `[SRC: S-06.6]`.
> - **Find (Yêu cầu):** Tính điện thế màng tim $U_m = I \cdot R_t$ & đánh giá nguy cơ rung thất $[SRC: S-06.6]$.
> - **Approach (Phương pháp giải):** Áp dụng định luật Ohm $U = IR$ `[SRC: S-06.6]`.
> - **Solution (Giải):**
>   1. $U_m = I \cdot R_t = 50 \times 10^{-6} \times 100 = 5000 \times 10^{-6}\text{ V} = 5 \times 10^{-3}\text{ V} = 5\ \text{mV}$.
>   2. **Kết luận:** Điện thế màng tim $U_m = 5\ \text{mV}$ — dưới ngưỡng rung thất (thường khoảng $10\text{ mV}$ trở lên qua catheter tim) nên an toàn, nhưng gần ngưỡng nguy hiểm nếu dòng điện tăng `[SRC: S-06.6]` `[ADDED: interpretation]`.
> - **Check (Kiểm tra):** $50\ \mu\text{A}$ qua catheter tim nằm trong khoảng nguy hiểm rung thất ($50 - 100\ \mu\text{A}$) nên cần thiết bị loại CF (dòng rò $< 10\ \mu\text{A}$) cho bệnh nhân có catheter tim $[SRC: S-06.6]$ `[ADDED: cross-check]`.
> - **Interpretation (Nhận xét):** Một dòng rò "vô hại" với người khoẻ mạnh qua da có thể gây rung thất ở bệnh nhân có catheter tim — đây là cơ sở phân biệt macroshock & microshock `[SRC: S-06.6]` `[ADDED: clinical relevance]`.

### 5.7 Ví dụ 7: Hạt Nano Từ Tính & Dẫn Thuốc Hướng Đích 5.7 Ví dụ 7: Hạt Nano Từ Tính & Dẫn Thuốc Hướng Đích

> **Example 4.** Một hạt nano từ tính (SPION) có moment từ $m = 1\times 10^{-17}\text{ A}\cdot\text{m}^2$ đặt trong từ trường gradient $\nabla B = 100\ \text{T/m}$. Tính lực từ tác dụng lên hạt nano $[SRC: S-06.9]$.
>
> - **Given (Dữ kiện đã cho):** $m = 1\times 10^{-17}\text{ A}\cdot\text{m}^2$; $\nabla B = 100\text{ T/m}$ `[SRC: S-06.9]`.
> - **Find (Yêu cầu):** Tính lực từ tác dụng lên hạt nano $F = (\vec{m}\cdot\nabla)\vec{B}$ `[SRC: S-06.9]`.
> - **Approach (Phương pháp giải):** Áp dụng công thức lực từ tác dụng lên瞬間 tử từ trong từ trường gradient $F = (\vec{m}\cdot\nabla)\vec{B}$ $[SRC: S-06.9]$.
> - **Solution (Giải):**
>   1. $F = (\vec{m}\cdot\nabla)\vec{B} \approx m \cdot \nabla B = 1\times 10^{-17} \times 100 = 1\times 10^{-15}\text{ N}$.
>   2. **Kết luận:** Lực từ tác dụng lên mỗi hạt nano khoảng $1\times 10^{-15}\text{ N}$ — rất nhỏ, cần gradient từ trường rất lớn để di chuyển hạt nano trong cơ thể $[SRC: S-06.9]$ `[ADDED: calculation]`.
> - **Check (Kiểm tra):** Kích thước lực $10^{-15}\text{ N}$ ở cấp độ pN (piconewton), phù hợp với các lực sinh học ở cấp độ phân tử $[SRC: S-06.9]$ `[ADDED: cross-check]`.
> - **Interpretation (Nhận xét):** Để dẫn thuốc hướng đích hiệu quả, cần gradient từ trường rất lớn (hàng chục đến hàng trăm T/m) chứ không chỉ từ trường mạnh $[SRC: S-06.9]$ `[ADDED: clinical relevance]`.

### 5.8 Ví dụ 8: Phổ Điện Từ & Ứng dụng Y Dược 5.8 Ví dụ 8: Phổ Điện Từ & Ứng dụng Y Dược

> **Example 4.** Một phân tử hấp thụ quang có bước sóng hấp thụ $\lambda = 500\text{ nm}$ (ánh sáng xanh lá cây). Tính năng lượng photon $E = hf = hc/\lambda$ của bước sóng này $[SRC: S-06.10]$.
>
> - **Given (Dữ kiện đã cho):** $\lambda = 500\text{ nm} = 500 \times 10^{-9}\text{ m}$; $c \approx 3 \times 10^8\text{ m/s}$; $h = 6,626 \times 10^{-34}\ \text{J}\cdot\text{s}$ `[SRC: S-06.10]`.
> - **Find (Yêu cầu):** Tính năng lượng photon $E = hf = hc/\lambda$ của bước sóng này `[SRC: S-06.10]`.
> - **Approach (Phương pháp giải):** Áp dụng công thức năng lượng photon $E = hf = hc/\lambda$ $[SRC: S-06.10]$.
> - **Solution (Giải):**
>   1. Tần số: $f = c/\lambda = 3 \times 10^8 / (500 \times 10^{-9}) = 6 \times 10^{14}\text{ Hz}$.
>   2. Năng lượng photon: $E = hf = 6,626 \times 10^{-34} \times 6 \times 10^{14} \approx 3,98 \times 10^{-19}\text{ J}$.
>   3. **Kết luận:** Năng lượng photon ánh sáng xanh lá cây ($\lambda = 500\text{ nm}$) khoảng $3,98 \times 10^{-19}\text{ J}$ $[SRC: S-06.10]$ `[ADDED: calculation]`.
> - **Check (Kiểm tra):** Năng lượng photon ánh sáng可见 light thường trong khoảng $10^{-19}$ J, phù hợp với các quá trình quang hợp quang hợp & quang sinh $[SRC: S-06.10]$ `[ADDED: cross-check]`.
> - **Interpretation (Nhận xét):** Năng lượng photon của ánh sáng可见 light thường trong khoảng $10^{-19}$ J, đủ để kích thích các quá trình quang hóa trong dược phẩm & hệ sinh học $[SRC: S-06.10]$ `[ADDED: physiological interpretation]`.

---

## 6. Tóm tắt chương (Chapter Summary) 6. Tóm tắt chương (Chapter Summary)

### 6.1 Tóm tắt Nội dung Trọng tâm & Quy tắc Ghi nhớ 6.1 Tóm tắt Nội dung Trọng tâm & Quy tắc Ghi nhớ

Các luận điểm chính của chương 6 `[SRC: S-06.1–S-06.12]`:

1. **Hệ nhiệt động:** Hệ côlap/kín/mở; hệ sống là hệ mở ở trạng thái dừng (không phải cân bằng nhiệt động) `[SRC: S-06.1]`.
2. **Nguyên lý I:** $\Delta U = Q - A$; $\Delta E_{hóa\ học} = Q_{tỏa} + A_{sinh}$; năng lượng nội tại, enthalpy, công & nhiệt `[SRC: S-06.2]`.
3. **Nguyên lý II & Prigogine:** $dS = d_iS + d_eS$; $d_iS > 0$ (tự sinh nội tại), $d_eS$ (trao đổi với môi trường); điều kiện trạng thái dừng $|d_eS| = d_iS \implies dS = 0$ `[SRC: S-06.3]`.
4. **Năng lượng tự do Gibbs:** $\Delta G = \Delta H - T \cdot \Delta S$; $\Delta G < 0$ tự phát, $\Delta G > 0$ cần cung cấp năng lượng, $\Delta G = 0$ cân bằng `[SRC: S-06.4]`.
5. **Liên hợp năng lượng ATP:** Phản ứng đồng hóa ($\Delta G > 0$) được thúc đẩy bằng sự thủy phân ATP ($\Delta G^{\circ\prime} \approx -30,5\text{ kJ/mol}$) `[SRC: S-06.4]`.
6. **Điện thế nghỉ & hoạt động:** Màng tế bào như tụ điện; điện thế nghỉ khoảng $-70$ đến $-90\text{ mV}$; điện thế hoạt động qua khử cực ($Na^+$ vào) & tái cực ($K^+$ ra) `[SRC: S-06.4]`.
7. **Điện sinh học:** Bơm $Na^+/K^+$-ATPase duy trì gradient ion; Nernst & GHK tính toán điện thế nghỉ; ECG/EEG/EMG ghi nhận hoạt động điện của tim/non/não `[SRC: S-06.4]`.
8. **An toàn điện:** Macroshock (qua da) & microshock (qua catheter tim) — nguy cơ rung thất; nguyên tắc phòng ngừa (nối đất, cách ly, RCD) `[SRC: S-06.6]`.
9. **Từ trường & lực từ:** $F = qvB\sin\theta$, $F = BIl\sin\theta$; vật liệu từ (địch từ, thuận từ, sắt từ) `[SRC: S-06.7]`.
10. **Cảm ứng điện từ:** Định luật Faraday ($\varepsilon = -N\frac{d\Phi}{dt}$), tự cảm ($L$), máy biến áp, cảm ứng điện từ trong MRI & cảm ứng điện từ y tế `[SRC: S-06.8]`.
11. **Hạt nano từ tính:** SPION ($Fe_3O_4$, $\gamma-Fe_2O_3$); siêu thuận từ; dẫn thuốc hướng đích bằng từ trường gradient ($F = (\vec{m}\cdot\nabla)\vec{B}$); nhiệt trị từ (SAR); cản quang MRI $[SRC: S-06.9]$.
12. **Trường điện từ & sóng điện từ:** Phổ điện từ (từ sóng vô tuyến đến tia gamma); ứng dụng trong y dược (MRI, chụp CT, nhiệt trị từ); an toàn điện từ (ICNIRP, SAR) `[SRC: S-06.10]`.

> **Quy tắc ghi nhớ (mnemonic):**
> - **Nernst:** $E_{ion} = \frac{RT}{zF}\ln\frac{[ion]_o}{[ion]_i} \approx \frac{61,5}{z}\log_{10}\frac{[ion]_o}{[ion]_i}$ (ở $37^\circ\text{C}$) `[ADDED: mnemonic]`.
> - **GHK:** $E_m = \frac{RT}{F}\ln\left(\frac{P_K[K^+]_o + P_{Na}[Na^+]_o + P_{Cl}[Cl^-]_i}{P_K[K^+]_i + P_{Na}[Na^+]_i + P_{Cl}[Cl^-]_o}\right)$ — định thế nghỉ do sự thấm khác nhau của các ion `[ADDED: mnemonic]`.
> - **Ohm:** $U = IR$; điện thế = dòng điện × điện trở $[ADDED: mnemonic]$.
> - **Joule - Lenz:** $Q = I^2Rt$ — nhiệt tỏa tỉ lệ thuận với vuông dòng điện $[ADDED: mnemonic]$.
> - **Faraday:** $\varepsilon = -N\frac{d\Phi}{dt}$ — động điện cảm ứng tỉ lệ với tốc độ biến thiên từ thông $[ADDED: mnemonic]$.
> - **An toàn điện:** TI < 1,0; MI ≤ 1,9; ALARA (luôn dùng mức công suất & thời gian thấp nhất cần thiết) `[ADDED: safety mnemonic]`.

### 6.2 Bảng Tổng hợp Đại lượng & Đơn vị 6.2 Bảng Tổng hợp Đại lượng & Đơn vị

**Bảng 6.1.** Tổng hợp đại lượng, công thức, đơn vị & ý nghĩa của chương 6 `[ADDED: Table 6.1]`

| Đại lượng | Ký hiệu | Công thức | Đơn vị | Ý nghĩa & Ứng dụng |
|---|---|---|---|---|
| Điện trường | $E$ | $E = F/q$ | V/m | Cường độ điện trường |
| Điện thế | $V, U$ | $V = kq/(\varepsilon r)$; $U = IR$ | V | Điện thế điểm & hiệu điện thế |
| Điện dung | $C$ | $C = Q/U = \varepsilon\varepsilon_0 S/d$ | F | Khả năng tích điện của tụ điện |
| Năng lượng điện trường | $W$ | $W = \frac{1}{2}CU^2 = \frac{Q^2}{2C}$ | J | Năng lượng dự trữ trong tụ điện |
| Cường độ dòng điện | $I$ | $I = \Delta q/\Delta t$ | A | Lượng điện đi qua tiết diện trên đơn vị thời gian |
| Điện trở | $R$ | $R = \rho l/S = U/I$ | $\Omega$ | Cản trở dòng điện |
| Công suất điện | $P$ | $P = UI = I^2R = U^2/R$ | W | Tốc độ tiêu hao năng lượng điện |
| Nhiệt lượng | $Q$ | $Q = I^2Rt$ | J | Năng lượng nhiệt do dòng điện đi qua điện trở |
| Hằng số thời gian | $\tau$ | $\tau = R_m C_m$ | s | Thời gian cần để điện thế trên màng tế bào đạt ~63% giá trị cuối cùng khi nạp |
| Điện thế nghỉ | $E_K$ | $E_{ion} = \frac{RT}{zF}\ln\frac{[ion]_o}{[ion]_i} \approx \frac{61,5}{z}\log_{10}\frac{[ion]_o}{[ion]_i}$ | mV | Điện thế cân bằng của ion đơn lẻ (ví dụ $E_K \approx -90\text{ mV}$) |
| Điện thế hoạt động | $E_m$ | $E_m = \frac{RT}{F}\ln\left(\frac{P_K[K^+]_o + P_{Na}[Na^+]_o + P_{Cl}[Cl^-]_i}{P_K[K^+]_i + P_{Na}[Na^+]_i + P_{Cl}[Cl^-]_o}\right)$ | mV | Điện thế màng khi các kênh ion đều mở, gần $-70$ đến $-90\text{ mV}$ |
| Năng lượng tự do Gibbs | $\Delta G$ | $\Delta G = \Delta H - T\Delta S$ | J/mol | $\Delta G < 0$ tự phát; $\Delta G > 0$ cần cung cấp năng lượng; $\Delta G = 0$ cân bằng |
| Năng lượng tự do ATP | $\Delta G^{\circ\prime}$ | $\Delta G^{\circ\prime} \approx -30,5\text{ kJ/mol}$ | kJ/mol | Năng lượng tự do tiêu chuẩn của thủy phân ATP; dùng để liên hợp năng lượng |
| Hệ số cảm ứng | $L$ | $\varepsilon = -L\frac{dI}{dt}$; $W = \frac{1}{2}LI^2$ | H | Đối lập sự thay đổi dòng điện; lưu trữ năng lượng từ trường |
| Cuộn cảm | $\Phi$ | $\Phi = BS \cos\theta$ | Wb | Tổng dòng của từ trường qua một diện tích |
| Cuộn cảm biến áp | $\frac{U_1}{U_2} = \frac{N_1}{N_2} = \frac{I_2}{I_1}$ | Không đơn vị | Đổi mức điện thế qua biến áp (cách li hoặc cách ly) |
| Hiệu ứng Doppler | $\Delta f$ | $\Delta f = \frac{2 f_0 v \cos\theta}{c}$ | Hz | Đo vận tốc dòng máu qua hiệu ứng Doppler |
| Năng lượng photon | $E$ | $E = hf$ | J | Năng lượng của một photon với tần số $f$ |
| Tốc độ sóng | $v$ | $v = \lambda f = c/n$ | m/s | Vận tốc sóng trong môi trường; $c$ là tốc độ ánh sáng trong chân không |
| Công suất hấp thụ riêng | SAR | $SAR = C\frac{\Delta T}{\Delta t}$ | W/kg | Năng lượng hấp thụ trên đơn vị khối lượng mô (định lượng nhiệt trị từ) |
| Hệ số suy giảm | $\mu$ | $I(x) = I_0 e^{-\mu x}$ | m⁻¹ | Tốc độ suy giảm cường độ sóng âm trong mô |

---

## 7. Đánh giá & Bài tập tự lượng giá (Review & Assessment) 7. Đánh giá & Bài tập tự lượng giá (Review & Assessment)

[ADDED: assessment section frame] Bộ câu hỏi và bài tập dưới đây được thiết kế theo thang nhận thức từ Nhận biết, Thông hiểu đến Vận dụng, Phân tích & Đánh giá mô hình, bao phủ bốn chuẩn đầu ra `LO-1`–`LO-4` đã phát biểu tại `T-06.2.1`. Mỗi câu đều ghi rõ chuẩn đầu ra & cấp độ nhận thức; đáp án chi tiết nằm tại `T-06.7.4`. Sinh viên nên tự làm bài đầy đủ trước khi đọc đáp án chi tiết.

### 7.1 Câu hỏi Lý thuyết: Nhận biết & Thông hiểu (LO-1) 7.1 Câu hỏi Lý thuyết: Nhận biết & Thông hiểu (LO-1)

[ADDED: knowledge and comprehension questions]

**Câu 1 (`LO-1` – Knowledge).** Hệ nhiệt động nào trao đổi cả vật chất và năng lượng với môi trường ngoài?

- **A.** Hệ cô lập.
- **B.** Hệ kín.
- **C.** Hệ mở.
- **D.** Hệ cân bằng nhiệt động.

**Câu 2 (`LO-1` – Comprehension).** Theo định luật Ohm, nếu điện trở $R$ tăng gấp hai và cường độ dòng điện $I$ không đổi, điện thế $U$ sẽ:

- **A.** Gấp đôi.
- **B.** Giảm một nửa.
- **C.** Không đổi.
- **D.** Tăng gấp bốn.

**Câu 3 (`LO-1` – Comprehension).** Định luật Joule - Lenz ($Q = I^2Rt$) có nghĩa gì về nhiệt lượng tỏa ra?

- **A.** Nhiệt lượng tỉ lệ thuận với dòng điện.
- **B.** Nhiệt lượng tỉ lệ thuận với bình phương dòng điện & điện trở & thời gian.
- **C.** Nhiệt lượng tỉ lệ nghịch với điện trở.
- **D.** Nhiệt lượng không phụ thuộc dòng điện.

**Câu 4 (`LO-1` – Comprehension).** Phương trình Nernst tính điện thế cân bằng của ion đơn lẻ. Với ion $K^+$ ($z = +1$) ở $37^\circ\text{C}$, hệ số $\frac{RT}{zF}\ln(10)$ bằng bao nhiêu?

- **A.** 58 mV.
- **B.** 61,5 mV.
- **C.** 67 mV.
- **D.** 72 mV.

### 7.2 Bài tập Áp dụng: Tính toán Điện Sinh Học & Điện Trị Liệu (LO-2, LO-3) 7.2 Bài tập Áp dụng: Tính toán Điện Sinh Học & Điện Trị Liệu (LO-2, LO-3)

[ADDED: application exercises]

**Bài tập 5 (`LO-2` – Application).** Một màng tế bào có diện tích $S = 1\times 10^{-5}\text{ m}^2$, khoảng cách hai lớp lipid $d = 7,5\text{ nm} = 7,5 \times 10^{-9}\text{ m}$, điện dung riêng $C_m \approx 1\ \mu\text{F/cm}^2 = 0,01\text{ F/m}^2$, điện thế nghỉ $U = -70\ \text{mV} = -0,07\ \text{V}$. Tính điện dung $C$, điện tích $Q$ & cường độ điện trường trong màng $E$ `[SRC: S-06.1]`.

**Bài tập 6 (`LO-2` – Application).** Một đoạn dây dẫn dẫn điện có điện trở $R = 10\ \Omega$, dòng điện qua dây $I = 2\text{ A}$ trong thời gian $t = 10\text{ s}$. Tính công suất điện $P$ & nhiệt lượng $Q$ tỏa ra trong 10 giây `[SRC: S-06.2]`.

**Bài tập 7 (`LO-3` – Application).** Một mạch RC đơn giản có điện trở $R = 10^3\ \Omega\cdot\text{cm}^2$ & điện dung $C_m = 1\ \mu\text{F/cm}^2$. Hãy tính hằng số thời gian màng $\tau = R_m C_m$ & điện thế trên màng sau $t = 1\text{ ms}$ nếu áp dụng một bước điện thế $U_0 = 100\text{ mV}$ `[SRC: S-06.3]`.

### 7.3 Câu hỏi Phân tích & Vận dụng Nâng cao (LO-3, LO-4) 7.3 Câu hỏi Phân tích & Vận dụng Nâng cao (LO-3, LO-4)

[ADDED: analytical and advanced questions]

**Câu 8 (`LO-3`, `LO-4` – Analysis).** Giải thích tại sao các tế bào sống phải liên tục trao đổi chất & năng lượng với môi trường, dựa trên nguyên lý II nhiệt động học & trạng thái dừng `[SRC: S-06.3]` `[ADDED: critical thinking]`.

**Câu 9 (`LO-3` – Analysis).** Giải thích cơ chế điện thế hoạt động (khử cực do $Na^+$ vào, tái cực do $K^+$ ra) dựa trên nền tảng điện thế nghỉ & bản chất ion của dòng điện sinh học `[SRC: S-06.4]` `[ADDED: critical thinking]`.

**Câu 10 (`LO-4` – Advanced).** Đánh giá vai trò của từ trường trong chẩn đoán y dược (MRI, từ trường cường độ cao) & ứng dụng hạt nano từ tính (dẫn thuốc hướng đích, nhiệt trị từ, cản quang MRI) `[SRC: S-06.7, S-06.8, S-06.9]` `[ADDED: critical thinking]` `[DOMAIN_RULES: chỉ giải thích cơ chế, không liều/chỉ định]`.

---

## 7.4 Đáp án & Hướng dẫn Giải Chi tiết (Answer Key) 7.4 Đáp án & Hướng dẫn Giải Chi tiết (Answer Key)

[ADDED: step-by-step answer key]

**Câu 1 — `LO-1` · Knowledge. Đáp án C.** Hệ mở liên tục trao đổi cả vật chất & năng lượng với môi trường ngoài — đây là đặc điểm của cơ thể sống `[SRC: S-06.1]` `[ADDED: definition]`.

**Câu 2 — `LO-1` · Comprehension. Đáp án A.** Theo định luật Ohm $U = IR$, nếu $I$ không đổi & $R$ tăng gấp hai thì $U$ cũng tăng gấp hai $[SRC: S-06.2]` `[ADDED: Ohm's law]`.

**Câu 3 — `LO-1` · Comprehension. Đáp án B.** Theo định luật Joule - Lenz ($Q = I^2Rt$), nhiệt lượng tỉ lệ thuận với bình phương dòng điện, điện trở & thời gian $[SRC: S-06.2]` `[ADDED: Joule's law]`.

**Câu 4 — `LO-1` · Comprehension. Đáp án B.** Ở $37^\circ\text{C}$, hệ số $\frac{RT}{zF}\ln(10) \approx 61,5\text{ mV}$ $[SRC: S-06.4]$ `[ADDED: Nernst coefficient]`.

**Bài tập 5 — `LO-2` · Application.**
1. $C = C_m \cdot S = 0,01\text{ F/m}^2 \times 1\times 10^{-5}\text{ m}^2 = 1\times 10^{-7}\text{ F} = 0,1\ \mu\text{F}$.
2. $Q = C \cdot U = 1\times 10^{-7} \times 0,07 = 7 \times 10^{-9}\text{ C} = 7\ \text{nC}$.
3. $E = U/d = 0,07 / (7,5 \times 10^{-9}) \approx 9,33 \times 10^6\ \text{V/m} \approx 9,3 \times 10^6\ \text{V/m}$.
4. **Kết luận:** Màng tế bào có điện dung khoảng $0,1\ \mu\text{F}$, điện tích khoảng $7\ \text{nC}$ & cường độ điện trường khoảng $9,3 \times 10^6\ \text{V/m}$ `[SRC: S-06.1]` `[ADDED: calculation]`.

**Bài tập 6 — `LO-2` · Application.**
1. Công suất: $P = I^2R = (2\text{ A})^2 \times 10\ \Omega = 4 \times 10 = 40\text{ W}$.
2. Nhiệt lượng: $Q = I^2Rt = 40\text{ W} \times 10\text{ s} = 400\text{ J}$.
3. **Kết luận:** Công suất điện $40\text{ W}$ & nhiệt lượng $400\text{ J}$ trong 10 giây `[SRC: S-06.2]` `[ADDED: calculation]`.

**Bài tập 7 — `LO-3` · Application.**
1. Hằng số thời gian: $\tau = R_m C_m = 10^3\ \Omega\cdot\text{cm}^2 \times 1\ \mu\text{F/cm}^2 = 10^3 \times 10^{-6}\text{ s} = 10^{-3}\text{ s} = 1\text{ ms}$.
2. Điện thế sau $1\text{ ms}$: $U_C(t) = U_0(1 - e^{-t/\tau}) = 0,1\text{ V} \times (1 - e^{-1}) = 0,1\text{ V} \times (1 - 0,368) = 0,1\text{ V} \times 0,632 = 0,0632\text{ V} = 63,2\text{ mV}$.
3. **Kết luận:** Hằng số thời gian màng $\tau = 1\text{ ms}$; điện thế trên màng sau $1\text{ ms}$ khoảng $63,2\text{ mV}$ (khoảng $63\%$ giá trị cuối cùng) `[SRC: S-06.3]` `[ADDED: calculation]`.

**Câu 8 — `LO-3`, `LO-4` · Analysis.**
Cơ thể sống là hệ mở: liên tục trao đổi vật chất & năng lượng với môi trường ngoài, duy trì trạng thái dừng (không phải cân bằng nhiệt động — trạng thái chết). Nguyên lý II nói entropy hệ cô lập luôn tăng, nhưng hệ mở có thể duy trì entropy thấp bằng cách thải entropy dư thừa ra môi trường $[SRC: S-06.3]$ `[ADDED: open system explanation]`.

**Câu 9 — `LO-3` · Analysis.**
Theo nguyên lý I, năng lượng không tự sinh ra hay mất đi, chỉ chuyển hóa. Trong tế bào, năng lượng hóa học từ thực ăn (glucose, axit béo, axit amino) chuyển thành nhiệt & công sinh hóa (cơ thép, chuyển ions, etc.) $[SRC: S-06.2]$ `[ADDED: energy conservation in biology]`.

**Câu 10 — `LO-4` · Analysis.**
MRI sử dụng từ trường siêu mạnh (hàng chục đến hàng trăm mT) để căn chỉnh proton nước trong cơ thể. Vật kim loại từ (sắt từ) có thể bị hút mạnh vào từ trường mạnh, gây chấn thương nặng hoặc di chuyển thiết bị cấy ghép (máy tạo nhịp, Clip não, etc.). Do đó bệnh nhân có kim loại từ trong cơ thể thường không được chụp MRI $[SRC: S-06.7]$ `[ADDED: MRI safety]$ `[DOMAIN_RULES: chỉ giải thích cơ chế, không liều/chỉ định]`.

---

## 8. Tài liệu tham khảo (References) 8. Tài liệu tham khảo (References)

### 8.1 Danh mục Tài liệu Tham khảo & Đọc thêm 8.1 Danh mục Tài liệu Tham khảo & Đọc thêm

[ADDED: reference section structure] Nguồn `D-06` không có tài liệu tham khảo nào & `APPROVED_REFERENCE_LIST` là `none`. Theo R4, không tự điền tên sách, tác giả, năm, NXB, DOI hay số trang; ba thẻ dưới đây xác định loại tài liệu cần bổ sung.

1. **Giáo trình Vật lý dược (điện sinh học, điện thế màng, điện trị liệu):** `[VERIFY: reference needed for Physical Pharmacy textbook covering bioelectricity, membrane potential, electrotherapy (V-06.04)]`.
2. **Giáo trình Vật lý (điện từ, cảm ứng điện từ, sóng điện từ):** `[VERIFY: reference needed for general physics textbook covering electromagnetism, electromagnetic induction, MRI physics (V-06.04)]`.
3. **Tài liệu Dược lý (hạt nano từ tính, MRI, nhiệt trị từ):** `[VERIFY: reference needed for pharmaceutics textbook covering magnetic nanoparticles, MRI, magnetic hyperthermia (V-06.04)]`.

> **Ghi chú tuân thủ R4.** Ba mục trên là thẻ giữ chỗ, không phải trích dẫn đã xác minh; khi có danh mục chuẩn sẽ định dạng Vancouver.
