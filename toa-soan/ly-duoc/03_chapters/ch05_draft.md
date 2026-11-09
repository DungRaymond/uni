# Chương 5: Siêu âm trong Y Dược học (Ultrasound in Medicine & Pharmacy)

---

## 1. Tổng quan chương (Chapter Overview) {T-05.1}

### 1.1 Tên chương, giới thiệu khái quát & phạm vi nội dung {T-05.1.1}

Sau các chương về nhiệt động học sinh học & động học chất lưu (Ch01) và điện thế sinh học (Ch02), Chuyên đề 5 chuyển sang **siêu âm trong Y Dược học** — một ngành vật lý ứng dụng sinh học quan trọng, sử dụng sóng cơ học tần số cao (> 20 kHz) để chẩn đoán hình ảnh, dò hàm lượng hoạt chất và điều trị y sinh `[SRC: S-05.1, S-05.5]` `[ADDED: bridge from Ch01–04]`.

Chương trình bày bản chất vật lý và đặc trưng của sóng siêu âm; tương tác của sóng siêu âm với mô sinh học (trở kháng âm, phản xạ/khuếch xạ, suy giảm); cơ chế phát - thu sóng siêu âm (hiệu ứng áp điện); các phương thức chẩn đoán hình ảnh siêu âm (A-mode, B-mode, M-mode, Doppler); và ứng dụng của sóng siêu âm trong Dược học và Điều trị y sinh (xâm thực sóng âm, UAE, liposome, phonophoresis, HIFU, an toàn sinh học) `[ADDED: scope summary]`.

Tên chuyên đề tạm thời: **"Siêu âm trong Y Dược học (Ultrasound in Medicine & Pharmacy)"** (theo `MANIFEST.md`) `[VERIFY: chapter title (V-05.01)]`.

### 1.2 Phạm vi, Kiến thức Tiên quyết & Thời lượng Học tập {T-05.1.2}

- **Kiến thức tiên kỳ:**
  1. Động học chất lưu, vận tốc âm, suppresses từ Chuyên đề 1.
  2. Điện thế sinh học, màng tế bào từ Chuyên đề 2.
  3. Đơn vị SI: hertz (Hz), megahertz (MHz), pascal (Pa), rayl, watt (W) từ vật lý đại cương `[ADDED: cross-reference to general physics & Ch01–02]`.
- **Thời lượng dự kiến:** ~**2 giờ 30 phút** (khoảng 1 giờ 50 phút cho ~2.000 từ lý thuyết + ví dụ tại Mục 1–6, tương đương 2.000 / 1.500 ≈ 1,33 giờ; cộng 40 phút cho 10 bài tập ≈ 2 giờ 13 phút), theo `STUDY_TIME_RULE` `[ADDED: study time estimate]`.

---

## 2. Mục tiêu học tập (Learning Objectives) {T-05.2}

### 2.1 Chuẩn đầu ra Kiến thức, Kỹ năng, Vận dụng và Đánh giá mô hình (LO-1..LO-4) {T-05.2.1}

Sau chương này, sinh viên có thể `[ADDED: learning objectives]`:

- **`LO-1` (Kiến thức):** Phát biểu được bản chất sóng siêu âm, dạng sóng lan truyền, vận tốc truyền âm, trở kháng âm, hiệu ứng áp điện, các phương thức chẩn đoán hình ảnh siêu âm (A-mode, B-mode, M-mode, Doppler).
- **`LO-2` (Kỹ năng):** Tính toán được vận tốc âm, trở kháng âm, hệ số phản xạ/truyền, độ sâu từ thời gian dội âm ($d = v \cdot t/2$), tần số Doppler; áp dụng định luật suy giảm âm.
- **`LO-3` (Vận dụng):** Giải thích ứng dụng xâm thực sóng âm (UAE), điều chế liposome/liposome, phonophoresis, HIFU; liên hệTurning siêu âm với an toàn sinh học (TI, MI, ALARA).
- **`LO-4` (Đánh giá mô hình):** Đánh giá vai trò của siêu âm trong bào chế dược phẩm và điều trị y sinh không xâm lấn `[ADDED: LO-4 definition]`.

---

## 3. Đặt vấn đề & Ý nghĩa thực tiễn (Introduction) {T-05.3}

### 3.1 Từ sóng cơ học đến hình ảnh siêu âm y dược {T-05.3.1}

Sóng siêu âm là sóng cơ học (sóng âm) có tần số dao động cao hơn ngưỡng nghe của tai người ($f > 20\text{ kHz} = 20.000\text{ Hz}$). Trong chẩn đoán y tế, dải tần số thường dùng từ $2\text{ MHz}$ đến $15\text{ MHz}$; trong ứng dụng bào chế và phá vỡ cấu trúc vi mô, tần số thường từ $20\text{ kHz}$ đến $100\text{ kHz}$ `[SRC: S-05.1]` `[ADDED: conceptual bridge]`.

Sóng siêu âm lan truyền chủ yếu dưới dạng sóng dọc trong môi trường sinh học (chất lỏng và mô mềm), tạo ra các chu kỳ nén và dãn xen kẽ. Trong chất rắn (như xương), sóng còn có thể lan truyền dưới dạng sóng ngang `[SRC: S-05.1]` `[ADDED: conceptual bridge]`.

Sóng siêu âm không chỉ là công cụ chẩn đoán hình ảnh hàng đầu (siêu âm B-mode, Doppler) mà còn là công cụ then chốt trong bào chế dược phẩm hiện đại (xâm thực sóng âm - UAE, điều chế liposome, phonophoresis) và các liệu pháp điều trị không xâm lấn (HIFU) `[SRC: S-05.5]` `[ADDED: physiological relevance]`.

