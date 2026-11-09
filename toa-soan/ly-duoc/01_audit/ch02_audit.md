# ch02_audit.md — S1 Audit · Chương 02 (D-02)

**Môn:** Lý dược – Master Lecture Notes · **Stage:** S1 Audit · **Ngày:** 2026-11-09  
**Nguồn audit:** `00_source_original/ch02_doc-ld-2.html` (D-02) — READ-ONLY, không sửa.  
**Ngữ cảnh đối chiếu:** `00_config.md`, `00_source_original/MANIFEST.md`, `_state/carryover_latest.md`, `_state/glossary_running.md`, `_state/verification_list_running.md`, `01_audit/ch01_audit.md`.  
**Nguyên tắc:** Chỉ phân tích và lập hồ sơ truy vết; không viết lại, không sửa lỗi, không tự bổ sung kiến thức học thuật.

---

## A. Document Inventory

| D-ID | File | Type | Chapter | Slug gốc | Num | Lines | Approx. words | h4 / h5 | Formula boxes | Example boxes | Callouts | Tables | Figures/Images | References |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| D-02 | `00_source_original/ch02_doc-ld-2.html` | chapter-source (HTML fragment, MathJax) | 02 | doc-ld-2 | 2 | 33 | 574 (đếm bằng script) | 3 / 0 | 2 | 1 | 2 | 0 | 0 / 0 | 0 |

**Đặc điểm kỹ thuật (kiểm tra bằng script Python):**
- **Mã hóa & dung lượng:** UTF-8; 4.402 byte; 33 dòng; thẻ HTML đóng/mở cân bằng (`3 <h4>`, `2 <ul>`, `6 <li>`, `3 <p>`, `6 <div>`, `14 <strong>`, `1 <em>`, `5 <br>`).
- **Biểu thức toán/hóa (MathJax):** 2 khối công thức hiển thị riêng (`$$…$$`, tức 4 dấu `$$`), 66 biểu thức inline `$…$`.
- **Cấu trúc tiêu đề:** File bắt đầu trực tiếp bằng `<h4>1. Điện thế nghỉ (Resting Membrane Potential)</h4>`; không có `<h1>/<h2>/<h3>` và không có tên chương bên trong file (tên chương chỉ nằm ở `MANIFEST.md`: *Chuyên đề 2: Điện thế sinh học & Tín hiệu điện từ của màng tế bào*).
- **Hộp nội dung:** 2 `formula-box` (Nernst; GHK); 1 `example-box` (Nernst của K⁺ ở 37°C); 2 `callout` (Cách nhớ ×2).
- **Bảng biểu & Hình vẽ:** 0 bảng (`<table>`), 0 hình vẽ/sơ đồ.
- **Tài liệu tham khảo:** 0 trích dẫn (`http`, `doi`, `ISBN`, "Tài liệu tham khảo", "NXB", "giáo trình" đều bằng 0). Trạng thái: **none present**.
- **Phân bổ số từ theo 3 mục (tổng = 555 từ):** `S-02.1` (~179) + `S-02.2` (~135) + `S-02.3` (~241).

> **Ghi chú dung lượng:** Nguồn ngắn (574 từ), chỉ 3 mục, 2 công thức, 1 ví dụ. Không có bài tập, không có bảng, không có hình, không có tài liệu tham khảo.

---

## B. Source Section Register

| S-ID | D-ID | chapter | heading path | location | content types | approx. words | ≤20-word summary |
|---|---|---|---|---|---|---|---|
| S-02.1 | D-02 | 02 | `1. Điện thế nghỉ (Resting Membrane Potential)` | dòng 1–11 | theory/principle; equation/model; definition | ~179 | Phương trình Nernst (theo cân bằng ion đơn lẻ); phương trình GHK (điện thế nghỉ tổng thể tính đến độ thấm nhiều ion); điện thế nghỉ ≈ −70 đến −90 mV. |
| S-02.2 | D-02 | 02 | `2. Điện thế hoạt động (Action Potential)` | dòng 13–19 | theory/principle; mechanism/process; example (application) | ~135 | Khử cực (Na⁺ vào), tái cực (K⁺ ra), trơ tuyệt đối/tương đối; ứng dụng ECG/EEG. |
| S-02.3 | D-02 | 02 | `Ý nghĩa và tác dụng` (không đánh số) | dòng 21–33 | other (summary); application; example (boxed); callout | ~241 | Điện sinh học là cơ sở xung thần kinh, co cơ, tim; diễn giải ECG/EEG; thuốc chẹn kênh ion; ví dụ Nernst K⁺; tăng kali máu → loạn nhịp. |

