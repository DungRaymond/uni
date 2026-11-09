# ch11_matrix.md — S2 Mapping & Restructuring Plan · Chương 11

**Môn:** Y dược – Master Lecture Notes · **Stage:** S2 Mapping · **Ngày:** 2026-11-09  
**Nguồn đầu vào:** `00_source_original/ch11_doc-myd-11.html` (D-11), `01_audit/ch11_audit.md`, `_state/carryover_latest.md`  
**Khung cấu trúc:** Template v2 (`T1`–`T8`, `DISCIPLINE_TYPE: STEM-qualitative` theo `00_config.md`)  
**Quy tắc:** Ánh xạ 100% `S-11.1`–`S-11.10` sang `T-11.x.y` không làm mất nội dung; KHÔNG viết bài giảng chi tiết; dừng ở GATE A.

---

## A. Content Mapping Matrix

| Row ID | S-ID(s) | Summary (≤15 words) | Target T-ID and Name | Primary Action | Secondary Actions | Provenance After Transformation | Notes and Risks |
|---|---|---|---|---|---|---|---|
| M-11.01 | — | Tên chương, giới thiệu khái quát & phạm vi nội dung | `T-11.1` Chuyên đề 11: Đại cương về miễn dịch (Hệ thống miễn dịch, cơ chế phòng vệ & ứng dụng y dược) | ADD | — | `[ADDED: structural frame]` | Nguồn `D-11` thiếu T1, tên chương chỉ ở `MANIFEST.md` (Q1). |
| M-11.02 | — | Kiến thức tiên kỳ và thời lượng học tập | `T-11.1.1` / `T-11.1.2` (phần của `T-11.1`) Phạm vi, Kiến thức Tiên quyết & Thời lượng Học tập | ADD | — | `[ADDED: study time estimate]` | Nguồn `D-11` không có phần kiến thức tiên quyết; bổ sung theo `STUDY_TIME_RULE`. |
| M-11.03 | — | Bốn chuẩn đầu ra kiến thức, kỹ năng, vận dụng, đánh giá mô hình | `T-11.2` Mục tiêu Học tập (Learning Objectives `LO-1`..`LO-4`) | ADD | — | `[ADDED: learning objectives]` | Suy ra từ `S-11.1`–`S-11.10`. |
| M-11.04 | — | Đặt vấn đề & ý nghĩa thực tiễn | `T-11.3` Đặt vấn đề & Ý nghĩa thực tiễn (Introduction) | ADD | — | `[ADDED: introduction frame]` | Nguồn `D-11` thiếu phần mở luận cấu trúc. |
| M-11.05 | S-11.1 | Kháng nguyên: định nghĩa và phân loại (TD/TI, siêu kháng nguyên, nguồn gốc, hệ thống kháng nguyên quan trọng) | `T-11.4.1` Kháng Nguyên: Định Nghĩa & Phân Loại | KEEP | EXPAND | S-11.1 `[SRC]` | Giữ nguyên phân loại kháng nguyên. |
| M-11.06 | S-11.2 | MHC/HLA & trình diện kháng nguyên: MHC-I (HLA-A/B/C) → CD8⁺; MHC-II (HLA-DP/DQ/DR) → CD4⁺; quy tắc 1×8=8, 2×4=8 | `T-11.4.2` MHC/HLA & Trình Diện Kháng Nguyên | KEEP | EXPAND | S-11.2 `[SRC]` | Giữ nguyên cơ chế trình diện MHC. |
| M-11.07 | S-11.3 | Kháng thể (Immunoglobulin) và miễn dịch thể dịch: cấu trúc Y (2 chuỗi nặng + 2 chuỗi nhẹ, Fab/Fc); 5 lớp Ig (IgG/IgM/IgA/IgE/IgD); động tên tiên phát/thứ phát | `T-11.4.3` Kháng Thể & Miễn Dịch Thể Dịch | KEEP | EXPAND | S-11.3 `[SRC]` | Giữ nguyên cấu trúc kháng thể và 5 lớp Ig. |
| M-11.08 | S-11.4 | Miễn dịch qua trung gian tế bào: tế bào T hỗ trợ CD4⁺ (Th1/Th2/Th17/Treg) và tế bào T gây độc CD8⁺ (perforin/granzyme, FasL-Fas) | `T-11.4.4` Miễn Dịch Qua Trung Gian Tế Bào | KEEP | EXPAND | S-11.4 `[SRC]` | Giữ nguyên cơ chế miễn dịch tế bào. |
| M-11.09 | S-11.5 | Rối loạn miễn dịch: quá mẫn (4 type Gell & Coombs), bệnh tự miễn (mất dung nạp, molecular mimicry, HLA), suy giảm miễn dịch (tiên phát/thứ phát, HIV→AIDS) | `T-11.4.5` Rối Loạn Miễn Dịch | KEEP | EXPAND | S-11.5 `[SRC]` | Gộp các rối loạn miễn dịch thành tiểu mục ứng dụng. |
| M-11.10 | S-11.6 | Ứng dụng y dược: vaccine, huyết thanh và miễn dịch trị liệu (miễn dịch chủ động vs thụ động; vaccine sống giảm độc lực/bất aktiv/toxoid/tiểu đơn vị/mRNA; kháng thể đơn dòng; thuốc ức chế miễn dịch) | `T-11.4.6` Ứng Dụng Y Dược: Vaccine, Huyết Thanh & Miễn Dịch Trị Liệu | KEEP | EXPAND | S-11.6 `[SRC]` | Gộp ứng dụng y dược thành tiểu mục ứng dụng. |
| M-11.11 | S-11.7 | So sánh tổng hợp miễn dịch bẩm sinh và thích ứng: 10 tiêu chí (thời điểm, thời gian phản ứng, tính đặc hiệu, đa dạng thụ thể, trí nhớ, tế bào chính, dịch thể chính, tự dung nạp) | `T-11.4.7` So Sánh Miễn Dịch Bẩm Sinh & Thích Ứng | KEEP | EXPAND | S-11.7 `[SRC]` | Gộp bảng so sánh thành tiểu mục tóm tắt. |
| M-11.12 | S-11.8 | Kháng nguyên của vi sinh vật gây bệnh: thân O, lông H, vỏ K/Vi, ngoại độc tố, bề mặt virus (SARS-CoV-2 Spike, cúm HA/NA, antigenic drift/shift); hệ nhóm máu hồng cầu (ABO, Rh) | `T-11.4.8` Kháng Nguyên Của Vi Sinh Virus Gây Bệnh | KEEP | EXPAND | S-11.8 `[SRC]` | Giữ nguyên kháng nguyên vi sinh vật. |
| M-11.13 | S-11.9 | Dấu ấn khối u (Tumor Markers): AFP, CEA, PSA, CA 125, CA 19-9, HER2/neu; ứng dụng theo dõi điều trị và tái phát; HER2 là đích của Trastuzumab | `T-11.4.9` Dấu ấn Khối U | KEEP | EXPAND | S-11.9 `[SRC]` | Giữ nguyên dấu ấn khối u. |
| M-11.14 | S-11.10 | Ý nghĩa và tác dụng: hệ thống miễn dịch nền tảng phòng vệ; hiểu cơ chế bệnh sinh nhiễm trùng/dị ứng/tự miễn; cơ sở khoa học tiêm chủng; cơ chế tác dụng/độc tính thuốc miễn dịch; liệu pháp sinh học (mAb, ức chế điểm kiểm soát miễn dịch) | `T-11.4.10` Ý Nghĩa & Tác Dụng | KEEP | EXPAND | S-11.10 `[SRC]` | Gộp ý nghĩa và tác dụng thành tiểu mục kết luận. |
| M-11.15 | — | Ví dụ đáp ứng tiêm vaccine nhắc lại (mũi 1: IgM, mũi 2: IgG tăng gấp hàng chục lần); hapten penicillin (gắn albumin → hapten–carrier → IgE → sốc phản vệ) | `T-11.5.1` Ví dụ 1: Đáp Ứng Tiêm Vaccine & Hapten Penicillin | MERGE | MOVE | S-11.6 (example-box) `[SRC]` | Hộp ví dụ nguồn đã có sẵn, giữ nguyên số liệu. |
| M-11.16 | — | Cách nhớ: 5 lớp Ig (IgG qua nhau thai — đáp ứng thứ phát; IgM đáp ứng sớm — ngũ phân tử; IgA niêm mạc — dịch tiết; IgE dị ứng — giun sán; IgD BCR của tế bào B non). MHC: $1 \times 8 = 8$ (MHC-I → CD8); $2 \times 4 = 8$ (MHC-II → CD4). Kháng nguyên: protein mạnh nhất; polysaccharide thứ hai; lipid/acid nucleic chỉ sinh miễn dịch khi gắn protein | `T-11.5.2` Mẹo nhớ Miễn Dịch | MERGE | MOVE | S-11.7 (callout) `[SRC]` | Callout nguồn đã có sẵn. |
| M-11.17 | — | Sơ đồ thuật toán logic cốt lõi của đáp ứng miễn dịch (Mermaid) | `T-11.5.3` Sơ Đồ Đáp Ứng Miễn Dịch (Mermaid) | ADD | — | `[ADDED: Mermaid flowchart]` | Chuyển quy tắc của S-11.1, S-11.2, S-11.3 thành flowchart; không thêm dữ kiện mới. |
| M-11.18 | — | Placeholder hình hệ thống miễn dịch, MHC trình diện, cấu trúc kháng thể | `T-11.5.4` Minh Họa Trực quan (Placeholders) | ADD | — | `[ADDED: figure placeholders]` + `[FIGURE]` | Nguồn có 0 hình (`I-11.04`); đặt placeholder theo `FIGURE_POLICY`. |
| M-11.19 | — | Tóm tắt nội dung trọng tâm & quy tắc ghi nhớ | `T-11.6.1` Tóm tắt Nội dung Trọng tâm & Quy tắc Ghi nhớ | MERGE | MOVE | S-11.1–S-11.10 `[SRC]` | Gộp kháng nguyên, MHC, kháng thể, miễn dịch tế bào, rối loạn miễn dịch, ứng dụng y dược thành tóm tắt. |
| M-11.20 | — | Bảng tổng hợp công thức, đơn vị, quy ước dấu | `T-11.6.2` Bảng Tổng hợp Công thức & Lưu ý | ADD | — | `[ADDED: summary concept tables]` | Nguồn có 0 bảng (`I-11.05`); bổ sung bảng tổng hợp. |
| M-11.21 | — | Bộ 10 câu hỏi/bài tập tự lượng giá | `T-11.7` Đánh giá & Bài tập tự lượng giá | ADD | — | `[ADDED: exercises]` | Nguồn hoàn toàn không có bài tập (Q3). |
| M-11.22 | — | Đáp án & hướng dẫn giải từng bước | `T-11.7.4` Đáp án & Hướng dẫn Giải Chi tiết (Answer Key) | ADD | — | `[ADDED: step-by-step answer key]` | Mỗi đáp án ghi `LO` và cấp độ; phân tích bệnh nguyên/bệnh sinh hiển đủ bước. |
| M-11.23 | — | Danh mục tài liệu tham khảo và ghi chú truy vết theo R4 | `T-11.8.1` Tài liệu Tham khảo & Đọc thêm | ADD | — | `[ADDED: reference section structure]` + `[VERIFY: textbook references needed]` | Nguồn `D-11` có 0 trích dẫn (`I-11.05`, `V-11.04`); chờ người dùng cung cấp giáo trình chuẩn. |

