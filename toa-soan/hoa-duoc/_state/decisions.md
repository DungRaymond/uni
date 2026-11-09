# DECISIONS — Hóa vô cơ dược – Master Lecture Notes

## 2026-11-07 — Khởi tạo
- Yêu cầu người dùng (nguyên văn): “tạo một phiên bản clone của các tài liệu hiện tại. biên soạn lại theo đúng rule tòa soạn”
- Đã clone nguồn từ snapshot `data/content/hoa-duoc.json` sang `00_source_original/` (read-only).
- Glossary và danh mục tài liệu tham khảo tách khỏi chương ứng viên; bài tập tách sang `exercises/`.
- Chưa có phê duyệt cổng nào. Chưa chạy S1.

## 2026-11-07 — Chốt cấu hình S0 (người dùng trả lời)
- AUDIENCE: Sinh viên Dược năm 1–2; kiến thức nền: hóa phổ thông, sinh học đại cương
- Mã HP/tín chỉ: để TBD (placeholder), không chặn quy trình.
- Lý dược = **Vật lý dược** (không phải Dược lý).
- Cách chia chương: mỗi tài liệu Chuyên đề/Chương = 1 chương ứng viên; glossary + danh mục tham khảo tách riêng; bài tập là nguồn T7. S2 được phép đề xuất gộp/tách.
- Thứ tự thực hiện: **hoa-duoc trước**, sau đó ly-duoc, y-duoc.

## 2026-11-07 — Phê duyệt GATE A: Chương 1
- Lệnh người dùng: "Chọn cái tốt nhất rồi làm tiếp"
- Trạng thái: **Phê duyệt chính thức Gate A** cho Ma trận ánh xạ Chương 1 (`02_mapping/ch01_matrix_APPROVED.md`).
- Quyết định cho các câu hỏi mở (Open Questions):
  - **Q1 (Xử lý CO):** Chọn phương án (A) — Bỏ cụm từ "và CO" để tập trung chính xác vào NO (ngoại lệ electron lẻ), tránh gây hiểu nhầm CO là ngoại lệ bát tử.
  - **Q2 (Đơn vị):** Dùng chuẩn SI `pm` đi kèm đơn vị truyền thống `Å` trong ngoặc đơn (`154 pm (1,54 Å)`), tuân thủ quy chuẩn `NOTATION: SI units`.
  - **Q3 (Văn phong):** Chuyển toàn bộ các hộp mẹo luyện thi ("đề thi", "Cách nhớ") thành các mục học thuật sư phạm chính quy.
  - **Q4 (Đánh giá T7):** Chấp thuận bổ sung bộ câu hỏi tự lượng giá bám sát 4 chuẩn đầu ra LO 1–4.
  - **Q5 (Tài liệu tham khảo):** Đặt thẻ `[VERIFY: reference needed]` theo nguyên tắc R4, không tự ý bịa đặt trích dẫn khi nguồn chưa có.
- Chuyển sang Stage: **S3 Write** và **S4 QA**.

## 2026-11-07 — Phê duyệt GATE B & Duyệt số liệu V-01..V-06: Chương 1
- Lệnh người dùng (nguyên văn): "Chắc là đúng hết đấy. Thôi làm tiếp đi. duyệt hết" (trả lời trực tiếp sau khi xem bảng các con số thực nghiệm `V-01` đến `V-06` và báo cáo Gate B của Vòng 3 QA `04_qa/ch01_qa_r3.md`).
- Trạng thái: **Phê duyệt chính thức GATE B** cho Chương 1 (`03_chapters/ch01_v2.md`, QA Verdict: `PASS`, `Critical = 0`, `Major = 0`, `Minor = 3`).
- Quyết định về thẻ `[VERIFY]`:
  - Người dùng xác nhận duyệt nhóm con số thực nghiệm, hằng số và phép đếm cấu hình electron đã trình bày (`V-01`, `V-02`, `V-03`, `V-04`, `V-05`, `V-06`) → gỡ 6 thẻ `[VERIFY]` này trong bản chuẩn hóa S5A (ghi rõ vào `05_final/ch01_editlog.md`).
  - Đối với các thẻ `[VERIFY]` cần tài liệu tham khảo cụ thể (`V-07` dược lý NO và `V-11a`, `V-11b`, `V-11c` tại mục 8.1) cũng như các ghi chú mô hình lý thuyết (`V-08`, `V-09`, `V-10`): theo Quy tắc 1.2 và R4 (không thể miễn trừ R4/R5 khi chưa có thông tin trích dẫn giáo trình thực tế), giữ nguyên các thẻ `[VERIFY]` này cùng các thẻ `[ADDED]` trong bản **REVIEW DRAFT** (`05_final/ch01_std_review.md`).
