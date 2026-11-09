# S4 Calculation & Structural Verification Report — Round 2: `ch04_draft.md`

- **Draft:** `03_chapters/ch04_draft.md` (552 dòng; 6.923 từ theo `check_length.py`)
- **Source:** `00_source_original/ch04_doc-hvc-4.html` (`D-04`, `S-04.1`–`S-04.9`)
- **Script:** Python 3, standard library, viết độc lập cho vòng QA 2 (không đặt trong repo; không sửa bản thảo/nguồn)
- **Tổng hạng mục kiểm tra:** 34
- **Khớp số học:** 34/34
- **Không khớp logic:** 1 (`Q10` — mô hình thay thế 14 electron; xem §5)
- **Không dùng làm nguồn chuẩn:** `_tools/check_calc_ch04.py` — script này hardcode giá trị của bản nháp vòng 1, không parse bản hiện tại (xem §6)

---

## 1. Phương pháp

1. Tách `ch04_draft.md` theo tiêu đề `## N.` và đếm từ bằng đúng quy tắc `check_length.py` (bỏ math, HTML, code block, link; đếm token chữ/số).
2. Điền electron độc lập vào các giản đồ MO theo hai trật tự đã nêu trong bản thảo; tính $N_b$, $N_a$, $BO=(N_b-N_a)/2$, số electron độc thân (Hund, có xét cặp suy biến $\pi_{2p}$/$\pi^*_{2p}$).
3. Kiểm tra chéo từng bảng 4.2, 4.3, 4.5, 4.6 và từng đáp án Câu 5–10.
4. Kiểm tra số học $B_2H_6$: tổng electron, phân bố terminal/cầu, mô hình $2c$–$2e$, mô hình $3c$–$2e$, octet mỗi B.
5. Kiểm tra công thức/điều kiện: chuẩn hóa $c_A^2+c_B^2=1$; điều kiện $E_+<\alpha$; miền $|S|\le1$.
6. Kiểm tra đơn vị, thứ nguyên, bảo toàn electron/điện tích.
7. Đối chiếu `_tools/check_calc_ch04.py` để tìm lỗi ẩn; không chạy script này vì nó ghi đè `_state/checks/ch04_s4_calc.md`.

---

## 2. Đếm từ theo mục và thời lượng học tập

| Mục | Nội dung | Số từ |
|---|---|---:|
| 1 | Tổng quan chương | 221 |
| 2 | Mục tiêu học tập | 156 |
| 3 | Đặt vấn đề | 115 |
| 4 | Nội dung bài giảng chính | 1.576 |
| 5 | Ví dụ minh họa & quy trình | 1.599 |
| 6 | Tóm tắt chương | 540 |
| 7 | Đánh giá & bài tập | 2.576 |
| 8 | Tài liệu tham khảo | 128 |
| **Tổng** | | **6.923** |
| **Mục 1–6** | Phần lý thuyết – ví dụ | **4.207** |

**Tính thời lượng theo `STUDY_TIME_RULE`:**
- $4.207/1.500 = 2,805$ giờ $= 168,3$ phút $= 2$ giờ 48 phút.
- 10 bài tập: $10/5 \times 20 = 40$ phút.
- Tổng: $168,3 + 40 = 208,3$ phút $= 3$ giờ 28 phút; làm tròn **3 giờ 30 phút**.
- Bản thảo ghi "~4.200 từ" và "~2 giờ 50 phút" cho phần lý thuyết: chênh 7 từ và 2 phút so với tính lại; nằm trong mức làm tròn. **Khớp (Yes, rounded).**

---

## 3. Bảng tính chi tiết (Original | Recomputed | Match)