**Tổng cộng:** 23 dòng ma trận.

---

## B. Coverage Check

### 1. Kiểm tra độ phủ S-ID từ Audit Register

- **Danh sách S-ID trong `01_audit/ch11_audit.md` (tổng cộng = 10 S-ID):** `S-11.1`, `S-11.2`, `S-11.3`, `S-11.4`, `S-11.5`, `S-11.6`, `S-11.7`, `S-11.8`, `S-11.9`, `S-11.10`.
- **Ánh xạ từng S-ID trong Ma trận Mapping (Bảng A):**
  - `S-11.1` → `M-11.05` (`T-11.4.1`)
  - `S-11.2` → `M-11.06` (`T-11.4.2`)
  - `S-11.3` → `M-11.07` (`T-11.4.3`)
  - `S-11.4` → `M-11.08` (`T-11.4.4`)
  - `S-11.5` → `M-11.09` (`T-11.4.5`)
  - `S-11.6` → `M-11.10` (`T-11.4.6`)
  - `S-11.7` → `M-11.11` (`T-11.4.7`)
  - `S-11.8` → `M-11.12` (`T-11.4.8`)
  - `S-11.9` → `M-11.13` (`T-11.4.9`)
  - `S-11.10` → `M-11.14` (`T-11.4.10`)
