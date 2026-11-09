# Nhật ký Thay đổi (Changelog) · Chương 07

**Môn:** Hóa vô cơ dược · **Chương:** 07 — Đồng phân Phức chất & Ý nghĩa Dược lý  
**Stage:** S3 Write · **Ngày:** 2026-11-09  
**Nguồn:** `00_source_original/ch07_doc-hvc-7.html` (D-07, 2.643 từ, 9 S-ID)  
**Ma trận:** `02_mapping/ch07_matrix.md` (GATE A đã duyệt theo lệnh "duyệt hết")

---

## 1. Bảng ánh xạ S-ID → T-ID và hành động

| S-ID | Nguồn (D-07) | Mục tiêu T-ID | Hành động chính | Nội dung mới? (what) | Thẻ dùng |
|---|---|---|---|---|---|
| S-07.1 | Tổng quan & Phân loại Hai Nhánh Lớn | `T-07.4.1` | KEEP + EXPAND | Bảng phân loại tổng thể (cấu trúc & lập thể), tiêu chí phân biệt | `[SRC: S-07.1]` `[ADDED: definition, interpretation]` |
| S-07.2 | Đồng phân Ion hóa | `T-07.4.2` | KEEP + EXPAND | Nguyên lý, ví dụ $[Co(NH_3)_5Br]SO_4$ vs $[Co(NH_3)_5(SO_4)]Br$, kiểm tra kết tủa | `[SRC: S-07.2]` `[ADDED: pharmaceutical relevance, interpretation]` |
| S-07.3 | Đồng phân Solvat hóa / Hydrat hóa | `T-07.4.3` | KEEP + EXPAND | 3 đồng phân hydrat của Chromium(III) chloride, đo độ dẫn電/$AgCl$ | `[SRC: S-07.3]` `[ADDED: application, interpretation]` |
| S-07.4 | Đồng phân Liên kết | `T-07.4.4` | KEEP + EXPAND | Nitro/Nitrito, Thiocyanato/Isothiocyanato; HSAB chọn lọc | `[SRC: S-07.4]` `[ADDED: HSAB connection, interpretation]` |
| S-07.5 | Đồng phân Phối trí | `T-07.4.5` | KEEP + EXPAND | $[Co(NH_3)_6][Cr(CN)_6]$ vs $[Cr(NH_3)_6][Co(CN)_6]$ | `[SRC: S-07.5]` `[ADDED: interpretation]` |
| S-07.6 | Đồng phân Hình học | `T-07.4.6` | KEEP + EXPAND | cis/trans, fac/mer, $[MA_2B_2C_2]$; cisplatin/transplatin dược lý | `[SRC: S-07.6]` `[ADDED: pharmaceutical relevance, interpretation]` |
| S-07.7 | Đồng phân Quang học | `T-07.4.7` | KEEP + EXPAND | Đối quang Δ/Λ, R/S, $[Co(en)_3]^{3+}$, $[Fe(ox)_3]^{3-}$ | `[SRC: S-07.7]` `[ADDED: nuanced explanation, interpretation]` |
| S-07.8 | Ý nghĩa Dược lý Tổng hợp | `T-07.4.8` | KEEP + EXPAND | Bảng 6 loại đồng phân & ý nghĩa dược lý/lâm sàng | `[SRC: S-07.8]` `[ADDED: summary table]` |
| S-07.9 | Ý nghĩa và tác dụng (tóm tắt) | `T-07.6.1` | MERGE | Đoạn tóm tắt (~40 từ); mở rộng thành 6 luận điểm | `[SRC: S-07.9]` `[ADDED: clinical summary]` |

---

## 2. Nội dung bổ sung ngoài nguồn (`[ADDED]`, không có trong D-07)

