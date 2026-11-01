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

const DESCRIPTION = "BCG says GEO pilots are producing 1% to 5% incremental revenue. Here is what operators still need before treating that range as an ROI benchmark."

const EXT = 'target="_blank" rel="noopener noreferrer"'

const post = {
  slug: "bcg-geo-revenue-growth-evidence",
  // Editorial H1 (renders on page, and as JSON-LD headline)
  title: "BCG Gives GEO a Revenue Number. It Is Not Yet a Benchmark",
  // Query-aligned search title (drives <title>, OG and Twitter). Deliberate split.
  meta_title: "BCG Says GEO Lifts Revenue 1% to 5%. What Is Missing?",
  excerpt: "BCG says CPG companies piloting GEO are seeing 1% to 5% incremental revenue. The public article does not disclose the sample, baseline or controls behind that range, which makes it a useful hypothesis for designing a pilot but not yet an ROI benchmark.",
  meta_description: DESCRIPTION,
  og_image: '/images/blog/bcg-geo-revenue-growth-evidence.svg',
  category: "GEO & SEO",
  tags: ["BCG", "GEO measurement", "generative engine optimization", "incrementality", "CPG", "agentic commerce", "AI visibility", "ROI"],
  status: 'published',
  featured: false,
  read_time_minutes: 5,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: false,
    related_posts: ["google-search-console-generative-ai-visibility", "niq-similarweb-agentic-commerce-measurement", "google-ucp-analytics-merchant-center-ai-checkout"],
    featured_image_alt: "Pull quote from Robert Hu on BCG's GEO revenue claim: GEO credibility will not come from increasingly precise-looking percentages.",
  },
  published_at: new Date().toISOString(),
  content: `<p>On October 30, six BCG authors published "<a href="https://www.bcg.com/publications/2026/how-cpg-companies-win-agentic-commerce" ${EXT}>Are CPG Companies Ready for Agentic Commerce?</a>" One sentence in it will travel further than the rest. CPG companies piloting generative engine optimization, BCG writes, are "already experiencing a 1% to 5% incremental increase in revenues, our research shows." Companies testing owned agents and ecosystem integration are driving 3% to 10% revenue growth, and first-party data from owned agents is enabling an ROI uplift on digital media spending that BCG labels estimated, of up to 50%.</p>

<p>Most GEO evidence, including mine, stops at whether a brand appeared, was cited or received a visit. BCG has put a commercial outcome on the table. The operator question is what evidence would justify using it as a forecast, benchmark or business-case assumption.</p>

<h2>Visibility, traffic and revenue are different outcomes</h2>

<p>GEO results come in three layers, and they are easy to blur.</p>

<p>Visibility asks whether the brand appeared or was cited. Traffic asks whether an AI surface sent visits. Commercial outcome asks whether the intervention caused revenue or profit that would not otherwise have happened.</p>

<p>Each layer is harder to measure than the one before. When Google added a generative AI report to Search Console, it <a href="/blog/google-search-console-generative-ai-visibility">showed impressions without clicks or queries</a>: visibility without traffic. Traffic without incrementality is the next gap. A visit from ChatGPT may be demand the brand created, or demand that would have arrived through search anyway.</p>

<p>BCG's 1% to 5% claim sits in the third layer. Its supporting example does not.</p>

<h2>What BCG discloses</h2>

<p>The article's one GEO case is a global luxury fashion group that prioritized 500 consumer prompts and launched about 10 pilots, starting with technical fixes such as structured data and metadata. Within eight weeks, its brand site's citation rate in AI search more than doubled. Within six months, LLM-sourced traffic more than quadrupled.</p>

<p>That is a useful case. It names the starting intervention, the prompt set and two time windows. It reports visibility and traffic. It does not report revenue, BCG does not give the starting traffic level, and BCG does not present the example as the source of the 1% to 5% range. It should not be read as proof of that claim.</p>

<p>BCG's GEO program spans what I separate into publisher GEO and ecommerce GEO: brand-site content and citations, plus product claims, structured product data and retailer and platform sharing. It recommends prompt taxonomies, AI-readable content, FAQs and schema, followed by pilots. Because those are multiple interventions, the aggregate revenue range is harder to operationalize.</p>

<p>BCG's consumer research is documented. <a href="https://www.bcg.com/publications/2026/consumers-trust-ai-to-buy-better-brands-must-adapt" ${EXT}>The January consumer report</a> the October article links to publishes its methodology, including survey waves of more than 9,000 respondents across nine countries. Those are findings about behavior, not commercial results.</p>

<h2>What remains undisclosed</h2>

<p>For the revenue ranges, the public article omits what a finance team would ask first. It does not say how many companies stand behind each range, which categories they sell in or who they are. It gives no measurement period, baseline, control group or definition of incremental. It does not say whether technical fixes, content changes, product data and retailer data sharing were measured separately, whether paid media changed at the same time or what the pilots cost. The article's three exhibits carry no revenue data, and each cites only BCG research and analysis.</p>

<p>Even the summary statistic is ambiguous. The article's key takeaways describe "an average of 1%-5%," while the body presents a range. An average of what, across how many pilots, is not stated.</p>

<p>The owned-agent claims raise the same issue in another form. The one named example, a personal care company, reports that digital campaigns using first-party data from its AI advisor generate twice the ROI of campaigns relying on traditional first-party data. The general claim is an estimated uplift of up to 50%. Both may be accurate, but without knowing what each compares against, a reader cannot reconcile them.</p>

<p>None of this means BCG did no analysis. A consulting firm can hold client results it cannot publish. It means the public evidence cannot be audited.</p>

<h2>The June survey does not carry the revenue claim</h2>

<p>It is tempting to tie the ranges to BCG and The Consumer Goods Forum's <a href="https://www.bcg.com/publications/2026/how-cpg-retail-leaders-maximize-ai-roi" ${EXT}>June 24 board brief</a>, which surveyed 39 senior CPG and retail executives in April. The October article attributes its readiness figures to a BCG GenAI CPG Survey 2026 and links that name to the June report. But the June report contains neither the 59% readiness figure nor the GEO revenue ranges, and it says its sample is not necessarily representative of the industry.</p>

<p>What it does contain is a measurement warning. Fifty-three percent of respondents said they do not formally measure the ROI of consumer AI investments, and BCG wrote that many pilots track activity "without including a clear baseline or threshold for scale." Its own value estimate for GEO and agentic commerce, measured in EBIT at scale, read "too early to tell." That is a different metric from pilot revenue, and four months is enough time for new client results. But the June report does not support the October ranges.</p>

<h2>How to classify the claim</h2>

<p>The 1% to 5% range is stronger than a prediction, because BCG says it comes from companies already piloting. It is stronger than a visibility case study, because it names a commercial outcome. It is weaker than a reproducible benchmark, because nobody outside BCG can see what produced it. I looked for an independent study that reproduces a GEO revenue range against a control group and did not find one.</p>

<p>Whether a given brand can expect 1% to 5% is unanswerable from the public evidence, which does not say which companies, categories or programs produced the range. It is a reasonable hypothesis range for designing a pilot. It is not yet an approved ROI assumption.</p>

<h2>A pilot design that would produce a benchmark</h2>

<ol>
  <li>Define a fixed prompt or query set before changing anything.</li>
  <li>Record recommendation visibility on that set as the baseline.</li>
  <li>Separate technical, content and product-data interventions so each can be read on its own.</li>
  <li>Hold out comparable products, markets or pages where practical.</li>
  <li>Track AI referrals and assisted conversions separately. As I argued about <a href="/blog/niq-similarweb-agentic-commerce-measurement">NIQ and Similarweb's measurement partnership</a>, joining datasets widens what is observable without establishing incrementality.</li>
  <li>Connect exposure to orders and contribution margin, including orders completed off your site, which <a href="/blog/google-ucp-analytics-merchant-center-ai-checkout">Google's UCP Analytics</a> reports from the Buy button onward.</li>
  <li>Subtract implementation and monitoring costs.</li>
  <li>Report the interventions that failed alongside the ones that worked.</li>
</ol>

<p>Perfect attribution is not available today. A holdout and a stated baseline are.</p>

<h2>What would make GEO credible</h2>

<p>The <a href="/geo">six dimensions I use for GEO</a> describe what makes a product legible to an AI system. Revenue is a separate test, and it is the one a finance team will apply. BCG has moved the conversation toward that test, which is progress. GEO credibility will not come from increasingly precise-looking percentages. It will come when companies publish enough of the measurement design for another operator to understand what produced the result.</p>

<p>If your team had to defend a GEO revenue number to finance tomorrow, which of those disclosures could you supply?</p>`,
}

const { data, error } = await supabase.from('blog_posts').insert(post).select('id, slug').single()
if (error) { console.error('Insert failed:', error); process.exit(1) }
console.log('Post inserted successfully:', data.id)
console.log('URL: https://theroberthu.com/blog/' + data.slug)
