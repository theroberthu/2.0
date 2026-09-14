# The Assistant Builds the Cart. Brands Now Compete to Be in It.

**Status:** Published 2026-09-14. Supabase id `d2831537-ee36-40cb-90e5-3ac88a496b16`.
**Type:** Strategic Analysis (timely). Launch date: September 9, 2026.
**Primary sources:** Instacart newsroom, Clementine (2026-09-09); Instacart
company update, AI assistant (2026-06-18); Shipt via PR Newswire, Ask Shipt
(dateline 2026-09-09).
**Voice:** Practitioner. One argument. No em dashes. Hyphens only.
**Editorial Board note:** Passed the overlap gate on a narrowed thesis, then
approved after two revisions plus guardrails.

---

## TITLE SPLIT

- `title` (editorial H1, and JSON-LD headline):
  **The Assistant Builds the Cart. Brands Now Compete to Be in It.**
- `meta_title`: **Instacart Clementine and Ask Shipt: How AI Builds the Cart**

OG and Twitter cards carry the SEARCH title, not the H1.

---

## NON-NEGOTIABLE: RETAIL-MEDIA GUARDRAIL

Instacart and Shipt document:
- deals
- promotions
- product recommendations
- basket construction

They do NOT establish that:
- sponsored products influence Clementine basket inclusion
- sponsored products influence Ask Shipt basket inclusion
- paid placement affects the assistant's product-selection logic
- retail-media spend changes generated-cart ranking

**Do not convert "promotions and deals are inputs" into evidence of sponsored
placement.** A promotion is a price or offer the retailer runs; paid placement
is a brand buying visibility. The sources name the first and are silent on the
second.

The article MAY ask where paid visibility enters an AI-built basket. It may NOT
answer that question without new primary-source evidence. The protecting
sentences are: "nothing in these announcements says sponsored products influence
what Clementine or Ask Shipt put in a cart", "which is not the same thing as paid
placement", and "how inclusion is ranked in these two assistants is simply not
public". Do not remove or soften any of them.

Instacart does operate Instacart Ads, and the June 18 update mentions AI-powered
ads tools for advertisers. That is a fact about Instacart's business, not about
how the assistant selects products. Keep those separate.

---

## NON-NEGOTIABLE: OVERLAP DISTINCTION

`albertsons-ai-planning-task-depth` (2026-08-21) already owns the retailer-side
thesis: **AI is constructing the basket**, "a different unit of commerce", and
it already makes the selection-bias and task-scope objections.

This article owns the **brand-side** question only: which products get included
in the draft basket, and what that changes for brand visibility, merchandising,
substitution and retail media. It cites the Albertsons piece by name in "What is
actually new here" and says the retailer-side argument is already made.

**Do not drift back into a generic "AI assistants build bigger baskets" article.**
Any edit that re-centers larger orders or task depth duplicates published
coverage.

---

## REVISIONS (Editorial Board, applied before publication)

1. Incumbent-brand inference softened.
   "If that holds, the brand already in a household's history has a structural
   advantage, because it is carried into the draft by default."
   -> "If that holds, a brand already established in a household's history may
   enter the draft with an advantage because the assistant has an existing
   preference signal to work from."
   Reason: Instacart documents brand-preference and order-history inputs, but has
   NOT documented a ranking advantage for incumbent brands. The contestable-slots
   argument that follows was preserved.

2. Substitution claim refined.
   "A substitution is no longer a fallback when something is out of stock. It is
   a decision about which brand fills a slot the shopper never looked at."
   -> "A substitution becomes more than a fulfillment fallback when the assistant
   is making the first selection. It is also a decision about which brand fills a
   slot the shopper may never have looked at."
   Reason: substitution is still a fulfillment mechanism; the original implied it
   had stopped being one. The broader merchandising argument was preserved.

---

## EVIDENCE NOTES

**Two AOV figures, both correct, for different periods. Keep both with periods.**
- June 18: assistant orders were larger than the Q1'26 platform average order
  value of **$113**. Footnote: "Based on orders placed with Cart Assistant
  through June 12, 2026 compared to Q1'26 platform average order value." Note
  the two different time windows.
- September 9: Clementine orders "include more items than Instacart's typical
  basket and exceed the company's industry-leading **$115** average basket size."
  Footnote: "As of June 30, 2026."
- **Neither gives a percentage lift, sample, or control group. Never invent one.**

**Naming caveat.** The June footnote attributes the result to "Cart Assistant",
which by September is Instacart's name for its white-label ENTERPRISE product;
the consumer assistant is Clementine. The article flags this rather than
resolving it by assumption.

**Human review before checkout, both companies.**
- Instacart (June 18, not in the Sept 9 release): "It does not finalize anything
  without explicit action and every decision is reviewed before checkout."
- Shipt: "Every recommendation can be reviewed, swapped, or edited before
  checkout."

**Substitution** is verified from the June 18 update only: "It surfaces
alternatives when a preferred item is unavailable." The Sept 9 release says
"lower-cost alternatives", which is a savings feature, not substitution.

**Brand-preference inputs** (basis of the softened inference): June 18 says the
assistant adapts "to established brand preferences", "already knows the brands
you love", and learns from "what consumers accept, what they refine, what they
reject".

**Corrections to the original brief.** "$113" is the Q1'26 figure, not the latest
($115 as of June 30). "Tested with millions" is imprecise: Instacart tested
"since early this year" and then rolled out to millions of U.S. customers.

**Shipt release status.** The PR Newswire page is a corrected repost (posted
2026-09-10 19:31 ET, dateline 2026-09-09). What was corrected could not be
identified; none of the claims used appear to depend on it.

**Walmart sponsored prompts** is stated from prior TRH coverage
(`walmart-sparky-sponsored-prompts-ads`), not re-verified against a Walmart
primary source at publication.

**GEO / AEO.** Refinement, not a change. The site ladder is "SEO makes products
found, GEO makes them recommended, AEO makes them chosen." Basket construction
adds a provisional state: chosen for a draft, many products at once, with a
person approving. No new acronym introduced.

---

## Frontmatter (as inserted)

```yaml
slug: instacart-clementine-ask-shipt-ai-basket
title: "The Assistant Builds the Cart. Brands Now Compete to Be in It."
meta_title: "Instacart Clementine and Ask Shipt: How AI Builds the Cart"
category: "E-commerce Strategy"
meta_description: "Instacart's Clementine and Shipt's Ask Shipt turn a request into a finished grocery cart. For brands, the question shifts from recommended to included."
og_image: /images/blog/instacart-clementine-ask-shipt-ai-basket.svg
read_time_minutes: 5
published_at: 2026-09-14T12:00:00.000Z
status: published
tags: [Instacart, Shipt, AI shopping assistants, grocery ecommerce, retail media, AEO]
```

## Internal links (4, verified 200 at publication)

- /blog/albertsons-ai-planning-task-depth
- /blog/product-data-shared-infrastructure-google-ai-mode
- /aeo
- /blog/walmart-sparky-sponsored-prompts-ads
