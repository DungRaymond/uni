# Báo cáo Kiểm định Độc lập Chất lượng (Independent QA Review) · Chương 01
**Tên chương:** Đại cương Liên kết Hóa học, Thuyết Lewis & Quy tắc Bát tử  
**Mã tài liệu:** `ch01_qa_r1.md` · **Vòng kiểm định:** R1 (Round 1) · **Ngày:** 2026-11-07  
**Chuyên gia kiểm định:** Independent Academic QA Reviewer (Stage S4)  
**Tài liệu đối soát:**
- Nguồn gốc: `00_source_original/ch01_doc-hvc-1.html` (D-01)
- Ma trận phê duyệt: `02_mapping/ch01_matrix_APPROVED.md` (Gate A)
- Bản thảo S3: `03_chapters/ch01_draft.md`
- Nhật ký thay đổi: `03_chapters/ch01_changelog.md` & `03_chapters/ch01_selfcheck.md`
- Cấu hình & Luật: `00_config.md` (kèm DOMAIN_RULES Dược học), `toa-soan_rules.md` (Mục 4 & Mục 7.5)

---

## A. Verdict (Phán quyết Kiểm định)

**Phán quyết:** **FAIL**  
**Tổng số vấn đề phát hiện:** 06 (trong đó: **03 Critical**, **01 Major**, **02 Minor**).

**Lý do phán quyết:**
1. Bản thảo vi phạm nghiêm trọng quy định ràng buộc đặc thù ngành Dược (`DOMAIN_RULES` Mục 10) do: (a) tự ý đưa thông số Dược động học ($t_{1/2} = 1\text{–}5\text{ giây}$) vào câu hỏi và đáp án tự lượng giá khi nguồn không có; (b) tự ý đưa thuốc điều trị cụ thể (Nitroglycerin) và chỉ định lâm sàng ("điều trị cơn đau thắt ngực") vào phần ứng dụng Dược học mà không có căn cứ từ tài liệu nguồn.
2. Vi phạm Nguyên tắc Liêm chính học thuật R4 về trích dẫn tài liệu tham khảo: Bản thảo tự đưa vào 4 giáo trình/sách chuyên khảo cụ thể với tên tác giả, nhà xuất bản khi chưa được phê duyệt trong `APPROVED_REFERENCE_LIST` (`none`).
3. Xuất hiện nhiều đoạn nội dung bổ sung sư phạm có giá trị nhưng chưa được gắn thẻ `[ADDED]` cục bộ (Mục 4.1, 4.2, 4.3, 4.4, 4.5, 4.7.1 và các mục con của T7).
4. Bản thảo đạt chất lượng rất cao về độ phủ nội dung (100% S-ID), cấu trúc sư phạm Template v2, và đặc biệt **độ chính xác số học đạt 100%** qua kiểm tra cơ học bằng Python (39/39 phép tính và đáp án khớp tuyệt đối). Sau khi tác giả khắc phục 3 lỗi Critical và 1 lỗi Major tại vòng S3-FIX, chương sẽ đủ điều kiện đạt chuẩn.

---

## B. Issue Table (Bảng kiểm kê vấn đề)

