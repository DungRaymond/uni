# ch04_qa_r3.md — Báo cáo Kiểm định Chất lượng Độc lập (Stage S4 QA — Round 3) · Chương 04

**Dự án:** Hóa vô cơ dược – Master Lecture Notes  
**Chương kiểm định:** Chương 04 — *Thuyết Orbital Phân tử (MO) & Phân tích Năng lượng LCAO*  
**Stage:** S4 Independent QA (Round 3, xác nhận cuối sau S3-FIX vòng 2) · **Ngày thực hiện:** 2026-11-08  
**Vai trò:** người phản biện độc lập, không tham gia viết chương; chỉ báo cáo, không sửa bản thảo/nguồn/`_state/`.

**Tài liệu đối chiếu (Context Isolation theo Mục 6.3):**
1. `00_config.md` — `DOMAIN_RULES`, `STUDY_TIME_RULE`, `CITATION_STYLE: Vancouver`, `APPROVED_REFERENCE_LIST: none`.
2. Nguồn gốc READ-ONLY: `00_source_original/ch04_doc-hvc-4.html` (`D-04`, `S-04.1`–`S-04.9`).
3. Ma trận đã duyệt Gate A: `02_mapping/ch04_matrix_APPROVED.md` (`M-04.01`–`M-04.23`, `REMOVE = 0`).
4. Bản thảo hiện hành: `03_chapters/ch04_draft.md` (552 dòng; **6.940 từ**) và `03_chapters/ch04_changelog.md` (§6 S3-FIX sau QA vòng 2).
5. Báo cáo vòng 1: `04_qa/ch04_qa_r1.md` (`QA-04.01`–`QA-04.20`).
6. Báo cáo vòng 2: `04_qa/ch04_qa_r2.md` (`QA2-04.01`–`QA2-04.06`).
7. Kiểm tra cơ học hiện hành: `_state/checks/ch04_s3_coverage.md`, `ch04_s3_tags.md`, `ch04_s3_length.md`, `ch04_s3_ids.md`.
8. Báo cáo tính toán độc lập vòng 3: `_state/checks/ch04_s4_calc_r3.md`.

**Phương pháp:** đọc toàn bộ bản thảo hiện hành; đối chiếu từng `S-ID` với nguồn và ma trận; chạy lại `check_coverage.py`, `check_tags.py`, `check_length.py`, `check_ids.py`; **tái tính độc lập 34 hạng mục số học** bằng Python 3.15 (standard library), không dùng `_tools/check_calc_ch04.py` vì script này hardcode giá trị vòng 1 và ghi đè báo cáo cũ; kiểm tra thủ công 57 thẻ `[ADDED]`, 44 `[VERIFY]`, 5 `[FIGURE]`; đối chiếu 6 issue vòng 2 với văn bản đã sửa.

---

## A. Verdict

- **Kết luận thẩm định (Verdict):** **PASS**
- **Thống kê lỗi theo mức độ nghiêm trọng:** **Critical: 0** · **Major: 0** · **Minor: 1** (`QA3-04.01`).
- **Luận cứ (3–5 dòng):**
  - **Phạm vi & tuân thủ:** Bản thảo 6.940 từ (6,02× nguồn 1.153 từ), phủ **9/9 S-ID**, `REMOVE = 0`, không vi phạm `DOMAIN_RULES`, không có tài liệu bịa đặt.
  - **Tính toán:** **34/34 hạng mục số học tái tính đều khớp**; không có lỗi số học. Câu 10 đã hết mâu thuẫn: $8+8=16>12$ cho mô hình $2c$–$2e$, rồi $8+4=12$ cho $3c$–$2e$, khớp bước 3.
  - **Đóng vòng 2:** **6/6** issue vòng 2 đã được xử lý — **5 sạch hoàn toàn**, 1 bản sửa đúng phần $H_2^+$ nhưng còn một phát biểu quá rộng về “cả dãy oxygen có $BO$ bán nguyên” (`QA3-04.01`, Minor mới phát hiện khi regression).
  - **Kết luận:** Không còn Critical/Major; chỉ còn 1 Minor diễn đạt, không chặn Gate B. Theo §7.5, **PASS**.
