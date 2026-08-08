# Retailers Want AI Shopping Traffic. They Do Not Want to Lose the Customer.

**Status:** Published.
**Type:** Strategic Analysis
**Primary sources:** Reuters (Arriana McLymore, Aug 7 2026); OpenAI product discovery announcement; Google Cloud / Ulta Beauty press release (Apr 22 2026); ucp.dev.
**Voice:** Operator. Reported facts separated from interpretation. No em dashes. Hyphens only.
**Editorial Board:** Approved after four precision edits (link syntax, Adobe attribution chain, Amazon/Walmart mind-reading, UCP proof-by-absence).

---

## Frontmatter (for Supabase insert)

```yaml
slug: retailers-ai-traffic-customer-ownership
title: "Retailers Want AI Shopping Traffic. They Do Not Want to Lose the Customer."
category: "E-commerce Strategy"
meta_title: "Retailers Want AI Shopping Traffic. They Do Not Want to Lose the Customer."
meta_description: "Retailers won the checkout back from AI assistants. Discovery did not come back. Why gaining the sale and owning the customer are no longer the same thing."
canonical: /blog/retailers-ai-traffic-customer-ownership
og_image: /images/blog/retailers-ai-traffic-customer-ownership.svg
featured_image_alt: "A retailer receiving the transaction while an AI assistant retains the discovery conversation that produced it"
author: Robert Hu
read_time_minutes: 6
published_at: 2026-08-08T14:00:00.000Z
status: published
tags: [agentic commerce, customer data, retail media, Universal Commerce Protocol, AI shopping assistants]
related_posts: [chatgpt-shopping-pullback-sellers, amazon-ai-walled-garden, walmart-sparky-chatgpt-gemini]
has_faq_schema: false
```

---

## Featured image specification

**Path:** `/images/blog/retailers-ai-traffic-customer-ownership.svg` (source), PNG via /api/og
**Left panel:** "The Checkout" (white) / "Came Back." (`#42a5c8`)
**Right panel:** Pull quote `"A retailer can gain the sale and still lose part of the customer."` gold italic Georgia, attribution `ROBERT HU · ON WHO OWNS THE CUSTOMER`
**Background:** `#1a2a32` · **Quote color:** `#c5a94e`

---

# Retailers Want AI Shopping Traffic. They Do Not Want to Lose the Customer.

Reuters reported on August 7 that retailers are working to rank inside chatbot answers while resisting the part of the arrangement that would hand over their customer data. The line that stayed with me came from Josh Friedman, Ulta Beauty's head of digital and e-commerce, who told Reuters that "there's always a tax for engaging customers on other people's platforms. I don't think this is any different."

That is not a nervous statement. It is an experienced one. Retailers have paid this tax before, to search engines, to affiliate networks, to social platforms, to marketplaces. What has changed is what the tax is denominated in.

## The traffic is genuinely good

Start with the case for saying yes, because it is strong.

Reuters, citing Adobe Analytics, reported that 41% of U.S. consumers used generative AI for online shopping in June and that AI-referred visitors generated 41% higher revenue per visit than traffic from traditional channels. Juniper Research expects shoppers to spend $8 billion this year after AI agents direct them to retail sites. Ulta told Reuters it sees double the conversion and intent from shoppers who find its products through Gemini and ChatGPT.

Those are the numbers of a channel that arrives pre-qualified. Someone who lands on a product page from an assistant has usually described a need, considered alternatives, and narrowed the field before the retailer ever sees them.

Read that sentence again, because it explains both why the channel is attractive and why it is uncomfortable. The assistant did the narrowing.

## What came back, and what did not

There is a version of this story where retailers already won.

In March, OpenAI ended Instant Checkout and said it would let merchants use their own checkout experiences while it focused its efforts on product discovery. I read that at the time as [good news for sellers](/blog/chatgpt-shopping-pullback-sellers), and on the transaction economics I still think that was right. The checkout came back to the retailer, along with the order, the payment relationship, and the post-purchase experience.

The part that is easy to miss is that discovery did not come back. OpenAI did not retreat from commerce. It kept the half that compounds.

## Two kinds of knowledge

It helps to separate what each side actually accumulates.

A retailer knows its catalog: what is available, at what price, with what attributes, in what quantity. After the order, it knows what this person bought, when, and for how much. That is real and it is valuable.

