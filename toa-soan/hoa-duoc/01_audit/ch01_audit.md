# ch01_audit.md — S1 Audit · Chương 01 (D-01)

**Môn:** Hóa vô cơ dược · **Stage:** S1 Audit · **Ngày:** 2026-11-07
**Nguồn audit:** `00_source_original/ch01_doc-hvc-1.html` (D-01) — READ-ONLY, không sửa.
**Ngữ cảnh:** `00_config.md`, `00_source_original/MANIFEST.md`. Các file D-02…D-09 **không** được đọc/audit (xem K).
**Nguyên tắc:** Chỉ phân tích; không viết lại, không bổ sung kiến thức, không chạy S2.

---

## A. Document Inventory

| D-ID | File | Type | Chapter | Slug gốc | Num | Lines | Approx. words | h4 / h5 | Formula boxes | Example boxes | Callouts | Tables | Figures/Images | References |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| D-01 | `00_source_original/ch01_doc-hvc-1.html` | chapter-source (HTML fragment, MathJax) | 01 | doc-hvc-1 | 1 | 82 (không có newline cuối) | 1.373 (đếm bằng script) — MANIFEST ghi ~1.374 | 4 / 0 | 4 | 2 | 2 | 0 | 0 / 0 | 0 |

**Đặc điểm kỹ thuật (kiểm bằng script):**
- UTF-8; 10.832 byte; thẻ HTML cân bằng (12 `<div>`, 5 `<ul>`, 2 `<ol>`, 22 `<li>`, 4 `<p>`, 28 `<strong>`, 4 `<em>`).
- MathJax: 4 khối display `$$…$$`, 77 biểu thức inline `$…$`.
- 2 thuộc tính `style=` inline (callout ngoại lệ; callout-title).
- **Không có tiêu đề văn bản trong file**: file bắt đầu trực tiếp bằng `<h4>`; không có `h1/h2/h3`, không có tên chương (tên chương chỉ có trong MANIFEST).
- **Không có tài liệu tham khảo:** 0 dấu hiệu trích dẫn (`http`, `doi`, `ISBN`, "Tài liệu tham khảo", "NXB", "giáo trình", "nguồn" — tất cả = 0). Không có mục nào để liệt kê "nguyên văn"; trạng thái: **none present** (không áp dụng nhãn "unverified" vì không có mục nào).
- Phân bố từ theo 4 tiêu đề: 335 + 327 + 324 + 387 = 1.373.

---

## B. Source Section Register

| S-ID | D-ID | chapter | heading path | location | content types | approx. words | ≤20-word summary |
|---|---|---|---|---|---|---|---|
| S-01.1 | D-01 | 01 | [tên chương theo MANIFEST, không có trong file] › `1. Các đại lượng đặc trưng của liên kết hóa học & phân tử` | dòng 1–25 | definition; theory/principle; equation/model; data values; application | 335 | Định nghĩa năng lượng, độ dài, góc liên kết, momen lưỡng cực; ngưỡng Δχ; quy tắc cộng vector; đoạn ý nghĩa dược học. |
| S-01.2 | D-01 | 01 | `2. Thuyết Lewis & Điện tích hình thức (Formal Charge)` | dòng 26–50 | definition; theory/principle; equation/model; example (inline); application | 327 | Quy tắc bát tử; công thức và tiêu chuẩn điện tích hình thức; hiện tượng cộng hưởng; ví dụ CO₃²⁻, NO₃⁻, SO₄²⁻, benzen. |
| S-01.3 | D-01 | 01 | `3. Các ngoại lệ quan trọng của Quy tắc Bát tử` | dòng 51–66 | theory/principle (classification); mechanism/process (giải thích); example (inline); application; other (ghi chú "đề thi") | 324 | Ba ngoại lệ: thiếu electron, electron lẻ, bát tử mở rộng; ví dụ; liên hệ NO với sinh học. |
| S-01.4 | D-01 | 01 | `Ý nghĩa và tác dụng` (không đánh số) | dòng 67–68 | other (summary); application | 72 | Đoạn tổng kết lặp lại ý nghĩa của mục 1–3 và liên hệ dược học. |
| S-01.5 | D-01 | 01 | `Ý nghĩa và tác dụng` › [example-box, không có tiêu đề mục] | dòng 69–74 | example (worked, calculation) | 133 | Tính điện tích hình thức cho CO₂ và NO₃⁻; kiểm tra tổng FC. |
| S-01.6 | D-01 | 01 | `Ý nghĩa và tác dụng` › [example-box, không có tiêu đề mục] | dòng 75–80 | example (illustrative) | 96 | Ba ngoại lệ qua BF₃/NH₃, PCl₅, SF₆, NO; nhắc lại NO–guanylyl cyclase. |
| S-01.7 | D-01 | 01 | `Ý nghĩa và tác dụng` › [callout "Cách nhớ", không có tiêu đề mục] | dòng 81–83 | mechanism/process (procedure); other (study advice) | 86 | Quy trình 4 bước viết công thức Lewis và chọn cấu trúc bền. |

