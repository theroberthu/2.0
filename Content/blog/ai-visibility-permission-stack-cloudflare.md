# AI visibility as a permission stack: Cloudflare crawler controls

**Status:** APPROVED for production by Editorial Board, 2026-09-21.
**Type:** Research note
**Assignment:** TRH Editorial Board, 2026-09-21
**Overlap gate:** PASS. See OVERLAP REVIEW.

---

## TITLE SPLIT

- **title (editorial H1):** AI Visibility Is Becoming a Permission Stack
- **meta_title:** Cloudflare Disallow AI Training: Search, Training, Agents

---

## DRAFT BODY

### AI Visibility Is Becoming a Permission Stack

For two years the question was binary. Can AI systems read my site. Blocking the crawler meant disappearing from search, so almost nobody did, and the question stopped there.

On September 15, Cloudflare took that question apart.

### What actually changed

Cloudflare now classifies crawler behavior into three controls: Search, crawling to build a search index; Training, crawling to train or fine-tune a model; and Agent, user-directed agents visiting a page on behalf of a person.

The problem it fixed was the mixed-use crawler, one crawler doing both search and training. Refuse one and you refused the other. A new Disallow AI Training setting publishes a no-training preference in robots.txt while leaving qualifying mixed-use crawlers free to keep crawling for search.

Qualifying means what Cloudflare calls Accountable: the operator must offer opt-outs from AI training and AI summaries, give URL-level visibility into which pages were made available for training, and assure that opting out of training will not affect search results. Cloudflare says Apple, Google and Microsoft meet those requirements or have committed to timelines for the rest. It also calls the relevant Amazon, Anthropic, Meta and OpenAI crawlers Accountable, since those companies run separate search and training crawlers, so the training one can be blocked without touching search.

Two numbers frame the whole thing. Fewer than 1% of Cloudflare sites choose to block search bots. Seventeen percent use some mechanism to block training. Almost nobody refuses discovery; a meaningful minority already refuses one use of what gets discovered.

### The part worth checking yourself

That claim is worth checking at the source rather than taking from a vendor.

Google's own crawler documentation says Google-Extended manages whether crawled content may be used for training future Gemini models and for grounding in Gemini Apps and Grounding with Google Search on Vertex AI. It then says plainly that Google-Extended "does not impact a site's inclusion in Google Search nor is it used as a ranking signal in Google Search."

Worth reading precisely. That token's stated scope is Gemini apps and Vertex grounding, not generative features inside Search itself, and Cloudflare notes Google offers a separate webmaster-portal toggle for generative search results. Anyone assuming Google-Extended pulls them out of AI Overviews is assuming something Google's documentation does not say.

On Cloudflare's account, Microsoft is further back. Cloudflare says Bing currently expresses training preferences through the NOARCHIVE meta tag, that Microsoft is building support for a no-training preference in robots.txt targeted for early 2027, and that until then selecting Disallow AI Training does not convey that preference to Bing. I found no current Microsoft documentation saying this in Microsoft's words, so treat it as Cloudflare's description.

### Four permissions, four different levels of maturity

Search controls are old and universally understood. Training controls just became usable without sacrificing search, at least for the operators Cloudflare certifies. Summaries are earlier: an opt-out is an Accountable requirement, and Cloudflare says its goal is to let owners control how much content is included, set in one place, by early next year. Agents are earliest. Cloudflare ships no Disallow setting for agents, because the Internet "does not yet have a well-established directive for expressing Disallow preferences to agents," pending standards like ai-prefs.

So four permissions exist as concepts. Search and training have clearer mechanisms today, while summary-specific and agent-specific controls remain fragmented and less standardized. The permission stack is more mature as a business concept than as a control panel.

### Where this sits in the AI visibility picture