---

## 4. Nội dung bài giảng chính (Main Content) {T-05.4}

### 4.1 Bản chất Vật lý và các đặc trưng của Sóng siêu âm {T-05.4.1}

**Bản chất:** Siêu âm (Ultrasound) là sóng cơ học (sóng âm) có tần số dao động cao hơn ngưỡng nghe của tai người ($f > 20\text{ kHz} = 20.000\text{ Hz}$). Trong chẩn đoán y tế, dải tần số thường dùng từ $2\text{ MHz}$ đến $15\text{ MHz}$; trong ứng dụng bào chế và phá vỡ cấu trúc vi mô, tần số thường từ $20\text{ kHz}$ đến $100\text{ kHz}$ `[SRC: S-05.1]` `[ADDED: definition]`.

**Dạng sóng lan truyền:** Trong môi trường sinh học (chất lỏng và mô mềm), sóng siêu âm lan truyền chủ yếu dưới dạng **sóng dọc** (longitudinal wave) – phương dao động của các phần tử môi trường trùng với phương truyền sóng, tạo ra các chu kỳ nén (compression) và dãn (rarefaction) xen kẽ. Trong chất rắn (như xương), sóng còn có thể lan truyền dưới dạng **sóng ngang** (transverse wave) `[SRC: S-05.1]` `[ADDED: definition]`.

**Vận tốc truyền sóng âm ($v$):** Phụ thuộc vào tính đàn hồi (độ cứng/suất nén $K$) và khối lượng riêng ($\rho$) của môi trường:

$$v = \sqrt{\frac{K}{\rho}} \quad \text{và} \quad v = \lambda \cdot f$$ `[SRC: S-05.1]` `[ADDED: equation with variable list]`

trong đó $\lambda$ là bước sóng, $f$ là tần số sóng âm `[SRC: S-05.1]` `[ADDED: variable list]`.

Vận tốc truyền âm trung bình trong mô mềm quy ước là: $v_{m\hat{o}} \approx 1540\text{ m/s}$. Trong nước: $v \approx 1480\text{ m/s}$; trong xương: $v \approx 3500 - 4080\text{ m/s}$; trong không khí: $v \approx 330 - 340\text{ m/s}$ `[SRC: S-05.1]` `[ADDED: numerical values]`.

**Ý nghĩa:** Vì vận tốc truyền âm trong mô mềm khá đồng nhất ($\approx 1540\text{ m/s}$), máy siêu âm đo thời gian khứ hồi ($t$) của chùm xung âm dội lại để xác định chính xác độ sâu cấu trúc giải phẫu: $d = \frac{v \cdot t}{2}$ `[SRC: S-05.1]` `[ADDED: interpretation]`.

---

### 4.2 Tương tác của Sóng siêu âm với Mô sinh học {T-05.4.2}

**Trở kháng âm (Acoustic Impedance - $Z$):** Đại lượng đặc trưng cho mức độ cản trở sự lan truyền sóng âm của môi trường:

$$Z = \rho \cdot v \quad \left[\text{Rayl hay } \text{kg}/(\text{m}^2\cdot\text{s})\right]$$ `[SRC: S-05.2]` `[ADDED: equation with variable list]`

trong đó $\rho$ là khối lượng riêng ($\text{kg}/\text{m}^3$), $v$ là vận tốc truyền âm ($\text{m}/\text{s}$) `[SRC: S-05.2]` `[ADDED: variable list]`.

**Sự phản xạ và khúc xạ tại mặt phân cách (Reflection & Transmission):** Khi chùm sóng siêu âm chiếu vuông góc tới ranh giới giữa hai môi trường có trở kháng âm $Z_1$ và $Z_2$:

$$R = \left( \frac{Z_2 - Z_1}{Z_2 + Z_1} \right)^2 \quad \text{và} \quad T = 1 - R = \frac{4 Z_1 Z_2}{(Z_1 + Z_2)^2}$$ `[SRC: S-05.2]` `[ADDED: equation with variable list]`

trong đó $R$: Hệ số phản xạ cường độ (tỉ số cường độ chùm phản xạ trên chùm tới); $T$: Hệ số truyền qua cường độ (tỉ số cường độ chùm đi tiếp vào môi trường 2) `[SRC: S-05.2]` `[ADDED: variable list]`.

Vai trò của Gel tiếp âm: Giữa đầu dò và bề mặt da luôn tồn tại lớp không khí vi mô. Vì $Z_{kk} \approx 400\text{ Rayl}$ cực nhỏ so với $Z_{da} \approx 1,5 \times 10^6\text{ Rayl}$, hệ số phản xạ tại mặt phân cách không khí - da lên tới $R \approx 99,9\%$, sóng âm hầu như bị dội ngược hoàn toàn. Bôi Gel siêu âm (có trở kháng âm tương đương mô mềm $Z \approx 1,5 \times 10^6\text{ Rayl}$) giúp triệt tiêu hoàn toàn khe không khí, đảm bảo trên $99\%$ năng lượng âm truyền sâu vào cơ thể `[SRC: S-05.2]` `[ADDED: clinical application]`.

Hiện tượng bóng lưng (Acoustic Shadow): Tại mặt phân cách giữa mô mềm và xương hoặc sỏi ($Z_{xương} \approx 6 - 8 \times 10^6\text{ Rayl}$), chênh lệch $Z$ rất lớn dẫn đến phản xạ và hấp thụ cực mạnh, làm cho vùng phía sau cấu trúc bị mất tín hiệu âm, tạo vệt bóng đen đặc trưng trên màn hình (dấu hiệu nhận diện sỏi mật, sỏi thận) `[SRC: S-05.2]` `[ADDED: clinical application]`.

