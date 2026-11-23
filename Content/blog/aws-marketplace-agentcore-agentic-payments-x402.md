# AWS Marketplace Agentic Payments With AgentCore (x402)

**Status:** Published 2026-11-23 (Release 2.06). Supabase id `ee5a5896-4f44-4c19-8ae6-5d50da081414`. Senior-editor edits 1 to 5 applied; final decision PUBLISH.
**Type:** Authority / thesis article
**Assignment:** TRH Editorial Board, 2026-11-23
**Gates:** Research PASS, Editorial PASS, SEO/GEO PASS (authority), Corpus advancement PASS (narrowed). Final: WRITE.
**Source-body word count:** see SOURCE-BODY WORD COUNT below.

---

## SEO PACKAGE

- **title (editorial H1):** AWS Treats Agentic Commerce as Governed Procurement
  - Brief's preferred H1 was "AWS Turns Agentic Commerce Into Governed Procurement". Recommended change: "Turns" says AWS converted the whole field, which is the over-generalization the brief warns against. "Treats" says this is how AWS has built its version. Either is defensible; the editor decides.
  - Alternative: "AWS Lets AI Agents Buy Software. The Budget Comes First" (narrower: products include APIs, data and content, not only software).
- **meta_title:** AWS Lets AI Agents Buy Through Marketplace With AgentCore (57 characters)
- **slug:** aws-marketplace-agentcore-agentic-payments-x402
- **category:** E-commerce Strategy (matches the Visa, BILL and Billtrust article)
- **meta_description:** AWS now lets AgentCore agents buy selected Marketplace services per request. What matters is how identity, budgets and policy bound the agent's authority. (155 characters; the brief's version was 170)

---

## DRAFT BODY

### AWS Treats Agentic Commerce as Governed Procurement

On November 19, AWS Marketplace began letting AI agents buy select products one request at a time. An agent built on Amazon Bedrock AgentCore can find a paid API, data source or content mid-task, pay for one call in U.S. dollars and have it billed to the company's existing AWS account. No crypto wallet, seller sign-up or API key.

Until now, a person usually signed up, added a payment method and created a key. The launch removes that step. It does not remove the person. It moves them.

My reading is that AWS has not handed an agent a corporate card. It has made purchasing a configurable permission that companies can bound by identity, a session budget, seller rules and a billing system that records every charge. That may be where agentic commerce becomes operational first.

### What AWS launched

The launch adds AWS Billing as a payment option in AgentCore payments, generally available since August. Only some listings qualify: API-based products whose sellers chose what AWS calls Agentic Commerce, passed the same registration and review as other Marketplace sellers and integrated AWS's x402 SDK. AWS supports only x402's exact scheme for now, so each request has a fixed, quoted price.

AWS did not invent x402. It started at Coinbase and is now stewarded by the x402 Foundation at the Linux Foundation, where AWS is a member. It repurposes the HTTP 402 Payment Required status so a server can ask for payment inside an ordinary web request. Stablecoins are its main use, but not a requirement. AWS's version settles to a bill.

AWS says it works in every Region where AgentCore payments runs, though its Buyer Guide says AWS Marketplace processes every such payment in US East (N. Virginia), in U.S. dollars.

### How a purchase happens

1. An administrator connects AgentCore payments to AWS Billing and creates a role that lets AWS Marketplace create agreements and meter usage.
2. A developer creates a payment session for the task, which expires and can carry a spending limit.
3. The agent finds a product, optionally through a Marketplace connector that returns only x402-enabled listings.
4. The seller's endpoint answers with HTTP 402 and a signed quote.
5. AgentCore payments checks the remaining session budget and, if the purchase fits, returns a payment token valid for five minutes.
6. The agent retries with the token and receives the resource.
7. AWS Marketplace meters the charge to the company's bill. The first purchase from a seller creates an agreement.

### Where the authority sits

The agent can choose among the services its environment permits. It cannot set the seller's price, and in AWS's recommended separation-of-duties pattern, it cannot create or expand its own payment session.

