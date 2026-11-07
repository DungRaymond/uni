# ch02_matrix.md — S2 Mapping & Restructuring Plan · Chương 02

**Môn:** Hóa vô cơ dược · **Stage:** S2 Mapping · **Ngày:** 2026-11-07  
**Nguồn đầu vào:** `00_source_original/ch02_doc-hvc-2.html` (D-02), `01_audit/ch02_audit.md`, `_state/carryover_latest.md`  
**Khung cấu trúc:** Template v2 (`T1`–`T8`, `DISCIPLINE_TYPE: STEM-quantitative` theo `00_config.md`)  
**Quy tắc:** Ánh xạ 100% `S-02.1`–`S-02.8` sang `T-02.x.y` không làm mất nội dung; KHÔNG viết bài giảng chi tiết; dừng ở GATE A.

---

## A. Content Mapping Matrix

| Row ID | S-ID(s) | Summary (≤15 words) | Target T-ID and Name | Primary Action | Secondary Actions | Provenance After Transformation | Notes and Risks |
|---|---|---|---|---|---|---|---|
| M-02.01 | — | Tên chương, giới thiệu khái quát và phạm vi thuyết VSEPR | `T-02.1.1` Chương 2: Thuyết Đẩy Cặp Electron Vỏ Hóa Trị (VSEPR) & Cấu trúc Không gian Phân tử | ADD | — | `[ADDED: structural frame]` | Nguồn D-02 thiếu T1 (`I-02.01`, `I-02.18`); dựng theo Template v2. |
| M-02.02 | — | Kiến thức tiên quyết từ Chương 1 và thời lượng học tập | `T-02.1.2` Phạm vi, Kiến thức Tiên quyết & Thời lượng Học tập | ADD | — | `[ADDED: study time estimate]` | Nối tiếp Chương 1 (`T-01.4.2`, `T-01.4.4`); áp dụng `STUDY_TIME_RULE` (~1,5 giờ). |
| M-02.03 | — | Chuẩn đầu ra về kiến thức, kỹ năng và năng lực (`LO-1`..`LO-4`) | `T-02.2.1` Mục tiêu Học tập Chuẩn đầu ra (Learning Objectives) | ADD | — | `[ADDED: learning objectives]` | Tổng hợp từ `S-02.1`–`S-02.8`; không tự thêm chuẩn ngoài phạm vi nguồn. |
| M-02.04 | — | Bước chuyển từ công thức phẳng Lewis sang cấu trúc không gian 3D | `T-02.3.1` Đặt vấn đề: Từ Công thức Phẳng Lewis đến Hình học Không gian 3 Chiều | ADD | EXPAND | `[ADDED: pedagogical context]` | Liên kết trực tiếp với `T-01.4.2` (momen lưỡng cực) và tương tác thuốc–thụ thể. |
| M-02.05 | S-02.1 | Nguyên lý Gillespie–Nyholm, thứ tự lực đẩy cặp electron và liên kết bội | `T-02.4.1` Nguyên lý Cơ bản của Thuyết VSEPR (Gillespie – Nyholm) | KEEP | EXPAND, REWRITE | S-02.1 `[SRC]` + `[ADDED: concept definition]` | Giải thích rõ bản chất đám mây LP vs. BP; xử lý lỗi dùng sớm ký hiệu $SN$ (`I-02.07`). |
| M-02.06 | S-02.2 | Công thức chung $AX_mE_n$ và phương pháp tính số phối trí lập thể $SN$ | `T-02.4.2` Ký hiệu VSEPR ($AX_mE_n$) & Phương pháp Xác định Số Phối trí Lập thể ($SN$) | KEEP | EXPAND, REWRITE | S-02.2 `[SRC]` + `[ADDED: method clarification]` + `[VERIFY: formula scope]` | Chuẩn hóa tên "Số phối trí lập thể ($SN$)" (`I-02.08`); bổ sung quy tắc cho $HCN, O_3, I_3^-$ (`I-02.05`, `V-02.01`). |
| M-02.07 | S-02.3 | Bảng phân loại toàn diện 13 kiểu hình học phân tử ($SN=2..6$) | `T-02.4.3` Hệ thống Phân loại Hình học Cặp Electron và Hình học Phân tử ($SN = 2 \div 6$) | KEEP | EXPAND, REWRITE | S-02.3 `[SRC]` + `[ADDED: Electron vs Molecular Geometry definition]` + `[VERIFY: bond angle data]` | Định nghĩa rõ Hình học cặp e vs. Hình học phân tử (`I-02.12`); ghi chú giới hạn phức chất $[Fe(CN)_6]^{4-}, [PtCl_4]^{2-}$ (`V-02.02`). |
| M-02.08 | S-02.3, S-02.4 | Vị trí trục và xích đạo trong khung lưỡng chóp tam giác và bát diện | `T-02.4.4` Bất đối xứng Vị trí trong Khung $SN = 5$ (Trục vs. Xích đạo) & Khung $SN = 6$ | MOVE | MERGE, EXPAND | S-02.3 `[SRC]` + S-02.4 `[SRC]` + `[ADDED: 90-degree interaction count]` | Tách phần vị trí xích đạo khỏi mục Quy tắc Bent (`I-02.04`); làm rõ số tương tác đẩy $90^\circ$ (`I-02.22`). |
| M-02.09 | S-02.4 | Quy tắc Bent và ảnh hưởng độ âm điện phối tử đến góc liên kết | `T-02.4.5` Quy tắc Bent & Sự Lệch Góc Liên kết Thực tế do Độ Âm điện | KEEP | EXPAND, REWRITE | S-02.4 `[SRC]` + `[ADDED: cross-chapter bridge to Ch03]` + `[VERIFY: experimental angles]` | Giải thích định tính "đặc tính $p$" nối sang Chương 3 (`I-02.11`, `V-02.06`); giữ số liệu $H_2O/OF_2, NH_3/NF_3$ (`V-02.05`). |
| M-02.10 | S-02.1, S-02.3, S-02.5 | Liên hệ giữa hình học VSEPR, momen lưỡng cực $\vec{\mu}_{pt}$ và tác dụng dược học | `T-02.4.6` Ứng dụng VSEPR: Dự đoán Độ Phân cực ($\vec{\mu}_{pt}$), Độ Tan & Định hướng Tương tác Thuốc – Đích | MERGE | REWRITE | S-02.1, S-02.3, S-02.5 `[SRC]` + `[VERIFY: pharmaceutical claim]` | Gộp các đoạn "Ý nghĩa" trùng lặp (`DUP-02.1`); tuân thủ nghiêm ngặt `DOMAIN_RULES` (`I-02.20`, `V-02.08`). |
| M-02.11 | S-02.6 | Ví dụ mẫu xác định $SN$, hình học và góc của $CH_4, NH_3, H_2O, SF_6$ | `T-02.5.1` Ví dụ 2.1: Xác định Số Lập thể $SN$, Hình học và Xu hướng Góc của $CH_4, NH_3, H_2O, SF_6$ | MOVE | EXPAND, REWRITE | S-02.6 `[SRC]` + `[ADDED: step-by-step SN calculation]` | Trình bày chuẩn `Given | Find | Approach | Solution | Check`; tính tường minh $SN = (V+M-q)/2$ (`I-02.14`). |
| M-02.12 | S-02.4, S-02.7 | Ví dụ biện luận vị trí cặp LP cho $PCl_5, SF_4, ClF_3, XeF_2$ ($SN=5$) | `T-02.5.2` Ví dụ 2.2: Biện luận Vị trí Cặp Electron Tự do trong Khung $SN = 5$ ($PCl_5, SF_4, ClF_3, XeF_2$) | MERGE | MOVE, EXPAND | S-02.4 `[SRC]` + S-02.7 `[SRC]` + `[VERIFY: SF4 and ClF3 bond angles]` | Hợp nhất phần trùng lặp (`DUP-02.2`); ghi đầy đủ cả hai góc $<90^\circ$ và $<120^\circ$ của $SF_4$ (`I-02.15`, `V-02.04`). |
| M-02.13 | — | Ví dụ giải mẫu tính $SN$ cho ion đa nguyên tử và liên kết bội | `T-02.5.3` Ví dụ 2.3: Dự đoán Hình học của Ion Đa nguyên tử và Phân tử Có Liên kết Bội ($CO_3^{2-}, NO_2^-, SO_4^{2-}, I_3^-$) | ADD | — | `[ADDED: worked example for ions/multiple bonds]` | Lấy các ion/phân tử đã có trong bảng `S-02.3` để minh họa cách tính $q \ne 0$ và $M = 0$ (`I-02.14`). |
| M-02.14 | S-02.2, S-02.8 | Quy trình 4 bước và sơ đồ Mermaid xác định hình học phân tử VSEPR | `T-02.5.4` Quy trình Chuẩn 4 Bước & Sơ đồ Thuật toán Xác định Hình học VSEPR (Mermaid) | MERGE | MOVE, REWRITE | S-02.2 `[SRC]` + S-02.8 `[SRC]` + `[ADDED: Mermaid flowchart]` | Chuyển hóa `S-02.2` và `S-02.8` thành quy trình thao tác chuẩn kèm sơ đồ `flowchart TD` theo `FIGURE_POLICY`. |
| M-02.15 | — | Khung giữ chỗ hình vẽ cấu trúc 3D và sự lệch góc liên kết | `T-02.5.5` Minh họa Trực quan Cấu trúc Không gian 3D & Sự Lệch Góc Liên kết | ADD | — | `[ADDED: figure placeholders]` | Đặt các placeholder `[FIGURE]` chuẩn cho khung $SN=2..6$, vị trí trục/xích đạo và Quy tắc Bent (`I-02.17`). |
| M-02.16 | S-02.8 | Tóm tắt nguyên lý cốt lõi, quy tắc nhận diện nhanh và độ co góc | `T-02.6.1` Tóm tắt Nội dung Trọng tâm & Quy tắc Ghi nhớ Nhanh | MOVE | REWRITE | S-02.8 `[SRC]` + `[VERIFY: angle contraction heuristic]` | Chuẩn hóa hộp "Cách nhớ" (`S-02.8`); ghi rõ quy tắc co góc $2\text{–}2,5^\circ$ áp dụng cho khung $SN=4$ (`I-02.06`, `V-02.07`). |
| M-02.17 | — | Bảng tổng hợp công thức, ký hiệu và mối quan hệ khái niệm trong chương | `T-02.6.2` Bảng Tổng hợp Công thức, Ký hiệu và Mối quan hệ Khái niệm | ADD | — | `[ADDED: summary formula table]` | Hệ thống hóa công thức $SN = m+n = (V+M-q)/2$, thứ tự lực đẩy và Quy tắc Bent. |
| M-02.18 | — | Câu hỏi kiểm tra mức độ Nhận biết và Thông hiểu (phủ `LO-1`, `LO-2`) | `T-02.7.1` Câu hỏi Lý thuyết: Nhận biết & Thông hiểu | ADD | — | `[ADDED: knowledge and comprehension questions]` | Đánh giá khả năng nắm vững nguyên lý VSEPR, phân biệt hình học cặp e và hình học phân tử. |
| M-02.19 | — | Bài tập tính $SN$, xác định hình học và độ phân cực (`LO-2`, `LO-3`) | `T-02.7.2` Bài tập Áp dụng & Tính toán Cấu trúc Lập thể | ADD | — | `[ADDED: application exercises]` | Bài tập tính $SN$, viết ký hiệu $AX_mE_n$ và xét momen lưỡng cực $\vec{\mu}_{pt}$ cho phân tử/ion vô cơ. |
| M-02.20 | — | Câu hỏi phân tích nâng cao về lệch góc và Hóa dược (`LO-3`, `LO-4`) | `T-02.7.3` Câu hỏi Phân tích & Vận dụng Nâng cao trong Hóa dược | ADD | — | `[ADDED: analytical and advanced questions]` | Giải thích sự lệch góc theo Quy tắc Bent, so sánh vị trí trục/xích đạo và ý nghĩa lập thể dược học. |
| M-02.21 | — | Đáp án và hướng dẫn giải chi tiết cho toàn bộ câu hỏi `T7` | `T-02.7.4` Đáp án & Hướng dẫn Giải Chi tiết (Answer Key) | ADD | — | `[ADDED: step-by-step answer key]` | Lời giải chi tiết từng bước tính $V, M, q, SN, m, n$ để kiểm tra độc lập ở Stage S4. |
| M-02.22 | — | Danh mục tài liệu tham khảo chuẩn và ghi chú truy vết theo R4 | `T-02.8.1` Tài liệu Tham khảo & Đọc thêm | ADD | — | `[ADDED: reference section structure]` + `[VERIFY: textbook references needed]` | Ghi nhận nguồn D-02 có 0 trích dẫn (`I-02.19`, `V-02.09`); chờ người dùng cung cấp giáo trình chuẩn. |

