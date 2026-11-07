# ch01_qa_r2.md — Báo cáo Kiểm định Chất lượng Độc lập (S4 QA — Vòng 2) · Chương 01

**Môn:** Hóa vô cơ dược · **Chương:** 01 · **Stage:** S4 Independent QA (Round 2) · **Ngày:** 2026-11-07  
**Bản thảo kiểm định:** `03_chapters/ch01_v2.md`  
**Đối chiếu với:** `00_config.md`, `00_source_original/ch01_doc-hvc-1.html` (D-01), `02_mapping/ch01_matrix_APPROVED.md`, `03_chapters/ch01_changelog.md`

---

## A. Verdict

- **Phán quyết (Verdict):** **PASS**
- **Thống kê lỗi theo mức độ nghiêm trọng:**
  - **Critical (Nghiêm trọng):** 0
  - **Major (Lớn):** 0
  - **Minor (Nhỏ):** 2
- **Căn cứ phán quyết:** Bản thảo `ch01_v2.md` (6.092 từ so với 1.374 từ bản gốc) bảo toàn 100% nội dung học thuật, thông số số học, công thức và ví dụ của tài liệu nguồn (`S-01.1` đến `S-01.7`). Toàn bộ 32 phép tính số học (quy đổi đơn vị, bậc liên kết, tổng electron hóa trị, điện tích hình thức $FC$ trong ví dụ mẫu và đáp án bài tập) đều khớp chính xác 100% khi tính toán lại bằng script Python. Bản thảo tuân thủ tuyệt đối `DOMAIN_RULES` (không thêm liều lượng, chỉ định lâm sàng hay thông số dược động học ngoài nguồn) và quy tắc liêm chính R2, R4, R5 (mọi nội dung mở rộng sư phạm đều gắn thẻ `[ADDED: ...]`, mọi số liệu/khẳng định cần thẩm định và tài liệu tham khảo thiếu đều gắn thẻ `[VERIFY: ...]`, không bịa đặt trích dẫn). Hai lỗi Minor chỉ liên quan đến đánh số/chú thích bảng-hình (có thể chuẩn hóa tại S5A) và ghi chú số lượng mục trong changelog.

---

## B. Issue Table

| Issue ID | T-ID | Category | Severity | Basis | Evidence (Source vs. New Quote, ≤25 words each) | Recommended Correction | Return to Author (Y/N) |
|---|---|---|---|---|---|---|---|
| `QA2-01` | `T-01.4.3`, `T-01.5.3`, `T-01.5.4`, `T-01.6.1` | Formatting / Numbering | **Minor** | `[INTERNAL]` | *Rule 7.3 (7):* "number and caption all tables and figures" vs. *Draft:* 2 bảng và 2 sơ đồ Mermaid chưa đánh số hiệu `Bảng 1.k`, `Hình 1.k`. | Bổ sung nhãn đánh số và tên biểu bảng/sơ đồ chuẩn (`Bảng 1.1`, `Bảng 1.2`, `Hình 1.1`, `Hình 1.2`) trong giai đoạn biên tập chuẩn hóa S5A. | **N** |
| `QA2-02` | `T-01.8.1` (Changelog) | Consistency | **Minor** | `[INTERNAL]` | *Changelog dòng 34:* "4 tài liệu đề xuất thẩm định theo chuẩn Vancouver" vs. *Draft `T-01.8.1` dòng 404–406:* Liệt kê 3 mục `[VERIFY: reference needed...]`. | Đồng bộ mô tả trong hồ sơ biên tập S5 (giữ nguyên 3 mục `[VERIFY: reference needed...]` trong `T-01.8.1` vì đã bao quát đủ 3 mảng chủ đề của chương). | **N** |

---

## C. Coverage Table

