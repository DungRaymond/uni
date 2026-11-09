# ch02_audit.md — S1 Audit · Chương 02 (D-02)

**Môn:** Y dược – Master Lecture Notes · **Stage:** S1 Audit · **Ngày:** 2026-11-09  
**Nguồn audit:** `00_source_original/ch02_doc-myd-2.html` (D-02) — READ-ONLY, không sửa.  
**Ngữ cảnh đối chiếu:** `00_config.md`, `00_source_original/MANIFEST.md`, `_state/carryover_latest.md`, `_state/glossary_running.md`, `_state/verification_list_running.md`.  
**Nguyên tắc:** Chỉ phân tích và lập hồ sơ truy vết; không viết lại, không sửa lỗi, không tự bổ sung kiến thức học thuật.

---

## A. Document Inventory

| D-ID | File | Type | Chapter | Slug gốc | Num | Lines | Approx. words | h4 / h5 | Formula boxes | Example boxes | Callouts | Tables | Figures/Images | References |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| D-02 | `00_source_original/ch02_doc-myd-2.html` | chapter-source (HTML fragment, MathJax) | 02 | doc-myd-2 | 2 | 28 | 438 (đếm bằng script) | 3 / 0 | 3 | 1 | 1 | 0 | 0 / 0 | 0 |

**Đặc điểm kỹ thuật (kiểm tra bằng script Python):**
- **Mã hóa & dung lượng:** UTF-8; ~2.600 byte; 28 dòng; thẻ HTML đóng/mở cân bằng (`3 <h4>`, `2 <ul>`, `~6 <li>`, `2 <p>`, `1 <div>`, `10 <strong>`, `1 <em>`, `4 <br>`).
- **Biểu thức toán/hóa (MathJax):** 3 khối công thức hiển thị riêng (`$$…$$`, tức 12 dấu `$$`), 4 biểu thức inline `$…$` ($F$, $IV$, $PO$, $V_d = D/C_0$, $t_{1/2} = 0,693 \cdot V_d/Cl$, $5 \times t_{1/2}$).
- **Cấu trúc tiêu đề:** File bắt đầu trực tiếp bằng `<h4>1. Hấp thu (Absorption) & Sinh khả dụng (Bioavailability - $F$)</h4>`; không có `<h1>/<h2>/<h3>` và không có tên chương bên trong file (tên chương chỉ nằm ở `MANIFEST.md`: `Chuyên đề 2: Các thông số Dược động học cơ bản (Hệ ADME)`).
- **Hộp nội dung:** 3 `formula-box` ($F = AUC/AUC_{IV} \times 100\%$; $V_d = D/C_0$; $t_{1/2} = 0,693 \cdot V_d/Cl$); 1 `example-box` (tính $V_d$, $t_{1/2}$ và chỉnh liều theo thận); 1 `callout` (Cách nhớ ×1).
- **Bảng biểu & Hình vẽ:** 0 bảng (`<table>`), 0 hình vẽ/sơ đồ.
- **Tài liệu tham khảo:** 0 trích dẫn (`http`, `doi`, `ISBN`, "Tài liệu tham khảo", "NXB", "giáo trình" đều bằng 0). Trạng thái: **none present**.
- **Phân bổ số từ theo 3 mục (tổng = 438 từ):** `S-02.1` (~140) + `S-02.2` (~150) + `S-02.3` (~148) — xem mục B.

> **Ghi chú dung lượng:** Nếu rất ngắn (438 từ), chỉ 3 mục, 3 công thức, 1 ví dụ. Không có bài tập, không có bảng, không có hình, không có tài liệu tham khảo.

---

## B. Source Section Register

| S-ID | D-ID | chapter | heading path | location | content types | approx. words | ≤20-word summary |
|---|---|---|---|---|---|---|---|
| S-02.1 | D-02 | 02 | `1. Hấp thu (Absorption) & Sinh khả dụng (Bioavailability - $F$)` | dòng 1–6 | theory/principle; equation/model; definition | ~140 | Sinh khả dụng $F = AUC_{đường\ dùng}/AUC_{tiêm\ tĩnh\ mạch} \times 100\%$; $IV = 100\%$; $PO$ chịu ảnh hưởng first-pass effect qua gan. |
| S-02.2 | D-02 | 02 | `2. Phân bố (Distribution) & Thể tích phân bố ($V_d$)` | dòng 7–10 | theory/principle; equation/model | ~150 | Thể tích phân bố $V_d = D/C_0$; $V_d$ nhỏ ($< 5$ L): trong lòng mạch, gắn albumin; $V_d$ lớn ($> 40$ L): phân bố rộng mô/khoang nội bào. |
| S-02.3 | D-02 | 02 | `3. Thải trừ (Elimination) & Thời gian bán thải ($t_{1/2}$)` | dòng 11–16 | theory/principle; equation/model; application | ~148 | Thời gian bán thải $t_{1/2} = 0,693 \cdot V_d/Cl$; $Cl$ = độ thanh thải; cần $\approx 5 \times t_{1/2}$ để đạt $C_{ss}$ và thải $> 97\%$ thuốc. |

