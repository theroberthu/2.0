import { createClient } from '@supabase/supabase-js'
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const envFile = readFileSync(join(__dirname, '..', '.env.local'), 'utf-8')
const envVars = {}
envFile.split('\n').forEach(line => {
  const match = line.match(/^([^#=]+)=(.*)$/)
  if (match) envVars[match[1].trim()] = match[2].trim()
})

const supabase = createClient(
  envVars.NEXT_PUBLIC_SUPABASE_URL,
  envVars.SUPABASE_SERVICE_ROLE_KEY
)

const DESCRIPTION = 'Google confirmed a small test letting exact and phrase match Search ads serve in AI Mode. What changed, what is undocumented, and why the boundary matters.'

// Primary sources, cited at the claims they support.
const SRC_SER = 'https://www.seroundtable.com/google-ads-serving-restrictive-match-types-ai-mode-42024.html'
const SRC_HELP = 'https://support.google.com/google-ads/answer/16297775'
const SRC_GML = 'https://blog.google/products/ads-commerce/google-marketing-live-search-ads/'
const EXT = 'target="_blank" rel="noopener noreferrer"'

const post = {
  slug: 'google-exact-match-ads-ai-mode',
  // Editorial H1 (renders on page, and as JSON-LD headline)
  title: 'AI Search May Be an Interface, Not a New Channel',
  // Query-aligned search title (drives <title>, OG and Twitter). Deliberate split.
  meta_title: 'Google Tests Exact and Phrase Match Ads in AI Mode',
  excerpt: 'Google confirmed a small experiment letting exact and phrase match Search campaigns serve text ads in AI Mode. The change itself is narrow. What it exposes is that the boundary advertisers organize around was adjusted quietly, on a surface Google has not publicly documented.',
  meta_description: DESCRIPTION,
  og_image: '/images/blog/google-exact-match-ads-ai-mode.svg',
  category: 'Digital Marketing',
  tags: ['Google Ads', 'Google AI Mode', 'AI Max', 'paid search', 'match types', 'AI advertising'],
  status: 'published',
  featured: false,
  read_time_minutes: 6,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: false,
    related_posts: ['product-data-shared-infrastructure-google-ai-mode', 'google-gemini-writes-ads-product-data-marketplace-sellers', 'niq-similarweb-agentic-commerce-measurement'],
    featured_image_alt: 'A single Google Search campaign serving into both a traditional results page and an AI Mode conversational answer, with the advertiser choosing neither surface',
  },
  published_at: '2026-09-08T23:00:00.000Z',
  content: `<p>An advertiser can run a tightly controlled Search campaign, built on exact-match keywords, and now potentially have those ads appear inside Google's conversational AI interface.</p>

<p>That should feel slightly contradictory. Exact match is the most restrictive targeting Google sells. AI Mode is the surface advertisers were told requires Google's automated campaign products. Those two things sat on opposite sides of a line.</p>

<p>On September 4, Google confirmed the line moved a little.</p>

<h2>What Google actually confirmed</h2>

<p>Google Ads Liaison Ginny Marvin <a href="${SRC_SER}" ${EXT}>told Search Engine Roundtable</a>, "This is a small experiment that recently kicked off." In a LinkedIn comment she gave the specifics: "Exact and phrase match keywords are eligible to serve text ads in AI Mode. Note however that this is limited to cases where there is explicit and direct user intent. AI Max and PMax for Search are designed to capture complex conversational intent and access our latest ad formats (like Highlighted Answers)."</p>

<p>Read that carefully, because it is narrow. Exact and phrase match. Text ads. AI Mode. Only where Google sees explicit and direct user intent, a phrase Google has not defined publicly. Google has not said how many advertisers are in the test, which countries, how long it runs, or whether it becomes permanent. No performance data has been released. An advertiser, Anthony Higman, first spotted it across multiple campaigns.</p>

<p>This is not a rollout. It is a test Google confirmed when asked.</p>

<h2>What makes a small test interesting</h2>

<p>The interesting part is not the match type. It is where the boundary was, and who gets to move it.</p>

<p>Google's published Help documentation on ad eligibility in AI surfaces <a href="${SRC_HELP}" ${EXT}>covers AI Overviews</a>. That article says Google "requires AI-powered targeting solutions like broad match on Search or the keywordless targeting technology available through AI Max for Search campaigns, Performance Max campaigns, Shopping campaigns, or Dynamic Search Ads." That is a documented boundary, and it is the reason advertisers came to understand restrictive match types as a way of staying out of AI surfaces.</p>

<p>But that article is about AI Overviews. It does not mention AI Mode once, and I could not find equivalent published Google Ads eligibility documentation for AI Mode. <a href="/blog/google-ai-overview-ai-mode-citation-teardown-geo">The two are different surfaces with different behavior</a>, so Google's detailed public rules on targeting, opt-out behavior, placement treatment and segmented reporting describe AI Overviews and should not be carried over to AI Mode by assumption.</p>

<p>What we know about AI Mode eligibility comes from a liaison's comment, not product documentation.</p>

<h2>The query may still belong to Search</h2>

<p>This next part is my interpretation.</p>

<p>Operators tend to treat a query and the page it returns as one thing. AI Mode separates those. The demand can be identical, someone looking for a specific product with clear intent, while Google decides how to present it: links, shopping units, a generated answer, a conversation.</p>

<p>If a campaign built for classic Search can serve into an AI experience without the advertiser changing anything, the experiment suggests that Google can vary the presentation around the same underlying Search demand without requiring the advertiser to choose a separate AI campaign. The campaign did not become an AI campaign. The context around it changed.</p>

<p>Most marketing organizations are not built that way. Teams create boxes: SEO, paid search, shopping, marketplaces, and now AI. The experiment suggests the same campaign might sit in more than one box at once.</p>

<h2>Why this reaches past PPC</h2>

<p>An operator who never touches a Google Ads account should still care. The underlying assets are shared.</p>

<p>Google's own documentation on AI Overviews tells retailers to keep feeds current and to review descriptions, pricing, shipping and returns, because those inputs power the enhanced units. Those are the same assets that power ordinary Shopping ads and product pages. It is the pattern I keep running into: <a href="/blog/product-data-shared-infrastructure-google-ai-mode">product data behaves less like a channel input and more like shared infrastructure</a>.</p>

<p>If the feed, the landing page, and the campaign all flow into whichever presentation Google chooses, then "prepare for Search" and "prepare for AI Search" stop being two projects. That has budget and org-chart consequences well beyond the ads team.</p>

<h2>The measurement part, briefly</h2>

<p>If one campaign can serve across multiple presentations, the obvious question is whether performance differs by surface.</p>

<p>For AI Overviews, Google answers plainly. Its documentation says ads there are reported as Top Ads, that advertisers cannot target those placements directly, that they cannot opt out, and that "Google Ads currently doesn't offer segmented reporting when ads show within Search AI Overviews." Google adds that it is "still learning and actively thinking about what the future of reporting looks like for this experience."</p>

<p>For AI Mode, I found no published answer to any of those questions, and I am not going to assume the AI Overviews rules carry over.</p>

<p>What that leaves is a measurement requirement rather than a measurement finding. If a campaign's cost per click or conversion rate shifts, an operator currently has no documented way to know whether the mix of surfaces changed underneath it. It is the same problem that keeps showing up <a href="/blog/niq-similarweb-agentic-commerce-measurement">wherever discovery moves inside an AI answer</a>.</p>

<h2>The objection that holds</h2>

<p>Eligibility crossing surfaces is not the same thing as the surfaces becoming one system, and I want to give that its full weight.</p>

<p>Google called it a small experiment and may end it. Exact and phrase match remain restrictive in every other respect. AI Max and Performance Max still do things regular Search campaigns cannot, and Google's own position is unchanged: at <a href="${SRC_GML}" ${EXT}>Marketing Live in May</a> it said that to take full advantage of its <a href="/blog/google-gemini-writes-ads-product-data-marketplace-sellers">new Gemini-built formats</a>, advertisers should build on AI Max for Search, AI Max for Shopping and Performance Max. Highlighted Answers, the format where an ad can appear inside a recommendation list in AI Mode, is still tied to those products.</p>

<p>A reasonable reading is simply that Google found some AI Mode queries with intent clear enough that keyword targeting works fine, and opened them up. That is a tidy operational decision, not an architectural statement.</p>

<h2>What I am watching</h2>

<p>I am not claiming the channels merged. One test does not prove where Google is heading.</p>

<p>What it does show is that the boundary advertisers have been organizing around is not a boundary Google is committed to. It was adjusted quietly, on a surface with no published eligibility documentation I could find, and communicated in a comment thread.</p>

<p>The durable question is whether "AI campaign" stays a meaningful category if Google's AI interfaces increasingly draw on the same campaigns, feeds, and websites that already power Search. Operators may end up spending less time choosing between traditional Search and AI Search, and more time deciding which demand to compete for while Google decides how it gets presented.</p>

<p>If the same campaign can appear in both traditional Search and AI Mode, where exactly does one channel end and the other begin?</p>
`,
}

const { data: existing } = await supabase
  .from('blog_posts')
  .select('id, slug')
  .eq('slug', post.slug)
  .maybeSingle()

if (existing) {
  const { error } = await supabase.from('blog_posts').update(post).eq('id', existing.id)
  if (error) { console.error('Update failed:', error); process.exit(1) }
  console.log('Post updated successfully:', existing.id)
} else {
  const { data, error } = await supabase.from('blog_posts').insert(post).select('id').single()
  if (error) { console.error('Insert failed:', error); process.exit(1) }
  console.log('Post inserted successfully:', data.id)
}
console.log('URL: https://theroberthu.com/blog/' + post.slug)
