# ch04_qa_r2.md — Báo cáo Kiểm định Chất lượng Độc lập (Stage S4 QA — Round 2) · Chương 04

**Dự án:** Hóa vô cơ dược – Master Lecture Notes  
**Chương kiểm định:** Chương 04 — *Thuyết Orbital Phân tử (MO) & Phân tích Năng lượng LCAO*  
**Stage:** S4 Independent QA (Round 2, sau S3-FIX) · **Ngày thực hiện:** 2026-11-08  
**Vai trò:** người phản biện độc lập, không tham gia viết chương; chỉ báo cáo, không sửa bản thảo/nguồn/`_state/`.

**Tài liệu đối chiếu (Context Isolation theo Mục 6.3):**
1. `00_config.md` — `DOMAIN_RULES`, `STUDY_TIME_RULE`, `CITATION_STYLE: Vancouver`, `APPROVED_REFERENCE_LIST: none`.
2. Nguồn gốc READ-ONLY: `00_source_original/ch04_doc-hvc-4.html` (`D-04`, `S-04.1`–`S-04.9`).
3. Ma trận đã duyệt Gate A: `02_mapping/ch04_matrix_APPROVED.md` (`M-04.01`–`M-04.23`, `REMOVE = 0`).
4. Bản thảo hiện hành: `03_chapters/ch04_draft.md` (552 dòng; 6.923 từ) và `03_chapters/ch04_changelog.md` (§5 S3-FIX).
5. Báo cáo vòng 1: `04_qa/ch04_qa_r1.md` (`QA-04.01`–`QA-04.20`).
6. Kiểm tra cơ học hiện hành: `_state/checks/ch04_s3_coverage.md`, `ch04_s3_tags.md`, `ch04_s3_length.md`, `ch04_s3_ids.md`.
7. Báo cáo tính toán độc lập vòng 2: `_state/checks/ch04_s4_calc_r2.md`.

**Phương pháp:** đọc toàn bộ bản thảo hiện hành; đối chiếu từng `S-ID` với nguồn và ma trận; chạy lại bốn tool cơ học chính thức; **tái tính độc lập toàn bộ 34 hạng mục số học** bằng Python 3 (standard library), không dùng `_tools/check_calc_ch04.py` vì script này hardcode giá trị vòng 1 và ghi đè báo cáo cũ (xem §D.3); kiểm tra thủ công 56 thẻ `[ADDED]`, 44 `[VERIFY]`, 5 `[FIGURE]`; đối chiếu 20 issue vòng 1 với văn bản đã sửa.

---

## A. Verdict

- **Kết luận thẩm định (Verdict):** **PASS WITH CONDITIONS**
- **Thống kê lỗi theo mức độ nghiêm trọng:** **Critical: 0** · **Major: 1** (`QA2-04.01`) · **Minor: 5** (`QA2-04.02`–`QA2-04.06`).
- **Luận cứ (3–5 dòng):**
  - **Phạm vi & tuân thủ:** Bản thảo 6.923 từ (6,00× nguồn 1.153 từ), phủ **9/9 S-ID**, `REMOVE = 0`, không vi phạm `DOMAIN_RULES`, không có tài liệu bịa đặt.
  - **Tính toán:** **34/34 hạng mục số học tái tính đều khớp**; chỉ một lỗi **logic** trong đáp án Câu 10 (không phải số học), xếp Major.
  - **Đóng vòng 1 & kết luận:** **20/20** issue vòng 1 đã được xử lý — **16 sạch hoàn toàn**, 3 bản sửa để lại Minor mới (`QA-04.06`, `QA-04.13`, `QA-04.18`), và `QA-04.09` sửa đúng nhãn nhưng lỗi logic tiềm ẩn vẫn còn. Không có Critical nên không FAIL; còn 1 Major nên **PASS WITH CONDITIONS** và phải quay lại tác giả theo §7.4.

---

## B. Issue Table (vòng 2)

