# Retail media and the shared buying interface

**Status:** DRAFT ONLY. Nothing published, committed, pushed, written to Supabase, added to the sitemap, or generated as an asset.
**Type:** Research note
**Assignment:** TRH Editorial Board, 2026-09-30
**Overlap gate:** PASS. See OVERLAP REVIEW.

---

## TITLE SPLIT

- **title (editorial H1):** Retail Media Is Starting to Lose Its Separate Buying Interface
- **meta_title:** Retail Media Buying Is Moving Into the Programmatic Stack

---

## DRAFT BODY

### Retail Media Is Starting to Lose Its Separate Buying Interface

Every retail media network has been, among other things, a login. A separate console, a separate campaign taxonomy, a separate report and a separate invoice, repeated for every retailer a brand wanted to reach.

On September 29, Teads and Koddi announced a partnership that makes some of that inventory buyable from somewhere else.

### What was announced

The two companies described a global partnership bringing an OpenRTB standard to onsite retail media inventory across the United States and Europe. Advertisers can activate Sponsored Product Ads and display placements inside Teads Ad Manager across Koddi-powered networks, with Gopuff UK, Hopper and Wolt Ads named.

The quotes are more revealing than the mechanics. Koddi says retailers can open onsite inventory programmatically "while maintaining complete control over inventory, pricing, and quality standards." Wolt says opening its marketplace to partners like Teads brings "incremental demand via the buying platform of the advertiser's choice while maintaining full control over how our inventory is monetized." Teads frames the goal as connecting "shopper and national brand dollars to the same pipes globally."

Two things are being separated in those sentences. Where a campaign is bought, and who controls what it costs and where it runs.

### What the standard actually standardizes

This is where the story either holds up or collapses, so it is worth reading the specification rather than the press release.

The IAB Tech Lab finalized its Product Listing Ad extension to OpenRTB on January 24, 2025, after public comment in December 2024. It adds a `prodfeed` object to the bid request, signaling that understanding a product feed is required to transact on that impression, and carrying the allowed and blocked products and categories. The Native Ads API gained a data type for Product ID. The creative is assembled and rendered by the retailer's own stack from its feed, and the buyer supplies a product identifier rather than finished assets.

Now the part almost nobody quotes. The Tech Lab states that the release "does not attempt to specify the structure of a product feed." Nothing in it standardizes ranking, auction logic, sponsored-product eligibility, pricing, reporting or measurement. The Tech Lab calls this the first step of many.

So the protocol standardizes the envelope, not the contents. It describes how a buyer asks for a product placement and what constraints apply. It says nothing about what the placement is worth, how it is ranked, or how anyone proves it worked.

### What the retailer keeps

Run the control audit and the pattern is consistent with that reading.

Inventory eligibility, placements, pricing, quality standards and how the inventory is monetized all stay with the retailer, per both Koddi and Wolt. The product feed remains the retailer's. Ranking and auction logic are not part of the standard. Measurement is not mentioned in the announcement at all, which is itself worth noting: the release describes access, not attribution, and no data-sharing or reporting terms are disclosed.

Deal structure is also undisclosed. The announcement does not say whether inventory is exposed through open auction, private marketplace, programmatic guaranteed or some mix, and those are not small differences for either side.

### The second chapter of build versus rent

A week ago I wrote that [retail media infrastructure is something a retailer can rent](/blog/instacart-gopuff-carrot-ads-retail-media-infrastructure) rather than build, and that the strategic question is which layers are worth owning.

This is the next question down, and it is whether the front door still has to be yours once the ad server can be rented.

The Gopuff detail makes the progression concrete. Gopuff adopted Instacart Carrot Ads for its United States storefront in September, and Gopuff UK appears here as a Koddi-powered network reachable through Teads. One retailer, two markets, two rented stacks, and in the second case an inventory pool that an advertiser can reach without ever opening a Gopuff interface.

That is a different kind of unbundling from the first. Chapter one separated the retailer from its ad technology. Chapter two separates the retailer from its storefront for advertisers.

### What changes for the buyer

For an advertiser, the friction being removed is real and boring: fewer logins, fewer taxonomies, one activation path alongside the other inventory that platform sells.

