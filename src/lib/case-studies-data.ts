export interface CaseStudyData {
  slug: string
  category: string
  title: string
  resultTeaser: string
  challenge: string
  approach: string
  results: string[]
  keyTakeaway: string
  metaTitle: string
  metaDescription: string
}

export const CASE_STUDIES: CaseStudyData[] = [
  {
    slug: 'bsr-ranking-improvement',
    category: 'Amazon Ranking',
    title: 'Moved a Top Pet Care Brand from BSR #11 to #5 on Amazon',
    resultTeaser: 'BSR improved from #11 to #5',
    challenge:
      'A well-known pet care brand had plateaued at BSR #11 in their main category despite strong reviews and brand recognition. Organic ranking was stagnant and competitors were gaining ground.',
    approach:
      'Conducted a full listing audit focusing on keyword indexing gaps, backend search term optimization, and A+ Content restructuring. Implemented a phased keyword strategy targeting mid-tail terms competitors overlooked. Coordinated listing changes with advertising pushes to boost relevance signals.',
    results: [
      'BSR #11 to #5',
      'Organic keyword rankings increased 40%+ for priority terms',
      'Maintained position through peak season',
    ],
    keyTakeaway:
      "Rankings aren't just about ads. Strategic listing optimization creates compounding organic visibility.",
    metaTitle: 'BSR Ranking Improvement: #11 to #5 on Amazon',
    metaDescription:
      'How strategic listing optimization moved a top pet care brand from BSR #11 to #5 on Amazon. See the full approach and results.',
  },
  {
    slug: 'pdp-excellence-finalist',
    category: 'Content Strategy',
    title: 'Finalist for Amazon PDP Excellence in a Competitive Category',
    resultTeaser: 'Recognized as a top product detail page by Amazon',
    challenge:
      "The brand's product detail pages were functional but unremarkable -- standard images, generic bullet points, templated A+ Content. In a competitive category, the listings weren't converting at their potential.",
    approach:
      'Rebuilt the PDP from scratch with a customer-first content strategy. Rewrote bullets to address buyer objections, redesigned A+ Content with comparison charts and lifestyle context, and optimized image stacks for mobile-first browsing. Every element was designed to reduce purchase hesitation.',
    results: [
      'Finalist for Amazon PDP Excellence Award',
      'Conversion rate improved 18%',
      'Bounce rate decreased significantly',
    ],
    keyTakeaway:
      "Great product pages don't just describe -- they persuade. Every element should reduce friction between interest and purchase.",
    metaTitle: 'Amazon PDP Excellence Finalist Case Study',
    metaDescription:
      'How a customer-first content strategy earned an Amazon PDP Excellence finalist recognition and improved conversion rates by 18%.',
  },
  {
    slug: 'new-product-launch-top-release',
    category: 'Product Launch',
    title: "Launched a New Product to Amazon's Top New Release Badge",
    resultTeaser: "Earned Amazon's Top New Release badge within first 2 weeks",
    challenge:
      'Launching a new SKU in an established category with dominant competitors. No review history, no sales velocity, no organic ranking -- starting from zero.',
    approach:
      'Developed a 90-day launch playbook: pre-launch keyword research and listing optimization, day-one advertising strategy targeting low-competition long-tail keywords, followed by a review acceleration plan using Vine. Staged ad spend increases as organic signals built, rather than blasting budget upfront.',
    results: [
      'Top New Release badge within 14 days',
      'Profitable ACOS by day 30',
      'Organic ranking on 15+ target keywords within 60 days',
    ],
    keyTakeaway:
      "Launches aren't about spending the most -- they're about sequencing the right moves at the right time.",
    metaTitle: "New Product Launch to Amazon's Top New Release",
    metaDescription:
      "How a phased 90-day launch playbook earned Amazon's Top New Release badge in 14 days and achieved profitable ACOS by day 30.",
  },
  {
    slug: 'ad-account-restructuring',
    category: 'Advertising Strategy',
    title: 'Restructuring an Amazon Ad Account from ROAS-Obsessed to Growth-Focused',
    resultTeaser: 'Shifted from 8x ROAS tunnel vision to sustainable profitable growth',
    challenge:
      'The brand was fixated on maintaining an 8x ROAS, which meant only bidding on branded terms and exact-match keywords they already ranked for. Revenue had flatlined because they were only capturing existing demand, not creating new demand.',
    approach:
      "Restructured the entire ad account with a tiered campaign architecture: branded defense (high ROAS), category conquest (moderate ROAS), and discovery campaigns (lower ROAS but new-to-brand customer acquisition). Set blended ACOS targets instead of per-campaign ROAS floors. Introduced Sponsored Brand and Sponsored Display campaigns they'd never used.",
    results: [
      'Total ad revenue increased 35%',
      'New-to-brand customer acquisition up 50%',
      'Blended ACOS stayed within profitability targets',
      'Overall revenue grew while maintaining margins',
    ],
    keyTakeaway:
      "ROAS is a compass, not a destination. The brands that grow are the ones willing to invest in finding new customers, not just retargeting existing ones.",
    metaTitle: 'Amazon Ad Account Restructuring for Growth',
    metaDescription:
      'How restructuring an Amazon ad account from ROAS-obsessed to growth-focused increased ad revenue 35% and new-to-brand acquisition 50%.',
  },
]

export function getCaseStudyBySlug(slug: string): CaseStudyData | undefined {
  return CASE_STUDIES.find((cs) => cs.slug === slug)
}
