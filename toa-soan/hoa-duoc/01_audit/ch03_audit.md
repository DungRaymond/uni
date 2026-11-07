# ch03_audit.md — S1 Audit · Chương 03 (D-03)

**Môn:** Hóa vô cơ dược · **Stage:** S1 Audit · **Ngày:** 2026-11-07  
**Nguồn audit:** `00_source_original/ch03_doc-hvc-3.html` (D-03) — READ-ONLY, không sửa.  
**Ngữ cảnh đối chiếu:** `00_config.md`, `00_source_original/MANIFEST.md`, `_state/carryover_latest.md`, `01_audit/ch02_audit.md`, `00_source_original/refs/D-09_doc-hvc-9.html`.  
**Nguyên tắc:** Chỉ phân tích và lập hồ sơ truy vết; không viết lại, không sửa lỗi, không tự bổ sung kiến thức học thuật.

---

## A. Document Inventory

| D-ID | File | Type | Chapter | Slug gốc | Num | Lines | Approx. words | h4 / h5 | Formula boxes | Example boxes | Callouts | Tables | Figures/Images | References |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| D-03 | `00_source_original/ch03_doc-hvc-3.html` | chapter-source (HTML fragment, MathJax) | 03 | doc-hvc-3 | 3 | 74 (không có newline cuối) | 1.321 (đếm bằng script, khớp MANIFEST 1.321) | 5 / 0 | 0 | 2 | 1 | 0 | 0 / 0 | 0 |

**Đặc điểm kỹ thuật (kiểm tra bằng script Python):**
- **Mã hóa & dung lượng:** UTF-8; 10.221 byte; 74 dòng; thẻ HTML đóng/mở cân bằng (`5 <h4>`, `6 <p>`, `7 <ul>`, `1 <ol>`, `25 <li>`, `6 <div>`, `30 <strong>`, `6 <br>`).
- **Biểu thức toán/hóa (MathJax):** 0 khối công thức hiển thị riêng (`$$…$$`), 111 biểu thức inline `$…$`; có một số ký tự toán/hóa Unicode (`σ`, `π`, `→`, `–`) nằm ngoài cặp dấu `$…$` ở dòng 59–73.
- **Cấu trúc tiêu đề:** File bắt đầu trực tiếp bằng thẻ `<h4>1. Luận điểm cơ bản của Thuyết VB (Heitler - London - Pauling)</h4>`; không có `<h1>/<h2>/<h3>` và không có tên chương bên trong file (tên chương chỉ nằm ở `MANIFEST.md`: *Chuyên đề 3: Thuyết Liên kết Hóa trị (Valence Bond - VB) & Cơ chế Lai hóa Orbital*).
- **Bảng biểu & Hình vẽ:** 0 bảng (`<table>`) và 0 hình vẽ/sơ đồ (`<img>`, `<svg>`, `<figure>`).
- **Tài liệu tham khảo:** 0 trích dẫn (`http`, `doi`, `ISBN`, "Tài liệu tham khảo", "NXB", "giáo trình", "nguồn" đều bằng 0). Trạng thái: **none present**.
- **Phân bổ số từ theo 8 đơn vị mục/hộp (tổng = 1.321 từ):** `S-03.1` (202) + `S-03.2` (262) + `S-03.3` (316) + `S-03.4` (177) + `S-03.5` (75) + `S-03.6` (120) + `S-03.7` (99) + `S-03.8` (70) = 1.321 từ.

---

## B. Source Section Register

| S-ID | D-ID | chapter | heading path | location | content types | approx. words | ≤20-word summary |
|---|---|---|---|---|---|---|---|
| S-03.1 | D-03 | 03 | [tên chương theo MANIFEST] › `1. Luận điểm cơ bản của Thuyết VB (Heitler - London - Pauling)` | dòng 1–9 | theory/principle; definition; mechanism/process | 202 | Sự xen phủ AO, ghép đôi spin đối song song, nguyên lý xen phủ cực đại, tính định hướng, bão hòa. |
| S-03.2 | D-03 | 03 | `2. Phân loại kiểu xen phủ tạo liên kết ($\sigma, \pi, \delta$)` | dòng 10–29 | definition; theory/principle; mechanism/process; example (inline) | 262 | Phân loại xen phủ trục ($\sigma$), xen phủ bên ($\pi$), xen phủ 4 thùy ($\delta$); độ bền, mặt phẳng nút. |
| S-03.3 | D-03 | 03 | `3. Thuyết Lai hóa Orbital (Orbital Hybridization)` | dòng 30–45 | definition; theory/principle; equation/model (sơ đồ tổ hợp AO); example (inline); application | 316 | Khái niệm lai hóa; các kiểu $sp, sp^2, sp^3, sp^3d, dsp^2, sp^3d^2, d^2sp^3$; ví dụ phân tử và phức chất Cisplatin. |
| S-03.4 | D-03 | 03 | `4. Đánh giá ưu điểm & Hạn chế chí mạng của Thuyết VB` | dòng 46–57 | theory/principle; other (model evaluation / limitations); example (inline) | 177 | Ưu điểm trực quan và 3 hạn chế lớn của VB: tính thuận từ $O_2$, màu/phổ phức chất, liên kết $B_2H_6$. |
| S-03.5 | D-03 | 03 | `Ý nghĩa và tác dụng` (không đánh số) | dòng 58–59 | other (summary); application | 75 | Tổng kết vai trò mô hình VB và lai hóa trong giải thích cấu trúc, đồng phân hình học và giới hạn mô hình. |
| S-03.6 | D-03 | 03 | `Ý nghĩa và tác dụng` › [example-box: `🔎 Ví dụ — Ba kiểu lai hóa: $sp^3$, $sp^2$, $sp$`] | dòng 60–65 | example (illustrative) | 120 | Phân tích tổ hợp AO, góc liên kết, liên kết $\sigma/\pi$ và hình học của $CH_4$ ($sp^3$), $C_2H_4$ ($sp^2$), $C_2H_2$ ($sp$). |
| S-03.7 | D-03 | 03 | `Ý nghĩa và tác dụng` › [example-box: `🔎 Ví dụ — Vì sao góc $H-O-H$ chỉ $104,5^\circ$?`] | dòng 66–71 | example (illustrative); mechanism/process; application | 99 | Giải thích góc liên kết của $H_2O$ ($104,5^\circ$) và $NH_3$ ($107,3^\circ$) trên nền lai hóa $sp^3$; hệ quả độ tan dược học. |
| S-03.8 | D-03 | 03 | `Ý nghĩa và tác dụng` › [callout: `Cách nhớ`] | dòng 72–74 | other (study advice / mnemonic); mechanism/process (rule of thumb) | 70 | Quy tắc số AO lai hóa bằng số vùng mật độ electron và mẹo cộng số mũ cho $sp^3, sp^2, sp$. |

**Tổng cộng:** 8 S-ID (`S-03.1` đến `S-03.8`); tổng số từ = 1.321 từ.

---

## C. Content Coverage Matrix

