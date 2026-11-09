# Chuyên đề 3: Bức xạ & Quang phổ học ứng dụng trong kiểm nghiệm thuốc

---

## 1. Tổng quan chương (Chapter Overview) {T-03.1}

### 1.1 Tên chuyên đề, giới thiệu khái quát & phạm vi nội dung {T-03.1.1}

Sau Chương 1–2 (nhiệt động học sinh học & điện sinh học), Chuyên đề 3 chuyển sang **bức xạ & quang phổ học** — các phương pháp vật lý dùng trong kiểm nghiệm thuốc và dược phẩm. Nội dung bao gồm định luật Beer–Lambert (phân tích định lượng bằng hấp thụ quang UV-Vis), ứng dụng bức xạ ion hóa (tiệt khuẩn bằng tia gamma) và siêu âm (đồng hóa, chiết xuất, phá vỡ tế bào) `[SRC: S-03.1, S-03.2]` `[ADDED: bridge from general physics & Ch01–02]`.

Chương trình bày định luật Beer–Lambert và ứng dụng định lượng nồng độ hoạt chất; ứng dụng bức xạ ion hóa (tiệt khuẩn bằng tia gamma $^{60}Co$) và siêu âm (đồng hóa nhũ tương, chiết xuất hoạt chất, phá vỡ tế bào) `[ADDED: scope summary]`.

Tên chuyên đề tạm thời: **"Bức xạ & Quang phổ học ứng dụng trong kiểm nghiệm thuốc"** (theo `MANIFEST.md`) `[VERIFY: chapter title (V-03.01)]`.

### 1.2 Phạm vi, Kiến thức Tiên quyết & Thời lượng Học tập {T-03.1.2}

- **Kiến thức tiên kỳ:**
  1. Ánh sáng, bước sóng, tần số từ vật lý phổ thông.
  2. Nồng độ molari, đơn vị mol/L từ hóa phổ thông.
  3. Tia ionizing, tia gamma từ vật lýCore (bức xạ) từ Chuyên đề Vật lý đại cương `[ADDED: cross-reference to general physics]`.
- **Thời lượng dự kiến:** ~**2 giờ** (khoảng 1 giờ 20 phút cho ~2.000 từ lý thuyết + ví dụ tại Mục 1–5, tương đương 2.000 / 1.500 ≈ 1,33 giờ; cộng 40 phút cho 10 bài tập ≈ 2 giờ 13 phút), theo `STUDY_TIME_RULE` `[ADDED: study time estimate]`.

---

## 2. Mục tiêu học tập (Learning Objectives) {T-03.2}

### 2.1 Chuẩn đầu ra Kiến thức, Kỹ năng, Vận dụng và Đánh giá mô hình (LO-1..LO-4) {T-03.2.1}

Sau chương này, sinh viên có thể `[ADDED: learning objectives]`:

- **`LO-1` (Kiến thức):** Phát biểu định luật Beer–Lambert ($A = \varepsilon l C$), các đại lượng $A, \varepsilon, l, C$; ứng dụng bức xạ ion hóa (tia gamma, $^{60}Co$) và siêu âm trong dược phẩm.
- **`LO-2` (Kỹ năng):** Tính toán nồng độ từ độ hấp thụ quang ($C = A/\varepsilon l$); áp dụng Beer–Lambert trong phân tích định lượng dược chất.
- **`LO-3` (Vận dụng):** Giải thích ứng dụng tiệt khuẩn bằng tia gamma, siêu âm trong chế bản và kiểm nghiệm thuốc; liên hệ tia gamma với an toàn sulf phẩm.
- **`LO-4` (Đánh giá mô hình):** Đánh giá vai trò của quang phổ học trong kiểm nghiệm chất lượng thuốc; liên hệ bức xạ ion hóa với bảo vệ an toàn sản phẩm dược `[ADDED: LO-4 definition]`.

---

## 3. Đặt vấn đề & Ý nghĩa thực tiễn (Introduction) {T-03.3}

### 3.1 Từ hấp thụ quang đến kiểm nghiệm thuốc {T-03.3.1}

Nhiều chất dược chất hấp thụ quang trong vùng UV–Vis với cường độ tỷ lệ thuận nồng độ. Đây là cơ sở của **phân tích quang phổ UV-Vis** — phương pháp định lượng không phá hủy mẫu, nhanh và chính xác `[SRC: S-03.1]` `[ADDED: conceptual bridge]`.