---

## B. Coverage Check

### 1. Kiểm tra độ phủ S-ID từ Audit Register (Script `check_coverage.py`)
- **Danh sách S-ID trong `01_audit/ch02_audit.md` (Tổng cộng = 8 S-ID):** `S-02.1`, `S-02.2`, `S-02.3`, `S-02.4`, `S-02.5`, `S-02.6`, `S-02.7`, `S-02.8`.
- **Ánh xạ từng S-ID trong Ma trận Mapping (Bảng A):**
  - `S-02.1` → `M-02.05` (`T-02.4.1`), `M-02.10` (`T-02.4.6`)
  - `S-02.2` → `M-02.06` (`T-02.4.2`), `M-02.14` (`T-02.5.4`)
  - `S-02.3` → `M-02.07` (`T-02.4.3`), `M-02.08` (`T-02.4.4`), `M-02.10` (`T-02.4.6`)
  - `S-02.4` → `M-02.08` (`T-02.4.4`), `M-02.09` (`T-02.4.5`), `M-02.12` (`T-02.5.2`)
  - `S-02.5` → `M-02.10` (`T-02.4.6`)
  - `S-02.6` → `M-02.11` (`T-02.5.1`)
  - `S-02.7` → `M-02.12` (`T-02.5.2`)
  - `S-02.8` → `M-02.14` (`T-02.5.4`), `M-02.16` (`T-02.6.1`)