- **Gate B:** **Đủ điều kiện qua Gate B.** Minor `QA3-04.01` nên sửa cùng lượt S5/Clean; không cần quay lại tác giả.

---

## B. Issue Table (vòng 3)

| Issue ID | T-ID | Category | Severity | Basis | Evidence (nguồn/đối chiếu vs. bản thảo, mỗi trích ≤25 từ) | Recommended correction | Return to author = Y/N |
|---|---|---|---|---|---|---|---|
| **QA3-04.01** | `T-04.4.3.2`, `T-04.5.1`, `T-04.6.1` | Conceptual accuracy / Overgeneralization | **Minor** | `[INTERNAL]` | Bản thảo (dòng 123): “Trong dãy oxygen, $BO$ bán nguyên vì electron độc thân chỉ chiếm một trong hai MO $\pi^*$ suy biến…”. Lặp lại dòng 217 và 340. Bảng 4.3/4.5 ghi $O_2$ $BO=2$ và $O_2^{2-}$ $BO=1$ — cả hai là số nguyên. | Đổi thành: “Trong dãy oxygen, $O_2^+$ và $O_2^-$ có $BO$ bán nguyên…; $O_2$ ($BO=2$) và $O_2^{2-}$ ($BO=1$) là số nguyên” ở **cả ba** vị trí; giữ nguyên mọi giá trị. | **N** (Minor; sửa ở Clean) |

**Ghi chú phân loại:** Đây là lỗi **diễn đạt/quá tổng quát**, không phải lỗi số học: mọi giá trị $BO$ trong bảng và đáp án đều đúng; câu văn chỉ sai khi biến một quan sát của $O_2^+/O_2^-$ thành quy luật cho cả dãy. Xếp **Minor** theo §7.5 (“small inconsistencies”), không phải Critical vì không có phép tính hay đáp án nào sai.

---

## B2. Đối chiếu 6 issue vòng 2 (`QA2-04.01`–`QA2-04.06`)

| R2 ID | T-ID | Trạng thái sau S3-FIX | Bằng chứng đối chiếu (vị trí trong bản thảo hiện hành) |
|---|---|---|---|
| `QA2-04.01` | `T-04.7.4` (Câu 10, phần 2) | **Đã sửa đúng** | Dòng 539: “tổng cần $8+8=16$ electron, vượt 12 electron hiện có. Mô hình $3c$–$2e$ chỉ dùng đúng $8+4=12$ electron và không cần liên kết B–B”. Không còn mô hình B–B/“14 electron”; khớp dòng 540 “Hai cầu dùng 4 electron… được 12 electron”. |
| `QA2-04.02` | `T-04.4.3.2`, `T-04.5.1` | **Đã sửa đúng** | Dòng 123: “làm giảm nửa đơn vị bậc liên kết” (thay cho “đóng góp nửa cặp liên kết”); các giá trị $O_2^+$ 2,5; $O_2^-$ 1,5; $O_2^{2-}$ 1 giữ nguyên. |
| `QA2-04.03` | `T-04.6.1` (ý 3) | **Đã sửa đúng phần $H_2^+$; còn `QA3-04.01`** | Dòng 340: “trong dãy oxygen, $BO$ bán nguyên do electron lẻ trên orbital $\pi^*$ suy biến (riêng $H_2^+$: thiếu một electron trên $\sigma_{1s}$)”. Đã tách $H_2^+$ đúng yêu cầu; nhưng phát biểu “cả dãy oxygen” vẫn quá rộng → `QA3-04.01`. |
| `QA2-04.04` | `T-04.5.3` | **Đã sửa đúng** | Dòng 255: “hai tương tác hiệp lực làm $CO$–$Fe$ rất bền”; dòng 533: “Hai tương tác này hiệp lực”. Không còn “cộng hưởng” cho $\sigma$-donor/$\pi$-backbonding. |
| `QA2-04.05` | `T-04.6.1` (ý 8) | **Đã sửa đúng** | Dòng 345: “…hấp thụ ánh sáng (UV–Vis) và màu sắc… `[SRC: S-04.6]` `[ADDED: UV–Vis/color gloss]`”. Cụm mở rộng ngoài nguồn đã có thẻ. |
| `QA2-04.06` | `T-04.4.4.4` (chú thích Bảng 4.2) | **Đã sửa đúng** | Dòng 159: “Bảng 4.3 (họ oxygen) và Bài tập 7 (đủ năm phân tử $B_2, C_2, N_2, O_2, F_2$)”. Bảng 4.3 đúng là 4 loài oxygen; Bài tập 7 đúng là 5 phân tử. |

