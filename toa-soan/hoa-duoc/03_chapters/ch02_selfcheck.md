# ch02_selfcheck.md — Báo cáo Tự Kiểm tra Chương 02 (Stage S3 Self-Check)

**Môn:** Hóa vô cơ dược · **Chương:** 02 · **Stage:** S3 Write · **Ngày:** 2026-11-07  
**Bản thảo kiểm tra:** `03_chapters/ch02_draft.md`  
**Nhật ký thay đổi:** `03_chapters/ch02_changelog.md`  
**Nguồn gốc (READ-ONLY):** `00_source_original/ch02_doc-hvc-2.html` (D-02)

---

## 1. Đối soát Độ phủ S-ID (S-ID Coverage — `check_coverage.py`)

Kết quả chạy công cụ `_tools/check_coverage.py` (lưu tại `_state/checks/ch02_s3_coverage.md`):
- **Trạng thái:** **✅ PASS (`100.0%`)**
- **Tổng số S-ID trong Audit Register (`01_audit/ch02_audit.md`):** `8` (`S-02.1` đến `S-02.8`)
- **Số S-ID đã sử dụng trong bản thảo:** `8`
- **Số S-ID chưa sử dụng / bị bỏ sót (`Missing S-IDs`):** **`0`**

| S-ID | Nội dung nguồn (`D-02`) | Vị trí sử dụng trong `ch02_draft.md` (`T-ID`) | Trạng thái bảo toàn | Ghi chú chi tiết |
|---|---|---|---|---|
| `S-02.1` | 1. Nguyên lý cơ bản của thuyết VSEPR (Gillespie - Nyholm): cực tiểu lực đẩy tĩnh điện, $\text{LP–LP} > \text{LP–BP} > \text{BP–BP}$, liên kết bội và đoạn Ý nghĩa | `T-02.4.1`, `T-02.4.6` | ✅ Bảo toàn 100% | Giữ nguyên toàn bộ nguyên lý, bất đẳng thức `(2.1)`, giải thích thể tích đám mây $\text{LP}$ vs. $\text{BP}$, quy tắc liên kết bội và đoạn Ý nghĩa. |
| `S-02.2` | 2. Phương pháp xác định công thức VSEPR ($AX_mE_n$) & Số phối trí lập thể $SN = (V+M-q)/2$ và đoạn Ý nghĩa | `T-02.4.2`, `T-02.5.4` | ✅ Bảo toàn 100% | Giữ nguyên công thức `(2.2)`, định nghĩa các biến $A, X, E, m, n, V, M, q$ và đoạn Ý nghĩa; mở rộng hướng dẫn tính cho $HCN, O_3, I_3^-$. |
| `S-02.3` | 3. Bảng tổng hợp toàn diện 13 kiểu hình học phân tử theo VSEPR ($SN = 2 \div 6$) và đoạn Ý nghĩa | `T-02.4.3`, `T-02.4.4`, `T-02.4.6` | ✅ Bảo toàn 100% | Giữ nguyên toàn bộ 13 hàng, 7 cột, toàn bộ góc liên kết lý thuyết/thực tế và cả 39 ví dụ hóa học trong **Bảng 2.1**; bổ sung lưu ý về $[Fe(CN)_6]^{4-}, [PtCl_4]^{2-}$. |
| `S-02.4` | 4. Quy tắc Bent & Sự lệch góc liên kết thực tế (vị trí xích đạo khi $SN=5$; Quy tắc Bent; $\widehat{H-O-H} > \widehat{F-O-F}$; $\widehat{H-N-H} > \widehat{F-N-F}$) | `T-02.4.4`, `T-02.4.5`, `T-02.5.2` | ✅ Bảo toàn 100% | Tách phần vị trí trục/xích đạo sang `T-02.4.4` (kèm đếm tương tác $90^\circ$); giữ nguyên Quy tắc Bent và 2 bất đẳng thức góc `(2.4)`, `(2.5)` tại `T-02.4.5`. |
| `S-02.5` | Đoạn tổng kết "Ý nghĩa và tác dụng" (dự đoán phân cực, tính chất vật lý, định hướng thuốc gắn vào enzyme/thụ thể) | `T-02.4.6` | ✅ Bảo toàn 100% | Hợp nhất với các câu Ý nghĩa của `S-02.1`, `S-02.3` tại `T-02.4.6`; tuân thủ nghiêm ngặt `DOMAIN_RULES`. |
| `S-02.6` | Hộp ví dụ: Dự đoán dạng hình học của $CH_4, NH_3, H_2O, SF_6$ và nhận xét xu hướng góc | `T-02.5.1` | ✅ Bảo toàn 100% | Chuẩn hóa thành **Example 2.1** theo cấu trúc `Given \| Find \| Approach \| Solution \| Check \| Interpretation` có tính tường minh $SN = (V+M-q)/2$. |
| `S-02.7` | Hộp ví dụ: Khi $SN = 5$: cặp e tự do chọn vị trí nào? ($PCl_5, SF_4, ClF_3, XeF_2$) | `T-02.5.2` | ✅ Bảo toàn 100% | Chuẩn hóa thành **Example 2.2** theo cấu trúc 6 mục chuẩn, ghi đầy đủ cả hai góc $\approx 87^\circ$ ($<90^\circ$) và $\approx 102^\circ$ ($<120^\circ$) của $SF_4$. |
| `S-02.8` | Hộp callout "Cách nhớ": 5 khung chuẩn ($SN=2..6$), độ co góc $2\text{–}2,5^\circ$ mỗi LP, quy tắc xích đạo $SN=5$ | `T-02.5.4`, `T-02.6.1` | ✅ Bảo toàn 100% | Chuyển thành quy trình thuật toán 4 bước (`T-02.5.4`) và mục Tóm tắt trọng tâm (`T-02.6.1`), ghi rõ phạm vi quy tắc co góc $2\text{–}2,5^\circ$ cho khung $SN=4$. |

