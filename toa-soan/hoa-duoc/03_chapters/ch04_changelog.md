# ch04_changelog.md — Nhật ký Biến đổi Nội dung (S3 Transformation Changelog) · Chương 04

**Môn:** Hóa vô cơ dược · **Stage:** S3 Write (Phần 3/3) · **Ngày:** 2026-11-07  
**Nguồn đầu vào:** `00_source_original/ch04_doc-hvc-4.html` (`D-04`, READ-ONLY), `01_audit/ch04_audit.md`, `02_mapping/ch04_matrix_APPROVED.md` (`M-04.01`–`M-04.23`), `_state/decisions.md` (Q1–Q5 đã duyệt).  
**Sản phẩm:** `03_chapters/ch04_part3.md` (Phần 3/3, `T-04.7`–`T-04.8`); bản đầy đủ sẽ ghép `ch04_part1.md` + `ch04_part2.md` + `ch04_part3.md`.  
**Quy tắc:** Bảo toàn 100% ý nghĩa khoa học của `S-04.1`–`S-04.9`; bổ sung có kiểm soát theo `[ADDED]`; mọi thay đổi nghĩa/số liệu/ký hiệu ghi theo R6.

> **Phạm vi bảng 1.** Bảng 1 ghi theo kế hoạch ma trận đã duyệt. Các dòng `M-04.01`–`M-04.18` thuộc Phần 1–2; các dòng `M-04.19`–`M-04.23` thuộc Phần 3. Thứ tự 23 dòng của bảng 1 tương ứng `M-04.01`–`M-04.23`. Tại thời điểm viết Phần 3, `ch04_part1.md` và `ch04_part2.md` chưa có trong thư mục, nên các dòng 1–18 phản ánh kế hoạch, không phải đối chiếu văn bản thực tế; khi ghép cần đối chiếu lại.

---

## 1. Bảng Ánh xạ và Nhật ký Biến đổi (`T-04.1`–`T-04.8`, `M-04.01`–`M-04.23`)

