# Chương 8: Nhiệt hóa học & Ứng dụng dược (tên tạm)

---

## 8.1. Tổng quan chương (Chapter Overview)

### 8.1.1. Tên chương, giới thiệu khái quát & phạm vi nội dung

Chương 6–7 đã trình bày hóa học phối trí và đồng phân phức chất. Chương 8 chuyển sang **nhiệt hóa học** — nghiên cứu nhiệt lượng kèm theo các phản ứng hóa học và quá trình chuyển pha. Với dược sĩ, đây không phải kiến thức "để thi": mọi viên thuốc đều có **năng lượng dự trữ** — dạng bền thì tồn tại lâu, dạng kém bền thì phân hủy, chuyển dạng hoặc tương kỵ với tá dược `[SRC: S-08.1]` `[ADDED: bridge from Ch06–07]`.

Nhiệt hóa học giúp trả lời ba câu hỏi thực tế cho mọi phản ứng: **(1) tỏa hay thu nhiệt? (2) có tự xảy ra không? (3) nhanh hay chậm?** — tương ứng $\Delta H$ (tỏa/thu), $\Delta G$ (tự diễn biến hay không) và $E_a$ (nhanh/chậm) `[SRC: S-08.1, S-08.6]` `[ADDED: scope summary]`.

Chương trình bày hệ/trạng thái/nội năng/enthalpy, định luật I & II, định luật Hess, năng lượng liên kết, nhiệt dung/nhiệt lượng kế, entropy/năng lượng Gibbs, và ứng dụng trong bào chế/bảo quản/phân tích thuốc (Arrhenius, Q10, đa hình, DSC/TGA, ICH) `[ADDED: scope summary]`.

Tên chương tạm thời: **"Nhiệt hóa học & Ứng dụng dược"** (chưa có tên chính thức trong file nguồn D-08, chỉ có tại `MANIFEST.md`) `[VERIFY: chapter title (V-08.01)]`.

### 8.1.2. Phạm vi, Kiến thức Tiên quyết & Thời lượng Học tập

- **Kiến thức tiên quyết:**
  1. Liên kết cộng hóa trị, năng lượng liên kết tại Chương 1.
  2. Hình học phân tử VSEPR, số phối trí lập thể tại `T-02.4.2`, `T-02.4.3` (Chương 2).
  3. Thuyết trường tinh thể CFT, bước nhảy $d$-d, màu sắc tại `T-06.4.7` (Chương 6) — cơ sở cho tính chất quark học và màu sắc của phức chất `[ADDED: cross-reference to Ch01–06]`.
- **Thời lượng dự kiến:** ~**3 giờ** (khoảng 2 giờ 20 phút cho ~2.700 từ lý thuyết + ví dụ tại Mục 1–6, tương đương 2.700 / 1.500 ≈ 1,8 giờ; cộng 40 phút cho 10 bài tập ≈ 2 giờ 20 phút), theo `STUDY_TIME_RULE` `[ADDED: study time estimate]`.

---

## 8.2. Mục tiêu học tập (Learning Objectives)

### 8.2.1. Chuẩn đầu ra Kiến thức, Kỹ năng, Vận dụng và Đánh giá mô hình (LO-1..LO-4)

Sau chương này, sinh viên có thể `[ADDED: learning objectives]`:

- **`LO-1` (Kiến thức):** Phát biểu được hệ/môi trường, hàm trạng thái ($U, H, S, G$), định luật I & II nhiệt động học, enthalpy, entropy, năng lượng Gibbs, định luật Hess, năng lượng liên kết, nhiệt dung, phương trình Arrhenius.
- **`LO-2` (Kỹ năng):** Tính toán được $\Delta H$, $\Delta U$, $\Delta S$, $\Delta G$, $Q$, áp dụng định luật Hess, năng lượng liên kết, $Q = mc\Delta T$, Arrhenius, $Q_{10}$.
- **`LO-3` (Vận dụng):** Vận dụng nhiệt hóa học để giải thích độ bền thuốc, quy tắc $Q_{10}$, đa hình, DSC/TGA, ICH, điều kiện bảo quản thuốc.
- **`LO-4` (Đánh giá mô hình):** Đánh giá vai trò của nhiệt hóa học trong sản xuất, bảo quản và phân tích thuốc; chọn điều kiện bảo quản phù hợp (ví dụ vaccine, insulin, kháng sinh pha tiêm) `[ADDED: LO-4 definition]`.

---

## 8.3. Đặt vấn đề & Ý nghĩa thực tiễn (Introduction)

### 8.3.1. Từ phản ứng hóa học đến năng lượng & độ ổn định thuốc

Mọi phản ứng hóa học — từ đốt cháy glucose trong cơ thể đến tổng hợp urê trong công nghiệp — kèm theo việc hấp thụ hoặc tỏa nhiệt. Nhiệt hóa học cung cấp ngôn ngữ định lượng cho toàn bộ vòng đời của một thuốc: từ tính toán năng lượng phản ứng tổng hợp (Hess, năng lượng liên kết), kiểm soát quá trình sản xuất (nhiệt lượng kế, DSC), đến dự đoán độ ổn định và hạn dùng (Arrhenius, $Q_{10}$) và lựa chọn điều kiện bảo quản `[SRC: S-08.1, S-08.9]` `[ADDED: conceptual bridge]`.

Ba câu hỏi cốt lõi cần trả lời cho mọi phản ứng:
1. **Tỏa hay thu nhiệt?** ($\Delta H < 0$ hay $\Delta H > 0$)
2. **Có tự xảy ra không?** ($\Delta G < 0$ hay $\Delta G > 0$)
3. **Nhanh hay chậm?** ($E_a$ cao hay thấp qua Arrhenius) `[ADDED: three core questions]`


## 8.4. Nội dung bài giảng chính (Main Content)

### 8.4.1. Hệ, Trạng thái, Nội năng & Enthalpy

**Hệ và môi trường:** phần vật chất đang xét là **hệ**, phần còn lại là **môi trường**. Hệ **mở** trao đổi cả chất và năng lượng (cơ thể, cốc nước để hở); hệ **kín** chỉ trao đổi năng lượng (ống nghiệm đậy kín); hệ **cô lập** không trao đổi gì (bình nhiệt lượng kế lý tưởng) `[SRC: S-08.1]` `[ADDED: definition]`.

