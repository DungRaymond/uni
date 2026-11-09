# ch01_audit.md — S1 Audit · Chương 01 (D-01)

**Môn:** Lý dược – Master Lecture Notes · **Stage:** S1 Audit · **Ngày:** 2026-11-09  
**Nguồn audit:** `00_source_original/ch01_doc-ld-1.html` (D-01) — READ-ONLY, không sửa.  
**Ngữ cảnh đối chiếu:** `00_config.md`, `00_source_original/MANIFEST.md`, `_state/carryover_latest.md`, `_state/glossary_running.md`, `_state/verification_list_running.md`.  
**Nguyên tắc:** Chỉ phân tích và lập hồ sơ truy vết; không viết lại, không sửa lỗi, không tự bổ sung kiến thức học thuật.

---

## A. Document Inventory

| D-ID | File | Type | Chapter | Slug gốc | Num | Lines | Approx. words | h4 / h5 | Formula boxes | Example boxes | Callouts | Tables | Figures/Images | References |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| D-01 | `00_source_original/ch01_doc-ld-1.html` | chapter-source (HTML fragment, MathJax) | 01 | doc-ld-1 | 1 | 31 | 579 (đếm bằng script) | 3 / 0 | 2 | 1 | 2 | 0 | 0 / 0 | 0 |

**Đặc điểm kỹ thuật (kiểm tra bằng script Python):**
- **Mã hóa & dung lượng:** UTF-8; 4.383 byte; 31 dòng; thẻ HTML đóng/mở cân bằng (`3 <h4>`, `2 <ul>`, `5 <li>`, `4 <p>`, `6 <div>`, `13 <strong>`, `1 <em>`, `5 <br>`).
- **Biểu thức toán/hóa (MathJax):** 2 khối công thức hiển thị riêng (`$$…$$`, tức 4 dấu `$$`), 42 biểu thức inline `$…$`.
- **Cấu trúc tiêu đề:** File bắt đầu trực tiếp bằng `<h4>1. Các nguyên lý nhiệt động trong hệ thống sống</h4>`; không có `<h1>/<h2>/<h3>` và không có tên chương bên trong file (tên chương chỉ nằm ở `MANIFEST.md`: *Chuyên đề 1: Nhiệt động học sinh học & Động học chất lưu trong hệ tuần hoàn*).
- **Hộp nội dung:** 2 `formula-box` (ΔE = Q − A; Poiseuille Q = πΔPr⁴/8ηl); 1 `example-box` (Mạch hẹp 20% → lưu lượng còn 41%); 2 `callout` (Cách nhớ ×2).
- **Bảng biểu & Hình vẽ:** 0 bảng (`<table>`), 0 hình vẽ/sơ đồ.
- **Tài liệu tham khảo:** 0 trích dẫn (`http`, `doi`, `ISBN`, "Tài liệu tham khảo", "NXB", "giáo trình" đều bằng 0). Trạng thái: **none present**.
- **Phân bổ số từ theo 3 mục (tổng = 555 từ):** `S-01.1` (~160) + `S-01.2` (~161) + `S-01.3` (~234).

> **Ghi chú dung lượng:** Nguồn ngắn (579 từ), chỉ 3 mục, 2 công thức, 1 ví dụ. Không có bài tập, không có bảng, không có hình, không có tài liệu tham khảo.

---

## B. Source Section Register

| S-ID | D-ID | chapter | heading path | location | content types | approx. words | ≤20-word summary |
|---|---|---|---|---|---|---|---|
| S-01.1 | D-01 | 01 | `1. Các nguyên lý nhiệt động trong hệ thống sống` | dòng 1–8 | theory/principle; equation/model; definition | ~160 | Hệ mở, nguyên lý I (ΔE = Q − A), nguyên lý II & entropy (cơ thể duy trì entropy thấp bằng cách thải entropy dư ra môi trường). |
| S-01.2 | D-01 | 01 | `2. Động học dòng máu và định luật Poiseuille` | dòng 11–18 | theory/principle; equation/model; example (inline) | ~161 | Định luật Poiseuille Q = πΔPr⁴/8ηl → R = 8ηl/πr⁴; sức cản mạch máu ∝ 1/r⁴; số Reynolds Re < 2000 (tầng) / Re > 2000 (xoáy). |
| S-01.3 | D-01 | 01 | `Ý nghĩa và tác dụng` (không đánh số) | dòng 19–31 | other (summary); application; example (boxed); callout | ~234 | Nhiệt động học giải thích cân bằng năng lượng & sinh nội; cơ học chất lưu giải thích huyết động, tiếng thổi tim, co/giãn mạch; ví dụ mạch hẹp 20% → lưu lượng 41%. |

