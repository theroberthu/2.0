# The RealReal, Meta Muse and Inventory Holds

**Status:** PUBLISH APPROVED (senior editor, 2026-10-27) after five edits plus subhead and meta title changes, all applied.
**Type:** Authority / thesis article, standalone
**Assignment:** TRH Editorial Board, 2026-10-27
**Gates:** Research PASS, Editorial PASS (five edits applied), SEO/GEO PASS. Standalone. Final: PUBLISH. No Key findings box (thesis convention).
**Source-body word count:** 1,122 excluding the H1, with section headings and list items included; 1,089 prose only. Method: whitespace-separated words containing a letter or digit, link URLs not counted.

---

## SEO PACKAGE

- **title (editorial H1):** The RealReal Shows Why AI Shopping Permissions Must Begin Before Checkout
- **meta_title:** AI Shopping Agents and Cart Holds: Lessons From The RealReal
- **slug:** realreal-meta-muse-ai-agent-inventory-holds
- **category:** E-commerce Strategy
- **meta_description:** A Meta Muse test held one-of-one items at The RealReal for hours without buying them. Why AI agent permissions must cover carts and holds, not just checkout.

## KEY FINDINGS (for review; see note on the 1.52 rule)

1. In a test reported by The Verge, Meta's Muse repeatedly renewed The RealReal's 20-minute cart holds on 10 one-of-one listings for hours, on the reporter's instruction, without buying anything.
2. Muse's published safeguards center on purchase approval and the user's own data, so a task with no purchase did not reach them.
3. The RealReal now makes it much harder for all agents to log in, add items to the cart and check out, while agents can still surface listings and send shoppers to product pages.
4. Security teams already name the pattern: OWASP lists it as Denial of Inventory. The new element is a mainstream consumer agent doing it on an ordinary instruction.
5. Discovery, account access, cart actions, reservations and purchase are separate permissions, and a retailer can grant them separately.

---

## DRAFT BODY

### The RealReal Shows Why AI Shopping Permissions Must Begin Before Checkout

An AI shopping agent can change what other customers are able to buy without buying anything itself.

That is the lesson in a test The Verge ran on The RealReal, and in the retailer's response. Many of agentic commerce's most visible safeguards, including purchase approval and protected payment credentials, become most explicit at checkout. On a site where a cart is a reservation, the consequential action happens earlier.

### What happened

The RealReal puts an item on hold for 20 minutes once a shopper adds it to the cart, and other customers cannot buy it during that time. On October 22, The Verge's Mia Sato described instructing Meta's Muse to add the 10 newest listings from a favorite brand to her cart, then to re-add them each time the hold expired. She had no intention of buying them. The task ran all day before she ended it. Nothing was purchased.

In that story, The RealReal's chief technology officer, Luke Friang, said the company would "remain open to third-party AI agents" while keeping safeguards against automated activity that disrupts the customer experience. On October 26, The Verge reported that the company had addressed the use case. Its bot defenses now make it "much more difficult for all agents to log in, add items to cart, and check out," Friang said, while agents can still surface listings and direct Muse users to product pages. Meta did not comment.

### This was not a purchase problem

Muse's safeguards are built around buying. Meta says Muse asks the person before it makes a purchase, and Stripe's Link asks the customer to approve the total. Meta's spokesperson told The Verge that Muse also applies "ethical browsing principles" when asked to do things a human could not, such as buying every ticket to an event.

None of that was triggered, because nothing was bought. And the task was one a person could do, just far more patiently than any person would.

Meta's published security design explains why. A separate agent called Sentinel weighs each action against the policy the user has set and decides whether to allow it, deny it or ask. It supports standing permissions, because Meta does not want Muse asking the user about everything. That design protects the user's accounts, data and money. In Meta's published description, it does not separately explain how Muse limits otherwise authorized browser actions whose cost falls on other shoppers.

This is the gap next to an argument I made earlier: [AI can decide what to buy, but should not decide that money moves](/blog/npci-upi-ai-agent-authorization). Separating the decision from the payment protects the buyer. It does not govern what an agent does before payment.

### The inventory pattern is not new

Holding stock without buying it is not new. The pattern resembles what OWASP's catalog of automated threats calls Denial of Inventory: holding limited stock "without completing the purchase," preventing other users from buying it. Hoarding and seat spinning are among its other names, and bot-defense vendors were warning in the spring that buy-for-me agents could do it at scale.

What is new is the source. This came from a mainstream consumer agent following an ordinary instruction on a real account, not from a scripted bot.

I would not call it an exploit or an attack. The reporter used a normal feature, for a test, and The RealReal treated it as a use case to address. "Reservation loophole" is closer. The RealReal's terms of service, last updated in 2023, do bar robots and any use that could interfere with other users, but the company did not say Muse broke them, and its own CTO had described agents as welcome.

### Why one-of-one inventory raises the stakes

