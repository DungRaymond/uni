# Nhật ký Biên tập Chuẩn hóa (S5A Edit Log) · Chương 02

- **Chế độ xuất bản:** `Mode A — Per-chapter standardization (REVIEW DRAFT)`
- **Dự án:** Hóa vô cơ dược – Master Lecture Notes
- **Chương:** Chương 02 — Thuyết Đẩy Cặp Electron Vỏ Hóa Trị (VSEPR) & Cấu trúc Không gian Phân tử
- **Đầu vào:** `03_chapters/ch02_draft.md` (đã qua S4 QA Vòng 1 `04_qa/ch02_qa_r1.md` với phán quyết **PASS** và phê duyệt Gate B tại `_state/decisions.md`)
- **Đầu ra:**
  - `05_final/ch02_std_review.md`
  - `05_final/MLN_HoaVoCoDuoc_Ch02_v2.0_review.md`
- **Ngày thực hiện:** 2026-11-07
- **Người thực hiện:** Subagent `editor` (Stage S5A)

---

## A. Bảng ánh xạ `T-ID` → Số mục cuối (T-ID to Final Section Numbering)

Toàn bộ `30` mã `T-ID` trên tiêu đề của `03_chapters/ch02_draft.md` cùng các tiêu đề cấp 4 đã được thay thế bằng hệ thống đánh số phân cấp chính thức của Chương 2 (tối đa 4 cấp: `Chương 2` → `2.x` → `2.x.y` → `2.x.y.z`):

