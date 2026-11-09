# ch04_matrix.md — S2 Mapping & Restructuring Plan · Chương 04

**Môn:** Hóa vô cơ dược · **Stage:** S2 Mapping · **Ngày:** 2026-11-07  
**Nguồn đầu vào:** `00_source_original/ch04_doc-hvc-4.html` (D-04), `01_audit/ch04_audit.md`, `_state/carryover_latest.md`, `03_chapters/ch03_draft.md` (phần cầu nối)  
**Khung cấu trúc:** Template v2 (`T1`–`T8`, `DISCIPLINE_TYPE: STEM-quantitative` theo `00_config.md`)  
**Quy tắc:** Ánh xạ 100% `S-04.1`–`S-04.9` sang `T-04.x.y` không làm mất nội dung; KHÔNG viết bài giảng chi tiết; dừng ở GATE A.

---

## A. Content Mapping Matrix

| Row ID | S-ID(s) | Summary (≤15 words) | Target T-ID and Name | Primary Action | Secondary Actions | Provenance After Transformation | Notes and Risks |
|---|---|---|---|---|---|---|---|
| M-04.01 | — | Tên chương, giới thiệu khái quát và phạm vi thuyết MO – LCAO | `T-04.1.1` Chương 4: Thuyết Orbital Phân tử (MO) & Phân tích Năng lượng LCAO | ADD | — | `[ADDED: structural frame]` | Nguồn `D-04` thiếu T1 (`I-04.01`, `I-04.15`); dựng theo Template v2. |
| M-04.02 | — | Kiến thức tiên quyết Chương 1–3 và thời lượng học tập dự kiến | `T-04.1.2` Phạm vi, Kiến thức Tiên quyết & Thời lượng Học tập | ADD | — | `[ADDED: study time estimate]` | Nối `T-01.4.1` (bậc liên kết), `T-02.4.2` ($SN$), `T-03.4.6` (hạn chế VB); áp dụng `STUDY_TIME_RULE` (~2 giờ 40 phút). |
| M-04.03 | — | Bốn chuẩn đầu ra kiến thức, kỹ năng, vận dụng, đánh giá mô hình | `T-04.2.1` Mục tiêu Học tập (Learning Objectives `LO-1`..`LO-4`) | ADD | — | `[ADDED: learning objectives]` | Suy ra từ `S-04.1`–`S-04.9`; không thêm chuẩn ngoài phạm vi nguồn. |
| M-04.04 | S-04.6 | Từ thất bại VB ($O_2$, $B_2H_6$, quang phổ) đến thuyết MO | `T-04.3.1` Đặt vấn đề: Từ Giới hạn của Thuyết VB đến Thuyết Orbital Phân tử | MERGE | MOVE, EXPAND | S-04.6 `[SRC]` + `[ADDED: pedagogical bridge from Ch03]` | Dùng đúng ý nghĩa nguồn; liên kết ngược `T-03.4.6`; không lặp lại toàn bộ Chương 03. |
| M-04.05 | S-04.1 | Quan điểm hạt nhân đa tâm; hàm sóng MO từ tổ hợp tuyến tính AO | `T-04.4.1` Bản chất Thuyết MO & Phương pháp LCAO | KEEP | EXPAND, REWRITE | S-04.1 `[SRC]` + `[ADDED: normalization condition and coefficient meaning]` | Bổ sung $c_A^2+c_B^2=1$ và ghi chú $c_A \neq c_B$ cho dị hạch (`I-04.21`); giữ nguyên công thức nguồn. |
| M-04.06 | S-04.2 | Ba điều kiện năng lượng, xen phủ, đối xứng để tổ hợp AO | `T-04.4.2` Ba Điều kiện Tiên quyết để Tổ hợp AO thành MO Hiệu quả | KEEP | EXPAND, REWRITE | S-04.2 `[SRC]` + `[ADDED: overlap integral meaning]` + `[VERIFY: delta E threshold]` | Định nghĩa $d\tau$, cận tích phân, miền $0 \le S \le 1$ (`I-04.08`); thống nhất ngưỡng $\Delta E$ (`I-04.07`). |
| M-04.07 | S-04.3 | Phân loại MO; công thức bậc liên kết; tiêu chí thuận từ – nghịch từ | `T-04.4.3` Phân loại MO, Bậc liên kết & Từ tính | KEEP | SPLIT, EXPAND, REWRITE | S-04.3 `[SRC]` + `[ADDED: explanation of fractional bond order]` + `[VERIFY: BO values]` | Tách 3 tiểu mục; giải thích vì sao $BO$ bán nguyên (carry-over b, `I-04.19`); sửa mẹo nhớ sai (`I-04.06`). |
| M-04.08 | S-04.4 | Hai trật tự mức MO (có/không trộn $2s-2p$); cấu hình $O_2$, $N_2$ | `T-04.4.4` Giản đồ Năng lượng MO Phân tử Đồng hạch Chu kỳ 2 ($A_2$) | KEEP | SPLIT, EXPAND, REWRITE | S-04.4 `[SRC]` + `[ADDED: B2, C2, F2 standard configurations]` + `[VERIFY: MO ordering and s-p mixing]` | Bổ sung $F_2$, $B_2$, $C_2$ còn thiếu (`I-04.18`); giải thích trộn $s$–$p$ chính xác hơn (`I-04.27`); trả lời carry-over (a). |
| M-04.09 | S-04.5 | Giản đồ MO dị hạch $CO$; HOMO trên C; $\sigma$-donor/$\pi$-backbonding | `T-04.4.5` Phân tử Dị hạch, Orbital Biên HOMO–LUMO & Carbon Monoxide | KEEP | EXPAND, REWRITE | S-04.5 `[SRC]` + `[ADDED: heteronuclear MO principle and LUMO definition]` + `[VERIFY: CO-Hb affinity]` | Định nghĩa LUMO (`I-04.11`); nêu nguyên tắc dị hạch (`I-04.28`); giữ nguyên cảnh báo độc tính của nguồn, gắn `[VERIFY]` (`I-04.25`). |
| M-04.10 | — | Liên kết ba tâm – hai electron trong Diborane ($B_2H_6$) | `T-04.4.6` Liên kết Ba tâm – Hai electron ($3c\text{–}2e$) trong Diborane ($B_2H_6$) | ADD | — | `[ADDED: standard MO treatment of 3c–2e bridge bond]` + `[VERIFY: B2H6 electron count]` | **Carry-over (c)**: `D-04` không có nội dung (`G.2`, `V-04.09`); bổ sung kiến thức giáo trình chuẩn, không thêm dữ liệu nghiên cứu. |
| M-04.11 | S-04.4, S-04.8 | Dãy $O_2^{2-}, O_2^-, O_2, O_2^+$: đếm electron, $BO$, xu hướng độ bền | `T-04.5.1` Ví dụ 4.1: Bậc Liên kết của Họ loài Oxygen và Quy luật Thêm Electron Phản liên kết | MERGE | MOVE, EXPAND | S-04.4, S-04.8 `[SRC]` + `[ADDED: step-by-step electron bookkeeping and Table 4.3]` | **Carry-over (b)**; trình bày chuẩn `Given | Find | Approach | Solution | Check`; bảng 4.3 tổng hợp. |
| M-04.12 | S-04.4, S-04.7 | So sánh $N_2$ (nghịch từ, $BO=3$) và $O_2$ (thuận từ, $BO=2$) | `T-04.5.2` Ví dụ 4.2: Giản đồ MO, Bậc liên kết và Từ tính của $N_2$ và $O_2$ | MERGE | MOVE, EXPAND | S-04.4, S-04.7 `[SRC]` + `[ADDED: comparative table and E_lk interpretation]` + `[VERIFY: N2 bond energy]` | **Carry-over (a)**; khử trùng lặp `DUP-04.1`; kiểm tra quy tắc Hund từng bước. |
| M-04.13 | S-04.5 | Phân tích $CO$: HOMO trên C, $\pi^*$ LUMO, liên kết với $Fe^{2+}$ hemoglobin | `T-04.5.3` Ví dụ 4.3: $CO$ – Phối tử $\sigma$-Donor/$\pi$-Acceptor và Độc tính Hemoglobin | MOVE | EXPAND, REWRITE | S-04.5 `[SRC]` + `[ADDED: orbital interaction diagram description]` + `[VERIFY: CO-Hb affinity 200-250x]` | Tuân thủ `DOMAIN_RULES`: chỉ giữ thông tin có trong nguồn; không thêm liều, chỉ định, PK. |
| M-04.14 | — | Đếm 12 electron hóa trị $B_2H_6$; mô tả hai cầu $B\text{–}H\text{–}B$ | `T-04.5.4` Ví dụ 4.4: Đếm Electron và Mô hình Liên kết $3c\text{–}2e$ trong $B_2H_6$ | ADD | — | `[ADDED: worked example on 3c–2e bonding]` + `[VERIFY: B2H6 12 valence electrons]` | **Carry-over (c)**; ví dụ `[ADDED]` nhưng chỉ dùng số liệu hóa học chuẩn, không phải dữ liệu nghiên cứu mới. |
| M-04.15 | — | Quy trình 4 bước lập giản đồ MO và sơ đồ thuật toán Mermaid | `T-04.5.5` Quy trình 4 Bước Lập Giản đồ MO & Sơ đồ Thuật toán (Mermaid) | ADD | — | `[ADDED: Mermaid flowchart]` | Chuyển hóa quy tắc của `S-04.2`–`S-04.4` thành `flowchart TD`; không thêm dữ kiện mới. |
| M-04.16 | — | Khung giữ chỗ giản đồ MO $O_2/F_2$, $B_2/C_2/N_2$, $CO$, xen phủ AO, $3c\text{–}2e$ | `T-04.5.6` Minh họa Trực quan Giản đồ MO & Sơ đồ Xen phủ Orbital | ADD | — | `[ADDED: figure placeholders]` + `[FIGURE]` | Nguồn có 0 hình (`I-04.13`); đặt placeholder theo `FIGURE_POLICY`, không mô tả như đã vẽ. |
| M-04.17 | S-04.6, S-04.9 | Tóm tắt nguyên lý cốt lõi, công thức BO và mẹo nhận diện | `T-04.6.1` Tóm tắt Nội dung Trọng tâm & Quy tắc Ghi nhớ | MERGE | MOVE, REWRITE | S-04.6, S-04.9 `[SRC]` + `[ADDED: corrected mnemonic]` + `[VERIFY: mnemonic BO le]` | Sửa vế "BO lẻ → thuận từ" (`I-04.06`, `I-04.17`); giữ nguyên ý "còn electron độc thân → thuận từ"; ghi changelog (R6). |
| M-04.18 | — | Bảng tổng hợp phân loại MO, $BO$, từ tính và liên hệ khái niệm | `T-04.6.2` Bảng Tổng hợp Công thức, Quy tắc và Mối quan hệ Khái niệm | ADD | — | `[ADDED: summary concept tables]` | Hệ thống hóa liên kết: Lewis (Ch1) → VSEPR (Ch2) → VB/Lai hóa (Ch3) → MO (Ch4). |
| M-04.19 | — | Câu hỏi nhận biết – thông hiểu về LCAO, điều kiện, phân loại MO | `T-04.7.1` Câu hỏi Lý thuyết: Nhận biết & Thông hiểu | ADD | — | `[ADDED: knowledge and comprehension questions]` | Phủ `LO-1`; 4 câu (trắc nghiệm + tự luận ngắn). |
| M-04.20 | — | Bài tập lập giản đồ MO, điền electron, tính $BO$, xác định từ tính | `T-04.7.2` Bài tập Áp dụng: Giản đồ MO, Bậc liên kết & Từ tính | ADD | — | `[ADDED: application exercises]` | Phủ `LO-2`, `LO-3`; 3 bài, có kiểm tra tổng electron hóa trị. |
| M-04.21 | — | Câu hỏi phân tích: $O_2$ thuận từ, bậc phân số, $CO$–hemoglobin, $B_2H_6$ | `T-04.7.3` Câu hỏi Phân tích & Vận dụng Nâng cao trong Hóa Vô cơ Dược | ADD | — | `[ADDED: analytical and advanced questions]` | Phủ `LO-3`, `LO-4`; 3 câu; tuân thủ `DOMAIN_RULES` khi nhắc $CO$. |
| M-04.22 | — | Đáp án và hướng dẫn giải từng bước cho 10 câu/bài tập | `T-04.7.4` Đáp án & Hướng dẫn Giải Chi tiết (Answer Key) | ADD | — | `[ADDED: step-by-step answer key]` | Mỗi đáp án ghi `LO` và cấp độ; phép tính $BO$ trình bày đủ bước để S4 tái tính. |
| M-04.23 | — | Danh mục tài liệu tham khảo và ghi chú truy vết theo R4 | `T-04.8.1` Tài liệu Tham khảo & Đọc thêm | ADD | — | `[ADDED: reference section structure]` + `[VERIFY: textbook references needed]` | Nguồn `D-04` có 0 trích dẫn (`I-04.14`, `V-04.08`); chờ người dùng cung cấp giáo trình chuẩn. |

