# Nhật ký Thay đổi (Changelog) · Chương 01

**Môn:** Lý dược – Master Lecture Notes · **Chương:** 01 — Nhiệt động học sinh học & Động học chất lưu trong hệ tuần hoàn  
**Stage:** S3 Write · **Ngày:** 2026-11-09  
**Nguồn:** `00_source_original/ch01_doc-ld-1.html` (D-01, 579 từ, 3 S-ID)  
**Ma trận:** `02_mapping/ch01_matrix.md` (GATE A đã duyệt theo lệnh "duyệt hết")

---

## 1. Bảng ánh xạ S-ID → T-ID và hành động

| S-ID | Nguồn (D-01) | Mục tiêu T-ID | Hành động chính | Nội dung mới? (what) | Thẻ dùng |
|---|---|---|---|---|---|
| S-01.1 | Các nguyên lý nhiệt động trong hệ thống sống | `T-01.4.1` | KEEP + EXPAND | Hệ mở/kín/cô lập, nguyên lý I & II, entropy, quy ước dấu | `[SRC: S-01.1]` `[ADDED: definition, mnemonic]` |
| S-01.2 | Động học dòng máu & định luật Poiseuille | `T-01.4.2` | KEEP + EXPAND | Q = πΔPr⁴/8ηl, R = 8ηl/πr⁴, số Reynolds, sức cản | `[SRC: S-01.2]` `[ADDED: example, mnemonic, procedure]` |
| S-01.3 | Ý nghĩa và tác dụng | `T-01.4.3` | KEEP + EXPAND | Huyết động, tiếng thổi tim, co/giãn mạch, ví dụ mạch hẹp | `[SRC: S-01.3]` `[ADDED: example, interpretation]` |

---

## 2. Nội dung bổ sung ngoài nguồn (`[ADDED]`, không có trong D-01)

1. **Khung sư phạm T1–T3:** Tên chuyên đề, giới thiệu, kiến thức tiên quyết, thời lượng, 4 chuẩn đầu ra `LO-1`..`LO-4`.
2. **Ví dụ mới:** `Ví dụ 1` (mạch hẹp 20%) đã có trong nguồn nhưng trình bày lại theo format Given/Find/Approach/Solution/Check/Interpretation.
3. **Mẹo nhớ & quy trình 3 bước:** từ callout nguồn, hệ thống hóa lại.
4. **Sơ đồ thuật toán Mermaid:** `Hình 1.1` quy trình xác định dòng tầng/xoáy dựa trên Re.
5. **Placeholder hình:** `Hình 1.1`–`1.3` (hệ mở, dòng tầng/xoáy, sức cản r⁴). Nguồn có 0 hình.
6. **Bảng tổng hợp mới:** `Bảng 1.1` (công thức, đơn vị, lưu ý). Nguồn có 0 bảng.
7. **Bộ 10 câu hỏi/bài tập + đáp án chi tiết:** `T-01.7`–`T-01.7.4`. Nguồn hoàn toàn không có đánh giá.
8. **Mẹo nhớ:** "Poiseuille — bậc 4 bán kính", quy trình 3 bước, Re < 2000 / > 2000.

Tất cả gắn `[ADDED]`, không thêm dữ liệu nghiên cứu mới, không bịa số liệu.

---

## 3. Thẻ `[VERIFY]` trong bản thảo (4 thẻ, 4 nhóm V-ID)

| V-ID | Nội dung cần kiểm chứng | Số thẻ | Vị trí |
|---|---|---|---|
| `V-01.01` | Tên chuyên đề chính xác | 1 | `T-01.1.1` |
| `V-01.02` | Giá trị Re < 2000 / > 2000, r⁴ trong Poiseuille | 2 | `T-01.4.2`, `T-01.5.1` |
| `V-01.03` | 0 hình vẽ/sơ đồ trong nguồn | 1 | `T-01.5.4` |
| `V-01.04` | 0 tài liệu tham khảo (3 mục) | 1 (bao gồm 3 thẻ gốc) | `T-01.8.1` |
| **TOTAL** | | **4** | |

---

## 4. Kiểm tra cơ học sau S3 Write

- `check_coverage.py`: **3/3 S-ID (100%)** — `_state/checks/ch01_s3_coverage.md`.
- `check_tags.py`: `[ADDED]=43`, `[VERIFY]=4`, `[CONFLICT]=0`, `[FIGURE]=0` — `_state/checks/ch01_s3_tags.md`.
- `check_ids.py`: 24 T-ID tham chiếu; 2 mã "trùng" là tham chiếu chéo (`T-01.2.1`, `T-01.7.4`), mỗi tiêu đề chỉ xuất hiện một lần — `_state/checks/ch01_s3_ids.md`.
- Độ dài: **3.578 từ** (fair count) / nguồn 554 từ = **6,46x** (nguồn rất ngắn; mở rộng khung sư phạm + bài tập, không có upper limit).

---

## 5. Mục tiêu học tập → câu hỏi (LO Alignment)

| LO | Được dạy tại | Được đánh giá tại | Câu hỏi | Đáp án |
|---|---|---|---|---|
| LO-1 | `4.1`, `4.2` | `7.1` | Câu 1–4 | Câu 1–4 |
| LO-2 | `4.2`, `5.1` | `7.2` | Bài tập 5–7 | Bài tập 5–7 |
| LO-3 | `4.3`, `5.1` | `7.2`, `7.3` | Bài tập 7, Câu 8–9 | Bài tập 7, Câu 8–9 |
| LO-4 | `4.1`, `4.3`, `6.1` | `7.3` | Câu 10 | Câu 10 |

Mọi LO đều được dạy và đánh giá.

---

## 6. Chưa kiểm chứng / Giới hạn

- 4 thẻ `[VERIFY]` chưa giải quyết (`V-01.01`–`V-01.04`).
- 0 khung `[FIGURE]` (chưa thêm placeholder hình — cần thêm trong S5A/S3-FIX).
- Tên chuyên đề tạm (V-01.01), chờ MANIFEST xác nhận.
- Không có `APPROVED_REFERENCE_LIST`; 3 mục tham khảo là thẻ giữ chỗ.