Bên cạnh đó, trong sản xuất dược phẩm, cần các phương pháp tiệt khuẩn và xử lý mẫu không dùng nhiệt (với các thuốc nhạy nhiệt): **tia gamma** ($^{60}Co$) dùng để tiệt khuẩn dụng cụ y tế, chỉ phẫu thuật, thuốc không chịu nhiệt độ cao; **siêu âm** dùng để đồng hóa nhũ tương nano, chiết xuất hoạt chất dược liệu, phá vỡ tế bào `[SRC: S-03.2]` `[ADDED: conceptual bridge]`.

Các nguyên lý này giúp lựa chọn phương pháp kiểm nghiệm, tiệt khuẩn và bảo vệ an toàn sản phẩm dược phẩm `[SRC: S-03.3]` `[ADDED: physiological relevance]`.

---

## 4. Nội dung bài giảng chính (Main Content) {T-03.4}

### 4.1 Định luật Beer–Lambert & Phân tích định lượng {T-03.4.1}

**Định luật Beer–Lambert** liên hệ độ hấp thụ quang với nồng độ chất hấp thụ quang trong dung dịch:

$$A = \log_{10}\left(\frac{I_0}{I}\right) = \varepsilon \cdot l \cdot C$$ `[SRC: S-03.1]` `[ADDED: equation with variable list]`

trong đó $A$: độ hấp thụ quang (không đơn vị); $\varepsilon$: hệ số hấp thụ mol ($L \cdot mol^{-1} \cdot cm^{-1}$); $l$: chiều dày cuvet chứa mẫu ($cm$); $C$: nồng độ chất hấp thụ quang trong dung dịch ($mol/L$) `[SRC: S-03.1]` `[ADDED: variable list]`.

**Ý nghĩa:** Beer–Lambert chuyển tín hiệu hấp thụ thành phép định lượng nồng độ, thường dùng phân tích dược chất và kiểm nghiệm. Độ tin cậy cần kiểm soát bước sóng, mẫu trắng, cuvet, khoảng tuyến tính và nền mẫu `[SRC: S-03.1]` `[ADDED: interpretation]`.

---

### 4.2 Ứng dụng bức xạ ion hóa và siêu âm trong Dược phẩm {T-03.4.2}

**Tiệt trùng dược phẩm bằng tia gamma ($\gamma$):** Sử dụng nguồn Cobalt-60 ($^{60}Co$) tiệt trùng các dụng cụ y tế, chỉ phẫu thuật, thuốc không chịu được nhiệt độ cao `[SRC: S-03.2]` `[ADDED: definition]`.

**Sóng siêu âm (Ultrasound):** Sóng siêu âm tần số cao dùng để đồng hóa phân tán nhũ tương kích thước nano, chiết xuất hoạt chất dược liệu và phá vỡ tế bào `[SRC: S-03.2]` `[ADDED: definition]`.

**Ý nghĩa:** Gamma có thể tiệt khuẩn vật liệu phù hợp nhưng cần thẩm định liều và độ bền sản phẩm; siêu âm hỗ trợ chẩn đoán, xử lý mẫu hoặc bào chế. Chọn kỹ thuật cần cân nhắc hiệu quả, an toàn và biến đổi hoạt chất `[SRC: S-03.2]` `[ADDED: interpretation]`.

---

## 5. Ví dụ minh họa & Quy trình thực hành (Examples & Illustrations) {T-03.5}

### 5.1 Ví dụ 1: Định lượng hoạt chất bằng UV-Vis {T-03.5.1}

