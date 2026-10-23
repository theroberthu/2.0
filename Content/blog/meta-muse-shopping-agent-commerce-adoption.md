# Meta Muse Shopping Demand

**Status:** PUBLISH APPROVED (senior editor, 2026-10-23) after seven edits, all applied.
**Type:** Authority / thesis article with search-reference value
**Assignment:** TRH Editorial Board, 2026-10-23
**Gates:** Research PASS, Editorial EDIT (seven edits applied), SEO/GEO PASS. Final: PUBLISH.
**Source-body word count:** 1,165 excluding the H1, with section headings and list items included; 1,133 prose only. Method: whitespace-separated words containing a letter or digit, link URLs not counted.

---

## SEO PACKAGE

- **title (editorial H1):** Meta Muse Has Shopping Demand. Retailer Permission Is Now the Constraint
- **meta_title:** Meta Muse Shopping Data Shows Demand for AI Agents
- **slug:** meta-muse-shopping-agent-commerce-adoption
- **category:** E-commerce Strategy
- **meta_description:** Meta says 10 million people set up Muse and shopping is its top use. What the numbers prove about AI shopping demand, and what retailers still control.

---

## DRAFT BODY

### Meta Muse Has Shopping Demand. Retailer Permission Is Now the Constraint

On October 21, Meta disclosed its first shopping metrics for Muse, its personal AI agent. They are worth reading closely, because most of the coverage has already rounded them up.

My read is that Meta's figures are stronger than a demo and weaker than market proof. And the same earnings call explained where the constraint is moving: away from whether people will ask an agent to shop, and toward whether businesses will let that agent in.

### What Meta actually reported

On the earnings call, Mark Zuckerberg and CFO Susan Li gave four figures. Each has a denominator that matters.

- **More than 10 million people in the US and Canada have set up Muse**, in about six weeks. These are setups, not active users. Muse is not available in other countries.
- **About 25% of people who have set up Muse use it on any given day.** Meta did not give a daily or weekly user count.
- **Shopping is the most common use case.** Zuckerberg said more than a quarter of people using Muse engage in shopping, and Li specified over 25% of Muse weekly actives. Because weekly actives were not disclosed, the number of shoppers cannot be calculated. Applying 25% to 10 million setups uses the wrong base.
- **The average purchase size is over $200.** Asked whether that figure includes travel, Zuckerberg said it does, and called travel one of Muse's other top use cases.

Meta did not disclose how many purchases were made, transaction volume, gross merchandise value, or how often shopping turns into buying. "Engaging in shopping" covers research and comparison as well as checkout. Li described Muse's role as researching, recommending and "helping you complete a purchase." When an analyst asked whether Meta's revenue depends on Muse moving from facilitating transactions to completing them itself, she said: "I think we don't exactly know the answer to that."

### What the numbers do prove

Even with those limits, this is more than a demo. Among people who chose to set up a general-purpose agent, shopping is the leading behavior. Meta reports an average purchase size above $200, including travel. And Zuckerberg said that in the first week Meta had to work with Stripe to raise credit limits because volumes were higher than expected. That is evidence of live purchasing activity, but not a disclosed count of completed purchases or transaction volume.

The limits are also Meta's own. Li said Muse skews toward Meta's highest-value users, with more than 20% of US Muse users falling into Meta's $1,000-plus annual ARPU segment across its family of apps, and that they are not representative. Zuckerberg's statement that Muse has "clear product-market fit" is the company's assessment.

Stripe's figure needs the same care. On September 29, Stripe said agentic purchases made with Link increased 38 times over the previous month, across Muse, Grok Bot and Instinct. It gave no baseline. A multiple without a base tells you direction, not size.

The [AI Commerce 2027](/ai-commerce-2027) report has held that usage of AI shopping assistants is published while agent-initiated transaction volume is not. Meta's disclosure fits that pattern exactly. It is the most specific demand signal I have found from a consumer agent, and it still stops short of volume.

### How the money moves

At checkout, Muse uses Link. Stripe says consumers approve the transaction total in the chat for every purchase. At businesses that accept Link, Muse checks out with the payment method the person saved there. Elsewhere, Link issues a single-use virtual card scoped to the approved purchase, and Muse never sees the underlying card details. Meta says Muse checks with the person before making a purchase.

