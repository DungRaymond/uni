# ch10_audit.md — S1 Audit · Chương 10 (D-10)

**Môn:** Y dược – Master Lecture Notes · **Stage:** S1 Audit · **Ngày:** 2026-11-09  
**Nguồn audit:** `00_source_original/ch10_doc-myd-10.html` (D-10) — READ-ONLY, không sửa.  
**Ngữ cảnh đối chiếu:** `00_config.md`, `00_source_original/MANIFEST.md`, `_state/carryover_latest.md`, `_state/glossary_running.md`, `_state/verification_list_running.md`.  
**Nguyên tắc:** Chỉ phân tích và lập hồ sơ truy vết; không viết lại, không sửa lỗi, không tự bổ sung kiến thức học thuật.

---

## A. Document Inventory

| D-ID | File | Type | Chapter | Slug gốc | Num | Lines | Approx. words | h4 / h5 | Formula boxes | Example boxes | Callouts | Tables | Figures/Images | References |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| D-10 | `00_source_original/ch10_doc-myd-10.html` | chapter-source (HTML fragment, MathJax) | 10 | doc-myd-10 | 10 | 28 | 1375 (đếm bằng script) | 7 / 0 | 2 | 1 | 1 | 1 | 0 / 0 | 0 |

**Đặc điểm kỹ thuật (kiểm tra bằng script Python):**
- **Mã hóa & dung lượng:** UTF-8; ~8.300 byte; 28 dòng; thẻ HTML đóng/mở cân bằng (`7 <h4>`, `1 <table>`, `1 <thead>`, `1 <tbody>`, `4 <tr>`, `12 <th>/<td>`, `3 <ul>`, `~10 <li>`, `4 <p>`, `1 <div>`, `14 <strong>`, `1 <em>`, `6 <br>`).
- **Biểu thức toán/hóa (MathJax):** 2 khối công thức hiển thị riêng (`$$…$$`, tức 8 dấu `$$`), 0 biểu thức inline `$…$` (trừ các giá trị số trong ví dụ).
- **Cấu trúc tiêu đề:** File bắt đầu trực tiếp bằng `<h4>1. Phân bố nước và các khoang dịch</h4>`; không có `<h1>/<h2>/<h3>` và không có tên chương bên trong file (tên chương chỉ nằm ở `MANIFEST.md`: `Dịch cơ thể, cân bằng nước và rối loạn thường gặp`).
- **Hộp nội dung:** 2 `formula-box` (Osm_{ước tính}; Thiếu hụt nước); 1 `example-box` (ước tính thiếu hụt nước tự do); 1 `callout` (Tóm tắt cơ chế ×1).
- **Bảng biểu & Hình vẽ:** 1 bảng (khoang dịch), 0 hình vẽ/sơ đồ.
- **Tài liệu tham khảo:** 0 trích dẫn (`http`, `doi`, `ISBN`, "Tài liệu tham khảo", "NXB", "giáo trình" đều bằng 0). Trạng thái: **none present**.
- **Phân bổ số từ theo 7 mục (tổng = 1375 từ):** `S-10.1` (~190) + `S-10.2` (~250) + `S-10.3` (~200) + `S-10.4` (~350) + `S-10.5` (~150) + `S-10.6` (~140) + `S-10.7` (~95) — xem mục B.

> **Ghi chú dung lượng:** Nếu vừa (1375 từ), 7 mục, 2 công thức, 1 ví dụ, 1 callout. Không có bài tập, không có hình, không có tài liệu tham khảo.

---

## B. Source Section Register

