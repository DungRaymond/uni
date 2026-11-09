# Chương 4: Nhiệt động lực học sinh học (Bioenergetics & Thermodynamics)

---

## 1. Tổng quan chương (Chapter Overview) {T-04.1}

### 1.1 Tên chương, giới thiệu khái quát & phạm vi nội dung {T-04.1.1}

Sau Chương 1–3 (nhiệt động học sinh học cơ bản & động học chất lưu; điện thế sinh học), Chương 4 chuyển sang **nhiệt động lực học sinh học (Bioenergetics)** — nghiên cứu chuyển hóa năng lượng trong hệ sinh vật mở. Cơ thể sống là một hệ nhiệt động mở: liên tục hút entropy âm từ môi trường (thu thức ăn, hít oxy, thải nhiệt và chất thải) để duy trì trạng thái dừng, chứ không phải trạng thái cân bằng nhiệt động (trạng thái chết) `[SRC: S-04.1]` `[ADDED: bridge from Ch01–03]`.

Chương trình bày hệ nhiệt động (cô lập/kín/mở), nguyên lý I & II nhiệt động học áp dụng trong cơ thể sống, phương trình Prigogine, năng lượng tự do Gibbs ($\Delta G$), chiều phản ứng sinh hóa và liên hợp năng lượng với ATP `[ADDED: scope summary]`.

Tên chương tạm thời: **"Nhiệt động lực học sinh học (Bioenergetics & Thermodynamics)"** (theo `MANIFEST.md`) `[VERIFY: chapter title (V-04.01)]`.

### 1.2 Phạm vi, Kiến thức Tiên quyết & Thời lượng Học tập {T-04.1.2}

- **Kiến thức tiên kỳ:**
  1. Năng lượng, công, nhiệt từ vật lý phổ thông.
  2. Hệ mở/kín/cô lập, nguyên lý I nhiệt động học ($\Delta E = Q - A$) từ Chuyên đề 1.
  3. Ion, nồng độ molari từ hóa phổ thông.
  4. Đơn vị SI: joule (J), kelvin (K), mol `[ADDED: cross-reference to Ch01 & general physics]`.
- **Thời lượng dự kiến:** ~**2 giờ 30 phút** (khoảng 1 giờ 50 phút cho ~2.000 từ lý thuyết + ví dụ tại Mục 1–6, tương đương 2.000 / 1.500 ≈ 1,33 giờ; cộng 40 phút cho 10 bài tập ≈ 2 giờ 13 phút), theo `STUDY_TIME_RULE` `[ADDED: study time estimate]`.

---

## 2. Mục tiêu học tập (Learning Objectives) {T-04.2}

### 2.1 Chuẩn đầu ra Kiến thức, Kỹ năng, Vận dụng và Đánh giá mô hình (LO-1..LO-4) {T-04.2.1}

Sau chương này, sinh viên có thể `[ADDED: learning objectives]`:

- **`LO-1` (Kiến thức):** Phát biểu hệ nhiệt động (cô lập/kín/mở), trạng thái dừng vs cân bằng nhiệt động, nguyên lý I & II nhiệt động học, entropy, năng lượng tự do Gibbs, phương trình Prigogine, liên hợp năng lượng ATP.
- **`LO-2` (Kỹ năng):** Tính toán $\Delta U = Q - A$, $\Delta G = \Delta H - T\Delta S$, áp dụng định luật Hess; phân biệt phản ứng exergonic ($\Delta G < 0$) và endergonic ($\Delta G > 0$).
- **`LO-3` (Vận dụng):** Giải thích cách tế bào duy trì trạng thái dừng bằng cách thải entropy ra ngoài; liên hợp năng lượng ATP để thúc đẩy phản ứng đồng hóa ($\Delta G > 0$).
- **`LO-4` (Đánh giá mô hình):** Đánh giá vai trò của nhiệt động học sinh học trong chuyển hóa cơ sở, BMR, dinh dưỡng và hoạt động cơ thể `[ADDED: LO-4 definition]`.

---