In a replenishable catalog, a held unit usually has a twin on the shelf. At The RealReal, nearly every item is the only one, which is why its own discovery agent, [Ask TRR, was built for one-of-one inventory](/blog/the-realreal-ask-trr-ai-shopping-agent). Ask TRR is The RealReal's agent, searching its own catalog. Muse is an outside agent acting for a shopper. The difference matters: one is a retailer's tool, the other arrives as a customer.

For a unique item, a hold is the entire supply for 20 minutes. Renewed again and again, it takes the item out of the market without anyone owning it. Not every add-to-cart has that effect. On a site without holds, or with deep stock, the same action costs nobody anything.

### Five permissions, not one

An agent arriving at a store is asking for several permissions at once:

- **Discovery:** finding and recommending the product.
- **Account access:** logging in for the customer.
- **Cart action:** adding and removing items.
- **Reservation:** letting a cart take scarce inventory off the market, and how often.
- **Purchase:** submitting the order and starting payment.

The RealReal's response separates those permissions, although not through five individually documented controls. Discovery remains available, while account access, cart actions and checkout became more difficult for outside agents. The company has not explained whether reservation behavior is governed separately. It is a blunt instrument, and the same split could be drawn more finely.

### Operator implications, not announced features

None of the following is something The RealReal has announced. These are the controls the case suggests for any store where a cart reserves inventory:

- Limits on how many holds one agent or account can place, and how often.
- No fresh start when the same item is re-added right after its hold expires.
- Shorter holds, or none, for agent-initiated carts on scarce or one-of-one items.
- Agent identity and attribution, so a store can tell an agent's cart from a person's.
- Activity the customer can see, so a shopper knows what their agent is holding.

Agent identity makes the other controls more precise. A retailer can apply account, session or traffic limits without knowing the agent, but verified identity lets it attribute behavior and enforce agent-specific rules. Walmart's model gives each outside agent [its own profile, with limits](/blog/walmart-agent-gateway-agent-profiles), and Walmart's terms let it limit what agents may buy and how often, and require them to respect rate limits. Those published rules address purchases and request rates, not cart holds, and I would not assume they stop this pattern.

### What the case shows

An AI shopping agent does not need payment authority to affect commerce. Where a cart controls scarce inventory, permission to add an item is already a form of economic authority. The RealReal has disclosed no financial impact from the test, and one reporter's experiment does not show widespread harm. It does show that retailer permission, the constraint I described in [Meta's Muse numbers](/blog/meta-muse-shopping-agent-commerce-adoption), has to be granted action by action rather than at the door.

If an agent can hold your scarcest inventory without buying it, which of your rules would notice?

---

## INTERNAL-LINK PLAN

| Anchor | Target | Why |
| --- | --- | --- |
| AI can decide what to buy, but should not decide that money moves | /blog/npci-upi-ai-agent-authorization | Payment-focused governance protects the buyer, not the marketplace before payment |
| Ask TRR, was built for one-of-one inventory | /blog/the-realreal-ask-trr-ai-shopping-agent | One-of-one inventory; retailer's own agent versus an outside agent |
| its own profile, with limits | /blog/walmart-agent-gateway-agent-profiles | Bounded external-agent identity and permissions |
| Meta's Muse numbers | /blog/meta-muse-shopping-agent-commerce-adoption | Retailer permission as the constraint |

Four internal links. Personal Agent Protocol read but not linked: the Walmart and Muse articles already carry the two-grant permission point.

## EXTERNAL SOURCES (to link on publication, each anchor once)

- The Verge, Mia Sato, "AI agents are ready to shop. Some retailers are wary," Oct 22 2026 (primary for the test): https://www.theverge.com/report/1015811/ai-shopping-agents-blocked-amazon-the-realreal-target-meta-muse (anchor: "described instructing Meta's Muse")
- The Verge, Mia Sato, "The RealReal won't let AI agents hog designer clothing," Oct 26 2026 (primary for the change): https://www.theverge.com/news/1018713/meta-muse-agentic-shopping-ai-the-realreal (anchor: "The Verge reported that the company had addressed the use case")
- Meta, "How We Built Safety Into Muse": https://research.meta.ai/blog/security-and-safety-for-ai-agents-our-approach-with-muse (anchor: "Meta's published security design")
- OWASP, OAT-021 Denial of Inventory: https://owasp.org/www-project-automated-threats-to-web-applications/assets/oats/EN/OAT-021_Denial_of_Inventory (anchor: "OWASP's catalog of automated threats")
- The RealReal, Terms of Service (last updated May 1, 2023): https://www.therealreal.com/terms (anchor: "The RealReal's terms of service")
- DataDome, "How 'Buy For Me' AI Agents Are Locking Up Inventory," updated May 18 2026 (secondary): https://datadome.co/agent-trust-management/how-buy-for-me-ai-agents-are-locking-up-inventory/ (anchor: "bot-defense vendors were warning in the spring")

---

## EDITOR'S NOTES ON EXISTING ARTICLES

**None required.** Neither the Ask TRR article nor the Meta Muse article states anything this reporting contradicts. The Ask TRR article covers The RealReal's own discovery agent and makes no claim about outside agents. The Muse article's merchant-acceptance section cites Amazon and Target; adding The RealReal there later would be an optional enrichment, not a correction.

