# ch05_audit.md — S1 Audit · Chương 05 (D-05)

**Môn:** Lý dược – Master Lecture Notes · **Stage:** S1 Audit · **Ngày:** 2026-11-09  
**Nguồn audit:** `00_source_original/ch05_doc-ld-c4.html` (D-05) — READ-ONLY, không sửa.  
**Ngữ cảnh đối chiếu:** `00_config.md`, `00_source_original/MANIFEST.md`, `_state/carryover_latest.md`, `_state/glossary_running.md`, `_state/verification_list_running.md`, `01_audit/ch04_audit.md`.  
**Nguyên tắc:** Chỉ phân tích và lập hồ sơ truy vết; không viết lại, không sửa lỗi, không tự bổ sung kiến thức học thuật.

---

## A. Document Inventory

| D-ID | File | Type | Chapter | Slug gốc | Num | Lines | Approx. words | h4 / h5 | Formula boxes | Example boxes | Callouts | Tables | Figures/Images | References |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| D-05 | `00_source_original/ch05_doc-ld-c4.html` | chapter-source (HTML fragment, MathJax) | 05 | doc-ld-c4 | 5 | 114 | 2407 (đếm bằng script) | 7 / 0 | 5 | 1 | 2 | 0 | 0 / 0 | 0 |

**Đặc điểm kỹ thuật (kiểm tra bằng script Python):**
- **Mã hóa & dung lượng:** UTF-8; 17.793 byte; 114 dòng; thẻ HTML đóng/mở cân bằng (`7 <h4>`, `13 <ul>`, `37 <li>`, `8 <p>`, `9 <div>`, `34 <strong>`, `17 <em>`, `7 <br>`).
- **Biểu thức toán/hóa (MathJax):** 5 khối công thức hiển thị riêng (`$$…$$`, tức 10 dấu `$$`), 138 biểu thức inline `$…$`.
- **Cấu trúc tiêu đề:** File bắt đầu trực tiếp bằng `<h4>1. Bản chất vật lý và các đặc trưng của sóng siêu âm</h4>`; không có `<h1>/<h2>/<h3>` và không có tên chương bên trong file (tên chương chỉ nằm ở `MANIFEST.md`: *Chương 4: Siêu âm trong Y Dược học (Ultrasound in Medicine & Pharmacy)*).
- **Hộp nội dung:** 5 `formula-box` (vận tốc âm, trở kháng âm, phản xạ/khuếch xạ, suy giảm, Doppler); 1 `example-box` (độ sâu từ thời gian dội âm); 2 `callout` (Cách nhớ ×2).
- **Bảng biểu & Hình vẽ:** 0 bảng (`<table>`), 0 hình vẽ/sơ đồ.
- **Tài liệu tham khảo:** 0 trích dẫn (`http`, `doi`, `ISBN`, "Tài liệu tham khảo", "NXB", "giáo trình" đều bằng 0). Trạng thái: **none present**.
- **Phân bổ số từ theo 7 mục (tổng = 2319 từ):** `S-05.1` (~290) + `S-05.2` (~532) + `S-05.3` (~182) + `S-05.4` (~359) + `S-05.5` (~506) + `S-05.6` (~176) + `S-05.7` (~274).

> **Ghi chú dung lượng:** Nguồn vừa phải (2407 từ), 7 mục, 5 công thức, 1 ví dụ. Không có bài tập, không có bảng, không có hình, không có tài liệu tham khảo.

---

## B. Source Section Register