| # | Hạng mục | Original trong bản thảo | Recomputed độc lập | Match |
|---:|---|---|---|---|
| 1 | `T-04.1.2` thời lượng học tập | ~3 giờ 30 phút; ~2 giờ 50 phút cho ~4.200 từ Mục 1–6; +40 phút cho 10 bài | Mục 1–6 = 4.207 từ; 4.207/1.500 = 2,805 h = 2 h 48 ph; +40 ph = 208,3 ph = 3 h 28 ph ≈ **3 h 30 ph** | **Yes** (làm tròn) |
| 2 | `T-04.4.1.3` chuẩn hóa đồng hạch | $c_A^2+c_B^2=1$; $c_A=c_B=1/\sqrt{2}$ | $2\times(1/\sqrt{2})^2 = 2\times0,5 = 1,000000$ | **Yes** |
| 3 | `T-04.4.1.3` điều kiện $E_+<\alpha$ | $E_+<\alpha$ khi $\beta<\alpha S$, tức $|\beta|>|\alpha|S$ | $\alpha=-10$, $\beta=-5$, $S=0,2$: $E_+=-12,5<-10$; $\beta=-0,5$: $E_+=-8,75>-10$; điều kiện $\beta<\alpha S$ đúng/ sai tương ứng | **Yes** |
| 4 | `T-04.4.2.2` miền tích phân xen phủ | $|S_{AB}|\le1$; quy ước pha $S_{AB}>0$ khi xen phủ hiệu quả | Ràng buộc tổng quát $|S|\le1$ đúng; $S$ có thể âm nếu không áp quy ước pha | **Yes** |
| 5 | $O_2^{2-}$ (14 e) | $N_b=8$, $N_a=6$, $BO=1$, 0 e độc thân, nghịch từ | $\sigma_{2s}^2\sigma_{2s}^{*2}\sigma_{2p_z}^2\pi_{2p}^4\pi_{2p}^{*4}$; $N_b=8$, $N_a=6$, $BO=1$, 0 e độc thân | **Yes** |
| 6 | $O_2^-$ (13 e) | $8$, $5$, $1,5$, 1 e độc thân, thuận từ | $\pi_{2p}^{*3}$; $8$, $5$, $1,5$, 1 e độc thân | **Yes** |
| 7 | $O_2$ (12 e) | $8$, $4$, $2$, 2 e độc thân, thuận từ | $\pi_{2p}^{*2}$; $8$, $4$, $2$, 2 e độc thân | **Yes** |
| 8 | $O_2^+$ (11 e) | $8$, $3$, $2,5$, 1 e độc thân, thuận từ | $\pi_{2p}^{*1}$; $8$, $3$, $2,5$, 1 e độc thân | **Yes** |
| 9 | $H_2^+$ (1 e) | $N_b=1$, $N_a=0$, $BO=0,5$, 1 e độc thân | $\sigma_{1s}^1$; $1$, $0$, $0,5$, 1 e độc thân | **Yes** |
| 10 | $B_2$ (6 e, trộn $s$–$p$) | $4$, $2$, $1$, 2 e độc thân, thuận từ | $(\sigma_{2s})^2(\sigma^*_{2s})^2(\pi_{2p})^2$; $4$, $2$, $1$, 2 e độc thân | **Yes** |
| 11 | $C_2$ (8 e, trộn $s$–$p$) | $6$, $2$, $2$, 0 e độc thân, nghịch từ | $(\pi_{2p})^4$; $6$, $2$, $2$, 0 e độc thân | **Yes** |
| 12 | $N_2$ (10 e, trộn $s$–$p$) | $8$, $2$, $3$, 0 e độc thân, nghịch từ | $(\pi_{2p})^4(\sigma_{2p_z})^2$; $8$, $2$, $3$, 0 e độc thân | **Yes** |
| 13 | $F_2$ (14 e, không trộn) | $8$, $6$, $1$, 0 e độc thân, nghịch từ | $(\sigma_{2p_z})^2(\pi_{2p})^4(\pi^*_{2p})^4$; $8$, $6$, $1$, 0 e độc thân | **Yes** |
| 14 | $CO$ (10 e) | $8$, $2$, $3$, 0 e độc thân, nghịch từ | $(\sigma_{2s})^2(\sigma^*_{2s})^2(\pi_{2p})^4(\sigma_{2p_z})^2$; $8$, $2$, $3$, 0 e độc thân | **Yes** |
| 15 | $B_2H_6$ tổng electron | $12 = 2\times3 + 6\times1$ | $2\times3 + 6\times1 = 12$ | **Yes** |
| 16 | $B_2H_6$ phân bố terminal/cầu | 4 liên kết B–H biên $=8$ e; còn $4$ e cho 2 cầu; mỗi cầu $2$ e | $4\times2=8$; $12-8=4$; $4/2=2$ e/cầu | **Yes** |
| 17 | $B_2H_6$ mô hình $2c$–$2e$ cho cả 8 đoạn nối | $8\times2=16$ e $>12$ | $16>12$ | **Yes** |
| 18 | $B_2H_6$ mô hình $3c$–$2e$ chuẩn | $4$ terminal ($8$ e) $+2$ cầu ($4$ e) $=12$ e | $8+4=12$ | **Yes** |
| 19 | `Q10` "mô hình thay thế" 4 terminal $2c$–$2e$ + 2 cầu $3c$–$2e$ + 1 B–B $2c$–$2e$ | $8+4+2=14$ e $>12$ | Số học: $14>12$ đúng. Nhưng mô hình $3c$–$2e$ chuẩn chỉ cần $8+4=12$ e, không có liên kết B–B; câu "vẫn vượt 12" là lập luận sai/không liên quan | **Yes (số học) / No (logic)** |
| 20 | $B_2H_6$ octet mỗi B | 4 e từ 2 liên kết biên + 4 e từ 2 cầu $=8$ e/B | $2\times2+2\times2=8$ e/B (cách đếm octet quy ước) | **Yes** |
| 21 | Trật tự MO không trộn $s$–$p$ | $\sigma_{2s}<\sigma^*_{2s}<\sigma_{2p_z}<\pi_{2p}<\pi^*_{2p}<\sigma^*_{2p_z}$ | Đúng thứ tự đã dùng cho $O_2,F_2$; $\pi^*<\sigma^*$ | **Yes** |
| 22 | Trật tự MO có trộn $s$–$p$ | $\sigma_{2s}<\sigma^*_{2s}<\pi_{2p}<\sigma_{2p_z}<\pi^*_{2p}<\sigma^*_{2p_z}$ | Đúng thứ tự đã dùng cho $B_2,C_2,N_2$; $\pi^*<\sigma^*$ | **Yes** |
| 23 | Bảng 4.2 (5 phân tử) | $B_2$ 6/4/2/1/2; $C_2$ 8/6/2/2/0; $N_2$ 10/8/2/3/0; $O_2$ 12/8/4/2/2; $F_2$ 14/8/6/1/0 | Điền electron lại: khớp toàn bộ | **Yes** |
| 24 | Bảng 4.3 (4 loài oxygen) | $O_2^{2-}$ 14/8/6/1/0; $O_2^-$ 13/8/5/1,5/1; $O_2$ 12/8/4/2/2; $O_2^+$ 11/8/3/2,5/1 | Khớp toàn bộ; cấu hình $\pi^*$: $4,3,2,1$ e | **Yes** |
| 25 | Bảng 4.5 (4 loài oxygen) | $O_2^+$ 11/8/3/2,5/1; $O_2$ 12/8/4/2/2; $O_2^-$ 13/8/5/1,5/1; $O_2^{2-}$ 14/8/6/1/0 | Khớp toàn bộ | **Yes** |
| 26 | Bảng 4.6 (5 phân tử) | $B_2$ 6/4/2/1/2; $C_2$ 8/6/2/2/0; $N_2$ 10/8/2/3/0; $O_2$ 12/8/4/2/2; $F_2$ 14/8/6/1/0 | Khớp toàn bộ | **Yes** |
| 27 | Câu 5: chiều dài/năng lượng | $BO$: $2,5>2>1,5>1$; độ dài: $O_2^+<O_2<O_2^-<O_2^{2-}$; năng lượng: $O_2^+>O_2>O_2^->O_2^{2-}$ | $BO$ giảm đơn điệu; độ dài tăng, năng lượng giảm tương ứng | **Yes** |
| 28 | Câu 6: $N_2$/$F_2$ | $N_2$: 8/2/3/0; $F_2$: 8/6/1/0 | Khớp | **Yes** |
| 29 | Câu 8: VB và MO của $O_2$ | VB: 12 e $=6$ cặp; MO: $8/4/2/2$ | $2\times6=12$; $8+4=12$; $BO=2$; 2 e độc thân | **Yes** |
| 30 | Câu 9: $CO$ | 10 e; $8/2/3/0$ | $4+6=10$; $8+2=10$; $BO=3$; 0 e độc thân | **Yes** |
| 31 | Câu 10: tổng $12$ e và $6$ cặp | $2\times3+6\times1=12$; $12/2=6$ cặp | Khớp | **Yes** |
| 32 | Câu 10: mô hình $3c$–$2e$ dùng $12$ e | $8$ terminal $+4$ cầu $=12$ | Khớp | **Yes** |
| 33 | Bảo toàn electron/điện tích | Dãy $O_2$: $2\times6-q$; $CO$: $4+6$; $B_2H_6$: $2\times3+6\times1$; $H_2^+$: $1$ | $11,12,13,14$; $10$; $12$; $1$ — khớp $N_b+N_a$ từng loài | **Yes** |
| 34 | Đơn vị/thứ nguyên | $BO$ không thứ nguyên; electron nguyên; $\Delta E$ eV; thời lượng giờ/phút; $E_\pm$ năng lượng; $S$ không thứ nguyên | Không phát hiện sai đơn vị/thứ nguyên | **Yes** |

