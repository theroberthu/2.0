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

const DESCRIPTION = "Shopify extended WebMCP into checkout, so a browser agent can operate the shopper's live Shopify session. One commerce state, two interfaces, human approval intact."

const EXT = 'target="_blank" rel="noopener noreferrer"'

const post = {
  slug: 'shopify-webmcp-checkout-ai-agent-storefront',
  // Editorial H1 (renders on page, and as JSON-LD headline)
  title: 'Shopify Just Gave the Storefront a Second Front Door for AI Agents',
  // Query-aligned search title (drives <title>, OG and Twitter). Deliberate split.
  meta_title: 'Shopify Gives AI Agents a Second Storefront Interface',
  excerpt: "Shopify extended WebMCP into checkout on September 28, so a browser agent can read and update an eligible checkout and submit the order after the buyer confirms it. The tools use the same state as the checkout UI, which makes this one commerce session with two interfaces rather than a separate storefront for machines.",
  meta_description: DESCRIPTION,
  og_image: '/images/blog/shopify-webmcp-checkout-ai-agent-storefront.svg',
  category: 'E-commerce Strategy',
  tags: ['Shopify', 'WebMCP', 'agentic commerce', 'browser agents', 'checkout', 'UCP'],
  status: 'published',
  featured: false,
  read_time_minutes: 6,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: false,
    related_posts: ['agentic-commerce-platform-default-shopify-google', 'helium-10-mcp-ecommerce-software-infrastructure', 'ai-checkout-interface-commerce-infrastructure'],
    featured_image_alt: 'A single storefront session with two ways in, a visual interface for the shopper and callable tools for the shopper agent, both acting on the same cart and checkout',
  },
  published_at: new Date().toISOString(),
  content: `<p>Shopify shipped two things four days apart that point in opposite directions.</p>

<p>On September 24 the story was that <a href="/blog/agentic-commerce-platform-default-shopify-google">direct checkout inside Google AI Mode and Gemini is on by default</a> for eligible stores, which moves the purchase onto somebody else's surface. On September 28 the company <a href="https://shopify.dev/changelog/posts/webmcp-support-for-checkout" ${EXT}>extended WebMCP into Shopify checkout</a>, which lets an agent operate the merchant's own storefront.</p>

<p>One makes the merchant transactable somewhere else. The other makes the merchant's own storefront operable by software.</p>

<h2>What shipped</h2>

<p>The changelog is short. Browser agents can read and update Shopify checkouts using WebMCP tools, which act on the active checkout in the buyer's browser session. Four calls: <code>navigate_to_storefront</code>, <code>get_checkout</code>, <code>update_checkout</code>, and <code>complete_checkout</code>, which submits the order after buyer confirmation. When the buyer's input is required, for 3D Secure authentication or a blocking UI extension, the tools hand control back to the buyer.</p>

<p>Two sentences in that changelog matter more than the tool list. The tools "run inside checkout-web and use the same state as the checkout UI." And they "don't expose a new API or require merchant configuration."</p>

<p>This is an extension rather than a beginning. <a href="https://shopify.dev/changelog/posts/webmcp-liquid-hydrogen" ${EXT}>On August 5 Shopify made WebMCP tools live</a> "on every Liquid storefront and on the Hydrogen developer preview," with "nothing to install or configure," covering catalog search, product and variant display, cart updates, store policies and <code>proceed_to_checkout</code>. What September 28 adds is the end of the journey: discovery and cart become discovery, cart, checkout and order confirmation.</p>

<p>I should flag a gap in my own work here. When I published <a href="/ai-commerce-2027">AI Commerce 2027</a> on September 21, I described WebMCP as a draft standard with an early Chrome implementation behind a flag. Shopify had already shipped it across Liquid storefronts six weeks earlier, and I missed it.</p>

<h2>Two interfaces, one commerce state</h2>

<p>The architecture is the story, and the August changelog describes it more vividly than the September one. Everything an agent does "happens on the shopper's live session," and the cart tools call the same storefront actions that apps use, so if a theme opens a cart drawer when the cart updates, the agent's call opens it too.</p>

<p>That is not a parallel storefront for machines. It is one commerce session with two ways in. The shopper sees the drawer slide open. The agent called a function. Same cart, same totals, same validation.</p>

<p>Checkout works the same way. The <a href="https://shopify.dev/docs/agents/carts-and-checkout/checkout-webmcp" ${EXT}>documentation</a> says the buyer "sees the same checkout state, handles page interactions such as Shop Pay login or payment challenges, and confirms the order" before the agent completes it.</p>

<p>One boundary inside that design is worth noticing. At checkout the agent can replace contact details, fulfillment, discount codes and payment selection, but <code>update_checkout</code> ignores line items, because "the buyer changes items on the page." The agent can arrange the purchase. Changing what is being bought stays with the person. For a Shop Pay buyer, the agent can read the saved cards available and select among them. It never touches credentials.</p>

<p>Worth keeping the acronyms straight, briefly. Checkout WebMCP implements the UCP checkout capability over browser-registered tools instead of a server-side call. WebMCP is where the tools live, UCP is what the transaction is. The same docs tell you to use Checkout MCP instead if your agent runs on a server.</p>

<h2>The buyer still has to say yes</h2>

<p>Shopify is unusually direct about this, and the wording deserves quoting because it settles a question the industry keeps fudging.</p>

<p>"Before you call <code>complete_checkout</code>, show the buyer the current order and total, and get their permission to place it. WBA and <code>ready_for_complete</code> don't grant it. If the total changes, then ask again."</p>

<p>WBA is Web Bot Auth, the signature Shopify uses to identify a registered agent. Shopify is saying that proving which agent you are is not the same as proving the human agreed. A verified identity and a technically completable checkout are both insufficient. Only <code>status: completed</code> confirms an order.</p>

<p>So this is agent execution with transaction approval, not autonomous spending. The agent prepares and submits. The human authenticates when challenged and authorizes the purchase.</p>

<h2>The website is not disappearing. It is gaining a participant.</h2>

<p>I have written repeatedly about shopping leaving merchant websites, and this is the useful counterweight.</p>

<p>Both things are now true at once. A purchase can complete inside Google's surface with Shopify underneath and the merchant never rendering a page. Or an agent can arrive at the merchant's storefront and operate it through declared tools while the shopper watches. These are not competing predictions. They are two paths into the same commerce system, and a merchant may end up served by both without building either.</p>

<h2>What constrains all of it</h2>

<p>Agent support for WebMCP remains limited to Chromium-based browsers, which Shopify's August changelog described as an origin trial. Merchant-side availability and the existence of consumer agents that can use it are different facts.</p>

<p>The exclusions are substantial. Checkout registers no tools for the standard three-page checkout unless the buyer uses Shop Pay, for B2B checkout, for embedded checkout or mobile checkout SDKs, for carts containing merchandise from another shop, or for draft orders, order edits and payment collection. App-defined checkout extension interactions stay with the buyer. There is no cancel equivalent, so an agent cannot cancel a checkout it started, and the status never reads as canceled.</p>

<p>No WebMCP order volume, conversion rate or error rate has been published, by Shopify or anyone else I could find. This is capability evidence, not adoption evidence, and the distinction is the same one I keep applying to everything else in this category.</p>

<p>I also found no documented merchant configuration requirement or opt-out in the materials I reviewed. That is an absence in the documentation, not a finding that none exists.</p>

<h2>What it asks of an operator</h2>

<p>Three things follow, and none of them is a project.</p>

<p>Agent readiness arrived through the platform rather than through an integration, which means a merchant may already have an agent interface without a decision having been made.</p>

<p>A price, a shipping rule, a discount or an availability answer now has two readers, and the shared-state design is what keeps them honest. That is an argument for fewer bespoke front-end hacks, not more.</p>

<p>And measurement will eventually have to separate human-operated sessions from agent-operated ones, because the same checkout can now be completed either way. A conversion rate built on a session count stops meaning one thing when some of those sessions are software working on a shopper's behalf, and nobody has published what that mix looks like yet.</p>

<p>If your storefront already answers questions for software you have never met, who in your company owns what it says?</p>
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
