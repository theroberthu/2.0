/**
 * Content model for the /ai-commerce-2027 living research page.
 *
 * This file holds the page's editorial content so the route stays a thin
 * renderer. To update the page during 2027: edit LAST_UPDATED, add rows to
 * EVIDENCE_TRACKER, and revise the relevant SHIFT fields. No layout changes
 * should be needed for a routine update.
 */

export const PUBLISHED = '2026-09-21'
export const LAST_UPDATED = '2026-09-21'
export const READING_MINUTES = 16

/** Inline link used inside body copy. Rendered as a Next.js Link. */
export type Ref = { label: string; href: string }

export type Shift = {
  id: string
  number: string
  title: string
  /** Primary evidence only. What is verifiably true. */
  changed2026: string[]
  /** Robert's analytical interpretation. Explicitly hedged. */
  enables2027: string[]
  /** Explicit limitations. */
  unproven: string
  /** One or two measurable developments that would move the thesis. */
  signal: string
}

export const SHIFTS: Shift[] = [
  {
    id: 'recommendation-to-execution',
    number: '01',
    title: 'AI shopping moves from recommendation toward execution',
    changed2026: [
      'Google launched the Universal Commerce Protocol in January 2026 as an open standard for how agents and merchant stores exchange catalog, checkout and payment information, then added Cart, Catalog and Identity Linking capabilities in March and a cross retailer Universal Cart in May.',
      'Tapestry made Coach and Kate Spade products buyable inside Google Search, AI Mode and the Gemini app on September 16, using UCP, with checkout completed through Google Pay and no website redirect. Tapestry states that each transaction requires the consumer\'s explicit approval.',
      'Sabre reported in September that its Model Context Protocol server had reached nearly 80 travel customers piloting or in full production, with servicing capabilities in production rather than in demo.',
    ],
    enables2027: [
      'The pieces required for an agent to complete a purchase now exist in production somewhere, which is different from being adopted everywhere. 2027 is the first year the question can be asked honestly: does meaningful volume actually move through these paths.',
      'Servicing is the underrated half. Sabre is in production with post booking servicing, and a purchase an agent can make but not amend, cancel or refund is an incomplete capability rather than a complete one.',
      'This is the first half of the argument this report makes. Software can increasingly act. Shift eight is the other half: acting reliably, over months rather than in a single task, is a much harder problem, and it is where the evidence is weakest.',
    ],
    unproven:
      'I could not find published transaction volume for agent initiated purchases from any platform, network or retailer. Announcements, integrations and named brands are all public. The number that would settle whether this is a market or a capability is not. Treat every adoption claim in this space as a claim about availability, not usage.',
    signal:
      'Any operator publishing agent initiated orders as a share of total orders, and any retailer disclosing agent originated returns or servicing volume alongside it.',
  },
  {
    id: 'website-handoff',
    number: '02',
    title: 'The merchant website stops being the mandatory handoff point',
    changed2026: [
      'Google\'s Universal Cart, announced in May, works across retailers and across Search and Gemini. Shoppers can check out with Google Pay or transfer items to the merchant site, and Google states the retailer always remains the merchant of record.',
      'OpenAI\'s Agentic Commerce Protocol, open sourced with Stripe in September 2025, takes the same position from the other side: orders, payments and fulfillment are handled by the merchant using existing systems, and the merchant stays merchant of record.',
      'Tapestry\'s implementation removes the redirect for single item purchases while keeping Tapestry as the seller.',
    ],
    enables2027: [
      'This separates two things operators have treated as one. Interface ownership is who renders the moment of purchase. Transaction ownership is who holds the order, the money, the customer record and the obligation. 2026 architecture consistently gives the interface away and keeps the transaction.',
      'A merchant can plausibly lose the session without losing the sale. What it loses with the session is less discussed: brand presentation, merchandising context, cross sell, and the behavioral data that comes from someone moving through a site rather than approving a card.',
    ],
    unproven:
      'Nobody has shown what happens to basket size, return rate or repeat purchase when the visit disappears. Websites are not going away, and the honest description of 2026 is that a second path opened, not that the first one closed.',
    signal:
      'Merchants publishing comparative basket and return data for agent completed versus site completed orders, and whether any retailer declines agentic checkout after testing it.',
  },
  {
    id: 'product-data-infrastructure',
    number: '03',
    title: 'Product data becomes shared commerce infrastructure',
    changed2026: [
      'Google made conversational attributes available to retailers globally in May, letting product descriptions reflect how people actually ask, and added Ask Advisor inside Merchant Center.',
      'UCP\'s Catalog capability lets agents retrieve real time product details including variants, inventory and pricing, which makes the catalog an operational dependency at the moment of sale rather than a marketing asset.',
      'Bazaarvoice said in September that standard JavaScript rendering creates a blind spot for AI crawlers, and spent 2026 moving review content into crawlable and feed delivered forms.',
    ],
    enables2027: [
      'The same record increasingly feeds organic recommendation, advertising, agent evaluation, checkout accuracy and measurement. That concentration raises the cost of a stale attribute, because the error now appears in more places and is repeated with confidence.',
      'Search debt used to surface as lower rankings. The same debt now surfaces as an agent describing your product incorrectly, or skipping it because a required field was missing.',
    ],
    unproven:
      'There is still no published evidence linking a specific product data improvement to a measurable change in AI recommendation outcomes at scale. The mechanism is documented. The elasticity is not.',
    signal:
      'Any platform publishing attribute level diagnostics that tie a data field to a visibility or transaction outcome rather than to a feed validation status.',
  },
  {
    id: 'geo-operating-discipline',
    number: '04',
    title: 'GEO starts to become an operating discipline rather than a theory',
    changed2026: [
      'Google Search Console shipped a Generative AI performance report showing impressions and pages inside AI Overviews and AI Mode, expanding worldwide on August 31.',
      'Google announced AI performance insights in Merchant Center in May, comparing a brand\'s share of voice on AI surfaces against similar brands, rolling out in five markets.',
      'Bluefish and Bazaarvoice published a citation analysis in September covering 237,804 citation instances across three AI surfaces, which is the kind of dataset the discipline did not have a year ago.',
    ],
    enables2027: [
      'Enough instrumentation now exists to run a loop: observe where you appear, form a hypothesis about why, change something, and look again. That is meaningfully better than optimizing blind.',
      'It is not yet a controlled loop. The measurement is platform specific, the denominators are undisclosed, and impressions are not traffic, let alone revenue.',
    ],
    unproven:
      'No published measurement connects an AI visibility change to commercial outcome with a control. Vendor conversion claims for AI referred traffic currently range from roughly 42% better to three to five times better, which is a spread wide enough to indicate the field lacks a shared definition, not merely different results.',
    signal:
      'Convergence on a cross platform definition of an AI impression, and any measurement product that reports a denominator.',
  },
  {
    id: 'second-interface',
    number: '05',
    title: 'Commerce stacks grow a second interface for software',
    changed2026: [
      'WebMCP, drafted at the W3C in February 2026 and implemented behind a flag in Chrome Canary, proposes a browser API through which a page declares callable tools to an agent instead of being clicked at.',
      'Model Context Protocol servers moved into production commerce operations. Sabre reports nearly 80 travel customers on its MCP server, and software vendors including Helium 10 and Klaviyo exposed their capabilities to agents as tools.',
      'UCP addresses a different layer again: not how an agent operates a page or a vendor tool, but how a purchase is structured between an agent platform and a merchant.',
    ],
    enables2027: [
      'These three are not interchangeable and the difference matters operationally. WebMCP is a page level surface. MCP is a tool and server surface. UCP and ACP are transaction surfaces. A merchant may end up exposing more than one.',
      'The durable shape is a storefront with two front doors: a visual interface for people and a structured interface for software, maintained by the same team from the same product record.',
    ],
    unproven:
      'Whether any of these achieve broad adoption is open, and browser support for WebMCP is early. A second interface also doubles the surface that has to be kept accurate, and nobody has published what that costs to run.',
    signal:
      'A major commerce platform shipping an agent interface as a default capability rather than an app, and the first published incident where the two interfaces disagreed about price or availability.',
  },
  {
    id: 'advertising-conversational',
    number: '06',
    title: 'Advertising becomes conversational, and moves closer to the transaction',
    changed2026: [
      'OpenAI began testing Sponsored Agents on September 16: after seeing a relevant ad, a user can enter a clearly labeled conversation with a business sponsored agent, which OpenAI states is distinct from ChatGPT\'s independent answers and separate from the original conversation.',
      'OpenAI opened ChatGPT Ads to Shopify merchants the same day, syncing catalog and commerce events from the store into the ad platform.',
      'Google began bringing UCP into ad formats, including Direct Offers and Shopping ads on YouTube, so a person can buy from the ad unit itself.',
    ],
    enables2027: [
      'The click is no longer necessarily the end of the ad. A plausible 2027 sequence runs from an independent answer, to a labeled paid placement, to a sponsored conversation, to a merchant transaction.',
      'That adds a governed surface most teams do not have a process for. If a brand run agent answers questions after the click, someone has to decide what product data grounds it and who approves the claims it makes.',
    ],
    unproven:
      'OpenAI has published no performance evidence for Sponsored Agents: nothing on conversion, acquisition cost, or whether a sponsored conversation beats a landing page. It is a test with selected advertisers. The boundary between organic answer, paid placement and sponsored conversation is stated by the platform and has not been independently audited.',
    signal:
      'Published performance data for sponsored conversations, and evidence about whether users can still tell which surface they are in three or four turns into a commercial exchange.',
  },
  {
    id: 'trust-infrastructure',
    number: '07',
    title: 'Trust becomes infrastructure, on two sides at once',
    changed2026: [
      'Ant International, Mastercard and Visa began work on a Know Your Agent interoperability framework in September, covering operator traceability, shared certification and continuous monitoring, while explicitly preserving each network\'s own verification and decisioning.',
      'Ant International announced an Account for Agent for businesses on September 18, built on KYA enabled smart contracts with monitoring and intervention, pointing the same identity machinery at the merchant\'s own operations.',
      'Cloudflare separated crawler permissions into search, training and agent behaviors on September 15, and reported that fewer than 1% of sites block search while 17% use some mechanism to block training.',
    ],
    enables2027: [
      'A workable sequence is becoming visible: identify the agent, verify its authority, establish merchant permission, constrain what it may do, execute, and preserve evidence afterward.',
      'Consumer authorization and merchant authorization are different problems. A shopper delegating a purchase is one grant. A merchant permitting an agent to transact against its catalog, inventory and payment systems is another. AI commerce appears to need both, and they are being built by different parties on different timelines.',
    ],
    unproven:
      'Nothing published shows one network accepting another\'s verification without its own check, which is the moment trust becomes portable rather than merely coordinated. Liability when an agent acts inside its authority and produces a bad outcome remains unsettled, and there is still no established standard for expressing agent permissions at all.',
    signal:
      'The first cross network acceptance of another party\'s agent verification, and the first published dispute framework for a transaction an authorized agent got wrong.',
  },
  {
    id: 'workflow-reliability',
    number: '08',
    title: 'Workflow reliability starts to matter more than model rankings',
    changed2026: [
      'Merchant side agents began shipping with explicit control surfaces: staged writes and approval gates in Anthropic\'s merchant agent blueprint, granular tool and permission controls in Klaviyo\'s MCP server, and human approval before anything reaches a live store in Noibu\'s agents.',
      'A set of long horizon commerce benchmarks appeared, all of them simulations. In E-Commerce Bench, a 365 day simulated store operation from Alibaba\'s Qwen team, the model that finished with the most assets ranked 16th of 18 on fraud avoidance, routing 18.48% of spend to fraudulent suppliers.',
      'MerchantBench, another year long simulation, found the best model configuration reached about 27% of the net assets human participants achieved on the same simulator, with documented activity decay over the horizon.',
    ],
    enables2027: [
      'The unit of automation is the workflow, not the model. Trust in 2027 is more usefully earned by a specific workflow with known permissions, known failure modes and retained evidence than inherited from whichever model is ranked highest this quarter.',
      'The benchmark result worth carrying into operations is the shape of the failure, not the score. An agent can hit the metric it was given while damaging something nobody assigned it to protect, including fraud exposure, margin, inventory position or supplier quality.',
      'Read against shift one, this is the whole tension of 2027. The capability to act arrived first. The evidence that acting holds up over time has not, and a business that adopts the first without testing the second is taking a risk it has not measured.',
    ],
    unproven:
      'Every one of these benchmarks runs in simulation. None evaluates agents operating real merchant accounts, and none should be read as a statement about production performance. What they establish is that side effects are measurable and real in controlled settings, not what rate they occur at in a live business.',
    signal:
      'Any production merchant publishing agent error, reversal or intervention rates, and whether vendors start reporting the changes their agents got wrong alongside the ones that worked.',
  },
]

