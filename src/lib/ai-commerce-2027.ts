/**
 * Content model for the /ai-commerce-2027 living research page.
 *
 * This file holds the page's editorial content so the route stays a thin
 * renderer. The copy is the Board-approved October 2026 refresh
 * (Content/pages/ai-commerce-2027-refresh.md). To update the page during 2027:
 * edit LAST_UPDATED (and STATIC_LAST_MODIFIED.aiCommerce2027 in sitemap.ts),
 * add rows to EVIDENCE_TRACKER, and revise the relevant SHIFT fields. No layout
 * changes should be needed for a routine update.
 */

export const PUBLISHED = '2026-09-21'
export const LAST_UPDATED = '2026-10-12'
export const READING_MINUTES = 25

export const HEADLINE = 'AI Commerce 2027'
export const DEK = "How the commerce operating model changes when software can act."
/** JSON-LD headline: H1 plus dek, so the structured headline is descriptive. */
export const SCHEMA_HEADLINE = 'AI Commerce 2027: How the Commerce Operating Model Changes When Software Can Act'

/** Protected sentence (docs/00_WEBSITE_OPERATING_SYSTEM.md). Stays in the opening until adoption data makes it false. */
export const PROTECTED_LINE = 'Infrastructure exists. Adoption evidence does not.'

/** Inline link used in evidence notes and source lines. Internal hrefs start with "/". */
export type Ref = { label: string; href: string }

/** "The short version": five one-sentence findings. */
export const SHORT_VERSION: string[] = [
  "AI commerce begins where software receives authority to act inside a commercial system, not where AI starts helping a person decide.",
  "The capability to act now exists at every layer of the stack, but no platform publishes agent-initiated transaction volume, and the one disclosed comparison of an AI-surface checkout against a merchant's own checkout favored the merchant.",
  "Software is gaining authority inside the merchant's business faster than it is gaining unrestricted authority over the shopper's wallet: pricing, restocking, budget allocation and campaign sends can now be executed by software, while every agent purchase I can verify either asks a person to approve it or runs a rule the person set in advance.",
  "Interface ownership and transaction ownership have separated, and every architecture shipped so far gives away the interface while leaving the merchant as merchant of record.",
  "The constraint for 2027 is not model capability but authority design: who is acting, for whom, under what permission, with what evidence retained, and measured how."
]

/** "What AI commerce means". Entries 1 and 2 are the two definitions. */
export const DEFINITION_INTRO: string = "Most of what gets called AI commerce is AI-assisted ecommerce. The difference is not how advanced the AI is. It is who holds the authority to act."
export const DEFINITIONS: { term: string; text: string }[] = [
  { term: 'AI-assisted ecommerce', text: "AI-assisted ecommerce is commerce where AI helps a person decide or perform a task, and the person still takes the action. Recommendations, search summaries, generated product copy, analytics, merchandising suggestions and customer service drafts all sit here. The work gets faster. Accountability does not move." },
  { term: 'AI commerce', text: "AI commerce is commerce where software receives enough authority to act inside the commercial system. Assembling a cart, initiating checkout, completing a purchase after approval, changing a price, reallocating an ad budget, sending a campaign or processing a return all sit here. The software is a participant, not an interface a person operates." },
]
export const DEFINITION_AFTER: string[] = [
  "The boundary is authority. A feature that writes a better product description is not AI commerce, however capable the model behind it. A feature that changes the live price is, however simple the rule behind it.",
  "Authority arrives in steps. Software that answers tells a person something. Software that recommends proposes a choice. Software that acts prepares something a person could execute, such as a cart. Software that transacts creates an obligation, an order with money attached. Software that operates changes the business itself: prices, inventory, budgets, listings, customer communications. Each step moves a decision from a person to a system, and each one needs a different kind of control.",
  "The two models coexist. Most commerce in 2027 will still be a person on a website or in an app, and nothing in the 2026 record suggests AI-assisted ecommerce is going away. The practical question for an operator is not which model wins. It is which workflows belong to which model, and on what evidence."
]

/** "What changed in this update". */
export const UPDATE_NOTES: string[] = [
  "This edition rebuilds the report around authority rather than around new products. Four things changed in the evidence.",
  "The consumer transaction thesis needed qualifying. The original edition described 2026 architecture as giving the purchase interface to AI platforms, and did not account for the most visible test of that idea. WIRED reported that Walmart's test of native checkout inside ChatGPT converted at roughly a third of the rate of shoppers who clicked through to Walmart's own site, and Walmart shifted to bringing its own assistant into AI surfaces instead. OpenAI moved its emphasis toward product discovery and now recommends external merchant checkout for most integrations, while keeping native checkout for select partners. Native AI checkout is one of several architectures competing for the transaction, not the default winner. The website is no longer a mandatory handoff. It is also not the inevitable loser.",
  "The merchant operator thesis strengthened sharply. In late September, Amazon gave Seller Assistant workflows that execute restocking and pricing changes under seller guardrails, and put the same assistant inside Claude. Amazon's Full-Funnel Campaigns now allocate one daily budget across four ad formats in real time. Software got write access to the merchant's business faster than to the shopper's wallet, and this edition treats that as the leading edge rather than a side effect.",
  "Trust moved from design to enforcement. Amazon blocked Meta's Muse agent in September, saying the agent did not identify itself. Meta and Sierra announced Personal Agent Protocol, which separates what a customer lets an agent do from what a business allows. Mastercard began testing a score for whether a transaction was initiated by an agent. The questions this report asked in September are now being answered in production, by refusal as often as by acceptance.",
  "Measurement split in two. Google shipped transaction reporting for UCP checkout that starts at the Buy click, alongside Search Console reporting that shows impressions in AI surfaces with no queries or clicks. The transaction half of AI shopping is getting instrumented. The consideration half, what the AI looked at and rejected, is not.",
  "One correction: the original edition described WebMCP as a draft standard behind a browser flag. Shopify had already shipped WebMCP tools across every Liquid storefront six weeks earlier.",
  "The protected sentence still holds, and the evidence since September has made it more precise rather than less true. Infrastructure exists. Adoption evidence does not. Usage of AI shopping assistants is large and published. Agent-initiated transaction volume is still not."
]

export type StackLayer = { layer: string; decides: string; authority: string }

export const STACK_INTRO: string = "AI commerce is not one technology. It is a sequence of steps, each owned by different systems and often different companies, and authority increases as software moves down it."
export const STACK: StackLayer[] = [
  {
    "layer": "Discovery",
    "decides": "What enters consideration",
    "authority": "Access to product data"
  },
  {
    "layer": "Recommendation",
    "decides": "What gets named, and in what order",
    "authority": "Judgment about fit"
  },
  {
    "layer": "Agent action",
    "decides": "What gets prepared: a cart, a booking, a draft change",
    "authority": "Permission to act in a session"
  },
  {
    "layer": "Transaction",
    "decides": "Whether an order is created",
    "authority": "Customer approval or a standing rule"
  },
  {
    "layer": "Payment",
    "decides": "Which credential is used, and whether money moves",
    "authority": "Delegated, scoped payment authority"
  },
  {
    "layer": "Fulfillment",
    "decides": "Whether the promise is kept, amended or reversed",
    "authority": "Access to merchant systems"
  },
  {
    "layer": "Measurement",
    "decides": "What counts as the result",
    "authority": "A definition someone else will accept"
  }
]
export const STACK_AFTER: string[] = [
  "At the top of the stack, an error is a bad suggestion a person can ignore. At the bottom, an error is an executed action someone has to reverse. That is why the same AI capability can be harmless in discovery and dangerous in payment, and why most failures in this stack are not model failures. They happen at the handoffs between layers.",
  "Underneath the flow sit the foundations every layer reads: product data, identity, permissions, protocols, merchant systems, governance and measurement. Most of them are not new responsibilities. What is new is how many other systems now read them, and how many of those systems can act on what they read."
]

