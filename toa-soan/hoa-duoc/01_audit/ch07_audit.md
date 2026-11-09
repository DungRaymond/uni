# ch07_audit.md — S1 Audit · Chương 07 (D-07)

**Môn:** Hóa vô cơ dược · **Stage:** S1 Audit · **Ngày:** 2026-11-09  
**Nguồn audit:** `00_source_original/ch07_doc-hvc-7.html` (D-07) — READ-ONLY, không sửa.  
**Ngữ cảnh đối chiếu:** `00_config.md`, `00_source_original/MANIFEST.md`, `_state/carryover_latest.md`, `_state/glossary_running.md`, `_state/verification_list_running.md`, `01_audit/ch06_audit.md`.  
**Nguyên tắc:** Chỉ phân tích và lập hồ sơ truy vết; không viết lại, không sửa lỗi, không tự bổ sung kiến thức học thuật.

---

## A. Document Inventory

| D-ID | File | Type | Chapter | Slug gốc | Num | Lines | Approx. words | h4 / h5 | Formula boxes | Example boxes | Callouts | Tables | Figures/Images | References |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| D-07 | `00_source_original/ch07_doc-hvc-7.html` | chapter-source (HTML fragment, MathJax) | 07 | doc-hvc-7 | 7 | 395 | 2.643 (đếm bằng script) | 9 / 0 | 3 | 2 | 2 | 8 | 0 / 0 | 0 |

**Đặc điểm kỹ thuật (kiểm tra bằng script Python):**
- **Mã hóa & dung lượng:** UTF-8; 28.448 byte; 395 dòng; thẻ HTML đóng/mở cân bằng (`9 <h4>`, `8 <table>`, `9 <ul>`, `24 <li>`, `15 <p>`, `17 <div>`, `80 <strong>`, `20 <em>`, `19 <br>`).
- **Biểu thức toán/hóa (MathJax):** 2 khối công thức hiển thị riêng (`$$…$$`, tức 4 dấu `$$`), 174 biểu thức inline `$…$`.
- **Cấu trúc tiêu đề:** File bắt đầu trực tiếp bằng `<h4>1. Tổng quan & Phân loại Hai Nhánh Lớn</h4>`; không có `<h1>/<h2>/<h3>` và không có tên chương bên trong file (tên chương chỉ nằm ở `MANIFEST.md` — cần xác nhận).
- **Hộp nội dung:** 3 `formula-box`; 2 `example-box` (cisplatin/transplatin; đồng phân quang học Δ/Λ); 2 `callout` (Ý nghĩa và tác dụng; Cách nhớ).
- **Bảng biểu & Hình vẽ:** 8 bảng (`<table>`): phân loại tổng thể đồng phân; đồng phân ion hóa; solvat hóa; liên kết; hình học cis/trans; hình học bát diện fac/mer; ý nghĩa dược học tổng hợp. 0 hình vẽ/sơ đồ.
- **Tài liệu tham khảo:** 0 trích dẫn (`http`, `doi`, `ISBN`, "Tài liệu tham khảo", "NXB", "giáo trình" đều bằng 0). Trạng thái: **none present**.
- **Phân bổ số từ theo 9 mục (tổng ≈ 2.572 theo phân bổ mục, 2.643 toàn file):** `S-07.1` (~266) + `S-07.2` (~185) + `S-07.3` (~173) + `S-07.4` (~228) + `S-07.5` (~152) + `S-07.6` (~428) + `S-07.7` (~462) + `S-07.8` (~324) + `S-07.9` (~354).

> **Ghi chú dung lượng:** Nguồn giàu (2.643 từ), 9 mục, 8 bảng, 3 công thức, 2 ví dụ. Nội dung đặc biệt liên quan dược lý (cisplatin/transplatin, đồng phân quang học, hoạt tính sinh học). Không có bài tập, không có hình, không có tài liệu tham khảo.

---

## B. Source Section Register

