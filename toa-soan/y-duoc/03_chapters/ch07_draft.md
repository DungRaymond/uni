# Chuyên đề 7: Trao đổi chất qua màng tế bào

---

## 1. Tổng quan chương (Chapter Overview) {T-07.1}

### 1.1 Tên chuyên đề, giới thiệu khái quát & phạm vi nội dung {T-07.1.1}

Màng tế bào là lớp lipid kép dày khoảng 7–10 nm, bao bọc toàn bộ tế bào sống, đóng vai trò là ranh giới phân định giữa môi trường nội bào và ngoại bào. Màng không chỉ là một lớp baoכסאי mà còn là một đại diện siêu phức: nó chọn lọc chất nào vào, chất nào ra, điều hòa thông tin từ môi trường ngoài vào trong tế bào và tạo điều kiện cho các tương tác tế bào–tế bào. Tất cả quá trình sinh học cơ bản — từ nuôi dưỡng tế bào, truyền tín hiệu thần kinh, co cơ, đến hoạt động của hệ miễn dịch — đều diễn ra trên hoặc qua màng tế bào `[SRC: S-07.1]` `[ADDED: structural frame and pedagogical overview]`.

Chuyên đề 7 trình bày cấu trúc màng tế bào, gradient nồng độ và điện thế màng; khuếch tán đơn giản và thẩm thấu; khuếch tán được hỗ trợ (kênh ion và chất tải); vận chuyển chủ động sơ cấp (bơm $Na^+/K^+$-ATPase) và thứ cấp (đồng vận chuyển và đối vận chuyển); nhập bào, xuất bào và vận chuyển qua biểu mô; và liên hệ dược lý & lâm sàng (hấp thụ thuốc, SGLT2, thuốc chẹn kênh ion, dung dịch ưu trương/nhược trương) `[ADDED: scope summary]`.

Tên chuyên đề tạm thời: **"Trao đổi chất qua màng tế bào"** (theo `MANIFEST.md`) `[VERIFY: chapter title (V-07.01)]`.

### 1.2 Phạm vi, Kiến thức Tiên quyết & Thời lượng Học tập {T-07.1.2}

- **Kiến thức tiên kỳ:**
  1. Hệ nhiệt động (côlap/kín/mở), nguyên lý I & II nhiệt động học từ Chuyên đề 1 & Chương 4 ly-duoc.
  2. Ion, số hiệu ion, nồng độ molari từ hóa phổ thông.
  3. Màng tế bào (lớp lipid kép) từ sinh lý đại cương `[ADDED: cross-reference to Ch01 & general biology]`.
- **Thời lượng dự kiến:** ~**2 giờ 30 phút** (khoảng 1 giờ 50 phút cho ~2.000 từ lý thuyết + ví dụ tại Mục 1–5, tương đương 2.000 / 1.500 ≈ 1,33 giờ; cộng 40 phút cho 10 bài tập ≈ 2 giờ 13 phút), theo `STUDY_TIME_RULE` `[ADDED: study time estimate]`.

---

## 2. Mục tiêu học tập (Learning Objectives) {T-07.2}

### 2.1 Chuẩn đầu ra Kiến thức, Kỹ năng, Vận dụng và Đánh giá mô hình (LO-1..LO-4) {T-07.2.1}

Sau chương này, sinh viên có thể `[ADDED: learning objectives]`:

- **`LO-1` (Kiến thức):** Phát biểu cấu trúc màng tế bào, gradient nồng độ và điện thế màng; phân loại vận chuyển chất qua màng (khuếch tán đơn giản, thẩm thấu, khuếch tán được hỗ trợ, vận chuyển chủ động sơ cấp & thứ cấp, nhập/xuất bào).
- **`LO-2` (Kỹ năng):** Tính toán điện thế nghỉ của ion đơn lẻ bằng phương trình Nernst ($E_{ion} = \frac{RT}{zF}\ln\frac{[ion]_o}{[ion]_i} \approx \frac{61,5}{z}\log_{10}\frac{[ion]_o}{[ion]_i}$ ở $37^\circ\text{C}$); phân biệt vận chuyển chủ động sơ cấp (dùng ATP) và thứ cấp (dùng gradient ion).
- **`LO-3` (Vận dụng):** Giải thích hấp thụ thuốc ở ruột/thận, vận chuyển glucose qua SGLT2, tác dụng của thuốc chẹn kênh ion trên điện thế màng & hoạt động tế bào.
- **`LO-4` (Đánh giá mô hình):** Đánh giá vai trò của màng tế bào trong sự sống tế bào, liên hệ biến đổi màng tế bào với bệnh lý & tác dụng của thuốc chẹn kênh ion `[ADDED: LO-4 definition]`.