- **Số S-ID chưa được ánh xạ (Unmapped / Missing S-IDs): 0** (Độ phủ đạt **100,0%**).
- **Báo cáo kiểm tra cơ học:** Lưu tại `_state/checks/ch02_s2_coverage.md`.

### 2. Thống kê hành động chính (Primary Action Counts)

| Primary Action | Số dòng ma trận | Tỷ lệ (%) | Danh sách Row ID |
|---|---|---|---|
| **ADD** (Bổ sung khung sư phạm, ví dụ ion, sơ đồ, bài tập) | 12 | 54,5% | M-02.01, M-02.02, M-02.03, M-02.04, M-02.13, M-02.15, M-02.17, M-02.18, M-02.19, M-02.20, M-02.21, M-02.22 |
| **KEEP** (Giữ nguyên vị trí cấu trúc cốt lõi) | 4 | 18,2% | M-02.05, M-02.06, M-02.07, M-02.09 |
| **MOVE** (Di chuyển về đúng phân khu Template v2) | 3 | 13,6% | M-02.08, M-02.11, M-02.16 |
| **MERGE** (Hợp nhất nội dung trùng lặp/phân tán) | 3 | 13,6% | M-02.10, M-02.12, M-02.14 |
| **REMOVE** (Đề xuất loại bỏ) | 0 | 0,0% | Không có dòng REMOVE nào (bảo toàn 100% dữ liệu nguồn) |
| **Tổng cộng** | **22 dòng** | **100,0%** | — |

### 3. Ước tính tỷ lệ nội dung mới và thống kê thẻ (Script `check_tags.py`)
- **Dung lượng nguồn gốc (`D-02`):** 1.267 từ (được bảo toàn toàn bộ trong `T4`, `T5`, `T6`).
- **Dung lượng dự kiến bản thảo hoàn chỉnh (`ch02_draft.md`):** ~3.300 – 3.800 từ.
  - Phần nội dung lý thuyết và ví dụ phát triển từ nguồn (`T4` + `T5.1`–`T5.2` + `T6.1`): ~1.800 – 2.000 từ.
  - Phần khung sư phạm, ví dụ bổ sung ion đa nguyên tử, sơ đồ Mermaid/placeholder hình và bộ câu hỏi lượng giá kèm đáp án chi tiết (`T1`–`T3`, `T5.3`–`T5.5`, `T6.2`, `T7`, `T8`): ~1.500 – 1.800 từ (chiếm khoảng 45%–48% tổng dung lượng bản thảo, tập trung chủ yếu ở bộ bài tập và hướng dẫn giải `T7`).
- **Kết quả chạy `check_tags.py` trên file `02_mapping/ch02_matrix.md` (lưu tại `_state/checks/ch02_s2_tags.md`):**
  - Tổng số thẻ trong file ma trận này: `ADDED = 19`, `VERIFY = 7`, `CONFLICT = 0`, `FIGURE = 2`.

---

## C. Chapter Restructuring Plan

### C.1 Đề cương chi tiết đến cấp Tiểu mục / Chủ đề (Subsection / Topic Outline)

