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

const DESCRIPTION = "IDEMIA wants domestic and private-label cards selectable by AI agents. It shipped the rules engine, not the selection mechanism. Payment choice is becoming policy."

const EXT = 'target="_blank" rel="noopener noreferrer"'

const post = {
  slug: 'agentic-commerce-payment-choice-policy-idemia',
  // Editorial H1 (renders on page, and as JSON-LD headline)
  title: 'When Checkout Disappears, Payment Choice Becomes Policy',
  // Query-aligned search title (drives <title>, OG and Twitter). Deliberate split.
  meta_title: 'Agentic Commerce Is Turning Payment Choice Into Policy',
  excerpt: "IDEMIA Secure Transactions wants domestic schemes and private-label issuers to be selectable when an agent becomes the shopping interface. It published tokens that can be restricted by merchant, amount, category and time, and no mechanism for how selection happens.",
  meta_description: DESCRIPTION,
  og_image: '/images/blog/agentic-commerce-payment-choice-policy-idemia.svg',
  category: 'Digital Transformation',
  tags: ['agentic commerce', 'payments', 'tokenization', 'private label', 'AI agents', 'payment infrastructure'],
  status: 'published',
  featured: false,
  read_time_minutes: 6,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: false,
    related_posts: ['ai-checkout-interface-commerce-infrastructure', 'npci-upi-ai-agent-authorization', 'agentic-commerce-adoption-definition-problem'],
    featured_image_alt: 'A checkout row of payment logos on one side and a structured set of rules on the other, showing payment choice moving from a visible shelf into machine readable policy',
  },
  published_at: new Date().toISOString(),
  content: `<p>A checkout page is a shelf. Card logos, saved methods, a wallet button, a financing offer sitting under the total. Every one of those placements was negotiated, and every one assumes someone is looking at it.</p>

<p>Take the person away and the shelf has no meaning. Something else has to decide which payment method gets used.</p>

<h2>What IDEMIA announced</h2>

<p>On September 29, <a href="https://www.prnewswire.com/news-releases/idemia-secure-transactions-opens-agentic-commerce-to-all-payment-schemes-302892772.html" ${EXT}>IDEMIA Secure Transactions unveiled an Agentic Commerce solution</a> aimed at a specific customer set: domestic schemes, regional networks, and private-label and co-branded card issuers. Not the global schemes, which the release notes have built agentic capability inside their own environments.</p>

<p>Four capabilities. Agent-ready tokenization, with credentials released through its Token Platform only once consent has been verified, which the company says keeps issuers and networks in the decision path. Passkey-based authentication using FIDO2-certified capabilities, at enrolment and payment. Restricted-use payments, where tokens can be limited by merchant, amount, category or time period, so an agent transacts only within defined conditions even when the consumer is not present. And verifiable proof of consent that can still be produced in a dispute months later, "even if the agent no longer exists."</p>

<p>This is a capability announcement. No deployment is named, no volume, no pricing, no integration requirement and no availability date. The draft treats it accordingly.</p>

<h2>The word doing the work</h2>

<p>The strategic sentence is not about tokens. IDEMIA says the challenge for these networks is to "make their cards available, trusted and selectable when the agent becomes the new shopping interface."</p>

<p>Selectable is the word worth stopping on, because the announcement does not say how selection happens. There is no documented interface through which an agent discovers eligible credentials, no published eligibility signal, no stated way for an issuer, a user, a network or a merchant to express preference to an agent, and no ranking logic. What IDEMIA publishes is the enforcement half: a credential that can be restricted, authenticated and proven after the fact.</p>

<p>That gap is the finding. The industry is shipping the machinery that decides whether a payment method is permitted, while the machinery that decides which permitted method gets chosen remains unspecified.</p>

<h2>Selection is not authorization</h2>

<p>Keep these apart, because collapsing them produces nonsense.</p>

<p>Selection asks which eligible instrument should be used. Authorization asks whether the transaction is permitted under the authority the consumer granted. Authentication asks whether the person can be verified. Routing and settlement are separate again.</p>

<p><a href="/blog/npci-upi-ai-agent-authorization">The principle I have argued before holds</a>: a probabilistic system can decide what to buy, and a deterministic system should decide that money moves. Nothing here changes that. IDEMIA's design keeps the issuer and the network in the decision path and releases nothing until consent is verified. The agent does not authorize. At most it picks among instruments that something else has already made permissible.</p>

<p>Adding a selection layer above an unchanged authorization stack is a smaller architectural claim than it sounds, and a larger commercial one.</p>

<h2>What a policy object looks like</h2>

<p>IDEMIA documents four constraint dimensions: merchant, amount, category and time period. That is a payment rule expressed as data rather than as a click.</p>

<p>Everything past those four is my extrapolation, not their product. You can imagine a grant that also names allowed instruments, a preference order, a rewards or financing objective, and the conditions under which the user must come back and authenticate. None of that is documented, and I am not going to describe an architecture the company has not published.</p>

<p>But the four that exist are enough to make the point. The next payment shelf may be a policy object rather than a row of logos. A payment method can be accepted by the merchant and still be invisible to the agent.</p>

<h2>The issuer's version of the same problem</h2>

<p>The day after IDEMIA, <a href="https://investors.synchrony.com/news-events/financial-news/detail/589/synchrony-and-oxford-economics-find-trust-will-define-the-future-of-ai-shopping" ${EXT}>Synchrony published research with Oxford Economics</a>, and buried under the consumer numbers is a sentence from the same structural problem seen from the issuer side. Synchrony says it is developing capabilities "designed to make financing, rewards and offers recognizable and reliable when AI agents shop on a customer's behalf, helping brands compete on more than price."</p>

<p>Recognizable is IDEMIA's selectable, arriving from the opposite end of the stack. One company wants the credential to be discoverable. The other wants the offer attached to it to survive the loss of the page it used to be printed on.</p>

<p>That is the private-label question in one line. Store-card acquisition, promotional financing, card-linked discounts and points balances are merchandised at checkout because a human is there to read them. If the human is not there, none of that disappears as an economic fact, but all of it has to be expressed in a form an agent can act on, and no published protocol currently defines that form.</p>

<h2>What consumers actually said</h2>

<p>Synchrony surveyed 2,000 United States consumers in May 2026, with eight executive interviews alongside. Data security ranked first at 82%, transparency at 77%, both above saving time at 58%. Fraud protection would make 67% use AI more.</p>

<p>On delegation, the pattern is bounded rather than binary. Seventy-nine percent are willing to let AI apply discounts automatically and 74% to apply loyalty points. Fifty-one percent are open to AI recommending a new credit card and 48% to a prequalification check. Forty-three percent say they are comfortable letting AI purchase up to a preset limit. For items under $50, 47% would let AI suggest options for approval and 34% would let it act on preferences; 46% would not use AI at all for purchases of $5,000 or more.</p>

<p>Every one of those is stated comfort, not observed behavior. <a href="/blog/agentic-commerce-adoption-definition-problem">Willingness and usage are different measurements</a>, and nobody should read 43% as a share of people who have granted anything. What the numbers support is narrower and still useful: consumers describe authority in terms of limits, and a limit is a policy field.</p>

<h2>The objections</h2>

<p>Several are strong enough to constrain the whole thesis. Saved wallets already hide payment choice from most of checkout, so the agent may inherit a solved problem rather than a new one. Many consumers will nominate one default card and remove the decision entirely. Merchants may keep controlling which methods are offered. Restricted-use tokens predate agentic commerce by years.</p>

<p>The most important one is empirical. In the agentic checkout implementations I have verified, payment still comes from the person. <a href="/blog/ai-checkout-interface-commerce-infrastructure">The retailer keeps the transaction when the page goes away</a>, and in current flows the shopper either pays from a wallet they provisioned or enters a card at the moment of purchase. No agent is choosing between cards today, which makes this a question about where the industry is building rather than where it has arrived.</p>

<p>And if agents do eventually choose, nothing published says what they optimize for. Rewards, financing cost, merchant preference, platform relationships. That rule does not exist yet in any protocol I can read, which is the governance gap worth watching rather than assuming.</p>

<p>If your payment offer only exists as a banner a human reads at checkout, what exactly does an agent see?</p>
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
