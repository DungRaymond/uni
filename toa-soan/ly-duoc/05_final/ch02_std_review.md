# Chuyên đề 2: Điện thế sinh học & Tín hiệu điện từ của màng tế bào

---

## 1. Tổng quan chương (Chapter Overview) {T-02.1}

### 1.1 Tên chuyên đề, giới thiệu khái quát & phạm vi nội dung {T-02.1.1}

Màng tế bào không chỉ là vật cản động lực học mà còn là **bộ lọc điện học**: màng phospholipid khó thấm ion, trong khi các kênh ion và bơm ion tạo ra cácGradient ion và điện thế màng. Chuyên đề 2 giới thiệu hai nền tảng điện sinh học: **điện thế nghỉ** (cơ sở trạng thái ổn định của tế bào) và **điện thế hoạt động** (cơ sở truyền tín hiệu thần kinh và co cơ) `[SRC: S-02.1, S-02.2]` `[ADDED: bridge from general physics]`.

Chương trình bày phương trình Nernst (theo cân bằng ion đơn lẻ), phương trình Goldman-Hodgkin-Katz (điện thế nghỉ tổng thể tính đến độ thấm của nhiều ion), quá trình khử cực/tái cực/trơ của điện thế hoạt động, và ứng dụng vào ECG/EEG, thuốc chẹn kênh ion, cation máu `[ADDED: scope summary]`.

Tên chuyên đề tạm thời: **"Điện thế sinh học & Tín hiệu điện từ của màng tế bào"** (theo `MANIFEST.md`) `[VERIFY: chapter title (V-02.01)]`.

### 1.2 Phạm vi, Kiến thức Tiên quyết & Thời lượng Học tập {T-02.1.2}

- **Kiến thức tiên quyết:**
  1. Ion, số hiệu ion, nồng độ mol từ hóa phổ thông.
  2. Hệ mở/kín/cô lập, nguyên lý I nhiệt động học (năng lượng, công, nhiệt) từ Chuyên đề 1.
  3. Màng tế bào, phospholipid từ sinh học đại cương.
  4. Đơn vịSI: volt (V), amper (A), ohms (Ω), farad (F), siemen (S) `[ADDED: cross-reference to general physics & Ch01]`.
- **Thời lượng dự kiến:** ~**2 giờ 30 phút** (khoảng 1 giờ 50 phút cho ~2.000 từ lý thuyết + ví dụ tại Mục 1–5, tương đương 2.000 / 1.500 ≈ 1,33 giờ; cộng 40 phút cho 10 bài tập ≈ 2 giờ 13 phút), theo `STUDY_TIME_RULE` `[ADDED: study time estimate]`.

---

## 2. Mục tiêu học tập (Learning Objectives) {T-02.2}

### 2.1 Chuẩn đầu ra Kiến thức, Kỹ năng, Vận dụng và Đánh giá mô hình (LO-1..LO-4) {T-02.2.1}

Sau chương này, sinh viên có thể `[ADDED: learning objectives]`:

- **`LO-1` (Kiến thức):** Phát biểu được điện thế nghỉ, phương trình Nernst (ion đơn lẻ) & GHK (nhiều ion), điện thế hoạt động (khử cực/tái cực/trơ), ECG/EEG.
- **`LO-2` (Kỹ năng):** Tính toán được thế Nernst của ion đơn lẻ; phân biệt dòng tầng/xoáy qua số Reynolds (liên hệ Ch01); giải thích ECG/EEG.
- **`LO-3` (Vận dụng):** Giải thích tác động của thay đổi điện giải (kali máu) đến điện thế nghỉ và loạn nhịp; cơ chế thuốc chẹn kênh ion.
- **`LO-4` (Đánh giá mô hình):** Đánh giá vai trò của điện sinh học trong chẩn đoán (ECG/EEG) và điều trị (thuốc chẹn kênh ion, pacing) `[ADDED: LO-4 definition]`.

---

