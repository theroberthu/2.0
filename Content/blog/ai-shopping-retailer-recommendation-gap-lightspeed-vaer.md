# The recommendation gap

**Status:** DRAFT ONLY. Nothing published, committed, pushed, written to Supabase, added to the sitemap, or generated as an asset.
**Type:** Research note
**Assignment:** TRH Editorial Board, 2026-10-02
**Overlap gate:** PASS. See OVERLAP REVIEW.

---

## TITLE SPLIT

- **title (editorial H1):** AI Can Find the Small Retailer. It Still Recommends the Big One.
- **meta_title:** AI Shopping Can Find Small Retailers and Still Skip Them

---

## DRAFT BODY

### AI Can Find the Small Retailer. It Still Recommends the Big One.

In August I wrote that [citation and recommendation are the same discipline](/blog/google-ai-overview-ai-mode-citation-teardown-geo). An AI reads content, decides what it can use, and surfaces it. Same task, different surface.

A study published on September 29 has made me split that claim in two.

### What was measured

Vaer AI ran the research on behalf of Lightspeed Commerce, which sells software to independent retailers and launched an AI visibility campaign alongside the findings. Hold that in mind throughout. The sponsor benefits from this result.

The scale is unusual. Roughly 460,000 AI responses to 20,000 size-neutral shopping prompts across ten categories and four cities, Los Angeles, San Francisco, New York and Montreal, between June and August 2026. Two conditions: 200,000 answers with web search off, and 260,000 with live search on across ChatGPT, Google AI Mode and Google AI Overviews. Retailers were sorted into bands by revenue, large above $1 billion, mid from $50 million to $1 billion, small below.

With search off, the models named a national chain 63% to 70% of the time and a small or local store around one in ten. Shown one of each with no labels, they picked the larger 90% to 94% of the time. That is a measurement of model priors, not of how anyone shops, and it should not be quoted as the live result.

### The number that reframes the problem

Turn live search on and something more interesting happens.

Among the retailers the AI links to as sources, large and small run about even, roughly 38% each. Then follow the answer forward. From what it cites, to what it names in the sentence, to what it names first, large retailers gain at every step and small ones fall away. By the lead recommendation, a big chain wins about two and a half times as often as a small one.

The study gives one concrete answer to make it legible. A shopper asks ChatGPT where to buy office supplies in New York. Three of the six cited links are small local shops. The store named and recommended first is Staples.

The small retailers were found. They were read. They were cited. They still lost the recommendation.

### Citation is evidence of retrieval. Recommendation is evidence of selection.

That is the revision to what I wrote in August. Retrieval and selection share a foundation, which is being legible enough for a machine to use you, and then they come apart. [Being unreadable keeps you out of the evidence set](/blog/adobe-ai-traffic-393-percent-retail). Being readable does not guarantee you survive it.

The platform splits make the separation hard to dismiss. Google AI Mode pulls heavily from local business listings, around 58% of its citations, yet those convert into the top recommendation only 24% of the time. ChatGPT runs the opposite way, with large retailers at 41% of citations but 58% of top recommendations. Different source mixes, same destination: across models, the large retailer share of lead recommendations lands in a narrow 46% to 58%.

The magnitude differs by platform. The direction does not.

### The pattern gets stronger as the shopper gets closer

Broad requests leave room. Ask for toys for a six-year-old and a small shop is the top pick roughly a third of the time. Name a specific product and that falls to about one in ten while the large retailer share climbs from about 40% to 60%.

A mechanism may sit underneath it. When ChatGPT writes its own background web queries, the retailer name it types is a large or mid-sized chain about 97% of the time, with small and local stores at 1% to 4%. It writes a store name into the query about a third of the time for a vague request and two thirds for a branded product. If the search goes looking for chains, the retrieved set is shaped before a single result returns.

I would hold that loosely. The study observes the queries and the outcomes. It does not isolate which mechanism causes the recommendation advantage, and Vaer presents the confidence explanation as a plausible reading rather than a finding.

### The counterargument that should slow everyone down

The obvious story is bias against small business. The more useful question is whether the behavior is wrong.

If someone names a specific product, a system that recommends a retailer almost certain to stock it, ship it quickly and accept the return is not obviously malfunctioning. It may be responding rationally to the probability that the errand succeeds. The study measures which retailer gets recommended. It does not measure whether the item was in stock, what it cost, how fast it shipped, or whether the shopper was better served.

That reframes this from a fairness complaint into a systems question. The open question is what evidence a smaller retailer would have to publish for a recommender to be as confident about it as it is about Best Buy. Availability, fulfillment reliability, returns, assortment depth. Those are commerce signals rather than content signals, and most [GEO work](/geo) does not reach them.

### What this does to measurement

