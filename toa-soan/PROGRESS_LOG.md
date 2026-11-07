# NHẬT KÝ TIẾN ĐỘ & ĐIỂM DỪNG BÀN GIAO (PROGRESS LOG) — TÒA SOẠN v3.0

**Cập nhật lần cuối:** 2026-11-07 21:50 (GMT+7)  
**Quy tắc vận hành:** [`F:/repo/uni/toa-soan_rules.md`](../toa-soan_rules.md)  
**Thứ tự ưu tiên môn học:** `hoa-duoc` (8 chương) $\to$ `ly-duoc` (6 chương) $\to$ `y-duoc` (12 chương).

---

## 1. TỔNG QUAN TIẾN ĐỘ HIỆN TẠI (`hoa-duoc` — Hóa vô cơ dược)

Bảng trạng thái chi tiết xem tại [`F:/repo/uni/toa-soan/hoa-duoc/_state/STATE.md`](./hoa-duoc/_state/STATE.md):

| Chương | Tên bài / File nguồn | Stage hiện tại | Trạng thái chi tiết | Bản phẩm cuối / Hiện hành |
|---|---|---|---|---|
| **Ch01** | Bảng tuần hoàn & Liên kết hóa học (`ch01_doc-hvc-1.html`) | **S5A (Hoàn tất)** | Đã duyệt Gate A & Gate B, QA R3 PASS, đã chuẩn hóa S5A (Mode A) | [`hoa-duoc/05_final/MLN_HoaVoCoDuoc_Ch01_v2.0_review.md`](./hoa-duoc/05_final/MLN_HoaVoCoDuoc_Ch01_v2.0_review.md) (`[ADDED]=38`, `[VERIFY]=7`) |
| **Ch02** | Cấu tạo phân tử & Thuyết VSEPR (`ch02_doc-hvc-2.html`) | **S5A (Hoàn tất)** | Đã duyệt Gate A & Gate B, QA R1 PASS (`30/30` phép tính khớp `100%`), đã chuẩn hóa S5A (Mode A) | [`hoa-duoc/05_final/MLN_HoaVoCoDuoc_Ch02_v2.0_review.md`](./hoa-duoc/05_final/MLN_HoaVoCoDuoc_Ch02_v2.0_review.md) (`[ADDED]=35`, `[VERIFY]=6`, `[FIGURE]=3`) |
| **Ch03** | Thuyết Liên kết Hóa trị (VB) & Lai hóa Orbital (`ch03_doc-hvc-3.html`) | **S4 (Đang dừng ở GATE B)** | Đã duyệt Gate A, hoàn tất S3 Write (`4.240` từ = `3,75x`) & **S4 QA Vòng 1 PASS** (`Critical=0, Major=0, Minor=5`, `36/36` phép tính khớp `100%`). **Chờ duyệt GATE B để chạy S5A.** | Bản thảo S3: [`hoa-duoc/03_chapters/ch03_draft.md`](./hoa-duoc/03_chapters/ch03_draft.md)<br/>Báo cáo QA R1: [`hoa-duoc/04_qa/ch03_qa_r1.md`](./hoa-duoc/04_qa/ch03_qa_r1.md) |
| **Ch04** | Thuyết Orbital Phân tử (MO) (`ch04_doc-hvc-4.html`) | **S1 (Ready)** | Sẵn sàng chạy S1 Audit $\to$ S2 Mapping ngay khi tiếp tục | Nguồn: [`hoa-duoc/00_source_original/ch04_doc-hvc-4.html`](./hoa-duoc/00_source_original/ch04_doc-hvc-4.html) |
| **Ch05** | Nhiệt động học hóa học (`ch05_doc-hvc-5.html`) | **S1 (Ready)** | Chờ sau Ch04 | Nguồn: `ch05_doc-hvc-5.html` |
| **Ch06** | Phức chất (`ch06_doc-hvc-6.html`) | **S1 (Ready)** | Chờ sau Ch05 | Nguồn: `ch06_doc-hvc-6.html` |
| **Ch07** | Các nguyên tố s, p và ứng dụng dược học (`ch07_doc-hvc-7.html`) | **S1 (Ready)** | Chờ sau Ch06 | Nguồn: `ch07_doc-hvc-7.html` |
| **Ch08** | Các nguyên tố d và dược chất vô cơ (`ch08_doc-hvc-8.html`) | **S1 (Ready)** | Chờ sau Ch07 | Nguồn: `ch08_doc-hvc-8.html` |

*(Hai môn `ly-duoc` — 6 chương và `y-duoc` — 12 chương đã hoàn tất S0 Config & tạo sẵn cây thư mục + công cụ kiểm tra cơ học `_tools/`, hiện ở trạng thái `PAUSED — ưu tiên hoa-duoc`).*

---

## 2. ĐIỂM DỪNG HIỆN TẠI & VIỆC CẦN LÀM NGAY TRONG PHIÊN TIẾP THEO

