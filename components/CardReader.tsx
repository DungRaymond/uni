'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

export type ReaderItem = {
  slug: string;
  num: string;
  title: string;
  tag?: string;
  bodyHtml: string;
  isGlossary?: boolean;
};

type Props = {
  items: ReaderItem[];
  kind: 'doc' | 'question';
  backHref: string;
  backLabel: string;
  extraHref?: string;
  extraLabel?: string;
  emptyText?: string;
};

/* ------------------------------------------------------------------ */
/* Gắn id cho các dòng từ khóa + tự động link từ khóa trong bài        */
/* ------------------------------------------------------------------ */

type GlossaryEntry = { label: string; id: string; aliases: string[] };

const slugify = (value: string) =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

function linkKeywords(root: HTMLElement | null) {
  if (!root) return;
  const glossaryBody = root.querySelector<HTMLElement>(
    '[data-glossary="true"] [data-card-body]',
  );
  if (!glossaryBody) return;

  const entries: GlossaryEntry[] = [];
  glossaryBody.querySelectorAll<HTMLTableRowElement>('tbody tr').forEach((row) => {
    const label = row.cells[0]?.textContent?.trim() ?? '';
    if (!label) return;
    const id = `kw-${slugify(label)}`;
    row.id = id;
    const aliases = [
      ...label.split(/\s*\/\s*/),
      ...(label.match(/\(([^)]+)\)/g) ?? []).map((alias) => alias.slice(1, -1)),
    ];
    entries.push({ label, id, aliases });
  });

  const terms = entries
    .flatMap((entry) => entry.aliases.map((alias) => ({ ...entry, alias })))
    .filter((entry) => entry.alias.length >= 3);
  if (terms.length === 0) return;

  const escapeRegex = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  let pattern: RegExp;
  try {
    pattern = new RegExp(
      `(^|[^\\p{L}\\p{N}])(${terms
        .map(({ alias }) => escapeRegex(alias))
        .sort((a, b) => b.length - a.length)
        .join('|')})(?=$|[^\\p{L}\\p{N}])`,
      'giu',
    );
  } catch {
    return;
  }

  const bodies = root.querySelectorAll<HTMLElement>(
    '[data-card-body]',
  );
  bodies.forEach((body) => {
    if (body.closest('[data-glossary="true"]')) return;
    if (body.dataset.keywordsLinked === 'true') return;
    body.dataset.keywordsLinked = 'true';

    const walker = document.createTreeWalker(body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent) return NodeFilter.FILTER_REJECT;
        if (!node.nodeValue?.trim()) return NodeFilter.FILTER_REJECT;
        if (parent.closest('a,script,style,.formula-box,.MathJax')) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      },
    });

    const nodes: Text[] = [];
    while (walker.nextNode()) nodes.push(walker.currentNode as Text);

    nodes.forEach((node) => {
      pattern.lastIndex = 0;
      if (!pattern.test(node.nodeValue ?? '')) return;
      pattern.lastIndex = 0;

      const fragment = document.createDocumentFragment();
      let cursor = 0;
      for (const match of (node.nodeValue ?? '').matchAll(pattern)) {
        const start = (match.index ?? 0) + match[1].length;
        fragment.append((node.nodeValue ?? '').slice(cursor, start));
        const label = match[2];
        const entry = terms.find(
          (item) => item.alias.toLocaleLowerCase() === label.toLocaleLowerCase(),
        );
        if (entry) {
          const link = document.createElement('a');
          link.href = `#${entry.id}`;
          link.textContent = label;
          link.title = `Xem định nghĩa: ${entry.label}`;
          link.dataset.keyword = 'true';
          fragment.append(link);
        } else {
          fragment.append(label);
        }
        cursor = start + label.length;
      }
      fragment.append((node.nodeValue ?? '').slice(cursor));
      node.replaceWith(fragment);
    });
  });
}

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

