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

const DESCRIPTION = 'Kroger appointed a Jet.com founder to run ecommerce. The more useful signal is the 18-month sequence that made the role necessary.'

// Primary sources, cited at the claims they support.
const SRC_FAUST = 'https://ir.kroger.com/news/news-details/2026/Kroger-names-Nate-Faust-Executive-Vice-President-and-Chief-eCommerce-Officer/default.aspx'
const SRC_UNIT = 'https://ir.kroger.com/news/news-details/2025/Kroger-Creates-New-eCommerce-Unit-to-Accelerate-Online-Growth/default.aspx'
const SRC_Q1 = 'https://ir.kroger.com/news/news-details/2026/Kroger-Reports-First-Quarter-2026-Results/default.aspx'
const SRC_INSTACART = 'https://ir.kroger.com/news/news-details/2025/Kroger-and-Instacart-Announce-Expanded-Relationship-Investing-in-AI-to-Simplify-Customer-Experience-Improve-Efficiency/default.aspx'
const EXT = 'target="_blank" rel="noopener noreferrer"'

const post = {
  slug: 'kroger-ecommerce-operating-model',
  title: "Kroger's Ecommerce Reset Is Becoming an Operating Model",
  excerpt: "Nate Faust's appointment is the latest step in an eighteen-month sequence, not the first. Kroger has built a dedicated ecommerce unit, reset fulfillment toward stores, expanded delivery partnerships, and reached ecommerce profitability including media. The remaining question is whether those parts operate as one system.",
  meta_title: "Kroger's Ecommerce Reset Is Becoming an Operating Model",
  meta_description: DESCRIPTION,
  og_image: '/images/blog/kroger-ecommerce-operating-model.svg',
  category: 'E-commerce Strategy',
  tags: ['Kroger', 'grocery ecommerce', 'store-based fulfillment', 'retail media', 'omnichannel', 'ecommerce operating model'],
  status: 'published',
  featured: false,
  read_time_minutes: 7,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: false,
    related_posts: ['kroger-ecommerce-profitability', 'walmart-grocery-ecommerce-growth', 'retailers-ai-traffic-customer-ownership'],
    featured_image_alt: 'A grocery store network operating as connected ecommerce fulfillment infrastructure rather than as separate projects',
  },
  published_at: '2026-08-17T13:00:00.000Z',
  content: `<p>On August 11, Kroger <a href="${SRC_FAUST}" ${EXT}>announced that Nate Faust will join as Executive Vice President and Chief eCommerce Officer</a>, effective September 1, 2026.</p>

<p>Personnel announcements are usually the least interesting thing a retailer publishes. This one is worth reading closely, not for the appointment but for what the choice of person implies about the problem Kroger thinks it has.</p>

<p>Faust co-founded Jet.com, where Kroger's release says that as Chief Operating Officer he "led first-party merchandising, replenishment, fulfillment, and customer service." After Walmart acquired Jet.com, he became Senior Vice President of Walmart U.S. eCommerce Supply Chain, where Kroger says he "led a multi-year transformation of the customer delivery experience." That is not a digital marketing resume. It is a supply chain and operations resume that happens to sit inside ecommerce.</p>

<p>Greg Foran, Kroger's CEO, framed the mandate in similar terms, describing the standard as "speed, value and the experience of getting exactly what the customer ordered." Order accuracy is an odd thing to headline if you think your problem is demand generation. It is the obvious thing to headline if you think your problem is execution.</p>

<h2>The appointment is the latest step in a sequence, not the first</h2>

<p>Kroger has been rebuilding this for about eighteen months, and the appointment reads differently at the end of that line than at the start of one.</p>

<p>In March 2025, Kroger <a href="${SRC_UNIT}" ${EXT}>created a dedicated ecommerce business unit</a>, describing it as aligning "the teams contributing to every aspect of the online customer experience," with Yael Cosset leading it as Chief Digital Officer. Ecommerce sales were $13 billion in 2024. Then came the fulfillment reset, which I wrote about <a href="/blog/kroger-ecommerce-profitability">when Kroger began closing Ocado-powered fulfillment centers</a> and shifting toward stores, automation where density justified it, and third-party delivery.</p>

<p>That reset is easy to caricature. Kroger did not abandon automated fulfillment. It still operates Ocado-powered facilities in several states while cancelling others, moving to what it calls a hybrid model. The reset was not simply automation versus stores. It was how much of the network should depend on large centralized facilities that need order density many markets do not have.</p>

<p>Layer on the expanded Instacart relationship in November 2025, third-party delivery through Instacart, DoorDash and Uber Eats, and now a dedicated ecommerce executive, and the sequence starts to look deliberate rather than reactive.</p>

<h2>The store network is the part that is hard to copy</h2>

<p>The most revealing line in the announcement came from Faust, who said Kroger has "deep customer relationships, unmatched loyalty data and a footprint that puts us closer to customers."</p>

<p>Read that as an operator, not a press release. He did not describe stores as a cost base to work around. He described proximity as the asset.</p>

<p>Grocery makes that argument better than most categories. Purchase frequency is high, baskets are perishable, substitutions happen in real time, and the acceptable delivery window is measured in hours rather than days. Those constraints punish inventory sitting far from the customer and reward physical density. Kroger already owns density a digital-native competitor would need a decade and enormous capital to build.</p>

<p>Owning that density and operating it as one connected network are different achievements, and only the first one is finished.</p>

<h2>The difference between projects and an operating model</h2>

<p>This is my interpretation rather than anything Kroger has claimed.</p>

<p>Everything in the sequence above can be described as a project. Open a fulfillment center. Sign a delivery partner. Stand up a business unit. Launch an AI assistant. Each has a start date, an owner, and a success metric, and a company can complete all of them and still not have a coherent ecommerce business.</p>

<p>An operating model is a different thing. It decides which node fills which order and why. It knows where inventory actually is, at the shelf, not in theory. It routes based on cost to serve and promised service level rather than on which facility has capacity. It treats a partner's economics as an input to that routing rather than as an outsourcing decision made once. It connects loyalty data to personalization and to merchandising rather than to a marketing calendar.</p>

<p>Projects can be delivered in parallel by separate teams. An operating model requires those teams to trade off against each other continuously, with someone accountable for the result. That is the most plausible reason to create this role and fill it with an operator.</p>

<h2>Why the economics changed what leadership can optimize for</h2>

<p>The financial disclosures matter here, and three different things get blurred together.</p>

<p>In its <a href="${SRC_Q1}" ${EXT}>first quarter of 2026</a>, Kroger reported that adjusted eCommerce sales grew 19%, and separately that Kroger Precision Marketing profit grew over 20%. Note that the retail media figure is profit growth, not sales growth. On Kroger's first-quarter earnings call, management said ecommerce, including media, had reached profitability for the first time and ahead of schedule. Reporting on the quarter also notes that Kroger includes retail media in how it computes ecommerce performance.</p>

<p>That qualifier is not a footnote. Ecommerce sales growth, ecommerce profitability, and ecommerce-plus-media profitability are three separate claims, and only the third is the one Kroger made. I am not in a position to say whether the fulfillment and delivery operation would be profitable on its own, and Kroger has not disclosed it.</p>

<p>What the milestone does change is the range of things leadership can now argue about. A digital business that grows quickly while destroying margin can only be defended as an investment, and investments get managed by whoever controls the budget. A business that covers its own costs can be optimized for service level, speed, and share. That is a different conversation, and a more natural one to hand to an operator.</p>

<p>Retail media is also why a digital order is worth more than the margin on the groceries. It produces shopper data, ad inventory and loyalty engagement too. That does not mean media alone carries the economics, and Kroger has not said it does.</p>

<h2>AI is a layer, not the strategy</h2>

<p>Kroger's AI work sits mostly inside the <a href="${SRC_INSTACART}" ${EXT}>expanded Instacart relationship</a>, which made Instacart its primary delivery fulfillment partner across nearly 2,700 stores and put Instacart's Cart Assistant into Kroger's iOS app.</p>

<p>Note whose technology that is. Kroger is deploying a partner's assistant on top of its own inventory, pricing, promotions and loyalty history. A reasonable trade, and the same pattern I keep running into: <a href="/blog/ai-wont-fix-broken-work">an assistant is only as good as the operation underneath it</a>. If substitutions are wrong and availability data is stale, a conversational interface surfaces those failures faster.</p>

<h2>The honest counterargument</h2>

<p>Grocery ecommerce has humbled better-capitalized companies, and none of this is proof yet.</p>

<p>Store-based fulfillment moves cost rather than removing it. Picking in a live store competes with customers for aisle space and with labor budgets for hours, and it gets harder as volume grows, which is the opposite of how automation scales. Large automated facilities may still win in dense markets, which is presumably why Kroger kept several.</p>

<p>Third-party delivery is the sharper tradeoff. It bought Kroger reach and speed quickly, but it puts a partner between the retailer and the customer at the moment of fulfillment, which is <a href="/blog/retailers-ai-traffic-customer-ownership">the same tension retailers are working through in AI shopping</a>. Faust's own emphasis on loyalty data suggests Kroger knows the difference between renting distribution and owning a relationship.</p>

<p>And one quarter of profitability, achieved partly through closures and partly with media included, is a milestone rather than a trend. Walmart spent years turning its store network into a fulfillment advantage, a pattern I looked at in <a href="/blog/walmart-grocery-ecommerce-growth">its grocery ecommerce growth</a>, and that took sustained execution rather than a reorganization. A leadership change does not guarantee any of it.</p>

<h2>What I am actually watching</h2>

<p>Foran ran Walmart U.S. from 2014 to 2019, and Faust was at Walmart for part of that period, which Faust acknowledged by saying he could not pass up the chance to "work alongside Greg again." Kroger has not said the Walmart history is why he was hired, and I will not claim it was. The operational parallel matters more than the personal one anyway, and Kroger hired someone who has already made a large store network behave like fulfillment infrastructure.</p>

<p>So the question is no longer whether Kroger can build another digital capability. It has built most of them. It is whether thousands of stores, years of loyalty data, delivery partners, selective automation and a partner's AI assistant can be coordinated into one system rather than a portfolio of working parts.</p>

<p>If Kroger has already assembled every component it needs, what would tell us in a year whether it is running an operating model or still running projects?</p>
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
