# ch12_matrix.md — S2 Mapping & Restructuring Plan · Chương 12

**Môn:** Y dược – Master Lecture Notes · **Stage:** S2 Mapping · **Ngày:** 2026-11-09  
**Nguồn đầu vào:** `00_source_original/ch12_doc-myd-14.html` (D-12), `01_audit/ch12_audit.md`, `_state/carryover_latest.md`  
**Khung cấu trúc:** Template v2 (`T1`–`T8`, `DISCIPLINE_TYPE: STEM-qualitative` theo `00_config.md`)  
**Quy tắc:** Ánh xạ 100% `S-12.1`–`S-12.6` sang `T-12.x.y` không làm mất nội dung; KHÔNG viết bài giảng chi tiết; dừng ở GATE A.

---

## A. Content Mapping Matrix

| Row ID | S-ID(s) | Summary (≤15 words) | Target T-ID and Name | Primary Action | Secondary Actions | Provenance After Transformation | Notes and Risks |
|---|---|---|---|---|---|---|---|
| M-12.01 | — | Tên chương, giới thiệu khái quát & phạm vi nội dung | `T-12.1` Chuyên đề 14: Dị ứng và các phản ứng quá mẫn | ADD | — | `[ADDED: structural frame]` | Nguồn `D-12` thiếu T1, tên chương chỉ ở `MANIFEST.md` (Q1). |
| M-12.02 | — | Kiến thức tiên kỳ và thời lượng học tập | `T-12.1.1` / `T-12.1.2` (phần của `T-12.1`) Phạm vi, Kiến thức Tiên quyết & Thời lượng Học tập | ADD | — | `[ADDED: study time estimate]` | Nguồn `D-12` không có phần kiến thức tiên quyết; bổ sung theo `STUDY_TIME_RULE`. |
| M-12.03 | — | Bốn chuẩn đầu ra kiến thức, kỹ năng, vận dụng, đánh giá mô hình | `T-12.2` Mục tiêu Học tập (Learning Objectives `LO-1`..`LO-4`) | ADD | — | `[ADDED: learning objectives]` | Suy ra từ `S-12.1`–`S-12.6`. |
| M-12.04 | — | Đặt vấn đề & ý nghĩa thực tiễn | `T-12.3` Đặt vấn đề & Ý nghĩa thực tiễn (Introduction) | ADD | — | `[ADDED: introduction frame]` | Nguồn `D-12` thiếu phần mở luận cấu trúc. |
| M-12.05 | S-12.1 | Khái niệm và phân biệt: quá mẫn = đáp ứng miễn dịch gây tổn thương mô; dị ứng = phản ứng quá mẫn đặc hiệu; không phải mọi phản ứng bất lợi thuốc đều là dị ứng | `T-12.4.1` Khái Niên & Phân Biệt Quá Mẫn & Dị Ứng | KEEP | EXPAND | S-12.1 `[SRC]` | Giữ nguyên phân biệt quá mẫn/dị ứng và phản ứng bất lợi không miễn dịch. |
| M-12.06 | S-12.2 | Bốn type quá mẫn (bảng Gell–Coombs): I (tức thì, IgE, phút đến vài giờ); II (qua kháng thể, giờ đến ngày); III (phức hợp miễn dịch, giờ đến vài tuần); IV (qua tế bào T, muộn, 24–72 giờ) | `T-12.4.2` Bốn Type Quá Mẫn | KEEP | EXPAND | S-12.2 `[SRC]` | Giữ nguyên bảng 4 type quá mẫn Gell–Coombs. |
| M-12.07 | S-12.3 | Dị ứng tức thì và phản vệ: lần mẫn cảm tạo IgE đặc hiệu gắn dưỡng côtés/basophil; tái tiếp xúc phóng histamine/leukotriene/prostaglandin; phản vệ = phản ứng toàn thân nghiêm trọng | `T-12.4.3` Dị Ứng Tức Thì & Phản Vệ | KEEP | EXPAND | S-12.3 `[SRC]` | Giữ nguyên cơ chế dị ứng tức thì và phản vệ. |
| M-12.08 | S-12.4 | Dị ứng thuốc và phản ứng muộn nặng: thuốc/chất chuyển hóa gắn protein tạo phức hợp sinh miễn dịch; dị ứng thuốc có thể type I–IV; nhiều tác dụng không mong muốn không phải dị ứng; ghi nhận tên thuốc/liều/thời điểm/triệu chứng | `T-12.4.4` Dị Ứng Thuốc & Phản Ứng Muộn Nặng | KEEP | EXPAND | S-12.4 `[SRC]` | Giữ nguyên cơ chế dị ứng thuốc và phản ứng muộn nặng. |
| M-12.09 | S-12.5 | Chẩn đoán, dự phòng và nguyên tắc điều trị: bệnh sử (tác nhân, đường phơi nhiễm, thời gian, diễn biến); xét nghiệm (test da, IgE đặc hiệu, test áp da); kiểm soát (tránh dị nguyên, đọc nhãn, kế hoạch ứng phó); giải mẫn cảm (chuyên môn, không tự thực hiện) | `T-12.4.5` Chẩn Đoán, Dự Phòng & Nguyên Tắc Điều Trị | KEEP | EXPAND | S-12.5 `[SRC]` | Gộp chẩn đoán, dự phòng, điều trị thành tiểu mục ứng dụng. |
| M-12.10 | S-12.6 | Ý nghĩa và tác dụng: phân biệt dị ứng với tác dụng phụ không miễn dịch giúp ghi hồ sơ thuốc chính xác, tránh hạn chế điều trị không cần thiết, phòng tái phơi nhiễm; nhận biết phản vệ và phản ứng thuốc muộn nặng giúp chuyển cấp cứu kịp thời | `T-12.4.6` Ý Nghĩa & Tác Dụng | KEEP | EXPAND | S-12.6 `[SRC]` | Gộp ý nghĩa và tác dụng thành tiểu mục kết luận. |
| M-12.11 | — | Ví dụ sốc phản vệ type I sau tiêm penicillin (nữ 25 tuổi, 10 phút sau: ngứa, mày đay, khó thở, huyết áp 80/50, mạch 130); viêm da tiếp xúc type IV (nam 30 tuổi, 48 giờ sau đeo vòng kim loại) | `T-12.5.1` Ví dụ 1: Sốc Phản Vệ & Viêm Da Tiếp Xúc | MERGE | MOVE | S-12.3, S-12.4 (example-box) `[SRC]` | Hộp ví dụ nguồn đã có sẵn, giữ nguyên số liệu. |
| M-12.12 | — | Cách nhớ: Type I: IgE, dưỡng côtés, nhanh. Type II: IgG/IgM chống tế bào hoặc thụ thể. Type III: phức hợp miễn dịch lắng đọng. Type IV: tế bào T, thường muộn. Phân loại giúp hiểu cơ chế, không thay thế đánh giá ca bệnh | `T-12.5.2` Mẹo nhớ 4 Type Quá Mẫn | MERGE | MOVE | S-12.2 (callout) `[SRC]` | Callout nguồn đã có sẵn. |
| M-12.13 | — | Sơ đồ thuật toán cơ chế dị ứng và quá mẫn (Mermaid) | `T-12.5.3` Sơ Đồ Cơ Chế Dị Ứng & Quá Mẫn (Mermaid) | ADD | — | `[ADDED: Mermaid flowchart]` | Chuyển quy tắc của S-12.2, S-12.3 thành flowchart; không thêm dữ kiện mới. |
| M-12.14 | — | Placeholder hình cơ chế dị ứng tức thì (IgE/dưỡng côtés), 4 type quá mẫn, viêm da tiếp xúc | `T-12.5.4` Minh Họa Trực quan (Placeholders) | ADD | — | `[ADDED: figure placeholders]` + `[FIGURE]` | Nguồn có 0 hình (`I-12.04`); đặt placeholder theo `FIGURE_POLICY`. |
| M-12.15 | — | Tóm tắt nội dung trọng tâm & quy tắc ghi nhớ | `T-12.6.1` Tóm tắt Nội dung Trọng tâm & Quy tắc Ghi nhớ | MERGE | MOVE | S-12.1–S-12.6 `[SRC]` | Gộp khái niệm, 4 type, dị ứng tức thì, dị ứng thuốc, chẩn đoán/điều trị thành tóm tắt. |
| M-12.16 | — | Bảng tổng hợp công thức, đơn vị, quy ước dấu | `T-12.6.2` Bảng Tổng hợp Công thức & Lưu ý | ADD | — | `[ADDED: summary concept tables]` | Nguồn có 0 bảng (`I-12.05`); bổ sung bảng tổng hợp. |
| M-12.17 | — | Bộ 10 câu hỏi/bài tập tự lượng giá | `T-12.7` Đánh giá & Bài tập tự lượng giá | ADD | — | `[ADDED: exercises]` | Nguồn hoàn toàn không có bài tập (Q3). |
| M-12.18 | — | Đáp án & hướng dẫn giải từng bước | `T-12.7.4` Đáp án & Hướng dẫn Giải Chi tiết (Answer Key) | ADD | — | `[ADDED: step-by-step answer key]` | Mỗi đáp án ghi `LO` và cấp độ; phân tích type quá mẫn hiển đủ bước. |
| M-12.19 | — | Danh mục tài liệu tham khảo và ghi chú truy vết theo R4 | `T-12.8.1` Tài liệu Tham khảo & Đọc thêm | ADD | — | `[ADDED: reference section structure]` + `[VERIFY: textbook references needed]` | Nguồn `D-12` có 0 trích dẫn (`I-12.05`, `V-12.04`); chờ người dùng cung cấp giáo trình chuẩn. |

