# Chương 4: Thuyết Orbital Phân tử (MO) & Phân tích Năng lượng LCAO

---

## 1. Tổng quan chương (Chapter Overview) {T-04.1}

### 1.1 Chương 4: Thuyết Orbital Phân tử (MO) & Phân tích Năng lượng LCAO {T-04.1.1}

Chương 3 cho thấy thuyết liên kết hóa trị (Valence Bond – VB) giải thích tốt liên kết định xứ hai tâm – hai electron nhưng bế tắc trước $O_2$ thuận từ, liên kết đa tâm trong $B_2H_6$ và quang phổ phức chất. Chương 4 chuyển sang quan điểm đa tâm: electron chuyển động trong trường thế chung của toàn bộ hạt nhân, mô tả bằng orbital phân tử (Molecular Orbital – MO) `[SRC: S-04.1]` `[ADDED: bridge from Ch03]`.

Chương gồm LCAO, ba điều kiện tổ hợp, phân loại MO, bậc liên kết – từ tính, giản đồ đồng hạch/dị hạch và $3c\text{–}2e$, nối Chương 3 với Chương 5–6 `[ADDED: scope summary]`.

### 1.2 Phạm vi, Kiến thức Tiên quyết & Thời lượng Học tập {T-04.1.2}

- **Kiến thức tiên quyết:**
  1. Cấu hình electron, Pauli, Hund, hình dạng AO $s, p$.
  2. Bậc liên kết, $E_{lk}$ tại `T-01.4.1`; MO mở rộng định nghĩa Lewis `[ADDED: cross-reference to Ch01]`.
  3. $SN = m + n$, lai hóa, liên kết $\sigma, \pi$ tại `T-02.4.2`, `T-03.4.2` `[ADDED: cross-reference to Ch02–03]`.
  4. Ba hạn chế VB tại `T-03.4.6`; độ âm điện $\chi$ `[ADDED: cross-reference to Ch03]`.
- **Thời lượng dự kiến:** ~**2 giờ 40 phút** (2 giờ lý thuyết + 40 phút/10 bài), theo `STUDY_TIME_RULE` `[ADDED: study time estimate]`.

---

## 2. Mục tiêu học tập (Learning Objectives) {T-04.2}

### 2.1 Chuẩn đầu ra Kiến thức, Kỹ năng, Vận dụng và Đánh giá mô hình (LO-1..LO-4) {T-04.2.1}

Sau chương này, sinh viên có thể `[ADDED: learning objectives]`:

- **`LO-1` (Kiến thức):** Phát biểu bản chất MO (hạt nhân đa tâm), LCAO, ba điều kiện tổ hợp, phân loại MO, công thức $BO$ và tiêu chí từ tính.
- **`LO-2` (Kỹ năng):** Lập giản đồ MO đồng hạch chu kỳ 2 với hai trật tự mức, điền electron theo Pauli–Hund, tính $BO$, dự đoán độ dài, năng lượng liên kết và từ tính.
- **`LO-3` (Vận dụng):** Giải thích $O_2$ thuận từ, bậc bán nguyên của $H_2^+, O_2^+, O_2^-$, khác biệt $N_2$/$O_2$ và cơ chế CO–hemoglobin qua HOMO–LUMO.
- **`LO-4` (Đánh giá mô hình):** So sánh MO với VB, nhận diện khi nào cần MO, giải thích $3c\text{–}2e$ trong $B_2H_6$ và nêu giới hạn mô hình.

---

## 3. Đặt vấn đề & Ý nghĩa thực tiễn (Introduction) {T-04.3}

### 3.1 Từ Giới hạn của Thuyết VB đến Thuyết Orbital Phân tử {T-04.3.1}

VB giả định electron liên kết định xứ và ghép đôi — đúng với phần lớn phân tử hữu cơ nhưng sai trước ba dữ kiện: $O_2$ lỏng thuận từ (công thức $:\ddot{O}=\ddot{O}:$ dự đoán nghịch từ), $B_2H_6$ chỉ có 12 electron hóa trị vẫn bền nhờ liên kết cầu, và VB không định lượng được mức năng lượng nên không giải thích quang phổ `[SRC: S-04.6]` `[ADDED: bridge from Ch03]`.

MO bỏ ràng buộc định xứ; phân bố electron trên MO quyết định độ bền và từ tính. MO bổ sung, không phủ định VB `[SRC: S-04.6]` `[ADDED: complementary model]` `[VERIFY: liquid O2 paramagnetism (V-04.01)]`.

---