**Sự suy giảm (Attenuation) và hấp thụ năng lượng âm:** Cường độ sóng âm giảm dần theo hàm mũ khi đi sâu vào môi trường:

$$I(x) = I_0 \, e^{-\mu x}$$ `[SRC: S-05.2]` `[ADDED: equation with variable list]`

với $\mu$ là hệ số suy giảm âm tổng cộng (bao gồm hấp thụ sinh nhiệt và tán xạ). Hệ số $\mu$ tỉ lệ thuận với tần số sóng âm ($f$) `[SRC: S-05.2]` `[ADDED: variable list]`.

Quy tắc đánh đổi (Trade-off):
- Tần số cao ($7,5 - 15\text{ MHz}$): Bước sóng $\lambda$ ngắn $\rightarrow$ Độ phân giải không gian cao, nhưng suy giảm rất nhanh $\rightarrow$ Độ xuyên sâu kém (thích hợp thăm khám cơ quan nông: tuyến giáp, mắt, mạch máu ngoại vi, mô dưới da).
- Tần số thấp ($2 - 5\text{ MHz}$): Bước sóng $\lambda$ dài $\rightarrow$ Độ phân giải giảm nhẹ, nhưng suy giảm ít $\rightarrow$ Xuyên sâu tốt ($15 - 25\text{ cm}$) (thích hợp thăm khám tạng sâu: gan, thận, tim, sản khoa) `[SRC: S-05.2]` `[ADDED: trade-off rule]`.

**Ý nghĩa:** Nắm vững trở kháng âm và quy luật suy giảm giúp người thầy thuốc và dược sĩ lựa chọn tần số đầu dò tối ưu và hiểu rõ bản chất hình thành ảnh tương phản siêu âm trên các mô khác nhau `[SRC: S-05.2]` `[ADDED: interpretation]`.

---

### 4.3 Cơ chế Phát - Thu sóng siêu âm: Hiệu ứng áp điện (Piezoelectric Effect) {T-05.4.3}

Bộ chuyển đổi (đầu dò - Transducer) hoạt động dựa trên vật liệu gốm áp điện (phổ biến nhất là Titanat Zirconat Chì - PZT):

**Hiệu ứng áp điện nghịch (Converse Piezoelectric Effect) – Quá trình PHÁT:** Khi đặt một hiệu điện thế xoay chiều tần số cao vào hai mặt của bản tinh thể áp điện, bản tinh thể bị co giãn cơ học theo chu kỳ với cùng tần số, phát ra chùm sóng siêu âm lan truyền vào mô `[SRC: S-05.3]` `[ADDED: definition]`.

**Hiệu ứng áp điện thuận (Direct Piezoelectric Effect) – Quá trình THU:** Sóng siêu âm sau khi phản xạ từ các mặt phân cách trong mô quay trở lại tác dụng áp lực cơ học lên tinh thể áp điện, làm biến dạng tinh thể và sinh ra các tín hiệu điện xoay chiều cực nhỏ. Tín hiệu này được khuếch đại, xử lý số hóa và tái tạo thành hình ảnh chẩn đoán `[SRC: S-05.3]` `[ADDED: definition]`.

**Ý nghĩa:** Đầu dò vừa đóng vai trò là "loa phát" vừa là "micro thu" tín hiệu, hoạt động luân phiên theo cơ chế xung - dội âm (Pulse-Echo principle) `[SRC: S-05.3]` `[ADDED: interpretation]`.

---

### 4.4 Các phương thức chẩn đoán hình ảnh siêu âm (Ultrasound Imaging Modes) {T-05.4.4}

**A-mode (Amplitude Mode):** Hiển thị biên độ sóng phản hồi dưới dạng các đỉnh xung trên trục khoảng cách/chiều sâu. Thường dùng trong nhãn khoa đo chiều dài trục nhãn cầu, đo bề dày giác mạc `[SRC: S-05.4]` `[ADDED: definition]`.

**B-mode (Brightness Mode):** Hiển thị biên độ phản xạ dưới dạng các điểm sáng có độ chói (thang độ xám 2D) tỷ lệ với cường độ tín hiệu dội về. Đầu dò quét nhiều chùm tia liên tiếp ghép lại tạo thành hình ảnh cắt lớp giải phẫu thời gian thực (Real-time). Đây là phương thức cơ bản và phổ biến nhất trong chẩn đoán lâm sàng `[SRC: S-05.4]` `[ADDED: definition]`.

**M-mode (Motion Mode):** Ghi lại sự dịch chuyển của các bề mặt phản xạ theo thời gian (trục tung: khoảng cách, trục hoành: thời gian). Ứng dụng chuyên biệt trong siêu âm tim để khảo sát vận động lá van, độ dày thành tâm thất và tính toán phân suất tống máu ($EF$) `[SRC: S-05.4]` `[ADDED: definition]`.

**Siêu âm Doppler (Doppler Ultrasound):** Dựa trên hiệu ứng Doppler – khi sóng âm phản xạ từ các phần tử chuyển động (tế bào hồng cầu), tần số sóng phản xạ bị dịch chuyển một lượng $\Delta f$ so với tần số phát $f_0$:

$$\Delta f = \frac{2 f_0 v \cos\theta}{c} \quad \implies \quad v = \frac{c \cdot \Delta f}{2 f_0 \cos\theta}$$ `[SRC: S-05.4]` `[ADDED: equation with variable list]`