**Hàm trạng thái:** chỉ phụ thuộc trạng thái đầu–cuối, không phụ thuộc đường đi: $U$ (nội năng), $H$ (enthalpy), $S$ (entropy), $G$ (năng lượng Gibbs). Ngược lại $Q$ (nhiệt) và $A$ (công) là **hàm đường đi** — cùng biến đổi trạng thái nhưng lượng nhiệt/công có thể khác nhau `[SRC: S-08.1]` `[ADDED: definition]`.

**Nội năng $U$:** tổng động năng và thế năng của mọi phân tử trong hệ. Không đo được giá trị tuyệt đối, chỉ đo được **biến thiên** $\Delta U$ `[SRC: S-08.1]` `[ADDED: definition]`.

**Enthalpy $H = U + PV$:** ở áp suất không đổi (đa số thí nghiệm và quá trình sống), nhiệt trao đổi đúng bằng biến thiên enthalpy:

$$Q_p = \Delta H \qquad \text{và} \qquad \Delta H = \Delta U + P\Delta V$$ `[SRC: S-08.1]` `[ADDED: equation with variable list]`.

**Quy ước dấu:** $\Delta H < 0$: hệ **tỏa nhiệt** ra môi trường (phản ứng cháy, trung hòa, hydrat hóa); $\Delta H > 0$: hệ **thu nhiệt** (phân hủy, hòa tan $NH_4NO_3$, thăng hoa) `[SRC: S-08.1]` `[ADDED: sign convention]`.

**Bảng 8.1.** Đại lượng nhiệt hóa chính. `[SRC: S-08.1]`

| Đại lượng | Ký hiệu | Đơn vị | Ý nghĩa thực tế |
|---|---|---|---|
| Nhiệt phản ứng | $Q$, $\Delta H$ | J; kJ/mol | Nhiệt tỏa/ thu khi phản ứng xảy ra |
| Nội năng | $U$ | J; kJ/mol | Năng lượng bên trong hệ |
| Entropy | $S$ | J/(mol·K) | Mức "mất trật tự" của hệ |
| Năng lượng Gibbs | $G$ | kJ/mol | Phần năng lượng dùng được để sinh công |
| Nhiệt dung riêng | $c$ | J/(g·K) | Nhiệt cần để 1 g chất tăng 1 K |

> **Cách nhớ:** "Tỏa là âm — Thu là dương" (nhìn từ phía hệ). Còn **"H ở áp suất không đổi — U ở thể tích không đổi"**: làm thí nghiệm trong cốc hở thì đo $\Delta H$, trong bom kín thì đo $\Delta U$ `[SRC: S-08.1]` `[ADDED: mnemonic]`.

### 8.4.2. Định luật I & Nhiệt Phản Ứng

**Định luật I (bảo toàn năng lượng):** năng lượng không tự sinh ra hay mất đi, chỉ chuyển hóa. Với hệ kín:

$$Q = \Delta U + A \qquad \text{hay} \qquad \Delta U = Q - A$$ `[SRC: S-08.2]` `[ADDED: equation with variable list]`

trong đó $A$ là công hệ sinh ra (nếu hệ nhận công thì $A < 0$). Nhiệt lượng kế đo $Q$, từ đó suy ra $\Delta U$ hoặc $\Delta H$ `[SRC: S-08.2]` `[ADDED: definition]`.

**Liên hệ $\Delta H$ và $\Delta U$ khi có khí:**

$$\Delta H = \Delta U + \Delta n_{khí}RT$$ `[SRC: S-08.2]` `[ADDED: equation with variable list]`

với $\Delta n_{khí}$ = số mol khí sản phẩm − số mol khí tham gia. Nếu không có khí ($\Delta n = 0$) thì $\Delta H \approx \Delta U$ `[SRC: S-08.2]` `[ADDED: special case]`.

**Các loại nhiệt phản ứng** `[SRC: S-08.2]`:
- **Nhiệt tạo thành chuẩn** $\Delta H_f^\circ$: nhiệt khi tạo 1 mol hợp chất từ các đơn chất ở trạng thái bền nhất, điều kiện chuẩn. Đơn chất bền (O₂, N₂, H₂, C than chì) có $\Delta H_f^\circ = 0$.
- **Nhiệt cháy** $\Delta H_c^\circ$: nhiệt khi đốt cháy hoàn toàn 1 mol chất (luôn âm).
- **Nhiệt trung hòa, nhiệt hòa tan, nhiệt hydrat hóa, nhiệt thăng hoa:** tương ứng với từng quá trình.

> **Ví dụ 8.1.** Một viên glucose 5 g cung cấp bao nhiêu năng lượng? `[SRC: S-08.2]`
>
> - **Given:** Phản ứng đốt cháy hoàn toàn glucose: $\text{C}_6\text{H}_{12}\text{O}_6 + 6\text{O}_2 \rightarrow 6\text{CO}_2 + 6\text{H}_2\text{O}$, $\Delta H_c^\circ = -2803\ \text{kJ/mol}$.
> - **Find:** Nhiệt tỏa ra khi đốt 5 g glucose, đổi ra kcal.
> - **Solution:**
>   1. Số mol trong 5 g: $n = \dfrac{5}{180} \approx 0,0278\ \text{mol}$.
>   2. Nhiệt tỏa ra: $Q = 0,0278 \times 2803 \approx 78\ \text{kJ}$. Đổi ra kcal: $78 / 4,184 \approx 18,6\ \text{kcal}$.
>   3. **Kết luận:** một viên glucose 5 g cho khoảng 78 kJ (≈ 19 kcal) — đúng cỡ một viên năng lượng dùng khi hạ đường huyết nhẹ.
> - **Check:** Kết quả gần 20 kcal, hợp với cường năng của glucose (khoảng 4 kcal/g × 5 g = 20 kcal, sai số do làm tròn) `[SRC: S-08.2]`.
> - **Interpretation:** Năng lượng dự trữ trong glucose có thể được thu phóng bằng đốt cháy, đây là cơ sở cho trao đổi chất trong cơ thể `[ADDED: physiological relevance]`.

### 8.4.3. Định luật Hess & Cách Tính Nhiệt Phản Ứng