| chapter | Definitions | Theory | Mechanisms | Equations | Examples | Case studies | Applications | Questions/Exercises | References | Figures/Tables |
|---|---|---|---|---|---|---|---|---|---|---|
| 03 (D-03) | Present (S-03.1, S-03.2, S-03.3) | Present (S-03.1, S-03.2, S-03.3, S-03.4) | Partial (S-03.1, S-03.2, S-03.3, S-03.6, S-03.7, S-03.8) | Partial (S-03.3, S-03.6 — chỉ có sơ đồ tổ hợp AO inline, 0 công thức định lượng) | Present (S-03.6, S-03.7; ví dụ inline trong S-03.2, S-03.3, S-03.4) | Absent | Partial (S-03.3, S-03.5, S-03.7) | Absent | Absent | Absent (0 bảng, 0 hình vẽ) |

**Ghi chú chi tiết về độ phủ:**
- **Definitions & Theory — Present (nhưng thiếu một số khái niệm nền):** Có định nghĩa liên kết cộng hóa trị theo VB, nguyên lý xen phủ cực đại, liên kết $\sigma, \pi, \delta$ và khái niệm lai hóa orbital; nhưng thiếu định nghĩa tường minh cho "mặt phẳng nút" (`S-03.2`), "phức spin cao / spin thấp", "trường mạnh" (`S-03.3`), "thuận từ / nghịch từ" và "liên kết 3 tâm 2 electron ($3c\text{–}2e$)" (`S-03.4`).
- **Mechanisms — Partial:** Có mô tả sự tổ hợp AO và sự xen phủ, nhưng thiếu hoàn toàn cơ chế **kích thích electron** (promotion: ví dụ $C$ từ $2s^22p^2 \to 2s^12p^3$, $Be$ từ $2s^2 \to 2s^12p^1$, $B$ từ $2s^22p^1 \to 2s^12p^2$) và không phân biệt rõ hai cơ chế hình thành cặp electron dùng chung (ghép đôi 2 electron độc thân vs. cơ chế cho–nhận cặp electron tự do vào orbital trống).
- **Equations — Partial:** Chỉ có các sơ đồ cộng orbital dạng chữ inline (`$1s + 3p \rightarrow 4$ AO lai hóa $sp^3$`), không có biểu thức phần trăm đặc tính $s/p$ (đã hứa ở `carryover_latest.md` mục 3 để giải thích Quy tắc Bent) và không có bảng tổng hợp so sánh.
- **Applications — Partial:** Điểm sáng là có nhắc đến thuốc chống ung thư Cisplatin (`cis-[Pt(NH_3)_2Cl_2]`, lai hóa $dsp^2$ tại `S-03.3`) và vai trò dung môi phân cực của $H_2O$ (`S-03.7`), cùng mối liên hệ giữa liên kết $\pi$ với đồng phân *cis–trans* (`S-03.2`).
- **Figures/Tables — Absent:** Có **0 bảng** và **0 hình vẽ** dù toàn bộ chương mô tả hình dạng hình học của sự xen phủ orbital ($s\text{–}s, s\text{–}p_z, p_z\text{–}p_z, p_x\text{–}p_x, d\text{–}d$), mặt phẳng nút và định hướng không gian của các orbital lai hóa.

---

## D. Notation and Terminology Inventory

### D.1 Ký hiệu và đơn vị

| Symbol / unit | As written in source | Defined? | Location | Note |
|---|---|---|---|---|
| `AO` | `orbital nguyên tử (AO)`, `các AO nguyên tử`, `AO lai hóa` | Yes | S-03.1, S-03.3, S-03.6, S-03.7, S-03.8 | Dòng 31 viết `các AO nguyên tử` bị lặp từ ("AO" đã có nghĩa là Atomic Orbital = orbital nguyên tử). |
| `\uparrow\downarrow` | `($\uparrow\downarrow$)` | Yes | S-03.1 (dòng 3) | Ký hiệu hai electron ghép đôi có spin đối song song. |
| `\sigma, \pi, \delta` / `σ, π` | `$\sigma, \pi, \delta$`, `liên kết σ/π`, `liên kết σ C–H`, `liên kết π` | Yes | S-03.2, S-03.5, S-03.6 | Không đồng nhất định dạng: `S-03.2` dùng LaTeX `$\sigma, \pi, \delta$`, còn `S-03.5` và `S-03.6` dùng ký tự Unicode `σ, π` ngoài MathJax. |
| `s, p_x, p_y, p_z, d_{z^2}, d_{x^2-y^2}, d_{xy}` | `$s-s, s-p_z, p_z-p_z, d_{z^2}-d_{z^2}$`, `$p_x-p_x, p_y-p_y, p-d$`, `$d_{xy}-d_{xy}$`, `$d_{x^2-y^2}-d_{x^2-y^2}$` | Partial | S-03.2, S-03.3 | Nguồn ngầm quy ước trục nối hai hạt nhân (trục liên nhân) là trục $z$ trong `S-03.2`, nhưng không phát biểu quy ước hệ trục tọa độ này. |
| `sp, sp^2, sp^3, sp^3d, dsp^2, sp^3d^2, d^2sp^3` | `$sp$`, `$sp^2$`, `$sp^3$`, `$sp^3d$`, `$dsp^2$`, `$sp^3d^2$`, `$d^2sp^3$` | Yes | S-03.3, S-03.6, S-03.7, S-03.8 | Ký hiệu chuẩn cho các kiểu lai hóa orbital. |
| `$1s + 1p$`, `$1s + 2p$`, `$1s + 3p$` | `$1s + 1p \rightarrow 2$ AO lai hóa $sp$`, `$1s + 2p \rightarrow 3$`, `$1s + 3p \rightarrow 4$` | Ambiguous | S-03.3 (dòng 33–35) | Ký hiệu gây nhầm lẫn nghiêm trọng: chữ số `1, 2, 3` đặt sát `s, p` trong `$1s + 3p$` dễ bị đọc thành phân lớp lượng tử $1s$ và $3p$ thay vì số lượng "1 AO $s$ + 3 AO $p$". |
| `nd`, `(n-1)d` | `orbital $nd$ ngoài`, `orbital $(n-1)d$ trong` | Partial | S-03.3 (dòng 40) | Dùng cho phức chất bát diện ngoài ($sp^3d^2$) và bát diện trong ($d^2sp^3$). |
| `^\circ`, `^{\prime}` | `$180^\circ$`, `$120^\circ$`, `$109^\circ\,28^{\prime}$`, `$109,5^\circ$`, `$90^\circ$`, `$104,5^\circ$`, `$107,3^\circ$` | Yes | S-03.3, S-03.6, S-03.7, S-03.8 | Dòng 35 chỉ viết `$109^\circ\,28^{\prime}$`, trong khi dòng 61, 68, 73 viết `$109,5^\circ$`; cần ghi song hành như Chương 2. |
| `:\ddot{O}=\ddot{O}:` | `$:\ddot{O}=\ddot{O}:$` | Yes | S-03.4 (dòng 51) | Công thức Lewis của $O_2$ biểu diễn 2 cặp electron tự do trên mỗi nguyên tử O. |
| `3c-2e` | `($3c-2e$, liên kết chuối)` | Partial | S-03.4 (dòng 53) | Viết tắt tiếng Anh của *3-center 2-electron bond* (liên kết 3 tâm 2 electron). |

### D.2 Thuật ngữ