| T-ID | S-ID nguồn | Hành động | Nội dung mới? (mô tả) | Thẻ đã dùng |
|---|---|---|---|---|
| `T-04.1.1` | — | **ADD** | Tiêu đề chương, giới thiệu khái quát và phạm vi thuyết MO–LCAO; dựng khung T1 còn thiếu trong `D-04`. | `[ADDED: structural frame]` |
| `T-04.1.2` | — | **ADD** | Phạm vi, kiến thức tiên quyết từ `T-01.4.1`, `T-02.4.2`, `T-03.4.6`; ước tính thời lượng theo `STUDY_TIME_RULE` (khoảng 3 giờ 30 phút, tính trên ~4.200 từ Mục 1–6). | `[ADDED: study time estimate]` |
| `T-04.2.1` | — | **ADD** | Bốn chuẩn đầu ra `LO-1`–`LO-4`: kiến thức MO/LCAO; lập giản đồ và tính $BO$; vận dụng giải thích $O_2$, bậc phân số, $CO$–hemoglobin; đánh giá mô hình MO so với VB. | `[ADDED: learning objectives]` |
| `T-04.3.1` | S-04.6 | **MERGE** (MOVE, EXPAND) | Cầu nối từ ba hạn chế của VB ($O_2$, $B_2H_6$, quang phổ) sang thuyết MO; liên kết ngược `T-03.4.6`, không lặp toàn bộ Chương 03. | `[SRC: S-04.6]`, `[ADDED: pedagogical bridge from Ch03]` |
| `T-04.4.1` | S-04.1 | **KEEP** (EXPAND, REWRITE) | Quan điểm hạt nhân đa tâm, hàm sóng LCAO; bổ sung điều kiện chuẩn hóa $c_A^2+c_B^2=1$ và ghi chú $c_A \neq c_B$ cho dị hạch. | `[SRC: S-04.1]`, `[ADDED: normalization condition and coefficient meaning]` |
| `T-04.4.2` | S-04.2 | **KEEP** (EXPAND, REWRITE) | Ba điều kiện năng lượng–xen phủ–đối xứng; định nghĩa $d\tau$, miền $0 \le S \le 1$; thống nhất ngưỡng $\Delta E$ kèm chú thích mô hình. | `[SRC: S-04.2]`, `[ADDED: overlap integral meaning]`, `[VERIFY: delta E threshold (V-04.04)]` |
| `T-04.4.3` | S-04.3 | **KEEP** (SPLIT, EXPAND, REWRITE) | Phân loại $\sigma, \pi, \sigma^*, \pi^*, n$; công thức $BO$; tiêu chí từ tính theo electron độc thân; giải thích bậc liên kết phân số; sửa mẹo nhớ sai. | `[SRC: S-04.3]`, `[ADDED: fractional bond order explanation]`, `[VERIFY: BO values (V-04.02)]`, `[VERIFY: mnemonic “BO lẻ” (I-04.06, I-04.17)]` |
| `T-04.4.4` | S-04.4 | **KEEP** (SPLIT, EXPAND, REWRITE) | Hai trật tự mức MO (có/không trộn $2s$–$2p$); cấu hình $O_2$, $N_2$; bổ sung cấu hình/$BO$/từ tính của $B_2, C_2, F_2$; giải thích trộn $s$–$p$. | `[SRC: S-04.4]`, `[ADDED: B2, C2, F2 standard configurations]`, `[VERIFY: MO ordering and s–p mixing (V-04.07)]` |
| `T-04.4.5` | S-04.5 | **KEEP** (EXPAND, REWRITE) | Nguyên tắc giản đồ dị hạch; $CO$: HOMO trên $C$, LUMO $\pi^*$, $\sigma$-donor/$\pi$-backbonding; giữ cảnh báo độc tính của nguồn. | `[SRC: S-04.5]`, `[ADDED: heteronuclear MO principle and LUMO definition]`, `[VERIFY: CO–Hb affinity (V-04.05, V-04.06)]` |
| `T-04.4.6` | — | **ADD** | Liên kết ba tâm – hai electron ($3c\text{–}2e$) trong $B_2H_6$; kiến thức giáo trình chuẩn, không thêm dữ liệu nghiên cứu. | `[ADDED: standard MO treatment of 3c–2e bridge bond]`, `[VERIFY: B2H6 electron count (V-04.09)]` |
| `T-04.5.1` | S-04.4, S-04.8 | **MERGE** (MOVE, EXPAND) | Ví dụ 4.1: dãy $O_2^+, O_2, O_2^-, O_2^{2-}$; đếm electron từng bước, lập Bảng 4.3, rút ra quy luật thêm electron phản liên kết. | `[SRC: S-04.4, S-04.8]`, `[ADDED: step-by-step electron bookkeeping and Table 4.3]`, `[VERIFY: fractional BO (V-04.02)]` |
| `T-04.5.2` | S-04.4, S-04.7 | **MERGE** (MOVE, EXPAND) | Ví dụ 4.2: so sánh $N_2$ (nghịch từ, $BO=3$) và $O_2$ (thuận từ, $BO=2$); bảng so sánh và diễn giải $E_{lk}$. | `[SRC: S-04.4, S-04.7]`, `[ADDED: comparative table and E_lk interpretation]`, `[VERIFY: N2 bond energy (V-04.03)]` |
| `T-04.5.3` | S-04.5 | **MOVE** (EXPAND, REWRITE) | Ví dụ 4.3: $CO$ – phối tử $\sigma$-donor/$\pi$-acceptor và độc tính hemoglobin; chỉ giữ thông tin có trong nguồn, không thêm liều/chỉ định/PK. | `[SRC: S-04.5]`, `[ADDED: orbital interaction diagram description]`, `[VERIFY: CO–Hb affinity (V-04.05)]` |
| `T-04.5.4` | — | **ADD** | Ví dụ 4.4: đếm 12 electron hóa trị $B_2H_6$ và mô tả hai cầu $3c\text{–}2e$. | `[ADDED: worked example on 3c–2e bonding]`, `[VERIFY: B2H6 12 valence electrons (V-04.09)]` |
| `T-04.5.5` | — | **ADD** | Quy trình 4 bước lập giản đồ MO và sơ đồ thuật toán Mermaid `flowchart TD`. | `[ADDED: Mermaid flowchart]` |
| `T-04.5.6` | — | **ADD** | Năm khung giữ chỗ `[FIGURE]`: giản đồ $O_2/F_2$, $B_2/C_2/N_2$, $CO$, xen phủ AO và $3c\text{–}2e$; không mô tả như đã vẽ. | `[ADDED: figure placeholders]`, `[FIGURE]` |
| `T-04.6.1` | S-04.6, S-04.9 | **MERGE** (MOVE, REWRITE) | Tóm tắt nguyên lý cốt lõi, công thức $BO$, mẹo nhận diện đã sửa; giữ ý "còn electron độc thân → thuận từ". | `[SRC: S-04.6, S-04.9]`, `[ADDED: corrected mnemonic]`, `[VERIFY: mnemonic “BO lẻ” (I-04.06, I-04.17)]` |
| `T-04.6.2` | — | **ADD** | Bảng tổng hợp phân loại MO, $BO$, từ tính và chuỗi khái niệm Lewis → VSEPR → VB → MO. | `[ADDED: summary concept tables]` |
| `T-04.7.1` | — | **ADD** | Bốn câu lý thuyết (Câu 1–4): MO/LCAO; ba điều kiện tổ hợp; phân loại $\sigma, \pi, \sigma^*, \pi^*, n$; công thức $BO$ và bác bỏ "BO lẻ → thuận từ". | `[ADDED: knowledge and comprehension questions]` |
| `T-04.7.2` | — | **ADD** | Ba bài tập (Bài tập 5–7): dãy $O_2^+, O_2, O_2^-, O_2^{2-}$; giản đồ $N_2$/$F_2$; từ tính của $B_2, C_2, N_2, O_2, F_2$. | `[ADDED: application exercises]` |
| `T-04.7.3` | — | **ADD** | Ba câu phân tích (Câu 8–10): VB thất bại trước $O_2$; $CO$–hemoglobin qua HOMO/LUMO; đếm 12 electron và mô hình $3c\text{–}2e$ của $B_2H_6$. | `[ADDED: analytical and advanced questions]`, `[VERIFY: O2, CO–Hb, B2H6 (V-04.01, V-04.05, V-04.06, V-04.09)]` |
| `T-04.7.4` | — | **ADD** | Đáp án chi tiết 10/10 câu, mỗi câu ghi `LO` và cấp độ; bài tính $BO$ trình bày từng bước; trắc nghiệm giải thích từng phương án nhiễu. | `[ADDED: step-by-step answer key]` |
| `T-04.8.1` | — | **ADD** | Khung tài liệu tham khảo với đúng ba thẻ giữ chỗ theo R4; không bịa tên sách/tác giả/năm/DOI. | `[ADDED: reference section structure]`, `[VERIFY: reference needed for MO/LCAO, MO diagrams, CO–Hb and 3c–2e (V-04.08)]` |

