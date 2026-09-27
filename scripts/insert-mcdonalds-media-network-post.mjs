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

const DESCRIPTION = "McDonald's gave a billion-dollar media aspiration 130 words. It has identity, transaction data, frequency and screens. The missing piece is the closed loop."

const EXT = 'target="_blank" rel="noopener noreferrer"'

const post = {
  slug: 'mcdonalds-media-network-commerce-media-without-marketplace',
  // Editorial H1 (renders on page, and as JSON-LD headline)
  title: "McDonald's Is Building a Media Network Without a Marketplace",
  // Query-aligned search title (drives <title>, OG and Twitter). Deliberate split.
  meta_title: "McDonald's Media Network: Commerce Media Without a Shelf",
  excerpt: "McDonald's disclosed a media network pilot across 450 company-operated restaurants and an aspiration to build it into a billion-dollar business. It has identity, purchase data, frequency and screens. What it has not shown is closed-loop measurement.",
  meta_description: DESCRIPTION,
  og_image: '/images/blog/mcdonalds-media-network-commerce-media-without-marketplace.svg',
  category: 'Digital Marketing',
  tags: ['commerce media', 'retail media', 'McDonalds', 'first-party data', 'loyalty', 'advertising'],
  status: 'published',
  featured: false,
  read_time_minutes: 6,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: false,
    related_posts: ['instacart-gopuff-carrot-ads-retail-media-infrastructure', 'amazon-ads-chatgpt-openai-partnership', 'walmart-sparky-sponsored-prompts-ads'],
    featured_image_alt: 'A drive-thru order screen carrying a third-party advertisement, with the loyalty identity and purchase history behind it and no measurable purchase outcome on the other side',
  },
  published_at: new Date().toISOString(),
  content: `<p>A billion-dollar aspiration got about 130 words.</p>

<p>That is the entire public disclosure of McDonald's Media Network at the <a href="https://stockanalysis.com/stocks/mcd/transcripts/746101-investor-day-2026/" ${EXT}>September 23 Investor Day</a>. One paragraph from Morgan Flatley, the global chief marketing officer and head of new business ventures, inside a four-hour presentation about menu, restaurants and franchise economics.</p>

<p>The gap between the size of the claim and the size of the disclosure is where the interesting questions live.</p>

<h2>What was actually said</h2>

<p>Flatley described McDonald's assets first: more than 70 million daily customers globally, and "an unmatched footprint from our app to kiosks, menu boards, and restaurants." Then the news. "McDonald's Media Network is the first example. Commerce media is one of the fastest-growing areas in advertising and is expected to reach more than $100 billion in the U.S. alone by 2028. Last month, we moved into markets testing with a pilot across 450 U.S. company-owned restaurants."</p>

<p>Then the ambition, in the company's own wording. "We are at the beginning of our aspiration to build McDonald's Media Network into a billion-dollar business across the McDonald's system over time. It is an opportunity to generate revenue for the system with little in the way of additional cost, no operational complexity, and no disruption to our customer experience."</p>

<p>Aspiration is the operative word, and McDonald's chose it. This is not guidance. None of the seven financial targets the company published that morning refers to advertising revenue, and the <a href="https://www.sec.gov/Archives/edgar/data/63908/000006390826000076/exhibit991-investorupdate2.htm" ${EXT}>press release filed as an exhibit to the Form 8-K</a> does not mention the network at all.</p>

<h2>What was not said</h2>

<p>The absences are more informative than a rate card would be.</p>

<p>No advertiser was named. No pricing, no buying method, no technology partner, no measurement provider, no rollout date. Searching the transcript, the word attribution does not appear once, in any context. Neither does any description of how exposure would be counted or connected to a purchase. No analyst asked about it during the question and answer session.</p>

<p>So the honest description of the pilot is narrow. McDonald's is running <a href="https://ppc.land/mcdonalds-runs-third-party-ads-on-drive-thru-boards-at-450-us-restaurants/" ${EXT}>third-party advertising on digital order screens</a> in 450 restaurants it operates itself, out of roughly 14,000 in the United States, and has told investors it would like that to become large.</p>

<h2>Why a burger chain qualifies at all</h2>

<p>The interesting question is not whether McDonald's can sell ads. It is why a company with no third-party assortment now belongs in a conversation that used to require a shelf.</p>

<p>Four assets explain it, and McDonald's has an unusual amount of each. Identity: nearly 220 million 90-day active loyalty customers across 70 markets, grown 45% in three years, with loyalty now about 30% of sales by the chief executive's own account. Transaction: it knows what those customers ordered. Frequency: active loyalty members visit 2.5 times as often as non-members, which means the data refreshes weekly rather than seasonally. Surface: app, kiosks, menu boards and drive-thru screens that the company already owns and already powers.</p>

<p>Set against the usual definition of a retail media network, that is four of five components. The missing one is not assortment. Assortment was never the point. The missing one is the loop.</p>

<h2>The part that does not travel</h2>

<p>In retail media, the advertiser's product sits on the retailer's shelf. Exposure and purchase happen inside the same system, which is why the closed loop exists and why the inventory commands the prices it does. A brand can ask whether the ad sold the product, and the retailer can answer from its own data.</p>

<p><a href="/blog/instacart-gopuff-carrot-ads-retail-media-infrastructure">I wrote recently</a> that retail media is separating into layers, and that the question for a retailer is which parts of the stack are worth owning. This is the layer underneath that question. Whether you get to be in the business at all.</p>

<p>McDonald's can answer yes on identity, transaction, frequency and surface. It cannot yet answer the measurement question, and the structural reason is that an insurance advertiser reaching a McDonald's customer has no outcome McDonald's can observe. There is no policy sold inside the restaurant. The exposure happens in the company's system and the conversion happens somewhere else entirely, which is <a href="/blog/amazon-ads-chatgpt-openai-partnership">the same discontinuity I described when Amazon began selling ChatGPT inventory</a>, arriving from the opposite direction.</p>

<p>That does not make the inventory worthless. Authenticated, high-frequency, physically captive attention is a real product, and it may price well. It does mean this is closer to addressable out of home with a first-party audience attached than to what Walmart or Amazon sell, and I would not assume the multiples transfer.</p>

<h2>The franchise problem is not a detail</h2>

<p>Roughly 95% of McDonald's restaurants worldwide are owned and operated by independent business owners. The pilot runs only in company-operated locations.</p>

<p>At the same Investor Day, the chief financial officer said McDonald's is targeting an increase from about 95% franchised today to about 98% globally by the end of 2028. The set of screens the company controls directly is scheduled to shrink.</p>

<p>Any path to a billion dollars therefore runs through franchisees, and McDonald's disclosed none of what that requires. Whether operators share revenue, whether they can decline, whether hardware changes are needed, whether the economics differ between company and franchised restaurants, and whether the billion refers to gross advertising sales across the system or to revenue McDonald's books, were all unaddressed. Flatley's phrasing, "new high-margin sources of value for McDonald's and our franchisees," implies sharing without describing it.</p>

<h2>What this actually asks an operator</h2>

<p>Not every transaction business should build a media network. The useful version of the question is about minimum assets.</p>

<p>The test is whether you can recognize the customer, know what they bought, see them often enough that the data stays current, and control a surface where a message can appear. Those four are necessary. The fifth, proving exposure changed behavior, determines whether you are selling audience or selling outcomes, and those are priced very differently.</p>

<p>Then the harder question, which McDonald's has answered in advance with a claim rather than evidence. The company says the pilot brings no disruption to customer experience. Perhaps. An advertisement served after the order is placed is a genuinely thoughtful design choice. But the audience being monetized is the audience the operating business created, and nobody has published what happens to satisfaction, throughput or repeat visits when a drive-thru screen starts carrying insurance.</p>

<h2>The objections</h2>

<p>McDonald's scale is close to unique, so the model generalizing is an assumption rather than a finding. The billion is an aspiration with no year attached. Pilot performance is undisclosed, advertiser demand is unproven, and a screen in a drive-thru carries less purchase intent than a search result on a retail site.</p>

<p>The strongest counterargument is definitional. Commerce media may simply be a growing category that now includes restaurants, and calling that a structural change to retail media may be a distinction without a difference. I think the loop question makes it more than that, but I hold it loosely.</p>

<p>If you can identify your customer, know their purchases, see them weekly and own the screen, what is the honest argument that you are not already in the media business?</p>
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