| S-ID | D-ID | chapter | heading path | location | content types | approx. words | ≤20-word summary |
|---|---|---|---|---|---|---|---|
| S-07.1 | D-07 | 07 | `1. Tổng quan & Phân loại Hai Nhánh Lớn` | dòng 1–47 | theory/principle; definition; table; other | ~266 | Đồng phân phức chất: cùng công thức, khác cấu trúc/hình spazio; 2 nhánh lớn (cấu trúc: ion hóa, solvat, liên kết, phối trí; lập thể: hình học, quang học). |
| S-07.2 | D-07 | 07 | `2. Đồng phân Ion hóa (Ionization Isomerism)` | dòng 49–86 | theory/principle; table; example (case); application | ~185 | Anion/cation ở cầu ngoại vs phối tử ở cầu nội hoán đổi; ví dụ $[Co(NH_3)_5Br]SO_4$ vs $[Co(NH_3)_5(SO_4)]Br$; kiểm tra kết tủa $BaCl_2/AgNO_3$. |
| S-07.3 | D-07 | 07 | `3. Đồng phân Solvat hóa / Hydrat hóa (Solvate / Hydrate Isomerism)` | dòng 88–128 | theory/principle; table; example (case); application | ~173 | Nước làm phối tử ở cầu nội hoặc nước kết tinh ở cầu ngoại; 3 đồng phân hydrat của $[Cr(H_2O)_6]Cl_3$; đo độ dẫn điện/$AgCl$. |
| S-07.4 | D-07 | 07 | `4. Đồng phân Liên kết (Linkage Isomerism)` | dòng 130–174 | theory/principle; table; classification; application | ~228 | Phối tử lưỡng nha ($NO_2^-$, $SCN^-$) gắn qua nguyên tử khác nhau; Nitro/Nitrito, Thiocyanato/Isothiocyanato; HSAB giải thích chọn lọc. |
| S-07.5 | D-07 | 07 | `5. Đồng phân Phối trí (Coordination Isomerism)` | dòng 176–188 | theory/principle; example (inline) | ~152 | Cả cation và anion là ion phức, hoán đổi phối tử; ví dụ $[Co(NH_3)_6][Cr(CN)_6]$ vs $[Cr(NH_3)_6][Co(CN)_6]$. |
| S-07.6 | D-07 | 07 | `6. Đồng phân Hình học (Geometric Isomerism)` | dòng 190–264 | theory/principle; table; example (case); application | ~428 | $CN\ge4$ và không đồng nhất phối tử; $[MA_2B_2]$/$[MA_2BC]$ vuông phẳng cis/trans; $[MA_4B_2]$, $[MA_3B_3]$ fac/mer bát diện; cisplatin/transplatin dược lý. |
| S-07.7 | D-07 | 07 | `7. Đồng phân Quang học (Optical Isomerism / Chirality)` | dòng 266–326 | theory/principle; table; classification; application | ~462 | Không có $\sigma$/$i$/$S_n$ → cặp đối quang Δ/Λ; $[Co(en)_3]^{3+}$, $[Fe(ox)_3]^{3-}$, $[Cr(bipy)_3]^{3+}$; Δ/Λ không tự cho biết dấu quay (+)/(−). |
| S-07.8 | D-07 | 07 | `8. Ý nghĩa Dược học Tổng hợp — Tại sao Đồng phân Phức chất Quan trọng?` | dòng 328–368 | table; application; other | ~324 | Bảng liên hệ loại đồng phân với ý nghĩa dược lý/lâm sàng; cisplatin hoạt tính vs transplatin không; oxaliplatin dạng thuần quang. |
| S-07.9 | D-07 | 07 | `Ý nghĩa và tác dụng` (không đánh số) | dòng 370–377 | other (summary); theory/principle | ~40 | Đồng phân ảnh hưởng độ tan, tốc độ phân ly, tương tác sinh học và độc tính; nhận diện đúng đồng phân giúp đọc công thức và hiểu hiệu quả thuốc kim loại. |

**Tổng cộng:** 9 S-ID (`S-07.1` đến `S-07.9`); tổng số từ ≈ 2.572 từ (phân bổ mục) / 2.643 (toàn file).

---

## C. Content Coverage Matrix