**Tổng cộng:** 19 dòng ma trận.

---

## B. Coverage Check

### 1. Kiểm tra độ phủ S-ID từ Audit Register

- **Danh sách S-ID trong `01_audit/ch12_audit.md` (tổng cộng = 6 S-ID):** `S-12.1`, `S-12.2`, `S-12.3`, `S-12.4`, `S-12.5`, `S-12.6`.
- **Ánh xạ từng S-ID trong Ma trận Mapping (Bảng A):**
  - `S-12.1` → `M-12.05` (`T-12.4.1`)
  - `S-12.2` → `M-12.06` (`T-12.4.2`)
  - `S-12.3` → `M-12.07` (`T-12.4.3`)
  - `S-12.4` → `M-12.08` (`T-12.4.4`)
  - `S-12.5` → `M-12.09` (`T-12.4.5`)
  - `S-12.6` → `M-12.10` (`T-12.4.6`)
- **Số S-ID chưa được ánh xạ (Unmapped / Missing S-IDs): 0** (độ phủ **100,0%**).

### 2. Thống kê hành động chính (Primary Action Counts)

| Primary Action | Số dòng ma trận | Tỷ lệ (%) | Danh sách Row ID |
|---|---|---|---|
| **ADD** (khung sư pháp, bảng, hình, ví dụ/bài tập mới) | 11 | 57,9% | M-12.01, M-12.02, M-12.03, M-12.04, M-12.13, M-12.14, M-12.16, M-12.17, M-12.18, M-12.19 |
| **KEEP** (giữ nội dung cốt lõi tại đúng phân khu) | 6 | 31,6% | M-12.05, M-12.06, M-12.07, M-12.08, M-12.09, M-12.10 |
| **MERGE** | 2 | 10,5% | M-12.11, M-12.12, M-12.15 |
| **MOVE** | 0 | 0,0% | (dùng làm secondary cho M-12.11, M-12.12, M-12.15) |
| **REMOVE** | 0 | 0,0% | Không có dòng REMOVE (bảo toàn 100% dữ liệu nguồn) |
| **Tổng cộng** | **19 dòng** | **100,0%** | — |