| Term | As written in source | Defined? | Location | Note |
|---|---|---|---|---|
| Thuyết Liên kết Hóa trị (Valence Bond - VB) | `Thuyết VB (Heitler - London - Pauling)` | Yes | MANIFEST, S-03.1, S-03.4, S-03.5 | Tên đầy đủ tiếng Việt và tiếng Anh nằm ở `MANIFEST.md`; trong file HTML chỉ viết tắt là `Thuyết VB`. |
| Nguyên lý xen phủ cực đại (Pauling) | `Nguyên lý xen phủ cực đại (Pauling)` | Yes | S-03.1 (dòng 4) | — |
| Tính định hướng & Tính bão hòa của liên kết | `Tính định hướng của liên kết`, `Tính bão hòa của liên kết` | Yes | S-03.1 (dòng 5–6) | Hai tính chất đặc trưng phân biệt liên kết cộng hóa trị với liên kết ion (liên kết về Chương 1). |
| Liên kết Sigma ($\sigma$), Pi ($\pi$), Delta ($\delta$) | `Liên kết Sigma ($\sigma$)`, `Liên kết Pi ($\pi$)`, `Liên kết Delta ($\delta$)` | Yes | S-03.2 (dòng 12, 19, 26) | Giải thích đầy đủ lời hứa từ Chương 2 (`carryover_latest.md`). |
| Mặt phẳng nút | `Mặt phẳng chứa trục liên kết là mặt phẳng nút (nơi mật độ electron bằng 0)` | Partial | S-03.2 (dòng 21) | Có giải nghĩa ngắn trong ngoặc đơn nhưng chưa giải thích dấu pha sóng ($+/-$) của orbital dẫn đến mặt phẳng nút. |
| Lai hóa orbital (Orbital Hybridization) | `Thuyết Lai hóa Orbital (Orbital Hybridization)` | Yes | S-03.3 (dòng 30–31) | Định nghĩa ở dòng 31 phát biểu mọi AO lai hóa "hoàn toàn đồng nhất", chưa lưu ý ngoại lệ bất tương đương trục/xích đạo ở $sp^3d$. |
| Bát diện ngoài ($sp^3d^2$) vs. Bát diện trong ($d^2sp^3$) | `Lai hóa $sp^3d^2$ (Bát diện ngoài) vs $d^2sp^3$ (Bát diện trong)` | Yes | S-03.3 (dòng 40) | Thuật ngữ kinh điển của thuyết VB cho phức chất (Pauling); cầu nối sang Chương 6. |
| Phức spin cao / Phức spin thấp / Trường mạnh | `trường mạnh`, `Phức spin cao`, `phức spin thấp` | No | S-03.3 (dòng 39–40) | Thuật ngữ của thuyết Trường tinh thể / Trường phối tử (Chương 6 `D-06`), xuất hiện sớm mà chưa được định nghĩa. |
| Tính thuận từ / Nghịch từ | `nghịch từ`, `tính thuận từ (có 2 electron độc thân)` | Partial | S-03.4 (dòng 51) | Giải thích ngắn qua sự ghép đôi hoặc độc thân của electron; sẽ phát triển sâu ở Chương 4 (`D-04`). |
| Liên kết cầu hydro 3 tâm 2 electron ($3c\text{–}2e$, liên kết chuối) | `liên kết cầu hydro 3 tâm 2 electron ($3c-2e$, liên kết chuối)` | Partial | S-03.4 (dòng 53) | Chỉ nêu tên trong ví dụ $B_2H_6$, chưa giải thích vì sao $B_2H_6$ thiếu electron (12 electron hóa trị cho 8 liên kết nếu tính theo 2c–2e). |
| Số vùng mật độ electron | `số vùng mật độ electron quanh nguyên tử trung tâm` | Yes | S-03.7, S-03.8 | Chính là **Số phối trí lập thể ($SN$)** và **miền electron** đã chuẩn hóa ở Chương 2 (`carryover_latest.md`), nhưng `D-03` không dùng lại ký hiệu $SN$. |

---

## E. Figures, Tables, Equations Inventory

| ID | Type | Location | Content | Status / note |
|---|---|---|---|---|
| EQ-03.1 | Inline orbital combination schemes | S-03.3, dòng 33–40 | `$1s + 1p \rightarrow 2$ AO lai hóa $sp$`; `$1s + 2p \rightarrow 3$ AO lai hóa $sp^2$`; `$1s + 3p \rightarrow 4$ AO lai hóa $sp^3$`; `$s + p_x + p_y + p_z + d_{z^2} \rightarrow 5$`; `$d_{x^2-y^2} + s + p_x + p_y \rightarrow 4$` | Không có khối công thức riêng (`formula-box`); cách viết `$1s + 1p$`, `$1s + 2p$`, `$1s + 3p$` dễ nhầm với số lượng tử chính $n=1, 2, 3$; dòng 40 ($sp^3d^2 / d^2sp^3$) thiếu liệt kê tên các AO $d$ cụ thể ($d_{z^2}, d_{x^2-y^2}$). |
| EX-03.1 | Illustrative example box | S-03.6, dòng 60–65 | `🔎 Ví dụ — Ba kiểu lai hóa: $sp^3$, $sp^2$, $sp$` ($CH_4, C_2H_4, C_2H_2$) | Không đánh số; chưa đếm tổng số liên kết $\sigma$ và $\pi$ trong từng phân tử; câu kết ghi `$C_2H_4$ phẳng (có đồng phân cis/trans)` thiếu chính xác. |
| EX-03.2 | Illustrative example box | S-03.7, dòng 66–71 | `🔎 Ví dụ — Vì sao góc $H-O-H$ chỉ $104,5^\circ$?` ($H_2O, NH_3$) | Không đánh số; giải thích dựa trên lực đẩy LP của VSEPR kết hợp lai hóa $sp^3$. |
| CALL-03.1 | Callout box | S-03.8, dòng 72–74 | `Cách nhớ` (Số AO lai hóa = số vùng mật độ electron; mẹo đọc số mũ $sp^3, sp^2, sp$) | Đặt dưới tiêu đề `Ý nghĩa và tác dụng`; chỉ liệt kê $SN = 2, 3, 4$, bỏ sót $SN = 5, 6$. |
| TAB-03.* | Tables | — | Không có | **0 bảng** trong toàn bộ file nguồn (thiếu bảng so sánh $\sigma, \pi, \delta$ và bảng tổng hợp các kiểu lai hóa $SN = 2..6$). |
| FIG-03.* | Figures | — | Không có | **0 hình vẽ** cho sự xen phủ orbital ($\sigma, \pi, \delta$), mặt phẳng nút, hình dạng orbital lai hóa và cấu trúc $\sigma/\pi$ của $CH_4, C_2H_4, C_2H_2$. |

---

## F. Duplicated and Overlapping Content