**Tổng: 7 S-ID; 1.373 từ** (S-01.4 = 72, S-01.5 = 133, S-01.6 = 96, S-01.7 = 86; 387 từ của mục 4).

---

## C. Content Coverage Matrix

| chapter | Definitions | Theory | Mechanisms | Equations | Examples | Case studies | Applications | Questions/Exercises | References | Figures/Tables |
|---|---|---|---|---|---|---|---|---|---|---|
| 01 (D-01) | Present (S-01.1, S-01.2) | Present (S-01.2, S-01.3) | Partial (S-01.3, S-01.7) | Present (S-01.1, S-01.2) — không đánh số | Present (S-01.5, S-01.6; ví dụ inline trong S-01.1–S-01.3) | Absent | Partial (S-01.1, S-01.3, S-01.4) — chỉ 1 câu khẳng định mỗi chỗ | Absent | Absent | Absent (0 bảng, 0 hình) |

Ghi chú ô:
- **Definitions – Present**, nhưng thiếu định nghĩa cho: bậc liên kết, Acid/Base Lewis, thuận từ, độ âm điện (xem D, I-10…I-12).
- **Mechanisms – Partial**: chỉ có lý giải định tính cho ngoại lệ (S-01.3) và quy trình 4 bước (S-01.7); không có cơ chế phản ứng (không bắt buộc ở chương này).
- **Applications – Partial**: các câu "ý nghĩa" nêu độ tan, độ ổn định, tương tác thuốc, acid–base, NO–giãn mạch nhưng không triển khai (xem I-20).
- **Figures/Tables – Absent**: nội dung hình học (góc liên kết, dạng phân tử) không có hình; các so sánh (ngưỡng Δχ, 3 ngoại lệ) không được bảng hóa.

---

## D. Notation and Terminology Inventory

### D.1 Ký hiệu và đơn vị

| Symbol / unit | As written in source | Defined? | Location | Note |
|---|---|---|---|---|
| `E_lk` | "Năng lượng liên kết ($E_{lk}$)" | Partial | S-01.1 | Đơn vị kJ/mol; không phân biệt năng lượng phân ly liên kết và enthalpy liên kết trung bình; không nêu điều kiện (khí, 298 K). |
| `d_lk` / `r_lk` | "Độ dài liên kết ($d_{lk}$ hay $r_{lk}$)" | Yes | S-01.1 | Hai ký hiệu cho cùng đại lượng; toàn bộ công thức sau đó chỉ dùng `r`. |
| `θ` | "Góc liên kết ($\theta$)" | Yes | S-01.1 | Không nêu đơn vị (độ/radian). |
| `μ`, `μ_pt` | `\vec{\mu} = q \cdot \vec{d}`; `\vec{\mu}_{pt}` | Partial | S-01.1 | `q`, `d` không được định nghĩa; không nêu quy ước chiều vector; `μ` bị dùng lẫn cho momen liên kết và momen tổng. |
| `Δχ` | "Theo hiệu độ âm điện ($\Delta\chi$ Pauling)" | Partial | S-01.1 | Không định nghĩa độ âm điện, không nêu thang Pauling; các ngưỡng 0,4 / 1,7 không được ghi là quy ước thực nghiệm. |
| `FC`, `V`, `N`, `B` | `FC = V - N - B/2` | Yes | S-01.2 | `V`, `N`, `B` được định nghĩa ngay sau công thức. |
| `q_phân tử` | "$\sum FC = q_{phân\ tử}$" | Yes | S-01.2 | — |
| `ns²np⁶`, `1s²` | trong định nghĩa quy tắc bát tử | Yes (ngầm) | S-01.2 | — |
| Å, pm | "($\text{Å}$ hoặc $pm$)" | Yes (đơn vị) | S-01.1 | Å không thuộc SI; trộn Å và pm trong cùng chương. |
| D (Debye), C·m | "1 D = 3,336 × 10⁻³⁰ C·m" | Yes | S-01.1 | D không thuộc SI (đối chiếu NOTATION: SI). |
| kJ/mol | `$kJ/mol$` (in nghiêng) và `\text{ kJ/mol}` | Yes | S-01.1 | Hai cách trình bày đơn vị khác nhau trong cùng mục. |