| STT | Mã `T-ID` (trong `ch02_draft.md`) | Tiêu đề trong `ch02_draft.md` | Số mục chính thức (trong `ch02_std_review.md`) | Cấp tiêu đề |
|---|---|---|---|---|
| — | *(Cấp Chương)* | `# Chương 2: Thuyết Đẩy Cặp Electron Vỏ Hóa Trị (VSEPR) & Cấu trúc Không gian Phân tử` | `# Chương 2: Thuyết Đẩy Cặp Electron Vỏ Hóa Trị (VSEPR) & Cấu trúc Không gian Phân tử` | Cấp 1 (`#`) |
| 1 | `T-02.1` | `## 1. Tổng quan chương (Chapter Overview) {T-02.1}` | `## 2.1 Tổng quan chương (Chapter Overview)` | Cấp 2 (`##`) |
| 2 | `T-02.1.1` | `### 1.1 Chương 2: Thuyết Đẩy Cặp Electron Vỏ Hóa Trị (VSEPR) & Cấu trúc Không gian Phân tử {T-02.1.1}` | `### 2.1.1 Chương 2: Thuyết Đẩy Cặp Electron Vỏ Hóa Trị (VSEPR) & Cấu trúc Không gian Phân tử` | Cấp 3 (`###`) |
| 3 | `T-02.1.2` | `### 1.2 Phạm vi, Kiến thức Tiên quyết & Thời lượng Học tập {T-02.1.2}` | `### 2.1.2 Phạm vi, Kiến thức Tiên quyết & Thời lượng Học tập` | Cấp 3 (`###`) |
| 4 | `T-02.2` | `## 2. Mục tiêu học tập (Learning Objectives) {T-02.2}` | `## 2.2 Mục tiêu học tập (Learning Objectives)` | Cấp 2 (`##`) |
| 5 | `T-02.2.1` | `### 2.1 Mục tiêu Học tập Chuẩn đầu ra (Learning Objectives) {T-02.2.1}` | `### 2.2.1 Mục tiêu Học tập Chuẩn đầu ra (Learning Objectives)` | Cấp 3 (`###`) |
| 6 | `T-02.3` | `## 3. Đặt vấn đề & Ý nghĩa thực tiễn (Introduction) {T-02.3}` | `## 2.3 Đặt vấn đề & Ý nghĩa thực tiễn (Introduction)` | Cấp 2 (`##`) |
| 7 | `T-02.3.1` | `### 3.1 Đặt vấn đề: Từ Công thức Phẳng Lewis đến Hình học Không gian 3 Chiều {T-02.3.1}` | `### 2.3.1 Đặt vấn đề: Từ Công thức Phẳng Lewis đến Hình học Không gian 3 Chiều` | Cấp 3 (`###`) |
| 8 | `T-02.4` | `## 4. Nội dung bài giảng chính (Main Content) {T-02.4}` | `## 2.4 Nội dung bài giảng chính (Main Content)` | Cấp 2 (`##`) |
| 9 | `T-02.4.1` | `### 4.1 Nguyên lý Cơ bản của Thuyết VSEPR (Gillespie – Nyholm) {T-02.4.1}` | `### 2.4.1 Nguyên lý Cơ bản của Thuyết VSEPR (Gillespie – Nyholm)` | Cấp 3 (`###`) |
| — | *(Sub-topic của `T-02.4.1`)* | `#### 4.1.1` / `4.1.2` / `4.1.3` | `#### 2.4.1.1` / `2.4.1.2` / `2.4.1.3` | Cấp 4 (`####`) |
| 10 | `T-02.4.2` | `### 4.2 Ký hiệu VSEPR ($AX_mE_n$) & Phương pháp Xác định Số Phối trí Lập thể ($SN$) {T-02.4.2}` | `### 2.4.2 Ký hiệu VSEPR ($AX_mE_n$) & Phương pháp Xác định Số Phối trí Lập thể ($SN$)` | Cấp 3 (`###`) |
| — | *(Sub-topic của `T-02.4.2`)* | `#### 4.2.1` / `4.2.2` / `4.2.3` | `#### 2.4.2.1` / `2.4.2.2` / `2.4.2.3` | Cấp 4 (`####`) |
| 11 | `T-02.4.3` | `### 4.3 Hệ thống Phân loại Hình học Cặp Electron và Hình học Phân tử ($SN = 2 \div 6$) {T-02.4.3}` | `### 2.4.3 Hệ thống Phân loại Hình học Cặp Electron và Hình học Phân tử ($SN = 2 \div 6$)` | Cấp 3 (`###`) |
| — | *(Sub-topic của `T-02.4.3`)* | `#### 4.3.1` / `4.3.2` / `4.3.3` / `4.3.4` | `#### 2.4.3.1` / `2.4.3.2` / `2.4.3.3` / `2.4.3.4` | Cấp 4 (`####`) |
| 12 | `T-02.4.4` | `### 4.4 Bất đối xứng Vị trí trong Khung $SN = 5$ (Trục vs. Xích đạo) & Khung $SN = 6$ {T-02.4.4}` | `### 2.4.4 Bất đối xứng Vị trí trong Khung $SN = 5$ (Trục vs. Xích đạo) & Khung $SN = 6$` | Cấp 3 (`###`) |
| — | *(Sub-topic của `T-02.4.4`)* | `#### 4.4.1` / `4.4.2` / `4.4.3` | `#### 2.4.4.1` / `2.4.4.2` / `2.4.4.3` | Cấp 4 (`####`) |
| 13 | `T-02.4.5` | `### 4.5 Quy tắc Bent & Sự Lệch Góc Liên kết Thực tế do Độ Âm điện {T-02.4.5}` | `### 2.4.5 Quy tắc Bent & Sự Lệch Góc Liên kết Thực tế do Độ Âm điện` | Cấp 3 (`###`) |
| — | *(Sub-topic của `T-02.4.5`)* | `#### 4.5.1` / `4.5.2` | `#### 2.4.5.1` / `2.4.5.2` | Cấp 4 (`####`) |
| 14 | `T-02.4.6` | `### 4.6 Ứng dụng VSEPR: Dự đoán Độ Phân cực ($\vec{\mu}_{pt}$), Độ Tan & Định hướng Tương tác Thuốc – Đích {T-02.4.6}` | `### 2.4.6 Ứng dụng VSEPR: Dự đoán Độ Phân cực ($\vec{\mu}_{pt}$), Độ Tan & Định hướng Tương tác Thuốc – Đích` | Cấp 3 (`###`) |
| — | *(Sub-topic của `T-02.4.6`)* | `#### 4.6.1` / `4.6.2` | `#### 2.4.6.1` / `2.4.6.2` | Cấp 4 (`####`) |
| 15 | `T-02.5` | `## 5. Ví dụ minh họa & Quy trình thực hành (Examples & Illustrations) {T-02.5}` | `## 2.5 Ví dụ minh họa & Quy trình thực hành (Examples & Illustrations)` | Cấp 2 (`##`) |
| 16 | `T-02.5.1` | `### 5.1 Ví dụ 2.1: Xác định Số Lập thể $SN$, Hình học và Xu hướng Góc của $CH_4, NH_3, H_2O, SF_6$ {T-02.5.1}` | `### 2.5.1 Ví dụ 2.1: Xác định Số Lập thể $SN$, Hình học và Xu hướng Góc của $CH_4, NH_3, H_2O, SF_6$` | Cấp 3 (`###`) |
| 17 | `T-02.5.2` | `### 5.2 Ví dụ 2.2: Biện luận Vị trí Cặp Electron Tự do trong Khung $SN = 5$ ($PCl_5, SF_4, ClF_3, XeF_2$) {T-02.5.2}` | `### 2.5.2 Ví dụ 2.2: Biện luận Vị trí Cặp Electron Tự do trong Khung $SN = 5$ ($PCl_5, SF_4, ClF_3, XeF_2$)` | Cấp 3 (`###`) |
| 18 | `T-02.5.3` | `### 5.3 Ví dụ 2.3: Dự đoán Hình học của Ion Đa nguyên tử và Phân tử Có Liên kết Bội ($CO_3^{2-}, NO_2^-, SO_4^{2-}, I_3^-$) {T-02.5.3}` | `### 2.5.3 Ví dụ 2.3: Dự đoán Hình học của Ion Đa nguyên tử và Phân tử Có Liên kết Bội ($CO_3^{2-}, NO_2^-, SO_4^{2-}, I_3^-$)` | Cấp 3 (`###`) |
| 19 | `T-02.5.4` | `### 5.4 Quy trình Chuẩn 4 Bước & Sơ đồ Thuật toán Xác định Hình học VSEPR (Mermaid) {T-02.5.4}` | `### 2.5.4 Quy trình Chuẩn 4 Bước & Sơ đồ Thuật toán Xác định Hình học VSEPR (Mermaid)` | Cấp 3 (`###`) |
| 20 | `T-02.5.5` | `### 5.5 Minh họa Trực quan Cấu trúc Không gian 3D & Sự Lệch Góc Liên kết {T-02.5.5}` | `### 2.5.5 Minh họa Trực quan Cấu trúc Không gian 3D & Sự Lệch Góc Liên kết` | Cấp 3 (`###`) |
| 21 | `T-02.6` | `## 6. Tóm tắt chương (Chapter Summary) {T-02.6}` | `## 2.6 Tóm tắt chương (Chapter Summary)` | Cấp 2 (`##`) |
| 22 | `T-02.6.1` | `### 6.1 Tóm tắt Nội dung Trọng tâm & Quy tắc Ghi nhớ Nhanh {T-02.6.1}` | `### 2.6.1 Tóm tắt Nội dung Trọng tâm & Quy tắc Ghi nhớ Nhanh` | Cấp 3 (`###`) |
| 23 | `T-02.6.2` | `### 6.2 Bảng Tổng hợp Công thức, Ký hiệu và Mối quan hệ Khái niệm {T-02.6.2}` | `### 2.6.2 Bảng Tổng hợp Công thức, Ký hiệu và Mối quan hệ Khái niệm` | Cấp 3 (`###`) |
| 24 | `T-02.7` | `## 7. Đánh giá & Bài tập tự lượng giá (Review & Assessment) {T-02.7}` | `## 2.7 Đánh giá & Bài tập tự lượng giá (Review & Assessment)` | Cấp 2 (`##`) |
| 25 | `T-02.7.1` | `### 7.1 Câu hỏi Lý thuyết: Nhận biết & Thông hiểu {T-02.7.1}` | `### 2.7.1 Câu hỏi Lý thuyết: Nhận biết & Thông hiểu` | Cấp 3 (`###`) |
| 26 | `T-02.7.2` | `### 7.2 Bài tập Áp dụng & Tính toán Cấu trúc Lập thể {T-02.7.2}` | `### 2.7.2 Bài tập Áp dụng & Tính toán Cấu trúc Lập thể` | Cấp 3 (`###`) |
| 27 | `T-02.7.3` | `### 7.3 Câu hỏi Phân tích & Vận dụng Nâng cao trong Hóa dược {T-02.7.3}` | `### 2.7.3 Câu hỏi Phân tích & Vận dụng Nâng cao trong Hóa dược` | Cấp 3 (`###`) |
| 28 | `T-02.7.4` | `### 7.4 Đáp án & Hướng dẫn Giải Chi tiết (Answer Key) {T-02.7.4}` | `### 2.7.4 Đáp án & Hướng dẫn Giải Chi tiết (Answer Key)` | Cấp 3 (`###`) |
| — | *(Sub-topic của `T-02.7.4`)* | `#### I. Đáp án phần câu hỏi trắc nghiệm (Mục 7.1)` / `#### II. Hướng dẫn giải chi tiết phần bài tập & câu hỏi phân tích (Mục 7.2 & 7.3)` | `#### 2.7.4.1 Đáp án phần câu hỏi trắc nghiệm (Mục 2.7.1)` / `#### 2.7.4.2 Hướng dẫn giải chi tiết phần bài tập & câu hỏi phân tích (Mục 2.7.2 & 2.7.3)` | Cấp 4 (`####`) |
| 29 | `T-02.8` | `## 8. Tài liệu tham khảo (References) {T-02.8}` | `## 2.8 Tài liệu tham khảo (References)` | Cấp 2 (`##`) |
| 30 | `T-02.8.1` | `### 8.1 Tài liệu Tham khảo & Đọc thêm {T-02.8.1}` | `### 2.8.1 Tài liệu Tham khảo & Đọc thêm` | Cấp 3 (`###`) |

