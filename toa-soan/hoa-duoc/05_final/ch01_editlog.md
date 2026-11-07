# Nhật ký Biên tập Chuẩn hóa (S5A Edit Log) · Chương 01

- **Chế độ xuất bản:** `Mode A — Per-chapter standardization (REVIEW DRAFT)`
- **Dự án:** Hóa vô cơ dược – Master Lecture Notes
- **Chương:** Chương 01 — Đại cương Liên kết Hóa học, Thuyết Lewis & Quy tắc Bát tử
- **Đầu vào:** `03_chapters/ch01_v2.md` (đã qua S4 QA Vòng 3 `04_qa/ch01_qa_r3.md` với phán quyết **PASS** và phê duyệt Gate B tại `_state/decisions.md`)
- **Đầu ra:**
  - `05_final/ch01_std_review.md`
  - `05_final/MLN_HoaVoCoDuoc_Ch01_v2.0_review.md`
- **Ngày thực hiện:** 2026-11-07
- **Người thực hiện:** Subagent `editor` (Stage S5A)

---

## A. Bảng ánh xạ `T-ID` → Số mục cuối (T-ID to Final Section Numbering)

Toàn bộ `30` mã `T-ID` trên tiêu đề của `03_chapters/ch01_v2.md` cùng các tiêu đề cấp 4 đã được thay thế bằng hệ thống đánh số phân cấp chính thức của Chương 1 (tối đa 4 cấp: `Chương 1` → `1.x` → `1.x.y` → `1.x.y.z`):