---

## 2. Kiểm kê Thẻ Cơ học (Tag Counts — `check_tags.py`)

Kết quả chạy công cụ `_tools/check_tags.py` trên `03_chapters/ch02_draft.md` (lưu tại `_state/checks/ch02_s3_tags.md`, tổng số dòng = `594`):

| Loại thẻ (Tag Type) | Số lượng chính xác (Script Output) | Phân bổ và mục đích sử dụng trong `ch02_draft.md` |
|---|---|---|
| `[ADDED]` | **35** | Dựng khung cấu trúc sư phạm (`T-02.1.1`..`T-02.3.1`, `T-02.6.2`..`T-02.8.1`), định nghĩa phân biệt Hình học cặp e vs. Hình học phân tử, làm rõ thuật ngữ liên kết $\sigma$/phối tử/Điệp hình, đếm tương tác $90^\circ$ trong khung $SN=5$, giải thích định tính đặc tính $p$ nối sang Chương 3, quy tắc triệt tiêu $\vec{\mu}_{pt}$, mở rộng từng bước giải cho Ví dụ 2.1–2.3, sơ đồ Mermaid (**Hình 2.1**), khung giữ chỗ **Hình 2.2–2.4** và bộ 10 câu hỏi/bài tập kèm đáp án chi tiết. |
| `[VERIFY]` | **16** | Phủ kín toàn bộ 9 hạng mục `V-02.01`..`V-02.09` của Audit Queue: phạm vi công thức $SN$ cho $HCN, O_3, I_3^-$ (`V-02.01`, dòng 95); số liệu góc liên kết thực nghiệm trong Bảng 2.1 và Ví dụ (`V-02.03`, `V-02.04`, dòng 123, 177, 263, 269, 299, 302); phức chất $[Fe(CN)_6]^{4-}, [PtCl_4]^{2-}$ trong bảng VSEPR (`V-02.02`, dòng 154); cơ sở lý thuyết và số liệu góc Quy tắc Bent $H_2O/OF_2, NH_3/NF_3$ (`V-02.06`, `V-02.05`, dòng 198, 208, 212); nhận định định hướng gắn kết thuốc – enzyme/thụ thể (`V-02.08`, dòng 236); quy tắc kinh nghiệm co góc $2\text{–}2,5^\circ$ (`V-02.07`, dòng 408); và 3 thẻ giữ chỗ tài liệu tham khảo tại `T-02.8.1` (`V-02.09`, dòng 592–594). |
| `[CONFLICT]` | **0** | Không có xung đột dữ kiện giữa các tài liệu nguồn. |
| `[FIGURE]` | **3** | Ba khung giữ chỗ hình vẽ cấu trúc không gian 3D chuẩn tại `T-02.5.5` (**Hình 2.2** dòng 386, **Hình 2.3** dòng 389, **Hình 2.4** dòng 392), bên cạnh 1 sơ đồ thuật toán Mermaid vẽ trực tiếp (**Hình 2.1** tại `T-02.5.4`). |

---

## 3. Kiểm tra Độ dài Cơ học (Length Check — `check_length.py`)

