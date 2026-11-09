# Chương 2: Các thông số Dược động học cơ bản (Hệ ADME)

---

## 1. Tổng quan chương (Chapter Overview) {T-02.1}

### 1.1 Tên chuyên đề, giới thiệu khái quát & phạm vi nội dung {T-02.1.1}

Dược động học (Pharmacokinetics) là khoa học nghiên cứu quá trình thuốc đi vào, đi trong và đi ra khỏi cơ thể. Hệ ADME (Absorption – Distribution – Metabolism – Excretion) là khung khái niệm cốt lõi giúp dược sĩ và bác sĩ dự đoán nồng độ thuốc tại vị trí tác dụng, thời điểm khởi phát, thời gian duy trì và nguy cơ tích lũy `[ADDED: structural frame and pedagogical overview]`.

Chuyên đề 2 trình bày ba phần chính: (1) hấp thu & sinh khả dụng (sinh khả dụng $F$, đường dùng IV vs PO, first-pass effect), (2) phân bố & thể tích phân bố ($V_d = D/C_0$, $V_d$ nhỏ vs lớn), (3) thải trừ & thời gian bán thải ($t_{1/2} = 0,693 \cdot V_d/Cl$, quy tắc $5 \times t_{1/2}$), và ý nghĩa lâm sạch (chọn đường dùng, khoảng cách liều, điều chỉnh liều khi chức năng gan/thận thay đổi) `[ADDED: scope summary]`.

Tên chuyên đề tạm thời: **"Các thông số Dược động học cơ bản (Hệ ADME)"** (theo `MANIFEST.md`) `[VERIFY: chapter title (V-02.01)]`.

### 1.2 Phạm vi, Kiến thức Tiên quyết & Thời lượng Học tập {T-02.1.2}

- **Kiến thức tiên kỳ:**
  1. Hấp thu thuốc qua màng niêm mạc từ dược lý đại cương `[ADDED: cross-reference to general pharmacology]`.
  2. Đơn vị concentración (mg/L, mg/dL), thời gian (giờ, ngày), thể tích (L, mL) từ toán học phổ thông `[ADDED: cross-reference to general mathematics]`.
  3. Màng niêm mạch, ion ($Na^+, K^+, Cl^-$) từ hóa phổ thông & sinh lý đại cương `[ADDED: cross-reference to general chemistry & physiology]`.
- **Thời lượng dự kiến:** ~**2 giờ 30 phút** (khoảng 1 giờ 50 phút cho ~2.000 từ lý thuyết + ví dụ tại Mục 1–5, tương đương 2.000 / 1.500 ≈ 1,33 giờ; cộng 40 phút cho 10 bài tập ≈ 2 giờ 13 phút), theo `STUDY_TIME_RULE` `[ADDED: study time estimate]`.

---

## 2. Mục tiêu học tập (Learning Objectives) {T-02.2}

### 2.1 Chuẩn đầu ra Kiến thức, Kỹ năng, Vận dụng và Đánh giá mô hình (LO-1..LO-4) {T-02.2.1}

Sau chương này, sinh viên có thể `[ADDED: learning objectives]`:

- **`LO-1` (Kiến thức):** Phát biểu định nghĩa sinh khả dụng ($F$), thể tích phân bố ($V_d$), độ thanh thải ($Cl$), thời gian bán thải ($t_{1/2}$); phân biệt đường dùng IV ($F = 100\%$) và đường uống (PO, chịu ảnh hưởng first-pass effect).
- **`LO-2` (Kỹ năng):** Tính toán sinh khả dụng $F$, thể tích phân bố $V_d = D/C_0$, thời gian bán thải $t_{1/2} = 0,693 \cdot V_d/Cl$; áp dụng quy tắc $5 \times t_{1/2}$ để đạt trạng thái nồng độ ổn định.
- **`LO-3` (Vận dụng):** Giải thích liên hệ giữa thông số dược động học và chọn đường dùng, khoảng cách liều, điều chỉnh liều khi chức năng gan/thận thay đổi.
- **`LO-4` (Đánh giá mô hình):** Đánh giá vai trò của thông số dược động học trong dự đoán nồng độ thuốc tại vị trí tác dụng, thời điểm khởi phát, thời gian duy trì và nguy cơ tích lũy `[ADDED: LO-4 definition]`.

