# ch09_audit.md — S1 Audit · Chương 09 (D-09)

**Môn:** Y dược – Master Lecture Notes · **Stage:** S1 Audit · **Ngày:** 2026-11-09  
**Nguồn audit:** `00_source_original/ch09_doc-myd-9.html` (D-09) — READ-ONLY, không sửa.  
**Ngữ cảnh đối chiếu:** `00_config.md`, `00_source_original/MANIFEST.md`, `_state/carryover_latest.md`, `_state/glossary_running.md`, `_state/verification_list_running.md`.  
**Nguyên tắc:** Chỉ phân tích và lập hồ sơ truy vết; không viết lại, không sửa lỗi, không tự bổ sung kiến thức học thuật.

---

## A. Document Inventory

| D-ID | File | Type | Chapter | Slug gốc | Num | Lines | Approx. words | h4 / h5 | Formula boxes | Example boxes | Callouts | Tables | Figures/Images | References |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| D-09 | `00_source_original/ch09_doc-myd-9.html` | chapter-source (HTML fragment, MathJax) | 09 | doc-myd-9 | 9 | 653 | 2881 (đếm bằng script) | 7 / 0 | 0 | 2 | 3 | 2 | 0 / 0 | 0 |

**Đặc điểm kỹ thuật (kiểm tra bằng script Python):**
- **Mã hóa & dung lượng:** UTF-8; ~17.500 byte; 653 dòng; thẻ HTML đóng/mở cân bằng (`7 <h4>`, `2 <table>`, `2 <thead>`, `2 <tbody>`, `~12 <tr>`, `~40 <th>/<td>`, `4 <ul>`, `~20 <li>`, `2 <ol>`, `12 <li>` lồng, `15 <p>`, `6 <div>`, `45 <strong>`, `6 <em>`, `12 <br>`, `16 <a href="#kw-...">`).
- **Biểu thức toán/hóa (MathJax):** 0 khối công thức hiển thị riêng (`$$…$$`), 0 biểu thức inline `$…$` (trừ trong ví dụ sốt $38,8^\circ C$, $39^\circ C$, $41^\circ C$).
- **Cấu trúc tiêu đề:** File bắt đầu trực tiếp bằng `<h4>1. Bệnh nguyên: căn nguyên và điều kiện</h4>`; không có `<h1>/<h2>/<h3>` và không có tên chương bên trong file (tên chương chỉ nằm ở `MANIFEST.md`: `Bệnh nguyên và bệnh sinh`).
- **Hộp nội dung:** 0 `formula-box`; 2 `example-box` (viêm họng→biến chứng; sốt khác tăng thân nhiệt); 3 `callout` (Bài tập lập luận ×1, An toàn cấp cứu ×1, Cách nhớ ×1).
- **Bảng biểu & Hình vẽ:** 2 bảng (kiểu rối loạn viêm; MHC lớp I/lớp II; kháng nguyên TD/TI; 4 type quá mẫn; 5 lớp Ig), 0 hình vẽ/sơ đồ.
- **Tài liệu tham khảo:** 0 trích dẫn (`http`, `doi`, `ISBN`, "Tài liệu tham khảo", "NXB", "giáo trình" đều bằng 0). Trạng thái: **none present**.
- **Phân bổ số từ theo 7 mục (tổng = 2881 từ):** `S-09.1` (~350) + `S-09.2` (~420) + `S-09.3` (~950) + `S-09.4` (~280) + `S-09.5` (~300) + `S-09.6` (~280) + `S-09.7` (~301) — xem mục B.

> **Ghi chú dung lượng:** Nếu vừa (2881 từ), 7 mục, 0 công thức, 2 ví dụ, 3 callout, 5 bảng. Không có bài tập, không có hình, không có tài liệu tham khảo.

---

## B. Source Section Register