## 4. Nội dung bài giảng chính (Main Content) {T-04.4}

### 4.1 Bản chất Thuyết MO & Phương pháp LCAO {T-04.4.1}

#### 4.1.1 Quan điểm hạt nhân đa tâm và khái niệm Orbital Phân tử {T-04.4.1.1}

> **Definition.** **Orbital phân tử (MO)** là hàm sóng mô tả trạng thái của một electron trong trường thế chung của toàn bộ hạt nhân; $|\Psi|^2$ là mật độ xác suất tìm thấy electron `[SRC: S-04.1]`.

MO trải trên hai hay nhiều hạt nhân — quan điểm đa tâm — nên mô tả tự nhiên electron phi định xứ, điều VB phải gán cho cấu trúc cộng hưởng `[SRC: S-04.1]` `[ADDED: comparison with VB]`.

#### 4.1.2 Tổ hợp tuyến tính AO: MO liên kết (Ψ) và MO phản liên kết (Ψ*) {T-04.4.1.2}

MO được tính gần đúng bằng tổ hợp tuyến tính các AO:

$$\Psi = c_A \varphi_A + c_B \varphi_B \quad \text{(liên kết)} \qquad \Psi^* = c_A \varphi_A - c_B \varphi_B \quad \text{(phản liên kết)}$$

với $\varphi_A, \varphi_B$ là hàm sóng AO; $c_A, c_B$ là hệ số tổ hợp (không thứ nguyên); dấu $*$ chỉ MO phản liên kết. Cộng cùng dấu tăng mật độ electron giữa hai hạt nhân (liên kết); trừ tạo mặt phẳng nút (phản liên kết) `[SRC: S-04.1]` `[ADDED: standard LCAO background]`.

#### 4.1.3 Điều kiện chuẩn hóa và ý nghĩa hệ số tổ hợp {T-04.4.1.3}

Bỏ qua xen phủ, điều kiện chuẩn hóa là:

$$c_A^2 + c_B^2 = 1$$

với $c_A^2, c_B^2$ là phần đóng góp của mỗi AO (không thứ nguyên); đồng hạch có $c_A = \pm c_B = 1/\sqrt{2}$, dị hạch có $c_A \neq c_B$ và AO năng lượng thấp đóng góp nhiều hơn `[ADDED: standard LCAO background]` `[VERIFY: normalization with overlap neglected (V-04.11)]`.

Năng lượng hai MO là:

$$E_{\pm} = \frac{\alpha \pm \beta}{1 \pm S}$$

trong đó $\alpha$ là tích phân Coulomb ($\alpha < 0$), $\beta$ là tích phân cộng hưởng ($\beta < 0$), $S$ là tích phân xen phủ ($0 \le S \le 1$); $\alpha, \beta$ có đơn vị năng lượng. Vì $\alpha, \beta < 0$, $E_{+}$ nằm dưới $\alpha$ (liên kết) và $E_{-}$ nằm trên (phản liên kết) `[ADDED: standard LCAO background]` `[VERIFY: LCAO energy expression convention (V-04.11)]`.

### 4.2 Ba điều kiện tiên quyết để tổ hợp AO thành MO hiệu quả {T-04.4.2}

Ba điều kiện phải thỏa đồng thời `[SRC: S-04.2]`.

#### 4.2.1 Điều kiện năng lượng {T-04.4.2.1}

Hai AO phải có $\Delta E$ khoảng $10\text{–}14\text{ eV}$ — giá trị tham khảo, phụ thuộc mô hình. $\Delta E$ càng nhỏ, tương tác càng mạnh; quá lớn thì AO không trộn lẫn `[SRC: S-04.2]` `[VERIFY: delta E threshold (V-04.04)]`.

#### 4.2.2 Điều kiện xen phủ {T-04.4.2.2}

Tích phân xen phủ:

$$S_{AB} = \int \varphi_A \varphi_B \, d\tau$$

với $d\tau$ là vi phân thể tích, tích phân trên toàn không gian; $S_{AB}$ không thứ nguyên, $0 \le S \le 1$, phải $> 0$ đáng kể. $S_{AB} = 0$ nghĩa là hai AO không tương tác `[SRC: S-04.2]` `[ADDED: overlap integral meaning]`.

#### 4.2.3 Điều kiện đối xứng và quy ước trục liên kết Oz {T-04.4.2.3}

Hai AO phải cùng đối xứng với trục liên kết $Oz$: $s$ tổ hợp với $s$ và $p_z$ tạo MO $\sigma$; $s$ với $p_x$ hoặc $p_y$ có $S = 0$ vì phần dương và âm triệt tiêu `[SRC: S-04.2]`.

