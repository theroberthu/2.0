/**
 * Content model for long-form video companion pages (/videos/[slug]) and the
 * /videos index. Each entry is a permanent, searchable home for one YouTube
 * documentary: written context, chapters, sources and related research.
 *
 * To add a video: append an entry to VIDEOS (newest first) and, if it should
 * replace the homepage feature, point FEATURED_VIDEO_SLUG at it. Only use
 * values verified from the YouTube watch page (upload date, duration) and the
 * sources cited in the video description.
 *
 * Body copy supports one inline syntax: [label](/internal-path).
 */

export type VideoChapter = { time: string; label: string }

export type VideoSource = { label: string; date: string; href: string; note?: string }

export type RelatedLink = { href: string; title: string; note: string }

export type VideoSection = { heading?: string; paragraphs: string[] }

export type VideoEntry = {
  slug: string
  youtubeId: string
  /** Title exactly as published on YouTube. */
  youtubeTitle: string
  /** Editorial H1 for the companion page. */
  h1: string
  /** Search title (site template appends " | Robert Hu"). */
  seoTitle: string
  metaDescription: string
  dek: string
  /** ISO 8601, from the YouTube watch page. */
  uploadDate: string
  /** ISO 8601 duration, from the YouTube watch page. */
  duration: string
  durationLabel: string
  /** Local copy of the YouTube thumbnail, used for the page, cards and OG. */
  thumbnail: string
  thumbnailAlt: string
  sections: VideoSection[]
  takeaways: string[]
  chapters: VideoChapter[]
  sources: VideoSource[]
  related: RelatedLink[]
  /** Production and disclosure notes, carried over from the YouTube description. */
  credits: string
  /** Homepage Featured Video card copy. */
  feature: { eyebrow: string; title: string; description: string; cta: string }
}

/** Seconds from a chapter timestamp such as "10:29". */
export function chapterSeconds(time: string): number {
  return time.split(':').reduce((total, part) => total * 60 + Number(part), 0)
}

export function youtubeWatchUrl(id: string, seconds?: number): string {
  return `https://www.youtube.com/watch?v=${id}${seconds ? `&t=${seconds}s` : ''}`
}

export function youtubeThumbnailUrl(id: string): string {
  return `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`
}