---

## B. Bảng nhật ký chỉnh sửa chuẩn hóa & phi-typographic (Standardization & Non-Typographic Edit Log)

Tuân thủ Mục 7.6 của quy tắc tòa soạn (`toa-soan_rules.md`), mọi chỉnh sửa chuẩn hóa định dạng, ký hiệu, tham chiếu chéo và xử lý 3 góp ý cấp độ Minor từ báo cáo QA (`ISS-02.01`, `ISS-02.02`, `ISS-02.03`) được ghi nhận chi tiết dưới đây (tuyệt đối không làm thay đổi ý nghĩa học thuật, con số, công thức hay đáp án):

| Edit ID | Vị trí (`ch02_draft.md` → `ch02_std_review.md`) | Nội dung trước chỉnh sửa (`Before`) | Nội dung sau chỉnh sửa (`After`) | Lý do chỉnh sửa (`Reason`) |
|---|---|---|---|---|
| `ED-02.01` | Đầu file (L1) | *(Chưa có nhãn chế độ xuất bản)* | `> **Mode A — Per-chapter standardization (REVIEW DRAFT)**` | Tuân thủ Mục 7.6: ghi rõ chế độ chuẩn hóa ở đầu tài liệu xuất bản. |
| `ED-02.02` | Toàn bộ 30 tiêu đề mục & tham chiếu chéo nội bộ/liên chương (L16, L19, L64, L89, L97, L222, L351, L502, L510 → L18, L21, L66, L91, L100, L225, L354, L505, L513) | Các tiêu đề đánh số `1.`–`8.` kèm nhãn `{T-02.x.y}`; tham chiếu nội bộ ghi `Mục 1–6`, `Mục 7`, `Mục 4.2`, `Mục 7.1`, `Mục 7.2 & 7.3` và tham chiếu Chương 1 ghi `Mục 4.4–4.6`, `Mục 4.2`, `Mục 5.3`, `Mục 4.5`. | Đánh số chuẩn `2.1` đến `2.8` (tối đa 4 cấp `2.x.y.z`), gỡ `{T-02.x.y}`; đồng bộ tham chiếu nội bộ thành `Mục 2.1–2.6`, `Mục 2.7`, `Mục 2.4.2`, `Mục 2.7.1`, `Mục 2.7.2 & 2.7.3` và tham chiếu Chương 1 thành `Mục 1.4.4–1.4.6`, `Mục 1.4.2`, `Mục 1.5.3`, `Mục 1.4.5`. | Chuẩn hóa hệ thống đánh số chương `N.1`, `N.1.1`, `N.1.1.1` và đồng bộ toàn bộ tham chiếu chéo theo Mục 7.6. |
| `ED-02.03` | Mục `2.1.2` (L19 → L21) | `(~3.750 từ phần lý thuyết và ví dụ tại Mục 1–6 \approx 2,5\text{ giờ} = 150\text{ phút}, cộng với \frac{10}{5} \times 20\text{ phút} = 40\text{ phút} cho 10 câu hỏi/bài tập tại Mục 7)` | `(~3.750 từ phần lý thuyết và ví dụ tại Mục 2.1–2.6 trên tổng số 5.812 từ toàn chương theo check_length.py \approx 2,5\text{ giờ} = 150\text{ phút}, cộng với \frac{10}{5} \times 20\text{ phút} = 40\text{ phút} cho 10 câu hỏi/bài tập tại Mục 2.7)` | Giải quyết góp ý `ISS-02.01`: làm rõ tổng số từ toàn chương tính bằng script `check_length.py` (`5.812 từ`) bên cạnh số từ phần lý thuyết & ví dụ tại Mục `2.1`–`2.6` (`~3.750 từ`). |
| `ED-02.04` | Mục `2.4.2.2` (L92 → L94–95) & Mục `2.4.5.2` (L207–212 → L210–216) | Công thức `(2.3)`, `(2.4)`, `(2.5)` giải thích biến ở câu dẫn phía trước nhưng chưa có dòng chú thích biến `Trong đó:` ngay bên dưới công thức. | Bổ sung dòng giải thích biến `*(Trong đó: ...)*` ngay dưới Công thức `(2.3)`, `(2.4)` và `(2.5)`. | Tuân thủ Mục 7.6: mọi công thức hiển thị đánh số `(N.k)` đều có dòng giải thích ký hiệu/đơn vị ngay bên dưới. |
| `ED-02.05` | Mục `2.5.3` — `Example 2.3` (L350 → L353) | `- **Interpretation (Nhận định):**` | `- **Interpretation (Nhận xét):**` | Giải quyết góp ý `ISS-02.02`: chuẩn hóa thống nhất nhãn bước 6 thành `Interpretation (Nhận xét)` ở cả 3 ví dụ (`Example 2.1`, `Example 2.2`, `Example 2.3`). |
| `ED-02.06` | Mục `2.5.5` (L384 → L387) & Mục `2.6.2` (L412–414 → L415–418) | Câu dẫn ở `2.5.5` chưa gọi trực tiếp tên số hiệu hình; `Bảng 2.2` ở `2.6.2` chưa có câu dẫn tham chiếu trước tiêu đề bảng. | Bổ sung tham chiếu trực tiếp `(**Hình 2.2**, **Hình 2.3** và **Hình 2.4**)` tại Mục `2.5.5` và câu dẫn `...được hệ thống hóa trong **Bảng 2.2** dưới đây:` tại Mục `2.6.2`. | Tuân thủ Mục 7.6: mọi hình và bảng đều được tham chiếu trực tiếp trong văn bản chính. |
| `ED-02.07` | Đối chiếu đồng bộ góc liên kết thực nghiệm tại `Bảng 2.1` (`2.4.3.2`), `Bảng 2.2` (`2.6.2`), `2.7.3`, `2.7.4` và `2.8.1` | Các giá trị góc thực nghiệm: $SO_2 \approx 119^\circ$, $NH_3 \approx 107,3^\circ$, $H_2O \approx 104,5^\circ$, $OF_2 = 103,1^\circ$, $NF_3 = 102,5^\circ$, $SF_4 \approx 87^\circ, 102^\circ$, $ClF_3 \approx 87,5^\circ$, $BrF_5 \approx 84,8^\circ$. | Giữ nguyên đồng bộ 100% các giá trị góc thực nghiệm đã được người dùng phê duyệt tại Gate B xuyên suốt `Bảng 2.1`, `Bảng 2.2`, `2.7.3`, `2.7.4` và `2.8.1`. | Giải quyết lưu ý đồng bộ `ISS-02.03` sau khi người dùng duyệt xác nhận các nhóm số liệu `V-02.03`, `V-02.04`, `V-02.05` tại Gate B. |

