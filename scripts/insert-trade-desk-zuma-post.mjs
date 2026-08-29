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

const DESCRIPTION = 'The Trade Desk shipped agentic AI for media buying. The headline 32% CPA number came from the least agentic part of the release.'

// Primary The Trade Desk sources, cited at the claims they support.
const SRC_PR = 'https://www.thetradedesk.com/press-room/the-trade-desk-introduces-kokai-zuma-the-latest-release-of-kokai'
const SRC_REL = 'https://www.thetradedesk.com/resources/zuma-q3-2026-zuma-release-highlights'
const EXT = 'target="_blank" rel="noopener noreferrer"'

const post = {
  slug: 'trade-desk-kokai-zuma-agentic-media-buying',
  title: 'The Trade Desk Is Showing What Agentic Media Buying Actually Looks Like',
  excerpt: 'Kokai Zuma is being read as agentic AI arriving in programmatic. The release notes are more restrained: the assistant is in closed beta, one narrow execution capability exists, and the 32% CPA result came from a generally available optimization model. The interesting part is what The Trade Desk says it spent the money on.',
  meta_title: 'The Trade Desk Is Showing What Agentic Media Buying Actually Looks Like',
  meta_description: DESCRIPTION,
  og_image: '/images/blog/trade-desk-kokai-zuma-agentic-media-buying.svg',
  category: 'Digital Transformation',
  tags: ['The Trade Desk', 'agentic AI', 'programmatic advertising', 'media buying', 'AI governance', 'operating model'],
  status: 'published',
  featured: false,
  read_time_minutes: 6,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: false,
    related_posts: ['ai-wont-fix-broken-work', 'helium-10-mcp-ecommerce-software-infrastructure', 'who-pays-when-ai-agents-fail'],
    featured_image_alt: 'A media buying interface getting simpler while the forecasting and decision system underneath it grows more complex',
  },
  published_at: '2026-08-28T13:00:00.000Z',
  content: `<p>The Trade Desk <a href="${SRC_PR}" ${EXT}>released Kokai Zuma on August 27</a>, describing it as a release that "makes Kokai easier to navigate, learn and use, bringing together new agentic AI capabilities and a simpler measurement framework."</p>

<p>The interface is the least interesting part. The release documentation is worth reading closely, because it is unusually clear about which capabilities exist today, which are gated, and where the number everyone will quote actually came from.</p>

<h2>The most useful sentence is about the part you cannot see</h2>

<p>Buried in the announcement is a line I did not expect a company to publish about its own redesign.</p>

<p>"While the redesigned interface is the most visible change, the larger resource investment has gone into upgrading the platform's forecasting engine and the AI infrastructure underneath the platform." The release goes on to describe that work as predicting available inventory, modeling campaign outcomes, and powering Koa's capabilities in real time.</p>

<p>That is the shape of the whole thing. The screen got simpler because the decision system underneath got heavier, the same trade I ran into when <a href="/blog/ai-checkout-interface-commerce-infrastructure">the checkout page turned out to be a data collection device</a> rather than the thing doing the work. A simpler surface usually means complexity moved, not removed.</p>

<h2>What media buying actually consists of</h2>

<p>A meaningful share of media-buying work is necessary but operational: navigating screens, checking pacing, reconciling reports, rebuilding audiences, and diagnosing routine issues. Very little of that is where the trader's judgment lives. The judgment is in deciding what the campaign is for, what tradeoffs are acceptable, and whether a result means anything. The opportunity is to compress the operational work around that judgment.</p>

<h2>Where the execution boundary actually sits today</h2>

<p>This is where precision matters, because "agentic" is doing a lot of work in the coverage and the documentation is more restrained.</p>

<p>The Trade Desk describes a Koa Assistant as "a conversational AI assistant powered by a growing set of specialized Koa Agents that support campaign creation, audience building, troubleshooting, performance analysis, and more." That is a coordination architecture rather than a single copilot. Specialized systems working parts of one problem is not the same as one chat window answering questions.</p>

<p>But read <a href="${SRC_REL}" ${EXT}>the availability table</a>. The Koa AI assistant is in closed beta. So are the Koa frequency features and the conversion lift enhancements. Updates to bulk editing are listed as coming soon. Generally available: the refreshed interface, the applied settings view, Koa Optimizations, Audience Unlimited, and the new reporting.</p>

<p>On execution, the only capability I can find that changes settings rather than recommending a change is the frequency feature, which the documentation says uses AI to dynamically adjust frequency settings. That is real execution, and it is narrow, and it is in closed beta.</p>

<p>So the honest description today is analysis and recommendation across a coordinated set of agents, one narrow automated adjustment, and most of the agentic surface still gated. Nothing here describes a system that sets its own objectives or runs campaigns without a human defining what they are for.</p>

<h2>The number that will get quoted is not the agentic one</h2>

<p>The Trade Desk reports that "a global platform analysis showed a 32% CPA improvement on average with Koa Optimizations enabled." The footnote is more informative than the headline: platform data comparing the upgraded model with the previous model, n=62, with results described as statistically significant at p less than 0.05.</p>

<p>That is better disclosed than most vendor numbers. A stated sample size, a named comparison and a significance threshold put it ahead of usual practice. It remains company-reported analysis of the company's own platform, with no disclosed geography, vertical, campaign type or time period, and 62 campaigns is a small base to generalize from.</p>

<p>Here is the part I find more interesting. The 32% is attributed to Koa Optimizations, which is generally available and is an optimization model. The press release describes the improvement more loosely as coming from "Zuma's improved modeling and forecasting capabilities," a broader framing than the release notes support.</p>

<p>The measured result comes from the generally available optimization model, not from the closed-beta Koa Assistant. The agentic assistant is in closed beta and has no published performance data at all. That is not a criticism of the product. It is a caution about which claim the evidence actually supports.</p>

<h2>What changes for the person doing the job</h2>

<p>If more of the analysis, forecasting, and routine adjustment moves into the platform, the trader's work moves up a level rather than disappearing.</p>

<p>Less time manipulating controls and pulling reports. More time deciding what the objective is, what constraints the system should operate inside, and whether a recommendation makes sense given something the platform cannot see. That is a more valuable job and a harder one, because judging a recommendation you did not derive means understanding the reasoning well enough to disagree with it.</p>

<p>This is my interpretation rather than anything The Trade Desk has claimed, but it follows from the architecture. The more a system executes, the more the human role shifts from operating to governing.</p>

<h2>Which makes governance the constraint, not the paperwork</h2>

<p>Once a system can change settings, permissions and approval thresholds stop being overhead and become the control surface.</p>

<p>Objectives have to be defined precisely enough that optimizing toward them produces something the business wants. Metric definitions have to be stable, because a model reasoning against a slightly unusual definition will not quietly correct for it the way an experienced trader would. Someone has to be able to reconstruct why a change was made. And accountability when <a href="/blog/who-pays-when-ai-agents-fail">an agent acts and the outcome is wrong</a> does not resolve itself because the interface got friendlier.</p>

<p>A bad instruction executed quickly is still a bad instruction. It just arrives faster and with more confidence.</p>

<h2>The counterargument deserves weight</h2>

<p>There is a serious case that this is evolution rather than a new operating model.</p>

<p>Programmatic buying has been automated for years. Algorithmic bidding, automated optimization and machine-learned targeting are not new, and a fair reading is that "agentic" is partly new vocabulary for a longer trend. Most of the genuinely new capability here is in closed beta, so the operating model has not changed for most advertisers yet.</p>

<p>There are structural cautions too. A simpler interface can make it harder to see how a decision was reached, which is a real cost when you need to challenge one. Platform-defined optimization is not identical to advertiser business objectives, and a system that gets more efficient at hitting a proxy metric is not necessarily producing incremental value. Efficiency and business outcomes are different things, and only one is being measured here.</p>

<p>I do not think the honest answer is that this is nothing. I think it is that the infrastructure investment is real and the operating-model change is mostly still ahead of the product, which are two different claims that the announcement tends to merge.</p>

<h2>Where this leaves me</h2>

<p>The durable shift is not that AI can optimize a campaign. Algorithms have done that for a long time.</p>

<p>It is that AI is starting to coordinate the work around the campaign: assembling signals, forecasting outcomes, diagnosing problems, proposing changes, and in narrow cases making them. The value moves beneath the interface, the same pattern I described when <a href="/blog/helium-10-mcp-ecommerce-software-infrastructure">commerce software started behaving like infrastructure</a>, and it puts a familiar burden back on the operator. The system inherits whatever your objectives and definitions actually say, at speed, and <a href="/blog/ai-wont-fix-broken-work">it will not fix work that was unclear to begin with</a>.</p>

<p>If a platform can analyze the campaign, recommend the change, and execute it inside boundaries you set, how much do you have to understand about its reasoning to be genuinely accountable for the result?</p>
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
