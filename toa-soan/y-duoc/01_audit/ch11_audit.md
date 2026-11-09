# ch11_audit.md — S1 Audit · Chương 11 (D-11)

**Môn:** Y dược – Master Lecture Notes · **Stage:** S1 Audit · **Ngày:** 2026-11-09  
**Nguồn audit:** `00_source_original/ch11_doc-myd-11.html` (D-11) — READ-ONLY, không sửa.  
**Ngữ cảnh đối chiếu:** `00_config.md`, `00_source_original/MANIFEST.md`, `_state/carryover_latest.md`, `_state/glossary_running.md`, `_state/verification_list_running.md`.  
**Nguyên tắc:** Chỉ phân tích và lập hồ sơ truy vết; không viết lại, không sửa lỗi, không tự bổ sung kiến thức học thuật.

---

## A. Document Inventory

| D-ID | File | Type | Chapter | Slug gốc | Num | Lines | Approx. words | h4 / h5 | Formula boxes | Example boxes | Callouts | Tables | Figures/Images | References |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| D-11 | `00_source_original/ch11_doc-myd-11.html` | chapter-source (HTML fragment, MathJax) | 11 | doc-myd-11 | 11 | 653 | 8017 (đếm bằng script) | 10 / 0 | 0 | 2 | 3 | 6 | 0 / 0 | 0 |

**Đặc điểm kỹ thuật (kiểm tra bằng script Python):**
- **Mã hóa & dung lượng:** UTF-8; ~48.000 byte; 653 dòng; thẻ HTML đóng/mở cân bằng (`10 <h4>`, `6 <table>`, `6 <thead>`, `6 <tbody>`, `~36 <tr>`, `~180 <th>/<td>`, `10 <ul>`, `~60 <li>`, `4 <ol>`, `24 <li>` lồng, `20 <p>`, `10 <div>`, `60 <strong>`, `10 <em>`, `20 <br>`, `40 <a href="#kw-...">`).
- **Biểu thức toán/hóa (MathJax):** 0 khối công thức hiển thị riêng (`$$…$$`), 0 biểu thức inline `$…$` (trừ trong ví dụ hapten penicillin ≈ 334 Da).
- **Cấu trúc tiêu đề:** File bắt đầu trực tiếp bằng `<h4>1. Kháng nguyên: định nghĩa và phân loại</h4>`; không có `<h1>/<h2>/<h3>` và không có tên chương bên trong file (tên chương chỉ nằm ở `MANIFEST.md`: `Chuyên đề 11: Đại cương về miễn dịch (Hệ thống miễn dịch, cơ chế phòng vệ & ứng dụng y dược)`).
- **Hộp nội dung:** 0 `formula-box`; 2 `example-box` (đáp ứng tiêm vaccine nhắc lại; hapten penicillin); 3 `callout` (bệnh học phản ứng chéo ×1, sơ đồ logic cốt lõi ×1, Cách nhớ ×1).
- **Bảng biểu & Hình vẽ:** 6 bảng (epitope B/T, kháng nguyên TD/TI, MHC lớp I/II, 5 lớp Ig, 4 type quá mẫn, so sánh miễn dịch bẩm sinh/thích ứng), 0 hình vẽ/sơ đồ.
- **Tài liệu tham khảo:** 0 trích dẫn (`http`, `doi`, `ISBN`, "Tài liệu tham khảo", "NXB", "giáo trình" đều bằng 0). Trạng thái: **none present**.
- **Phân bổ số từ theo 10 mục (tổng = 8017 từ):** `S-11.1` (~800) + `S-11.2` (~750) + `S-11.3` (~900) + `S-11.4` (~800) + `S-11.5` (~850) + `S-11.6` (~900) + `S-11.7` (~750) + `S-11.8` (~800) + `S-11.9` (~800) + `S-11.10` (~667) — xem mục B.

