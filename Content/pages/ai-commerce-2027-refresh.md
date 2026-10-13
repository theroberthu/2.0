# AI Commerce 2027: October 2026 refresh

**Status:** APPROVED FOR PRODUCTION (Release 1.39). Source of truth for the copy in `src/lib/ai-commerce-2027.ts`.
**Type:** Flagship living research page, full refresh of the canonical `/ai-commerce-2027`
**Assignment:** TRH Editorial Board, 2026-10-12
**Canonical source:** `src/lib/ai-commerce-2027.ts` and `src/app/ai-commerce-2027/page.tsx` (published 2026-09-21, last updated 2026-10-11)
**Hold for:** Robert's Editorial Board review
**Editorial Board (2026-10-12, final):** PRODUCTION GO. Walmart's conversion figure is attributed to WIRED's reporting, not stated as a Walmart disclosure. Primary-source lines are rendered visually subordinate to the prose.
**Editorial Board (2026-10-12, first review):** Structure, H1/dek, Shift 08 (as least proven), external Amazon evidence note and layout changes APPROVED; share image approved once copy is final. Publication HELD for two revisions, both now applied: (1) Shift 02 no longer claims OpenAI ended native checkout. It is reframed around competing checkout architectures, with Walmart's one-third result as evidence that native AI checkout is not automatically superior, not that the model was abandoned. (2) Source-link pass: every shift now carries direct primary-source links alongside its TRH evidence notes.

---

## SEO PACKAGE

- **title (editorial H1):** AI Commerce 2027
- **dek:** How the commerce operating model changes when software can act.
- **meta title:** AI Commerce 2027: Agentic Commerce Trends and Operating Model
- **meta description:** How commerce changes when software can act: nine shifts across discovery, checkout, trust, payments, ads and measurement, with evidence and what is unproven.
- **slug:** `/ai-commerce-2027` (confirmed, unchanged)
- **JSON-LD headline:** AI Commerce 2027: How the Commerce Operating Model Changes When Software Can Act

---

## DRAFT BODY

### AI Commerce 2027

How the commerce operating model changes when software can act.

### The short version

AI commerce begins where software receives authority to act inside a commercial system, not where AI starts helping a person decide.

The capability to act now exists at every layer of the stack, but no platform publishes agent-initiated transaction volume, and the one disclosed comparison of an AI-surface checkout against a merchant's own checkout favored the merchant.

Software is gaining authority inside the merchant's business faster than it is gaining unrestricted authority over the shopper's wallet: pricing, restocking, budget allocation and campaign sends can now be executed by software, while every agent purchase I can verify either asks a person to approve it or runs a rule the person set in advance.

Interface ownership and transaction ownership have separated, and every architecture shipped so far gives away the interface while leaving the merchant as merchant of record.

The constraint for 2027 is not model capability but authority design: who is acting, for whom, under what permission, with what evidence retained, and measured how.

### What AI commerce means

Most of what gets called AI commerce is AI-assisted ecommerce. The difference is not how advanced the AI is. It is who holds the authority to act.

**AI-assisted ecommerce** is commerce where AI helps a person decide or perform a task, and the person still takes the action. Recommendations, search summaries, generated product copy, analytics, merchandising suggestions and customer service drafts all sit here. The work gets faster. Accountability does not move.

**AI commerce** is commerce where software receives enough authority to act inside the commercial system. Assembling a cart, initiating checkout, completing a purchase after approval, changing a price, reallocating an ad budget, sending a campaign or processing a return all sit here. The software is a participant, not an interface a person operates.

The boundary is authority. A feature that writes a better product description is not AI commerce, however capable the model behind it. A feature that changes the live price is, however simple the rule behind it.

Authority arrives in steps. Software that answers tells a person something. Software that recommends proposes a choice. Software that acts prepares something a person could execute, such as a cart. Software that transacts creates an obligation, an order with money attached. Software that operates changes the business itself: prices, inventory, budgets, listings, customer communications. Each step moves a decision from a person to a system, and each one needs a different kind of control.

The two models coexist. Most commerce in 2027 will still be a person on a website or in an app, and nothing in the 2026 record suggests AI-assisted ecommerce is going away. The practical question for an operator is not which model wins. It is which workflows belong to which model, and on what evidence.

### What changed in this update

This edition rebuilds the report around authority rather than around new products. Four things changed in the evidence.

The consumer transaction thesis needed qualifying. The original edition described 2026 architecture as giving the purchase interface to AI platforms, and did not account for the most visible test of that idea. WIRED reported that Walmart's test of native checkout inside ChatGPT converted at roughly a third of the rate of shoppers who clicked through to Walmart's own site, and Walmart shifted to bringing its own assistant into AI surfaces instead. OpenAI moved its emphasis toward product discovery and now recommends external merchant checkout for most integrations, while keeping native checkout for select partners. Native AI checkout is one of several architectures competing for the transaction, not the default winner. The website is no longer a mandatory handoff. It is also not the inevitable loser.

The merchant operator thesis strengthened sharply. In late September, Amazon gave Seller Assistant workflows that execute restocking and pricing changes under seller guardrails, and put the same assistant inside Claude. Amazon's Full-Funnel Campaigns now allocate one daily budget across four ad formats in real time. Software got write access to the merchant's business faster than to the shopper's wallet, and this edition treats that as the leading edge rather than a side effect.

Trust moved from design to enforcement. Amazon blocked Meta's Muse agent in September, saying the agent did not identify itself. Meta and Sierra announced Personal Agent Protocol, which separates what a customer lets an agent do from what a business allows. Mastercard began testing a score for whether a transaction was initiated by an agent. The questions this report asked in September are now being answered in production, by refusal as often as by acceptance.

Measurement split in two. Google shipped transaction reporting for UCP checkout that starts at the Buy click, alongside Search Console reporting that shows impressions in AI surfaces with no queries or clicks. The transaction half of AI shopping is getting instrumented. The consideration half, what the AI looked at and rejected, is not.

One correction: the original edition described WebMCP as a draft standard behind a browser flag. Shopify had already shipped WebMCP tools across every Liquid storefront six weeks earlier.

The protected sentence still holds, and the evidence since September has made it more precise rather than less true. Infrastructure exists. Adoption evidence does not. Usage of AI shopping assistants is large and published. Agent-initiated transaction volume is still not.

### The AI commerce stack

AI commerce is not one technology. It is a sequence of steps, each owned by different systems and often different companies, and authority increases as software moves down it.

| Layer | What software decides | Authority it needs |
| --- | --- | --- |
| Discovery | What enters consideration | Access to product data |
| Recommendation | What gets named, and in what order | Judgment about fit |
| Agent action | What gets prepared: a cart, a booking, a draft change | Permission to act in a session |
| Transaction | Whether an order is created | Customer approval or a standing rule |
| Payment | Which credential is used, and whether money moves | Delegated, scoped payment authority |
| Fulfillment | Whether the promise is kept, amended or reversed | Access to merchant systems |
| Measurement | What counts as the result | A definition someone else will accept |

At the top of the stack, an error is a bad suggestion a person can ignore. At the bottom, an error is an executed action someone has to reverse. That is why the same AI capability can be harmless in discovery and dangerous in payment, and why most failures in this stack are not model failures. They happen at the handoffs between layers.

Underneath the flow sit the foundations every layer reads: product data, identity, permissions, protocols, merchant systems, governance and measurement. Most of them are not new responsibilities. What is new is how many other systems now read them, and how many of those systems can act on what they read.

