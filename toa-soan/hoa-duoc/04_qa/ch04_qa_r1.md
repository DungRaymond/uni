# ch04_qa_r1.md — Báo cáo Kiểm định Chất lượng Độc lập (Stage S4 QA — Round 1) · Chương 04

**Dự án:** Hóa vô cơ dược – Master Lecture Notes  
**Chương kiểm định:** Chương 04 — *Thuyết Orbital Phân tử (MO) & Phân tích Năng lượng LCAO*  
**Stage:** S4 Independent QA (Round 1) · **Ngày thực hiện:** 2026-11-07  
**Tài liệu đối chiếu (Context Isolation theo Mục 6.3):**
1. Cấu hình dự án: `00_config.md` (bao gồm `DOMAIN_RULES` Dược học, `FIGURE_POLICY`, `CITATION_STYLE: Vancouver`, `APPROVED_REFERENCE_LIST: none`)
2. Tài liệu nguồn gốc (READ-ONLY): `00_source_original/ch04_doc-hvc-4.html` (`D-04`, `S-04.1`–`S-04.9`)
3. Ma trận ánh xạ đã duyệt Gate A: `02_mapping/ch04_matrix_APPROVED.md` (`M-04.01`–`M-04.23`)
4. Bản thảo và nhật ký S3: `03_chapters/ch04_draft.md`, `03_chapters/ch04_changelog.md`
5. Báo cáo kiểm tra cơ học: `_state/checks/ch04_s3_coverage.md`, `ch04_s3_tags.md`, `ch04_s3_length.md`, `ch04_s3_ids.md`, và `_state/checks/ch04_s4_calc.md` (chạy từ `_tools/check_calc_ch04.py`)

---

## A. Verdict

- **Kết luận thẩm định (Verdict):** **PASS WITH CONDITIONS**
- **Thống kê lỗi theo mức độ nghiêm trọng (Severity Counts):**
  - **Critical (Nghiêm trọng):** `0`
  - **Major (Lớn):** `3` (`QA-04.01` đến `QA-04.03`)
  - **Minor (Nhỏ / Hình thức):** `17` (`QA-04.04` đến `QA-04.20`)
- **Luận cứ thẩm định (Justification):**
  Bản thảo `03_chapters/ch04_draft.md` (6.677 từ, gấp 5,79 lần bản nguồn 1.153 từ theo `check_length.py`; 30 mã `T-ID` duy nhất) bảo toàn **100% (9/9)** phân đoạn nguồn `S-04.1`–`S-04.9`, với `REMOVE = 0` trong ma trận được duyệt. Không có vi phạm `DOMAIN_RULES` (không thêm liều, chỉ định, dược động học hay tác dụng phụ), không có tài liệu tham khảo bịa đặt. Tuy nhiên, ba lỗi **Major** phải sửa trước Gate B: (1) suy luận sai “vì $\alpha,\beta<0$ nên $E_+<\alpha$”; (2) câu tóm tắt đảo ngược thứ tự phá bền $\sigma^*<\pi^*$ so với chính giản đồ trong bài; (3) ngưỡng $\Delta E$ bị rút gọn thành “khoảng 10–14 eV”, làm mất dấu “$\le$” và giá trị $\le 12\text{ eV}$ của nguồn, trái với changelog. Trong 23 hạng mục tính toán được tái lập bằng code, **17/23 khớp**; 6 hạng mục không khớp gồm 3 lỗi Major nêu trên và 3 lỗi Minor về thời lượng học tập, miền tích phân xen phủ và nhãn cầu $3c$–$2e$ ở Q10.

---

## B. Issue Table

