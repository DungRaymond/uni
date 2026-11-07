# Báo cáo Kiểm định Chất lượng Độc lập (S4 QA — Vòng 3) · Chương 01

- **Dự án:** Hóa vô cơ dược – Master Lecture Notes
- **Chương kiểm định:** Chương 01 — Đại cương Liên kết Hóa học, Thuyết Lewis & Quy tắc Bát tử
- **Bản thảo kiểm định:** `03_chapters/ch01_v2.md`
- **Tài liệu đối chiếu:** `00_config.md`, `00_source_original/ch01_doc-hvc-1.html` (D-01), `02_mapping/ch01_matrix_APPROVED.md`, `03_chapters/ch01_changelog.md`
- **Giai đoạn:** Stage S4 — Independent QA (Round 3)
- **Ngày thực hiện:** 2026-11-07
- **Tính độc lập (Rule 6.3):** Thực hiện bởi subagent độc lập trong ngữ cảnh mới (fresh context), không đọc báo cáo QA các vòng trước (`ch01_qa_r1.md`, `ch01_qa_r2.md`) hay `ch01_revision_log.md`.

---

## A. Verdict

- **Phán quyết (Verdict):** **PASS**
- **Thống kê lỗi theo mức độ nghiêm trọng (Severity Counts):**
  - **Critical (Nghiêm trọng):** `0`
  - **Major (Lớn):** `0`
  - **Minor (Nhỏ / Hình thức):** `3`
- **Lý giải (Justification):**
  Bản thảo `ch01_v2.md` bảo toàn 100% nội dung học thuật từ 7 phân đoạn nguồn (`S-01.1` đến `S-01.7`, độ phủ đạt `100,0%` theo `check_coverage.py`), đạt dung lượng `2.081` từ so với `1.119` từ của nguồn (`1,86x` theo `check_length.py`, tuân thủ R7) và có hệ thống `30` mã `T-ID` hoàn toàn duy nhất (`check_ids.py`). Toàn bộ 22 phép tính số học, hằng số quy đổi đơn vị, bậc liên kết, tổng electron hóa trị và điện tích hình thức ($FC$) trong ví dụ mẫu cũng như đáp án bài tập đều khớp tuyệt đối 100% khi tính toán lại độc lập bằng Python. Toàn bộ `38` thẻ `[ADDED]` và `13` thẻ `[VERIFY]` (`[CONFLICT] = 0`, theo `check_tags.py`) được gắn đầy đủ, chính xác cho từng phần bổ sung sư phạm mà không có đoạn văn mới nào bị bỏ sót thẻ; mục Tài liệu tham khảo (`T-01.8.1`) và nội dung sinh học hoàn toàn tuân thủ quy tắc liêm chính `R4`, `R5` và `DOMAIN_RULES`. Ba điểm lưu ý nhỏ (Minor) chỉ liên quan đến đánh số nhãn bảng/hình để chuẩn bị cho bước S5A và đồng bộ hóa mô tả trong `ch01_changelog.md`, không yêu cầu trả lại tác giả (`Return to author = N`).

---

## B. Issue Table

| Issue ID | T-ID | Category | Severity | Basis | Evidence (Source / Matrix vs. Draft `ch01_v2.md`, max 25 words each) | Recommended Correction | Return to Author (Y/N) |
|---|---|---|---|---|---|---|---|
| `ISS-R3-01` | `T-01.4.3`, `T-01.5.3`, `T-01.5.4`, `T-01.6.1` | Formatting & Captions (Rule 7.3 / 7.6) | **Minor** | `[INTERNAL]` | **Rule 7.3/7.6:** "number and caption all tables and figures"; boxes use `> **Important Note.**` vs. **Draft:** 2 bảng, 2 sơ đồ Mermaid chưa đánh số `Bảng 1.k`/`Hình 1.k`, dùng `> [!NOTE]`. | Bổ sung nhãn đánh số `Bảng 1.1`, `Bảng 1.2`, `Hình 1.1`, `Hình 1.2` và chuẩn hóa hộp lưu ý `> **Important Note.**` trực tiếp trong giai đoạn biên tập chuẩn hóa S5A. | **N** |
| `ISS-R3-02` | `T-01.4.2`, `T-01.6.2` | Notation Consistency | **Minor** | `[INTERNAL]` | **Draft L77:** "Momen lưỡng cực liên kết ($\vec{\mu}_{lk}$)..." vs. **Draft L78 & L289:** công thức hiển thị viết `$$\vec{\mu} = q \cdot \vec{d}$$` (không có chỉ số dưới `lk`). | Có thể đồng bộ ký hiệu công thức thành `$$\vec{\mu}_{lk} = q \cdot \vec{d}$$` ở bước chuẩn hóa S5A để thống nhất tuyệt đối với lời dẫn. | **N** |
| `ISS-R3-03` | `T-01.4.7`, `T-01.8.1` (trong `ch01_changelog.md`) | Metadata Sync | **Minor** | `[INTERNAL]` | **Changelog L34:** "4 tài liệu đề xuất thẩm định theo chuẩn Vancouver" & cột thẻ chưa liệt kê đủ 38 thẻ vs. **Draft `T-01.8.1`:** 3 mục `[VERIFY: reference needed...]`, 38 thẻ `[ADDED]`. | Cập nhật bảng nhật ký `ch01_changelog.md` ở bước hậu kiểm/S5 để khớp số lượng 38 thẻ `[ADDED]`, 13 thẻ `[VERIFY]` và 3 dòng giữ chỗ tài liệu tham khảo của `ch01_v2.md`. | **N** |

