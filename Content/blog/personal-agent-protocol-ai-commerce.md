# Personal Agent Protocol

**Status:** DRAFT ONLY. Nothing published, committed, pushed, written to Supabase, added to the sitemap, or generated as an asset.
**Type:** Authority / thesis article with search-reference value
**Assignment:** TRH Editorial Board, 2026-10-07
**Gates:** Research PASS, Editorial PASS, SEO/GEO PASS. Final: WRITE.
**Editorial Board (2026-10-07):** PUBLISH with two edits, both applied: the Muse/Amazon passage states a shared problem, not product causality (heading softened too); Sierra's partner list is authoritative and the NiCE/Decagon discrepancy is kept out of the body. Protected: the announced-not-published status, payments as a future extension, the two-grants-one-session section, and the H1. AI Commerce 2027: update Shift 07 only when v0.1 publishes.

---

## SEO PACKAGE

- **title (editorial H1):** Personal Agent Protocol: How AI Agents Get Permission to Act for Customers
- **meta_title:** Personal Agent Protocol: What Ecommerce Brands Need to Know
- **slug:** personal-agent-protocol-ai-commerce
- **category:** Digital Transformation
- **meta_description:** Meta and Sierra announced Personal Agent Protocol, an open standard for how personal AI agents act for customers. How it works, what is not live yet, and how it differs from UCP.

---

## DRAFT BODY

### Personal Agent Protocol: How AI Agents Get Permission to Act for Customers

On October 6, Sierra and Meta announced Personal Agent Protocol, an open standard for how personal AI agents work with businesses on a customer's behalf.

Start with its status, because early coverage has already blurred it. Personal Agent Protocol has been announced. Its specification has not been published. Sierra says it plans to publish v0.1 later in October, along with design workshops and a reference implementation. Anything written today, including this, describes a design, not a deployed standard.

### What Personal Agent Protocol is

Sierra describes it as "an open standard Meta and Sierra are developing along with industry partners at Genesys, Instinct, Rocket, Shopify, Stripe, and Walmart that defines how personal agents interact with businesses." The announcement was written by Sierra's co-founders, Bret Taylor and Clay Bavor, and says the protocol is "open for anyone to implement."

OpenAI, Anthropic, Amazon and Google are not among the named partners.

Partnership is also not deployment. None of these companies has said it is running the protocol in production, and there is nothing yet to run.

### How it works

Sierra's announcement describes the flow in a few steps.

A personal agent starts on the company's website, where it discovers what the company offers and how to reach it. It then begins a session on its user's behalf. That session can start as a guest, which Sierra says may be enough to check product availability or ask about a returns policy.

When a task needs the customer's account, the customer signs in on the company's page or uses credentials already set up with their agent. Sierra is explicit about who decides what happens next: "The customer is always in control, deciding whether the agent has read-only or write access."

The session is built on OAuth, the established standard for authorizing access, and it carries across channels, so a question asked before sign-in and an order change made afterward belong to the same visit.

From there the agent works through whichever route the company chooses: the company's regular web pages, its APIs, which Sierra says can be built on standards such as MCP and OpenAPI, or the company's own agent, for tasks that need conversation, such as a warranty claim.

### Two grants, one session

The sentence in the announcement that matters most for retailers is this one: "consumers decide what access to give their personal agents, and companies set parameters for what those agents can do."

That is two separate permissions. The customer authorizes the agent. The business independently decides what it will accept from that agent. Neither grant implies the other.

This progresses a question I have been tracking. In September I wrote that [AI visibility is becoming a permission stack](/blog/ai-visibility-permission-stack-cloudflare), where Cloudflare let sites set different rules for search crawlers, training crawlers and user-directed agents. Those were category rules: should this kind of bot get in at all. Personal Agent Protocol proposes something narrower and more useful for commerce. A specific customer's agent arrives, the customer says what it may do, and the company says what it will allow.

It helps to separate four questions a retailer now faces. Can the software reach us at all, which is what crawler and bot controls handle. Who is it acting for. What has that customer allowed it to do. And what will we allow it to do. Personal Agent Protocol is aimed at the last three, joined in one session.

It also answers, at least on paper, a gap I noted in AI Commerce 2027. Consumer authorization and merchant authorization were being built by different parties on different timelines. This is the first proposal I have seen that puts both inside the same session.

### The problem Amazon raised with Muse

Meta co-develops this protocol, and Meta's personal agent, Muse, has already run into the problem it addresses. In September, Amazon blocked Muse from shopping on Amazon.com. According to GeekWire, Amazon's spokesperson said such applications "should operate openly and respect service provider decisions about whether or not to participate."

Personal Agent Protocol's design addresses the same problem Amazon raised when it blocked Muse: agents need to identify themselves and operate within permissions the business accepts. Amazon is not a named partner, and nothing here says it will join.

### What Personal Agent Protocol is not

The protocol sits next to several standards that are easy to confuse with it.

**Not a payment protocol.** Payments are listed as a future extension. Sierra says payments extensions "could let a personal agent complete a purchase without sharing credit card information." That is a plan, not part of the announced design. More detailed per-action permissions are described the same way, as something that could come later.

**Not UCP.** The [Universal Commerce Protocol](/blog/amazon-joins-universal-commerce-protocol) standardizes commerce actions such as catalog, cart, checkout and orders. Personal Agent Protocol is about the session around any customer task, including service work such as order changes and warranty claims. Shopify supports both. Sierra has not said how the two will relate.

**Not MCP.** MCP is one of the ways a company can expose its APIs, and Sierra names it as a route the agent can use. It does not replace MCP.

**Not Know Your Agent.** The [Know Your Agent work](/blog/visa-mastercard-know-your-agent-interoperability) among card networks is about verifying and certifying agents across payment ecosystems. Personal Agent Protocol is about one customer, one agent and one business agreeing on a session.

**Not an obligation to allow everything.** A company supporting the protocol still sets the parameters. Supporting it would mean recognizing agents acting for customers, not accepting every action they request.

### What ecommerce operators should do now

Nothing here requires engineering work yet. It does require decisions that most companies have not made.

Decide which customer actions an agent could perform with read-only access, and which would require write access. Order status and returns policy questions are one category. Changing an address or placing an order is another.

Decide which route you would expose. Your website already exists. Your APIs may not be ready for outside agents, and you may not want them to be. A company agent may be the safest place for anything that needs judgment.

Then read v0.1 when it arrives, and pay attention to who adopts it. A protocol is only as useful as the agents and businesses on both ends.

When a customer's agent knocks, will your business recognize it, and have you decided what it is allowed to do?

---
