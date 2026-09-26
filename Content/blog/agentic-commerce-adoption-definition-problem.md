# Agentic commerce has an adoption definition problem

**Status:** DRAFT ONLY. Nothing published, committed, pushed, written to Supabase, added to the sitemap, or generated as an asset.
**Type:** Research note
**Assignment:** TRH Editorial Board, 2026-09-26
**Overlap gate:** PASS. See OVERLAP REVIEW.

---

## TITLE SPLIT

- **title (editorial H1):** Agentic Commerce Has an Adoption Definition Problem
- **meta_title:** AI Shopping Adoption: Why 69% and 7% Both Look True

---

## DRAFT BODY

### Agentic Commerce Has an Adoption Definition Problem

Two numbers, published a week apart, by two payments companies.

Sixty-nine percent would let an AI agent spend up to $100 on groceries. Seven percent would allow autonomous purchasing under predefined conditions.

Both sit at what looks like the same level of delegation, permission for an agent to buy inside a limit. They are not the same question, and neither company is wrong. Treating the gap as a contradiction to be resolved is how operators end up planning for a behavior nobody has measured.

### The 7% that changed meaning three times

Start with one of those numbers travelling through a single ACI Worldwide press release. The headline says 7% of fashion shoppers "trust AI to buy for them today." The opening says 7% "would allow an AI assistant to make purchases without approval." The findings section says 7% "would permit autonomous purchasing under predefined conditions."

Those are three different claims. Trusting, permitting without approval, and permitting inside predefined conditions are not interchangeable, and the third one is the narrowest. Trade coverage picked up the looser version, which is how a bounded-delegation question becomes a headline about autonomy.

I would not single out one company for this. The vocabulary does not exist yet, so everyone is improvising it, including the people writing about it.

### What each study actually asked

Global Payments published its Agentic Commerce Report on September 23. The fieldwork ran in May 2026, through The Lantern, covering 8,027 consumers across the United States, United Kingdom, France, Brazil, China, Singapore and Australia, with a comparable 2025 wave of 8,000 in the same markets.

ACI Worldwide published YouGov research on September 16. That fieldwork ran in June 2026, online, covering 3,328 adults aged 18 to 65, weighted, split 2,172 in the United Kingdom and 1,156 in the United States. The fashion findings rest on the 3,194 respondents who buy clothing, footwear or accessories.

So the first thing to say plainly is that these are not two readings of one population. One is seven markets including China, Brazil and Singapore, across groceries, clothing, electronics, cinema tickets and subscriptions. The other is two markets, weighted toward the United Kingdom, asking about fashion.

Scope inside the first study also needs care. Global Payments explicitly attributes three figures to Americans: 45% have used or would consider an AI shopping agent, 50% are concerned about payment security, and the release frames its narrative around American attitudes. The other numbers, including the 69% who use AI to find better deals, the 63% who use it to save time, the $100 category figures and the 33% who want to approve every transaction, are not labelled by population in the release. I am not going to assume they are American because they sit near a sentence that says Americans.

### Why the numbers diverge

The instruments differ more than the populations do.

Global Payments asks about comfort, category by category, with a stated ceiling. Up to $50 for cinema tickets, meal delivery, gift cards and subscriptions. Up to $100 for groceries at 69%, clothing at 69%, luxury clothing at 64%, electronics at 58%. A respondent can say yes to all of them.

ACI asks respondents to choose one posture. Fifty-three percent uncomfortable, 20% recommendations only, 14% approval on every purchase, 7% autonomous within predefined conditions. Those four options sum to 94, so the choices compete with each other in a way a category comfort scale does not.

Put one more way: the first instrument measures how far a willing consumer will go in a named category with a price cap. The second measures which single description a consumer picks for their overall stance on fashion. Different questions, different denominators, different answers. Both are hypothetical, and neither observes a transaction.

### Six levels, and the two nobody measured

Here is the taxonomy I would use, offered as my framework rather than either company's.

**Assist.** The agent researches, compares or hunts deals. Both studies measure this and both find it popular. Price drop alerts and cross-retailer comparison each drew 35% in the ACI data, well ahead of personalized suggestions at 18%.

**Recommend.** The agent proposes the choice. ACI puts 20% here explicitly.

**Prepare.** The agent assembles the cart but authorizes nothing. Neither study measures it, which matters because it is the level closest to what the platforms are actually shipping.

**Approve.** The agent initiates and the human signs off each time. Global Payments has 33% asking for exactly this. ACI has 14%.

**Bounded delegation.** Standing permission inside limits of category, amount, retailer or timing. This is where the 69% and the 7% both sit, and the reason they look incompatible is that they were produced by incompatible instruments.