| S-ID | D-ID | chapter | heading path | location | content types | approx. words | ≤20-word summary |
|---|---|---|---|---|---|---|---|
| S-10.1 | D-10 | 10 | `1. Phân bố nước và các khoang dịch` | dòng 1–3 | theory/principle; definition; table | ~190 | Nước toàn cơ thể 50–60% cân nặng; ICF ≈ 2/3 (28 L), ECF ≈ 1/3 (14 L: dịch kẽ 11 L, huyết tương 3 L); Na⁺ ion chính ECF, K⁺ ion chính ICF. |
| S-10.2 | D-10 | 10 | `2. Osmolality, tonicity và dịch chuyển nước` | dòng 4–6 | theory/principle; equation/model | ~250 | Osmolality số tiểu phân thẩm thấu/kg nước (khoảng 275–295 mOsm/kg); Tonicity tác động lên thể tích tế bào; Osm_{ước tính} = 2[Na⁺] + glucose/18 + BUN/2.8; dịch ưu trương/nhược trương/đẳng trương. |
| S-10.3 | D-10 | 10 | `3. Cân bằng nước vào-ra` | dòng 7–8 | theory/principle; application | ~200 | Nước vào từ đồ uống/thức ăn/chuyển hóa; nước ra qua nước tiểu/da/hô hấp/phân; thận điều chỉnh; cảm giác khát; sốt/tiêu chảy/nôn/bỏng/lợi tiểu làm mất nước; suy tim/thận/gan gây giữ nước. |
| S-10.4 | D-10 | 10 | `4. Điều hòa thận và hormone` | dòng 9–13 | theory/principle; mechanism | ~350 | ADH/vasopressin (osmolality/thể tích → V₂ receptor → aquaporin-2 → tái hấp thu nước); hệ RAA (renin → Angiotensin II → aldosterone → tái hấp thu Na⁺, bài tiết K⁺/H⁺); peptide lợi niệu nhĩ/BNP; thận điều chỉnh lọc cầu và tái hấp thu. |
| S-10.5 | D-10 | 10 | `5. Trao đổi dịch mao mạch và phù` | dòng 14–15 | theory/principle; mechanism | ~150 | Dịch qua thành mao mạch chịu áp lực thủy tĩnh, áp lực keo huyết tương, tính thấm, dẫn lưu bạch huyết; phù khi lọc dịch vượt tái hấp thu (tăng áp lực tĩnh mạch, giảm albumin, tăng tính thấm viêm, tắc bạch huyết). |
| S-10.6 | D-10 | 10 | `6. Natri máu: nồng độ không đồng nhất với lượng natri toàn cơ thể` | dòng 16–19 | theory/principle; application | ~140 | Nồng độ Na⁺ huyết thanh phản ánh tương quan chất tan/tổng nước cơ thể; hạ natri = dư nước tương đối (không nhất thiết thiếu natri toàn thân); tăng natri = thiếu nước tương đối; diễn giải cùng thể tích, glucose, thận, osmolality. |
| S-10.7 | D-10 | 10 | `7. Đánh giá thực hành và công thức ước tính` | dòng 20–23 | theory/principle; equation/model; application | ~95 | Đánh giá: cân nặng, vào-ra, mạch/huyết áp tư thế, niêm mạc, phù, tĩnh mạch cổ, nước tiểu, Na⁺/K⁺/ure/creatinin, glucose, osmolality; Thiếu hụt nước ≈ TBW × (Na_{đo}/Na_{mục tiêu} − 1); an toàn: hạ Na⁺ quá nhanh gây phù não. |

**Tổng cộng:** 7 S-ID (`S-10.1` đến `S-10.7`); tổng số từ 1375 từ (phân bổ mục) / 1375 (toàn file).

---

## C. Content Coverage Matrix

| chapter | Definitions | Theory | Mechanisms | Equations | Examples | Case studies | Applications | Questions/Exercises | References | Figures/Tables |
|---|---|---|---|---|---|---|---|---|---|---|
| 10 (D-10) | Present (S-10.1–S-10.7) | Present (S-10.1–S-10.7) | Present (S-10.2 osmosis/tonicity; S-10.4 ADH/RAA; S-10.5 mao mạch/phù) | Present (S-10.2 Osm_{ước tính}; S-10.7 Thiếu hụt nước) | Present (S-10.7 ví dụ estimating thiếu hụt nước tự do: TBW 42 L, Na 155→145 → 2,9 L) | Absent | Present (S-10.1–S-10.7 đánh giá thực hành, phân biệt mất nước/quá tải dịch/phù/rối loạn natri) | Absent | Absent | Present (1 bảng: khoang dịch) |

