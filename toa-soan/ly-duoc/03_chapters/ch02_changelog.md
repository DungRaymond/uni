# Nhật ký Thay đổi (Changelog) · Chương 02

**Môn:** Lý dược – Master Lecture Notes · **Chương:** 02 — Điện thế sinh học & Tín hiệu điện từ của màng tế bào  
**Stage:** S3 Write · **Ngày:** 2026-11-09  
**Nguồn:** `00_source_original/ch02_doc-ld-2.html` (D-02, 574 từ, 3 S-ID)  
**Ma trận:** `02_mapping/ch02_matrix.md` (GATE A đã duyệt theo lệnh "duyệt hết")

---

## 1. Bảng ánh xạ S-ID → T-ID và hành động

| S-ID | Nguồn (D-02) | Mục tiêu T-ID | Hành động chính | Nội dung mới? (what) | Thẻ dùng |
|---|---|---|---|---|---|
| S-02.1 | Điện thế nghỉ (Resting Membrane Potential) | `T-02.4.1` | KEEP + EXPAND | Nernst, GHK, điện thế nghỉ −70 đến −90 mV | `[SRC: S-02.1]` `[ADDED: definition, mnemonic]` |
| S-02.2 | Điện thế hoạt động (Action Potential) | `T-02.4.2` | KEEP + EXPAND | Khử cực (Na⁺ vào), tái cực (K⁺ ra), trơ tuyệt đối/tương đối, ECG/EEG | `[SRC: S-02.2]` `[ADDED: example, mnemonic, procedure]` |
| S-02.3 | Ý nghĩa và tác dụng | `T-02.4.3` | KEEP + EXPAND | ECG/EEG, thuốc chẹn kênh ion, kali máu → loạn nhịp, ví dụ Nernst K⁺ | `[SRC: S-02.3]` `[ADDED: example, interpretation]` |

---

## 2. Nội dung bổ sung ngoài nguồn (`[ADDED]`, không có trong D-02)

1. **Khung sư phạm T1–T3:** Tên chuyên đề, giới thiệu, kiến thức tiên quyết, thời lượng, 4 chuẩn đầu ra `LO-1`..`LO-4`.
2. **Ví dụ 1:** thế Nernst của K⁺ đã có trong nguồn nhưng trình bày lại theo format Given/Find/Approach/Solution/Check/Interpretation.
3. **Mẹo nhớ:** Nernst ("ngoài chia trong"), GHK ("ion nào thấm nhiều nói to hơn"), điện thế hoạt động ("Na⁺ vào → lên; K⁺ ra → xuống").
4. **Sơ đồ thuật toán Mermaid:** `Hình 2.1` quy trình khử cực/tái cực.
5. **Placeholder hình:** `Hình 2.1`–`2.3` (điện thế màng, khử cực/tái cực, ECG/EEG). Nguồn có 0 hình.
6. **Bảng tổng hợp mới:** `Bảng 2.1` (công thức, đơn vị, lưu ý). Nguồn có 0 bảng.
7. **Bộ 10 câu hỏi/bài tập + đáp án chi tiết:** `T-02.7`–`T-02.7.4`. Nguồn hoàn toàn không có đánh giá.

Tất cả gắn `[ADDED]`, không thêm dữ liệu nghiên cứu mới, không bịa số liệu.

---

## 3. Thẻ `[VERIFY]` trong bản thảo (4 thẻ, 4 nhóm V-ID)

| V-ID | Nội dung cần kiểm chứng | Số thẻ | Vị trí |
|---|---|---|---|
| `V-02.01` | Tên chuyên đề chính xác | 1 | `T-02.1.1` |
| `V-02.02` | Giá trị điện thế nghỉ (−70 đến −90 mV), điện thế đỉnh (+30 mV), tỷ số độ thấm K⁺/Na⁺ (50–100 lần) | 2 | `T-02.4.1`, `T-02.4.2`, `T-02.5.1` |
| `V-02.03` | 0 hình vẽ/sơ đồ trong nguồn | 1 | `T-02.5.4` |
| `V-02.04` | 0 tài liệu tham khảo (3 mục) | 1 (bao gồm 3 thẻ gốc) | `T-02.8.1` |
| **TOTAL** | | **4** | |

---

## 4. Kiểm tra cơ học sau S3 Write

- `check_coverage.py`: **3/3 S-ID (100%)** — `_state/checks/ch02_s3_coverage.md`.
- `check_tags.py`: `[ADDED]=44`, `[VERIFY]=4`, `[CONFLICT]=0`, `[FIGURE]=0` — `_state/checks/ch02_s3_tags.md`.
- `check_ids.py`: 23 T-ID tham chiếu; 2 mã "trùng" là tham chiếu chéo (`T-02.2.1`, `T-02.7.4`), mỗi tiêu đề chỉ xuất hiện một lần — `_state/checks/ch02_s3_ids.md`.
- Độ dài: **3.309 từ** (fair count) / nguồn 508 từ = **6,51x** (nguồn rất ngắn; mở rộng khung sư phạm + bài tập, không có upper limit).

---

## 5. Mục tiêu học tập → câu hỏi (LO Alignment)

| LO | Được dạy tại | Được đánh giá tại | Câu hỏi | Đáp án |
|---|---|---|---|---|
| LO-1 | `4.1`, `4.2` | `7.1` | Câu 1–4 | Câu 1–4 |
| LO-2 | `4.1`, `4.2`, `5.1` | `7.2` | Bài tập 5–7 | Bài tập 5–7 |
| LO-3 | `4.1`, `4.2`, `4.3` | `7.2`, `7.3` | Bài tập 7, Câu 8–9 | Bài tập 7, Câu 8–9 |
| LO-4 | `4.2`, `4.3`, `6.1` | `7.3` | Câu 10 | Câu 10 |

Mọi LO đều được dạy và đánh giá.

---

## 6. Chưa kiểm chứng / Giới hạn

- 4 thẻ `[VERIFY]` chưa giải quyết (`V-02.01`–`V-02.04`).
- 0 khung `[FIGURE]` (chưa thêm placeholder hình — cần thêm trong S5A/S3-FIX).
- Tên chuyên đề tạm (V-02.01), chờ MANIFEST xác nhận.
- Không có `APPROVED_REFERENCE_LIST`; 3 mục tham khảo là thẻ giữ chỗ.
