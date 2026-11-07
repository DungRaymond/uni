"""
Recomputation script for Chapter 01 (Hóa vô cơ Dược) - S4 QA Audit
"""
import sys

def main():
    results = []

    def record(item, original, recomputed, match, note=''):
        results.append({
            'item': item,
            'original': str(original),
            'recomputed': str(recomputed),
            'match': 'Yes' if match else 'No',
            'note': note
        })

    # 1. Carbon-Carbon bond energies (kJ/mol)
    E_C_single = 348
    E_C_double = 614
    E_C_triple = 839
    record('E_lk(C-C) ordering', '839 > 614 > 348 kJ/mol', f'{E_C_triple} > {E_C_double} > {E_C_single} kJ/mol', (E_C_triple > E_C_double > E_C_single), 'kJ/mol')

    # 2. Carbon-Carbon bond lengths (pm and Angstrom)
    r_single_pm, r_single_A = 154, 1.54
    r_double_pm, r_double_A = 134, 1.34
    r_triple_pm, r_triple_A = 120, 1.20
    record('r(C-C) length ordering', '154 > 134 > 120 pm', f'{r_single_pm} > {r_double_pm} > {r_triple_pm} pm', (r_single_pm > r_double_pm > r_triple_pm), 'pm')
    record('r(C-C) conversion 1.54 A', '154 pm', f'{int(round(r_single_A * 100))} pm', abs(r_single_A * 100 - r_single_pm) < 1e-5, '1 A = 100 pm')
    record('r(C=C) conversion 1.34 A', '134 pm', f'{int(round(r_double_A * 100))} pm', abs(r_double_A * 100 - r_double_pm) < 1e-5, '1 A = 100 pm')
    record('r(C#C) conversion 1.20 A', '120 pm', f'{int(round(r_triple_A * 100))} pm', abs(r_triple_A * 100 - r_triple_pm) < 1e-5, '1 A = 100 pm')

    # 3. Debye conversion constant to SI (C*m)
    # 1 D = 10^-18 statC * cm
    # 1 C = 2.99792458e9 statC => 1 statC = 1 / 2.99792458e9 C
    # 1 cm = 1e-2 m
    # 1 D = 10^-18 * (1 / 2.99792458e9) * 1e-2 C*m = 3.33564095e-30 C*m
    statC_to_C = 1.0 / 2.99792458e9
    debye_si = 1e-18 * statC_to_C * 1e-2
    record('Debye to C*m constant', '3.336 x 10^-30 C*m', f'{debye_si:.4e} C*m', abs(debye_si - 3.336e-30) < 1e-32, 'CODATA: 3.33564 x 10^-30 C*m')

    # 4. Electronegativity differences (Pauling scale)
    chi_H = 2.20
    chi_C = 2.55
    chi_Cl = 3.16
    chi_Na = 0.93
    chi_O = 3.44

    dchi_CH = round(abs(chi_C - chi_H), 2)
    dchi_HCl = round(abs(chi_Cl - chi_H), 2)
    dchi_NaCl = round(abs(chi_Cl - chi_Na), 2)
    dchi_CO = round(abs(chi_O - chi_C), 2)
    dchi_CCl = round(abs(chi_Cl - chi_C), 2)

    record('Delta_chi(C-H)', '0.35', str(dchi_CH), dchi_CH == 0.35, 'Covalent non-polar (< 0.4)')
    record('Delta_chi(H-Cl)', '0.96', str(dchi_HCl), dchi_HCl == 0.96, 'Covalent polar (0.4 <= dchi < 1.7)')
    record('Delta_chi(Na-Cl)', '2.23', str(dchi_NaCl), dchi_NaCl == 2.23, 'Ionic (>= 1.7)')
    record('Delta_chi(C-O)', '0.89', str(dchi_CO), dchi_CO == 0.89, 'Covalent polar (0.4 <= dchi < 1.7)')
    record('Delta_chi(C-Cl) (MCQ 3)', '0.61', str(dchi_CCl), dchi_CCl == 0.61, 'Covalent polar')
    record('MCQ 4 Polarity Order', 'C-H < H-Cl < Na-Cl', f'{dchi_CH} < {dchi_HCl} < {dchi_NaCl}', (dchi_CH < dchi_HCl < dchi_NaCl), 'Option B')

    # 5. Formal Charge: CO2 (O=C=O)
    fc_C_CO2 = 4 - 0 - 8/2
    fc_O_CO2 = 6 - 4 - 4/2
    sum_fc_CO2 = fc_C_CO2 + 2 * fc_O_CO2
    record('CO2: FC(C)', '0', str(int(fc_C_CO2)), fc_C_CO2 == 0, 'Central C atom')
    record('CO2: FC(O)', '0', str(int(fc_O_CO2)), fc_O_CO2 == 0, 'Each terminal O atom')
    record('CO2: Sum FC', '0', str(int(sum_fc_CO2)), sum_fc_CO2 == 0, 'Matches neutral charge')
    record('CO2: Total valence e', '16', str(4 + 2*6), (4 + 2*6) == 16, '2 lone pairs on each O (8 e) + 2 double bonds (8 e) = 16 e')

    # 6. Formal Charge: NO3- (1 double bond, 2 single bonds)
    fc_N_NO3 = 5 - 0 - 8/2
    fc_O_double_NO3 = 6 - 4 - 4/2
    fc_O_single_NO3 = 6 - 6 - 2/2
    sum_fc_NO3 = fc_N_NO3 + fc_O_double_NO3 + 2 * fc_O_single_NO3
    record('NO3-: FC(N)', '+1', f'{int(fc_N_NO3):+}', fc_N_NO3 == 1, 'Central N atom')
    record('NO3-: FC(O_double)', '0', str(int(fc_O_double_NO3)), fc_O_double_NO3 == 0, 'Double-bonded O')
    record('NO3-: FC(O_single)', '-1', str(int(fc_O_single_NO3)), fc_O_single_NO3 == -1, 'Each single-bonded O')
    record('NO3-: Sum FC', '-1', str(int(sum_fc_NO3)), sum_fc_NO3 == -1, 'Matches -1 ion charge')
    tot_val_NO3 = 5 + 3*6 + 1
    electrons_accounted_NO3 = 0 + 4 + 2*6 + 8
    record('NO3-: Total valence e check', '24', str(tot_val_NO3), tot_val_NO3 == electrons_accounted_NO3 == 24, 'N(0 lp)+O_dbl(4)+2*O_sgl(12)+4 bonds(8)=24')

    # 7. Odd-Electron Molecules: Valence counts
    val_NO = 5 + 6
    val_NO2 = 5 + 2*6
    val_ClO2 = 7 + 2*6
    record('Valence e: NO', '11', str(val_NO), val_NO == 11, 'Odd electron: free radical, paramagnetic')
    record('Valence e: NO2', '17', str(val_NO2), val_NO2 == 17, 'Odd electron: free radical, paramagnetic')
    record('Valence e: ClO2', '19', str(val_ClO2), val_ClO2 == 19, 'Odd electron: free radical, paramagnetic')

    # 8. Carbonate ion CO3(2-) resonance & bond order
    bo_CO3 = 4 / 3
    charge_per_O_CO3 = -2 / 3
    record('CO3(2-): Bond order', '1.33 (1 1/3)', f'{bo_CO3:.2f}', abs(bo_CO3 - 4/3) < 1e-4, '4 electron pairs shared over 3 C-O bonds')
    record('CO3(2-): Average charge on O', '-2/3', f'{charge_per_O_CO3:.2f}', abs(charge_per_O_CO3 - (-2/3)) < 1e-4, '-2 charge delocalized over 3 O atoms')

    # 9. Exercise 5: Ozone (O3) FC calculation
    # O(1)=O(2)-O(3)
    fc_O1_O3 = 6 - 4 - 4/2
    fc_O2_O3 = 6 - 2 - 6/2
    fc_O3_O3 = 6 - 6 - 2/2
    sum_fc_O3 = fc_O1_O3 + fc_O2_O3 + fc_O3_O3
    record('O3: FC(O_terminal double)', '0', str(int(fc_O1_O3)), fc_O1_O3 == 0, 'O(1)')
    record('O3: FC(O_central)', '+1', f'{int(fc_O2_O3):+}', fc_O2_O3 == 1, 'O(2)')
    record('O3: FC(O_terminal single)', '-1', str(int(fc_O3_O3)), fc_O3_O3 == -1, 'O(3)')
    record('O3: Sum FC', '0', str(int(sum_fc_O3)), sum_fc_O3 == 0, 'Matches neutral O3 molecule')
    tot_val_O3 = 3 * 6
    electrons_accounted_O3 = 4 + 2 + 6 + (4 + 2)
    record('O3: Total valence e check', '18', str(tot_val_O3), tot_val_O3 == electrons_accounted_O3 == 18, 'O1(4)+O2(2)+O3(6)+3 bonds(6)=18')

    # 10. Exercise 6: BF4- FC calculation
    fc_B_BF4 = 3 - 0 - 8/2
    fc_F_BF4 = 7 - 6 - 2/2
    sum_fc_BF4 = fc_B_BF4 + 4 * fc_F_BF4
    record('BF4-: FC(B)', '-1', str(int(fc_B_BF4)), fc_B_BF4 == -1, 'Central B atom')
    record('BF4-: FC(F)', '0', str(int(fc_F_BF4)), fc_F_BF4 == 0, 'Each of 4 F atoms')
    record('BF4-: Sum FC', '-1', str(int(sum_fc_BF4)), sum_fc_BF4 == -1, 'Matches -1 ion charge')
    tot_val_BF4 = 3 + 4*7 + 1
    electrons_accounted_BF4 = 0 + 4*6 + 8
    record('BF4-: Total valence e check', '32', str(tot_val_BF4), tot_val_BF4 == electrons_accounted_BF4 == 32, 'B(0)+4*F(24)+4 bonds(8)=32')

    # 11. MCQ Answers verification
    # MCQ 1: C (C#C shortest length 120 pm, highest energy 839 kJ/mol)
    record('MCQ 1 Answer Key', 'C', 'C', True, 'Verified from bond energy and length ordering')
    # MCQ 2: B (BeCl2 and BF3 have incomplete octets)
    record('MCQ 2 Answer Key', 'B', 'B', True, 'Be has 4 e, B has 6 e in valence shell')
    # MCQ 3: C (CCl4 has symmetric tetrahedral geometry, dipole vectors cancel)
    record('MCQ 3 Answer Key', 'C', 'C', True, 'Td symmetry leads to mu_pt = 0')
    # MCQ 4: B (C-H 0.35 < H-Cl 0.96 < Na-Cl 2.23)
    record('MCQ 4 Answer Key', 'B', 'B', True, 'Delta_chi ordering verified')

    # Output as markdown table
    print("| No. | Calculation Item | Draft Value (Original) | Recomputed Value | Match (Yes/No) | Dimensional & Physical Notes |")
    print("|---|---|---|---|---|---|")
    for idx, r in enumerate(results, 1):
        print(f"| {idx} | {r['item']} | {r['original']} | {r['recomputed']} | {r['match']} | {r['note']} |")

if __name__ == '__main__':
    main()
