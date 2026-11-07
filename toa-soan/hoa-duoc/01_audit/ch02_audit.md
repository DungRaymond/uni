# ch02_audit.md — S1 Audit · Chương 02 (D-02)

**Môn:** Hóa vô cơ dược · **Stage:** S1 Audit · **Ngày:** 2026-11-07  
**Nguồn audit:** `00_source_original/ch02_doc-hvc-2.html` (D-02) — READ-ONLY, không sửa.  
**Ngữ cảnh đối chiếu:** `00_config.md`, `00_source_original/MANIFEST.md`, `_state/carryover_latest.md`, `00_source_original/refs/D-09_doc-hvc-9.html`.  
**Nguyên tắc:** Chỉ phân tích và lập hồ sơ truy vết; không viết lại, không sửa lỗi, không tự bổ sung kiến thức học thuật.

---

## A. Document Inventory

| D-ID | File | Type | Chapter | Slug gốc | Num | Lines | Approx. words | h4 / h5 | Formula boxes | Example boxes | Callouts | Tables | Figures/Images | References |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| D-02 | `00_source_original/ch02_doc-hvc-2.html` | chapter-source (HTML fragment, MathJax) | 02 | doc-hvc-2 | 2 | 189 (không có newline cuối) | 1.267 (đếm bằng script, khớp MANIFEST 1.267) | 5 / 0 | 4 | 2 | 1 | 1 (13 hàng dữ liệu) | 0 / 0 | 0 |

**Đặc điểm kỹ thuật (kiểm tra bằng script Python):**
- **Mã hóa & dung lượng:** UTF-8; 13.590 byte; 189 dòng; thẻ HTML đóng/mở cân bằng (`5 <h4>`, `11 <div>`, `4 <ul>`, `12 <li>`, `6 <p>`, `1 <table>`, `1 <thead>`, `1 <tbody>`, `14 <tr>`, `7 <th>`, `83 <td>`, `39 <strong>`, `2 <em>`, `9 <br>`).
- **Biểu thức toán/hóa (MathJax):** 4 khối công thức hiển thị riêng (`<div class="formula-box">$$…$$</div>`), 123 biểu thức inline `$…$`.
- **Cấu trúc tiêu đề:** File bắt đầu trực tiếp bằng thẻ `<h4>1. Nguyên lý cơ bản của thuyết VSEPR (Gillespie - Nyholm)</h4>`; không có `<h1>/<h2>/<h3>` và không có tên chương bên trong file (tên chương chỉ nằm ở `MANIFEST.md`).
- **Tài liệu tham khảo:** 0 trích dẫn (`http`, `doi`, `ISBN`, "Tài liệu tham khảo", "NXB", "giáo trình", "nguồn" đều bằng 0). Trạng thái: **none present**.
- **Phân bổ số từ theo 8 đơn vị mục/hộp (tổng = 1.267 từ):** `S-02.1` (255) + `S-02.2` (158) + `S-02.3` (275) + `S-02.4` (217) + `S-02.5` (69) + `S-02.6` (115) + `S-02.7` (96) + `S-02.8` (82) = 1.267 từ.

---

## B. Source Section Register

| S-ID | D-ID | chapter | heading path | location | content types | approx. words | ≤20-word summary |
|---|---|---|---|---|---|---|---|
| S-02.1 | D-02 | 02 | [tên chương theo MANIFEST] › `1. Nguyên lý cơ bản của thuyết VSEPR (Gillespie - Nyholm)` | dòng 1–12 | theory/principle; mechanism/process (giải thích lực đẩy); equation/model (bất đẳng thức); application | 255 | Nguyên lý cực tiểu lực đẩy tĩnh điện; thứ tự LP–LP > LP–BP > BP–BP; liên kết bội; ý nghĩa. |
| S-02.2 | D-02 | 02 | `2. Phương pháp xác định công thức VSEPR & Số lập thể ($SN$)` | dòng 13–30 | definition; equation/model; mechanism/process (quy tắc tính) | 158 | Ký hiệu chung $AX_mE_n$; định nghĩa và công thức tính số phối trí lập thể $SN = (V+M-q)/2$; ý nghĩa. |
| S-02.3 | D-02 | 02 | `3. Bảng tổng hợp toàn diện hình học phân tử theo VSEPR` | dòng 31–159 | other (classification table); data values (góc liên kết); example (inline); application | 275 | Bảng 13 kiểu hình học từ $SN=2$ đến $SN=6$ ($AX_2$ đến $AX_4E_2$), góc liên kết, ví dụ và ý nghĩa. |
| S-02.4 | D-02 | 02 | `4. Quy tắc Bent & Sự lệch góc liên kết thực tế` | dòng 160–171 | theory/principle; mechanism/process; equation/model (bất đẳng thức góc); example (inline) | 217 | Ưu tiên vị trí xích đạo của cặp LP khi $SN=5$; quy tắc Bent và sự lệch góc liên kết. |
| S-02.5 | D-02 | 02 | `Ý nghĩa và tác dụng` (không đánh số) | dòng 172–173 | other (summary); application | 69 | Tổng kết vai trò VSEPR dự đoán hình dạng, độ phân cực và định hướng thuốc gắn vào enzyme/thụ thể. |
| S-02.6 | D-02 | 02 | `Ý nghĩa và tác dụng` › [example-box: `🔎 Ví dụ — Dự đoán dạng hình học của $CH_4$, $NH_3$, $H_2O$, $SF_6$`] | dòng 174–180 | example (worked/illustrative) | 115 | Xác định $SN$, kiểu $AX_mE_n$, dạng hình học và xu hướng giảm góc liên kết của $CH_4, NH_3, H_2O, SF_6$. |
| S-02.7 | D-02 | 02 | `Ý nghĩa và tác dụng` › [example-box: `🔎 Ví dụ — Khi $SN = 5$: cặp e tự do chọn vị trí nào?`] | dòng 181–186 | example (illustrative) | 96 | Minh họa vị trí xích đạo của cặp electron tự do cho dãy $PCl_5, SF_4, ClF_3, XeF_2$ ($SN=5$). |
| S-02.8 | D-02 | 02 | `Ý nghĩa và tác dụng` › [callout: `Cách nhớ`] | dòng 187–189 | other (study advice / mnemonic); mechanism/process (summary rule) | 82 | Mẹo nhớ 5 khung hình học chuẩn ($SN=2..6$), độ co góc $2\text{–}2,5^\circ$ mỗi LP và quy tắc xích đạo $SN=5$. |

**Tổng cộng:** 8 S-ID (`S-02.1` đến `S-02.8`); tổng số từ = 1.267 từ.

---

## C. Content Coverage Matrix