export type ComparisonRow = {
  dimension: string
  assisted: string
  commerce: string
}

export const COMPARISON: ComparisonRow[] = [
  { dimension: 'Primary actor', assisted: 'A person', commerce: 'A person plus an authorized agent' },
  { dimension: 'Role of AI', assisted: 'Assists the operator or shopper', commerce: 'Acts inside granted limits' },
  { dimension: 'Discovery', assisted: 'AI supported search and merchandising', commerce: 'AI mediated, often without a site visit' },
  { dimension: 'Checkout', assisted: 'Human led on the merchant site', commerce: 'Potentially agent initiated, with approval' },
  { dimension: 'Payment', assisted: 'Entered or approved by a person', commerce: 'Delegated within explicit limits' },
  { dimension: 'Permissions', assisted: 'Application and user permissions', commerce: 'Agent identity, delegated authority, merchant controls' },
  { dimension: 'Governance', assisted: 'Tool governance', commerce: 'Workflow and transaction governance' },
  { dimension: 'Measurement', assisted: 'Established ecommerce metrics', commerce: 'Established metrics plus agent specific ones' },
  { dimension: 'Failure mode', assisted: 'A bad recommendation a person can ignore', commerce: 'An executed action that has to be reversed' },
]

export type FlowStage = { name: string; note: string }