### 3. Ước tính tỷ lệ nội dung mới và thống kê thẻ

- **Dung lượng nguồn gốc (`D-12`):** 1297 từ (bảo toàn toàn bộ).
- **Dung lượng dự kiến bản thảo hoàn chỉnh (`ch12_draft.md`):** khoảng **3.500–4.000 từ** (đáp ứng `TARGET_LENGTH_PER_CHAPTER: not shorter than source; no upper limit`), tương đương **2,7–3,1 lần** nguồn.

---

## C. Chapter Restructuring Plan

### C.1 Đề cương chi tiết đến cấp Tiểu mục / Chủ đề

```text
Chuyên đề 14: Dị ứng và các phản ứng quá mẫn (tên tạm, chờ xác nhận MANIFEST)
├── 1. Tổng quan chương (Chapter Overview) {T-12.1}
│   ├── 1.1 Tên chuyên đề, giới thiệu khái quát & phạm vi nội dung {T-12.1.1} (M-12.01)
│   └── 1.2 Kiến thức tiên kỳ & Thời lượng học tập dự kiến {T-12.1.2} (M-12.02)
├── 2. Mục tiêu học tập (Learning Objectives) {T-12.2}
│   └── 2.1 Chuẩn đầu ra Kiến thức, Kỹ năng, Vận dụng và Đánh giá mô hình (LO-1..LO-4) {T-12.2.1} (M-12.03)
├── 3. Đặt vấn đề & Ý nghĩa thực tiễn (Introduction) {T-12.3}
│   └── 3.1 Tại sao cần phân biệt dị ứng và phản ứng không miễn dịch {T-12.3.1} (M-12.04)
├── 4. Nội dung bài giảng chính (Main Content) {T-12.4}
│   ├── 4.1 Khái Niên & Phân Biệt Quá Mẫn & Dị Ứng {T-12.4.1} [SRC: S-12.1] (M-12.05)
│   ├── 4.2 Bốn Type Quá Mẫn {T-12.4.2} [SRC: S-12.2] (M-12.06)
│   ├── 4.3 Dị Ứng Tức Thì & Phản Vệ {T-12.4.3} [SRC: S-12.3] (M-12.07)
│   ├── 4.4 Dị Ứng Thuốc & Phản Ứng Muộn Nặng {T-12.4.4} [SRC: S-12.4] (M-12.08)
│   ├── 4.5 Chẩn Đoán, Dự Phòng & Nguyên Tắc Điều Trị {T-12.4.5} [SRC: S-12.5] (M-12.09)
│   └── 4.6 Ý Nghĩa & Tác Dụng {T-12.4.6} [SRC: S-12.6] (M-12.10)
├── 5. Ví dụ minh họa & Quy trình thực hành (Examples & Illustrations) {T-12.5}
│   ├── 5.1 Ví dụ 1: Sốc Phản Vệ & Viêm Da Tiếp Xúc {T-12.5.1} [SRC] (M-12.11)
│   ├── 5.2 Mẹo nhớ 4 Type Quá Mẫn {T-12.5.2} [SRC] (M-12.12)
│   ├── 5.3 Sơ Đồ Cơ Chế Dị Ứng & Quá Mẫn (Mermaid) {T-12.5.3} (M-12.13)
│   └── 5.4 Minh Họa Trực quan (Placeholders) {T-12.5.4} (M-12.14)
├── 6. Tóm tắt chương (Chapter Summary) {T-12.6}
│   ├── 6.1 Tóm tắt Nội dung Trọng tâm & Quy tắc Ghi nhớ {T-12.6.1} (M-12.15)
│   └── 6.2 Bảng Tổng hợp Công thức & Lưu ý {T-12.6.2} (M-12.16)
├── 7. Đánh giá & Bài tập tự lượng giá (Review & Assessment) {T-12.7}
│   ├── 7.1 Câu hỏi lý thuyết: Nhận biết & Thông hiểu (LO-1) {T-12.7.1} (phần của M-12.17)
│   ├── 7.2 Bài tập áp dụng: Phân tích type quá mẫn (LO-2, LO-3) {T-12.7.2} (phần của M-12.17)
│   ├── 7.3 Câu hỏi phân tích & vận dụng nâng cao (LO-3, LO-4) {T-12.7.3} (phần của M-12.17)
│   └── 7.4 Đáp án & Hướng dẫn giải chi tiết (Answer Key) {T-12.7.4} (M-12.18)
└── 8. Tài liệu tham khảo (References) {T-12.8}
    └── 8.1 Danh mục Tài liệu tham khảo & Đọc thêm {T-12.8.1} (M-12.19)
```

