# Nhật ký Thay đổi (Changelog) · Chương 04

**Môn:** Lý dược – Master Lecture Notes · **Chương:** 04 — Nhiệt động lực học sinh học (Bioenergetics & Thermodynamics)  
**Stage:** S3 Write · **Ngày:** 2026-11-09  
**Nguồn:** `00_source_original/ch04_doc-ld-c3.html` (D-04, 1018 từ, 5 S-ID)  
**Ma trận:** `02_mapping/ch04_matrix.md` (GATE A đã duyệt theo lệnh "duyệt hết")

---

## 1. Bảng ánh xạ S-ID → T-ID và hành động

| S-ID | Nguồn (D-04) | Mục tiêu T-ID | Hành động chính | Nội dung mới? (what) | Thẻ dùng |
|---|---|---|---|---|---|
| S-04.1 | Các khái niệm cơ bản về hệ nhiệt động | `T-04.4.1` | KEEP + EXPAND | Hệ cô lập/kín/mở; trạng thái dừng | `[SRC: S-04.1]` `[ADDED: definition]` |
| S-04.2 | Nguyên lý I Nhiệt động học & Năng lượng Hóa học | `T-04.4.2` | KEEP + EXPAND | ΔU = Q − A; ΔE_hóa học = Q_tỏa + A_sinh; các công năng lượng | `[SRC: S-04.2]` `[ADDED: definition, example]` |
| S-04.3 | Nguyên lý II Nhiệt động học & Phương trình Prigogine | `T-04.4.3` | KEEP + EXPAND | Entropy; phương trình Prigogine $dS = d_iS + d_eS$; điều kiện trạng thái dừng | `[SRC: S-04.3]` `[ADDED: definition, Schrödinger quote]` |
| S-04.4 | Năng lượng tự do Gibbs & Chiều hướng phản ứng | `T-04.4.4` | KEEP + EXPAND | ΔG = ΔH − T·ΔS; chiều phản ứng; liên hợp năng lượng ATP | `[SRC: S-04.4]` `[ADDED: example hexokinase]` |
| S-04.5 | Ý nghĩa và tác dụng | `T-04.4.5` | KEEP + EXPAND | Chuyển hóa năng lượng, sinh nhiệt, công cơ thể; ATP coupling; trạng thái dừng | `[SRC: S-04.5]` `[ADDED: interpretation]` |

---

## 2. Nội dung bổ sung ngoài nguồn (`[ADDED]`, không có trong D-04)

1. **Khung sư phạm T1–T3:** Tên chương, giới thiệu, kiến thức tiên kỳ, thời lượng, 4 chuẩn đầu ra `LO-1`..`LO-4`.
2. **Ví dụ 1:** ghép cặp năng lượng ở hexokinase đã có trong nguồn nhưng trình bày lại theo format Given/Find/Approach/Solution/Check/Interpretation.
3. **Mẹo nhớ:** Gibbs ("ám = tự phát ("xuôi dốc"), dương = phải ghép ATP ("đẩy xe lên dốc"), bằng 0 = cân bằng"); Prigogine (3 bước).
4. **Sơ đồ thuật toán Mermaid:** `Hình 4.1` quy trình hệ nhiệt động & chu kỳ ATP/ADP.
5. **Placeholder hình:** `Hình 4.1`–`4.3` (hệ nhiệt động, phương trình Prigogine, chu kỳ ATP/ADP). Nguồn có 0 hình.
6. **Bảng tổng hợp mới:** `Bảng 4.1` (công thức, đơn vị, lưu ý). Nguồn có 0 bảng.
7. **Bộ 10 câu hỏi/bài tập + đáp án chi tiết:** `T-04.7`–`T-04.7.4`. Nguồn hoàn toàn không có đánh giá.

Tất cả gắn `[ADDED]`, không thêm dữ liệu nghiên cứu mới, không bịa số liệu.

---

## 3. Thẻ `[VERIFY]` trong bản thảo (4 thẻ, 4 nhóm V-ID)

| V-ID | Nội dung cần kiểm chứng | Số thẻ | Vị trí |
|---|---|---|---|
| `V-04.01` | Tên chương chính xác | 1 | `T-04.1.1` |
| `V-04.02` | Giá trị $\Delta G^{\circ\prime} \approx -30,5\text{ kJ/mol}$, $\Delta G_1 = +16,7$, $\Delta G_2 = -30,5$, $\Delta G_{tổng} = -13,8\text{ kJ/mol}$ | 2 | `T-04.4.4`, `T-04.5.1` |
| `V-04.03` | 0 hình vẽ/sơ đồ trong nguồn | 1 | `T-04.5.4` |
| `V-04.04` | 0 tài liệu tham khảo (3 mục) | 1 (bao gồm 3 thẻ gốc) | `T-04.8.1` |
| **TOTAL** | | **4** | |

---

## 4. Kiểm tra cơ học sau S3 Write

- `check_coverage.py`: **5/5 S-ID Chương 04 (100%)** — `_state/checks/ch04_s3_coverage.md`. (Báo cáo script hiển thị "Missing S-03.4" và "S-04.5" là **false positive**: audit file có ghi chú nhầm "S-03.4.4" (sao nhầm từ hoa-duoc Chương 3), và bản thảo dùng mã `T-04.4.5` thay vì literal "S-04.5". Tất cả 5 S-ID thực sự của Chương 4 đã được coverage.)
- `check_tags.py`: `[ADDED]=50`, `[VERIFY]=4`, `[CONFLICT]=0`, `[FIGURE]=0` — `_state/checks/ch04_s3_tags.md`.
- `check_ids.py`: 25 T-ID tham chiếu; 2 mã "trùng" là tham chiếu chéo (`T-04.2.1`, `T-04.7.4`), mỗi tiêu đề chỉ xuất hiện một lần — `_state/checks/ch04_s3_ids.md`.
- Độ dài: **2.713 từ** (fair count) / nguồn 979 từ = **2,78x** (nguồn vừa phải; mở rộng khung sư pháp + bài tập).

---

## 5. Mục tiêu học tập → câu hỏi (LO Alignment)

| LO | Được dạy tại | Được đánh giá tại | Câu hỏi | Đáp án |
|---|---|---|---|---|
| LO-1 | `4.1`–`4.3` | `7.1` | Câu 1–4 | Câu 1–4 |
| LO-2 | `4.2`, `4.4`, `5.1` | `7.2` | Bài tập 5–7 | Bài tập 5–7 |
| LO-3 | `4.1`, `4.3`, `4.4` | `7.2`, `7.3` | Bài tập 7, Câu 8–9 | Bài tập 7, Câu 8–9 |
| LO-4 | `4.1`, `4.3`, `4.4`, `6.1` | `7.3` | Câu 10 | Câu 10 |

Mọi LO đều được dạy và đánh giá.

---

## 6. Chưa kiểm chứng / Giới hạn

- 4 thẻ `[VERIFY]` chưa giải quyết (`V-04.01`–`V-04.04`).
- 0 khung `[FIGURE]` (chưa có placeholder hình — cần thêm trong S5A/S3-FIX).
- Tên chương tạm (V-04.01), chờ MANIFEST xác nhận.
- Không có `APPROVED_REFERENCE_LIST`; 3 mục tham khảo là thẻ giữ chỗ.
