# ch03_matrix.md — S2 Mapping & Restructuring Plan · Chương 03

**Môn:** Hóa vô cơ dược · **Stage:** S2 Mapping · **Ngày:** 2026-11-07  
**Nguồn đầu vào:** `00_source_original/ch03_doc-hvc-3.html` (D-03), `01_audit/ch03_audit.md`, `_state/carryover_latest.md`  
**Khung cấu trúc:** Template v2 (`T1`–`T8`, `DISCIPLINE_TYPE: STEM-quantitative` theo `00_config.md`)  
**Quy tắc:** Ánh xạ 100% `S-03.1`–`S-03.8` sang `T-03.x.y` không làm mất nội dung; KHÔNG viết bài giảng chi tiết; dừng ở GATE A.

---

## A. Content Mapping Matrix

| Row ID | S-ID(s) | Summary (≤15 words) | Target T-ID and Name | Primary Action | Secondary Actions | Provenance After Transformation | Notes and Risks |
|---|---|---|---|---|---|---|---|
| M-03.01 | — | Tên chương, giới thiệu khái quát và phạm vi thuyết VB & lai hóa | `T-03.1.1` Chương 3: Thuyết Liên kết Hóa trị (Valence Bond – VB) & Cơ chế Lai hóa Orbital | ADD | — | `[ADDED: structural frame]` | Nguồn D-03 thiếu T1 (`I-03.01`, `I-03.16`); dựng theo Template v2. |
| M-03.02 | — | Kiến thức tiên quyết từ Chương 1–2 và thời lượng học tập dự kiến | `T-03.1.2` Phạm vi, Kiến thức Tiên quyết & Thời lượng Học tập | ADD | — | `[ADDED: study time estimate]` | Nối tiếp Chương 1 (`T-01.4.4`) và Chương 2 (`T-02.4.2`–`T-02.4.5`); áp dụng `STUDY_TIME_RULE` (~2,0 giờ). |
| M-03.03 | — | Chuẩn đầu ra về kiến thức, kỹ năng và năng lực (`LO-1`..`LO-4`) | `T-03.2.1` Mục tiêu Học tập Chuẩn đầu ra (Learning Objectives) | ADD | — | `[ADDED: learning objectives]` | Tổng hợp từ `S-03.1`–`S-03.8`; không tự thêm chuẩn ngoài phạm vi nguồn. |
| M-03.04 | S-03.1, S-03.5 | Bước chuyển từ hình học VSEPR sang bản chất lượng tử của liên kết định hướng | `T-03.3.1` Đặt vấn đề: Từ Hình học Không gian VSEPR đến Cơ chế Xen phủ Orbital Nguyên tử | MERGE | MOVE, EXPAND | S-03.1, S-03.5 `[SRC]` + `[ADDED: pedagogical context]` | Kết nối câu hỏi mở từ Chương 2 (`carryover_latest.md` mục 3) với ý nghĩa chung tại `S-03.1`, `S-03.5`. |
| M-03.05 | S-03.1 | Luận điểm Heitler–London–Pauling, nguyên lý xen phủ cực đại, định hướng và bão hòa | `T-03.4.1` Luận điểm Cơ bản của Thuyết Liên kết Hóa trị (Heitler – London – Pauling) | KEEP | EXPAND, REWRITE | S-03.1 `[SRC]` + `[ADDED: electron promotion and coordinate VB mechanism]` | Bổ sung cơ chế kích thích electron ($ns^2 \to ns^1np^1$) và cơ chế cho–nhận vào orbital trống (`I-03.18`). |
| M-03.06 | S-03.2 | Phân loại xen phủ trục ($\sigma$), bên ($\pi$), 4 thùy ($\delta$), mặt phẳng nút | `T-03.4.2` Phân loại Kiểu Xen phủ Tạo Liên kết ($\sigma, \pi, \delta$), Mặt phẳng Nút & Độ Bền | KEEP | EXPAND, REWRITE | S-03.2 `[SRC]` + `[ADDED: z-axis convention, d-d pi overlap, Table 3.1]` + `[VERIFY: Re2Cl8 quadruple bond]` | Quy ước trục liên nhân là $Oz$ (`I-03.05`); bổ sung xen phủ $\pi$ $d\text{–}d$ (`I-03.04`, `V-03.01`) và bảng so sánh $\sigma, \pi, \delta$. |
| M-03.07 | S-03.3, S-03.8 | Định nghĩa lai hóa orbital, điều kiện năng lượng, đặc tính $s/p$ và liên hệ $SN$ | `T-03.4.3` Cơ sở Thuyết Lai hóa Orbital (Orbital Hybridization), Đặc tính $s/p$ & Liên hệ với $SN$ | MERGE | EXPAND, REWRITE | S-03.3, S-03.8 `[SRC]` + `[ADDED: s/p character percentages and Bent's rule link]` | Sửa lỗi lặp từ "AO nguyên tử" (`I-03.10`); làm rõ tỷ lệ $\%s, \%p$ nối với Quy tắc Bent (`I-03.13`, `I-03.19`). |
| M-03.08 | S-03.3 | Các kiểu lai hóa $sp, sp^2, sp^3$ và lai hóa mở rộng $sp^3d, sp^3d^2$ | `T-03.4.4` Hệ thống Các Kiểu Lai hóa $sp, sp^2, sp^3$ và Lai hóa Mở rộng $sp^3d, sp^3d^2$ | KEEP | EXPAND, REWRITE | S-03.3 `[SRC]` + `[ADDED: Table 3.2 and hypervalency note]` + `[VERIFY: bond angle data]` | Chuẩn hóa ký hiệu `1 AO $s$ + 3 AO $p$` (`I-03.03`); lưu ý tính bất tương đương trục/xích đạo ở $sp^3d$ (`I-03.07`, `I-03.21`). |
| M-03.09 | S-03.3 | Lai hóa phức chất $dsp^2$ (vuông phẳng), $sp^3d^2$ (bát diện ngoài) và $d^2sp^3$ (bát diện trong) | `T-03.4.5` Lai hóa Phân lớp $d$ trong Phức chất ($dsp^2, sp^3d^2, d^2sp^3$) & Thuốc Chống Ung thư Cisplatin | SPLIT | EXPAND, REWRITE | S-03.3 `[SRC]` + `[ADDED: eg orbitals d_z2 and d_x2-y2]` + `[VERIFY: Cisplatin dsp2 and FeF6/Fe(CN)6 spin states]` | Nêu rõ 2 AO $d_{z^2}, d_{x^2-y^2}$ trong bát diện (`I-03.06`); giải thích spin cao/thấp (`I-03.11`, `V-03.02`, `V-03.03`). |
| M-03.10 | S-03.4, S-03.5 | Ưu điểm và 3 hạn chế chí mạng của thuyết VB ($O_2$, màu phức chất, $B_2H_6$) | `T-03.4.6` Đánh giá Ưu điểm, Hạn chế Chí mạng của Thuyết VB & Bước chuyển sang Thuyết MO | MERGE | EXPAND, REWRITE | S-03.4, S-03.5 `[SRC]` + `[ADDED: bridge to Ch04 MO theory]` + `[VERIFY: O2 paramagnetism and B2H6 3c-2e bond]` | Giải thích rõ tính thuận từ của $O_2$ và liên kết $3c\text{–}2e$ trong $B_2H_6$ (`I-03.11`, `V-03.06`), nối sang Chương 4. |
| M-03.11 | S-03.2, S-03.6 | Ví dụ phân tích lai hóa $sp^3, sp^2, sp$, liên kết $\sigma/\pi$ trong $CH_4, C_2H_4, C_2H_2$ | `T-03.5.1` Ví dụ 3.1: Phân tích Trạng thái Lai hóa ($sp^3, sp^2, sp$), Đếm Liên kết $\sigma/\pi$ trong $CH_4, C_2H_4, C_2H_2$ | MERGE | MOVE, EXPAND | S-03.2, S-03.6 `[SRC]` + `[ADDED: step-by-step sigma/pi count]` + `[VERIFY: cis-trans condition in substituted alkenes]` | Trình bày chuẩn `Given | Find | Approach | Solution | Check`; chuẩn hóa phát biểu đồng phân *cis/trans* (`I-03.08`, `V-03.04`). |
| M-03.12 | S-03.7 | Ví dụ giải thích góc liên kết $H_2O$ ($104,5^\circ$), $NH_3$ ($107,3^\circ$) và độ tan dược học | `T-03.5.2` Ví dụ 3.2: Giải thích Sự Co Góc Liên kết trên Nền Lai hóa $sp^3$ ($NH_3, H_2O$) & Hệ quả Dược học | MOVE | EXPAND, REWRITE | S-03.7 `[SRC]` + `[ADDED: non-equivalent sp3 orbitals and NH4+ comparison]` + `[VERIFY: experimental bond angles]` | Kết hợp lai hóa $sp^3$ có cặp LP chiếm chỗ với đặc tính $s/p$ và đối chiếu $CH_4 \to NH_3 \to H_2O \to NH_4^+$ (`DUP-03.3`, `V-03.05`). |
| M-03.13 | S-03.3 | Ví dụ sơ đồ ô lượng tử cho phức chất $[FeF_6]^{3-}, [Fe(CN)_6]^{3-}, [Ni(CN)_4]^{2-}$, Cisplatin | `T-03.5.3` Ví dụ 3.3: Biện luận Sơ đồ Ô Lượng tử Bát diện Ngoài ($sp^3d^2$), Bát diện Trong ($d^2sp^3$) và Vuông phẳng ($dsp^2$) | MOVE | EXPAND | S-03.3 `[SRC]` + `[ADDED: step-by-step orbital box diagrams for Fe3+, Ni2+, Pt2+]` | Minh họa từng bước cấu hình $3d^5$ ($Fe^{3+}$) và $d^8$ ($Ni^{2+}, Pt^{2+}$) cho đúng 4 phức chất nêu tại `S-03.3`. |
| M-03.14 | S-03.3, S-03.8 | Quy trình 4 bước và sơ đồ Mermaid xác định trạng thái lai hóa và liên kết | `T-03.5.4` Quy trình Chuẩn 4 Bước & Sơ đồ Thuật toán Xác định Lai hóa Orbital (Mermaid) | MERGE | MOVE, REWRITE | S-03.3, S-03.8 `[SRC]` + `[ADDED: Mermaid flowchart]` | Chuyển hóa quy tắc đếm miền electron ($SN$) và phân biệt nguyên tố nhóm chính vs. phức chất thành sơ đồ `flowchart TD`. |
| M-03.15 | — | Khung giữ chỗ hình vẽ xen phủ $\sigma, \pi, \delta$, các AO lai hóa và $B_2H_6$ | `T-03.5.5` Minh họa Trực quan Sự Xen phủ Orbital ($\sigma, \pi, \delta$), Định hướng Lai hóa & Liên kết $3c\text{–}2e$ | ADD | — | `[ADDED: figure placeholders]` | Đặt các placeholder `[FIGURE]` chuẩn cho xen phủ $\sigma/\pi/\delta$, mặt phẳng nút, khung lai hóa và $B_2H_6$ (`I-03.15`). |
| M-03.16 | S-03.5, S-03.8 | Tóm tắt nguyên lý cốt lõi, quy tắc tổng số mũ lai hóa và giới hạn VB | `T-03.6.1` Tóm tắt Nội dung Trọng tâm & Quy tắc Ghi nhớ Nhanh | MERGE | MOVE, REWRITE | S-03.5, S-03.8 `[SRC]` + `[ADDED: generalized exponent sum rule]` | Chuẩn hóa mẹo cộng số mũ (`I-03.09`) để áp dụng đúng cho cả $sp, sp^2, sp^3$ lẫn $sp^3d, sp^3d^2, dsp^2, d^2sp^3$. |
| M-03.17 | — | Bảng tổng hợp quy tắc đếm liên kết $\sigma/\pi$, đặc tính $s/p$ và liên hệ khái niệm | `T-03.6.2` Bảng Tổng hợp Công thức, Quy tắc Nhận diện và Mối quan hệ Khái niệm | ADD | — | `[ADDED: summary concept table]` | Hệ thống hóa mối liên hệ giữa Cấu trúc Lewis (Chương 1) – Số lập thể $SN$ (Chương 2) – Lai hóa VB (Chương 3). |
| M-03.18 | — | Câu hỏi kiểm tra mức độ Nhận biết và Thông hiểu (phủ `LO-1`, `LO-2`) | `T-03.7.1` Câu hỏi Lý thuyết: Nhận biết & Thông hiểu | ADD | — | `[ADDED: knowledge and comprehension questions]` | Đánh giá nắm vững luận điểm VB, phân biệt xen phủ $\sigma, \pi, \delta$, mặt phẳng nút và điều kiện lai hóa. |
| M-03.19 | — | Bài tập xác định trạng thái lai hóa, đếm số liên kết $\sigma/\pi$ và đặc tính $s/p$ (`LO-2`, `LO-3`) | `T-03.7.2` Bài tập Áp dụng: Xác định Lai hóa, Đếm Liên kết $\sigma/\pi$ & Phân tích Sơ đồ Ô Lượng tử | ADD | — | `[ADDED: application exercises]` | Bài tập tính số liên kết $\sigma, \pi$, xác định lai hóa từ $SN$ và viết sơ đồ ô lượng tử phức chất. |
| M-03.20 | — | Câu hỏi phân tích nâng cao về phức chất Cisplatin, $[Re_2Cl_8]^{2-}$ và hạn chế VB (`LO-3`, `LO-4`) | `T-03.7.3` Câu hỏi Phân tích & Vận dụng Nâng cao trong Hóa Vô cơ Dược | ADD | — | `[ADDED: analytical and advanced questions]` | Biện luận lai hóa $dsp^2$ trong Cisplatin, bát diện trong/ngoài và giải thích vì sao VB thất bại với $O_2, B_2H_6$. |
| M-03.21 | — | Đáp án và hướng dẫn giải chi tiết cho toàn bộ câu hỏi `T7` | `T-03.7.4` Đáp án & Hướng dẫn Giải Chi tiết (Answer Key) | ADD | — | `[ADDED: step-by-step answer key]` | Lời giải chi tiết từng bước đếm electron, số miền $SN$, số liên kết $\sigma/\pi$ để kiểm tra độc lập ở Stage S4. |
| M-03.22 | — | Danh mục tài liệu tham khảo chuẩn và ghi chú truy vết theo R4 | `T-03.8.1` Tài liệu Tham khảo & Đọc thêm | ADD | — | `[ADDED: reference section structure]` + `[VERIFY: textbook references needed]` | Ghi nhận nguồn D-03 có 0 trích dẫn (`I-03.17`, `V-03.07`); chờ người dùng cung cấp giáo trình chuẩn. |