| S-ID | D-ID | chapter | heading path | location | content types | approx. words | ≤20-word summary |
|---|---|---|---|---|---|---|---|
| S-05.1 | D-05 | 05 | `1. Bản chất vật lý và các đặc trưng của sóng siêu âm` | dòng 1–15 | theory/principle; equation/model; definition | ~290 | Siêu âm là sóng cơ học tần số > 20 kHz; dạng sóng dọc trong chất lỏng/mô mềm; vận tốc âm $v = \sqrt{K/\rho} = \lambda f$; tốc độ trong mô mềm ≈ 1540 m/s. |
| S-05.2 | D-05 | 05 | `2. Tương tác của sóng siêu âm với mô sinh học` | dòng 16–41 | theory/principle; equation/model; example (inline) | ~532 | Trở kháng âm $Z = \rho v$; phản xạ/khuếch xạ tại mặt phân cách ($R = ((Z_2-Z_1)/(Z_2+Z_1))^2$); suy giảm $I(x) = I_0 e^{-\mu x}$; quy tắc đánh đổi tần số/độ phân giải/độ sâu. |
| S-05.3 | D-05 | 05 | `3. Cơ chế phát - thu sóng siêu âm: Hiệu ứng áp điện (Piezoelectric Effect)` | dòng 43–50 | theory/principle; mechanism | ~182 | Hiệu ứng áp điện nghịch (phát) và thuận (thu) của tinh thể áp điện (PZT); đầu dò vừa là "loa phát" vừa là "micro thu". |
| S-05.4 | D-05 | 05 | `4. Các phương thức chẩn đoán hình ảnh siêu âm (Ultrasound Imaging Modes)` | dòng 51–65 | theory/principle; classification; application | ~359 | A-mode (độ sâu), B-mode (hình ảnh 2D), M-mode (chuyển động tim), Doppler (vận tốc máu); Doppler màu, năng lượng. |
| S-05.5 | D-05 | 05 | `5. Ứng dụng của sóng siêu âm trong Dược học và Điều trị y sinh` | dòng 66–88 | theory/principle; application; case study | ~506 | Xâm thực sóng âm (cavitation); UAE chiết xuất hoạt chất; đồng hóa nhũ tương nano; liposome; điều chế liposome; rửa thiết bị y tế; HIFU; phonophoresis. |
| S-05.6 | D-05 | 05 | `6. An toàn sinh học và các chỉ số an toàn của sóng siêu âm` | dòng 90–100 | theory/principle; number/formula | ~176 | Không mang bức xạ ion hóa; TI < 1,0; MI ≤ 1,9; nguyên lý ALARA. |
| S-05.7 | D-05 | 05 | `7. Ý nghĩa và tác dụng tổng kết` | dòng 102–114 | other (summary); theory/principle | ~274 | Siêu âm cung cấp nền tảng vật lý cho UAE, điều chế liposome/liposome, tối ưu hóa hệ phân phối thuốc; các yêu cầu an toàn (TI, MI, ALARA). |

**Tổng cộng:** 7 S-ID (`S-05.1` đến `S-05.7`); tổng số từ 2319 từ (phân bổ mục) / 2407 (toàn file).

---

## C. Content Coverage Matrix

| chapter | Definitions | Theory | Mechanisms | Equations | Examples | Case studies | Applications | Questions/Exercises | References | Figures/Tables |
|---|---|---|---|---|---|---|---|---|---|---|
| 05 (D-05) | Present (S-05.1, S-05.2, S-05.3, S-05.6) | Present (S-05.1–S-05.6) | Present (S-05.1 sóng dọc/ngang; S-05.2 phản xạ/khuếch xạ/suy giảm; S-05.3 hiệu ứng áp điện; S-05.5 xâm thực/cavitation) | Present (S-05.1 $v=\sqrt{K/\rho}=\lambda f$; S-05.2 $Z=\rho v$, $R=((Z_2-Z_1)/(Z_2+Z_1))^2$, $I(x)=I_0e^{-\mu x}$; S-05.4 Doppler $\Delta f = 2f_0 v\cos\theta/c$) | Present (S-05.1 ví dụ inline độ sâu; S-05.5 hộp ví dụ UAE/liposome/Doppler) | Present (S-05.5 UAE/liposome/Doppler) | Present (S-05.1–S-05.6 đều có ứng dụng dược: UAE, liposome, phonophoresis, HIFU, chẩn đoán) | Absent | Absent | Absent (0 bảng, 0 hình vẽ) |