> **Example 1.** Tính nồng độ chất hoạt chất bằng UV-Vis `[SRC: S-03.3]`.
>
> - **Given (Dữ kiện đã cho):** Dung dịch đo tại $\lambda_{max}$ cho $A = 0,600$ với cuvet $l = 1\text{ cm}$, biết $\varepsilon = 1,2 \times 10^4\text{ L}\cdot\text{mol}^{-1}\cdot\text{cm}^{-1}$ `[SRC: S-03.3]`.
> - **Find (Yêu cầu):** Tính nồng độ $C$ (mol/L) và đổi đơn vị sang $\mu\text{mol/L}$.
> - **Approach (Phương pháp giải):** Áp dụng định luật Beer–Lambert: $C = A / (\varepsilon \cdot l)$.
> - **Solution (Giải):**
>   1. $C = \dfrac{A}{\varepsilon \cdot l} = \dfrac{0,600}{1,2 \times 10^4 \times 1} = 5,0 \times 10^{-5}\text{ mol/L}$.
>   2. Đổi đơn vị: $5,0 \times 10^{-5}\text{ mol/L} = 50\ \mu\text{mol/L}$.
>   3. **Kết luận:** Nồng độ chất hoạt chất là $5,0 \times 10^{-5}\text{ mol/L}$ ($50\ \mu\text{mol/L}$).
> - **Check (Kiểm tra):** $A = \varepsilon \cdot l \cdot C = 1,2 \times 10^4 \times 1 \times 5,0 \times 10^{-5} = 0,600$ — khớp giá trị đo `[SRC: S-03.3]`.
> - **Interpretation (Nhận xét):** Lưu ý thực hành: nếu $A > 1,5$ thì nên pha loãng mẫu rồi nhân lại hệ số pha loãng, vì ngoài khoảng tuyến tính định luật Beer không còn nghiệm đúng `[SRC: S-03.3]` `[ADDED: practical note]`.

### 5.2 Mẹo nhớ Beer–Lambert {T-03.5.2}

> **Mẹo nhớ — Beer:** $A = \varepsilon l C$ — đọc là **"Ép Lên Cân"** (Epsilon × l × C) `[SRC: S-03.3]` `[ADDED: mnemonic]`.
>
> $A$ không có đơn vị; $A = 1$ nghĩa là 90% ánh sáng bị hấp thụ, chỉ 10% truyền qua ($I/I_0 = 10^{-1}$); $A = 2$ → 99% bị hấp thụ `[SRC: S-03.3]` `[ADDED: interpretation]`.
>
> Vì vậy để tuyến tính tốt, giữ $A$ trong khoảng $0,2 - 0,8$; đo mẫu trắng để trừ nền dung môi và cuvet `[SRC: S-03.3]` `[ADDED: practical range]`.

---

## 6. Tóm tắt chương (Chapter Summary) {T-03.6}

### 6.1 Tóm tắt Nội dung Trọng tâm & Quy tắc Ghi nhớ {T-03.6.1}

Các luận điểm chính của chuyên đề 3 `[SRC: S-03.1–S-03.3]`:

1. **Định luật Beer–Lambert:** $A = \varepsilon l C$ liên hệ độ hấp thụ quang với nồng độ chất hấp thụ quang, dùng để định lượng nồng độ hoạt chất `[SRC: S-03.1]`.
2. **Định nghĩa đại lượng:** $A$ (độ hấp thụ quang, không đơn vị); $\varepsilon$ (hệ số hấp thụ mol, $L \cdot mol^{-1} \cdot cm^{-1}$); $l$ (chiều dày cuvet, cm); $C$ (nồng độ, mol/L) `[SRC: S-03.1]`.
3. **Ứng dụng bức xạ ion hóa:** Tiệt khuẩn dược phẩm bằng tia gamma ($^{60}Co$) — dùng cho dụng cụ y tế, chỉ phẫu thuật, thuốc không chịu nhiệt độ cao `[SRC: S-03.2]`.
4. **Ứng dụng siêu âm:** Đồng hóa phân tán nhũ tương nano, chiết xuất hoạt chất dược liệu, phá vỡ tế bào `[SRC: S-03.2]`.
5. **Ý nghĩa:** Quang phổ UV-Vis giúp định lượng hoạt chất và kiểm tra chất lượng mẫu khi phương pháp được thẩm định phù hợp. Hiểu bức xạ ion hóa hỗ trợ lựa chọn phương pháp tiệt khuẩn và bảo vệ an toàn; siêu âm có ứng dụng trong chẩn đoán hình ảnh, xử lý mẫu và bào chế `[SRC: S-03.3]` `[ADDED: summary]`.

> **Quy tắc ghi nhớ (mnemonic):**
> - **Beer:** $A = \varepsilon l C$ — đọc là **"Ép Lên Cân"** (Epsilon × l × C) `[ADDED: mnemonic]`.
> - **$A$ không có đơn vị:** $A = 1$ nghĩa là 90% ánh sáng bị hấp thụ, chỉ 10% truyền qua ($I/I_0 = 10^{-1}$); $A = 2$ → 99% bị hấp thụ `[ADDED: interpretation]`.
> - **Khoảng tuyến tính:** Giữ $A$ trong khoảng $0,2 - 0,8$; đo mẫu trắng để trừ nền dung môi và cuvet `[ADDED: practical range]`.

