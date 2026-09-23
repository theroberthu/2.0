# Instacart, Gopuff and retail media as shared infrastructure

**Status:** DRAFT ONLY. Nothing published, committed, pushed, written to Supabase, added to the sitemap, or generated as an asset.
**Type:** Research note
**Assignment:** TRH Editorial Board, 2026-09-22
**Overlap gate:** PASS. See OVERLAP REVIEW.

---

## TITLE SPLIT

- **title (editorial H1):** Retail Media Is Becoming Infrastructure, Not a Network Every Retailer Builds
- **meta_title:** Instacart Carrot Ads and Gopuff: Retail Media Infrastructure

---

## DRAFT BODY

### Retail Media Is Becoming Infrastructure, Not a Network Every Retailer Builds

Gopuff is the company that should not need this. It runs its own ecommerce platform, its own micro-fulfillment centers, its own delivery network, its own customer relationship, and its own advertising business. If any retailer has earned the right to build the whole stack, it is that one.

On September 22 it took somebody else's advertising infrastructure anyway.

### What was announced

Instacart and Gopuff said Gopuff will join the Instacart Marketplace and use Instacart Carrot Ads to power advertising on Gopuff's own digital storefront in the United States. Orders placed through Instacart for Gopuff products are fulfilled and delivered by Gopuff, using its own network of micro-fulfillment centers. More than 9,000 brand advertisers using Instacart Ads will be able to extend campaigns to Gopuff and BevMo! customers.

Instacart says more than 310 partners now use Carrot Ads, and describes it as extending the same technology, optimization and accredited measurement that powers its own marketplace.

This is really two deals in one announcement. One puts Gopuff's assortment in front of Instacart's customers. The other puts Instacart's ad technology underneath Gopuff's own storefront. A retailer could want either without the other.

Advertisers wanting to run specifically on Gopuff's storefront will do that through their Instacart team, so even the targeted version of this inventory is bought through Instacart's commercial surface.

The sentence that matters most is easy to skim past. Gopuff Ads, the release says, "continues to work directly with brands on bespoke, full-funnel activations." Gopuff did not hand over its advertising business. It kept the part it sells and rented the part it runs on. Gopuff is not exiting retail media. It is deciding which parts of the stack need to remain proprietary.

### This is not the arrival of white-label retail media

Carrot Ads has been doing this for years, and saying so matters, because the news here is not the model.

Sprouts launched a retail media network on Carrot Ads in 2023. Hy-Vee's RedMedia joined in 2025. Instacart's own November 2025 announcement called Carrot Ads its "white-label ad technology," counted more than 240 ecommerce partners and more than 7,500 CPG advertisers, and named Hy-Vee, Sprouts, Thrive Market and Uber Eats as partners. Ten months later those numbers are 310 and 9,000.

So the platform is not new and the growth is real. What is new is the profile of the adopter. A grocery chain renting ad infrastructure is buying a capability it never had. A digitally native, vertically integrated operator with an existing ad sales business doing the same thing is a different decision.

### The layers, as I read them

This framing is mine rather than Instacart's, and the line between the layers is blurrier than any diagram suggests.

What Gopuff keeps looks like the commercial layer. The shopper relationship, fulfillment speed as the actual product, first-party insight into instant-commerce behavior, direct relationships with brands, and the bespoke programs it sells against them.

What Gopuff rents looks like the plumbing. Ad serving, standardized sponsored placements, campaign workflow, optimization, aggregated advertiser demand, and third-party-accredited measurement. Instacart says Gopuff will use Carrot Ads customization options, which suggests the boundary is adjustable rather than fixed.

Renting the plumbing is not the same as ceding control. Gopuff still owns the shopper relationship and the first-party data, sets the merchandising rules, decides which brands it builds programs for, and controls what its storefront offers. Ownership of a layer and control of a business are different questions, and conflating them is the easiest mistake to make here.