- **Số S-ID chưa được ánh xạ (Unmapped / Missing S-IDs): 0** (độ phủ **100,0%**).

### 2. Thống kê hành động chính (Primary Action Counts)

| Primary Action | Số dòng ma trận | Tỷ lệ (%) | Danh sách Row ID |
|---|---|---|---|
| **ADD** (khung sư pháp, bảng, hình, ví dụ/bài tập mới) | 13 | 56,5% | M-11.01, M-11.02, M-11.03, M-11.04, M-11.17, M-11.18, M-11.20, M-11.21, M-11.22, M-11.23 |
| **KEEP** (giữ nội dung cốt lõi tại đúng phân khu) | 10 | 43,5% | M-11.05, M-11.06, M-11.07, M-11.08, M-11.09, M-11.10, M-11.11, M-11.12, M-11.13, M-11.14 |
| **MERGE** | 0 | 0,0% | (ví dụ nguồn đã nằm đúng phân khu) |
| **MOVE** | 0 | 0,0% | (dùng làm secondary cho M-11.15, M-11.16) |
| **REMOVE** | 0 | 0,0% | Không có dòng REMOVE (bảo toàn 100% dữ liệu nguồn) |
| **Tổng cộng** | **23 dòng** | **100,0%** | — |

### 3. Ước tính tỷ lệ nội dung mới và thống kê thẻ