- Chuyển sang Stage: **S5A Standardize Chapter 01**.

## 2026-11-07 — Phê duyệt GATE A: Chương 2
- Lệnh người dùng (nguyên văn): "Biết cái mẹ gì đâu mà chỉnh sửa. duyệt. làm tiếp"
- Trạng thái: **Phê duyệt chính thức GATE A** cho Ma trận ánh xạ Chương 2 (`02_mapping/ch02_matrix_APPROVED.md`, `REMOVE = 0`, `Unmapped S-IDs = 0`).
- Quyết định cho các câu hỏi mở (`Q1`–`Q5`) theo phương án khuyến nghị:
  - **Q1 (Phức chất $[Fe(CN)_6]^{4-}$ và $[PtCl_4]^{2-}$ trong bảng VSEPR):** Giữ nguyên hai ví dụ trong bảng tổng hợp VSEPR (`T-02.4.3`) theo đúng nguồn, bổ sung chú thích học thuật `[ADDED]` + `[VERIFY]` làm rõ giới hạn của mô hình VSEPR đối với phức chất kim loại chuyển tiếp ($d^6, d^8$) và liên kết chéo sang Chương 3 & Chương 6.
  - **Q2 (Phạm vi công thức $SN = (V+M-q)/2$ & Ví dụ 2.3):** Bổ sung quy tắc tính cho phối tử tạo liên kết ba ($HCN$) và thêm Ví dụ 2.3 (`T-02.5.3`) giải chi tiết từng bước cho các ion đa nguyên tử ($CO_3^{2-}, NO_2^-, SO_4^{2-}, I_3^-$) có sẵn trong bảng `S-02.3`.
  - **Q3 (Cầu nối khái niệm "liên kết $\sigma$" và "đặc tính $p$"):** Bổ sung giải thích định tính ngắn gọn ngay tại Chương 2 kèm liên kết chéo sang Chương 3.
  - **Q4 (Sơ đồ Mermaid & Placeholder `[FIGURE]`):** Vẽ 1 lưu đồ Mermaid cho quy trình 4 bước xác định hình học VSEPR (`T-02.5.4`) và đặt các placeholder `[FIGURE 2.k | ...]` cho các mô hình hình học không gian 3D (`T-02.5.5`).
  - **Q5 (Đánh giá `T7`):** Xây dựng bộ 10 câu hỏi/bài tập tự lượng giá kèm lời giải chi tiết phủ kín `LO-1` đến `LO-4`.
- Chuyển sang Stage: **S3 Write → S4 QA** cho Chương 2.

## 2026-11-07 — Phê duyệt GATE B & Duyệt số liệu V-02.01, V-02.03, V-02.04, V-02.05, V-02.07: Chương 2
- Lệnh người dùng (nguyên văn): "Làm tiếp" (trả lời trực tiếp cho thông báo Gate B của Chương 2 đề xuất duyệt Gate B cùng các con số thực nghiệm/quy tắc `V-02.01`, `V-02.03`, `V-02.04`, `V-02.05`, `V-02.07` để chạy S5A Chương 2 và chuyển sang Chương 3).
- Trạng thái: **Phê duyệt chính thức GATE B** cho Chương 2 (`03_chapters/ch02_draft.md`, QA Verdict: `PASS`, `Critical = 0`, `Major = 0`, `Minor = 3`).
- Quyết định về thẻ `[VERIFY]`:
  - Xác nhận duyệt 5 nhóm số liệu thực nghiệm và quy tắc tính toán (`V-02.01`, `V-02.03`, `V-02.04`, `V-02.05`, `V-02.07` — tương ứng `10` thẻ `[VERIFY]` trong bản thảo) → gỡ 10 thẻ `[VERIFY]` này trong bản chuẩn hóa S5A (`05_final/ch02_std_review.md`) và ghi rõ vào `05_final/ch02_editlog.md`.
  - Giữ nguyên `6` thẻ `[VERIFY]` còn lại thuộc 4 nhóm (`V-02.02` phức chất chuyển tiếp, `V-02.06` cơ sở lý thuyết Quy tắc Bent, `V-02.08` nhận định Hóa dược, và `V-02.09a/b/c` tài liệu tham khảo tại mục 2.8.1) cùng toàn bộ `35` thẻ `[ADDED]` và `3` thẻ `[FIGURE]` trên bản **REVIEW DRAFT** (`05_final/ch02_std_review.md`) theo Quy tắc 1.2 và R4.
