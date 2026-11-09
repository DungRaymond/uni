# S4 Calculation & Structural Verification Report — Round 3: `ch04_draft.md`

- **Draft:** `03_chapters/ch04_draft.md` (552 dòng; **6.940 từ** theo `_tools/check_length.py`)
- **Source:** `00_source_original/ch04_doc-hvc-4.html` (`D-04`, `S-04.1`–`S-04.9`)
- **Script:** Python 3.15, standard library, viết độc lập cho vòng QA 3 (không đặt trong repo; không sửa bản thảo/nguồn)
- **Tổng hạng mục số học:** 34
- **Khớp số học:** **34/34**
- **Hạng mục diễn đạt không khớp:** 1 (`QA3-04.01` — phát biểu “cả dãy oxygen có $BO$ bán nguyên”; xem §3, hàng 35)
- **Không dùng làm nguồn chuẩn:** `_tools/check_calc_ch04.py` — script này hardcode giá trị bản nháp vòng 1, không parse bản hiện tại; không chạy để tránh ghi đè báo cáo cũ.

---

## 1. Phương pháp

1. Tách `ch04_draft.md` theo tiêu đề `## N.` và đếm từ bằng đúng quy tắc `_tools/check_length.py` (bỏ math, HTML, code block, link; đếm token chữ/số).
2. Điền electron độc lập vào giản đồ MO theo hai trật tự trong bản thảo; tính $N_b$, $N_a$, $BO=(N_b-N_a)/2$, số electron độc thân (Hund, xét cặp suy biến $\pi_{2p}$/$\pi^*_{2p}$).
3. Kiểm tra chéo từng bảng 4.2, 4.3, 4.5, 4.6 và từng đáp án Bài tập 5–7, Câu 8–10.
4. Kiểm tra số học $B_2H_6$: tổng electron, phân bố terminal/cầu, mô hình $2c$–$2e$, mô hình $3c$–$2e$, octet mỗi B, đáp án Câu 10 sau khi bỏ mô hình B–B.
5. Kiểm tra công thức/điều kiện: chuẩn hóa $c_A^2+c_B^2=1$; điều kiện $E_+<\alpha$; miền $|S|\le1$.
6. Kiểm tra đơn vị, thứ nguyên, bảo toàn electron/điện tích.
7. Đối chiếu thủ công các phát biểu định lượng không thể tái tính (ngưỡng $\Delta E$, $E_{lk}(N_2)$, độ bền CO–Hb) và ghi rõ chúng là dữ kiện ngoài.

---

## 2. Đếm từ theo mục và thời lượng học tập

| Mục | Nội dung | Số từ |
|---|---|---:|
| 1 | Tổng quan chương | 221 |
| 2 | Mục tiêu học tập | 156 |
| 3 | Đặt vấn đề | 115 |
| 4 | Nội dung bài giảng chính | 1.584 |
| 5 | Ví dụ minh họa & quy trình | 1.599 |
| 6 | Tóm tắt chương | 548 |
| 7 | Đánh giá & bài tập | 2.577 |
| 8 | Tài liệu tham khảo | 128 |
| **Tổng** | | **6.940** |
| **Mục 1–6** | Gồm tiêu đề chương (12 từ) | **4.235** |
| **Mục 1–6** | Không gồm tiêu đề | **4.223** |

**Tính thời lượng theo `STUDY_TIME_RULE` (dùng 4.235 từ, cùng quy ước changelog §6):**
- $4.235/1.500 = 2,823$ giờ $= 169,4$ phút $= 2$ giờ 49,4 phút.
- 10 bài tập: $10/5 \times 20 = 40$ phút.
- Tổng: $169,4 + 40 = 209,4$ phút $= 3$ giờ 29,4 phút; làm tròn **3 giờ 30 phút**.
- Bản thảo ghi “~4.200 từ” và “~2 giờ 50 phút” cho phần lý thuyết: chênh 35 từ và 0,6 phút so với tính lại; nằm trong mức làm tròn. **Khớp (Yes, rounded).**
- Nếu dùng 4.223 từ (không tiêu đề): $4.223/1.500 = 2,815$ giờ $= 2$ giờ 48,9 phút; tổng $3$ giờ 28,9 phút; vẫn làm tròn **3 giờ 30**. Kết luận không đổi.