## 3. Đặt vấn đề & Ý nghĩa thực tiễn (Introduction) {T-04.3}

### 3.1 Từ hệ nhiệt động đến sự sống như hệ mở {T-04.3.1}

Cơ thể sống là một **hệ nhiệt động mở**: liên tục trao đổi vật chất và năng lượng với môi trường ngoài, duy trì trạng thái **dừng (steady state)** — các thông số trạng thái không đổi theo thời gian nhưng dòng vật chất và năng lượng liên tục lưu chuyển qua hệ. Sinh vật duy trì sự sống ở trạng thái dừng, chứ không phải trạng thái cân bằng nhiệt động (cân bằng nhiệt động đồng nghĩa với trạng thái chết) `[SRC: S-04.1]` `[ADDED: conceptual bridge]`.

Sự sống đòi hỏi liên tục cung cấp năng lượng (từ thức ăn) và loại bỏ entropy dư thừa ra môi trường. Nguyên lý I giúp cân đối năng lượng thức ăn chuyển thành nhiệt và công sinh hóa, cơ học, thẩm thấu hoặc điện. Nguyên lý II nhấn mạnh chuyển đổi năng lượng thực tế có thất thoát và cơ thể phải trao đổi với môi trường để duy trì tổ chức `[SRC: S-04.1, S-04.2, S-04.3]` `[ADDED: interpretation]`.

---

## 4. Nội dung bài giảng chính (Main Content) {T-04.4}

### 4.1 Hệ Nhiệt động & Trạng thái Dừng {T-04.4.1}

**Hệ nhiệt động** phân loại dựa trên khả năng trao đổi với môi trường `[SRC: S-04.1]`:

- **Hệ cô lập (Isolated system):** Không trao đổi vật chất và năng lượng với môi trường ngoài.
- **Hệ kín (Closed system):** Chỉ trao đổi năng lượng, không trao đổi vật chất.
- **Hệ mở (Open system):** Trao đổi cả vật chất và năng lượng với môi trường ngoài $\rightarrow$ **Cơ thể sinh vật là một hệ nhiệt động mở** `[SRC: S-04.1]` `[ADDED: definition]`.

**Trạng thái dừng (Steady State):** Hệ mở ở trạng thái có các thông số trạng thái không đổi theo thời gian nhưng dòng vật chất và năng lượng liên tục lưu chuyển qua hệ. Sinh vật duy trì sự sống ở trạng thái dừng chứ không phải trạng thái cân bằng nhiệt động (cân bằng nhiệt động đồng nghĩa với trạng thái chết) `[SRC: S-04.1]` `[ADDED: definition]`.

**Ý nghĩa:** Phân biệt trạng thái dừng với cân bằng giúp hiểu cơ thể cần liên tục trao đổi vật chất/năng lượng để duy trì chức năng; cũng giúp phân tích phản ứng sinh học ở điều kiện ổn định `[SRC: S-04.1]` `[ADDED: interpretation]`.

---

### 4.2 Nguyên lý I Nhiệt động học & Năng lượng Hóa học trong Cơ thể Sống {T-04.4.2}

**Nguyên lý I (bảo toàn năng lượng):** năng lượng không tự sinh ra hay mất đi, chỉ chuyển hóa. Phương trình tổng quát:

$$\Delta U = Q - A \qquad \text{hay} \qquad Q = \Delta U + A$$ `[SRC: S-04.2]` `[ADDED: equation with variable list]`

Đối với cơ thể sống, phương trình được viết dưới dạng:

$$\Delta E_{hóa\ học} = Q_{tỏa} + A_{sinh}$$ `[SRC: S-04.2]` `[ADDED: equation with variable list]`

trong đó $\Delta E_{hóa\ học}$ là biến thiên năng lượng hóa học nội tại, $Q_{tỏa}$ là nhiệt lượng tỏa ra, $A_{sinh}$ là công sinh hóa.

