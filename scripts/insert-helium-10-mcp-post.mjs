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

const DESCRIPTION = 'Helium 10 launched an MCP connector. What it signals about ecommerce software becoming infrastructure inside AI workflows, and what it cannot fix.'

// Official primary sources, threaded inline per Editorial Board requirement.
const SRC_ANNOUNCE = 'https://www.helium10.com/blog/helium-10-mcp/'
const SRC_KB = 'https://kb.helium10.com/hc/en-us/articles/51580564409883-Getting-Started-with-Helium-10-MCP'
const SRC_MCP_INTRO = 'https://modelcontextprotocol.io/docs/getting-started/intro'
const SRC_MCP_TOOLS = 'https://modelcontextprotocol.io/specification/2025-11-25/server/tools'
const EXT = 'target="_blank" rel="noopener noreferrer"'

const post = {
  slug: 'helium-10-mcp-ecommerce-software-infrastructure',
  title: "What Helium 10's MCP Reveals About the Future of Ecommerce Software",
  excerpt: "Answering one cross-functional Amazon question takes an afternoon of exports. Helium 10's MCP connector suggests the interface to commerce software is shifting from dashboards people navigate to data AI systems can query directly.",
  meta_title: "What Helium 10's MCP Reveals About the Future of Ecommerce Software",
  meta_description: DESCRIPTION,
  og_image: '/images/blog/helium-10-mcp-ecommerce-software-infrastructure.svg',
  category: 'Digital Transformation',
  tags: ['Model Context Protocol', 'ecommerce software', 'Amazon seller tools', 'AI workflows', 'agentic commerce'],
  status: 'published',
  featured: false,
  read_time_minutes: 6,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: false,
    related_posts: ['ai-wont-fix-broken-work', 'product-data-shared-infrastructure-google-ai-mode', 'who-pays-when-ai-agents-fail'],
    featured_image_alt: 'Ecommerce software shifting from a dashboard people navigate to a data layer AI systems query directly',
  },
  published_at: '2026-07-27T14:00:00.000Z',
  content: `<p>Here is a question an Amazon operator asks constantly and answers slowly: which keywords lost rank last month while our ad spend on them went up?</p>

<p>Answering it usually means opening a rank tracker, setting a date range, exporting a file, opening the advertising console, exporting again, joining the two in a spreadsheet on ASIN and keyword, noticing the date windows do not line up, fixing that, and only then looking at the result. The thinking takes a few minutes. Everything before it takes most of the afternoon.</p>

<p>On July 16, 2026, <a href="${SRC_ANNOUNCE}" ${EXT}>Helium 10 launched a Model Context Protocol connector</a>. What makes it worth attention is not the feature list but what it implies about where ecommerce software is heading.</p>

<h2>What was launched</h2>

<p>The <a href="${SRC_MCP_INTRO}" ${EXT}>Model Context Protocol</a> is, in its maintainers' words, "an open-source standard for connecting AI applications to external systems." The documentation offers a useful analogy: MCP is "like a USB-C port for AI applications," a common way to plug tools and data into whatever AI environment you already work in.</p>

<p>Helium 10 has built one for its own platform. Per its documentation, you connect your account once via OAuth, and it works inside Claude.ai, Claude Code, Cursor, and ChatGPT. Helium 10's product page describes "30+ MCP tools" spanning keyword research, reverse ASIN and competitor analysis, product research, rank tracking, listing analysis, advertising, profitability, and inventory. It is currently included with the Diamond plan at no additional cost. Helium 10 describes the connector as providing access to live account data, although its detailed documentation says the current release does not stream data in real time. Most metrics refresh daily, while Amazon Brand Analytics data refreshes weekly.</p>

<p>That is the confirmed shape of it. What matters is where it moves the work.</p>

<h2>The dashboard becomes a data layer</h2>

<p>Adding a chatbot to a dashboard keeps the dashboard as the destination. You still go there. This is the opposite arrangement. The data and tools travel to wherever the operator is already thinking, and the AI environment becomes where questions get asked, datasets get combined, and analysis gets built.</p>

<p>The rank-and-spend question above can become a sentence instead of an afternoon of exports. The same is true of asking which ASINs saw margin erosion and what drove it, since profitability and advertising data can be queried together rather than reconciled by hand afterward.</p>

<p>Notice what happens to Helium 10 in that arrangement. It may become more essential and less visible at the same time. The operator spends less time inside the product while depending on it more often. Those two things used to move together. They no longer have to.</p>

<h2>The value moves beneath the interface</h2>

<p>If the interface is no longer where the differentiation lives, it has to live somewhere. My read is that it moves down a layer, into things that are harder to see and harder to copy.</p>

<p>Proprietary data is the obvious one. Helium 10 claims its connector exposes "keyword index breadth, historical ranking trends, reverse-ASIN intelligence, and ad auction signals" that "go beyond what Amazon surfaces natively," and says it draws on the same data powering "$7B+ in monthly Amazon GMV across 4.5 million businesses." Those are the company's own claims rather than independently verified figures, but the strategic logic holds regardless of the exact numbers. Data Amazon does not hand you is data a competitor cannot trivially replicate.</p>

<p>Less obvious, and probably more durable: stable metric definitions, historical depth, dependable permissions, and tools that behave the same way tomorrow as they did today. When a human reads a dashboard, they can silently correct for a metric that means something slightly unusual. A model querying a tool cannot. It takes the definition at face value and reasons forward with total confidence. Definitional discipline stops being hygiene and becomes a product feature.</p>

<p>This is the same pattern I described in <a href="/blog/product-data-shared-infrastructure-google-ai-mode">how AI Mode surfaces product data</a>, and in <a href="/blog/amazon-joins-universal-commerce-protocol">Amazon joining the Universal Commerce Protocol</a>. Structured, trustworthy data underneath a standardized access layer keeps turning out to be where the advantage sits.</p>

<h2>The tension nobody has resolved</h2>

<p>Here is the strategic bind, and this is my interpretation rather than anything Helium 10 has said.</p>

<p>Connecting to Claude, ChatGPT, and Cursor makes Helium 10 more useful. It also hands those clients the conversation, the workflow, the history of how a decision was reached, and the moment when a recommendation is delivered. The operator's felt relationship starts attaching to the assistant, while the software becomes the thing the assistant queries.</p>

<p>Being indispensable infrastructure is a strong position. It is not the same position as owning the customer relationship, and the second one is usually where pricing power lives. Commerce platforms exposing MCP servers will have to manage some version of this trade.</p>

<h2>What actually changes for operators</h2>

<p>Fewer exports, fewer handoffs, faster cross-dataset questions, and analyses that can be saved and rerun rather than rebuilt. That is real, and it is worth having.</p>

<p>It also introduces work that did not exist before. Someone has to confirm the model is using the metric definition you think it is. Someone has to decide which tools an assistant may call. And the distinction between reading data, analyzing it, recommending an action, and executing one has to be drawn deliberately rather than discovered later.</p>

<p>That distinction deserves care because Helium 10's current documentation conflicts. Its product landing page says an agent can, with approval, execute changes including bids and budgets. But its <a href="${SRC_KB}" ${EXT}>detailed help-center guide</a> says MCP V1 is strictly read-only. It cannot create or pause campaigns, adjust bids, or modify listings, and write capabilities are described as planned for a future release.</p>

<p>Until Helium 10 reconciles those pages, the safest conclusion is that the current connector retrieves and analyzes data but does not execute changes. MCP itself can expose tools that take action, but that protocol-level capability should not be confused with what this particular implementation supports today.</p>

<p>MCP tools are designed to be model-controlled, and <a href="${SRC_MCP_TOOLS}" ${EXT}>the protocol recommends keeping a human in the loop</a> with the ability to deny tool invocations. That principle becomes more consequential if and when Helium 10 adds write access.</p>

<h2>The honest counterpoint</h2>

<p>None of this proves dashboards are going away. Visual inspection, configuration, exception handling, and account administration still work better on a screen built for looking. Auditing what an assistant did will probably send you back to the interface more often, not less.</p>

<p>There are narrower limits too. This is currently a Diamond-tier feature, so it is not yet a market-wide shift. Behavior will vary by AI client, and exposing a tool does not mean a model will select the right one or read the result correctly. Better access cuts both ways: if definitions are shaky or inputs are stale, faster querying produces confident errors faster, formatted persuasively.</p>

<p>Which connects to something I keep running into. <a href="/blog/ai-wont-fix-broken-work">AI does not fix broken work</a>. A connector removes navigation, exports, and context switching. It does not repair unclear metrics, weak decision rules, or absent approval boundaries. It inherits them, and then it inherits them at speed.</p>

<h2>Where this leaves me</h2>

<p>The next generation of ecommerce software may be used less as a destination and more as trusted infrastructure inside AI workflows. The dashboard does not disappear. It stops being the only place the work begins and ends.</p>

<p>If that holds, the competitive questions change. Not whose interface is best, but whose data is deepest, whose definitions are most reliable, whose permissions are most governable, and whose tools behave predictably enough that an operator will eventually trust an <a href="/blog/who-pays-when-ai-agents-fail">agent to act through them</a>.</p>

<p>Which leaves the question I cannot yet answer. If the assistant becomes the place where the operator actually works, what does the commerce platform have to own to stay indispensable rather than become a utility someone else meters?</p>
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
