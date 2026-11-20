import { createClient } from '@supabase/supabase-js'
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const envFile = readFileSync(join(__dirname, '..', '.env.local'), 'utf-8')
const envVars = {}
envFile.split('\n').forEach(line => {
  const match = line.match(/^([^#=]+)=(.*)$/)
  if (match) envVars[match[1].trim()] = match[2].trim()
})

const supabase = createClient(
  envVars.NEXT_PUBLIC_SUPABASE_URL,
  envVars.SUPABASE_SERVICE_ROLE_KEY
)

const DESCRIPTION = 'Target says Ask Target shoppers move to purchase at about twice the rate seen elsewhere. What that beta result shows, and what incrementality would require.'

const EXT = 'target="_blank" rel="noopener noreferrer"'

const post = {
  slug: "target-ask-target-ai-shopping-assistant-purchase-rate",
  // Editorial H1 (renders on page, and as JSON-LD headline)
  title: 'Target Says Ask Target Shoppers Move to Purchase at Twice the Rate. That Is Not Yet Incrementality',
  // Query-aligned search title (drives <title>, OG and Twitter). Deliberate split.
  meta_title: "Ask Target: Does Target's AI Shopping Assistant Increase Purchases?",
  excerpt: "Target's CEO says Ask Target shoppers move to purchase at about twice the rate seen elsewhere. That is a real signal inside the purchase funnel, and not yet proof the assistant caused it.",
  meta_description: DESCRIPTION,
  og_image: '/images/blog/target-ask-target-ai-shopping-assistant-purchase-rate.svg',
  category: "E-commerce Strategy",
  tags: ["Target", "Ask Target", "AI shopping assistant", "incrementality", "AI commerce measurement", "agentic commerce", "conversion"],
  status: 'published',
  featured: false,
  read_time_minutes: 5,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: false,
    related_posts: ["bcg-geo-revenue-growth-evidence", "niq-similarweb-agentic-commerce-measurement", "walmart-agent-gateway-agent-profiles"],
    featured_image_alt: "Pull quote from Robert Hu on Ask Target: Neither tells you what the assistant was worth.",
  },
  published_at: new Date().toISOString(),
  content: `<p>On November 18, an analyst on Target's <a href="https://corporate.target.com/getmedia/8c71e165-b8e8-467d-a143-4e353e9e842d/TGT-USQ_Transcript_2026-11-18.pdf" ${EXT}>third quarter earnings call</a> asked how the company is positioned for agentic commerce. CEO Michael Fiddelke answered partly with Ask Target, the AI shopping assistant Target put into beta on October 21. He said guests "move to purchase at about twice the rate" through the assistant, compared with what Target sees elsewhere.</p>

<p>That sentence is easy to compress into "AI doubled Target's conversion rate." Target did not say that, and the evidence does not show it. What the result does show is more useful for operators: a retailer is now reporting its own assistant in terms of shopper behavior inside the purchase funnel. The next question is whether the assistant changed that behavior or attracted shoppers who were already going to buy.</p>

<h2>What Ask Target is</h2>

<p><a href="https://corporate.target.com/press/release/2026/10/target-makes-it-easier-for-guests-to-discover-stylish-holiday-gifts-they-can-t-wait-to-give" ${EXT}>Target's October 21 holiday release</a> describes Ask Target as an AI-powered shopping assistant in beta on Target.com and the Target app, built to help guests find inspiration and narrow their choices. Fiddelke repeated on the call that it is still in beta. I could not find a Target statement on when the beta ends or whether every shopper sees it.</p>

<p>Nothing I found from Target describes Ask Target adding items to a cart or completing checkout for a shopper. It is a discovery and decision tool inside Target's own store, not an autonomous buyer.</p>

<p>It is also separate from Target's presence on outside AI platforms. <a href="https://corporate.target.com/press/fact-sheets/2026/06/conversational-ai" ${EXT}>A Target fact sheet updated June 18</a> describes shopping integrations with ChatGPT, Google AI Mode and the Gemini app, and Microsoft Copilot. On the call, Fiddelke said Target is still early in agentic commerce and volumes are not high yet, and named ChatGPT, Gemini and Copilot among its partners. The twice-the-rate figure applies to Ask Target, not to them.</p>

<h2>What Target actually disclosed</h2>

<p>The precise wording matters, so here it is in parts.</p>

<ul>
<li><strong>The metric is "move to purchase."</strong> Fiddelke did not say conversion rate or purchase rate. Moving to purchase could mean completed orders, or progress toward one, such as adding to cart.</li>
<li><strong>The comparison is "elsewhere."</strong> It is not defined. It could mean other shoppers, other sessions, other parts of the site or other tools.</li>
<li><strong>The unit is not stated.</strong> The result could be counted by guest, visit, session or conversation.</li>
<li><strong>No period, sample size or significance was given.</strong> The public beta was four weeks old when he spoke.</li>
<li><strong>No adjustment for intent was described,</strong> and Target did not present the result as causal. Fiddelke called it a tangible example of AI improving the guest experience.</li>
</ul>

<p><a href="https://www.sec.gov/Archives/edgar/data/0000027419/000002741926000051/a2026q3ex-99.htm" ${EXT}>The earnings release</a> does not mention Ask Target. Nor did Target disclose effects on basket size or order value, margin, returns, satisfaction or repeat use.</p>

<h2>Why twice the rate is not yet incrementality</h2>

<p>A shopper who opens an assistant on a retailer's site is already on that site, already shopping, and often asking about something specific. People who ask questions may be closer to buying than people who browse. Comparing assistant users with everyone else mixes two things: what the assistant does, and who chooses to use it.</p>

<p>The doubling could come mostly from the assistant, mostly from that selection, or from any mix of the two. There is a third possibility. Some purchases credited to the assistant may simply have moved from search to conversation, so the assistant records demand that existed anyway.</p>

<p>Target is not the first retailer to report this kind of figure. <a href="https://www.aboutamazon.com/news/company-news/amazon-earnings-q3-2025-report" ${EXT}>Amazon said in October 2025</a> that shoppers using Rufus during a shopping trip were 60% more likely to complete a purchase. Amazon went further than Target, describing the assistant as on track for more than $10 billion in incremental annualized sales, without publishing how incremental was measured. Target made the smaller claim, and the more defensible one.</p>

<h2>A measurement ladder for AI shopping assistants</h2>

<p>When I looked at <a href="/blog/bcg-geo-revenue-growth-evidence">BCG's GEO revenue range</a>, I separated visibility, traffic and commercial outcome. An assistant that lives inside the store needs finer steps, because the shopper has already arrived.</p>

<div class="table-wrapper">
<table>
<thead><tr><th>Rung</th><th>The question</th><th>What Target has disclosed</th></tr></thead>
<tbody>
<tr><td>Traffic</td><td>Did AI send a visitor?</td><td>Target says agentic commerce volumes are not high yet, without defining the measure</td></tr>
<tr><td>Engagement</td><td>Did shoppers use the assistant?</td><td>No usage figures</td></tr>
<tr><td>Assisted purchase rate</td><td>Did users move to purchase more often?</td><td>About twice the rate seen elsewhere</td></tr>
<tr><td>Incrementality</td><td>Did the assistant cause purchases that would not otherwise have happened?</td><td>Not claimed</td></tr>
<tr><td>Economics</td><td>Did the added contribution exceed the cost of running it?</td><td>Not disclosed</td></tr>
</tbody>
</table>
</div>

<p>Target's disclosure sits on the third rung. That is progress. Traffic tells you an AI surface sent someone. An assisted purchase rate tells you something about behavior after the assistant was involved. Neither tells you what the assistant was worth.</p>

<h2>The advantage of owning the assistant</h2>

<p>A retailer-owned assistant has a measurement advantage that outside platforms do not offer. Target can see the question, the products the assistant showed, the cart and the order inside one system. On outside AI platforms, as I wrote about <a href="/blog/niq-similarweb-agentic-commerce-measurement">the agentic commerce measurement problem</a>, the platform holds the conversation and the merchant mostly sees what happens after the handoff.</p>

<p>That should give Target the data needed to run an incrementality experiment, although the company has not disclosed whether it has done so. The cleanest design is a holdout:</p>

<ul>
<li>Randomly withhold the assistant's entry point from a share of eligible shoppers.</li>
<li>Compare everyone offered the assistant with everyone held out, whether or not they used it, so self-selection cancels out.</li>
<li>Measure purchase rate, order value, margin, returns and repeat purchase, not just the first step.</li>
<li>Subtract model, catalog and staffing costs before calling the result positive.</li>
</ul>

<p>Where randomization is impractical, comparing users with non-users who showed the same prior intent, such as the same search or category, is a weaker but honest substitute.</p>

<p>The same logic may be part of why Walmart routes outside agents through its own assistant. <a href="/blog/walmart-agent-gateway-agent-profiles">Walmart's Agent Gateway</a>, an invitation-only beta, connects them through Sparky. Whatever else that does, it keeps the conversation and the order in one place the retailer can measure.</p>

<h2>What this result can and cannot support</h2>

<p>This is one retailer, one early beta and one sentence on an earnings call. It does not show that Ask Target raised Target's overall conversion, created revenue, or that retailer-owned assistants outperform outside agents. It is consistent with all of those and proves none of them.</p>

<p>What it does show is where the evidence is moving. In <a href="/ai-commerce-2027#measurement-split">AI Commerce 2027</a>, I argued that AI-attributed orders describe where a sale completed, not proof that AI created the demand. Target's figure is a good test of that rule. It is a real behavioral signal, measured where the retailer can see the whole journey, and it stops short of the question finance will ask.</p>

<p>Retailers that own the assistant also own the ability to answer that question. The ones that publish a holdout result, rather than a user comparison, will give the category its first real benchmark.</p>

<p>If your assistant disappeared for a random tenth of your shoppers next week, would you know what it was worth?</p>
`,
}

const { data: existing } = await supabase.from('blog_posts').select('id').eq('slug', post.slug)
if (existing && existing.length) { console.error('Slug already exists, not inserting'); process.exit(1) }

const { data, error } = await supabase.from('blog_posts').insert(post).select('id, slug').single()
if (error) { console.error('Insert failed:', error); process.exit(1) }
console.log('Post inserted successfully:', data.id)
console.log('URL: https://theroberthu.com/blog/' + data.slug)