- **Dung lượng nguồn gốc (`D-11`):** 8017 từ (bảo toàn toàn bộ).
- **Dung lượng dự kiến bản thảo hoàn chỉnh (`ch11_draft.md`):** khoảng **9.000–10.000 từ** (đáp ứng `TARGET_LENGTH_PER_CHAPTER: not shorter than source; no upper limit`), tương đương **1,1–1,2 lần** nguồn (nguồn đã dài, mở rộng ít hơn các chương ngắn).

---

## C. Chapter Restructuring Plan

### C.1 Đề cương chi tiết đến cấp Tiểu mục / Chủ đề

```text
Chuyên đề 11: Đại cương về miễn dịch (Hệ thống miễn dịch, cơ chế phòng vệ & ứng dụng y dược) (tên tạm, chờ xác nhận MANIFEST)
├── 1. Tổng quan chương (Chapter Overview) {T-11.1}
│   ├── 1.1 Tên chuyên đề, giới thiệu khái quát & phạm vi nội dung {T-11.1.1} (M-11.01)
│   └── 1.2 Kiến thức tiên kỳ & Thời lượng học tập dự kiến {T-11.1.2} (M-11.02)
├── 2. Mục tiêu học tập (Learning Objectives) {T-11.2}
│   └── 2.1 Chuẩn đầu ra Kiến thức, Kỹ năng, Vận dụng và Đánh giá mô hình (LO-1..LO-4) {T-11.2.1} (M-11.03)
├── 3. Đặt vấn đề & Ý nghĩa thực tiễn (Introduction) {T-11.3}
│   └── 3.1 Tại sao cần hiểu hệ thống miễn dịch {T-11.3.1} (M-11.04)
├── 4. Nội dung bài giảng chính (Main Content) {T-11.4}
│   ├── 4.1 Kháng Nguyên: Định Nghĩa & Phân Loại {T-11.4.1} [SRC: S-11.1] (M-11.05)
│   ├── 4.2 MHC/HLA & Trình Diện Kháng Nguyên {T-11.4.2} [SRC: S-11.2] (M-11.06)
│   ├── 4.3 Kháng Thể & Miễn Dịch Thể Dịch {T-11.4.3} [SRC: S-11.3] (M-11.07)
│   ├── 4.4 Miễn Dịch Qua Trung Gian Tế Bào {T-11.4.4} [SRC: S-11.4] (M-11.08)
│   ├── 4.5 Rối Loạn Miễn Dịch {T-11.4.5} [SRC: S-11.5] (M-11.09)
│   ├── 4.6 Ứng Dụng Y Dược: Vaccine, Huyết Thanh & Miễn Dịch Trị Liệu {T-11.4.6} [SRC: S-11.6] (M-11.10)
│   ├── 4.7 So Sánh Miễn Dịch Bẩm Sinh & Thích Ứng {T-11.4.7} [SRC: S-11.7] (M-11.11)
│   ├── 4.8 Kháng Nguyên Của Vi Sinh Virus Gây Bệnh {T-11.4.8} [SRC: S-11.8] (M-11.12)
│   ├── 4.9 Dấu ấn Khối U {T-11.4.9} [SRC: S-11.9] (M-11.13)
│   └── 4.10 Ý Nghĩa & Tác Dụng {T-11.4.10} [SRC: S-11.10] (M-11.14)
├── 5. Ví dụ minh họa & Quy trình thực hành (Examples & Illustrations) {T-11.5}
│   ├── 5.1 Ví dụ 1: Đáp Ứng Tiêm Vaccine Nhắc Lại & Hapten Penicillin {T-11.5.1} [SRC] (M-11.15)
│   ├── 5.2 Mẹo nhớ Miễn Dịch {T-11.5.2} [SRC] (M-11.16)
│   ├── 5.3 Sơ Đồ Đáp Ứng Miễn Dịch (Mermaid) {T-11.5.3} (M-11.17)
│   └── 5.4 Minh Họa Trực quan (Placeholders) {T-11.5.4} (M-11.18)
├── 6. Tóm tắt chương (Chapter Summary) {T-11.6}
│   ├── 6.1 Tóm tắt Nội dung Trọng tâm & Quy tắc Ghi nhớ {T-11.6.1} (M-11.19)
│   └── 6.2 Bảng Tổng hợp Công thức & Lưu ý {T-11.6.2} (M-11.20)
├── 7. Đánh giá & Bài tập tự lượng giá (Review & Assessment) {T-11.7}
│   ├── 7.1 Câu hỏi lý thuyết: Nhận biết & Thông hiểu (LO-1) {T-11.7.1} (phần của M-11.21)
│   ├── 7.2 Bài tập áp dụng: Phân tích bệnh nguyên/bệnh sinh (LO-2, LO-3) {T-11.7.2} (phần của M-11.21)
│   ├── 7.3 Câu hỏi phân tích & vận dụng nâng cao (LO-3, LO-4) {T-11.7.3} (phần của M-11.21)
│   └── 7.4 Đáp án & Hướng dẫn giải chi tiết (Answer Key) {T-11.7.4} (M-11.22)
└── 8. Tài liệu tham khảo (References) {T-11.8}
    └── 8.1 Danh mục Tài liệu tham khảo & Đọc thêm {T-11.8.1} (M-11.23)
```