---

## C. Coverage Table

Kết quả chạy công cụ kiểm tra độ phủ cơ học `check_coverage.py` đối chiếu toàn bộ 7 `S-ID` của nguồn gốc (`S-01.1` đến `S-01.7`): **Covered = 7/7 (100,0%), Missing = 0**.
Kiểm tra dòng `REMOVE` trong `ch01_matrix_APPROVED.md`: **0 dòng REMOVE** (không có phân đoạn nguồn nào bị xóa bỏ). Cụm từ lẻ *"và CO"* ở cuối `S-01.3` được lược bỏ theo đúng phương án phê duyệt câu hỏi mở Q1 tại Gate A.

| S-ID | Nội dung nguồn (`00_source_original/ch01_doc-hvc-1.html`) | Mục tiêu (`T-ID` trong `ch01_v2.md`) | Phân loại (Status) | Bằng chứng đối chiếu & Đánh giá ngữ nghĩa (Meaning Changed?) |
|---|---|---|---|---|
| `S-01.1` | **1. Các đại lượng đặc trưng của liên kết hóa học & phân tử** (L1–25): $E_{lk}$ ($839 > 614 > 348\text{ kJ/mol}$), độ dài $d_{lk}/r_{lk}$ ($1,54 > 1,34 > 1,20\text{ Å}$), góc $\theta$, momen $\vec{\mu} = q \cdot \vec{d}$ ($1\text{ D} = 3,336 \times 10^{-30}\text{ C}\cdot\text{m}$), thang $\Delta\chi$ Pauling ($<0,4$; $0,4–1,7$; $\ge 1,7$), $\vec{\mu}_{pt} = \sum \vec{\mu}_i$, đoạn Ý nghĩa. | `T-01.4.1`, `T-01.4.2`, `T-01.4.3`, `T-01.4.7` | **Altered (Form/Notation) / Preserved (Meaning)** | **Nguồn:** `$r(C - C) \approx 1,54\text{ Å}$`, danh sách bullet ngưỡng $\Delta\chi$. **Bản thảo:** `$r(C - C) \approx 154\text{ pm } (1,54\text{ Å})$`, chuyển danh sách $\Delta\chi$ thành bảng so sánh, tách rõ ký hiệu $\vec{\mu}_{lk}$ và $\vec{\mu}_{pt}$ theo đúng ma trận M-01.05–M-01.07. **Đổi nghĩa:** **Không** (bảo toàn 100% dữ kiện và ví dụ $H_2, Cl_2, C-H, H-Cl, C-O, NaCl, KBr, CO_2, CCl_4, BF_3, SF_6, H_2O, NH_3, CHCl_3$). |
| `S-01.2` | **2. Thuyết Lewis & Điện tích hình thức** (L26–50): Quy tắc bát tử ($ns^2np^6$, $1s^2$ He), công thức $FC = V - N - \frac{B}{2}$, 3 tiêu chuẩn bền, cộng hưởng ($CO_3^{2-}$ với $r=1,28\text{ Å}$, bậc $1\frac{1}{3}\approx 1,33$; $NO_3^-, SO_4^{2-}, C_6H_6$), đoạn Ý nghĩa. | `T-01.4.4`, `T-01.4.5`, `T-01.4.7` | **Altered (Terminology) / Preserved (Meaning)** | **Nguồn:** "sự lai hóa cộng hưởng (hybrid resonance)", "$1,28\text{ Å}$". **Bản thảo:** "tổ hợp cộng hưởng (hybrid resonance)" (tránh nhầm với lai hóa orbital theo M-01.09/C.4), "$r(C-O) = 128\text{ pm } (1,28\text{ Å})$". Đoạn Ý nghĩa L50 được gộp nguyên vẹn vào `T-01.4.7` (L179–180). **Đổi nghĩa:** **Không**. |
| `S-01.3` | **3. Các ngoại lệ quan trọng của Quy tắc Bát tử** (L51–66): Hộp callout 3 ngoại lệ (Thiếu e: $BeCl_2, BF_3, AlCl_3$ Acid Lewis mạnh; Số e lẻ: $NO$ 11e, $NO_2$ 17e, $ClO_2$ 19e, thuận từ, $NO$ hoạt hóa Guanylyl Cyclase giãn mạch hạ huyết áp; Mở rộng bát tử: chu kỳ $\ge 3$ có phân lớp $d$ trống $3d, 4d$, $PCl_5, SF_6, H_2SO_4, XeF_4, IF_7$) & đoạn Ý nghĩa. | `T-01.4.6`, `T-01.4.7` | **Altered (Style & Scope Q1) / Preserved (Meaning)** | **Nguồn:** Tiêu đề "⚠️ 3 trường hợp ngoại lệ kinh điển cần nắm chắc trong đề thi:" và câu cuối "NO và CO minh họa... và độc tính". **Bản thảo:** Chuyển sang văn phong học thuật chính quy (theo Q3) và lược bỏ cụm "và CO... và độc tính" (theo phê duyệt Q1 tại Gate A vì CO không phải ngoại lệ bát tử). **Đổi nghĩa:** **Không** (toàn bộ nội dung hóa học & dược lý của $NO$ được giữ nguyên). |
| `S-01.4` | **Ý nghĩa và tác dụng** (L67–68): Đoạn tổng kết vai trò cấu trúc Lewis, $FC$, cộng hưởng, độ phân cực với màng sinh học/đích thuốc và ngoại lệ bát tử cùng $NO$. | `T-01.4.7` | **Preserved** | Hợp nhất với các câu ý nghĩa trùng lặp từ `S-01.1`, `S-01.2`, `S-01.3` tại `T-01.4.7` (L179–186) theo đúng kế hoạch `MERGE` ở dòng ma trận M-01.11. Giữ nguyên đầy đủ nội dung, **không đổi nghĩa**. |
| `S-01.5` | **Ví dụ — Tính điện tích hình thức cho $CO_2$ và $NO_3^-$** (L69–74): Tính $FC$ từng nguyên tử và kiểm tra tổng $\sum FC$ cho $CO_2$ ($O=C=O$) và $NO_3^-$ (1 liên kết đôi + 2 liên kết đơn). | `T-01.5.1` | **Altered (Structure) / Preserved (Meaning)** | **Nguồn:** Đoạn văn ngắn trong `example-box`. **Bản thảo:** Cấu trúc hóa thành 6 mục chuẩn `Given | Find | Approach | Solution | Check | Interpretation` theo Rule 7.3 và M-01.12. Toàn bộ con số ($V, N, B, FC, \sum FC$) được giữ nguyên 100%, **không đổi nghĩa**. |
| `S-01.6` | **Ví dụ — Ba ngoại lệ bát tử trong thực tế** (L75–80): $BF_3 + NH_3 \rightarrow F_3B-NH_3$; $PCl_5$ (10e), $SF_6$ (12e) nhờ orbital $d$ trống chu kỳ 3; $NO$ (11e) gốc tự do, thuận từ, hoạt hóa guanylyl cyclase $\rightarrow$ giãn mạch, hạ huyết áp. | `T-01.4.6`, `T-01.4.7`, `T-01.5.2` | **Preserved** | Được giữ nguyên trọn vẹn tại mục riêng `T-01.5.2` (L220–224) theo Đề cương C.1 của ma trận được duyệt, đồng thời tích hợp làm dẫn chứng trong `T-01.4.6` (L160) và `T-01.4.7` (L187). **Không đổi nghĩa**. |
| `S-01.7` | **Cách nhớ — Quy trình 4 bước viết Lewis** (L81–83): (1) tính tổng e hóa trị; (2) nối liên kết đơn & rải e tự do; (3) chuyển cặp e thành liên kết bội nếu tâm chưa đủ 8e; (4) tính $FC$, chọn $|FC|$ nhỏ nhất, tổng $FC$ bằng điện tích. | `T-01.4.4`, `T-01.5.3` | **Altered (Style) / Preserved (Meaning)** | **Nguồn:** Hộp callout "Cách nhớ". **Bản thảo:** Chuẩn hóa thành mục học thuật `5.3 Quy trình chuẩn 4 bước thiết lập công thức Lewis tối ưu {T-01.5.3}` kèm lưu đồ Mermaid (`[ADDED]`), giữ nguyên 4 bước và tích hợp tiêu chí cực tiểu hóa $\sum |FC|$ vào `T-01.4.4`. **Không đổi nghĩa**. |

