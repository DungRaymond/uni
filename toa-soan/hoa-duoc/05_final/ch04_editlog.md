# Nhật ký Biên tập Chuẩn hóa (S5A Edit Log) · Chương 04

- **Chế độ xuất bản:** `Mode A — Per-chapter standardization (REVIEW DRAFT)`
- **Dự án:** Hóa vô cơ dược – Master Lecture Notes
- **Chương:** Chương 04 — Thuyết Orbital Phân tử (MO) & Phân tích Năng lượng LCAO
- **Đầu vào:** `03_chapters/ch04_draft.md` (đã qua S4 QA Vòng 3 `04_qa/ch04_qa_r3.md` với phán quyết **PASS**, `Critical = 0`, `Major = 0`, `Minor = 1`; phê duyệt Gate B tại `_state/decisions.md` ngày `2026-11-08`, lệnh người dùng nguyên văn: *"duyệt"*)
- **Đầu ra:**
  - `05_final/ch04_std_review.md`
  - `05_final/MLN_HoaVoCoDuoc_Ch04_v2.0_review.md` (bản sao byte-identical)
- **Ngày thực hiện:** 2026-11-08
- **Người thực hiện:** Subagent `editor` (Stage S5A, Mode A)

---

## A. Bảng ánh xạ `T-ID` → Số mục cuối (T-ID to Final Section Numbering)

Toàn bộ **47** mã `T-ID` trên tiêu đề của `03_chapters/ch04_draft.md` đã được thay thế bằng hệ thống đánh số phân cấp chính thức của Chương 4 (tối đa 4 cấp: `4.x` → `4.x.y` → `4.x.y.z`). Không còn chuỗi `{T-...}` nào trong đầu ra.

| STT | Mã `T-ID` (trong `ch04_draft.md`) | Số mục chính thức (trong `ch04_std_review.md`) | Cấp tiêu đề |
|---|---|---|---|
| 1 | `T-04.1` | `4.1` | Cấp 2 |
| 2 | `T-04.1.1` | `4.1.1` | Cấp 3 |
| 3 | `T-04.1.2` | `4.1.2` | Cấp 3 |
| 4 | `T-04.2` | `4.2` | Cấp 2 |
| 5 | `T-04.2.1` | `4.2.1` | Cấp 3 |
| 6 | `T-04.3` | `4.3` | Cấp 2 |
| 7 | `T-04.3.1` | `4.3.1` | Cấp 3 |
| 8 | `T-04.4` | `4.4` | Cấp 2 |
| 9 | `T-04.4.1` | `4.4.1` | Cấp 3 |
| 10 | `T-04.4.1.1` | `4.4.1.1` | Cấp 4 |
| 11 | `T-04.4.1.2` | `4.4.1.2` | Cấp 4 |
| 12 | `T-04.4.1.3` | `4.4.1.3` | Cấp 4 |
| 13 | `T-04.4.2` | `4.4.2` | Cấp 3 |
| 14 | `T-04.4.2.1` | `4.4.2.1` | Cấp 4 |
| 15 | `T-04.4.2.2` | `4.4.2.2` | Cấp 4 |
| 16 | `T-04.4.2.3` | `4.4.2.3` | Cấp 4 |
| 17 | `T-04.4.3` | `4.4.3` | Cấp 3 |
| 18 | `T-04.4.3.1` | `4.4.3.1` | Cấp 4 |
| 19 | `T-04.4.3.2` | `4.4.3.2` | Cấp 4 |
| 20 | `T-04.4.3.3` | `4.4.3.3` | Cấp 4 |
| 21 | `T-04.4.4` | `4.4.4` | Cấp 3 |
| 22 | `T-04.4.4.1` | `4.4.4.1` | Cấp 4 |
| 23 | `T-04.4.4.2` | `4.4.4.2` | Cấp 4 |
| 24 | `T-04.4.4.3` | `4.4.4.3` | Cấp 4 |
| 25 | `T-04.4.4.4` | `4.4.4.4` | Cấp 4 |
| 26 | `T-04.4.5` | `4.4.5` | Cấp 3 |
| 27 | `T-04.4.5.1` | `4.4.5.1` | Cấp 4 |
| 28 | `T-04.4.5.2` | `4.4.5.2` | Cấp 4 |
| 29 | `T-04.4.5.3` | `4.4.5.3` | Cấp 4 |
| 30 | `T-04.4.6` | `4.4.6` | Cấp 3 |
| 31 | `T-04.5` | `4.5` | Cấp 2 |
| 32 | `T-04.5.1` | `4.5.1` | Cấp 3 |
| 33 | `T-04.5.2` | `4.5.2` | Cấp 3 |
| 34 | `T-04.5.3` | `4.5.3` | Cấp 3 |
| 35 | `T-04.5.4` | `4.5.4` | Cấp 3 |
| 36 | `T-04.5.5` | `4.5.5` | Cấp 3 |
| 37 | `T-04.5.6` | `4.5.6` | Cấp 3 |
| 38 | `T-04.6` | `4.6` | Cấp 2 |
| 39 | `T-04.6.1` | `4.6.1` | Cấp 3 |
| 40 | `T-04.6.2` | `4.6.2` | Cấp 3 |
| 41 | `T-04.7` | `4.7` | Cấp 2 |
| 42 | `T-04.7.1` | `4.7.1` | Cấp 3 |
| 43 | `T-04.7.2` | `4.7.2` | Cấp 3 |
| 44 | `T-04.7.3` | `4.7.3` | Cấp 3 |
| 45 | `T-04.7.4` | `4.7.4` | Cấp 3 |
| 46 | `T-04.8` | `4.8` | Cấp 2 |
| 47 | `T-04.8.1` | `4.8.1` | Cấp 3 |