- Chuyển sang Stage: **S5A Standardize Chapter 02** và khởi chạy **S1 Audit → S2 Mapping** cho **Chương 03**.

## 2026-11-07 — Phê duyệt GATE A: Chương 3
- Lệnh người dùng (nguyên văn): "làm tiếp" (trả lời trực tiếp cho thông báo Gate A của Chương 3).
- Trạng thái: **Phê duyệt chính thức GATE A** cho Ma trận ánh xạ Chương 3 (`02_mapping/ch03_matrix_APPROVED.md`, `REMOVE = 0`, `Unmapped S-IDs = 0`).
- Quyết định cho các câu hỏi mở (`Q1`–`Q5`) theo phương án khuyến nghị:
  - **Q1 (Kích thích electron, liên kết cho–nhận & % đặc tính $s/p$):** Đồng ý bổ sung giải thích sự kích thích electron hóa trị ($Be, B, C$), cơ chế xen phủ cho–nhận ($NH_4^+$, phức chất) và tỷ lệ phần trăm đặc tính $s/p$ ($sp: 50\%\,s$; $sp^2: 33,3\%\,s$; $sp^3: 25\%\,s$) để hoàn thành lời hứa liên kết chéo từ Chương 2 (`carryover_latest.md`).
  - **Q2 (Chuẩn hóa ký hiệu tổ hợp orbital & đồng phân *cis/trans* ở ví dụ $C_2H_4$):** Đồng ý sửa `$1s + 3p$` thành `1 AO $s$ + 3 AO $p$` và làm rõ rằng liên kết $\pi$ giữ khung $C_2H_4$ phẳng cứng nhắc, tạo điều kiện xuất hiện đồng phân *cis–trans* ở các dẫn xuất thế bất đối xứng ($abC=Cab$).
  - **Q3 (Tách tiểu mục phức chất `T-03.4.5` & Ví dụ 3.3):** Đồng ý tách phần lai hóa phân lớp $d$ trong phức chất ($dsp^2, sp^3d^2, d^2sp^3$) thành tiểu mục riêng và bổ sung **Ví dụ 3.3** trình bày chi tiết sơ đồ ô lượng tử cho 4 phức chất của nguồn ($[FeF_6]^{3-}, [Fe(CN)_6]^{3-}, [Ni(CN)_4]^{2-}, cis\text{-}[Pt(NH_3)_2Cl_2]$ – Cisplatin, tuân thủ nghiêm ngặt `DOMAIN_RULES`).
  - **Q4 (Bảng tổng hợp, sơ đồ Mermaid & Placeholder `[FIGURE]`):** Đồng ý bổ sung `Bảng 3.1`, `Bảng 3.2`, 1 lưu đồ Mermaid (`T-03.5.4`) và 4 placeholder `[FIGURE 3.k | ...]` (`T-03.5.5`).
  - **Q5 (Đánh giá `T7`):** Đồng ý xây dựng bộ 10 câu hỏi/bài tập tự lượng giá kèm lời giải chi tiết phủ kín `LO-1` đến `LO-4`.
- Chuyển sang Stage: **S3 Write → S4 QA** cho Chương 3.

