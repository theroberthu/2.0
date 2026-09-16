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

const DESCRIPTION = 'Noibu launched six AI agents that draft a change, ship it after human approval, then measure the result. The loop is the claim. The evidence is thinner.'

// Primary sources. The release text is cited through the trade republication
// because no Business Wire canonical for this release could be located or
// accessed; businesswire.com returns 403 to automated requests.
const SRC_RELEASE = 'https://salestechstar.com/predictive-ai-artificial-intelligence/noibu-launches-ai-that-improves-your-ecommerce-store-every-day/'
const SRC_PRODUCT = 'https://www.noibu.com/ai-agents'
const SRC_CASESTUDY = 'https://www.noibu.com/customers/case-studies/totally-bamboo-ai-plugin'
const EXT = 'target="_blank" rel="noopener noreferrer"'

const post = {
  slug: 'noibu-ai-agents-closed-loop-ecommerce',
  // Editorial H1 (renders on page, and as JSON-LD headline)
  title: 'AI Gets Interesting When It Has to Prove the Change Worked',
  // Query-aligned search title (drives <title>, OG and Twitter). Deliberate split.
  meta_title: 'Noibu Launches Six AI Agents That Ship and Measure Fixes',
  excerpt: 'Noibu launched six AI agents for CRO, testing, accessibility, bugs, performance and ROAS. The agent list is not the news. The news is a vendor promising to tell you whether the change it shipped actually worked.',
  meta_description: DESCRIPTION,
  og_image: '/images/blog/noibu-ai-agents-closed-loop-ecommerce.svg',
  category: 'Digital Transformation',
  tags: ['AI agents', 'ecommerce operations', 'AI governance', 'conversion optimization', 'experimentation', 'Noibu'],
  status: 'published',
  featured: false,
  read_time_minutes: 6,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: false,
    related_posts: ['klaviyo-headless-agent-controls', 'anthropic-claude-commerce-intelligence-layer', 'trade-desk-kokai-zuma-agentic-media-buying'],
    featured_image_alt: 'An operational loop running from signal and diagnosis through a human approval gate to execution and outcome measurement, with the measurement step highlighted',
  },
  published_at: new Date().toISOString(),
  content: `<p>Noibu launched six AI agents this week covering CRO, A/B testing, ADA compliance, bug resolution, performance and ROAS. The list is the least interesting part. Agent rosters are a standard launch format now, and a six-item lineup mostly tells you which buyers a vendor wants to reach.</p>

<p>The sentence worth reading is about what happens after a change goes live. <a href="${SRC_RELEASE}" ${EXT}>Noibu describes its agents</a> as drafting the change, shipping it once a human approves, and then measuring the result against what it promised to move. The company frames the full sequence as detect, diagnose, recommend, act and validate, with the approval step placed at the point anything reaches a live store.</p>

<p>That last verb is the one that has been missing.</p>

<h2>The approval gate is no longer the story</h2>

<p>I have written before about where the approval boundary sits, most directly when <a href="/blog/klaviyo-headless-agent-controls">Klaviyo exposed a send action to agents</a> and the controls turned out to be the thing being bought. The useful question then was whether capability shipped with control.</p>

<p>Noibu answers that question the way everyone now does. Its <a href="${SRC_PRODUCT}" ${EXT}>product page</a> says nothing ships without your approval, and that the agent stages the change for review while you decide what goes live. Anthropic's merchant agent stages every write the same way. So do the assistants building grocery carts. The human approval gate went from differentiator to table stakes in about a year, which is a good outcome and is no longer news.</p>

<p>What Noibu adds is a step past the gate. The vendor is promising not only that a person approved the change, but that the platform will tell you whether the change did what it was supposed to do.</p>

<h2>Open loop and closed loop</h2>

<p>Most ecommerce analytics runs an open loop. Data produces an insight, the insight produces a recommendation, and the recommendation joins a work queue. The deliverable is the recommendation. Whether anyone shipped it, and whether it worked, falls outside the tool.</p>

<p>A closed loop runs further: signal, diagnosis, proposed change, human approval, execution, outcome measurement, then a next decision informed by that result. The difference is not autonomy. It is accountability for the output. And it closes in one narrow sense only. Measuring the result closes the operational loop. It does not prove the change caused the result.</p>

<p>Noibu's clearest claim is about plumbing rather than intelligence. The company argues the insight itself is now a commodity, that any capable model handed a conversion report can point at the drop-off, and that the hard part is serving the change without breaking the page, logging it as a release event the data can see, and joining it to a store-specific pipeline so the result can be measured against a control. The agent data layer, covering sessions, scroll depth, click maps, journeys, Core Web Vitals, errors and checkout events, is tied to the release that was live and the variation each shopper saw.</p>

<p>That is a more defensible position than owning a smarter model. It is also a much larger engineering commitment, built per platform across Shopify, Agentforce commerce, commercetools, Adobe Commerce, BigCommerce and headless stacks.</p>

<h2>Experimentation platforms already ran part of this</h2>

<p>The honest objection is that none of this is conceptually new. Testing tools have run hypothesis, variation, measurement and decision loops for more than a decade. Automated rules that adjust bids or roll back a bad release are older still.</p>

<p>What is arguably new is scope. Those loops each lived inside one discipline. Noibu's claim is that errors, performance, accessibility, paid return and conversion all run off one data layer, so a change in one surface is visible in the others. Whether that is a new category or a wider version of an old one is not settled by a launch.</p>

<h2>The evidence does not yet show the loop closing</h2>

<p>Every performance figure here is Noibu-reported, and the merchant examples deserve care.</p>

<p>The release says an agent at Totally Bamboo surfaced a product-data error that had been firing about 40 times a day, wrote the fix, and had it live the next morning, turning two weeks of expected debugging into half a day. Noibu's own <a href="${SRC_CASESTUDY}" ${EXT}>case study for the same store</a> describes a different workflow. It credits the AI Plugin, an MCP connector between the store's data and a model, and names Kelsey Vonk, the ecommerce marketing manager who worked through the problem with it.</p>

<p>The difference matters most on the best number. The release says a collection-page filter tested off the store's own data converted 24% better. The case study says Vonk wanted a more intuitive way for shoppers to find their state, designed a filter that narrows by starting letter, and tested it against the original design. The 24% belongs to that human-designed test. The move in CLS from 0.53 to 0.02 is likewise described as work the team did using Noibu's performance metrics, rather than as something the newly launched agents produced.</p>

<p>Noibu's own case study makes the evidence less clean than the launch release suggests. The release groups these improvements into the agentic story, but the case study credits the merchant and Noibu's earlier AI Plugin with key parts of the work. The outcomes are real company-reported examples. They are not clean evidence that the newly launched agents generated the improvement end to end.</p>

<p>The 7% figure compares the 30 days after a fix against the 30 days before. That is a before and after reading with no control group, which is the standard the release itself invokes when it describes measuring against a control. It is a fair thing to report and it is not evidence the fix caused the lift. A theme error that fell from 232,599 firings in a day to zero proves a fix landed, not that revenue moved.</p>

<p>There is a structural point worth naming too. Noibu owns the measurement environment, so the platform is grading changes it helped generate. That does not make the numbers wrong. It does mean the loop and the scoreboard have the same author.</p>

<h2>What would actually settle it</h2>

<p>Three things, none of which a launch can show.</p>

<p>Whether approval survives volume. I have argued before that <a href="/blog/anthropic-claude-commerce-intelligence-layer">staged approval is only a control while somebody is genuinely reviewing</a>, and a system built to produce more changes is a system built to produce more approvals.</p>

<p>Whether validation becomes incrementality. Confirming a metric moved after a change is not the same as establishing the change caused it, a distinction that keeps surfacing <a href="/blog/albertsons-ai-planning-task-depth">when a platform measures its own influence</a>.</p>

<p>And whether the objective is right. A loop that optimizes efficiently toward a badly chosen success metric will hit it, quickly and repeatedly. Outcome measurement is not the same thing as business value. A conversion number can improve while margin, returns or the next purchase move the other way, and a loop scored on the first will not see the rest unless somebody told it to. <a href="/blog/ai-wont-fix-broken-work">AI does not fix work that was unclear to begin with</a>, and a fast loop aimed at the wrong number is worse than a slow one, not better.</p>

<p>The signal I would watch is whether any vendor building this starts publishing the changes that lost: the failed experiments, the recommendations a human rejected, the fixes that had to be reverted, and the ratio of those to the wins. A loop that only reports wins is not a measurement system. It is a marketing funnel with a measurement step attached.</p>

<p>If your tools could prove which of last quarter's changes actually worked, how many would you want to see the answer for?</p>
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
