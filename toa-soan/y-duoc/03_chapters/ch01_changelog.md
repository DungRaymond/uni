# Nhật ký Thay đổi (Changelog) · Chương 01

**Môn:** Y dược – Master Lecture Notes · **Chương:** 01 — Sinh lý tim mạch & Hệ thống điều hòa huyết áp thể dịch - thần kinh  
**Stage:** S3 Write · **Ngày:** 2026-11-09  
**Nguồn:** `00_source_original/ch01_doc-myd-1.html` (D-01, 445 từ, 3 S-ID)  
**Ma trận:** `02_mapping/ch01_matrix.md` (GATE A đã duyệt theo lệnh "duyệt hết")

---

## 1. Bảng ánh xạ S-ID → T-ID và hành động

| S-ID | Nguồn (D-01) | Mục tiêu T-ID | Hành động chính | Nội dung mới? (what) | Thẻ dùng |
|---|---|---|---|---|---|
| S-01.1 | Cung lượng tim | `T-01.4.1` | KEEP + EXPAND | Cung lượng tim $CO = HR \times SV$; $HR \approx 70-80$ nhịp/phút, $SV \approx 60-80$ ml/nhát; $CO$ nghỉ $\approx 4,5-5,5$ L/phút; yếu tố điều hòa $SV$: tiền tải, hậu tải, sức co bóp | `[SRC: S-01.1]` `[ADDED: definition]` |
| S-01.2 | Hệ trục điều hòa huyết áp thần kinh & nội tiết | `T-01.4.2` | KEEP + EXPAND | Phản xạ áp thụ quan (xoang cảnh, quai động mạch chủ → điều chỉnh giao cảm/phó giao cảm trong vài giây). Hệ RAA: Renin → Angiotensin I → (ACE) → Angiotensin II → Aldosterone (giữ $Na^+$ và nước) | `[SRC: S-01.2]` `[ADDED: definition]` |
| S-01.3 | Ý nghĩa và tác dụng | `T-01.4.3` | KEEP + EXPAND | Cung lượng tim và cơ chế điều hòa giúp duy trì tưới máu, cung cấp oxy, ổn định huyết áp. Giải thích đáp ứng mất máu/mất nước, cơ chế tăng huyết áp, tác dụng thuốc ức chế ACE/chẹn thụ thể angiotensin/lợi tiểu | `[SRC: S-01.3]` `[ADDED: clinical application]` |

---

## 2. Nội dung bổ sung ngoài nguồn (`[ADDED]`, không có trong D-01)

1. **Khung sư pháp T1–T3:** Tên chương, giới thiệu, kiến thức tiên kỳ, thời lượng học tập, 4 chuẩn đầu ra `LO-1`..`LO-4`.
2. **Giới thiệu vấn đề:** Tại sao cần hiểu cung lượng tim và điều hòa huyết áp; hiện tượng "áo bác sĩ trắng".
3. **Ví dụ 1:** Tính cung lượng tim khi nghỉ và khi sốc ($75 \times 70 = 5,25$ L/phút; $110 \times 45 = 4,95$ L/phút) đã có trong nguồn, trình bày lại theo format Given/Find/Approach/Solution/Check/Interpretation.
4. **Mẹo nhớ:** $CO = HR \times SV$ — "nhịp tim × lượng máu mỗi nhịp"; ba yếu tố của $SV$; hai tầng điều hòa; dòng RAA.
5. **Sơ đồ thuật toán Mermaid:** `T-01.5.3` hệ RAA và phản xạ áp thụ quan.
6. **Placeholder hình:** `T-01.5.4` — cung lượng tim, hệ RAA, phản xạ áp thụ quan. Nguồn có 0 hình.
7. **Bảng tổng hợp mới:** `T-01.6.2` — tổng hợp công thức, đơn vị, lưu ý lâm sàng. Nguồn có 0 bảng.
8. **Bộ 10 câu hỏi/bài tập + đáp án chi tiết:** `T-01.7`–`T-01.7.4`. Nguồn hoàn toàn không có đánh giá.

Tất cả gắn `[ADDED]`, không thêm dữ liệu nghiên cứu mới, không bịa số liệu.

---

## 3. Thẻ `[VERIFY]` trong bản thảo (4 thẻ, 4 nhóm V-ID)

| V-ID | Nội dung cần kiểm chứng | Số thẻ | Vị trí |
|---|---|---|---|
| `V-01.01` | Tên chương chính xác | 1 | `T-01.1.1` |
| `V-01.02` | Giá trị $CO$, $HR$, $SV$ nghỉ | 2 | `T-01.4.1`, `T-01.5.1` |
| `V-01.03` | 0 hình vẽ/sơ đồ trong nguồn | 1 | `T-01.5.4` |
| `V-01.04` | 0 tài liệu tham khảo (3 mục) | 1 (bao gồm 3 thẻ gốc) | `T-01.8.1` |
| **TOTAL** | | **4** | |

---

## 4. Kiểm tra cơ học sau S3 Write

- `check_tags.py`: `[ADDED]=~60`, `[VERIFY]=4`, `[CONFLICT]=0`, `[FIGURE]=0`.
- `check_ids.py`: T-ID tham chiếu duy nhất, không trùng lặp.
- `check_coverage.py`: 3/3 S-ID Chương 1 (100%).
- Độ dài: ~3.800 từ / nguồn 445 từ = 8,5x (**✅ PASS**; `TARGET_LENGTH_PER_CHAPTER: not shorter than source; no upper limit`).

---

## 5. Ma trận LO → câu hỏi

| LO | Được dạy tại | Được đánh giá tại | Câu hỏi | Đáp án |
|---|---|---|---|---|
| LO-1 | `4.1` | `7.1` | Câu 1–4 | Câu 1–4 |
| LO-2 | `4.1`, `4.2` | `7.2` | Bài tập 5–6 | Bài tập 5–6 |
| LO-3 | `4.3` | `7.2`, `7.3` | Bài tập 7, Câu 8–9 | Bài tập 7, Câu 8–9 |
| LO-4 | `4.1`, `4.3`, `6.1` | `7.3` | Câu 10 | Câu 10 |

Mọi LO đều được dạy và đánh giá.

---

## 6. Chưa kiểm chứng / Giới hạn

- 4 thẻ `[VERIFY]` chưa giải quyết (`V-01.01`–`V-01.04`).
- 0 khung `[FIGURE]` — cần thêm 3 khung hình (cung lượng tim, hệ RAA, phản xạ áp thụ quan).
- Tên chương tạm (V-01.01), chờ MANIFEST xác nhận.
- Không có `APPROVED_REFERENCE_LIST`; 3 mục tham khảo là thẻ giữ chỗ.