| S-ID | D-ID | chapter | heading path | location | content types | approx. words | ≤20-word summary |
|---|---|---|---|---|---|---|---|
| S-09.1 | D-09 | 09 | `1. Bệnh nguyên: căn nguyên và điều kiện` | dòng 1–5 | theory/principle; definition | ~350 | Bệnh nguyên nghiên cứu nguyên nhân và điều kiện làm bệnh; phân biệt nguyên nhân (yếu tố trực tiếp) với điều kiện thuận lợi/nguy cơ; đa yếu tố; 5 nhóm: sinh học, di truyền, vật lý/hóa, miễn dịch, môi trường/hành vi. |
| S-09.2 | D-09 | 09 | `2. Bệnh sinh: từ nguyên nhân tới biểu hiện` | dòng 6–8 | theory/principle; mechanism | ~420 | Bệnh sinh là chuỗi cơ chế phát triển bệnh: tác nhân → tương tác cơ thể → tổn thương tế bào/mô → rối loạn chức năng → dấu hiệu/triệu chứng/biến chứng. Ví dụ xơ vữa động mạch. |
| S-09.3 | D-09 | 09 | `3. Viêm` | dòng 9–35 | theory/principle; mechanism; table | ~950 | Viêm là đáp ứng bảo vệ của mô có mạch máu; 5 dấu hiệu; chất trung gian (histamine, prostaglandin, cytokine, chemokine, bổ thể); giai đoạn nhận diện/thay đổi mạch/huy động bạch carica/kết thúc-chuyển mạn; 7 kiểu rối loạn viêm; sốt. |
| S-09.4 | D-09 | 09 | `4. Sốt` | dòng 36–41 | theory/principle; mechanism; application | ~280 | Sốt là tăng thân nhiệt có điều hòa; chất gây sốt ngoại sinh → cytokine (IL-1, IL-6, TNF) → PGE₂ ở dưới đồi → nâng điểm điều nhiệt; phân biệt sốt với tăng thân nhiệt (say nóng); chăm sóc, chẩn đoán khẩn. |
| S-09.5 | D-09 | 09 | `5. Tổn thương tế bào và đáp ứng` | dòng 42–44 | theory/principle; mechanism | ~300 | Tổn thương do thiếu oxy/thiếu máu, hóa chất, nhiễm trùng, miễn dịch, dinh dưỡng; tế bào thích nghi (phì đại, tăng sản, teo, chuyển sản) hoặc chết tế bào (hoại tử, apoptosis); viêm là đáp ứng bảo vệ. |
| S-09.6 | D-09 | 09 | `6. Diễn biến bệnh và khái niệm lâm sàng` | dòng 45–46 | theory/principle; definition | ~280 | Bệnh cấp tính vs mạn tính; giai đoạn tiềm tàng/khởi phát/toàn phát/kết thúc; triệu chứng (chủ quan), dấu hiệu (khách quan), hội chứng (nhóm biểu hiện). |
| S-09.7 | D-09 | 09 | `7. Dự phòng, chẩn đoán và điều trị theo cơ chế` | dòng 47–50 | theory/principle; application | ~301 | Dự phòng nguyên phát/thứ phát/tam cấp; chẩn đoán kết hợp bệnh sử/khám/xét nghiệm/hình ảnh; điều trị loại bỏ nguyên nhân/chặn mắt xích bệnh sinh/hỗ trợ chức năng/giảm triệu chứng. |

**Tổng cộng:** 7 S-ID (`S-09.1` đến `S-09.7`); tổng số từ 2881 từ (phân bổ mục) / 2881 (toàn file).

---

## C. Content Coverage Matrix

