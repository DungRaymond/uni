# ch08_matrix.md — S2 Mapping & Restructuring Plan · Chương 08

**Môn:** Y dược – Master Lecture Notes · **Stage:** S2 Mapping · **Ngày:** 2026-11-09  
**Nguồn đầu vào:** `00_source_original/ch08_doc-myd-8.html` (D-08), `01_audit/ch08_audit.md`, `_state/carryover_latest.md`  
**Khung cấu trúc:** Template v2 (`T1`–`T8`, `DISCIPLINE_TYPE: STEM-qualitative` theo `00_config.md`)  
**Quy tắc:** Ánh xạ 100% `S-08.1`–`S-08.4` sang `T-08.x.y` không làm mất nội dung; KHÔNG viết bài giảng chi tiết; dừng ở GATE A.

---

## A. Content Mapping Matrix

| Row ID | S-ID(s) | Summary (≤15 words) | Target T-ID and Name | Primary Action | Secondary Actions | Provenance After Transformation | Notes and Risks |
|---|---|---|---|---|---|---|---|
| M-08.01 | — | Tên chương, giới thiệu khái quát & phạm vi nội dung | `T-08.1` Chương 8: Điện thế màng và điện thế hoạt động | ADD | — | `[ADDED: structural frame]` | Nguồn `D-08` thiếu T1, tên chương chỉ ở `MANIFEST.md` (Q1). |
| M-08.02 | — | Kiến thức tiên kỳ và thời lượng học tập | `T-08.1.1` / `T-08.1.2` (phần của `T-08.1`) Phạm vi, Kiến thức Tiên quyết & Thời lượng Học tập | ADD | — | `[ADDED: study time estimate]` | Nguồn `D-08` không có phần kiến thức tiên quyết; bổ sung theo `STUDY_TIME_RULE`. |
| M-08.03 | — | Bốn chuẩn đầu ra kiến thức, kỹ năng, vận dụng, đánh giá mô hình | `T-08.2` Mục tiêu Học tập (Learning Objectives `LO-1`..`LO-4`) | ADD | — | `[ADDED: learning objectives]` | Suy ra từ `S-08.1`–`S-08.4`. |
| M-08.04 | — | Đặt vấn đề & ý nghĩa thực tiễn | `T-08.3` Đặt vấn đề & Ý nghĩa thực tiễn (Introduction) | ADD | — | `[ADDED: introduction frame]` | Nguồn `D-08` thiếu phần mở luận cấu trúc. |
| M-08.05 | S-08.1 | Điện thế màng phát sinh từ chênh lệch nồng độ ion và tính thấm chọn lọc; bơm Na⁺/K⁺ duy trì gradient; điện thế nghỉ xấp xỉ −70 mV | `T-08.4.1` Điện Thế Nghĩa (Resting Membrane Potential) | KEEP | EXPAND | S-08.1 `[SRC]` | Giữ nguyên định nghĩa điện thế nghỉ và vai trò bơm Na⁺/K⁺. |
| M-08.06 | S-08.2 | Kích thích đạt ngưỡng mở kênh Na⁺ phụ thuộc điện thế → khử cực; kênh Na⁺ bất hoạt, kênh K⁺ mở → tái cực; thời kỳ trơ; bao myelin dẫn truyền nhảy cóc | `T-08.4.2` Điện Thế Hoạt Động (Action Potential) | KEEP | EXPAND | S-08.2 `[SRC]` | Giữ nguyên cơ chế khử cực/tái cực và thời kỳ trơ. |
| M-08.07 | S-08.3 | Điện thế hoạt động cơ tim: pha bình nguyên liên quan dòng Ca²⁺; thuốc gây tê chẹn kênh Na⁺; thuốc chống loạn nhịp tác động lên kênh ion | `T-08.4.3` Cơ Tim & Liên Hệ Thuốc | KEEP | EXPAND | S-08.3 `[SRC]` | Giữ nguyên liên hệ điện thế hoạt động cơ tim với thuốc gây tê và chống loạn nhịp. |
| M-08.08 | S-08.4 | Điện thế màng là cơ sở của dẫn truyền thần kinh, co cơ và nhịp tim; hiểu ECG, rối loạn nhịp do thay đổi điện giải | `T-08.4.4` Ý Nghĩa & Ứng dụng Lâm Sàng | KEEP | EXPAND | S-08.4 `[SRC]` | Gộp ý nghĩa các mục 1–3 thành tiểu mục ứng dụng lâm sàng. |
| M-08.09 | — | Ví dụ Nernst với Na⁺: 140/14 mmol/L → +61,5 mV; điện thế màng từ −70 mV lên gần +30 mV | `T-08.5.1` Ví dụ 1: Nernst với Na⁺ & Pha Khử Cực | MERGE | MOVE | S-08.2 (example-box) `[SRC]` | Hộp ví dụ nguồn đã có sẵn, giữ nguyên số liệu. |
| M-08.10 | — | Cách nhớ: Na⁺ vào = khử cực; K⁺ ra = tái cực; Ca²⁺ vào = pha bình nguyên cơ tim; Nernst: ion ngoài càng nhiều → điện thế càng dương | `T-08.5.2` Mẹo nhớ Điện Thế Màng & Hoạt Động | MERGE | MOVE | S-08.2 (callout) `[SRC]` | Callout nguồn đã có sẵn. |
| M-08.11 | — | Sơ đồ sóng điện thế hoạt động: khử cực / tái cực / thời kỳ trơ (Mermaid) | `T-08.5.3` Sơ Đồ Điện Thế Hoạt Động (Mermaid) | ADD | — | `[ADDED: Mermaid flowchart]` | Chuyển quy tắc của S-08.2 thành flowchart; không thêm dữ kiện mới. |
| M-08.12 | — | Placeholder hình điện thế màng, kênh ion Na⁺/K⁺, điện thế hoạt động cơ tim | `T-08.5.4` Minh Họa Trực quan (Placeholders) | ADD | — | `[ADDED: figure placeholders]` + `[FIGURE]` | Nguồn có 0 hình (`I-08.04`); đặt placeholder theo `FIGURE_POLICY`. |
| M-08.13 | — | Tóm tắt nội dung trọng tâm & quy tắc ghi nhớ | `T-08.6.1` Tóm tắt Nội dung Trọng tâm & Quy tắc Ghi nhớ | MERGE | MOVE | S-08.1–S-08.4 `[SRC]` | Gộp điện thế nghỉ, hoạt động, cơ tim, ý nghĩa lâm sàng thành tóm tắt. |
| M-08.14 | — | Bảng tổng hợp công thức, đơn vị, quy ước dấu | `T-08.6.2` Bảng Tổng hợp Công thức & Lưu ý | ADD | — | `[ADDED: summary concept tables]` | Nguồn có 0 bảng (`I-08.05`); bổ sung bảng tổng hợp. |
| M-08.15 | — | Bộ 10 câu hỏi/bài tập tự lượng giá | `T-08.7` Đánh giá & Bài tập tự lượng giá | ADD | — | `[ADDED: exercises]` | Nguồn hoàn toàn không có bài tập (Q3). |
| M-08.16 | — | Đáp án & hướng dẫn giải từng bước | `T-08.7.4` Đáp án & Hướng dẫn Giải Chi tiết (Answer Key) | ADD | — | `[ADDED: step-by-step answer key]` | Mỗi đáp án ghi `LO` và cấp độ; tính Nernst hiển đủ bước. |
| M-08.17 | — | Danh mục tài liệu tham khảo và ghi chú truy vết theo R4 | `T-08.8.1` Tài liệu Tham khảo & Đọc thêm | ADD | — | `[ADDED: reference section structure]` + `[VERIFY: textbook references needed]` | Nguồn `D-08` có 0 trích dẫn (`I-08.05`, `V-08.04`); chờ người dùng cung cấp giáo trình chuẩn. |