---

## B. Coverage Check

### 1. Kiểm tra độ phủ S-ID từ Audit Register (Script `check_coverage.py`)
- **Danh sách S-ID trong `01_audit/ch04_audit.md` (tổng cộng = 9 S-ID):** `S-04.1`, `S-04.2`, `S-04.3`, `S-04.4`, `S-04.5`, `S-04.6`, `S-04.7`, `S-04.8`, `S-04.9`.
- **Ánh xạ từng S-ID trong Ma trận Mapping (Bảng A):**
  - `S-04.1` → `M-04.05` (`T-04.4.1`)
  - `S-04.2` → `M-04.06` (`T-04.4.2`)
  - `S-04.3` → `M-04.07` (`T-04.4.3`)
  - `S-04.4` → `M-04.08` (`T-04.4.4`), `M-04.11` (`T-04.5.1`), `M-04.12` (`T-04.5.2`)
  - `S-04.5` → `M-04.09` (`T-04.4.5`), `M-04.13` (`T-04.5.3`)
  - `S-04.6` → `M-04.04` (`T-04.3.1`), `M-04.17` (`T-04.6.1`)
  - `S-04.7` → `M-04.12` (`T-04.5.2`)
  - `S-04.8` → `M-04.11` (`T-04.5.1`)
  - `S-04.9` → `M-04.17` (`T-04.6.1`)
