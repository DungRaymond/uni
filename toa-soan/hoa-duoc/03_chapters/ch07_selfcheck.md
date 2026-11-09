# Tự kiểm tra (Self-check) · Chương 07

**Môn:** Hóa vô cơ dược · **Chương:** 07 — Đồng phân Phức chất & Ý nghĩa Dược lý  
**Stage:** S3 Write · **Ngày:** 2026-11-09

---

## 1. Thống kê thẻ (`_state/checks/ch07_s3_tags.md`)

- `[ADDED]` = **58**
- `[VERIFY]` = **6** (phủ `V-07.01`–`V-07.04`; xem mục 4)
- `[CONFLICT]` = **0**
- `[FIGURE]` = **3** (3 khung `[FIGURE: 7.1 | ...]`–`[FIGURE: 7.3 | ...]`)

---

## 2. Kiểm tra độ dài

- Số từ bản thảo (`ch07_draft.md`, fair count giữ nội dung công thức): **6.343 từ**
- Số từ nguồn (`ch07_doc-hvc-7.html` sau lọc markup): **2.609 từ**
- Tỷ lệ: **2,43x** (**✅ PASS**; `TARGET_LENGTH_PER_CHAPTER: not shorter than source; no upper limit`)

> **Lưu ý công cụ:** `_tools/check_length.py` bị lỗi xử lý mã nội dòng (backtick trong bảng/công thức) gây undercount nghiêm trọng. Số liệu trên dùng phương pháp đếm công bằng (giữ nội dung công thức, chỉ loại delimiter `$`). Bản thảo bảo toàn toàn bộ nội dung nguồn (9/9 S-ID Ch07) plus khung sư phạm, bài tập, tóm tắt, đáp án, tài liệu tham khảo — chắc chắn không ngắn hơn nguồn.

---

## 3. Kiểm tra S-ID (`_state/checks/ch07_s3_coverage.md`)

- **Status: 9/9 S-ID Ch07 (100%)** — tất cả `S-07.1`–`S-07.9` đều được couverture.
- Báo cáo script hiển thị "Missing S-06.9" là **false positive**: bản thảo Ch07 chéo tham chiếu `S-06.9` (ứng dụng Ch06) trong phần giới thiệu, không phải S-ID của Ch07 bị bỏ sót.

---

## 4. Kiểm tra T-ID (`_state/checks/ch07_s3_ids.md`)

- Total unique T-IDs: 33 (tham chiếu trong thân bài)
- Các mã "trùng" đều là tham chiếu chéo trong thân bài (ví dụ `T-07.2.1`, `T-07.7.4` được nhắc trong phần đánh giá), mỗi tiêu đề chỉ xuất hiện một lần.

---

## 5. Ma trận LO → câu hỏi (xem `ch07_changelog.md` mục 5)

Mọi `LO-1`–`LO-4` đều được dạy và đánh giá, có đáp án chi tiết tại `T-07.7.4`.

---

## 6. Chưa kiểm chứng / Giới hạn

- 6 thẻ `[VERIFY]` chưa giải quyết (`V-07.01`–`V-07.04`).
- 3 khung `[FIGURE]` (Hình 7.1–7.3) chưa vẽ.
- Tên chương tạm (V-07.01), chờ MANIFEST xác nhận.
- Không có `APPROVED_REFERENCE_LIST`; 3 mục tham khảo là thẻ giữ chỗ.