| chapter | Definitions | Theory | Mechanisms | Equations | Examples | Case studies | Applications | Questions/Exercises | References | Figures/Tables |
|---|---|---|---|---|---|---|---|---|---|---|
| 02 (D-02) | Partial (S-02.1, S-02.2, S-02.4) | Present (S-02.1, S-02.4) | Partial (S-02.1, S-02.2, S-02.4, S-02.8) | Present (S-02.1, S-02.2, S-02.4) — không đánh số | Present (S-02.6, S-02.7; ví dụ inline trong S-02.3, S-02.4) | Absent | Partial (S-02.1, S-02.3, S-02.5) — chỉ nêu nhận định khái quát | Absent | Absent | Partial (1 bảng tại S-02.3; 0 hình vẽ) |

**Ghi chú chi tiết về độ phủ:**
- **Definitions — Partial:** Có định nghĩa $LP$, $BP$, $A, X, E$, $SN$ và phát biểu quy tắc Bent; nhưng thiếu định nghĩa cho liên kết $\sigma$ (`S-02.2`), vị trí trục (axial) / vị trí xích đạo (equatorial) (`S-02.4`), và "đặc tính $p$" của orbital (`S-02.4`).
- **Mechanisms — Partial:** Có giải thích định tính vì sao $LP$ chiếm thể tích lớn hơn $BP$ (`S-02.1`) và vì sao $LP$ ưu tiên vị trí xích đạo ở $SN=5$ (`S-02.4`), nhưng thiếu giải thích cơ chế vì sao đặc tính $p$ cao hơn lại làm góc liên kết hẹp hơn trong quy tắc Bent (`S-02.4`), và thiếu ví dụ minh họa từng bước cách thay số vào công thức $SN = (V+M-q)/2$.
- **Applications — Partial:** Các câu "Ý nghĩa" (`S-02.1`, `S-02.3`, `S-02.5`) chỉ dừng ở mệnh đề khái quát ("tiếp xúc với đích thuốc", "định hướng khi gắn vào enzyme/thụ thể") mà không có phân tích ví dụ dược chất cụ thể.
- **Figures/Tables — Partial:** Có 1 bảng tổng hợp rất chi tiết (`S-02.3`), nhưng có **0 hình vẽ** dù toàn bộ chương bàn về hình học không gian 3 chiều (tứ diện, lưỡng chóp tam giác, bát diện, bập bênh, chữ T...).

---

## D. Notation and Terminology Inventory

### D.1 Ký hiệu và đơn vị

| Symbol / unit | As written in source | Defined? | Location | Note |
|---|---|---|---|---|
| `LP`, `BP` | `LP = Lone Pair - Cặp electron tự do; BP = Bonding Pair - Cặp electron liên kết` | Yes | S-02.1 | Định nghĩa rõ ngay dưới hộp bất đẳng thức. |
| `SN` | `số phối trí lập thể ($SN$)`, `Số lập thể ($SN$)`, `Steric Number - $SN$` | Yes | S-02.1, S-02.2, S-02.3, S-02.4, S-02.6–S-02.8 | Xuất hiện ở `S-02.1` (dòng 9) trước khi được định nghĩa ở `S-02.2` (dòng 19); tên tiếng Việt không đồng nhất giữa các mục. |
| `AX_mE_n` (`A`, `X`, `E`, `m`, `n`) | `$AX_mE_n$`, `$A$`, `$X$`, `$E$`, `$m$`, `$n$` | Yes | S-02.2, S-02.3, S-02.4, S-02.6, S-02.7 | Định nghĩa tại `S-02.2`; riêng định nghĩa `$m$` dùng thuật ngữ "liên kết $\sigma$" chưa được định nghĩa. |
| `V` | `Số electron hóa trị của nguyên tử trung tâm $A$` | Yes | S-02.2 | Nhất quán với ký hiệu `$V$` của Chương 1 (`carryover_latest.md`). |
| `M` | `Số nguyên tử phối tử đơn hóa trị ($H, F, Cl, Br, I$); các phối tử hai hóa trị như $O, S$ tính $M = 0$` | Partial | S-02.2 | Không nêu quy tắc cho phối tử ba hóa trị (như $N$ trong $HCN$ ở `S-02.3`) hoặc phối tử phức chất ($CN^-$ trong $[Fe(CN)_6]^{4-}$). |
| `q` | `Điện tích đại số của ion (dương thì trừ, âm thì cộng)` | Yes | S-02.2 | Trùng ký hiệu `$q$` (điện tích phần trong $\vec{\mu} = q\cdot\vec{d}$) và khác cách viết `$q_{phân\ tử}$` ở Chương 1 (`D-01`). |
| `\sigma` | `liên kết $\sigma$` | No | S-02.2 (dòng 17) | Thuật ngữ của thuyết VB (Chương 3 `D-03`), dùng trước khi định nghĩa. |
| `p` (orbital) | `các orbital có đặc tính $p$ nhiều hơn` | No | S-02.4 (dòng 165) | Khái niệm phần trăm đặc tính $s/p$ thuộc thuyết lai hóa (Chương 3 `D-03`), chưa được định nghĩa ở Chương 2. |
| `\widehat{X-A-X}` | `\widehat{H-O-H}`, `\widehat{F-O-F}`, `\widehat{H-N-H}`, `\widehat{F-N-F}` | Yes (ngầm) | S-02.4 (dòng 167–168) | Ký hiệu góc liên kết bằng dấu mũ rộng; không dùng ký hiệu $\theta$ đã chuẩn hóa ở Chương 1 (`carryover_latest.md`). |
| `^\circ`, `^{\prime}` | `$180^\circ$`, `$109{,}5^\circ$ ($109^\circ\,28^{\prime}$)`, `$109,5^\circ$` | Yes | S-02.3, S-02.4, S-02.6–S-02.8 | Đơn vị độ và phút góc; cách gõ dấu phẩy thập phân không nhất quán: dòng 78 dùng `{,}` (`$109{,}5^\circ$`), các dòng khác dùng `,` (`$109,5^\circ$`). |

### D.2 Thuật ngữ