- **Số S-ID chưa được ánh xạ (Unmapped / Missing S-IDs): 0** (độ phủ **100,0%**).
- **Báo cáo kiểm tra cơ học:** `_state/checks/ch04_s2_coverage.md`.

### 2. Thống kê hành động chính (Primary Action Counts)

| Primary Action | Số dòng ma trận | Tỷ lệ (%) | Danh sách Row ID |
|---|---|---|---|
| **ADD** (khung sư phạm, bảng, hình, ví dụ/bài tập mới) | 13 | 56,5% | M-04.01, M-04.02, M-04.03, M-04.10, M-04.14, M-04.15, M-04.16, M-04.18, M-04.19, M-04.20, M-04.21, M-04.22, M-04.23 |
| **KEEP** (giữ nội dung cốt lõi tại đúng phân khu) | 5 | 21,7% | M-04.05, M-04.06, M-04.07, M-04.08, M-04.09 |
| **MERGE** (hợp nhất nội dung trùng lặp/phân tán) | 4 | 17,4% | M-04.04, M-04.11, M-04.12, M-04.17 |
| **MOVE** (di chuyển về đúng phân khu Template v2) | 1 | 4,3% | M-04.13 |
| **SPLIT** (tách mục lớn — chỉ là secondary action) | 0 | 0,0% | Dùng làm secondary cho M-04.07, M-04.08 |
| **REMOVE** (đề xuất loại bỏ) | 0 | 0,0% | Không có dòng REMOVE (bảo toàn 100% dữ liệu nguồn) |
| **Tổng cộng** | **23 dòng** | **100,0%** | — |

### 3. Ước tính tỷ lệ nội dung mới và thống kê thẻ (Script `check_tags.py`)
- **Dung lượng nguồn gốc (`D-04`):** 1.443 từ (bảo toàn toàn bộ trong `T3`, `T4`, `T5`, `T6`).
- **Dung lượng dự kiến bản thảo hoàn chỉnh (`ch04_draft.md`):** ~4.000 – 4.500 từ.
  - Nội dung lý thuyết, bảng hệ thống hóa và ví dụ phát triển trực tiếp từ nguồn (`T3` + `T4` + `T5.1`–`T5.3` + `T6.1`): ~2.100 – 2.400 từ.
  - Khung sư phạm, bảng tổng hợp mới, sơ đồ Mermaid, placeholder hình và bộ 10 câu hỏi/bài tập kèm đáp án (`T1`–`T2`, `T4.6`, `T5.4`–`T5.6`, `T6.2`, `T7`, `T8`): ~1.900 – 2.100 từ (khoảng 47%–48% tổng dung lượng).
- **Kết quả chạy `check_tags.py` trên `02_mapping/ch04_matrix.md`** (báo cáo `_state/checks/ch04_s2_tags.md`): `ADDED = 32`, `VERIFY = 28`, `CONFLICT = 0`, `FIGURE = 3`. Đây là số đếm thô trên toàn file ma trận (gồm cả các thẻ xuất hiện trong phần diễn giải, không chỉ trong Bảng A).

---

## C. Chapter Restructuring Plan

### C.1 Đề cương chi tiết đến cấp Tiểu mục / Chủ đề (Subsection / Topic Outline)