---

## B. Bảng nhật ký chỉnh sửa chuẩn hóa & phi-typographic (Standardization & Non-Typographic Edit Log)

| # | Vị trí (mục cuối) | Trước | Sau | Lý do |
|---|---|---|---|---|
| 1 | `4.4.3.2` (dòng 123 đầu vào) | "Trong dãy oxygen, $BO$ bán nguyên vì electron độc thân chỉ chiếm một trong hai MO $\pi^*$ suy biến, làm giảm nửa đơn vị bậc liên kết: $O_2^+$ 2,5; $O_2^-$ 1,5 (còn $O_2^{2-}$ có $BO = 1$, số nguyên)." | "Trong dãy oxygen, chỉ $O_2^+$ ($BO = 2,5$) và $O_2^-$ ($BO = 1,5$) có bậc liên kết phân số vì electron lẻ chỉ chiếm một trong hai MO $\pi^*$ suy biến, làm giảm nửa đơn vị bậc liên kết; $O_2$ ($BO = 2$) và $O_2^{2-}$ ($BO = 1$) là số nguyên." | Sửa `QA3-04.01` (Minor): giới hạn phát biểu bán nguyên chỉ cho $O_2^+$/$O_2^-$; $O_2$ ($BO=2$) và $O_2^{2-}$ ($BO=1$) là số nguyên. Không thay đổi giá trị số. |
| 2 | `4.5.1` (dòng 217 đầu vào) | "Trong dãy oxygen, $BO$ bán nguyên do electron lẻ chỉ chiếm một trong hai orbital suy biến $\pi^*_{2p_x}$, $\pi^*_{2p_y}$ — trả lời carry-over (b) `T-03.4.6`; riêng $H_2^+$ ($BO=0,5$) có bậc bán nguyên do thiếu một electron để đủ cặp trên $\sigma_{1s}$ duy nhất." | "Trong dãy oxygen, chỉ $O_2^+$ ($BO = 2,5$) và $O_2^-$ ($BO = 1,5$) có bậc liên kết phân số do electron lẻ chỉ chiếm một trong hai orbital suy biến $\pi^*_{2p_x}$, $\pi^*_{2p_y}$; $O_2$ ($BO = 2$) và $O_2^{2-}$ ($BO = 1$) là số nguyên. Riêng $H_2^+$ ($BO=0,5$) có bậc bán nguyên do thiếu một electron để đủ cặp trên $\sigma_{1s}$ duy nhất." | Sửa `QA3-04.01` (Minor): cùng lý do trên. |
| 3 | `4.6.1` (dòng 340 đầu vào) | "trong dãy oxygen, $BO$ bán nguyên do electron lẻ trên orbital $\pi^*$ suy biến (riêng $H_2^+$: thiếu một electron trên $\sigma_{1s}$)." | "trong dãy oxygen, chỉ $O_2^+$ ($BO = 2,5$) và $O_2^-$ ($BO = 1,5$) có bậc liên kết phân số do electron lẻ trên orbital $\pi^*$ suy biến; $O_2$ ($BO = 2$) và $O_2^{2-}$ ($BO = 1$) là số nguyên (riêng $H_2^+$: thiếu một electron trên $\sigma_{1s}$)." | Sửa `QA3-04.01` (Minor): cùng lý do trên. |
| 4 | Toàn chương | 44 thẻ `[VERIFY: ...]` (12 nhóm V-ID) | 5 thẻ `[VERIFY: ...]` (2 nhóm V-ID) | Gỡ 39 thẻ theo phê duyệt Gate B (xem mục C). Không thay đổi nội dung, chỉ xóa thẻ giữ chỗ xác thực. |