**Kết luận §3:** Toàn bộ phép tính số học trong ví dụ, bảng và đáp án đều khớp khi tính lại. Hạng mục duy nhất không khớp là **logic** của `Q10` (dòng 539), không phải số học: $8+4+2=14$ đúng, nhưng mô hình $3c$–$2e$ chuẩn chỉ dùng $12$ e và không cần liên kết B–B.

---

## 4. Kiểm tra tính nhất quán bảng và trật tự MO

- **Bảng 4.2** dùng ký hiệu gộp $(\pi_{2p})^n$; chú thích dòng 159 giải thích ký hiệu gộp. Giá trị electron/$BO$/từ tính khớp Bảng 4.6.
- **Bảng 4.3** chỉ gồm 4 loài oxygen; cấu hình $\pi^*$ tách $(\pi^*_{2p_x})^a(\pi^*_{2p_y})^b$ khớp số electron: $O_2^{2-}$ (2,2), $O_2^-$ (2,1), $O_2$ (1,1), $O_2^+$ (1,0).
- **Bảng 4.5** trùng giá trị Bảng 4.3 (chỉ đảo thứ tự trình bày).
- **Bảng 4.6** trùng giá trị Bảng 4.2.
- **Hai trật tự MO** trong Mục 4.4.1/4.4.2, Hình 4.2/4.3, Bảng 4.4 và Câu 5–7 nhất quán: không trộn $\sigma_{2p_z}<\pi_{2p}$; có trộn $\pi_{2p}<\sigma_{2p_z}$; cả hai đều $\pi^*<\sigma^*$.
- **Bảng 4.1** nhất quán với hai trật tự: $\sigma^*$ phá bền mạnh hơn $\pi^*$ (nằm trên $\pi^*$).