**Autonomous.** No per-transaction approval and no meaningful bound. Neither study measures this cleanly either.

Two of six levels are unmeasured, and one of them is the level the software is being built for.

### What an operator should count instead

The temptation is to pick a number for the planning deck. The better move is to stop treating adoption as one number.

An operator planning for this should be able to say, separately, what share of its customers use AI to research, what share arrive with an AI recommendation, what share build a cart through an agent, what share approve an agent-prepared transaction, what share have granted standing authority, and what share of orders actually complete without a human touching them.

The middle of that list is where the products already are and where the research is thinnest. Almost nobody can report those today, and no industry dataset publishes them. That is the finding, not a gap to apologize for. [Infrastructure keeps arriving ahead of evidence](/ai-commerce-2027), and the [measurement work is still being reconstructed](/blog/niq-similarweb-agentic-commerce-measurement) from the outside. Willingness surveys will not substitute, because a survey can only report what a consumer says they would allow, never what an agent did.

### The objections

Both studies come from payments companies with a commercial stake in agentic commerce growing. That does not make the fieldwork wrong, and both disclose their methods, but it does mean the framing of every headline serves a roadmap.

You could also argue the divergence is mostly category. Fashion is identity-laden and fit-dependent, groceries are replenishment, and nobody should expect the same delegation appetite in both. That is a fair reading, and it strengthens rather than weakens the case, because it means a single adoption percentage was never going to travel across categories.

The last objection is the most serious. Definitional precision does not move volume, and an operator could reasonably say that agents are coming regardless of how carefully the industry labels the levels. True. But [forecasts describe a market](/blog/agentic-commerce-consensus-research-forecasts-marketplace-sellers), and only the delegation level tells you which part of your business the agent touches.

Before your next planning cycle prices in agentic demand, can anyone in the room say which of those six levels the number actually came from?

---

## OVERLAP REVIEW

Run across `Content/blog/*.md`, `scripts/insert-*.mjs` and `src/lib/ai-commerce-2027.ts`.

**Zero prior occurrences anywhere in the corpus:** "Global Payments", "ACI Worldwide", "YouGov", "autonomous purchasing", "approval for every", "bounded delegation".

| Coverage | Owns | This draft |
|---|---|---|
| AI Commerce 2027 | "Infrastructure exists. Adoption evidence does not." | Linked once and advanced. That page says adoption evidence is missing. This says willingness evidence exists but cannot be read without knowing what authority was delegated. |
| NIQ and Similarweb measurement | Reconstructing the AI-mediated journey from external datasets | Linked once. That is measurement of behavior after the fact; this is definition of consumer authority before it. |
| Agentic Commerce Consensus (forecasts) | Market size and transaction-share forecasts | Linked once, explicitly to separate a forecast of transaction share from consumer authority and observed volume. |
| Agentic Commerce Is Starting to Standardize the Buyer (Know Your Agent) | Agent identity, authorization and delegation on payment rails | Not linked. That is the rails side of delegation. This is the consumer side. Considered and cut to keep the link count honest. |
| Agentic Commerce Is Moving From AI Buyers to AI Operators | Agents on the merchant side | Untouched. |

**Verdict: PASS.** The corpus has covered forecasts, measurement of journeys, and agent authorization on payment rails. It has never examined whether the consumer-facing adoption statistics measure the same behavior, and no prior article contains a delegation taxonomy.

The thesis also clears the brief's FAIL list. It is not that consumers distrust AI, not that adoption is growing, not simply that surveys disagree, not that consumers want approval controls, and not that payments companies expect growth.

---

## METHODOLOGY COMPARISON

| | Global Payments | ACI Worldwide |
|---|---|---|
| Fielded by | The Lantern | YouGov |
| Published | 2026-09-23 | 2026-09-16 |
| Fieldwork | May 2026 | June 2026 |
| Sample | 8,027 consumers | 3,328 adults aged 18 to 65 |
| Markets | US, UK, France, Brazil, China, Singapore, Australia | UK 2,172, US 1,156 |
| Weighting | Not stated in the release | Country samples weighted to adults 18 to 65 |
| Category frame | Groceries, clothing, luxury, electronics, cinema, meal delivery, gift cards, subscriptions | Fashion and sportswear; fashion findings on 3,194 who buy clothing, footwear or accessories |
| Prior wave | Aug to Sep 2025, 8,000, same markets | None cited |
| Question form | Category comfort with a stated spending ceiling, multiple yes answers possible | Single-choice posture, four options summing to 94 |
| Mode | Not stated in the release | Online |

**Note on the September framing.** Both studies were fielded in May and June and published in September. The apparent September conflict is a publication artifact, not two simultaneous readings of the market.

---

## QUESTION AND POPULATION COMPARISON