---

## B. Coverage Check

### 1. Kiểm tra độ phủ S-ID từ Audit Register (Script `check_coverage.py`)
- **Danh sách S-ID trong `01_audit/ch03_audit.md` (Tổng cộng = 8 S-ID):** `S-03.1`, `S-03.2`, `S-03.3`, `S-03.4`, `S-03.5`, `S-03.6`, `S-03.7`, `S-03.8`.
- **Ánh xạ từng S-ID trong Ma trận Mapping (Bảng A):**
  - `S-03.1` → `M-03.04` (`T-03.3.1`), `M-03.05` (`T-03.4.1`)
  - `S-03.2` → `M-03.06` (`T-03.4.2`), `M-03.11` (`T-03.5.1`)
  - `S-03.3` → `M-03.07` (`T-03.4.3`), `M-03.08` (`T-03.4.4`), `M-03.09` (`T-03.4.5`), `M-03.13` (`T-03.5.3`), `M-03.14` (`T-03.5.4`)
  - `S-03.4` → `M-03.10` (`T-03.4.6`)
  - `S-03.5` → `M-03.04` (`T-03.3.1`), `M-03.10` (`T-03.4.6`), `M-03.16` (`T-03.6.1`)
  - `S-03.6` → `M-03.11` (`T-03.5.1`)
  - `S-03.7` → `M-03.12` (`T-03.5.2`)
  - `S-03.8` → `M-03.07` (`T-03.4.3`), `M-03.14` (`T-03.5.4`), `M-03.16` (`T-03.6.1`)