trong đó $v$ là vận tốc dòng máu, $\theta$ là góc giữa chùm siêu âm và hướng dòng chảy (góc Doppler), $c$ là vận tốc âm trong môi trường `[SRC: S-05.4]` `[ADDED: variable list]`.

Ứng dụng: Khảo sát vận tốc và hướng dòng máu trong tim mạch, phát hiện hẹp tắc mạch, xơ vữa, huyết khối tĩnh mạch và tưới máu khối u `[SRC: S-05.4]` `[ADDED: clinical application]`.

Các dạng Doppler: Doppler xung (PW), Doppler liên tục (CW), Doppler màu (Color Doppler - dòng chảy hướng về đầu dò mã hóa màu đỏ, dòng chảy ra xa mã hóa màu xanh) và Doppler năng lượng (Power Doppler) `[SRC: S-05.4]` `[ADDED: classification]`.

**Ý nghĩa:** Phối hợp linh hoạt giữa B-mode và Doppler (siêu âm Duplex) cung cấp đồng thời cả thông tin hình thái cấu trúc mô và chức năng huyết động học trong chẩn đoán y khoa `[SRC: S-05.4]` `[ADDED: interpretation]`.

---

### 4.5 Ứng dụng của sóng siêu âm trong Dược học và Điều trị y sinh {T-05.4.5}

**Hiện tượng xâm thực sóng âm (Acoustic Cavitation):** Khi sóng siêu âm năng lượng cao (thường ở dải tần $20 - 40\text{ kHz}$) truyền qua môi trường chất lỏng, các pha dãn tạo ra vô số vi bọt khí chân không. Các bọt khí này lớn dần đến kích thước tới hạn rồi sụp đổ mãng liệt trong vài micro giây, giải phóng nhiệt độ cực cao (hàng ngàn Kelvin) và áp suất cục bộ cực lớn (hàng trăm megapascal) kèm theo các vi dòng xoáy (microjets) xé rách cấu trúc xung quanh `[SRC: S-05.5]` `[ADDED: definition]`.

**Ứng dụng nổi bật trong Dược học & Bào chế:**

- **Chiết xuất hoạt chất hỗ trợ bằng siêu âm (Ultrasound-Assisted Extraction - UAE):** Xâm thực siêu âm làm vỡ vách tế bào thực vật dược liệu, tạo điều kiện cho dung môi thẩm thấu nhanh, nâng cao hiệu suất thu hồi polyphenol, flavonoid, alkaloid, tinh dầu và rút ngắn thời gian chiết từ hàng giờ xuống vài phút mà không làm biến tính các hợp chất kém bền nhiệt `[SRC: S-05.5]` `[ADDED: pharmaceutical application]`.
- **Đồng hóa và phân tán hệ nano thuốc:** Làm nhỏ kích thước giọt trong nhũ tương, hỗn dịch thuốc xuống thang nanomet ($50 - 200\text{ nm}$), giúp hệ phân tán đồng nhất, tăng độ ổn định hóa lý, hạn chế hiện tượng sa lắng hay tách lớp `[SRC: S-05.5]` `[ADDED: pharmaceutical application]`.
- **Điều chế Liposome và hệ dẫn thuốc (Drug Delivery Systems):** Sóng siêu âm phân cắt các màng lipid kép đa tầng (MLVs) thành các túi liposome đơn tầng kích thước nhỏ (SUVs) dùng để bao gói dược chất hướng đích `[SRC: S-05.5]` `[ADDED: pharmaceutical application]`.
- **Rửa bề mặt, súc rửa và tiệt khuẩn dụng cụ:** Bể rửa siêu âm (Ultrasonic bath) làm sạch triệt để các vết bẩn vi mô trong ống mao quản, rãnh hẹp của thiết bị y tế và khuôn dập viên thuốc `[SRC: S-05.5]` `[ADDED: pharmaceutical application]`.

**Ứng dụng trong Điều trị y sinh (Therapeutic Applications):**

- **Tán sỏi ngoài cơ thể (ESWL):** Sử dụng chùm sóng xung kích siêu âm hội tụ năng lượng vào sỏi thận, sỏi mật để làm vỡ vụn sỏi thành kích thước hạt cát có thể tự đào thải qua đường tiết niệu `[SRC: S-05.5]` `[ADDED: therapeutic application]`.
- **Siêu âm hội tụ cường độ cao (HIFU):** Hội tụ chùm sóng siêu âm năng lượng lớn vào khối u sâu bên trong cơ thể (u xơ tử cung, ung thư biểu mô tuyến tiền liệt) làm tăng nhiệt độ cục bộ lên trên $60 - 80^\circ\text{C}$, gây hoại tử đông tế bào u một cách chuẩn xác mà không cần phẫu thuật mở `[SRC: S-05.5]` `[ADDED: therapeutic application]`.
- **Liệu pháp siêu âm dẫn thuốc qua da (Phonophoresis / Sonophoresis):** Sóng siêu âm làm giãn nở tạm thời các khoảng gian bào lipid của lớp sừng (stratum corneum), thúc đẩy sự thẩm thấu của các phân tử thuốc lớn (kháng viêm không steroid, corticosteroid, thuốc giảm đau tại chỗ) qua da `[SRC: S-05.5]` `[ADDED: therapeutic application]`.

**Ý nghĩa:** Siêu âm không chỉ là phương tiện chẩn đoán hình ảnh hàng đầu mà còn là công nghệ then chốt trong bào chế dược phẩm hiện đại và các liệu pháp điều trị không xâm lấn `[SRC: S-05.5]` `[ADDED: interpretation]`.

---

### 4.6 An toàn sinh học và các chỉ số an toàn của sóng siêu âm {T-05.4.6}