| Issue ID | T-ID | Category | Severity | Basis | Evidence (nguồn/đối chiếu vs. bản thảo, mỗi trích ≤25 từ) | Recommended correction | Return to author = Y/N |
|---|---|---|---|---|---|---|---|
| **QA2-04.01** | `T-04.7.4` (Câu 10, phần 2) | Scientific accuracy / Logic (answer key) | **Major** | `[INTERNAL]` | Bản thảo (dòng 539): “…2 cầu ($3c$–$2e$) và 1 liên kết B–B ($2c$–$2e$)… $8+4+2=14$ electron, vẫn vượt 12 electron hiện có.” Mâu thuẫn dòng 540: “Hai cầu dùng 4 electron; cộng với 8 electron… được 12 electron.” | Xóa câu “mô hình thay thế…14 electron” (nó là mô hình giả định có thêm B–B, không dùng trong §4.6) hoặc thay bằng: “Mô hình $3c$–$2e$ dùng đúng $8+4=12$ electron, không cần liên kết B–B; do đó đây là mô hình tối thiểu phù hợp.” Giữ đáp án $3c$–$2e$. | **Y** |
| **QA2-04.02** | `T-04.4.3.2`, `T-04.5.1` | Conceptual accuracy / Wording | **Minor** | `[INTERNAL]` | Bản thảo (dòng 123): “electron độc thân chỉ chiếm một trong hai MO $\pi^*$ suy biến, đóng góp nửa cặp liên kết: $O_2^+$ 2,5; $O_2^-$ 1,5”. Electron trên $\pi^*$ là **phản liên kết**, làm $BO$ giảm 0,5, không “đóng góp” nửa cặp liên kết. | Viết “làm giảm nửa đơn vị bậc liên kết” hoặc “đóng góp $-0,5$ vào $BO$”; giữ nguyên các giá trị $BO$ (đang đúng). | N |
| **QA2-04.03** | `T-04.6.1` (ý 3) | Internal consistency / Overgeneralization | **Minor** | `[INTERNAL]` | Bản thảo (dòng 340): “$BO$ bán nguyên do electron lẻ trên orbital suy biến.” Trái với dòng 123 và 217: $H_2^+$ có $BO=0,5$ từ **một** electron trên $\sigma_{1s}$ không suy biến, do thiếu một electron để đủ cặp. | Thêm giới hạn: “trong dãy oxygen…; $H_2^+$ là trường hợp riêng do thiếu một electron trên $\sigma_{1s}$”. | N |
| **QA2-04.04** | `T-04.5.3` | Terminology consistency | **Minor** | `[INTERNAL]` | Bản thảo (dòng 255): “hai tương tác **cộng hưởng** làm CO–Fe rất bền”. Cùng chương (dòng 533): “Hai tương tác này **hiệp lực**”. $\sigma$-donor + $\pi$-backbonding là hiệp lực (synergic), không phải cộng hưởng. | Đổi “cộng hưởng” → “hiệp lực” (hoặc “hiệp lực/synergic”) cho thống nhất với Câu 9. | N |
| **QA2-04.05** | `T-04.6.1` (ý 8) | Tag precision | **Minor** | `[INTERNAL]` | Nguồn (`S-04.6`): “sự hấp thụ ánh sáng tốt hơn… so với mô hình liên kết cục bộ”. Bản thảo (dòng 345): “sự hấp thụ ánh sáng **(UV–Vis) và màu sắc**… `[SRC: S-04.6]`” — hai cụm thêm không có trong nguồn, thiếu `[ADDED]`. | Thêm `[ADDED: UV–Vis/color gloss]` hoặc quay về đúng cụm nguồn “hấp thụ ánh sáng”. | N |
| **QA2-04.06** | `T-04.4.4.4` (chú thích Bảng 4.2) | Cross-reference accuracy | **Minor** | `[INTERNAL]` | Bản thảo (dòng 159): “cấu hình tách chi tiết ở **Bảng 4.3** và Bài tập 7.” Bảng 4.3 (dòng 221–226) chỉ có 4 loài oxygen, không có $B_2, C_2, N_2, F_2$. | Ghi rõ: “Bảng 4.3 (họ oxygen) và Bài tập 7 (đủ năm phân tử $B_2, C_2, N_2, O_2, F_2$)”. | N |

**Ghi chú phân loại:** `QA2-04.01` không phải lỗi số học ($8+4+2=14$ và $14>12$ đều đúng) mà là **lập luận sai**: mô hình $3c$–$2e$ chuẩn chỉ cần 12 e và không có liên kết B–B, nên việc dựng thêm B–B rồi kết luận “vẫn vượt 12” không chứng minh được gì và mâu thuẫn với chính bước 3 của đáp án. Đây là “broken logic” theo §7.5 (Major), không phải “factual error” (Critical) vì đáp án cuối cùng và toàn bộ số electron vẫn đúng.

---

## B2. Đối chiếu 20 issue vòng 1 (`QA-04.01`–`QA-04.20`)