**Tổng cộng:** 17 dòng ma trận.

---

## B. Coverage Check

### 1. Kiểm tra độ phủ S-ID từ Audit Register

- **Danh sách S-ID trong `01_audit/ch08_audit.md` (tổng cộng = 4 S-ID):** `S-08.1`, `S-08.2`, `S-08.3`, `S-08.4`.
- **Ánh xạ từng S-ID trong Ma trận Mapping (Bảng A):**
  - `S-08.1` → `M-08.05` (`T-08.4.1`)
  - `S-08.2` → `M-08.06` (`T-08.4.2`)
  - `S-08.3` → `M-08.07` (`T-08.4.3`)
  - `S-08.4` → `M-08.08` (`T-08.4.4`)
- **Số S-ID chưa được ánh xạ (Unmapped / Missing S-IDs): 0** (độ phủ **100,0%**).

### 2. Thống kê hành động chính (Primary Action Counts)

| Primary Action | Số dòng ma trận | Tỷ lệ (%) | Danh sách Row ID |
|---|---|---|---|
| **ADD** (khung sư pháp, bảng, hình, ví dụ/bài tập mới) | 11 | 64,7% | M-08.01, M-08.02, M-08.03, M-08.04, M-08.11, M-08.12, M-08.14, M-08.15, M-08.16, M-08.17 |
| **KEEP** (giữ nội dung cốt lõi tại đúng phân khu) | 4 | 23,5% | M-08.05, M-08.06, M-08.07, M-08.08 |
| **MERGE** | 2 | 11,8% | M-08.09, M-08.10 |
| **MOVE** | 0 | 0,0% | (dùng làm secondary cho M-08.09, M-08.10) |
| **REMOVE** | 0 | 0,0% | Không có dòng REMOVE (bảo toàn 100% dữ liệu nguồn) |
| **Tổng cộng** | **17 dòng** | **100,0%** | — |