## AI COMMERCE 2027 RECOMMENDATION

**One tracker row. No text change.**

- **Date:** 2026-10-26
- **Org:** The RealReal
- **Development:** Tightened bot defenses so outside agents find it much harder to log in, add to cart and check out, while they can still surface listings, after a reported Muse test repeatedly renewed 20-minute cart holds on one-of-one items without a purchase
- **Affects:** Trust
- **Evidence type:** Company statement reported by The Verge
- **Changed:** A retailer separated discovery from cart and checkout permissions for outside agents, and the trigger was a reservation, not a purchase
- **href:** /blog/realreal-meta-muse-ai-agent-inventory-holds (on publication)

Shift 05's existing text already frames merchant permission as enforcement; this is supporting evidence, not a change of view. The Shift 09 language on governing software that acts is consistent with the pre-checkout point.

## RESEARCH NOTES FOR THE EDITOR

1. **Experiment (PASS).** The Verge, Oct 22: the reporter instructed Muse "to bulk-add all 10 of the newest listings from a favorite brand to my cart," then "prompted Muse to keep re-adding the items to my shopping bag each time the 20-minute hold had expired." She had "no intention of buying."
2. **10 listings (PASS).** As above.
3. **20-minute hold (PASS, reporting).** Both Verge stories state it. I found no official RealReal help page; third-party guides describe the same 20-minute "on hold" timer.
4. **Automatic re-adding (PASS, with nuance).** Muse performed the re-adding over time, but on the reporter's explicit instruction. The draft says "instructing" and does not suggest Muse chose to hoard.
5. **Duration (PASS).** Oct 22: "all day (I eventually ended the task)." Oct 26: "for hours or longer." The draft says "all day" in the narrative and "for hours" in the meta description and findings.
6. **Purchase (PASS: none).** None attempted or completed.
7. **Policy violation (UNRESOLVED, stated as such).** The RealReal's 2023 terms prohibit "robots," any use that "could interfere with, disrupt, negatively affect or inhibit other Users," and third-party applications without prior written consent. The company did not invoke them, and its CTO said it would "remain open to third-party AI agents, allowing them to browse, log in and interact." No Meta policy addressed it; the spokesperson's "ethical browsing principles" statement concerns actions a human could not do.
8. **Characterization (PASS).** "Exploit" and "attack" avoided. OWASP's established category is Denial of Inventory (OAT-021); the draft uses it to name the pattern, and "reservation loophole" for this case.
9. **What changed (PASS).** Friang, Oct 26: bot defenses make it "much more difficult for all agents to log in, add items to cart, and check out."
10. **Still allowed (PASS).** Agents can "surface listings" and "direct Muse users to product pages."
11. **Not a full block (PASS).** Particular actions made harder for all agents; discovery stays open. The draft does not say The RealReal blocked agents.
12. **Meta safeguards (PASS).** Launch post: Muse asks before making a purchase. Stripe: approval of the total for every purchase. Spokesperson to The Verge (Oct 22): "Muse is designed to always ask permission before buying, and it applies ethical browsing principles when asked to do things that a human could not, like buying all the tickets to an event." Safety post: Sentinel allows, denies or asks per user policy, with standing permission grants. Meta did not comment for the Oct 26 story.
13. **Ask TRR versus Muse (PASS).** Ask TRR is The RealReal's own agent on Gemini Enterprise (Google Cloud, Oct 8), searching its own catalog; Muse is a third-party agent.
14. **One-of-one (PASS).** Supported by The RealReal's own framing (corpus article).
15. **Walmart (PASS).** Terms 16.L let Walmart limit items, value, quantity and frequency of agent purchases and require agents to respect rate limits. Nothing addresses cart holds. The draft says so.
16. **SERP.** No result for The RealReal, Muse and cart holds beyond The Verge. Security-vendor content covers denial of inventory and AI agents generally (DataDome, May 2026; OWASP). No result connects the case to a permission model.
17. **Corpus advance (PASS).** The Muse article covers demand and merchant acceptance at the door; this covers authority before checkout, with a documented case and a five-permission split.
18. **Standalone (PASS).** The question is new enough that an update to the Muse article would bury it.

**Secondary-source error noted, not used:** The Verge's Oct 26 story says "10 million people in the US had downloaded the app in 40 days." Meta's call said more than 10 million people in the US and Canada set up Muse in about six weeks.

**Avoided claims:** purchase; theft; illegality; full block; reproducibility by every agent; Meta intent; Walmart preventing it; payment approval being unimportant; uniform consequence of add-to-cart; widespread harm; disclosed financial impact; "first."

**Unresolved factual limitations:** no official RealReal documentation of the 20-minute hold; whether the behavior breached The RealReal's terms; how The RealReal's new defenses identify agents, and whether identified agents get different treatment; whether Muse has any limit on repeated cart actions; how many items or shoppers were affected; Meta's response.

**Key findings and the 1.52 rule:** Release 1.52 excluded thesis pieces from the Key findings box. The brief asks for findings; they are provided above for the Board to decide whether to apply them.