---

## 3. Đặt vấn đề & Ý nghĩa thực tiễn (Introduction) {T-07.3}

### 3.1 Từ màng tế bào đến vận chuyển chất {T-07.3.1}

Màng tế bào là lớp lipid kép dày khoảng 7–10 nm, bao bọc toàn bộ tế bào sống. Màng không chỉ là một lớp bao ₍bọc₎ mà còn là một bộ lọc điện hóa học chi tiết: một số chất (như nước, oxy $O_2$, cacbon dioxide $CO_2$) đi qua dễ dàng; ion ($Na^+, K^+, Ca^{2+}, Cl^-$) và chất phân cực thường cần kênh ion hoặc chất tải `[SRC: S-07.1]` `[ADDED: conceptual bridge]`.

Mỗi chất di chuyển theo **gradient nồng độ** và (với ion) **điện thế màng**. Với ion, lực thúc đẩy tổng hợp gọi là **gradient điện hóa**. Phương trình Nernst mô tả điện thế cân bằng của một ion đơn lẻ:

$$E_{ion}=\frac{RT}{zF}\ln\left(\frac{[ion]_{ngoài}}{[ion]_{trong}}\right)$$ `[SRC: S-07.1]` `[ADDED: definition]`

trong đó $z$ là hóa trị ion, $R$ là hằng số khí, $T$ là nhiệt độ tuyệt đối và $F$ là hằng số Faraday `[SRC: S-07.1]` `[ADDED: variable list]`.

Mỗi chất di chuyển qua màng theo nhiều cách: khuếch tán đơn giản, thẩm thấu, khuếch tán được hỗ trợ (kênh ion & chất tải), vận chuyển chủ động sơ cấp (bơm ion dùng ATP) và vận chuyển chủ động thứ cấp (dùng gradient ion do bơm sơ cấp tạo ra) `[SRC: S-07.2, S-07.3, S-07.4, S-07.5]` `[ADDED: classification]`.

Nhập bào, xuất bào và vận chuyển qua biểu mô hoàn thành hệ thống vận chuyển chất qua màng tế bào `[SRC: S-07.6]` `[ADDED: transcellular/paracellular transport]`.

Các nguyên lý này giúp hiểu hấp thụ thuốc ở ruột/thận, vận chuyển glucose qua SGLT2, tác dụng của thuốc chẹn kênh ion trên điện thế màng & hoạt động tế bào `[SRC: S-07.7]` `[ADDED: physiological relevance]`.

---

## 4. Nội dung bài giảng chính (Main Content) {T-07.4}

### 4.1 Cấu trúc Màng & Gradient {T-07.4.1}

**Màng tế bào** là lớp lipid kép dày khoảng 7–10 nm, có cholesterol, protein màng và carbohydrate bề mặt. Màng tế bào có tính **bán thấm chọn lọc**: một số chất (như nước, oxy $O_2$, cacbon dioxide $CO_2$) đi qua dễ dàng; ion ($Na^+, K^+, Ca^{2+}, Cl^-$) và chất phân cực thường cần kênh ion hoặc chất tải `[SRC: S-07.1]` `[ADDED: definition]`.

Mỗi chất di chuyển theo **gradient nồng độ** và (với ion) **điện thế màng**. Với ion, lực thúc đẩy tổng hợp gọi là **gradient điện hóa**. Phương trình Nernst mô tả điện thế cân bằng của một ion đơn lẻ:

$$E_{ion}=\frac{RT}{zF}\ln\left(\frac{[ion]_{ngoài}}{[ion]_{trong}}\right)$$ `[SRC: S-07.1]` `[ADDED: equation with variable list]`

trong đó $z$ là hóa trị ion, $R$ là hằng số khí, $T$ là nhiệt độ tuyệt đối và $F$ là hằng số Faraday `[SRC: S-07.1]` `[ADDED: variable list]`.

---

### 4.2 Khuếch tán đơn giản & Thẩm thấu {T-07.4.2}

**Khuếch tán đơn giản:** chất đi xuôi gradient qua lớp lipid hoặc lỗ màng, không tiêu thụ ATP `[SRC: S-07.2]` `[ADDED: definition]`.