**Ghi chú chi tiết về độ phủ:**
- **Definitions & Theory — Present:** Có định nghĩa sóng siêu âm, trở kháng âm, hiệu ứng áp điện, Doppler.
- **Mechanisms — Present:** Cơ chế sóng dọc/ngang, phản xạ/khuếch xạ, suy giảm, áp điện (phát/thu), Doppler, xâm thực (cavitation).
- **Equations — Present:** 5 công thức ($v=\sqrt{K/\rho}=\lambda f$; $Z=\rho v$; $R = ((Z_2-Z_1)/(Z_2+Z_1))^2$; $I(x)=I_0e^{-\mu x}$; Doppler $\Delta f = 2f_0v\cos\theta/c$).
- **Examples — Present:** 1 hộp ví dụ (độ sâu từ thời gian dội âm).
- **Case studies — Present:** UAE, liposome, Doppler, HIFU, phonophoresis.
- **Applications — Present:** Ứng dụng dược lý: chiết xuất siêu âm (UAE), điều chế liposome/liposome, phonophoresis, HIFU, rửa thiết bị y tế.
- **Questions/Exercises — Absent:** 0 câu hỏi, 0 bài tập trong nguồn (tập exercises riêng).
- **References — Absent:** 0 tài liệu tham khảo.
- **Figures/Tables — Absent:** 0 bảng và 0 hình, trong khi nội dung nói về sóng siêu âm, trở kháng âm, Doppler có thể minh họa bằng sơ đồ.

---

## D. Notation and Terminology Inventory

### D.1 Ký hiệu và đơn vị

| Symbol / unit | As written in source | Defined? | Location | Note |
|---|---|---|---|---|
| $f$ | `tần số dao động ($f > 20\text{ kHz}$)` | Yes | S-05.1 (dòng 3) | Tần số sóng siêu âm. |
| $v = \sqrt{K/\rho} = \lambda f$ | `vận tốc truyền âm ($v$): $v = \sqrt{K/\rho} \quad \text{và} \quad v = \lambda \cdot f$` | Yes | S-05.1 (dòng 6) | $K$: độ cứng/suất nén; $\rho$: khối lượng riêng; $\lambda$: bước sóng. |
| $v_{m\hat{o}} \approx 1540\text{ m/s}$ | `vận tốc truyền âm trung bình trong mô mềm quy ước là: $v_{m\hat{o}} \approx 1540\text{ m/s}$` | Yes | S-05.1 (dòng 10) | Tốc độ âm trong mô mềm. |
| $Z = \rho \cdot v$ | `trở kháng âm (Acoustic Impedance - $Z$): $Z = \rho \cdot v$` | Yes | S-05.2 (dòng 19) | Trở kháng âm. |
| $R = ((Z_2 - Z_1)/(Z_2 + Z_1))^2$ | `hệ số phản xạ cường độ ($R = ((Z_2 - Z_1)/(Z_2 + Z_1))^2$)` | Yes | S-05.2 (dòng 23) | Hệ số phản xạ cường độ. |
| $I(x) = I_0 \, e^{-\mu x}$ | `cường độ sóng âm giảm dần theo hàm mũ: $$I(x) = I_0 \, e^{-\mu x}$$` | Yes | S-05.2 (dòng 32) | Suy giảm cường độ sóng âm; $\mu$: hệ số suy giảm âm tổng cộng. |
| $\Delta f = \frac{2 f_0 v \cos\theta}{c}$ | `độ dịch chuyển tần số Doppler: $$\Delta f = \frac{2 f_0 v \cos\theta}{c}$$` | Yes | S-05.4 (dòng 57) | Hiệu ứng Doppler; $v$: vận tốc dòng máu; $\theta$: góc Doppler; $c$: vận tốc âm. |

### D.2 Thuật ngữ / Glossary candidates