**Các thành phần** `[SRC: S-04.2]`:
- **Nhiệt lượng tỏa ra ($Q$):**
  - *Nhiệt sơ cấp:* Nhiệt lượng sinh ra do tính bất thuận nghịch của các phản ứng hóa sinh nội bào (duy trì thân nhiệt ổn định).
  - *Nhiệt thứ cấp:* Nhiệt sinh ra do ma sát cơ học (tim đập, mạch máu, trương lực cơ, ma sát hô hấp).
- **Các dạng công cơ thể sinh ra ($A$):**
  - *Công hóa học ($A_{hh}$):* Tổng hợp các đại phân tử sinh học (protein, acid nucleic, glycogen).
  - *Công cơ học ($A_{ch}$):* Co cơ, nhu động ruột, hô hấp, tuần hoàn tim.
  - *Công thẩm thấu ($A_{tt}$):* Vận chuyển các chất ngược gradient nồng độ qua màng tế bào.
  - *Công điện ($A_{đ}$):* Tạo và duy trì điện thế màng, truyền xung động thần kinh `[SRC: S-04.2]` `[ADDED: variable list & examples]`.

**Định luật Hess & Phương pháp đo nhiệt:** Nhiệt lượng của phản ứng chỉ phụ thuộc trạng thái đầu và cuối, không phụ thuộc đường đi. Ứng dụng: Xác định mức tiêu hao năng lượng và chuyển hóa cơ sở ($BMR$) của cơ thể `[SRC: S-04.2]` `[ADDED: definition]`.

**Ý nghĩa:** Nguyên lý I giúp cân đối năng lượng thức ăn chuyển thành nhiệt và công hóa học, cơ học, thẩm thấu hoặc điện. Đo sinh nhiệt và tiêu hao năng lượng là cơ sở nghiên cứu chuyển hóa cơ sở, dinh dưỡng và hoạt động cơ thể `[SRC: S-04.2]` `[ADDED: interpretation]`.

---

### 4.3 Nguyên lý II Nhiệt động học & Phương trình Prigogine {T-04.4.3}

**Entropy ($S$)** là đại lượng đo mức độ hỗn loạn của hệ. Trong một hệ mở như cơ thể sống, sự biến thiên entropy tuân theo **phương trình Prigogine**:

$$dS = d_iS + d_eS$$ `[SRC: S-04.3]` `[ADDED: equation with variable list]`

trong đó:
- $d_iS > 0$: Lượng entropy luôn tăng sinh ra do các quá trình bất thuận nghịch nội tại (trao đổi chất, ma sát, phân hủy) `[SRC: S-04.3]`.
- $d_eS$: Lượng entropy trao đổi với môi trường ngoài qua hấp thu thức ăn, oxy và đào thải nhiệt, phân, nước tiểu, $CO_2$ `[SRC: S-04.3]` `[ADDED: definition]`.

**Điều kiện duy trì sự sống (Trạng thái dừng):** Cơ thể phải liên tục thải entropy dư thừa ra môi trường ngoài sao cho $d_eS < 0$ và $|d_eS| = d_iS \implies dS = 0$. E. Schrödinger đã phát biểu: *"Sinh vật sống nhờ liên tục hút entropy âm từ môi trường"* `[SRC: S-04.3]` `[ADDED: definition & Schrödinger quote]`.

**Ý nghĩa:** Nguyên lý II nhấn mạnh chuyển đổi năng lượng thực tế có thất thoát và cơ thể phải trao đổi với môi trường để duy trì tổ chức. Đây là khung hiểu hiệu suất chuyển hóa, sinh nhiệt và tính bất thuận nghịch của quá trình sinh học `[SRC: S-04.3]` `[ADDED: interpretation]`.

---

### 4.4 Năng lượng Tự do Gibbs & Chiều Phản ứng Sinh hóa {T-04.4.4}

**Năng lượng tự do Gibbs:**

$$\Delta G = \Delta H - T \cdot \Delta S$$ `[SRC: S-04.4]` `[ADDED: equation with variable list]`

trong đó $\Delta H$: enthalpy thay đổi, $T$: nhiệt độ tuyệt đối (K), $\Delta S$: entropy thay đổi `[SRC: S-04.4]` `[ADDED: variable list]`.

