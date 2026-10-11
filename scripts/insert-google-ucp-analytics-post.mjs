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

const DESCRIPTION = "Google's UCP Analytics shows merchants Buy clicks, purchases and cart transfers from AI Mode and Gemini. What it measures, who can see it, and what it still cannot show."

const EXT = 'target="_blank" rel="noopener noreferrer"'

const post = {
  slug: 'google-ucp-analytics-merchant-center-ai-checkout',
  // Editorial H1 (renders on page, and as JSON-LD headline)
  title: 'Google Merchant Center UCP Analytics: How AI Checkout Reporting Works',
  // Query-aligned search title (drives <title>, OG and Twitter). Deliberate split.
  meta_title: 'Google UCP Analytics: Merchant Center AI Checkout Reporting',
  excerpt: "Google's UCP Analytics dashboard in Merchant Center reports Buy clicks, purchases, purchase rate, order value, cancellations and cart transfers for UCP checkout in AI Mode and Gemini. Its funnel starts at the Buy button. It measures the transaction half of agentic commerce and almost nothing about the products the AI considered before that click.",
  meta_description: DESCRIPTION,
  og_image: '/images/blog/google-ucp-analytics-merchant-center-ai-checkout.svg',
  category: 'GEO & SEO',
  tags: ['Google Merchant Center', 'UCP', 'agentic commerce', 'AI checkout', 'measurement', 'Google AI Mode'],
  status: 'published',
  featured: false,
  read_time_minutes: 5,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: false,
    related_posts: ['niq-similarweb-agentic-commerce-measurement', 'google-search-console-generative-ai-visibility', 'agentic-commerce-platform-default-shopify-google'],
    featured_image_alt: 'A checkout funnel that begins at a Buy button click, with the AI consideration set before it left unmeasured',
  },
  published_at: new Date().toISOString(),
  content: `<p>Once a merchant turns on checkout through the Universal Commerce Protocol, a shopper can buy its products inside Google's AI surfaces without visiting the merchant's site. That raises a basic question most merchants could not answer until recently, which is what actually happened after the shopper decided to buy.</p>

<p>Google's answer is UCP Analytics, a reporting dashboard in Merchant Center with an experimental API behind it. Its funnel starts at Clicks to Buy, the moment a shopper presses the UCP Buy button. It does not start at an impression, a recommendation or the products the AI compared before that click. So it measures the transaction end of agentic shopping well, and almost nothing about what came before the Buy button.</p>

<h2>What UCP Analytics is and who can see it</h2>

<p><a href="https://developers.google.com/merchant/ucp/guides/tools/merchant-center/analytics" ${EXT}>Google's documentation describes</a> a "UCP Analytics Reporting dashboard in Google Merchant Center" that gives "a centralized view of your UCP checkout experiences." It lives under Settings, then UCP Integration, then an Analytics tab.</p>

<p>Google says "access to this report is available to all UCP-enabled merchants," and the user needs the Performance role in Merchant Center. That is not every Merchant Center account. It is merchants with a live UCP integration. If your UCP checkout runs through a platform such as Shopify, which <a href="/blog/agentic-commerce-platform-default-shopify-google">enables agentic checkout by default for eligible stores</a>, check your own Merchant Center settings: Google's documentation does not say whether platform-managed integrations see the same tab.</p>

<h2>The metrics</h2>

<p>The dashboard reports seven things:</p>

<p><strong>Clicks to Buy.</strong> How many times shoppers clicked the UCP Buy button.</p>

<p><strong>Purchases.</strong> Successful transactions completed through UCP.</p>

<p><strong>Purchase Rate.</strong> The share of Clicks to Buy that became a purchase.</p>

<p><strong>Average Order Value.</strong> The average value of a completed UCP order.</p>

<p><strong>Cancellations.</strong> Orders canceled or refunded after purchase.</p>

<p><strong>Account Linking.</strong> Attempts and success rates, where account linking applies.</p>

<p><strong>Top Selling UCP Products.</strong> A ranked list of the products selling most through UCP.</p>

<p>Google describes this as "full visibility into the UCP checkout funnel from initial click to completed purchase." That is accurate as far as it goes. The funnel starts at the Buy button.</p>

<h2>What the API adds, and its limits</h2>

<p><a href="https://developers.google.com/merchant/api/guides/reports/ucp-performance-reports" ${EXT}>The same data is available through the Merchant API</a>, in a reporting feature Google labels alpha: "experimental and is subject to change." It covers "Google surfaces, including AI Mode in Search and Gemini."</p>

<p>It offers two views. An account-level view reports the funnel, orders, cancellations and cart transfers, segmented by date and customer country. A product-level view reports Buy button clicks for each product, also by date and country.</p>

<p>Four limits are worth knowing before you build anything on it.</p>

<p><strong>No split by surface.</strong> The documented segments are date and country. AI Mode and Gemini are covered together.</p>

<p><strong>Product level means clicks.</strong> The product view reports Buy clicks per product, not purchases per product. The dashboard's top sellers list is the place to see product sales.</p>

<p><strong>One account at a time.</strong> Both views work only for standalone accounts and individual sub-accounts. Agencies running multi-client accounts have to query each sub-account separately.</p>

<p><strong>Alpha means it can change.</strong> Build reporting on it, but expect fields to move.</p>

<h2>A cart transfer is not a purchase</h2>

<p>Google lets shoppers transfer a UCP cart to the merchant's own site to finish checking out there. The reporting counts those transfers and their average cart value.</p>

<p>It does not tell you whether the transfer became an order. That step happens on your site, so your own analytics have to close the loop. A UCP report showing strong cart transfers and modest purchases might mean shoppers prefer your checkout, or it might mean they abandoned it. Only your site data can tell you which.</p>

<h2>Why this report exists at all</h2>

<p>Site analytics cannot see a checkout that does not happen on your site. <a href="https://help.shopify.com/en/manual/online-sales-channels/agentic-storefronts/meta" ${EXT}>Shopify's documentation says so directly</a> for direct checkouts on outside surfaces: third-party analytics pixels do not fire, and "this applies to any direct checkout that's completed outside your online store."</p>

<p>So without UCP Analytics, a merchant would see orders arriving with no record of the funnel that produced them. That is the gap this report fills.</p>

<p>It also sits beside, not inside, the reporting merchants already use. Merchant Center's existing performance reports describe how product listings are shown and clicked. Google Analytics describes sessions and conversions on your own site. UCP Analytics describes a checkout that happens on Google's surface. None of the three replaces the others, and only the last one sees an order that never touched your site.</p>

<h2>Two measurement problems, one partly solved</h2>

<p>In September I wrote that <a href="/blog/niq-similarweb-agentic-commerce-measurement">agentic commerce has a measurement problem</a>: an assistant can consider your product, recommend a competitor, and leave you no record that you were ever in the running.</p>

<p>That is really two problems. One is transaction measurement: what happens once a shopper chooses to buy. The other is consideration measurement: which products the AI looked at, compared and rejected before the shopper saw anything.</p>

<p>UCP Analytics addresses the first. It does not touch the second. There are no impressions, no prompts, no queries, and nothing about products that were considered and not chosen.</p>

<p>Google's other instrument covers a different slice. The <a href="/blog/google-search-console-generative-ai-visibility">Search Console generative AI report</a> shows impressions of your pages inside AI Overviews and AI Mode, but no queries and no clicks. UCP Analytics starts at the Buy click and has no impressions.</p>

<p>A merchant now has two partial views of the same journey from the same company, and nothing documented connects them.</p>

<p>There is one genuine step forward. In <a href="/ai-commerce-2027">AI Commerce 2027</a> I said the signal worth watching was any measurement product that reports a denominator. Purchase Rate has one: Clicks to Buy. That is a real denominator for the transaction funnel. It is still not a denominator for AI visibility, which is the harder number and the one the consideration problem needs. And because each merchant sees only its own data, it does not tell anyone how much agentic checkout is happening across the market.</p>

<h2>What merchants should do</h2>

<p>First, confirm access. Check whether your account shows the UCP Integration Analytics tab and who holds the Performance role, then export a baseline while volumes are still small.</p>

<p>Second, reconcile. Match UCP purchases against your order system, and match cart transfers against completed orders on your site. The second comparison is the one only you can make.</p>

<p>Third, read the numbers for what they are. A UCP purchase shows where a sale was completed. It does not show that the AI created the demand. A shopper who already wanted your product may simply have used the nearest Buy button.</p>

<p>If you could see every UCP purchase but not a single product the AI passed over, which of those would tell you more about where to invest?</p>`,
}

const { data, error } = await supabase.from('blog_posts').insert(post).select('id, slug').single()
if (error) { console.error('Insert failed:', error); process.exit(1) }
console.log('Post inserted successfully:', data.id)
console.log('URL: https://theroberthu.com/blog/' + data.slug)