### C.2 Kế hoạch bổ sung nội dung mới và lý do sư pháp

1. **Khung sư pháp T1–T3:** Tên chương, giới thiệu, kiến thức tiên kỳ, thời lượng học tập, 4 chuẩn đầu ra `LO-1`..`LO-4`.
2. **Sơ đồ thuật toán Mermaid (`T-11.5.3`):** Logic cốt lõi của đáp ứng miễn dịch.
3. **Placeholder hình (`T-11.5.4`):** Hệ thống miễn dịch, MHC trình diện, cấu trúc kháng thể.
4. **Bảng tổng hợp mới (`T-11.6.2`):** Tổng hợp công thức, đơn vị, lưu ý lâm sàng.
5. **Bộ 10 câu hỏi/bài tập + đáp án (`T-11.7`):** Nguồn hoàn toàn không có đánh giá.
6. Giữ nguyên toàn bộ nội dung nguồn; không cắt nội dung (Q2).

### C.3 Rủi ro & Biện pháp kiểm soát

- **Rủi ro 1 (Tên chương chưa chốt):** Xác nhận tại MANIFEST (Q1).
- **Rủi ro 2 (Nguồn đã dài, 8017 từ):** Nếu mở rộng lên 9.000–10.000 thì tỷ lệ 1,1–1,2×. Đây là mở rộng khung sư pháp và bài tập, không cắt nội dung nguồn.
- **Rủi ro 3 (0 bài tập, 0 hình):** Bổ sung `[ADDED]` bài tập và `[FIGURE]` placeholder (Q3, Q4).
- **Rủi ro 4 (0 tài liệu tham khảo):** Đặt `[VERIFY]` (Q5), không bịa nguồn.