---

## C. Bảng các thẻ `[VERIFY]` đã gỡ theo phê duyệt Gate B của người dùng (User-Approved Tag Resolutions)

Theo quyết định phê duyệt chính thức của người dùng tại Cổng B (ghi nhận trong `_state/decisions.md` và `_state/verification_list_running.md` ngày `2026-11-07`: duyệt Gate B cùng 5 nhóm số liệu thực nghiệm và quy tắc tính toán `V-02.01`, `V-02.03`, `V-02.04`, `V-02.05`, `V-02.07`), đúng **10 thẻ `[VERIFY]`** tương ứng đã được gỡ bỏ khỏi `05_final/ch02_std_review.md`:

| STT | Mã `V-ID` | Vị trí (`ch02_draft.md` → `ch02_std_review.md`) | Thẻ `[VERIFY]` đã gỡ | Đoạn văn trước khi gỡ (`ch02_draft.md`) | Đoạn văn sau khi gỡ (`ch02_std_review.md`) | Căn cứ phê duyệt |
|---|---|---|---|---|---|---|
| 1 | `V-02.01` | Mục `2.4.2.3` (L95 → L98) | `[VERIFY: formula scope and rules for HCN, O3, I3- (V-02.01)]` | `[ADDED: method clarification] [VERIFY: formula scope and rules for HCN, O3, I3- (V-02.01)]` | `[ADDED: method clarification]` | Người dùng duyệt quy tắc mở rộng hệ số $M$ cho $HCN$ ($M(N)=-1$) và phân tử/ion đồng hạch ($O_3, I_3^-$) tại Gate B (`_state/decisions.md`). |
| 2 | `V-02.03`, `V-02.04` | Mục `2.4.3.2` — Tiêu đề `Bảng 2.1` (L123 → L126) | `[VERIFY: experimental bond angle values in table: SO2, NH3, H2O, SF4, ClF3, BrF5 (V-02.03, V-02.04)]` | `**Bảng 2.1.** Hệ thống phân loại toàn diện 13 kiểu hình học cặp electron và hình học phân tử theo thuyết VSEPR ($SN = 2 \div 6$). [VERIFY: experimental bond angle values in table: SO2, NH3, H2O, SF4, ClF3, BrF5 (V-02.03, V-02.04)]` | `**Bảng 2.1.** Hệ thống phân loại toàn diện 13 kiểu hình học cặp electron và hình học phân tử theo thuyết VSEPR ($SN = 2 \div 6$).` | Người dùng duyệt bộ số liệu góc liên kết thực nghiệm trong `Bảng 2.1` tại Gate B (`_state/decisions.md`). |
| 3 | `V-02.04` | Mục `2.4.4.2` (L177 → L180) | `[VERIFY: SF4 bond angles (V-02.04)]` | `...(trong phân tử $SF_4$, hai góc thực tế này lần lượt là [VERIFY: SF4 bond angles (V-02.04)] $\approx 87^\circ$ và $\approx 102^\circ$).` | `...(trong phân tử $SF_4$, hai góc thực tế này lần lượt là $\approx 87^\circ$ và $\approx 102^\circ$).` | Người dùng duyệt số liệu góc liên kết thực nghiệm của hợp chất siêu hóa trị $SF_4$ tại Gate B (`_state/decisions.md`). |
| 4 | `V-02.05` | Mục `2.4.5.2` (L208 → L210) | `[VERIFY: experimental bond angles H2O 104,5° vs OF2 103,1° (V-02.05)]` | `$$\widehat{H-O-H} \ (104,5^\circ) \ > \ \widehat{F-O-F} \ (103,1^\circ) \qquad (2.4)$$<br>`[VERIFY: experimental bond angles H2O 104,5° vs OF2 103,1° (V-02.05)]` | `$$\widehat{H-O-H} \ (104,5^\circ) \ > \ \widehat{F-O-F} \ (103,1^\circ) \qquad (2.4)$$<br>`*(Trong đó: $\widehat{H-O-H}$ và $\widehat{F-O-F}$ lần lượt là góc liên kết thực nghiệm trong phân tử $H_2O$ và $OF_2$, tính bằng độ $^\circ$).*` | Người dùng duyệt số liệu góc liên kết cặp $H_2O / OF_2$ minh họa Quy tắc Bent tại Gate B (`_state/decisions.md`). |
| 5 | `V-02.05` | Mục `2.4.5.2` (L212 → L215) | `[VERIFY: experimental bond angles NH3 107,3° vs NF3 102,5° (V-02.05)]` | `$$\widehat{H-N-H} \ (107,3^\circ) \ > \ \widehat{F-N-F} \ (102,5^\circ) \qquad (2.5)$$<br>`[VERIFY: experimental bond angles NH3 107,3° vs NF3 102,5° (V-02.05)]` | `$$\widehat{H-N-H} \ (107,3^\circ) \ > \ \widehat{F-N-F} \ (102,5^\circ) \qquad (2.5)$$<br>`*(Trong đó: $\widehat{H-N-H}$ và $\widehat{F-N-F}$ lần lượt là góc liên kết thực nghiệm trong phân tử $NH_3$ và $NF_3$, tính bằng độ $^\circ$).*` | Người dùng duyệt số liệu góc liên kết cặp $NH_3 / NF_3$ minh họa Quy tắc Bent tại Gate B (`_state/decisions.md`). |
| 6 | `V-02.03` | Mục `2.5.1` — `Example 2.1` (L263 → L266) | `[VERIFY: NH3 bond angle (V-02.03)]` | `...góc liên kết [VERIFY: NH3 bond angle (V-02.03)] $\widehat{H-N-H} \approx 107,3^\circ$.` | `...góc liên kết $\widehat{H-N-H} \approx 107,3^\circ$.` | Người dùng duyệt số liệu góc liên kết của $NH_3$ ($\approx 107,3^\circ$) tại Gate B (`_state/decisions.md`). |
| 7 | `V-02.03` | Mục `2.5.1` — `Example 2.1` (L269 → L272) | `[VERIFY: H2O bond angle (V-02.03)]` | `...góc liên kết [VERIFY: H2O bond angle (V-02.03)] $\widehat{H-O-H} \approx 104,5^\circ$.` | `...góc liên kết $\widehat{H-O-H} \approx 104,5^\circ$.` | Người dùng duyệt số liệu góc liên kết của $H_2O$ ($\approx 104,5^\circ$) tại Gate B (`_state/decisions.md`). |
| 8 | `V-02.04` | Mục `2.5.2` — `Example 2.2` (L299 → L302) | `[VERIFY: SF4 bond angles (V-02.04)]` | `...cụ thể góc [VERIFY: SF4 bond angles (V-02.04)] $\widehat{F_{\text{ax}}-S-F_{\text{eq}}} \approx 87^\circ$ (nhỏ hơn $90^\circ$) và góc $\widehat{F_{\text{eq}}-S-F_{\text{eq}}} \approx 102^\circ$ (nhỏ hơn $120^\circ$).` | `...cụ thể góc $\widehat{F_{\text{ax}}-S-F_{\text{eq}}} \approx 87^\circ$ (nhỏ hơn $90^\circ$) và góc $\widehat{F_{\text{eq}}-S-F_{\text{eq}}} \approx 102^\circ$ (nhỏ hơn $120^\circ$).` | Người dùng duyệt số liệu góc liên kết của $SF_4$ ($\approx 87^\circ, 102^\circ$) tại Gate B (`_state/decisions.md`). |
| 9 | `V-02.04` | Mục `2.5.2` — `Example 2.2` (L302 → L305) | `[VERIFY: ClF3 bond angle (V-02.04)]` | `...với góc liên kết $< 90^\circ$ (thực tế [VERIFY: ClF3 bond angle (V-02.04)] $\approx 87,5^\circ$).` | `...với góc liên kết $< 90^\circ$ (thực tế $\approx 87,5^\circ$).` | Người dùng duyệt số liệu góc liên kết của $ClF_3$ ($\approx 87,5^\circ$) tại Gate B (`_state/decisions.md`). |
| 10 | `V-02.07` | Mục `2.6.1` (L408 → L411) | `[VERIFY: angle contraction heuristic 2-2.5 degrees per lone pair (V-02.07)]` | `- **Quy tắc kinh nghiệm về độ co góc liên kết:** [VERIFY: angle contraction heuristic 2-2.5 degrees per lone pair (V-02.07)] Mỗi cặp electron tự do ($\text{LP}$) xuất hiện trên nguyên tử trung tâm sẽ "co" (làm thu hẹp) góc liên kết khoảng **$2\text{–}2,5^\circ$**.` | `- **Quy tắc kinh nghiệm về độ co góc liên kết:** Mỗi cặp electron tự do ($\text{LP}$) xuất hiện trên nguyên tử trung tâm sẽ "co" (làm thu hẹp) góc liên kết khoảng **$2\text{–}2,5^\circ$**.` | Người dùng duyệt quy tắc kinh nghiệm co góc $2\text{–}2,5^\circ/\text{LP}$ (kèm chú thích phạm vi khung $SN = 4$) tại Gate B (`_state/decisions.md`). |

