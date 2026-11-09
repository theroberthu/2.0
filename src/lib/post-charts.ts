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
  | {
      /**
       * One 100% bar per row, each split by the same series, for shares that
       * shift from row to row (for example, stages of a funnel). Values are
       * percentages as published; rounded rows may sum to 99 or 101.
       */
      kind: 'stackedRows'
      series: { label: string; series: SeriesKey }[]
      rows: { label: string; values: number[] }[]
      /** Ends the readout, e.g. "Named first, small retailers: 24% on Google AI Mode". */
      of: string
    }
  | {
      /**
       * Labeled bars on a track with a meaningful start and end, for scores
       * and for shares measured from a baseline such as chance. A row with
       * `from` floats, which makes the view a waterfall. `value` is the figure
       * as published; `detail` is the readout on hover, focus or tap.
       */
      kind: 'scale'
      domain: [number, number]
      /** What the two ends of the track mean. */
      ends: [string, string]
      rows: { label: string; value: string; from?: number; to: number; series: SeriesKey; detail: string }[]
    }
  | {
      /**
       * Figures side by side in labeled columns, with no shared axis, for
       * sources that cannot honestly be plotted against each other. A null
       * cell means the source published no figure for that row.
       */
      kind: 'matrix'
      columns: string[]
      rows: {
        label: string
        highlight?: boolean
        cells: ({ figure: string; text: string } | null)[]
        detail: string
      }[]
    }
)

export type PostChart = {
  /** Paragraph after which the chart is inserted (1-based). */
  afterParagraph: number
  label: string
  title: string
  views: ChartView[]
  note: string
  source: { label: string; href: string }
  /** A second source, for charts that set two studies side by side. */
  alsoSource?: { label: string; href: string }
}

