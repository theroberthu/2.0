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

const DESCRIPTION = "NPCI's chairman drew a line at Global Fintech Fest: AI may read intent, but authorisation and settlement must stay deterministic. No spec is published yet."

// Sources. NPCI statistics are primary. The protocol reporting is secondary.
const SRC_NPCI = 'https://www.npci.org.in/product/upi/product-statistics'
const SRC_GFF = 'https://www.medianama.com/2026/09/223-npci-ai-agents-upi-payments/'
const EXT = 'target="_blank" rel="noopener noreferrer"'

const post = {
  slug: 'npci-upi-ai-agent-authorization',
  // Editorial H1 (renders on page, and as JSON-LD headline)
  title: 'AI Can Decide What to Buy. It Should Not Decide That Money Moves.',
  // Query-aligned search title (drives <title>, OG and Twitter). Deliberate split.
  meta_title: 'NPCI on AI Agents and UPI: What the Chairman Actually Said',
  excerpt: "NPCI's non-executive chairman told Global Fintech Fest that AI may work out what a user wants but should not approve the payment. The useful boundary in agentic commerce may not be between humans and agents at all. It may be between the part of a system allowed to interpret and the part required to be certain.",
  meta_description: DESCRIPTION,
  og_image: '/images/blog/npci-upi-ai-agent-authorization.svg',
  category: 'E-commerce Strategy',
  tags: ['NPCI', 'UPI', 'agentic payments', 'agent authorization', 'India', 'payments infrastructure'],
  status: 'published',
  featured: false,
  read_time_minutes: 6,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: false,
    related_posts: ['visa-mastercard-know-your-agent-interoperability', 'anthropic-claude-commerce-intelligence-layer', 'who-pays-when-ai-agents-fail'],
    featured_image_alt: 'An AI agent selecting a purchase while payment infrastructure separately verifies identity, mandate, limits and consent before any money moves',
  },
  published_at: '2026-09-10T22:30:00.000Z',
  content: `<p>Most of the agentic commerce conversation has been about whether an AI agent can be trusted. A payments official in Mumbai drew a different line last week, and it is a more useful one.</p>

<p>Ajay Kumar Choudhary, non-executive chairman and independent director at the National Payments Corporation of India, <a href="${SRC_GFF}" ${EXT}>told the Global Fintech Fest on September 10</a> that an AI agent may work out what a user wants but should not be the thing that approves the payment.</p>

<p>The sentence that matters is this one. "Decision making and execution must remain separate. AI may recommend, but authentication and final settlement must follow deterministic auditable rules."</p>

<p>That is not a warning about AI. It is a statement about which parts of a system are allowed to be uncertain.</p>

<h2>The mismatch he is describing</h2>

<p>LLM-based agent reasoning can be probabilistic. The same situation can produce different interpretations, and that flexibility is part of what makes these systems useful for understanding what someone actually wants.</p>

<p>Payment infrastructure is the opposite by design. It has to be deterministic, auditable and final. A settled transaction cannot be probably settled. A spending limit cannot be approximately enforced. An audit trail that reconstructs differently on a second reading is not an audit trail.</p>

<p>So the interesting boundary in agentic commerce may not be the one everybody is drawing between humans and software. It may be between the part of the system that is allowed to interpret and the part that is required to be certain.</p>

<p>Choudhary put the same idea in institutional terms. NPCI, he said, "is also examining the protocols that may be required to identify and authorise digital agents within the Unified Payments Interface ecosystem while preserving interoperability, auditability and settlement finality." The objective, in his words, is autonomy that is bounded and accountable rather than unlimited machine autonomy.</p>

<h2>Why the venue changes the argument</h2>

<p>UPI is not a product. In August 2026 it carried 24,508.96 million transactions worth 29,82,355.95 crore rupees across 752 banks, according to <a href="${SRC_NPCI}" ${EXT}>NPCI's own published statistics</a>. Roughly 24.5 billion payments in a month, on infrastructure that most of a country depends on.</p>

<p>That scale changes what a design constraint means. When a card network sets a rule, it governs its own participants. When national retail payment infrastructure sets one, the rule is the floor for everyone who touches the rail, including every bank, wallet and app built on top of it.</p>

<p>It is a different governance model from the one I looked at earlier this week, when <a href="/blog/visa-mastercard-know-your-agent-interoperability">Visa, Mastercard and Ant International began work on recognising each other's agents</a> while each network explicitly kept its own verification and decisioning. That is coordination between private parties who remain free to disagree. This is a shared utility deciding what software is permitted to do to money.</p>

<h2>The primitive already exists</h2>

<p>Here is my own reading rather than anything NPCI claimed.</p>

<p>UPI already separates the act of granting authority from the act of using it. Its published statistics carry mandate creation and mandate execution as distinct measures, which means the rail already understands a world where a user authorises something in advance and a system executes it later within those terms.</p>

<p>That gives UPI an existing primitive that maps unusually well onto the agentic-payment problem. The user grants a mandate with limits and conditions. The agent works out what to buy. The rail checks identity, mandate, limits and consent, then executes and settles.</p>

<p>Read that sequence and notice how little of it the agent is doing. It selects. It does not authorise, it does not enforce a limit, and it does not settle. <a href="/blog/anthropic-claude-commerce-intelligence-layer">The clever part of the system is deliberately kept out of the part that must be certain</a>, which is the same pattern showing up <a href="/blog/klaviyo-headless-agent-controls">wherever software is given real authority</a>. When an agent can act on a business system, the useful question stops being what it can do and becomes what it was allowed to do, and whether anyone can reconstruct that afterward.</p>

<h2>What has not been decided</h2>

<p>Almost everything, and this is where the coverage tends to get ahead of the record.</p>

<p>NPCI has published no specification. Choudhary described examining protocols, which is a live process rather than a shipped design. Business Standard reported in July, and Reuters in September, that NPCI is building a Unified Agent Protocol to register and verify AI agents, each citing unnamed people familiar with the work rather than an NPCI document. Reporting also indicates any launch would need approval from the Reserve Bank of India. Treat all of that as reported, not confirmed.</p>

<p>The unresolved parts are the ones that decide whether this works. Nobody has said <a href="/blog/who-pays-when-ai-agents-fail">where liability sits</a> when an agent transacts inside its mandate but against the user's interest, which is a genuinely hard case because no rule was broken. Per-transaction and cumulative limits for agent-initiated payments have not been published. Whether registration would be open to any developer or restricted to regulated entities is unknown. Whether the specification gets published for public comment before going live is unknown.</p>

<p>India also does not yet have binding rules here. The Reserve Bank's FREE-AI committee recommendations are not binding, and CERT-In has proposed human checks above certain financial thresholds rather than imposed them. Choudhary was setting a design constraint in advance of a rule, which is a reasonable thing for a chairman to do and is not the same as a rule existing.</p>

<h2>The objections</h2>

<p>A keynote is not policy. Choudhary is a non-executive chairman speaking at a conference, and the distance between that and a published specification with a rollout date is considerable.</p>

<p>The separation he describes may also prove harder than it sounds. If an agent selects the merchant, the amount and the timing, and the rail only checks that those fall inside a mandate the user granted months earlier, then the agent has shaped the outcome even though it never approved anything. Determinism at the authorisation step does not make the decision behind it any less probabilistic.</p>

<p>There is a commercial tension too. At the same event, Amazon Pay launched a consent-based wallet for agentic UPI payments without saying whether third-party agents can be authorised on it. Choudhary said interoperability must remain non-negotiable and warned against new walled gardens. Those two things are not obviously compatible, and the gap between them is where this actually gets decided.</p>

<h2>What I would watch</h2>

<p>Not the protocol announcement. The limits.</p>

<p>Whatever specification eventually appears, the substantive content will be the ceiling on what an agent can commit without a human, how a mandate can be revoked, and who absorbs the loss when an agent stays inside its authority and still produces a bad outcome. Those numbers and rules are the actual policy. Everything else is framing.</p>

<p>If an agent can decide what to buy but never decide that money moves, how much authority has it really been given?</p>
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