## 3. Đặt vấn đề & Ý nghĩa thực tiễn (Introduction) {T-02.3}

### 3.1 Từ điện thế màng đến tín hiệu điện sinh lý {T-02.3.1}

Màng tế bào tách biệt môi trường bên trong và bên ngoài tế bào. Vì các ion (K⁺, Na⁺, Cl⁻, Ca²⁺) phân bố không đều hai bên màng và màng có độ thấm khác nhau đối với từng ion, có sự chênh lệch điện thế giữa hai bên màng — đây là **điện thế màng** `[SRC: S-02.1, S-02.2]` `[ADDED: conceptual bridge]`.

Khi tế bào nghỉ, điện thế màng gọi là **điện thế nghỉ** (khoảng −70 đến −90 mV), do chủ yếu sự thấm của K⁺. Khi tế bào kích thích, điện thế màng thay đổi nhanh tạo ra **điện thế hoạt động** — tín hiệu điện dùng để truyền thông tin trong thần kinh và kích hoạt co cơ `[SRC: S-02.2]` `[ADDED: interpretation]`.

Các nguyên lý này giúp diễn giải ECG (tim) và EEG (não bộ), hiểu tác dụng của thay đổi điện giải và cơ chế của thuốc ảnh hưởng kênh ion; đồng thời giải thích nền tảng của ghi điện sinh lý `[SRC: S-02.3]` `[ADDED: physiological relevance]`.

---

## 4. Nội dung bài giảng chính (Main Content) {T-02.4}

### 4.1 Điện thế nghỉ & Phương trình Nernst-GHK {T-02.4.1}

**Phương trình Nernst** tính thế cân bằng cho một ion đơn lẻ (ví dụ K⁺):

$$E_{ion} = \frac{RT}{zF} \ln \frac{[ion]_{ngoài}}{[ion]_{trong}} \approx \frac{61,5}{z} \log_{10} \frac{[ion]_{ngoài}}{[ion]_{trong}} \quad (\text{ở } 37^\circ\text{C})$$ `[SRC: S-02.1]` `[ADDED: equation with variable list]`

trong đó $R$: hằng số khí, $T$: nhiệt độ tuyệt đối (K), $z$: số hiệu ion, $F$: hằng số Faraday, $[ion]_{ngoài}, [ion]_{trong}$: nồng độ ion bên ngoài/trong màng `[SRC: S-02.1]` `[ADDED: variable list]`.

**Phương trình Goldman-Hodgkin-Katz (GHK)** tính điện thế nghỉ tổng thể có tính đến độ thấm ($P$) của nhiều ion ($K^+, Na^+, Cl^-$):

$$E_m = \frac{RT}{F} \ln \left( \frac{P_{K}[K^+]_o + P_{Na}[Na^+]_o + P_{Cl}[Cl^-]_i}{P_{K}[K^+]_i + P_{Na}[Na^+]_i + P_{Cl}[Cl^-]_o} \right)$$ `[SRC: S-02.1]` `[ADDED: equation with variable list]`

Ở trạng thái nghỉ, độ thấm của $K^+$ lớn hơn $Na^+$ từ 50–100 lần nên $E_m \approx -70$ đến $-90\text{ mV}$ (gần với thế Nernst của $K^+$) `[SRC: S-02.1]` `[ADDED: physiological interpretation]`.

---

### 4.2 Điện thế hoạt động & Ứng dụng chẩn đoán {T-02.4.2}

**Điện thế hoạt động** là sự thay đổi nhanh của điện thế màng do khử cực rồi tái cực, lan truyền không suy giảm lungo màng tế bào `[SRC: S-02.2]` `[ADDED: definition]`.

