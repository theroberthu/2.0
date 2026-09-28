# Commerce media, basket data and spend data

**Status:** DRAFT ONLY. Nothing published, committed, pushed, written to Supabase, added to the sitemap, or generated as an asset.
**Type:** Research note
**Assignment:** TRH Editorial Board, 2026-09-28
**Overlap gate:** PASS. See OVERLAP REVIEW.

---

## TITLE SPLIT

- **title (editorial H1):** The Commerce Media Moat Is Splitting Into Basket Data and Spend Data
- **meta_title:** Citi Commerce Media: Basket Data Versus Spend Data

---

## DRAFT BODY

### The Commerce Media Moat Is Splitting Into Basket Data and Spend Data

Two commerce media networks launched on September 23. One was a hamburger chain. The other was a bank.

They are missing opposite halves of the same machine.

### What Citi actually launched

Citi's U.S. Consumer Cards business announced Citi Commerce Media, a platform that places advertising across Citi.com, the Citi Mobile app and paid media properties, targeted using first-party transaction data.

The scale is real, and the footnote matters. Citi says it serves more than 70 million U.S. customers as of December 31, 2025, covering general purpose and private label credit cards and installment lending, primarily in the United States. These are cardmembers, not every American who banks with Citi. The company reports 6.5 billion annual transactions across more than 700 spending categories, and its advertiser site puts more than $620 billion of annual spend behind that.

The platform promises audience signals from transaction data, placements across Citi's own properties, and closed-loop measurement to "prove return on ad spending and quantify incremental impact."

Citi also reports results: initial campaigns across retail, payments, technology, and beauty and wellness produced, in its words, "up to 5x incremental return on ad spend for an online retailer."

### What sits under that number

Citi discloses more method than most companies do, and still not enough to evaluate the claim.

Its advertiser site describes exposure and spend behavior joined through an identity graph, with a test and control methodology. That is better than silence. What it does not include: the advertiser, the campaign size, the flight dates, how the control group was built, the attribution window, or any statement of significance. The phrase is also "up to," which describes a best case among initial campaigns rather than a typical one.

So the honest reading is that 5x is a Citi-reported figure from a Citi-run test, using a method Citi has named but not documented.

### The inverse of the McDonald's problem