```text
Chương 4: Thuyết Orbital Phân tử (Molecular Orbital – MO) & Phân tích Năng lượng LCAO
├── 1. Tổng quan chương (Chapter Overview) {T-04.1}
│   ├── 1.1 Tên chương, giới thiệu khái quát & phạm vi nội dung {T-04.1.1} (M-04.01)
│   └── 1.2 Kiến thức tiên quyết & Thời lượng học tập dự kiến {T-04.1.2} (M-04.02)
├── 2. Mục tiêu học tập (Learning Objectives) {T-04.2}
│   └── 2.1 Chuẩn đầu ra Kiến thức, Kỹ năng, Vận dụng và Đánh giá mô hình (LO-1..LO-4) {T-04.2.1} (M-04.03)
├── 3. Đặt vấn đề (Introduction) {T-04.3}
│   └── 3.1 Từ giới hạn của Thuyết VB đến Thuyết Orbital Phân tử {T-04.3.1} [SRC: S-04.6] (M-04.04)
├── 4. Nội dung bài giảng chính (Main Content) {T-04.4}
│   ├── 4.1 Bản chất Thuyết MO & Phương pháp LCAO {T-04.4.1} [SRC: S-04.1] (M-04.05)
│   │   ├── 4.1.1 Quan điểm hạt nhân đa tâm và khái niệm Orbital Phân tử
│   │   ├── 4.1.2 Tổ hợp tuyến tính AO: MO liên kết (Ψ) và MO phản liên kết (Ψ*)
│   │   └── 4.1.3 Điều kiện chuẩn hóa c_A² + c_B² = 1 và ý nghĩa hệ số tổ hợp
│   ├── 4.2 Ba điều kiện tiên quyết để tổ hợp AO thành MO hiệu quả {T-04.4.2} [SRC: S-04.2] (M-04.06)
│   │   ├── 4.2.1 Điều kiện năng lượng: các AO phải có mức năng lượng xấp xỉ
│   │   ├── 4.2.2 Điều kiện xen phủ: tích phân xen phủ S_AB > 0 đáng kể
│   │   └── 4.2.3 Điều kiện đối xứng và quy ước trục liên kết Oz
│   ├── 4.3 Phân loại MO, Bậc liên kết & Từ tính {T-04.4.3} [SRC: S-04.3] (M-04.07)
│   │   ├── 4.3.1 MO liên kết (σ, π), MO phản liên kết (σ*, π*) và MO không liên kết (n)
│   │   ├── 4.3.2 Công thức bậc liên kết BO = (N_b − N_a)/2 và bản chất bậc liên kết phân số
│   │   └── 4.3.3 Thuận từ (Paramagnetic) và Nghịch từ (Diamagnetic)
│   ├── 4.4 Giản đồ năng lượng MO phân tử đồng hạch chu kỳ 2 (A₂) {T-04.4.4} [SRC: S-04.4] (M-04.08)
│   │   ├── 4.4.1 Trường hợp không có tương tác 2s–2p: trật tự chuẩn của O₂, F₂
│   │   ├── 4.4.2 Trường hợp có tương tác 2s–2p: nghịch đảo năng lượng ở B₂, C₂, N₂
│   │   ├── 4.4.3 Giải quyết nghịch lý O₂: cấu hình electron, 2 electron độc thân trên π*, tính thuận từ
│   │   └── 4.4.4 Bảng tổng hợp phân tử đồng hạch chu kỳ 2 (Bảng 4.2)
│   ├── 4.5 Phân tử dị hạch, Orbital biên HOMO–LUMO & Carbon Monoxide {T-04.4.5} [SRC: S-04.5] (M-04.09)
│   │   ├── 4.5.1 Nguyên tắc giản đồ MO dị hạch: AO lệch năng lượng và hệ số tổ hợp không bằng nhau
│   │   ├── 4.5.2 CO: HOMO tập trung trên C, LUMO là π*, cơ chế σ-donor và π-backbonding
│   │   └── 4.5.3 Hệ quả dược học: CO gắn mạnh hemoglobin, cản vận chuyển oxy
│   └── 4.6 Liên kết ba tâm – hai electron (3c–2e) trong Diborane (B₂H₆) {T-04.4.6} (M-04.10)
├── 5. Ví dụ minh họa & Quy trình thực hành (Examples & Illustrations) {T-04.5}
│   ├── 5.1 Ví dụ 4.1: Bậc liên kết của họ loài oxygen (O₂²⁻, O₂⁻, O₂, O₂⁺) {T-04.5.1} [SRC: S-04.4, S-04.8] (M-04.11)
│   ├── 5.2 Ví dụ 4.2: Giản đồ MO, bậc liên kết và từ tính của N₂ và O₂ {T-04.5.2} [SRC: S-04.4, S-04.7] (M-04.12)
│   ├── 5.3 Ví dụ 4.3: CO – phối tử σ-donor/π-acceptor và độc tính hemoglobin {T-04.5.3} [SRC: S-04.5] (M-04.13)
│   ├── 5.4 Ví dụ 4.4: Đếm electron và mô hình liên kết 3c–2e trong B₂H₆ {T-04.5.4} (M-04.14)
│   ├── 5.5 Quy trình chuẩn 4 bước lập giản đồ MO & sơ đồ thuật toán Mermaid {T-04.5.5} (M-04.15)
│   └── 5.6 Minh họa trực quan giản đồ MO và xen phủ orbital (Placeholders) {T-04.5.6} (M-04.16)
├── 6. Tóm tắt chương (Chapter Summary) {T-04.6}
│   ├── 6.1 Tóm tắt nội dung trọng tâm & quy tắc ghi nhớ {T-04.6.1} [SRC: S-04.6, S-04.9] (M-04.17)
│   └── 6.2 Bảng tổng hợp công thức, quy tắc và mối quan hệ khái niệm {T-04.6.2} (M-04.18)
├── 7. Đánh giá & Bài tập tự lượng giá (Review & Assessment) {T-04.7}
│   ├── 7.1 Câu hỏi lý thuyết: Nhận biết & Thông hiểu (LO-1) {T-04.7.1} (M-04.19)
│   ├── 7.2 Bài tập áp dụng: Giản đồ MO, bậc liên kết & từ tính (LO-2, LO-3) {T-04.7.2} (M-04.20)
│   ├── 7.3 Câu hỏi phân tích & vận dụng nâng cao (LO-3, LO-4) {T-04.7.3} (M-04.21)
│   └── 7.4 Đáp án & Hướng dẫn giải chi tiết (Answer Key) {T-04.7.4} (M-04.22)
└── 8. Tài liệu tham khảo (References) {T-04.8}
    └── 8.1 Danh mục tài liệu tham khảo & Đọc thêm {T-04.8.1} (M-04.23)
```

