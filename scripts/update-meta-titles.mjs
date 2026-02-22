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

const updates = [
  {
    slug: 'openai-openclaw-ai-agents-ecommerce',
    meta_title: 'Why AI Agents Should Change Your Amazon Strategy Now',
    meta_description: 'OpenAI just hired the engineer behind AI shopping agents. Here\'s what Amazon and Walmart brand owners need to do before this reshapes how customers shop.',
  },
  {
    slug: 'amazon-whole-foods-project-cremini',
    meta_title: 'Amazon\'s Whole Foods Takeover: What CPG Sellers Must Know',
    meta_description: 'Amazon is absorbing Whole Foods into its core ops under Project Cremini. Here\'s what it signals for CPG and grocery e-commerce brand owners.',
  },
  {
    slug: 'amazon-rufus-ai-shopping-sellers',
    meta_title: 'How Amazon Sellers Can Win in the Rufus AI Search Era',
    meta_description: 'Rufus handles product discovery before shoppers reach your listings. Here\'s how to optimize your Amazon content for AI-driven search and protect your rank.',
  },
]

for (const { slug, meta_title, meta_description } of updates) {
  // Log char counts for verification
  console.log(`\n--- ${slug} ---`)
  console.log(`  title (${meta_title.length} chars): ${meta_title}`)
  console.log(`  desc  (${meta_description.length} chars): ${meta_description}`)

  const { error } = await supabase
    .from('blog_posts')
    .update({ meta_title, meta_description })
    .eq('slug', slug)

  if (error) {
    console.error(`  ERROR: ${error.message}`)
  } else {
    console.log(`  ✓ updated`)
  }
}
