# /aeo copy revision (DRAFT, for senior-editor review)

**Status:** Applied 2026-11-24 (Release 2.08), all 13 edits as drafted. The
five questions at the end were not answered before the user said to apply, so
the draft's defaults stand: evidence-first hero, Perplexity kept, Apple
removed, Hatch replaced by Muse, two authorization examples, no Sources block.
Release 2.07 shipped the technical fixes (social card, `Article` schema,
reconciled dates, meta description) without changing any copy.

**Goal.** Bring `/aeo` in line with the evidence standard of `/ai-commerce-2027`
("Infrastructure exists. Adoption evidence does not."), remove claims the site's
own later articles contradict, and add the research published since May 2026.

**Sourcing rule for this draft.** Every new fact is taken from a TRH article
that is already published and was verified at publication. Each is linked in the
card or paragraph that uses it. No new outside facts were introduced.

**When applied:** move `MODIFIED` in `page.tsx`, the visible "Last updated"
note and `STATIC_LAST_MODIFIED.aeo` in `src/app/sitemap.ts` to the ship date,
then run the gate, verify live, submit IndexNow, and request indexing on the
user's instruction.

---

## Edit 1. Hero paragraph

**Why.** "Sparky drove 35% higher AOV" is causal. Walmart reported that Sparky
users have a 35% higher AOV than non-users, which is a comparison, not proof of
cause. "This quarter" dates the page to May.

**Current**
> AI agents are buying on behalf of your customers right now. Alexa for Shopping
> launched May 13, 2026. Sparky drove 35% higher AOV in Q1 FY27. The brands
> acting this quarter compound a structural advantage. The ones waiting will not
> know what happened.

**Proposed**
> AI agents can now shop on a customer's behalf. Alexa for Shopping runs
> auto-restock and scheduled deliveries, Walmart has announced profiles and
> spending limits for outside agents, and Google's Universal Cart carries a
> shopper from Search to checkout. The infrastructure is live. How much buying
> runs through it is not yet measured. This page tracks both.

---

## Edit 2. In Short, second paragraph

**Why.** Same causal Sparky wording; "your ad budget" framing conflicts with
the site's coverage of ads entering AI assistants.

**Current**
> It matters because those agents are already live and transacting. Amazon
> Alexa for Shopping is buying with auto-restock and scheduled deliveries, and
> Walmart Sparky users show 35% higher average order values. When the shopper is
> an algorithm, your product data, not your ad budget, decides whether you win
> the sale.

**Proposed**
> It matters because those agents are live. Amazon Alexa for Shopping runs
> auto-restock and scheduled deliveries, and Walmart reports that Sparky users
> spend 35% more per order than other shoppers. When an agent narrows the
> choice, your product data decides whether you make the list it chooses from.
> Advertising is starting to appear inside AI shopping assistants too, so data
> does not replace ads. It decides whether you qualify without them.

---

## Edit 3. The Shift

**Why.** "Just broke" and "this quarter" date the section to May. "They don't
click your sponsored ad" conflicts with the Criteo and ChatGPT Ads coverage.

**Current H2:** The Assumption That Just Broke
**Proposed H2:** The Assumption That Is Breaking

**Current:** "That assumption broke this quarter."
**Proposed:** "That assumption is starting to break."

**Current (third paragraph, first sentences)**
> They don't see your hero image. They don't read your clever headline. They
> don't click your sponsored ad. They parse structured data, ...

**Proposed**
> They don't see your hero image. They don't read your clever headline. They
> parse structured data, ...

(Rest of the sentence unchanged.)

**Current (callout)**
> This is not a prediction about 2030. Alexa for Shopping is live. Sparky is
> operational. The trajectory has become a current quarter results story.

**Proposed (callout)**
> This is not a prediction about 2030. Alexa for Shopping is live, Sparky is
> operational, and Walmart, Google, OpenAI and Meta have each shipped or
> announced ways for agents to shop. What is still missing is reliable data on
> how much buying agents do.

---

## Edit 4. Signal Observatory (replace `SIGNALS`)

**Why.** The list stops at May 2026, two cards are unlinked and unsourced, and
the OpenClaw wording ("OpenAI's OpenClaw", "OpenClaw agent in beta") could not
be confirmed from the site's own sourcing. Add a line under the intro:
"Updated November 2026."

Proposed cards, in order (status in brackets):

