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

const DESCRIPTION = "Ant International built know-your-agent for AI buyers. Its Account for Agent points the same trust stack at the merchant's own money. What that changes."

// Primary source: Ant International's own release, distributed via PR Newswire APAC.
const SRC_RELEASE = 'https://en.prnasia.com/releases/apac/ant-international-launches-industry-s-first-full-stack-ai-native-solutions-for-payment-account-fx-treasury-and-growth-operations-for-global-businesses-548466.shtml'
const EXT = 'target="_blank" rel="noopener noreferrer"'

const post = {
  slug: 'ant-international-account-for-agent-merchant-operations',
  // Editorial H1 (renders on page, and as JSON-LD headline)
  title: 'Agentic Commerce Is Moving From AI Buyers to AI Operators',
  // Query-aligned search title (drives <title>, OG and Twitter). Deliberate split.
  meta_title: 'Ant International Launches Account for Agent for Businesses',
  excerpt: "Ant International launched an AI-native stack for payments, accounts, FX and treasury, plus what it calls the first agentic business account. The trust tools built to admit AI buyers are starting to govern AI operators inside the merchant.",
  meta_description: DESCRIPTION,
  og_image: '/images/blog/ant-international-account-for-agent-merchant-operations.svg',
  category: 'Digital Transformation',
  tags: ['Ant International', 'agentic commerce', 'AI agents', 'treasury', 'payments', 'AI governance'],
  status: 'published',
  featured: false,
  read_time_minutes: 6,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: false,
    related_posts: ['visa-mastercard-know-your-agent-interoperability', 'npci-upi-ai-agent-authorization', 'anthropic-claude-commerce-intelligence-layer'],
    featured_image_alt: 'A merchant finance operation in which software agents act within scoped permissions, policy boundaries and monitoring, alongside the same identity checks used for AI buyers',
  },
  published_at: new Date().toISOString(),
  content: `<p>Last week I wrote that <a href="/blog/visa-mastercard-know-your-agent-interoperability">agentic commerce is starting to standardize the buyer</a>, as Ant International, Mastercard and Visa began aligning on what a merchant needs to know about an agent before letting it pay. Every question in that work faced outward. Which agent is at the checkout, who operates it, and what was it allowed to do.</p>

<p>On September 18, Ant pointed part of the same machinery inward.</p>

<h2>What Ant announced</h2>

<p>At its VOYAGE merchant event in Shanghai, Ant International launched what it <a href="${SRC_RELEASE}" ${EXT}>describes as close to 100 AI products</a> across payment, account, FX, treasury and growth operations, rolling out to global markets through fall and winter 2026. Most of it is built for the merchant rather than the shopper.</p>

<p>Antom Autopilot handles the merchant payment lifecycle in a single conversational window, from onboarding and integration through risk, revenue recovery, reconciliation and new market expansion. A treasury autopilot inside WorldFirst for Enterprise forecasts cash and FX positions. A2A Supplier Connections link a merchant to the agents of service providers for ads, logistics, tax, marketing and compliance, with balance checks and top-ups given as the examples. An Agentic Commerce Hub distributes a merchant's product catalog across third-party agentic platforms.</p>

<p>And one product Ant calls the world's first truly agentic account for businesses: Account for Agent.</p>

<p>Ant's description of it is a single sentence. It is built on KYA-enabled smart contracts, full-chain security control, dynamic monitoring and intervention, and a feedback mechanism for continuous agent tuning. The release publishes no limit structure, eligibility, pricing or customer, and does not say when it reaches which market.</p>

<h2>The same trust stack, pointed inward</h2>

<p>That sentence is still worth reading closely, because of its first clause. Know-your-agent was built to answer questions about an agent arriving at somebody else's checkout. Here it underpins an account for businesses, meant for the agents working on their behalf.</p>

<p>This is my reading rather than Ant's claim. Trusting an AI buyer and trusting an AI operator increasingly rely on the same ingredients: identity, scoped permission, policy boundaries, monitoring and intervention. Those ingredients do not care which side of the transaction the agent sits on.</p>

<p>Merchant-side agents are not new to this site. Anthropic's merchant agent <a href="/blog/anthropic-claude-commerce-intelligence-layer">stages every write until a person approves it</a>. What changes here is the object. Those agents touch campaigns, listings and catalogs. These touch the merchant's money: accounts, payouts, liquidity, FX exposure and supplier balances.</p>

<h2>The release already contains a spectrum</h2>

<p>The most useful thing in the announcement is not Account for Agent. It is how many different levels of delegated authority the release describes without remarking on it.</p>

<p>Falcon Smart Hedging monitors FX positions and recommends hedging strategies. Antom SmartDispute advises on dispute strategy, while Antom AutoDispute is described as fully automated. Compliance and KYB onboarding run in what Ant calls a supervised agentic workflow. Whale Pooling goes furthest among the products Ant actually specifies: it determines when, where and how much to move, within customers' defined policies and controls.</p>

<p>Recommend, advise, supervise, automate, and execute within policy. This is my synthesis across separate Ant products, not a maturity model Ant publishes, and the products are not presented as one staged architecture. But read together they show delegated authority over a merchant's money already varying product by product. The pattern I described when <a href="/blog/klaviyo-headless-agent-controls">Klaviyo exposed write access to agents</a> applies here too, except the thing being written is a funds movement rather than an email.</p>

<h2>The governance question changes shape</h2>

<p>For a commerce or finance team, this moves the question away from what AI can recommend. The working questions become narrower and harder. Which account can this agent touch. Up to what amount. Which supplier agents may it contact. What still needs a person. How does intervention actually happen. And what evidence survives after it acts.</p>

<p>At the payment-rail level, the argument has been that <a href="/blog/npci-upi-ai-agent-authorization">AI may decide what to buy but should not decide that money moves</a>, because the rail's authority has to be deterministic. That still holds. Inside a merchant organization there is a different kind of authority as well: delegated business authority, where bounded money movement within explicit merchant policy can itself become an agent task, as it does in Whale Pooling. The rail still decides whether a payment settles. The merchant now also has to decide what its own agents may initiate.</p>

<p>Ant's consumer-side language offers a clue about the design. For its Agentic Mobile Protocol it says users authorise the task rather than hand over the account. One plausible merchant-side interpretation, and it is only an interpretation, is to give an agent bounded access rather than unrestricted access to the merchant's main financial account. Ant has not documented how Account for Agent is implemented, so whether it works that way is an open question.</p>

<h2>What the numbers say, and what they do not</h2>

<p>Ant's own release uses two different descriptions of the same 89.5% figure. The summary says 89.5% of clients "deployed our FinAI solutions in past 12 months." The body says 89.5% of merchants "have already deployed AI agents." Because those are not the same claim, I would not use the percentage as evidence of agent adoption.</p>

<p>Ant also says 81.4% of payment tasks were aided by AI. Aided by AI is not executed autonomously, and it is not completed by an agent. Nothing in that figure says a single merchant payment moved without a person involved.</p>

<h2>The objections</h2>

<p>This is a vendor launch, and the product at its center has one sentence of description and no named user. Rolling out through the winter is not deployed.</p>

<p>Much of the underlying activity is familiar automation under a new label. Routing, retries of failed payments, dispute processing, treasury pooling and risk controls all existed before anyone called them agentic. The label is not proof of a new workflow. What would be new is the governance around software agents receiving scoped operational authority.</p>

<p>Merchant operations run across ERPs, banks and suppliers Ant does not control, and large merchants may prefer agents that act through their own treasury systems rather than a provider's account. Financial regulation may keep execution supervised for longer than product roadmaps assume. And payment operations sit beside commerce rather than inside the shopping experience.</p>

<p>None of the parts started this week either. Ant's Agentic Mobile Protocol launched in April, and its know-your-agent framework predates the Visa and Mastercard collaboration. What is new is the assembly: agent identity, scoped permission, a financial account, payment and treasury workflows, supplier-agent connections and continuous monitoring, offered together to the merchant as operating infrastructure.</p>

<p>That is a smaller claim than the release makes, and a more durable one. The work of trusting AI buyers and the work of trusting AI operators increasingly rely on the same ingredients, and Account for Agent, for all that it is one sentence long, is the first product I have seen named for that overlap.</p>

<p>If your finance team had to write the policy for an agent with scoped access to a business account, which limit would it set first?</p>
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