**Định luật Hess:** Vì $H$ là hàm trạng thái, nhiệt phản ứng **không phụ thuộc đường đi** mà chỉ phụ thuộc chất đầu và chất cuối. Đây là công cụ mạnh nhất để tính những phản ứng không thể đo trực tiếp (quá chậm, có phản ứng phụ, hoặc nguy hiểm) `[SRC: S-08.3]` `[ADDED: definition]`.

$$\Delta H^\circ_{pư} = \sum \Delta H_f^\circ(\text{sản phẩm}) - \sum \Delta H_f^\circ(\text{chất tham gia})$$ `[SRC: S-08.3]` `[ADDED: equation with variable list]`

Hệ quả: có thể cộng trừ các phương trình nhiệt hóa như cộng trừ phương trình đại số `[SRC: S-08.3]` `[ADDED: consequence]`.

> **Cách nhớ công thức Hess:** "Sản phẩm trừ chất tham gia" — nhớ theo thứ tự đọc từ trái sang phải của một phản ứng. Mẹo kiểm tra: nếu kết quả ra dương mà phản ứng đốt cháy thì chắc chắn đã đảo dấu `[SRC: S-08.3]` `[ADDED: mnemonic]`.

> **Ví dụ 8.2.** Tính nhiệt tổng hợp urê (Hess) `[SRC: S-08.3]`
>
> - **Given:** Phản ứng: $\text{CO}_2(k) + 2\text{NH}_3(k) \rightarrow \text{CO(NH}_2)_2(r) + \text{H}_2\text{O}(l)$. Nhiệt tạo thành chuẩn: $\text{CO}_2$: $-393,5$; $\text{NH}_3$: $-46,2$; urê: $-333,5$; $\text{H}_2\text{O}(l)$: $-285,8$ (kJ/mol).
> - **Find:** $\Delta H^\circ$ của phản ứng tổng hợp urê.
> - **Solution:**
>   1. Áp dụng định luật Hess: $\Delta H^\circ = [(-333,5) + (-285,8)] - [(-393,5) + 2(-46,2)]$.
>   2. Tính: $= -619,3 + 485,9 = -133,4\ \text{kJ/mol}$.
>   3. **Đọc kết quả:** phản ứng **tỏa** ≈ 133 kJ cho mỗi mol urê, nên về mặt nhiệt động rất thuận lợi; trong công nghiệp vẫn cần áp suất cao để tăng tốc độ và dịch chuyển cân bằng.
> - **Check:** Kết quả âm (tỏa nhiệt), phù hợp với phản ứng tổng hợp urê phóng nhiệt `[SRC: S-08.3]`.
> - **Interpretation:** Định luật Hess cho phép tính nhiệt phản ứng mà không cần đo trực tiếp, rất hữu ích cho những phản ứng chậm hoặc nguy hiểm `[ADDED: interpretation]`.

### 8.4.4. Năng lượng Liên kết

**Năng lượng liên kết** là năng lượng cần để bẻ gãy 1 mol liên kết ở pha khí (luôn **dương** — phải cấp năng lượng) `[SRC: S-08.4]` `[ADDED: definition]`.

**Nguyên tắc:** phản ứng hóa học = bẻ liên kết cũ (thu năng lượng) + tạo liên kết mới (tỏa năng lượng):

$$\Delta H \approx \sum E_{liên\ kết\ bẻ\ gãy} - \sum E_{liên\ kết\ hình\ thành}$$ `[SRC: S-08.4]` `[ADDED: equation with variable list]`

**Bảng 8.2.** Năng lượng liên kết của beberapa liên kết phổ biến. `[SRC: S-08.4]`

| Liên kết | $E$ (kJ/mol) | Liên kết | $E$ (kJ/mol) |
|---|---|---|---|
| H–H | 436 | C–H | 413 |
| O=O | 498 | C–C | 347 |
| C=O | 745 (trong $\text{CO}_2$: 799) | C=C | 614 |
| O–H | 463 | C≡C | 839 |
| N–H | 391 | C–O | 358 |

> **Ví dụ 8.3.** Đốt methane bằng năng lượng liên kết `[SRC: S-08.4]`
>
> - **Given:** $\text{CH}_4 + 2\text{O}_2 \rightarrow \text{CO}_2 + 2\text{H}_2\text{O}(k)$.
> - **Find:** Tính $\Delta H$ bằng năng lượng liên kết.
> - **Solution:**
>   1. **Bẻ gãy:** $4 \times \text{C–H} = 4(413) = 1652$; $2 \times \text{O=O} = 2(498) = 996$ → tổng $2648\ \text{kJ}$.
>   2. **Tạo thành:** $2 \times \text{C=O}$ (trong $\text{CO}_2$) $= 2(799) = 1598$; $4 \times \text{O–H} = 4(463) = 1852$ → tổng $3450\ \text{kJ}$.
>   3. $\Delta H \approx 2648 - 3450 = -802\ \text{kJ/mol}$.
>   4. **So với thực nghiệm:** $-802\ \text{kJ/mol}$ đúng với trường hợp nước ở thể **hơi**; nếu nước ngưng tụ thành lỏng, cộng thêm $2 \times 44 = 88\ \text{kJ}$ → $\approx -890\ \text{kJ/mol}$. Bài học: năng lượng liên kết trung bình chỉ cho **ước lượng**, sai số vài % và phụ thuộc trạng thái vật lý.
> - **Check:** Kết quả âm (tỏa nhiệt), phù hợp với đốt cháy methane `[SRC: S-08.4]`.
> - **Interpretation:** Năng lượng liên kết trung bình chỉ cho ước lượng gần đúng, không thay cho phép tính chính xác bằng định luật Hess `[ADDED: interpretation]`.

### 8.4.5. Nhiệt Dung & Nhiệt Lượng Kế

**Nhiệt lượng thu/tỏa khi thay đổi nhiệt độ:**

$$Q = mc\Delta T \qquad \text{với nước: } c \approx 4,18\ \text{J/(g}\cdot\text{K)}$$ `[SRC: S-08.5]` `[ADDED: equation with variable list]`

trong đó $m$: khối lượng (g), $c$: nhiệt dung riêng, $\Delta T$: độ tăng nhiệt độ (K) `[SRC: S-08.5]` `[ADDED: variable list]`.