**Chiều phản ứng** `[SRC: S-04.4]`:
- $\Delta G < 0$: Quá trình tỏa năng lượng tự do (exergonic), xảy ra tự phát.
- $\Delta G > 0$: Quá trình thu năng lượng tự do (endergonic), không thể tự phát nếu đứng độc lập.
- $\Delta G = 0$: Hệ đạt trạng thái cân bằng hóa học.

**Cơ chế liên hợp năng lượng (Energy Coupling):** Tế bào thực hiện các phản ứng đồng hóa ($\Delta G > 0$) bằng cách liên hợp (ghép đôi) với sự thủy phân các hợp chất giàu năng lượng như **ATP** ($\Delta G^{\circ\prime} \approx -30,5\text{ kJ/mol}$):

$$A + B \rightarrow C \ (\Delta G_1 > 0) \quad \text{ghép với} \quad \text{ATP} \rightarrow \text{ADP} + P_i \ (\Delta G_2 < 0)$$ `[SRC: S-04.4]` `[ADDED: equation with example]`

Sao cho tổng $\Delta G_{tổng} = \Delta G_1 + \Delta G_2 < 0 \rightarrow$ phản ứng diễn ra thuận lợi `[SRC: S-04.4]` `[ADDED: condition]`.

**Ý nghĩa:** Dấu của $\Delta G$ cho biết phản ứng thuận lợi hay cần ghép cặp năng lượng trong điều kiện xác định. Ghép với thủy phân ATP giải thích cách tế bào thúc đẩy tổng hợp chất và vận chuyển chủ động; enzyme đổi tốc độ, không đổi vị trí cân bằng `[SRC: S-04.4]` `[ADDED: interpretation]`.

---

## 5. Ví dụ minh họa & Quy trình thực hành (Examples & Illustrations) {T-04.5}

### 5.1 Ví dụ 1: Ghép cặp năng lượng ở hexokinase {T-04.5.1}

> **Example 1.** Tính năng lượng tự do tổng của phản ứng tạo glucose-6-phosphate ghép đôi với thủy phân ATP `[SRC: S-04.4]`.
>
> - **Given (Dữ kiện đã cho):** Phản ứng riêng lẻ: $\text{glucose} + P_i \rightarrow \text{glucose-6-phosphate}$ có $\Delta G_1 \approx +16,7\text{ kJ/mol}$ → không tự xảy ra. Ghép với thủy phân ATP: $\text{ATP} \rightarrow \text{ADP} + P_i$ có $\Delta G_2 \approx -30,5\text{ kJ/mol}$ `[SRC: S-04.4]`.
> - **Find (Yêu cầu):** Tính $\Delta G_{tổng}$ và xác định phản ứng có tự phát hay không.
> - **Approach (Phương pháp giải):** Áp dụng định luật Hess (năng lượng tự do là hàm trạng thái, chỉ phụ thuộc trạng thái đầu và cuối): $\Delta G_{tổng} = \Delta G_1 + \Delta G_2$.
> - **Solution (Giải):**
>   1. $\Delta G_{tổng} = 16,7 + (-30,5) = -13,8\text{ kJ/mol}$.
>   2. Vì $\Delta G_{tổng} < 0$, phản ứng **tự phát**.
>   3. **Kết luận:** tế bào không "phá luật" nhiệt động mà dùng ATP để "trả tiền" cho phản ứng thu năng lượng — đây chính là cơ chế liên hợp năng lượng.
> - **Check (Kiểm tra):** $-16,7 + 30,5 = 13,8$ (giá trị tuyệt đối), dấu âm vì thành phần âm ($-30,5$) có giá trị tuyệt đối lớn hơn thành phần dương ($+16,7$) `[SRC: S-04.4]`.
> - **Interpretation (Nhận xét):** Liên hợp năng lượng ATP là cơ chế chính cho phép tế bào thúc đẩy tổng hợp chất và vận chuyển chủ động `[SRC: S-04.4]` `[ADDED: physiological interpretation]`.

