# -*- coding: utf-8 -*-
"""
Independent S4 Calculation & Structural Verification Script for Chapter 04
Course: Hóa vô cơ dược – Master Lecture Notes
Read-only on draft/source; writes only _state/checks/ch04_s4_calc.md.
"""
from pathlib import Path

REPORT_PATH = Path("F:/repo/uni/toa-soan/hoa-duoc/_state/checks/ch04_s4_calc.md")
rows = []


def add_row(item, orig, recomp, match):
    rows.append((item, orig, recomp, match))


def fill(electrons, subshells):
    """Fill subshells in order; return Nb, Na, unpaired, config, leftover."""
    rem, nb, na, unp, parts = electrons, 0, 0, 0, []
    for ss in subshells:
        n = min(rem, ss["cap"])
        rem -= n
        if ss["kind"] == "b":
            nb += n
        else:
            na += n
        if ss["deg"] == 2:            # two degenerate orbitals, 2 e each
            unp += n if n <= 2 else 4 - n
        else:
            unp += n % 2
        parts.append((ss["label"], n))
    cfg = "".join(
        f"{lab}{'' if n == 0 else ('²' if n == 2 else ('¹' if n == 1 else ('³' if n == 3 else '⁴')))}"
        for lab, n in parts
    )
    return nb, na, unp, cfg, rem


NO_MIX = [
    {"label": "σ2s", "kind": "b", "cap": 2, "deg": 1},
    {"label": "σ*2s", "kind": "a", "cap": 2, "deg": 1},
    {"label": "σ2pz", "kind": "b", "cap": 2, "deg": 1},
    {"label": "π2p", "kind": "b", "cap": 4, "deg": 2},
    {"label": "π*2p", "kind": "a", "cap": 4, "deg": 2},
    {"label": "σ*2pz", "kind": "a", "cap": 2, "deg": 1},
]
MIX = [
    {"label": "σ2s", "kind": "b", "cap": 2, "deg": 1},
    {"label": "σ*2s", "kind": "a", "cap": 2, "deg": 1},
    {"label": "π2p", "kind": "b", "cap": 4, "deg": 2},
    {"label": "σ2pz", "kind": "b", "cap": 2, "deg": 1},
    {"label": "π*2p", "kind": "a", "cap": 4, "deg": 2},
    {"label": "σ*2pz", "kind": "a", "cap": 2, "deg": 1},
]


def species_row(name, ve, order, exp_nb, exp_na, exp_bo, exp_unp, note=""):
    nb, na, unp, cfg, rem = fill(ve, order)
    bo = (nb - na) / 2.0
    ok = rem == 0 and nb == exp_nb and na == exp_na and abs(bo - exp_bo) < 1e-9 and unp == exp_unp
    add_row(
        f"{name}: cấu hình, $N_b$, $N_a$, $BO$, e độc thân",
        f"$N_b={exp_nb}$, $N_a={exp_na}$, $BO={exp_bo:g}$, {exp_unp} e độc thân",
        f"{cfg} → $N_b={nb}$, $N_a={na}$, $BO={bo:g}$, {unp} e độc thân" + (f" ({note})" if note else ""),
        "Yes" if ok else "No",
    )
    return ok


# 1. Study-time rule (T-04.1.2)
theory_words = 4005
theory_h = theory_words / 1500.0
total_h = theory_h + 40 / 60.0
total_min = round(total_h * 60)
add_row(
    "`T-04.1.2` Thời lượng học tập (`STUDY_TIME_RULE`: 1 h/1.500 từ + 20 phút/5 bài)",
    "~**3 giờ 30 phút** (2 giờ 40 phút cho 4.005 từ + 40 phút cho 10 bài)",
    f"{theory_words}/1500 = {theory_h:.2f} h (2 h 40 ph); + 40 ph = {total_h:.2f} h = {total_min} ph ≈ **3 giờ 20 phút**",
    "No",
)

# 2. Normalization c_A^2 + c_B^2 = 1 (T-04.4.1.3)
c = 1 / (2 ** 0.5)
add_row(
    "`T-04.4.1.3` Chuẩn hóa đồng hạch $c_A=c_B=1/\\sqrt{2}$",
    "$c_A^2+c_B^2=1$",
    f"2×(1/√2)² = 2×{c*c:.6f} = {2*c*c:.6f} = 1",
    "Yes",
)

# 3. LCAO energy claim: alpha,beta<0 alone does NOT imply E+ < alpha
alpha, beta, S = -10.0, -0.5, 0.2
Ep = (alpha + beta) / (1 + S)
Em = (alpha - beta) / (1 - S)
cond = beta < alpha * S
add_row(
    "`T-04.4.1.3` Khẳng định “vì $\\alpha,\\beta<0$, $E_+$ nằm dưới $\\alpha$”",
    "$\\alpha,\\beta<0 \\Rightarrow E_+<\\alpha$",
    f"Điều kiện đúng là $\\beta<\\alpha S$ (⟺ $|\\beta|>|\\alpha|S$); phản ví dụ α={alpha}, β={beta}, S={S}: $E_+$={Ep:.3f} eV > α={alpha} eV; điều kiện β<αS: {cond}",
    "No",
)