| STT | Mã `T-ID` (trong `ch01_v2.md`) | Tiêu đề trong `ch01_v2.md` | Số mục chính thức (trong `ch01_std_review.md`) | Cấp tiêu đề |
|---|---|---|---|---|
| 1 | *(Cấp Chương)* | `# Chương 1: Đại cương Liên kết Hóa học, Thuyết Lewis & Quy tắc Bát tử` | `# Chương 1: Đại cương Liên kết Hóa học, Thuyết Lewis & Quy tắc Bát tử` | Cấp 1 (`#`) |
| 2 | `T-01.1` | `## 1. Tổng quan chương (Chapter Overview) {T-01.1}` | `## 1.1 Tổng quan chương (Chapter Overview)` | Cấp 2 (`##`) |
| 3 | `T-01.1.1` | `### 1.1 Tên chương, giới thiệu & phạm vi kiến thức {T-01.1.1}` | `### 1.1.1 Tên chương, giới thiệu & phạm vi kiến thức` | Cấp 3 (`###`) |
| 4 | `T-01.1.2` | `### 1.2 Kiến thức tiên quyết & Thời lượng học tập dự kiến {T-01.1.2}` | `### 1.1.2 Kiến thức tiên quyết & Thời lượng học tập dự kiến` | Cấp 3 (`###`) |
| 5 | `T-01.2` | `## 2. Mục tiêu học tập (Learning Objectives) {T-01.2}` | `## 1.2 Mục tiêu học tập (Learning Objectives)` | Cấp 2 (`##`) |
| 6 | `T-01.2.1` | `### 2.1 Chuẩn đầu ra về Kiến thức, Kỹ năng và Năng lực vận dụng {T-01.2.1}` | `### 1.2.1 Chuẩn đầu ra về Kiến thức, Kỹ năng và Năng lực vận dụng` | Cấp 3 (`###`) |
| 7 | `T-01.3` | `## 3. Đặt vấn đề & Ý nghĩa thực tiễn (Introduction) {T-01.3}` | `## 1.3 Đặt vấn đề & Ý nghĩa thực tiễn (Introduction)` | Cấp 2 (`##`) |
| 8 | `T-01.3.1` | `### 3.1 Vai trò của liên kết hóa học trong thiết kế và tác dụng của dược chất {T-01.3.1}` | `### 1.3.1 Vai trò của liên kết hóa học trong thiết kế và tác dụng của dược chất` | Cấp 3 (`###`) |
| 9 | `T-01.4` | `## 4. Nội dung bài giảng chính (Main Content) {T-01.4}` | `## 1.4 Nội dung bài giảng chính (Main Content)` | Cấp 2 (`##`) |
| 10 | `T-01.4.1` | `### 4.1 Các đại lượng đặc trưng của liên kết hóa học {T-01.4.1}` | `### 1.4.1 Các đại lượng đặc trưng của liên kết hóa học` | Cấp 3 (`###`) |
| — | *(Sub-topic của `T-01.4.1`)* | `#### 4.1.1` / `4.1.2` / `4.1.3` | `#### 1.4.1.1` / `1.4.1.2` / `1.4.1.3` | Cấp 4 (`####`) |
| 11 | `T-01.4.2` | `### 4.2 Góc liên kết, Momen lưỡng cực & Độ phân cực phân tử {T-01.4.2}` | `### 1.4.2 Góc liên kết, Momen lưỡng cực & Độ phân cực phân tử` | Cấp 3 (`###`) |
| — | *(Sub-topic của `T-01.4.2`)* | `#### 4.2.1` / `4.2.2` / `4.2.3` | `#### 1.4.2.1` / `1.4.2.2` / `1.4.2.3` | Cấp 4 (`####`) |
| 12 | `T-01.4.3` | `### 4.3 Bản chất liên kết & Hiệu độ âm điện Pauling {T-01.4.3}` | `### 1.4.3 Bản chất liên kết & Hiệu độ âm điện Pauling` | Cấp 3 (`###`) |
| 13 | `T-01.4.4` | `### 4.4 Thuyết Lewis & Điện tích hình thức (Formal Charge) {T-01.4.4}` | `### 1.4.4 Thuyết Lewis & Điện tích hình thức (Formal Charge)` | Cấp 3 (`###`) |
| — | *(Sub-topic của `T-01.4.4`)* | `#### 4.4.1` / `4.4.2` / `4.4.3` | `#### 1.4.4.1` / `1.4.4.2` / `1.4.4.3` | Cấp 4 (`####`) |
| 14 | `T-01.4.5` | `### 4.5 Cấu trúc cộng hưởng (Resonance Structures) {T-01.4.5}` | `### 1.4.5 Cấu trúc cộng hưởng (Resonance Structures)` | Cấp 3 (`###`) |
| — | *(Sub-topic của `T-01.4.5`)* | `#### 4.5.1` / `4.5.2` | `#### 1.4.5.1` / `1.4.5.2` | Cấp 4 (`####`) |
| 15 | `T-01.4.6` | `### 4.6 Các ngoại lệ của Quy tắc Bát tử {T-01.4.6}` | `### 1.4.6 Các ngoại lệ của Quy tắc Bát tử` | Cấp 3 (`###`) |
| — | *(Sub-topic của `T-01.4.6`)* | `#### 4.6.1` / `4.6.2` / `4.6.3` | `#### 1.4.6.1` / `1.4.6.2` / `1.4.6.3` | Cấp 4 (`####`) |
| 16 | `T-01.4.7` | `### 4.7 Ý nghĩa và ứng dụng trong Dược học {T-01.4.7}` | `### 1.4.7 Ý nghĩa và ứng dụng trong Dược học` | Cấp 3 (`###`) |
| — | *(Sub-topic của `T-01.4.7`)* | `#### 4.7.1` / `4.7.2` | `#### 1.4.7.1` / `1.4.7.2` | Cấp 4 (`####`) |
| 17 | `T-01.5` | `## 5. Ví dụ minh họa & Quy trình thực hành (Examples & Illustrations) {T-01.5}` | `## 1.5 Ví dụ minh họa & Quy trình thực hành (Examples & Illustrations)` | Cấp 2 (`##`) |
| 18 | `T-01.5.1` | `### 5.1 Ví dụ tính toán chi tiết: Xác định điện tích hình thức của $CO_2$ và $NO_3^-$ {T-01.5.1}` | `### 1.5.1 Ví dụ tính toán chi tiết: Xác định điện tích hình thức của $CO_2$ và $NO_3^-$` | Cấp 3 (`###`) |
| 19 | `T-01.5.2` | `### 5.2 Các ví dụ minh họa ngoại lệ bát tử trong thực tế {T-01.5.2}` | `### 1.5.2 Các ví dụ minh họa ngoại lệ bát tử trong thực tế` | Cấp 3 (`###`) |
| 20 | `T-01.5.3` | `### 5.3 Quy trình chuẩn 4 bước thiết lập công thức Lewis tối ưu {T-01.5.3}` | `### 1.5.3 Quy trình chuẩn 4 bước thiết lập công thức Lewis tối ưu` | Cấp 3 (`###`) |
| 21 | `T-01.5.4` | `### 5.4 Sơ đồ hệ thống hóa các dạng liên kết hóa học {T-01.5.4}` | `### 1.5.4 Sơ đồ hệ thống hóa các dạng liên kết hóa học` | Cấp 3 (`###`) |
| 22 | `T-01.6` | `## 6. Tóm tắt chương (Chapter Summary) {T-01.6}` | `## 1.6 Tóm tắt chương (Chapter Summary)` | Cấp 2 (`##`) |
| 23 | `T-01.6.1` | `### 6.1 Bảng đối chiếu các đại lượng đặc trưng và 3 nhóm ngoại lệ {T-01.6.1}` | `### 1.6.1 Bảng đối chiếu các đại lượng đặc trưng và 3 nhóm ngoại lệ` | Cấp 3 (`###`) |
| 24 | `T-01.6.2` | `### 6.2 Hệ thống công thức, đơn vị và quy tắc then chốt {T-01.6.2}` | `### 1.6.2 Hệ thống công thức, đơn vị và quy tắc then chốt` | Cấp 3 (`###`) |
| 25 | `T-01.7` | `## 7. Đánh giá & Bài tập tự lượng giá (Review & Assessment) {T-01.7}` | `## 1.7 Đánh giá & Bài tập tự lượng giá (Review & Assessment)` | Cấp 2 (`##`) |
| 26 | `T-01.7.1` | `### 7.1 Câu hỏi nhận biết và thông hiểu (LO-1, LO-2) {T-01.7.1}` | `### 1.7.1 Câu hỏi nhận biết và thông hiểu (LO-1, LO-2)` | Cấp 3 (`###`) |
| 27 | `T-01.7.2` | `### 7.2 Bài tập áp dụng tính toán điện tích hình thức & độ phân cực (LO-3) {T-01.7.2}` | `### 1.7.2 Bài tập áp dụng tính toán điện tích hình thức & độ phân cực (LO-3)` | Cấp 3 (`###`) |
| 28 | `T-01.7.3` | `### 7.3 Câu hỏi phân tích, ngoại lệ và liên hệ dược lý học (LO-4) {T-01.7.3}` | `### 1.7.3 Câu hỏi phân tích, ngoại lệ và liên hệ dược lý học (LO-4)` | Cấp 3 (`###`) |
| 29 | `T-01.7.4` | `### 7.4 Hướng dẫn giải chi tiết và biểu điểm đánh giá {T-01.7.4}` | `### 1.7.4 Hướng dẫn giải chi tiết và biểu điểm đánh giá` | Cấp 3 (`###`) |
| — | *(Sub-topic của `T-01.7.4`)* | `#### Đáp án phần trắc nghiệm` / `#### Lời giải chi tiết phần bài tập` | `#### 1.7.4.1 Đáp án phần trắc nghiệm` / `#### 1.7.4.2 Lời giải chi tiết phần bài tập` | Cấp 4 (`####`) |
| 30 | `T-01.8` / `T-01.8.1` | `## 8. Tài liệu tham khảo (References) {T-01.8}` / `### 8.1 Danh mục tài liệu tham khảo & Ghi chú học thuật {T-01.8.1}` | `## 1.8 Tài liệu tham khảo (References)` / `### 1.8.1 Danh mục tài liệu tham khảo & Ghi chú học thuật` | Cấp 2 & Cấp 3 |

