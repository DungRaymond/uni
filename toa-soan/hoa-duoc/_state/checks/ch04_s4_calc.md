# S4 Calculation & Structural Verification Report: ch04_draft.md
- **Script:** `_tools/check_calc_ch04.py`
- **Total items verified:** 23
- **Matches:** 17 / 23
- **Mismatches:** 6

| # | Item | Original in draft | Recomputed by script | Match (Yes/No) |
|---|---|---|---|---|
| 1 | `T-04.1.2` Thời lượng học tập (`STUDY_TIME_RULE`: 1 h/1.500 từ + 20 phút/5 bài) | ~**3 giờ 30 phút** (2 giờ 40 phút cho 4.005 từ + 40 phút cho 10 bài) | 4005/1500 = 2.67 h (2 h 40 ph); + 40 ph = 3.34 h = 200 ph ≈ **3 giờ 20 phút** | **No** |
| 2 | `T-04.4.1.3` Chuẩn hóa đồng hạch $c_A=c_B=1/\sqrt{2}$ | $c_A^2+c_B^2=1$ | 2×(1/√2)² = 2×0.500000 = 1.000000 = 1 | **Yes** |
| 3 | `T-04.4.1.3` Khẳng định “vì $\alpha,\beta<0$, $E_+$ nằm dưới $\alpha$” | $\alpha,\beta<0 \Rightarrow E_+<\alpha$ | Điều kiện đúng là $\beta<\alpha S$ (⟺ $|\beta|>|\alpha|S$); phản ví dụ α=-10.0, β=-0.5, S=0.2: $E_+$=-8.750 eV > α=-10.0 eV; điều kiện β<αS: False | **No** |
| 4 | `T-04.4.2.2` Miền giá trị tích phân xen phủ $S_{AB}$ | $0 \le S \le 1$ | Tổng quát $|S| \le 1$; $S$ có thể âm (ví dụ S = −0,3 là hợp lệ), nên cận dưới 0 chỉ đúng sau quy ước pha | **No** |
| 5 | $O_2^{2-}$ (14 e): cấu hình, $N_b$, $N_a$, $BO$, e độc thân | $N_b=8$, $N_a=6$, $BO=1$, 0 e độc thân | σ2s²σ*2s²σ2pz²π2p⁴π*2p⁴σ*2pz → $N_b=8$, $N_a=6$, $BO=1$, 0 e độc thân | **Yes** |
| 6 | $O_2^-$ (13 e): cấu hình, $N_b$, $N_a$, $BO$, e độc thân | $N_b=8$, $N_a=5$, $BO=1.5$, 1 e độc thân | σ2s²σ*2s²σ2pz²π2p⁴π*2p³σ*2pz → $N_b=8$, $N_a=5$, $BO=1.5$, 1 e độc thân | **Yes** |
| 7 | $O_2$ (12 e): cấu hình, $N_b$, $N_a$, $BO$, e độc thân | $N_b=8$, $N_a=4$, $BO=2$, 2 e độc thân | σ2s²σ*2s²σ2pz²π2p⁴π*2p²σ*2pz → $N_b=8$, $N_a=4$, $BO=2$, 2 e độc thân | **Yes** |
| 8 | $O_2^+$ (11 e): cấu hình, $N_b$, $N_a$, $BO$, e độc thân | $N_b=8$, $N_a=3$, $BO=2.5$, 1 e độc thân | σ2s²σ*2s²σ2pz²π2p⁴π*2p¹σ*2pz → $N_b=8$, $N_a=3$, $BO=2.5$, 1 e độc thân | **Yes** |
| 9 | $H_2^+$ (1 e) trong Example 4.1 | $N_b=1$, $N_a=0$, $BO=0,5$, 1 e độc thân | σ1s¹ → $N_b=1$, $N_a=0$, $BO=0.5$, 1 e độc thân | **Yes** |
| 10 | $B_2$ (6 e, trộn s–p): cấu hình, $N_b$, $N_a$, $BO$, e độc thân | $N_b=4$, $N_a=2$, $BO=1$, 2 e độc thân | σ2s²σ*2s²π2p²σ2pzπ*2pσ*2pz → $N_b=4$, $N_a=2$, $BO=1$, 2 e độc thân | **Yes** |
| 11 | $C_2$ (8 e, trộn s–p): cấu hình, $N_b$, $N_a$, $BO$, e độc thân | $N_b=6$, $N_a=2$, $BO=2$, 0 e độc thân | σ2s²σ*2s²π2p⁴σ2pzπ*2pσ*2pz → $N_b=6$, $N_a=2$, $BO=2$, 0 e độc thân | **Yes** |
| 12 | $N_2$ (10 e, trộn s–p): cấu hình, $N_b$, $N_a$, $BO$, e độc thân | $N_b=8$, $N_a=2$, $BO=3$, 0 e độc thân | σ2s²σ*2s²π2p⁴σ2pz²π*2pσ*2pz → $N_b=8$, $N_a=2$, $BO=3$, 0 e độc thân | **Yes** |
| 13 | $O_2$ (12 e, không trộn): cấu hình, $N_b$, $N_a$, $BO$, e độc thân | $N_b=8$, $N_a=4$, $BO=2$, 2 e độc thân | σ2s²σ*2s²σ2pz²π2p⁴π*2p²σ*2pz → $N_b=8$, $N_a=4$, $BO=2$, 2 e độc thân | **Yes** |
| 14 | $F_2$ (14 e, không trộn): cấu hình, $N_b$, $N_a$, $BO$, e độc thân | $N_b=8$, $N_a=6$, $BO=1$, 0 e độc thân | σ2s²σ*2s²σ2pz²π2p⁴π*2p⁴σ*2pz → $N_b=8$, $N_a=6$, $BO=1$, 0 e độc thân | **Yes** |
| 15 | $CO$ (10 e, cấu hình rút gọn của bản thảo): cấu hình, $N_b$, $N_a$, $BO$, e độc thân | $N_b=8$, $N_a=2$, $BO=3$, 0 e độc thân | σ2s²σ*2s²π2p⁴σ2pz²π*2pσ*2pz → $N_b=8$, $N_a=2$, $BO=3$, 0 e độc thân (đếm electron/BO khớp; nhãn σ2s/σ*2s là quy ước đồng hạch, xem QA) | **Yes** |
| 16 | `T-04.4.6` / `T-04.5.4` / Q10 $B_2H_6$: tổng e hóa trị và phân bố | 12 e = 4 liên kết B–H biên (8 e) + 2 cầu B–H–B (4 e) | 2×3 + 6×1 = 12 e; 4×2 = 8 e; còn 4 e cho 2 cầu = 2 e/cầu | **Yes** |
| 17 | Q10 Mô hình thay thế $2c$–$2e$: 8 đoạn nối và 7 liên kết | 8 đoạn nối cần 16 e; 7 liên kết (4 terminal + 2 cầu + 1 B–B) cần 14 e | 8×2 = 16 e > 12 e; 7×2 = 14 e > 12 e — số học khớp; nhãn “2 cầu” cho B–H–B là 3c–2e, không phải 2c–2e | **No** |
| 18 | Q10 Octet mỗi B trong mô hình $3c$–$2e$ | Mỗi B đủ 8 e: 4 e từ 2 liên kết biên + 4 e từ 2 cầu | 2×2 (biên) + 2×2 (mỗi cầu góp 2 e cho B) = 8 e/B | **Yes** |
| 19 | `T-04.4.2.1` Ngưỡng $\Delta E$ so với nguồn | Bản thảo: “$\Delta E$ khoảng 10–14 eV”; changelog nói giữ cả “≤ 12 eV” | Nguồn S-04.2: “$\Delta E \le 10$–$14$ eV”; S-04.4: “$\Delta E(2p-2s) \le 12$ eV”; bản thảo bỏ dấu “≤” và bỏ hẳn 12 eV | **No** |
| 20 | `T-04.4.3.1` Tóm tắt “mức phá bền tăng $\sigma^* < \pi^*$” | $\sigma^* < \pi^*$ (tức $\sigma^*$ thấp hơn $\pi^*$) | Cả hai trật tự đều cho $\pi^* < \sigma^*$: không trộn=True, có trộn=True; chuẩn MO: $\sigma^*$ nằm trên $\pi^*$ | **No** |
| 21 | `T-04.4.5.2` / `T-04.5.3` $CO$: HOMO và LUMO theo cấu hình đã điền | HOMO là $\sigma$ trên C; LUMO là $\pi^*$ | Sau 10 e: MO cao nhất bị chiếm là $\sigma_{2p_z}$ (hướng C); MO trống thấp nhất là $\pi^*_{2p}$ → HOMO/LUMO đúng; nhãn $5\sigma$/$6\sigma^*$ ở Hình 4.4 khác quy ước | **Yes** |
| 22 | `T-04.5.1` Cân bằng điện tích–electron dãy $O_2$ | $O_2^{2-}$ 14 e, $O_2^-$ 13 e, $O_2$ 12 e, $O_2^+$ 11 e | 2×6 + 2 = 14; 2×6 + 1 = 13; 2×6 = 12; 2×6 − 1 = 11 | **Yes** |
| 23 | `T-04.4.6` / Q10 Cầu $B$–$H$–$B$: 3 AO → 3 MO, 2 e ở MO thấp nhất | 3 AO (2 $sp^3$ của B + 1 $1s$ của H) → 3 MO; 2 e chiếm MO liên kết | Số AO = 3 = số MO; 2 e < 4 e (sức chứa 2 MO thấp) → còn 1 MO liên kết đầy, 1 không liên kết trống, 1 phản liên kết trống | **Yes** |