**Nhiệt lượng kế bom:** đốt mẫu trong bình kín chứa O₂, nhúng trong nước; đo $\Delta T$ của nước → tính $Q$ → suy ra $\Delta H_c^\circ$. Vì thể tích không đổi, giá trị đo trực tiếp là $\Delta U$; chuyển sang $\Delta H$ bằng $\Delta H = \Delta U + \Delta nRT$ `[SRC: S-08.5]` `[ADDED: definition]`.

> **Ví dụ 8.4.** Đo nhiệt cháy glucose bằng nhiệt lượng kế `[SRC: S-08.5]`
>
> - **Given:** Đốt $0,50\ \text{g}$ glucose trong bom nhiệt lượng kế chứa $500\ \text{g}$ nước; nhiệt độ nước tăng $3,7\ \text{K}$.
> - **Find:** Tính $\Delta H_c^\circ$ của glucose.
> - **Solution:**
>   1. $Q_{nước} = 500 \times 4,18 \times 3,7 \approx 7,73 \times 10^3\ \text{J} = 7,73\ \text{kJ}$.
>   2. Số mol glucose: $0,50/180 \approx 2,78 \times 10^{-3}\ \text{mol}$ → $\Delta U \approx -\dfrac{7,73}{2,78 \times 10^{-3}} \approx -2,78 \times 10^3\ \text{kJ/mol}$.
>   3. **Nhận xét:** gần với giá trị chuẩn $-2803\ \text{kJ/mol}$; phần chênh lệch do thất thoát nhiệt ra môi trường và nhiệt dung của bom, cốc, nhiệt kế chưa được tính hết.
> - **Check:** Kết quả $-2780\ \text{kJ/mol}$ gần $-2803\ \text{kJ/mol}$ (sai số ~1%), do thất thoát nhiệt `[SRC: S-08.5]`.
> - **Interpretation:** Nhiệt lượng kế bom cho phép đo năng lượng dự trữ của thực phẩm/thuốc, nhưng cần kiểm soát thất thoát nhiệt `[ADDED: interpretation]`.

### 8.4.6. Định luật II, Entropy & Năng lượng Gibbs

**Entropy $S$:** đo mức độ phân tán/mất trật tự. Hệ cô lập chỉ tự diễn biến theo chiều $\Delta S > 0$ (rắn → lỏng → khí, tăng số hạt khí, trộn lẫn) `[SRC: S-08.6]` `[ADDED: definition]`.

**Năng lượng Gibbs:** tiêu chuẩn gộp cả yếu tố nhiệt và yếu tố trật tự ở nhiệt độ $T$:

$$\Delta G = \Delta H - T\Delta S$$ `[SRC: S-08.6]` `[ADDED: equation with variable list]`

$\Delta G < 0$: phản ứng **tự xảy ra** (thuận lợi); $\Delta G = 0$: **cân bằng**; $\Delta G > 0$: **không tự xảy ra** (cần cấp năng lượng, ví dụ ghép với ATP) `[SRC: S-08.6]` `[ADDED: definition]`.

**Nhiệt độ đảo chiều:** khi $\Delta H$ và $\Delta S$ cùng dấu, đặt $\Delta G = 0$:

$$T_{đảo} = \frac{\Delta H}{\Delta S}$$ `[SRC: S-08.6]` `[ADDED: equation with variable list]`

**Bảng 8.3.** Tiêu chí tự diễn biến. `[SRC: S-08.6]`

| $\Delta H$ | $\Delta S$ | Tự xảy ra khi | Ví dụ |
|---|---|---|---|
| − | + | Mọi nhiệt độ | Cháy, trung hòa acid – base |
| − | − | Nhiệt độ thấp | Đông đặc, ngưng tụ |
| + | + | Nhiệt độ cao | Nung đá vôi, phân hủy thuốc |
| + | − | Không bao giờ | Quá trình "phi tự nhiên" |

> **Ví dụ 8.5.** Nung đá vôi: bao nhiêu độ thì phân hủy? `[SRC: S-08.6]`
>
> - **Given:** $\text{CaCO}_3(r) \rightarrow \text{CaO}(r) + \text{CO}_2(k)$ có $\Delta H^\circ = +178\ \text{kJ/mol}$, $\Delta S^\circ = +160,5\ \text{J/(mol}\cdot\text{K)}$.
> - **Find:** Tìm nhiệt độ đảo chiều $T_{đảo}$.
> - **Solution:**
>   1. $\Delta G = 0 \Rightarrow T = \dfrac{178\,000}{160,5} \approx 1109\ \text{K} \approx 836^\circ\text{C}$.
>   2. **Đọc kết quả:** dưới $836^\circ\text{C}$ phản ứng không tự xảy ra (đá vôi bền); trên nhiệt độ đó bắt đầu phân hủy mạnh. Đây là lý do lò nung vôi phải chạy trên $900^\circ\text{C}$.
> - **Check:** Kết quả bằng Kelvin, đổi sang °C đúng $[SRC: S-08.6]$.
> - **Interpretation:** Nhiệt độ đảo chiều cho biết ngưỡng nhiệt để phản ứng tự diễn biến `[ADDED: interpretation]`.

> **Ví dụ 8.6.** Vì sao $NH_4NO_3$ tan trong nước lại làm lạnh? `[SRC: S-08.6]`
>
> - **Given:** Hòa tan $NH_4NO_3$: $\Delta H_{hòa\ tan} \approx +25,7\ \text{kJ/mol}$ (thu nhiệt) nhưng $\Delta S > 0$ rất lớn vì ion bị phân tán và phá vỡ mạng tinh thể.
> - **Find:** Giải thích tại sao quá trình hút nhiệt vẫn tự xảy ra ở nhiệt độ phòng.
> - **Solution:**
>   1. Ở $T = 298\ \text{K}$: $\Delta G = 25\,700 - 298 \times \Delta S$. Với $\Delta S \approx +110\ \text{J/K}$: $\Delta G \approx 25\,700 - 32\,800 = -7\,100\ \text{J} < 0$ → vẫn tan tự phát.
>   2. **Hệ quả:** quá trình hút nhiệt từ nước xung quanh → nhiệt độ dung dịch giảm, ứng dụng làm **túi chườm lạnh tức thời**. Ngược lại, hòa tan $NaOH$ hay $H_2SO_4$ tỏa nhiệt mạnh → phải cho acid vào nước từ từ, không làm ngược lại.
> - **Check:** $\Delta G < 0$ xác nhận quá trình tự phát $[SRC: S-08.6]$.
> - **Interpretation:** Entropy tăng ($\Delta S > 0$) có thể bù đắp sự hút nhiệt ($\Delta H > 0$), làm cho quá trình vẫn tự phát `[ADDED: interpretation]`.

