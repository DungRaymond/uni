# Nhật ký Biên tập Chuẩn hóa (S5A Edit Log) · Chương 03

- **Chế độ xuất bản:** `Mode A — Per-chapter standardization (REVIEW DRAFT)`
- **Dự án:** Hóa vô cơ dược – Master Lecture Notes
- **Chương:** Chương 03 — Thuyết Liên kết Hóa trị (VB), Lai hóa Orbital & Cấu trúc Phức chất
- **Đầu vào:** `03_chapters/ch03_draft.md` (đã qua S4 QA Vòng 1 `04_qa/ch03_qa_r1.md` với phán quyết **PASS**, `Critical = 0`, `Major = 0`, `Minor = 5`; phê duyệt Gate B tại `_state/decisions.md` ngày `2026-11-07`, lệnh người dùng nguyên văn: *"Duyệt Gate B Ch03"*)
- **Đầu ra:**
  - `05_final/ch03_std_review.md`
  - `05_final/MLN_HoaVoCoDuoc_Ch03_v2.0_review.md` (bản sao byte-identical)
- **Ngày thực hiện:** 2026-11-07
- **Người thực hiện:** Subagent `editor` (Stage S5A)

---

## A. Bảng ánh xạ `T-ID` → Số mục cuối (T-ID to Final Section Numbering)

Toàn bộ `30` mã `T-ID` trên tiêu đề của `03_chapters/ch03_draft.md` cùng các tiêu đề cấp 4 (vốn không gắn `T-ID`) đã được thay thế bằng hệ thống đánh số phân cấp chính thức của Chương 3 (tối đa 4 cấp: `Chương 3` → `3.x` → `3.x.y` → `3.x.y.z`):