---

## D. Danh sách các thẻ còn giữ lại trong bản REVIEW DRAFT (`ch02_std_review.md`)

Kết quả kiểm tra cơ học bằng script `check_tags.py` trên `05_final/ch02_std_review.md` (lưu tại `_state/checks/ch02_std_tags.md`):
- **`[VERIFY]` còn giữ lại:** `6` thẻ
- **`[ADDED]` còn giữ lại:** `35` thẻ
- **`[CONFLICT]`:** `0` thẻ
- **`[FIGURE]` còn giữ lại:** `3` khung giữ chỗ

### 1. Danh sách 6 thẻ `[VERIFY]` còn giữ lại (đồng bộ với `_state/verification_list_running.md`)

| STT | Mã `V-ID` | Dòng (`ch02_std_review.md`) | Mục | Thẻ `[VERIFY]` | Lý do giữ lại trong REVIEW DRAFT | Owner |
|---|---|---|---|---|---|---|
| 1 | `V-02.02` | L157 | `2.4.3.4` | `[VERIFY: classification of transition-metal complexes Fe(CN)6(4-) and PtCl4(2-) in VSEPR table (V-02.02)]` | Việc xếp hai phức chất chuyển tiếp $[Fe(CN)_6]^{4-}$ ($d^6$) và $[PtCl_4]^{2-}$ ($d^8$) trong Bảng 2.1 kèm hộp lưu ý giới hạn VSEPR cần giảng viên Hóa vô cơ xác nhận khi xuất bản Clean Release. | User / Chuyên gia |
| 2 | `V-02.06` | L201 | `2.4.5.1` | `[VERIFY: theoretical basis of Bent's rule (V-02.06)]` | Đoạn giải thích định tính khái niệm "đặc tính $p$ ($p$-character)" nối sang Chương 3 (Lai hóa orbital) cần giảng viên bộ môn xác nhận mức độ trình bày. | User / Giảng viên |
| 3 | `V-02.08` | L239 | `2.4.6.2` | `[VERIFY: pharmaceutical claim on spatial orientation of drugs/ligands binding to enzymes/receptors (V-02.08)]` | Nhận định khái quát về định hướng không gian của thuốc/phối tử khi gắn vào enzyme/thụ thể không kèm trích dẫn trong nguồn, chờ chuyên gia xác nhận. | User / Chuyên gia |
| 4 | `V-02.09a` | L596 | `2.8.1` | `[VERIFY: reference needed for Inorganic Pharmaceutical Chemistry textbook (V-02.09)]` | Giữ chỗ tài liệu tham khảo cho Giáo trình Hóa vô cơ Dược chính thức của Bộ môn (tuân thủ R4: không tự bịa trích dẫn khi chưa có tên sách/tác giả/năm). | User |
| 5 | `V-02.09b` | L597 | `2.8.1` | `[VERIFY: reference needed for VSEPR Theory (Gillespie-Nyholm), Steric Number Calculation, and Bent's Rule (V-02.09)]` | Giữ chỗ tài liệu tham khảo cho Giáo trình Hóa đại cương / Hóa vô cơ chuẩn về thuyết VSEPR và Quy tắc Bent (tuân thủ R4). | User |
| 6 | `V-02.09c` | L598 | `2.8.1` | `[VERIFY: reference needed for Experimental Bond Angles of Main-Group and Hypervalent Molecules (V-02.09)]` | Giữ chỗ tài liệu tham khảo cho Sổ tay dữ liệu hóa lý và cấu trúc phân tử chuẩn (tuân thủ R4). | User |