---

## B. Bảng nhật ký chỉnh sửa chuẩn hóa & phi-typographic (Standardization & Non-Typographic Edit Log)

Tuân thủ Mục 7.6 của quy tắc tòa soạn (`toa-soan_rules.md`), mọi chỉnh sửa chuẩn hóa định dạng, ký hiệu, đánh số công thức/bảng/hình/hộp được ghi nhận chi tiết dưới đây (tuyệt đối không làm thay đổi ý nghĩa học thuật, con số, công thức hay đáp án):

| Edit ID | Vị trí (`ch01_v2.md` → `ch01_std_review.md`) | Nội dung trước chỉnh sửa (`Before`) | Nội dung sau chỉnh sửa (`After`) | Lý do chỉnh sửa (`Reason`) |
|---|---|---|---|---|
| `ED-01` | Đầu file (L1) | *(Chưa có nhãn chế độ xuất bản)* | `> **Mode A — Per-chapter standardization (REVIEW DRAFT)**` | Tuân thủ Mục 7.6: ghi rõ chế độ chuẩn hóa ở đầu tài liệu xuất bản. |
| `ED-02` | Toàn bộ tiêu đề mục & tham chiếu nội bộ tại Mục 1.1.2 (L16 → L18) | Các tiêu đề đánh số `1.`–`8.` kèm nhãn `{T-01.x.y}`; câu dẫn L16 ghi: `...giải quyết bài tập định lượng tại Mục 7).` | Đánh số chuẩn `1.1` đến `1.8` (tối đa 4 cấp `1.x.y.z`), gỡ `{T-01.x.y}`; cập nhật tham chiếu thành `...giải quyết bài tập định lượng tại Mục 1.7).` | Chuẩn hóa hệ thống đánh số chương `N.1`, `N.1.1`, `N.1.1.1` và đồng bộ tham chiếu chéo theo Mục 7.6. |
| `ED-03` | Mục 1.4.1.3 (L63–65 → L64–73) | 2 bất đẳng thức hiển thị $E_{lk}(C \equiv C)...$ và $r(C - C)...$ chưa đánh số công thức và chưa tách dòng giải thích ký hiệu bên dưới. | Đánh số `\qquad (1.1)` và `\qquad (1.2)` kèm danh sách giải thích ký hiệu `Trong đó:` cho $E_{lk}(C \equiv C), E_{lk}(C = C), E_{lk}(C - C)$ và $r(C - C), r(C = C), r(C \equiv C)$. | Tuân thủ Mục 7.6: đánh số mọi công thức hiển thị `(N.k)` kèm danh sách giải thích biến. |
| `ED-04` | Mục 1.4.2.2 (L78 → L84–87) & Mục 1.6.2 (L289 → L313–314) | `$$\vec{\mu} = q \cdot \vec{d}$$` (thiếu chỉ số dưới `lk` so với lời dẫn $\vec{\mu}_{lk}$ và chưa đánh số). | `$$\vec{\mu}_{lk} = q \cdot \vec{d} \qquad (1.3)$$` và bổ sung dòng giải thích biến `- $\vec{\mu}_{lk}$: Vector momen lưỡng cực liên kết ($\text{C}\cdot\text{m}$ hoặc $\text{D}$).` | Giải quyết góp ý `ISS-R3-02` (đồng bộ ký hiệu $\vec{\mu}_{lk}$ với lời dẫn) và đánh số công thức `(1.3)` theo Mục 7.6. |
| `ED-05` | Mục 1.4.2.3 (L87 → L93–96) & Mục 1.6.2 (L291 → L316–317) | `$$\vec{\mu}_{pt} = \sum \vec{\mu}_i$$` (chưa đánh số công thức và chưa tách danh sách biến ngay dưới công thức). | `$$\vec{\mu}_{pt} = \sum \vec{\mu}_i \qquad (1.4)$$` kèm danh sách biến `Trong đó:` giải thích $\vec{\mu}_{pt}$ và $\vec{\mu}_i$. | Tuân thủ Mục 7.6: đánh số công thức `(1.4)` và liệt kê danh sách biến ngay sau công thức. |
| `ED-06` | Mục 1.4.3 (L99–105 → L109–117) | Bảng phân loại liên kết theo $\Delta\chi$ chưa có nhãn số và tiêu đề bảng. | Thêm tham chiếu trong câu dẫn (`...như trình bày trong **Bảng 1.1**:`) và đặt tiêu đề `**Bảng 1.1.** Phân loại bản chất liên kết hóa học dựa theo hiệu độ âm điện Pauling ($\Delta\chi$).` | Giải quyết góp ý `ISS-R3-01` và tuân thủ Mục 7.6 (đánh số, đặt tiêu đề và tham chiếu mọi bảng). |
| `ED-07` | Mục 1.4.3 (L107–108 → L119) | Dùng cú pháp GitHub alert hai dòng:<br>`> [!NOTE]`<br>`> [ADDED: pedagogical note] ...` | Chuẩn hóa thành hộp blockquote + nhãn đậm:<br>`> **Important Note.** [ADDED: pedagogical note] ...` | Giải quyết góp ý `ISS-R3-01` và tuân thủ quy chuẩn hộp Mục 7.6 (`> **Important Note.**`). |
| `ED-08` | Mục 1.4.4.2 (L121 → L132–134) & Mục 1.4.4.3 (L131 → L143–146) & Mục 1.6.2 (L293–295 → L319–323) | Công thức $FC = V - N - \frac{B}{2}$ và $\sum FC = q_{phân\ tử}$ chưa đánh số. | Đánh số `\qquad (1.5)` cho $FC = V - N - \frac{B}{2}$ và `\qquad (1.6)` cho $\sum FC = q_{phân\ tử}$ kèm giải thích biến đầy đủ. | Tuân thủ Mục 7.6: đánh số công thức `(1.5)`, `(1.6)` và đảm bảo danh sách biến đi kèm. |
| `ED-09` | Mục 1.5.1 (L197–216 → L211–233) | Hai ví dụ tính $FC$ trình bày dưới dạng tiêu đề cấp 4 rời (`#### Ví dụ 1:...`, `#### Ví dụ 2:...`). | Thêm câu dẫn tham chiếu (`...được minh họa chi tiết trong **Example 1.1** và **Example 1.2**:`) và đóng khung blockquote chuẩn `> **Example 1.1.**` và `> **Example 1.2.**`. | Tuân thủ quy chuẩn định dạng hộp ví dụ `> **Example N.k.**` của Mục 7.6. |
| `ED-10` | Mục 1.5.3 (L229–237 → L245–256) & Mục 1.5.4 (L248–266 → L267–288) | 2 sơ đồ Mermaid chưa có nhãn đánh số `Hình 1.k` và câu dẫn tham chiếu trực tiếp. | Bổ sung tham chiếu trong văn bản (`**Hình 1.1**`, `**Hình 1.2**`) và đặt tiêu đề `**Hình 1.1.** Lưu đồ quy trình 4 bước thiết lập công thức Lewis tối ưu.`, `**Hình 1.2.** Sơ đồ hệ thống hóa các dạng liên kết hóa học...` | Giải quyết góp ý `ISS-R3-01` và tuân thủ Mục 7.6 (đánh số, đặt tiêu đề và tham chiếu mọi hình). |
| `ED-11` | Mục 1.6.1 (L273–284 → L294–308) | Bảng tóm tắt chương chưa có câu dẫn tham chiếu và nhãn `Bảng 1.2`. | Bổ sung câu dẫn tham chiếu (`...được tổng hợp đối chiếu trong **Bảng 1.2**:`) và tiêu đề `**Bảng 1.2.** Bảng tổng hợp đối chiếu các đại lượng đặc trưng của liên kết hóa học, thuyết Lewis và 3 nhóm ngoại lệ bát tử.` | Giải quyết góp ý `ISS-R3-01` và tuân thủ Mục 7.6. |

