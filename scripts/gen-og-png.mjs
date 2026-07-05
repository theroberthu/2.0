/**
 * Pre-render SVG OG cards to PNG for social platforms and structured data.
 *
 * Social scrapers (Facebook, LinkedIn, X) and Google's structured-data image
 * requirements do not reliably support SVG, so we ship a PNG alongside each SVG.
 * Rendering happens locally where the fonts (Helvetica Neue, Georgia) exist,
 * because Vercel's serverless runtime has none and would produce tofu boxes.
 *
 * This complements scripts/regen-blog-svgs.mjs (which handles the template blog
 * cards). Here we cover the GEO pillar cards and backfill any blog SVG that is
 * missing its blog-og PNG (e.g. hand-authored custom-layout cards).
 *
 * Usage: node scripts/gen-og-png.mjs
 */

import { readdirSync, existsSync, readFileSync } from 'fs'
import { join, dirname, basename } from 'path'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

const __dirname = dirname(fileURLToPath(import.meta.url))
const PUB = join(__dirname, '..', 'public', 'images')

async function svgToPng(svgPath, pngPath) {
  const svg = readFileSync(svgPath)
  await sharp(svg, { density: 150 }).resize(1200, 630).png().toFile(pngPath)
  console.log(`✓ ${pngPath.slice(pngPath.indexOf('public'))}`)
}

let count = 0

// 1. GEO pillar cards: public/images/geo/*.svg -> sibling .png
const geoDir = join(PUB, 'geo')
for (const f of readdirSync(geoDir).filter((n) => n.endsWith('.svg'))) {
  await svgToPng(join(geoDir, f), join(geoDir, `${basename(f, '.svg')}.png`))
  count++
}

// 2. Backfill any blog SVG missing its blog-og PNG
const blogDir = join(PUB, 'blog')
const ogDir = join(PUB, 'blog-og')
for (const f of readdirSync(blogDir).filter((n) => n.endsWith('.svg'))) {
  const pngPath = join(ogDir, `${basename(f, '.svg')}.png`)
  if (!existsSync(pngPath)) {
    await svgToPng(join(blogDir, f), pngPath)
    count++
  }
}

console.log(`\nDone: ${count} PNG(s) generated.`)
