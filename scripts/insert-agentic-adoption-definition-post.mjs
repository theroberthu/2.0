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

const DESCRIPTION = 'Two September surveys put AI shopping delegation at 69% and 7%. Both are defensible. The problem is that adoption statistics measure six different behaviors.'

const EXT = 'target="_blank" rel="noopener noreferrer"'

const post = {
  slug: 'agentic-commerce-adoption-definition-problem',
  // Editorial H1 (renders on page, and as JSON-LD headline)
  title: 'Agentic Commerce Has an Adoption Definition Problem',
  // Query-aligned search title (drives <title>, OG and Twitter). Deliberate split.
  meta_title: 'AI Shopping Adoption: Why 69% and 7% Both Look True',
  excerpt: "Global Payments reports 69% would let an agent spend $100 on groceries. ACI Worldwide reports 7% would allow autonomous purchasing under predefined conditions. Six levels of delegation explain the gap, and two of them are barely measured.",
  meta_description: DESCRIPTION,
  og_image: '/images/blog/agentic-commerce-adoption-definition-problem.svg',
  category: 'Digital Transformation',
  tags: ['agentic commerce', 'consumer research', 'AI shopping agents', 'delegation', 'measurement', 'payments'],
  status: 'published',
  featured: false,
  read_time_minutes: 6,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: false,
    related_posts: ['niq-similarweb-agentic-commerce-measurement', 'agentic-commerce-consensus-research-forecasts-marketplace-sellers', 'visa-mastercard-know-your-agent-interoperability'],
    featured_image_alt: 'Six ascending levels of shopping delegation from assist to autonomous, with the prepare and autonomous levels marked as unmeasured by current consumer research',
  },
  published_at: new Date().toISOString(),
  content: `<p>Two numbers, published a week apart, by two payments companies.</p>

<p>Sixty-nine percent would let an AI agent spend up to $100 on groceries. Seven percent would allow autonomous purchasing under predefined conditions.</p>

<p>Both sit at what looks like the same level of delegation, permission for an agent to buy inside a limit. They are not the same question, and neither company is wrong. Treating the gap as a contradiction to be resolved is how operators end up planning for a behavior nobody has measured.</p>

<h2>The 7% that changed meaning three times</h2>

<p>Start with one of those numbers travelling through a single <a href="https://investor.aciworldwide.com/news-releases/news-release-details/only-7-fashion-shoppers-trust-ai-buy-them-today-showing" ${EXT}>ACI Worldwide press release</a>. The headline says 7% of fashion shoppers "trust AI to buy for them today." The opening says 7% "would allow an AI assistant to make purchases without approval." The findings section says 7% "would permit autonomous purchasing under predefined conditions."</p>

<p>Those are three different claims. Trusting, permitting without approval, and permitting inside predefined conditions are not interchangeable, and the third one is the narrowest. <a href="https://www.retaildive.com/news/consumers-trust-ai-advise-do-not-consent-purchasing-them/830990/" ${EXT}>Trade coverage</a> picked up the looser version, which is how a bounded-delegation question becomes a headline about autonomy.</p>

<p>I would not single out one company for this. The vocabulary does not exist yet, so everyone is improvising it, including the people writing about it.</p>

<h2>What each study actually asked</h2>

<p><a href="https://investors.globalpayments.com/news-events/press-releases/detail/516/consumers-expect-ai-to-make-15-of-their-purchases-within" ${EXT}>Global Payments published its Agentic Commerce Report</a> on September 23. The fieldwork ran in May 2026, through The Lantern, covering 8,027 consumers across the United States, United Kingdom, France, Brazil, China, Singapore and Australia, with a comparable 2025 wave of 8,000 in the same markets.</p>

<p>ACI Worldwide published YouGov research on September 16. That fieldwork ran in June 2026, online, covering 3,328 adults aged 18 to 65, weighted, split 2,172 in the United Kingdom and 1,156 in the United States. The fashion findings rest on the 3,194 respondents who buy clothing, footwear or accessories.</p>

<p>So the first thing to say plainly is that these are not two readings of one population. One is seven markets including China, Brazil and Singapore, across groceries, clothing, electronics, cinema tickets and subscriptions. The other is two markets, weighted toward the United Kingdom, asking about fashion.</p>

<p>Scope inside the first study also needs care. Global Payments explicitly attributes three figures to Americans: 45% have used or would consider an AI shopping agent, 50% are concerned about payment security, and the release frames its narrative around American attitudes. The other numbers, including the 69% who use AI to find better deals, the 63% who use it to save time, the $100 category figures and the 33% who want to approve every transaction, are not labelled by population in the release. I am not going to assume they are American because they sit near a sentence that says Americans.</p>

<h2>Why the numbers diverge</h2>

<p>The instruments differ more than the populations do.</p>

<p>Global Payments asks about comfort, category by category, with a stated ceiling. Up to $50 for cinema tickets, meal delivery, gift cards and subscriptions. Up to $100 for groceries at 69%, clothing at 69%, luxury clothing at 64%, electronics at 58%. A respondent can say yes to all of them.</p>

<p>ACI asks respondents to choose one posture. Fifty-three percent uncomfortable, 20% recommendations only, 14% approval on every purchase, 7% autonomous within predefined conditions. Those four options sum to 94, so the choices compete with each other in a way a category comfort scale does not.</p>

<p>Put one more way: the first instrument measures how far a willing consumer will go in a named category with a price cap. The second measures which single description a consumer picks for their overall stance on fashion. Different questions, different denominators, different answers. Both are hypothetical, and neither observes a transaction.</p>

<h2>Six levels, and the two nobody measured</h2>

<p>Here is the taxonomy I would use, offered as my framework rather than either company's.</p>

<p><strong>Assist.</strong> The agent researches, compares or hunts deals. Both studies measure this and both find it popular. Price drop alerts and cross-retailer comparison each drew 35% in the ACI data, well ahead of personalized suggestions at 18%.</p>

<p><strong>Recommend.</strong> The agent proposes the choice. ACI puts 20% here explicitly.</p>

<p><strong>Prepare.</strong> The agent assembles the cart but authorizes nothing. Neither study measures it, which matters because it is the level closest to what the platforms are actually shipping.</p>

<p><strong>Approve.</strong> The agent initiates and the human signs off each time. Global Payments has 33% asking for exactly this. ACI has 14%.</p>

<p><strong>Bounded delegation.</strong> Standing permission inside limits of category, amount, retailer or timing. This is where the 69% and the 7% both sit, and the reason they look incompatible is that they were produced by incompatible instruments.</p>

<p><strong>Autonomous.</strong> No per-transaction approval and no meaningful bound. Neither study measures this cleanly either.</p>

<p>Two of six levels are unmeasured, and one of them is the level the software is being built for.</p>

<h2>What an operator should count instead</h2>

<p>The temptation is to pick a number for the planning deck. The better move is to stop treating adoption as one number.</p>

<p>An operator planning for this should be able to say, separately, what share of its customers use AI to research, what share arrive with an AI recommendation, what share build a cart through an agent, what share approve an agent-prepared transaction, what share have granted standing authority, and what share of orders actually complete without a human touching them.</p>

<p>The middle of that list is where the products already are and where the research is thinnest. Almost nobody can report those today, and no industry dataset publishes them. That is the finding, not a gap to apologize for. <a href="/ai-commerce-2027">Infrastructure keeps arriving ahead of evidence</a>, and the <a href="/blog/niq-similarweb-agentic-commerce-measurement">measurement work is still being reconstructed</a> from the outside. Willingness surveys will not substitute, because a survey can only report what a consumer says they would allow, never what an agent did.</p>

<h2>The objections</h2>

<p>Both studies come from payments companies with a commercial stake in agentic commerce growing. That does not make the fieldwork wrong, and both disclose their methods, but it does mean the framing of every headline serves a roadmap.</p>

<p>You could also argue the divergence is mostly category. Fashion is identity-laden and fit-dependent, groceries are replenishment, and nobody should expect the same delegation appetite in both. That is a fair reading, and it strengthens rather than weakens the case, because it means a single adoption percentage was never going to travel across categories.</p>

<p>The last objection is the most serious. Definitional precision does not move volume, and an operator could reasonably say that agents are coming regardless of how carefully the industry labels the levels. True. But <a href="/blog/agentic-commerce-consensus-research-forecasts-marketplace-sellers">forecasts describe a market</a>, and only the delegation level tells you which part of your business the agent touches.</p>

<p>Before your next planning cycle prices in agentic demand, can anyone in the room say which of those six levels the number actually came from?</p>
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