### 3. Ước tính tỷ lệ nội dung mới và thống kê thẻ

- **Dung lượng nguồn gốc (`D-08`):** 872 từ (bảo toàn toàn bộ).
- **Dung lượng dự kiến bản thảo hoàn chỉnh (`ch08_draft.md`):** khoảng **3.500–4.000 từ** (đáp ứng `TARGET_LENGTH_PER_CHAPTER: not shorter than source; no upper limit`), tương đương **4–4,5 lần** nguồn (nguồn rất ngắn, cần mở rộng khung sư pháp và bài tập).

---

## C. Chapter Restructuring Plan

### C.1 Đề cương chi tiết đến cấp Tiểu mục / Chủ đề

```text
Chương 8: Điện thế màng và điện thế hoạt động (tên tạm, chờ xác nhận MANIFEST)
├── 1. Tổng quan chương (Chapter Overview) {T-08.1}
│   ├── 1.1 Tên chuyên đề, giới thiệu khái quát & phạm vi nội dung {T-08.1.1} (M-08.01)
│   └── 1.2 Kiến thức tiên kỳ & Thời lượng học tập dự kiến {T-08.1.2} (M-08.02)
├── 2. Mục tiêu học tập (Learning Objectives) {T-08.2}
│   └── 2.1 Chuẩn đầu ra Kiến thức, Kỹ năng, Vận dụng và Đánh giá mô hình (LO-1..LO-4) {T-08.2.1} (M-08.03)
├── 3. Đặt vấn đề & Ý nghĩa thực tiễn (Introduction) {T-08.3}
│   └── 3.1 Tại sao điện thế màng quan trọng trong y dược {T-08.3.1} (M-08.04)
├── 4. Nội dung bài giảng chính (Main Content) {T-08.4}
│   ├── 4.1 Điện Thế Nghĩa (Resting Membrane Potential) {T-08.4.1} [SRC: S-08.1] (M-08.05)
│   ├── 4.2 Điện Thế Hoạt Động (Action Potential) {T-08.4.2} [SRC: S-08.2] (M-08.06)
│   ├── 4.3 Cơ Tim & Liên Hệ Thuốc {T-08.4.3} [SRC: S-08.3] (M-08.07)
│   └── 4.4 Ý Nghĩa & Ứng dụng Lâm Sàng {T-08.4.4} [SRC: S-08.4] (M-08.08)
├── 5. Ví dụ minh họa & Quy trình thực hành (Examples & Illustrations) {T-08.5}
│   ├── 5.1 Ví dụ 1: Nernst với Na⁺ & Pha Khử Cực {T-08.5.1} [SRC] (M-08.09)
│   ├── 5.2 Mẹo nhớ Điện Thế Màng & Hoạt Động {T-08.5.2} [SRC] (M-08.10)
│   ├── 5.3 Sơ Đồ Điện Thế Hoạt Động (Mermaid) {T-08.5.3} (M-08.11)
│   └── 5.4 Minh Họa Trực quan (Placeholders) {T-08.5.4} (M-08.12)
├── 6. Tóm tắt chương (Chapter Summary) {T-08.6}
│   ├── 6.1 Tóm tắt Nội dung Trọng tâm & Quy tắc Ghi nhớ {T-08.6.1} (M-08.13)
│   └── 6.2 Bảng Tổng hợp Công thức & Lưu ý {T-08.6.2} (M-08.14)
├── 7. Đánh giá & Bài tập tự lượng giá (Review & Assessment) {T-08.7}
│   ├── 7.1 Câu hỏi lý thuyết: Nhận biết & Thông hiểu (LO-1) {T-08.7.1} (phần của M-08.15)
│   ├── 7.2 Bài tập áp dụng: Tính toán Nernst & điện thế màng (LO-2, LO-3) {T-08.7.2} (phần của M-08.15)
│   ├── 7.3 Câu hỏi phân tích & vận dụng nâng cao (LO-3, LO-4) {T-08.7.3} (phần của M-08.15)
│   └── 7.4 Đáp án & Hướng dẫn giải chi tiết (Answer Key) {T-08.7.4} (M-08.16)
└── 8. Tài liệu tham khảo (References) {T-08.8}
    └── 8.1 Danh mục Tài liệu tham khảo & Đọc thêm {T-08.8.1} (M-08.17)
```