1. **Alexa for Shopping (formerly Rufus)** [Live]. Unchanged.
   Link: `/blog/rufus-alexa-for-shopping-rebrand-marketplace-sellers`
2. **Walmart Sparky** [Live]
   > Live on walmart.com and inside ChatGPT and Gemini. In Q1 FY27, Walmart
   > reported Sparky users' average order value at 35% above other shoppers',
   > with usage shifting from discovery to reorder.

   Link: `/blog/walmart-sparky-q1-earnings-replenishment-shift`
3. **Walmart Agent Profiles + Agent Gateway** [Building] (new)
   > Announced October 21, 2026. Each outside agent a customer authorizes gets
   > its own profile in the account, set either to approve every purchase or to
   > buy within a spending limit, with an invitation-only Agent Gateway beta.

   Link: `/blog/walmart-agent-gateway-agent-profiles`
4. **Google Universal Cart + AI Mode** [Live] (replaces the Gemini ad-copy card)
   > Universal Cart launched in the U.S. on October 15, 2026, in Search and the
   > Gemini app. Shoppers save products from many retailers in one cart, then
   > pay with Google Pay on Google or move the items to the retailer's cart.

   Link: `/blog/google-universal-cart-retailers-ucp-checkout`
5. **OpenAI ChatGPT** [Live] (removes OpenClaw)
   > ChatGPT Ads went self-serve on May 5, 2026. Since November 10, Businesses
   > in ChatGPT (beta) lets companies verify their profile, connect a product
   > feed and publish a branded Business Agent. None of it buys a place in
   > ChatGPT's independent answers.

   Link: `/blog/openai-business-hub-chatgpt-business-agents`
6. **Meta Muse** [Live] (replaces the May Hatch card)
   > More than 10 million people in the US and Canada set up Muse, Meta's
   > personal AI agent, in about six weeks, and Meta says shopping is its most
   > common use. Setups are not active users, and Meta has not disclosed how
   > many people shop with it.

   Link: `/blog/meta-muse-shopping-agent-commerce-adoption`
7. **Target Ask Target** [Live] (new)
   > In beta since October 21, 2026. Target says shoppers using it move to
   > purchase at about twice the rate it sees elsewhere. Target has not shown
   > how much of that difference the assistant caused.

   Link: `/blog/target-ask-target-ai-shopping-assistant-purchase-rate`
8. **AWS Marketplace agentic payments** [Live] (new, B2B)
   > Since November 19, 2026, AgentCore agents can buy selected x402-enabled
   > AWS Marketplace products per request, billed to the existing AWS account,
   > within the budgets and product limits an organization configures.

   Link: `/blog/aws-marketplace-agentcore-agentic-payments-x402`
9. **Perplexity Shopping** [Live]. Unchanged, still unlinked. See question 2.

**Removed:** Apple Intelligence + Siri (unsourced, no TRH article). See
question 2.

---

## Edit 5. The Research Consensus

**Why.** "The forecast risk has collapsed" contradicts the protected sentence on
`/ai-commerce-2027` and the site's adoption-definition article. "In the last six
months" is stale.

**Current (first paragraph, opening)**
> AEO is no longer a single-source forecast. Morgan Stanley, McKinsey, Gartner,
> IDC, and Juniper Research have all published agentic commerce forecasts in the
> last six months.

**Proposed**
> AEO is no longer a single-source forecast. Morgan Stanley, McKinsey, Gartner,
> IDC, and Juniper Research have all published agentic commerce forecasts.

(Rest of the paragraph unchanged.)

**Current (gold callout):** "The forecast risk has collapsed."

**Proposed (gold callout)**
> Forecasts agree on direction. Measured adoption does not: two September
> surveys put AI shopping delegation at 69% and 7%, because they measured
> different behaviors.

Add a second link under the existing one:
"Why adoption numbers disagree" → `/blog/agentic-commerce-adoption-definition-problem`

---

## Edit 6. The Provocation

**Why.** "20 to 40% of revenue on paid advertising" has no source. "AI agents
don't click ads. They don't see sponsored placements." conflicts with the
site's Criteo and ChatGPT Ads coverage.

**Current (paragraphs 1 to 3)**
> Right now, most e-commerce brands spend 20 to 40% of revenue on paid
> advertising. That spend assumes a human shopper will see the ad, click it, and
> convert.
>
> AI agents don't click ads. They don't see sponsored placements. They evaluate
> product data.
>
> If 10% of your sales eventually come through agent-mediated shopping, and your
> organic product data isn't strong enough to win on merit, you don't just lose
> that 10%. You lose it to a competitor whose data is better.

