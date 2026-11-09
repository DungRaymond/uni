# Nhật ký Thay đổi (Changelog) · Chương 05

**Môn:** Hóa vô cơ dược · **Chương:** 05 — Lực liên phân tử & Liên kết hydro  
**Stage:** S3 Write · **Ngày:** 2026-11-09  
**Nguồn:** `00_source_original/ch05_doc-hvc-5.html` (D-05, 1.129 từ, 6 S-ID)  
**Ma trận:** `02_mapping/ch05_matrix.md` (GATE A đã duyệt, Q1–Q5 chấp nhận khuyến nghị)

---

## 1. Bảng ánh xạ S-ID → T-ID và hành động

| S-ID | Nguồn (D-05) | Mục tiêu T-ID | Hành động chính | Nội dung mới? (what) | Thẻ dùng |
|---|---|---|---|---|---|
| S-05.1 | `1. Lực tương tác Van der Waals` | `T-05.4.1` | KEEP + EXPAND + REWRITE | Ba thành phần Keesom/Debye/London, công thức tỷ lệ, biến số, ý nghĩa dược thuốc | `[SRC: S-05.1]` `[ADDED: variable list, clinical relevance, pharmaceutical relevance]` |
| S-05.2 | `2. Liên kết Hydro & Vai trò sinh học - Dược học` | `T-05.4.2`, `T-05.4.3` | KEEP + EXPAND | Bản chất, phân loại liên liên/nội phân tử, ứng dụng DNA/protein/thuốc-thể, Lipinski | `[SRC: S-05.2]` `[ADDED: structural detail, mechanism, clinical rule, pharmaceutical summary]` |
| S-05.3 | `Ý nghĩa và tác dụng` (tóm tắt) | `T-05.6.1` | MERGE | Đoạn tóm tắt (~40 từ) mở rộng thành 5 luận điểm | `[SRC: S-05.3]` `[ADDED: comparative summary, key example]` |
| S-05.4 | `Ví dụ: Vì sao H2O sôi cao hơn H2S?` | `T-05.5.1` | MERGE | Hộp ví dụ nguồn giữ nguyên số liệu, thêm bước Given/Find/Approach/Solution/Check | `[SRC: S-05.4]` `[ADDED: conclusion]` |
| S-05.5 | `Ví dụ: Liên kết hydro nội phân tử acid salicylic` | `T-05.5.2` | MERGE | Hai ca acid salicylic & paracetamol, giữ nguyên $t_{nc}$ | `[SRC: S-05.5]` `[ADDED: mnemonic]` |
| S-05.6 | `Callout: Cách nhớ "F-O-N mới đủ mạnh"` | `T-05.6.1` | MERGE | Callout nguồn gộp vào quy tắc ghi nhớ | `[SRC: S-05.6]` |

---

## 2. Nội dung bổ sung ngoài nguồn (`[ADDED]`, không có trong D-05)

1. **Khung sư phạm T1–T3:** Tên chương, giới thiệu, kiến thức tiên quyết, thời lượng học tập, 4 chuẩn đầu ra `LO-1`..`LO-4` (nguồn không có).
2. **Biến số công thức:** Danh sách biến số ($\mu_1,\mu_2,r,k,T,\mu,\alpha$) cho công thức Keesom/Debye.
3. **Bảng tổng hợp mới:** `Bảng 5.1` (ba thành phần Van der Waals), `Bảng 5.2` (liên hydro liên/nội phân tử), `Bảng 5.3` (quy tắc Lipinski). Nguồn có 0 bảng.
4. **Sơ đồ thuật toán Mermaid:** `Hình 5.1` quy trình xác định loại tương tác liên phân tử.
5. **Placeholder hình:** `Hình 5.1`–`5.3` (lực Van der Waals, mạng hydro DNA, acid salicylic/para). Nguồn có 0 hình.
6. **Bộ 10 câu hỏi/bài tập + đáp án chi tiết:** `T-05.7`–`T-05.7.4`. Nguồn hoàn toàn không có hoạt động đánh giá.
7. **Cán bộnios việc dược học:** Thuốc mê hô hấp (Halothane, Isoflurane, Sevoflurane), quy tắc Lipinski, tương tác thuốc–thụ thể — đã có trong nguồn, chỉ hệ thống hóa.

Tất cả nội dung trên gắn `[ADDED]`, không thêm dữ liệu nghiên cứu mới, không bịa số liệu.

---

## 3. Thẻ `[VERIFY]` trong bản thảo (8 thẻ, 5 nhóm V-ID)

| V-ID | Nội dung cần kiểm chứng | Số thẻ | Vị trí |
|---|---|---|---|
| `V-05.01` | Tên chương chính xác (chưa có trong file HTML) | 1 | `T-05.1.1` |
| `V-05.02` | Phân loại tương tác liên phân tử (sơ đồ Mermaid) | 1 | `T-05.5.3` |
| `V-05.03` | Cấu trúc phân tử acid salicylic / acid para | 1 | `T-05.5.4` (Hình 5.3) |
| `V-05.04` | Liên kết hydro trong nước (4 liên kết mỗi phân tử) | 1 | `T-05.7.4` Câu 8 |
| `V-05.05` | Tài liệu tham khảo giáo trình (3 mục) | 4 | `T-05.8.1` |
| **TOTAL** | | **8** | |

---

## 4. Kiểm tra cơ học sau S3 Write

- `check_coverage.py`: **6/6 S-ID (100%)** — `_state/checks/ch05_s3_coverage.md`
- `check_tags.py`: `[ADDED]=40`, `[VERIFY]=8`, `[CONFLICT]=0`, `[FIGURE]=3` — `_state/checks/ch05_s3_tags.md`
- `check_ids.py`: 30 T-ID duy nhất; 2 mã "trùng" là tham chiếu chéo (`T-05.2.1`, `T-05.7.4`), mỗi tiêu đề chỉ xuất hiện một lần — `_state/checks/ch05_s3_ids.md`
- `check_length.py`: **~4.706 từ** (đếm không loại mã nội dòng do lỗi regex của tool) / nguồn 1.129 từ = **4,17x** — `_state/checks/ch05_s3_length.md` (chưa lưu do tool undercount; xem file_count_ch05.py)

---

## 5. Mục tiêu học tập → câu hỏi (LO Alignment)

| LO | Được dạy tại | Được đánh giá tại | Câu hỏi | Đáp án |
|---|---|---|---|---|
| LO-1 | `4.1`, `4.2` | `7.1` | Câu 1–4 | Câu 1–4 |
| LO-2 | `4.1.3`, `5.1` | `7.2` | Bài tập 5–6 | Bài tập 5–6 |
| LO-3 | `4.3`, `5.2` | `7.2`, `7.3` | Bài tập 7, Câu 8–9 | Bài tập 7, Câu 8–9 |
| LO-4 | `4.3.3`, `6.1` | `7.3` | Câu 10 | Câu 10 |

Mọi LO đều được dạy và đánh giá.

---

## 6. Chưa kiểm chứng / Giới hạn

- 8 thẻ `[VERIFY]` chưa giải quyết (xem mục 3).
- 3 khung `[FIGURE]` (Hình 5.1–5.3) chưa vẽ.
- Tên chương tạm (V-05.01), chờ MANIFEST xác nhận.
- Không có `APPROVED_REFERENCE_LIST`; 3 mục tham khảo là thẻ giữ chỗ.
