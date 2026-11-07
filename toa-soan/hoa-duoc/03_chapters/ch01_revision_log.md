# ch01_revision_log.md — Nhật ký Sửa đổi Bản thảo (S3-FIX · Vòng 1)

**Môn:** Hóa vô cơ dược · **Chương:** 01 · **Stage:** S3-FIX · **Ngày:** 2026-11-07  
**Đầu vào:** `03_chapters/ch01_draft.md`, `04_qa/ch01_qa_r1.md`  
**Đầu ra:** `03_chapters/ch01_v2.md`

---

## 1. Bảng xử lý các vấn đề từ Báo cáo QA Vòng 1 (`Return to author = Y`)

| Issue ID | T-ID | Mức độ | Nội dung đã thay đổi (What changed) | Lý do khắc phục (Why) | Trạng thái |
|---|---|---|---|---|---|
| **QA-01.01** | `T-01.7.3`, `T-01.7.4` | **Critical** | Loại bỏ hoàn toàn thông số Dược động học $t_{1/2} = 1\text{–}5\text{ giây}$ khỏi Câu hỏi 8a và Đáp án 8a; chỉnh lại câu hỏi tập trung vào tổng số electron hóa trị lẻ (11 e), tính thuận từ, hoạt tính gốc tự do và cơ chế hoạt hóa Guanylyl Cyclase như trong nguồn. | Tuân thủ tuyệt đối `DOMAIN_RULES` (cấm bổ sung thông số PK $t_{1/2}$ khi không có trong tài liệu nguồn). | ✅ Đã khắc phục |
| **QA-01.02** | `T-01.4.7` | **Critical** | Loại bỏ câu đề cập đến thuốc điều trị cụ thể (*Nitroglycerin*) và chỉ định lâm sàng (*"điều trị cơn đau thắt ngực"*) cùng chi tiết chuỗi cGMP/PKG ngoài nguồn tại Mục 4.7.2; chỉ giữ đúng cơ chế trong nguồn: $NO$ khuếch tán vào cơ trơn mạch máu, hoạt hóa enzym Guanylyl Cyclase làm giãn cơ trơn mạch máu (hạ huyết áp). | Tuân thủ tuyệt đối `DOMAIN_RULES` (cấm bổ sung tên thuốc lâm sàng và chỉ định điều trị ngoài nguồn). | ✅ Đã khắc phục |
| **QA-01.03** | `T-01.8.1` | **Critical** | Gỡ bỏ tên 4 giáo trình cụ thể (Bộ Y tế, Miessler, Chang, Rang & Dale) khi chưa có trong `APPROVED_REFERENCE_LIST`; thay bằng 3 mục giữ chỗ chuẩn `[VERIFY: reference needed for <topic>]`. | Tuân thủ Quy tắc Liêm chính R4: chỉ trích dẫn tài liệu có trong nguồn hoặc `APPROVED_REFERENCE_LIST`; thiếu thì đánh dấu `[VERIFY: reference needed for <topic>]`. | ✅ Đã khắc phục |
| **QA-01.04** | `T-01.4.1` đến `T-01.7.4` | **Major** | Bổ sung đầy đủ các thẻ `[ADDED: ...]` cục bộ tại tất cả các đoạn giải thích sư phạm mở rộng (4.1.2 thế năng & đổi đơn vị, 4.2.1 steric fit, 4.2.2 định nghĩa biến $q, \vec{d}$, 4.2.3 dạng hình học, 4.3 định nghĩa độ âm điện, 4.4.1–4.4.3 ngữ cảnh & định nghĩa FC, 4.5.1–4.5.2 giải thích cộng hưởng, 4.6.1–4.6.3 định nghĩa Acid Lewis / gốc tự do / thuận từ / chu kỳ 2 vs 3, 4.7.1 tính ưa nước/lipid, 5.1 khung Given-Find, 5.3 sơ đồ Mermaid, và các mục con 7.1, 7.2, 7.3, 7.4); đồng thời loại bỏ các con số ngoài nguồn không cần thiết ($\mu \approx 1,85\text{ D}, 1,47\text{ D}$, $\Delta\chi$ riêng lẻ) để đảm bảo không thêm dữ liệu số học mới theo R2. | Tuân thủ Quy tắc Gắn thẻ xuất xứ R2: mọi câu chữ giải thích chuẩn giáo khoa, ví dụ và câu hỏi do tác giả biên soạn thêm phải được gắn thẻ `[ADDED]` rõ ràng, và không tự thêm số liệu thực nghiệm mới. | ✅ Đã khắc phục |
| **QA-01.05** | `T-01.8.1` | **Minor** | Thay thẻ ghép không chuẩn `[ADDED / VERIFY: references needed]` bằng thẻ khung `[ADDED: reference section frame]` và các thẻ đơn chuẩn `[VERIFY: reference needed for ...]`. | Chuẩn hóa cú pháp thẻ theo R2/R4 để công cụ kiểm tra cơ học (`check_tags.py`) đếm chính xác 100%. | ✅ Đã khắc phục |

---

## 2. Ghi chú đối với vấn đề không yêu cầu sửa ở S3-FIX (`Return to author = N`)
- **QA-01.06** (`Minor`, `Return to author = N`): Giữ nguyên theo khuyến nghị của QA để xử lý định dạng hộp/placeholder tại công đoạn chuẩn hóa S5A sau khi qua Gate B.