export type FlowStage = { name: string; note: string }

export const FOUNDATIONS: FlowStage[] = [
  { name: 'Product data', note: 'The record every layer above reads' },
  { name: 'Identity', note: 'Which agent, operated by whom, acting for whom' },
  { name: 'Permissions', note: 'What it is allowed to do here' },
  { name: 'Protocols', note: 'How systems exchange the transaction' },
  { name: 'Merchant systems', note: 'Orders, inventory, pricing, service' },
  { name: 'Governance', note: 'Approval, intervention, evidence' },
  { name: 'Measurement', note: 'Whether any of it worked' },
]

export type InterfacePane = { title: string; audience: string; reads: string[] }

/** "One storefront, two front doors" diagram (Shift 03). */
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

export const SHIFTS_INTRO: string = "Each shift separates what changed, the evidence for it, why it matters, what an operator should do about it, and what is still unproven. Where the evidence materially changed a view this report previously held, the revision is stated."

export type Shift = {
  id: string
  number: string
  title: string
  changed: string
  evidence: string
  /** One or more paragraphs. */
  why: string[]
  consequence: string
  unproven: string
  /** Present only where the evidence materially changed a view the report previously held. */
  updatedView?: string
  /** TRH articles that deepen the shift. */
  notes: Ref[]
  /** Direct primary sources, so a claim can be checked without routing through TRH. */
  sources: Ref[]
}