**Proposed**
> Most e-commerce advertising assumes a human shopper will see the ad, click it,
> and convert.
>
> Agents change where that happens, not whether ads exist. Criteo now sells
> Sponsored Products inside retailers' AI shopping assistants, and ChatGPT
> carries ads. But an ad can only put a product in front of an agent. It cannot
> make a listing with missing attributes, unclear fulfillment or weak reviews
> look like a confident match.
>
> If 10% of your sales eventually come through agent-mediated shopping, and your
> organic product data isn't strong enough to win on merit, you don't just lose
> that 10%. You lose it to a competitor whose data is better.

Link "Criteo now sells Sponsored Products inside retailers' AI shopping
assistants" → `/blog/ai-shopping-assistant-retail-media-sponsored-products`.
The pull quote and closing line stay unchanged.

---

## Edit 7. Definition section

**Current (end of second paragraph):** "The forecast risk has collapsed."
**Proposed:** "What none of them yet measures well is how much buying agents
actually do."

---

## Edit 8. Boundary box: add authorization

**Why.** The site's recent research (Walmart Agent Profiles, AWS, Visa/BILL,
NPCI) argues that who authorizes the agent is a separate layer from product
readiness and shopper representation. The page has no place for it.

**Current label:** One boundary worth naming
**Proposed label:** Two boundaries worth naming

Keep the existing paragraph unchanged, then add:

> The second boundary is <span>authorization</span>: who allowed the agent to
> spend, on what, and up to how much. Increasingly the platform answers that,
> not the agent. Walmart's{' '}
> <Link href="/blog/walmart-agent-gateway-agent-profiles">Agent Profiles</Link>{' '}
> let a customer require approval for every purchase or set a spending limit,
> and{' '}
> <Link href="/blog/aws-marketplace-agentcore-agentic-payments-x402">AWS</Link>{' '}
> lets an organization bound an agent with a budget and a permitted catalog.
> Merchants do not set those limits. They do decide whether their product
> qualifies inside them.

---

## Edit 9. What Agents Actually Evaluate: review card

**Why.** "Agents run sentiment analysis across review text. They can parse
thousands of reviews in seconds" is stated as fact without a source.

**Current**
> Not just star ratings. Agents run sentiment analysis across review text. They
> can parse thousands of reviews in seconds and identify patterns humans would
> miss.

**Proposed**
> Not just star ratings. AI shopping assistants read and summarize review text,
> so a recurring complaint can outweigh a strong average.

---

## Edit 10. Remove "How the Shift Unfolds"; refresh The Arc

**Why.** Two timelines overlap. The second one is dated "Right Now: Q2 2026"
and "Next 6 to 12 Months" from May, and claims early GEO adopters are "already
90 days ahead".

- Delete the "How the Shift Unfolds" section (Phases 1 to 3 and its gold
  callout).
- Keep its one durable idea by adding this paragraph to "Already Doing GEO?
  You're Ahead.", after the second paragraph:

  > One effect worth watching: as Alexa for Shopping auto-restock and Sparky
  > reorders build up purchase history per household, an agent's default
  > reorder choice may get harder to dislodge. In-stock consistency,
  > subscription enrollment and pricing stability become the levers.

- In `src/components/AEOTimeline.tsx`, the 2026/27 milestone:

  **Current:** "Agent-mediated shopping grows from novelty to meaningful
  channel. Early adopter brands with strong structured data start seeing
  agent-driven purchases. Brands reliant on paid ads begin feeling the gap."

  **Proposed:** "Platforms open carts, checkout and accounts to agents: Alexa
  for Shopping auto-restock, Walmart Agent Profiles, Google Universal Cart and
  agent payments on AWS Marketplace. The open question is volume, which no
  platform has yet disclosed in a comparable way."

---

## Edit 11. FAQ

**Q: Are AI shopping agents actually buying products today?**
Current answer opens "Yes, and at scale." and ends "The early-version framing
is outdated." It also names OpenClaw.

> Yes, but nobody has measured how much. Alexa for Shopping runs auto-restock,
> price-triggered purchases and scheduled deliveries. Walmart reports that
> Sparky users spend 35% more per order than other shoppers, and Meta says
> shopping is Muse's most common use. None of these companies has disclosed
> agent purchase volume in a comparable form, and adoption surveys disagree
> because they measure different behaviors.