**Tổng hợp B2:** **6/6 issue vòng 2 được xử lý**; **5/6 sạch hoàn toàn**; **1/6** (`QA2-04.03`) sửa đúng phần được yêu cầu nhưng để lộ một phát biểu quá rộng chưa từng bị bắt ở vòng 2 (`QA3-04.01`). **Không có** issue nào “không sửa”, “sửa không đủ” theo đúng yêu cầu R2, hoặc “lỗi mới” do bản sửa tạo ra.

---

## C. Coverage Table

Đối chiếu 9 phân đoạn nguồn với ma trận đã duyệt và bản thảo hiện hành; `check_coverage.py`: **9/9 (100%), 0 Missing**. Ma trận `ch04_matrix_APPROVED.md` có **`REMOVE = 0`** — không có nội dung nguồn nào bị xóa.

| S-ID | Nội dung nguồn (`D-04`) | Row ID | Vị trí trong bản thảo | Trạng thái | Đánh giá bảo tồn |
|---|---|---|---|---|---|
| `S-04.1` | Bản chất MO, LCAO, $\Psi/\Psi^*$, electron phi định xứ | `M-04.05` | `T-04.4.1.1`–`T-04.4.1.3` | **Preserved** (Expanded) | Đủ định nghĩa, hai tổ hợp, ý nghĩa phi định xứ; bổ sung chuẩn hóa/$E_\pm$ có `[ADDED]`/`[VERIFY]`. |
| `S-04.2` | Ba điều kiện tổ hợp; $\Delta E\le10$–$14$ eV; $S_{AB}$; đối xứng | `M-04.06` | `T-04.4.2.1`–`T-04.4.2.3` | **Preserved** (Expanded) | Ngưỡng $\le10$–$14$ eV và $\le12$ eV cho $2p$–$2s$ đều còn; đủ ba điều kiện và ví dụ $s$–$p_x$; có `[VERIFY: V-04.04]`. |
| `S-04.3` | Phân loại MO, $BO$, từ tính, $BO$ bán nguyên, $He_2$ | `M-04.07` | `T-04.4.3.1`–`T-04.4.3.3` | **Altered** (approved) | Giữ đủ công thức/tiêu chí; đổi “$BO=0$ không tồn tại” → “không có liên kết cộng hóa trị bền”, bỏ mẹo “BO lẻ”, tách $H_2^+$. Còn phát biểu quá rộng “cả dãy oxygen bán nguyên” → `QA3-04.01`. |
| `S-04.4` | Hai trật tự MO; cấu hình $O_2, N_2$; $BO$; $E_{lk}(N_2)$; $\Delta E(2p-2s)\le12$ eV | `M-04.08`, `M-04.11`, `M-04.12` | `T-04.4.4.1`–`T-04.4.4.3`, `T-04.5.1`, `T-04.5.2` | **Preserved** (Expanded) | Hai trật tự, cấu hình, $BO$, 2 e độc thân, $E_{lk}$ đều còn; bổ sung $B_2, C_2, F_2$ có thẻ; “lực đẩy tĩnh điện lượng tử” → “trộn cấu hình” (làm rõ). |
| `S-04.5` | Dị hạch, CO: $BO=3$, HOMO trên C, $\sigma$-donor/$\pi$-backbonding, CO–Hb 200–250× | `M-04.09`, `M-04.13` | `T-04.4.5.1`–`T-04.4.5.3`, `T-04.5.3` | **Preserved** | Đủ nguyên tắc dị hạch, HOMO/LUMO, hai thành phần liên kết, cảnh báo độc tính; bổ sung định nghĩa HOMO/LUMO có `[ADDED]`. |
| `S-04.6` | Ý nghĩa MO: $BO$, độ bền, từ tính, **hấp thụ ánh sáng**, HOMO/LUMO, CO–Hb | `M-04.04`, `M-04.17` | `T-04.3.1`, `T-04.6.1` | **Preserved** (Expanded) | Ý “hấp thụ ánh sáng” nay có ở ý 8 dòng 345; phần mở rộng “UV–Vis/màu sắc” đã có `[ADDED: UV–Vis/color gloss]`. |
| `S-04.7` | Ví dụ $O_2$ thuận từ / $N_2$ nghịch từ, $BO$, cấu hình | `M-04.12` | `T-04.5.2` | **Preserved** (Expanded) | Ví dụ 4.2 giữ đủ Given–Find–Approach–Solution–Check, cấu hình, $BO$, từ tính, nhận xét $N_2$ trơ. |
| `S-04.8` | Dãy $BO$ oxygen $2,5/2/1,5/1$; quy luật thêm e phản liên kết | `M-04.11` | `T-04.5.1`, Bảng 4.3 | **Preserved** (Expanded) | Đủ bốn giá trị và quy luật; mở rộng bảng $N_b, N_a$, $\pi^*$, từ tính; thêm $H_2^+$ có `[ADDED]`. |
| `S-04.9` | Hộp “Cách nhớ”: thứ tự điền, hai trật tự, mẹo từ tính, $BO$ lớn → ngắn/bền | `M-04.17` | `T-04.6.1` | **Altered** (approved) | Giữ quy tắc điền và hai trật tự; bỏ vế “BO lẻ” (đúng khoa học), thay bằng tiêu chí electron độc thân; có `[VERIFY: V-04.12]`. |