**Các giai đoạn** `[SRC: S-02.2]`:
1. **Khử cực:** Kênh $Na^+$ phụ thuộc điện thế mở ồ ạt, $Na^+$ ùa vào trong tế bào làm điện thế đảo cực đạt tới $+30\text{ mV}$.
2. **Tái cực:** Kênh $Na^+$ bất hoạt, kênh $K^+$ mở chậm đưa $K^+$ ra ngoài phục hồi điện thế âm.
3. **Giai đoạn trơ:** Trơ tuyệt đối (không kích thích được) và trơ tương đối (cần kích thích rất mạnh).

**Ứng dụng chẩn đoán:** Ghi đo dòng điện phát sinh từ tim tạo ra **Điện tâm đồ (ECG)**, từ não bộ tạo ra **Điện não đồ (EEG)** `[SRC: S-02.2]` `[ADDED: clinical application]`.

**Ý nghĩa:** Điện thế hoạt động lan truyền tín hiệu thần kinh và kích hoạt co cơ. ECG/EEG ghi hoạt động điện tổng hợp để hỗ trợ đánh giá tim và não; thuốc chẹn kênh ion có thể làm đổi dẫn truyền `[SRC: S-02.3]` `[ADDED: interpretation]`.

---

## 5. Ví dụ minh họa & Quy trình thực hành (Examples & Illustrations) {T-02.5}

### 5.1 Ví dụ 1: Thế Nernst của $K^+$ ở $37^\circ\text{C}$ {T-02.5.1}

> **Example 1.** Tính thế Nernst của $K^+$ ở $37^\circ\text{C}$ `[SRC: S-02.3]`.
>
> - **Given (Dữ kiện đã cho):** $[K^+]_{ngoài} = 4\text{ mmol/L}$, $[K^+]_{trong} = 140\text{ mmol/L}$, $z = +1$ `[SRC: S-02.3]`.
> - **Find (Yêu cầu):** Tính $E_K$ (the V).
> - **Approach (Phương pháp giải):** Áp dụng phương trình Nernst ở $37^\circ\text{C}$: $E_K = 61,5 \cdot \log_{10}([K^+]_o/[K^+]_i)$.
> - **Solution (Giải):**
>   1. Tỉ số: $[K^+]_o/[K^+]_i = 4/140 = 0,0286$.
>   2. Logarit: $\log_{10}(0,0286) \approx -1,54$.
>   3. Tính: $E_K = 61,5 \times (-1,54) \approx -95\text{ mV}$.
>   4. **Kết luận:** Điện thế nghỉ đo được khoảng $-90\text{ mV}$, rất gần $E_K$ — phù hợp với việc màng nghỉ thấm $K^+$ mạnh nhất.
> - **Check (Kiểm tra):** $E_K$ âm vì ion dương ($K^+$) tập trung nhiều ở trong tế bào `[SRC: S-02.3]`.
> - **Interpretation (Nhận xét):** Liên hệ lâm sắc: khi $[K^+]_{ngoài}$ tăng (tăng kali máu), tỉ số $[K^+]_o/[K^+]_i$ tăng → $E_K$ bớt âm hơn → điện thế nghỉ bớt âm → cơ tim dễ khử cực bất thường, nguy cơ loạn nhịp `[SRC: S-02.3]` `[ADDED: clinical relevance]`.

### 5.2 Mẹo nhớ Nernst-GHK & điện thế hoạt động {T-02.5.2}

> **Mẹo nhớ — Nernst:** $E = 61,5 \log(\text{ngoài}/\text{trong})$ cho ion hóa trị $+1$ — "ngoài chia trong", kết quả âm khi ion dương tập trung nhiều ở trong `[SRC: S-02.3]` `[ADDED: mnemonic]`.
>
> **Mẹo nhớ — GHK:** ion nào màng thấm nhiều thì "nói to" hơn trong $E_m$ — lúc nghỉ $K^+$ thắng nên $E_m$ sát $E_K$ `[SRC: S-02.3]` `[ADDED: mnemonic]`.
>
> **Mẹo nhớ — Điện thế hoạt động:** $Na^+$ vào → lên (khử cực); $K^+$ ra → xuống (tái cực); trơ tuyệt đối = kênh $Na^+$ còn bất hoạt `[SRC: S-02.3]` `[ADDED: mnemonic]`.