### C.2 Kế hoạch bổ sung nội dung mới và lý do sư pháp

1. **Khung sư pháp T1–T3:** Tên chương, giới thiệu, kiến thức tiên kỳ, thời lượng học tập, 4 chuẩn đầu ra `LO-1`..`LO-4`.
2. **Sơ đồ thuật toán Mermaid (`T-12.5.3`):** Cơ chế dị ứng và quá mẫn.
3. **Placeholder hình (`T-12.5.4`):** Cơ chế dị ứng tức thì (IgE/dưỡng côtés), 4 type quá mẫn, viêm da tiếp xúc.
4. **Bảng tổng hợp mới (`T-12.6.2`):** Tổng hợp công thức, đơn vị, lưu ý lâm sàng.
5. **Bộ 10 câu hỏi/bài tập + đáp án (`T-12.7`):** Nguồn hoàn toàn không có đánh giá.
6. Giữ nguyên toàn bộ nội dung nguồn; không cắt nội dung (Q2).

### C.3 Rủi ro & Biện pháp kiểm soát

- **Rủi ro 1 (Tên chương chưa chốt):** Xác nhận tại MANIFEST (Q1).
- **Rủi ro 2 (Nguồn vừa, 1297 từ):** Nếu mở rộng lên 3.500–4.000 thì tỷ lệ 2,7–3,1×. Đây là mở rộng khung sư pháp và bài tập, không cắt nội dung nguồn.
- **Rủi ro 3 (0 bài tập, 0 hình):** Bổ sung `[ADDED]` bài tập và `[FIGURE]` placeholder (Q3, Q4).
- **Rủi ro 4 (0 tài liệu tham khảo):** Đặt `[VERIFY]` (Q5), không bịa nguồn.