| Term | As written in source | Defined? | Location | Note |
|---|---|---|---|---|
| Thuyết VSEPR (Gillespie - Nyholm) | `Nguyên lý cơ bản của thuyết VSEPR (Gillespie - Nyholm)` | Yes | Tiêu đề MANIFEST, S-02.1 | Tên tiếng Việt đầy đủ ("Thuyết Đẩy Cặp Electron Vỏ Hóa Trị") chỉ có ở `MANIFEST.md`, không có trong nội dung HTML của `D-02`. |
| Cặp electron tự do (Lone Pair - LP) | `LP = Lone Pair - Cặp electron tự do` | Yes | S-02.1 | Nhất quán với Chương 1. |
| Cặp electron liên kết (Bonding Pair - BP) | `BP = Bonding Pair - Cặp electron liên kết` | Yes | S-02.1 | — |
| Số phối trí lập thể / Số lập thể (Steric Number - SN) | `số phối trí lập thể ($SN$)`, `Số lập thể ($SN$)`, `số miền electron`, `vùng liên kết` | Yes | S-02.1, S-02.2, S-02.3, S-02.8 | Dùng 4 cách gọi khác nhau cho cùng một khái niệm trong cùng tài liệu. |
| Phối tử (trong VSEPR) | `$X$: Phối tử bao quanh ($m$ là số phối tử tạo liên kết $\sigma$)` | Partial | S-02.2, S-02.4, S-02.5 | Trong VSEPR dùng "phối tử" để chỉ nguyên tử/nhóm nguyên tử xung quanh $A$; cần phân biệt với "phối tử" (ligand) tạo liên kết phối trí trong phức chất ở `D-09` và Chương 6 (`D-06`). |
| Hình học cặp e (Electron Geometry) | `Hình học cặp e (Electron Geometry)` | Partial | S-02.3 | Phân biệt qua cột bảng với `Hình học phân tử (Molecular Shape)`, nhưng không có câu định nghĩa tường minh sự khác nhau giữa hai khái niệm này trong văn bản. |
| Hình học phân tử (Molecular Shape) | `Hình học phân tử (Molecular Shape)` | Partial | S-02.3 | Không định nghĩa tường minh rằng hình học phân tử chỉ xét vị trí các hạt nhân nguyên tử (không tính vị trí đám mây LP). |
| Các tên dạng hình học | `Đường thẳng` / `Thẳng hàng (Linear)` / `dạng thẳng`; `Dạng góc / Chữ V (Bent)` / `Chữ V / Dạng góc (Bent)`; `Tháp chóp tam giác` / `tháp tam giác`; `Lưỡng chóp tam giác` / `chóp đôi`; `Cái bập bênh (Seesaw / Điệp hình)` | Yes (qua bảng) | S-02.3, S-02.4, S-02.6–S-02.8 | Tên gọi tiếng Việt biến thiên giữa bảng `S-02.3` và các hộp ví dụ / ghi nhớ (`S-02.6`–`S-02.8`); thuật ngữ Hán-Việt `Điệp hình` không được giải thích. |
| Vị trí xích đạo (equatorial) & vị trí trục (axial) | `3 vị trí mặt phẳng xích đạo (equatorial) có góc $120^\circ$, trong khi 2 vị trí trục (axial) có góc $90^\circ$` | Partial | S-02.4, S-02.7, S-02.8 | Mô tả qua góc $120^\circ$ và $90^\circ$ nhưng không có hình vẽ hoặc định nghĩa hình học không gian. |
| Quy tắc Bent | `Nguyên tử trung tâm có xu hướng hướng các orbital có đặc tính $p$ nhiều hơn về phía các nhóm thế có độ âm điện lớn hơn.` | Yes | S-02.4 | Có phát biểu quy tắc và hệ quả, nhưng thiếu giải thích cơ sở lai hóa vì sao tăng đặc tính $p$ làm giảm góc liên kết. |

---

## E. Figures, Tables, Equations Inventory

| ID | Type | Location | Content | Status / note |
|---|---|---|---|---|
| EQ-02.1 | Equation (display, bất đẳng thức) | S-02.1, dòng 5 | `$$\text{LP - LP} \ > \ \text{LP - BP} \ > \ \text{BP - BP}$$` | Không đánh số; có giải thích định tính ngay sau. |
| EQ-02.2 | Equation (display) | S-02.2, dòng 20 | `$$SN = m + n = \frac{V + M - q}{2}$$` | Không đánh số; có danh sách biến `$V, M, q$`, nhưng định nghĩa `$M$` chưa phủ hết ví dụ trong bảng `S-02.3`. |
| EQ-02.3 | Equation (display, bất đẳng thức) | S-02.4, dòng 167 | `$$\widehat{H-O-H} \ (104,5^\circ) \ > \ \widehat{F-O-F} \ (103,1^\circ)$$` | Không đánh số; số liệu góc liên kết không có nguồn trích dẫn. |
| EQ-02.4 | Equation (display, bất đẳng thức) | S-02.4, dòng 168 | `$$\widehat{H-N-H} \ (107,3^\circ) \ > \ \widehat{F-N-F} \ (102,5^\circ)$$` | Không đánh số; số liệu góc liên kết không có nguồn trích dẫn. |
| TAB-02.1 | Table (`table.data-table`) | S-02.3, dòng 33–156 | Bảng tổng hợp 13 kiểu phân tử $AX_mE_n$ ($SN = 2..6$) với 7 cột (`SN`, `Công thức`, `Cặp LP (n)`, `Hình học cặp e`, `Hình học phân tử`, `Góc liên kết lý thuyết / thực tế`, `Ví dụ điển hình`) | Không đánh số bảng, không có caption `Table 2.1`; chứa 39 công thức hóa học ví dụ. |
| EX-02.1 | Worked/illustrative example box | S-02.6, dòng 174–180 | `🔎 Ví dụ — Dự đoán dạng hình học của $CH_4$, $NH_3$, $H_2O$, $SF_6$` | Không đánh số; chỉ ghi kết quả `$SN = m + n$`, không trình bày bước áp dụng công thức `$(V+M-q)/2$`. |
| EX-02.2 | Illustrative example box | S-02.7, dòng 181–186 | `🔎 Ví dụ — Khi $SN = 5$: cặp e tự do chọn vị trí nào?` ($PCl_5, SF_4, ClF_3, XeF_2$) | Không đánh số; lặp lại nội dung của `TAB-02.1` và `S-02.4`. |
| CALL-02.1 | Callout box | S-02.8, dòng 187–189 | `Cách nhớ` (mẹo nhớ $SN = 2..6$, độ co góc $2\text{–}2,5^\circ$, quy tắc xích đạo $SN = 5$) | Đặt dưới tiêu đề `Ý nghĩa và tác dụng`. |
| FIG-02.* | Figures | — | Không có | **0 hình vẽ** cho toàn bộ chương về cấu trúc không gian phân tử. |

---

## F. Duplicated and Overlapping Content