**Kết luận C:** `9/9` S-ID hiện diện; `0` Missing; `0` REMOVE chưa duyệt; hai thay đổi “Altered” (`S-04.3`, `S-04.9`) đều đã được duyệt và ghi changelog.

---

## D. Calculation Table

Tái tính độc lập **34 hạng mục số học** (mọi ví dụ, bảng, đáp án số, cân bằng electron/điện tích, đơn vị). Bảng đầy đủ theo cột **Original | Recomputed | Match** nằm tại `_state/checks/ch04_s4_calc_r3.md` §3. Kết quả: **34/34 khớp số học**; **0 lỗi số học**; **1 hạng mục diễn đạt không khớp** (`QA3-04.01`, hàng 35 — không phải phép tính).

| Nhóm kiểm tra | Số hạng mục | Kết quả |
|---|---:|---|
| Thời lượng học tập, chuẩn hóa, điều kiện $E_+<\alpha$, miền $|S|$ | 4 | **4/4 khớp** |
| Dãy oxygen $O_2^{2-}/O_2^-/O_2/O_2^+$ và $H_2^+$ | 5 | **5/5 khớp** |
| $B_2, C_2, N_2, O_2, F_2, CO$ | 5 | **5/5 khớp** |
| $B_2H_6$: tổng e, terminal/cầu, $2c$–$2e$, $3c$–$2e$, octet | 5 | **5/5 khớp** |
| Câu 10: $8+8=16>12$; $8+4=12$; 12 e/6 cặp | 2 | **2/2 khớp** (số học + logic) |
| Bảng 4.2, 4.3, 4.5, 4.6 | 4 | **4/4 khớp** |
| Bài tập 5–7, Câu 8–10 | 5 | **5/5 khớp** |
| Bảo toàn electron/điện tích, đơn vị/thứ nguyên | 2 | **2/2 khớp** |
| **Tổng** | **34** | **34/34 khớp** |