### 4.3 Phân loại MO, Bậc liên kết & Từ tính {T-04.4.3}

#### 4.3.1 MO liên kết (σ, π), MO phản liên kết (σ*, π*) và MO không liên kết (n) {T-04.4.3.1}

MO liên kết thấp hơn AO, tăng mật độ electron liên nhân, làm bền; MO phản liên kết cao hơn, có mặt phẳng nút, làm mất bền; MO không liên kết $n$ giữ nguyên năng lượng (ví dụ $2p$ vuông góc trục trong HF) `[SRC: S-04.3]` `[ADDED: example for n]`.

**Bảng 4.1.** So sánh năm loại MO theo độ chiếm, đối xứng, năng lượng và tác dụng lên liên kết.

| Loại MO | Ký hiệu | Độ chiếm điển hình | Đối xứng / mặt phẳng nút | Năng lượng | Tác dụng |
|---|---|---|---|---|---|
| Liên kết sigma | $\sigma$ | 2 e | Đối xứng trục, 0 mặt phẳng nút chứa trục | Thấp hơn | Làm bền |
| Liên kết pi | $\pi$ | 2 e/MO (tối đa 4) | 1 mặt phẳng nút chứa trục | Thấp hơn, thường trên $\sigma$ | Làm bền, yếu hơn $\sigma$ |
| Phản liên kết sigma | $\sigma^*$ | 0–2 e | Mặt phẳng nút giữa hai hạt nhân | Cao hơn | Làm mất bền |
| Phản liên kết pi | $\pi^*$ | 0–4 e | 2 mặt phẳng nút | Cao hơn | Làm mất bền |
| Không liên kết | $n$ | 2 e (cặp tự do) | Không xen phủ | Giữ nguyên | Trung tính |

Bảng 4.1 cho thấy mức làm bền giảm $\sigma > \pi$, mức phá bền tăng $\sigma^* < \pi^*$ `[ADDED: summary table]`.

#### 4.3.2 Công thức bậc liên kết và bản chất bậc liên kết phân số {T-04.4.3.2}

$$BO = \frac{N_b - N_a}{2}$$

với $N_b, N_a$ là số electron trên MO liên kết và phản liên kết; $BO$ không thứ nguyên. $BO > 0$ có liên kết cộng hóa trị; $BO = 0$ không có liên kết bền — $He_2$ có $(\sigma_{1s})^2(\sigma^*_{1s})^2$, $BO = 0$, chỉ là dimer van der Waals `[SRC: S-04.3]` `[VERIFY: He2 bond order statement (V-04.10)]`.

$BO$ bán nguyên vì electron độc thân chỉ chiếm một trong hai MO suy biến, đóng góp nửa cặp liên kết: $H_2^+$ 0,5; $O_2^+$ 2,5; $O_2^-$ 1,5; $O_2^{2-}$ 1 `[SRC: S-04.3]` `[ADDED: fractional bond order]` `[VERIFY: BO values (V-04.02)]`.

#### 4.3.3 Thuận từ (Paramagnetic) và Nghịch từ (Diamagnetic) {T-04.4.3.3}

Thuận từ khi có ít nhất một electron độc thân; nghịch từ khi mọi electron ghép đôi `[SRC: S-04.3]`. Tiêu chí là số electron độc thân, không phải $BO$: $N_2$ và $CO$ có $BO = 3$ nhưng nghịch từ, $B_2$ có $BO = 1$ nhưng thuận từ. Bỏ cách nhớ "BO lẻ → thuận từ" `[VERIFY: mnemonic correction (V-04.10)]`.

### 4.4 Giản đồ năng lượng MO phân tử đồng hạch chu kỳ 2 (A₂) {T-04.4.4}

Đọc giản đồ từ dưới lên, điền electron theo Pauli và Hund; trật tự mức phụ thuộc mức trộn $2s$–$2p$ `[SRC: S-04.4]`.

#### 4.4.1 Trường hợp không có tương tác 2s–2p: trật tự chuẩn của O₂, F₂ {T-04.4.4.1}

O và F có $Z_{eff}$ lớn, $2s$ giữ chặt, $\Delta E(2p-2s)$ lớn nên không trộn:

$$\sigma_{2s} < \sigma^*_{2s} < \sigma_{2p_z} < (\pi_{2p_x} = \pi_{2p_y}) < (\pi^*_{2p_x} = \pi^*_{2p_y}) < \sigma^*_{2p_z}$$