| R1 ID | T-ID | Trạng thái sau S3-FIX | Bằng chứng đối chiếu (vị trí trong bản thảo hiện hành) |
|---|---|---|---|
| `QA-04.01` | `T-04.4.1.3` | **Đã sửa đúng** | Dòng 77: “$E_+$ nằm dưới $\alpha$… khi $\beta<\alpha S$, tức $\lvert\beta\rvert>\lvert\alpha\rvert S$”. Tái tính phản ví dụ $\alpha=-10,\beta=-0{,}5,S=0{,}2$ cho $E_+=-8{,}75>\alpha$ — khớp điều kiện mới. |
| `QA-04.02` | `T-04.4.3.1` | **Đã sửa đúng** | Dòng 115: “mức phá bền tăng theo chiều $\sigma^*>\pi^*$ ($\pi^*$ phá bền ít hơn $\sigma^*$)”; nhất quán dòng 137, 145 và Bảng 4.1. |
| `QA-04.03` | `T-04.4.2.1`, `T-04.4.4.2` | **Đã sửa đúng** | Dòng 85: “$\Delta E\le 10\text{–}14\text{ eV}$… Với cặp $2p$–$2s$, ngưỡng thường lấy $\le 12\text{ eV}$”; khớp `S-04.2` và `S-04.4`. |
| `QA-04.04` | `T-04.1.2` | **Đã sửa đúng** (làm tròn) | Dòng 20: “~4.200 từ… 2 giờ 50 phút… ≈2,8 giờ; cộng 40 phút ≈3 giờ 30”. Tái tính 4.207 từ → 2 h 48 + 40 ph = 3 h 28 ≈ 3 h 30. |
| `QA-04.05` | `T-04.4.1.3`, `T-04.4.2.2` | **Đã sửa đúng** | Dòng 77: “$\lvert S\rvert\le1$; theo quy ước pha chọn $S>0$”; dòng 93: “$\lvert S_{AB}\rvert\le1$… $S_{AB}>0$ khi xen phủ hiệu quả”. |
| `QA-04.06` | `T-04.4.3.2`, `T-04.5.1` | **Đã sửa — còn lỗi Minor mới** | Dòng 123 đã tách $O_2^{2-}$ (nguyên) và $H_2^+$ (không suy biến) đúng yêu cầu, nhưng thêm cụm sai “đóng góp nửa cặp liên kết” → `QA2-04.02`. |
| `QA-04.07` | `T-04.5.6` | **Đã sửa đúng** | Năm placeholder dòng 310, 314, 318, 322, 326 đúng cú pháp `[FIGURE: …]`; `check_tags.py` báo `[FIGURE]=5`; changelog §5.3 ghi 5. |
| `QA-04.08` | `T-04.7.4` | **Đã sửa đúng** | Bảng phụ nay là **Bảng 4.5** (dòng 473) và **Bảng 4.6** (dòng 512), có chú thích; ghi chú biên tập “Bảng A/B, ghép ba phần” đã xóa. |
| `QA-04.09` | `T-04.7.4` (Q10) | **Đã sửa nhãn — lỗi logic tiềm ẩn còn, nay Major** | Dòng 539 mô tả đúng “4 terminal $2c$–$2e$ + 2 cầu $3c$–$2e$ + 1 B–B $2c$–$2e$”, nhưng giữ mô hình B–B giả định và kết luận “vẫn vượt 12” → `QA2-04.01` (R1 chỉ bắt nhãn, bỏ sót lập luận). |
| `QA-04.10` | `T-04.4.5.2`, `T-04.5.3` | **Đã sửa đúng** | Dòng 181: “$\sigma_{2p_z}\equiv 5\sigma$ (HOMO) và $\sigma^*_{2p_z}\equiv 6\sigma^*$”; thống nhất với Hình 4.4. |
| `QA-04.11` | `T-04.4.3.2` | **Đã sửa đúng** | Dòng 121: “chỉ tồn tại như dimer van der Waals `[ADDED: He2 van der Waals dimer]`”. |
| `QA-04.12` | `T-04.4.1.1` | **Đã sửa đúng** | Dòng 53: “$\lvert\Psi\rvert^2$ là mật độ xác suất… `[ADDED: probability density interpretation]`”. |
| `QA-04.13` | `T-04.4.4.4`, `T-04.5.1` | **Đã sửa — còn lỗi Minor mới** | Dòng 159 thêm chú thích ký hiệu gộp $(\pi_{2p})^n$, đúng hướng; nhưng cross-ref “Bảng 4.3” không bao phủ $B_2/C_2/N_2/F_2$ → `QA2-04.06`. |
| `QA-04.14` | `T-04.4.1.2`, `T-04.6.1` | **Đã sửa đúng** | Toàn chương dùng `\varphi`; quét `\phi` trong `ch04_draft.md` không còn kết quả. |
| `QA-04.15` | `T-04.2.1`, `T-04.7.2` | **Đã sửa đúng** | Dòng 32: `LO-3` nay nêu “dãy oxygen ($O_2^+, O_2^-$; $H_2^+$ là ví dụ minh họa cho bậc 0,5)”, khớp Bài tập 5 và Ví dụ 4.1. |
| `QA-04.16` | `T-04.5.1` | **Đã sửa đúng** | Dòng 216: “khi $BO$ giảm $2,5\to2\to1,5\to1$, độ dài liên kết tăng và năng lượng liên kết giảm”. |
| `QA-04.17` | `T-04.4.6` | **Đã sửa đúng** | Sau tiểu mục 4.6 (dòng 197) chỉ còn một dòng `---` trước Mục 5. |
| `QA-04.18` | `T-04.3.1`, `T-04.6.1` | **Đã sửa — còn lỗi Minor mới** | Dòng 345 thêm ý 8 “Liên hệ phổ… hấp thụ ánh sáng…”, đúng yêu cầu; nhưng “(UV–Vis) và màu sắc” là mở rộng ngoài nguồn chưa gắn `[ADDED]` → `QA2-04.05`. |
| `QA-04.19` | `T-04.4.5.3`, `T-04.7.4` (Q9) | **Đã sửa đúng** | Dòng 187: “gắn mạnh… **cạnh tranh và làm giảm khả năng vận chuyển** $O_2$”; dòng 534 lặp lại đúng cách diễn đạt nguồn. |
| `QA-04.20` | `T-04.7.4` (Câu 4) | **Đã sửa đúng** | Dòng 456: `[VERIFY: mnemonic correction (V-04.12)]`; không còn mã issue `I-04.06/I-04.17` trong bản thảo. |

**Tổng hợp B2:** 20/20 issue được xử lý; **16/20 sạch hoàn toàn**; **3/20** sửa đúng nhưng để lại lỗi Minor mới (`QA-04.06`, `QA-04.13`, `QA-04.18`); **1/20** (`QA-04.09`) sửa đúng nhãn nhưng lỗi logic tiềm ẩn vẫn còn và nay là Major. Không có issue nào **không sửa**.

---

## C. Coverage Table

Đối chiếu 9 phân đoạn nguồn với ma trận đã duyệt và bản thảo hiện hành; `check_coverage.py`: **9/9 (100%), 0 Missing**. Ma trận `ch04_matrix_APPROVED.md` có **`REMOVE = 0`** — không có nội dung nguồn nào bị xóa.