| DUP-ID | Items involved | Type | Evidence | Note for S2 |
|---|---|---|---|---|
| DUP-02.1 | `S-02.1` (dòng 12), `S-02.3` (dòng 159), `S-02.5` (dòng 172–173) | Near-verbatim / conceptual summary | `S-02.1`: "dự đoán tính phân cực và cách phân tử tiếp xúc với đích thuốc"; `S-02.5`: "suy ra phân tử có cực hay không… gắn vào enzyme/thụ thể" | Cả 4 mục 1–4 đều có đoạn `<p><strong>Ý nghĩa:</strong>...</p>` ở cuối, sau đó `S-02.5` lặp lại ý nghĩa chung. S2 nên MERGE các ý nghĩa trùng lặp về mục ứng dụng dược học hoặc tóm tắt chương. |
| DUP-02.2 | `S-02.3` (dòng 98–129), `S-02.4` (dòng 162–164), `S-02.7` (dòng 181–186) | Near-verbatim / triple repetition | Cả 3 nơi đều liệt kê dãy $SN=5$: $PCl_5$ ($AX_5$, lưỡng chóp tam giác), $SF_4$ ($AX_4E$, bập bênh, $\approx 102^\circ$), $ClF_3$ ($AX_3E_2$, chữ T), $XeF_2$ ($AX_2E_3$, thẳng $180^\circ$) | Lặp lại 3 lần cùng một chuỗi ví dụ. S2 nên giữ bảng ở `T4`, gộp giải thích vị trí xích đạo của `S-02.4` với ví dụ `S-02.7` thành một mục phân tích/ví dụ mẫu hoàn chỉnh (có tính $SN$ từ $V, M, q$). |
| DUP-02.3 | `S-02.3` (dòng 73–96, 131–138) và `S-02.6` (dòng 174–180) | Conceptual / data repetition | `S-02.6` lặp lại đúng 4 chất đã có trong bảng `S-02.3`: $CH_4$ ($109,5^\circ$), $NH_3$ ($107,3^\circ$), $H_2O$ ($104,5^\circ$), $SF_6$ ($90^\circ, 180^\circ$) | S2 nên giữ `S-02.6` ở phần `T5` (Worked Examples) nhưng mở rộng thành bài giải mẫu tính chi tiết $V, M, q \Rightarrow SN \Rightarrow m, n$ thay vì chỉ chép lại dòng kết quả của bảng. |
| DUP-02.4 | `S-02.2`, `S-02.3`, `S-02.4` và `S-02.8` (`Cách nhớ`) | Summary overlap | `S-02.8`: "thẳng – phẳng – tứ diện – chóp đôi – bát diện ứng với 2–3–4–5–6... với $SN=5$, cặp e tự do luôn ngồi xích đạo" | `S-02.8` là hộp tóm tắt ghi nhớ nhanh; S2 nên chuyển `S-02.8` về phần `T5` (quy trình thực hành) hoặc `T6` (Tóm tắt chương). |
| DUP-02.5 | `D-01` (Chương 1) và `D-02` (Chương 2) | Cross-chapter continuity | Chương 1 (`carryover_latest.md` mục 3) đã giới thiệu sơ bộ góc $\theta$, momen lưỡng cực $\vec{\mu}_{pt}$ và các phân tử đối xứng $CO_2, BF_3, CCl_4, SF_6$ cùng $H_2O, NH_3$ | Đây là sự phát triển đồng tâm đã được hứa ở `carryover_latest.md`; S2 cần tạo liên kết chéo tường minh về `T-01.4.2` và `T-01.4.6`. |

---

## G. Cross-document Conflicts

Đối chiếu giữa `D-02` (`ch02_doc-hvc-2.html`), `D-01` (`ch01_doc-hvc-1.html` / `_state/carryover_latest.md`) và `D-09` (`refs/D-09_doc-hvc-9.html`):

1. **Thuật ngữ "Phối tử" và "Số phối trí" (`D-02` vs `D-09`):**
   - Trong `D-02` (`S-02.2`, dòng 17, 19, 24), mọi nguyên tử xung quanh nguyên tử trung tâm $A$ trong phân tử cộng hóa trị (như $H, F, Cl, O$) đều được gọi là **"phối tử"** (`$X$: Phối tử bao quanh`, `Số nguyên tử phối tử đơn hóa trị`), và $SN$ được gọi là **"Số phối trí lập thể"**.
   - Trong `D-09` (`Mục 3. Phức chất và hóa dược`, dòng 34–35, 44), **"Phối tử"** được định nghĩa là *"Ion hoặc phân tử có ít nhất một cặp electron tự do để tạo liên kết phối trí"*, và **"Số phối trí"** là *"Số nguyên tử cho liên kết trực tiếp với ion trung tâm; không luôn bằng số phối tử"*.
   - **Đánh giá:** Không phải mâu thuẫn dữ kiện sai lệch, nhưng là sự chồng lấn thuật ngữ giữa thuyết VSEPR (dùng từ "phối tử" theo nghĩa rộng cho nhóm thế xung quanh $A$) và Hóa học Phối trí (Chương 6). S2/S3 cần chú thích rõ ngay tại lần đầu xuất hiện ở Chương 2 để sinh viên không nhầm lẫn $SN$ (tổng số miền electron = $m + n$) với số phối trí $CN$ trong phức chất.
2. **Ký hiệu `$q$` và góc liên kết (`D-02` vs `D-01` / `carryover_latest.md`):**
   - Trong `carryover_latest.md` (Chương 1), góc liên kết được chuẩn hóa là $\theta$, và `$q$` trong $\vec{\mu} = q \cdot \vec{d}$ là độ lớn điện tích phần ($\text{C}$), còn điện tích phân tử/ion trong tổng điện tích hình thức ghi là $q_{\text{phân tử}}$.
   - Trong `D-02`, góc liên kết không dùng ký hiệu $\theta$ mà dùng ký hiệu góc có mũ $\widehat{H-O-H}$ (`S-02.4`), còn `$q$` trong công thức $SN = (V+M-q)/2$ (`S-02.2`) là điện tích đại số của ion. Cần chuẩn hóa ký hiệu ở S2/S3 để nối tiếp mượt mà với `carryover_latest.md`.

---

## H. Issues Register