**Q: Do AI agents ignore paid ads?** → **Do ads still matter when an AI agent
is shopping?**

> Yes, but they do a different job. Ads are moving into AI shopping: Criteo
> sells Sponsored Products inside retailers' AI assistants, and ChatGPT carries
> ads. What an ad cannot do is supply the structured data, fulfillment clarity
> and review quality an agent uses to judge fit. Paid placement can put a
> product in front of an agent. Product data decides whether it qualifies.

**Q: When should a $500K-5M brand start thinking about AEO?** → **When should
a seller start preparing for AEO?** (consulting-era revenue band removed)

> Before the volume is visible. Alexa for Shopping already reorders for
> households, and a default reorder position gets harder to dislodge once an
> agent has purchase history to lean on. The foundation work is the same data
> discipline GEO already requires, so preparing for agents does not compete with
> the rest of the roadmap.

**Q: Can I do AEO myself?** → **Where should a seller start?** (implied
service alternative removed)

> With structured data completeness: does every listing carry the attributes an
> agent needs to make a confident purchase decision? From there the fuller
> picture spans trust signals, pricing context, fulfillment clarity, review
> quality, and cross-platform consistency. The same data discipline that
> improves GEO is what prepares a catalog for agents, so most of the work
> compounds across both.

**Q: What if I only sell on Amazon?**
- "the agent buying on Amazon's behalf" → "the agent buying on the shopper's
  behalf inside Amazon".
- Delete the last sentence, "Agents outside Amazon (Perplexity, OpenClaw,
  Google AI Mode) can still evaluate your Amazon listings." It names OpenClaw,
  and whether outside agents can reach Amazon listings is not something the
  site has sourced.

**Q: Will AEO make SEO and GEO obsolete?** Delete. It repeats the first FAQ,
"Is AEO replacing GEO?", almost word for word.

---

## Edit 12. Key takeaways

**#2 current:** "It is operational now, not a 2030 forecast. Amazon Alexa for
Shopping is live with auto-restock and scheduled purchases, and Walmart Sparky
users show 35% higher average order values with usage shifting toward reorder."

**#2 proposed:** "The infrastructure is operational now, not a 2030 forecast.
Alexa for Shopping runs auto-restock and scheduled purchases, Walmart is opening
customer accounts to outside agents, and Google's Universal Cart reaches
checkout. Purchase volume through agents is not yet measured."

**#3 current:** "Agents ignore hero images, ad placements, and clever copy. ..."
**#3 proposed:** "Agents look past hero images and clever copy. ..." (rest
unchanged)

**#5 current:** "Five major research firms converge on agentic commerce reaching
10 to 20 percent of US ecommerce by 2030, so the forecast risk has collapsed."
**#5 proposed:** "Five major research firms converge on agentic commerce
reaching 10 to 20 percent of US e-commerce by 2030. Forecasts agree on
direction; comparable measures of adoption do not exist yet."

---

## Edit 13. Continue exploring AI Commerce

Replace two GEO-leaning links that `/geo` already carries:

- Remove "GEO vs SEO for marketplace sellers" and "Google AI Mode".
- Add **AI Commerce 2027** → `/ai-commerce-2027`: "The living outlook: what is
  live, what is announced, and what the evidence does not yet show."
- Add **Why AI shopping adoption numbers disagree** →
  `/blog/agentic-commerce-adoption-definition-problem`: "Two surveys, 69% and
  7%, and the six behaviors hiding under one word."

---

## Questions for the senior editor

1. **Hero tone.** The proposed hero gives up the urgency ("The ones waiting will
   not know what happened"). Keep a softer urgency line, or is the evidence-first
   version right for a flagship?
2. **Perplexity and Apple cards.** Neither has a TRH article. I removed Apple
   (no source) and kept Perplexity unchanged. Remove Perplexity as well, or
   source both?
3. **Meta Hatch.** The May Hatch card is replaced by Muse. I could not confirm
   from the site's sourcing how Hatch and Muse relate, so the draft does not
   connect them. The Hatch article stays live and unlinked from `/aeo`.
4. **Authorization box.** Two examples (Walmart, AWS). Add Visa/BILL or NPCI UPI,
   or keep it short?
5. **Sources block.** Add a short "Sources" list at the end of the page, as
   flagship pages meant to be cited usually have?
