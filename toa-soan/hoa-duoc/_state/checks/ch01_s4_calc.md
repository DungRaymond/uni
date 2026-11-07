# S4 Numerical Recomputation Check: ch01_draft.md
- Date: 2026-11-07
- Script: `_tools/recompute_ch01.py`
- Total numerical items audited: 39
- Match count: 39 / 39 (100% Match)

| No. | Calculation Item | Draft Value (Original) | Recomputed Value | Match (Yes/No) | Dimensional & Physical Notes |
|---|---|---|---|---|---|
| 1 | E_lk(C-C) ordering | 839 > 614 > 348 kJ/mol | 839 > 614 > 348 kJ/mol | Yes | kJ/mol |
| 2 | r(C-C) length ordering | 154 > 134 > 120 pm | 154 > 134 > 120 pm | Yes | pm |
| 3 | r(C-C) conversion 1.54 A | 154 pm | 154 pm | Yes | 1 A = 100 pm |
| 4 | r(C=C) conversion 1.34 A | 134 pm | 134 pm | Yes | 1 A = 100 pm |
| 5 | r(C#C) conversion 1.20 A | 120 pm | 120 pm | Yes | 1 A = 100 pm |
| 6 | Debye to C*m constant | 3.336 x 10^-30 C*m | 3.3356e-30 C*m | Yes | CODATA: 3.33564 x 10^-30 C*m |
| 7 | Delta_chi(C-H) | 0.35 | 0.35 | Yes | Covalent non-polar (< 0.4) |
| 8 | Delta_chi(H-Cl) | 0.96 | 0.96 | Yes | Covalent polar (0.4 <= dchi < 1.7) |
| 9 | Delta_chi(Na-Cl) | 2.23 | 2.23 | Yes | Ionic (>= 1.7) |
| 10 | Delta_chi(C-O) | 0.89 | 0.89 | Yes | Covalent polar (0.4 <= dchi < 1.7) |
| 11 | Delta_chi(C-Cl) (MCQ 3) | 0.61 | 0.61 | Yes | Covalent polar |
| 12 | MCQ 4 Polarity Order | C-H < H-Cl < Na-Cl | 0.35 < 0.96 < 2.23 | Yes | Option B |
| 13 | CO2: FC(C) | 0 | 0 | Yes | Central C atom |
| 14 | CO2: FC(O) | 0 | 0 | Yes | Each terminal O atom |
| 15 | CO2: Sum FC | 0 | 0 | Yes | Matches neutral charge |
| 16 | CO2: Total valence e | 16 | 16 | Yes | 2 lone pairs on each O (8 e) + 2 double bonds (8 e) = 16 e |
| 17 | NO3-: FC(N) | +1 | +1 | Yes | Central N atom |
| 18 | NO3-: FC(O_double) | 0 | 0 | Yes | Double-bonded O |
| 19 | NO3-: FC(O_single) | -1 | -1 | Yes | Each single-bonded O |
| 20 | NO3-: Sum FC | -1 | -1 | Yes | Matches -1 ion charge |
| 21 | NO3-: Total valence e check | 24 | 24 | Yes | N(0 lp)+O_dbl(4)+2*O_sgl(12)+4 bonds(8)=24 |
| 22 | Valence e: NO | 11 | 11 | Yes | Odd electron: free radical, paramagnetic |
| 23 | Valence e: NO2 | 17 | 17 | Yes | Odd electron: free radical, paramagnetic |
| 24 | Valence e: ClO2 | 19 | 19 | Yes | Odd electron: free radical, paramagnetic |
| 25 | CO3(2-): Bond order | 1.33 (1 1/3) | 1.33 | Yes | 4 electron pairs shared over 3 C-O bonds |
| 26 | CO3(2-): Average charge on O | -2/3 | -0.67 | Yes | -2 charge delocalized over 3 O atoms |
| 27 | O3: FC(O_terminal double) | 0 | 0 | Yes | O(1) |
| 28 | O3: FC(O_central) | +1 | +1 | Yes | O(2) |
| 29 | O3: FC(O_terminal single) | -1 | -1 | Yes | O(3) |
| 30 | O3: Sum FC | 0 | 0 | Yes | Matches neutral O3 molecule |
| 31 | O3: Total valence e check | 18 | 18 | Yes | O1(4)+O2(2)+O3(6)+3 bonds(6)=18 |
| 32 | BF4-: FC(B) | -1 | -1 | Yes | Central B atom |
| 33 | BF4-: FC(F) | 0 | 0 | Yes | Each of 4 F atoms |
| 34 | BF4-: Sum FC | -1 | -1 | Yes | Matches -1 ion charge |
| 35 | BF4-: Total valence e check | 32 | 32 | Yes | B(0)+4*F(24)+4 bonds(8)=32 |
| 36 | MCQ 1 Answer Key | C | C | Yes | Verified from bond energy and length ordering |
| 37 | MCQ 2 Answer Key | B | B | Yes | Be has 4 e, B has 6 e in valence shell |
| 38 | MCQ 3 Answer Key | C | C | Yes | Td symmetry leads to mu_pt = 0 |
| 39 | MCQ 4 Answer Key | B | B | Yes | Delta_chi ordering verified |