```text
Chương 2: Thuyết Đẩy Cặp Electron Vỏ Hóa Trị (VSEPR) & Cấu trúc Không gian Phân tử
├── 1. Tổng quan chương (Chapter Overview) {T-02.1}
│   ├── 1.1 Tên chương, giới thiệu khái quát & phạm vi nội dung {T-02.1.1} (M-02.01)
│   └── 1.2 Kiến thức tiên quyết & Thời lượng học tập dự kiến {T-02.1.2} (M-02.02)
├── 2. Mục tiêu học tập (Learning Objectives) {T-02.2}
│   └── 2.1 Chuẩn đầu ra về Kiến thức, Kỹ năng và Năng lực vận dụng (LO-1..LO-4) {T-02.2.1} (M-02.03)
├── 3. Đặt vấn đề & Ý nghĩa thực tiễn (Introduction) {T-02.3}
│   └── 3.1 Từ công thức phẳng Lewis đến cấu trúc không gian 3 chiều và tương tác sinh học {T-02.3.1} (M-02.04)
├── 4. Nội dung bài giảng chính (Main Content) {T-02.4}
│   ├── 4.1 Nguyên lý cơ bản của thuyết VSEPR (Gillespie – Nyholm) {T-02.4.1} [SRC: S-02.1] (M-02.05)
│   │   ├── 4.1.1 Sự đẩy tĩnh điện giữa các miền electron vỏ hóa trị
│   │   ├── 4.1.2 Phân biệt cặp electron liên kết (BP) và cặp electron tự do (LP): Thứ tự lực đẩy LP–LP > LP–BP > BP–BP
│   │   └── 4.1.3 Ảnh hưởng của liên kết bội (đôi, ba) đến mật độ electron và góc liên kết
│   ├── 4.2 Ký hiệu VSEPR (AX_mE_n) & Phương pháp xác định Số phối trí lập thể (SN) {T-02.4.2} [SRC: S-02.2] (M-02.06)
│   │   ├── 4.2.1 Quy ước công thức tổng quát AX_mE_n và khái niệm miền electron (vùng liên kết)
│   │   ├── 4.2.2 Công thức đại số tính Số phối trí lập thể: SN = m + n = (V + M - q)/2
│   │   └── 4.2.3 Phạm vi áp dụng và quy tắc xử lý phối tử đa hóa trị (O, S, N) và ion đa nguyên tử
│   ├── 4.3 Hệ thống phân loại Hình học cặp electron và Hình học phân tử (SN = 2 ÷ 6) {T-02.4.3} [SRC: S-02.3] (M-02.07)
│   │   ├── 4.3.1 Phân biệt bản chất Hình học cặp electron (Electron Geometry) và Hình học phân tử (Molecular Shape)
│   │   ├── 4.3.2 Bảng tổng hợp toàn diện 13 kiểu hình học VSEPR từ SN = 2 đến SN = 6 (Table 2.1)
│   │   ├── 4.3.3 Phân tích các khung cơ bản SN = 2 (AX_2), SN = 3 (AX_3, AX_2E) và SN = 4 (AX_4, AX_3E, AX_2E_2)
│   │   └── 4.3.4 Lưu ý về phạm vi áp dụng VSEPR đối với phức chất kim loại chuyển tiếp ([Fe(CN)_6]^4-, [PtCl_4]^2-)
│   ├── 4.4 Bất đối xứng vị trí trong khung SN = 5 (Trục vs. Xích đạo) & Khung SN = 6 {T-02.4.4} [SRC: S-02.3, S-02.4] (M-02.08)
│   │   ├── 4.4.1 Sự không tương đương giữa vị trí trục (axial, 90°) và vị trí xích đạo (equatorial, 120°) khi SN = 5
│   │   ├── 4.4.2 Quy tắc ưu tiên vị trí xích đạo của cặp electron tự do: Sự hình thành dạng bập bênh (AX_4E), chữ T (AX_3E_2) và thẳng hàng (AX_2E_3)
│   │   └── 4.4.3 Khung bát diện SN = 6: Từ bát diện đều (AX_6) đến tháp chóp vuông (AX_5E) và vuông phẳng (AX_4E_2)
│   ├── 4.5 Quy tắc Bent & Sự lệch góc liên kết thực tế do độ âm điện {T-02.4.5} [SRC: S-02.4] (M-02.09)
│   │   ├── 4.5.1 Phát biểu Quy tắc Bent và khái niệm định tính về đặc tính p của orbital liên kết
│   │   └── 4.5.2 Phân tích thực nghiệm sự thu hẹp góc liên kết trong các cặp H_2O / OF_2 và NH_3 / NF_3
│   └── 4.6 Ứng dụng VSEPR: Dự đoán độ phân cực (μ_pt), độ tan & Định hướng tương tác thuốc – đích {T-02.4.6} [SRC: S-02.1, S-02.3, S-02.5] (M-02.10)
│       ├── 4.6.1 Từ hình học VSEPR đến sự triệt tiêu hoặc cộng hưởng vector momen lưỡng cực toàn phân tử (μ_pt)
│       └── 4.6.2 Vai trò của cấu trúc không gian đối với tính hòa tan và sự khớp nối lập thể tại đích tác dụng sinh học
├── 5. Ví dụ minh họa & Quy trình thực hành (Examples & Illustrations) {T-02.5}
│   ├── 5.1 Ví dụ 2.1: Xác định SN, hình học và xu hướng góc liên kết của CH_4, NH_3, H_2O, SF_6 {T-02.5.1} [SRC: S-02.6] (M-02.11)
│   ├── 5.2 Ví dụ 2.2: Biện luận vị trí cặp electron tự do và độ lệch góc trong khung SN = 5 (PCl_5, SF_4, ClF_3, XeF_2) {T-02.5.2} [SRC: S-02.4, S-02.7] (M-02.12)
│   ├── 5.3 Ví dụ 2.3: Dự đoán hình học của các oxoanion và phân tử có liên kết bội (CO_3^2-, NO_2^-, SO_4^2-, I_3^-) {T-02.5.3} (M-02.13)
│   ├── 5.4 Quy trình chuẩn 4 bước & Sơ đồ thuật toán xác định hình học VSEPR (Mermaid) {T-02.5.4} [SRC: S-02.2, S-02.8] (M-02.14)
│   └── 5.5 Minh họa trực quan cấu trúc không gian 3D & Sự lệch góc liên kết (Placeholders) {T-02.5.5} (M-02.15)
├── 6. Tóm tắt chương (Chapter Summary) {T-02.6}
│   ├── 6.1 Tóm tắt nội dung trọng tâm & Quy tắc ghi nhớ nhanh {T-02.6.1} [SRC: S-02.8] (M-02.16)
│   └── 6.2 Bảng tổng hợp công thức, ký hiệu và mối quan hệ khái niệm {T-02.6.2} (M-02.17)
├── 7. Đánh giá & Bài tập tự lượng giá (Review & Assessment) {T-02.7}
│   ├── 7.1 Câu hỏi lý thuyết: Nhận biết & Thông hiểu (LO-1, LO-2) {T-02.7.1} (M-02.18)
│   ├── 7.2 Bài tập áp dụng & Tính toán cấu trúc lập thể (LO-2, LO-3) {T-02.7.2} (M-02.19)
│   ├── 7.3 Câu hỏi phân tích & Vận dụng nâng cao trong Hóa dược (LO-3, LO-4) {T-02.7.3} (M-02.20)
│   └── 7.4 Đáp án & Hướng dẫn giải chi tiết (Answer Key) {T-02.7.4} (M-02.21)
└── 8. Tài liệu tham khảo (References) {T-02.8}
    └── 8.1 Danh mục tài liệu tham khảo & Đọc thêm {T-02.8.1} (M-02.22)
```