| Issue ID | T-ID | Phân loại | Mức độ | Cơ sở | Bằng chứng (Nguồn vs. Bản thảo) | Đề xuất khắc phục | Trả tác giả (S3-FIX)? |
|---|---|---|---|---|---|---|---|
| **QA-01.01** | `T-01.7.3`, `T-01.7.4` | DOMAIN_RULES / Dược động học | **Critical** | `[INTERNAL]` | *Nguồn:* "hoạt hóa enzym Guanylyl Cyclase làm giãn cơ trơn mạch máu (hạ huyết áp)."<br>*Bản thảo:* "thời gian bán thải sinh học ($t_{1/2}$) rất ngắn trong huyết tương (chỉ vài giây)" / "dẫn đến $t_{1/2}$ rất ngắn (1–5 giây)" | Xóa bỏ thông số $t_{1/2}$; sửa Câu 8 và Đáp án 8a tập trung thuần túy vào hoạt tính gốc tự do và phản ứng phân tử, không đưa thông số PK mới vào. | **Y** |
| **QA-01.02** | `T-01.4.7` | DOMAIN_RULES / Chỉ định lâm sàng | **Critical** | `[INTERNAL]` | *Nguồn:* "hoạt hóa enzym Guanylyl Cyclase làm giãn cơ trơn mạch máu (hạ huyết áp)."<br>*Bản thảo:* "Đây là cơ chế nền tảng giải thích tác dụng của các thuốc giãn mạch kinh điển như Nitroglycerin trong điều trị cơn đau thắt ngực." | Xóa bỏ câu đề cập đến thuốc Nitroglycerin và chỉ định "điều trị cơn đau thắt ngực" theo đúng quy định không bổ sung chỉ định lâm sàng ngoài nguồn. | **Y** |
| **QA-01.03** | `T-01.8.1` | Liêm chính học thuật (R4) / Trích dẫn | **Critical** | `[INTERNAL]` | *Nguồn:* (Hoàn toàn không có danh mục trích dẫn nào; 0 tài liệu).<br>*Bản thảo:* Trích dẫn cụ thể 4 tài liệu: Bộ Y tế VN, Miessler (5th ed), Chang (12th ed), Rang & Dale (9th ed). | Thay thế tên sách cụ thể bằng các thẻ vị trí tiêu chuẩn theo R4: `[VERIFY: reference needed for <topic>]`. Đưa 4 cuốn sách này vào Mục H để người dùng phê duyệt vào `APPROVED_REFERENCE_LIST`. | **Y** |
| **QA-01.04** | `T-01.4.1` đến `T-01.7.4` | Gắn thẻ xuất xứ (R2) | **Major** | `[INTERNAL]` | *Nguồn:* Không có giải thích thế năng cực tiểu, độ âm điện, energy cộng hưởng, bài tập $O_3, BF_4^-$.<br>*Bản thảo:* Đã bổ sung các đoạn văn sư phạm và bài tập nhưng thiếu thẻ `[ADDED]` cục bộ tại 4.7.1, 7.2, 7.3, 7.4. | Bổ sung đầy đủ thẻ `[ADDED: ...]` tại đầu các mục con của T7 và các đoạn giải thích mở rộng lý thuyết (như 4.7.1 tính ưa nước/lipid, 4.3 định nghĩa độ âm điện). | **Y** |
| **QA-01.05** | `T-01.8.1` | Chuẩn hóa cú pháp thẻ | **Minor** | `[INTERNAL]` | *Nguồn:* Không có thẻ.<br>*Bản thảo:* Dùng cú pháp lai `[ADDED / VERIFY: references needed]`. | Đổi thành thẻ chuẩn `[VERIFY: reference needed for Chapter 01]` để các công cụ kiểm tra tự động (regex script) ghi nhận chính xác. | **Y** |
| **QA-01.06** | `T-01.4.6`, `T-01.5.2` | Sư phạm & FIGURE_POLICY | **Minor** | `[INTERNAL]` | *Nguồn:* Minh họa $PCl_5, SF_6, F_3B \leftarrow NH_3$ bằng chữ.<br>*Bản thảo:* Chưa có placeholder `[FIGURE]` nào cho cấu trúc không gian 3D. | Bổ sung các thẻ giữ chỗ `[FIGURE 1.1 | type: 3D structure | ...]` cho phức $F_3B \leftarrow NH_3$ và hình học bát diện $SF_6$ để phục vụ chế bản đồ họa sau này. | **N** (Xử lý ở S5A) |

---

## C. Coverage Table (Bảng đối soát độ phủ S-ID)

Kiểm tra độ phủ toàn diện 7/7 S-ID từ `ch01_audit.md` sang bản thảo `ch01_draft.md`:

| S-ID | Tiêu đề & Nội dung nguồn | Xuất hiện tại T-ID | Trạng thái bảo toàn | Trích dẫn đối chiếu (Nguồn vs. Bản thảo) | Đổi nghĩa? | Ghi chú & Đánh giá |
|---|---|---|---|---|---|---|
| `S-01.1` | Các đại lượng đặc trưng của liên kết hóa học & phân tử ($E_{lk}, r, \theta, \vec{\mu}, \Delta\chi, \vec{\mu}_{pt}$) | `T-01.4.1`, `T-01.4.2`, `T-01.4.3`, `T-01.4.7` | **Preserved** | *Nguồn:* "$r(C-C) \approx 1,54\text{ Å} > 1,34\text{ Å} > 1,20\text{ Å}$"<br>*Bản thảo:* "$r(C-C) \approx 154\text{ pm } (1,54\text{ Å}) > 134\text{ pm } (1,34\text{ Å}) > 120\text{ pm } (1,20\text{ Å})$" | Không | Chuẩn hóa ký hiệu độ dài $r$, bổ sung đơn vị SI picomet theo đúng phê duyệt Q2 tại Gate A. |
| `S-01.2` | Thuyết Lewis, quy tắc bát tử, công thức $FC$, cấu trúc bền, cộng hưởng ($CO_3^{2-}, NO_3^-, SO_4^{2-}, C_6H_6$) | `T-01.4.4`, `T-01.4.5` | **Preserved** | *Nguồn:* "cấu trúc thực là sự lai hóa cộng hưởng... $CO_3^{2-}$ có $r=1,28\text{ Å}$, bậc $1\frac{1}{3}$"<br>*Bản thảo:* "cấu trúc thực... là cấu trúc cộng hưởng lai (resonance hybrid)... $r=128\text{ pm } (1,28\text{ Å})$, bậc $1\frac{1}{3}$" | Không | Giữ nguyên 100% dữ kiện số học; chuẩn hóa thuật ngữ tránh nhầm với lai hóa orbital. |
| `S-01.3` | Ba ngoại lệ bát tử (thiếu e, e lẻ, mở rộng); vai trò sinh học của $NO$; câu "NO và CO" | `T-01.4.6`, `T-01.4.7` | **Altered** (Có phê duyệt) | *Nguồn:* "NO và CO minh họa liên hệ giữa cấu hình electron với truyền tín hiệu sinh học và độc tính."<br>*Bản thảo:* (Đã lược bỏ cụm từ "và CO", tập trung hoàn toàn vào $NO$). | Không | Thay đổi có chủ đích theo Quyết định Q1 tại Gate A nhằm tránh hiểu lầm CO là ngoại lệ bát tử. |
| `S-01.4` | Đoạn tóm tắt tổng kết "Ý nghĩa và tác dụng" | `T-01.4.7` | **Preserved** | *Nguồn:* "Cấu trúc Lewis, điện tích hình thức và cộng hưởng giúp dự đoán cách phân tử liên kết..."<br>*Bản thảo:* Hợp nhất vào Mục 4.7 thành ứng dụng Dược học hoàn chỉnh. | Không | Hợp nhất theo Ma trận phê duyệt M-01.11, giải quyết triệt để vấn đề trùng lặp DUP-01. |
| `S-01.5` | Bài tập mẫu tính điện tích hình thức cho $CO_2$ và $NO_3^-$ | `T-01.5.1` | **Preserved** | *Nguồn:* "$CO_2: C (FC=0), O (FC=0); NO_3^-: N (+1), O(đôi) (0), O(đơn) (-1)$"<br>*Bản thảo:* Trình bày theo khung Given-Find-Approach-Solution-Check-Interpretation. | Không | Giữ nguyên toàn bộ số học, nâng cao tính sư phạm theo chuẩn cấu trúc ví dụ của quy tắc S3. |
| `S-01.6` | Ví dụ minh họa thực tế 3 ngoại lệ: $BF_3/NH_3, PCl_5, SF_6, NO$ | `T-01.5.2`, `T-01.4.6` | **Preserved** | *Nguồn:* "$BF_3$ chỉ có 6 e... acid Lewis mạnh... $PCl_5$ (10 e), $SF_6$ (12 e)... $NO$ (11 e)..."<br>*Bản thảo:* Giữ nguyên các ví dụ, giải thích rõ cơ chế cho nhận electron và phân lớp $d$. | Không | Bảo toàn trọn vẹn dữ kiện và cơ chế hóa học. |
| `S-01.7` | Callout "Cách nhớ": Quy trình 4 bước lập Lewis | `T-01.5.3` | **Preserved** | *Nguồn:* "Quy trình 4 bước viết Lewis: (1) tính tổng e hóa trị... (2) nối liên kết đơn... (4) tính FC..."<br>*Bản thảo:* Chuyển thành quy trình thuật toán 4 bước sư phạm kèm sơ đồ Mermaid. | Không | Chuyển đổi văn phong luyện thi sang bài giảng đại học theo Quyết định Q3 tại Gate A. |

- **Tổng số S-ID của chương:** 7.
- **Số S-ID đã ánh xạ và bảo toàn:** 7 (Độ phủ đạt **100,0%**).
- **Số S-ID bị bỏ sót (Missing):** **0**.
- **Kiểm tra các dòng REMOVE:** Ma trận đã duyệt có 0 dòng REMOVE; không có bất kỳ nội dung nào bị xóa bỏ ngoài phạm vi phê duyệt.

---

## D. Calculation Table (Bảng tính toán lại cơ học bằng Python)

Toàn bộ các ví dụ tính toán, hằng số, ngưỡng thực nghiệm và bài tập trong bản thảo đã được tính toán lại độc lập bằng code Python (`hoa-duoc/_tools/recompute_ch01.py`). Kết quả đối chiếu chi tiết:

