# Báo cáo tiến độ — phiên 2026-11-09

## ✅ Đã hoàn tất

### Y dược — Chương 07 (Trao đổi chất qua màng tế bào)
- `04_qa/ch07_qa_r1.md` — S4 QA Vòng 1: **PASS WITH CONDITIONS** (0 Critical / 0 Major / 5 Minor)
- Các Minor (`QA-07.01`–`QA-07.05`): dấu `$` dư sau thẻ `[SRC]` (3 lần), lỗi gõ "chất não ion", hàng trùng trong Bảng 7.1, tham chiếu sai môn "ly-duoc" — sẽ sửa ở S5A.
- Tất cả 8/8 S-ID đã phủ (100%), 4/4 phép tính khớp.
- Chương 07 hiện có đầy đủ: audit + matrix + draft + changelog + selfcheck + editlog + std_review + QA.

## ⚠️ Vấn đề cần xử lý trước khi tiếp tục

### Y dược — Chương 06 (S1 Audit SAI nội dung)
- File `01_audit/ch06_audit.md` mô tả nội dung màng tế bào / điện thế màng (khớp với nguồn ch07), **không khớp** với nguồn thực tế `ch06_doc-myd-6.html` (đo huyết áp, chuẩn bị & thao tác, ý nghĩa và sai số).
- Không thể chạy S2 Mapping cho Ch06 dựa trên audit sai nội dung.
- Cần viết lại audit cho Ch06 theo nguồn huyết áp trước khi tiếp tục S2 → S3.

## 📋 Trạng thái các module (từ STATE.md thực tế)

| Module | Tổng chương | Đã S5A | Đang tiến hành | Chưa bắt đầu |
|---|---|---|---|---|
| Lý dược (6 chương) | 6 | Ch01–Ch06 | — | — |
| Y dược (12 chương) | 12 | Ch07 | Ch06 (audit sai, cần viết lại) | Ch01–Ch05, Ch08–Ch12 |
| Hóa vô cơ dược (8 chương) | 8 | Ch01–Ch04 | Ch05–Ch08 (thiếu file MLN) | — |

## 🔄 Các lựa chọn tiếp theo (viết đi)

1. **Viết lại y-duoc Ch06 audit** theo nguồn huyết áp → rồi S2 Mapping → S3 Write → QA → S5A
2. **Bắt đầu y-duoc Ch08** (S1 Audit) — nguồn `ch08_doc-myd-8.html` đã sẵn sàng
3. **Bổ sung file MLN** cho ly-duoc Ch05–Ch06 và hoa-duoc Ch05–Ch08 (đã có editlog + std_review, thiếu MLN copy)

Bạn chọn hướng nào?