Đối soát toàn bộ 7 đơn vị nội dung gốc (`S-01.1` đến `S-01.7`) từ `00_source_original/ch01_doc-hvc-1.html` với ma trận `02_mapping/ch01_matrix_APPROVED.md` và bản thảo `03_chapters/ch01_v2.md`:

| S-ID | Nội dung nguồn gốc (D-01) | T-ID xuất hiện trong `ch01_v2.md` | Trạng thái (Preserved / Altered / Missing) | Chi tiết đối soát & Đánh giá thay đổi ý nghĩa |
|---|---|---|---|---|
| `S-01.1` | Các đại lượng đặc trưng của liên kết hóa học & phân tử ($E_{lk}$, $r_{lk}$, $\theta$, $\vec{\mu}$, $\Delta\chi$ Pauling, $\vec{\mu}_{pt}$) + đoạn Ý nghĩa 1 | `T-01.4.1`, `T-01.4.2`, `T-01.4.3`, `T-01.4.7` | **Preserved** *(chuẩn hóa ký hiệu/đơn vị theo ma trận)* | Bảo toàn đầy đủ định nghĩa, bất đẳng thức $E_{lk}$ ($839 > 614 > 348\text{ kJ/mol}$), độ dài $r$ ($1,54 > 1,34 > 1,20\text{ Å}$ kèm quy đổi SI $154, 134, 120\text{ pm}$), công thức $\vec{\mu} = q \cdot \vec{d}$, $1\text{ D} = 3,336 \times 10^{-30}\text{ C}\cdot\text{m}$, 3 ngưỡng $\Delta\chi$ ($0,4$ và $1,7$), toàn bộ ví dụ phân tử và câu ý nghĩa. Không làm thay đổi ý nghĩa gốc. |
| `S-01.2` | Thuyết Lewis & Điện tích hình thức (Quy tắc bát tử $ns^2np^6$, $FC = V - N - B/2$, 3 tiêu chuẩn bền, Cộng hưởng) + đoạn Ý nghĩa 2 | `T-01.4.4`, `T-01.4.5`, `T-01.4.7` | **Preserved** *(chuẩn hóa thuật ngữ theo ma trận)* | Bảo toàn nguyên vẹn quy tắc bát tử, công thức $FC$, 3 tiêu chuẩn bền và ví dụ cộng hưởng ($CO_3^{2-}$ với $r = 128\text{ pm } (1,28\text{ Å})$, bậc $1\frac{1}{3} \approx 1,33$; $NO_3^-$; $SO_4^{2-}$; $C_6H_6$). Cụm *"lai hóa cộng hưởng (hybrid resonance)"* được chuyển thành *"tổ hợp cộng hưởng (hybrid resonance)"* theo đúng Mục C.4 của ma trận đã duyệt để tránh nhầm với lai hóa orbital. |
| `S-01.3` | 3 trường hợp ngoại lệ của Quy tắc Bát tử (Thiếu e, Số e lẻ / Gốc tự do $NO$, Bát tử mở rộng) + đoạn Ý nghĩa 3 | `T-01.4.6`, `T-01.4.7` | **Altered** *(theo phê duyệt Gate A — không đổi nghĩa cốt lõi)* | Bảo toàn 100% 3 nhóm ngoại lệ, các ví dụ ($BeCl_2, BF_3, AlCl_3$; $NO, NO_2, ClO_2$; $PCl_5, SF_6, H_2SO_4, XeF_4, IF_7$) và cơ chế $NO$ hoạt hóa Guanylyl Cyclase làm giãn cơ trơn mạch máu. Thay đổi đã duyệt (Q1, Q3): chuyển tiêu đề callout *"3 trường hợp ngoại lệ kinh điển cần nắm chắc trong đề thi"* sang văn phong học thuật và lược bỏ cụm *"và CO"* ở câu ý nghĩa dòng 66 (`"NO và CO minh họa..."` $\rightarrow$ `"ngoại lệ bát tử cùng phân tử NO minh họa..."`) vì nguồn không có nội dung về $CO$. |
| `S-01.4` | Đoạn tổng hợp "Ý nghĩa và tác dụng" (dòng 67–68) | `T-01.4.7` | **Preserved** | Được hợp nhất (MERGE theo dòng `M-01.11`) cùng các câu ý nghĩa của `S-01.1`, `S-01.2`, `S-01.3` vào `T-01.4.7`, giữ trọn vẹn mọi ý tưởng về dự đoán liên kết, độ bền, vị trí phản ứng, tương tác với nước, màng sinh học và đích thuốc. |
| `S-01.5` | Hộp ví dụ: Tính điện tích hình thức cho $CO_2$ và $NO_3^-$ (dòng 69–74) | `T-01.5.1` | **Preserved** | Toàn bộ dữ kiện, phép tính $FC(C), FC(O), FC(N)$ và kết luận về độ bền cấu trúc được giữ nguyên 100%, trình bày lại theo khung chuẩn *Given \| Find \| Approach \| Solution \| Check \| Interpretation*. |
| `S-01.6` | Hộp ví dụ: Ba ngoại lệ bát tử trong thực tế ($BF_3 + NH_3 \rightarrow F_3B-NH_3$, $PCl_5, SF_6$, $NO$ giãn mạch) (dòng 75–80) | `T-01.4.6`, `T-01.4.7`, `T-01.5.2` | **Preserved** | Giữ nguyên đầy đủ cả 3 ví dụ thực tế tại `T-01.5.2` đồng thời liên kết chặt chẽ với phần lý thuyết tại `T-01.4.6` và `T-01.4.7`. |
| `S-01.7` | Hộp callout "Cách nhớ": Quy trình 4 bước viết Lewis (dòng 81–83) | `T-01.4.4`, `T-01.5.3` | **Preserved** | Bảo toàn trọn vẹn nội dung 4 bước lập công thức Lewis và tiêu chuẩn chọn cấu trúc có $\|FC\|$ nhỏ nhất; chuyển nhãn *"Cách nhớ"* thành mục quy trình chuẩn hóa `T-01.5.3` kèm lưu đồ Mermaid theo đúng ma trận đã duyệt. |

