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

const DESCRIPTION = 'Walmart centralized its platforms and kept customer decisions with operators. The interesting part of its AI transformation is the org chart, not the spend.'

// Primary sources. Every load-bearing strategic claim is Walmart's own.
// Fast Company is the timely peg and supplies biography only.
const SRC_JAN = 'https://www.sec.gov/Archives/edgar/data/104169/000010416926000023/pressrelease-11626.htm'
const SRC_JOBS = 'https://corporate.walmart.com/news/2026/07/16/2026-jobs-spotlight-report'
const SRC_FC = 'https://www.fastcompany.com/91587895/walmart-ceo-john-furner-ai-revolution'
const EXT = 'target="_blank" rel="noopener noreferrer"'

const post = {
  slug: 'walmart-people-led-tech-powered-operating-model',
  title: 'Walmart Is Showing What People-Led, Tech-Powered Actually Looks Like',
  meta_title: "Walmart's People-Led, Tech-Powered AI Operating Model",
  excerpt: "Walmart centralized its enterprise platforms and left customer decisions with the operating segments. The interesting part of its AI transformation is the organizational design, not the technology spend.",
  meta_description: DESCRIPTION,
  og_image: '/images/blog/walmart-people-led-tech-powered-operating-model.svg',
  category: 'Digital Transformation',
  tags: ['Walmart', 'operating model', 'digital transformation', 'AI transformation', 'organizational design', 'retail leadership'],
  status: 'published',
  featured: false,
  read_time_minutes: 6,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: false,
    related_posts: ['kroger-ecommerce-operating-model', 'ai-wont-fix-broken-work', 'walmart-annual-report-2026-ai-organic'],
    featured_image_alt: 'An organizational diagram showing centralized enterprise technology platforms beneath operating segments that stay close to customers, with judgment remaining at the operating layer',
  },
  published_at: new Date().toISOString(),
  content: `<p><a href="${SRC_FC}" ${EXT}>Fast Company profiled Walmart CEO John Furner</a> this week, built around a scene from Associates Week in June: Furner on stage with an electric guitar in front of 6,500 workers flown in from 19 countries. The technology numbers in a story like that are the least useful part, because every large retailer can recite those now.</p>

<p>The more interesting Walmart document is a press release the company filed in January.</p>

<h2>What Walmart actually said</h2>

<p>Announcing <a href="${SRC_JAN}" ${EXT}>the leadership changes that took effect on February 1</a>, Furner described the reasoning directly. "Even the best teams need the right structure to win. As AI rapidly reshapes retail, we are centralizing our platforms to accelerate shared capabilities, freeing up our operating segments to be more focused on and closer to our customers and members."</p>

<p>That is not a technology statement. It is a statement about where decisions get made.</p>

<p>The specifics follow the logic. Seth Dallaire moved from Chief Growth Officer of Walmart U.S. to the same role for Walmart Inc., taking responsibility for global enterprise platforms: Walmart Connect and digital advertising, Walmart+, Walmart Data Ventures, Vizio, Sam's Club MAP and a global Marketplace platform. David Guggina moved from Chief eCommerce Officer of Walmart U.S. to President and CEO of Walmart U.S. Chris Nicholas took Walmart International, and Latriece Watkins took Sam's Club U.S.</p>

<p>The platforms became enterprise assets. The businesses that touch customers kept their own leaders.</p>

<h2>The operator question</h2>

<p>Furner's background is why the framing reads as something other than decoration. He started at Walmart at 18 as a part-time associate in the garden center of Store 100 in Bentonville, then worked as an assistant store manager, district manager, buyer, and head of marketing and merchandising for Walmart China, before running Sam's Club and then Walmart U.S. He has held the top job since February.</p>

<p>None of that makes him a better chief executive, and it predicts nothing about the outcome. What it does is make one sentence in the January release harder to read as boilerplate: "Over my 32 years with Walmart, I've seen that our people are our greatest competitive advantage."</p>

<h2>Three things worth separating</h2>

<p><strong>What Walmart says.</strong> It calls itself a "people-led, tech-powered omnichannel retailer" in its own corporate boilerplate, and Furner used the phrase again on the August earnings call. Positioning is cheap.</p>

<p><strong>What Walmart has actually changed.</strong> The January restructuring happened and the enterprise platform group exists. Its <a href="${SRC_JOBS}" ${EXT}>2026 Jobs Spotlight Report</a> commits the workforce claim to print, with Chief People Officer Donna Morris saying the combination of associates and technology "will power our ability to best serve our customers and members." Walmart says it hit a goal of moving 100,000 associates into in-demand roles ahead of schedule and now expects 200,000, and that roughly 75% of its salaried leaders started as hourly associates. Global ecommerce grew 24% in fiscal 2026 and 23% in the most recent quarter.</p>

<p><strong>What I think it means.</strong> The structure is a bet about where judgment belongs. Centralize the capabilities that get better with scale, and leave the decisions that require knowing a particular customer with the people who already make them.</p>

<h2>Why that is the harder problem</h2>

<p>Most organizations adopting AI do the reverse without deciding to. A tool arrives, a central team owns it, and the people closest to the work receive outputs they did not ask for and cannot easily challenge. That is the failure I keep returning to, because <a href="/blog/ai-wont-fix-broken-work">AI does not fix work that was unclear to begin with</a>. It inherits the confusion and runs it faster.</p>

<p>Walmart's own account of the payoff is about connection rather than intelligence. On the August call Furner said he was more bullish "as we see the pieces increasingly powering each other," and that "the math isn't simply one plus one equals two. The value comes from how these businesses work together." Stores, fulfillment, marketplace, advertising, membership and data are being described as one system rather than a portfolio. That is the same distinction between a pile of projects and <a href="/blog/kroger-ecommerce-operating-model">an actual operating model</a> that decides how the parts behave together.</p>

<h2>What operators can copy, and what they cannot</h2>

<p>The transferable part is the sequence, and it costs nothing. Decide which capabilities genuinely improve with scale and centralize those under one owner. Keep decision rights near the customer context they depend on. Build around workflows that already exist rather than around a tool somebody bought. Point AI at operators who are already informed rather than at the gap where an informed operator should be. And treat the organizational design as part of the transformation instead of the thing you tidy up afterward.</p>

<p>The part that does not transfer is most of Walmart. More than 10,750 stores, 2.1 million associates, proprietary transaction and inventory data, logistics scale, a supplier ecosystem, customer frequency dense enough to make the data useful, a leadership bench deep enough to fill four senior roles from inside on a single day, and the capital behind all of it. A company with those assets can absorb a failed reorganization. Most cannot, which is why the sequence is worth more than the example.</p>

<h2>The objections, which are serious</h2>

<p>Centralization produces bureaucracy at least as often as leverage, and nothing in the January release guarantees which one Walmart gets. The shared-platform group is nine months old.</p>

<p>"People-led, tech-powered" remains positioning until workforce outcomes test it, and Walmart's own Jobs Spotlight Report is more candid than its slogan. Morris notes that while AI is widely framed as a job eliminator, "it seems too early to make predictions on the impact." Emphasizing associate opportunity and reducing labor requirements are not mutually exclusive.</p>

<p>The ecommerce growth cannot be assigned to any of this. Walmart was compounding digital gains well before the restructuring, and I have <a href="/blog/walmart-annual-report-2026-ai-organic">written about that trajectory</a> without it requiring a new org chart. Furner has been CEO since February, and the AI leadership build predates him. The EVP role for AI acceleration, product and design was created in 2025 and filled by Daniel Danker under Doug McMillon. Furner inherited a centralization already underway, and his contribution is better read as extending and operationalizing it than as originating it.</p>

<p>And the argument sits in tension with something I have found persuasive elsewhere, that <a href="/blog/trade-desk-kokai-zuma-agentic-media-buying">the operator's job shifts from execution toward governance</a> as systems gain capability. Some agentic systems really do move the operator away from execution and toward governing what the system is allowed to do. Walmart's structure suggests that other kinds of judgment may stay deliberately close to operators even as the technology underneath them becomes more centralized. Both are probably true, in different workflows. The useful question is not which model wins but which kind of judgment a particular decision actually requires.</p>

<p>What I am confident about is narrower. The hard part of this transition was never acquiring the intelligence. It is deciding which judgments a company is willing to move away from the people who understand the work.</p>

<p>If your organization centralized its AI capability tomorrow, which decisions would you refuse to move with it?</p>
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