---

## 3. Đặt vấn đề & Ý nghĩa thực tiễn (Introduction) {T-02.3}

### 3.1 Tại sao cần nắm thông số dược động học cơ bản {T-02.3.1}

Mối liên hệ giữa liều thuốc và tác dụng dược lý không trực tiếp — nó phụ thuộc vào nồng độ thuốc tại vị trí tác dụng, який porganzale qua các quá trình ADME `[ADDED: conceptual bridge]`.

Hai bệnh nhân dùng cùng liều thuốc có thể có phản ứng khác nhau do sự khác biệt trong hấp thu, phân bố, chuyển hóa và thải trừ. Ví dụ: bệnh nhân suy thận có thể tích lũy thuốc do giảm độ thanh thải, dẫn đến tác dụng ung thư; bệnh nhân có enzyme gan hoạt động nhanh có thể codes thuốc quá nhanh, làm giảm hiệu quả điều trị `[ADDED: clinical relevance]`.

Do đó, nắm vững thông số dược động học cơ bản là điều kiện tiên quyết để chọn đường dùng, thiết lập khoảng cách liều và điều chỉnh liều một cách an toàn & hiệu quả `[ADDED: clinical example]`.

---

## 4. Nội dung bài giảng chính (Main Content) {T-02.4}

### 4.1 Hấp Thu & Sinh Khả Dụng {T-02.4.1}

**Sinh khả dụng ($F$)** là tỉ lệ phần trăm hoạt chất nguyên vẹn vào được vòng tuần hoàn chung so với liều dùng:

$$F = \frac{AUC_{đường\ dùng}}{AUC_{tiêm\ tĩnh\ mạch}} \times 100\%$$ `[SRC: S-02.1]$ `[ADDED: equation with variable list]$

Tiêm tĩnh mạch ($IV$) mặc định có $F = 100\%$. Dùng đường uống ($PO$) chịu ảnh hưởng của chuyển hóa bước đầu qua gan (First-pass effect) `[SRC: S-02.1]$ `[ADDED: definition]$.

---

### 4.2 Phân Bố & Thể Tích Phân Bố {T-02.4.2}

**Thể tích phân bố ($V_d$)** là đại lượng đặc trưng cho mức độ cản trở sự lan truyền thuốc trong cơ thể:

$$V_d = \frac{D}{C_0}$$ `[SRC: S-02.2]$ `[ADDED: equation with variable list]$

trong đó $D$ là liều dùng và $C_0$ là nồng độ đỉnh ngay sau khi tiêm tĩnh mạch `[SRC: S-02.2]$ `[ADDED: variable list]$.

- **$V_d$ nhỏ ($< 5$ L):** Thuốc chủ yếu nằm trong lòng mạch, gắn nhiều với protein huyết tương (Albumin).
- **$V_d$ lớn ($> 40$ L):** Thuốc phân bố rộng khắp các mô và khoang nội bào (ví dụ thuốc tan nhiều trong mỡ) `[SRC: S-02.2]$ `[ADDED: definition]$.

---

### 4.3 Thải Trừ & Thời Gian Bán Thải {T-02.4.3}

**Thời gian bán thải ($t_{1/2}$)** là thời gian cần để nồng độ thuốc trong máu giảm xuống nửa:

$$t_{1/2} = \frac{0,693 \cdot V_d}{Cl}$$ `[SRC: S-02.3]$ `[ADDED: equation with variable list]$

trong đó $Cl$ (Clearance) là độ thanh thải – thể tích huyết tương được loại sạch thuốc trong một đơn vị thời gian `[SRC: S-02.3]$ `[ADDED: definition]$.

**Ý nghĩa $t_{1/2}$ trong điều trị:** Cần khoảng $5 \times t_{1/2}$ để thuốc đạt trạng thái nồng độ ổn định ($C_{ss}$) trong máu và cũng cần khoảng $5 \times t_{1/2}$ để đào thải gần như hoàn toàn ($>97\%$) thuốc ra khỏi cơ thể `[SRC: S-02.3]$ `[ADDED: definition]$.