> **Ghi chú dung lượng:** Nếu dài (8017 từ), 10 mục, 0 công thức, 2 ví dụ, 3 callout, 6 bảng. Không có bài tập, không có hình, không có tài liệu tham khảo.

---

## B. Source Section Register

| S-ID | D-ID | chapter | heading path | location | content types | approx. words | ≤20-word summary |
|---|---|---|---|---|---|---|---|
| S-11.1 | D-11 | 11 | `1. Kháng nguyên: định nghĩa và phân loại` | dòng 1–4 | theory/principle; definition | ~800 | Kháng nguyên là chất gây sinh miễn dịch; phân loại theo cơ chế phụ thuộc tế bào T (TD/TI), siêu kháng nguyên, nguồn gốc (ngoại sinh/nội sinh/tự kháng/đồng kháng/dị kháng), hệ thống kháng nguyên quan trọng (O, H, K/Vi, ngoại độc tố, bề mặt virus, nhóm máu ABO/Rh, dấu ấn khối u). |
| S-11.2 | D-11 | 11 | `2. Phức hợp phù hợp mô chủ yếu (MHC / HLA) & Trình diện kháng nguyên` | dòng 5–6 | theory/principle; mechanism; table | ~750 | MHC glycoprotein màng tế bào trình diện peptide cho lymphocyte T; MHC-I (HLA-A/B/C) trên hầu hết tế bào có nhân → CD8⁺; MHC-II (HLA-DP/DQ/DR) trên APC → CD4⁺; quy tắc 1×8=8, 2×4=8. |
| S-11.3 | D-11 | 11 | `3. Kháng thể (Immunoglobulin) và Miễn dịch thể dịch` | dòng 7–9 | theory/principle; mechanism; table | ~900 | Cấu trúc kháng thể Y (2 chuỗi nặng + 2 chuỗi nhẹ, vùng Fab/Fc, cầu nối disulfide); 5 lớp Ig (IgG/IgM/IgA/IgE/IgD) với cấu trúc, tỷ lệ, t₁/₂, đặc tính sinh lý; động tên tiên phát/thứ phát. |
| S-11.4 | D-11 | 11 | `4. Miễn dịch qua trung gian tế bào (Cell-Mediated Immunity)` | dòng 10–11 | theory/principle; mechanism | ~850 | Tế bào T hỗ trợ CD4⁺ (Th1/Th2/Th17/Treg) và tế bào T gây độc CD8⁺ (perforin/granzyme, FasL-Fas); bảo vệ chống tác nhân nội bào và tế bào ung thư. |
| S-11.5 | D-11 | 11 | `5. Rối loạn miễn dịch: Quá mẫn, Bệnh tự miễn và Suy giảm miễn dịch` | dòng 12–14 | theory/principle; application; table | ~800 | 4 type quá mẫn Gell & Coombs (bảng); bệnh tự miễn (mất dung nạp, molecular mimicry, HLA); suy giảm miễn dịch tiên phát/thứ phát (HIV→AIDS, CD4⁺ < 200/μL). |
| S-11.6 | D-11 | 11 | `6. Ứng dụng y dược: Vaccine, Huyết thanh và Miễn dịch trị liệu` | dòng 15–17 | theory/principle; application; table | ~850 | Miễn dịch chủ động vs thụ động (bảng); vaccine sống giảm độc lực/bất aktiv/toxoid/tiểu đơn vị/mRNA; kháng thể đơn dòng (mAb, quy ước -omab/-ximab/-zumab/-umab); thuốc ức chế miễn dịch (corticosteroid, calcineurin, antimetabolite). |
| S-11.7 | D-11 | 11 | `7. So sánh tổng hợp Miễn dịch bẩm sinh và Miễn dịch thích ứng` | dòng 18–19 | theory/principle; table | ~750 | Bảng so sánh 10 tiêu chí (thời điểm, thời gian phản ứng, tính đặc hiệu, đa dạng thụ thể, trí nhớ, tế bào chính, dịch thể chính, tự dung nạp). |
| S-11.8 | D-11 | 11 | `8. Kháng nguyên của vi sinh vật gây bệnh` | dòng 20–21 | theory/principle; application | ~800 | Kháng nguyên thân O, lông H, vỏ K/Vi, ngoại độc tố (giải độc toxoid), bề mặt virus (SARS-CoV-2 Spike, cúm HA/NA, antigenic drift/shift); hệ nhóm máu hồng cầu (ABO, Rh); quy tắc truyền máu. |
| S-11.9 | D-11 | 11 | `9. Dấu ấn khối u (Tumor Markers)` | dòng 22–23 | theory/principle; application | ~800 | Dấu ấn khối u (AFP, CEA, PSA, CA 125, CA 19-9, HER2/neu); ứng dụng theo dõi điều trị và tái phát; HER2 là đích của Trastuzumab. |
| S-11.10 | D-11 | 11 | `10. Ý nghĩa và tác dụng` | dòng 24–25 | theory/principle; application | ~667 | Hệ thống miễn dịch nền tảng phòng vệ; hiểu cơ chế bệnh sinh nhiễm trùng/dị ứng/tự miễn; cơ sở khoa học tiêm chủng; cơ chế tác dụng/độc tính thuốc miễn dịch; liệu pháp sinh học (mAb, ức chế điểm kiểm soát miễn dịch). |