- **Số S-ID chưa được ánh xạ (Unmapped / Missing S-IDs): 0** (Độ phủ đạt **100,0%**).
- **Báo cáo kiểm tra cơ học:** Lưu tại `_state/checks/ch03_s2_coverage.md`.

### 2. Thống kê hành động chính (Primary Action Counts)

| Primary Action | Số dòng ma trận | Tỷ lệ (%) | Danh sách Row ID |
|---|---|---|---|
| **ADD** (Bổ sung khung sư phạm, bảng tổng hợp, hình vẽ, bài tập) | 10 | 45,5% | M-03.01, M-03.02, M-03.03, M-03.15, M-03.17, M-03.18, M-03.19, M-03.20, M-03.21, M-03.22 |
| **MERGE** (Hợp nhất nội dung trùng lặp/phân tán) | 6 | 27,3% | M-03.04, M-03.07, M-03.10, M-03.11, M-03.14, M-03.16 |
| **KEEP** (Giữ nguyên vị trí cấu trúc cốt lõi) | 3 | 13,6% | M-03.05, M-03.06, M-03.08 |
| **MOVE** (Di chuyển về đúng phân khu Template v2) | 2 | 9,1% | M-03.12, M-03.13 |
| **SPLIT** (Tách mục lớn để phân tích chuyên sâu phức chất) | 1 | 4,5% | M-03.09 |
| **REMOVE** (Đề xuất loại bỏ) | 0 | 0,0% | Không có dòng REMOVE nào (bảo toàn 100% dữ liệu nguồn) |
| **Tổng cộng** | **22 dòng** | **100,0%** | — |

### 3. Ước tính tỷ lệ nội dung mới và thống kê thẻ (Script `check_tags.py`)
- **Dung lượng nguồn gốc (`D-03`):** 1.321 từ (được bảo toàn toàn bộ trong `T3`, `T4`, `T5`, `T6`).
- **Dung lượng dự kiến bản thảo hoàn chỉnh (`ch03_draft.md`):** ~3.500 – 4.000 từ.
  - Phần nội dung lý thuyết, bảng hệ thống hóa và ví dụ phát triển trực tiếp từ nguồn (`T3` + `T4` + `T5.1`–`T5.3` + `T6.1`): ~2.000 – 2.200 từ.
  - Phần khung sư phạm, sơ đồ thuật toán Mermaid, khung giữ chỗ hình vẽ và bộ 10 câu hỏi/bài tập tự lượng giá kèm lời giải chi tiết (`T1`–`T2`, `T5.4`–`T5.5`, `T6.2`, `T7`, `T8`): ~1.500 – 1.800 từ (chiếm khoảng 43%–45% tổng dung lượng bản thảo, tập trung chủ yếu ở 2 bảng tổng hợp mới và bộ bài tập/đáp án `T7`).
- **Kết quả chạy `check_tags.py` trên file `02_mapping/ch03_matrix.md` (lưu tại `_state/checks/ch03_s2_tags.md`):**
  - Tổng số thẻ trong file ma trận này: `ADDED = 22`, `VERIFY = 7`, `CONFLICT = 0`, `FIGURE = 2`.

---

## C. Chapter Restructuring Plan

### C.1 Đề cương chi tiết đến cấp Tiểu mục / Chủ đề (Subsection / Topic Outline)

