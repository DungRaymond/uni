# Nhật ký Thay đổi (Changelog) · Chương 03

**Môn:** Lý dược – Master Lecture Notes · **Chương:** 03 — Bức xạ & Quang phổ học ứng dụng trong kiểm nghiệm thuốc  
**Stage:** S3 Write · **Ngày:** 2026-11-09  
**Nguồn:** `00_source_original/ch03_doc-ld-3.html` (D-03, 504 từ, 3 S-ID)  
**Ma trận:** `02_mapping/ch03_matrix.md` (GATE A đã duyệt theo lệnh "duyệt hết")

---

## 1. Bảng ánh xạ S-ID → T-ID và hành động

| S-ID | Nguồn (D-03) | Mục tiêu T-ID | Hành động chính | Nội dung mới? (what) | Thẻ dùng |
|---|---|---|---|---|---|
| S-03.1 | Định luật Lambert - Beer trong phân tích định lượng | `T-03.4.1` | KEEP + EXPAND | $A = \varepsilon l C$, định nghĩa $A, \varepsilon, l, C$; ứng dụng định lượng nồng độ, kiểm tra chất lượng | `[SRC: S-03.1]` `[ADDED: definition, mnemonic]` |
| S-03.2 | Ứng dụng bức xạ ion hóa và siêu âm trong Dược phẩm | `T-03.4.2` | KEEP + EXPAND | Tiệt khuẩn bằng tia gamma ($^{60}Co$); siêu âm (đồng hóa nhũ tương nano, chiết xuất hoạt chất, phá vỡ tế bào) | `[SRC: S-03.2]` `[ADDED: definition, interpretation]` |
| S-03.3 | Ý nghĩa và tác dụng | `T-03.4.3` | KEEP + EXPAND | Quang phổ UV-Vis định lượng hoạt chất; tiệt khuẩn gamma cần thẩm định liều; siêu âm chẩn đoán, xử lý mẫu, bào chế | `[SRC: S-03.3]` `[ADDED: example, interpretation]` |

---

## 2. Nội dung bổ sung ngoài nguồn (`[ADDED]`, không có trong D-03)

1. **Khung sư phạm T1–T3:** Tên chuyên đề, giới thiệu, kiến thức tiên kỳ, thời lượng, 4 chuẩn đầu ra `LO-1`..`LO-4`.
2. **Ví dụ 1:** định lượng hoạt chất bằng UV-Vis đã có trong nguồn nhưng trình bày lại theo format Given/Find/Approach/Solution/Check/Interpretation.
3. **Mẹo nhớ:** Beer–Lambert ("Ép Lên Cân"), $A$ không đơn vị, khoảng tuyến tính $0,2 - 0,8$.
4. **Sơ đồ thuật toán Mermaid:** `Hình 3.1` quy trình áp dụng Beer–Lambert và ứng dụng tia gamma/siêu âm.
5. **Placeholder hình:** `Hình 3.1`–`3.3` (Beer–Lambert, tia gamma, siêu âm). Nguồn có 0 hình.
6. **Bảng tổng hợp mới:** `Bảng 3.1` (công thức, đơn vị, lưu ý). Nguồn có 0 bảng.
7. **Bộ 10 câu hỏi/bài tập + đáp án chi tiết:** `T-03.7`–`T-03.7.4`. Nguồn hoàn toàn không có đánh giá.

Tất cả gắn `[ADDED]`, không thêm dữ liệu nghiên cứu mới, không bịa số liệu.

---

## 3. Thẻ `[VERIFY]` trong bản thảo (4 thẻ, 4 nhóm V-ID)

| V-ID | Nội dung cần kiểm chứng | Số thẻ | Vị trí |
|---|---|---|---|
| `V-03.01` | Tên chuyên đề chính xác | 1 | `T-03.1.1` |
| `V-03.02` | Giá trị $\varepsilon = 1,2\times10^4$, $A = 0,600$, $C = 5,0\times10^{-5}$ mol/L | 2 | `T-03.4.1`, `T-03.5.1` |
| `V-03.03` | 0 hình vẽ/sơ đồ trong nguồn | 1 | `T-03.5.4` |
| `V-03.04` | 0 tài liệu tham khảo (3 mục) | 1 (bao gồm 3 thẻ gốc) | `T-03.8.1` |
| **TOTAL** | | **4** | |

---

## 4. Kiểm tra cơ học sau S3 Write

- `check_coverage.py`: **3/3 S-ID (100%)** — `_state/checks/ch03_s3_coverage.md`.
- `check_tags.py`: `[ADDED]=43`, `[VERIFY]=4`, `[CONFLICT]=0`, `[FIGURE]=0` — `_state/checks/ch03_s3_tags.md`.
- `check_ids.py`: 23 T-ID tham chiếu; 2 mã "trùng" là tham chiếu chéo (`T-03.2.1`, `T-03.7.4`), mỗi tiêu đề chỉ xuất hiện một lần — `_state/checks/ch03_s3_ids.md`.
- Độ dài: **3.321 từ** (fair count) / nguồn 491 từ = **6,76x** (nguồn rất ngắn; mở rộng khung sư pháp + bài tập, không có upper limit).

---

## 5. Mục tiêu học tập → câu hỏi (LO Alignment)

| LO | Được dạy tại | Được đánh giá tại | Câu hỏi | Đáp án |
|---|---|---|---|---|
| LO-1 | `4.1`, `4.2` | `7.1` | Câu 1–4 | Câu 1–4 |
| LO-2 | `4.1`, `5.1` | `7.2` | Bài tập 5–7 | Bài tập 5–7 |
| LO-3 | `4.1`, `4.2`, `4.3` | `7.2`, `7.3` | Bài tập 7, Câu 8–9 | Bài tập 7, Câu 8–9 |
| LO-4 | `4.1`, `4.2`, `4.3`, `6.1` | `7.3` | Câu 10 | Câu 10 |

Mọi LO đều được dạy và đánh giá.

---

## 6. Chưa kiểm chứng / Giới hạn

- 4 thẻ `[VERIFY]` chưa giải quyết (`V-03.01`–`V-03.04`).
- 0 khung `[FIGURE]` (chưa thêm placeholder hình — cần thêm trong S5A/S3-FIX).
- Tên chuyên đề tạm (V-03.01), chờ MANIFEST xác nhận.
- Không có `APPROVED_REFERENCE_LIST`; 3 mục tham khảo là thẻ giữ chỗ.