với $\sigma_{2p_z}$ từ xen phủ trục $2p_z$; $\pi_{2p_x}, \pi_{2p_y}$ suy biến từ xen phủ bên $2p_x, 2p_y$ `[SRC: S-04.4]` `[VERIFY: MO ordering and s-p mixing (V-04.07)]`.

#### 4.4.2 Trường hợp có tương tác 2s–2p: nghịch đảo năng lượng ở B₂, C₂, N₂ {T-04.4.4.2}

Với B, C, N ($Z \le 7$), $\Delta E(2p-2s)$ nhỏ; hai MO $\sigma$ cùng đối xứng trộn cấu hình, đẩy $\sigma_{2p_z}$ lên trên $\pi_{2p}$:

$$\sigma_{2s} < \sigma^*_{2s} < (\pi_{2p_x} = \pi_{2p_y}) < \sigma_{2p_z} < (\pi^*_{2p_x} = \pi^*_{2p_y}) < \sigma^*_{2p_z}$$

Đây là trộn cấu hình, không phải "lực đẩy tĩnh điện" cổ điển `[SRC: S-04.4]` `[ADDED: configuration mixing]` `[VERIFY: MO ordering and s-p mixing (V-04.07)]`. $N_2$ có $BO = 3$ và $E_{lk} \approx 945\text{ kJ/mol}$ `[VERIFY: N2 bond energy (V-04.03)]`.

#### 4.4.3 Giải quyết nghịch lý O₂: cấu hình electron, 2 electron độc thân trên π*, tính thuận từ {T-04.4.4.3}

$O_2$ có 12 electron hóa trị:

$$(\sigma_{2s})^2(\sigma^*_{2s})^2(\sigma_{2p_z})^2(\pi_{2p_x})^2(\pi_{2p_y})^2(\pi^*_{2p_x})^1(\pi^*_{2p_y})^1$$

Hai electron cuối vào hai MO $\pi^*$ suy biến với spin song song theo Hund, nên $O_2$ có **2 electron độc thân**; $N_b = 8$, $N_a = 4$, $BO = 2$. $O_2$ thuận từ, đúng thực nghiệm, điều VB không giải thích được `[SRC: S-04.4]` `[ADDED: MO vs VB language]` `[VERIFY: O2 configuration and paramagnetism (V-04.01)]`.

#### 4.4.4 Bảng tổng hợp phân tử đồng hạch chu kỳ 2 (Bảng 4.2) {T-04.4.4.4}

**Bảng 4.2.** Cấu hình MO, bậc liên kết và từ tính của phân tử đồng hạch chu kỳ 2.

| Phân tử | Tổng e hóa trị | Cấu hình MO (lớp hóa trị) | $N_b$ | $N_a$ | $BO$ | Số e độc thân | Từ tính |
|---|---|---|---|---|---|---|---|
| $B_2$ | 6 | $(\sigma_{2s})^2(\sigma^*_{2s})^2(\pi_{2p})^2$ | 4 | 2 | 1 | 2 | Thuận từ |
| $C_2$ | 8 | $(\sigma_{2s})^2(\sigma^*_{2s})^2(\pi_{2p})^4$ | 6 | 2 | 2 | 0 | Nghịch từ |
| $N_2$ | 10 | $(\sigma_{2s})^2(\sigma^*_{2s})^2(\pi_{2p})^4(\sigma_{2p_z})^2$ | 8 | 2 | 3 | 0 | Nghịch từ |
| $O_2$ | 12 | $(\sigma_{2s})^2(\sigma^*_{2s})^2(\sigma_{2p_z})^2(\pi_{2p})^4(\pi^*_{2p})^2$ | 8 | 4 | 2 | 2 | Thuận từ |
| $F_2$ | 14 | $(\sigma_{2s})^2(\sigma^*_{2s})^2(\sigma_{2p_z})^2(\pi_{2p})^4(\pi^*_{2p})^4$ | 8 | 6 | 1 | 0 | Nghịch từ |

Bảng 4.2 cho thấy $BO$ tăng từ $B_2$ (1) đến $N_2$ (3) rồi giảm đến $F_2$ (1); chỉ $B_2$ và $O_2$ thuận từ `[ADDED: B2, C2, F2 standard configurations]` `[VERIFY: MO configurations and magnetism (V-04.07)]`.

### 4.5 Phân tử dị hạch, Orbital biên HOMO–LUMO & Carbon Monoxide {T-04.4.5}

