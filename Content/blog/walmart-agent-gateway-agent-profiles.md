# Walmart Agent Gateway and Agent Profiles

**Status:** PUBLISH APPROVED (senior editor, 2026-10-22), shipping with the minimum March correction.
**Type:** Authority / thesis article with search-reference value
**Assignment:** TRH Editorial Board, 2026-10-21
**Gates:** Research PASS, Editorial PASS, SEO/GEO PASS. Corpus correction REQUIRED. Senior editor (2026-10-22): seven edits applied, then two March-correction replacements; PUBLISH APPROVED.
**Source-body word count:** 1,211 excluding the H1, with section headings and list items included; 1,171 prose only, excluding all headings. Method: whitespace-separated words containing a letter or digit, link URLs not counted.

---

## SEO PACKAGE

- **title (editorial H1):** Walmart's Agent Profiles Show How Retailers Can Admit AI Shoppers Without Giving Up Control
- **meta_title:** Walmart Agent Gateway and Agent Profiles Explained
- **slug:** walmart-agent-gateway-agent-profiles
- **category:** E-commerce Strategy
- **meta_description:** Walmart announced Agent Profiles and an invitation-only Agent Gateway beta. How outside AI agents can shop for customers, and what Walmart still controls.

---

## DRAFT BODY

### Walmart's Agent Profiles Show How Retailers Can Admit AI Shoppers Without Giving Up Control

On October 21, Walmart announced three things for AI agents that shop on a customer's behalf: Agent Profiles, the Walmart Agent Gateway, and terms that agents must follow. Together, Walmart says, they will let customers shop with Walmart and Sam's Club "through the apps and agents they choose."

The interesting part is not that Walmart will allow outside agents. It is how. Walmart's announced model treats an outside agent as a separate user inside the customer's account, with its own identity and limits, rather than as the customer.

### What Walmart announced

- **Agent Profiles, launching in the next month.** Each agent the customer authorizes gets a dedicated profile within the account, and its purchases appear separately from the customer's own. The customer chooses between approving every purchase or allowing purchases within a spending limit, with $50, $100 and $200 as Walmart's examples, and can delete a profile at any time.
- **The Walmart Agent Gateway, an early beta.** Walmart says it will give agents a faster, more reliable way to shop using MCP, the Model Context Protocol, an open standard for connecting AI applications to tools and data. The gateway page says it connects agents through Sparky, Walmart's own assistant, and replaces website scraping with product and fulfillment data "straight from the source." Access is limited and invitation-only for companies and developers.
- **Terms for agents.** Purchases require approval by default, and Walmart may require more approvals even within a spending limit. Agents do not receive payment-card information and cannot add or change payment methods. They may access only what the task needs and the customer allows. Walmart's returns process applies, including when an agent does not act as intended, and agents that break the terms will be blocked.

Walmart has not named any companies in the beta or disclosed any usage. This is an announced model, not a measured one.

### The agent is becoming a separate account role

Walmart describes today's problem plainly. When a customer uses an AI agent now, the agent signs in with the customer's account, and every purchase, whether made by the person or the agent, appears together.

That arrangement collapses four things into one login: who the customer is, how they pay, what they have bought, and who is allowed to buy. Agent Profiles start to pull those apart. The customer still owns the account. The agent gets its own profile, limited authority and a visible purchase record. Payment stays attached to the account. The agent may initiate an authorized purchase, but it does not receive the card details or control the payment method. Walmart's own analogy is adding an authorized user to a credit card, with a spending limit and a statement you can check.

That is why this is more than giving a bot an API. A gateway provides the route. The delegated role determines which agent is using it, what it may do, what it may spend, how its actions are recorded and when its authority ends.

### Customer authorization and retailer acceptance are different permissions

Two separate grants run through the model. The customer decides what the agent may do: require approval for every purchase, or spend up to a limit, and revoke whenever they like. Walmart decides what it will accept: the gateway page lists category restrictions, rate limits and compliance guardrails, and Walmart keeps the right to require extra approval and to block an agent outright.

That is the same split I described when Sierra and Meta announced [Personal Agent Protocol](/blog/personal-agent-protocol-ai-commerce), where customers decide what access to give and companies set what agents can do. Walmart is one of that protocol's named development partners, but its announcement does not say the gateway implements it, and I would not assume it does. The resemblance is in the permission model, not a confirmed standard.

