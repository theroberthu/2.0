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

const DESCRIPTION = "Citi launched a commerce media network built on card transaction data. Retailers know the basket. Payment networks know the spend. Those are different moats."

const EXT = 'target="_blank" rel="noopener noreferrer"'

const post = {
  slug: 'commerce-media-basket-data-spend-data-citi',
  // Editorial H1 (renders on page, and as JSON-LD headline)
  title: 'The Commerce Media Moat Is Splitting Into Basket Data and Spend Data',
  // Query-aligned search title (drives <title>, OG and Twitter). Deliberate split.
  meta_title: 'Citi Commerce Media: Basket Data Versus Spend Data',
  excerpt: "Citi Commerce Media targets advertising with card transaction data and measures outcomes inside the payment relationship. Retailers see the item and the basket. Payment networks see the merchant and the amount. Breadth costs detail.",
  meta_description: DESCRIPTION,
  og_image: '/images/blog/commerce-media-basket-data-spend-data-citi.svg',
  category: 'Digital Marketing',
  tags: ['commerce media', 'retail media', 'Citi', 'payments data', 'first-party data', 'measurement'],
  status: 'published',
  featured: false,
  read_time_minutes: 6,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: false,
    related_posts: ['mcdonalds-media-network-commerce-media-without-marketplace', 'instacart-gopuff-carrot-ads-retail-media-infrastructure', 'amazon-ads-chatgpt-openai-partnership'],
    featured_image_alt: 'Two commerce data structures side by side, one showing deep item and basket detail inside a single retailer and the other showing merchant, amount and category across many merchants',
  },
  published_at: new Date().toISOString(),
  content: `<p>Two commerce media networks launched on September 23. One was a hamburger chain. The other was a bank.</p>

<p>They are missing opposite halves of the same machine.</p>

<h2>What Citi actually launched</h2>

<p>Citi's U.S. Consumer Cards business <a href="https://www.citigroup.com/global/news/press-release/2026/citi-commerce-media-deliver-more-personalized-customer-brand-experiences" ${EXT}>announced Citi Commerce Media</a>, a platform that places advertising across Citi.com, the Citi Mobile app and paid media properties, targeted using first-party transaction data.</p>

<p>The scale is real, and the footnote matters. Citi says it serves more than 70 million U.S. customers as of December 31, 2025, covering general purpose and private label credit cards and installment lending, primarily in the United States. These are cardmembers, not every American who banks with Citi. The company reports 6.5 billion annual transactions across more than 700 spending categories, and its advertiser site puts more than $620 billion of annual spend behind that.</p>

<p>The platform promises audience signals from transaction data, placements across Citi's own properties, and closed-loop measurement to "prove return on ad spending and quantify incremental impact."</p>

<p>Citi also reports results: initial campaigns across retail, payments, technology, and beauty and wellness produced, in its words, "up to 5x incremental return on ad spend for an online retailer."</p>

<h2>What sits under that number</h2>

<p>Citi discloses more method than most companies do, and still not enough to evaluate the claim.</p>

<p>Its <a href="https://commercemedia.citi.com/cbol/commercemedia/default.htm" ${EXT}>advertiser site</a> describes exposure and spend behavior joined through an identity graph, with a test and control methodology. That is better than silence. What it does not include: the advertiser, the campaign size, the flight dates, how the control group was built, the attribution window, or any statement of significance. The phrase is also "up to," which describes a best case among initial campaigns rather than a typical one.</p>

<p>So the honest reading is that 5x is a Citi-reported figure from a Citi-run test, using a method Citi has named but not documented.</p>

<h2>The inverse of the McDonald's problem</h2>

<p>I wrote last week that <a href="/blog/mcdonalds-media-network-commerce-media-without-marketplace">McDonald's has four of the five components</a> a commerce media business needs: identity, transaction history, frequency and surface, with measurement missing, because an insurance advertiser converts somewhere McDonald's cannot observe.</p>

<p>Citi is the mirror image. When a Citi cardmember sees an ad on Citi.com and later buys from that advertiser using a Citi card, Citi can observe the transaction without the merchant sending anything back. The loop closes inside the payment relationship rather than inside a storefront. That is the part McDonald's could not solve, and Citi gets it structurally.</p>

<p>What Citi does not have is the other half. It sees a merchant, an amount, a date and a spending category. It does not see the product. Nothing in Citi's materials claims item-level detail, and a card authorization does not carry one. Citi also sees only what runs on Citi cards.</p>

<p>One network can see the person and the moment but not the outcome. The other can see the outcome but not the product, and only the part of the outcome that runs on its own cards. Even then, what Citi observes is a qualifying transaction after exposure rather than proof that the advertised item was the thing bought.</p>

<h2>Two moats, not one ladder</h2>

<p>This is where commerce media stops being one category with one winner.</p>

<p>Retail and marketplace data is deep and bounded. Inside its own ecosystem a retailer can see search terms, product views, the specific item, the basket it traveled in, the price paid, the promotion that moved it, and the return that followed. That richness ends at the edge of the retailer.</p>

<p>Payment data is broad and thin. It travels across merchants, which is exactly what a retailer's data cannot do, and it reduces every purchase to merchant, amount, category and time. Breadth costs detail.</p>

<p>Neither is better. They answer different questions. A brand launching a product into a crowded category probably wants to know who browsed the shelf and what they compared it against. A brand trying to take share from a competitor probably wants to know who is spending money with that competitor, which is a question no single retailer can answer about its rivals. I would treat those as hypotheses rather than settled media planning, because nobody has published comparative performance across the two structures.</p>

<h2>Citi is not an anomaly</h2>

<p>The pattern is older than this launch. <a href="https://www.paypal.com/us/advertiser/about" ${EXT}>PayPal Ads</a> describes a transaction graph built on 25 billion annual transactions and roughly 400 million active accounts, and sells the cross-merchant view explicitly, onsite across PayPal and Venmo and offsite elsewhere. <a href="https://www.mastercard.com/us/en/news-and-trends/press/2025/october/powering-smarter-and-more-personal-advertising-with-mastercard-commerce-media.html" ${EXT}>Mastercard launched Mastercard Commerce Media</a> a year ago on transactions it processes, around 160 billion in 2024, with 25,000 advertisers, 500 million enrolled consumers and card-linking attribution that works in store as well as online. Mastercard reports up to 22x return on ad spend, which is its own figure, measured its own way.</p>

<p>Mastercard named Citi as a strategic relationship in 2025. Citi launching its own media network a year later is another sign that transaction data itself is becoming a contested asset.</p>

<p>Citi has also <a href="https://www.citigroup.com/global/news/press-release/2026/citi-expands-customer-engagement-commerce-media-capabilities-kard-addition" ${EXT}>agreed to acquire Kard</a>, a commerce media and rewards platform built on verified transaction data and merchant-funded rewards. That deal has not closed, and the companies say they operate independently until it does. What it would add is merchant relationships, which is the part a bank cannot generate from its own balance sheet.</p>

<h2>The part nobody is describing clearly</h2>

<p>Transaction history is among the most sensitive data a consumer produces, and the launch materials treat privacy as an assurance rather than a disclosure.</p>

<p>Citi's materials say the work maintains customer privacy and trust. They do not say whether audiences are opt-in or opt-out, whether targeting is individually personalized or segment-level, what a customer can control, or whether advertisers ever receive underlying records rather than activated audiences. Citibank's consumer privacy notice does confirm that transaction history is collected, that sharing for Citi's own marketing purposes cannot be limited, and that sharing with nonaffiliates to market to you can be. Which of those categories Commerce Media occupies is not stated anywhere I could find.</p>

<p>Mastercard, by contrast, uses the words permissioned and opted-in repeatedly and describes consumers as enrolled. That is a meaningful difference in how two companies describe the same kind of asset, and it is the gap an operator should ask about before spending here.</p>

<h2>The objections</h2>

<p>Citi's 70 million is a card base, and a card base sees a household's card spending rather than its spending. Closed-loop measurement inside a payment network still cannot tell you what specifically was bought. The 5x sits on one undocumented test. And a bank's own properties are not high-intent shopping surfaces the way a retailer's search results are, so the inventory may be worth less even where the data is worth more.</p>

<p>The strongest objection is that this may not be a split at all. Retailers can buy spend data, payment networks can partner for product detail, and the two structures may converge into one market where everyone rents what they lack.</p>

<p>If your advertising currently gets measured inside somebody else's ecosystem, do you actually know whether you are buying the basket or the spend?</p>
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