**Tỷ lệ so với nguồn:** $6.940/1.153 = 6,02\times$.

---

## 3. Bảng tính chi tiết (Original | Recomputed | Match)

| # | Hạng mục (T-ID / vị trí) | Original trong bản thảo | Recomputed độc lập | Match |
|---:|---|---|---|---|
| 1 | `T-04.1.2` thời lượng học tập | ~3 giờ 30 phút; ~2 giờ 50 phút cho ~4.200 từ Mục 1–6; +40 phút cho 10 bài | Mục 1–6 = 4.235 từ (gồm tiêu đề); $4.235/1.500 = 2,823$ h $= 2$ h 49,4 ph; $+40$ ph $= 3$ h 29,4 ph $\approx$ **3 h 30 ph** | **Yes** (làm tròn) |
| 2 | `T-04.4.1.3` chuẩn hóa đồng hạch | $c_A^2+c_B^2=1$; $c_A=c_B=1/\sqrt{2}$ | $2\times(1/\sqrt{2})^2 = 2\times0,5 = 1,000000$ | **Yes** |
| 3 | `T-04.4.1.3` điều kiện $E_+<\alpha$ | $E_+<\alpha$ khi $\beta<\alpha S$, tức $|\beta|>|\alpha|S$ | $\alpha=-10$, $\beta=-5$, $S=0,2$: $E_+=-12,5<-10$; $\beta=-0,5$: $E_+=-8,75>-10$; điều kiện $\beta<\alpha S$ đúng/sai tương ứng | **Yes** |
| 4 | `T-04.4.2.2` miền tích phân xen phủ | $|S_{AB}|\le1$; quy ước pha $S_{AB}>0$ khi xen phủ hiệu quả | Ràng buộc tổng quát $|S|\le1$ đúng; $S$ có thể âm nếu không áp quy ước pha | **Yes** |
| 5 | $O_2^{2-}$ (14 e), Bảng 4.3/4.5 | $N_b=8$, $N_a=6$, $BO=1$, 0 e độc thân, nghịch từ | $\sigma_{2s}^2\sigma_{2s}^{*2}\sigma_{2p_z}^2\pi_{2p}^4\pi_{2p}^{*4}$; $N_b=8$, $N_a=6$, $BO=1$, 0 e độc thân | **Yes** |
| 6 | $O_2^-$ (13 e), Bảng 4.3/4.5 | $8$, $5$, $1,5$, 1 e độc thân, thuận từ | $\pi_{2p}^{*3}$; $8$, $5$, $1,5$, 1 e độc thân | **Yes** |
| 7 | $O_2$ (12 e), Bảng 4.2/4.3/4.5/4.6 | $8$, $4$, $2$, 2 e độc thân, thuận từ | $\pi_{2p}^{*2}$; $8$, $4$, $2$, 2 e độc thân | **Yes** |
| 8 | $O_2^+$ (11 e), Bảng 4.3/4.5 | $8$, $3$, $2,5$, 1 e độc thân, thuận từ | $\pi_{2p}^{*1}$; $8$, $3$, $2,5$, 1 e độc thân | **Yes** |
| 9 | $H_2^+$ (1 e), Ví dụ 4.1 | $N_b=1$, $N_a=0$, $BO=0,5$, 1 e độc thân | $\sigma_{1s}^1$; $1$, $0$, $0,5$, 1 e độc thân | **Yes** |
| 10 | $B_2$ (6 e, trộn $s$–$p$), Bảng 4.2/4.6 | $4$, $2$, $1$, 2 e độc thân, thuận từ | $(\sigma_{2s})^2(\sigma^*_{2s})^2(\pi_{2p_x})^1(\pi_{2p_y})^1$; $4$, $2$, $1$, 2 e độc thân | **Yes** |
| 11 | $C_2$ (8 e, trộn $s$–$p$), Bảng 4.2/4.6 | $6$, $2$, $2$, 0 e độc thân, nghịch từ | $(\sigma_{2s})^2(\sigma^*_{2s})^2(\pi_{2p_x})^2(\pi_{2p_y})^2$; $6$, $2$, $2$, 0 e độc thân | **Yes** |
| 12 | $N_2$ (10 e, trộn $s$–$p$), Bảng 4.2/4.6 | $8$, $2$, $3$, 0 e độc thân, nghịch từ | $(\sigma_{2s})^2(\sigma^*_{2s})^2(\pi_{2p_x})^2(\pi_{2p_y})^2(\sigma_{2p_z})^2$; $8$, $2$, $3$, 0 e độc thân | **Yes** |
| 13 | $F_2$ (14 e, không trộn), Bảng 4.2/4.6 | $8$, $6$, $1$, 0 e độc thân, nghịch từ | $(\sigma_{2s})^2(\sigma^*_{2s})^2(\sigma_{2p_z})^2(\pi_{2p_x})^2(\pi_{2p_y})^2(\pi^*_{2p_x})^2(\pi^*_{2p_y})^2$; $8$, $6$, $1$, 0 e độc thân | **Yes** |
| 14 | $CO$ (10 e) | $8$, $2$, $3$, 0 e độc thân, nghịch từ | $(\sigma_{2s})^2(\sigma^*_{2s})^2(\pi_{2p})^4(\sigma_{2p_z})^2$; $8$, $2$, $3$, 0 e độc thân | **Yes** |
| 15 | $B_2H_6$ tổng electron | $12 = 2\times3 + 6\times1$ | $2\times3 + 6\times1 = 12$ | **Yes** |
| 16 | $B_2H_6$ phân bố terminal/cầu | 4 liên kết B–H biên $=8$ e; còn $4$ e cho 2 cầu; mỗi cầu $2$ e | $4\times2=8$; $12-8=4$; $4/2=2$ e/cầu | **Yes** |
| 17 | $B_2H_6$ mô hình $2c$–$2e$ cho cả 8 đoạn nối | $8\times2=16$ e $>12$ | $8\times2=16>12$ | **Yes** |
| 18 | $B_2H_6$ mô hình $3c$–$2e$ chuẩn | $4$ terminal ($8$ e) $+2$ cầu ($4$ e) $=12$ e | $8+4=12$ | **Yes** |
| 19 | `Q10` phần 2: 4 terminal $2c$–$2e$ + 2 cầu, mỗi cầu 2 liên kết $2c$–$2e$ | “$8+8=16$ electron, vượt 12”; “$3c$–$2e$ chỉ dùng đúng $8+4=12$ và không cần B–B” | $4\times2=8$; mỗi cầu $2\times2=4$, hai cầu $8$; tổng $8+8=16>12$; mô hình $3c$–$2e$: $8+4=12$, không có B–B; khớp bước 3 dòng 540 | **Yes** (số học + logic) |
| 20 | `Q10` phần 1: tổng $12$ e và $6$ cặp | $2\times3+6\times1=12$; $12/2=6$ cặp | $12$; $6$ cặp | **Yes** |
| 21 | $B_2H_6$ octet mỗi B | 4 e từ 2 liên kết biên + 4 e từ 2 cầu $=8$ e/B | $2\times2+2\times2=8$ e/B (cách đếm octet hình thức; cầu $3c$–$2e$ chia sẻ 2 e cho 3 tâm) | **Yes** (quy ước) |
| 22 | Trật tự MO không trộn $s$–$p$ | $\sigma_{2s}<\sigma^*_{2s}<\sigma_{2p_z}<\pi_{2p}<\pi^*_{2p}<\sigma^*_{2p_z}$ | Đúng thứ tự đã dùng cho $O_2,F_2$; $\pi^*<\sigma^*$ | **Yes** |
| 23 | Trật tự MO có trộn $s$–$p$ | $\sigma_{2s}<\sigma^*_{2s}<\pi_{2p}<\sigma_{2p_z}<\pi^*_{2p}<\sigma^*_{2p_z}$ | Đúng thứ tự đã dùng cho $B_2,C_2,N_2$; $\pi^*<\sigma^*$ | **Yes** |
| 24 | Bảng 4.2 (5 phân tử) | $B_2$ 6/4/2/1/2; $C_2$ 8/6/2/2/0; $N_2$ 10/8/2/3/0; $O_2$ 12/8/4/2/2; $F_2$ 14/8/6/1/0 | Điền electron lại: khớp toàn bộ | **Yes** |
| 25 | Bảng 4.3 (4 loài oxygen) | $O_2^{2-}$ 14/8/6/1/0; $O_2^-$ 13/8/5/1,5/1; $O_2$ 12/8/4/2/2; $O_2^+$ 11/8/3/2,5/1 | Khớp toàn bộ; cấu hình $\pi^*$: $4,3,2,1$ e | **Yes** |
| 26 | Bảng 4.5 (4 loài oxygen) | $O_2^+$ 11/8/3/2,5/1; $O_2$ 12/8/4/2/2; $O_2^-$ 13/8/5/1,5/1; $O_2^{2-}$ 14/8/6/1/0 | Khớp toàn bộ (chỉ đảo thứ tự so với Bảng 4.3) | **Yes** |
| 27 | Bảng 4.6 (5 phân tử) | $B_2$ 6/4/2/1/2; $C_2$ 8/6/2/2/0; $N_2$ 10/8/2/3/0; $O_2$ 12/8/4/2/2; $F_2$ 14/8/6/1/0 | Khớp toàn bộ; trùng Bảng 4.2 | **Yes** |
| 28 | Bài tập 5: chiều dài/năng lượng | $BO$: $2,5>2>1,5>1$; độ dài: $O_2^+<O_2<O_2^-<O_2^{2-}$; năng lượng: $O_2^+>O_2>O_2^->O_2^{2-}$ | $BO$ giảm đơn điệu; độ dài tăng, năng lượng giảm tương ứng | **Yes** |
| 29 | Bài tập 6: $N_2$/$F_2$ | $N_2$: 8/2/3/0; $F_2$: 8/6/1/0 | Khớp | **Yes** |
| 30 | Câu 8: VB và MO của $O_2$ | VB: 12 e $=6$ cặp; MO: $8/4/2/2$ | $2\times6=12$; $8+4=12$; $BO=2$; 2 e độc thân | **Yes** |
| 31 | Câu 9: $CO$ | 10 e; $8/2/3/0$ | $4+6=10$; $8+2=10$; $BO=3$; 0 e độc thân | **Yes** |
| 32 | Câu 10: tổng $12$ e và $6$ cặp | $2\times3+6\times1=12$; $12/2=6$ cặp | Khớp | **Yes** |
| 33 | Bảo toàn electron/điện tích | Dãy $O_2$: $2\times6-q$; $CO$: $4+6$; $B_2H_6$: $2\times3+6\times1$; $H_2^+$: $1$ | $11,12,13,14$; $10$; $12$; $1$ — khớp $N_b+N_a$ từng loài | **Yes** |
| 34 | Đơn vị/thứ nguyên | $BO$ không thứ nguyên; electron nguyên; $\Delta E$ eV; thời lượng giờ/phút; $E_\pm$ năng lượng; $S$ không thứ nguyên | Không phát hiện sai đơn vị/thứ nguyên | **Yes** |
| 35 | `T-04.4.3.2`, `T-04.5.1`, `T-04.6.1`: phát biểu bậc bán nguyên | “Trong dãy oxygen, $BO$ bán nguyên…” (cả ba vị trí) | Giá trị đúng: $O_2^+$ 2,5; $O_2^-$ 1,5; $O_2$ **2**; $O_2^{2-}$ **1** → chỉ $O_2^+$ và $O_2^-$ bán nguyên; $O_2$ và $O_2^{2-}$ là số nguyên | **No** (diễn đạt; không phải số học) |