I have written about [retrievability](/geo), whether an AI system can find and understand your product, about [agent evaluation and purchase](/aeo), and about [what Search Console's generative AI report can and cannot tell you](/blog/google-search-console-generative-ai-visibility).

Permission is the piece between them. Machine-readable does not automatically mean machine-authorized. A system may technically be able to retrieve a page while the business grants different rights for search, training, summaries or agent activity. That is an operating and technical distinction rather than a legal one, and a preference published to a crawler is a request that cooperating operators honor, not a right that enforces itself.

So AI visibility now involves three separate questions, and they have different owners. Can the system technically retrieve the content. What uses does the business permit. And can the business measure the economic value of what results. Retrievability, permission and measurement is a more honest description of the operating model than any one of them alone. Permission stack is my shorthand for the middle question, not anyone's product name or industry terminology.

### The commerce question Cloudflare raises and does not settle

Cloudflare is explicit that the right answer depends on the business model. Its onboarding presets differ for ad-monetized sites, on the logic that ad revenue needs a human to see the page. A publisher funded by advertising may optimize for audience volume, it argues, while a retailer may prefer fewer visitors who are likelier to buy.

It supports that with figures: more than half of consumers read summaries in Search and are over 40% more likely to end their search afterward, while consumers referred by AI search convert at three to five times the rate of traditional search referrals. Cloudflare publishes no source or methodology for either number, and the second sits awkwardly beside [Adobe's finding that AI-referred shoppers convert 42% better](/blog/adobe-ai-traffic-393-percent-retail). Three to five times is a different claim from 42%, and I cannot say which is right. Neither discloses enough to reconcile them: merchant populations, how AI-referred traffic is defined, attribution windows, which AI sources count, journey stage and what counts as lift could each differ. The conclusion is not that one party is wrong. It is that no stable cross-platform benchmark exists yet for the commercial value of AI-referred traffic, which matters because that value is what a permission decision is supposed to weigh.

The policy point survives the uncertainty. Access policy should follow the economics of the interaction rather than a reflexive block-everything or allow-everything position. Nothing here says every retailer should allow summaries and agents, or that any should block them.

### What this asks of operators

These are business decisions wearing technical clothing. Search discoverability is settled for almost everyone. Whether your content trains somebody's model, whether it can be summarized in place of a visit, and whether agents may fetch it are open, and they belong with whoever owns the economics of the site rather than defaulting to whoever administers the DNS.

### The objections

Most merchants benefit from maximum discovery and may never need any of this. Restricting access today could cost visibility in systems that matter more later, a risk nobody can price.

Declarations also depend on compliance. Cloudflare can identify and block crawlers on its own network, but a published preference is a request. Accountable is Cloudflare's designation, not an industry standard, and Cloudflare defines, certifies and reports on it.

The hardest part is measurement. Deciding whether summaries or agent access are worth their cost means attributing outcomes to each permission separately, which almost nobody can do today.

If you had to write your company's policy on training, summaries and agent access this quarter, who in your organization would actually own that decision?

---

## OVERLAP REVIEW

Run across `Content/blog/*.md`, `scripts/insert-*.mjs`, and the `/geo` and `/aeo` pillar pages.

**Zero prior occurrences anywhere:** Cloudflare, robots.txt, Google-Extended, GPTBot, "AI training", noindex, NOARCHIVE.

| Coverage | Owns | This draft |
|---|---|---|
| Google Search Console Now Tracks AI Visibility, but Not AI Traffic | Measurement and observability; visibility is not traffic; the report as hypothesis generator | Linked once as the measurement leg. No measurement argument re-run. |
| GEO pillar | Retrievability and recommendation; how AI reads product data | Linked once as the retrievability leg. |
| AEO pillar | Agent-driven evaluation and purchase | Linked once as the agent leg. Note: the pillar covers agents *buying*, not whether agents may *fetch*, which is what Cloudflare's Agent control governs. |
| Adobe AI retail traffic | 393% AI traffic growth; AI-referred shoppers convert 42% better | Linked once, used to challenge Cloudflare's much larger conversion claim rather than to support it. |
| Crawler mentions elsewhere (Rufus, GEO vs SEO, reviews article) | Crawlers as readers: can they parse your content | Untouched. Those are about readability; this is about rights. |

**Verdict: PASS.** The corpus has no article about permission. Every existing piece assumes maximum access is desirable and asks whether AI can read the content well. Nothing asks what the business is granting, to whom, for which use. The framework contribution, retrievability plus permission plus measurement, is additive rather than a restatement, and each leg is linked once rather than re-argued.

---

## EVIDENCE CLASSIFICATION

**Verified verbatim from Cloudflare, "Have it both ways: stay discoverable in search while disallowing AI training," September 15, 2026, by Bryan Becker:**

- Three behavior controls: "Search - crawling to build a search index. Training - crawling to train or fine-tune a model. Agent - user-directed agents visiting a page on behalf of a human"
- "less than 1% of Cloudflare sites choose to block Search bots"; "17% of sites choose to enable some mechanism to block training"
- The four Accountable requirements, including "Assurance that opting out of AI training will not affect traditional search results"
- "Apple, Google, and Microsoft all demonstrate that they meet the qualifications to be Accountable"
- Amazon, Anthropic, Meta and OpenAI: "These organizations separate their Search and Training crawlers, so Cloudflare can block the Training crawler without affecting search"
- Agents: "the Internet does not yet have a well-established directive for expressing Disallow preferences to agents. For now, we're not including a Disallow setting for Agents"
- Summaries: "By early next year, our goal is to let you control how much of your content is included"
- Bing: robots.txt no-training support "targeted for early 2027"; until then Disallow AI Training does not convey the preference to Bing
- The ad-monetized versus non-ad onboarding presets
- The summary statistics, and the publisher-versus-retailer framing

**Verified directly from Google's own documentation** (Google's common crawlers, Search Central): Google-Extended's scope is training future Gemini models powering Gemini Apps and the Vertex AI API, plus grounding in Gemini Apps and Grounding with Google Search on Vertex AI. And verbatim: "Google-Extended does not impact a site's inclusion in Google Search nor is it used as a ranking signal in Google Search."

**Microsoft:** Cloudflare's characterization of NOARCHIVE and the early-2027 timeline is attributed to Cloudflare in the draft. I did not reach a current Microsoft documentation page stating the NOARCHIVE training semantics directly, so nothing is asserted as Microsoft's own wording.

**Attributed to Cloudflare, not verified:** every Accountable designation, and both summary statistics. Cloudflare publishes no source or methodology for the "over 40% more likely to end their search" and "three times to over five times" figures.

**Contradiction surfaced and reported:** Cloudflare's three-to-five-times conversion claim against Adobe's 42%, previously covered on TRH. The draft says both cannot describe the same quantity and treats the magnitude as unsettled.

**Correction to the brief:** the brief says "Apple, Google and Microsoft meet or have committed to Cloudflare's Accountable requirements," which matches. But it lists Amazon, Anthropic, Meta and OpenAI only as using separate crawlers. Cloudflare also categorizes their relevant crawlers as Accountable. The draft includes that.

---

## NON-NEGOTIABLE GUARDRAILS

1. **Never write that blocking Google-Extended removes a site from AI Overviews.** Google's documentation does not say it. Protecting sentences: the token's scope paragraph, and "anyone who assumes blocking Google-Extended pulls them out of AI Overviews is assuming something Google's documentation does not say."
2. **Never present the four permissions as equally mature.** Protecting sentence: "The permission stack is more mature as a business concept than as a control panel."
3. **Never claim Cloudflare proved retailers should allow summaries or agents.** Protecting sentence: "Nothing here says every retailer should allow summaries and agents, or that any should block them."
4. **The conversion statistics stay attributed and contested.** Never repeat the three-to-five-times figure without the missing-methodology note and the Adobe comparison.
5. **Accountable is Cloudflare's designation,** not an industry standard, and Cloudflare defines, certifies and reports on it. That sentence stays in the objections.
6. **No robots.txt tutorial.** No syntax, no directives to copy, no configuration steps.
8. **"Permission stack" is Robert's framework,** synthesized from emerging controls. Never attribute the term to Cloudflare, Google or the industry. Protecting sentence: "Permission stack is my shorthand for the middle question, not anyone's product name or industry terminology."
9. **Microsoft stays attributed to Cloudflare** unless a Microsoft primary source is verified. Protecting sentence: "read all of it as Cloudflare's description."
10. **The conversion disagreement resolves to a measurement point,** never to one party being right. Never invent methodology differences the sources do not disclose; the draft lists them only as things that could differ.
7. **Agent control governs fetching, not buying.** Do not blur it into the AEO pillar's subject.

---

## STRONGEST COUNTERARGUMENTS

All six from the brief are in the body. The two that most constrain the thesis:
1. **Almost nobody needs this yet.** Under 1% block search and the permission question is theoretical for most merchants, so a "stack" may be describing a control panel few will touch.
2. **Nobody can price the decision.** Choosing per-permission policy requires attributing outcomes to each permission separately, which is not currently possible. The draft ends on that rather than pretending otherwise.

---

## SEO PACKAGE

- **slug:** `ai-visibility-permission-stack-cloudflare`
- **title (H1):** AI Visibility Is Becoming a Permission Stack
- **meta_title:** Cloudflare Disallow AI Training: Search, Training, Agents (56 chars)
- **meta_description:** Cloudflare split crawler control into search, training and agents. AI visibility is turning into a permission decision, not a yes-or-no crawler setting. (152 chars)
- **category:** GEO & SEO
- **tags:** AI visibility, crawlers, GEO, AI training, Cloudflare, permissions
- **og_image:** `/images/blog/ai-visibility-permission-stack-cloudflare.svg` (NOT generated)

**Internal links (4, all confirmed live at 200):**
1. `/geo` (retrievability)
2. `/aeo` (agent evaluation and purchase)
3. `/blog/google-search-console-generative-ai-visibility` (measurement)
4. `/blog/adobe-ai-traffic-393-percent-retail` (the conversion figure this draft sets against Cloudflare's)

**LinkedIn:** Hu's Weekly Hoot Week 36 covers the Search Console benchmark and was considered. Not used, because the measurement leg is already carried by the linked article and a second reference would be redundant.

---

## PRIMARY SOURCE MAP

| Claim | Source | Type |
|---|---|---|
| Three controls, Disallow AI Training, Accountable requirements, operator designations, adoption percentages, agent and summary status, Bing timeline, onboarding presets, conversion statistics | Cloudflare blog, 2026-09-15 (`blog.cloudflare.com/accountable-mixed-use-ai-crawlers/`) | Primary, vendor |
| Google-Extended scope and the no-impact-on-Search statement | Google Search Central, Google's common crawlers | Primary, operator |
| AI-referred shoppers convert 42% better | Adobe, via prior TRH coverage | Prior TRH, secondary |

---

## MECHANICAL CHECKS

- Body word count: see report
- Em dashes: 0. En dashes: 0
- Questions in body: 1 (closing)
- No lead form, consultation CTA or consulting positioning
- No robots.txt syntax or configuration instructions