**Ưu điểm an toàn vượt trội:** Sóng siêu âm là sóng cơ học nên **hoàn toàn không mang bức xạ ion hóa**. Do đó siêu âm rất an toàn khi thăm khám lặp lại nhiều lần, đặc biệt an toàn cho phụ nữ mang thai, thai nhi và trẻ sơ sinh `[SRC: S-05.6]` `[ADDED: definition]`.

**Hai tác động sinh học cần kiểm soát:**

- **Tác động nhiệt:** Sự hấp thụ năng lượng âm chuyển thành nhiệt làm tăng nhiệt độ mô. Được theo dõi thông qua **Chỉ số nhiệt (Thermal Index - TI)**. Giá trị $TI < 1,0$ được xem là an toàn cho mô sống thông thường `[SRC: S-05.6]` `[ADDED: definition]`.
- **Tác động cơ học và xâm thực:** Khả năng tạo vi bọt khí và sóng áp lực làm tổn thương mô chứa khí (phổi, ruột). Được theo dõi qua **Chỉ số cơ học (Mechanical Index - MI)**. Theo chuẩn quốc tế FDA/IEC, $MI$ không được vượt quá $1,9$ `[SRC: S-05.6]` `[ADDED: definition]`.

**Nguyên lý ALARA (As Low As Reasonably Achievable):** Luôn vận hành máy siêu âm ở mức công suất phát tối thiểu và thời gian quét ngắn nhất đủ để thu nhận hình ảnh chẩn đoán tin cậy `[SRC: S-05.6]` `[ADDED: principle]`.

**Ý nghĩa và tác dụng tổng kết:** Chương Siêu âm trong Y Dược học cung cấp nền tảng vật lý toàn diện từ bản chất sóng cơ học, trở kháng âm, định luật phản xạ khúc xạ, đến nguyên lý áp điện và hiệu ứng Doppler. Trong thực hành Dược học, hiểu rõ cơ chế xâm thực sóng âm giúp làm chủ các kỹ thuật chiết xuất siêu âm (UAE), điều chế liposome và tối ưu hóa hệ phân phối thuốc qua da `[SRC: S-05.5]` `[ADDED: summary]`.

---

## 5. Ví dụ minh họa & Quy trình thực hành (Examples & Illustrations) {T-05.5}

### 5.1 Ví dụ 1: Tính độ sâu từ thời gian dội âm {T-05.5.1}

> **Example 1.** Đầu dò phát xung vào mô mềm ($v \approx 1540\text{ m/s}$) và nhận echo sau $t = 26\ \mu\text{s}$. Tính độ sâu cấu trúc `[SRC: S-05.1]`.
>
> - **Given (Dữ kiện đã cho):** $v \approx 1540\text{ m/s}$, $t = 26\ \mu\text{s} = 26 \times 10^{-6}\text{ s}$ `[SRC: S-05.1]`.
> - **Find (Yêu cầu):** Tính độ sâu cấu trúc $d$.
> - **Approach (Phương pháp giải):** Sóng phải đi rồi về nên quãng đường gấp đôi: $d = \frac{v \cdot t}{2}$.
> - **Solution (Giải):**
>   1. $d = \dfrac{v \cdot t}{2} = \dfrac{1540 \times 26 \times 10^{-6}}{2} \approx 0,020\text{ m} = 2,0\text{ cm}$.
>   2. **Kiểm tra nhanh:** cứ $13\ \mu\text{s}$ ứng với $1\text{ cm}$, vậy $26\ \mu\text{s}$ cho $2\text{ cm}$ — hợp lý.
>   3. **Kết luận:** Máy không đo trực tiếp độ sâu mà chỉ đo thời gian khứ hồi; giả định $v$ gần như không đổi trong mô mềm là cơ sở của phép đo `[SRC: S-05.1]` `[ADDED: interpretation]`.

### 5.2 Mẹo nhớ Siêu âm {T-05.5.2}

> **Mẹo nhớ — Chọn tần số:** "Cao — Nông — Nét, Thấp — Sâu — Mờ" ($7,5 - 15\text{ MHz}$ cho tuyến giáp, mắt, mạch máu ngoại vi; $2 - 5\text{ MHz}$ cho gan, thận, tim, sản khoa) `[SRC: S-05.2]` `[ADDED: mnemonic]`.
>
> **Mẹo nhớ — Công thức echo:** Luôn chia 2 vì sóng khứ hồi, $d = v \cdot t/2$ `[SRC: S-05.1]` `[ADDED: mnemonic]`.
>
> **Mẹo nhớ — An toàn:** $TI < 1,0$; $MI \le 1,9$; luôn theo nguyên lý ALARA `[SRC: S-05.6]` `[ADDED: mnemonic]`.

---

## 6. Tóm tắt chương (Chapter Summary) {T-05.6}

### 6.1 Tóm tắt Nội dung Trọng tâm & Quy tắc Ghi nhớ {T-05.6.1}

Các luận điểm chính của chuyên đề 5 `[SRC: S-05.1–S-05.6]`:

