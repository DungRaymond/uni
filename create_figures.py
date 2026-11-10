import os

img_dir = 'F:/repo/uni/public/images'

# Danh sách các file SVG cần tạo: (tên_file, mô tả)
figures = [
    # hoa-duoc Ch04
    ('fig_ch04_4.2_mo_energy_o2_f2.svg', 'MO energy diagram: O2 và F2', 'MO energy diagram - O2 và F2 (không trộn 2s–2p)'),
    ('fig_ch04_4.3_mo_energy_b2_c2_n2.svg', 'MO energy diagram: B2, C2, N2', 'MO energy diagram - B2, C2, N2 (có trộn 2s–2p)'),
    ('fig_ch04_4.4_heteronuclear_mo_co.svg', 'Heteronuclear MO diagram: CO', 'Heteronuclear MO diagram - CO, HOMO trên C, LUMO π*'),
    ('fig_ch04_4.5_orbital_overlap.svg', 'Orbital overlap diagram: sigma, pi', 'Orbital overlap diagram - liên kết σ và π'),
    ('fig_ch04_4.6_3c2e_bonding_b2h6.svg', '3c-2e bonding diagram: B2H6', 'Hai cầu B-H-B trong B2H6 - liên kết 3c-2e'),

    # hoa-duoc Ch05
    ('fig_ch05_5.1_interaction_diagram.svg', 'Interaction diagram: Keesom, Debye, London', 'Ba thành phần lực Van der Waals: Keesom, Debye, London'),
    ('fig_ch05_5.2_hydrogen_bond_network.svg', 'Hydrogen bond network: nước', 'Mạng lưới liên kết hydro 3 chiều của nước'),
    ('fig_ch05_5.3_molecular_structure.svg', 'Molecular structure: salicylic acid vs 4-hydroxybenzoic acid', 'Acid salicylic (nội phân tử) vs acid 4-hydroxybenzoic (ngoại phân tử)'),

    # hoa-duoc Ch06
    ('fig_ch06_6.1_coordination_sphere.svg', 'Coordination sphere diagram', 'Cấu trúc cầu nội và cầu ngoại của phức chất'),
    ('fig_ch06_6.2_d_orbital_splitting.svg', 'd-orbital splitting diagram: octahedral', 'Tách mức orbital d trong trường bát diện (Oh)'),
    ('fig_ch06_6.3_spectrochemical_series.svg', 'Spectrochemical series', 'Dãy phổ hóa học của phối tử: I- đến CO'),

    # hoa-duoc Ch07
    ('fig_ch07_7.1_coordination_isomer.svg', 'Coordination isomer diagram: cisplatin vs transplatin', 'Cơ cấu cisplatin (cis) và transplatin - hai phân tử [Pt(NH3)2Cl2] vuông phẳng bên nhau'),
    ('fig_ch07_7.2_optical_isomer.svg', 'Optical isomer diagram: [Co(en)3]3+', 'Đối quang Δ và Λ của [Co(en)3]3+ - hai phân tử là ảnh gương qua gương'),
    ('fig_ch07_7.3_classification_flowchart.svg', 'Classification flowchart: coordination isomers', 'Sơ đồ phân loại tổng thể đồng phân phức chất: Cấu trúc & Lập thể'),

    # y-duoc Ch06
    ('fig_y06_6.1_blood_pressure_device.svg', 'Blood pressure measurement device', 'Thiết bị đo huyết áp và cách đeo băng quấn đúng cỡ'),
    ('fig_y06_6.2_proper_posture.svg', 'Proper posture for blood pressure measurement', 'Tư thế ngồi đúng: tay ngang mức tim, chân phẳng, không bắt chéo chân'),
    ('fig_y06_6.3_cuff_size_comparison.svg', 'Cuff size comparison', 'So sánh sai số do băng quấn nhỏ vs đúng cỡ'),

    # y-duoc Ch08
    ('fig_y08_8.1_membrane_potential.svg', 'Resting membrane potential and ion distribution', 'Điện thế màng và phân bố ion Na+/K+ hai bên màng tế bào'),
    ('fig_y08_8.2_action_potential.svg', 'Action potential waveform', 'Sóng điện thế hoạt động: khử cực / tái cực / quá phân cực / thời kỳ trớ'),
    ('fig_y08_8.3_cardiac_action_potential.svg', 'Cardiac action potential', 'Điện thế hoạt động cơ tim với pha bình nguyên và dòng Ca2+'),
]

print(f"Sẽ tạo {len(figures)} file ảnh SVG")

for fname, title, desc in figures:
    svg_content = f'''<?xml version="1.0" encoding="UTF-8"?>
<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .title {{ font-family: Arial, sans-serif; font-size: 18px; font-weight: bold; fill: #333; }}
      .subtitle {{ font-family: Arial, sans-serif; font-size: 14px; fill: #555; }}
      .label {{ font-family: Arial, sans-serif; font-size: 12px; fill: #333; }}
      .axis {{ stroke: #333; stroke-width: 1; }}
      .line {{ stroke: #007acc; stroke-width: 2; fill: none; }}
      .point {{ fill: #007acc; }}
      .box {{ fill: #e6f3ff; stroke: #007acc; stroke-width: 2; }}
      .arrow {{ stroke: #333; stroke-width: 2; marker-end: url(#arrowhead); }}
      .marker {{ fill: #ff6b35; }}
    </style>
    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 9 3.5, 0 7" fill="#333"/>
    </marker>
  </defs>
  
  <!-- Background -->
  <rect width="100%" height="100%" fill="white"/>
  
  <!-- Title -->
  <text x="400" y="40" text-anchor="middle" class="title">{title}</text>
  <text x="400" y="65" text-anchor="middle" class="subtitle">{desc}</text>
  
  <!-- Placeholder content - Simple diagram representation -->
  <g transform="translate(400, 320)">
    <!-- Main diagram element -->
    <rect x="-150" y="-100" width="300" height="200" class="box"/>
    
    <!-- Center point -->
    <circle cx="0" cy="0" r="8" class="marker"/>
    
    <!-- Labels -->
    <text x="0" y="-115" text-anchor="middle" class="label">{title}</text>
    <text x="0" y="120" text-anchor="middle" class="label">{desc}</text>
    
    <!-- Axes -->
    <line x1="-150" y1="0" x2="150" y2="0" class="axis"/>
    <line x1="0" y1="-100" x2="0" y2="100" class="axis"/>
    
    <!-- Axis labels -->
    <text x="155" y="5" text-anchor="middle" class="label" font-size="10">X</text>
    <text x="-5" y="-110" text-anchor="middle" class="label" font-size="10">Y</text>
    
    <!-- Sample data points -->
    <circle cx="-60" cy="20" r="5" class="point"/>
    <circle cx="0" cy="-40" r="5" class="point"/>
    <circle cx="60" cy="30" r="5" class="point"/>
    <circle cx="-30" cy="60" r="5" class="point"/>
    <circle cx="40" cy="-20" r="5" class="point"/>
  </g>
  
  <!-- Footer -->
  <text x="400" y="580" text-anchor="middle" class="subtitle" font-size="10">[FIGURE: {fname.split('_')[2] if '_' in fname else fname}] - Placeholder image</text>
  <text x="400" y="595" text-anchor="middle" class="subtitle" font-size="10">Nguồn: Y dược – Master Lecture Notes</text>
</svg>'''
    
    filepath = os.path.join(img_dir, fname)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(svg_content)
    print(f"Created: {fname}")

print(f"\nTotal {len(figures)} SVG files created in {img_dir}")