---

## 5. Kiểm tra logic `Q10` (dòng 539)

**Nguyên văn:**
> "Mô hình thay thế gồm 4 liên kết B–H biên ($2c$–$2e$), 2 cầu ($3c$–$2e$) và 1 liên kết B–B ($2c$–$2e$) cũng chỉ dùng $8 + 4 + 2 = 14$ electron, vẫn vượt 12 electron hiện có."

**Tái tính:**
- 4 terminal B–H $\times2=8$ e.
- 2 cầu $3c$–$2e$ $\times2=4$ e.
- 1 B–B $2c$–$2e$ $=2$ e.
- Tổng $8+4+2=14$ e $>12$ e. **Số học đúng.**

**Lỗi logic:**
1. Mô hình $3c$–$2e$ chuẩn cho $B_2H_6$ dùng đúng $8+4=12$ e (Mục 4.6; `Q10` phần 3; Ví dụ 4.4). Không có liên kết B–B trong mô hình này.
2. Việc thêm 1 liên kết B–B là một mô hình giả định không được nêu ở Mục 4.6; sau đó kết luận "vẫn vượt 12" vừa đúng số học vừa **không chứng minh được** rằng $3c$–$2e$ không đủ. Ngược lại, nó mâu thuẫn với chính `Q10` phần 3 ("hai cầu dùng 4 e; cộng 8 e terminal được 12 e").
3. Câu trả lời đúng cho `Q10` phần 2 chỉ cần: mô hình $2c$–$2e$ cho cả 8 đoạn nối cần $16$ e $>12$ e; do đó cần mô hình $3c$–$2e$ với $12$ e. Câu "mô hình thay thế ... 14 e" là thừa và gây nhiễu.

**Kết luận:** `QA2-04.01` — **Major** (logic/answer key), không phải lỗi số học. Đề nghị xóa câu thứ hai hoặc thay bằng: "Mô hình $3c$–$2e$ dùng đúng $8+4=12$ electron, không cần liên kết B–B; do đó $3c$–$2e$ là mô hình tối thiểu phù hợp."

---

## 6. Kiểm toán `_tools/check_calc_ch04.py` (lỗi ẩn / dữ liệu cũ)

Script này **không được dùng làm nguồn chuẩn** cho vòng 2. Các vấn đề phát hiện khi đọc:

| Vị trí | Vấn đề | Hệ quả |
|---|---|---|
| Dòng 71–79 | Hardcode `theory_words = 4005`, `3 giờ 30` với `2 giờ 40` và `3 giờ 20` | Bản hiện tại có 4.207 từ Mục 1–6 và ghi 3 giờ 30; script sẽ báo "No" sai |
| Dòng 91–101 | Hardcode câu cũ "$\alpha,\beta<0\Rightarrow E_+<\alpha$" | Bản hiện tại đã sửa thành $\beta<\alpha S$; script vẫn báo "No" |
| Dòng 103–109 | Hardcode "$0\le S\le1$" | Bản hiện tại đã sửa thành $|S|\le1$; script vẫn báo "No" |
| Dòng 148–153 | Hardcode "7 liên kết $2c$–$2e$" | Bản hiện tại đã đổi thành "4 terminal + 2 cầu $3c$–$2e$ + 1 B–B"; script không kiểm tra được lỗi logic mới |
| Dòng 161–167 | Hardcode "$\Delta E$ khoảng 10–14 eV" | Bản hiện tại đã khôi phục $\le10$–$14$ eV và $\le12$ eV; script vẫn báo "No" |
| Dòng 169–180 | Hardcode "$\sigma^*<\pi^*$" | Bản hiện tại đã sửa thành $\sigma^*>\pi^*$; script vẫn báo "No" |
| Dòng 182–189 | Ghi "nhãn $5\sigma$/$6\sigma^*$ ở Hình 4.4 khác quy ước" | Bản hiện tại đã thêm ánh xạ; script không cập nhật |
| Dòng 207–234 | Ghi đè `_state/checks/ch04_s4_calc.md` | Nếu chạy sẽ phá báo cáo cũ; QA2 không chạy script này |

**Kết luận:** Bản thân số học trong 23 dòng của script không sai, nhưng script là **ảnh chụp cứng của bản nháp vòng 1**, không parse `ch04_draft.md` hiện tại. Vì vậy không thể dùng nó để xác nhận/vá các mục đã sửa, và nó bỏ sót lỗi logic `Q10` mới. Đây là lý do phải tái tính độc lập.

---

## 7. Đơn vị, thứ nguyên, bảo toàn

- **Bảo toàn electron:** dãy $O_2$: $2\times6-q$ với $q=+1,0,-1,-2$ → $11,12,13,14$ e; $N_b+N_a$ lần lượt $8+3,8+4,8+5,8+6$. $CO$: $4+6=10=8+2$. $B_2H_6$: $2\times3+6\times1=12=8+4$. $H_2^+$: $1=1+0$. **Đạt.**
- **Bảo toàn điện tích:** các tiểu phân $O_2^{q}$ dùng đúng $q$; không có phản ứng hóa học trong chương cần cân bằng thêm. **Đạt.**
- **Thứ nguyên:** $BO$ không thứ nguyên; $N_b,N_a$ là số electron; $\Delta E$ và $E_\pm$ là năng lượng (eV); $S$ không thứ nguyên; thời lượng là giờ/phút. **Đạt.**
- **Quy ước dấu:** $E_\pm=(\alpha\pm\beta)/(1\pm S)$ với $\alpha,\beta<0$, $S>0$ theo quy ước pha; điều kiện $E_+<\alpha$ là $\beta<\alpha S$. Nếu đổi quy ước dấu của $\beta$ hoặc $S$, phải phát biểu lại điều kiện — bản thảo đã nêu quy ước. **Đạt (theo quy ước đã nêu).**

---

## 8. Hạn chế

1. Không có nguồn tham khảo ngoài; không thể xác nhận các giá trị thực nghiệm ($E_{lk}(N_2)=945$ kJ/mol, độ bền $CO$–$Hb$ 200–250 lần, tính thuận từ của $O_2$ lỏng) bằng tài liệu gốc.
2. Cách đếm từ của `check_length.py` khác cách đếm trong audit (nguồn 1.153 từ so với 1.443 từ trong audit); tỷ lệ 6,00× chỉ mang tính tham khảo.
3. Trật tự MO và mức trộn $s$–$p$ là mô hình định tính; các giá trị năng lượng tuyệt đối không được kiểm tra.
4. Cách đếm octet mỗi B trong $B_2H_6$ là quy ước hình thức; liên kết $3c$–$2e$ thực tế phi định xứ, không quy về cặp B–H riêng.
5. Không kiểm tra hình ảnh: Hình 4.2–4.6 là placeholder, Hình 4.1 là Mermaid.
6. Không đọc `ch04_selfcheck.md`, `ch04_part1.md`–`ch04_part3.md` hay thảo luận tác giả.
7. Không tái thẩm định nội dung Chương 01–03; chỉ kiểm tra sự tồn tại/ngữ cảnh các T-ID tham chiếu.
8. 44 thẻ `[VERIFY]` vẫn mở; QA chỉ kiểm tra vị trí/cú pháp, không xác nhận nội dung khoa học bên trong.