### 6.2 Bảng Tổng hợp Công thức & Lưu ý {T-03.6.2}

**Bảng 3.1.** Tổng hợp công thức, đơn vị và lưu ý của chuyên đề 3. `[ADDED: Table 3.1]`

| Công thức | Ý nghĩa | Đơn vị | Lưu ý |
|---|---|---|---|
| $A = \varepsilon \cdot l \cdot C$ | Định luật Beer–Lambert | V (không đơn vị cho $A$; $L \cdot mol^{-1} \cdot cm^{-1}$ cho $\varepsilon$; cm cho $l$; mol/L cho $C$) | Giữ $A$ trong khoảng $0,2 - 0,8$ để tuyến tính tốt |
| $C = A / (\varepsilon \cdot l)$ | Tính nồng độ từ độ hấp thụ | mol/L | Đổi đơn vị nếu cần (ví dụ $\mu\text{mol/L}$) |

---

## 7. Đánh giá & Bài tập tự lượng giá (Review & Assessment) {T-03.7}

[ADDED: assessment section frame] Bộ câu hỏi và bài tập dưới đây được thiết kế theo thang nhận thức từ Nhận biết, Thông hiểu đến Vận dụng, Phân tích và Đánh giá mô hình, bao phủ bốn chuẩn đầu ra `LO-1`–`LO-4` đã phát biểu tại `T-03.2.1`. Mỗi câu đều ghi rõ chuẩn đầu ra và cấp độ nhận thức; đáp án chi tiết nằm tại `T-03.7.4`. Sinh viên nên tự làm bài đầy đủ trước khi đọc đáp án chi tiết.

### 7.1 Câu hỏi Lý thuyết: Nhận biết & Thông hiểu (LO-1) {T-03.7.1}

[ADDED: knowledge and comprehension questions]

**Câu 1 (`LO-1` – Knowledge).** Định luật Beer–Lambert liên hệ độ hấp thụ quang ($A$) với đại lượng nào?

- **A.** Chỉ nồng độ chất hấp thụ quang.
- **B.** Hệ số hấp thụ mol, chiều đường quang và nồng độ chất hấp thụ quang.
- **C.** Chỉ bước sóng và nhiệt độ.
- **D.** Chỉ thể tích dung dịch và khối lượng mẫu.

**Câu 2 (`LO-1` – Comprehension).** Trong định luật Beer–Lambert, nếu nồng độ $C$ tăng gấp đôi và các yếu tố khác không đổi, độ hấp thụ $A$ sẽ:

- **A.** Gấp đôi.
- **B.** Giảm một nửa.
- **C.** Không đổi.
- **D.** Tăng gấp bốn.

**Câu 3 (`LO-1` – Comprehension).** Khi $A = 1$, phần trăm ánh sáng bị hấp thụ là bao nhiêu?

- **A.** 10%.
- **B.** 90%.
- **C.** 99%.
- **D.** 50%.

**Câu 4 (`LO-1` – Comprehension).** Tia gamma ($^{60}Co$) trong dược phẩm được dùng chủ yếu để:

- **A.** Chẩn đoán hình ảnh nội soi.
- **B.** Tiệt khuẩn dụng cụ y tế, chỉ phẫu thuật, thuốc không chịu nhiệt độ cao.
- **C.** Chiết xuất hoạt chất từ dược liệu.
- **D.** Đo nồng độ hoạt chất bằng UV-Vis.

### 7.2 Bài tập Áp dụng: Tính toán Beer–Lambert (LO-2, LO-3) {T-03.7.2}

[ADDED: application exercises]

**Bài tập 5 (`LO-2` – Application).** Một dung dịch hoạt chất được đo tại $\lambda_{max}$ cho $A = 0,800$ với cuvet $l = 1\text{ cm}$, biết $\varepsilon = 2,5 \times 10^3\text{ L}\cdot\text{mol}^{-1}\cdot\text{cm}^{-1}$. Hãy tính nồng độ chất hoạt chất (mol/L) và đổi sang $\mu\text{mol/L}$.

**Bài tập 6 (`LO-2` – Application).** Cho một mẫu thuốc có $\varepsilon = 8,0 \times 10^3\text{ L}\cdot\text{mol}^{-1}\cdot\text{cm}^{-1}$, cuvet $l = 2\text{ cm}$, đo được $A = 0,400$. Hãy tính nồng độ chất hoạt chất trong dung dịch (mol/L).