**Thẩm thấu:** nước di chuyển qua màng bán thấm về phía có nồng độ chất tan cao hơn. Aquaporin tạo đường dẫn nước nhanh ở nhiều mô `[SRC: S-07.2]` `[ADDED: definition]`.

**Áp suất thẩm thấu:** gần đúng theo định luật van ’t Hoff, $\pi=iCRT$ với dung dịch loãng `[SRC: S-07.2]` `[ADDED: equation with variable list]`.

Trong thực hành sinh lý, cần phân biệt osmolality (mOsm/kg nước) với osmolarity (mOsm/L dung dịch) `[SRC: S-07.2]` `[ADDED: distinction note]`.

---

### 4.3 Khuếch tán được hỗ trợ {T-07.4.3}

Chất đi xuôi gradient qua protein màng, không tiêu thụ ATP trực tiếp. **Kênh ion** tạo lỗ chọn lọc, có thể đóng/mở theo điện thế, liên hệ hoặc lực cơ học; ví dụ kênh $Na^+$, $K^+$, $Ca^{2+}$ và $Cl^-$ `[SRC: S-07.3]` `[ADDED: definition]`.

**Chất tải** gắn chất rồi đổi cấu hình; ví dụ GLUT vận chuyển glucose theo gradient. Tính chọn lọc và bão hòa khiến tốc độ chất tải có giới hạn, khác khuếch tán đơn giản `[SRC: S-07.3]` `[ADDED: definition]`.

---

### 4.4 Vận chuyển chủ động sơ cấp {T-07.4.4}

**Bơm dùng trực tiếp năng lượng ATP** để chuyển chất ngược gradient điện hóa. Bơm $Na^+/K^+$-ATPase mỗi chu kỳ thủy phân một ATP, đưa $3\ Na^+$ ra và $2\ K^+$ vào; nhờ vậy duy trì thể tích tế bào, gradient ion và điều kiện cho vận chuyển thứ cấp `[SRC: S-07.4]` `[ADDED: definition]`.

$Ca^{2+}$-ATPase đưa $Ca^{2+}$ khỏi bào tương hoặc vào lưới nội cơ tương; $H^+/K^+$-ATPase ở tế bào viền dạ dày bài tiết acid, là đích của thuốc ức chế bơm proton `[SRC: S-07.4]` `[ADDED: clinical relevance]`.

---

### 4.5 Vận chuyển chủ động thứ cấp {T-07.4.5}

Không dùng trực tiếp năng lượng ATP tại chất tải; năng lượng đến từ gradient ion do bơm sơ cấp tạo ra. **Đồng vận chuyển (symport)** đưa hai hay nhiều chất cùng chiều, ví dụ đồng vận chuyển $Na^+$-glucose (SGLT) ở ruột/thận `[SRC: S-07.5]` `[ADDED: definition]`.

**Đối vận chuyển (antiport)** đưa chất theo hai chiều ngược nhau, ví dụ trao đổi $Na^+/Ca^{2+}$. Ức chế bơm $Na^+/K^+$-ATPase có thể làm suy giảm gián tiếp các vận chuyển phụ thuộc gradient $Na^+$ `[SRC: S-07.5]` `[ADDED: definition]`.

---

### 4.6 Nhập bào, Xuất bào & Vận chuyển qua Biểu mô {T-07.4.6}

**Nhập bào:** màng lõm vào tạo túi; gồm thực bào hạt lớn, ẩm bào dịch và nhập bào qua thụ thể có chọn lọc `[SRC: S-07.6]` `[ADDED: definition]`.

**Xuất bào:** túi hòa màng giải phóng chất, ví dụ phóng thích chất dẫn truyền thần kinh, hormone và enzym `[SRC: S-07.6]` `[ADDED: definition]`.

**Vận chuyển qua biểu mô:** chất có thể đi xuyên tế bào (transcellular) hoặc qua khe liên bào (paracellular); tính phân cực mặt lòng ống/mặt đáy-bên quyết định chiều hấp thụ và bài tiết `[SRC: S-07.6]` `[ADDED: definition]`.

---

## 5. Ví dụ minh họa & Quy trình thực hành (Examples & Illustrations) {T-07.5}

### 5.1 Ví dụ 1: Phương trình Nernst với $K^+$ {T-07.5.1}