export const SHIFTS: Shift[] = [
  {
    "id": "discovery-machine-mediated",
    "number": "01",
    "title": "Discovery becomes machine-mediated",
    "changed": "The work of exploring options moved from the shopper into software. Shoppers increasingly state an intent at one end and approve a result at the other, while retrieval, comparison and narrowing happen where they cannot see it.",
    "evidence": "DoorDash reported that nearly half of orders placed through its Ask DoorDash assistant between June and August went to local restaurants the customer had never tried before, which the company attributes to finding places that \"might not have caught their eye in their usual scroll.\" A study by Vaer AI for Lightspeed Commerce, covering roughly 460,000 AI responses, found large and small retailers about even among the sources AI systems cited, at roughly 38% each, while large retailers won the lead recommendation about two and a half times as often. Ahrefs found AI Overviews on 5 of 98 bare brand-name searches for major brands on July 1 and on 63 of 100 by September 30, so even navigational queries now arrive with a machine-written description. Amazon says more than 350 million customers used its shopping assistant in the twelve months to June.",
    "why": [
      "\"AI visibility\" is at least five different outcomes. Retrieval asks whether a product enters the evidence set. Recommendation asks whether it gets named. Product selection asks which item wins. Merchant selection asks who sells it. Transaction asks where it gets bought. Different systems decide each one, and the Lightspeed data shows a retailer can win the first and lose the second. Citation is evidence of retrieval. Recommendation is evidence of selection."
    ],
    "consequence": "Product data is now the input to every layer, and the signals that decide selection go beyond content. Availability, delivery speed, return terms and assortment depth are what a recommender needs to be confident that the errand will succeed. Track where in the answer you disappear, not only whether you appear.",
    "unproven": "No one has published evidence linking a specific product data change to a measurable change in recommendation outcomes at scale, with a control. The DoorDash data is observational and first party. The Lightspeed study is sponsored, and its full report is available only on request.",
    "updatedView": "I previously treated citation and recommendation as one discipline, and described AI as compressing the shopper's exploration. Both need revising. Retrieval and selection share a foundation and then come apart, and the exploration did not shrink. It changed owner.",
    "notes": [
      {
        "label": "citation versus recommendation",
        "href": "/blog/ai-shopping-retailer-recommendation-gap-lightspeed-vaer"
      },
      {
        "label": "the messy middle moved into the machine",
        "href": "/blog/doordash-ai-shopping-messy-middle-discovery"
      },
      {
        "label": "product data as shared infrastructure",
        "href": "/blog/product-data-shared-infrastructure-google-ai-mode"
      }
    ],
    "sources": [
      {
        "label": "DoorDash, Text DoorDash",
        "href": "https://about.doordash.com/en-us/news/text-doordash"
      },
      {
        "label": "Vaer AI for Lightspeed, AI retailer study",
        "href": "https://vaer.ai/insights/ai-retailer-bias-study/"
      },
      {
        "label": "Ahrefs, AI Overviews on branded searches",
        "href": "https://ahrefs.com/blog/ai-overviews-on-branded-searches/"
      },
      {
        "label": "Amazon second quarter 2026 results",
        "href": "https://ir.aboutamazon.com/news-release/news-release-details/2026/Amazon-com-Announces-Second-Quarter-Results/"
      }
    ]
  },
  {
    "id": "website-handoff",
    "number": "02",
    "title": "The merchant website stops being the mandatory handoff, not the inevitable loser",
    "changed": "External AI surfaces became legitimate places to shop, but native AI checkout is not automatically winning the transaction. Platforms and retailers are now running several checkout architectures side by side: checkout native to the AI surface, merchant-controlled checkout reached from it, and cart handoff to the merchant's own site.",
    "evidence": "WIRED reported that Walmart's test of OpenAI's Instant Checkout, covering around 200,000 products, converted at roughly a third of the rate of shoppers who clicked through to Walmart.com. Walmart then moved to putting its own Sparky assistant inside ChatGPT and Gemini, with account linking, loyalty and Walmart's own payment. OpenAI did not withdraw native checkout. Its March 24 announcement shifted emphasis toward product discovery and let merchants use their own checkout experiences, and its developer documentation now calls external checkout \"the recommended and generally available approach\" for developers building on ChatGPT, while checkout with the ChatGPT payment sheet continues as a private beta for select marketplace partners. Google's UCP integration in Merchant Center lets a merchant choose native checkout on Google, cart transfer to its own site, or identity linking, and is rolling out gradually in the United States through an interest form and selection. Shopify made direct checkout in AI Mode and Gemini active by default for eligible stores. TikTok announced Buy Direct on October 5, a native checkout that requires a UCP integration and keeps the brand as merchant of record, available through eligibility-based testing.",
    "why": [
      "Interface ownership is not transaction ownership. Interface ownership is who renders the moment of purchase. Transaction ownership is who holds the order, the money, the customer record and the obligation. Every architecture I have reviewed from 2026, from Google to Microsoft to TikTok, keeps the merchant as merchant of record. What varies is how much of the interface the merchant keeps: its own checkout, its own agent, or neither. What moves with the interface is presentation, cross-sell, behavioral data and, most importantly, the conversation that produced the decision."
    ],
    "consequence": "There are now at least four postures per surface: native checkout on the platform, cart transfer to your own checkout, your own agent operating inside the platform, or a plain referral. Each trades conversion, data and control differently. Choose per surface and measure, rather than accepting whichever default your commerce platform ships.",
    "unproven": "The Walmart figure is one retailer, one early implementation, and a reported ratio rather than published data. It may say more about that implementation than about native checkout as a model. No platform has published how many merchants use native AI checkout or how it performs, and no merchant has published basket size, return rate or repeat purchase for AI-surface orders against site orders.",
    "updatedView": "Revised. The original edition said 2026 architecture \"consistently gives the interface away and keeps the transaction.\" The second half held. The first half was too simple. Native AI checkout neither won nor lost in 2026. It became one of several competing architectures, and the one disclosed comparison shows it is not automatically superior. The pattern among large retailers is to bring their own agent into the AI surface rather than let the surface absorb them. Smaller merchants, enrolled by platform defaults, may experience the opposite.",
    "notes": [
      {
        "label": "what the retailer still owns when checkout moves",
        "href": "/blog/ai-checkout-interface-commerce-infrastructure"
      },
      {
        "label": "agentic checkout as a platform default",
        "href": "/blog/agentic-commerce-platform-default-shopify-google"
      },
      {
        "label": "retailers want the traffic, not the loss of the customer",
        "href": "/blog/retailers-ai-traffic-customer-ownership"
      }
    ],
    "sources": [
      {
        "label": "WIRED on Walmart's ChatGPT checkout test",
        "href": "https://www.wired.com/story/ai-lab-walmart-openai-shaking-up-agentic-shopping-deal/"
      },
      {
        "label": "OpenAI, Powering product discovery in ChatGPT",
        "href": "https://openai.com/index/powering-product-discovery-in-chatgpt/"
      },
      {
        "label": "OpenAI, monetization for apps in ChatGPT",
        "href": "https://developers.openai.com/plugins/build/monetization"
      },
      {
        "label": "Google Merchant Center, UCP integration hub",
        "href": "https://support.google.com/merchants/answer/16992327"
      },
      {
        "label": "Shopify Help, Google AI Mode and Gemini",
        "href": "https://help.shopify.com/en/manual/online-sales-channels/agentic-storefronts/google"
      },
      {
        "label": "TikTok, agentic solutions",
        "href": "https://ads.tiktok.com/business/en-US/blog/tiktok-agentic-solutions"
      }
    ]
  },
  {
    "id": "software-interface",
    "number": "03",
    "title": "Commerce gets a software interface",
    "changed": "Storefronts, checkouts and back offices acquired interfaces built for software to operate, and most merchants got them through their platforms rather than through projects of their own.",
    "evidence": "Shopify made WebMCP tools live on August 5 across every Liquid storefront, with nothing to install, covering catalog search, product display, cart updates and the handoff to checkout. On September 28 it extended them into checkout, where an agent can read and update the buyer's active checkout and submit the order after buyer confirmation. Klaviyo exposed more than 260 MCP tools, including one that sends a campaign. Amazon's Seller Assistant plugin brings seller data and actions into Claude, in beta, and Amazon Quick. UCP and OpenAI's Agentic Commerce Protocol define the transaction layer between agent platforms and merchants.",
    "why": [
      "A storefront now has two interfaces: a human interface of rendered pages, and a software interface of declared tools, structured catalog and transaction calls. The visual website does not disappear. It gains a machine-operable counterpart. Shopify's design makes the important choice explicit: the agent's tools \"use the same state as the checkout UI,\" so the person and the software see the same cart, the same totals and the same validation. These interfaces work at different layers. WebMCP operates a page. MCP exposes a vendor's tools. UCP and ACP structure a transaction. Personal Agent Protocol, if it ships, would structure the session around all of them."
    ],
    "consequence": "Agent readiness may already exist in your stack without anyone having decided it should. Audit what your platform exposes to software today, and name an owner for what that interface says. A price, a shipping rule or an availability answer now has two readers.",
    "unproven": "No WebMCP order volume, conversion rate or error rate has been published. Agent support is limited to Chromium-based browsers, and Shopify's checkout tools exclude several common checkout types. Nobody has published what it costs to keep two interfaces accurate.",
    "updatedView": "Corrected. The original edition called WebMCP a draft standard behind a browser flag. It had already shipped at platform scale.",
    "notes": [
      {
        "label": "the storefront's second front door",
        "href": "/blog/shopify-webmcp-checkout-ai-agent-storefront"
      },
      {
        "label": "ecommerce software becoming infrastructure agents query",
        "href": "/blog/helium-10-mcp-ecommerce-software-infrastructure"
      }
    ],
    "sources": [
      {
        "label": "Shopify, WebMCP on Liquid and Hydrogen",
        "href": "https://shopify.dev/changelog/posts/webmcp-liquid-hydrogen"
      },
      {
        "label": "Shopify, WebMCP support for checkout",
        "href": "https://shopify.dev/changelog/posts/webmcp-support-for-checkout"
      },
      {
        "label": "Klaviyo MCP server documentation",
        "href": "https://developers.klaviyo.com/en/docs/klaviyo_mcp_server"
      },
      {
        "label": "OpenAI, Agentic Checkout Spec",
        "href": "https://developers.openai.com/commerce/specs/checkout"
      }
    ]
  },
  {
    "id": "measurement-split",
    "number": "04",
    "title": "Measurement splits into consideration and transaction",
    "changed": "First-party measurement for AI shopping arrived in 2026, and each instrument covers one half of the journey.",
    "evidence": "Google's Search Console generative AI report shows impressions of a site's pages inside AI Overviews and AI Mode, with no queries and no clicks. Google's UCP Analytics in Merchant Center starts at the Buy click and reports purchases, purchase rate, average order value and cancellations, with no impressions. Merchant Center's AI performance insights compare share of voice on AI surfaces in five markets. Shopify reported that AI-driven traffic and orders to its merchants tripled year over year in the second quarter, while saying \"the volume from agentic commerce is still small relative to our massive GMV.\" Surveys from Global Payments and ACI Worldwide, a week apart, put comfort with AI purchasing at 69% and 7% respectively, because they asked different questions.",
    "why": [
      "There are two measurement problems. Consideration measurement asks what the AI retrieved, compared, rejected and recommended. Transaction measurement asks what happened after the shopper entered the commerce flow. The transaction half now has a real denominator: UCP Analytics divides purchases by Buy clicks. The consideration half still has none. No product reports how often a merchant was eligible for an answer and lost it."
    ],
    "consequence": "Reconcile AI-surface purchases against your order system, and cart transfers against completed orders on your own site. Report delegation separately: research, recommendation, cart building, approved purchase, standing authority and unattended orders are six different behaviors, and a single adoption percentage hides which one your business is seeing. Treat \"AI-attributed orders\" as a description of where a sale completed, not proof the AI created the demand.",
    "unproven": "There is no cross-platform definition of an AI impression, no consideration denominator, and no published agent-initiated transaction volume from any platform, network or retailer. Shopify's tripling is a growth rate on an undisclosed base.",
    "updatedView": "Revised. The original edition framed this as GEO becoming an operating discipline. The more useful line is between consideration and transaction, because only one side of it is being instrumented, and the side that is not is the one marketers most need.",
    "notes": [
      {
        "label": "UCP Analytics and what it cannot see",
        "href": "/blog/google-ucp-analytics-merchant-center-ai-checkout"
      },
      {
        "label": "the adoption definition problem",
        "href": "/blog/agentic-commerce-adoption-definition-problem"
      },
      {
        "label": "the measurement problem",
        "href": "/blog/niq-similarweb-agentic-commerce-measurement"
      }
    ],
    "sources": [
      {
        "label": "Google, UCP Analytics in Merchant Center",
        "href": "https://developers.google.com/merchant/ucp/guides/tools/merchant-center/analytics"
      },
      {
        "label": "Google, Merchant API UCP performance reports",
        "href": "https://developers.google.com/merchant/api/guides/reports/ucp-performance-reports"
      },
      {
        "label": "Google Search Central, generative AI performance reports",
        "href": "https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports"
      },
      {
        "label": "Shopify second quarter 2026 earnings call transcript",
        "href": "https://www.fool.com/earnings/call-transcripts/2026/08/12/shopify-shop-q2-2026-earnings-call-transcript/"
      }
    ]
  },
  {
    "id": "trust-operating-layer",
    "number": "05",
    "title": "Trust becomes an operating layer",
    "changed": "The industry stopped treating agent trust as one question. Identity, delegation, merchant permission and evidence are being built as separate layers, by separate parties, and the absence of permission is now being enforced.",
    "evidence": "On September 20, Amazon blocked Meta's Muse agent from its store, saying the agent \"does not identify itself.\" On October 6, Meta and Sierra announced Personal Agent Protocol, in which \"consumers decide what access to give their personal agents, and companies set parameters for what those agents can do\"; its specification had not been published as of this update. Ant International, Mastercard and Visa began Know Your Agent interoperability work in September while keeping each network's own decisioning. Mastercard began United States testing of a score estimating how likely a transaction was initiated by an AI agent. Shopify's checkout documentation states that its agent signature, Web Bot Auth, does not grant permission to place an order. IDEMIA announced payment tokens restricted by merchant, amount, category and time, with proof of consent designed to survive a later dispute.",
    "why": [
      "A transaction initiated by software has to answer six questions. Who is acting: the agent's identity. Who it is acting for: the customer's identity and account. What the customer authorized: the scope of delegation. What the business will allow: merchant permission. What evidence proves it: consent records and logs. What still requires risk judgment: the issuer's or merchant's decision. Identity is not authorization. Authorization is not merchant permission. Merchant permission is not transaction legitimacy. Each layer can pass while the next one fails.",
      "There is a seventh question upstream of all six. Anthropic's Project Swap, a controlled 201-person agent market, found its agents' rankings agreed with participants' own pairwise preferences 61% of the time, and attributed 85% of the market's shortfall to imperfect models of what people wanted rather than to negotiation. An agent can be fully authorized and still buy the wrong thing."
    ],
    "consequence": "Decide now what your business will allow an identified agent to do, by action: read a policy, check stock, build a cart, place an order, change an address. Retain evidence of what was authorized and what was executed, because disputes will turn on it.",
    "unproven": "Nothing published shows one network accepting another's agent verification without its own check. There is no published dispute or liability framework for an authorized agent's mistake, and no data on false declines of legitimate agent transactions. Personal Agent Protocol is a design, not a deployed standard.",
    "updatedView": "Strengthened and sharpened. In September, consumer and merchant authorization were \"being built by different parties on different timelines.\" Personal Agent Protocol proposes putting both grants in one session, and the Muse dispute showed what happens without either.",
    "notes": [
      {
        "label": "Personal Agent Protocol",
        "href": "/blog/personal-agent-protocol-ai-commerce"
      },
      {
        "label": "Know Your Agent",
        "href": "/blog/visa-mastercard-know-your-agent-interoperability"
      },
      {
        "label": "knowing what the shopper wants",
        "href": "/blog/anthropic-project-swap-agentic-commerce-shopper-preferences"
      }
    ],
    "sources": [
      {
        "label": "Sierra, Introducing Personal Agent Protocol",
        "href": "https://sierra.ai/blog/introducing-personal-agent-protocol"
      },
      {
        "label": "Mastercard, new trust and intelligence services",
        "href": "https://www.mastercard.com/us/en/news-and-trends/press/2026/september/new-trust-and-intelligence-services.html"
      },
      {
        "label": "Shopify, Checkout WebMCP documentation",
        "href": "https://shopify.dev/docs/agents/carts-and-checkout/checkout-webmcp"
      },
      {
        "label": "Ant International, Know Your Agent interoperability",
        "href": "https://www.ant-intl.com/en/news/detail/?id=ant-international-mastercard-and-visa-initiate-collaboration-on-know-your-agent-interoperability-to-scale-agentic-commerce"
      },
      {
        "label": "Anthropic, Project Swap",
        "href": "https://www.anthropic.com/research/project-swap"
      },
      {
        "label": "GeekWire on Amazon blocking Muse",
        "href": "https://www.geekwire.com/2026/amazon-blocks-metas-muse-ai-assistant-in-new-standoff-over-agentic-shopping/"
      }
    ]
  },
  {
    "id": "advertising-shopping-interface",
    "number": "06",
    "title": "Advertising moves inside the shopping interface",
    "changed": "Paid placement entered conversational shopping, mostly by extending existing retail media systems to a new surface rather than by building new ones.",
    "evidence": "Criteo's documentation defines a retailer's AI shopping assistant as a Sponsored Products page type. Where a retailer enables it, existing campaigns become eligible by default, at standard cost per click, and the retailer's system or its LLM partner extracts keywords from the conversation and passes them as a standard ad request. Albertsons has run it since June. Walmart sells Sponsored Prompts inside Sparky. Amazon reports that shoppers who click its Sponsored Prompts convert 48% more often than those who do not. OpenAI began testing Sponsored Agents on September 16, a labeled conversation with a business's agent after an ad, and reported a $1 billion annualized run rate for ChatGPT Ads. Google and TikTok are both connecting ad units to checkout.",
    "why": [
      "The interface changes more than the auction does. In Criteo's design, the advertising system never reads the conversation. The assistant translates it back into a keyword, and the keyword enters the auction that already exists. The keyword did not disappear in conversational commerce. It moved behind the conversation. Two things genuinely change. Slots shrink, since an assistant typically shows three to five products rather than a page of results. And a new commercial step appears: whoever translates the conversation into a query now shapes which advertisers compete."
    ],
    "consequence": "Filter reporting to the assistant surface before bidding on it. If you run an assistant, treat keyword extraction as a commercial system and decide how sponsored results are labeled before switching the inventory on. If a brand-run agent answers questions after an ad, decide what product data grounds it and who approves its claims.",
    "unproven": "No platform has published performance data for sponsored placements inside an assistant against search. Amazon's comparison is between shoppers who clicked an ad and those who did not, which is not a measure of the ad's effect. The boundary between organic answer and paid placement is stated by platforms and has not been independently audited.",
    "updatedView": "Revised. The original edition framed this shift as advertising becoming conversational. The evidence since then says something more specific: existing retail media infrastructure is absorbing the conversation as a page type, while new conversational formats remain tests.",
    "notes": [
      {
        "label": "AI assistants as a retail media page type",
        "href": "/blog/ai-shopping-assistant-retail-media-sponsored-products"
      },
      {
        "label": "the ad click becoming a conversation",
        "href": "/blog/openai-sponsored-agents-chatgpt-ads-shopify"
      }
    ],
    "sources": [
      {
        "label": "Criteo, AI Assistant page type for retailers",
        "href": "https://developers.criteo.com/retailer-integration/docs/ai-assistant"
      },
      {
        "label": "Criteo, Sponsored Products in AI assistants for advertisers",
        "href": "https://help.retailmedia.criteo.com/kb/guide/en/reach-shoppers-in-ai-assistants-with-sponsored-products-Ed4zMZ3Bo6/Steps/5745300"
      },
      {
        "label": "Albertsons Media Collective announcement",
        "href": "https://www.albertsonscompanies.com/newsroom/press-releases/news-details/2026/Albertsons-Media-Collective-Brings-Sponsored-Product-Discovery-to-AI-Powered-Conversational-Search/default.aspx"
      },
      {
        "label": "OpenAI, Reimagining advertising with AI",
        "href": "https://openai.com/index/reimagining-advertising-with-ai/"
      },
      {
        "label": "OpenAI, ChatGPT Ads run rate",
        "href": "https://openai.com/index/expanding-access-to-ai-with-chatgpt-ads/"
      }
    ]
  },
  {
    "id": "buyer-to-operator",
    "number": "07",
    "title": "AI moves from buyer to operator",
    "changed": "Software gained the ability to write, not just read, inside merchant systems, and the broadest write access so far arrived on the merchant side rather than the shopper side.",
    "evidence": "On September 23, Amazon said Seller Assistant workflows can \"continuously monitor and execute routine tasks like restocking and pricing adjustments,\" with seller-defined guardrails and \"a complete audit trail,\" and with sellers \"reviewing and approving them before they're carried out.\" Sellers choose whether a workflow only recommends or acts. Amazon's Full-Funnel Campaigns, documented September 29, take a daily budget that Amazon's AI \"allocates across sponsored ads, display, video, and streaming TV in real time.\" Klaviyo's tools let an agent send a campaign to its audience. Anthropic's open-source merchant agent stages every write until a person approves it. Long-horizon simulations remain sobering: in E-Commerce Bench, the model that finished with the most assets sent 18.48% of its spend to fraudulent suppliers.",
    "why": [
      "Reading is usually reversible. Writing is not. A bad analysis can be caught before anyone acts on it. A price change, a reallocated budget or a sent campaign has already reached the market. The products shipping now treat delegation level as a setting: Amazon's DVA+ offers a default where AI allocates budget and an advanced mode with format-level control. Choosing the level is itself the strategic decision."
    ],
    "consequence": "Grant write authority by workflow, not by tool. Start where actions are frequent, bounded and cheap to reverse, such as restock suggestions and bid adjustments inside a ceiling. Require every executed change to be logged as an event your data can see, and measured against what it was supposed to move. Keep human the decisions that encode what the optimizer cannot see: the objective, the margin, the brand boundary and the standard of proof for scaling.",
    "unproven": "No merchant or vendor has published production error, reversal or intervention rates for agent write actions. Amazon's figure that sellers accept recommendations over 90% of the time concerns recommendations, not executed actions. Every long-horizon benchmark runs in simulation.",
    "updatedView": "Strengthened substantially. The original edition treated merchant-side agents mainly as a reliability question. They are also where authority is moving fastest. If the largest change in AI commerce happens in operations before it happens in consumer purchasing, the evidence so far points that way.",
    "notes": [
      {
        "label": "channel mix inside the algorithm",
        "href": "/blog/amazon-full-funnel-campaigns-ai-channel-mix"
      },
      {
        "label": "when an agent can hit send",
        "href": "/blog/klaviyo-headless-agent-controls"
      },
      {
        "label": "proving the change worked",
        "href": "/blog/noibu-ai-agents-closed-loop-ecommerce"
      }
    ],
    "sources": [
      {
        "label": "Amazon, Seller Assistant plugin for Amazon Quick and Claude",
        "href": "https://www.aboutamazon.com/news/innovation-at-amazon/seller-assistant-plugin-amazon-quick-claude"
      },
      {
        "label": "Amazon Ads, Full-Funnel Campaigns",
        "href": "https://advertising.amazon.com/products/full-funnel-campaigns"
      },
      {
        "label": "Amazon Ads, DVA+",
        "href": "https://advertising.amazon.com/resources/whats-new/dva-plus-display-video-audio-campaigns"
      },
      {
        "label": "Anthropic, commerce agents repository",
        "href": "https://github.com/anthropics/commerce-agents"
      }
    ]
  },
  {
    "id": "operating-layer",
    "number": "08",
    "title": "Platform power shifts to the operating layer",
    "changed": "Commerce platforms began competing to be the system a merchant operates from, across channels they do not own.",
    "evidence": "Amazon now lets sellers connect eBay, Shopify, TikTok and Walmart accounts to Seller Central, import and link those listings, view orders and fulfill across channels, rolling out to United States sellers at no added cost. Editing a listing once for every channel and a cross-channel profitability view are announced as coming. The same Seller Assistant carries persistent memory of each seller's pricing patterns and inventory cycles, and travels into Claude and Amazon Quick. Instacart's Carrot Ads runs advertising for more than 310 retail partners, and in September Gopuff, which owns its own storefront, fulfillment and ad sales, chose to run its storefront advertising on it. Shopify's managed setting enrolls eligible stores in new AI channels as they appear. Anthropic describes Claude as \"your intelligence layer, not a storefront or checkout.\"",
    "why": [
      "Channel ownership is not operating-layer ownership. A merchant can diversify where revenue comes from while consolidating how the business is run. Whoever holds the operating layer holds the memory, the workflows, the cross-channel data and, increasingly, the agent that acts on all three. That position compounds in a way a single sales channel does not."
    ],
    "consequence": "Before consolidating operations into any one platform's tools, establish three things: where the memory of your business lives and whether you can export it, which actions that platform's agent can take on channels it does not own, and what it would cost to leave.",
    "unproven": "This is the newest shift in the report and the least proven. Amazon's multichannel tools are rolling out, its editing and profitability features are announced rather than live, and no uptake has been published. Amazon says off-Amazon data will not inform its retail decisions. That is a policy commitment, not an audited one.",
    "notes": [
      {
        "label": "retail media becoming infrastructure",
        "href": "/blog/instacart-gopuff-carrot-ads-retail-media-infrastructure"
      },
      {
        "label": "Anthropic's intelligence layer",
        "href": "/blog/anthropic-claude-commerce-intelligence-layer"
      }
    ],
    "sources": [
      {
        "label": "Amazon, multichannel selling in Seller Central",
        "href": "https://www.aboutamazon.com/news/small-business/amazon-seller-central-multichannel-selling-tools"
      },
      {
        "label": "Instacart and Gopuff announcement",
        "href": "https://www.prnewswire.com/news-releases/instacart-and-gopuff-announce-new-first-of-its-kind-partnership-in-the-us-302885692.html"
      },
      {
        "label": "Shopify Help, agentic storefronts",
        "href": "https://help.shopify.com/en/manual/online-sales-channels/agentic-storefronts/agentic-home"
      },
      {
        "label": "Anthropic, Claude for commerce",
        "href": "https://claude.com/solutions/commerce"
      }
    ]
  },
  {
    "id": "governance",
    "number": "09",
    "title": "Organizations need a governance model for software that acts",
    "changed": "Approval is moving from the transaction to the rule, and the most important permissions are starting to be written as limits on what software may not do.",
    "evidence": "Amazon lists buying items automatically at a set price, and scheduling recurring purchases, among its shopping assistant's capabilities. A person still decides, but in advance, by setting the condition. Payment design follows the same pattern: Stripe's shared payment tokens are scoped to one seller with a maximum amount and an expiry, and IDEMIA's tokens can be restricted by merchant, amount, category and time. Shopify requires an agent to ask the buyer again if a checkout total changes. On the other side, Walmart published a customer letter in September committing that information shared with Sparky will not be used to raise a price or hide lower-priced options: \"We price the product, not the person.\" That arrived as the comment period closed on a proposed Federal Trade Commission policy statement on personalized pricing.",
    "why": [
      "Once software can act, governance is no longer a review of a tool. It is a design for decisions. For each workflow, a business has to answer what software may recommend, what it may draft, what it may execute with approval, what it may execute under a pre-authorized rule, and what it must never do. Then: who owns an error, how a person overrides the system, how permissions are revoked, and how performance is judged from outside the system that produced it. Project Swap adds a useful test: participants who judged the agent's summary of them complete would delegate 34% of a budget without veto rights, against 23% for those who did not. Delegated authority should scale with demonstrated accuracy, not with capability alone."
    ],
    "consequence": "Prove the workflow first. Automate second. AI does not fix an ungoverned workflow running on untrusted data. It amplifies it. Before granting execution, the workflow should have a written owner, clean inputs, a known failure mode, a reversal path and a measurement that does not come from the vendor's own optimizer.",
    "unproven": "No production merchant has published how often its agents' actions were overridden or reversed. Walmart's commitments are voluntary and unaudited. Whether a standing rule counts as consent in a dispute has not been tested.",
    "notes": [
      {
        "label": "negative permissions and Walmart's pricing promise",
        "href": "/blog/walmart-sparky-ai-personalization-pricing-governance"
      },
      {
        "label": "payment choice becoming policy",
        "href": "/blog/agentic-commerce-payment-choice-policy-idemia"
      },
      {
        "label": "the rail-level argument",
        "href": "/blog/npci-upi-ai-agent-authorization"
      }
    ],
    "sources": [
      {
        "label": "Walmart, letter from the CEO",
        "href": "https://corporate.walmart.com/about/everyday-affordability/letter-from-our-ceo"
      },
      {
        "label": "FTC, proposed policy statement on personalized pricing",
        "href": "https://www.ftc.gov/system/files/ftc_gov/pdf/p034101-ftc-enforcement-policy-statement-re-personalized-pricing-proposed-for-public-comment.pdf"
      },
      {
        "label": "Stripe, shared payment tokens",
        "href": "https://docs.stripe.com/agentic-commerce/concepts/shared-payment-tokens"
      },
      {
        "label": "IDEMIA Secure Transactions announcement",
        "href": "https://www.prnewswire.com/news-releases/idemia-secure-transactions-opens-agentic-commerce-to-all-payment-schemes-302892772.html"
      },
      {
        "label": "Amazon, Alexa for Shopping",
        "href": "https://www.aboutamazon.com/news/retail/alexa-for-shopping-ai-assistant"
      }
    ]
  }
]