| Issue ID | T-ID | Category | Severity | Basis | Evidence (Source quote vs. Draft quote, ≤25 words each) | Recommended correction | Return to author = Y/N |
|---|---|---|---|---|---|---|---|
| **QA-04.01** | `T-04.4.1.3` | Scientific accuracy / Logic | **Major** | `[INTERNAL]` | Bản thảo (dòng 77): “Vì $\alpha, \beta < 0$, $E_{+}$ nằm dưới $\alpha$ (liên kết)”. Tái tính: $E_+ = (\alpha+\beta)/(1+S)$; với $\alpha=-10$, $\beta=-0{,}5$, $S=0{,}2$ thì $E_+=-8{,}75 > \alpha$. Điều kiện đúng là $\beta<\alpha S$ (⟺ $\lvert\beta\rvert>\lvert\alpha\rvert S$). | Thay câu suy luận bằng: “$E_+$ nằm dưới $\alpha$ khi $\beta<\alpha S$; với tích phân cộng hưởng đủ lớn, $E_+$ là MO liên kết”. Giữ `[VERIFY: LCAO energy expression convention (V-04.11)]`. | **Y** |
| **QA-04.02** | `T-04.4.3.1` | Scientific accuracy / Internal consistency | **Major** | `[INTERNAL]` | Bản thảo (dòng 115): “mức phá bền tăng $\sigma^* < \pi^*$”. Bản thảo (dòng 137, 145): $\pi^*_{2p} < \sigma^*_{2p_z}$. Chuẩn MO: $\sigma^*$ nằm trên $\pi^*$ (phá bền mạnh hơn). | Đổi thành “mức phá bền tăng $\sigma^* > \pi^*$” hoặc “$\pi^*$ phá bền ít hơn $\sigma^*$”; giữ nguyên Bảng 4.1 và hai giản đồ (đang đúng). | **Y** |
| **QA-04.03** | `T-04.4.2.1` | Source fidelity / Changelog consistency | **Major** | `[INTERNAL]` | Nguồn (`S-04.2`): “$\Delta E \le 10-14\text{ eV}$”; (`S-04.4`): “$\Delta E(2p-2s) \le 12\text{ eV}$”. Bản thảo (dòng 85): “$\Delta E$ khoảng $10\text{–}14\text{ eV}$” — mất dấu “$\le$”, mất $12\text{ eV}$. Changelog dòng 50 nói giữ cả hai giá trị. | Khôi phục “$\Delta E \le 10\text{–}14\text{ eV}$”; thêm “với $2p$–$2s$, ngưỡng thường lấy $\le 12\text{ eV}$” ở `T-04.4.4.2`, hoặc sửa changelog cho đúng thực tế. Giữ `[VERIFY: delta E threshold (V-04.04)]`. | **Y** |
| **QA-04.04** | `T-04.1.2` | Calculation / Numeric consistency | **Minor** | `[INTERNAL]` | Bản thảo (dòng 20): “~**3 giờ 30 phút** (2 giờ 40 phút cho 4.005 từ … cộng 40 phút)”. Tái tính: $4.005/1.500=2{,}67\text{ h}=2\text{ h }40\text{ ph}$; $+40\text{ ph}=3\text{ h }20\text{ ph}$. Cụm `$4.005/1.500$` trong math hiển thị thành số thập phân, không phải dấu ngăn nghìn. | Sửa thành “**3 giờ 20 phút**”; viết `4\,005/1\,500` hoặc dùng chữ “4.005 từ / 1.500 từ” ngoài math. | **N** |
| **QA-04.05** | `T-04.4.1.3`, `T-04.4.2.2` | Notation / Mathematics | **Minor** | `[INTERNAL]` | Bản thảo (dòng 77): “$S$ là tích phân xen phủ ($0 \le S \le 1$)”; (dòng 93): “$0 \le S \le 1$, phải $>0$ đáng kể”. Tích phân xen phủ có thể âm tùy quy ước pha; ràng buộc tổng quát là $\lvert S\rvert\le 1$. | Viết $\lvert S_{AB}\rvert\le 1$ (kèm ghi chú “theo quy ước pha sao cho $S_{AB}>0$ khi xen phủ hiệu quả”), hoặc giữ $0\le S\le 1$ và nêu rõ đó là quy ước pha. | **N** |
| **QA-04.06** | `T-04.4.3.2`, `T-04.5.1` | Conceptual accuracy | **Minor** | `[INTERNAL]` | Bản thảo (dòng 123): “$BO$ bán nguyên vì electron độc thân chỉ chiếm một trong hai MO suy biến … $O_2^{2-}$ 1”. $H_2^+$ chỉ có một $\sigma_{1s}$ không suy biến; $BO=1$ là số nguyên, không phải bán nguyên. | Giải thích bán nguyên bằng độ chiếm lẻ trên cặp $\pi^*$ suy biến (các loài $O_2$); xử lý $H_2^+$ riêng; bỏ $O_2^{2-}$ khỏi danh sách “bán nguyên”. | **N** |
| **QA-04.07** | `T-04.5.6` | Tag audit / Figure syntax | **Minor** | `[INTERNAL]` | Bản thảo dùng placeholder dạng `[FIGURE 4.2 …]` đến `[FIGURE 4.6 …]`. `check_tags.py` yêu cầu cú pháp `[FIGURE:` nên báo `[FIGURE]=0`; changelog dòng 71 cũng ghi `[FIGURE]=0` trong khi có 5 khung giữ chỗ. | Chuẩn hóa placeholder thành `[FIGURE: 4.2 …]` (hoặc cập nhật regex của tool); ghi nhận **5** placeholder trong changelog. | **N** |
| **QA-04.08** | `T-04.7.4` | Formatting / Table numbering | **Minor** | `[INTERNAL]` | Bản thảo (dòng 472): “Bảng A (bảng phụ trong đáp án, không đánh số vào chuỗi Bảng 4.k để tránh trùng khi ghép ba phần)”; dòng 511: “Bảng B”. Hai bảng không có chú thích chuẩn, còn lộ ghi chú biên tập. | Đặt chú thích “**Bảng 4.5.** …” và “**Bảng 4.6.** …” (hoặc “Bảng phụ A/B” thống nhất), xóa ghi chú nội bộ về ghép ba phần. | **N** |
| **QA-04.09** | `T-04.7.4` (Q10) | Accuracy / Labeling | **Minor** | `[INTERNAL]` | Bản thảo (dòng 538): “Mô hình 7 liên kết $2c$–$2e$ (4 terminal + 2 cầu + 1 $\text{B–B}$) cũng cần 14 electron”. Cầu $\text{B–H–B}$ là $3c$–$2e$, không phải $2c$–$2e$; phép nhân $7\times2=14$ đúng nhưng nhãn sai mô hình. | Gọi là “7 cặp electron trong mô hình $2c$–$2e$ giả định” hoặc mô tả rõ “4 terminal $2c$–$2e$ + 2 cầu $3c$–$2e$ + 1 $\text{B–B}$ $2c$–$2e$”. | **N** |
| **QA-04.10** | `T-04.4.5.2`, `T-04.5.3` | Notation consistency | **Minor** | `[INTERNAL]` | Bản thảo (dòng 181, 255): CO dùng nhãn đồng hạch $(\sigma_{2s})^2(\sigma^*_{2s})^2(\pi_{2p})^4(\sigma_{2p_z})^2$; Hình 4.4 (dòng 320) dùng nhãn dị hạch $5\sigma$ (HOMO), $\pi_{2p}$, $\pi^*$ (LUMO), $6\sigma^*$. Số electron và $BO=3$ đúng. | Dùng thống nhất nhãn dị hạch ($5\sigma$, $6\sigma^*$) hoặc thêm câu ánh xạ “$5\sigma \equiv \sigma_{2p_z}$, $6\sigma^* \equiv \sigma^*_{2p_z}$”. | **N** |
| **QA-04.11** | `T-04.4.3.2` | Tag precision | **Minor** | `[INTERNAL]` | Bản thảo (dòng 121): “$He_2$ … chỉ là dimer van der Waals”, gắn `[SRC: S-04.3]` + `[VERIFY: He2 bond order statement (V-04.10)]`. Nguồn chỉ nói “không thể tồn tại”; cụm “dimer van der Waals” là kiến thức bổ sung, thiếu `[ADDED]`. | Thêm `[ADDED: He2 van der Waals dimer]` bên cạnh `[VERIFY]`, hoặc quay về cách diễn đạt “không tạo liên kết cộng hóa trị bền”. | **N** |
| **QA-04.12** | `T-04.4.1.1` | Tag precision | **Minor** | `[INTERNAL]` | Bản thảo (dòng 53): “$\lvert\Psi\rvert^2$ là mật độ xác suất tìm thấy electron” chỉ gắn `[SRC: S-04.1]`. Nguồn định nghĩa MO và LCAO nhưng không nêu $\lvert\Psi\rvert^2$. | Thêm `[ADDED: probability density interpretation]` sau cụm này. | **N** |
| **QA-04.13** | `T-04.4.4.4`, `T-04.5.1` | Consistency (Changelog vs. Draft) | **Minor** | `[INTERNAL]` | Changelog dòng 53: “$\pi_{2p}$ gộp → $\pi_{2p_x}$, $\pi_{2p_y}$ … Dùng ký hiệu tách trong cấu hình và bảng”. Bảng 4.2 (dòng 163–167) vẫn dùng $(\pi_{2p})^2$, $(\pi^*_{2p})^2$; Bảng 4.3 dùng ký hiệu tách. | Đồng bộ Bảng 4.2 sang $\pi_{2p_x}=\pi_{2p_y}$ (hoặc ghi rõ “ký hiệu gộp” trong chú thích bảng) và sửa changelog nếu giữ ký hiệu gộp. | **N** |
| **QA-04.14** | `T-04.4.1.2`, `T-04.6.1` | Notation consistency | **Minor** | `[INTERNAL]` | Bản thảo (dòng 61): $\Psi=c_A\varphi_A+c_B\varphi_B$; (dòng 340, 381, 451): $\Psi=c_A\phi_A+c_B\phi_B$. Cùng một ký hiệu AO nhưng dùng hai macro `\varphi` và `\phi`. | Thống nhất một macro (`\phi`) trong toàn chương, kể cả công thức tóm tắt và câu hỏi/đáp án. | **N** |
| **QA-04.15** | `T-04.2.1`, `T-04.7.2` | Learning-objective alignment | **Minor** | `[INTERNAL]` | `LO-3` (dòng 32) nêu “bậc bán nguyên của $H_2^+, O_2^+, O_2^-$”; Bài tập 5 (dòng 405) chỉ yêu cầu $O_2^+, O_2, O_2^-, O_2^{2-}$; $H_2^+$ chỉ xuất hiện trong Ví dụ 4.1. | Thêm $H_2^+$ vào Bài tập 5 (hoặc một ý nhỏ) hay chỉnh `LO-3` bỏ $H_2^+$ để chuẩn đầu ra và đánh giá khớp nhau. | **N** |
| **QA-04.16** | `T-04.5.1` | Wording / Logic | **Minor** | `[INTERNAL]` | Bản thảo (dòng 218): “chiều $BO$ $2,5>2>1,5>1$ ứng với liên kết dài, yếu đi”. Chiều diễn đạt mơ hồ: $BO$ cao ứng với liên kết ngắn, bền; chỉ khi $BO$ giảm thì liên kết mới dài/yếu đi. | Viết lại: “Khi $BO$ giảm $2,5\to2\to1,5\to1$, độ dài liên kết tăng và năng lượng liên kết giảm”. | **N** |
| **QA-04.17** | `T-04.4.6` | Formatting | **Minor** | `[INTERNAL]` | Bản thảo (dòng 197–199): hai dòng `---` liên tiếp sau tiểu mục 4.6, tạo đường kẻ đôi không cần thiết. | Xóa một dòng `---`. | **N** |
| **QA-04.18** | `T-04.3.1`, `T-04.6.1` | Coverage / Summary completeness | **Minor** | `[INTERNAL]` | Nguồn (`S-04.6`): “giải thích … sự hấp thụ ánh sáng tốt hơn … so với mô hình liên kết cục bộ”. Bản thảo (dòng 41): “không định lượng được mức năng lượng nên không giải thích quang phổ”; Tóm tắt `T-04.6.1` không nhắc hấp thụ ánh sáng. | Thêm một mệnh đề trong `T-04.6.1`: “MO còn giải thích phổ hấp thụ/UV–Vis tốt hơn mô hình định xứ”. | **N** |
| **QA-04.19** | `T-04.4.5.3`, `T-04.7.4` (Q9) | Source fidelity / DOMAIN_RULES | **Minor** | `[INTERNAL]` | Bản thảo (dòng 187, 533): “CO chiếm vị trí phối trí trên $Fe^{2+}$”, “CO chiếm vị trí gắn $O_2$”. Nguồn: “làm bất hoạt khả năng vận chuyển oxy”, “cản vận chuyển oxy” — không nêu tường minh cạnh tranh cùng vị trí gắn. | Đổi thành “CO gắn mạnh Hb, cạnh tranh/làm giảm vận chuyển $O_2$” theo đúng câu nguồn; giữ `[VERIFY: CO–Hb affinity and clinical consequence (V-04.05)]`. | **N** |
| **QA-04.20** | `T-04.7.4` (Câu 4) | Tag / Traceability | **Minor** | `[INTERNAL]` | Bản thảo (dòng 457): `[VERIFY: mnemonic “BO lẻ → thuận từ” is incorrect (I-04.06, I-04.17)]`. Các chỗ khác dùng mã kiểm chứng `V-04.12` cho cùng nội dung. | Đổi thành `[VERIFY: mnemonic correction (V-04.12)]` để thống nhất hàng đợi kiểm chứng. | **N** |