### 2. Danh sách 3 khung giữ chỗ `[FIGURE]` trong REVIEW DRAFT

| STT | Dòng (`ch02_std_review.md`) | Mục | Nhãn hình | Nội dung mô tả đồ họa (`[FIGURE: ...]`) | Trạng thái chế bản |
|---|---|---|---|---|---|
| 1 | L389 | `2.5.5` | **Hình 2.2** | `3D molecular geometry chart` — Bảng trực quan hóa 5 khung hình học cặp electron cơ bản ($SN = 2 \div 6$) và 13 dạng hình học phân tử dẫn xuất $AX_mE_n$. | Placeholder chờ thiết kế đồ họa 3D |
| 2 | L392 | `2.5.5` | **Hình 2.3** | `3D stereochemical diagram` — Sơ đồ đối chiếu vị trí trục ($\text{ax}, 90^\circ$) và xích đạo ($\text{eq}, 120^\circ$) trong khung $SN = 5$ cùng dãy $PCl_5 \to SF_4 \to ClF_3 \to XeF_2$. | Placeholder chờ thiết kế đồ họa 3D |
| 3 | L395 | `2.5.5` | **Hình 2.4** | `comparative bond-angle diagram` — Sơ đồ so sánh sự thu hẹp góc liên kết do tăng số cặp $\text{LP}$ ($CH_4 > NH_3 > H_2O$) và do độ âm điện phối tử theo Quy tắc Bent ($H_2O > OF_2$; $NH_3 > NF_3$). | Placeholder chờ thiết kế đồ họa 3D |