### C.2 Kế hoạch bổ sung nội dung mới và lý do sư phạm
1. **Khung sư phạm đại học (`T-04.1`–`T-04.3`):** Bổ sung tên chương, phạm vi, kiến thức tiên quyết (bậc liên kết $T-01.4.1$, $SN = m+n$ của VSEPR $T-02.4.2$, hạn chế VB $T-03.4.6$), thời lượng học tập và 4 chuẩn đầu ra `LO-1`..`LO-4`. Nguồn `D-04` chỉ là đoạn trích nội dung (`I-04.15`).
2. **Giải quyết 3 câu hỏi carry-over từ Chương 03:**
   - **(a) $O_2$:** `T-04.4.4.3` trình bày cấu hình MO và giải thích 2 electron độc thân trên $\pi^*_{2p_x}, \pi^*_{2p_y}$; `T-04.5.2` so sánh trực tiếp $N_2$ (nghịch từ) với $O_2$ (thuận từ).
   - **(b) Bậc liên kết phân số:** `T-04.4.3.2` giải thích bản chất (electron độc xứ/độ chiếm orbital lẻ) và `T-04.5.1` minh họa bằng dãy $O_2^{2-} \to O_2^+$.
   - **(c) $3c\text{–}2e$ trong $B_2H_6$:** `T-04.4.6` (lý thuyết) và `T-04.5.4` (ví dụ đếm 12 electron hóa trị), gắn `[ADDED]` vì `D-04` không có nội dung (`G.2`).
3. **Ba bảng hệ thống hóa:** `Bảng 4.1` so sánh ba loại MO (`T-04.4.3`), `Bảng 4.2` tổng hợp phân tử đồng hạch chu kỳ 2 (`T-04.4.4`), `Bảng 4.3` dãy oxygen (`T-04.5.1`). Nguồn có 0 bảng (`I-04.13`); bảng giúp so sánh cấu hình – $BO$ – từ tính trong một cái nhìn.
4. **Ví dụ giải mẫu có cấu trúc `Given | Find | Approach | Solution | Check`:** Nâng hai hộp ví dụ chưa đánh số của nguồn (`S-04.7`, `S-04.8`) thành Ví dụ 4.1–4.2; thêm Ví dụ 4.3 ($CO$) và 4.4 ($B_2H_6$) để mỗi khái niệm trừu tượng đều có bài giải cụ thể.
5. **Sơ đồ thuật toán Mermaid (`T-04.5.5`), placeholder `[FIGURE]` (`T-04.5.6`) và bộ 10 câu hỏi/bài tập (`T-04.7`):** Khắc phục việc nguồn thiếu hình minh họa và hoàn toàn không có hoạt động đánh giá. Cụ thể, đặt 5 placeholder `[FIGURE]` được đánh số 4.1–4.5 cho: (4.1) giản đồ MO $O_2/F_2$; (4.2) giản đồ MO $B_2/C_2/N_2$ có trộn $s$–$p$; (4.3) giản đồ MO dị hạch $CO$; (4.4) sơ đồ xen phủ tạo MO liên kết/phản liên kết; (4.5) sơ đồ liên kết $3c\text{–}2e$ trong $B_2H_6$ — tất cả theo `FIGURE_POLICY`, không mô tả như đã vẽ.

### C.3 Rủi ro về độ sâu kiến thức (Depth Risks) & Biện pháp kiểm soát
- **Rủi ro 1 (Mẹo nhớ mâu thuẫn — `I-04.06`, `I-04.17`):** Nguồn viết "BO lẻ hoặc còn e lẻ trên $\pi^*$ → thuận từ". *Biện pháp:* Giữ tiêu chí đúng "có electron độc thân → thuận từ"; bỏ vế "BO lẻ" vì $N_2$, $CO$ có $BO=3$ nhưng nghịch từ; gắn `[VERIFY]`, ghi thay đổi vào changelog (R6).
- **Rủi ro 2 (Ngưỡng năng lượng không thống nhất — `I-04.07`):** `S-04.2` ghi $\Delta E \le 10-14\text{ eV}$, `S-04.4` ghi $\le 12\text{ eV}$. *Biện pháp:* Trình bày một ngưỡng chuẩn kèm chú thích "giá trị tham khảo, phụ thuộc mô hình" và `[VERIFY]`; không tự chọn thay người dùng nếu chưa có xác nhận.
- **Rủi ro 3 (Khẳng định độc tính $CO$ và số liệu 200–250 lần — `I-04.25`):** *Biện pháp:* Giữ nguyên nội dung nguồn, gắn `[VERIFY: CO-Hb affinity]`; tuân thủ `DOMAIN_RULES` — không thêm liều, chỉ định, phác đồ, PK; chỉ giải thích cơ chế orbital.
- **Rủi ro 4 (Bổ sung $3c\text{–}2e$ và dữ liệu $B_2, C_2, F_2$ không có trong nguồn — `M-04.10`, `M-04.14`, `M-04.08`):** *Biện pháp:* Chỉ dùng kiến thức giáo trình chuẩn, gắn `[ADDED]` + `[VERIFY]`; tuyệt đối không thêm số liệu nghiên cứu mới; người dùng phải duyệt ở Gate A (`Q1`, `Q4`).
- **Rủi ro 5 (Ký hiệu `KK`, $\pi_{2p}$ gộp, `LUMO` chưa định nghĩa — `I-04.09`, `I-04.10`, `I-04.11`):** *Biện pháp:* Chuẩn hóa theo `NOTATION` và `glossary_running.md`; mọi thay đổi ký hiệu ghi vào changelog.

### C.4 Đối chiếu dung lượng nguồn và dung lượng kế hoạch
- **Dung lượng nguồn (`D-04`):** 1.443 từ; 0 bảng; 4 hộp công thức; 2 hộp ví dụ; 2 callout; 0 câu hỏi/bài tập.
- **Dung lượng kế hoạch (`ch04_draft.md`):** ~4.000 – 4.500 từ (đáp ứng `TARGET_LENGTH_PER_CHAPTER: not shorter than source; no upper limit`), tương đương **2,8–3,1 lần** nguồn.
- **Thời lượng học tập ước tính (`STUDY_TIME_RULE`):** ~2.300 từ nội dung lý thuyết/ví dụ chính → khoảng 1 giờ 32 phút; 10 câu hỏi/bài tập → 40 phút; tổng **≈ 2 giờ 40 phút** (làm tròn 2,5–2,7 giờ).