Payment sessions are time bounded and can include a spending cap. AWS's lower-level documentation calls the budget optional, while its security guidance recommends setting the minimum the task needs. When a cap is configured, AgentCore payments enforces it outside the model, so prompt injection cannot raise it.

The pattern lives in IAM: the management role is explicitly denied payment processing, and in AWS's sample the agent's role can pay but cannot create sessions. That is separation of duties, written into permissions.

AWS Marketplace checks each quote's signature against the seller's registered key and rejects an altered price. If the budget cannot cover it, the payment fails and nothing is charged.

Where an organization uses Private Marketplace, its agents can buy only the products it allows. AWS says developers can also restrict approved sellers through AgentCore policy. Transactions appear in AWS CloudTrail and Cost Explorer.

AWS caps a single AWS Billing payment at $10,000. That is a technical ceiling, not a budget. The session budget in AWS's own sample is five cents.

### What changes compared with Visa and BILL

In October, [Visa, BILL and Billtrust put an agent into supplier payments](/blog/visa-bill-billtrust-ai-agent-b2b-payments) with a deliberately narrow mandate. A person approves a specific invoice. The supplier and amount are known. The agent executes a decision already made.

AWS moves the human decision up a level. A person approves the boundary: the account, the budget, the products the organization allows. Inside it, the agent can meet a paid input nobody named in advance and choose to buy it. In AWS's walkthrough, a research agent needing this week's news compared two Marketplace listings and paid one cent for a single search. The walkthrough does not show a person approving that specific one-cent request at execution time. The documented flow requires no per-purchase approval, though developers can switch off automatic payment to keep a person in the loop.

That is more freedom than the Visa pilot grants, and less than it sounds. NPCI's chairman argued that [AI may decide what to buy but should not decide that money moves](/blog/npci-upi-ai-agent-authorization). AWS draws the line in the same place. The agent decides what to buy. The infrastructure decides whether money can move.

On the same day, AWS placed approval differently for a different purchase. Its conversational checkout in Marketplace agent mode, which covers pricing, license terms and purchase-order thresholds, requires human confirmation before a purchase completes. Human approval did not disappear. It was placed according to what is being bought.

### Why this may work before consumer shopping

Agentic purchasing may scale first where most of the hard questions are already answered:

- the buyer has an organizational identity;
- the billing relationship already exists;
- the marketplace controls which sellers are eligible;
- the price is quoted and signed before anything executes;
- the organization can impose a defined spending ceiling;
- every transaction is attributed and auditable;
- the purchase supplies an input to a task someone already assigned.

