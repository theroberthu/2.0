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

const DESCRIPTION = "Amazon Full-Funnel Campaigns allocates one daily budget across sponsored ads, display, video and streaming TV in real time. Two of the four decisions I said to keep human are now machine executed."

const EXT = 'target="_blank" rel="noopener noreferrer"'

const post = {
  slug: 'amazon-full-funnel-campaigns-ai-channel-mix',
  // Editorial H1 (renders on page, and as JSON-LD headline)
  title: 'Amazon Just Put Channel Mix Inside the Algorithm',
  // Query-aligned search title (drives <title>, OG and Twitter). Deliberate split.
  meta_title: 'Amazon Full-Funnel Campaigns Put Channel Mix Inside AI',
  excerpt: "In March I wrote that budget allocation, target ROAS, channel mix and product prioritization should stay with a human. Amazon's September 29 Full-Funnel Campaigns documentation puts two of those four inside the optimizer, and the DVA+ capability table shows Amazon now selling delegation level as a product choice.",
  meta_description: DESCRIPTION,
  og_image: '/images/blog/amazon-full-funnel-campaigns-ai-channel-mix.svg',
  category: 'Digital Marketing',
  tags: ['Amazon Ads', 'Full-Funnel Campaigns', 'retail media', 'media buying', 'AI automation', 'DVA+'],
  status: 'published',
  featured: false,
  read_time_minutes: 6,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: false,
    related_posts: ['walmart-marty-ad-agent', 'trade-desk-kokai-zuma-agentic-media-buying', 'commerce-media-basket-data-spend-data-citi'],
    featured_image_alt: 'One daily advertising budget allocated by machine across sponsored ads, display, video and streaming TV, with the human retaining the objective, the economic envelope and creative approval',
  },
  published_at: new Date().toISOString(),
  content: `<p>In March I wrote a sentence about <a href="/blog/walmart-marty-ad-agent">Walmart's Marty ad agent</a> and meant it as practical advice. "Keep the strategic layer (budget allocation, target ROAS, channel mix, product prioritization) with a human. Let the AI handle execution within those constraints."</p>

<p><a href="https://advertising.amazon.com/library/news/amazon-ads-agent" ${EXT}>Amazon's September 29 documentation</a> puts two of those four items inside the optimizer.</p>

<h2>What Amazon actually shipped</h2>

<p>Full-Funnel Campaigns brings sponsored ads, display, video and streaming TV into one campaign. The advertiser sets products, a daily budget, an optional ROAS threshold and creative, or generates creative with Amazon's tools and approves it before launch. Amazon's AI, in the company's words, "handles the rest on their behalf."</p>

<p><a href="https://advertising.amazon.com/products/full-funnel-campaigns" ${EXT}>The sentence that matters is in the pricing FAQ rather than the announcement</a>. "Full-Funnel Campaigns uses a daily budget, which Amazon's AI then allocates across sponsored ads, display, video, and streaming TV in real time to grow long-term sales." <a href="https://advertising.amazon.com/library/news/unboxed-2026-news-announcements" ${EXT}>The unBoxed recap is blunter</a>: "You set your goal and AI handles the channel mix, creative, audiences, and optimization."</p>

<p>Amazon used my word.</p>

<p>One correction to the trade coverage. The launch announcement says Full-Funnel Campaigns is "now available to all advertisers in the United States," while the product FAQ is narrower: U.S. advertisers selling in the Amazon store, Brand Registry sellers, vendors, and agencies with clients who sell on Amazon, with a minimum daily budget. I found no "open beta" wording for it. The product with published beta stages is DVA+, in extended closed beta with open beta expected late October.</p>

<h2>Auditing my own four items</h2>

<p><strong>Budget allocation moved.</strong> The human sets a daily amount and can change it at any time. Amazon moves it between formats in real time. No format level minimum, maximum, override or lock appears anywhere in the documentation I read.</p>

<p><strong>Channel mix moved, inside a boundary.</strong> The four formats are fixed and Amazon chooses among them. This is not a machine choosing every media channel available. Audio is not in Full-Funnel Campaigns at all, despite one Amazon recap listing it.</p>

<p><strong>Target ROAS stayed human, and stayed optional.</strong> Whether the threshold is a hard floor, a target, or one input among several is not documented anywhere I could find.</p>

<p><strong>Product prioritization split.</strong> The advertiser picks the products. Whether Amazon weights spend across them, and whether per product weighting is available, is not documented.</p>

<p>Two of four moved. One stayed. One is unclear. That revises a sentence I published rather than reversing it.</p>

<h2>What is new, and what is not</h2>

<p>Amazon did not invent this. Performance Max and Advantage+ have automated placement, audience and budget decisions for years. <a href="https://advertising.amazon.com/library/news/unboxed-2025-recap" ${EXT}>Amazon itself announced Full-Funnel Campaigns at unBoxed 2025</a>, and that description already included continuously adjusting "budgets, audiences, and tactics." The 2025 version recommended a setup. The 2026 version runs now, with numbers attached.</p>

<p>The narrower new thing: a retail media platform is allocating one daily budget across its own sponsored search auction and its own streaming TV inventory in a single campaign, optimizing toward a metric built from its own purchase data. Google allocates across Google. Amazon is allocating across the gap between demand creation and demand capture, which is the gap most retail media org charts are built around.</p>

<h2>The number, and what it contains</h2>

<p>Amazon reports 67% higher Long-Term ROAS and 29% lower cost per new-to-brand purchase. The footnote reads: "Amazon internal. June - August 2026. Based on early beta results; individual performance may vary."</p>

<p>Long-Term ROAS is not current period sales ROAS. <a href="https://advertising.amazon.com/resources/whats-new/long-term-sales" ${EXT}>Amazon's own documentation defines Long-Term Sales</a> as an estimate of value over the next 12 months "based on how effectively your advertising campaigns are able to move new-to-brand shoppers further down your purchase funnel," credited from the historical return on actions like detail page views and add to carts. A campaign that produced a product page view receives credit for what shoppers who took that same action historically went on to do.</p>

<p>The comparison group is "independently configured campaigns." The honest reading of the uplift is that coordinated beat uncoordinated, which may say as much about how poorly separate campaigns were working together as about the optimizer. Advertiser count, categories, spend, matched budgets, randomization and significance are all undisclosed. This is one more case of <a href="/blog/commerce-media-basket-data-spend-data-citi">performance measured inside the ecosystem being measured</a>.</p>

<p>Amazon does ship something genuinely useful here. The accumulated sales report, in Amazon's words, lets you compare "estimated LTS to sales driven by your campaign cohorts over time, measuring whether the revenue estimated by LTS actually materialized." A platform shipping a back test of its own modeled metric is worth more than the 67%.</p>

<h2>Amazon is selling delegation levels</h2>

<p>The strongest evidence sits in a different product. <a href="https://advertising.amazon.com/resources/whats-new/dva-plus-display-video-audio-campaigns" ${EXT}>DVA+ publishes a capability table</a>. In the default mode, budget is "set once; AI optimizes delivery" and format selection is "multi-format automatically." Turn on advanced settings and the same advertiser gets "format-level allocation, budget flighting, budget and frequency caps" and "granular per-format configuration."</p>

<p>Format level allocation exists at Amazon. It is a control in one campaign type and absent from the other. Delegation level has become a product choice.</p>

<p>That strengthens the objection to my own thesis, and I think the objection wins. Channel mix has not stopped being strategy. It has stopped requiring a human to make every allocation decision. Choosing Full-Funnel Campaigns is itself the strategic act.</p>

<h2>The revised rule</h2>

<p>In August, looking at <a href="/blog/trade-desk-kokai-zuma-agentic-media-buying">The Trade Desk</a>, I argued the buyer's work moves up a level rather than disappearing. The execution boundary there was narrow and mostly closed beta. This is the first case I have seen where the specific decisions I told people to keep are executed by default in a product available today.</p>

<p>The strategic layer did not disappear. It moved upstream.</p>

<p>Do not keep a decision with a human because it was historically filed under strategy. Keep it human when it encodes something the optimizer cannot see: the objective, the economic envelope, the margin reality, the brand boundary, and the standard of proof required to scale. Hand over what can be continuously optimized inside those.</p>

<p>Three things are worth settling before funding this. Establish from your account team whether the optional ROAS threshold is a hard constraint or a preference, because it is the only economic guardrail in the setup and the documentation does not say. Confirm whether the optimization target matches contribution margin or platform attributed sales that include modeled future value, because those are different numbers. Decide in advance what evidence from outside the optimizer will justify the next budget increase, and write it down before the learning period starts.</p>

<p>The platform now makes the allocation decisions my March advice told you to keep. Which of them would you actually want back?</p>`,
}

const { data, error } = await supabase.from('blog_posts').insert(post).select('id, slug').single()
if (error) { console.error('Insert failed:', error); process.exit(1) }
console.log('Post inserted successfully:', data.id)
console.log('URL: https://theroberthu.com/blog/' + data.slug)
