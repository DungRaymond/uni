# ch01_selfcheck.md — Báo cáo Tự kiểm tra Chương 01 (Self-Check S3)

**Môn:** Hóa vô cơ dược · **Chương:** 01 · **Stage:** S3 Write · **Ngày:** 2026-11-07  
**Bản thảo đối soát:** `03_chapters/ch01_draft.md`  
**Nguồn gốc:** `00_source_original/ch01_doc-hvc-1.html` (D-01)

---

## 1. Đối soát độ phủ S-ID (S-ID Coverage)

| S-ID | Tiêu đề / Nội dung nguồn | Xuất hiện tại T-ID trong bản thảo | Trạng thái bảo toàn | Ghi chú |
|---|---|---|---|---|
| `S-01.1` | Các đại lượng đặc trưng liên kết & phân tử | `T-01.4.1`, `T-01.4.2`, `T-01.4.3`, `T-01.4.7` | ✅ Bảo toàn 100% | Giữ nguyên năng lượng, độ dài, góc, momen, ngưỡng Pauling. |
| `S-01.2` | Thuyết Lewis & Điện tích hình thức ($FC$) | `T-01.4.4`, `T-01.4.5` | ✅ Bảo toàn 100% | Giữ nguyên công thức $FC$, tiêu chuẩn cấu trúc bền, các ví dụ cộng hưởng. |
| `S-01.3` | Các ngoại lệ quan trọng của Quy tắc Bát tử | `T-01.4.6`, `T-01.4.7` | ✅ Bảo toàn 100% | Giữ nguyên 3 nhóm ngoại lệ, cơ chế $NO$ giãn mạch; bỏ cụm "và CO" theo Q1. |
| `S-01.4` | Đoạn tóm tắt "Ý nghĩa và tác dụng" | `T-01.4.7` | ✅ Bảo toàn 100% | Hợp nhất nội dung tổng kết vào mục ứng dụng Dược học. |
| `S-01.5` | Ví dụ mẫu tính $FC$ cho $CO_2$ và $NO_3^-$ | `T-01.5.1` | ✅ Bảo toàn 100% | Trình bày chuẩn hóa theo cấu trúc Given-Find-Solution-Check. |
| `S-01.6` | Ví dụ minh họa thực tế 3 ngoại lệ bát tử | `T-01.4.6`, `T-01.5.2` | ✅ Bảo toàn 100% | Chi tiết hóa phản ứng acid-base Lewis $BF_3 \cdot NH_3$, kích thích electron $PCl_5, SF_6$. |
| `S-01.7` | Quy trình 4 bước vẽ Lewis ("Cách nhớ") | `T-01.4.4`, `T-01.5.3` | ✅ Bảo toàn 100% | Chuyển thành quy trình thuật toán chính quy kèm sơ đồ Mermaid. |

- **Tổng số S-ID của chương:** 7
- **Số S-ID đã sử dụng trong bản thảo:** 7
- **Số S-ID bị bỏ sót:** **0** (100% độ phủ).

---

## 2. Kiểm kê thẻ cơ học (Tag Counts)
*(Được tính toán tự động bằng công cụ `hoa-duoc/_tools/check_tags.py`)*

| Loại thẻ | Số lượng | Vị trí xuất hiện |
|---|---|---|
| `[ADDED]` | 10 | Dựng khung cấu trúc (T1, T2, T3, T5.4, T6.1, T6.2, T7.1..T7.4, T8.1), bổ sung định nghĩa nhiệt động học và bậc liên kết |
| `[VERIFY]` | 14 | Dữ liệu số thực nghiệm (V-01, V-02), hằng số đơn vị (V-03), quy ước Pauling (V-04), dữ liệu tinh thể học (V-05), tính toán electron hóa trị (V-06), khẳng định dược lý NO (V-07), mô hình orbital d (V-08, V-10), acid Lewis (V-09), tài liệu tham khảo đề xuất (V-11) |
| `[CONFLICT]` | 0 | Không có xung đột nội bộ trong chương |
| `[FIGURE]` | 0 | Thay thế hoàn toàn bằng sơ đồ Mermaid hợp lệ |

---

## 3. Ma trận bao phủ Chuẩn đầu ra (Objective-to-Question Coverage)

| Mã Chuẩn đầu ra (LO) | Nội dung chuẩn đầu ra | Câu hỏi / Bài tập tương ứng trong T7 | Mức độ nhận thức (Bloom) |
|---|---|---|---|
| **LO-1** (Kiến thức) | Nắm vững đại lượng liên kết, quy tắc bát tử, 3 nhóm ngoại lệ | **Câu 1**, **Câu 2** | Nhận biết (Knowledge) |
| **LO-2** (Thông hiểu) | Phân biệt bản chất liên kết qua $\Delta\chi$, giải thích độ phân cực qua tổng vector $\vec{\mu}_{pt}$ | **Câu 3**, **Câu 4** | Thông hiểu (Comprehension) |
| **LO-3** (Kỹ năng) | Tính toán điện tích hình thức $FC$, xác định cấu trúc Lewis và ion phối trí bền | **Bài tập 5** ($O_3$), **Bài tập 6** ($BF_4^-$) | Vận dụng (Application) |
| **LO-4** (Phân tích) | Phân tích nguyên nhân mở rộng bát tử và liên hệ đặc tính gốc tự do $NO$ với tác động dược lý | **Câu 7** ($PCl_5$ vs $NCl_5$), **Câu 8** ($NO$ sinh học) | Phân tích & Nâng cao (Analysis & Advanced) |

- **Kết luận:** 100% Chuẩn đầu ra đều có ít nhất 2 câu hỏi/bài tập đối soát tương ứng.
- **Lời giải chi tiết:** Đã cung cấp đầy đủ các bước tính toán và biểu điểm trong mục `T-01.7.4`.

---

## 4. Kiểm tra độ dài cơ học (Length Check)
- Từ nguồn (`D-01`): **1.119 từ** (sau khi lọc bỏ mã HTML).
- Bản thảo hoàn chỉnh (`ch01_draft.md`): **2.332 từ**.
- Tỷ lệ mở rộng: **2,08x** (Đạt chuẩn, không vi phạm quy tắc nén ép nội dung R7).