| STT | Hạng mục tính toán | Giá trị trong bản thảo (Original) | Giá trị tính toán lại (Recomputed) | Khớp (Match) | Đơn vị & Cơ sở hóa học / vật lý |
|---|---|---|---|---|---|
| 1 | Thứ tự năng lượng liên kết C–C | $E(C \equiv C) > E(C = C) > E(C - C)$ (839 > 614 > 348) | 839 > 614 > 348 | **Yes** | $\text{kJ/mol}$; Bậc liên kết tăng thì năng lượng tăng. |
| 2 | Thứ tự độ dài liên kết C–C | $r(C - C) > r(C = C) > r(C \equiv C)$ (154 > 134 > 120) | 154 > 134 > 120 | **Yes** | $\text{pm}$; Bậc liên kết tăng thì độ dài giảm. |
| 3 | Quy đổi độ dài $C-C$: 1,54 Å sang pm | $154\text{ pm}$ | $154\text{ pm}$ | **Yes** | $1\text{ Å} = 100\text{ pm} = 10^{-10}\text{ m}$. |
| 4 | Quy đổi độ dài $C=C$: 1,34 Å sang pm | $134\text{ pm}$ | $134\text{ pm}$ | **Yes** | $1\text{ Å} = 100\text{ pm}$. |
| 5 | Quy đổi độ dài $C \equiv C$: 1,20 Å sang pm | $120\text{ pm}$ | $120\text{ pm}$ | **Yes** | $1\text{ Å} = 100\text{ pm}$. |
| 6 | Hằng số quy đổi Debye sang SI | $1\text{ D} = 3,336 \times 10^{-30}\text{ C}\cdot\text{m}$ | $3,33564 \times 10^{-30}\text{ C}\cdot\text{m}$ | **Yes** | Khớp chuẩn quốc tế CODATA ($10^{-18}\text{ esu}\cdot\text{cm}$). |
| 7 | Hiệu độ âm điện $\Delta\chi(C-H)$ | 0,35 | $|2,55 - 2,20| = 0,35$ | **Yes** | Cộng hóa trị không cực ($\Delta\chi < 0,4$). |
| 8 | Hiệu độ âm điện $\Delta\chi(H-Cl)$ | 0,96 | $|3,16 - 2,20| = 0,96$ | **Yes** | Cộng hóa trị có cực ($0,4 \le \Delta\chi < 1,7$). |
| 9 | Hiệu độ âm điện $\Delta\chi(Na-Cl)$ | 2,23 | $|3,16 - 0,93| = 2,23$ | **Yes** | Liên kết ion ($\Delta\chi \ge 1,7$). |
| 10 | Hiệu độ âm điện $\Delta\chi(C-O)$ | 0,89 | $|3,44 - 2,55| = 0,89$ | **Yes** | Cộng hóa trị có cực ($0,4 \le \Delta\chi < 1,7$). |
| 11 | Hiệu độ âm điện $\Delta\chi(C-Cl)$ (Câu 3) | 0,61 | $|3,16 - 2,55| = 0,61$ | **Yes** | Phân cực nhưng bị triệt tiêu do đối xứng $T_d$. |
| 12 | Thứ tự phân cực liên kết (Câu 4) | $C-H < H-Cl < Na-Cl$ | $0,35 < 0,96 < 2,23$ | **Yes** | Khớp đáp án B của Câu trắc nghiệm 4. |
| 13 | $CO_2$: Điện tích hình thức $FC(C)$ | 0 | $4 - 0 - \frac{8}{2} = 0$ | **Yes** | C trung tâm: $V=4, N=0, B=8$. |
| 14 | $CO_2$: Điện tích hình thức $FC(O)$ | 0 | $6 - 4 - \frac{4}{2} = 0$ | **Yes** | Mỗi nguyên tử O: $V=6, N=4, B=4$. |
| 15 | $CO_2$: Tổng điện tích hình thức | 0 | $0 + 2(0) = 0$ | **Yes** | Khớp điện tích phân tử trung hòa. |
| 16 | $CO_2$: Bảo toàn electron hóa trị | 16 e | $4 + 2(6) = 16\text{ e}$ | **Yes** | $2 \times 4\text{ (lone pairs)} + 8\text{ (bonds)} = 16\text{ e}$. |
| 17 | $NO_3^-$: Điện tích hình thức $FC(N)$ | +1 | $5 - 0 - \frac{8}{2} = +1$ | **Yes** | N trung tâm: $V=5, N=0, B=8$. |
| 18 | $NO_3^-$: $FC(O_{đôi})$ | 0 | $6 - 4 - \frac{4}{2} = 0$ | **Yes** | O liên kết đôi: $V=6, N=4, B=4$. |
| 19 | $NO_3^-$: $FC(O_{đơn})$ (mỗi nguyên tử) | -1 | $6 - 6 - \frac{2}{2} = -1$ | **Yes** | O liên kết đơn: $V=6, N=6, B=2$. |
| 20 | $NO_3^-$: Tổng điện tích hình thức | -1 | $(+1) + 0 + 2(-1) = -1$ | **Yes** | Khớp hoàn hảo điện tích anion $NO_3^-$. |
| 21 | $NO_3^-$: Bảo toàn electron hóa trị | 24 e | $5 + 3(6) + 1 = 24\text{ e}$ | **Yes** | $0 + 4 + 2(6) + 8 = 24\text{ e}$. |
| 22 | Số electron hóa trị của $NO$ | 11 e | $5 (N) + 6 (O) = 11$ | **Yes** | Số lẻ $\rightarrow$ Gốc tự do, tính thuận từ. |
| 23 | Số electron hóa trị của $NO_2$ | 17 e | $5 (N) + 2 \times 6 (O) = 17$ | **Yes** | Số lẻ $\rightarrow$ Gốc tự do, tính thuận từ. |
| 24 | Số electron hóa trị của $ClO_2$ | 19 e | $7 (Cl) + 2 \times 6 (O) = 19$ | **Yes** | Số lẻ $\rightarrow$ Gốc tự do, tính thuận từ. |
| 25 | Bậc liên kết thực nghiệm $CO_3^{2-}$ | $1\frac{1}{3} \approx 1,33$ | $\frac{2 + 1 + 1}{3} = \frac{4}{3} \approx 1,333$ | **Yes** | 4 cặp e liên kết giải tỏa đều trên 3 liên kết. |
| 26 | Điện tích trung bình trên mỗi O của $CO_3^{2-}$ | -2/3 | $-2 / 3 \approx -0,67$ | **Yes** | Điện tích -2 giải tỏa đều trên 3 nguyên tử O. |
| 27 | Bài tập 5 ($O_3$): $FC(O_{(1)})$ liên kết đôi | 0 | $6 - 4 - \frac{4}{2} = 0$ | **Yes** | $O_{(1)}$ đầu mạch: $V=6, N=4, B=4$. |
| 28 | Bài tập 5 ($O_3$): $FC(O_{(2)})$ trung tâm | +1 | $6 - 2 - \frac{6}{2} = +1$ | **Yes** | $O_{(2)}$ ở giữa: $V=6, N=2, B=6$. |
| 29 | Bài tập 5 ($O_3$): $FC(O_{(3)})$ liên kết đơn | -1 | $6 - 6 - \frac{2}{2} = -1$ | **Yes** | $O_{(3)}$ đầu mạch: $V=6, N=6, B=2$. |
| 30 | Bài tập 5 ($O_3$): Tổng điện tích hình thức | 0 | $0 + (+1) + (-1) = 0$ | **Yes** | Khớp điện tích phân tử Ozone trung hòa. |
| 31 | Bài tập 5 ($O_3$): Bảo toàn electron hóa trị | 18 e | $3 \times 6 = 18\text{ e}$ | **Yes** | $4 + 2 + 6 + 6 = 18\text{ e}$. |
| 32 | Bài tập 6 ($BF_4^-$): $FC(B)$ | -1 | $3 - 0 - \frac{8}{2} = -1$ | **Yes** | Bo trung tâm: $V=3, N=0, B=8$. |
| 33 | Bài tập 6 ($BF_4^-$): $FC(F)$ (mỗi nguyên tử) | 0 | $7 - 6 - \frac{2}{2} = 0$ | **Yes** | Mỗi Fluorine: $V=7, N=6, B=2$. |
| 34 | Bài tập 6 ($BF_4^-$): Tổng điện tích hình thức | -1 | $(-1) + 4(0) = -1$ | **Yes** | Khớp điện tích anion Tetrafluoroborate. |
| 35 | Bài tập 6 ($BF_4^-$): Bảo toàn electron hóa trị | 32 e | $3 + 4(7) + 1 = 32\text{ e}$ | **Yes** | $0 + 4(6) + 8 = 32\text{ e}$. |
| 36 | Đáp án Trắc nghiệm Câu 1 | C | C | **Yes** | $C \equiv C$ ngắn nhất ($120\text{ pm}$) và bền nhất ($839\text{ kJ/mol}$). |
| 37 | Đáp án Trắc nghiệm Câu 2 | B | B | **Yes** | $BeCl_2$ (4 e quanh Be), $BF_3$ (6 e quanh B). |
| 38 | Đáp án Trắc nghiệm Câu 3 | C | C | **Yes** | Cấu trúc tứ diện đều đối xứng hoàn hảo $\rightarrow \mu_{pt}=0$. |
| 39 | Đáp án Trắc nghiệm Câu 4 | B | B | **Yes** | Khớp thứ tự tính toán $\Delta\chi$: $0,35 < 0,96 < 2,23$. |

