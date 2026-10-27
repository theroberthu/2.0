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

export const VIDEO_TOPICS = ['Retail strategy', 'Delivery and logistics', 'Manufacturing', 'AI in practice', 'Energy and infrastructure'] as const

export type VideoTopic = (typeof VIDEO_TOPICS)[number]

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
  /** Topic label for the /videos index (cards and the topics summary). */
  topic: VideoTopic
  /** Short subject name used in the /videos topics summary. */
  subject: string
  /** Local copy of the YouTube thumbnail, used for the page, cards and OG. */
  thumbnail: string
  thumbnailAlt: string
  sections: VideoSection[]
  takeaways: string[]
  chapters: VideoChapter[]
  sources: VideoSource[]
  /** One-line intro above the source list. */
  sourcesNote: string
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
    slug: 'tomra-bottle-recycling-business',
    youtubeId: 'ZdP0T80z2Cw',
    youtubeTitle: 'Why Your Empty Bottle Is Big Business for TOMRA',
    h1: 'Why Your Empty Bottle Is Big Business for TOMRA',
    seoTitle: 'Why Your Empty Bottle Is Big Business for TOMRA',
    metaDescription:
      'TOMRA turns bottle returns and AI sorting into a business. What its machines can decide, what they cannot, and why sorted material still needs a buyer.',
    dek: 'Collecting a bottle and making money from it are different jobs. Machines can identify and separate material. Someone still has to want to buy what comes out.',
    uploadDate: '2026-10-26T16:00:37-07:00',
    duration: 'PT5M44S',
    durationLabel: '5 min 44 sec',
    topic: 'Energy and infrastructure',
    subject: 'TOMRA recycling',
    thumbnail: '/images/videos/tomra-bottle-recycling-business.jpg',
    thumbnailAlt: 'Video thumbnail: illustrative artwork of a plastic bottle inside a lit sorting machine under the words Your Trash. Their Business.',
    sections: [
      {
        paragraphs: [
          'You paid for the bottle and finished the drink. Inside a return machine, it now has to earn a second life: identified, separated and kept useful enough for another buyer.',
          'The Norwegian company behind many of those machines is TOMRA. In the third quarter of 2026 it reported revenue of EUR 366 million, roughly $410 million, across its Collection, Recycling and Food divisions. That is group revenue, not revenue from bottles or from AI alone. And there is a big difference between collecting something and making money from it.',
        ],
      },
      {
        heading: 'Who gets paid',
        paragraphs: [
          'At a supermarket, you feed an eligible container into a reverse vending machine and get your deposit back. That refund is your own money returning to you, not TOMRA’s profit on the bottle. TOMRA’s Collection business develops, sells, leases and services the machines and the data systems behind them, and its Material Recovery operation collects and processes empty containers for beverage producers on the US East Coast and in Canada.',
          'The idea predates the AI boom. In 1972, brothers Petter and Tore Planke built a machine in a shed in Asker, Norway, for a grocer who wanted an easier way to take back empty bottles. A supermarket headache became an international equipment business.',
          'The next opportunity is in the UK. England and Northern Ireland’s deposit scheme comes into force on October 1, 2027. On October 21, 2026, TOMRA said it had signed a letter of intent to become preferred supplier to an unnamed UK retail chain, covering a potential 2,000 machine installations, with deliveries planned from 2027. That is a potential deployment, not a completed rollout, and the machines have to keep working long after opening day.',
        ],
      },
      {
        heading: 'Inside the sorting decision',
        paragraphs: [
          'The second route starts with mixed waste, where there is no tidy queue of eligible bottles. The operator has to turn a mixture into separate streams someone can process.',
          'Near Oslo, a facility called ROAF gives a real example. TOMRA’s 2022 customer account described 16 AUTOSORT optical sorters processing 40 tonnes of waste an hour, with separated plastics and paper sold to European processors. It was a whole plant built with other partners, including the plant builder STADLER, not 16 machines doing everything alone. It was also an older installation, not evidence of the newest AI. The commercial question was the same: whether the mixture could become something a buyer wanted.',
        ],
      },
      {
        heading: 'What newer AI adds',
        paragraphs: [
          'An operator wants to recover useful material without letting unwanted material spoil the output. Reject too much, and value leaves with the waste. And plastic is not one material with one destination.',
          'TOMRA’s optical systems use sensors, including near-infrared and visible light, to tell materials apart. Its newer GAINnext system adds deep-learning visual classification for harder tasks, such as separating food-contact PET bottles from non-food containers like detergent bottles. The question becomes more specific than whether something is plastic. It becomes whether this is the packaging a particular output needs.',
          'TOMRA says the technology improves recovery and purity, without giving a universal figure, and results depend on the material and the job. Sorting also does not produce finished food-safe recycled plastic; further processing still matters. AI can make a finer distinction, and its value still has to show up in what the plant can sell.',
        ],
      },
      {
        heading: 'The costs behind the machine',
        paragraphs: [
          'There is no honest universal dollar value for a better-sorted pile. It depends on the buyer’s specification, the volume recovered, the selling price and the cost of getting there, including equipment, energy, maintenance and the rest of the plant. Recovering more material helps only if the extra value survives those costs, the same arithmetic behind [why AI that works doesn’t always make a business more money](/videos/ai-business-roi-payback).',
          'TOMRA’s own latest results contain that tension. Group revenue grew 20%, while the company still described the waste recovery and plastics recycling markets as soft. Its Horizon segment reported adjusted EBITA of minus EUR 1.5 million, about $1.7 million, mainly because of higher disposal costs in its Feedstock business. That is one newer segment, not a loss for the whole group, but it is a useful reality check from inside the company: waste does not become profitable because someone calls it a resource.',
        ],
      },
      {
        heading: 'Who will buy the output',
        paragraphs: [
          'Selling a machine and operating a material business expose a company to different problems. For the equipment customer, the test is actual output and operating cost. For TOMRA, repeat business depends on whether customers can justify the next investment.',
          'Back at the bottle, the industry sees a series of decisions: collect it, identify it, separate it, process it and find a buyer. Technology can improve those decisions. It cannot skip them.',
          'Would you use a bottle-return machine if one were nearby?',
        ],
      },
    ],
    takeaways: [
      'TOMRA reported Q3 2026 revenue of EUR 366 million, about $410 million, up 20%, across Collection, Recycling and Food. It is not revenue from bottles or AI alone.',
      'A deposit refund is the customer’s own money returning, not TOMRA’s profit. TOMRA sells, leases and services the machines.',
      'TOMRA’s UK deal is a letter of intent for a potential 2,000 installations, with deliveries planned from 2027 as England and Northern Ireland’s deposit scheme begins.',
      'GAINnext adds deep-learning classification, such as separating food-contact PET from detergent bottles, but sorting still needs further processing and a buyer.',
      'TOMRA described waste recovery and plastics recycling markets as soft, and its Horizon segment lost about $1.7 million in the quarter on higher disposal costs.',
    ],
    chapters: [
      { time: '0:00', label: 'The business after the bottle' },
      { time: '0:43', label: 'Who gets paid?' },
      { time: '1:54', label: 'Inside the sorting decision' },
      { time: '2:41', label: 'What newer AI adds' },
      { time: '3:42', label: 'The costs behind the machine' },
      { time: '4:49', label: 'Who will buy the output?' },
    ],
    sources: [
      {
        label: 'TOMRA Systems ASA third quarter 2026 report',
        date: 'October 23, 2026',
        href: 'https://www.tomra.com/-/media/project/tomra/tomra/investor-relations/quarterly-results-files/2026/3q/tomra-2026-q3-report.pdf',
      },
      {
        label: 'TOMRA appointed preferred supplier to leading retail chain in UK',
        date: 'October 21, 2026',
        href: 'https://news.cision.com/tomra-systems-asa/r/tomra--appointed-preferred-supplier-to-leading-retail-chain-in-uk,c4413419',
      },
      {
        label: 'ROAF customer story (TOMRA)',
        date: 'August 2022',
        href: 'https://www.tomra.com/waste-metal-recycling/media-center/customer-stories/roaf',
      },
      {
        label: 'GAINnext product information (TOMRA)',
        date: 'Checked October 27, 2026',
        href: 'https://www.tomra.com/waste-metal-recycling/products/machines/gainnext',
      },
      {
        label: 'TOMRA history',
        date: 'TOMRA',
        href: 'https://www.tomra.com/about-tomra/our-history',
      },
      {
        label: 'The Deposit Scheme for Drinks Containers (England and Northern Ireland) Regulations 2025',
        date: 'In force October 1, 2027',
        href: 'https://www.legislation.gov.uk/uksi/2025/67/made',
      },
    ],
    sourcesNote:
      'The sources cited in the video. Dollar figures are approximate conversions at EUR 1 = USD 1.1193. The Horizon loss is adjusted EBITA for one segment, not TOMRA Group’s net result. ROAF’s 40 tonnes an hour is reported plant capacity, not a measured AI result or a verified customer payback.',
    related: [
      {
        href: '/blog/noibu-ai-agents-closed-loop-ecommerce',
        title: 'AI Gets Interesting When It Has to Prove the Change Worked',
        note: 'A finer decision matters only if the result it produces is measurably better.',
      },
      {
        href: '/blog/ai-wont-fix-broken-work',
        title: 'AI Won’t Fix Broken Work',
        note: 'Technology can improve each step of a process. It cannot skip the steps.',
      },
    ],
    credits:
      'Written by Robert Hu; narration uses an authorized AI clone of his voice. Archival footage and press images from the TOMRA newsroom are used in independent editorial reporting; process footage is not presented as a current GAINnext demonstration or footage of the ROAF site. Packaging illustrations are explanatory, not live tests, and country maps use public-domain Natural Earth data. The thumbnail is edited illustrative artwork derived from TOMRA process imagery. Independent commentary; no endorsement implied. Music and sound credits are listed in the YouTube description.',
    feature: {
      eyebrow: 'Featured Video',
      title: 'Why Your Empty Bottle Is Big Business for TOMRA',
      description:
        'You paid for the drink. Why does someone else want the empty bottle? Follow TOMRA from supermarket return machines to AI sorting lines, and the buyer the output still needs.',
      cta: 'Watch the video',
    },
  },
  {
    slug: 'ikea-billie-ai-reskilling',
    youtubeId: 'I0YKeY9Of2M',
    youtubeTitle: 'IKEA’s AI Saved $14 Million. What Happened to Its People?',
    h1: 'IKEA’s Billie Chatbot: AI Savings and 8,500 Reskilled Workers',
    seoTitle: 'IKEA’s Billie Chatbot: AI Savings and 8,500 Reskilled Workers',
    metaDescription:
      'IKEA’s largest retailer says its Billie chatbot saved about $14 million while 8,500 call center workers learned new skills. What the numbers do and don’t show.',
    dek: 'A chatbot took the routine questions. The more interesting decision was what IKEA’s people would do next, and whether customers needed help with the room, not just the furniture.',
    uploadDate: '2026-10-25T16:00:33-07:00',
    duration: 'PT4M55S',
    durationLabel: '4 min 55 sec',
    topic: 'AI in practice',
    subject: 'IKEA',
    thumbnail: '/images/videos/ikea-billie-ai-reskilling.jpg',
    thumbnailAlt: 'Video thumbnail: illustrative artwork of hands sketching a room floor plan beside fabric swatches, under the IKEA logo and the words $14M Saved, Then What?',
    sections: [
      {
        paragraphs: [
          'Ingka Group, the largest IKEA retailer, says its AI chatbot Billie saved nearly €13 million by June 2023, roughly $14 million at the exchange rate on the day it announced the figure. The more interesting part is what Ingka did with its people. While Billie handled simpler enquiries, the company said it had reskilled 8,500 call center co-workers, including in remote interior design.',
          'That makes a good corporate headline. The useful question is what the work actually involves.',
        ],
      },
      {
        heading: 'Watch the table move',
        paragraphs: [
          'In IKEA’s own room film, furniture on wheels makes the same space more flexible. It is a simple idea until that room has to be an office, a dining room and a spare bedroom. A sofa’s dimensions tell you whether it fits against the wall. They don’t tell you whether you can live around it, with someone working from the living room, someone else watching television, a guest who needs a bed and a door that still has to open. For a furniture retailer, helping with that decision could be valuable.',
        ],
      },
      {
        heading: 'What Billie handled',
        paragraphs: [
          'Ingka, which says it operates 411 IKEA stores and accounts for around 87% of IKEA sales, rolled Billie out in its 2021 financial year. By June 2023, it said Billie had resolved about 47% of the customer enquiries it received between 2021 and 2023.',
          'The savings figure is cumulative and historical, not $14 million of new profit every year. It is also company-reported, not an independently verified return on the investment.',
        ],
      },
      {
        heading: 'New skills, several roles',
        paragraphs: [
          'Ingka said the 8,500 co-workers built skills in remote interior design, digital sales, relationship building and handling complex customer problems. That does not mean every one of them became a designer. It means the company was building skills for work beyond the routine answer.',
          'Two questions show the difference. Whether a cabinet is available needs a dependable answer. Which cabinet fits an awkward corner may need someone who asks a better question.',
        ],
      },
      {
        heading: 'A plan and a person',
        paragraphs: [
          'IKEA US launched its Interior Design Service in April 2023, at $99 for consumers. It starts with a questionnaire about the customer’s wish list, followed by three virtual one-on-one sessions with a designer, and produces a mood board, floor plan, 3D renderings and a curated product list. A wish list becomes a plan someone can actually shop from.',
          'The practical choices are where that help earns its place. The dining table also has to be a desk, the sofa has to become a spare bed, and storage can’t swallow the space it is meant to save. The expensive mistake is buying all the right-looking things and discovering they don’t work together.',
        ],
      },
      {
        heading: 'What a visual planner can do',
        paragraphs: [
          'IKEA Kreativ lets customers place furniture in scale-accurate rooms, including a scan of their own space, and moving a table on screen makes a layout easier to test. It doesn’t show whether that layout suits a household’s everyday life.',
          'It is also a different tool from Billie. The chatbot handles enquiries, Kreativ visualizes the space, and an advisor helps someone work through the decision. The opportunity for IKEA is the combination: moving a customer from browsing furniture to choosing what to buy.',
        ],
      },
      {
        heading: 'The $100 million distinction',
        paragraphs: [
          'IKEA US reported that its remote channel, covering phone, chat, social media and specialized services, passed $100 million in sales for the first time in its 2025 financial year, and that more than 73,000 customers connected with its planning experts.',
          'Those figures show scale. They don’t show that Billie generated those sales, or that every planning conversation became an order. Sales are not profit either, and the published figures don’t give a full return after software, training and service costs. It is the same distinction behind [why AI that works doesn’t always make a business more money](/videos/ai-business-roi-payback).',
        ],
      },
      {
        heading: 'The limits of the success story',
        paragraphs: [
          'This is not a promise that nobody loses a job. In March 2026, Ingka said 800 roles may become redundant within its group functions as part of a simpler organizational structure. It did not identify Billie or AI as the cause.',
          'What makes the case interesting is the choice to develop people’s skills alongside the automation. A company can answer a question faster and still leave the customer stuck at the next decision. The bigger opportunity may be helping them make it.',
        ],
      },
      {
        heading: 'The next customer decision',
        paragraphs: [
          'The floor in that crowded room hasn’t grown, but a better plan can make it much more useful. For any business buying AI, the worthwhile question is what its people can help customers do next.',
          'What would you want a real person to help with before buying a room full of furniture?',
        ],
      },
    ],
    takeaways: [
      'Ingka says Billie resolved about 47% of the enquiries it received from 2021 to 2023 and saved nearly €13 million, roughly $14 million, cumulatively. That is not annual profit.',
      'Ingka reskilled 8,500 call center co-workers in remote interior design, digital sales and complex customer problems. Not all of them became designers.',
      'IKEA US’s design service pairs a questionnaire and three virtual sessions with a floor plan, 3D renderings and a product list.',
      'IKEA US passed $100 million in remote sales in FY25, with more than 73,000 customers meeting planning experts. That is channel revenue, not profit attributable to Billie.',
      'Ingka’s March 2026 restructuring put 800 group-function roles at risk. The company did not identify Billie as the cause.',
    ],
    chapters: [
      { time: '0:00', label: 'The $14 million question' },
      { time: '0:21', label: 'Watch the table move' },
      { time: '1:09', label: 'What Billie handled' },
      { time: '1:37', label: 'New skills, several roles' },
      { time: '2:09', label: 'A plan and a person' },
      { time: '3:03', label: 'What a visual planner can do' },
      { time: '3:32', label: 'The $100 million distinction' },
      { time: '4:03', label: 'The limits of the success story' },
      { time: '4:29', label: 'The next customer decision' },
    ],
    sources: [
      {
        label: 'AI and remote selling bring IKEA design expertise to the many (Ingka Group)',
        date: 'June 29, 2023',
        href: 'https://www.ingka.com/newsroom/ai-and-remote-selling-bring-ikea-design-expertise-to-the-many/',
      },
      {
        label: 'Euro foreign exchange reference rate, US dollar (European Central Bank)',
        date: 'June 29, 2023: 1.0938',
        href: 'https://data.ecb.europa.eu/data/datasets/EXR/EXR.D.USD.EUR.SP00.A',
        note: 'Used to convert nearly €13 million to roughly $14 million.',
      },
      {
        label: 'Ingka Group FAQ',
        date: 'As of August 31, 2025',
        href: 'https://www.ingka.com/newsroom/faq/',
        note: 'Store count and share of IKEA sales.',
      },
      {
        label: 'IKEA U.S. launches IKEA Interior Design Service',
        date: 'April 11, 2023',
        href: 'https://www.ikea.com/us/en/newsroom/range-news/outdoor-news-2023-pubc6cb7340/',
      },
      {
        label: 'IKEA planners and IKEA Kreativ (IKEA US)',
        date: 'Checked October 26, 2026',
        href: 'https://www.ikea.com/us/en/planners/',
      },
      {
        label: 'IKEA US FY25 Annual Summary (remote sales and planning sections)',
        date: 'Fiscal year 2025',
        href: 'https://www.ikea.com/us/en/files/pdf/57/19/5719f2e1/us_annual_summary_fy25.pdf',
      },
      {
        label: 'Creating a simpler, more resilient IKEA for the future (Ingka Group)',
        date: 'March 19, 2026',
        href: 'https://www.ingka.com/newsroom/creating-a-simpler-more-resilient-ikea-for-the-future/',
      },
    ],
    sourcesNote:
      'The sources cited in the video, plus Ingka’s FAQ for its store count and the ECB rate behind the dollar conversion. Savings are company-reported and cumulative. Remote sales are channel revenue, not profit or revenue attributable to Billie, and Ingka did not link its 2026 restructuring to Billie.',
    related: [
      {
        href: '/blog/walmart-people-led-tech-powered-operating-model',
        title: 'Walmart Is Showing What People-Led, Tech-Powered Actually Looks Like',
        note: 'Another retailer pairing shared technology with people who make the customer decisions.',
      },
      {
        href: '/blog/albertsons-ai-planning-task-depth',
        title: 'Albertsons’ AI Results Suggest the Real Value Is in Planning, Not Search',
        note: 'Helping a customer plan creates more value than answering where an item is.',
      },
      {
        href: '/blog/ai-wont-fix-broken-work',
        title: 'AI Won’t Fix Broken Work',
        note: 'Faster routine answers matter less than redesigning the harder work around them.',
      },
    ],
    credits:
      'Written by Robert Hu; narration uses an authorized AI clone of his voice. Limited IKEA USA room-film and IKEA Kreativ demonstration excerpts, plus an IKEA US promotional photograph, are analyzed as independent commentary, not under a licence or with company endorsement. Supporting Pexels footage is illustrative, and the people shown are not represented as IKEA employees or customers. The thumbnail is illustrative cover artwork, not a photograph of an actual IKEA employee, consultation or event. Music and sound credits are listed in the YouTube description.',
    feature: {
      eyebrow: 'Featured Video',
      title: 'IKEA’s AI Saved $14 Million. What Happened to Its People?',
      description:
        'IKEA’s largest retailer says its Billie chatbot saved about $14 million while 8,500 call center workers learned new skills. Follow the people, the planning tools and the money.',
      cta: 'Watch the video',
    },
  },
  {
    slug: 'ai-business-roi-payback',
    youtubeId: 'YcuKF1APDBU',
    youtubeTitle: 'AI Works. So Why Doesn’t the Business Make More Money?',
    h1: 'Why AI That Works Doesn’t Always Make a Business More Money',
    seoTitle: 'Why AI That Works Doesn’t Always Make a Business More Money',
    metaDescription:
      'A robot can pick the package and a chatbot can answer, while the business still loses money. Follow a fictional $60,000 AI investment from demo to payback.',
    dek: 'An impressive AI result is the start of the case, not the end of it. The business still has to count the comparison, the running costs and each dollar once.',
    uploadDate: '2026-10-24T16:00:01-07:00',
    duration: 'PT13M26S',
    durationLabel: '13 min 26 sec',
    topic: 'AI in practice',
    subject: 'AI return on investment',
    thumbnail: '/images/videos/ai-business-roi-payback.jpg',
    thumbnailAlt: 'Video thumbnail: illustrative artwork of a robotic gripper lifting a cardboard box in a warehouse under the words AI Works. Does It Pay?',
    sections: [
      {
        paragraphs: [
          'I paid a few hundred dollars for a product, then learned it was backordered. The delay ran past four weeks. The checkout worked perfectly. The product was not there. I do not know what went wrong inside that company, and I cannot say a better AI system would have prevented it. But every retailer faces a version of that gamble. Buy too little and customers wait. Buy too much and the money sits on a shelf.',
          'This documentary follows what has to happen between an impressive AI demonstration and a business that actually works better, then follows the money through a fictional $60,000 investment. The store and its numbers are illustrative planning assumptions, not a supplier quote or a company’s measured return.',
        ],
      },
      {
        heading: 'What the sales report misses',
        paragraphs: [
          'In a 2022 paper, Amazon-affiliated researchers reported a live test of an AI buying system across 10,000 products over 26 weeks. It reduced inventory by about 12%, measured in units, and the revenue comparison showed no statistically significant change. That is a promising result. It is not a profit or cash-savings figure, and it does not show the full cost of running the system.',
          'The sales record has its own blind spot. If a store sells out after 50 orders, its record says 50 sold, even if demand was 100. A planner who reads every stockout as weak demand will order too little again. Part of the researchers’ work was estimating demand that could not be observed directly. Better data, here, means understanding what the sales record leaves out.',
          'Timing matters too. A shipment arriving next Tuesday cannot rescue a promise due on Friday. A second supplier with a higher unit price may be the better decision when delivery risk changes, and that takes a cost comparison rather than a default to the cheapest option.',
        ],
      },
      {
        heading: 'The awkward plastic bag',
        paragraphs: [
          'Once the right item arrives, someone or something still has to pick it up. A bagged shirt can fold, reflect light and sit differently on a conveyor, and each change affects where to grip and how to move. In October 2026, ABB added AI Robot Trainer to its Fashion Inductor module and said it reduces engineering and commissioning effort by up to 75%, with retraining as products and conditions change. That is a claim about deploying and adjusting the application, not about a warehouse’s total labor bill, and a demonstration reel cannot show a customer’s return.',
          'The useful questions are what the system does with an unfamiliar package, whether it handles it, flags uncertainty or sends it to a person, and how long the correction takes. A faster stage can also just build a longer queue in front of the next one. The measure that matters is correct orders reaching dispatch across a whole shift, with damaged items and exceptions counted.',
        ],
      },
      {
        heading: 'The reply is not the result',
        paragraphs: [
          'A fast answer helps only if it answers the real question. A customer asking whether an item will arrive by Friday needs a reliable order status, a realistic estimate and a next step, not a fluent sentence about excellent service.',
          'A retail field-experiment preprint, updated in 2026, reported a 16.3% sales increase from a pre-sale chatbot, in experiments run in 2023 and 2024. The comparison was a message saying live support was unavailable. Against human replies, the chatbot showed no statistically significant sales difference, and AI with human escalation produced a larger lift against unavailable support. The investment story depends on the comparison.',
          'A reply is also not a completed change. If a person authorizes a cancellation, the order record still has to change, the change has to be checked and the customer has to receive confirmation. A conversation marked closed can look efficient while the customer opens a second one about the same problem.',
        ],
      },
      {
        heading: 'Follow the bill',
        paragraphs: [
          'Klarna reported that its AI customer-service assistant delivered approximately $59 million in cost savings in 2025. The same annual report shows customer service and operations expenses of $207 million, up from $203 million, with volumes up substantially. Those are a management savings estimate and an expense line. A cost category can rise while a company avoids spending it would otherwise have added, and neither figure isolates the profit from AI.',
          'The fictional proposal counts two kinds of value separately: $48,000 a year of external spending that actually stops, and 3,000 genuinely additional orders. An item costs $20 and sells for $50. After $18 of fulfillment, payment fees and expected returns, each extra order contributes $12, or $36,000 a year. Counting the full $50 sale would overstate the benefit.',
          'That makes $84,000 of annual benefit. Running costs of $36,000 a year for software, support and paid monitoring hours bring the net benefit to $48,000. Against $60,000 up front, the project is still $12,000 behind after a first full year. At $4,000 a month, simple payback is 15 months, if the benefit starts immediately and holds. Halve the benefits while running costs stay the same, and the net benefit falls to $6,000 a year, or 120 months to recover the setup cost. That is a stress calculation, not a forecast.',
          'Two more rules. Freed employee time is capacity, not cash, unless the wage bill actually changes, and it cannot be counted again if the avoided overtime already includes it. Cutting inventory from $100,000 to $80,000 releases $20,000 once. It does not become $20,000 of profit every year. Each dollar gets counted once, the same discipline as asking who pays for [Walmart’s $0 drone delivery](/videos/walmart-wing-drone-delivery-economics).',
        ],
      },
      {
        heading: 'The Tuesday after the launch',
        paragraphs: [
          'Suppose a supplier pushes a shipment back several days. A purchasing assistant, an availability page and a support assistant can each work as designed while sharing the same outdated arrival date, and the customer gets a confident wrong answer. The business has to decide which status is authoritative, how quickly it updates and what happens when information is missing.',
          'Testing needs the same discipline. A launch during a sale, with discounts and advertising changing at the same time, cannot be credited to the assistant from a week-over-week comparison. A better test gives similar customers different versions of the service in the same period and tracks what else changed. Then inspect the failures. An average can hide customers who repeatedly get poor answers, a fast first response can hide a slow escalation queue, and lower stock can look good until the missing items are the urgent ones.',
        ],
      },
      {
        heading: 'The promise earns its technology',
        paragraphs: [
          'The buying system, the robot and the assistant do different jobs, and their evidence cannot be rolled into one claim that AI works. Start with the job causing the damage: a buying decision, accurate availability or a delivery answer.',
          'What I wanted from that retailer was simple: an accurate picture before I committed, a clear explanation when things changed and a realistic next step. Technology has value when it makes that experience more dependable at a cost the business can sustain. Sometimes that takes an advanced model. Sometimes a simpler change should come first.',
          'What would convince you that an AI investment is working: faster tasks, lower costs or a better customer experience?',
        ],
      },
    ],
    takeaways: [
      'An Amazon-affiliated live test cut inventory by about 12% in units across 10,000 products over 26 weeks, with no statistically significant revenue change. That is not a profit figure.',
      'A pre-sale chatbot’s 16.3% sales lift was measured against a support-unavailable message. Against human replies, the difference was not statistically significant.',
      'ABB’s “up to 75%” refers to engineering and commissioning effort, not a warehouse’s labor bill.',
      'Klarna’s reported $59 million in AI savings and its $207 million customer service and operations expense are different measures, not an isolated AI profit.',
      'In the fictional $60,000 case, $48,000 of yearly net benefit means a 15-month payback. Halving the benefits stretches it to 120 months.',
    ],
    chapters: [
      { time: '0:00', label: 'The customer promise and the $60,000 decision' },
      { time: '0:58', label: 'What the sales report misses' },
      { time: '2:24', label: 'The awkward plastic bag' },
      { time: '4:34', label: 'The reply is not the result' },
      { time: '6:46', label: 'Follow the bill' },
      { time: '10:12', label: 'The Tuesday after the launch' },
      { time: '11:58', label: 'The promise earns its technology' },
    ],
    sources: [
      {
        label: 'Deep Inventory Management (arXiv 2210.03137, section 9.4)',
        date: '2022',
        href: 'https://arxiv.org/html/2210.03137v3',
        note: 'The inventory reduction is measured in units, not profit or cash savings.',
      },
      {
        label: 'Generative AI and Sales Productivity: Field Experiments in Online Retail (arXiv 2510.12049, version 6)',
        date: 'June 2026',
        href: 'https://arxiv.org/html/2510.12049v6',
        note: 'The 16.3% comparison is against unavailable live support, not human support.',
      },
      {
        label: 'ABB Robotics brings industrial-grade physical AI to fashion logistics',
        date: 'October 15, 2026',
        href: 'https://www.abb.com/global/en/news/139480/prsrl-abb-robotics-brings-industrial-grade-physical-ai-to-fashion-logistics',
      },
      {
        label: 'Klarna Group plc Annual Report (Form 20-F) 2025',
        date: 'Fiscal year 2025',
        href: 'https://s205.q4cdn.com/644747736/files/doc_financials/2025/q4/Klarna-Group-plc-20-F-2025.pdf',
      },
    ],
    sourcesNote:
      'The research and filings cited in the video. Manufacturer and company claims are attributed. The store, its numbers and the operational demonstrations are fictional planning illustrations, not supplier quotes, forecasts or verified returns, and my delayed-order account does not establish what caused that retailer’s delay.',
    related: [
      {
        href: '/blog/noibu-ai-agents-closed-loop-ecommerce',
        title: 'AI Gets Interesting When It Has to Prove the Change Worked',
        note: 'Measuring whether the change worked is the harder half of any AI investment.',
      },
      {
        href: '/blog/ai-wont-fix-broken-work',
        title: 'AI Won’t Fix Broken Work',
        note: 'A faster step does little if the work around it still waits.',
      },
      {
        href: '/blog/uber-chatgpt-work-enterprise-ai-adoption',
        title: 'Uber Is Giving 30,000 Employees ChatGPT. Access Is Not Adoption.',
        note: 'Access, adoption and a proven outcome are different stages.',
      },
    ],
    credits:
      'Written by Robert Hu; narration uses his authorized ElevenLabs voice clone. ABB Robotics footage and press photos © ABB or its licensors, used for independent editorial discussion. Licensed Pexels stock and original fictional illustrations are identified on screen and do not depict the research trial sites, the retailer or measured business results. Some explanatory visuals and the cover artwork were created with AI; the thumbnail is illustrative, not a photograph of an actual deployment. Independent commentary; no company endorsement implied. Music and sound credits are listed in the YouTube description.',
    feature: {
      eyebrow: 'Featured Video',
      title: 'AI Works. So Why Doesn’t the Business Make More Money?',
      description:
        'A robot can pick the package and a chatbot can answer the question while the business still loses money. Follow a fictional $60,000 AI investment from demo to payback.',
      cta: 'Watch the video',
    },
  },
  {
    slug: 'royal-caribbean-sandals-vacation-strategy',
    youtubeId: 'RA8mlCB8VbE',
    youtubeTitle: 'Royal Caribbean’s $3 Billion Bet Beyond the Cruise',
    h1: 'Royal Caribbean’s Sandals Deal: Selling More of the Vacation',
    seoTitle: 'Royal Caribbean’s Sandals Deal: Selling More of the Vacation',
    metaDescription:
      'Royal Caribbean Group agreed to pay about $3 billion for half of Sandals. How onboard spending, digital pre-cruise sales and private islands explain the bet.',
    dek: 'A cruise ticket is one purchase. The bigger opportunity is the rest of the vacation, and the experience still has to earn it.',
    uploadDate: '2026-10-23T16:00:00-07:00',
    duration: 'PT5M8S',
    durationLabel: '5 min 8 sec',
    topic: 'Retail strategy',
    subject: 'Royal Caribbean',
    thumbnail: '/images/videos/royal-caribbean-sandals-vacation-strategy.jpg',
    thumbnailAlt: 'Video thumbnail: AI-assisted illustration of the cruise ship Icon of the Seas at sunset under the words Royal Caribbean $3B Beyond the Ship',
    sections: [
      {
        paragraphs: [
          'On September 23, 2026, Royal Caribbean Group agreed to invest about $3 billion for a 50% stake in Sandals and Beaches Resorts. A cruise company is buying into vacations where nobody needs a ship. The reason starts with a second business the company already runs on board.',
          'The transaction is expected to close in early 2027, subject to approvals and other conditions. It is a proposed partnership, not a completed takeover.',
        ],
      },
      {
        heading: 'A second revenue stream',
        paragraphs: [
          'In 2025, Royal Caribbean Group brought in about $12.5 billion from passenger tickets and another $5.4 billion from what it calls onboard and other revenue, roughly 30% of its $17.9 billion total. These figures cover the whole group, including Celebrity and Silversea, and they are revenue, not profit.',
          'Onboard and other revenue covers goods and services not included in the fare, such as drinks, internet and specialty dining, along with casino operations, pre- and post-cruise tours and other services, some of which happen off the ship.',
        ],
      },
      {
        heading: 'The vacation starts on a screen',
        paragraphs: [
          'The timing is the interesting part. Royal Caribbean Group said nearly 50% of its 2025 onboard revenue was booked before the cruise started, and that 90% of those pre-cruise purchases were made through digital channels. A guest still at home, imagining the trip, is already being offered part of it. The company’s annual report describes its mobile app as the place guests book WiFi, beverages, shore excursions and specialty dining.',
          'For a guest, pre-booking can make planning easier. For the business, digital channels link the first booking to the next purchase. Every added experience also has a cost: someone has to build it, operate it or buy into the business that provides it.',
        ],
      },
      {
        heading: 'The business on board',
        paragraphs: [
          'That changes how to look at the ship. The pools, restaurants and bars help persuade people to book. Some are included, and some are upgrades. A real vacation is possible on the base fare, and the company’s job is to make the extra experiences feel worth choosing. A ship full of places to spend is only attractive if people actually want to be there.',
        ],
      },
      {
        heading: 'The strategy goes ashore',
        paragraphs: [
          'Perfect Day at CocoCay, Royal Caribbean’s private destination in the Bahamas, shows the same balance on land. Oasis Lagoon, several beaches and casual dining are included. Thrill Waterpark, the adults-only Hideaway Beach and Coco Beach Club are paid day passes. The island is an included day with optional upgrades, not one giant extra-charge entrance.',
          'Royal Beach Club Paradise Island, in Nassau, takes a different approach. Guests buy one of two day passes, each covering dining and drinks. Different destination, different pricing, same idea: offer more of what a traveler might want during the trip.',
        ],
      },
      {
        heading: 'What Sandals would change',
        paragraphs: [
          'Sandals adds a vacation category with no ship at all. Royal Caribbean Group says the partnership grows its participation in what it describes as an approximately $2 trillion global vacation market, and CEO Jason Liberty framed the goal as turning the vacation of a lifetime into a lifetime of vacations. A couple who cruises this year might want a resort next year.',
          'My reading is that the group wants to compete for more of a traveler’s future vacations, not just more of one trip. Whether that justifies the price depends on what happens next. A stake in another company is judged by what it adds over time, the same question behind [Walmart’s Jet.com acquisition](/videos/walmart-jet-acquisition).',
        ],
      },
      {
        heading: 'The cost behind the view',
        paragraphs: [
          'Ships need crews, fuel, food and maintenance, and land destinations need investment and upkeep. In its July 2026 update, the group expected about $4.7 billion of capital spending in 2026, predominantly for new ships and land-based destinations. That figure predates the Sandals announcement and does not include it.',
          'More sales do not automatically mean more profit. In the second quarter of 2026, total revenue rose 6% from a year earlier to $4.8 billion, while net income fell from $1.2 billion to $1.1 billion. A bigger vacation business still has to manage what it costs to deliver the vacation.',
        ],
      },
      {
        heading: 'The customer’s decision',
        paragraphs: [
          'For travelers, a connected experience can save planning effort, but the advertised fare and the final vacation budget are different numbers. The useful question is what you actually want included.',
          'For a business, the lesson goes beyond cruising. Technology can make the next purchase easier, and owning or partnering in more of the experience creates more chances to sell. The experience still has to earn the next purchase. Royal Caribbean can build the ship, run the destination and invest in the resort, and it still has to make people want to come back.',
          'Would you rather have more included in the fare, or choose your own upgrades?',
        ],
      },
    ],
    takeaways: [
      'On September 23, 2026, Royal Caribbean Group agreed to invest about $3 billion for a 50% stake in Sandals and Beaches Resorts. Closing is expected in early 2027, subject to approvals.',
      'In 2025, onboard and other revenue was $5.4 billion, about 30% of the group’s total revenue. That is revenue, not profit.',
      'Nearly half of 2025 onboard revenue was booked before the cruise, and 90% of those pre-cruise purchases were made through digital channels.',
      'At CocoCay, Oasis Lagoon, several beaches and casual dining are included. The waterpark and beach clubs are paid upgrades.',
      'The group expected about $4.7 billion of 2026 capital spending before the Sandals deal, and second-quarter net income fell even as revenue grew.',
    ],
    chapters: [
      { time: '0:00', label: 'The $3 billion question' },
      { time: '0:23', label: 'A second revenue stream' },
      { time: '0:52', label: 'The vacation starts on a screen' },
      { time: '1:29', label: 'The business on board' },
      { time: '2:07', label: 'The strategy goes ashore' },
      { time: '2:51', label: 'What the Sandals partnership would change' },
      { time: '3:37', label: 'The cost behind the view' },
      { time: '4:22', label: 'The customer’s decision' },
      { time: '4:35', label: 'The business takeaway' },
    ],
    sources: [
      {
        label: 'Royal Caribbean Group and Sandals Resorts Announce Landmark Partnership to Accelerate Their Leading Vacation Experiences',
        date: 'September 23, 2026',
        href: 'https://www.rclinvestor.com/content/uploads/2026/09/09232026-Royal-Caribbean-Group-and-Sandals-Resorts-Announce-Landmark-Partnership-to-Accelerate-Their-Leading-Vacation-Experiences.pdf',
      },
      {
        label: 'Royal Caribbean Group Reports 2025 Results, Issues 2026 Guidance',
        date: 'January 29, 2026',
        href: 'https://www.sec.gov/Archives/edgar/data/884887/000088488726000003/a10k2025earningsrelease8-k.htm',
      },
      {
        label: 'Royal Caribbean Cruises Ltd. 2025 Annual Report (Form 10-K)',
        date: 'Fiscal year 2025',
        href: 'https://www.sec.gov/Archives/edgar/data/884887/000088488726000007/rcl-20251231.htm',
      },
      {
        label: 'Royal Caribbean Group Reports Second Quarter Results Above Expectations and Raises Full Year Guidance',
        date: 'July 28, 2026',
        href: 'https://www.rclinvestor.com/press-releases/release/?id=1845',
      },
      {
        label: 'Perfect Day at CocoCay: what’s included and upgrades (Royal Caribbean)',
        date: 'Checked October 24, 2026',
        href: 'https://www.royalcaribbean.com/cococay-cruises?country=USA',
      },
      {
        label: 'Royal Beach Club Paradise Island Day Pass Guide (Royal Caribbean)',
        date: 'Updated February 13, 2026',
        href: 'https://www.royalcaribbean.com/guides/nassau-paradise-island-beach-club-day-pass',
        note: 'Added for the Paradise Island day pass, which the video description does not cite.',
      },
    ],
    sourcesNote:
      'The sources cited in the video, plus Royal Caribbean’s day pass guide for Paradise Island. Revenue figures cover the whole group and are not profit. The $4.7 billion is 2026 capital spending guidance from July, separate from the Sandals transaction, which is proposed and not yet closed.',
    related: [
      {
        href: '/blog/retailers-ai-traffic-customer-ownership',
        title: 'Retailers Want AI Shopping Traffic. They Do Not Want to Lose the Customer.',
        note: 'Owning more of the customer relationship is the strategic question, whether the next step is an AI assistant or a resort.',
      },
      {
        href: '/blog/amazon-ai-shopping-business-model',
        title: 'Amazon Is Revealing the Business Model Behind AI Shopping',
        note: 'Attaching a product to order value and membership, the same logic as linking the first booking to the next purchase.',
      },
      {
        href: '/blog/mcdonalds-media-network-commerce-media-without-marketplace',
        title: 'McDonald’s Is Building a Media Network Without a Marketplace',
        note: 'A company with identity, purchase data and repeat visits looking for a second revenue line.',
      },
    ],
    credits:
      'Written by Robert Hu; narration uses an authorized AI clone of his voice. Footage is official Royal Caribbean press-center material (Icon of the Seas, Oasis Lagoon at CocoCay, fleetwide cocktails and Royal Beach Club Paradise Island), © Royal Caribbean Group, used for independent editorial reporting; dates are source publication labels, not verified filming dates. Paradise Island and CocoCay are different destinations, and no Royal Caribbean property is presented as Sandals. The thumbnail is AI-assisted illustrative artwork based on official ship footage. Independent commentary; no sponsorship or endorsement. Music and sound credits are listed in the YouTube description.',
    feature: {
      eyebrow: 'Featured Video',
      title: 'Royal Caribbean’s $3 Billion Bet Beyond the Cruise',
      description:
        'Royal Caribbean Group agreed to pay about $3 billion for half of Sandals. Follow the money from onboard spending and private islands to a resort deal, and what the experience still has to earn.',
      cta: 'Watch the video',
    },
  },
  {
    slug: 'microsoft-three-mile-island-nuclear-restart',
    youtubeId: 'mekMrwjYSlg',
    youtubeTitle: 'Why Microsoft Is Betting 20 Years on Nuclear Power',
    h1: 'Microsoft and Three Mile Island: Why a 20-Year Buyer Matters',
    seoTitle: 'Microsoft and Three Mile Island: Why a 20-Year Buyer Matters',
    metaDescription:
      'Microsoft agreed to buy 20 years of output from the restarted Three Mile Island Unit 1. What the $1.6 billion, the $1 billion loan and the 2027 target mean.',
    dek: 'A reactor that closed for economic reasons found a second business case: a customer committed to buying its output for 20 years. The deal still has to become electricity.',
    uploadDate: '2026-10-21T16:00:14-07:00',
    duration: 'PT5M22S',
    durationLabel: '5 min 22 sec',
    topic: 'Energy and infrastructure',
    subject: 'Microsoft and nuclear power',
    thumbnail: '/images/videos/microsoft-three-mile-island-nuclear-restart.jpg',
    thumbnailAlt: 'Frame from the video: archival aerial photograph of Three Mile Island labeled The electricity customer, Microsoft, and The plant owner, Constellation',
    sections: [
      {
        paragraphs: [
          'In 2024, Constellation estimated it would spend about $1.6 billion to restart Three Mile Island Unit 1 in Pennsylvania, a reactor it had retired in 2019 for economic reasons. What changed was a buyer. In September 2024, Constellation announced a 20-year power purchase agreement under which Microsoft will purchase the output of the renewed plant.',
          'The plant is now called the Crane Clean Energy Center. The 1979 accident happened at the separate Unit 2, and Constellation says Unit 1’s long-term operation was not affected by it. The business question is what makes a restart worth attempting, and what could still get in the way.',
        ],
      },
      {
        heading: 'Why a working plant can lose money',
        paragraphs: [
          'A power plant can work technically and still fail commercially. Staff, maintenance and fuel have to be paid for, and electricity sales have to cover the bills. A restart means committing money before the plant earns anything from renewed operations.',
          'Constellation’s investor presentation describes the Microsoft deal as a 20-year fixed-price agreement for the plant’s full output. That makes future revenue easier to plan around. The restart has a committed buyer instead of relying entirely on future market prices.',
        ],
      },
      {
        heading: 'Keep the two numbers separate',
        paragraphs: [
          'In November 2025, the Department of Energy closed a $1 billion loan to Constellation to help finance the restart. The two figures answer different questions. $1.6 billion was Constellation’s announced restart estimate. $1 billion is loan financing for the project, and it has to be repaid. Adding them together would double count part of the funding story.',
          'Neither figure is what Microsoft pays for the electricity, and that price has not been disclosed. The size of the investment is visible. Its profit or payback cannot be calculated from these figures alone.',
        ],
      },
      {
        heading: 'What Microsoft is buying',
        paragraphs: [
          'For Microsoft, the attraction is a large supply of carbon-free electricity over a long period. Constellation says the purchases are part of Microsoft’s goal to match the power its data centers in PJM, the regional grid, use with carbon-free energy. Those data centers run cloud services as well as AI, so the agreement concerns electricity for a broad computing business. Crane’s planned capacity is about 835 megawatts.',
          'That power enters a shared grid through transformers, substations and transmission connections. Microsoft is the customer and Constellation owns the plant. The arrangement is regional, not a private line into one AI service.',
        ],
      },
      {
        heading: 'A contract is not yet electricity',
        paragraphs: [
          'Buying future power and having power available are different milestones. A contract can be signed while the physical work is years from finished, and a data center expansion has to be planned around when the electricity can actually reach the grid.',
          'Constellation says the restart includes restoring the turbine, generator, main power transformer, and cooling and control systems. Returning the plant to operation also requires Nuclear Regulatory Commission approval, including inspections and licensing work.',
        ],
      },
      {
        heading: 'Approvals and the 2027 target',
        paragraphs: [
          'In August 2026, Constellation reported that the NRC had approved a fuel license amendment and that federal regulators had approved moving grid interconnection rights from another Constellation plant to Crane. It was targeting a restart in 2027, earlier than the 2028 date it gave in 2024.',
          'Those are milestones, not final permission to operate. As of October 2026, the NRC’s record still lists the restart license changes as under review, and 2027 remains a company target. A delay would postpone the power the agreement is meant to bring back.',
        ],
      },
      {
        heading: 'A wider strategy',
        paragraphs: [
          'On October 6, 2026, Google and Constellation announced a separate 20-year power purchase agreement supporting upgrades intended to add 890 megawatts across 11 existing Constellation nuclear units, with the first upgrade expected by 2028. It is a different project from Crane.',
          'The shared idea is a large technology customer committing to purchases that help support investment in generating capacity. It suggests that access to electricity can become a competitive advantage in the AI build-out. A company planning more computing needs a credible plan for the power behind it.',
        ],
      },
      {
        heading: 'What still has to go right',
        paragraphs: [
          'Unit 1 is not a new kind of reactor. A long-term buyer helped change the business case for bringing an existing one back. The test is whether Constellation can deliver safely, on schedule and at a cost that makes the deal work. It is the same execution test that decides whether [Intel’s factories](/videos/intel-chip-manufacturing) turn a design into a product.',
          'When the next AI expansion is announced, look for the power agreement, the grid connection and the delivery date. Does reliable power become a competitive advantage in the AI race?',
        ],
      },
    ],
    takeaways: [
      '$1.6 billion is Constellation’s 2024 restart estimate, not Microsoft’s purchase price.',
      'The $1 billion Department of Energy loan, closed in November 2025, is financing that has to be repaid, not an additional restart cost.',
      'Constellation describes the Microsoft deal as a 20-year fixed-price agreement for the plant’s full output. The price has not been disclosed.',
      'Microsoft buys the electricity and Constellation owns the plant. The power goes into the regional PJM grid, not a private line to one data center.',
      'Constellation is targeting a 2027 restart, subject to NRC approvals. A signed agreement is not yet electricity.',
    ],
    chapters: [
      { time: '0:00', label: 'A $1.6 billion restart' },
      { time: '0:41', label: 'Why a working plant can lose money' },
      { time: '1:19', label: 'Investment, financing and the undisclosed price' },
      { time: '1:58', label: 'What Microsoft is buying' },
      { time: '2:42', label: 'The deal still has to become electricity' },
      { time: '3:26', label: 'Approvals and the 2027 target' },
      { time: '3:56', label: 'A wider nuclear power strategy' },
      { time: '4:30', label: 'The business takeaway' },
    ],
    sources: [
      {
        label: 'Constellation to Launch Crane Clean Energy Center, Restoring Jobs and Carbon-Free Power to The Grid',
        date: 'September 20, 2024',
        href: 'https://www.constellationenergy.com/news/2024/Constellation-to-Launch-Crane-Clean-Energy-Center-Restoring-Jobs-and-Carbon-Free-Power-to-The-Grid.html',
      },
      {
        label: 'Crane Clean Energy Center investor presentation (Constellation, SEC Form 8-K exhibit)',
        date: 'September 20, 2024',
        href: 'https://www.sec.gov/Archives/edgar/data/1868275/000186827524000058/ceg-202409208kexh992.htm',
        note: 'Source of the 20-year fixed-price, full-output description.',
      },
      {
        label: 'Constellation Reports Third Quarter 2024 Results',
        date: 'November 2024',
        href: 'https://www.constellationenergy.com/news/2024/Constellation-Reports-Third-Quarter-2024-Results.html',
        note: 'Source of the approximately $1.6 billion restart estimate.',
      },
      {
        label: 'Crane Restart (U.S. Department of Energy)',
        date: 'Loan closed November 2025',
        href: 'https://www.energy.gov/edf/crane-restart',
      },
      {
        label: 'Crane Clean Energy Center facility record (U.S. Nuclear Regulatory Commission)',
        date: 'Checked October 22, 2026',
        href: 'https://www.nrc.gov/facilities-safety/facility-finder/reactors/ccec',
      },
      {
        label: 'Constellation Reports Second Quarter 2026 Results',
        date: 'August 6, 2026',
        href: 'https://www.constellationenergy.com/news/2026/08/constellation-reports-second-quarter-2026-results.html',
      },
      {
        label: 'Google and Constellation announce agreement to bring 890 MW of new nuclear capacity to the PJM grid',
        date: 'October 6, 2026',
        href: 'https://www.constellationenergy.com/news/2026/10/google-and-constellation-announce-landmark-agreement-to-bring-890-mw-of-new-nuclear-capacity-to-pjm-grid.html',
      },
    ],
    sourcesNote:
      'The sources cited in the video, plus two Constellation documents that state the $1.6 billion estimate and the fixed-price term. $1.6 billion is a restart estimate, the $1 billion loan is financing, Microsoft’s price is undisclosed, and 2027 is a company target subject to approvals.',
    related: [
      {
        href: '/blog/noibu-ai-agents-closed-loop-ecommerce',
        title: 'AI Gets Interesting When It Has to Prove the Change Worked',
        note: 'A signed deal is the start. Proving the result is the harder half.',
      },
      {
        href: '/blog/chatgpt-ads-billion-revenue-run-rate-distribution',
        title: 'ChatGPT Ads Hit a $1 Billion Run Rate in 200 Days. The Audience Came First.',
        note: 'Reading a headline figure for what it actually measures, the same discipline as separating an estimate from a loan.',
      },
    ],
    credits:
      'Written by Robert Hu; narration uses an authorized AI clone of his voice. Plant-specific images are archival: a U.S. Nuclear Regulatory Commission file photo of Three Mile Island (CC BY 2.0) and CDC PHIL #1194 (public domain), cropped, darkened and animated. Computing and grid stock footage is illustrative, not current Crane restoration or verified Microsoft data center footage. The image on this page is a frame from the video built on the archival NRC photograph; the YouTube thumbnail is AI-assisted editorial cover artwork based on a CDC archive image, not a current photograph. Microsoft logo used with permission from Microsoft. Independent commentary; no endorsement is implied. Music and sound credits are listed in the YouTube description.',
    feature: {
      eyebrow: 'Featured Video',
      title: 'Why Microsoft Is Betting 20 Years on Nuclear Power',
      description:
        'A reactor retired for economic reasons got a 20-year buyer. Follow the money behind Microsoft, Constellation and the Three Mile Island Unit 1 restart, and what still has to go right.',
      cta: 'Watch the video',
    },
  },
  {
    slug: 'walmart-wing-drone-delivery-economics',
    youtubeId: 'i1BGeCRMuqE',
    youtubeTitle: 'Walmart’s $0 Drone Delivery: Who Pays for the Flight?',
    h1: 'Walmart Drone Delivery: Who Pays for the $0 Flight?',
    seoTitle: 'Walmart Drone Delivery: Who Pays for the $0 Flight?',
    metaDescription:
      'Walmart+ members pay $0 for drone delivery in select markets. What Wing’s AutoLoader, shared pilots and small urgent orders mean for who covers the cost.',
    dek: 'A $0 delivery fee does not make a flight free. Someone packs the order, buys the aircraft and supervises the system, and the economics depend on which trips drones can win.',
    uploadDate: '2026-10-20T16:00:32-07:00',
    duration: 'PT4M46S',
    durationLabel: '4 min 46 sec',
    topic: 'Delivery and logistics',
    subject: 'Walmart drone delivery',
    thumbnail: '/images/videos/walmart-wing-drone-delivery-economics.jpg',
    thumbnailAlt: 'Video thumbnail: illustrative artwork of a delivery drone at sunset under the words $0 Delivery, Who Pays?',
    sections: [
      {
        paragraphs: [
          'Walmart+ members currently pay no fee for drone delivery in select markets, for a limited time. The flight still costs money. Someone has to pack the order, the aircraft have to be bought and maintained, and pilots supervise the system. That makes the real question how a delivery with no added fee becomes a business worth expanding.',
          'The $0 is the delivery fee for eligible Walmart+ members. Membership and the goods still cost money, and Walmart says availability depends on the address, the basket, the weather and each drone vendor’s rules.',
        ],
      },
      {
        heading: 'One missing ingredient',
        paragraphs: [
          'Picture dinner half cooked and one ingredient missing. Driving to the store puts everything on hold, and a delivery fee on a small purchase can feel harder to justify than the item itself. That is the trip drone delivery is built for. Walmart’s own announcement leads with the same kind of moment: a forgotten pizza topping, printer ink before a school project, cold medicine needed fast.',
          'Walmart’s help page says drone orders can weigh 2 to 8 pounds depending on the vendor, and that deliveries take up to 30 minutes.',
        ],
      },
      {
        heading: 'Removing the wait',
        paragraphs: [
          'The aircraft may fly itself, but the order does not pack itself. Wing designed its AutoLoader, which it described in June 2023, to separate two things that usually have to happen together. A store worker loads the package whenever it is ready and walks away, and the drone arrives shortly after to collect it on its own. The useful innovation is less the flight than the waiting it removes from the worker’s day.',
          'Wing also says its pilots oversee multiple flights from a central location rather than controlling each one, which spreads supervision across more than one trip.',
        ],
      },
      {
        heading: 'Waiting for customers',
        paragraphs: [
          'None of that helps much if the fleet spends the afternoon waiting for orders. One successful demonstration flight is easy to film. A full day of customers is not. Equipment and supporting operations have to be paid for either way. More completed orders spread those shared costs, but each additional flight also adds work and wear.',
        ],
      },
      {
        heading: 'What $1.40 actually means',
        paragraphs: [
          'The other number often attached to drone delivery is about $1.40 per transaction. It comes from a February 2021 report that Accenture prepared for Wing on the Dallas-Fort Worth area, with amounts in 2020 dollars. The report estimated that drone delivery could bring delivery costs down to around that level, and its method looked at the marginal cost of a delivery.',
          'That makes it a historical model, not Wing’s verified cost per order today. Subtracting it from a $0 fee does not produce a profit calculation.',
        ],
      },
      {
        heading: 'Which trips drones can win',
        paragraphs: [
          'A van carries many packages along one route, and those deliveries share the trip. Sending an aircraft for each small order is a different proposition. The drone’s case is the small, urgent, nearby order that does not need a full grocery run. Wing says its aircraft carry up to five pounds and cruise at up to 60 miles per hour.',
          'Walmart brings stores with inventory already near customers, and people are using the service. On May 29, 2026, Walmart said it had passed one million drone deliveries across its providers, including Wing and Zipline, from 66 stores in four states, with an average delivery time of 23 minutes. On October 5, Wing said the partners would add Denver and Seattle in 2027, part of a plan to reach more than 270 Walmart locations. Planned locations are not completed deployments.',
        ],
      },
      {
        heading: 'Volume is not profit',
        paragraphs: [
          'The financial question is specific: whether a faster option wins an order Walmart would otherwise lose, brings a customer back, or simply adds fulfillment cost to a purchase that would have happened anyway. The shopper sees one order. The business has two jobs, selling the goods and getting them there, and more sales help only if enough value remains after the product and the fulfillment. Neither company’s sources reviewed here publish the service’s cost per delivery or its profitability.',
        ],
      },
      {
        heading: 'What would make it last',
        paragraphs: [
          'What matters to me as a customer is consistency. Once delivery works, I plan around it, and a remarkable first flight has to become an ordinary, dependable next order. It is the same test I applied to [FedEx’s overnight promise](/videos/fedex-overnight-delivery-promise).',
          'Drones have a plausible opportunity in small, urgent trips, where automation and shared operations reduce the work per order. That opportunity still has to survive real demand and real operating costs. The $0 fee makes the service attractive to try. Keeping the whole operation affordable is what would make it last.',
          'Would you use drone delivery for a missing dinner ingredient?',
        ],
      },
    ],
    takeaways: [
      'The $0 is the drone delivery fee for eligible Walmart+ members, for a limited time in select markets. Membership and the goods still cost money.',
      'Wing’s AutoLoader lets a store worker load an order and walk away, removing the wait for the aircraft.',
      'The often-quoted $1.40 per delivery is a 2021 modeled estimate in 2020 dollars from a report Accenture prepared for Wing, not a verified current cost.',
      'Walmart reported more than one million drone deliveries across its providers by May 2026, with a 23-minute average delivery time.',
      'Delivery volume is not profit. The question is whether faster delivery wins orders Walmart would otherwise lose.',
    ],
    chapters: [
      { time: '0:00', label: 'The $0 delivery question' },
      { time: '0:21', label: 'One missing ingredient' },
      { time: '0:38', label: 'Removing the wait' },
      { time: '1:18', label: 'Waiting for customers' },
      { time: '1:51', label: 'What $1.40 actually means' },
      { time: '2:17', label: 'Which trips can drones win?' },
      { time: '3:29', label: 'Volume is not profit' },
      { time: '4:14', label: 'Can the economics work?' },
    ],
    sources: [
      {
        label: 'Drone delivery (Walmart Help Center)',
        date: 'Checked October 19, 2026',
        href: 'https://www.walmart.com/help/article/drone-delivery/4870314a62634f368fe23cdf94ea28e2',
      },
      {
        label: 'Faster, Safer and Greener: The Potential Impact of Delivery Drones in the Dallas-Fort Worth Metroplex (Accenture for Wing)',
        date: 'February 2021',
        href: 'https://static.wing.com/Content/DallasImpactReport.pdf',
      },
      {
        label: 'A Wing delivery drone could do your curbside pickup',
        date: 'June 8, 2023',
        href: 'https://wing.com/news/a-wing-delivery-drone-could-do-your',
      },
      {
        label: 'Wing technology',
        date: 'Wing',
        href: 'https://wing.com/technology',
      },
      {
        label: 'Walmart celebrates 1 million drone deliveries',
        date: 'May 29, 2026',
        href: 'https://corporate.walmart.com/news/2026/05/29/walmart-celebrates-1-million-drone-deliveries-marking-a-major-milestone-in-customer-convenience',
      },
      {
        label: 'Wing and Walmart name new metros to expand the nation’s largest drone delivery network',
        date: 'October 5, 2026',
        href: 'https://wing.com/news/wing-walmart-new-metros-nations-largest-drone-delivery-network',
      },
    ],
    sourcesNote:
      'The sources cited in the video. The $0 offer was checked on October 19, 2026. The $1.40 figure is a historical modeled marginal delivery cost, not Wing’s verified current cost, total operating cost or profit. Walmart’s delivery total includes multiple providers, and planned locations are not completed deployments.',
    related: [
      {
        href: '/blog/kroger-ecommerce-operating-model',
        title: 'Kroger’s Ecommerce Reset Is Becoming an Operating Model',
        note: 'Routing on cost to serve and promised service level is the real work behind any delivery option.',
      },
      {
        href: '/blog/walmart-people-led-tech-powered-operating-model',
        title: 'Walmart Is Showing What People-Led, Tech-Powered Actually Looks Like',
        note: 'How Walmart pairs shared platforms with operators who decide what is worth doing.',
      },
      {
        href: '/blog/noibu-ai-agents-closed-loop-ecommerce',
        title: 'AI Gets Interesting When It Has to Prove the Change Worked',
        note: 'Volume shows activity. Proving the change paid off is the harder half.',
      },
    ],
    credits:
      'Written by Robert Hu; narration uses his authorized ElevenLabs voice. Wing press-kit flight footage and photographs © Wing, CC BY-SA 4.0, edited and combined with editorial graphics; additional official Wing demonstrations are quoted for criticism and commentary. Stock scenes and the Walmart exterior are illustrative, and the edit does not follow one actual order. The cover is AI-generated illustrative artwork using a Wing aircraft reference; Wing-derived cover visuals are shared under CC BY-SA 4.0. Independent commentary; no Wing or Walmart sponsorship or endorsement. Music and sound credits are listed in the YouTube description.',
    feature: {
      eyebrow: 'Featured Video',
      title: 'Walmart’s $0 Drone Delivery: Who Pays for the Flight?',
      description:
        'A $0 drone delivery fee does not mean a cost-free flight. Follow the work behind Walmart and Wing’s drone delivery, and the economics of small, urgent trips.',
      cta: 'Watch the video',
    },
  },
  {
    slug: 'intel-chip-manufacturing',
    youtubeId: 'P2sOPHDMZsU',
    youtubeTitle: 'Why Intel Needs More Than a Better Chip',
    h1: 'How Intel Makes Chips: Why a Better Design Isn’t Enough',
    seoTitle: 'How Intel Makes Chips: Why a Better Design Isn’t Enough',
    metaDescription:
      'Inside Intel’s fabs: wafers, overhead transport, measurement and advanced packaging, and why factory execution is part of what Intel sells to customers.',
    dek: 'A chip design is only the beginning. Turning it into a dependable product takes wafers, clean rooms, overhead transport, measurement and packaging working as one system.',
    uploadDate: '2026-10-19T16:00:36-07:00',
    duration: 'PT5M38S',
    durationLabel: '5 min 38 sec',
    topic: 'Manufacturing',
    subject: 'Intel',
    thumbnail: '/images/videos/intel-chip-manufacturing.jpg',
    thumbnailAlt: 'Documentary thumbnail: the words Beyond the Chip over an illustrative chip factory and a silicon wafer',
    sections: [
      {
        paragraphs: [
          'A processor fits in your hand. The system that makes it fills buildings. This documentary uses Intel’s own footage from Arizona, Oregon and New Mexico to follow that system and ask how Intel turns equipment, precision and coordination into products customers can depend on.',
          'The footage comes from separate operations filmed at different times. It shows stages of manufacturing, not the journey of one traceable chip.',
        ],
      },
      {
        heading: 'A wafer becomes a product',
        paragraphs: [
          'Chips start as wafers, thin discs of silicon. ASML, which makes lithography machines, describes chipmaking as a sequence of repeated steps: layers are added, patterns are exposed with light through a mask, also called a reticle, and material is removed where the design requires it. A chip does not come out of one machine in one pass. It comes out of a long run of operations that have to agree with each other.',
          'The clean room suits, gloves and covered faces exist because tiny contamination can damage the structures being made. Wafers travel between tools in closed pods, which keeps that protection in place while they move.',
        ],
      },
      {
        heading: 'The overhead network',
        paragraphs: [
          'Look up inside an Intel fab and you see its automated material handling system. Intel’s manufacturing press kit describes the one at its D1 factory in Oregon as more than 27 miles of multilevel track, with 1,700 autonomous vehicles carrying pods of up to 25 wafers through a fabrication journey that lasts weeks.',
          'Speed alone does not solve the problem. If the next tool is not ready, an early arrival just waits. Different processing times make scheduling and temporary storage matter, which is why material handling suppliers such as Daifuku build storage into the system alongside transport. The goal is a useful arrival: the right material at the tool when production needs it.',
        ],
      },
      {
        heading: 'Making good chips',
        paragraphs: [
          'Keeping equipment busy is not the goal either. The chips have to work. ASML describes how chipmakers measure printed patterns and inspect for defects, then use that information to improve accuracy and yield. Yield is the share of chips that work, and it connects the precision of the factory to the amount of useful output.',
        ],
      },
      {
        heading: 'The packaging stage',
        paragraphs: [
          'Making the silicon is not the whole job. Chips also need packaging and connections to become part of a working system. In January 2024, Intel opened Fab 9 in Rio Rancho, New Mexico, for advanced packaging, including Foveros, its technology for stacking chips in three dimensions. Intel described Fab 9 as part of a previously announced $3.5 billion investment in its New Mexico operations. That figure covers the site investment, not the price of one machine.',
        ],
      },
      {
        heading: 'What the factory sells',
        paragraphs: [
          'Each capability solves a different constraint. Transport feeds the tools, measurement stabilizes the process and packaging makes different product designs possible. Their value depends on how the whole operation performs, not on how impressive one machine looks on camera.',
          'That is the logic behind Intel’s foundry ambition. A foundry manufactures chips for other companies, and a customer choosing one depends on far more than a promising design: process, packaging, capacity and support. At its Foundry Direct Connect event in April 2025, Intel’s chief executive, Lip-Bu Tan, said the company’s first job was to listen to customers and earn their trust. That trust is won through execution, which makes the factory part of what Intel sells.',
          'It is the same lesson as [Bosch’s Dresden wafer fab](/videos/bosch-semiconductors-dresden): the equipment is what you can see, but the value is in what the whole system delivers.',
          'Which part of chip manufacturing surprised you most?',
        ],
      },
    ],
    takeaways: [
      'A chip is built through a long sequence of repeated processing steps, not by one machine in one pass.',
      'Intel describes its Oregon D1 factory as running more than 27 miles of overhead track, with 1,700 autonomous vehicles moving wafer pods between tools.',
      'Measurement and inspection feed back into the process, because yield, the share of chips that work, matters more than motion.',
      'Intel’s Fab 9 in New Mexico, opened in January 2024, is part of a $3.5 billion site investment in advanced packaging.',
      'For Intel’s foundry business, factory execution is part of what it sells to customers.',
    ],
    chapters: [
      { time: '0:00', label: 'The hidden factory' },
      { time: '0:29', label: 'A wafer becomes a product' },
      { time: '1:02', label: 'Protecting the work' },
      { time: '1:34', label: 'The overhead network' },
      { time: '2:14', label: 'Making good chips' },
      { time: '2:55', label: 'The packaging stage' },
      { time: '3:30', label: 'The investment behind the tools' },
      { time: '4:12', label: 'Why this matters to Intel' },
      { time: '4:50', label: 'What the factory sells' },
      { time: '5:25', label: 'Credits' },
    ],
    sources: [
      {
        label: 'Global manufacturing at Intel (press kit)',
        date: 'August 2024',
        href: 'https://www.intel.com/content/www/us/en/newsroom/resources/global-manufacturing.html',
      },
      {
        label: 'How microchips are made',
        date: 'ASML',
        href: 'https://www.asml.com/en/technology/all-about-microchips/how-microchips-are-made',
      },
      {
        label: 'Measuring accuracy: metrology and inspection',
        date: 'ASML',
        href: 'https://www.asml.com/en/technology/lithography-principles/measuring-accuracy',
      },
      {
        label: 'Daifuku’s semiconductor production line systems',
        date: 'January 2024',
        href: 'https://www.daifuku.com/daifuku-square/article/000999/',
      },
      {
        label: 'Intel opens Fab 9 in New Mexico',
        date: 'January 24, 2024',
        href: 'https://www.intel.com/content/www/us/en/newsroom/news/intel-opens-fab-9-new-mexico.html',
      },
      {
        label: 'Intel Foundry gathers customers and partners, outlines priorities',
        date: 'April 29, 2025',
        href: 'https://www.intel.com/content/www/us/en/newsroom/news/corporate/intel-foundry-gathers-customers-partners-outlines-priorities.html',
      },
    ],
    sourcesNote:
      'The sources cited in the documentary. Footage is official Intel material from separate operations in Arizona (September 2025), Oregon (archival reel released February 2024) and New Mexico (January 2024), not one traceable chip journey. No measured return, yield improvement or customer win is claimed.',
    related: [
      {
        href: '/blog/kroger-ecommerce-operating-model',
        title: 'Kroger’s Ecommerce Reset Is Becoming an Operating Model',
        note: 'Owning capabilities and running them as one connected system are different achievements.',
      },
      {
        href: '/blog/walmart-people-led-tech-powered-operating-model',
        title: 'Walmart Is Showing What People-Led, Tech-Powered Actually Looks Like',
        note: 'How a large operator connects platforms and people into one operating model.',
      },
      {
        href: '/blog/ai-wont-fix-broken-work',
        title: 'AI Won’t Fix Broken Work',
        note: 'Why the workflow around a tool matters more than the tool itself.',
      },
    ],
    credits:
      'Written by Robert Hu; narration uses his authorized ElevenLabs voice. Official footage © Intel Corporation, used for independent editorial commentary, edited with source audio removed. The thumbnail is original AI-generated illustrative cover art, not a photograph of an Intel facility. Independent commentary; no Intel sponsorship or endorsement. Music credits are listed in the YouTube description.',
    feature: {
      eyebrow: 'Featured Video',
      title: 'Why Intel Needs More Than a Better Chip',
      description:
        'A better chip design is only the beginning. Inside Intel’s factories, the harder challenge is turning precision and enormous investment into dependable production.',
      cta: 'Watch the documentary',
    },
  },
  {
    slug: 'john-deere-see-spray-roi',
    youtubeId: 'cn4JBH8tKEM',
    youtubeTitle: 'John Deere’s AI Saves Chemicals. But Does It Pay?',
    h1: 'John Deere See & Spray: Does AI Spraying Pay for Itself?',
    seoTitle: 'John Deere See & Spray: Does AI Spraying Pay for Itself?',
    metaDescription:
      'John Deere’s See & Spray cuts herbicide use, but farmers pay for the upgrade and a per-acre fee. One farmer’s results and a transparent payback example.',
    dek: 'A camera can decide where to spray. The farmer still has to decide whether the investment is worth it, after the equipment, the fees and the field results.',
    uploadDate: '2026-10-18T16:00:19-07:00',
    duration: 'PT6M47S',
    durationLabel: '6 min 47 sec',
    topic: 'AI in practice',
    subject: 'John Deere See & Spray',
    thumbnail: '/images/videos/john-deere-see-spray-roi.jpg',
    thumbnailAlt: 'Documentary thumbnail: illustrative artwork of a green sprayer in a field beside a large gold coin',
    sections: [
      {
        paragraphs: [
          'In 2024, Wisconsin farmer Tyler Troiola tried John Deere’s See & Spray, which uses cameras and onboard AI to spray weeds rather than whole fields. The proposition is simple: spend on equipment to spend less on chemicals. Whether that investment pays for itself is harder, and his experience shows why the headline percentage is only the start of the answer.',
          'This page follows the public reporting on Tyler’s first season, then works through a hypothetical calculation. The hypothetical uses documented 2025 U.S. usage terms and is not Tyler’s accounts.',
        ],
      },
      {
        heading: 'The purchase comes before the proof',
        paragraphs: [
          'Tyler farms about 2,800 acres of corn, soybeans and wheat near Eagle, Wisconsin. Precision Farming Dealer reported in May 2024 that he chose See & Spray Premium, which it described as a $25,000 system, as a retrofit for a used 2018 Deere sprayer, after trading in his previous sprayer to get a compatible machine. A new machine with the two-tank Ultimate system was beyond his budget. The reporting does not give his complete transaction cost.',
          'That is where any investment like this starts: money committed before the results arrive. The comparison that matters is against the alternative the farmer would actually choose, whether that is keeping an old sprayer, buying another used one or replacing equipment that needed replacing anyway.',
        ],
      },
      {
        heading: 'How targeted spraying changes the economics',
        paragraphs: [
          'A conventional broadcast application treats the whole width of the boom. See & Spray uses cameras and onboard AI to identify weeds and switch individual nozzles as the machine moves, so chemical that would have covered bare ground stays in the tank. Premium uses one tank and can either broadcast or target spray. Ultimate has two tanks, so it can do both in the same pass.',
          'Less spraying only helps if the field still gets what it needs. Some herbicides work by stopping weeds from emerging later, so a farmer still needs a program for that job.',
        ],
      },
      {
        heading: 'One farmer, different field results',
        paragraphs: [
          'Tyler’s July 2024 follow-up showed both the attraction and the complication. On 10-inch corn, the system sprayed about 13 to 18 percent of the field, which he said meant more than 80 percent herbicide savings. On 18-inch corn, savings fell to about 65 percent. In some soybean fields, they were only about 15 percent.',
          'He suspected heavy residue made weeds harder to tell from soybeans, and he had chosen a setting that sprays when the cameras are unsure, trading savings for caution. These are selected results he reported, not an audited profit statement. Still, the contrast matters: one purchase can face very different conditions on the same farm.',
        ],
      },
      {
        heading: 'Deere’s usage-fee strategy',
        paragraphs: [
          'Tyler’s first season ran under earlier pricing; he mentioned paying a $4 per acre subscription fee. For 2025, Deere introduced what it calls the Application Savings Guarantee. A Deere dealer panel explained that farmers pay $5 for each in-crop acre the system leaves unsprayed while it is turned on, and Deere lists $1 per fallow acre. Deere’s own fine print says “savings” here means reduced application volume, not other costs. For 2026, it added an unlimited annual license for heavy users.',
          'Cover 100 acres and leave 60 unsprayed, and the fee applies to 60 acres: $300. The farmer keeps the chemical that would have gone on that area, and Deere collects a payment tied to it. For Deere, usage creates revenue beyond the hardware sale. For the farmer, it is another cost to subtract.',
        ],
      },
      {
        heading: 'A hypothetical payback calculation',
        paragraphs: [
          'Take a hypothetical farm, not Tyler’s. Assume one targeted pass over 2,000 acres a year, a targetable herbicide mix costing $20 an acre, and 60 percent of the area left unsprayed. That avoids $24,000 of chemical. The usage fee takes $6,000, leaving $18,000 a year before other costs. At that rate, a $25,000 upgrade would recover its price in about 1.4 years.',
          'The University of Arkansas Extension puts a Premium retrofit at $25,000 to $100,000, depending on the existing sprayer. At $100,000, the same example takes about 5.6 years. Neither figure includes financing, installation, machine costs or changes in labor, and both assume the savings repeat every year. If the targetable mix cost $5 an acre, the $5 fee would absorb the entire chemical saving, leaving nothing to recover the upgrade.',
        ],
      },
      {
        heading: 'What changes the answer',
        paragraphs: [
          'Cheaper chemicals make each avoided spray worth less. Heavier weed pressure leaves less spraying to avoid. Fewer applications spread the investment more thinly. A 2026 peer-reviewed study in Agrosystems, Geosciences & Environment estimated that, on average, a single application had to involve more than $27 of herbicide per hectare, about $11 an acre, before Premium beat a broadcast sprayer. Its model assumed about 10,000 acres of applications a year, which can include repeated passes over the same land, so its results should not be lifted into a smaller operation unchanged. The authors thank Deere and Blue River for supporting the research and providing the commercial data.',
        ],
      },
      {
        heading: 'What the farmer actually keeps',
        paragraphs: [
          'The public reporting shows strong savings in some conditions and weaker results in others. It does not give the complete costs and annual net savings needed to establish Tyler’s payback, so I cannot say his investment paid for itself.',
          'Charging for usage is the same shift I described in [Google’s pay-per-redemption ads](/blog/google-local-coupons-pay-per-redemption-ads): the vendor gets paid when the outcome happens. That aligns incentives, and it also means the buyer has to keep asking what value comes back after the fee. The most important number is what the farmer keeps after the bills are paid.',
          'What would convince you that an AI upgrade is worth paying for: the demonstration, the savings percentage or the results after every cost?',
        ],
      },
    ],
    takeaways: [
      'Tyler Troiola’s See & Spray Premium retrofit was reported as a $25,000 system; his full transaction cost was not reported.',
      'His 2024 herbicide savings ranged from more than 80 percent in short corn to about 15 percent in some soybean fields.',
      'Since 2025, Deere charges $5 for each in-crop acre the system leaves unsprayed, so part of every saving goes to Deere.',
      'In a hypothetical 2,000-acre example, payback ranges from about 1.4 to 5.6 years depending on the retrofit price, before financing and other costs.',
      'Public reporting does not establish whether Tyler’s investment paid for itself.',
    ],
    chapters: [
      { time: '0:00', label: 'Can the investment pay for itself?' },
      { time: '0:23', label: 'The purchase comes before the proof' },
      { time: '1:10', label: 'How targeted spraying changes the economics' },
      { time: '2:00', label: 'One farmer, different field results' },
      { time: '2:47', label: 'Deere’s usage-fee strategy' },
      { time: '3:41', label: 'The hypothetical payback calculation' },
      { time: '4:44', label: 'What changes the answer' },
      { time: '5:52', label: 'What the farmer actually keeps' },
    ],
    sources: [
      {
        label: 'Farmer aims to slash herbicide costs with smart spray retrofit kit (Precision Farming Dealer)',
        date: 'May 15, 2024',
        href: 'https://www.precisionfarmingdealer.com/articles/5957-farmer-aims-to-slash-herbicide-costs-with-smart-spray-retrofit-kit',
      },
      {
        label: 'Maiden See & Spray voyage delivers 87% savings on some fields (Precision Farming Dealer)',
        date: 'July 3, 2024',
        href: 'https://www.precisionfarmingdealer.com/articles/6027-maiden-see-and-spray-voyage-delivers-87-savings-on-some-fields',
      },
      {
        label: 'John Deere See & Spray technology: insights from industry experts (RDO Equipment)',
        date: 'March 17, 2025',
        href: 'https://www.rdoequipment.com/resources/podcasts/john-deere-see---spray-technology--insights-from-industry-experts',
      },
      {
        label: 'Opportunity costs to consider when adopting See & Spray technology (FSA2225)',
        date: 'University of Arkansas Extension',
        href: 'https://www.uaex.uada.edu/publications/pdf/FSA2225.pdf',
      },
      {
        label: 'Targeted herbicide cost requirements for adoption of See & Spray technology',
        date: 'February 28, 2026',
        href: 'https://acsess.onlinelibrary.wiley.com/doi/10.1002/agg2.70324',
      },
      {
        label: 'See & Spray Premium getting started and Application Savings Guarantee definition',
        date: 'John Deere Canada',
        href: 'https://www.deere.ca/en/technology-products/precision-ag-technology/precision-upgrades/sprayer-upgrades/getting-started-premium/',
      },
      {
        label: 'John Deere customers use See & Spray technology across five million acres in 2025',
        date: 'November 4, 2025',
        href: 'https://www.deere.ca/en/news/all-news/see-spray-technology-across-5-million-acres/',
      },
    ],
    sourcesNote:
      'The sources cited in the documentary. The payback example is hypothetical, uses USD and documented 2025 U.S. usage terms, and is not Tyler’s accounts. Deere’s Canadian pages are used for definitions only; their CAD prices are not used.',
    related: [
      {
        href: '/blog/noibu-ai-agents-closed-loop-ecommerce',
        title: 'AI Gets Interesting When It Has to Prove the Change Worked',
        note: 'Measuring the result after the change, not the activity, is the harder half of any technology investment.',
      },
      {
        href: '/blog/ai-wont-fix-broken-work',
        title: 'AI Won’t Fix Broken Work',
        note: 'Technology savings depend on the operation around them, the same reason one sprayer produced different results on different fields.',
      },
      {
        href: '/blog/walmart-people-led-tech-powered-operating-model',
        title: 'Walmart Is Showing What People-Led, Tech-Powered Actually Looks Like',
        note: 'Another operator dividing the work between systems that act and people who decide whether it pays.',
      },
    ],
    credits:
      'Written by Robert Hu; narration uses his authorized AI voice. Licensed stock fields, people and financial scenes are illustrative and do not represent Tyler, his farm or his accounts. Deere exhibition clips are CES event coverage, not See & Spray field demonstrations. The thumbnail is AI-generated illustrative cover art, not a photograph of Tyler’s machine or proof of performance. Independent commentary; no Deere or farmer sponsorship or endorsement. Music credits are listed in the YouTube description.',
    feature: {
      eyebrow: 'Featured Video',
      title: 'John Deere’s AI Saves Chemicals. But Does It Pay?',
      description:
        'A camera can decide where to spray. One farmer’s results and a transparent payback example show why the savings percentage is only the start of the answer.',
      cta: 'Watch the documentary',
    },
  },
  {
    slug: 'chatgpt-workout-plan-trust',
    youtubeId: 'ipCBJ6wJf7o',
    youtubeTitle: 'ChatGPT Built My Workout Plan. Could I Trust It?',
    h1: 'Can You Trust a ChatGPT Workout Plan? What to Check',
    seoTitle: 'Can You Trust a ChatGPT Workout Plan? What to Check',
    metaDescription:
      'ChatGPT asked about my schedule and my gym, and the plan felt personal. Why a tailored answer still needs checking, and which questions actually matter.',
    dek: 'A plan can fit your calendar and still contain a bad assumption. Personal is not the same as verified.',
    uploadDate: '2026-10-17T16:00:25-07:00',
    duration: 'PT6M16S',
    durationLabel: '6 min 16 sec',
    topic: 'AI in practice',
    subject: 'ChatGPT',
    thumbnail: '/images/videos/chatgpt-workout-plan-trust.jpg',
    thumbnailAlt: 'Video thumbnail: an illustrated portrait of Robert Hu thinking beside the ChatGPT logo',
    sections: [
      {
        paragraphs: [
          'I asked ChatGPT to help me build a workout plan. It asked about my schedule, the gym I use and what would actually work for me, and it looked into the equipment available there. The result felt surprisingly personal. But a plan can fit your calendar and still contain a bad assumption.',
          'This is one person’s experience, and the video makes no fitness claims. It uses that experience to look at a broader question: what an AI needs to know, which parts you should check, and what happens after it hands you the plan.',
        ],
      },
      {
        heading: 'Why context changes the answer',
        paragraphs: [
          'Think of planning a week with movable tiles on a table. The appointments you already have take up space, and a new commitment has to fit in a gap. Leave the appointments off the table and you can arrange a beautiful week that never existed.',
          'That is a useful way to think about context. Your goal points ChatGPT toward an outcome, and your constraints tell it what an acceptable answer has to accommodate. OpenAI’s prompting guide suggests including the goal, the context, the output you want and the boundaries the answer must respect. ChatGPT can still misunderstand constraints or fail to apply them, so the analogy only goes so far.',
        ],
      },
      {
        heading: 'Which questions actually matter',
        paragraphs: [
          'ChatGPT’s questions prompted me to supply details about my schedule and my gym. Two people with the same goal can need very different plans: one has a long block of free time, the other has short windows scattered through the week. A good question exposes that difference early. The practical test is whether a different answer would change the plan.',
          'Questions also cost attention. If you are trying to plan one evening and the assistant asks you to map your whole month, some of that may be relevant, but it is a lot of work before one decision. A useful assistant has to choose which unknowns matter now.',
        ],
      },
      {
        heading: 'Finding information is not verifying it',
        paragraphs: [
          'The part that made the plan feel most tailored was the equipment list for my gym. I have not checked that list against the gym itself. ChatGPT can search the web and show its sources, but finding a page and confirming the real world are separate jobs. If a gym’s page lists equipment that has since been replaced, a plan can fit the page and still fail when you walk in. Check the details your next action depends on.',
        ],
      },
      {
        heading: 'Check-ins and accountability',
        paragraphs: [
          'We also set up scheduled check-ins, which helped me stay accountable. ChatGPT supports scheduled tasks where they are enabled, and setup varies by account and app. A reminder does not tell you whether the plan worked, though. A check-in that asks what you completed and what got in the way gives the next revision something real to work with.',
        ],
      },
      {
        heading: 'Personal does not mean verified',
        paragraphs: [
          'Personalization is where it gets tricky. An answer that uses your schedule and names your gym sounds credible before you have checked the advice itself. OpenAI’s own guidance says a polished response can still be incomplete or wrong, and knowing my preferences does not make an AI a clinician. Keep two checks separate: whether the plan fits my circumstances, and whether the advice is sound. Both have to hold.',
        ],
      },
      {
        heading: 'A better standard for useful AI',
        paragraphs: [
          'You do not need an elaborate prompt. Name the result you want, give the limits that will change the answer, and ask for the questions that would make the plan more realistic. When the plan arrives, ask how it used your constraints, then check it yourself. If it puts a task in an hour you said was unavailable, point to the conflict and ask for a correction.',
          'That is the standard I would hold AI products to, and it is the same one emerging in commerce, where [an agent’s model of the person matters more than how well it trades](/blog/anthropic-project-swap-agentic-commerce-shopper-preferences). The first plan is easy to admire. The better test is whether the product still helps when your week changes.',
          'What is one question an AI asked you that led to a better answer?',
        ],
      },
    ],
    takeaways: [
      'A plan can fit your calendar and still contain a bad assumption.',
      'The questions worth answering are the ones that would change the plan.',
      'Finding information about the real world, such as a gym’s equipment list, is not the same as confirming it.',
      'Scheduled check-ins can support accountability, but a reminder does not show whether a plan worked.',
      'Check two things separately: whether the answer fits your circumstances, and whether the advice itself is sound.',
    ],
    chapters: [
      { time: '0:00', label: 'The questions that surprised me' },
      { time: '0:18', label: 'When a plan meets real life' },
      { time: '0:49', label: 'Why context changes the answer' },
      { time: '1:24', label: 'Which questions actually matter?' },
      { time: '1:57', label: 'Finding information versus verifying it' },
      { time: '2:26', label: 'Check-ins and accountability' },
      { time: '3:00', label: 'Personal does not mean verified' },
      { time: '3:36', label: 'Questions cost attention' },
      { time: '4:07', label: 'Start with your constraints' },
      { time: '4:37', label: 'Check, correct and revisit' },
      { time: '5:09', label: 'A better standard for useful AI' },
      { time: '5:40', label: 'Make the next step fit your life' },
    ],
    sources: [
      {
        label: 'Prompting (ChatGPT Learn)',
        date: 'OpenAI',
        href: 'https://learn.chatgpt.com/docs/prompting',
      },
      {
        label: 'Web search (ChatGPT Learn)',
        date: 'OpenAI',
        href: 'https://learn.chatgpt.com/docs/web-search',
      },
      {
        label: 'Scheduled tasks (ChatGPT Learn)',
        date: 'OpenAI',
        href: 'https://learn.chatgpt.com/docs/automations',
      },
      {
        label: 'Use ChatGPT: reviewing results (ChatGPT Learn)',
        date: 'OpenAI',
        href: 'https://learn.chatgpt.com/docs/use-chatgpt',
      },
    ],
    sourcesNote:
      'The OpenAI documentation cited in the video. Product features and availability can vary by account and app. The experience described is Robert Hu’s own, and no fitness outcomes are claimed.',
    related: [
      {
        href: '/blog/amazon-rufus-account-memory',
        title: 'Amazon Rufus Now Remembers Every Shopper. Your Listing Data Just Became the Filter.',
        note: 'Shopping assistants are starting to remember preferences too, which raises the same question about what an answer is built on.',
      },
      {
        href: '/blog/walmart-sparky-ai-personalization-pricing-governance',
        title: 'AI Commerce Governance Is Becoming a Customer Promise',
        note: 'Which personal data an AI may use to make a decision is becoming a promise companies make to customers.',
      },
      {
        href: '/blog/amazon-alexa-shopping-search-anticipation',
        title: 'Amazon Is Extending the Shopping Journey Beyond the Search',
        note: 'Assistants are moving from answering once to checking back, the commerce version of a scheduled check-in.',
      },
    ],
    credits:
      'Written by Robert Hu; narration uses his authorized AI voice, and personal scenes and the thumbnail are illustrative animation based on his authorized likeness. Other people, devices and gyms are licensed illustrative stock footage from Mixkit. Independent editorial video; no OpenAI sponsorship or endorsement. Music credits are listed in the YouTube description.',
    feature: {
      eyebrow: 'Featured Video',
      title: 'ChatGPT Built My Workout Plan. Could I Trust It?',
      description:
        'ChatGPT asked about my schedule and my gym, and the plan felt personal. Why a tailored answer still needs checking.',
      cta: 'Watch the video',
    },
  },
  {
    slug: 'fedex-overnight-delivery-promise',
    youtubeId: '03QxRmdbn_Y',
    youtubeTitle: 'Why Fast Sorting Isn’t Enough for FedEx',
    h1: 'How FedEx Overnight Works: Why Fast Sorting Isn’t Enough',
    seoTitle: 'How FedEx Overnight Works: Why Fast Sorting Isn’t Enough',
    metaDescription:
      'FedEx can sort 56,000 packages an hour in one Memphis building. Overnight delivery still depends on cutoffs, connections, weather and the seller’s stock.',
    dek: 'A fast sorting building is one link in an overnight promise. The cutoff, the connection, the weather and the seller’s inventory decide whether the promise holds.',
    uploadDate: '2026-10-16T16:00:25-07:00',
    duration: 'PT6M22S',
    durationLabel: '6 min 22 sec',
    topic: 'Delivery and logistics',
    subject: 'FedEx',
    thumbnail: '/images/videos/fedex-overnight-delivery-promise.jpg',
    thumbnailAlt: 'Documentary thumbnail: illustrative artwork of a FedEx cargo jet on a night ramp beside a large clock and a package',
    sections: [
      {
        paragraphs: [
          'An overnight delivery looks like one fast trip. It is really a chain of deadlines: a cutoff to make, a sort to finish, a flight to catch and a final delivery to complete, each one waiting on the last.',
          'FedEx says it is investing over multiple years to modernize its Memphis hub, the most visible part of that chain. The more useful question is what else has to go right for a package to arrive when the customer was told it would.',
        ],
      },
      {
        heading: 'Overnight has a cutoff and a definition',
        paragraphs: [
          'The first deadline arrives before any plane is involved. FedEx says a shipment has to reach it before the overnight cutoff, and that the latest drop-off time varies by location. In general, overnight means the next business day, and the exact time depends on the service: FedEx lists First Overnight by 8 a.m. to most areas, Priority Overnight by 10:30 a.m. to most businesses and by noon to most residences, and Standard Overnight by 5 p.m. to businesses and 8 p.m. to residences.',
          'Overnight does not mean every package reaches every address first thing tomorrow. The date a shopper sees at checkout and the time the carrier can actually meet have to describe the same promise.',
        ],
      },
      {
        heading: 'Why packages meet at a hub',
        paragraphs: [
          'Bringing many shipments together seems slower than sending each one directly. It works the way a connecting airport does: travelers from different cities share one stop, then leave on different onward flights. In its fiscal 2026 annual report, FedEx describes its largest sorting facility, in Memphis, as the center of a multiple hub-and-spoke system, with a second national air hub in Indianapolis and regional air hubs in Fort Worth, Newark and Oakland. A given package does not necessarily pass through Memphis.',
          'The airport analogy has a limit. A traveler can read a departure board and walk to the gate. A cardboard box needs its information read and its movement directed, again and again, while the next departure gets closer.',
        ],
      },
      {
        heading: 'What a faster sort building adds',
        paragraphs: [
          'In October 2024, FedEx unveiled Secondary 25, an automated sorting building at its Memphis World Hub that it said can sort 56,000 packages an hour, roughly 15 a second at that stated capacity. FedEx said six-sided scanning captures each package’s size and barcode for accurate sorting, 1,000 cameras monitor the flow, and a new hub operations command center is three times the size of the original. It also said the building lets packages be sorted in one building during weather events.',
          'The scanning matters more than the speed. A box can move quickly down the wrong path, and the information is what gives the movement a destination. A capacity figure describes what a building is designed to handle, not measured throughput or what happens to any individual package.',
        ],
      },
      {
        heading: 'The connection is the test',
        paragraphs: [
          'Imagine two packages on the same route. One reaches its planned connection in time; the other arrives after that connection has left. They may have spent almost the same time on a conveyor, yet their onward journeys now differ. This is an illustration, not a reconstruction of a FedEx shipment, but the point holds: time saved in one stage has to survive the next handoff, through the people who load aircraft, coordinate movements and deliver the parcel.',
        ],
      },
      {
        heading: 'The weather gets a vote',
        paragraphs: [
          'The belts inside a building can keep running while snow, ice or disruption at an airport changes what can happen outside. In its annual report, FedEx lists severe winter weather and disruptions at airport facilities among factors that could cause the cancellation or delay of a significant portion of its flights. The FAA describes clearing snow from runways and deicing aircraft as part of operating safely in winter. Those steps take time for a reason, and a delivery deadline does not remove the need for them.',
          'That is a harder test for technology than speeding up the normal sequence: how useful the information is once the original plan stops working.',
        ],
      },
      {
        heading: 'The promise starts at checkout',
        paragraphs: [
          'One limit on the shipping promise comes much earlier than any airport. I recently ordered a product that cost a few hundred dollars and only learned afterward that it was backordered. The seller could not ship until stock returned about three weeks later, and the whole delay ran past four weeks. That was not a FedEx experience. It was a reminder that a carrier cannot move a box the seller does not have.',
          'Some of the fix is ordinary inventory control. Microsoft’s order management tools calculate an available-to-promise quantity from expected stock changes, and can put an estimated shipment date on a backordered line. Shopify stops customers from buying an out-of-stock item by default, unless the merchant chooses to keep selling. A clearly explained backorder gives the customer a choice. Discovering the wait after paying is a different experience.',
        ],
      },
      {
        heading: 'The lesson: connect the promise to the operation',
        paragraphs: [
          'What matters to me as a customer is consistency. Once a service works, I make plans around it, and every miss asks me to rethink them. That makes the business test bigger than conveyor speed or the number of cameras. It is the same lesson as [the handoffs inside a port](/videos/why-containers-wait-at-port): the promise at checkout has to match what every later stage can deliver.',
          'When an order matters, what earns your trust: the fastest advertised date, or one you can plan around?',
        ],
      },
    ],
    takeaways: [
      'Overnight means the next business day for shipments that beat a cutoff, which FedEx says varies by location, and delivery times differ by service.',
      'FedEx runs a multiple hub-and-spoke network centered on Memphis, and a given package does not necessarily pass through Memphis.',
      'Secondary 25’s 56,000 packages an hour is a stated design capacity, not a measure of throughput or delivery reliability.',
      'FedEx lists severe winter weather and airport disruptions among factors that could delay or cancel a significant portion of its flights.',
      'The delivery promise starts at checkout: no carrier can recover a date the seller’s inventory cannot support.',
    ],
    chapters: [
      { time: '0:00', label: 'One time everyone has to meet' },
      { time: '0:29', label: 'The first deadline' },
      { time: '1:13', label: 'Why bring the boxes together?' },
      { time: '1:59', label: 'The box becomes a routing decision' },
      { time: '2:57', label: 'The connection is the test' },
      { time: '3:36', label: 'The weather gets a vote' },
      { time: '4:23', label: 'My order had an earlier problem' },
      { time: '5:23', label: 'The promise has to hold together' },
      { time: '6:06', label: 'Credits' },
    ],
    sources: [
      {
        label: 'FedEx overnight shipping services',
        date: 'FedEx',
        href: 'https://www.fedex.com/en-us/shipping/overnight.html',
      },
      {
        label: 'FedEx unveils new automated sorting facility at Memphis World Hub',
        date: 'October 30, 2024',
        href: 'https://newsroom.fedex.com/newsroom/global-english/fedex-unveils-new-automated-sorting-facility-at-memphis-world-hub',
      },
      {
        label: 'FedEx Corporation annual report on Form 10-K, fiscal 2026',
        date: 'Fiscal year ended May 31, 2026',
        href: 'https://www.sec.gov/Archives/edgar/data/1048911/000104891126000105/fdx-20260531.htm',
      },
      {
        label: 'From Frost to Flight (FAA winter operations)',
        date: 'Federal Aviation Administration',
        href: 'https://www.faa.gov/blog/clearedfortakeoff/frost-flight',
      },
      {
        label: 'Inventory Visibility on-hand change schedules and available to promise',
        date: 'Microsoft Learn',
        href: 'https://learn.microsoft.com/en-us/dynamics365/supply-chain/inventory/inventory-visibility-available-to-promise',
      },
      {
        label: 'Set up backorder and preorder functionality',
        date: 'Microsoft Learn',
        href: 'https://learn.microsoft.com/en-us/dynamics365/intelligent-order-management/backorder-preorder',
      },
      {
        label: 'Selling out of stock products',
        date: 'Shopify Help Center',
        href: 'https://help.shopify.com/en/manual/inventory-and-locations/setup/selling-when-out-of-stock',
      },
    ],
    sourcesNote:
      'The reporting sources cited in the documentary. Capacity figures are FedEx’s stated design capacity, not measured throughput or delivery reliability, and diagrams and relative timing in the film are conceptual.',
    related: [
      {
        href: '/blog/ai-checkout-interface-commerce-infrastructure',
        title: 'If Checkout Disappears, What Does the Retailer Still Own?',
        note: 'Checkout is a sequence of decisions, starting with whether the item is actually in stock right now.',
      },
      {
        href: '/blog/kroger-ecommerce-operating-model',
        title: 'Kroger’s Ecommerce Reset Is Becoming an Operating Model',
        note: 'Why knowing where inventory actually is, and routing on the promised service level, is the real ecommerce work.',
      },
      {
        href: '/blog/ai-wont-fix-broken-work',
        title: 'AI Won’t Fix Broken Work',
        note: 'AI can help anticipate shortages, but only on top of inventory information that is dependable.',
      },
    ],
    credits:
      'Written by Robert Hu; narration produced with his authorized ElevenLabs voice clone. Illustrative stock footage from Mixkit under its Stock Video Free License; no FedEx company-supplied footage is used, and stock scenes do not show FedEx facilities, employees or specific shipments. Original diagrams by theroberthu. The thumbnail is illustrative cover artwork, not a photograph of a FedEx event or location. The backorder story is Robert’s own and unrelated to FedEx. Music credits are listed in the YouTube description.',
    feature: {
      eyebrow: 'Featured Video',
      title: 'Why Fast Sorting Isn’t Enough for FedEx',
      description:
        'A fast conveyor is one link in an overnight promise. Follow the cutoffs, connections and weather, and the inventory decision that comes before all of them.',
      cta: 'Watch the documentary',
    },
  },
  {
    slug: 'why-containers-wait-at-port',
    youtubeId: 'INAvc-RRBak',
    youtubeTitle: 'The Ship Arrived. Why Is Your Order Still Waiting?',
    h1: 'Why Containers Wait at Port After the Ship Arrives',
    seoTitle: 'Why Containers Wait at Port After the Ship Arrives',
    metaDescription:
      'A container can be off the ship and still not ready to leave. What happens between the crane and the gate, and why it shapes the delivery date you see.',
    dek: 'Getting a box across the ocean and getting it out of a port are different jobs. The handoffs in between decide whether a delivery date holds.',
    uploadDate: '2026-10-15T16:00:14-07:00',
    duration: 'PT6M55S',
    durationLabel: '6 min 55 sec',
    topic: 'Delivery and logistics',
    subject: 'container ports',
    thumbnail: '/images/videos/why-containers-wait-at-port.jpg',
    thumbnailAlt: 'Documentary thumbnail: a loaded container ship at port under the words Arrived. Still waiting.',
    sections: [
      {
        paragraphs: [
          'A container ship reaching port feels like the end of the journey. For the goods inside, it is the start of a different one. The box still has to come off the ship, find a place in the yard, meet a truck or a train, and leave through the gate, and most of those steps depend on something other than the crane.',
          'This documentary follows those handoffs using U.S. government footage from Long Beach and Houston. It illustrates stages of port operations, not the journey of one traced shipment or today’s congestion.',
        ],
      },
      {
        heading: 'Arrived does not mean available',
        paragraphs: [
          'A shipping container lets cargo change vehicles without unloading every item at every handoff: ship to terminal, then onward by truck or rail. Inside the port, the useful question shifts from where the ship is to where one particular container is, and what has to happen before someone can collect it.',
          'An airport is a helpful comparison. Landing gets your suitcase to the right airport; it does not put the bag in your hand. Ports work differently, since containers follow different routes and can sit in storage, but the distinction holds.',
        ],
      },
      {
        heading: 'The yard is where waiting takes shape',
        paragraphs: [
          'The ship-to-shore crane is the dramatic part. Behind it, yard equipment stacks containers and retrieves them for the next move, and the terminal has to balance space, access and the order in which cargo will be needed. A box at the bottom of a stack turns every box above it into extra work. A 2014 Port of Los Angeles report on terminal automation made the same point about stacking: taller stacks delay the retrieval of local imports.',
          'That is why a faster crane does not automatically mean faster delivery. If the ship side speeds up while pickups slow down, more boxes arrive than leave, and the yard has to hold the difference. The constraint could be equipment, space, road access or coordination with the businesses collecting cargo. None of it shows up by watching one crane.',
        ],
      },
      {
        heading: 'A truck needs more than a box',
        paragraphs: [
          'At the gate, several things have to line up: the right container, a chassis to carry it, a workable pickup appointment, and somewhere for the cargo to go at the other end. The Port of Los Angeles publishes data on container, rail and chassis dwell time, sorts waiting import containers into zero to four days, five to eight, and nine or more, and reports booked against fulfilled truck appointments. Those are different views of the same coordination problem.',
          'Rail is the other way out. The port says its five on-dock rail yards serve its seven container terminals, and that an average train of 30 double-stack cars replaces about 400 truck trips.',
        ],
      },
      {
        heading: 'Inspection, screening and release are separate questions',
        paragraphs: [
          'The Houston footage shows Coast Guard teams inspecting containers for safety compliance. That is not evidence that every container is opened, and it is not a customs release. U.S. Customs and Border Protection has a separate role: it screens and targets imports with a risk-management approach and does not disclose its targeting rules. In its importer guidance for the 2005 C-TPAT security criteria, CBP said member importers were six times less likely to face a security-related cargo exam, which it described as leading to a more predictable supply chain.',
          'Physical location and permission to move are different things. A container can sit in the yard and still not be free to leave.',
        ],
      },
      {
        heading: 'The less visible technology',
        paragraphs: [
          'The obvious upgrade is a bigger or better machine, and sometimes that is exactly what is needed. Yusen Terminals in Los Angeles, for example, announced a four-year test of a hydrogen fuel cell yard crane in 2024.',
          'Another kind of improvement is knowing what is coming before it arrives. In September 2020, the Port of Los Angeles began publishing The Signal, a weekly view of the cargo due over the next three weeks, broken down by container type and by whether it would leave by rail or truck. It is built on data from Wabtec’s Port Optimizer.',
          'The Signal cannot create a truck, clear a shipment or empty a full warehouse. What it gives railroads, truckers, equipment providers and warehouses is a chance to find the constraint early enough to act. At a port, software matters when it changes a physical decision. It is the same gap I described in [Kroger’s ecommerce reset](/blog/kroger-ecommerce-operating-model): owning the pieces and operating them as one connected system are different achievements.',
        ],
      },
      {
        heading: 'The promise you actually notice',
        paragraphs: [
          'A retailer may already have your item in a warehouse when you order, so that delivery is not necessarily waiting on a ship. Replenishment is. The next shipment decides whether the product stays in stock and whether the same delivery promise keeps working.',
          'What matters to me as a customer is consistency. Once a service works, I plan around it, and a two-day promise becomes normal. Repeated misses change how much I trust the next date. When every handoff connects, nobody thinks about the port at all. They see an item in stock and a delivery date they believe.',
          'Which matters more to you: faster delivery, or a date you can actually trust?',
        ],
      },
    ],
    takeaways: [
      'A container that has arrived is not yet available: it still needs a place in the yard, a truck or train, and permission to leave.',
      'A faster crane only helps if the next stage can take more cargo. Otherwise the yard holds the difference.',
      'The Port of Los Angeles publishes dwell-time and truck-appointment data because pickup coordination is part of the bottleneck.',
      'A safety inspection, a customs decision and a container’s physical location are three separate questions.',
      'Forward-looking tools such as the port’s The Signal help partners find a constraint early enough to act on it.',
    ],
    chapters: [
      { time: '0:00', label: 'The arrival' },
      { time: '0:38', label: 'A box built for handoffs' },
      { time: '1:26', label: 'The crane is only the beginning' },
      { time: '2:08', label: 'The waiting has a shape' },
      { time: '2:55', label: 'A truck needs more than a box' },
      { time: '3:44', label: 'Safety is part of the journey' },
      { time: '4:31', label: 'The less visible technology' },
      { time: '5:21', label: 'The promise you actually notice' },
      { time: '6:05', label: 'Beyond the gate' },
      { time: '6:39', label: 'Credits' },
    ],
    sources: [
      {
        label: 'Port of Los Angeles introduces new data tool, The Signal',
        date: 'September 2020',
        href: 'https://portoflosangeles.org/references/news_090320_signal',
      },
      {
        label: 'Port of Los Angeles cargo operations dashboard',
        date: 'Port of Los Angeles',
        href: 'https://portoflosangeles.org/business/operations',
      },
      {
        label: 'On-dock and near-dock rail at the Port of Los Angeles',
        date: 'Port of Los Angeles',
        href: 'https://portoflosangeles.org/business/supply-chain/rail',
      },
      {
        label: 'Container Terminal Automation (Los Angeles Harbor Department report)',
        date: 'March 2014',
        href: 'https://kentico.portoflosangeles.org/getmedia/146d2a00-d871-4886-9c79-6f43e5ba3388/042014_item5_transmittal_3',
      },
      {
        label: 'C-TPAT importer frequently asked questions',
        date: 'U.S. Customs and Border Protection, 2005',
        href: 'https://www.cbp.gov/sites/default/files/documents/importer_faqs_3.pdf',
      },
      {
        label: 'Yusen Terminals hydrogen fuel cell RTG program',
        date: 'May 2024',
        href: 'https://yti.com/2024/05/yusen-terminals-launches-worlds-first-hydrogen-fuel-cell-rtg-program/',
      },
      {
        label: 'B-Roll: Long Beach Sea Port (U.S. Customs and Border Protection)',
        date: 'Filmed August 4, 2021',
        href: 'https://www.dvidshub.net/video/822461/b-roll-long-beach-sea-port',
        note: 'Footage',
      },
      {
        label: 'B-Roll: Long Beach Sea Port, ships and cranes (U.S. Customs and Border Protection)',
        date: 'Filmed August 4, 2021',
        href: 'https://www.dvidshub.net/video/822441',
        note: 'Footage',
      },
      {
        label: 'Coast Guard container inspections B-roll (U.S. Coast Guard)',
        date: 'Filmed September 4, 2025',
        href: 'https://www.dvidshub.net/video/997035/coast-guard-container-inspections-b-roll',
        note: 'Footage',
      },
      {
        label: 'Coast Guard Port of Houston container inspections B-roll (U.S. Coast Guard)',
        date: 'Filmed October 16, 2025',
        href: 'https://www.dvidshub.net/video/1025719/coast-guard-port-houston-container-inspections-b-roll',
        note: 'Footage',
      },
    ],
    sourcesNote:
      'The reporting and footage cited in the documentary. Footage is public-domain U.S. government video from DVIDS and illustrates port operations; it does not trace one shipment or show current conditions.',
    related: [
      {
        href: '/blog/walmart-sparky-q1-earnings-replenishment-shift',
        title: 'Walmart’s Q1 Earnings Revealed the Real Sparky Shift: From Discovery to Reorder',
        note: 'Walmart’s AI assistant is shifting toward reorders, which makes replenishment reliability matter more.',
      },
      {
        href: '/blog/walmart-grocery-ecommerce-growth',
        title: 'Walmart Grocery E-Commerce: 7 Consecutive Quarters Above 20% Growth',
        note: 'How using stores as fulfillment hubs put inventory closer to customers and made faster delivery windows possible.',
      },
      {
        href: '/blog/ai-wont-fix-broken-work',
        title: 'AI Won’t Fix Broken Work',
        note: 'Software only helps when the operation underneath it works, the same lesson as port visibility tools.',
      },
    ],
    credits:
      'Written and narrated by Robert Hu. Footage: U.S. Customs and Border Protection (Mani Albrecht) and U.S. Coast Guard (PA3 Luke Baker), public domain via DVIDS; no agency sponsorship or endorsement is implied. Flow and stacking diagrams are original explanatory illustrations, not measured data or real software interfaces. The thumbnail is AI-generated illustrative cover art. Music credits are listed in the YouTube description.',
    feature: {
      eyebrow: 'Featured Video',
      title: 'The Ship Arrived. Why Is Your Order Still Waiting?',
      description:
        'A container can be off the ship and still not ready to leave. Follow the handoffs between the crane and the gate that decide whether a delivery date holds.',
      cta: 'Watch the documentary',
    },
  },
  {
    slug: 'bosch-semiconductors-dresden',
    youtubeId: '9EhVNMydmM4',
    youtubeTitle: 'Bosch Makes Chips? Inside Its $1.2 Billion Bet',
    h1: 'Bosch Makes Chips: Inside Its $1.2 Billion Dresden Wafer Fab',
    seoTitle: 'Bosch Makes Chips: Inside Its $1.2 Billion Dresden Wafer Fab',
    metaDescription:
      'Bosch has made its own semiconductors since 1958. Inside its Dresden wafer fab, then its biggest single investment, and how you would know if it paid off.',
    dek: 'Bosch built one of Europe’s most advanced chip factories to supply its own power tools and cars. The harder question is how anyone would know it paid off.',
    uploadDate: '2026-10-14T16:00:29-07:00',
    duration: 'PT7M23S',
    durationLabel: '7 min 23 sec',
    topic: 'Manufacturing',
    subject: 'Bosch',
    thumbnail: '/images/videos/bosch-semiconductors-dresden.jpg',
    thumbnailAlt: 'Documentary thumbnail: a cordless drill beside a silicon wafer inside a chip factory',
    sections: [
      {
        paragraphs: [
          'Most people know Bosch for drills, dishwashers and car parts. Fewer know it makes the chips inside many of them. In June 2021, Bosch opened a 300-millimeter wafer fab in Dresden that it called the biggest single investment in its more than 130-year history: roughly one billion euros, or about $1.2 billion at the exchange rate of the time.',
          'The factory is impressive. The more useful question is the one every operator faces after a large technology bet: how to know whether it is paying off.',
        ],
      },
      {
        heading: 'Bosch has made chips for decades',
        paragraphs: [
          'Dresden was not a sudden move into a new industry. Bosch says it started producing power diodes in 1958, and its Reutlingen plant has made application-specific chips since 1970, components that Bosch says were not commercially available. Reutlingen moved to 150-millimeter wafers in 1995 and 200-millimeter wafers in 2010, and today makes automotive chips, MEMS sensors and silicon carbide power semiconductors.',
          'At the 2021 opening, Bosch said it had invested more than 2.5 billion euros in its Reutlingen and Dresden wafer fabs since 2010. Dresden added scale and a newer wafer size to a capability Bosch already had, rather than creating one from nothing.',
        ],
      },
      {
        heading: 'What Bosch built in Dresden',
        paragraphs: [
          'Bosch opened the Dresden fab on June 7, 2021, with 72,000 square meters of floor space and 250 people already working there, a number it planned to grow to roughly 700. It said automotive chips would be the plant’s primary focus.',
          'The first customer was Bosch itself. Bosch said chips from Dresden would go into its power tools from July 2021, six months earlier than planned, with production for automotive customers starting in September, three months early. Those were the dates Bosch announced at the opening.',
        ],
      },
      {
        heading: 'Data, AI and the digital twin',
        paragraphs: [
          'Bosch calls Dresden its first AIoT factory, combining artificial intelligence with connected machines. It said the plant would generate production data equivalent to 500 text pages every second. Bosch says AI looks for tiny error patterns on the wafer surface, called signatures, so their causes can be corrected before they affect the product, and predicts when equipment needs maintenance rather than following a fixed schedule.',
          'The division of labor is spelled out. In Bosch’s words: "The AI algorithm determines when intervention is necessary; humans decide what needs adjusting."',
          'The plant also exists twice. During construction, Bosch recorded the building in a digital twin of roughly half a million 3D objects, from ventilation and cable ducts to production lines, so it can simulate process changes and renovation work without interrupting production. And with camera-equipped data glasses, an equipment specialist in Japan can guide a technician in Dresden through a repair in real time.',
          'All of these are Bosch’s descriptions of how the factory works. Bosch has not published yield, uptime or cost figures that show what each capability delivers.',
        ],
      },
      {
        heading: 'Was it worth the money?',
        paragraphs: [
          'Bosch does not publish the Dresden fab’s returns, so the honest answer is that nobody outside Bosch can say. Group results do not settle it either. In 2025 the Bosch Group reported sales of 91.0 billion euros and an EBIT margin from operations of 2.0 percent, and spent 7.9 billion euros on research and development. Bosch said it continued to make substantial investments in areas including semiconductors. None of that isolates one factory.',
          'If I were evaluating a bet like this from the inside, I would not start with the group margin. I would ask what the factory was supposed to solve: whether it secured chips for Bosch’s own products when supply was tight, what its chips cost compared with buying them, and how quickly it can bring a new product into full production. Bosch has published an early answer to the last of those, the ramp that started ahead of schedule, and very little on the others.',
        ],
      },
      {
        heading: 'The lesson: judge the capability against the problem',
        paragraphs: [
          'Large technology investments are easy to admire and hard to evaluate. A cleanroom, a digital twin and AI-assisted monitoring are visible. The return is not, especially when the factory supplies its owner’s own products and no market price shows up anywhere.',
          'It is the same question I asked about [Walmart buying Jet.com](/videos/walmart-jet-acquisition): the asset is what you can see, but the value sits in the capability it gives you. The way to judge that capability is against the specific problem it was meant to solve, measured from outside the system that produced it.',
          'How would you know if your own biggest technology investment was paying off?',
        ],
      },
    ],
    takeaways: [
      'Bosch has made its own semiconductors since 1958, and its Reutlingen plant has made application-specific chips since 1970.',
      'The Dresden wafer fab opened in June 2021 at roughly one billion euros, about $1.2 billion then, Bosch’s biggest single investment at the time.',
      'Bosch said Dresden chips would reach its power tools six months ahead of plan and automotive customers three months ahead.',
      'Bosch describes AI that spots wafer defects and predicts maintenance, a digital twin of the plant, and remote repairs guided from Japan.',
      'Bosch does not publish the factory’s returns, and group-wide margins cannot show whether a single factory paid off.',
    ],
    chapters: [
      { time: '0:00', label: 'Bosch’s $1.2 billion question' },
      { time: '0:19', label: 'The component inside the product' },
      { time: '0:58', label: 'A semiconductor head start' },
      { time: '1:47', label: 'Building the Dresden factory' },
      { time: '2:41', label: 'The price of precision' },
      { time: '3:33', label: 'Data, AI and the digital twin' },
      { time: '4:20', label: 'Expertise at a distance' },
      { time: '5:05', label: 'Back to power tools and cars' },
      { time: '5:44', label: 'Was it worth the money?' },
      { time: '6:36', label: 'The next production run' },
      { time: '7:05', label: 'Credits' },
    ],
    sources: [
      {
        label: 'Bosch opens wafer fab of the future in Dresden',
        date: 'June 2021',
        href: 'https://www.bosch-presse.de/pressportal/de/en/bosch-opens-wafer-fab-of-the-future-in-dresden-230080.html',
      },
      {
        label: 'Bosch opens chip factory of the future in Dresden (Bosch story)',
        date: 'June 2021',
        href: 'https://www.bosch.com/stories/bosch-chip-factory-dresden/',
      },
      {
        label: 'Bosch semiconductor manufacturing history',
        date: 'Bosch story',
        href: 'https://www.bosch.com/stories/semiconductor-manufacturing/',
      },
      {
        label: 'The Bosch wafer fab in Reutlingen',
        date: 'Bosch Semiconductors',
        href: 'https://www.bosch-semiconductors.com/about-us/where-we-produce/reutlingen/',
      },
      {
        label: 'Bosch Group 2025 business year results',
        date: '2026',
        href: 'https://www.bosch-presse.de/pressportal/us/en/press-release-30336.html',
      },
    ],
    sourcesNote:
      'The Bosch sources cited in the documentary. The dollar figure is an approximate June 2021 equivalent of the euro amount Bosch reported.',
    related: [
      {
        href: '/blog/noibu-ai-agents-closed-loop-ecommerce',
        title: 'AI Gets Interesting When It Has to Prove the Change Worked',
        note: 'Why measuring the outcome, not the activity, is the harder half of any technology investment.',
      },
      {
        href: '/blog/ai-wont-fix-broken-work',
        title: 'AI Won’t Fix Broken Work',
        note: 'Technology amplifies the process underneath it, which is why the process has to be right first.',
      },
      {
        href: '/blog/walmart-people-led-tech-powered-operating-model',
        title: 'Walmart Is Showing What People-Led, Tech-Powered Actually Looks Like',
        note: 'Another large operator dividing the work between systems that flag and people who decide.',
      },
    ],
    credits:
      'Written by Robert Hu; narration uses an authorized AI-assisted version of his voice. Footage and tool photograph: Bosch, used under Bosch’s press-purpose grants with attribution. The thumbnail is an illustrative editorial composite. Independent commentary; no Bosch affiliation or endorsement. Music credits are listed in the YouTube description.',
    feature: {
      eyebrow: 'Featured Video',
      title: 'Bosch Makes Chips? Inside Its $1.2 Billion Bet',
      description:
        'Bosch built a chip factory to supply its own power tools and cars. The harder question is how anyone would know it paid off.',
      cta: 'Watch the documentary',
    },
  },
  {
    slug: 'dominos-turnaround',
    youtubeId: 'tiScF1e9708',
    youtubeTitle: 'Domino’s Fixed Its Pizza. Why Wasn’t That Enough?',
    h1: 'Domino’s Turnaround: Why Fixing the Pizza Wasn’t Enough',
    seoTitle: 'Domino’s Turnaround: Why Fixing the Pizza Wasn’t Enough',
    metaDescription:
      'Domino’s changed its pizza recipe in 2009, but the recipe was only part of the turnaround. What online ordering, the Tracker, closer stores and carryout added.',
    dek: 'The new recipe earned the first order. The ordering system, the stores and the operation behind them decided whether customers came back.',
    uploadDate: '2026-10-13T17:10:01-07:00',
    duration: 'PT9M12S',
    durationLabel: '9 min 12 sec',
    topic: 'Retail strategy',
    subject: 'Domino’s',
    thumbnail: '/images/videos/dominos-turnaround.jpg',
    thumbnailAlt: 'Pizza Wasn’t Enough: documentary thumbnail showing a Domino’s storefront at night with the Domino’s logo',
    sections: [
      {
        paragraphs: [
          'In December 2009, Domino’s announced it was replacing its core pizza recipe: new crust, new sauce, new cheese. Its advertising leaned into the criticism, built around what the company called the challenge of changing negative perceptions of its pizza. The version of the story that stuck is simple. Domino’s admitted the pizza was bad, fixed it, and won.',
          'The recipe mattered. But a better pizza gets someone to order once. Whether they order again depends on everything around the pizza: how easy it is to order, how long it takes, and whether it arrives as promised. That is the less visible part of the turnaround, and it is what this documentary is about.',
        ],
      },
      {
        heading: 'The pizza change worked, by Domino’s own account',
        paragraphs: [
          'Domino’s said its U.S. same store sales grew 9.9% in 2010, which it attributed to "increased store traffic and sustained positive consumer response to its improved pizza and the effectiveness of its advertising." Its CEO, Patrick Doyle, said the decision to improve the pizza "allowed us to build a new base of customers."',
          'So this is not a story where the recipe was a distraction. It is a story where the recipe was not working alone.',
        ],
      },
      {
        heading: 'The timeline changes the story',
        paragraphs: [
          'Domino’s own history puts the technology first. It introduced online and mobile ordering in 2007 and launched the Domino’s Tracker in 2008, letting customers follow an order from the moment it was placed to when it was out of the oven or on its way. The new recipe arrived at the end of 2009.',
          'The ordering system was already in place when the new pizza brought people back to try it. The recipe earned the first order. The ordering experience was waiting for the second.',
          'Domino’s kept building in that direction: saved ordering profiles in 2013, ordering across more devices in 2015, contactless Carside Delivery in 2020. By 2025, it said more than 85% of its U.S. retail sales came through digital channels.',
        ],
      },
      {
        heading: 'The business behind the screen',
        paragraphs: [
          'The app is only the front door. Domino’s says independent franchise owners operated 99% of its stores at the end of 2025. Each order lands in a store someone else owns, with its own staff, ovens and drivers. The Tracker can show the minutes. It cannot create them.',
          'The company’s answer to time and distance has been physical. It calls it fortressing: condensing delivery areas for better delivery service and adding locations closer to its carryout customers. Its own annual report is candid that adding stores nearby may take sales from existing ones. A closer store can make dinner faster, and carryout removes the drive entirely. Both are operating decisions, not interface ones.',
        ],
      },
      {
        heading: 'When the app cannot solve the problem',
        paragraphs: [
          'The year 2022 showed the limit. Domino’s said U.S. same store sales declined 0.8%, which it attributed to lower order counts due in part to labor shortages affecting store hours and staffing, and to stimulus spending in 2021 that did not recur. In the same year, it said about two-thirds of its global retail sales came through digital channels.',
          'A store that is short-staffed or closes early cannot be fixed by a better screen. The ordering system can take the order. It cannot make the pizza or drive it to the door.',
        ],
      },
      {
        heading: 'The next improvement',
        paragraphs: [
          'Domino’s keeps working both sides. It now takes orders through third-party delivery marketplaces, which it describes as part of its growth strategy, opening another doorway into the same kitchens. And in August 2026 it gave customers $5 off a future order for trying its redesigned website and app, with a chance to leave feedback at the end of each online order.',
          'In the documentary I share my own experience as a customer. The technology impressed me. But standing out once is not the same as earning the next order.',
        ],
      },
      {
        heading: 'The lesson: the product earns the trial, the operation earns the repeat',
        paragraphs: [
          'Fixing the product earns a trial. The operation earns the repeat. Walmart learned a version of the same thing after it [bought Jet.com and retired the brand](/videos/walmart-jet-acquisition): the durable value sat in capability, not in the visible asset. For Domino’s, the visible fix was the pizza. The durable advantage was the system that got it to a customer, again and on time.',
          'I have argued that [checkout was never the page](/blog/ai-checkout-interface-commerce-infrastructure). In the same way, ordering was never the app. The screen is where a customer meets the operation, and it can only promise what the operation can keep.',
          'Would a better ordering experience make you choose Domino’s again, or does the pizza decide?',
        ],
      },
    ],
    takeaways: [
      'Domino’s replaced its core pizza recipe in December 2009 and credited the improved pizza and its advertising for 9.9% U.S. same store sales growth in 2010.',
      'Online and mobile ordering (2007) and the Domino’s Tracker (2008) came before the recipe change, not after it.',
      'More than 85% of Domino’s U.S. retail sales came through digital channels in 2025, and franchise owners run 99% of its stores.',
      'Labor shortages cut order counts in 2022, a problem a better app could not solve.',
      'The product earns the first order. The operation behind the app earns the next one.',
    ],
    chapters: [
      { time: '0:00', label: 'The public admission' },
      { time: '0:27', label: 'The second order is the real test' },
      { time: '1:29', label: 'The timeline changes the story' },
      { time: '2:21', label: 'The minutes you cannot see' },
      { time: '3:07', label: 'The business behind the screen' },
      { time: '3:53', label: 'Why another store can change dinner' },
      { time: '4:38', label: 'Carryout changes the equation' },
      { time: '5:10', label: 'When the app cannot solve the problem' },
      { time: '6:04', label: 'A new doorway into the same operation' },
      { time: '6:54', label: 'The operation and the next improvement' },
      { time: '7:46', label: 'What would make me choose it again' },
      { time: '8:52', label: 'Credits' },
    ],
    sources: [
      {
        label: 'Domino’s company history and ordering timeline',
        date: 'Company history page',
        href: 'https://biz.dominos.com/about-us/history/',
      },
      {
        label: 'Celebrating 50th Year, Domino’s Pizza Gives Itself a Makeover',
        date: 'December 2009',
        href: 'https://ir.dominos.com/news-releases/news-release-details/celebrating-50th-year-dominos-pizza-gives-itself-makeover',
      },
      {
        label: 'Domino’s Pizza Announces 2010 Financial Results',
        date: 'March 2011',
        href: 'https://ir.dominos.com/news-releases/news-release-details/dominos-pizza-announces-2010-financial-results',
      },
      {
        label: 'Domino’s 2022 annual report (carryout, fortressing and staffing)',
        date: 'Fiscal 2022 (PDF)',
        href: 'https://ir.dominos.com/static-files/077efb6a-962c-49f3-bd58-0be4a2bec18a',
      },
      {
        label: 'Domino’s Fourth Quarter and Fiscal 2025 Financial Results',
        date: 'February 2026',
        href: 'https://ir.dominos.com/node/24181',
      },
      {
        label: 'Domino’s Is Paying Customers to Beta Test Its New Website and App',
        date: 'August 2026',
        href: 'https://ir.dominos.com/news-releases/news-release-details/dominosr-paying-customers-beta-test-its-new-website-and-app',
      },
    ],
    sourcesNote: 'The Domino\u2019s primary sources cited in the documentary.',
    related: [
      {
        href: '/blog/kroger-ecommerce-operating-model',
        title: 'Kroger’s Ecommerce Reset Is Becoming an Operating Model',
        note: 'Why proximity, store density and execution matter more than any single digital project.',
      },
      {
        href: '/blog/ai-wont-fix-broken-work',
        title: 'AI Won’t Fix Broken Work',
        note: 'A better tool on top of a broken workflow makes the workflow faster, not better.',
      },
      {
        href: '/blog/retailers-ai-traffic-customer-ownership',
        title: 'Retailers Want AI Shopping Traffic. They Do Not Want to Lose the Customer.',
        note: 'The trade-off when a third-party platform becomes the doorway to your operation.',
      },
    ],
    credits:
      'Written and narrated by Robert Hu; narration uses his authorized ElevenLabs voice. Independent documentary commentary; no affiliation with or endorsement by Domino’s. Stock footage is illustrative and does not depict actual Domino’s operations. Thumbnail photograph: “Domino’s by night” by Mr. Blue MauMau, CC BY 2.0. Music, photograph and footage credits are listed in the YouTube description.',
    feature: {
      eyebrow: 'Featured Video',
      title: 'Domino’s Fixed Its Pizza. Why Wasn’t That Enough?',
      description:
        'Domino’s fixed its pizza in 2009. The harder part was everything that had to happen after the order.',
      cta: 'Watch the documentary',
    },
  },
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
    topic: 'Retail strategy',
    subject: 'Walmart’s Jet.com acquisition',
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
    sourcesNote: 'Walmart primary sources cited in the documentary, plus one additional source used on this page.',
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
export const FEATURED_VIDEO_SLUG: string | null = 'tomra-bottle-recycling-business'