Walmart's updated terms of use add the accountability side. Actions an authorized agent takes within the permissions a customer granted are treated as the customer's own, and Walmart says it is not responsible for a third-party agent's conduct, including misunderstanding instructions. Walmart separately says its normal returns process applies when an agent does not act as intended. That recourse does not change who authorized the purchase.

### Why the gateway matters beyond access

Walmart's terms already require agents to identify themselves and respect rate limits. The gateway gives them a reason to comply: a faster, more reliable path than clicking through pages built for people. That matters because rules are easier to enforce on a route you built than on one an agent improvised. It is the commerce version of the [permission stack](/blog/ai-visibility-permission-stack-cloudflare) that crawler controls became, where access stopped being one switch and became separate permissions.

Data is part of it too. Walmart says the gateway can help an agent find a customer's usual items, such as a preferred bread or brand of milk, without sharing the broader purchase history. Its terms also say authorizing an agent means consenting to share the account and order information reasonably necessary for the authorized task. Both can hold. Where "reasonably necessary" ends is a detail Walmart has not published.

Pricing carries over from Walmart's September customer letter: agents see the same prices as people, with offers and fees shown before purchase. It is the same negative permission I wrote about when Walmart said it would [price the product, not the person](/blog/walmart-sparky-ai-personalization-pricing-governance).

### What changed in Walmart's strategy

In March, I wrote that Walmart had [moved Sparky into ChatGPT and Gemini](/blog/walmart-sparky-chatgpt-gemini) and concluded that "Walmart won't let anyone else's AI sell Walmart products." The evidence then supported a retailer-owned-agent strategy. This announcement makes that sentence wrong.

Walmart has not abandoned Sparky. The gateway connects outside agents through it. What changed is where Walmart draws the line. It no longer has to own the agent. It has to own the permissions and transaction infrastructure beneath it. The updated conclusion is narrower and, I think, more durable: Walmart says it will let outside agents shop for customers, and its announced model routes identity, approvals, data access, payment and enforcement through Walmart.

The comparison with Amazon is sharper than open versus closed. According to Axios, when Amazon blocked Meta's Muse agent, it said it had not authorized Muse to access customer accounts, scrape data or process transactions. Those are the three things Walmart's model places under its own control. The disagreement is about who builds the sanctioned path, and whether one exists at all.

### What remains unknown

Which companies are in the beta, and whether any are processing real orders. When Agent Profiles reach every account. Which categories are restricted, and what triggers an extra approval. What happens to agents that keep shopping through the website instead of the gateway. And whether customers want delegated purchasing at all; Walmart's announcement itself says it will not be for everyone.

### What retailers and commerce operators should learn

Treat the agent as a user type, not a login. Separate what the customer authorizes from what you will accept. Give agents a better route than scraping so your rules apply. Keep payment credentials out of the agent's hands, keep its purchases visible, and make revocation immediate.

Openness, in this model, is permissioned, selective and revocable. If an outside agent arrived at your store tomorrow, would your systems know it was not the customer?

---

## INTERNAL-LINK PLAN

| Anchor | Target | Why |
| --- | --- | --- |
| Personal Agent Protocol | /blog/personal-agent-protocol-ai-commerce | Customer grant versus business grant; Walmart is a named PAP partner but has not tied the gateway to it |
| permission stack | /blog/ai-visibility-permission-stack-cloudflare | Access becoming separate permissions rather than one switch |
| price the product, not the person | /blog/walmart-sparky-ai-personalization-pricing-governance | The same-price commitment for agents restates Walmart's September negative permission |
| moved Sparky into ChatGPT and Gemini | /blog/walmart-sparky-chatgpt-gemini | The March conclusion this article explicitly updates |

Four internal links (cap is four). AI Commerce 2027 is left out of the body; the tracker row below makes the link reciprocal. Note that the March article is a pre-July legacy post (Tier 1 in `docs/legacy-content-triage-2026-10.md`); linking to it is deliberate, because this article corrects it, and the link should ship only together with the correction below.

## EXTERNAL SOURCES (to link on publication, each anchor once)

