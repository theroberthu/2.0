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
export const FEATURED_VIDEO_SLUG: string | null = 'fedex-overnight-delivery-promise'

export function getVideo(slug: string): VideoEntry | undefined {
  return VIDEOS.find((v) => v.slug === slug)
}