export function getVideo(slug: string): VideoEntry | undefined {
  return VIDEOS.find((v) => v.slug === slug)
}

/**
 * YouTube Shorts from the channel. Shorts do not get companion pages: a
 * one-minute clip makes a thin page. They appear as a row on /videos and,
 * where a Short genuinely relates to a documentary, on that companion page.
 * Values are from each watch page; add new Shorts at the top.
 */
export type ShortEntry = {
  youtubeId: string
  /** Title exactly as published on YouTube. */
  title: string
  /** ISO 8601, from the YouTube watch page. */
  uploadDate: string
  durationLabel: string
  /** Local copy of YouTube's vertical frame (oar2), 540x960. */
  thumbnail: string
  /** Companion page slugs this Short relates to. */
  related?: string[]
}

export const SHORTS: ShortEntry[] = [
  { youtubeId: 'gGjWbdE90fU', title: 'IBM Wants AI to Spot Fraud Before Your Money Leaves', uploadDate: '2026-10-26T17:00:22-07:00', durationLabel: '0:51', thumbnail: '/images/shorts/gGjWbdE90fU.jpg' },
  { youtubeId: 'O-eEMtETYxQ', title: 'This Flying Robot Weighs Less Than a Gram. Battery Included.', uploadDate: '2026-10-26T09:00:20-07:00', durationLabel: '0:51', thumbnail: '/images/shorts/O-eEMtETYxQ.jpg' },
  { youtubeId: 'RbEGpMcUQag', title: 'Why Intel Asked Washington for a Robot Exception', uploadDate: '2026-10-25T17:00:26-07:00', durationLabel: '0:58', thumbnail: '/images/shorts/RbEGpMcUQag.jpg', related: ['intel-chip-manufacturing'] },
  { youtubeId: 'CCZVT8yf0mE', title: 'This Tiny Robot Has Muscles Grown From Mouse Cells', uploadDate: '2026-10-25T09:00:05-07:00', durationLabel: '0:54', thumbnail: '/images/shorts/CCZVT8yf0mE.jpg' },
  { youtubeId: 'BqoMSfQ5laY', title: 'This Robot Gets Hired for One Thing: Your Attention', uploadDate: '2026-10-24T17:00:28-07:00', durationLabel: '0:54', thumbnail: '/images/shorts/BqoMSfQ5laY.jpg' },
  { youtubeId: 'lSq4QLsbP0w', title: "Alabama's AI Play: Shorter Lines, More Football", uploadDate: '2026-10-24T10:59:06-07:00', durationLabel: '0:50', thumbnail: '/images/shorts/lSq4QLsbP0w.jpg' },
  { youtubeId: 'm_RQj5lvi0Y', title: 'Before AI Can Work, Someone Has to Deliver This', uploadDate: '2026-10-24T09:00:18-07:00', durationLabel: '0:55', thumbnail: '/images/shorts/m_RQj5lvi0Y.jpg' },
  { youtubeId: 'Z8-efcDaMXc', title: "This Robot Has Laptop DNA. Here's Why.", uploadDate: '2026-10-23T16:00:00-07:00', durationLabel: '0:55', thumbnail: '/images/shorts/Z8-efcDaMXc.jpg' },
  { youtubeId: 'q4zsspHfZLQ', title: 'Muse vs Dot vs Grok Bot: Which AI Saves You Work?', uploadDate: '2026-10-23T14:00:23-07:00', durationLabel: '0:58', thumbnail: '/images/shorts/q4zsspHfZLQ.jpg' },
  { youtubeId: 'Xu7qe2-ulyM', title: 'Why Picking Up Clothes Is So Hard for Robots', uploadDate: '2026-10-22T18:00:15-07:00', durationLabel: '0:49', thumbnail: '/images/shorts/Xu7qe2-ulyM.jpg', related: ['ai-business-roi-payback'] },
  { youtubeId: '0wYNm3GRmTA', title: 'Mercedes Put a V8 Soundtrack in an Electric SUV', uploadDate: '2026-10-22T16:45:16-07:00', durationLabel: '0:56', thumbnail: '/images/shorts/0wYNm3GRmTA.jpg' },
  { youtubeId: 'ESdyr9S3yYI', title: "Why NASA's X-59 Has Such a Long Nose", uploadDate: '2026-10-21T18:00:04-07:00', durationLabel: '0:57', thumbnail: '/images/shorts/ESdyr9S3yYI.jpg' },
  { youtubeId: '4mSBvhhUpGM', title: "Why Volkswagen Covered This EV's Rear Wheels", uploadDate: '2026-10-21T15:00:14-07:00', durationLabel: '0:55', thumbnail: '/images/shorts/4mSBvhhUpGM.jpg' },
  { youtubeId: '3TBqjdqBIBQ', title: 'Why Volkswagen Is Bringing Buttons Back', uploadDate: '2026-10-20T19:00:27-07:00', durationLabel: '1:00', thumbnail: '/images/shorts/3TBqjdqBIBQ.jpg' },
  { youtubeId: 'M3y9fIBZ2aI', title: "NASA's Solar Panels Unroll Like a Yoga Mat", uploadDate: '2026-10-20T16:00:10-07:00', durationLabel: '0:57', thumbnail: '/images/shorts/M3y9fIBZ2aI.jpg' },
  { youtubeId: 'c9HLl82rdl0', title: 'Why This AI Robot Enters the Mine First', uploadDate: '2026-10-19T18:00:23-07:00', durationLabel: '0:58', thumbnail: '/images/shorts/c9HLl82rdl0.jpg' },
  { youtubeId: '7Bv-vXvdrj8', title: 'Meta Put AI on Two Macs. Here’s the Catch.', uploadDate: '2026-10-19T14:00:26-07:00', durationLabel: '0:47', thumbnail: '/images/shorts/7Bv-vXvdrj8.jpg' },
  { youtubeId: 'aNTB_FTwPVw', title: 'Why ASML Has to Remove the Air to Make Chips', uploadDate: '2026-10-18T17:00:29-07:00', durationLabel: '0:57', thumbnail: '/images/shorts/aNTB_FTwPVw.jpg', related: ['intel-chip-manufacturing', 'bosch-semiconductors-dresden'] },
  { youtubeId: 'h-4vke5KslA', title: 'Porsche Made Its Gauges Move. Physically.', uploadDate: '2026-10-18T15:00:02-07:00', durationLabel: '0:59', thumbnail: '/images/shorts/h-4vke5KslA.jpg' },
  { youtubeId: 'vSdFRLG8Dxw', title: "A GPU Made Him Cry at His Wedding. Here's Why.", uploadDate: '2026-10-17T17:00:09-07:00', durationLabel: '0:58', thumbnail: '/images/shorts/vSdFRLG8Dxw.jpg' },
  { youtubeId: '2TZ2qiR5sno', title: 'AI Needs Chips. Now NVIDIA’s Tools Help Make Them.', uploadDate: '2026-10-17T09:00:32-07:00', durationLabel: '0:57', thumbnail: '/images/shorts/2TZ2qiR5sno.jpg', related: ['intel-chip-manufacturing', 'bosch-semiconductors-dresden'] },
  { youtubeId: 'WH6BRwtGNyQ', title: 'Mercedes + NVIDIA: Why AI Driving Needs a Backup', uploadDate: '2026-10-16T17:00:29-07:00', durationLabel: '0:59', thumbnail: '/images/shorts/WH6BRwtGNyQ.jpg' },
  { youtubeId: 'NZ71qviBcX8', title: "Tesla's Roadster Has a Trick That Works at 0 MPH", uploadDate: '2026-10-16T14:00:06-07:00', durationLabel: '1:01', thumbnail: '/images/shorts/NZ71qviBcX8.jpg' },
]

export function youtubeShortUrl(id: string): string {
  return `https://www.youtube.com/shorts/${id}`
}

export function getShortsFor(slug: string): ShortEntry[] {
  return SHORTS.filter((s) => s.related?.includes(slug))
}