### C.2 Kế hoạch bổ sung nội dung mới và lý do sư phạm
1. **Khung sư phạm đại học (`T-02.1`, `T-02.2`, `T-02.3`):** Bổ sung tiêu đề chương, phạm vi, kiến thức tiên quyết (liên kết Lewis và momen lưỡng cực từ Chương 1), thời lượng học dự kiến và 4 chuẩn đầu ra `LO-1`..`LO-4`.
2. **Định nghĩa phân biệt Hình học cặp electron vs. Hình học phân tử (`T-02.4.3`) và điều kiện áp dụng công thức $SN$ (`T-02.4.2`):** Giúp sinh viên không bị lúng túng khi gặp $HCN, O_3, I_3^-$ hoặc khi đối chiếu giữa hai cột của bảng tổng hợp `S-02.3`.
3. **Ví dụ giải mẫu 2.3 (`T-02.5.3`):** Các ví dụ có sẵn ở nguồn (`S-02.6`, `S-02.7`) chỉ xét phân tử trung hòa có phối tử đơn hóa trị ($CH_4, NH_3, H_2O, SF_6, PCl_5, SF_4, ClF_3, XeF_2$). Việc bổ sung Ví dụ 2.3 dùng chính các chất đã có mặt trong bảng `S-02.3` ($CO_3^{2-}, NO_2^-, SO_4^{2-}, I_3^-$) giúp minh họa trọn vẹn cách thay $q \ne 0$ và $M = 0$ vào công thức $SN = (V+M-q)/2$.
4. **Sơ đồ thuật toán Mermaid (`T-02.5.4`) và hệ thống khung giữ chỗ hình 3D (`T-02.5.5`):** Giải quyết triệt để hạn chế 0 hình vẽ của file gốc (`I-02.17`) theo đúng quy định `FIGURE_POLICY`.
5. **Bộ câu hỏi và bài tập tự lượng giá (`T-02.7.1`–`T-02.7.4`):** Cung cấp 10 câu hỏi/bài tập phân tầng từ Nhận biết đến Phân tích nâng cao kèm lời giải từng bước.

### C.3 Rủi ro về độ sâu kiến thức (Depth Risks) & Biện pháp kiểm soát
- **Rủi ro 1 (Phức chất kim loại chuyển tiếp trong bảng VSEPR — `I-02.21`):** Nguồn xếp $[Fe(CN)_6]^{4-}$ vào $AX_6$ ($n=0$) và $[PtCl_4]^{2-}$ vào $AX_4E_2$ ($n=2$). *Biện pháp:* Giữ nguyên hai ví dụ này trong bảng `Table 2.1` để bảo toàn tuyệt đối dữ liệu nguồn, nhưng bổ sung hộp lưu ý học thuật giải thích rằng đối với ion kim loại chuyển tiếp có phân lớp $d$ chưa bão hòa ($Fe^{2+}$ cấu hình $d^6$, $Pt^{2+}$ cấu hình $d^8$), cấu trúc bát diện hay vuông phẳng thực chất do thuyết Trường phối tử / Lai hóa orbital $d^2sp^3, dsp^2$ quyết định (sẽ học tại Chương 3 và Chương 6), do đó không áp dụng máy móc công thức $SN = (V+M-q)/2$ của nguyên tố nhóm chính.
- **Rủi ro 2 (Thuật ngữ xuất hiện trước khi định nghĩa ở Chương 3 — `I-02.10`, `I-02.11`):** Nguồn dùng "liên kết $\sigma$" ở `S-02.2` và "orbital có đặc tính $p$" ở `S-02.4`. *Biện pháp:* Giải thích ngắn gọn ý nghĩa vật lý ở mức định tính (liên kết $\sigma$ là liên kết đơn trục nối hai hạt nhân; tăng đặc tính $p$ làm góc giữa các orbital tiến gần về góc $90^\circ$ của các orbital $p$ thuần khiết) và đặt liên kết chéo tường minh sang Chương 3.
- **Rủi ro 3 (Tuân thủ `DOMAIN_RULES` trong phần ứng dụng Hóa dược — `I-02.20`):** Nguồn nêu ý nghĩa định hướng không gian khi gắn vào enzyme/thụ thể. *Biện pháp:* Chỉ phân tích khía cạnh lập thể và độ phân cực phân tử bám sát nguồn; tuyệt đối không tự ý thêm tên biệt dược, liều dùng, chỉ định lâm sàng hay thông số dược động học.

### C.4 Đối chiếu dung lượng nguồn và dung lượng kế hoạch
- **Dung lượng nguồn (`D-02`):** 1.267 từ; 1 bảng; 4 công thức; 2 hộp ví dụ; 1 hộp ghi nhớ; 0 câu hỏi bài tập.
- **Dung lượng kế hoạch (`ch02_draft.md`):** ~3.300 – 3.800 từ (đáp ứng `TARGET_LENGTH_PER_CHAPTER: not shorter than source; no upper limit`).
- **Thời lượng học tập ước tính (`STUDY_TIME_RULE`):** Với ~1.800–2.000 từ nội dung lý thuyết/ví dụ chính và 10 câu hỏi/bài tập tự lượng giá → $1\text{ giờ } 15\text{ phút}$ đọc hiểu lý thuyết + $40\text{ phút}$ làm bài tập $\approx 2,0\text{ giờ}$ (hoặc $1,5\text{–}2,0\text{ giờ}$).