### C.5 Dự thảo Chuẩn đầu ra Học tập (Draft Learning Objectives)
- **`LO-1` (Kiến thức – Nhận biết & Thông hiểu):** Phát biểu được bản chất thuyết MO (quan điểm hạt nhân đa tâm, orbital phân tử trải trên toàn phân tử), phương pháp LCAO, ba điều kiện tổ hợp AO hiệu quả, cách phân loại MO liên kết/phản liên kết/không liên kết, công thức bậc liên kết và tiêu chí thuận từ – nghịch từ.
- **`LO-2` (Kỹ năng – Lập giản đồ & tính toán):** Lập được giản đồ năng lượng MO cho phân tử đồng hạch chu kỳ 2 (phân biệt hai trật tự có/không trộn $2s-2p$), điền electron theo quy tắc Hund, tính $BO$ và dự đoán chiều biến thiên độ dài/năng lượng liên kết cùng từ tính.
- **`LO-3` (Vận dụng – Giải thích hiện tượng và dữ kiện):** Vận dụng MO để giải thích tính thuận từ của $O_2$, bậc liên kết bán nguyên của $O_2^+, O_2^-, H_2^+$, sự khác biệt $N_2$/ $O_2$, và cơ chế $CO$ gắn hemoglobin qua tương tác HOMO–LUMO ($\sigma$-donor/$\pi$-backbonding).
- **`LO-4` (Năng lực đánh giá mô hình):** So sánh thuyết MO với thuyết VB, nhận diện khi nào cần dùng MO (electron phi định xứ, liên kết đa tâm $3c\text{–}2e$, từ tính bất thường), giải thích liên kết cầu trong $B_2H_6$ và đánh giá giới hạn của mô hình.

### C.6 Kế hoạch kiểm tra đánh giá (Assessment Plan theo cấp độ nhận thức)

| Tiểu mục T7 | Cấp độ nhận thức | Chuẩn đầu ra được phủ | Số lượng & Dạng câu hỏi dự kiến |
|---|---|---|---|
| `T-04.7.1` | Knowledge & Comprehension | `LO-1` | 4 câu (trắc nghiệm & tự luận ngắn): định nghĩa MO/LCAO; ba điều kiện tổ hợp; phân biệt $\sigma, \pi, \sigma^*, \pi^*, n$; công thức $BO$ và tiêu chí từ tính. |
| `T-04.7.2` | Application | `LO-2`, `LO-3` | 3 bài tập: (1) viết cấu hình MO và tính $BO$ cho $O_2^+, O_2, O_2^-, O_2^{2-}$; (2) lập giản đồ MO cho $N_2$ và $F_2$, xác định từ tính; (3) giải thích vì sao $B_2$ và $O_2$ thuận từ còn $C_2$, $N_2$, $F_2$ nghịch từ. |
| `T-04.7.3` | Analytical & Advanced | `LO-3`, `LO-4` | 3 câu: (1) chứng minh thuyết VB bất lực trước $O_2$ và cách MO giải quyết; (2) phân tích $CO$–hemoglobin bằng HOMO/LUMO, tuân thủ `DOMAIN_RULES`; (3) đếm 12 electron hóa trị $B_2H_6$ và giải thích $3c\text{–}2e$ thay cho mô hình $2c\text{–}2e$. |
| `T-04.7.4` | Answer Key | `LO-1`..`LO-4` | Hướng dẫn giải chi tiết 10/10 câu, mỗi câu ghi `LO` và cấp độ; phép tính $BO$ trình bày từng bước kèm kiểm tra tổng electron hóa trị. |

### C.7 Ứng viên Thuật ngữ (Glossary Candidates) & Chuẩn hóa Ký hiệu

| Thuật ngữ / Đại lượng | Dạng viết trong nguồn (`D-04`) | Dạng chuẩn hóa cho S3 & Glossary | Ghi chú chuẩn hóa |
|---|---|---|---|
| Thuyết Orbital Phân tử | `Thuyết MO`, `Thuyết Orbital Phân tử` | **Thuyết orbital phân tử (Molecular Orbital Theory – MO)** | Mở rộng đầy đủ ở lần đầu (`T-04.1.1`). |
| Phương pháp LCAO | `Phương pháp LCAO (Linear Combination of Atomic Orbitals)` | **Phương pháp tổ hợp tuyến tính orbital nguyên tử (LCAO)** | Giữ nguyên tên tiếng Anh trong ngoặc. |
| Orbital phân tử liên kết / phản liên kết / không liên kết | `MO Liên kết ($\sigma, \pi$)`, `MO Phản liên kết`, `MO Không liên kết ($n$)` | **MO liên kết (bonding MO)**, **MO phản liên kết (antibonding MO)**, **MO không liên kết (nonbonding MO)** | Luôn đặt ký hiệu trong MathJax. |
| Bậc liên kết | `Bậc liên kết (Bond Order - $BO$)`, `$BO = (N_b-N_a)/2$` | **Bậc liên kết (Bond Order – $BO$)** | Ghi rõ đây là định nghĩa mở rộng theo MO so với định nghĩa Lewis ở `T-01.4.1`. |
| Bậc liên kết phân số | `giá trị bán nguyên ($0,5; 1,5; 2,5$)` | **Bậc liên kết phân số (fractional bond order)** | Giải thích do độ chiếm orbital lẻ/electron phi định xứ. |
| Thuận từ / Nghịch từ | `Thuận từ (Paramagnetic)`, `Nghịch từ (Diamagnetic)` | **Thuận từ (paramagnetic)** / **Nghịch từ (diamagnetic)** | Định nghĩa theo số electron độc thân, không theo $BO$. |
| Giản đồ năng lượng MO | `Giản đồ năng lượng MO` | **Giản đồ năng lượng orbital phân tử (MO energy diagram)** | Nêu quy ước trục năng lượng và cách điền electron. |
| Tương tác $2s-2p$ | `tương tác $2s - 2p$`, `nghịch đảo năng lượng` | **Trộn $s$–$p$ (s–p mixing) / nghịch đảo mức năng lượng** | Diễn đạt cơ chế là trộn cấu hình do cùng đối xứng (`I-04.27`). |
| Phân tử đồng hạch / dị hạch | `phân tử đồng hạch`, `Phân tử dị hạch` | **Phân tử đồng hạch (homonuclear)** / **Phân tử dị hạch (heteronuclear)** | Bổ sung nguyên tắc chung cho dị hạch. |
| Orbital biên | `Thuyết Vân đạo biên (Frontier Orbitals HOMO - LUMO)` | **Orbital biên (frontier orbital)**, **HOMO**, **LUMO** | Bỏ "Vân đạo"; định nghĩa cả HOMO và LUMO. |
| $\sigma$-donor / $\pi$-backbonding | `chất cho cặp electron ($\sigma$-donor)`, `nhận mật độ electron phản hồi ($\pi$-backbonding)` | **Cho $\sigma$ ($\sigma$-donor)** / **Cho ngược $\pi$ ($\pi$-backbonding)** | Kèm giải nghĩa tiếng Việt ở lần đầu. |
| Liên kết ba tâm – hai electron | `$3c-2e$` (chỉ nhắc gián tiếp qua carry-over, không có trong `D-04`) | **Liên kết ba tâm – hai electron ($3c\text{–}2e$, liên kết chuối)** | Bổ sung `[ADDED]`; thống nhất với glossary Chương 03. |

