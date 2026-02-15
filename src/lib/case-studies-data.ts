export interface ApproachStep {
  label: string
  description: string
}

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
  /** Optional rich fields for expanded case studies */
  brandDescription?: string
  timeline?: string
  challengeExpanded?: string[]
  approachSteps?: ApproachStep[]
}

export const CASE_STUDIES: CaseStudyData[] = [
  {
    slug: 'bsr-ranking-improvement',
    category: 'Amazon Ranking',
    title: 'Moved a Top Pet Care Brand from BSR #11 to #5 on Amazon',
    resultTeaser: 'BSR improved from #11 to #5 in 90 days with +34% organic traffic',
    brandDescription:
      'A mid-size pet care brand selling on Amazon, doing approximately $500K in annual revenue. They had a strong hero product with solid reviews and brand recognition, but growth had stalled.',
    timeline: '90 days',
    challenge:
      'Their hero product had dropped from a consistent top-5 BSR position to #11 in their main category. Organic traffic was declining month over month. Ad costs were rising as they leaned harder on PPC to compensate for lost organic visibility. The listing itself hadn\'t been meaningfully updated in over a year.',
    challengeExpanded: [
      'Their hero product had dropped from a consistent top-5 BSR position to #11 in their main category. It wasn\'t a sudden crash — it was a slow slide over three months as newer competitors entered with better-optimized listings and more aggressive advertising.',
      'Organic traffic was declining month over month. Ad costs were rising as they leaned harder on PPC to compensate for lost organic visibility. ACOS had crept up to 38%, eating into margins on a product that used to be highly profitable on organic sales alone.',
      'The listing itself hadn\'t been meaningfully updated in over a year. The backend search terms were filled with irrelevant keywords from a previous agency. The A+ Content was a wall of text with no visual hierarchy. The bullet points were feature-focused instead of benefit-driven.',
    ],
    approach:
      'Conducted a full listing audit focusing on keyword indexing gaps, backend search term optimization, and A+ Content restructuring. Implemented a phased keyword strategy targeting mid-tail terms competitors overlooked. Coordinated listing changes with advertising pushes to boost relevance signals.',
    approachSteps: [
      {
        label: 'Week 1-2: Full Listing Audit',
        description:
          'I ran a complete keyword indexing audit using Helium 10 and Brand Analytics. Found that the listing was indexed for only 60% of the relevant search terms in the category — competitors were indexed for 85%+. Backend search terms were wasting character limits on branded terms and irrelevant phrases. I also audited the A+ Content, images, and bullet points against the top 5 competitors in the category.',
      },
      {
        label: 'Week 3-4: Listing Rewrites',
        description:
          'Rewrote the title, bullet points, and backend search terms from scratch. Shifted from feature-heavy copy to benefit-driven language that matched how customers actually search. Rebuilt the A+ Content with comparison charts, use-case scenarios, and lifestyle imagery. Every change was designed to improve both conversion rate and keyword indexing.',
      },
      {
        label: 'Week 5-8: PPC Restructure',
        description:
          'Restructured their PPC campaigns to align with the new keyword strategy. Created dedicated campaigns for the mid-tail terms where I saw the biggest organic ranking opportunity. Used aggressive exact-match bids on these terms to build velocity and relevance signals. Set up a tagging system to track which keyword gains were organic vs. paid.',
      },
      {
        label: 'Week 9-12: Monitor & Optimize',
        description:
          'Monitored BSR, keyword rankings, and organic traffic daily. Made incremental adjustments to bids and budgets based on which terms were gaining organic traction. As organic rankings climbed, I gradually reduced PPC spend on those terms and shifted budget to the next tier of opportunity keywords. ACOS dropped from 38% to 24% as organic took over.',
      },
    ],
    results: [
      'BSR improved from #11 to #5',
      'Organic traffic increased 34%',
      'ACOS dropped from 38% to 24%',
      'Monthly revenue increased by $12K',
    ],
    keyTakeaway:
      "Rankings aren't just about ads. The brands that win long-term are the ones that treat listing optimization as a continuous discipline, not a one-time project. Strategic content changes create compounding organic visibility that reduces your dependency on paid traffic.",
    metaTitle: 'BSR Ranking Improvement: #11 to #5 on Amazon',
    metaDescription:
      'How strategic listing optimization and PPC restructuring moved a pet care brand from BSR #11 to #5 on Amazon in 90 days, with a 34% increase in organic traffic.',
  },
  {
    slug: 'pdp-excellence-finalist',
    category: 'Content Strategy',
    title: 'Finalist for Amazon PDP Excellence in a Competitive Category',
    resultTeaser: 'PDP Excellence Finalist with 22% conversion lift across 15 ASINs',
    brandDescription:
      'A home goods brand selling on Amazon with approximately $800K in annual revenue. They had a solid product line but their detail pages looked like they were built in 2019 — basic images, thin bullet points, no A+ Content on half their catalog.',
    timeline: '60 days',
    challenge:
      "Amazon's internal merchandising team flagged their category for a PDP Excellence review. The brand's listings were functional but unremarkable — losing conversions to competitors with richer content and more complete A+ pages.",
    challengeExpanded: [
      "Amazon's internal merchandising team flagged their category for a PDP Excellence review. The brand's listings were functional but unremarkable. They were losing conversions to competitors with richer content, better imagery, and more complete A+ pages.",
      "The brand owner knew the listings needed work but didn't know what \"good\" looked like at the platform level. Half the catalog had no A+ Content at all. The bullet points read like spec sheets instead of selling points. The image stacks were product-on-white with no lifestyle context or infographics.",
    ],
    approach:
      'Audited the full catalog against PDP Excellence criteria, prioritized the top 15 ASINs, rebuilt every listing with customer-first content, and submitted for Amazon\'s review cycle.',
    approachSteps: [
      {
        label: 'Week 1: Full Catalog Audit',
        description:
          "I audited their full catalog against Amazon's PDP Excellence criteria — image quality, title structure, bullet point depth, A+ Content completeness, video presence, and review quality. Scored each ASIN on a 100-point rubric so we could see exactly where the gaps were.",
      },
      {
        label: 'Week 2-3: Prioritize & Plan',
        description:
          'Prioritized the top 15 ASINs by revenue contribution. Created a scoring rubric so the brand owner could see exactly where each listing fell short. The average score across the 15 ASINs was 42 out of 100 — the category leaders were scoring 80+.',
      },
      {
        label: 'Week 3-5: Rebuild Listings',
        description:
          'Rewrote all 15 listings from scratch. Shot new lifestyle and infographic images. Built out A+ Content with comparison charts, brand story modules, and lifestyle imagery that matched the category leaders. Every bullet point was rewritten to address specific buyer objections instead of listing features.',
      },
      {
        label: 'Week 6-8: Submit & Monitor',
        description:
          "Submitted for Amazon's PDP Excellence review cycle. Monitored indexing and conversion rate changes as new content went live. Made minor adjustments based on early conversion data — swapped two hero images and reordered bullet points on three listings based on what was converting best.",
      },
    ],
    results: [
      'PDP Excellence Finalist by Amazon',
      'Conversion rate increased 22% across 15 ASINs',
      'Return rate decreased 15%',
      'Scoring rubric adopted as internal standard',
    ],
    keyTakeaway:
      "Great product pages don't just describe — they persuade. The scoring rubric I built for this project became the brand's internal standard for every new product launch. That's the real win: not just better listings today, but a system that keeps them excellent over time.",
    metaTitle: 'Amazon PDP Excellence Finalist Case Study',
    metaDescription:
      'How rebuilding 15 product listings earned an Amazon PDP Excellence finalist recognition, improved conversion rates 22%, and reduced returns 15%.',
  },
  {
    slug: 'new-product-launch-top-release',
    category: 'Product Launch',
    title: "Launched a New Product to Amazon's Top New Release Badge",
    resultTeaser: "Top New Release badge in 14 days, first month revenue exceeded 90-day projection by 40%",
    brandDescription:
      'A supplements brand launching their first product on Amazon. The founder had experience in DTC but had never sold on the marketplace. Approximately $300K in total business revenue, with Amazon as a new channel.',
    timeline: '14 days to Top New Release badge',
    challenge:
      'Launching a new ASIN on Amazon with zero reviews, zero sales history, and no organic ranking in a category dominated by established brands with thousands of reviews and aggressive PPC budgets.',
    challengeExpanded: [
      'Launching a new ASIN on Amazon with zero reviews, zero sales history, and no organic ranking. The category was competitive — dominated by established brands with thousands of reviews and aggressive PPC budgets.',
      "The founder had a good product and strong DTC branding, but no marketplace launch playbook. Their instinct was to throw money at PPC on day one and hope for the best. That's a recipe for burning cash with nothing to show for it.",
    ],
    approach:
      'Built a sequenced launch plan — listing-first, then PPC, then organic momentum. Every phase was designed to compound on the previous one.',
    approachSteps: [
      {
        label: 'Pre-Launch (2 Weeks Before Go-Live)',
        description:
          'Built the listing from scratch — keyword research, competitive analysis, title and bullet optimization, A+ Content, and a full image suite (7 images including lifestyle, infographic, and size comparison). Set up the brand story module and enrolled in Amazon Vine for early reviews. Every element was ready before spending a single dollar on ads.',
      },
      {
        label: 'Day 1-3: Launch PPC',
        description:
          'Launched PPC campaigns targeting long-tail keywords with lower competition. Used exact match at aggressive bids to establish initial velocity. Set up auto campaigns to discover converting search terms. The goal wasn\'t profitability yet — it was velocity and data collection.',
      },
      {
        label: 'Day 4-7: Optimize & Shift',
        description:
          'Monitored hourly. Adjusted bids based on early conversion data. Shifted budget toward the 3 search terms driving the best conversion rates. Organic rank started climbing on 2 target keywords. Negated 15+ search terms that were burning budget with no conversions.',
      },
      {
        label: 'Day 8-14: Organic Momentum',
        description:
          'Organic momentum kicked in. Reduced PPC spend as organic traffic grew. First Vine reviews came in (4.5+ star average). Amazon awarded the Top New Release badge on day 12. By day 14, organic was driving more traffic than paid.',
      },
    ],
    results: [
      'Top New Release badge in 14 days',
      'Page 1 for 4 target keywords in 3 weeks',
      '3.2x ROAS on launch PPC spend',
      'First month revenue exceeded 90-day projection by 40%',
    ],
    keyTakeaway:
      "Launches aren't about spending the most — they're about sequencing the right moves at the right time. The brands that win on Amazon don't just launch products. They launch systems.",
    metaTitle: "New Product Launch to Amazon's Top New Release",
    metaDescription:
      "How a sequenced launch strategy earned Amazon's Top New Release badge in 14 days and exceeded the founder's 90-day revenue projection by 40%.",
  },
  {
    slug: 'ad-account-restructuring',
    category: 'Advertising Strategy',
    title: 'Restructuring an Amazon Ad Account from ROAS-Obsessed to Growth-Focused',
    resultTeaser: 'Monthly revenue up 28% with new-to-brand customers jumping from 18% to 41%',
    brandDescription:
      'A beauty/personal care brand doing approximately $1.2M on Amazon. They had been working with a PPC agency for over a year and were spending $15K/month on ads. The owner was obsessed with ROAS as the primary metric and the agency optimized accordingly — high ROAS, but revenue had plateaued.',
    timeline: '120 days',
    challenge:
      'The brand was fixated on maintaining high ROAS, which meant only bidding on branded terms and exact-match keywords they already ranked for. Revenue had flatlined for 3 consecutive quarters.',
    challengeExpanded: [
      "The agency had built a \"safe\" account structure: tight keyword targeting, aggressive negation of anything that didn't convert immediately, and low bids on anything exploratory. ROAS looked great on paper (5.8x) but total revenue was flat for 3 consecutive quarters.",
      "The brand was essentially paying for ads that only captured customers who were already going to buy. 70% of ad spend was going to branded and exact-match terms where the brand already ranked #1 organically — they were paying for clicks they would have gotten for free. No new customer acquisition, no category expansion, no market share growth.",
    ],
    approach:
      'Rebuilt the account architecture from scratch with a three-tier campaign structure designed to balance defense, core growth, and new customer acquisition.',
    approachSteps: [
      {
        label: 'Week 1-2: Full Account Audit',
        description:
          "I mapped every campaign to its strategic purpose (or lack thereof). Found that 70% of ad spend was going to branded and exact-match terms where the brand already ranked #1 organically — they were paying for clicks they would have gotten for free. The agency's \"optimization\" was actually just cutting anything that wasn't already converting, which meant zero growth.",
      },
      {
        label: 'Week 3-4: Rebuild Architecture',
        description:
          'Rebuilt the account architecture from scratch. Created three campaign tiers: Defense (branded terms, low bids, catch what organic misses), Core (high-intent category keywords, competitive bids), and Growth (category-adjacent terms, competitor targeting, new audience discovery). Each tier had its own ACOS target and success metrics.',
      },
      {
        label: 'Month 2: Shift Budget & Manage Expectations',
        description:
          'Shifted 40% of budget from Defense to Core and Growth. ROAS dropped from 5.8x to 3.9x in the first two weeks — this was expected and planned for. I communicated weekly with the brand owner to maintain confidence during the transition. Showed them that total revenue was climbing even as ROAS dipped.',
      },
      {
        label: 'Month 3-4: Compound & Scale',
        description:
          'Core campaigns matured. Growth campaigns identified 12 new converting keyword clusters the previous agency had never tested. Total revenue started climbing while ROAS stabilized at 4.2x. Organic rankings improved across the board as increased sales velocity lifted the brand\'s relevance signals.',
      },
    ],
    results: [
      'Monthly revenue increased 28% ($14K/mo additional)',
      'New-to-brand customers jumped from 18% to 41%',
      'TACoS improved from 12% to 9.5%',
      'ROAS settled at 4.2x on higher total spend',
    ],
    keyTakeaway:
      "ROAS is a compass, not a destination. The brand owner shifted their mindset from \"protect ROAS\" to \"grow profitably\" — and that was the real win. The brands that grow are the ones willing to invest in finding new customers, not just retargeting existing ones.",
    metaTitle: 'Amazon Ad Account Restructuring for Growth',
    metaDescription:
      'How restructuring an Amazon ad account from ROAS-obsessed to growth-focused increased monthly revenue 28% and grew new-to-brand customers from 18% to 41%.',
  },
]

export function getCaseStudyBySlug(slug: string): CaseStudyData | undefined {
  return CASE_STUDIES.find((cs) => cs.slug === slug)
}