**Tổng cộng:** 3 S-ID (`S-01.1` đến `S-01.3`); tổng số từ 555 từ (phân bổ mục) / 579 (toàn file).

---

## C. Content Coverage Matrix

| chapter | Definitions | Theory | Mechanisms | Equations | Examples | Case studies | Applications | Questions/Exercises | References | Figures/Tables |
|---|---|---|---|---|---|---|---|---|---|---|
| 01 (D-01) | Present (S-01.1, S-01.2) | Present (S-01.1, S-01.2) | Present (S-01.1 nguyên lý I & II; S-01.2 dòng chảy tầng/xoáy) | Present (S-01.1 ΔE = Q − A; S-01.2 Poiseuille Q = πΔPr⁴/8ηl) | Present (S-01.2 ví dụ inline Re; S-01.3 hộp ví dụ mạch hẹp) | Absent | Present (S-01.1 hệ mở, steady state; S-01.2 huyết động, tiếng thổi tim; S-01.3 co/giãn mạch) | Absent | Absent | Absent (0 bảng, 0 hình vẽ) |

**Ghi chú chi tiết về độ phủ:**
- **Definitions & Theory — Present:** Có định nghĩa hệ mở/kín/cô lập, nguyên lý I & II nhiệt động học, định luật Poiseuille, số Reynolds.
- **Mechanisms — Present:** Cơ chế cơ thể duy trì entropy thấp (thải entropy dư ra môi trường), cơ chế dòng chảy tầng/xoáy, sức cản mạch máu phụ thuộc r⁴.
- **Equations — Present:** 2 công thức (ΔE = Q − A; Poiseuille).
- **Examples — Present:** 1 hộp ví dụ (mạch hẹp 20%), ví dụ inline số Reynolds.
- **Case studies — Absent:** 0 ca bệnh cụ thể.
- **Applications — Present:** Ứng dụng dược lý: huyết động, tiếng thổi tim, ảnh hưởng co/giãn mạch, phép đo sinh lý.
- **Questions/Exercises — Absent:** 0 câu hỏi, 0 bài tập trong nguồn (tập exercises riêng).
- **References — Absent:** 0 tài liệu tham khảo.
- **Figures/Tables — Absent:** 0 bảng và 0 hình, trong khi nội dung nói về dòng chảy tầng/xoáy và sức cản mạch có thể minh họa bằng sơ đồ.

---

## D. Notation and Terminology Inventory

### D.1 Ký hiệu và đơn vị

| Symbol / unit | As written in source | Defined? | Location | Note |
|---|---|---|---|---|
| $\Delta E = Q - A$ | `$$\Delta E = Q - A$$` | Yes | S-01.1 (dòng 5) | Nguyên lý I: năng lượng từ thức ăn chuyển thành nhiệt năng và công. |
| $Q = \dfrac{\pi \Delta P r^4}{8\eta l}$ | `$$Q = \frac{\pi \Delta P r^4}{8\eta l}$$` | Yes | S-01.2 (dòng 13) | Định luật Poiseuille, lưu lượng qua ống hình trụ. |
| $R = \dfrac{8\eta l}{\pi r^4}$ | `$$\implies R = \frac{8\eta l}{\pi r^4}$$` | Yes | S-01.2 (dòng 13) | Sức cản mạch máu, nghịch biến với r⁴. |
| $Re$ | `Số Reynolds ($Re$)` | Yes | S-01.2 (dòng 16) | Re < 2000 dòng tầng; Re > 2000 dòng xoáy. |
| $r$ | `bán kính $r$` | Yes | S-01.2 (dòng 12) | Bán kính ống hình trụ. |
| $\Delta P$ | `chênh lệch áp suất $\Delta P$` | Yes | S-01.2 (dòng 12) | Chênh áp giữa hai đầu ống. |
| $\eta$ | `$\eta$` (độ nhớt) | Implicit | S-01.2 (dòng 13) | Độ nhớt chất lưu, không định nghĩa rõ ràng trong nguồn. |
| $l$ | `chiều dài $l$` | Yes | S-01.2 (dòng 12) | Chiều dài ống hình trụ. |

### D.2 Thuật ngữ / Glossary candidates