**Tổng cộng:** 3 S-ID (`S-02.1` đến `S-02.3`); tổng số từ 555 từ (phân bổ mục) / 574 (toàn file).

---

## C. Content Coverage Matrix

| chapter | Definitions | Theory | Mechanisms | Equations | Examples | Case studies | Applications | Questions/Exercises | References | Figures/Tables |
|---|---|---|---|---|---|---|---|---|---|---|
| 02 (D-02) | Present (S-02.1, S-02.2) | Present (S-02.1, S-02.2) | Present (S-02.1 Nernst/GHK; S-02.2 khử cực/tái cực/trơ) | Present (S-02.1 Nernst; GHK) | Present (S-02.2 ví dụ inline Re/K⁺; S-02.3 hộp ví dụ Nernst K⁺) | Absent | Present (S-02.1–S-02.3 đều có ứng dụng dược: ECG/EEG, thuốc chẹn kênh ion, tăng kali máu) | Absent | Absent | Absent (0 bảng, 0 hình vẽ) |

**Ghi chú chi tiết về độ phủ:**
- **Definitions & Theory — Present:** Có định nghĩa điện thế nghỉ, điện thế hoạt động, phương trình Nernst, GHK, khử cực/tái cực/trơ.
- **Mechanisms — Present:** Cơ chế khử cực (Na⁺ vào), tái cực (K⁺ ra), trơ tuyệt đối/tương đối; GHK liên hệ độ thấm ion với điện thế.
- **Equations — Present:** 2 công thức (Nernst; GHK).
- **Examples — Present:** 1 hộp ví dụ (Nernst K⁺), ví dụ inline (Re/K⁺, ECG/EEG).
- **Case studies — Absent:** 0 ca bệnh cụ thể.
- **Applications — Present:** Ứng dụng dược lý: ECG/EEG, thuốc chẹn kênh ion, tăng kali máu → loạn nhịp.
- **Questions/Exercises — Absent:** 0 câu hỏi, 0 bài tập trong nguồn (tập exercises riêng).
- **References — Absent:** 0 tài liệu tham khảo.
- **Figures/Tables — Absent:** 0 bảng và 0 hình, trong khi nội dung nói về gradient ion, điện thế màng, ECG/EEG có thể minh họa bằng sơ đồ.

---

## D. Notation and Terminology Inventory

### D.1 Ký hiệu và đơn vị

| Symbol / unit | As written in source | Defined? | Location | Note |
|---|---|---|---|---|
| $E_{ion}$ | `$E_{ion} = \frac{RT}{zF} \ln \frac{[ion]_{ngoài}}{[ion]_{trong}}$` | Yes | S-02.1 (dòng 4) | Thế Nernst cho ion đơn lẻ. |
| $E_m` | `$E_m = \frac{RT}{F} \ln (...)$` | Yes | S-02.1 (dòng 7) | Điện thế nghỉ tổng thể (GHK). |
| $R, T, F` | `$R$` (hằng số khí), `$T$` (nhiệt độ), `$F$` (hằng số Faraday) | Implicit | S-02.1 (dòng 4–7) | Các hằng số vật lý không định nghĩa rõ trong nguồn. |
| $z$ | `$z$` (số hiệu ion) | Yes | S-02.1 (dòng 4) | Số hiệu ion (ví dụ $z = +1$ cho $K^+$). |
| $[ion]_{ngoài}, [ion]_{trong}` | `nồng độ ion ngoài/trong` | Yes | S-02.1 (dòng 4) | Nồng độ ion bên ngoài/trong màng. |
| $P_{K}, P_{Na}, P_{Cl}` | `độ thấm ($P$) của nhiều ion ($K^+, Na^+, Cl^-$)` | Yes | S-02.1 (dòng 7) | Độ thấm màng đối với từng ion. |
| $-70 \text{ đến } -90\text{ mV}$ | `$E_m \approx -70 \text{ đến } -90\text{ mV}$` | Yes | S-02.1 (dòng 8) | Điện thế nghỉ típpical. |
| $+30\text{ mV}$ | `$+30\text{ mV}$` | Yes | S-02.2 (dòng 15) | Điện thế đỉnh khử cực. |