**Kết luận kiểm định số học:** 39/39 hạng mục kiểm tra đạt kết quả **Khớp (Match: 100%)**. Cân bằng nguyên tố và cân bằng điện tích trong tất cả các ví dụ minh họa và bài tập giải chi tiết đều chính xác tuyệt đối.

---

## E. Tag and Reference Audit (Kiểm toán Thẻ và Tài liệu tham khảo)

### 1. Thống kê cơ học về thẻ (Kiểm tra bằng script)
- `[ADDED]`: 10 thẻ (tính theo dòng thẻ độc lập).
- `[VERIFY]`: 14 thẻ (bao gồm số liệu thực nghiệm, hằng số, quy ước Pauling, khẳng định dược lý và đề xuất trích dẫn).
- `[CONFLICT]`: 0 thẻ (Không có mâu thuẫn nội bộ trong tài liệu nguồn).
- `[FIGURE]`: 0 thẻ (Đã dùng sơ đồ Mermaid thay thế cho lưu đồ logic; thiếu thẻ placeholder cho hình cấu trúc 3D).

### 2. Kiểm toán các phần bổ sung chưa gắn thẻ (Untagged Additions)
Kiểm tra chi tiết phát hiện các đoạn văn bản do tác giả tự biên soạn nhưng thiếu thẻ `[ADDED]` cục bộ:
1. `T-01.4.1` (dòng 55): Câu giải thích *"tại đó thế năng tương tác tĩnh điện đạt giá trị cực tiểu"* — chưa gắn thẻ `[ADDED: concept]`.
2. `T-01.4.2` (dòng 74): Khẳng định liên kết góc với *"khả năng khớp nối không gian (steric fit) giữa dược chất và thụ thể thuốc"* — chưa gắn thẻ `[ADDED: pharmacology context]`.
3. `T-01.4.2` (dòng 77–81): Định nghĩa các biến $q$ (Coulomb) và $\vec{d}$ (mét) trong công thức momen lưỡng cực — thiếu thẻ `[ADDED: formula definition]`.
4. `T-01.4.3` (dòng 98): Định nghĩa độ âm điện $\chi$ — thiếu thẻ `[ADDED: definition]`.
5. `T-01.4.4` (dòng 114): Bổ sung mốc thời gian *"Năm 1916, Gilbert N. Lewis đề xuất..."* — thiếu thẻ `[ADDED: historical context]`.
6. `T-01.4.4` (dòng 117): Định nghĩa chi tiết khái niệm Formal Charge — thiếu thẻ `[ADDED: definition]`.
7. `T-01.4.5` (dòng 143): Giải thích bản chất giải tỏa electron $\pi$ và khái niệm *"năng lượng cộng hưởng"* — thiếu thẻ `[ADDED: theory]`.
8. `T-01.4.7` (dòng 187–191): Toàn bộ tiểu mục 4.7.1 phân tích tính ưa nước (hydrophilic), ưa lipid (lipophilic) và tương tác với màng tế bào — hoàn toàn chưa gắn thẻ `[ADDED: pharmacokinetic concept]`.
9. `T-01.7.2`, `T-01.7.3`, `T-01.7.4`: Các tiểu mục bài tập tự luận và đáp án giải chi tiết thiếu thẻ `[ADDED: exercises]` và `[ADDED: answer key]` ở cấp độ tiêu đề mục (chỉ có 1 thẻ chung ở dòng 338).