---

## C. Coverage Table

Đối chiếu toàn bộ 9 phân đoạn nguồn (`S-04.1`–`S-04.9`) từ `00_source_original/ch04_doc-hvc-4.html` với ma trận được duyệt `02_mapping/ch04_matrix_APPROVED.md` và bản thảo `03_chapters/ch04_draft.md` (kiểm chứng bằng `_state/checks/ch04_s3_coverage.md`):

- **Tổng số S-ID trong nguồn:** `9` (`S-04.1` đến `S-04.9`)
- **Số S-ID có mặt trong bản thảo:** `9/9` (**100,0%**)
- **Số S-ID bị thiếu (Missing):** `0`
- **Số dòng đề xuất `REMOVE` trong ma trận:** `0` — không có nội dung nguồn nào bị xóa; mọi thay đổi đều là KEEP/MERGE/MOVE/ADD có kiểm soát.

| S-ID | Nội dung gốc trong `00_source_original/ch04_doc-hvc-4.html` | Row ID (`ch04_matrix_APPROVED.md`) | Vị trí T-ID trong `ch04_draft.md` | Trạng thái bảo tồn (Preserved / Altered / Missing) | Bằng chứng đối chiếu & Đánh giá bảo tồn ý nghĩa khoa học |
|---|---|---|---|---|---|
| **`S-04.1`** | **Bản chất thuyết MO & LCAO:** quan điểm hạt nhân đa tâm; electron chuyển động trong trường thế chung trên MO; $\Psi=c_A\phi_A+c_B\phi_B$ (liên kết), $\Psi^*=c_A\phi_A-c_B\phi_B$ (phản liên kết); ý nghĩa mô tả electron phi định xứ. | `M-04.05` | `T-04.4.1.1`, `T-04.4.1.2`, `T-04.4.1.3` | **Preserved** *(Expanded)* | Giữ nguyên định nghĩa MO, hai tổ hợp LCAO và ý nghĩa phi định xứ. Bổ sung điều kiện chuẩn hóa $c_A^2+c_B^2=1$ và biểu thức $E_\pm$ ở mức giới thiệu, đều gắn `[ADDED]`/`[VERIFY]`. Không đổi nghĩa nguồn. |
| **`S-04.2`** | **Ba điều kiện tổ hợp AO:** năng lượng xấp xỉ ($\Delta E\le10-14\text{ eV}$); xen phủ $S_{AB}>0$ đáng kể; cùng đối xứng với trục $z$; ví dụ $s$–$p_x$ có $S=0$. | `M-04.06` | `T-04.4.2.1`, `T-04.4.2.2`, `T-04.4.2.3` | **Altered** | Ba điều kiện và ví dụ đối xứng được giữ đầy đủ. Riêng ngưỡng năng lượng bị đổi từ “$\le10-14\text{ eV}$” thành “khoảng $10-14\text{ eV}$” (mất dấu “$\le$”) — xem `QA-04.03`. Đây là thay đổi nghĩa cục bộ, không phải mất nội dung. |
| **`S-04.3`** | **Phân loại MO; $BO$; từ tính:** $\sigma,\pi$ liên kết thấp hơn AO; $\sigma^*,\pi^*$ cao hơn, có mặt phẳng nút; $n$ giữ nguyên năng lượng; $BO=(N_b-N_a)/2$; $BO>0$ tồn tại, $BO=0$ không tồn tại ($He_2$); $BO$ bán nguyên $0{,}5;1{,}5;2{,}5$; thuận từ khi có electron độc thân. | `M-04.07` | `T-04.4.3.1`, `T-04.4.3.2`, `T-04.4.3.3` | **Altered** *(Approved clarification)* | Giữ đủ định nghĩa, công thức và tiêu chí từ tính. Hai chỗ đổi nghĩa có chủ đích: $BO=0$ → “không có liên kết cộng hóa trị bền” (thay “không thể tồn tại”, `V-04.10`); bỏ mẹo “BO lẻ → thuận từ” (`I-04.06`, `I-04.17`). Cả hai đã ghi changelog và gắn `[VERIFY]`. |
| **`S-04.4`** | **Giản đồ MO đồng hạch chu kỳ 2:** hai trật tự mức (không trộn $O_2,F_2$; có trộn $B_2,C_2,N_2$); cấu hình $O_2$ 12 e, 2 e độc thân trên $\pi^*$, $BO=2$; $N_2$ 10 e, $BO=3$, $E_{lk}\approx945\text{ kJ/mol}$; ngưỡng $\Delta E(2p-2s)\le12\text{ eV}$. | `M-04.08`, `M-04.11`, `M-04.12` | `T-04.4.4.1`, `T-04.4.4.2`, `T-04.4.4.3`, `T-04.5.1`, `T-04.5.2` | **Preserved** *(Expanded)* | Giữ nguyên hai trật tự mức, cấu hình $O_2$/$N_2$, $BO$, 2 electron độc thân và $E_{lk}(N_2)$. Bổ sung $B_2,C_2,F_2$ (chuẩn giáo trình, gắn `[ADDED]`/`[VERIFY]`). Cụm “lực đẩy tĩnh điện lượng tử” được diễn đạt lại thành “trộn cấu hình” (`I-04.27`) — làm rõ nghĩa, không đổi hiện tượng. |
| **`S-04.5`** | **Dị hạch & CO:** $\chi(O)>\chi(C)$ nên AO của O thấp hơn; CO đồng electron $N_2$, $BO=3$; HOMO tập trung trên C; $\sigma$-donor vào $d$ trống của $Fe^{2+}$; $\pi$-backbonding vào $\pi^*$; CO–Hb bền gấp 200–250 lần Hb–$O_2$, gây ngạt mô. | `M-04.09`, `M-04.13` | `T-04.4.5.1`, `T-04.4.5.2`, `T-04.4.5.3`, `T-04.5.3` | **Preserved** | Giữ đầy đủ nguyên tắc dị hạch, vai trò HOMO/LUMO, hai thành phần liên kết và cảnh báo độc tính 200–250 lần. Bổ sung định nghĩa HOMO/LUMO và nguyên tắc chung dị hạch (`[ADDED]`); toàn bộ nội dung lâm sàng vẫn bám nguồn và gắn `[VERIFY]`. |
| **`S-04.6`** | **Ý nghĩa và tác dụng:** MO giải thích bậc liên kết, độ bền, tính thuận từ/nghịch từ và **sự hấp thụ ánh sáng** tốt hơn mô hình liên kết cục bộ; HOMO/LUMO giúp hình dung cho–nhận electron; ví dụ CO–Hb. | `M-04.04`, `M-04.17` | `T-04.3.1`, `T-04.6.1` | **Altered** *(Partially reflected)* | Giữ ý “MO giải thích $BO$, độ bền, từ tính, HOMO/LUMO và CO–Hb”. Riêng “hấp thụ ánh sáng” chỉ xuất hiện gián tiếp ở `T-04.3.1` (“không giải thích quang phổ”), không có trong `T-04.6.1` — xem `QA-04.18`. Không mất nội dung cốt lõi. |
| **`S-04.7`** | **Ví dụ SGK — giản đồ MO của $O_2$ (thuận từ) và $N_2$ (nghịch từ):** cấu hình, $BO=2$ và $BO=3$, 2 e độc thân trên $\pi^*$, $N_2$ trơ. | `M-04.12` | `T-04.5.2` | **Preserved** *(Expanded)* | Chuyển thành Ví dụ 4.2 có cấu trúc Given–Find–Approach–Solution–Check; giữ nguyên cấu hình, $BO$, từ tính và nhận xét $N_2$ trơ. Bổ sung kiểm tra chéo $B_2,C_2,F_2$ (`[ADDED]`). |
| **`S-04.8`** | **Ví dụ SGK — bậc liên kết họ oxygen:** $O_2^+$ 2,5; $O_2$ 2; $O_2^-$ 1,5; $O_2^{2-}$ 1; quy luật thêm e phản liên kết → $BO$ giảm, liên kết dài và yếu hơn. | `M-04.11` | `T-04.5.1`, Bảng 4.3 | **Preserved** *(Expanded)* | Giữ đủ 4 giá trị $BO$ và quy luật; mở rộng thành bảng 4 loài kèm cấu hình $\pi^*$, $N_b$, $N_a$, số e độc thân. Bổ sung $H_2^+$ (từ `S-04.3`) có gắn `[ADDED]`; không thay đổi dữ liệu nguồn. |
| **`S-04.9`** | **Hộp “Cách nhớ”:** thứ tự điền $\sigma_s,\sigma_s^*$ rồi $\sigma_p,\pi_p$; $N_2,B_2,C_2$ có $\pi_p$ dưới $\sigma_p$; $O_2,F_2$ ngược lại; mẹo “BO lẻ hoặc còn e lẻ trên $\pi^*$ → thuận từ”; $BO$ lớn → liên kết ngắn, bền. | `M-04.17` | `T-04.6.1` | **Altered** *(Approved correction)* | Giữ nguyên quy tắc điền và hai trật tự mức; **bỏ vế “BO lẻ”** vì $N_2$, $CO$ có $BO=3$ nhưng nghịch từ (`I-04.06`, `I-04.17`); thay bằng tiêu chí “còn electron độc thân → thuận từ”. Đã ghi changelog và gắn `[VERIFY]`. |