export const VIDEOS: VideoEntry[] = [
  {
    slug: 'walmart-jet-acquisition',
    youtubeId: 't4Hf1WLag48',
    youtubeTitle: 'Walmart Bought Jet for $3.3B. Why Shut It Down?',
    h1: 'Why Walmart Bought Jet.com for $3.3 Billion, Then Shut It Down',
    seoTitle: 'Why Walmart Bought Jet.com for $3.3B, Then Shut It Down',
    metaDescription:
      'Walmart bought Jet.com for about $3.3 billion in 2016 and shut down the brand four years later. Here is what Walmart actually bought, what it kept, and why the acquisition still matters.',
    dek: 'Walmart retired the Jet brand four years after buying it. The more useful question is what Walmart kept.',
    uploadDate: '2026-10-12T15:20:17-07:00',
    duration: 'PT11M40S',
    durationLabel: '11 min 40 sec',
    thumbnail: '/images/videos/walmart-jet-acquisition.jpg',
    thumbnailAlt: 'The Real Prize: documentary thumbnail showing a Walmart storefront at dusk with delivery routes radiating from the store',
    sections: [
      {
        paragraphs: [
          'Walmart bought Jet.com for roughly $3.3 billion in 2016. Less than four years later, it announced it would discontinue Jet.com. Read in that order, it sounds like a write-off. I do not think that is the right way to judge it.',
          'Walmart did not only buy a website. It bought people, technology and a faster way of operating online, at a moment when it needed to catch up. The brand turned out to be the least durable part of the deal. The more useful question is what Walmart kept, and what it built around it.',
        ],
      },
      {
        heading: 'What Walmart bought in 2016',
        paragraphs: [
          'When the deal closed in September 2016, Walmart described the price as approximately $3 billion in cash, part of it paid over time, plus $300 million in Walmart shares. Jet.com and Walmart.com were to operate as separate brands "while leveraging technology and talent across both entities." Marc Lore, Jet\'s founder, became president and CEO of Walmart eCommerce in the U.S., leading both sites.',
          'That last detail is the tell. Walmart put the acquired team in charge of its own ecommerce business, not only the one it had just bought. The people were part of the purchase. Jet co-founder Nate Faust, for example, went on to serve as senior vice president of Walmart U.S. eCommerce supply chain, according to [Kroger\'s announcement when it hired him](/blog/kroger-ecommerce-operating-model) in 2026.',
        ],
      },
      {
        heading: 'Why closing the brand is not the same as failing',
        paragraphs: [
          'In May 2020, in its first quarter fiscal 2021 earnings release, Walmart said that "due to continued strength of the Walmart.com brand, the company will discontinue Jet.com." The next sentence is the one most coverage skipped: "The acquisition of Jet.com nearly four years ago was critical to accelerating our omni strategy."',
          'That is Walmart describing its own decision, and it should be read that way. But it points to a useful distinction. A brand can fail as a brand while the acquisition succeeds as a transfer of capability. If the goal was to make Walmart better at ecommerce faster than it could manage alone, retiring the second storefront is consistent with that goal, not evidence against it.',
        ],
      },
      {
        heading: 'The store becomes part of the delivery network',
        paragraphs: [
          'The bigger story is what Walmart did with something it already owned. In November 2023, Walmart said it had 4,700 stores within 10 miles of 90% of the U.S. population, with more than 4,000 of them operating as delivery hubs. It began adding parcel stations to stores, which it described as working like "a mini post office that receives and delivers packages," to move more online orders through its own fleet and build delivery density.',
          'Density is where the economics change. On its February 2024 earnings call, Walmart said it had lowered last-mile store-to-home delivery cost by about 20% in a year, even as it shortened delivery times, with same-day delivery from around 90% of stores. In May 2025 it reported ecommerce profitability in the U.S. and for the global enterprise for the first time. It credited lower net delivery costs, from denser last-mile deliveries and customers paying for faster delivery, along with higher-margin businesses such as advertising and membership.',
          'Walmart\'s FY2026 annual report says substantially all of its stores provide same-day pickup and delivery, and that Walmart+ membership includes unlimited delivery from store. The store has a second job. It still serves the customer who walks in. It is also a node in a delivery network.',
        ],
      },
      {
        heading: 'What the evidence does not show',
        paragraphs: [
          'It would be easy to draw a straight line from Jet to all of this. The evidence does not support one. Parcel stations, lower last-mile costs and ecommerce profitability arrived years after the brand closed, under different leaders, alongside many other investments. Walmart credits Jet with accelerating its strategy, not with building everything that followed.',
          'What the acquisition plausibly did was shorten the time it took Walmart to build an ecommerce operating capability, and put people who knew how to run one inside the company. That is a narrower claim, and a more defensible one.',
        ],
      },
      {
        heading: 'The lesson: buy the capability, retire the brand',
        paragraphs: [
          'Companies sometimes buy an asset, absorb the capability and retire the original brand. Judged by the brand, those deals look like failures. Judged by what the buyer can do afterward that it could not do before, some of them look like money well spent.',
          'That is the frame I use in the documentary, and it applies well beyond Walmart. The thing you acquire, or already own, may be worth less than the capability it lets you build. Walmart already had thousands of stores. The work was teaching them a new job.',
          'Near the end of the video I test the promise as an ordinary customer. It works, and in places it falls short, which is a useful reminder that capability and execution are not the same thing.',
          'The question I would put to any business is the one this story raises: what do you already own or know that could serve customers in a new way?',
        ],
      },
    ],
    takeaways: [
      'Walmart paid roughly $3.3 billion for Jet.com in 2016 and announced in 2020 that it would discontinue the brand.',
      'When it closed Jet.com, Walmart called the acquisition "critical to accelerating our omni strategy."',
      'The deal brought ecommerce leadership and talent into Walmart. Jet\'s founder ran Walmart\'s U.S. ecommerce business.',
      'Walmart later turned stores into delivery hubs, cut last-mile delivery cost and, in 2025, reported ecommerce profitability.',
      'The evidence supports Jet as an accelerator of Walmart\'s ecommerce strategy, not as the source of every later capability.',
    ],
    chapters: [
      { time: '0:00', label: 'The Jet reversal' },
      { time: '0:26', label: 'A network waiting for a new job' },
      { time: '1:23', label: 'Buying digital capability' },
      { time: '2:28', label: 'The brand closes; the strategy continues' },
      { time: '3:35', label: 'Behind the checkout' },
      { time: '4:40', label: 'A capability becomes a service' },
      { time: '5:18', label: 'The economics of a street' },
      { time: '6:42', label: 'The store’s second delivery role' },
      { time: '7:47', label: 'When the numbers change' },
      { time: '9:28', label: 'My own test of the promise' },
      { time: '10:29', label: 'The store’s new job' },
      { time: '11:21', label: 'Credits' },
    ],
    sources: [
      {
        label: 'Walmart Completes Acquisition of Jet.com, Inc.',
        date: 'September 2016',
        href: 'https://corporate.walmart.com/news/2016/09/19/walmart-completes-acquisition-of-jet-com-inc',
      },
      {
        label: 'Walmart Q1 FY2021 earnings release (Jet.com discontinued)',
        date: 'May 2020',
        href: 'https://corporate.walmart.com/content/dam/corporate/documents/newsroom/2020/05/19/walmart-releases-q1-fy21-earnings/q1-fy21-earnings-release.pdf',
      },
      {
        label: 'Walmart Introduces Parcel Stations to Speed Up Delivery',
        date: 'November 2023',
        href: 'https://corporate.walmart.com/news/2023/11/21/walmart-introduces-parcel-stations-to-speed-up-delivery',
      },
      {
        label: 'Walmart Q4 FY2024 earnings call transcript (last-mile delivery cost)',
        date: 'February 2024',
        href: 'https://corporate.walmart.com/content/dam/corporate/documents/newsroom/2024/02/20/walmart-releases-q4-and-fy24-earnings/CORRECTED-TRANSCRIPT-Walmart-Inc-WMT-US-Q4-2024-Earnings-Call.pdf',
      },
      {
        label: 'Walmart Q1 FY2026 earnings call transcript (ecommerce profitability)',
        date: 'May 2025',
        href: 'https://corporate.walmart.com/content/dam/corporate/documents/newsroom/2025/05/15/walmart-releases-q1-fy26-earnings/q1-fy26-earnings-call-transcript.pdf',
      },
      {
        label: 'Walmart FY2026 annual report (Form 10-K)',
        date: 'Fiscal year ended January 31, 2026',
        href: 'https://stock.walmart.com/sec-filings/all-sec-filings/content/0000104169-26-000055/wmt-20260131.htm',
      },
      {
        label: 'Kroger names Nate Faust Executive Vice President and Chief eCommerce Officer',
        date: 'August 2026',
        href: 'https://ir.kroger.com/news/news-details/2026/Kroger-names-Nate-Faust-Executive-Vice-President-and-Chief-eCommerce-Officer/default.aspx',
        note: 'Cited on this page only, for Faust’s Walmart role.',
      },
    ],
    related: [
      {
        href: '/blog/walmart-people-led-tech-powered-operating-model',
        title: 'Walmart Is Showing What People-Led, Tech-Powered Actually Looks Like',
        note: 'How Walmart now runs stores, fulfillment, marketplace, advertising and membership as connected enterprise platforms.',
      },
      {
        href: '/blog/walmart-grocery-ecommerce-growth',
        title: 'Walmart Grocery E-Commerce: 7 Consecutive Quarters Above 20% Growth',
        note: 'The store-as-fulfillment-hub model in Walmart’s grocery numbers.',
      },
      {
        href: '/blog/kroger-ecommerce-profitability',
        title: 'Kroger’s $400M E-Commerce Pivot: Closing Automated Centers for Store-Based Fulfillment',
        note: 'A competitor’s move toward the same store-based model.',
      },
    ],
    credits:
      'Written and narrated by Robert Hu, using an AI-assisted version of his own voice. The thumbnail is an AI-generated conceptual illustration. Independent commentary; no Walmart endorsement. Music, photograph and footage credits are listed in the YouTube description.',
    feature: {
      eyebrow: 'Featured Video',
      title: 'Walmart Bought Jet for $3.3B. Why Shut It Down?',
      description:
        'Walmart shut down Jet.com four years after buying it. The more interesting question is what Walmart kept.',
      cta: 'Watch the documentary',
    },
  },
]

/** Slug of the video shown in the homepage Featured Video slot, or null to hide it. */
export const FEATURED_VIDEO_SLUG: string | null = 'walmart-jet-acquisition'

export function getVideo(slug: string): VideoEntry | undefined {
  return VIDEOS.find((v) => v.slug === slug)
}