- **Kiểm tra dòng REMOVE:** Ma trận được duyệt (`ch01_matrix_APPROVED.md`) có **0 dòng REMOVE**, và bản thảo không tự ý xóa bỏ bất kỳ đơn vị kiến thức nào.

---

## D. Calculation Table

Toàn bộ các phép tính số học, quy đổi đơn vị, đếm electron hóa trị, tính bậc liên kết và tính điện tích hình thức ($FC = V - N - \frac{B}{2}$) trong `ch01_v2.md` đã được kiểm tra lại bằng script Python. Cân bằng nguyên tố và bảo toàn điện tích ($\sum FC = q$) được xác nhận cho mọi công thức hóa học.

| STT | Vị trí (T-ID) | Nội dung tính toán / Công thức | Giá trị trong bản thảo (Original) | Giá trị tính lại bằng Code (Recomputed) | Khớp (Match: Yes/No) | Kiểm tra đơn vị & Bảo toàn điện tích |
|---|---|---|---|---|---|---|
| 1 | `T-01.4.1` | Quy đổi $r(C-C) = 1,54\text{ Å}$ sang $\text{pm}$ ($1\text{ Å} = 100\text{ pm}$) | $154\text{ pm}$ | `154.0 pm` | **Yes** | Đơn vị chuẩn SI ($\text{pm}$) nhất quán |
| 2 | `T-01.4.1` | Quy đổi $r(C=C) = 1,34\text{ Å}$ sang $\text{pm}$ | $134\text{ pm}$ | `134.0 pm` | **Yes** | Đơn vị chuẩn SI ($\text{pm}$) nhất quán |
| 3 | `T-01.4.1` | Quy đổi $r(C\equiv C) = 1,20\text{ Å}$ sang $\text{pm}$ | $120\text{ pm}$ | `120.0 pm` | **Yes** | Đơn vị chuẩn SI ($\text{pm}$) nhất quán |
| 4 | `T-01.4.5` | Quy đổi $r(C-O)$ trong $CO_3^{2-} = 1,28\text{ Å}$ sang $\text{pm}$ | $128\text{ pm}$ | `128.0 pm` | **Yes** | Đơn vị chuẩn SI ($\text{pm}$) nhất quán |
| 5 | `T-01.4.5` | Bậc liên kết $C-O$ trong $CO_3^{2-}$ ($4\text{ liên kết} / 3\text{ vị trí}$) | $1\frac{1}{3} \approx 1,33$ | `1.3333... (4/3)` | **Yes** | Thứ nguyên bậc liên kết hợp lệ |
| 6 | `T-01.4.5` | Điện tích trung bình trên mỗi nguyên tử O trong $CO_3^{2-}$ ($-2 / 3$) | $-2/3$ | `-0.6667 (-2/3)` | **Yes** | Tổng $3 \times (-2/3) = -2$ khớp điện tích ion |
| 7 | `T-01.4.5` | Bậc liên kết $N-O$ trong $NO_3^-$ ($4\text{ liên kết} / 3\text{ vị trí}$) | $1\frac{1}{3}$ | `1.3333... (4/3)` | **Yes** | Thứ nguyên bậc liên kết hợp lệ |
| 8 | `T-01.4.5` | Bậc liên kết $C-C$ trong benzen $C_6H_6$ ($9\text{ liên kết} / 6\text{ cạnh}$) | $1,5$ | `1.5` | **Yes** | Thứ nguyên bậc liên kết hợp lệ |
| 9 | `T-01.4.6` | Số electron hóa trị quanh Be trong $BeCl_2$ ($2 + 2 \times 1$) | $4\text{ electron}$ | `4` | **Yes** | Bảo toàn electron hóa trị |
| 10 | `T-01.4.6` | Số electron hóa trị quanh B, Al trong $BF_3, AlCl_3$ ($3 + 3 \times 1$) | $6\text{ electron}$ | `6` | **Yes** | Bảo toàn electron hóa trị |
| 11 | `T-01.4.6` | Tổng số electron hóa trị của phân tử $NO$ ($5 + 6$) | $11\text{ electron}$ | `11` | **Yes** | Số lẻ $\rightarrow$ 1 electron độc thân |
| 12 | `T-01.4.6` | Tổng số electron hóa trị của phân tử $NO_2$ ($5 + 2 \times 6$) | $17\text{ electron}$ | `17` | **Yes** | Số lẻ $\rightarrow$ 1 electron độc thân |
| 13 | `T-01.4.6` | Tổng số electron hóa trị của phân tử $ClO_2$ ($7 + 2 \times 6$) | $19\text{ electron}$ | `19` | **Yes** | Số lẻ $\rightarrow$ 1 electron độc thân |
| 14 | `T-01.4.6` | Số electron hóa trị quanh P trong $PCl_5$ ($5 + 5 \times 1$) | $10\text{ electron}$ | `10` | **Yes** | Bảo toàn electron hóa trị |
| 15 | `T-01.4.6` | Số electron hóa trị quanh S trong $SF_6$ ($6 + 6 \times 1$) | $12\text{ electron}$ | `12` | **Yes** | Bảo toàn electron hóa trị |
| 16 | `T-01.4.6` | Số electron quanh S trong $H_2SO_4$ khi có 2 liên kết đôi $S=O$ và 2 liên kết đơn $S-OH$ ($2 \times 4 + 2 \times 2$) | $12\text{ electron}$ | `12` | **Yes** | Khi đó $FC(S) = 6 - 0 - 12/2 = 0$ |
| 17 | `T-01.5.1` (VD 1) | $CO_2$ ($O=C=O$): $FC(C)$ với $V=4, N=0, B=8$ | $4 - 0 - 4 = 0$ | `0.0` | **Yes** | Đúng công thức $FC = V - N - B/2$ |
| 18 | `T-01.5.1` (VD 1) | $CO_2$ ($O=C=O$): $FC(O)$ với $V=6, N=4, B=4$ | $6 - 4 - 2 = 0$ | `0.0` | **Yes** | Đúng công thức $FC$ |
| 19 | `T-01.5.1` (VD 1) | $CO_2$: Tổng $\sum FC = FC(C) + 2 \times FC(O)$ | $0 + 2(0) = 0$ | `0.0` | **Yes** | Khớp phân tử $CO_2$ trung hòa ($q = 0$) |
| 20 | `T-01.5.1` (VD 2) | $NO_3^-$: $FC(N)$ với $V=5, N=0, B=8$ | $5 - 0 - 4 = +1$ | `+1.0` | **Yes** | Đúng công thức $FC$ |
| 21 | `T-01.5.1` (VD 2) | $NO_3^-$: $FC(O_{\text{đôi}})$ với $V=6, N=4, B=4$ | $6 - 4 - 2 = 0$ | `0.0` | **Yes** | Đúng công thức $FC$ |
| 22 | `T-01.5.1` (VD 2) | $NO_3^-$: $FC(O_{\text{đơn}})$ với $V=6, N=6, B=2$ | $6 - 6 - 1 = -1$ | `-1.0` | **Yes** | Đúng công thức $FC$ |
| 23 | `T-01.5.1` (VD 2) | $NO_3^-$: Tổng $\sum FC = (+1) + 0 + (-1) + (-1)$ | $-1$ | `-1.0` | **Yes** | Khớp điện tích anion $NO_3^-$ ($q = -1$) |
| 24 | `T-01.7.4` (Bài 5) | $O_3$ ($O_{(1)}=O_{(2)}-O_{(3)}$): $FC(O_{(1)})$ với $V=6, N=4, B=4$ | $6 - 4 - \frac{4}{2} = 0$ | `0.0` | **Yes** | Đúng công thức $FC$ |
| 25 | `T-01.7.4` (Bài 5) | $O_3$: $FC(O_{(2)})$ với $V=6, N=2, B=6$ | $6 - 2 - \frac{6}{2} = +1$ | `+1.0` | **Yes** | Đúng công thức $FC$ |
| 26 | `T-01.7.4` (Bài 5) | $O_3$: $FC(O_{(3)})$ với $V=6, N=6, B=2$ | $6 - 6 - \frac{2}{2} = -1$ | `-1.0` | **Yes** | Đúng công thức $FC$ |
| 27 | `T-01.7.4` (Bài 5) | $O_3$: Tổng $\sum FC = 0 + (+1) + (-1)$ | $0$ | `0.0` | **Yes** | Khớp phân tử $O_3$ trung hòa ($q = 0$) |
| 28 | `T-01.7.4` (Bài 6a) | $BF_4^-$: Tổng số electron hóa trị $3(B) + 4 \times 7(F) + 1(q^-)$ | $3 + 28 + 1 = 32\text{ e}$ | `32` | **Yes** | 4 liên kết đơn ($8\text{ e}$) + $4 \times 6\text{ e}$ tự do ($24\text{ e}$) $= 32\text{ e}$ |
| 29 | `T-01.7.4` (Bài 6b) | $BF_4^-$: $FC(B)$ với $V=3, N=0, B=8$ | $3 - 0 - \frac{8}{2} = -1$ | `-1.0` | **Yes** | Đúng công thức $FC$ |
| 30 | `T-01.7.4` (Bài 6b) | $BF_4^-$: $FC(F)$ với $V=7, N=6, B=2$ | $7 - 6 - \frac{2}{2} = 0$ | `0.0` | **Yes** | Đúng công thức $FC$ |
| 31 | `T-01.7.4` (Bài 6b) | $BF_4^-$: Tổng $\sum FC = (-1) + 4(0)$ | $-1$ | `-1.0` | **Yes** | Khớp điện tích anion $BF_4^-$ ($q = -1$) |
| 32 | `T-01.7.4` (Câu 8a) | $NO$: Tổng electron hóa trị $5(N) + 6(O)$ | $11\text{ electron}$ | `11` | **Yes** | Khớp với dữ liệu tại `T-01.4.6` |