| S-ID | Nội dung nguồn (`D-04`) | Row ID | Vị trí trong bản thảo | Trạng thái | Đánh giá bảo tồn |
|---|---|---|---|---|---|
| `S-04.1` | Bản chất MO, LCAO, $\Psi/\Psi^*$, electron phi định xứ | `M-04.05` | `T-04.4.1.1`–`T-04.4.1.3` | **Preserved** (Expanded) | Đủ định nghĩa, hai tổ hợp, ý nghĩa phi định xứ; bổ sung chuẩn hóa/$E_\pm$ có `[ADDED]`/`[VERIFY]`. |
| `S-04.2` | Ba điều kiện tổ hợp; $\Delta E\le10$–$14$ eV; $S_{AB}$; đối xứng | `M-04.06` | `T-04.4.2.1`–`T-04.4.2.3` | **Preserved** (Expanded) | Ngưỡng $\le10$–$14$ eV đã khôi phục (dòng 85); thêm $\le12$ eV cho $2p$–$2s$; đủ ba điều kiện và ví dụ $s$–$p_x$. |
| `S-04.3` | Phân loại MO, $BO$, từ tính, $BO$ bán nguyên, $He_2$ | `M-04.07` | `T-04.4.3.1`–`T-04.4.3.3` | **Altered** (approved) | Giữ đủ công thức/tiêu chí; đổi “$BO=0$ không tồn tại” → “không có liên kết cộng hóa trị bền”, bỏ mẹo “BO lẻ”, tách $H_2^+$; đều có `[VERIFY]`. Còn lỗi diễn đạt nhỏ `QA2-04.02`. |
| `S-04.4` | Hai trật tự MO; cấu hình $O_2, N_2$; $BO$; $E_{lk}(N_2)$; $\Delta E(2p-2s)\le12$ eV | `M-04.08`, `M-04.11`, `M-04.12` | `T-04.4.4.1`–`T-04.4.4.3`, `T-04.5.1`, `T-04.5.2` | **Preserved** (Expanded) | Hai trật tự, cấu hình, $BO$, 2 e độc thân, $E_{lk}$ đều còn; bổ sung $B_2, C_2, F_2$ có thẻ; “lực đẩy tĩnh điện lượng tử” → “trộn cấu hình” (làm rõ). |
| `S-04.5` | Dị hạch, CO: $BO=3$, HOMO trên C, $\sigma$-donor/$\pi$-backbonding, CO–Hb 200–250× | `M-04.09`, `M-04.13` | `T-04.4.5.1`–`T-04.4.5.3`, `T-04.5.3` | **Preserved** | Đủ nguyên tắc dị hạch, HOMO/LUMO, hai thành phần liên kết, cảnh báo độc tính; bổ sung định nghĩa HOMO/LUMO có `[ADDED]`. |
| `S-04.6` | Ý nghĩa MO: $BO$, độ bền, từ tính, **hấp thụ ánh sáng**, HOMO/LUMO, CO–Hb | `M-04.04`, `M-04.17` | `T-04.3.1`, `T-04.6.1` | **Preserved** (Expanded) | Ý “hấp thụ ánh sáng” nay có ở ý 8 dòng 345; phần mở rộng “UV–Vis/màu sắc” cần gắn thẻ (`QA2-04.05`). |
| `S-04.7` | Ví dụ $O_2$ thuận từ / $N_2$ nghịch từ, $BO$, cấu hình | `M-04.12` | `T-04.5.2` | **Preserved** (Expanded) | Ví dụ 4.2 giữ đủ Given–Find–Approach–Solution–Check, cấu hình, $BO$, từ tính, nhận xét $N_2$ trơ. |
| `S-04.8` | Dãy $BO$ oxygen $2,5/2/1,5/1$; quy luật thêm e phản liên kết | `M-04.11` | `T-04.5.1`, Bảng 4.3 | **Preserved** (Expanded) | Đủ bốn giá trị và quy luật; mở rộng bảng $N_b, N_a$, $\pi^*$, từ tính; thêm $H_2^+$ có `[ADDED]`. |
| `S-04.9` | Hộp “Cách nhớ”: thứ tự điền, hai trật tự, mẹo từ tính, $BO$ lớn → ngắn/bền | `M-04.17` | `T-04.6.1` | **Altered** (approved) | Giữ quy tắc điền và hai trật tự; bỏ vế “BO lẻ” (đúng khoa học), thay bằng tiêu chí electron độc thân; có `[VERIFY: V-04.12]`. |

**Kết luận C:** `9/9` S-ID hiện diện; `0` Missing; `0` REMOVE chưa duyệt; hai thay đổi “Altered” (`S-04.3`, `S-04.9`) đều đã được duyệt và ghi changelog. So với vòng 1, `S-04.2` và `S-04.6` chuyển từ “Altered” sang “Preserved” nhờ các bản sửa `QA-04.03` và `QA-04.18`.

---

## D. Calculation Table

Tái tính độc lập **34 hạng mục** (mọi ví dụ, bảng, đáp án số, cân bằng electron/điện tích, đơn vị). Chi tiết phương pháp và mã nguồn tạm: `_state/checks/ch04_s4_calc_r2.md`. Kết quả: **34/34 khớp số học**; **1 không khớp logic** (`Q10`, dòng 539 — đã nêu ở `QA2-04.01`).

