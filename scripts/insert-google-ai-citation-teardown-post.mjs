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

const post = {
  slug: 'google-ai-overview-ai-mode-citation-teardown-geo',
  title: "I Got Cited in Two Google AI Surfaces in One Week. Here's What the Cited Posts Had in Common.",
  excerpt: "In one week, two posts from this site were cited in Google's AI Overview and AI Mode. Two data points cannot reveal Google's algorithm, but the cited posts shared five observable traits that map to core GEO principles. Here is the honest teardown.",
  meta_title: "I Got Cited in Two Google AI Surfaces in One Week. Here's What the Cited Posts Had in Common.",
  meta_description: "In one week, two posts from this site were cited in Google's AI Overview and AI Mode. Two data points cannot reveal Google's algorithm, but the cited posts shared five observable traits that map to core GEO principles. Here is the honest teardown.",
  og_image: '/images/blog/google-ai-overview-ai-mode-citation-teardown-geo.svg',
  category: 'GEO & SEO',
  tags: ['how to get cited in Google AI Overview', 'AI Mode citation optimization', 'get cited by AI search', 'GEO source selection', 'how AI engines choose sources'],
  status: 'published',
  featured: false,
  read_time_minutes: 7,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: true,
    faq_data: [
      {
        q: 'How do you get cited in a Google AI Overview or AI Mode?',
        a: 'Nobody outside Google knows the exact selection mechanism, so treat any precise formula with suspicion. What is observable from cited content is consistent: a clear declarative definition up top, named entities and specific facts, a synthesis layer that translates the facts into implications, clean structural hierarchy, and content built around a specific named thing rather than a broad topic. Those traits make a page easy for an AI engine to read, attribute, and reuse.',
      },
      {
        q: 'Is getting cited in AI search the same as ranking number one in regular search?',
        a: 'No. Traditional ranking rewards link authority and keyword relevance to win a position on a results page. AI citation rewards extractable, attributable clarity so the engine can lift a definition or a fact into a synthesized answer. A page can rank modestly in classic search and still get cited in an AI answer if its content is unusually clear and specific about a named entity. They are related but separate disciplines.',
      },
      {
        q: 'Can you guarantee AI citations?',
        a: 'No, and anyone claiming they can is overselling. Citations are volatile, the selection logic is not public, and two or even twenty data points cannot reverse-engineer Google\'s system. What you can do is make your content maximally legible to AI engines: define things clearly, use specifics, structure cleanly, and do the synthesis work. That improves your odds. It does not guarantee an outcome, and honest practitioners will tell you so.',
      },
    ],
    related_services: ['product-listing-optimization'],
    related_posts: ['6-dimension-geo-audit-framework-amazon-listing', 'geo-vs-seo-marketplace-sellers', 'amazon-joins-universal-commerce-protocol'],
    featured_image_alt: 'How Google AI Overview and AI Mode select and cite sources, analyzed through the lens of GEO principles',
  },
  published_at: '2026-06-26T12:00:00.000Z',
  content: `<p>In one week this June, two posts from this site showed up in places I did not put them. One appeared in a Google AI Overview answering a query about Amazon and the Universal Commerce Protocol. The other appeared in Google AI Mode answering a query about Amazon's Project Cremini. In both, the post sat in the source panel next to Business Insider, Yahoo Finance, Reddit, and LinkedIn.</p>

<figure>
  <img src="/images/blog/citation-ucp-ai-overview.png" alt="theroberthu.com cited as a source in a Google AI Overview for an Amazon UCP query." loading="lazy" />
</figure>

<p>Two citations in two AI surfaces is not enough to reverse-engineer how Google selects sources, and I am not going to pretend it is. But I can look at what the two cited posts had in common, and those commonalities line up almost exactly with what I tell marketplace sellers to do to get recommended by AI shopping agents. The work that gets an article cited and the work that gets a product recommended turn out to be the same work.</p>

<p>That is the actual point of this post. The citations are evidence for a teaching point, not the subject. If you take one thing from it, take the pattern, not the screenshots. The pattern is the part that is useful to you, and it is the part that connects directly to the <a href="/geo">GEO</a> discipline this site is built around.</p>

<h2>The two citations</h2>

<p>Here is what happened, factually. A Google AI Overview for an "Amazon UCP" query pulled from <a href="/blog/amazon-joins-universal-commerce-protocol">my post on Amazon joining the Universal Commerce Protocol</a> and listed theroberthu.com in the source panel. Separately, a Google AI Mode answer for "project cremini" pulled from <a href="/blog/amazon-whole-foods-project-cremini">my post on Amazon's Project Cremini</a> and again listed theroberthu.com as a source. Two different Google AI surfaces, two different posts, same week.</p>

<figure>
  <img src="/images/blog/citation-cremini-ai-mode.png" alt="theroberthu.com cited as a source in Google AI Mode for a Project Cremini query." loading="lazy" />
</figure>

<p>In both cases the source panel grouped this site with Business Insider, Yahoo Finance, Reddit, and LinkedIn. That grouping is itself a signal worth noting. The AI did not treat a small independent site as out of place next to a major business publication and a primary social source. It treated the content as belonging in that set for those specific queries. That is the setup. The useful part is what the two posts had in common that might explain why.</p>

<h2>Five things both cited posts shared</h2>

<p>These are observable traits of the two cited posts. They are not a claim about Google's ranking logic, which I cannot see. They are the commonalities I can actually point to, and each one maps to a GEO principle I already teach.</p>

<p><strong>1. A declarative definition in the opening.</strong> Both posts opened by defining the thing plainly, in a sentence. The AI lifted that definitional language nearly verbatim into its answer. The Cremini overview led with "Project Cremini is Amazon's internal initiative to fully absorb and integrate Whole Foods," which is the opening line of the post almost word for word. Lesson: AI engines extract clean definitions. If you bury your definition three paragraphs down or never state it plainly, you give the engine nothing to lift.</p>

<p><strong>2. Named entities and specific facts.</strong> Both posts named companies, people, products, protocols, dates, and figures. Project codename, acquisition year, named executives, specific protocols. Lesson: AI synthesis is assembled from specifics. Vague content does not get cited because there is nothing concrete to attribute to it. A sentence the engine can footnote is a sentence with a verifiable fact in it.</p>

<p><strong>3. A "what this means" synthesis layer.</strong> Both posts included a section translating the news into implications for sellers and brands, and the AI reorganized the content into exactly that impact framing. In the Cremini AI Mode answer, the synthesis pulled a takeaway about maintaining consistent canonical product records, optimizing for backend attributes, and connecting features to concrete customer outcomes. That is <a href="/blog/6-dimension-geo-audit-framework-amazon-listing">6-dimension framework</a> language. Lesson: if you do the synthesis work, the engine can lift your synthesis. If you only report facts, the engine synthesizes without you.</p>

<p><strong>4. Clear structural hierarchy.</strong> Both posts used clean headings and scannable structure. The engine could tell what each section covered without guessing. Lesson: AI engines parse structure to understand what a page is about. This is the same AI Retrievability principle from the <a href="/blog/6-dimension-geo-audit-framework-amazon-listing">6-dimension framework</a> that determines whether a shopping agent can read a product listing. Structure is not decoration. It is how the machine navigates your meaning.</p>

<p><strong>5. Specific, named-entity queries.</strong> Both citations came on specific queries, a protocol acronym and a project codename, not broad informational ones. Lesson: clear content about a specific named thing is more citable than broad content about a general topic. There is less competition for the exact term, and there is a cleaner match between the query and the page. Own the specific term before chasing the broad one.</p>

<h2>Citation and recommendation are the same discipline</h2>

<p>Here is the connection that makes this worth your time. The traits that got these posts cited, definitional clarity, named entities, specific facts, a synthesis layer, and clean structure, are the same traits that get a product listing recommended by <a href="/geo/alexa-for-shopping">Alexa for Shopping</a> or <a href="/geo/walmart-sparky">Walmart Sparky</a>.</p>

<p>Both situations are an AI system reading content, extracting meaning, and deciding what to surface. An AI Overview reads an article and decides whether to cite it. A shopping agent reads a listing and decides whether to recommend it. The surface differs. The underlying task does not. In both, the engine is looking for content it can read confidently, attribute cleanly, and reuse in an answer.</p>

<p>The 6-dimension framework was built for product listings, but the principle underneath it, machine-readable clarity about a specific entity, is identical for an article. WHO is it for, WHAT exactly is it, WHY does it matter, and can the machine actually retrieve all of that. A listing answers those questions for a shopper. An article answers them for a researcher. The AI reads both the same way. This is why I keep saying GEO is not a marketplace tactic. It is how you become legible to AI systems, whatever the surface they sit on. The shift away from keyword-stuffed pages toward clear, specific, structured content is the same shift covered in <a href="/blog/geo-vs-seo-marketplace-sellers">GEO vs SEO</a>.</p>

<h2>The limits of two data points</h2>

<p>This section matters more than the five commonalities, because it is what keeps the rest honest. Two citations cannot reveal Google's selection logic. I want to be plain about what I do not know.</p>

<p>I do not know why Google selected these two sources over others that covered the same topics. I do not know whether the citations will persist or whether they are volatile and already gone by the time you read this. I do not know whether the pattern generalizes to broad informational queries or whether it is specific to narrow named-entity queries like a codename and an acronym. And I do not know the actual ranking and selection mechanism, because Google does not publish it and two data points cannot infer it.</p>

<p>Anyone selling you a guaranteed method for getting cited in AI Overviews is selling certainty that does not exist. What I have is two data points and a set of observable commonalities that happen to match GEO principles I already believed in for other reasons. That is a reasonable basis for a hypothesis. It is not a formula, and I am not going to dress it up as one. Treat it as a direction to test, not a lever to pull.</p>

<h2>Closing</h2>

<p>The citations are evidence, not a victory lap. The reason they are worth writing about is the pattern they point to: the GEO discipline this site teaches for shopping agents appears to apply to AI search citations too. That makes the foundational work more valuable, not less, because it compounds across surfaces. Clear, specific, structured content about a named thing is what an AI system can use, whether that system is an <a href="/geo">AI Overview</a>, a shopping agent, or the <a href="/aeo">agentic commerce layer</a> coming next. You do the work once, and it pays off in more than one place.</p>

<p>The brands and the writers who are clear, specific, and structured are the ones AI systems can actually use. That has been the GEO thesis all along. Two citations did not prove it, but they are consistent with it, and that is the most honest thing I can say about them.</p>

<p>I write about this kind of thing as it develops. Subscribe to <a href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7270286787502047232">Hu's Weekly Hoot</a> for ongoing GEO and AEO analysis.</p>

<h2>Frequently Asked Questions</h2>

<h3>How do you get cited in a Google AI Overview or AI Mode?</h3>
<p>Nobody outside Google knows the exact selection mechanism, so treat any precise formula with suspicion. What is observable from cited content is consistent: a clear declarative definition up top, named entities and specific facts, a synthesis layer that translates the facts into implications, clean structural hierarchy, and content built around a specific named thing rather than a broad topic. Those traits make a page easy for an AI engine to read, attribute, and reuse.</p>

<h3>Is getting cited in AI search the same as ranking number one in regular search?</h3>
<p>No. Traditional ranking rewards link authority and keyword relevance to win a position on a results page. AI citation rewards extractable, attributable clarity so the engine can lift a definition or a fact into a synthesized answer. A page can rank modestly in classic search and still get cited in an AI answer if its content is unusually clear and specific about a named entity. They are related but separate disciplines.</p>

<h3>Can you guarantee AI citations?</h3>
<p>No, and anyone claiming they can is overselling. Citations are volatile, the selection logic is not public, and two or even twenty data points cannot reverse-engineer Google's system. What you can do is make your content maximally legible to AI engines: define things clearly, use specifics, structure cleanly, and do the synthesis work. That improves your odds. It does not guarantee an outcome, and honest practitioners will tell you so.</p>
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
