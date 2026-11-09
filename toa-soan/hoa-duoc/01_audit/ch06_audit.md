# ch06_audit.md — S1 Audit · Chương 06 (D-06)

**Môn:** Hóa vô cơ dược · **Stage:** S1 Audit · **Ngày:** 2026-11-09  
**Nguồn audit:** `00_source_original/ch06_doc-hvc-6.html` (D-06) — READ-ONLY, không sửa.  
**Ngữ cảnh đối chiếu:** `00_config.md`, `00_source_original/MANIFEST.md`, `_state/carryover_latest.md`, `_state/glossary_running.md`, `_state/verification_list_running.md`, `01_audit/ch05_audit.md`.  
**Nguyên tắc:** Chỉ phân tích và lập hồ sơ truy vết; không viết lại, không sửa lỗi, không tự bổ sung kiến thức học thuật.

---

## A. Document Inventory

| D-ID | File | Type | Chapter | Slug gốc | Num | Lines | Approx. words | h4 / h5 | Formula boxes | Example boxes | Callouts | Tables | Figures/Images | References |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| D-06 | `00_source_original/ch06_doc-hvc-6.html` | chapter-source (HTML fragment, MathJax) | 06 | doc-hvc-6 | 6 | 536 | 5.158 (đếm bằng script) | 9 / 0 | 9 | 2 | 8 | 6 | 0 / 0 | 0 |

**Đặc điểm kỹ thuật (kiểm tra bằng script Python):**
- **Mã hóa & dung lượng:** UTF-8; 49.324 byte; 536 dòng; thẻ HTML đóng/mở cân bằng (`9 <h4>`, `17 <ul>`, `3 <ol>`, `62 <li>`, `14 <p>`, `27 <div>`, `148 <strong>`, `31 <em>`, `57 <br>`, `6 <table>`).
- **Biểu thức toán/hóa (MathJax):** 9 khối công thức hiển thị riêng (`$$…$$`, tức 18 dấu `$$`), 716 biểu thức inline `$…$`.
- **Cấu trúc tiêu đề:** File bắt đầu trực tiếp bằng `<h4>1. Thuyết Phối trí Alfred Werner…</h4>`; không có `<h1>/<h2>/<h3>` và không có tên chương bên trong file (tên chương chỉ nằm ở `MANIFEST.md` — cần xác nhận).
- **Hộp nội dung:** 9 `formula-box`; 2 `example-box` (Đọc ba phức chất thường gặp; EDTA 6 càng); 8 `callout` (Định nghĩa trọng tâm, Thí nghiệm kinh điển Werner, Hiệu ứng chelat, Cách nhớ x3, …).
- **Bảng biểu & Hình vẽ:** 6 bảng (`<table>`): so sánh cầu nội/ngoài; chuỗi phức Cobalt(III); phân loại phối tử; tra cứu danh pháp IUPAC; HSAB; ứng dụng y dược. 0 hình vẽ/sơ đồ.
- **Tài liệu tham khảo:** 0 trích dẫn (`http`, `doi`, `ISBN`, "Tài liệu tham khảo", "NXB", "giáo trình" đều bằng 0). Trạng thái: **none present**.
- **Phân bổ số từ theo 9 mục (tổng ≈ 5.045 từ theo phân bổ mục, 5.158 theo toàn file):** `S-06.1` (~916) + `S-06.2` (~272) + `S-06.3` (~430) + `S-06.4` (~298) + `S-06.5` (~311) + `S-06.6` (~574) + `S-06.7` (~775) + `S-06.8` (~536) + `S-06.9` (~933).

> **Ghi chú dung lượng:** Nguồn giàu (5.158 từ), 9 mục, 6 bảng, 9 công thức, 2 ví dụ. Có sẵn bảng và ví dụ — khác Ch05 (ngắn, 0 bảng). Không có bài tập, không có hình, không có tài liệu tham khảo.

---

## B. Source Section Register

