/**
 * Interactive charts attached to specific blog posts, keyed by slug, the same
 * way videos are paired with posts. A post with no entry renders exactly as
 * before. Figures live here, in the repo, rather than in Supabase post HTML,
 * so a chart is reviewed and versioned like code.
 *
 * Series colors were run through the dataviz palette validator against the
 * site's dark surface (#1a2a32): lightness band, chroma floor, colorblind
 * separation, normal-vision separation and contrast all pass in this order.
 */

export type ChartSegment = {
  label: string
  value: number
  /** Key into SERIES_COLORS, so a series keeps its color across views. */
  series: SeriesKey
}

export type ChartView = {
  id: string
  /** Button label. */
  tab: string
  /** Large headline figure and the words after it. */
  hero: string
  heroLabel: string
  caption: string
} & (
  | { kind: 'stacked'; unit: string; segments: ChartSegment[] }
  | { kind: 'bars'; rows: { label: string; percent: number }[] }
)

export type PostChart = {
  /** Paragraph after which the chart is inserted (1-based). */
  afterParagraph: number
  label: string
  title: string
  views: ChartView[]
  note: string
  source: { label: string; href: string }
}

export const SERIES_COLORS = {
  passed: '#3a9bbd',
  failedPurchase: '#ad8c36',
  noPurchase: '#9b6fc0',
  noDecision: '#c46a5a',
  neutral: '#6b7780',
} as const

export type SeriesKey = keyof typeof SERIES_COLORS

const VISA_BENCHMARK: PostChart = {
  afterParagraph: 2,
  label: 'Interactive chart',
  title: 'How the 990 benchmark runs ended',
  views: [
    {
      id: 'all',
      tab: 'All 990 runs',
      hero: '57.2%',
      heroLabel: 'of runs passed',
      caption:
        'A run passed only if the simulated shopper ended with a correct decision and the assistant had uncovered every requirement behind it.',
      kind: 'stacked',
      unit: 'runs',
      segments: [
        { label: 'Passed', value: 566, series: 'passed' },
        { label: 'Purchase decision did not pass', value: 229, series: 'failedPurchase' },
        { label: 'No purchase, though a fit existed', value: 114, series: 'noPurchase' },
        { label: 'No decision', value: 81, series: 'noDecision' },
      ],
    },
    {
      id: 'failed',
      tab: 'The 424 failures',
      hero: '54.0%',
      heroLabel: 'of failures still ended in a purchase decision',
      caption:
        'A failed purchase decision is not necessarily the wrong product. Visa also fails a selection made before every required fact was established.',
      kind: 'stacked',
      unit: 'failed runs',
      segments: [
        { label: 'Purchase decision did not pass', value: 229, series: 'failedPurchase' },
        { label: 'No purchase, though a fit existed', value: 114, series: 'noPurchase' },
        { label: 'No decision', value: 81, series: 'noDecision' },
      ],
    },
    {
      id: 'nofit',
      tab: 'When nothing fits',
      hero: '34.8%',
      heroLabel: 'still ended in a purchase decision',
      caption:
        "In two of the 15 episodes nothing on the market met every requirement, so the correct outcome was to buy nothing. Author's calculation from Visa's per-model results, not a Visa headline figure.",
      kind: 'stacked',
      unit: 'runs on no-fit episodes',
      segments: [
        { label: 'Purchase decision anyway', value: 46, series: 'failedPurchase' },
        { label: 'No purchase', value: 86, series: 'neutral' },
      ],
    },
    {
      id: 'repeat',
      tab: 'Run it again',
      hero: '34.2%',
      heroLabel: 'passed all three tries',
      caption:
        'Each model ran each episode three times. The chance that one run passed, that two runs both passed, and that all three passed, averaged across models.',
      kind: 'bars',
      rows: [
        { label: 'One run passes', percent: 57.2 },
        { label: 'Two runs both pass', percent: 41.7 },
        { label: 'All three pass', percent: 34.2 },
      ],
    },
  ],
  note: 'Simulated shopping decisions only. No checkout, payment or order placement took place.',
  source: {
    label: 'Visa Research, Visa Agentic Commerce Benchmark results, October 2026 snapshot',
    href: 'https://www.visapaymentsfrontier.io/#agentic-commerce-benchmark',
  },
}

export const POST_CHARTS: Record<string, PostChart> = {
  'visa-agentic-commerce-benchmark-ai-shopping-failures': VISA_BENCHMARK,
}

export function chartForPost(slug: string): PostChart | undefined {
  return POST_CHARTS[slug]
}