| ID | Class | Category | Location | Evidence | Why it matters |
|---|---|---|---|---|---|
| I-02.01 | [CONFIRMED] | Heading hierarchy / document identity | Toàn file, dòng 1 | File bắt đầu trực tiếp bằng `<h4>1. Nguyên lý cơ bản của thuyết VSEPR (Gillespie - Nyholm)</h4>`, không có `h1–h3` và không có tên chương | Fragment HTML thiếu 3 cấp tiêu đề và tên chương; tên viết tắt "VSEPR" không được giải nghĩa tiếng Việt trong bài (chỉ có ở `MANIFEST.md`). |
| I-02.02 | [CONFIRMED] | Heading numbering | `S-02.5`, dòng 172 | Tiêu đề `<h4>Ý nghĩa và tác dụng</h4>` không đánh số thứ tự sau các mục `1.`, `2.`, `3.`, `4.` | Hệ thống đánh số tiêu đề không nhất quán; S2/S3 cần tái cấu trúc theo khung Template v2. |
| I-02.03 | [CONFIRMED] | Heading–content mismatch | `S-02.5`–`S-02.8`, dòng 172–189 | Hai hộp `example-box` (`S-02.6`, `S-02.7`) và hộp `callout` "Cách nhớ" (`S-02.8`) nằm dưới tiêu đề `<h4>Ý nghĩa và tác dụng</h4>` | Ví dụ bài tập và mẹo ghi nhớ bị đặt sai vị trí dưới mục "Ý nghĩa và tác dụng" thay vì nằm ở mục Ví dụ minh họa (`T5`) và Tóm tắt (`T6`). |
| I-02.04 | [CONFIRMED] | Heading–content mismatch | `S-02.4`, dòng 160–164 | Tiêu đề là `4. Quy tắc Bent & Sự lệch góc liên kết thực tế`, nhưng ý đầu (dòng 162–164) trình bày vị trí xích đạo/trục của khung $SN=5$ | Việc cặp electron tự do chiếm vị trí xích đạo trong khung lưỡng chóp tam giác ($SN=5$) là quy tắc hình học VSEPR cơ bản, không phải là Quy tắc Bent. |
| I-02.05 | [CONFIRMED] | Formula rule gap / internal inconsistency | `S-02.2` (dòng 20–25) vs `S-02.3` (dòng 53, 137, 153) | `S-02.2`: "$M$: Số nguyên tử phối tử đơn hóa trị ($H, F, Cl, Br, I$); các phối tử hai hóa trị như $O, S$ tính $M = 0$" | Định nghĩa $M$ không đề cập phối tử ba hóa trị ($N$ trong $HCN$ ở dòng 53: nếu tính $M=1$ sẽ ra $SN=2,5$ vô lý) và không áp dụng được cho phức chất $[Fe(CN)_6]^{4-}$, $[PtCl_4]^{2-}$ ở dòng 137, 153. |
| I-02.06 | [CONFIRMED] | Internal contradiction (angle contraction rule) | `S-02.8` (dòng 188) vs `S-02.3` (dòng 69, 144) | `S-02.8`: "Mỗi cặp e tự do 'co' góc liên kết khoảng $2$–$2,5^\circ$"; nhưng `S-02.3` ghi $SO_2 \approx 119^\circ$ (co $1^\circ$) và $BrF_5 \approx 84,8^\circ$ (co $5,2^\circ$) | Quy tắc mẹo nhớ $2\text{–}2,5^\circ$ chỉ đúng xấp xỉ cho khung tứ diện $SN=4$ ($109,5^\circ \to 107,3^\circ \to 104,5^\circ$), nhưng nguồn phát biểu như quy tắc chung cho mọi $SN$. |
| I-02.07 | [CONFIRMED] | Forward reference / undefined symbol before definition | `S-02.1`, dòng 9 | "khi xác định số phối trí lập thể ($SN$), liên kết bội chỉ tính là một vùng liên kết." | Ký hiệu và khái niệm $SN$ được dùng ở mục 1 (`S-02.1`) trước khi được định nghĩa chính thức ở mục 2 (`S-02.2`, dòng 19). |
| I-02.08 | [CONFIRMED] | Terminology inconsistency | `S-02.1` (dòng 9), `S-02.2` (dòng 13, 19, 30), `S-02.3` (dòng 159) | Gọi cùng đại lượng $SN$ bằng 4 tên: "số phối trí lập thể", "Số lập thể", "số miền electron", "vùng liên kết" | Thiếu thống nhất thuật ngữ cho khái niệm trung tâm của chương; dễ gây lúng túng cho sinh viên năm 1–2. |
| I-02.09 | [CONFIRMED] | Terminology inconsistency (shape names) | `S-02.3` vs `S-02.4`, `S-02.6`, `S-02.8` | `Đường thẳng` vs `Thẳng hàng` vs `dạng thẳng`; `Tháp chóp tam giác` vs `tháp tam giác`; `Lưỡng chóp tam giác` vs `chóp đôi`; `Dạng góc / Chữ V` vs `Chữ V / Dạng góc` | Tên hình học phân tử biến thiên giữa bảng tổng hợp và phần lời văn/ví dụ; thuật ngữ `Điệp hình` (dòng 110) đưa vào ngoặc nhưng không giải thích. |
| I-02.10 | [CONFIRMED] | Undefined term | `S-02.2`, dòng 17 | "$X$: Phối tử bao quanh ($m$ là số phối tử tạo liên kết $\sigma$)." | Khái niệm "liên kết $\sigma$" thuộc thuyết Liên kết Hóa trị (VB — Chương 3 `D-03`), được sử dụng ở Chương 2 mà chưa có định nghĩa. |
| I-02.11 | [CONFIRMED] | Undefined term | `S-02.4`, dòng 165 | "Nguyên tử trung tâm có xu hướng hướng các orbital có đặc tính $p$ nhiều hơn về phía các nhóm thế có độ âm điện lớn hơn." | Khái niệm "đặc tính $p$" (phần trăm đóng góp orbital $p$ trong orbital lai hóa) thuộc Chương 3 (`D-03`), chưa được định nghĩa và không giải thích vì sao đặc tính $p$ lớn làm góc liên kết nhỏ lại. |
| I-02.12 | [CONFIRMED] | Missing explicit definition | `S-02.3`, dòng 39–40 | Tiêu đề cột: `Hình học cặp e (Electron Geometry)` và `Hình học phân tử (Molecular Shape)` | Bảng phân biệt 2 cột nhưng trong toàn bộ văn bản không có câu nào định nghĩa sự khác biệt cốt lõi giữa "hình học cặp electron" (xét cả LP và BP) và "hình học phân tử" (chỉ xét vị trí hạt nhân nguyên tử). |
| I-02.13 | [CONFIRMED] | Duplication | `S-02.1`, `S-02.2`, `S-02.3`, `S-02.4`, `S-02.5` | Xem `DUP-02.1`, `DUP-02.2`, `DUP-02.3`: lặp lại 5 đoạn "Ý nghĩa" và lặp lại 3 lần dãy ví dụ $SN=5$ ($PCl_5, SF_4, ClF_3, XeF_2$) | Làm phân tán cấu trúc bài giảng; các hộp ví dụ (`S-02.6`, `S-02.7`) chỉ chép lại dữ liệu trong bảng `S-02.3` mà không giải chi tiết công thức tính $SN$. |
| I-02.14 | [CONFIRMED] | Incomplete worked examples | `S-02.6` (dòng 174–180), `S-02.7` (dòng 181–186) | "$CH_4$: $SN = 4 + 0 = 4$, kiểu $AX_4$... $NH_3$: $SN = 3 + 1 = 4$, kiểu $AX_3E$" | Cả hai hộp ví dụ không hề trình bày bước áp dụng công thức $SN = (V+M-q)/2$ vừa học ở `S-02.2`, và không có ví dụ nào cho ion đa nguyên tử ($q \ne 0$) hoặc phối tử hóa trị hai ($M = 0$). |
| I-02.15 | [CONFIRMED] | Incomplete angle reporting between sections | `S-02.3` (dòng 111) vs `S-02.7` (dòng 183) | `S-02.3` ghi góc của $SF_4$: "$< 90^\circ, < 120^\circ$ ($SF_4 \approx 87^\circ, 102^\circ$)"; `S-02.7` chỉ ghi "góc $\approx 102^\circ$ (nhỏ hơn $120^\circ$)" | Bỏ sót góc trục–xích đạo ($\approx 87^\circ < 90^\circ$) ở `S-02.7` và không nói rõ góc $87^\circ$ và $102^\circ$ là góc giữa những liên kết nào trong hình bập bênh. |
| I-02.16 | [CONFIRMED] | Notation / formatting inconsistency | `S-02.3` (dòng 78 vs dòng 86, 94, 119, 144) | Dòng 78 viết `$109{,}5^\circ$ ($109^\circ\,28^{\prime}$)`, nhưng dòng 86, 94 viết `$109,5^\circ$`, `$107,3^\circ$`, `$104,5^\circ$` | Cách định dạng dấu phẩy thập phân trong LaTeX không đồng nhất; bảng `TAB-02.1` không được đánh số và không có chú thích (caption). |
| I-02.17 | [CONFIRMED] | Visual / figure absence | Toàn file (`S-02.1`–`S-02.8`) | 0 hình vẽ, 0 sơ đồ cho 13 dạng hình học không gian 3D và vị trí trục/xích đạo | Học phần về cấu trúc không gian 3 chiều nhưng hoàn toàn không có hình minh họa hoặc placeholder `[FIGURE]`, gây khó khăn lớn cho việc hình dung vị trí trục/xích đạo. |
| I-02.18 | [CONFIRMED] | Structural completeness | Toàn file | Thiếu T1 (Overview, Scope, Prerequisites, Study time), T2 (Learning Objectives), T6 (Summary chuẩn), T7 (Assessment/Exercises), T8 (References) | File nguồn chỉ là đoạn trích nội dung cốt lõi (1.267 từ); S2/S3 phải thiết kế bổ sung đầy đủ khung Template v2 gắn nhãn `[ADDED]` / `[VERIFY]`. |
| I-02.19 | [CONFIRMED] | References absent | Toàn file | 0 tài liệu tham khảo hoặc nguồn trích dẫn cho toàn bộ số liệu góc liên kết thực nghiệm | Không thể truy nguyên nguồn gốc các số đo góc liên kết ($119^\circ, 107,3^\circ, 104,5^\circ, 87^\circ, 102^\circ, 87,5^\circ, 84,8^\circ, 103,1^\circ, 102,5^\circ$); buộc gắn `[VERIFY]` theo R4/R10. |
| I-02.20 | [CONFIRMED] | Depth gap in pharmaceutical application | `S-02.1` (dòng 12), `S-02.3` (dòng 159), `S-02.5` (dòng 173) | "Trong hóa dược, hình học phân tử quyết định cách phối tử hoặc thuốc định hướng khi gắn vào enzyme/thụ thể; sai khác không gian có thể làm thay đổi hoạt tính." | Liên hệ dược học chỉ dừng ở 1–2 câu nhận định chung, không chỉ ra mối liên hệ với chính các ví dụ vô cơ trong bảng (như cấu trúc vuông phẳng của phức chất плаtin $[PtCl_4]^{2-}$ hay tính phân cực của $H_2O, NH_3$). |
| I-02.21 | [POTENTIAL] | Scope / applicability of VSEPR to transition metal complexes | `S-02.3`, dòng 137 và dòng 153 | Xếp $[Fe(CN)_6]^{4-}$ vào $AX_6$ ($n=0$) và $[PtCl_4]^{2-}$ vào $AX_4E_2$ ($n=2$, vuông phẳng) trong bảng VSEPR | Trong hóa vô cơ chuẩn, thuyết VSEPR không áp dụng trực tiếp cho phức chất kim loại chuyển tiếp có phân lớp $d$ chưa bão hòa: $[PtCl_4]^{2-}$ ($Pt^{2+}, d^8$) có cấu trúc vuông phẳng do hiệu ứng trường phối tử (lai hóa $dsp^2$) chứ không phải do có $n=2$ cặp LP theo kiểu $AX_4E_2$ như $XeF_4$. Cần chuyên gia xác nhận cách trình bày để không mâu thuẫn với Chương 6. |
| I-02.22 | [POTENTIAL] | Incomplete mechanistic explanation ($SN=5$ equatorial rule) | `S-02.4`, dòng 163 | "Do lực đẩy ở góc $90^\circ$ là nguy hiểm nhất, cặp electron tự do LUÔN LUÔN ưu tiên chiếm vị trí xích đạo để giảm tương tác $90^\circ$." | Diễn đạt "nguy hiểm nhất" thiếu tính học thuật và chưa đếm số lượng tương tác $90^\circ$: một cặp e ở vị trí trục chịu **3** tương tác đẩy $90^\circ$ (với 3 liên kết xích đạo), trong khi ở vị trí xích đạo chỉ chịu **2** tương tác đẩy $90^\circ$ (với 2 liên kết trục). |
| I-02.23 | [POTENTIAL] | Missing link between Bent's rule and axial/equatorial preference in $SN=5$ | `S-02.4`, dòng 162–169 | Trình bày rời rạc vị trí xích đạo của LP ($SN=5$) và Quy tắc Bent ($H_2O/OF_2$, $NH_3/NF_3$) | Quy tắc Bent thực chất giải thích thống nhất cả hai hiện tượng: trong $SN=5$ (như $ClF_3, SF_4$), vị trí xích đạo có đặc tính $s$ cao hơn nên ưu tiên chứa LP, còn vị trí trục có đặc tính $p$ cao hơn nên ưu tiên chứa phối tử âm điện mạnh (apicophilicity). |
| I-02.24 | [POTENTIAL] | Ambiguous example formulas for homonuclear/triatomic species | `S-02.3`, dòng 70 và dòng 128 | Liệt kê `$O_3$` ở hàng $AX_2E$ ($SN=3$) và `$I_3^-$` ở hàng $AX_2E_3$ ($SN=5$) | Với phân tử/ion tạo bởi các nguyên tử cùng nguyên tố ($O_3, I_3^-$), sinh viên thường nhầm lẫn khi áp dụng $SN = (V+M-q)/2$ nếu không được giải thích rằng 1 nguyên tử đóng vai trò nguyên tử trung tâm $A$ và 2 nguyên tử còn lại đóng vai trò phối tử $X$ ($O\text{–}O\text{=}O$ hay $[I\text{–}I\text{–}I]^-$). |
| I-02.25 | [POTENTIAL] | Experimental bond angle accuracy & conditions | `S-02.3` (dòng 69, 86, 94, 111, 119, 144), `S-02.4` (dòng 167–168) | $SO_2 \approx 119^\circ$; $NH_3 \approx 107,3^\circ$; $H_2O \approx 104,5^\circ$; $SF_4 \approx 87^\circ, 102^\circ$; $ClF_3 \approx 87,5^\circ$; $BrF_5 \approx 84,8^\circ$; $OF_2 = 103,1^\circ$; $NF_3 = 102,5^\circ$ | Các giá trị góc liên kết thực nghiệm không nêu trạng thái đo (pha khí/tinh thể) và không có tài liệu tham khảo; riêng $SF_4$ thường ghi góc $F_{eq}\text{–}S\text{–}F_{eq} \approx 101,6^\circ$ và $F_{ax}\text{–}S\text{–}F_{ax} \approx 173,1^\circ$ (tức lệch khoảng $3,5^\circ$ so với $180^\circ$, ứng với góc $F_{ax}\text{–}S\text{–}F_{eq} \approx 87^\circ$). Cần kiểm chứng số liệu với sổ tay chuẩn. |