Put plainly, the question may no longer be whether a retailer should build a retail media network. It may be which layers are strategically differentiating enough to justify owning.

### A useful contrast with the Amazon case

Two weeks ago I wrote that when [Amazon began selling ChatGPT ad inventory](/blog/amazon-ads-chatgpt-openai-partnership), the advertiser relationship moved outward while the commerce data and the measurement loop did not visibly travel with it.

This is the opposite direction. Carrot Ads is infrastructure built to operate inside somebody else's commerce environment, and measurement is explicitly part of the package: Instacart extended its Media Rating Council accreditation to Carrot Ads placements in November 2025, covering impressions, clicks, click-through rate and viewable impressions on partner sites and apps. That accreditation validates measurement process for named metrics. It is not evidence of incremental sales, partner profitability or campaign effectiveness.

That is an architectural difference, not a scorecard. Amazon's model exports demand from a network it owns. Instacart's model installs the network underneath retailers it does not own. Both can work, and they create different dependencies.

### The network effect, stated as a hypothesis

Here is the mechanism I think is operating, offered as analysis rather than established economics.

Each new partner surface adds inventory that Instacart's advertisers can buy without a new integration. Each new advertiser adds demand that partner retailers can monetize without building a sales organization. If both sides keep growing, the platform compounds across retailers whose storefronts it will never own.

Instacart publishes the partner count and the advertiser count. It does not publish what those partners earn, how concentrated activity is across the 310, or whether a mid-sized partner does better on Carrot Ads than it would have done alone. Counting participants is not demonstrating economics, and I would want partner-level results before treating the flywheel as proven.

### What this asks an operator to decide

The sorting differs by retailer.

Strong candidates for owning: the shopper relationship, first-party data and the rules for using it, merchandising and customer experience, advertiser strategy, and the differentiated programs a self-serve platform cannot sell.

Reasonable candidates for renting: ad serving, campaign workflow, standardized sponsored inventory, demand aggregation and measurement plumbing. These are table stakes that get better with scale and rarely win an account on their own.

A retailer with enormous scale and a large brand-facing sales team may still conclude the whole stack is worth building. A retailer with neither is probably buying an engineering project it cannot staff.

### The objections

Several are serious. Shared infrastructure means sharing economics, and a partner is funding a platform that also serves its competitors. Standardized inventory looks the same everywhere, which erodes the differentiation retail media was supposed to create. Advertiser demand concentrating into a few ecosystems is good for buyers and eventually constraining for sellers. First-party data is not equally portable, and the terms governing it matter more than the ad server does.

The largest retailers may simply decline the trade. A company with the scale to amortize its own ad platform, and the brand demand to fill it, keeps both the margin and the roadmap.

There is also a counting problem. More than 310 partners is a real number that says nothing about how many are meaningfully active, and adoption is not profitability. Gopuff joining proves Gopuff made a decision, not that the decision pays.

If retail media becomes infrastructure most retailers rent rather than build, what is left that actually distinguishes one retailer's media business from another's?

---

## OVERLAP REVIEW

Run across `Content/blog/*.md` and `scripts/insert-*.mjs`.

**Zero prior occurrences anywhere:** Carrot Ads, Gopuff, BevMo, white label, Thrive Market, Hy-Vee, Sprouts, MRC.

| Coverage | Owns | This draft |
|---|---|---|
| Amazon Can Now Sell ChatGPT Ads | Advertiser relationship extends outward; commerce data and measurement did not visibly travel | Linked once as the architectural contrast. The draft states both can work and avoids ranking them. |
| The Assistant Builds the Cart (Instacart Clementine, Shipt) | AI constructs the basket; brands compete for inclusion | Not linked, not re-argued. That is the demand-side surface; this is the infrastructure underneath it. |
| Walmart Sparky sponsored prompts | Ads placed inside an AI assistant's recommendations | Untouched. |
| Walmart Marty ad agent | An AI agent operating campaign management inside a retail media platform | Untouched. Different layer: campaign automation, not stack ownership. |
| Kroger ecommerce operating model | Projects versus an operating model | Considered as a link for the "what is worth owning" argument and left out to stay at one link. |
| Albertsons article | AI planning and task depth, not retail media measurement | No merge risk. **There is no Albertsons incrementality article in the corpus**, so the measurement separation the brief asked about is not currently at issue. |