That approval step is how it works today. Stripe lists spending controls that would let agents buy without approving each transaction under what comes next, not what exists. Every Muse purchase currently described by Meta and Stripe requires the person to approve the total.

Plaid's role is different. Plaid connects people's financial accounts to Muse's finance features, sharing balances, transactions and holdings so the agent can give financial guidance. It provides account data, not purchase processing.

This is the separation I described when a payments official argued that [AI can decide what to buy, but should not decide that money moves](/blog/npci-upi-ai-agent-authorization). Muse works out the purchase. Stripe's rails, with a person's approval, move the money.

### Where demand meets the merchant

A payment rail settles who pays. It does not decide whether the merchant admits the agent.

Meta's launch post says Muse can open a browser and fill out forms. Where no integration exists, it shops through pages built for people, which is the route a merchant can refuse. Amazon blocked Muse in September, and told The Verge it had asked Meta to remove Amazon from Muse. The Verge's reporter found Muse stopped by Target's bot check one day and let through the next; Target said its safeguards keep unauthorized agents from accessing customer accounts and starting transactions.

Li named the constraint herself. Some businesses, she said, are "understandably focused on protecting customer relationships." She expects the market to move away from agents navigating every site like a human, toward permissioned, structured interactions: authenticated APIs, approved agent partnerships, and direct communication between a consumer's agent and a business's own agent. She also said many experiences will remain AI assisted rather than fully autonomous in the near term.

Those routes already have shapes. Walmart's [Agent Gateway](/blog/walmart-agent-gateway-agent-profiles) is one a retailer built for itself. [Personal Agent Protocol](/blog/personal-agent-protocol-ai-commerce), which Meta is co-developing, is an attempt at a shared one. Neither turns consumer demand into access by default.

### The economics are still a plan

Meta's stated model is that Muse stays free for most people, and Meta takes a fee on transactions it helps facilitate, paid by businesses. That fee does not exist yet. Li said Meta is not monetizing Muse outside of subscriptions today, and that transaction revenue needs more users and more business partners first.

So the open question is commercial, not technical. Meta wants merchants to pay for demand that arrives through an agent. Li's own condition for broader participation is that agents demonstrate they can generate incremental value and demand and operate safely. Meta has not published that evidence: conversion against a merchant's own site, incrementality, returns or margin.

### What this proves, and what it does not

It proves that people who set up a shopping-capable agent use it for shopping more than for anything else, and that some complete purchases after approving the total, while the agent remains unable to see their payment details.

It does not prove market-wide demand, given early adopters in two countries. It does not prove transaction volume, autonomous buying, merchant return on investment, or broad retailer acceptance.

Agentic commerce may have found consumer demand before it solved merchant acceptance. Meta's numbers move the conversation past demos, and its own CFO described authenticated, permissioned routes as the operating constraint.

If Meta starts charging businesses for the transactions Muse facilitates, what evidence would you need to see before paying?

---

## INTERNAL-LINK PLAN

| Anchor | Target | Why |
| --- | --- | --- |
| AI Commerce 2027 | /ai-commerce-2027 | The usage-versus-volume distinction this disclosure tests |
| AI can decide what to buy, but should not decide that money moves | /blog/npci-upi-ai-agent-authorization | The decision/execution separation Link implements |
| Agent Gateway | /blog/walmart-agent-gateway-agent-profiles | A retailer-built permissioned route |
| Personal Agent Protocol | /blog/personal-agent-protocol-ai-commerce | The shared standard Meta is co-developing |

Four internal links (cap is four). Read but not linked: AI Visibility Is Becoming a Permission Stack and Agentic Commerce Is Starting to Standardize the Buyer; both are one hop away through the PAP and Walmart articles.

## EXTERNAL SOURCES (to link on publication, each anchor once)