| chapter | Definitions | Theory | Mechanisms | Equations | Examples | Case studies | Applications | Questions/Exercises | References | Figures/Tables |
|---|---|---|---|---|---|---|---|---|---|---|
| 07 (D-07) | Present (S-07.1, S-07.2, S-07.3, S-07.4, S-07.5) | Present (S-07.1–S-07.8) | Present (S-07.2 ion hóa; S-07.4 liên kết/HSAB; S-07.7 quark học) | Present (S-07.5 công thức inline; S-07.8 công thức box) | Present (S-07.2, S-07.3, S-07.6, S-07.7 ví dụ) | Present (S-07.6 cisplatin/transplatin; S-07.7 $[Co(en)_3]^{3+}$) | Present (S-07.1–S-07.8 đều có ứng dụng dược) | Absent | Absent | Present (8 bảng, 0 hình vẽ) |

**Ghi chú chi tiết về độ phủ:**
- **Definitions & Theory — Present:** Đủ định nghĩa và lý thuyết đồng phân phức chất.
- **Mechanisms — Present:** Cơ chế ion hóa, liên kết (HSAB), quark học (đối quang Δ/Λ).
- **Equations — Present:** Công thức inline và box (công thức phối trí, quy tắc kiểm tra quark học).
- **Examples — Present:** Nhiều ví dụ inline; 2 hộp example-box.
- **Case studies — Present:** cisplatin/transplatin, $[Co(en)_3]^{3+}$.
- **Applications — Present:** Tất cả mục đều có ứng dụng dược lý (thiết kế thuốc, Dược điển, dược động học).
- **Questions/Exercises — Absent:** 0 câu hỏi, 0 bài tập.
- **References — Absent:** 0 tài liệu tham khảo.
- **Figures/Tables — Present (8 bảng), 0 hình:** Có bảng nhưng chưa có sơ đồ/hình vẽ (cơ cấu cis/trans, đối quang Δ/Λ, …).

---

## D. Notation and Terminology Inventory

### D.1 Ký hiệu và đơn vị

| Symbol / unit | As written in source | Defined? | Location | Note |
|---|---|---|---|---|
| `cis/trans` | `cis`, `trans` | Yes | S-07.6 | Hình học phân tử vuông phẳng/bát diện. |
| `fac/mer` | `fac`, `mer` | Yes | S-07.6 | Đồng phân hình học bát diện $MA_3B_3$. |
| `Δ/Λ` | `Δ` (Delta), `Λ` (Lambda) | Yes | S-07.7 | Ký hiệu cấu hình helicity của phức quark học. |
| `R/S` | `R/S` | Yes | S-07.7 | Được nhắc nhưng không giải thích chi tiết (đề cập trong bảng phân loại). |
| $\eta^1$-N, $\eta^1$-O | `$\eta^1$-N`, `$\eta^1$-O` | Yes | S-07.4 | Hapticity của liên kết NO2⁻/ONO⁻. |

### D.2 Thuật ngữ / Glossary candidates

| Thuật ngữ / Đại lượng | Dạng viết trong nguồn (`D-07`) | Dạng chuẩn hóa đề xuất | Ghi chú chuẩn hóa |
|---|---|---|---|
| Đồng phân phức chất | `Đồng phân phức chất` | **Đồng phân phức chất (isomerism of coordination compounds)** | Giữ nguyên. |
| Đồng phân cấu trúc | `Đồng phân Cấu trúc (Structural Isomerism)` | **Đồng phân cấu trúc (structural isomerism)** | Giữ nguyên. |
| Đồng phân lập thể | `Đồng phân Lập thể (Stereo-isomerism)` | **Đồng phân lập thể (stereoisomerism)** | Giữ nguyên. |
| Đồng phân ion hóa | `Đồng phân Ion hóa (Ionization Isomerism)` | **Đồng phân ion hóa (ionization isomerism)** | Giữ nguyên. |
| Đồng phân solvat/hydrat | `Đồng phân Solvat hóa / Hydrat hóa` | **Đồng phân solvat hóa (solvate isomerism)** / **Đồng phân hydrat hóa (hydrate isomerism)** | Giữ nguyên. |
| Đồng phân liên kết | `Đồng phân Liên kết (Linkage Isomerism)` | **Đồng phân liên kết (linkage isomerism)** | Giữ nguyên. |
| Đồng phân phối trí | `Đồng phân Phối trí (Coordination Isomerism)` | **Đồng phân phối trí (coordination isomerism)** | Giữ nguyên. |
| Đồng phân hình học | `Đồng phân Hình học (Geometric Isomerism)` | **Đồng phân hình học (geometric isomerism)** | Giữ nguyên. |
| Đồng phân quark học | `Đồng phân Quang học (Optical Isomerism / Chirality)` | **Đồng phân quark học (optical isomerism / chirality)** | Giữ nguyên. |
| Đối quang | `đối quang (enantiomers)` | **Đối quang (enantiomers)** | Giữ nguyên. |
| Δ/Λ | `Δ (Delta)`, `Λ (Lambda)` | **Δ (Delta)** / **Λ (Lambda)** | Cấu hình helicity, không tự cho biết dấu quay. |
| Cisplatin/Transplatin | `Cisplatin`, `Transplatin` | **Cisplatin** / **Transplatin** | INN, giữ nguyên. |