```text
Chương 3: Thuyết Liên kết Hóa trị (Valence Bond – VB) & Cơ chế Lai hóa Orbital
├── 1. Tổng quan chương (Chapter Overview) {T-03.1}
│   ├── 1.1 Tên chương, giới thiệu khái quát & phạm vi nội dung {T-03.1.1} (M-03.01)
│   └── 1.2 Kiến thức tiên quyết & Thời lượng học tập dự kiến {T-03.1.2} (M-03.02)
├── 2. Mục tiêu học tập (Learning Objectives) {T-03.2}
│   └── 2.1 Chuẩn đầu ra về Kiến thức, Kỹ năng và Năng lực vận dụng (LO-1..LO-4) {T-03.2.1} (M-03.03)
├── 3. Đặt vấn đề & Ý nghĩa thực tiễn (Introduction) {T-03.3}
│   └── 3.1 Từ hình học không gian VSEPR đến cơ chế xen phủ orbital nguyên tử (AO) {T-03.3.1} [SRC: S-03.1, S-03.5] (M-03.04)
├── 4. Nội dung bài giảng chính (Main Content) {T-03.4}
│   ├── 4.1 Luận điểm cơ bản của Thuyết Liên kết Hóa trị (Heitler – London – Pauling) {T-03.4.1} [SRC: S-03.1] (M-03.05)
│   │   ├── 4.1.1 Sự xen phủ orbital nguyên tử (AO) và ghép đôi electron có spin đối song song (↑↓)
│   │   ├── 4.1.2 Hai cơ chế hình thành liên kết cộng hóa trị: Ghép đôi electron độc thân (kèm kích thích electron) và Cho – nhận cặp electron (liên kết phối trí)
│   │   └── 4.1.3 Nguyên lý xen phủ cực đại (Pauling), tính định hướng và tính bão hòa của liên kết cộng hóa trị
│   ├── 4.2 Phân loại kiểu xen phủ tạo liên kết (σ, π, δ), Mặt phẳng nút & Độ bền {T-03.4.2} [SRC: S-03.2] (M-03.06)
│   │   ├── 4.2.1 Quy ước trục liên nhân (Oz) và Liên kết Sigma (σ): Xen phủ trục, đối xứng xoay và độ bền vượt trội
│   │   ├── 4.2.2 Liên kết Pi (π): Xen phủ bên (p–p, p–d, d–d), mặt phẳng nút, sự cản trở quay tự do và đồng phân hình học cis–trans
│   │   ├── 4.2.3 Liên kết Delta (δ): Xen phủ 4 thùy orbital d và liên kết kim loại – kim loại bậc 4 trong [Re_2Cl_8]^2- (1σ + 2π + 1δ)
│   │   └── 4.2.4 Bảng tổng hợp so sánh toàn diện liên kết σ, π và δ (Bảng 3.1)
│   ├── 4.3 Cơ sở Thuyết Lai hóa Orbital (Orbital Hybridization), Đặc tính s/p & Liên hệ với SN {T-03.4.3} [SRC: S-03.3, S-03.8] (M-03.07)
│   │   ├── 4.3.1 Khái niệm tổ hợp tuyến tính các AO hóa trị và điều kiện năng lượng để lai hóa hiệu quả
│   │   ├── 4.3.2 Mối liên hệ trực tiếp giữa Số phối trí lập thể (SN = m + n) của VSEPR và Số lượng orbital lai hóa
│   │   └── 4.3.3 Tỷ lệ phần trăm đặc tính s và đặc tính p (%s, %p): Cơ sở định lượng của Quy tắc Bent và độ bền liên kết
│   ├── 4.4 Hệ thống các kiểu lai hóa sp, sp^2, sp^3 và lai hóa mở rộng sp^3d, sp^3d^2 {T-03.4.4} [SRC: S-03.3] (M-03.08)
│   │   ├── 4.4.1 Lai hóa sp (SN = 2, 180°), sp^2 (SN = 3, 120°) và sp^3 (SN = 4, 109°28' hay 109,5°)
│   │   ├── 4.4.2 Lai hóa mở rộng sp^3d (SN = 5, lưỡng chóp tam giác: PCl_5) và sự bất tương đương trục – xích đạo
│   │   └── 4.4.3 Bảng hệ thống hóa toàn diện các kiểu lai hóa orbital từ SN = 2 đến SN = 6 (Bảng 3.2)
│   ├── 4.5 Lai hóa phân lớp d trong phức chất (dsp^2, sp^3d^2, d^2sp^3) & Thuốc chống ung thư Cisplatin {T-03.4.5} [SRC: S-03.3] (M-03.09)
│   │   ├── 4.5.1 Lai hóa dsp^2 (d_{x^2-y^2} + s + p_x + p_y) trong phức chất vuông phẳng d^8: [Ni(CN)_4]^2- và thuốc chống ung thư Cisplatin (cis-[Pt(NH_3)_2Cl_2])
│   │   └── 4.5.2 Phân biệt lai hóa bát diện ngoài sp^3d^2 (nd, spin cao: [FeF_6]^3-) và bát diện trong d^2sp^3 ((n-1)d, spin thấp: [Fe(CN)_6]^3-)
│   └── 4.6 Đánh giá ưu điểm, hạn chế chí mạng của Thuyết VB & Bước chuyển sang Thuyết MO {T-03.4.6} [SRC: S-03.4, S-03.5] (M-03.10)
│       ├── 4.6.1 Ưu điểm trực quan của Thuyết VB và sự thống nhất với công thức Lewis – VSEPR
│       └── 4.6.2 Ba thất bại chí mạng của Thuyết VB: Tính thuận từ của O_2, màu sắc/quang phổ phức chất, và liên kết đa tâm thiếu electron 3c–2e trong Diborane (B_2H_6)
├── 5. Ví dụ minh họa & Quy trình thực hành (Examples & Illustrations) {T-03.5}
│   ├── 5.1 Ví dụ 3.1: Phân tích trạng thái lai hóa (sp^3, sp^2, sp), đếm liên kết σ/π và xét đồng phân hình học (CH_4, C_2H_4, C_2H_2) {T-03.5.1} [SRC: S-03.2, S-03.6] (M-03.11)
│   ├── 5.2 Ví dụ 3.2: Giải thích sự co góc liên kết trên nền lai hóa sp^3 (NH_3, H_2O), đối chiếu NH_4^+ & Hệ quả độ tan dược học {T-03.5.2} [SRC: S-03.7] (M-03.12)
│   ├── 5.3 Ví dụ 3.3: Biện luận sơ đồ ô lượng tử phức chất bát diện ngoài ([FeF_6]^3-), bát diện trong ([Fe(CN)_6]^3-) và vuông phẳng ([Ni(CN)_4]^2-, Cisplatin) {T-03.5.3} [SRC: S-03.3] (M-03.13)
│   ├── 5.4 Quy trình chuẩn 4 bước & Sơ đồ thuật toán xác định trạng thái lai hóa orbital (Mermaid) {T-03.5.4} [SRC: S-03.3, S-03.8] (M-03.14)
│   └── 5.5 Minh họa trực quan sự xen phủ orbital (σ, π, δ), định hướng AO lai hóa & liên kết 3c–2e (Placeholders) {T-03.5.5} (M-03.15)
├── 6. Tóm tắt chương (Chapter Summary) {T-03.6}
│   ├── 6.1 Tóm tắt nội dung trọng tâm & Quy tắc ghi nhớ nhanh {T-03.6.1} [SRC: S-03.5, S-03.8] (M-03.16)
│   └── 6.2 Bảng tổng hợp công thức, quy tắc nhận diện và mối quan hệ khái niệm {T-03.6.2} (M-03.17)
├── 7. Đánh giá & Bài tập tự lượng giá (Review & Assessment) {T-03.7}
│   ├── 7.1 Câu hỏi lý thuyết: Nhận biết & Thông hiểu (LO-1, LO-2) {T-03.7.1} (M-03.18)
│   ├── 7.2 Bài tập áp dụng: Xác định lai hóa, đếm liên kết σ/π & phân tích sơ đồ ô lượng tử (LO-2, LO-3) {T-03.7.2} (M-03.19)
│   ├── 7.3 Câu hỏi phân tích & Vận dụng nâng cao trong Hóa vô cơ dược (LO-3, LO-4) {T-03.7.3} (M-03.20)
│   └── 7.4 Đáp án & Hướng dẫn giải chi tiết (Answer Key) {T-03.7.4} (M-03.21)
└── 8. Tài liệu tham khảo (References) {T-03.8}
    └── 8.1 Danh mục tài liệu tham khảo & Đọc thêm {T-03.8.1} (M-03.22)
```