Consumer shopping leaves more of those open. [Walmart's Agent Profiles](/blog/walmart-agent-gateway-agent-profiles) also give an agent a spending limit, but that agent still has to read the shopper's preferences, judge quality, decide whether to buy and handle returns. In AWS's design, buyer, payer, marketplace and biller sit inside one existing relationship, and the purchase is a step toward the goal, not the goal.

Procurement does not disappear either. The first purchase still creates a Marketplace agreement, which AWS Marketplace creates and accepts for the account through a role the account set up. The contract step is compressed into a standing permission, not removed.

### What it does not show

AWS has disclosed no transaction volume, participating seller or customer counts, or return on investment. Tavily is the only seller named in AWS's technical launch post, and AWS has not said how many AgentCore customers have enabled the capability.

Money moves on ordinary schedules. Charges appear on the monthly bill, sellers are paid through standard Marketplace disbursement, and refunds follow the seller's own policy as a billing adjustment.

This is one company's capability inside its own marketplace, where AWS controls the buyer's account, the seller's listing and the bill. That makes it workable, and hard to transfer to open commerce.

It still suggests where the first durable form may appear. Not an agent that shops. An agent permitted to buy, inside a boundary someone else wrote.

If your agents could buy the inputs they need tomorrow, who in your organization would set the budget, and who would be allowed to raise it?

---

## SOURCE-BODY WORD COUNT

1,199 words: the DRAFT BODY without the H1, with headings and list items included and link URLs excluded (same convention as the Visa, BILL and Billtrust file). Zero em dashes, zero en dashes, one closing question, no Key findings box.

---

## GATE DECISIONS

- **RESEARCH: PASS.** All 27 checks resolved from AWS primary documentation, except for the three open questions listed below. None of the three is load-bearing in the body.
- **EDITORIAL: PASS.** Senior-editor revision: governance is now described as configurable, not automatic. The session cap is optional in the API, recommended by AWS, and enforced outside the model when configured. Original note: the thesis holds, with one correction to the brief. The agent's freedom is real but narrower than "an agent decides to buy". Three things bound it: a session limit the developer sets (optional in the API), Private Marketplace where it is used, and a signed fixed price. AWS also announced approved-seller policy, but I could not find documentation showing how it applies to the paid call (see open question 1).
- **SEO/GEO: PASS (authority).** Every target question has a direct, sourced answer in the body: what the capability is, can Bedrock agents buy software, AgentCore payments, the x402 flow, the crypto wallet, billing to AWS, spending limits, seller restrictions, CloudTrail and governed procurement. Day-of coverage restates the launch posts (dev.to, Constellation Research, trade blogs). None of it compares the approval model with Visa and BILL, or with AWS's own agent-mode checkout on the same day. The agent-mode contrast is the page's citable original observation.
- **CORPUS ADVANCEMENT: PASS (narrowed).** See OVERLAP REVIEW.
- **FINAL: WRITE.** Hold for senior-editor review.

---

## OVERLAP REVIEW

Scanned `Content/blog`, `scripts` and `src`. Zero prior occurrences of x402, AgentCore, AWS Marketplace, Machine Payments Protocol or stablecoin.

| Article | Owns | This draft |
| --- | --- | --- |
| Visa's B2B AI Agent Pilot (Oct 20) | An agent executes a payment a person already approved. Lianlian is mentioned in one paragraph as an agent acting "within pre-defined spending controls". | New: a documented mechanism for the envelope that the Lianlian paragraph only named. It covers who sets the limit, who can spend against it, what enforces it, and how the price is fixed. |
| AI Can Decide What to Buy (NPCI, Sep 10) | Decision separated from money movement at the rail. | The same line, enforced by cloud infrastructure rather than a payment rail. Linked once and not re-argued. |
| Walmart's Agent Profiles (Oct 22) | Consumer agents with spending limits, no card access, approval by default. | **The closest neighbor.** Conceded in the body. New: the purchase is an input to a task, sellers are unknown in advance and vetted by the marketplace, roles are separated, and the agreement is created automatically. |
| Agentic Commerce Is Moving From AI Buyers to AI Operators (Ant, Sep 18) | Delegated business authority over a merchant's own money. | Not linked. Ant's agents move the merchant's funds; AWS's agents buy inputs. Available as the alternative fourth link. |
| Agentic Commerce Is Starting to Standardize the Buyer (KYA) | Agent identity across networks. | Not touched. Identity here is plain AWS IAM, not KYA. |
| OpenAI Business Hub | Participation versus influence for businesses in ChatGPT. | Not relevant beyond the general idea of bounded control. Not linked. |
| AI Commerce 2027, Shift 09 | "Approval is moving from the transaction to the rule." | Evidence for the existing principle, not a change to it: when configured, the rule is enforced in IAM and the payment service, not in a prompt. Tracker row only. |

**Verdict.** "Agents can now pay within spending limits" would FAIL, because Walmart and Lianlian already cover it. What passes is narrower:
- AWS documents a complete mid-task purchasing loop.
- In that loop, a person approves the boundary rather than the purchase.
- Infrastructure enforces the boundary through separated roles.
- On the same day, AWS kept per-purchase human confirmation for a different kind of purchase.

That advances the corpus from "agents execute approved decisions" (Visa and BILL) to "agents make bounded purchase decisions inside an approved envelope", without overstating the agent's freedom.

---

## RESEARCH NOTES (the 27 checks)

1. **Launch date.** The What's New post is dated "Posted on: Nov 19, 2026". The ML Blog and the Marketplace blog are both dated 19 NOV 2026, and the Marketplace post is tagged re:Invent 2026.
2. **Status.** Nothing in AWS's launch materials calls the Marketplace capability a preview. AgentCore payments went to preview in May and reached general availability on 18 AUG 2026 (AWS ML Blog GA post). The body says "generally available since August" about AgentCore payments only. It does not call the Marketplace capability GA in so many words.
3. **Availability wording, resolved.** What's New: "available in all AWS Regions where AgentCore payments is available." Buyer Guide: "Agentic Commerce is available in the US East (N. Virginia) Region (us-east-1)." The Buyer Guide's service-linked-role page reconciles the two: "AWS Marketplace processes every payment in the US East (N. Virginia) Region. If AgentCore payments receives a payment in another Region, it sends the payment to US East (N. Virginia) for processing." The AgentCore Region table lists payments in 12 Regions: N. Virginia, Ohio, Oregon, Frankfurt, Ireland, London, Milan, Paris, Spain, Stockholm, Singapore and Sydney. The body says neither "global" nor "U.S. only".
4. **What agents can buy.** "x402-enabled software, APIs, data, and content" (ML Blog). The Seller Guide limits this to API-based AI agent or tool products using the Agentic Commerce delivery option.
5. **Only selected listings.** What's New: "select products". The Gateway connector's SearchListings "returns only x402-enabled listings." Agentic Commerce is a separate product type: a product supports it or registration-based access, never both, and existing products cannot add it.
6. **Per request, USD.** Confirmed by What's New and the Seller Guide: "quotes are in US dollars (USD)". The AWS Billing payload uses the asset "iso4217:USD".
7. **Existing AWS bill.** "Charges settle on their existing AWS bill." AWS bills the account that owns the Payment Manager.
8. **Crypto.** "No crypto wallet required." AWS Billing uses the service-managed instrument aws.agentcorepayments.awsbilling.v1, not a wallet. AgentCore payments separately supports Coinbase and Stripe (Privy) stablecoin wallets for non-Marketplace x402. The body says AWS's version settles to a bill.
9. **x402 origin.** The x402 Foundation release (Jul 14, 2026) quotes Coinbase: "x402 was started at Coinbase." Coinbase contributed the protocol to the Linux Foundation's x402 Foundation, and AWS is listed as a premier member. The Seller Guide calls AWS's use "an extension of the open x402 protocol". It uses network "aws:base" instead of a blockchain.
10. **402 and the signed quote.** The seller answers with HTTP 402 and a signed quote in the PAYMENT-REQUIRED header. The seller signs with a quote-signing key registered as a JWKS URL or an AWS KMS key. AWS Marketplace verifies the signature, "which means a quote with an altered price gets rejected". The agent retries with a PAYMENT-SIGNATURE header.
11. **Exact scheme only.** "At launch, AWS Billing supports the x402 exact scheme, where the seller quotes a fixed price for each request." The upto scheme exists for wallet payments only (August release notes).
12. **Payment tokens.** ProcessPayment with paymentType AWS_BILLING_X402 returns a signed JWT payment token, "valid for 5 minutes after it's issued". Binding the token to a key with DPoP is optional. A retry that reuses the clientToken within 8 hours charges the budget once.
13. **Payment session.** A "time-bounded payment context that optionally enforces a spending budget" (maxSpendAmount and an expiry). The security guidance: "The infrastructure layer enforces these limits, so prompt injection and model non-determinism cannot override them." The ML Blog: "the payment session cap is enforced by AgentCore payments, so an agent is unable to overspend."
14. **Per session or per transaction.** The documented customer budget is per session. A per-transaction cap appears only in AWS's sample: a $0.05 session budget and a $0.02 per-request cap. The cap appears to be enforced by the sample's agent code or plugin configuration, not by the service; I could not confirm a service-level per-transaction setting. The service enforces only the $10,000 single-payment ceiling.
15. **$10,000.** "A single AWS Billing payment must be greater than USD $0.00 and can't exceed USD $10,000.00" (Process a payment, Limitations). This is a technical ceiling. The body separates it from the budget.
16. **Approved sellers.** What's New: "Customers can set spending limits, approved sellers, and guardrails before agents transact." ML Blog: "set spending limits and approved sellers using AgentCore policy." The mechanism is only partly documented. See open question 1. The body attributes the capability to AWS ("AWS says").
17. **Private Marketplace.** "If your organization uses Private Marketplace, agents can only buy the products it allows." The Seller Guide says AWS Marketplace "checks that the buyer can buy the product" before it issues a token.
18. **IAM and the service-linked role.** AWSServiceRoleForMarketplaceAgenticCommerce lets AWS Marketplace read the catalog and agreements, create and accept purchase agreements for the buyer, and meter usage. The five-role IAM model gives the management role an explicit Deny on ProcessPayment: "prevents a single compromised identity from both creating sessions with unlimited budgets and executing payments." In the ML Blog sample, the session role "can set budgets but can't pay" and the agent role "can pay but can't create sessions".
19. **Audit.** CloudTrail and Cost Explorer (What's New, ML Blog). AgentCore Observability dashboards in CloudWatch (Marketplace blog). Metrics include session remaining budget and total budget (observability doc). The body names CloudTrail and Cost Explorer only, for length.
20. **Per-transaction approval.** No step in the documented flow requires per-purchase approval. The Strands integration can turn off automatic payment processing "to keep a human or custom logic in the loop". Separately, Marketplace agent-mode checkout says "Human confirmation is required before a purchase is complete." That is a different buying path, and the body keeps the two apart.
21. **First purchase.** "An agent's first purchase from a seller creates an agreement for the AWS account with that seller, and AWS Marketplace automatically tracks later purchases against it." The service-linked role "creates a purchase agreement ... and accepts it on your behalf."
22. **No seller registration, subscription or credential.** Buyer Guide: "You don't subscribe to the product, register with the seller, or manage API credentials." The launch page has "no step to register with the seller".
23. **Refunds.** Buyer Guide (Paying for products): contact the seller; "Refunds follow the seller's refund policy"; approved refunds arrive "as a billing adjustment after the charge appears on your invoice." I found no dispute process beyond this. A secondary dev.to post claims a 24-hour escrow with refund reversals. AWS documentation does not support that, so the draft does not use it.
24. **Seller requirements.** Sellers register with AWS Marketplace, configure Agentic Commerce, and integrate the x402 SDK. Marketplace blog: they go "through the same registration and review process as other AWS Marketplace sellers." The endpoint must be a static HTTPS URL. Listings get one usage-based public offer, with no private offers, free trials or free pricing. Sellers are paid "through standard AWS Marketplace disbursement". Tavily's "KYC verified providers" is a seller quote and is not used as an AWS claim.
25. **Can the agent change the price.** No. The price is fixed and signed by the seller, any change to the quote token invalidates its signature, and an altered quote is rejected.
26. **Volume, adoption, ROI.** Not disclosed anywhere I read. The only transaction AWS shows is its own sample run: one payment of $0.01.
27. **Corpus advancement.** PASS, narrowed. See OVERLAP REVIEW.

---

## SOURCES

**Primary (all read in full on 2026-11-23)**

- AWS What's New, "AWS Marketplace now supports agentic payments with AgentCore," Nov 19 2026: https://aws.amazon.com/about-aws/whats-new/2026/11/marketplace-agentic-payments-agentcore/
- AWS Machine Learning Blog, "Enable AI agents to pay for AWS Marketplace x402 products with Amazon Bedrock AgentCore payments," Nov 19 2026: https://aws.amazon.com/blogs/machine-learning/enable-ai-agents-to-pay-for-aws-marketplace-x402-products-with-amazon-bedrock-agentcore-payments/
- AWS Marketplace Buyer Guide, "AI agent products" (Agentic Commerce section): https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-ai-agents-products.html
- Amazon Bedrock AgentCore Developer Guide, "Process a payment" (Pay with AWS Billing and its Limitations): https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/payments-process-payment.html
- AWS Marketplace Blog, "AWS Marketplace helps humans and agents buy, deploy, and transact," Nov 19 2026: https://aws.amazon.com/blogs/awsmarketplace/aws-marketplace-helps-humans-and-agents-buy-deploy-and-transact/

Supporting AWS documentation:
- AgentCore payments overview: https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/payments.html
- AgentCore payments core concepts: https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/payments-concepts.html
- AgentCore payments IAM roles: https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/payments-iam-roles.html
- AgentCore payments security best practices: https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/payments-security-best-practices.html
- AgentCore payments, create a session: https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/payments-create-session.html
- AgentCore payments framework integrations: https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/payments-framework-integrations.html
- AgentCore Gateway, AWS Marketplace connector target: https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/gateway-target-connector-aws-marketplace.html
- AgentCore Region table: https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/agentcore-regions.html
- AgentCore release notes: https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/release-notes.html
- Buyer Guide, service-linked role for AgentCore payments: https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-service-linked-role-agentic-commerce.html
- Buyer Guide, paying for products (Agentic Commerce and refunds): https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-paying-for-products.html
- Seller Guide, listing Agentic Commerce products: https://docs.aws.amazon.com/marketplace/latest/userguide/agentic-commerce-products.html
- AWS ML Blog, AgentCore payments GA, Aug 18 2026: https://aws.amazon.com/blogs/machine-learning/amazon-bedrock-agentcore-payments-is-now-generally-available-enabling-agents-to-transact-safely-and-autonomously-at-scale/
- x402 Foundation, operational launch, Jul 14 2026 (protocol origin and governance only): https://x402.org/linux-foundation-announces-operational-launch-of-x402-foundation-to-standardize-internet-native-payments-for-ai-agents-and-applications/

**Secondary (used only to surface questions; none is cited in the body)**

- Constellation Research, "AWS Marketplace adds bevy of agentic commerce agents, removes approval friction for purchases": https://www.constellationr.com/insights/news/aws-marketplace-adds-bevy-agentic-commerce-agents-removes-approval-friction-purchases
- dev.to, "AWS Marketplace Lets an Agent Pay Per Request and Settle on Your AWS Bill": https://dev.to/neticslabs/aws-marketplace-lets-an-agent-pay-per-request-and-settle-on-your-aws-bill-d9g
- dev.to, "Two Rails Called x402: AWS Invoice vs Wallet-Signed USDC": https://dev.to/minia2a/two-rails-called-x402-aws-invoice-vs-wallet-signed-usdc-2ohf

These raised two questions. The first was the agent-mode auto-approve setting, which AWS's launch post covers as "Human confirmation is required". The second was escrow and refund timing, which AWS documentation does not support, so it is excluded. Agentic-commerce aggregators were not used.

---

## UNRESOLVED FACTUAL QUESTIONS

1. **How the approved-seller policy binds the paid call.** AWS says approved sellers are set "using AgentCore policy". The security guide describes Policy as evaluating "every call through the Gateway". Two other documents complicate this:
   - The Seller Guide says Agentic Commerce products cannot enable AgentCore Gateway integration.
   - In AWS's sample, the paid request (`fetch_paid_api`) goes straight from the agent to the seller; the Gateway handles discovery only.

   The same security guide also says "AgentCore payments does not enforce payTo restrictions server-side". That guidance is written for wallet payments, and I could not confirm whether it applies to AWS Billing quotes.

   Until AWS documents the mechanism, the body attributes approved sellers to AWS and does not explain how they are enforced.
2. **Whether an AWS Billing session can run with no spending limit.** The concepts and create-session pages describe the limit as optional. The security guide says every payment runs in a session "that has a maximum spend amount". The body says the limit is the developer's to set and is optional in the API.
3. **Whether a service-level per-transaction cap exists.** The documentation shows only the $10,000 ceiling. The sample's $0.02 per-request cap appears to be agent-side configuration. The body does not claim per-transaction limits.

Lesser points, not used in the body:
- Who outside the U.S. can buy. Agentic Commerce processes in us-east-1 in USD; buyer-country eligibility is not stated.
- Whether Marketplace buying policies (approval routing by spend threshold) apply to x402 purchases. The launch post describes them for agreement-based purchases.

---

## AI COMMERCE 2027 RECOMMENDATION

**Tracker row only (senior-editor decision, 2026-11-23). No change to Shift 09 text.** The shift's existing principle, "Approval is moving from the transaction to the rule," already covers this article's thesis. The AWS launch is evidence for that principle, not a change to it.

Tracker row:

- **date:** 2026-11-19
- **org:** AWS
- **development:** AgentCore agents can buy select x402-enabled AWS Marketplace products per request in USD, billed to the existing AWS account; fixed signed quotes, optional session spending caps, Private Marketplace limits, CloudTrail audit
- **affects:** Governance
- **evidenceType:** Company announcement and documentation
- **changed:** Companies can approve a budget and an eligible catalog rather than each purchase; in AWS's recommended pattern the agent's role cannot create or expand its own payment session; no volume or adoption disclosed
- **href:** /blog/aws-marketplace-agentcore-agentic-payments-x402 (on publication)

The METHOD line ("no published agent-initiated transaction volume") stays true, because AWS disclosed none. Under the living-research gate, the row requires bumping `LAST_UPDATED` and `STATIC_LAST_MODIFIED.aiCommerce2027` in the same production cycle.

---

## INTERNAL-LINK PLAN

| Anchor | Target | Why |
| --- | --- | --- |
| Visa, BILL and Billtrust put an agent into supplier payments | /blog/visa-bill-billtrust-ai-agent-b2b-payments | The core comparison: approved instruction versus approved boundary |
| AI may decide what to buy but should not decide that money moves | /blog/npci-upi-ai-agent-authorization | AWS draws the decision/money-movement line in the same place, enforced by infrastructure when configured |
| Walmart's Agent Profiles | /blog/walmart-agent-gateway-agent-profiles | Closest corpus neighbor (consumer spending limits, no card for the agent); linking it concedes the overlap and sharpens the difference |
| (none in body) | /ai-commerce-2027 | Optional fourth link. The tracker row is accepted, so the row's forward link to this article provides the reciprocal connection either way |

Three links in the body (cap is four), all returned 200 on 2026-11-23 after the revision. Alternative fourth: /blog/ant-international-account-for-agent-merchant-operations.

## EXTERNAL SOURCES (to link on publication, each anchor once)

- AWS What's New, Nov 19 2026: https://aws.amazon.com/about-aws/whats-new/2026/11/marketplace-agentic-payments-agentcore/ (anchor: "began letting AI agents buy select products")
- AWS ML Blog, Nov 19 2026: https://aws.amazon.com/blogs/machine-learning/enable-ai-agents-to-pay-for-aws-marketplace-x402-products-with-amazon-bedrock-agentcore-payments/ (anchor: "In AWS's walkthrough")
- AWS Marketplace Buyer Guide, AI agent products: https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-ai-agents-products.html (anchor: "its Buyer Guide")
- AgentCore Developer Guide, Process a payment: https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/payments-process-payment.html (anchor: "caps a single AWS Billing payment at $10,000")
- AWS Marketplace launch post, Nov 19 2026: https://aws.amazon.com/blogs/awsmarketplace/aws-marketplace-helps-humans-and-agents-buy-deploy-and-transact/ (anchor: "conversational checkout in Marketplace agent mode")
- AgentCore payments security guidance: https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/payments-security-best-practices.html (anchor: "its security guidance")
- AgentCore payments framework integrations: https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/payments-framework-integrations.html (anchor: "switch off automatic payment")
- x402 Foundation launch, Jul 14 2026: https://x402.org/linux-foundation-announces-operational-launch-of-x402-foundation-to-standardize-internet-native-payments-for-ai-agents-and-applications/ (anchor: "the x402 Foundation at the Linux Foundation")