### 3. Kiểm toán thẻ gắn sai hoặc lạm dụng (Improper Tagging)
- Dòng 433: Thẻ `[ADDED / VERIFY: references needed]` là cú pháp ghép không chuẩn, gây lỗi nhận diện cho các script tự động. Phải tách bạch hoặc quy về thẻ đơn `[VERIFY: reference needed]`.

### 4. Kiểm toán Danh mục Tài liệu tham khảo (Reference Audit)
- **Tình trạng nguồn D-01:** Hoàn toàn không có tài liệu tham khảo nào (0 references).
- **Cấu hình `00_config.md`:** `APPROVED_REFERENCE_LIST: none`.
- **Thực tế tại Mục 8.1 (`T-01.8.1`):** Tác giả đưa vào 4 tài liệu tham khảo xuất bản cụ thể (Bộ Y tế, Miessler, Chang, Rang & Dale).
- **Đánh giá vi phạm:** Mặc dù tác giả có ghi chú giải trình và gắn thẻ `[VERIFY: reference needed]`, việc ghi cụ thể tên tác giả, phiên bản (5th ed, 12th ed, 9th ed), nhà xuất bản khi chưa có sự phê duyệt vào `APPROVED_REFERENCE_LIST` là vi phạm điều khoản R4 ("Never invent authors, titles, years, DOIs, URLs, pages, or quotations. Missing → `[VERIFY: reference needed for <topic>]`"). Đây là lỗi thuộc mức độ **Critical** theo Mục 7.5.