I wrote last week that [McDonald's has four of the five components](/blog/mcdonalds-media-network-commerce-media-without-marketplace) a commerce media business needs: identity, transaction history, frequency and surface, with measurement missing, because an insurance advertiser converts somewhere McDonald's cannot observe.

Citi is the mirror image. When a Citi cardmember sees an ad on Citi.com and later buys from that advertiser using a Citi card, Citi can observe the transaction without the merchant sending anything back. The loop closes inside the payment relationship rather than inside a storefront. That is the part McDonald's could not solve, and Citi gets it structurally.

What Citi does not have is the other half. It sees a merchant, an amount, a date and a spending category. It does not see the product. Nothing in Citi's materials claims item-level detail, and a card authorization does not carry one. Citi also sees only what runs on Citi cards.

One network can see the person and the moment but not the outcome. The other can see the outcome but not the product, and only the part of the outcome that runs on its own cards. Even then, what Citi observes is a qualifying transaction after exposure rather than proof that the advertised item was the thing bought.

### Two moats, not one ladder

This is where commerce media stops being one category with one winner.

Retail and marketplace data is deep and bounded. Inside its own ecosystem a retailer can see search terms, product views, the specific item, the basket it traveled in, the price paid, the promotion that moved it, and the return that followed. That richness ends at the edge of the retailer.

Payment data is broad and thin. It travels across merchants, which is exactly what a retailer's data cannot do, and it reduces every purchase to merchant, amount, category and time. Breadth costs detail.

Neither is better. They answer different questions. A brand launching a product into a crowded category probably wants to know who browsed the shelf and what they compared it against. A brand trying to take share from a competitor probably wants to know who is spending money with that competitor, which is a question no single retailer can answer about its rivals. I would treat those as hypotheses rather than settled media planning, because nobody has published comparative performance across the two structures.

### Citi is not an anomaly

The pattern is older than this launch. PayPal Ads describes a transaction graph built on 25 billion annual transactions and roughly 400 million active accounts, and sells the cross-merchant view explicitly, onsite across PayPal and Venmo and offsite elsewhere. Mastercard launched Mastercard Commerce Media a year ago on transactions it processes, around 160 billion in 2024, with 25,000 advertisers, 500 million enrolled consumers and card-linking attribution that works in store as well as online. Mastercard reports up to 22x return on ad spend, which is its own figure, measured its own way.

Mastercard named Citi as a strategic relationship in 2025. Citi launching its own media network a year later is another sign that transaction data itself is becoming a contested asset.

Citi has also agreed to acquire Kard, a commerce media and rewards platform built on verified transaction data and merchant-funded rewards. That deal has not closed, and the companies say they operate independently until it does. What it would add is merchant relationships, which is the part a bank cannot generate from its own balance sheet.

### The part nobody is describing clearly

Transaction history is among the most sensitive data a consumer produces, and the launch materials treat privacy as an assurance rather than a disclosure.

Citi's materials say the work maintains customer privacy and trust. They do not say whether audiences are opt-in or opt-out, whether targeting is individually personalized or segment-level, what a customer can control, or whether advertisers ever receive underlying records rather than activated audiences. Citibank's consumer privacy notice does confirm that transaction history is collected, that sharing for Citi's own marketing purposes cannot be limited, and that sharing with nonaffiliates to market to you can be. Which of those categories Commerce Media occupies is not stated anywhere I could find.

Mastercard, by contrast, uses the words permissioned and opted-in repeatedly and describes consumers as enrolled. That is a meaningful difference in how two companies describe the same kind of asset, and it is the gap an operator should ask about before spending here.

### The objections

Citi's 70 million is a card base, and a card base sees a household's card spending rather than its spending. Closed-loop measurement inside a payment network still cannot tell you what specifically was bought. The 5x sits on one undocumented test. And a bank's own properties are not high-intent shopping surfaces the way a retailer's search results are, so the inventory may be worth less even where the data is worth more.

The strongest objection is that this may not be a split at all. Retailers can buy spend data, payment networks can partner for product detail, and the two structures may converge into one market where everyone rents what they lack.

If your advertising currently gets measured inside somebody else's ecosystem, do you actually know whether you are buying the basket or the spend?

---

## OVERLAP REVIEW

Run across `Content/blog/*.md`, `scripts/insert-*.mjs` and `src/lib/ai-commerce-2027.ts`.

**Zero prior occurrences anywhere in the corpus:** Citi, Citigroup, Kard, PayPal, financial media. "Commerce media" appears only in the McDonald's article and once inside the Amazon ChatGPT piece. Mastercard appears only in agent-identity contexts (Know Your Agent, Ant International).

| Coverage | Owns | This draft |
|---|---|---|
| McDonald's Is Building a Media Network Without a Marketplace | The five components, and the finding that McDonald's demonstrates four | Linked once and advanced rather than repeated. The framework is stated in one sentence, then inverted: Citi has the measurement component and lacks the product detail McDonald's never needed to have. |
| Retail Media Is Becoming Infrastructure | Who builds and who rents the advertising stack | **Not linked.** Considered, and cut deliberately. That article is about the stack; this one is about the data asset underneath it, and linking invited exactly the ad-tech-stack framing the brief ruled out. |
| Amazon Can Now Sell ChatGPT Ads | Retail media inventory distributed onto an external AI surface without the data | Not linked. Different subject: distribution of inventory rather than composition of the underlying signal. |
| Walmart Sparky sponsored prompts, Marty ad agent | Ads inside AI surfaces, campaign automation | Untouched. |
| Know Your Agent, Ant International | Mastercard and Visa in agent identity contexts | Untouched. Mastercard appears here only as commerce media evidence. |

**Verdict: PASS.** The corpus has covered retail media as placement, as AI surface, as campaign automation, as rentable infrastructure, and most recently as a question of eligibility. It has never compared the underlying data structures, and no prior article discusses payment-network media at all.

The thesis clears the brief's FAIL list. It is not that Citi launched an ad network, not that banks are becoming media companies, not that first-party data is valuable, not that commerce media is expanding beyond retailers, and not that financial media networks are growing.

---

## CITI PRIMARY-SOURCE AUDIT

| Brief item | Status | Evidence |
|---|---|---|
| Citi Commerce Media name | Verified | Citi press release, 2026-09-23 |
| U.S. Consumer Cards ownership | Verified | "Citi's U.S. Consumer Cards business today launched Citi Commerce Media" |
| More than 70 million U.S. customers | Verified | Release body |
| **Exact footnote scope** | **Verified, and materially narrowing** | "1 As of December 31, 2025. Includes General Purpose and Private Label Credit Cards and Installment Lending, primarily in the U.S." The advertiser site renders the same figure as "70 Million Cardmembers" |
| 6.5 billion annual transactions | Verified | Release |
| More than 700 spending categories | Verified | Release and advertiser site |
| First-party transaction data | Verified | "Leverages first-party transaction data to help brands identify high-intent audiences" |
| Citi.com | Verified | Release |
| Citi Mobile app | Verified | Release |
| Paid media properties | Verified | Release, "Citi.com, Citi Mobile app and paid media properties" |
| Closed-loop measurement | Verified | "Uses closed-loop measurement to help advertisers evaluate campaign performance, prove return on ad spending and quantify incremental impact" |
| Incremental impact language | Verified | Same sentence |
| Initial advertiser categories | Verified | "retail, payments, technology, and beauty and wellness" |
| Up to 5x incremental ROAS for an online retailer | Verified as a Citi-reported figure | Release and advertiser site |
| Methodology, campaign size, timeframe, control construction, advertiser identity, significance | **Partially disclosed.** The advertiser site names an identity graph joining media exposure and spend behavior, and a test and control methodology. Everything else is absent | See the closed-loop audit below |

**Additional figure found on the advertiser site, not in the release:** "Powered by over $620B in annual spend across 700+ categories."

---

## KARD PRIMARY-SOURCE AUDIT

From Citi's August 13, 2026 release. **The transaction is pending**, and the draft says so.

- Citi's U.S. Consumer Cards business "entered into an agreement to acquire Kard Financial, Inc."
- Kard "operates a commerce media and rewards platform that helps banks and fintechs deepen customer engagement through personalized offers"
- Contributes: commerce media infrastructure, a network of fintechs, banks and neobanks, merchant relationships, merchant-funded rewards, verified transaction data, machine learning personalization and matching, and measurable outcomes
- "Terms of the transaction were not disclosed and are not material to Citi's financial results"
- "The transaction is subject to satisfaction of customary closing conditions. Until the transaction closes, Citi and Kard will continue to operate as independent organizations"

**Interpretation, labelled in the draft:** the contribution that matters most is merchant relationships, which a card issuer cannot manufacture internally.

---

## CLOSED-LOOP CAPABILITY AUDIT

| Question | Answer from Citi's own materials |
|---|---|
| Can Citi link ad exposure to a later Citi-observed transaction? | Yes, in substance. The advertiser site describes "media exposure and spend behavior joined through our identity graph" |
| Can it measure purchases outside Citi-owned surfaces? | Implied yes, for purchases made **on a Citi card**. Citi never claims visibility beyond its own card spend, and the draft does not either |
| Does measurement require a participating merchant? | **Not stated.** For card-spend observation it should not, which is the structural point. Kard's merchant-funded rewards model does involve merchants |
| Attribution windows | **Not disclosed** |
| Incrementality methodology | **Partially disclosed:** "a proven test/control methodology." No control construction, no sample, no significance |
| Correlation versus causal lift | Implicitly claimed causal through the word incremental and a test and control design. Not demonstrated publicly |

**This is the limit the draft states plainly.** Citi discloses the shape of its measurement and none of the parameters.

---

## RETAILER DATA VERSUS PAYMENT DATA

| | Retail and marketplace | Financial and payment |
|---|---|---|
| Typical signals | Query intent, product views, item, basket composition, price, promotion, substitution, purchase, return | Merchant, amount, spending category, timing, frequency, cross-merchant repetition |
| Granularity | Item level | Merchant and category level |
| Boundary | Its own ecosystem | Its own payment instrument |
| Answers well | What did they consider and buy, and what else was in the basket | Where does this person's money go across merchants, and did spending change after exposure |
| Blind to | Spending at competitors | What specifically was purchased |

**The distinction survived research.** Citi publishes spending categories, not items. PayPal sells the cross-merchant view as its differentiator. Mastercard sells card-linked attribution across in-store and online. None of the three claims item-level basket detail, and no retailer claims visibility into competitor spending.

---

## SUPPORTING PAYPAL AND MASTERCARD EVIDENCE

**PayPal Ads,** from PayPal's own advertiser pages: "25 billion annual transactions", "~400M active accounts", "200+ markets", "industry-leading cross-merchant insights", onsite ads across PayPal and Venmo, offsite ads across mobile, desktop and CTV, and language about driving incrementality.

**Mastercard Commerce Media,** from Mastercard's October 1, 2025 release: 25,000 advertisers, "500 million enrolled consumers", "around 160 billion-plus" transactions processed in 2024, "up to 22-times return on ad spend" as a company-reported figure, card-linking attribution "whether the purchase is made in-store or online", and "permissioned data".

**Notable, and used in the draft:** that release names Citi among its strategic relationships, alongside WPP, American Airlines and Microsoft.

**Chase Media Solutions:** reviewed and excluded. Two supporting examples establish the pattern, and adding a third would have turned the piece into a catalog.

---

## PRIVACY AND GOVERNANCE FINDINGS

**From Citi's Commerce Media materials:** no disclosure of consent posture, no statement on aggregation, anonymization or segment versus individual personalization, no description of customer controls, and no statement about whether advertisers receive underlying records. The only privacy language is an assurance of "maintaining the privacy and trust that our customers have relied on for over 210 years."

**From Citibank's consumer privacy notice, revised July 2024:** collected information includes "credit history and transaction history." Sharing "for our marketing purposes, to offer our products and services to you" is done and **cannot** be limited. Sharing "for our affiliates' everyday business purposes, information about your transactions and experiences" is done and cannot be limited. Sharing "for our affiliates to market to you" and "for nonaffiliates to market to you" is done and **can** be limited, by phone.

**The ambiguity, stated in the draft:** which of those categories Citi Commerce Media occupies is not stated in any Citi document I could find. That is the finding, not a failure to look. I also could not locate a cards-specific notice that supersedes the consumer notice for this purpose, so the draft attributes it as Citibank's consumer privacy notice rather than as the cards notice.

**Contrast used in the draft:** Mastercard's repeated use of permissioned, opted-in and enrolled.

---

## CONFIRMED FACTS VERSUS TRH INTERPRETATION

**Company-confirmed:** every figure in the audit tables.

**Robert interpretation:** that Citi and McDonald's are missing opposite halves of the same machine; that breadth of spend is purchased with loss of detail; that the two structures answer different advertiser questions; that Kard's merchant relationships are the asset Citi cannot build internally; that Mastercard naming Citi a year before Citi's own launch is a sign transaction data is contested; and the objective-by-objective hypotheses, which the draft explicitly labels as untested.

**Never claimed, per the brief's guardrails:** that Citi observes every U.S. transaction, that every merchant accepts Citi, that Citi sees item-level purchases, or that financial media is superior to retail media.

---

## NON-NEGOTIABLE GUARDRAILS

1. **Never claim Citi sees all spending.** Protecting sentence: "Citi observes a qualifying transaction after exposure rather than proof that the advertised item was the thing bought."
2. **Never claim item-level visibility.** Protecting sentence: "Nothing in Citi's materials claims item-level detail, and a card authorization does not carry one."
3. **The 70 million is a card base.** The footnote scope appears in the body, not only in the notes.
4. **5x is Citi-reported from a Citi-run test.** Protecting sentence: "using a method Citi has named but not documented."
5. **Kard is pending.** Protecting sentence: "That deal has not closed, and the companies say they operate independently until it does."
6. **Neither data structure is declared superior.** Protecting sentence: "Neither is better. They answer different questions."
7. **Objective-level claims are hypotheses.** Protecting sentence: "I would treat those as hypotheses worth testing rather than settled media planning."
8. **Privacy is reported as disclosed and undisclosed, not as wrongdoing.** No regulatory or political argument appears.

---

## DURABLE THESIS AND PROTECTED LINES (Editorial Board, 2026-09-28)

Retailers know more about the basket. Payment networks know more about the spend. Neither has the whole picture.

**Protected line, keep verbatim:** "One network can see the person and the moment but not the outcome. The other can see the outcome but not the product."

**Required adjacency.** The instrument-level limitation stays in the same paragraph as that line, never only in the counterarguments. Citi can observe a qualifying card transaction after exposure. That is not knowledge that the advertised product was bought, and Citi card activity is not a consumer's full spending behavior.

**Mastercard observation stays observational.** Name the 2025 relationship and the later launch as a sign that transaction data is a contested asset. Never imply the Citi launch was caused by, or displaced, the Mastercard relationship.

---

## STRONGEST COUNTERARGUMENTS

In the body, four of them.

1. **A card base is not a household's spending.** Breadth has a ceiling set by wallet share.
2. **Closed-loop measurement without product detail** still cannot tell an advertiser what was bought.
3. **The 5x rests on one undocumented test.**
4. **Bank properties are not high-intent shopping surfaces**, so better data may sit against weaker inventory.

The one I could not dismiss, and which closes the section: this may not be a durable split. Retailers can license spend data, payment networks can partner for product detail, and both may converge into a market where everyone rents what they lack.

---

## SEO PACKAGE

- **slug:** `commerce-media-basket-data-spend-data-citi`
- **title (H1):** The Commerce Media Moat Is Splitting Into Basket Data and Spend Data
- **meta_title:** Citi Commerce Media: Basket Data Versus Spend Data (49 chars)
- **meta_description:** Citi launched a commerce media network on card transaction data. Retailers know the basket. Payment networks know the spend. Those are different moats. (150 chars)
- **category:** Digital Marketing, matching the McDonald's and Instacart commerce media pieces
- **tags:** commerce media, retail media, Citi, payments data, first-party data, measurement
- **og_image:** `/images/blog/commerce-media-basket-data-spend-data-citi.svg` (NOT generated)

---

## PRIMARY SOURCE MAP

| Claim | Source | Type |
|---|---|---|
| Citi Commerce Media launch, ownership, 70 million with footnote, 6.5 billion transactions, 700+ categories, surfaces, closed-loop language, initial categories, 5x | Citi press release, 2026-09-23 | Primary, company issued |
| $620B annual spend, identity graph, test and control methodology, 70 million cardmembers phrasing | Citi Commerce Media advertiser site | Primary, company owned |
| Kard agreement, pending status, platform description | Citi press release, 2026-08-13 | Primary, company issued |
| Transaction history collected; which sharing can and cannot be limited | Citibank consumer privacy notice, revised July 2024 | Primary, company document |
| 25 billion transactions, ~400M accounts, 200+ markets, cross-merchant language, onsite and offsite | PayPal advertiser pages | Primary, company owned |
| 25,000 advertisers, 500 million enrolled consumers, 160 billion+ 2024 transactions, up to 22x ROAS, card linking, permissioned data, Citi relationship | Mastercard press release, 2025-10-01 | Primary, company issued |

---

## INTERNAL-LINK PLAN

**One link, well under the maximum of four:**

1. `/blog/mcdonalds-media-network-commerce-media-without-marketplace` (the five components, inverted)

Considered and cut: Retail Media Is Becoming Infrastructure, because the brief explicitly ruled out the ad-tech-stack framing and linking it would have invited exactly that reading. Amazon ChatGPT Ads, because it is about inventory distribution rather than signal composition. If the Board wants a second link, the infrastructure piece is the one I would add, in the objections paragraph about renting what you lack.

**LinkedIn:** no Hoot edition in the index covers payments data or commerce media, so nothing is cited.

---

## AI COMMERCE 2027 NOTE

Not requested, not done, and not recommended. Advertising data architecture with no agent or AI claim, consistent with the Instacart and McDonald's decisions.

---

## MECHANICAL CHECKS

- Source body word count: 1149
- Em dashes: 0. En dashes: 0
- Questions in body: 1 (closing)
- Internal links: 1 (maximum was 4)
- No lead form, consultation CTA or consulting positioning