---

## 6. Tóm tắt chương (Chapter Summary) {T-02.6}

### 6.1 Tóm tắt Nội dung Trọng tâm & Quy tắc Ghi nhớ {T-02.6.1}

Các luận điểm chính của chuyên đề 2 `[SRC: S-02.1–S-02.3]$:

1. **Sinh khả dụng ($F$):** tỉ lệ phần trăm hoạt chất nguyên vẹn vào vòng tuần hoàn chung; $IV = 100\%$; $PO$ chịu ảnh hưởng first-pass effect $[SRC: S-02.1]$.
2. **Thể tích phân bố ($V_d = D/C_0$):** $V_d$ nhỏ ($< 5$ L): thuốc ở lòng mạch, gắn albumin; $V_d$ lớn ($> 40$ L): thuốc phân bố rộng mô/khoang nội bào $[SRC: S-02.2]$.
3. **Thời gian bán thải ($t_{1/2} = 0,693 \cdot V_d/Cl$):** cần $\approx 5 \times t_{1/2}$ để đạt $C_{ss}$ và thải $> 97\%$ thuốc $[SRC: S-02.3]$.
4. **Ý nghĩa lâm sàng:** chọn đường dùng, khoảng cách liều, điều chỉnh liều khi chức năng gan/thận thay đổi $[SRC: S-02.1–S-02.3]$.

> **Quy tắc ghi nhớ (mnemonic):**
> - **ADME:** Hấp thu — Phân bố — Chuyển hóa — Thải trừ $[ADDED: mnemonic]$.
> - **$V_d$ nhỏ (vài L):** thuốc ở lòng mạch, gắn albumin nhiều; **$V_d$ lớn (hàng chục L):** thuốc vào mô, mỡ $[ADDED: mnemonic]$.
> - **Quy tắc 5:** $5 \times t_{1/2}$ để đạt $C_{ss}$ và cũng $5 \times t_{1/2}$ để thải $> 97\%$ thuốc $[ADDED: mnemonic]$.
> - **Thận yếu:** $Cl$ giảm → $t_{1/2}$ dài ra → giảm liều hoặc giãn khoảng cách $[ADDED: mnemonic]$.

---

## 7. Đánh giá & Bài tập tự lượng giá (Review & Assessment) {T-02.7}

[ADDED: assessment section frame] Bộ câu hỏi và bài tập dưới đây được thiết kế theo thang nhận thức từ Nhận biết, Thông hiểu đến Vận dụng, Phân tích và Đánh giá mô hình, bao phủ bốn chuẩn đầu ra `LO-1`–`LO-4` đã phát biểu tại `T-02.2.1`. Mỗi câu đều ghi rõ chuẩn đầu ra & cấp độ nhận thức; đáp án chi tiết nằm tại `T-02.7.4`. Sinh viên nên tự làm bài đầy đủ trước khi đọc đáp án chi tiết.

### 7.1 Câu hỏi Lý thuyết: Nhận biết & Thông hiểu (LO-1) {T-02.7.1}

[ADDED: knowledge and comprehension questions]

**Câu 1 (`LO-1` – Knowledge).** Đường dùng nào có sinh khả dụng $F = 100\%$ theo định nghĩa trong chuyên đề?

- **A.** Đường uống (PO)
- **B.** Đường tiêm tĩnh mạch (IV)
- **C.** Đường hít
- **D.** Đường đính tại chỗ

**Câu 2 (`LO-1` – Comprehension).** Theo công thức $V_d = D/C_0$, nếu liều dùng $D$ tăng gấp hai và nồng độ đỉnh $C_0$ không đổi, thể tích phân bố $V_d$ sẽ:

- **A.** Gấp đôi
- **B.** Giảm một nửa
- **C.** Không đổi
- **D.** Tăng gấp bốn

**Câu 3 (`LO-1` – Comprehension).** Theo quy tắc $5 \times t_{1/2}$, sau bao nhiêu lần bán thải thuốc gần như được đào thải hoàn toàn ($>97\%$) khỏi cơ thể?

- **A.** 3 lần bán thải
- **B.** 4 lần bán thải
- **C.** 5 lần bán thải
- **D.** 6 lần bán thải

**Câu 4 (`LO-1` – Comprehension).** Thuốc có $V_d$ lớn ($> 40$ L) thường phân bố ở nơi nào?

- **A.** Chủ yếu trong lòng mạch
- **B.** Rộng khắp các mô và khoang nội bào
- **C.** Chỉ trong huyết tương
- **D.** Chỉ trong tiêu hóa

### 7.2 Bài tập Áp dụng: Tính toán $V_d$ & $t_{1/2}$ (LO-2, LO-3) {T-02.7.2}

[ADDED: application exercises]

**Bài tập 5 (`LO-2` – Application).** Tiêm tĩnh mạch 500 mg thuốc, nồng độ đỉnh $C_0 = 25$ mg/L. Hãy tính thể tích phân bố $V_d$ $[SRC: S-02.2]$.

**Bài tập 6 (`LO-2` – Application).** Một thuốc có $V_d = 40$ L và độ thanh thải $Cl = 4$ L/giờ. Hãy tính thời gian bán thải $t_{1/2}$ $[SRC: S-02.3]$.

**Bài tập 7 (`LO-3` – Application).** Bệnh nhân suy thận làm độ thanh thải $Cl$ giảm còn 1 L/giờ (từ 4 L/giờ ban đầu), $V_d = 40$ L không đổi. Hãy tính thời gian bán thải mới và giải thích tại sao cần giảm liều hoặc giãn khoảng cách liều $[SRC: S-02.3]$.

### 7.3 Câu hỏi Phân tích & Vận dụng Nâng cao (LO-3, LO-4) {T-02.7.3}

[ADDED: analytical and advanced questions]

**Câu 8 (`LO-3`, `LO-4` – Analysis).** Giải thích tại sao đường uống (PO) thường có sinh khả dụng thấp hơn đường tiêm tĩnh mạch (IV) $[SRC: S-02.1]$ `[ADDED: critical thinking]`.

**Câu 9 (`LO-3` – Analysis).** Giải thích liên hệ giữa thể tích phân bố ($V_d$) và việc thuốc phân bố vào mô mỡ hay ở lòng mạch $[SRC: S-02.2]$ `[ADDED: critical thinking]`.

**Câu 10 (`LO-4` – Advanced).** Đánh giá vai trò của thông số dược động học ($F$, $V_d$, $Cl$, $t_{1/2}$) trong dự đoán nồng độ thuốc tại vị trí tác dụng, thời điểm khởi phát, thời gian duy trì và nguy cơ tích lũy $[SRC: S-02.1, S-02.2, S-02.3]$ `[ADDED: critical thinking]$ `[DOMAIN_RULES: chỉ giải thích cơ chế, không liều/chỉ định]$.

---

## 7.4 Đáp án & Hướng dẫn Giải Chi tiết (Answer Key) {T-02.7.4}

[ADDED: step-by-step answer key]

**Câu 1 — `LO-1` · Knowledge. Đáp án B.** Đường tiêm tĩnh mạch (IV) có sinh khả dụng $F = 100\%$ theo định nghĩa $[SRC: S-02.1]$ `[ADDED: definition]$.