Be careful about how far that goes. Teads says advertisers can activate retail media as part of a broader omnichannel strategy in its manager. It does not publish standardized reporting or billing across networks, and no cross-channel optimization claim is documented. Reduced workflow friction is not the same as unified measurement.

The strategic consequence is still worth stating. When retail inventory becomes activatable from the same place as everything else, it starts competing for budget on more even workflow footing with other inventory classes, which over time makes dedicated retail media budgets harder to keep ringfenced.

None of this is new as an ambition. Criteo brought Commerce Max to general availability in September 2023 as a single entry point across many retailers. What is different here is the route: an open standard into a general-purpose omnichannel platform, rather than a commerce specialist aggregating retailers inside its own product.

### Where the moat goes

Here is the risk a retailer should sit with. Easier access invites comparison, and inventory that is easy to buy in the same breath as other inventory can start being evaluated the same way. Demand aggregators accumulate workflow, and workflow is leverage.

I would not call that commoditization today. Nothing in this announcement makes two retail networks interchangeable, and the parts that would have to standardize for that to happen are exactly the parts the specification leaves alone.

Which is the actual finding. The buying pipe can standardize without the commerce signal becoming standardized. Shopper intent, product adjacency, placement quality, auction design and [the transaction data underneath it](/blog/commerce-media-basket-data-spend-data-citi) are not carried in a bid request. If every retail network becomes buyable from the same screen, the screen stops being the moat, and everything that was hiding behind the screen has to become the answer.

### The objections

Several are serious. Large retail budgets are still negotiated inside joint business plans and trade relationships that no protocol touches. Proprietary consoles often provide better controls and richer reporting than an external buying seat, and advertisers frequently prefer buying key accounts directly even when another path exists. The networks with the most scale have the least reason to open anything. Retailers decide what to expose, and can expose very little. Programmatic access can add intermediary fees rather than remove cost.

The strongest objection is the narrowest one. This is participating inventory from one technology provider's retailer base, reachable through one platform. Calling that the end of the retailer console would be wrong, which is why the useful reading is directional rather than conclusive.

If advertisers can reach your inventory without ever seeing your interface, what is left that they are actually choosing you for?

---

## OVERLAP REVIEW

Run across `Content/blog/*.md`, `scripts/insert-*.mjs` and `src/lib/ai-commerce-2027.ts`.

**Zero prior occurrences anywhere in the corpus:** OpenRTB, Teads, Koddi, product listing ad, bid request, private marketplace, Commerce Max, IAB Tech Lab. "Programmatic" and "DSP" appear in only two files.

| Coverage | Owns | This draft |
|---|---|---|
| Retail Media Is Becoming Infrastructure | Build versus rent. Whether a retailer must build its own ad serving, campaign management, optimization and measurement | Linked once and explicitly positioned as the next question. That article asks which layers are worth owning. This asks whether the buying interface is one of them. |
| The Commerce Media Moat Is Splitting Into Basket Data and Spend Data | The value of proprietary data signals, basket versus spend | Linked once, in one clause, to carry the implication rather than to repeat the comparison. No retailer-versus-payment-network analysis appears here. |
| McDonald's Is Building a Media Network Without a Marketplace | Eligibility to own commerce media | Not linked. Considered and cut. Eligibility is upstream of this question and the link would have added a third thread to a piece that is already carrying two. |
| Amazon Can Now Sell ChatGPT Ads | Retail media inventory distributed onto an external AI surface | Not linked. That is inventory traveling to a new surface. This is demand reaching existing inventory through a new pipe. |
| The Trade Desk Is Showing What Agentic Media Buying Looks Like | Automation inside the media buying workflow | Untouched. That is about who performs the work. This is about where the work happens. |

**Verdict: PASS.** The corpus owns retail media as placement, as AI surface, as rentable infrastructure, as an eligibility question and as a data-moat question. It has never covered the buying interface, programmatic protocols, or what standardization does to differentiation.

The thesis clears the brief's FAIL list. It is not that Teads partnered with Koddi, not that retail media is becoming programmatic, not that OpenRTB supports sponsored products, not that advertisers want fewer dashboards, not that retail media is infrastructure, and not that retailers should open inventory.

---

## TEADS PRIMARY-SOURCE AUDIT

Source: Teads and Koddi joint announcement, GlobeNewswire, September 29, 2026.