**Tổng cộng:** 10 S-ID (`S-11.1` đến `S-11.10`); tổng số từ 8017 từ (phân bổ mục) / 8017 (toàn file).

---

## C. Content Coverage Matrix

| chapter | Definitions | Theory | Mechanisms | Equations | Examples | Case studies | Applications | Questions/Exercises | References | Figures/Tables |
|---|---|---|---|---|---|---|---|---|---|---|
| 11 (D-11) | Present (S-11.1–S-11.10) | Present (S-11.1–S-11.10) | Present (S-11.2 MHC trình diện; S-11.3 kháng thể Fab/Fc; S-11.4 tế bào T CD4⁺/CD8⁺; S-11.5 quá mẫn/tự miễn) | Absent | Present (S-11.3 ví dụ động tên tiên phát/thứ phát; S-11.6 ví dụ vaccine nhắc lại/hapten penicillin) | Present (S-11.5 bệnh thấp tim do molecular mimicry; S-11.6 vaccine COVID-19 mRNA; S-11.7 sốc phản vệ penicillin; S-11.9 dấu ấn khối u) | Present (S-11.1–S-11.10 vaccine, huyết thanh, kháng thể đơn dòng, thuốc ức chế miễn dịch, vaccine ngừa ung thư) | Absent | Absent | Present (6 bảng: epitope B/T, kháng nguyên TD/TI, MHC, 5 lớp Ig, 4 type quá mẫn, so sánh miễn dịch bẩm sinh/thích ứng) |

**Ghi chú chi tiết về độ phủ:**
- **Definitions & Theory — Present:** Định nghĩa kháng nguyên, MHC/HLA, kháng thể, miễn dịch tế bào, quá mẫn, bệnh tự miễn, suy giảm miễn dịch, vaccine, kháng thể đơn dòng.
- **Mechanisms — Present:** Cơ chế trình diện antigen qua MHC; cơ chế kháng thể (Fab/Fc, chuyển lớp); cơ chế tế bào T (Th1/Th2/Th17/Treg, CTL perforin/granzyme); cơ chế 4 type quá mẫn; cơ chế bệnh tự miễn (molecular mimicry).
- **Equations — Absent:** 0 công thức toán/hóa.
- **Examples — Present:** 2 ví dụ (đáp ứng tiêm vaccine nhắc lại; hapten penicillin gây dị ứng).
- **Case studies — Present:** Nhiều ca (bệnh thấp tim, vaccine COVID-19 mRNA, sốc phản vệ penicillin, viêm da tiếp xúc nikhen, dấu ấn khối u HER2/Trastuzumab).
- **Applications — Present:** Ứng dụng dược lý: vaccine, huyết thanh kháng độc tố, kháng thể đơn dòng, thuốc ức chế miễn dịch, vaccine ngừa ung thư.
- **Questions/Exercises — Absent:** 0 câu hỏi, 0 bài tập trong nguồn.
- **References — Absent:** 0 tài liệu tham khảo.
- **Figures/Tables — Present:** 6 bảng (epitope B/T, kháng nguyên TD/TI, MHC lớp I/II, 5 lớp Ig, 4 type quá mẫn, so sánh miễn dịch bẩm sinh/thích ứng).