---

## E. Tag and Reference Audit

### 1. Thống kê số lượng thẻ (tính bằng script cơ học)
- **`[ADDED: ...]`:** **38** thẻ.
- **`[VERIFY: ...]`:** **13** thẻ.
- **`[CONFLICT: ...]`:** **0** thẻ.

### 2. Kiểm toán tính hợp lệ của việc gắn thẻ
- **(a) Nội dung thêm mới không gắn thẻ (Untagged additions):** **0 trường hợp.** Mọi phần khung sư phạm (T1, T2, T3, T6, T7, T8), các lưu đồ Mermaid (`T-01.5.3`, `T-01.5.4`), và tất cả các câu giải thích làm rõ khái niệm xen kẽ trong `T-01.4` (như định nghĩa nhiệt động học $E_{lk} > 0$, khái niệm bậc liên kết, hình dạng hình học phân tử, định nghĩa độ âm điện, định nghĩa điện tích hình thức, sự giải tỏa điện tích trong $CO_3^{2-}$, định nghĩa acid Lewis, khái niệm thuận từ, so sánh chu kỳ 2 và chu kỳ 3, tính ưa nước/ưa lipid) đều đã được gắn thẻ `[ADDED: ...]` tường minh ngay tại vị trí bổ sung.
- **(b) Khẳng định/Số liệu cần gắn `[VERIFY]` nhưng bị sót:** **0 trường hợp.** Toàn bộ 13 hạng mục cần kiểm chứng (`V-01` đến `V-11`) đã được gắn thẻ `[VERIFY: ...]` đầy đủ (bao gồm năng lượng liên kết, độ dài liên kết, hằng số Debye, quy ước Pauling, dữ liệu tinh thể học $CO_3^{2-}$, độ mạnh acid Lewis, số electron lẻ, mô hình orbital $d$, công thức $H_2SO_4$, tác dụng dược lý của $NO$ trên Guanylyl Cyclase và 3 nhóm tài liệu tham khảo).
- **(c) Thẻ sử dụng sai mục đích (Misused tags):** **0 trường hợp.** Không có dữ liệu thực nghiệm mới, kết quả nghiên cứu lâm sàng hay trích dẫn bịa đặt nào được ngụy trang dưới thẻ `[ADDED]`.

