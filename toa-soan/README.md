# Tòa soạn — bản biên soạn lại

Workspace biên soạn lại tài liệu hiện có theo **Tòa soạn v3.0** (`../toa-soan_rules.md`).

- Mỗi môn một thư mục riêng: `ly-duoc/`, `y-duoc/`, `hoa-duoc/`.
- `00_source_original/` là bản clone READ-ONLY từ `data/content/<môn>.json`.
- `01_audit/` … `05_final/` trống cho tới khi chạy stage tương ứng.
- `_state/` là bộ nhớ duy nhất giữa các phiên: STATE, decisions, carry-over, glossary, verification.

## Ánh xạ

| Nguồn hiện tại | Bản clone |
|---|---|
| Doc “Chuyên đề/Chương …” | `00_source_original/chNN_<slug>.html` (chương ứng viên) |
| Doc “Từ khóa thường gặp” (glossary) | `00_source_original/refs/` |
| Doc “Nguồn học tập và tài liệu tham khảo” | `00_source_original/refs/` |
| Question/bài tập | `00_source_original/exercises/` (nguồn cho T7) |

## Lệnh

```bash
# xem trạng thái
tòa soạn trạng thái

# chạy audit + mapping chương N của một môn
tòa soạn ly-duoc chương 1
```

Quy trình dừng ở **GATE A** sau S2, chờ duyệt trước khi viết.
