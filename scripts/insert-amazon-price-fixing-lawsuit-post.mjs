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
  slug: 'amazon-price-fixing-lawsuit-dual-channel-sellers',
  title: "Amazon Is Accused of Coercing Brands Into Price-Fixing. Here's What It Means for Dual-Channel Sellers.",
  excerpt: "Unsealed court documents allege Amazon coerced Levi Strauss and others into pricing arrangements that raised prices on Walmart, Target, Home Depot, and Chewy. Here's what dual-channel sellers should do now.",
  meta_title: "Amazon Price-Fixing Lawsuit 2026: Dual-Channel Seller Guide",
  meta_description: "Court filings allege Amazon coerced brands into pricing that inflated costs on Walmart, Target, Home Depot, and Chewy. Best pricing strategy for dual-channel sellers.",
  og_image: '/images/blog/amazon-price-fixing-lawsuit-dual-channel-sellers.svg',
  category: 'E-commerce Strategy',
  tags: ['amazon price fixing lawsuit 2026', 'amazon walmart pricing parity', 'amazon antitrust sellers', 'best pricing strategy marketplace sellers'],
  status: 'published',
  featured: false,
  read_time_minutes: 4,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: true,
    faq_data: [
      {
        q: 'What does the Amazon price-fixing lawsuit allege?',
        a: "Court documents unsealed this week in California's antitrust lawsuit allege Amazon coerced Levi Strauss and other brands into pricing arrangements that influenced what those same products cost on Walmart, Target, Home Depot, and Chewy. The filing claims Amazon artificially inflated prices to protect its own margins, forcing brands to match Amazon prices across every marketplace where they sell."
      },
      {
        q: 'How does Amazon enforce pricing parity today?',
        a: "Amazon uses automated pricing bots to monitor a product's prices on competing sites. When those prices fall below the Amazon listing, Amazon can suppress the Buy Box, remove featured merchant status, or deprioritize the listing in search results. For most sellers, losing the Buy Box is a revenue crisis, which creates strong pressure to keep prices aligned or raise them on other channels."
      },
      {
        q: 'What should dual-channel sellers do about Amazon pricing parity?',
        a: "Document every pricing decision you make in writing, especially when you adjust a price on Walmart or your DTC site in response to Amazon pressure. Understand exactly what triggers Buy Box suppression on your listings. Build scenarios for pricing flexibility if the Amazon parity pressure eases. The lawsuit could change the rules, and sellers who understand their own pricing levers will adapt faster than sellers who have been on autopilot."
      },
      {
        q: 'When will the Amazon price-fixing case be decided?',
        a: "Trial is currently set for January 2027, so the legal resolution will play out slowly. Appeals could extend the timeline further. But the discovery process is already producing unsealed documents that shift the industry conversation, and regulatory pressure on Amazon's pricing practices is building independently of the trial outcome."
      }
    ],
    related_services: ['ecommerce-strategy'],
    related_posts: ['amazon-walmart-divergent-strategies-2026', 'amazon-ai-walled-garden'],
    featured_image_alt: "Amazon price-fixing antitrust lawsuit alleging pricing coercion that affects Walmart, Target, Home Depot, and Chewy for dual-channel sellers"
  },
  published_at: '2026-04-22T12:00:00.000Z',
  content: `<p>Court documents unsealed this week in California's antitrust lawsuit against Amazon allege something dual-channel sellers have suspected for years. The state claims Amazon coerced Levi Strauss and other brands into pricing arrangements that influenced what those same products cost on <strong>Walmart, Target, Home Depot, and Chewy</strong>.</p>

<p>If the allegations hold, this is a big deal. The filing says Amazon artificially inflated product prices to protect its own margins, forcing brands to match Amazon prices across every other marketplace they sell on. For brands doing $100K to $2M, it confirms what you probably already knew: your pricing on Walmart and your DTC site isn't fully in your control if Amazon is watching.</p>

<div class="callout-box">
  <p class="callout-label">Key Takeaways</p>
  <ul>
    <li><strong>4+ marketplaces named</strong> in the unsealed filing: Walmart, Target, Home Depot, and Chewy. Amazon is accused of pushing brands to raise prices across all of them to maintain Amazon parity.</li>
    <li><strong>Trial set for January 2027,</strong> with appeals likely extending the timeline. The legal resolution is slow, but the discovery documents are already reshaping how sellers think about parity.</li>
    <li><strong>Buy Box suppression is the enforcement mechanism.</strong> Amazon's pricing bots monitor competitor sites and punish sellers whose prices fall below Amazon's listing.</li>
    <li><strong>Document everything now.</strong> If you've ever raised a price on Walmart or your DTC site to avoid Amazon penalties, put that in writing. It may matter later.</li>
  </ul>
</div>

<h2>What Did the Unsealed Filing Actually Claim?</h2>

<p>The California Attorney General's office unsealed portions of its amended complaint this week. The key allegation: Amazon used its market power to pressure Levi Strauss and other major brands into pricing arrangements that extended beyond Amazon.com.</p>

<p>Specifically, the filing alleges Amazon demanded brands either raise prices on competing marketplaces like Walmart, Target, Home Depot, and Chewy to match Amazon's listing, or face consequences on Amazon itself. Those consequences include Buy Box loss, listing suppression, and removal from featured merchant programs.</p>

<p>Amazon's public position has always been that it simply matches competitor prices and doesn't dictate what brands charge elsewhere. The unsealed documents appear to contradict that framing. The trial is scheduled for January 2027.</p>

<h2>What Does Pricing Parity Enforcement Look Like Today?</h2>

<p>Every active Amazon seller has felt this already. Amazon's pricing algorithms continuously scan competitor sites. When your product's price on Walmart or your Shopify store drops below Amazon's listing, one or more things happen automatically:</p>

<ul>
<li><strong>Buy Box suppression.</strong> Your listing stops winning the Buy Box. Conversion craters overnight.</li>
<li><strong>Featured merchant removal.</strong> You lose badges and placement that signal trust to shoppers.</li>
<li><strong>Search deprioritization.</strong> Your listing drops in organic search results, sometimes onto page two or three.</li>
<li><strong>Pricing notifications.</strong> Amazon sends you an automated message calling out the "uncompetitive pricing" and asking you to adjust.</li>
</ul>

<p>For most sellers, losing the Buy Box on a top SKU is a revenue crisis. The pressure to keep prices aligned across channels is real, and it shows up in the account dashboard within hours of any off-Amazon price cut. That's the enforcement mechanism the lawsuit argues crosses antitrust lines.</p>

<h2>What Should Dual-Channel Sellers Do Right Now?</h2>

<p>The legal outcome is a 2027 problem. The pricing implications are a this-week problem. Here's what matters for your operations:</p>

<p><strong>1. Document your pricing decisions in writing.</strong> Every time you adjust a price on Walmart or your DTC site because of Amazon parity pressure, keep a record. Date, channel, old price, new price, and the specific Amazon trigger (Buy Box loss, suppression notice, automated email). This paper trail protects you if the legal landscape shifts, and it helps you analyze your own pricing history.</p>

<p><strong>2. Understand your Buy Box triggers by SKU.</strong> Not every price drop triggers suppression. The thresholds are fuzzy and vary by category. Run your own tests with small price differentials on a few SKUs and track the Amazon response. The sellers who understand their own parity tolerance can operate with flexibility inside it. The sellers who assume any price drop breaks everything are leaving margin on the table.</p>

<p><strong>3. Build scenarios for pricing flexibility.</strong> If the court rules against Amazon and parity enforcement becomes riskier for them to pursue, the brands that have pre-built pricing strategies for each channel will execute fastest. Robert Hu has been telling <a href="/services/ecommerce-strategy">the brands he works with</a> to model what Walmart and DTC pricing would look like if Amazon parity pressure eased by 20 to 30 percent. It's not a strategy you execute today, but it's a plan ready to ship.</p>

<p><strong>4. Know your dual-channel margin math.</strong> Walmart and Amazon have <a href="/blog/amazon-walmart-divergent-strategies-2026">different fee structures and different operational requirements</a>. The price parity pressure from Amazon has been papering over the fact that most sellers haven't run the actual per-unit economics on each channel. If pricing becomes more flexible, the brands that have already done the math will win.</p>

<h2>What Could Change If the Court Rules Against Amazon?</h2>

<p>If the court finds Amazon's parity enforcement violates antitrust law, the immediate effect is regulatory. Amazon could be ordered to modify its Buy Box algorithms, remove the automated pricing pressure, or allow sellers to price below Amazon on competing marketplaces without punishment on Amazon.</p>

<p>For dual-channel sellers, the practical effect could be meaningful. You might regain the ability to run lower prices on Walmart to capture share during growth periods, or run DTC pricing that accounts for your actual margin structure without fear of losing the Amazon Buy Box. That's a strategic flexibility many sellers haven't had for the past several years.</p>

<p>The outcome is uncertain. Trial is nine months away, appeals could extend timelines significantly, and Amazon may settle before a binding ruling. But the discovery documents are already moving the conversation. Regulatory pressure on Amazon's pricing practices is building independently of this specific case, and the sellers who understand their own pricing levers will be in a better position regardless of how it resolves.</p>

<p>If you want help auditing your dual-channel pricing strategy and mapping what flexibility could look like if Amazon's parity pressure eases, <a href="/free-strategy-session">book a free strategy session</a> and we'll walk through your numbers together.</p>`
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
