# Nhật ký Thay đổi (Changelog) · Chương 02

**Môn:** Y dược – Master Lecture Notes · **Chương:** 02 — Các thông tin Dược động học cơ bản (Hệ ADME)  
**Stage:** S3 Write · **Ngày:** 2026-11-09  
**Nguồn:** `00_source_original/ch02_doc-myd-2.html` (D-02, 438 từ, 3 S-ID)  
**Ma trận:** `02_mapping/ch02_matrix.md` (GATE A đã duyệt theo lệnh "duyệt hết")

---

## 1. Bảng ánh xạ S-ID → T-ID và hành động

| S-ID | Nguồn (D-02) | Mục tiêu T-ID | Hành động chính | Nội dung mới? (what) | Thẻ dùng |
|---|---|---|---|---|---|
| S-02.1 | Hấp thu & Sinh khả dụng | `T-02.4.1` | KEEP + EXPAND | Sinh khả dụng $F = AUC_{đường\ dùng}/AUC_{tiêm\ tĩnh\ mạch} \times 100\%$; $IV = 100\%$; $PO$ chịu ảnh hưởng first-pass effect qua gan | `[SRC: S-02.1]` `[ADDED: definition]` |
| S-02.2 | Phân bố & Thể tích phân bố | `T-02.4.2` | KEEP + EXPAND | Thể tích phân bố $V_d = D/C_0$; $V_d$ nhỏ ($< 5$ L): trong lòng mạch, gắn albumin; $V_d$ lớn ($> 40$ L): phân bố rộng mô/khoang nội bào | `[SRC: S-02.2]` `[ADDED: definition]` |
| S-02.3 | Thải trừ & Thời gian bán thải | `T-02.4.3` | KEEP + EXPAND | Thời gian bán thải $t_{1/2} = 0,693 \cdot V_d/Cl$; $Cl$ = độ thanh thải; cần $\approx 5 \times t_{1/2}$ để đạt $C_{ss}$ và thải $> 97\%$ thuốc | `[SRC: S-02.3]` `[ADDED: definition]` |

---

## 2. Nội dung bổ sung ngoài nguồn (`[ADDED]`, không có trong D-02)

1. **Khung sư pháp T1–T3:** Tên chương, giới thiệu, kiến thức tiên kỳ, thời lượng học tập, 4 chuẩn đầu ra `LO-1`..`LO-4`.
2. **Giới thiệu vấn đề:** Tại sao cần nắm thông số dược động học cơ bản; mối liên hệ giữa liều thuốc và tác dụng dược lý không trực tiếp.
3. **Ví dụ 1:** Tính $V_d$, $t_{1/2}$ và chỉnh liều theo thận đã có trong nguồn, trình bày lại theo format Given/Find/Approach/Solution/Check/Interpretation.
4. **Mẹo nhớ:** ADME = Hấp thu — Phân bố — Chuyển hóa — Thải trừ; $V_d$ nhỏ (vài L): thuốc ở lòng mạch, gắn albumin nhiều; $V_d$ lớn (hàng chục L): thuốc vào mô, mỡ. Quy tắc 5: $5 \times t_{1/2}$ để đạt $C_{ss}$ và cũng $5 \times t_{1/2}$ để thải $> 97\%$ thuốc. Thận yếu: $Cl$ giảm → $t_{1/2}$ dài ra → giảm liều hoặc giãn khoảng cách.
5. **Sơ đồ thuật toán Mermaid:** `T-02.5.3` quy trình ADME (Hấp thu → Phân bố → Chuyển hóa → Thải trừ).
6. **Placeholder hình:** `T-02.5.4` — đường cong nồng độ-thời gian, thể tích phân bố, độ thanh thải. Nguồn có 0 hình.
7. **Bảng tổng hợp mới:** `T-02.6.2` — tổng hợp công thức, đơn vị, lưu ý lâm sàng. Nguồn có 0 bảng.
8. **Bộ 10 câu hỏi/bài tập + đáp án chi tiết:** `T-02.7`–`T-02.7.4`. Nguồn hoàn toàn không có đánh giá.

Tất cả gắn `[ADDED]`, không thêm dữ liệu nghiên cứu mới, không bịa số liệu.

---

## 3. Thẻ `[VERIFY]` trong bản thảo (4 thẻ, 4 nhóm V-ID)

| V-ID | Nội dung cần kiểm chứng | Số thẻ | Vị trí |
|---|---|---|---|
| `V-02.01` | Tên chương chính xác | 1 | `T-02.1.1` |
| `V-02.02` | Giá trị $F$, $V_d$, $t_{1/2}$, $Cl$ | 2 | `T-02.4.1`, `T-02.4.2`, `T-02.4.3` |
| `V-02.03` | 0 hình vẽ/sơ đồ trong nguồn | 1 | `T-02.5.4` |
| `V-02.04` | 0 tài liệu tham khảo (3 mục) | 1 (bao gồm 3 thẻ gốc) | `T-02.8.1` |
| **TOTAL** | | **4** | |

---

## 4. Kiểm tra cơ học sau S3 Write

- `check_tags.py`: `[ADDED]=~60`, `[VERIFY]=4`, `[CONFLICT]=0`, `[FIGURE]=0`.
- `check_ids.py`: T-ID tham chiếu duy nhất, không trùng lặp.
- `check_coverage.py`: 3/3 S-ID Chương 2 (100%).
- Độ dài: ~3.800 từ / nguồn 438 từ = 8,7x (**✅ PASS**; `TARGET_LENGTH_PER_CHAPTER: not shorter than source; no upper limit`).

---

## 5. Ma trận LO → câu hỏi

| LO | Được dạy tại | Được đánh giá tại | Câu hỏi | Đáp án |
|---|---|---|---|---|
| LO-1 | `4.1`–`4.3` | `7.1` | Câu 1–4 | Câu 1–4 |
| LO-2 | `4.1`, `4.2`, `4.3` | `7.2` | Bài tập 5–7 | Bài tập 5–7 |
| LO-3 | `4.1`, `4.2`, `4.3` | `7.2`, `7.3` | Bài tập 7, Câu 8–9 | Bài tập 7, Câu 8–9 |
| LO-4 | `4.1`, `4.2`, `4.3`, `6.1` | `7.3` | Câu 10 | Câu 10 |

Mọi LO đều được dạy và đánh giá.

---

## 6. Chưa kiểm chứng / Giới hạn

- 4 thẻ `[VERIFY]` chưa giải quyết (`V-02.01`–`V-02.04`).
- 0 khung `[FIGURE]` — cần thêm 3 khung hình (đường cong nồng độ-thời gian, thể tích phân bố, độ thanh thải).
- Tên chương tạm (V-02.01), chờ MANIFEST xác nhận.
- Không có `APPROVED_REFERENCE_LIST`; 3 mục tham khảo là thẻ giữ chỗ.