| STT | Mã `T-ID` (trong `ch03_draft.md`) | Tiêu đề trong `ch03_draft.md` | Số mục chính thức (trong `ch03_std_review.md`) | Cấp tiêu đề |
|---|---|---|---|---|
| 1 | `T-03.1` | `## 1. Tổng quan chương (Chapter Overview)` | `## 3.1 Tổng quan chương (Chapter Overview)` | Cấp 2 (`##`) |
| 2 | `T-03.1.1` | `### 1.1 Giới thiệu khái quát & Phạm vi nội dung` | `### 3.1.1 Giới thiệu khái quát & Phạm vi nội dung` | Cấp 3 (`###`) |
| 3 | `T-03.1.2` | `### 1.2 Kiến thức tiên quyết & Thời lượng học tập dự kiến` | `### 3.1.2 Kiến thức tiên quyết & Thời lượng học tập dự kiến` | Cấp 3 (`###`) |
| 4 | `T-03.2` | `## 2. Mục tiêu học tập (Learning Objectives)` | `## 3.2 Mục tiêu học tập (Learning Objectives)` | Cấp 2 (`##`) |
| 5 | `T-03.2.1` | `### 2.1 Chuẩn đầu ra về Kiến thức, Kỹ năng và Năng lực vận dụng` | `### 3.2.1 Chuẩn đầu ra về Kiến thức, Kỹ năng và Năng lực vận dụng` | Cấp 3 (`###`) |
| 6 | `T-03.3` | `## 3. Đặt vấn đề & Ý nghĩa thực tiễn (Introduction)` | `## 3.3 Đặt vấn đề & Ý nghĩa thực tiễn (Introduction)` | Cấp 2 (`##`) |
| 7 | `T-03.3.1` | `### 3.1 Từ hình học không gian VSEPR đến cơ chế xen phủ orbital nguyên tử (AO)` | `### 3.3.1 Từ hình học không gian VSEPR đến cơ chế xen phủ orbital nguyên tử (AO)` | Cấp 3 (`###`) |
| 8 | `T-03.4` | `## 4. Nội dung bài giảng chính (Main Content)` | `## 3.4 Nội dung bài giảng chính (Main Content)` | Cấp 2 (`##`) |
| 9 | `T-03.4.1` | `### 4.1 Luận điểm cơ bản của Thuyết Liên kết Hóa trị (Heitler – London – Pauling)` | `### 3.4.1 Luận điểm cơ bản của Thuyết Liên kết Hóa trị (Heitler – London – Pauling)` | Cấp 3 (`###`) |
| — | *(Sub-topic của `T-03.4.1`)* | `#### 4.1.1` / `4.1.2` / `4.1.3` | `#### 3.4.1.1` / `3.4.1.2` / `3.4.1.3` | Cấp 4 (`####`) |
| 10 | `T-03.4.2` | `### 4.2 Phân loại kiểu xen phủ tạo liên kết ($\sigma, \pi, \delta$), Mặt phẳng nút & Độ bền` | `### 3.4.2 Phân loại kiểu xen phủ tạo liên kết ($\sigma, \pi, \delta$), Mặt phẳng nút & Độ bền` | Cấp 3 (`###`) |
| — | *(Sub-topic của `T-03.4.2`)* | `#### 4.2.1` / `4.2.2` / `4.2.3` / `4.2.4` | `#### 3.4.2.1` / `3.4.2.2` / `3.4.2.3` / `3.4.2.4` | Cấp 4 (`####`) |
| 11 | `T-03.4.3` | `### 4.3 Cơ sở Thuyết Lai hóa Orbital (Orbital Hybridization), Đặc tính $s/p$ & Liên hệ với $SN$` | `### 3.4.3 Cơ sở Thuyết Lai hóa Orbital (Orbital Hybridization), Đặc tính $s/p$ & Liên hệ với $SN$` | Cấp 3 (`###`) |
| — | *(Sub-topic của `T-03.4.3`)* | `#### 4.3.1` / `4.3.2` / `4.3.3` | `#### 3.4.3.1` / `3.4.3.2` / `3.4.3.3` | Cấp 4 (`####`) |
| 12 | `T-03.4.4` | `### 4.4 Hệ thống các kiểu lai hóa $sp, sp^2, sp^3$ và lai hóa mở rộng $sp^3d, sp^3d^2$` | `### 3.4.4 Hệ thống các kiểu lai hóa $sp, sp^2, sp^3$ và lai hóa mở rộng $sp^3d, sp^3d^2$` | Cấp 3 (`###`) |
| — | *(Sub-topic của `T-03.4.4`)* | `#### 4.4.1` / `4.4.2` / `4.4.3` | `#### 3.4.4.1` / `3.4.4.2` / `3.4.4.3` | Cấp 4 (`####`) |
| 13 | `T-03.4.5` | `### 4.5 Lai hóa phân lớp $d$ trong phức chất ($dsp^2, sp^3d^2, d^2sp^3$) & Thuốc chống ung thư Cisplatin` | `### 3.4.5 Lai hóa phân lớp $d$ trong phức chất ($dsp^2, sp^3d^2, d^2sp^3$) & Thuốc chống ung thư Cisplatin` | Cấp 3 (`###`) |
| — | *(Sub-topic của `T-03.4.5`)* | `#### 4.5.1` / `4.5.2` | `#### 3.4.5.1` / `3.4.5.2` | Cấp 4 (`####`) |
| 14 | `T-03.4.6` | `### 4.6 Đánh giá ưu điểm, hạn chế chí mạng của Thuyết VB & Bước chuyển sang Thuyết MO` | `### 3.4.6 Đánh giá ưu điểm, hạn chế chí mạng của Thuyết VB & Bước chuyển sang Thuyết MO` | Cấp 3 (`###`) |
| — | *(Sub-topic của `T-03.4.6`)* | `#### 4.6.1` / `4.6.2` | `#### 3.4.6.1` / `3.4.6.2` | Cấp 4 (`####`) |
| 15 | `T-03.5` | `## 5. Ví dụ minh họa & Quy trình thực hành (Examples & Illustrations)` | `## 3.5 Ví dụ minh họa & Quy trình thực hành (Examples & Illustrations)` | Cấp 2 (`##`) |
| 16 | `T-03.5.1` | `### 5.1 Ví dụ 3.1: Phân tích trạng thái lai hóa ($sp^3, sp^2, sp$), đếm liên kết $\sigma/\pi$ và xét đồng phân hình học ($CH_4, C_2H_4, C_2H_2$)` | `### 3.5.1 Ví dụ 3.1: Phân tích trạng thái lai hóa ($sp^3, sp^2, sp$), đếm liên kết $\sigma/\pi$ và xét đồng phân hình học ($CH_4, C_2H_4, C_2H_2$)` | Cấp 3 (`###`) |
| 17 | `T-03.5.2` | `### 5.2 Ví dụ 3.2: Giải thích sự co góc liên kết trên nền lai hóa $sp^3$ ($NH_3, H_2O$), đối chiếu $NH_4^+$ & Hệ quả độ tan dược học` | `### 3.5.2 Ví dụ 3.2: Giải thích sự co góc liên kết trên nền lai hóa $sp^3$ ($NH_3, H_2O$), đối chiếu $NH_4^+$ & Hệ quả độ tan dược học` | Cấp 3 (`###`) |
| 18 | `T-03.5.3` | `### 5.3 Ví dụ 3.3: Biện luận sơ đồ ô lượng tử phức chất bát diện ngoài ($[FeF_6]^{3-}$), bát diện trong ($[Fe(CN)_6]^{3-}$) và vuông phẳng ($[Ni(CN)_4]^{2-}$, Cisplatin)` | `### 3.5.3 Ví dụ 3.3: Biện luận sơ đồ ô lượng tử phức chất bát diện ngoài ($[FeF_6]^{3-}$), bát diện trong ($[Fe(CN)_6]^{3-}$) và vuông phẳng ($[Ni(CN)_4]^{2-}$, Cisplatin)` | Cấp 3 (`###`) |
| 19 | `T-03.5.4` | `### 5.4 Quy trình chuẩn 4 bước & Sơ đồ thuật toán xác định trạng thái lai hóa orbital (Mermaid)` | `### 3.5.4 Quy trình chuẩn 4 bước & Sơ đồ thuật toán xác định trạng thái lai hóa orbital (Mermaid)` | Cấp 3 (`###`) |
| 20 | `T-03.5.5` | `### 5.5 Minh họa trực quan sự xen phủ orbital ($\sigma, \pi, \delta$), định hướng AO lai hóa & liên kết $3c\text{–}2e$` | `### 3.5.5 Minh họa trực quan sự xen phủ orbital ($\sigma, \pi, \delta$), định hướng AO lai hóa & liên kết $3c\text{–}2e$` | Cấp 3 (`###`) |
| 21 | `T-03.6` | `## 6. Tóm tắt chương (Chapter Summary)` | `## 3.6 Tóm tắt chương (Chapter Summary)` | Cấp 2 (`##`) |
| 22 | `T-03.6.1` | `### 6.1 Tóm tắt nội dung trọng tâm & Quy tắc ghi nhớ nhanh` | `### 3.6.1 Tóm tắt nội dung trọng tâm & Quy tắc ghi nhớ nhanh` | Cấp 3 (`###`) |
| 23 | `T-03.6.2` | `### 6.2 Bảng tổng hợp công thức, quy tắc nhận diện và mối quan hệ khái niệm` | `### 3.6.2 Bảng tổng hợp công thức, quy tắc nhận diện và mối quan hệ khái niệm` | Cấp 3 (`###`) |
| 24 | `T-03.7` | `## 7. Đánh giá & Bài tập tự lượng giá (Review & Assessment)` | `## 3.7 Đánh giá & Bài tập tự lượng giá (Review & Assessment)` | Cấp 2 (`##`) |
| 25 | `T-03.7.1` | `### 7.1 Câu hỏi lý thuyết: Nhận biết & Thông hiểu (LO-1, LO-2)` | `### 3.7.1 Câu hỏi lý thuyết: Nhận biết & Thông hiểu (LO-1, LO-2)` | Cấp 3 (`###`) |
| 26 | `T-03.7.2` | `### 7.2 Bài tập áp dụng: Xác định lai hóa, đếm liên kết $\sigma/\pi$ & phân tích sơ đồ ô lượng tử (LO-2, LO-3)` | `### 3.7.2 Bài tập áp dụng: Xác định lai hóa, đếm liên kết $\sigma/\pi$ & phân tích sơ đồ ô lượng tử (LO-2, LO-3)` | Cấp 3 (`###`) |
| 27 | `T-03.7.3` | `### 7.3 Câu hỏi phân tích & Vận dụng nâng cao trong Hóa vô cơ dược (LO-3, LO-4)` | `### 3.7.3 Câu hỏi phân tích & Vận dụng nâng cao trong Hóa vô cơ dược (LO-3, LO-4)` | Cấp 3 (`###`) |
| 28 | `T-03.7.4` | `### 7.4 Đáp án & Hướng dẫn giải chi tiết (Answer Key)` | `### 3.7.4 Đáp án & Hướng dẫn giải chi tiết (Answer Key)` | Cấp 3 (`###`) |
| 29 | `T-03.8` | `## 8. Tài liệu tham khảo (References)` | `## 3.8 Tài liệu tham khảo (References)` | Cấp 2 (`##`) |
| 30 | `T-03.8.1` | `### 8.1 Danh mục tài liệu tham khảo & Đọc thêm` | `### 3.8.1 Danh mục tài liệu tham khảo & Đọc thêm` | Cấp 3 (`###`) |