### C.2 Kế hoạch bổ sung nội dung mới và lý do sư phạm
1. **Khung sư phạm đại học (`T-03.1`–`T-03.3`):** Bổ sung tên chương, phạm vi, kiến thức tiên quyết (cấu trúc Lewis từ Chương 1, công thức $SN = m + n$ và hình học VSEPR từ Chương 2), thời lượng học tập dự kiến và 4 chuẩn đầu ra `LO-1`..`LO-4`.
2. **Bổ sung cơ chế kích thích electron & liên kết phối trí trong VB (`T-03.4.1`) và phần trăm đặc tính $s/p$ (`T-03.4.3`):** Giải thích vì sao $Be$ ($2s^2$), $B$ ($2s^22p^1$), $C$ ($2s^22p^2$) tạo được 2, 3, 4 liên kết cộng hóa trị và vì sao $N$ trong $NH_3$ dùng cặp electron tự do trên AO lai hóa $sp^3$ xen phủ với AO $1s$ trống của $H^+$ tạo $NH_4^+$; đồng thời định lượng tỷ lệ đặc tính $s/p$ ($50\%, 33,3\%, 25\%$) như đã hứa tại `carryover_latest.md`.
3. **Hai bảng tổng hợp hệ thống hóa (`Bảng 3.1` tại `T-03.4.2` và `Bảng 3.2` tại `T-03.4.4`):** Nguồn `D-03` có 0 bảng (`I-03.15`). Việc lập bảng đối chiếu $\sigma, \pi, \delta$ và bảng tổng hợp 7 kiểu lai hóa ($sp, sp^2, sp^3, sp^3d, sp^3d^2, dsp^2, d^2sp^3$) giúp sinh viên nắm bắt toàn bộ cấu trúc chương trong một cái nhìn tổng thể.
4. **Ví dụ giải mẫu 3.3 về sơ đồ ô lượng tử phức chất (`T-03.5.3`):** Nguồn `S-03.3` nêu 4 phức chất quan trọng ($[FeF_6]^{3-}, [Fe(CN)_6]^{3-}, [Ni(CN)_4]^{2-}, cis\text{-}[Pt(NH_3)_2Cl_2]$) nhưng chưa vẽ sơ đồ phân bố electron trong các ô lượng tử $(n-1)d, ns, np, nd$. Ví dụ 3.3 hướng dẫn từng bước cách viết cấu hình ion trung tâm ($Fe^{3+}\ d^5$, $Ni^{2+}/Pt^{2+}\ d^8$) và xác định từ tính (số electron độc thân) để chuẩn bị cho Chương 6.
5. **Sơ đồ thuật toán Mermaid (`T-03.5.4`), khung giữ chỗ hình vẽ (`T-03.5.5`) và bộ 10 câu hỏi/bài tập tự lượng giá (`T-03.7`):** Khắc phục triệt để việc nguồn thiếu hình minh họa và bài tập kiểm tra đánh giá.

### C.3 Rủi ro về độ sâu kiến thức (Depth Risks) & Biện pháp kiểm soát
- **Rủi ro 1 (Ký hiệu tổ hợp orbital gây nhầm lẫn — `I-03.03`):** Nguồn viết `$1s + 1p$`, `$1s + 2p$`, `$1s + 3p$`. *Biện pháp:* Sửa lại cách trình bày rõ ràng thành `1 AO $ns$ + 1 AO $np \rightarrow 2$ AO lai hóa $sp$` (hoặc `1 orbital $s$ + 3 orbital $p \rightarrow 4$ orbital lai hóa $sp^3$`), giữ nguyên bản chất toán học nhưng loại bỏ nguy cơ nhầm với số lượng tử chính $n=1, 2, 3$.
- **Rủi ro 2 (Phát biểu chưa chính xác về đồng phân *cis/trans* của $C_2H_4$ — `I-03.08`, `V-03.04`):** Nguồn ghi `$C_2H_4$ phẳng (có đồng phân cis/trans)`. *Biện pháp:* Bảo toàn ví dụ $C_2H_4$ của nguồn nhưng diễn đạt chính xác rằng sự cản trở quay tự do quanh liên kết đôi $\text{C=C}$ ($\sigma + \pi$) giữ khung phân tử phẳng cứng nhắc, là điều kiện cần để xuất hiện đồng phân hình học *cis–trans* ở các dẫn xuất thế bất đối xứng (như $CHCl=CHCl$) cũng như đối chiếu với đồng phân *cis* trong phức chất vuông phẳng $cis\text{-}[Pt(NH_3)_2Cl_2]$ (Cisplatin).
- **Rủi ro 3 (Thuật ngữ phức chất xuất hiện sớm và tuân thủ `DOMAIN_RULES` với Cisplatin — `I-03.11`, `V-03.02`, `V-03.03`):** Nguồn nhắc đến `trường mạnh`, `Phức spin cao`, `phức spin thấp` và `thuốc chống ung thư Cisplatin`. *Biện pháp:* Giải thích ngắn gọn ý nghĩa ghép đôi electron của phối tử trường mạnh ($CN^-, NH_3$) so với phối tử trường yếu ($F^-$) kèm liên kết chéo sang Chương 6; đối với Cisplatin, giữ đúng tên INN (`cisplatin`) và thông tin "thuốc chống ung thư" có trong nguồn, tuyệt đối không thêm liều lượng, chỉ định cụ thể, độc tính thận hay thông số dược động học theo `DOMAIN_RULES`.

### C.4 Đối chiếu dung lượng nguồn và dung lượng kế hoạch
- **Dung lượng nguồn (`D-03`):** 1.321 từ; 0 bảng; 0 hộp công thức riêng; 2 hộp ví dụ; 1 hộp ghi nhớ; 0 câu hỏi bài tập.
- **Dung lượng kế hoạch (`ch03_draft.md`):** ~3.500 – 4.000 từ (đáp ứng `TARGET_LENGTH_PER_CHAPTER: not shorter than source; no upper limit`).
- **Thời lượng học tập ước tính (`STUDY_TIME_RULE`):** Với ~2.000–2.200 từ nội dung lý thuyết/ví dụ chính và 10 câu hỏi/bài tập tự lượng giá → $1\text{ giờ } 25\text{ phút}$ đọc hiểu lý thuyết + $40\text{ phút}$ làm bài tập $\approx 2,0\text{ giờ}$.