### 3. Kiểm toán Tài liệu tham khảo (Tuân thủ R4)
- Tài liệu nguồn `ch01_doc-hvc-1.html` không có trích dẫn và `00_config.md` đặt `APPROVED_REFERENCE_LIST: none`.
- Tại mục `T-01.8.1`, bản thảo **không bịa đặt** bất kỳ tên tác giả, năm xuất bản, tên sách, số trang hay mã DOI nào. Thay vào đó, bản thảo ghi chú rõ ràng về nguyên tắc R4 và sử dụng 3 thẻ `[VERIFY: reference needed for ...]` để đánh dấu các vị trí cần chuyên gia bổ sung giáo trình chuẩn. Tuân thủ tuyệt đối R4 và R5.

---

## F. Learning Objective Alignment Matrix

| Mã LO | Nội dung Chuẩn đầu ra (`T-01.2.1`) | Mục giảng dạy (Where Taught) | Câu hỏi / Bài tập đánh giá (`T-01.7`) | Cấp độ nhận thức (Level) | Đáp án & Hướng dẫn chấm (`T-01.7.4`) | Trạng thái |
|---|---|---|---|---|---|---|
| **LO-1** | Định nghĩa và phân tích tương quan giữa $E_{lk}$, $r$, $\theta$ và bậc liên kết; phát biểu quy tắc bát tử ($ns^2np^6$) và đặc điểm 3 nhóm ngoại lệ bát tử. | `T-01.4.1`, `T-01.4.2`, `T-01.4.4`, `T-01.4.6`, `T-01.6.1` | **Câu 1** (`T-01.7.1`): Tương quan độ dài và năng lượng liên kết Carbon.<br>**Câu 2** (`T-01.7.1`): Nhận diện cặp phân tử ngoại lệ thiếu electron ($BeCl_2, BF_3$). | Knowledge (Nhận biết) | Có đầy đủ đáp án và giải thích chi tiết tại `T-01.7.4`. | **Đạt (Aligned)** |
| **LO-2** | Vận dụng hiệu độ âm điện Pauling ($\Delta\chi$) và tổng vector momen lưỡng cực ($\vec{\mu}_{pt}$) để phân biệt bản chất liên kết và dự đoán tính phân cực phân tử. | `T-01.4.2`, `T-01.4.3`, `T-01.5.4`, `T-01.6.2` | **Câu 3** (`T-01.7.1`): Giải thích tính không cực ($\mu_{pt} = 0$) của $CCl_4$.<br>**Câu 4** (`T-01.7.1`): Sắp xếp độ phân cực theo ngưỡng $\Delta\chi$ ($C-H < H-Cl < Na-Cl$). | Comprehension (Thông hiểu) | Có đầy đủ đáp án và giải thích chi tiết tại `T-01.7.4`. | **Đạt (Aligned)** |
| **LO-3** | Áp dụng quy trình 4 bước thiết lập công thức Lewis; tính toán chính xác điện tích hình thức ($FC$) và lựa chọn cấu trúc cộng hưởng ưu thế. | `T-01.4.4`, `T-01.4.5`, `T-01.5.1`, `T-01.5.3`, `T-01.6.2` | **Bài tập 5** (`T-01.7.2`): Tính $FC$ từng nguyên tử trong $O_3$ và kiểm tra $\sum FC$.<br>**Bài tập 6** (`T-01.7.2`): Lập cấu trúc Lewis và tính $FC$ cho anion $BF_4^-$. | Application (Áp dụng) | Có lời giải từng bước kèm kiểm tra bảo toàn điện tích tại `T-01.7.4`. | **Đạt (Aligned)** |
| **LO-4** | Phân tích nguyên nhân tồn tại của hợp chất thiếu electron, gốc tự do và siêu hóa trị; liên hệ tính phân cực và cấu tạo gốc tự do $NO$ với vai trò sinh học trong Dược học. | `T-01.4.6`, `T-01.4.7`, `T-01.5.2`, `T-01.6.1` | **Câu 7** (`T-01.7.3`): Phân tích sự tồn tại của $PCl_5$ so với $NCl_5$.<br>**Câu 8** (`T-01.7.3`): Phân tích cấu tạo gốc tự do thuận từ $NO$ và cơ chế hoạt hóa Guanylyl Cyclase. | Analysis & Advanced (Phân tích & Vận dụng cao) | Có lời giải phân tích chi tiết theo đúng phạm vi nguồn tại `T-01.7.4`. | **Đạt (Aligned)** |