| DUP-ID | Items involved | Type | Evidence | Note for S2 |
|---|---|---|---|---|
| DUP-03.1 | `S-03.1` (dòng 9), `S-03.2` (dòng 29), `S-03.3` (dòng 45), `S-03.4` (dòng 57) và `S-03.5` (dòng 58–59) | Near-verbatim / summary repetition | Cả 4 mục 1–4 đều kết thúc bằng `<p><strong>Ý nghĩa:</strong>...</p>`, sau đó `S-03.5` (`<h4>Ý nghĩa và tác dụng</h4>`) tóm tắt lại đúng 4 câu ý nghĩa đó | S2 nên giữ ý nghĩa chuyên biệt tại từng tiểu mục của `T4` và MERGE phần tổng kết `S-03.5` vào phần Đặt vấn đề (`T3`), Ứng dụng (`T-03.4.6`) hoặc Tóm tắt chương (`T6`). |
| DUP-03.2 | `S-03.3` (dòng 33–35), `S-03.6` (dòng 60–65) và `S-03.8` (dòng 72–74) | Triple repetition of $sp, sp^2, sp^3$ basics | Cả 3 mục đều lặp lại công thức tổ hợp AO và góc liên kết của $sp$ ($180^\circ, C_2H_2$), $sp^2$ ($120^\circ, C_2H_4$), $sp^3$ ($109,5^\circ, CH_4$) | S2 nên tổ chức `S-03.3` ở `T4` (Lý thuyết & Bảng hệ thống hóa lai hóa), mở rộng `S-03.6` ở `T5` thành Ví dụ giải mẫu phân tích chi tiết cấu hình electron kích thích và đếm toàn bộ liên kết $\sigma, \pi$ trong $CH_4, C_2H_4, C_2H_2$, và đưa `S-03.8` về `T6` (Tóm tắt chương). |
| DUP-03.3 | `D-02` (`T-02.4.3`, `T-02.5.1`) và `D-03` (`S-03.7`, dòng 66–71) | Cross-chapter overlap ($H_2O, NH_3$ bond angles) | `S-03.7` giải thích lại góc $H_2O$ ($104,5^\circ$, 2 cặp LP) và $NH_3$ ($107,3^\circ$, 1 cặp LP) giảm từ $109,5^\circ$ do lực đẩy cặp e tự do | Ở Chương 2 đã giải thích bằng VSEPR; tại Chương 3 (`T5`/`T4`), S2/S3 cần kết nối `S-03.7` với bản chất orbital lai hóa $sp^3$ không tương đương và phần trăm đặc tính $s/p$ (Quy tắc Bent) như đã hứa trong `carryover_latest.md`. |

---

## G. Cross-document Conflicts

Đối chiếu giữa `D-03` (`ch03_doc-hvc-3.html`), `D-01` (`ch01_v2.md`), `D-02` (`ch02_draft.md` / `_state/carryover_latest.md`) và `D-09` (`refs/D-09_doc-hvc-9.html`):

1. **Giải thích hình học phức chất vuông phẳng $d^8$ và bát diện $d^6$ (`D-02` vs `D-03`):**
   - Trong `D-02` (mục 3 bảng VSEPR, dòng 137 và 153 — ánh xạ vào `T-02.4.3`), bảng VSEPR xếp $[PtCl_4]^{2-}$ vào kiểu $AX_4E_2$ ($SN=6, n=2$ cặp LP) và $[Fe(CN)_6]^{4-}$ vào kiểu $AX_6$ ($SN=6, n=0$).
   - Trong `D-03` (`S-03.3`, dòng 39–40), phức chất vuông phẳng của ion $d^8$ ($Pt^{2+}, Pd^{2+}, Ni^{2+}$ trường mạnh như $[Ni(CN)_4]^{2-}$, $cis\text{-}[Pt(NH_3)_2Cl_2]$) được giải thích bằng **lai hóa $dsp^2$** (tổ hợp 4 orbital $d_{x^2-y^2} + s + p_x + p_y$, hoàn toàn không phải 6 orbital $sp^3d^2$ có 2 cặp LP), còn phức chất bát diện được giải thích bằng **lai hóa $sp^3d^2$ (bát diện ngoài)** hoặc **$d^2sp^3$ (bát diện trong)**.
   - **Đánh giá:** Đây chính là điểm giao thoa lý thuyết đã được ghi nhận ở `carryover_latest.md` (mục 3) và `V-02.02`. S2/S3 của Chương 3 cần làm rõ sự khác biệt này để giải đáp trọn vẹn lời hứa từ Chương 2 và tạo tiền đề chuẩn xác cho Chương 6.
2. **Không đồng bộ thuật ngữ và ký hiệu cho "Số phối trí lập thể ($SN$)" (`D-02` vs `D-03`):**
   - Chương 2 (`carryover_latest.md`) đã chuẩn hóa thuật ngữ **Số phối trí lập thể ($SN = m + n$)** (hay *miền electron / vùng liên kết*).
   - Sang `D-03` (`S-03.7` dòng 67, `S-03.8` dòng 73), nguồn không sử dụng ký hiệu $SN$ mà chỉ gọi là `vùng mật độ e` / `số vùng mật độ electron (số nguyên tử liên kết + số cặp e tự do)`. S2/S3 cần kết nối trực tiếp: **Số AO lai hóa của nguyên tử trung tâm (nhóm chính) = Số phối trí lập thể $SN = m + n$**.
3. **Thiếu hụt thuật ngữ của Chương 3 trong Bảng từ khóa chung `D-09`:**
   - File từ điển thuật ngữ `D-09` (`refs/D-09_doc-hvc-9.html`) có mục `VSEPR`, `Cộng hưởng`, `Phối tử`, `Đồng phân hình học`, nhưng không có mục từ nào cho `Thuyết VB`, `Lai hóa orbital`, `Liên kết sigma ($\sigma$)`, `Liên kết pi ($\pi$)`, `Liên kết delta ($\delta$)`, `Thuận từ / Nghịch từ`. Các thuật ngữ này cần được định nghĩa chuẩn ở Chương 3 và đưa vào `glossary_running.md`.

---

## H. Issues Register