> **Example 1.** Tính điện thế cân bằng của ion kali ($K^+$) ở $37^\circ\text{C}$ `[SRC: S-07.1]`.
>
> - **Given (Dữ liệu đã cho):** $[K^+]_{ngoài} = 4\text{ mmol/L}$, $[K^+]_{trong} = 140\ \text{mmol/L}$, $z = +1$ `[SRC: S-07.1]`.
> - **Find (Yêu cầu):** Tính điện thế cân bằng $E_K$ của ion kali $[SRC: S-07.1]$.
> - **Approach (Phương pháp giải):** Áp dụng phương trình Nernst $E_K = 61,5 \times \log_{10}\frac{[K^+]_o}{[K^+]_i}$ ở $37^\circ\text{C}$ `[SRC: S-07.1]`.
> - **Solution (Giải):**
>   1. Tỉ số: $\frac{[K^+]_o}{[K^+]_i} = \frac{4}{140} = 0,0286$.
>   2. Logarit: $\log_{10}(0,0286) \approx -1,54$.
>   3. Tính: $E_K = 61,5 \times (-1,54) \approx -95\text{ mV}$.
>   4. **Kết luận:** $E_K \approx -95\text{ mV}$, rất gần điện thế nghỉ của tế bào (khoảng $-70$ đến $-90\text{ mV}$), vì màng nghỉ thấm nhiều với $K^+$ `[SRC: S-07.1]` `[ADDED: interpretation]`.
> - **Check (Kiểm tra):** $E_K$ nằm trong khoảng điện thế nghỉ típipcal ($-70$ đến $-90\text{ mV}$) `[SRC: S-06.4]$ `[ADDED: cross-check]`.
> - **Interpretation (Nhận xét):** Màng tế bào thấm nhiều với $K^+$ hơn $Na^+$, do đó điện thế nghỉ của tế bào gần với điện thế cân bằng của $K^+$ (khoảng $-90\text{ mV}$) chứ không phải gần với điện thế cân bằng của $Na^+$ (khoảng $+60\text{ mV}$) `[SRC: S-06.4]$ `[ADDED: physiological interpretation]`.

### 5.2 Mẹo nhớ {T-07.5.2}