**Verdict: PASS.** The corpus covers retail media as placement, as AI surface, and as campaign automation. It has never covered who builds and operates the infrastructure underneath a retailer's media business. The layered ownership question is new ground, and the Gopuff facts support it specifically because Gopuff Ads continues to operate.

---

## EVIDENCE CLASSIFICATION

**Verified fact, from the primary release (Instacart and Gopuff, PR Newswire, September 22, 2026):**
- Gopuff will join the Instacart Marketplace; Carrot Ads will power advertising on Gopuff's own digital storefront in the U.S.
- Orders for Gopuff products placed through Instacart are "fulfilled and delivered directly by Gopuff, leveraging its own network of micro-fulfillment centers and delivery infrastructure"
- "more than 9,000 brand advertisers using Instacart Ads will extend their campaigns to reach Gopuff and BevMo! consumers"
- "Instacart has more than 310 partners leveraging the Carrot Ads platform"
- Carrot Ads "extends the same technology, optimization, and accredited measurements" to ecommerce partners
- Gopuff will use "Carrot Ads customization options to tailor the ad experience"
- Verbatim, and load-bearing: "Gopuff Ads continues to work directly with brands on bespoke, full-funnel activations"
- BevMo! is owned by Gopuff and is a longtime Instacart Marketplace partner
- Instacart partners with more than 2,200 retail banners representing nearly 100,000 stores

**Verified fact, from Instacart's own newsroom (November 6, 2025):**
- Instacart calls Carrot Ads "its white-label ad technology"
- "more than 240 ecommerce partners" and "over 7,500 CPG advertisers" at that date
- Partners named: Hy-Vee, Sprouts, Thrive Market, Uber Eats
- MRC expanded accreditation to Carrot Ads placements, covering impressions, clicks, click-through rate and viewable impressions across partner sites and apps in the U.S. and Canada; Instacart first earned MRC accreditation in 2024 for Marketplace

**Company claim, attributed:** every figure above originates with Instacart. The "first-of-its-kind" framing in the release headline is the companies' own and is not used in the draft.

**Correction to the brief.** The brief proposed comparing roughly 220 partners and 7,000+ advertisers against 310 and 9,000. I could not verify 220 or 7,000 from a primary source; those appear to come from Instacart's Q4 2025 shareholder letter via secondary reporting. I verified a cleaner pair directly from Instacart: **240+ partners and 7,500+ advertisers in November 2025**, against 310+ and 9,000+ now. The draft uses the verified pair.

**Robert interpretation, labelled as such in the body:** the two-layer split between a commercial layer and a plumbing layer, the reading that this is unbundling rather than outsourcing, and the architectural contrast with the Amazon case.

**Hypothesis, explicitly flagged:** the two-sided network effect. The draft says so in the section heading and states that Instacart publishes participant counts but not partner economics.

**Unknown, and stated:** how concentrated activity is across the 310 partners, what partners earn, whether a partner outperforms what it would have achieved alone, the commercial terms between Instacart and Gopuff, and any revenue share.

---

## NON-NEGOTIABLE GUARDRAILS