### C.8 Liên kết chéo giữa các chương (Cross-References)
- **Liên kết ngược về Chương 1 (`D-01`):**
  - `T-01.4.1` — định nghĩa bậc liên kết, độ dài liên kết và năng lượng liên kết; Chương 04 mở rộng định nghĩa $BO$ theo MO (`G.1`) và dùng $E_{lk}$ để so sánh $N_2$/ $O_2$.
  - `T-01.4.6` — gốc tự do và tính thuận từ; nối với tiêu chí electron độc thân của `T-04.4.3`.
- **Liên kết ngược về Chương 2 (`D-02`):**
  - `T-02.4.2` — số phối trí lập thể $SN$; chỉ dùng để nhắc rằng MO không thay thế VSEPR mà bổ sung mô tả electron phi định xứ.
- **Liên kết ngược về Chương 3 (`D-03`) — giải quyết 3 câu hỏi carry-over:**
  - `T-03.4.6` (ba hạn chế của VB) → **carry-over (a)** tại `T-04.4.4.3` + `T-04.5.2`: cấu hình MO và tính thuận từ của $O_2$.
  - `T-03.4.6` + định nghĩa bậc liên kết Chương 1 → **carry-over (b)** tại `T-04.4.3.2` + `T-04.5.1`: bậc liên kết phân số.
  - `T-03.4.6` (liên kết cầu $B\text{–}H\text{–}B$) → **carry-over (c)** tại `T-04.4.6` + `T-04.5.4`: liên kết $3c\text{–}2e$ trong $B_2H_6$.
  - `T-03.4.2` — liên kết $\sigma, \pi$; MO dùng lại ký hiệu $\sigma, \pi, \sigma^*, \pi^*$ với nghĩa năng lượng thay vì kiểu xen phủ.
- **Liên kết xuôi sang Chương 5 (`D-05` — Tương tác liên phân tử):** từ tính phân cực và orbital biên (`T-04.4.5`) làm nền cho tương tác lưỡng cực – liên kết hydro; chỉ nêu một câu chuyển tiếp, không đi sâu.
- **Liên kết xuôi sang Chương 6 & 7 (`D-06`, `D-07` — Phức chất & Đồng phân):**
  - `T-04.4.5` (HOMO/LUMO, $\sigma$-donor/$\pi$-backbonding của $CO$) → thuyết trường phối tử, giản đồ tách mức $d$, phổ hấp thụ và màu phức chất ở Chương 06.
  - `T-04.5.3` ($CO$–hemoglobin) → liên kết phối trí kim loại–phối tử; giới hạn phạm vi, không thay thế nội dung Chương 06.

---

## D. Verification Items Carried Forward from Audit

Toàn bộ 10 hạng mục trong Verification Queue (`V-04.01` đến `V-04.10`) từ `01_audit/ch04_audit.md` được gán vào các mục tiêu `T-04.x.y`:

| V-ID | Nội dung cần kiểm chứng | Loại | Mục T-ID tiếp nhận | Kế hoạch xử lý trong S3 |
|---|---|---|---|---|
| `V-04.01` | Cấu hình MO $O_2$, 2 electron độc thân trên $\pi^*$, $BO=2$, tính thuận từ của $O_2$ lỏng | theory / fact | `T-04.4.4`, `T-04.5.2`, `T-04.7.3` | Giữ nguyên dữ kiện nguồn; trình bày từng bước điền electron theo Hund; gắn `[VERIFY]`. |
| `V-04.02` | Giá trị $BO$ bán nguyên: $H_2^+$ 0,5; $O_2^+$ 2,5; $O_2^-$ 1,5; $O_2^{2-}$ 1 | number / formula | `T-04.4.3`, `T-04.5.1`, `T-04.7.2` | Lập bảng đếm $N_b, N_a$ từng loài; kiểm tra tổng electron hóa trị; gắn `[VERIFY]`. |
| `V-04.03` | $E_{lk}(N_2) \approx 945\text{ kJ/mol}$ | number | `T-04.4.4`, `T-04.5.2` | Giữ số liệu nguồn; gắn `[VERIFY]`; so sánh định tính với $O_2$. |
| `V-04.04` | Ngưỡng $\Delta E \le 10-14\text{ eV}$ và $\Delta E(2p-2s) \le 12\text{ eV}$ | number / convention | `T-04.4.2`, `T-04.4.4` | Trình bày một ngưỡng thống nhất kèm chú thích phạm vi mô hình; gắn `[VERIFY]`. |
| `V-04.05` | Độ bền $CO$–Hb "gấp 200–250 lần" và cơ chế ngạt mô | fact / clinical | `T-04.4.5`, `T-04.5.3`, `T-04.7.3` | Giữ nguyên nội dung nguồn; gắn `[VERIFY]`; tuân thủ `DOMAIN_RULES` (không thêm liều/chỉ định/PK). |
| `V-04.06` | $CO$ đồng electron với $N_2$, $BO=3$; HOMO trên C; $\pi$-backbonding vào $\pi^*$ | theory | `T-04.4.5`, `T-04.5.3` | Trình bày nguyên tắc dị hạch trước, rồi mới đến $CO$; gắn `[VERIFY]`. |
| `V-04.07` | Hai trật tự mức MO và cơ chế trộn $2s-2p$ | theory | `T-04.4.4`, `T-04.5.5` | Vẽ sơ đồ Mermaid quy trình; giải thích trộn $s$–$p$ là trộn cấu hình cùng đối xứng; gắn `[VERIFY]`. |
| `V-04.08` | Toàn bộ chương không có tài liệu tham khảo gốc | reference | `T-04.8.1` | Đặt các thẻ `[VERIFY: reference needed for …]`; chờ người dùng cung cấp giáo trình chuẩn. |
| `V-04.09` | $3c\text{–}2e$ trong $B_2H_6$ — nguồn `D-04` không có | theory / coverage | `T-04.4.6`, `T-04.5.4`, `T-04.7.3` | Bổ sung `[ADDED]` kiến thức chuẩn; gắn `[VERIFY]`; chờ người dùng duyệt `Q1`. |
| `V-04.10` | Phát biểu $He_2$ có $BO=0$ "không thể tồn tại" | theory / accuracy | `T-04.4.3`, `T-04.6.1` | Giữ ví dụ nguồn; diễn đạt "không tạo liên kết cộng hóa trị bền" và gắn `[VERIFY]`. |