export type Counterargument = { claim: string; verdict: string; detail: string }

export const COUNTER_INTRO: string = "A report about change should try hardest to disprove itself. These are the counterarguments I take most seriously, and where I think each one stands."
export const COUNTERARGUMENTS: Counterargument[] = [
  {
    "claim": "Most AI shopping still involves a human at every decision.",
    "verdict": "Accepted",
    "detail": "Every consumer purchase I can verify involves either per-transaction approval or a rule the person set. That is why this report describes authority shifting, not humans leaving."
  },
  {
    "claim": "Agent-initiated transaction volume remains undisclosed.",
    "verdict": "Accepted",
    "detail": "Shopify reports growth on an undisclosed base and calls the volume small. If 2027 ends with no platform publishing the number, the likeliest explanation is that it is not yet worth publishing."
  },
  {
    "claim": "Native AI checkout may simply convert worse.",
    "verdict": "Partly accepted",
    "detail": "Walmart's experience is the only disclosed comparison, and it went against the AI surface. It is one implementation, not a verdict on the model, and OpenAI, Google and TikTok all still offer native checkout alongside merchant-controlled paths. What it establishes is that native checkout is not automatically superior."
  },
  {
    "claim": "Merchants may resist giving software write authority.",
    "verdict": "Not yet supported",
    "detail": "Amazon and Klaviyo shipped write actions, and Amazon reports high acceptance of its recommendations. Resistance may still appear once errors are visible, which is why reversal data is on the watchlist."
  },
  {
    "claim": "Major retailers may prefer selective integrations over open access.",
    "verdict": "Accepted, and already happening",
    "detail": "Amazon blocks outside agents while opening its seller tools to Claude. Walmart brings Sparky into other surfaces rather than letting them operate Walmart.com. Openness is being granted per relationship, not per protocol."
  },
  {
    "claim": "Consumers may not delegate high-value purchases.",
    "verdict": "Accepted for 2027",
    "detail": "The surveys show comfort falling with price, and they measure willingness, not behavior."
  },
  {
    "claim": "Commerce protocols may fragment.",
    "verdict": "Partly accepted",
    "detail": "UCP, ACP, MCP, WebMCP and Personal Agent Protocol operate at different layers, which limits direct conflict, but merchants still face several integrations, and platform defaults are currently doing the integration work for them."
  },
  {
    "claim": "Payment and fraud systems may add friction.",
    "verdict": "Open",
    "detail": "Mastercard's agent score exists because issuers cannot yet tell legitimate agent activity from suspicious activity. Whether that produces friction or approval depends on data nobody has published."
  },
  {
    "claim": "Existing search, marketplaces and retailer apps remain powerful.",
    "verdict": "Accepted",
    "detail": "The largest AI shopping deployments are inside Amazon and Walmart, not outside them."
  },
  {
    "claim": "AI may become another interface rather than a new commerce channel.",
    "verdict": "Partly accepted for consumers",
    "detail": "On the merchant side, the evidence points the other way: software that changes prices and budgets is not an interface."
  },
  {
    "claim": "The largest change may happen in operations before consumer purchasing.",
    "verdict": "Accepted",
    "detail": "This edition was restructured around it."
  }
]

