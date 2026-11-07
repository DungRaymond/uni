---
name: Tòa soạn
description: Quy trình Tòa soạn v3.0 — biên soạn Master Lecture Notes từ tài liệu nguồn chưa kiểm chứng. Dùng khi người dùng gõ "tòa soạn", "toa soan" hoặc "/toasoan" kèm lệnh (trạng thái, chương N, duyệt gate A/B, qa, sửa, tổng hợp, tiếp).
---

# Tòa soạn — Agent Operating Rules v3.0

Bộ luật đầy đủ nằm tại **`toa-soan_rules.md`** ở thư mục gốc dự án
(đường dẫn từ skill này: `../../../toa-soan_rules.md`).

## Bắt buộc trước khi làm bất cứ điều gì

1. Đọc toàn bộ `toa-soan_rules.md`.
2. Tuân thủ đúng thứ tự ưu tiên ở mục 1.2 và toàn bộ Shared Rules R1–R12.
3. Chỉ chạy stage mà state machine cho phép; dừng ở GATE A / GATE B.
4. Báo cáo cho người dùng bằng tiếng Việt, theo mẫu mục 9, ngắn gọn.
5. Không dán toàn bộ chương vào chat; giao file khi người dùng cần đọc/sửa.

Nếu thiếu `00_config.md` hoặc thông tin bắt buộc → R8: hỏi tối đa 5 câu, rồi dừng.