export const FLOW: FlowStage[] = [
  { name: 'Discovery', note: 'Where a need becomes a candidate set' },
  { name: 'Recommendation', note: 'Where candidates become a choice' },
  { name: 'Agent action', note: 'Where a choice becomes a prepared action' },
  { name: 'Transaction', note: 'Where the order is created and owned' },
  { name: 'Payment', note: 'Where authority is verified and money moves' },
  { name: 'Fulfillment', note: 'Where the promise is kept' },
  { name: 'Measurement', note: 'Where the result feeds the next decision' },
]

export const FOUNDATIONS: FlowStage[] = [
  { name: 'Product data', note: 'The record every layer above reads' },
  { name: 'Identity', note: 'Which agent, operated by whom' },
  { name: 'Permissions', note: 'What it is allowed to do here' },
  { name: 'Protocols', note: 'How systems exchange the transaction' },
  { name: 'Merchant systems', note: 'Orders, inventory, pricing, service' },
  { name: 'Governance', note: 'Approval, intervention, evidence' },
  { name: 'Measurement', note: 'Whether any of it worked' },
]

export type TrackerEntry = {
  date: string
  org: string
  development: string
  /** Shift id this evidence bears on. */
  affects: string
  /** Primary source, company claim, independent research, reporting. */
  evidenceType: string
  changed: string
  /** Optional TRH article covering this development. Lets the tracker link
   *  forward as new research is published during 2027. */
  href?: string
}