---

## D. Calculation Table

Toàn bộ các phép tính số học, chuyển đổi đơn vị, hằng số vật lý, bậc liên kết, số electron hóa trị, công thức hóa học (kiểm tra cân bằng nguyên tố và bảo toàn điện tích) trong cả phần lý thuyết, ví dụ mẫu (`T-01.5.1`) và bài tập tự lượng giá (`T-01.7.1`–`T-01.7.4`) đã được tính toán lại độc lập bằng script Python.

| # | Vị trí (`T-ID`) | Đại lượng / Bài toán kiểm tra | Giá trị trong bản thảo (`Original`) | Giá trị tính lại bằng Python (`Recomputed`) | Kiểm tra đơn vị, nguyên tố & điện tích | Khớp (`Match`) |
|---|---|---|---|---|---|---|
| 1 | `T-01.1.2` | Ước tính thời lượng học theo `STUDY_TIME_RULE` (`1h/1500 từ + 20p/5 bài`) | `1,5 giờ` (60p lý thuyết + 30p bài tập) | Lý thuyết T1–T6 (~1.450 từ) $\approx 58\text{ p}$; 8 câu T7 $= 32\text{ p}$; Tổng $= 90\text{ p} = 1,5\text{ h}$ | Đơn vị giờ/phút nhất quán, khớp ma trận M-01.02 | **Yes** |
| 2 | `T-01.4.1` | Hệ số chuyển đổi Ångström sang picomet và mét | $1\text{ Å} = 100\text{ pm} = 10^{-10}\text{ m}$ | $10^{-10}\text{ m} / 10^{-12}\text{ m/pm} = 100\text{ pm}$ | Chuẩn thứ nguyên độ dài SI ($\text{m}, \text{pm}$) | **Yes** |
| 3 | `T-01.4.1`, `T-01.7.1` | Quy đổi độ dài liên kết $r(C-C), r(C=C), r(C\equiv C)$ từ $\text{Å}$ sang $\text{pm}$ | $1,54\text{ Å} = 154\text{ pm}$; $1,34\text{ Å} = 134\text{ pm}$; $1,20\text{ Å} = 120\text{ pm}$ | $1,54 \times 100 = 154\text{ pm}$; $1,34 \times 100 = 134\text{ pm}$; $1,20 \times 100 = 120\text{ pm}$ | Thứ tự $154 > 134 > 120\text{ pm}$ ngược chiều $E_{lk}$ ($348 < 614 < 839\text{ kJ/mol}$) | **Yes** |
| 4 | `T-01.4.2`, `T-01.6.2` | Hằng số quy đổi đơn vị Debye ($\text{D}$) sang hệ SI ($\text{C}\cdot\text{m}$) | $1\text{ D} = 3,336 \times 10^{-30}\text{ C}\cdot\text{m}$ | $10^{-21} / c = 10^{-21} / 299792458 = 3,33564 \times 10^{-30}\text{ C}\cdot\text{m} \approx 3,336 \times 10^{-30}\text{ C}\cdot\text{m}$ | Thứ nguyên điện tích $\times$ chiều dài ($\text{C}\cdot\text{m}$) chính xác | **Yes** |
| 5 | `T-01.4.5` | Độ dài liên kết $r(C-O)$ và bậc liên kết cộng hưởng trong $CO_3^{2-}$ | $r = 128\text{ pm } (1,28\text{ Å})$; Bậc liên kết $= 1\frac{1}{3} \approx 1,33$; Điện tích mỗi O $= -2/3$ | $1,28 \times 100 = 128\text{ pm}$; Bậc $= (2+1+1)/3 = 4/3 \approx 1,33$; $\bar{q}_O = -2/3$ | Bảo toàn điện tích: $3 \times (-2/3) = -2 = q(CO_3^{2-})$ | **Yes** |
| 6 | `T-01.4.5` | Bậc liên kết cộng hưởng trong $NO_3^-$ và Benzen ($C_6H_6$) | $NO_3^-$: bậc $1\frac{1}{3}$; $C_6H_6$: bậc $1,5$ | $NO_3^-$: $4/3 = 1\frac{1}{3}$; $C_6H_6$: $(3 \times 2 + 3 \times 1)/6 = 9/6 = 1,5$ | Khung 3 liên kết $N-O$ và 6 liên kết $C-C$ đồng nhất | **Yes** |
| 7 | `T-01.4.6`, `T-01.5.2` | Số electron hóa trị xung quanh nguyên tử trung tâm nhóm thiếu bát tử ($BeCl_2, BF_3, AlCl_3$) | $BeCl_2$: $4\text{ e}$ quanh Be; $BF_3, AlCl_3$: $6\text{ e}$ quanh B, Al | Be ($V=2, 2\text{ lk đơn}$) $\Rightarrow B=4\text{ e}$; B/Al ($V=3, 3\text{ lk đơn}$) $\Rightarrow B=6\text{ e}$ | Phản ứng phối trí $BF_3 + NH_3 \rightarrow F_3B-NH_3$ bảo toàn nguyên tố (1B, 3F, 1N, 3H) và điện tích ($0$) | **Yes** |
| 8 | `T-01.4.6`, `T-01.5.2` | Tổng số electron hóa trị của các phân tử electron lẻ ($NO, NO_2, ClO_2$) | $NO$: $11\text{ e}$; $NO_2$: $17\text{ e}$; $ClO_2$: $19\text{ e}$ | $NO: 5+6=11$; $NO_2: 5+2(6)=17$; $ClO_2: 7+2(6)=19$ | Tất cả đều là số lẻ (chứa 1 electron độc thân, thuận từ) | **Yes** |
| 9 | `T-01.4.6`, `T-01.5.2` | Số electron hóa trị quanh nguyên tử trung tâm nhóm mở rộng bát tử ($PCl_5, SF_6, H_2SO_4$) | $PCl_5$: $10\text{ e}$ quanh P; $SF_6$: $12\text{ e}$ quanh S; $H_2SO_4$: $12\text{ e}$ quanh S ($FC=0$) | $PCl_5$: $5 \times 2 = 10\text{ e}$; $SF_6$: $6 \times 2 = 12\text{ e}$; $H_2SO_4$ (2 lk $S=O$, 2 lk $S-OH$): $B(S)=12\text{ e}, FC(S)=6-0-6=0$ | Bảo toàn nguyên tố và tổng điện tích hình thức $\sum FC = 0$ | **Yes** |
| 10 | `T-01.5.1` (Ví dụ 1) | Tính $FC$ cho phân tử $CO_2$ ($O=C=O$) | $FC(C) = 4 - 0 - 4 = 0$; $FC(O) = 6 - 4 - 2 = 0$; $\sum FC = 0$ | $C(V=4, N=0, B=8) \Rightarrow FC = 0$; $O(V=6, N=4, B=4) \Rightarrow FC = 0$; $\sum FC = 0 + 2(0) = 0$ | Tổng e hóa trị $= 4 + 2(6) = 16\text{ e}$; mọi nguyên tử đạt bát tử ($8\text{ e}$); $\sum FC = 0$ | **Yes** |
| 11 | `T-01.5.1` (Ví dụ 2) | Tính $FC$ cho ion $NO_3^-$ (1 lk đôi $N=O$, 2 lk đơn $N-O$) | $FC(N) = +1$; $FC(O_{đôi}) = 0$; $FC(O_{đơn}) = -1$; $\sum FC = -1$ | $N(5,0,8)\Rightarrow +1$; $O_{đôi}(6,4,4)\Rightarrow 0$; $O_{đơn}(6,6,2)\Rightarrow -1$; $\sum FC = +1 + 0 + 2(-1) = -1$ | Tổng e hóa trị $= 5 + 3(6) + 1 = 24\text{ e}$; bảo toàn điện tích $\sum FC = -1 = q(NO_3^-)$ | **Yes** |
| 12 | `T-01.7.2`, `T-01.7.4` (Bài tập 5) | Tính $FC$ cho phân tử Ozone $O_3$ ($O_{(1)}=O_{(2)}-O_{(3)}$) | $FC(O_{(1)}) = 0$; $FC(O_{(2)}) = +1$; $FC(O_{(3)}) = -1$; $\sum FC = 0$ | $O_{(1)}(6,4,4)\Rightarrow 0$; $O_{(2)}(6,2,6)\Rightarrow +1$; $O_{(3)}(6,6,2)\Rightarrow -1$; $\sum FC = 0 + 1 - 1 = 0$ | Tổng e hóa trị $= 3 \times 6 = 18\text{ e}$ ($\sum N + B_{lk} = 12 + 6 = 18\text{ e}$); $\sum FC = 0$ | **Yes** |
| 13 | `T-01.7.2`, `T-01.7.4` (Bài tập 6) | Tổng e hóa trị và $FC$ của anion $BF_4^-$ | Tổng e $= 32$; $FC(B) = -1$; $FC(F) = 0$; $\sum FC = -1$; B đạt $8\text{ e}$ | $e = 3 + 4(7) + 1 = 32$; $B(3,0,8)\Rightarrow -1$; $F(7,6,2)\Rightarrow 0$; $\sum FC = -1 + 4(0) = -1$ | Bảo toàn $32\text{ e}$ ($4 \times 6\text{ e lẻ} + 4 \times 2\text{ e lk}$); B đạt bát tử ($8\text{ e}$); $\sum FC = -1$ | **Yes** |
| 14 | `T-01.7.3`, `T-01.7.4` (Câu 8) | Tổng số electron hóa trị của phân tử $NO$ | $5 (N) + 6 (O) = 11$ electron (số lẻ) | $V(N) + V(O) = 5 + 6 = 11$ electron | Số lẻ $\Rightarrow$ 1 electron độc thân $\Rightarrow$ gốc tự do, thuận từ | **Yes** |

