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

const DESCRIPTION = "Etsy says sellers retain ownership while its new terms permit AI training on their content. The real marketplace question is who controls permission."

const post = {
  slug: "etsy-ai-terms-seller-content-training",
  // Editorial H1 (renders on page, and as JSON-LD headline)
  title: "Etsy's New AI Terms Show Why Ownership Is Not Enough",
  // Query-aligned search title (drives <title>, OG and Twitter). Deliberate split.
  meta_title: "Etsy AI Terms: Why Seller Ownership Is Not Enough",
  excerpt: "Etsy's Terms of Use have long given the marketplace a broad license to what sellers post. The version taking effect December 16, 2026 keeps that license and adds something the current terms do not contain: an explicit AI clause.",
  meta_description: DESCRIPTION,
  og_image: '/images/blog/etsy-ai-terms-seller-content-training.svg',
  category: "E-commerce Strategy",
  tags: ["Etsy", "AI training", "seller content", "terms of use", "marketplace governance", "AI permissions"],
  status: 'published',
  featured: false,
  read_time_minutes: 5,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: false,
    related_posts: ["ai-visibility-permission-stack-cloudflare", "walmart-agent-gateway-agent-profiles", "openai-business-hub-chatgpt-business-agents"],
    featured_image_alt: "Pull quote from Robert Hu on Etsy's AI terms: On Etsy, ownership is not permission.",
  },
  published_at: new Date().toISOString(),
  content: `
<p>Etsy's Terms of Use have long given the marketplace a broad license to what sellers post. It is worldwide, royalty-free, perpetual, irrevocable and sublicensable, and it covers reproducing, editing and preparing derivative works. The version taking effect December 16, 2026 keeps that license and adds something <a href="https://www.etsy.com/legal/policy/terms-of-use-effective-through-december/1511358430874" target="_blank" rel="noopener noreferrer">the current terms</a> do not contain: an explicit AI clause. Etsy and its partners and vendors may use seller content to develop, train, test and improve artificial intelligence and machine learning technologies.</p>

<p>Etsy claims no ownership of that content, and it says so plainly. But ownership was never the open question. The license already reached far. What changed is that one use is now named inside it, and naming it raised the questions ownership cannot answer: who may use the work, for what, with whom, for how long, and with what right to refuse.</p>

<h2>What the November 23 revision clarified</h2>

<p><a href="https://web.archive.org/web/20261120213413/https://www.etsy.com/legal/terms-of-use" target="_blank" rel="noopener noreferrer">The October wording</a> gave Etsy and its "third party partners and vendors" the AI permission "including to improve the Services and/or help keep them safe." After seller objections, Etsy <a href="https://community.etsy.com/forum/announcements-290/topic/updated-nov-23-our-recent-terms-of-use-update-192097/" target="_blank" rel="noopener noreferrer">revised it on November 23</a>, and the revised text is now on <a href="https://www.etsy.com/legal/terms-of-use" target="_blank" rel="noopener noreferrer">its Terms page</a>.</p>

<p>The new clause lists purposes: helping buyers find items, giving sellers tools, customer support, promoting items and Etsy, and protecting the community, including detecting fraud. It adds a written limit: "We won't use Your Content to train AI models designed to replace your creativity or to create copycat versions of the items you sell on Etsy." And it says that when Etsy works with partners and vendors that provide or train AI models, its purpose is to support sellers and "not to enable them to imitate your items."</p>

<p>The revision keeps the existing license but adds examples of permitted uses and a specific training restriction. Etsy says it won't use seller content to train models designed to replace sellers' creativity or make copies of their items. It separately explains why it works with AI vendors, without publishing those vendors' contract terms.</p>

<h2>What the terms say, and what they do not disclose</h2>

<p>Several things remain undisclosed. The purposes follow the words "for example," so they illustrate rather than define the scope. The copycat limit concerns design. I could not find language about model outputs, and a model not designed to imitate is not the same as a model that cannot produce similar work. The documents reviewed name no AI vendors and do not describe what vendor contracts allow. And I could not find a mechanism for a seller to refuse a particular use of content or check how one is carried out.</p>

<h2>Personal data rights are not content permissions</h2>

<p>Two different documents govern two different things. The Terms license the content itself. The Privacy Policy governs personal information, including personal information inside that content.</p>

<p>Etsy's <a href="https://storage.googleapis.com/etsy-extfiles-prod/2026%20Privacy%20Policy_v2/Privacy%20Policy%202026_US.pdf" target="_blank" rel="noopener noreferrer">Privacy Policy published October 26, 2026 and effective December 16, 2026</a> lists training AI models on listing information, product reviews and community posts among the uses it bases on legitimate interests. People in the EEA, the UK and other countries may object to processing on that basis, and Etsy may continue where it has compelling legitimate grounds. The <a href="https://www.etsy.com/legal/policy/united-states-regional-privacy-policy/1146293244010" target="_blank" rel="noopener noreferrer">US Regional Privacy Policy</a>'s opt-outs cover targeted advertising, sales of personal data and certain profiling. Those are personal data rights, and they depend on where a seller lives.</p>

<p>The October clause referred to "any applicable opt-out rights described in our Privacy Policy." The November clause points to the Privacy Policy for "the choices available to you" about personal information. No general opt-out from training on seller content was found in the published policies reviewed. Using Etsy after December 16 counts as accepting the terms; the alternative they offer is closing the account.</p>

<h2>Three tiers, one gatekeeper</h2>

<p>Sellers may sell AI-generated art if they play a clear creative role and disclose it. Under <a href="https://www.etsy.com/seller-handbook/article/1522733284810" target="_blank" rel="noopener noreferrer">rules updated October 22</a>, they may not post bot-generated listings or AI-generated patterns, recipes and instructions, and most listings need one unedited photo of the item.</p>

<p>Etsy and its partners and vendors may train on seller content for the purposes above.</p>

<p>Everyone else may not. The new terms bar using Etsy content for "developing, training, fine-tuning, evaluating, benchmarking, testing, prompting, distilling" any AI system without Etsy's express permission.</p>

<p>This is not hypocrisy. An operator that catches fraud, ranks listings and polices misleading images needs rights a scraper does not. But Etsy controls whether outsiders may use content obtained from its marketplace for AI training, which is why its own permission most needs precise definition.</p>

<h2>One listing photo, six questions</h2>

<p>Take a single photo of a hand-glazed mug. Under the December terms, it could help search match the mug to a buyer, help train a model that detects fraudulent listings, feed a listing tool, or appear through an advertising partner. Those are different uses with different risks to the person who made the mug, held in one sentence: "develop, train, test and improve." A permission model separates them.</p>

<div class="table-wrapper">
<table>
<thead><tr><th>Question</th><th>What Etsy's terms say</th><th>What the seller still cannot tell</th></tr></thead>
<tbody>
<tr><td>Purpose</td><td>Five purposes, introduced by "for example"</td><td>Which uses this photo serves, and what else qualifies</td></tr>
<tr><td>Content</td><td>All Your Content, photos included</td><td>Whether the photo is used alone or with its description and reviews</td></tr>
<tr><td>Model</td><td>Not models designed to replace or copy sellers</td><td>What a model trained on it can produce</td></tr>
<tr><td>Partner</td><td>Partners and vendors, unnamed; Etsy states its purpose</td><td>Which vendors receive the photo, under what contract</td></tr>
<tr><td>Duration</td><td>Perpetual, irrevocable license</td><td>How long training copies are kept</td></tr>
<tr><td>Control</td><td>Personal data rights where law provides them</td><td>How to refuse a use or verify one</td></tr>
</tbody>
</table>
</div>

<p>The same separation shaped <a href="/blog/ai-visibility-permission-stack-cloudflare">crawler permissions</a>, where search and training became separate grants, and <a href="/blog/walmart-agent-gateway-agent-profiles">Walmart's Agent Profiles</a>, where an agent gets limited, revocable authority. <a href="/blog/openai-business-hub-chatgpt-business-agents">Participation is not influence</a> on OpenAI's Business Hub. Identity is not authorization in <a href="/ai-commerce-2027">AI Commerce 2027</a>. On Etsy, ownership is not permission.</p>

<h2>Reaction as a signal about clarity</h2>

<p>Some sellers have left. The illustrator Aaron Millard, for example, <a href="https://www.inc.com/danielle-forte/etsy-new-ai-terms-sellers-leaving-small-business-saturday/91440409" target="_blank" rel="noopener noreferrer">moved his card business to his own website</a>, and <a href="https://www.nytimes.com/2026/11/20/arts/etsy-ai-policy.html" target="_blank" rel="noopener noreferrer">The New York Times reported</a> other longtime shops closing. These are examples, not a measure of Etsy's seller base, and they are evidence of how the terms were read rather than of what the terms permit. When careful readers cannot tell what a clause allows, that is still information about the clause.</p>

<h2>What would close the gap</h2>

<p>The November revision answered intent. The next answer is control: which uses need which permission, which vendors receive content and on what terms, how long training copies last, and how a seller can refuse or verify. None of that requires Etsy to stop using AI for search or fraud. It requires the permission to be as specific as the purposes Etsy has already described.</p>

<p>If every use of that mug photo were listed separately, which ones would its maker agree to?</p>
`,
}
const { data: existing } = await supabase.from('blog_posts').select('id').eq('slug', post.slug)
if (existing && existing.length) { console.error('Slug already exists, not inserting'); process.exit(1) }

const { data, error } = await supabase.from('blog_posts').insert(post).select('id, slug').single()
if (error) { console.error('Insert failed:', error); process.exit(1) }
console.log('Post inserted successfully:', data.id)
console.log('URL: https://theroberthu.com/blog/' + data.slug)
