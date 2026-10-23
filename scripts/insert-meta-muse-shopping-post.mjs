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

const DESCRIPTION = "Meta says 10 million people set up Muse and shopping is its top use. What the numbers prove about AI shopping demand, and what retailers still control."

const EXT = 'target="_blank" rel="noopener noreferrer"'

const post = {
  slug: 'meta-muse-shopping-agent-commerce-adoption',
  // Editorial H1 (renders on page, and as JSON-LD headline)
  title: "Meta Muse Has Shopping Demand. Retailer Permission Is Now the Constraint",
  // Query-aligned search title (drives <title>, OG and Twitter). Deliberate split.
  meta_title: 'Meta Muse Shopping Data Shows Demand for AI Agents',
  excerpt: "Meta says more than 10 million people in the US and Canada set up Muse in about six weeks, and that shopping is its most common use, with an average purchase above $200 including travel. The figures are stronger than a demo and weaker than market proof, and Meta's own CFO named retailer permission as the constraint.",
  meta_description: DESCRIPTION,
  og_image: '/images/blog/meta-muse-shopping-agent-commerce-adoption.svg',
  category: 'E-commerce Strategy',
  tags: ['Meta', 'Muse', 'AI shopping agents', 'Stripe Link', 'Plaid', 'agentic commerce', 'merchant acceptance'],
  status: 'published',
  featured: false,
  read_time_minutes: 5,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: false,
    related_posts: ['walmart-agent-gateway-agent-profiles', 'personal-agent-protocol-ai-commerce', 'npci-upi-ai-agent-authorization'],
    featured_image_alt: 'Consumer demand for an AI shopping agent meeting a retailer checkpoint that decides whether the agent may enter',
  },
  published_at: new Date().toISOString(),
  content: `<p>On October 21, Meta disclosed its first shopping metrics for Muse, its personal AI agent. They are worth reading closely, because most of the coverage has already rounded them up.</p>

<p>My read is that Meta's figures are stronger than a demo and weaker than market proof. And the same earnings call explained where the constraint is moving: away from whether people will ask an agent to shop, and toward whether businesses will let that agent in.</p>

<h2>What Meta actually reported</h2>

<p><a href="https://s21.q4cdn.com/399680738/files/content_files/META-Q3-2026-Earnings-Call-Transcript.pdf" ${EXT}>On the earnings call</a>, Mark Zuckerberg and CFO Susan Li gave four figures. Each has a denominator that matters.</p>

<ul>
<li><strong>More than 10 million people in the US and Canada have set up Muse</strong>, in about six weeks. These are setups, not active users. Muse is not available in other countries.</li>
<li><strong>About 25% of people who have set up Muse use it on any given day.</strong> Meta did not give a daily or weekly user count.</li>
<li><strong>Shopping is the most common use case.</strong> Zuckerberg said more than a quarter of people using Muse engage in shopping, and Li specified over 25% of Muse weekly actives. Because weekly actives were not disclosed, the number of shoppers cannot be calculated. Applying 25% to 10 million setups uses the wrong base.</li>
<li><strong>The average purchase size is over $200.</strong> Asked whether that figure includes travel, Zuckerberg said it does, and called travel one of Muse's other top use cases.</li>
</ul>

<p>Meta did not disclose how many purchases were made, transaction volume, gross merchandise value, or how often shopping turns into buying. "Engaging in shopping" covers research and comparison as well as checkout. Li described Muse's role as researching, recommending and "helping you complete a purchase." When an analyst asked whether Meta's revenue depends on Muse moving from facilitating transactions to completing them itself, she said: "<a href="https://s21.q4cdn.com/399680738/files/content_files/META-Q3-2026-Follow-Up-Call-Transcript.pdf" ${EXT}>I think we don't exactly know the answer to that</a>."</p>

<h2>What the numbers do prove</h2>

<p>Even with those limits, this is more than a demo. Among people who chose to set up a general-purpose agent, shopping is the leading behavior. Meta reports an average purchase size above $200, including travel. And Zuckerberg said that in the first week Meta had to work with Stripe to raise credit limits because volumes were higher than expected. That is evidence of live purchasing activity, but not a disclosed count of completed purchases or transaction volume.</p>

<p>The limits are also Meta's own. Li said Muse skews toward Meta's highest-value users, with more than 20% of US Muse users falling into Meta's $1,000-plus annual ARPU segment across its family of apps, and that they are not representative. Zuckerberg's statement that Muse has "clear product-market fit" is the company's assessment.</p>

<p>Stripe's figure needs the same care. <a href="https://stripe.com/blog/helping-personal-agents-shop-more-intelligently-and-reliably-with-link" ${EXT}>On September 29, Stripe said</a> agentic purchases made with Link increased 38 times over the previous month, across Muse, Grok Bot and Instinct. It gave no baseline. A multiple without a base tells you direction, not size.</p>

<p>The <a href="/ai-commerce-2027">AI Commerce 2027</a> report has held that usage of AI shopping assistants is published while agent-initiated transaction volume is not. Meta's disclosure fits that pattern exactly. It is the most specific demand signal I have found from a consumer agent, and it still stops short of volume.</p>

<h2>How the money moves</h2>

<p>At checkout, Muse uses Link. <a href="https://stripe.com/newsroom/news/stripe-helps-meta-muse-shop-with-link" ${EXT}>Stripe says consumers approve the transaction total</a> in the chat for every purchase. At businesses that accept Link, Muse checks out with the payment method the person saved there. Elsewhere, Link issues a single-use virtual card scoped to the approved purchase, and Muse never sees the underlying card details. Meta says Muse checks with the person before making a purchase.</p>

<p>That approval step is how it works today. Stripe lists spending controls that would let agents buy without approving each transaction under what comes next, not what exists. Every Muse purchase currently described by Meta and Stripe requires the person to approve the total.</p>

<p>Plaid's role is different. <a href="https://plaid.com/blog/meta-muse/" ${EXT}>Plaid connects people's financial accounts</a> to Muse's finance features, sharing balances, transactions and holdings so the agent can give financial guidance. It provides account data, not purchase processing.</p>

<p>This is the separation I described when a payments official argued that <a href="/blog/npci-upi-ai-agent-authorization">AI can decide what to buy, but should not decide that money moves</a>. Muse works out the purchase. Stripe's rails, with a person's approval, move the money.</p>

<h2>Where demand meets the merchant</h2>

<p>A payment rail settles who pays. It does not decide whether the merchant admits the agent.</p>

<p><a href="https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/" ${EXT}>Meta's launch post</a> says Muse can open a browser and fill out forms. Where no integration exists, it shops through pages built for people, which is the route a merchant can refuse. Amazon blocked Muse in September, and <a href="https://www.theverge.com/report/1015811/ai-shopping-agents-blocked-amazon-the-realreal-target-meta-muse" ${EXT}>told The Verge</a> it had asked Meta to remove Amazon from Muse. The Verge's reporter found Muse stopped by Target's bot check one day and let through the next; Target said its safeguards keep unauthorized agents from accessing customer accounts and starting transactions.</p>

<p>Li named the constraint herself. Some businesses, she said, are "understandably focused on protecting customer relationships." She expects the market to move away from agents navigating every site like a human, toward permissioned, structured interactions: authenticated APIs, approved agent partnerships, and direct communication between a consumer's agent and a business's own agent. She also said many experiences will remain AI assisted rather than fully autonomous in the near term.</p>

<p>Those routes already have shapes. Walmart's <a href="/blog/walmart-agent-gateway-agent-profiles">Agent Gateway</a> is one a retailer built for itself. <a href="/blog/personal-agent-protocol-ai-commerce">Personal Agent Protocol</a>, which Meta is co-developing, is an attempt at a shared one. Neither turns consumer demand into access by default.</p>

<h2>The economics are still a plan</h2>

<p>Meta's stated model is that Muse stays free for most people, and Meta takes a fee on transactions it helps facilitate, paid by businesses. That fee does not exist yet. Li said Meta is not monetizing Muse outside of subscriptions today, and that transaction revenue needs more users and more business partners first.</p>

<p>So the open question is commercial, not technical. Meta wants merchants to pay for demand that arrives through an agent. Li's own condition for broader participation is that agents demonstrate they can generate incremental value and demand and operate safely. Meta has not published that evidence: conversion against a merchant's own site, incrementality, returns or margin.</p>

<h2>What this proves, and what it does not</h2>

<p>It proves that people who set up a shopping-capable agent use it for shopping more than for anything else, and that some complete purchases after approving the total, while the agent remains unable to see their payment details.</p>

<p>It does not prove market-wide demand, given early adopters in two countries. It does not prove transaction volume, autonomous buying, merchant return on investment, or broad retailer acceptance.</p>

<p>Agentic commerce may have found consumer demand before it solved merchant acceptance. Meta's numbers move the conversation past demos, and its own CFO described authenticated, permissioned routes as the operating constraint.</p>

<p>If Meta starts charging businesses for the transactions Muse facilitates, what evidence would you need to see before paying?</p>`,
}

const { data, error } = await supabase.from('blog_posts').insert(post).select('id, slug').single()
if (error) { console.error('Insert failed:', error); process.exit(1) }
console.log('Post inserted successfully:', data.id)
console.log('URL: https://theroberthu.com/blog/' + data.slug)