**Ghi chú chi tiết về độ phủ:**
- **Definitions & Theory — Present:** Định nghĩa osmolality, tonicity, khoang dịch ICF/ECF, cân bằng nước vào-ra, ADH/RAA, trao đổi dịch mao mạch, natri máu.
- **Mechanisms — Present:** Cơ chế dịch chuyển nước theo osmolality/tonicity; điều hòa thận (ADH, RAA, BNP); trao đổi dịch mao mạch (áp lực thủy tĩnh, áp lực keo).
- **Equations — Present:** 2 công thức (Osm_{ước tính}; Thiếu hụt nước ≈ TBW × (Na_{đo}/Na_{mục tiêu} − 1)).
- **Examples — Present:** 1 ví dụ (ước tính thiếu hụt nước tự do: TBW = 42 L, Na 155 mmol/L → mục tiêu 145 → thiếu hụt ≈ 2,9 L).
- **Case studies — Absent:** 0 ca bệnh cụ thể.
- **Applications — Present:** Ứng dụng dược lý: đánh giá thực hành, phân biệt mất nước/quá tải dịch/phù/rối loạn natri, an toàn điều chỉnh natri.
- **Questions/Exercises — Absent:** 0 câu hỏi, 0 bài tập trong nguồn.
- **References — Absent:** 0 tài liệu tham khảo.
- **Figures/Tables — Present:** 1 bảng (khoang dịch: nước toàn cơ thể, ICF, ECF, dịch kẽ/huyết tương).

---

## D. Notation and Terminology Inventory

### D.1 Ký hiệu và đơn vị

| Symbol / unit | As written in source | Defined? | Location | Note |
|---|---|---|---|---|
| $Osm_{ước\ tính} = 2[Na^+] + \frac{glucose}{18} + \frac{BUN}{2.8}$ | `$$Osm_{ước\ tính}=2[Na^+]+\frac{glucose}{18}+\frac{BUN}{2.8}\quad (mOsm/kg)$$` | Yes | S-10.2 (dòng 5) | Ước tính osmolality huyết tương khi glucose và BUN tính bằng mg/dL. |
| $Thiếu\ hụt\ nước (L) \approx TBW \times (\frac{Na_{đo}}{Na_{mục\ tiêu}} - 1)$ | `$$Thiếu\ hụt\ nước\ (L)\approx TBW\times\left(\frac{Na_{đo}}{Na_{mục\ tiêu}}-1\right)$$` | Yes | S-10.7 (dòng 22) | Ước tính thiếu hụt nước tự do khi tăng natri máu. |
| TBW | `TBW` | Yes | S-10.7 (dòng 22) | Tổng lượng nước cơ thể ước tính. |
| mOsm/kg | `mOsm/kg` | Yes | S-10.2 (dòng 5) | Đơn vị osmolality (tiểu phân thẩm thấu trên kg nước). |

### D.2 Thuật ngữ / Glossary candidates