### C.5 Dự thảo Chuẩn đầu ra Học tập (Draft Learning Objectives)
- **`LO-1` (Kiến thức – Nhận biết & Thông hiểu):** Phát biểu được các luận điểm cơ bản của thuyết Liên kết Hóa trị (VB: sự xen phủ AO, ghép đôi spin đối song song $\uparrow\downarrow$, nguyên lý xen phủ cực đại Pauling, tính định hướng và tính bão hòa) và phân biệt được bản chất cơ học lượng tử, tính đối xứng trục/mặt phẳng nút cùng độ bền tương đối của liên kết $\sigma$, $\pi$ và $\delta$.
- **`LO-2` (Kỹ năng – Xác định lai hóa & Đếm liên kết):** Giải thích được bản chất của sự lai hóa orbital, tính được phần trăm đặc tính $s/p$, kết nối được số phối trí lập thể ($SN = m + n$) với trạng thái lai hóa ($sp, sp^2, sp^3, sp^3d, sp^3d^2$) và xác định chính xác số lượng liên kết $\sigma, \pi$ trong các phân tử và ion vô cơ/hữu cơ tiêu biểu.
- **`LO-3` (Phân tích – Lai hóa phân lớp $d$ & Lập thể hóa dược):** Vận dụng được mô hình lai hóa có sự tham gia của phân lớp $d$ để phân biệt phức chất vuông phẳng $dsp^2$ ($[Ni(CN)_4]^{2-}$, $cis\text{-}[Pt(NH_3)_2Cl_2]$ – Cisplatin), phức bát diện ngoài $sp^3d^2$ ($[FeF_6]^{3-}$, spin cao) và phức bát diện trong $d^2sp^3$ ($[Fe(CN)_6]^{3-}$, spin thấp), đồng thời giải thích được cơ sở xuất hiện đồng phân hình học *cis–trans*.
- **`LO-4` (Năng lực đánh giá mô hình):** Phân tích được ưu điểm trực quan và 3 hạn chế chí mạng của thuyết VB (bất lực trước tính thuận từ của $O_2$, màu sắc/quang phổ phức chất kim loại chuyển tiếp, và liên kết cầu đa tâm thiếu electron $3c\text{–}2e$ trong $B_2H_6$), từ đó nhận biết khi nào cần chuyển sang thuyết Orbital Phân tử (MO – Chương 4) hoặc thuyết Trường phối tử (Chương 6).

### C.6 Kế hoạch kiểm tra đánh giá (Assessment Plan theo cấp độ nhận thức)

| Tiểu mục T7 | Cấp độ nhận thức | Chuẩn đầu ra được phủ | Số lượng & Dạng câu hỏi dự kiến |
|---|---|---|---|
| `T-03.7.1` | Knowledge & Comprehension (Nhận biết & Thông hiểu) | `LO-1`, `LO-2` | 4 câu hỏi (trắc nghiệm & tự luận ngắn): nguyên lý xen phủ cực đại, mặt phẳng nút của liên kết $\sigma/\pi/\delta$, điều kiện năng lượng của lai hóa và quy ước trục liên nhân $Oz$. |
| `T-03.7.2` | Application (Vận dụng) | `LO-2`, `LO-3` | 3 bài tập tính toán & xác định cấu trúc: (1) xác định trạng thái lai hóa từ $SN$, phần trăm đặc tính $s/p$ và góc liên kết của $BeCl_2, BF_3, CH_4, NH_4^+, SO_3, SO_4^{2-}, CO_3^{2-}, PCl_5$; (2) đếm tổng số liên kết $\sigma$ và $\pi$ cùng kiểu xen phủ cụ thể trong $CO_2, C_2H_4, C_2H_2, HCN, SO_2$; (3) lập sơ đồ ô lượng tử cho $[FeF_6]^{3-}$ và $[Fe(CN)_6]^{3-}$. |
| `T-03.7.3` | Analytical & Advanced (Phân tích & Vận dụng nâng cao) | `LO-3`, `LO-4` | 3 câu hỏi phân tích chuyên sâu: (1) giải thích cấu trúc vuông phẳng $dsp^2$ của thuốc chống ung thư Cisplatin ($cis\text{-}[Pt(NH_3)_2Cl_2]$) và vì sao ở Chương 2 không nên dùng máy móc công thức VSEPR cho ion $Pt^{2+}\ (d^8)$; (2) phân tích bản chất liên kết bốn ($1\sigma + 2\pi + 1\delta$) trong $[Re_2Cl_8]^{2-}$; (3) chứng minh vì sao thuyết VB thất bại khi giải thích từ tính của $O_2$ và liên kết trong $B_2H_6$. |
| `T-03.7.4` | Answer Key | `LO-1`..`LO-4` | Hướng dẫn giải chi tiết từng bước (10/10 câu) kèm phép kiểm tra tổng số electron hóa trị và tổng số liên kết. |

### C.7 Ứng viên Thuật ngữ (Glossary Candidates) & Chuẩn hóa Ký hiệu

| Thuật ngữ / Đại lượng | Dạng viết trong nguồn (`D-03`) | Dạng chuẩn hóa cho S3 & Glossary | Ghi chú chuẩn hóa |
|---|---|---|---|
| Thuyết Liên kết Hóa trị | `Thuyết VB (Heitler - London - Pauling)` | **Thuyết liên kết hóa trị (Valence Bond Theory – VB)** | Nêu đầy đủ tên tiếng Việt và tiếng Anh ở lần đầu sử dụng (`T-03.1.1`, `T-03.4.1`). |
| Orbital nguyên tử | `orbital nguyên tử (AO)`, `các AO nguyên tử` | **Orbital nguyên tử (Atomic Orbital – AO)** | Không viết lặp "AO nguyên tử" (`I-03.10`). |
| Nguyên lý xen phủ cực đại | `Nguyên lý xen phủ cực đại (Pauling)` | **Nguyên lý xen phủ cực đại (Maximum Overlap Principle)** | Định nghĩa chuẩn tại `T-03.4.1`. |
| Liên kết Sigma, Pi, Delta | `Liên kết Sigma ($\sigma$)`, `Liên kết Pi ($\pi$)`, `Liên kết Delta ($\delta$)`, `liên kết σ/π` | **Liên kết sigma ($\sigma$)**, **Liên kết pi ($\pi$)**, **Liên kết delta ($\delta$)** | Luôn đặt ký hiệu $\sigma, \pi, \delta$ trong MathJax `$…$` (`I-03.12`). |
| Mặt phẳng nút | `mặt phẳng nút (nơi mật độ electron bằng 0)` | **Mặt phẳng nút (Nodal Plane)** | Nêu rõ số mặt phẳng nút đi qua trục liên nhân: $\sigma$ (0), $\pi$ (1), $\delta$ (2). |
| Lai hóa orbital | `Thuyết Lai hóa Orbital (Orbital Hybridization)` | **Sự lai hóa orbital (Orbital Hybridization)** và **Orbital lai hóa (Hybrid Orbital)** | Liên hệ trực tiếp số AO lai hóa với Số phối trí lập thể $SN = m + n$ (`carryover_latest.md`). |
| Sơ đồ tổ hợp orbital | `$1s + 1p \rightarrow 2$`, `$1s + 2p \rightarrow 3$`, `$1s + 3p \rightarrow 4$` | `1 AO $ns$ + $k$ AO $np \rightarrow (1+k)$ AO lai hóa $sp^k$` | Tách rõ con số chỉ số lượng orbital khỏi ký hiệu phân lớp lượng tử (`I-03.03`). |
| Phức bát diện ngoài / bát diện trong | `Lai hóa $sp^3d^2$ (Bát diện ngoài) vs $d^2sp^3$ (Bát diện trong)` | **Phức bát diện ngoài (Outer-orbital complex – $sp^3d^2$)** và **Phức bát diện trong (Inner-orbital complex – $d^2sp^3$)** | Ghi rõ sự tham gia của hai orbital $d_{z^2}$ và $d_{x^2-y^2}$ thuộc phân lớp $nd$ hoặc $(n-1)d$. |
| Liên kết 3 tâm 2 electron | `liên kết cầu hydro 3 tâm 2 electron ($3c-2e$, liên kết chuối)` | **Liên kết ba tâm hai electron (Three-center two-electron bond – $3c\text{–}2e$ / Banana bond)** | Định nghĩa rõ trong mục hạn chế của thuyết VB (`T-03.4.6`). |