| Thuật ngữ / Đại lượng | Dạng viết trong nguồn (`D-01`) | Dạng chuẩn hóa đề xuất | Ghi chú chuẩn hóa |
|---|---|---|---|
| Hệ mở | `Hệ mở (Open system)` | **Hệ mở (open system)** | Giữ nguyên. |
| Cân bằng dừng | `cân bằng dừng (steady state)` | **Cân bằng dừng (steady state)** | Giữ nguyên. |
| Nguyên lý I nhiệt động học | `Nguyên lý I nhiệt động học` | **Nguyên lý I nhiệt động học (bảo toàn năng lượng)** | Giữ nguyên, bổ sung nghĩa. |
| Nguyên lý II & Entropy | `Nguyên lý II & Entropy` | **Nguyên lý II nhiệt động học & Entropy** | Giữ nguyên. |
| Entropy | `Entropy` | **Entropy (entropy)** | Giữ nguyên. |
| Định luật Poiseuille | `Định luật Poiseuille` | **Định luật Poiseuille** | Giữ nguyên. |
| Sức cản mạch máu | `Sức cản mạch máu ($R$)` | **Sức cản mạch máu (blood flow resistance – $R$)** | Giữ nguyên. |
| Số Reynolds | `Số Reynolds ($Re$)` | **Số Reynolds (Reynolds number – $Re$)** | Giữ nguyên. |
| Dòng chảy tầng / xoáy | `dòng chảy tầng`, `dòng chảy xoáy` | **Dòng chảy tầng (laminar flow)** / **Dòng chảy xoáy (turbulent flow)** | Giữ nguyên. |
| Tiếng thổi tim | `tiếng thổi tim` | **Tiếng thổi tim (heart murmur)** | Giữ nguyên. |

---

## E. Open Questions for Gate A (Câu hỏi xin ý kiến phê duyệt tại Gate A)

1. **Q1 (Tên chương):** `MANIFEST.md` ghi tên chương 01 là "Chuyên đề 1: Nhiệt động học sinh học & Động học chất lưu trong hệ tuần hoàn". Nguồn file không có tên chương bên trong HTML. Bạn đồng ý dùng tên từ MANIFEST làm tiêu đề chương S3?
2. **Q2 (Nội dung ngắn, 3 mục):** Nguồn chỉ 579 từ, 3 mục, không có bài tập, không có bảng, không có hình. Bạn đồng ý S3 bổ sung khung sư phạm T1–T3 (kiến thức tiên quyết, chuẩn đầu ra, thời lượng), bảng tổng hợp công thức, sơ đồ Mermaid, và bộ bài tập (gắn `[ADDED]`)?
3. **Q3 (Hình vẽ):** Nguồn có 0 bảng, 0 hình. Bạn đồng ý S3 đặt placeholder `[FIGURE]` cho sơ đồ hệ mở/cân bằng dừng, sơ đồ dòng chảy tầng vs xoáy, sơ đồ sức cản mạch theo r⁴?
4. **Q4 (Tài liệu tham khảo):** Nguồn có 0 trích dẫn và `APPROVED_REFERENCE_LIST: none`. Bạn đồng ý S3 để `[VERIFY: reference needed …]` và chờ cung cấp giáo trình chuẩn?

---

## F. Not verified / limitations

- **Phạm vi dữ liệu:** Chỉ dựa trên `00_source_original/ch01_doc-ld-1.html` (D-01). File nguồn được giữ nguyên trạng tuyệt đối (READ-ONLY).
- **Tài liệu tham khảo:** Không có trích dẫn gốc trong D-01; tất cả công thức, giá trị sẽ gắn `[VERIFY]` khi viết nếu không có trong nguồn.
- **Nội dung bổ sung ngoài nguồn:** Khung sư phạm, bài tập, hình vẽ, bảng tổng hợp là kiến thức giáo trình chuẩn, chưa có trong D-01; cần người dùng duyệt ở Gate A (Q2, Q3).
- **Kiểm tra cơ haine:** Thống kê文档 bằng script Python (xem mục A); chưa có script `check_coverage.py` chuyên dụng cho audit (sẽ chạy tại S2/S3).
- **Giới hạn giai đoạn:** Dừng ngay tại GATE A theo R9 và mục 7.2; chưa thực hiện viết bản thảo Stage S3.

---
GATE A: STOP. Awaiting user approval of the Content Mapping Matrix. Do not begin the transformation.
