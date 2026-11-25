// Meta title for /blog/target-ask-target-ai-shopping-assistant-purchase-rate
// (Release 2.13), approved by Robert Hu on 2026-11-25. The 79-character title
// was truncated in Google results. Changes meta_title only; the article title,
// excerpt and content are untouched.
// Dry run by default; pass --apply to write.
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

const supabase = createClient(envVars.NEXT_PUBLIC_SUPABASE_URL, envVars.SUPABASE_SERVICE_ROLE_KEY)

const SLUG = 'target-ask-target-ai-shopping-assistant-purchase-rate'
const NEW_META_TITLE = 'Ask Target AI Assistant: Does It Increase Purchases?'
const APPLY = process.argv.includes('--apply')

const { data: post, error } = await supabase.from('blog_posts').select('id, title, meta_title').eq('slug', SLUG).single()
if (error) { console.error('Read failed:', error); process.exit(1) }
console.log('title:     ', post.title)
console.log('meta_title:', post.meta_title)
console.log('new:       ', NEW_META_TITLE)
if (post.meta_title === NEW_META_TITLE) { console.log('Already set; nothing to do.'); process.exit(0) }
if (!APPLY) { console.log('Dry run. Pass --apply to write.'); process.exit(0) }

const { error: upErr } = await supabase.from('blog_posts').update({ meta_title: NEW_META_TITLE }).eq('id', post.id)
if (upErr) { console.error('Update failed:', upErr); process.exit(1) }
console.log('Updated meta_title.')