---

## C. Bảng các thẻ `[VERIFY]` đã gỡ theo phê duyệt Gate B của người dùng (User-Approved Tag Resolutions)

Theo quyết định phê duyệt chính thức của người dùng tại Cổng B (ghi nhận trong `_state/decisions.md` ngày `2026-11-07`: *"Chắc là đúng hết đấy. Thôi làm tiếp đi. duyệt hết"* đối với bảng 6 số liệu thực nghiệm/hằng số/phép đếm `V-01` đến `V-06`), đúng **6 thẻ `[VERIFY]`** sau đây đã được gỡ bỏ:

| Mã `V-ID` | Vị trí (`ch01_v2.md` → `ch01_std_review.md`) | Thẻ đã gỡ | Đoạn văn trước khi gỡ (`ch01_v2.md`) | Đoạn văn sau khi gỡ (`ch01_std_review.md`) | Căn cứ phê duyệt |
|---|---|---|---|---|---|
| `V-01` | Mục `1.4.1.3` (L62 → L63) | `[VERIFY: handbook value]` | `- [VERIFY: handbook value] Về năng lượng liên kết:` | `- Về năng lượng liên kết:` | Người dùng duyệt xác nhận bộ số liệu năng lượng liên kết Carbon ($839 > 614 > 348\text{ kJ/mol}$) tại Gate B (`_state/decisions.md`). |
| `V-02` | Mục `1.4.1.3` (L64 → L68) | `[VERIFY: bond length data]` | `- [VERIFY: bond length data] Về độ dài liên kết:` | `- Về độ dài liên kết:` | Người dùng duyệt xác nhận bộ số liệu độ dài liên kết Carbon ($154 > 134 > 120\text{ pm}$) tại Gate B (`_state/decisions.md`). |
| `V-03` | Mục `1.4.2.2` (L83 → L90) | `[VERIFY: SI constant]` | `...với [VERIFY: SI constant] $1\text{ D} = 3,336 \times 10^{-30}\text{ C}\cdot\text{m}$.` | `...với $1\text{ D} = 3,336 \times 10^{-30}\text{ C}\cdot\text{m}$.` | Người dùng duyệt xác nhận hằng số quy đổi đơn vị Debye sang SI tại Gate B (`_state/decisions.md`). |
| `V-04` | Mục `1.4.3` (L108 → L119) | `[VERIFY: Pauling scale convention]` | `> [ADDED: pedagogical note] [VERIFY: Pauling scale convention] Ranh giới $\Delta\chi = 0,4$ và $1,7$ là quy ước thực nghiệm tương đối.` | `> **Important Note.** [ADDED: pedagogical note] Ranh giới $\Delta\chi = 0,4$ và $1,7$ là quy ước thực nghiệm tương đối.` | Người dùng duyệt xác nhận quy ước ngưỡng độ âm điện Pauling ($\Delta\chi = 0,4$ và $1,7$) tại Gate B (`_state/decisions.md`). |
| `V-05` | Mục `1.4.5.2` (L145 → L160) | `[VERIFY: crystallographic data]` | `- [VERIFY: crystallographic data] Độ dài liên kết thực nghiệm: $r(C-O) = 128\text{ pm } (1,28\text{ Å})$.` | `- Độ dài liên kết thực nghiệm: $r(C-O) = 128\text{ pm } (1,28\text{ Å})$.` | Người dùng duyệt xác nhận số liệu độ dài liên kết thực nghiệm trong $CO_3^{2-}$ tại Gate B (`_state/decisions.md`). |
| `V-06` | Mục `1.4.6.2` (L164 → L179) | `[VERIFY: valence calculation]` | `- *Ví dụ:* [VERIFY: valence calculation] $NO$ (11 electron), $NO_2$ (17 electron), $ClO_2$ (19 electron).` | `- *Ví dụ:* $NO$ (11 electron), $NO_2$ (17 electron), $ClO_2$ (19 electron).` | Người dùng duyệt xác nhận phép đếm electron hóa trị lẻ của $NO, NO_2, ClO_2$ tại Gate B (`_state/decisions.md`). |