Here is the operator consequence, and it is uncomfortable for a tooling category I am sympathetic to.

Most AI visibility tools count citations, mentions and share of voice. This study says a retailer can hold 38% of citations and far less of what shoppers actually read, and that one platform converts 58% of its citations into 24% of its recommendations. A citation dashboard can tell you the AI saw you. It cannot tell you the AI chose you.

The better questions are positional. At which step of the answer do you disappear, do you win browsing intent and lose product-specific intent, and what would have to be true for a system to put you first.

### The limits, which are real

This is sponsored research by a company selling to the retailers it found disadvantaged, conducted by a consultancy that sells AI visibility work. The full technical report is available on request rather than published, so the methodology cannot be independently reproduced. Four cities are not North America. Category variation is large, with local stores appearing in 17% of AI Overview answers for electronics and somewhere around 38% to 45% for toys and pet supplies. Model behavior changes monthly.

And the scope is narrower than the coverage will suggest. This studies which retailer gets recommended. It does not establish that large product brands enjoy the same advantage, and it does not show that any of these recommendations produced a click, let alone a purchase.

What it does establish is that being findable and being chosen are two different achievements, measured at two different points in the same answer. If you only track the first one, which of your shoppers do you think you are counting?

---

## OVERLAP REVIEW

Run across `Content/blog/*.md`, `scripts/insert-*.mjs`, the published Supabase corpus and `src/lib/ai-commerce-2027.ts`.

**Corpus searches run:** citation (15 files), recommendation, retrieval (1), visibility, authority (25), confidence, local, independent, large retailer (3), big brand, recommendation gap (1, unrelated, in a Walmart search analytics piece). Lightspeed and Vaer: zero.

| Coverage | Owns | This draft |
|---|---|---|
| I Got Cited in Two Google AI Surfaces in One Week | Five traits shared by cited posts, and the explicit claim that **"Citation and recommendation are the same discipline"** with "The surface differs. The underlying task does not." | **This is the claim being revised**, and the draft opens on it. The revision is narrow: the disciplines share a foundation, then separate at selection. |
| AI Traffic to Retailers Jumped 393% | AI-referred traffic growth, conversion lift, and that 34% of homepage content is invisible to models | Linked once. That article asks whether AI can access and understand you. This one asks what happens after it has. |
| Generative Engine Optimization pillar | Structured product data, attributes, reviews, machine-readable listings, the six-dimension framework | Linked once, as the thing being extended rather than repeated. No schema, feed or listing advice appears here. |
| The Assistant Builds the Cart | Brand competition for inclusion in an AI-assembled basket | Not linked. Considered and cut. That is product inclusion inside a cart; this is retailer selection inside an answer, and the brief's wording discipline makes conflating them the main risk. |
| AI Did Not Kill the Messy Middle (published yesterday) | Discovery relocating into the machine, and gatekeeping becoming less inspectable | Not linked. Deliberate. The two pieces are complementary and linking them this soon would read as a series rather than a finding. Worth revisiting in a later piece. |

**Verdict: PASS.** No article owns the retrieval-versus-selection split. One article asserts the opposite, by name, which makes this a revision rather than a repetition.

The thesis is not that big retailers rank better. It is that machine readability gets a retailer into the evidence set and does not determine whether it survives to the recommendation.

---

## VAER PRIMARY-RESEARCH AUDIT

Source: "When you ask AI where to shop, it sends you to the big guys," vaer.ai, September 29, 2026, by Tom Wells, marked "In partnership with Lightspeed."

