# ch04_audit.md — S1 Audit · Chương 04 (D-04)

**Môn:** Hóa vô cơ dược · **Stage:** S1 Audit · **Ngày:** 2026-11-07  
**Nguồn audit:** `00_source_original/ch04_doc-hvc-4.html` (D-04) — READ-ONLY, không sửa.  
**Ngữ cảnh đối chiếu:** `00_config.md`, `00_source_original/MANIFEST.md`, `_state/carryover_latest.md`, `_state/glossary_running.md`, `_state/verification_list_running.md`, `01_audit/ch03_audit.md`, `03_chapters/ch03_draft.md` (chỉ đọc phần cầu nối), `00_source_original/refs/D-09_doc-hvc-9.html`.  
**Nguyên tắc:** Chỉ phân tích và lập hồ sơ truy vết; không viết lại, không sửa lỗi, không tự bổ sung kiến thức học thuật.

---

## A. Document Inventory

| D-ID | File | Type | Chapter | Slug gốc | Num | Lines | Approx. words | h4 / h5 | Formula boxes | Example boxes | Callouts | Tables | Figures/Images | References |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| D-04 | `00_source_original/ch04_doc-hvc-4.html` | chapter-source (HTML fragment, MathJax) | 04 | doc-hvc-4 | 4 | 96 | 1.443 (đếm bằng script, khớp MANIFEST 1.443) | 6 / 0 | 4 | 2 | 2 | 0 | 0 / 0 | 0 |

**Đặc điểm kỹ thuật (kiểm tra bằng script Python):**
- **Mã hóa & dung lượng:** UTF-8; 12.169 byte; 96 dòng; thẻ HTML đóng/mở cân bằng (`6 <h4>`, `8 <ul>`, `1 <ol>`, `23 <li>`, `6 <p>`, `12 <div>`, `31 <strong>`, `10 <br>`).
- **Biểu thức toán/hóa (MathJax):** 6 khối công thức hiển thị riêng (`$$…$$`, tức 12 dấu `$$`), 124 biểu thức inline `$…$`; tổng 260 dấu `$`.
- **Cấu trúc tiêu đề:** File bắt đầu trực tiếp bằng `<h4>1. Bản chất Thuyết MO & Phương pháp LCAO</h4>`; không có `<h1>/<h2>/<h3>` và không có tên chương bên trong file (tên chương chỉ nằm ở `MANIFEST.md`: *Chuyên đề 4: Thuyết Orbital Phân tử (Molecular Orbital - MO) & Phân tích Năng lượng LCAO*).
- **Hộp nội dung:** 4 `formula-box` (dòng 5, 26, 47, 61); 2 `example-box` (dòng 81, 87); 2 `callout` (dòng 48 — "Lời giải chấn động… Oxy", dòng 94 — "Cách nhớ").
- **Bảng biểu & Hình vẽ:** 0 bảng (`<table>`), 0 hình vẽ/sơ đồ (`<img>`, `<svg>`, `<figure>`).
- **Tài liệu tham khảo:** 0 trích dẫn (`http`, `doi`, `ISBN`, "Tài liệu tham khảo", "NXB", "giáo trình" đều bằng 0). Trạng thái: **none present**.
- **Phân bổ số từ theo 9 đơn vị mục/hộp (tổng = 1.443 từ):** `S-04.1` (153) + `S-04.2` (186) + `S-04.3` (303) + `S-04.4` (319) + `S-04.5` (180) + `S-04.6` (72) + `S-04.7` (97) + `S-04.8` (68) + `S-04.9` (65) = 1.443 từ.

> **Ghi chú dung lượng:** Brief giao việc ghi "~1.373 từ"; phép đếm cơ học trên file cho **1.443 từ** (khớp `MANIFEST.md`). Con số 1.373 được xem là ước lượng cũ; mọi tính toán trong audit này dùng 1.443.

---

## B. Source Section Register

| S-ID | D-ID | chapter | heading path | location | content types | approx. words | ≤20-word summary |
|---|---|---|---|---|---|---|---|
| S-04.1 | D-04 | 04 | [tên chương theo MANIFEST] › `1. Bản chất Thuyết MO & Phương pháp LCAO` | dòng 1–9 | definition; theory/principle; equation/model | 153 | Quan điểm hạt nhân đa tâm; hàm sóng MO dựng bằng tổ hợp tuyến tính AO (LCAO) liên kết và phản liên kết. |
| S-04.2 | D-04 | 04 | `2. Ba điều kiện tiên quyết để tổ hợp AO thành MO có hiệu quả` | dòng 10–19 | theory/principle; equation/model; example (inline) | 186 | Ba điều kiện năng lượng, xen phủ và đối xứng để tổ hợp AO thành MO hiệu quả. |
| S-04.3 | D-04 | 04 | `3. Phân loại MO, Bậc liên kết & Từ tính` | dòng 20–42 | definition; theory/principle; equation/model; example (inline) | 303 | Phân loại MO liên kết/phản liên kết/không liên kết; công thức bậc liên kết; tiêu chí thuận từ – nghịch từ. |
| S-04.4 | D-04 | 04 | `4. Giản đồ năng lượng MO phân tử đồng hạch chu kỳ 2 ($A_2$)` | dòng 43–71 | theory/principle; equation/model; example (inline); case (O₂, N₂) | 319 | Hai trật tự mức năng lượng MO (có/không tương tác $2s-2p$); cấu hình, bậc liên kết và từ tính của $O_2$, $N_2$. |
| S-04.5 | D-04 | 04 | `5. Phân tử dị hạch & Thuyết Vân đạo biên (Frontier Orbitals HOMO - LUMO)` | dòng 72–78 | theory/principle; mechanism/process; application (case CO–hemoglobin) | 180 | Giản đồ MO của $CO$; HOMO trên C cho–nhận với $Fe^{2+}$ của hemoglobin; độc tính $CO$. |
| S-04.6 | D-04 | 04 | `Ý nghĩa và tác dụng` (không đánh số) | dòng 79–80 | other (summary); application | 72 | Tổng kết vai trò thuyết MO với bậc liên kết, từ tính, hấp thụ ánh sáng và HOMO/LUMO. |
| S-04.7 | D-04 | 04 | `Ý nghĩa và tác dụng` › [example-box: `🔎 Ví dụ — Giản đồ MO của $O_2$ (thuận từ) và $N_2$ (nghịch từ)`] | dòng 81–86 | example (illustrative / calculation) | 97 | Ví dụ cấu hình MO, bậc liên kết và từ tính của $O_2$ (thuận từ) và $N_2$ (nghịch từ). |
| S-04.8 | D-04 | 04 | `Ý nghĩa và tác dụng` › [example-box: `🔎 Ví dụ — Bậc liên kết của họ loài oxygen`] | dòng 87–93 | example (calculation) | 68 | Tính bậc liên kết cho $O_2^+$, $O_2$, $O_2^-$, $O_2^{2-}$ và quy luật thêm electron phản liên kết. |
| S-04.9 | D-04 | 04 | `Ý nghĩa và tác dụng` › [callout: `Cách nhớ`] | dòng 94–96 | other (study advice / mnemonic); theory/principle (rule of thumb) | 65 | Công thức BO, thứ tự điền electron và mẹo nhận diện thuận từ. |

**Tổng cộng:** 9 S-ID (`S-04.1` đến `S-04.9`); tổng số từ = 1.443 từ.

---

## C. Content Coverage Matrix