**Các điểm kiểm tra trọng yếu:**
- **Câu 10 (sau khi bỏ B–B):** 4 terminal B–H $=8$ e; mỗi cầu mô tả bằng hai $2c$–$2e$ cần 4 e, hai cầu 8 e; tổng $8+8=16>12$. Mô hình $3c$–$2e$ dùng $8+4=12$ e, không có B–B; **khớp** bước 3 dòng 540 (“hai cầu dùng 4 e; cộng 8 e terminal được 12 e”). Không còn mâu thuẫn.
- **Dãy oxygen:** $O_2^{2-}$ 8/6/1/0; $O_2^-$ 8/5/1,5/1; $O_2$ 8/4/2/2; $O_2^+$ 8/3/2,5/1; $H_2^+$ 1/0/0,5/1 — tất cả khớp.
- **Năm phân tử đồng hạch:** $B_2$ 4/2/1/2; $C_2$ 6/2/2/0; $N_2$ 8/2/3/0; $O_2$ 8/4/2/2; $F_2$ 8/6/1/0 — khớp Bảng 4.2 và 4.6.
- **CO:** 10 e; $N_b=8$, $N_a=2$, $BO=3$, 0 e độc thân — khớp.
- **Thời lượng:** 4.235 từ Mục 1–6 (gồm tiêu đề) $/1.500 = 2$ h 49,4 ph; $+40$ ph $= 3$ h 29,4 ph $\approx$ **3 h 30**; bản thảo ghi ~2 h 50 và ~3 h 30 — khớp trong mức làm tròn.

---

## E. Tag and Reference Audit

### E.1 Thẻ provenance (đếm bằng `_tools/check_tags.py` trên `ch04_draft.md`)

| Thẻ | Vòng 1 | Vòng 2 | Vòng 3 | Ghi chú |
|---|---:|---:|---:|---|
| `[ADDED]` | 54 | 56 | **57** | +1 do `QA2-04.05` (`[ADDED: UV–Vis/color gloss]`). |
| `[VERIFY]` | 44 | 44 | **44** | Không đổi; mã `V-04.01`–`V-04.12`. |
| `[CONFLICT]` | 0 | 0 | **0** | Không có mâu thuẫn chưa xử lý. |
| `[FIGURE]` | 0 (tool) / 5 (thủ công) | 5 (tool) | **5** (tool) | Cú pháp `[FIGURE: 4.x …]` đúng. |
| `[SRC]` | — | — | **32** | Tất cả `S-04.x` có ít nhất một `[SRC]`. |

- **(a) Nội dung thêm chưa gắn `[ADDED]`:** **0** trường hợp tại thời điểm này. Cụm “(UV–Vis) và màu sắc” (dòng 345) đã có `[ADDED: UV–Vis/color gloss]`; câu nối dòng 9 có `[ADDED: bridge from Ch03]`. (Xem H.2 về cụm “quang phổ phức chất” — thẻ có, nhưng phạm vi cần chốt.)
- **(b) Khẳng định cần `[VERIFY]` nhưng thiếu:** **0** trường hợp nghiêm trọng. Toàn bộ dữ kiện thực nghiệm/ngoài nguồn ($O_2$ thuận từ, $BO$ bán nguyên, $E_{lk}(N_2)$, ngưỡng $\Delta E$, CO–Hb 200–250×, $B_2H_6$ $3c$–$2e$, $He_2$, $CO$ HOMO) đều có `[VERIFY]` với mã `V-04.xx`.
- **(c) Dùng thẻ sai chức năng:** **0**. Không còn mã issue `I-04.xx` trong bản thảo; `[FIGURE]` đúng cú pháp; `[ADDED]` không dùng cho dữ liệu thực nghiệm.
- **Cấu trúc T-ID:** **61 lần xuất hiện, 51 mã duy nhất**; 5 mã xuất hiện nhiều lần (`T-01.4.1` ×3, `T-03.4.6` ×6, `T-04.2.1` ×2, `T-04.5.5` ×2, `T-04.7.4` ×2) — tất cả là **tham chiếu chéo** trong thân bài, không phải tiêu đề trùng.

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
| **`LO-3`** | Giải thích $O_2$ thuận từ, bậc bán nguyên dãy oxygen ($H_2^+$ là ví dụ minh họa), $N_2/O_2$, CO–hemoglobin qua HOMO–LUMO | `T-04.4.4.3`, `T-04.4.5`, `T-04.5.2`, `T-04.5.3` | Bài tập 5, 7; Câu 8, 9 | Application / Analysis | Có (dòng 458–484, 524–534) | **Đạt** (giá trị đúng; còn lỗi diễn đạt `QA3-04.01`) |
| **`LO-4`** | So sánh MO với VB, nhận diện khi nào cần MO, giải thích $3c$–$2e$ trong $B_2H_6$, nêu giới hạn mô hình | `T-04.3.1`, `T-04.4.6`, `T-04.6.2` | Câu 8 (phần 3), Câu 10 | Analysis / Advanced | Có (dòng 528, 536–540) | **Đạt** (Câu 10 đã hết mâu thuẫn) |