---

## G. Strengths

1. **Độ chính xác và bảo toàn tuyệt đối:** Bảo toàn 100% nội dung, số liệu, công thức và ví dụ của nguồn gốc (`S-01.1`–`S-01.7`); toàn bộ 32 phép tính số học đều chuẩn xác tuyệt đối.
2. **Gắn thẻ liêm chính học thuật minh bạch:** Phân định rành mạch giữa nội dung nguồn và nội dung diễn giải sư phạm bằng 38 thẻ `[ADDED: ...]` và 13 thẻ `[VERIFY: ...]`, khắc phục triệt để nguy cơ trộn lẫn nguồn.
3. **Tuân thủ nghiêm ngặt `DOMAIN_RULES` và R4:** Không tự ý đưa thêm bất kỳ liều lượng, chỉ định lâm sàng, thông số dược động học hay tài liệu tham khảo giả mạo nào ngoài nguồn.
4. **Cấu trúc sư phạm rõ ràng, hiện đại:** Khung Template v2 (`T1`–`T8`) hoàn chỉnh, bài tập mẫu trình bày chuẩn 6 bước (*Given $\rightarrow$ Interpretation*), sơ đồ Mermaid trực quan và bộ câu hỏi lượng giá phủ kín 4 chuẩn đầu ra `LO-1` đến `LO-4`.