1. **Never write that Gopuff outsourced its retail media business.** The release says Gopuff Ads continues bespoke full-funnel work. Protecting sentence: "Gopuff did not hand over its advertising business. It kept the part it sells and rented the part it runs on."
2. **September 22 is not the launch of white-label retail media.** Protecting section: "This is not the arrival of white-label retail media," with Sprouts 2023 and Hy-Vee 2025.
3. **The layer model is the author's framework,** not Instacart's terminology. Protecting sentence: "This framing is mine rather than Instacart's, and the line between the layers is blurrier than any diagram suggests."
4. **The network effect stays a hypothesis.** Never state the economics as proven. Protecting sentence: "Counting participants is not the same as demonstrating the economics."
5. **The Amazon comparison is architectural, never a verdict.** Protecting sentence: "That is an architectural difference, not a scorecard."
6. **No universal recommendation.** The draft states explicitly that a large retailer may still be right to build everything.
7. **Adoption is not profitability.** Protecting sentence: "Gopuff joining proves Gopuff made a decision, not that the decision pays."

---

## STRONGEST COUNTERARGUMENTS

All in the body. The three that most constrain the thesis:
1. **Sharing economics with a platform that also serves competitors**, which is the structural cost of renting.
2. **Standardization erodes differentiation**, which is what retail media was supposed to create in the first place.
3. **The 310 number is a participant count, not an activity or profitability measure.** One adopter deciding is not a market validating.

---

## SEO PACKAGE

- **slug:** `instacart-gopuff-carrot-ads-retail-media-infrastructure`
- **title (H1):** Retail Media Is Becoming Infrastructure, Not a Network Every Retailer Builds
- **meta_title:** Instacart Carrot Ads and Gopuff: Retail Media Infrastructure (59 chars)
- **meta_description:** Gopuff kept its ad business and rented Instacart's ad infrastructure. Retail media is splitting into layers, and the question is which parts to own. (147 chars)
- **category:** Digital Marketing, matching the Amazon ChatGPT Ads and Walmart sponsored prompts pieces
- **tags:** retail media, Instacart, Carrot Ads, Gopuff, advertising infrastructure, commerce platforms
- **og_image:** `/images/blog/instacart-gopuff-carrot-ads-retail-media-infrastructure.svg` (NOT generated)

**Search intent covered:** Instacart Gopuff Carrot Ads, retail media infrastructure, white label retail media, Carrot Ads partners. No stuffing: "Carrot Ads" appears where the product is the subject.

---

## INTERNAL-LINK PLAN

**One link used**, well under the maximum of four:

1. `/blog/amazon-ads-chatgpt-openai-partnership` (the architectural contrast, and the piece this one advances)

Considered and rejected: the Clementine piece (downstream demand surface, would invite re-litigating sponsored inclusion), Walmart sponsored prompts (same reason), Kroger operating model (adjacent but would pull toward fulfillment strategy), Walmart Marty (different layer). A flagship-style link cluster would pad the piece without advancing the argument. Board may prefer adding Kroger; say the word and I will.

**LinkedIn:** no Hoot edition in the index covers retail media infrastructure. Week 34 touches who owns prompt and ranking data, which is adjacent but not the same argument, so nothing is cited.

---

## PRIMARY SOURCE MAP

| Claim | Source | Type |
|---|---|---|
| Partnership terms, fulfillment, 9,000 advertisers, 310 partners, Gopuff Ads continuing, BevMo!, customization | Instacart and Gopuff release, PR Newswire, 2026-09-22 | Primary, company issued |
| "White-label ad technology", 240 partners, 7,500 advertisers, Hy-Vee, Sprouts, Thrive Market, Uber Eats, MRC accreditation scope | Instacart newsroom, 2025-11-06 | Primary, company issued |
| Sprouts launched on Carrot Ads in 2023; Hy-Vee RedMedia joined in 2025 | Instacart newsroom and trade coverage | Primary plus secondary corroboration |
| Amazon advertiser relationship extending into ChatGPT without visible data movement | Prior TRH article | Prior TRH |

---

## MECHANICAL CHECKS

- Source body word count: 1,118
- Em dashes: 0. En dashes: 0
- Questions in body: 1 (closing)
- Internal links: 1 (maximum was 4)
- No lead form, consultation CTA or consulting positioning
