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

const DESCRIPTION = 'Shopify says direct checkout in Google AI Mode and Gemini is active by default for eligible stores. Agent distribution is becoming a setting, not a project.'

const EXT = 'target="_blank" rel="noopener noreferrer"'

const post = {
  slug: 'agentic-commerce-platform-default-shopify-google',
  // Editorial H1 (renders on page, and as JSON-LD headline)
  title: 'Agentic Commerce Is Becoming a Platform Default',
  // Query-aligned search title (drives <title>, OG and Twitter). Deliberate split.
  meta_title: 'Shopify Google AI Mode Direct Checkout Is On by Default',
  excerpt: "Shopify's documentation says direct checkout in Google AI Mode and Gemini is active by default for eligible stores, and its managed setting enrolls stores in agentic channels that do not exist yet. Agent distribution is becoming a governance decision rather than an integration project.",
  meta_description: DESCRIPTION,
  og_image: '/images/blog/agentic-commerce-platform-default-shopify-google.svg',
  category: 'Digital Transformation',
  tags: ['agentic commerce', 'Shopify', 'Google AI Mode', 'Gemini', 'UCP', 'platform defaults', 'checkout'],
  status: 'published',
  featured: false,
  read_time_minutes: 6,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: false,
    related_posts: ['ai-checkout-interface-commerce-infrastructure', 'ai-visibility-permission-stack-cloudflare', 'amazon-joins-universal-commerce-protocol'],
    featured_image_alt: 'A merchant admin toggle shown already switched on, with new AI shopping channels queued behind it waiting to be enrolled automatically',
  },
  published_at: new Date().toISOString(),
  content: `<p>The interesting word in Shopify's documentation is not checkout. It is default.</p>

<p>For two years, selling inside an AI assistant was a project. A merchant had to hear about a protocol, decide it mattered, win engineering time, build and launch. <a href="https://help.shopify.com/en/manual/online-sales-channels/agentic-storefronts/google" ${EXT}>Shopify's Help Center describes something else</a>. Agentic storefronts, it says, is active by default for eligible stores, and so is purchasing in direct checkout on the Google AI Mode and Gemini channel.</p>

<h2>What the documentation says</h2>

<p>Google AI Mode and Gemini is rolling out to eligible stores through agentic storefronts, and direct checkout is rolling out to Google users and might not yet be available in a given store. When it is, customers complete purchases in a Shopify-powered direct checkout without leaving the conversation.</p>

<p>Eligibility is not trivial. The store must be based in the United States and sell to United States customers, hold a valid Google Merchant Center account meeting Google's requirements with products available there, carry products eligible for Shopify Catalog, agree to the Shopify Agentic Storefronts Supplemental Terms of Service, and have its policies completed.</p>

<p>The exit is one screen. Under Sales channels then Agentic, a merchant can deactivate direct checkout, and Shopify is explicit about the consequence: customers can still discover the products, but they are redirected to the online store to buy.</p>

<p>So the defensible sentence is narrow. For eligible stores, Shopify says direct checkout is active by default. Eligibility and rollout are real constraints, not fine print.</p>

<p>Two controls sit behind it. Catalog access decides whether a channel may show the products. Direct checkout decides whether the purchase may finish there. They move independently.</p>

<p>The setting above both is the one worth reading twice. Under <a href="https://help.shopify.com/en/manual/online-sales-channels/agentic-storefronts/agentic-home" ${EXT}>Allow Shopify to manage for me</a>, which Shopify documents as the default behavior, available channels stay active, direct checkout stays on where supported, and the store is automatically enrolled in new agentic storefront channels as they arrive. So the default is not really a decision about Google. It is a standing position on AI channels that do not exist yet.</p>

<h2>Why Google says select merchants and Shopify says default</h2>

<p><a href="https://support.google.com/merchants/answer/16837055" ${EXT}>Google's Merchant Center documentation</a> reads differently. Checkout powered by the <a href="/blog/amazon-joins-universal-commerce-protocol">Universal Commerce Protocol</a> is available for select merchants at this time, arrives in phases, and requires an interest form plus technical implementation. The merchant remains seller of record, Google Pay supplies saved payment and shipping details, and the transaction happens on Google's surface rather than the merchant's site.</p>

<p>These are not contradictory. <a href="https://support.google.com/merchants/answer/16992327" ${EXT}>Google's onboarding page</a> tells merchants working with a third-party platform to ask that platform about its protocol plans. <a href="https://www.shopify.com/news/ai-commerce-at-scale" ${EXT}>Shopify said in January</a> that UCP was co-developed with Google and would power a new integration letting its merchants sell directly in AI Mode and the Gemini app. <a href="https://www.seroundtable.com/google-native-checkout-emails-42140.html" ${EXT}>The emails Google sent Merchant Center users on September 22</a> described the feature as powered by UCP and pointed the opt-out back to the Shopify admin.</p>

<h2>The default is the distribution mechanism</h2>

<p>A merchant-specific integration requires awareness, prioritization, engineering, testing and launch. A platform-managed capability removes most of those steps for stores that already qualify.</p>

<p>That changes how fast a capability can spread. It does not change whether anyone uses it. <a href="/ai-commerce-2027">No platform publishes agent-initiated transaction volume</a>, and a default produces eligibility rather than demand. Google's view, that a familiar payment flow may reduce friction, is a rationale and not an outcome.</p>

<p>So the operator decision has changed shape. It is no longer whether to build each agent integration. It is how much of that activation a merchant wants the platform carrying out on its behalf, and how often it intends to check. That is an operating-model question rather than a legal one. The merchant agreed to the terms, holds the controls and can switch any of it off. What moved is the burden: activation used to require a decision, and now review does.</p>

<p>That burden has no obvious owner. An integration project used to force a meeting, because engineering time had to come from somewhere, and ecommerce, merchandising, analytics, loyalty, privacy and payments all arrived with the plan. A channel that activates itself raises the same questions with nobody convening them. Technical friction was doing governance work that nobody will miss until it is gone.</p>

<h2>Discoverable, transactable, measurable</h2>

<p>This framework is mine, not Shopify's or Google's. It separates three permissions operators treat as one.</p>

<p>Discovery asks whether the surface may show the product. Transaction asks whether the shopper may finish buying there. Operations and measurement ask which merchant capabilities keep working once the purchase happens somewhere else.</p>

<p>The first two are the settings above. The third is not a setting. It is the consequence of the first two, and nobody configures it.</p>

<p>I argued when <a href="/blog/ai-visibility-permission-stack-cloudflare">Cloudflare split crawler controls</a> that access was becoming a stack of separate permissions rather than one switch. Commerce is the next floor. The crawler question was whether software may read this. The commerce question is whether software may sell this, and whether the sale may finish outside the storefront.</p>

<h2>What actually changes at checkout</h2>

<p>Shopify documents the tradeoffs plainly. Google Analytics and custom pixels do not fire in direct checkout, which fires only server-to-server pixels for started and completed. Checkout blocks that change what is being purchased, loyalty and rewards experiences, consent collection blocks and informational blocks may not display. Subscriptions, bundles, customizable products and business-only products are unsupported, as are local delivery, store pickup and pickup points. A merchant cannot require sign-in before checkout.</p>

<p>Read those as implementation differences rather than defects. Shopify Functions for shipping, discounts and validation still run, automatic discounts and codes still apply, and orders arrive in the admin with channel attribution.</p>

<p>The measurement consequence is the one I would brief an executive on. Removing friction from checkout also removes some of the instrumentation wrapped around it. What survives is real but differently shaped: server-side events, and Shopify's channel reporting for sales, orders, sessions and conversion, which aggregates referral and direct checkout orders. What does not survive is the client-side layer the team built itself, which is usually where marketing's version of the truth lives.</p>

<h2>The objections</h2>

<p>Several hold. The rollout is limited and United States only. Merchants agreed to supplemental terms, the opt-out is one screen, and <a href="/blog/ai-checkout-interface-commerce-infrastructure">the merchant keeps the order</a>, the money and the seller-of-record obligation. For a simple catalog, less friction may be worth more than a customization nobody clicked.</p>

<p>Defaults are also ordinary in commerce software, and Shopify's own Agentic plan ships with direct checkout deactivated, which shows the company treats the right default as context-specific.</p>

<p>The honest limit is that none of this is adoption evidence. A default tells you a capability is available in more places this week than last. It tells you nothing about volume, conversion, basket size or repeat purchase.</p>

<p>Which of these decisions is your organization prepared to make deliberately, before the next channel arrives with the setting already on?</p>
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
