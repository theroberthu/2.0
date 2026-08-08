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

const DESCRIPTION = 'Retailers won the checkout back from AI assistants. Discovery did not come back. Why gaining the sale and owning the customer are no longer the same thing.'

// Primary sources, cited at the claims they support.
const SRC_REUTERS = 'https://www.reuters.com/business/retail-consumer/retailers-tap-ai-shopping-traffic-fight-keep-customer-data-2026-08-07/'
const SRC_OPENAI = 'https://openai.com/index/powering-product-discovery-in-chatgpt/'
const SRC_ULTA = 'https://www.googlecloudpresscorner.com/2026-04-22-Ulta-Beauty-and-Google-Introduce-Gemini-Enabled-Shopping-Experiences-That-Streamline-Beauty-Discovery-and-Purchase'
const SRC_UCP = 'https://ucp.dev/'
const EXT = 'target="_blank" rel="noopener noreferrer"'

const post = {
  slug: 'retailers-ai-traffic-customer-ownership',
  title: 'Retailers Want AI Shopping Traffic. They Do Not Want to Lose the Customer.',
  excerpt: 'AI assistants send retailers high-intent shoppers who have already described a need, weighed alternatives, and narrowed the field. The retailer gets the order. The assistant keeps the reasoning that produced it. That separation is the real strategic question in agentic commerce.',
  meta_title: 'Retailers Want AI Shopping Traffic. They Do Not Want to Lose the Customer.',
  meta_description: DESCRIPTION,
  og_image: '/images/blog/retailers-ai-traffic-customer-ownership.svg',
  category: 'E-commerce Strategy',
  tags: ['agentic commerce', 'customer data', 'retail media', 'Universal Commerce Protocol', 'AI shopping assistants'],
  status: 'published',
  featured: false,
  read_time_minutes: 6,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: false,
    related_posts: ['chatgpt-shopping-pullback-sellers', 'amazon-ai-walled-garden', 'walmart-sparky-chatgpt-gemini'],
    featured_image_alt: 'A retailer receiving the transaction while an AI assistant retains the discovery conversation that produced it',
  },
  published_at: '2026-08-08T14:00:00.000Z',
  content: `<p><a href="${SRC_REUTERS}" ${EXT}>Reuters reported on August 7</a> that retailers are working to rank inside chatbot answers while resisting the part of the arrangement that would hand over their customer data. The line that stayed with me came from Josh Friedman, Ulta Beauty's head of digital and e-commerce, who told Reuters that "there's always a tax for engaging customers on other people's platforms. I don't think this is any different."</p>

<p>That is not a nervous statement. It is an experienced one. Retailers have paid this tax before, to search engines, to affiliate networks, to social platforms, to marketplaces. What has changed is what the tax is denominated in.</p>

<h2>The traffic is genuinely good</h2>

<p>Start with the case for saying yes, because it is strong.</p>

<p>Reuters, citing Adobe Analytics, reported that 41% of U.S. consumers used generative AI for online shopping in June and that AI-referred visitors generated 41% higher revenue per visit than traffic from traditional channels. Juniper Research expects shoppers to spend $8 billion this year after AI agents direct them to retail sites. Ulta told Reuters it sees double the conversion and intent from shoppers who find its products through Gemini and ChatGPT.</p>

<p>Those are the numbers of a channel that arrives pre-qualified. Someone who lands on a product page from an assistant has usually described a need, considered alternatives, and narrowed the field before the retailer ever sees them.</p>

<p>Read that sentence again, because it explains both why the channel is attractive and why it is uncomfortable. The assistant did the narrowing.</p>

<h2>What came back, and what did not</h2>

<p>There is a version of this story where retailers already won.</p>

<p>In March, OpenAI ended Instant Checkout and said it would <a href="${SRC_OPENAI}" ${EXT}>let merchants use their own checkout experiences while it focused its efforts on product discovery</a>. I read that at the time as <a href="/blog/chatgpt-shopping-pullback-sellers">good news for sellers</a>, and on the transaction economics I still think that was right. The checkout came back to the retailer, along with the order, the payment relationship, and the post-purchase experience.</p>

<p>The part that is easy to miss is that discovery did not come back. OpenAI did not retreat from commerce. It kept the half that compounds.</p>

<h2>Two kinds of knowledge</h2>

<p>It helps to separate what each side actually accumulates.</p>

<p>A retailer knows its catalog: what is available, at what price, with what attributes, in what quantity. After the order, it knows what this person bought, when, and for how much. That is real and it is valuable.</p>

<p>An assistant that handled the conversation knows something different. It knows what the shopper was trying to accomplish, what they ruled out and why, what they said about budget, who the item was for, which constraint mattered most, and what they asked about three weeks ago. None of that appears in an order record.</p>

<p>A purchase history tells you what someone chose. It does not tell you what they were choosing between.</p>

<p>That distinction is the whole issue. The retailer can complete the transaction, run the loyalty program, and still be the party with the thinner understanding of the customer. If that holds at scale, the retailer becomes the fulfillment endpoint while the assistant becomes the system that understands the shopper. I want to be careful here: this is my interpretation of where the incentives point, not an established outcome.</p>

<h2>Why the biggest players behave differently</h2>

<p>Amazon and Walmart are both making moves that suggest the conversation itself has strategic value, though they are approaching it differently.</p>

<p>Amazon has kept outside agents out and runs its own assistant inside its own walls, a pattern I traced when it <a href="/blog/amazon-ai-walled-garden">blocked one agent and expanded merchant access in the same week</a>. Walmart took the other route and put <a href="/blog/walmart-sparky-chatgpt-gemini">Sparky inside ChatGPT and Gemini</a> rather than letting those platforms mediate its customers directly. Own the agent, rent the distribution.</p>

<p>Different postures, same instinct. Both are trying to keep the interpretive layer in-house, because that layer feeds advertising, membership, merchandising, and replenishment at once.</p>

<p>The uncomfortable part for everyone else is that this option is a function of scale. Amazon and Walmart can afford assistants because they have enough demand, data, and ad revenue to justify one.</p>

<h2>The exposure decision</h2>

<p>Ulta is the more instructive case, because it is not choosing between open and closed.</p>

<p>In April, Ulta and Google <a href="${SRC_ULTA}" ${EXT}>announced two things at the same time</a>. Ulta's assortment became shoppable inside AI Mode and the Gemini app, powered by the Universal Commerce Protocol. Ulta also launched Ulta AI, its own shopping assistant built on Gemini Enterprise, drawing on insights from what Google's release describes as Ulta's 46 million or more loyalty members.</p>

<p>Read together, that is a decision about layers rather than a decision about access. Ulta exposed its catalog to where discovery is happening. It kept the customer model on its own property, attached to a loyalty program it already owns.</p>

<p>I do not think the durable question is whether to let AI systems in. It is which layer you expose: catalog, inventory, pricing, checkout, or the accumulated understanding of the shopper. Those are separable, and they are worth very different amounts.</p>

<h2>What this does to retail media</h2>

<p>Retail media is the part of the P&amp;L most exposed to this, and it is worth stating carefully.</p>

<p>Retail media revenue depends on shoppers browsing and searching on the retailer's own surfaces, because that is where the impressions live. If more of the consideration phase happens inside an assistant, some of that inventory has to move with it. Amazon and Walmart are already testing sponsored placements inside conversational surfaces, which suggests neither expects the current arrangement to hold unchanged.</p>

<p>This does not mean retail media shrinks. It may simply relocate, and the retailers with their own assistants are better positioned if it does.</p>

<h2>The honest counterargument</h2>

<p>There is a real case that this concern is overstated.</p>

<p>Retailers have never owned the full journey. Google, affiliates, review sites, and marketplaces have all sat upstream of the transaction for years, and retailers built substantial businesses anyway. An AI referral that converts at a higher rate may be worth more than the upstream signal it costs, and a channel reaching people who never would have visited is additive rather than substitutive.</p>

<p>The protocols also push back. <a href="${SRC_UCP}" ${EXT}>UCP states</a> that businesses "retain control and remain the Merchant of Record, with full ownership of customer relationships," and Amazon's decision to <a href="/blog/amazon-joins-universal-commerce-protocol">join the governance body it had resisted</a> suggests the standard has real weight. Etsy's Rafe Colburn told Reuters that an order arriving from ChatGPT is "the start of a deeper relationship, and not just one that's always intermediated by ChatGPT," which is a fair description of how a first purchase can work.</p>

<p>Most importantly, customer ownership is not binary. A retailer that captures the order, the email, the loyalty enrollment, and the replenishment cycle holds a great deal, whatever happened upstream.</p>

<p>Here is where I would still press. The UCP materials I reviewed are explicit about transaction-side control: the merchant remains Merchant of Record and retains ownership of the customer relationship and transaction data. They are much less explicit about what conversational context an AI platform may retain before the order reaches the merchant. That is not an accusation of bad faith. It is an unsettled part of a young standard, and it happens to be the part this article is about.</p>

<h2>The distinction worth keeping</h2>

<p>Winning the transaction and owning the relationship used to be the same achievement. For most of e-commerce history, the customer who checked out on your site had also browsed on your site, so the order arrived with its own explanation attached.</p>

<p>Those two things are now separable, and this year they visibly separated. Retailers got the checkout back while the assistant kept the conversation. A retailer can gain the sale and still lose part of the customer.</p>

<p>If the assistant knows why the customer bought and the retailer only knows what they bought, which one is holding the relationship?</p>
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