### 5.2 Mẹo nhớ Gibbs & Prigogine {T-04.5.2}

> **Mẹo nhớ — Gibbs:** $\Delta G = \Delta H - T \cdot \Delta S$ — **"âm = tự phát ("xuôi dốc"), dương = phải ghép ATP ("đẩy xe lên dốc"), bằng 0 = cân bằng"** `[SRC: S-04.4]` `[ADDED: mnemonic]`.
>
> **Mẹo nhớ — Prigogine (3 bước):** (1) trong tế bào luôn sinh entropy $d_iS > 0$; (2) thải entropy ra ngoài $d_eS < 0$; (3) cân bằng $|d_eS| = d_iS \implies dS = 0$ → trạng thái dừng, không phải trạng thái chết. Mẹo nhanh: **"sống = liên tục thải entropy ra ngoài"** `[SRC: S-04.3]` `[ADDED: mnemonic]`.

---

## 6. Tóm tắt chương (Chapter Summary) {T-04.6}

### 6.1 Tóm tắt Nội dung Trọng tâm & Quy tắc Ghi nhớ {T-04.6.1}

Các luận điểm chính của chuyên đề 4 `[SRC: S-04.1–S-04.4]`:

1. **Hệ nhiệt động:** Cơ thể sống là hệ mở (trao đổi chất & năng lượng), ở trạng thái dừng chứ không phải cân bằng nhiệt động `[SRC: S-04.1]`.
2. **Nguyên lý I:** $\Delta U = Q - A$; $\Delta E_{hóa\ học} = Q_{tỏa} + A_{sinh}$; năng lượng thức ăn chuyển thành nhiệt và công sinh hóa, cơ học, thẩm thấu hoặc điện `[SRC: S-04.2]`.
3. **Nguyên lý II & Prigogine:** $dS = d_iS + d_eS$; $d_iS > 0$ (entropy sinh ra nội tại), $d_eS < 0$ (thải ra ngoài); điều kiện trạng thái dừng $|d_eS| = d_iS \implies dS = 0$; "sinh vật sống nhờ liên tục hút entropy âm từ môi trường" `[SRC: S-04.3]`.
4. **Năng lượng tự do Gibbs:** $\Delta G = \Delta H - T \cdot \Delta S$; $\Delta G < 0$ tự phát, $\Delta G > 0$ cần cấp năng lượng, $\Delta G = 0$ cân bằng `[SRC: S-04.4]`.
5. **Liên hợp năng lượng ATP:** Phản ứng đồng hóa ($\Delta G > 0$) được thúc đẩy bằng sự thủy phân ATP ($\Delta G^{\circ\prime} \approx -30,5\text{ kJ/mol}$) `[SRC: S-04.4]`.

> **Quy tắc ghi nhớ (mnemonic):**
> - **Gibbs:** $\Delta G = \Delta H - T \cdot \Delta S$ — **"âm = tự phát ("xuôi dốc"), dương = phải ghép ATP ("đẩy xe lên dốc"), bằng 0 = cân bằng"** `[ADDED: mnemonic]`.
> - **Prigogine (3 bước):** (1) trong tế bào luôn sinh entropy $d_iS > 0$; (2) thải entropy ra ngoài $d_eS < 0$; (3) cân bằng $|d_eS| = d_iS \implies dS = 0$ → trạng thái dừng. Mẹo nhanh: **"sống = liên tục thải entropy ra ngoài"** `[ADDED: mnemonic]`.

### 6.2 Bảng Tổng hợp Công thức & Lưu ý {T-04.6.2}

**Bảng 4.1.** Tổng hợp công thức, đơn vị và lưu ý của chuyên đề 4. `[ADDED: Table 4.1]`