### 3. Danh sách 35 thẻ `[ADDED]` còn giữ lại trong REVIEW DRAFT

| STT | Dòng (`ch02_std_review.md`) | Mục | Nhãn thẻ `[ADDED: ...]` | Bản chất nội dung bổ sung sư phạm |
|---|---|---|---|---|
| 1 | L10 | `2.1.1` | `[ADDED: structural frame]` | Khung giới thiệu tổng quan và mạch logic Chương 2 |
| 2 | L16 | `2.1.2` | `[ADDED: study time estimate]` | Phạm vi kiến thức, kiến thức tiên quyết và thời lượng học tập dự kiến theo `STUDY_TIME_RULE` |
| 3 | L28 | `2.2.1` | `[ADDED: learning objectives]` | 4 Chuẩn đầu ra học tập (`LO-1` đến `LO-4`) |
| 4 | L40 | `2.3.1` | `[ADDED: pedagogical context]` | Đặt vấn đề đối chiếu cấu trúc phẳng Lewis với hình học 3D ($CO_2$ vs. $H_2O$) và nhận diện thuốc – đích |
| 5 | L54 | `2.4.1.1` | `[ADDED: concept definition]` | Định nghĩa khái niệm "miền electron (electron domain)" trong mô hình Gillespie–Nyholm |
| 6 | L63 | `2.4.1.2` | `[ADDED: bond angle consequence]` | Giải thích hệ quả hình học làm thu hẹp góc liên kết thực tế ($\theta$) khi có cặp $\text{LP}$ |
| 7 | L66 | `2.4.1.3` | `[ADDED: forward reference note]` | Tham chiếu định nghĩa đại lượng Số phối trí lập thể ($SN$) tới Mục `2.4.2` |
| 8 | L81 | `2.4.2.1` | `[ADDED: terminology clarification for sigma bond and ligand]` | Hộp `Important Note` giải thích định tính liên kết $\sigma$ (cầu nối sang Chương 3) và phân biệt thuật ngữ "phối tử" với Chương 6 |
| 9 | L86 | `2.4.2.2` | `[ADDED: standardized terminology]` | Chuẩn hóa thuật ngữ "Số phối trí lập thể (Steric Number – $SN$)" |
| 10 | L91 | `2.4.2.2` | `[ADDED: symbol disambiguation]` | Phân biệt điện tích đại số của ion ($q$) với điện tích phần ($q$) trong công thức momen lưỡng cực ở Chương 1 |
| 11 | L93 | `2.4.2.2` | `[ADDED: explicit equation for lone pairs]` | Thiết lập công thức tường minh $n = SN - m$ `(2.3)` để tính số cặp electron tự do |
| 12 | L98 | `2.4.2.3` | `[ADDED: method clarification]` | Giải thích cơ sở hệ số $M$ và quy tắc tính $SN$ cho $HCN, O_3, I_3^-$ |
| 13 | L118 | `2.4.3.1` | `[ADDED: Electron vs Molecular Geometry definition]` | Hộp `Definition` phân biệt rõ *Hình học cặp electron* và *Hình học phân tử* |
| 14 | L145 | `2.4.3.3` | `[ADDED: detailed analysis of SN=2,3,4 classes]` | Diễn giải chi tiết cơ chế hình thành các dạng hình học thuộc khung $SN = 2, 3, 4$ |
| 15 | L157 | `2.4.3.4` | `[ADDED: scope limitation note for transition-metal complexes]` | Hộp `Important Note` làm rõ giới hạn của VSEPR đối với phức chất $[Fe(CN)_6]^{4-}$ ($d^6$) và $[PtCl_4]^{2-}$ ($d^8$) |
| 16 | L171 | `2.4.4.1` | `[ADDED: 90-degree interaction count explanation]` | Phép đếm số tương tác đẩy góc $90^\circ$ (3 tương tác ở trục vs. 2 tương tác ở xích đạo) trong khung $SN = 5$ |
| 17 | L180 | `2.4.4.2` | `[ADDED: Diep hinh etymology]` | Giải thích thuật ngữ Hán-Việt "Điệp hình" (cánh bướm / cái bập bênh) của kiểu $AX_4E$ |
| 18 | L185 | `2.4.4.3` | `[ADDED: explanation of SN=6 symmetry and trans-LP placement]` | Giải thích tính đối xứng 6 đỉnh bát diện ($SN = 6$) và sự bố trí *trans* ($180^\circ$) của 2 cặp $\text{LP}$ trong $AX_4E_2$ |
| 19 | L201 | `2.4.5.1` | `[ADDED: cross-chapter bridge to Ch03 explaining p-character and bond angle narrowing]` | Giải thích định tính "đặc tính $p$" và cơ chế thu hẹp góc liên kết theo Quy tắc Bent |
| 20 | L224 | `2.4.6.1` | `[ADDED: integration of VSEPR geometry with Chapter 1 dipole vector sum]` | Quy tắc tổng quát phân loại 7 kiểu hình học đối xứng ($\mu_{pt} = 0$) và 6 kiểu bất đối xứng ($\mu_{pt} > 0$) |
| 21 | L239 | `2.4.6.2` | `[ADDED: cross-reference to Ch06 and Ch07]` | Liên kết chéo vai trò hình học phức chất kim loại sang Chương 6 và Chương 7 |
| 22 | L247 | `2.5.1` | `[ADDED: step-by-step SN calculation in standard worked-example format]` | Trình bày chuẩn 6 bước cho `Example 2.1` ($CH_4, NH_3, H_2O, SF_6$) |
| 23 | L289 | `2.5.2` | `[ADDED: step-by-step SN calculation and 90-degree interaction check in worked-example format]` | Trình bày chuẩn 6 bước cho `Example 2.2` ($PCl_5, SF_4, ClF_3, XeF_2$) |
| 24 | L318 | `2.5.3` | `[ADDED: worked example for polyatomic ions and multiple bonds]` | Ví dụ giải mẫu mới `Example 2.3` cho 4 ion đa nguyên tử ($CO_3^{2-}, NO_2^-, SO_4^{2-}, I_3^-$) |
| 25 | L360 | `2.5.4` | `[ADDED: Mermaid flowchart and standardized 4-step VSEPR procedure]` | Lưu đồ thuật toán Mermaid (**Hình 2.1**) và quy trình chuẩn 4 bước xác định hình học VSEPR |
| 26 | L386 | `2.5.5` | `[ADDED: figure placeholders for 3D molecular geometries and bond-angle distortions]` | Dẫn nhập và định nghĩa 3 khung giữ chỗ đồ họa 3D (**Hình 2.2, 2.3, 2.4**) |
| 27 | L411 | `2.6.1` | `[ADDED: scope clarification for angle contraction rule]` | Ghi chú phạm vi áp dụng quy tắc co góc $2\text{–}2,5^\circ/\text{LP}$ cho khung tứ diện $SN = 4$ |
| 28 | L412 | `2.6.1` | `[ADDED: SN=6 summary]` | Bổ sung tóm tắt quy tắc 2 cặp $\text{LP}$ đối diện $180^\circ$ khi $SN = 6, n = 2$ ($AX_4E_2$) |
| 29 | L415 | `2.6.2` | `[ADDED: summary formula table]` | Bảng tổng hợp công thức, quy tắc bất đẳng thức và mối quan hệ lập thể (**Bảng 2.2**) |
| 30 | L432 | `2.7` | `[ADDED: assessment section frame]` | Khung mục Đánh giá & Bài tập tự lượng giá |
| 31 | L435 | `2.7.1` | `[ADDED: knowledge and comprehension questions]` | 4 câu hỏi trắc nghiệm lý thuyết (`Câu 1`–`Câu 4`, đánh giá `LO-1`..`LO-3`) |
| 32 | L464 | `2.7.2` | `[ADDED: application exercises]` | 3 bài tập tự luận tính toán lập thể và phân loại độ phân cực (`Bài tập 5`–`Bài tập 7`, đánh giá `LO-2`..`LO-4`) |
| 33 | L484 | `2.7.3` | `[ADDED: analytical and advanced questions]` | 3 câu hỏi phân tích & vận dụng nâng cao (`Câu 8`–`Câu 10`, đánh giá `LO-3`, `LO-4`) |
| 34 | L504 | `2.7.4` | `[ADDED: step-by-step answer key]` | Đáp án và hướng dẫn giải chi tiết cho toàn bộ 10 câu hỏi và bài tập |
| 35 | L592 | `2.8.1` | `[ADDED: reference section structure]` | Khung mục Tài liệu tham khảo và ghi chú tuân thủ quy tắc R4 |