---

## F. Learning Objective Alignment Matrix (Ma trận Đối soát Chuẩn đầu ra)

| Chuẩn đầu ra (LO) | Nội dung chuẩn đầu ra | Vị trí giảng dạy (Where Taught) | Câu hỏi / Bài tập đánh giá (T7) | Cấp độ tư duy (Bloom) | Có đáp án chi tiết? | Đánh giá mức độ đáp ứng sư phạm |
|---|---|---|---|---|---|---|
| **LO-1** (Kiến thức) | Định nghĩa các đại lượng liên kết ($E_{lk}, r, \theta$), bậc liên kết, quy tắc bát tử và 3 nhóm ngoại lệ | `T-01.4.1`, `T-01.4.4`, `T-01.4.6` | **Câu 1**, **Câu 2** | Nhận biết (Knowledge) | **Có** (Mục 7.4) | **Đạt xuất sắc.** Câu hỏi trắc nghiệm bám sát định nghĩa và dữ liệu so sánh chuẩn xác. |
| **LO-2** (Thông hiểu) | Vận dụng thang $\Delta\chi$ Pauling và tổng vector $\vec{\mu}_{pt}$ để phân loại liên kết và tính phân cực phân tử | `T-01.4.2`, `T-01.4.3` | **Câu 3**, **Câu 4** | Thông hiểu (Comprehension) | **Có** (Mục 7.4) | **Đạt xuất sắc.** Câu 3 kiểm tra sâu tính đối xứng phân tử ($CCl_4$); Câu 4 kiểm tra tính toán $\Delta\chi$. |
| **LO-3** (Kỹ năng) | Thiết lập công thức Lewis, tính điện tích hình thức ($FC$) và chọn cấu trúc bền | `T-01.4.4`, `T-01.5.1`, `T-01.5.3` | **Bài tập 5** ($O_3$), **Bài tập 6** ($BF_4^-$) | Vận dụng (Application) | **Có** (Mục 7.4) | **Đạt xuất sắc.** Bài tập tự luận yêu cầu tính từng nguyên tử, kiểm tra $\sum FC$ và bảo toàn electron. |
| **LO-4** (Vận dụng & Phân tích) | Phân tích nguyên nhân ngoại lệ bát tử ($PCl_5$ vs $NCl_5$) và liên hệ cấu tạo gốc tự do $NO$ với sinh học | `T-01.4.6`, `T-01.4.7`, `T-01.5.2` | **Câu 7**, **Câu 8** | Phân tích (Analysis) | **Có** (Mục 7.4) | **Cần chỉnh sửa (Conditional).** Câu 7 giải thích orbital $d$ rất sắc sảo; tuy nhiên Câu 8 bị lỗi đưa thông số PK ($t_{1/2}$) vi phạm DOMAIN_RULES. |

---

## G. Strengths (Ưu điểm nổi bật của bản thảo)

1. Cấu trúc học thuật chuẩn mực theo Template v2; chuyển hóa thành công một fragment bài giảng luyện thi sơ sài (1.119 từ) thành bản tài liệu bài giảng đại học toàn diện (2.332 từ) mà không nén ép nội dung.
2. Thiết kế sư phạm vượt trội: Quy trình 4 bước thiết lập công thức Lewis kèm sơ đồ khối Mermaid và bộ câu hỏi đánh giá phủ kín 100% các chuẩn đầu ra từ Nhận biết đến Phân tích.
3. Độ chính xác cơ học tuyệt đối: Toàn bộ 39 phép tính số học, chuyển đổi đơn vị SI, cân bằng nguyên tố và cân bằng điện tích ion đều khớp 100% khi tái lập trình bằng code Python.
4. Xử lý triệt để các hạt sạn nội dung từ khâu Audit: Bỏ cụm từ gây nhiễu "và CO" theo Gate A, chuẩn hóa ký hiệu độ dài liên kết $r$ (loại bỏ $d_{lk}$), tách biệt rõ ràng vector momen liên kết và momen phân tử.