**Kết luận §3:** **34/34 hạng mục số học khớp** khi tái tính. Hàng 35 là lỗi **diễn đạt/quá tổng quát**, không phải lỗi số học: cả ba vị trí vẫn nói “cả dãy oxygen có $BO$ bán nguyên” trong khi $O_2$ ($BO=2$) và $O_2^{2-}$ ($BO=1$) là số nguyên. Đây là `QA3-04.01` (Minor).

---

## 4. Kiểm tra tính nhất quán bảng, trật tự MO và cross-reference

- **Bảng 4.2** dùng ký hiệu gộp $(\pi_{2p})^n$; chú thích dòng 159 giải thích ký hiệu gộp và chỉ đúng **Bảng 4.3 (họ oxygen)** + **Bài tập 7 (đủ năm phân tử $B_2,C_2,N_2,O_2,F_2$)**. Giá trị electron/$BO$/từ tính khớp Bảng 4.6.
- **Bảng 4.3** chỉ gồm 4 loài oxygen; cấu hình $\pi^*$ tách $(\pi^*_{2p_x})^a(\pi^*_{2p_y})^b$ khớp số electron: $O_2^{2-}$ (2,2), $O_2^-$ (2,1), $O_2$ (1,1), $O_2^+$ (1,0).
- **Bảng 4.5** trùng giá trị Bảng 4.3 (chỉ đảo thứ tự trình bày).
- **Bảng 4.6** trùng giá trị Bảng 4.2.
- **Hai trật tự MO** trong Mục 4.4.1/4.4.2, Hình 4.2/4.3, Bảng 4.4 và Bài tập 5–7 nhất quán: không trộn $\sigma_{2p_z}<\pi_{2p}$; có trộn $\pi_{2p}<\sigma_{2p_z}$; cả hai đều $\pi^*<\sigma^*$.
- **Bảng 4.1** nhất quán với hai trật tự: $\sigma^*$ phá bền mạnh hơn $\pi^*$ (nằm trên $\pi^*$).
- **Câu 10** sau khi bỏ mô hình B–B: dòng 539 dùng $8+8=16>12$ cho mô hình $2c$–$2e$ cho cả 8 đoạn nối, rồi $8+4=12$ cho $3c$–$2e$; khớp dòng 540 (“hai cầu dùng 4 electron; cộng 8 electron terminal được 12 electron”). Không còn câu “14 electron” hay liên kết B–B giả định. **Không mâu thuẫn.**

