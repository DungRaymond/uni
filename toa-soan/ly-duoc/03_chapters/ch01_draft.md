# Chuyên đề 1: Nhiệt động học sinh học & Động học chất lưu trong hệ tuần hoàn

---

## 1. Tổng quan chương (Chapter Overview) {T-01.1}

### 1.1 Tên chương, giới thiệu khái quát & phạm vi nội dung {T-01.1.1}

Cơ thể sống không phải là hệ cô lập hay cân bằng nhiệt động tĩnh: nó là **hệ mở** liên tục trao đổi chất và năng lượng với môi trường, duy trì trật tự nội tại ở trạng thái **cân bằng dừng (steady state)**. Chuyên đề 1 giới thiệu hai nền tảng vật lý để hiểu sự sống từ góc nhìn định lượng: **nhiệt động học sinh học** (cân bằng năng lượng, entropy, năng lượng Gibbs) và **động học chất lưu trong hệ tuần hoàn** (định luật Poiseuille, số Reynolds, sức cản mạch máu) `[SRC: S-01.1, S-01.2]` `[ADDED: bridge from general physics]`.

Chương trình bày hệ mở/đóng/cô lập, nguyên lý I & II nhiệt động học, enthalpy, entropy, năng lượng Gibbs; định luật Poiseuille, số Reynolds, sức cản mạch máu; và ứng dụng vào huyết động, tiếng thổi tim, co/giãn mạch, điều kiện bảo quản thuốc `[ADDED: scope summary]`.

Tên chuyên đề tạm thời: **"Nhiệt động học sinh học & Động học chất lưu trong hệ tuần hoàn"** (theo `MANIFEST.md`) `[VERIFY: chapter title (V-01.01)]`.

### 1.2 Phạm vi, Kiến thức Tiên quyết & Thời lượng Học tập {T-01.1.2}

- **Kiến thức tiên quyết:**
  1. Năng lượng, công, nhiệt, nhiệt độ từ hóa phổ thông.
  2. Đơn vị SI: joule (J), watt (W), pascal (Pa), kelvin (K), mol.
  3. Hình học cơ bản: diện tích, thể tích ống hình trụ.
  4. Ứng dụng đơn vị đổi mới: kcal ↔ kJ (1 kcal = 4,184 kJ) `[ADDED: cross-reference to general physics]`.
- **Thời lượng dự kiến:** ~**2 giờ 30 phút** (khoảng 1 giờ 50 phút cho ~2.000 từ lý thuyết + ví dụ tại Mục 1–5, tương đương 2.000 / 1.500 ≈ 1,33 giờ; cộng 40 phút cho 10 bài tập ≈ 2 giờ 13 phút), theo `STUDY_TIME_RULE` `[ADDED: study time estimate]`.

---

## 2. Mục tiêu học tập (Learning Objectives) {T-01.2}

### 2.1 Chuẩn đầu ra Kiến thức, Kỹ năng, Vận dụng và Đánh giá mô hình (LO-1..LO-4) {T-01.2.1}

Sau chương này, sinh viên có thể `[ADDED: learning objectives]`:

- **`LO-1` (Kiến thức):** Phát biểu hệ mở/đóng/cô lập, nguyên lý I & II nhiệt động học, entropy, năng lượng Gibbs, định luật Poiseuille, số Reynolds, sức cản mạch máu.
- **`LO-2` (Kỹ năng):** Tính toán $\Delta E = Q - A$, lưu lượng Q và sức cản R qua định luật Poiseuille, số Re phân biệt dòng tầng/xoáy; đổi đơn vị kcal ↔ kJ.
- **`LO-3` (Vận dụng):** Giải thích huyết động, tiếng thổi tim, ảnh hưởng co/giãn mạch, mạch hẹp làm giảm lưu lượng; liên hệ nhiệt động học với sinh nhiệt cơ thể.
- **`LO-4` (Đánh giá mô hình):** Đánh giá vai trò của hệ mở/steady state trong sự ổn định sinh học; liên hệ nhiệt động học với điều kiện bảo quản thuốc `[ADDED: LO-4 definition]`.

