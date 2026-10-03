# Amazon Full-Funnel Campaigns and the moving strategy line

**Status:** DRAFT ONLY. Nothing published, committed, pushed, written to Supabase, added to the sitemap, or generated as an asset.
**Type:** Research note
**Assignment:** TRH Editorial Board, 2026-10-03
**Overlap gate:** PASS with one material constraint. See OVERLAP REVIEW.
**Verdict:** PASS under the higher editorial bar.

---

## TITLE SPLIT

- **title (editorial H1):** Amazon Just Put Channel Mix Inside the Algorithm
- **meta_title:** Amazon Full-Funnel Campaigns Put Channel Mix Inside AI

---

## DRAFT BODY

### Amazon Just Put Channel Mix Inside the Algorithm

In March I wrote a sentence about [Walmart's Marty ad agent](/blog/walmart-marty-ad-agent) and meant it as practical advice. "Keep the strategic layer (budget allocation, target ROAS, channel mix, product prioritization) with a human. Let the AI handle execution within those constraints."

Amazon's September 29 documentation puts two of those four items inside the optimizer.

### What Amazon actually shipped

Full-Funnel Campaigns brings sponsored ads, display, video and streaming TV into one campaign. The advertiser sets products, a daily budget, an optional ROAS threshold and creative, or generates creative with Amazon's tools and approves it before launch. Amazon's AI, in the company's words, "handles the rest on their behalf."

The sentence that matters is in the pricing FAQ rather than the announcement. "Full-Funnel Campaigns uses a daily budget, which Amazon's AI then allocates across sponsored ads, display, video, and streaming TV in real time to grow long-term sales." The unBoxed recap is blunter: "You set your goal and AI handles the channel mix, creative, audiences, and optimization."

Amazon used my word.

One correction to the trade coverage. The launch announcement says Full-Funnel Campaigns is "now available to all advertisers in the United States," while the product FAQ is narrower: U.S. advertisers selling in the Amazon store, Brand Registry sellers, vendors, and agencies with clients who sell on Amazon, with a minimum daily budget. I found no "open beta" wording for it. The product with published beta stages is DVA+, in extended closed beta with open beta expected late October.

### Auditing my own four items

**Budget allocation moved.** The human sets a daily amount and can change it at any time. Amazon moves it between formats in real time. No format level minimum, maximum, override or lock appears anywhere in the documentation I read.

**Channel mix moved, inside a boundary.** The four formats are fixed and Amazon chooses among them. This is not a machine choosing every media channel available. Audio is not in Full-Funnel Campaigns at all, despite one Amazon recap listing it.

**Target ROAS stayed human, and stayed optional.** Whether the threshold is a hard floor, a target, or one input among several is not documented anywhere I could find.

**Product prioritization split.** The advertiser picks the products. Whether Amazon weights spend across them, and whether per product weighting is available, is not documented.

Two of four moved. One stayed. One is unclear. That revises a sentence I published rather than reversing it.

### What is new, and what is not

Amazon did not invent this. Performance Max and Advantage+ have automated placement, audience and budget decisions for years. Amazon itself announced Full-Funnel Campaigns at unBoxed 2025, and that description already included continuously adjusting "budgets, audiences, and tactics." The 2025 version recommended a setup. The 2026 version runs now, with numbers attached.

The narrower new thing: a retail media platform is allocating one daily budget across its own sponsored search auction and its own streaming TV inventory in a single campaign, optimizing toward a metric built from its own purchase data. Google allocates across Google. Amazon is allocating across the gap between demand creation and demand capture, which is the gap most retail media org charts are built around.

### The number, and what it contains

Amazon reports 67% higher Long-Term ROAS and 29% lower cost per new-to-brand purchase. The footnote reads: "Amazon internal. June - August 2026. Based on early beta results; individual performance may vary."

Long-Term ROAS is not current period sales ROAS. Amazon's own documentation defines Long-Term Sales as an estimate of value over the next 12 months "based on how effectively your advertising campaigns are able to move new-to-brand shoppers further down your purchase funnel," credited from the historical return on actions like detail page views and add to carts. A campaign that produced a product page view receives credit for what shoppers who took that same action historically went on to do.

The comparison group is "independently configured campaigns." The honest reading of the uplift is that coordinated beat uncoordinated, which may say as much about how poorly separate campaigns were working together as about the optimizer. Advertiser count, categories, spend, matched budgets, randomization and significance are all undisclosed. This is one more case of [performance measured inside the ecosystem being measured](/blog/commerce-media-basket-data-spend-data-citi).

Amazon does ship something genuinely useful here. The accumulated sales report, in Amazon's words, lets you compare "estimated LTS to sales driven by your campaign cohorts over time, measuring whether the revenue estimated by LTS actually materialized." A platform shipping a back test of its own modeled metric is worth more than the 67%.

### Amazon is selling delegation levels

The strongest evidence sits in a different product. DVA+ publishes a capability table. In the default mode, budget is "set once; AI optimizes delivery" and format selection is "multi-format automatically." Turn on advanced settings and the same advertiser gets "format-level allocation, budget flighting, budget and frequency caps" and "granular per-format configuration."

Format level allocation exists at Amazon. It is a control in one campaign type and absent from the other. Delegation level has become a product choice.

That strengthens the objection to my own thesis, and I think the objection wins. Channel mix has not stopped being strategy. It has stopped requiring a human to make every allocation decision. Choosing Full-Funnel Campaigns is itself the strategic act.

### The revised rule

In August, looking at [The Trade Desk](/blog/trade-desk-kokai-zuma-agentic-media-buying), I argued the buyer's work moves up a level rather than disappearing. The execution boundary there was narrow and mostly closed beta. This is the first case I have seen where the specific decisions I told people to keep are executed by default in a product available today.

The strategic layer did not disappear. It moved upstream.

Do not keep a decision with a human because it was historically filed under strategy. Keep it human when it encodes something the optimizer cannot see: the objective, the economic envelope, the margin reality, the brand boundary, and the standard of proof required to scale. Hand over what can be continuously optimized inside those.

Three things are worth settling before funding this. Establish from your account team whether the optional ROAS threshold is a hard constraint or a preference, because it is the only economic guardrail in the setup and the documentation does not say. Confirm whether the optimization target matches contribution margin or platform attributed sales that include modeled future value, because those are different numbers. Decide in advance what evidence from outside the optimizer will justify the next budget increase, and write it down before the learning period starts.

The platform now makes the allocation decisions my March advice told you to keep. Which of them would you actually want back?

---

## OVERLAP REVIEW (106 live posts swept)

Phrase sweep across the full Supabase corpus:

| Phrase | Hits | Where |
| --- | --- | --- |
| "channel mix" | 1 | walmart-marty-ad-agent |
| "strategic layer" | 1 | walmart-marty-ad-agent |
| "strategy tools" | 1 | walmart-marty-ad-agent |
| "execution within those constraints" | 1 | walmart-marty-ad-agent |
| "budget allocation" | 4 | marty, amazon-advertising-strategy-2026, sparky-sponsored-prompts, agentic-consensus |
| "Full-Funnel" / "full-funnel" | 1 | instacart-gopuff (quoting Gopuff, unrelated) |
| "Amazon Ads Agent" | 0 | lane empty |
| "Long-Term Sales" / "long-term ROAS" | 0 | lane empty |
| "media buyer" | 0 | lane empty |
| "Performance Max" | 1 | google-exact-match-ads-ai-mode (search context) |
| "Advantage+" / "Brand+" / "Performance+" | 0 | lane empty |

**PASS with one material constraint.** `trade-desk-kokai-zuma-agentic-media-buying` (August 28) already argues that the buyer's work moves up a level and that the human keeps the objective and the constraints. That article does NOT contain the words channel mix, budget allocation, or strategy tools, and its finding was that the execution boundary was narrow and mostly closed beta. The draft therefore cites it as the prior step in the revision rather than restating the conclusion as new.

## MARTY LINE-BY-LINE AND BELIEF REVISED

Exact prior belief, from `walmart-marty-ad-agent`, published 2026-03-22, section "What Should You Do About It?", item 5:

> "Maintain strategic control. AI ad agents are optimization tools, not strategy tools. They will maximize the objectives you give them. If your objective is wrong, the AI will efficiently pursue the wrong goal. Keep the strategic layer (budget allocation, target ROAS, channel mix, product prioritization) with a human. Let the AI handle execution within those constraints."

What survives: the objective warning, and "they will maximize the objectives you give them." What does not survive: the four-item list as a list of things a human must execute.

## PROTECTED SECTIONS (Editorial Board, 2026-10-03, approved)

**Protected: the concession, verbatim.** "Channel mix has not stopped being strategy. It has stopped requiring a human to make every allocation decision. Choosing Full-Funnel Campaigns is itself the strategic act." The Board named this as stronger than "strategy moved upstream" alone, because it answers the Performance Max and Advantage+ objection directly. Never soften it into "channel mix is no longer strategy."

**Protected: the delegation-level distinction.** Full-Funnel allocates across formats in real time; DVA+ advanced settings returns format-level allocation, targeting and inventory controls to the advertiser. This is what makes the thesis concrete rather than philosophical. The DVA+ capability-table quotes stay intact.

**Protected: the four-item audit and its exact split.** Two moved, one stayed and is optional, one is undisclosed. Do not round this to "strategy moved to the machine."

**Protected: the surviving half of the March principle.** If the objective is wrong, the AI will efficiently pursue the wrong goal. The revision removes the four-item list, not the objective warning.

**Protected: the Long-Term ROAS proof boundary** on first substantive use, including the detail-page-view credit mechanism, and the "independently configured campaigns" denominator with the coordinated-beat-uncoordinated reading.

**Protected: the three-step progression.** March to August to October, with the Trade Desk link in place. The Board confirmed this link is editorially necessary, not optional.

## AI COMMERCE 2027: NO CHANGE RECOMMENDED

Shift 08 does contain merchant-agent control-surface material and an approval-boundary argument. But its spine is reliability evidence, and Amazon published no error, intervention or reversal rate here. Adding an advertising example would not advance the shift's claim. No new tracker row. No `LAST_UPDATED` change.

## SEO PACKAGE

- slug: `amazon-full-funnel-campaigns-ai-channel-mix`
- category: Digital Marketing
- internal links (3): `/blog/walmart-marty-ad-agent`, `/blog/commerce-media-basket-data-spend-data-citi`, `/blog/trade-desk-kokai-zuma-agentic-media-buying`

## DURABLE THESIS

The boundary between advertising strategy and execution is moving upstream. Once a platform can continuously choose formats, audiences and budget allocation across the funnel, media planning itself becomes partly executable. The human role concentrates around defining the commercial objective, setting the economic envelope, approving brand decisions, and independently evaluating whether the optimizer created incremental value. Strategy becomes less about choosing every lever and more about deciding which decisions the machine is allowed to make, which is why Amazon now sells delegation level as a product choice.

---