1. **Bản chất sóng siêu âm:** Sóng cơ học có tần số $> 20\text{ kHz}$; lan truyền dưới dạng sóng dọc trong chất lỏng/mô mềm; vận tốc trong mô mềm $\approx 1540\text{ m/s}$ `[SRC: S-05.1]`.
2. **Trở kháng âm:** $Z = \rho \cdot v$; phản xạ tại mặt phân cách phụ thuộc chênh lệch trở kháng âm $[R = ((Z_2 - Z_1)/(Z_2 + Z_1))^2]$ `[SRC: S-05.2]`.
3. **Suy giảm:** $I(x) = I_0 e^{-\mu x}$; tần số cao $\rightarrow$ độ phân giải cao nhưng suy giảm nhanh (độ sâu ít); tần số thấp $\rightarrow$ độ sâu lớn nhưng độ phân giải thấp `[SRC: S-05.2]`.
4. **Hiệu ứng áp điện:** PZT phát sóng (nghịch) và thu sóng (thuận) $\rightarrow$ đầu dò vừa là "loa phát" vừa là "micro thu" `[SRC: S-05.3]`.
5. **Các phương thức chẩn đoán:** A-mode (độ sâu), B-mode (hình ảnh 2D), M-mode (chuyển động), Doppler (vận tốc dòng máu) `[SRC: S-05.4]`.
6. **Ứng dụng dược phẩm:** UAE (chiết xuất), liposome, phonophoresis, HIFU, rửa thiết bị y tế `[SRC: S-05.5]`.
7. **An toàn:** Không mang bức xạ ion hóa; TI < 1,0; MI ≤ 1,9; nguyên lý ALARA `[SRC: S-05.6]` `[ADDED: safety summary]`.

> **Quy tắc ghi nhớ (mnemonic):**
> - **Chọn tần số:** "Cao — Nông — Nét, Thấp — Sâu — Mờ" ($7,5 - 15\text{ MHz}$ cho tuyến giáp, mắt, mạch máu ngoại vi; $2 - 5\text{ MHz}$ cho gan, thận, tim, sản khoa) `[ADDED: mnemonic]`.
> - **Công thức echo:** Luôn chia 2 vì sóng khứ hồi, $d = v \cdot t/2$ `[ADDED: mnemonic]`.
> - **Trở kháng:** chênh $Z$ càng lớn → phản xạ càng mạnh (xương/sỏi sáng, phía sau tối = bóng lưng); gel để xóa chênh lệch không khí – da `[ADDED: mnemonic]`.
> - **An toàn:** $TI < 1,0$; $MI \le 1,9$; luôn theo nguyên lý ALARA `[ADDED: mnemonic]`.

### 6.2 Bảng Tổng hợp Công thức & Lưu ý {T-05.6.2}

**Bảng 5.1.** Tổng hợp công thức, đơn vị và lưu ý của chuyên đề 5. `[ADDED: Table 5.1]`

| Công thức | Ý nghĩa | Đơn vị | Lưu ý |
|---|---|---|---|
| $v = \sqrt{K/\rho} = \lambda f$ | Vận tốc truyền âm | m/s | $K$: độ cứng/suất nén; $\rho$: khối lượng riêng; $\lambda$: bước sóng; $f$: tần số |
| $Z = \rho \cdot v$ | Trở kháng âm | Rayl ($\text{kg}/(\text{m}^2\cdot\text{s})$) | $Z_{da} \approx 1,5 \times 10^6\text{ Rayl}$ (mô mềm); $Z_{kk} \approx 400\text{ Rayl}$ (không khí) |
| $R = ((Z_2 - Z_1)/(Z_2 + Z_1))^2$ | Hệ số phản xạ cường độ | Không đơn vị | $R$ càng lớn → phản xạ càng mạnh (xương/sỏi sáng, phía sau tối = bóng lưng) |
| $I(x) = I_0 e^{-\mu x}$ | Suy giảm cường độ sóng âm | Không đơn vị ($I/I_0$) | $\mu$: hệ số suy giảm âm; tỉ lệ thuận với tần số $f$ |
| $d = v \cdot t/2$ | Độ sâu cấu trúc từ thời gian dội âm | m | $t$: thời gian khứ hồi (đi rồi về); $v$: vận tốc âm trong mô (~$1540\text{ m/s}$) |
| $\Delta f = \frac{2 f_0 v \cos\theta}{c}$ | Hiệu ứng Doppler (tần số dịch chuyển) | Hz | $f_0$: tần số phát; $v$: vận tốc dòng máu; $\theta$: góc Doppler; $c$: vận tốc âm |

---

## 7. Đánh giá & Bài tập tự lượng giá (Review & Assessment) {T-05.7}

[ADDED: assessment section frame] Bộ câu hỏi và bài tập dưới đây được thiết kế theo thang nhận thức từ Nhận biết, Thông hiểu đến Vận dụng, Phân tích và Đánh giá mô hình, bao phủ bốn chuẩn đầu ra `LO-1`–`LO-4` đã phát biểu tại `T-05.2.1`. Mỗi câu đều ghi rõ chuẩn đầu ra và cấp độ nhận thức; đáp án chi tiết nằm tại `T-05.7.4`. Sinh viên nên tự làm bài đầy đủ trước khi đọc đáp án chi tiết.

### 7.1 Câu hỏi Lý thuyết: Nhận biết & Thông hiểu (LO-1) {T-05.7.1}

[ADDED: knowledge and comprehension questions]

**Câu 1 (`LO-1` – Knowledge).** Sóng siêu âm là sóng cơ học có tần số dao động cao hơn ngưỡng nghe của tai người. Ngưỡng này là bao nhiêu?

- **A.** $> 20\text{ Hz}$
- **B.** $> 20\text{ kHz}$
- **C.** $> 20\text{ kHz} = 20.000\text{ Hz}$
- **D.** $> 2\text{ MHz}$

**Câu 2 (`LO-1` – Comprehension).** Trong môi trường sinh học (chất lỏng và mô mềm), sóng siêu âm lan truyền chủ yếu dưới dạng sóng nào?