---

## E. Đề xuất chỉnh sửa nội dung (Recommended Content Changes)

- **Không có (`0` đề xuất).** Bản thảo `03_chapters/ch02_draft.md` đã đạt phán quyết **PASS** ngay ở Vòng 1 kiểm định độc lập S4 QA (`04_qa/ch02_qa_r1.md`, `Critical = 0`, `Major = 0`, `30/30` phép tính khớp tuyệt đối theo `_tools/check_calc_ch02.py`). Toàn bộ 3 góp ý hình thức cấp độ Minor (`ISS-02.01`, `ISS-02.02`, `ISS-02.03`) đã được xử lý triệt để trong bước chuẩn hóa S5A này.

---

## F. Chưa kiểm chứng / Giới hạn (Not Verified / Limitations — Rule R10 & R12)

1. **Tài liệu tham khảo bên ngoài (R4, R10, R12e):** Ba vị trí tài liệu tham khảo tại Mục `2.8.1` (`V-02.09a`, `V-02.09b`, `V-02.09c`) vẫn giữ nguyên thẻ `[VERIFY]` trong bản **REVIEW DRAFT** vì người dùng chưa cung cấp danh mục giáo trình cụ thể; Biên tập viên (`editor`) tuyệt đối không tự điền tên sách, tác giả, năm xuất bản hay DOI.
2. **Các ghi chú lý thuyết và nhận định liên ngành (`V-02.02`, `V-02.06`, `V-02.08`):** Giữ nguyên 3 thẻ `[VERIFY]` này trên bản **REVIEW DRAFT** để giảng viên bộ môn xác nhận lần cuối trước khi xuất bản bản **CLEAN RELEASE** ở giai đoạn tổng hợp học phần (S5B).
3. **Khung giữ chỗ đồ họa 3D (`[FIGURE]`):** Ba hình vẽ cấu trúc không gian 3 chiều (**Hình 2.2, Hình 2.3, Hình 2.4** tại Mục `2.5.5`) được giữ nguyên dưới dạng placeholder chuẩn `FIGURE_POLICY` để phục vụ chế bản đồ họa.
4. **Bảo toàn tệp gốc (`00_source_original/`):** Tệp nguồn gốc `00_source_original/ch02_doc-hvc-2.html` và bản thảo `03_chapters/ch02_draft.md` hoàn toàn không bị chỉnh sửa hay ghi đè (tuân thủ Rule 2.3).