---

## C. Bảng các thẻ `[VERIFY]` đã gỡ theo phê duyệt Gate B của người dùng (User-Approved Tag Resolutions)

Tổng 44 thẻ `[VERIFY]` trong đầu vào → gỡ **39 thẻ** (10 nhóm), giữ **5 thẻ** (2 nhóm).

| Nhóm V-ID | Số thẻ gỡ | Lý do giữ/gỡ |
|---|---|---|
| `V-04.01` (O2 paramagnetism) | 5 | Dữ kiện chuẩn, trực tiếp từ nguồn `S-04.4` |
| `V-04.02` (BO values) | 4 | Dữ kiện chuẩn, trực tiếp từ nguồn `S-04.3` |
| `V-04.03` (N2 bond energy) | 2 | Dữ kiện nguồn, gắn `[VERIFY]` ban đầu vì thiếu trích dẫn gốc; duyệt gỡ vì không thêm con số mới |
| `V-04.05` (CO-Hb affinity) | 5 | Dữ kiện nguồn, tuân thủ `DOMAIN_RULES` (không thêm liều/chỉ định/PK) |
| `V-04.06` (CO MO diagram, HOMO on C) | 5 | Dữ kiện nguồn |
| `V-04.07` (MO ordering, s-p mixing) | 7 | Cơ chế MO chuẩn, trực tiếp từ nguồn `S-04.4` |
| `V-04.09` (B2H6 electron count, 3c-2e bonding) | 7 | Kiến thức giáo trình chuẩn, đã duyệt tại Gate A (Q1) |
| `V-04.10` (He2 bond order) | 1 | Diễn đạt đã hiệu chỉnh ("không tạo liên kết cộng hóa trị bền") |
| `V-04.11` (normalization, LCAO energy) | 2 | Công thức chuẩn LCAO, đã bổ sung theo Gate A (Q2) |
| `V-04.12` (mnemonic correction) | 3 | Đã sửa vế sai "BO lẻ → thuận từ" tại Gate A (Q3) |
| **Tổng gỡ** | **39** | |

---

## D. Danh sách các thẻ `[VERIFY]` còn giữ lại trong bản REVIEW DRAFT

| V-ID | Số thẻ | Vị trí (mục cuối) | Lý do giữ |
|---|---|---|---|
| `V-04.04` | 2 | `4.4.2.1` (dòng 85 đầu vào), `4.7.4` Câu 2 (dòng 452 đầu vào) | Ngưỡng $\Delta E$ còn hai giá trị chưa chốt ($10$–$14$ eV theo `S-04.2` và $\le 12$ eV cho $2p$–$2s$ theo `S-04.4`); cần chuyên gia quyết (mục H của QA R3). |
| `V-04.08` | 3 | `4.8.1` (3 mục tài liệu tham khảo, dòng 548–550 đầu vào) | `APPROVED_REFERENCE_LIST: none` (Rule R4), không được bịa nguồn; chờ người dùng cung cấp giáo trình chuẩn. |
| **TOTAL GỮ** | **5** | | |