### C.2 Kế hoạch bổ sung nội dung mới và lý do sư pháp

1. **Khung sư pháp T1–T3:** Tên chương, giới thiệu, kiến thức tiên kỳ, thời lượng học tập, 4 chuẩn đầu ra `LO-1`..`LO-4`.
2. **Sơ đồ thuật toán Mermaid (`T-08.5.3`):** Sóng điện thế hoạt động (khử cực / tái cực / thời kỳ trơ).
3. **Placeholder hình (`T-08.5.4`):** Điện thế màng, kênh ion Na⁺/K⁺, điện thế hoạt động cơ tim.
4. **Bảng tổng hợp mới (`T-08.6.2`):** Tổng hợp công thức Nernst, đơn vị mV, lưu ý lâm sàng.
5. **Bộ 10 câu hỏi/bài tập + đáp án (`T-08.7`):** Nguồn hoàn toàn không có đánh giá.
6. Giữ nguyên toàn bộ nội dung nguồn; không cắt nội dung (Q2).

### C.3 Rủi ro & Biện pháp kiểm soát

- **Rủi ro 1 (Tên chương chưa chốt):** Xác nhận tại MANIFEST (Q1).
- **Rủi ro 2 (Nguồn rất ngắn, 872 từ):** Nếu mở rộng lên 3.500–4.000 thì tỷ lệ 4–4,5×. Đây là mở rộng khung sư pháp và bài tập, không cắt nội dung nguồn.
- **Rủi ro 3 (0 bài tập, 0 hình):** Bổ sung `[ADDED]` bài tập và `[FIGURE]` placeholder (Q3, Q4).
- **Rủi ro 4 (0 tài liệu tham khảo):** Đặt `[VERIFY]` (Q5), không bịa nguồn.

### C.4 Chuẩn đầu ra Học tập (Draft LO)

- **`LO-1` (Kiến thức):** Phát biểu định nghĩa điện thế nghỉ và điện thế hoạt động; phân biệt khử cực, tái cực và quá phân cực; liệt kê vai trò của kênh Na⁺, K⁺, Ca²⁺ trong điện thế hoạt động.
- **`LO-2` (Kỹ năng):** Tính toán điện thế cân bằng ion đơn lẻ bằng phương trình Nernst; phân biệt điện thế nghỉ (−70 mV) và điện thế hoạt động (lên gần +30 mV).
- **`LO-3` (Vận dụng):** Giải thích cơ chế điện thế hoạt động cơ tim liên quan đến dòng Ca²⁺; liên hệ thuốc gây tê/chống loạn nhịp với kênh ion.
- **`LO-4` (Đánh giá mô hình):** Đánh giá vai trò của điện thế màng trong dẫn truyền thần kinh, co cơ và nhịp tim; liên hệ rối loạn K⁺/Ca²⁺ với nguy cơ tim mạch.