| ID | Class | Category | Location | Evidence | Why it matters |
|---|---|---|---|---|---|
| I-03.01 | [CONFIRMED] | Heading hierarchy / document identity | Toàn file, dòng 1 | File bắt đầu trực tiếp bằng `<h4>1. Luận điểm cơ bản của Thuyết VB (Heitler - London - Pauling)</h4>`, không có `h1–h3` và không có tên chương | Fragment HTML thiếu cấp tiêu đề chương và không giải nghĩa từ viết tắt "VB" (*Valence Bond – Liên kết Hóa trị*) trong văn bản (chỉ có ở `MANIFEST.md`). |
| I-03.02 | [CONFIRMED] | Heading numbering & structure | `S-03.5`–`S-03.8`, dòng 58–74 | Tiêu đề `<h4>Ý nghĩa và tác dụng</h4>` không đánh số sau mục `1.`–`4.` và chứa hai hộp `example-box` (`S-03.6`, `S-03.7`) cùng `callout` (`S-03.8`) | Cấu trúc tiêu đề không nhất quán; ví dụ minh họa và mẹo nhớ bị đặt dưới tiêu đề "Ý nghĩa và tác dụng" thay vì tách vào `T5` và `T6`. |
| I-03.03 | [CONFIRMED] | Ambiguous mathematical/orbital notation | `S-03.3`, dòng 33–35 | Viết `$1s + 1p \rightarrow 2$ AO lai hóa $sp$`, `$1s + 2p \rightarrow 3$ AO lai hóa $sp^2$`, `$1s + 3p \rightarrow 4$ AO lai hóa $sp^3$` | Đặt chữ số số lượng sát ký hiệu phân lớp trong `$1s + 3p$` làm người học đọc nhầm thành orbital phân lớp $1s$ (lớp K) trộn với $3p$ (lớp M), mâu thuẫn với cách viết đúng `1 AO $s$ + 2 AO $p$` ở dòng 62. |
| I-03.04 | [CONFIRMED] | Internal inconsistency in $\pi$-overlap types | `S-03.2`, dòng 19 vs. dòng 26 | Dòng 19 liệt kê xen phủ bên tạo liên kết $\pi$: `(xen phủ bên: $p_x-p_x, p_y-p_y, p-d$)`; dòng 26 nêu `[Re_2Cl_8]^{2-} (chứa 1\sigma + 2\pi + 1\delta)` | Trong phức $[Re_2Cl_8]^{2-}$, 2 liên kết $\pi$ giữa hai nguyên tử kim loại $Re$ được tạo bởi xen phủ bên $d\text{–}d$ ($d_{xz}\text{–}d_{xz}$ và $d_{yz}\text{–}d_{yz}$), nhưng dòng 19 lại bỏ sót kiểu xen phủ $\pi$ $d\text{–}d$. |
| I-03.05 | [CONFIRMED] | Missing coordinate axis convention | `S-03.2` (dòng 12, 19, 26) & `S-03.3` (dòng 38–39) | Dòng 12 ghi xen phủ trục là `$s-p_z, p_z-p_z, d_{z^2}-d_{z^2}$`, dòng 19 ghi xen phủ bên là `$p_x-p_x, p_y-p_y$` | Nguồn sử dụng ngầm quy ước trục nối hai hạt nhân là trục $O z$ mà không phát biểu quy ước này, khiến sinh viên không hiểu vì sao $p_z\text{–}p_z$ tạo liên kết $\sigma$ còn $p_x\text{–}p_x$ lại tạo liên kết $\pi$. |
| I-03.06 | [CONFIRMED] | Incomplete orbital listing for octahedral hybridization | `S-03.3`, dòng 38–40 | Dòng 38 nêu rõ `$d_{z^2}$` cho $sp^3d$, dòng 39 nêu rõ `$d_{x^2-y^2}$` cho $dsp^2$, nhưng dòng 40 ($sp^3d^2$ và $d^2sp^3$) không nêu tên 2 orbital $d$ tham gia | Thiếu tính nhất quán và bỏ sót thông tin quan trọng: lai hóa bát diện sử dụng đúng 2 orbital hướng dọc theo các trục tọa độ là $d_{z^2}$ và $d_{x^2-y^2}$ (nhóm $e_g$). |
| I-03.07 | [CONFIRMED] | Internal inaccuracy / overgeneralization in hybridization definition | `S-03.3`, dòng 31 vs. dòng 38 | Dòng 31: "tạo thành các orbital lai hóa hoàn toàn đồng nhất về hình dạng, kích thước, năng lượng"; dòng 38: `Lai hóa $sp^3d$ ... lưỡng chóp tam giác (ví dụ: $PCl_5$)` | Trong hình lưỡng chóp tam giác ($sp^3d$, $SN=5$), 3 orbital xích đạo ($120^\circ$) và 2 orbital trục ($90^\circ$) **không** đồng nhất về năng lượng và kích thước (như đã học ở Chương 2 `T-02.4.4`); phát biểu "hoàn toàn đồng nhất" chỉ đúng cho các kiểu đối xứng cầu/phẳng đều ($sp, sp^2, sp^3$, bát diện). |
| I-03.08 | [CONFIRMED] | Imprecise chemical claim on *cis/trans* isomerism of $C_2H_4$ | `S-03.6`, dòng 64 | `Kết quả: $CH_4$ tứ diện, $C_2H_4$ phẳng (có đồng phân cis/trans), $C_2H_2$ thẳng.` | Bản thân phân tử ethene $C_2H_4$ ($H_2C=CH_2$) có 2 nguyên tử $H$ giống hệt nhau trên mỗi carbon nên **không** có đồng phân *cis/trans*; chỉ các dẫn xuất thế của ethene dạng $abC=Cab$ (với $a \neq b$) mới có đồng phân hình học *cis/trans* do sự cản trở quay quanh liên kết $\pi$. |
| I-03.09 | [CONFIRMED] | Ambiguous mnemonic rule | `S-03.8`, dòng 73 | `Mẹo đọc tên: $sp^3$ = "1 + 3", $sp^2$ = "1 + 2", $sp$ = "1 + 1" — số mũ cộng 1 chính là số vùng.` | Diễn đạt "số mũ cộng 1 chính là số vùng" không nói rõ là số mũ của $p$ cộng 1 (số mũ ngầm của $s$), và không áp dụng được cho $sp^3d, sp^3d^2, d^2sp^3$; cần diễn đạt chuẩn là **tổng các số mũ của các AO thành phần ($s^1p^kd^m$) bằng tổng số AO lai hóa**. |
| I-03.10 | [CONFIRMED] | Redundant terminology ("AO nguyên tử") | `S-03.3`, dòng 31 | `Lai hóa là sự tổ hợp tuyến tính các AO nguyên tử khác loại` | Từ viết tắt `AO` đã là *Atomic Orbital* (orbital nguyên tử, định nghĩa ở dòng 3); viết "AO nguyên tử" là lỗi lặp từ. |
| I-03.11 | [CONFIRMED] | Undefined terms used before explanation | `S-03.2` (dòng 21), `S-03.3` (dòng 39–40), `S-03.4` (dòng 51, 53, 57) | Dùng các thuật ngữ `mặt phẳng nút`, `trường mạnh`, `Phức spin cao`, `phức spin thấp`, `nghịch từ`, `liên kết 3 tâm 2 electron ($3c-2e$)`, `MO` mà không định nghĩa | Sinh viên năm 1–2 chưa học Chương 4 (Thuyết MO) và Chương 6 (Phức chất & Thuyết trường phối tử) sẽ không hiểu vì sao $CN^-$ là phối tử trường mạnh tạo phức spin thấp $d^2sp^3$ còn $F^-$ tạo phức spin cao $sp^3d^2$. |
| I-03.12 | [CONFIRMED] | Notation / formatting inconsistency (MathJax vs. Unicode & angle format) | `S-03.3` (dòng 35) vs. `S-03.5`–`S-03.8` (dòng 59–73) | Dòng 35 viết `$109^\circ\,28^{\prime}$`, dòng 61, 68, 73 viết `$109,5^\circ$`; dòng 59–63 viết `σ`, `π`, `→` bằng Unicode ngoài MathJax | Thiếu nhất quán trong chế bản công thức toán/hóa so với quy ước LaTeX tại `00_config.md` và `carryover_latest.md`. |
| I-03.13 | [CONFIRMED] | Missing continuity link to standardized $SN$ symbol | `S-03.7` (dòng 67), `S-03.8` (dòng 73) | Dùng cụm `4 vùng mật độ e`, `số vùng mật độ electron quanh nguyên tử trung tâm` mà không liên hệ ký hiệu $SN$ của Chương 2 | Bỏ lỡ kết nối trực tiếp $SN = m + n$ (Chương 2) với số lượng orbital lai hóa của nguyên tử trung tâm (Chương 3) theo lời hứa tại `carryover_latest.md`. |
| I-03.14 | [CONFIRMED] | Duplication | `S-03.1`–`S-03.8` | Xem `DUP-03.1`, `DUP-03.2`, `DUP-03.3`: lặp lại 5 đoạn "Ý nghĩa" và lặp lại 3 lần thông tin cơ bản của $sp, sp^2, sp^3$ | Làm phân mảnh bài giảng; hộp ví dụ `S-03.6` chỉ liệt kê lại thông tin của `S-03.3` thay vì trình bày bài giải mẫu từng bước. |
| I-03.15 | [CONFIRMED] | Visual & tabular absence | Toàn file (`S-03.1`–`S-03.8`) | 0 bảng tổng hợp, 0 hình vẽ cho xen phủ $\sigma, \pi, \delta$, mặt phẳng nút và định hướng các AO lai hóa | Học phần về hình dạng xen phủ orbital và lai hóa không gian nhưng không có bảng so sánh cũng như không có sơ đồ/placeholder `[FIGURE]`. |
| I-03.16 | [CONFIRMED] | Structural completeness | Toàn file | Thiếu T1 (Overview, Prerequisites, Study time), T2 (Learning Objectives), T6 (Summary chuẩn), T7 (Assessment/Exercises), T8 (References) | File nguồn chỉ là đoạn trích nội dung (1.321 từ); S2/S3 phải thiết kế bổ sung đầy đủ khung Template v2 gắn nhãn `[ADDED]` / `[VERIFY]`. |
| I-03.17 | [CONFIRMED] | References absent | Toàn file | 0 tài liệu tham khảo hoặc nguồn trích dẫn | Mọi số liệu góc liên kết và ví dụ phức chất/hợp chất không có trích dẫn gốc; cần gắn `[VERIFY]` theo R4/R10. |
| I-03.18 | [POTENTIAL] | Missing valence excitation (electron promotion) & coordinate covalent VB mechanism | `S-03.1` (dòng 3, 6), `S-03.3` (dòng 33–38) | Nêu $BeH_2, BeCl_2$ ($sp$), $BF_3$ ($sp^2$), $CH_4$ ($sp^3$), $PCl_5$ ($sp^3d$) và $NH_4^+$ ($sp^3$) nhưng không giải thích sự kích thích electron ($ns^2 \to ns^1np^1$...) và cơ chế xen phủ cho–nhận (orbital trống + cặp e tự do) | Ở trạng thái cơ bản, $Be$ ($2s^2$) có 0 electron độc thân, $B$ ($2s^22p^1$) có 1, $C$ ($2s^22p^2$) có 2; nếu không giải thích quá trình kích thích electron và cơ chế cho–nhận (như trong $NH_4^+$ hoặc phức chất), sinh viên không hiểu vì sao $Be, B, C, N^+$ tạo được 2, 3, 4 liên kết cộng hóa trị. |
| I-03.19 | [POTENTIAL] | Missing quantitative $s/p$ character explanation promised in `carryover_latest.md` | `S-03.3` (dòng 33–35), `S-03.7` (dòng 66–71) | `carryover_latest.md` hứa làm rõ cơ sở định lượng của "đặc tính $s$" và "đặc tính $p$" trong Quy tắc Bent ở Chương 3, nhưng `D-03` chưa nêu phần trăm đặc tính $s/p$ ($sp: 50\%\,s$; $sp^2: 33,3\%\,s$; $sp^3: 25\%\,s$) | Cần bổ sung tỷ lệ phần trăm đặc tính $s$ và $p$ của các orbital lai hóa để hoàn thành lời hứa liên kết chéo từ Chương 2 (`T-02.4.5`) và giải thích sâu sắc sự biến thiên góc liên kết cũng như độ dài/độ bền liên kết C–H, C–C. |
| I-03.20 | [POTENTIAL] | Incomplete nodal plane & $\sigma$ overlap classification | `S-03.2`, dòng 12–27 | Dòng 12 chỉ liệt kê xen phủ $\sigma$ giữa các AO thuần khiết ($s\text{–}s, s\text{–}p_z, p_z\text{–}p_z, d_{z^2}\text{–}d_{z^2}$), không nhắc đến xen phủ $\sigma$ của các AO lai hóa ($sp^n\text{–}s, sp^n\text{–}sp^n$); dòng 26 không nêu số mặt phẳng nút của liên kết $\delta$ (2 mặt phẳng nút) | Trong hầu hết phân tử đa nguyên tử ($CH_4, C_2H_4, C_2H_2$ ở `S-03.6`), khung liên kết $\sigma$ được tạo bởi xen phủ của các AO lai hóa chứ không phải AO thuần khiết; đồng thời việc đối chiếu số mặt phẳng nút chứa trục liên nhân ($\sigma: 0$, $\pi: 1$, $\delta: 2$) giúp hệ thống hóa bản chất lượng tử của ba loại liên kết. |
| I-03.21 | [POTENTIAL] | Modern theoretical status of $d$-orbital hybridization in main-group hypervalent molecules | `S-03.3`, dòng 38–40 | Xếp $PCl_5$ vào lai hóa $sp^3d$ cùng nhóm với các phức chất kim loại chuyển tiếp $dsp^2, sp^3d^2, d^2sp^3$; thiếu ví dụ nhóm chính cho $sp^3d^2$ (như $SF_6$) | Trong hóa học lượng tử hiện đại, sự tham gia của orbital $3d$ năng lượng cao vào lai hóa $sp^3d / sp^3d^2$ ở nguyên tố nhóm chính ($PCl_5, SF_6$) chỉ được xem là mô hình hình thức của thuyết VB cổ điển (thực chất giải thích chính xác hơn bằng liên kết đa tâm $3c\text{–}4e$ trong thuyết MO). Cần giữ đúng mô hình giáo trình của nguồn nhưng thêm ghi chú học thuật ngắn kết nối sang Chương 4. |