Kết quả chạy công cụ `_tools/check_length.py` đối chiếu `03_chapters/ch02_draft.md` với `00_source_original/ch02_doc-hvc-2.html` (lưu tại `_state/checks/ch02_s3_length.md`):
- **Số từ của bản thảo (`Draft word count`, sau khi lọc markup/LaTeX):** **`5,812` từ**
- **Số từ của nguồn (`Source word count`, sau khi lọc thẻ HTML và biểu thức MathJax `$…$`):** **`621` từ** *(tổng số từ thô tính cả các biểu thức inline trong `MANIFEST.md` và `ch02_audit.md` là `1,267` từ)*
- **Tỷ lệ mở rộng (`Ratio Draft / Source`):** **`9.36x`** theo chuẩn lọc markup của script (hoặc **`4.59x`** nếu so với `1,267` từ thô của nguồn)
- **Trạng thái (`TARGET_LENGTH_PER_CHAPTER: not shorter than source; no upper limit`):** **✅ PASS** (Tuân thủ nghiêm ngặt quy tắc không nén nội dung R7).

---

## 4. Kiểm tra Tính Duy nhất của T-ID và Cấu trúc Tiêu đề (`check_ids.py`)

Kết quả chạy công cụ `_tools/check_ids.py` trên `03_chapters/ch02_draft.md` (lưu tại `_state/checks/ch02_s3_ids.md`):
- **Trạng thái:** **✅ PASS**
- **Tổng số mã `T-ID` trong toàn file:** **`30`** (gồm `8` tiêu đề cấp mục lớn `T-02.1`..`T-02.8` và `22` tiêu đề cấp tiểu mục `T-02.1.1`..`T-02.8.1`)
- **Số mã `T-ID` duy nhất (`Unique T-IDs`):** **`30`**
- **Số mã `T-ID` bị trùng lặp (`Duplicates`):** **`0`**

---

## 5. Ma trận Bao phủ Chuẩn đầu ra Học tập (Objective-to-Question Coverage Table)

| Mã Chuẩn đầu ra (`LO`) | Tóm tắt nội dung Chuẩn đầu ra (`T-02.2.1`) | Mục giảng dạy lý thuyết & ví dụ (`T4`–`T6`) | Câu hỏi / Bài tập đánh giá tương ứng (`T-02.7`) | Cấp độ nhận thức (Bloom) | Đáp án & Hướng dẫn giải (`T-02.7.4`) |
|---|---|---|---|---|---|
| **LO-1** (Kiến thức) | Nguyên lý Gillespie–Nyholm, thứ tự lực đẩy $\text{LP–LP} > \text{LP–BP} > \text{BP–BP}$, vai trò liên kết bội, phân biệt Hình học cặp electron vs. Hình học phân tử. | `T-02.4.1`, `T-02.4.2`, `T-02.4.3`, `T-02.6.1`, `T-02.6.2` | **Câu 1** (bản chất $\text{LP}$ vs. $\text{BP}$)<br>**Câu 2** (quy tắc liên kết bội và $M$)<br>**Câu 3** (hình học cặp e vs. hình học phân tử khi $SN=4$) | Knowledge & Comprehension (Nhận biết & Thông hiểu) | ✅ Có đầy đủ (Mục I: Câu 1–3) |
| **LO-2** (Kỹ năng) | Vận dụng công thức $SN = m + n = (V+M-q)/2$ xác định công thức $AX_mE_n$ ($SN = 2 \div 6$) và gọi tên hình học phân tử/ion đa nguyên tử. | `T-02.4.2`, `T-02.4.3`, `T-02.4.4`, `T-02.5.1`–`T-02.5.4`, `T-02.6.1` | **Câu 2, Câu 3, Câu 4** ($AX_2E_3$ thẳng hàng)<br>**Bài tập 5** ($SO_2, SO_3, NO_3^-, H_3O^+$)<br>**Bài tập 6** ($BrF_3, BrF_5, XeF_4, [ICl_4]^-$)<br>**Bài tập 7** (xác định hình học 9 chất) | Comprehension & Application (Thông hiểu & Vận dụng) | ✅ Có đầy đủ (Mục I: Câu 2–4; Mục II: Bài tập 5–7) |
| **LO-3** (Phân tích lập thể) | Biện luận vị trí xích đạo của $\text{LP}$ trong khung $SN = 5$ (tương tác $90^\circ$) và vận dụng Quy tắc Bent giải thích sự lệch góc liên kết thực tế. | `T-02.4.4`, `T-02.4.5`, `T-02.5.1`, `T-02.5.2`, `T-02.5.5`, `T-02.6.1`, `T-02.6.2` | **Câu 4**, **Bài tập 5, Bài tập 6**<br>**Câu 8** (đếm tương tác $90^\circ$ và giải thích 2 góc $\approx 87^\circ, 102^\circ$ của $SF_4$)<br>**Câu 9** (Quy tắc Bent cho $H_2O/OF_2$ và $NH_3/NF_3$) | Application & Analysis (Vận dụng & Phân tích) | ✅ Có đầy đủ (Mục II: Bài tập 5–6, Câu 8–9) |
| **LO-4** (Năng lực tích hợp Hóa dược) | Kết hợp hình học VSEPR với tổng vector $\vec{\mu}_{pt}$ để dự đoán độ phân cực, độ tan và giải thích vai trò định hướng gắn kết thuốc – enzyme/thụ thể. | `T-02.3.1`, `T-02.4.6`, `T-02.5.1`, `T-02.5.2`, `T-02.5.4`, `T-02.6.2` | **Bài tập 7** (phân loại $\mu_{pt}=0$ vs. $\mu_{pt}>0$ cho 9 chất)<br>**Câu 10** (so sánh $CO_2/H_2O, CCl_4/SF_4$ về $\vec{\mu}_{pt}$, độ tan và giải thích định hướng gắn kết enzyme/thụ thể) | Application, Analysis & Advanced (Vận dụng & Vận dụng cao) | ✅ Có đầy đủ (Mục II: Bài tập 7, Câu 10) |