**Thống kê Phần 3 (đếm bằng script tại chỗ):** 10 câu/bài tập (4 lý thuyết + 3 bài tập + 3 phân tích); 6 thẻ `[ADDED]`; 13 thẻ `[VERIFY]` (8 mã `V-04.xx` khác nhau); 1 thẻ `[SRC]`; 0 hình, 2 bảng phụ trong đáp án (Bảng A, Bảng B). Số từ: 1.304 từ cho `T-04.7.1`–`T-04.7.3`, 1.598 từ khi tính cả `T-04.8` (không tính đáp án/bảng), 1.899 từ cho đáp án.

---

## 2. Các thay đổi so với nguồn cần ghi theo R6

| STT | T-ID liên quan | Thay đổi so với nguồn (`D-04`) | Issue ID / lý do | Cách xử lý trong bản thảo | Thẻ đã dùng |
|---|---|---|---|---|---|
| 1 | `T-04.4.3`, `T-04.6.1` | Nguồn viết mẹo: “BO lẻ hoặc còn e lẻ trên $\pi^*$ → thuận từ”. Bản thảo **bỏ vế “BO lẻ”**, chỉ giữ tiêu chí “có electron độc thân → thuận từ”. | `I-04.06`, `I-04.17`: $N_2$ và $CO$ có $BO=3$ (lẻ) nhưng nghịch từ; $O_2$ có $BO=2$ (chẵn) nhưng thuận từ. | Nêu phản ví dụ $N_2$, $CO$, $O_2$ trong đáp án Câu 4; sửa mẹo nhớ ở `T-04.6.1`. | `[VERIFY: mnemonic “BO lẻ → thuận từ” is incorrect (I-04.06, I-04.17)]` |
| 2 | `T-04.4.5`, `T-04.6.1` | Chuẩn hóa “Thuyết Vân đạo biên (Frontier Orbitals HOMO–LUMO)” → **“orbital biên (frontier orbital)”**, dùng thống nhất với “orbital”. | `I-04.11`: “Vân đạo” là từ Hán–Việt không nhất quán; LUMO chưa được định nghĩa. | Định nghĩa HOMO và LUMO tại `T-04.4.5`; dùng “orbital biên” trong toàn chương. | `[ADDED: terminology standardization]` |
| 3 | `T-04.4.2`, `T-04.4.4` | Nguồn nêu hai ngưỡng khác nhau: $\Delta E \le 10\text{–}14\text{ eV}$ (`S-04.2`) và $\Delta E(2p-2s) \le 12\text{ eV}$ (`S-04.4`). Bản thảo giữ **cả hai ngưỡng**: $\Delta E \le 10\text{–}14\text{ eV}$ tại `T-04.4.2.1` và $\Delta E(2p-2s) \le 12\text{ eV}$ tại `T-04.4.2.1`/`T-04.4.4.2`, kèm chú thích phụ thuộc mô hình. | `I-04.07`, `V-04.04`: hai ngưỡng cho cùng điều kiện năng lượng; đây là quy ước mô hình, không phải hằng số phổ quát. | Không tuyệt đối hóa con số; giữ cả hai giá trị và gắn `[VERIFY]`. | `[VERIFY: delta E threshold (V-04.04)]` |
| 4 | `T-04.4.3`, `T-04.6.1` | Nguồn viết “$BO = 0$: Phân tử không thể tồn tại (ví dụ $He_2$)”. Bản thảo đổi thành **“$He_2$ không tạo liên kết cộng hóa trị bền”**; $BO=0$ chỉ có nghĩa không có liên kết cộng hóa trị, không đồng nhất với “không tồn tại”. | `I-04.22`, `V-04.10`: $He_2$ tồn tại như dimer van der Waals yếu. | Giữ ví dụ $He_2$; sửa cách diễn đạt và gắn `[VERIFY]`. | `[VERIFY: He2 bond order statement (V-04.10)]` |
| 5 | `T-04.4.1` | Nguồn chỉ có $\Psi = c_A\phi_A \pm c_B\phi_B$; bản thảo bổ sung điều kiện chuẩn hóa $c_A^2+c_B^2=1$ và ghi chú $c_A \neq c_B$ cho phân tử dị hạch. | `I-04.21`, Q2 đã duyệt: thiếu điều kiện chuẩn hóa và ý nghĩa hệ số tổ hợp. | Trình bày ở mức giới thiệu, gắn `[ADDED: standard LCAO background]`. | `[ADDED: standard LCAO background]` |
| 6 | `T-04.4.4` | Chuẩn hóa ký hiệu: `KK` → `(σ1s)²(σ*1s)²` hoặc “lõi $1s^2$”; `π2p` gộp → `π2px`, `π2py` khi đếm electron. | `I-04.09`, `I-04.10`: viết tắt `KK` không giải thích; ký hiệu gộp dễ nhầm. | Dùng ký hiệu tách trong cấu hình chi tiết (Bảng 4.3, Bài tập 7); Bảng 4.2 giữ ký hiệu gộp $(\pi_{2p})^n$ kèm chú thích cách đọc. | `[ADDED: notation normalization]` |