**Tổng hợp Issues Register:** 17 `[CONFIRMED]`, 4 `[POTENTIAL]` (tổng cộng 21 issues).

---

## I. Verification Queue

| V-ID | Item | Type | Location | Why | Suggested check | Priority |
|---|---|---|---|---|---|---|
| V-03.01 | Cấu trúc liên kết bốn (quadruple bond: $1\sigma + 2\pi + 1\delta$) trong ion phức $[Re_2Cl_8]^{2-}$ và các orbital $5d$ tham gia ($d_{z^2}$ cho $\sigma$; $d_{xz}, d_{yz}$ cho $2\pi$; $d_{xy}$ cho $\delta$) | theory / structure | `S-03.2` (dòng 19, 26) | Nguồn nêu $[Re_2Cl_8]^{2-}$ có $1\sigma + 2\pi + 1\delta$ nhưng ở mục liên kết $\pi$ (dòng 19) lại thiếu kiểu xen phủ $d\text{–}d$, và ở mục $\delta$ (dòng 26) ghi chung "$d_{xy}\text{–}d_{xy}$ hoặc $d_{x^2-y^2}\text{–}d_{x^2-y^2}$" (trong $[Re_2Cl_8]^{2-}$, $d_{x^2-y^2}$ đã dùng tạo liên kết $\sigma$ với $Cl^-$ nên liên kết $\delta$ do $d_{xy}\text{–}d_{xy}$ đảm nhiệm) | Đối chiếu giáo trình Hóa vô cơ nâng cao (Miessler / Housecroft / Cotton) để chú thích chuẩn xác | High |
| V-03.02 | Trạng thái lai hóa $dsp^2$ và cấu trúc vuông phẳng của các phức chất $d^8$: $[Ni(CN)_4]^{2-}$ và $cis\text{-}[Pt(NH_3)_2Cl_2]$ (Cisplatin) | theory / application | `S-03.3` (dòng 39) | Cần đảm bảo tính nhất quán với ghi chú ở Chương 2 (`V-02.02` về $[PtCl_4]^{2-}$) và tuân thủ nghiêm ngặt `DOMAIN_RULES` khi nhắc đến thuốc chống ung thư Cisplatin (chỉ nêu tên INN và vai trò cấu trúc vuông phẳng đồng phân *cis*, không thêm liều lượng hay phác đồ điều trị) | Đối chiếu giáo trình Hóa vô cơ Dược và xác nhận phạm vi trình bày | High |
| V-03.03 | Phân biệt phức bát diện ngoài ($sp^3d^2$, spin cao: $[FeF_6]^{3-}$) và phức bát diện trong ($d^2sp^3$, spin thấp: $[Fe(CN)_6]^{3-}$) cho ion $Fe^{3+}$ ($3d^5$) | theory / example | `S-03.3` (dòng 40) | Nguồn không có trích dẫn và dùng sớm thuật ngữ "spin cao / spin thấp" trước Chương 6; cần kiểm tra số electron độc thân ($5$ electron độc thân trong $[FeF_6]^{3-}$ vs. $1$ electron độc thân trong $[Fe(CN)_6]^{3-}$) khi vẽ sơ đồ ô lượng tử | Đối chiếu giáo trình Hóa vô cơ chuẩn | High |
| V-03.04 | Phát biểu về khả năng tạo đồng phân hình học *cis–trans* do cản trở quay quanh liên kết $\pi$ (trường hợp $C_2H_4$ ở `S-03.6` dòng 64) | concept / accuracy | `S-03.2` (dòng 23), `S-03.6` (dòng 64) | Dòng 64 ghi "$C_2H_4$ phẳng (có đồng phân cis/trans)" dễ gây hiểu lầm rằng chính phân tử $H_2C=CH_2$ có 2 đồng phân *cis/trans* | Làm rõ điều kiện cần: khung phẳng C=C không quay tự do là nguyên nhân sinh ra đồng phân *cis–trans* ở các dẫn xuất thế có 2 nhóm khác nhau trên mỗi carbon ($abC=Cab$) | High |
| V-03.05 | Số liệu góc liên kết thực nghiệm và lý thuyết trong chương: $180^\circ$ ($sp$), $120^\circ$ ($sp^2$), $109^\circ\,28^{\prime}$ / $109,5^\circ$ ($sp^3$), $90^\circ$ ($dsp^2$, bát diện), $104,5^\circ$ ($H_2O$), $107,3^\circ$ ($NH_3$) | number | `S-03.3` (dòng 33–40), `S-03.6`–`S-03.8` (dòng 61–73) | Không có nguồn trích dẫn trong file gốc; cần đồng bộ với các giá trị đã kiểm chứng ở Chương 1 và Chương 2 (`V-02.03`) | Đối chiếu sổ tay hóa lý / giáo trình chuẩn | Medium |
| V-03.06 | Liên kết cầu hydro 3 tâm 2 electron ($3c\text{–}2e$, liên kết chuối) trong phân tử Diborane ($B_2H_6$) và tính thuận từ của $O_2$ lỏng | theory / fact | `S-03.4` (dòng 51, 53) | Không có nguồn trích dẫn; cần trình bày đúng bản chất thiếu electron của $B_2H_6$ (12 electron hóa trị) và cấu hình thuận từ 2 electron độc thân của $O_2$ để làm cầu nối sang Chương 4 (Thuyết MO) | Đối chiếu giáo trình Hóa đại cương / Hóa vô cơ chuẩn | Medium |
| V-03.07 | Toàn bộ chương không có tài liệu tham khảo gốc | reference | Toàn file | `00_config.md` hiện để `APPROVED_REFERENCE_LIST: none` | Cần giảng viên/người dùng cung cấp danh mục giáo trình chuẩn để đối chiếu ở S5 | High |