| Brief item | Status | Evidence |
|---|---|---|
| Partnership scope | Verified | "a global partnership delivering an open, universal OpenRTB standard for onsite retail media inventory" |
| U.S. and Europe availability | Verified | "across the US and Europe" |
| Teads Ad Manager | Verified | Activation happens "in Teads Ad Manager" |
| Koddi-powered networks | Verified | "across Koddi-powered networks in the US and Europe" |
| Wolt Ads | Verified, with a quote from Wolt's global head of advertising | Named |
| Gopuff UK | Verified | Named |
| Hopper | Verified | Named |
| Other named launch partners | **None.** Booking.com, Kroger, Fanatics and Cars.com appear only in Koddi's boilerplate as customers, not as participants in this integration. The draft does not name them | About Koddi section |
| Sponsored Product Ads | Verified | "Sponsored Product Ads (SPAs)" |
| Onsite display inventory | Verified | "high-intent Display placements" |
| OpenRTB usage | Verified | Throughout |
| Direct, programmatic or specific deal structures | **Not disclosed.** No mention of open auction, private marketplace or guaranteed deals | Absence stated in the draft |
| Retailer control over pricing | Verified | Koddi: "complete control over inventory, pricing, and quality standards" |
| Retailer control over inventory | Verified | Same, plus Wolt: "full control over how our inventory is monetized" |
| Retailer control over quality | Verified | Same Koddi quote |
| Measurement or data-sharing terms | **None disclosed.** Measurement is not mentioned in the announcement | Absence stated in the draft |
| Stated future roadmap | Verified | "establishes a foundation for expanded ad format support and additional retail partnerships across markets in the future" |
| Teads omnichannel language | Verified | "activate retail media as part of their broader omnichannel strategy in Teads Ad Manager, reducing complexity while maximizing their campaign's performance"; "connecting shopper and national brand dollars to the same pipes globally" |
| Wolt or Koddi language on advertiser choice of platform | Verified | Wolt: "incremental demand via the buying platform of the advertiser's choice" |

**Context figure, attributed in the release rather than by me:** Teads cites IAB Europe's Attitudes to Retail Media report for network fragmentation at 51% and lack of standardization at 53% as the primary buy-side barriers. The draft does not use these numbers, since they are a third party's survey quoted inside a vendor release.

**Teads self-description used carefully:** the release calls Teads "an early innovator in bringing real-time bidding capabilities to native retail listings." That is a company claim and the draft does not repeat it as fact.

---

## KODDI AND RETAILER-PARTNER CAPABILITY AUDIT

- Koddi is described as a commerce media platform that builds retail and commerce media networks, with Booking.com, Kroger, Fanatics and Cars.com named as customers in its boilerplate.
- What this partnership adds for Koddi's retailers: access to Teads' advertiser base "without managing custom, proprietary integrations."
- What Wolt says it gains: incremental demand through the advertiser's platform of choice, with monetization control retained.
- **Attribution discipline:** the draft names only Gopuff UK, Hopper and Wolt Ads as participants, because those are the only three the release names in that context.

**One observation the brief did not request, and which the draft uses.** Gopuff appears in two different TRH articles now, in two different markets, on two different rented stacks: Carrot Ads for its United States storefront, and a Koddi-powered network in the United Kingdom reachable through Teads. That is the build-versus-rent progression made concrete in a single company.

---

## OPENRTB PLA STANDARD AUDIT

Source: IAB Tech Lab, "Filling the Cart: The Product Listing Ad updates you need."

| Question | Answer |
|---|---|
| When final | **January 24, 2025**, after a December 2024 public comment release |
| Exact specification | A community extension adding `bidrequest.ext.prodfeed`, plus Native Ads API 1.2 data type 13 for Product ID |
| Problem solved | Standardizing programmatic buying of onsite product listing ads, where creative is rendered by the retailer rather than supplied by the buyer |
| Inventory covered | Onsite product listing ads, the sponsored slots that match the look of organic product listings |
| Standardized in the request and response | That a product feed is required to transact, information about the feed, allowed and blocked products and categories, and a product identifier in place of creative assets |
| Explicitly **not** standardized | The structure of the product feed itself. The Tech Lab says the release "does not attempt to specify the structure of a product feed" |
| Pricing, ranking, sponsored-product eligibility, targeting, reporting, measurement | **None of these are standardized.** Nothing in the release addresses them |
| Status | Framed by the Tech Lab as "the first step of many more to come" |