/**
 * Seeded with the strongest verified 2026 evidence. Add entries during 2027 by
 * appending to this array. Newest first.
 */
export const EVIDENCE_TRACKER: TrackerEntry[] = [
  {
    date: '2026-09-18',
    org: 'Ant International',
    development: 'Account for Agent, a business account for agent use built on know your agent enabled smart contracts',
    affects: 'Trust infrastructure',
    evidenceType: 'Company announcement',
    changed: 'Agent identity machinery pointed at merchant operations rather than only at buyers',
    href: '/blog/ant-international-account-for-agent-merchant-operations',
  },
  {
    date: '2026-09-16',
    org: 'Tapestry and Google',
    development: 'Coach and Kate Spade purchasable in Gemini and AI Mode through UCP, checkout via Google Pay with no redirect',
    affects: 'Website handoff',
    evidenceType: 'Company release, primary',
    changed: 'A named brand shipped agentic checkout in production, with explicit consumer approval per transaction',
  },
  {
    date: '2026-09-16',
    org: 'OpenAI',
    development: 'Sponsored Agents test, plus ChatGPT Ads for Shopify merchants',
    affects: 'Advertising',
    evidenceType: 'Company announcement',
    changed: 'A labeled commercial conversation appeared after the ad click, separate from the assistant',
    href: '/blog/openai-sponsored-agents-chatgpt-ads-shopify',
  },
  {
    date: '2026-09-15',
    org: 'Cloudflare',
    development: 'Separate search, training and agent crawler controls, with Disallow AI Training',
    affects: 'Trust infrastructure',
    evidenceType: 'Vendor product change',
    changed: 'Access to content became four decisions instead of one',
    href: '/blog/ai-visibility-permission-stack-cloudflare',
  },
  {
    date: '2026-09-09',
    org: 'Ant International, Mastercard, Visa',
    development: 'Know Your Agent interoperability collaboration',
    affects: 'Trust infrastructure',
    evidenceType: 'Joint announcement',
    changed: 'The industry aligned on the questions about an agent, while each network kept its own decision',
    href: '/blog/visa-mastercard-know-your-agent-interoperability',
  },
  {
    date: '2026-08-31',
    org: 'Alibaba Qwen team',
    development: 'E-Commerce Bench, a 365 day simulated store operation across 18 models',
    affects: 'Workflow reliability',
    evidenceType: 'Independent research, simulation',
    changed: 'Showed the top earning model was also among the worst at avoiding fraudulent suppliers',
  },
  {
    date: '2026-08-31',
    org: 'Google',
    development: 'Generative AI performance report in Search Console expanded worldwide',
    affects: 'GEO discipline',
    evidenceType: 'Platform documentation',
    changed: 'Site owners got a first party view of appearances in AI surfaces',
    href: '/blog/google-search-console-generative-ai-visibility',
  },
  {
    date: '2026-05-20',
    org: 'Google',
    development: 'Universal Cart, UCP in ad formats, AI performance insights in Merchant Center',
    affects: 'Website handoff',
    evidenceType: 'Company announcement',
    changed: 'Cross retailer carts and share of voice measurement entered the same stack',
  },
  {
    date: '2026-02-10',
    org: 'W3C, Google, Microsoft',
    development: 'WebMCP draft published, early Chrome implementation behind a flag',
    affects: 'Second interface',
    evidenceType: 'Standards draft',
    changed: 'A page level way for sites to declare tools to agents entered standardization',
  },
  {
    date: '2026-01',
    org: 'Google and partners',
    development: 'Universal Commerce Protocol released as an open standard',
    affects: 'Recommendation to execution',
    evidenceType: 'Company announcement',
    changed: 'A shared structure for agent to merchant transactions became available',
    href: '/blog/amazon-joins-universal-commerce-protocol',
  },
]