---

## 5. Kiểm tra logic `Q10` (dòng 539–540)

**Nguyên văn hiện hành (dòng 539):**
> “Bốn liên kết B–H đầu mạch dùng $4 \times 2 = 8$ electron, còn 4 electron cho hai cầu B–H–B. Nếu mỗi cầu được mô tả bằng hai liên kết $2c$–$2e$ (B–H và H–B), mỗi cầu cần 4 electron, hai cầu cần 8 electron; tổng cần $8 + 8 = 16$ electron, vượt 12 electron hiện có. Mô hình $3c$–$2e$ chỉ dùng đúng $8 + 4 = 12$ electron và không cần liên kết B–B…”

**Tái tính:**
- 4 terminal B–H $\times2=8$ e.
- Mỗi cầu có 2 tiếp xúc B–H, mỗi tiếp xúc $2c$–$2e$ $\Rightarrow 2\times2=4$ e/cầu; hai cầu $=8$ e.
- Tổng mô hình $2c$–$2e$: $8+8=16$ e $>12$ e. **Đúng.**
- Mô hình $3c$–$2e$: 8 e terminal $+4$ e cầu $=12$ e; không có B–B. **Đúng.**
- Bước 3 (dòng 540): “Hai cầu dùng 4 electron; cộng với 8 electron của bốn liên kết terminal được 12 electron.” **Khớp $8+4=12$.**