**Tổng hợp Issues Register:** 20 `[CONFIRMED]`, 5 `[POTENTIAL]` (tổng cộng 25 issues).

---

## I. Verification Queue

| V-ID | Item | Type | Location | Why | Suggested check | Priority |
|---|---|---|---|---|---|---|
| V-02.01 | Công thức $SN = (V + M - q)/2$ và quy tắc tính $M$ cho phối tử đa hóa trị ($N$ trong $HCN$, nguyên tử biên trong $O_3, I_3^-$) | formula / method | `S-02.2` (dòng 20–26), `S-02.3` (dòng 53, 70, 128) | Định nghĩa $M$ trong nguồn chỉ nêu phối tử hóa trị 1 ($M=1$) và hóa trị 2 ($M=0$), chưa nêu hóa trị 3 ($M=-1$ cho $N$ trong $HCN$) hoặc cách tách nguyên tử trung tâm trong $O_3, I_3^-$ | Đối chiếu giáo trình Hóa đại cương / Hóa vô cơ để bổ sung chú thích điều kiện áp dụng công thức $SN$ | High |
| V-02.02 | Việc xếp phức chất kim loại chuyển tiếp $[Fe(CN)_6]^{4-}$ ($AX_6, n=0$) và $[PtCl_4]^{2-}$ ($AX_4E_2, n=2$) vào bảng VSEPR | theory / classification | `S-02.3` (dòng 137, 153) | Công thức $SN = (V+M-q)/2$ không áp dụng được cho ion kim loại chuyển tiếp $d^6, d^8$; hình vuông phẳng của $[PtCl_4]^{2-}$ do cấu hình $d^8$ trường phối tử chứ không phải $AX_4E_2$ của VSEPR | Chuyên gia Hóa vô cơ xác nhận giữ nguyên kèm ghi chú giới hạn mô hình hay thay/chú thích rõ để nhất quán với Chương 6 | High |
| V-02.03 | Số liệu góc liên kết thực nghiệm trong bảng VSEPR: $SO_2 \approx 119^\circ$, $NH_3 \approx 107,3^\circ$, $H_2O \approx 104,5^\circ$ | number | `S-02.3` (dòng 69, 86, 94), `S-02.6` (dòng 175–177) | Không có nguồn trích dẫn trong file gốc | Đối chiếu CRC Handbook hoặc giáo trình Hóa vô cơ chuẩn (Housecroft / Miessler / Giáo trình Dược) | High |
| V-02.04 | Số liệu góc liên kết của các phân tử siêu hóa trị: $SF_4 \approx 87^\circ, 102^\circ$; $ClF_3 \approx 87,5^\circ$; $BrF_5 \approx 84,8^\circ$ | number | `S-02.3` (dòng 111, 119, 144), `S-02.7` (dòng 183) | Không có nguồn trích dẫn; cần làm rõ $87^\circ$ và $102^\circ$ trong $SF_4$ là góc giữa cặp liên kết nào ($F_{ax}\text{–}S\text{–}F_{eq}$ vs $F_{eq}\text{–}S\text{–}F_{eq}$) | Đối chiếu dữ liệu cấu trúc thực nghiệm trong giáo trình Hóa vô cơ chuẩn | High |
| V-02.05 | Số liệu góc liên kết minh họa Quy tắc Bent: $\widehat{H-O-H} (104,5^\circ) > \widehat{F-O-F} (103,1^\circ)$ và $\widehat{H-N-H} (107,3^\circ) > \widehat{F-N-F} (102,5^\circ)$ | number | `S-02.4` (dòng 167–168) | Không có nguồn trích dẫn trong file gốc | Đối chiếu giáo trình Hóa vô cơ chuẩn | High |
| V-02.06 | Cơ sở giải thích Quy tắc Bent (mối liên hệ giữa đặc tính $p$ của orbital lai hóa, độ âm điện phối tử và độ mở góc liên kết) | theory | `S-02.4` (dòng 165–169) | Nguồn chỉ nêu mệnh đề và hệ quả mà không giải thích vì sao đặc tính $p$ lớn hơn lại dẫn tới góc liên kết hẹp hơn | Xác nhận mức độ giải thích cơ chế liên hệ với Chương 3 (Lai hóa orbital) | Medium |
| V-02.07 | Quy tắc kinh nghiệm: "Mỗi cặp e tự do 'co' góc liên kết khoảng $2\text{–}2,5^\circ$" | convention / heuristic | `S-02.8` (dòng 188) | Chỉ nghiệm đúng cho dãy $SN=4$ ($CH_4 \to NH_3 \to H_2O$), không đúng cho $SO_2$ hay $BrF_5$ | Ghi rõ phạm vi áp dụng của quy tắc kinh nghiệm này là khung tứ diện $SN=4$ | Medium |
| V-02.08 | Nhận định ứng dụng dược học về định hướng không gian của thuốc/phối tử khi gắn vào enzyme/thụ thể | application / claim | `S-02.1` (dòng 12), `S-02.5` (dòng 173) | Nhận định khái quát không kèm trích dẫn | Giữ đúng mức khái niệm lập thể theo nguồn; không tự ý thêm liều lượng hay dữ liệu lâm sàng theo `DOMAIN_RULES` | Medium |
| V-02.09 | Toàn bộ chương không có tài liệu tham khảo | reference | Toàn file | `00_config.md` hiện để `APPROVED_REFERENCE_LIST: none` | Cần giảng viên/người dùng cung cấp danh mục giáo trình chuẩn để đối chiếu ở S5 | High |