| # | Hạng mục (T-ID / vị trí) | Original trong bản thảo | Recomputed độc lập | Match |
|---:|---|---|---|---|
| 1 | `T-04.1.2` thời lượng học tập | ~3 h 30; ~2 h 50 cho ~4.200 từ Mục 1–6; +40 phút/10 bài | Mục 1–6 = 4.207 từ; $4\,207/1\,500=2{,}805$ h = 2 h 48; +40 = 3 h 28 ≈ **3 h 30** | **Yes** (làm tròn) |
| 2 | Chuẩn hóa đồng hạch (dòng 69–71) | $c_A^2+c_B^2=1$; $c_A=c_B=1/\sqrt2$ | $2\times(1/\sqrt2)^2=1{,}000000$ | **Yes** |
| 3 | Điều kiện $E_+<\alpha$ (dòng 77) | $E_+<\alpha \Leftrightarrow \beta<\alpha S$ | $\alpha=-10,\beta=-5,S=0{,}2$: $E_+=-12{,}5<-10$; $\beta=-0{,}5$: $E_+=-8{,}75>-10$ | **Yes** |
| 4 | Miền tích phân xen phủ (dòng 77, 93) | $\lvert S\rvert\le1$; quy ước pha $S>0$ | Ràng buộc $\lvert S\rvert\le1$ đúng; $S$ âm hợp lệ nếu không áp quy ước pha | **Yes** |
| 5 | $O_2^{2-}$ (14 e), Bảng 4.3/4.5 | $N_b=8$, $N_a=6$, $BO=1$, 0 e độc thân | $\sigma_{2s}^2\sigma_{2s}^{*2}\sigma_{2p_z}^2\pi_{2p}^4\pi_{2p}^{*4}$ → 8/6/1/0 | **Yes** |
| 6 | $O_2^-$ (13 e) | 8; 5; 1,5; 1 e độc thân | $\pi_{2p}^{*3}$ → 8/5/1,5/1 | **Yes** |
| 7 | $O_2$ (12 e) | 8; 4; 2; 2 e độc thân | $\pi_{2p}^{*2}$ → 8/4/2/2 | **Yes** |
| 8 | $O_2^+$ (11 e) | 8; 3; 2,5; 1 e độc thân | $\pi_{2p}^{*1}$ → 8/3/2,5/1 | **Yes** |
| 9 | $H_2^+$ (1 e), Ví dụ 4.1 | $N_b=1$, $N_a=0$, $BO=0{,}5$, 1 e độc thân | $\sigma_{1s}^1$ → 1/0/0,5/1 | **Yes** |
| 10 | $B_2$ (6 e, trộn $s$–$p$) | 4; 2; 1; 2 e độc thân | $(\sigma_{2s})^2(\sigma^*_{2s})^2(\pi_{2p})^2$ → 4/2/1/2 | **Yes** |
| 11 | $C_2$ (8 e) | 6; 2; 2; 0 e độc thân | $(\pi_{2p})^4$ → 6/2/2/0 | **Yes** |
| 12 | $N_2$ (10 e) | 8; 2; 3; 0 e độc thân | $(\pi_{2p})^4(\sigma_{2p_z})^2$ → 8/2/3/0 | **Yes** |
| 13 | $F_2$ (14 e) | 8; 6; 1; 0 e độc thân | $(\sigma_{2p_z})^2(\pi_{2p})^4(\pi^*_{2p})^4$ → 8/6/1/0 | **Yes** |
| 14 | $CO$ (10 e) | 8; 2; 3; 0 e độc thân | $(\sigma_{2s})^2(\sigma^*_{2s})^2(\pi_{2p})^4(\sigma_{2p_z})^2$ → 8/2/3/0 | **Yes** |
| 15 | $B_2H_6$ tổng electron (dòng 267) | $12=2\times3+6\times1$ | $6+6=12$ | **Yes** |
| 16 | $B_2H_6$ phân bố terminal/cầu | 4 B–H biên = 8 e; còn 4 e cho 2 cầu, 2 e/cầu | $4\times2=8$; $12-8=4$; $4/2=2$ | **Yes** |
| 17 | $B_2H_6$ mô hình $2c$–$2e$ cho 8 đoạn nối | $8\times2=16>12$ | $16>12$ | **Yes** |
| 18 | $B_2H_6$ mô hình $3c$–$2e$ chuẩn | 4 terminal (8 e) + 2 cầu (4 e) = 12 e | $8+4=12$ | **Yes** |
| 19 | `Q10` “mô hình thay thế” 4 terminal $2c$–$2e$ + 2 cầu $3c$–$2e$ + 1 B–B $2c$–$2e$ | $8+4+2=14>12$ | Số học $14>12$ **đúng**; nhưng mô hình $3c$–$2e$ chuẩn chỉ dùng $8+4=12$, không có B–B → lập luận sai | **Yes (số học) / No (logic)** |
| 20 | $B_2H_6$ octet mỗi B (dòng 271) | 4 e từ 2 liên kết biên + 4 e từ 2 cầu = 8 e/B | $2\times2+2\times2=8$ e/B | **Yes** |
| 21 | Trật tự MO không trộn $s$–$p$ | $\sigma_{2s}<\sigma^*_{2s}<\sigma_{2p_z}<\pi_{2p}<\pi^*_{2p}<\sigma^*_{2p_z}$ | Khớp trật tự dùng cho $O_2, F_2$; $\pi^*<\sigma^*$ | **Yes** |
| 22 | Trật tự MO có trộn $s$–$p$ | $\sigma_{2s}<\sigma^*_{2s}<\pi_{2p}<\sigma_{2p_z}<\pi^*_{2p}<\sigma^*_{2p_z}$ | Khớp trật tự dùng cho $B_2, C_2, N_2$; $\pi^*<\sigma^*$ | **Yes** |
| 23 | Bảng 4.2 (5 phân tử) | $B_2$ 6/4/2/1/2; $C_2$ 8/6/2/2/0; $N_2$ 10/8/2/3/0; $O_2$ 12/8/4/2/2; $F_2$ 14/8/6/1/0 | Điền lại electron: khớp toàn bộ | **Yes** |
| 24 | Bảng 4.3 (4 loài oxygen) | $O_2^{2-}$ 14/8/6/1/0; $O_2^-$ 13/8/5/1,5/1; $O_2$ 12/8/4/2/2; $O_2^+$ 11/8/3/2,5/1 | Khớp; cấu hình $\pi^*$: 4, 3, 2, 1 e | **Yes** |
| 25 | Bảng 4.5 (4 loài oxygen) | $O_2^+$ 11/8/3/2,5/1; $O_2$ 12/8/4/2/2; $O_2^-$ 13/8/5/1,5/1; $O_2^{2-}$ 14/8/6/1/0 | Khớp toàn bộ (chỉ đảo thứ tự trình bày so với Bảng 4.3) | **Yes** |
| 26 | Bảng 4.6 (5 phân tử) | $B_2$ 6/4/2/1/2; $C_2$ 8/6/2/2/0; $N_2$ 10/8/2/3/0; $O_2$ 12/8/4/2/2; $F_2$ 14/8/6/1/0 | Khớp toàn bộ; trùng Bảng 4.2 | **Yes** |
| 27 | Câu 5: chiều dài/năng lượng | $BO$: $2,5>2>1,5>1$; dài: $O_2^+<O_2<O_2^-<O_2^{2-}$; năng lượng: ngược lại | $BO$ giảm đơn điệu; độ dài tăng, năng lượng giảm tương ứng | **Yes** |
| 28 | Câu 6: $N_2/F_2$ | $N_2$ 8/2/3/0; $F_2$ 8/6/1/0 | Khớp | **Yes** |
| 29 | Câu 8: VB và MO của $O_2$ | VB: 12 e = 6 cặp; MO: 8/4/2/2 | $2\times6=12$; $8+4=12$; $BO=2$; 2 e độc thân | **Yes** |
| 30 | Câu 9: $CO$ | 10 e; 8/2/3/0 | $4+6=10$; $8+2=10$; $BO=3$; 0 e độc thân | **Yes** |
| 31 | Câu 10: tổng 12 e và 6 cặp | $2\times3+6\times1=12$; $12/2=6$ cặp | Khớp | **Yes** |
| 32 | Câu 10: mô hình $3c$–$2e$ dùng 12 e (dòng 540) | 8 terminal + 4 cầu = 12 | $8+4=12$ | **Yes** |
| 33 | Bảo toàn electron/điện tích | Dãy $O_2$: $2\times6-q$; $CO$: $4+6$; $B_2H_6$: $2\times3+6\times1$; $H_2^+$: 1 | 11, 12, 13, 14; 10; 12; 1 — khớp $N_b+N_a$ từng loài | **Yes** |
| 34 | Đơn vị/thứ nguyên | $BO$ không thứ nguyên; electron nguyên; $\Delta E$ eV; thời lượng giờ/phút; $S$ không thứ nguyên | Không phát hiện sai đơn vị/thứ nguyên | **Yes** |