### 8.4.7. Ứng dụng trong Bào chế, Bảo quản & Phân tích Thuốc

**Độ bền thuốc và nhiệt độ (phương trình Arrhenius):** tốc độ phân hủy tăng theo nhiệt độ:

$$k = A\,e^{-E_a/RT} \qquad \Rightarrow \qquad \frac{k_2}{k_1} = e^{\frac{E_a}{R}\left(\frac{1}{T_1} - \frac{1}{T_2}\right)}$$ `[SRC: S-08.7]` `[ADDED: equation with variable list]`

trong đó $E_a$: năng lượng hoạt hóa (J/mol), $R = 8,314\ \text{J/(mol}\cdot\text{K)}$, $T$: nhiệt độ tuyệt đối (K) `[SRC: S-08.7]` `[ADDED: variable list]`.

**Quy tắc $Q_{10}$:** với đa số phản ứng phân hủy, cứ tăng 10 °C thì tốc độ tăng khoảng 2 – 3 lần. Vì vậy bảo quản thuốc ở 2 – 8 °C có thể kéo dài hạn dùng lên nhiều lần; ngược lại, để thuốc trong cốp xe nóng 50 °C có thể làm hỏng thuốc chỉ trong vài ngày `[SRC: S-08.7]` `[ADDED: rule of thumb]`.

**Đa hình (polymorph) và năng lượng Gibbs:** hai dạng tinh thể cùng công thức nhưng khác cấu trúc có $G$ khác nhau. Dạng **siêu bền** có $G$ cao hơn nên độ tan (và tốc độ hấp thụ) cao hơn, nhưng có xu hướng chuyển thành dạng bền hơn — làm giảm hiệu lực hoặc thay đổi tương đương sinh học theo thời gian. Đây là lý do cần kiểm soát đa hình trong sản xuất (ví dụ ritonavir) `[SRC: S-08.7]` `[ADDED: pharmaceutical relevance]`.

**Phân tích nhiệt (DSC/TGA):** đo nhiệt thu/tỏa khi nung mẫu giúp phát hiện điểm nóng chảy, chuyển dạng đa hình, mất nước kết tinh và **tương kỵ thuốc – tá dược** (xuất hiện pic lạ hoặc dịch chuyển pic) `[SRC: S-08.7]` `[ADDED: analytical application]`.

**Đông khô (lyophilization):** nước thăng hoa trực tiếp từ băng cần cấp nhiệt thăng hoa ($\Delta H_{sub} \approx 51\ \text{kJ/mol}$ ở 0 °C) trong môi trường chân không — hiểu nhiệt hóa giúp chọn chu trình sấy và tránh nóng chảy khối băng `[SRC: S-08.7]` `[ADDED: process application]`.

**Nhiệt hòa tan và thuốc tiêm:** thuốc tan tỏa nhiệt mạnh có thể gây đau hoặc hoại tử mô tại chỗ tiêm; pha loãng, làm ấm dung dịch và tiêm chậm giúp giảm phản ứng. Ngược lại, thuốc tan thu nhiệt gây cảm giác lạnh `[SRC: S-08.7]` `[ADDED: clinical relevance]`.

**Năng lượng mạng tinh thể và độ tan:** muối có năng lượng mạng lớn (liên kết ion mạnh) thường khó tan; chu trình Born – Haber phân tách quá trình thành thăng hoa, ion hóa, phân ly và hydrat hóa — mỗi bước đều là một $\Delta H$ riêng `[SRC: S-08.7]` `[ADDED: lattice energy]`.

**Bảo quản theo điều kiện khíały (ICH):** nghiên cứu độ ổn định ở 25 °C/60% RH, 30 °C/65% RH và 40 °C/75% RH rồi ngoại suy bằng Arrhenius để xác định hạn dùng và điều kiện bảo quản `[SRC: S-08.7]` `[ADDED: regulatory application]`.

> **Ví dụ 8.7.** Tăng 10 °C, thuốc phân hủy nhanh thêm bao nhiêu? `[SRC: S-08.7]`
>
> - **Given:** Một hoạt chất có $E_a = 75\ \text{kJ/mol}$, bảo quản từ 25 °C lên 35 °C.
> - **Find:** Tính tỷ lệ $k_{35}/k_{25}$ và sự thay đổi hạn dùng.
> - **Solution:**
>   1. $\dfrac{k_{35}}{k_{25}} = e^{\frac{75\,000}{8,314}\left(\frac{1}{298} - \frac{1}{308}\right)} = e^{0,982} \approx 2,7$.
>   2. **Kết luận:** tốc độ phân hủy tăng ≈ 2,7 lần, nên hạn dùng ở 35 °C chỉ còn khoảng $1/2,7 \approx 37\%$ so với ở 25 °C. Đây là cơ sở định lượng của quy tắc "tăng 10 °C nhanh gấp 2 – 3 lần" và của việc bắt buộc bảo quản lạnh với vaccine, insulin, một số kháng sinh pha tiêm.
> - **Check:** Kết quả 2,7 lần nằm trong khoảng 2–3 lần của quy tắc $Q_{10}$ $[SRC: S-08.7]$.
> - **Interpretation:** Nhiệt độ bảo quản là yếu tố then chốt cho độ ổn định thuốc, đặc biệt với vaccine và insulin `[ADDED: clinical relevance]`.

### 8.4.8. Quy trình 4 Bước Giải Một Bài Nhiệt Hóa

**Bước 1 — Xác định hệ và quá trình:** phản ứng cháy, hòa tan, chuyển pha hay tạo phức? Ở áp suất không đổi (dùng $\Delta H$) hay thể tích không đổi (dùng $\Delta U$)?

**Bước 2 — Chọn công thức gốc:** có $\Delta H_f^\circ$ → dùng Hess; có năng lượng liên kết → dùng $\sum E_{bẻ} - \sum E_{tạo}$; có khối lượng và $\Delta T$ → dùng $Q = mc\Delta T$ `[SRC: S-08.8]` `[ADDED: decision tree]`.

