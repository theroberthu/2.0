import { supabase } from '@/lib/supabase'
import { SITE_URL, SITE_NAME } from '@/lib/constants'

export async function GET() {
  const { data: posts } = await supabase
    .from('blog_posts')
    .select('slug, title, excerpt, published_at, category')
    .eq('published', true)
    .order('published_at', { ascending: false })
    .limit(50)

  const items = (posts || [])
    .map(
      (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${SITE_URL}/blog/${post.slug}</link>
      <guid isPermaLink="true">${SITE_URL}/blog/${post.slug}</guid>
      <description><![CDATA[${post.excerpt || ''}]]></description>
      ${post.published_at ? `<pubDate>${new Date(post.published_at).toUTCString()}</pubDate>` : ''}
      ${post.category ? `<category>${post.category}</category>` : ''}
    </item>`
    )
    .join('')

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${SITE_NAME} — Blog</title>
    <link>${SITE_URL}/blog</link>
    <description>Actionable insights on e-commerce strategy, AI integration, and digital transformation for growing brands.</description>
    <language>en-us</language>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
    },
  })
}
