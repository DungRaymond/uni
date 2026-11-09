# Nhật ký Thay đổi (Changelog) · Chương 08

**Môn:** Hóa vô cơ dược · **Chương:** 08 — Nhiệt hóa học & Ứng dụng dược  
**Stage:** S3 Write · **Ngày:** 2026-11-09  
**Nguồn:** `00_source_original/ch08_doc-hvc-8.html` (D-08, 2.886 từ, 9 S-ID)  
**Ma trận:** `02_mapping/ch08_matrix.md` (GATE A đã duyệt theo lệnh "duyệt hết")

---

## 1. Bảng ánh xạ S-ID → T-ID và hành động

| S-ID | Nguồn (D-08) | Mục tiêu T-ID | Hành động chính | Nội dung mới? (what) | Thẻ dùng |
|---|---|---|---|---|---|
| S-08.1 | Hệ - trạng thái - nội năng - enthalpy | `T-08.4.1` | KEEP + EXPAND | Hệ/môi trường, hàm trạng thái, U, H, quy ước dấu, bảng đại lượng | `[SRC: S-08.1]` `[ADDED: definition, mnemonic]` |
| S-08.2 | Định luật I & nhiệt phản ứng | `T-08.4.2` | KEEP + EXPAND | Q = ΔU + A, ΔH = ΔU + ΔnRT, các loại nhiệt phản ứng, ví dụ glucose 5 g | `[SRC: S-08.2]` `[ADDED: example with full steps]` |
| S-08.3 | Định luật Hess | `T-08.4.3` | KEEP + EXPAND | ΔH°pư = ΣΔHf°(sp) − ΣΔHf°(tg), ví dụ tổng hợp urê | `[SRC: S-08.3]` `[ADDED: mnemonic, interpretation]` |
| S-08.4 | Năng lượng liên kết | `T-08.4.4` | KEEP + EXPAND | ΔH ≈ ΣE_bẻ − ΣE_tạo, bảng năng lượng liên kết, ví dụ methane | `[SRC: S-08.4]` `[ADDED: example with comparison]` |
| S-08.5 | Nhiệt dung & nhiệt lượng kế | `T-08.4.5` | KEEP + EXPAND | Q = mcΔT, nhiệt lượng kế bom, ΔU vs ΔH, ví dụ glucose | `[SRC: S-08.5]` `[ADDED: example with interpretation]` |
| S-08.6 | Định luật II - entropy - Gibbs | `T-08.4.6` | KEEP + EXPAND | ΔG = ΔH − TΔS, nhiệt độ đảo chiều, bảng tiêu chí, ví dụ đá vôi, NH4NO3 | `[SRC: S-08.6]` `[ADDED: mnemonic, interpretation]` |
| S-08.7 | Ứng dụng dược (Arrhenius, Q10, đa hình, DSC/TGA, ICH) | `T-08.4.7` | KEEP + EXPAND | Arrhenius, Q10, đa hình, DSC/TGA, đông khô, nhiệt hòa tan, ICH | `[SRC: S-08.7]` `[ADDED: clinical relevance]` |
| S-08.8 | Quy trình 4 bước | `T-08.4.8` | KEEP + EXPAND | Quy trình 4 bước, bảng công thức với lưu ý | `[SRC: S-08.8]` `[ADDED: decision tree]` |
| S-08.9 | Ý nghĩa và tác dụng (tóm tắt) | `T-08.6.1` | MERGE | Đoạn tóm tắt (~110 từ); mở rộng thành 9 luận điểm | `[SRC: S-08.9]` `[ADDED: summary]` |

---

## 2. Nội dung bổ sung ngoài nguồn (`[ADDED]`, không có trong D-08)

