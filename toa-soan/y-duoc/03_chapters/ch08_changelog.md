# Nhật ký Thay đổi (Changelog) · Chương 08

**Môn:** Y dược – Master Lecture Notes · **Chương:** 08 — Điện thế màng và điện thế hoạt động  
**Stage:** S3 Write · **Ngày:** 2026-11-09  
**Nguồn:** `00_source_original/ch08_doc-myd-8.html` (D-08, 872 từ, 4 S-ID)  
**Ma trận:** `02_mapping/ch08_matrix.md` (GATE A đã duyệt theo lệnh "duyệt hết")

---

## 1. Bảng ánh xạ S-ID → T-ID và hành động

| S-ID | Nguồn (D-08) | Mục tiêu T-ID | Hành động chính | Nội dung mới? (what) | Thẻ dùng |
|---|---|---|---|---|---|
| S-08.1 | Điện thế nghỉ | `T-08.4.1` | KEEP + EXPAND | Điện thế màng phát sinh từ chênh lệch nồng độ ion hai bên màng và tính thấm chọn lọc; bơm Na⁺/K⁺ duy trì gradient ion; điện thế nghỉ xấp xỉ −70 mV | `[SRC: S-08.1]` `[ADDED: definition]` |
| S-08.2 | Điện thế hoạt động | `T-08.4.2` | KEEP + EXPAND | Khử cực (Na⁺ vào), tái cực (K⁺ ra), quá phân cực ngắn, thời kỳ trớ, bao myelin dẫn truyền nhảy cóc | `[SRC: S-08.2]` `[ADDED: definition]` |
| S-08.3 | Cơ tim & liên hệ thuốc | `T-08.4.3` | KEEP + EXPAND | Điện thế hoạt động cơ tim: pha bình nguyên liên quan dòng Ca²⁺; thuốc gây tê chẹn kênh Na⁺; thuốc chống loạn nhịp tác động lên kênh ion | `[SRC: S-08.3]` `[ADDED: definition]` |
| S-08.4 | Ý nghĩa và tác dụng | `T-08.4.4` | KEEP + EXPAND | Cơ sở của dẫn truyền thần kinh, co cơ và nhịp tim; hiểu ECG, rối loạn nhịp do thay đổi điện giải | `[SRC: S-08.4]` `[ADDED: clinical application]` |

---

## 2. Nội dung bổ sung ngoài nguồn (`[ADDED]`, không có trong D-08)

1. **Khung sư pháp T1–T3:** Tên chương, giới thiệu, kiến thức tiên kỳ, thời lượng học tập, 4 chuẩn đầu ra `LO-1`..`LO-4`.
2. **Giới thiệu vấn đề:** Tại sao điện thế màng quan trọng trong y dược, liên hệ với thuốc gây tê và chống loạn nhịp.
3. **Ví dụ 1:** Nernst với Na⁺ (140/14 mmol/L → +61,5 mV) và pha khử cực đã có trong nguồn, trình bày lại theo format.
4. **Mẹo nhớ:** $Na^+$ vào = khử cực; $K^+$ ra = tái cực; $Ca^{2+}$ vào = pha bình nguyên cơ tim; Nernst ion ngoài càng nhiều → điện thế càng dương; thời kỳ trớ "cửa Na⁺ đang khóa".
5. **Sơ đồ thuật toán Mermaid:** `T-08.5.3` sóng điện thế hoạt động (khử cực / tái cực / quá phân cực / thời kỳ trớ).
6. **Placeholder hình:** `T-08.5.4` — điện thế màng, kênh ion Na⁺/K⁺, điện thế hoạt động cơ tim. Nguồn có 0 hình.
7. **Bảng tổng hợp mới:** `T-08.6.2` — tổng hợp công thức Nernst, đơn vị mV, lưu ý lâm sàng. Nguồn có 0 bảng.
8. **Bộ 10 câu hỏi/bài tập + đáp án chi tiết:** `T-08.7`–`T-08.7.4`. Nguồn hoàn toàn không có đánh giá.

Tất cả gắn `[ADDED]`, không thêm dữ liệu nghiên cứu mới, không bịa số liệu.

---

## 3. Thẻ `[VERIFY]` trong bản thảo (4 thẻ, 4 nhóm V-ID)

| V-ID | Nội dung cần kiểm chứng | Số thẻ | Vị trí |
|---|---|---|---|
| `V-08.01` | Tên chương chính xác | 1 | `T-08.1.1` |
| `V-08.02` | Giá trị điện thế nghỉ (−70 mV), điện thế hoạt động (+30 mV), E_K (−95 mV) | 2 | `T-08.4.1`, `T-08.5.1` |
| `V-08.03` | 0 hình vẽ/sơ đồ trong nguồn | 1 | `T-08.5.4` |
| `V-08.04` | 0 tài liệu tham khảo (3 mục) | 1 (bao gồm 3 thẻ gốc) | `T-08.8.1` |
| **TOTAL** | | **4** | |

---

## 4. Kiểm tra cơ học sau S3 Write

- `check_tags.py`: `[ADDED]=~60`, `[VERIFY]=4`, `[CONFLICT]=0`, `[FIGURE]=0`.
- `check_ids.py`: T-ID tham chiếu duy nhất, không trùng lặp (trừ tham chiếu chéo cố ý).
- `check_coverage.py`: 4/4 S-ID Chương 8 (100%).
- Độ dài: khoảng 3.500–4.000 từ / nguồn 872 từ = 4–4,5x (**✅ PASS**; `TARGET_LENGTH_PER_CHAPTER: not shorter than source; no upper limit`).

---

## 5. Ma trận LO → câu hỏi

| LO | Được dạy tại | Được đánh giá tại | Câu hỏi | Đáp án |
|---|---|---|---|---|
| LO-1 | `4.1`–`4.3` | `7.1` | Câu 1–4 | Câu 1–4 |
| LO-2 | `4.1`, `4.2` | `7.2` | Bài tập 5–7 | Bài tập 5–7 |
| LO-3 | `4.3` | `7.2`, `7.3` | Bài tập 7, Câu 8–9 | Bài tập 7, Câu 8–9 |
| LO-4 | `4.1`, `4.3`, `4.4`, `6.1` | `7.3` | Câu 10 | Câu 10 |

Mọi LO đều được dạy và đánh giá.

---

## 6. Chưa kiểm chứng / Giới hạn

- 4 thẻ `[VERIFY]` chưa giải quyết (`V-08.01`–`V-08.04`).
- 0 khung `[FIGURE]` — cần thêm 3 khung hình (điện thế màng, kênh ion Na⁺/K⁺, điện thế hoạt động cơ tim).
- Tên chương tạm (V-08.01), chờ MANIFEST xác nhận.
- Không có `APPROVED_REFERENCE_LIST`; 3 mục tham khảo là thẻ giữ chỗ.