- Meta Q3 2026 earnings call transcript, Oct 21 2026: https://s21.q4cdn.com/399680738/files/content_files/META-Q3-2026-Earnings-Call-Transcript.pdf (anchor: "On the earnings call")
- Meta Q3 2026 follow-up call transcript, Oct 21 2026: https://s21.q4cdn.com/399680738/files/content_files/META-Q3-2026-Follow-Up-Call-Transcript.pdf (anchor: "I think we don't exactly know the answer to that")
- Meta, "Introducing Muse: The World's First Personal AI Agent Built for Everyone," Sept 8 2026: https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/ (anchor: "Meta's launch post")
- Stripe, "Stripe helps Muse, Meta's new personal AI agent, shop across the internet with Link," Sept 8 2026: https://stripe.com/newsroom/news/stripe-helps-meta-muse-shop-with-link (anchor: "Stripe says consumers approve the transaction total")
- Stripe, "Helping personal agents shop more intelligently and reliably with Link," Sept 29 2026: https://stripe.com/blog/helping-personal-agents-shop-more-intelligently-and-reliably-with-link (anchor: "On September 29, Stripe said")
- Plaid, "Plaid powers Meta's new AI agent, Muse," Sept 8 2026: https://plaid.com/blog/meta-muse/ (anchor: "Plaid connects people's financial accounts")
- The Verge, Mia Sato, "AI agents are ready to shop. Some retailers are wary," Oct 22 2026 (secondary): https://www.theverge.com/report/1015811/ai-shopping-agents-blocked-amazon-the-realreal-target-meta-muse (anchor: "told The Verge")

Not linked: Meta Q3 2026 earnings release (SEC 8-K Ex. 99.1), which mentions Muse only in Zuckerberg's quote and carries no Muse metrics: https://www.sec.gov/Archives/edgar/data/0001326801/000162828026066700/meta-09302026xexhibit991.htm

---

## AI COMMERCE 2027 RECOMMENDATION

**One tracker row. No change to the protected line.**

Proposed row:

- **Date:** 2026-10-21
- **Org:** Meta
- **Development:** Reported more than 10 million Muse setups in the US and Canada in about six weeks, about 25% of setups using it on a given day, shopping as the top use case (over 25% of weekly actives) and an average purchase over $200 including travel
- **Affects:** Measurement
- **Evidence type:** Earnings call
- **Changed:** A consumer agent published usage and purchase-size figures, but no purchase count, transaction volume or weekly active base; transaction fees remain planned, not charged
- **href:** /blog/meta-muse-shopping-agent-commerce-adoption (on publication)

**Protected line.** "Infrastructure exists. Adoption evidence does not." still holds as the report defines it: usage is published, agent-initiated transaction volume is not, and the "0 platforms publishing agent-initiated transaction volume" figure is unchanged. Meta's disclosure is the strongest company-reported usage evidence so far; the Board may want to revisit the wording if a second platform publishes comparable figures.

**Separate correction found during the corpus read (not part of this article).** The AI Commerce 2027 counterargument "Major retailers may prefer selective integrations over open access" says "Walmart brings Sparky into other surfaces rather than letting them operate Walmart.com." Walmart's October 21 Agent Gateway announcement, covered in Release 1.57, makes that sentence outdated. Release 1.57 added only a tracker row and did not touch this line. Proposed replacement: "Walmart brought Sparky into other surfaces first, and in October announced a gateway that admits outside agents only under Walmart-controlled permissions." Verdict stays "Accepted, and already happening."

---

## RESEARCH NOTES FOR THE EDITOR