| Công thức | Ý nghĩa | Đơn vị | Lưu ý |
|---|---|---|---|
| $\Delta U = Q - A$ | Nguyên lý I: biến thiên năng lượng nội tại bằng nhiệt trừ công | J; kJ/mol | $Q > 0$: hệ hấp nhiệt; $A > 0$: hệ sinh công |
| $\Delta E_{hóa\ học} = Q_{tỏa} + A_{sinh}$ | Năng lượng hóa học thay đổi bằng nhiệt tỏa cộng công sinh | J; kJ/mol | Áp dụng trong cơ thể sống |
| $dS = d_iS + d_eS$ | Phương trình Prigogine: biến thiên entropy | J/K | $d_iS > 0$ (sinh ra nội tại), $d_eS$ (trao đổi với môi trường) |
| $\Delta G = \Delta H - T \cdot \Delta S$ | Năng lượng tự do Gibbs; chiều phản ứng | kJ/mol | $\Delta G < 0$ tự phát, $> 0$ không tự phát, $= 0$ cân bằng |
| $\Delta G^{\circ\prime} \approx -30,5\text{ kJ/mol}$ | Năng lượng tự do tiêu chuẩn của thủy phân ATP | kJ/mol | Giá trị tham khảo cho liên hợp năng lượng |

---

## 7. Đánh giá & Bài tập tự lượng giá (Review & Assessment) {T-04.7}

[ADDED: assessment section frame] Bộ câu hỏi và bài tập dưới đây được thiết kế theo thang nhận thức từ Nhận biết, Thông hiểu đến Vận dụng, Phân tích và Đánh giá mô hình, bao phủ bốn chuẩn đầu ra `LO-1`–`LO-4` đã phát biểu tại `T-04.2.1`. Mỗi câu đều ghi rõ chuẩn đầu ra và cấp độ nhận thức; đáp án chi tiết nằm tại `T-04.7.4`. Sinh viên nên tự làm bài đầy đủ trước khi đọc đáp án chi tiết.

### 7.1 Câu hỏi Lý thuyết: Nhận biết & Thông hiểu (LO-1) {T-04.7.1}

[ADDED: knowledge and comprehension questions]

**Câu 1 (`LO-1` – Knowledge).** Cơ thể sống là hệ nhiệt động nào?

- **A.** Hệ cô lập.
- **B.** Hệ kín.
- **C.** Hệ mở.
- **D.** Hệ cân bằng nhiệt động.

**Câu 2 (`LO-1` – Comprehension).** Theo nguyên lý I, phương trình $\Delta U = Q - A$ có ý nghĩa gì?

- **A.** Năng lượng nội tại thay đổi bằng nhiệt hấp thụ trừ công hệ sinh ra.
- **B.** Năng lượng nội tại không đổi.
- **C.** Năng lượng nội tại chỉ thay đổi do công.
- **D.** Năng lượng nội tại chỉ thay đổi do nhiệt.

**Câu 3 (`LO-1` – Comprehension).** Theo nguyên lý II, trong một hệ cô lập entropy:

- **A.** Luôn giảm.
- **B.** Luôn tăng.
- **C.** Luôn không đổi.
- **D.** Có thể tăng hoặc giảm tùy ý.

**Câu 4 (`LO-1` – Comprehension).** Phản ứng nào xảy ra tự phát theo năng lượng tự do Gibbs?

- **A.** $\Delta G > 0$.
- **B.** $\Delta G < 0$.
- **C.** $\Delta G = 0$.
- **D.** $\Delta G$ bất kỳ.

### 7.2 Bài tập Áp dụng: Tính toán $\Delta G$ & Liên hợp Năng lượng (LO-2, LO-3) {T-04.7.2}

[ADDED: application exercises]

**Bài tập 5 (`LO-2` – Application).** Một phản ứng đồng hóa có $\Delta G_1 = +25\text{ kJ/mol}$. Nếu ghép đôi với thủy phân ATP ($\Delta G_2 = -30,5\text{ kJ/mol}$), hãy tính $\Delta G_{tổng}$ và xác định phản ứng có tự phát hay không.

**Bài tập 6 (`LO-2` – Application).** Cho phản ứng có $\Delta H = +50\text{ kJ/mol}$ và $\Delta S = +150\text{ J/(mol}\cdot\text{K)}$ ở $T = 298\text{ K}$. Hãy tính $\Delta G$ và xác định phản ứng có tự phát hay không.