### C.4 Chuẩn đầu ra Học tập (Draft LO)

- **`LO-1` (Kiến thức):** Phát biểu định nghĩa kháng nguyên, MHC/HLA, kháng thể, miễn dịch tế bào, quá mẫn, bệnh tự miễn, suy giảm miễn dịch, vaccine, kháng thể đơn dòng.
- **`LO-2` (Kỹ năng):** Phân tích cơ chế trình diện antigen qua MHC; phân biệt 5 lớp kháng thể (IgG/IgM/IgA/IgE/IgD); phân biệt 4 type quá mẫn Gell & Coombs.
- **`LO-3` (Vận dụng):** Giải thích cơ chế vaccine (chủ động vs thụ động); cơ chế kháng thể đơn dòng (mAb); cơ chế thuốc ức chế miễn dịch (corticosteroid, calcineurin, antimetabolite).
- **`LO-4` (Đánh giá mô hình):** Đánh giá vai trò của hệ thống miễn dịch trong phòng vệ và bệnh lý; liên hệ rối loạn miễn dịch (tự miễn, quá mẫn, suy giảm miễn dịch) với bệnh lý `[DOMAIN_RULES: chỉ giải thích cơ chế, không liều/chỉ định]`.

### C.5 Glossary & Chuẩn hóa

