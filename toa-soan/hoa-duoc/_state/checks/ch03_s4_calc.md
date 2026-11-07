# S4 Calculation & Structural Verification Report: ch03_draft.md
- **Script:** `_tools/check_calc_ch03.py`
- **Total items verified:** 36
- **Matches:** 36 / 36
- **Mismatches:** 0

| # | Item | Original in draft | Recomputed by script | Match (Yes/No) |
|---|---|---|---|---|
| 1 | `T-03.1.2` Study time estimate (`STUDY_TIME_RULE`) | ~3,0 giờ (2,3 giờ lý thuyết/ví dụ + 40 phút / 10 bài tập) | 2.30 h (~3.450 từ / 1.500) + 40 min (10 bài) = 2.97 h ≈ 3.0 h | **Yes** |
| 2 | `T-03.4.3` / `Bảng 3.2` Lai hóa $sp$ ($k=1$): $\%s / \%p$ & $\cos\theta = -1/k$ | %s = 50.0%, %p = 50.0%, cos θ = -1 (θ ≈ 180.0°) | %s = 50.0%, %p = 50.0%, cos θ = -1 (θ = 180.0°) | **Yes** |
| 3 | `T-03.4.3` / `Bảng 3.2` Lai hóa $sp^2$ ($k=2$): $\%s / \%p$ & $\cos\theta = -1/k$ | %s = 33.3%, %p = 66.7%, cos θ = -0.5 (θ ≈ 120.0°) | %s = 33.3%, %p = 66.7%, cos θ = -0.5 (θ = 120.0°) | **Yes** |
| 4 | `T-03.4.3` / `Bảng 3.2` Lai hóa $sp^3$ ($k=3$): $\%s / \%p$ & $\cos\theta = -1/k$ | %s = 25.0%, %p = 75.0%, cos θ = -0.3333 (θ ≈ 109.47°) | %s = 25.0%, %p = 75.0%, cos θ = -0.3333 (θ = 109.47°) | **Yes** |
| 5 | `Bảng 3.2` Lai hóa $sp^3d$: tổng AO & tỷ lệ $\%s:\%p:\%d$ | 20% : 60% : 20% (5 AO) | 20% : 60% : 20% (5 AO) | **Yes** |
| 6 | `Bảng 3.2` Lai hóa $dsp^2$: tổng AO & tỷ lệ $\%s:\%p:\%d$ | 25% : 50% : 25% (4 AO) | 25% : 50% : 25% (4 AO) | **Yes** |
| 7 | `Bảng 3.2` Lai hóa $sp^3d^2 / d^2sp^3$: tổng AO & tỷ lệ $\%s:\%p:\%d$ | 16,7% : 50% : 33,3% (6 AO) | 16.7% : 50% : 33.3% (6 AO) | **Yes** |
| 8 | `T-03.4.2` / `Câu 2` Số mặt phẳng nút chứa trục $Oz$ ($\sigma, \pi, \delta$) | σ = 0, π = 1, δ = 2; độ bền σ > π > δ | σ: m_l=0 (0 mặt nút); π: |m_l|=1 (1 mặt nút); δ: |m_l|=2 (2 mặt nút) | **Yes** |
| 9 | `T-03.4.2` / `Câu 9` Ion phức $[Re_2Cl_8]^{2-}$: số oxy hóa, cấu hình $5d^n$ & liên kết bốn | Re3+ (5d4); bậc 4 = 1σ (5d_z2) + 2π (5d_xz, 5d_yz) + 1δ (5d_xy); ReCl4 lai hóa dsp2 (5d_x2-y2) | Re ox = +3 (5d^4); bậc liên kết = 4 (1σ + 2π + 1δ); tổng e liên kết Re-Re = 8 e | **Yes** |
| 10 | `T-03.4.6` / `Câu 10` Phân tử $O_2$: tổng e hóa trị & số e độc thân thực nghiệm | 12 e hóa trị; VB: :Ö=Ö: (0 e độc thân, nghịch từ) vs Thực nghiệm: thuận từ (2 e độc thân trên π*) | Tổng e hóa trị = 12 e; MO: (σ2s)2(σ*2s)2(σ2pz)2(π2px,y)4(π*2px)1(π*2py)1 -> 2 e độc thân | **Yes** |
| 11 | `T-03.4.6` / `Câu 10` Phân tử $B_2H_6$ vs $C_2H_6$: tổng e hóa trị & cầu $3c\text{–}2e$ | B2H6: 2×3 + 6×1 = 12 e (4 liên kết B-H biên = 8 e; 2 cầu B-H-B 3c-2e = 4 e); C2H6: 14 e (7 liên kết 2c-2e) | B2H6 = 12 e (8 e biên + 4 e cho 2 cầu 3c-2e); C2H6 = 14 e | **Yes** |
| 12 | `T-03.5.1` (Example 3.1) Phân tử $CH_4$ | SN=4 (sp^3, 109,5°); 4σ + 0π; tổng e liên kết = 8 e | SN=4+0=4 (sp^3, 109,5°); 4σ + 0π; 2×(4+0) = 8 e (VE = 8 e) | **Yes** |
| 13 | `T-03.5.1` (Example 3.1) Phân tử $C_2H_4$ | SN=3 (sp^2, 120°); 5σ + 1π; tổng e liên kết = 12 e | SN=3+0=3 (sp^2, 120°); 5σ + 1π; 2×(5+1) = 12 e (VE = 12 e) | **Yes** |
| 14 | `T-03.5.1` (Example 3.1) Phân tử $C_2H_2$ | SN=2 (sp, 180°); 3σ + 2π; tổng e liên kết = 10 e | SN=2+0=2 (sp, 180°); 3σ + 2π; 2×(3+2) = 10 e (VE = 10 e) | **Yes** |
| 15 | `T-03.5.2` (Example 3.2) Tiểu phân $CH_4$ | SN = 4 (m=4, n=0), lai hóa sp^3, góc = 109,5° | SN = (4+4-0)/2 = 4; m=4, n=0 -> AX_4E_0 (sp^3), góc = 109,5° | **Yes** |
| 16 | `T-03.5.2` (Example 3.2) Tiểu phân $NH_4^+$ | SN = 4 (m=4, n=0), lai hóa sp^3, góc = 109,5° | SN = (5+4-1)/2 = 4; m=4, n=0 -> AX_4E_0 (sp^3), góc = 109,5° | **Yes** |
| 17 | `T-03.5.2` (Example 3.2) Tiểu phân $NH_3$ | SN = 4 (m=3, n=1), lai hóa sp^3, góc = 107,3° | SN = (5+3-0)/2 = 4; m=3, n=1 -> AX_3E_1 (sp^3), góc = 107,3° | **Yes** |
| 18 | `T-03.5.2` (Example 3.2) Tiểu phân $H_2O$ | SN = 4 (m=2, n=2), lai hóa sp^3, góc = 104,5° | SN = (6+2-0)/2 = 4; m=2, n=2 -> AX_2E_2 (sp^3), góc = 104,5° | **Yes** |
| 19 | `T-03.5.3` / `Bài 7` / `Câu 8` Phức chất $[FeF_6]^{3-}$ | Fe^3+ (d^5), lai hóa sp^3d^2, Bát diện ngoài (spin cao), 5 e độc thân (Thuận từ rất mạnh) | Z=26, ox=+3 -> d^5; lai hóa sp^3d^2 (Bát diện ngoài (spin cao)); n_e độc thân = 5 (Thuận từ rất mạnh) | **Yes** |
| 20 | `T-03.5.3` / `Bài 7` / `Câu 8` Phức chất $[Fe(CN)_6]^{3-}$ | Fe^3+ (d^5), lai hóa d^2sp^3, Bát diện trong (spin thấp), 1 e độc thân (Thuận từ yếu) | Z=26, ox=+3 -> d^5; lai hóa d^2sp^3 (Bát diện trong (spin thấp)); n_e độc thân = 1 (Thuận từ yếu) | **Yes** |
| 21 | `T-03.5.3` / `Bài 7` / `Câu 8` Phức chất $[Ni(CN)_4]^{2-}$ | Ni^2+ (d^8), lai hóa dsp^2, Vuông phẳng (spin thấp), 0 e độc thân (Nghịch từ) | Z=28, ox=+2 -> d^8; lai hóa dsp^2 (Vuông phẳng (spin thấp)); n_e độc thân = 0 (Nghịch từ) | **Yes** |
| 22 | `T-03.5.3` / `Bài 7` / `Câu 8` Phức chất $cis-[Pt(NH_3)_2Cl_2]$ | Pt^2+ (d^8), lai hóa dsp^2, Vuông phẳng (spin thấp), 0 e độc thân (Nghịch từ) | Z=78, ox=+2 -> d^8; lai hóa dsp^2 (Vuông phẳng (spin thấp)); n_e độc thân = 0 (Nghịch từ) | **Yes** |
| 23 | `T-03.7.4` Câu 1 – Câu 4 (Trắc nghiệm lý thuyết) | Câu 1: B | Câu 2: A | Câu 3: B | Câu 4: B | Câu 1: B (σ xen phủ trục Oz, ↑↓) | Câu 2: A (mặt nút 0<1<2, bền σ>π>δ) | Câu 3: B (%s: 50%>33,3%>25%, quy tắc Bent) | Câu 4: B (tổng mũ = SN; d8 trường mạnh -> dsp2) | **Yes** |
| 24 | `T-03.7.4` (Bài tập 5) Tiểu phân $BeCl_2$ | SN = (2+2-0)/2 = 2, (m=2, n=0), sp (tổng mũ 2), 50% / 50%, 180° | SN = 2, (m=2, n=0), AX_2E_0, sp (tổng mũ = 2), 50% / 50%, 180° | **Yes** |
| 25 | `T-03.7.4` (Bài tập 5) Tiểu phân $BF_3$ | SN = (3+3-0)/2 = 3, (m=3, n=0), sp^2 (tổng mũ 3), 33,3% / 66,7%, 120° | SN = 3, (m=3, n=0), AX_3E_0, sp^2 (tổng mũ = 3), 33,3% / 66,7%, 120° | **Yes** |
| 26 | `T-03.7.4` (Bài tập 5) Tiểu phân $CH_4$ | SN = (4+4-0)/2 = 4, (m=4, n=0), sp^3 (tổng mũ 4), 25% / 75%, 109°28' (109,5°) | SN = 4, (m=4, n=0), AX_4E_0, sp^3 (tổng mũ = 4), 25% / 75%, 109°28' (109,5°) | **Yes** |
| 27 | `T-03.7.4` (Bài tập 5) Tiểu phân $NH_4^+$ | SN = (5+4-1)/2 = 4, (m=4, n=0), sp^3 (tổng mũ 4), 25% / 75%, 109,5° | SN = 4, (m=4, n=0), AX_4E_0, sp^3 (tổng mũ = 4), 25% / 75%, 109,5° | **Yes** |
| 28 | `T-03.7.4` (Bài tập 5) Tiểu phân $SO_3$ | SN = (6+0-0)/2 = 3, (m=3, n=0), sp^2 (tổng mũ 3), 33,3% / 66,7%, 120° | SN = 3, (m=3, n=0), AX_3E_0, sp^2 (tổng mũ = 3), 33,3% / 66,7%, 120° | **Yes** |
| 29 | `T-03.7.4` (Bài tập 5) Tiểu phân $SO_4^{2-}$ | SN = (6+0--2)/2 = 4, (m=4, n=0), sp^3 (tổng mũ 4), 25% / 75%, 109,5° | SN = 4, (m=4, n=0), AX_4E_0, sp^3 (tổng mũ = 4), 25% / 75%, 109,5° | **Yes** |
| 30 | `T-03.7.4` (Bài tập 5) Tiểu phân $CO_3^{2-}$ | SN = (4+0--2)/2 = 3, (m=3, n=0), sp^2 (tổng mũ 3), 33,3% / 66,7%, 120° | SN = 3, (m=3, n=0), AX_3E_0, sp^2 (tổng mũ = 3), 33,3% / 66,7%, 120° | **Yes** |
| 31 | `T-03.7.4` (Bài tập 5) Tiểu phân $PCl_5$ | SN = (5+5-0)/2 = 5, (m=5, n=0), sp^3d (tổng mũ 5), 3 eq (sp2) + 2 ax (pd), 120° (eq) & 90° (ax-eq) | SN = 5, (m=5, n=0), AX_5E_0, sp^3d (tổng mũ = 5), 3 eq (sp2) + 2 ax (pd), 120° (eq) & 90° (ax-eq) | **Yes** |
| 32 | `T-03.7.4` (Bài tập 6) Phân tử $CO_2$ | Tổng 16 e hóa trị; SN=2 (sp); 2σ và 2π (2 σ(sp-2pz) + 2 π(2p-2p)) | VE = 16 e; SN = 2+0 = 2 (sp); tổng liên kết = 2σ + 2π | **Yes** |
| 33 | `T-03.7.4` (Bài tập 6) Phân tử $C_2H_4$ | Tổng 12 e hóa trị; SN=3 (sp^2); 5σ và 1π (4 σ(sp2-1s) + 1 σ(sp2-sp2) + 1 π(2p-2p)) | VE = 12 e; SN = 3+0 = 3 (sp^2); tổng liên kết = 5σ + 1π | **Yes** |
| 34 | `T-03.7.4` (Bài tập 6) Phân tử $C_2H_2$ | Tổng 10 e hóa trị; SN=2 (sp); 3σ và 2π (2 σ(sp-1s) + 1 σ(sp-sp) + 2 π(2p-2p)) | VE = 10 e; SN = 2+0 = 2 (sp); tổng liên kết = 3σ + 2π | **Yes** |
| 35 | `T-03.7.4` (Bài tập 6) Phân tử $HCN$ | Tổng 10 e hóa trị; SN=2 (sp); 2σ và 2π (1 σ(sp-1s) + 1 σ(sp-sp) + 2 π(2p-2p)) | VE = 10 e; SN = 2+0 = 2 (sp); tổng liên kết = 2σ + 2π | **Yes** |
| 36 | `T-03.7.4` (Bài tập 6) Phân tử $SO_2$ | Tổng 18 e hóa trị; SN=3 (sp^2); 2σ và 2π (2 σ(sp2-2pz) + 1 π(3p-2p) + 1 π(3d-2p)) | VE = 18 e; SN = 2+1 = 3 (sp^2); tổng liên kết = 2σ + 2π | **Yes** |