---

## E. Tag and Reference Audit

### 1. Thống kê thẻ cơ học (từ `check_tags.py`)
| Loại thẻ (Tag Type) | Số lượng trong `ch01_v2.md` | Đánh giá tuân thủ (Rule R2, R4, R5) |
|---|---|---|
| `[ADDED]` | **38** | Hợp lệ 100%: dùng cho khung cấu trúc (T1–T3, T6–T8), giải thích khái niệm/thuật ngữ chuẩn giáo khoa, sơ đồ Mermaid và câu hỏi/đáp án lượng giá. |
| `[VERIFY]` | **13** | Hợp lệ 100%: bảo toàn đầy đủ 10 điểm dữ liệu/lý thuyết/dược lý cần xác minh từ Audit Queue (`V-01` đến `V-10`) và 3 yêu cầu bổ sung tài liệu tham khảo tại `T-01.8.1` (`V-11`). |
| `[CONFLICT]` | **0** | Hợp lệ (chương chỉ có 1 tài liệu nguồn duy nhất `D-01`, không có xung đột liên văn bản). |
| `[FIGURE]` | **0** | Hợp lệ (tài liệu nguồn không có hình cấu trúc; 2 sơ đồ tư duy/quy trình được vẽ trực tiếp bằng cú pháp Mermaid `graph TD` theo đúng `FIGURE_POLICY`). |