### D.2 Thuật ngữ

| Term | As written in source | Defined? | Location | Note |
|---|---|---|---|---|
| Quy tắc Bát tử (Octet Rule) | "góp chung, nhường hoặc nhận electron để đạt … $ns^2np^6$" | Yes | S-01.2 | Định nghĩa bằng diễn giải, không nêu giới hạn áp dụng (dẫn tới mục 3). |
| Điện tích hình thức (Formal Charge) | công thức + tiêu chuẩn | Yes | S-01.2 | — |
| Cộng hưởng (Resonance) | "sự lai hóa cộng hưởng (hybrid resonance)" | Partial | S-01.2 | Thuật ngữ "lai hóa" dễ nhầm với lai hóa orbital (chủ đề chương 3 theo MANIFEST). |
| Bậc liên kết | "Bậc liên kết càng lớn…"; "bậc liên kết thực nghiệm là 1⅓" | No | S-01.1, S-01.2 | Được dùng để so sánh nhưng không định nghĩa. |
| Acid Lewis / Base Lewis | "những Acid Lewis rất mạnh" | No | S-01.3 | Không định nghĩa trong chương; giả định kiến thức trước. |
| Thuận từ | "có tính thuận từ" | No | S-01.3 | Không định nghĩa; không phân biệt với nghịch từ. |
| Siêu hóa trị (Hypervalent) | "Bát tử mở rộng (Expanded Octet / Hợp chất Siêu hóa trị - Hypervalent)" | Partial | S-01.3 | Có nhãn tiếng Anh nhưng không nêu tiêu chí "siêu hóa trị". |
| Độ âm điện | "Theo hiệu độ âm điện ($\Delta\chi$ Pauling)" | No | S-01.1 | Giả định kiến thức phổ thông. |
| Electron hóa trị | "tổng e hóa trị" | No | S-01.2, S-01.7 | Giả định kiến thức trước. |
| Phân tử không cực / có cực | "cấu trúc đối xứng hoàn hảo thì $\mu_{pt} = 0$" | Partial | S-01.1 | "Đối xứng hoàn hảo" và "bất đối xứng" không được định nghĩa; đồng nhất bất đối xứng với có cực (xem I-25). |
| Liên kết ion | "bản chất hút tĩnh điện đa hướng không bão hòa" | Partial | S-01.1 | Định nghĩa gắn với ngưỡng Δχ; không nêu mạng ion. |
| Trạng thái khí | "ở trạng thái khí" | Yes (ngữ cảnh) | S-01.1 | Điều kiện cho năng lượng liên kết. |

---

## E. Figures, Tables, Equations Inventory

| ID | Type | Location | Content | Status / note |
|---|---|---|---|---|
| EQ-01.1 | Equation (display, bất đẳng thức) | S-01.1, dòng 4 | `E_lk(C≡C) > E_lk(C=C) > E_lk(C–C)` (839 > 614 > 348 kJ/mol) | Không đánh số; không nguồn. |
| EQ-01.2 | Equation (display, bất đẳng thức) | S-01.1, dòng 7 | `r(C–C) ≈ 1,54 Å > r(C=C) ≈ 1,34 Å > r(C≡C) ≈ 1,20 Å` | Không đánh số; không nguồn. |
| EQ-01.3 | Equation (display) | S-01.1, dòng 11 | `μ⃗ = q·d⃗`; kèm "1 D = 3,336 × 10⁻³⁰ C·m" | Không đánh số; thiếu định nghĩa biến và quy ước chiều. |
| EQ-01.4 | Equation (display) | S-01.2, dòng 30 | `FC = V − N − B/2` | Không đánh số; có danh sách biến ngay sau. |
| EQ-01.5 | Inline relations | S-01.1, S-01.2 | Ngưỡng Δχ (<0,4; 0,4–1,7; ≥1,7); `N = 2 × số cặp e lẻ`; `B = 2 × số liên kết`; `ΣFC = q_phân tử` | Không đánh số; không có bảng biến. |
| EX-01.1 | Worked example box | S-01.5 | FC của CO₂ và NO₃⁻ | Có lời giải từng bước; không đánh số. |
| EX-01.2 | Example box (minh họa) | S-01.6 | BF₃/NH₃, PCl₅, SF₆, NO | Trùng nội dung S-01.3 (xem F). |
| CALL-01.1 | Callout cảnh báo | S-01.3 | "⚠️ 3 trường hợp ngoại lệ kinh điển cần nắm chắc trong đề thi" | Trộn nội dung với lời khuyên thi. |
| CALL-01.2 | Callout "Cách nhớ" | S-01.7 | Quy trình 4 bước viết Lewis | Đặt dưới tiêu đề "Ý nghĩa và tác dụng". |
| FIG-01.* | Figures | — | Không có | 0 hình, 0 ảnh, 0 `<figure>`. |
| TAB-01.* | Tables | — | Không có | 0 bảng; các so sánh không được bảng hóa. |