**Kết luận coverage:** `9/9` S-ID hiện diện; `0` Missing; `0` REMOVE chưa được duyệt. Các thay đổi trạng thái “Altered” đều có lý do khoa học/sư phạm, có ghi changelog và không làm mất ý nghĩa nguồn (trừ ngưỡng $\Delta E$ ở `QA-04.03`, cần khôi phục).

---

## D. Calculation Table

Toàn bộ phép tính, cấu hình electron, bậc liên kết, cân bằng electron/điện tích và giá trị đáp án trong `03_chapters/ch04_draft.md` được tái lập độc lập bằng script Python `_tools/check_calc_ch04.py` (báo cáo chi tiết: `_state/checks/ch04_s4_calc.md`). Kết quả tổng: **23 hạng mục, 17 khớp (17/23 = 73,9%), 6 không khớp**.

| # | Item (Vị trí & Nội dung kiểm tra) | Original in draft (`ch04_draft.md`) | Recomputed by script (`check_calc_ch04.py`) | Match (Yes/No) |
|---|---|---|---|---|
| 1 | `T-04.1.2` Thời lượng học tập (`STUDY_TIME_RULE`: 1 h/1.500 từ + 20 phút/5 bài) | ~**3 giờ 30 phút** (2 giờ 40 phút cho 4.005 từ + 40 phút cho 10 bài) | $4.005/1.500=2{,}67\text{ h}$ (2 h 40 ph) $+40\text{ ph}=3{,}34\text{ h}=200\text{ ph}\approx\mathbf{3\text{ h }20\text{ ph}}$ | **No** |
| 2 | `T-04.4.1.3` Chuẩn hóa đồng hạch $c_A=c_B=1/\sqrt{2}$ | $c_A^2+c_B^2=1$ | $2\times(1/\sqrt{2})^2=2\times0{,}500000=1{,}000000=1$ | **Yes** |
| 3 | `T-04.4.1.3` Khẳng định “vì $\alpha,\beta<0$ nên $E_+<\alpha$” | $\alpha,\beta<0\Rightarrow E_+<\alpha$ | Điều kiện đúng $\beta<\alpha S$; phản ví dụ $\alpha=-10$, $\beta=-0{,}5$, $S=0{,}2$: $E_+=-8{,}750>\alpha=-10{,}0$ | **No** |
| 4 | `T-04.4.2.2` Miền giá trị tích phân xen phủ $S_{AB}$ | $0\le S\le1$ | Tổng quát $\lvert S\rvert\le1$; $S$ có thể âm (ví dụ $S=-0{,}3$ hợp lệ); cận dưới 0 chỉ đúng sau quy ước pha | **No** |
| 5 | $O_2^{2-}$ (14 e): cấu hình, $N_b$, $N_a$, $BO$, e độc thân | $N_b=8$, $N_a=6$, $BO=1$, 0 e độc thân, nghịch từ | $\sigma_{2s}^2\sigma_{2s}^{*2}\sigma_{2p_z}^2\pi_{2p}^4\pi_{2p}^{*4}\sigma_{2p_z}^*$ → $N_b=8$, $N_a=6$, $BO=1$, 0 e độc thân | **Yes** |
| 6 | $O_2^-$ (13 e): cấu hình, $N_b$, $N_a$, $BO$, e độc thân | $N_b=8$, $N_a=5$, $BO=1{,}5$, 1 e độc thân, thuận từ | $\pi_{2p}^{*3}$ → $N_b=8$, $N_a=5$, $BO=1{,}5$, 1 e độc thân | **Yes** |
| 7 | $O_2$ (12 e): cấu hình, $N_b$, $N_a$, $BO$, e độc thân | $N_b=8$, $N_a=4$, $BO=2$, 2 e độc thân, thuận từ | $\pi_{2p}^{*2}$ → $N_b=8$, $N_a=4$, $BO=2$, 2 e độc thân | **Yes** |
| 8 | $O_2^+$ (11 e): cấu hình, $N_b$, $N_a$, $BO$, e độc thân | $N_b=8$, $N_a=3$, $BO=2{,}5$, 1 e độc thân, thuận từ | $\pi_{2p}^{*1}$ → $N_b=8$, $N_a=3$, $BO=2{,}5$, 1 e độc thân | **Yes** |
| 9 | $H_2^+$ (1 e) trong Ví dụ 4.1 | $N_b=1$, $N_a=0$, $BO=0{,}5$, 1 e độc thân | $\sigma_{1s}^1$ → $N_b=1$, $N_a=0$, $BO=0{,}5$, 1 e độc thân | **Yes** |
| 10 | $B_2$ (6 e, trộn $s$–$p$): cấu hình, $N_b$, $N_a$, $BO$, e độc thân | $N_b=4$, $N_a=2$, $BO=1$, 2 e độc thân, thuận từ | $(\sigma_{2s})^2(\sigma^*_{2s})^2(\pi_{2p})^2$ → $N_b=4$, $N_a=2$, $BO=1$, 2 e độc thân | **Yes** |
| 11 | $C_2$ (8 e, trộn $s$–$p$): cấu hình, $N_b$, $N_a$, $BO$, e độc thân | $N_b=6$, $N_a=2$, $BO=2$, 0 e độc thân, nghịch từ | $(\sigma_{2s})^2(\sigma^*_{2s})^2(\pi_{2p})^4$ → $N_b=6$, $N_a=2$, $BO=2$, 0 e độc thân | **Yes** |
| 12 | $N_2$ (10 e, trộn $s$–$p$): cấu hình, $N_b$, $N_a$, $BO$, e độc thân | $N_b=8$, $N_a=2$, $BO=3$, 0 e độc thân, nghịch từ | $(\pi_{2p})^4(\sigma_{2p_z})^2$ → $N_b=8$, $N_a=2$, $BO=3$, 0 e độc thân | **Yes** |
| 13 | $O_2$ (12 e, không trộn): cấu hình, $N_b$, $N_a$, $BO$, e độc thân | $N_b=8$, $N_a=4$, $BO=2$, 2 e độc thân, thuận từ | $\sigma_{2p_z}^2(\pi_{2p})^4(\pi^*_{2p})^2$ → $N_b=8$, $N_a=4$, $BO=2$, 2 e độc thân | **Yes** |
| 14 | $F_2$ (14 e, không trộn): cấu hình, $N_b$, $N_a$, $BO$, e độc thân | $N_b=8$, $N_a=6$, $BO=1$, 0 e độc thân, nghịch từ | $\sigma_{2p_z}^2(\pi_{2p})^4(\pi^*_{2p})^4$ → $N_b=8$, $N_a=6$, $BO=1$, 0 e độc thân | **Yes** |
| 15 | $CO$ (10 e, cấu hình rút gọn của bản thảo): cấu hình, $N_b$, $N_a$, $BO$, e độc thân | $N_b=8$, $N_a=2$, $BO=3$, 0 e độc thân, nghịch từ | $(\sigma_{2s})^2(\sigma^*_{2s})^2(\pi_{2p})^4(\sigma_{2p_z})^2$ → $N_b=8$, $N_a=2$, $BO=3$, 0 e độc thân | **Yes** |
| 16 | `T-04.4.6`/`T-04.5.4`/Q10 $B_2H_6$: tổng e hóa trị và phân bố | 12 e = 4 liên kết B–H biên (8 e) + 2 cầu B–H–B (4 e) | $2\times3+6\times1=12$ e; $4\times2=8$ e; còn 4 e cho 2 cầu = 2 e/cầu | **Yes** |
| 17 | Q10 Mô hình thay thế $2c$–$2e$: 8 đoạn nối và 7 liên kết | 8 đoạn nối cần 16 e; 7 liên kết (4 terminal + 2 cầu + 1 B–B) cần 14 e | $8\times2=16>12$; $7\times2=14>12$ — số học khớp; nhãn “2 cầu” cho B–H–B là $3c$–$2e$, không phải $2c$–$2e$ | **No** |
| 18 | Q10 Octet mỗi B trong mô hình $3c$–$2e$ | Mỗi B đủ 8 e: 4 e từ 2 liên kết biên + 4 e từ 2 cầu | $2\times2$ (biên) $+2\times2$ (mỗi cầu góp 2 e cho B) $=8$ e/B | **Yes** |
| 19 | `T-04.4.2.1` Ngưỡng $\Delta E$ so với nguồn | Bản thảo: “$\Delta E$ khoảng 10–14 eV”; changelog nói giữ cả “$\le12\text{ eV}$” | Nguồn `S-04.2`: “$\Delta E\le10$–$14\text{ eV}$”; `S-04.4`: “$\Delta E(2p-2s)\le12\text{ eV}$”; bản thảo bỏ dấu “$\le$” và bỏ hẳn 12 eV | **No** |
| 20 | `T-04.4.3.1` Tóm tắt “mức phá bền tăng $\sigma^*<\pi^*$” | $\sigma^*<\pi^*$ (tức $\sigma^*$ thấp hơn $\pi^*$) | Cả hai trật tự đều cho $\pi^*<\sigma^*$: không trộn = True, có trộn = True; chuẩn MO: $\sigma^*$ nằm trên $\pi^*$ | **No** |
| 21 | `T-04.4.5.2`/`T-04.5.3` $CO$: HOMO và LUMO theo cấu hình đã điền | HOMO là $\sigma$ trên C; LUMO là $\pi^*$ | Sau 10 e: MO cao nhất bị chiếm là $\sigma_{2p_z}$ (hướng C); MO trống thấp nhất là $\pi^*_{2p}$ → HOMO/LUMO đúng; nhãn $5\sigma$/$6\sigma^*$ ở Hình 4.4 khác quy ước | **Yes** |
| 22 | `T-04.5.1` Cân bằng điện tích–electron dãy $O_2$ | $O_2^{2-}$ 14 e, $O_2^-$ 13 e, $O_2$ 12 e, $O_2^+$ 11 e | $2\times6+2=14$; $2\times6+1=13$; $2\times6=12$; $2\times6-1=11$ | **Yes** |
| 23 | `T-04.4.6`/Q10 Cầu $B$–$H$–$B$: 3 AO → 3 MO, 2 e ở MO thấp nhất | 3 AO (2 $sp^3$ của B + 1 $1s$ của H) → 3 MO; 2 e chiếm MO liên kết | Số AO = 3 = số MO; 2 e < 4 e (sức chứa 2 MO thấp) → 1 MO liên kết đầy, 1 không liên kết trống, 1 phản liên kết trống | **Yes** |

