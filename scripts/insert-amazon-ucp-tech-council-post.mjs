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

const post = {
  slug: 'amazon-joins-universal-commerce-protocol',
  title: "Amazon Just Joined the Agentic Commerce Governance Body It Spent 8 Months Fighting. Here's What That Reversal Means.",
  excerpt: "Amazon, Meta, Microsoft, Salesforce, and Stripe joined the Universal Commerce Protocol Tech Council. After 8 months of blocking AI agents and suing Perplexity, Amazon is now at the table. The walled garden vs. open ecosystem narrative is over.",
  meta_title: "Amazon Joins Universal Commerce Protocol: What It Means",
  meta_description: "Amazon joined the UCP Tech Council after 8 months of fighting agentic commerce. The walled garden narrative is over. Best AI commerce strategy for marketplace sellers.",
  og_image: '/images/blog/amazon-joins-universal-commerce-protocol.svg',
  category: 'Digital Transformation',
  tags: ['universal commerce protocol amazon', 'ucp tech council', 'amazon agentic commerce strategy', 'best ai commerce strategy 2026'],
  status: 'published',
  featured: false,
  read_time_minutes: 6,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: true,
    faq_data: [
      {
        q: 'What is the Universal Commerce Protocol (UCP)?',
        a: "UCP is an open standard that defines how AI agents interact with merchants across discovery, cart, checkout, and order management. It was originally developed by Google in collaboration with Shopify, Etsy, Target, and Wayfair. UCP supports four transports including MCP and A2A, defines capability discovery so agents know what each retailer can do, and standardizes payment handlers across the ecosystem."
      },
      {
        q: 'Why did Amazon reverse its position on agentic commerce?',
        a: "Amazon spent 8 months blocking AI bots, suing Perplexity, and building proprietary closed systems like Rufus, Buy for Me, and Shop Direct. Joining UCP is not a surrender. It is strategy. Amazon would rather shape the open standard from inside than be excluded from how external AI agents interact with retailers. Sitting on the Tech Council gives Amazon influence over the rules that everyone else will follow."
      },
      {
        q: 'Does UCP mean Amazon Rufus and Walmart Sparky go away?',
        a: "No. Rufus stays proprietary inside Amazon's ecosystem. Sparky stays Walmart's primary AI assistant on walmart.com and inside ChatGPT and Gemini. UCP defines how external AI agents (ChatGPT, Claude, Gemini, custom agents) interact with retailers' product data and checkout flows. The proprietary AI assistants and the open protocol coexist."
      },
      {
        q: 'What should marketplace sellers do about UCP?',
        a: "Audit your structured product data this quarter. UCP rewards retailers and merchants with clean, complete, machine-readable product information. The same data discipline that powers GEO and AI recommendations on Rufus and Sparky is what UCP-compliant agents will evaluate. Sellers with thin or inconsistent data will be invisible to agentic commerce regardless of which AI surface drives the discovery."
      }
    ],
    related_services: ['digital-transformation'],
    related_posts: ['amazon-ai-walled-garden', 'amazon-walmart-divergent-strategies-2026', 'walmart-sparky-chatgpt-gemini'],
    featured_image_alt: "Amazon joins Universal Commerce Protocol Tech Council after 8 months of fighting agentic commerce, alongside Meta, Microsoft, Salesforce, and Stripe"
  },
  published_at: '2026-04-25T12:00:00.000Z',
  content: `<p>Amazon, Meta, Microsoft, Salesforce, and Stripe joined the Universal Commerce Protocol (UCP) Tech Council yesterday. UCP is the open standard that defines how AI agents interact with merchants across discovery, cart, checkout, and order management. Founding members were Google, Shopify, Etsy, Target, and Wayfair.</p>

<p>For Amazon, this is a 180-degree shift in eight months. Last August they blocked AI bots from OpenAI, Anthropic, Meta, Google, and Huawei. In February they tightened their seller agreement to require AI agents to identify themselves. <a href="/blog/amazon-ai-walled-garden">They sued Perplexity</a>. They built Rufus, Buy for Me, and Shop Direct as proprietary closed systems. Now they're inside the governance body of the open standard they spent eight months trying to keep at bay.</p>

<div class="callout-box">
  <p class="callout-label">Key Takeaways</p>
  <ul>
    <li><strong>5 new members</strong> joined the UCP Tech Council on April 24: Amazon, Meta, Microsoft, Salesforce, and Stripe. Founding members were Google, Shopify, Etsy, Target, and Wayfair.</li>
    <li><strong>8-month reversal for Amazon.</strong> From blocking AI bots and suing Perplexity to governing the open protocol that defines agent-merchant interactions.</li>
    <li><strong>Walled garden vs. open ecosystem is over.</strong> Every major retailer and platform now sits at the same governance table. The strategic divide is collapsing.</li>
    <li><strong>UCP rewards clean structured data.</strong> The brands with complete, machine-readable product information will win agentic commerce regardless of which retailer or AI surface mediates the transaction.</li>
  </ul>
</div>

<h2>What Happened on April 24?</h2>

<p>The UCP Tech Council added five new members in a single announcement. The complete current roster:</p>

<ul>
<li><strong>Founding members:</strong> Google, Shopify, Etsy, Target, Wayfair</li>
<li><strong>New members (April 24):</strong> Amazon, Meta, Microsoft, Salesforce, Stripe</li>
</ul>

<p>That's nearly every major commerce, payments, and AI infrastructure player on the same governance body. Microsoft brings the Copilot agent ecosystem. Meta brings the messaging surfaces and Llama. Stripe brings payments. Salesforce brings enterprise commerce tooling. Amazon brings the largest e-commerce marketplace in the world.</p>

<p>UCP itself is structured around four transports including MCP (Model Context Protocol) and A2A (Agent-to-Agent), capability discovery so agents can query what each retailer supports, and standardized payment handlers. It's the plumbing layer that lets any AI agent interact with any UCP-compliant merchant without retailer-specific integration work.</p>

<h2>Why Did Amazon Join After 8 Months of Fighting?</h2>

<p>The reversal looks like a surrender. It's actually strategy.</p>

<p>Amazon spent eight months trying to keep external AI agents out of its ecosystem. They blocked OpenAI, Anthropic, Meta, Google, and Huawei bots in August 2025. They updated their seller agreement in February 2026 to require AI agent identification. <a href="/blog/amazon-ai-walled-garden">They sued Perplexity in federal court</a> for using Comet to scrape Amazon and complete purchases on behalf of users.</p>

<p>The legal and technical barriers worked at slowing external agents but didn't stop the broader industry from coalescing around UCP. Google built it with Shopify. Target and Wayfair joined because they couldn't afford to be excluded from the protocol that AI agents would use to find products. The momentum kept building.</p>

<p>Amazon had two choices. Stay outside and watch the open standard get written without them, then face the choice of complying with rules they didn't shape or being deprioritized by every UCP-aware AI agent. Or join the Tech Council and influence what the standard requires, what retailers must expose, what payment handlers look like, and how capability discovery works in practice.</p>

<p>They chose to be inside. Better to shape the protocol than to be the only major retailer outside it.</p>

<h2>Does This Mean the Walled Garden Is Dead?</h2>

<p>No. Rufus stays proprietary. Buy for Me stays Amazon's. Shop Direct stays Amazon's. The walled garden of Amazon's own AI assistant is not what UCP touches.</p>

<p>UCP defines how <em>external</em> AI agents (ChatGPT, Claude, Gemini, Perplexity, custom enterprise agents) interact with retailers and merchants. It's about the protocol layer that connects an AI agent on one side to a retailer's product catalog and checkout on the other. Amazon can be a UCP-compliant merchant for external agents while still running Rufus internally as a proprietary discovery surface.</p>

<p>The same logic applies to Walmart. <a href="/blog/walmart-sparky-chatgpt-gemini">Sparky is already integrated into ChatGPT and Gemini</a>. Sparky stays Walmart's primary AI assistant. UCP simply standardizes the plumbing that makes that integration work cleanly across every retailer and every AI surface.</p>

<p>What's actually changing is the <a href="/blog/amazon-walmart-divergent-strategies-2026">walled garden vs. open ecosystem narrative</a> we've been tracking for the past year. Both Amazon and Walmart are now committed to the same open protocol for external agent interactions. The strategic divide between Amazon's closed approach and Walmart's open approach is collapsing at the protocol layer, even if it persists at the AI assistant layer.</p>

<h2>What Does UCP Actually Do?</h2>

<p>UCP is a technical specification, not a marketing layer. Here's what matters for sellers:</p>

<p><strong>Capability discovery.</strong> An AI agent can query a retailer's UCP endpoint and learn what it supports. Does this retailer offer guest checkout? Does it support saved payment methods? Can it process subscriptions? Does it have inventory APIs that update in real time? The agent learns this dynamically without hardcoded retailer-specific logic.</p>

<p><strong>Standardized payment handlers.</strong> UCP defines how an agent presents payment options, processes the transaction, and confirms the order. Stripe being on the Tech Council means the payment side of the protocol gets battle-tested infrastructure.</p>

<p><strong>Four transports including MCP and A2A.</strong> The protocol supports multiple ways for agents to communicate with retailers. MCP (Model Context Protocol) is Anthropic's standard for connecting AI models to external tools and data. A2A (Agent-to-Agent) handles agent-to-agent coordination, which matters when one shopper's AI agent needs to negotiate with a retailer's AI agent.</p>

<p><strong>Cart, checkout, and order management.</strong> UCP standardizes how agents add items to carts, complete purchases, and manage post-purchase events like cancellations, returns, and tracking.</p>

<p>The practical effect: any AI agent can interact with any UCP-compliant retailer using a common interface. The integration cost drops dramatically.</p>

<h2>Why UCP Rewards Clean Structured Data</h2>

<p>Here's what most sellers will miss. UCP doesn't care about your branding, your storytelling, or your hero images. It cares about structured product data that an AI agent can parse, compare, and act on.</p>

<p>If your Amazon listing has complete attribute fields, clear use-case language, accurate dimensions, and consistent metadata, a UCP-compliant agent can match it to a shopper query confidently. If your listing has thin attributes, missing fields, vague descriptions, and image-locked information, the agent skips you in favor of a competitor whose data is parseable.</p>

<p>This is the same data discipline that powers <a href="/geo">Generative Engine Optimization</a>, the same discipline that gets you recommended by Rufus and Sparky, and now the same discipline that makes you visible to UCP-compliant agents across every major retailer simultaneously.</p>

<p>The brands that have been investing in clean structured product data over the past year are about to see that investment pay off across every UCP retailer at the same time. The brands that have been ignoring it are going to discover that protocol-level invisibility is harder to fix than search-level invisibility.</p>

<h2>What Should You Do This Quarter?</h2>

<p>Three concrete actions for marketplace sellers:</p>

<p><strong>1. Audit your structured product data on every channel.</strong> Pull up your top 10 SKUs on Amazon, Walmart, and your DTC site. For each, check whether every attribute field is complete and consistent across channels. Inconsistencies are exactly what UCP-compliant agents will deprioritize.</p>

<p><strong>2. Build a single source of truth for product attributes.</strong> Most brands maintain product data in separate spreadsheets per channel. That model breaks under UCP. You need a master record that feeds Amazon, Walmart, Shopify, and any future UCP retailer with the same canonical attributes. <a href="/services/digital-transformation">This is the digital transformation work</a> that compounds across every protocol-driven channel.</p>

<p><strong>3. Plan for capability-aware listings.</strong> UCP supports retailer-specific capabilities like subscription checkout, real-time inventory, and complex variation handling. Make sure your product data exposes the attributes those capabilities depend on. Subscription-eligible products need replenishment frequency. Variations need clear option types. Future-proof your listings now.</p>

<h2>The Bigger Picture</h2>

<p>For most of the past year, the agentic commerce question was whether Amazon would stay walled or eventually open up. Yesterday they answered. They're at the table. So is every other major retailer and AI infrastructure player.</p>

<p>The brands that understood data quality was the foundation, not the marketing layer, are about to see compounding returns. The ones who treated their listings as one-time projects are going to discover that the protocol they need to be visible inside got finalized while they were busy doing something else.</p>

<p>If you want help auditing your structured product data and preparing for protocol-driven commerce across Amazon, Walmart, and beyond, <a href="/free-strategy-session">book a free strategy session</a> and we'll walk through your top SKUs together.</p>`
}

async function insertPost() {
  const { data: existing } = await supabase
    .from('blog_posts')
    .select('id')
    .eq('slug', post.slug)
    .single()

  if (existing) {
    console.log('Post already exists, updating...')
    const { data, error } = await supabase
      .from('blog_posts')
      .update(post)
      .eq('slug', post.slug)
      .select()
    if (error) { console.error('Error updating post:', error); process.exit(1) }
    console.log('Post updated successfully:', data[0].id)
  } else {
    const { data, error } = await supabase
      .from('blog_posts')
      .insert(post)
      .select()
    if (error) { console.error('Error inserting post:', error); process.exit(1) }
    console.log('Post inserted successfully:', data[0].id)
  }
  console.log('Slug:', post.slug)
  console.log('Title:', post.title)
  console.log('URL: https://theroberthu.com/blog/' + post.slug)
}

insertPost()