## Notes
- `T-04.1.2`: phép chia đúng là 2,67 h (2 h 40 ph); cộng 40 ph = 3 h 20 ph, không phải 3 h 30 ph.
- `T-04.4.1.3`: biểu thức $E_\pm=(\alpha\pm\beta)/(1\pm S)$ đúng, nhưng nhãn $E_+$ “liên kết” chỉ đúng khi $\beta<\alpha S$.
- `T-04.4.3.1`: tóm tắt $\sigma^*<\pi^*$ mâu thuẫn với chính trật tự $\pi^*<\sigma^*$ ở Mục 4.4.1–4.4.2.
- `T-04.4.2.1`: nguồn có hai ngưỡng $\le 10$–$14$ eV và $\le 12$ eV; bản thảo chỉ còn “khoảng 10–14 eV”.
- `T-04.4.5.2`: đếm electron và $BO=3$ khớp; vấn đề là nhãn orbital đồng hạch cho $CO$ dị hạch (xem QA-04.04).
- Q10: số học 16 e / 14 e khớp; nhãn “2 cầu” trong mô hình 7 liên kết $2c$–$2e$ là không nhất quán (cầu B–H–B là $3c$–$2e$).
- Không tái tính được từ nguồn: $E_{lk}(N_2)=945$ kJ/mol và độ bền $CO$–$Hb$ 200–250 lần (chỉ ghi nhận là giá trị nguồn, đã có `[VERIFY]`).
