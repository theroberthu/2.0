# Albertsons' AI Results Suggest the Real Value Is in Planning, Not Search

**Status:** Published.
**Type:** Strategic Analysis
**Primary/near-primary sources:** Jill Pavlovich quoted via a Wall Street Journal report (Aug 17, 2026), carried by PYMNTS and AOL; Albertsons Companies press release (Dec 3, 2025).
**Voice:** Operator. Verified fact, observation, interpretation and hypothesis kept separate. No em dashes. Hyphens only.
**Editorial Board:** Approved after four precision edits, all tightening causal language (comparison framing, section heading, "could contribute", the mechanical objection, and the selection-effect sentence).

**Evidence notes.**
- Metric is **average order value**, confirmed from Pavlovich's direct quote.
  Supermarket News paraphrases both figures as "basket sizes"; that is looser
  than the source and was not used.
- Pavlovich's own hedges are "anywhere from" (10%) and "about" (26%).
- WSJ is the origin and is paywalled. Every figure here is second-hand through
  PYMNTS and AOL, which agree on the quote wording verbatim.
- No sample size, measurement period, geography, comparison-group definition, or
  randomization has been disclosed anywhere findable.
- The Ask AI / Plan AI / Buy AI consolidation is reported by WSJ only and does
  not appear in any Albertsons release.
- Pavlovich's title differs between sources: "SVP, Digital Customer Experience"
  in the Dec 2025 Albertsons release, "senior vice president of digital shopping
  experiences" in the Aug 2026 reporting. The newer one is used.

---

## Frontmatter (for Supabase insert)

```yaml
slug: albertsons-ai-planning-task-depth
title: "Albertsons' AI Results Suggest the Real Value Is in Planning, Not Search"
category: "E-commerce Strategy"
meta_title: "Albertsons' AI Results Suggest the Real Value Is in Planning, Not Search"
meta_description: "Albertsons reported a 10% AOV lift from conversational search and 26% from planning assistants. The gap may be about task size, not AI quality."
canonical: /blog/albertsons-ai-planning-task-depth
og_image: /images/blog/albertsons-ai-planning-task-depth.svg
featured_image_alt: "An AI shopping assistant moving from finding a single product to assembling a basket for a whole meal plan"
author: Robert Hu
read_time_minutes: 6
published_at: 2026-08-21T13:00:00.000Z
status: published
tags: [Albertsons, grocery ecommerce, AI shopping assistants, agentic commerce, average order value, product data]
related_posts: [amazon-ai-shopping-business-model, kroger-ecommerce-operating-model, product-data-shared-infrastructure-google-ai-mode]
has_faq_schema: false
```

---

## Featured image specification

**Path:** `/images/blog/albertsons-ai-planning-task-depth.svg` (source), PNG via /api/og
**Left panel:** "Finding Items," (white) / "or Finishing Jobs?" (`#42a5c8`)
**Right panel:** Pull quote `"Forgetting is a planning failure, not a search failure."` gold italic Georgia, attribution `ROBERT HU - ON AI SHOPPING ASSISTANTS`
**Background:** `#1a2a32` - **Quote color:** `#c5a94e`

---

# Albertsons' AI Results Suggest the Real Value Is in Planning, Not Search

Albertsons reported two numbers this month, and the interesting thing is the gap between them.

Speaking to the Wall Street Journal, Jill Pavlovich, the company's senior vice president of digital shopping experiences, described what happens when customers start using its AI shopping experiences. "We see anywhere from a 10% lift in average order value when they use standard conversational searching and about a 26% lift in average order value when they use more comprehensive assistants."

Most of the coverage led with the 26%. I want to look at the distance between the two figures instead, because the same company and the same catalog produced very different reported outcomes across two different AI shopping experiences.

The obvious question is why. The answer I keep arriving at has less to do with the quality of the AI than with the size of the job it was asked to do.

## What sits behind each number

Albertsons has shipped several AI experiences over roughly the last eighteen months, including Ask AI, Plan AI and Buy AI, and Pavlovich told the Journal it is now consolidating them into a single conversational assistant.

The two ends of that range are different products doing different work. Conversational search lives in the search bar of the banner apps and helps a customer find a product. The more comprehensive assistant, which Albertsons announced in December 2025, does something broader. In the company's own description it can generate a weekly meal plan and shopping list "with de-duplicated ingredients added to cart," import a recipe from an image and add its ingredients, build a basket from an uploaded grocery list, and suggest recipes from what is already in the fridge.

Those are not two grades of the same feature. One helps you find an item. The other tries to work out what the items should be.

## The clearest visible difference was the task