---

## H. Items for Human Expert Decision

Để chuẩn bị duyệt **GATE B** và chuyển sang giai đoạn xuất bản **S5A**, giảng viên/chuyên gia cần xem xét và xác nhận chủ sở hữu (owner) cho 13 mục `[VERIFY]` đang mở trong bản thảo:
1. **Dữ liệu sổ tay hóa lý (`T-01.4.1`, `T-01.4.2`, `T-01.4.3`, `T-01.4.5`):** Xác nhận giữ nguyên các giá trị thực nghiệm từ nguồn gồm năng lượng liên kết Carbon ($839, 614, 348\text{ kJ/mol}$), độ dài liên kết ($154, 134, 120\text{ pm}$ và $128\text{ pm}$ trong $CO_3^{2-}$), hệ số quy đổi Debye ($3,336 \times 10^{-30}\text{ C}\cdot\text{m}$) và ngưỡng quy ước Pauling ($\Delta\chi = 0,4$ và $1,7$).
2. **Mô hình lý thuyết liên kết (`T-01.4.6`):** Xác nhận mức độ trình bày thuyết tham gia của phân lớp $d$ trống ($3d, 4d$) đối với hợp chất siêu hóa trị ($PCl_5, SF_6, H_2SO_4$) cho đối tượng sinh viên Dược năm 1–2.
3. **Danh mục tài liệu tham khảo (`T-01.8.1`):** Cung cấp thông tin trích dẫn chuẩn (Giáo trình Hóa vô cơ Dược, Hóa đại cương và Dược lý học về cơ chế $NO$ – Guanylyl Cyclase) để thay thế cho 3 thẻ `[VERIFY: reference needed ...]`.

