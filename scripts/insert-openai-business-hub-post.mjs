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

const DESCRIPTION = "OpenAI now lets businesses verify ChatGPT profiles, share product feeds and publish branded agents. None of it buys a place in ChatGPT's independent answers."

const EXT = 'target="_blank" rel="noopener noreferrer"'

const post = {
  slug: "openai-business-hub-chatgpt-business-agents",
  // Editorial H1 (renders on page, and as JSON-LD headline)
  title: "OpenAI Business Hub Separates Participation From Influence",
  // Query-aligned search title (drives <title>, OG and Twitter). Deliberate split.
  meta_title: "OpenAI Business Hub and ChatGPT Business Agents Explained",
  excerpt: "On November 10, OpenAI opened Businesses in ChatGPT in beta. A verified profile means the business is authorized to speak for itself. It does not mean ChatGPT endorses it.",
  meta_description: DESCRIPTION,
  og_image: '/images/blog/openai-business-hub-chatgpt-business-agents.svg',
  category: "GEO & SEO",
  tags: ["OpenAI", "ChatGPT", "Business Hub", "Business Agents", "ecommerce GEO", "Shopify Catalog", "AI visibility"],
  status: 'published',
  featured: false,
  read_time_minutes: 5,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: false,
    related_posts: ["openai-sponsored-agents-chatgpt-ads-shopify", "shopify-ai-knowledge-base-ecommerce-geo", "chatgpt-ads-self-serve-geo-still-wins-marketplace-sellers"],
    featured_image_alt: "Pull quote from Robert Hu on OpenAI Business Hub: A verified profile means the business is authorized to speak for itself.",
  },
  published_at: new Date().toISOString(),
  content: `<p>On November 10, OpenAI <a href="https://openai.com/index/introducing-businesses-chatgpt/" ${EXT}>opened Businesses in ChatGPT in beta</a>. Through a new Business Hub, a company can claim its listing, prove that it speaks for the business, submit updates to its details, connect a product feed and see how often ChatGPT sends people its way. Eligible U.S. ecommerce and online service businesses can also publish a Business Agent, a branded assistant that answers questions about their products and policies. OpenAI says ChatGPT reaches 1.2 billion people each week.</p>

<p>The obvious reading is that businesses finally get a seat at the table. The documentation supports something narrower. OpenAI is separating participation from influence. A business can now take part in how ChatGPT describes it. It cannot claim, verify or buy its way into ChatGPT's independent judgment.</p>

<h2>What claiming actually gets you</h2>

<p>Claiming starts with proof of connection: a code sent to a business phone or email, a DNS record on the website domain, or a Shopify login. OpenAI reviews the claim. Then comes identity verification through Persona, which can require a government ID, business registration and proof of authority. Until Persona approval, a business cannot publish changes, connect a feed, view insights or build an agent. <a href="https://help.openai.com/en/articles/20001635-setting-up-your-business-on-chatgpt" ${EXT}>OpenAI's help center says</a> the blue verified check appears only after that approval, although <a href="https://openai.com/business/businesses-in-chatgpt/" ${EXT}>its product page</a> describes the check as a sign the business was claimed.</p>

<p>Profiles are open to eligible businesses wherever ChatGPT is available. Agents are U.S. only for now and also require a website and <a href="https://openai.com/policies/business-agents-policy/" ${EXT}>an eligible industry</a>.</p>

<p>Once verified, a business can submit updates to its website, description, category, logo, delivery and return policies, which OpenAI reviews before publishing, and connect a product feed as a CSV or hosted file. Shopify merchants do not need a feed. <a href="https://help.shopify.com/en/manual/online-sales-channels/agentic-storefronts/chatgpt" ${EXT}>Shopify says eligible products</a> already reach ChatGPT through Shopify Catalog with prices and availability kept current, and connecting the store verifies the business automatically.</p>

<p>None of that is a ranking lever. OpenAI's FAQ says claiming does not guarantee increased visibility or give direct control over ChatGPT's independent recommendations, and that advertising does not influence its independent answers. <a href="https://openai.com/policies/businesses-in-chatgpt-terms/" ${EXT}>The terms go further</a>. OpenAI may create and display a listing whether or not the business claims it, and claiming does not give the business exclusive control over its contents. OpenAI may supplement, edit or replace the information using other sources.</p>

<p>A verified profile means the business is authorized to speak for itself. It does not mean ChatGPT endorses it.</p>

<h2>Four layers, kept apart</h2>

<p>In September I separated three surfaces: <a href="/blog/openai-sponsored-agents-chatgpt-ads-shopify">ChatGPT's independent answer, the paid placement and a separate advertiser-sponsored conversation</a>. The November launch builds the operating system around that conversation. Four layers now describe what a business touches.</p>

<p>The independent answer. ChatGPT decides what to mention, compare and recommend. Nothing in the launch gives a business a hand in it.</p>

<p>The verified profile. The business supplies facts. OpenAI reviews them, decides when they appear and may supplement, edit or replace submitted information using other sources.</p>

<p>The Business Agent. A clearly labeled conversation the shopper chooses to start from the business's profile, separate from the original ChatGPT conversation. The business supplies product knowledge, policies and guidelines, previews the agent and publishes it.</p>

<p>Paid distribution. A business can sponsor its agent or make it the destination for a ChatGPT ad. That requires a separate advertising agreement, and sponsored placements stay labeled and outside ChatGPT's answers.</p>

<p>Checkout sits outside all four. The current Business Agent cannot complete purchases, make bookings or look up orders. For Shopify merchants, the purchase happens on the store's own checkout, in ChatGPT's in-app browser in the apps or in a new tab on ChatGPT web. The terms say OpenAI does not become the seller.</p>

<div class="table-wrapper">
<table>
<thead><tr><th>Layer</th><th>What the business can do</th><th>What OpenAI keeps</th></tr></thead>
<tbody>
<tr><td>Independent answer</td><td>Supply information ChatGPT may use. Claiming, feeds and advertising give no direct control over recommendations.</td><td>Deciding what to mention, compare and recommend</td></tr>
<tr><td>Verified profile</td><td>After Persona approval, submit updates to its details and connect a product feed</td><td>Reviewing and publishing changes, and the right to supplement, edit or replace submitted information using other sources</td></tr>
<tr><td>Business Agent</td><td>Supply product knowledge, policies and guidelines, preview the agent and decide whether to publish it. The business is responsible for its outputs.</td><td>The right to modify, suspend or remove the agent at any time without notice</td></tr>
<tr><td>Paid distribution</td><td>Sponsor its agent or make it a ChatGPT ad destination, under a separate advertising agreement</td><td>Labeling sponsored placements and keeping them separate from ChatGPT responses</td></tr>
<tr><td>Checkout</td><td>Complete the sale on its own checkout, outside all four layers</td><td>Not the seller. The current agent links out and cannot complete purchases.</td></tr>
</tbody>
</table>
</div>

<h2>Responsibility runs further than control</h2>

<p>The agent is where the terms ask the most. OpenAI may build and configure an agent for a business before the business elects to use it, and Shopify setup can produce a draft automatically. Once a business publishes, it is responsible for the agent's content, configuration, testing and outputs, whether or not it provided, reviewed or approved them. OpenAI does not warrant that the agent will follow instructions, and it can modify, suspend or remove the agent at any time without notice.</p>

<p>For a business that submits a product feed, <a href="https://openai.com/policies/businesses-in-chatgpt-terms/" ${EXT}>OpenAI's terms require crawler access</a> and say relevant text-and-data-mining opt-outs will not apply to OpenAI or its affiliates. That is a material data-governance term, not just a feed-setup detail.</p>

<h2>Measurement without the conversation</h2>

<p>Business Hub adds first-party reporting on organic presence: mentions, website clicks and discovery topics over the past 28 days. For an online business, a mention counts only when ChatGPT references the website. Naming the brand alone does not count. Discovery topics are themes in answers that cited the business, and OpenAI says they do not directly measure customer intent.</p>

<p>What it leaves out matters as much. Businesses receive no individual prompts, no conversations and no transcripts of chats with their own agent. Figures appear only above an undisclosed threshold, and a blank does not mean zero. Nothing reports incremental revenue or recommendation rank. The one channel back is narrower: the terms provide for lead information that a user chooses to share through an approved feature.</p>

<p>That fills one gap in the <a href="/geo">prompt-level tracking behind ecommerce GEO</a> without replacing it. It reports your own outcomes, not where competitors appear or why ChatGPT chose them.</p>

<h2>Shopify merchants now keep three records</h2>

<p><a href="https://help.shopify.com/en/manual/online-sales-channels/agentic-storefronts/chatgpt" ${EXT}>Shopify's help center is explicit</a>: its AI knowledge base has no connection to ChatGPT Business Hub, the business profile or the Business Agent. A merchant who carefully published return windows and store facts in <a href="/blog/shopify-ai-knowledge-base-ecommerce-geo">the knowledge base</a> has not grounded its ChatGPT agent. Product data flows through Shopify Catalog. Profile details and agent guidance are entered in Business Hub.</p>

<p>The documentation does not say how the agent treats the storefront itself, so I would not call this proven duplication. The operating risk is plain anyway. The same return policy may now live in the storefront, the knowledge base and Business Hub, potentially managed by different teams and updated on different schedules. When they disagree, the shopper meets the disagreement inside a branded conversation.</p>

<h2>What it means for ecommerce GEO</h2>

<p>AI platforms appear willing to give businesses bounded control over four things: identity, supplied facts, branded conversation and paid distribution. They keep the recommendation. That fits the pattern in <a href="/ai-commerce-2027">AI Commerce 2027</a>, where platforms open their interfaces while the merchant stays the merchant of record.</p>

<p>For GEO, retrieval, representation and recommendation remain separate. A product feed and a verified profile improve the evidence ChatGPT can retrieve. A Business Agent shapes how the business represents itself once a shopper chooses to ask. Neither decides whether ChatGPT recommends the business in the first place.</p>

<p>Claim an eligible listing so the business can submit corrections, assign an internal owner and monitor how it appears. Claiming does not give the business exclusive control over the listing or over ChatGPT's independent answers. Every fact that now lives in more than one record still needs a named owner.</p>

<p>If ChatGPT's answer and your own agent describe your return policy differently tomorrow, which one will your customer believe?</p>`,
}

const { data: existing } = await supabase.from('blog_posts').select('id').eq('slug', post.slug)
if (existing && existing.length) { console.error('Slug already exists, not inserting'); process.exit(1) }

const { data, error } = await supabase.from('blog_posts').insert(post).select('id, slug').single()
if (error) { console.error('Insert failed:', error); process.exit(1) }
console.log('Post inserted successfully:', data.id)
console.log('URL: https://theroberthu.com/blog/' + data.slug)
