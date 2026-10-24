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

const DESCRIPTION = "Uber is giving 30,000 employees access to ChatGPT Work. The rollout shows why enterprise AI adoption requires governed workflows, not just licenses."

const EXT = 'target="_blank" rel="noopener noreferrer"'

const post = {
  slug: 'uber-chatgpt-work-enterprise-ai-adoption',
  // Editorial H1 (renders on page, and as JSON-LD headline)
  title: "Uber Is Giving 30,000 Employees ChatGPT. Access Is Not Adoption.",
  // Query-aligned search title (drives <title>, OG and Twitter). Deliberate split.
  meta_title: 'Uber ChatGPT Work Rollout: Access Is Not Adoption',
  excerpt: "Uber is making ChatGPT Work available to more than 30,000 employees, expanding from a 1,000-person pilot. Availability measures reach, not adoption. Uber and OpenAI have published no adoption or outcome figures yet, and the company's own agent infrastructure shows what the later stages require.",
  meta_description: DESCRIPTION,
  og_image: '/images/blog/uber-chatgpt-work-enterprise-ai-adoption.svg',
  category: 'Digital Transformation',
  tags: ['Uber', 'OpenAI', 'ChatGPT Work', 'enterprise AI adoption', 'AI governance', 'MCP Gateway', 'AI agents'],
  status: 'published',
  featured: false,
  read_time_minutes: 6,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: false,
    related_posts: ['ai-wont-fix-broken-work', 'agentic-commerce-adoption-definition-problem', 'ant-international-account-for-agent-merchant-operations'],
    featured_image_alt: 'Five stages of enterprise AI rollout: access, adoption, workflow, governance and outcome',
  },
  published_at: new Date().toISOString(),
  content: `<p>On October 22, Uber and OpenAI announced that ChatGPT Work, OpenAI's agent for knowledge work inside ChatGPT Enterprise, is rolling out across Uber. It will be available to more than 30,000 employees, expanding from a pilot of 1,000.</p>

<p>Some coverage turned that into all 30,000 employees now using it. <a href="https://openai.com/index/uber-chatgpt-work-rollout/" ${EXT}>The announcement says available</a>. That difference is the most useful part of the story, because it is where enterprise AI programs either start working or quietly stall.</p>

<p>Availability across 30,000 employees measures reach. Adoption begins when recurring work changes. Transformation begins when a company can show that the work improved.</p>

<h2>What Uber actually announced</h2>

<p><a href="https://www.uber.com/us/en/blog/uber-announce-work/" ${EXT}>Uber and OpenAI published matching announcements</a>. The facts:</p>

<ul>
<li><strong>Availability.</strong> ChatGPT Work is available to more than 30,000 employees across Uber's global workforce, starting October 22. Uber calls it its first company-wide deployment of an agentic platform for knowledge work.</li>
<li><strong>Connections.</strong> It connects to Google Drive, Gmail, Google Calendar and Slack, so employees can research, prepare meeting briefs, build presentations, analyze data and complete workflows across applications.</li>
<li><strong>Support.</strong> The rollout is backed by Uber's internal AI skills library, approved integrations and dedicated employee training, for teams in operations, finance, marketing and product. Engineers continue to use Codex.</li>
<li><strong>Results.</strong> None yet. The companies say they plan to share insights into adoption, use cases and measurable outcomes as the rollout progresses.</li>
</ul>

<p><a href="https://techcrunch.com/2026/10/22/uber-puts-all-30000-employees-on-chatgpt-work/" ${EXT}>TechCrunch added pilot detail</a> from Sumanth Sukumar, Uber's VP of engineering. The pilot drew from departments including finance, operations and product, and about 80% of participants were non-engineers. They used it to analyze operational data for trends and recommendations, localize training materials for different markets, and build interactive dashboards for their own daily work. Uber did not disclose what the rollout costs, and published no pilot results on productivity, quality, cost or error rates. Sukumar said Uber will look at how employees use the tool, the workflows they develop and how it helps them work more effectively.</p>

<h2>Five stages, and where Uber stands</h2>

<p>A useful way to read any company-wide AI rollout is as five separate questions.</p>

<ul>
<li><strong>Access</strong> means employees can use it. Uber has answered this one: ChatGPT Work is being made available to more than 30,000 employees.</li>
<li><strong>Adoption</strong> means they use it repeatedly for valuable work. Not disclosed. There is no active-use figure.</li>
<li><strong>Workflow</strong> means the agent is attached to defined tasks and trusted company information. Partly disclosed. The pilot use cases, the skills library and approved integrations point here.</li>
<li><strong>Governance</strong> means integrations, permissions, accountability and human review are explicit. Partly disclosed. "Approved integrations" implies a review, but the announcement does not say what each integration may read or do.</li>
<li><strong>Outcome</strong> means the company can prove improvements in time, quality, cost or risk. Not yet, and both companies say so.</li>
</ul>

<p>Most announcements stop at the first stage. This one goes further because it names some workflow and governance inputs, then promises future reporting on adoption and measurable outcomes.</p>

<h2>The pilot is the more interesting number</h2>

<p>The 1,000-person pilot says more than the 30,000 figure. Four in five early users were not engineers, and their reported uses were specific: trend analysis on operational data, localized training materials, dashboards for their own work. Those are identifiable work products, not generic examples of prompting.</p>

<p>Sukumar's other example is the more instructive one. Earlier this year, Uber paired 30 AI engineers with teams for two weeks to automate key parts of their jobs. He said those "AI pods" showed what is possible when technical expertise meets a deep understanding of a particular job. That is a workflow method, not a license. It is the lesson I wrote about in <a href="/blog/ai-wont-fix-broken-work">AI won't fix broken work</a>: the value sits in the design of the work, not in pointing a model at a person.</p>

<h2>What Uber's own agents show</h2>

<p>Uber has also published what governed AI work looks like, in systems that are separate from ChatGPT Work.</p>

<p><a href="https://www.uber.com/us/en/blog/designing-mcp-gateway/" ${EXT}>Its MCP Gateway</a>, described on October 1, routes AI agents to Uber's internal services and hosts more than 800 MCP servers and over 5,000 tools. New tools are registered disabled by default, access is set by policy for humans, services and agents down to individual tools, and sensitive data is redacted from responses.</p>

<p><a href="https://www.uber.com/us/en/blog/solving-the-agent-identity-crisis/" ${EXT}>Its May post on agent identity</a> starts from accountability, which Uber defines as the ability to answer "who did what, when and why." Agents act on behalf of a person by default, each hop gets a short-lived, scoped token, and the full chain from the person through every agent is carried along for audit.</p>

<p><a href="https://www.uber.com/us/en/blog/building-ubers-redlining-agent/" ${EXT}>Its Legal Redlining Agent</a> shows the outcome stage. It works inside Microsoft Word on one defined task, contract redlines, drawing on the Legal team's playbooks. Lawyers accept, reject or modify every suggestion. Uber reports an over 20% reduction in average contract review time and 91% accuracy in AI-generated decisions, figures from a single team that Uber measured itself. Uber does not define the evaluation set or denominator behind the 91% accuracy figure in the post.</p>

<p>None of these posts says ChatGPT Work runs through the MCP Gateway or the identity architecture, and I would not assume it does. What they show is that Uber knows what the later stages require. The legal agent reached the outcome stage because it began with one workflow, trusted data, human review and a measurement.</p>

<h2>Trusted data plus governed workflows</h2>

<p>My working rule is that trusted data plus governed workflows is what turns AI into business results. ChatGPT Work's announced connectors reach documents, email, calendars and Slack. That is context. Whether it is trusted depends on which sources a given workflow may rely on, and who checks the output before it travels. The announcement does not say which integrations are approved for what, or whether a connection only reads or can also act.</p>

<p>The same principle runs through the governance shift in <a href="/ai-commerce-2027">AI Commerce 2027</a>: prove the workflow first, automate second. It applies with more force as software moves from assisting people to <a href="/blog/ant-international-account-for-agent-merchant-operations">operating parts of the business</a>. An agent that prepares the meeting brief needs a reviewer. An agent that changes a record needs an owner, a permission and an audit trail.</p>

<h2>How to measure what comes next</h2>

<p>Uber has promised outcomes later. These are the measures that would make them meaningful:</p>

<ul>
<li><strong>Use over time, not seats:</strong> weekly active use and repeat use by role.</li>
<li><strong>Workflows changed:</strong> how many recurring tasks now run with the agent, and who owns each one.</li>
<li><strong>Quality:</strong> error and rework rates, and how often a person corrected the output.</li>
<li><strong>Time and cost:</strong> cycle time on specific tasks against a baseline, and what the deployment costs.</li>
<li><strong>Risk:</strong> which integrations can write, and how each action is attributed.</li>
</ul>

<p>It is the same discipline I applied to <a href="/blog/agentic-commerce-adoption-definition-problem">agentic commerce adoption</a>: a percentage means little until you know what was counted.</p>

<h2>What the rollout proves</h2>

<p>It proves that Uber has made an agent available to its whole workforce, with connectors, training and a skills library, after a pilot that reached mostly non-engineers. It does not prove that 30,000 people use it, that the pilot improved productivity, or that Uber's operating model has changed.</p>

<p>A company does not become AI-native when it buys access for everyone. It becomes AI-native when employees can safely use company knowledge, run repeatable workflows, keep accountability clear and measure whether the result improved.</p>

<p>If every employee at your company had an agent tomorrow, which workflow would you measure first?</p>`,
}

const { data, error } = await supabase.from('blog_posts').insert(post).select('id, slug').single()
if (error) { console.error('Insert failed:', error); process.exit(1) }
console.log('Post inserted successfully:', data.id)
console.log('URL: https://theroberthu.com/blog/' + data.slug)