---

## 6. Tóm tắt chương (Chapter Summary) {T-02.6}

### 6.1 Tóm tắt Nội dung Trọng tâm & Quy tắc Ghi nhớ {T-02.6.1}

Các luận điểm chính của chuyên đề 2 `[SRC: S-02.1–S-02.3]`:

1. **Điện thế nghỉ:** Màng tế bào là hệ mở, điện thế nghỉ khoảng −70 đến −90 mV, do chủ yếu sự thấm của $K^+$ `[SRC: S-02.1]`.
2. **Phương trình Nernst:** Tính thế cân bằng cho ion đơn lẻ, $E_{ion} = \frac{RT}{zF} \ln \frac{[ion]_o}{[ion]_i} \approx \frac{61,5}{z} \log_{10} \frac{[ion]_o}{[ion]_i}$ ở $37^\circ\text{C}$ `[SRC: S-02.1]`.
3. **Phương trình GHK:** Tính điện thế nghỉ tổng thể tính đến độ thấm của nhiều ion ($K^+, Na^+, Cl^-$) `[SRC: S-02.1]`.
4. **Điện thế hoạt động:** Khử cực ($Na^+$ vào), tái cực ($K^+$ ra), trơ tuyệt đối/tương đối `[SRC: S-02.2]`.
5. **ECG/EEG:** Ghi hoạt động điện tổng hợp của tim (ECG) và não (EEG) để hỗ trợ chẩn đoán `[SRC: S-02.2, S-02.3]`.
6. **Thuốc chẹn kênh ion:** Làm đổi dẫn truyền điện sinh học `[SRC: S-02.3]` `[ADDED: clinical relevance]`.

> **Quy tắc ghi nhớ (mnemonic):**
> - **Nernst:** $E = 61,5 \log(\text{ngoài}/\text{trong})$ cho ion $+1$ — "ngoài chia trong", kết quả âm khi ion dương tập trung nhiều ở trong `[ADDED: mnemonic]`.
> - **GHK:** ion nào màng thấm nhiều thì "nói to" hơn trong $E_m$ — lúc nghỉ $K^+$ thắng nên $E_m$ sát $E_K$ `[ADDED: mnemonic]`.
> - **Điện thế hoạt động:** $Na^+$ vào → lên (khử cực); $K^+$ ra → xuống (tái cực); trơ tuyệt đối = kênh $Na^+$ còn bất hoạt `[ADDED: mnemonic]`.

### 6.2 Bảng Tổng hợp Công thức & Lưu ý {T-02.6.2}

**Bảng 2.1.** Tổng hợp công thức, đơn vị và lưu ý của chuyên đề 2. `[ADDED: Table 2.1]`

| Công thức | Ý nghĩa | Đơn vị | Lưu ý |
|---|---|---|---|
| $E_{ion} = \dfrac{RT}{zF} \ln \dfrac{[ion]_o}{[ion]_i}$ | Thế Nernst của ion đơn lẻ | V (volt) | $z$: số hiệu ion; ở $37^\circ\text{C}$ gần $\frac{61,5}{z} \log_{10}(...)$ |
| $E_m = \dfrac{RT}{F} \ln \left( \dfrac{P_K[K^+]_o + P_{Na}[Na^+]_o + P_{Cl}[Cl^-]_i}{P_K[K^+]_i + P_{Na}[Na^+]_i + P_{Cl}[Cl^-]_o} \right)$ | Điện thế nghỉ tổng thể (GHK) | V (volt) | Tính đến độ thấm của nhiều ion |
| $E_m \approx -70$ đến $-90\text{ mV}$ | Điện thế nghỉ típipcal | mV | Do độ thấm $K^+$ lớn hơn $Na^+$ 50–100 lần |
| Điện thế đỉnh khử cực | $+30\text{ mV}$ | mV | Đỉnh của điện thế hoạt động |