**Bài tập 7 (`LO-3` – Application).** Một tế bào thực hiện tổng hợp một đại phân tử có $\Delta G_1 = +40\text{ kJ/mol}$. Số phân tử ATP tối thiểu phải thủy phân (mỗi ATP $\Delta G_2 = -30,5\text{ kJ/mol}$) để làm cho tổng $\Delta G_{tổng} < 0$?

### 7.3 Câu hỏi Phân tích & Vận dụng Nâng cao (LO-3, LO-4) {T-04.7.3}

[ADDED: analytical and advanced questions]

**Câu 8 (`LO-3`, `LO-4` – Analysis).** Giải thích tại sao cơ thể sống phải liên tục trao đổi chất và năng lượng với môi trường, dựa trên nguyên lý II và trạng thái dừng `[SRC: S-04.1]` `[ADDED: critical thinking]`.

**Câu 9 (`LO-3` – Analysis).** So sánh vai trò của enthalpy ($\Delta H$) và entropy ($\Delta S$) trong việc quyết định chiều phản ứng sinh hóa qua năng lượng tự do Gibbs $\Delta G = \Delta H - T\Delta S$ `[SRC: S-04.4]` `[ADDED: critical thinking]`.

**Câu 10 (`LO-4` – Advanced).** Đánh giá vai trò của liên hợp năng lượng ATP trong duy trì hoạt động của tế bào, ví dụ tổng hợp chất và vận chuyển chủ động `[SRC: S-04.4]` `[ADDED: critical thinking]` `[DOMAIN_RULES: chỉ giải thích cơ chế, không liều/chỉ định]`.

---

## 7.4 Đáp án & Hướng dẫn Giải Chi tiết (Answer Key) {T-04.7.4}

[ADDED: step-by-step answer key]

**Câu 1 — `LO-1` · Knowledge. Đáp án C.** Cơ thể sống là hệ mở: liên tục trao đổi vật chất và năng lượng với môi trường ngoài `[SRC: S-04.1]` `[ADDED: definition]`.

**Câu 2 — `LO-1` · Comprehension. Đáp án A.** $\Delta U = Q - A$: năng lượng nội tại thay đổi bằng nhiệt hệ hấp thụ trừ công hệ sinh ra (nguyên lý I bảo toàn năng lượng) `[SRC: S-04.2]` `[ADDED: definition]`.

**Câu 3 — `LO-1` · Comprehension. Đáp án B.** Trong hệ cô lập entropy luôn tăng (nguyên lý II) `[SRC: S-04.3]` `[ADDED: definition]`.

**Câu 4 — `LO-1` · Comprehension. Đáp án B.** $\Delta G < 0$ có nghĩa phản ứng tự phát (thuận lợi) `[SRC: S-04.4]` `[ADDED: definition]`.

**Bài tập 5 — `LO-2` · Application.**
1. $\Delta G_{tổng} = \Delta G_1 + \Delta G_2 = 25 + (-30,5) = -5,5\text{ kJ/mol}$.
2. Vì $\Delta G_{tổng} < 0$, phản ứng **tự phát**.
3. **Kết luận:** ATP cung cấp đủ năng lượng để đẩy phản ứng đồng hóa xảy ra `[SRC: S-04.4]` `[ADDED: unit check]`.

**Bài tập 6 — `LO-2` · Application.**
1. Đổi đơn vị: $\Delta S = 150\text{ J/(mol}\cdot\text{K)} = 0,150\text{ kJ/(mol}\cdot\text{K)}$.
2. $\Delta G = \Delta H - T\Delta S = 50 - 298 \times 0,150 = 50 - 44,7 = +5,3\text{ kJ/mol}$.
3. Vì $\Delta G > 0$, phản ứng **không tự phát** (cần cấp năng lượng) `[SRC: S-04.4]` `[ADDED: unit conversion & sign check]`.