---

## 3. Chưa kiểm chứng / hạn chế

- **Số liệu nguồn không có trích dẫn:** $BO$ bán nguyên, cấu hình MO của $O_2$, trật tự mức $N_2$/$F_2$, ngưỡng $\Delta E$, $E_{lk}(N_2) \approx 945\text{ kJ/mol}$ và độ bền $CO$–$Hb$ “200–250 lần” đều lấy từ `D-04` nhưng không có nguồn gốc; đã gắn `[VERIFY]` theo `V-04.01`–`V-04.07`.
- **Nội dung bổ sung ngoài nguồn:** tiểu mục $3c\text{–}2e$ trong $B_2H_6$ và các cấu hình/$BO$ của $B_2, C_2, F_2$ là kiến thức giáo trình chuẩn, không có trong `D-04`; đã gắn `[ADDED]`/`[VERIFY]` (`V-04.09`, `V-04.07`) và cần chuyên gia xác nhận.
- **Tài liệu tham khảo:** `D-04` có 0 tài liệu và `APPROVED_REFERENCE_LIST: none`; ba mục ở `T-04.8.1` chỉ là thẻ giữ chỗ, chưa xác minh tên sách, tác giả, năm hay DOI (`V-04.08`).
- **Phạm vi bảng 1:** các dòng `M-04.01`–`M-04.18` ghi theo kế hoạch ma trận, chưa đối chiếu với `ch04_part1.md`/`ch04_part2.md` (chưa có tại thời điểm viết); khi ghép cần kiểm tra lại số thứ tự câu, ký hiệu, bảng phụ A/B và các thẻ `[VERIFY]` trùng mã.
- **Đánh số hình:** ma trận dự kiến 5 placeholder `4.1`–`4.5`, nhưng bản ghép có thêm sơ đồ Mermaid tại `T-04.5.5`; để đúng thứ tự xuất hiện, Mermaid là **Hình 4.1** và 5 placeholder là **Hình 4.2–4.6** (điều chỉnh R6, đã ghi trong self-check).
- **Kiểm tra cơ học:** đã chạy lại bằng `_tools/` chính thức sau khi ghép; kết quả lưu tại `_state/checks/ch04_s3_*.md` (xem mục 4 và mục 5).