### C.4 Chuẩn đầu ra Học tập (Draft LO)

- **`LO-1` (Kiến thức):** Phát biểu định nghĩa quá mẫn và dị ứng; phân biệt 4 type quá mẫn Gell & Coombs; phân biệt dị ứng với tác dụng phụ không miễn dịch.
- **`LO-2` (Kỹ năng):** Phân tích cơ chế dị ứng tức thì (IgE, dưỡng côtés, histamine); phân biệt type I (tức thì,IgE) với type IV (muộn, tế bào T).
- **`LO-3` (Vận dụng):** Giải thích cơ chế dị ứng thuốc (hapten-protein); áp dụng để phân tích bệnh nhân dị ứng thuốc.
- **`LO-4` (Đánh giá mô hình):** Đánh giá vai trò của chẩn đoán, dự phòng và điều trị dị ứng; liên hệ phản vệ và phản ứng thuốc muộn nặng với cấp cứu `[DOMAIN_RULES: chỉ giải thích cơ chế, không liều/chỉ định]`.

### C.5 Glossary & Chuẩn hóa

| Thuật ngữ | Dạng trong nguồn | Dạng chuẩn hóa | Ghi chú |
|---|---|---|---|
| Quá mẫn | `Quá mẫn` | **Quá mẫn (hypersensitivity)** | Giữ nguyên. |
| Dị ứng | `Dị ứng` | **Dị ứng (allergy)** | Giữ nguyên. |
| Phản vệ | `Phản vệ` | **Phản vệ (anaphylaxis)** | Giữ nguyên. |
| Hapten | `Hapten` | **Hapten** | Giữ nguyên. |
| Giải mẫn cảm | `Giải mẫn cảm` | **Giải mẫn cảm (desensitization)** | Giữ nguyên. |
| Test da | `Test da` | **Test da (skin test)** | Giữ nguyên. |
| SJS/TEN | `SJS/TEN` | **SJS/TEN (Stevens-Johnson syndrome / Toxic epidermal necrolysis)** | Giữ nguyên. |
| DRESS | `DRESS` | **DRESS (Drug reaction with eosinophilia and systemic symptoms)** | Giữ nguyên. |

---

## D. Verification Items Carried Forward

| V-ID | Nội dung cần kiểm chứng | Loại | Mục T-ID tiếp nhận | Kế hoạch xử lý trong S3 |
|---|---|---|---|---|
| `V-12.01` | Tên chương chính xác | reference | `T-12.1` | Xác nhận MANIFEST (Q1). |
| `V-12.02` | Giá trị huyết áp (80/50 mmHg, mạch 130) trong ví dụ | number | `T-12.5.1` | Giữ đúng nguồn; gắn `[VERIFY]`. |
| `V-12.03` | 0 hình vẽ/sơ đồ trong nguồn | structure | `T-12.5.4` | Đặt `[FIGURE]` placeholder (Q4). |
| `V-12.04` | 0 tài liệu tham khảo | reference | `T-12.8.1` | Đặt `[VERIFY: reference needed …]` (Q5). |

---

## E. Open Questions for Gate A

1. **Q1 (Tên chương):** Xác nhận tên Ch12 tại `MANIFEST.md` (hiện dùng "Chuyên đề 14: Dị ứng và các phản ứng quá mẫn").
2. **Q2 (Nguồn vừa, mở rộng):** Nguồn 1297 từ, 6 mục; S3 mở rộng lên ~3.500–4.000 bằng khung sư pháp và bài tập. Đồng ý?
3. **Q3 (Bài tập):** Đồng ý S3 bổ sung bộ 10 câu hỏi/bài tập `[ADDED]`?
4. **Q4 (Hình):** Đồng ý S3 đặt placeholder `[FIGURE]` cho cơ chế dị ứng tức thì (IgE/dưỡng côtés), 4 type quá mẫn, viêm da tiếp xúc?
5. **Q5 (Tài liệu tham khảo):** Đồng ý để `[VERIFY: reference needed …]`, `APPROVED_REFERENCE_LIST: none`?

---

## F. Not verified / limitations

- Chỉ dựa trên D-12; 0 trích dẫn; 0 hình vẽ; 0 bài tập trong nguồn.
- Tất cả giá trị số giữ nguyên nguồn; gắn `[VERIFY]` khi cần chuyên gia xác nhận.
- Dừng tại GATE A theo R9.

---

GATE A: STOP. Awaiting user approval of the Content Mapping Matrix. Do not begin the transformation.