---

## 7. Đánh giá & Bài tập tự lượng giá (Review & Assessment) {T-02.7}

[ADDED: assessment section frame] Bộ câu hỏi và bài tập dưới đây được thiết kế theo thang nhận thức từ Nhận biết, Thông hiểu đến Vận dụng, Phân tích và Đánh giá mô hình, bao phủ bốn chuẩn đầu ra `LO-1`–`LO-4` đã phát biểu tại `T-02.2.1`. Mỗi câu đều ghi rõ chuẩn đầu ra và cấp độ nhận thức; đáp án chi tiết nằm tại `T-02.7.4`. Sinh viên nên tự làm bài đầy đủ trước khi đọc đáp án chi tiết.

### 7.1 Câu hỏi Lý thuyết: Nhận biết & Thông hiểu (LO-1) {T-02.7.1}

[ADDED: knowledge and comprehension questions]

**Câu 1 (`LO-1` – Knowledge).** Phương trình Nernst tính thế cân bằng cho ion đơn lẻ. Với ion $K^+$ ($z = +1$) ở $37^\circ\text{C}$, hệ số trước logarit là gần bao nhiêu?

- **A.** 58,5
- **B.** 61,5
- **C.** 67,0
- **D.** 72,0

**Câu 2 (`LO-1` – Comprehension).** Ở trạng thái nghỉ, điện thế màng ($E_m$) khoảng bao nhiêu, và ion nào chịu trách nhiệm chủ yếu?

- **A.** −70 đến −90 mV, do $Na^+$ thấm nhiều.
- **B.** −70 đến −90 mV, do $K^+$ thấm nhiều.
- **C.** +30 mV, do $Na^+$ thấm nhiều.
- **D.** 0 mV, do ion cân bằng.

**Câu 3 (`LO-1` – Comprehension).** Khi $[K^+]_{ngoài}$ tăng (tăng kali máu), điện thế nghỉ $E_m$ sẽ thay đổi thế nào?

- **A.** Bớt âm hơn (dễ khử cực hơn).
- **B.** Đậm âm hơn (khó khử cực hơn).
- **C.** Không đổi.
- **D.** Đổi dấu (từ âm thành dương).

**Câu 4 (`LO-1` – Comprehension).** Thuốc chẹn kênh ion ảnh hưởng đến điện thế hoạt động thông qua cơ chế gì?

- **A.** Thay đổi nồng độ ion bên ngoài tế bào.
- **B.** Chắn kênh ion, làm đổi dẫn truyền điện thế hoạt động.
- **C.** Thay đổi nhiệt độ cơ thể.
- **D.** Thay đổi pH máu.

### 7.2 Bài tập Áp dụng: Tính toán Nernst (LO-2, LO-3) {T-02.7.2}

[ADDED: application exercises]

**Bài tập 5 (`LO-2` – Application).** Tính thế Nernst của $Na^+$ ($z = +1$) ở $37^\circ\text{C}$, biết $[Na^+]_{ngoài} = 145\text{ mmol/L}$ và $[Na^+]_{trong} = 15\text{ mmol/L}$. So sánh với thế Nernst của $K^+$ ở ví dụ 1.

**Bài tập 6 (`LO-2` – Application).** Một tế bào có $[Cl^-]_{ngoài} = 110\text{ mmol/L}$ và $[Cl^-]_{trong} = 10\text{ mmol/L}$ ($z = -1$). Tính thế Nernst của $Cl^-$ ở $37^\circ\text{C}$ và giải thích dấu của kết quả.

**Bài tập 7 (`LO-3` – Application).** Một bệnh nhân tăng kali máu: $[K^+]_{ngoài}$ tăng từ 4 mmol/L lên 6 mmol/L, $[K^+]_{trong} = 140\text{ mmol/L}$ không đổi. Hãy tính:
1. Thế Nernst của $K^+$ trước và sau khi tăng kali.
2. Độ thay đổi của $E_K$ (mV).
3. Giải thích ý nghĩa lâm sắc liên quan đến điện thế nghỉ của cơ tim.

