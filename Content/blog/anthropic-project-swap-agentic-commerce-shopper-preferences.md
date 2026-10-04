# The second representation problem

**Status:** DRAFT ONLY. Nothing published, committed, pushed, written to Supabase, added to the sitemap, or generated as an asset.
**Type:** Research note
**Assignment:** TRH Editorial Board, 2026-10-03
**Overlap gate:** PASS. "representation" returns zero hits across 107 live posts. See OVERLAP REVIEW.
**Verdict:** PASS under the higher editorial bar.

---

## TITLE SPLIT

- **title (editorial H1):** The Hardest Part of Agentic Commerce May Be Knowing What the Shopper Wants
- **meta_title:** Anthropic Project Swap Shows AI Shopping Has a Preference Problem

---

## DRAFT BODY

### The Hardest Part of Agentic Commerce May Be Knowing What the Shopper Wants

Almost everything I have written about agentic commerce has been about one half of the problem: whether the agent can understand the product. Structured attributes, catalog accuracy, machine-readable storefronts, checkout protocols, the [AEO](/aeo) discipline of making a product legible to software. That is the supply side.

Anthropic published an experiment on September 24 that points at the other half, which is whether the agent can understand the person.

In its controlled market, the answer was mostly no, and that turned out to matter more than anything the agents did at the bargaining table.

### What they actually ran

Project Swap put 201 Anthropic employees across six offices into a barter economy. Everyone brought a book to give away. Each person had a short chat with Claude about what they wanted to read. From that conversation, Claude built a ranking of every book in that person's local pool, using Fable 5, a strong model. Agents then met on a trading floor and swapped until the clock ran out.

Separately, each participant ranked 10 books from their pool by hand. The agents never saw those rankings. That gave Anthropic something the industry almost never has: a ground truth to score the agent's model of the person against.

Pool sizes ran from 115 in San Francisco down to three in Dublin, which is excluded from most of the analysis. 188 people submitted rankings, and that is the denominator for the preference results, not 201.

### How well the agent knew its person

Across all pairs of books a participant ranked, Claude's ordering agreed with theirs 61% of the time. Random guessing would get 50%.

The baselines are what make that number legible. Ranking by raw popularity got about 53%. Collaborative filtering, the "people who liked X also liked Y" approach that powers most recommendation engines, got about 55%. Anthropic also points to a study where an algorithm predicted which joke a person would find funnier about 61% of the time, and the person's own friends managed about 57%.

So a five-minute chat beat the standard machinery and roughly matched a friend. Read optimistically, that is impressive. Read structurally, it is a representation that is right about three times in five.

Effort helped, modestly and with diminishing returns. The median participant typed 216 words across eight messages, and doubling the words typed was associated with 4.1 percentage points more pairwise agreement. That is a log specification with office fixed effects, so it is not a case for talking to your assistant indefinitely.

### Where the market actually lost

Anthropic scores outcomes on a simple scale. Getting your top-ranked book is 1, your last-ranked book is 0. Averaged across participants, that is the market's efficiency.

The best feasible assignment, computed from what people actually wanted, scores 0.89, roughly everyone's second choice. The live decentralized market scored 0.55, roughly everyone's fifth choice out of ten.

Then the decomposition. Take the best possible assignment computed from Claude's rankings, and score it against what people actually wanted. It reaches 0.60. So the gap between 0.89 and 0.60 is the cost of working from an imperfect model of the person, and the gap between 0.60 and 0.55 is the cost of letting agents haggle instead of running a clearinghouse. That is 85% representation and 15% market design.

Swapping in a textbook mechanism barely helped. Top Trading Cycles, run on Claude's rankings, also landed at 0.60.

### Capability did not rescue it

This is the finding I keep returning to.

Anthropic reran the floors with different models. Judged on Claude's own rankings, stronger models traded better: Haiku floors averaged 0.75, Opus floors 0.88. Model choice mattered considerably more than whether an agent was told to be ruthless or prosocial, which moved outcomes about 0.02.

But scored against what people actually wanted, that advantage nearly vanished. In Anthropic's footnote, the largest model gap it found, 0.12 between Haiku and Opus floors, becomes 0.01 on people's own rankings.

Rerunning the intake with different models tells the same story. Fable managed 61% agreement, Opus 60%, Sonnet 59%, Haiku 57%. Four points across the entire model range.

The agent can execute the purchase perfectly and still buy the wrong thing.

### What this is not

This is Anthropic studying Anthropic, using Anthropic's models, in a market Anthropic designed. The disclosure is unusually good, with reruns, confidence intervals, named limitations and a published appendix, but it is not independent.

The constraints are real. Employees who helped build Claude are unusually willing to trust it. Books may be the most subjective category in retail. It was barter, not pricing and checkout. Every agent was a cooperative Claude with no adversaries. The scoring assumes the gap between your first and second choice equals the gap between your thirtieth and thirty-first. Only 59% answered the final survey. And Anthropic concedes part of the error may be irreducible, quoting a participant: "I don't even fully know what I want when it comes to books."