---

## D. Danh sách các thẻ còn giữ lại trong bản REVIEW DRAFT (`ch01_std_review.md`)

Kết quả kiểm tra cơ học bằng script `check_tags.py` trên `05_final/ch01_std_review.md` (`_state/checks/ch01_std_tags.md`):
- **`[VERIFY]` còn giữ lại:** `7` thẻ
- **`[ADDED]` còn giữ lại:** `38` thẻ
- **`[CONFLICT]`:** `0` thẻ
- **`[FIGURE]`:** `0` thẻ

### 1. Danh sách 7 thẻ `[VERIFY]` còn giữ lại (đồng bộ với `_state/verification_list_running.md`)

| STT | Mã `V-ID` | Dòng (`ch01_std_review.md`) | Mục | Thẻ `[VERIFY]` | Lý do giữ lại trong REVIEW DRAFT | Owner |
|---|---|---|---|---|---|---|
| 1 | `V-09` | L175 | `1.4.6.1` | `[VERIFY: Lewis acidity comparison]` | Khẳng định định tính "$BeCl_2, BF_3, AlCl_3$ là những Acid Lewis rất mạnh" cần giảng viên xác nhận mức độ diễn đạt. | User / Giảng viên |
| 2 | `V-08` | L183 | `1.4.6.3` | `[VERIFY: modern bonding models]` | Giải thích bát tử mở rộng bằng "phân lớp $d$ trống ($3d, 4d$)" theo mô hình cổ điển trong nguồn, chờ chuyên gia xác nhận mức trình bày. | User / Chuyên gia |
| 3 | `V-10` | L187 | `1.4.6.3` | `[VERIFY: formalism]` | Cấu trúc $H_2SO_4$ có 12 electron quanh S phụ thuộc quy ước công thức cộng hưởng được chọn. | User / Chuyên gia |
| 4 | `V-07` | L202 | `1.4.7.2` | `[VERIFY: pharmacology reference needed]` | Cơ chế dược lý của $NO$ hoạt hóa enzym Guanylyl Cyclase gây giãn mạch cần bổ sung tài liệu tham khảo chuẩn (tuân thủ R4 & DOMAIN_RULES). | User / Chuyên gia |
| 5 | `V-11a` | L432 | `1.8.1` | `[VERIFY: reference needed for Inorganic Pharmaceutical Chemistry textbook]` | Giữ chỗ tài liệu tham khảo cho Giáo trình Hóa vô cơ Dược chuẩn (tuân thủ R4: không tự bịa trích dẫn khi chưa có tên sách/tác giả/năm). | User |
| 6 | `V-11b` | L433 | `1.8.1` | `[VERIFY: reference needed for Chemical Bonding, Lewis Theory, Formal Charge, and Octet Exceptions]` | Giữ chỗ tài liệu tham khảo cho Giáo trình Hóa đại cương / Hóa vô cơ chuẩn (tuân thủ R4). | User |
| 7 | `V-11c` | L434 | `1.8.1` | `[VERIFY: reference needed for biological signaling of Nitric Oxide and Guanylyl Cyclase activation]` | Giữ chỗ tài liệu tham khảo cho Giáo trình Dược lý / Sinh lý học về tín hiệu $NO$ (tuân thủ R4). | User |