export const DISCONFIRMING: { claim: string; detail: string }[] = [
  {
    claim: 'Consumers decline to delegate purchases',
    detail:
      'Every production implementation so far keeps a human approving the transaction. If shoppers never move past approval, agentic commerce stays an interface change rather than an operating model change.',
  },
  {
    claim: 'Agent originated volume stays negligible',
    detail:
      'No platform publishes agent initiated transaction volume today. If 2027 ends and still nobody does, the most likely explanation is that the number is not worth publishing.',
  },
  {
    claim: 'Merchants withdraw from offsite checkout',
    detail:
      'Losing the session costs merchandising context and behavioral data. If comparative data shows lower basket size or higher returns, retailers can simply turn the capability off.',
  },
  {
    claim: 'Protocols fragment instead of converging',
    detail:
      'UCP and ACP already coexist, with MCP and WebMCP addressing different layers. Sustained fragmentation raises integration cost enough that most merchants rationally wait.',
  },
  {
    claim: 'Fraud and disputes outrun the controls',
    detail:
      'Liability for an agent acting inside its authority is unsettled. A visible wave of disputes with no clear recourse path would slow adoption faster than any technical limit.',
  },
  {
    claim: 'AI discovery produces no measurable commercial value',
    detail:
      'Published conversion claims for AI referred traffic currently disagree by an order of magnitude. If better measurement resolves that downward, the investment case weakens considerably.',
  },
  {
    claim: 'Access narrows for legal or contractual reasons',
    detail:
      'Permission controls cut both ways. Publishers and retailers restricting agent access, or platforms restricting each other, would constrain the surface before it matures.',
  },
]