### C.5 Glossary & Chuẩn hóa

| Thuật ngữ | Dạng trong nguồn | Dạng chuẩn hóa | Ghi chú |
|---|---|---|---|
| Điện thế nghỉ | `Điện thế nghỉ` | **Điện thế nghỉ (resting membrane potential)** | Giữ nguyên. |
| Điện thế hoạt động | `Điện thế hoạt động` | **Điện thế hoạt động (action potential)** | Giữ nguyên. |
| Khử cực | `Khử cực` | **Khử cực (depolarization)** | Giữ nguyên. |
| Tái cực | `Tái cực` | **Tái cực (repolarization)** | Giữ nguyên. |
| Quá phân cực | `Quá phân cực` | **Quá phân cực (hyperpolarization)** | Giữ nguyên. |
| Thời kỳ trơ | `Thời kỳ trơ` | **Thời kỳ trơ (refractory period)** | Giữ nguyên. |
| Bao myelin | `Bao myelin` | **Bao myelin (myelin sheath)** | Giữ nguyên. |
| Eo Ranvier | `Eo Ranvier` | **Eo Ranvier (node of Ranvier)** | Giữ nguyên. |
| Phương trình Nernst | `Phương trình Nernst` | **Phương trình Nernst (Nernst equation)** | Giữ nguyên. |
| Thuốc gây tê tại chỗ | `Thuốc gây tê tại chỗ` | **Thuốc gây tê tại chỗ (local anesthetic)** | Giữ nguyên. |
| Thuốc chống loạn nhịp | `Thuốc chống loạn nhịp` | **Thuốc chống loạn nhịp (antiarrhythmic)** | Giữ nguyên. |

---

## D. Verification Items Carried Forward

| V-ID | Nội dung cần kiểm chứng | Loại | Mục T-ID tiếp nhận | Kế hoạch xử lý trong S3 |
|---|---|---|---|---|
| `V-08.01` | Tên chương chính xác | reference | `T-08.1` | Xác nhận MANIFEST (Q1). |
| `V-08.02` | Giá trị điện thế nghỉ (−70 mV), điện thế hoạt động (+30 mV), E_K (−95 mV) | number | `T-08.4.1`, `T-08.5.1` | Giữ đúng nguồn; gắn `[VERIFY]`. |
| `V-08.03` | 0 hình vẽ/sơ đồ trong nguồn | structure | `T-08.5.4` | Đặt `[FIGURE]` placeholder (Q4). |
| `V-08.04` | 0 tài liệu tham khảo | reference | `T-08.8.1` | Đặt `[VERIFY: reference needed …]` (Q5). |

---

## E. Open Questions for Gate A

1. **Q1 (Tên chương):** Xác nhận tên Ch08 tại `MANIFEST.md` (hiện dùng "Điện thế màng và điện thế hoạt động").
2. **Q2 (Nguồn ngắn, mở rộng):** Nguồn chỉ 872 từ, 4 mục; S3 mở rộng lên ~3.500–4.000 bằng khung sư pháp và bài tập. Đồng ý?
3. **Q3 (Bài tập):** Đồng ý S3 bổ sung bộ 10 câu hỏi/bài tập `[ADDED]`?
4. **Q4 (Hình):** Đồng ý S3 đặt placeholder `[FIGURE]` cho điện thế màng, kênh ion Na⁺/K⁺, điện thế hoạt động cơ tim?
5. **Q5 (Tài liệu tham khảo):** Đồng ý để `[VERIFY: reference needed …]`, `APPROVED_REFERENCE_LIST: none`?

---

## F. Not verified / limitations

- Chỉ dựa trên D-08; 0 trích dẫn; 0 hình vẽ; 0 bài tập trong nguồn.
- Tất cả giá trị số giữ nguyên nguồn; gắn `[VERIFY]` khi cần chuyên gia xác nhận.
- Dừng tại GATE A theo R9.

---

GATE A: STOP. Awaiting user approval of the Content Mapping Matrix. Do not begin the transformation.