---

## E. Open Questions for Gate A (Câu hỏi xin ý kiến phê duyệt tại Gate A)

1. **Q1 (Tên chương):** `MANIFEST.md` ghi tên chương 07 là gì? Nguồn file chỉ bắt đầu từ `<h4>1. Tổng quan & Phân loại Hai Nhánh Lớn</h4>` không có tên chương. Cần xác nhận tên chính xác trước S3.
2. **Q2 (Nội dung giàu, cấu trúc lại):** Nguồn 2.643 từ đã rất giàu (9 mục, 8 bảng, 3 công thức, 2 ví dụ). S3 có được phép cấu trúc lại, nhóm các mục tương tự để tránh trùng lặp với Ch06 (ví dụ cisplatin/transplatin đã trình bày ở Ch06 S-06.9), hay giữ toàn bộ nội dung nguồn?
3. **Q3 (Bổ sung bài tập):** Nguồn hoàn toàn không có câu hỏi/bài tập. Bạn có đồng ý S3 bổ sung bộ 10 câu hỏi/bài tập (gắn `[ADDED]`), tính trên các ví dụ có sẵn trong nguồn (cisplatin, $[Cr(H_2O)_6]Cl_3$, $[Co(en)_3]^{3+}$, …)?
4. **Q4 (Hình vẽ):** Nguồn có 8 bảng nhưng 0 hình vẽ/sơ đồ. Bạn có đồng ý S3 đặt placeholder `[FIGURE]` cho cơ cấu cis/trans, đối quang Δ/Λ, sơ đồ phân loại đồng phân?
5. **Q5 (Tài liệu tham khảo):** Nguồn có 0 trích dẫn và `APPROVED_REFERENCE_LIST: none`. Bạn đồng ý S3 để `[VERIFY: reference needed …]` và chờ cung cấp giáo trình chuẩn?

---

## F. Not verified / limitations

- **Phạm vi dữ liệu:** Chỉ dựa trên `00_source_original/ch07_doc-hvc-7.html` (D-07). File nguồn được giữ nguyên trạng tuyệt đối (READ-ONLY).
- **Tài liệu tham khảo:** Không có trích dẫn gốc trong D-07; tất cả công thức, giá trị sẽ gắn `[VERIFY]` khi viết nếu không có trong nguồn.
- **Nội dung bổ sung ngoài nguồn:** Bài tập, hình vẽ, bảng tổng hợp mới là kiến thức giáo trình chuẩn, chưa có trong D-07; cần người dùng duyệt ở Gate A (Q3, Q4).
- **Kiểm tra cơ haine:** Thống kê文档 bằng script Python (xem mục A); chưa có script `check_coverage.py` chuyên dụng cho audit (sẽ chạy tại S2/S3).
- **Giới hạn giai đoạn:** Dừng ngay tại GATE A theo R9 và mục 7.2; chưa thực hiện viết bản thảo Stage S3.

---
GATE A: STOP. Awaiting user approval of the Content Mapping Matrix. Do not begin the transformation.