### 2. Kiểm toán chi tiết việc gắn thẻ (Task 4a, 4b, 4c)
- **(a) Nội dung bổ sung nhưng thiếu thẻ `[ADDED]` (Untagged additions):** **0 trường hợp.** Mọi đoạn văn, định nghĩa phụ trợ, giải thích hình học phân tử (L91, L93), giải thích bản chất liên kết trong bảng (L103, L104), bối cảnh lịch sử Lewis (L115), định nghĩa $FC$ (L118), giải tỏa điện tích/bậc liên kết (L147–149), định nghĩa acid Lewis/gốc tự do/thuận từ/so sánh chu kỳ 2–3 (L160–168) và khái niệm ưa nước/ưa lipid (L182) đều đã được gắn thẻ `[ADDED: ...]` tường minh.
- **(b) Khẳng định cần gắn `[VERIFY]` nhưng bị bỏ sót:** **0 trường hợp.** Toàn bộ các giá trị thực nghiệm ($839, 614, 348\text{ kJ/mol}$; $154, 134, 120\text{ pm}$; $128\text{ pm}$; $1\text{ D} = 3,336 \times 10^{-30}\text{ C}\cdot\text{m}$; ngưỡng $\Delta\chi = 0,4$ và $1,7$), mô hình orbital $d$ trống và cơ chế dược lý $NO$ – Guanylyl Cyclase đều đã được gắn thẻ `[VERIFY]`.
- **(c) Sử dụng sai chức năng thẻ (Misused tags):** **0 trường hợp.** Không có dữ liệu thực nghiệm mới, số liệu thống kê hay kết quả lâm sàng nào bị gắn nhãn `[ADDED]`.