| chapter | Definitions | Theory | Mechanisms | Equations | Examples | Case studies | Applications | Questions/Exercises | References | Figures/Tables |
|---|---|---|---|---|---|---|---|---|---|---|
| 04 (D-04) | Present (S-04.1, S-04.3, S-04.5) | Present (S-04.1, S-04.2, S-04.3, S-04.4, S-04.5) | Partial (S-04.4 — điền electron theo Hund; S-04.5 — $\sigma$-donor/$\pi$-backbonding; không có cơ chế hình thành/tính năng lượng MO) | Partial (S-04.1 hàm sóng LCAO; S-04.2 tích phân xen phủ; S-04.3 công thức BO; thiếu điều kiện chuẩn hóa, định thức thế tục và biểu thức năng lượng MO) | Present (S-04.4 ví dụ inline; S-04.7, S-04.8 hộp ví dụ) | Partial (S-04.5 — ca $CO$–hemoglobin là ca duy nhất) | Partial (S-04.5 độc tính $CO$; S-04.6 nêu hấp thụ ánh sáng nhưng không triển khai) | Absent | Absent | Absent (0 bảng, 0 hình vẽ) |

**Ghi chú chi tiết về độ phủ:**
- **Definitions & Theory — Present (nhưng thiếu một số khái niệm nền):** Có định nghĩa MO, LCAO, MO liên kết/phản liên kết/không liên kết, bậc liên kết và thuận từ/nghịch từ; nhưng thiếu định nghĩa tường minh cho "tích phân xen phủ" (`S-04.2`), "năng lượng hiệu dụng $Z_{eff}$" (`S-04.4`), "LUMO" (`S-04.5`) và "bậc liên kết phân số" (`S-04.3` chỉ nêu giá trị, không giải thích cơ chế).
- **Mechanisms — Partial:** Có mô tả điền electron theo quy tắc Hund (`S-04.4`, `S-04.7`) và cơ chế cho–nhận của $CO$ (`S-04.5`), nhưng thiếu cơ chế hình thành MO từ tổ hợp AO (trị riêng, chuẩn hóa, trộn $s-p$) và thiếu cơ chế liên kết đa tâm $3c\text{–}2e$ trong $B_2H_6$ dù đây là câu hỏi carry-over từ Chương 03.
- **Equations — Partial:** Có 3 nhóm công thức (hàm sóng LCAO, tích phân xen phủ, bậc liên kết) và 2 trật tự mức năng lượng; **không** có điều kiện chuẩn hóa $c_A^2+c_B^2=1$, không có định thức thế tục, không có biểu thức năng lượng MO theo $\alpha,\beta,S$, không có công thức mô men từ $\mu=\sqrt{n(n+2)}\,\mu_B$.
- **Examples — Present:** Hai hộp ví dụ (`S-04.7`, `S-04.8`) và các ví dụ inline ($He_2$, $H_2^+$, $O_2^+$, $O_2^-$, $N_2$, $CO$). Tuy nhiên ví dụ trùng lặp với phần lý thuyết (`S-04.4`).
- **Case studies — Partial:** Chỉ có một ca duy nhất: $CO$ gắn hemoglobin (`S-04.5`), không có ca nào cho $O_2$ lỏng, $B_2$, $C_2$, $NO$ hay phức chất.
- **Applications — Partial:** Ứng dụng dược học duy nhất là độc tính $CO$; phần "hấp thụ ánh sáng" được nhắc ở `S-04.6` nhưng không có nội dung nào trong chương chống lưng.
- **Questions/Exercises — Absent:** 0 câu hỏi, 0 bài tập.
- **References — Absent:** 0 tài liệu tham khảo.
- **Figures/Tables — Absent:** 0 bảng và 0 hình, trong khi toàn bộ chương nói về giản đồ năng lượng MO, trật tự mức và sơ đồ xen phủ.

---

## D. Notation and Terminology Inventory

### D.1 Ký hiệu và đơn vị

| Symbol / unit | As written in source | Defined? | Location | Note |
|---|---|---|---|---|
| `MO` | `Orbital Phân tử (MO)`, `MO liên kết`, `MO phản liên kết`, `MO Không liên kết` | Yes | S-04.1, S-04.3 | Viết tắt được mở rộng đúng một lần tại `S-04.1`. |
| `LCAO` | `Phương pháp LCAO (Linear Combination of Atomic Orbitals)` | Yes | S-04.1 | Mở rộng đầy đủ tiếng Anh. |
| `\Psi_{MO}`, `\Psi`, `\Psi^*` | `$\Psi = c_A \phi_A + c_B \phi_B$`, `$\Psi^* = c_A \phi_A - c_B \phi_B$` | Partial | S-04.1 (dòng 4–5) | Không nêu điều kiện chuẩn hóa $c_A^2+c_B^2=1$; không phân biệt $c_A=c_B$ (đồng hạch) với $c_A \neq c_B$ (dị hạch). |
| `\phi_A, \phi_B` | `hàm sóng orbital nguyên tử ($\phi_A, \phi_B$)` | Yes | S-04.1 | — |
| `c_A, c_B` | `$c_A \phi_A + c_B \phi_B$` | Partial | S-04.1 | Hệ số tổ hợp chưa được định nghĩa là hệ số chuẩn hóa/trọng số đóng góp. |
| `S_{AB}` | `$S_{AB} = \int \phi_A \phi_B d\tau > 0$` | Partial | S-04.2 (dòng 13) | Không định nghĩa $d\tau$ (vi phân thể tích) và cận tích phân; không nêu miền giá trị $0 \le S \le 1$. |
| `\Delta E \le 10 - 14\text{ eV}` | `$\Delta E \le 10 - 14\text{ eV}$` | Partial | S-04.2 (dòng 12) | Ngưỡng năng lượng nêu dạng khoảng; mâu thuẫn với `$\le 12\text{ eV}$` ở `S-04.4` (`I-04.07`). |
| `z` (trục liên kết) | `quy ước chọn trục $z$ là trục liên kết` | Yes | S-04.2 (dòng 14) | Quy ước được phát biểu tường minh — tốt hơn Chương 03. |
| `\sigma, \pi, \sigma^*, \pi^*, n` | `$\sigma, \pi$`, `$\sigma^*, \pi^*$`, `MO Không liên kết ($n$)` | Yes | S-04.3 | `$n$` được định nghĩa nhưng **không dùng lại** ở bất kỳ mục nào (`I-04.12`). |
| `N_b, N_a` | `$N_b$: Tổng số electron trên các MO liên kết; $N_a$: ... phản liên kết` | Yes | S-04.3 (dòng 27) | — |
| `BO` | `$BO = \frac{N_b - N_a}{2}$` | Yes | S-04.3, S-04.8, S-04.9 | Định nghĩa đầy đủ; nhưng xung đột với định nghĩa "số cặp electron liên kết" ở Chương 01 (`G.1`). |
| `\sigma_{1s}, \sigma^*_{1s}` | `$\sigma_{1s}$`, `$\sigma^*_{1s}$` | Yes | S-04.3 (dòng 30) | Dùng cho ví dụ $He_2$. |
| `\sigma_{2s}, \sigma^*_{2s}, \sigma_{2p_z}, \pi_{2p_x}, \pi_{2p_y}, \pi^*_{2p_x}, \pi^*_{2p_y}, \sigma^*_{2p_z}` | Hai trật tự mức năng lượng đầy đủ | Yes | S-04.4 (dòng 47, 61) | Ký hiệu chuẩn; nhưng hộp ví dụ lại viết gộp `$\pi_{2p}$`, `$\pi_{2p}^*$` (`I-04.10`). |
| `KK` | `$KK\ (\sigma_{2s})^2...$` | No | S-04.4 (dòng 51, 63) | Viết tắt lõi $1s^2$ kiểu Nga/Pháp, không giải thích (`I-04.09`). |
| `Z_{eff}` | `điện tích hạt nhân hiệu dụng $Z_{eff}$` | Partial | S-04.4 (dòng 46) | Không định nghĩa, không nêu giá trị. |
| `A_2` | `phân tử đồng hạch chu kỳ 2 ($A_2$)` | Yes | S-04.4 (heading) | Ký hiệu tổng quát cho phân tử hai nguyên tử đồng hạch. |
| `E_{lk}` | `$E_{lk} \approx 945\text{ kJ/mol}$` | Partial | S-04.4 (dòng 65) | Ký hiệu không được định nghĩa trong chương; kế thừa từ Chương 01 (`T-01.4.1`). |
| `\chi` | `Độ âm điện $\chi(O) > \chi(C)$` | Yes | S-04.5 | Kế thừa Chương 01. |
| `HOMO`, `LUMO` | `HOMO (Highest Occupied Molecular Orbital)`, `LUMO ($\pi^*$)` | Partial | S-04.5 | HOMO được mở rộng; **LUMO không được định nghĩa** (`I-04.11`). |
| `\sigma`-donor, `\pi`-backbonding | `chất cho cặp electron ($\sigma$-donor)`, `nhận mật độ electron phản hồi ($\pi$-backbonding)` | Partial | S-04.5 | Thuật ngữ tiếng Anh chưa có tương đương Việt chuẩn; chưa giải thích bản chất orbital. |
| `\uparrow\uparrow`, `\uparrow\downarrow` | `($\uparrow \ \uparrow$)`, `($\uparrow\downarrow$)` | Yes | S-04.3, S-04.4 | Biểu diễn spin song song/đối song. |
| `0,5; 1,5; 2,5` | `$0,5; 1,5; 2,5$` | Yes | S-04.3, S-04.8 | Dùng dấu phẩy thập phân chuẩn tiếng Việt — nhất quán với Chương 01–03. |
| `Hb` | `liên kết $Hb-O_2$` | No | S-04.5 | Viết tắt hemoglobin không được mở rộng trong văn bản. |
| `Fe^{2+}` | `orbital $d$ trống của $Fe^{2+}$ trong Hemoglobin` | Yes | S-04.5 | — |

