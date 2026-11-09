# ch01_audit.md — S1 Audit · Chương 01 (D-01)

**Môn:** Y dược – Master Lecture Notes · **Stage:** S1 Audit · **Ngày:** 2026-11-09  
**Nguồn audit:** `00_source_original/ch01_doc-myd-1.html` (D-01) — READ-ONLY, không sửa.  
**Ngữ cảnh đối chiếu:** `00_config.md`, `00_source_original/MANIFEST.md`, `_state/carryover_latest.md`, `_state/glossary_running.md`, `_state/verification_list_running.md`.  
**Nguyên tắc:** Chỉ phân tích và lập hồ sơ truy vết; không viết lại, không sửa lỗi, không tự bổ sung kiến thức học thuật.

---

## A. Document Inventory

| D-ID | File | Type | Chapter | Slug gốc | Num | Lines | Approx. words | h4 / h5 | Formula boxes | Example boxes | Callouts | Tables | Figures/Images | References |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| D-01 | `00_source_original/ch01_doc-myd-1.html` | chapter-source (HTML fragment, MathJax) | 01 | doc-myd-1 | 1 | 28 | 445 (đếm bằng script) | 3 / 0 | 1 | 1 | 1 | 0 | 0 / 0 | 0 |

**Đặc điểm kỹ thuật (kiểm tra bằng script Python):**
- **Mã hóa & dung lượng:** UTF-8; ~2.600 byte; 28 dòng; thẻ HTML đóng/mở cân bằng (`3 <h4>`, `1 <ul>`, `1 <ul>` lồng, `~8 <li>`, `2 <p>`, `1 <div>`, `12 <strong>`, `1 <em>`, `6 <br>`).
- **Biểu thức toán/hóa (MathJax):** 1 khối công thức hiển thị riêng (`$$…$$`, tức 4 dấu `$$`), 6 biểu thức inline `$…$` (CO = HR × SV, HR, SV, 4,5 - 5,5 L/phút, 686 kcal/mol, 32%).
- **Cấu trúc tiêu đề:** File bắt đầu trực tiếp bằng `<h4>1. Cung lượng tim (Cardiac Output - $CO$)</h4>`; không có `<h1>/<h2>/<h3>` và không có tên chương bên trong file (tên chương chỉ nằm ở `MANIFEST.md`: `Chuyên đề 1: Sinh lý tim mạch & Hệ thống điều hòa huyết áp thể dịch - thần kinh`).
- **Hộp nội dung:** 1 `formula-box` (CO = HR × SV); 1 `example-box` (tính cung lượng tim khi nghỉ và khi sốc); 1 `callout` (Cách nhớ ×1).
- **Bảng biểu & Hình vẽ:** 0 bảng (`<table>`), 0 hình vẽ/sơ đồ.
- **Tài liệu tham khảo:** 0 trích dẫn (`http`, `doi`, `ISBN`, "Tài liệu tham khảo", "NXB", "giáo trình" đều bằng 0). Trạng thái: **none present**.
- **Phân bổ số từ theo 3 mục (tổng = 445 từ):** `S-01.1` (~180) + `S-01.2` (~175) + `S-01.3` (~90) — xem mục B.

> **Ghi chú dung lượng:** Nếu rất ngắn (445 từ), chỉ 3 mục, 1 công thức, 1 ví dụ. Không có bài tập, không có bảng, không có hình, không có tài liệu tham khảo.

---

## B. Source Section Register

| S-ID | D-ID | chapter | heading path | location | content types | approx. words | ≤20-word summary |
|---|---|---|---|---|---|---|---|
| S-01.1 | D-01 | 01 | `1. Cung lượng tim (Cardiac Output - $CO$)` | dòng 1–8 | theory/principle; equation/model; definition | ~180 | Cung lượng tim $CO = HR \times SV$; $HR \approx 70-80$ nhịp/phút, $SV \approx 60-80$ ml/nhát; $CO$ nghỉ $\approx 4,5-5,5$ L/phút; yếu tố điều hòa $SV$: tiền tải, hậu tải, sức co bóp. |
| S-01.2 | D-01 | 01 | `2. Hệ trục điều hòa huyết áp thần kinh & nội tiết` | dòng 9–16 | theory/principle; mechanism | ~175 | Phản xạ áp thụ quan (xoang cảnh, quai động mạch chủ → điều chỉnh giao cảm/phó giao cảm trong vài giây). Hệ RAA: Renin → Angiotensin I → (ACE) → Angiotensin II → Aldosterone (giữ $Na^+$ và nước). |
| S-01.3 | D-01 | 01 | `Ý nghĩa và tác dụng` (không đánh số) | dòng 17–20 | other (summary); application | ~90 | Cung lượng tim và cơ chế điều hòa giúp duy trì tưới máu, cung cấp oxy, ổn định huyết áp. Giải thích đáp ứng mất máu/mất nước, cơ chế tăng huyết áp, tác dụng thuốc ức chế ACE/chẹn thụ thể angiotensin/lợi tiểu. |