---

## 3. Đặt vấn đề & Ý nghĩa thực tiễn (Introduction) {T-01.3}

### 3.1 Từ hệ mở đến sự ổn định nội tại của cơ thể sống {T-01.3.1}

Mọi sinh vật là **hệ mở**: liên tục nạp năng lượng từ thức ăn, thải nhiệt và chất thải ra môi trường. Cơ thể không tồn tại ở trạng thái cân bằng nhiệt động tĩnh (mà ở trạng thái **cân bằng dừng**): các chỉ số sinh lý (nhiệt độ cơ thể, pH máu, nồng độ ion) ổn định dù chuyển hóa, hô hấp và tuần hoàn vẫn diễn ra liên tục `[SRC: S-01.1]` `[ADDED: conceptual bridge]`.

Nguyên lý I nhiệt động học dùng để cân đối năng lượng từ dinh dưỡng với nhiệt và công sinh học. Nguyên lý II & entropy giải thích vì sao cơ thể duy trì trật tự nội tại (entropy thấp) bằng cách thải entropy dư thừa ra môi trường dưới dạng nhiệt và chất thải `[SRC: S-01.1]` `[ADDED: interpretation]`.

Cơ học chất lưu (định luật Poiseuille) giải thích quan hệ giữa áp lực, lưu lượng, bán kính mạch và sức cản — cơ sở để hiểu huyết động, tiếng thổi khi dòng chảy rối, ảnh hưởng của co/giãn mạch và cơ sở của một số phép đo sinh lý `[SRC: S-01.2, S-01.3]` `[ADDED: physiological relevance]`.

---

## 4. Nội dung bài giảng chính (Main Content) {T-01.4}

### 4.1 Nguyên lý Nhiệt động học trong Hệ Sống {T-01.4.1}

**Hệ, môi trường và trạng thái** `[SRC: S-01.1]`:
- **Hệ mở:** trao đổi cả chất và năng lượng (ví dụ: cơ thể, cốc nước để hở).
- **Hệ kín:** chỉ trao đổi năng lượng (ví dụ: ống nghiệm đậy kín).
- **Hệ cô lập:** không trao đổi gì (ví dụ: bình nhiệt lượng kế lý tưởng).

**Hàm trạng thái:** chỉ phụ thuộc trạng thái đầu–cuối, không phụ thuộc đường đi: $U$ (nội năng), $H$ (enthalpy), $S$ (entropy), $G$ (năng lượng Gibbs). Ngược lại $Q$ (nhiệt) và $A$ (công) là **hàm đường đi** — cùng biến đổi trạng thái nhưng lượng nhiệt/công có thể khác nhau `[SRC: S-01.1]` `[ADDED: definition]`.

**Nguyên lý I nhiệt động học:** năng lượng từ thức ăn nạp vào chuyển hóa thành nhiệt năng và công cơ học, công thẩm thấu, công điện toán:

$$\Delta E = Q - A$$ `[SRC: S-01.1]` `[ADDED: equation with variable list]`

trong đó $\Delta E$: biến thiên năng lượng nội tại; $Q$: nhiệt hệ hấp thụ; $A$: công hệ sinh ra.

**Nguyên lý II & Entropy:** Cơ thể duy trì trật tự nội tại (giữ entropy thấp) bằng cách thải entropy dư thừa ra môi trường dưới dạng nhiệt và chất thải `[SRC: S-01.1]` `[ADDED: interpretation]`.

**Quy ước dấu:** $\Delta H < 0$: hệ **tỏa nhiệt** ra môi trường (phản ứng cháy, trung hòa, hydrat hóa); $\Delta H > 0$: hệ **thu nhiệt** (phân hủy, hòa tan $NH_4NO_3$, thăng hoa) `[SRC: S-01.1]` `[ADDED: sign convention]`.

---

### 4.2 Động học Dòng Máu & Định luật Poiseuille {T-01.4.2}

Dòng chảy tầng của chất lưu qua ống hình trụ bán kính $r$, chiều dài $l$ dưới chênh lệch áp suất $\Delta P$:

$$Q = \frac{\pi \Delta P r^4}{8\eta l} \quad \implies \quad R = \frac{8\eta l}{\pi r^4}$$ `[SRC: S-01.2]` `[ADDED: equation with variable list]`

trong đó $Q$: lưu lượng, $\Delta P$: chênh áp, $r$: bán kính, $\eta$: độ nhớt, $l$: chiều dài, $R$: sức cản `[SRC: S-01.2]` `[ADDED: variable list]`.

**Sức cản mạch máu ($R$):** phụ thuộc nghịch biến vào lũy thừa bậc 4 của bán kính $r$. Tiểu động mạch là nơi điều hòa sức cản ngoại vi chủ đạo của hệ tuần hoàn `[SRC: S-01.2]` `[ADDED: physiological interpretation]`.

**Số Reynolds ($Re$):** phân biệt dòng chảy tầng ($Re < 2000$) và dòng chảy xoáy ($Re > 2000$). Khi vận tốc tăng cao (hẹp van tim, xơ vữa thành mạch) tạo dòng xoáy gây tiếng thổi tim nghe được qua ống nghe `[SRC: S-01.2]` `[ADDED: physiological interpretation]`.

---

### 4.3 Ý nghĩa & Ứng dụng Dược lý {T-01.4.3}

Nhiệt động học giải thích cân bằng năng lượng và sinh nhiệt của cơ thể; cơ học chất lưu giải thích quan hệ giữa áp lực, lưu lượng, bán kính mạch và sức cản. Các nguyên lý này giúp hiểu huyết động, tiếng thổi khi dòng chảy rối, ảnh hưởng của co/giãn mạch và cơ sở của một số phép đo sinh lý `[SRC: S-01.3]` `[ADDED: interpretation]`.

---

## 5. Ví dụ minh họa & Quy trình thực hành (Examples & Illustrations) {T-01.5}

### 5.1 Ví dụ 1: Mạch hẹp 20%, lưu lượng còn bao nhiêu? {T-01.5.1}

> **Example 1.** Một tiểu động mạch có bán kính $r$, sức cản $R \propto 1/r^4$. Khi co mạch làm bán kính giảm 20% (còn $0,8r$) và $\Delta P$ không đổi, tính sự thay đổi sức cản và lưu lượng `[SRC: S-01.3]`.
>
> - **Given (Dữ kiện đã cho):** $R \propto 1/r^4$; bán kính giảm 20% $\rightarrow r' = 0,8r$; $\Delta P$ không đổi `[SRC: S-01.3]`.
> - **Find (Yêu cầu):** Tính sức cản mới $R'$ và lưu lượng mới $Q'$ so với ban đầu.
> - **Approach (Phương pháp giải):** Áp dụng quy luật $r^4$: sức cản nghịch biến với $r^4$, lưu lượng thay đổi theo $r^4$.
> - **Solution (Giải):**
>   1. Sức cản: $R' = R \cdot \dfrac{1}{0,8^4} = R \cdot \dfrac{1}{0,4096} \approx 2,44R$ → tăng khoảng **2,4 lần**.
>   2. Lưu lượng: $Q' = Q \cdot 0,8^4 \approx 0,41Q$ → chỉ còn khoảng **41%**.
>   3. **Kết luận:** mất 1/5 bán kính nhưng mất gần 60% lưu lượng — vì sao hẹp nhẹ động mạch nhỏ đã gây thiếu máu mô rõ rệt.
> - **Check (Kiểm tra):** $0,8^4 = 0,4096$; $1/0,4096 \approx 2,44$; $1 - 0,41 = 0,59$ (giảm 59% lưu lượng) `[SRC: S-01.3]`.
> - **Interpretation (Nhận xét):** Sự thay đổi nhỏ về bán kính mạch gây ra thay đổi lớn về lưu lượng và sức cản — cơ sở vật lý của hiện tượng hẹp mạch dẫn đến thiếu máu mô `[ADDED: clinical relevance]`.