### D.2 Thuật ngữ

| Term | As written in source | Defined? | Location | Note |
|---|---|---|---|---|
| Thuyết Orbital Phân tử (MO) | `Thuyết MO`, `Thuyết Orbital Phân tử` | Partial | MANIFEST, S-04.1 | Tên đầy đủ tiếng Việt/Anh chỉ có ở `MANIFEST.md`; trong file chủ yếu viết tắt `Thuyết MO`. |
| Phương pháp LCAO | `Phương pháp LCAO (Linear Combination of Atomic Orbitals)` | Yes | S-04.1 | — |
| Quan điểm hạt nhân đa tâm | `Quan điểm hạt nhân đa tâm` | Yes | S-04.1 | Định nghĩa ngắn gọn, đủ dùng. |
| Orbital phân tử liên kết / phản liên kết | `MO Liên kết ($\sigma, \pi$)`, `MO Phản liên kết ($\sigma^*, \pi^*$)` | Yes | S-04.3 | Mô tả năng lượng, mật độ electron, mặt phẳng nút. |
| Orbital phân tử không liên kết | `MO Không liên kết ($n$)` | Yes | S-04.3 | Định nghĩa nhưng không có ví dụ/ứng dụng (`I-04.12`). |
| Bậc liên kết (Bond Order – BO) | `Công thức Bậc liên kết (Bond Order - $BO$)` | Yes | S-04.3 | Cho phép giá trị bán nguyên; chưa giải thích vì sao (`I-04.19`). |
| Bậc liên kết phân số | `$BO$ có thể nhận giá trị bán nguyên ($0,5; 1,5; 2,5$)` | Partial | S-04.3 (dòng 31) | Chỉ nêu giá trị, không giải thích cơ chế/ý nghĩa electron phi định xứ — đây là câu hỏi carry-over (b). |
| Thuận từ (Paramagnetic) | `Thuận từ (Paramagnetic)` | Yes | S-04.3 | Có ≥1 electron độc thân; bị hút bởi từ trường ngoài. |
| Nghịch từ (Diamagnetic) | `Nghịch từ (Diamagnetic)` | Yes | S-04.3 | Toàn bộ electron ghép đôi; bị đẩy nhẹ. |
| Giản đồ năng lượng MO | `Giản đồ năng lượng MO` | Partial | S-04.4 (heading) | Không định nghĩa cách đọc/trục năng lượng. |
| Tương tác $2s-2p$ / nghịch đảo năng lượng | `Có tương tác $2s - 2p$ (Hiện tượng nghịch đảo năng lượng ...)` | Partial | S-04.4 (dòng 59) | Hiện tượng được nêu tên nhưng cơ chế diễn đạt mơ hồ (`I-04.25`). |
| Phân tử đồng hạch / dị hạch | `phân tử đồng hạch chu kỳ 2`, `Phân tử dị hạch` | Partial | S-04.4, S-04.5 | "Dị hạch" chỉ được minh họa bằng $CO$, không có nguyên tắc chung (`I-04.27`). |
| Thuyết Vân đạo biên (Frontier Orbitals) | `Thuyết Vân đạo biên (Frontier Orbitals HOMO - LUMO)` | Partial | S-04.5 (heading) | "Vân đạo" là từ Hán–Việt không dùng nhất quán với "orbital" (`I-04.11`). |
| HOMO / LUMO | `HOMO (Highest Occupied Molecular Orbital)`, `LUMO ($\pi^*$)` | Partial | S-04.5 | LUMO không được định nghĩa. |
| $\sigma$-donor / $\pi$-backbonding | `chất cho cặp electron ($\sigma$-donor)`, `nhận mật độ electron phản hồi ($\pi$-backbonding)` | Partial | S-04.5 | Thuật ngữ chuyên ngành chưa có giải nghĩa tiếng Việt. |
| Oxy lỏng | `Oxy lỏng`, `$O_2$ lỏng` | Partial | S-04.4 | Không nêu trạng thái vật lý/ký hiệu $O_2(l)$ thống nhất. |
| "Liên kết đôi gồm $1\sigma + 1\pi$" | `(Liên kết đôi gồm $1\sigma + 1\pi$)` | No | S-04.4 (dòng 53) | Mô tả kiểu VB áp lên kết quả MO; không định nghĩa cách quy đổi từ BO (`I-04.23`). |
| "Họ loài oxygen" | `Bậc liên kết của họ loài oxygen` | Yes | S-04.8 | Cụm không chuẩn học thuật; nên hiểu là dãy $O_2^{2-}, O_2^-, O_2, O_2^+$. |
| Năng lượng liên kết | `$E_{lk} \approx 945\text{ kJ/mol}$` | Partial | S-04.4 | Ký hiệu kế thừa Chương 01 nhưng không nhắc lại định nghĩa. |

---

## E. Figures, Tables, Equations Inventory