---

## J. Initial Recommendations and Questions for the user

### Đề xuất cho Stage S2 (R1–R5)
1. **R1 (Tái cấu trúc theo Template v2):** Thiết lập đầy đủ 8 phần `T1`–`T8`; tách phần giải thích vị trí trục/xích đạo của khung $SN=5$ (đang nằm lẫn ở đầu `S-02.4`) thành một tiểu mục riêng về lập thể khung lưỡng chóp tam giác và bát diện trước khi trình bày Quy tắc Bent.
2. **R2 (Xử lý trùng lặp bằng MERGE, không xóa bỏ):** Gộp các đoạn "Ý nghĩa" rời rạc (`DUP-02.1`) vào tiểu mục Ứng dụng trong Hóa dược (`T-02.4.6`) và Tóm tắt (`T6`); nâng cấp hai hộp ví dụ `S-02.6`, `S-02.7` (`DUP-02.2`, `DUP-02.3`) thành các bài giải mẫu hoàn chỉnh có trình bày từng bước tính $SN = (V+M-q)/2$ tại `T5`.
3. **R3 (Bổ sung hệ thống `[FIGURE]` và sơ đồ Mermaid):** Do chương học về cấu trúc không gian 3D nhưng nguồn có 0 hình vẽ (`I-02.17`), S2/S3 cần lập sơ đồ Mermaid cho quy trình 4 bước xác định hình học VSEPR và đặt các placeholder `[FIGURE 2.k | ...]` chuẩn xác cho các mô hình 3D ($SN=2..6$, vị trí trục vs. xích đạo trong $SN=5$, sự lệch góc trong $CH_4/NH_3/H_2O$ và $H_2O/OF_2$) theo đúng `FIGURE_POLICY`.
4. **R4 (Làm rõ phạm vi công thức $SN$ và ví dụ phức chất):** Giữ nguyên toàn bộ 39 ví dụ hóa học của bảng `S-02.3` (không xóa bất kỳ chất nào), nhưng bổ sung chú thích học thuật rõ ràng cho: (a) cách tính $SN$ với $HCN, O_3, I_3^-$ (`I-02.05`, `I-02.24`), và (b) lưu ý giới hạn của VSEPR đối với phức chất kim loại chuyển tiếp $[Fe(CN)_6]^{4-}$ và $[PtCl_4]^{2-}$ (`I-02.21`, `V-02.02`), tạo cầu nối sang Chương 3 và Chương 6.
5. **R5 (Chuẩn hóa ký hiệu nối tiếp Chương 1):** Thống nhất tên gọi **"Số phối trí lập thể ($SN$)"**, dùng ký hiệu góc liên kết $\theta$ (kèm ký hiệu góc $\widehat{XAX}$ khi so sánh cụ thể), ký hiệu $\vec{\mu}_{lk}$ và $\vec{\mu}_{pt}$ như đã chốt tại `carryover_latest.md`, và thống nhất dấu phẩy thập phân chuẩn tiếng Việt trong LaTeX.