| chapter | Definitions | Theory | Mechanisms | Equations | Examples | Case studies | Applications | Questions/Exercises | References | Figures/Tables |
|---|---|---|---|---|---|---|---|---|---|---|
| 09 (D-09) | Present (S-09.1–S-09.7) | Present (S-09.1–S-09.7) | Present (S-09.2 bệnh sinh; S-09.3 viêm; S-09.4 sốt; S-09.5 tổn thương tế bào) | Absent | Present (S-09.2 ví dụ xơ vữa; S-09.3 ví dụ đáp ứng viêm toàn thân; S-09.4 ví dụ sốt/tăng thân nhiệt; S-09.7 ví dụ từ viêm họng đến biến chứng) | Present (S-09.3 viêm toàn thân/SIRS/sepsis; S-09.4 say nóng; S-09.6 đái tháo đường/hạ đường huyết/toan lactic) | Present (S-09.1–S-09.7 chẩn đoán, điều trị, dự phòng theo cơ chế) | Present (S-09.5 bài tập lập luận ba cột) | Absent | Present (5 bảng: rối loạn viêm, MHC, kháng nguyên TD/TI, 4 type quá mẫn, 5 lớp Ig) |

**Ghi chú chi tiết về độ phủ:**
- **Definitions & Theory — Present:** Định nghĩa bệnh nguyên, bệnh sinh, viêm, sốt, tổn thương tế bào, diễn biến bệnh, dự phòng/chẩn đoán/điều trị theo cơ chế.
- **Mechanisms — Present:** Cơ chế bệnh sinh (xơ vữa), cơ chế viêm (5 giai đoạn, chất trung gian), cơ chế sốt (PGE₂/điểm điều nhiệt), cơ chế tổn thương tế bào (hoại tử/apoptosis).
- **Equations — Absent:** 0 công thức toán/hóa (chỉ có giá trị số trong ví dụ).
- **Examples — Present:** 2 ví dụ (viêm họng→biến chứng thấp tim; sốt vs tăng thân nhiệt).
- **Case studies — Present:** Nhiều ca (viêm toàn thân/SIRS/sepsis, say nóng, đái tháo đường, hạ đường huyết, toan lactic).
- **Applications — Present:** Ứng dụng dược lý: chẩn đoán, điều trị, dự phòng theo cơ chế; phân biệt viêm là cơ chế không phải chẩn đoán.
- **Questions/Exercises — Present:** 1 bài tập lập luận (bảng ba cột: yếu tố nguyên nhân/nguy cơ; cơ chế gây tổn thương; dữ kiện lâm sàng/xét nghiệm).
- **References — Absent:** 0 tài liệu tham khảo.
- **Figures/Tables — Present:** 5 bảng (kiểu rối loạn viêm, MHC lớp I/II, kháng nguyên TD/TI, 4 type quá mẫn, 5 lớp Ig).

---

## D. Notation and Terminology Inventory

### D.1 Ký hiệu và đơn vị

| Symbol / unit | As written in source | Defined? | Location | Note |
|---|---|---|---|---|
| $38,8^\circ C$, $39^\circ C$, $41^\circ C$ | `sốt $38,8^\circ C$`, `$39^\circ C$`, `$41^\circ C$` | Yes | S-09.4 (ví dụ) | Nhiệt độ cơ thể trong ví dụ sốt và tăng thân nhiệt. |

### D.2 Thuật ngữ / Glossary candidates