| ID | Type | Location | Content | Status / note |
|---|---|---|---|---|
| EQ-04.1 | Display equation (LCAO) | S-04.1, dòng 5 | `$\Psi = c_A \phi_A + c_B \phi_B$` (liên kết) và `$\Psi^* = c_A \phi_A - c_B \phi_B$` (phản liên kết) | Thiếu điều kiện chuẩn hóa và giả thiết $c_A=c_B$ cho đồng hạch. |
| EQ-04.2 | Display equation (overlap integral) | S-04.2, dòng 13 | `$S_{AB} = \int \phi_A \phi_B d\tau > 0$` | Không định nghĩa $d\tau$, cận tích phân, miền giá trị. |
| EQ-04.3 | Display equation (bond order) | S-04.3, dòng 26 | `$BO = \frac{N_b - N_a}{2}$` | Định nghĩa đầy đủ $N_b, N_a$. |
| EQ-04.4 | Display equation (MO order, no $2s-2p$ mixing) | S-04.4, dòng 47 | `$\sigma_{2s} < \sigma^*_{2s} < \sigma_{2p_z} < (\pi_{2p_x} = \pi_{2p_y}) < (\pi^*_{2p_x} = \pi^*_{2p_y}) < \sigma^*_{2p_z}$` | Đúng cho $O_2, F_2$ theo nguồn; không kèm hình. |
| EQ-04.5 | Inline electron configuration | S-04.4, dòng 51 | `$KK\ (\sigma_{2s})^2 (\sigma^*_{2s})^2 (\sigma_{2p_z})^2 (\pi_{2p_x})^2 (\pi_{2p_y})^2 (\pi^*_{2p_x})^1 (\pi^*_{2p_y})^1$` | Dùng `KK` không giải thích. |
| EQ-04.6 | Display equation (MO order, with $2s-2p$ mixing) | S-04.4, dòng 61 | `$\sigma_{2s} < \sigma^*_{2s} < (\pi_{2p_x} = \pi_{2p_y}) < \sigma_{2p_z} < (\pi^*_{2p_x} = \pi^*_{2p_y}) < \sigma^*_{2p_z}$` | Đúng cho $B_2, C_2, N_2$ theo nguồn; không kèm hình. |
| EQ-04.7 | Inline electron configuration | S-04.4, dòng 63 | `$KK\ (\sigma_{2s})^2 (\sigma^*_{2s})^2 (\pi_{2p_x})^2 (\pi_{2p_y})^2 (\sigma_{2p_z})^2$` | Cấu hình $N_2$; 10 electron hóa trị. |
| EQ-04.8 | Example-box equations | S-04.7, dòng 82–85 | Cấu hình rút gọn $O_2$: `$\sigma_{2s}^2\sigma_{2s}^{*2}\sigma_{2p_z}^2\pi_{2p}^4\pi_{2p}^{*2}$`; $N_2$: `$\sigma_{2s}^2\sigma_{2s}^{*2}\pi_{2p}^4\sigma_{2p_z}^2$`; các phép tính BO | Dùng ký hiệu gộp `$\pi_{2p}$` khác `S-04.4` (`I-04.10`). |
| EQ-04.9 | Example-box calculations | S-04.8, dòng 88–92 | `$BO(O_2^+)=\frac{8-3}{2}=2,5$`; `$BO(O_2)=\frac{8-4}{2}=2$`; `$BO(O_2^-)=\frac{8-5}{2}=1,5$`; `$BO(O_2^{2-})=\frac{8-6}{2}=1$` | Số học khớp; trùng với giá trị nêu ở `S-04.3`. |
| EQ-04.10 | Callout equation | S-04.9, dòng 95 | `$BO = \dfrac{N_{\text{e liên kết}} - N_{\text{e phản liên kết}}}{2}$` | Trùng `EQ-04.3`; dùng ký hiệu mô tả thay $N_b, N_a$. |
| BOX-04.1 | Callout (case) | S-04.4, dòng 48–57 | `🏆 Lời giải chấn động của Thuyết MO cho nghịch lý phân tử Oxy ($O_2$)` | Tiêu đề cảm tính; nội dung trùng `S-04.7`. |
| BOX-04.2 | Callout (mnemonic) | S-04.9, dòng 94–96 | `Cách nhớ` — công thức BO, thứ tự điền, mẹo thuận từ | Chứa phát biểu mâu thuẫn (`I-04.06`). |
| EX-04.1 | Example box | S-04.7, dòng 81–86 | `🔎 Ví dụ — Giản đồ MO của $O_2$ (thuận từ) và $N_2$ (nghịch từ)` | Không đánh số; lặp `S-04.4`. |
| EX-04.2 | Example box | S-04.8, dòng 87–93 | `🔎 Ví dụ — Bậc liên kết của họ loài oxygen` | Không đánh số; lặp giá trị `S-04.3`. |
| TAB-04.* | Tables | — | Không có | **0 bảng** trong toàn bộ file nguồn. |
| FIG-04.* | Figures | — | Không có | **0 hình vẽ** cho giản đồ MO $O_2, N_2, CO$, trộn $s-p$ và xen phủ AO. |

---

## F. Duplicated and Overlapping Content

| DUP-ID | Items involved | Type | Evidence | Note for S2 |
|---|---|---|---|---|
| DUP-04.1 | `S-04.4` (dòng 48–57), `S-04.7` (dòng 81–86) | Near-verbatim duplication (O₂/N₂) | Cùng cấu hình electron, cùng $BO=2$ / $BO=3$ và cùng kết luận thuận từ/nghịch từ | Giữ bản lý thuyết tại `S-04.4` (T4) và chuyển `S-04.7` thành ví dụ giải mẫu có các bước, không lặp nguyên văn. |
| DUP-04.2 | `S-04.3` (dòng 31), `S-04.8` (dòng 88–92) | Overlap of fractional BO values | `S-04.3` nêu $H_2^+$ (0,5), $O_2^+$ (2,5), $O_2^-$ (1,5); `S-04.8` tính lại $O_2^+$, $O_2$, $O_2^-$, $O_2^{2-}$ | `S-04.3` giữ vai trò định nghĩa; `S-04.8` nâng thành bài tập tính có kiểm tra số electron. |
| DUP-04.3 | `S-04.1`–`S-04.5` (5 đoạn "Ý nghĩa"), `S-04.6` | Summary repetition | Mỗi mục 1–5 kết thúc bằng `<p><strong>Ý nghĩa:</strong>…</p>`, rồi `S-04.6` tóm tắt lại | Giữ ý nghĩa chuyên biệt tại từng tiểu mục; MERGE `S-04.6` vào `T3` (ý nghĩa) và `T6` (tóm tắt). |
| DUP-04.4 | `S-04.3` (dòng 26), `S-04.9` (dòng 95) | Formula duplication | Cùng công thức $BO=(N_b-N_a)/2$ | `S-04.3` định nghĩa; `S-04.9` chỉ nên là mẹo ghi nhớ, không lặp công thức nguyên văn. |
| DUP-04.5 | `S-04.4` (hai trật tự mức), `S-04.9` (dòng 95) | Rule repetition | Cả hai đều mô tả thứ tự điền $\sigma_s, \sigma_s^*, \sigma_p, \pi_p$ | `S-04.9` giữ dạng mẹo ngắn; `S-04.4` giữ bảng/giản đồ đầy đủ. |
| DUP-04.6 | `S-04.5` (dòng 75), `S-04.6` (dòng 80) | Cross-section overlap (CO–Hb) | `S-04.6` nhắc lại "CO gắn mạnh hemoglobin làm cản vận chuyển oxy" | Giữ chi tiết tại `S-04.5`; `S-04.6` chỉ nêu một câu tổng kết. |
| DUP-04.7 | `D-03` (`T-03.4.6`), `D-04` (`S-04.4`, `S-04.7`) | Cross-chapter overlap (O₂ paramagnetism) | Chương 03 đã nêu $O_2$ có 2 electron độc thân và hứa giải thích bằng MO; Chương 04 giải thích lại từ đầu | Không phải lỗi: đây là **giải đáp lời hứa carry-over (a)**; S2 cần mở đầu bằng liên kết ngược `T-03.4.6` thay vì lặp như nội dung mới. |
| DUP-04.8 | `D-01` (`T-01.4.1`), `D-04` (`S-04.3`, `S-04.8`) | Cross-chapter overlap (bậc liên kết) | Chương 01 định nghĩa bậc liên kết là "số cặp electron liên kết"; Chương 04 dùng $BO=(N_b-N_a)/2$ cho giá trị bán nguyên | Xem `G.1`; S2 cần nêu rõ đây là **định nghĩa mở rộng theo MO**, không thay thế định nghĩa Lewis. |

