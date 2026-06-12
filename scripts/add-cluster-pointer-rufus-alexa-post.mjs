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

const SLUG = 'rufus-alexa-for-shopping-rebrand-marketplace-sellers'
const CALLOUT = `<div class="callout-box">
  <p>For the full optimization guide, see the <a href="/geo/alexa-for-shopping">Alexa for Shopping cluster page</a>.</p>
</div>

`
// Insert the callout after the intro, immediately before the first H2.
const ANCHOR = '<h2>What did Amazon announce on May 13?</h2>'

const { data: post, error: fetchError } = await supabase
  .from('blog_posts')
  .select('id, content')
  .eq('slug', SLUG)
  .single()

if (fetchError || !post) {
  console.error('Fetch failed:', fetchError)
  process.exit(1)
}

if (post.content.includes('/geo/alexa-for-shopping')) {
  console.log('Pointer already present. No change made.')
  process.exit(0)
}

if (!post.content.includes(ANCHOR)) {
  console.error('Anchor H2 not found in post content. Aborting without changes.')
  process.exit(1)
}

const updated = post.content.replace(ANCHOR, CALLOUT + ANCHOR)

const { error: updateError } = await supabase
  .from('blog_posts')
  .update({ content: updated })
  .eq('id', post.id)

if (updateError) {
  console.error('Update failed:', updateError)
  process.exit(1)
}

console.log('Pointer callout inserted into', SLUG)
console.log('Placed after the intro, before the first H2.')