export type Signal = { signal: string; why: string; changes: string }

export const SIGNALS_INTRO: string = "These are the developments that would most change my confidence. No score and no probability."
export const SIGNALS: Signal[] = [
  {
    "signal": "Any platform, network or retailer publishing agent-initiated orders as a share of total orders",
    "why": "It is the number that would turn capability into a market",
    "changes": "Would retire the protected sentence and reframe Shifts 02 and 04 around volume"
  },
  {
    "signal": "A second published comparison of AI-surface checkout against merchant checkout",
    "why": "Walmart's result is the only one",
    "changes": "Would confirm or reverse the weakening of Shift 02"
  },
  {
    "signal": "Merchants disclosing meaningful revenue from native AI checkout",
    "why": "Separates availability from use",
    "changes": "Would show native checkout winning the transaction, not just being offered"
  },
  {
    "signal": "Production error, reversal or intervention rates for merchant-side agent writes",
    "why": "Moves reliability evidence out of simulation",
    "changes": "Would test whether Shift 07 holds once errors are visible"
  },
  {
    "signal": "Personal Agent Protocol v0.1, and who implements it",
    "why": "First attempt to join customer and merchant grants in one session",
    "changes": "Would show whether Shift 05's two-grant model reaches production"
  },
  {
    "signal": "Cross-network acceptance of agent verification",
    "why": "The moment trust becomes portable rather than coordinated",
    "changes": "Would move Shift 05 from coordination to infrastructure"
  },
  {
    "signal": "Data on false declines and disputes for agent transactions",
    "why": "Shows whether payment friction is real",
    "changes": "Would decide whether payments slow the consumer side"
  },
  {
    "signal": "A published dispute and liability framework for authorized agent mistakes",
    "why": "Determines who pays when a permitted agent errs",
    "changes": "Would show whether standing rules count as consent in Shift 09"
  },
  {
    "signal": "A consideration denominator: how often a merchant was eligible for an AI answer and lost",
    "why": "The missing half of AI measurement",
    "changes": "Would close the gap at the center of Shift 04"
  },
  {
    "signal": "Published performance for sponsored placements inside assistants",
    "why": "Tests whether the new surface earns a premium",
    "changes": "Would show whether Shift 06 stays an absorbed page type or becomes a new stack"
  },
  {
    "signal": "Uptake of multichannel operating tools and cross-channel agent actions",
    "why": "Shows whether the operating layer consolidates",
    "changes": "Would confirm or remove Shift 08"
  },
  {
    "signal": "Post-purchase agents handling returns, amendments and refunds at scale",
    "why": "A purchase an agent cannot amend is an incomplete capability",
    "changes": "Would extend the stack's authority past the transaction"
  }
]