### Câu hỏi xin ý kiến người dùng (Q1–Q5, tối đa 10 mục cho toàn phần J)
6. **Q1 (Xử lý hai ví dụ phức chất $[Fe(CN)_6]^{4-}$ và $[PtCl_4]^{2-}$ trong bảng VSEPR — `I-02.21` / `V-02.02`):** Bạn muốn giữ nguyên hai phức chất này trong bảng `S-02.3` kèm một chú thích học thuật `[ADDED]`/`[VERIFY]` giải thích rằng hình học của phức chất kim loại chuyển tiếp ($d^6, d^8$) thực chất được quyết định bởi thuyết Trường phối tử / Lai hóa orbital (sẽ học ở Chương 3 và Chương 6) chứ không tính theo công thức $SN = (V+M-q)/2$?
7. **Q2 (Mở rộng công thức tính $SN$ cho $HCN$ và ion đa nguyên tử — `I-02.05`):** Bạn có đồng ý để S3 bổ sung giải thích cách xác định $SN$ trực tiếp từ công thức cấu tạo Lewis (đếm số vùng liên kết $\sigma$ quanh $A$ cộng số cặp LP) song song với công thức đại số $SN = (V+M-q)/2$ (kèm quy tắc cho nguyên tử hóa trị ba như $N$ trong $HCN$), giúp sinh viên áp dụng được cho mọi phân tử trong bảng?
8. **Q3 (Mức độ giải thích Quy tắc Bent — `I-02.11`, `I-02.23`):** Đối với thuật ngữ "đặc tính $p$" và "liên kết $\sigma$" xuất hiện sớm ở Chương 2 trước khi học Chương 3 (Thuyết VB & Lai hóa), bạn muốn giải thích khái niệm ngắn gọn ở mức định tính kèm liên kết chéo sang Chương 3 (`[ADDED: cross-chapter bridge]`)?
9. **Q4 (Hệ thống hình vẽ `[FIGURE]` cho cấu trúc 3D — `I-02.17`):** Theo `FIGURE_POLICY`, S3 sẽ tạo sơ đồ quy trình bằng Mermaid và đặt các khung giữ chỗ `[FIGURE 2.k | ...]` mô tả chi tiết góc nhìn 3D (nét liền, nét đứt, nét đậm wedge-dash) cho các hình học $SN=2..6$ để phục vụ biên tập đồ họa sau này. Bạn có yêu cầu thêm hình minh họa cụ thể nào khác không?
10. **Q5 (Dung lượng và bộ câu hỏi lượng giá T7):** Bạn đồng ý với kế hoạch xây dựng bộ câu hỏi và bài tập tự lượng giá tại `T7` (phủ đủ 4 chuẩn đầu ra `LO-1`..`LO-4`, kèm lời giải chi tiết từng bước tính $SN$, dự đoán hình học, so sánh góc liên kết và xét momen lưỡng cực $\vec{\mu}_{pt}$), nâng dung lượng chương từ 1.267 từ lên khoảng 3.200–3.800 từ?

---

## K. Not verified / limitations

- **Phạm vi đọc nguồn:** Audit này phân tích trực tiếp `00_source_original/ch02_doc-hvc-2.html` (`D-02`), đối chiếu tính liên tục với `carryover_latest.md` (từ Chương 1) và bảng thuật ngữ `D-09`. Các chương nguồn `D-03` đến `D-08` chưa được audit chi tiết trong lượt này; các liên kết chéo sang Chương 3, 5, 6 dựa trên `MANIFEST.md` và `carryover_latest.md`.
- **Tài liệu tham khảo ngoài:** File nguồn `D-02` không chứa bất kỳ tài liệu tham khảo nào (0 trích dẫn). Do quy tắc không giả định truy cập mạng và không tự bịa nguồn (R4, R12e), mọi số liệu thực nghiệm về góc liên kết ($119^\circ, 107,3^\circ, 104,5^\circ, 87^\circ, 102^\circ, 87,5^\circ, 84,8^\circ, 103,1^\circ, 102,5^\circ$) đều được đưa vào Verification Queue (`V-02.03`–`V-02.05`) để chuyên gia đối chiếu với sổ tay hóa lý chuẩn.
- **Nhận định `[POTENTIAL]`:** Các vấn đề `I-02.21` đến `I-02.25` dựa trên kiến thức hóa học vô cơ đại cương chuẩn để cảnh báo rủi ro sư phạm (đặc biệt là việc áp dụng VSEPR cho phức chất $d^8$ $[PtCl_4]^{2-}$), không tự ý sửa đổi hay xóa bỏ dữ liệu của nguồn khi chưa qua cổng duyệt.
- **Kiểm tra cơ học:** Đã kiểm tra số dòng (189), số byte (13.590), số từ từng mục (tổng 1.267 từ) và tính khớp nối công thức $SN = (V+M-q)/2$ trên toàn bộ 29 phân tử/ion tiêu biểu bằng script Python.