---

## 4. Ghi chú của orchestrator sau khi ghép (2026-11-07)

- Bản nháp cuối `ch04_draft.md` = Phần 1 + Phần 2 + Phần 3 (đã cắt các khối `<!-- PARTx-LIMITATIONS -->`); tiêu đề chương chỉ xuất hiện một lần.
- Đã chạy lại kiểm tra cơ học chính thức: `check_coverage.py` (9/9 S-ID), `check_tags.py` (`[ADDED]=54`, `[VERIFY]=44`, `[CONFLICT]=0`, `[FIGURE]=0` — xem mục 5 để biết số sau S3-FIX), `check_length.py` (`6.677` từ, `5,79x` nguồn), `check_ids.py` (các T-ID trùng đều là tham chiếu chéo trong thân bài; mỗi tiêu đề chỉ xuất hiện một lần).
- Đã sửa ước tính thời lượng ở `T-04.1.2` từ "2 giờ 40 phút" thành "3 giờ 30 phút" cho khớp `STUDY_TIME_RULE` và độ dài thực tế Mục 1–6.
- `_tools/check_length.py` được sửa thứ tự xử lý (gỡ math **trước** khi gỡ thẻ HTML) vì ký hiệu `<`, `>` trong công thức từng bị hiểu nhầm là thẻ HTML và làm undercount số từ.

---

## 5. S3-FIX sau QA vòng 1 (2026-11-07)

**Đầu vào:** `04_qa/ch04_qa_r1.md` — PASS WITH CONDITIONS, `0` Critical / `3` Major / `17` Minor. Đã xử lý **toàn bộ 20 issue** (3 Major bắt buộc + 17 Minor).

### 5.1 Ba lỗi Major (Return to author = Y)

| Issue | Vị trí | Đã sửa |
|---|---|---|
| `QA-04.01` | `T-04.4.1.3` | Bỏ suy luận sai “$\alpha,\beta<0 \Rightarrow E_+<\alpha$”; thay bằng điều kiện đúng $\beta<\alpha S$ (tức $|\beta|>|\alpha|S$). |
| `QA-04.02` | `T-04.4.3.1` | Đảo lại “mức phá bền tăng $\sigma^*>\pi^*$” cho khớp hai giản đồ và Bảng 4.1. |
| `QA-04.03` | `T-04.4.2.1`, `T-04.4.4.2` | Khôi phục $\Delta E \le 10\text{–}14\text{ eV}$ và bổ sung $\Delta E(2p-2s) \le 12\text{ eV}$. |

### 5.2 Mười bảy lỗi Minor