- Walmart, Oct 21 2026, "Walmart Makes It Possible for Agents to Shop on Behalf of Customers, While Keeping Customers in Control": https://corporate.walmart.com/news/2026/10/Making-It-Possible-for-Agents-to-Shop-on-Behalf-of-Customers (anchor: "Walmart announced three things")
- Walmart Agent Gateway beta page: https://www.walmart.com/cp/walmart-agent-gateway/1280482 (anchor: "The gateway page")
- Walmart.com Terms of Use, Section 16.L Authorized Agents (last updated Sept 21, 2026): https://www.walmart.com/help/article/walmart-com-terms-of-use/3b75080af40340d6bbd596f116fae5a0 (anchor: "Walmart's updated terms of use")
- Model Context Protocol documentation: https://modelcontextprotocol.io/introduction (anchor: "the Model Context Protocol")
- The Verge, Emma Roth, Oct 21 2026, "Walmart is inviting AI agents to shop for you": https://www.theverge.com/ai-artificial-intelligence/1015715/walmart-ai-shopping-agents (secondary; independently expands MCP as the Model Context Protocol; not linked in the body)
- Axios, Oct 21 2026, "AI shopping wars: Walmart welcomes AI agents while Amazon blocks Muse": https://www.axios.com/2026/10/21/walmart-amazon-agents-muse (anchor: "According to Axios")

---

## CORRECTION PLAN: `walmart-sparky-chatgpt-gemini` (published 2026-03-18)

This post is already Tier 1 in the legacy triage for its Instant Checkout framing. The Agent Gateway announcement adds a second, separate correction.

**Senior-editor sequencing (2026-10-22).** The new article publishes only when the March post has, at minimum: (1) the dated editor's note, (2) removal or replacement of the absolute "won't let anyone else's AI" claim (statement A), and (3) a link to the new article. The broader legacy cleanup (B to H, title, meta, excerpt, CTA) keeps its own sourcing trail and ships separately under the legacy triage. For the minimum pass, the editor's note drops its Instant Checkout sentence, since those corrections are not yet made:

> **Editor's note, October 2026.** This post's conclusion that "Walmart won't let anyone else's AI sell Walmart products" is no longer accurate. On October 21, 2026, Walmart announced Agent Profiles and an invitation-only Agent Gateway beta that gives participating companies and developers a controlled path for outside AI agents to shop for customers. See [Walmart's Agent Profiles Show How Retailers Can Admit AI Shoppers Without Giving Up Control](/blog/walmart-agent-gateway-agent-profiles).

**Statement A, approved replacement (senior editor, 2026-10-22):** "As of March 2026, Amazon had blocked Perplexity's shopping agent, while Walmart's approach was to send its own agent, Sparky, into other AI platforms. In October 2026, Walmart announced a model that also admits outside agents under Walmart-controlled permissions." This avoids replacing one absolute with another: reporting supports that Amazon blocked specific agents, not every outside agent.

The full combined plan below remains the proposal for the later legacy pass.

### 1. Statements now obsolete or materially misleading

| # | Location | Exact current text | Problem |
| --- | --- | --- | --- |
| A | "How Does This Compare to Amazon's Approach?" | "Amazon won't let anyone else's AI sell on Amazon. Walmart won't let anyone else's AI sell Walmart products. The only difference is where the shopping happens." | Obsolete since Oct 21, 2026 for Walmart |
| B | Same section | "Both strategies share the same core principle: the retailer controls the shopping agent." | Walmart's announced model controls permissions and infrastructure, not the agent |
| C | "What Is the New Model?" | "Different strategies, same conclusion: the retailer that controls the shopping agent controls the customer relationship." | Superseded conclusion |
| D | Key Takeaways | "Retailers are winning both Walmart and Amazon are building their own AI agents instead of letting tech companies control the shopping experience." | Incomplete; Walmart now also admits outside agents |
| E | "The Pattern" | "The winners of AI-powered commerce will be the retailers who build their own shopping agents and distribute them everywhere. Walmart with Sparky. Amazon with Rufus. The tech companies will provide the audience. The retailers will provide the commerce." | Superseded prediction; also "Rufus" is now Alexa for Shopping |
| F | "The Pattern" | "Every time an AI company tries to handle the transaction layer, it underperforms." | Overclaim (legacy Tier 1), unsupported as a general rule |
| G | Title, meta description, excerpt, H2 "What Happened: Walmart Fired OpenAI's Checkout" | "Walmart Dumped OpenAI's Checkout", "Walmart killed Instant Checkout", "Walmart Fired OpenAI's Checkout" | Legacy Tier 1: AI Commerce 2027 Shift 02 attributes the one-third conversion figure to WIRED and records that OpenAI did not withdraw native checkout |
| H | Opening and Key Takeaways | One-third conversion, wrong items, no sales tax system, stated without attribution | Should be attributed to WIRED's reporting |

### 2. Proposed dated editor's note (top of the post)

> **Editor's note, October 2026.** This post's conclusion that "Walmart won't let anyone else's AI sell Walmart products" is no longer accurate. On October 21, 2026, Walmart announced Agent Profiles and an invitation-only Agent Gateway beta that let outside AI agents shop for customers under Walmart-controlled permissions. See [Walmart's Agent Profiles Show How Retailers Can Admit AI Shoppers Without Giving Up Control](/blog/walmart-agent-gateway-agent-profiles). We have also corrected how this post described Walmart's exit from OpenAI's Instant Checkout: the conversion figures come from WIRED's reporting, and OpenAI did not withdraw native checkout.

### 3. Exact replacement wording

- **A (approved 2026-10-22, shipped in the minimum pass):** "As of March 2026, Amazon had blocked Perplexity's shopping agent, while Walmart's approach was to send its own agent, Sparky, into other AI platforms. In October 2026, Walmart announced a model that also admits outside agents under Walmart-controlled permissions."
- **B:** "Both strategies, as of March 2026, kept the shopping agent under the retailer's control."
- **C:** "Different strategies, same instinct: keep control of the shopping relationship."
- **D:** "Retailers are keeping control. In March, both Walmart and Amazon were building their own AI agents rather than handing the shopping experience to tech companies."
- **E:** "In March, the retailers' advantage looked like owning the agent and distributing it everywhere, with Sparky at Walmart and Rufus (now Alexa for Shopping) at Amazon. Walmart's October 2026 announcement suggests the more durable advantage is owning the permissions and transaction infrastructure beneath any agent."
- **F:** Delete the sentence.
- **G:** Title: "Walmart Moved Sparky Into ChatGPT and Gemini. Here's What That Means for Sellers." (slug unchanged). Meta description: "After a reported Instant Checkout test, Walmart put Sparky inside ChatGPT and Gemini. What the shift meant for marketplace sellers and brand visibility." Excerpt: "WIRED reported that Walmart's Instant Checkout test converted at about a third of its own site, and Walmart moved Sparky into ChatGPT and Gemini instead. What the shift meant for marketplace sellers." H2: "What Happened: Walmart Moved Away From OpenAI's Checkout".
- **H:** Opening sentence two: "After testing OpenAI's Instant Checkout inside ChatGPT, which WIRED reported converted at roughly a third of the rate of shoppers who clicked through to Walmart.com, Walmart moved to embedding its own agent, Sparky, in ChatGPT and Google Gemini." Remove "with wrong items in carts and no sales tax system" from Key Takeaways unless the WIRED source supports each item.

### 4. Title

Not accurate as written ("Dumped"). Proposed replacement in G. The slug stays.

### 5. Meta title and description

Revise both (G). There is no separate meta_title today; set it to the new title.

### 6. Internal links and conclusions

- Add the link to the new article in the editor's note (above).
- The "Get a free RecoScope snapshot" CTA is a Tier 2 legacy item; remove under the triage plan.
- Related-reading links to other legacy posts can stay, but the post should not be granted `show_dek` until this correction ships.

---

## AI COMMERCE 2027 RECOMMENDATION

**One tracker row. No shift text change now.** Shift 05 (Trust) already frames identity, delegation, merchant permission and evidence as separate layers; this is strong evidence for it, but the products are announced and in beta, so a row is proportionate. Revisit Shift 05 when Agent Profiles are live for customers.

Proposed row:

- **Date:** 2026-10-21
- **Org:** Walmart
- **Development:** Announced Agent Profiles (launching within a month) and an invitation-only Agent Gateway beta that connects outside agents through Sparky over MCP, with customer approval or spending limits and no card access for agents
- **Affects:** Trust
- **Evidence type:** Company announcement
- **Changed:** A retailer defined outside agents as separate, revocable users of a customer's account instead of blocking them or requiring its own agent; no participants or usage disclosed
- **href:** /blog/walmart-agent-gateway-agent-profiles (on publication)

## PERSONAL AGENT PROTOCOL ARTICLE RECOMMENDATION

**NO CHANGE.** Walmart is a named PAP development partner, but its announcement does not mention the protocol. Adding Walmart's announcement to the PAP article would imply a link Walmart has not made. Revisit when PAP v0.1 publishes or if Walmart ties the gateway to it.

## RESEARCH NOTES FOR THE EDITOR

- **Date and names (1).** Walmart corporate post dated Oct. 21, 2026; product names "Agent Profiles," "Walmart Agent Gateway," and "terms for AI agents."
- **Rollout (2 to 5).** "Agent Profiles, launching in the next month." Gateway: "We'll begin with a beta for companies and developers." Gateway page: "early beta program. Access is limited, available by invitation only, and may be suspended at any time." No statement that the gateway is processing customer orders; the page's "Your agent can now shop with Walmart" is marketing copy beside the invitation-only notice. Reuters reports the tools "will be available to all Walmart account holders" without Walmart+, and TechCrunch says agent support is available to anyone with a Walmart account; I treat that as describing customer eligibility, distinct from the invitation-only developer beta. The draft avoids both "available to everyone" and "live."
- **Current versus gateway agents (6).** Walmart: "Today, agents may shop on Walmart's site through a web browser" and "it signs in using a customer's account." Axios: Walmart "was already allowing external AI agents to shop."
- **Walmart and Sam's Club (7).** Stated in the announcement.
- **Profile creation (8).** "The first time you use an agent to shop through the Walmart Agent Gateway, Walmart will automatically create an Agent Profile," linked by signing into the Walmart account ("Only Walmart sees this").
- **Separate purchases, approvals, limits, extra approval, deletion (9 to 13).** All confirmed in the announcement. The terms add that revocation "will immediately invalidate any active tokens or credentials."
- **Payment (14, 15).** "Agents don't receive customers' payment-card information and can't add or change a customer's payment methods."
- **Data scope (16, 17).** "Agents can access only the information needed for the task and allowed by the customer." Usual items "without sharing the customer's broader shopping history." Terms 16.L: authorizing an agent is consent to share "the account, order, and transaction information reasonably necessary for the Agent to perform the functions you have authorized." The draft presents both.
- **Same price, offers and fees (18, 19).** Confirmed; the same sentence appears in Walmart's Sept 25 letter framing.
- **Returns and blocking (20, 21).** Confirmed.
- **Gateway page (22 to 25).** Collapsed sections, confirmed in the rendered page: "No more website scraping. Just up-to-date product & fulfillment data straight from the source."; "Built with verified identities, controlled permissions & observable actions for better security."; "Walmart safeguards include category restrictions, rate limits & compliance guardrails for agents."; "Walmart Agent Gateway connects AI agents through Sparky."
- **Participants (26, 27).** None named by Walmart. The announcement's Muse, ChatGPT and Gemini reference describes existing "conversational commerce integrations," not gateway participants. Reuters writes that the gateway "allows AI assistants such as OpenAI's ChatGPT, Google's Gemini and Meta's Muse to connect"; that is Reuters' characterization, not Walmart's, and the draft does not repeat it.
- **PAP (28, 29).** No mention in Walmart's announcement, gateway page or terms. Walmart appears in Sierra's PAP partner list (TRH, Oct 8). The draft states the resemblance and the absence of confirmation.
- **MCP (30).** Confirmed as Model Context Protocol by the protocol's documentation ("an open-source standard for connecting AI applications to external systems") and independently by The Verge, which says the gateway "connects AI agents through the Model Context Protocol." Walmart's corporate post expands it differently; the draft uses the correct expansion without comment.
- **Terms of use.** Section 16.L (last updated Sept 21, 2026) predates the announcement and already defines Agents, requires them to identify themselves, not conceal automation and respect rate limits, lets Walmart "limit the items or services available for purchase by Agents," lets Walmart limit value, quantity or frequency of agent purchases and decline or reverse transactions, and treats authorized agent actions as the customer's.
- **Amazon (comparison).** Axios: Amazon blocked Muse and "said it did not authorize Muse to access customer accounts, scrape data or process transactions." Consistent with AI Commerce 2027's Sept 20 entry. The draft does not predict Amazon's future stance.
- **SERP.** Day-of coverage from Reuters (via Investing.com), Axios, TechCrunch and aggregators, mostly framed "Walmart open, Amazon closed." "Walmart MCP shopping gateway" returns third-party Walmart MCP servers, including one that drives Walmart.com with stealth browser automation, which is the scraping path the gateway is meant to replace. "Walmart Agent Profiles" has no explainer yet. No result explains the delegated-account model, the two permissions or the terms' accountability clause.
- **Corpus overlap.** Moderate and complementary. PAP (two grants, proposed), Know Your Agent (recognition), permission stack (access as layers), governance (negative permissions). None covers a retailer defining an outside agent as a separate account user. The March post is directly contradicted and needs the correction above.
- **Avoided claims.** Not stated: general availability, beta participants, transaction volume, PAP adoption, "first," fully open, or that spending limits remove Walmart's approval rights.