---

## G. Cross-document Conflicts

Đối chiếu `D-04` với `D-01` (`ch01_v2.md`), `D-03` (`ch03_draft.md`, `ch03_audit.md`), `carryover_latest.md` và `D-09` (`refs/D-09_doc-hvc-9.html`). Theo `SOURCE_PRIORITY: ask me`, các xung đột dưới đây **được liệt kê, không tự giải quyết**.

1. **Định nghĩa "bậc liên kết" (`D-01` vs `D-04`) — [CONFIRMED]:**
   - `D-01` (`T-01.4.1`, `glossary_running.md`): *"Số cặp electron liên kết được chia sẻ giữa hai nguyên tử"* — một số nguyên.
   - `D-04` (`S-04.3`): `BO = (N_b − N_a)/2`, có thể bán nguyên (0,5; 1,5; 2,5).
   - **Đánh giá:** Đây là hai định nghĩa khác nền tảng (Lewis/VB vs MO). `D-01` cũng đã dùng giá trị 1,5 cho benzen và 1⅓ cho nitrate qua cộng hưởng, nên bản thân `D-01` không hoàn toàn nguyên. S2 cần trình bày `BO` theo MO như **định nghĩa mở rộng**, giữ định nghĩa Lewis làm nền; không xóa định nghĩa cũ.

2. **Lời hứa carry-over (c) — liên kết $3c\text{–}2e$ trong $B_2H_6$ (`D-03` vs `D-04`) — [CONFIRMED]:**
   - `D-03` (`T-03.4.6`) tuyên bố thuyết VB thất bại với $B_2H_6$ và hứa thuyết MO giải quyết bằng liên kết cầu $3c\text{–}2e$; `ch03_draft.md` (Câu 10, đáp án) nhắc lại lời hứa này.
   - `D-04` **không có bất kỳ nội dung nào** về $B_2H_6$, $3c\text{–}2e$ hay liên kết đa tâm. Toàn bộ 9 S-ID không đề cập.
   - **Đánh giá:** Lời hứa liên kết chéo chưa được nguồn Chương 04 đáp ứng. S2 phải quyết định bổ sung mục `T-04.4.6` dưới dạng `ADD` background knowledge (chuẩn giáo trình), gắn `[ADDED]` và nêu rõ nguồn D-04 không có.

3. **Lời hứa carry-over (a) — cấu hình MO và tính thuận từ của $O_2$ (`D-03` vs `D-04`) — [CONFIRMED, đã giải quyết]:**
   - `D-03` (`T-03.4.6`) nêu $O_2$ có 2 electron độc thân và hứa giải thích bằng MO.
   - `D-04` (`S-04.4`, `S-04.7`) giải thích đầy đủ: 2 electron cuối vào $\pi^*_{2p_x}, \pi^*_{2p_y}$ theo Hund, $BO=2$, thuận từ.
   - **Đánh giá:** Không xung đột nội dung; chỉ cần S3 nối mạch bằng tham chiếu ngược `T-03.4.6`.

4. **Lời hứa carry-over (b) — bậc liên kết phân số (`D-03` vs `D-04`) — [CONFIRMED, giải quyết một phần]:**
   - `D-03`/`ch03_draft.md` dùng bậc liên kết trung bình 1,5 cho $SO_2$ và 1⅓ cho $NO_3^-$ theo cộng hưởng, nhưng không giải thích cơ chế MO.
   - `D-04` (`S-04.3`, `S-04.8`) đưa ra công thức BO cho giá trị bán nguyên và ví dụ $O_2^+, O_2^-, H_2^+$, nhưng **không giải thích vì sao** bậc liên kết có thể phân số (electron phi định xứ/độ chiếm orbital lẻ).
   - **Đánh giá:** Số liệu khớp, nhưng phần "vì sao" còn thiếu → `I-04.19`; S2 cần `EXPAND` giải thích ngắn.

5. **Thuật ngữ "orbital" trong bảng từ khóa chung `D-09` — [CONFIRMED]:**
   - `D-09` có 13 mục ở phần "Cấu tạo nguyên tử và liên kết" nhưng **không có** mục nào cho `Thuyết MO`, `LCAO`, `HOMO`, `LUMO`, `thuận từ`, `nghịch từ`, `bậc liên kết`, `orbital` (kể cả `obitan`).
   - **Đánh giá:** Không phải xung đột nội dung mà là **thiếu hụt thuật ngữ**; S3/S5 phải bổ sung vào `glossary_running.md`.

6. **Mức độ trình bày $CO$–hemoglobin (`D-04` vs `D-06`, `D-03`) — [POTENTIAL]:**
   - `D-04` (`S-04.5`) trình bày cơ chế $\sigma$-donor/$\pi$-backbonding và độc tính $CO$ ở mức chi tiết.
   - `D-06` (Hóa học phối trí) theo `MANIFEST.md` bao trùm phối tử và phức chất; `D-03` (`T-03.4.6`) chỉ nhắc giới hạn VB.
   - **Đánh giá:** Có nguy cơ trùng lặp/không nhất quán độ sâu với Chương 06. **Chưa đọc `D-06` trong lượt này**, nên chỉ ghi nhận ở mức `[POTENTIAL]`; S2 cần đặt liên kết chéo và giới hạn phạm vi (chỉ dùng $CO$ như ví dụ HOMO–LUMO, không đi sâu thuyết trường phối tử).

7. **Tên gọi "Thuyết Vân đạo biên" (`D-04` nội bộ) — [CONFIRMED]:** Không phải xung đột giữa tài liệu mà là không nhất quán thuật ngữ trong cùng file (`I-04.11`), được ghi ở đây vì ảnh hưởng glossary dùng chung.

---

## H. Issues Register