Ghi chú: 4 display equation + 77 inline expression; không có hệ thống đánh số công thức, hình, bảng, ví dụ.

---

## F. Duplicated and Overlapping Content

| DUP-ID | Items involved | Type | Evidence | Note for S2 |
|---|---|---|---|---|
| DUP-01 | S-01.1 "Ý nghĩa" (45 từ), S-01.2 "Ý nghĩa" (33 từ), S-01.3 "Ý nghĩa" (45 từ), S-01.4 (72 từ) | Near-verbatim / conceptual | S-01.4: "Cấu trúc Lewis, điện tích hình thức và cộng hưởng giúp dự đoán cách phân tử liên kết, độ bền tương đối…" | S-01.4 lặp lại cả ba đoạn trước; ứng viên MERGE (giữ S-01.1–S-01.3, gộp S-01.4 thành 1 đoạn tổng kết). |
| DUP-02 | S-01.3 và S-01.6 (NO–guanylyl cyclase) | Near-verbatim | S-01.3: "hoạt hóa enzym Guanylyl Cyclase làm giãn cơ trơn mạch máu (hạ huyết áp)"; S-01.6: "hoạt hóa guanylyl cyclase → giãn mạch, hạ huyết áp" | Lặp cùng một khẳng định dược lý hai lần trong 2 khối liền nhau. |
| DUP-03 | S-01.3 và S-01.6 (ba ngoại lệ) | Conceptual duplication | Cùng ví dụ BF₃, PCl₅, SF₆, NO ở cả hai khối | Có thể là chủ ý củng cố; S2 cần quyết định giữ hay chuyển thành bài tập. |
| DUP-04 | S-01.2 (tiêu chuẩn cấu trúc bền) và S-01.7 (quy trình 4 bước) | Conceptual overlap | S-01.7 nhắc lại bát tử và FC đã nêu ở S-01.2 | Không sai, nhưng quy trình viết Lewis nên gắn với S-01.2. |
| DUP-05 | D-01 với các chương khác (chỉ suy ra từ tiêu đề MANIFEST) | Cross-chapter overlap (chưa đánh giá) | "góc liên kết" (S-01.1) và chủ đề VSEPR của D-02; "lai hóa" (S-01.2) và chủ đề VB của D-03 | **Không audit D-02/D-03**; chỉ ghi nhận để S2 quyết định mức trùng lặp. |

---

## G. Cross-document Conflicts

- **Trong D-01:** không phát hiện mâu thuẫn giữa hai tài liệu (chỉ có một tài liệu được audit). Các mâu thuẫn nội tại của D-01 được ghi ở H dưới dạng issue, không phải cross-document conflict.
- **Giữa các tài liệu:** **chưa đánh giá** — theo brief, chỉ audit D-01; D-02…D-09 không được đọc. Không có kết luận "không có xung đột" cho toàn bộ môn.
- `SOURCE_PRIORITY: ask me` → nếu S1/S2 sau này phát hiện xung đột giữa các chương, phải liệt kê và **không tự giải quyết**.
- Điểm có khả năng chồng lấn (chỉ từ tiêu đề MANIFEST, chưa đọc nội dung): góc liên kết/VSEPR (D-02), lai hóa orbital (D-03), liên kết hydro (D-05). Ghi nhận, không kết luận.

---

## H. Issues Register