### 5.2 Mẹo nhớ & Quy trình 3 bước {T-01.5.2}

> **Cách nhớ — Poiseuille “bậc 4 bán kính”:** $r^4$ nằm ở tử số của $Q$ và mẫu số của $R$ `[SRC: S-01.3]` `[ADDED: mnemonic]`.
>
> **Quy trình 3 bước khi đề cho %:** (1) đổi % thành hệ số (giảm 20% → 0,8); (2) lũy thừa 4 ($0,8^4 \approx 0,41$); (3) $Q$ nhân hệ số, $R$ chia hệ số `[SRC: S-01.3]` `[ADDED: procedure]`.

---

## 6. Tóm tắt chương (Chapter Summary) {T-01.6}

### 6.1 Tóm tắt Nội dung Trọng tâm & Quy tắc Ghi nhớ {T-01.6.1}

Các luận điểm chính của chuyên đề 1 `[SRC: S-01.1–S-01.3]`:

1. **Hệ mở:** cơ thể sống liên tục trao đổi chất và năng lượng với môi trường, ở trạng thái cân bằng dừng (steady state), không phải cân bằng nhiệt động tĩnh `[SRC: S-01.1]`.
2. **Nguyên lý I:** năng lượng từ thức ăn chuyển thành nhiệt năng và công ($\Delta E = Q - A$) `[SRC: S-01.1]`.
3. **Nguyên lý II & entropy:** cơ thể duy trì entropy thấp bằng cách thải entropy dư ra môi trường `[SRC: S-01.1]`.
4. **Định luật Poiseuille:** $Q = \pi\Delta P r^4 / 8\eta l$; sức cản $R = 8\eta l / \pi r^4$, phụ thuộc nghịch biến với $r^4$ `[SRC: S-01.2]`.
5. **Số Reynolds:** $Re < 2000$ (dòng tầng), $Re > 2000$ (dòng xoáy) `[SRC: S-01.2]`.
6. **Huyết động:** thay đổi nhỏ bán kính mạch làm thay đổi lớn lưu lượng và sức cản (bậc 4) `[SRC: S-01.2, S-01.3]`.

> **Quy tắc ghi nhớ (mnemonic):**
> - **"Poiseuille — bậc 4 bán kính":** $r^4$ ở tử số của $Q$, ở mẫu số của $R$ `[ADDED: mnemonic]`.
> - **Quy trình 3 bước:** (1) đổi % thành hệ số; (2) lũy thừa 4; (3) $Q$ nhân, $R$ chia `[ADDED: mnemonic]`.
> - **$Re < 2000$ → tầng; $Re > 2000$ → xoáy → tiếng thổi** `[ADDED: mnemonic]`.

### 6.2 Bảng Tổng hợp Công thức & Lưu ý {T-01.6.2}

**Bảng 1.1.** Tổng hợp công thức, đơn vị và lưu ý của chuyên đề 1. `[ADDED: Table 1.1]`

| Công thức | Ý nghĩa | Đơn vị | Lưu ý |
|---|---|---|---|
| $\Delta E = Q - A$ | Nguyên lý I: năng lượng nội tại thay đổi bằng nhiệt trừ công | J; kJ/mol | Q > 0: hệ hấp nhiệt; A > 0: hệ sinh công |
| $Q = \dfrac{\pi \Delta P r^4}{8\eta l}$ | Lưu lượng qua ống hình trụ (Poiseuille) | m³/s | $r^4$ ở tử số: bán kính lớn thì lưu lượng tăng mạnh |
| $R = \dfrac{8\eta l}{\pi r^4}$ | Sức cản mạch máu | Pa·s/m³ | $r^4$ ở mẫu số: bán kính nhỏ thì sức cản tăng mạnh |
| $Re$ | Số Reynolds phân biệt dòng tầng/xoáy | không đơn vị | $Re < 2000$: tầng; $Re > 2000$: xoáy |

---

## 7. Đánh giá & Bài tập tự lượng giá (Review & Assessment) {T-01.7}