Nothing here tests Amazon, Walmart, ChatGPT or any production shopping agent.

### The precondition nobody is building

In September I wrote about Know Your Agent work and [the four questions a merchant's checkout now has to answer](/blog/visa-mastercard-know-your-agent-interoperability): which agent is this, who operates it, what was it authorized to do, and can another network's answer be trusted.

Project Swap adds a fifth, and it sits upstream of all four: whether this agent has understood this particular person.

Anthropic's proposal is a representation test. After intake, show someone a handful of sample decisions the agent would make, and let them correct it or walk away. The participants who said Claude's summary of them missed nothing would hand an agent 34% of their annual book budget with no veto rights. Those who said it missed something offered 23%. Controlling for what each person would give a well-read friend, the gap holds at nine points.

People could not detect being represented by a weaker negotiator in Anthropic's earlier Project Deal. They could detect being misunderstood, and they priced it.

### What this changes for merchants

When I wrote that [Rufus account memory turns listings into persona matching](/blog/amazon-rufus-account-memory), I treated the shopper profile as the accurate part of the system and the listing as the variable. Project Swap inverts the burden of proof on that assumption.

Product data tells the agent what the item is. Preference data tells it whether the item is right for you.

Three consequences follow. Persistent memory is worth something only if the shopper can inspect and repair it, which is a product requirement, not a privacy footnote. Delegated authority should scale with demonstrated representation accuracy rather than transaction capability alone. And merchants are increasingly competing to win inside a buyer-side model of the customer that they cannot see, cannot audit, and did not build.

If the agent's model of your customer is wrong, whose problem is that?

---

## OVERLAP REVIEW (107 live posts swept)

| Phrase | Hits | Where |
| --- | --- | --- |
| "representation" | 0 | lane empty |
| "Project Swap" / "Project Deal" | 0 | lane empty |
| "shopper model" | 1 | amazon-alexa-shopping-search-anticipation (passing use) |
| "understand the shopper" | 0 | lane empty |
| "user model" | 0 | lane empty |
| "preference" | 16 | all passing uses, none load-bearing |
| "memory" | 6 | amazon-rufus-account-memory (8 uses) is the only substantive one |
| "personalization" | 9 | merchant-side personalization, never agent accuracy |
| "negotiat" | 5 | protocol and ads contexts, never agent-to-agent bargaining quality |
| "agent-to-agent" | 1 | amazon-joins-universal-commerce-protocol (protocol framing) |

**PASS.** The corpus does not own "agentic shopping outcomes depend on how well the agent represents the shopper's preferences." It owns the merchant-side product-data thesis thoroughly and the demand side not at all.

## PROTECTED SECTIONS (Editorial Board, 2026-10-03, approved)

**Protected: the centerpiece is footnote 15, not the 85% headline.** The largest model-quality gain in the study, a 0.12 gap between Haiku and Opus floors scored on Claude's inferred rankings, collapses to 0.01 scored against people's actual preferences. The Board named this as unusually clean evidence that better optimization cannot rescue the wrong shopper model. It must not be demoted below the 85% figure.

**Protected: the 85/15 decomposition in its supporting role,** with all three scores (0.89, 0.60, 0.55) and the metric definition intact, because the arithmetic is explicit: 0.29 of the 0.34 shortfall is representation, 0.05 is market design.

**Protected: the four-model intake spread** (Fable 61, Opus 60, Sonnet 59, Haiku 57) showing four points across the entire production model range.

**Protected: the inversion against the Rufus and AEO worldview.** TRH treated the shopper profile as the trustworthy side and the listing as the variable. The sentence "Project Swap inverts the burden of proof on that assumption" is the editorial hinge. Do not soften it into "personalization matters."

**Protected: the governance extension.** The fifth question sits upstream of identity, authority, permission, constraint and audit. The Know Your Agent internal link stays, because it is what earns the move.

**Protected: the 61% stated as pairwise agreement** with its three baselines, never as "understands people 61%." And the omission of the 30% delegation headline is deliberate and Board-endorsed: only the within-study 34% versus 23% comparison is used.

**Protected: the Anthropic incentive disclosure,** stated as not independent.

## DURABLE THESIS

Agentic commerce has spent its infrastructure cycle on how software finds products, negotiates, checks out and pays. Project Swap points to an earlier bottleneck: whether the agent accurately understands the person it represents. In a controlled market, 85% of the shortfall from the optimal outcome came from imperfect preference representation rather than bargaining, and the largest capability gain available collapsed to almost nothing when scored against what people actually wanted. Better transaction rails cannot repair an agent optimizing the wrong model of the shopper. The next trust layer may therefore need a way for people to inspect, correct and validate what their agent thinks they want before granting it authority to act.

---