| ID | Class | Category | Location | Evidence | Why it matters |
|---|---|---|---|---|---|
| I-01 | [CONFIRMED] | Dangling reference / internal contradiction | S-01.3, đoạn "Ý nghĩa" (dòng 66) | "NO và CO minh họa liên hệ giữa cấu hình electron với truyền tín hiệu sinh học và độc tính." | CO không được giới thiệu ở đâu trong chương và không phải ngoại lệ bát tử; người đọc dễ hiểu sai CO là ngoại lệ. S2 phải bỏ hoặc bổ sung có kiểm chứng. |
| I-02 | [CONFIRMED] | Heading numbering | S-01.4 (dòng 67) | Tiêu đề "Ý nghĩa và tác dụng" không có số, sau "1.", "2.", "3." | Chuỗi tiêu đề 1–2–3–(không số) không nhất quán; S5 sẽ phải đánh số lại. |
| I-03 | [CONFIRMED] | Heading hierarchy / document identity | Toàn file, dòng 1 | File bắt đầu bằng `<h4>1. Các đại lượng đặc trưng…`; không có h1–h3, không có tên chương | Fragment thiếu 3 cấp tiêu đề và tiêu đề chương; S2/S3 phải dựng lại khung T1–T8 từ đầu. |
| I-04 | [CONFIRMED] | Heading–content mismatch | S-01.2 (dòng 26); S-01.4 (dòng 67) | Tiêu đề mục 2 không nhắc "cộng hưởng" dù nội dung có; 2 ví dụ và "Cách nhớ" nằm dưới "Ý nghĩa và tác dụng" | Tiêu đề không phản ánh nội dung; quy trình viết Lewis bị tách khỏi phần lý thuyết Lewis. |
| I-05 | [CONFIRMED] | Duplication | S-01.1, S-01.2, S-01.3, S-01.4 | Xem DUP-01: bốn đoạn "Ý nghĩa", đoạn S-01.4 lặp lại ba đoạn trước | Làm loãng nội dung; S2 cần MERGE có kiểm soát, không tự ý xóa. |
| I-06 | [CONFIRMED] | Duplication | S-01.3 (dòng 59) và S-01.6 (dòng 79) | "…hoạt hóa enzym Guanylyl Cyclase làm giãn cơ trơn mạch máu (hạ huyết áp)" / "…hoạt hóa guanylyl cyclase → giãn mạch, hạ huyết áp" | Cùng một khẳng định dược lý lặp gần nguyên văn; nguồn không trích dẫn. |
| I-07 | [CONFIRMED] | Notation inconsistency | S-01.1 (dòng 6–7) | Khai báo "Độ dài liên kết ($d_{lk}$ hay $r_{lk}$)" nhưng công thức chỉ dùng `r(C - C)` | Hai ký hiệu cho một đại lượng, không nêu quy ước chọn; dễ gây nhầm khi viết lại. |
| I-08 | [CONFIRMED] | Symbol overloading | S-01.1 (dòng 20) | "Là tổng vector của các momen liên kết $\vec{\mu} = \sum \vec{\mu}_i$" | `μ` vừa là momen liên kết vừa là momen tổng; công thức như viết là tự quy chiếu, đúng phải là `μ_pt = Σμ_i`. |
| I-09 | [CONFIRMED] | Missing variable definition / units | S-01.1, EQ-01.3 (dòng 11) | `\vec{\mu} = q \cdot \vec{d}` chỉ kèm quy đổi Debye, không định nghĩa q, d | Thiếu đại lượng, đơn vị (C, m) và quy ước chiều vector; không đủ để sinh viên áp dụng. |
| I-10 | [CONFIRMED] | Undefined term | S-01.1 (dòng 3), S-01.2 (dòng 46) | "Bậc liên kết càng lớn thì năng lượng liên kết càng cao"; "bậc liên kết thực nghiệm là 1⅓" | Dùng khái niệm then chốt để so sánh nhưng không định nghĩa; mâu thuẫn với yêu cầu định nghĩa thuật ngữ ở S3. |
| I-11 | [CONFIRMED] | Undefined term | S-01.3 (dòng 56) | "các chất này đóng vai trò là những Acid Lewis rất mạnh" | Acid/Base Lewis là công cụ giải thích chính của mục 3 nhưng không được định nghĩa trong chương. |
| I-12 | [CONFIRMED] | Undefined term | S-01.3 (dòng 59) | "Các phân tử này có tính thuận từ và hoạt tính hóa học cực cao." | "Thuận từ" không được định nghĩa; sinh viên năm 1–2 có thể chưa có khái niệm này. |
| I-13 | [CONFIRMED] | Terminology precision | S-01.2 (dòng 45) | "cấu trúc thực là sự lai hóa cộng hưởng (hybrid resonance)" | "Lai hóa" là thuật ngữ dành cho lai hóa orbital (chương 3 theo MANIFEST); dùng ở đây dễ tạo khái niệm sai. |
| I-14 | [CONFIRMED] | Ambiguous instruction | S-01.7 (dòng 82) | "tính $FC$ và chọn cấu trúc có $\|FC\|$ nhỏ nhất, tổng $FC$ đúng bằng điện tích" | "Trị tuyệt đối FC nhỏ nhất" không nói là tổng trị tuyệt đối hay từng nguyên tử; tiêu chí không thao tác được. |
| I-15 | [CONFIRMED] | Units / formatting | S-01.1 (dòng 3–4, 7, 11) | `$kJ/mol$` in nghiêng cạnh `\text{ kJ/mol}`; "1,54 Å", "1 D" | Đơn vị không SI (Å, D) đối lập NOTATION "SI units"; hai cách trình bày đơn vị trong cùng mục. |
| I-16 | [CONFIRMED] | References absent | Toàn file | 0 trích dẫn: không `http`, `doi`, `ISBN`, "Tài liệu tham khảo", "NXB", "giáo trình" | Mọi số liệu và khẳng định dược lý không truy nguyên được; R4/R10 buộc ghi nhận. |
| I-17 | [CONFIRMED] | Structural completeness | Toàn file | Không có mở đầu, mục tiêu, phạm vi, prerequisites, kết luận, bài tập | Nguồn chỉ là fragment nội dung; S3 phải dựng T1/T2/T6/T7 bằng [ADDED] hoặc [VERIFY]. |
| I-18 | [CONFIRMED] | Source genre | S-01.3 (dòng 53), S-01.7 (dòng 81) | "⚠️ 3 trường hợp ngoại lệ kinh điển cần nắm chắc trong đề thi"; "Cách nhớ" | Văn phong luyện thi lẫn trong nội dung; cần chuyển giọng học thuật, không giữ nguyên khung "đề thi". |
| I-19 | [CONFIRMED] | Depth gap | S-01.1 | Chỉ có 4 khẳng định + 3 công thức; không ví dụ, không bảng số liệu, không chứng minh xu hướng | Nội dung định lượng mỏng so với DISCIPLINE_TYPE STEM-quantitative. |
| I-20 | [CONFIRMED] | Depth gap / application | S-01.1 (dòng 25), S-01.2 (dòng 50), S-01.3 (dòng 66), S-01.4 | "…ảnh hưởng độ tan, độ ổn định và khả năng thuốc tương tác với môi trường sinh học." | Liên hệ dược học chỉ ở mức khẳng định một câu, không có cơ chế/ví dụ; không được tự bổ sung dữ kiện dược lý. |
| I-21 | [POTENTIAL] | Convention presented as absolute | S-01.1 (dòng 15–17) | "$\Delta\chi \ge 1,7$: Liên kết ion" | Ngưỡng 0,4/1,7 là quy ước thực nghiệm, không tuyệt đối; nguồn không nêu tính quy ước. Cần chuyên gia xác nhận cách trình bày. |
| I-22 | [POTENTIAL] | Theory currency | S-01.3 (dòng 61) | "do có bán kính nguyên tử đủ lớn và có phân lớp $d$ trống ($3d, 4d$) … tham gia liên kết" | Giải thích hypervalency bằng orbital d là cách trình bày cổ điển đang bị tranh luận (3-center-4-electron/ionic); nguồn trình bày như đã chốt. |
| I-23 | [POTENTIAL] | Incomplete enumeration | S-01.3 (dòng 61) | Danh sách "P, S, Cl, Br, I, Xe" nhưng orbital chỉ ghi "(3d, 4d)" | I (chu kỳ 5) cần 5d; danh sách orbital không phủ hết các nguyên tố được nêu. |
| I-24 | [POTENTIAL] | Categorical claim | S-01.3 (dòng 55–56) | "Beri … Bo, Nhôm"; "Acid Lewis rất mạnh" | Không phân biệt độ mạnh, không nêu BeCl₂ ở pha rắn là polymer; khẳng định tuyệt đối thiếu so sánh. |
| I-25 | [POTENTIAL] | Conceptual precision | S-01.1 (dòng 20) | "Phân tử bất đối xứng có $\mu_{pt} > 0$ (phân tử có cực…)" | Đồng nhất "bất đối xứng" với "có cực"; độ phân cực phụ thuộc tổng vector và nhóm điểm đối xứng, không chỉ "đối xứng hoàn hảo". |
| I-26 | [POTENTIAL] | Pharmacology claim without support | S-01.3 (dòng 59), S-01.6 (dòng 79) | "Nitric oxide (NO) là chất truyền tin tế bào tối quan trọng… (hạ huyết áp)" | Nội dung dược lý/sinh lý có trong nguồn (được phép giữ) nhưng chưa kiểm chứng; cần vào Verification Queue, không tự mở rộng. |
| I-27 | [POTENTIAL] | Definition precision | S-01.1 (dòng 3) | "Năng lượng cần cung cấp để bẻ gãy 1 mol liên kết ở trạng thái khí" | Trộn năng lượng phân ly liên kết với enthalpy liên kết trung bình; không nêu dấu/điều kiện chuẩn. |
| I-28 | [POTENTIAL] | Generalization without qualification | S-01.1 (dòng 3) | "Bậc liên kết càng lớn thì năng lượng liên kết càng cao" | Là xu hướng, có ngoại lệ (ví dụ trong dãy khác nhau, hiệu ứng cặp electron đơn); nguồn trình bày như quy luật tuyệt đối. |