### 2. Danh sách 38 thẻ `[ADDED]` còn giữ lại trong REVIEW DRAFT

| STT | Dòng (`ch01_std_review.md`) | Mục | Nhãn thẻ `[ADDED: ...]` | Bản chất nội dung bổ sung sư phạm |
|---|---|---|---|---|
| 1 | L10 | `1.1.1` | `[ADDED: structural frame]` | Khung giới thiệu tổng quan và phạm vi kiến thức Chương 1 |
| 2 | L16 | `1.1.2` | `[ADDED: study rule estimate]` | Kiến thức tiên quyết và thời lượng học tập dự kiến theo `STUDY_TIME_RULE` |
| 3 | L25 | `1.2.1` | `[ADDED: learning objectives]` | 4 Chuẩn đầu ra học tập (`LO-1` đến `LO-4`) |
| 4 | L37 | `1.3.1` | `[ADDED: pedagogical context]` | Đặt vấn đề về vai trò liên kết hóa học đối với dược chất |
| 5 | L53 | `1.4.1.1` | `[ADDED: thermodynamics definition]` | Quy ước dấu dương ($E_{lk} > 0$) và ý nghĩa độ bền nhiệt động |
| 6 | L57 | `1.4.1.2` | `[ADDED: electrostatic potential & SI conversion]` | Giải thích cực tiểu thế năng tĩnh điện và hệ số $1\text{ Å} = 100\text{ pm} = 10^{-10}\text{ m}$ |
| 7 | L59 | `1.4.1.2` | `[ADDED: bond order concept]` | Định nghĩa bậc liên kết và giải thích cơ chế tĩnh điện co ngắn độ dài liên kết |
| 8 | L80 | `1.4.2.1` | `[ADDED: pharmacology context]` | Đơn vị góc liên kết ($^\circ$) và ý nghĩa khớp nối không gian (*steric fit*) |
| 9 | L85 | `1.4.2.2` | `[ADDED: formula definition]` | Giải thích đại lượng $q$, $\vec{d}$ trong công thức momen lưỡng cực |
| 10 | L101 | `1.4.2.3` | `[ADDED: geometric shapes]` | Minh họa dạng hình học đối xứng của $CO_2, CCl_4, BF_3, SF_6$ |
| 11 | L103 | `1.4.2.3` | `[ADDED: geometric shapes]` | Minh họa dạng hình học bất đối xứng của $H_2O, NH_3, CHCl_3$ |
| 12 | L109 | `1.4.3` | `[ADDED: definition]` | Định nghĩa khái niệm độ âm điện ($\chi$) |
| 13 | L115 | `1.4.3` (Bảng 1.1) | `[ADDED: explanation]` | Giải thích sự phân bố đồng đều cặp electron dùng chung khi $\Delta\chi < 0,4$ |
| 14 | L116 | `1.4.3` (Bảng 1.1) | `[ADDED: explanation]` | Giải thích sự lệch cặp electron về nguyên tử âm điện hơn khi $0,4 \le \Delta\chi < 1,7$ |
| 15 | L119 | `1.4.3` (Important Note) | `[ADDED: pedagogical note]` | Lưu ý sư phạm về tính tương đối của ranh giới $\Delta\chi = 0,4$ và $1,7$ |
| 16 | L126 | `1.4.4.1` | `[ADDED: historical context]` | Ngữ cảnh mô hình liên kết cộng hóa trị của Gilbert N. Lewis |
| 17 | L129 | `1.4.4.2` | `[ADDED: definition]` | Định nghĩa khái niệm Điện tích hình thức ($FC$) |
| 18 | L147 | `1.4.4.3` | `[ADDED: operational rule]` | Quy tắc thực hành cực tiểu hóa tổng $\sum \|FC\|$ |
| 19 | L156 | `1.4.5.1` | `[ADDED: theory clarification]` | Làm rõ bản chất cộng hưởng (không phải sự chuyển đổi qua lại giữa các đồng phân) |
| 20 | L162 | `1.4.5.2` | `[ADDED: charge delocalization]` | Giải thích điện tích trung bình $-2/3$ trên mỗi nguyên tử Oxy của $CO_3^{2-}$ |
| 21 | L163 | `1.4.5.2` | `[ADDED: bond order explanation]` | Giải thích bậc liên kết $1\frac{1}{3}$ của 3 liên kết $N-O$ trong $NO_3^-$ |
| 22 | L164 | `1.4.5.2` | `[ADDED: benzene & sulfate explanation]` | Giải thích 6 liên kết $C-C$ tương đương (bậc $1,5$) trong $C_6H_6$ |
| 23 | L175 | `1.4.6.1` | `[ADDED: Lewis acid definition]` | Định nghĩa Acid Lewis (chất có orbital trống nhận cặp electron) |
| 24 | L178 | `1.4.6.2` | `[ADDED: free radical concept]` | Giải thích sự hình thành electron độc thân khi tổng số electron hóa trị lẻ |
| 25 | L180 | `1.4.6.2` | `[ADDED: paramagnetism definition]` | Định nghĩa tính thuận từ (bị hút vào từ trường ngoài do có electron độc thân) |
| 26 | L183 | `1.4.6.3` | `[ADDED: period 2 vs period 3 comparison]` | Đối chiếu nguyên tố chu kỳ 2 (không có phân lớp $2d$) với chu kỳ 3 |
| 27 | L197 | `1.4.7.1` | `[ADDED: pharmacokinetic concept]` | Liên hệ momen lưỡng cực với tính ưa nước (*hydrophilic*) và ưa lipid (*lipophilic*) |
| 28 | L210 | `1.5.1` | `[ADDED: worked example structure]` | Khung trình bày chuẩn 6 bước (`Given | Find | Approach | Solution | Check | Interpretation`) cho Example 1.1 & 1.2 |
| 29 | L247 | `1.5.3` | `[ADDED: Mermaid flowchart for 4-step procedure]` | Lưu đồ Mermaid (`Hình 1.1`) cho quy trình 4 bước viết công thức Lewis |
| 30 | L266 | `1.5.4` | `[ADDED: diagram]` | Sơ đồ Mermaid (`Hình 1.2`) hệ thống hóa liên kết hóa học và 3 ngoại lệ bát tử |
| 31 | L294 | `1.6.1` | `[ADDED: summary]` | Bảng tổng hợp đối chiếu toàn chương (`Bảng 1.2`) |
| 32 | L311 | `1.6.2` | `[ADDED: formula sheet]` | Hệ thống hóa 4 công thức và quy tắc định lượng trọng tâm |
| 33 | L329 | `1.7` | `[ADDED: assessment questions]` | Khung mục Đánh giá & Bài tập tự lượng giá |
| 34 | L332 | `1.7.1` | `[ADDED: knowledge and comprehension questions]` | 4 câu hỏi trắc nghiệm khách quan (`Câu 1`–`Câu 4`, đánh giá `LO-1`, `LO-2`) |
| 35 | L361 | `1.7.2` | `[ADDED: application exercises]` | 2 bài tập tự luận áp dụng (`Bài tập 5`–`Bài tập 6`, đánh giá `LO-3`) |
| 36 | L375 | `1.7.3` | `[ADDED: analytical questions]` | 2 câu hỏi phân tích & vận dụng nâng cao (`Câu 7`–`Câu 8`, đánh giá `LO-4`) |
| 37 | L388 | `1.7.4` | `[ADDED: answer key]` | Đáp án chi tiết và hướng dẫn giải từng bước cho toàn bộ 8 câu hỏi/bài tập |
| 38 | L428 | `1.8.1` | `[ADDED: reference section frame]` | Khung mục Tài liệu tham khảo và ghi chú tuân thủ quy tắc R4 |

