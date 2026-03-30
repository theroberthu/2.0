import { NextRequest, NextResponse } from 'next/server'
import { readFileSync, existsSync } from 'fs'
import { join } from 'path'
import sharp from 'sharp'

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params

  // Sanitize slug to prevent path traversal
  const safeSlug = slug.replace(/[^a-z0-9-]/gi, '')
  const svgPath = join(process.cwd(), 'public', 'images', 'blog', `${safeSlug}.svg`)

  if (!existsSync(svgPath)) {
    return new NextResponse('Not found', { status: 404 })
  }

  const svgBuffer = readFileSync(svgPath)
  const pngBuffer = await sharp(svgBuffer, { density: 150 })
    .resize(1200, 630)
    .png()
    .toBuffer()

  return new NextResponse(pngBuffer as unknown as BodyInit, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=86400, s-maxage=604800, stale-while-revalidate=86400',
    },
  })
}