### 3. Kiểm toán Tài liệu tham khảo (Task 5 & Rule R4)
- Tài liệu nguồn `ch01_doc-hvc-1.html` không chứa bất kỳ tài liệu tham khảo nào và `00_config.md` quy định `APPROVED_REFERENCE_LIST: none`.
- Tại mục `8.1 Danh mục tài liệu tham khảo & Ghi chú học thuật {T-01.8.1}` (L399–406), bản thảo `ch01_v2.md` **tuyệt đối không tự bịa đặt** tên tác giả, tên sách, năm xuất bản, số trang hay mã DOI. Thay vào đó, bản thảo sử dụng đúng 3 thẻ giữ chỗ chuẩn R4:
  1. `[VERIFY: reference needed for Inorganic Pharmaceutical Chemistry textbook]` (L404)
  2. `[VERIFY: reference needed for Chemical Bonding, Lewis Theory, Formal Charge, and Octet Exceptions]` (L405)
  3. `[VERIFY: reference needed for biological signaling of Nitric Oxide and Guanylyl Cyclase activation]` (L406)
- **Kết luận R4:** Tuân thủ nghiêm ngặt 100% quy tắc R4.

---

## F. Learning Objective Alignment Matrix

Đối chiếu 4 Chuẩn đầu ra (`LO-1` đến `LO-4` tại `T-01.2.1`) với nội dung giảng dạy (`T4`, `T5`, `T6`) và câu hỏi đánh giá (`T7`):