### D.2 Thuật ngữ / Glossary candidates

| Thuật ngữ / Đại lượng | Dạng viết trong nguồn (`D-02`) | Dạng chuẩn hóa đề xuất | Ghi chú chuẩn hóa |
|---|---|---|---|
| Điện thế nghỉ | `Điện thế nghỉ (Resting Membrane Potential)` | **Điện thế nghỉ (resting membrane potential)** | Giữ nguyên. |
| Phương trình Nernst | `Phương trình Nernst` | **Phương trình Nernst (Nernst equation)** | Giữ nguyên. |
| Phương trình GHK | `Phương trình Goldman - Hodgkin - Katz (GHK)` | **Phương trình Goldman-Hodgkin-Katz (GHK equation)** | Giữ nguyên. |
| Điện thế hoạt động | `Điện thế hoạt động (Action Potential)` | **Điện thế hoạt động (action potential)** | Giữ nguyên. |
| Khử cực / Tái cực | `Khử cực`, `Tái cực` | **Khử cực (depolarization)** / **Tái cực (repolarization)** | Giữ nguyên. |
| Trơ tuyệt đối / tương đối | `Trơ tuyệt đối`, `Trơ tương đối` | **Trơ tuyệt đối (absolute refractory period)** / **Trơ tương đối (relative refractory period)** | Giữ nguyên. |
| ECG/EEG | `Điện tâm đồ (ECG)`, `Điện não đồ (EEG)` | **ECG (electrocardiogram)** / **EEG (electroencephalogram)** | Giữ nguyên, giữ INN. |
| Thuốc chẹn kênh ion | `thuốc chẹn kênh ion` | **Thuốc chẹn kênh ion (ion channel blocker)** | Giữ nguyên. |

---

## E. Open Questions for Gate A (Câu hỏi xin ý kiến phê duyệt tại Gate A)

1. **Q1 (Tên chương):** `MANIFEST.md` ghi tên chương 02 là "Chuyên đề 2: Điện thế sinh học & Tín hiệu điện từ của màng tế bào". Nguồn file không có tên chương bên trong HTML. Bạn đồng ý dùng tên từ MANIFEST làm tiêu đề chương S3?
2. **Q2 (Nguồn ngắn, 3 mục):** Nguồn chỉ 574 từ, 3 mục, không có bài tập, không có bảng, không có hình. Bạn đồng ý S3 bổ sung khung sư phạm T1–T3 (kiến thức tiên quyết, chuẩn đầu ra, thời lượng), bảng tổng hợp công thức, sơ đồ Mermaid, và bộ bài tập (gắn `[ADDED]`)?
3. **Q3 (Hình vẽ):** Nguồn có 0 bảng, 0 hình. Bạn đồng ý S3 đặt placeholder `[FIGURE]` cho phương trình Nernst/GHK, sơ đồ khử cực/tái cực, màng tế bào?
4. **Q4 (Tài liệu tham khảo):** Nguồn có 0 trích dẫn và `APPROVED_REFERENCE_LIST: none`. Bạn đồng ý S3 để `[VERIFY: reference needed …]` và chờ cung cấp giáo trình chuẩn?

---

## F. Not verified / limitations

- **Phạm vi dữ liệu:** Chỉ dựa trên `00_source_original/ch02_doc-ld-2.html` (D-02). File nguồn được giữ nguyên trạng tuyệt đối (READ-ONLY).
- **Tài liệu tham khảo:** Không có trích dẫn gốc trong D-02; tất cả công thức, giá trị số ($E_m \approx -70$ đến $-90$ mV, $+30$ mV) sẽ gắn `[VERIFY]` khi viết nếu không có trong nguồn.
- **Nội dung bổ sung ngoài nguồn:** Khung sư phạm, bài tập, hình vẽ, bảng tổng hợp là kiến thức giáo trình chuẩn, chưa có trong D-02; cần người dùng duyệt ở Gate A (Q2, Q3).
- **Kiểm tra cơ haine:** Thống kê文档 bằng script Python (xem mục A); chưa có script `check_coverage.py` chuyên dụng cho audit (sẽ chạy tại S2/S3).
- **Giới hạn giai đoạn:** Dừng ngay tại GATE A theo R9 và mục 7.2; chưa thực hiện viết bản thảo Stage S3.

---
GATE A: STOP. Awaiting user approval of the Content Mapping Matrix. Do not begin the transformation.