[ADDED: assessment section frame] Bộ câu hỏi và bài tập dưới đây được thiết kế theo thang nhận thức từ Nhận biết, Thông hiểu đến Vận dụng, Phân tích và Đánh giá mô hình, bao phủ bốn chuẩn đầu ra `LO-1`–`LO-4` đã phát biểu tại `T-01.2.1`. Mỗi câu đều ghi rõ chuẩn đầu ra và cấp độ nhận thức; đáp án chi tiết nằm tại `T-01.7.4`. Sinh viên nên tự làm bài đầy đủ trước khi đọc đáp án chi tiết.

### 7.1 Câu hỏi Lý thuyết: Nhận biết & Thông hiểu (LO-1) {T-01.7.1}

[ADDED: knowledge and comprehension questions]

**Câu 1 (`LO-1` – Knowledge).** Cơ thể sống là hệ nào theo nhiệt động học?

- **A.** Hệ cô lập.
- **B.** Hệ mở.
- **C.** Hệ kín.
- **D.** Hệ equilibrio.

**Câu 2 (`LO-1` – Comprehension).** Theo định luật Poiseuille, nếu bán kính mạch máu giảm một nửa (còn 0,5r) và áp suất không đổi, sức cản sẽ thay đổi thế nào?

- **A.** Tăng 2 lần.
- **B.** Tăng 4 lần.
- **C.** Tăng 16 lần.
- **D.** Tăng 32 lần.

**Câu 3 (`LO-1` – Comprehension).** Số Reynolds ($Re$) dùng để phân biệt điều gì?

- **A.** Dòng chảy tầng và dòng chảy xoáy.
- **B.** Lspě dòng máu và nhiệt độ máu.
- **C.** Áp lực tâm và áp lực ngoài.
- **D.** Nhập huyết và xuất huyết.

**Câu 4 (`LO-1` – Comprehension).** Nguyên lý I nhiệt động học nói về điều gì?

- **A.** Entropy của hệ cô lập luôn tăng.
- **B.** Năng lượng không tự sinh ra hay mất đi, chỉ chuyển hóa.
- **C.** Năng lượng Gibbs luôn giảm trong phản ứng tự phát.
- **D.** Entropy của hệ sống luôn giảm.

### 7.2 Bài tập Áp dụng: Tính toán Poiseuille & Nhiệt động (LO-2, LO-3) {T-01.7.2}

[ADDED: application exercises]

**Bài tập 5 (`LO-2` – Application).** Một động mạch có bán kính $r = 2,0\ \text{mm}$, độ nhớt máu $\eta = 3,5 \times 10^{-3}\ \text{Pa·s}$, chiều dài $l = 10\ \text{cm}$, chênh áp $\Delta P = 1000\ \text{Pa}$. Hãy tính:
1. Lưu lượng $Q$ qua động mạch.
2. Sức cản $R$ của động mạch.

**Bài tập 6 (`LO-2` – Application).** Mộtाहरण vitamin C (axit ascorbic) 500 mg được đốt cháy hoàn toàn. Cho $\Delta H_c^\circ$ của axit ascorbic ($\text{C}_6\text{H}_8\text{O}_6$, khối lượng mol 176 g/mol) là $-2600\ \text{kJ/mol}$. Hãy tính năng lượng tỏa ra (kJ) và đổi sang kcal.

**Bài tập 7 (`LO-3` – Application).** Một bệnh nhân có tiểu động mạch bị hẹp 30% (bán kính giảm còn 70% ban đầu) và áp suất không đổi. Hãy tính:
1. Sức cản mới so với ban đầu (bằng bao nhiêu lần).
2. Lưu lượng mới so với ban đầu (bằng phần trăm).
3. Giải thích ý nghĩa lâm sàng của kết quả này.

### 7.3 Câu hỏi Phân tích & Vận dụng Nâng cao (LO-3, LO-4) {T-01.7.3}

[ADDED: analytical and advanced questions]

**Câu 8 (`LO-3`, `LO-4` – Analysis).** Giải thích tại sao hẹp nhẹ một động mạch nhỏ (giảm 20% bán kính) lại gây thiếu máu mô rõ rệt, dựa trên định luật Poiseuille và bậc 4 của bán kính `[SRC: S-01.3]` `[ADDED: critical thinking]`.