| Mã LO | Nội dung Chuẩn đầu ra (`T-01.2.1`) | Mục giảng dạy (`Where Taught`) | Câu hỏi / Bài tập đánh giá (`T-01.7`) | Cấp độ nhận thức (`Level`) | Đáp án & Biểu điểm (`T-01.7.4`) | Đánh giá độ phủ |
|---|---|---|---|---|---|---|
| **LO-1** | Định nghĩa và phân tích tương quan giữa $E_{lk}, r, \theta$ và bậc liên kết; phát biểu quy tắc bát tử ($ns^2np^6$) và đặc điểm 3 nhóm ngoại lệ bát tử. | `T-01.4.1`, `T-01.4.2`, `T-01.4.4`, `T-01.4.6`, `T-01.5.2`, `T-01.6.1` | **Câu 1** (`T-01.7.1` — tương quan bậc, độ dài, năng lượng liên kết Carbon)<br>**Câu 2** (`T-01.7.1` — nhận diện ngoại lệ thiếu electron $BeCl_2, BF_3$) | Knowledge (Nhận biết) | **Có** (L363–364: đáp án C và B kèm giải thích chi tiết) | **Đạt (100%)** |
| **LO-2** | Vận dụng hiệu độ âm điện Pauling ($\Delta\chi$) và tổng vector momen lưỡng cực ($\vec{\mu}_{pt}$) để phân biệt bản chất liên kết và dự đoán tính phân cực phân tử. | `T-01.4.2`, `T-01.4.3`, `T-01.5.4`, `T-01.6.1`, `T-01.6.2` | **Câu 3** (`T-01.7.1` — giải thích $\mu_{pt}=0$ của $CCl_4$ do đối xứng tứ diện)<br>**Câu 4** (`T-01.7.1` — sắp xếp độ phân cực $C-H < H-Cl < Na-Cl$ theo $\Delta\chi$) | Comprehension (Thông hiểu) | **Có** (L365–366: đáp án C và B kèm giải thích vector và ngưỡng $\Delta\chi$) | **Đạt (100%)** |
| **LO-3** | Áp dụng quy trình 4 bước thiết lập công thức Lewis; tính chính xác điện tích hình thức ($FC$) và lựa chọn cấu trúc cộng hưởng ưu thế. | `T-01.4.4`, `T-01.4.5`, `T-01.5.1`, `T-01.5.3`, `T-01.6.2` | **Bài tập 5** (`T-01.7.2` — tính $FC$ từng nguyên tử trong $O_3$ và kiểm tra $\sum FC$)<br>**Bài tập 6** (`T-01.7.2` — viết cấu trúc Lewis 4 bước, tính $FC$ và xét bát tử cho $BF_4^-$) | Application (Vận dụng) | **Có** (L369–385: lời giải từng bước, kiểm tra tổng e hóa trị và bảo toàn điện tích) | **Đạt (100%)** |
| **LO-4** | Phân tích nguyên nhân tồn tại hợp chất thiếu e, gốc tự do, siêu hóa trị; liên hệ tính phân cực và cấu tạo gốc tự do $NO$ với vai trò sinh học trong Dược học. | `T-01.4.6`, `T-01.4.7`, `T-01.5.2`, `T-01.6.1` | **Câu 7** (`T-01.7.3` — phân tích vì sao $PCl_5$ tồn tại nhưng $NCl_5$ không tồn tại)<br>**Câu 8** (`T-01.7.3` — phân tích cấu tạo gốc tự do 11e thuận từ của $NO$ và cơ chế hoạt hóa Guanylyl Cyclase) | Analysis & Advanced (Phân tích & Vận dụng cao) | **Có** (L387–393: phân tích phân lớp orbital chu kỳ 2 vs 3 và cơ chế giãn cơ trơn mạch máu của $NO$) | **Đạt (100%)** |

---

## G. Strengths

