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

const DESCRIPTION = "Shopify's Canvas lets Sidekick write storefront code. The interesting part is what themes become: the design contract that tells the agent what good looks like."

const EXT = 'target="_blank" rel="noopener noreferrer"'

const post = {
  slug: 'shopify-canvas-ai-themes-design-contract',
  // Editorial H1 (renders on page, and as JSON-LD headline)
  title: 'AI Store Builders Are Not Killing Themes. They Are Changing Their Job.',
  // Query-aligned search title (drives <title>, OG and Twitter). Deliberate split.
  meta_title: 'Shopify Canvas Changes What Ecommerce Themes Are For',
  excerpt: "Shopify launched Canvas, a workspace where Sidekick writes real theme code from a conversation. Shopify's design director says generating the code was the easy part. The theme is becoming the contract that guides the agent rather than the finished design itself.",
  meta_description: DESCRIPTION,
  og_image: '/images/blog/shopify-canvas-ai-themes-design-contract.svg',
  category: 'Digital Transformation',
  tags: ['Shopify', 'Canvas', 'Sidekick', 'AI development', 'ecommerce themes', 'design systems'],
  status: 'published',
  featured: false,
  read_time_minutes: 6,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: false,
    related_posts: ['lovable-shopify-integration', 'noibu-ai-agents-closed-loop-ecommerce', 'agentic-commerce-platform-default-shopify-google'],
    featured_image_alt: 'A storefront theme shown as a set of patterns and constraints feeding an AI coding agent, which writes the merchant specific implementation',
  },
  published_at: new Date().toISOString(),
  content: `<p>A year ago I wrote about <a href="/blog/lovable-shopify-integration">Lovable building Shopify storefronts from a conversation</a>, and framed it the way most people did: AI generation as the alternative to buying a template.</p>

<p><a href="https://www.shopify.com/news/introducing-canvas" ${EXT}>Shopify shipped something on October 1</a> that suggests a different shape. Not generation instead of themes. Generation on top of them.</p>

<h2>What Canvas actually is</h2>

<p>Canvas is a visual workspace where every page of a store sits side by side. Merchants pan across the whole store, zoom into details, click elements to edit them, or describe what they want and have Sidekick build it. Changes land in real time, and what renders is not a static preview but a render of the real code.</p>

<p>Shopify is careful about status, and so am I. It is rolling out over the coming days, it is early access, and Ben Sehl, the Shopify product director who co-founded Kotn, says plainly: "We're early here and Canvas is not replacing the existing editor yet."</p>

<h2>The sentence that explains the whole launch</h2>

<p>The most useful quote is not about what merchants can do. It is from Austin Knight, a design director at Shopify, describing what was hard to build.</p>

<p>"Getting Sidekick to write code was easy, but guiding it to make good design decisions took a great deal of time and attention. Every theme has a unique design contract, a curated set of patterns to draw from, and a mountain of opinionated eval data."</p>

<p>Read that as an engineering confession, because it is one. The code generation was the solved part. The hard part was taste, and the answer they shipped was not a better model. It was constraints: a design contract, curated patterns, and evaluation data, all attached to the theme.</p>

<p>Generating the code is becoming easier than deciding what the code should produce.</p>

<h2>The theme is being rebuilt as an input</h2>

<p>Here is the structural detail most coverage will skip. Shopify says Sidekick now works directly on theme files, guided by instructions and skills, and that "theme architecture has also been simplified, making the store's structure, logic, and design easier for Sidekick to understand and change."</p>

<p>The theme was not left alone while an agent learned to use it. It was re-architected to be legible to software. The agent was already working at that layer before Canvas existed: Shopify says Sidekick made more than twenty-five million edits to themes in the first half of 2026, though it does not say whether an edit is a file change, a request or a session, and gives no denominator.</p>

<p><a href="https://community.shopify.dev/t/introducing-canvas-a-new-way-for-merchants-to-design-their-online-store-with-sidekick/38211" ${EXT}>Shopify told theme developers the same thing in plainer language</a>. In the developer community, a Shopify staff member wrote that the Theme Store "remains an important destination for many merchants choosing the path of a polished and ready theme," that Shopify is "deeply considering the role of the theme store in this new world," and that "we expect themes to be a starting point for merchants to realize their vision."</p>

<p>Starting point rather than destination. That is a different economic object. The old theme was a finished look you bought and adjusted. The emerging one is the set of patterns and constraints that tells an agent what good looks like before it writes anything.</p>

<p>I am extrapolating when I call that a design system. Shopify's term is design contract, and the company has not published a schema, a token format or an evaluation framework. What is documented is that the contract exists, lives with the theme, and shapes what the agent produces.</p>

<h2>What the loop checks, and what it does not</h2>

<p>Sidekick validates its code and takes screenshots to inspect how changes rendered, then refines in a loop before handing the result back. That is a genuine feedback mechanism and it is worth naming precisely, because it is not the loop <a href="/blog/noibu-ai-agents-closed-loop-ecommerce">I argued was the interesting one</a>.</p>

<p>Code validation and screenshot inspection check the artifact. They ask whether the code is valid and whether the page looks the way it was supposed to. Nothing in the announcement claims they measure conversion, revenue, accessibility, page speed or search performance. Faster iteration against a rendered artifact is not the same as evidence that a change worked, and the gap between those two is where most redesigns go wrong.</p>

<h2>The limits are large enough to matter</h2>

<p><a href="https://help.shopify.com/en/manual/online-store/themes/canvas/requirements" ${EXT}>Canvas is available only to certain stores</a>, desktop only, on plans that include theme customization, and only with Shopify-developed and custom themes. Third-party themes are not supported. App blocks and app embeds cannot be added or configured. Markets, translations and rollouts are not supported. Blocks cannot be added manually, only through Sidekick.</p>

<p>Two constraints should stop any merchant from treating this as production-ready today. A theme edited in Canvas does not receive theme updates, and its files cannot be downloaded.</p>

<p>For a platform where most serious storefronts run app blocks, that last set is not cosmetic. Shopify says it expects theme app extension support before Canvas becomes the default editor, and <a href="https://community.shopify.dev/t/meet-canvas-a-new-way-for-merchants-to-design-their-online-store-with-sidekick/38212" ${EXT}>a staff member told developers it is planned within weeks</a>. Believe the direction, but the gap is real now.</p>

<h2>Where the value moves</h2>

<p>If a merchant can generate a bespoke implementation from the same underlying system, the demo storefront becomes a weaker thing to sell. What gets more valuable is harder to screenshot: component quality, consistent behavior across templates, responsive and accessible defaults, and a structure an agent can change without breaking.</p>

<p>Shopify says theme developers will play a significant role and does not say what the model is. That ambiguity is honest, and it is also the whole question for anyone whose business is built on the Theme Store.</p>

<p>For agencies the same logic applies one level up. If implementation compresses, the remaining work is brand definition, information architecture, integrations and knowing which changes are worth making. Implementation margin usually compresses before judgment does.</p>

<h2>The objections</h2>

<p>Several are serious. Conversational store building is not new, which is why I wrote about Lovable in the first place, and themes have always contained reusable patterns, so calling that a design contract may be new packaging on old architecture. Most merchants may still prefer a polished prebuilt theme to generating one. A contract that produces tasteful output can also produce homogeneous output, and an agent trained on one platform's priors may narrow visual variety rather than widen it. Shopify has published no conversion, build quality or merchant satisfaction data, and the twenty minute custom store is an executive anecdote, not a methodology.</p>

<p>The objection I take most seriously is operational. Generating faster does not transfer responsibility for what gets generated. A store assembled in an afternoon still has to be maintained, updated and debugged by someone, and right now Canvas-edited themes cannot even take theme updates.</p>

<p>What changes about how you evaluate a theme if the thing you are really buying is the instruction set behind the agent?</p>
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