**Tổng cộng:** 3 S-ID (`S-02.1` đến `S-02.3`); tổng số từ 438 từ (phân bổ mục) / 438 (toàn file).

---

## C. Content Coverage Matrix

| chapter | Definitions | Theory | Mechanisms | Equations | Examples | Case studies | Applications | Questions/Exercises | References | Figures/Tables |
|---|---|---|---|---|---|---|---|---|---|---|
| 02 (D-02) | Present (S-02.1, S-02.2, S-02.3) | Present (S-02.1, S-02.2, S-02.3) | Present (S-02.1 first-pass effect; S-02.2 protein binding; S-02.3 clearance) | Present (S-02.1 $F = \dots$; S-02.2 $V_d = D/C_0$; S-02.3 $t_{1/2} = 0,693 \cdot V_d/Cl$) | Present (S-02.3 ví dụ tính $V_d = 20$ L, $t_{1/2} \approx 6,9$ giờ; chỉnh liều suy thận) | Absent | Present (S-02.1–S-02.3 chọn đường dùng, khoảng cách liều, điều chỉnh liều khi chức năng gan/thận thay đổi) | Absent | Absent | Absent (0 bảng, 0 hình vẽ) |

**Ghi chú chi tiết về độ phủ:**
- **Definitions & Theory — Present:** Định nghĩa sinh khả dụng, thể tích phân bố, độ thanh thải, thời gian bán thải; first-pass effect, liên kết protein huyết tương.
- **Mechanisms — Present:** Cơ chế hấp thu đường uống vs tiêm tĩnh mạch; phân bố theo khuds Chatrix và liên kết albumin; thanh thải gan/thận.
- **Equations — Present:** 3 công thức ($F$, $V_d$, $t_{1/2}$).
- **Examples — Present:** 1 ví dụ (tính $V_d = 20$ L, $t_{1/2} \approx 6,9$ giờ; tình huống suy thận $Cl$ giảm còn 1 L/giờ → $t_{1/2} \approx 28$ giờ).
- **Case studies — Absent:** 0 ca bệnh cụ thể.
- **Applications — Present:** Ứng dụng dược lý: chọn đường dùng, khoảng cách liều, điều chỉnh liều khi chức năng gan/thận thay đổi.
- **Questions/Exercises — Absent:** 0 câu hỏi, 0 bài tập trong nguồn.
- **References — Absent:** 0 tài liệu tham khảo.
- **Figures/Tables — Absent:** 0 bảng và 0 hình.

---

## D. Notation and Terminology Inventory

### D.1 Ký hiệu và đơn vị

| Symbol / unit | As written in source | Defined? | Location | Note |
|---|---|---|---|---|
| $F = \frac{AUC_{đường\ dùng}}{AUC_{tiêm\ tĩnh\ mạch}} \times 100\%$ | `$$F = \frac{AUC_{đường\ dùng}}{AUC_{tiêm\ tĩnh\ mạch}} \times 100\%$$` | Yes | S-02.1 (dòng 2) | Tỉ lệ phần trăm hoạt chất nguyên vẹn vào được vòng tuần hoàn chung. |
| $V_d = D/C_0$ | `$$V_d = \frac{D}{C_0}$$` | Yes | S-02.2 (dòng 8) | Thể tích phân bố = liều / nồng độ đỉnh. |
| $t_{1/2} = \frac{0,693 \cdot V_d}{Cl}$ | `$$t_{1/2} = \frac{0,693 \cdot V_d}{Cl}$$` | Yes | S-02.3 (dòng 12) | Thời gian bán thải = 0,693 × thể tích phân bố / độ thanh thải. |
| $5 \times t_{1/2}$ | `khoảng $5 \times t_{1/2}$ để đạt trạng thái nồng độ ổn định ($C_{ss}$)` | Yes | S-02.3 (dòng 14) | Quy tắc 5 lần bán thải để đạt steady state và thải >97%. |