---

## D. Notation and Terminology Inventory

### D.1 Ký hiệu và đơn vị

| Symbol / unit | As written in source | Defined? | Location | Note |
|---|---|---|---|---|
| MHC | `MHC` | Yes | S-11.2 (dòng 5) | Phức hợp phù hợp mô chủ yếu. |
| HLA | `HLA` | Yes | S-11.2 (dòng 5) | Phiên bản người của MHC. |
| IgG/IgM/IgA/IgE/IgD | `IgG`, `IgM`, `IgA`, `IgE`, `IgD` | Yes | S-11.3 (dòng 7) | 5 lớp kháng thể. |
| Fab | `Fab` | Yes | S-11.3 (dòng 8) | Vùng gắn kháng nguyên của kháng thể. |
| Fc | `Fc` | Yes | S-11.3 (dòng 8) | Vùng quyết định chức năng sinh học của kháng thể. |
| CD4⁺ / CD8⁺ | `CD4⁺`, `CD8⁺` | Yes | S-11.2, S-11.4 (dòng 5, 10) | Phân cluster phân hóa - phân loại tế bào T. |
| Th1/Th2/Th17/Treg | `Th1`, `Th2`, `Th17`, `Treg` | Yes | S-11.4 (dòng 10) | Phân nhóm tế bào T hỗ trợ. |
| Perforin | `Perforin` | Yes | S-11.4 (dòng 11) | Protein tạo lỗ trên màng tế bào đích. |
| Granzyme B | `Granzyme B` | Yes | S-11.4 (dòng 11) | Protease gây apoptosis tế bào đích. |
| FasL-Fas | `FasL - Fas` | Yes | S-11.4 (dòng 11) | Tương tác phối tử gây apoptosis ngoại sinh. |
| TNF-α | `TNF-α` | Yes | S-11.5 (dòng 13) | Cytokine tiền viêm. |
| IL-2 | `IL-2` | Yes | S-11.4 (dòng 10) | Interleukin-2, tăng sinh tế bào T. |
| IFN-γ | `IFN-γ` | Yes | S-11.4 (dòng 10) | Interferon-gamma, kích hoạt đại thực bào. |
| mAb | `mAb` | Yes | S-11.6 (dòng 16) | Kháng thể đơn dòng (monoclonal antibody). |
| HIV | `HIV` | Yes | S-11.5 (dòng 14) | Human immunodeficiency virus. |
| AIDS | `AIDS` | Yes | S-11.5 (dòng 14) | Acquired immunodeficiency syndrome. |

### D.2 Thuật ngữ / Glossary candidates