**Explicitly scoped to Americans in the Global Payments release:** 45% have used or would consider an AI shopping agent; 50% concerned about payment security.

**Not explicitly scoped in the release, therefore reported here as unscoped:** the 9% to 15% five-year expectation; 69% using AI to find deals; 63% using it to save time; the $50 category comfort shifts (cinema 32 to 82, meal delivery 30 to 78, gift cards 28 to 77, subscriptions 27 to 69); the $100 figures (groceries 69, clothing 69, luxury clothing 64, electronics 58); 46% privacy and 42% wrong-purchase concern; 33% approve every transaction, 28% human support, 26% proof against hacking.

**ACI scope:** UK and US combined, weighted, fashion buyers. The release does not break the delegation options out by country, so a UK-versus-US comparison is not available.

**Closest comparable pair:** Global Payments' "would let an AI agent spend up to $100 on groceries" (69%) and ACI's "would permit autonomous purchasing under predefined conditions" (7%). Both describe standing permission inside a limit. The first is category-specific with a price cap and allows agreement with every category; the second is a single forced choice across a whole posture, competing against "uncomfortable" and "recommendations only".

---

## DELEGATION FRAMEWORK, TESTED AGAINST THE EVIDENCE

| Level | Definition | Measured by | Evidence |
|---|---|---|---|
| Assist | Research, compare, find deals | Both | GP 69% deals, 63% time saving; ACI 35% price alerts, 35% comparison, 27% similar products |
| Recommend | Agent proposes the choice | ACI | 20% recommendations but not autonomous purchases; 18% personalized suggestions, 17% outfit suggestions |
| Prepare | Agent assembles the cart, authorizes nothing | **Neither** | No figure in either release |
| Approve | Agent initiates, human approves each transaction | Both | GP 33% want to approve every transaction; ACI 14% require manual approval |
| Bounded delegation | Standing permission within category, amount, retailer or timing limits | Both, incompatibly | GP 69% groceries and 69% clothing at $100; ACI 7% under predefined conditions |
| Autonomous | No per-transaction approval, no meaningful bound | **Neither cleanly** | ACI's headline describes its 7% this way, but the underlying option is bounded |

I kept the brief's six labels. The evidence supports the taxonomy and exposes two holes rather than suggesting different levels.

---

## CONFIRMED EVIDENCE VERSUS INTERPRETATION

**Verified verbatim from the Global Payments release:** May 2026 fieldwork, 8,027 consumers, the seven markets, the 2025 wave of 8,000, 9% rising to 15%, 45% of Americans, 69% deal finding, 63% time saving, groceries 69% and clothing 69% at $100, luxury 64%, electronics 58%, 50% payment security among Americans, 46% privacy, 42% wrong purchase, 33% approve every transaction, 28% human support, 26% proof against hacking, and the $50 category doublings.

**Verified verbatim from the ACI release:** 3,328 adults aged 18 to 65, UK 2,172 and US 1,156, June 2026, weighted, 3,194 fashion buyers, 53% uncomfortable, 20% recommendations only, 14% manual approval, 7% autonomous under predefined conditions, 35% and 35% on price tools, 27% similar products, 18% personalized, 17% outfit, and the age skew on price alerts (40% among 45 to 54 versus 27% among 18 to 24).

**Could not verify, and therefore not used.** The brief's 5% "autonomous within set limits" and 2% "autonomous at specific retailers". The ACI release reports a single 7% for autonomous purchasing under predefined conditions and never splits it. No trade coverage I found reproduces a 5 and 2 breakdown. It may exist in the gated full report. The draft uses 7% only.

**Could not access.** The full Global Payments report and the full ACI report are both behind lead-capture forms. I did not submit personal data to obtain them, so every figure here comes from the public releases.

**Robert interpretation, labelled in the body:** the six-level taxonomy, the reading that the instruments rather than the populations explain most of the divergence, and the observation that Prepare and Autonomous are unmeasured.

**Unknown, and stated:** observed transaction volume at any delegation level, country-level splits in the ACI delegation question, and the population scope of most Global Payments figures.

---

## NON-NEGOTIABLE GUARDRAILS

1. **Never treat either survey as the correct adoption number.** Protecting sentence: "Neither company is wrong."
2. **Never say 69% of consumers currently let agents buy groceries or clothing.** Every reference to that figure is phrased as would-let, and the draft says both studies are hypothetical.
3. **Never say only 7% use AI shopping agents.** The 7% is stated as a permission posture, never as usage.
4. **Both sources are vendor-sponsored, and the draft says so.** Protecting sentence: "the framing of every headline serves a roadmap."
5. **Willingness is not behavior.** Protecting sentence: "a survey can only report what a consumer says they would allow, never what an agent did."
6. **Population scope is never inferred.** Protecting sentence: "I am not going to assume they are American because they sit near a sentence that says Americans."
7. **The taxonomy is the author's.** Protecting sentence: "offered as my framework rather than either company's."
8. **Never imply the two studies ran the same experiment.** Protecting sentence: "They are not the same question, and neither company is wrong."
9. **Never claim the six operator metrics are available industry-wide.** Protecting sentence: "Almost nobody can report those today, and no industry dataset publishes them."