### 7.3 Câu hỏi Phân tích & Vận dụng Nâng cao (LO-3, LO-4) {T-02.7.3}

[ADDED: analytical and advanced questions]

**Câu 8 (`LO-3`, `LO-4` – Analysis).** Giải thích tại sao tăng kali máu ($[K^+]_{ngoài}$ tăng) làm điện thế nghỉ bớt âm hơn và làm cơ tim dễ khử cực bất thường, nguy cơ loạn nhịp `[SRC: S-02.3]` `[ADDED: critical thinking]`.

**Câu 9 (`LO-3` – Analysis).** So sánh vai trò của $K^+$ và $Na^+$ trong thiết lập điện thế nghỉ ($E_m$) dựa trên phương trình GHK và độ thấm màng `[SRC: S-02.1]` `[ADDED: critical thinking]`.

**Câu 10 (`LO-4` – Advanced).** Đánh giá vai trò của ECG/EEG trong chẩn đoán và liên hệ với cơ chế thuốc chẹn kênh ion làm đổi dẫn truyền điện thế hoạt động `[SRC: S-02.2, S-02.3]` `[ADDED: critical thinking]` `[DOMAIN_RULES: chỉ giải thích cơ chế, không liều/chỉ định]`.

---

## 7.4 Đáp án & Hướng dẫn Giải Chi tiết (Answer Key) {T-02.7.4}

[ADDED: step-by-step answer key]

**Câu 1 — `LO-1` · Knowledge. Đáp án B.** Ở $37^\circ\text{C}$, hệ số $\frac{RT}{F} \ln(10) \approx 61,5\text{ mV}$ `[SRC: S-02.1]` `[ADDED: coefficient value]`.

**Câu 2 — `LO-1` · Comprehension. Đáp án B.** Điện thế nghỉ típipcal khoảng −70 đến −90 mV, do chủ yếu sự thấm của $K^+$ (độ thấm $K^+$ lớn hơn $Na^+$ 50–100 lần) `[SRC: S-02.1]` `[ADDED: definition]`.

**Câu 3 — `LO-1` · Comprehension. Đáp án A.** Khi $[K^+]_o$ tăng, tỉ số $[K^+]_o/[K^+]_i$ tăng → $\log_{10}$ tăng → $E_K$ bớt âm hơn → điện thế nghỉ bớt âm → dễ khử cực hơn `[SRC: S-02.3]` `[ADDED: sign logic]`.

**Câu 4 — `LO-1` · Comprehension. Đáp án B.** Thuốc chẹn kênh ion làm đóng/kén kênh ion, làm đổi khả năng dẫn truyền của điện thế hoạt động qua màng tế bào `[SRC: S-02.3]` `[ADDED: mechanism]`.

**Bài tập 5 — `LO-2` · Application.**
1. $E_{Na} = 61,5 \cdot \log_{10}(145/15) = 61,5 \cdot \log_{10}(9,67) = 61,5 \times 0,985 \approx +60,6\text{ mV}$.
2. So sánh với $E_K \approx -95\text{ mV}$: $E_{Na}$ dương (do $Na^+$ tập trung ngoài), $E_K$ âm (do $K^+$ tập trung trong) `[SRC: S-02.1]` `[ADDED: comparison]`.

**Bài tập 6 — `LO-2` · Application.**
1. $E_{Cl} = 61,5 \cdot \log_{10}(110/10) \times (-1) = 61,5 \cdot \log_{10}(11) \times (-1) = 61,5 \times 1,041 \times (-1) \approx -64,0\text{ mV}$.
2. Dấu âm vì $Cl^-$ là ion âm tập trung nhiều bên ngoài, thế cân bằng âm `[SRC: S-02.1]` `[ADDED: sign logic]`.

