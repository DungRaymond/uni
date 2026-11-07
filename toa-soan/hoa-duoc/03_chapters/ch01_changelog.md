# ch01_changelog.md — Nhật ký thay đổi bản thảo Chương 01

**Môn:** Hóa vô cơ dược · **Chương:** 01 · **Stage:** S3 Write · **Ngày:** 2026-11-07  
**Nguồn:** `00_source_original/ch01_doc-hvc-1.html` (D-01)  
**Ma trận phê duyệt:** `02_mapping/ch01_matrix_APPROVED.md`

---

## 1. Bảng ánh xạ và thay đổi chi tiết

| Target T-ID | Tên mục | Nguồn S-ID | Hành động | Nội dung mới / Bổ sung sư phạm | Thẻ sử dụng |
|---|---|---|---|---|---|
| `T-01.1.1` | Tên chương, giới thiệu & phạm vi | — | ADD | Khung giới thiệu môn học và phạm vi đối tượng sinh viên Dược năm 1–2 | `[ADDED: structural frame]` |
| `T-01.1.2` | Tiên quyết & Thời lượng học | — | ADD | Đề xuất tiên quyết và thời lượng 1,5 h theo STUDY_TIME_RULE | `[ADDED: study rule estimate]` |
| `T-01.2.1` | Chuẩn đầu ra (LO 1–4) | — | ADD | Xây dựng 4 chuẩn đầu ra (Kiến thức, Kỹ năng, Năng lực) bám sát nguồn | `[ADDED: learning objectives]` |
| `T-01.3.1` | Đặt vấn đề & Ý nghĩa thực tiễn | — | ADD | Dẫn nhập kết nối hóa đại cương với tác dụng phân tử dược chất | `[ADDED: pedagogical context]` |
| `T-01.4.1` | Các đại lượng đặc trưng liên kết | S-01.1 | KEEP, REWRITE | Bổ sung định nghĩa bậc liên kết, chuẩn hóa ký hiệu độ dài $r$ (bỏ $d_{lk}$) | `[ADDED: thermodynamics]`, `[ADDED: bond order]`, `[VERIFY: handbook value]`, `[VERIFY: bond length data]` |
| `T-01.4.2` | Góc liên kết & Momen lưỡng cực | S-01.1 | MOVE, EXPAND | Tách ký hiệu $\vec{\mu}_{lk}$ và $\vec{\mu}_{pt}$, bổ sung định nghĩa biến $q, d$ | `[VERIFY: SI constant]` |
| `T-01.4.3` | Bản chất liên kết & Hiệu độ âm điện | S-01.1 | MOVE, REWRITE | Trình bày thang Pauling dưới dạng bảng đối chiếu, làm rõ tính quy ước | `[VERIFY: Pauling scale convention]` |
| `T-01.4.4` | Thuyết Lewis & Điện tích hình thức | S-01.2, S-01.7 | MERGE, EXPAND | Gộp lý thuyết Lewis với tiêu chuẩn cấu trúc bền từ quy trình 4 bước | — |
| `T-01.4.5` | Cấu trúc cộng hưởng | S-01.2 | KEEP, REWRITE | Làm rõ bản chất giải tỏa electron $\pi$, giữ nguyên ví dụ $CO_3^{2-}, NO_3^-, SO_4^{2-}, C_6H_6$ | `[VERIFY: crystallographic data]` |
| `T-01.4.6` | Các ngoại lệ của Quy tắc Bát tử | S-01.3, S-01.6 | MERGE, REWRITE | Gộp 3 nhóm ngoại lệ cùng các ví dụ $BeCl_2, BF_3, NO, PCl_5, SF_6$; giải thích acid Lewis và gốc tự do | `[VERIFY: Lewis acidity comparison]`, `[VERIFY: valence calculation]`, `[VERIFY: modern bonding models]`, `[VERIFY: formalism]` |
| `T-01.4.7` | Ý nghĩa và ứng dụng Dược học | S-01.1, S-01.3, S-01.4, S-01.6 | MERGE, REWRITE | Hợp nhất 4 đoạn ý nghĩa trùng lặp; phân tích cơ chế giãn mạch của $NO$ qua enzym Guanylyl Cyclase; bỏ cụm "và CO" theo Q1 | `[VERIFY: pharmacology reference needed]` |
| `T-01.5.1` | Ví dụ tính toán $CO_2$ và $NO_3^-$ | S-01.5 | KEEP, REWRITE | Chuẩn hóa theo cấu trúc Given \| Find \| Approach \| Solution \| Check \| Interpretation | — |
| `T-01.5.2` | Minh họa ngoại lệ bát tử | S-01.6 | KEEP | Phân tích cơ chế phối trí $F_3B \leftarrow NH_3$ và kích thích electron chu kỳ 3 | — |
| `T-01.5.3` | Quy trình 4 bước thiết lập Lewis | S-01.7 | MOVE, REWRITE | Chuẩn hóa từ hộp "Cách nhớ" thành quy trình thuật toán kèm sơ đồ Mermaid | — |
| `T-01.5.4` | Sơ đồ hệ thống hóa liên kết | — | ADD | Sơ đồ Mermaid `graph TD` phân nhánh liên kết và ngoại lệ | `[ADDED: diagram]` |
| `T-01.6.1` | Tóm tắt nội dung cốt lõi | — | ADD | Bảng đối chiếu bản chất khoa học, điểm ghi nhớ và ý nghĩa Dược học | `[ADDED: summary]` |
| `T-01.6.2` | Hệ thống công thức & Quy tắc | — | ADD | Bảng tra cứu nhanh công thức $FC$, $\vec{\mu}$, quy tắc bảo toàn điện tích | `[ADDED: formula sheet]` |
| `T-01.7.1` | Câu hỏi nhận biết & thông hiểu | — | ADD | 4 câu hỏi trắc nghiệm phủ chuẩn đầu ra LO-1 và LO-2 | `[ADDED: assessment questions]` |
| `T-01.7.2` | Bài tập áp dụng tính toán | — | ADD | 2 bài tập tự luận tính $FC$ ($O_3$, $BF_4^-$) phủ LO-3 | `[ADDED]` |
| `T-01.7.3` | Câu hỏi phân tích & nâng cao | — | ADD | 2 câu hỏi phân tích cơ chế ($PCl_5$ vs $NCl_5$, vai trò sinh học $NO$) phủ LO-4 | `[ADDED]` |
| `T-01.7.4` | Hướng dẫn giải & Thang điểm | — | ADD | Lời giải chi tiết từng bước, kiểm tra bảo toàn electron và đơn vị | `[ADDED]` |
| `T-01.8.1` | Danh mục tài liệu tham khảo | — | ADD | 3 mục giữ chỗ tài liệu tham khảo theo nhóm chủ đề chuẩn R4 | `[ADDED: reference section frame]`, 3×`[VERIFY: reference needed for ...]` |

