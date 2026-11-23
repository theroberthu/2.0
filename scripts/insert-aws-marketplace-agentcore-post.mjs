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

const DESCRIPTION = "AWS now lets AgentCore agents buy selected Marketplace services per request. What matters is how identity, budgets and policy bound the agent's authority."

const EXT = 'target="_blank" rel="noopener noreferrer"'

const post = {
  slug: "aws-marketplace-agentcore-agentic-payments-x402",
  // Editorial H1 (renders on page, and as JSON-LD headline)
  title: 'AWS Treats Agentic Commerce as Governed Procurement',
  // Query-aligned search title (drives <title>, OG and Twitter). Deliberate split.
  meta_title: 'AWS Lets AI Agents Buy Through Marketplace With AgentCore',
  excerpt: "On November 19, AWS let AgentCore agents buy select x402-enabled Marketplace products one request at a time, billed to the company's existing AWS account. A person approves the boundary, not each purchase, and the agent decides what to buy inside it.",
  meta_description: DESCRIPTION,
  og_image: '/images/blog/aws-marketplace-agentcore-agentic-payments-x402.svg',
  category: "E-commerce Strategy",
  tags: ["AWS", "AWS Marketplace", "Amazon Bedrock AgentCore", "x402", "agentic payments", "agentic commerce", "AI governance"],
  status: 'published',
  featured: false,
  read_time_minutes: 5,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: false,
    related_posts: ["visa-bill-billtrust-ai-agent-b2b-payments", "npci-upi-ai-agent-authorization", "walmart-agent-gateway-agent-profiles"],
    featured_image_alt: "Pull quote from Robert Hu on agentic payments: The agent decides what to buy. The infrastructure decides whether money can move.",
  },
  published_at: new Date().toISOString(),
  content: `
<p>On November 19, AWS Marketplace <a href="https://aws.amazon.com/about-aws/whats-new/2026/11/marketplace-agentic-payments-agentcore/" ${EXT}>began letting AI agents buy select products</a> one request at a time. An agent built on Amazon Bedrock AgentCore can find a paid API, data source or content mid-task, pay for one call in U.S. dollars and have it billed to the company's existing AWS account. No crypto wallet, seller sign-up or API key.</p>

<p>Until now, a person usually signed up, added a payment method and created a key. The launch removes that step. It does not remove the person. It moves them.</p>

<p>My reading is that AWS has not handed an agent a corporate card. It has made purchasing a configurable permission that companies can bound by identity, a session budget, seller rules and a billing system that records every charge. That may be where agentic commerce becomes operational first.</p>

<h2>What AWS launched</h2>

<p>The launch adds AWS Billing as a payment option in AgentCore payments, generally available since August. Only some listings qualify: API-based products whose sellers chose what AWS calls Agentic Commerce, passed the same registration and review as other Marketplace sellers and integrated AWS's x402 SDK. AWS supports only x402's exact scheme for now, so each request has a fixed, quoted price.</p>

<p>AWS did not invent x402. It started at Coinbase and is now stewarded by <a href="https://x402.org/linux-foundation-announces-operational-launch-of-x402-foundation-to-standardize-internet-native-payments-for-ai-agents-and-applications/" ${EXT}>the x402 Foundation at the Linux Foundation</a>, where AWS is a member. It repurposes the HTTP 402 Payment Required status so a server can ask for payment inside an ordinary web request. Stablecoins are its main use, but not a requirement. AWS's version settles to a bill.</p>

<p>AWS says it works in every Region where AgentCore payments runs, though <a href="https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-ai-agents-products.html" ${EXT}>its Buyer Guide</a> says AWS Marketplace processes every such payment in US East (N. Virginia), in U.S. dollars.</p>

<h2>How a purchase happens</h2>

<ol>
<li>An administrator connects AgentCore payments to AWS Billing and creates a role that lets AWS Marketplace create agreements and meter usage.</li>
<li>A developer creates a payment session for the task, which expires and can carry a spending limit.</li>
<li>The agent finds a product, optionally through a Marketplace connector that returns only x402-enabled listings.</li>
<li>The seller's endpoint answers with HTTP 402 and a signed quote.</li>
<li>AgentCore payments checks the remaining session budget and, if the purchase fits, returns a payment token valid for five minutes.</li>
<li>The agent retries with the token and receives the resource.</li>
<li>AWS Marketplace meters the charge to the company's bill. The first purchase from a seller creates an agreement.</li>
</ol>

<h2>Where the authority sits</h2>

<p>The agent can choose among the services its environment permits. It cannot set the seller's price, and in AWS's recommended separation-of-duties pattern, it cannot create or expand its own payment session.</p>

<p>Payment sessions are time bounded and can include a spending cap. AWS's lower-level documentation calls the budget optional, while <a href="https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/payments-security-best-practices.html" ${EXT}>its security guidance</a> recommends setting the minimum the task needs. When a cap is configured, AgentCore payments enforces it outside the model, so prompt injection cannot raise it.</p>

<p>The pattern lives in IAM: the management role is explicitly denied payment processing, and in AWS's sample the agent's role can pay but cannot create sessions. That is separation of duties, written into permissions.</p>

<p>AWS Marketplace checks each quote's signature against the seller's registered key and rejects an altered price. If the budget cannot cover it, the payment fails and nothing is charged.</p>

<p>Where an organization uses Private Marketplace, its agents can buy only the products it allows. AWS says developers can also restrict approved sellers through AgentCore policy. Transactions appear in AWS CloudTrail and Cost Explorer.</p>

<p>AWS <a href="https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/payments-process-payment.html" ${EXT}>caps a single AWS Billing payment at $10,000</a>. That is a technical ceiling, not a budget. The session budget in AWS's own sample is five cents.</p>

<h2>What changes compared with Visa and BILL</h2>

<p>In October, <a href="/blog/visa-bill-billtrust-ai-agent-b2b-payments">Visa, BILL and Billtrust put an agent into supplier payments</a> with a deliberately narrow mandate. A person approves a specific invoice. The supplier and amount are known. The agent executes a decision already made.</p>

<p>AWS moves the human decision up a level. A person approves the boundary: the account, the budget, the products the organization allows. Inside it, the agent can meet a paid input nobody named in advance and choose to buy it. <a href="https://aws.amazon.com/blogs/machine-learning/enable-ai-agents-to-pay-for-aws-marketplace-x402-products-with-amazon-bedrock-agentcore-payments/" ${EXT}>In AWS's walkthrough</a>, a research agent needing this week's news compared two Marketplace listings and paid one cent for a single search. The walkthrough does not show a person approving that specific one-cent request at execution time. The documented flow requires no per-purchase approval, though developers can <a href="https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/payments-framework-integrations.html" ${EXT}>switch off automatic payment</a> to keep a person in the loop.</p>

<p>That is more freedom than the Visa pilot grants, and less than it sounds. NPCI's chairman argued that <a href="/blog/npci-upi-ai-agent-authorization">AI may decide what to buy but should not decide that money moves</a>. AWS draws the line in the same place. The agent decides what to buy. The infrastructure decides whether money can move.</p>

<p>On the same day, AWS placed approval differently for a different purchase. Its <a href="https://aws.amazon.com/blogs/awsmarketplace/aws-marketplace-helps-humans-and-agents-buy-deploy-and-transact/" ${EXT}>conversational checkout in Marketplace agent mode</a>, which covers pricing, license terms and purchase-order thresholds, requires human confirmation before a purchase completes. Human approval did not disappear. It was placed according to what is being bought.</p>

<h2>Why this may work before consumer shopping</h2>

<p>Agentic purchasing may scale first where most of the hard questions are already answered:</p>

<ul>
<li>the buyer has an organizational identity;</li>
<li>the billing relationship already exists;</li>
<li>the marketplace controls which sellers are eligible;</li>
<li>the price is quoted and signed before anything executes;</li>
<li>the organization can impose a defined spending ceiling;</li>
<li>every transaction is attributed and auditable;</li>
<li>the purchase supplies an input to a task someone already assigned.</li>
</ul>

<p>Consumer shopping leaves more of those open. <a href="/blog/walmart-agent-gateway-agent-profiles">Walmart's Agent Profiles</a> also give an agent a spending limit, but that agent still has to read the shopper's preferences, judge quality, decide whether to buy and handle returns. In AWS's design, buyer, payer, marketplace and biller sit inside one existing relationship, and the purchase is a step toward the goal, not the goal.</p>

<p>Procurement does not disappear either. The first purchase still creates a Marketplace agreement, which AWS Marketplace creates and accepts for the account through a role the account set up. The contract step is compressed into a standing permission, not removed.</p>

<h2>What it does not show</h2>

<p>AWS has disclosed no transaction volume, participating seller or customer counts, or return on investment. Tavily is the only seller named in AWS's technical launch post, and AWS has not said how many AgentCore customers have enabled the capability.</p>

<p>Money moves on ordinary schedules. Charges appear on the monthly bill, sellers are paid through standard Marketplace disbursement, and refunds follow the seller's own policy as a billing adjustment.</p>

<p>This is one company's capability inside its own marketplace, where AWS controls the buyer's account, the seller's listing and the bill. That makes it workable, and hard to transfer to open commerce.</p>

<p>It still suggests where the first durable form may appear. Not an agent that shops. An agent permitted to buy, inside a boundary someone else wrote.</p>

<p>If your agents could buy the inputs they need tomorrow, who in your organization would set the budget, and who would be allowed to raise it?</p>
`,
}
const { data: existing } = await supabase.from('blog_posts').select('id').eq('slug', post.slug)
if (existing && existing.length) { console.error('Slug already exists, not inserting'); process.exit(1) }

const { data, error } = await supabase.from('blog_posts').insert(post).select('id, slug').single()
if (error) { console.error('Insert failed:', error); process.exit(1) }
console.log('Post inserted successfully:', data.id)
console.log('URL: https://theroberthu.com/blog/' + data.slug)