| ID | Class | Category | Location | Evidence | Why it matters |
|---|---|---|---|---|---|
| I-04.01 | [CONFIRMED] | Heading hierarchy / document identity | Toàn file, dòng 1 | File bắt đầu trực tiếp bằng `<h4>1. Bản chất Thuyết MO & Phương pháp LCAO</h4>`, không có `h1–h3`, không có tên chương | Fragment thiếu cấp tiêu đề chương; tên chương chỉ có ở `MANIFEST.md`. |
| I-04.02 | [CONFIRMED] | Heading numbering & structure | `S-04.6`–`S-04.9`, dòng 79–96 | `<h4>Ý nghĩa và tác dụng</h4>` không đánh số, chứa 2 `example-box` và 1 `callout` | Cấu trúc không nhất quán; ví dụ/mẹo nhớ bị đặt sai phân khu thay vì `T5`/`T6`. |
| I-04.03 | [CONFIRMED] | Duplication (O₂/N₂) | `S-04.4` dòng 48–57; `S-04.7` dòng 81–86 | Cùng cấu hình electron, cùng $BO=2$ / $BO=3$, cùng kết luận thuận từ/nghịch từ | Làm phân mảnh bài giảng; hộp ví dụ không thêm giá trị sư phạm. |
| I-04.04 | [CONFIRMED] | Duplication (fractional BO) | `S-04.3` dòng 31; `S-04.8` dòng 88–92 | `S-04.3` nêu $H_2^+$ (0,5), $O_2^+$ (2,5), $O_2^-$ (1,5); `S-04.8` tính lại 4 giá trị | Trùng số liệu nhưng không có bước giải thích mới. |
| I-04.05 | [CONFIRMED] | Duplication (summary) | `S-04.1`–`S-04.6` | Năm đoạn "Ý nghĩa" + `S-04.6` tóm tắt lại cùng nội dung | Tăng dung lượng mà không tăng độ sâu. |
| I-04.06 | [CONFIRMED] | Internal contradiction (mnemonic) | `S-04.9`, dòng 95 | `Mẹo: BO lẻ hoặc còn e lẻ trên π* → thuận từ` | Sai/ngộ nhận: $N_2$ và $CO$ có $BO=3$ (lẻ) nhưng nghịch từ; chỉ tiêu chí "còn electron độc thân" mới đúng. Mâu thuẫn trực tiếp với `S-04.4` ($N_2$ nghịch từ). |
| I-04.07 | [CONFIRMED] | Internal inconsistency (threshold) | `S-04.2` dòng 12 vs `S-04.4` dòng 60 | `ΔE ≤ 10 - 14 eV` vs `ΔE(2p − 2s) nhỏ (≤ 12 eV)` | Hai ngưỡng khác nhau cho cùng điều kiện năng lượng; sinh viên không biết dùng giá trị nào. |
| I-04.08 | [CONFIRMED] | Undefined notation (overlap integral) | `S-04.2`, dòng 13 | `$S_{AB} = \int \phi_A \phi_B d\tau > 0$` | Không định nghĩa $d\tau$, cận tích phân, miền giá trị $0 \le S \le 1$; không giải thích vì sao $S>0$ là điều kiện. |
| I-04.09 | [CONFIRMED] | Undefined abbreviation | `S-04.4`, dòng 51 và 63 | `$KK\ (\sigma_{2s})^2...$` | `KK` (lõi $1s^2$) không được giải thích; sinh viên năm 1–2 không đọc được. |
| I-04.10 | [CONFIRMED] | Notation inconsistency | `S-04.4` dòng 47/61 vs `S-04.7` dòng 82–85 | `$\pi_{2p_x} = \pi_{2p_y}$` vs `$\pi_{2p}^4$`, `$\pi_{2p}^{*2}$`; `$\sigma_{2p_z}$` vs `$\sigma_{2p}$` | Cùng một orbital nhưng hai cách viết; dễ nhầm khi đếm electron. |
| I-04.11 | [CONFIRMED] | Terminology inconsistency / undefined term | `S-04.5`, dòng 72 và 75 | `Thuyết Vân đạo biên (Frontier Orbitals HOMO - LUMO)`; `LUMO ($\pi^*$)` | "Vân đạo" không dùng nhất quán với "orbital"; LUMO không được định nghĩa trong khi HOMO có. |
| I-04.12 | [CONFIRMED] | Unused concept | `S-04.3`, dòng 24 | `MO Không liên kết ($n$)` | Định nghĩa nhưng không xuất hiện lại ở bất kỳ ví dụ/phân tử nào; khái niệm "mồ côi". |
| I-04.13 | [CONFIRMED] | Visual & tabular absence | Toàn file | 0 `<table>`, 0 `<img>/<svg>/<figure>` | Chương về giản đồ năng lượng MO nhưng không có một hình hay bảng nào. |
| I-04.14 | [CONFIRMED] | References absent | Toàn file | 0 `http`, `doi`, `ISBN`, "Tài liệu tham khảo", "NXB", "giáo trình" | Mọi số liệu và ví dụ không có nguồn gốc; không thể kiểm chứng độc lập. |
| I-04.15 | [CONFIRMED] | Structural completeness | Toàn file | Thiếu T1 (Overview/Prerequisites/Study time), T2 (Learning Objectives), T6 (Summary chuẩn), T7 (Assessment), T8 (References) | File chỉ là đoạn trích nội dung; S2/S3 phải dựng khung Template v2 với nhãn `[ADDED]`. |
| I-04.16 | [CONFIRMED] | Unnumbered pedagogical boxes | `S-04.7`, `S-04.8`, `S-04.9` | `🔎 Ví dụ — Giản đồ MO…`, `🔎 Ví dụ — Bậc liên kết…`, `Cách nhớ` đều không có số | Không thể tham chiếu chéo (Ví dụ 4.k) hoặc đưa vào danh mục hình/bảng. |
| I-04.17 | [CONFIRMED] | Ambiguous mnemonic (filling order) | `S-04.9`, dòng 95 | `Thứ tự điền: σ_s, σ_s*, rồi σ_p và π_p` | Thứ tự "σ_p và π_p" mâu thuẫn với hai trật tự tường minh ở `S-04.4`; không nêu điều kiện áp dụng cho từng nhóm nguyên tố. |
| I-04.18 | [CONFIRMED] | Incomplete case coverage | `S-04.4` dòng 45 và 59 | `Trật tự chuẩn với $O_2, F_2$`; `Hiện tượng nghịch đảo năng lượng với $B_2, C_2, N_2$` | Nêu 5 phân tử nhưng chỉ minh họa $O_2$ và $N_2$; $F_2$, $B_2$, $C_2$ không có cấu hình/BO/từ tính. |
| I-04.19 | [CONFIRMED] | Missing explanation (fractional BO) | `S-04.3`, dòng 31 | `$BO$ có thể nhận giá trị bán nguyên ($0,5; 1,5; 2,5$)` | Chỉ nêu giá trị, không giải thích vì sao bậc liên kết phân số — đúng câu hỏi carry-over (b). |
| I-04.20 | [CONFIRMED] | Unsupported claim inside chapter | `S-04.6`, dòng 80 | `Thuyết MO giải thích ... sự hấp thụ ánh sáng tốt hơn` | Không có mục nào trong chương trình bày hấp thụ ánh sáng/quang phổ; tuyên bố không được nội dung chống lưng. |
| I-04.21 | [CONFIRMED] | Missing quantitative LCAO conditions | `S-04.1`, dòng 5 | `$\Psi = c_A \phi_A + c_B \phi_B$` | Thiếu $c_A^2+c_B^2=1$ (đồng hạch), thiếu điều kiện $c_A \neq c_B$ (dị hạch), thiếu định thức thế tục/biểu thức năng lượng. |
| I-04.22 | [POTENTIAL] | Overgeneralization (existence vs BO) | `S-04.3`, dòng 29–30 | `BO > 0: Phân tử tồn tại`; `BO = 0: Phân tử không thể tồn tại` | $He_2$ tồn tại như dimer van der Waals (không có liên kết cộng hóa trị); $BO>0$ không đảm bảo bền nhiệt động. |
| I-04.23 | [POTENTIAL] | Conflation of VB and MO language | `S-04.4`, dòng 53 | `Bậc liên kết: BO = (8 − 4)/2 = 2 (Liên kết đôi gồm 1σ + 1π)` | Trong MO, $BO=2$ là tổng độ chiếm liên kết; quy đổi thành "1σ + 1π" là ngôn ngữ VB, không được định nghĩa. |
| I-04.24 | [POTENTIAL] | Oversimplification (heteronuclear) | `S-04.5`, dòng 74 | `Giản đồ MO của CO tương tự N2 (đồng electron) với BO = 3` | $CO$ dị hạch có mức AO lệch năng lượng và hệ số $c_A \neq c_B$; "tương tự" dễ làm sinh viên bỏ qua khác biệt. |
| I-04.25 | [POTENTIAL] | Unsupported quantitative / clinical claims | `S-04.5`, dòng 75 | `Liên kết này bền gấp 200 - 250 lần so với liên kết Hb-O2`; `gây tử vong do ngạt mô nội bào` | Số liệu và khẳng định độc tính không có trích dẫn; theo `DOMAIN_RULES`, nội dung lâm sàng chỉ giữ nếu có trong nguồn — cần `[VERIFY]`. |
| I-04.26 | [POTENTIAL] | Unsupported number | `S-04.4`, dòng 65 | `$E_{lk} \approx 945\text{ kJ/mol}$` | Không có nguồn; cần đối chiếu sổ tay/giáo trình chuẩn. |
| I-04.27 | [POTENTIAL] | Imprecise mechanism ($s$–$p$ mixing) | `S-04.4`, dòng 60 | `xuất hiện lực đẩy tĩnh điện lượng tử giữa σ_2s và σ_2p_z` | Bản chất là trộn cấu hình $s$–$p$ do cùng đối xứng, không phải "lực đẩy tĩnh điện" theo nghĩa cổ điển. |
| I-04.28 | [POTENTIAL] | Depth gap (heteronuclear / coefficients) | `S-04.5`, dòng 72–77 | Tiêu đề "Phân tử dị hạch" nhưng chỉ có $CO$ | Không có nguyên tắc chung: AO lệch năng lượng, hệ số tổ hợp không bằng nhau, MO thiên về nguyên tử có AO thấp hơn. |