### D.1 Kiểm tra logic `Q10` (dòng 539–540)

- **Số học:** 4 terminal $\times2=8$; 2 cầu $3c$–$2e$ $\times2=4$; 1 B–B $\times2=2$; tổng $8+4+2=14>12$. Đúng.
- **Lỗi:** mô hình $3c$–$2e$ chuẩn cho $B_2H_6$ dùng đúng $8+4=12$ e, **không có liên kết B–B** (§4.6 dòng 193–195; Ví dụ 4.4 dòng 267–271; chính Câu 10 bước 3 dòng 540). Việc thêm B–B là mô hình giả định không được nêu; kết luận “vẫn vượt 12” không chứng minh $3c$–$2e$ không đủ mà còn mâu thuẫn với bước 3. Từ “cũng **chỉ** dùng 14 electron” cũng tự mâu thuẫn về mặt tu từ (14 > 12).
- **Đáp án đúng:** chỉ cần lập luận $2c$–$2e$ cho cả 8 đoạn nối cần 16 e > 12 e ⇒ phải dùng $3c$–$2e$ (12 e). Bỏ câu “mô hình thay thế”.

### D.2 Đối chiếu thời lượng học tập

- Mục 1–6 = **4.207 từ** (đếm theo đúng quy tắc `check_length.py`: bỏ math/HTML/link, đếm token chữ–số); $4\,207/1\,500=2{,}8047$ h = 2 h 48,3 ph; +40 ph = 3 h 28,3 ph → làm tròn **3 h 30**.
- Bản thảo ghi “~4.200 từ” (lệch 7 từ) và “2 giờ 50 phút” (lệch 1,7 phút) — nằm trong mức làm tròn; **không phải lỗi**.
- Tổng từ toàn chương 6.923; tổng theo 8 mục = 6.911; 12 từ chênh đúng bằng tiêu đề chương (“Chương 4: Thuyết Orbital Phân tử (MO) & Phân tích Năng lượng LCAO”), không ảnh hưởng kết luận.

### D.3 Kiểm toán `_tools/check_calc_ch04.py`

Script này **không dùng làm nguồn chuẩn** cho vòng 2: nó hardcode giá trị bản nháp vòng 1 (`theory_words = 4005`; “3 h 30/2 h 40”; điều kiện cũ “$\alpha,\beta<0\Rightarrow E_+<\alpha$”; “$0\le S\le1$”; “$\Delta E$ khoảng 10–14 eV”; “$\sigma^*<\pi^*$”; mô hình 7 liên kết $2c$–$2e$ của Q10) và **không parse** `ch04_draft.md` hiện tại. Số học trong script phần lớn đúng, nhưng trạng thái Yes/No đã lỗi thời và script **bỏ sót lỗi logic Q10 mới**. Ngoài ra, nếu chạy, script ghi đè `_state/checks/ch04_s4_calc.md`; vòng 2 không chạy và không sửa file đó.

---

## E. Tag and Reference Audit

### E.1 Thẻ provenance (đếm bằng `_tools/check_tags.py` trên `ch04_draft.md`)

| Thẻ | Vòng 1 | Vòng 2 | Ghi chú |
|---|---:|---:|---|
| `[ADDED]` | 54 | **56** | +2 do `QA-04.11` (`He2 van der Waals dimer`) và `QA-04.12` (`probability density interpretation`). |
| `[VERIFY]` | 44 | **44** | Không đổi; mã `V-04.01`–`V-04.12`. |
| `[CONFLICT]` | 0 | **0** | Không có mâu thuẫn chưa xử lý. |
| `[FIGURE]` | 0 (tool) / 5 (thủ công) | **5** (tool) | Cú pháp `[FIGURE: 4.x …]` đã được tool nhận diện. |

