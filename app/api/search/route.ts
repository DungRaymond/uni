import { search } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q') ?? '';
  const kindParam = searchParams.get('kind');
  const kind = kindParam === 'doc' || kindParam === 'question' ? kindParam : 'all';
  const limitParam = Number(searchParams.get('limit') ?? '20');
  const limit = Number.isFinite(limitParam) ? Math.min(Math.max(limitParam, 1), 100) : 20;

  const results = search(q, kind, limit);

  return Response.json({
    query: q,
    kind,
    count: results.length,
    results: results.map((hit) => ({
      kind: hit.kind,
      subject: { slug: hit.subject_slug, name: hit.subject_name, emoji: hit.subject_emoji },
      slug: hit.slug,
      num: hit.num,
      title: hit.title,
      snippet: (hit.snippet ?? '').replace(/<\/?mark>/g, ''),
      url: hit.kind === 'doc' ? `/docs/${hit.subject_slug}#${hit.slug}` : `/homework/${hit.subject_slug}#${hit.slug}`,
    })),
  });
}
