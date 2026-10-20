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

const DESCRIPTION = "Visa, BILL and Billtrust are piloting an AI agent that pays already-approved supplier invoices through portals. What the agent does and does not decide."

const EXT = 'target="_blank" rel="noopener noreferrer"'

const post = {
  slug: 'visa-bill-billtrust-ai-agent-b2b-payments',
  // Editorial H1 (renders on page, and as JSON-LD headline)
  title: "Visa's B2B AI Agent Pilot Shows Where Agentic Commerce May Work First",
  // Query-aligned search title (drives <title>, OG and Twitter). Deliberate split.
  meta_title: 'Visa, BILL and Billtrust Pilot AI Agent Invoice Payments',
  excerpt: "On October 20, Visa, BILL and Billtrust announced a live pilot in which BILL's Payment Agent completes already-approved supplier invoice payments through Billtrust portals, recognized by Visa's Trusted Agent Protocol and using tokenized credentials. Visa says the agent makes no payment decisions. Agentic commerce may work first where the judgment has already happened.",
  meta_description: DESCRIPTION,
  og_image: '/images/blog/visa-bill-billtrust-ai-agent-b2b-payments.svg',
  category: 'E-commerce Strategy',
  tags: ['Visa', 'BILL', 'Billtrust', 'agentic payments', 'Trusted Agent Protocol', 'accounts payable', 'B2B payments'],
  status: 'published',
  featured: false,
  read_time_minutes: 5,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: false,
    related_posts: ['npci-upi-ai-agent-authorization', 'visa-mastercard-know-your-agent-interoperability', 'ant-international-account-for-agent-merchant-operations'],
    featured_image_alt: 'An AI agent completing an already-approved supplier invoice payment through a supplier portal',
  },
  published_at: new Date().toISOString(),
  content: `<p>On October 20, Visa, BILL and Billtrust <a href="https://investor.visa.com/news/news-details/2026/Visa-BILL-and-Billtrust-Launch-First-Live-Pilot-for-Trusted-AI-Agent-Payments-Between-Buyer-and-Supplier-Platforms/default.aspx" ${EXT}>announced a live pilot</a> in which an AI agent completes approved supplier invoice payments through a supplier's payment portal. The companies say it is processing end-to-end transactions now, with participating buyers using BILL and participating suppliers using Billtrust.</p>

<p>Most writing about agentic commerce imagines software deciding what to buy. This pilot is more modest, and possibly more useful. Visa's FAQ for the announcement asks whether the AI agent is making payment decisions and answers no: the agent only executes eligible payments the buyer has already approved.</p>

<p>That points to a working hypothesis. Agentic commerce may work first where the judgment has already happened.</p>

<h2>What the pilot does</h2>

<p>The problem it targets is mundane. Many suppliers take card payments through their own portals, and those portals were built for a person: someone in accounts payable logs in, keys in the payment details and gets past the bot protections. Visa calls this one of the last major manual steps in many accounts payable workflows.</p>

<p>According to the companies' announcement:</p>

<ul>
<li><strong>The agent.</strong> BILL's Payment Agent is registered using <a href="https://usa.visa.com/about-visa/newsroom/press-releases.releaseId.21716.html" ${EXT}>Visa's Trusted Agent Protocol</a> and Visa's Agentic Directory, which lists agents that have met Visa's requirements.</li>
<li><strong>The credential.</strong> The agent uses tokenized payment credentials, with payment controls tied to the buyer's approved payment instruction and a payment path tied to the specific invoice.</li>
<li><strong>The supplier side.</strong> Billtrust uses the same protocol to recognize the agent, authenticate it and grant it access to the portal, and the supplier accepts the payment under its own acceptance policy.</li>
<li><strong>The logins.</strong> Buyers do not share supplier-portal credentials. Visa says the pilot is designed to remove that need.</li>
</ul>

<p>Visa adds that this agent authentication can satisfy the protections that CAPTCHA and other bot blocking have historically provided, without an additional agent login. That describes this flow at participating portals, not B2B payments generally.</p>

<h2>Who decides and who executes</h2>

<p>The sequence is the point:</p>

<ul>
<li>The buyer-side workflow produces an eligible payment instruction already approved under the buyer's controls.</li>
<li>The agent receives authority to carry out that instruction, inside controls tied to it.</li>
<li>Visa supplies the agent's recognized identity, the tokenized credential and the controls.</li>
<li>Billtrust recognizes the agent and admits it to the supplier's portal.</li>
<li>The agent completes the payment, and both sides can see its authorization and completion.</li>
</ul>

<p>Nowhere in that chain does the agent decide whether the invoice should be paid, to whom or for how much. Those questions are answered before it arrives. What it inherits is an instruction, and the work left is operational: get into the portal, submit the payment, confirm it.</p>

<p>The announcement does not spell out everything. It does not describe the approval steps inside BILL beyond calling the instruction approved, explain how the payment controls are enforced, or say whether the agent has discretion over timing. It is clear about the method. This is card payment automation, and Visa's FAQ says buyer platforms such as BILL could extend card payments to suppliers that historically took automated payments mainly by ACH or check. Visa presents that as an opportunity for buyer platforms. The commercial motive is also straightforward: moving supplier payments from ACH or check to card would expand card volume for Visa.</p>

<h2>A different kind of agentic payment</h2>

<p>On July 24, Visa and Lianlian announced <a href="https://kyodonewsprwire.jp/release/202607243069" ${EXT}>a live B2B agentic transaction</a> in which Lianlian's agent, LoopXPay, identified a purchasing need, recommended suppliers, compared options, placed an order for a product sample and paid, all within pre-defined spending controls. That agent made sourcing and purchasing choices inside an envelope. The BILL agent's disclosed role begins after the payment decision has been made.</p>

<p>That difference matters for how both are described. Neither should be called the first B2B agent payment without qualification. Visa calls it the first live pilot in which trusted AI agents initiate and complete approved buyer invoice payments end-to-end through supplier portals.</p>

<p>It also gives a concrete shape to an argument from September. When the chairman of NPCI said <a href="/blog/npci-upi-ai-agent-authorization">AI may decide what to buy but should not decide that money moves</a>, the separation he described kept authorization and settlement deterministic while the AI interpreted what the user wanted. This pilot keeps the same boundary from the other side. The decision is made before the agent acts, and the tokenized credential and payment controls are aligned with the approved instruction. The part that must be certain, who approved what and for how much, never depends on the agent's judgment.</p>

<h2>Why supplier payments suit agents</h2>

<p>Visa's FAQ gives the reason in one line: B2B payments already operate within established approvals, controls and the buyer's rules. Accounts payable is one of the few places in commerce where most of what an agent needs is already written down:</p>

<ul>
<li>decision rights exist, because someone is authorized to approve an invoice;</li>
<li>the amount is known, because it is on the invoice;</li>
<li>the counterparty is known, because the supplier is already set up;</li>
<li>policy is explicit, because payment terms and approval thresholds are documented;</li>
<li>authorization happens before execution.</li>
</ul>

<p>Compare that with consumer shopping, where an agent may also have to decide what to buy, from whom, at what price and whether to spend at all. Each of those is a judgment, and each is where the trust problem gets hard. The <a href="/blog/visa-mastercard-know-your-agent-interoperability">Know Your Agent work</a> among the card networks is largely about establishing which agent is acting. This pilot shows how much easier the rest becomes when what the agent may do is already settled.</p>

<h2>What it does not show</h2>

<p>This is one pilot with unnamed participants. The companies have not disclosed how many buyers or suppliers are involved, payment volumes, error rates or time saved, and nothing here demonstrates a return. It does not mean every BILL or Billtrust customer has access, and it is not autonomous purchasing.</p>

<p>It also leaves open the question I raised when <a href="/blog/ant-international-account-for-agent-merchant-operations">agentic commerce began moving from AI buyers to AI operators</a>: what a business will allow its own agents to initiate. Here the answer is deliberately narrow. The agent initiates no payment the buyer has not already approved.</p>

<p>One pilot is not a pattern, and agents will be trusted with more judgment over time. But it is a useful test for where to start. Take any workflow and ask, step by step, whether that step is a decision or the execution of a decision already recorded. Agents are much easier to trust with the second, and much of commercial operations is made of it.</p>

<p>Which step in your own payment process is still a person retyping a decision someone else already made?</p>`,
}

const { data, error } = await supabase.from('blog_posts').insert(post).select('id, slug').single()
if (error) { console.error('Insert failed:', error); process.exit(1) }
console.log('Post inserted successfully:', data.id)
console.log('URL: https://theroberthu.com/blog/' + data.slug)
