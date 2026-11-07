/**
 * ==========================================================================
 * BOOK VIEW ENGINE (Hệ Thống Lật Sách & Đọc Tài Liệu Chuyên Nghiệp)
 * ==========================================================================
 */

const BookViewer = (() => {
  // State
  let mode = 'basic'; // 'basic' or 'book'
  let pages = [];
  let currentSpread = 0; // 0 means pages[0] (left) & pages[1] (right)
  let soundEnabled = true;
  let fontSizeLevel = 1; // 0: Small, 1: Normal, 2: Large, 3: Extra Large
  const FONT_SIZES = ['0.86rem', '0.94rem', '1.04rem', '1.14rem'];
  let isFlipping = false;

  // Web Audio API Synthesized Page Flip Sound
  function playPageFlipSound() {
    if (!soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      if (ctx.state === 'suspended') {
        ctx.resume();
      }
      const bufferSize = Math.floor(ctx.sampleRate * 0.12);
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.032));
      }
      const noise = ctx.createBufferSource();
      noise.buffer = buffer;
      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.value = 850;
      filter.Q.value = 1.3;
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.16, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.11);
      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      noise.start();
    } catch (e) {
      // AudioContext policy or unsupported
    }
  }

  // Parse HTML document and build book pages
  function extractBookPages() {
    const pagesList = [];
    const subjectTitleEl = document.querySelector('.subject-title span') || document.querySelector('header h1');
    const subjectTitle = subjectTitleEl ? subjectTitleEl.textContent.trim() : 'Giáo Trình Học Tập';
    const subjectBadgeEl = document.querySelector('.subject-badge');
    const badgeText = subjectBadgeEl ? subjectBadgeEl.textContent.trim() : 'Tài Liệu Chuyên Đề';
    const docCards = Array.from(document.querySelectorAll('.doc-card'));

    // ----------------------------------------------------
    // PAGE 1: Hardcover Book Cover
    // ----------------------------------------------------
    pagesList.push({
      type: 'cover',
      headerLeft: subjectTitle,
      headerRight: 'Bìa Sách Giáo Trình',
      chapterTitle: subjectTitle,
      docId: 'cover',
      html: `
        <div class="book-cover-page">
          <div class="cover-badge">${badgeText}</div>
          <div class="cover-icon">💊</div>
          <h1 class="cover-title">${subjectTitle}</h1>
          <p class="cover-sub">Kho chuyên đề giáo trình y dược đại cương, sinh lý học, dược động học, bệnh học & miễn dịch học chuẩn xác.</p>
          <div class="cover-stats">
            <div class="cover-stat-box">📚 ${docCards.length} Chuyên đề & Tài liệu</div>
            <div class="cover-stat-box">⚡ Chế độ Đọc Sách 3D</div>
          </div>
          <button class="btn-open-book" onclick="BookViewer.flipNext()">
            <span>Bắt Đầu Đọc Sách</span>
            <span>➔</span>
          </button>
        </div>
      `
    });

    // ----------------------------------------------------
    // PAGE 2: Preface & Shortcuts Guide
    // ----------------------------------------------------
    pagesList.push({
      type: 'preface',
      headerLeft: subjectTitle,
      headerRight: 'Lời Mở Đầu & Hướng Dẫn',
      chapterTitle: 'Lời Mở Đầu & Hướng Dẫn',
      docId: 'preface',
      html: `
        <h3>Lời Mở Đầu & Hướng Dẫn Đọc Sách</h3>
        <p>Chào mừng bạn đến với hệ thống giao diện <strong>Book View (Lật Sách 3D)</strong>. Tính năng này được thiết kế nhằm đem lại trải nghiệm học tập và tra cứu như đang mở một cuốn sách giáo trình thực thụ.</p>
        
        <h4>1. Các phím tắt tiện ích khi đọc:</h4>
        <ul>
          <li><code>➔</code> hoặc <code>Phím Cách (Space)</code>: Lật sang trang tiếp theo.</li>
          <li><code>⬅</code>: Lật lùi về trang trước.</li>
          <li><code>B</code>: Chuyển đổi qua lại giữa <strong>Book View</strong> và <strong>Basic View</strong>.</li>
          <li><code>F</code>: Bật / Tắt chế độ toàn màn hình (Fullscreen).</li>
          <li><code>M</code> hoặc <code>T</code>: Đóng / Mở mục lục nhanh.</li>
        </ul>

        <h4>2. Tính năng tương tác:</h4>
        <ul>
          <li>Bấm vào mép ngoài trang sách hoặc dùng 2 nút mũi tên để lật trang.</li>
          <li>Thanh điều khiển dưới chân cho phép nhập số trang nhảy trực tiếp, thu phóng cỡ chữ và bật/tắt âm thanh lật sách.</li>
          <li>Các công thức Toán/Hóa/Dược được render sắc nét qua MathJax và giữ nguyên chuẩn xác trong từng trang sách.</li>
        </ul>

        <div class="callout">
          <div class="callout-title">Gợi ý học tập</div>
          Sử dụng Mục lục ở các trang tiếp theo để nhảy nhanh tới từng Chuyên đề bài giảng cần ôn tập.
        </div>
      `
    });

    // ----------------------------------------------------
    // PAGE 3 & 4: Table of Contents (Mục lục)
    // ----------------------------------------------------
    // We will compute chapter target pages later after generating content pages
    const tocPage1 = {
      type: 'toc',
      headerLeft: subjectTitle,
      headerRight: 'Mục Lục (Phần 1)',
      chapterTitle: 'Mục Lục Giáo Trình',
      docId: 'toc-1',
      items: []
    };

    const tocPage2 = {
      type: 'toc',
      headerLeft: subjectTitle,
      headerRight: 'Mục Lục (Phần 2)',
      chapterTitle: 'Mục Lục Giáo Trình (tiếp)',
      docId: 'toc-2',
      items: []
    };

    pagesList.push(tocPage1);
    pagesList.push(tocPage2);

    // ----------------------------------------------------
    // CONTENT PAGES: Group sections from each .doc-card
    // ----------------------------------------------------
    docCards.forEach((card, cardIndex) => {
      const docId = card.id;
       const docNum = card.querySelector('.doc-num, .doc-number')?.textContent.trim() || `${cardIndex + 1}`;
      const docTitle = card.querySelector('.doc-title')?.textContent.trim() || `Chuyên đề ${docNum}`;
      const docTag = card.querySelector('.doc-tag')?.textContent.trim() || 'Tài liệu';
       const body = card.querySelector('.doc-body, .doc-content');
      if (!body) return;

      const startPageIndex = pagesList.length + 1; // 1-based page number

      // Register chapter in TOC
      const tocItem = {
        num: docNum,
        title: docTitle,
        tag: docTag,
        pageNumber: startPageIndex,
        docId: docId
      };

      if (cardIndex < Math.ceil(docCards.length / 2)) {
        tocPage1.items.push(tocItem);
      } else {
        tocPage2.items.push(tocItem);
      }

      // Break sections of this card into pages
      const sections = [];
      let currentSection = { title: docTitle, htmlParts: [] };
      Array.from(body.children).forEach(child => {
        if (child.tagName === 'H4') {
          if (currentSection.htmlParts.length > 0) {
            sections.push(currentSection);
          }
          currentSection = { title: child.textContent.trim(), htmlParts: [child.outerHTML] };
        } else {
          currentSection.htmlParts.push(child.outerHTML);
        }
      });
      if (currentSection.htmlParts.length > 0) {
        sections.push(currentSection);
      }

      // Group subsections into pages (approx 1-2 subsections per page based on content length)
      let pageParts = [];
      let currentLength = 0;

      sections.forEach((sec, secIdx) => {
       const secHtml = sec.htmlParts.join('\n');
        const secLen = secHtml.length;

        if (pageParts.length > 0 && (currentLength + secLen > 2400)) {
          // Push current page
          pagesList.push({
            type: 'content',
            headerLeft: subjectTitle,
            headerRight: `${docTitle} (${docTag})`,
            chapterTitle: docTitle,
            docId: docId,
            html: (pageParts.length === 1 && secIdx === 1 ? `<h3>${docTitle}</h3>` : '') + pageParts.join('\n')
          });
          pageParts = [secHtml];
          currentLength = secLen;
        } else {
          if (pageParts.length === 0 && sections.indexOf(sec) === 0) {
            pageParts.push(`<h3>${docTitle}</h3>`);
          }
          pageParts.push(secHtml);
          currentLength += secLen;
        }
      });

      if (pageParts.length > 0) {
        pagesList.push({
          type: 'content',
          headerLeft: subjectTitle,
          headerRight: `${docTitle} (${docTag})`,
          chapterTitle: docTitle,
          docId: docId,
          html: pageParts.join('\n')
        });
      }
    });

    // Populate HTML for TOC pages now that pageNumbers are established
    [tocPage1, tocPage2].forEach(toc => {
      let itemsHtml = '<ul class="book-toc-list">';
      toc.items.forEach(it => {
        itemsHtml += `
          <li class="book-toc-item" onclick="BookViewer.goToPage(${it.pageNumber})">
            <div class="toc-left">
              <span class="toc-num">${it.num}</span>
              <span>${it.title}</span>
            </div>
            <span class="toc-page">Trang ${it.pageNumber}</span>
          </li>
        `;
      });
      itemsHtml += '</ul>';
      toc.html = `
        <h3>Mục Lục Chuyên Đề & Bài Giảng</h3>
        <p style="color:#64748b; font-size:0.85rem; margin-bottom:14px;">Bấm vào chuyên đề bất kỳ để lật nhanh tới trang tương ứng:</p>
        ${itemsHtml}
      `;
    });

    // If total pages is odd, add an ending note page to make spreads balanced
    if (pagesList.length % 2 !== 0) {
      pagesList.push({
        type: 'backcover',
        headerLeft: subjectTitle,
        headerRight: 'Ghi Chú Kết Thúc',
        chapterTitle: 'Ghi Chú & Tra Cứu',
        docId: 'backcover',
        html: `
          <div class="book-cover-page" style="border: 2px dashed #cbd5e1;">
            <div class="cover-icon">📖</div>
            <h3 style="color:#334155;">Đã Hết Trang Giáo Trình</h3>
            <p style="color:#64748b; max-width:380px; margin: 10px 0 20px 0;">
              Bạn đã xem hết toàn bộ nội dung của môn học. Bạn có thể sử dụng Mục lục để quay lại chuyên đề cần đọc lại, hoặc chuyển sang chế độ Cuộn chuẩn.
            </p>
            <div style="display:flex; gap:10px;">
              <button class="book-ctrl-btn" onclick="BookViewer.goToPage(3)">📑 Về Mục Lục</button>
              <button class="book-ctrl-btn" onclick="BookViewer.goToPage(1)">⏮ Về Bìa Sách</button>
              <button class="book-ctrl-btn active" onclick="BookViewer.setMode('basic')">📜 Về Cuộn Chuẩn</button>
            </div>
          </div>
        `
      });
    }

    return pagesList;
  }

  // Create Book Viewer DOM
  function buildBookDOM() {
    let container = document.getElementById('book-viewer-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'book-viewer-container';

      // Insert right after .toolbar
      const toolbar = document.querySelector('.toolbar');
      if (toolbar && toolbar.nextSibling) {
        toolbar.parentNode.insertBefore(container, toolbar.nextSibling);
      } else {
        document.querySelector('.container').appendChild(container);
      }
    }

    container.innerHTML = `
      <div class="book-scene">
        <div class="book-viewport" id="book-viewport">
          <div class="book-spine-shell"></div>

          <!-- Outer Navigation Arrows -->
          <button class="book-nav-arrow nav-prev" id="btn-nav-prev" onclick="BookViewer.flipPrev()" title="Trang trước (Phím ←)">
            &#10094;
          </button>
          <button class="book-nav-arrow nav-next" id="btn-nav-next" onclick="BookViewer.flipNext()" title="Trang sau (Phím → hoặc Space)">
            &#10095;
          </button>

          <!-- 3D Flipper Layer for Page Turning -->
          <div class="flipper-layer" id="flipper-layer"></div>

          <!-- Open Book Spread -->
          <div class="book-spread">
            <!-- Left Page -->
            <div class="book-page-leaf page-left" id="leaf-left">
              <div class="page-running-head">
                <span id="left-head-title">MÔN HỌC</span>
                <span class="sub-tag" id="left-head-tag">TRANG CHẴN</span>
              </div>
              <div class="page-body-flow" id="left-body-content"></div>
              <div class="page-running-foot">
                <span>Kho Tài Liệu Y Dược</span>
                <span class="page-num" id="left-page-num">Trang 0</span>
              </div>
            </div>

            <!-- Book Crease / Spine Shadow -->
            <div class="book-spine-crease"></div>

            <!-- Right Page -->
            <div class="book-page-leaf page-right" id="leaf-right">
              <div class="page-running-head">
                <span id="right-head-title">CHUYÊN ĐỀ</span>
                <span class="sub-tag" id="right-head-tag">TRANG LẺ</span>
              </div>
              <div class="page-body-flow" id="right-body-content"></div>
              <div class="page-running-foot">
                <span class="page-num" id="right-page-num">Trang 0</span>
                <span>Modul Y - Dược</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Floating Bottom Control Bar -->
      <div class="book-control-bar">
        <button class="book-ctrl-btn" onclick="BookViewer.goToPage(1)" title="Về trang bìa">⏮ Bìa</button>
        <button class="book-ctrl-btn" onclick="BookViewer.flipPrev()" title="Lùi lại (←)">◀ Trước</button>
        
        <div class="book-page-indicator">
          <span>Trang</span>
          <input type="text" id="input-page-num" value="1" onchange="BookViewer.onPageInput(this.value)" />
          <span id="total-pages-label">/ 0</span>
        </div>

        <button class="book-ctrl-btn" onclick="BookViewer.flipNext()" title="Tiếp theo (→ hoặc Phím cách)">Tiếp ▶</button>
        <button class="book-ctrl-btn" onclick="BookViewer.goToPage(BookViewer.getTotalPages())" title="Trang cuối">Cuối ⏭</button>

        <span style="border-right: 1px solid #cbd5e1; height: 18px; margin: 0 4px;"></span>

        <button class="book-ctrl-btn" onclick="BookViewer.toggleTOC()" title="Mục lục chuyên đề">📑 Mục lục</button>
        <button class="book-ctrl-btn" onclick="BookViewer.cycleFontSize()" title="Thay đổi cỡ chữ">🔍 Chữ <span id="font-size-label">A</span></button>
        <button class="book-ctrl-btn" id="btn-toggle-sound" onclick="BookViewer.toggleSound()" title="Âm thanh lật sách">🔊 Âm thanh</button>
        <button class="book-ctrl-btn" onclick="BookViewer.toggleFullscreen()" title="Toàn màn hình (F)">⛶ Toàn màn hình</button>
        <button class="book-ctrl-btn" style="background:#0284c7; color:#fff;" onclick="BookViewer.setMode('basic')" title="Chuyển về xem cuộn cơ bản">📜 Về cuộn chuẩn</button>
      </div>

      <!-- Quick TOC Drawer Modal -->
      <div class="toc-drawer-overlay" id="toc-overlay" onclick="BookViewer.toggleTOC(false)"></div>
      <div class="book-toc-drawer" id="toc-drawer">
        <div class="toc-drawer-header">
          <h3>📑 Mục Lục Chuyên Đề</h3>
          <button class="toc-drawer-close" onclick="BookViewer.toggleTOC(false)">&times;</button>
        </div>
        <div class="toc-drawer-body" id="toc-drawer-list"></div>
      </div>
    `;

    // Populate TOC Drawer List
    const drawerList = document.getElementById('toc-drawer-list');
    if (drawerList) {
      let drawerHtml = '<ul class="book-toc-list">';
      const docCards = document.querySelectorAll('.doc-card');
      docCards.forEach((card, idx) => {
        const title = card.querySelector('.doc-title')?.textContent.trim() || `Chuyên đề ${idx + 1}`;
        const num = card.querySelector('.doc-num')?.textContent.trim() || `${idx + 1}`;
        drawerHtml += `
          <li class="book-toc-item" onclick="BookViewer.goToDoc('${card.id}')">
            <div class="toc-left">
              <span class="toc-num">${num}</span>
              <span>${title}</span>
            </div>
            <span class="toc-page">Xem ➔</span>
          </li>
        `;
      });
      drawerHtml += '</ul>';
      drawerList.innerHTML = drawerHtml;
    }
  }

  // Render current spread of pages
  function renderSpread() {
    if (pages.length === 0) return;

    const leftIdx = currentSpread;
    const rightIdx = currentSpread + 1;

    const leftPage = pages[leftIdx];
    const rightPage = pages[rightIdx];

    // Left Page DOM elements
    const leftHeadTitle = document.getElementById('left-head-title');
    const leftHeadTag = document.getElementById('left-head-tag');
    const leftBody = document.getElementById('left-body-content');
    const leftNum = document.getElementById('left-page-num');

    // Right Page DOM elements
    const rightHeadTitle = document.getElementById('right-head-title');
    const rightHeadTag = document.getElementById('right-head-tag');
    const rightBody = document.getElementById('right-body-content');
    const rightNum = document.getElementById('right-page-num');

    if (leftPage) {
      leftHeadTitle.textContent = leftPage.headerLeft || 'GIÁO TRÌNH';
      leftHeadTag.textContent = leftPage.chapterTitle || '';
      leftBody.innerHTML = leftPage.html;
      leftNum.textContent = `Trang ${leftIdx + 1}`;
      leftBody.scrollTop = 0;
    } else {
      leftBody.innerHTML = '';
      leftNum.textContent = '';
    }

    if (rightPage) {
      rightHeadTitle.textContent = rightPage.chapterTitle || 'CHUYÊN ĐỀ';
      rightHeadTag.textContent = rightPage.headerRight || '';
      rightBody.innerHTML = rightPage.html;
      rightNum.textContent = `Trang ${rightIdx + 1}`;
      rightBody.scrollTop = 0;
    } else {
      rightBody.innerHTML = '';
      rightNum.textContent = '';
    }

    // Update Input Indicator
    const inputPage = document.getElementById('input-page-num');
    const totalLabel = document.getElementById('total-pages-label');
    if (inputPage) inputPage.value = leftIdx + 1;
    if (totalLabel) totalLabel.textContent = `/ ${pages.length}`;

    // Update Arrow Disabled States
    const btnPrev = document.getElementById('btn-nav-prev');
    const btnNext = document.getElementById('btn-nav-next');
    if (btnPrev) btnPrev.classList.toggle('disabled', currentSpread === 0);
    if (btnNext) btnNext.classList.toggle('disabled', currentSpread >= pages.length - 2);

    // Re-render MathJax formulas on new page spread
    if (window.MathJax && window.MathJax.typesetPromise) {
      window.MathJax.typesetPromise([leftBody, rightBody]).catch(() => {});
    }
  }

  // Flip Forward (Next Page Spread)
  function flipNext() {
    if (isFlipping || currentSpread >= pages.length - 2) return;
    isFlipping = true;
    playPageFlipSound();

    const flipper = document.getElementById('flipper-layer');
    if (flipper) {
      flipper.style.display = 'block';
      flipper.className = 'flipper-layer flip-forward';
      setTimeout(() => {
        currentSpread += 2;
        renderSpread();
        flipper.style.display = 'none';
        flipper.className = 'flipper-layer';
        isFlipping = false;
      }, 520);
    } else {
      currentSpread += 2;
      renderSpread();
      isFlipping = false;
    }
  }

  // Flip Backward (Previous Page Spread)
  function flipPrev() {
    if (isFlipping || currentSpread <= 0) return;
    isFlipping = true;
    playPageFlipSound();

    const flipper = document.getElementById('flipper-layer');
    if (flipper) {
      flipper.style.display = 'block';
      flipper.className = 'flipper-layer flip-backward';
      setTimeout(() => {
        currentSpread -= 2;
        renderSpread();
        flipper.style.display = 'none';
        flipper.className = 'flipper-layer';
        isFlipping = false;
      }, 520);
    } else {
      currentSpread -= 2;
      renderSpread();
      isFlipping = false;
    }
  }

  // Jump to specific 1-based page
  function goToPage(targetPage) {
    let p = parseInt(targetPage, 10);
    if (isNaN(p) || p < 1) p = 1;
    if (p > pages.length) p = pages.length;

    // Align to even/left page index (0, 2, 4...)
    currentSpread = Math.floor((p - 1) / 2) * 2;
    playPageFlipSound();
    renderSpread();
  }

  // Jump to specific document ID
  function goToDoc(docId) {
    toggleTOC(false);
    const targetIdx = pages.findIndex(p => p.docId === docId);
    if (targetIdx !== -1) {
      goToPage(targetIdx + 1);
    }
  }

  function onPageInput(val) {
    goToPage(val);
  }

  // Set View Mode ('basic' or 'book')
  function setMode(newMode) {
    mode = newMode;
    localStorage.setItem('doc_view_mode', mode);

    const btnBasic = document.getElementById('btn-mode-basic');
    const btnBook = document.getElementById('btn-mode-book');

    if (mode === 'book') {
      document.body.classList.add('book-mode');
      if (btnBasic) btnBasic.classList.remove('active');
      if (btnBook) btnBook.classList.add('active');

      if (pages.length === 0) {
        pages = extractBookPages();
        buildBookDOM();
      }
      renderSpread();

      // Smooth scroll to top of book
      const bookContainer = document.getElementById('book-viewer-container');
      if (bookContainer) {
        bookContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      document.body.classList.remove('book-mode');
      if (btnBasic) btnBasic.classList.add('active');
      if (btnBook) btnBook.classList.remove('active');

      // Re-trigger MathJax on standard view if needed
      if (window.MathJax && window.MathJax.typesetPromise) {
        window.MathJax.typesetPromise().catch(() => {});
      }
    }
  }

  function toggleMode() {
    setMode(mode === 'book' ? 'basic' : 'book');
  }

  function toggleTOC(forceState) {
    const drawer = document.getElementById('toc-drawer');
    const overlay = document.getElementById('toc-overlay');
    if (!drawer || !overlay) return;
    const isOpen = drawer.classList.contains('open');
    const nextState = typeof forceState === 'boolean' ? forceState : !isOpen;
    if (nextState) {
      drawer.classList.add('open');
      overlay.classList.add('open');
    } else {
      drawer.classList.remove('open');
      overlay.classList.remove('open');
    }
  }

  function toggleSound() {
    soundEnabled = !soundEnabled;
    const btn = document.getElementById('btn-toggle-sound');
    if (btn) {
      btn.innerHTML = soundEnabled ? '🔊 Âm thanh' : '🔇 Tắt tiếng';
      btn.classList.toggle('active', soundEnabled);
    }
  }

  function cycleFontSize() {
    fontSizeLevel = (fontSizeLevel + 1) % FONT_SIZES.length;
    const size = FONT_SIZES[fontSizeLevel];
    document.querySelectorAll('.page-body-flow').forEach(el => {
      el.style.fontSize = size;
    });
    const label = document.getElementById('font-size-label');
    if (label) {
      const labels = ['Nhỏ', 'Vừa', 'Lớn', 'Rất lớn'];
      label.textContent = labels[fontSizeLevel];
    }
  }

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  // Keyboard Shortcuts Listener
  function initKeyboardEvents() {
    window.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      if (e.key === 'ArrowRight' || e.key === ' ') {
        if (mode === 'book') {
          e.preventDefault();
          flipNext();
        }
      } else if (e.key === 'ArrowLeft') {
        if (mode === 'book') {
          e.preventDefault();
          flipPrev();
        }
      } else if (e.key === 'b' || e.key === 'B') {
        toggleMode();
      } else if (e.key === 'f' || e.key === 'F') {
        if (mode === 'book') {
          toggleFullscreen();
        }
      } else if (e.key === 'm' || e.key === 'M' || e.key === 't' || e.key === 'T') {
        if (mode === 'book') {
          toggleTOC();
        }
      } else if (e.key === 'Escape') {
        toggleTOC(false);
      }
    });
  }

  // Insert View Mode Toggle into page toolbar
  function injectToolbarToggle() {
    const toolbar = document.querySelector('.toolbar');
    if (!toolbar) return;

    if (toolbar.querySelector('.view-switch-wrapper')) return;

    const wrapper = document.createElement('div');
    wrapper.className = 'view-switch-wrapper';
    wrapper.innerHTML = `
      <button class="view-btn active" id="btn-mode-basic" onclick="BookViewer.setMode('basic')" title="Chế độ cuộn dọc truyền thống">
        📜 Cuộn Chuẩn (Basic)
      </button>
      <button class="view-btn" id="btn-mode-book" onclick="BookViewer.setMode('book')" title="Chế độ lật trang sách tương tác (Phím tắt B)">
        📖 Lật Sách (Book View)
      </button>
    `;

    // Insert as first item in toolbar
    toolbar.insertBefore(wrapper, toolbar.firstChild);
  }

  // Initialize
  function init() {
    injectToolbarToggle();
    initKeyboardEvents();

    if (window.location.hash === '#book') {
      setMode('book');
    } else {
      const savedMode = localStorage.getItem('doc_view_mode');
      if (savedMode === 'book') {
        setMode('book');
      }
    }

    window.addEventListener('hashchange', () => {
      if (window.location.hash === '#book') {
        setMode('book');
      }
    });
  }

  // Auto-init on DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  return {
    init,
    setMode,
    toggleMode,
    flipNext,
    flipPrev,
    goToPage,
    goToDoc,
    onPageInput,
    toggleTOC,
    toggleSound,
    cycleFontSize,
    toggleFullscreen,
    getTotalPages: () => pages.length
  };
})();

window.BookViewer = BookViewer;