> **Mẹo nhớ — Phương trình Nernst:** $E = 61,5 \log\frac{\text{ngoài}}{\text{trong}}$ (mV) cho ion $+1$ — "ngoài chia trong", kết quả âm khi ion dương tập trung nhiều ở trong `[SRC: S-07.1]$ `[ADDED: mnemonic]`.
>
> **Mẹo nhớ — Vận chuyển chủ động sơ cấp:** $3\ Na^+$ ra, $2\ K^+$ vào (bơm $Na^+/K^+$-ATPase) `[SRC: S-07.4]` `[ADDED: mnemonic]`.
>
> **Mẹo nhớ — Vận chuyển chủ động thứ cấp:** đồng vận chuyển (cùng chiều), đối vận chuyển (chiều ngược) $[SRC: S-07.5]$ `[ADDED: mnemonic]`.

---

## 6. Tóm tắt chương (Chapter Summary) {T-07.6}

### 6.1 Tóm tắt Nội dung Trọng tâm & Quy tắc Ghi nhớ {T-07.6.1}

Các luận điểm chính của chuyên đề 7 `[SRC: S-07.1–S-07.8]`:

1. **Màng tế bào** là lớp lipid kép dày khoảng 7–10 nm, có tính bán thấm chọn lọc: ion và chất phân cực thường cần kênh ion hoặc chất tải `[SRC: S-07.1]`.
2. **Mỗi chất di chuyển theo gradient nồng độ và (với ion) điện thế màng.** Phương trình Nernst tính điện thế cân bằng của ion đơn lẻ: $E_{ion} = \frac{RT}{zF}\ln\frac{[ion]_{ngoài}}{[ion]_{trong}}$ `[SRC: S-07.1]`.
3. **Khuếch tán đơn giản:** chất đi xuôi gradient qua lớp lipid hoặc lỗ màng, không tiêu thụ ATP `[SRC: S-07.2]`.
4. **Thẩm thấu:** nước di chuyển qua màng bán thấm về phía có nồng độ chất tan cao hơn; áp suất thẩm thấu gần đúng theo định luật van ’t Hoff, $\pi=iCRT$ `[SRC: S-07.2]`.
5. **Khuếch tán được hỗ trợ:** chất đi xuôi gradient qua protein màng, không tiêu thụ ATP trực tiếp. Kênh ion tạo lỗ chọn lọc; chất tải gắn chất rồi đổi cấu hình; tính chọn lọc và bão hòa khiến tốc độ chất tải có giới hạn, khác khuếch tán đơn giản `[SRC: S-07.3]`.
6. **Vận chuyển chủ động sơ cấp:** bơm dùng trực tiếp năng lượng ATP để chuyển chất ngược gradient điện hóa. Bơm $Na^+/K^+$-ATPase mỗi chu kỳ thủy phân một ATP, đưa $3\ Na^+$ ra và $2\ K^+$ vào `[SRC: S-07.4]`.
7. **Vận chuyển chủ động thứ cấp:** không dùng trực tiếp năng lượng ATP tại chất tải; năng lượng đến từ gradient ion do bơm sơ cấp tạo ra. Đồng vận chuyển (symport) đưa hai hay nhiều chất cùng chiều; đối vận chuyển (antiport) đưa chất theo hai chiều ngược nhau `[SRC: S-07.5]`.
8. **Nhập bào, xuất bào & vận chuyển qua biểu mô:** nhập bào: màng lõm vào tạo túi; xuất bào: túi hòa màng giải phóng chất; vận chuyển qua biểu mô: chất có thể đi xuyên tế bào (transcellular) hoặc qua khe liên bào (paracellular); tính phân cực mặt lòng ống/mặt đáy-bên quyết định chiều hấp thụ và bài tiết `[SRC: S-07.6]`.
9. **Liên hệ dược lý & lâm sàng:** đường dùng và tính tan ảnh hưởng hấp thụ thuốc; chất vận chuyển ở ruột, gan, thận và hàng rào máu–não có thể làm thay đổi nồng độ thuốc. SGLT2 là đích của thuốc ức chế đồng vận chuyển $Na^+$-glucose ở thận; thuốc chẹn kênh ion thay đổi tính hưng phấn tế bào. Dung dịch ưu trương kéo nước khỏi tế bào; dung dịch nhược trương có thể làm tế bào trương. Nội dung thực tế phụ thuộc thành phần dung dịch, tốc độ truyền và tình trạng người bệnh `[SRC: S-07.7]`.

> **Quy tắc ghi nhớ (mnemonic):**
> - **Nernst:** $E = 61,5 \log\frac{\text{ngoài}}{\text{trong}}$ (mV) cho ion $+1$ — "ngoài chia trong", kết quả âm khi ion dương tập trung nhiều ở trong `[ADDED: mnemonic]`.
> - **Bơm $Na^+/K^+$-ATPase:** mỗi chu kỳ thủy phân một ATP, đưa $3\ Na^+$ ra và $2\ K^+$ vào `[ADDED: mnemonic]`.
> - **Đồng vận chuyển / đối vận chuyển:** đồng vận chuyển đưa hai hay nhiều chất cùng chiều; đối vận chuyển đưa chất theo hai chiều ngược nhau `[ADDED: mnemonic]`.

### 6.2 Bảng Tổng hợp Đại lượng & Đơn vị {T-07.6.2}

**Bảng 7.1.** Tổng hợp đại lượng, công thức & đơn vị của chuyên đề 7 `[ADDED: Table 7.1]`

| Đại lượng | Công thức | Đơn vị | Ý nghĩa & Ứng dụng |
|---|---|---|---|
| Điện thế cân bằng ion đơn lẻ | $E_{ion} = \frac{RT}{zF}\ln\frac{[ion]_o}{[ion]_i}$ | mV | Tính điện thế cân bằng của ion đơn lẻ (ví dụ $E_K \approx -90\text{ mV}$) |
| Áp suất thẩm thấu | $\pi = iCRT$ | atm (hoặc Pa) | Áp suất cần thiết để ngăn chặn thẩm thấu của dung dịch loãng |
| Công suất điện | $P = UI = I^2R = \frac{U^2}{R}$ | W | Tốc độ tiêu hao năng lượng điện |
| Nhiệt lượng | $Q = I^2Rt$ | J | Nhiệt lượng do dòng điện đi qua điện trở |
| Hằng số thời gian màng | $\tau = R_m C_m$ | s | Thời gian cần để điện thế màng đạt khoảng 63% giá trị cuối cùng khi nạp |
| Điện thế cân bằng ion đơn lẻ | $E_{ion}$ | mV | Tính điện thế cân bằng của ion đơn lẻ (ví dụ $E_K \approx -90\text{ mV}$) |

---

## 7. Đánh giá & Bài tập tự lượng giá (Review & Assessment) {T-07.7}

[ADDED: assessment section frame] Bộ câu hỏi và bài tập dưới đây được thiết kế theo thang nhận thức từ Nhận biết, Thông hiểu đến Vận dụng, Phân tích & Đánh giá mô hình, bao phủ bốn chuẩn đầu ra `LO-1`–`LO-4` đã phát biểu tại `T-07.2.1`. Mỗi câu đều ghi rõ chuẩn đầu ra & cấp độ nhận thức; đáp án chi tiết nằm tại `T-07.7.4`. Sinh viên nên tự làm bài đầy đủ trước khi đọc đáp án chi tiết.

### 7.1 Câu hỏi Lý thuyết: Nhận biết & Thông hiểu (LO-1) {T-07.7.1}

[ADDED: knowledge and comprehension questions]

**Câu 1 (`LO-1` – Knowledge).** Màng tế bào là lớp lipid kép dày khoảng 7–10 nm, có tính **bán thấm chọn lọc** đối với ion và chất phân cực. Điều này có nghĩa là gì?

- **A.** Màng tế bào cho mọi chất đi qua tự do.
- **B.** Màng tế bào chỉ cho ion và chất phân cực đi qua dễ dàng.
- **C.** Màng tế bào cho chất não ion & không phân cực đi qua dễ dàng, nhưng ion và chất phân cực thường cần kênh ion hoặc chất tải.
- **D.** Màng tế bào không cho bất cứ chất nào đi qua.

**Câu 2 (`LO-1` – Comprehension).** Theo phương trình Nernst, điện thế cân bằng của ion đơn lẻ ($E_{ion}$) phụ thuộc vào yếu tố nào?

- **A.** Chỉ nồng độ ion bên ngoài tế bào.
- **B.** Chỉ nồng độ ion bên trong tế bào.
- **C.** Tỉ số nồng độ ion bên ngoài / bên trong tế bào ($[ion]_o/[ion]_i$) và hệ số ion ($z$).
- **D.** Chỉ nhiệt độ môi trường.

**Câu 3 (`LO-1` – Comprehension).** Phân biệt vận chuyển chủ động sơ cấp và thứ cấp.

- **A.** Cả hai đều dùng trực tiếp năng lượng ATP.
- **B.** Sơ cấp dùng trực tiếp năng lượng ATP; thứ cấp dùng gradient ion do bơm sơ cấp tạo ra.
- **C.** Sơ cấp dùng gradient ion; thứ cấp dùng trực tiếp năng lượng ATP.
- **D.** Cả hai đều không tiêu thụ ATP.

**Câu 4 (`LO-1` – Comprehension).** Bơm $Na^+/K^+$-ATPase mỗi chu kỳ thủy phân một ATP, đưa ra ngoài bao nhiêu ion $Na^+$ và đưa vào trong bao nhiêu ion $K^+$?

- **A.** $3\ Na^+$ ra, $2\ K^+$ vào.
- **B.** $2\ Na^+$ ra, $3\ K^+$ vào.
- **C.** $3\ Na^+$ ra, $3\ K^+$ vào.
- **D.** $2\ Na^+$ ra, $2\ K^+$ vào.

### 7.2 Bài tập Áp dụng: Tính toán Nernst & Vận chuyển Chất (LO-2, LO-3) {T-07.7.2}

[ADDED: application exercises]

**Bài tập 5 (`LO-2` – Application).** Tính điện thế cân bằng của ion kali ($K^+$) ở $37^\circ\text{C}$, biết $[K^+]_{ngoài} = 4\text{ mmol/L}$ và $[K^+]_{trong} = 140\ \text{mmol/L}$, $z = +1$.

**Bài tập 6 (`LO-2` – Application).** Một tế bào có màng tế bào với diện tích $S = 1\times 10^{-5}\text{ m}^2$, khoảng cách hai lớp lipid $d = 7,5\text{ nm} = 7,5 \times 10^{-9}\text{ m}$, điện năng riêng $C_m \approx 1\ \mu\text{F/cm}^2 = 0,01\text{ F/m}^2$, điện thế nghỉ $U = -70\ \text{mV} = -0,07\ \text{V}$. Tính điện dung màng $C$, điện tích $Q$ & cường độ điện trường trong màng $E = U/d$.

**Bài tập 7 (`LO-3` – Application).** Một bệnh nhân hạ kali máu: $[K^+]_{ngoài}$ giảm từ 4 mmol/L xuống 3 mmol/L, $[K^+]_{trong} = 140\ \text{mmol/L}$ không đổi. Hãy tính:
1. Điện thế nghỉ của kali ($E_K$) trước & sau khi giảm kali.
2. Giải thích tại sao hạ kali máu làm điện thế nghỉ bớt âm hơn (phân cực hơn) & có thể gây rối loạn nhịp tim.

### 7.3 Câu hỏi Phân tích & Vận dụng Nâng cao (LO-3, LO-4) {T-07.7.3}

[ADDED: analytical and advanced questions]

**Câu 8 (`LO-3`, `LO-4` – Analysis).** Giải thích tại sao bơm $Na^+/K^+$-ATPase mỗi chu kỳ thủy phân một ATP, đưa $3\ Na^+$ ra và $2\ K^+$ vào, và tại sao điều này quan trọng cho duy trì điện thế nghỉ của tế bào `[SRC: S-07.4]$ `[ADDED: critical thinking]`.

