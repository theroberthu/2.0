/**
 * Generate SVG featured images for blog posts.
 * Usage:
 *   node scripts/generate-og-image.mjs --slug "my-post" --title "My Post Title" --category "E-commerce Strategy"
 *   node scripts/generate-og-image.mjs --all  (regenerate all from Supabase)
 *
 * Output: /public/images/blog/[slug].svg (1200x630)
 */

import { writeFileSync, mkdirSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const OUTPUT_DIR = join(__dirname, '..', 'public', 'images', 'blog')

// Ensure output directory exists
mkdirSync(OUTPUT_DIR, { recursive: true })

/**
 * Wrap title text to fit within the SVG.
 * Returns an array of lines, max 3 lines.
 */
function wrapTitle(title, maxCharsPerLine = 32) {
  const words = title.split(' ')
  const lines = []
  let currentLine = ''

  for (const word of words) {
    const testLine = currentLine ? `${currentLine} ${word}` : word
    if (testLine.length > maxCharsPerLine && currentLine) {
      lines.push(currentLine)
      currentLine = word
    } else {
      currentLine = testLine
    }
  }
  if (currentLine) lines.push(currentLine)

  // Limit to 3 lines, truncate last line with ellipsis if needed
  if (lines.length > 3) {
    lines.length = 3
    lines[2] = lines[2].length > maxCharsPerLine - 3
      ? lines[2].slice(0, maxCharsPerLine - 3) + '...'
      : lines[2] + '...'
  }

  return lines
}

/**
 * Generate an SVG featured image for a blog post.
 * @param {string} slug - The post slug (used for filename)
 * @param {string} title - The post title
 * @param {string} category - The post category
 * @returns {string} The path to the generated SVG file
 */
export function generateOgImage(slug, title, category) {
  const lines = wrapTitle(title)
  const lineHeight = 48
  const totalTextHeight = lines.length * lineHeight
  // Center the title block vertically, shifted up slightly to leave room for category
  const startY = (630 - totalTextHeight) / 2 + 40

  const titleLines = lines
    .map((line, i) => {
      // Escape HTML entities in the line
      const escaped = line
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
      return `    <text x="600" y="${startY + i * lineHeight}" text-anchor="middle" font-family="'DM Sans', system-ui, sans-serif" font-size="36" font-weight="700" fill="#f7f9fb">${escaped}</text>`
    })
    .join('\n')

  const categoryY = startY - 50
  const escapedCategory = category
    .toUpperCase()
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <!-- Background -->
  <rect width="1200" height="630" fill="#1a2a32"/>

  <!-- Subtle geometric accents -->
  <line x1="0" y1="580" x2="1200" y2="580" stroke="#2d7d9a" stroke-width="2" opacity="0.3"/>
  <line x1="80" y1="0" x2="80" y2="630" stroke="#2d7d9a" stroke-width="1" opacity="0.08"/>
  <line x1="1120" y1="0" x2="1120" y2="630" stroke="#2d7d9a" stroke-width="1" opacity="0.08"/>

  <!-- Top accent bar -->
  <rect x="0" y="0" width="1200" height="4" fill="#2d7d9a" opacity="0.6"/>

  <!-- Corner accent -->
  <rect x="60" y="50" width="40" height="3" fill="#2d7d9a" opacity="0.4"/>
  <rect x="60" y="50" width="3" height="30" fill="#2d7d9a" opacity="0.4"/>

  <!-- Category tag -->
  <text x="600" y="${categoryY}" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="13" font-weight="600" fill="#2d7d9a" letter-spacing="3" text-transform="uppercase">${escapedCategory}</text>

  <!-- Title -->
${titleLines}

  <!-- HU mark -->
  <text x="1150" y="605" text-anchor="end" font-family="'JetBrains Mono', monospace" font-size="14" font-weight="500" fill="#8a9aa2" opacity="0.5">HU</text>
</svg>`

  const outputPath = join(OUTPUT_DIR, `${slug}.svg`)
  writeFileSync(outputPath, svg, 'utf-8')
  return `/images/blog/${slug}.svg`
}

// CLI execution
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const args = process.argv.slice(2)
  const slugIdx = args.indexOf('--slug')
  const titleIdx = args.indexOf('--title')
  const categoryIdx = args.indexOf('--category')

  if (slugIdx !== -1 && titleIdx !== -1 && categoryIdx !== -1) {
    const slug = args[slugIdx + 1]
    const title = args[titleIdx + 1]
    const category = args[categoryIdx + 1]
    const path = generateOgImage(slug, title, category)
    console.log(`Generated: ${path}`)
  } else if (args.includes('--all')) {
    console.log('Regenerating all images from Supabase...')
    // Import Supabase and regenerate all
    import('./insert-costco-post.mjs').catch(() => {
      console.log('Use --slug, --title, --category to generate individual images')
    })
  } else {
    console.log('Usage:')
    console.log('  node scripts/generate-og-image.mjs --slug "my-post" --title "My Post Title" --category "E-commerce Strategy"')
  }
}