## 2026-11-07 — Phê duyệt GATE B: Chương 3
- Lệnh người dùng (nguyên văn): "Duyệt Gate B Ch03"
- Trạng thái: **Phê duyệt chính thức GATE B** cho Chương 3 (`03_chapters/ch03_draft.md`, QA Verdict: `PASS`, `Critical = 0`, `Major = 0`, `Minor = 5` theo `04_qa/ch03_qa_r1.md`).
- Quyết định về thẻ `[VERIFY]`:
  - Người dùng duyệt gỡ **6 nhóm** `V-03.01` đến `V-03.06` (tương ứng `25` thẻ `[VERIFY]` trong bản thảo) trong bản chuẩn hóa S5A, ghi rõ vào `05_final/ch03_editlog.md`.
  - Giữ nguyên `V-03.07a`, `V-03.07b`, `V-03.07c` tại mục `T-03.8.1` (3 vị trí tài liệu tham khảo; `APPROVED_REFERENCE_LIST: none`, tuân thủ R4).
- Xử lý 5 góp ý Minor `QA-03.01`–`QA-03.05` trực tiếp ở S5A (`Return to author = N`).
- Chuyển sang Stage: **S5A Standardize Chapter 03**.

## 2026-11-07 — Phê duyệt GATE A: Chương 4
- Lệnh người dùng (nguyên văn): "Duyệt Gate A, đồng ý Q1–Q5" (chọn phương án khuyến nghị).
- Trạng thái: **Phê duyệt chính thức GATE A** cho Ma trận ánh xạ Chương 4 (`02_mapping/ch04_matrix_APPROVED.md`, `REMOVE = 0`, `Unmapped S-IDs = 0`, coverage `9/9`).
- Quyết định cho 5 câu hỏi mở (`Q1`–`Q5`) — **đồng ý toàn bộ**:
  - **Q1:** Bổ sung `[ADDED]` tiểu mục lý thuyết `T-04.4.6` và ví dụ `T-04.5.4` về liên kết $3c\text{–}2e$ trong $B_2H_6$ (kiến thức giáo trình chuẩn, không thêm dữ liệu nghiên cứu mới).
  - **Q2:** Bổ sung điều kiện chuẩn hóa $c_A^2+c_B^2=1$, ghi chú $c_A \neq c_B$ cho dị hạch và biểu thức năng lượng MO dạng $\alpha,\beta,S$ ở mức giới thiệu (`[ADDED: standard LCAO background]`).
  - **Q3:** Giữ tiêu chí "còn electron độc thân → thuận từ", bỏ vế sai "BO lẻ → thuận từ"; ghi thay đổi vào changelog (R6) và gắn `[VERIFY]`.
  - **Q4:** Bổ sung nguyên tắc chung của giản đồ MO dị hạch; điền cấu hình/$BO$/từ tính chuẩn của $B_2, C_2, F_2$ vào `Bảng 4.2` (gắn `[ADDED]` + `[VERIFY]`).
  - **Q5:** Nâng chương lên khoảng `4.000–4.500` từ với bộ `10` câu hỏi/bài tập có đáp án chi tiết tại `T7`, phủ `LO-1`..`LO-4`.
- Chuyển sang Stage: **S3 Write → S4 QA** cho Chương 4.

## 2026-11-08 — Phê duyệt GATE B: Chương 4
- Lệnh người dùng (nguyên văn): "duyệt" (trả lời trực tiếp báo cáo GATE B Chương 04).
- Trạng thái: **Phê duyệt chính thức GATE B** cho Chương 4 (`03_chapters/ch04_draft.md`; QA Verdict `PASS` theo `04_qa/ch04_qa_r3.md`: `Critical = 0`, `Major = 0`, `Minor = 1`).
- Xử lý `QA3-04.01` (Minor, `Return to author = N`) ngay trong S5A: giới hạn phát biểu "dãy oxygen có $BO$ bán nguyên" thành **chỉ $O_2^+$ (2,5) và $O_2^-$ (1,5)**; nêu rõ $O_2$ ($BO = 2$) và $O_2^{2-}$ ($BO = 1$) là số nguyên; áp dụng nhất quán ở 3 vị trí (dòng 123, 217, 340 của bản nháp). **Không thay đổi bất kỳ giá trị số nào.**
- Quyết định về thẻ `[VERIFY]` (tổng 44 thẻ → giữ 5 thẻ):
  - **Duyệt GỠ 10 nhóm** `V-04.01`, `V-04.02`, `V-04.03`, `V-04.05`, `V-04.06`, `V-04.07`, `V-04.09`, `V-04.10`, `V-04.11`, `V-04.12` = **39 thẻ**, gồm dữ kiện chuẩn của giáo trình và dữ kiện lấy trực tiếp từ nguồn `S-04.1`–`S-04.6`. Ghi từng thẻ vào `05_final/ch04_editlog.md` mục C.
  - **GIỮ** `V-04.04` — ngưỡng $\Delta E$ còn hai giá trị chưa chốt ($10$–$14$ eV theo `S-04.2` và $\le 12$ eV cho $2p$–$2s$ theo `S-04.4`); cần chuyên gia quyết. **2 thẻ** (dòng 85, 452).
  - **GIỮ** `V-04.08` — tài liệu tham khảo gốc (`APPROVED_REFERENCE_LIST: none`, Rule R4, không được bịa nguồn). **3 thẻ** (dòng 548–550).
  - Bản chuẩn hóa vì vậy là **REVIEW DRAFT** (còn 5 thẻ), không phải CLEAN RELEASE.