---

## J. Initial Recommendations and Questions for the user

### Đề xuất cho Stage S2 (R1–R5)
1. **R1 (Tái cấu trúc toàn diện theo Template v2 & bổ sung 2 bảng hệ thống hóa):** Thiết lập đầy đủ 8 phần `T1`–`T8`; bổ sung **Bảng 3.1** (So sánh toàn diện liên kết $\sigma, \pi, \delta$: kiểu xen phủ, trục/mặt phẳng đối xứng, số mặt phẳng nút, khả năng quay tự do, độ bền tương đối và ví dụ) tại `T-03.4.2` và **Bảng 3.2** (Tổng hợp các kiểu lai hóa $sp, sp^2, sp^3, sp^3d, sp^3d^2, dsp^2, d^2sp^3$ gắn với số phối trí lập thể $SN$, phần trăm đặc tính $s/p$, các AO tham gia, góc liên kết, hình học và ví dụ) tại `T-03.4.4`.
2. **R2 (Hoàn thành 3 lời hứa liên kết chéo từ `carryover_latest.md`):**
   - Giải thích rõ quy ước trục liên nhân là trục $Oz$ và bản chất cơ học lượng tử của liên kết $\sigma, \pi, \delta$ (`T-03.4.2`).
   - Kết nối tường minh số phối trí lập thể $SN = m + n$ của thuyết VSEPR (Chương 2) với số lượng orbital lai hóa của nguyên tử trung tâm nhóm chính, đồng thời giải thích rõ vì sao phức chất vuông phẳng $d^8$ ($[Ni(CN)_4]^{2-}$, Cisplatin, $[PtCl_4]^{2-}$) thuộc lai hóa $dsp^2$ (4 AO lai hóa) chứ không phải $AX_4E_2$ của VSEPR (`T-03.4.4`, `T-03.4.5`).
   - Đưa tỷ lệ phần trăm đặc tính $s$ và $p$ ($sp: 50\%\,s$; $sp^2: 33,3\%\,s$; $sp^3: 25\%\,s$) vào `T-03.4.3`–`T-03.4.4` để giải thích cơ sở định lượng của Quy tắc Bent và sự biến thiên độ bền/độ dài liên kết.
3. **R3 (Chuẩn hóa ký hiệu toán/hóa và diễn đạt chính xác học thuật):**
   - Sửa cách viết gây nhầm lẫn `$1s + 3p$` (`I-03.03`) thành `1 orbital $ns$ + 3 orbital $np$` (hoặc `1 AO $s$ + 3 AO $p$`).
   - Bổ sung kiểu xen phủ $\pi$ $d\text{–}d$ ($d_{xz}\text{–}d_{xz}, d_{yz}\text{–}d_{yz}$) và tên hai orbital $d$ của lai hóa bát diện ($d_{z^2}, d_{x^2-y^2}$) (`I-03.04`, `I-03.06`).
   - Diễn đạt chính xác điều kiện xuất hiện đồng phân hình học *cis–trans* ở các dẫn xuất thế của ethene và trong phức chất vuông phẳng Cisplatin (`I-03.08`, `V-03.04`).