1. **Bảo toàn dữ liệu nguồn và tuân thủ liêm chính tuyệt đối:** Giữ nguyên vẹn 100% số liệu, công thức, ví dụ hóa học từ nguồn D-01; tuân thủ nghiêm ngặt quy tắc `R4` (không tự bịa tài liệu tham khảo) và `DOMAIN_RULES` (không thêm liều lượng, chỉ định lâm sàng hay thông số dược động học ngoài nguồn).
2. **Hệ thống thẻ truy xuất nguồn gốc (`[ADDED]`, `[VERIFY]`) minh bạch, chính xác:** Cả 38 vị trí bổ sung sư phạm và 13 vị trí cần xác minh chuyên môn đều được gắn thẻ chính xác đến từng câu/đoạn, không có bất kỳ nội dung bổ sung ngầm nào.
3. **Độ chính xác tính toán cơ học 100%:** Toàn bộ các ví dụ mẫu ($CO_2, NO_3^-$) và bài tập tự lượng giá ($O_3, BF_4^-, NO$) đều được trình bày từng bước rõ ràng, bảo toàn số electron hóa trị và tổng điện tích hình thức.
4. **Cấu trúc sư phạm chuẩn mực theo Template v2:** Chuyển đổi mượt mà các ghi chú rời rạc từ bản gốc thành khung bài giảng đại học hoàn chỉnh (T1–T8), tích hợp hiệu quả 2 sơ đồ Mermaid trực quan và bảng tổng hợp kiến thức cô đọng.

---

## H. Items for Human Expert Decision

Tại cổng duyệt **GATE B**, giảng viên / chuyên gia bộ môn cần xem xét và xác nhận các mục `[VERIFY]` đang mở sau đây (để quyết định giữ nguyên hay thay bằng trích dẫn chuẩn trong giai đoạn xuất bản S5):

1. **Cung cấp tài liệu tham khảo chính thức cho mục `T-01.8.1` (3 thẻ `[VERIFY]` tại L404–406):** Chỉ định giáo trình Hóa vô cơ Dược, Hóa đại cương và Dược lý học chính thức của Khoa/Trường để thay thế cho 3 dòng giữ chỗ `[VERIFY: reference needed for ...]`.
2. **Xác nhận bộ số liệu thực nghiệm hóa lý từ nguồn (5 thẻ `[VERIFY]` tại L62, L64, L83, L108, L145):** Xác nhận giữ nguyên các giá trị năng lượng liên kết Carbon ($839; 614; 348\text{ kJ/mol}$), độ dài liên kết ($154; 134; 120\text{ pm}$ và $128\text{ pm}$ trong $CO_3^{2-}$), hằng số Debye ($3,336 \times 10^{-30}\text{ C}\cdot\text{m}$) và quy ước ngưỡng độ âm điện Pauling ($\Delta\chi = 0,4$ và $1,7$) theo giáo trình giảng dạy của bộ môn.
3. **Xác nhận cách trình bày mô hình bát tử mở rộng (2 thẻ `[VERIFY]` tại L168, L172):** Xác nhận mức độ trình bày thuyết "phân lớp $d$ trống ($3d, 4d$)" cho sinh viên Dược năm 1–2 (hiện bản thảo giữ đúng thuyết cổ điển của nguồn cho $PCl_5, SF_6, H_2SO_4$ và gắn cờ `[VERIFY: modern bonding models]`).
4. **Xác nhận các nhận định hóa học & dược lý từ nguồn (3 thẻ `[VERIFY]` tại L160, L164, L187):** Xác nhận cách diễn đạt "$BeCl_2, BF_3, AlCl_3$ là những Acid Lewis rất mạnh" và câu mô tả vai trò sinh học của $NO$ hoạt hóa enzym Guanylyl Cyclase làm giãn cơ trơn mạch máu.

---

## I. Not Verified / Limitations

Theo Quy tắc Liêm chính **R10** và **R12**, báo cáo QA độc lập này ghi nhận rõ các giới hạn kiểm định sau:
1. **Không xác minh thực nghiệm ngoài văn bản:** Các con số năng lượng liên kết ($839, 614, 348\text{ kJ/mol}$) và độ dài liên kết ($1,54; 1,34; 1,20; 1,28\text{ Å}$) chỉ được kiểm tra tính nhất quán nội bộ và chuyển đổi đơn vị toán học ($\text{Å} \rightarrow \text{pm}$), chưa được đối chiếu trực tiếp với cơ sở dữ liệu thực nghiệm ngoại vi (như *CRC Handbook of Chemistry and Physics* hay *IUPAC Gold Book*).
2. **Không xác nhận sự tồn tại của tài liệu tham khảo bên ngoài:** Agent không có quyền và không thể xác nhận tính hợp lệ của các tài liệu xuất bản ngoài luồng; mục `T-01.8.1` hiện chỉ chứa các thẻ giữ chỗ `[VERIFY]` chờ giảng viên cung cấp.
3. **Giới hạn phạm vi liên chương:** Các liên kết kiến thức nền tảng được kiểm tra trong phạm vi Chương 01 (`D-01`); sự đồng bộ thuật ngữ xuyên suốt toàn khóa học sẽ tiếp tục được kiểm tra tự động ở giai đoạn S5B khi hợp nhất toàn bộ các chương.