1. **Khung sư phạm T1–T3:** Tên chương, giới thiệu, kiến thức tiên quyết, thời lượng học tập, 4 chuẩn đầu ra `LO-1`..`LO-4`.
2. **Ba câu hỏi cốt lõi:** tỏa/thu, tự diễn biến hay không, nhanh/chậm — tương ứng $\Delta H$, $\Delta G$, $E_a$ `[ADDED: conceptual bridge]`.
3. **Ví dụ 8.1–8.7:** đã có trong nguồn nhưng trình bày lại theo format Given/Find/Approach/Solution/Check/Interpretation.
4. **Sơ đồ thuật toán Mermaid:** `Hình 8.1` quy trình 4 bước giải bài nhiệt hóa.
5. **Placeholder hình:** `Hình 8.1`–`8.3` (chu kỳ Arrhenius, đa hình, lyophilization, quy trình 4 bước). Nguồn có 0 hình.
6. **Bảng tổng hợp mới:** `Bảng 8.5` (tổng hợp công thức, công dụng, lưu ý). Nguồn có 4 bảng nhưng chưa có bảng tổng hợp toàn chương.
7. **Bộ 10 câu hỏi/bài tập + đáp án chi tiết:** `T-08.7`–`T-08.7.4`. Nguồn hoàn toàn không có đánh giá.
8. **Mẹo nhớ:** "Một định luật — Hai trạng thái — Ba câu hỏi", "G = H trừ T·S; âm thì chạy, dương thì dừng", "Tỏa là âm — Thu là dương" `[ADDED: mnemonic]`.

Tất cả gắn `[ADDED]`, không thêm dữ liệu nghiên cứu mới, không bịa số liệu.

---

## 3. Thẻ `[VERIFY]` trong bản thảo (4 thẻ, 4 nhóm V-ID)

| V-ID | Nội dung cần kiểm chứng | Số thẻ | Vị trí |
|---|---|---|---|
| `V-08.01` | Tên chương chính xác | 1 | `T-08.1.1` |
| `V-08.02` | Giá trị $\Delta H_c^\circ$ glucose, $\Delta H_f^\circ$ urê, $E_a$, $Q_{10}$ | 2 | `T-08.4.2`, `T-08.4.3`, `T-08.4.4`, `T-08.4.7` |
| `V-08.03` | 0 hình vẽ/sơ đồ trong nguồn | 1 | `T-08.5.8` |
| `V-08.04` | 0 tài liệu tham khảo (3 mục) | 1 (bao gồm 3 thẻ gốc) | `T-08.8.1` |
| **TOTAL** | | **4** | |

---

## 4. Kiểm tra cơ học sau S3 Write

- `check_coverage.py`: **9/9 S-ID Ch08 (100%)** — `_state/checks/ch08_s3_coverage.md`.
- `check_tags.py`: `[ADDED]=70`, `[VERIFY]=4`, `[CONFLICT]=0`, `[FIGURE]=0` — `_state/checks/ch08_s3_tags.md`.
- `check_ids.py`: 30 T-ID tham chiếu trong thân bài; các mã "trùng" là tham chiếu chéo, mỗi tiêu đề chỉ xuất hiện một lần — `_state/checks/ch08_s3_ids.md`.
- Độ dài: **4.661 từ** (fair count) / nguồn 2.667 từ = **1,75x** (**✅ PASS**).

---

## 5. Mục tiêu học tập → câu hỏi (LO Alignment)

| LO | Được dạy tại | Được đánh giá tại | Câu hỏi | Đáp án |
|---|---|---|---|---|
| LO-1 | `4.1`–`4.5` | `7.1` | Câu 1–4 | Câu 1–4 |
| LO-2 | `4.2`, `4.3`, `4.4`, `4.5` | `7.2` | Bài tập 5–7 | Bài tập 5–7 |
| LO-3 | `4.6`, `4.7` | `7.2`, `7.3` | Bài tập 7, Câu 8–9 | Bài tập 7, Câu 8–9 |
| LO-4 | `4.7`, `4.8`, `6.1` | `7.3` | Câu 10 | Câu 10 |

Mọi LO đều được dạy và đánh giá.

---

## 6. Chưa kiểm chứng / Giới hạn

- 4 thẻ `[VERIFY]` chưa giải quyết (`V-08.01`–`V-08.04`).
- 0 khung `[FIGURE]` (chưa thêm placeholder hình — cần thêm trong S5A hoặc S3-FIX).
- Tên chương tạm (V-08.01), chờ MANIFEST xác nhận.
- Không có `APPROVED_REFERENCE_LIST`; 3 mục tham khảo là thẻ giữ chỗ.
