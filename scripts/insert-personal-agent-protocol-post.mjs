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

const DESCRIPTION = "Meta and Sierra announced Personal Agent Protocol, an open standard for how personal AI agents act for customers. How it works, what is not live yet, and how it differs from UCP."

const EXT = 'target="_blank" rel="noopener noreferrer"'

const post = {
  slug: 'personal-agent-protocol-ai-commerce',
  // Editorial H1 (renders on page, and as JSON-LD headline)
  title: 'Personal Agent Protocol: How AI Agents Get Permission to Act for Customers',
  // Query-aligned search title (drives <title>, OG and Twitter). Deliberate split.
  meta_title: 'Personal Agent Protocol: What Ecommerce Brands Need to Know',
  excerpt: "Sierra and Meta announced Personal Agent Protocol on October 6, an open standard in development for how personal AI agents work with businesses on a customer's behalf. The v0.1 specification is not published yet. The idea that matters for retailers is two separate grants in one session: the customer decides what the agent may do, and the business decides what it will accept.",
  meta_description: DESCRIPTION,
  og_image: '/images/blog/personal-agent-protocol-ai-commerce.svg',
  category: 'Digital Transformation',
  tags: ['Personal Agent Protocol', 'agentic commerce', 'AI agents', 'OAuth', 'Sierra', 'Meta'],
  status: 'published',
  featured: false,
  read_time_minutes: 5,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: false,
    related_posts: ['ai-visibility-permission-stack-cloudflare', 'visa-mastercard-know-your-agent-interoperability', 'amazon-joins-universal-commerce-protocol'],
    featured_image_alt: 'A personal AI agent acting for a customer, with the customer granting read or write access and the business setting what the agent may do',
  },
  published_at: new Date().toISOString(),
  content: `<p><a href="https://sierra.ai/blog/introducing-personal-agent-protocol" ${EXT}>On October 6, Sierra and Meta announced Personal Agent Protocol</a>, an open standard for how personal AI agents work with businesses on a customer's behalf.</p>

<p>Start with its status, because early coverage has already blurred it. Personal Agent Protocol has been announced. Its specification has not been published. Sierra says it plans to publish v0.1 later in October, along with design workshops and a reference implementation. Anything written today, including this, describes a design, not a deployed standard.</p>

<h2>What Personal Agent Protocol is</h2>

<p>Sierra describes it as "an open standard Meta and Sierra are developing along with industry partners at Genesys, Instinct, Rocket, Shopify, Stripe, and Walmart that defines how personal agents interact with businesses." The announcement was written by Sierra's co-founders, Bret Taylor and Clay Bavor, and says the protocol is "open for anyone to implement."</p>

<p>OpenAI, Anthropic, Amazon and Google are not among the named partners.</p>

<p>Partnership is also not deployment. None of these companies has said it is running the protocol in production, and there is nothing yet to run.</p>

<h2>How it works</h2>

<p>Sierra's announcement describes the flow in a few steps.</p>

<p>A personal agent starts on the company's website, where it discovers what the company offers and how to reach it. It then begins a session on its user's behalf. That session can start as a guest, which Sierra says may be enough to check product availability or ask about a returns policy.</p>

<p>When a task needs the customer's account, the customer signs in on the company's page or uses credentials already set up with their agent. Sierra is explicit about who decides what happens next: "The customer is always in control, deciding whether the agent has read-only or write access."</p>

<p>The session is built on OAuth, the established standard for authorizing access, and it carries across channels, so a question asked before sign-in and an order change made afterward belong to the same visit.</p>

<p>From there the agent works through whichever route the company chooses: the company's regular web pages, its APIs, which Sierra says can be built on standards such as MCP and OpenAPI, or the company's own agent, for tasks that need conversation, such as a warranty claim.</p>

<h2>Two grants, one session</h2>

<p>The sentence in the announcement that matters most for retailers is this one: "consumers decide what access to give their personal agents, and companies set parameters for what those agents can do."</p>

<p>That is two separate permissions. The customer authorizes the agent. The business independently decides what it will accept from that agent. Neither grant implies the other.</p>

<p>This progresses a question I have been tracking. In September I wrote that <a href="/blog/ai-visibility-permission-stack-cloudflare">AI visibility is becoming a permission stack</a>, where Cloudflare let sites set different rules for search crawlers, training crawlers and user-directed agents. Those were category rules: should this kind of bot get in at all. Personal Agent Protocol proposes something narrower and more useful for commerce. A specific customer's agent arrives, the customer says what it may do, and the company says what it will allow.</p>

<p>It helps to separate four questions a retailer now faces. Can the software reach us at all, which is what crawler and bot controls handle. Who is it acting for. What has that customer allowed it to do. And what will we allow it to do. Personal Agent Protocol is aimed at the last three, joined in one session.</p>

<p>It also answers, at least on paper, a gap I noted in AI Commerce 2027. Consumer authorization and merchant authorization were being built by different parties on different timelines. This is the first proposal I have seen that puts both inside the same session.</p>

<h2>The problem Amazon raised with Muse</h2>

<p>Meta co-develops this protocol, and Meta's personal agent, Muse, has already run into the problem it addresses. In September, Amazon blocked Muse from shopping on Amazon.com. <a href="https://www.geekwire.com/2026/amazon-blocks-metas-muse-ai-assistant-in-new-standoff-over-agentic-shopping/" ${EXT}>According to GeekWire</a>, Amazon's spokesperson said such applications "should operate openly and respect service provider decisions about whether or not to participate."</p>

<p>Personal Agent Protocol's design addresses the same problem Amazon raised when it blocked Muse: agents need to identify themselves and operate within permissions the business accepts. Amazon is not a named partner, and nothing here says it will join.</p>

<h2>What Personal Agent Protocol is not</h2>

<p>The protocol sits next to several standards that are easy to confuse with it.</p>

<p><strong>Not a payment protocol.</strong> Payments are listed as a future extension. Sierra says payments extensions "could let a personal agent complete a purchase without sharing credit card information." That is a plan, not part of the announced design. More detailed per-action permissions are described the same way, as something that could come later.</p>

<p><strong>Not UCP.</strong> The <a href="/blog/amazon-joins-universal-commerce-protocol">Universal Commerce Protocol</a> standardizes commerce actions such as catalog, cart, checkout and orders. Personal Agent Protocol is about the session around any customer task, including service work such as order changes and warranty claims. Shopify supports both. Sierra has not said how the two will relate.</p>

<p><strong>Not MCP.</strong> MCP is one of the ways a company can expose its APIs, and Sierra names it as a route the agent can use. It does not replace MCP.</p>

<p><strong>Not Know Your Agent.</strong> The <a href="/blog/visa-mastercard-know-your-agent-interoperability">Know Your Agent work</a> among card networks is about verifying and certifying agents across payment ecosystems. Personal Agent Protocol is about one customer, one agent and one business agreeing on a session.</p>

<p><strong>Not an obligation to allow everything.</strong> A company supporting the protocol still sets the parameters. Supporting it would mean recognizing agents acting for customers, not accepting every action they request.</p>

<h2>What ecommerce operators should do now</h2>

<p>Nothing here requires engineering work yet. It does require decisions that most companies have not made.</p>

<p>Decide which customer actions an agent could perform with read-only access, and which would require write access. Order status and returns policy questions are one category. Changing an address or placing an order is another.</p>

<p>Decide which route you would expose. Your website already exists. Your APIs may not be ready for outside agents, and you may not want them to be. A company agent may be the safest place for anything that needs judgment.</p>

<p>Then read v0.1 when it arrives, and pay attention to who adopts it. A protocol is only as useful as the agents and businesses on both ends.</p>

<p>When a customer's agent knocks, will your business recognize it, and have you decided what it is allowed to do?</p>`,
}

const { data, error } = await supabase.from('blog_posts').insert(post).select('id, slug').single()
if (error) { console.error('Insert failed:', error); process.exit(1) }
console.log('Post inserted successfully:', data.id)
console.log('URL: https://theroberthu.com/blog/' + data.slug)