### C.5 Dự thảo Chuẩn đầu ra Học tập (Draft Learning Objectives)
- **`LO-1` (Kiến thức – Nhận biết & Thông hiểu):** Phát biểu được nguyên lý cơ bản của thuyết VSEPR (Gillespie–Nyholm), giải thích được thứ tự độ lớn lực đẩy tĩnh điện $\text{LP–LP} > \text{LP–BP} > \text{BP–BP}$ và phân biệt được khái niệm *hình học cặp electron* (Electron Geometry) với *hình học phân tử* (Molecular Shape).
- **`LO-2` (Kỹ năng – Vận dụng):** Áp dụng thành thạo công thức $SN = m + n = \frac{V + M - q}{2}$ kết hợp cấu trúc Lewis để xác định công thức VSEPR ($AX_mE_n$), số phối trí lập thể ($SN = 2 \div 6$) và gọi đúng tên hình học không gian của các phân tử cộng hóa trị cũng như các ion đa nguyên tử phổ biến.
- **`LO-3` (Phân tích – Biện luận lập thể):** Biện luận được quy tắc ưu tiên vị trí xích đạo (equatorial) của cặp electron tự do trong khung lưỡng chóp tam giác ($SN = 5$) và vận dụng Quy tắc Bent cùng độ lớn lực đẩy cặp electron để giải thích sự lệch góc liên kết thực nghiệm (như dãy $CH_4, NH_3, H_2O$; cặp $H_2O/OF_2$; $NH_3/NF_3$; $SF_4, ClF_3, BrF_5$).
- **`LO-4` (Năng lực tích hợp – Liên hệ Hóa dược):** Kết hợp hình học không gian VSEPR với quy tắc cộng vector momen lưỡng cực ($\vec{\mu}_{pt}$) từ Chương 1 để dự đoán tính phân cực, khả năng hòa tan và giải thích vai trò của cấu trúc không gian đối với sự định hướng gắn kết thuốc – đích sinh học.

### C.6 Kế hoạch kiểm tra đánh giá (Assessment Plan theo cấp độ nhận thức)

| Tiểu mục T7 | Cấp độ nhận thức | Chuẩn đầu ra được phủ | Số lượng & Dạng câu hỏi dự kiến |
|---|---|---|---|
| `T-02.7.1` | Knowledge & Comprehension (Nhận biết & Thông hiểu) | `LO-1`, `LO-2` | 4 câu hỏi (trắc nghiệm khách quan & tự luận ngắn): thứ tự lực đẩy cặp e, vai trò liên kết bội trong $SN$, phân biệt hình học cặp e vs. hình học phân tử khi $n > 0$. |
| `T-02.7.2` | Application (Vận dụng) | `LO-2`, `LO-3` | 3 bài tập tính toán & xác định cấu trúc: tính $SN = (V+M-q)/2$, lập công thức $AX_mE_n$, dự đoán hình học và xét sự triệt tiêu momen lưỡng cực $\vec{\mu}_{pt}$ cho dãy phân tử và oxoanion/polyhalide ($SO_2, SO_3, SO_4^{2-}, NO_2^-, NO_3^-, I_3^-, XeF_4$). |
| `T-02.7.3` | Analytical & Advanced (Phân tích & Vận dụng nâng cao) | `LO-3`, `LO-4` | 3 câu hỏi phân tích chuyên sâu: (1) chứng minh bằng số tương tác $90^\circ$ vì sao LP chọn vị trí xích đạo trong $SF_4, ClF_3, XeF_2$; (2) vận dụng Quy tắc Bent giải thích $\widehat{H-O-H} > \widehat{F-O-F}$ và $\widehat{H-N-H} > \widehat{F-N-F}$; (3) phân tích mối liên hệ giữa hình học không gian, độ phân cực và khả năng tương tác với đích sinh học. |
| `T-02.7.4` | Answer Key | `LO-1`..`LO-4` | Hướng dẫn giải chi tiết từng bước (10/10 câu) kèm kiểm tra bảo toàn số electron hóa trị. |

### C.7 Ứng viên Thuật ngữ (Glossary Candidates) & Chuẩn hóa Ký hiệu

| Thuật ngữ / Đại lượng | Dạng viết trong nguồn (`D-02`) | Dạng chuẩn hóa cho S3 & Glossary | Ghi chú chuẩn hóa |
|---|---|---|---|
| Thuyết VSEPR | `thuyết VSEPR (Gillespie - Nyholm)` | **Thuyết đẩy cặp electron vỏ hóa trị (Valence Shell Electron Pair Repulsion – VSEPR)** | Nêu đầy đủ tên tiếng Việt và tiếng Anh ở lần đầu sử dụng (`T-02.1.1`, `T-02.4.1`). |
| Số phối trí lập thể | `số phối trí lập thể ($SN$)`, `Số lập thể ($SN$)`, `số miền electron` | **Số phối trí lập thể (Steric Number – $SN$)** (mở ngoặc: *hay số lập thể / tổng số miền electron*) | Thống nhất dùng "Số phối trí lập thể ($SN$)" làm thuật ngữ chính; phân biệt với số phối trí $CN$ của phức chất. |
| Cặp electron tự do / liên kết | `LP = Lone Pair - Cặp electron tự do; BP = Bonding Pair - Cặp electron liên kết` | **Cặp electron tự do (Lone Pair – $\text{LP}$)**; **Cặp electron liên kết (Bonding Pair – $\text{BP}$)** | Giữ nguyên ký hiệu chuẩn $\text{LP}, \text{BP}$. |
| Hình học cặp electron vs. Hình học phân tử | `Hình học cặp e (Electron Geometry)` / `Hình học phân tử (Molecular Shape)` | **Hình học cặp electron (Electron Geometry)** / **Hình học phân tử (Molecular Shape / Molecular Geometry)** | Bổ sung định nghĩa phân biệt tường minh tại `T-02.4.3`. |
| Vị trí trục & vị trí xích đạo | `vị trí trục (axial)`, `vị trí mặt phẳng xích đạo (equatorial)` | **Vị trí trục (axial – $\text{ax}$)** và **Vị trí xích đạo (equatorial – $\text{eq}$)** | Chuẩn hóa ký hiệu chỉ số dưới $\text{ax}, \text{eq}$ khi giải thích góc của $SF_4, ClF_3$. |
| Góc liên kết | `$109{,}5^\circ$`, `$109,5^\circ$`, `$\widehat{H-O-H}$` | Ký hiệu đại lượng $\theta$ (kế thừa `T-01.4.2`) và ký hiệu góc cụ thể $\widehat{X\text{–}A\text{–}X}$; dấu phẩy thập phân thống nhất `,` | Đồng bộ với `carryover_latest.md` của Chương 1. |
| Điện tích ion trong công thức $SN$ | `$q$: Điện tích đại số của ion` | $q$ (ghi rõ: *điện tích đại số của phân tử/ion, đơn vị điện tích nguyên tố $e$, để phân biệt với điện tích phần $q$ trong $\vec{\mu} = q\cdot\vec{d}$ ở Chương 1*) | Tránh nhầm lẫn ký hiệu giữa Chương 1 và Chương 2. |