**Kết luận F:** cả bốn `LO-1`–`LO-4` đều được **giảng dạy** và **đánh giá** bằng câu hỏi/bài tập có đáp án chi tiết. `LO-3` đã được chỉnh cho khớp Bài tập 5; `LO-4` đã được xác nhận lại sau khi sửa Câu 10. Không có LO nào “không được dạy” hoặc “không được đánh giá”.

---

## G. Strengths

1. **Bảo toàn nguồn xuất sắc:** 9/9 S-ID, `REMOVE = 0`, không mất nội dung cốt lõi; các thay đổi nghĩa đều có chủ đích, ghi changelog và gắn `[VERIFY]`.
2. **Số học rất vững:** 34/34 hạng mục tái tính khớp, gồm toàn bộ dãy $O_2$, $B_2/C_2/N_2/O_2/F_2$, $CO$, $H_2^+$, $B_2H_6$, bảo toàn electron/điện tích và đơn vị.
3. **Câu 10 đã được sửa đúng bản chất:** bỏ mô hình B–B giả định, dùng $8+8=16>12$ và $8+4=12$; lập luận không còn mâu thuẫn và khớp bước 3.
4. **Kỷ luật `DOMAIN_RULES` và R4:** không thêm liều/chỉ định/dược động học; ba thẻ tham khảo đúng quy tắc, không bịa thư mục.
5. **Sáu issue vòng 2 được xử lý nghiêm túc:** 5 sạch hoàn toàn; bản sửa $H_2^+$ đúng yêu cầu, chỉ còn một phát biểu quá rộng cần chỉnh.

---

## H. Items for Human Expert Decision

1. **`QA3-04.01` (bậc bán nguyên dãy oxygen):** chọn cách viết “chỉ $O_2^+$ và $O_2^-$ có $BO$ bán nguyên; $O_2$ ($BO=2$) và $O_2^{2-}$ ($BO=1$) là số nguyên” và áp dụng nhất quán ở dòng 123, 217, 340. Đề xuất sửa ở S5/Clean, không cần mở vòng QA mới.
2. **Cụm “quang phổ phức chất” (dòng 9):** nguồn `S-04.6` chỉ nói “hấp thụ ánh sáng”, không nói “phức chất”; ma trận `M-04.04` ghi “quang phổ”, còn liên kết xuôi sang Chương 6 mới nói “phổ hấp thụ và màu phức chất”. Cần chốt: giữ cụm này như câu nối Chương 3/6, đổi thành “quang phổ/hấp thụ ánh sáng”, hay thêm `[VERIFY]`. `[INTERNAL]`
3. **Bảng 4.4, hàng “Ba điều kiện tổ hợp AO”:** câu “Thiếu một điều kiện thì xen phủ hiệu dụng bằng 0” là cách nói quá tuyệt đối (nếu lệch năng lượng, $S_{AB}$ có thể vẫn khác 0 nhưng tương tác không hiệu quả). Cân nhắc đổi thành “không tạo MO liên kết hiệu quả/không tương tác đáng kể”. `[INTERNAL]`
4. **Ngưỡng $\Delta E$ (`V-04.04`):** chốt cách trình bày giữa $\le10$–$14$ eV (`S-04.2`) và $\le12$ eV cho $2p$–$2s$ (`S-04.4`) — giữ cả hai kèm chú thích (hiện tại) hay dùng một ngưỡng duy nhất.
5. **Dữ kiện ngoài nguồn:** xác nhận $E_{lk}(N_2)\approx945$ kJ/mol, CO–Hb bền gấp 200–250 lần, $O_2$ lỏng thuận từ, $B_2H_6$ $3c$–$2e$, $He_2$ van der Waals, CO HOMO trên C (`V-04.01`–`V-04.10`).
6. **Tài liệu tham khảo (`V-04.08`):** cung cấp giáo trình chuẩn để thay ba thẻ `[VERIFY]` và áp dụng Vancouver.
7. **Sản xuất hình:** 5 placeholder Hình 4.2–4.6 cần vẽ; Hình 4.1 (Mermaid) cần kiểm tra render trên nền tảng xuất bản.
8. **`LO-3`:** xác nhận cách đưa $H_2^+$ thành “ví dụ minh họa cho bậc 0,5” (thay vì một mục đánh giá riêng) là đủ cho chuẩn đầu ra.
9. **Chính sách `[ADDED]`:** xác nhận các cụm thuật ngữ mở rộng (“UV–Vis/color”, “quang phổ phức chất”) chỉ cần `[ADDED]` hay cần thêm `[VERIFY]` khi không có trong nguồn.

