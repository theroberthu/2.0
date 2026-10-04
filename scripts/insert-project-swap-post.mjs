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

const DESCRIPTION = "Anthropic's Project Swap found that 85% of the shortfall from the best possible outcome came from the agent's imperfect model of the person, not from how the agents traded."

const EXT = 'target="_blank" rel="noopener noreferrer"'

const post = {
  slug: 'anthropic-project-swap-agentic-commerce-shopper-preferences',
  // Editorial H1 (renders on page, and as JSON-LD headline)
  title: 'The Hardest Part of Agentic Commerce May Be Knowing What the Shopper Wants',
  // Query-aligned search title (drives <title>, OG and Twitter). Deliberate split.
  meta_title: 'Anthropic Project Swap Shows AI Shopping Has a Preference Problem',
  excerpt: "Agentic commerce has two representation problems. Whether the agent understands the product is the one the industry has worked on. Anthropic's controlled book market found the other one, whether the agent understands the person, accounted for 85% of the gap from the best possible outcome, and that a full model upgrade moved human outcomes by 0.01.",
  meta_description: DESCRIPTION,
  og_image: '/images/blog/anthropic-project-swap-agentic-commerce-shopper-preferences.svg',
  category: 'E-commerce Strategy',
  tags: ['agentic commerce', 'Anthropic', 'preference representation', 'AEO', 'agent delegation', 'personalization'],
  status: 'published',
  featured: false,
  read_time_minutes: 6,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: false,
    related_posts: ['amazon-rufus-account-memory', 'visa-mastercard-know-your-agent-interoperability', 'agentic-commerce-adoption-definition-problem'],
    featured_image_alt: 'Two representation problems in agentic commerce, one for the product and one for the person, with the shopper model as the larger source of error',
  },
  published_at: new Date().toISOString(),
  content: `<p>Almost everything I have written about agentic commerce has been about one half of the problem: whether the agent can understand the product. Structured attributes, catalog accuracy, machine-readable storefronts, checkout protocols, the <a href="/aeo">AEO</a> discipline of making a product legible to software. That is the supply side.</p>

<p><a href="https://www.anthropic.com/research/project-swap" ${EXT}>Anthropic published an experiment on September 24</a> that points at the other half, which is whether the agent can understand the person.</p>

<p>In its controlled market, the answer was mostly no, and that turned out to matter more than anything the agents did at the bargaining table.</p>

<h2>What they actually ran</h2>

<p>Project Swap put 201 Anthropic employees across six offices into a barter economy. Everyone brought a book to give away. Each person had a short chat with Claude about what they wanted to read. From that conversation, Claude built a ranking of every book in that person's local pool, using Fable 5, a strong model. Agents then met on a trading floor and swapped until the clock ran out.</p>

<p>Separately, each participant ranked 10 books from their pool by hand. The agents never saw those rankings. That gave Anthropic something the industry almost never has: a ground truth to score the agent's model of the person against.</p>

<p>Pool sizes ran from 115 in San Francisco down to three in Dublin, which is excluded from most of the analysis. 188 people submitted rankings, and that is the denominator for the preference results, not 201.</p>

<h2>How well the agent knew its person</h2>

<p>Across all pairs of books a participant ranked, Claude's ordering agreed with theirs 61% of the time. Random guessing would get 50%.</p>

<p>The baselines are what make that number legible. Ranking by raw popularity got about 53%. Collaborative filtering, the "people who liked X also liked Y" approach that powers most recommendation engines, got about 55%. Anthropic also points to a study where an algorithm predicted which joke a person would find funnier about 61% of the time, and the person's own friends managed about 57%.</p>

<p>So a five-minute chat beat the standard machinery and roughly matched a friend. Read optimistically, that is impressive. Read structurally, it is a representation that is right about three times in five.</p>

<p>Effort helped, modestly and with diminishing returns. The median participant typed 216 words across eight messages, and doubling the words typed was associated with 4.1 percentage points more pairwise agreement. That is a log specification with office fixed effects, so it is not a case for talking to your assistant indefinitely.</p>

<h2>Where the market actually lost</h2>

<p>Anthropic scores outcomes on a simple scale. Getting your top-ranked book is 1, your last-ranked book is 0. Averaged across participants, that is the market's efficiency.</p>

<p>The best feasible assignment, computed from what people actually wanted, scores 0.89, roughly everyone's second choice. The live decentralized market scored 0.55, roughly everyone's fifth choice out of ten.</p>

<p>Then the decomposition. Take the best possible assignment computed from Claude's rankings, and score it against what people actually wanted. It reaches 0.60. So the gap between 0.89 and 0.60 is the cost of working from an imperfect model of the person, and the gap between 0.60 and 0.55 is the cost of letting agents haggle instead of running a clearinghouse. That is 85% representation and 15% market design.</p>

<p>Swapping in a textbook mechanism barely helped. Top Trading Cycles, run on Claude's rankings, also landed at 0.60.</p>

<h2>Capability did not rescue it</h2>

<p>This is the finding I keep returning to.</p>

<p>Anthropic reran the floors with different models. Judged on Claude's own rankings, stronger models traded better: Haiku floors averaged 0.75, Opus floors 0.88. Model choice mattered considerably more than whether an agent was told to be ruthless or prosocial, which moved outcomes about 0.02.</p>

<p>But scored against what people actually wanted, that advantage nearly vanished. <a href="https://www-cdn.anthropic.com/3818cf6119b88f9714d995f6549fa8aac0bd5ab5/Project-Swap.pdf" ${EXT}>In Anthropic's footnote</a>, the largest model gap it found, 0.12 between Haiku and Opus floors, becomes 0.01 on people's own rankings.</p>

<p>Rerunning the intake with different models tells the same story. Fable managed 61% agreement, Opus 60%, Sonnet 59%, Haiku 57%. Four points across the entire model range.</p>

<p>The agent can execute the purchase perfectly and still buy the wrong thing.</p>

<h2>What this is not</h2>

<p>This is Anthropic studying Anthropic, using Anthropic's models, in a market Anthropic designed. The disclosure is unusually good, with reruns, confidence intervals, named limitations and a published appendix, but it is not independent.</p>

<p>The constraints are real. Employees who helped build Claude are unusually willing to trust it. Books may be the most subjective category in retail. It was barter, not pricing and checkout. Every agent was a cooperative Claude with no adversaries. The scoring assumes the gap between your first and second choice equals the gap between your thirtieth and thirty-first. Only 59% answered the final survey. And Anthropic concedes part of the error may be irreducible, quoting a participant: "I don't even fully know what I want when it comes to books."</p>

<p>Nothing here tests Amazon, Walmart, ChatGPT or any production shopping agent.</p>

<h2>The precondition nobody is building</h2>

<p>In September I wrote about Know Your Agent work and <a href="/blog/visa-mastercard-know-your-agent-interoperability">the four questions a merchant's checkout now has to answer</a>: which agent is this, who operates it, what was it authorized to do, and can another network's answer be trusted.</p>

<p>Project Swap adds a fifth, and it sits upstream of all four: whether this agent has understood this particular person.</p>

<p>Anthropic's proposal is a representation test. After intake, show someone a handful of sample decisions the agent would make, and let them correct it or walk away. The participants who said Claude's summary of them missed nothing would hand an agent 34% of their annual book budget with no veto rights. Those who said it missed something offered 23%. Controlling for what each person would give a well-read friend, the gap holds at nine points.</p>

<p>People could not detect being represented by a weaker negotiator in <a href="https://www.anthropic.com/features/project-deal" ${EXT}>Anthropic's earlier Project Deal</a>. They could detect being misunderstood, and they priced it.</p>

<h2>What this changes for merchants</h2>

<p>When I wrote that <a href="/blog/amazon-rufus-account-memory">Rufus account memory turns listings into persona matching</a>, I treated the shopper profile as the accurate part of the system and the listing as the variable. Project Swap inverts the burden of proof on that assumption.</p>

<p>Product data tells the agent what the item is. Preference data tells it whether the item is right for you.</p>

<p>Three consequences follow. Persistent memory is worth something only if the shopper can inspect and repair it, which is a product requirement, not a privacy footnote. Delegated authority should scale with demonstrated representation accuracy rather than transaction capability alone. And merchants are increasingly competing to win inside a buyer-side model of the customer that they cannot see, cannot audit, and did not build.</p>

<p>If the agent's model of your customer is wrong, whose problem is that?</p>`,
}

const { data, error } = await supabase.from('blog_posts').insert(post).select('id, slug').single()
if (error) { console.error('Insert failed:', error); process.exit(1) }
console.log('Post inserted successfully:', data.id)
console.log('URL: https://theroberthu.com/blog/' + data.slug)