| S-ID | D-ID | chapter | heading path | location | content types | approx. words | ≤20-word summary |
|---|---|---|---|---|---|---|---|
| S-06.1 | D-06 | 06 | `1. Thuyết Phối trí Alfred Werner & Bản chất Cầu nội - Cầu ngoại` | dòng 1–80 | theory/principle; definition; table; callout; example (inline) | ~916 | Alfred Werner 1893; cầu nội ([...], liên kết phối chí, không phân ly) vs cầu ngoại (bên ngoài [...], liên kết ion, phân ly hoàn toàn); bảng so sánh 6 tiêu chí; thí nghiệm AgCl/độ dẫn điện chuỗi Cobalt(III). |
| S-06.2 | D-06 | 06 | `2. Nguyên tử Trung tâm, Hóa trị chính - Hóa trị phụ & Số Phối trí (CN)` | dòng 137–160 | theory/principle; definition; example (inline) | ~272 | Ion kim loại trung tâm (Acid Lewis); hóa trị chính = số oxy hóa, hóa trị phụ = số phối trí CN; CN=2 (thẳng hàng), CN=4 (tứ diện/vuông phẳng), CN=6 (bát diện). |
| S-06.3 | D-06 | 06 | `3. Phân loại Phối tử (Ligands) chi tiết & Toàn diện` | dòng 161–228 | theory/principle; table; classification; application | ~430 | Phối tử 1 càng, 2 càng, đa càng, lưỡng nha, cầu nối; ví dụ & ứng dụng dược (Oxaliplatin, EDTA, Deferoxamine). |
| S-06.4 | D-06 | 06 | `4. Hiệu ứng Chelat (Chelate Effect) & Nền tảng Nhiệt động học` | dòng 229–245 | theory/principle; equation/model; callout; example (calculation) | ~298 | Định nghĩa chelat; $\Delta G^\circ=\Delta H^\circ-T\Delta S^\circ$; phản ứng $Ni^{2+}$ + $6NH_3$ ($\log\beta\approx8,6$) vs $+3en$ ($\log\beta\approx18,3$); entropy tăng → chelat bền. |
| S-06.5 | D-06 | 06 | `5. Quy tắc Danh pháp Phức chất Quốc tế (IUPAC Nomenclature)` | dòng 246–314 | theory/principle; table; example (inline) | ~311 | Trật tự gọi tên; tiếp đầu ngữ di/tri/tetra; số oxy hóa chữ La Mã; tên kim loại cation/trung hòa vs anion (-ate); bảng 8 ví dụ đọc tên. |
| S-06.6 | D-06 | 06 | `6. Các dạng Đồng phân trong Phức chất (Isomerism)` | dòng 315–361 | theory/principle; classification; example (case); application | ~574 | Đồng phân cấu trúc (ion hóa, solvat/hydrat, liên kết, phối trí) & lập thể (hình học cis/trans fac/mer, quark học đối quang $\Delta/\Lambda$); Cisplatin/Transplatin dược học. |
| S-06.7 | D-06 | 06 | `7. Thuyết Trường Tinh thể (CFT) & Bản chất Liên kết Phối trí` | dòng 362–407 | theory/principle; equation/model; example (inline); classification | ~775 | CFT tĩnh điện; tách mức $d$ bát diện ($t_{2g}$/$e_g$, $\Delta_o=10Dq$); dãy phổ phối tử; spin cao/thấp ($\Delta_o$ vs $P$); CFSE; màu sắc bước nhảy $d-d$; Jahn-Teller ($Cu^{2+}$). |
| S-06.8 | D-06 | 06 | `8. Cân bằng Phức chất, Hằng số Bền & Thuyết HSAB trong Dược khoa` | dòng 408–458 | theory/principle; equation/model; table; application | ~536 | Hằng số bền từng nấc $k_i$ và tổng $\beta_n$; hằng số bền điều kiện $\beta'$; HSAB (acid/base cứng-mềm); giải độc kim loại nặng (D-Penicillamine, Dimercaprol). |
| S-06.9 | D-06 | 06 | `9. Bảng Tổng Hợp Toàn Diện Ứng Dụng Hóa Phối Trí trong Y Dược` | dòng 459–523 | table; case study; application | ~933 | Bảng 10 ứng dụng: Cisplatin, Carboplatin/Oxaliplatin, $CaNa_2$-EDTA, D-Penicillamine, Deferoxamine, Dimercaprol, $Gd$-DTPA/DOTA (MRI), $^{99m}Tc$-Sestamibi (SPECT), Hemoglobin/Myoglobin, Vitamin B12. |

**Tổng cộng:** 9 S-ID (`S-06.1` đến `S-06.9`); tổng số từ ≈ 5.045 từ (phân bổ mục) / 5.158 (toàn file).

---

## C. Content Coverage Matrix