**Bài tập 7 — `LO-3` · Application.**
1. Mỗi ATP thi phân cung cấp $\Delta G_2 = -30,5\text{ kJ/mol}$.
2. Cần $n$ ATP sao cho $\Delta G_{tổng} = 40 + n \times (-30,5) < 0$.
3. $n > 40 / 30,5 = 1,31$. Do đó cần ít nhất $n = 2$ ATP.
4. Kiểm tra: $\Delta G_{tổng} = 40 + 2 \times (-30,5) = 40 - 61 = -21\text{ kJ/mol} < 0$ ✓ `[SRC: S-04.4]` `[ADDED: stoichiometric check]`.

**Câu 8 — `LO-3`, `LO-4` · Analysis.**
Cơ thể là hệ mở: liên tục hút năng lượng và chất từ môi trường (thu thức ăn, hít oxy) và thải entropy dư thừa ra ngoài (thải nhiệt, phân, nước tiểu, $CO_2$). Nếu không trao đổi, entropy nội tại sẽ tăng liên tục (theo nguyên lý II) cho đến khi hệ đạt cân bằng nhiệt động — tức là trạng thái chết `[SRC: S-04.1]` `[ADDED: open system explanation]`.

**Câu 9 — `LO-3` · Analysis.**
Theo $\Delta G = \Delta H - T\Delta S$:
- Nếu $\Delta H < 0$ (tỏa năng lượng) và $\Delta S > 0$ (tăng độ hỗn loạn) $\rightarrow \Delta G < 0$ luôn (tự phát mọi nhiệt độ).
- Nếu $\Delta H > 0$ (thu năng lượng) và $\Delta S < 0$ (giảm hỗn loạn) $\rightarrow \Delta G > 0$ luôn (không tự phát).
- Nếu $\Delta H$ và $\Delta S$ cùng dấu $\rightarrow$ chiều phản ứng phụ thuộc nhiệt độ $T$ `[SRC: S-04.4]` `[ADDED: thermodynamic analysis]`.

**Câu 10 — `LO-4` · Analysis.**
Liên hợp năng lượng ATP cho phép tế bào thúc đẩy các phản ứng đồng hóa ($\Delta G > 0$) như tổng hợp protein, acid nucleic, glycogen và vận chuyển chủ động qua màng tế bào. Không có liên hợp năng lượng, các phản ứng thiết yếu này sẽ không diễn ra, và tế bào sẽ mất chức năng `[SRC: S-04.4]` `[ADDED: physiological relevance]` `[DOMAIN_RULES: chỉ giải thích cơ chế, không liều/chỉ định]`.

---

## 8. Tài liệu tham khảo (References) {T-04.8}

### 8.1 Danh mục Tài liệu Tham khảo & Đọc thêm {T-04.8.1}

[ADDED: reference section structure] Nguồn `D-04` không có tài liệu tham khảo nào và `APPROVED_REFERENCE_LIST` là `none`. Theo R4, không tự điền tên sách, tác giả, năm, NXB, DOI hay số trang; ba thẻ dưới đây xác định loại tài liệu cần bổ sung.

1. **Giáo trình Vật lý dược (nhiệt động học sinh học, Gibbs, ATP coupling):** `[VERIFY: reference needed for Physical Pharmacy textbook covering bioenergetics, Gibbs energy, and ATP coupling (V-04.04)]`.
2. **Giáo trình Sinh lý (chuyển hóa cơ sở, sinh nhiệt, BMR):** `[VERIFY: reference needed for physiology textbook covering basal metabolism, thermogenesis, and energy coupling (V-04.04)]`.
3. **Tài liệu Dược lý (hoạt động enzym, ATP coupling, kiểm nghiệm chất lượng):** `[VERIFY: reference needed for pharmacology textbook covering enzyme kinetics, ATP coupling, and pharmaceutical quality control (V-04.04)]`.

> **Ghi chú tuân thủ R4.** Ba mục trên là thẻ giữ chỗ, không phải trích dẫn đã xác minh; khi có danh mục chuẩn sẽ định dạng Vancouver.