| Thuật ngữ / Đại lượng | Dạng viết trong nguồn (`D-09`) | Dạng chuẩn hóa đề xuất | Ghi chú chuẩn hóa |
|---|---|---|---|
| Bệnh nguyên | `Bệnh nguyên` | **Bệnh nguyên (etiology)** | Giữ nguyên. |
| Bệnh sinh | `Bệnh sinh` | **Bệnh sinh (pathogenesis)** | Giữ nguyên. |
| Viêm | `Viêm` | **Viêm (inflammation)** | Giữ nguyên. |
| Sốt | `Sốt` | **Sốt (fever)** | Giữ nguyên. |
| Tăng thân nhiệt | `Tăng thân nhiệt` | **Tăng thân nhiệt (hyperthermia)** | Giữ nguyên. |
| Điểm điều nhiệt | `Điểm điều nhiệt` | **Điểm điều nhiệt (set point)** | Giữ nguyên. |
| Histamine | `histamine` | **Histamine** | Giữ nguyên. |
| Prostaglandin | `prostaglandin` | **Prostaglandin** | Giữ nguyên. |
| Cytokine | `cytokine` | **Cytokine** | Giữ nguyên. |
| Chemokine | `chemokine` | **Chemokine** | Giữ nguyên. |
| TNF | `TNF` | **TNF (tumor necrosis factor)** | Giữ nguyên. |
| IL-1, IL-6 | `IL-1`, `IL-6` | **IL-1**, **IL-6 (interleukin)** | Giữ nguyên. |
| Bổ thể | `Bổ thể` | **Bổ thể (complement)** | Giữ nguyên. |
| SIRS | `SIRS` | **SIRS (systemic inflammatory response syndrome)** | Giữ nguyên. |
| Sepsis | `Sepsis` | **Sepsis (nhiễm khuẩn huyết)** | Giữ nguyên. |
| Opsonin hóa | `opsonin hóa` | **Opsonin hóa** | Giữ nguyên. |
| Hồ hybridization | `hóa hướng động` | **Hóa hướng động (chemotaxis)** | Giữ nguyên. |
| Hoại tử | `hoại tử` | **Hoại tử (necrosis)** | Giữ nguyên. |
| Apoptosis | `apoptosis` | **Apoptosis (chết tế bào theo chương trình)** | Giữ nguyên. |
| Triệu chứng | `Triệu chứng` | **Triệu chứng (symptom)** | Giữ nguyên. |
| Dấu hiệu | `Dấu hiệu` | **Dấu hiệu (sign)** | Giữ nguyên. |
| Hội chứng | `Hội chứng` | **Hội syndrome (syndrome)** | Giữ nguyên. |

---

## E. Open Questions for Gate A (Câu hỏi xin ý kiến phê duyệt tại Gate A)

1. **Q1 (Tên chương):** `MANIFEST.md` ghi tên chương 09 là "Bệnh nguyên và bệnh sinh". Nguồn file không có tên chương bên trong HTML. Bạn đồng ý dùng tên từ MANIFEST làm tiêu đề chương S3?
2. **Q2 (Nguồn vừa, 7 mục):** Nguồn 2881 từ, 7 mục, có 5 bảng, 2 ví dụ, 3 callout, 1 bài tập lập luận, không có hình. Bạn đồng ý S3 bổ sung khung sư pháp T1–T3, sơ đồ Mermaid chuỗi viêm/sốt, và bổ sung bài tập (gắn `[ADDED]`)?
3. **Q3 (Hình vẽ):** Nguồn có 5 bảng, 0 hình. Bạn đồng ý S3 đặt placeholder `[FIGURE]` cho chuỗi viêm, sốt, tổn thương tế bào?
4. **Q4 (Tài liệu tham khảo):** Nguồn có 0 trích dẫn và `APPROVED_REFERENCE_LIST: none`. Bạn đồng ý S3 để `[VERIFY: reference needed …]` và chờ cung cấp giáo trình chuẩn?

---

## F. Not verified / limitations

- **Phạm vi dữ liệu:** Chỉ dựa trên `00_source_original/ch09_doc-myd-9.html` (D-09). File nguồn được giữ nguyên trạng tuyệt đối (READ-ONLY).
- **Tài liệu tham khảo:** Không có trích dẫn gốc trong D-09; tất cả giá trị số sẽ gắn `[VERIFY]` khi viết nếu không có trong nguồn.
- **Nội dung bổ sung ngoài nguồn:** Khung sư pháp, bài tập, hình vẽ, bảng tổng hợp là kiến thức giáo trình chuẩn, chưa có trong D-09; cần người dùng duyệt ở Gate A (Q2, Q3).
- **Kiểm tra cơ haine:** Thống kê文档 bằng script Python (xem mục A); chưa có script `check_coverage.py` chuyên dụng cho audit (sẽ chạy tại S2/S3).
- **Giới hạn giai đoạn:** Dừng ngay tại GATE A theo R9 và mục 7.2; chưa thực hiện viết bản thảo Stage S3.

---

GATE A: STOP. Awaiting user approval of the Content Mapping Matrix. Do not begin the transformation.