**Câu 2 — `LO-1` · Comprehension. Đáp án A.** Theo công thức $V_d = D/C_0$, nếu $D$ tăng gấp hai và $C_0$ không đổi thì $V_d$ cũng tăng gấp hai $[SRC: S-02.2]$ `[ADDED: formula]$.

**Câu 3 — `LO-1` · Comprehension. Đáp án C.** Cần khoảng $5 \times t_{1/2}$ để thuốc đào thải gần như hoàn toàn ($>97\%$) khỏi cơ thể $[SRC: S-02.3]$ `[ADDED: definition]$.

**Câu 4 — `LO-1` · Comprehension. Đáp án B.** Thuốc có $V_d$ lớn ($> 40$ L) phân bố rộng khắp các mô và khoang nộiーボ (ví dụ thuốc tan nhiều trong mỡ) $[SRC: S-02.2]$ `[ADDED: definition]$.

**Bài tập 5 — `LO-2` · Application.**

$V_d = D/C_0 = 500/25 = 20$ L $[SRC: S-02.2]$ `[ADDED: calculation]`.

**Bài tập 6 — `LO-2` · Application.**

$t_{1/2} = 0,693 \times V_d/Cl = 0,693 \times 40/4 = 0,693 \times 10 = 6,93 \approx 6,9$ giờ $[SRC: S-02.3]$ `[ADDED: calculation]`.

**Bài tập 7 — `LO-3` · Application.**

$t_{1/2}^{mới} = 0,693 \times 40/1 = 27,72 \approx 27,7$ giờ (từ 6,9 giờ ban đầu).
$t_{1/2}$ tăng gấp يقرب 4 lần → thuốc thuôm lâu hơn trong cơ thể → nguy cơ tích lũy và tác dụng ung thư tăng → cần giảm liều hoặc giãn khoảng cách liều $[SRC: S-02.3]$ `[ADDED: interpretation]`.

**Câu 8 — `LO-3`, `LO-4` · Analysis.**

Đường uống (PO) phải đi qua đường tiêu hóa và gan trước khi vào tuần hoàn chung, bị ảnh hưởng bởi first-pass effect (chuyển hóa bước đầu qua làm giảm lượng thuốc nguyên vẹn); đường tiêm tĩnh mạch (IV) đưa thuốc trực tiếp vào tuần hoàn, nên $F = 100\%$ $[SRC: S-02.1]$ `[ADDED: mechanism explanation]`.

**Câu 9 — `LO-3` · Analysis.**

$V_d$ phản bố sự phân bố của thuốc giữa huyết tương và các mô. Thuốc tan nhiều trong mỡ hoặc kết nối mạnh với thành phần mô sẽ có $V_d$ lớn (phân bố rộng); thuốc tan nhiều trong nước hoặc gắn mạnh albumin huyết tương sẽ có $V_d$ nhỏ (phân bố chủ yếu trong lòng mạch) $[SRC: S-02.2]$ `[ADDED: mechanism explanation]$.

