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

const SLUGS = [
  'walmart-sparky-chatgpt-gemini',
  'walmart-sparky-q1-earnings-replenishment-shift',
  'rufus-sparky-ai-revenue-impact',
]

const CALLOUT = `<div class="callout-box">
  <p>For the full optimization guide, see the <a href="/geo/walmart-sparky">Walmart Sparky cluster page</a>.</p>
</div>

`

for (const slug of SLUGS) {
  const { data: post, error: fetchError } = await supabase
    .from('blog_posts')
    .select('id, content')
    .eq('slug', slug)
    .single()

  if (fetchError || !post) {
    console.error(`[${slug}] fetch failed:`, fetchError?.message || 'not found')
    continue
  }

  if (post.content.includes('/geo/walmart-sparky')) {
    console.log(`[${slug}] pointer already present, skipped`)
    continue
  }

  const anchorIndex = post.content.indexOf('<h2')
  if (anchorIndex === -1) {
    console.error(`[${slug}] no <h2> anchor found, skipped`)
    continue
  }

  const updated = post.content.slice(0, anchorIndex) + CALLOUT + post.content.slice(anchorIndex)

  const { error: updateError } = await supabase
    .from('blog_posts')
    .update({ content: updated })
    .eq('id', post.id)

  if (updateError) {
    console.error(`[${slug}] update failed:`, updateError.message)
    continue
  }
  console.log(`[${slug}] pointer callout inserted before first H2`)
}

console.log('Done.')