---

## B. Bảng nhật ký chỉnh sửa chuẩn hóa & phi-typographic (Standardization & Non-Typographic Edit Log)

Tuân thủ Mục 7.6 của quy tắc tòa soạn, mọi chỉnh sửa chuẩn hóa định dạng, ký hiệu, tham chiếu chéo và xử lý 5 góp ý cấp độ Minor từ báo cáo QA (`QA-03.01`–`QA-03.05`) được ghi nhận chi tiết dưới đây. **Tuyệt đối không làm thay đổi ý nghĩa học thuật, con số, công thức, đơn vị hay đáp án.**

### B.1. Chuẩn hóa định dạng & cấu trúc

| Edit ID | Vị trí (`ch03_draft.md` → `ch03_std_review.md`) | Nội dung trước chỉnh sửa (`Before`) | Nội dung sau chỉnh sửa (`After`) | Lý do chỉnh sửa (`Reason`) |
|---|---|---|---|---|
| `ED-03.01` | Đầu file (L1) | *(Chưa có nhãn chế độ xuất bản)* | `> **Mode A — Per-chapter standardization (REVIEW DRAFT)**` | Tuân thủ Mục 7.6: ghi rõ chế độ chuẩn hóa ở đầu tài liệu xuất bản. |
| `ED-03.02` | Toàn bộ 30 tiêu đề mục (L5–L616) | Các tiêu đề đánh số `1.`–`8.` kèm nhãn `{T-03.x.y}`; các tiêu đề cấp 4 đánh số `4.x.y` không nhãn. | Đánh số chuẩn `3.1`–`3.8`, `3.x.y`, `3.x.y.z` (tối đa 4 cấp); gỡ toàn bộ `{T-03.x.y}` (xem bảng A). | Chuẩn hóa hệ thống đánh số chương `N.1`, `N.1.1`, `N.1.1.1` theo Mục 7.6. |
| `ED-03.03` | 12 vị trí tham chiếu chéo: L17, L18, L80, L97, L111, L124, L148, L178, L198, L212, L237, L403 (→ L19, L20, L82, L99, L113, L127, L151, L183, L205, L221, L249, L419) | Tham chiếu nội bộ ghi `Mục 4.3–4.4`, `Mục 4.4.2`, `Mục 4:`; tham chiếu Chương 1 ghi `Mục 4.1`, `Mục 4.3`, `Mục 4.4`, `Mục 4.5`, `Mục 4.6`; tham chiếu Chương 2 ghi `Mục 4.2`–`Mục 4.5`. | Tham chiếu nội bộ thành `Mục 3.4.3–3.4.4`, `Mục 3.4.4.2`, `Mục 3.4:`; tham chiếu Chương 1 thành `Mục 1.4.1`, `Mục 1.4.3`, `Mục 1.4.4`, `Mục 1.4.5`, `Mục 1.4.6`; tham chiếu Chương 2 thành `Mục 2.4.2`–`Mục 2.4.5`, `Mục 2.4.3`, `Mục 2.4.4`. | Đồng bộ toàn bộ tham chiếu chéo với hệ số mục chuẩn hóa của Chương 1, Chương 2 và Chương 3 (Mục 7.6). |
| `ED-03.04` | 12 công thức hiển thị: L118, L161, L172, L191, L196, L201, L210, L214, L242, L255, L261, L290 (→ L120, L164, L176, L196, L202, L208, L218, L223, L254, L268, L275, L305) | Các công thức quan trọng chưa có số hiệu `(N.k)`; một số công thức thiếu dòng giải thích biến/đơn vị ngay bên dưới. | Gắn số hiệu `(3.1)`–`(3.12)`; bổ sung ngay bên dưới mỗi công thức một dòng `*(Trong đó: ...)*` giải thích ký hiệu và đơn vị. | Tuân thủ Mục 7.6: mọi công thức hiển thị đánh số `(N.k)` đều có dòng giải thích ký hiệu/đơn vị ngay bên dưới. |
| `ED-03.05` | Các hộp ghi chú: L83, L91, L138, L217, L266, L294, L437 (→ L85, L93, L141, L227, L281, L310, L453) | Nhãn hộp không chuẩn: `> **Ý nghĩa cốt lõi:**` (3 vị trí), `> **Quy ước hệ trục tọa độ chuẩn trong Hóa học lượng tử:**`, `> **Ghi chú học thuật hiện đại (Cầu nối sang Chương 4 – Thuyết MO):**`, `> **Ý nghĩa và định hướng chuyển tiếp sang Chương 4:**`, `> **Quy tắc ghi nhớ nhanh (Cách nhớ trạng thái lai hóa từ số vùng mật độ electron):**`. | Chuẩn hóa thành blockquote + nhãn chuẩn: `> **Key Concept.**` (5 vị trí), `> **Definition.**` (1 vị trí), `> **Important Note.**` (1 vị trí), giữ nguyên nội dung và tiêu đề gốc sau nhãn khi cần. | Tuân thủ Mục 7.6: thống nhất 4 nhãn hộp chuẩn `Definition`, `Key Concept`, `Important Note`, `Example N.k`. |
| `ED-03.06` | Mục `3.4.4.3` — trước tiêu đề `Bảng 3.2` (L221 → L231–233) | `**Bảng 3.2.** Tổng hợp các kiểu lai hóa orbital...` đứng trực tiếp, không có câu dẫn tham chiếu trong văn bản chính. | Bổ sung câu dẫn: *"Toàn bộ bảy kiểu lai hóa orbital — từ các kiểu của nguyên tố nhóm chính ($SN = 2$ đến $SN = 6$) đến các kiểu của phức chất kim loại chuyển tiếp ($dsp^2, sp^3d^2, d^2sp^3$) — được hệ thống hóa trong **Bảng 3.2** dưới đây:"* | Tuân thủ Mục 7.6: mọi bảng đều được tham chiếu trực tiếp trong văn bản chính. |
| `ED-03.07` | Mục `3.5.5` (L403 → L419) | *"...bốn sơ đồ minh họa chuẩn dưới đây cần được đối chiếu song song khi đọc nội dung lý thuyết tại Mục 4:"* | *"...bốn sơ đồ minh họa chuẩn (**Hình 3.2**, **Hình 3.3**, **Hình 3.4** và **Hình 3.5**) dưới đây cần được đối chiếu song song khi đọc nội dung lý thuyết tại Mục 3.4:"* | Tuân thủ Mục 7.6: mọi hình đều được tham chiếu trực tiếp (gọi tên số hiệu) trong văn bản chính. |