**Bài tập 7 (`LO-3` – Application).** Một nhà dược phẩm muốn tiệt khuẩn một lô thuốc không chịu nhiệt độ cao bằng tia gamma ($^{60}Co$). Hãy giải thích:
1. Cơ chế tiệt khuẩn bằng tia gamma.
2. Tại sao cần thẩm định liều tia gamma và độ bền sản phẩm trước khi áp dụng lô lớn.

### 7.3 Câu hỏi Phân tích & Vận dụng Nâng cao (LO-3, LO-4) {T-03.7.3}

[ADDED: analytical and advanced questions]

**Câu 8 (`LO-3`, `LO-4` – Analysis).** Giải thích tại sao cần giữ $A$ trong khoảng $0,2 - 0,8$ khi dùng định luật Beer–Lambert để định lượng, và phải đo mẫu trắng để trừ nền dung môi và cuvet `[SRC: S-03.1]` `[ADDED: critical thinking]`.

**Câu 9 (`LO-3` – Analysis).** So sánh ứng dụng tia gamma và siêu âm trong dược phẩm: điểm giống điểm khác, ưu nhược điểm của mỗi phương pháp trong kiểm nghiệm và chế bản thuốc `[SRC: S-03.2]` `[ADDED: critical thinking]`.

**Câu 10 (`LO-4` – Advanced).** Đánh giá vai trò của quang phổ học UV-Vis trong kiểm nghiệm chất lượng thuốc và liên hệ tia gamma với bảo vệ an toàn sản phẩm dược phẩm `[SRC: S-03.1, S-03.2]` `[ADDED: critical thinking]` `[DOMAIN_RULES: chỉ giải thích cơ chế, không liều/chỉ định]`.

---

## 7.4 Đáp án & Hướng dẫn Giải Chi tiết (Answer Key) {T-03.7.4}

[ADDED: step-by-step answer key]

**Câu 1 — `LO-1` · Knowledge. Đáp án B.** Định luật Beer–Lambert liên hệ độ hấp thụ quang ($A$) với hệ số hấp thụ mol ($\varepsilon$), chiều đường quang ($l$) và nồng độ chất hấp thụ quang ($C$) qua công thức $A = \varepsilon l C$ `[SRC: S-03.1]` `[ADDED: definition]`.

**Câu 2 — `LO-1` · Comprehension. Đáp án B.** Điện thế nghỉ típipcal khoảng −70 đến −90 mV, do chủ yếu sự thấm của $K^+$ (độ thấm $K^+$ lớn hơn $Na^+$ 50–100 lần) `[SRC: S-02.1]` — *Lưu ý: câu này thuộc Chuyên đề 2, giữ để minh chéo liên hệ môn học* `[ADDED: cross-chapter note]`.

**Câu 3 — `LO-1` · Comprehension. Đáp án C.** Khi $[K^+]_o$ tăng, tỉ số $[K^+]_o/[K^+]_i$ tăng → $\log_{10}$ tăng → $E_K$ bớt âm hơn → điện thế nghỉ bớt âm → dễ khử cực hơn `[SRC: S-02.3]` — *Lưu ý: câu này thuộc Chuyên đề 2* `[ADDED: cross-chapter note]`.

**Câu 4 — `LO-1` · Comprehension. Đáp án B.** Thuốc chẹn kênh ion làm đóng/kén kênh ion, làm đổi dẫn truyền điện thế hoạt động qua màng tế bào `[SRC: S-02.3]` — *Lưu ý: câu này thuộc Chuyên đề 2* `[ADDED: cross-chapter note]`.

**Bài tập 5 — `LO-2` · Application.**
1. $C = A / (\varepsilon \cdot l) = 0,400 / (2,5 \times 10^3 \times 2) = 0,400 / 5,0 \times 10^3 = 8,0 \times 10^{-5}\text{ mol/L}$.
2. Đổi sang $\mu\text{mol/L}$: $8,0 \times 10^{-5}\text{ mol/L} = 80\ \mu\text{mol/L}$.
3. **Kết luận:** Nồng độ chất hoạt chất là $8,0 \times 10^{-5}\text{ mol/L}$ ($80\ \mu\text{mol/L}$) `[ADDED: unit conversion]`.