- **(a) Nội dung thêm chưa gắn `[ADDED]`:** **1** trường hợp — cụm “(UV–Vis) và màu sắc” ở dòng 345 chỉ có `[SRC: S-04.6]` (`QA2-04.05`). Đây là gloss thuật ngữ, không phải dữ liệu mới; xếp Minor (xem mục H về cách áp dụng §7.5).
- **(b) Khẳng định cần `[VERIFY]` nhưng thiếu:** **0** trường hợp nghiêm trọng. Toàn bộ dữ kiện thực nghiệm/ngoài nguồn ($O_2$ thuận từ, $BO$ bán nguyên, $E_{lk}(N_2)$, ngưỡng $\Delta E$, CO–Hb 200–250×, $B_2H_6$ $3c$–$2e$, $He_2$, $CO$ HOMO) đều có `[VERIFY]` với mã `V-04.xx`.
- **(c) Dùng thẻ sai chức năng:** **0**. Không còn mã issue `I-04.xx` trong bản thảo; `[FIGURE]` đúng cú pháp; `[ADDED]` không dùng cho dữ liệu thực nghiệm.
- **Cấu trúc T-ID:** 51 mã duy nhất; 5 mã xuất hiện nhiều lần (`T-01.4.1`, `T-03.4.6`, `T-04.2.1`, `T-04.5.5`, `T-04.7.4`) — tất cả là **tham chiếu chéo** trong thân bài, không phải tiêu đề trùng.

### E.2 Tài liệu tham khảo (R4 / Vancouver)

- Nguồn `D-04` có **0** tài liệu tham khảo; `APPROVED_REFERENCE_LIST: none`.
- `T-04.8.1` (dòng 548–550) gồm **3 thẻ giữ chỗ** `[VERIFY: reference needed … (V-04.08)]`; **không** có tên sách, tác giả, năm, NXB, DOI, số trang hay bất kỳ chi tiết thư mục bịa đặt nào.
- Chưa thể áp dụng định dạng Vancouver vì chưa có dữ liệu thư mục; **không có lỗi “trích dẫn không truy vết được”** theo nghĩa bịa đặt. Ba mục cần người dùng cung cấp/duyệt trước bản Clean.

---

## F. Learning Objective Alignment Matrix

| LO | Chuẩn đầu ra (`T-04.2.1`) | Nơi giảng dạy | Đánh giá | Cấp độ | Đáp án chi tiết | Đạt? |
|---|---|---|---|---|---|---|
| **`LO-1`** | Bản chất MO/LCAO, ba điều kiện, phân loại MO, $BO$, tiêu chí từ tính | `T-04.3.1`, `T-04.4.1`–`T-04.4.3`, `T-04.6.1`, `T-04.6.2` | Câu 1–4 | Knowledge / Comprehension | Có (dòng 450–456), giải thích từng phương án nhiễu | **Đạt** |
| **`LO-2`** | Lập giản đồ MO đồng hạch chu kỳ 2, hai trật tự mức, Pauli–Hund, $BO$, độ dài/năng lượng, từ tính | `T-04.4.4`, `T-04.5.5`, `T-04.6.2` | Bài tập 5–7 | Application | Có (dòng 458–522), bảng đối chiếu + kiểm tra tổng e | **Đạt** |
| **`LO-3`** | Giải thích $O_2$ thuận từ, bậc bán nguyên dãy oxygen ($H_2^+$ là ví dụ minh họa), $N_2/O_2$, CO–hemoglobin qua HOMO–LUMO | `T-04.4.4.3`, `T-04.4.5`, `T-04.5.2`, `T-04.5.3` | Bài tập 5, 7; Câu 8, 9 | Application / Analysis | Có (dòng 458–484, 524–534) | **Đạt** |
| **`LO-4`** | So sánh MO với VB, nhận diện khi nào cần MO, giải thích $3c$–$2e$ trong $B_2H_6$, nêu giới hạn mô hình | `T-04.3.1`, `T-04.4.6`, `T-04.6.2` | Câu 8 (phần 3), Câu 10 | Analysis / Advanced | Có (dòng 528, 536–540) | **Đạt** (Câu 10 còn lỗi logic `QA2-04.01`) |

**Kết luận F:** cả bốn `LO-1`–`LO-4` đều được **giảng dạy** và **đánh giá** bằng câu hỏi/bài tập có đáp án chi tiết. `LO-3` đã được chỉnh cho khớp Bài tập 5 (`QA-04.15`). Khoảng trống duy nhất là lập luận thừa/sai trong đáp án Câu 10, không làm hỏng chuẩn đầu ra nhưng cần sửa trước Gate B.

---

## G. Strengths

1. **Bảo toàn nguồn xuất sắc:** 9/9 S-ID, `REMOVE = 0`, không mất nội dung cốt lõi; các thay đổi nghĩa đều có chủ đích, ghi changelog và gắn `[VERIFY]`.
2. **Số học rất vững:** 34/34 hạng mục tái tính khớp, gồm toàn bộ dãy $O_2$, $B_2/C_2/N_2/O_2/F_2$, $CO$, $H_2^+$, $B_2H_6$, bảo toàn electron/điện tích và đơn vị.
3. **Xử lý $B_2H_6$ $3c$–$2e$ tốt:** đếm đúng 12 e, phân biệt 8 e biên + 4 e cầu, kiểm tra octet, bác bỏ mô hình $2c$–$2e$ bằng 16 e; chỉ còn một câu lập luận thừa ở đáp án.
4. **Kỷ luật `DOMAIN_RULES` và R4:** không thêm liều/chỉ định/dược động học; ba thẻ tham khảo đúng quy tắc, không bịa thư mục.
5. **Vòng 1 được xử lý nghiêm túc:** 20/20 issue có phản hồi, 16 sạch hoàn toàn; các bản sửa Major ($E_+$, $\sigma^*/\pi^*$, $\Delta E$) đều đúng và nhất quán với bảng/giản đồ.

---

## H. Items for Human Expert Decision