**Tổng hợp:** 20 CONFIRMED, 8 POTENTIAL (28 issue).

---

## I. Verification Queue

| V-ID | Item | Type | Location | Why | Suggested check | Priority |
|---|---|---|---|---|---|---|
| V-01 | 839 / 614 / 348 kJ/mol | number | S-01.1, EQ-01.1 | Không nguồn; dùng để dạy xu hướng | Đối chiếu sổ tay hóa học/bảng enthalpy liên kết | High |
| V-02 | 1,54 / 1,34 / 1,20 Å | number | S-01.1, EQ-01.2 | Không nguồn | Đối chiếu bảng độ dài liên kết chuẩn | High |
| V-03 | 1 D = 3,336 × 10⁻³⁰ C·m | constant | S-01.1, EQ-01.3 | Hằng số đơn vị | Đối chiếu định nghĩa SI | Medium |
| V-04 | Ngưỡng Δχ 0,4 và 1,7 | convention | S-01.1 | Quy ước, không tuyệt đối | Xác nhận giá trị Pauling thường dùng | High |
| V-05 | CO₃²⁻: 1,28 Å; bậc 1⅓ ≈ 1,33 | number | S-01.2 | Không nguồn | Đối chiếu dữ liệu tinh thể học | Medium |
| V-06 | NO 11 e; NO₂ 17 e; ClO₂ 19 e | number | S-01.3, S-01.6 | Số electron hóa trị | Tính lại theo nhóm (đã khớp số học) | Medium |
| V-07 | NO → guanylyl cyclase → giãn mạch, hạ huyết áp | fact / pharmacology | S-01.3, S-01.6 | Khẳng định sinh lý–dược lý không nguồn | Chuyên gia dược lý xác nhận | High |
| V-08 | Giải thích bát tử mở rộng bằng orbital d trống | theory | S-01.3 | Đang tranh luận trong hóa học hiện đại | Chuyên gia hóa vô cơ xác nhận cách trình bày | High |
| V-09 | BeCl₂, BF₃, AlCl₃ là "Acid Lewis rất mạnh" | claim | S-01.3 | Khẳng định định tính, thiếu so sánh | Xác nhận mức độ/điều kiện | Medium |
| V-10 | H₂SO₄ 12 e quanh S khi viết 2 liên kết đôi S=O | formalism | S-01.3 | Phụ thuộc công thức cộng hưởng được chọn | Xác nhận cách trình bày chuẩn | Medium |
| V-11 | Không có tài liệu tham khảo nào | reference | Toàn file | Không thể truy nguyên bất kỳ nội dung | Bổ sung từ APPROVED_REFERENCE_LIST (hiện 'none') | High |
| V-12 | Định nghĩa năng lượng liên kết (phân ly vs trung bình) | definition | S-01.1 | Ảnh hưởng cách dạy và bài tập | Chuyên gia xác nhận định nghĩa chuẩn | Medium |
| V-13 | Tiêu chí chọn cấu trúc Lewis: trị tuyệt đối FC nhỏ nhất | method | S-01.7 | Tiêu chí mơ hồ | Xác nhận quy tắc chuẩn (tổng trị tuyệt đối FC) | Medium |

