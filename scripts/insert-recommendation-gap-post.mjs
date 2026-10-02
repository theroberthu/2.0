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

const DESCRIPTION = "A 460,000-response study found small retailers hold about 38% of AI citations and far less of the lead recommendations. Being cited is not being chosen."

const EXT = 'target="_blank" rel="noopener noreferrer"'

const post = {
  slug: 'ai-shopping-retailer-recommendation-gap-lightspeed-vaer',
  // Editorial H1 (renders on page, and as JSON-LD headline)
  title: 'AI Can Find the Small Retailer. It Still Recommends the Big One.',
  // Query-aligned search title (drives <title>, OG and Twitter). Deliberate split.
  meta_title: 'AI Shopping Can Find Small Retailers and Still Skip Them',
  excerpt: "Vaer AI analyzed roughly 460,000 AI shopping answers for Lightspeed. Large and small retailers hold about the same share of citations, and large chains win the lead recommendation about two and a half times as often. Retrieval and selection are different achievements.",
  meta_description: DESCRIPTION,
  og_image: '/images/blog/ai-shopping-retailer-recommendation-gap-lightspeed-vaer.svg',
  category: 'GEO & SEO',
  tags: ['GEO', 'AI visibility', 'AI shopping', 'retailers', 'citations', 'recommendations'],
  status: 'published',
  featured: false,
  read_time_minutes: 6,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: false,
    related_posts: ['google-ai-overview-ai-mode-citation-teardown-geo', 'adobe-ai-traffic-393-percent-retail', 'instacart-clementine-ask-shipt-ai-basket'],
    featured_image_alt: 'An AI answer showing small retailers among its cited sources while a large national chain occupies the first recommendation the shopper reads',
  },
  published_at: new Date().toISOString(),
  content: `<p>In August I wrote that <a href="/blog/google-ai-overview-ai-mode-citation-teardown-geo">citation and recommendation are the same discipline</a>. An AI reads content, decides what it can use, and surfaces it. Same task, different surface.</p>

<p>A <a href="https://vaer.ai/insights/ai-retailer-bias-study/" ${EXT}>study published on September 29</a> has made me split that claim in two.</p>

<h2>What was measured</h2>

<p>Vaer AI ran the research <a href="https://www.lightspeedhq.com/news/ai-favors-big-retailers-over-local-stores-9-out-of-10-times-new-study-finds/" ${EXT}>on behalf of Lightspeed Commerce</a>, which sells software to independent retailers and launched an AI visibility campaign alongside the findings. Hold that in mind throughout. The sponsor benefits from this result.</p>

<p>The scale is unusual. Roughly 460,000 AI responses to 20,000 size-neutral shopping prompts across ten categories and four cities, Los Angeles, San Francisco, New York and Montreal, between June and August 2026. Two conditions: 200,000 answers with web search off, and 260,000 with live search on across ChatGPT, Google AI Mode and Google AI Overviews. Retailers were sorted into bands by revenue, large above $1 billion, mid from $50 million to $1 billion, small below.</p>

<p>With search off, the models named a national chain 63% to 70% of the time and a small or local store around one in ten. Shown one of each with no labels, they picked the larger 90% to 94% of the time. That is a measurement of model priors, not of how anyone shops, and it should not be quoted as the live result.</p>

<h2>The number that reframes the problem</h2>

<p>Turn live search on and something more interesting happens.</p>

<p>Among the retailers the AI links to as sources, large and small run about even, roughly 38% each. Then follow the answer forward. From what it cites, to what it names in the sentence, to what it names first, large retailers gain at every step and small ones fall away. By the lead recommendation, a big chain wins about two and a half times as often as a small one.</p>

<p>The study gives one concrete answer to make it legible. A shopper asks ChatGPT where to buy office supplies in New York. Three of the six cited links are small local shops. The store named and recommended first is Staples.</p>

<p>The small retailers were found. They were read. They were cited. They still lost the recommendation.</p>

<h2>Citation is evidence of retrieval. Recommendation is evidence of selection.</h2>

<p>That is the revision to what I wrote in August. Retrieval and selection share a foundation, which is being legible enough for a machine to use you, and then they come apart. <a href="/blog/adobe-ai-traffic-393-percent-retail">Being unreadable keeps you out of the evidence set</a>. Being readable does not guarantee you survive it.</p>

<p>The platform splits make the separation hard to dismiss. Google AI Mode pulls heavily from local business listings, around 58% of its citations, yet those convert into the top recommendation only 24% of the time. ChatGPT runs the opposite way, with large retailers at 41% of citations but 58% of top recommendations. Different source mixes, same destination: across models, the large retailer share of lead recommendations lands in a narrow 46% to 58%.</p>

<p>The magnitude differs by platform. The direction does not.</p>

<h2>The pattern gets stronger as the shopper gets closer</h2>

<p>Broad requests leave room. Ask for toys for a six-year-old and a small shop is the top pick roughly a third of the time. Name a specific product and that falls to about one in ten while the large retailer share climbs from about 40% to 60%.</p>

<p>A mechanism may sit underneath it. When ChatGPT writes its own background web queries, the retailer name it types is a large or mid-sized chain about 97% of the time, with small and local stores at 1% to 4%. It writes a store name into the query about a third of the time for a vague request and two thirds for a branded product. If the search goes looking for chains, the retrieved set is shaped before a single result returns.</p>

<p>I would hold that loosely. The study observes the queries and the outcomes. It does not isolate which mechanism causes the recommendation advantage, and Vaer presents the confidence explanation as a plausible reading rather than a finding.</p>

<h2>The counterargument that should slow everyone down</h2>

<p>The obvious story is bias against small business. The more useful question is whether the behavior is wrong.</p>

<p>If someone names a specific product, a system that recommends a retailer almost certain to stock it, ship it quickly and accept the return is not obviously malfunctioning. It may be responding rationally to the probability that the errand succeeds. The study measures which retailer gets recommended. It does not measure whether the item was in stock, what it cost, how fast it shipped, or whether the shopper was better served.</p>

<p>That reframes this from a fairness complaint into a systems question. The open question is what evidence a smaller retailer would have to publish for a recommender to be as confident about it as it is about Best Buy. Availability, fulfillment reliability, returns, assortment depth. Those are commerce signals rather than content signals, and most <a href="/geo">GEO work</a> does not reach them.</p>

<h2>What this does to measurement</h2>

<p>Here is the operator consequence, and it is uncomfortable for a tooling category I am sympathetic to.</p>

<p>Most AI visibility tools count citations, mentions and share of voice. This study says a retailer can hold 38% of citations and far less of what shoppers actually read, and that one platform converts 58% of its citations into 24% of its recommendations. A citation dashboard can tell you the AI saw you. It cannot tell you the AI chose you.</p>

<p>The better questions are positional. At which step of the answer do you disappear, do you win browsing intent and lose product-specific intent, and what would have to be true for a system to put you first.</p>

<h2>The limits, which are real</h2>

<p>This is sponsored research by a company selling to the retailers it found disadvantaged, conducted by a consultancy that sells AI visibility work. The full technical report is available on request rather than published, so the methodology cannot be independently reproduced. Four cities are not North America. Category variation is large, with local stores appearing in 17% of AI Overview answers for electronics and somewhere around 38% to 45% for toys and pet supplies. Model behavior changes monthly.</p>

<p>And the scope is narrower than the coverage will suggest. This studies which retailer gets recommended. It does not establish that large product brands enjoy the same advantage, and it does not show that any of these recommendations produced a click, let alone a purchase.</p>

<p>What it does establish is that being findable and being chosen are two different achievements, measured at two different points in the same answer. If you only track the first one, which of your shoppers do you think you are counting?</p>
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
