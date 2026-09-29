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

const DESCRIPTION = "Teads and Koddi opened onsite retail inventory through OpenRTB. The buying pipe can standardize without the commerce signal standardizing with it."

const EXT = 'target="_blank" rel="noopener noreferrer"'

const post = {
  slug: 'retail-media-programmatic-buying-openrtb-koddi-teads',
  // Editorial H1 (renders on page, and as JSON-LD headline)
  title: 'Retail Media Is Starting to Lose Its Separate Buying Interface',
  // Query-aligned search title (drives <title>, OG and Twitter). Deliberate split.
  meta_title: 'Retail Media Buying Is Moving Into the Programmatic Stack',
  excerpt: "Teads and Koddi made participating onsite retail inventory buyable through OpenRTB in an omnichannel platform. The specification standardizes access while leaving ranking, feeds, data and measurement untouched, which is where differentiation now has to live.",
  meta_description: DESCRIPTION,
  og_image: '/images/blog/retail-media-programmatic-buying-openrtb-koddi-teads.svg',
  category: 'Digital Marketing',
  tags: ['retail media', 'programmatic', 'OpenRTB', 'commerce media', 'DSP', 'advertising infrastructure'],
  status: 'published',
  featured: false,
  read_time_minutes: 6,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: false,
    related_posts: ['instacart-gopuff-carrot-ads-retail-media-infrastructure', 'commerce-media-basket-data-spend-data-citi', 'mcdonalds-media-network-commerce-media-without-marketplace'],
    featured_image_alt: 'Advertiser demand arriving at several retail media networks through one standardized pipe, with each retailer keeping its own pricing, ranking, data and measurement behind the connection',
  },
  published_at: new Date().toISOString(),
  content: `<p>Every retail media network has been, among other things, a login. A separate console, a separate campaign taxonomy, a separate report and a separate invoice, repeated for every retailer a brand wanted to reach.</p>

<p>On September 29, <a href="https://www.globenewswire.com/news-release/2026/09/29/3370514/0/en/teads-and-koddi-announce-global-partnership-to-advance-programmatic-access-to-retail-media.html" ${EXT}>Teads and Koddi announced a partnership</a> that makes some of that inventory buyable from somewhere else.</p>

<h2>What was announced</h2>

<p>The two companies described a global partnership bringing an OpenRTB standard to onsite retail media inventory across the United States and Europe. Advertisers can activate Sponsored Product Ads and display placements inside Teads Ad Manager across Koddi-powered networks, with Gopuff UK, Hopper and Wolt Ads named.</p>

<p>The quotes are more revealing than the mechanics. Koddi says retailers can open onsite inventory programmatically "while maintaining complete control over inventory, pricing, and quality standards." Wolt says opening its marketplace to partners like Teads brings "incremental demand via the buying platform of the advertiser's choice while maintaining full control over how our inventory is monetized." Teads frames the goal as connecting "shopper and national brand dollars to the same pipes globally."</p>

<p>Two things are being separated in those sentences. Where a campaign is bought, and who controls what it costs and where it runs.</p>

<h2>What the standard actually standardizes</h2>

<p>This is where the story either holds up or collapses, so it is worth reading the specification rather than the press release.</p>

<p><a href="https://iabtechlab.com/filling-the-cart-the-product-listing-ad-updates-you-need/" ${EXT}>The IAB Tech Lab finalized its Product Listing Ad extension</a> to OpenRTB on January 24, 2025, after public comment in December 2024. It adds a <code>prodfeed</code> object to the bid request, signaling that understanding a product feed is required to transact on that impression, and carrying the allowed and blocked products and categories. The Native Ads API gained a data type for Product ID. The creative is assembled and rendered by the retailer's own stack from its feed, and the buyer supplies a product identifier rather than finished assets.</p>

<p>Now the part almost nobody quotes. The Tech Lab states that the release "does not attempt to specify the structure of a product feed." Nothing in it standardizes ranking, auction logic, sponsored-product eligibility, pricing, reporting or measurement. The Tech Lab calls this the first step of many.</p>

<p>So the protocol standardizes the envelope, not the contents. It describes how a buyer asks for a product placement and what constraints apply. It says nothing about what the placement is worth, how it is ranked, or how anyone proves it worked.</p>

<h2>What the retailer keeps</h2>

<p>Run the control audit and the pattern is consistent with that reading.</p>

<p>Inventory eligibility, placements, pricing, quality standards and how the inventory is monetized all stay with the retailer, per both Koddi and Wolt. The product feed remains the retailer's. Ranking and auction logic are not part of the standard. Measurement is not mentioned in the announcement at all, which is itself worth noting: the release describes access, not attribution, and no data-sharing or reporting terms are disclosed.</p>

<p>Deal structure is also undisclosed. The announcement does not say whether inventory is exposed through open auction, private marketplace, programmatic guaranteed or some mix, and those are not small differences for either side.</p>

<h2>The second chapter of build versus rent</h2>

<p>A week ago I wrote that <a href="/blog/instacart-gopuff-carrot-ads-retail-media-infrastructure">retail media infrastructure is something a retailer can rent</a> rather than build, and that the strategic question is which layers are worth owning.</p>

<p>This is the next question down, and it is whether the front door still has to be yours once the ad server can be rented.</p>

<p>The Gopuff detail makes the progression concrete. Gopuff adopted Instacart Carrot Ads for its United States storefront in September, and Gopuff UK appears here as a Koddi-powered network reachable through Teads. One retailer, two markets, two rented stacks, and in the second case an inventory pool that an advertiser can reach without ever opening a Gopuff interface.</p>

<p>That is a different kind of unbundling from the first. Chapter one separated the retailer from its ad technology. Chapter two separates the retailer from its storefront for advertisers.</p>

<h2>What changes for the buyer</h2>

<p>For an advertiser, the friction being removed is real and boring: fewer logins, fewer taxonomies, one activation path alongside the other inventory that platform sells.</p>

<p>Be careful about how far that goes. Teads says advertisers can activate retail media as part of a broader omnichannel strategy in its manager. It does not publish standardized reporting or billing across networks, and no cross-channel optimization claim is documented. Reduced workflow friction is not the same as unified measurement.</p>

<p>The strategic consequence is still worth stating. When retail inventory becomes activatable from the same place as everything else, it starts competing for budget on more even workflow footing with other inventory classes, which over time makes dedicated retail media budgets harder to keep ringfenced.</p>

<p>None of this is new as an ambition. <a href="https://www.criteo.com/news/press-releases/2023/09/criteo-launches-commerce-max-dsp-into-general-availability-and-announces-next-gen-retailer-monetization-solution-suite/" ${EXT}>Criteo brought Commerce Max to general availability</a> in September 2023 as a single entry point across many retailers. What is different here is the route: an open standard into a general-purpose omnichannel platform, rather than a commerce specialist aggregating retailers inside its own product.</p>

<h2>Where the moat goes</h2>

<p>Here is the risk a retailer should sit with. Easier access invites comparison, and inventory that is easy to buy in the same breath as other inventory can start being evaluated the same way. Demand aggregators accumulate workflow, and workflow is leverage.</p>

<p>I would not call that commoditization today. Nothing in this announcement makes two retail networks interchangeable, and the parts that would have to standardize for that to happen are exactly the parts the specification leaves alone.</p>

<p>Which is the actual finding. The buying pipe can standardize without the commerce signal becoming standardized. Shopper intent, product adjacency, placement quality, auction design and <a href="/blog/commerce-media-basket-data-spend-data-citi">the transaction data underneath it</a> are not carried in a bid request. If every retail network becomes buyable from the same screen, the screen stops being the moat, and everything that was hiding behind the screen has to become the answer.</p>

<h2>The objections</h2>

<p>Several are serious. Large retail budgets are still negotiated inside joint business plans and trade relationships that no protocol touches. Proprietary consoles often provide better controls and richer reporting than an external buying seat, and advertisers frequently prefer buying key accounts directly even when another path exists. The networks with the most scale have the least reason to open anything. Retailers decide what to expose, and can expose very little. Programmatic access can add intermediary fees rather than remove cost.</p>

<p>The strongest objection is the narrowest one. This is participating inventory from one technology provider's retailer base, reachable through one platform. Calling that the end of the retailer console would be wrong, which is why the useful reading is directional rather than conclusive.</p>

<p>If advertisers can reach your inventory without ever seeing your interface, what is left that they are actually choosing you for?</p>
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