- Các điểm "chuyển chuyên gia" (mục H của QA R3) **không sửa** trong S5A vì thuộc nội dung: cụm "quang phổ phức chất" (dòng 9), câu tuyệt đối hóa ở Bảng 4.4, ngưỡng $\Delta E$, dữ kiện ngoài nguồn, tài liệu tham khảo, sản xuất 5 hình, `LO-3`, chính sách `[ADDED]`. Ghi vào mục E ("Recommended content changes") của edit log.
- Chuyển sang Stage: **S5A Standardize Chapter 04** (subagent `editor`, Mode A).

## 2026-11-09 — Phê duyệt GATE A (sau S1 Audit): Chương 5
- Lệnh người dùng (nguyên văn): "duyệt" (trả lời trực tiếp báo cáo S1 Audit Chương 05).
- Trạng thái: **Phê duyệt chính thức S1 Audit / GATE A (sau audit)** cho Chương 5 (`01_audit/ch05_audit.md`).
- Nguồn D-05: 58 dòng, 1.129 từ, 3 h4, 2 formula-box, 2 example-box, 1 callout, 0 bảng/hình/trích dẫn. 6 S-ID (S-05.1–S-05.6).
- Chuyển sang Stage: **S2 Mapping** (xây dựng `02_mapping/ch05_matrix.md`) → rồi trình duyệt GATE A ma trận → S3 Write.

## 2026-11-09 — S2 Mapping hoàn tất: Chương 5
- Tạo `02_mapping/ch05_matrix.md`: 15 dòng ma trận, độ phủ 6/6 S-ID (100%), REMOVE = 0.
- Hành động: 9 ADD / 2 KEEP / 4 MERGE.
- Đang dừng tại GATE A Chương 05 (ma trận + 5 câu hỏi mở Q1–Q5), chờ người dùng duyệt trước khi chạy S3 Write.

## 2026-11-09 — Phê duyệt GATE A (ma trận): Chương 5
- Lệnh người dùng (nguyên văn): "duyệt hết" → chấp nhận toàn bộ ma trận `02_mapping/ch05_matrix.md` và 5 câu hỏi mở Q1–Q5 theo phương án khuyến nghị.
- Quyết định Q1–Q5:
  - Q1 (Tên chương): Dùng tên tạm **"Lực liên phân tử & Liên kết hydro"** (chưa có trong file HTML, chỉ tại MANIFEST); ghi `V-05.01` Open để chốt tên sau.
  - Q2 (Phạm vi nhiệt động học): Giữ phạm vi lực liên phân tử & liên kết hydro theo nguồn D-05; không bổ sung enthalpy/entropy/Gibbs (không có trong nguồn, không bịa).
  - Q3 (Bổ sung công thức & bài tập): Đồng ý S3 bổ sung công thức định lượng (London, năng lượng liên kết hydro), ví dụ tính toán và bộ 10 câu hỏi/bài tập, gắn `[ADDED]`.
  - Q4 (Hình & bảng): Đồng ý S3 đặt placeholder `[FIGURE]` và bảng tổng hợp mới, gắn `[ADDED]`.
  - Q5 (Tài liệu tham khảo): Đồng ý S3 để `[VERIFY: reference needed …]`, `APPROVED_REFERENCE_LIST: none`, không bịa nguồn.
- Trạng thái: **GATE A Chương 05 ĐÃ DUYỆT** ma trận. Chuyển sang **S3 Write** (`03_chapters/ch05_draft.md`).
