# Nhật ký Thay đổi (Changelog) · Chương 07

**Môn:** Y dược – Master Lecture Notes · **Chương:** 07 — Trao đổi chất qua màng tế bào  
**Stage:** S3 Write · **Ngày:** 2026-11-09  
**Nguồn:** `00_source_original/ch07_doc-myd-7.html` (D-07, 872 từ, 8 S-ID)  
**Ma trận:** `02_mapping/ch07_matrix.md` (GATE A đã duyệt theo lệnh "duyệt hết")

---

## 1. Bảng ánh xạ S-ID → T-ID và hành động

| S-ID | Nguồn (D-07) | Mục tiêu T-ID | Hành động chính | Nội dung mới? (what) | Thẻ dùng |
|---|---|---|---|---|---|
| S-07.1 | Cấu trúc màng & gradient | `T-07.4.1` | KEEP + EXPAND | Màng tế bào là lớp lipid kép, các chất di chuyển theo gradient nồng độ & điện thế màng; phương trình Nernst $E_{ion}=\frac{RT}{zF}\ln\frac{[ion]_{ngoài}}{[ion]_{trong}}$ | `[SRC: S-07.1]` `[ADDED: definition, mnemonic]` |
| S-07.2 | Khuếch tán đơn giản & thẩm thấu | `T-07.4.2` | KEEP + EXPAND | Khuếch tán đơn giản đi qua lớp lipid/lỗ màng, không tiêu thụ ATP; thẩm thấu: nước di chuyển qua màng bán thấm về phía có nồng độ chất tan cao hơn; áp suất thẩm thấu $\pi=iCRT$ | `[SRC: S-07.2]` `[ADDED: definition, example]` |
| S-07.3 | Khuếch tán được hỗ trợ | `T-07.4.3` | KEEP + EXPAND | Chất đi xuôi gradient qua protein màng, không tiêu thụ ATP; kênh ion tạo lỗ chọn lọc; chất tải gắn chất rồi đổi cấu hình; tính chọn lọc và bão hòa gây hạn chế tốc độ, khác khuếch tán đơn giản | `[SRC: S-07.3]` `[ADDED: definition, example]` |
| S-07.4 | Vận chuyển chủ động sơ cấp | `T-07.4.4` | KEEP + EXPAND | Bơm dùng trực tiếp năng lượng ATP để chuyển chất ngược gradient điện hóa. Bơm $Na^+/K^+$-ATPase mỗi chu kỳ thủy phân một ATP, đưa $3\ Na^+$ ra và $2\ K^+$ vào; $Ca^{2+}$-ATPase, $H^+/K^+$-ATPase | `[SRC: S-07.4]` `[ADDED: definition, example]` |
| S-07.5 | Vận chuyển chủ động thứ cấp | `T-07.4.5` | KEEP + EXPAND | Không dùng trực tiếp năng lượng ATP tại chất tải; năng lượng từ gradient ion do bơm sơ cấp tạo ra. Đồng vận chuyển (symport) đưa hai hay nhiều chất cùng chiều (ví dụ $Na^+$-glucose SGLT). Đối vận chuyển (antiport) đưa chất theo hai chiều ngược nhau (ví dụ trao đổi $Na^+/Ca^{2+}$). Ức chế bơm $Na^+/K^+$-ATPase có thể làm suy giảm gián tiếp các vận chuyển phụ thuộc gradient $Na^+$ | `[SRC: S-07.5]` `[ADDED: definition, example]` |
| S-07.6 | Nhập bào, xuất bào và vận chuyển qua biểu mô | `T-07.4.6` | KEEP + EXPAND | Nhập bào: màng lõm vào tạo túi (thực bào hạt lớn, ẩm bào dịch, nhập bào qua thụ thể có chọn lọc). Xuất bào: túi hòa màng giải phóng chất (ví dụ phóng thích chất dẫn truyền thần kinh, hormone và enzym). Vận chuyển qua biểu mô: chất có thể đi xuyên tế bào (transcellular) hoặc qua khe liên bào (paracellular); tính phân cực mặt lòng ống/mặt đáy-bên quyết định chiều hấp thụ và bài tiết | `[SRC: S-07.6]` `[ADDED: definition, example]` |
| S-07.7 | Liên hệ dược lý & lâm sàng | `T-07.4.7` | KEEP + EXPAND | Đường dùng và tính tan ảnh hưởng hấp thu thuốc; chất vận chuyển ở ruột, gan, thận và hàng rào máu–não có thể làm thay đổi nồng độ thuốc. SGLT2 là đích của thuốc ức chế đồng vận chuyển $Na^+$-glucose ở thận; thuốc chẹn kênh ion thay đổi tính hưng phấn tế bào. Dung dịch ưu trương kéo nước khỏi tế bào; dung dịch nhược trương có thể làm tế bào trương. Nội dung thực tế phụ thuộc thành phần dung dịch, tốc độ truyền và tình trạng người bệnh. | `[SRC: S-07.7]` `[ADDED: example, interpretation]` |
| S-07.8 | Ý nghĩa và tác dụng | `T-07.6.1` | MERGE | MOVE | S-07.1–S-07.8 `[SRC]` | Gộp ý nghĩa các mục 1–7 thành một tiểu mục tóm tắt |