- **A.** Sóng ngang (transverse wave)
- **B.** Sóng dọc (longitudinal wave)
- **C.** Cả hai bằng nhau
- **D.** Không lan truyền

**Câu 3 (`LO-1` – Comprehension).** Gel tiếp âm được sử dụng giữa đầu dò và da vì:

- **A.** Nó làm tăng tần số sóng siêu âm.
- **B.** Nó giảm trở kháng âm của không khí giữa đầu dò và da, giúp sóng âm truyền sâu vào cơ thể.
- **C.** Nó làm giảm tần số resonant của đầu dò.
- **D.** Nó tạo nhiệt để làm nóng da.

**Câu 4 (`LO-1` – Comprehension).** Chỉ số nhiệt (TI) < 1,0 và Chỉ số cơ học (MI) ≤ 1,9 có ý nghĩa gì về an toàn siêu âm?

- **A.** Siêu âm hoàn toàn không có tác động sinh học.
- **B.** Giá trị dưới ngưỡng này được xem là an toàn cho mô sống thông thường.
- **C.** Siêu âm có thể sử dụng không giới hạn thời gian.
- **D.** Chỉ số này chỉ áp dụng cho xạ soins ion hóa.

### 7.2 Bài tập Áp dụng: Tính toán độ sâu và độ thấm (LO-2, LO-3) {T-05.7.2}

[ADDED: application exercises]

**Bài tập 5 (`LO-2` – Application).** Một đầu dò siêu âm phát xung vào mô mềm ($v \approx 1540\text{ m/s}$) và nhận echo sau $t = 26\ \mu\text{s}$. Hãy tính độ sâu cấu trúc `[SRC: S-05.1]`.

**Bài tập 6 (`LO-2` – Application).** Một chùm sóng siêu âm đi từ mô mềm ($Z_1 \approx 1,5 \times 10^6\text{ Rayl}$) sang xương ($Z_2 \approx 6 \times 10^6\text{ Rayl}$). Hãy tính hệ số phản xạ cường độ $R$ và hệ số truyền qua cường độ $T$ `[SRC: S-05.2]`.

**Bài tập 7 (`LO-3` – Application).** Một đầu dò siêu âm phát sóng với tần số $f_0 = 5\text{ MHz}$. Máy đo phản xạ từ dòng máu với tần số phản xạ $f = 5,0025\text{ MHz}$. Góc giữa chùm siêu âm và hướng dòng máu là $\theta = 0^\circ$ ($\cos\theta = 1$). Vận tốc âm trong máu $c \approx 1540\text{ m/s}$. Hãy tính vận tốc dòng máu $v$ `[SRC: S-05.4]`.

### 7.3 Câu hỏi Phân tích & Vận dụng Nâng cao (LO-3, LO-4) {T-05.7.3}

[ADDED: analytical and advanced questions]

**Câu 8 (`LO-3`, `LO-4` – Analysis).** Giải thích tại sao gel tiếp âm cần được sử dụng giữa đầu dò siêu âm và da bệnh nhân, dựa trên khái niệm trở kháng âm $[SRC: S-05.2]$ `[ADDED: critical thinking]`.

**Câu 9 (`LO-3` – Analysis).** So sánh ứng dụng tần số cao ($7,5 - 15\text{ MHz}$) và tần số thấp ($2 - 5\text{ MHz}$) trong chẩn đoán siêu âm, dựa trên quy luật suy giảm âm và quy tắc đánh đổi tần số/độ phân giải/độ sâu $[SRC: S-05.2]$ `[ADDED: critical thinking]`.

**Câu 10 (`LO-4` – Advanced).** Đánh giá vai trò của siêu âm trong bào chế dược phẩm hiện đại (xâm thực sóng âm, UAE, liposome, phonophoresis, HIFU) và an toàn sinh học (TI, MI, ALARA) $[SRC: S-05.5, S-05.6]$ `[ADDED: critical thinking]` `[DOMAIN_RULES: chỉ giải thích cơ chế, không liều/chỉ định]`.

---

## 7.4 Đáp án & Hướng dẫn Giải Chi tiết (Answer Key) {T-05.7.4}

[ADDED: step-by-step answer key]

**Câu 1 — `LO-1` · Knowledge. Đáp án B.** Sóng siêu âm là sóng cơ học có tần số dao động cao hơn ngưỡng nghe của tai người ($f > 20\text{ kHz} = 20.000\text{ Hz}$) `[SRC: S-05.1]` `[ADDED: definition]`.

**Câu 2 — `LO-1` · Comprehension. Đáp án B.** Trong môi trường sinh học (chất lỏng và mô mềm), sóng siêu âm lan truyền chủ yếu dưới dạng sóng dọc (longitudinal wave) $[SRC: S-05.1]$ `[ADDED: definition]`.

**Câu 3 — `LO-1` · Comprehension. Đáp án B.** Gel tiếp âm làm giảm chênh lệch trở kháng âm giữa đầu dò và da, giúp sóng âm truyền sâu vào cơ thể thay vì bị phản xạ hầu hết tại bề mặt $[SRC: S-05.2]$ `[ADDED: interpretation]`.

**Câu 4 — `LO-1` · Comprehension. Đáp án B.** Giá trị dưới ngưỡng này ($TI < 1,0$; $MI \le 1,9$) được xem là an toàn cho mô sống thông thường $[SRC: S-05.6]$ `[ADDED: definition]`.