`QA-04.04` thời lượng 3 giờ 30 phút (tính lại trên ~4.200 từ Mục 1–6: ≈ 2,8 giờ + 40 phút ≈ 3 giờ 30 phút); `QA-04.05` $|S|\le1$ + quy ước pha; `QA-04.06` tách $H_2^+$ khỏi dãy bán nguyên $\pi^*$; `QA-04.07` chuẩn hóa placeholder thành `[FIGURE: 4.x | …]` (5 hình); `QA-04.08` Bảng A/B → **Bảng 4.5/4.6** có chú thích, xóa ghi chú biên tập; `QA-04.09` mô tả đúng 4 terminal $2c$–$2e$ + 2 cầu $3c$–$2e$ + 1 $\text{B–B}$ $2c$–$2e$; `QA-04.10` thêm ánh xạ $5\sigma\equiv\sigma_{2p_z}$, $6\sigma^*\equiv\sigma^*_{2p_z}$; `QA-04.11` thêm `[ADDED: He2 van der Waals dimer]`; `QA-04.12` thêm `[ADDED: probability density interpretation]`; `QA-04.13` chú thích ký hiệu gộp $(\pi_{2p})^n$ ở Bảng 4.2; `QA-04.14` thống nhất `\varphi`; `QA-04.15` chỉnh `LO-3` cho khớp Bài tập 5; `QA-04.16` viết lại chiều $BO$–độ dài–năng lượng; `QA-04.17` xóa dòng `---` trùng; `QA-04.18` thêm ý 8 về hấp thụ UV–Vis vào tóm tắt; `QA-04.19` đổi “chiếm vị trí” → “gắn mạnh, cạnh tranh” theo đúng nguồn; `QA-04.20` đồng bộ thẻ Câu 4 thành `[VERIFY: mnemonic correction (V-04.12)]`.

### 5.3 Kiểm tra cơ học sau S3-FIX

- `check_coverage.py`: **9/9 S-ID (100%)** — `_state/checks/ch04_s3_coverage.md`
- `check_tags.py`: `[ADDED]=57`, `[VERIFY]=44`, `[CONFLICT]=0`, `[FIGURE]=5` — `_state/checks/ch04_s3_tags.md`
- `check_length.py`: **6.940 từ** / nguồn 1.153 từ = **6,02x** — `_state/checks/ch04_s3_length.md`
- `check_ids.py`: 51 T-ID duy nhất; 5 mã “trùng” đều là tham chiếu chéo, mỗi tiêu đề chỉ xuất hiện một lần — `_state/checks/ch04_s3_ids.md`

---

## 6. S3-FIX sau QA vòng 2 (2026-11-07)

**Đầu vào:** `04_qa/ch04_qa_r2.md` — PASS WITH CONDITIONS, `0` Critical / `1` Major / `5` Minor. Đã xử lý **6/6 issue**.

| Issue | Vị trí | Đã sửa |
|---|---|---|
| `QA2-04.01` (Major) | `T-04.7.4` Câu 10 | Xóa mô hình giả định có thêm liên kết B–B (dễ gây hiểu "3c–2e cần 14 e"); thay bằng "Mô hình $3c$–$2e$ chỉ dùng đúng $8+4=12$ electron và không cần liên kết B–B". |
| `QA2-04.02` | `T-04.4.3.2` | "đóng góp nửa cặp liên kết" → "làm giảm nửa đơn vị bậc liên kết" (electron $\pi^*$ là phản liên kết). |
| `QA2-04.03` | `T-04.6.1` ý 3 | Giới hạn phát biểu bán nguyên cho dãy oxygen; nêu $H_2^+$ là trường hợp riêng (thiếu một electron trên $\sigma_{1s}$). |
| `QA2-04.04` | `T-04.5.3` | "hai tương tác cộng hưởng" → "hai tương tác hiệp lực" (synergic). |
| `QA2-04.05` | `T-04.6.1` ý 8 | Thêm `[ADDED: UV–Vis/color gloss]` cho cụm mở rộng ngoài nguồn. |
| `QA2-04.06` | `T-04.4.4.4` | Sửa cross-ref: "Bảng 4.3 (họ oxygen) và Bài tập 7 (đủ năm phân tử $B_2, C_2, N_2, O_2, F_2$)". |

**Kiểm tra cơ học sau vòng 2:** 9/9 S-ID; `[ADDED]=57`, `[VERIFY]=44`, `[CONFLICT]=0`, `[FIGURE]=5`; 51 T-ID duy nhất; **6.940 từ** (`6,02x` nguồn); Mục 1–6 = 4.235 từ, Mục 7 = 2.577 từ, Mục 8 = 128 từ. Khởi chạy QA vòng 3 để xác nhận đóng Major.