export const CONCLUSION: string[] = [
  "The version of this story told loudest is that consumers will hand their shopping to agents. The evidence does not support that for 2027. Every agent purchase I can verify still begins with a person approving it or setting the rule, and the one disclosed comparison of native AI checkout against a retailer's own checkout favored the retailer.",
  "What has changed is quieter and harder to reverse. Commerce systems are now built on the assumption that software may be a participant. Storefronts expose tools. Payment tokens carry limits. Merchants decide which agents may enter. Ad systems translate conversations into auctions. And inside the merchant's own business, software has started changing prices, moving budgets and sending campaigns under rules a person wrote.",
  "That is why the practical 2027 question for an operator is not whether to believe in agentic commerce. It is which decisions you are prepared to let software execute, under what limits, with what evidence retained, and measured by whom."
]
export const CLOSING_QUESTION: string = "If software can already act inside your business, what have you actually decided it is allowed to do?"
export const METHOD: string = "Claims are drawn from primary sources where they exist: company announcements, product documentation, developer changelogs, earnings calls and published research. Where a figure comes from a company describing its own product, it is attributed to that company. Benchmark results come from simulations and are not evidence about production performance. Survey results measure stated willingness, not behavior. Absence of evidence is reported as the limit of my own search rather than proof of absence. In particular, I found no published agent-initiated transaction volume from any platform, network or retailer as of October 12, 2026. If that number exists somewhere I have not looked, this report should change first where it says so."