**Tổng cộng:** 3 S-ID (`S-01.1` đến `S-01.3`); tổng số từ 445 từ (phân bổ mục) / 445 (toàn file).

---

## C. Content Coverage Matrix

| chapter | Definitions | Theory | Mechanisms | Equations | Examples | Case studies | Applications | Questions/Exercises | References | Figures/Tables |
|---|---|---|---|---|---|---|---|---|---|---|
| 01 (D-01) | Present (S-01.1, S-01.2, S-01.3) | Present (S-01.1, S-01.2) | Present (S-01.1 Frank-Starling, hậu tải, sức co bóp; S-01.2 baroreceptor, hệ RAA) | Present (S-01.1 $CO = HR \times SV$) | Present (S-01.3 ví dụ CO nghỉ/sốc: $75 \times 70 = 5,25$ L/phút; $110 \times 45 = 4,95$ L/phút) | Absent | Present (S-01.1 tưới máu/oxy; S-01.2 mất máu/mất nước/tăng huyết áp; S-01.3 thuốc ức chế ACE/chẹn thụ thể angiotensin/lợi tiểu) | Absent | Absent | Absent (0 bảng, 0 hình vẽ) |

**Ghi chú chi tiết về độ phủ:**
- **Definitions & Theory — Present:** Định nghĩa cung lượng tim, hồi suất tim, thể tích nhát bóp; phản xạ áp thụ quan, hệ Renin-Angiotensin-Aldosterone.
- **Mechanisms — Present:** Cơ chế điều hòa huyết áp thần kinh (baroreceptor) và nội tiết (hệ RAA); yếu tố điều hòa thể tích nhát bóp.
- **Equations — Present:** 1 công thức ($CO = HR \times SV$).
- **Examples — Present:** 1 ví dụ (tính CO khi nghỉ và khi sốc).
- **Case studies — Absent:** 0 ca bệnh cụ thể.
- **Applications — Present:** Ứng dụng dược lý: thuốc ức chế ACE, chẹn thụ thể angiotensin, lợi tiểu.
- **Questions/Exercises — Absent:** 0 câu hỏi, 0 bài tập trong nguồn.
- **References — Absent:** 0 tài liệu tham khảo.
- **Figures/Tables — Absent:** 0 bảng và 0 hình.

---

## D. Notation and Terminology Inventory

### D.1 Ký hiệu và đơn vị

| Symbol / unit | As written in source | Defined? | Location | Note |
|---|---|---|---|---|
| $CO = HR \times SV$ | `$$CO = HR \times SV$$` | Yes | S-01.1 (dòng 1) | Cung lượng tim = hồi suất tim × thể tích nhát bóp. |
| $HR \approx 70 - 80\text{ nhịp/phút}$ | `$HR$ (Heart Rate): Nhịp tim ($\approx 70 - 80\text{ nhịp/phút}$)` | Yes | S-01.1 (dòng 2) | Hồi suất tim típipcal. |
| $SV \approx 60 - 80\text{ ml/nhát}$ | `$SV$ (Stroke Volume): Thể tích nhát bóp ($\approx 60 - 80\text{ ml/nhát}$)` | Yes | S-01.1 (dòng 3) | Thể tích nhát bóp típipcal. |
| $CO \approx 4,5 - 5,5\text{ L/phút}$ | `Cung lượng tim lúc nghỉ đạt khoảng $4,5 - 5,5\text{ L/phút}$` | Yes | S-01.1 (dòng 5) | Cung lượng tim nghỉ típipcal. |
| $HA \approx CO \times RPT$ | `huyết áp phụ thuộc $CO$ và sức cản ngoại vi ($HA \approx CO \times RPT$)` | Yes | S-01.3 (dòng 19) | Quan hệ huyết áp – cung lượng tim – sức cản ngoại vi. |

### D.2 Thuật ngữ / Glossary candidates