---

## J. Initial Recommendations and Questions for the user

**Đề xuất (R1–R5)**
1. **R1:** S2 nên tách/đặt lại cấu trúc: mục 1 (đại lượng liên kết) → mục 2 (Lewis/FC) → mục 3 (ngoại lệ) → gộp "Ý nghĩa" thành một mục tổng kết duy nhất; chuyển 2 ví dụ và "Cách nhớ" về đúng phần lý thuyết tương ứng.
2. **R2:** Coi S-01.4 là ứng viên **MERGE** (DUP-01), S-01.6 là ứng viên **MERGE/giữ có chủ đích** (DUP-02/03); không xóa nội dung nào khi chưa được duyệt.
3. **R3:** Đưa toàn bộ số liệu (V-01…V-06) và khẳng định dược lý (V-07) vào Verification Queue của S2; không tự sửa số.
4. **R4:** Chuẩn hóa ký hiệu ngay ở S2: chọn một ký hiệu cho độ dài liên kết (`r`), tách `μ` và `μ_pt`, bổ sung định nghĩa biến cho `μ = q·d`.
5. **R5:** Ghi rõ trong matrix rằng chương này thiếu T1/T2/T6/T7 và không có tài liệu tham khảo; mọi phần bổ sung phải là [ADDED]/[VERIFY] đúng R2.