### C.8 Liên kết chéo giữa các chương (Cross-References)
- **Liên kết ngược về Chương 1 (`D-01`):**
  - Tham chiếu `T-01.4.2` (Góc liên kết $\theta$ và momen lưỡng cực toàn phân tử $\vec{\mu}_{pt} = \sum \vec{\mu}_i$) khi giải thích vì sao các phân tử đối xứng ($AX_2$ thẳng hàng, $AX_3$ tam giác phẳng, $AX_4$ tứ diện đều, $AX_5$ lưỡng chóp tam giác, $AX_6$ bát diện đều, $AX_2E_3$ thẳng hàng, $AX_4E_2$ vuông phẳng với cùng phối tử $X$) có $\vec{\mu}_{pt} = 0$, trong khi các phân tử có cặp LP bất đối xứng ($AX_2E, AX_3E, AX_2E_2, AX_4E, AX_3E_2, AX_5E$) có $\vec{\mu}_{pt} > 0$.
  - Tham chiếu `T-01.4.4`–`T-01.4.6` (Công thức Lewis, cộng hưởng trong $CO_3^{2-}, NO_3^-, SO_4^{2-}$ và các ngoại lệ thiếu electron $BeCl_2, BF_3$ cũng như siêu hóa trị $PCl_5, SF_6, XeF_4$).
- **Liên kết xuôi sang Chương 3 (`D-03` — Thuyết VB & Lai hóa Orbital):**
  - Đặt liên kết từ $SN = 2, 3, 4, 5, 6$ sang các trạng thái lai hóa tương ứng $sp, sp^2, sp^3, sp^3d, sp^3d^2$ và từ Quy tắc Bent (`T-02.4.5`) sang bản chất lai hóa orbital $s\text{–}p$.
- **Liên kết xuôi sang Chương 5 (`D-05` — Tương tác Liên phân tử & Liên kết Hydro):**
  - Hình học chữ V ($104,5^\circ$) của $H_2O$ và hình tháp chóp tam giác ($107,3^\circ$) của $NH_3$ cùng các cặp electron tự do (LP) là tiền đề hình thành mạng lưới liên kết hydro và quyết định độ tan của dược chất.
- **Liên kết xuôi sang Chương 6 & 7 (`D-06`, `D-07` — Hóa học Phối trí & Đồng phân Phức chất):**
  - Hình học bát diện ($[Fe(CN)_6]^{4-}$) và vuông phẳng ($[PtCl_4]^{2-}$) là cầu nối sang cấu trúc phức chất kim loại chuyển tiếp và đồng phân *cis/trans* trong dược chất vô cơ (như các phức chất platin).

---

## D. Verification Items Carried Forward from Audit

Toàn bộ 9 hạng mục trong Verification Queue (`V-02.01` đến `V-02.09`) từ `01_audit/ch02_audit.md` được gán vào các mục đích `T-02.x.y` cụ thể:

| V-ID | Nội dung cần kiểm chứng | Loại | Mục T-ID tiếp nhận | Kế hoạch xử lý trong S3 |
|---|---|---|---|---|
| `V-02.01` | Công thức $SN = (V + M - q)/2$ và quy tắc tính $M$ cho phối tử đa hóa trị ($N$ trong $HCN$, nguyên tử biên trong $O_3, I_3^-$) | formula / method | `T-02.4.2`, `T-02.5.3` | Giữ nguyên công thức nguồn; bổ sung hướng dẫn đếm trực tiếp từ cấu trúc Lewis và quy tắc cho phối tử hóa trị ba; gắn thẻ kiểm chứng. |
| `V-02.02` | Việc xếp phức chất kim loại chuyển tiếp $[Fe(CN)_6]^{4-}$ ($AX_6, n=0$) và $[PtCl_4]^{2-}$ ($AX_4E_2, n=2$) vào bảng VSEPR | theory / classification | `T-02.4.3` | Giữ nguyên trong bảng `Table 2.1`; thêm chú thích học thuật nêu rõ giới hạn của VSEPR với phức chất $d^6, d^8$ và gắn thẻ kiểm chứng để chuyên gia xác nhận. |
| `V-02.03` | Số liệu góc liên kết thực nghiệm của các phân tử chu kỳ 2–3: $SO_2 \approx 119^\circ$, $NH_3 \approx 107,3^\circ$, $H_2O \approx 104,5^\circ$ | number | `T-02.4.3`, `T-02.5.1` | Giữ đúng số liệu của nguồn; gắn thẻ kiểm chứng số liệu thực nghiệm chưa có nguồn trích dẫn. |
| `V-02.04` | Số liệu góc liên kết của các phân tử siêu hóa trị: $SF_4 \approx 87^\circ, 102^\circ$; $ClF_3 \approx 87,5^\circ$; $BrF_5 \approx 84,8^\circ$ | number | `T-02.4.3`, `T-02.4.4`, `T-02.5.2` | Giữ đúng số liệu nguồn; giải thích rõ hai góc $<90^\circ$ ($\approx 87^\circ$) và $<120^\circ$ ($\approx 102^\circ$) trong hình bập bênh của $SF_4$; gắn thẻ kiểm chứng. |
| `V-02.05` | Số liệu góc liên kết minh họa Quy tắc Bent: $\widehat{H-O-H} (104,5^\circ) > \widehat{F-O-F} (103,1^\circ)$ và $\widehat{H-N-H} (107,3^\circ) > \widehat{F-N-F} (102,5^\circ)$ | number | `T-02.4.5` | Giữ nguyên biểu thức và số liệu của nguồn; gắn thẻ kiểm chứng dữ liệu cấu trúc. |
| `V-02.06` | Cơ sở giải thích Quy tắc Bent (quan hệ giữa đặc tính $p$, độ âm điện nhóm thế và độ mở góc liên kết) | theory | `T-02.4.5` | Bổ sung giải thích định tính ngắn gọn về đặc tính $s/p$ và liên kết chéo sang Chương 3; gắn thẻ kiểm chứng. |
| `V-02.07` | Quy tắc kinh nghiệm: "Mỗi cặp e tự do 'co' góc liên kết khoảng $2\text{–}2,5^\circ$" | convention / heuristic | `T-02.6.1` | Giữ nguyên mẹo nhớ của nguồn nhưng ghi chú rõ quy tắc này nghiệm đúng điển hình trên khung tứ diện $SN = 4$ ($109,5^\circ \to 107,3^\circ \to 104,5^\circ$). |
| `V-02.08` | Nhận định ứng dụng dược học về định hướng không gian của thuốc/phối tử khi gắn vào enzyme/thụ thể | application / claim | `T-02.4.6` | Giữ đúng nhận định khái quát của nguồn; gắn thẻ kiểm chứng; không thêm dữ liệu lâm sàng hay liều lượng ngoài nguồn theo `DOMAIN_RULES`. |
| `V-02.09` | Toàn bộ chương không có tài liệu tham khảo gốc | reference | `T-02.8.1` | Lập mục `T-02.8.1` với thẻ yêu cầu bổ sung giáo trình Hóa vô cơ Dược chuẩn từ giảng viên/người dùng. |