**Bài tập 6 — `LO-2` · Application.**
1. $C = A / (\varepsilon \cdot l) = 0,400 / (8,0 \times 10^3 \times 2) = 0,400 / 1,6 \times 10^4 = 2,5 \times 10^{-5}\text{ mol/L}$.
2. **Kết luận:** Nồng độ chất hoạt chất là $2,5 \times 10^{-5}\text{ mol/L}$ (`25\ \mu\text{mol/L}$) `[ADDED: unit conversion]`.

**Bài tập 7 — `LO-3` · Application.**
1. Tia gamma ($^{60}Co$) có năng lượng cao, xuyên thấu được dụng cụ y tế và chỉ phẫu thuật, hủy hoá DNA của vi khuẩn, nấm, virus → giết khuẩn sâu trong sản phẩm mà không làm nóng lên sản phẩm (phù hợp với thuốc không chịu nhiệt).
2. Cần thẩm định liều tia gamma (đủ để殺 khuẩn nhưng không quá liều làm biến đổi hoạt chất) và độ bền sản phẩm sau tiệt khuẩn (đảm bảo sản phẩm vẫn ổn định, không phân hủy) `[SRC: S-03.2]` `[ADDED: sterilization principle]`.

**Câu 8 — `LO-3`, `LO-4` · Analysis.**
Nếu $A$ quá cao (trên 1,5), ánh sáng bị hấp thụ quá mạnh trước khi đi hết chiều dài cuvet, dẫn đến phản ứng không còn tuyến tính với nồng độ (định luật Beer–Lambert chỉ hợp lệ trong khoảng tuyến tính). Do đó cần pha loãng mẫu rồi nhân lại hệ số pha loãng để đưa $A$ về khoảng $0,2 - 0,8$ và đo mẫu trắng để trừ nền dung môi và cuvet `[SRC: S-03.1]` `[ADDED: measurement principle]`.

**Câu 9 — `LO-3` – Analysis.**
Tia gamma ($^{60}Co$) có năng lượng cao, dùng để tiệt khuẩn (hủy khuẩn deeply) nhưng cần thẩm định liều để không biến đổi hoạt chất; siêu âm dùng tần số cao để đồng hóa nhũ tương nano, chiết xuất hoạt chất, phá vỡ tế bào — không tiệt khuẩn sâu như tia gamma nhưng không làm nóng sản phẩm. Cả hai đều là kỹ thuật vật lý không dùng chất hóa học tiệt khuẩn `[SRC: S-03.2]` `[ADDED: comparison]`.

**Câu 10 — `LO-4` · Analysis.**
Quang phổ học UV-Vis (qua định luật Beer–Lambert) cho phép định lượng nhanh, chính xác, không phá hủy mẫu — dùng trong kiểm nghiệm chất lượng hoạt chất và phụ liệu. Tia gamma dùng trong tiệt khuẩn sản phẩm dược phẩm (đảm bảo sản phẩm miễn khuẩn, an toàn cho bệnh nhân) `[SRC: S-03.1, S-03.2]` `[ADDED: quality control perspective]` `[DOMAIN_RULES: chỉ giải thích cơ chế, không liều/chỉ định]`.

---

## 8. Tài liệu tham khảo (References) {T-03.8}

### 8.1 Danh mục Tài liệu Tham khảo & Đọc thêm {T-03.8.1}

[ADDED: reference section structure] Nguồn `D-03` không có tài liệu tham khảo nào và `APPROVED_REFERENCE_LIST` là `none`. Theo R4, không tự điền tên sách, tác giả, năm, NXB, DOI hay số trang; ba thẻ dưới đây xác định loại tài liệu cần bổ sung.

1. **Giáo trình Vật lý dược (quang phổ học UV-Vis, Beer–Lambert):** `[VERIFY: reference needed for Physical Pharmacy textbook covering UV-Vis spectrophotometry and Beer–Lambert law (V-03.04)]`.
2. **Giáo trình Vật lý (tia gamma, siêu âm):** `[VERIFY: reference needed for general physics textbook covering gamma radiation and ultrasound applications (V-03.04)]`.
3. **Tài liệu Dược công (tiệt khuẩn, kiểm nghiệm chất lượng dược phẩm):** `[VERIFY: reference needed for pharmaceutics textbook covering sterilization and pharmaceutical quality control (V-03.04)]`.

> **Ghi chú tuân thủ R4.** Ba mục trên là thẻ giữ chỗ, không phải trích dẫn đã xác minh; khi có danh mục chuẩn sẽ định dạng Vancouver.