#### 4.5.1 Nguyên tắc giản đồ MO dị hạch: AO lệch năng lượng và hệ số tổ hợp không bằng nhau {T-04.4.5.1}

Ở $AB$ dị hạch, hai AO lệch năng lượng nên $c_A \neq c_B$; MO liên kết mang đặc tính của AO thấp hơn (nguyên tử âm điện hơn) `[ADDED: heteronuclear MO principle]`.

> **Definition.** **HOMO** là orbital bị chiếm có năng lượng cao nhất; **LUMO** là orbital trống có năng lượng thấp nhất. Cặp HOMO–LUMO là **orbital biên**, quyết định khả năng cho – nhận electron `[ADDED: LUMO and frontier orbital]`.

#### 4.5.2 CO: HOMO tập trung trên C, LUMO là π*, cơ chế σ-donor và π-backbonding {T-04.4.5.2}

CO có 10 electron hóa trị, đồng electron với $N_2$: $(\sigma_{2s})^2(\sigma^*_{2s})^2(\pi_{2p})^4(\sigma_{2p_z})^2$, $BO = 3$, nghịch từ. Vì $\chi(O) > \chi(C)$, HOMO là orbital $\sigma$ tập trung trên C, LUMO là $\pi^*$ `[SRC: S-04.5]` `[VERIFY: CO MO diagram and HOMO localization (V-04.06)]`.

Cơ chế gồm **cho $\sigma$ ($\sigma$-donor)**: C cho cặp electron vào $d$ trống của $Fe^{2+}$; và **cho ngược $\pi$ ($\pi$-backbonding)**: kim loại chuyển mật độ electron vào $\pi^*$, làm bền M–C và yếu C–O `[SRC: S-04.5]` `[ADDED: orbital interaction]`.

#### 4.5.3 Hệ quả dược học: CO gắn mạnh hemoglobin, cản vận chuyển oxy {T-04.4.5.3}

CO chiếm vị trí phối trí trên $Fe^{2+}$ của hemoglobin (Hb). Liên kết CO–Hb bền gấp **200–250 lần** Hb–$O_2$, làm bất hoạt vận chuyển oxy và gây tử vong do ngạt mô nội bào `[SRC: S-04.5]` `[VERIFY: CO-Hb affinity 200–250 times (V-04.05)]`.

> **Important Note.** Chương chỉ giải thích cơ chế orbital theo nguồn; không trình bày liều, chỉ định, phác đồ hay dược động học `[ADDED: DOMAIN_RULES scope note]`.

### 4.6 Liên kết ba tâm – hai electron (3c–2e) trong Diborane (B₂H₆) {T-04.4.6}

$B_2H_6$ có 12 electron hóa trị: 4 liên kết B–H biên ($2c\text{–}2e$, 8 electron) và 2 cầu B–H–B ($3c\text{–}2e$, 4 electron) `[ADDED: standard MO treatment of 3c–2e bridge bond]` `[VERIFY: B2H6 electron count (V-04.09)]`.

Mỗi cầu do hai AO $sp^3$ của B và một AO $1s$ của H tổ hợp thành ba MO: liên kết, không liên kết và phản liên kết. Cặp electron duy nhất chiếm MO liên kết trải trên cả ba tâm, tạo liên kết B–H–B mà VB định xứ không mô tả được — lời giải cho `T-03.4.6` `[ADDED: standard MO treatment of 3c–2e bridge bond]` `[VERIFY: B2H6 3c-2e bonding (V-04.09)]`.

---

<!-- PART1-LIMITATIONS -->

### Chưa kiểm chứng / hạn chế (Phần 1)

- Giá trị/quy ước chưa có nguồn trong `D-04`: $\Delta E$ (`V-04.04`), $BO$ bán nguyên (`V-04.02`), $O_2$ (`V-04.01`), trật tự MO/trộn $s$–$p$ (`V-04.07`), CO–Hb (`V-04.05`), giản đồ CO (`V-04.06`), $B_2H_6$ (`V-04.09`), $He_2$/mẹo nhớ (`V-04.10`), $E_{lk}(N_2)$ (`V-04.03`).
- $E_{\pm}$ và điều kiện chuẩn hóa đầy đủ (có $2c_Ac_BS$) là kiến thức chuẩn ngoài nguồn; đề xuất mã mới `V-04.11`.
- Bảng 4.1, 4.2 do S3 lập; cấu hình $B_2, C_2, F_2$ là kiến thức chuẩn bổ sung `[ADDED]`.
- Chưa có tài liệu tham khảo (`V-04.08`); cần đối chiếu giáo trình chuẩn ở QA.
