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

const DESCRIPTION = "Amazon's Q2 metrics tie its shopping assistant to order value, Prime signups, ads, and an AWS product. What the numbers reveal, and what they cannot prove."

// Official Amazon sources, cited at the claims they support.
const SRC_Q2 = 'https://ir.aboutamazon.com/news-release/news-release-details/2026/Amazon-com-Announces-Second-Quarter-Results/'
const SRC_STORES = 'https://www.aboutamazon.com/news/company-news/amazon-ceo-andy-jassy-stores-growth-ai-shopping-q2-2026-earnings'
const SRC_ADS = 'https://www.aboutamazon.com/news/company-news/amazon-ceo-andy-jassy-amazon-ads-growth-q2-2026-earnings'
const SRC_AWS = 'https://www.aboutamazon.com/news/aws/aws-agentic-shopping-assistant-retailers'
const SRC_ALEXA = 'https://www.aboutamazon.com/news/retail/alexa-for-shopping-ai-assistant'
const EXT = 'target="_blank" rel="noopener noreferrer"'

const post = {
  slug: 'amazon-ai-shopping-business-model',
  title: 'Amazon Is Revealing the Business Model Behind AI Shopping',
  excerpt: "Amazon's Q2 disclosures moved past usage metrics. The assistant is now attached to order value, Prime signups, advertising performance, and an AWS product sold to other retailers. That combination is the strategy.",
  meta_title: 'Amazon Is Revealing the Business Model Behind AI Shopping',
  meta_description: DESCRIPTION,
  og_image: '/images/blog/amazon-ai-shopping-business-model.svg',
  category: 'E-commerce Strategy',
  tags: ['Alexa for Shopping', 'Amazon advertising', 'agentic commerce', 'AI shopping economics', 'Prime'],
  status: 'published',
  featured: false,
  read_time_minutes: 7,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: false,
    related_posts: ['rufus-sparky-ai-revenue-impact', 'amazon-ai-walled-garden', 'walmart-sparky-sponsored-prompts-ads'],
    featured_image_alt: 'Amazon connecting its AI shopping assistant to transactions, membership, advertising, and infrastructure',
  },
  published_at: '2026-08-01T19:00:00.000Z',
  content: `<p>For two years, the story about AI shopping assistants has been a story about usage. How many people tried it, how many questions they asked, how fast adoption climbed.</p>

<p>Amazon's second quarter disclosures are more interesting, and not because the usage numbers got bigger. They did. The consequential part is that Amazon has started attaching the assistant to money: what customers spend per order, whether they join Prime, and how ads perform in conversational surfaces. That is a different kind of disclosure, pointing at a different kind of strategy.</p>

<h2>What Amazon actually reported</h2>

<p>The engagement figures are the least surprising part. Amazon says it brought Rufus and Alexa+ together into Alexa for Shopping, an agentic AI shopping assistant. Andy Jassy <a href="${SRC_STORES}" ${EXT}>reported that over 350 million customers used it in the last 12 months</a>, with active users nearly doubling in Q2 and interactions up over 5x year over year.</p>

<p>The economic figures are new in kind rather than degree. In the <a href="${SRC_Q2}" ${EXT}>Q2 release</a>, Amazon states that in the U.S., customers who use Alexa for Shopping "spend an average of over 40% more per order than those who don't," and customers who have tried Alexa+ "are signing up for Prime at a nearly 25% higher rate."</p>

<p>Two things to hold onto. These are Amazon-reported figures, not independently audited ones. And Alexa for Shopping brings together Rufus and Alexa+ capabilities, but the two figures still refer to different user groups: the order-value comparison concerns Alexa for Shopping users, while the Prime comparison concerns people who tried Alexa+.</p>

<h2>The first loop: larger transactions</h2>

<p>Amazon reports a U.S. association. Customers who use the assistant spend more per order than those who do not. It does not follow that the assistant produced the difference. People who adopt a new Amazon feature early tend to already shop there most, and larger purchases are exactly where someone wants comparisons and price history first. Either pattern produces the same headline without the assistant causing anything.</p>

<p>The strategic logic is visible in <a href="${SRC_ALEXA}" ${EXT}>the product</a>. Alexa for Shopping holds a year of price history, sets price alerts, builds carts, reorders essentials, schedules routine purchases, and can buy automatically at a set price. Each keeps the assistant present at a different point in the decision rather than only at the search box, and an interface involved in more of the decision has more opportunity to shape the basket. That is a reasonable hypothesis, and it remains one.</p>

<h2>The second loop: membership</h2>

<p>The Prime figure works differently, and it is the more strategically revealing of the two.</p>

<p>Alexa+ is not only a shopping product. It spans devices, entertainment, home, and everyday tasks, and Amazon has been expanding it into more countries. So when U.S. customers who tried Alexa+ sign up for Prime at a nearly 25% higher rate, the assistant is functioning less as a store feature and more as an on-ramp into the membership that organizes everything else.</p>

<p>The same caution applies. This is an association among people who chose to try Alexa+, a group likely skewing toward customers already deep in Amazon's ecosystem. Set causality aside and the strategy's shape is still clear. AI can make the membership feel more valuable, and the membership gives people more reasons to use the AI.</p>

<h2>The third loop: advertising</h2>

<p>Amazon <a href="${SRC_ADS}" ${EXT}>reported approximately $19.8 billion in advertising services revenue</a> in Q2, up 26% year over year. Nothing in Amazon's disclosures attributes that growth to Alexa for Shopping, and it would be wrong to imply otherwise.</p>

<p>The relevant development is narrower. Amazon says more shoppers are discovering products in its agentic and conversational experiences, and it has begun reporting on Sponsored Prompts: shoppers who click one "convert to a sale 48% more often and spent 21% more on average than those who don't."</p>

<p>Read that comparison carefully. Clicking an ad is already a strong signal of intent, so a group defined by having clicked will almost always outperform one defined by not clicking. The figure describes a high-intent population, not a lift caused by the format. Walmart is testing <a href="/blog/walmart-sparky-sponsored-prompts-ads">the same idea inside Sparky</a>, which suggests the format matters to both regardless of what early numbers prove.</p>

<p>The durable question is structural. If keyword search becomes less central to discovery, conversational surfaces are where high-intent moments migrate. Amazon does not need proof of incremental lift to want that inventory early.</p>

<h2>The fourth loop: selling the infrastructure</h2>

<p>The piece that ties it together has nothing to do with Amazon.com.</p>

<p>AWS has <a href="${SRC_AWS}" ${EXT}>packaged what Amazon learned into an offering for other retailers</a>, described as architecture guidance, starter code, and support from AWS experts, and explicitly "inspired by learnings from Amazon's Alexa for Shopping." In that announcement, Amazon states its AI shopping assistant "drove nearly $12 billion in incremental sales for Amazon last year alone."</p>

<p>That number deserves a flag. It is Amazon's own attribution, published in a document meant to persuade retailers to build on AWS. Amazon has not disclosed how incrementality was measured, which is the entire question with a figure like that. Attributing sales to an assistant sitting mid-journey is difficult, and the method matters more than the total, as I found examining <a href="/blog/rufus-sparky-ai-revenue-impact">earlier assistant revenue claims</a>.</p>

<p>Set the number aside and the position is still notable. Amazon can benefit from AI shopping as the retailer running an assistant and as the vendor selling the means to build one. Competitors adopting the second option create another revenue stream from capabilities Amazon first developed for its own retail business.</p>

<h2>The system is the argument</h2>

<p>Amazon is not monetizing AI shopping through one transaction. It is connecting the assistant to commerce, membership, advertising, and infrastructure. Larger baskets, stronger membership, new ad inventory, and an AWS product built from the same learning.</p>

<p>This is why the assistant does not need a subscription fee to justify itself. A conventional feature is judged on the revenue it produces or the cost it removes. A platform-level assistant is judged on whether it improves the economics of several connected businesses at once, a lower bar for any single loop and a harder position to copy. It fits the pattern of <a href="/blog/amazon-ai-walled-garden">Amazon keeping shopping inside its own walls</a>.</p>

<h2>What this means for retailers and brands</h2>

<p>For retailers, the lesson is not that you need an assistant. It is that an assistant needs an economic role before it needs an interface. Amazon can afford one because it owns marketplace data, membership, advertising, payments, and fulfillment, and the assistant touches all of them. A retailer holding one or two of those pieces gets very different economics.</p>

<p>For brands, discovery and advertising draw on the same inputs. Product data quality feeds what an assistant says organically and what it supports in a sponsored placement, a pattern I described in <a href="/blog/product-data-shared-infrastructure-google-ai-mode">product data becoming shared infrastructure</a>. Two things get harder: separating visibility you earned from visibility you bought, and attributing a sale when the assistant touched four steps before it.</p>

<h2>What the numbers cannot settle</h2>

<p>Everything above rests on figures Amazon chose to publish about itself.</p>

<p>Amazon has not disclosed the methodology behind the nearly $12 billion claim. The order-value and Prime comparisons are almost certainly subject to selection effects, since customers who try new features are not a random sample. Higher order value is not higher profit, and Amazon has said nothing about margin. Prime signups among Alexa+ users may owe more to entertainment and devices than to shopping. Sponsored Prompt clickers were intent-rich before they clicked. And Amazon has not broken out what conversational surfaces contribute to ad revenue.</p>

<p>None of that makes the numbers empty. Doubling active users and a fivefold rise in interactions are real signals of behavior change. What they do not establish is durable habit, satisfaction, or profitability. Early engagement growth is easier to produce than durable shopping habit, especially when a new experience builds on an existing customer base.</p>

<h2>Where this leaves me</h2>

<p>The shift worth watching is not that Amazon built a good assistant. It is that Amazon has stopped describing it as a customer experience feature and started describing it as an economic one, with numbers attached to spending, membership, advertising, and now infrastructure.</p>

<p>Which raises a question Amazon has not answered, and may not need to. If an AI shopping assistant touches the transaction, the membership, the advertisement, and the infrastructure underneath them, which part of the business should get credit for its value?</p>
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