---

## E. Đề xuất chỉnh sửa nội dung (Recommended Content Changes)

- **Không có (`0` đề xuất).** Bản thảo `03_chapters/ch01_v2.md` đã đạt phán quyết **PASS** tuyệt đối (`Critical = 0`, `Major = 0`) tại vòng kiểm định độc lập S4 QA Vòng 3 (`04_qa/ch01_qa_r3.md`). Toàn bộ 3 góp ý hình thức cấp độ Minor (`ISS-R3-01`, `ISS-R3-02`, `ISS-R3-03`) đã được xử lý triệt để trong bước chuẩn hóa S5A này.

---

## F. Chưa kiểm chứng / Giới hạn (Not Verified / Limitations — Rule R10 & R12)

1. **Tài liệu tham khảo bên ngoài (R4, R10, R12e):** Ba vị trí tài liệu tham khảo tại Mục `1.8.1` (`V-11a`, `V-11b`, `V-11c`) và trích dẫn dược lý của $NO$ tại Mục `1.4.7.2` (`V-07`) vẫn giữ nguyên thẻ `[VERIFY]` trong bản **REVIEW DRAFT** vì người dùng chưa cung cấp danh mục giáo trình cụ thể; Biên tập viên (`editor`) tuyệt đối không tự điền tên sách, tác giả hay năm xuất bản.
2. **Các mô hình lý thuyết hóa học chuyên sâu (`V-08`, `V-09`, `V-10`):** Giữ nguyên thẻ `[VERIFY]` trên bản **REVIEW DRAFT** để giảng viên bộ môn quyết định khi xuất bản bản **CLEAN RELEASE** ở giai đoạn tổng hợp học phần (S5B).
3. **Bảo toàn tệp gốc (`00_source_original/`):** Tệp nguồn gốc `00_source_original/ch01_doc-hvc-1.html` và bản thảo `03_chapters/ch01_v2.md` hoàn toàn không bị chỉnh sửa hay ghi đè (tuân thủ Rule 2.3).
