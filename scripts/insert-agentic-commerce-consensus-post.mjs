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

const post = {
  slug: 'agentic-commerce-consensus-research-forecasts-marketplace-sellers',
  title: 'Six Months Ago, Agentic Commerce Was a Thesis. Today, Every Major Research Firm Has Put a Number on It.',
  excerpt: "Morgan Stanley, McKinsey, Gartner, IDC, and Juniper Research all published agentic commerce forecasts in the last six months. They agree on the direction. Walmart, Amazon, Meta, and OpenAI are shipping products that confirm the forecasts. Here's what marketplace sellers should do given the consensus.",
  meta_title: 'Six Months Ago, Agentic Commerce Was a Thesis. Today, Every Major Research Firm Has Put a Number on It.',
  meta_description: "Morgan Stanley, McKinsey, Gartner, IDC, and Juniper Research all published agentic commerce forecasts in the last six months. They agree on the direction. Walmart, Amazon, Meta, and OpenAI are shipping products that confirm the forecasts. Here's what marketplace sellers should do given the consensus.",
  og_image: '/images/blog/agentic-commerce-consensus-research-forecasts-marketplace-sellers.svg',
  category: 'Digital Transformation',
  tags: ['agentic commerce forecast 2026', 'agentic commerce market size', 'McKinsey agentic commerce', 'Morgan Stanley agentic commerce', 'Gartner agentic AI retail'],
  status: 'published',
  featured: false,
  read_time_minutes: 7,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: true,
    faq_data: [
      {
        q: 'Are the agentic commerce forecasts inflated?',
        a: 'Some, probably. But five major research firms (Morgan Stanley, McKinsey, Gartner, IDC, Juniper) now agree on the direction and roughly agree on the magnitude. When the consensus floor across independent methodologies is 10 to 20 percent of e-commerce by 2030, the bear case is still a category large enough to reshape mid-market marketplace strategy. The forecast risk is no longer whether agentic commerce happens. Only how big it gets.',
      },
      {
        q: 'Which research firm should I trust most?',
        a: 'Triangulate, do not pick. Morgan Stanley reports US e-commerce dollars. McKinsey reports global retail opportunity. Gartner reports retailer deployment behavior. IDC reports IT budget allocation. Juniper benchmarks platforms and country readiness. The fact that five firms with different methodologies and incentives all land in the same direction is the real signal. No single number is the answer.',
      },
      {
        q: "I'm a small brand. Should I really care about a 2030 forecast?",
        a: 'Yes, because the operational evidence is already current quarter. Walmart Q1 FY27 showed Sparky weekly active users up over 100% quarter-over-quarter. Amazon merged Rufus into Alexa for Shopping. Meta announced Hatch. ChatGPT Ads went self-serve. The 2030 forecast is what these systems compound into. The work that gets you in their recommendation set starts now.',
      },
    ],
    related_services: ['ecommerce-strategy', 'digital-transformation'],
    related_posts: ['walmart-sparky-q1-earnings-replenishment-shift', 'rufus-alexa-for-shopping-rebrand-marketplace-sellers', 'agentic-commerce-tipping-point-marketplace-sellers-2026'],
    featured_image_alt: 'Morgan Stanley, McKinsey, Gartner, IDC, and Juniper Research forecasts on agentic commerce now converge with operational evidence from Walmart Sparky, Alexa for Shopping, Meta Hatch, and ChatGPT Ads',
  },
  published_at: '2026-05-23T12:00:00.000Z',
  content: `<p>Six months ago, one investment bank put a $385 billion number on agentic commerce by 2030. The Morgan Stanley note called it a paradigm shift. Most marketplace seller founders read that note and filed it under "interesting forecast, not urgent." Fair response at the time. Single-source forecasts often look bold in retrospect and never happen.</p>

<p>Today the picture looks different. Gartner has published its own forecast. McKinsey has. IDC has. Juniper Research has built a full research suite with country-by-country readiness scoring. eMarketer has measured AI's influence on search behavior. Five major research firms now agree on the direction and roughly agree on the magnitude. Behind the forecasts, the operational evidence has stacked up: Walmart's <a href="/blog/walmart-sparky-q1-earnings-replenishment-shift">Sparky Q1 numbers</a>, Amazon's <a href="/blog/rufus-alexa-for-shopping-rebrand-marketplace-sellers">Alexa for Shopping launch</a>, Meta's <a href="/blog/meta-hatch-instagram-shopping-agent-marketplace-sellers">Hatch announcement</a>, and OpenAI's $100 million ChatGPT Ads pilot in six weeks.</p>

<p>The forecast risk has collapsed. The window for marketplace seller founders to credibly treat <a href="/aeo">agentic commerce</a> as theoretical is closed. This post is the synthesis of where the numbers stand today and what they mean for a $500K to $5M brand operating right now.</p>

<h2>The five forecasts every marketplace seller should know about</h2>

<h3>Morgan Stanley: $190B to $385B US e-commerce by 2030</h3>
<p>The December 8, 2025 research note from Brian Nowak (Head of US Internet Research) and Nathan Feather put US agentic e-commerce at $190 billion to $385 billion by 2030, or 10% to 20% share of online retail. Their survey work showed 23% of Americans had bought via AI in the past month, roughly half of LLM users had researched or compared prices that way, and 30 to 40 percent had made purchases via AI. Groceries and CPG were the leading categories. Feather called it a "paradigm shift."</p>

<h3>McKinsey: $900B US B2C, $3T to $5T globally by 2030</h3>
<p>McKinsey's number is materially larger. US B2C retail alone represents $900 billion in agentic commerce opportunity by 2030, with global opportunity at $3 trillion to $5 trillion. McKinsey separately estimated AI-driven personalization could unlock another $1.2 trillion in value for global retail. The McKinsey number being a multiple of Morgan Stanley's matters because it means the consensus floor is rising as more firms run the math.</p>

<h3>Gartner: 20% of digital commerce by 2030, 48% of retailers deploying in 2026</h3>
<p>Gartner projects 20% of digital commerce transactions will be executed through AI platforms by 2030, in line with Morgan Stanley's high end. The more actionable Gartner data point is the deployment number: 48% of retailers plan to deploy agentic AI in 2026. That is not a forecast. That is a budget commitment already happening this year. Gartner also flagged AI spending across retail up 36% in 2026 and specialized GenAI spending up 38%.</p>

<h3>IDC: 26% of IT budgets, roughly $1.3T by 2029</h3>
<p>IDC projects agentic AI will represent 10% to 15% of total IT spending in 2026, expanding to 26% of budgets (roughly $1.3 trillion) by 2029. IDC's framing matters because it grounds the forecast in IT budget allocation rather than retail revenue. Budget commitments are harder to walk back than market sizings. Money already classified as agentic AI spend is money already moving.</p>

<h3>Juniper Research: country-level Readiness Index, 24 platforms benchmarked</h3>
<p>Juniper Research published a full agentic commerce research suite in April 2026, including a country-level Readiness Index across 61 countries and competitive benchmarking of 24 agentic commerce platforms. Juniper is not a US-focused bank or a strategy firm. They are the dedicated payments and fintech research house. The fact that they shipped a full multi-product research suite says the category has matured from "interesting to forecast" to "a real market with vendors to benchmark."</p>

<h2>What's actually shipping while the forecasts get published</h2>

<p>Forecasts can converge and still be wrong if the operators do not follow through. The operators are following through. Walmart's Q1 FY27 earnings showed Sparky weekly active users up over 100% quarter-over-quarter, average order value 35% higher for Sparky users, and units purchased through Sparky up more than 4x sequentially. CEO John Furner told investors, "We're becoming AI native." That is not a forecast statement. That is a current quarter results statement.</p>

<p>Amazon retired the Rufus brand on May 13 and merged the experience into Alexa for Shopping, a unified agentic shopping product across mobile, desktop, and Echo devices. Meta confirmed on May 5 that it is building Hatch (a consumer version of OpenAI's OpenClaw) and a separate agentic shopping tool inside Instagram. OpenAI opened ChatGPT Ads to self-serve and crossed $100 million in annualized revenue in six weeks of pilot. The Fast Company piece on the <a href="/blog/agentic-commerce-tipping-point-marketplace-sellers-2026">agentic tipping point</a> quoted Google and OpenAI commerce leads saying the inflection is "months, not years" away. eMarketer separately measured that AI-assisted product discovery already influences over 40% of online searches in key categories.</p>

<p>This is the pattern. The forecasts say 10 to 20 percent of e-commerce by 2030. The operators say it is happening now. The operational data confirms it quarter by quarter. Marketplace sellers who treated the December 2025 Morgan Stanley note as theoretical had a reasonable position six months ago. That position no longer holds in May 2026.</p>

<h2>Why founder-led marketplace brands are the most exposed</h2>

<p>Three reasons this hits founder-led $500K to $5M brands harder than either smaller or larger competitors. First, agentic commerce favors consumables and CPG (per Morgan Stanley's purchase category data). The mid-market brands in these categories do not have the marketing budget to brute-force discovery the way enterprise CPG does, so they depend on organic AI recommendation more than larger competitors do. Second, mid-market brands often have the worst product data quality because their teams are stretched thin and listing optimization gets deprioritized. Agentic readiness scores against data quality directly. Third, the brands that lock in default-reorder status (per the <a href="/blog/walmart-sparky-q1-earnings-replenishment-shift">Sparky reorder dynamic</a>) capture recurring revenue that competitors have to actively dislodge. That moat is wider for mid-market brands than enterprise brands because enterprise brands can outspend the dislodging while mid-market brands cannot.</p>

<p>The upside for this segment is also the largest. If 20% of US e-commerce moves through agentic surfaces by 2030 and McKinsey's $900 billion number is even directionally correct, that is hundreds of billions of dollars of demand that flows through whoever the agent recommends. A $1 million brand that becomes the default agent reorder in its category in 2026 compounds into a meaningfully different business by 2028. A $1 million brand that ignored this until 2028 will spend 2028 trying to catch up.</p>

<h2>What marketplace sellers should actually do this quarter</h2>

<ol>
  <li><strong>Treat agentic readiness as a 2026 operational priority, not a 2027 strategic one.</strong> The Gartner number (48% of retailers deploying this year) means your platform partners are doing the work whether you do or not. If your data is not ready, you are not invisible to the trend. You are visible to the trend in the wrong direction.</li>
  <li><strong>Run the <a href="/blog/6-dimension-geo-audit-framework-amazon-listing">6-dimension GEO audit</a> on your top 10 SKUs.</strong> The data quality work that determines organic AI recommendation is the same work that determines agentic readiness. Score yourself, fix WHO and AI Retrievability first, then work through the rest.</li>
  <li><strong>Audit your subscription, replenishment, and reorder signals.</strong> The Sparky Q1 data confirmed the shift toward reorder. If your product is consumable and not enrolled in subscription programs or replenishment-eligible, you are not in the running for the default-reorder position that compounds.</li>
  <li><strong>Stop waiting for the platform you are optimizing for to mature.</strong> The five forecasts agree the direction is set. Optimizing for agentic readiness is now a no-regret action regardless of which platform wins.</li>
</ol>

<h2>Closing</h2>

<p>Agentic commerce stopped being a forecast in May 2026. It is now a current quarter results story and a budget commitment story. Five research firms agree on the direction. Four major retailers and AI platforms are shipping the products. The brands that started the foundation work in Q1 2026 are 90 days ahead of the brands starting in Q2. The brands waiting for "more clarity" will be 12 to 18 months behind by the time the clarity is universally agreed.</p>

<p>The deeper resource is the <a href="/aeo">agentic engine optimization pillar</a>. The foundation underneath it is <a href="/geo">GEO</a>, because agentic readiness scores against the same data quality that determines organic AI recommendation.</p>

<p>If you want a read on where your brand stands against the agentic readiness consensus, <a href="/free-strategy-session">book a free strategy session</a>. The audit covers your top SKUs, your subscription posture, and the prioritized fixes that compound fastest while the prize is still in front of you.</p>

<h2>Frequently Asked Questions</h2>

<h3>Are the agentic commerce forecasts inflated?</h3>
<p>Some, probably. But five major research firms (Morgan Stanley, McKinsey, Gartner, IDC, Juniper) now agree on the direction and roughly agree on the magnitude. When the consensus floor across independent methodologies is 10 to 20 percent of e-commerce by 2030, the bear case is still a category large enough to reshape mid-market marketplace strategy. The forecast risk is no longer whether agentic commerce happens. Only how big it gets.</p>

<h3>Which research firm should I trust most?</h3>
<p>Triangulate, do not pick. Morgan Stanley reports US e-commerce dollars. McKinsey reports global retail opportunity. Gartner reports retailer deployment behavior. IDC reports IT budget allocation. Juniper benchmarks platforms and country readiness. The fact that five firms with different methodologies and incentives all land in the same direction is the real signal. No single number is the answer.</p>

<h3>I'm a small brand. Should I really care about a 2030 forecast?</h3>
<p>Yes, because the operational evidence is already current quarter. Walmart Q1 FY27 showed Sparky weekly active users up over 100% quarter-over-quarter. Amazon merged Rufus into Alexa for Shopping. Meta announced Hatch. ChatGPT Ads went self-serve. The 2030 forecast is what these systems compound into. The work that gets you in their recommendation set starts now.</p>
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
console.log('Slug:', post.slug)
console.log('URL: https://theroberthu.com/blog/' + post.slug)
