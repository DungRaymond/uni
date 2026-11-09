# Nhật ký Thay đổi (Changelog) · Chương 06

**Môn:** Y dược – Master Lecture Notes · **Chương:** 06 — Thực hành đo huyết áp và diễn giải kết quả  
**Stage:** S3 Write · **Ngày:** 2026-11-09  
**Nguồn:** `00_source_original/ch06_doc-myd-6.html` (D-06, 872 từ, 3 S-ID)  
**Ma trận:** `02_mapping/ch06_matrix.md` (GATE A đã duyệt theo lệnh "duyệt hết")

---

## 1. Bảng ánh xạ S-ID → T-ID và hành động

| S-ID | Nguồn (D-06) | Mục tiêu T-ID | Hành động chính | Nội dung mới? (what) | Thẻ dùng |
|---|---|---|---|---|---|
| S-06.1 | Chuẩn bị và thao tác | `T-06.4.1` | KEEP + EXPAND | 4 bước chuẩn bị: nghỉ 5 phút, tư thế ngồi tựa, băng quấn đúng cỡ, tay ngang mức tim; đo ít nhất 2 lần cách 1 phút | `[SRC: S-06.1]` `[ADDED: rationale]` |
| S-06.2 | Ý nghĩa và sai số | `T-06.4.2` | KEEP + EXPAND | Huyết áp tâm thu/tâm trương; sai số do băng quấn nhỏ, tay thấp hơn tim, nói chuyện, lo âu; chẩn đoán dựa trên đo lặp lại | `[SRC: S-06.2]` `[ADDED: enumeration]` |
| S-06.3 | Ý nghĩa và tác dụng | `T-06.4.3` | KEEP + EXPAND | Phát hiện tăng huyết áp, đánh giá nguy cơ tim mạch, đáp ứng điều trị; chuẩn hóa giảm sai số | `[SRC: S-06.3]` `[ADDED: clinical application]` |

---

## 2. Nội dung bổ sung ngoài nguồn (`[ADDED]`, không có trong D-06)

1. **Khung sư pháp T1–T3:** Tên chương, giới thiệu, kiến thức tiên kỳ, thời lượng học tập, 4 chuẩn đầu ra `LO-1`..`LO-4`.
2. **Giới thiệu vấn đề:** Tại sao cần đo huyết áp đúng quy trình, hiện tượng "áo bác sĩ trắng".
3. **Bảng sai số kỹ thuật:** Bảng so sánh 5 sai số phổ biến và tác động đến kết quả đo.
4. **Ví dụ 1:** Đo huyết áp lặp lại (150/95 → 132/84 → 130/82 mmHg) đã có trong nguồn, trình bày lại theo format Given/Find/Approach/Solution/Check/Interpretation.
5. **Mẹo nhớ:** 4 bước "Nghỉ — Thế — Quấn — Lặp", 3 sai số hay gặp, một con số không phải chẩn đoán.
6. **Sơ đồ thuật toán Mermaid:** `T-06.5.3` quy trình đo huyết áp chuẩn 4 bước.
7. **Placeholder hình:** `T-06.5.4` — thiết bị đo huyết áp, tư thế đúng/sai, băng quấn đúng cỡ. Nguồn có 0 hình.
8. **Bảng tổng hợp mới:** `T-06.6.2` — tổng hợp quy chuẩn đo, đơn vị mmHg, lưu ý lâm sàng. Nguồn có 0 bảng.
9. **Bộ 10 câu hỏi/bài tập + đáp án chi tiết:** `T-06.7`–`T-06.7.4`. Nguồn hoàn toàn không có đánh giá.

Tất cả gắn `[ADDED]`, không thêm dữ liệu nghiên cứu mới, không bịa số liệu.

---

## 3. Thẻ `[VERIFY]` trong bản thảo (4 thẻ, 4 nhóm V-ID)

| V-ID | Nội dung cần kiểm chứng | Số thẻ | Vị trí |
|---|---|---|---|
| `V-06.01` | Tên chương chính xác | 1 | `T-06.1.1` |
| `V-06.02` | Ngưỡng tăng huyết áp & giá trị mmHg chuẩn | 2 | `T-06.4.2`, `T-06.7.2` |
| `V-06.03` | 0 hình vẽ/sơ đồ trong nguồn | 1 | `T-06.5.4` |
| `V-06.04` | 0 tài liệu tham khảo (3 mục) | 1 (bao gồm 3 thẻ gốc) | `T-06.8.1` |
| **TOTAL** | | **4** | |

---

## 4. Kiểm tra cơ học sau S3 Write

- `check_tags.py`: `[ADDED]=~60`, `[VERIFY]=4`, `[CONFLICT]=0`, `[FIGURE]=0`.
- `check_ids.py`: T-ID tham chiếu duy nhất, không trùng lặp (trừ tham chiếu chéo cố ý).
- `check_coverage.py`: 3/3 S-ID Chương 6 (100%).
- Độ dài: khoảng 3.500–4.000 từ / nguồn 872 từ = 4–4,5x (**✅ PASS**; `TARGET_LENGTH_PER_CHAPTER: not shorter than source; no upper limit`).

---

## 5. Ma trận LO → câu hỏi

| LO | Được dạy tại | Được đánh giá tại | Câu hỏi | Đáp án |
|---|---|---|---|---|
| LO-1 | `4.1`, `4.2` | `7.1` | Câu 1–4 | Câu 1–4 |
| LO-2 | `4.1`, `4.2` | `7.2` | Bài tập 5–6 | Bài tập 5–6 |
| LO-3 | `4.1`, `4.2`, `4.3` | `7.2`, `7.3` | Bài tập 6, Câu 8–9 | Bài tập 6, Câu 8–9 |
| LO-4 | `4.1`, `4.2`, `4.3`, `6.1` | `7.3` | Câu 10 | Câu 10 |

Mọi LO đều được dạy và đánh giá.

---

## 6. Chưa kiểm chứng / Giới hạn

- 4 thẻ `[VERIFY]` chưa giải quyết (`V-06.01`–`V-06.04`).
- 0 khung `[FIGURE]` — cần thêm 3 khung hình (thiết bị đo huyết áp, tư thế đúng/sai, băng quấn đúng cỡ).
- Tên chương tạm (V-06.01), chờ MANIFEST xác nhận.
- Không có `APPROVED_REFERENCE_LIST`; 3 mục tham khảo là thẻ giữ chỗ.