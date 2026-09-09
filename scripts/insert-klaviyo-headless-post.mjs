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

const DESCRIPTION = 'Klaviyo opened its CRM to agents with 260+ MCP tools, including sending campaigns. The controls it shipped alongside them are the more useful story.'

// Primary sources, cited at the claims they support.
const SRC_NEWS = 'https://www.klaviyo.com/newsroom/kbos-2026-headless'
const SRC_DOCS = 'https://developers.klaviyo.com/en/docs/klaviyo_mcp_server'
const EXT = 'target="_blank" rel="noopener noreferrer"'

const post = {
  slug: 'klaviyo-headless-agent-controls',
  // Editorial H1 (renders on page, and as JSON-LD headline)
  title: 'When an Agent Can Hit Send, the Controls Become the Product',
  // Query-aligned search title (drives <title>, OG and Twitter). Deliberate split.
  meta_title: 'Klaviyo Headless: What Its 260+ MCP Tools Actually Do',
  excerpt: "Klaviyo's announcement says an agent can go live on its own without opening Klaviyo. Its developer documentation says to review each tool call for malicious instructions. Both are true, and the gap between them is where commerce technology strategy sits now that agents can write and not only read.",
  meta_description: DESCRIPTION,
  og_image: '/images/blog/klaviyo-headless-agent-controls.svg',
  category: 'Digital Transformation',
  tags: ['Klaviyo', 'MCP', 'agentic commerce', 'martech', 'AI governance', 'ecommerce software'],
  status: 'published',
  featured: false,
  read_time_minutes: 6,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: false,
    related_posts: ['helium-10-mcp-ecommerce-software-infrastructure', 'ai-wont-fix-broken-work', 'anthropic-claude-commerce-intelligence-layer'],
    featured_image_alt: 'A marketing platform operated by an AI agent through tools rather than through its own screens, with permission and approval controls around the write actions',
  },
  published_at: '2026-09-09T18:00:00.000Z',
  content: `<p>Two sentences from Klaviyo, published the same week, do not quite agree with each other.</p>

<p>The <a href="${SRC_NEWS}" ${EXT}>announcement</a> says an agent can read, write, and go live on its own, without ever opening Klaviyo's own interface. The <a href="${SRC_DOCS}" ${EXT}>developer documentation</a>, describing the tools that read user-generated content, says to carefully review each tool call to ensure your client is not acting on malicious instructions.</p>

<p>One of those describes software that runs without you. The other asks you to check its work. The distance between them is roughly where commerce technology strategy actually sits right now, and it is more useful than either sentence alone.</p>

<h2>What Klaviyo shipped</h2>

<p>At its customer conference on September 9, Klaviyo announced it is opening its platform with 260+ MCP tools and capabilities and 490+ APIs, reachable from Claude, ChatGPT, or any AI system a team already uses.</p>

<p>The tools are not a reporting veneer. Reading the published tool list, an agent can create a campaign, update a campaign message, and call send_campaign, described as sending a campaign to its configured audience. There is a cancel tool alongside it, which tells you Klaviyo understands what it has exposed. The published tool table establishes that the send action is exposed. It does not document whether an additional confirmation step occurs in every client implementation.</p>

<p>That is the part worth sitting with. Sending is not a draft state. Once a campaign reaches inboxes, the review window has closed.</p>

<h2>Read was the easy half</h2>

<p>I wrote in July about <a href="/blog/helium-10-mcp-ecommerce-software-infrastructure">Helium 10's MCP connector</a>, and argued that the dashboard was becoming a data layer while the value moved beneath the interface. I still think that is right, and Klaviyo is not evidence for it so much as the next question after it.</p>

<p>Reading is generally more reversible. A bad query or interpretation can still create risk, but it usually leaves more room to catch the mistake before the system acts on someone outside the workflow. Writing is not forgiving in the same way, and sending is the least forgiving version of writing there is.</p>

<p>So the interesting thing about this launch is not that a marketer can work from Claude. It is what Klaviyo had to build around that capability before it could ship it.</p>

<h2>The controls are the product</h2>

<p>Look at what surrounds the tools rather than the tools themselves.</p>

<p>The remote server is restricted to users with an Owner, Admin, or Manager role. A read-only parameter disables any tool that can perform write actions. A toolsets parameter limits the server to tools whose required API scopes fall entirely within a list you provide, so only tools fully covered by your scopes are exposed. A core-tools-only parameter cuts the surface to roughly forty tools.</p>

<p>The published tool table is more revealing than the parameters. Every tool carries a flag for whether it is read-only and a separate flag for whether it touches user-generated content. Klaviyo classified its own surface by risk before handing it to a model.</p>

<p>None of that is implementation trivia. It is evidence that capability and control have to ship together, and that exposing more powerful actions requires a corresponding control layer.</p>

<h2>The part with no clean answer</h2>

<p>The user-generated-content flag is the one I keep returning to.</p>

<p>Klaviyo's concern is straightforward once stated. Customer data contains text that customers wrote. An agent reading a profile, a review, or a conversation is reading text that some of it was authored by people who are not your colleagues. Those people can write instructions.</p>

<p>Klaviyo offers a switch to disable those tools. The remote parameter defaults to false and the local equivalent defaults to allowing that content, so on both, the tools that read customer-authored text are on unless you turn them off. And the mitigation Klaviyo names, in its own words, is to carefully review each tool call.</p>

<p>That is a reasonable instruction. It is also the human, back in the loop, in the middle of a product whose pitch is that you do not need to open the interface. I do not think Klaviyo is being dishonest here. I think it is being accurate about a problem nobody has solved, in a document written by engineers rather than marketers.</p>

<h2>What you are actually buying</h2>

<p>Here is my interpretation rather than anything Klaviyo claimed.</p>

<p>If an agent can operate a system without its interface, the interface stops being the thing you evaluate. Demos of screens tell you progressively less. What starts to matter is duller and harder to fake: whether the data is trustworthy, whether the actions are exposed cleanly, whether permissions are granular enough to be useful rather than merely present, <a href="/blog/anthropic-claude-commerce-intelligence-layer">where the approval boundary sits</a>, and whether you can reconstruct afterward what the agent did and why.</p>

<p>That is a different purchasing conversation from the one most teams are set up to have. It also puts pressure on a habit worth naming. Plenty of organizations have used the software's interface as their control system, in the sense that <a href="/blog/ai-wont-fix-broken-work">a workflow was safe because it was tedious</a> and somebody had to click through it. Remove the clicking and the tedium stops doing that job, whether or not anyone replaces it.</p>

<p>I am not claiming the interface disappears. Klaviyo shipped a mobile app in the same announcement.</p>

<h2>The objections</h2>

<p>One vendor does not make an industry transition. Klaviyo has commercial reasons to describe itself as infrastructure rather than a walled garden, and that phrase is in the release.</p>

<p>Interfaces will keep earning their place for approvals, exceptions, creative judgment, and anything a person needs to see before agreeing to it. The likelier future is coexistence rather than replacement.</p>

<p>There is also a real chance this adds work instead of removing it. If the honest way to run agent writes is reviewing tool calls, a team may find it has traded doing the task for supervising it, which is not obviously cheaper and is often more tiring. Expanding write access <a href="/blog/who-pays-when-ai-agents-fail">expands the blast radius of a bad instruction</a>, and the role restriction means the people holding that access are senior, which is protective and also concentrates the risk.</p>

<p>Adoption, reliability, and whether any of this becomes a standard architectural pattern are all unknown. This is a launch, not a result.</p>

<h2>What I would watch</h2>

<p>The specific thing I would watch is whether governance features start showing up in how these platforms are sold rather than only in their documentation.</p>

<p>Right now the capability is in the press release and the controls are in the developer docs. That split is understandable and probably temporary. When permission models, approval boundaries, and audit trails move into the part of the product that buyers actually compare, that is the signal that the market has repriced what this software is for.</p>

<p>If your team can no longer see the work happening on a screen, what would you need in its place to be comfortable that it happened correctly?</p>
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