### B.2. Sửa lỗi typography theo báo cáo QA (QA-03.01 – QA-03.03)

| Edit ID | Vị trí (`ch03_draft.md` → `ch03_std_review.md`) | Nội dung trước chỉnh sửa (`Before`) | Nội dung sau chỉnh sửa (`After`) | Lý do chỉnh sửa (`Reason`) |
|---|---|---|---|---|
| `ED-03.08` | 12 vị trí: L66, L81, L107, L162, L173, L205, L207, L213, L215, L217, L221, L237 | `nguyên소` (lẫn ký tự Hangul) | `nguyên tố` | Giải quyết `QA-03.01`: sửa toàn bộ ký tự tiếng Hàn bị lẫn trong từ `nguyên tố`. |
| `ED-03.09` | Mục `3.7.3` — Câu 8 (L515 → L532) | `ion плаtin(II)` (chuỗi Cyrillic) | `ion platin(II)` | Giải quyết `QA-03.02`: sửa chuỗi ký tự Cyrillic thành từ Latin chuẩn. |
| `ED-03.10` | Mục `3.5.1` — `Example 3.1` (L306 → L322) | `tạo liên kết $\pi$.Mọi liên kết đơn...` | `tạo liên kết $\pi$. Mọi liên kết đơn...` | Giải quyết `QA-03.03`: thêm 1 khoảng trắng sau dấu chấm câu. |