**Câu hỏi (Q1–Q5)**
6. **Q1:** Chấp nhận S3 bổ sung khung T1 (overview, scope, prerequisites, study time) và T2 (learning objectives) dưới dạng [ADDED] cho chương chỉ có 1.373 từ này?
7. **Q2:** Với I-01 (CO xuất hiện không có nội dung), anh/chị muốn **bỏ** cụm "và CO" hay **giữ + bổ sung** giải thích CO (kèm [VERIFY])?
8. **Q3:** Giữ văn phong luyện thi ("đề thi", "Cách nhớ") dưới dạng hộp ghi chú, hay chuyển hoàn toàn sang giọng bài giảng?
9. **Q4:** Về đơn vị (I-15): giữ Å/Debye kèm SI trong ngoặc, hay đổi hoàn toàn sang SI (pm, C·m)?
10. **Q5:** Về phần ứng dụng dược học (I-20, I-26): chỉ giữ đúng mức nguồn đã nêu, hay cho phép mở rộng bằng [ADDED] ở mức khái niệm (không thêm dữ kiện dược lý)?

---

## K. Not verified / limitations

- **Phạm vi:** Chỉ đọc và audit **D-01**. D-02…D-09 không được đọc; mọi nhận định về trùng lặp/xung đột giữa các chương chỉ dựa trên **tiêu đề trong MANIFEST**, không phải nội dung.
- **Sự tồn tại của tài liệu tham khảo:** nguồn **không có** mục tài liệu tham khảo nào, nên không có mục nào để đánh dấu "unverified"; không thể xác nhận nguồn gốc của bất kỳ số liệu nào.
- **Kiến thức bên ngoài:** các nhận định [POTENTIAL] (I-21…I-28) dựa trên kiến thức hóa học phổ thông, **chưa được chuyên gia xác nhận**; không phải kết luận đúng/sai.
- **Số liệu:** chưa đối chiếu với sổ tay/bảng chuẩn; chỉ ghi nhận giá trị như nguồn trình bày. Số học của 2 ví dụ (CO₂, NO₃⁻) đã được tính lại bằng script và khớp nội bộ, nhưng **không** xác nhận tính đúng đắn hóa học của dữ liệu vật lý.
- **Đếm từ:** tính bằng script Python (bỏ thẻ HTML); tổng 1.373 từ, lệch 1 từ so với "~1.374" trong MANIFEST (làm tròn).
- **HTML/MathJax:** phân tích bằng regex, không render; bố cục hiển thị, công thức render, và lỗi MathJax (nếu có) chưa được kiểm tra.
- **Chưa chạy:** không chạy S2, không tạo matrix, không sửa bất kỳ file nguồn nào; chưa chạy các script kiểm tra cơ học trong `_state/checks/` (S1 không yêu cầu).
- **Nội dung y khoa/dược lý:** các câu về NO, guanylyl cyclase, hạ huyết áp chưa được kiểm chứng; không đủ cơ sở để khẳng định đúng.
- **Không kết luận** về chất lượng học thuật tổng thể của chương; audit chỉ ghi nhận cấu trúc, tính nhất quán nội tại và các điểm cần kiểm chứng.