| chapter | Definitions | Theory | Mechanisms | Equations | Examples | Case studies | Applications | Questions/Exercises | References | Figures/Tables |
|---|---|---|---|---|---|---|---|---|---|---|
| 06 (D-06) | Present (S-06.1, S-06.2, S-06.3, S-06.5) | Present (S-06.1–S-06.8) | Present (S-06.1 liên kết phối chí; S-06.4 entropy chelat; S-06.7 tách trường; S-06.8 HSAB) | Present (S-06.4 $\Delta G$, $\log\beta$; S-06.7 CFSE, $\Delta_o=h\nu$; S-06.8 $\beta_n$, $\beta'$) | Present (S-06.1 chuỗi Cobalt; S-06.9 ví dụ đọc tên; S-06.7 $[FeF_6]^{3-}$/[Fe(CN)6]$^{3-}$) | Present (S-06.6 Cisplatin/Transplatin; S-06.9 10 ứng dụng thuốc) | Present (S-06.1–S-06.9 đều có ứng dụng dược) | Absent | Absent | Present (6 bảng, 0 hình vẽ) |

**Ghi chú chi tiết về độ phủ:**
- **Definitions & Theory — Present:** Đủ định nghĩa và lý thuyết cho mức đại học.
- **Mechanisms — Present:** Có cơ chế liên kết phối chí, entropy chelat, tách trường CFT, spin cao/thấp, HSAB.
- **Equations — Present:** Có 9 công thức ($\Delta G$, $\log\beta$, $\beta_n$, CFSE, $\Delta_o=h\nu$, điện tích cầu nội, …).
- **Examples — Present:** Ví dụ inline nhiều; 2 hộp example-box.
- **Case studies — Present:** 10 trường hợp ứng dụng trong bảng S-06.9.
- **Applications — Present:** Dược lý (Cisplatin, EDTA, Deferoxamine, MRI, SPECT, hemoglobin, B12).
- **Questions/Exercises — Absent:** 0 câu hỏi, 0 bài tập.
- **References — Absent:** 0 tài liệu tham khảo.
- **Figures/Tables — Present (6 bảng), 0 hình:** Có bảng nhưng chưa có sơ đồ/hình vẽ (cơ cấu phức, dãy phổ, tách mức $d$, …).

---

## D. Notation and Terminology Inventory

### D.1 Ký hiệu và đơn vị

| Symbol / unit | As written in source | Defined? | Location | Note |
|---|---|---|---|---|
| $[…]$ | `dấu ngoặc vuông [...]` | Yes | S-06.1 (dòng 9) | Đánh dấu cầu nội. |
| $q_{cầu\ nội}$ | `$$q_{cầu\ nội} = q_{kim\ loại} + \sum q_{phối\ tử}$$` | Yes | S-06.1 (dòng 14) | Tổng đại số điện tích. |
| $CN$ | `Số phối trí (Coordination Number - CN)` | Yes | S-06.2 (dòng 143) | Số vị trí phối tử ở cầu nội. |
| $\Delta_o, 10Dq$ | `Năng lượng tách trường tinh thể ($\Delta_o$ hay $10Dq$)` | Yes | S-06.7 (dòng 370) | Khoảng cách $t_{2g}$–$e_g$. |
| $CFSE$ | `$$CFSE = (-0,4 \cdot n_{t_{2g}} + 0,6 \cdot n_{e_g})\Delta_o + m \cdot P$$` | Yes | S-06.7 (dòng 393) | Năng lượng làm bền trường tinh thể. |
| $\beta_n, k_i$ | `$$M + L \rightleftharpoons ML\ (k_1)$$`; `$$\beta_n = k_1 \cdots k_n$$` | Yes | S-06.8 (dòng 412–414) | Hằng số bền từng nấc và tổng. |
| $\beta'$ | `$$\beta' = \frac{\beta_{ML}}{\alpha_M \cdot \alpha_L}$$` | Yes | S-06.8 (dòng 419) | Hằng số bền điều kiện. |
| $\Delta_o = h\nu = hc/\lambda$ | `$$\Delta_o = h\nu = \frac{h \cdot c}{\lambda}$$` | Yes | S-06.7 (dòng 398) | Bước nhảy $d-d$, màu sắc. |
| $\log\beta$ | `$\log\beta \approx 8,6$`, `$\log\beta \approx 18,3$` | Yes | S-06.4 (dòng 236–237) | Logarit hằng số bền. |

### D.2 Thuật ngữ / Glossary candidates

| Thuật ngữ / Đại lượng | Dạng viết trong nguồn (`D-06`) | Dạng chuẩn hóa đề xuất | Ghi chú chuẩn hóa |
|---|---|---|---|
| Phức chất | `phức chất`, `hợp chất phức vô cơ` | **Phức chất (coordination complex)** | Giữ nguyên. |
| Cầu nội / Cầu ngoại | `Cầu nội phối trí`, `Cầu ngoại` | **Cầu nội phối trí (inner coordination sphere)** / **Cầu ngoại (outer coordination sphere)** | Giữ nguyên, mở rộng tiếng Anh. |
| Số phối trí | `Số phối trí (Coordination Number - CN)` | **Số phối trí (Coordination Number – CN)** | Phân biệt với số phối trí lập thể $SN$ (Chương 2). |
| Hóa trị chính / Hóa trị phụ | `Hóa trị chính`, `Hóa trị phụ` | **Hóa trị chính (primary valence = số oxy hóa)** / **Hóa trị phụ (secondary valence = CN)** | Phân biệt rõ. |
| Phối tử / Ligand | `phối tử (ligands)` | **Phối tử (ligand)** | Giữ nguyên. |
| Số càng | `dung lượng phối trí (Denticity)` | **Dung lượng phối trí (denticity)** | 1 càng, 2 càng, đa càng. |
| Hiệu ứng chelat | `Hiệu ứng Chelat` | **Hiệu ứng chelat (chelate effect)** | Entropy-driven. |
| Thuyết Trường Tinh thể | `Thuyết Trường Tinh thể (Crystal Field Theory - CFT)` | **Thuyết trường tinh thể (CFT)** | Giữ nguyên. |
| Spin cao / Spin thấp | `Spin cao (High-spin)`, `Spin thấp (Low-spin)` | **Phức chất spin cao** / **Phức chất spin thấp** | Phụ thuộc $\Delta_o$ vs $P$. |
| Hằng số bền | `Hằng số bền tổng cộng ($\beta_n$)` | **Hằng số bền (stability constant)** | $\beta_n$ càng lớn → bền hơn. |
| HSAB | `Thuyết Acid - Base Cứng và Mềm của Pearson (HSAB)` | **Thuyết HSAB (hard-soft acid-base)** | Acid cứng-base cứng; acid mềm-base mềm. |
| Đồng phân | `Đồng phân cấu trúc`, `Đồng phân lập thể` | **Đồng phân (isomerism)** | Cấu trúc & lập thể. |
| Cisplatin | `Cisplatin ($cis-[Pt(NH_3)_2Cl_2]$)` | **Cisplatin** | INN, giữ nguyên. |

---

## E. Open Questions for Gate A (Câu hỏi xin ý kiến phê duyệt tại Gate A)

1. **Q1 (Tên chương):** `MANIFEST.md` ghi tên chương 06 là gì? Nguồn file chỉ bắt đầu từ `<h4>1. Thuyết Phối trí Alfred Werner…</h4>` không có tên chương. Cần xác nhận tên chính xác trước S3.
2. **Q2 (Nội dung giàu, cần cắt hay giữ toàn bộ):** Nguồn 5.158 từ đã rất giàu (9 mục, 6 bảng, 9 công thức). S3 có được phép cấu trúc lại, tóm tắt các mục quá dài (ví dụ S-06.9 bảng 10 ứng dụng) để khớp mục tiêu ~4.000–4.500 từ, hay giữ toàn bộ nội dung nguồn?
3. **Q3 (Bổ sung bài tập):** Nguồn hoàn toàn không có câu hỏi/bài tập. Bạn có đồng ý S3 bổ sung bộ 10 câu hỏi/bài tập (gắn `[ADDED]`), tính trên các ví dụ có sẵn trong nguồn?
4. **Q4 (Hình vẽ):** Nguồn có 6 bảng nhưng 0 hình vẽ/sơ đồ. Bạn có đồng ý S3 đặt placeholder `[FIGURE]` cho cơ cấu phức, dãy phổ phối tử, tách mức $d$ bát diện, hiệu ứng Jahn-Teller?
5. **Q5 (Tài liệu tham khảo):** Nguồn có 0 trích dẫn và `APPROVED_REFERENCE_LIST: none`. Bạn đồng ý S3 để `[VERIFY: reference needed …]` và chờ cung cấp giáo trình chuẩn?

---

## F. Not verified / limitations

- **Phạm vi dữ liệu:** Chỉ dựa trên `00_source_original/ch06_doc-hvc-6.html` (D-06). File nguồn được giữ nguyên trạng tuyệt đối (READ-ONLY).
- **Tài liệu tham khảo:** Không có trích dẫn gốc trong D-06; tất cả công thức, giá trị ($\log\beta$, $\Delta_o$, CFSE, số oxy hóa) sẽ gắn `[VERIFY]` khi viết nếu không có trong nguồn.
- **Nội dung bổ sung ngoài nguồn:** Bài tập, hình vẽ, bảng tổng hợp mới là kiến thức giáo trình chuẩn, chưa có trong D-06; cần người dùng duyệt ở Gate A (Q3, Q4).
- **Kiểm tra cơ haine:** Thống kê文档 bằng script Python (xem mục A); chưa có script `check_coverage.py` chuyên dụng cho audit (sẽ chạy tại S2/S3).
- **Giới hạn giai đoạn:** Dừng ngay tại GATE A theo R9 và mục 7.2; chưa thực hiện viết bản thảo Stage S3.

---
GATE A: STOP. Awaiting user approval of the Content Mapping Matrix. Do not begin the transformation.