| Thuật ngữ / Đại lượng | Dạng viết trong nguồn (`D-10`) | Dạng chuẩn hóa đề xuất | Ghi chú chuẩn hóa |
|---|---|---|---|
| Osmolality | `Osmolality` | **Osmolality (osmolality)** | Giữ nguyên. |
| Tonicity | `Tonicity` | **Tonicity** | Giữ nguyên. |
| Dịch nội bào | `dịch nội bào` | **Dịch nội bào (intracellular fluid – ICF)** | Giữ nguyên. |
| Dịch ngoại bào | `dịch ngoại bào` | **Dịch ngoại bào (extracellular fluid – ECF)** | Giữ nguyên. |
| Dịch kẽ | `dịch kẽ` | **Dịch kẽ (interstitial fluid)** | Giữ nguyên. |
| Huyết tương | `huyết tương` | **Huyết tương (plasma)** | Giữ nguyên. |
| ADH/vasopressin | `ADH/vasopressin` | **ADH/vasopressin (hormone chống lại thuần sinh)** | Giữ nguyên. |
| Aquaporin-2 | `aquaporin-2` | **Aquaporin-2** | Giữ nguyên. |
| Hệ renin–angiotensin–aldosterone | `Hệ renin–angiotensin–aldosterone` | **Hệ renin–angiotensin–aldosterone (RAAS)** | Giữ nguyên. |
| Peptide lợi niệu nhĩ/BNP | `Peptide lợi niệu nhĩ/BNP` | **Peptide lợi niệu nhĩ/BNP (B-type natriuretic peptide)** | Giữ nguyên. |
| Hạ natri máu | `Hạ natri máu` | **Hạ natri máu (hyponatremia)** | Giữ nguyên. |
| Tăng natri máu | `Tăng natri máu` | **Tăng natri máu (hypernatremia)** | Giữ nguyên. |
| Phù | `Phù` | **Phù (edema)** | Giữ nguyên. |

---

## E. Open Questions for Gate A (Câu hỏi xin ý kiến phê duyệt tại Gate A)

1. **Q1 (Tên chương):** `MANIFEST.md` ghi tên chương 10 là "Dịch cơ thể, cân bằng nước và rối loạn thường gặp". Nguồn file không có tên chương bên trong HTML. Bạn đồng ý dùng tên từ MANIFEST làm tiêu đề chương S3?
2. **Q2 (Nguồn vừa, 7 mục):** Nguồn 1375 từ, 7 mục, có 2 công thức, 1 ví dụ, 1 bảng, không có bài tập. Bạn đồng ý S3 bổ sung khung sư pháp T1–T3, sơ đồ Mermaid điều hòa nước/điện giải, và bổ sung bài tập (gắn `[ADDED]`)?
3. **Q3 (Hình vẽ):** Nguồn có 1 bảng, 0 hình. Bạn đồng ý S3 đặt placeholder `[FIGURE]` cho phân bố khoang dịch, cơ chế ADH/RAA, trao đổi dịch mao mạch?
4. **Q4 (Tài liệu tham khảo):** Nguồn có 0 trích dẫn và `APPROVED_REFERENCE_LIST: none`. Bạn đồng ý S3 để `[VERIFY: reference needed …]` và chờ cung cấp giáo trình chuẩn?

---

## F. Not verified / limitations

- **Phạm vi dữ liệu:** Chỉ dựa trên `00_source_original/ch10_doc-myd-10.html` (D-10). File nguồn được giữ nguyên trạng tuyệt đối (READ-ONLY).
- **Tài liệu tham khảo:** Không có trích dẫn gốc trong D-10; tất cả công thức, giá trị số sẽ gắn `[VERIFY]` khi viết nếu không có trong nguồn.
- **Nội dung bổ sung ngoài nguồn:** Khung sư pháp, bài tập, hình vẽ, bảng tổng hợp là kiến thức giáo trình chuẩn, chưa có trong D-10; cần người dùng duyệt ở Gate A (Q2, Q3).
- **Kiểm tra cơ haine:** Thống kê文档 bằng script Python (xem mục A); chưa có script `check_coverage.py` chuyên dụng cho audit (sẽ chạy tại S2/S3).
- **Giới hạn giai đoạn:** Dừng ngay tại GATE A theo R9 và mục 7.2; chưa thực hiện viết bản thảo Stage S3.

---

GATE A: STOP. Awaiting user approval of the Content Mapping Matrix. Do not begin the transformation.