| Item | Status |
|---|---|
| Author | **Tom Wells**, co-founder and principal consultant, Vaer AI |
| Sponsorship | **Explicit.** "conducted by Tom Wells... on behalf of Lightspeed Commerce" |
| Study dates | June to August 2026 |
| Total responses | ~460,000. 200,000 search off, 260,000 search on |
| Total links | Vaer says 2.5 million. **Lightspeed's release says more than 2.4 million.** Minor discrepancy, noted here, not used in the draft |
| Prompts | 20,000, size-neutral in parts 1 and 2 |
| Categories | 10 |
| Cities | Los Angeles, San Francisco, New York, Montreal |
| Models, search off | **ChatGPT and Google Gemini** |
| Models, search on | **ChatGPT, Google AI Mode, Google AI Overviews.** Gemini does not appear in the live-search condition. Lightspeed's release lists Gemini among the platforms generally, which is where that confusion comes from |
| Runs | "repeated across several runs" |
| Size bands | **L $1B+ revenue, M $50M to $1B, S under $50M.** Whether revenue is global or regional is **not disclosed** |
| Classifier validation | One consistent classifier, validated against a hand-built answer key and a second independent model agreeing ~99.5% on the large versus small split (per Lightspeed's methodology note) |
| Confidence intervals | Lightspeed says all headline figures carry 95% intervals. **No intervals are shown in either public document** |
| Raw data | **Not public** |
| Full methodology | **"The full technical report and methodology are available on request."** Not published |
| Peer review | **None.** The draft never calls it peer reviewed or independent |

---

## FINDINGS AUDIT

**No-search condition:** national chain named 63% to 70%; small or local about one in ten; head-to-head 90% to 94%; about ten chains account for 40% to 44% of all recommendations; no small or local store in the top twelve; Los Angeles 70% to 77% versus Montreal 57% to 62%.

**The draft uses the 90-94% figure once and immediately bounds it** as a measurement of model priors, not of live shopping.

**Live-search condition:** named store is a national chain 46% to 58% depending on model, small or local about a quarter. Google AI Overview names no small or local store in 68% of shopping answers, while ChatGPT and AI Mode surface a local retailer in roughly 70% of responses.

**The citation funnel, verbatim from Vaer:** "Among the stores the AI links to, big and small run about even, roughly 38 percent each." Moving from links to names to first name, "the stores grow at every step while the small ones drop away. By the lead pick, a big chain wins about two and a half times as often as a small one." **The 38% pair is a large-versus-small comparison and does not account for mid-sized retailers**, which is why the draft says "run about even" rather than implying the two shares are the whole.

**Platform splits:** AI Mode, local business listings about 58% of citations, converting to top recommendation 24% of the time. ChatGPT, large retailers 41% of citations and 58% of top recommendations. Vaer's own observation that top-recommendation share is "remarkably similar, ranging from 46% to 58%" supports the magnitude-versus-direction line, which is used.

**Office supplies example:** ChatGPT, New York, six cited links, three small local shops, Staples "named and recommended first." Used once, as illustration.

**Specificity:** browsing roughly one in three for a small shop, specific product about one in ten, large retailer rising from about 40% to 60%.

**Query fan-out:** retailer names ChatGPT writes into its own background searches are large or mid-sized chains about 97% of the time, small and local 1% to 4%. It writes a store name at all about a third of the time for vague requests and two thirds for branded products. **Vaer does not state how these queries were observed**, so the draft presents it as reported and labels the inference loosely.

**Modifier test:** "independent" more than doubles small and local picks, from about a third to nearly four fifths, and cuts large-chain share of retailer sources from about 44% to as low as 9%, strongest on Google platforms. "Local" and "near me" barely move it, because a nearby chain counts as local. **Run on a randomized sample of the full prompt set**, which Vaer discloses. The draft does not use this section, to avoid becoming a prompt-tips article.

**Category:** electronics, local store in 17% of AI Overview answers; toys and pet supplies around 38% to 45%. Used once as a limit.

---

## LIGHTSPEED RELEASE AND SURVEY AUDIT

Release verified for the 90-94%, 46-58%, 68% AI Overview, one-third to one-in-ten specificity, and the "independent" result.

**Companion Censuswide survey, 2,000 North American consumers:** 56% have used AI for shopping decisions, nearly three quarters among under 35; 41% trust AI shopping recommendations; 50% would shop locally more if AI made independent retailers easier to find; 33% think AI should prioritize small or local businesses versus 13% for large brands.

**Field dates, weighting, eligibility, age range and margin of error are not disclosed.** The draft does not use any survey figure. The behavioral dataset is stronger and mixing the two would blur denominators.

**Commercial interest, stated in the draft:** Lightspeed sells to independent retailers, is launching an AI visibility awareness campaign, and is expanding its own AI product line. Vaer sells AI search research and advisory.

---

## MEASURED, INTERPRETED, AND TRH INTERPRETATION

| Measured | Interpreted by Vaer | TRH interpretation |
|---|---|---|
| Large retailers take 46% to 58% of lead recommendations with live search | Models fall back on what they are confident they know | Retrieval and selection are separate achievements |
| Citations run roughly even, lead picks do not | Training familiarity carries through live search | A citation metric overstates commercial visibility |
| Specificity shifts the mix toward large retailers | The model plays it safe on unfamiliar products | The confidence question is a commerce-evidence question, not a content question |
| Query fan-out names chains 97% of the time | Bias is partly settled before results return | Reported as observed, mechanism not established |

The draft never states that models recommend chains because they trust them, and never claims size causally determines ranking.

---

## NON-NEGOTIABLE GUARDRAILS

1. **Sponsorship is disclosed in the body, early.** Protecting sentence: "The sponsor benefits from this result."
2. **The 90-94% figure is bounded on first use.** Protecting sentence: "That is a measurement of model priors, not of how anyone shops."
3. **Retailer, not brand.** The draft never generalizes to product-brand ranking and says so explicitly in the limits.
4. **No citation-to-traffic or recommendation-to-purchase claims.** Protecting sentence: "it does not show that any of these recommendations produced a click, let alone a purchase."
5. **Mechanism stays interpretive.** Protecting sentence: "It does not isolate which mechanism causes the recommendation advantage."
6. **The rational-fulfillment counterargument gets its own section**, not a clause.
7. **Methodology is on request, not published**, and the draft says the research cannot be independently reproduced.
8. **The August revision stays narrow.** Protecting sentence: "Retrieval and selection share a foundation... and then they come apart."

---

## PROTECTED LINES AND THE CORRECTED FORMULATION (Editorial Board, 2026-10-02)

Preserve both verbatim in this article and in future work on this thread:

1. "Citation is evidence of retrieval. Recommendation is evidence of selection."
2. "A citation dashboard can tell you the AI saw you. It cannot tell you the AI chose you."

Both are stronger than the original framing because they give operators a measurement model rather than a metaphor.

**The corrected formulation, which supersedes the August claim.** "Citation and recommendation are the same discipline" was too compressed. The corpus position is now: they share a foundation, but retrieval and selection separate once the model has enough evidence to choose among merchants. Do not restate the original claim without that correction.

**Protected section: the rational-fulfillment counterargument keeps its own section.** If large retailers are easier for a model to verify on stock, shipping, assortment, returns and reliability, the problem is broader than GEO content. It becomes recommendation confidence. Never compress this into a clause, and never let the piece become an AI discriminates against small retailers story.

**Protected evidence: the platform split.** ChatGPT and Google AI Mode reach similar lead-recommendation concentration from very different source mixes. That is what makes the selection layer hard to dismiss as a retrieval artifact.

**Deliberate exclusions, all four.** The Censuswide survey, the DoorDash connection, the Assistant Builds the Cart link, and the prompt-modifier section. Keep them out.

---

## STRONGEST COUNTERARGUMENTS

In the body: sponsor interest on both sides, unpublished methodology, the artificiality of the no-search condition, four cities, category variance, model volatility, and the gap between recommendation and any commercial outcome.

The one given its own section, because it is the most serious: the recommendation pattern may be a rational response to fulfillment probability rather than a defect, and the study measures neither stock, price, shipping nor satisfaction.

---

## DURABLE THESIS

AI visibility is not one problem. A retailer can be legible enough for a system to retrieve and cite, and still fail to become the recommendation a shopper reads. The citation share and the lead-recommendation share diverge inside the same answer, and the divergence widens as the request gets more specific. Machine readability buys entry to the evidence set. Something closer to confidence decides what survives it.

**Lines used, two:** "Citation is evidence of retrieval. Recommendation is evidence of selection." and "A citation dashboard can tell you the AI saw you. It cannot tell you the AI chose you."

---

## SEO PACKAGE

- **slug:** `ai-shopping-retailer-recommendation-gap-lightspeed-vaer`
- **title (H1):** AI Can Find the Small Retailer. It Still Recommends the Big One.
- **meta_title:** AI Shopping Can Find Small Retailers and Still Skip Them (54 chars)
- **meta_description:** A 460,000-response study found small retailers hold about 38% of AI citations and far less of the lead recommendations. Being cited is not being chosen. (151 chars)
- **category:** GEO & SEO
- **tags:** GEO, AI visibility, AI shopping, retailers, citations, recommendations
- **og_image:** `/images/blog/ai-shopping-retailer-recommendation-gap-lightspeed-vaer.svg` (NOT generated)

---

## INTERNAL-LINK PLAN

**Three links:**

1. `/blog/google-ai-overview-ai-mode-citation-teardown-geo` (the claim being revised)
2. `/blog/adobe-ai-traffic-393-percent-retail` (access and readability, distinguished from selection)
3. `/geo` (the pillar this extends)

Considered and cut: The Assistant Builds the Cart, because retailer selection and product inclusion are different objects and the brief's wording discipline makes that the main risk in this piece. Also cut: yesterday's DoorDash article, which is complementary but would make the two read as a series.

**LinkedIn:** no Hoot edition in the index covers AI recommendation measurement, so nothing is cited.

---

## AI COMMERCE 2027 RECOMMENDATION

**No change.** This is recommendation-visibility research, not agent transaction evidence, and it is sponsored work with unpublished methodology. It does not advance any of the eight shifts. If a third party reproduces the citation-versus-recommendation divergence independently, that would be worth a line in the GEO discipline shift rather than a tracker row.

---

## MECHANICAL CHECKS

- Source body word count: 1077
- Em dashes: 0. En dashes: 0
- Questions in body: 1 (closing)
- Internal links: 3 (maximum was 3 for this brief)
- No lead form, consultation CTA or consulting positioning
