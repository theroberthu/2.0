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

const DESCRIPTION = 'Shopify says AI traffic rose 2.6 times and orders 3.3 times in Q3. What the data shows on conversion and Shopify Catalog, and what it leaves unproven.'

const EXT = 'target="_blank" rel="noopener noreferrer"'

const post = {
  slug: "shopify-ai-shopping-traffic-orders-catalog-data",
  // Editorial H1 (renders on page, and as JSON-LD headline)
  title: "Shopify's AI Shopping Data Separates Performance From Scale",
  // Query-aligned search title (drives <title>, OG and Twitter). Deliberate split.
  meta_title: "Shopify AI Traffic and Order Growth: What the Q3 Data Shows",
  excerpt: "Shopify says AI traffic rose 2.6 times and orders 3.3 times in Q3, and that AI-referred sessions converted 64% better than organic search. The disclosures show direction and comparative performance, but no absolute scale, and they associate Catalog with better conversion without showing that it caused the difference.",
  meta_description: DESCRIPTION,
  og_image: '/images/blog/shopify-ai-shopping-traffic-orders-catalog-data.svg',
  category: "E-commerce Strategy",
  tags: ["Shopify", "AI commerce", "AI traffic", "Shopify Catalog", "conversion", "agentic commerce", "product data", "ecommerce GEO"],
  status: 'published',
  featured: false,
  read_time_minutes: 5,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: false,
    related_posts: ["shopify-webmcp-checkout-ai-agent-storefront", "product-data-shared-infrastructure-google-ai-mode", "bcg-geo-revenue-growth-evidence"],
    featured_image_alt: "Pull quote from Robert Hu on Shopify's Catalog conversion data: Consistent is not the same as caused.",
  },
  published_at: new Date().toISOString(),
  content: `<p>On Shopify's November 3 earnings call, President Harley Finkelstein said AI traffic is up 2.6 times year over year and orders are up 3.3 times. Those figures traveled quickly. They address three separate questions: whether AI is sending more shopping traffic, whether that traffic performs differently and whether the channel is economically material yet.</p>

<p>Shopify answers the first, partly answers the second and leaves the third open. Finkelstein said so before giving a number: "the volume is still small."</p>

<h2>What Shopify actually said</h2>

<p>Shopify's <a href="https://shopifyinvestors.gcs-web.com/static-files/592d11b1-1ed1-41a4-b03b-eb400154509a" ${EXT}>Q3 investor presentation</a> states that AI traffic to merchant storefronts increased 2.6 times year over year and that orders originating from AI searches increased 3.3 times. It says AI-referred sessions converted 64% better than organic search, which supplies the comparator Finkelstein left unstated on the call. It also says the new-buyer order rate was twice that of other online channels. That is Shopify's term, and Shopify does not disclose enough to translate it into acquisition cost or incremental customers. Shopify labels these metrics as sourced from Shopify global search API usage.</p>

<p>On the call, Finkelstein added that AI channels send shoppers straight to product pages at three times the rate of organic search. He said Catalog-powered searches convert at twice the rate of general AI search, which he later described as "what people call scraping." CFO Jeff Hoffmeister said three-quarters of AI-referred sales came from outside Shopify's top 100 categories. Finkelstein put it at 74% of AI-attributed purchases.</p>

<p>The Q3 disclosure is useful because it places Shopify's core AI metrics in an official investor presentation and extends a pattern Shopify reported earlier in 2026. None of the AI metrics appears in the <a href="https://www.shopify.com/news/shopify-q3-2026-financial-results" ${EXT}>press release</a> or the <a href="https://www.sec.gov/Archives/edgar/data/0001594805/000159480526000068/shop-20260930.htm" ${EXT}>10-Q</a>.</p>

<h2>Traffic shows direction, not scale</h2>

<p>Shopify's multiples need care. In Q1, it reported <a href="https://www.shopify.com/enterprise/blog/ai-search-insights" ${EXT}>traffic up 8 times and orders up nearly 13 times</a>. In Q2, both roughly tripled. In Q3, they were 2.6 and 3.3. Shopify has not said these measures are identical, and a growing base would lower the multiple anyway. This is not a collapse, and the <a href="https://www.modernretail.co/technology/marketplace-briefing-shopify-president-harley-finkelstein-on-why-ai-shopping-cant-just-scrape-information/" ${EXT}>14 times Finkelstein cited in January</a>, covering checkouts from January 2025 to January 2026, is a different window rather than a conflicting result.</p>

<p>A multiple also needs a base. Shopify disclosed no absolute AI visits, orders, GMV or share of total GMV, so the growth rates establish direction without establishing economic scale.</p>

<p>Two remarks point to where the channel stands. In May, Shopify said organic search still refers more sessions than all tracked AI platforms combined. On this call, Finkelstein said that at a forum with some of Shopify's largest merchants, they "did not spend much time talking about personal agents."</p>

<h2>Performance is better evidenced, with a selection problem</h2>

<p>The 3.3-times order growth exceeded the 2.6-times traffic growth, but Shopify does not disclose enough about the two measures to derive a comparable conversion rate from their ratio. Its separately reported 64% conversion comparison is the number to use.</p>

<p>Shopify has now reported that comparison three ways: nearly 50% in May, nearly 80% in August and 64% in November. I would not call that a trend, because Shopify has not said the three figures were built the same way.</p>

<p>The best-matched public comparison is the oldest. Shopify's Q1 analysis compared AI and organic-search sessions that both began on product detail pages, and AI-referred sessions converted at nearly 50% higher rates, with the advantage holding in 23 of 25 merchant categories. That reduces one obvious landing-page difference, but it is still observational first-party evidence, not a controlled experiment.</p>

<p>The landing page matters because the two audiences arrive differently. More than half of AI-referred sessions started on a product page in Q1, against about 20% for organic search. Someone who described a need and landed on the matching product is further along than someone landing on a category page. Shopify itself credits stronger purchase intent. Higher conversion may reflect who arrives as much as what AI did. The comparator is also imperfect, since Shopify notes that Google AI Overviews referrals are classified as organic.</p>

<h2>Why the Catalog number matters most</h2>

<p>Shopify reports that Catalog-powered searches convert at twice the rate of general AI search, a figure it also gave in May and August. That is consistent with my thesis that structured, current product data improves product matching, and it is the closest thing yet to commercial evidence for the mechanism behind <a href="/geo">ecommerce GEO</a>.</p>

<p>Finkelstein's explanation is the thesis in platform language: <a href="https://www.shopify.com/blog/what-is-shopify-catalog" ${EXT}>Catalog</a> translates size, color and material into values an agent can read, with current pricing and inventory. When I tested Google AI Mode, <a href="/blog/product-data-shared-infrastructure-google-ai-mode">the buyer's constraint selected the attribute</a>. A shopper asking for a specific size at a specific price can only be matched if those details are readable and current.</p>

<p>Consistent is not the same as caused. Shopify has not disclosed how it assigns searches to the two groups, whether their shopper intent is comparable or whether it ran a holdout. Those gaps do not invalidate the result. They limit it to an association.</p>

<p>The 74% needs similar care. Shopify has described the Q2 version as categories ranked outside the top 100 <a href="https://www.shopify.com/blog/agentic-commerce" ${EXT}>by sales volume</a>. Its <a href="https://changelog.shopify.com/posts/shopify-s-standard-product-taxonomy-now-available" ${EXT}>product taxonomy</a> launched with over 10,000 categories, and Shopify has not said what share of all its orders falls outside that top 100. Without that base rate, the figure shows where AI orders land, not that AI favors the long tail. It also says nothing about merchant size.</p>

<h2>Discovery, referral and delegation are different things</h2>

<p>AI traffic is not agents buying. In May, Shopify described AI referrals as clicks from tools such as ChatGPT, Perplexity, Gemini, Copilot, Claude and Grok. Hoffmeister said that when a search on Muse leads to a Shopify merchant's site, the economics for Shopify are "exactly the same" as other discovery.</p>

<p>Checkout inside an AI surface is a second behavior. Delegated purchasing is a third. Finkelstein called Q3 the first time Shopify saw shoppers "experimenting" with it through personal agents acting with their permission. The <a href="/blog/shopify-webmcp-checkout-ai-agent-storefront">agent checkout tools I reviewed in October</a> required buyer approval before an order was placed. Shopify gave no split among the three.</p>

<h2>The evidence hierarchy</h2>

<p>Shopify's disclosures sort into three tiers.</p>

<p>Mechanism evidence is the strongest. There is a documented reason structured, current data should improve matching, and Shopify's numbers fit it.</p>

<p>Comparative performance evidence is credible but observational and first party. It has held across three quarters, which earns it attention, not certainty.</p>

<p>Scale evidence is missing. This is the same gap I found when <a href="/blog/bcg-geo-revenue-growth-evidence">BCG put a revenue number on GEO</a>: an outcome stated without the design behind it.</p>

<p>Shopify provides credible directional and comparative evidence that AI-referred shopping traffic performs differently and that structured Catalog access is associated with better conversion. It does not yet provide enough evidence to measure AI commerce's absolute economic scale or to establish that Catalog caused the difference.</p>

<p>Five disclosures would change that: AI's share of GMV; orders split by referral, direct checkout and delegation; conversion matched by landing page and category; how Catalog searches are assigned; and the top 100 base rate.</p>

<p>For operators, accurate attributes, variants, pricing and inventory remain the sensible investment, because they serve every channel. A forecast built on 3.3 times does not follow from that.</p>

<p>If your AI orders doubled next quarter, could you show how many organic search would not have delivered anyway?</p>`,
}

const { data: existing } = await supabase.from('blog_posts').select('id').eq('slug', post.slug)
if (existing && existing.length) { console.error('Slug already exists, not inserting'); process.exit(1) }

const { data, error } = await supabase.from('blog_posts').insert(post).select('id, slug').single()
if (error) { console.error('Insert failed:', error); process.exit(1) }
console.log('Post inserted successfully:', data.id)
console.log('URL: https://theroberthu.com/blog/' + data.slug)
