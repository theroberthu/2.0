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

const DESCRIPTION = 'Stripe predicts checkout pages go away. The page was only ever a data collection device. What still has to execute, and what retailers lose.'

// Primary sources, cited at the claims they support.
const SRC_A16Z = 'https://podcasts.apple.com/us/podcast/stripes-ai-strategy-build-more-not-less/id842818711?i=1000783813183'
const SRC_SPT = 'https://docs.stripe.com/agentic-commerce/concepts/shared-payment-tokens'
const SRC_LESSONS = 'https://stripe.com/blog/10-lessons'
const SRC_USECASE = 'https://stripe.com/use-cases/agentic-commerce'
const EXT = 'target="_blank" rel="noopener noreferrer"'

const post = {
  slug: 'ai-checkout-interface-commerce-infrastructure',
  title: 'If Checkout Disappears, What Does the Retailer Still Own?',
  excerpt: "Stripe's president says checkout pages could disappear once agents do the buying. His own example keeps the shopper on the merchant's product page. The page was always just the interview that collected missing inputs, and when an agent already holds them the interface has little left to do. None of the work behind it goes anywhere.",
  meta_title: 'If Checkout Disappears, What Does the Retailer Still Own?',
  meta_description: DESCRIPTION,
  og_image: '/images/blog/ai-checkout-interface-commerce-infrastructure.svg',
  category: 'E-commerce Strategy',
  tags: ['Stripe', 'agentic commerce', 'checkout', 'payments infrastructure', 'merchant of record', 'customer ownership'],
  status: 'published',
  featured: false,
  read_time_minutes: 6,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: false,
    related_posts: ['retailers-ai-traffic-customer-ownership', 'who-pays-when-ai-agents-fail', 'amazon-joins-universal-commerce-protocol'],
    featured_image_alt: 'A checkout interface disappearing while the commerce system beneath it continues to execute',
  },
  published_at: '2026-08-25T13:00:00.000Z',
  content: `<p>On <a href="${SRC_A16Z}" ${EXT}>an a16z podcast released August 17</a>, Stripe's Will Gaybrick argued that checkout pages could disappear as agentic commerce develops.</p>

<p>Much of the coverage rendered that as checkout pages will go away. a16z's own description of the episode is more careful, saying they "could disappear," and Gaybrick's actual example is more interesting than either summary: "It's been very easy to get through a checkout page these days, but should you even need to go to one, or should you just be able to say buy it on a product display page? I think so."</p>

<p>Read that carefully. The buyer in his example is still on the merchant's product page. The thing being removed is not the retailer's site. It is the sequence of screens between deciding and paying.</p>

<p>That distinction is the whole subject. A checkout page can disappear while checkout becomes more consequential, because the page was never the thing doing the work.</p>

<h2>Checkout was never the page</h2>

<p>Ask most people what happens at checkout and they describe entering an address and a card number. That is the visible part, and the smallest.</p>

<p>Underneath, a checkout is a short, dense sequence of decisions. Is this item in stock in this variant right now. Is the price current. Does this promotion apply to this customer and this basket. What tax applies at this address. Which shipping options are real for these items. Is this payment legitimate. When all of that resolves, an order gets created with an owner, a fulfillment path, and a return policy attached.</p>

<p>The page is the interview that collects the missing inputs. It exists because the merchant needs information the customer has and the merchant does not.</p>

<h2>Why the page becomes negotiable</h2>

<p>An agent changes that arithmetic, because it may already hold the inputs.</p>

<p>Stripe's own mechanics illustrate it. In its <a href="${SRC_SPT}" ${EXT}>shared payment token model</a>, the customer submits a payment method to the agent, the agent issues a token scoped to a specific seller with a maximum amount and an expiration, and the seller creates the charge against it. The documentation calls a token "a scoped grant to use the customer's payment method," with limits set by the agent and revocable by the agent.</p>

<p>If the agent carries identity, preference, address, and a payment credential, then the interview has nothing left to ask. Approval can compress into a sentence. The traditional checkout page may have much less left to collect.</p>

<p>That is the honest version of Gaybrick's prediction, and it is more limited than "checkout disappears." The interface disappears when the information it existed to collect is already present.</p>

<h2>The work does not disappear</h2>

<p>Here is where I would push back, and I do not have to reach far, because Stripe made the argument first.</p>

<p>In a March 2026 post on <a href="${SRC_LESSONS}" ${EXT}>what it learned building early agentic commerce</a>, Stripe wrote that "the messy parts of commerce don't go away, but they pop up in different places." It is worth reading because it is not a prediction. It is a list of things that turned out to be hard.</p>

<p>Inventory, for instance. Stripe notes that "agents will need real-time checks to confirm that a specific item or combination is actually in stock," and describes a partner that wanted verification down to the millisecond. Fraud gets harder differently: the behavioral signals merchants rely on, Stripe says, "vanish in an agentic world where there's no human buyer on the frontend." Post-purchase is barely solved. Stripe asks directly what happens if an agent confirms an order a backend later rejects, and whether a cancellation spoken to an AI surface reliably reaches the merchant.</p>

<p>None of that argues against agentic checkout. It argues that the assistant hides complexity from the customer rather than removing it from commerce. Somebody still executes every step, and when steps fail the <a href="/blog/who-pays-when-ai-agents-fail">question of who is accountable</a> does not get easier because the interface got simpler.</p>

<h2>What the retailer gives up along with the page</h2>

<p>The strategic cost is not the page. It is what retailers had been doing on it.</p>

<p>Checkout has been the last surface a retailer fully controlled, and a lot rides on it: loyalty enrollment, account creation, subscription offers, warranties, the moment an anonymous session becomes a known customer. If the transaction resolves inside an assistant, some of that disappears or moves to a surface the retailer does not design.</p>

<p>Again, Stripe says it more plainly than I would dare. Its post calls the logged-in state "the holy grail for sellers," then explains why agentic flows complicate it: "the agent acts as proxy, and the customer's identity isn't revealed until the moment they hit 'buy.'" The consequence is stated without spin. Brands, Stripe writes, are "struggling to honor loyalty benefits, apply targeted discounts, and attribute conversion."</p>

<p>This is my interpretation rather than Stripe's, but the shape is familiar. I argued recently that <a href="/blog/retailers-ai-traffic-customer-ownership">assistants keep the discovery context while retailers get the order</a>. Checkout was the other end of that journey, where a retailer that lost discovery could still turn a buyer into a known, reachable customer. If both ends move outside the retailer's interface, it keeps the revenue and loses both moments where relationships got built.</p>

<h2>The merchant still sets the rules</h2>

<p>None of this makes the retailer a passive fulfillment endpoint.</p>

<p>In the shared payment token flow, the seller still creates the payment, applies its own logic, and owns the resulting order. Protocols are being built to carry merchant rules into agent surfaces rather than around them, which is part of why <a href="/blog/amazon-joins-universal-commerce-protocol">Amazon joined the governance body it had resisted</a>. The arrangement looks less like a takeover than a division of labor: the agent owns the interface, the merchant owns the commerce logic, a protocol moves terms between them.</p>

<p><a href="${SRC_USECASE}" ${EXT}>Stripe's current agentic-commerce materials</a> say the business can remain the merchant of record while retaining control over products, pricing, descriptions, and fulfillment. That matters because removing the checkout page does not necessarily remove the retailer's legal or operational ownership of the transaction. The interface can move while merchant responsibility stays put.</p>

<h2>Stripe has a position in this future</h2>

<p>Worth stating plainly. If commerce shifts from branded interfaces toward infrastructure calls, the companies supplying the infrastructure become more central. Stripe benefits from the world Gaybrick describes.</p>

<p>That does not make him wrong, and I do not think he is. It means the prediction and the roadmap point the same direction, which is a reason to weigh the evidence rather than the forecast. The most persuasive Stripe material here is not the podcast. It is the engineering post cataloguing what is still broken.</p>

<h2>The counterargument deserves weight</h2>

<p>The likely outcome is fewer checkout interactions, not zero checkout interfaces.</p>

<p>People buy differently depending on the stakes. A replenishment order is a good candidate for an agent. A mattress, a laptop, or anything with a complicated return policy is one most people will want to see before confirming. Regulated categories carry disclosure requirements that assume a human reading a screen. Shipping gets complicated when items split across fulfillment paths. And fraud systems sometimes need to challenge a buyer, which is awkward when no buyer is present.</p>

<p>There is also precedent for a partial version of this. When OpenAI pulled back from native checkout and let merchants use their own, the <a href="/blog/chatgpt-shopping-pullback-sellers">transaction economics were the reason</a>. Agentic checkout is not automatically better or cheaper, and nobody has published evidence that customers prefer it.</p>

<h2>The distinction worth keeping</h2>

<p>AI may eliminate the checkout interface long before it eliminates the checkout system. The page was a data collection device. When the data arrives another way the device is redundant, and none of the underlying obligations move an inch.</p>

<p>That pattern keeps recurring. A visible step disappears and the system beneath it becomes more load-bearing, less forgiving of bad data, and harder to see when it fails.</p>

<p>If the customer chooses the product, authorizes the payment, and gets a confirmation without ever seeing a retailer's screen, where does the retailer earn the second purchase?</p>
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
