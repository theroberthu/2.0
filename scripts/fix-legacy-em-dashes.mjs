/**
 * One-off cleanup: remove em dashes from three legacy published posts.
 *
 * The site's hard rule is hyphens only, no em dashes. Three posts predating
 * that rule still carry em dashes in live fields. Two are in
 * schema_json.featured_image_alt, which surfaces on OTHER pages via the
 * "Related Research" thumbnails, so the violation is not contained to its
 * own article.
 *
 * Each replacement is punctuation-only and preserves the original wording.
 * schema_json is read, patched, and written back so no sibling keys are lost.
 *
 * Usage: node scripts/fix-legacy-em-dashes.mjs
 */

import { createClient } from '@supabase/supabase-js'
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const envFile = readFileSync(join(__dirname, '..', '.env.local'), 'utf-8')
const envVars = {}
envFile.split('\n').forEach((line) => {
  const match = line.match(/^([^#=]+)=(.*)$/)
  if (match) envVars[match[1].trim()] = match[2].trim()
})

const supabase = createClient(
  envVars.NEXT_PUBLIC_SUPABASE_URL,
  envVars.SUPABASE_SERVICE_ROLE_KEY
)

const FIXES = [
  {
    slug: 'amazon-variation-reviews-2026',
    field: 'schema_json.featured_image_alt',
    from: 'Amazon variation review policy change 2026 — what sellers need to know about the review split',
    to: 'Amazon variation review policy change 2026: what sellers need to know about the review split',
  },
  {
    slug: 'chatgpt-shopping-pullback-sellers',
    field: 'schema_json.featured_image_alt',
    from: 'ChatGPT Dropped Checkout — Good News for Marketplace Sellers',
    to: 'ChatGPT Dropped Checkout: Good News for Marketplace Sellers',
  },
  {
    slug: 'amazon-openai-partnership-sellers',
    field: 'excerpt',
    from: 'Amazon just committed $50 billion to OpenAI and will co-develop customized AI models for customer-facing applications — including Rufus and product search. For sellers, the AI-powered discovery timeline just got a lot shorter.',
    to: 'Amazon just committed $50 billion to OpenAI and will co-develop customized AI models for customer-facing applications, including Rufus and product search. For sellers, the AI-powered discovery timeline just got a lot shorter.',
  },
]

let changed = 0

for (const fix of FIXES) {
  const { data: post, error: readErr } = await supabase
    .from('blog_posts')
    .select('id, slug, excerpt, schema_json')
    .eq('slug', fix.slug)
    .single()

  if (readErr || !post) {
    console.error(`FAIL  ${fix.slug}: could not read post`, readErr)
    process.exit(1)
  }

  const isSchema = fix.field.startsWith('schema_json.')
  const current = isSchema ? post.schema_json?.featured_image_alt : post.excerpt

  if (current === fix.to) {
    console.log(`SKIP  ${fix.slug} (${fix.field}) already clean`)
    continue
  }
  if (current !== fix.from) {
    console.error(`FAIL  ${fix.slug} (${fix.field}): live value does not match expected source string.`)
    console.error(`      expected: ${JSON.stringify(fix.from)}`)
    console.error(`      actual  : ${JSON.stringify(current)}`)
    process.exit(1)
  }

  const patch = isSchema
    ? { schema_json: { ...post.schema_json, featured_image_alt: fix.to } }
    : { excerpt: fix.to }

  const { error: writeErr } = await supabase
    .from('blog_posts')
    .update(patch)
    .eq('id', post.id)

  if (writeErr) {
    console.error(`FAIL  ${fix.slug}: update failed`, writeErr)
    process.exit(1)
  }

  console.log(`OK    ${fix.slug} (${fix.field})`)
  console.log(`        - ${fix.from}`)
  console.log(`        + ${fix.to}`)
  changed++
}

console.log(`\nDone: ${changed} field(s) updated.`)