**Bài tập 5 — `LO-2` · Application.**
1. $d = \frac{v \cdot t}{2} = \dfrac{1540 \times 26 \times 10^{-6}}{2} = \dfrac{1540 \times 26}{2} \times 10^{-6} = 770 \times 26 \times 10^{-6} = 20\,020 \times 10^{-6}\text{ m} = 2,0\times 10^{-2}\text{ m} = 2,0\text{ cm}$.
2. **Kết luận:** Độ sâu cấu trúc là khoảng $2,0\text{ cm}$ $[SRC: S-05.1]$ `[ADDED: calculation]`.

**Bài tập 6 — `LO-2` · Application.**
1. Hệ số phản xạ cường độ: $R = \left(\dfrac{Z_2 - Z_1}{Z_2 + Z_1}\right)^2 = \left(\dfrac{6 - 1,5}{6 + 1,5}\right)^2 = \left(\dfrac{4,45}{7,5}\right)^2 = \left(0,593\right)^2 \approx 0,352 = 35,2\%$.
2. Hệ số truyền qua cường độ: $T = 1 - R = 1 - 0,352 = 0,648 = 64,8\%$.
3. **Kết luận:** Khoảng $35,2\%$ cường độ sóng bị phản xạ và $64,8\%$ được truyền qua mặt phân cách $[SRC: S-05.2]$ `[ADDED: calculation]`.

**Bài tập 7 — `LO-3` · Application.**
1. $\Delta f = f - f_0 = 5,0025\text{ MHz} - 5\text{ MHz} = 0,0025\text{ MHz} = 2500\text{ Hz}$.
2. $v = \dfrac{c \cdot \Delta f}{2 f_0 \cos\theta} = \dfrac{1540 \times 2500}{2 \times 5 \times 10^6 \times 1} = \dfrac{3\,850\,000}{10\,000\,000} = 0,385\text{ m/s}$.
3. **Kết luận:** Vận tốc dòng máu là khoảng $0,385\text{ m/s}$ $[SRC: S-05.4]$ `[ADDED: calculation]`.

**Câu 8 — `LO-3`, `LO-4` · Analysis.**
Gel tiếp âm có trở kháng âm gần giống mô mềm ($Z \approx 1,5 \times 10^6\text{ Rayl}$), giúp triệt tiêu hoàn toàn khe không khí vi mô giữa đầu dò và da. Nếu không có gel, chênh lệch trở kháng âm giữa không khí ($Z_{kk} \approx 400\text{ Rayl}$) và da ($Z_{da} \approx 1,5 \times 10^6\text{ Rayl}$) rất lớn, dẫn đến hệ số phản xạ $R \approx 99,9\%$, sóng âm hầu như bị dội ngược hoàn toàn và không thể thâm nhập vào cơ thể $[SRC: S-05.2]$ `[ADDED: impedance matching explanation]`.

**Câu 9 — `LO-3` · Analysis.**
- Tần số cao ($7,5 - 15\text{ MHz}$): bước sóng ngắn $\rightarrow$ độ phân giải không gian cao, nhưng suy giảm nhanh $\rightarrow$ độ xuyên sâu kém (thích hợp thăm khám tuyến giáp, mắt, mạch máu ngoại vi, mô dưới da).
- Tần số thấp ($2 - 5\text{ MHz}$): bước sóng dài $\rightarrow$ độ phân giải giảm nhẹ, nhưng suy giảm ít $\rightarrow$ xuyên sâu tốt ($15 - 25\text{ cm}$) (thích hợp thăm khám tạng sâu: gan, thận, tim, sản khoa) `[SRC: S-05.2]$ `[ADDED: trade-off rule explanation]`.

**Câu 10 — `LO-4` · Analysis.**
Siêu âm được sử dụng trong xâm thực sóng âm (UAE) để chiết xuất hoạt chất từ dược liệu; điều chế liposome/liposome; phonophoresis (dẫn thuốc qua da); HIFU để điều trị khối u sâu mà không cần phẫu thuật mở. An toàn sinh học được đảm bảo qua chỉ số TI < 1,0 (không gây nóng quá mức mô) và MI ≤ 1,9 (không gây xâm thực hại mô), cùng với nguyên lý ALARA (luôn dùng mức công suất và thời gian quét thấp nhất cần thiết) $[SRC: S-05.5, S-05.6]$ `[ADDED: clinical application]` `[DOMAIN_RULES: chỉ giải thích cơ chế, không liều/chỉ định]`.

---

## 8. Tài liệu tham khảo (References) {T-05.8}

### 8.1 Danh mục Tài liệu Tham khảo & Đọc thêm {T-05.8.1}

[ADDED: reference section structure] Nguồn `D-05` không có tài liệu tham khảo nào và `APPROVED_REFERENCE_LIST` là `none`. Theo R4, không tự điền tên sách, tác giả, năm, NXB, DOI hay số trang; ba thẻ dưới đây xác định loại tài liệu cần bổ sung.

1. **Giáo trình Vật lý dược (siêu âm y dược, trở kháng âm, Doppler):** `[VERIFY: reference needed for Physical Pharmacy textbook covering ultrasound in medicine and pharmacy (V-05.04)]`.
2. **Giáo trình Vật lý (sóng cơ học, hiệu ứng áp điện, Doppler):** `[VERIFY: reference needed for general physics textbook covering ultrasound physics, acoustic impedance, and Doppler effect (V-05.04)]`.
3. **Tài liệu Dược lý (bào chế dược phẩm, siêu âm_assoc với dược phẩm):** `[VERIFY: reference needed for pharmaceutics textbook covering ultrasound-assisted extraction, liposomes, and drug delivery (V-05.04)]`.

> **Ghi chú tuân thủ R4.** Ba mục trên là thẻ giữ chỗ, không phải trích dẫn đã xác minh; khi có danh mục chuẩn sẽ định dạng Vancouver.