**Bước 3 — Tính toán kèm đơn vị:** đổi kJ ↔ J, °C → K ($T = t + 273$), gam → mol. Kiểm tra dấu: tỏa nhiệt phải âm.

**Bước 4 — Biên luận:** nếu đề hỏi "có tự xảy ra không" thì tính $\Delta G = \Delta H - T\Delta S$ và so với 0; nếu hỏi "ở nhiệt độ nào" thì giải $\Delta G = 0$ `[SRC: S-08.8]` `[ADDED: decision tree]`.

**Bảng 8.4.** Công thức chính và lưu ý. `[SRC: S-08.8]`

| Công thức | Dùng khi | Lưu ý |
|---|---|---|
| $Q = mc\Delta T$ | Đo nhiệt lượng kế | $c_{nước} = 4,18\ \text{J/(g}\cdot\text{K)}$; $\Delta T$ tính bằng K |
| $\Delta H = \Delta U + \Delta nRT$ | Chuyển giữa hai điều kiện | Chỉ tính mol khí |
| $\Delta H^\circ = \sum \Delta H_f^\circ(sp) - \sum \Delta H_f^\circ(tg)$ | Có bảng nhiệt tạo thành | Nhân đúng hệ số cân bằng |
| $\Delta H \approx \sum E_{bẻ} - \sum E_{tạo}$ | Chỉ có năng lượng liên kết | Chỉ là giá trị gần đúng, pha khí |
| $\Delta G = \Delta H - T\Delta S$ | Xét chiều tự diễn biến | Đơn vị: kJ và J phải đổi cho khớp |
| $T_{đảo} = \Delta H/\Delta S$ | $\Delta H$, $\Delta S$ cùng dấu | Kết quả là Kelvin |
| $k = Ae^{-E_a/RT}$ | Độ ổn định, hạn dùng | $T$ phải là Kelvin; $E_a$ đổi ra J |

---

## 8.5. Ví dụ minh họa & Quy trình thực hành (Examples & Illustrations)

(Tất cả 7 ví dụ đã được trình bày chi tiết trong các mục 4.2–4.7 ở trên: Ví dụ 8.1–8.7.)

---

## 8.6. Tóm tắt chương (Chapter Summary)

### 8.6.1. Tóm tắt Nội dung Trọng tâm & Quy tắc Ghi nhớ

Các luận điểm chính của chương 8 `[SRC: S-08.1–S-08.9]`:

1. **Hệ & enthalpy:** hệ mở/kín/cô lập; hàm trạng thái ($U, H, S, G$) vs hàm đường đi ($Q, A$); enthalpy $H = U + PV$, ở áp suất không đổi $Q_p = \Delta H$ `[SRC: S-08.1]`.
2. **Định luật I:** năng lượng không tự sinh ra hay mất đi; $Q = \Delta U + A$; $\Delta H = \Delta U + \Delta nRT$ `[SRC: S-08.2]`.
3. **Định luật Hess:** nhiệt phản ứng không phụ thuộc đường đi; $\Delta H^\circ = \sum \Delta H_f^\circ(\text{sản phẩm}) - \sum \Delta H_f^\circ(\text{chất tham gia})$ `[SRC: S-08.3]`.
4. **Năng lượng liên kết:** $\Delta H \approx \sum E_{bẻ} - \sum E_{tạo}$; chỉ là ước lượng gần đúng `[SRC: S-08.4]`.
5. **Nhiệt dung & nhiệt lượng kế:** $Q = mc\Delta T$; nhiệt lượng kế bom đo $\Delta U$, chuyển sang $\Delta H = \Delta U + \Delta nRT$ `[SRC: S-08.5]`.
6. **Định luật II & Gibbs:** $\Delta G = \Delta H - T\Delta S$; $\Delta G < 0$ tự xảy ra, $\Delta G = 0$ cân bằng, $\Delta G > 0$ không tự xảy ra `[SRC: S-08.6]`.
7. **Nhiệt độ đảo chiều:** $T_{đảo} = \Delta H/\Delta S$ khi $\Delta H$ và $\Delta S$ cùng dấu `[SRC: S-08.6]`.
8. **Arrhenius & Q10:** $k = Ae^{-E_a/RT}$; tăng 10 °C → tốc độ tăng 2–3 lần `[SRC: S-08.7]`.
9. **Ứng dụng dược lý:** độ bền thuốc, đa hình, DSC/TGA, đông khô, nhiệt hòa tan, ICH, bảo quản lạnh vaccine/insulin `[SRC: S-08.7]`.

> **Quy tắc ghi nhớ (mnemonic):**
> - **"Một định luật — Hai trạng thái — Ba câu hỏi":** Một định luật bảo toàn năng lượng; hai cặp khái niệm đối lập (tỏa/thu, bền/kém bền); ba câu hỏi cần trả lời cho mọi phản ứng: $(1)$ tỏa hay thu? $(2)$ có tự xảy ra không? $(3)$ nhanh hay chậm? — tương ứng $\Delta H$, $\Delta G$ và $E_a$ `[SRC: S-08.1, S-08.6, S-08.7]` `[ADDED: mnemonic]`.
> - **"G = H trừ T·S; âm thì chạy, dương thì dừng"**: năng lượng Gibbs决定 tính tự diễn biến `[ADDED: mnemonic]`.
> - **"Tỏa là âm — Thu là dương"**: quy ước dấu enthalpy `[ADDED: mnemonic]`.

### 8.6.2. Bảng Tổng hợp Công thức & Lưu ý

**Bảng 8.5.** Tổng hợp công thức, công dụng và lưu ý của chương 8. `[ADDED: Table 8.5]`

| Công thức | Công dụng | Lưu ý |
|---|---|---|
| $Q = mc\Delta T$ | Đo nhiệt lượng kế | $c_{nước} = 4,18\ \text{J/(g}\cdot\text{K)}$; $\Delta T$ tính bằng K |
| $\Delta H = \Delta U + \Delta nRT$ | Chuyển giữa áp suất không đổi và thể tích không đổi | Chỉ tính mol khí |
| $\Delta H^\circ = \sum \Delta H_f^\circ(sp) - \sum \Delta H_f^\circ(tg)$ | Định luật Hess | Nhân đúng hệ số cân bằng |
| $\Delta H \approx \sum E_{bẻ} - \sum E_{tạo}$ | Ước lượng từ năng lượng liên kết | Chỉ gần đúng, pha khí |
| $\Delta G = \Delta H - T\Delta S$ | Xét chiều tự diễn biến | Đơn vị: kJ và J phải đổi cho khớp |
| $T_{đảo} = \Delta H/\Delta S$ | Tìm nhiệt độ đảo chiều | Kết quả tính bằng Kelvin |
| $k = Ae^{-E_a/RT}$ | Độ ổn định, hạn dùng, quy tắc $Q_{10}$ | $T$ phải là Kelvin; $E_a$ đổi ra J |