**Kết luận:** `QA2-04.01` đã được xử lý đúng; không còn lập luận mâu thuẫn. Đáp án cuối ($3c$–$2e$, 12 e) không đổi.

---

## 6. Dữ kiện định lượng ngoài không thể tái tính

Các mục sau được kiểm tra vị trí/cú pháp và đối chiếu nguồn, nhưng **không thể xác nhận độc lập** vì `APPROVED_REFERENCE_LIST: none`:

| Dữ kiện | Vị trí | Trạng thái |
|---|---|---|
| $\Delta E \le 10$–$14$ eV; $\Delta E(2p-2s)\le12$ eV | dòng 85, 143 | Có `[VERIFY: V-04.04]`; hai ngưỡng nguồn chưa khớp hoàn toàn |
| $E_{lk}(N_2)\approx945$ kJ/mol | dòng 147, 234 | Có `[VERIFY: V-04.03]`; dữ kiện nguồn |
| CO–Hb bền gấp 200–250 lần Hb–$O_2$ | dòng 187, 248, 534 | Có `[VERIFY: V-04.05]`; dữ kiện nguồn |
| $O_2$ lỏng thuận từ; $O_2$ có 2 e độc thân | dòng 43, 155, 432, 528 | Có `[VERIFY: V-04.01]`; dữ kiện thực nghiệm nguồn |
| $B_2H_6$ $3c$–$2e$; 12 e hóa trị | dòng 193–195, 263, 271, 444, 540 | Có `[VERIFY: V-04.09]`; mô hình chuẩn nguồn |
| CO HOMO trên C, LUMO $\pi^*$; $5\sigma$/$6\sigma^*$ | dòng 181, 248, 320, 534 | Có `[VERIFY: V-04.06]`; mô hình định tính |
| $He_2$ $BO=0$, dimer van der Waals | dòng 121 | Có `[VERIFY: V-04.10]`; dữ kiện nguồn |