### D.2 Thuật ngữ / Glossary candidates

| Thuật ngữ / Đại lượng | Dạng viết trong nguồn (`D-02`) | Dạng chuẩn hóa đề xuất | Ghi chú chuẩn hóa |
|---|---|---|---|
| Sinh khả dụng | `Sinh khả dụng` | **Sinh khả dụng (bioavailability – $F$)** | Giữ nguyên. |
| Hấp thu | `Hấp thu` | **Hấp thu (absorption)** | Giữ nguyên. |
| Phân bố | `Phân bố` | **Phân bố (distribution)** | Giữ nguyên. |
| Thải trừ | `Thải trừ` | **Thải trừ (elimination)** | Giữ nguyên. |
| Chuyển hóa bước đầu qua gan | `chuyển hóa bước đầu qua gan (First-pass effect)` | **Chuyển hóa bước đầu qua gan (first-pass effect)** | Giữ nguyên. |
| Thể tích phân bố | `Thể tích phân bố` | **Thể tích phân bố (volume of distribution – $V_d$)** | Giữ nguyên. |
| Độ thanh thải | `Độ thanh thải` | **Độ thanh thải (clearance – $Cl$)** | Giữ nguyên. |
| Thời gian bán thải | `Thời gian bán thải` | **Thời gian bán thải (half-life – $t_{1/2}$)** | Giữ nguyên. |
| Nồng độ ổn định | `trạng thái nồng độ ổn định ($C_{ss}$)` | **Nồng độ ổn định (steady-state concentration – $C_{ss}$)** | Giữ nguyên. |
| Albumin | `Albumin` | **Albumin** | Giữ nguyên. |

---

## E. Open Questions for Gate A (Câu hỏi xin ý kiến phê duyệt tại Gate A)

1. **Q1 (Tên chương):** `MANIFEST.md` ghi tên chương 02 là "Chuyên đề 2: Các thông số Dược động học cơ bản (Hệ ADME)". Nguồn file không có tên chương bên trong HTML. Bạn đồng ý dùng tên từ MANIFEST làm tiêu đề chương S3?
2. **Q2 (Nguồn rất ngắn, 3 mục):** Nguồn chỉ 438 từ, 3 mục, không có bài tập, không có bảng, không có hình. Bạn đồng ý S3 bổ sung khung sư pháp T1–T3 (kiến thức tiên kỳ, chuẩn đầu ra, thời lượng), bảng tổng hợp công thức, sơ đồ Mermaid quy trình ADME, và bộ bài tập (gắn `[ADDED]`)?
3. **Q3 (Hình vẽ):** Nguồn có 0 bảng, 0 hình. Bạn đồng ý S3 đặt placeholder `[FIGURE]` cho quy trình hấp thu-phân bố-thải trừ, thể tích phân bố, đường cong nồng độ-thời gian?
4. **Q4 (Tài liệu tham khảo):** Nguồn có 0 trích dẫn và `APPROVED_REFERENCE_LIST: none`. Bạn đồng ý S3 để `[VERIFY: reference needed …]` và chờ cung cấp giáo trình chuẩn?

---

## F. Not verified / limitations

- **Phạm vi dữ liệu:** Chỉ dựa trên `00_source_original/ch02_doc-myd-2.html` (D-02). File nguồn được giữ nguyên trạng tuyệt đối (READ-ONLY).
- **Tài liệu tham khảo:** Không có trích dẫn gốc trong D-02; tất cả công thức, giá trị số sẽ gắn `[VERIFY]` khi viết nếu không có trong nguồn.
- **Nội dung bổ sung ngoài nguồn:** Khung sư pháp, bài tập, hình vẽ, bảng tổng hợp là kiến thức giáo trình chuẩn, chưa có trong D-02; cần người dùng duyệt ở Gate A (Q2, Q3).
- **Kiểm tra cơ haine:** Thống kê文档 bằng script Python (xem mục A); chưa có script `check_coverage.py` chuyên dụng cho audit (sẽ chạy tại S2/S3).
- **Giới hạn giai đoạn:** Dừng ngay tại GATE A theo R9 và mục 7.2; chưa thực hiện viết bản thảo Stage S3.

---

GATE A: STOP. Awaiting user approval of the Content Mapping Matrix. Do not begin the transformation.