export type TrackerEntry = {
  date: string
  org: string
  development: string
  /** Shift this evidence bears on. */
  affects: string
  /** Primary source, company claim, independent research, reporting. */
  evidenceType: string
  changed: string
  /** Optional TRH article covering this development. Lets the tracker link
   *  forward as new research is published during 2027. */
  href?: string
}

/**
 * Verified developments, newest first. Add entries during 2027 by inserting at
 * the top of this array.
 */
export const EVIDENCE_TRACKER: TrackerEntry[] = [
  {
    date: '2026-10-11',
    org: 'Google',
    development: 'UCP Analytics in Merchant Center, with an alpha API covering AI Mode and Gemini, reporting Buy clicks, purchases, purchase rate, AOV and cancellations',
    affects: 'Measurement',
    evidenceType: 'Platform documentation',
    changed: 'The transaction funnel for AI checkout got a denominator. Consideration, what the AI looked at before the Buy click, still has none',
    href: '/blog/google-ucp-analytics-merchant-center-ai-checkout',
  },
  {
    date: '2026-10-06',
    org: 'Sierra and Meta',
    development: 'Personal Agent Protocol announced, with Genesys, Instinct, Rocket, Shopify, Stripe and Walmart as named partners',
    affects: 'Trust',
    evidenceType: 'Company announcement',
    changed: 'Customer access and business permission proposed as two grants in one session. Specification not yet published',
    href: '/blog/personal-agent-protocol-ai-commerce',
  },
  {
    date: '2026-10-05',
    org: 'TikTok',
    development: 'Buy Direct, a native in-feed checkout that requires a UCP integration, and a Shopping Assistant, both in eligibility-based testing',
    affects: 'Website handoff',
    evidenceType: 'Company announcement',
    changed: 'Another surface offered native checkout while keeping the brand as merchant of record',
  },
  {
    date: '2026-09-30',
    org: 'Mastercard',
    development: 'A score estimating how likely a transaction was initiated by an AI agent, in United States testing',
    affects: 'Trust',
    evidenceType: 'Company announcement',
    changed: 'Networks began giving issuers a signal for agent activity rather than inferring it from behavior',
  },
  {
    date: '2026-09-29',
    org: 'Amazon Ads',
    development: 'Full-Funnel Campaigns allocate one daily budget across sponsored ads, display, video and streaming TV in real time',
    affects: 'Buyer to operator',
    evidenceType: 'Product documentation',
    changed: 'Budget allocation and channel mix moved inside the optimizer by default',
    href: '/blog/amazon-full-funnel-campaigns-ai-channel-mix',
  },
  {
    date: '2026-09-28',
    org: 'Shopify',
    development: 'WebMCP tools extended into checkout, with order placement after buyer confirmation',
    affects: 'Software interface',
    evidenceType: 'Developer changelog',
    changed: 'The software interface reached checkout, while agent identity was explicitly separated from permission to buy',
    href: '/blog/shopify-webmcp-checkout-ai-agent-storefront',
  },
  {
    date: '2026-09-25',
    org: 'Walmart',
    development: 'CEO letter: information shared with Sparky will not be used to raise a price or hide lower-priced options',
    affects: 'Governance',
    evidenceType: 'Company commitment',
    changed: 'A retailer published limits on what its assistant may do with what it knows',
    href: '/blog/walmart-sparky-ai-personalization-pricing-governance',
  },
  {
    date: '2026-09-24',
    org: 'Anthropic',
    development: 'Project Swap, a controlled 201 person agent market',
    affects: 'Trust',
    evidenceType: 'Company research, controlled experiment',
    changed: 'Imperfect models of what people wanted, not negotiation, accounted for most of the shortfall',
    href: '/blog/anthropic-project-swap-agentic-commerce-shopper-preferences',
  },
  {
    date: '2026-09-23',
    org: 'Amazon',
    development: 'Seller Assistant workflows that execute restocking and pricing under seller guardrails, a plugin for Claude and Amazon Quick, and multichannel tools in Seller Central',
    affects: 'Operating layer',
    evidenceType: 'Company announcement',
    changed: 'Merchant-side write authority and cross-channel operations arrived in the same release',
  },
  {
    date: '2026-09-22',
    org: 'Shopify and Google',
    development: 'Direct checkout in Google AI Mode and Gemini is active by default for eligible Shopify stores, while Shopify\'s managed setting automatically enrolls eligible stores in new agentic storefront channels as they become available',
    affects: 'Website handoff',
    evidenceType: 'Vendor documentation',
    changed: 'Agent checkout arrived as a platform default with an opt out, moving the evidence from named retailer implementations to platform level distribution',
    href: '/blog/agentic-commerce-platform-default-shopify-google',
  },
  {
    date: '2026-09-20',
    org: 'Amazon',
    development: 'Blocked Meta\'s Muse agent from shopping on Amazon.com, saying the agent did not identify itself',
    affects: 'Trust',
    evidenceType: 'Trade reporting with company statement',
    changed: 'Merchant permission was enforced against an agent rather than debated',
  },
  {
    date: '2026-09-18',
    org: 'Ant International',
    development: 'Account for Agent, a business account for agent use built on know your agent enabled smart contracts',
    affects: 'Trust',
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
    affects: 'Trust',
    evidenceType: 'Vendor product change',
    changed: 'Access to content became four decisions instead of one',
    href: '/blog/ai-visibility-permission-stack-cloudflare',
  },
  {
    date: '2026-09-09',
    org: 'Ant International, Mastercard, Visa',
    development: 'Know Your Agent interoperability collaboration',
    affects: 'Trust',
    evidenceType: 'Joint announcement',
    changed: 'The industry aligned on the questions about an agent, while each network kept its own decision',
    href: '/blog/visa-mastercard-know-your-agent-interoperability',
  },
  {
    date: '2026-08-31',
    org: 'Alibaba Qwen team',
    development: 'E-Commerce Bench, a 365 day simulated store operation across 18 models',
    affects: 'Buyer to operator',
    evidenceType: 'Independent research, simulation',
    changed: 'Showed the top earning model was also among the worst at avoiding fraudulent suppliers',
  },
  {
    date: '2026-08-31',
    org: 'Google',
    development: 'Generative AI performance report in Search Console expanded worldwide',
    affects: 'Measurement',
    evidenceType: 'Platform documentation',
    changed: 'Site owners got a first party view of appearances in AI surfaces, with no queries or clicks',
    href: '/blog/google-search-console-generative-ai-visibility',
  },
  {
    date: '2026-08-05',
    org: 'Shopify',
    development: 'WebMCP tools live on every Liquid storefront and the Hydrogen developer preview, with nothing to install',
    affects: 'Software interface',
    evidenceType: 'Developer changelog',
    changed: 'An agent interface shipped as a platform default rather than an app',
    href: '/blog/shopify-webmcp-checkout-ai-agent-storefront',
  },
  {
    date: '2026-08-05',
    org: 'Shopify',
    development: 'Second quarter call: AI-driven traffic and orders to Shopify stores tripled year over year, with agentic volume "still small relative to our massive GMV"',
    affects: 'Measurement',
    evidenceType: 'Earnings call',
    changed: 'Growth was disclosed on an undisclosed base, which is still not transaction volume',
  },
  {
    date: '2026-06-23',
    org: 'Criteo and Albertsons',
    development: 'Sponsored Products running inside a retailer\'s AI shopping assistant, defined by Criteo as a page type',
    affects: 'Advertising',
    evidenceType: 'Company announcement and documentation',
    changed: 'Retail media absorbed the assistant into existing campaigns, bids and reporting',
    href: '/blog/ai-shopping-assistant-retail-media-sponsored-products',
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
    date: '2026-03-24',
    org: 'OpenAI',
    development: 'Shifted emphasis toward product discovery and let merchants use their own checkout experiences',
    affects: 'Website handoff',
    evidenceType: 'Company announcement',
    changed: 'Native AI checkout became one option among several rather than the presumed path',
  },
  {
    date: '2026-03-18',
    org: 'Walmart',
    development: 'WIRED reported that Walmart\'s native checkout test inside ChatGPT converted at roughly a third of the rate of click-through to Walmart.com',
    affects: 'Website handoff',
    evidenceType: 'Trade reporting',
    changed: 'The one disclosed comparison favored the merchant\'s own checkout, and Walmart moved to its own agent inside AI surfaces',
  },
  {
    date: '2026-02-10',
    org: 'W3C, Google, Microsoft',
    development: 'WebMCP draft published, early Chrome implementation behind a flag',
    affects: 'Software interface',
    evidenceType: 'Standards draft',
    changed: 'A page level way for sites to declare tools to agents entered standardization',
  },
  {
    date: '2026-01',
    org: 'Google and partners',
    development: 'Universal Commerce Protocol released as an open standard',
    affects: 'Website handoff',
    evidenceType: 'Company announcement',
    changed: 'A shared structure for agent to merchant transactions became available',
    href: '/blog/amazon-joins-universal-commerce-protocol',
  },
]

export type EvidenceNumber = {
  value: string
  label: string
  source: string
}

/**
 * Verified figures used as an early visual anchor. The first entry is
 * deliberately zero: it is the spine of the report.
 */
export const EVIDENCE_NUMBERS: EvidenceNumber[] = [
  { value: '0', label: 'Platforms, networks or retailers publishing agent initiated transaction volume', source: 'My search, October 2026' },
  { value: '~1/3', label: 'Conversion of Walmart\'s native checkout test inside ChatGPT, relative to click-through to Walmart.com', source: 'WIRED' },
  { value: '3x', label: 'Year over year growth in AI-driven orders to Shopify stores, on a base Shopify calls still small', source: 'Shopify, Q2 2026 call' },
  { value: '63 of 100', label: 'Bare brand-name searches for major brands showing an AI Overview by September 30, up from 5 of 98 on July 1', source: 'Ahrefs' },
  { value: '61%', label: 'Pairwise agreement between an agent\'s model of a person and their own preferences', source: 'Anthropic Project Swap' },
  { value: '18.48%', label: 'Of spend sent to fraudulent suppliers by the top earning model', source: 'E-Commerce Bench, simulation' },
]