**Cân bằng nguyên tố/điện tích (kiểm tra bổ sung):**
- Dãy $O_2$: tổng electron hóa trị $=2\times6-q$ với $q=+1,0,-1,-2$ → 11, 12, 13, 14 e; khớp `N_b+N_a` từng loài (8+3, 8+4, 8+5, 8+6). **Đạt.**
- $CO$: $4+6=10$ e; $N_b+N_a=8+2=10$; $BO=3$; không có electron độc thân. **Đạt.**
- $B_2H_6$: $2\times3+6\times1=12$ e; $8$ e biên $+4$ e cầu $=12$ e; mỗi B đạt octet trong mô hình $3c$–$2e$. **Đạt.**
- $H_2^+$: 1 e; $N_b+N_a=1+0=1$. **Đạt.**
- Phản ứng không có trong chương, nên không có cân bằng phương trình hóa học cần kiểm.

---

## E. Tag and Reference Audit

### 1. Kiểm toán Thẻ Provenance & Verification (theo `_state/checks/ch04_s3_tags.md`)

- **Tổng số thẻ đếm bằng `check_tags.py` trong `03_chapters/ch04_draft.md`:**
  - `[ADDED]`: **54**
  - `[VERIFY]`: **44**
  - `[CONFLICT]`: **0**
  - `[FIGURE]`: **0** theo script — **5** theo đếm thủ công (`[FIGURE 4.2]`–`[FIGURE 4.6]`; Hình 4.1 là sơ đồ Mermaid, không phải placeholder).
