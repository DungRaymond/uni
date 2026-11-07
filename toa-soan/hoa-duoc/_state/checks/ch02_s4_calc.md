# Mechanical Calculation & Balance Check Report: Chapter 02 (Stage S4 QA)
- Script: `_tools/check_calc_ch02.py`
- Target file: `03_chapters/ch02_draft.md`
- Total items verified: **30**
- Matched: **30/30** (**100.0%**)
- Discrepancies: **0**
- Status: **✅ PASS**

## Detailed Recomputation Table
| Calc ID | Section (T-ID) | Item / Calculation | Original in Draft | Recomputed by Script | Match (Yes/No) |
|---|---|---|---|---|---|
| CALC-01 | `T-02.1.2` | Thời lượng học tập dự kiến (STUDY_TIME_RULE: 1h/1500 từ + 20p/5 bài) | Cốt lõi: 80p + 40p = 120p (2,0 h); Toàn văn (~3.750 từ Mục 1–6): 150p + 40p = 190p (3,2 h) | Cốt lõi: 80p + 40p = 120p (2.0 h); Toàn văn: 150p + 40p = 190p (3.2 h) | **Yes** |
| CALC-02 | `T-02.4.2` | HCN (A=C, phối tử H đơn hóa trị M=+1, N ba hóa trị M=-1) | V=4, M=+1+(-1)=0, q=0 => SN=2, m=2, n=0 (AX_2), E_val=10e | V=4, M=0, q=0 => SN=2, m=2, n=0 (AX_2), E_val=10e | **Yes** |
| CALC-03 | `T-02.4.2` | O3 hay O(O)_2 (A=O, 2 phối tử O hai hóa trị M=0) | V=6, M=0, q=0 => SN=3, m=2, n=1 (AX_2E), E_val=18e | V=6, M=0, q=0 => SN=3, m=2, n=1 (AX_2E), E_val=18e | **Yes** |
| CALC-04 | `T-02.4.2` | I3- hay [I(I)_2]- (A=I, 2 phối tử I đơn hóa trị M=2, q=-1) | V=7, M=2, q=-1 => SN=5, m=2, n=3 (AX_2E_3), E_val=22e | V=7, M=2, q=-1 => SN=5, m=2, n=3 (AX_2E_3), E_val=22e | **Yes** |
| CALC-05 | `T-02.4.3` | Kiểm tra toàn bộ 39 công thức ví dụ trong Bảng 2.1 (37 chất nhóm chính + 2 phức chất chuyển tiếp) | 37 chất nhóm chính khớp SN=(V+M-q)/2; [Fe(CN)6]^4- (Fe^2+, d^6, q=-4); [PtCl4]^2- (Pt^2+, d^8, q=-2) | 37/37 chất nhóm chính khớp SN, m, n; điện tích [Fe(CN)6]^4- = -4, [PtCl4]^2- = -2 | **Yes** |
| CALC-06 | `T-02.4.4 / T-02.7.4 (Câu 8a)` | Số tương tác đẩy ở góc 90° của 1 cặp LP trong khung Lưỡng chóp tam giác (SN=5) | LP ở trục (axial): 3 tương tác 90°; LP ở xích đạo (equatorial): 2 tương tác 90° (2 < 3 => chọn xích đạo) | LP ở trục (axial): 3 tương tác 90°; LP ở xích đạo (equatorial): 2 tương tác 90° (2 < 3) | **Yes** |
| CALC-07 | `T-02.5.1` | Ví dụ 2.1.1: CH4 (A=C) | SN=4, m=4, n=0, AX_4, Tứ diện, 109,5°, 2*SN=8e | SN=4, m=4, n=0, AX_4, Tứ diện, 109,5°, 2*SN=8e | **Yes** |
| CALC-08 | `T-02.5.1` | Ví dụ 2.1.2: NH3 (A=N) | SN=4, m=3, n=1, AX_3E, Tháp chóp tam giác, ≈107,3°, 2*SN=8e | SN=4, m=3, n=1, AX_3E, Tháp chóp tam giác, ≈107,3°, 2*SN=8e | **Yes** |
| CALC-09 | `T-02.5.1` | Ví dụ 2.1.3: H2O (A=O) | SN=4, m=2, n=2, AX_2E_2, Chữ V (Bent), ≈104,5°, 2*SN=8e | SN=4, m=2, n=2, AX_2E_2, Chữ V / Dạng góc, ≈104,5°, 2*SN=8e | **Yes** |
| CALC-10 | `T-02.5.1` | Ví dụ 2.1.4: SF6 (A=S) | SN=6, m=6, n=0, AX_6, Bát diện đều, 90° và 180°, 2*SN=12e | SN=6, m=6, n=0, AX_6, Bát diện đều, 90° và 180°, 2*SN=12e | **Yes** |
| CALC-11 | `T-02.5.1 / T-02.6.1` | Độ giảm góc liên kết trên khung SN=4 (CH4 -> NH3 -> H2O) và quy tắc 2–2,5°/LP | 109,5° > 107,3° > 104,5°; mỗi cặp LP co góc khoảng 2–2,5° | 109,5° > 107,3° (Δ1=2.2°) > 104,5° (Δ2=2.8°, trung bình 2.5°/LP, khớp khoảng 2–2,5°) | **Yes** |
| CALC-12 | `T-02.5.2` | Ví dụ 2.2.1: PCl5 (A=P) | SN=5, m=5, n=0, AX_5, Lưỡng chóp tam giác (120°, 90°, 180°), 10e | SN=5, m=5, n=0, AX_5, Lưỡng chóp tam giác (120°, 90°, 180°), 10e | **Yes** |
| CALC-13 | `T-02.5.2` | Ví dụ 2.2.2: SF4 (A=S) | SN=5, m=4, n=1 (1 LP eq), AX_4E, Cái bập bênh (≈87° < 90°, ≈102° < 120°), 10e | SN=5, m=4, n=1 (1 LP eq), AX_4E, Cái bập bênh (≈87° < 90°, ≈102° < 120°), 10e | **Yes** |
| CALC-14 | `T-02.5.2` | Ví dụ 2.2.3: ClF3 (A=Cl) | SN=5, m=3, n=2 (2 LP eq), AX_3E_2, Dạng chữ T (≈87,5° < 90°), 10e | SN=5, m=3, n=2 (2 LP eq), AX_3E_2, Dạng chữ T (≈87,5° < 90°), 10e | **Yes** |
| CALC-15 | `T-02.5.2` | Ví dụ 2.2.4: XeF2 (A=Xe) | SN=5, m=2, n=3 (3 LP eq), AX_2E_3, Thẳng hàng (180°, μ_pt=0), 10e | SN=5, m=2, n=3 (3 LP eq), AX_2E_3, Thẳng hàng (180°, μ_pt=0), 10e | **Yes** |
| CALC-16 | `T-02.5.3` | Ví dụ 2.3.1: CO3^2- (A=C, 3 O hai hóa trị) | SN=(4+0+2)/2=3, m=3, n=0, AX_3, Tam giác phẳng (120°); E_tổng=24e, E_dư=24-24=0 | SN=3, m=3, n=0, AX_3, Tam giác phẳng; E_tổng=24e, E_dư=0e (n=0, SN=3) | **Yes** |
| CALC-17 | `T-02.5.3` | Ví dụ 2.3.2: NO2^- (A=N, 2 O hai hóa trị) | SN=(5+0+1)/2=3, m=2, n=1, AX_2E, Dạng góc / Chữ V (<120°); E_tổng=18e, E_dư=18-16=2e (n=1) | SN=3, m=2, n=1, AX_2E, Dạng góc / Chữ V; E_tổng=18e, E_dư=2e (n=1, SN=3) | **Yes** |
| CALC-18 | `T-02.5.3` | Ví dụ 2.3.3: SO4^2- (A=S, 4 O hai hóa trị) | SN=(6+0+2)/2=4, m=4, n=0, AX_4, Tứ diện (109,5°); E_tổng=32e, E_dư=32-32=0 | SN=4, m=4, n=0, AX_4, Tứ diện; E_tổng=32e, E_dư=0e (n=0, SN=4) | **Yes** |
| CALC-19 | `T-02.5.3` | Ví dụ 2.3.4: I3^- (A=I, 2 I biên đơn hóa trị) | SN=(7+2+1)/2=5, m=2, n=3, AX_2E_3, Thẳng hàng (180°); E_tổng=22e, E_dư=22-16=6e (n=3) | SN=5, m=2, n=3, AX_2E_3, Thẳng hàng; E_tổng=22e, E_dư=6e (n=3, SN=5) | **Yes** |
| CALC-20 | `T-02.7.4 (Câu 1–4)` | Kiểm tra đáp án trắc nghiệm Câu 1 (B), Câu 2 (C), Câu 3 (B), Câu 4 (D) | Câu 1: B; Câu 2: C; Câu 3: B (CH4, NH3, H2O cùng SN=4); Câu 4: D (XeF2, I3^- có SN=5, AX_2E_3, thẳng 180°) | Câu 1: B; Câu 2: C; Câu 3: B (SN=4,4,4 vs A:2,3,4; C:2,3,4; D:5,5,5); Câu 4: D (SN=5, n=3, AX_2E_3, thẳng 180°) | **Yes** |
| CALC-21 | `T-02.7.4 (BT 5)` | Bài tập 5.a1: SO2 | V=6, M=0, q=0 => SN=3, m=2, n=1, AX_2E, Cặp e: Tam giác phẳng, Phân tử: Dạng góc / Chữ V (<120°, ≈119°), E_tổng=18e | V=6, M=0, q=0 => SN=3, m=2, n=1, AX_2E, Dạng góc / Chữ V, E_tổng=18e | **Yes** |
| CALC-22 | `T-02.7.4 (BT 5)` | Bài tập 5.a2: SO3 | V=6, M=0, q=0 => SN=3, m=3, n=0, AX_3, Tam giác phẳng (120°), E_tổng=24e | V=6, M=0, q=0 => SN=3, m=3, n=0, AX_3, Tam giác phẳng, E_tổng=24e | **Yes** |
| CALC-23 | `T-02.7.4 (BT 5)` | Bài tập 5.b1: NO3^- | V=5, M=0, q=-1 => SN=3, m=3, n=0, AX_3, Tam giác phẳng (120°), E_tổng=24e | V=5, M=0, q=-1 => SN=3, m=3, n=0, AX_3, Tam giác phẳng, E_tổng=24e | **Yes** |
| CALC-24 | `T-02.7.4 (BT 5)` | Bài tập 5.b2: H3O^+ | V=6, M=3, q=+1 => SN=4, m=3, n=1, AX_3E, Cặp e: Tứ diện đều, Phân tử: Tháp chóp tam giác (<109,5°), E_tổng=8e | V=6, M=3, q=1 => SN=4, m=3, n=1, AX_3E, Tháp chóp tam giác, E_tổng=8e | **Yes** |
| CALC-25 | `T-02.7.4 (BT 6)` | Bài tập 6.1: BrF3 | V=7, M=3, q=0 => SN=5, m=3, n=2, AX_3E_2 (2 LP xích đạo), Dạng chữ T (<90°), E_tổng=28e | V=7, M=3, q=0 => SN=5, m=3, n=2, AX_3E_2, Dạng chữ T, E_tổng=28e | **Yes** |
| CALC-26 | `T-02.7.4 (BT 6)` | Bài tập 6.2: BrF5 | V=7, M=5, q=0 => SN=6, m=5, n=1, AX_5E (1 LP bát diện), Tháp chóp vuông (<90°, ≈84,8°), E_tổng=42e | V=7, M=5, q=0 => SN=6, m=5, n=1, AX_5E, Tháp chóp vuông, E_tổng=42e | **Yes** |
| CALC-27 | `T-02.7.4 (BT 6)` | Bài tập 6.3: XeF4 | V=8, M=4, q=0 => SN=6, m=4, n=2, AX_4E_2 (2 LP trans 180°), Vuông phẳng (90°, 180°), E_tổng=36e | V=8, M=4, q=0 => SN=6, m=4, n=2, AX_4E_2, Vuông phẳng, E_tổng=36e | **Yes** |
| CALC-28 | `T-02.7.4 (BT 6)` | Bài tập 6.4: [ICl4]^ - | V=7, M=4, q=-1 => SN=6, m=4, n=2, AX_4E_2 (2 LP trans 180°), Vuông phẳng (90°, 180°), E_tổng=36e | V=7, M=4, q=-1 => SN=6, m=4, n=2, AX_4E_2, Vuông phẳng, E_tổng=36e | **Yes** |
| CALC-29 | `T-02.7.4 (BT 7 & Câu 10a)` | Tổng vector momen lưỡng cực ||∑u_i|| của 9 phân tử (CO2, SO2, BF3, NH3, CCl4, SF4, XeF2, SF6, XeF4) | Không cực (μ_pt=0, 6 chất): CO2, BF3, CCl4, XeF2, SF6, XeF4; Có cực (μ_pt>0, 3 chất): SO2, NH3, SF4 | Không cực (||∑u_i||=0.0000): CO2, BF3, CCl4, XeF2, SF6, XeF4; Có cực (||∑u_i||>0): SO2(1.02), NH3(1.12), SF4(1.15) | **Yes** |
| CALC-30 | `T-02.4.5 / T-02.7.4 (Câu 9)` | Bất đẳng thức góc liên kết theo Quy tắc Bent (H2O vs OF2; NH3 vs NF3) | H-O-H (104,5°) > F-O-F (103,1°); H-N-H (107,3°) > F-N-F (102,5°) | 104,5° > 103,1° (Δ = 1.4° > 0); 107,3° > 102,5° (Δ = 4.8° > 0) | **Yes** |