**Tổng hợp Issues Register:** 21 `[CONFIRMED]`, 7 `[POTENTIAL]` (tổng cộng 28 issues).

---

## I. Verification Queue

| V-ID | Item | Type | Location | Why | Suggested check | Priority |
|---|---|---|---|---|---|---|
| V-04.01 | Cấu hình MO của $O_2$ (12 e hóa trị), 2 electron độc thân trên $\pi^*_{2p_x}, \pi^*_{2p_y}$, $BO=2$ và tính thuận từ của $O_2$ lỏng | theory / fact | `S-04.4` (dòng 49–57), `S-04.7` (dòng 82–83) | Dữ kiện thực nghiệm quan trọng nhất của chương, không có trích dẫn | Đối chiếu giáo trình Hóa đại cương/Hóa vô cơ chuẩn và sổ tay từ tính | High |
| V-04.02 | Giá trị bậc liên kết bán nguyên: $H_2^+$ (0,5), $O_2^+$ (2,5), $O_2^-$ (1,5), $O_2^{2-}$ (1) | number / formula | `S-04.3` (dòng 31), `S-04.8` (dòng 88–92) | Số liệu không có nguồn; cần kiểm tra phép đếm electron và định nghĩa $BO$ | Tính lại số electron liên kết/phản liên kết theo giản đồ MO | High |
| V-04.03 | Năng lượng liên kết $N_2$: $E_{lk} \approx 945\text{ kJ/mol}$ | number | `S-04.4` (dòng 65) | Không có nguồn; ký hiệu $E_{lk}$ không định nghĩa lại trong chương | Đối chiếu sổ tay hóa lý/giáo trình chuẩn | Medium |
| V-04.04 | Ngưỡng năng lượng tổ hợp AO: $\Delta E \le 10-14\text{ eV}$ và $\Delta E(2p-2s) \le 12\text{ eV}$ | number / convention | `S-04.2` (dòng 12), `S-04.4` (dòng 60) | Hai ngưỡng không khớp; đây là quy ước mô hình, không phải hằng số phổ quát | Giảng viên xác nhận ngưỡng chuẩn dùng trong môn | Medium |
| V-04.05 | Độ bền liên kết $CO$–hemoglobin "gấp 200–250 lần" $Hb-O_2$ và cơ chế gây ngạt mô | fact / clinical | `S-04.5` (dòng 75) | Khẳng định định lượng và độc tính không có trích dẫn; thuộc phạm vi `DOMAIN_RULES` | Chuyên gia Hóa dược/Dược lý xác nhận số liệu và cách diễn đạt | High |
| V-04.06 | Giản đồ MO của $CO$ tương tự $N_2$ (đồng electron), $BO=3$; HOMO tập trung trên C; $\pi$-backbonding vào LUMO $\pi^*$ | theory | `S-04.5` (dòng 74–75) | Mô hình dị hạch bị đơn giản hóa; không có trích dẫn | Đối chiếu giáo trình Hóa vô cơ/Hóa phối trí chuẩn | High |
| V-04.07 | Hai trật tự mức năng lượng MO (không/có trộn $2s-2p$) cho $O_2, F_2$ và $B_2, C_2, N_2$; cơ chế "nghịch đảo năng lượng" | theory | `S-04.4` (dòng 45–47, 59–61) | Trật tự mức và nguyên nhân trộn $s$–$p$ không có nguồn; diễn đạt cơ chế mơ hồ | Đối chiếu giáo trình Hóa đại cương/Hóa vô cơ chuẩn | High |
| V-04.08 | Toàn bộ chương không có tài liệu tham khảo gốc | reference | Toàn file | `APPROVED_REFERENCE_LIST: none`; 0 trích dẫn | Người dùng/giảng viên cung cấp giáo trình chuẩn | High |
| V-04.09 | Liên kết ba tâm – hai electron ($3c\text{–}2e$) trong $B_2H_6$: nguồn `D-04` không có nội dung | theory / coverage | Toàn file (không có mục tương ứng) | Lời hứa carry-over (c) từ Chương 03 chưa được đáp ứng | Xác nhận phạm vi bổ sung `[ADDED]` và giáo trình chuẩn cho liên kết đa tâm | High |
| V-04.10 | Phát biểu $He_2$ có $BO=0$ "không thể tồn tại" | theory / accuracy | `S-04.3` (dòng 30) | $He_2$ tồn tại như dimer van der Waals; cần phân biệt "không có liên kết cộng hóa trị" với "không tồn tại" | Giảng viên xác nhận cách diễn đạt | Low |

---

## J. Initial Recommendations and Questions for the user

### Đề xuất cho Stage S2 (R1–R5)
1. **R1 (Tái cấu trúc toàn diện theo Template v2 & bổ sung 3 bảng hệ thống hóa):** Dựng đầy đủ `T1`–`T8`; bổ sung **Bảng 4.1** (So sánh MO liên kết – phản liên kết – không liên kết: năng lượng, mật độ electron vùng liên nhân, mặt phẳng nút, tác dụng lên độ bền) tại `T-04.4.3`; **Bảng 4.2** (Tổng hợp phân tử đồng hạch chu kỳ 2: $He_2, B_2, C_2, N_2, O_2, F_2$ — cấu hình, $BO$, số electron độc thân, từ tính) tại `T-04.4.4`; **Bảng 4.3** (Dãy $O_2^{2-}, O_2^-, O_2, O_2^+$ — số electron, $N_b, N_a$, $BO$, từ tính, xu hướng độ dài/năng lượng liên kết) tại `T-04.5.1`.
2. **R2 (Giải quyết tường minh 3 câu hỏi carry-over):**
   - **(a) $O_2$:** đặt phần giải thích cấu hình MO và thuận từ tại `T-04.4.4` (lý thuyết) + `T-04.5.2` (ví dụ so sánh $N_2$/ $O_2$), mở đầu bằng tham chiếu ngược `T-03.4.6`.
   - **(b) Bậc liên kết phân số:** giải thích cơ chế (electron độc xứ/độ chiếm lẻ trên orbital phản liên kết) tại `T-04.4.3`, minh họa bằng `T-04.5.1`.
   - **(c) $3c\text{–}2e$ trong $B_2H_6$:** bổ sung tiểu mục `T-04.4.6` + ví dụ `T-04.5.4`, gắn `[ADDED: standard MO treatment of 3c–2e bridge bond]` vì `D-04` không có nội dung này.