- **Đánh giá tính chính xác của việc gắn thẻ:**
  1. **(a) Nội dung thêm mới chưa gắn thẻ `[ADDED]`:** **2 trường hợp rõ ràng** — cụm “$\lvert\Psi\rvert^2$ là mật độ xác suất” (`T-04.4.1.1`, `QA-04.12`) và “$He_2$ … chỉ là dimer van der Waals” (`T-04.4.3.2`, `QA-04.11`). Ngoài ra cấu hình electron đầy đủ của $CO$ (`T-04.4.5.2`) là kiến thức chuẩn bổ sung nhưng chỉ gắn `[SRC: S-04.5]`; đề nghị bổ sung `[ADDED: CO electron configuration]` khi sửa.
  2. **(b) Khẳng định cần `[VERIFY]` nhưng thiếu thẻ:** **0 trường hợp nghiêm trọng.** Toàn bộ dữ kiện thực nghiệm/không có nguồn gốc (`O_2` thuận từ, $BO$ bán nguyên, $E_{lk}(N_2)$, ngưỡng $\Delta E$, $CO$–Hb 200–250 lần, $B_2H_6$ $3c$–$2e$, $He_2$) đều có `[VERIFY]` với mã `V-04.xx`. Lưu ý: `V-04.11` và `V-04.12` **không có trong audit S1** (`V-04.01`–`V-04.10`) nhưng đã được ghi trong `_state/verification_list_running.md` như mã do S3 đề xuất — cần chuyên gia xác nhận việc mở rộng hàng đợi.
  3. **(c) Sử dụng sai chức năng thẻ:** **1 trường hợp nhỏ** — Câu 4 dùng mã issue `I-04.06, I-04.17` thay vì mã kiểm chứng `V-04.12` (`QA-04.20`); 1 trường hợp cú pháp `[FIGURE 4.k | …]` không được tool nhận diện (`QA-04.07`).