export const WATCHLIST: { signal: string; why: string }[] = [
  { signal: 'Agent initiated orders as a share of total orders', why: 'The single number that would convert this from architecture to market' },
  { signal: 'Merchant adoption of agentic checkout, and any withdrawals', why: 'Withdrawal after testing is stronger evidence than another launch' },
  { signal: 'Published performance for sponsored conversations', why: 'Tests whether the post click surface earns its complexity' },
  { signal: 'A shared definition of an AI impression', why: 'Measurement cannot mature while each platform counts differently' },
  { signal: 'Cross network acceptance of agent verification', why: 'The moment agent trust becomes portable rather than coordinated' },
  { signal: 'A published dispute and liability framework for agent transactions', why: 'Determines who absorbs the cost of an authorized mistake' },
  { signal: 'Agent error, reversal and intervention rates from production merchants', why: 'Moves reliability evidence out of simulation' },
  { signal: 'Servicing capability, not just purchasing', why: 'Returns, amendments and refunds decide whether agents are operationally useful' },
  { signal: 'Comparative basket and return data for agent completed orders', why: 'Tells operators what the lost session actually costs' },
]

export type EvidenceNumber = {
  value: string
  label: string
  source: string
}

/**
 * Verified figures used as an early visual anchor. Every one is drawn from a
 * primary source or a published paper. The first entry is deliberately zero:
 * it is the spine of the report.
 */
export const EVIDENCE_NUMBERS: EvidenceNumber[] = [
  { value: '0', label: 'Platforms publishing agent initiated transaction volume', source: 'My search, September 2026' },
  { value: 'Under 1%', label: 'Of Cloudflare sites that block search crawlers', source: 'Cloudflare' },
  { value: '17%', label: 'Use some mechanism to block AI training', source: 'Cloudflare' },
  { value: '~80', label: 'Travel customers piloting or running Sabre agent infrastructure', source: 'Sabre' },
  { value: '18.48%', label: 'Of spend sent to fraudulent suppliers by the top earning model', source: 'E-Commerce Bench, simulation' },
  { value: '27%', label: 'Of human performance reached by the best model over a simulated year', source: 'MerchantBench, simulation' },
]

export type InterfacePane = {
  title: string
  audience: string
  reads: string[]
}

/** "One storefront, two front doors" diagram. */
export const INTERFACES: InterfacePane[] = [
  {
    title: 'Human interface',
    audience: 'Built for people',
    reads: ['Rendered pages and images', 'Navigation and search', 'Merchandising and layout', 'Session behavior'],
  },
  {
    title: 'Agent interface',
    audience: 'Built for software',
    reads: ['Declared tools and capabilities', 'Structured catalog and inventory', 'Transaction and checkout calls', 'Permissions and identity'],
  },
]