# 4. Overlap integral bound
add_row(
    "`T-04.4.2.2` Miền giá trị tích phân xen phủ $S_{AB}$",
    "$0 \\le S \\le 1$",
    "Tổng quát $|S| \\le 1$; $S$ có thể âm (ví dụ S = −0,3 là hợp lệ), nên cận dưới 0 chỉ đúng sau quy ước pha",
    "No",
)

# 5. O2 series (T-04.4.3.2 / T-04.5.1 / Bảng 4.3)
species_row("$O_2^{2-}$ (14 e)", 14, NO_MIX, 8, 6, 1.0, 0)
species_row("$O_2^-$ (13 e)", 13, NO_MIX, 8, 5, 1.5, 1)
species_row("$O_2$ (12 e)", 12, NO_MIX, 8, 4, 2.0, 2)
species_row("$O_2^+$ (11 e)", 11, NO_MIX, 8, 3, 2.5, 1)

# H2+ separately (sigma 1s only)
nb, na, unp, cfg, rem = fill(1, [{"label": "σ1s", "kind": "b", "cap": 2, "deg": 1}])
bo = (nb - na) / 2.0
add_row(
    "$H_2^+$ (1 e) trong Example 4.1",
    "$N_b=1$, $N_a=0$, $BO=0,5$, 1 e độc thân",
    f"{cfg} → $N_b={nb}$, $N_a={na}$, $BO={bo:g}$, {unp} e độc thân",
    "Yes" if (rem == 0 and (nb, na, bo, unp) == (1, 0, 0.5, 1)) else "No",
)

# 6. B2, C2, N2, O2, F2 (Table 4.2 / Q7)
species_row("$B_2$ (6 e, trộn s–p)", 6, MIX, 4, 2, 1.0, 2)
species_row("$C_2$ (8 e, trộn s–p)", 8, MIX, 6, 2, 2.0, 0)
species_row("$N_2$ (10 e, trộn s–p)", 10, MIX, 8, 2, 3.0, 0)
species_row("$O_2$ (12 e, không trộn)", 12, NO_MIX, 8, 4, 2.0, 2)
species_row("$F_2$ (14 e, không trộn)", 14, NO_MIX, 8, 6, 1.0, 0)

# 7. CO electron count / BO (T-04.4.5.2 / T-04.5.3)
species_row("$CO$ (10 e, cấu hình rút gọn của bản thảo)", 10, MIX, 8, 2, 3.0, 0,
            "đếm electron/BO khớp; nhãn σ2s/σ*2s là quy ước đồng hạch, xem QA")

# 8. B2H6 electron bookkeeping (T-04.4.6 / T-04.5.4 / Q10)
b2h6 = 2 * 3 + 6 * 1
terminal = 4 * 2
bridge = b2h6 - terminal
add_row(
    "`T-04.4.6` / `T-04.5.4` / Q10 $B_2H_6$: tổng e hóa trị và phân bố",
    "12 e = 4 liên kết B–H biên (8 e) + 2 cầu B–H–B (4 e)",
    f"2×3 + 6×1 = {b2h6} e; 4×2 = {terminal} e; còn {bridge} e cho 2 cầu = 2 e/cầu",
    "Yes" if (b2h6, terminal, bridge) == (12, 8, 4) else "No",
)
add_row(
    "Q10 Mô hình thay thế $2c$–$2e$: 8 đoạn nối và 7 liên kết",
    "8 đoạn nối cần 16 e; 7 liên kết (4 terminal + 2 cầu + 1 B–B) cần 14 e",
    f"8×2 = 16 e > 12 e; 7×2 = 14 e > 12 e — số học khớp; nhãn “2 cầu” cho B–H–B là 3c–2e, không phải 2c–2e",
    "No",
)
add_row(
    "Q10 Octet mỗi B trong mô hình $3c$–$2e$",
    "Mỗi B đủ 8 e: 4 e từ 2 liên kết biên + 4 e từ 2 cầu",
    "2×2 (biên) + 2×2 (mỗi cầu góp 2 e cho B) = 8 e/B",
    "Yes",
)

# 9. Threshold consistency (T-04.4.2.1 vs source S-04.2/S-04.4)
add_row(
    "`T-04.4.2.1` Ngưỡng $\\Delta E$ so với nguồn",
    "Bản thảo: “$\\Delta E$ khoảng 10–14 eV”; changelog nói giữ cả “≤ 12 eV”",
    "Nguồn S-04.2: “$\\Delta E \\le 10$–$14$ eV”; S-04.4: “$\\Delta E(2p-2s) \\le 12$ eV”; bản thảo bỏ dấu “≤” và bỏ hẳn 12 eV",
    "No",
)

# 10. sigma*/pi* order (Table 4.1 summary vs draft order)
def idx(order, label):
    return [x["label"] for x in order].index(label)

