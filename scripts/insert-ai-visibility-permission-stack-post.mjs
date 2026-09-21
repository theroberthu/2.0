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

const DESCRIPTION = 'Cloudflare split crawler control into search, training and agents. AI visibility is turning into a permission decision, not a yes-or-no crawler setting.'

// Primary sources: Cloudflare's announcement and Google's own crawler documentation.
const SRC_CF = 'https://blog.cloudflare.com/accountable-mixed-use-ai-crawlers/'
const SRC_GOOGLE = 'https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers'
const EXT = 'target="_blank" rel="noopener noreferrer"'

const post = {
  slug: 'ai-visibility-permission-stack-cloudflare',
  // Editorial H1 (renders on page, and as JSON-LD headline)
  title: 'AI Visibility Is Becoming a Permission Stack',
  // Query-aligned search title (drives <title>, OG and Twitter). Deliberate split.
  meta_title: 'Cloudflare Disallow AI Training: Search, Training, Agents',
  excerpt: "Cloudflare now separates search, training and agent crawling, so a site can refuse AI training while staying indexed. AI visibility is becoming a question of what a business permits, not just what machines can read.",
  meta_description: DESCRIPTION,
  og_image: '/images/blog/ai-visibility-permission-stack-cloudflare.svg',
  category: 'GEO & SEO',
  tags: ['AI visibility', 'crawlers', 'GEO', 'AI training', 'Cloudflare', 'permissions'],
  status: 'published',
  featured: false,
  read_time_minutes: 6,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: false,
    related_posts: ['google-search-console-generative-ai-visibility', 'adobe-ai-traffic-393-percent-retail', 'product-data-shared-infrastructure-google-ai-mode'],
    featured_image_alt: 'Four separate permissions layered over one web page: search indexing, model training, AI summaries and agent access, each granted or withheld independently',
  },
  published_at: new Date().toISOString(),
  content: `<p>For two years the question was binary. Can AI systems read my site. Blocking the crawler meant disappearing from search, so almost nobody did, and the question stopped there.</p>

<p><a href="${SRC_CF}" ${EXT}>On September 15, Cloudflare took that question apart</a>.</p>

<h2>What actually changed</h2>

<p>Cloudflare now classifies crawler behavior into three controls: Search, crawling to build a search index; Training, crawling to train or fine-tune a model; and Agent, user-directed agents visiting a page on behalf of a person.</p>

<p>The problem it fixed was the mixed-use crawler, one crawler doing both search and training. Refuse one and you refused the other. A new Disallow AI Training setting publishes a no-training preference in robots.txt while leaving qualifying mixed-use crawlers free to keep crawling for search.</p>

<p>Qualifying means what Cloudflare calls Accountable: the operator must offer opt-outs from AI training and AI summaries, give URL-level visibility into which pages were made available for training, and assure that opting out of training will not affect search results. Cloudflare says Apple, Google and Microsoft meet those requirements or have committed to timelines for the rest. It also calls the relevant Amazon, Anthropic, Meta and OpenAI crawlers Accountable, since those companies run separate search and training crawlers, so the training one can be blocked without touching search.</p>

<p>Two numbers frame the whole thing. Fewer than 1% of Cloudflare sites choose to block search bots. Seventeen percent use some mechanism to block training. Almost nobody refuses discovery; a meaningful minority already refuses one use of what gets discovered.</p>

<h2>The part worth checking yourself</h2>

<p>That claim is worth checking at the source rather than taking from a vendor.</p>

<p><a href="${SRC_GOOGLE}" ${EXT}>Google's own crawler documentation</a> says Google-Extended manages whether crawled content may be used for training future Gemini models and for grounding in Gemini Apps and Grounding with Google Search on Vertex AI. It then says plainly that Google-Extended "does not impact a site's inclusion in Google Search nor is it used as a ranking signal in Google Search."</p>

<p>Worth reading precisely. That token's stated scope is Gemini apps and Vertex grounding, not generative features inside Search itself, and Cloudflare notes Google offers a separate webmaster-portal toggle for generative search results. Anyone assuming Google-Extended pulls them out of AI Overviews is assuming something Google's documentation does not say.</p>

<p>On Cloudflare's account, Microsoft is further back. Cloudflare says Bing currently expresses training preferences through the NOARCHIVE meta tag, that Microsoft is building support for a no-training preference in robots.txt targeted for early 2027, and that until then selecting Disallow AI Training does not convey that preference to Bing. I found no current Microsoft documentation saying this in Microsoft's words, so treat it as Cloudflare's description.</p>

<h2>Four permissions, four different levels of maturity</h2>

<p>Search controls are old and universally understood. Training controls just became usable without sacrificing search, at least for the operators Cloudflare certifies. Summaries are earlier: an opt-out is an Accountable requirement, and Cloudflare says its goal is to let owners control how much content is included, set in one place, by early next year. Agents are earliest. Cloudflare ships no Disallow setting for agents, because the Internet "does not yet have a well-established directive for expressing Disallow preferences to agents," pending standards like ai-prefs.</p>

<p>So four permissions exist as concepts. Search and training have clearer mechanisms today, while summary-specific and agent-specific controls remain fragmented and less standardized. The permission stack is more mature as a business concept than as a control panel.</p>

<h2>Where this sits in the AI visibility picture</h2>

<p>I have written about <a href="/geo">retrievability</a>, whether an AI system can find and understand your product, about <a href="/aeo">agent evaluation and purchase</a>, and about <a href="/blog/google-search-console-generative-ai-visibility">what Search Console's generative AI report can and cannot tell you</a>.</p>

<p>Permission is the piece between them. Machine-readable does not automatically mean machine-authorized. A system may technically be able to retrieve a page while the business grants different rights for search, training, summaries or agent activity. That is an operating and technical distinction rather than a legal one, and a preference published to a crawler is a request that cooperating operators honor, not a right that enforces itself.</p>

<p>So AI visibility now involves three separate questions, and they have different owners. Can the system technically retrieve the content. What uses does the business permit. And can the business measure the economic value of what results. Retrievability, permission and measurement is a more honest description of the operating model than any one of them alone. Permission stack is my shorthand for the middle question, not anyone's product name or industry terminology.</p>

<h2>The commerce question Cloudflare raises and does not settle</h2>

<p>Cloudflare is explicit that the right answer depends on the business model. Its onboarding presets differ for ad-monetized sites, on the logic that ad revenue needs a human to see the page. A publisher funded by advertising may optimize for audience volume, it argues, while a retailer may prefer fewer visitors who are likelier to buy.</p>

<p>It supports that with figures: more than half of consumers read summaries in Search and are over 40% more likely to end their search afterward, while consumers referred by AI search convert at three to five times the rate of traditional search referrals. Cloudflare publishes no source or methodology for either number, and the second sits awkwardly beside <a href="/blog/adobe-ai-traffic-393-percent-retail">Adobe's finding that AI-referred shoppers convert 42% better</a>. Three to five times is a different claim from 42%, and I cannot say which is right. Neither discloses enough to reconcile them: merchant populations, how AI-referred traffic is defined, attribution windows, which AI sources count, journey stage and what counts as lift could each differ. The conclusion is not that one party is wrong. It is that no stable cross-platform benchmark exists yet for the commercial value of AI-referred traffic, which matters because that value is what a permission decision is supposed to weigh.</p>

<p>The policy point survives the uncertainty. Access policy should follow the economics of the interaction rather than a reflexive block-everything or allow-everything position. Nothing here says every retailer should allow summaries and agents, or that any should block them.</p>

<h2>What this asks of operators</h2>

<p>These are business decisions wearing technical clothing. Search discoverability is settled for almost everyone. Whether your content trains somebody's model, whether it can be summarized in place of a visit, and whether agents may fetch it are open, and they belong with whoever owns the economics of the site rather than defaulting to whoever administers the DNS.</p>

<h2>The objections</h2>

<p>Most merchants benefit from maximum discovery and may never need any of this. Restricting access today could cost visibility in systems that matter more later, a risk nobody can price.</p>

<p>Declarations also depend on compliance. Cloudflare can identify and block crawlers on its own network, but a published preference is a request. Accountable is Cloudflare's designation, not an industry standard, and Cloudflare defines, certifies and reports on it.</p>

<p>The hardest part is measurement. Deciding whether summaries or agent access are worth their cost means attributing outcomes to each permission separately, which almost nobody can do today.</p>

<p>If you had to write your company's policy on training, summaries and agent access this quarter, who in your organization would actually own that decision?</p>
`,
}

const { data: existing } = await supabase
  .from('blog_posts')
  .select('id, slug')
  .eq('slug', post.slug)
  .maybeSingle()

if (existing) {
  const { error } = await supabase.from('blog_posts').update(post).eq('id', existing.id)
  if (error) { console.error('Update failed:', error); process.exit(1) }
  console.log('Post updated successfully:', existing.id)
} else {
  const { data, error } = await supabase.from('blog_posts').insert(post).select('id').single()
  if (error) { console.error('Insert failed:', error); process.exit(1) }
  console.log('Post inserted successfully:', data.id)
}
console.log('URL: https://theroberthu.com/blog/' + post.slug)