**The draft never implies OpenRTB makes networks identical.** It says the opposite, and names the specific things the specification leaves alone.

---

## RETAILER CONTROL VERSUS STANDARDIZED BUYING

| Layer | Standardized by this development | Retailer-specific |
|---|---|---|
| Access path and protocol | Yes, OpenRTB with the PLA extension | |
| Creative assembly | Partly. The buyer sends a product ID | Rendering happens in the retailer's stack from its feed |
| Inventory eligibility and placements | | Retailer, per Koddi |
| Pricing and floors | | Retailer, per Koddi |
| Quality standards and monetization rules | | Retailer, per Koddi and Wolt |
| Product feed structure | No, explicitly | Retailer |
| Ranking and auction logic | No | Retailer |
| Shopper data | No | Retailer |
| Measurement, attribution, reporting | No, and undisclosed in the announcement | Retailer or third party |

**This table is the article's spine.** The buying interface can standardize while every economic control stays where it was.

---

## BUILD-VERSUS-RENT RELATIONSHIP

Chapter one, published September 22: retail media infrastructure is rentable, and the question is which layers are differentiating enough to own.

Chapter two, this article: if the infrastructure can be rented, the buying interface is a candidate for the same treatment, and the answer so far is that access can open while control does not move.

**The progression is clean**, and the Gopuff case makes it literal rather than rhetorical.

---

## CITI DATA-MOAT RELATIONSHIP

The Citi article owns the comparison between basket depth and spend breadth. This draft does not recreate it. It uses a single clause to carry one implication: as workflow and access standardize, the unstandardizable parts carry more of the differentiation. The supporting evidence is the specification itself, which leaves ranking, feeds, data and measurement untouched.

---

## COMMODITIZATION-RISK ANALYSIS

**Potential retailer benefits, per the release and the standard:** incremental demand, access to advertisers who will not manage bespoke integrations, better yield, less integration overhead, compatibility with agency buying paths.

**Potential risks, stated as risk rather than fact:** easier side-by-side comparison, inventory evaluated like other programmatic inventory, reduced strategic value of a proprietary console, more advertiser workflow living inside outside platforms, growing dependence on demand aggregators, and margin pressure if access becomes the competitive dimension.

**The draft explicitly declines to claim commoditization is happening**, and points out that the parts that would have to standardize for that outcome are the parts the specification deliberately leaves alone.

---

## OPERATOR IMPLICATIONS

**For retailers:** if advertisers can reach the inventory without the interface, the differentiators have to be audience quality, shopper intent, product adjacency, placement quality, auction design, data depth and provable outcomes. The draft states this as a consequence rather than a checklist, and the closing question puts it to the reader.

**For brands:** workflow parity makes it easier to evaluate retail inventory against other inventory classes, which over time makes ringfenced retail budgets harder to defend. The draft states this as a direction, not as a recommendation to treat networks as fungible, and says plainly that interoperability is not equivalence.

---

## CONFIRMED FACTS VERSUS TRH INTERPRETATION

**Company confirmed:** every row in the Teads audit table, and every row in the OpenRTB audit table from the Tech Lab's own post.

**Robert interpretation:** the envelope-versus-contents reading of the specification; the chapter one and chapter two framing; the Gopuff two-markets observation; the argument that workflow parity erodes ringfenced budgets over time; the commoditization risk framing; and the closing question.

**Never claimed, per the brief's guardrails:** that retail media is fully programmatic, that consoles are dead, that all networks use OpenRTB, that all inventory is available through Teads, that OpenRTB standardizes measurement, that retailer data is commoditized, that networks are interchangeable, that Teads controls pricing, that Koddi networks surrendered control, or that programmatic buying lowers costs.

---

## NON-NEGOTIABLE GUARDRAILS