---

## E. Open Questions for Gate A (Câu hỏi xin ý kiến phê duyệt tại Gate A)

1. **Q1 (Xử lý hai phức chất $[Fe(CN)_6]^{4-}$ và $[PtCl_4]^{2-}$ trong bảng VSEPR — `M-02.07` / `V-02.02`):** Bạn có đồng ý giữ nguyên hai ví dụ này trong bảng tổng hợp VSEPR (`T-02.4.3`) để bảo toàn dữ liệu gốc, đồng thời bổ sung một ghi chú học thuật giải thích rằng cấu trúc bát diện của $[Fe(CN)_6]^{4-}$ ($d^6$) và vuông phẳng của $[PtCl_4]^{2-}$ ($d^8$) được quyết định bởi hiệu ứng trường phối tử / lai hóa orbital $d$ (sẽ học ở Chương 3 và Chương 6) chứ không tính theo công thức $SN = (V+M-q)/2$?
2. **Q2 (Hướng dẫn tính $SN$ cho $HCN, O_3, I_3^-$ và bổ sung Ví dụ 2.3 — `M-02.06`, `M-02.13`):** Bạn có đồng ý để S3 bổ sung quy tắc xác định $SN$ cho phân tử có phối tử hóa trị ba ($HCN$) và bổ sung Ví dụ giải mẫu 2.3 (`T-02.5.3`) cho các ion đa nguyên tử có sẵn trong bảng ($CO_3^{2-}, NO_2^-, SO_4^{2-}, I_3^-$)?
3. **Q3 (Cầu nối khái niệm "liên kết $\sigma$" và "đặc tính $p$" sang Chương 3 — `M-02.06`, `M-02.09`):** Bạn chấp nhận phương án giải thích ngắn gọn ở mức định tính cho hai khái niệm "liên kết $\sigma$" và "đặc tính $p$ của orbital" ngay tại Chương 2 kèm liên kết chéo sang Chương 3 (Thuyết VB & Lai hóa)?
4. **Q4 (Sơ đồ Mermaid và khung giữ chỗ `[FIGURE]` — `M-02.14`, `M-02.15`):** Bạn đồng ý với kế hoạch vẽ 1 sơ đồ thuật toán bằng Mermaid (`T-02.5.4`) và đặt các khung giữ chỗ mô tả hình học 3D chuẩn (`T-02.5.5`: 5 khung hình học cơ bản $SN=2..6$, so sánh vị trí trục/xích đạo trong $SN=5$, và so sánh góc liên kết theo Quy tắc Bent)?
5. **Q5 (Dung lượng dự kiến và bộ bài tập tự lượng giá `T7` — `M-02.18`–`M-02.21`):** Bạn đồng ý với kế hoạch xây dựng 10 câu hỏi/bài tập tự lượng giá kèm lời giải chi tiết tại `T7` (phủ đủ `LO-1`..`LO-4`), nâng tổng dung lượng chương từ 1.267 từ lên khoảng 3.300–3.800 từ?

---

## F. Not verified / limitations

- **Phạm vi dữ liệu:** Bản kế hoạch ánh xạ này chỉ dựa trên `00_source_original/ch02_doc-hvc-2.html` (`D-02`), báo cáo `01_audit/ch02_audit.md`, ngữ cảnh kế thừa `_state/carryover_latest.md` và bảng thuật ngữ `D-09`. File nguồn trong `00_source_original/` được giữ nguyên trạng tuyệt đối (READ-ONLY).
- **Số liệu thực nghiệm & Tài liệu tham khảo:** Các giá trị góc liên kết thực nghiệm ($119^\circ, 107,3^\circ, 104,5^\circ, 87^\circ, 102^\circ, 87,5^\circ, 84,8^\circ, 103,1^\circ, 102,5^\circ$) chưa được đối chiếu với sổ tay hóa lý ngoài nguồn và toàn bộ chương hiện có 0 tài liệu tham khảo gốc; tất cả đã được đưa vào mục D (`V-02.01`–`V-02.09`).
- **Kiểm tra cơ học:** Độ phủ S-ID (8/8 S-ID = 100%, 0 S-ID bị sót) và thống kê thẻ trong file ma trận được kiểm tra trực tiếp bằng hai công cụ `_tools/check_coverage.py` và `_tools/check_tags.py`, xuất báo cáo vào `_state/checks/ch02_s2_coverage.md` và `_state/checks/ch02_s2_tags.md`.
- **Giới hạn giai đoạn:** Dừng ngay tại GATE A theo quy tắc R9 và mục 7.2; chưa thực hiện viết bản thảo Stage S3.

---

GATE A: STOP. Awaiting user approval of the Content Mapping Matrix. Do not begin the transformation.