An assistant that handled the conversation knows something different. It knows what the shopper was trying to accomplish, what they ruled out and why, what they said about budget, who the item was for, which constraint mattered most, and what they asked about three weeks ago. None of that appears in an order record.

A purchase history tells you what someone chose. It does not tell you what they were choosing between.

That distinction is the whole issue. The retailer can complete the transaction, run the loyalty program, and still be the party with the thinner understanding of the customer. If that holds at scale, the retailer becomes the fulfillment endpoint while the assistant becomes the system that understands the shopper. I want to be careful here: this is my interpretation of where the incentives point, not an established outcome.

## Why the biggest players behave differently

Amazon and Walmart are both making moves that suggest the conversation itself has strategic value, though they are approaching it differently.

Amazon has kept outside agents out and runs its own assistant inside its own walls, a pattern I traced when it [blocked one agent and expanded merchant access in the same week](/blog/amazon-ai-walled-garden). Walmart took the other route and put [Sparky inside ChatGPT and Gemini](/blog/walmart-sparky-chatgpt-gemini) rather than letting those platforms mediate its customers directly. Own the agent, rent the distribution.

Different postures, same instinct. Both are trying to keep the interpretive layer in-house, because that layer feeds advertising, membership, merchandising, and replenishment at once.

The uncomfortable part for everyone else is that this option is a function of scale. Amazon and Walmart can afford assistants because they have enough demand, data, and ad revenue to justify one.

## The exposure decision

Ulta is the more instructive case, because it is not choosing between open and closed.

In April, Ulta and Google announced two things at the same time. Ulta's assortment became shoppable inside AI Mode and the Gemini app, powered by the Universal Commerce Protocol. Ulta also launched Ulta AI, its own shopping assistant built on Gemini Enterprise, drawing on insights from what Google's release describes as Ulta's 46 million or more loyalty members.

Read together, that is a decision about layers rather than a decision about access. Ulta exposed its catalog to where discovery is happening. It kept the customer model on its own property, attached to a loyalty program it already owns.

I do not think the durable question is whether to let AI systems in. It is which layer you expose: catalog, inventory, pricing, checkout, or the accumulated understanding of the shopper. Those are separable, and they are worth very different amounts.

## What this does to retail media

Retail media is the part of the P&L most exposed to this, and it is worth stating carefully.

Retail media revenue depends on shoppers browsing and searching on the retailer's own surfaces, because that is where the impressions live. If more of the consideration phase happens inside an assistant, some of that inventory has to move with it. Amazon and Walmart are already testing sponsored placements inside conversational surfaces, which suggests neither expects the current arrangement to hold unchanged.

This does not mean retail media shrinks. It may simply relocate, and the retailers with their own assistants are better positioned if it does.

## The honest counterargument

There is a real case that this concern is overstated.

Retailers have never owned the full journey. Google, affiliates, review sites, and marketplaces have all sat upstream of the transaction for years, and retailers built substantial businesses anyway. An AI referral that converts at a higher rate may be worth more than the upstream signal it costs, and a channel reaching people who never would have visited is additive rather than substitutive.

The protocols also push back. UCP states that businesses "retain control and remain the Merchant of Record, with full ownership of customer relationships," and Amazon's decision to [join the governance body it had resisted](/blog/amazon-joins-universal-commerce-protocol) suggests the standard has real weight. Etsy's Rafe Colburn told Reuters that an order arriving from ChatGPT is "the start of a deeper relationship, and not just one that's always intermediated by ChatGPT," which is a fair description of how a first purchase can work.

Most importantly, customer ownership is not binary. A retailer that captures the order, the email, the loyalty enrollment, and the replenishment cycle holds a great deal, whatever happened upstream.

Here is where I would still press. The UCP materials I reviewed are explicit about transaction-side control: the merchant remains Merchant of Record and retains ownership of the customer relationship and transaction data. They are much less explicit about what conversational context an AI platform may retain before the order reaches the merchant. That is not an accusation of bad faith. It is an unsettled part of a young standard, and it happens to be the part this article is about.

## The distinction worth keeping

Winning the transaction and owning the relationship used to be the same achievement. For most of e-commerce history, the customer who checked out on your site had also browsed on your site, so the order arrived with its own explanation attached.

Those two things are now separable, and this year they visibly separated. Retailers got the checkout back while the assistant kept the conversation. A retailer can gain the sale and still lose part of the customer.

If the assistant knows why the customer bought and the retailer only knows what they bought, which one is holding the relationship?