**Câu 10 — `LO-4` · Analysis.**

Thông số dược động học ($F$, $V_d$, $Cl$, $t_{1/2}$) quyết định nồng độ thuốc tại vị trí tác dụng theo thời gian: $F$ quyết định lượng thuốc vào tuần hoàn, $V_d$ quyết định phân bố, $Cl$ và $t_{1/2}$ quyết định tốc độ loại bỏ. Nhau chúng决定 thời điểm khởi phát, thời gian duy trì và nguy cơ tích lũy $[SRC: S-02.1, S-02.2, S-02.3]$ `[ADDED: clinical relevance]$ `[DOMAIN_RULES: chỉ giải thích cơ chế, không liều/chỉ định]$.

---

## 8. Tài liệu tham khảo (References) {T-02.8}

### 8.1 Danh mục Tài liệu Tham khảo & Đọc thêm {T-02.8.1}

[ADDED: reference section structure] Nguồn `D-02` không có tài liệu tham khảo nào & `APPROVED_REFERENCE_LIST` là `none`. Theo R4, không tự điền tên sách, tác giả, năm, NXB, DOI hay số trang; ba thẻ dưới đây xác định loại tài liệu cần bổ sung.

1. **Giáo trình Dược động học lâm sàng (hấp thu, phân bố, chuyển hóa, thải trừ, sinh khả dụng):** `[VERIFY: reference needed for Clinical Pharmacokinetics textbook covering ADME, bioavailability, volume of distribution, clearance, half-life (V-02.04)]`.
2. **Giáo trình Dược lý (hệ ADME, đường dùng, first-pass effect):** `[VERIFY: reference needed for Pharmacology textbook covering ADME system, routes of administration, first-pass effect (V-02.04)]`.
3. **Hướng dẫn điều chỉnh liều thuốc khi suy gan/thận:** `[VERIFY: reference needed for clinical guideline on dose adjustment in hepatic/renal impairment (V-02.04)]`.

> **Ghi chú tuân thủ R4.** Ba mục trên là thẻ giữ chỗ, không phải trích dẫn đã xác minh; khi có danh mục chuẩn sẽ định dạng Vancouver.