### 2. Kiểm toán Tài liệu Tham khảo (Quy tắc `R4` / `CITATION_STYLE: Vancouver`)

- Nguồn `00_source_original/ch04_doc-hvc-4.html` có **0 tài liệu tham khảo**; `APPROVED_REFERENCE_LIST: none` trong `00_config.md`.
- Tại `T-04.8.1` (dòng 545–551), bản thảo **không bịa** tên sách, tác giả, năm, nhà xuất bản, DOI hay số trang. Ba mục là ba thẻ giữ chỗ `[VERIFY: reference needed for … (V-04.08)]`, đúng quy tắc R4.
- **Chưa thể xác nhận bất kỳ tài liệu nào tồn tại**; chưa áp dụng được định dạng Vancouver vì chưa có thông tin thư mục. Không có lỗi “trích dẫn không truy vết được” theo nghĩa bịa đặt.
- **Kết luận:** Tuân thủ R4. Ba tài liệu cần được người dùng cung cấp/duyệt trước khi phát hành bản Clean.

---

## F. Learning Objective Alignment Matrix

| LO | Nội dung chuẩn đầu ra (`T-04.2.1`) | Nơi giảng dạy (T-ID) | Câu hỏi/bài tập đánh giá | Cấp độ nhận thức | Đáp án chi tiết | Đạt yêu cầu? |
|---|---|---|---|---|---|---|
| **`LO-1`** | Phát biểu bản chất MO (hạt nhân đa tâm), LCAO, ba điều kiện tổ hợp, phân loại MO, công thức $BO$, tiêu chí từ tính. | `T-04.3.1`, `T-04.4.1`–`T-04.4.3`, `T-04.6.1`, `T-04.6.2` | Câu 1, 2, 3, 4 (`T-04.7.1`) | Knowledge / Comprehension | Có (`T-04.7.4`, dòng 451–457), giải thích từng phương án nhiễu | **Đạt** |
| **`LO-2`** | Lập giản đồ MO đồng hạch chu kỳ 2 với hai trật tự mức, điền electron theo Pauli–Hund, tính $BO$, dự đoán độ dài/năng lượng liên kết và từ tính. | `T-04.4.4`, `T-04.5.5`, `T-04.6.2` | Bài tập 5, 6, 7 (`T-04.7.2`) | Application | Có (`T-04.7.4`, dòng 459–521), có bảng đối chiếu và kiểm tra tổng e | **Đạt** |
| **`LO-3`** | Giải thích $O_2$ thuận từ, bậc bán nguyên của $H_2^+, O_2^+, O_2^-$, khác biệt $N_2$/$O_2$ và cơ chế CO–hemoglobin qua HOMO–LUMO. | `T-04.4.4.3`, `T-04.4.5`, `T-04.5.2`, `T-04.5.3` | Bài tập 5, 7; Câu 8, 9 (`T-04.7.2`–`T-04.7.3`) | Application / Analysis | Có (`T-04.7.4`, dòng 459–533) | **Đạt** *(thiếu đánh giá trực tiếp $H_2^+$ — `QA-04.15`)* |
| **`LO-4`** | So sánh MO với VB, nhận diện khi nào cần MO, giải thích $3c$–$2e$ trong $B_2H_6$ và nêu giới hạn mô hình. | `T-04.3.1`, `T-04.4.6`, `T-04.6.2` | Câu 8 (phần 3), Câu 10 (`T-04.7.3`) | Analysis / Advanced | Có (`T-04.7.4`, dòng 523–539) | **Đạt** |

**Kết luận:** Cả bốn `LO-1`–`LO-4` đều được **giảng dạy** và **đánh giá** bằng câu hỏi/bài tập có đáp án chi tiết. Khoảng trống duy nhất: `LO-3` nêu $H_2^+$ nhưng Bài tập 5 không yêu cầu trực tiếp $H_2^+$ (chỉ có trong Ví dụ 4.1) — xem `QA-04.15`, mức Minor.