### C.8 Liên kết chéo giữa các chương (Cross-References)
- **Liên kết ngược về Chương 1 (`D-01`):**
  - Tham chiếu `T-01.4.1` (Độ dài liên kết $r$, năng lượng liên kết $E_{lk}$ và bậc liên kết) khi so sánh độ bền của liên kết $\sigma$ với liên kết $\pi$ và sự rút ngắn độ dài liên kết từ $C\text{–}C$ ($sp^3$) $\to C\text{=}C$ ($sp^2$) $\to C\equiv C$ ($sp$).
  - Tham chiếu `T-01.4.4`–`T-01.4.6` (Công thức Lewis, cộng hưởng trong $CO_3^{2-}, SO_3, SO_4^{2-}$ và các phân tử thiếu bát tử $BeCl_2, BF_3$ cũng như mở rộng bát tử $PCl_5, SF_6$).
- **Liên kết ngược về Chương 2 (`D-02`) — Hoàn thành 3 lời hứa tại `carryover_latest.md`:**
  - Tham chiếu `T-02.4.2` để giải thích bản chất cơ học lượng tử của liên kết $\sigma$ (tạo bộ khung không gian phân tử và quyết định $m$ trong $AX_mE_n$) và liên kết $\pi$ (xen phủ bên đi kèm liên kết $\sigma$ trong liên kết bội).
  - Tham chiếu `T-02.4.3`–`T-02.4.4` để ánh xạ $SN = 2, 3, 4, 5, 6$ sang $sp, sp^2, sp^3, sp^3d, sp^3d^2$ và giải thích dứt điểm vì sao các phức chất vuông phẳng $d^8$ ($[PtCl_4]^{2-}, [Ni(CN)_4]^{2-}$, Cisplatin) có cấu trúc vuông phẳng nhờ lai hóa $dsp^2$ chứ không phải $AX_4E_2$.
  - Tham chiếu `T-02.4.5` để cung cấp cơ sở định lượng của Quy tắc Bent thông qua phần trăm đặc tính $s$ và $p$ của orbital lai hóa.
- **Liên kết xuôi sang Chương 4 (`D-04` — Thuyết Orbital Phân tử MO):**
  - Từ 3 thất bại chí mạng của thuyết VB tại `T-03.4.6` (đặc biệt là tính thuận từ của $O_2$ và liên kết đa tâm $B_2H_6$), đặt câu hỏi mở dẫn trực tiếp sang phương pháp tổ hợp tuyến tính LCAO–MO ở Chương 4.
- **Liên kết xuôi sang Chương 6 & 7 (`D-06`, `D-07` — Hóa học Phối trí & Đồng phân Phức chất):**
  - Từ mục `T-03.4.5` (lai hóa $dsp^2, sp^3d^2, d^2sp^3$ và thuốc Cisplatin), đặt liên kết xuôi sang thuyết Trường tinh thể / Trường phối tử (giải thích sự tách mức năng lượng $\Delta_o$ và màu sắc phức chất ở Chương 6) cùng đồng phân hình học *cis/trans* của phức chất kim loại ở Chương 7.

---

## D. Verification Items Carried Forward from Audit

Toàn bộ 7 hạng mục trong Verification Queue (`V-03.01` đến `V-03.07`) từ `01_audit/ch03_audit.md` được gán vào các mục đích `T-03.x.y` cụ thể:

| V-ID | Nội dung cần kiểm chứng | Loại | Mục T-ID tiếp nhận | Kế hoạch xử lý trong S3 |
|---|---|---|---|---|
| `V-03.01` | Cấu trúc liên kết bốn ($1\sigma + 2\pi + 1\delta$) trong ion phức $[Re_2Cl_8]^{2-}$ và các orbital $5d$ tham gia | theory / structure | `T-03.4.2`, `T-03.7.3` | Giữ nguyên ví dụ $[Re_2Cl_8]^{2-}$ của nguồn; bổ sung kiểu xen phủ $\pi$ $d\text{–}d$ ($d_{xz}, d_{yz}$) và làm rõ vai trò của $d_{xy}\text{–}d_{xy}$ tạo liên kết $\delta$; gắn thẻ kiểm chứng. |
| `V-03.02` | Trạng thái lai hóa $dsp^2$ và cấu trúc vuông phẳng của các phức chất $d^8$: $[Ni(CN)_4]^{2-}$ và $cis\text{-}[Pt(NH_3)_2Cl_2]$ (Cisplatin) | theory / application | `T-03.4.5`, `T-03.5.3` | Giữ đúng thông tin nguồn; vẽ sơ đồ ô lượng tử $(n-1)d^8$; tuân thủ nghiêm ngặt `DOMAIN_RULES` (không thêm liều lượng, phác đồ hay dữ liệu lâm sàng); gắn thẻ kiểm chứng. |
| `V-03.03` | Phân biệt phức bát diện ngoài ($sp^3d^2$, spin cao: $[FeF_6]^{3-}$) và phức bát diện trong ($d^2sp^3$, spin thấp: $[Fe(CN)_6]^{3-}$) cho ion $Fe^{3+}$ ($3d^5$) | theory / example | `T-03.4.5`, `T-03.5.3` | Nêu rõ 2 AO $d_{z^2}, d_{x^2-y^2}$ tham gia lai hóa; trình bày sơ đồ ô lượng tử $3d^5$ với 5 electron độc thân ($[FeF_6]^{3-}$) và 1 electron độc thân ($[Fe(CN)_6]^{3-}$); gắn thẻ kiểm chứng. |
| `V-03.04` | Điều kiện xuất hiện đồng phân hình học *cis–trans* do sự cản trở quay tự do quanh liên kết $\pi$ (trường hợp $C_2H_4$ ở `S-03.6`) | concept / accuracy | `T-03.4.2`, `T-03.5.1` | Làm rõ rằng khung phẳng cứng nhắc của $C_2H_4$ không quay tự do quanh trục C=C là nguyên nhân sinh ra đồng phân *cis–trans* ở các dẫn xuất thế bất đối xứng ($abC=Cab$); gắn thẻ kiểm chứng. |
| `V-03.05` | Số liệu góc liên kết trong chương: $180^\circ$ ($sp$), $120^\circ$ ($sp^2$), $109^\circ\,28^{\prime}$ / $109,5^\circ$ ($sp^3$), $90^\circ$ ($dsp^2$, bát diện), $104,5^\circ$ ($H_2O$), $107,3^\circ$ ($NH_3$) | number | `T-03.4.4`, `T-03.5.2` | Giữ đúng số liệu của nguồn (đồng bộ với Chương 1–2); gắn thẻ kiểm chứng cho các số đo góc thực nghiệm không kèm nguồn trích dẫn. |
| `V-03.06` | Liên kết cầu hydro 3 tâm 2 electron ($3c\text{–}2e$, liên kết chuối) trong phân tử Diborane ($B_2H_6$) và tính thuận từ của $O_2$ lỏng | theory / fact | `T-03.4.6` | Giữ nguyên lập luận của nguồn; giải thích rõ tổng số 12 electron hóa trị của $B_2H_6$ và 2 electron độc thân của $O_2$ làm cầu nối sang Chương 4; gắn thẻ kiểm chứng. |
| `V-03.07` | Toàn bộ chương không có tài liệu tham khảo gốc | reference | `T-03.8.1` | Lập mục `T-03.8.1` với thẻ yêu cầu bổ sung giáo trình Hóa vô cơ Dược chuẩn từ giảng viên/người dùng. |