---

## 2. Ghi chú về các xử lý đặc biệt (Tuân thủ R5, R6)
- **Xử lý Issue I-01:** Bỏ cụm từ "và CO" theo phê duyệt Gate A (Q1). Không bịa đặt cơ chế độc tính của CO vì CO không phải là ngoại lệ bát tử của chương này.
- **Xử lý Issue I-07 & I-15:** Thống nhất ký hiệu độ dài liên kết là $r$, đơn vị SI picomet ($\text{pm}$) đi kèm $\text{Å}$ trong ngoặc theo đúng phê duyệt Q2.
- **Xử lý Issue I-08 & I-09:** Tách bạch ký hiệu $\vec{\mu}_{lk}$ (momen liên kết) và $\vec{\mu}_{pt}$ (momen toàn phân tử = tổng vector), định nghĩa rõ biến $q, d$ trong hệ SI.
- **Không rút gọn nội dung (R7):** Toàn bộ các giá trị năng lượng (839, 614, 348), độ dài (1,54, 1,34, 1,20), ngưỡng $\Delta\chi$ (0,4; 1,7), hằng số Debye ($3,336 \times 10^{-30}$), các công thức Lewis mẫu ($CO_2, NO_3^-, CO_3^{2-}, SO_4^{2-}, C_6H_6, BeCl_2, BF_3, NO, PCl_5, SF_6, H_2SO_4$) đều được giữ nguyên vẹn 100%.
