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

const DESCRIPTION = "Visa tested 22 AI models on simulated shopping. In 54% of failed runs, the result was still a purchase decision, showing why agents need a clear stop rule."

const EXT = 'target="_blank" rel="noopener noreferrer"'

const post = {
  slug: "visa-agentic-commerce-benchmark-ai-shopping-failures",
  // Editorial H1 (renders on page, and as JSON-LD headline)
  title: "Visa's AI Shopping Benchmark Shows Why Agents Need a Stop Rule",
  // Query-aligned search title (drives <title>, OG and Twitter). Deliberate split.
  meta_title: "Visa Agentic Commerce Benchmark: Why AI Agents Need a Stop Rule",
  excerpt: "Visa tested 22 AI models on simulated shopping decisions. 57.2% of runs passed, and 54% of failed runs still ended in a simulated purchase decision. Permission to buy and knowing enough to buy need separate controls.",
  meta_description: DESCRIPTION,
  og_image: '/images/blog/visa-agentic-commerce-benchmark-ai-shopping-failures.svg',
  category: "E-commerce Strategy",
  tags: ["Visa", "agentic commerce", "AI shopping agents", "benchmark", "agent authorization", "shopper preferences", "stop rule"],
  status: 'published',
  featured: false,
  read_time_minutes: 5,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: false,
    related_posts: ["anthropic-project-swap-agentic-commerce-shopper-preferences", "visa-bill-billtrust-ai-agent-b2b-payments", "walmart-agent-gateway-agent-profiles"],
    featured_image_alt: "Pull quote from Robert Hu on Visa's AI shopping benchmark: Every layer can pass while the decision behind it is incomplete or wrong.",
  },
  published_at: new Date().toISOString(),
  content: `<p>On November 5, Visa published the first results from the <a href="https://investor.visa.com/news/news-details/2026/Visa-Releases-First-of-Its-Kind-Industry-Benchmark-for-AI-Shopping-Almost-Half-of-Test-Runs-Fail/default.aspx" ${EXT}>Visa Agentic Commerce Benchmark</a>, a test of whether an AI shopping assistant can work out what a shopper needs before recommending what to buy. Across 990 scored runs, 57.2% passed.</p>

<p>Most coverage led with that number. The more useful one sits underneath it. Of the 424 runs that did not pass, 229, or 54%, still ended in a simulated purchase decision that failed Visa's full pass standard. No checkout or payment was attempted and no transaction took place. A purchase here means the benchmark's simulated shopper committed to an offer, and a failed one is not necessarily the wrong product.</p>

<p>Agentic commerce has spent this year building controls for the moment money moves: which agent is acting, what the shopper allowed, how much it may spend, which credential it carries, whether the merchant accepts it. Visa's benchmark tests something earlier: whether the agent knows enough to act at all.</p>

<h2>What Visa actually tested</h2>

<p>The setup, described in Visa Research's <a href="https://www.visapaymentsfrontier.io/articles/agentic-commerce-benchmark/assets/visa-agentic-commerce-benchmark-whitepaper.pdf" ${EXT}>whitepaper</a>, is a conversation between two models. The model under test plays the shopping assistant. Another model plays the customer, who holds a private dossier of requirements. Most of those facts start locked. A separate matcher releases one only when the assistant asks the relevant question or requests the right action, such as checking with a spouse.</p>

<p>The assistant searches a controlled market that is isolated from the live web, built from real product listings, prices, seller policies and reviews, and identical for every model. Twenty-two models from 12 labs each ran 15 episodes three times, across TVs, laptops and personal-care appliances. Ten of the 15 episodes are TVs. One, a family replacing a 65-inch set, is public. The other 14 are private.</p>

<p>A run passes only if the customer's final decision is correct and the assistant uncovered every requirement that decision depends on. A selection that happens to match the answer key without those facts fails. Declining to buy passes only when nothing on the market fits.</p>

<p>Each episode ends when the simulated customer selects an offer or declines. Checkout, payment and order placement are outside the current scope.</p>

<h2>The failure that matters</h2>

<p>Visa's <a href="https://www.visapaymentsfrontier.io/#agentic-commerce-benchmark" ${EXT}>results page</a> splits the 990 runs four ways. 566 passed. 229 ended in a purchase decision that did not pass. 114 ended with no purchase although a suitable offer existed. 81 ended with no decision, mostly from hitting the tool-call limit or breaking the reply format. 229 of 424 failures is the 54%.</p>

<p>Visa counts a purchase decision as failed in two cases: the offer missed an identified requirement, or it was chosen before every requirement came out, even if it happens to fit. Visa does not publish an aggregate split between products that violated an identified requirement and products selected before every required fact was established.</p>

<p>The sharpest evidence comes from two episodes where nothing on the market meets every requirement, so the correct answer is to buy nothing. By my calculation from the per-model results Visa publishes, not one of Visa's headline findings, 46 of 132 runs on those episodes still ended in a purchase decision, about 35%. Since nothing fit, every one of those selections missed a requirement.</p>

<p>The whitepaper's working hypothesis explains why. Capable models seldom misread a fact once they have it. They fail earlier, by not asking the question that would reveal it, or by treating the shopper's silence as the absence of a constraint. Two of the five failure patterns Visa designs for are treating a value missing from a listing as acceptable and declaring that nothing fits while a suitable offer sits unexamined.</p>

<h2>Permission is not knowledge</h2>

<p>Each control the industry is shipping answers a different question. <a href="/blog/walmart-agent-gateway-agent-profiles">Walmart's Agent Profiles</a> let a customer give an agent a defined spending limit or require approval for every purchase. A limit says how much an agent may spend. It says nothing about whether the TV it picked supports the format the family's phone records in. A tokenized credential proves the agent may pay. Merchant acceptance proves the merchant will take the order. Every layer can pass while the decision behind it is incomplete or wrong.</p>

<p>This is the gap <a href="/blog/anthropic-project-swap-agentic-commerce-shopper-preferences">Anthropic's Project Swap</a> exposed in September, when 85% of a simulated market's shortfall came from imperfect models of what people wanted rather than from bargaining. Visa measures the same gap from another angle: not whether the agent ranks preferences correctly, but whether it asked enough to rank them at all.</p>

<p>It also explains why <a href="/blog/visa-bill-billtrust-ai-agent-b2b-payments">the Visa, BILL and Billtrust pilot</a> is a sensible place to start. There, the agent executes an invoice payment the buyer already approved, and every requirement is written down before it arrives. A consumer shopping agent has to discover unstated needs, compare offers, decide whether anything fits and know when to stop. When NPCI's chairman argued that <a href="/blog/npci-upi-ai-agent-authorization">AI may recommend but should not decide that money moves</a>, the recommendation was the part allowed to be uncertain. This benchmark shows how uncertain it is.</p>

<h2>What the numbers do not show</h2>

<p>Visa designed, ran and scored this benchmark, and it sells infrastructure for agentic commerce. Nobody has reproduced the results, and 14 of the 15 episodes cannot be inspected. The categories are narrow and weighted toward TVs. The shopper is a model, not a person; Visa says it plans to calibrate it against recorded human sessions. The pass standard is deliberately strict, so a run fails when the agent skipped a task-defined requirement even if the product fits, which means the 42.8% failure rate is not a count of wrong products or of purchases that would harm a consumer. The confidence intervals of the next 11 models overlap those of the top two. The five costliest models passed 67.1% of runs and the five cheapest 50.2%, which shows correlation, not that price causes better shopping.</p>

<p>Across models, all three runs of the same episode passed only 34.2% of the time. A demonstration that works once proves little.</p>

<h2>What operators should take from it</h2>

<p>None of this argues against agents buying. It argues for a control that sits before payment authorization: a stop rule. Visa's own <a href="https://corporate.visa.com/en/sites/visa-perspectives/press-releases/visa-trust-index-consumer-insights-into-ai-shopping-payments.html" ${EXT}>Trust Index</a> found that 23% of US consumers trust AI to handle payments for them. The benchmark makes that trust problem more concrete: authorization does not help if the decision underneath it is incomplete. These are implications from the evidence, not controls Visa has tested:</p>

<ul>
<li>Confirm hard constraints explicitly, and separate required attributes from preferences.</li>
<li>Treat a missing product attribute as unknown, not as a match.</li>
<li>Keep buying nothing as a valid, logged outcome.</li>
<li>Require fresh approval when the product, price or terms change.</li>
<li>Route expensive, ambiguous or hard-to-return purchases to a person.</li>
<li>Record which requirements were established before the agent acted.</li>
<li>Test the same task repeatedly, not once.</li>
</ul>

<p>Visa says later phases will extend the benchmark to checkout, payment and order placement. Those layers have more mature controls, but Visa has not tested them in this benchmark. The missing one is the layer that says not yet.</p>

<p>If your agent could buy only when it could show what it had established, how often would it be allowed to act?</p>`,
}

const { data: existing } = await supabase.from('blog_posts').select('id').eq('slug', post.slug)
if (existing && existing.length) { console.error('Slug already exists, not inserting'); process.exit(1) }

const { data, error } = await supabase.from('blog_posts').insert(post).select('id, slug').single()
if (error) { console.error('Insert failed:', error); process.exit(1) }
console.log('Post inserted successfully:', data.id)
console.log('URL: https://theroberthu.com/blog/' + data.slug)
