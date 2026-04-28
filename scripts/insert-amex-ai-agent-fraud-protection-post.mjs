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
  slug: 'amex-ai-agent-purchase-protection',
  title: "American Express Just Launched Fraud Protection for AI Agent Purchases. Here's the Signal Marketplace Sellers Shouldn't Miss.",
  excerpt: "Amex rolled out agent identity verification and protection against AI shopping errors. When a major financial institution insures agentic commerce, the category stops being experimental. Here's what marketplace sellers should do about it.",
  meta_title: "Amex AI Agent Purchase Protection: What Sellers Should Do",
  meta_description: "Amex now insures AI agent purchases and verifies agent identity. Trust is the last barrier to mass agentic commerce. Best AI shopping strategy for marketplace sellers.",
  og_image: '/images/blog/amex-ai-agent-purchase-protection.svg',
  category: 'E-commerce Strategy',
  tags: ['amex ai agent purchases', 'agentic commerce protection', 'best ai shopping strategy 2026', 'amazon walmart ai trust'],
  status: 'published',
  featured: false,
  read_time_minutes: 4,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: true,
    faq_data: [
      {
        q: 'What did American Express announce for AI agent purchases?',
        a: "Amex rolled out new services for cardholders making purchases through AI agents. The package includes identity verification of the AI agent itself, fraud protection on agent-initiated transactions, and consumer protection against charges from AI agent errors. It applies to purchases made through agents like ChatGPT Operator, Perplexity Comet, and other agentic shopping tools that can complete transactions on a user's behalf."
      },
      {
        q: 'Why does Amex insuring AI agent purchases matter for sellers?',
        a: "Trust is the last barrier to mass adoption of AI shopping. When shoppers know their card issuer will refund errors made by an AI agent, they will let those agents handle more of their purchases. More agent-driven volume means more weight on the brands AI can confidently recommend, which means more weight on listings with clean, structured product data. Financial infrastructure is a leading indicator that the category is becoming mainstream."
      },
      {
        q: 'How does this connect to GEO and listing optimization?',
        a: "Amex is removing friction from the consumer side of agentic commerce. Sellers need to remove friction from the AI side. AI agents recommend products they can match with confidence to the shopper's stated need. Listings that clearly answer who the product is for, when to use it, where it works best, and why it solves a problem get recommended. Vague listings get filtered out before the consumer even sees them."
      },
      {
        q: 'What should marketplace sellers do this quarter?',
        a: "Audit your top 10 SKUs against the WHO, WHEN, WHERE, WHY framework. Complete every backend attribute field. Rewrite bullets as answers to specific shopper questions. Add use-case context to A+ content. Make sure your product data is consistent across Amazon, Walmart, and your DTC site. The brands with cleaner data will capture a disproportionate share of agentic commerce growth as consumer trust expands."
      }
    ],
    related_services: ['product-listing-optimization'],
    related_posts: ['amazon-joins-universal-commerce-protocol', 'adobe-ai-traffic-393-percent-retail', 'ai-shopping-spending-macys-walmart-amazon'],
    featured_image_alt: "American Express launches AI agent purchase protection and identity verification for agentic commerce in 2026"
  },
  published_at: '2026-04-29T12:00:00.000Z',
  content: `<p>American Express announced this week that it's rolling out new services for cardholders making purchases through AI agents. The package includes <strong>identity verification of the agent itself</strong> and consumer <strong>protection against charges from AI agent errors</strong>.</p>

<p>This isn't a feature announcement. It's infrastructure. When a major financial institution starts building consumer protections specifically for agentic commerce, the category is no longer experimental. It's becoming a regulated, insured, mainstream payment flow.</p>

<div class="callout-box">
  <p class="callout-label">Key Takeaways</p>
  <ul>
    <li><strong>Agent identity verification</strong> is now part of Amex's standard fraud framework. The card issuer is treating AI agents as actors in the payment flow, not anomalies to flag.</li>
    <li><strong>Error protection</strong> means cardholders can dispute charges from AI agent mistakes. This is the consumer trust unlock that drives mass adoption.</li>
    <li><strong>Financial infrastructure is a leading indicator.</strong> When card networks insure a category, the volume scales fast.</li>
    <li><strong>Cleaner listings will capture disproportionate AI recommendation volume</strong> as consumer trust in agentic commerce expands through 2026 and 2027.</li>
  </ul>
</div>

<h2>What Did Amex Actually Announce?</h2>

<p>Two pieces of infrastructure. Both meaningful.</p>

<p><strong>Agent identity verification.</strong> When an AI agent attempts a purchase on behalf of an Amex cardholder, the card network now verifies the identity of the agent itself. Is this Operator? Is this Comet? Is this an unknown bot impersonating a known agent? The verification step prevents bad actors from using fake AI agent credentials to authorize unauthorized charges.</p>

<p><strong>Protection against AI agent errors.</strong> If an AI agent buys the wrong product, the wrong size, the wrong quantity, or completes a transaction the user didn't authorize, the cardholder can dispute the charge. Amex stands behind those disputes the same way they stand behind a stolen card or a billing dispute today.</p>

<p>The consumer-facing message is simple: shop with AI, we've got your back. The structural message to the industry is louder: this category is now insured.</p>

<h2>Why Does This Matter More Than It Looks?</h2>

<p>Trust is the last barrier to mass adoption of AI shopping. <a href="/blog/adobe-ai-traffic-393-percent-retail">Adobe's Q1 data showed AI retail traffic up 393%</a> with conversion rates 42% higher than traditional channels. The shoppers who already use AI to buy are converting well. But there's a much larger group sitting on the sidelines, willing to research with AI but unwilling to let an AI complete the transaction.</p>

<p>Why? Two reasons. First, they don't know what happens if the AI screws up. Second, they don't know who's responsible if a fraudulent agent makes a charge in their name. Amex just answered both questions. The card issuer takes the risk. The consumer is protected.</p>

<p>Robert Hu has been tracking the same pattern across e-commerce categories for two decades. When financial infrastructure shifts to support a new behavior, the behavior accelerates. When credit card chargebacks were extended to online shopping in the late 1990s, internet purchases tripled in two years. When mobile wallets got fraud protection parity with physical cards in 2014, mobile commerce grew 35% the next year. Agentic commerce is sitting at the same inflection point.</p>

<h2>What Does the Trust Thesis Mean for Sellers?</h2>

<p>More agent-driven shopping volume. Full stop.</p>

<p>The shoppers who currently use Rufus or Sparky for research only will start letting those agents complete purchases when they trust the safety net. The shoppers who haven't tried agentic commerce at all will start when their card issuer markets the protection in monthly statements and onboarding flows. The shoppers using ChatGPT to ask "what should I buy" will be one click closer to letting ChatGPT actually buy it.</p>

<p>That growth flows disproportionately to the brands AI can confidently recommend. AI assistants don't randomly select products. They evaluate listing data, reviews, fulfillment signals, and brand entity clarity. The brands with the cleanest, most structured product data get the recommendations. Everyone else gets filtered out before the consumer ever sees the result.</p>

<p>Amex just made it safer for consumers to shop through AI agents. <a href="/blog/amazon-joins-universal-commerce-protocol">Amazon, Meta, Microsoft, and Stripe just joined the UCP Tech Council</a> to standardize how those agents talk to retailers. The infrastructure is being built. The brands that haven't optimized their listings for AI discovery are watching the train leave the station.</p>

<h2>The Seller Checklist: Data Quality as the New Conversion Lever</h2>

<p>If you sell on Amazon, Walmart, or your own DTC site, here's what matters this week:</p>

<p><strong>1. Audit your top 10 listings against the WHO, WHEN, WHERE, WHY framework.</strong> For each listing, ask: can an AI agent find clear answers to who the product is for, when to use it, where it works best, and why it solves the shopper's stated problem? Any gap is a fix that will compound as AI volume grows.</p>

<p><strong>2. Complete every backend attribute field.</strong> Material, size, age range, dietary attributes, compatibility, certifications. AI agents filter on structured data. Empty fields mean missed matches.</p>

<p><strong>3. Rewrite vague bullets as answers to real shopper questions.</strong> "Is this safe for sensitive skin?" should be answered in a bullet, not buried in your Q&A section. AI assistants pull bullets directly into recommendations.</p>

<p><strong>4. Check cross-platform consistency.</strong> If your Amazon listing says one thing and your DTC site says another, AI agents cross-reference and deprioritize you. Make sure descriptions, attributes, and positioning align across every channel where you sell.</p>

<p><strong>5. Add use-case context to A+ content.</strong> Generic lifestyle imagery without text gives AI agents nothing to work with. Specific scenarios like "apply after your morning workout to reduce soreness" give agents a clear use-case anchor for matching.</p>

<p>This is the same <a href="/services/product-listing-optimization">listing optimization discipline</a> that's been driving AI recommendations for the past year. Amex announcing fraud protection doesn't change the work. It changes the upside. Every listing optimization you make today compounds across a faster-growing volume of agent-driven traffic.</p>

<h2>The Bigger Picture</h2>

<p>The pattern is unmistakable. Card networks are insuring AI purchases. Major retailers are joining the open commerce protocol. <a href="/blog/ai-shopping-spending-macys-walmart-amazon">Macy's reports AI users spend 4.75x more</a>. The infrastructure for mainstream agentic commerce is being built in public, one announcement at a time.</p>

<p>The brands that act on this now will have 6 to 12 months of optimization data when AI volume hits its next inflection. The ones that wait until AI agents are obviously the largest channel will be doing emergency listing rewrites while their competitors compound visibility.</p>

<p>If you want help auditing your listings for AI-driven discovery before consumer trust hits its next jump, <a href="/free-strategy-session">book a free strategy session</a> and we'll walk through your top SKUs together.</p>`
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