export default function CardReader({
  items,
  kind,
  backHref,
  backLabel,
  extraHref,
  extraLabel,
  emptyText = 'Chưa có nội dung.',
}: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<Record<string, boolean>>(() => {
    const first = items.find((item) => !item.isGlossary);
    return first ? { [first.slug]: true } : {};
  });

  const openCard = useCallback((slug: string, scrollTarget?: string) => {
    setOpen((prev) => ({ ...prev, [slug]: true }));
    if (!scrollTarget) return;
    window.setTimeout(() => {
      document.getElementById(scrollTarget)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
  }, []);

  /* Xử lý hash trên URL: mở đúng thẻ rồi cuộn tới */
  useEffect(() => {
    const handleHash = () => {
      const raw = window.location.hash.replace(/^#/, '');
      if (!raw) return;
      let target: HTMLElement | null = null;
      try {
        target = document.getElementById(decodeURIComponent(raw));
      } catch {
        target = document.getElementById(raw);
      }
      if (!target) return;
      const card = target.closest<HTMLElement>('[data-slug]');
      const slug = card?.dataset.slug;
      if (slug) setOpen((prev) => ({ ...prev, [slug]: true }));
      window.setTimeout(() => {
        target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (target && target.tagName === 'TR') {
          target.animate(
            [{ backgroundColor: '#fef08a' }, { backgroundColor: 'transparent' }],
            { duration: 2400, easing: 'ease-out' },
          );
        }
      }, 90);
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  /* Anchor nội bộ (từ khóa, mục lục) — mở thẻ chứa đích */
  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;
    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement | null)?.closest<HTMLAnchorElement>('a[href^="#"]');
      if (!anchor) return;
      const id = decodeURIComponent(anchor.getAttribute('href')?.slice(1) ?? '');
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;
      const card = target.closest<HTMLElement>('[data-slug]');
      if (card?.dataset.slug) {
        event.preventDefault();
        history.replaceState(null, '', `#${id}`);
        openCard(card.dataset.slug, id);
      }
    };
    node.addEventListener('click', onClick);
    return () => node.removeEventListener('click', onClick);
  }, [openCard]);

  /* Ảnh minh họa: nếu thiếu file thì hiện khung chờ thay vì icon lỗi */
  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;
    node.querySelectorAll<HTMLImageElement>('figure.doc-fig img').forEach((img) => {
      const markMissing = () => img.closest('figure')?.classList.add('missing');
      if (img.complete && img.naturalWidth === 0) markMissing();
      img.addEventListener('error', markMissing, { once: true });
    });
  }, []);

  /* Nối từ khóa một lần sau khi DOM sẵn sàng */
  useEffect(() => {
    const timer = window.setTimeout(() => linkKeywords(rootRef.current), 250);
    return () => window.clearTimeout(timer);
  }, []);

  /* MathJax: chờ thư viện tải xong rồi typeset, và typeset lại khi mở thẻ mới */
  useEffect(() => {
    let cancelled = false;
    let attempts = 0;
    const typeset = () => {
      const mathJax = (window as unknown as {
        MathJax?: { typesetPromise?: (nodes?: HTMLElement[]) => Promise<void> };
      }).MathJax;
      if (cancelled || !rootRef.current) return;
      if (mathJax?.typesetPromise) {
        mathJax.typesetPromise([rootRef.current]).catch(() => undefined);
      } else if (attempts < 60) {
        attempts += 1;
        window.setTimeout(typeset, 300);
      }
    };
    typeset();
    return () => {
      cancelled = true;
    };
  }, [open]);

  if (items.length === 0) {
    return (
      <div className="empty-state">
        <strong>{emptyText}</strong>
        Nội dung sẽ xuất hiện ở đây sau khi được thêm vào cơ sở dữ liệu.
      </div>
    );
  }

  const allOpen = items.every((item) => open[item.slug]);

  return (
    <div ref={rootRef}>
      <div className="toolbar">
        <a href={backHref} className="btn">
          {backLabel}
        </a>
        {extraHref && extraLabel ? (
          <a href={extraHref} className="btn">
            {extraLabel}
          </a>
        ) : null}
        <span className="spacer" />
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setOpen(Object.fromEntries(items.map((item) => [item.slug, true])))}
        >
          📖 Mở rộng tất cả
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => setOpen(allOpen ? {} : Object.fromEntries(items.map((item) => [item.slug, true])))}
        >
          📕 Thu gọn tất cả
        </button>
      </div>

      <nav className="toc" aria-label="Mục lục">
        <div className="toc-head">
          <span className="toc-title">Mục lục {kind === 'doc' ? 'chuyên đề' : 'bài tập'}</span>
          <span className="toc-title">{items.length} mục</span>
        </div>
        <ol>
          {items.map((item) => (
            <li key={item.slug}>
              <button type="button" onClick={() => openCard(item.slug, item.slug)}>
                {item.title}
              </button>
            </li>
          ))}
        </ol>
      </nav>

      {items.map((item) => {
        const isActive = Boolean(open[item.slug]);
        const headerClass = kind === 'doc' ? 'doc-header' : 'question-header';
        const bodyClass = kind === 'doc' ? 'doc-body' : 'question-body';
        const titleClass = kind === 'doc' ? 'doc-title' : 'question-title';
        const numClass = kind === 'doc' ? 'doc-num' : 'question-num';
        const wrapClass = kind === 'doc' ? 'doc-title-wrap' : 'question-title-wrap';

        return (
          <article
            key={item.slug}
            id={item.slug}
            data-slug={item.slug}
            data-glossary={item.isGlossary ? 'true' : undefined}
            className={`${kind === 'doc' ? 'doc-card' : 'question-card'}${isActive ? ' active' : ''}`}
          >
            <div
              className={headerClass}
              role="button"
              tabIndex={0}
              aria-expanded={isActive}
              onClick={() => setOpen((prev) => ({ ...prev, [item.slug]: !prev[item.slug] }))}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  setOpen((prev) => ({ ...prev, [item.slug]: !prev[item.slug] }));
                }
              }}
            >
              <div className={wrapClass}>
                <span className={numClass}>{item.num}</span>
                <span className={titleClass}>{item.title}</span>
                {item.tag ? (
                  <span className={kind === 'doc' ? 'doc-tag' : 'status-tag'}>{item.tag}</span>
                ) : null}
              </div>
              <span className="icon-chevron">▼</span>
            </div>
            <div
              className={bodyClass}
              data-card-body="true"
              dangerouslySetInnerHTML={{ __html: item.bodyHtml }}
            />
          </article>
        );
      })}
    </div>
  );
}