### Điểm dừng hiện tại
- **Chương 03 (`hoa-duoc`)** đang dừng tại **GATE B** sau khi vượt qua **Stage S4 QA Vòng 1 (`PASS`)** với:
  - `Critical = 0`, `Major = 0`, `Minor = 5` (`QA-03.01` đến `QA-03.05`: lỗi gõ chữ ngoại lai nhỏ `"nguyên소"`, `"плаtin(II)"`, khoảng trắng sau dấu chấm, đồng bộ con số `3,0 giờ` trong changelog, và 4 khung `[FIGURE: 3.2..3.5]` — tất cả đều có `Return to author = N`, xử lý trực tiếp ở S5A).
  - Độ phủ nguồn: `8/8` S-ID (`100%`), `30` mã `T-ID` duy nhất, `36/36` phép tính kiểm chứng bằng script [`hoa-duoc/_tools/check_calc_ch03.py`](./hoa-duoc/_tools/check_calc_ch03.py) khớp `100%`.

### Bước tiếp theo ngay khi mở phiên mới (Resume Checklist)
1. **Xác nhận GATE B Chương 03:**
   - Duyệt báo cáo QA Vòng 1 ([`hoa-duoc/04_qa/ch03_qa_r1.md`](./hoa-duoc/04_qa/ch03_qa_r1.md)) và duyệt gỡ các thẻ `[VERIFY]` thuộc nhóm số liệu/quy tắc chuẩn giáo trình (`V-03.01` đến `V-03.06`; giữ nguyên `V-03.07` cho 3 vị trí tài liệu tham khảo tại mục `8. Tài liệu tham khảo`).
2. **Chạy song song 2 tác vụ ngay sau khi duyệt GATE B Ch03:**
   - **Tác vụ 1 (`editor` — Stage S5A Chương 03):** Chuẩn hóa [`hoa-duoc/03_chapters/ch03_draft.md`](./hoa-duoc/03_chapters/ch03_draft.md) thành [`hoa-duoc/05_final/ch03_std_review.md`](./hoa-duoc/05_final/ch03_std_review.md) và [`hoa-duoc/05_final/MLN_HoaVoCoDuoc_Ch03_v2.0_review.md`](./hoa-duoc/05_final/MLN_HoaVoCoDuoc_Ch03_v2.0_review.md) (sửa sạch 5 lỗi Minor `QA-03.01`–`QA-03.05`, đánh số mục `3.1`–`3.8`, công thức `(3.1)`..., gỡ các thẻ `[VERIFY]` đã duyệt, chạy `check_tags.py` lưu `_state/checks/ch03_std_tags.md`).
   - **Tác vụ 2 (`auditor` — Stage S1 Audit & S2 Mapping Chương 04):** Kiểm toán [`hoa-duoc/00_source_original/ch04_doc-hvc-4.html`](./hoa-duoc/00_source_original/ch04_doc-hvc-4.html) (Thuyết MO), nối tiếp 3 câu hỏi mở từ [`hoa-duoc/_state/carryover_latest.md`](./hoa-duoc/_state/carryover_latest.md) (cấu hình MO & tính thuận từ của $O_2$, bậc liên kết phân số, liên kết ba tâm $3c\text{–}2e$ trong $B_2H_6$), xuất `01_audit/ch04_audit.md` và `02_mapping/ch04_matrix.md`, chạy `check_coverage.py` & `check_tags.py`, dừng báo cáo tại **GATE A Chương 04**.

---

## 3. QUY TẮC TỐI ƯU TỐC ĐỘ ĐÃ ÁP DỤNG (BẮT BUỘC DUY TRÌ Ở CÁC CHƯƠNG SAU)

Để tránh lỗi ngắt luồng (`stream interrupted`) hoặc chờ lâu khi biên soạn bản thảo dài:
- **Tại Stage S3 (Write) của mọi chương (`Ch04`–`Ch08`):** Luôn **chia nhỏ thành 3 subagent `author` chạy song song** (mỗi phần ~1.200–1.500 từ):
  - **Phần 1:** Mục `T1` đến `T4` (Mục tiêu, Chuẩn đầu ra, Đặt vấn đề, Lý thuyết cốt lõi).
  - **Phần 2:** Mục `T5` đến `T6` (Ví dụ giải mẫu 6 bước, Bảng/Sơ đồ hệ thống hóa, Tóm tắt & Điểm cốt lõi).
  - **Phần 3:** Mục `T7` đến `T8` (10 câu hỏi/bài tập tự lượng giá kèm lời giải từng bước, Tài liệu tham khảo `[VERIFY]`) + file `chNN_changelog.md`.
- Sau khi 3 subagent hoàn thành (~2–3 phút), Orchestrator ghép 3 phần thành `03_chapters/chNN_draft.md`, chạy 4 script kiểm tra cơ học (`check_coverage.py`, `check_tags.py`, `check_length.py`, `check_ids.py`), tạo `chNN_selfcheck.md`, cập nhật 3 file `_state/` và gọi `reviewer` chạy **Stage S4 QA**.