| Thuật ngữ / Đại lượng | Dạng viết trong nguồn (`D-01`) | Dạng chuẩn hóa đề xuất | Ghi chú chuẩn hóa |
|---|---|---|---|
| Cung lượng tim | `Cung lượng tim` | **Cung lượng tim (cardiac output – $CO$)** | Giữ nguyên. |
| Hồi suất tim | `Hồi suất tim` | **Hồi suất tim (heart rate – $HR$)** | Giữ nguyên. |
| Thể tích nhát bóp | `Thể tích nhát bóp` | **Thể tích nhát bóp (stroke volume – $SV$)** | Giữ nguyên. |
| Tiền tải | `Tiền tải` | **Tiền tải (preload)** | Giữ nguyên. |
| Hậu tải | `Hậu tải` | **Hậu tải (afterload)** | Giữ nguyên. |
| Sức co bóp cơ tim | `Sức co bóp cơ tim` | **Sức co bóp cơ tim (contractility)** | Giữ nguyên. |
| Phản xạ áp thụ quan | `Phản xạ áp thụ quan` | **Phản xạ áp thụ quan (baroreceptor reflex)** | Giữ nguyên. |
| Hệ Renin-Angiotensin-Aldosterone | `Hệ Renin - Angiotensin - Aldosterone (Hệ RAA)` | **Hệ Renin-Angiotensin-Aldosterone (RAAS)** | Giữ nguyên. |
| Angiotensin II | `Angiotensin II` | **Angiotensin II** | Giữ nguyên. |
| Aldosterone | `Aldosterone` | **Aldosterone** | Giữ nguyên. |
| Thuốc ức chế ACE | `thuốc ức chế ACE` | **Thuốc ức chế ACE (ACE inhibitor)** | Giữ nguyên. |
| Chẹn thụ thể angiotensin | `chẹn thụ thể angiotensin` | **Chẹn thụ thể angiotensin (angiotensin receptor blocker)** | Giữ nguyên. |
| Lợi tiểu | `lợi tiểu` | **Lợi tiểu (diuretic)** | Giữ nguyên. |

---

## E. Open Questions for Gate A (Câu hỏi xin ý kiến phê duyệt tại Gate A)

1. **Q1 (Tên chương):** `MANIFEST.md` ghi tên chương 01 là "Chuyên đề 1: Sinh lý tim mạch & Hệ thống điều hòa huyết áp thể dịch - thần kinh". Nguồn file không có tên chương bên trong HTML. Bạn đồng ý dùng tên từ MANIFEST làm tiêu đề chương S3?
2. **Q2 (Nguồn rất ngắn, 3 mục):** Nguồn chỉ 445 từ, 3 mục, không có bài tập, không có bảng, không có hình. Bạn đồng ý S3 bổ sung khung sư phạm T1–T3 (kiến thức tiên kỳ, chuẩn đầu ra, thời lượng), bảng tổng hợp công thức, sơ đồ Mermaid hệ RAA, và bộ bài tập (gắn `[ADDED]`)?
3. **Q3 (Hình vẽ):** Nguồn có 0 bảng, 0 hình. Bạn đồng ý S3 đặt placeholder `[FIGURE]` cho cung lượng tim, hệ RAA, phản xạ áp thụ quan?
4. **Q4 (Tài liệu tham khảo):** Nguồn có 0 trích dẫn và `APPROVED_REFERENCE_LIST: none`. Bạn đồng ý S3 để `[VERIFY: reference needed …]` và chờ cung cấp giáo trình chuẩn?

---

## F. Not verified / limitations

- **Phạm vi dữ liệu:** Chỉ dựa trên `00_source_original/ch01_doc-myd-1.html` (D-01). File nguồn được giữ nguyên trạng tuyệt đối (READ-ONLY).
- **Tài liệu tham khảo:** Không có trích dẫn gốc trong D-01; tất cả công thức, giá trị số sẽ gắn `[VERIFY]` khi viết nếu không có trong nguồn.
- **Nội dung bổ sung ngoài nguồn:** Khung sư pháp, bài tập, hình vẽ, bảng tổng hợp là kiến thức giáo trình chuẩn, chưa có trong D-01; cần người dùng duyệt ở Gate A (Q2, Q3).
- **Kiểm tra cơ haine:** Thống kê文档 bằng script Python (xem mục A); chưa có script `check_coverage.py` chuyên dụng cho audit (sẽ chạy tại S2/S3).
- **Giới hạn giai đoạn:** Dừng ngay tại GATE A theo R9 và mục 7.2; chưa thực hiện viết bản thảo Stage S3.

---

GATE A: STOP. Awaiting user approval of the Content Mapping Matrix. Do not begin the transformation.