4. **R4 (Mở rộng và nâng cấp hệ thống Ví dụ giải mẫu tại `T5`):**
   - Nâng cấp `S-03.6` thành **Ví dụ 3.1** (Phân tích cấu hình electron kích thích, trạng thái lai hóa và đếm tổng số liên kết $\sigma, \pi$ trong $CH_4, C_2H_4, C_2H_2, CO_2$).
   - Nâng cấp `S-03.7` thành **Ví dụ 3.2** (Giải thích trạng thái lai hóa $sp^3$ có cặp electron tự do và sự lệch góc liên kết trong $NH_3, H_2O$ kết hợp với ion $NH_4^+$ theo cơ chế cho–nhận).
   - Bổ sung **Ví dụ 3.3** (`[ADDED]`) sử dụng chính các phức chất đã có trong `S-03.3` ($[FeF_6]^{3-}$ vs. $[Fe(CN)_6]^{3-}$ và $[Ni(CN)_4]^{2-}$ / $cis\text{-}[Pt(NH_3)_2Cl_2]$) để minh họa sơ đồ ô lượng tử của lai hóa bát diện ngoài ($sp^3d^2$), bát diện trong ($d^2sp^3$) và vuông phẳng ($dsp^2$).
5. **R5 (Bổ sung sơ đồ Mermaid & khung giữ chỗ `[FIGURE]` theo `FIGURE_POLICY`):** Vẽ sơ đồ thuật toán Mermaid xác định trạng thái lai hóa và phân loại liên kết (`T-03.5.4`), đồng thời đặt các khung giữ chỗ `[FIGURE 3.k | ...]` mô tả chi tiết hình học xen phủ $\sigma/\pi/\delta$, định hướng các AO lai hóa, sơ đồ phức chất Cisplatin và liên kết cầu $3c\text{–}2e$ trong $B_2H_6$ (`T-03.5.5`).

### Câu hỏi xin ý kiến người dùng (Q1–Q5, tối đa 10 mục cho toàn phần J)
6. **Q1 (Bổ sung cơ chế kích thích electron và liên kết phối trí cho–nhận vào `T-03.4.1` / `T-03.4.3` — `I-03.18`):** Bạn có đồng ý để S3 bổ sung giải thích ngắn gọn (gắn nhãn `[ADDED: standard VB mechanism]`) về sự kích thích electron hóa trị ($Be: 2s^2 \to 2s^12p^1$; $B: 2s^22p^1 \to 2s^12p^2$; $C: 2s^22p^2 \to 2s^12p^3$) và cơ chế xen phủ cho–nhận (orbital chứa cặp e tự do xen phủ với orbital trống, như trong $NH_4^+$ và phức chất) để mạch kiến thức hoàn chỉnh?
7. **Q2 (Chuẩn hóa diễn đạt về đồng phân *cis/trans* ở hộp ví dụ $C_2H_4$ — `I-03.08`, `V-03.04`):** Trong hộp ví dụ `S-03.6` (dòng 64), nguồn ghi `$C_2H_4$ phẳng (có đồng phân cis/trans)`. Bạn có đồng ý để S3 giữ nguyên ví dụ $C_2H_4$ nhưng diễn đạt chuẩn xác lại là: *khung phẳng cứng nhắc của liên kết đôi C=C ($\sigma + \pi$) trong $C_2H_4$ không thể quay tự do, là cơ sở xuất hiện đồng phân hình học cis–trans ở các dẫn xuất thế bất đối xứng của ethene ($abC=Cab$)*?
8. **Q3 (Mức độ trình bày phức chất $dsp^2, sp^3d^2, d^2sp^3$ và thuốc Cisplatin — `I-03.06`, `I-03.11`, `V-03.02`, `V-03.03`):** Bạn có đồng ý để S3 giải thích khái niệm "bát diện ngoài ($nd$, spin cao)" vs. "bát diện trong ($(n-1)d$, spin thấp)" kèm sơ đồ ô lượng tử cho $[FeF_6]^{3-}$, $[Fe(CN)_6]^{3-}$, $[Ni(CN)_4]^{2-}$ và $cis\text{-}[Pt(NH_3)_2Cl_2]$ (tuân thủ `DOMAIN_RULES`: chỉ phân tích cấu trúc lai hóa $dsp^2$ và hình học vuông phẳng của Cisplatin như nguồn nêu, không tự thêm liều lượng hay dữ liệu lâm sàng)?
9. **Q4 (Hệ thống bảng tổng hợp và hình vẽ `[FIGURE]` — `I-03.15`):** Bạn có đồng ý bổ sung 2 bảng tổng hợp (`Bảng 3.1` so sánh liên kết $\sigma, \pi, \delta$; `Bảng 3.2` tổng hợp các kiểu lai hóa $SN=2..6$ và $dsp^2, d^2sp^3$), 1 sơ đồ Mermaid (`T-03.5.4`) và 4 khung giữ chỗ `[FIGURE]` (`T-03.5.5`) để khắc phục việc file gốc có 0 bảng và 0 hình vẽ?
10. **Q5 (Dung lượng dự kiến và bộ câu hỏi lượng giá `T7`):** Bạn đồng ý với kế hoạch xây dựng 10 câu hỏi/bài tập tự lượng giá kèm đáp án giải chi tiết từng bước tại `T7` (phủ đủ 4 chuẩn đầu ra `LO-1`..`LO-4`: nhận diện xen phủ $\sigma/\pi/\delta$, đếm số liên kết $\sigma/\pi$, xác định lai hóa từ $SN$ và cấu hình $d^n$, giải thích hạn chế của VB), nâng dung lượng chương từ 1.321 từ lên khoảng 3.500–4.000 từ?

---

## K. Not verified / limitations

- **Phạm vi đọc nguồn:** Audit này phân tích trực tiếp `00_source_original/ch03_doc-hvc-3.html` (`D-03`), đối chiếu tính liên tục với `carryover_latest.md` (từ Chương 1 và Chương 2), `01_audit/ch02_audit.md` và bảng thuật ngữ `D-09`. Các chương nguồn `D-04` đến `D-08` chưa được audit chi tiết trong lượt này; các liên kết chéo sang Chương 4 (Thuyết MO) và Chương 6–7 (Phức chất & Đồng phân) dựa trên `MANIFEST.md` và `carryover_latest.md`.
- **Tài liệu tham khảo ngoài:** File nguồn `D-03` không chứa bất kỳ tài liệu tham khảo nào (0 trích dẫn). Do quy tắc không giả định truy cập mạng và không tự bịa nguồn (R4, R12e), mọi số liệu góc liên kết và thông tin cấu trúc phức chất ($[Re_2Cl_8]^{2-}$, $[Ni(CN)_4]^{2-}$, $cis\text{-}[Pt(NH_3)_2Cl_2]$, $[FeF_6]^{3-}$, $[Fe(CN)_6]^{3-}$, $B_2H_6$) đều được đưa vào Verification Queue (`V-03.01`–`V-03.07`) để chuyên gia đối chiếu với giáo trình chuẩn.
- **Nhận định `[POTENTIAL]`:** Các vấn đề `I-03.18` đến `I-03.21` dựa trên kiến thức Hóa học đại cương và Hóa vô cơ bậc đại học chuẩn để chỉ ra các mắt xích lý thuyết còn thiếu (kích thích electron, phần trăm đặc tính $s/p$, giới hạn lai hóa $3d$ ở nguyên tố nhóm chính), tuyệt đối không tự ý sửa đổi file gốc.
- **Kiểm tra cơ học:** Đã kiểm tra chính xác số dòng (74), số byte (10.221), số thẻ HTML, số biểu thức MathJax (111 inline) và phân bổ số từ từng mục (`S-03.1` đến `S-03.8`, tổng cộng = 1.321 từ) bằng script Python.