| Thuật ngữ / Đại lượng | Dạng viết trong nguồn (`D-05`) | Dạng chuẩn hóa đề xuất | Ghi chú chuẩn hóa |
|---|---|---|---|
| Siêu âm | `Sóng siêu âm (Ultrasound)` | **Sóng siêu âm (ultrasound)** | Giữ nguyên. |
| Tần số dao động | `tần số dao động ($f > 20\text{ kHz} = 20.000\text{ Hz}$)` | **Tần số (frequency – $f$)** | Giữ nguyên. |
| Dạng sóng dọc | `sóng dọc (longitudinal wave)` | **Dạng sóng dọc (longitudinal wave)** | Giữ nguyên. |
| Vận tốc truyền âm | `Vận tốc truyền âm ($v$)` | **Vận tốc truyền âm (speed of sound – $v$)** | Giữ nguyên. |
| Trở kháng âm | `Trở kháng âm (Acoustic Impedance - $Z$)` | **Trở kháng âm (acoustic impedance – $Z$)** | Giữ nguyên. |
| Hệ số phản xạ | `Hệ số phản xạ cường độ ($R$)` | **Hệ số phản xạ (reflection coefficient – $R$)** | Giữ nguyên. |
| Hệ số truyền | `Hệ số truyền qua cường độ ($T$)` | **Hệ số truyền (transmission coefficient – $T$)** | Giữ nguyên. |
| Hệ số suy giảm âm | `Hệ số suy giảm âm tổng cộng ($\mu$)` | **Hệ số suy giảm âm (attenuation coefficient – $\mu$)** | Giữ nguyên. |
| Hiệu ứng áp điện | `Hiệu ứng áp điện (Piezoelectric Effect)` | **Hiệu ứng áp điện (piezoelectric effect)** | Giữ nguyên. |
| Hiệu ứng Doppler | `hiệu ứng Doppler` | **Hiệu ứng Doppler (Doppler effect)** | Giữ nguyên. |
| Cavitation | `Xâm thực sóng âm (Acoustic Cavitation)` | **Xâm thực sóng âm (acoustic cavitation)** | Giữ nguyên. |
| TI / MI | `Chỉ số nhiệt (Thermal Index - TI)`, `Chỉ số cơ học (Mechanical Index - MI)` | **Chỉ số nhiệt (TI)**, **Chỉ số cơ học (MI)** | Giữ nguyên. |
| ALARA | `Nguyên lý ALARA (As Low As Reasonably Achievable)` | **Nguyên lý ALARA** | Giữ nguyên. |

---

## E. Open Questions for Gate A (Câu hỏi xin ý kiến phê duyệt tại Gate A)

1. **Q1 (Tên chương):** `MANIFEST.md` ghi tên chương 05 là "Chương 4: Siêu âm trong Y Dược học (Ultrasound in Medicine & Pharmacy)". Nguồn file không có tên chương bên trong HTML. Bạn đồng ý dùng tên từ MANIFEST làm tiêu đề chương S3?
2. **Q2 (Nguồn vừa phải, 7 mục):** Nguồn chỉ 2407 từ, 7 mục, không có bài tập, không có bảng, không có hình. Bạn đồng ý S3 bổ sung khung sư phạm T1–T3 (kiến thức tiên kỳ, chuẩn đầu ra, thời lượng), bảng tổng hợp công thức, sơ đồ Mermaid, và bộ bài tập (gắn `[ADDED]`)?
3. **Q3 (Hình vẽ):** Nguồn có 0 bảng, 0 hình. Bạn đồng ý S3 đặt placeholder `[FIGURE]` cho sóng dọc/ngang, trở kháng âm, hình ảnh B-mode/Doppler?
4. **Q4 (Tài liệu tham khảo):** Nguồn có 0 trích dẫn và `APPROVED_REFERENCE_LIST: none`. Bạn đồng ý S3 để `[VERIFY: reference needed …]` và chờ cung cấp giáo trình chuẩn?

---

## F. Not verified / limitations

- **Phạm vi dữ liệu:** Chỉ dựa trên `00_source_original/ch05_doc-ld-c4.html` (D-05). File nguồn được giữ nguyên trạng tuyệt đối (READ-ONLY).
- **Tài liệu tham khảo:** Không có trích dẫn gốc trong D-05; tất cả công thức, giá trị số ($v \approx 1540\text{ m/s}$, $Z_{xương} \approx 6-8 \times 10^6\text{ Rayl}$, $TI < 1,0$, $MI \le 1,9$) sẽ gắn `[VERIFY]` khi viết nếu không có trong nguồn.
- **Nội dung bổ sung ngoài nguồn:** Khung sư phạm, bài tập, hình vẽ, bảng tổng hợp là kiến thức giáo trình chuẩn, chưa có trong D-05; cần người dùng duyệt ở Gate A (Q2, Q3).
- **Kiểm tra cơ haine:** Thống kê文档 bằng script Python (xem mục A); chưa có script `check_coverage.py` chuyên dụng cho audit (sẽ chạy tại S2/S3).
- **Giới hạn giai đoạn:** Dừng ngay tại GATE A theo R9 và mục 7.2; chưa thực hiện viết bản thảo Stage S3.

---
GATE A: STOP. Awaiting user approval of the Content Mapping Matrix. Do not begin the transformation.
