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

const DESCRIPTION = "Walmart says its AI will not use income, history or urgency to set your price, or hide cheaper options. The new governance question is which data may decide."

const EXT = 'target="_blank" rel="noopener noreferrer"'

const post = {
  slug: 'walmart-sparky-ai-personalization-pricing-governance',
  // Editorial H1 (renders on page, and as JSON-LD headline)
  title: 'AI Commerce Governance Is Becoming a Customer Promise',
  // Query-aligned search title (drives <title>, OG and Twitter). Deliberate split.
  meta_title: 'Walmart Sparky and the New Rules of AI Personalization',
  excerpt: "Walmart committed publicly that income, shopping history, urgency and estimated ability to pay will not set a price, and that Sparky will not hide cheaper options. The governance question is shifting from what an agent may do to which data may influence which decision.",
  meta_description: DESCRIPTION,
  og_image: '/images/blog/walmart-sparky-ai-personalization-pricing-governance.svg',
  category: 'Digital Transformation',
  tags: ['AI governance', 'personalized pricing', 'Walmart', 'Sparky', 'personalization', 'FTC'],
  status: 'published',
  featured: false,
  read_time_minutes: 6,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: false,
    related_posts: ['walmart-sparky-35-percent-higher-aov', 'amazon-rufus-account-memory', 'ant-international-account-for-agent-merchant-operations'],
    featured_image_alt: 'A shopping assistant holding customer context on one side and a price decision on the other, with a barrier marking which signals are not allowed to cross',
  },
  published_at: new Date().toISOString(),
  content: `<p>Most AI permissions are written as capabilities. The assistant may recommend, may build a cart, may reorder, may apply an offer.</p>

<p>On September 25, Walmart published a <a href="https://corporate.walmart.com/about/everyday-affordability/letter-from-our-ceo" ${EXT}>customer letter</a> written the other way round. It lists things its AI is not allowed to do with information it legitimately holds.</p>

<h2>What Walmart actually committed to</h2>

<p>John Furner's letter restates Every Day Low Prices and then draws a line: "using someone's income, shopping history or moment of need to charge them more would violate the EDLP promise our business model is built on. We won't do it." The sentence that will travel is shorter. "We price the product, not the person."</p>

<p>Three commitments follow. Walmart does not set different prices based on who you are or the time of day, and income, shopping history, urgency or "what we think you could pay" will not change the price. It will not use information shared with Sparky "or otherwise" to raise your price or hide lower-priced options that meet your needs. Customers decide whether to share additional details. The letter closes with people continuing to oversee pricing, and a commitment to monitor and test the technology against these commitments.</p>

<p>The digital shelf label passage is the opposite of what a skeptic expects. Furner explains the labels as price accuracy and associate labor, a shelf price matching what rings up and paper tags nobody enjoys changing. No pricing-flexibility argument is made for them.</p>

<h2>The distinction that makes this interesting</h2>

<p>There are two governance questions inside any AI commerce system, and the industry mostly discusses the first.</p>

<p>Action permission asks what the agent may do. Buy, refund, reorder, negotiate, spend up to a limit. That is the question <a href="/blog/ant-international-account-for-agent-merchant-operations">agent identity and scoped authority work</a> has been answering for a year.</p>

<p>Data-use permission asks something else. Given information the company legitimately holds, it asks which decisions that information is forbidden to influence. Walmart has answered that one publicly, and the answer is narrow and specific: income, shopping history, urgency and estimated ability to pay may not determine your price.</p>

<p>Both are permissions. Only the second one constrains a model's inputs rather than its outputs.</p>

<h2>Negative permissions</h2>

<p>The idea is not new. Purpose limitation has been in privacy law for years: data collected for one purpose should not be used for another. What is new is where the constraint attaches. Not to a data pipeline or a retention schedule, but to a decision a model makes in the moment, using context the customer volunteered a sentence earlier.</p>

<p>That is why I would call these negative permissions, and why the term is worth keeping separate from access control. The access question was settled when the customer told Sparky about a dietary restriction or a tight week. The governance question is what the system may conclude from it. Walmart is not saying it will avoid knowing things. It is saying certain knowledge will not be allowed to reach certain decisions.</p>

<p>The most important AI permissions may eventually be the negative ones.</p>

<h2>The paradox this exists to manage</h2>

<p><a href="/blog/amazon-rufus-account-memory">Persistent shopper context makes assistants better</a> at almost everything that matters: relevance, dietary matching, reorder quality, budget help, household nuance. Walmart's own case for Sparky depends on it.</p>

<p>The uncomfortable part is that the same context supports a different class of inference. A system that knows enough to help someone shop carefully also knows enough to estimate what they might tolerate paying and when they are in a hurry. The data that makes an agent better at serving a customer can also make it better at extracting from that customer.</p>

<p>I am not alleging anyone does this. The point is architectural. Capability arrives before policy, and the policy has to be written against the capability rather than against the intent.</p>

<h2>The commitment almost everyone will skim past</h2>

<p>Walmart did not only promise identical prices. It promised Sparky will not hide lower-priced options that meet your needs.</p>

<p>That is a different kind of rule, and it may be the more consequential one. A shelf is browsed. A conversation is generated. When an assistant returns three suggestions instead of forty results, the consideration set is an output of the system, and the economics of a purchase can shift through what appears without a single price changing. Price parity is not economic neutrality.</p>

<p>Identical prices and neutral surfacing are separate promises. Walmart made both, which suggests somebody understood where conversational commerce creates exposure.</p>

<h2>Why a letter rather than a disclosure</h2>

<p>The regulatory backdrop makes the choice legible. The Federal Trade Commission <a href="https://www.ftc.gov/system/files/ftc_gov/pdf/p034101-ftc-enforcement-policy-statement-re-personalized-pricing-proposed-for-public-comment.pdf" ${EXT}>proposed an enforcement policy statement on personalized pricing</a> on August 19, and its <a href="https://www.ftc.gov/news-events/news/press-releases/2026/09/ftc-extends-public-comment-proposed-policy-statement-regarding-personalized-pricing" ${EXT}>comment period closed on September 25</a>, the day Walmart published. The FTC defines the practice as setting prices from analysis of personal data, including estimates of how much someone is willing to pay. It states plainly that Congress has not given it authority to prohibit personalized pricing in all circumstances, and it puts its weight behind disclosure: businesses should clearly disclose that a price is personalized, its basis, and the data behind it. The statement is proposed, not final, and it says it does not bind the FTC or the public.</p>

<p>So the regulatory direction is toward telling customers when a price is personal. Walmart's letter instead says certain personalizations will not happen. That is a stronger promise and a different instrument, and it is unaudited and voluntary, which is exactly what a brand promise is.</p>

<p>That is the part operators should notice. <a href="/blog/walmart-sparky-35-percent-higher-aov">Sparky is commercially significant enough</a> that its rules are a product decision rather than a compliance memo. Return policies, price guarantees and security commitments all began as operations and became reasons customers picked one retailer. Promises about what an agent will not do with what it knows look like the next entry on that list.</p>

<h2>What an operator has to decide</h2>

<p>The useful exercise is not an ethics checklist but a table, and this framing is mine.</p>

<p>For each type of customer data, name the decisions it may influence, the decisions it must never influence, who approves an exception, and how you would prove the rule held. Most companies can answer the first column. Almost none can answer the last two, which are the ones a regulator, a journalist or a customer would actually test.</p>

<h2>The objections</h2>

<p>Several are serious. This is a voluntary promise with no published enforcement mechanism, and the letter describes monitoring and testing without detailing either. Personalized discounts often benefit shoppers, and treating all individualized pricing as extraction is lazy. Dynamic pricing, personalized promotions and personalized pricing are three different things, and collapsing them produces bad analysis. A cheaper item is not always the better recommendation, and the rule still requires judgment about what meets a customer's needs. Data-use restrictions can make personalization worse, which customers notice too.</p>

<p>And a voluntary promise made in a letter is strongest when the alternative is expensive. If the FTC statement lands as proposed, disclosure becomes the floor, and a company that has already promised more has less to disclose.</p>

<p>If someone asked you to prove that a particular customer signal never influenced a particular pricing decision, could you?</p>
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