---

## I. Not Verified / Limitations

1. **Không có nguồn tham khảo ngoài:** `APPROVED_REFERENCE_LIST: none`; QA **không thể** xác nhận bất kỳ dữ kiện nào với giáo trình/tài liệu gốc. Các giá trị $BO$, trật tự MO, ngưỡng $\Delta E$, $E_{lk}(N_2)=945$ kJ/mol, độ bền CO–Hb 200–250× và tính thuận từ của $O_2$ lỏng vẫn là **giả thuyết cần chuyên gia xác nhận**.
2. **Không kiểm tra hình ảnh:** Hình 4.2–4.6 chỉ là placeholder; Hình 4.1 là Mermaid. Không có QA trực quan về bố cục, nhãn trục, mũi tên spin hay màu.
3. **Không đọc suy luận tác giả:** không đọc `ch04_selfcheck.md`, `ch04_part1.md`–`ch04_part3.md` hay thảo luận tác giả; chỉ đối chiếu nguồn, ma trận, bản thảo, changelog, QA vòng 1–2 và audit.
4. **Khác biệt phương pháp đếm từ:** `check_length.py` báo nguồn 1.153 từ (sau khi bỏ math/markup), trong khi audit ghi 1.443 từ; tỷ lệ 6,02× chỉ mang tính tham khảo, không dùng để kết luận over-compression.
5. **`_tools/check_calc_ch04.py` lỗi thời:** hardcode giá trị vòng 1, không parse bản hiện tại và có thể ghi đè báo cáo cũ; vòng 3 dùng script Python tạm độc lập.
6. **Phụ thuộc quy ước dấu:** biểu thức $E_\pm$ và điều kiện $\beta<\alpha S$ phụ thuộc quy ước $\alpha,\beta<0$, $S>0$; QA dùng quy ước đã nêu trong bản thảo. Nếu đổi quy ước pha, phải phát biểu lại điều kiện.
7. **Trật tự MO và mức trộn $s$–$p$** là mô hình định tính; QA không kiểm tra giá trị năng lượng tuyệt đối hay hệ số tổ hợp cụ thể.
8. **44 thẻ `[VERIFY]` vẫn mở:** QA chỉ kiểm tra vị trí/cú pháp, không xác nhận nội dung khoa học bên trong.
9. **Không tái thẩm định Chương 01–03:** chỉ kiểm tra sự tồn tại/ngữ cảnh các `T-ID` tham chiếu (`T-01.4.1`, `T-02.4.2`, `T-03.4.2`, `T-03.4.6`); cụm “quang phổ phức chất” ở dòng 9 chưa được đối chiếu với nội dung Chương 3.
10. **Cách hiểu “xen phủ hiệu dụng”** trong Bảng 4.4: QA không coi đây là lỗi số học; nếu Hội đồng muốn chính xác tuyệt đối, xem H.3.

---

**GATE B: PASS.** Báo cáo QA vòng 3 hoàn tất. Không sửa bản thảo, nguồn hay `_state/` (ngoài `ch04_s4_calc_r3.md`). Không còn Critical/Major; `QA3-04.01` là Minor diễn đạt, có thể xử lý ở S5/Clean.