1. **10 million (PASS).** Zuckerberg: "In just a month and a half, more than 10 million people in the US and Canada have set up Muse personal agents." Later in Q&A he loosely says "10 million people using it and signing up"; the draft uses "set up."
2. **Setups versus actives (PASS).** No active-user count disclosed. Third-party estimates (Similarweb about 700,000 DAU in late September; Apptopia figures) exist but are not used.
3. **25% daily (PASS).** "About 25% of people who have set up Muse use it on any given day."
4. **Shopping denominator (PASS, important).** Zuckerberg: "more than a quarter of people who are using Muse engaging in this." Li, prepared remarks: "shopping in particular being used by over 25% of Muse weekly actives." Weekly actives undisclosed, so no shopper count can be derived. The 2.5 million figure is not stated.
5. **Most common use case (PASS).** Zuckerberg: "The most common use case for Muse is shopping." Li: top three categories are shopping, personal productivity and creativity.
6. **Over $200 (PASS).** "an average purchase size over $200."
7. **Travel (PASS).** Mark Mahaney asked whether commerce includes travel; Zuckerberg: "that does include travel, too."
8. **What "purchase" means (UNRESOLVED, stated as such).** Meta did not define the metric or disclose purchase counts. Li describes Muse's shopping role as research, recommendations and helping complete a purchase, and said "we don't exactly know the answer" on facilitation versus agent-completed transactions. The draft treats average purchase size as evidence that purchases occurred, not of how many or how autonomous.
9. **Fees (PASS).** Zuckerberg: "we will build commerce tools so we get paid a fee based on the transactions that we help facilitate. We expect this will be paid for by businesses." Li, follow-up call: "today, we are not monetizing Muse outside of subscriptions." Li: more scale in users and "connectors/business partners" needed before monetizing transactions. The Verge's earnings piece says "Meta earns a fee for every commercial transaction that takes place on Muse"; the transcript contradicts that, and the draft does not repeat it (it says "That fee does not exist yet").
10. **Stripe Link (PASS).** Sept 8: approval of the transaction total in chat for every purchase; saved payment method at 1M+ Link businesses; single-use virtual card scoped to the approved purchase elsewhere; "Muse never sees their underlying payment details." Meta launch post: Muse "has no visibility into people's passwords or payment methods" and asks before making a purchase. Stripe Sept 29: spending controls without per-transaction approval are listed under "What's next."
11. **38x (PASS).** "over the past month, agentic purchases made with Link increased 38x." No baseline or absolute volume. Covers Muse, Grok Bot and Instinct, not Muse alone.
12. **Plaid (PASS).** Account connections for Muse's Finances experience: balances, transactions, investment holdings, mortgage information. No purchase processing.
13. **Susan Li statement (PASS).** "evolve away from agents attempting to navigate every digital experience like a human" toward "permissioned, structured interactions... authenticated APIs, approved agent partnerships or direct communications between the consumer's personal agent and a business' own agent." Also: "many experiences will remain AI assisted rather than fully autonomous" and businesses will participate "as trusted integrations develop and agents demonstrate that they can generate incremental value and demand and operate safely." The Verge quotes Li as "everyone is just going to have to adapt"; the transcript reads "everyone is going to have to adapt." Not used.
14. **Walmart and PAP (PASS).** One sentence each, linked, not repeated. Li herself cites PAP and names Walmart, Stripe and Shopify as partners.
15. **Amazon (PASS, minimal).** Used once to show the browser route can be refused. Amazon spokesperson to The Verge: Amazon "requested that Meta remove Amazon" from Muse. Target bot-check detail and Target statement from the same Verge report.
16. **SERP.** Results for Muse users, Muse shopping and Muse average purchase are dominated by day-one recaps that misstate the denominators ("10 million users," "a quarter of Muse users are shopping," and one reading the $200 as a share of shoppers). Forrester's Oct 2 post argues the strongest use case may be research rather than purchasing, without Meta's figures. No result separates setups, daily use, weekly-active shopping share, travel inclusion and planned fees. Strong GEO gap for the questions in the brief.
17. **Corpus advance (PASS).** Existing TRH coverage treats Muse as the subject of a block (PAP, Walmart, AI Commerce 2027) or a connector (Shopify). None covers consumer demand evidence or what Meta's metrics prove.
18. **AI Commerce 2027.** See recommendation above.

**Other context checked:** Meta's launch post title is "Introducing Muse: The World's First Personal AI Agent Built for Everyone" (the brief has "Built for You"); the draft does not repeat the "first" claim. Launch post says "rolling out in the US"; the earnings call says US and Canada. Meta's own figures are company-reported throughout.

**Avoided claims:** 10 million active users; 2.5 million shoppers; every shopper buys; $200 as a retail-only figure; transaction volume or GMV; 38x as volume; broad retailer acceptance; autonomous purchases; ROI or profitability; independent product-market fit; global availability; current per-transaction fees; any "first."