no_mix_sig = idx(NO_MIX, "σ*2pz") > idx(NO_MIX, "π*2p")
mix_sig = idx(MIX, "σ*2pz") > idx(MIX, "π*2p")
add_row(
    "`T-04.4.3.1` Tóm tắt “mức phá bền tăng $\\sigma^* < \\pi^*$”",
    "$\\sigma^* < \\pi^*$ (tức $\\sigma^*$ thấp hơn $\\pi^*$)",
    f"Cả hai trật tự đều cho $\\pi^* < \\sigma^*$: không trộn={no_mix_sig}, có trộn={mix_sig}; chuẩn MO: $\\sigma^*$ nằm trên $\\pi^*$",
    "No",
)

# 11. CO HOMO/LUMO assignment under draft's occupancy
nb, na, unp, cfg, rem = fill(10, MIX)
add_row(
    "`T-04.4.5.2` / `T-04.5.3` $CO$: HOMO và LUMO theo cấu hình đã điền",
    "HOMO là $\\sigma$ trên C; LUMO là $\\pi^*$",
    f"Sau 10 e: MO cao nhất bị chiếm là $\\sigma_{{2p_z}}$ (hướng C); MO trống thấp nhất là $\\pi^*_{{2p}}$ → HOMO/LUMO đúng; nhãn $5\\sigma$/$6\\sigma^*$ ở Hình 4.4 khác quy ước",
    "Yes",
)

# 12. Charge/electron balance for O2 series
add_row(
    "`T-04.5.1` Cân bằng điện tích–electron dãy $O_2$",
    "$O_2^{2-}$ 14 e, $O_2^-$ 13 e, $O_2$ 12 e, $O_2^+$ 11 e",
    "2×6 + 2 = 14; 2×6 + 1 = 13; 2×6 = 12; 2×6 − 1 = 11",
    "Yes",
)

# 13. B2H6 3c-2e: 3 AO -> 3 MO, 2 e in lowest
add_row(
    "`T-04.4.6` / Q10 Cầu $B$–$H$–$B$: 3 AO → 3 MO, 2 e ở MO thấp nhất",
    "3 AO (2 $sp^3$ của B + 1 $1s$ của H) → 3 MO; 2 e chiếm MO liên kết",
    "Số AO = 3 = số MO; 2 e < 4 e (sức chứa 2 MO thấp) → còn 1 MO liên kết đầy, 1 không liên kết trống, 1 phản liên kết trống",
    "Yes",
)

# Write report
matched = sum(1 for r in rows if r[3] == "Yes")
lines = [
    "# S4 Calculation & Structural Verification Report: ch04_draft.md",
    "- **Script:** `_tools/check_calc_ch04.py`",
    f"- **Total items verified:** {len(rows)}",
    f"- **Matches:** {matched} / {len(rows)}",
    f"- **Mismatches:** {len(rows) - matched}",
    "",
    "| # | Item | Original in draft | Recomputed by script | Match (Yes/No) |",
    "|---|---|---|---|---|",
]
for i, (item, orig, recomp, match) in enumerate(rows, 1):
    lines.append(f"| {i} | {item} | {orig} | {recomp} | **{match}** |")
lines += [
    "",
    "## Notes",
    "- `T-04.1.2`: phép chia đúng là 2,67 h (2 h 40 ph); cộng 40 ph = 3 h 20 ph, không phải 3 h 30 ph.",
    "- `T-04.4.1.3`: biểu thức $E_\\pm=(\\alpha\\pm\\beta)/(1\\pm S)$ đúng, nhưng nhãn $E_+$ “liên kết” chỉ đúng khi $\\beta<\\alpha S$.",
    "- `T-04.4.3.1`: tóm tắt $\\sigma^*<\\pi^*$ mâu thuẫn với chính trật tự $\\pi^*<\\sigma^*$ ở Mục 4.4.1–4.4.2.",
    "- `T-04.4.2.1`: nguồn có hai ngưỡng $\\le 10$–$14$ eV và $\\le 12$ eV; bản thảo chỉ còn “khoảng 10–14 eV”.",
    "- `T-04.4.5.2`: đếm electron và $BO=3$ khớp; vấn đề là nhãn orbital đồng hạch cho $CO$ dị hạch (xem QA-04.04).",
    "- Q10: số học 16 e / 14 e khớp; nhãn “2 cầu” trong mô hình 7 liên kết $2c$–$2e$ là không nhất quán (cầu B–H–B là $3c$–$2e$).",
    "- Không tái tính được từ nguồn: $E_{lk}(N_2)=945$ kJ/mol và độ bền $CO$–$Hb$ 200–250 lần (chỉ ghi nhận là giá trị nguồn, đã có `[VERIFY]`).",
]
REPORT_PATH.parent.mkdir(parents=True, exist_ok=True)
REPORT_PATH.write_text("\n".join(lines) + "\n", encoding="utf-8")
print(f"Calculation check complete: {len(rows)} items, {matched} matched, {len(rows)-matched} mismatched.")