---

## 8.7. Đánh giá & Bài tập tự lượng giá (Review & Assessment)

[ADDED: assessment section frame] Bộ câu hỏi và bài tập dưới đây được thiết kế theo thang nhận thức từ Nhận biết, Thông hiểu đến Vận dụng, Phân tích và Đánh giá mô hình, bao phủ bốn chuẩn đầu ra `LO-1`–`LO-4` đã phát biểu tại `T-08.2.1`. Mỗi câu đều ghi rõ chuẩn đầu ra và cấp độ nhận thức; đáp án chi tiết nằm tại `T-08.7.4`. Sinh viên nên tự làm bài đầy đủ trước khi đọc đáp án chi tiết.

### 8.7.1. Câu hỏi Lý thuyết: Nhận biết & Thông hiểu (LO-1)

[ADDED: knowledge and comprehension questions]

**Câu 1 (`LO-1` – Knowledge).** Phản ứng nào sau đây là tỏa nhiệt ($\Delta H < 0$)?

- **A.** Hòa tan $NH_4NO_3$ trong nước.
- **B.** Đốt cháy hoàn toàn glucose.
- **C.** Thăng hoa khắc khỉ (kích đá từ đá).
- **D.** Tách điện phân nước.

**Câu 2 (`LO-1` – Comprehension).** Theo định luật Hess, nhiệt phản ứng phụ thuộc vào gì?

- **A.** Đường đi của phản ứng.
- **B.** Chỉ chất đầu và chất cuối (hàm trạng thái).
- **C.** Nhiệt độ và áp suất ban đầu.
- **D.** Dạng vật lý của chất tham gia nhưng không phụ thuộc chất sản phẩm.

**Câu 3 (`LO-1` – Comprehension).** Theo quy tắc $Q_{10}$, nếu tăng nhiệt độ bảo quản thuốc từ 25 °C lên 35 °C, tốc độ phân hủy sẽ thay đổi như thế nào?

- **A.** Giảm khoảng 2–3 lần.
- **B.** Tăng khoảng 2–3 lần.
- **C.** Không thay đổi.
- **C.** Tăng đúng 10 lần.

**Câu 4 (`LO-1` – Comprehension).** Phản ứng nào có $\Delta G < 0$ (tự diễn biến)?

- **A.** $\Delta H > 0$, $\Delta S < 0$ ở mọi nhiệt độ.
- **B.** $\Delta H < 0$, $\Delta S > 0$ ở mọi nhiệt độ.
- **C.** $\Delta H > 0$, $\Delta S > 0$ ở nhiệt độ thấp.
- **D.** $\Delta H < 0$, $\Delta S < 0$ ở nhiệt độ cao.

### 8.7.2. Bài tập Áp dụng: Tính toán $\Delta H$, $\Delta G$, $\Delta S$ (LO-2, LO-3)

[ADDED: application exercises]

**Bài tập 5 (`LO-2` – Application).** Cho phản ứng đốt cháy metanol: $\text{CH}_3\text{OH}(l) + \frac{3}{2}\text{O}_2(g) \rightarrow \text{CO}_2(g) + 2\text{H}_2\text{O}(l)$. Cho $\Delta H_f^\circ$: $\text{CH}_3\text{OH}(l) = -238,6$; $\text{CO}_2(g) = -393,5$; $\text{H}_2\text{O}(l) = -285,8$ (kJ/mol). Hãy tính $\Delta H^\circ$ của phản ứng và xác định xem phản ứng tỏa hay thu nhiệt.

**Bài tập 6 (`LO-2` – Application).** Một mẫu $2,00\ \text{g}$ của một chất organic được đốt trong bom nhiệt lượng kế chứa $1000\ \text{g}$ nước. Nhiệt độ nước tăng từ $22,5^\circ\text{C}$ lên $28,3^\circ\text{C}$. Tính năng lượng đốt cháy đơn vị (kJ/g) của chất đó, biết $c_{nước} = 4,18\ \text{J/(g}\cdot\text{K)}$.

**Bài tập 7 (`LO-3` – Application).** Cho phản ứng phân hủy một chất bảo quản: $E_a = 85\ \text{kJ/mol}$. Tính tỷ lệ tốc độ phân hủy ở $40^\circ\text{C}$ so với ở $25^\circ\text{C}$. Dự đoán hạn dùng ở $40^\circ\text{C}$ so với ở $25^\circ\text{C}$.

### 8.7.3. Câu hỏi Phân tích & Vận dụng Nâng cao (LO-3, LO-4)

[ADDED: analytical and advanced questions]

**Câu 8 (`LO-3`, `LO-4` – Analysis).** Giải thích tại sao vaccine và insulin phải bảo quản ở 2–8 °C, dựa trên phương trình Arrhenius và quy tắc $Q_{10}$. Nêu hậu quả nếu thuốc được lưu ở 30–40 °C trong thời gian dài `[SRC: S-08.7]` `[ADDED: critical thinking]`.

**Câu 9 (`LO-3` – Analysis).** Một thuốc tồn tại dưới hai dạng đa hình: dạng A (siêu bền, $G$ cao hơn) và dạng B (bền hơn, $G$ thấp hơn). Giải thích tại sao dạng A có độ tan cao hơn nhưng có xu hướng chuyển thành dạng B theo thời gian, và điều này ảnh hưởng thế nào đến hiệu lực thuốc `[SRC: S-08.7]` `[ADDED: critical thinking]`.

**Câu 10 (`LO-4` – Advanced).** Đánh giá vai trò của nhiệt hóa học trong lựa chọn điều kiện bảo quản thuốc theo tiêu chuẩn ICH (25 °C/60% RH, 30 °C/65% RH, 40 °C/75% RH). Giải thích tại sao cần nghiên cứu độ ổn định ở các điều kiện này và ngoại suy bằng Arrhenius `[SRC: S-08.7]` `[ADDED: critical thinking]`.