---

## E. Open Questions for Gate A (Câu hỏi xin ý kiến phê duyệt tại Gate A)

1. **Q1 (Bổ sung cơ chế kích thích electron, liên kết phối trí cho–nhận và phần trăm đặc tính $s/p$ — `M-03.05`, `M-03.07`):** Bạn có đồng ý để S3 bổ sung giải thích ngắn gọn về sự kích thích electron hóa trị ($Be, B, C$), cơ chế xen phủ cho–nhận (orbital trống + cặp electron tự do như trong $NH_4^+$ và phức chất) và tỷ lệ phần trăm đặc tính $s/p$ ($sp: 50\%\,s$; $sp^2: 33,3\%\,s$; $sp^3: 25\%\,s$) nhằm hoàn thành lời hứa liên kết chéo từ Chương 2 (`carryover_latest.md`)?
2. **Q2 (Chuẩn hóa ký hiệu tổ hợp orbital và phát biểu đồng phân *cis/trans* ở ví dụ $C_2H_4$ — `M-03.08`, `M-03.11`, `V-03.04`):** Bạn có đồng ý để S3: (a) sửa cách viết dễ gây nhầm lẫn `$1s + 3p$` ở `S-03.3` thành `1 AO $s$ + 3 AO $p$`, và (b) chuẩn hóa câu kết ở hộp ví dụ `S-03.6` để làm rõ rằng liên kết $\pi$ giữ khung $C_2H_4$ phẳng cứng nhắc, tạo điều kiện xuất hiện đồng phân *cis–trans* ở các dẫn xuất thế bất đối xứng ($abC=Cab$)?
3. **Q3 (Tách tiểu mục phức chất `T-03.4.5` và bổ sung Ví dụ 3.3 vẽ sơ đồ ô lượng tử — `M-03.09`, `M-03.13`, `V-03.02`, `V-03.03`):** Bạn có đồng ý tách phần lai hóa phân lớp $d$ trong phức chất ($dsp^2, sp^3d^2, d^2sp^3$) thành tiểu mục `T-03.4.5` và bổ sung **Ví dụ 3.3** (`T-03.5.3`) trình bày chi tiết sơ đồ ô lượng tử cho 4 phức chất của nguồn ($[FeF_6]^{3-}, [Fe(CN)_6]^{3-}, [Ni(CN)_4]^{2-}, cis\text{-}[Pt(NH_3)_2Cl_2]$ – Cisplatin, tuân thủ nghiêm ngặt `DOMAIN_RULES`)?
4. **Q4 (Bổ sung 2 bảng tổng hợp, 1 sơ đồ Mermaid và 4 khung giữ chỗ `[FIGURE]` — `M-03.06`, `M-03.08`, `M-03.14`, `M-03.15`):** Do file gốc `D-03` có 0 bảng và 0 hình vẽ, bạn có đồng ý bổ sung `Bảng 3.1` (so sánh liên kết $\sigma, \pi, \delta$), `Bảng 3.2` (hệ thống hóa các kiểu lai hóa gắn với $SN$), 1 sơ đồ thuật toán Mermaid (`T-03.5.4`) và 4 khung giữ chỗ hình vẽ chuẩn tại `T-03.5.5`?
5. **Q5 (Dung lượng dự kiến và bộ bài tập tự lượng giá `T7` — `M-03.18`–`M-03.21`):** Bạn đồng ý với kế hoạch xây dựng 10 câu hỏi/bài tập tự lượng giá kèm đáp án giải chi tiết từng bước tại `T7` (phủ đủ `LO-1`..`LO-4`), nâng tổng dung lượng chương từ 1.321 từ lên khoảng 3.500–4.000 từ?

---

## F. Not verified / limitations

- **Phạm vi dữ liệu:** Bản kế hoạch ánh xạ này chỉ dựa trên `00_source_original/ch03_doc-hvc-3.html` (`D-03`), báo cáo `01_audit/ch03_audit.md`, ngữ cảnh kế thừa `_state/carryover_latest.md` và bảng thuật ngữ `D-09`. File nguồn trong `00_source_original/` được giữ nguyên trạng tuyệt đối (READ-ONLY).
- **Số liệu thực nghiệm & Tài liệu tham khảo:** Các giá trị góc liên kết ($180^\circ, 120^\circ, 109^\circ\,28^{\prime} / 109,5^\circ, 90^\circ, 104,5^\circ, 107,3^\circ$) và thông tin cấu trúc phức chất ($[Re_2Cl_8]^{2-}$, $[Ni(CN)_4]^{2-}$, $cis\text{-}[Pt(NH_3)_2Cl_2]$, $[FeF_6]^{3-}$, $[Fe(CN)_6]^{3-}$, $B_2H_6$) không có tài liệu tham khảo gốc trong `D-03`; tất cả đã được đưa vào mục D (`V-03.01`–`V-03.07`).
- **Kiểm tra cơ học:** Độ phủ S-ID (8/8 S-ID = 100%, 0 S-ID bị sót) và thống kê thẻ trong file ma trận được kiểm tra trực tiếp bằng hai công cụ `_tools/check_coverage.py` và `_tools/check_tags.py`, xuất báo cáo vào `_state/checks/ch03_s2_coverage.md` và `_state/checks/ch03_s2_tags.md`.
- **Giới hạn giai đoạn:** Dừng ngay tại GATE A theo quy tắc R9 và mục 7.2; chưa thực hiện viết bản thảo Stage S3.

---

GATE A: STOP. Awaiting user approval of the Content Mapping Matrix. Do not begin the transformation.
