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

const DESCRIPTION = "A Meta Muse test held one-of-one items at The RealReal for hours without buying them. Why AI agent permissions must cover carts and holds, not just checkout."

const EXT = 'target="_blank" rel="noopener noreferrer"'

const post = {
  slug: "realreal-meta-muse-ai-agent-inventory-holds",
  // Editorial H1 (renders on page, and as JSON-LD headline)
  title: "The RealReal Shows Why AI Shopping Permissions Must Begin Before Checkout",
  // Query-aligned search title (drives <title>, OG and Twitter). Deliberate split.
  meta_title: "AI Shopping Agents and Cart Holds: Lessons From The RealReal",
  excerpt: "In a test reported by The Verge, Meta's Muse kept renewing The RealReal's 20-minute cart holds on one-of-one listings without buying anything. The RealReal then made it harder for agents to log in, add to cart and check out, while still letting them surface listings. Add-to-cart can already be economic authority.",
  meta_description: DESCRIPTION,
  og_image: '/images/blog/realreal-meta-muse-ai-agent-inventory-holds.svg',
  category: "E-commerce Strategy",
  tags: ["The RealReal", "Meta Muse", "AI shopping agents", "agent permissions", "inventory holds", "denial of inventory", "one-of-one inventory"],
  status: 'published',
  featured: false,
  read_time_minutes: 5,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: false,
    related_posts: ["meta-muse-shopping-agent-commerce-adoption", "the-realreal-ask-trr-ai-shopping-agent", "walmart-agent-gateway-agent-profiles"],
    featured_image_alt: "An AI shopping agent holding one-of-one items in a cart before any checkout, separating cart permission from payment permission",
  },
  published_at: new Date().toISOString(),
  content: `<p>An AI shopping agent can change what other customers are able to buy without buying anything itself.</p>

<p>That is the lesson in a test The Verge ran on The RealReal, and in the retailer's response. Many of agentic commerce's most visible safeguards, including purchase approval and protected payment credentials, become most explicit at checkout. On a site where a cart is a reservation, the consequential action happens earlier.</p>

<h2>What happened</h2>

<p>The RealReal puts an item on hold for 20 minutes once a shopper adds it to the cart, and other customers cannot buy it during that time. On October 22, The Verge's Mia Sato <a href="https://www.theverge.com/report/1015811/ai-shopping-agents-blocked-amazon-the-realreal-target-meta-muse" ${EXT}>described instructing Meta's Muse</a> to add the 10 newest listings from a favorite brand to her cart, then to re-add them each time the hold expired. She had no intention of buying them. The task ran all day before she ended it. Nothing was purchased.</p>

<p>In that story, The RealReal's chief technology officer, Luke Friang, said the company would "remain open to third-party AI agents" while keeping safeguards against automated activity that disrupts the customer experience. On October 26, <a href="https://www.theverge.com/news/1018713/meta-muse-agentic-shopping-ai-the-realreal" ${EXT}>The Verge reported that the company had addressed the use case</a>. Its bot defenses now make it "much more difficult for all agents to log in, add items to cart, and check out," Friang said, while agents can still surface listings and direct Muse users to product pages. Meta did not comment.</p>

<h2>This was not a purchase problem</h2>

<p>Muse's safeguards are built around buying. Meta says Muse asks the person before it makes a purchase, and Stripe's Link asks the customer to approve the total. Meta's spokesperson told The Verge that Muse also applies "ethical browsing principles" when asked to do things a human could not, such as buying every ticket to an event.</p>

<p>None of that was triggered, because nothing was bought. And the task was one a person could do, just far more patiently than any person would.</p>

<p><a href="https://research.meta.ai/blog/security-and-safety-for-ai-agents-our-approach-with-muse" ${EXT}>Meta's published security design</a> explains why. A separate agent called Sentinel weighs each action against the policy the user has set and decides whether to allow it, deny it or ask. It supports standing permissions, because Meta does not want Muse asking the user about everything. That design protects the user's accounts, data and money. In Meta's published description, it does not separately explain how Muse limits otherwise authorized browser actions whose cost falls on other shoppers.</p>

<p>This is the gap next to an argument I made earlier: <a href="/blog/npci-upi-ai-agent-authorization">AI can decide what to buy, but should not decide that money moves</a>. Separating the decision from the payment protects the buyer. It does not govern what an agent does before payment.</p>

<h2>The inventory pattern is not new</h2>

<p>Holding stock without buying it is not new. The pattern resembles what <a href="https://owasp.org/www-project-automated-threats-to-web-applications/assets/oats/EN/OAT-021_Denial_of_Inventory" ${EXT}>OWASP's catalog of automated threats</a> calls Denial of Inventory: holding limited stock "without completing the purchase," preventing other users from buying it. Hoarding and seat spinning are among its other names, and <a href="https://datadome.co/agent-trust-management/how-buy-for-me-ai-agents-are-locking-up-inventory/" ${EXT}>bot-defense vendors were warning in the spring</a> that buy-for-me agents could do it at scale.</p>

<p>What is new is the source. This came from a mainstream consumer agent following an ordinary instruction on a real account, not from a scripted bot.</p>

<p>I would not call it an exploit or an attack. The reporter used a normal feature, for a test, and The RealReal treated it as a use case to address. "Reservation loophole" is closer. <a href="https://www.therealreal.com/terms" ${EXT}>The RealReal's terms of service</a>, last updated in 2023, do bar robots and any use that could interfere with other users, but the company did not say Muse broke them, and its own CTO had described agents as welcome.</p>

<h2>Why one-of-one inventory raises the stakes</h2>

<p>In a replenishable catalog, a held unit usually has a twin on the shelf. At The RealReal, nearly every item is the only one, which is why its own discovery agent, <a href="/blog/the-realreal-ask-trr-ai-shopping-agent">Ask TRR, was built for one-of-one inventory</a>. Ask TRR is The RealReal's agent, searching its own catalog. Muse is an outside agent acting for a shopper. The difference matters: one is a retailer's tool, the other arrives as a customer.</p>

<p>For a unique item, a hold is the entire supply for 20 minutes. Renewed again and again, it takes the item out of the market without anyone owning it. Not every add-to-cart has that effect. On a site without holds, or with deep stock, the same action costs nobody anything.</p>

<h2>Five permissions, not one</h2>

<p>An agent arriving at a store is asking for several permissions at once:</p>

<ul>
<li><strong>Discovery:</strong> finding and recommending the product.</li>
<li><strong>Account access:</strong> logging in for the customer.</li>
<li><strong>Cart action:</strong> adding and removing items.</li>
<li><strong>Reservation:</strong> letting a cart take scarce inventory off the market, and how often.</li>
<li><strong>Purchase:</strong> submitting the order and starting payment.</li>
</ul>

<p>The RealReal's response separates those permissions, although not through five individually documented controls. Discovery remains available, while account access, cart actions and checkout became more difficult for outside agents. The company has not explained whether reservation behavior is governed separately. It is a blunt instrument, and the same split could be drawn more finely.</p>

<h2>Operator implications, not announced features</h2>

<p>None of the following is something The RealReal has announced. These are the controls the case suggests for any store where a cart reserves inventory:</p>

<ul>
<li>Limits on how many holds one agent or account can place, and how often.</li>
<li>No fresh start when the same item is re-added right after its hold expires.</li>
<li>Shorter holds, or none, for agent-initiated carts on scarce or one-of-one items.</li>
<li>Agent identity and attribution, so a store can tell an agent's cart from a person's.</li>
<li>Activity the customer can see, so a shopper knows what their agent is holding.</li>
</ul>

<p>Agent identity makes the other controls more precise. A retailer can apply account, session or traffic limits without knowing the agent, but verified identity lets it attribute behavior and enforce agent-specific rules. Walmart's model gives each outside agent <a href="/blog/walmart-agent-gateway-agent-profiles">its own profile, with limits</a>, and Walmart's terms let it limit what agents may buy and how often, and require them to respect rate limits. Those published rules address purchases and request rates, not cart holds, and I would not assume they stop this pattern.</p>

<h2>What the case shows</h2>

<p>An AI shopping agent does not need payment authority to affect commerce. Where a cart controls scarce inventory, permission to add an item is already a form of economic authority. The RealReal has disclosed no financial impact from the test, and one reporter's experiment does not show widespread harm. It does show that retailer permission, the constraint I described in <a href="/blog/meta-muse-shopping-agent-commerce-adoption">Meta's Muse numbers</a>, has to be granted action by action rather than at the door.</p>

<p>If an agent can hold your scarcest inventory without buying it, which of your rules would notice?</p>`,
}

const { data, error } = await supabase.from('blog_posts').insert(post).select('id, slug').single()
if (error) { console.error('Insert failed:', error); process.exit(1) }
console.log('Post inserted successfully:', data.id)
console.log('URL: https://theroberthu.com/blog/' + data.slug)
