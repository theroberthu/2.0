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
  slug: 'prime-day-2026-record-spend-smaller-carts-essentials',
  title: "Prime Day 2026 Set a Record and Shrank the Cart at the Same Time. The Brands That Won Saw It Coming.",
  excerpt: "Adobe says Prime Day 2026 hit a record $8.3 billion on day one. Numerator says the average cart shrank 16%. Both are right. Here is what the essentials-driven, smaller-basket event means for marketplace sellers, and why the reorder brands won.",
  meta_title: "Prime Day 2026 Set a Record and Shrank the Cart at the Same Time",
  meta_description: "Adobe says Prime Day 2026 hit a record $8.3 billion on day one. Numerator says the average cart shrank 16%. Both are right. Here is what the essentials-driven, smaller-basket event means for marketplace sellers, and why the reorder brands won.",
  og_image: '/images/blog/prime-day-2026-record-spend-smaller-carts-essentials.svg',
  category: 'E-commerce Strategy',
  tags: ['Prime Day 2026 results', 'Prime Day 2026 average order value', 'Prime Day essentials trading down', 'Prime Day 2026 seller takeaways', 'Prime Day consumables reorder'],
  status: 'published',
  featured: false,
  read_time_minutes: 7,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: true,
    faq_data: [
      {
        q: 'Did Prime Day 2026 actually set a record if carts got smaller?',
        a: 'Yes, both are true because they measure different things. Adobe Analytics tracks aggregate US online spend across all retailers and reported a record $8.3 billion on day one and a reaffirmed $26.3 billion four-day forecast. Numerator tracks Amazon Prime Day at the order and household level and found the average order size fell about 16% to $45.94 and household spend fell about 13%. Record total spend, built from a larger number of smaller carts.',
      },
      {
        q: 'What sold best on Prime Day 2026?',
        a: "Essentials led. Adobe reported personal hygiene up 130%, household goods up 65%, and baby products surging (formula up 90%, diapers and wipes up 85%, strollers up 220%). Numerator's day-three top items included Premier Protein shakes and Liquid I.V. Discount-driven big-ticket categories were also strong, with electronics up 105% and appliances up 95%, but the structural story was shoppers restocking needs rather than buying wants.",
      },
      {
        q: 'What should sellers take from Prime Day 2026?',
        a: 'Two things. First, if you sell a replenishable, the reorder position is what wins an essentials-driven event, so audit your default-reorder setup: subscription enrollment, cadence signals in product data, availability consistency, and price stability. Second, Adobe found AI-referred traffic converted 50.7% better than non-AI sources this year, a reversal from 2025. AI visibility is now a current-quarter revenue lever, not a future project.',
      },
    ],
    related_services: ['ecommerce-strategy', 'product-listing-optimization'],
    related_posts: ['prime-day-2026-alexa-for-shopping-seller-readiness', 'walmart-sparky-q1-earnings-replenishment-shift', '6-dimension-geo-audit-framework-amazon-listing'],
    featured_image_alt: 'Prime Day 2026 set a record total while average order size shrank, driven by essentials and replenishable purchases',
  },
  published_at: '2026-06-26T18:00:00.000Z',
  content: `<p>Prime Day 2026 set a record and shrank the cart at the same time. Adobe reported $8.3 billion in US online spend on day one, the biggest US e-commerce day of the year, up 5.3% over last year's opener. Adobe reaffirmed a record $26.3 billion forecast for the full four days. And yet Numerator, tracking the same event at the order level, found the average order size fell about 16% year over year, to $45.94, and average household spend dropped about 13%. More total money. Smaller individual carts.</p>

<p>Those two findings look like they argue with each other. They do not. Adobe and Numerator are measuring different things, and both are right. Adobe counts aggregate online spend across all US retailers. Numerator tracks Amazon Prime Day at the order and household level. Put them together and you get one coherent story: people did not skip Prime Day. They came for essentials and skipped the splurge. More shoppers, placing more orders, each one smaller and more deliberate.</p>

<p>For marketplace sellers, this is not just a macro observation about a cautious consumer. It is a direct signal about which brands won this event and why. The categories that surged were the ones people restock, and the brands that captured them were the ones already positioned as the default. This is the live version of the reorder thesis I have been writing about all year, and it shows up cleanly in the <a href="/geo">GEO</a> data this site tracks. Here is what the numbers actually say, and what to do with them.</p>

<h2>Record total, smaller carts: both numbers are real</h2>

<p>Start with the two measurements, because the rest of the post depends on holding both in your head at once.</p>

<p>Adobe Analytics measures aggregate US online spend across all retailers. By that measure, Prime Day 2026 was a record. Day one, Tuesday June 23, hit $8.3 billion, up 5.3% from $7.9 billion the prior year, the single biggest US e-commerce day of 2026 so far. Adobe reaffirmed its forecast of $26.3 billion across the four-day event, roughly 9% growth year over year and about $2.5 billion more than the comparable 2025 period.</p>

<p>Numerator tracks Amazon Prime Day at the order and household level. By that measure, shoppers spent less, not more. As of 4 p.m. ET on Thursday June 25, the average order size was $45.94, down about 16% from $54.78 in the same period during Prime Day 2025. Average household spend was about $121.26, down roughly 13% from $139.71 the prior year. Those metrics dropped year over year on all of the first three days.</p>

<p>The reconciliation is in the order count. Numerator found that 58% of households shopping Prime Day had already placed two or more separate orders, identical to 2025. Record aggregate spend, built from a larger number of smaller, more deliberate baskets. That is what a trading-down event looks like in the data: total volume up, individual basket down. Neither analyst is wrong. They are two lenses on the same event, and the seller story lives in the gap between them.</p>

<h2>Shoppers came for the restock, not the splurge</h2>

<p>The category data explains the smaller cart. Shoppers showed up in stock-the-pantry mode.</p>

<p>The essentials surged hardest in relative terms. Adobe reported personal hygiene products, things like oral care, shampoo, and antiperspirant, up 130% versus average June daily sales. Household goods like trash bags, detergents, and paper products were up 65%. Baby products climbed across the board: formula up 90%, diapers and wipes up 85%, car seats up 140%, strollers up 220%. Numerator's day-three top sellers told the same story from the order side, with Premier Protein shakes and Liquid I.V. among the most-bought items. Amazon planned for this. It positioned Prime Day 2026 around grocery and household essentials deals, explicitly leaning into economic pressure on consumers.</p>

<p>This is not the whole picture, and I am not going to pretend essentials were the only thing moving. Discount-driven big-ticket categories were strong too. Adobe had electronics up 105% on the back of the deepest discounts of the event, around 24% off list, appliances up 95%, and tools and home improvement up 75%. Deal hunters still hunted deals.</p>

<p>But the structural story underneath the surge is consumers prioritizing what they need to restock over what they want to own. A $45.94 average order is not a treat-yourself basket. It is a refill. The shopper who used to add an impulse gadget to a household-goods order this year skipped the gadget and kept the refill. That single behavioral shift is most of the gap between Adobe's record total and Numerator's shrinking cart.</p>

<h2>The brands that won were the ones positioned as the default</h2>

<p>Here is the part that matters if you sell on these platforms. Look at the winning categories again: household staples, personal hygiene, baby consumables, protein, electrolytes. Those are replenishables. They are the products where being the default reorder matters far more than winning a one-time discovery click.</p>

<p>A shopper restocking trash bags, formula, or protein powder during Prime Day is usually not running a fresh comparison. They are reordering a brand they already trust, or letting an AI surface put the obvious option in front of them. The brand that wins that moment is the one already set up to be the default: enrolled in Subscribe &amp; Save, carrying clean replenishment signals in its product data, holding consistent availability so it does not stock out mid-event, and pricing stably enough that the agent and the shopper both read it as reliable. None of that gets decided during Prime Day. It gets decided in the months before, in the listing data.</p>

<p>This is the live confirmation of the reorder thesis laid out in <a href="/blog/walmart-sparky-q1-earnings-replenishment-shift">Walmart's Q1 earnings and the replenishment shift</a>, and the same dynamic the cluster guides for <a href="/geo/alexa-for-shopping">Alexa for Shopping</a> and <a href="/geo/walmart-sparky">Walmart Sparky</a> describe in detail. When the economy pushes shoppers toward essentials, discovery optimization matters less and the reorder position matters more, because the purchase is a refill, not a fresh decision. The brands that treated Prime Day as a reorder event captured an essentials-driven Prime Day by default. The brands that treated it as a discovery event spent into a smaller cart.</p>

<h2>AI shopping quietly flipped this year</h2>

<p>One more data point worth flagging for this audience, because it reverses last year. Adobe found that generative AI traffic to US retail sites nearly doubled year over year during Prime Day 2026 and converted 50.7% better than non-AI sources. A year ago, on Prime Day 2025, AI-referred traffic converted about 23% worse than traditional sources. That is a full reversal in twelve months.</p>

<p>The behavioral detail backs it up. Adobe reported that AI shoppers spent 49.9% longer on sites, browsed 20.5% more pages, and had a 33% higher add-to-cart rate than non-AI sources. The read is straightforward: a year ago, AI shopping traffic was curious browsers poking at a new tool. This year it is converting buyers. Prime Day 2026 is the first Prime Day where AI-referred traffic outperformed traditional traffic on conversion.</p>

<p>For sellers, this settles a question that was still open last year. AI visibility is no longer a future-tense concern you can defer. The traffic coming from <a href="/geo">AI surfaces</a> now converts better than the traffic coming from anywhere else, and the <a href="/aeo">agentic layer</a> sitting on top of it is only getting more capable. The shoppers arriving through AI are not tire-kickers anymore.</p>

<h2>The takeaway for your next event</h2>

<p>Three things to carry into the next event.</p>

<p>First, if your Prime Day plan assumed treat-yourself spending and the numbers came in soft, the issue may be category position, not execution. A great campaign for a want, in a quarter when shoppers are buying needs, underperforms through no fault of the campaign.</p>

<p>Second, if you sell a replenishable, audit your default-reorder positioning before the next event, not during it. That means Subscribe &amp; Save enrollment, explicit cadence signals in your product data, availability you can hold through a demand spike, and price stability the agent can trust. The <a href="/blog/6-dimension-geo-audit-framework-amazon-listing">6-dimension framework</a> covers the listing-data side of becoming the default.</p>

<p>Third, AI-referred traffic now converts better than traditional traffic. Your AI visibility is a current-quarter revenue lever, not a someday project. The groundwork for that is the same work covered in the <a href="/blog/prime-day-2026-alexa-for-shopping-seller-readiness">pre-event readiness post</a> from before this Prime Day.</p>

<h2>Closing</h2>

<p>Prime Day 2026 was a record built from smaller, more deliberate carts. The brands that won sold things people restock and were positioned to be the default when they did. The macro pressure that shrank the cart is the same pressure that rewards the reorder position, which is why the essentials brands set up as the default came out ahead while the discovery-dependent brands spent into a thinner basket.</p>

<p>Subscribe to <a href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7270286787502047232">Hu's Weekly Hoot</a> for ongoing analysis of the AI commerce shift and what it means for marketplace brands.</p>

<h2>Frequently Asked Questions</h2>

<h3>Did Prime Day 2026 actually set a record if carts got smaller?</h3>
<p>Yes, both are true because they measure different things. Adobe Analytics tracks aggregate US online spend across all retailers and reported a record $8.3 billion on day one and a reaffirmed $26.3 billion four-day forecast. Numerator tracks Amazon Prime Day at the order and household level and found the average order size fell about 16% to $45.94 and household spend fell about 13%. Record total spend, built from a larger number of smaller carts.</p>

<h3>What sold best on Prime Day 2026?</h3>
<p>Essentials led. Adobe reported personal hygiene up 130%, household goods up 65%, and baby products surging (formula up 90%, diapers and wipes up 85%, strollers up 220%). Numerator's day-three top items included Premier Protein shakes and Liquid I.V. Discount-driven big-ticket categories were also strong, with electronics up 105% and appliances up 95%, but the structural story was shoppers restocking needs rather than buying wants.</p>

<h3>What should sellers take from Prime Day 2026?</h3>
<p>Two things. First, if you sell a replenishable, the reorder position is what wins an essentials-driven event, so audit your default-reorder setup: subscription enrollment, cadence signals in product data, availability consistency, and price stability. Second, Adobe found AI-referred traffic converted 50.7% better than non-AI sources this year, a reversal from 2025. AI visibility is now a current-quarter revenue lever, not a future project.</p>
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
