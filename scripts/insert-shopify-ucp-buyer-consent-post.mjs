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

const DESCRIPTION = "Shopify's Checkout MCP and Cart MCP can now carry UCP buyer consent, so email, SMS and privacy choices made in an AI agent can reach the merchant."

const EXT = 'target="_blank" rel="noopener noreferrer"'

const post = {
  slug: 'shopify-ucp-buyer-consent-agentic-checkout',
  // Editorial H1 (renders on page, and as JSON-LD headline)
  title: 'Shopify Agent Checkout Can Now Carry Customer Consent',
  // Query-aligned search title (drives <title>, OG and Twitter). Deliberate split.
  meta_title: 'Shopify UCP Buyer Consent: Marketing Opt-Ins in AI Checkout',
  excerpt: "On October 16, Shopify added UCP buyer consent to Checkout MCP and Cart MCP. For agents that negotiate UCP 2026-08-25 buyer consent, a shopper's analytics, preferences, sale-or-sharing and email or SMS marketing choices can travel with the cart and checkout back to the merchant. Agent authorization, permission to place the order and buyer consent are three separate controls.",
  meta_description: DESCRIPTION,
  og_image: '/images/blog/shopify-ucp-buyer-consent-agentic-checkout.svg',
  category: 'E-commerce Strategy',
  tags: ['Shopify', 'Universal Commerce Protocol', 'buyer consent', 'agentic checkout', 'privacy', 'marketing consent'],
  status: 'published',
  featured: false,
  read_time_minutes: 5,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: false,
    related_posts: ['personal-agent-protocol-ai-commerce', 'shopify-webmcp-checkout-ai-agent-storefront', 'ai-checkout-interface-commerce-infrastructure'],
    featured_image_alt: 'A shopper consent record traveling with an AI agent checkout back to the merchant',
  },
  published_at: new Date().toISOString(),
  content: `<p>On October 16, Shopify said its Checkout MCP and Cart MCP now support the UCP buyer consent extension. In plain terms, when a shopper buys from a Shopify store through an AI agent, the privacy and marketing choices they would make in the store's own checkout, such as opting in to email or SMS, can now travel with the purchase back to the merchant.</p>

<p>That sounds like a compliance footnote. It is closer to a missing piece of agentic checkout. A merchant that loses the checkout page still keeps the order, the payment and the fulfillment obligation. Without commerce-platform support for that consent exchange, the permission collected during checkout could fall out of the agentic transaction. Shopify has now added the mechanism, but only for agents that negotiate and use it. When checkout becomes portable, customer permission has to become portable too.</p>

<h2>What Shopify shipped</h2>

<p>According to <a href="https://shopify.dev/changelog/posts/checkout-mcp-and-cart-mcp-now-support-ucp-buyer-consent" ${EXT}>Shopify's developer changelog</a>:</p>

<ul>
<li><strong>Version.</strong> Support starts with UCP version 2026-08-25, for agents that negotiate the buyer consent extension in their profile. Agents that do not declare it, or that use an earlier UCP version, are unaffected.</li>
<li><strong>Discovery.</strong> Shopify storefronts now list the extension in their UCP discovery profiles, covering both cart and checkout.</li>
<li><strong>Purposes.</strong> Shopify storefronts advertise at least four consent purposes: analytics, preferences, sale or sharing of personal data, and marketing, with separate email and SMS choices under marketing. Each arrives with its current state, a description and links to the shop's policies.</li>
<li><strong>Delivery.</strong> The agent sends the buyer's choices when it creates, updates or completes a cart or checkout, and Shopify says shops receive them with the cart, checkout and order.</li>
</ul>

<h2>What happens when the agent says nothing</h2>

<p>The defaults carry the operational detail. If an agent does not send consent, Shopify applies the shop's default settings for the buyer's country. If the buyer's country is unknown, consent defaults to opt-out.</p>

<p>One case can stop a purchase. If a buyer opts in to SMS marketing but the checkout has no phone number, Shopify returns a <code>missing_consent_data</code> warning, and the checkout cannot complete until the agent collects the missing detail. The UCP specification states the general rule: a business should warn about missing data on create and update calls, and must not complete a checkout while a confirmed consent choice lacks the data it depends on.</p>

<h2>How the specification works</h2>

<p><a href="https://ucp.dev/specification/shopping/extensions/buyer-consent/" ${EXT}>The UCP buyer consent specification</a> models consent in two levels. A purpose, such as marketing, carries a yes or no. A segment, such as SMS under marketing, can override its parent, so a buyer can decline marketing in general and still accept text messages.</p>

<p>Every value also records who set it. A source of "business" means the value is the merchant's default. A source of "platform" means the buyer actually made that choice in the agent's flow. The rules are strict. Agents decide which choices to show, but when they show one they must use the merchant's own description and policy links. They must not ask about purposes the merchant did not advertise, and they may mark a value as the buyer's choice only when the buyer stated it. A choice given to one merchant cannot be reused as the buyer's choice for another.</p>

<p>This is a real change from the earlier version. <a href="https://ucp.dev/2026-04-08/specification/buyer-consent/" ${EXT}>In UCP 2026-04-08</a>, consent was a set of yes-or-no flags an agent could send into checkout. <a href="https://github.com/Universal-Commerce-Protocol/ucp/releases/tag/v2026-08-25" ${EXT}>The 2026-08-25 release notes</a> describe restructuring it into a map that the business advertises and the agent confirms. The merchant now defines the choices, and the record shows who made each one.</p>

<h2>What the specification does not do</h2>

<p>The specification is explicit about its boundary. It defines how consent state is represented and exchanged. It does not dictate how either party behaves in response: how a merchant acts on consent and how an agent displays existing choices are governed by business policy and applicable regulation. Its purpose names are operational definitions, not legal categories.</p>

<p>Receiving a consent record does not by itself establish that a merchant may lawfully market to the buyer in every jurisdiction. What a recorded choice permits where your customers live is a question for counsel, not for the protocol.</p>

<h2>Three permissions, not one</h2>

<p>Agentic commerce is now building three separate controls, and they are easy to blur.</p>

<p><strong>Agent authorization</strong> asks what the agent may do for the customer. That is the territory of <a href="/blog/personal-agent-protocol-ai-commerce">Personal Agent Protocol</a>, where the customer grants access and the business sets parameters for what it will accept.</p>

<p><strong>Permission to place the order</strong> asks whether the buyer agreed to this purchase at this total. <a href="https://shopify.dev/docs/agents/carts-and-checkout/checkout-mcp" ${EXT}>Shopify's checkout documentation</a> tells agents to get the buyer's approval before completing checkout, separately from proving which agent is calling, a line I looked at when <a href="/blog/shopify-webmcp-checkout-ai-agent-storefront">Shopify opened checkout to browser agents</a>.</p>

<p><strong>Buyer consent</strong> asks what the merchant may do with the shopper's data and communications afterward.</p>

<p>A shopper can authorize an agent, approve an order and still decline marketing. Each answer has to be captured separately, and none implies the others.</p>

<h2>Why this matters commercially</h2>

<p>When checkout leaves the merchant's site, the retailer keeps the order but loses the moment it used to collect permission: the email opt-in box, the SMS checkbox, the analytics and sale-of-data choices. I argued that checkout was where an anonymous buyer became a known, reachable customer, and that this is <a href="/blog/ai-checkout-interface-commerce-infrastructure">what the retailer risks when checkout disappears</a>. Without a transmitted consent state, an agentic order can deliver a customer the merchant cannot assume it may market to.</p>

<p>The gap shows up elsewhere. Google says merchants are Merchant of Record for checkout in its AI surfaces, but <a href="https://developers.google.com/merchant/ucp/faq" ${EXT}>its UCP FAQ</a> still lists an explicit marketing opt-in during checkout as a planned feature, as I noted in the <a href="/blog/google-universal-cart-retailers-ucp-checkout">Universal Cart guide</a>.</p>

<h2>What it does not show yet</h2>

<p>Support on Shopify's side is not adoption on the agent side. An agent has to declare the extension and present the choices, and I found no public announcement from an AI platform that it does. Agents that do not negotiate it are unaffected, so this does not mean every agent checkout now collects marketing consent. It also says nothing about how much agentic checkout is happening.</p>

<h2>What merchants should do</h2>

<ul>
<li>Review the consent defaults your store applies by country, because they now also govern agent checkouts that send no choices.</li>
<li>Read your consent descriptions and policy links out of context. When an agent shows them, it has to use them as written.</li>
<li>Check how consent captured through an agent appears in your customer records, and keep the difference between a default and a buyer's stated choice in your marketing rules.</li>
<li>Ask the AI platforms you sell through whether they negotiate the extension.</li>
</ul>

<p>If an agent brings you the order but not the permission, is that customer yours?</p>`,
}

const { data, error } = await supabase.from('blog_posts').insert(post).select('id, slug').single()
if (error) { console.error('Insert failed:', error); process.exit(1) }
console.log('Post inserted successfully:', data.id)
console.log('URL: https://theroberthu.com/blog/' + data.slug)