> **Ghi chú `QA-03.04`:** Bản thảo ghi `Khoảng **3,0 giờ**` tại Mục `3.1.2` là **chính xác** theo dung lượng thực tế (4.240 từ). Không có chỉnh sửa nào được thực hiện đối với con số này. Xem đề xuất đồng bộ nhật ký tại Mục **E**.
>
> **Ghi chú `QA-03.05`:** 4 khung giữ chỗ `[FIGURE: 3.2]`–`[FIGURE: 3.5]` tại Mục `3.5.5` được **giữ nguyên 100%** đúng chuẩn `FIGURE_POLICY`. Danh mục chi tiết xem Mục **D.2**.

---

## C. Bảng các thẻ `[VERIFY]` đã gỡ theo phê duyệt Gate B của người dùng (User-Approved Tag Resolutions)

Theo quyết định phê duyệt chính thức của người dùng tại Cổng B (`_state/decisions.md` ngày `2026-11-07`, dòng 65–71: duyệt Gate B Chương 3 và duyệt gỡ **6 nhóm** `V-03.01`–`V-03.06`, giữ nguyên `V-03.07a/b/c`), đúng **22 thẻ `[VERIFY]`** tương ứng đã được gỡ bỏ khỏi `05_final/ch03_std_review.md`.

> **Đối soát số lượng thẻ (bắt buộc ghi nhận):** Bản thảo `ch03_draft.md` có tổng cộng **25 thẻ `[VERIFY]`**. Con số `25` trong `_state/decisions.md` là tổng số thẻ của cả 7 hạng mục kiểm chứng, bao gồm **3 thẻ tài liệu tham khảo `V-03.07a/b/c` được giữ lại**. Do đó, số thẻ thực tế thuộc 6 nhóm `V-03.01`–`V-03.06` được gỡ trong S5A là **22** (không phải 25). Việc đối soát này **không mâu thuẫn** với phạm vi phê duyệt Gate B (gỡ `V-03.01`–`V-03.06`, giữ `V-03.07`).

