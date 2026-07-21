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

const DESCRIPTION = 'Twelve first-party Google AI Mode tests show how buyer constraints shape the product attributes, sources, and recommendations that appear in AI shopping answers.'

const post = {
  slug: 'product-data-shared-infrastructure-google-ai-mode',
  title: 'What Google AI Mode Reveals About the Future of Product Data',
  excerpt: DESCRIPTION,
  meta_title: 'What Google AI Mode Reveals About the Future of Product Data',
  meta_description: DESCRIPTION,
  og_image: '/images/blog/product-data-shared-infrastructure-google-ai-mode.svg',
  category: 'Digital Transformation',
  tags: ['product data management', 'AI commerce infrastructure', 'Google AI Mode', 'product information management', 'AI product discovery'],
  status: 'published',
  featured: false,
  read_time_minutes: 10,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: false,
    related_posts: ['google-gemini-writes-ads-product-data-marketplace-sellers', 'google-ai-overview-ai-mode-citation-teardown-geo', '6-dimension-geo-audit-framework-amazon-listing'],
    featured_image_alt: 'Product data becoming shared infrastructure across AI-driven discovery, recommendation, and advertising',
  },
  published_at: '2026-07-21T12:00:00.000Z',
  content: `<p>AI is collapsing multiple customer acquisition channels onto a shared foundation: product data. Google AI Mode is one of the clearest current examples of that collapse, but it is an example, not the destination. The point is structural. The same structured record that determines whether an AI engine can describe your product is becoming the record that feeds organic discovery, AI-generated recommendations, and, I will argue, increasingly the advertising layer as well.</p>

<p>That last part deserves a flag before you read further. The advertising connection is an interpretation I am drawing from what Google has announced. It is not something Google has stated in those words, and I separate the confirmed from the inferred in the section on organic and paid below.</p>

<p>The practical consequence for an operator is uncomfortable. Product data quality is no longer only a discovery concern owned by a merchandising or search team. It is becoming upstream of experiences that different departments have historically controlled separately, with separate budgets and separate definitions of quality.</p>

<p>To see what that looks like in practice, I ran twelve queries through Google AI Mode across twelve product categories and recorded what surfaced.</p>

<div class="callout-box">
  <p class="callout-label">Research Findings</p>
  <ul>
    <li>Across <strong>12</strong> Google AI Mode queries, the attributes emphasized in each answer aligned with the buyer's stated constraint.</li>
    <li>Product attributes, specifications, prices, and review data appeared more consistently than brand slogans or positioning language.</li>
    <li>Product data shaped how products were described, while independent editorial authority still influenced which products were recommended.</li>
  </ul>
</div>

<h2>Why this matters now</h2>

<p>Google Marketing Live 2026, held on May 20, is the clearest public marker. In Google's own words, the company is "reinventing ads for AI Search" with next-generation formats that are "instantly tailored to a person's unique query." At the same event Google introduced Ask Advisor, a Gemini agent spanning Google Ads, Analytics, Merchant Center and the Marketing Platform, and described continued investment in agentic commerce infrastructure including the Agent Payments Protocol, the <a href="/blog/amazon-joins-universal-commerce-protocol">Universal Commerce Protocol</a>, and a new Universal Cart. I wrote about <a href="/blog/google-gemini-writes-ads-product-data-marketplace-sellers">Google's announcement of query-tailored AI Search ads</a> in more detail at the time.</p>

<p>Read those together and a direction emerges. Ad creative is being generated per query rather than written once. The agent layer reaches directly into Merchant Center. The commerce protocols are being standardized, which is the same <a href="/aeo">agentic commerce</a> buildout happening across Amazon and Walmart.</p>

<p>Each of those depends on machine-readable product information. When an ad description is composed on the fly for a specific buyer question, the marketer no longer writes the sentence the buyer reads. The marketer supplies the material the system writes from.</p>

<h2>What we observed in Google AI Mode</h2>

<p>Twelve queries, twelve categories, run in a single unauthenticated session in July 2026 from one location. This is operator observation, not a dataset, and the limits matter enough that I have given them their own section.</p>

<p>The categories were chosen to create different buyer constraints and therefore different product-data requirements: espresso machines, running shoes, air purifiers, standing desks, protein powder, facial moisturizer, wireless earbuds, lawn fertilizer, convertible car seats, mattresses, cast iron skillets, and laptops.</p>

<p><strong>Four things repeated across every category.</strong></p>

<p>First, the buyer's constraint selected the attribute set. This held in all twelve. "Small kitchen" produced footprint width in inches. "Flat feet and knee pain" produced pronation control, heel drop, and cushioning. "Lactose intolerance" produced processing method, specifically whether whey had been microfiltered to strip lactose. "Glass top stove" produced bottom flatness and weight. "St. Augustine grass in summer" produced NPK ratios and slow-release nitrogen. The constraint in the question became the filter applied to the catalog.</p>

<p>Second, what surfaced was product data, not marketing language. Dimensions, ratios, ingredient concentrations, ingress protection ratings, prices, and review counts appeared throughout. Brand slogans and positioning lines appeared nowhere in any of the twelve.</p>

<p>Third, specific brand-owned attribute names were reproduced verbatim when they were concrete. Brooks GuideRails, HOKA MetaRocker, Jabra ShakeGrip, Scotts Turf Builder SummerGuard, and La Roche-Posay Toleriane Double Repair all appeared as written, each attached to the function it performs. Proprietary vocabulary survived when it named a mechanism. It did not survive when it was merely evocative.</p>

<p>Fourth, the sources were unusually mixed. Across twelve answers the cited sources included major publishers such as Wirecutter, Allure and Consumer Reports, brand-owned domains including Blueair and Myprotein, retailers including Macy's and iHerb, YouTube creators, a Reddit thread, a nonprofit health organization, and a small regional landscaping company in Georgia. In the cast iron query, AI Mode quoted a customer review published on a brand's own direct-to-consumer site and attributed it to that domain and to the individual reviewer by name.</p>

<p><strong>Where the categories diverged, and this is the part worth sitting with.</strong></p>

<p>Commerce product cards, with price, merchant, star rating and review count, appeared in four of the twelve: running shoes, protein powder, wireless earbuds, and lawn fertilizer. In the other eight, including commercially valuable categories such as skincare, the answer was a narrative or comparison built largely from publisher testing, with no purchase data attached.</p>

<p>The regulated category behaved unlike any other. Asked for the safest convertible car seat for a small car, AI Mode corrected the premise before answering. Because all car seats sold must meet federal safety standards, it reframed "safest" as a question of correct fit and installation, then decomposed "small car" into two separate spatial constraints, front-to-back legroom and side-to-side width.</p>

<p>A lawn fertilizer with a single five-star review appeared alongside products carrying thousands. Review volume did not appear to gate inclusion, at least not here. And in the earbuds query, a block labeled Sponsored appeared adjacent to the organic answer, which is a useful reminder that paid placement has not gone anywhere.</p>

<h2>Why the buyer's constraint changes the attributes that matter</h2>

<p>The most durable finding is the first one, and it has an operational consequence that is easy to miss.</p>

<p>If the constraint in the question determines which attributes get used, then there is no fixed set of attributes that matters. The attributes that matter are the ones that answer constraints your buyers actually have, and different buyers arrive with different constraints for the same product.</p>

<p>A single espresso machine might need to answer "small kitchen" with a width, "first-time buyer" with a difficulty rating, "office of twelve" with a throughput figure, and "hard water area" with a filtration spec. Those are four different attributes, three of which most catalogs do not carry, all describing one product.</p>

<p>This reframes catalog completeness. The traditional question is whether the required fields are filled. The emerging question is whether the catalog can answer the range of constraints buyers bring, which is a much larger surface area and is not knowable from the field list alone. It is the same logic behind the <a href="/blog/6-dimension-geo-audit-framework-amazon-listing">six-dimension attribute framework</a> I use for listings, applied to a wider set of surfaces.</p>

<p>It also explains why the answers reproduced named mechanisms like GuideRails and MetaRocker. Those terms map a physical feature to a problem the buyer stated. They are useful to a system assembling an explanation. A tagline is not.</p>

<h2>How product data may connect the organic and paid experiences</h2>

<p>Here is where the observation and the announcement meet, and where I have to be precise about what is established.</p>

<p>Everything above describes the organic surface: what an AI engine assembles when it answers a shopping question. Separately, Google has confirmed that its AI Search ad formats are tailored instantly to the individual query. Both of those are documented.</p>

<p>The join between them is not. That the per-query tailoring draws substantially on advertiser product data and site content is my interpretation. It is supported by the direction of the Ask Advisor integration into Merchant Center and by the shape of the GML announcements, but Google has not said it in those words, and I am not going to present it as though they had.</p>

<p>If that interpretation is directionally right, the implication is significant. The same structured record would sit underneath two experiences that most organizations manage as separate disciplines with separate owners. Improving the record would improve both. Neglecting it would degrade both, and the paid budget could not fully compensate, because budget buys placement rather than the sentence.</p>

<p>That is what shared infrastructure means here. Not that organic and paid become the same thing, but that they stop having independent inputs.</p>

<h2>What this means for product information management</h2>

<p>Most companies treat product information as a downstream publishing task. Someone fills the fields each channel requires, and the same product ends up described differently in four systems. That was tolerable when each channel served its own audience. It becomes expensive when machines read across all of it to assemble one answer.</p>

<p>Three shifts follow from what I observed.</p>

<p>Attribute depth starts to matter more than attribute presence. A filled field reading "premium construction" answered none of the twelve queries. A field carrying "7-inch width" or "15-0-15" answered them directly.</p>

<p>Naming becomes an asset when it is mechanical. Proprietary terms survived when they named how something works, which argues for defining a distinctive feature clearly in your own data rather than hoping a description carries it.</p>

<p>Third-party records are part of your surface whether you manage them or not. Attribute-level claims in these answers were attributed to retailers, and in one case a brand's own on-site customer review was quoted directly. Your data quality on someone else's product page is still your data quality, a dynamic already familiar to anyone optimizing for <a href="/geo/alexa-for-shopping">Amazon Alexa for Shopping</a> or <a href="/geo/walmart-sparky">Walmart Sparky</a>.</p>

<h2>Executive implications</h2>

<p>If this interpretation proves directionally correct, several things follow that are not merchandising decisions.</p>

<p>Product information management becomes a strategic capability rather than an operational chore, because it feeds revenue-generating surfaces that sit outside the team maintaining it.</p>

<p>SEO, paid media, merchandising, and product content teams become interdependent whether or not the organization chart reflects it. When one record feeds several surfaces, separate optimization of those surfaces produces conflicting requirements against a shared dependency.</p>

<p>Product data quality becomes a board-level capability question. Not because catalogs are interesting at board level, but because a shared dependency that no single function owns is a governance problem, and governance problems escalate.</p>

<p>Organizations optimized around channel-specific content will need to rethink how they manage reusable product knowledge. The unit of work shifts from producing content per channel to maintaining a record that many systems can read.</p>

<h2>Counterarguments and limitations</h2>

<p>This is twelve queries in one session, from one location, unauthenticated, on one day in July 2026. It is not a sample in any statistical sense, and I am not presenting frequency counts as rates. Where I say something held across all twelve, that describes twelve observations, not a measured probability. Personalization, location, and session effects are unmeasured, and I cannot rule out that a different account or region would produce different answers.</p>

<p>Several things genuinely complicate the argument.</p>

<p>Publishers still carried the recommendation layer in a large share of categories. In skincare, car seats and air purifiers, the authority came from Wirecutter, Allure, Consumer Reports and similar sources. Excellent product data did not appear sufficient to win those recommendations. If your read of this article is that fixing your catalog gets you recommended, that is not what the evidence shows. It shows that product data was the raw material of the description, while editorial validation often drove the selection. Product data may be necessary infrastructure without being sufficient for recommendation authority.</p>

<p>Commerce cards appeared in a minority of categories, so any claim that AI Mode reliably surfaces price and merchant data is unsupported here. Paid placement is visibly present, and the Sponsored block is a reminder that the auction has not been replaced by merit.</p>

<p>The provenance of the data is opaque. I could see which attributes were used. I could not see whether they came from Merchant Center feeds, retailer product pages, brand sites, or the Shopping Graph. That distinction matters enormously for what an operator should actually go fix, and I cannot resolve it from the outside.</p>

<p>I also cannot see selection logic, and I will not guess at it. Nothing here is a claim about how Google ranks or chooses, or why any particular source was selected. These are observations of output. Separately, I have written before about <a href="/blog/google-ai-overview-ai-mode-citation-teardown-geo">what two of my own articles had in common when Google cited them</a>, and I want to be explicit that publisher citation behavior is a different question from product surfacing. I am not generalizing one to the other.</p>

<p>Finally, this surface is volatile. AI Mode was rebranded on Android in April 2026. Anything read as mechanism today may be a product decision that changes next quarter. That is precisely why the durable idea is the infrastructure shift and not the Google feature.</p>

<h2>Hypotheses worth testing</h2>

<p>Stated as hypotheses, because that is what they are.</p>

<p>AI is beginning to reward organizations that treat product information as an enterprise capability rather than a channel-specific asset. This is the claim I hold most strongly and can prove least. It would be tested by comparing outcomes between organizations with centralized product records and those with channel-siloed content.</p>

<p>Specific, named, attribute-rich product data surfaces more consistently than broad category content. Testable by tracking a controlled set of products before and after attribute enrichment.</p>

<p>Constraint coverage predicts visibility better than field completeness. Testable by mapping the constraints buyers actually express against the attributes a catalog can answer, then measuring which gaps correlate with absence from AI answers.</p>

<h2>Open questions</h2>

<p>Where does the data actually come from? If the attributes in these answers originate primarily in retailer records rather than brand records, brand-side catalog work is less directly useful than it appears, and the priority becomes accuracy on partner surfaces.</p>

<p>Does editorial validation remain the deciding factor in categories where trust is expensive? Skincare and safety equipment both leaned on independent testing. That may be durable rather than transitional.</p>

<p>What happens to categories that publishers do not cover? If independent review coverage is the gate, products in thin categories may be evaluated on their data alone. That would be the cleanest natural experiment available, and it is the one I would most like to run next across the <a href="/geo">AI search surfaces</a> generally.</p>

<p>And the one I keep returning to: if a single record ends up feeding discovery, recommendation, and advertising, who in the organization owns it? Today, in most companies, the honest answer is nobody in particular. That was survivable when the record was a publishing input. It is a different proposition when it becomes shared infrastructure.</p>
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