1. **Khung sư phạm T1–T3:** Tên chương, giới thiệu, kiến thức tiên quyết, thời lượng học tập, 4 chuẩn đầu ra `LO-1`..`LO-4`.
2. **Ví dụ mới:** `Ví dụ 7.1` (cisplatin/transplatin), `Ví dụ 7.2` (đồng phân quark học Δ/Λ) — dựa trên nội dung nguồn nhưng trình bày theo format Given/Find/Approach/Solution/Check/Interpretation.
3. **Sơ đồ thuật toán Mermaid:** `Hình 7.1` quy trình xác định loại đồng phân.
4. **Placeholder hình:** `Hình 7.1`–`7.3` (cơ cấu cisplatin/transplatin, đối quang Δ/Λ, sơ đồ phân loại). Nguồn có 0 hình.
5. **Bảng tổng hợp mới:** `Bảng 7.3` (tổng hợp loại đồng phân, tiêu chí, ý nghĩa dược lý). Nguồn có 8 bảng nhưng chưa có bảng tổng hợp toàn chương.
6. **Bộ 10 câu hỏi/bài tập + đáp án chi tiết:** `T-07.7`–`T-07.7.4`. Nguồn hoàn toàn không có đánh giá.
7. **Mẹo nhớ:** "cis kề – trans đối", quy trình 3 bước kiểm tra quark học.

Tất cả gắn `[ADDED]`, không thêm dữ liệu nghiên cứu mới, không bịa số liệu.

---

## 3. Thẻ `[VERIFY]` trong bản thảo (6 thẻ, 4 nhóm V-ID)

| V-ID | Nội dung cần kiểm chứng | Số thẻ | Vị trí |
|---|---|---|---|
| `V-07.01` | Tên chương chính xác | 1 | `T-07.1.1` |
| `V-07.02` | Phân loại đồng phân & ý nghĩa dược lý | 3 | `T-07.4.1`, `T-07.4.8`, `T-07.5.3` |
| `V-07.03` | 0 hình vẽ/sơ đồ trong nguồn | 1 | `T-07.5.4` |
| `V-07.04` | 0 tài liệu tham khảo (3 mục) | 1 (bao gồm 3 thẻ gốc) | `T-07.8.1` |
| **TOTAL** | | **6** | |

---

## 4. Kiểm tra cơ học sau S3 Write

- `check_coverage.py`: **9/9 S-ID Ch07 (100%)** — `_state/checks/ch07_s3_coverage.md`. (Báo cáo "Missing S-06.9" là false positive do chéo tham chiếu `S-06.9` từ Ch06 trong bản thảo Ch07; không phải S-ID của Ch07 bị bỏ sót.)
- `check_tags.py`: `[ADDED]=58`, `[VERIFY]=6`, `[CONFLICT]=0`, `[FIGURE]=3` — `_state/checks/ch07_s3_tags.md`
- `check_ids.py`: 33 T-ID tham chiếu trong thân bài; các mã "trùng" là tham chiếu chéo, mỗi tiêu đề chỉ xuất hiện một lần — `_state/checks/ch07_s3_ids.md`
- Độ dài: **6.343 từ** (fair count, giữ nội dung công thức) / nguồn 2.609 từ = **2,43x** (**✅ PASS**, không ngắn hơn nguồn)

---

## 5. Mục tiêu học tập → câu hỏi (LO Alignment)

| LO | Được dạy tại | Được đánh giá tại | Câu hỏi | Đáp án |
|---|---|---|---|---|
| LO-1 | `4.1`–`4.5` | `7.1` | Câu 1–4 | Câu 1–4 |
| LO-2 | `4.6`, `4.7` | `7.2` | Bài tập 5–7 | Bài tập 5–7 |
| LO-3 | `4.6`, `4.8` | `7.2`, `7.3` | Bài tập 7, Câu 8–9 | Bài tập 7, Câu 8–9 |
| LO-4 | `4.7`, `4.8`, `6.1` | `7.3` | Câu 10 | Câu 10 |

Mọi LO đều được dạy và đánh giá.

---

## 6. Chưa kiểm chứng / Giới hạn

- 6 thẻ `[VERIFY]` chưa giải quyết (`V-07.01`–`V-07.04`).
- 3 khung `[FIGURE]` (Hình 7.1–7.3) chưa vẽ.
- Tên chương tạm (V-07.01), chờ MANIFEST xác nhận.
- Không có `APPROVED_REFERENCE_LIST`; 3 mục tham khảo là thẻ giữ chỗ.