### The 2027 operating model: nine shifts

Each shift separates what changed, the evidence for it, why it matters, what an operator should do about it, and what is still unproven. Where the evidence materially changed a view this report previously held, the revision is stated.

### 01. Discovery becomes machine-mediated

**What changed.** The work of exploring options moved from the shopper into software. Shoppers increasingly state an intent at one end and approve a result at the other, while retrieval, comparison and narrowing happen where they cannot see it.

**Evidence.** DoorDash reported that nearly half of orders placed through its Ask DoorDash assistant between June and August went to local restaurants the customer had never tried before, which the company attributes to finding places that "might not have caught their eye in their usual scroll." A study by Vaer AI for Lightspeed Commerce, covering roughly 460,000 AI responses, found large and small retailers about even among the sources AI systems cited, at roughly 38% each, while large retailers won the lead recommendation about two and a half times as often. Ahrefs found AI Overviews on 5 of 98 bare brand-name searches for major brands on July 1 and on 63 of 100 by September 30, so even navigational queries now arrive with a machine-written description. Amazon says more than 350 million customers used its shopping assistant in the twelve months to June.

**Why it matters.** "AI visibility" is at least five different outcomes. Retrieval asks whether a product enters the evidence set. Recommendation asks whether it gets named. Product selection asks which item wins. Merchant selection asks who sells it. Transaction asks where it gets bought. Different systems decide each one, and the Lightspeed data shows a retailer can win the first and lose the second. Citation is evidence of retrieval. Recommendation is evidence of selection.

**Operator consequence.** Product data is now the input to every layer, and the signals that decide selection go beyond content. Availability, delivery speed, return terms and assortment depth are what a recommender needs to be confident that the errand will succeed. Track where in the answer you disappear, not only whether you appear.

**What is still unproven.** No one has published evidence linking a specific product data change to a measurable change in recommendation outcomes at scale, with a control. The DoorDash data is observational and first party. The Lightspeed study is sponsored, and its full report is available only on request.

**Updated view.** I previously treated citation and recommendation as one discipline, and described AI as compressing the shopper's exploration. Both need revising. Retrieval and selection share a foundation and then come apart, and the exploration did not shrink. It changed owner.

*Evidence notes:* [citation versus recommendation](/blog/ai-shopping-retailer-recommendation-gap-lightspeed-vaer), [the messy middle moved into the machine](/blog/doordash-ai-shopping-messy-middle-discovery), [product data as shared infrastructure](/blog/product-data-shared-infrastructure-google-ai-mode).

