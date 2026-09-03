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

const DESCRIPTION = "Anthropic published what it will not own in commerce, and the code enforces it. The merchant keeps checkout. Claude does the reasoning."

// Anthropic primary sources, cited at the claims they support.
const SRC_BLOG = 'https://claude.com/blog/claude-for-commerce-agents'
const SRC_SOL = 'https://claude.com/solutions/commerce'
const SRC_REPO = 'https://github.com/anthropics/commerce-agents'
const EXT = 'target="_blank" rel="noopener noreferrer"'

const post = {
  slug: 'anthropic-claude-commerce-intelligence-layer',
  // Editorial H1 (renders on page, and as JSON-LD headline)
  title: 'Anthropic Is Building the Intelligence Layer for Merchant-Owned Commerce',
  // Query-aligned search title (drives <title>, OG and Twitter). Deliberate split.
  meta_title: "Claude for Commerce: How Anthropic's Shopping and Merchant Agents Work",
  excerpt: 'Anthropic shipped two commerce agents and, unusually, published what it is not interested in owning: catalogs, supply chain, last mile, and advertising inside the agents you build. The architecture backs it up. Nothing places an order or changes a live listing, and the model never even sees the checkout URL.',
  meta_description: DESCRIPTION,
  og_image: '/images/blog/anthropic-claude-commerce-intelligence-layer.svg',
  category: 'E-commerce Strategy',
  tags: ['Anthropic', 'Claude', 'agentic commerce', 'commerce agents', 'merchant of record', 'AI governance'],
  status: 'published',
  featured: false,
  read_time_minutes: 6,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: false,
    related_posts: ['ai-checkout-interface-commerce-infrastructure', 'retailers-ai-traffic-customer-ownership', 'ai-wont-fix-broken-work'],
    featured_image_alt: 'A merchant retaining the storefront and checkout while an AI reasoning layer sits underneath',
  },
  published_at: '2026-09-03T13:00:00.000Z',
  content: `<p>Anthropic <a href="${SRC_BLOG}" ${EXT}>released two commerce agents on September 2</a>, a shopping agent that a merchant embeds in its own app, and a merchant agent that staff use to run the back office. The code is <a href="${SRC_REPO}" ${EXT}>on GitHub under Apache 2.0</a>.</p>

<p>The agents themselves are not the interesting part. What caught my attention is a sentence on <a href="${SRC_SOL}" ${EXT}>Anthropic's commerce page</a> that most vendors would not write: "Claude is your intelligence layer, not a storefront or checkout."</p>

<p>Companies say things like that all the time. What makes this worth examining is that the architecture appears to enforce it.</p>

<h2>The line Anthropic drew, in its own words</h2>

<p>Most AI companies describe what their product can do. Anthropic also published what it does not want.</p>

<p>"We're not interested in owning catalogs, supply chain, or the last mile, and there's no advertising or paid placement of Claude in any agent you build." Elsewhere on the same page: "Your relationships stay yours." And on the customer experience: shoppers get help "inside your app, then check out without going to a marketplace or third-party assistant."</p>

<p>I want to be precise about what that is and is not. It is a clear statement of what Anthropic says it is not interested in owning, scoped to catalogs, supply chain, last mile, and advertising inside these agents. It is not a promise about what Anthropic will never build, and I would not read it as one. Companies revise their interests.</p>

<p>The no-advertising line is the one I did not expect. Every other conversational commerce surface I have looked at recently is moving the other way, whether that is <a href="/blog/chatgpt-ads-billion-revenue-run-rate-distribution">ChatGPT Ads reaching a billion-dollar run rate</a> or sponsored placements appearing inside retailer assistants. Anthropic ruled that out for agents merchants build on this blueprint.</p>

<h2>The architecture backs the claim</h2>

<p>Statements of intent are cheap. Code is less so, and the repository is specific about where the agent stops.</p>

<p>"Nothing places an order, charges a card, or changes a live listing." The shopping agent searches, compares, plans, fills a cart, and answers questions. When it is time to buy, "the checkout card links to your own checkout route, or to the platform's hosted checkout URL." The documentation adds a detail I found genuinely striking: "the backend returns the URL and the host renders it; the model never sees it."</p>

<p>The merchant agent works the same way in reverse. It explains performance, tracks inventory, recommends pricing and promotions, and drafts campaigns, but "every merchant write is staged until a person approves it." Cart and refund authority carry hard limits, and anything beyond them escalates. Anthropic puts the responsibility plainly: "Business rules, authorization, and compliance are the deployment's."</p>

<p>So the merchant keeps the storefront, the checkout path, the catalog, the fulfillment, and the business rules. Payment can remain in the merchant's existing checkout or move through an agentic payments provider. Claude does the reasoning in the middle while the blueprint deliberately hands key commercial actions back to merchant-controlled systems and human approval.</p>

<h2>Intelligence ownership and transaction ownership are separable</h2>

<p>This is where it becomes a strategic argument rather than a product description, and this part is my interpretation.</p>

<p>I have spent the last month writing about a pattern where retailers get the order while something else keeps the context. Assistants <a href="/blog/retailers-ai-traffic-customer-ownership">hold the discovery conversation while the merchant receives the transaction</a>. The checkout page turns out to be <a href="/blog/ai-checkout-interface-commerce-infrastructure">a data collection device rather than the thing doing the work</a>. In both cases the retailer ends up with the money and less of the understanding.</p>

<p>This blueprint proposes a different arrangement. The merchant keeps the commerce surface and transaction flow while renting the reasoning layer. Claude can become more important to the transaction without becoming the place where the transaction happens.</p>

<p>If that holds, intelligence ownership and transaction ownership are separable, and a merchant does not have to surrender the surface in order to get the capability. That is a genuinely different answer to the question I have been circling.</p>

<h2>The objection that actually lands</h2>

<p>Here is the counterargument I cannot dismiss.</p>

<p>If Claude is the system interpreting what the customer wants, assembling the comparison, and shaping which products get surfaced, then owning checkout is not the same as owning the relationship. That is the exact distinction I have been making about everyone else, and it applies here too.</p>

<p>A merchant that builds on this becomes dependent on a model it does not control, for the part of the experience that determines what customers see. The interface is the merchant's. The judgment inside it is not. Anthropic saying it is not interested in owning catalogs does not change where the reasoning happens.</p>

<p>There are practical objections too. Building and operating a retailer-owned assistant is expensive and most merchants are not staffed for it. Shoppers may prefer one assistant that works across retailers rather than a different one at every store, which would make this whole architecture the less convenient option. And staged approval is only a control while a human is genuinely reviewing. Raise the volume of suggestions enough and approval becomes a click, which is the failure mode I keep coming back to: <a href="/blog/ai-wont-fix-broken-work">AI does not fix work that was unclear to begin with</a>, and it does not fix governance that has become ceremonial.</p>

<h2>The numbers do not carry the argument</h2>

<p>Anthropic reports that "retailers running shopping agents on Claude have seen carts up to 35% larger and shoppers 60% more likely to complete a purchase."</p>

<p>I would not build anything on those figures. No customer is named, no sample size, no time period, no baseline, and no methodology is disclosed anywhere I could find. "Up to" is doing real work in the first number. Retailers who deploy an agent early are self-selected, and a comparison between shoppers who used an assistant and shoppers who did not is a comparison between two different kinds of shopper before the assistant does anything.</p>

<p>The architecture argument does not need them, which is convenient, because they do not support much.</p>

<h2>Different architectures, not a winner</h2>

<p>I do not think agentic commerce converges on one model, and I would be skeptical of anyone who says it will.</p>

<p>Amazon runs its own assistant inside its own walls, attached to its own advertising and membership. OpenAI built a consumer destination and monetized the attention. Anthropic has published a blueprint for merchants to build their own, explicitly declining the surfaces the other two occupy, and shipped it as open source deployable on other companies' clouds. Those are three different bets about which layer is worth owning, and all three can be right in different categories.</p>

<p>The useful question for an operator is not which architecture wins. It is which layer your business can actually defend. A retailer with real distribution and a real customer relationship has a reason to keep the surface and rent the intelligence. A retailer without either may be better off appearing inside somebody else's assistant, and should be honest that it is renting the relationship too.</p>

<p>This is one blueprint from one company at one moment, and I would hold it loosely. What it does is widen the menu. Until now the choice looked like owning everything or being intermediated. There is a version where you keep the storefront and buy the reasoning, and now there is reference code for it.</p>

<p>If the merchant owns the storefront and the transaction while Claude increasingly interprets the customer and shapes the decision, which layer is actually the valuable one?</p>
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
