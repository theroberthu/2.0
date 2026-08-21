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

const DESCRIPTION = 'Albertsons reported a 10% AOV lift from conversational search and 26% from planning assistants. The gap may be about task size, not AI quality.'

// Sources cited at the claims they support.
const SRC_PYMNTS = 'https://www.pymnts.com/news/artificial-intelligence/2026/albertsons-ai-assistants-drive-immediate-26percent-basket-growth-among-early-adopters/'
const SRC_ALB = 'https://www.albertsonscompanies.com/newsroom/press-releases/news-details/2025/Albertsons-Companies-Accelerates-Digital-Transformation-with-the-Albertsons-AI-Shopping-Assistant-Redefining-the-Grocery-Shopping-Experience/default.aspx'
const EXT = 'target="_blank" rel="noopener noreferrer"'

const post = {
  slug: 'albertsons-ai-planning-task-depth',
  title: "Albertsons' AI Results Suggest the Real Value Is in Planning, Not Search",
  excerpt: "Albertsons reported a 10% average order value lift from conversational search and about 26% from its more comprehensive assistants. The interesting part is the distance between them, and the most likely explanation has less to do with the AI than with how much of the customer's job it was asked to finish.",
  meta_title: "Albertsons' AI Results Suggest the Real Value Is in Planning, Not Search",
  meta_description: DESCRIPTION,
  og_image: '/images/blog/albertsons-ai-planning-task-depth.svg',
  category: 'E-commerce Strategy',
  tags: ['Albertsons', 'grocery ecommerce', 'AI shopping assistants', 'agentic commerce', 'average order value', 'product data'],
  status: 'published',
  featured: false,
  read_time_minutes: 6,
  schema_json: {
    author: 'Robert Hu',
    has_faq_schema: false,
    related_posts: ['amazon-ai-shopping-business-model', 'kroger-ecommerce-operating-model', 'product-data-shared-infrastructure-google-ai-mode'],
    featured_image_alt: 'An AI shopping assistant moving from finding a single product to assembling a basket for a whole meal plan',
  },
  published_at: '2026-08-21T13:00:00.000Z',
  content: `<p>Albertsons reported two numbers this month, and the interesting thing is the gap between them.</p>

<p>Speaking to the Wall Street Journal, Jill Pavlovich, the company's senior vice president of digital shopping experiences, <a href="${SRC_PYMNTS}" ${EXT}>described what happens</a> when customers start using its AI shopping experiences. "We see anywhere from a 10% lift in average order value when they use standard conversational searching and about a 26% lift in average order value when they use more comprehensive assistants."</p>

<p>Most of the coverage led with the 26%. I want to look at the distance between the two figures instead, because the same company and the same catalog produced very different reported outcomes across two different AI shopping experiences.</p>

<p>The obvious question is why. The answer I keep arriving at has less to do with the quality of the AI than with the size of the job it was asked to do.</p>

<h2>What sits behind each number</h2>

<p>Albertsons has shipped several AI experiences over roughly the last eighteen months, including Ask AI, Plan AI and Buy AI, and Pavlovich told the Journal it is now consolidating them into a single conversational assistant.</p>

<p>The two ends of that range are different products doing different work. Conversational search lives in the search bar of the banner apps and helps a customer find a product. The more comprehensive assistant, which Albertsons <a href="${SRC_ALB}" ${EXT}>announced in December 2025</a>, does something broader. In the company's own description it can generate a weekly meal plan and shopping list "with de-duplicated ingredients added to cart," import a recipe from an image and add its ingredients, build a basket from an uploaded grocery list, and suggest recipes from what is already in the fridge.</p>

<p>Those are not two grades of the same feature. One helps you find an item. The other tries to work out what the items should be.</p>

<h2>The clearest visible difference was the task</h2>

<p>Here is the part I think matters most, and it is my interpretation rather than anything Albertsons has claimed.</p>

<p>When someone uses conversational search, they have already done the planning. They decided what to cook, worked out what it needs, checked what they have, and applied whatever dietary constraints exist in their household. The assistant is handed a narrow question at the end of a long private process. It helps with the last step.</p>

<p>When someone asks for three gluten-free dinners for a family of four, the assistant enters much earlier. Now it has to reason across recipes, servings, ingredients, dietary preferences, what is already in the cart, substitutions, and what the store actually has. It is not locating a SKU. It is constructing the basket.</p>

<p>That difference alone could contribute to a larger order without the AI being more persuasive, or even better. A meal plan has more line items than a jar of pasta sauce. Pavlovich's own explanation points the same direction. She attributed the larger baskets to customers "adding even more items to their basket because they're not forgetting items."</p>

<p>Forgetting is a planning failure, not a search failure. Search cannot fix it, because search only answers what you thought to ask.</p>

<h2>Why task depth may change the economics</h2>

<p>If that reading holds, the useful variable is not how smart the assistant is but how much of the customer's job it takes responsibility for.</p>

<p>An assistant that owns more of the task gets more chances to be useful in ways that show up in the basket. It can notice a missing ingredient, resolve a substitution before it becomes an out of stock, carry a dietary constraint across every item rather than one, and complete a list the customer would have half-finished. None of that requires upselling. It requires the system to understand the outcome the customer is after rather than the product they typed.</p>

<p>State it carefully and it becomes a hypothesis worth testing rather than a conclusion: the economic value of an AI shopping assistant may rise with how much of the customer's job it can complete. Albertsons' figures are consistent with that. They do not establish it.</p>

<h2>Grocery makes the pattern visible</h2>

<p>Grocery is an unusually good place to see this, which is probably why the clearest signal so far has come from a supermarket rather than a general merchant.</p>

<p>Groceries are bought often, in multi-item baskets, against recurring needs, with dietary constraints, perishability, substitutions, household preferences, and local availability all in play. The customer usually arrives with a job rather than a product. "Feed my family this week" is a fundamentally different request from "find this television," and only one of them has an obvious search query attached to it.</p>

<h2>What a planning assistant needs to read</h2>

<p>A system that plans rather than retrieves needs more than titles and keywords. It needs ingredients, dietary attributes, serving sizes, pack sizes, plausible substitutions, availability and price, and it needs them to be reliable enough to reason over. This is the same argument I have made about <a href="/blog/product-data-shared-infrastructure-google-ai-mode">product data becoming shared infrastructure</a>, arriving from a different direction. A planning assistant is a much harsher reader of a catalog than a search box ever was.</p>

<h2>The honest counterargument</h2>

<p>These are Albertsons-reported figures, described by an executive in a press interview. No sample size, measurement period, geography, or comparison group has been disclosed. Nobody has said whether users were randomized, and the phrasing suggests they were not.</p>

<p>Early adopters of a new digital feature are also not a random sample. People who try a meal-planning assistant are plausibly already heavier grocery shoppers with larger households, which would produce a version of this result with no AI involved at all. The word "lift" implies a causal comparison that the available reporting does not support.</p>

<p>And the mechanical point deserves to be said plainly, because it is the strongest objection: a meal-planning task naturally creates more opportunities to add items than a product search, which can raise order value even if the assistant itself is not more persuasive.</p>

<p>I do not think that makes the result empty. I think it relocates it. If the gap comes from task scope rather than from AI persuasion, then the lesson is not that a better assistant extracts more money from shoppers. It is that expanding the scope of the job the system helps finish is where the value sits. That is a more defensible claim and a more useful one.</p>

<p>Several things remain unknown, and they are the ones that would actually settle it. Whether larger orders carry comparable margin. Whether the effect survives past the novelty period. Whether the resulting baskets are accurate enough that customers keep using the assistant. Whether purchase frequency moves at all.</p>

<p>I have been quicker in the past to treat retailer-reported figures like <a href="/blog/walmart-sparky-35-percent-higher-aov">Walmart's 35% higher order values</a> as evidence that assistants raise spending. Working through <a href="/blog/amazon-ai-shopping-business-model">Amazon's disclosures</a> changed how I read them. A group defined by choosing a new feature may already differ from the group that does not use it, which makes any spending comparison harder to interpret.</p>

<h2>Where this leaves me</h2>

<p>Search assistants make finding easier. A planning assistant changes the question from "what product do you want" to "what are you trying to accomplish," and that is a different unit of commerce.</p>

<p>The shift worth watching is not conversational interfaces replacing search bars. It is retailers discovering that the assistant becomes more consequential the more of the customer's job it absorbs, which is also the point at which it stops being a feature and starts <a href="/blog/ai-wont-fix-broken-work">redesigning the work itself</a>.</p>

<p>If the assistant starts from the customer's goal rather than the product they typed, how much of the shopping journey is left for the retailer to design?</p>
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
