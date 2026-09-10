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

const DESCRIPTION = 'Visa, Mastercard and Ant International began a Know-Your-Agent collaboration. Each network keeps its own verification, which sets the limit on portability.'

// Primary sources, cited at the claims they support. Announcement date: September 9, 2026.
const SRC_KYA = 'https://www.ant-intl.com/en/news/detail/?id=ant-international-mastercard-and-visa-initiate-collaboration-on-know-your-agent-interoperability-to-scale-agentic-commerce'
const SRC_VISA = 'https://developer.visa.com/capabilities/trusted-agent-protocol/overview'
const SRC_AMP = 'https://www.ant-intl.com/en/news/detail/?id=ant-international-launches-open-sourced-agentic-mobile-protocol-to-drive-ai-commerce'
const EXT = 'target="_blank" rel="noopener noreferrer"'

const post = {
  slug: 'visa-mastercard-know-your-agent-interoperability',
  // Editorial H1 (renders on page, and as JSON-LD headline)
  title: 'Agentic Commerce Is Starting to Standardize the Buyer',
  // Query-aligned search title (drives <title>, OG and Twitter). Deliberate split.
  meta_title: 'Visa, Mastercard and Ant Begin Know-Your-Agent Collaboration',
  excerpt: "Ant International, Mastercard and Visa have begun work on a Know-Your-Agent interoperability framework. The defining sentence keeps each network's own verification and decisioning intact, which means what is becoming portable is not trust itself but the questions every network agrees to ask about an agent.",
  meta_description: DESCRIPTION,
  og_image: '/images/blog/visa-mastercard-know-your-agent-interoperability.svg',
  category: 'E-commerce Strategy',
  tags: ['Visa', 'Mastercard', 'Ant International', 'agent identity', 'agentic commerce', 'payments infrastructure'],
  status: 'published',
  featured: false,
  read_time_minutes: 6,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: false,
    related_posts: ['amex-ai-agent-purchase-protection', 'ai-checkout-interface-commerce-infrastructure', 'who-pays-when-ai-agents-fail'],
    featured_image_alt: 'An AI agent arriving at a merchant checkout while separate payment networks each run their own verification of that agent rather than accepting one anothers',
  },
  published_at: '2026-09-10T13:00:00.000Z',
  content: `<p>A merchant's <a href="/blog/ai-checkout-interface-commerce-infrastructure">checkout</a> receives a purchase request. It is not from a person at a keyboard. It is from software acting for someone.</p>

<p>Four questions follow, and they are not the same question. Which agent is this. Who operates it. What was it actually authorized to do. And if another network already answered those questions, can this merchant rely on the answer.</p>

<p>The fourth one is the interesting one, and it is the one Ant International, Mastercard and Visa started working on this week.</p>

<h2>What they announced</h2>

<p>On September 9, the three said they have <a href="${SRC_KYA}" ${EXT}>begun collaboration on a Know-Your-Agent interoperability framework</a>, meant to help card networks, wallet ecosystems, agent platforms and marketplaces streamline agent onboarding and identification across networks.</p>

<p>The collaboration centers on three things, in their words. Cross-network operator traceability, where each agent is linked to a validated operator, cardholder, or business, enabling clear attribution of agent activity. Shared certification requirements, where each agent is assessed against security and behavioral requirements. And continuous transaction monitoring, where each agent is evaluated on an ongoing basis using identity and transaction signals.</p>

<p>Some of this work will run through BuildFin.ai, an industry platform convened by the Monetary Authority of Singapore, building on a framework called Safeguards for Agentic Finance at Runtime. The workstream is described as operating across payment ecosystems in Singapore.</p>

<p>Note the verbs. Begun. Explore. There is no specification, no governance body, no timeline, and no launch.</p>

<h2>The sentence that defines the limit</h2>

<p>The framework is described as based on shared principles while preserving each network's own verification and decisioning processes.</p>

<p>That clause does more work than the headline. It means the networks are not proposing to accept each other's verdicts. Each keeps its own verification. Each keeps its own decision about whether to trust a given agent.</p>

<p>So what is actually becoming portable is not trust. It is the questions. The three are aligning on what has to be known about an agent, what it has to be certified against, and the fact that it should be monitored after certification. They are not aligning on who gets to conclude that the agent is fine.</p>

<p>That is real, and smaller than a portable agent identity. It is closer to a shared syllabus than a shared diploma.</p>

<h2>Three companies, three different problems</h2>

<p>The gap becomes clearer when you look at what each brought, because the protocols are not solving the same thing.</p>

<p>Visa's <a href="${SRC_VISA}" ${EXT}>Trusted Agent Protocol</a> is about recognition at the merchant's door. Agents sign their requests, and merchants validate the signature. Visa's own documentation frames the problem as merchants historically classifying automated traffic as bots and blocking it, and the protocol as a way to distinguish trusted commerce agents from malicious ones. The signal it carries is that this is a Visa trusted agent. Visa also notes the product is in development and deployment and may not be available in all markets. <a href="/blog/amex-ai-agent-purchase-protection">Card issuers have been verifying agent identity for months</a>, each on their own terms.</p>

<p>Mastercard Verifiable Intent is not primarily an identity system at all. It creates a record of what the user authorized, linking the cardholder, the instruction, and the outcome, as cryptographic proof of authorization. Mastercard's Chief Digital Officer described the goal as verifying that actions reflect the user's intent and preserving accountability.</p>

<p>Ant International's <a href="${SRC_AMP}" ${EXT}>Agentic Mobile Protocol</a> comes from the wallet side rather than the card side, and it already contains its own Know Your Agent framework covering an agent's digital identity and certified capabilities, plus a proprietary Agent Trust Rating that it describes as a dynamic risk tool controlling how much autonomy an agent gets.</p>

<p>Three organizations, three layers. Recognition, authorization, and delegation on wallet rails.</p>

<h2>Why that distinction survives the announcement</h2>

<p>This is my interpretation rather than anyone's claim.</p>

<p>Knowing which agent is at the door is not the same as knowing what it was allowed to do. And neither is the same as knowing it did that thing correctly.</p>

<p>An agent can be legitimately operated, properly certified, correctly identified, and still execute an instruction badly or beyond its scope. That is not a hypothetical gap. It is <a href="/blog/klaviyo-headless-agent-controls">the same boundary I keep running into wherever software acts on a business's behalf</a>, and identity infrastructure does not close it. A verified agent that sends the wrong thing is still a verified agent.</p>

<p>The KYA work is aimed primarily at the first problem, touches the second through Mastercard's contribution, and does not claim to solve the third.</p>

<h2>Continuous trust is the part worth watching</h2>

<p>The monitoring language is the most forward-leaning thing in the announcement, and it points somewhere structurally different.</p>

<p>If an agent is continuously evaluated using identity and transaction signals, then verification stops being a one-time gate. Ant's Chief Innovation Officer talked about the industry drawing on richer signals, naming capabilities, behavior, execution performance, and risk data.</p>

<p>Read that plainly and a verified agent is not permanently a trusted agent. Its status can move. Ant already ships something along these lines in its own protocol, tied to how much autonomy an agent is granted.</p>

<p>I want to be careful here. There is no shared cross-network trust score, nothing in these materials says merchants can rank or block agents by trust history, and Ant's rating is its own proprietary mechanism rather than an output of this collaboration. What the announcement supports is narrower: the participants think ongoing assessment belongs in the model.</p>

<h2>The objections</h2>

<p>The strongest one is the collaboration's own framing. Preserving each network's own decisioning is exactly the thing that keeps a merchant from being able to rely on a single answer, and it is in the defining sentence.</p>

<p>Commercial incentives point both ways. Trust intelligence about agents is competitive information, and a network that fully honors a rival's verification gives up some of the reason to be the network. Common principles are cheap to agree on. Common infrastructure is not.</p>

<p>The scope is also narrower than the company names suggest. The concrete regulator-adjacent workstream is described as operating in Singapore, and one of the three protocols involved is still in development by its own documentation.</p>

<p>Merchants will keep their own risk controls regardless, and most existing fraud systems were not built to consume agent-specific trust signals. Identity does not establish that a transaction was authorized correctly, <a href="/blog/who-pays-when-ai-agents-fail">liability rules remain unsettled</a>, and a global agent identity layer would concentrate governance in a way that creates its own problems.</p>

<h2>What I would actually watch</h2>

<p>Commerce spent decades making identity and money portable between institutions. A merchant does not evaluate a card credential from first principles, because infrastructure carries that trust. Agentic commerce may need something similar for the software actor, and this is a step toward it rather than an arrival.</p>

<p>The signal I would watch for is not another framework announcement. It is the first time one network's verification is accepted by another without a second check, because that is the moment the questions stop being shared and the answers start being.</p>

<p>If every network keeps the right to decide for itself which agents to trust, what exactly has become interoperable?</p>
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