Here is the part I think matters most, and it is my interpretation rather than anything Albertsons has claimed.

When someone uses conversational search, they have already done the planning. They decided what to cook, worked out what it needs, checked what they have, and applied whatever dietary constraints exist in their household. The assistant is handed a narrow question at the end of a long private process. It helps with the last step.

When someone asks for three gluten-free dinners for a family of four, the assistant enters much earlier. Now it has to reason across recipes, servings, ingredients, dietary preferences, what is already in the cart, substitutions, and what the store actually has. It is not locating a SKU. It is constructing the basket.

That difference alone could contribute to a larger order without the AI being more persuasive, or even better. A meal plan has more line items than a jar of pasta sauce. Pavlovich's own explanation points the same direction. She attributed the larger baskets to customers "adding even more items to their basket because they're not forgetting items."

Forgetting is a planning failure, not a search failure. Search cannot fix it, because search only answers what you thought to ask.

## Why task depth may change the economics

If that reading holds, the useful variable is not how smart the assistant is but how much of the customer's job it takes responsibility for.

An assistant that owns more of the task gets more chances to be useful in ways that show up in the basket. It can notice a missing ingredient, resolve a substitution before it becomes an out of stock, carry a dietary constraint across every item rather than one, and complete a list the customer would have half-finished. None of that requires upselling. It requires the system to understand the outcome the customer is after rather than the product they typed.

State it carefully and it becomes a hypothesis worth testing rather than a conclusion: the economic value of an AI shopping assistant may rise with how much of the customer's job it can complete. Albertsons' figures are consistent with that. They do not establish it.

## Grocery makes the pattern visible

Grocery is an unusually good place to see this, which is probably why the clearest signal so far has come from a supermarket rather than a general merchant.

Groceries are bought often, in multi-item baskets, against recurring needs, with dietary constraints, perishability, substitutions, household preferences, and local availability all in play. The customer usually arrives with a job rather than a product. "Feed my family this week" is a fundamentally different request from "find this television," and only one of them has an obvious search query attached to it.

## What a planning assistant needs to read

A system that plans rather than retrieves needs more than titles and keywords. It needs ingredients, dietary attributes, serving sizes, pack sizes, plausible substitutions, availability and price, and it needs them to be reliable enough to reason over. This is the same argument I have made about [product data becoming shared infrastructure](/blog/product-data-shared-infrastructure-google-ai-mode), arriving from a different direction. A planning assistant is a much harsher reader of a catalog than a search box ever was.

## The honest counterargument

These are Albertsons-reported figures, described by an executive in a press interview. No sample size, measurement period, geography, or comparison group has been disclosed. Nobody has said whether users were randomized, and the phrasing suggests they were not.

Early adopters of a new digital feature are also not a random sample. People who try a meal-planning assistant are plausibly already heavier grocery shoppers with larger households, which would produce a version of this result with no AI involved at all. The word "lift" implies a causal comparison that the available reporting does not support.

And the mechanical point deserves to be said plainly, because it is the strongest objection: a meal-planning task naturally creates more opportunities to add items than a product search, which can raise order value even if the assistant itself is not more persuasive. The 26% may be measuring the task, not the assistant.

I do not think that makes the result empty. I think it relocates it. If the gap comes from task scope rather than from AI persuasion, then the lesson is not that a better assistant extracts more money from shoppers. It is that expanding the scope of the job the system helps finish is where the value sits. That is a more defensible claim and a more useful one.

Several things remain unknown, and they are the ones that would actually settle it. Whether larger orders carry comparable margin. Whether the effect survives past the novelty period. Whether the resulting baskets are accurate enough that customers keep using the assistant. Whether purchase frequency moves at all.

I have been quicker in the past to treat retailer-reported figures like [Walmart's 35% higher order values](/blog/walmart-sparky-35-percent-higher-aov) as evidence that assistants raise spending. Working through [Amazon's disclosures](/blog/amazon-ai-shopping-business-model) changed how I read them. A group defined by choosing a new feature may already differ from the group that does not use it, which makes any spending comparison harder to interpret.

## Where this leaves me

Search assistants make finding easier. A planning assistant changes the question from "what product do you want" to "what are you trying to accomplish," and that is a different unit of commerce.

The shift worth watching is not conversational interfaces replacing search bars. It is retailers discovering that the assistant becomes more consequential the more of the customer's job it absorbs, which is also the point at which it stops being a feature and starts [redesigning the work itself](/blog/ai-wont-fix-broken-work).

If the assistant starts from the customer's goal rather than the product they typed, how much of the shopping journey is left for the retailer to design?