---

## E. Đề xuất chỉnh sửa nội dung (Recommended Content Changes)

Các điểm dưới đây là "items for human expert decision" từ mục H của `04_qa/ch04_qa_r3.md`. **Không được sửa trong S5A** (định nghĩa là chỉnh sửa nội dung, cấm theo Rule 7.6). Ghi lại để người dùng/chuyên gia quyết định sau này:

1. **`QA3-04.01` (bậc bán nguyên dãy oxygen):** đã xử lý tại S5A (mục B, hàng 1–3), nhưng cần xác nhận cách viết mới được chấp nhận.
2. **Cụm "quang phổ phức chất" (dòng 9 đầu vào):** nguồn `S-04.6` chỉ nói "hấp thụ ánh sáng", không nói "phức chất"; cần chốt: giữ như câu nối Chương 3/6, đổi thành "quang phổ/hấp thụ ánh sáng", hay thêm `[VERIFY]`.
3. **Bảng 4.4, hàng "Ba điều kiện tổ hợp AO":** câu "Thiếu một điều kiện thì xen phủ hiệu dụng bằng 0" quá tuyệt đối; cân nhắc đổi thành "không tạo MO liên kết hiệu quả/không tương tác đáng kể".
4. **Ngưỡng $\Delta E$ (`V-04.04`):** chốt cách trình bày giữa $\le 10$–$14$ eV (`S-04.2`) và $\le 12$ eV cho $2p$–$2s$ (`S-04.4`) — giữ cả hai kèm chú thích (hiện tại) hay dùng một ngưỡng duy nhất.
5. **Dữ kiện ngoài nguồn:** xác nhận $E_{lk}(N_2)\approx945$ kJ/mol, CO–Hb bền gấp 200–250 lần, $O_2$ lỏng thuận từ, $B_2H_6$ $3c$–$2e$, $He_2$ van der Waals, CO HOMO trên C (`V-04.01`–`V-04.10`).
6. **Tài liệu tham khảo (`V-04.08`):** cung cấp giáo trình chuẩn để thay ba thẻ `[VERIFY]` và áp dụng Vancouver.
7. **Sản xuất hình:** 5 placeholder Hình 4.2–4.6 cần vẽ; Hình 4.1 (Mermaid) cần kiểm tra render trên nền tảng xuất bản.
8. **`LO-3`:** xác nhận cách đưa $H_2^+$ thành "ví dụ minh họa cho bậc 0,5" là đủ cho chuẩn đầu ra.
9. **Chính sách `[ADDED]`:** xác nhận các cụm thuật ngữ mở rộng ("UV–Vis/color", "quang phổ phức chất") chỉ cần `[ADDED]` hay cần thêm `[VERIFY]` khi không có trong nguồn.

---

## F. Chưa kiểm chứng / Giới hạn (Not Verified / Limitations — Rule R10 & R12)

- Bản đầu ra là **REVIEW DRAFT** (còn 5 thẻ `[VERIFY]`), không phải CLEAN RELEASE.
- 5 hình `Hình 4.2`–`4.6` vẫn là khung giữ chỗ theo `FIGURE_POLICY`, chưa sản xuất; Hình 4.1 (Mermaid) chưa kiểm tra render trên nền xuất bản.
- Không có `APPROVED_REFERENCE_LIST` (R4); ba mục tham khảo tại `4.8.1` là thẻ giữ chỗ, không phải trích dẫn đã xác minh.
- Dữ kiện ngoài nguồn (`V-04.01`–`V-04.10`) không được agent xác nhận độc lập (không có Scholar/DOI/thư viện trong quy trình này).
- Nội dung bổ sung ngoài nguồn (`T-04.4.6`, `T-04.5.4` về $3c$–$2e$; dữ liệu $B_2,C_2,F_2$ tại `Bảng 4.2`; điều kiện chuẩn hóa LCAO; nguyên tắc dị hạch) là kiến thức giáo trình chuẩn, gắn `[ADDED]`, đã được người dùng duyệt tại Gate A.