**Bài tập 7 — `LO-3` · Application.**
1. Trước: $E_{K,\text{trước}} = 61,5 \cdot \log_{10}(4/140) = 61,5 \times (-1,54) \approx -95\text{ mV}$.
2. Sau: $E_{K,\text{sau}} = 61,5 \cdot \log_{10}(6/140) = 61,5 \cdot \log_{10}(0,0429) = 61,5 \times (-1,37) \approx -84,3\text{ mV}$.
3. Độ thay đổi: $-84,3 - (-95) \approx +10,7\text{ mV}$ (bớt âm khoảng 10–11 mV).
4. **Ý nghĩa lâm sắc:** điện thế nghỉ bớt âm → tế bào tim gần ngưỡng khử cực hơn → dễ khử cực bất thường → nguy cơ loạn nhịp tăng `[SRC: S-02.3]` `[ADDED: clinical relevance]`.

**Câu 8 — `LO-3`, `LO-4` · Analysis.**
$[K^+]_o$ tăng → tỉ số $[K^+]_o/[K^+]_i$ tăng → $E_K$ bớt âm (theo phương trình Nernst) → điện thế nghỉ bớt âm → tế bào tim gần ngưỡng khử cực hơn → dễ kích thích bất thường → nguy cơ loạn nhịp tăng `[SRC: S-02.3]` `[ADDED: pathophysiological mechanism]`.

**Câu 9 — `LO-3` · Analysis.**
Theo phương trình GHK, ion nào có độ thấm ($P$) lớn hơn thì "nói to" hơn trong tính $E_m$. Lúc nghỉ, độ thấm $K^+$ lớn hơn $Na^+$ (50–100 lần) nên $E_m$ sát $E_K$ (khoảng −90 mV) chứ không sát $E_{Na}$ (khoảng +60 mV) `[SRC: S-02.1]` `[ADDED: GHK interpretation]`.

**Câu 10 — `LO-4` · Analysis.**
ECG ghi hoạt động điện tổng hợp của tim (điện thế hoạt động của cơ tim), EEG ghi của não. Thuốc chẹn kênh ion làm đổi dẫn truyền điện thế hoạt động (ví dụ chẹn kênh $Na^+$ làm chậm khử cực, chẹn kênh $K^+$ làm chậm tái cực) → có thể dùng điều trị loạn nhịp nhưng cũng có thể gây tác dụng phụ điện sinh học `[SRC: S-02.2, S-02.3]` `[ADDED: clinical application]` `[DOMAIN_RULES: chỉ giải thích cơ chế, không liều/chỉ định]`.

---

## 8. Tài liệu tham khảo (References) {T-02.8}

### 8.1 Danh mục Tài liệu Tham khảo & Đọc thêm {T-02.8.1}

[ADDED: reference section structure] Nguồn `D-02` không có tài liệu tham khảo nào và `APPROVED_REFERENCE_LIST` là `none`. Theo R4, không tự điền tên sách, tác giả, năm, NXB, DOI hay số trang; ba thẻ dưới đây xác định loại tài liệu cần bổ sung.

1. **Giáo trình Vật lý dược (điện thế sinh học, Nernst, GHK):** `[VERIFY: reference needed for Physical Pharmacy textbook covering membrane potential, Nernst equation, and GHK equation (V-02.04)]`.
2. **Giáo trình Sinh lý (điện sinh học, ECG/EEG, kênh ion):** `[VERIFY: reference needed for physiology textbook covering electrophysiology, ECG, EEG, and ion channels (V-02.04)]`.
3. **Tài liệu Dược lý (thuốc chẹn kênh ion, loạn nhịp):** `[VERIFY: reference needed for pharmacology textbook covering ion channel blockers and cardiac arrhythmia (V-02.04)]`.

> **Ghi chú tuân thủ R4.** Ba mục trên là thẻ giữ chỗ, không phải trích dẫn đã xác minh; khi có danh mục chuẩn sẽ định dạng Vancouver.