---

## H. Items for Human Expert Decision (Các vấn đề cần Người dùng / Chuyên gia quyết định)

1. **Phê duyệt danh mục tài liệu tham khảo chính thức (`APPROVED_REFERENCE_LIST`):**
   - *Hiện trạng:* `00_config.md` đang để `APPROVED_REFERENCE_LIST: none`, dẫn đến việc tác giả đề xuất 4 sách giáo khoa bị tính là vi phạm R4 (Issue QA-01.03).
   - *Lựa chọn:*
     - **Lựa chọn A (Khuyến nghị):** Người dùng chấp thuận chính thức đưa 4 giáo trình này vào `00_config.md`:
       1. Bộ Y tế Việt Nam. *Hóa vô cơ Dược*. NXB Y học, Hà Nội.
       2. Miessler, G. L., Fischer, P. J., & Tarr, D. A. *Inorganic Chemistry* (5th ed.). Pearson.
       3. Chang, R., & Goldsby, K. A. *Chemistry* (12th ed.). McGraw-Hill Education.
       4. Rang, H. P. et al. *Rang & Dale's Pharmacology* (9th ed.). Elsevier.
       Khi đó, vòng kiểm định S4 kế tiếp sẽ công nhận hợp lệ.
     - **Lựa chọn B:** Giữ nguyên `none`, yêu cầu tác giả rút toàn bộ tên sách cụ thể và chỉ để thẻ giữ chỗ generic `[VERIFY: reference needed for Inorganic Pharmaceutical Chemistry]`.

2. **Xử lý câu hỏi tự lượng giá số 8 về phân tử $NO$:**
   - *Hiện trạng:* Đề cập đến thời gian bán thải sinh học ($t_{1/2} = 1\text{–}5\text{ giây}$) vi phạm điều cấm của `DOMAIN_RULES` (Issue QA-01.01).
   - *Lựa chọn:*
     - **Lựa chọn A (Khuyến nghị):** Tác giả sửa lại câu hỏi 8a: *"Dựa trên cấu tạo electron hóa trị, hãy giải thích tại sao $NO$ có tính thuận từ và có hoạt tính hóa học rất cao trong môi trường sinh học?"* (Loại bỏ hoàn toàn khái niệm và con số $t_{1/2}$).
     - **Lựa chọn B:** Người dùng cấp một ngoại lệ (waiver) bằng văn bản trong `decisions.md` cho phép giữ giá trị $t_{1/2}$ này như một ví dụ minh họa sinh lý học.

3. **Xử lý ví dụ lâm sàng Nitroglycerin (Issue QA-01.02):**
   - *Khuyến nghị:* Loại bỏ cụm *"như Nitroglycerin trong điều trị cơn đau thắt ngực"* để tuân thủ tuyệt đối nguyên tắc tài liệu bài giảng Hóa vô cơ không kiêm nhiệm hướng dẫn điều trị lâm sàng.

---

## I. Not Verified / Limitations (Chưa kiểm chứng & Hạn chế)

1. **Kiểm chứng thực tế tài liệu tham khảo:** Chuyên gia QA không xác nhận sự tồn tại vật lý hay tính chính xác của số trang trong các giáo trình được đề xuất; việc này phụ thuộc vào quyết định của người dùng tại Mục H.
2. **Số liệu thực nghiệm sổ tay:** Các giá trị năng lượng liên kết (839, 614, 348 kJ/mol) và độ dài liên kết (154, 134, 120 pm) được xác nhận khớp hoàn toàn với tài liệu nguồn D-01 và logic hóa học, nhưng chưa được đối soát trực tiếp với Sổ tay Hóa lý Quốc tế (CRC Handbook of Chemistry and Physics).
3. **Phạm vi kiểm tra:** Quá trình kiểm định được thực hiện độc lập, chỉ dựa trên tài liệu nguồn D-01, cấu hình môn học và quy tắc tòa soạn `toa-soan_rules.md`. Các chương khác (Chương 2 đến 8) chưa được đối soát chéo.
4. **Công cụ cơ học:** Tính toán số học được xác thực độc lập bằng Python 3.12 (standard library). Đếm thẻ và độ dài văn bản được xác thực bằng script chuyên dụng trong thư mục `_tools/`.

---

**KẾT THÚC BÁO CÁO KIỂM ĐỊNH S4 (R1)**  
*Đề nghị Orchestrator kích hoạt công đoạn **S3-FIX** để Tác giả xử lý các vấn đề Critical và Major theo bảng B.*