| STT | Mã `V-ID` | Vị trí (`ch03_draft.md` → `ch03_std_review.md`) | Mục chuẩn hóa | Thẻ `[VERIFY]` đã gỡ | Đoạn văn trước khi gỡ (rút gọn) | Đoạn văn sau khi gỡ (rút gọn) | Căn cứ phê duyệt |
|---|---|---|---|---|---|---|---|
| 1 | `V-03.04` | L112 → L113 | `3.4.2.2` | `[VERIFY: cis-trans condition in substituted alkenes (V-03.04)]` | `...resolving I-03.08] [VERIFY: ... (V-03.04)]`.` | `...resolving I-03.08]`.` | Gate B duyệt `V-03.04` (`_state/decisions.md`). |
| 2 | `V-03.01` | L120 → L123 | `3.4.2.3` | `[VERIFY: Re2Cl8(2-) quadruple bond 5d orbital assignment (V-03.01)]` | `...specific 5d orbital assignment in Re2Cl8(2-)] [VERIFY: ... (V-03.01)]`.` | `...specific 5d orbital assignment in Re2Cl8(2-)]`.` | Gate B duyệt `V-03.01` (`_state/decisions.md`). |
| 3 | `V-03.05` | L193 → L199 | `3.4.4.1` | `[VERIFY: bond angle 180° for sp (V-03.05)]` | `...sigma/pi bonding analysis for examples] [VERIFY: ... (V-03.05)]`.` | `...sigma/pi bonding analysis for examples]`.` | Gate B duyệt `V-03.05` (`_state/decisions.md`). |
| 4 | `V-03.05` | L198 → L205 | `3.4.4.1` | `[VERIFY: bond angle 120° for sp2 (V-03.05)]` | `...resonance in CO3(2-) and SO3 from Chapter 1] [VERIFY: ... (V-03.05)]`.` | `...resonance in CO3(2-) and SO3 from Chapter 1]`.` | Gate B duyệt `V-03.05` (`_state/decisions.md`). |
| 5 | `V-03.05` | L203 → L211 | `3.4.4.1` | `[VERIFY: bond angle 109°28' / 109,5° for sp3 (V-03.05)]` | `...angle standardization 109°28' and 109,5° per I-03.12] [VERIFY: ... (V-03.05)]`.` | `...angle standardization 109°28' and 109,5° per I-03.12]`.` | Gate B duyệt `V-03.05` (`_state/decisions.md`). |
| 6 | `V-03.02` | L244 → L257 | `3.4.5.1` | `[VERIFY: dsp2 hybridization in d8 complexes Ni(CN)4(2-) and Cisplatin (V-03.02)]` | `...3d8/4d8/5d8 configuration details] [VERIFY: ... (V-03.02)]`.` | `...3d8/4d8/5d8 configuration details]`.` | Gate B duyệt `V-03.02` (`_state/decisions.md`). |
| 7 | `V-03.02` | L247 → L260 | `3.4.5.1` | `[VERIFY: Cisplatin dsp2 square-planar structure (V-03.02)]` | `...strictly within source facts and DOMAIN_RULES] [VERIFY: ... (V-03.02)]`.` | `...strictly within source facts and DOMAIN_RULES]`.` | Gate B duyệt `V-03.02` (`_state/decisions.md`). |
| 8 | `V-03.03` | L258 → L272 | `3.4.5.2` | `[VERIFY: FeF6(3-) sp3d2 high-spin state with 5 unpaired electrons (V-03.03)]` | `...outer nd orbitals resolving I-03.11] [VERIFY: ... (V-03.03)]`.` | `...outer nd orbitals resolving I-03.11]`.` | Gate B duyệt `V-03.03` (`_state/decisions.md`). |
| 9 | `V-03.03` | L264 → L279 | `3.4.5.2` | `[VERIFY: Fe(CN)6(3-) d2sp3 low-spin state with 1 unpaired electron (V-03.03)]` | `...linking to Fe(CN)6(4-) from Ch02] [VERIFY: ... (V-03.03)]`.` | `...linking to Fe(CN)6(4-) from Ch02]`.` | Gate B duyệt `V-03.03` (`_state/decisions.md`). |
| 10 | `V-03.06` | L283 → L298 | `3.4.6.2` | `[VERIFY: liquid O2 paramagnetism with 2 unpaired electrons (V-03.06)]` | `...preview of MO pi* explanation in Chapter 4] [VERIFY: ... (V-03.06)]`.` | `...preview of MO pi* explanation in Chapter 4]`.` | Gate B duyệt `V-03.06` (`_state/decisions.md`). |
| 11 | `V-03.06` | L292 → L308 | `3.4.6.2` | `[VERIFY: B2H6 12 valence electrons and 3c-2e bridge bonds (V-03.06)]` | `...banana bond in B2H6 resolving I-03.11] [VERIFY: ... (V-03.06)]`.` | `...banana bond in B2H6 resolving I-03.11]`.` | Gate B duyệt `V-03.06` (`_state/decisions.md`). |
| 12 | `V-03.04` | L311 → L327 | `3.5.1` | `[VERIFY: cis-trans condition in substituted alkenes (V-03.04)]` | `...in substituted alkenes] [VERIFY: ... (V-03.04)]` | `...in substituted alkenes]` | Gate B duyệt `V-03.04` (`_state/decisions.md`). |
| 13 | `V-03.05` | L321 → L337 | `3.5.2` | `[VERIFY: experimental bond angles 104,5° and 107,3° (V-03.05)]` | `...$104,5^\circ$ ($H_2O$). [VERIFY: ... (V-03.05)]` | `...$104,5^\circ$ ($H_2O$).` | Gate B duyệt `V-03.05` (`_state/decisions.md`). |
| 14 | `V-03.02`, `V-03.03` | L338 → L354 | `3.5.3` | `[VERIFY: d-orbital hybridization schemes and magnetic electron counts for [FeF6]3-, [Fe(CN)6]3-, [Ni(CN)4]2-, and Cisplatin (V-03.02, V-03.03)]` | `...hybridization from S-03.3] [VERIFY: ... (V-03.02, V-03.03)]` | `...hybridization from S-03.3]` | Gate B duyệt `V-03.02`, `V-03.03` (`_state/decisions.md`). |
| 15 | `V-03.02` | L516 → L532 | `3.7.3` | `[VERIFY: Cisplatin dsp2 square planar hybridization and diamagnetism (V-03.02)]` | `...và có tính nghịch từ [VERIFY: ... (V-03.02)].` | `...và có tính nghịch từ.` | Gate B duyệt `V-03.02` (`_state/decisions.md`). |
| 16 | `V-03.01` | L521 → L538 | `3.7.3` | `[VERIFY: Re2Cl8 2- quadruple bond 5d orbital overlap (V-03.01)]` | `...tổ hợp $1\sigma + 2\pi + 1\delta$ [VERIFY: ... (V-03.01)]?` | `...tổ hợp $1\sigma + 2\pi + 1\delta$?` | Gate B duyệt `V-03.01` (`_state/decisions.md`). |
| 17 | `V-03.06` | L524 → L541 | `3.7.3` | `[VERIFY: O2 paramagnetism and B2H6 3c-2e bond VB limitations (V-03.06)]` | `...thuyết Orbital Phân tử (MO) ở Chương 4 [VERIFY: ... (V-03.06)].` | `...thuyết Orbital Phân tử (MO) ở Chương 4.` | Gate B duyệt `V-03.06` (`_state/decisions.md`). |
| 18 | `V-03.05` | L552 → L569 | `3.7.4` | `[VERIFY: experimental bond angles (V-03.05)]` | `...bộ orbital lai hóa chuẩn [VERIFY: ... (V-03.05)].` | `...bộ orbital lai hóa chuẩn.` | Gate B duyệt `V-03.05` (`_state/decisions.md`). |
| 19 | `V-03.03` | L578 → L595 | `3.7.4` | `[VERIFY: FeF6 3- sp3d2 high-spin vs Fe(CN)6 3- d2sp3 low-spin (V-03.03)]` | `...và trạng thái lai hóa** [VERIFY: ... (V-03.03)]:` | `...và trạng thái lai hóa**:` | Gate B duyệt `V-03.03` (`_state/decisions.md`). |
| 20 | `V-03.02` | L591 → L608 | `3.7.4` | `[VERIFY: Cisplatin dsp2 square planar hybridization and diamagnetism (V-03.02)]` | `...phức chất có tính **nghịch từ** [VERIFY: ... (V-03.02)].` | `...phức chất có tính **nghịch từ**.` | Gate B duyệt `V-03.02` (`_state/decisions.md`). |
| 21 | `V-03.01` | L598 → L615 | `3.7.4` | `[VERIFY: Re2Cl8 2- quadruple bond 5d orbital overlap (V-03.01)]` | `...dọc theo trục $Oz$ [VERIFY: ... (V-03.01)]:` | `...dọc theo trục $Oz$:` | Gate B duyệt `V-03.01` (`_state/decisions.md`). |
| 22 | `V-03.06` | L607 → L624 | `3.7.4` | `[VERIFY: O2 paramagnetism and B2H6 3c-2e bond VB limitations (V-03.06)]` | `...đi kèm 2 electron độc thân [VERIFY: ... (V-03.06)].` | `...đi kèm 2 electron độc thân.` | Gate B duyệt `V-03.06` (`_state/decisions.md`). |