1. **`QA2-04.01` (Câu 10):** chọn **xóa** câu “mô hình thay thế 14 electron” hay **viết lại** thành “$3c$–$2e$ dùng đúng 12 e, không cần B–B”. Đề xuất xóa để tránh nhiễu; đáp án cuối không đổi.
2. **Ngưỡng $\Delta E$ (`V-04.04`):** chốt cách trình bày giữa $\le10$–$14$ eV (`S-04.2`) và $\le12$ eV cho $2p$–$2s$ (`S-04.4`) — giữ cả hai kèm chú thích (hiện tại) hay dùng một ngưỡng duy nhất.
3. **Mức độ của `QA2-04.05`:** “(UV–Vis) và màu sắc” là gloss thuật ngữ bị xếp **Minor**; nếu Hội đồng áp dụng §7.5 theo nghĩa đen cho **mọi** nội dung thêm chưa gắn thẻ, nâng thành **Major**. Cần chốt chính sách để phân loại nhất quán.
4. **Nội dung ngoài nguồn:** xác nhận lần cuối việc giữ $B_2H_6$ $3c$–$2e$ (`V-04.09`, `M-04.10`, `M-04.14`) và cấu hình/$BO$ của $B_2, C_2, F_2$ (`V-04.07`).
5. **Dữ kiện lâm sàng:** xác nhận giữ nguyên “CO–Hb bền gấp 200–250 lần” và hệ quả ngạt mô (`V-04.05`) dù nguồn không trích dẫn gốc.
6. **Cách diễn đạt $He_2$ (`V-04.10`):** chọn “dimer van der Waals” (chính xác hơn) hay “không tạo liên kết cộng hóa trị bền” (bám nguồn hơn).
7. **Hàng đợi kiểm chứng:** xác nhận việc S3 mở rộng mã `V-04.11`/`V-04.12` ngoài audit S1 (`V-04.01`–`V-04.10`); hiện đã có trong `_state/verification_list_running.md`.
8. **Tài liệu tham khảo (`V-04.08`):** cung cấp giáo trình chuẩn để thay ba thẻ `[VERIFY]` và áp dụng Vancouver.
9. **Sản xuất hình:** 5 placeholder Hình 4.2–4.6 cần vẽ; Hình 4.1 (Mermaid) cần kiểm tra render trên nền tảng xuất bản.
10. **`LO-3` sau sửa:** xác nhận cách đưa $H_2^+$ thành “ví dụ minh họa cho bậc 0,5” (thay vì một mục đánh giá riêng) là đủ cho chuẩn đầu ra.

---

## I. Not Verified / Limitations

1. **Không có nguồn tham khảo ngoài:** `APPROVED_REFERENCE_LIST: none`; QA **không thể** xác nhận bất kỳ dữ kiện nào với giáo trình/tài liệu gốc. Các giá trị $BO$, trật tự MO, ngưỡng $\Delta E$, $E_{lk}(N_2)=945$ kJ/mol, độ bền CO–Hb 200–250× và tính thuận từ của $O_2$ lỏng vẫn là **giả thuyết cần chuyên gia xác nhận**.
2. **Không kiểm tra hình ảnh:** Hình 4.2–4.6 chỉ là placeholder; Hình 4.1 là Mermaid. Không có QA trực quan về bố cục, nhãn trục, mũi tên spin hay màu.
3. **Không đọc suy luận tác giả:** không đọc `ch04_selfcheck.md`, `ch04_part1.md`–`ch04_part3.md` hay thảo luận tác giả; chỉ đối chiếu nguồn, ma trận, bản thảo, changelog, QA vòng 1 và audit.
4. **Khác biệt phương pháp đếm từ:** `check_length.py` báo nguồn 1.153 từ (sau khi bỏ math/markup), trong khi audit ghi 1.443 từ; tỷ lệ 6,00× chỉ mang tính tham khảo, không dùng để kết luận over-compression.
5. **`_tools/check_calc_ch04.py` lỗi thời:** hardcode giá trị vòng 1, không parse bản hiện tại và có thể ghi đè báo cáo cũ; vòng 2 dùng script Python tạm độc lập. Nếu chạy lại tool chính thức, cần cập nhật tool trước.
6. **Phụ thuộc quy ước dấu:** biểu thức $E_\pm$ và điều kiện $\beta<\alpha S$ phụ thuộc quy ước $\alpha,\beta<0$, $S>0$; QA dùng quy ước đã nêu trong bản thảo. Nếu đổi quy ước pha, phải phát biểu lại điều kiện.
7. **Trật tự MO và mức trộn $s$–$p$** là mô hình định tính; QA không kiểm tra giá trị năng lượng tuyệt đối hay hệ số tổ hợp cụ thể.
8. **44 thẻ `[VERIFY]` vẫn mở:** QA chỉ kiểm tra vị trí/cú pháp, không xác nhận nội dung khoa học bên trong.
9. **Không tái thẩm định Chương 01–03:** chỉ kiểm tra sự tồn tại/ngữ cảnh các `T-ID` tham chiếu (`T-01.4.1`, `T-02.4.2`, `T-03.4.2`, `T-03.4.6`).
10. **Changelog §1–§2 còn chuỗi thẻ cũ:** một số dòng vẫn ghi `[VERIFY: mnemonic “BO lẻ” (I-04.06, I-04.17)]` dù §5.2 đã cập nhật và bản thảo dùng `V-04.12`; đây là **độ trễ tài liệu**, không phải lỗi bản thảo. Nên đồng bộ khi S3-FIX lần sau.
11. **Phân loại `QA2-04.05`** phụ thuộc cách áp dụng §7.5 (xem H.3); nếu Hội đồng chọn nghĩa đen “mọi nội dung thêm chưa gắn thẻ = Major”, verdict và số đếm sẽ thay đổi (1 Major → 2 Major), nhưng không có Critical.

---

**GATE B: STOP.** Báo cáo QA vòng 2 hoàn tất. Không sửa bản thảo, nguồn hay `_state/`. Một lỗi **Major** (`QA2-04.01`) cần được xử lý ở S3-FIX trước khi trình duyệt Gate B; năm lỗi Minor có thể xử lý cùng lượt.