| Thuật ngữ | Dạng trong nguồn | Dạng chuẩn hóa | Ghi chú |
|---|---|---|---|
| Kháng nguyên | `Kháng nguyên` | **Kháng nguyên (antigen)** | Giữ nguyên. |
| Kháng thể | `Kháng thể` | **Kháng thể (antibody / immunoglobulin)** | Giữ nguyên. |
| MHC / HLA | `MHC / HLA` | **MHC (major histocompatibility complex) / HLA (human leukocyte antigen)** | Giữ nguyên. |
| Tế bào T hỗ trợ | `Tế bào T hỗ trợ` | **Tế bào T hỗ trợ (helper T cell)** | Giữ nguyên. |
| Tế bào T gây độc | `Tế bào T gây độc` | **Tế bào T gây độc (cytotoxic T cell – CTL)** | Giữ nguyên. |
| Quá mẫn | `Quá mẫn` | **Quá mẫn (hypersensitivity)** | Giữ nguyên. |
| Bệnh tự miễn | `Bệnh tự miễn` | **Bệnh tự miễn (autoimmune disease)** | Giữ nguyên. |
| Suy giảm miễn dịch | `Suy giảm miễn dịch` | **Suy giảm miễn dịch (immunodeficiency)** | Giữ nguyên. |
| Vaccine | `Vaccine` | **Vaccine** | Giữ nguyên. |
| Kháng thể đơn dòng | `Kháng thể đơn dòng` | **Kháng thể đơn dòng (monoclonal antibody – mAb)** | Giữ nguyên. |
| Giải độc tố | `Giải độc tố` | **Giải độc tố (toxoid)** | Giữ nguyên. |
| Hapten | `Hapten` | **Hapten** | Giữ nguyên. |
| Conjugate vaccine | `Vaccine cộng hợp` | **Vaccine cộng hợp (conjugate vaccine)** | Giữ nguyên. |
| Dấu ấn khối u | `Dấu ấn khối u` | **Dấu ấn khối u (tumor marker)** | Giữ nguyên. |

---

## D. Verification Items Carried Forward

| V-ID | Nội dung cần kiểm chứng | Loại | Mục T-ID tiếp nhận | Kế hoạch xử lý trong S3 |
|---|---|---|---|---|
| `V-11.01` | Tên chương chính xác | reference | `T-11.1` | Xác nhận MANIFEST (Q1). |
| `V-11.02` | Giá trị số (tỷ lệ Ig, thời gian bán hủy, periodo đáp ứng miễn dịch) | number | `T-11.4.3`, `T-11.4.6` | Giữ đúng nguồn; gắn `[VERIFY]`. |
| `V-11.03` | 0 hình vẽ/sơ đồ trong nguồn | structure | `T-11.5.4` | Đặt `[FIGURE]` placeholder (Q4). |
| `V-11.04` | 0 tài liệu tham khảo | reference | `T-11.8.1` | Đặt `[VERIFY: reference needed …]` (Q5). |

---

## E. Open Questions for Gate A

1. **Q1 (Tên chương):** Xác nhận tên Ch11 tại `MANIFEST.md` (hiện dùng "Chuyên đề 11: Đại cương về miễn dịch (Hệ thống miễn dịch, cơ chế phòng vệ & ứng dụng y dược)").
2. **Q2 (Nguồn đã dài, mở rộng nhẹ):** Nguồn 8017 từ, 10 mục; S3 mở rộng lên ~9.000–10.000 bằng khung sư pháp và bài tập. Đồng ý?
3. **Q3 (Bài tập):** Đồng ý S3 bổ sung bộ 10 câu hỏi/bài tập `[ADDED]`?
4. **Q4 (Hình):** Đồng ý S3 đặt placeholder `[FIGURE]` cho hệ thống miễn dịch, MHC trình diện, cấu trúc kháng thể?
5. **Q5 (Tài liệu tham khảo):** Đồng ý để `[VERIFY: reference needed …]`, `APPROVED_REFERENCE_LIST: none`?

---

## F. Not verified / limitations

- Chỉ dựa trên D-11; 0 trích dẫn; 0 hình vẽ; 0 bài tập trong nguồn.
- Tất cả giá trị số giữ nguyên nguồn; gắn `[VERIFY]` khi cần chuyên gia xác nhận.
- Dừng tại GATE A theo R9.

---

GATE A: STOP. Awaiting user approval of the Content Mapping Matrix. Do not begin the transformation.