---

## E. Open Questions for Gate A (Câu hỏi xin ý kiến phê duyệt tại Gate A)

1. **Q1 (Bổ sung $3c\text{–}2e$ cho $B_2H_6$ — `M-04.10`, `M-04.14`, `V-04.09`):** `D-04` không có nội dung về $B_2H_6$ / $3c\text{–}2e$ trong khi Chương 03 đã hứa. Bạn có đồng ý để S3 bổ sung tiểu mục lý thuyết `T-04.4.6` và ví dụ `T-04.5.4` ở mức kiến thức giáo trình chuẩn, gắn `[ADDED]`, không thêm dữ liệu nghiên cứu mới?
2. **Q2 (Mức độ định lượng LCAO — `M-04.05`, `I-04.21`):** Bạn có đồng ý bổ sung điều kiện chuẩn hóa $c_A^2+c_B^2=1$, ghi chú $c_A \neq c_B$ cho dị hạch và biểu thức năng lượng MO dạng $\alpha,\beta,S$ ở mức giới thiệu (`[ADDED: standard LCAO background]`), hay chỉ giữ đúng nội dung nguồn?
3. **Q3 (Xử lý mẹo nhớ sai — `M-04.07`, `M-04.17`, `I-04.06`, `I-04.17`):** Bạn có đồng ý S3 giữ tiêu chí "còn electron độc thân → thuận từ", bỏ vế "BO lẻ" (vì $N_2$, $CO$ có $BO=3$ nhưng nghịch từ), ghi thay đổi vào changelog và gắn `[VERIFY]`?
4. **Q4 (Phạm vi phần dị hạch và dữ liệu $B_2, C_2, F_2$ — `M-04.08`, `M-04.09`, `I-04.18`, `I-04.28`):** Bạn muốn `T-04.4.5` chỉ trình bày $CO$ như nguồn, hay bổ sung nguyên tắc chung của giản đồ MO dị hạch; đồng thời có đồng ý điền cấu hình/$BO$/từ tính chuẩn của $B_2, C_2, F_2$ vào `Bảng 4.2` (gắn `[ADDED]` + `[VERIFY]`) không?
5. **Q5 (Dung lượng và bộ 10 câu hỏi `T7` — `M-04.19`–`M-04.22`):** Bạn có đồng ý nâng chương từ 1.443 từ lên khoảng **4.000–4.500 từ**, với bộ **10 câu hỏi/bài tập** có đáp án chi tiết từng bước tại `T7`, phủ đủ `LO-1`..`LO-4`?

---

## F. Not verified / limitations

- **Phạm vi dữ liệu:** Bản kế hoạch ánh xạ chỉ dựa trên `00_source_original/ch04_doc-hvc-4.html` (`D-04`), `01_audit/ch04_audit.md`, `_state/carryover_latest.md`, phần cầu nối trong `03_chapters/ch03_draft.md` và bảng thuật ngữ `D-09`. Các chương `D-05`–`D-08` chưa đọc trong lượt này; nhận định về `D-06` chỉ ở mức `[POTENTIAL]`. File nguồn được giữ nguyên trạng tuyệt đối (READ-ONLY).
- **Số liệu và tài liệu tham khảo:** Các giá trị $BO$ bán nguyên, $E_{lk}(N_2)$, ngưỡng $\Delta E$, độ bền $CO$–Hb và tính thuận từ $O_2$ không có trích dẫn gốc trong `D-04`; tất cả đã đưa vào mục D (`V-04.01`–`V-04.10`) và sẽ gắn `[VERIFY]` khi viết.
- **Nội dung bổ sung ngoài nguồn:** `T-04.4.6` và `T-04.5.4` ($3c\text{–}2e$ trong $B_2H_6$), dữ liệu $B_2, C_2, F_2$ trong `Bảng 4.2`, điều kiện chuẩn hóa LCAO và nguyên tắc dị hạch là kiến thức giáo trình chuẩn, **không có trong `D-04`**; đã gắn `[ADDED]`, cần người dùng duyệt ở Gate A (Q1, Q2, Q4).
- **Kiểm tra cơ học:** Độ phủ S-ID (9/9 = 100%, 0 S-ID bị sót) và thống kê thẻ được kiểm tra bằng `_tools/check_coverage.py` và `_tools/check_tags.py`, báo cáo lưu tại `_state/checks/ch04_s2_coverage.md` và `_state/checks/ch04_s2_tags.md`.
- **Giới hạn giai đoạn:** Dừng ngay tại GATE A theo R9 và mục 7.2; chưa thực hiện viết bản thảo Stage S3.

---

GATE A: STOP. Awaiting user approval of the Content Mapping Matrix. Do not begin the transformation.