---

## G. Strengths

1. **Bảo toàn nguồn xuất sắc:** 9/9 S-ID, `REMOVE = 0`; không có nội dung cốt lõi nào bị cắt; các thay đổi nghĩa đều có chủ đích, ghi changelog và gắn `[VERIFY]`.
2. **Đếm electron và $BO$ chính xác:** toàn bộ dãy $O_2^{2-}/O_2^-/O_2/O_2^+$, $H_2^+$, $B_2/C_2/N_2/O_2/F_2$, $CO$ và $B_2H_6$ đều khớp khi tái lập; cân bằng electron/điện tích đạt.
3. **Xử lý $B_2H_6$ $3c$–$2e$ tốt:** đếm đúng 12 e, phân biệt 8 e biên + 4 e cầu, kiểm tra octet và bác bỏ mô hình $2c$–$2e$ bằng số học 16 e/14 e.
4. **Kỷ luật `DOMAIN_RULES`:** không thêm liều, chỉ định, dược động học hay tác dụng phụ; nội dung CO–Hb bám nguồn, có cảnh báo phạm vi rõ ràng.
5. **Minh bạch học thuật:** ba thẻ tham khảo đúng R4, không bịa thư mục; 5 placeholder hình và sơ đồ Mermaid được mô tả rõ là chưa vẽ.

---

## H. Items for Human Expert Decision

1. **Ngưỡng $\Delta E$ (`V-04.04`, `QA-04.03`):** chốt cách trình bày giữa $\le10$–$14\text{ eV}$ (`S-04.2`) và $\le12\text{ eV}$ (`S-04.4`) — dùng một ngưỡng kèm chú thích, hay giữ cả hai theo từng nhóm nguyên tố?
2. **Nội dung $B_2H_6$ $3c$–$2e$ (`V-04.09`, `M-04.10`, `M-04.14`):** xác nhận cho phép bổ sung kiến thức giáo trình chuẩn ngoài nguồn (đã được duyệt ở Gate A bằng Q1; cần xác nhận lần cuối trước Gate B).
3. **Dữ liệu $B_2, C_2, F_2$ (`V-04.07`, `M-04.08`):** xác nhận cấu hình/$BO$/từ tính chuẩn được phép giữ trong Bảng 4.2.
4. **Độ bền $CO$–Hb “200–250 lần” và hệ quả ngạt mô (`V-04.05`):** xác nhận giữ nguyên số liệu nguồn; đây là dữ kiện lâm sàng không có trích dẫn gốc.
5. **Cách diễn đạt $He_2$ (`V-04.10`):** chọn “dimer van der Waals” (chính xác hơn) hay “không tạo liên kết cộng hóa trị bền” (bám nguồn hơn).
6. **Danh mục tài liệu tham khảo (`V-04.08`):** cung cấp giáo trình chuẩn để thay ba thẻ `[VERIFY]` và áp dụng định dạng Vancouver.
7. **Mã kiểm chứng mới `V-04.11`, `V-04.12`:** xác nhận việc S3 mở rộng hàng đợi ngoài audit S1 (`V-04.01`–`V-04.10`); hiện đã có trong `_state/verification_list_running.md`.
8. **Sản xuất hình:** 5 placeholder `Hình 4.2`–`4.6` cần vẽ; Hình 4.1 (Mermaid) cần kiểm tra render trên nền tảng xuất bản.

---

## I. Not Verified / Limitations

1. **Không có nguồn tham khảo bên ngoài:** `APPROVED_REFERENCE_LIST: none`; QA **không thể** xác nhận bất kỳ dữ kiện nào với sách giáo trình hay tài liệu gốc. Mọi giá trị $BO$, trật tự mức MO, ngưỡng $\Delta E$, $E_{lk}(N_2)=945\text{ kJ/mol}$, độ bền $CO$–Hb 200–250 lần và tính thuận từ của $O_2$ lỏng vẫn là **giả thuyết cần chuyên gia xác nhận**.
2. **Không kiểm tra hình ảnh:** Hình 4.2–4.6 chỉ là placeholder; Hình 4.1 là Mermaid. Không có QA trực quan về bố cục, nhãn trục, mũi tên spin hay màu.
3. **Không đọc suy luận tác giả:** QA độc lập, không đọc `ch04_selfcheck.md`, `ch04_part1.md`–`ch04_part3.md` hay thảo luận tác giả; chỉ đối chiếu nguồn, ma trận, bản thảo, changelog và audit.
4. **Khác biệt phương pháp đếm từ:** `check_length.py` báo nguồn 1.153 từ (sau khi bỏ math/markup), trong khi audit ghi 1.443 từ; tỷ lệ 5,79x chỉ mang tính tham khảo, không dùng để kết luận over-compression.
5. **Giới hạn của `check_tags.py`:** script không nhận diện cú pháp `[FIGURE 4.k | …]`, nên báo `[FIGURE]=0` trong khi có 5 placeholder. Số 5 là kết quả đếm thủ công; cần sửa tool hoặc chuẩn hóa cú pháp.
6. **Một số phép kiểm chỉ mang tính mô hình:** biểu thức $E_\pm$ và điều kiện $\beta<\alpha S$ phụ thuộc quy ước dấu của $\beta$ và $S$; QA đã dùng quy ước phổ biến ($\alpha,\beta<0$, $S>0$) và nêu rõ trong báo cáo tính toán.
7. **Không kiểm tra chéo toàn bộ chương khác:** các tham chiếu `T-01.4.1`, `T-02.4.2`, `T-03.4.6` được kiểm tra sự tồn tại/ngữ cảnh, nhưng nội dung chi tiết của Chương 01–03 không được tái thẩm định trong lượt này.
8. **Chưa xác minh tính đúng của mọi `[VERIFY]`:** 44 thẻ `[VERIFY]` vẫn mở; QA chỉ kiểm tra rằng chúng được gắn đúng chỗ, không xác nhận nội dung khoa học bên trong.

---

**GATE B: STOP.** Báo cáo QA độc lập hoàn tất. Không sửa bản thảo, nguồn hay `_state/`. Ba lỗi **Major** (`QA-04.01`–`QA-04.03`) cần được xử lý ở vòng S3-FIX trước khi trình duyệt Gate B.