**Câu 9 (`LO-3` – Analysis).** Cơ thể sống duy trì entropy thấp (trật tự nội tại) mà nguyên lý II nói entropy của hệ cô lập luôn tăng. Giải thích mâu thuẫn ظاهر này dựa trên khái niệm hệ mở và steady state `[SRC: S-01.1]` `[ADDED: critical thinking]`.

**Câu 10 (`LO-4` – Advanced).** Đánh giá vai trò của nhiệt động học trong điều kiện bảo quản thuốc. Tại sao nhiều thuốc (vaccine, insulin) cần bảo quản ở 2–8 °C? Liên hệ với nguyên lý II và tốc độ phản ứng phân hủy `[SRC: S-01.1]` `[ADDED: critical thinking]` `[DOMAIN_RULES: chỉ giải thích cơ chế, không liều/chỉ định]`.

---

## 7.4 Đáp án & Hướng dẫn Giải Chi tiết (Answer Key) {T-01.7.4}

[ADDED: step-by-step answer key]

**Câu 1 — `LO-1` · Knowledge. Đáp án B.** Cơ thể sống là hệ mở: liên tục trao đổi chất và năng lượng với môi trường (nạp thức ăn, thải nhiệt và chất thải) `[SRC: S-01.1]` `[ADDED: definition]`.

**Câu 2 — `LO-1` · Comprehension. Đáp án C.** Sức cản $R \propto 1/r^4$. Nếu bán kính giảm một nửa ($r \to r/2$), thì $R' = R / (0,5)^4 = R / 0,0625 = 16R$ → tăng 16 lần `[SRC: S-01.2]` `[ADDED: r^4 rule]`.

**Câu 3 — `LO-1` · Comprehension. Đáp án A.** Số Reynolds phân biệt dòng chảy tầng ($Re < 2000$) và dòng chảy xoáy ($Re > 2000$) `[SRC: S-01.2]` `[ADDED: definition]`.

**Câu 4 — `LO-1` · Comprehension. Đáp án B.** Nguyên lý I: năng lượng không tự sinh ra hay mất đi, chỉ chuyển hóa ($\Delta E = Q - A$) `[SRC: S-01.1]` `[ADDED: definition]`.

**Bài tập 5 — `LO-2` · Application.**
1. $Q = \dfrac{\pi \Delta P r^4}{8\eta l} = \dfrac{\pi \times 1000 \times (2,0 \times 10^{-3})^4}{8 \times 3,5 \times 10^{-3} \times 0,10} = \dfrac{\pi \times 1000 \times 16 \times 10^{-12}}{2,8 \times 10^{-3}} = \dfrac{5,0265 \times 10^{-8}}{2,8 \times 10^{-3}} \approx 1,795 \times 10^{-5}\ \text{m³/s} \approx 18\ \text{µL/s}$.
2. $R = \dfrac{8\eta l}{\pi r^4} = \dfrac{8 \times 3,5 \times 10^{-3} \times 0,10}{\pi \times (2,0 \times 10^{-3})^4} = \dfrac{2,8 \times 10^{-3}}{5,0265 \times 10^{-11}} \approx 5,57 \times 10^7\ \text{Pa·s/m³}$.
3. Kiểm tra: $Q = \Delta P / R = 1000 / 5,57 \times 10^7 \approx 1,795 \times 10^{-5}\ \text{m³/s}$ — khớp `[SRC: S-01.2]`.

**Bài tập 6 — `LO-2` · Application.**
1. Số mol vitamin C: $n = 0,500\ \text{g} / 176\ \text{g/mol} \approx 2,84 \times 10^{-3}\ \text{mol}$.
2. Năng lượng tỏa ra: $Q = n \times |\Delta H_c^\circ| = 2,84 \times 10^{-3} \times 2600 \approx 7,38\ \text{kJ}$.
3. Đổi sang kcal: $7,38 / 4,184 \approx 1,76\ \text{kcal}$.
4. **Kết luận:** 500 mg vitamin C đốt cháy tỏa khoảng 7,4 kJ (≈ 1,8 kcal) `[ADDED: unit conversion]`.