---

## DURABLE THESIS (Editorial Board wording, 2026-09-26)

Agentic commerce has an adoption-definition problem. Assist, recommend, prepare, approve, bounded delegation and autonomous purchasing are different grants of authority. Until the industry separates them, headline adoption percentages tell operators less than they appear to, and studies measuring seemingly similar levels of delegation can produce numbers as far apart as 69% and 7%.

Do not restore the earlier phrasing "the same underlying behavior". The methodology audit shows different category frames, question structures and response designs, so that wording would imply an apples to apples experiment that does not exist.

---

## STRONGEST COUNTERARGUMENTS

All three are in the body.

1. **Vendor interest.** Both studies come from companies selling agentic commerce infrastructure, so the framing serves a roadmap even when the fieldwork is sound.
2. **Category, not instrument.** The divergence may be mostly fashion versus groceries. The draft concedes this and turns it: if delegation appetite is category-specific, a single adoption percentage was never portable.
3. **Precision does not move volume.** Agents arrive whether or not the industry labels the levels. The draft accepts this and answers that the level determines which part of the business is exposed.

The one I could not dismiss: a skeptic could say six levels is four too many for a planning conversation, and that Assist, Approve and Autonomous would do. I think Prepare earns its place precisely because it is what is shipping, but that is a judgment, not a finding.

---

## SEO PACKAGE

- **slug:** `agentic-commerce-adoption-definition-problem`
- **title (H1):** Agentic Commerce Has an Adoption Definition Problem
- **meta_title:** AI Shopping Adoption: Why 69% and 7% Both Look True (52 chars)
- **meta_description:** Two September surveys put AI shopping delegation at 69% and 7%. Both are defensible. The problem is that adoption statistics measure six different behaviors. (155 chars)
- **category:** Digital Transformation
- **tags:** agentic commerce, consumer research, AI shopping agents, delegation, measurement, payments
- **og_image:** `/images/blog/agentic-commerce-adoption-definition-problem.svg` (NOT generated)

**Search intent covered:** agentic commerce adoption statistics, AI shopping agent survey, Global Payments agentic commerce report, ACI Worldwide YouGov AI purchases.

---

## PRIMARY SOURCE MAP

| Claim | Source | Type |
|---|---|---|
| All Global Payments figures, methodology, markets, both waves | Global Payments investor release, 2026-09-23 | Primary, company issued |
| The Agentic Commerce Report framing and seven-market scope | globalpayments.com/agentic-commerce landing page | Primary, company page (report itself gated) |
| All ACI figures, methodology, sample splits, fashion base | ACI Worldwide investor release, 2026-09-16 | Primary, company issued |
| Trade coverage repeating the looser "without approval" phrasing | Retail Dive, 2026-09-23 | Secondary, used only to show the phrasing traveled |

---

## INTERNAL-LINK PLAN

**Three links, under the maximum of four:**

1. `/ai-commerce-2027` (the thesis this advances)
2. `/blog/niq-similarweb-agentic-commerce-measurement` (measurement of journeys, distinguished from definition of authority)
3. `/blog/agentic-commerce-consensus-research-forecasts-marketplace-sellers` (forecasts, explicitly separated from consumer authority)

Considered and cut: the Know Your Agent piece, which covers delegation on payment rails. It is genuinely adjacent, but the draft is already carrying a taxonomy and two methodologies, and a fourth link would have been cross-promotion rather than argument. Board may prefer it added in the objections section.

**LinkedIn:** no Hoot edition in the index covers consumer delegation or survey methodology, so nothing is cited.

---

## AI COMMERCE 2027 NOTE

Not requested in this brief, and not done. My recommendation if the Board wants it: **no tracker row.** The tracker records developments in infrastructure and capability, and two vendor surveys of hypothetical willingness are not that. If anything belongs on the flagship, it is a line inside the disconfirming or evidence section noting that willingness research now exists but is not comparable across instruments. I would hold that until the article is approved.

---

## MECHANICAL CHECKS

- Source body word count: 1115
- Em dashes: 0. En dashes: 0
- Questions in body: 1 (closing)
- Internal links: 3 (maximum was 4)
- No lead form, consultation CTA or consulting positioning