**Câu 9 (`LO-3` – Analysis).** Giải thích tại sao chất vận chuyển (chất tải) có tính chọn lọc và bão hòa, khác khuếch tán đơn giản $[SRC: S-07.3]$ `[ADDED: critical thinking]`.

**Câu 10 (`LO-4` – Advanced).** Đánh giá vai trò của màng tế bào trong sự sống tế bào, liên hệ biến đổi màng tế bào (ví dụ thay đổi độ thấm, mất kênh ion) với bệnh lý & tác dụng của thuốc chẹn kênh ion `[SRC: S-07.1, S-07.4]$ `[ADDED: critical thinking]` `[DOMAIN_RULES: chỉ giải thích cơ chế, không liều/chỉ định]`.

---

## 7.4 Đáp án & Hướng dẫn Giải Chi tiết (Answer Key) {T-07.7.4}

[ADDED: step-by-step answer key]

**Câu 1 — `LO-1` · Knowledge. Đáp án C.** Cơ thể sống là hệ mở: liên tục trao đổi chất và năng lượng với môi trường ngoài, duy trì trạng thái dừng (không phải cân bằng nhiệt động) `[SRC: S-07.1]$ `[ADDED: definition]`.

**Câu 2 — `LO-1` · Comprehension. Đáp án B.** Ở $37^\circ\text{C}$, hệ số $\frac{RT}{zF}\ln(10) \approx 61,5\text{ mV}$ $[SRC: S-07.1]$ `[ADDED: Nernst coefficient]`.

