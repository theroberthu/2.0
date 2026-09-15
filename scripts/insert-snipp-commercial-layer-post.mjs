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

const DESCRIPTION = 'Snipp brought rebates and loyalty into ChatGPT and Claude, separating owned incentives from organic answers and paid ads. Reach is opt-in for now.'

// Primary source (Snipp release) and independent evidence check.
const SRC_SNIPP = 'https://www.accessnewswire.com/newsroom/en/business-and-professional-services/snipp-interactive-introduces-new-chatgpt-plugin-and-claude-conne-1220336'
const SRC_PPCLAND = 'https://ppc.land/snipp-puts-brand-rebates-inside-chatgpt-and-claude-with-no-platform-fees/'
const EXT = 'target="_blank" rel="noopener noreferrer"'

const post = {
  slug: 'snipp-promotions-loyalty-ai-commercial-layer',
  // Editorial H1 (renders on page, and as JSON-LD headline)
  title: 'AI Shopping Is Growing a Third Commercial Layer',
  // Query-aligned search title (drives <title>, OG and Twitter). Deliberate split.
  meta_title: 'Snipp Brings Promotions and Loyalty to ChatGPT and Claude',
  excerpt: 'Snipp brought brand rebates, offers and loyalty programs into ChatGPT and Claude. The launch makes a third commercial layer visible alongside organic recommendations and paid ads, but for now it reaches only shoppers who install the tool.',
  meta_description: DESCRIPTION,
  og_image: '/images/blog/snipp-promotions-loyalty-ai-commercial-layer.svg',
  category: 'Digital Marketing',
  tags: ['Snipp', 'ChatGPT', 'Claude', 'loyalty', 'promotions', 'AI commerce'],
  status: 'published',
  featured: false,
  read_time_minutes: 5,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: false,
    related_posts: ['chatgpt-ads-self-serve-geo-still-wins-marketplace-sellers', 'walmart-sparky-sponsored-prompts-ads', 'niq-similarweb-agentic-commerce-measurement'],
    featured_image_alt: 'An AI shopping conversation carrying three separate kinds of commercial information: an organic recommendation, a paid ad, and a brand-supplied promotional offer',
  },
  published_at: '2026-09-15T19:00:00.000Z',
  content: `<p>Ask an AI assistant what to buy and, increasingly, three different kinds of commercial information can reach you in the same conversation. What the model recommends. What an advertiser paid to show you. And, as of this week, what a brand is offering you to buy it.</p>

<p>Those three things are controlled by three different parties, run on different systems, and answer to different rules. Keeping them separate in your head is becoming a practical skill.</p>

<h2>What launched</h2>

<p>On September 14, <a href="${SRC_SNIPP}" ${EXT}>Snipp Interactive released a ChatGPT plugin and a Claude connector</a> for shopper promotions and loyalty, alongside an MCP server that lets AI applications connect to the same infrastructure. According to Snipp, a shopper can discover rebates, offers, rewards and loyalty programs inside the conversation, enroll there, and submit receipts for validation, while Snipp handles offer rules, SKU-level purchase validation, fraud scoring, fulfillment and analytics behind the scenes.</p>

<p>Snipp says both integrations cleared each platform's verification process and are available in their directories, and that brands reach shoppers this way without new marketplace commissions or additional platform fees.</p>

<p>What the release does not contain is just as important. It names no customers and reports no results. Several of its consumer statistics are not attributed to any study, which <a href="${SRC_PPCLAND}" ${EXT}>the independent coverage</a> flagged the same day. This is a capability announcement, not evidence of adoption.</p>

<h2>The three layers, kept apart</h2>

<p>The useful thing about this launch is not the vendor. It is that it makes a third commercial layer concrete enough to separate from the other two.</p>

<p>The first layer is organic recommendation: the model deciding what is worth considering. OpenAI has been explicit that ads run on separate systems and do not shape its answers, which is why <a href="/blog/chatgpt-ads-self-serve-geo-still-wins-marketplace-sellers">paid placement does not solve the AI visibility problem</a> on its own.</p>

<p>The second layer is paid visibility. In ChatGPT it appears separately from the answer. Inside a retailer's own assistant it can sit much closer, as Walmart showed by <a href="/blog/walmart-sparky-sponsored-prompts-ads">placing sponsored prompts among Sparky's recommendations</a>. Either way, it is visibility someone bought.</p>

<p>The third layer is owned incentive data: the brand's own rebate, reward or loyalty offer, governed by the brand's own eligibility rules. It is not an organic recommendation, because the brand supplied the offer. And it is not conventional paid media inventory. It is closer to the brand bringing its own promotional terms to the moment of intent.</p>

<h2>What is actually new</h2>

<p>Owned loyalty inside ChatGPT is not new on its own. When <a href="/blog/chatgpt-sephora-retailer-apps">Sephora launched inside ChatGPT</a>, its loyalty rewards came along, but only because Sephora built its own experience on the platform.</p>

<p>Two things are different here, and this is my reading rather than anything Snipp claimed.</p>

<p>The first is that the incentive layer is decoupled from building your own AI app. A brand's promotion can become reachable in a conversation through shared infrastructure, rather than only through a storefront the brand constructs for each assistant.</p>

<p>The second is that it is decoupled from checkout. Validation happens against a receipt, which means the purchase can occur wherever the shopper normally buys. The assistant does not need to own the transaction for the incentive to be honored.</p>

<h2>The limit that matters most</h2>

<p>This is where the idea of a third layer needs a qualifier.</p>

<p>Organic recommendations can surface without a shopper installing a separate brand tool. Ads reach users according to the platform's ad-delivery system. Snipp's incentives reach a conversation only where the shopper has installed the plugin or added the connector, and then only when that capability is invoked. That makes owned incentive data a layer that currently exists by invitation, not by default.</p>

<p>That may change as directories mature or assistants surface tools more proactively. For now, the separation is real but the reach is small, and nobody has published how many shoppers have connected it.</p>

<h2>What it does not solve</h2>

<p>Receipt validation is interesting for measurement, because it can confirm that a qualifying product was purchased without depending on a referral click. That is a different kind of evidence from the traffic data that <a href="/blog/niq-similarweb-agentic-commerce-measurement">struggles to see what happened inside an AI answer</a>.</p>

<p>But confirming a purchase is not attributing it. Snipp has not shown that a validated receipt can be tied back to a specific conversation, or that the incentive changed what the shopper would otherwise have bought. A rebate claimed by someone who was always going to buy is a cost, not an outcome.</p>

<h2>Where this leaves operators</h2>

<p>Brands have long run promotions, shopper marketing, loyalty, retail media and ecommerce as separate systems with separate owners. Conversational interfaces compress them toward a single moment. A shopper may eventually ask one question and see the recommended product, a paid alternative, a current rebate and their loyalty eligibility together.</p>

<p>If that happens, promotional data starts to behave like product data already does. Offer terms, eligibility rules, qualifying SKUs and expiry dates have to be accurate and machine-readable, because an assistant will read them literally. An expired rebate surfaced with confidence is worse than none.</p>

<p>None of this changes the ladder I use for AI visibility. A product still has to be found, recommended and chosen. An incentive is not a rung on that ladder. It is separate information attached to the decision, and there is no evidence yet that it influences whether a product gets recommended at all.</p>

<h2>The objections</h2>

<p>One vendor launch does not establish a market layer. Distribution depends on users connecting a tool, and the release offers no adoption figures to suggest they are.</p>

<p>The platforms control the directories and could change how connectors are approved or surfaced. They could also decide incentives belong inside their own ad products, which would collapse the third layer back into the second.</p>

<p>And separation on paper is not separation in the shopper's mind. If a brand-supplied offer appears in the same conversation as an organic recommendation, the disclosure that tells them apart matters, and how clearly that is presented is not described in the release.</p>

<p>If a shopper cannot tell which part of an answer was recommended, which was paid for, and which was the brand's own offer, does the separation between them exist for anyone but the operator?</p>
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