---

## 8.7.4. Đáp án & Hướng dẫn Giải Chi tiết (Answer Key)

[ADDED: step-by-step answer key]

**Câu 1 — `LO-1` · Knowledge. Đáp án B.** Đốt cháy hoàn toàn glucose là phản ứng tỏa nhiệt ($\Delta H < 0$). Phương án A (hoà tan $NH_4NO_3$) là thu nhiệt; C và D cũng là quá trình hút nhiệt `[SRC: S-08.2]` `[ADDED: sign convention]`.

**Câu 2 — `LO-1` · Comprehension. Đáp án B.** Theo định luật Hess, $H$ là hàm trạng thái, nên nhiệt phản ứng chỉ phụ thuộc chất đầu và chất cuối, không phụ thuộc đường đi `[SRC: S-08.3]` `[ADDED: state function]`.

**Câu 3 — `LO-1` · Comprehension. Đáp án B.** Theo quy tắc $Q_{10}$, tăng 10 °C làm tốc độ phân hủy tăng khoảng 2–3 lần `[SRC: S-08.7]` `[ADDED: Q10 rule]`.

**Câu 4 — `LO-1` · Comprehension. Đáp án B.** $\Delta H < 0$ (tỏa nhiệt) và $\Delta S > 0$ (tăng độ Verlust trật tự) $\Rightarrow \Delta G = \Delta H - T\Delta S < 0$ ở mọi nhiệt độ $\Rightarrow$ tự diễn biến `[SRC: S-08.6]` `[ADDED: Gibbs free energy]`.

**Bài tập 5 — `LO-2` · Application.**
$\Delta H^\circ = [(-393,5) + 2(-285,8)] - [(-238,6) + 0] = (-393,5 - 571,6) + 238,6 = -965,1 + 238,6 = -726,5\ \text{kJ/mol}$. Phản ứng tỏa nhiệt ($\Delta H < 0$).

**Bài tập 6 — `LO-2` · Application.**
$Q = mc\Delta T = 1000 \times 4,18 \times (28,3 - 22,5) = 1000 \times 4,18 \times 5,8 = 24\,244\ \text{J} = 24,24\ \text{kJ}$.
Năng lượng đốt cháy đơn vị $= 24,24\ \text{kJ} / 2,00\ \text{g} = 12,12\ \text{kJ/g}$.

**Bài tập 7 — `LO-3` · Application.**
$\dfrac{k_2}{k_1} = e^{\frac{85\,000}{8,314}\left(\frac{1}{298} - \frac{1}{313}\right)} = e^{\frac{85\,000}{8,314} \times 1,606 \times 10^{-4}} = e^{1,64} \approx 5,15$.
Hạn dùng ở $40^\circ\text{C}$ khoảng $1/5,15 \approx 19\%$ so với ở $25^\circ\text{C}$.

**Câu 8 — `LO-3`, `LO-4` · Analysis.**
Theo phương trình Arrhenius, $k$ tăng mạnh khi $T$ tăng. Với $E_a$Typical của phân hủy thuốc (~50–100 kJ/mol), tăng từ 25 °C lên 30–40 °C có thể làm tăng tốc độ phân hủy gấp 2–5 lần, làm giảm đáng kể hạn dùng. Do đó vaccine và insulin (nhân chất protein dễ biến dạng) phải bảo quản lạnh 2–8 °C để kéo dài hạn dùng `[SRC: S-08.7]` `[ADDED: Arrhenius application]`.

**Câu 9 — `LO-3` · Analysis.**
Dạng A (siêu bền, $G$ cao hơn) có năng lượng Gibbs cao hơn nên ít ổn định nhiệt động học hơn, có xu hướng chuyển thành dạng B ($G$ thấp hơn, ổn định hơn). Dạng A có độ tan cao hơn do réseaux tinh thể kém chặt chẽ hơn, nhưng trong thời gian lưu trữ sẽ chuyển dần thành dạng B, làm giảm độ tan và tốc độ hấp thụ, từ đó giảm hiệu lực hoặc thay đổi tương đương sinh học `[SRC: S-08.7]` `[ADDED: polymorphism application]`.

**Câu 10 — `LO-4` · Analysis.**
Nghiên cứu độ ổn định ở các điều kiện ICH cho phép mô phỏng các môi trường lưu trữ thực tế (lạnh, ambient, nóng ẩm). Ngoại suy bằng Arrhenius cho phép dự báo tốc độ phân hủy và xác định hạn dùng mà không cần đợi thời gian thực. Điều này giúp chọn điều kiện bảo quản tối ưu (ví dụ bảo quản lạnh cho các thuốc dễ phân hủy như vaccine, insulin) và thiết kế bao bì phù hợp `[SRC: S-08.7]` `[ADDED: stability testing application]`.

---

## 8.8. Tài liệu tham khảo (References)

### 8.8.1. Danh mục Tài liệu Tham khảo & Đọc thêm

[ADDED: reference section structure] Nguồn `D-08` không có tài liệu tham khảo nào và `APPROVED_REFERENCE_LIST` là `none`. Theo R4, không tự điền tên sách, tác giả, năm, NXB, DOI hay số trang; ba thẻ dưới đây xác định loại tài liệu cần bổ sung.

1. **Giáo trình Hóa Vô cơ Dược (phần nhiệt hóa học & ứng dụng dược):** `[VERIFY: reference needed for Inorganic Pharmaceutical Chemistry textbook covering thermochemistry and pharmaceutical stability (V-08.04)]`.
2. **Giáo trình Hóa đại cương / vô cơ (nhiệt động học, enthalpy, Gibbs, Arrhenius):** `[VERIFY: reference needed for general/inorganic chemistry textbook covering thermodynamics, enthalpy, Gibbs energy, and Arrhenius equation (V-08.04)]`.
3. **Tài liệu Dược công / Dược lý (độ ổn định thuốc, đa hình, ICH, bảo quản):** `[VERIFY: reference needed for pharmaceutics / pharmaceutical stability textbook covering drug stability, polymorphism, and ICH guidelines (V-08.04)]`.

> **Ghi chú tuân thủ R4.** Ba mục trên là thẻ giữ chỗ, không phải trích dẫn đã xác minh; khi có danh mục chuẩn sẽ định dạng Vancouver.

