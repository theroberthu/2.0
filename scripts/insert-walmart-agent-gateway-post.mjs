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

const DESCRIPTION = "Walmart announced Agent Profiles and an invitation-only Agent Gateway beta. How outside AI agents can shop for customers, and what Walmart still controls."

const EXT = 'target="_blank" rel="noopener noreferrer"'

const post = {
  slug: 'walmart-agent-gateway-agent-profiles',
  // Editorial H1 (renders on page, and as JSON-LD headline)
  title: "Walmart's Agent Profiles Show How Retailers Can Admit AI Shoppers Without Giving Up Control",
  // Query-aligned search title (drives <title>, OG and Twitter). Deliberate split.
  meta_title: 'Walmart Agent Gateway and Agent Profiles Explained',
  excerpt: "On October 21, Walmart announced Agent Profiles and an invitation-only Agent Gateway beta for AI agents that shop on a customer's behalf. Its announced model treats an outside agent as a separate user inside the customer's account, with its own identity and limits, and routes approvals, data access, payment and enforcement through Walmart.",
  meta_description: DESCRIPTION,
  og_image: '/images/blog/walmart-agent-gateway-agent-profiles.svg',
  category: 'E-commerce Strategy',
  tags: ['Walmart', 'Agent Gateway', 'Agent Profiles', 'Sparky', 'AI shopping agents', 'Model Context Protocol', 'agent permissions'],
  status: 'published',
  featured: false,
  read_time_minutes: 5,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: false,
    related_posts: ['personal-agent-protocol-ai-commerce', 'ai-visibility-permission-stack-cloudflare', 'walmart-sparky-ai-personalization-pricing-governance'],
    featured_image_alt: 'An outside AI agent shopping inside a Walmart customer account under its own Agent Profile and limits',
  },
  published_at: new Date().toISOString(),
  content: `<p>On October 21, <a href="https://corporate.walmart.com/news/2026/10/Making-It-Possible-for-Agents-to-Shop-on-Behalf-of-Customers" ${EXT}>Walmart announced three things</a> for AI agents that shop on a customer's behalf: Agent Profiles, the Walmart Agent Gateway, and terms that agents must follow. Together, Walmart says, they will let customers shop with Walmart and Sam's Club "through the apps and agents they choose."</p>

<p>The interesting part is not that Walmart will allow outside agents. It is how. Walmart's announced model treats an outside agent as a separate user inside the customer's account, with its own identity and limits, rather than as the customer.</p>

<h2>What Walmart announced</h2>

<ul>
<li><strong>Agent Profiles, launching in the next month.</strong> Each agent the customer authorizes gets a dedicated profile within the account, and its purchases appear separately from the customer's own. The customer chooses between approving every purchase or allowing purchases within a spending limit, with $50, $100 and $200 as Walmart's examples, and can delete a profile at any time.</li>
<li><strong>The Walmart Agent Gateway, an early beta.</strong> Walmart says it will give agents a faster, more reliable way to shop using MCP, <a href="https://modelcontextprotocol.io/introduction" ${EXT}>the Model Context Protocol</a>, an open standard for connecting AI applications to tools and data. <a href="https://www.walmart.com/cp/walmart-agent-gateway/1280482" ${EXT}>The gateway page</a> says it connects agents through Sparky, Walmart's own assistant, and replaces website scraping with product and fulfillment data "straight from the source." Access is limited and invitation-only for companies and developers.</li>
<li><strong>Terms for agents.</strong> Purchases require approval by default, and Walmart may require more approvals even within a spending limit. Agents do not receive payment-card information and cannot add or change payment methods. They may access only what the task needs and the customer allows. Walmart's returns process applies, including when an agent does not act as intended, and agents that break the terms will be blocked.</li>
</ul>

<p>Walmart has not named any companies in the beta or disclosed any usage. This is an announced model, not a measured one.</p>

<h2>The agent is becoming a separate account role</h2>

<p>Walmart describes today's problem plainly. When a customer uses an AI agent now, the agent signs in with the customer's account, and every purchase, whether made by the person or the agent, appears together.</p>

<p>That arrangement collapses four things into one login: who the customer is, how they pay, what they have bought, and who is allowed to buy. Agent Profiles start to pull those apart. The customer still owns the account. The agent gets its own profile, limited authority and a visible purchase record. Payment stays attached to the account. The agent may initiate an authorized purchase, but it does not receive the card details or control the payment method. Walmart's own analogy is adding an authorized user to a credit card, with a spending limit and a statement you can check.</p>

<p>That is why this is more than giving a bot an API. A gateway provides the route. The delegated role determines which agent is using it, what it may do, what it may spend, how its actions are recorded and when its authority ends.</p>

<h2>Customer authorization and retailer acceptance are different permissions</h2>

<p>Two separate grants run through the model. The customer decides what the agent may do: require approval for every purchase, or spend up to a limit, and revoke whenever they like. Walmart decides what it will accept: the gateway page lists category restrictions, rate limits and compliance guardrails, and Walmart keeps the right to require extra approval and to block an agent outright.</p>

<p>That is the same split I described when Sierra and Meta announced <a href="/blog/personal-agent-protocol-ai-commerce">Personal Agent Protocol</a>, where customers decide what access to give and companies set what agents can do. Walmart is one of that protocol's named development partners, but its announcement does not say the gateway implements it, and I would not assume it does. The resemblance is in the permission model, not a confirmed standard.</p>

<p><a href="https://www.walmart.com/help/article/walmart-com-terms-of-use/3b75080af40340d6bbd596f116fae5a0" ${EXT}>Walmart's updated terms of use</a> add the accountability side. Actions an authorized agent takes within the permissions a customer granted are treated as the customer's own, and Walmart says it is not responsible for a third-party agent's conduct, including misunderstanding instructions. Walmart separately says its normal returns process applies when an agent does not act as intended. That recourse does not change who authorized the purchase.</p>

<h2>Why the gateway matters beyond access</h2>

<p>Walmart's terms already require agents to identify themselves and respect rate limits. The gateway gives them a reason to comply: a faster, more reliable path than clicking through pages built for people. That matters because rules are easier to enforce on a route you built than on one an agent improvised. It is the commerce version of the <a href="/blog/ai-visibility-permission-stack-cloudflare">permission stack</a> that crawler controls became, where access stopped being one switch and became separate permissions.</p>

<p>Data is part of it too. Walmart says the gateway can help an agent find a customer's usual items, such as a preferred bread or brand of milk, without sharing the broader purchase history. Its terms also say authorizing an agent means consenting to share the account and order information reasonably necessary for the authorized task. Both can hold. Where "reasonably necessary" ends is a detail Walmart has not published.</p>

<p>Pricing carries over from Walmart's September customer letter: agents see the same prices as people, with offers and fees shown before purchase. It is the same negative permission I wrote about when Walmart said it would <a href="/blog/walmart-sparky-ai-personalization-pricing-governance">price the product, not the person</a>.</p>

<h2>What changed in Walmart's strategy</h2>

<p>In March, I wrote that Walmart had <a href="/blog/walmart-sparky-chatgpt-gemini">moved Sparky into ChatGPT and Gemini</a> and concluded that "Walmart won't let anyone else's AI sell Walmart products." The evidence then supported a retailer-owned-agent strategy. This announcement makes that sentence wrong.</p>

<p>Walmart has not abandoned Sparky. The gateway connects outside agents through it. What changed is where Walmart draws the line. It no longer has to own the agent. It has to own the permissions and transaction infrastructure beneath it. The updated conclusion is narrower and, I think, more durable: Walmart says it will let outside agents shop for customers, and its announced model routes identity, approvals, data access, payment and enforcement through Walmart.</p>

<p>The comparison with Amazon is sharper than open versus closed. <a href="https://www.axios.com/2026/10/21/walmart-amazon-agents-muse" ${EXT}>According to Axios</a>, when Amazon blocked Meta's Muse agent, it said it had not authorized Muse to access customer accounts, scrape data or process transactions. Those are the three things Walmart's model places under its own control. The disagreement is about who builds the sanctioned path, and whether one exists at all.</p>

<h2>What remains unknown</h2>

<p>Which companies are in the beta, and whether any are processing real orders. When Agent Profiles reach every account. Which categories are restricted, and what triggers an extra approval. What happens to agents that keep shopping through the website instead of the gateway. And whether customers want delegated purchasing at all; Walmart's announcement itself says it will not be for everyone.</p>

<h2>What retailers and commerce operators should learn</h2>

<p>Treat the agent as a user type, not a login. Separate what the customer authorizes from what you will accept. Give agents a better route than scraping so your rules apply. Keep payment credentials out of the agent's hands, keep its purchases visible, and make revocation immediate.</p>

<p>Openness, in this model, is permissioned, selective and revocable. If an outside agent arrived at your store tomorrow, would your systems know it was not the customer?</p>`,
}

const { data, error } = await supabase.from('blog_posts').insert(post).select('id, slug').single()
if (error) { console.error('Insert failed:', error); process.exit(1) }
console.log('Post inserted successfully:', data.id)
console.log('URL: https://theroberthu.com/blog/' + data.slug)