---

## D. Danh sách các thẻ còn giữ lại trong bản REVIEW DRAFT (`ch03_std_review.md`)

Kết quả kiểm tra cơ học bằng script `check_tags.py` trên `05_final/ch03_std_review.md` (lưu tại `_state/checks/ch03_std_tags.md`):
- **`[VERIFY]` còn giữ lại:** `3` thẻ
- **`[ADDED]` còn giữ lại:** `149` thẻ
- **`[CONFLICT]`:** `0` thẻ
- **`[FIGURE]` còn giữ lại:** `4` khung giữ chỗ

### 1. Danh sách 3 thẻ `[VERIFY]` còn giữ lại (đồng bộ với `_state/verification_list_running.md`)

| STT | Mã `V-ID` | Dòng (`ch03_std_review.md`) | Mục | Thẻ `[VERIFY]` | Lý do giữ lại trong REVIEW DRAFT | Owner |
|---|---|---|---|---|---|---|
| 1 | `V-03.07a` | L637 | `3.8.1` | `[VERIFY: reference needed for Inorganic Pharmaceutical Chemistry university textbook covering Valence Bond Theory, orbital hybridization, and pharmaceutical inorganic applications (V-03.07)]` | Giữ chỗ tài liệu tham khảo cho Giáo trình Hóa vô cơ Dược chính thức (tuân thủ R4: không tự bịa trích dẫn khi chưa có tên sách/tác giả/năm). | User / Giảng viên |
| 2 | `V-03.07b` | L638 | `3.8.1` | `[VERIFY: reference needed for general and inorganic chemistry reference book on Valence Bond Theory, sigma/pi/delta orbital overlap, nodal planes, and s/p character percentages (V-03.07)]` | Giữ chỗ tài liệu tham khảo chuyên khảo về Thuyết VB và xen phủ orbital (tuân thủ R4). | User / Giảng viên |
| 3 | `V-03.07c` | L639 | `3.8.1` | `[VERIFY: reference needed for coordination chemistry and bioinorganic medicinal chemistry textbook covering Cisplatin dsp2 square planar geometry, high-spin/low-spin Fe(III) complexes, Re2Cl8 2- quadruple bond, and B2H6 3c-2e bonding (V-03.07)]` | Giữ chỗ tài liệu tham khảo chuyên khảo về Hóa học Phối trí và Cisplatin (tuân thủ R4). | User / Giảng viên |

### 2. Danh sách 4 khung giữ chỗ `[FIGURE]` trong REVIEW DRAFT

| STT | Dòng (`ch03_std_review.md`) | Mục | Nhãn hình | Nội dung mô tả đồ họa (`[FIGURE: ...]`) | Trạng thái chế bản |
|---|---|---|---|---|---|
| 1 | L421 | `3.5.5` | **Hình 3.2** | `comparative orbital overlap diagram` — Ba kiểu xen phủ orbital nguyên tử tạo liên kết $\sigma$, $\pi$, $\delta$ kèm hệ thống mặt phẳng nút. | Placeholder chờ thiết kế đồ họa 3D |
| 2 | L425 | `3.5.5` | **Hình 3.3** | `3D orbital hybridization geometry diagram` — Sự tổ hợp tuyến tính các AO hóa trị và định hướng không gian của các họ orbital lai hóa ($sp, sp^2, sp^3, dsp^2, sp^3d, sp^3d^2/d^2sp^3$). | Placeholder chờ thiết kế đồ họa 3D |
| 3 | L429 | `3.5.5` | **Hình 3.4** | `molecular orbital-hybridization composite diagram` — Khung liên kết $\sigma$ và đám mây liên kết $\pi$ trong $CH_4$, $C_2H_4$, $C_2H_2$. | Placeholder chờ thiết kế đồ họa 3D |
| 4 | L433 | `3.5.5` | **Hình 3.5** | `comparative bonding limitation diagram` — Hai giới hạn kinh điển của thuyết VB: tính thuận từ của $O_2$ lỏng và liên kết cầu $3c\text{–}2e$ trong $B_2H_6$. | Placeholder chờ thiết kế đồ họa 3D |

### 3. Danh sách 149 thẻ `[ADDED]` còn giữ lại

Toàn bộ `149` thẻ `[ADDED]` được liệt kê đầy đủ (kèm số dòng, mục và nội dung) trong báo cáo cơ học `_state/checks/ch03_std_tags.md`. Bảng dưới đây tóm tắt phân bố theo mục:

| Nhóm mục | Số thẻ `[ADDED]` | Ghi chú |
|---|---:|---|
| `3.1`–`3.3` (Tổng quan, Mục tiêu, Đặt vấn đề) | 16 | Khung sư phạm, LO-1..LO-4, cầu nối Chương 2 |
| `3.4.1`–`3.4.3` (VB, xen phủ $\sigma/\pi/\delta$, lai hóa) | 56 | Định nghĩa, bảng so sánh, giải thích định lượng |
| `3.4.4`–`3.4.6` (Các kiểu lai hóa, phức chất, hạn chế VB) | 40 | Bảng 3.2, Cisplatin, spin cao/thấp, $O_2/B_2H_6$ |
| `3.5` (Ví dụ & quy trình) | 27 | 3 ví dụ mẫu, quy trình 4 bước, Hình 3.1–3.5 |
| `3.6` (Tóm tắt) | 3 | Mẹo ghi nhớ, Bảng 3.3 |
| `3.7`–`3.8` (Đánh giá, Tài liệu tham khảo) | 7 | Câu hỏi, đáp án, khung tài liệu tham khảo |
| **Tổng** | **149** | Khớp tuyệt đối với `check_tags.py` |

---

## E. Đề xuất chỉnh sửa nội dung (Recommended Content Changes)

1. **`QA-03.04` — Đồng bộ nhật ký S3 (`03_chapters/ch03_changelog.md`):** Bản thảo `ch03_draft.md` ghi `Khoảng **3,0 giờ**` tại Mục `3.1.2` và đây là con số **đúng** theo dung lượng thực tế (4.240 từ). Tuy nhiên, `03_chapters/ch03_changelog.md` (mục `M-03.02`, dòng 15) lại ghi *"ước tính thời lượng học tập dự kiến là 2,0 giờ"*. **Đề xuất:** trong một giai đoạn hậu kỳ (không thuộc S5A), cập nhật `ch03_changelog.md` từ `2,0 giờ` thành `3,0 giờ` để đồng bộ với bản thảo và bản chuẩn hóa. **S5A tuyệt đối không chỉnh sửa `ch03_changelog.md`** (đầu vào lịch sử).
2. **`QA-03.05` — Chế bản 4 hình minh họa:** 4 khung `[FIGURE: 3.2]`–`[FIGURE: 3.5]` tại Mục `3.5.5` cần được chuyển thành hình vẽ 3D thực tế trước khi phát hành bản **CLEAN RELEASE**. Nội dung mô tả kỹ thuật đã đầy đủ trong placeholder (xem Mục D.2).
3. **Không có đề xuất thay đổi nội dung học thuật nào khác.** Bản thảo đã đạt phán quyết **PASS** ngay ở Vòng 1 kiểm định độc lập S4 QA (`Critical = 0`, `Major = 0`, `Minor = 5`); toàn bộ 5 góp ý Minor đã được xử lý hoặc ghi nhận trong S5A.

---

## F. Chưa kiểm chứng / Giới hạn (Not Verified / Limitations — Rule R10 & R12)

1. **Tài liệu tham khảo bên ngoài (R4, R10, R12e):** Ba vị trí tài liệu tham khảo tại Mục `3.8.1` (`V-03.07a`, `V-03.07b`, `V-03.07c`) vẫn giữ nguyên thẻ `[VERIFY]` trong bản **REVIEW DRAFT** vì người dùng chưa cung cấp danh mục giáo trình cụ thể; Biên tập viên (`editor`) tuyệt đối không tự điền tên sách, tác giả, năm xuất bản hay DOI.
2. **Số liệu thực nghiệm (R10):** Các giá trị góc liên kết và dữ kiện từ tính ($109^\circ\,28^{\prime}/109,5^\circ$, $107,3^\circ$, $104,5^\circ$, $90^\circ$, tính thuận từ của $O_2$, số electron độc thân của $[FeF_6]^{3-}$/$[Fe(CN)_6]^{3-}$/$[Ni(CN)_4]^{2-}$/Cisplatin) đã được người dùng phê duyệt tại Gate B và gỡ thẻ theo `V-03.01`–`V-03.06`, nhưng **chưa được kiểm chứng thực nghiệm độc lập ngoài văn bản nguồn** trong khuôn khổ S5A. Việc xác nhận cuối cùng theo giáo trình chính khóa thuộc thẩm quyền giảng viên ở giai đoạn phát hành Clean Release.
3. **Khung giữ chỗ đồ họa (`[FIGURE]`):** Bốn hình vẽ 3D (**Hình 3.2**–**Hình 3.5** tại Mục `3.5.5`) vẫn ở dạng placeholder chuẩn `FIGURE_POLICY`, chưa có tệp hình thật trong `public/images/`.
4. **Bảo toàn tệp gốc:** Tệp nguồn gốc trong `00_source_original/` (bao gồm `00_source_original/ch03_doc-hvc-3.html`) và bản thảo `03_chapters/ch03_draft.md` **hoàn toàn không bị chỉnh sửa hay ghi đè** trong suốt S5A (tuân thủ Rule 2.3). Mọi thay đổi chỉ diễn ra trên 4 tệp đầu ra mới: `05_final/ch03_std_review.md`, `05_final/MLN_HoaVoCoDuoc_Ch03_v2.0_review.md`, `05_final/ch03_editlog.md` và `_state/checks/ch03_std_tags.md`.