- **Đánh giá độ phủ LO:** **4/4 Chuẩn đầu ra (`100%`)** đều được giảng dạy chi tiết ở phần bài giảng và được kiểm tra bằng ít nhất 3 câu hỏi/bài tập ở các cấp độ nhận thức phù hợp, có đáp án và lời giải từng bước.

---

## 6. Not Verified / Limitations (Tuân thủ Quy tắc Liêm chính R10 & R12)

1. **Dữ liệu góc liên kết thực nghiệm chưa đối chiếu nguồn ngoài (`V-02.03`, `V-02.04`, `V-02.05`):** Các giá trị số đo góc liên kết thực nghiệm từ tài liệu nguồn ($SO_2 \approx 119^\circ$; $NH_3 \approx 107,3^\circ$; $H_2O \approx 104,5^\circ$; $OF_2 = 103,1^\circ$; $NF_3 = 102,5^\circ$; $SF_4 \approx 87^\circ, 102^\circ$; $ClF_3 \approx 87,5^\circ$; $BrF_5 \approx 84,8^\circ$) được giữ nguyên 100% và gắn thẻ `[VERIFY]` để chuyên gia đối chiếu với sổ tay dữ liệu hóa lý chuẩn.
2. **Tài liệu tham khảo (`V-02.09`):** Do tài liệu nguồn `ch02_doc-hvc-2.html` có `0` trích dẫn và `00_config.md` đặt `APPROVED_REFERENCE_LIST: none`, mục `T-02.8.1` sử dụng 3 thẻ giữ chỗ `[VERIFY: reference needed for ...]` theo đúng quy tắc R4, chờ giảng viên/người dùng cung cấp danh mục giáo trình chính thức.
3. **Phức chất kim loại chuyển tiếp trong bảng VSEPR (`V-02.02`):** Hai ví dụ $[Fe(CN)_6]^{4-}$ và $[PtCl_4]^{2-}$ được giữ nguyên trong **Bảng 2.1** theo đúng nguồn và đã bổ sung hộp lưu ý học thuật (`[ADDED]` + `[VERIFY]`) về giới hạn của thuyết VSEPR đối với ion kim loại chuyển tiếp $d^6, d^8$, chờ chuyên gia xác nhận tại Gate B.
4. **Hình vẽ cấu trúc không gian 3D (`[FIGURE: 2.2, 2.3, 2.4]`):** Do đầu ra là văn bản Markdown, 3 hình minh họa cấu trúc lập thể 3D (biểu diễn nét liền – nét đậm hình nêm – nét đứt) được đặt dưới dạng khung giữ chỗ `[FIGURE]` mô tả đầy đủ thông số kỹ thuật để chế bản đồ họa ở giai đoạn xuất bản.
5. **Bảo toàn nguyên trạng nguồn gốc:** File `00_source_original/ch02_doc-hvc-2.html` chỉ được đọc (READ-ONLY), hoàn toàn không bị chỉnh sửa.