**Câu 3 — `LO-1` · Comprehension. Đáp án B.** Khuếch tán đơn giản không tiêu thụ ATP trực tiếp; khuếch tán được hỗ trợ cần chất tải hoặc kênh ion nhưng không tiêu thụ ATP trực tiếp `[SRC: S-07.2, S-07.3]$ `[ADDED: distinction]`.

**Câu 4 — `LO-1` · Comprehension. Đáp án A.** Bơm $Na^+/K^+$-ATPase mỗi chu kỳ thủy phân một ATP, đưa $3\ Na^+$ ra và $2\ K^+$ vào $[SRC: S-07.4]$ `[ADDED: definition]`.

**Bài tập 5 — `LO-2` · Application.**
1. $E_K = 61,5 \times \log_{10}(4/140) = 61,5 \times (-1,54) \approx -95\text{ mV}$.
2. **Kết luận:** Điện thế cân bằng của kali khoảng $-95\text{ mV}$, rất gần điện thế nghỉ của tế bào (khoảng $-70$ đến $-90\text{ mV}$), vì màng nghỉ thấm nhiều với $K^+$ `[SRC: S-07.1]` `[ADDED: calculation]`.

**Bài tập 6 — `LO-2` · Application.**
1. Điện dung màng: $C = C_m \cdot S = 0,01\text{ F/m}^2 \times 1\times 10^{-5}\text{ m}^2 = 1\times 10^{-7}\text{ F} = 0,1\ \mu\text{F}$.
2. Điện tích: $Q = C \cdot U = 1\times 10^{-7} \times 0,07 = 7 \times 10^{-9}\text{ C} = 7\ \text{nC}$.
3. Cường độ điện trường: $E = U/d = 0,07 / (7,5 \times 10^{-9}) \approx 9,33 \times 10^6\ \text{V/m} \approx 9,3 \times 10^6\ \text{V/m}$.
4. **Kết luận:** Màng tế bào có điện dung khoảng $0,1\ \mu\text{F}$, điện tích khoảng $7\ \text{nC}$ & cường độ điện trường khoảng $9,3 \times 10^6\ \text{V/m}$ — rất lớn so với quy mô phòng thí nghiệm, nên chỉ cần thay đổi nhỏ điện thế màng cũng đủ mở kênh ion `[SRC: S-06.1]$ `[ADDED: calculation]`.

