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

const DESCRIPTION = 'AI can compress analysis while waiting, chasing, and reconciliation remain. Why better data and workflow design matter more than automating isolated tasks.'

const post = {
  slug: 'ai-wont-fix-broken-work',
  title: "AI Won't Fix Broken Work",
  excerpt: 'A pricing change takes four days, and three of them are waiting. Pointing AI at the person optimizes the part that was already working. The real constraint is the design of the work.',
  meta_title: "AI Won't Fix Broken Work",
  meta_description: DESCRIPTION,
  og_image: '/images/blog/ai-wont-fix-broken-work.svg',
  category: 'Digital Transformation',
  tags: ['AI operating model', 'organizational design', 'AI adoption strategy', 'workflow automation', 'decision latency'],
  status: 'published',
  featured: false,
  read_time_minutes: 6,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: false,
    related_posts: ['product-data-shared-infrastructure-google-ai-mode', 'ai-compresses-messy-middle-ecommerce', 'who-pays-when-ai-agents-fail'],
    featured_image_alt: 'A decision moving through an organization, where the delay is design and data, not the thinking',
  },
  published_at: '2026-07-21T15:00:00.000Z',
  content: `<p>Most conversations about AI inside companies start with the same question: what can it replace? Which tasks, which roles, which line items. It's the version boards ask CEOs and CEOs ask their teams, usually with a benchmark attached. It's a reasonable question, and it's too narrow. It assumes the expensive part of the organization is the labor. Watch how a decision actually moves through a company and a different cost shows up, one the replacement question never touches.</p>

<p>Start somewhere unglamorous. A pricing change on a top-20 item. Somebody in merchandising needs current sell-through, current landed cost, and whatever promo the channel team already committed to next month. The sell-through lives in one report. Landed cost lives in a spreadsheet that one person maintains. The promo calendar lives in a deck that was accurate two weeks ago. So the pricing change takes four days, and three of those days are waiting.</p>

<p>Nothing about that is an AI problem. It was true in 2015. It is still true in many companies today.</p>

<p>Here's what I keep watching happen. AI shows up, and the instinct is to point it at the person. Can the model do the merchandiser's analysis? Can it write the recommendation? Sometimes it can, which feels like progress. But look at where the four days actually went. Not to analysis. To waiting, chasing, reconciling, and re-confirming. If you automate the one day of thinking and leave the three days of waiting untouched, you've optimized the part that was already working.</p>

<h2>Where the time actually goes</h2>

<p>The waiting isn't unique to merchandising, and it isn't incidental. Two teams build the same forecast because neither trusts the other's version. An approval bounces between finance and ops because the threshold rule lives in someone's memory instead of the workflow. The category manager knows exactly why that SKU underperforms in the Southeast, and that knowledge exists in one head and one Slack thread from last October.</p>

<p>Customer service runs the same pattern at a different speed. A support team deploys an AI assistant and response times on routine tickets drop from hours to seconds. But the tickets that actually cost money, the exception refund, the account on credit hold, still take days, because the <a href="/blog/who-pays-when-ai-agents-fail">authority to decide</a> sits with one supervisor and the rule for when to escalate is written down nowhere. The assistant made the easy tickets faster and left the expensive ones exactly where they were.</p>

<p>These aren't technology failures. They're design failures, and they predate AI by decades.</p>

<h2>Faster wrong answers</h2>

<p>It gets worse when the data underneath is soft. Point a model at that landed-cost spreadsheet and it will produce an answer with total confidence, formatted beautifully, sourced from a number that's been stale since March. The old version of that mistake took a week and got caught in review. The new version takes nine seconds and reads like it came from somewhere authoritative. Speed doesn't fix a bad input. It just gets you to the wrong decision faster, and with better formatting.</p>

<p>Finance offers the cleanest version of this. A model will draft month-end variance commentary in seconds. If two teams are still disputing which revenue figure is right, the commentary arrives before the argument is settled, and it reads as if it were. The organization gets a confident narrative about numbers it hasn't yet agreed are the numbers.</p>

<p>That's the under-appreciated risk. Automation doesn't just inherit the quality of its inputs. It removes the slow human checkpoints where bad inputs used to get caught. The week of waiting was waste, but it was also, accidentally, review. Take it away without replacing the trust it provided and you've traded an inefficiency for an exposure.</p>

<h2>The part that compounds</h2>

<p>What AI changes is that it makes the friction impossible to ignore. Compress the thinking from a day to minutes, the way <a href="/blog/ai-compresses-messy-middle-ecommerce">AI has compressed the messy middle</a>, and the three days of waiting become the whole cost. The bottleneck doesn't disappear. It loses its camouflage.</p>

<p>The companies getting real value from this aren't, as far as I can see, simply the ones with the best models. Access to strong models is becoming widely available, and that access keeps leveling. They're the ones who noticed the thing the replacement question hides. The constraint was never the labor. It was the design. They fixed the data so it can be <a href="/blog/product-data-shared-infrastructure-google-ai-mode">trusted without a phone call</a>. They put the approval rule in the workflow instead of in a person's memory. They made the category manager's knowledge legible to someone other than the category manager. Then they pointed automation at what was left, and it worked, because it was standing on something solid.</p>

<p>That's a much less exciting project than replacing headcount. It doesn't demo well. But it's the one that compounds, and the compounding is mechanical. A data source you can trust serves every decision that touches it, not just the one you fixed it for. A rule that lives in the workflow executes the ten-thousandth time at the same cost as the first.</p>

<h2>What it actually takes</h2>

<p>None of this is exotic, and none of it begins with model selection. Trusted data mostly means one owner, one definition, and a known freshness date. A governed workflow mostly means the escalation rule is written into the system that routes the work, so it executes without being remembered. Durable knowledge mostly means the reasoning behind a decision gets recorded where the next person will actually look. Automation becomes most valuable when it is pointed at work supported by trusted data, explicit rules, and accessible context. Built on that foundation, the model can reason quickly from information the organization can trust.</p>

<p>This is why I've stopped treating AI adoption as a technology decision. Organizations don't compete because they have AI. Access to capable AI is spreading fast, and it will keep spreading. They compete on whether their operating model lets people and machines make better decisions together: the right person, with data they trust, inside a workflow that knows the rules, at the moment the decision is worth making. That's an organizational design question, and it was sitting there long before the models got good.</p>

<p>A useful test is decision latency. Measure the time between the moment a decision becomes worth making and the moment it's made, then ask how much of that gap is thinking. In many recurring decisions, the thinking is only a fraction of the total time. The rest belongs to the design of the system around it.</p>

<h2>The honest counterpoint</h2>

<p>Two things cut against this, and I'd rather name them than pretend they don't exist.</p>

<p>First, redesigning how work flows through an organization is genuinely harder than buying a tool. Tools have a purchase order and a launch date. Operating model changes have politics, ownership fights, and no clean finish line. When I say fix the data and the workflow first, I'm describing work that takes quarters and produces no screenshot. Plenty of smart leaders pick the tool precisely because it's tractable, and that isn't stupid. It's a real tradeoff.</p>

<p>Second, I might have the sequence wrong. There's a case that you can't redesign work in the abstract, that you have to put AI into a broken process first and let it expose exactly where the breaks are, then redesign around what you learned. Maybe the mess is the map. I'm honestly not sure which way that goes, and I hold the sequence more loosely than I hold the destination.</p>

<h2>Where this leaves me</h2>

<p>The companies that benefit most from AI won't necessarily be the ones with the best models. They'll be the ones that redesign work so people, data, workflows, and automation reinforce each other instead of fighting each other.</p>

<p>The models will keep improving whether you do anything or not. The design only improves if someone decides to own it.</p>

<p>So the question worth sitting with isn't which roles the model can replace. It's the one the pricing change asks. In your organization, what would actually have to change for a decision to move faster? Not the tooling. The design.</p>
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