export const SERIES_COLORS = {
  passed: '#3a9bbd',
  failedPurchase: '#ad8c36',
  noPurchase: '#9b6fc0',
  noDecision: '#c46a5a',
  neutral: '#6b7780',
  // Retailer size bands. Same validated hues, in the same adjacent order.
  large: '#3a9bbd',
  mid: '#ad8c36',
  small: '#9b6fc0',
  // Single-series highlight and the two steps of a waterfall.
  claude: '#3a9bbd',
  representation: '#9b6fc0',
  bargaining: '#ad8c36',
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

const SIZE_SERIES: { label: string; series: SeriesKey }[] = [
  { label: 'Large retailers', series: 'large' },
  { label: 'Mid-size retailers', series: 'mid' },
  { label: 'Small retailers', series: 'small' },
]

const FUNNEL_STAGES = ['Cited as a source', 'Named in the answer', 'Named first']

// Values are the labeled figures in Vaer AI's published charts ("Recommendation
// funnel: retailer-size share, by stage" and "... by surface"). Web search on.
const LIGHTSPEED_VAER_RETAILERS: PostChart = {
  afterParagraph: 12,
  label: 'Interactive chart',
  title: 'Cited is not chosen: retailer share at each step of an AI answer',
  views: [
    {
      id: 'first',
      tab: 'First pick, by platform',
      hero: '46% to 58%',
      heroLabel: 'of first-named stores were large retailers, on every platform',
      caption:
        'Large and small retailers were roughly even among the sources cited, at about 37% to 38% each across all three platforms. By the store named first, large retailers led small ones about two and a half to one. Each platform gets there from a different mix of sources.',
      kind: 'stackedRows',
      series: SIZE_SERIES,
      rows: [
        { label: 'All three platforms', values: [52, 28, 20] },
        { label: 'ChatGPT', values: [58, 24, 18] },
        { label: 'Google AI Mode', values: [46, 31, 24] },
        { label: 'Google AI Overviews', values: [52, 31, 18] },
      ],
      of: 'of stores named first',
    },
    {
      id: 'chatgpt',
      tab: 'ChatGPT',
      hero: '41% to 58%',
      heroLabel: 'large retailers, from citations to first pick',
      caption:
        'ChatGPT showed the strongest pull toward large retailers once search was on. Small retailers fell from 36% of citations to 18% of first picks.',
      kind: 'stackedRows',
      series: SIZE_SERIES,
      rows: [
        { label: FUNNEL_STAGES[0], values: [41, 23, 36] },
        { label: FUNNEL_STAGES[1], values: [52, 25, 24] },
        { label: FUNNEL_STAGES[2], values: [58, 24, 18] },
      ],
      of: 'on ChatGPT',
    },
    {
      id: 'aimode',
      tab: 'Google AI Mode',
      hero: '50% to 24%',
      heroLabel: 'small retailers, from citations to first pick',
      caption:
        "AI Mode cites small retailers more than any other platform, then names them first less than half as often. Vaer's text puts local listings at about 58% of AI Mode citations; its chart labels small retailers at 50%. This chart uses the labeled chart values.",
      kind: 'stackedRows',
      series: SIZE_SERIES,
      rows: [
        { label: FUNNEL_STAGES[0], values: [29, 22, 50] },
        { label: FUNNEL_STAGES[1], values: [45, 28, 27] },
        { label: FUNNEL_STAGES[2], values: [46, 31, 24] },
      ],
      of: 'on Google AI Mode',
    },
    {
      id: 'overviews',
      tab: 'Google AI Overviews',
      hero: '44% to 52%',
      heroLabel: 'large retailers, from citations to first pick',
      caption:
        'AI Overviews cites the fewest small retailers to begin with. According to Lightspeed, 68% of its shopping answers named no local store at all.',
      kind: 'stackedRows',
      series: SIZE_SERIES,
      rows: [
        { label: FUNNEL_STAGES[0], values: [44, 32, 23] },
        { label: FUNNEL_STAGES[1], values: [50, 30, 20] },
        { label: FUNNEL_STAGES[2], values: [52, 31, 18] },
      ],
      of: 'on Google AI Overviews',
    },
  ],
  note: 'Web search on, about 260,000 answers to size-neutral shopping prompts in four cities, June to August 2026. Large means over $1 billion in revenue, mid $50 million to $1 billion, small under $50 million. Sponsored research; the full report is available only on request. Rounded shares may not sum to 100.',
  source: {
    label: 'Vaer AI for Lightspeed Commerce, AI retailer bias study, September 29, 2026',
    href: 'https://vaer.ai/insights/ai-retailer-bias-study/',
  },
}

// Values are as published in Anthropic's report: text, footnotes and the labels
// on Figures 4 and 5. Scores are on a 0 to 1 scale, so they are kept as printed.
const PROJECT_SWAP: PostChart = {
  afterParagraph: 19,
  label: 'Interactive chart',
  title: "What limited Project Swap: the agent's read of the person",
  views: [
    {
      id: 'shortfall',
      tab: 'Where the market lost',
      hero: '85%',
      heroLabel: "of the shortfall came from the agent's read of the person",
      caption:
        'Everyone getting their top book would score 1, which is not possible when people want the same title. Replacing the haggling with Top Trading Cycles, a textbook mechanism run on Claude\'s rankings, also reached 0.60.',
      kind: 'scale',
      domain: [0, 1],
      ends: ['0: last-ranked book', '1: top-ranked book'],
      rows: [
        {
          label: 'Best possible assignment',
          value: '0.89',
          to: 0.89,
          series: 'neutral',
          detail: "Computed from what people actually wanted: roughly everyone's second choice out of ten.",
        },
        {
          label: "Agent's read of the person",
          value: '-0.29',
          from: 0.6,
          to: 0.89,
          series: 'representation',
          detail: "The cost of working from Claude's rankings instead of people's own: 85% of the shortfall.",
        },
        {
          label: 'Agent-to-agent bargaining',
          value: '-0.05',
          from: 0.55,
          to: 0.6,
          series: 'bargaining',
          detail: 'The cost of an open trading floor instead of a computed assignment: 15% of the shortfall.',
        },
        {
          label: 'What people got',
          value: '0.55',
          to: 0.55,
          series: 'claude',
          detail: "The market outcome on people's own rankings: roughly their fifth choice out of ten.",
        },
      ],
    },
    {
      id: 'baselines',
      tab: 'Against the baselines',
      hero: '61%',
      heroLabel: 'of book pairs ordered the way the person ordered them',
      caption:
        'A short chat beat both standard methods. Bars start at a coin flip, the score with no information at all. In a joke-preference study, a setting Anthropic calls pretty different, an algorithm reached about 61% and people\'s friends about 57%.',
      kind: 'scale',
      domain: [50, 100],
      ends: ['Coin flip: 50%', 'Perfect agreement: 100%'],
      rows: [
        {
          label: 'Ranking by popularity',
          value: '53%',
          to: 53,
          series: 'neutral',
          detail: 'About 53%, ranking books by their Open Library want-to-read counts.',
        },
        {
          label: 'Collaborative filtering',
          value: '55%',
          to: 55,
          series: 'neutral',
          detail: 'About 55%, ranking by which books the same readers rated in public datasets.',
        },
        {
          label: 'Claude after a short chat',
          value: '61%',
          to: 61,
          series: 'claude',
          detail: 'Fable, ranking the pool from a chat of about five minutes. The median participant typed 216 words.',
        },
      ],
    },
    {
      id: 'models',
      tab: 'Across Claude models',
      hero: '57% to 61%',
      heroLabel: 'agreement, weakest result to strongest',
      caption:
        'Anthropic reran the same ranking exercise with other models. The whole range spans four points on a scale where a coin flip scores 50%.',
      kind: 'scale',
      domain: [50, 100],
      ends: ['Coin flip: 50%', 'Perfect agreement: 100%'],
      rows: [
        { label: 'Haiku 4.5', value: '57%', to: 57, series: 'neutral', detail: 'Seven points above a coin flip.' },
        { label: 'Sonnet 4.5', value: '59%', to: 59, series: 'neutral', detail: 'Nine points above a coin flip.' },
        { label: 'Opus 4.8', value: '60%', to: 60, series: 'neutral', detail: 'Ten points above a coin flip.' },
        { label: 'Fable', value: '61%', to: 61, series: 'claude', detail: 'Eleven points above a coin flip. This is the model used in the experiment.' },
      ],
    },
    {
      id: 'negotiators',
      tab: 'Better negotiators',
      hero: '0.01',
      heroLabel: "Haiku to Opus gap on people's own rankings, down from 0.12 on Claude's",
      caption:
        "On Claude's rankings, floors of stronger models traded better. Scored on what people wanted, the largest model gap nearly vanished in Anthropic's regression. The bars show simple floor averages on Claude's rankings, where Haiku and Opus differ by 0.13.",
      kind: 'scale',
      domain: [0, 1],
      ends: ["0: last on Claude's list", "1: top of Claude's list"],
      rows: [
        { label: 'Haiku floors', value: '0.75', to: 0.75, series: 'neutral', detail: 'Every agent on Haiku, averaged over 20 floors with neutral instructions.' },
        { label: 'Sonnet floors', value: '0.80', to: 0.8, series: 'neutral', detail: 'Every agent on Sonnet, averaged over 20 floors with neutral instructions.' },
        { label: 'Fable floors', value: '0.86', to: 0.86, series: 'neutral', detail: 'Every agent on Fable, averaged over 20 floors with neutral instructions.' },
        { label: 'Opus floors', value: '0.88', to: 0.88, series: 'claude', detail: 'Every agent on Opus, averaged over 20 floors with neutral instructions. The highest of the four.' },
        { label: 'Best possible', value: '0.95', to: 0.95, series: 'neutral', detail: "The best assignment available, scored on Claude's rankings." },
      ],
    },
  ],
  note: 'Run and published by Anthropic on its own models. 201 employees in six offices traded books by barter; 188 ranked books and are the base for the agreement and own-ranking results. Market scores are across 80 runs with neutral instructions and assume equal gaps between ranks. Nothing here tests a production shopping agent.',
  source: {
    label: 'Anthropic, Project Swap: What happens when agents trade for us?, September 24, 2026',
    href: 'https://www.anthropic.com/research/project-swap',
  },
}

// Figures are from the two public press releases. The framework in the first
// view is the author's, so its rows are never plotted on a shared axis.
const NO_FIGURE = null
const ADOPTION_DEFINITIONS: PostChart = {
  afterParagraph: 22,
  label: 'Interactive chart',
  title: 'Two numbers, six levels: what each adoption survey reported',
  views: [
    {
      id: 'levels',
      tab: 'Six levels of delegation',
      hero: '2 of 6',
      heroLabel: 'levels have no clean figure in either release',
      caption:
        "The six levels are the author's framework, mapped against what each company published. Figures in the same row come from different questions and different samples, so they sit side by side here and are not comparable.",
      kind: 'matrix',
      columns: ['Global Payments', 'ACI and YouGov'],
      rows: [
        {
          label: 'Assist',
          cells: [
            { figure: '69%', text: 'use AI to find better deals' },
            { figure: '35%', text: 'value price drop alerts' },
          ],
          detail: 'The agent researches, compares or hunts deals. Global Payments reports use; ACI reports which features people valued.',
        },
        {
          label: 'Recommend',
          cells: [NO_FIGURE, { figure: '20%', text: 'recommendations only' }],
          detail: 'The agent proposes the choice. ACI reports people who would accept recommendations but not autonomous purchases.',
        },
        {
          label: 'Prepare',
          cells: [NO_FIGURE, NO_FIGURE],
          detail: 'The agent assembles the cart and authorizes nothing. This is the level closest to what platforms are shipping.',
        },
        {
          label: 'Approve',
          cells: [
            { figure: '33%', text: 'want to approve every transaction' },
            { figure: '14%', text: 'require approval for every purchase' },
          ],
          detail: 'The agent initiates and the person signs off each time. Global Payments lists this among wanted safeguards.',
        },
        {
          label: 'Bounded delegation',
          highlight: true,
          cells: [
            { figure: '69%', text: 'up to $100 on groceries' },
            { figure: '7%', text: 'under predefined conditions' },
          ],
          detail: 'Standing permission inside limits. Global Payments names a category and a cap; ACI reports only predefined conditions.',
        },
        {
          label: 'Autonomous',
          cells: [NO_FIGURE, NO_FIGURE],
          detail: "No per-transaction approval and no meaningful bound. ACI's headline reads this way, but its 7% carries predefined conditions.",
        },
      ],
    },
    {
      id: 'aci',
      tab: 'ACI: overall stance',
      hero: '7%',
      heroLabel: 'would permit autonomous purchasing under predefined conditions',
      caption:
        'Fashion buyers in the UK and US. The four positions reported sum to 94%. The release does not say what the other 6% answered, or whether respondents could pick only one.',
      kind: 'scale',
      domain: [0, 100],
      ends: ['0%', '100%'],
      rows: [
        { label: 'Uncomfortable with AI buying for them', value: '53%', to: 53, series: 'neutral', detail: 'Uncomfortable allowing an AI assistant to make purchases on their behalf.' },
        { label: 'Recommendations only', value: '20%', to: 20, series: 'neutral', detail: 'Would accept recommendations from AI but not autonomous purchases.' },
        { label: 'Manual approval every time', value: '14%', to: 14, series: 'neutral', detail: 'Would require manual approval for every purchase.' },
        { label: 'Autonomous under predefined conditions', value: '7%', to: 7, series: 'claude', detail: 'The release also describes this 7% as trusting AI to buy, and as buying without approval.' },
      ],
    },
    {
      id: 'gp',
      tab: 'Global Payments: by category',
      hero: '69%',
      heroLabel: 'would let an AI agent spend up to $100 on groceries',
      caption:
        'Seven markets, one category at a time, each with a stated ceiling, so the same person can say yes to several. The release does not label these figures by country.',
      kind: 'scale',
      domain: [0, 100],
      ends: ['0%', '100%'],
      rows: [
        { label: 'Groceries, up to $100', value: '69%', to: 69, series: 'claude', detail: 'Groceries and everyday essentials, up to $100.' },
        { label: 'Clothing, up to $100', value: '69%', to: 69, series: 'neutral', detail: 'Clothing and footwear, up to $100.' },
        { label: 'Luxury clothing, up to $100', value: '64%', to: 64, series: 'neutral', detail: 'Luxury clothing and footwear, up to $100.' },
        { label: 'Electronics, up to $100', value: '58%', to: 58, series: 'neutral', detail: 'Electronics and gadgets, up to $100.' },
        { label: 'Cinema tickets, up to $50', value: '82%', to: 82, series: 'neutral', detail: 'Up from 32% in the 2025 wave.' },
        { label: 'Meal delivery, up to $50', value: '78%', to: 78, series: 'neutral', detail: 'Delivery or pickup. Up from 30% in the 2025 wave.' },
        { label: 'Vouchers and gift cards, up to $50', value: '77%', to: 77, series: 'neutral', detail: 'Up from 28% in the 2025 wave.' },
        { label: 'Subscriptions, up to $50', value: '69%', to: 69, series: 'neutral', detail: 'Subscriptions and memberships. Up from 27% in the 2025 wave.' },
      ],
    },
  ],
  note: 'Stated willingness in surveys; neither observes a transaction. Global Payments: 8,027 consumers in seven markets, May 2026. ACI and YouGov: 3,194 fashion buyers from a survey of 3,328 UK and US adults aged 18 to 65, June 2026. No figure means none in the public releases; neither full report was reviewed. Both companies sell payments technology.',
  source: {
    label: 'Global Payments, Agentic Commerce Report release',
    href: 'https://investors.globalpayments.com/news-events/press-releases/detail/516/consumers-expect-ai-to-make-15-of-their-purchases-within',
  },
  alsoSource: {
    label: 'ACI Worldwide and YouGov release, September 16, 2026',
    href: 'https://investor.aciworldwide.com/news-releases/news-release-details/only-7-fashion-shoppers-trust-ai-buy-them-today-showing',
  },
}

export const POST_CHARTS: Record<string, PostChart> = {
  'visa-agentic-commerce-benchmark-ai-shopping-failures': VISA_BENCHMARK,
  'ai-shopping-retailer-recommendation-gap-lightspeed-vaer': LIGHTSPEED_VAER_RETAILERS,
  'anthropic-project-swap-agentic-commerce-shopper-preferences': PROJECT_SWAP,
  'agentic-commerce-adoption-definition-problem': ADOPTION_DEFINITIONS,
}

export function chartForPost(slug: string): PostChart | undefined {
  return POST_CHARTS[slug]
}