3. **R3 (Chuẩn hóa ký hiệu và khắc phục mâu thuẫn nội tại):**
   - Thống nhất $\pi_{2p_x}, \pi_{2p_y}$ (không dùng gộp $\pi_{2p}$ khi đếm electron); thay `KK` bằng ký hiệu lõi rõ ràng `$(\sigma_{1s})^2(\sigma^*_{1s})^2$` hoặc "lõi $1s^2$".
   - Bổ sung điều kiện chuẩn hóa $c_A^2+c_B^2=1$ và ghi chú $c_A \neq c_B$ cho dị hạch (`I-04.21`).
   - Gắn `[VERIFY]` cho ngưỡng $\Delta E$ (`I-04.07`) và trình bày thống nhất một ngưỡng kèm chú thích.
   - Với mẹo nhớ `S-04.9`: **không xóa** phát biểu nguồn nhưng phải nêu rõ tiêu chí đúng là "còn electron độc thân", đồng thời gắn `[VERIFY: mnemonic BO lẻ]` và sửa diễn đạt trong bản thảo theo hướng chính xác (`I-04.06`, `I-04.17`); ghi thay đổi vào changelog (R6).
4. **R4 (Mở rộng hệ thống ví dụ tại `T5`):** Nâng `S-04.7` thành **Ví dụ 4.2** (so sánh $N_2$ vs $O_2$: cấu hình, $BO$, từ tính, $E_{lk}$); nâng `S-04.8` thành **Ví dụ 4.1** (dãy $O_2^{2-} \to O_2^+$ có bảng đếm electron từng bước); thêm **Ví dụ 4.3** (`[ADDED]` từ chính `S-04.5`) về $CO$ – $\sigma$-donor/$\pi$-backward; thêm **Ví dụ 4.4** (`[ADDED]`) đếm electron $B_2H_6$ và mô tả $3c\text{–}2e$.
5. **R5 (Bổ sung sơ đồ Mermaid & placeholder `[FIGURE]`):** Vẽ sơ đồ thuật toán Mermaid "4 bước lập giản đồ MO và tính BO" tại `T-04.5.5`; đặt các placeholder `[FIGURE 4.k | …]` cho: giản đồ MO $O_2/F_2$, giản đồ MO $B_2/C_2/N_2$ (có trộn $s$–$p$), giản đồ MO dị hạch $CO$, sơ đồ xen phủ tạo MO liên kết/phản liên kết, và sơ đồ $3c\text{–}2e$ trong $B_2H_6$ tại `T-04.5.6`.

### Câu hỏi xin ý kiến người dùng (Q1–Q5, tổng J = 10 mục)
6. **Q1 (Bổ sung nội dung $3c\text{–}2e$ cho $B_2H_6$ — `V-04.09`, `M-04.10`, `M-04.14`):** `D-04` hoàn toàn không có nội dung về $B_2H_6$ / $3c\text{–}2e$, trong khi Chương 03 đã hứa giải thích. Bạn có đồng ý để S3 bổ sung một tiểu mục lý thuyết ngắn (`T-04.4.6`) và một ví dụ đếm electron (`T-04.5.4`) ở mức **kiến thức giáo trình chuẩn**, gắn `[ADDED]` và không thêm dữ liệu/số liệu nghiên cứu mới?
7. **Q2 (Mức độ bổ sung định lượng cho LCAO — `I-04.21`):** Bạn có đồng ý để S3 bổ sung điều kiện chuẩn hóa $c_A^2+c_B^2=1$, ghi chú $c_A \neq c_B$ cho phân tử dị hạch và biểu thức năng lượng MO dạng $\alpha,\beta,S$ ở mức giới thiệu (`[ADDED: standard LCAO background]`), hay chỉ giữ đúng những gì nguồn có?
8. **Q3 (Xử lý phát biểu mẹo nhớ sai — `I-04.06`, `I-04.17`):** Nguồn viết "BO lẻ hoặc còn e lẻ trên $\pi^*$ → thuận từ". Bạn đồng ý S3 giữ nguyên ý "còn electron độc thân → thuận từ", bỏ vế "BO lẻ" (vì $N_2$, $CO$ có $BO=3$ nhưng nghịch từ), ghi thay đổi vào changelog và gắn `[VERIFY]`?
9. **Q4 (Phạm vi phần dị hạch — `I-04.28`):** Bạn muốn `T-04.4.5` chỉ trình bày $CO$ như nguồn, hay bổ sung nguyên tắc chung của giản đồ MO dị hạch (AO lệch năng lượng, hệ số tổ hợp không bằng nhau) ở mức `[ADDED: standard heteronuclear MO background]`?
10. **Q5 (Dung lượng và bộ 10 câu hỏi `T7`):** Bạn đồng ý kế hoạch nâng chương từ 1.443 từ lên khoảng **4.000–4.500 từ**, với bộ **10 câu hỏi/bài tập** có đáp án chi tiết từng bước tại `T7`, phủ đủ `LO-1`..`LO-4` (nhận diện LCAO/điều kiện tổ hợp; lập giản đồ và tính $BO$; giải thích từ tính $O_2$ và bậc phân số; đánh giá MO so với VB và áp dụng $CO$–hemoglobin)?

---

## K. Not verified / limitations

- **Phạm vi đọc nguồn:** Audit này phân tích trực tiếp `00_source_original/ch04_doc-hvc-4.html` (`D-04`), đối chiếu với `MANIFEST.md`, `_state/carryover_latest.md`, `_state/glossary_running.md`, `_state/verification_list_running.md`, `01_audit/ch03_audit.md`, phần cầu nối trong `03_chapters/ch03_draft.md` và bảng thuật ngữ `D-09`. Các chương nguồn `D-05`–`D-08` **chưa được đọc** trong lượt này; nhận định về `D-06` chỉ ở mức `[POTENTIAL]`.
- **Tài liệu tham khảo ngoài:** `D-04` không chứa bất kỳ tài liệu tham khảo nào (0 trích dẫn). Do R4/R12e và không giả định truy cập mạng, mọi số liệu ($BO$ bán nguyên, $E_{lk}(N_2)$, ngưỡng $\Delta E$, độ bền $CO$–Hb, tính thuận từ $O_2$) đều đưa vào Verification Queue (`V-04.01`–`V-04.10`), không kết luận đúng/sai.
- **Nhận định `[POTENTIAL]`:** `I-04.22`–`I-04.28` dựa trên kiến thức Hóa đại cương/Hóa vô cơ bậc đại học chuẩn để chỉ ra nguy cơ quá khái quát hoặc thiếu độ sâu; tuyệt đối không sửa đổi file gốc.
- **Sai lệch dung lượng:** Brief ghi "~1.373 từ" nhưng phép đếm cơ học cho **1.443 từ**, khớp `MANIFEST.md`; audit dùng 1.443. Nếu con số 1.373 là chuẩn của orchestrator thì cần đối chiếu lại phương pháp đếm.
- **Kiểm tra cơ học:** Đã kiểm tra số dòng (96), số byte (12.169), số thẻ HTML, số biểu thức MathJax (124 inline, 6 khối hiển thị) và phân bổ số từ từng mục (`S-04.1`–`S-04.9`, tổng = 1.443) bằng script Python. Chưa chạy kiểm tra ngữ nghĩa tự động (không có công cụ).
- **Giới hạn giai đoạn:** Chỉ thực hiện S1 Audit; không viết lại, không sửa nội dung, không đề xuất số liệu thay thế.
