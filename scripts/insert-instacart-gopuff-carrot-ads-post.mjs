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

const DESCRIPTION = "Gopuff kept its ad business and rented Instacart's ad infrastructure. Retail media is splitting into layers, and the question is which parts to own."

const EXT = 'target="_blank" rel="noopener noreferrer"'

const post = {
  slug: 'instacart-gopuff-carrot-ads-retail-media-infrastructure',
  // Editorial H1 (renders on page, and as JSON-LD headline)
  title: 'Retail Media Is Becoming Infrastructure, Not a Network Every Retailer Builds',
  // Query-aligned search title (drives <title>, OG and Twitter). Deliberate split.
  meta_title: 'Instacart Carrot Ads and Gopuff: Retail Media Infrastructure',
  excerpt: "Gopuff runs its own storefront, fulfillment and ad sales business, and it still put Instacart Carrot Ads underneath its advertising. Retail media is separating into a layer retailers own and a layer they rent.",
  meta_description: DESCRIPTION,
  og_image: '/images/blog/instacart-gopuff-carrot-ads-retail-media-infrastructure.svg',
  category: 'Digital Marketing',
  tags: ['retail media', 'Instacart', 'Carrot Ads', 'Gopuff', 'advertising infrastructure', 'commerce platforms'],
  status: 'published',
  featured: false,
  read_time_minutes: 6,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: false,
    related_posts: ['amazon-ads-chatgpt-openai-partnership', 'walmart-sparky-sponsored-prompts-ads', 'kroger-ecommerce-operating-model'],
    featured_image_alt: 'A retail storefront layer sitting on top of a shared advertising infrastructure layer, with the shopper relationship and brand programs held above the line and ad serving and measurement below it',
  },
  published_at: new Date().toISOString(),
  content: `<p>Gopuff is the company that should not need this. It runs its own ecommerce platform, its own micro-fulfillment centers, its own delivery network, its own customer relationship, and its own advertising business. If any retailer has earned the right to build the whole stack, it is that one.</p>

<p>On September 22 it took somebody else's advertising infrastructure anyway.</p>

<h2>What was announced</h2>

<p><a href="https://www.prnewswire.com/news-releases/instacart-and-gopuff-announce-new-first-of-its-kind-partnership-in-the-us-302885692.html" ${EXT}>Instacart and Gopuff said</a> Gopuff will join the Instacart Marketplace and use Instacart Carrot Ads to power advertising on Gopuff's own digital storefront in the United States. Orders placed through Instacart for Gopuff products are fulfilled and delivered by Gopuff, using its own network of micro-fulfillment centers. More than 9,000 brand advertisers using Instacart Ads will be able to extend campaigns to Gopuff and BevMo! customers.</p>

<p>Instacart says more than 310 partners now use Carrot Ads, and describes it as extending the same technology, optimization and accredited measurement that powers its own marketplace.</p>

<p>This is really two deals in one announcement. One puts Gopuff's assortment in front of Instacart's customers. The other puts Instacart's ad technology underneath Gopuff's own storefront. A retailer could want either without the other.</p>

<p>Advertisers wanting to run specifically on Gopuff's storefront will do that through their Instacart team, so even the targeted version of this inventory is bought through Instacart's commercial surface.</p>

<p>The sentence that matters most is easy to skim past. Gopuff Ads, the release says, "continues to work directly with brands on bespoke, full-funnel activations." Gopuff did not hand over its advertising business. It kept the part it sells and rented the part it runs on. Gopuff is not exiting retail media. It is deciding which parts of the stack need to remain proprietary.</p>

<h2>This is not the arrival of white-label retail media</h2>

<p>Carrot Ads has been doing this for years, and saying so matters, because the news here is not the model.</p>

<p>Sprouts launched a retail media network on Carrot Ads in 2023. Hy-Vee's RedMedia joined in 2025. <a href="https://www.instacart.com/company/pressreleases/instacart-receives-mrc-accreditation-for-carrot-ads" ${EXT}>Instacart's own November 2025 announcement</a> called Carrot Ads its "white-label ad technology," counted more than 240 ecommerce partners and more than 7,500 CPG advertisers, and named Hy-Vee, Sprouts, Thrive Market and Uber Eats as partners. Ten months later those numbers are 310 and 9,000.</p>

<p>So the platform is not new and the growth is real. What is new is the profile of the adopter. A grocery chain renting ad infrastructure is buying a capability it never had. A digitally native, vertically integrated operator with an existing ad sales business doing the same thing is a different decision.</p>

<h2>The layers, as I read them</h2>

<p>This framing is mine rather than Instacart's, and the line between the layers is blurrier than any diagram suggests.</p>

<p>What Gopuff keeps looks like the commercial layer. The shopper relationship, fulfillment speed as the actual product, first-party insight into instant-commerce behavior, direct relationships with brands, and the bespoke programs it sells against them.</p>

<p>What Gopuff rents looks like the plumbing. Ad serving, standardized sponsored placements, campaign workflow, optimization, aggregated advertiser demand, and third-party-accredited measurement. Instacart says Gopuff will use Carrot Ads customization options, which suggests the boundary is adjustable rather than fixed.</p>

<p>Renting the plumbing is not the same as ceding control. Gopuff still owns the shopper relationship and the first-party data, sets the merchandising rules, decides which brands it builds programs for, and controls what its storefront offers. Ownership of a layer and control of a business are different questions, and conflating them is the easiest mistake to make here.</p>

<p>Put plainly, the question may no longer be whether a retailer should build a retail media network. It may be which layers are strategically differentiating enough to justify owning.</p>

<h2>A useful contrast with the Amazon case</h2>

<p>Two weeks ago I wrote that when <a href="/blog/amazon-ads-chatgpt-openai-partnership">Amazon began selling ChatGPT ad inventory</a>, the advertiser relationship moved outward while the commerce data and the measurement loop did not visibly travel with it.</p>

<p>This is the opposite direction. Carrot Ads is infrastructure built to operate inside somebody else's commerce environment, and measurement is explicitly part of the package: Instacart extended its Media Rating Council accreditation to Carrot Ads placements in November 2025, covering impressions, clicks, click-through rate and viewable impressions on partner sites and apps. That accreditation validates measurement process for named metrics. It is not evidence of incremental sales, partner profitability or campaign effectiveness.</p>

<p>That is an architectural difference, not a scorecard. Amazon's model exports demand from a network it owns. Instacart's model installs the network underneath retailers it does not own. Both can work, and they create different dependencies.</p>

<h2>The network effect, stated as a hypothesis</h2>

<p>Here is the mechanism I think is operating, offered as analysis rather than established economics.</p>

<p>Each new partner surface adds inventory that Instacart's advertisers can buy without a new integration. Each new advertiser adds demand that partner retailers can monetize without building a sales organization. If both sides keep growing, the platform compounds across retailers whose storefronts it will never own.</p>

<p>Instacart publishes the partner count and the advertiser count. It does not publish what those partners earn, how concentrated activity is across the 310, or whether a mid-sized partner does better on Carrot Ads than it would have done alone. Counting participants is not demonstrating economics, and I would want partner-level results before treating the flywheel as proven.</p>

<h2>What this asks an operator to decide</h2>

<p>The sorting differs by retailer.</p>

<p>Strong candidates for owning: the shopper relationship, first-party data and the rules for using it, merchandising and customer experience, advertiser strategy, and the differentiated programs a self-serve platform cannot sell.</p>

<p>Reasonable candidates for renting: ad serving, campaign workflow, standardized sponsored inventory, demand aggregation and measurement plumbing. These are table stakes that get better with scale and rarely win an account on their own.</p>

<p>A retailer with enormous scale and a large brand-facing sales team may still conclude the whole stack is worth building. A retailer with neither is probably buying an engineering project it cannot staff.</p>

<h2>The objections</h2>

<p>Several are serious. Shared infrastructure means sharing economics, and a partner is funding a platform that also serves its competitors. Standardized inventory looks the same everywhere, which erodes the differentiation retail media was supposed to create. Advertiser demand concentrating into a few ecosystems is good for buyers and eventually constraining for sellers. First-party data is not equally portable, and the terms governing it matter more than the ad server does.</p>

<p>The largest retailers may simply decline the trade. A company with the scale to amortize its own ad platform, and the brand demand to fill it, keeps both the margin and the roadmap.</p>

<p>There is also a counting problem. More than 310 partners is a real number that says nothing about how many are meaningfully active, and adoption is not profitability. Gopuff joining proves Gopuff made a decision, not that the decision pays.</p>

<p>If retail media becomes infrastructure most retailers rent rather than build, what is left that actually distinguishes one retailer's media business from another's?</p>
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