**Kết luận §6:** không có dữ kiện ngoài nào bị trình bày như “đã xác minh”; tất cả đều có `[VERIFY]` với mã `V-04.xx`. Việc xác nhận khoa học thuộc chuyên gia/tài liệu chuẩn, không thuộc QA này.

---

## 7. Đơn vị, thứ nguyên, bảo toàn

- **Bảo toàn electron:** dãy $O_2$: $2\times6-q$ với $q=+1,0,-1,-2$ → $11,12,13,14$ e; $N_b+N_a$ lần lượt $8+3,8+4,8+5,8+6$. $CO$: $4+6=10=8+2$. $B_2H_6$: $2\times3+6\times1=12=8+4$. $H_2^+$: $1=1+0$. **Đạt.**
- **Bảo toàn điện tích:** các tiểu phân $O_2^{q}$ dùng đúng $q$; không có phản ứng hóa học trong chương cần cân bằng thêm. **Đạt.**
- **Thứ nguyên:** $BO$ không thứ nguyên; $N_b,N_a$ là số electron; $\Delta E$ và $E_\pm$ là năng lượng (eV); $S$ không thứ nguyên; thời lượng là giờ/phút. **Đạt.**
- **Quy ước dấu:** $E_\pm=(\alpha\pm\beta)/(1\pm S)$ với $\alpha,\beta<0$, $S>0$ theo quy ước pha; điều kiện $E_+<\alpha$ là $\beta<\alpha S$. Nếu đổi quy ước dấu của $\beta$ hoặc $S$, phải phát biểu lại điều kiện — bản thảo đã nêu quy ước. **Đạt (theo quy ước đã nêu).**

---

## 8. Hạn chế

1. Không có nguồn tham khảo ngoài; không thể xác nhận các giá trị thực nghiệm ($E_{lk}(N_2)=945$ kJ/mol, độ bền CO–Hb 200–250 lần, tính thuận từ của $O_2$ lỏng) bằng tài liệu gốc.
2. Cách đếm từ của `check_length.py` khác cách đếm trong audit (nguồn 1.153 từ so với 1.443 từ trong audit); tỷ lệ 6,02× chỉ mang tính tham khảo.
3. Trật tự MO và mức trộn $s$–$p$ là mô hình định tính; các giá trị năng lượng tuyệt đối không được kiểm tra.
4. Cách đếm octet mỗi B trong $B_2H_6$ là quy ước hình thức; liên kết $3c$–$2e$ thực tế phi định xứ, không quy về cặp B–H riêng.
5. Không kiểm tra hình ảnh: Hình 4.2–4.6 là placeholder, Hình 4.1 là Mermaid.
6. Không đọc `ch04_selfcheck.md`, `ch04_part1.md`–`ch04_part3.md` hay thảo luận tác giả.
7. Không tái thẩm định nội dung Chương 01–03; chỉ kiểm tra sự tồn tại/ngữ cảnh các T-ID tham chiếu.
8. 44 thẻ `[VERIFY]` vẫn mở; QA chỉ kiểm tra vị trí/cú pháp, không xác nhận nội dung khoa học bên trong.
9. Hàng 35 là lỗi diễn đạt, không phải lỗi số học; các giá trị $BO$ trong bảng và đáp án đều đúng.