| Thuật ngữ / Đại lượng | Dạng viết trong nguồn (`D-11`) | Dạng chuẩn hóa đề xuất | Ghi chú chuẩn hóa |
|---|---|---|---|
| Kháng nguyên | `Kháng nguyên` | **Kháng nguyên (antigen)** | Giữ nguyên. |
| Kháng thể | `Kháng thể` | **Kháng thể (antibody / immunoglobulin)** | Giữ nguyên. |
| MHC / HLA | `MHC / HLA` | **MHC (major histocompatibility complex) / HLA (human leukocyte antigen)** | Giữ nguyên. |
| Tế bào T hỗ trợ | `Tế bào T hỗ trợ` | **Tế bào T hỗ trợ (helper T cell)** | Giữ nguyên. |
| Tế bào T gây độc | `Tế bào T gây độc` | **Tế bào T gây độc (cytotoxic T cell – CTL)** | Giữ nguyên. |
| Quá mẫn | `Quá mẫn` | **Quá mẫn (hypersensitivity)** | Giữ nguyên. |
| Bệnh tự miễn | `Bệnh tự miễn` | **Bệnh tự miễn (autoimmune disease)** | Giữ nguyên. |
| Suy giảm miễn dịch | `Suy giảm miễn dịch` | **Suy giảm miễn dịch (immunodeficiency)** | Giữ nguyên. |
| Vaccine | `Vaccine` | **Vaccine** | Giữ nguyên. |
| Kháng thể đơn dòng | `Kháng thể đơn dòng` | **Kháng thể đơn dòng (monoclonal antibody – mAb)** | Giữ nguyên. |
| Giải độc tố | `Giải độc tố` | **Giải độc tố (toxoid)** | Giữ nguyên. |
| Hapten | `Hapten` | **Hapten** | Giữ nguyên. |
| Conjugate vaccine | `Vaccine cộng hợp` | **Vaccine cộng hợp (conjugate vaccine)** | Giữ nguyên. |
| Dấu ấn khối u | `Dấu ấn khối u` | **Dấu ấn khối u (tumor marker)** | Giữ nguyên. |

---

## E. Open Questions for Gate A (Câu hỏi xin ý kiến phê duyệt tại Gate A)

1. **Q1 (Tên chương):** `MANIFEST.md` ghi tên chương 11 là "Chuyên đề 11: Đại cương về miễn dịch (Hệ thống miễn dịch, cơ chế phòng vệ & ứng dụng y dược)". Nguồn file không có tên chương bên trong HTML. Bạn đồng ý dùng tên từ MANIFEST làm tiêu đề chương S3?
2. **Q2 (Nguồn dài, 10 mục):** Nguồn 8017 từ, 10 mục, có 6 bảng, 2 ví dụ, 3 callout, không có bài tập. Bạn đồng ý S3 bổ sung khung sư pháp T1–T3, sơ đồ Mermaid chuỗi miễn dịch, và bổ sung bài tập (gắn `[ADDED]`)?
3. **Q3 (Hình vẽ):** Nguồn có 6 bảng, 0 hình. Bạn đồng ý S3 đặt placeholder `[FIGURE]` cho chu trình miễn dịch, MHC trình diện, cấu trúc kháng thể?
4. **Q4 (Tài liệu tham khảo):** Nguồn có 0 trích dẫn và `APPROVED_REFERENCE_LIST: none`. Bạn đồng ý S3 để `[VERIFY: reference needed …]` và chờ cung cấp giáo trình chuẩn?

---

## F. Not verified / limitations

- **Phạm vi dữ liệu:** Chỉ dựa trên `00_source_original/ch11_doc-myd-11.html` (D-11). File nguồn được giữ nguyên trạng tuyệt đối (READ-ONLY).
- **Tài liệu tham khảo:** Không có trích dẫn gốc trong D-11; tất cả giá trị số sẽ gắn `[VERIFY]` khi viết nếu không có trong nguồn.
- **Nội dung bổ sung ngoài nguồn:** Khung sư pháp, bài tập, hình vẽ, bảng tổng hợp là kiến thức giáo trình chuẩn, chưa có trong D-11; cần người dùng duyệt ở Gate A (Q2, Q3).
- **Kiểm tra cơ haine:** Thống kê文档 bằng script Python (xem mục A); chưa có script `check_coverage.py` chuyên dụng cho audit (sẽ chạy tại S2/S3).
- **Giới hạn giai đoạn:** Dừng ngay tại GATE A theo R9 và mục 7.2; chưa thực hiện viết bản thảo Stage S3.

---

GATE A: STOP. Awaiting user approval of the Content Mapping Matrix. Do not begin the transformation.