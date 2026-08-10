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

const DESCRIPTION = "Google's new Search Console report shows AI Overviews and AI Mode impressions. What my first 28 days revealed, and what it still cannot answer."

// Primary Google sources, cited at the claims they support.
const SRC_BLOG = 'https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports'
const SRC_HELP = 'https://support.google.com/webmasters/answer/16984139'
const SRC_IMPR = 'https://support.google.com/webmasters/answer/7042828'
const EXT = 'target="_blank" rel="noopener noreferrer"'

const post = {
  slug: 'google-search-console-generative-ai-visibility',
  title: 'Google Search Console Now Tracks AI Visibility, but Not AI Traffic',
  excerpt: 'Search Console now shows a dedicated view of impressions inside AI Overviews and AI Mode. My property recorded roughly 1.37K in 28 days, with one page taking about 28% of them. The more useful finding is what the report structurally cannot tell an operator.',
  meta_title: 'Google Search Console Now Tracks AI Visibility, but Not AI Traffic',
  meta_description: DESCRIPTION,
  og_image: '/images/blog/google-search-console-generative-ai-visibility.svg',
  category: 'GEO & SEO',
  tags: ['Google Search Console', 'AI Overviews', 'Google AI Mode', 'GEO measurement', 'AI visibility', 'generative AI features'],
  status: 'published',
  featured: false,
  read_time_minutes: 6,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: false,
    related_posts: ['google-ai-overview-ai-mode-citation-teardown-geo', 'geo-vs-seo-marketplace-sellers', 'adobe-ai-traffic-393-percent-retail'],
    featured_image_alt: 'A measurement instrument that shows where content appeared in Google generative AI features but not what question caused it',
  },
  published_at: '2026-08-10T14:00:00.000Z',
  content: `<p>A new report appeared in my Search Console property. Under Performance, next to the report I have been reading for years, there is now a second one labeled Generative AI features, still marked Beta.</p>

<p>I have wanted this data for a long time. GEO measurement has been frustrating precisely because the interesting behavior happened inside systems I could not observe. So my first instinct was to treat the number as a scoreboard. That instinct turned out to be the thing worth resisting, and working out why is more useful than the number itself.</p>

<h2>What the report actually measures</h2>

<p>Google <a href="${SRC_BLOG}" ${EXT}>announced these reports on June 3, 2026</a>, and the documentation is specific about several things worth getting right.</p>

<p>The Search version covers two features: AI Overviews and AI Mode. Search Labs experiments are excluded because they are still in active development, and <a href="${SRC_HELP}" ${EXT}>Google adds</a> that it expects "to update this list over time as we develop Google Search." Discover has its own separate report.</p>

<p>An impression is defined as how many times links to your site were shown to a user in a generative AI feature on Google Search. The available dimensions are Pages, Countries, Dates, and Devices. There are no queries. There are no clicks and no click-through rate. Google's announcement mentions "adding additional metrics over time," but I could not find anywhere that Google explains why clicks and queries are absent today, so I am not going to guess at the reason.</p>

<p>One detail reframes the whole thing. Google says this data "is included in the overall performance report, where it will continue to be tracked." These impressions were already being counted. What is new is the ability to see them separately. That is a reporting change, not a measurement change, and it is a meaningful distinction if you are tempted to read a new number as new performance.</p>

<h2>My first 28 days</h2>

<p>For the 28-day window ending August 8, my property shows approximately 1.37K impressions in generative AI features. Search Console displays it rounded, so I am not going to invent a precise figure.</p>

<p>The top pages visible in my report:</p>

<div class="callout-box">
<span class="callout-label">Top pages by generative AI impressions, 28 days</span>
<ul>
<li>/geo, 381</li>
<li>/blog/amazon-shop-direct-sellers, 113</li>
<li>/blog/chatgpt-canvas-vs-claude-artifacts, 89</li>
<li>/blog/amazon-revenue-walmart-sellers-2026, 78</li>
<li>/blog/amazon-whole-foods-project-cremini, 73</li>
</ul>
</div>

<p>The daily chart shows impressions on every day of the window, moving roughly between fifteen and seventy, with no single spike carrying the total. Observation, not proof of anything: this looks like recurring visibility rather than one moment of attention.</p>

<h2>The concentration, and why I will not put a clean number on it</h2>

<p>My /geo page accounts for 381 of roughly 1,370 impressions, which is about 28%.</p>

<p>I want to flag why that percentage is softer than it looks, because the reason is genuinely useful. Google's documentation says the chart total is aggregated by property, so if two pages from my site appear in the same generative AI feature, that counts as a single impression in the chart. The table, when grouped by page, is aggregated by page. Google states plainly that chart totals and table totals can differ for exactly this reason.</p>

<p>So I am dividing a page-aggregated numerator by a property-aggregated denominator. The gap is real and it is large. The exact share is not. The decimal is not meaningful, and anyone building a share-of-visibility metric out of these two numbers is doing arithmetic the report does not support.</p>

<h2>The part I did not expect</h2>

<p>I would have predicted that a page explicitly built around generative engine optimization would lead. It did.</p>

<p>What I did not predict is the rest of the list. Amazon opening search results to external stores. A comparison of ChatGPT Canvas and Claude Artifacts. Amazon passing Walmart in revenue. Whole Foods integration. None of those were written as GEO pages. They were written as ordinary commerce and technology analysis.</p>

<p>One possible explanation is that Google's generative systems are surfacing useful analysis on topics where a site has some depth, rather than rewarding pages that announce themselves as AI-optimized. I am stating that as a hypothesis. This is one property, one 28-day window, and a report that will not tell me which query produced any of it. I cannot distinguish that explanation from several others, including the simple possibility that these are among my better-performing pages in ordinary search too.</p>

<h2>One number, two counting rules</h2>

<p>Here is the limitation I find most interesting, and it is documented rather than inferred.</p>

<p>In the current Search report, Google combines AI Overviews and AI Mode into one impressions view, with no dimension to separate them. But <a href="${SRC_IMPR}" ${EXT}>Google counts impressions differently in each</a>. For AI Overviews, the documentation says the link must be scrolled or expanded into view to count. For AI Mode, standard impression rules apply.</p>

<p>So my 1.37K is a sum of two surfaces measured by two different standards, and the report gives me no way to know the mix. A month where AI Mode grows and AI Overviews shrinks could look identical to the reverse. That is not a criticism of a beta product. It is a reason to be careful about treating the trend line as a single coherent signal.</p>

<h2>Visibility is not traffic</h2>

<p>This is the distinction I keep returning to.</p>

<p>An impression tells me Google showed a link to my site inside a generative AI experience. It does not tell me anyone clicked, and the report contains no clicks and no click-through rate. It does not tell me what question prompted it, because there are no queries. It does not tell me whether my page anchored the answer or sat in a row of supporting links, because the report has no concept of prominence.</p>

<p>Put plainly: I can now see that Google's generative systems surfaced a page. I still cannot see what the person asked, why Google chose that page, what role it played in the answer, or what happened next. Something similar shows up in commerce, where <a href="/blog/adobe-ai-traffic-393-percent-retail">AI-referred traffic behaves measurably differently once it lands</a> but the upstream reasoning stays with the platform. It is also the same shape as the problem <a href="/blog/retailers-ai-traffic-customer-ownership">retailers face when the assistant keeps the conversation</a> and the merchant gets the order.</p>

<p>Search Console has started to close the first layer of that gap. It has not closed the second.</p>

<h2>The honest counterpoint</h2>

<p>There is a real case that this changes very little.</p>

<p>The report is a new window onto behavior that was already happening and already being counted. Nothing about it tells me to write differently. The pages showing up are, as far as I can tell, pages that were already reasonably well structured, reasonably useful, and technically accessible. That is the same list of virtues that has worked in <a href="/blog/geo-vs-seo-marketplace-sellers">ordinary search for years</a>. When I looked at <a href="/blog/google-ai-overview-ai-mode-citation-teardown-geo">two of my own AI citations earlier this summer</a>, what the cited posts shared was not an AI-specific trick.</p>

<p>The most defensible reading may be that GEO is not turning out to be a separate discipline so much as a new measurement surface for work that already had to be good. I would rather hold that view and be proven wrong by better data than build a practice on 1.37K impressions from one site.</p>

<h2>What I would actually do with this</h2>

<p>Export it now, because I do not know whether Google will backfill history for properties that gain access later. The documentation does not say, and an unanswered question about history is a reason to keep your own copy.</p>

<p>Then treat it as a hypothesis generator rather than a scoreboard. Watch which pages appear, notice the ones you did not expect, and go read them to see what they have in common. That is a question worth investigating, not a metric worth optimizing.</p>

<p>If Google can now tell me where my content appeared but not what question caused it to appear or what happened next, what exactly should I optimize?</p>
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