1. **Participating inventory only.** Protecting sentence: "This is participating inventory from one technology provider's retailer base, reachable through one platform."
2. **Control stays with the retailer.** Protecting sentence: "every economic control stays where it was," supported by direct Koddi and Wolt quotes.
3. **The specification's limits are stated, not implied.** Protecting sentence: the Tech Lab "does not attempt to specify the structure of a product feed."
4. **Measurement is undisclosed, not standardized.** Protecting sentence: "the release describes access, not attribution."
5. **Commoditization is a risk, not a finding.** Protecting sentence: "I would not call that commoditization today."
6. **No unified reporting or billing claim.** Protecting sentence: "Reduced workflow friction is not the same as unified measurement."
7. **Only named participants are named.** Koddi's boilerplate customers are never presented as part of this integration.
8. **Interoperability is not equivalence.** Carried in the objections and the moat section.

---

## PROTECTED LINES (Editorial Board, 2026-09-30)

Preserve both verbatim in this article and in future work on this thread:

1. "The buying pipe can standardize without the commerce signal becoming standardized."
2. "If every retail network becomes buyable from the same screen, the screen stops being the moat, and everything that was hiding behind the screen has to become the answer."

**Protected emphasis: the measurement absence.** Teads and Koddi standardize access while reporting, attribution and data sharing remain unspecified. That absence is load-bearing, because it is the evidence that the most valuable layers are the ones OpenRTB does not normalize. Never soften it to an oversight or a coming feature.

**Protected framing: the two chapters.** Chapter one, a retailer can rent the infrastructure beneath its media network. Chapter two, advertisers can increasingly reach that inventory without entering the retailer's proprietary buying interface. The Gopuff two-market detail is what makes the progression concrete.

---

## STRONGEST COUNTERARGUMENTS

All in the body:

1. Joint business planning and trade relationships still govern the largest retail budgets.
2. Proprietary consoles can offer better controls and reporting.
3. OpenRTB does not standardize shopper data.
4. Sponsored product inventory behaves differently across retailers.
5. Retailers control what they expose, and can expose little.
6. Programmatic access can add fees rather than remove cost.
7. The largest networks have the least incentive to open.
8. Advertisers may buy strategic accounts directly regardless.

The one that most constrains the piece, and which closes the section: this is one technology provider's retailer base through one platform, so the honest reading is directional.

---

## SEO PACKAGE

- **slug:** `retail-media-programmatic-buying-openrtb-koddi-teads`
- **title (H1):** Retail Media Is Starting to Lose Its Separate Buying Interface
- **meta_title:** Retail Media Buying Is Moving Into the Programmatic Stack (55 chars)
- **meta_description:** Teads and Koddi opened onsite retail inventory through OpenRTB. The buying pipe can standardize without the commerce signal standardizing with it. (146 chars)
- **category:** Digital Marketing
- **tags:** retail media, programmatic, OpenRTB, commerce media, DSP, advertising infrastructure
- **og_image:** `/images/blog/retail-media-programmatic-buying-openrtb-koddi-teads.svg` (NOT generated)

---

## PRIMARY SOURCE MAP

| Claim | Source | Type |
|---|---|---|
| Partnership scope, geographies, Teads Ad Manager, named networks, ad formats, control quotes, roadmap | Teads and Koddi announcement, 2026-09-29 | Primary, company issued |
| PLA extension finalization date, `prodfeed`, Product ID data type, creative rendering, feed structure not specified | IAB Tech Lab post | Primary, standards body |
| Commerce Max general availability, September 2023 | Criteo announcement | Primary, company issued, used once as precedent |
| Gopuff adopting Carrot Ads in the United States | Prior TRH article and its primary sources | Prior TRH |

---

## INTERNAL-LINK PLAN

**Two links, under the maximum of four:**

1. `/blog/instacart-gopuff-carrot-ads-retail-media-infrastructure` (chapter one, build versus rent)
2. `/blog/commerce-media-basket-data-spend-data-citi` (one clause, carrying the data implication)

Considered and cut: the McDonald's eligibility piece, which is upstream of this question, and the Amazon ChatGPT piece, which covers inventory traveling rather than demand arriving.

**LinkedIn:** no Hoot edition in the index covers programmatic buying or retail media standards, so nothing is cited.

---

## AI COMMERCE 2027 NOTE

Not requested, not done, not recommended. Advertising plumbing with no agent or AI claim, consistent with the Instacart, McDonald's and Citi decisions.

---

## MECHANICAL CHECKS

- Source body word count: 1106
- Em dashes: 0. En dashes: 0
- Questions in body: 1 (closing)
- Internal links: 2 (maximum was 4)
- No lead form, consultation CTA or consulting positioning