**Bài tập 7 — `LO-3` · Application.**
1. $E_K^{trước} = 61,5 \times \log_{10}(4/140) = 61,5 \times (-1,54) \approx -95\text{ mV}$.
2. $E_K^{sau} = 61,5 \times \log_{10}(3/140) = 61,5 \times (-1,67) \approx -84,3\text{ mV}$.
3. Điện thế nghỉ bớt âm hơn khoảng $95 - 84,3 = 10,7\text{ mV}$ $\rightarrow$ tế bào dễ khử cực hơn $\rightarrow$ nguy cơ rối loạn nhịp tim tăng `[SRC: S-07.1]$ `[ADDED: interpretation]`.

**Câu 8 — `LO-3`, `LO-4` · Analysis.**
Bơm $Na^+/K^+$-ATPase mỗi chu kỳ thủy phân một ATP, đưa $3\ Na^+$ ra và $2\ K^+$ vào: duy trì gradient ion ($Na^+$ cao ngoài, $K^+$ cao trong) & điện thế nghỉ của tế bào `[SRC: S-07.4]$ `[ADDED: energy coupling explanation]`.

**Câu 9 — `LO-3` · Analysis.**
- Khuếch tán đơn giản: chất đi xuôi gradient qua lớp lipid hoặc lỗ màng, không tiêu thụ ATP.
- Khuếch tán được hỗ trợ: chất đi xuôi gradient qua protein màng (kênh ion hoặc chất tải), không tiêu thụ ATP trực tiếp; tốc độ phụ thuộc gradient, số kênh/chất tải, tính chọn lọc và bão hòa `[SRC: S-07.2, S-07.3]$ `[ADDED: comparison]`.

**Câu 10 — `LO-4` · Analysis.**
- Màng tế bào duy trì thành phần nội bào & điều kiện môi trường trong tế bào; nếu màng bị phá vỡ (ví dụ bởi thuốc chẹn kênh ion, biến đổi màng, nhiễm trùng) thì tế bào mất chức năng hoặc chết `[SRC: S-07.1, S-07.4]$ `[ADDED: pathological relevance]`.
- Các chất vận chuyển qua màng (ion, glucose, axit amin, etc.) là nền tảng của chuyển hóa, truyền tín hiệu & duy trì tế bào; bất thường vận chuyển chất (ví dụ thay đổi biểu hiện kênh ion, biến đổi màng tế bào) có thể dẫn đến bệnh lý (ví dụ cystic fibrosis do lỗi kênh $Cl^-$) `[SRC: S-07.1, S-07.4]$ `[ADDED: pathological relevance]` `[DOMAIN_RULES: chỉ giải thích cơ chế, không liều/chỉ định]`.

---

## 8. Tài liệu tham khảo (References) {T-07.8}

### 8.1 Danh mục Tài liệu Tham khảo & Đọc thêm {T-07.8.1}

[ADDED: reference section structure] Nguồn `D-07` không có tài liệu tham khảo nào & `APPROVED_REFERENCE_LIST` là `none`. Theo R4, không tự điền tên sách, tác giả, năm, NXB, DOI hay số trang; ba thẻ dưới đây xác định loại tài liệu cần bổ sung.

1. **Giáo trình Vật lý dược (màng tế bào, vận chuyển chất, điện thế màng):** `[VERIFY: reference needed for Physical Pharmacy textbook covering cell membrane structure, membrane transport, Nernst equation (V-07.04)]`.
2. **Giáo trình Sinh lý (màng tế bào, vận chuyển chất, điện thế màng):** `[VERIFY: reference needed for physiology textbook covering cell membrane physiology, ion transport, membrane potential (V-07.04)]`.
3. **Tài liệu Dược lý (hấp thụ thuốc, chất vận chuyển, điều trị bằng thuốc chẹn kênh ion):** `[VERIFY: reference needed for pharmacology textbook covering drug absorption, carrier proteins, ion channel blockers (V-07.04)]`.

> **Ghi chú tuân thủ R4.** Ba mục trên là thẻ giữ chỗ, không phải trích dẫn đã xác minh; khi có danh mục chuẩn sẽ định dạng Vancouver.