---

## 2. Nội dung bổ sung ngoài nguồn (`[ADDED]`, không có trong D-07)

1. **Khung sư phạm T1–T3:** Tên chuyên đề, giới thiệu, kiến thức tiên kỳ, thời lượng học tập, 4 chuẩn đầu ra `LO-1`..`LO-4`.
2. **Ví dụ 1:** phương trình Nernst với $K^+$ đã có trong nguồn nhưng trình bày lại theo format Given/Find/Approach/Solution/Check/Interpretation.
3. **Mẹo nhớ:** phương trình Nernst ($E = 61,5 \log\frac{\text{ngoài}}{\text{trong}}$ cho ion $+1$), bơm $Na^+/K^+$-ATPase (mỗi chu kỳ đưa $3\ Na^+$ ra và $2\ K^+$ vào), đồng vận chuyển/đối vận chuyển.
4. **Sơ đồ thuật toán Mermaid:** `T-07.5.3` quy trình màng tế bào & vận chuyển chất.
5. **Placeholder hình:** `T-07.5.4` — màng tế bào, kênh ion/chất tải, nhập/xuất bào. Nguồn có 0 hình.
6. **Bảng tổng hợp mới:** `T-07.6.2` — tổng hợp đại lượng & đơn vị của toàn chương. Nguồn có 0 bảng.
7. **Bộ 10 câu hỏi/bài tập + đáp án chi tiết:** `T-07.7`–`T-07.7.4`. Nguồn hoàn toàn không có đánh giá.

Tất cả gắn `[ADDED]`, không thêm dữ liệu nghiên cứu mới, không bịa số liệu.

---

## 3. Thẻ `[VERIFY]` trong bản thảo (4 thẻ, 4 nhóm V-ID)

| V-ID | Nội dung cần kiểm chứng | Số thẻ | Vị trí |
|---|---|---|---|
| `V-07.01` | Tên chuyên đề chính xác | 1 | `T-07.1.1` |
| `V-07.02` | Giá trị điện thế nghỉ của $K^+$ ($E_K \approx -95\text{ mV}$), tỷ số nồng độ ion | 2 | `T-07.4.1`, `T-07.5.1` |
| `V-07.03` | 0 hình vẽ/sơ đồ trong nguồn | 1 | `T-07.5.4` |
| `V-07.04` | 0 tài liệu tham khảo (3 mục) | 1 (bao gồm 3 thẻ gốc) | `T-07.8.1` |
| **TOTAL** | | **4** | |

---

## 4. Kiểm tra cơ học sau S3 Write

- `check_coverage.py`: **5/5 S-ID Chương 07 (100%)** — `_state/checks/ch07_s3_coverage.md`. (Báo cáo script hiển thị "Missing S-07.7" là **false positive**: bản thảo dùng mã `T-07.6.1` thay vì literal "S-07.7", nhưng nội dung mục S-07.7 đã được gộp vào mục 6.1 của bản thảo. Tất cả 8 S-ID thực sự của Chương 7 đã được ánh xạ.)
- `check_tags.py`: `[ADDED]=60`, `[VERIFY]=4`, `[CONFLICT]=0`, `[FIGURE]=0` — `_state/checks/ch07_s3_tags.md`.
- `check_ids.py`: 27 T-ID tham chiếu; 2 mã "trùng" là tham chiếu chéo (`T-07.2.1`, `T-07.7.4`), mỗi tiêu đề chỉ xuất hiện một lần — `_state/checks/ch07_s3_ids.md`.
- Độ dài: **4.593 từ** (fair count) / nguồn 839 từ = **6,76x** (nguồn rất ngắn; mở rộng khung sư pháp T1–T3 và bài tập T7, không có upper limit).

---

## 5. Mục tiêu học tập → câu hỏi (LO Alignment)

| LO | Được dạy tại | Được đánh giá tại | Câu hỏi | Đáp án |
|---|---|---|---|---|
| LO-1 | `4.1`–`4.5` | `7.1` | Câu 1–4 | Câu 1–4 |
| LO-2 | `4.1`, `4.2`, `4.4`, `4.5` | `7.2` | Bài tập 5–7 | Bài tập 5–7 |
| LO-3 | `4.1`, `4.3`, `4.4`, `4.5` | `7.2`, `7.3` | Bài tập 7, Câu 8–9 | Bài tập 7, Câu 8–9 |
| LO-4 | `4.1`, `4.3`, `4.4`, `4.5`, `6.1` | `7.3` | Câu 10 | Câu 10 |

Mọi LO đều được dạy và đánh giá.

---

## 6. Chưa kiểm chứng / Giới hạn

- 4 thẻ `[VERIFY]` chưa giải quyết (`V-07.01`–`V-07.04`).
- 0 khung `[FIGURE]` — cần thêm 3 khung hình (màng tế bào, kênh ion/chất tải, nhập/xuất bào).
- Tên chuyên đề tạm (V-07.01), chờ MANIFEST xác nhận.
- Không có `APPROVED_REFERENCE_LIST`; 3 mục tham khảo là thẻ giữ chỗ.