*Primary sources:* [DoorDash, Text DoorDash](https://about.doordash.com/en-us/news/text-doordash), [Vaer AI for Lightspeed, AI retailer study](https://vaer.ai/insights/ai-retailer-bias-study/), [Ahrefs, AI Overviews on branded searches](https://ahrefs.com/blog/ai-overviews-on-branded-searches/), [Amazon second quarter 2026 results](https://ir.aboutamazon.com/news-release/news-release-details/2026/Amazon-com-Announces-Second-Quarter-Results/).

### 02. The merchant website stops being the mandatory handoff, not the inevitable loser

**What changed.** External AI surfaces became legitimate places to shop, but native AI checkout is not automatically winning the transaction. Platforms and retailers are now running several checkout architectures side by side: checkout native to the AI surface, merchant-controlled checkout reached from it, and cart handoff to the merchant's own site.

**Evidence.** WIRED reported that Walmart's test of OpenAI's Instant Checkout, covering around 200,000 products, converted at roughly a third of the rate of shoppers who clicked through to Walmart.com. Walmart then moved to putting its own Sparky assistant inside ChatGPT and Gemini, with account linking, loyalty and Walmart's own payment. OpenAI did not withdraw native checkout. Its March 24 announcement shifted emphasis toward product discovery and let merchants use their own checkout experiences, and its developer documentation now calls external checkout "the recommended and generally available approach" for developers building on ChatGPT, while checkout with the ChatGPT payment sheet continues as a private beta for select marketplace partners. Google's UCP integration in Merchant Center lets a merchant choose native checkout on Google, cart transfer to its own site, or identity linking, and is rolling out gradually in the United States through an interest form and selection. Shopify made direct checkout in AI Mode and Gemini active by default for eligible stores. TikTok announced Buy Direct on October 5, a native checkout that requires a UCP integration and keeps the brand as merchant of record, available through eligibility-based testing.

**Why it matters.** Interface ownership is not transaction ownership. Interface ownership is who renders the moment of purchase. Transaction ownership is who holds the order, the money, the customer record and the obligation. Every architecture I have reviewed from 2026, from Google to Microsoft to TikTok, keeps the merchant as merchant of record. What varies is how much of the interface the merchant keeps: its own checkout, its own agent, or neither. What moves with the interface is presentation, cross-sell, behavioral data and, most importantly, the conversation that produced the decision.

**Operator consequence.** There are now at least four postures per surface: native checkout on the platform, cart transfer to your own checkout, your own agent operating inside the platform, or a plain referral. Each trades conversion, data and control differently. Choose per surface and measure, rather than accepting whichever default your commerce platform ships.

**What is still unproven.** The Walmart figure is one retailer, one early implementation, and a reported ratio rather than published data. It may say more about that implementation than about native checkout as a model. No platform has published how many merchants use native AI checkout or how it performs, and no merchant has published basket size, return rate or repeat purchase for AI-surface orders against site orders.

**Updated view.** Revised. The original edition said 2026 architecture "consistently gives the interface away and keeps the transaction." The second half held. The first half was too simple. Native AI checkout neither won nor lost in 2026. It became one of several competing architectures, and the one disclosed comparison shows it is not automatically superior. The pattern among large retailers is to bring their own agent into the AI surface rather than let the surface absorb them. Smaller merchants, enrolled by platform defaults, may experience the opposite.

*Evidence notes:* [what the retailer still owns when checkout moves](/blog/ai-checkout-interface-commerce-infrastructure), [agentic checkout as a platform default](/blog/agentic-commerce-platform-default-shopify-google), [retailers want the traffic, not the loss of the customer](/blog/retailers-ai-traffic-customer-ownership).

*Primary sources:* [WIRED on Walmart's ChatGPT checkout test](https://www.wired.com/story/ai-lab-walmart-openai-shaking-up-agentic-shopping-deal/), [OpenAI, Powering product discovery in ChatGPT](https://openai.com/index/powering-product-discovery-in-chatgpt/), [OpenAI, monetization for apps in ChatGPT](https://developers.openai.com/plugins/build/monetization), [Google Merchant Center, UCP integration hub](https://support.google.com/merchants/answer/16992327), [Shopify Help, Google AI Mode and Gemini](https://help.shopify.com/en/manual/online-sales-channels/agentic-storefronts/google), [TikTok, agentic solutions](https://ads.tiktok.com/business/en-US/blog/tiktok-agentic-solutions).

### 03. Commerce gets a software interface

**What changed.** Storefronts, checkouts and back offices acquired interfaces built for software to operate, and most merchants got them through their platforms rather than through projects of their own.

**Evidence.** Shopify made WebMCP tools live on August 5 across every Liquid storefront, with nothing to install, covering catalog search, product display, cart updates and the handoff to checkout. On September 28 it extended them into checkout, where an agent can read and update the buyer's active checkout and submit the order after buyer confirmation. Klaviyo exposed more than 260 MCP tools, including one that sends a campaign. Amazon's Seller Assistant plugin brings seller data and actions into Claude, in beta, and Amazon Quick. UCP and OpenAI's Agentic Commerce Protocol define the transaction layer between agent platforms and merchants.

**Why it matters.** A storefront now has two interfaces: a human interface of rendered pages, and a software interface of declared tools, structured catalog and transaction calls. The visual website does not disappear. It gains a machine-operable counterpart. Shopify's design makes the important choice explicit: the agent's tools "use the same state as the checkout UI," so the person and the software see the same cart, the same totals and the same validation. These interfaces work at different layers. WebMCP operates a page. MCP exposes a vendor's tools. UCP and ACP structure a transaction. Personal Agent Protocol, if it ships, would structure the session around all of them.

**Operator consequence.** Agent readiness may already exist in your stack without anyone having decided it should. Audit what your platform exposes to software today, and name an owner for what that interface says. A price, a shipping rule or an availability answer now has two readers.

**What is still unproven.** No WebMCP order volume, conversion rate or error rate has been published. Agent support is limited to Chromium-based browsers, and Shopify's checkout tools exclude several common checkout types. Nobody has published what it costs to keep two interfaces accurate.

**Updated view.** Corrected. The original edition called WebMCP a draft standard behind a browser flag. It had already shipped at platform scale.

*Evidence notes:* [the storefront's second front door](/blog/shopify-webmcp-checkout-ai-agent-storefront), [ecommerce software becoming infrastructure agents query](/blog/helium-10-mcp-ecommerce-software-infrastructure).

*Primary sources:* [Shopify, WebMCP on Liquid and Hydrogen](https://shopify.dev/changelog/posts/webmcp-liquid-hydrogen), [Shopify, WebMCP support for checkout](https://shopify.dev/changelog/posts/webmcp-support-for-checkout), [Klaviyo MCP server documentation](https://developers.klaviyo.com/en/docs/klaviyo_mcp_server), [OpenAI, Agentic Checkout Spec](https://developers.openai.com/commerce/specs/checkout).

### 04. Measurement splits into consideration and transaction

**What changed.** First-party measurement for AI shopping arrived in 2026, and each instrument covers one half of the journey.

**Evidence.** Google's Search Console generative AI report shows impressions of a site's pages inside AI Overviews and AI Mode, with no queries and no clicks. Google's UCP Analytics in Merchant Center starts at the Buy click and reports purchases, purchase rate, average order value and cancellations, with no impressions. Merchant Center's AI performance insights compare share of voice on AI surfaces in five markets. Shopify reported that AI-driven traffic and orders to its merchants tripled year over year in the second quarter, while saying "the volume from agentic commerce is still small relative to our massive GMV." Surveys from Global Payments and ACI Worldwide, a week apart, put comfort with AI purchasing at 69% and 7% respectively, because they asked different questions.

**Why it matters.** There are two measurement problems. Consideration measurement asks what the AI retrieved, compared, rejected and recommended. Transaction measurement asks what happened after the shopper entered the commerce flow. The transaction half now has a real denominator: UCP Analytics divides purchases by Buy clicks. The consideration half still has none. No product reports how often a merchant was eligible for an answer and lost it.

**Operator consequence.** Reconcile AI-surface purchases against your order system, and cart transfers against completed orders on your own site. Report delegation separately: research, recommendation, cart building, approved purchase, standing authority and unattended orders are six different behaviors, and a single adoption percentage hides which one your business is seeing. Treat "AI-attributed orders" as a description of where a sale completed, not proof the AI created the demand.

**What is still unproven.** There is no cross-platform definition of an AI impression, no consideration denominator, and no published agent-initiated transaction volume from any platform, network or retailer. Shopify's tripling is a growth rate on an undisclosed base.

**Updated view.** Revised. The original edition framed this as GEO becoming an operating discipline. The more useful line is between consideration and transaction, because only one side of it is being instrumented, and the side that is not is the one marketers most need.

*Evidence notes:* [UCP Analytics and what it cannot see](/blog/google-ucp-analytics-merchant-center-ai-checkout), [the adoption definition problem](/blog/agentic-commerce-adoption-definition-problem), [the measurement problem](/blog/niq-similarweb-agentic-commerce-measurement).

*Primary sources:* [Google, UCP Analytics in Merchant Center](https://developers.google.com/merchant/ucp/guides/tools/merchant-center/analytics), [Google, Merchant API UCP performance reports](https://developers.google.com/merchant/api/guides/reports/ucp-performance-reports), [Google Search Central, generative AI performance reports](https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports), [Shopify second quarter 2026 earnings call transcript](https://www.fool.com/earnings/call-transcripts/2026/08/12/shopify-shop-q2-2026-earnings-call-transcript/).

### 05. Trust becomes an operating layer

**What changed.** The industry stopped treating agent trust as one question. Identity, delegation, merchant permission and evidence are being built as separate layers, by separate parties, and the absence of permission is now being enforced.

**Evidence.** On September 20, Amazon blocked Meta's Muse agent from its store, saying the agent "does not identify itself." On October 6, Meta and Sierra announced Personal Agent Protocol, in which "consumers decide what access to give their personal agents, and companies set parameters for what those agents can do"; its specification had not been published as of this update. Ant International, Mastercard and Visa began Know Your Agent interoperability work in September while keeping each network's own decisioning. Mastercard began United States testing of a score estimating how likely a transaction was initiated by an AI agent. Shopify's checkout documentation states that its agent signature, Web Bot Auth, does not grant permission to place an order. IDEMIA announced payment tokens restricted by merchant, amount, category and time, with proof of consent designed to survive a later dispute.

**Why it matters.** A transaction initiated by software has to answer six questions. Who is acting: the agent's identity. Who it is acting for: the customer's identity and account. What the customer authorized: the scope of delegation. What the business will allow: merchant permission. What evidence proves it: consent records and logs. What still requires risk judgment: the issuer's or merchant's decision. Identity is not authorization. Authorization is not merchant permission. Merchant permission is not transaction legitimacy. Each layer can pass while the next one fails.

There is a seventh question upstream of all six. Anthropic's Project Swap, a controlled 201-person agent market, found its agents' rankings agreed with participants' own pairwise preferences 61% of the time, and attributed 85% of the market's shortfall to imperfect models of what people wanted rather than to negotiation. An agent can be fully authorized and still buy the wrong thing.

**Operator consequence.** Decide now what your business will allow an identified agent to do, by action: read a policy, check stock, build a cart, place an order, change an address. Retain evidence of what was authorized and what was executed, because disputes will turn on it.

**What is still unproven.** Nothing published shows one network accepting another's agent verification without its own check. There is no published dispute or liability framework for an authorized agent's mistake, and no data on false declines of legitimate agent transactions. Personal Agent Protocol is a design, not a deployed standard.

**Updated view.** Strengthened and sharpened. In September, consumer and merchant authorization were "being built by different parties on different timelines." Personal Agent Protocol proposes putting both grants in one session, and the Muse dispute showed what happens without either.

*Evidence notes:* [Personal Agent Protocol](/blog/personal-agent-protocol-ai-commerce), [Know Your Agent](/blog/visa-mastercard-know-your-agent-interoperability), [knowing what the shopper wants](/blog/anthropic-project-swap-agentic-commerce-shopper-preferences).

*Primary sources:* [Sierra, Introducing Personal Agent Protocol](https://sierra.ai/blog/introducing-personal-agent-protocol), [Mastercard, new trust and intelligence services](https://www.mastercard.com/us/en/news-and-trends/press/2026/september/new-trust-and-intelligence-services.html), [Shopify, Checkout WebMCP documentation](https://shopify.dev/docs/agents/carts-and-checkout/checkout-webmcp), [Ant International, Know Your Agent interoperability](https://www.ant-intl.com/en/news/detail/?id=ant-international-mastercard-and-visa-initiate-collaboration-on-know-your-agent-interoperability-to-scale-agentic-commerce), [Anthropic, Project Swap](https://www.anthropic.com/research/project-swap), [GeekWire on Amazon blocking Muse](https://www.geekwire.com/2026/amazon-blocks-metas-muse-ai-assistant-in-new-standoff-over-agentic-shopping/).

### 06. Advertising moves inside the shopping interface

**What changed.** Paid placement entered conversational shopping, mostly by extending existing retail media systems to a new surface rather than by building new ones.

**Evidence.** Criteo's documentation defines a retailer's AI shopping assistant as a Sponsored Products page type. Where a retailer enables it, existing campaigns become eligible by default, at standard cost per click, and the retailer's system or its LLM partner extracts keywords from the conversation and passes them as a standard ad request. Albertsons has run it since June. Walmart sells Sponsored Prompts inside Sparky. Amazon reports that shoppers who click its Sponsored Prompts convert 48% more often than those who do not. OpenAI began testing Sponsored Agents on September 16, a labeled conversation with a business's agent after an ad, and reported a $1 billion annualized run rate for ChatGPT Ads. Google and TikTok are both connecting ad units to checkout.

**Why it matters.** The interface changes more than the auction does. In Criteo's design, the advertising system never reads the conversation. The assistant translates it back into a keyword, and the keyword enters the auction that already exists. The keyword did not disappear in conversational commerce. It moved behind the conversation. Two things genuinely change. Slots shrink, since an assistant typically shows three to five products rather than a page of results. And a new commercial step appears: whoever translates the conversation into a query now shapes which advertisers compete.

**Operator consequence.** Filter reporting to the assistant surface before bidding on it. If you run an assistant, treat keyword extraction as a commercial system and decide how sponsored results are labeled before switching the inventory on. If a brand-run agent answers questions after an ad, decide what product data grounds it and who approves its claims.

**What is still unproven.** No platform has published performance data for sponsored placements inside an assistant against search. Amazon's comparison is between shoppers who clicked an ad and those who did not, which is not a measure of the ad's effect. The boundary between organic answer and paid placement is stated by platforms and has not been independently audited.

**Updated view.** Revised. The original edition framed this shift as advertising becoming conversational. The evidence since then says something more specific: existing retail media infrastructure is absorbing the conversation as a page type, while new conversational formats remain tests.

*Evidence notes:* [AI assistants as a retail media page type](/blog/ai-shopping-assistant-retail-media-sponsored-products), [the ad click becoming a conversation](/blog/openai-sponsored-agents-chatgpt-ads-shopify).

*Primary sources:* [Criteo, AI Assistant page type for retailers](https://developers.criteo.com/retailer-integration/docs/ai-assistant), [Criteo, Sponsored Products in AI assistants for advertisers](https://help.retailmedia.criteo.com/kb/guide/en/reach-shoppers-in-ai-assistants-with-sponsored-products-Ed4zMZ3Bo6/Steps/5745300), [Albertsons Media Collective announcement](https://www.albertsonscompanies.com/newsroom/press-releases/news-details/2026/Albertsons-Media-Collective-Brings-Sponsored-Product-Discovery-to-AI-Powered-Conversational-Search/default.aspx), [OpenAI, Reimagining advertising with AI](https://openai.com/index/reimagining-advertising-with-ai/), [OpenAI, ChatGPT Ads run rate](https://openai.com/index/expanding-access-to-ai-with-chatgpt-ads/).

### 07. AI moves from buyer to operator

**What changed.** Software gained the ability to write, not just read, inside merchant systems, and the broadest write access so far arrived on the merchant side rather than the shopper side.

**Evidence.** On September 23, Amazon said Seller Assistant workflows can "continuously monitor and execute routine tasks like restocking and pricing adjustments," with seller-defined guardrails and "a complete audit trail," and with sellers "reviewing and approving them before they're carried out." Sellers choose whether a workflow only recommends or acts. Amazon's Full-Funnel Campaigns, documented September 29, take a daily budget that Amazon's AI "allocates across sponsored ads, display, video, and streaming TV in real time." Klaviyo's tools let an agent send a campaign to its audience. Anthropic's open-source merchant agent stages every write until a person approves it. Shopify documented official connectors for seven general-purpose assistants that can edit products, collections, inventory and percentage discounts with write access, while blocking refunds, order cancellation and capture, returns, gift cards and changes to payments, taxes and domains for every connected tool. Long-horizon simulations remain sobering: in E-Commerce Bench, the model that finished with the most assets sent 18.48% of its spend to fraudulent suppliers.

**Why it matters.** Reading is usually reversible. Writing is not. A bad analysis can be caught before anyone acts on it. A price change, a reallocated budget or a sent campaign has already reached the market. The products shipping now treat delegation level as a setting: Amazon's DVA+ offers a default where AI allocates budget and an advanced mode with format-level control. Choosing the level is itself the strategic decision.

**Operator consequence.** Grant write authority by workflow, not by tool. Start where actions are frequent, bounded and cheap to reverse, such as restock suggestions and bid adjustments inside a ceiling. Require every executed change to be logged as an event your data can see, and measured against what it was supposed to move. Keep human the decisions that encode what the optimizer cannot see: the objective, the margin, the brand boundary and the standard of proof for scaling.

**What is still unproven.** No merchant or vendor has published production error, reversal or intervention rates for agent write actions. Amazon's figure that sellers accept recommendations over 90% of the time concerns recommendations, not executed actions. Every long-horizon benchmark runs in simulation.

**Updated view.** Strengthened substantially. The original edition treated merchant-side agents mainly as a reliability question. They are also where authority is moving fastest. If the largest change in AI commerce happens in operations before it happens in consumer purchasing, the evidence so far points that way.

*Evidence notes:* [channel mix inside the algorithm](/blog/amazon-full-funnel-campaigns-ai-channel-mix), [when an agent can hit send](/blog/klaviyo-headless-agent-controls), [proving the change worked](/blog/noibu-ai-agents-closed-loop-ecommerce).

*Primary sources:* [Amazon, Seller Assistant plugin for Amazon Quick and Claude](https://www.aboutamazon.com/news/innovation-at-amazon/seller-assistant-plugin-amazon-quick-claude), [Amazon Ads, Full-Funnel Campaigns](https://advertising.amazon.com/products/full-funnel-campaigns), [Amazon Ads, DVA+](https://advertising.amazon.com/resources/whats-new/dva-plus-display-video-audio-campaigns), [Anthropic, commerce agents repository](https://github.com/anthropics/commerce-agents).

### 08. Platform power shifts to the operating layer

**What changed.** Commerce platforms began competing to be the system a merchant operates from, across channels they do not own.

**Evidence.** Amazon now lets sellers connect eBay, Shopify, TikTok and Walmart accounts to Seller Central, import and link those listings, view orders and fulfill across channels, rolling out to United States sellers at no added cost. Editing a listing once for every channel and a cross-channel profitability view are announced as coming. The same Seller Assistant carries persistent memory of each seller's pricing patterns and inventory cycles, and travels into Claude and Amazon Quick. Instacart's Carrot Ads runs advertising for more than 310 retail partners, and in September Gopuff, which owns its own storefront, fulfillment and ad sales, chose to run its storefront advertising on it. Shopify's managed setting enrolls eligible stores in new AI channels as they appear. Anthropic describes Claude as "your intelligence layer, not a storefront or checkout."

**Why it matters.** Channel ownership is not operating-layer ownership. A merchant can diversify where revenue comes from while consolidating how the business is run. Whoever holds the operating layer holds the memory, the workflows, the cross-channel data and, increasingly, the agent that acts on all three. That position compounds in a way a single sales channel does not.

**Operator consequence.** Before consolidating operations into any one platform's tools, establish three things: where the memory of your business lives and whether you can export it, which actions that platform's agent can take on channels it does not own, and what it would cost to leave.

**What is still unproven.** This is the newest shift in the report and the least proven. Amazon's multichannel tools are rolling out, its editing and profitability features are announced rather than live, and no uptake has been published. Amazon says off-Amazon data will not inform its retail decisions. That is a policy commitment, not an audited one.

*Evidence notes:* [retail media becoming infrastructure](/blog/instacart-gopuff-carrot-ads-retail-media-infrastructure), [Anthropic's intelligence layer](/blog/anthropic-claude-commerce-intelligence-layer).

*Primary sources:* [Amazon, multichannel selling in Seller Central](https://www.aboutamazon.com/news/small-business/amazon-seller-central-multichannel-selling-tools), [Instacart and Gopuff announcement](https://www.prnewswire.com/news-releases/instacart-and-gopuff-announce-new-first-of-its-kind-partnership-in-the-us-302885692.html), [Shopify Help, agentic storefronts](https://help.shopify.com/en/manual/online-sales-channels/agentic-storefronts/agentic-home), [Anthropic, Claude for commerce](https://claude.com/solutions/commerce).

### 09. Organizations need a governance model for software that acts

**What changed.** Approval is moving from the transaction to the rule, and the most important permissions are starting to be written as limits on what software may not do.

**Evidence.** Amazon lists buying items automatically at a set price, and scheduling recurring purchases, among its shopping assistant's capabilities. A person still decides, but in advance, by setting the condition. Payment design follows the same pattern: Stripe's shared payment tokens are scoped to one seller with a maximum amount and an expiry, and IDEMIA's tokens can be restricted by merchant, amount, category and time. Shopify requires an agent to ask the buyer again if a checkout total changes. On the other side, Walmart published a customer letter in September committing that information shared with Sparky will not be used to raise a price or hide lower-priced options: "We price the product, not the person." That arrived as the comment period closed on a proposed Federal Trade Commission policy statement on personalized pricing.

**Why it matters.** Once software can act, governance is no longer a review of a tool. It is a design for decisions. For each workflow, a business has to answer what software may recommend, what it may draft, what it may execute with approval, what it may execute under a pre-authorized rule, and what it must never do. Then: who owns an error, how a person overrides the system, how permissions are revoked, and how performance is judged from outside the system that produced it. Project Swap adds a useful test: participants who judged the agent's summary of them complete would delegate 34% of a budget without veto rights, against 23% for those who did not. Delegated authority should scale with demonstrated accuracy, not with capability alone.

**Operator consequence.** Prove the workflow first. Automate second. AI does not fix an ungoverned workflow running on untrusted data. It amplifies it. Before granting execution, the workflow should have a written owner, clean inputs, a known failure mode, a reversal path and a measurement that does not come from the vendor's own optimizer.

**What is still unproven.** No production merchant has published how often its agents' actions were overridden or reversed. Walmart's commitments are voluntary and unaudited. Whether a standing rule counts as consent in a dispute has not been tested.

*Evidence notes:* [negative permissions and Walmart's pricing promise](/blog/walmart-sparky-ai-personalization-pricing-governance), [payment choice becoming policy](/blog/agentic-commerce-payment-choice-policy-idemia), [the rail-level argument](/blog/npci-upi-ai-agent-authorization).

*Primary sources:* [Walmart, letter from the CEO](https://corporate.walmart.com/about/everyday-affordability/letter-from-our-ceo), [FTC, proposed policy statement on personalized pricing](https://www.ftc.gov/system/files/ftc_gov/pdf/p034101-ftc-enforcement-policy-statement-re-personalized-pricing-proposed-for-public-comment.pdf), [Stripe, shared payment tokens](https://docs.stripe.com/agentic-commerce/concepts/shared-payment-tokens), [IDEMIA Secure Transactions announcement](https://www.prnewswire.com/news-releases/idemia-secure-transactions-opens-agentic-commerce-to-all-payment-schemes-302892772.html), [Amazon, Alexa for Shopping](https://www.aboutamazon.com/news/retail/alexa-for-shopping-ai-assistant).

### The strongest case against this report

A report about change should try hardest to disprove itself. These are the counterarguments I take most seriously, and where I think each one stands.

**Most AI shopping still involves a human at every decision.** Accepted. Every consumer purchase I can verify involves either per-transaction approval or a rule the person set. That is why this report describes authority shifting, not humans leaving.

**Agent-initiated transaction volume remains undisclosed.** Accepted. Shopify reports growth on an undisclosed base and calls the volume small. If 2027 ends with no platform publishing the number, the likeliest explanation is that it is not yet worth publishing.

**Native AI checkout may simply convert worse.** Partly accepted. Walmart's experience is the only disclosed comparison, and it went against the AI surface. It is one implementation, not a verdict on the model, and OpenAI, Google and TikTok all still offer native checkout alongside merchant-controlled paths. What it establishes is that native checkout is not automatically superior.

**Merchants may resist giving software write authority.** Not yet supported. Amazon and Klaviyo shipped write actions, and Amazon reports high acceptance of its recommendations. Resistance may still appear once errors are visible, which is why reversal data is on the watchlist.

**Major retailers may prefer selective integrations over open access.** Accepted, and already happening. Amazon blocks outside agents while opening its seller tools to Claude. Walmart brings Sparky into other surfaces rather than letting them operate Walmart.com. Openness is being granted per relationship, not per protocol.

**Consumers may not delegate high-value purchases.** Accepted for 2027. The surveys show comfort falling with price, and they measure willingness, not behavior.

**Commerce protocols may fragment.** Partly accepted. UCP, ACP, MCP, WebMCP and Personal Agent Protocol operate at different layers, which limits direct conflict, but merchants still face several integrations, and platform defaults are currently doing the integration work for them.

**Payment and fraud systems may add friction.** Open. Mastercard's agent score exists because issuers cannot yet tell legitimate agent activity from suspicious activity. Whether that produces friction or approval depends on data nobody has published.

**Existing search, marketplaces and retailer apps remain powerful.** Accepted. The largest AI shopping deployments are inside Amazon and Walmart, not outside them.

**AI may become another interface rather than a new commerce channel.** Partly accepted for consumers. On the merchant side, the evidence points the other way: software that changes prices and budgets is not an interface.

**The largest change may happen in operations before consumer purchasing.** Accepted. This edition was restructured around it.

### 2027 signal tracker

These are the developments that would most change my confidence. No score and no probability.

| Signal to watch | Why it matters | What it would change in the thesis |
| --- | --- | --- |
| Any platform, network or retailer publishing agent-initiated orders as a share of total orders | It is the number that would turn capability into a market | Would retire the protected sentence and reframe Shifts 02 and 04 around volume |
| A second published comparison of AI-surface checkout against merchant checkout | Walmart's result is the only one | Would confirm or reverse the weakening of Shift 02 |
| Merchants disclosing meaningful revenue from native AI checkout | Separates availability from use | Would show native checkout winning the transaction, not just being offered |
| Production error, reversal or intervention rates for merchant-side agent writes | Moves reliability evidence out of simulation | Would test whether Shift 07 holds once errors are visible |
| Personal Agent Protocol v0.1, and who implements it | First attempt to join customer and merchant grants in one session | Would show whether Shift 05's two-grant model reaches production |
| Cross-network acceptance of agent verification | The moment trust becomes portable rather than coordinated | Would move Shift 05 from coordination to infrastructure |
| Data on false declines and disputes for agent transactions | Shows whether payment friction is real | Would decide whether payments slow the consumer side |
| A published dispute and liability framework for authorized agent mistakes | Determines who pays when a permitted agent errs | Would show whether standing rules count as consent in Shift 09 |
| A consideration denominator: how often a merchant was eligible for an AI answer and lost | The missing half of AI measurement | Would close the gap at the center of Shift 04 |
| Published performance for sponsored placements inside assistants | Tests whether the new surface earns a premium | Would show whether Shift 06 stays an absorbed page type or becomes a new stack |
| Uptake of multichannel operating tools and cross-channel agent actions | Shows whether the operating layer consolidates | Would confirm or remove Shift 08 |
| Post-purchase agents handling returns, amendments and refunds at scale | A purchase an agent cannot amend is an incomplete capability | Would extend the stack's authority past the transaction |

### What 2027 is actually about

The version of this story told loudest is that consumers will hand their shopping to agents. The evidence does not support that for 2027. Every agent purchase I can verify still begins with a person approving it or setting the rule, and the one disclosed comparison of native AI checkout against a retailer's own checkout favored the retailer.

What has changed is quieter and harder to reverse. Commerce systems are now built on the assumption that software may be a participant. Storefronts expose tools. Payment tokens carry limits. Merchants decide which agents may enter. Ad systems translate conversations into auctions. And inside the merchant's own business, software has started changing prices, moving budgets and sending campaigns under rules a person wrote.

That is why the practical 2027 question for an operator is not whether to believe in agentic commerce. It is which decisions you are prepared to let software execute, under what limits, with what evidence retained, and measured by whom.

If software can already act inside your business, what have you actually decided it is allowed to do?

### Method and sources

Claims are drawn from primary sources where they exist: company announcements, product documentation, developer changelogs, earnings calls and published research. Where a figure comes from a company describing its own product, it is attributed to that company. Benchmark results come from simulations and are not evidence about production performance. Survey results measure stated willingness, not behavior. Absence of evidence is reported as the limit of my own search rather than proof of absence. In particular, I found no published agent-initiated transaction volume from any platform, network or retailer as of October 12, 2026. If that number exists somewhere I have not looked, this report should change first where it says so.

---

## EDITORIAL PACKAGE (not part of the page body)

### 1. Current-page audit

Read in full: `src/lib/ai-commerce-2027.ts` (8 shifts, 12 tracker rows, 7 disconfirming cards, 9 watchlist items, 6 evidence numbers, 9-row comparison, flow + foundations, two-interface diagram) and `src/app/ai-commerce-2027/page.tsx`.

**Keep (strongest parts):**
- The protected sentence "Infrastructure exists. Adoption evidence does not." (Operating System guardrail). Kept verbatim in "What changed in this update".
- The AI-assisted ecommerce vs AI commerce distinction. Sharpened to "the boundary is authority".
- The seven-stage flow (Discovery to Measurement) and the foundations list. Kept, now with an authority column.
- "One storefront, two front doors" diagram. Kept as Shift 03's core idea.
- Interface ownership vs transaction ownership. Kept, now tested against counter-evidence.
- The disconfirming section. Expanded into verdicted counterarguments.
- The "absence of evidence is the limit of my search" method note.

**Stale, wrong or weak:**
- **Shift 02 omits the strongest counter-evidence of 2026.** WIRED reported roughly one-third conversion for Walmart's native checkout test inside ChatGPT and moved to its own Sparky app, and OpenAI shifted its emphasis to product discovery on March 24, now recommending external merchant checkout while keeping native checkout in beta for select partners. Both predate the September 21 publication, and TRH covered both (`walmart-sparky-chatgpt-gemini`, `chatgpt-shopping-pullback-sellers`). This is the most serious audit finding. (Corrected after Board review: OpenAI did not end native checkout.)
- **Disconfirming card "Every production implementation so far keeps a human approving the transaction"** is imprecise. Amazon lists "Auto Buying items at a set price" for Alexa for Shopping. Revised to "approves it or sets the rule in advance".
- **Shift 01 "recommendation toward execution"** is a framing, not a shift. Every other shift depends on it. Moved into the definitions and stack.
- **Shift 03 (product data) and Shift 04 (GEO)** overlap with the GEO/AEO pillars and describe instruments rather than operating changes. Merged into new Shifts 01 and 04.
- **Shift 08 (workflow reliability)** buried the most important new evidence direction (merchant-side write authority). Split into Shifts 07 and 09.
- **Shift 06 title** ("advertising becomes conversational") is contradicted by its own Criteo evidence, which shows absorption into existing retail media. Retitled.
- **Evidence numbers band:** Cloudflare's crawler stats (under 1% / 17%) are accurate but no longer the strongest anchors. Recommend replacing with Walmart ~1/3, Shopify 3x on an undisclosed base, Project Swap 61%, and keeping the "0 platforms publishing agent-initiated volume" spine plus E-Commerce Bench 18.48%.
- **Sabre (~80 travel customers)** is a September data point that is not commerce retail and no longer earns a headline number. Kept in tracker only.
- **WebMCP tracker row (Feb 2026 draft)** is accurate as history, but the page needs the August 5 shipping row.
- **Hero H1 and OG image** carry "From Experiment to Operating Model". The brief specifies H1 "AI Commerce 2027". The OG PNG and its alt text would need regenerating if the H1 changes. That is an asset and is not created here.

### 2. Beliefs that strengthened
- Interface ownership is not transaction ownership. Every 2026 architecture, including TikTok's October Buy Direct, keeps the merchant as merchant of record.
- Commerce acquiring a software interface (WebMCP shipped at platform scale, checkout included).
- Trust as separate layers (PAP's two grants; Muse blocked; Mastercard agent score; Shopify's "WBA doesn't grant permission").
- Merchant-side agents with write authority (Amazon Seller Assistant workflows, Full-Funnel allocation).
- "Infrastructure exists. Adoption evidence does not." More precise, not less true.

### 3. Beliefs that weakened
- Native AI checkout as the presumed winner. It is one of several competing architectures (Walmart's one-third conversion and move to its own agent inside ChatGPT; OpenAI recommending external checkout while keeping native checkout in beta).
- "Advertising becomes conversational" as a new ad stack (evidence favors absorption into retail media).
- Citation and recommendation as one discipline (Lightspeed/Vaer).
- "Every production implementation keeps a human approving the transaction" (Amazon auto-buy at a set price; approval moves to the rule).

### 4. Material new evidence since the last major update (2026-09-21)
Amazon Seller Assistant workflows and Claude plugin (Sept 23); Amazon multichannel Seller Central (Sept 23); Amazon blocks Muse (Sept 20); Anthropic Project Swap (Sept 24); Walmart pricing letter (Sept 25); Shopify WebMCP checkout (Sept 28); IDEMIA restricted tokens (Sept 29); Amazon Full-Funnel Campaigns (Sept 29); Lightspeed/Vaer recommendation gap (Sept 29); Mastercard agent likelihood score (Sept 30); DoorDash Ask (Sept 30); Ahrefs branded AI Overviews (Oct 2); TikTok Buy Direct (Oct 5); Personal Agent Protocol (Oct 6); UCP Analytics (Oct). Previously missed but pre-dating the page: OpenAI shifts emphasis to product discovery and merchant checkout (Mar 24); Walmart one-third conversion (Mar); Shopify WebMCP storefronts (Aug 5); Shopify Q2 AI orders tripled, "still small" (Aug 5).

### 5. Recommended revised shift structure

| New | Title | Source in current page |
| --- | --- | --- |
| 01 | Discovery becomes machine-mediated | Old 03 (product data) + part of old 04 |
| 02 | The merchant website stops being the mandatory handoff | Old 02, revised with counter-evidence |
| 03 | Commerce gets a software interface | Old 05 |
| 04 | Measurement splits into consideration and transaction | Old 04, reframed |
| 05 | Trust becomes an operating layer | Old 07 |
| 06 | Advertising moves inside the shopping interface | Old 06, retitled |
| 07 | AI moves from buyer to operator | Old 08 (merchant agents half) + new evidence |
| 08 | Platform power shifts to the operating layer | New |
| 09 | Organizations need a governance model for software that acts | Old 08 (reliability half) + new |

### 6. Remove / merge / add
- **Remove as a shift:** old 01 (recommendation to execution). Its idea becomes the authority ladder and the stack.
- **Merge:** old 03 into new 01; old 08 split across new 07 and 09.
- **Add:** new 08 (operating layer). Flagged as the least proven shift. The Board may prefer to hold it as a watchlist item until Amazon's planned features ship. My recommendation is to include it with the explicit "newest and least proven" label, because Amazon's live connect/import/fulfill tools plus Carrot Ads and Shopify's managed setting are enough to state the distinction, not enough to claim the outcome.
- **Add sections:** "The short version", "What changed in this update", verdicted counterarguments, signal tracker with a third column.

### 7. Full updated report
See DRAFT BODY above.

### 8. Executive summary
See "The short version" (5 one-sentence items).

### 9. SEO title
AI Commerce 2027: Agentic Commerce Trends and Operating Model (59 characters; site template appends " | Robert Hu"). Keeps "trends" and "agentic commerce" from the current title, which already holds the page's query footprint, and adds "operating model".

### 10. Meta description
How commerce changes when software can act: nine shifts across discovery, checkout, trust, payments, ads and measurement, with evidence and what is unproven. (156 characters)

### 11. Slug
`/ai-commerce-2027`, confirmed. No duplicate page created.

### 12. Internal-link plan
24 internal links and 42 direct primary-source links in the body (the four-link cap applies to articles, not flagships). Each shift carries two or three TRH evidence notes, which show how the thinking developed, plus a separate *Primary sources* line with four to six links, so a reader or AI system can go from a major claim straight to the underlying source. Primary sources cover OpenAI, Google, Shopify, Amazon, Walmart, TikTok, Mastercard, Sierra, Criteo, Anthropic, Stripe, Klaviyo, Instacart, IDEMIA, the FTC and the relevant developer specifications. Two are trade reporting where the reporting is the primary record (WIRED on Walmart's test; GeekWire on Amazon blocking Muse, which quotes Amazon's spokesperson). No internal link appears twice. GEO and AEO pillars stay linked from the refreshed "Go deeper" section. External links render with `target="_blank" rel="noopener noreferrer"`.

| Shift | Internal links |
| --- | --- |
| 01 | ai-shopping-retailer-recommendation-gap-lightspeed-vaer, doordash-ai-shopping-messy-middle-discovery, product-data-shared-infrastructure-google-ai-mode |
| 02 | ai-checkout-interface-commerce-infrastructure, agentic-commerce-platform-default-shopify-google, retailers-ai-traffic-customer-ownership |
| 03 | shopify-webmcp-checkout-ai-agent-storefront, helium-10-mcp-ecommerce-software-infrastructure |
| 04 | google-ucp-analytics-merchant-center-ai-checkout, agentic-commerce-adoption-definition-problem, niq-similarweb-agentic-commerce-measurement |
| 05 | personal-agent-protocol-ai-commerce, visa-mastercard-know-your-agent-interoperability, anthropic-project-swap-agentic-commerce-shopper-preferences |
| 06 | ai-shopping-assistant-retail-media-sponsored-products, openai-sponsored-agents-chatgpt-ads-shopify |
| 07 | amazon-full-funnel-campaigns-ai-channel-mix, klaviyo-headless-agent-controls, noibu-ai-agents-closed-loop-ecommerce |
| 08 | instacart-gopuff-carrot-ads-retail-media-infrastructure, anthropic-claude-commerce-intelligence-layer (+1 external) |
| 09 | walmart-sparky-ai-personalization-pricing-governance, agentic-commerce-payment-choice-policy-idemia, npci-upi-ai-agent-authorization |

Deliberately not linked: the March 2026 Walmart and Instant Checkout articles (`walmart-sparky-chatgpt-gemini`, `chatgpt-shopping-pullback-sellers`). They carry the facts, but their voice ("Walmart fired OpenAI's checkout") is below the flagship's standard. I'd cite the primary reporting instead.

### 13. Sources used

Primary or company:
- OpenAI, Powering product discovery in ChatGPT (emphasis shifts to discovery; merchants may use their own checkout), Mar 24 2026: https://openai.com/index/powering-product-discovery-in-chatgpt/
- OpenAI Developers, monetization for ChatGPT plugins (external checkout "the recommended and generally available approach"; ChatGPT payment sheet in private beta for select marketplace partners): https://developers.openai.com/plugins/build/monetization
- OpenAI Developers, Agentic Checkout Spec: https://developers.openai.com/commerce/specs/checkout
- TikTok for Business, agentic solutions (Buy Direct requires UCP; brand remains Merchant of Record; eligibility-based testing), Oct 5 2026: https://ads.tiktok.com/business/en-US/blog/tiktok-agentic-solutions
- Sierra, Introducing Personal Agent Protocol, Oct 6 2026: https://sierra.ai/blog/introducing-personal-agent-protocol
- Criteo developer and help documentation for the AI Assistant page type; Albertsons Media Collective, June 23 2026 (URLs in the Shift 06 primary sources)
- Google, UCP Analytics and Merchant API UCP performance reports; Search Central generative AI performance reports (URLs in the Shift 04 primary sources)
- OpenAI, ChatGPT Ads $1B run rate, Aug 31 2026: https://openai.com/index/expanding-access-to-ai-with-chatgpt-ads/
- Shopify Q2 2026 earnings call (Finkelstein: "still small relative to our massive GMV", AI traffic and orders tripled), Aug 5 2026: https://www.fool.com/earnings/call-transcripts/2026/08/12/shopify-shop-q2-2026-earnings-call-transcript/
- Shopify WebMCP storefronts, Aug 5 2026: https://shopify.dev/changelog/posts/webmcp-liquid-hydrogen
- Shopify WebMCP checkout, Sept 28 2026: https://shopify.dev/changelog/posts/webmcp-support-for-checkout and https://shopify.dev/docs/agents/carts-and-checkout/checkout-webmcp
- Google Merchant Center UCP integration hub help page: https://support.google.com/merchants/answer/16992327
- Google UCP Analytics documentation (as cited in TRH article, Oct 11)
- Amazon, multichannel Seller Central, Sept 23 2026: https://www.aboutamazon.com/news/small-business/amazon-seller-central-multichannel-selling-tools
- Amazon, Seller Assistant plugin for Quick and Claude, Sept 23 2026: https://www.aboutamazon.com/md/news/innovation-at-amazon/seller-assistant-plugin-amazon-quick-claude
- Amazon, Alexa for Shopping capabilities (auto-buy at a set price, scheduled purchases): https://www.aboutamazon.com/news/retail/alexa-for-shopping-ai-assistant
- Amazon Q2 2026 results (350M customers; Sponsored Prompts): as cited in TRH `amazon-ai-shopping-business-model`
- Amazon Ads, Full-Funnel Campaigns and DVA+, Sept 29 2026: https://advertising.amazon.com/products/full-funnel-campaigns
- Mastercard, new trust and intelligence services for Agent Pay, Sept 30 2026: https://www.mastercard.com/us/en/news-and-trends/press/2026/september/new-trust-and-intelligence-services.html
- Sierra, Personal Agent Protocol announcement, Oct 6 2026 (as cited in TRH article)
- Anthropic, Project Swap, Sept 24 2026: https://www.anthropic.com/research/project-swap
- Anthropic, commerce agents and commerce page, Sept 2 2026: https://claude.com/blog/claude-for-commerce-agents
- Walmart, letter from the CEO, Sept 25 2026: https://corporate.walmart.com/about/everyday-affordability/letter-from-our-ceo
- FTC, proposed policy statement on personalized pricing: https://www.ftc.gov/system/files/ftc_gov/pdf/p034101-ftc-enforcement-policy-statement-re-personalized-pricing-proposed-for-public-comment.pdf
- IDEMIA Secure Transactions, Sept 29 2026: https://www.prnewswire.com/news-releases/idemia-secure-transactions-opens-agentic-commerce-to-all-payment-schemes-302892772.html
- Stripe, shared payment tokens: https://docs.stripe.com/agentic-commerce/concepts/shared-payment-tokens
- Criteo Sponsored Products AI Assistant documentation and Albertsons Media Collective, June 23 2026 (as cited in TRH article)
- DoorDash, Text DoorDash, Sept 30 2026: https://about.doordash.com/en-us/news/text-doordash
- Klaviyo MCP server documentation: https://developers.klaviyo.com/en/docs/klaviyo_mcp_server
- Instacart and Gopuff, Sept 22 2026: https://www.prnewswire.com/news-releases/instacart-and-gopuff-announce-new-first-of-its-kind-partnership-in-the-us-302885692.html

Research and measurement:
- Vaer AI for Lightspeed, Sept 29 2026: https://vaer.ai/insights/ai-retailer-bias-study/
- Ahrefs, AI Overviews on branded searches, Oct 2 2026: https://ahrefs.com/blog/ai-overviews-on-branded-searches/
- Global Payments and ACI Worldwide surveys (as cited in TRH `agentic-commerce-adoption-definition-problem`)
- E-Commerce Bench and MerchantBench (as cited on the current page)

Trade reporting (used where no primary was retrievable):
- Walmart one-third conversion and ~200,000 products: WIRED, Mar 18 2026, https://www.wired.com/story/ai-lab-walmart-openai-shaking-up-agentic-shopping-deal/ (Board-confirmed; URL resolves, but my content fetch is blocked), corroborated by Martech, Mar 20 2026, https://martech.org/walmart-says-chatgpt-checkout-converted-3x-worse-than-its-own-website/
- Amazon blocks Muse: Adweek, Sept 21 2026, https://www.adweek.com/commerce/amazon-locks-out-metas-muse-in-agentic-shopping-standoff/
- Amazon blocks Muse, with Amazon spokesperson quotes: GeekWire, https://www.geekwire.com/2026/amazon-blocks-metas-muse-ai-assistant-in-new-standoff-over-agentic-shopping/
- Microsoft Copilot Checkout, Jan 2026: Axios, https://www.axios.com/2026/01/08/microsoft-ai-copilot-checkout (used only for "merchant remains merchant of record"; current rollout status not verified)

### 14. Claims that remain unproven
- Agent-initiated transaction volume, from anyone.
- Whether native AI checkout converts worse in general or only in Walmart's early implementation; how many merchants use OpenAI's native checkout today.
- Basket, return and repeat-purchase effects of AI-surface orders.
- Any link between a product data change and recommendation outcomes, with a control.
- A consideration denominator for AI visibility.
- Production error, reversal or intervention rates for merchant-side agent writes.
- Cross-network acceptance of agent verification; a liability framework for authorized agent mistakes; false-decline data.
- Personal Agent Protocol in production (spec unpublished as of Oct 12).
- Performance of sponsored placements inside assistants.
- Uptake of Amazon's multichannel operating tools; Amazon's off-Amazon data commitment is unaudited.
- Whether a standing rule counts as consent in a dispute.
- Whether Amazon's auto-buy requires a final confirmation at execution (Amazon's page does not say).

### 15. 2027 signal tracker
See DRAFT BODY (12 signals, three columns).

### 16. Changelog entry (proposed, for docs/04_CHANGELOG.md on approval)

> **Release 1.39 - AI Commerce 2027 rebuilt around authority (2026-10-XX)**
> **What:** Full refresh of `/ai-commerce-2027`. H1 becomes "AI Commerce 2027" with the dek "How the commerce operating model changes when software can act." The eight shifts become nine, organized by where authority moves: discovery, the website handoff, the software interface, measurement, trust, advertising, merchant operations, the operating layer and governance. Adds a five-line executive summary, a definition of AI commerce with authority as the boundary, an authority column on the stack, a "What changed in this update" section, verdicted counterarguments and a three-column 2027 signal tracker. Shift fields restructured to What changed / Evidence / Why it matters / Operator consequence / What is still unproven / Updated view.
> **Why:** The September edition omitted the strongest counter-evidence of 2026 (Walmart's roughly one-third conversion for native checkout inside ChatGPT, and OpenAI's shift toward discovery and merchant-controlled checkout), and the newest evidence moved authority to the merchant side faster than to the shopper side. The page should get better as evidence improves.
> **Impact:** Shift 02 reframed: the website stops being the mandatory handoff, not the inevitable loser, with native AI checkout as one of several competing architectures. Every shift now links its primary sources directly. Shift 07 strengthened. New Shift 08 flagged as least proven. The protected sentence is retained.
> **Follow-ups:** Regenerate the OG image if the H1 changes; move `LAST_UPDATED` and `STATIC_LAST_MODIFIED.aiCommerce2027` together; update Shift 05 when PAP v0.1 publishes.

**Implementation note (layout change APPROVED by the Board 2026-10-12):** the new shift fields and the authority column change the `Shift` type and the renderer in `page.tsx`. That is a layout change, not a data edit. The Operating System's "routine update is a data edit" rule doesn't cover it, so it needs explicit approval. Section nav labels ("Eight shifts") and the comparison table would also change.

### 17. Exact source-body word count
6,146 words (5,717 prose + 429 in the two tables), headings excluded, of which 380 are evidence-note and primary-source link lines. Excluding those lines, 5,766. Inside the 4,000 to 6,000 target either way.

### 18. Zero em dashes
Confirmed: 0 in the whole file.

### 19. Zero en dashes
Confirmed: 0 in the whole file.

### 20. Confirmation
Nothing published, committed, pushed, written to Supabase, added to the sitemap, or generated as an asset. No production file modified. This draft file is the only file created.