**Bài tập 7 — `LO-3` · Application.**
1. Sức cản: $R' = R / 0,7^4 = R / 0,2401 \approx 4,16R$ → tăng khoảng **4,2 lần**.
2. Lưu lượng: $Q' = Q \times 0,7^4 \approx 0,24Q$ → chỉ còn khoảng **24%**.
3. **Ý nghĩa lâm sắc:** mất 30% bán kính nhưng mất hơn 75% lưu lượng — hẹp nhẹ động mạch nhỏ đã gây thiếu máu mô rõ rệt, đây là cơ sở vật lý của bệnh tắc mạch vành và nhồi máu cơ tim `[ADDED: clinical relevance]`.

**Câu 8 — `LO-3`, `LO-4` · Analysis.**
Theo định luật Poiseuille, lưu lượng $Q \propto r^4$. Giảm 20% bán kính ($r \to 0,8r$) làm lưu lượng giảm xuống $0,8^4 \approx 0,41$ (chỉ còn 41%), tức mất gần 60% lưu lượng. Do đó, ngay cả sự hẹp nhẹ một động mạch nhỏ cũng làm giảm đáng kể lưu lượng máu đến mô, gây thiếu máu mô rõ rệt `[SRC: S-01.3]` `[ADDED: r^4 physiological consequence]`.

**Câu 9 — `LO-3` · Analysis.**
Cơ thể là hệ mở, không phải hệ cô isolates. Nguyên lý II nói entropy của hệ **cô lập** luôn tăng, nhưng cơ thể có thể duy trì entropy thấp (trật tự) bằng cách **thải entropy dư thừa ra môi trường** dưới dạng nhiệt và chất thải. Do đó, tổng entropy của (cơ thể + môi trường) vẫn tăng, thỏa mãn nguyên lý II `[SRC: S-01.1]` `[ADDED: open system explanation]`.

**Câu 10 — `LO-4` · Analysis.**
Theo phương trình Arrhenius, tốc độ phản ứng phân hủy tăng nhiệt độ. Vì vậy, bảo quản thuốc ở nhiệt độ thấp (2–8 °C) làm chậm phân hủy, kéo dài hạn dùng. Đây là lý do vaccine, insulin và một số kháng sinh pha tiêm cần bảo quản lạnh `[SRC: S-01.1]` `[ADDED: Arrhenius application]` `[DOMAIN_RULES: chỉ giải thích cơ chế, không liều/chỉ định]`.

---

## 8. Tài liệu tham khảo (References) {T-01.8}

### 8.1 Danh mục Tài liệu Tham khảo & Đọc thêm {T-01.8.1}

[ADDED: reference section structure] Nguồn `D-01` không có tài liệu tham khảo nào và `APPROVED_REFERENCE_LIST` là `none`. Theo R4, không tự điền tên sách, tác giả, năm, NXB, DOI hay số trang; ba thẻ dưới đây xác định loại tài liệu cần bổ sung.

1. **Giáo trình Vật lý dược (nhiệt động học sinh học & động học chất lưu):** `[VERIFY: reference needed for Physical Pharmacy textbook covering thermodynamics and fluid dynamics in biological systems (V-01.04)]`.
2. **Giáo trình Vật lý (nhiệt động học & cơ học chất lưu):** `[VERIFY: reference needed for general physics textbook covering thermodynamics, Poiseuille law, and Reynolds number (V-01.04)]`.
3. **Tài liệu Sinh lý dược (huyết động & cơ sở vật lý của các phép đo sinh lý):** `[VERIFY: reference needed for physiology textbook covering hemodynamics and physiological measurements (V-01.04)]`.

> **Ghi chú tuân thủ R4.** Ba mục trên là thẻ giữ chỗ, không phải trích dẫn đã xác minh; khi có danh mục chuẩn sẽ định dạng Vancouver.