---

## I. Not Verified / Limitations

- **Không kiểm chứng sự tồn tại của tài liệu tham khảo bên ngoài:** Theo quy tắc R10 và R12e, QA Reviewer không truy cập mạng để xác thực tài liệu ngoài nguồn và không tự xác nhận tính hợp lệ của bất kỳ nguồn trích dẫn ngoại lai nào.
- **Không kiểm chứng thực nghiệm các hằng số hóa lý và cơ chế sinh học:** Các con số thực nghiệm ($348, 614, 839\text{ kJ/mol}$; $154, 134, 120, 128\text{ pm}$; $3,336 \times 10^{-30}\text{ C}\cdot\text{m}$) và khẳng định dược lý về $NO$ hoạt hóa Guanylyl Cyclase chỉ được đối chiếu tính nhất quán nội bộ (`[INTERNAL]`) so với tài liệu gốc `D-01` và giữ nguyên trạng thái chờ chuyên gia thẩm định (`[VERIFY]`).
- **Tính độc lập của kiểm định:** Báo cáo này được lập hoàn toàn độc lập dựa trên tài liệu nguồn, cấu hình môn học, ma trận đã duyệt và bản thảo `ch01_v2.md`, không tham chiếu báo cáo QA vòng 1 hay nhật ký sửa lỗi của tác giả.
