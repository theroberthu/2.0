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
    slug: 'boston-dynamics-atlas-humanoid-twist',
    youtubeId: 'JkKweShtJfk',
    youtubeTitle: 'Why Atlas Moves Like That',
    h1: 'Why Atlas Moves Like That',
    seoTitle: 'Boston Dynamics’ Electric Atlas: Why the Twist Matters',
    metaDescription:
      'Electric Atlas turns in ways a person cannot. Why that design choice matters, what the engine cover demo shows and what one clip cannot prove.',
    dek: 'A human shape does not have to move like a human. The harder test is where the part lands.',
    uploadDate: '2026-11-10T16:00:33-08:00',
    duration: 'PT2M50S',
    durationLabel: '2 min 50 sec',
    topic: 'Manufacturing',
    subject: 'Boston Dynamics Atlas',
    thumbnail: '/images/videos/boston-dynamics-atlas-humanoid-twist.jpg',
    thumbnailAlt: 'Video thumbnail: Boston Dynamics’ electric Atlas robot, numbered 001, with a yellow arrow circling its waist and the words Why This Twist?',
    sections: [
      {
        paragraphs: [
          'Watch the legs. Atlas gets up from the floor, twists around and faces the camera. It has a human shape, and it is moving in a very different way.',
          'That strange turn is the point. Getting off the floor is the easy part of this story, though. What happens when those joints have to put something in exactly the right place?',
        ],
      },
      {
        heading: 'From hydraulic to electric',
        paragraphs: [
          'In April 2024, Boston Dynamics retired its hydraulic Atlas and unveiled an electric successor. The old machine could already lift and maneuver heavy, irregular objects, and the company described the new one as stronger, with a broader range of motion than any previous generation. This was a change of platform with years of research behind it, not a robot that appeared from nowhere.',
        ],
      },
      {
        heading: 'A human shape with different joints',
        paragraphs: [
          'Freeze the robot halfway through that turn. Its body and legs point in different directions. Boston Dynamics says it is equipping Atlas to move in the most efficient way to complete a task, “rather than being constrained by a human range of motion.”',
          'That raises an interesting question for any machine built for spaces made around people. Which parts of being human are useful, and which are just constraints? Doors and workstations can make a human-sized body useful. Our particular way of turning does not have to come with it. That is my reading of the design choice, not a claim that every unusual movement saves time. The joints themselves are becoming a business, as [Schaeffler’s humanoid bet](/videos/schaeffler-humanoid-robot-actuators) shows.',
        ],
      },
      {
        heading: 'Now watch the engine cover',
        paragraphs: [
          'In a separate October 2024 demonstration, Atlas moves engine covers between supplier containers and a mobile sequencing dolly. The job looks simple until the part has to meet the opening. A gripper can reach the destination and still leave the object at the wrong angle.',
          'Moving the arm is one problem. Knowing where the object actually ended up is another.',
        ],
      },
      {
        heading: 'From a striking movement to a task',
        paragraphs: [
          'Boston Dynamics says there are no prescribed or teleoperated movements in that demonstration. Atlas generates its motions autonomously, using a vision model to locate fixtures and bins and a combination of vision, force and proprioceptive sensors, its sense of its own body. The film also shows it reacting when fixtures move and when an action fails, such as a cover that does not go in.',
          'That is the important shift in what we are watching: from a striking movement to adjusting during a task.',
        ],
      },
      {
        heading: 'What one clip cannot show',
        paragraphs: [
          'One successful clip cannot tell us the cost per completed job, how often people intervene or how the machine holds up over months. Those are questions for deployment evidence, and they do not disappear because the robot has impressive joints.',
        ],
      },
      {
        heading: 'Same name, different robot',
        paragraphs: [
          'In January 2026, Boston Dynamics unveiled the product version of Atlas at CES. The announcement described three ways to control it: autonomous mode, teleoperation and a tablet steering interface. It also said all 2026 deployments were already committed, with fleets going to Hyundai’s Robotics Metaplant Application Center and to Google DeepMind.',
          'So a familiar robot name does not tell us how a particular clip was controlled. The model and the date of the demonstration still matter. The 2024 footage shows the electric prototype. The 2026 announcement describes a product.',
        ],
      },
      {
        heading: 'Back to the twist',
        paragraphs: [
          'Atlas can move in ways people cannot. The next test is making that freedom serve a repeatable job.',
          'My takeaway: watch the twist, then watch where the part lands. The first shows what the machine can do. The second is closer to what a factory would pay for.',
        ],
      },
    ],
    takeaways: [
      'Boston Dynamics retired hydraulic Atlas in April 2024 and designed the electric version to move beyond a human range of motion, not to copy one.',
      'A human-sized body can suit spaces built for people. Moving exactly like a person does not have to come with it.',
      'In the October 2024 engine cover demonstration, Boston Dynamics says every motion was generated autonomously, with vision, force and proprioceptive sensing used to react to moved fixtures and failed actions.',
      'The January 2026 product version can run autonomously, by teleoperation or by tablet, so the robot’s name alone does not tell you how a clip was controlled.',
      'No single demonstration shows cost per job, intervention rates or reliability over months. Those need deployment evidence.',
    ],
    chapters: [
      { time: '0:00', label: 'Watch the legs' },
      { time: '0:27', label: 'From hydraulic to electric' },
      { time: '0:42', label: 'Freeze the turn' },
      { time: '1:11', label: 'The engine cover' },
      { time: '1:34', label: 'Adjusting during a task' },
      { time: '1:57', label: 'What one clip cannot show' },
      { time: '2:15', label: 'The product version' },
      { time: '2:36', label: 'Back to the twist' },
    ],
    sources: [
      {
        label: 'An Electric New Era for Atlas (Boston Dynamics)',
        date: 'April 17, 2024',
        href: 'https://bostondynamics.com/blog/electric-new-era-for-atlas/',
      },
      {
        label: 'Atlas Goes Hands On (Boston Dynamics)',
        date: 'October 30, 2024',
        href: 'https://bostondynamics.com/video/atlas-goes-hands-on',
      },
      {
        label: 'Boston Dynamics Unveils New Atlas Robot to Revolutionize Industry (Boston Dynamics)',
        date: 'January 5, 2026',
        href: 'https://bostondynamics.com/blog/boston-dynamics-unveils-new-atlas-robot-to-revolutionize-industry/',
      },
    ],
    sourcesNote:
      'The three Boston Dynamics sources cited in the video. They are company announcements and demonstrations, not independent tests, and none reports cost per job, intervention rates or long-run reliability.',
    related: [
      {
        href: '/blog/noibu-ai-agents-closed-loop-ecommerce',
        title: 'AI Gets Interesting When It Has to Prove the Change Worked',
        note: 'A demonstration is a starting point. The test is whether the result holds up in operation.',
      },
      {
        href: '/blog/ai-wont-fix-broken-work',
        title: 'AI Won’t Fix Broken Work',
        note: 'A capable machine still depends on the work designed around it.',
      },
    ],
    credits:
      'Written by Robert Hu; narration uses his authorized AI voice clone. Footage: selected 2024 archival excerpts from Boston Dynamics, used as edited commentary excerpts and analytical frame grabs with the source audio removed. Music: “Machina” by Scott Buckley, CC BY 4.0. Independent analysis; not an endorsement or a manufacturer partnership.',
    feature: {
      eyebrow: 'Featured Video',
      title: 'Why Atlas Moves Like That',
      description:
        'A human shape does not have to move like a human. What Boston Dynamics’ electric Atlas shows about range of motion, where the part lands and what one clip cannot prove.',
      cta: 'Watch the video',
    },
  },
  {
    slug: '1x-neo-home-robot-human-backup',
    youtubeId: 'vzv3WJ2r740',
    youtubeTitle: 'The $20,000 Home Robot Has a Human Backup',
    h1: 'The $20,000 Home Robot Has a Human Backup',
    seoTitle: '1X NEO Home Robot: Autonomous vs Expert Mode Explained',
    metaDescription:
      '1X’s $20,000 NEO home robot can call on a remote human expert. Why the operating-mode label matters, and what a polished demo cannot tell a buyer.',
    dek: 'A robot loads the washing machine. The detail worth watching is the label beside it.',
    uploadDate: '2026-11-09T16:00:21-08:00',
    duration: 'PT3M57S',
    durationLabel: '3 min 57 sec',
    topic: 'AI in practice',
    subject: '1X NEO home robot',
    thumbnail: '/images/videos/1x-neo-home-robot-human-backup.jpg',
    thumbnailAlt: 'Video thumbnail: a humanoid robot in a knit suit with a glowing ring on its head, reaching out a hand in a sunlit living room, under the words 1X NEO and Human Backup?',
    sections: [
      {
        paragraphs: [
          'Watch this robot load a washing machine. The important detail is the label beside the demonstration: Expert Mode. For chores NEO does not know, 1X says an owner can schedule a 1X Expert to guide the robot remotely.',
          'So the question behind a home robot is bigger than whether its hands can move. What can it finish on its own, and what happens when it cannot?',
        ],
      },
      {
        heading: 'The $20,000 question',
        paragraphs: [
          'On October 28, 2025, 1X announced NEO with an Early Access purchase price of $20,000, including priority delivery in 2026, and a $499 a month subscription to ship later. That is the robot’s announced price, separate from the $200 deposit shown on its order page.',
          'A reservation is not evidence of a delivered machine. 1X’s own FAQ says US deliveries begin in 2026, starting with Early Access buyers.',
        ],
      },
      {
        heading: 'Two operating modes',
        paragraphs: [
          'Now watch a different demonstration. NEO walks up to a person, takes a cup and walks away. 1X presents that sequence as autonomous. The laundry footage sits in its Expert Mode section. Same product, different descriptions of how the task gets done.',
          'That is the first useful thing to look for in any home robot video. A smooth movement tells you something about the movement. The accompanying disclosure tells you who is in control. You need both before deciding what you just watched.',
        ],
      },
      {
        heading: 'Hands, tendons and ordinary chores',
        paragraphs: [
          'The physical engineering is interesting in its own right. 1X describes a patented Tendon Drive powering tendon-based transmissions, and a soft body made of 3D lattice polymer structures that cushions the machine. The friendly shape is packaging around a machine that still has to meet the world one contact at a time.',
          'A cup has an edge. A shirt changes shape. A plate has to leave one rack and arrive on another shelf. These are ordinary chores because people have done them thousands of times. Putting them in a product film does not make them the same engineering problem.',
        ],
      },
      {
        heading: 'Beyond the selected demo',
        paragraphs: [
          'The interesting question is what happens outside the selected demonstration. A cupboard is in a different place. Somebody leaves something in the way. The owner asks for a task the robot has not learned. A useful product needs a way to handle that gap, and Expert Mode is 1X’s answer.',
        ],
      },
      {
        heading: 'Who gets to step in?',
        paragraphs: [
          'According to 1X’s FAQ, an Expert cannot connect at any time. Owners schedule a session and accept the Expert into the robot by voice or through the app, and NEO’s ear rings change color while an Expert operator is active. 1X says its Experts are employees physically present in the United States. These are the company’s stated controls, not a security audit.',
          'That shifts the question from whether a person can help to how that help is arranged. Who can enter the session? What can they access? Can the owner tell when assistance is active? Those answers are part of what is being sold, alongside the hands and feet.',
        ],
      },
      {
        heading: 'Assisted versus independent',
        paragraphs: [
          'Human assistance could be valuable. If someone helps the machine complete a chore, the chore may still get done. But finishing a task with help and finishing it alone describe different capabilities, and a buyer should be able to see the difference before forming expectations.',
        ],
      },
      {
        heading: 'The missing business numbers',
        paragraphs: [
          'There is a business question inside that distinction too. Hardware is a product you can put in a box. Assistance needs people, availability and an operating process.',
          'Public material does not give the staffing cost, how often Experts step in or an independently measured completion rate, so the economics of that service cannot be calculated from the outside. A polished film cannot supply those numbers.',
        ],
      },
      {
        heading: 'A useful buyer test',
        paragraphs: [
          'Here is the test I would use. Show me an ordinary task, tell me the operating mode and explain the fallback. Then show what happens across repeated attempts, including the times it needs help.',
        ],
      },
      {
        heading: 'Back to the washing machine',
        paragraphs: [
          'The impressive part is that a robot can reach into our everyday world. The useful question is how reliably the whole service finishes the job. The next big home AI product may arrive with a very human backup.',
        ],
      },
    ],
    takeaways: [
      '$20,000 was NEO’s Early Access purchase price announced in October 2025. The $200 on the order page is a reservation deposit.',
      '1X labels some demonstrations Autonomous and shows laundry under Expert Mode, where a remote 1X Expert can guide the robot.',
      '1X says Expert sessions must be scheduled and accepted by the owner, and that NEO’s ear rings change color while an Expert is active. Those are company statements, not an audit.',
      'Completing a chore with help and completing it alone are different capabilities. Buyers should know which one they are watching.',
      'Public material does not give staffing costs, intervention rates or independently measured completion rates, so the service’s economics cannot be calculated.',
    ],
    chapters: [
      { time: '0:00', label: 'The label beside the demo' },
      { time: '0:21', label: 'The $20,000 question' },
      { time: '0:41', label: 'Two operating modes' },
      { time: '1:13', label: 'Hands, tendons and ordinary chores' },
      { time: '1:49', label: 'Beyond the selected demo' },
      { time: '2:11', label: 'Who gets to step in?' },
      { time: '2:42', label: 'Assisted versus independent' },
      { time: '2:59', label: 'The missing business numbers' },
      { time: '3:23', label: 'A useful buyer test' },
      { time: '3:35', label: 'Back to the washing machine' },
    ],
    sources: [
      {
        label: '1X NEO Home Robot launch announcement (1X)',
        date: 'October 28, 2025',
        href: 'https://www.1x.tech/discover/neo-home-robot',
      },
      {
        label: 'NEO Home Robot product page and FAQ (1X)',
        date: 'Checked November 11, 2026',
        href: 'https://www.1x.tech/neo',
      },
    ],
    sourcesNote:
      'The two 1X pages cited in the video. Both are company materials: the price, operating modes and Expert controls are 1X’s descriptions, not an independent household performance or security test.',
    related: [
      {
        href: '/blog/agentic-commerce-adoption-definition-problem',
        title: 'Agentic Commerce Has an Adoption Definition Problem',
        note: 'Assisted and independent are different levels of delegation, and headline numbers often blur them.',
      },
      {
        href: '/blog/noibu-ai-agents-closed-loop-ecommerce',
        title: 'AI Gets Interesting When It Has to Prove the Change Worked',
        note: 'A demonstration is a claim. The test is whether the result holds up in use.',
      },
    ],
    credits:
      'Written by Robert Hu; narration uses his authorized AI voice. Footage courtesy of 1X: brief muted editorial excerpts and analytical frame grabs from its NEO demonstrations and design film, with original commentary. Music: “Machina” by Scott Buckley, CC BY 4.0. The thumbnail is an AI-assisted editorial composition based on a real demonstration frame. This is analysis of company demonstrations and disclosures, not an independent household performance or security test.',
    feature: {
      eyebrow: 'Featured Video',
      title: 'The $20,000 Home Robot Has a Human Backup',
      description:
        'A robot loads the washing machine. The detail worth watching is the label beside it. What 1X’s NEO shows about autonomy, human help and what a demo cannot prove.',
      cta: 'Watch the video',
    },
  },
  {
    slug: 'dhl-stretch-robot-warehouse-handoff',
    youtubeId: 'e4AdP-edmnQ',
    youtubeTitle: 'DHL’s $15 Million Robot Bet Is Bigger Than the Arm',
    h1: 'DHL’s $15 Million Robot Bet Is Bigger Than the Arm',
    seoTitle: 'DHL’s Stretch Robots: Why the Handoff Decides the Value',
    metaDescription:
      'DHL’s $15 million Stretch program began with unloading boxes. What the robot does, what happens after the handoff and what the numbers cannot show.',
    dek: 'A robot lifts a box. The more interesting business story starts when it lets go.',
    uploadDate: '2026-11-08T17:00:20-08:00',
    duration: 'PT4M7S',
    durationLabel: '4 min 7 sec',
    topic: 'Delivery and logistics',
    subject: 'DHL warehouse robots',
    thumbnail: '/images/videos/dhl-stretch-robot-warehouse-handoff.jpg',
    thumbnailAlt: 'Video thumbnail: a taped cardboard box on a roller conveyor in a long warehouse, with the words DHL’s Robot Bet and Follow the Box.',
    sections: [
      {
        paragraphs: [
          'Watch a box leave a trailer. The robot grips it, lifts it and sends it onto a conveyor. It is a neat little victory for automation, and getting the box out of the trailer is only the first problem. The rest of the building still has work to do.',
          'That is what makes DHL’s robot story more interesting than an arm that can lift things.',
        ],
      },
      {
        heading: 'A $15 million, multi-year program',
        paragraphs: [
          'In January 2022, DHL Supply Chain announced a $15 million investment in robotics from Boston Dynamics: a multi-year agreement beginning with Stretch, in what the companies called the first commercial purchase of the robot. That figure covered a program. There was no $15 million price tag on one machine, and the announcement did not say how many robots the money would buy.',
        ],
      },
      {
        heading: 'A wonderfully unglamorous job',
        paragraphs: [
          'The first task was truck unloading. Imagine your shift starts with a wall of cartons. High ones, low ones, another row behind them. Every one has to come out before the trailer is empty. Do that once and it is a lift. Do it through a shift and it becomes a very different job. Stretch was built to take on that repetitive handling.',
        ],
      },
      {
        heading: 'The gripper and the handoff',
        paragraphs: [
          'In Boston Dynamics’ film from January 2023, look at the business end of the arm. Suction cups form the gripper. The system takes one box at a time and places it on the conveyor. From there, the film explains, the carton travels through scan tunnels and into DHL’s system.',
          'Pause on that handoff. The robot has finished its movement. The warehouse has only started processing the box.',
        ],
      },
      {
        heading: 'When the next step cannot keep up',
        paragraphs: [
          'Now imagine the first step gets faster while the next step stays the same. Cartons pile up between them. The arm is having a great day. Your delivery schedule might disagree.',
          'That is an illustrative scenario, not evidence of a failure at any DHL site. It is why an impressive pick rate is only the opening question. How much useful work gets all the way through? The same question follows Amazon when it has [a million robots to direct](/videos/amazon-robots-deepfleet-warehouse-traffic).',
        ],
      },
      {
        heading: 'Up to 700 cases per hour',
        paragraphs: [
          'In May 2025, DHL reported case unloading rates of up to 700 cases per hour. Up to is doing real work in that sentence. It is a reported result, not a promise that every trailer will run at that speed. The same announcement described end-to-end automation combining conveyors and palletizers in a UK project. The arm was becoming part of a longer process.',
        ],
      },
      {
        heading: 'The people around the machine',
        paragraphs: [
          'There is a human story here too. In the film, an operator positions the machine, and employees describe heavy boxes and hot or cold trailers. The attraction is easy to understand: let the machine repeat the lifting while people operate and support the process. Those accounts come from a company case study. They do not tell us what happened to every job across DHL.',
        ],
      },
      {
        heading: 'The software between the machines',
        paragraphs: [
          'Then comes the less photogenic part of the story: getting different technologies to work together. In March 2026, DHL Supply Chain described SVT Robotics’ SOFTBOT integration platform as live at 30 sites, with more than 100 planned over the next three years. That is a separate software rollout, not a count of Stretch installations.',
          'One useful machine is a start. Making it work in the next building, with that building’s systems and routines, is another job.',
        ],
      },
      {
        heading: 'The wider automation budget',
        paragraphs: [
          'The money behind that wider effort is substantial. In May 2025, DHL said it had invested more than €1 billion over the past three years in automation in its contract logistics division. That is a broad budget, and not all of it went to this robot.',
          'The same announcement was a memorandum of understanding that, in the companies’ words, “paves the way” for more than 1,000 additional units. A plan is different from a completed fleet. None of these figures gives the payback period for one installation. For that, we would need its full costs and operating results. They do show the size of the ambition.',
        ],
      },
      {
        heading: 'Back to our box',
        paragraphs: [
          'Go back to the box. The interesting moment is when it leaves the robot and joins everything else.',
          'My takeaway is this: buy a better flow of work, not just a faster movement. The arm gets the attention. The handoff decides what that movement is worth.',
        ],
      },
    ],
    takeaways: [
      'The $15 million announced in January 2022 was a multi-year robotics program beginning with Stretch, not the price of one robot.',
      'Stretch grips one box at a time with suction cups and places it on a conveyor. The carton then moves through scanning and into the warehouse system.',
      'Up to 700 cases per hour is DHL’s reported 2025 result, not a speed guarantee for every trailer.',
      'The 30 live sites and more than 100 planned belong to a separate software integration platform. They are not Stretch installation counts.',
      'More than €1 billion is three years of contract logistics automation spending, and the more than 1,000 additional robots come from a memorandum of understanding. Neither gives a payback period.',
    ],
    chapters: [
      { time: '0:00', label: 'Follow this box' },
      { time: '0:19', label: 'The $15 million programme' },
      { time: '0:39', label: 'A wonderfully unglamorous job' },
      { time: '1:05', label: 'The gripper and the handoff' },
      { time: '1:29', label: 'When the next step cannot keep up' },
      { time: '1:50', label: 'Up to 700 cases per hour' },
      { time: '2:16', label: 'The people around the machine' },
      { time: '2:41', label: 'The software between the machines' },
      { time: '3:08', label: 'The wider automation budget' },
      { time: '3:42', label: 'Back to our box' },
    ],
    sources: [
      {
        label: 'DHL Supply Chain to invest $15 million to further automate warehousing in North America via Boston Dynamics collaboration (Boston Dynamics)',
        date: 'January 26, 2022',
        href: 'https://bostondynamics.com/news/dhl-supply-chain-to-invest-15-million-to-further-automate-warehousing-in-north-america-via-boston-dynamics-collaboration/',
      },
      {
        label: 'DHL Group signs MoU with Boston Dynamics and accelerates cross-business automation strategy (DHL Group)',
        date: 'May 13, 2025',
        href: 'https://group.dhl.com/en/media-relations/press-releases/2025/dhl-group-signs-mou-with-boston-dynamics-and-accelerates-cross-business-automation-strategy.html',
      },
      {
        label: 'DHL Group Signs MOU for 1,000-Robot Deployment (Boston Dynamics)',
        date: 'May 13, 2025',
        href: 'https://bostondynamics.com/news/dhl-signs-mou-for-additional-1000-robot-deployment/',
      },
      {
        label: 'Stretch at DHL (Boston Dynamics case study)',
        date: 'Checked November 9, 2026',
        href: 'https://bostondynamics.com/case-studies/stretch-at-dhl/',
      },
      {
        label: 'Stretch at DHL: Automated Trailer Unloading (Boston Dynamics film)',
        date: 'January 31, 2023',
        href: 'https://www.youtube.com/watch?v=qgGH6Vk8nY8',
      },
      {
        label: 'DHL Supply Chain accelerates automation deployments with SVT Robotics SOFTBOT platform (DHL Group, PDF)',
        date: 'March 2026',
        href: 'https://group.dhl.com/content/dam/deutschepostdhl/en/media-relations/press-releases/2026/pr-svt-robotics-20260317.pdf',
      },
      {
        label: 'DHL Supply Chain accelerates automation deployments with SVT Robotics SOFTBOT platform (Robotics 24/7)',
        date: 'March 30, 2026',
        href: 'https://www.robotics247.com/article/dhl-supply-chain-accelerates-automation-deployments-with-svt-robotics-softbot-platform',
      },
    ],
    sourcesNote:
      'The sources cited in the video, plus published copies of two DHL announcements. The case study and film are company accounts, not independent tests. The $15 million, the €1 billion and the site counts measure different things, and none gives the payback of an installation.',
    related: [
      {
        href: '/blog/ai-wont-fix-broken-work',
        title: 'AI Won’t Fix Broken Work',
        note: 'A faster step rarely helps when the constraint sits in the work around it.',
      },
      {
        href: '/blog/noibu-ai-agents-closed-loop-ecommerce',
        title: 'AI Gets Interesting When It Has to Prove the Change Worked',
        note: 'A reported gain is a starting point. The test is whether the result shows up in the operation.',
      },
    ],
    credits:
      'Written by Robert Hu; narration uses his authorized AI voice clone. Brief, muted excerpts and frame grabs from Boston Dynamics’ official January 2023 Stretch at DHL film are used only for direct analysis of the gripper, conveyor handoff and operator setup; © Boston Dynamics / DHL Supply Chain. This is archive company footage, not an independent test. Illustrative warehouse, manual-handling and parcel footage is by Tiger Lily, Tima Miroshnichenko and Erkan Avanoğlu on Pexels; these stock scenes are not DHL sites. Original diagrams are hypothetical and do not depict a measured DHL bottleneck or incident. Music: “Cylinder Eight” by Chris Zabriskie, from Cylinders, CC BY 4.0, edited and mixed. The thumbnail is an original conceptual AI illustration. Independent commentary; no endorsement implied.',
    feature: {
      eyebrow: 'Featured Video',
      title: 'DHL’s $15 Million Robot Bet Is Bigger Than the Arm',
      description:
        'A robot lifts a box. The more interesting story starts when it lets go. What DHL’s Stretch program shows about handoffs, and what its numbers cannot.',
      cta: 'Watch the video',
    },
  },
  {
    slug: 'duolingo-streak-revival-comeback',
    youtubeId: 'UwxP0CBKbUc',
    youtubeTitle: 'Why Duolingo Gave 15.4 Million Learners a Second Chance',
    h1: 'Why Duolingo Gave 15.4 Million Learners a Second Chance',
    seoTitle: 'Duolingo Streak Revival: Why the Way Back Is Good Design',
    metaDescription:
      'Duolingo let learners restore their longest streak with three lessons, and 15.4 million did. Why the way back matters and what that count cannot show.',
    dek: 'Lose the streak, not the language. Duolingo’s one-time comeback asked for three lessons.',
    uploadDate: '2026-11-07T17:00:32-08:00',
    duration: 'PT4M24S',
    durationLabel: '4 min 24 sec',
    topic: 'AI in practice',
    subject: 'Duolingo streaks',
    thumbnail: '/images/videos/duolingo-streak-revival-comeback.jpg',
    thumbnailAlt: 'Video thumbnail: a phone showing a glowing green path to a flame, breaking out of torn calendar pages, with the words Duolingo, 15.4 Million Second Chances.',
    sections: [
      {
        paragraphs: [
          'Imagine losing a language learning streak you spent months building. Your Spanish has not suddenly disappeared. The little number has. But that number might have been the thing getting you to open the app.',
        ],
      },
      {
        heading: 'A second chance',
        paragraphs: [
          'In June 2026, Duolingo ran a one-time event that let eligible learners restore their longest-ever streak by opting in and completing three lessons. The company says 15.4 million learners revived their streaks, including nearly 8 million who had no active streak when the event began.',
          'A language app famous for keeping you coming back had found another problem to solve: what happens after you stop?',
        ],
      },
      {
        heading: 'Why the celebration matters',
        paragraphs: [
          'Before the comeback, look at the celebration. In an older Duolingo example, three days earns a tiny owl, a spin and a screen full of orange. It is a lot of ceremony for a small daily lesson. The design turns an otherwise invisible action into something you can see and feel, and it gives you another reason to return: protect your little collection of days.',
          'Duolingo has written openly about designing the streak around habit and loss aversion. Consider the difference between doing one more lesson and losing a streak you spent months building. The lesson is the same. The decision feels different. The owl has somehow become the most demanding appointment in your calendar.',
        ],
      },
      {
        heading: 'What happens after you stop?',
        paragraphs: [
          'That creates a delicate problem. The number can pull you back tomorrow. Once it is gone, you might be staring at a fresh start you did not want. Duolingo itself says breaking a streak can feel demotivating, and its system includes flexibility, such as streak freezes, so a pause does not have to become an exit.',
          'The June revival offered a route back after the break, and it is worth noticing what the offer asked for. Three lessons. In my reading, the clever part is that returning was itself the task. You did some learning to reclaim the number, and the comeback had a small, concrete finish line.',
          'Still, restoring a streak is not proof that someone stayed for months. The count tells us who took the offer, not their entire future. Duolingo’s letter gives participation and no retention figure for those learners.',
        ],
      },
      {
        heading: 'The business behind the habit',
        paragraphs: [
          'Put that small return visit next to the scale of the business. Duolingo reported about $298.5 million in revenue in the second quarter of 2026, and about $33.2 million in net income. Revenue is not profit, and both are company-wide results. We cannot assign those dollars to an owl animation or one comeback campaign.',
          'The business question is still clear. An ongoing service needs an ongoing reason to use it, whether that is a streak or [a Monday playlist](/videos/spotify-taste-profile-recommendations). And after someone falls out of the routine, making the next visit feel possible may matter as much as making the last one feel rewarding.',
        ],
      },
      {
        heading: 'Coming back to do what?',
        paragraphs: [
          'A streak records consistency. It cannot tell us how a conversation will go when someone asks a question we did not prepare for.',
          'In Duolingo’s September 2024 Video Call demonstration, a learner talks to Lily, an animated AI character. The interface presents a conversation partner rather than another row of answer choices. That is a company demonstration, not a test of the product or a guarantee of fluency.',
          'The 2026 business decision is who gets access. Video Call was offered to Duolingo Max subscribers when it was announced. In its second quarter letter, Duolingo said most new Super Duolingo subscribers now have access, and that it expected to extend access to existing Super subscribers later in the year. The bet, as I read it, is that more useful practice gives people another reason to return. A purple-haired conversation partner is an unusual place to rehearse small talk. At least you do not also have to split the restaurant bill.',
        ],
      },
      {
        heading: 'Design the way back',
        paragraphs: [
          'Return to that lost streak. A reward can make the next visit attractive. A forgiving return path can make it feel achievable. The product still has to deliver something worth returning for. The celebration, the comeback and the useful practice each have a job to do.',
          'Next time an app celebrates a tiny action, ask what it is encouraging you to do tomorrow. And if you stop, how does it help you start again?',
        ],
      },
    ],
    takeaways: [
      'Streak Revival was a one-time June 2026 event: eligible learners opted in and completed three lessons to restore their longest-ever streak.',
      'Duolingo reports 15.4 million revived streaks, including nearly 8 million learners with no active streak when it began.',
      'That is participation. Duolingo’s letter gives no retention figure for those learners, and a restored streak is not proof of better learning.',
      'Duolingo’s roughly $298.5 million in Q2 2026 revenue and $33.2 million in net income are company-wide results, not earnings from an animation or one campaign.',
      'Video Call began with Max subscribers. Most new Super subscribers now have access, and existing Super subscribers were expected to follow later in 2026.',
    ],
    chapters: [
      { time: '0:00', label: 'The little number disappears' },
      { time: '0:12', label: 'A second chance' },
      { time: '0:32', label: 'Why the celebration matters' },
      { time: '1:18', label: 'What happens after you stop?' },
      { time: '2:04', label: 'The business behind the habit' },
      { time: '2:45', label: 'Coming back to do what?' },
      { time: '3:42', label: 'Design the way back' },
    ],
    sources: [
      {
        label: 'Duolingo Q2 2026 shareholder letter (SEC filing)',
        date: 'August 5, 2026',
        href: 'https://www.sec.gov/Archives/edgar/data/1562088/000162828026053299/q2fy26duolingo6-30x26share.htm',
      },
      {
        label: 'The Duolingo Streak Uses Habit Research to Keep You Motivated (Duolingo Blog)',
        date: 'January 31, 2022',
        href: 'https://blog.duolingo.com/how-duolingo-streak-builds-habit/',
      },
      {
        label: 'What is a streak? (Duolingo Help Center)',
        date: 'Checked November 9, 2026',
        href: 'https://www.duolingo.com/help/what-is-a-streak',
      },
      {
        label: 'Duolingo’s Video Call Offers Realistic Conversation Practice (Duolingo Blog)',
        date: 'September 24, 2024',
        href: 'https://blog.duolingo.com/video-call/',
      },
    ],
    sourcesNote:
      'The sources cited in the video. Revenue and net income are separate company-wide measures, and neither is attributed to one animation or campaign. The 15.4 million is a company-reported participation count, not a retention or learning result. The Video Call material is a company demonstration, and availability was still rolling out.',
    related: [
      {
        href: '/blog/agentic-commerce-adoption-definition-problem',
        title: 'Agentic Commerce Has an Adoption Definition Problem',
        note: 'A headline count depends on what was actually measured. Taking an offer is not the same as staying.',
      },
      {
        href: '/blog/retailers-ai-traffic-customer-ownership',
        title: 'Retailers Want AI Shopping Traffic. They Do Not Want to Lose the Customer.',
        note: 'Who owns the repeat relationship, and what gives a customer a reason to come back.',
      },
    ],
    credits:
      'Written by Robert Hu; narration uses his authorized AI voice clone. Brief Duolingo archive excerpts and a frame grab are directly analyzed with original commentary: a streak celebration from 2022 and a Video Call company demonstration from September 2024. These are not his own product test or a guarantee of fluency; © Duolingo. Illustrative study footage is by Polina Tankilevitch and cottonbro studio on Pexels. The opening and diagrams are original illustrations, not a documented customer case. Music: “Cylinder Eight” by Chris Zabriskie, from Cylinders, CC BY 4.0, edited and mixed. The thumbnail is a conceptual AI illustration. Independent commentary; no endorsement implied.',
    feature: {
      eyebrow: 'Featured Video',
      title: 'Why Duolingo Gave 15.4 Million Learners a Second Chance',
      description:
        'Lose the streak, not the language. What Duolingo’s three-lesson comeback shows about designing the way back, and what the count cannot prove.',
      cta: 'Watch the video',
    },
  },
  {
    slug: 'spotify-taste-profile-recommendations',
    youtubeId: '9kcOLozDtgU',
    youtubeTitle: 'Spotify Thinks It Knows You. What If It’s Wrong?',
    h1: 'Spotify Thinks It Knows You. What If It’s Wrong?',
    seoTitle: 'Spotify Taste Profile: When Recommendations Need Correcting',
    metaDescription:
      'Spotify now lets listeners tell it where it is wrong. What Taste Profile does, why listening history misleads and what the earnings cannot prove.',
    dek: 'What you play and what you want next are not always the same thing. Spotify’s Taste Profile box gives listeners a way to say so.',
    uploadDate: '2026-11-06T17:00:10-08:00',
    duration: 'PT4M59S',
    durationLabel: '4 min 59 sec',
    topic: 'AI in practice',
    subject: 'Spotify Taste Profile',
    thumbnail: '/images/videos/spotify-taste-profile-recommendations.jpg',
    thumbnailAlt: 'Video thumbnail: black over-ear headphones with a green glow on a dark desk, beside the Spotify logo and the words Got You Wrong?',
    sections: [
      {
        paragraphs: [
          'Spotify thinks it knows your taste. Now you can tell it where it is wrong. In Spotify’s own demonstration of Taste Profile, there is a box where you describe what you want more of, instead of hoping another skip sends the right message.',
          'The business idea is simple: give the customer a way to correct the recommendation.',
        ],
      },
      {
        heading: 'The correction box',
        paragraphs: [
          'Spotify began rolling out the Taste Profile beta to Premium listeners 18 and older in the United States in September 2026, after testing in New Zealand earlier in the year. It shows Spotify’s brief interpretation of your taste across music, podcasts and audiobooks, and what you type shapes recommendations in your Home feed. Spotify says changes typically appear within a few hours.',
          'This is not a magic switch that instantly rebuilds every playlist. So why would a company that recommends music need the listener to explain themselves? Because what you play and what you want next are not always the same thing.',
        ],
      },
      {
        heading: 'Your favorite artist is rain?',
        paragraphs: [
          'Picture the bedtime playlist. Rain. More rain. Eight hours of extremely committed rain. You wanted to sleep. You were not asking to become a rain enthusiast.',
          'Spotify has acknowledged the problem. In 2023, it said listeners with playlists for activities such as sleeping or working out can see recommendations over-index on music that does not fit their general habits, and it introduced a way to reduce a playlist’s influence on your taste profile. Individual track exclusions followed in 2025. Listening is evidence. Context helps interpret it.',
          'That problem reaches beyond music. A customer might buy a gift they would never buy for themselves. A one-off task might look like a permanent preference. A system can measure an action correctly and still misunderstand the person, which is the same doubt behind asking whether you could [trust a workout plan from ChatGPT](/videos/chatgpt-workout-plan-trust).',
        ],
      },
      {
        heading: 'The Monday listening habit',
        paragraphs: [
          'To see why the distinction matters, rewind to a much smaller promise. Every Monday, Discover Weekly offers 30 tracks tailored to your taste. You do not have to decide where to begin. The next listening session already has a starting point.',
          'In June 2025, Spotify said listeners had streamed more than 100 billion tracks through Discover Weekly since its launch ten years earlier. That is plays accumulating over a decade, not 100 billion different songs. The interesting business mechanism is the recurring appointment. Discovery becomes something you can return to, and a recommendation has to earn its place in that routine one listen at a time.',
        ],
      },
      {
        heading: 'Familiar songs or new discoveries',
        paragraphs: [
          'Familiar is not always enough. In a 2020 engineering post, Spotify described a framework for its Home screen that balanced recommendations based on previous selections with exploration, where engagement is less certain. That explanation helps show the trade-off. It does not reveal every detail of today’s systems.',
          'Stay too close to the past and the experience can feel repetitive. Wander too far and the listener may leave. That is my reading of the product challenge, not Spotify’s statement of it. A useful suggestion has to make the next choice easier without making every choice the same.',
        ],
      },
      {
        heading: 'Follow the money',
        paragraphs: [
          'In the third quarter of 2026, Spotify reported about €5 billion in revenue and €672 million in operating income. Revenue and operating income are different measures, and these are company-wide quarterly results, not earnings attributed to this feature. Spotify also reported 306 million Premium subscribers. That scale makes a small product decision interesting. It does not tell us what the new box will earn.',
        ],
      },
      {
        heading: 'What a stream pays',
        paragraphs: [
          'There is another business on the other side of the headphones: the musicians and songwriters whose work makes discovery worth having. Spotify says it paid out more than $11 billion to the music industry in 2025. That is an annual industry total, not what individual artists took home.',
          'Spotify says it pays rights holders, who then pay creators according to their agreements, and that payment follows a share of total streams, not a fixed rate per stream. So a successful recommendation is not a coin dropping straight into a musician’s pocket. Contracts and the distribution of listening matter too.',
        ],
      },
      {
        heading: 'The useful feedback path',
        paragraphs: [
          'That makes the story more interesting than an algorithm finding the perfect song. There is a listener deciding whether to come back, a service paying to provide the experience and creators trying to turn attention into a living. The Taste Profile box addresses one part of that system. It lets a listener add information that behavior alone may miss.',
          'The demonstration shows the control. The earnings show the scale. Neither proves the control increased profit.',
          'My takeaway is this: when AI makes a recommendation, the next design question is how easily a person can correct it. Better predictions matter. So does a clear way to say, that’s not what I meant. The test is the next listening session. Does the person find something worth hearing and want to come back?',
        ],
      },
    ],
    takeaways: [
      'Taste Profile (Beta) began rolling out to U.S. Premium listeners 18 and older in September 2026, after New Zealand testing. It shapes the Home feed, and changes typically appear within a few hours.',
      'What you play and what you want next can differ. Spotify has offered playlist exclusions since 2023 and track exclusions since 2025 for that reason.',
      'Discover Weekly’s more than 100 billion streamed tracks are plays over ten years, not 100 billion different songs.',
      'Spotify’s roughly €5 billion in Q3 2026 revenue and €672 million in operating income are company-wide results. Neither shows what this feature earned.',
      'The more than $11 billion paid out in 2025 is an industry total paid to rights holders, not what individual artists took home.',
    ],
    chapters: [
      { time: '0:00', label: 'When Spotify gets your taste wrong' },
      { time: '0:19', label: 'The correction box' },
      { time: '0:47', label: 'Your favorite artist is rain?' },
      { time: '1:35', label: 'The Monday listening habit' },
      { time: '2:15', label: 'Familiar songs or new discoveries' },
      { time: '2:50', label: 'Follow the money' },
      { time: '3:29', label: 'What a stream pays' },
      { time: '4:11', label: 'The useful feedback path' },
    ],
    sources: [
      {
        label: 'How to Use Our Taste Profile Feature to Shape Your Spotify Homepage (Spotify)',
        date: 'September 23, 2026',
        href: 'https://newsroom.spotify.com/2026-09-23/taste-profile-shape-home-feed/',
      },
      {
        label: 'Discover Weekly Turns 10: Celebrating 100 Billion+ Tracks Streamed and a Decade of Personalized Discovery (Spotify)',
        date: 'June 30, 2025',
        href: 'https://newsroom.spotify.com/2025-06-30/discover-weekly-turns-10-celebrating-100-billion-tracks-streamed-and-a-decade-of-personalized-discovery/',
      },
      {
        label: '4 Tips To Supercharge Your Discovery on Spotify in 2025 (Spotify)',
        date: 'January 22, 2025',
        href: 'https://newsroom.spotify.com/2025-01-22/4-tips-to-supercharge-your-discovery-on-spotify-in-2025/',
      },
      {
        label: 'Spotify Reports Third Quarter 2026 Earnings (Spotify)',
        date: 'October 22, 2026',
        href: 'https://newsroom.spotify.com/2026-10-22/spotify-q3-2026-earnings/',
      },
      {
        label: '‘Exclude From Your Taste Profile’ Will Make Your Personalized Recommendations Even Better (Spotify)',
        date: 'February 8, 2023',
        href: 'https://newsroom.spotify.com/2023-02-08/exclude-from-your-taste-profile-will-make-your-personalized-recommendations-even-better/',
      },
      {
        label: 'Spotify Gives You Even More Control With the Ability to Exclude Tracks From Your Taste Profile (Spotify)',
        date: 'October 1, 2025',
        href: 'https://newsroom.spotify.com/2025-10-01/exclude-tracks-taste-profile/',
      },
      {
        label: 'For Your Ears Only: Personalizing Spotify Home with Machine Learning (Spotify Engineering)',
        date: 'January 16, 2020',
        href: 'https://engineering.atspotify.com/2020/1/for-your-ears-only-personalizing-spotify-home-with-machine-learning',
      },
      {
        label: 'I heard Spotify pays a fraction of a penny per stream. Is that true? (Loud and Clear)',
        date: 'Checked November 7, 2026',
        href: 'https://loudandclear.byspotify.com/faqs/i-heard-spotify-pays-a-fraction-of-a-penny-per-stream-is-that-true/',
      },
      {
        label: 'How do artists and songwriters get paid? (Loud and Clear)',
        date: 'Checked November 7, 2026',
        href: 'https://loudandclear.byspotify.com/faqs/how-do-artists-and-songwriters-get-paid/',
      },
    ],
    sourcesNote:
      'The sources cited in the video. Revenue, operating income and the music-industry payout are different measures, and none shows what a recommendation feature earned. The $11 billion figure is an annual 2025 total paid to rights holders, not artist take-home income. The 2020 engineering post is an archival explanation, not a description of today’s systems.',
    related: [
      {
        href: '/blog/anthropic-project-swap-agentic-commerce-shopper-preferences',
        title: 'The Hardest Part of Agentic Commerce May Be Knowing What the Shopper Wants',
        note: 'A system can understand the product and still misread the person. Preference is the harder half.',
      },
      {
        href: '/blog/walmart-sparky-ai-personalization-pricing-governance',
        title: 'AI Commerce Governance Is Becoming a Customer Promise',
        note: 'What an AI system may do for a customer, and how they control it, is becoming part of the product.',
      },
    ],
    credits:
      'Written by Robert Hu; narration uses his authorized AI voice clone. The official Spotify Taste Profile demonstration from September 2026 appears as brief muted excerpts and a cropped control detail, directly analyzed with original commentary. It is not Robert’s account or a test of his listening history. Illustrative listening footage is by Kampus Production, Ivan S, Tima Miroshnichenko, cottonbro studio and SHVETS production on Pexels. Diagrams and graphics are original. Music: “Cylinder Eight” by Chris Zabriskie, from Cylinders, CC BY 4.0, edited and mixed. The thumbnail is illustrative AI-assisted artwork; no Spotify-branded headphones are implied. Independent commentary; no Spotify endorsement.',
    feature: {
      eyebrow: 'Featured Video',
      title: 'Spotify Thinks It Knows You. What If It’s Wrong?',
      description:
        'Eight hours of rain can convince an algorithm you love rain. Spotify’s Taste Profile lets listeners correct it. What that shows, and what the earnings cannot.',
      cta: 'Watch the video',
    },
  },
  {
    slug: 'starbucks-smart-queue-staffing-investment',
    youtubeId: 'EuTmBRY_WP0',
    youtubeTitle: 'Why Starbucks’ $500,000,000 Bet Starts Behind the Counter',
    h1: 'Why Starbucks’ $500,000,000 Bet Starts Behind the Counter',
    seoTitle: 'Starbucks Smart Queue: Why the $500 Million Went to People',
    metaDescription:
      'Starbucks put $500 million into employee hours alongside Smart Queue. What the app promises, what baristas deliver and what the results cannot separate.',
    dek: 'One person ahead of you does not always mean a short wait. Café, drive-thru, mobile and delivery orders can all feed the same bar, and someone has to turn them into cups.',
    uploadDate: '2026-11-05T16:00:13-08:00',
    duration: 'PT5M9S',
    durationLabel: '5 min 9 sec',
    topic: 'Retail strategy',
    subject: 'Starbucks Smart Queue',
    thumbnail: '/images/videos/starbucks-smart-queue-staffing-investment.jpg',
    thumbnailAlt: 'Video thumbnail: a Starbucks cup under an espresso machine with four glowing order tickets for café, drive-thru, mobile and delivery, under the words Starbucks $500M, The Line You Can’t See.',
    sections: [
      {
        paragraphs: [
          'You walk into a coffee shop with one person ahead of you. Then a delivery rider arrives, a car pulls up outside and somebody on a phone orders six drinks. The line you can see has just become a terrible guide to how long your coffee will take.',
          'Café, drive-thru, mobile and delivery orders can all feed the same coffeehouse. That is four ways to ask for a drink and one team turning those requests into actual cups. Starbucks calls its sequencing technology Smart Queue, and the interesting part is what sits beside it.',
        ],
      },
      {
        heading: 'The $500 million staffing investment',
        paragraphs: [
          'In a September 2025 message to employees, CEO Brian Niccol said Starbucks had invested $500 million in additional employee hours through Green Apron Service, the operating model it was rolling out nationwide. The same message listed more hours, larger rosters and Smart Queue as parts of that one model.',
          'That figure is a staffing investment. It is not an AI software budget, and it is not a verified AI saving. It matters because it points to a more awkward story than ordering coffee: how do you make a digital promise that the real world can actually keep?',
        ],
      },
      {
        heading: 'One tap becomes real work',
        paragraphs: [
          'Start with that six-drink order. On a screen it arrives in one tap. Behind the bar it becomes several jobs: pull the espresso, steam the milk, build the cold drinks, finish the order. A small square on a phone can represent a surprising amount of work.',
          'Arrival time is only part of the puzzle. The person at the counter is already waiting. The mobile customer may still be walking over. A delivery order has another journey after it leaves the store. Making everything immediately is not the same as handing everything over at the right moment. The same question sits behind [DoorDash’s Instacart deal](/videos/doordash-instacart-acquisition): software can take the request, but someone still has to do the physical work.',
        ],
      },
      {
        heading: 'What Smart Queue does',
        paragraphs: [
          'At its January 2026 Investor Day, Starbucks described Smart Queue as a way to sequence café, mobile, drive-thru and delivery orders. Think of it as coordinating the work entering the bar. The algorithm still depends on the people, equipment and routines that turn a sequence into drinks.',
          'In April 2026, Starbucks announced scheduled ordering, starting May 11 at North American coffeehouses with Mobile Order & Pay. Customers can choose an available five-minute pickup window up to an hour ahead. Starbucks says those windows reflect real-time availability at each coffeehouse and are powered by Smart Queue, and that availability may vary by location.',
          'That pickup time is a promise about future capacity. It is easy to put a time on a screen. The hard part happens between the tap and the moment a barista sets the finished drink on the counter. A better sequence can organize the machine, the pitcher, the hand and the cup. It cannot make the steam wand do two jobs at once.',
        ],
      },
      {
        heading: 'Green Dot Assist',
        paragraphs: [
          'Green Dot Assist does a different job. Starbucks introduced it in June 2025 as a generative AI assistant, piloted in 35 coffeehouses, that lets baristas ask questions on in-store iPads instead of flipping through manuals. Starbucks now describes it as support for questions about recipes, routines and service standards.',
          'Smart Queue helps organize which work comes next. Green Dot Assist helps a person find information while doing the work. In both cases, the product is still made by the person at the bar.',
        ],
      },
      {
        heading: 'What the evidence does and does not show',
        paragraphs: [
          'Put the pieces together and the staffing figure makes more sense. Starbucks was adding employee hours while adding tools around the employees. The useful question is whether the whole operation can absorb the demand an app makes so easy to create.',
          'In April 2026, Starbucks reported that approximately 80% of its U.S. company-operated coffeehouses delivered café orders in four minutes or less. That is an encouraging snapshot, and it is company-reported. It describes café orders within a broader operating effort, with staffing and service changes alongside the technology. It cannot tell us what Smart Queue would achieve on its own.',
          'For a business, that distinction matters. Better software, more staffing and clearer routines arrive as a package. If sales improve at the same time, the sales number alone cannot say which ingredient deserves the credit. And if the queue looks tidy while drinks sit waiting for pickup, the customer problem is still there.',
        ],
      },
      {
        heading: 'The business takeaway',
        paragraphs: [
          'Go back to the person who saw one customer ahead of them. What they wanted was simple: a good drink, a reasonable wait and some confidence about when it would be ready. The work behind that experience is much less simple. Four streams of demand have to meet one physical operation.',
          'That is the lesson I would take from Starbucks. Before making it easier for customers to ask, make sure the people delivering can keep the promise. The most useful technology may be the part you barely notice when your name is called.',
        ],
      },
    ],
    takeaways: [
      'Starbucks said in September 2025 that it had invested $500 million in additional employee hours through Green Apron Service. That is a staffing investment, not an AI software budget or a verified AI saving.',
      'Smart Queue sequences café, mobile, drive-thru and delivery orders. It organizes the work. People and equipment still do it.',
      'Scheduled ordering turns that sequencing into a customer promise: a five-minute pickup window chosen up to an hour ahead.',
      'Green Dot Assist is a separate tool, a generative AI assistant that answers barista questions, piloted in 35 coffeehouses in June 2025.',
      'Starbucks reported in April 2026 that approximately 80% of U.S. company-operated coffeehouses delivered café orders in four minutes or less. That result cannot be credited to Smart Queue alone.',
    ],
    chapters: [
      { time: '0:00', label: 'The line you cannot see' },
      { time: '0:32', label: 'The $500,000,000 staffing investment' },
      { time: '1:02', label: 'One tap becomes real work' },
      { time: '1:37', label: 'What Smart Queue does' },
      { time: '2:45', label: 'Green Dot Assist' },
      { time: '3:41', label: 'What the evidence does and does not show' },
      { time: '4:23', label: 'The business takeaway' },
    ],
    sources: [
      {
        label: 'Message from Brian: Green Apron Service, one month in (Starbucks)',
        date: 'September 8, 2025',
        href: 'https://about.starbucks.com/press/2025/message-from-brian-green-apron-service-one-month-in/',
      },
      {
        label: 'Starbucks is Back, Turning Momentum into Long-Term, Sustainable Growth (Starbucks Investor Day)',
        date: 'January 29, 2026',
        href: 'https://about.starbucks.com/press/2026/starbucks-is-back-turning-momentum-into-long-term-sustainable-growth/',
      },
      {
        label: 'Meet Green Dot Assist: Starbucks Generative AI-Powered Coffeehouse Companion (Starbucks)',
        date: 'June 10, 2025',
        href: 'https://about.starbucks.com/press/2025/meet-green-dot-assist-starbucks-generative-ai-powered-coffeehouse-companion/',
      },
      {
        label: 'Making it easier to plan your Starbucks visit (Starbucks)',
        date: 'April 22, 2026',
        href: 'https://about.starbucks.com/press/2026/making-it-easier-to-plan-your-starbucks-visit/',
      },
      {
        label: 'Supporting the moments that matter with artificial intelligence (Starbucks)',
        date: 'January 29, 2026, updated June 2026',
        href: 'https://about.starbucks.com/press/2026/supporting-the-moments-that-matter-with-artificial-intelligence/',
      },
      {
        label: 'Starbucks investments in coffeehouse partners are paying off (Starbucks)',
        date: 'April 29, 2026',
        href: 'https://about.starbucks.com/press/2026/starbucks-investments-in-coffeehouse-partners-are-paying-off/',
      },
    ],
    sourcesNote:
      'The sources cited in the video. The $500 million figure is additional employee hours, not an AI budget or a verified AI saving. Starbucks’ April 2026 post gives a broader figure, more than $500 million invested in partners since the Back to Starbucks plan began. Service results are company-reported.',
    related: [
      {
        href: '/blog/ai-wont-fix-broken-work',
        title: 'AI Won’t Fix Broken Work',
        note: 'A better tool in one step rarely helps when the constraint sits in the work around it.',
      },
      {
        href: '/blog/doordash-instacart-physical-layer-ai-commerce',
        title: 'DoorDash Is Buying Instacart to Win the Physical Layer of AI Commerce',
        note: 'Software can take the order. Someone still has to fulfill it, and that may be where the advantage sits.',
      },
    ],
    credits:
      'Written by Robert Hu; narration uses his authorized AI voice clone. Footage is independently licensed Pexels material by Orhan Pergel, Kampus Production, Los Muertos Crew, fauxels and Cheng Shi Song. Generic café staff are illustrative, not Starbucks employees or pilot locations, and the Starbucks exterior location is unverified. Graphics are original concept illustrations, not actual Starbucks software or order-priority rules. The opening six-drink scenario is illustrative. No official Starbucks press video is used. The 2014 drive-through photograph is by Christopher Tran, CC BY 2.0, cropped and animated. The thumbnail is an AI-assisted editorial composite using a real Starbucks cup photograph by Cadu Barral on Pexels as reference. Music: “Wanderlust” by Scott Buckley, CC BY 4.0. Espresso-machine sound: Ohrwurm on Freesound, CC0, used as editorial sound design, not location sound. Independent commentary; no Starbucks endorsement.',
    feature: {
      eyebrow: 'Featured Video',
      title: 'Why Starbucks’ $500,000,000 Bet Starts Behind the Counter',
      description:
        'Four kinds of order, one team behind the bar. Why Starbucks paired Smart Queue with $500 million in employee hours, and what the results cannot separate.',
      cta: 'Watch the video',
    },
  },
  {
    slug: 'lego-monterrey-packing-investment',
    youtubeId: 'rKvfQy9Nge8',
    youtubeTitle: 'Why LEGO Is Spending $400,000,000 Behind the Box',
    h1: 'Why LEGO Is Spending $400,000,000 Behind the Box',
    seoTitle: 'Why LEGO Is Investing $400 Million in Packing in Mexico',
    metaDescription:
      'LEGO plans more than $400 million for packing and warehousing in Monterrey. How a 1958 brick design and the work behind the box explain the investment.',
    dek: 'A LEGO brick clicks into place in a second. Getting hundreds of the right pieces into one box takes a factory, a warehouse and a plan that runs to 2029.',
    uploadDate: '2026-11-04T16:00:25-08:00',
    duration: 'PT4M59S',
    durationLabel: '4 min 59 sec',
    topic: 'Manufacturing',
    subject: 'LEGO packing',
    thumbnail: '/images/videos/lego-monterrey-packing-investment.jpg',
    thumbnailAlt: 'Video thumbnail: a large red LEGO brick leaning against blue and white bricks, under the words LEGO’s $400M+ Bet, Behind the Box.',
    sections: [
      {
        paragraphs: [
          'Watch the pieces come together. The clever part is what happens when you want to build something else: you can take them apart and the pieces still have a future.',
          'That small idea sits inside a very big business. LEGO has announced more than US$400 million for an expansion in Monterrey, Mexico, and the new space is for packing and warehousing. Why does a toy company need that much more room behind the scenes? Follow a brick and the answer starts to appear.',
        ],
      },
      {
        heading: 'Clutch power',
        paragraphs: [
          'LEGO has a name for the way its bricks hold together: clutch power. The studs are the part you notice, but turn a classic brick over and the underside matters too. Together, studs and tubes create the connection. Too loose and your masterpiece falls apart. Too tight and rebuilding becomes a wrestling match. The useful thing is the balance: your creation stays together and your next idea is still possible.',
        ],
      },
      {
        heading: 'The 1958 design decision',
        paragraphs: [
          'On January 28, 1958, LEGO applied to patent its stud and tube design. Its history describes a practical problem. Earlier bricks were hollow, which reduced the stability of models and brought complaints from the market.',
          'That decision had a remarkably long life. LEGO says bricks produced since 1958 are fully compatible with bricks made today. Think about what that means for a customer. A new set adds possibilities to a collection they already own. The old pieces still have a job, and the product can keep changing while a familiar connection stays useful.',
        ],
      },
      {
        heading: 'Inside the factory handoff',
        paragraphs: [
          'Protecting a connection on a drawing is one thing. Repeating it in a factory is another. LEGO’s own archive footage shows the metal mold where an element takes shape, then a blue robot truck approaching a container station and bins moving across rollers. These scenes show molding and material movement, and they predate the newly announced expansion.',
          'Making a piece starts a much longer journey. A pile of finished elements is still a long way from a complete set, and the handoffs matter for the same reason they do in [Amazon’s robot warehouses](/videos/amazon-robots-deepfleet-warehouse-traffic).',
          'Imagine opening a set on a rainy afternoon. You have the instructions, a growing pile of pieces and one small decision after another. The factory’s work has to disappear into that experience. Nobody opens a LEGO box hoping for a surprise lesson in warehouse management.',
        ],
      },
      {
        heading: 'A beloved toy and a real business',
        paragraphs: [
          'Even a beloved toy can run into a real business problem. In 2004, the LEGO Group reported a net loss of DKK 1.931 billion, including discontinuing activities. Its annual report described a new direction, a tighter focus on the core business and substantial operational changes. A product people love still needs an operation and a business model that work.',
          'By the first half of 2026, LEGO was reporting record revenue of DKK 41.9 billion, up 21% from a year earlier. That is revenue, not profit, and it is not directly comparable to the 2004 loss. LEGO points to demand across its range and to brand experiences, and says it is investing in factory capacity. A dependable brick connection is one part of a much bigger story, and growth brings another question: how do you get more complete sets into the markets that want them?',
        ],
      },
      {
        heading: 'The $400 million packing bet',
        paragraphs: [
          'On September 24, 2026, LEGO set out plans to invest more than US$400 million in its Monterrey factory. The expansion includes a new packing hall and a fully automated high bay warehouse, adding 62,000 square meters of built-up area, and LEGO says it will raise the site’s production capacity by 35%, with about 1,300 new jobs through 2029. Construction is expected to start in early 2027 and finish by 2029, so these are plans, not results already delivered.',
          'Here is why that detail matters. A customer buys a set, and hundreds or thousands of pieces may need to arrive together in the right assortment. LEGO describes boxes gliding under bins that release the exact amount of pieces, with packing operators folding the boxes, adding instructions and checking for mistakes. A newly molded element and a set ready for someone’s table are very different stages of the job. The finished product is the whole building experience.',
        ],
      },
      {
        heading: 'The idea hiding inside the toy',
        paragraphs: [
          'For me, that is the business idea hiding inside the toy. You can keep offering people something new when the familiar parts remain useful and the operation can deliver the new thing reliably. The imagination can change with every box. The connection has to stay dependable.',
          'The satisfying moment takes a second. Behind it are design choices, molding, material movement and the work of putting a complete set together. That is a lot of business hiding inside a little click.',
        ],
      },
    ],
    takeaways: [
      'LEGO announced more than US$400 million for additional packing and warehousing in Monterrey, Mexico. It is planned investment, with construction expected from early 2027 to 2029.',
      'Clutch power comes from studs and tubes working together. LEGO applied to patent that design in January 1958.',
      'LEGO says bricks produced since 1958 are fully compatible with bricks made today, so a new set adds to a collection instead of replacing it.',
      'A molded element is a long way from a finished set. Hundreds or thousands of pieces may have to arrive together in the right assortment.',
      'LEGO’s 2004 net loss of DKK 1.931 billion and its H1 2026 revenue of DKK 41.9 billion are different measures, so they do not make a direct comparison.',
    ],
    chapters: [
      { time: '0:00', label: 'A little connection, a big business' },
      { time: '0:29', label: 'Clutch power' },
      { time: '0:55', label: 'The 1958 design decision' },
      { time: '1:35', label: 'Inside the factory handoff' },
      { time: '2:28', label: 'A beloved toy and a real business' },
      { time: '3:19', label: 'The $400,000,000 packing bet' },
      { time: '4:05', label: 'The idea hiding inside the toy' },
    ],
    sources: [
      {
        label: 'The LEGO Group announces next phase of growth for Monterrey, Mexico manufacturing site (LEGO Group)',
        date: 'September 24, 2026',
        href: 'https://www.lego.com/en-us/aboutus/news/2026/september/the-lego-group-announces-next-phase-of-growth-for-monterrey-mexico-manufacturing-site',
      },
      {
        label: 'Strong demand and brand relevance drive LEGO Group revenue up 21%, operating profit up 22% in H1 2026 (LEGO Group)',
        date: 'August 25, 2026',
        href: 'https://www.lego.com/en-us/aboutus/news/2026/august/strong-demand-and-brand-relevance-drive-lego-group-revenue-up-21-operating-profit-up-22-in-h1-2026',
      },
      {
        label: 'The stud and tube principle (LEGO History)',
        date: 'Checked November 6, 2026',
        href: 'https://www.lego.com/en-us/history/articles/d-the-stud-and-tube-principle',
      },
      {
        label: 'LEGO Group Company Profile (PDF)',
        date: 'Checked November 6, 2026',
        href: 'https://www.lego.com/cdn/cs/aboutus/assets/blt4ee78e0776fce92f/LEGO_Company_Profile.pdf',
      },
      {
        label: 'LEGO Group Annual Report 2004 (PDF)',
        date: 'Fiscal 2004',
        href: 'https://www.lego.com/cdn/cs/aboutus/assets/blt07abb4b8a3da3f39/Annual_Report_2004_ENG.pdf',
      },
      {
        label: 'LEGO bricks in the making (LEGO Help Topics)',
        date: 'Checked November 6, 2026',
        href: 'https://www.lego.com/en-us/service/help-topics/article/lego-bricks-in-the-making',
      },
    ],
    sourcesNote:
      'The sources cited in the video. The Monterrey figure is planned US-dollar investment, with construction expected from early 2027 to 2029. The 2004 net loss includes discontinuing activities. The H1 2026 figure is revenue, not profit, and is not directly comparable to that loss.',
    related: [
      {
        href: '/blog/kroger-ecommerce-operating-model',
        title: 'Kroger’s Ecommerce Reset Is Becoming an Operating Model',
        note: 'Growth depends on the operation behind the customer experience, not only on the front end.',
      },
      {
        href: '/blog/doordash-instacart-physical-layer-ai-commerce',
        title: 'DoorDash Is Buying Instacart to Win the Physical Layer of AI Commerce',
        note: 'Customers see the order. The advantage can sit in the physical work behind it.',
      },
    ],
    credits:
      'Written by Robert Hu; narration uses his authorized AI voice clone. Factory footage is ©2023 The LEGO Group, limited excerpts directly analyzed. The Monterrey archive photo is ©2026 The LEGO Group. Archive imagery does not show the newly announced expansion. Original diagrams are simplified illustrations, not engineering drawings or a live factory sequence. Building footage is by Dx21 on Pixabay and ROMAN ODINTSOV on Pexels, and the building still is by sofamuzaqi on Pexels. Stock illustrates building, not a test of vintage bricks. The thumbnail is an original AI-assisted illustration, not documentary evidence. Music: “Machina” and “Filaments” by Scott Buckley, CC BY 4.0, excerpted, mixed and faded. Original editorial sound cues. Independent editorial commentary; not sponsored by or affiliated with the LEGO Group.',
    feature: {
      eyebrow: 'Featured Video',
      title: 'Why LEGO Is Spending $400,000,000 Behind the Box',
      description:
        'LEGO plans more than $400 million for packing and warehousing in Monterrey. Follow a brick from the 1958 design to the work behind a finished set.',
      cta: 'Watch the video',
    },
  },
  {
    slug: 'amazon-robots-deepfleet-warehouse-traffic',
    youtubeId: 'tws-eRJddIE',
    youtubeTitle: 'Amazon Has 1,000,000 Robots. Who Directs the Traffic?',
    h1: 'Amazon Has 1,000,000 Robots. Who Directs the Traffic?',
    seoTitle: 'Amazon DeepFleet: Why a Million Robots Need Traffic Control',
    metaDescription:
      'Amazon has deployed more than a million warehouse robots. Why the harder problem is traffic: Kiva, congestion, the DeepFleet 10% claim and every handoff.',
    dek: 'A robot that finishes its task quickly is only half the story. At a million machines, the hard part is the intersection, and whether the next station is ready.',
    uploadDate: '2026-11-03T16:00:15-08:00',
    duration: 'PT5M7S',
    durationLabel: '5 min 7 sec',
    topic: 'Delivery and logistics',
    subject: 'Amazon robot traffic',
    thumbnail: '/images/videos/amazon-robots-deepfleet-warehouse-traffic.jpg',
    thumbnailAlt: 'Video thumbnail: a yellow robotic arm moving a parcel on a warehouse conveyor, under the words Amazon Robot Rush Hour, 1,000,000 Robots.',
    sections: [
      {
        paragraphs: [
          'A robotic arm lifts a parcel, turns and feeds the next part of the line. One task, done. But what if the next step is not ready?',
          'Amazon says it has deployed more than a million robots across more than 300 facilities. At that scale, even waiting becomes a business problem, and the answer is not always another robot.',
        ],
      },
      {
        heading: 'The $775 million Kiva agreement',
        paragraphs: [
          'In March 2012, Amazon agreed to acquire Kiva Systems for approximately $775 million in cash. Amazon described Kiva’s technology as a way to bring products directly to employees to pick, pack and stow. Instead of sending a person walking through the warehouse to find a product, the shelf comes to the person.',
          'That changes the shape of the problem. The worker stays at a station and the inventory travels. A job that used to be about walking becomes a problem of movement, timing and software.',
        ],
      },
      {
        heading: 'Warehouse rush hour',
        paragraphs: [
          'Then scale it up. Hundreds of robots want to arrive at stations while others need to leave, all sharing the same space, intersections and destinations. Automating the walking does not abolish rush hour.',
          'In 2022, Amazon’s robotics researchers described the catch. At first, adding robots increases throughput. At a certain point, their numbers start to cause congestion: the robots interfere with each other and reduce the efficiency of the whole system. The shortest route for one machine can be a terrible route for everybody else.',
        ],
      },
      {
        heading: 'DeepFleet and the traffic problem',
        paragraphs: [
          'That is the business problem behind DeepFleet, the generative AI foundation model Amazon introduced in June 2025 alongside the news that its millionth robot had reached a fulfillment center in Japan. DeepFleet learns from robot movement data to predict how traffic is likely to unfold, and Amazon’s scientists say those predictions can help assign tasks to robots and route them around potential congestion.',
          'Picture two routes to the same station. One is shorter, but everybody wants it. The other takes a little longer but keeps moving. The clever decision can be choosing the second route before the first one backs up. What matters is what gets through the building, not which machine wins the race to the intersection.',
        ],
      },
      {
        heading: 'What the 10% claim actually means',
        paragraphs: [
          'Amazon put a number on the opportunity: a 10% improvement in robot fleet travel efficiency. That is Amazon’s claim, and it describes how the robots travel. It is not a 10% saving on everything Amazon spends delivering an order. Still, less wasted travel means more useful movement from equipment and floor space the company has already invested in.',
        ],
      },
      {
        heading: 'Follow the real handoffs',
        paragraphs: [
          'The footage in the video was filmed at Amazon’s BRS2 fulfillment center in Swindon, UK, in March 2025. It shows different stations, not one customer’s order followed from start to finish: a robotic arm placing a package onto the line, a measuring gate where parcels pass through sensors, and a station that applies shipping labels to moving boxes.',
          'Each successful handoff raises a new question: is the next stage ready for what is arriving? If the robot can feed boxes faster than the next station can process them, speeding up the robot again just builds a longer queue. An impressive demonstration is the beginning of the business case, not the end of it. The same lesson runs through [FedEx’s overnight network](/videos/fedex-overnight-delivery-promise), where fast sorting only matters if the rest of the chain keeps up.',
        ],
      },
      {
        heading: 'The cost around the machine',
        paragraphs: [
          'The $775 million Kiva figure was an acquisition price, not the total cost of Amazon’s robotics program. Machines, maintenance, software, training and the rest of the operation around them all have to be paid for. A faster piece of equipment does not automatically lower the cost of a completed order. The gain has to survive the next handoff, and the one after that.',
        ],
      },
      {
        heading: 'People and the ordinary shift',
        paragraphs: [
          'There are people in this system. Bringing a shelf to a worker can reduce walking, but on its own it does not answer questions about pace, repetitive work or safety. In December 2024, the U.S. Department of Labor announced a corporate-wide settlement with Amazon requiring ergonomic measures at covered facilities, including fulfillment centers, sortation centers and delivery stations. Amazon, for its part, reports that its recordable incident rate improved 34% over five years.',
          'A robot count is not a safety score. For anyone evaluating automation, the useful question is what happens across an ordinary shift, including the interruptions.',
        ],
      },
      {
        heading: 'The real test is consistency',
        paragraphs: [
          'Once a delivery experience works well, it becomes the expectation. Customers never see the warehouse choreography. They see whether the promise was kept. The million-robot milestone gets the headline. The less visible challenge is getting the machines, the software and the people to work as one system, again and again.',
          'Next time you see an impressive robot demo, look just beyond it. What is waiting on the other side?',
        ],
      },
    ],
    takeaways: [
      'Amazon agreed to acquire Kiva Systems in 2012 for approximately $775 million in cash. That is an acquisition price, not Amazon’s total robotics spend.',
      'Amazon’s own researchers wrote in 2022 that adding robots raises throughput at first, then creates congestion that reduces the efficiency of the whole system.',
      'DeepFleet, announced with Amazon’s millionth robot in June 2025, predicts robot traffic to help assign tasks and route around congestion.',
      'The 10% figure is Amazon’s claim for robot fleet travel efficiency, not a saving on total delivery costs.',
      'A faster machine only helps if the next station can absorb what it sends. Otherwise it builds a longer queue.',
    ],
    chapters: [
      { time: '0:00', label: 'One task done. What comes next?' },
      { time: '0:19', label: 'The $775,000,000 Kiva agreement' },
      { time: '0:45', label: 'Warehouse rush hour' },
      { time: '1:16', label: 'DeepFleet and the traffic problem' },
      { time: '1:58', label: 'What the 10% claim actually means' },
      { time: '2:24', label: 'Follow the real handoffs' },
      { time: '3:17', label: 'The cost around the machine' },
      { time: '3:42', label: 'People and the ordinary shift' },
      { time: '4:15', label: 'The real test is consistency' },
    ],
    sources: [
      {
        label: 'Amazon.com to Acquire Kiva Systems, Inc. (Amazon press release)',
        date: 'March 19, 2012',
        href: 'https://press.aboutamazon.com/news-releases/news-release-details/amazoncom-acquire-kiva-systems-inc/',
      },
      {
        label: 'Amazon launches a new AI foundation model to power its robotic fleet and deploys its 1 millionth robot (About Amazon)',
        date: 'June 30, 2025',
        href: 'https://www.aboutamazon.com/news/operations/amazon-million-robots-ai-foundation-model',
      },
      {
        label: 'How Amazon robots navigate congestion (Amazon Science)',
        date: 'May 24, 2022',
        href: 'https://www.amazon.science/latest-news/how-amazon-robots-navigate-congestion',
      },
      {
        label: 'Amazon builds first foundation model for multirobot coordination (Amazon Science)',
        date: 'August 11, 2025',
        href: 'https://www.amazon.science/blog/amazon-builds-first-foundation-model-for-multirobot-coordination',
      },
      {
        label: 'US Department of Labor announces settlement with Amazon requiring corporate-wide ergonomic measures (U.S. Department of Labor)',
        date: 'December 19, 2024',
        href: 'https://www.dol.gov/newsroom/releases/osha/osha20241219',
      },
      {
        label: 'Amazon’s 2024 workplace safety performance shows annual improvement (About Amazon)',
        date: 'March 13, 2025',
        href: 'https://www.aboutamazon.com/news/workplace/amazon-workplace-safety-performance-2024',
      },
    ],
    sourcesNote:
      'The sources cited in the video. The $775 million Kiva figure is the 2012 acquisition agreement, not Amazon’s total robotics spend. The 10% figure is Amazon’s claim for robot fleet travel efficiency, not a saving on total delivery costs. Injury rate improvements are Amazon’s own reported figures.',
    related: [
      {
        href: '/blog/ai-wont-fix-broken-work',
        title: 'AI Won’t Fix Broken Work',
        note: 'Speeding up one step rarely helps when the constraint sits in the handoffs around it.',
      },
      {
        href: '/blog/noibu-ai-agents-closed-loop-ecommerce',
        title: 'AI Gets Interesting When It Has to Prove the Change Worked',
        note: 'A claimed efficiency gain is a starting point. The test is whether the result shows up in the operation.',
      },
    ],
    credits:
      'Written by Robert Hu; narration uses his authorized AI voice clone. Warehouse footage and photographs are by Marc Auledas Noguera (Auledas) on Wikimedia Commons, CC BY 4.0, filmed at Amazon’s BRS2 fulfillment center in Swindon, UK, in March 2025, then edited and reframed with source audio removed. Different stations are shown, not one order tracked end to end. Traffic, shelf and queue animations are original illustrations, not Amazon operational data. The thumbnail is an AI-assisted editorial illustration based on the credited warehouse photograph. Music: “Machina” and “Filaments” by Scott Buckley, CC BY 4.0. Independent commentary; no Amazon endorsement.',
    feature: {
      eyebrow: 'Featured Video',
      title: 'Amazon Has 1,000,000 Robots. Who Directs the Traffic?',
      description:
        'Amazon has deployed more than a million robots. Follow a parcel through real warehouse handoffs to the harder problem: keeping the whole fleet moving.',
      cta: 'Watch the video',
    },
  },
  {
    slug: 'aldi-quarter-cart-business-model',
    youtubeId: 'Q_1sqwT2DH8',
    youtubeTitle: "ALDI Gives Your Quarter Back. Here's the Real Business.",
    h1: 'ALDI Gives Your Quarter Back. Here’s the Real Business.',
    seoTitle: 'ALDI’s Business Model: What the Quarter Cart Really Does',
    metaDescription:
      'ALDI’s refundable quarter gets carts returned without staff collecting them. How shipping box displays, self-bagging and skipped services shape the model.',
    dek: 'The quarter comes back. What ALDI keeps is the deal you accepted at the door: a little less convenience in exchange for a simpler, cheaper store.',
    uploadDate: '2026-11-02T16:00:07-08:00',
    duration: 'PT5M15S',
    durationLabel: '5 min 15 sec',
    topic: 'Retail strategy',
    subject: 'ALDI store format',
    thumbnail: '/images/videos/aldi-quarter-cart-business-model.jpg',
    thumbnailAlt: 'Video thumbnail: a U.S. quarter beside a row of chained ALDI shopping carts outside an ALDI store at sunset, under the words The Quarter Isn’t the Profit.',
    sections: [
      {
        paragraphs: [
          'ALDI asks for a quarter before you get through the door, then gives it back. As a way to make 25 cents, it makes no sense. The quarter is there to make something else happen: you bring the cart back, and one small job gets done without a member of staff going out to collect it.',
          'Look inside the store and the same idea shows up everywhere: the boxes, the bags, even the services that are missing. ALDI is asking a question most retailers would rather not put on the door. How much convenience would you give up for a cheaper shopping trip?',
        ],
      },
      {
        heading: 'A $9 billion commitment',
        paragraphs: [
          'ALDI is putting serious money behind its answer. On January 12, 2026, it reaffirmed its commitment to invest $9 billion in the U.S. over five years through 2028, covering new stores, supply chain capacity and its online shopping experience. It plans more than 180 new stores in 2026 and has a goal of 3,200 stores by the end of 2028.',
          'That figure is an investment commitment, not money already spent and not revenue from cart deposits. The quarter is a clue to the business ALDI wants to expand.',
        ],
      },
      {
        heading: 'The cart changes the work',
        paragraphs: [
          'Insert the coin, release the cart, do the shopping. Return the cart, reconnect the chain, get the coin back. In ALDI’s words, with shoppers responsible for their carts, staff can focus on important tasks inside the store.',
          'Nobody gets rich recovering a quarter, but the cart still ends up in the right place. There is a difference between making a task cheaper and designing things so the task happens differently. ALDI uses both.',
        ],
      },
      {
        heading: 'The box is the display',
        paragraphs: [
          'Those cardboard cases on the shelf are not waiting for someone to finish the display. They are the display. ALDI’s history page lists everyday items displayed in their original shipping boxes to save on restocking shelves, and its supplier guidance asks for display-ready cases that can be merchandised with no repacking.',
          'Instead of handling every package to build a perfect row, the outer container becomes part of the shelf. It is a small change in what the customer sees and a bigger one in what someone has to do repeatedly behind the scenes. Costco makes a similar trade with [pallets on the sales floor](/videos/costco-membership-fee-hot-dog). You do not eat the display. You eat what came in it.',
        ],
      },
      {
        heading: 'The brand on the shelf',
        paragraphs: [
          'ALDI says more than 90% of the products in its stores are exclusive brands. That does not mean ALDI manufactures everything. It means much of the assortment is sold under its own labels rather than a wall of competing national brands, which gives the retailer more control over the product and its packaging. The box on the shelf and the product in the box can be designed together.',
          'For the shopper, there is a trade. You may find an alternative to your usual brand rather than the exact thing you came for, and a lower price on something you do not want is not much of a bargain.',
        ],
      },
      {
        heading: 'The work you take home',
        paragraphs: [
          'The trade gets more obvious at checkout. ALDI expects you to pack your own groceries, in bags you bring or buy there, and says self-bagging keeps lines moving and reduces costs. A store can sell you groceries and convenience. ALDI leaves some of that convenience for you to provide.',
        ],
      },
      {
        heading: 'The businesses that are missing',
        paragraphs: [
          'You cannot fill a prescription or do your banking here. ALDI’s description of its U.S. format explicitly leaves out add-on services like banks and pharmacies. That is a choice about what the store is trying to be. Every extra service needs space, equipment or people, and leaving one out makes the operation simpler. It can also mean another stop for someone who needs it. Saving money at one store is less exciting if the trip turns into a tour of three parking lots.',
          'ALDI has not rejected convenience altogether. It offers curbside pickup and delivery, including through Instacart, DoorDash and Uber Eats, and its own guidance says online items may be priced higher to cover the cost of personal shopping or delivery. The work still has to happen. If you do not do it, someone else does, and the economics change.',
        ],
      },
      {
        heading: 'The unexpected aisle',
        paragraphs: [
          'Then there is an aisle that seems to have wandered in from another shopping trip. In the February 2026 store tour used in the video, there is a pet sofa, and a few steps away, a kit for building a little ALDI store. ALDI Finds is its rotating selection of limited-time items, and as ALDI puts it, it is not always food.',
          'The efficient store still has room for a surprise. Whether that surprise belongs in your budget is a different question.',
        ],
      },
      {
        heading: 'The deal behind the groceries',
        paragraphs: [
          'The more interesting business question is whether shoppers like the whole arrangement enough to keep coming back. That is what makes the $9 billion commitment worth watching: it is a plan to repeat the system in more places while expanding the supply chain and digital shopping around it. The carts do not pay for that. They show the operating model in miniature.',
          'The quarter, the cardboard and the bagging counter are parts of the same decision: what the retailer does, what the shopper does, and which extras neither of them has to pay for. The real transaction was never the 25 cents. It was the deal you accepted to go shopping.',
        ],
      },
    ],
    takeaways: [
      'ALDI’s quarter is refundable. Its job is to get carts returned so staff can focus on work inside the store.',
      'Products are displayed in their original shipping boxes to save restocking time, and ALDI asks suppliers for display-ready cases.',
      'ALDI says more than 90% of the products in its stores are exclusive brands, giving it more control over product and packaging.',
      'Self-bagging and the absence of banks and pharmacies simplify the store but shift some work, or another stop, to the shopper.',
      'The $9 billion figure is a five-year U.S. investment commitment through 2028, not money already spent or revenue from carts.',
    ],
    chapters: [
      { time: '0:00', label: 'The quarter that comes back' },
      { time: '0:35', label: 'A $9 billion commitment' },
      { time: '0:55', label: 'The cart changes the work' },
      { time: '1:30', label: 'The box is the display' },
      { time: '1:59', label: 'The brand on the shelf' },
      { time: '2:37', label: 'The work you take home' },
      { time: '2:55', label: 'The businesses that are missing' },
      { time: '3:48', label: 'The unexpected aisle' },
      { time: '4:18', label: 'The deal behind the groceries' },
    ],
    sources: [
      {
        label: 'ALDI 101: format and refundable cart deposit (ALDI US)',
        date: 'Checked November 3, 2026',
        href: 'https://corporate.aldi.us/about-us/aldi-101',
      },
      {
        label: 'ALDI US Doubles Down on Growth in 2026 (ALDI US newsroom)',
        date: 'January 12, 2026',
        href: 'https://corporate.aldi.us/newsroom/news/aldi-us-doubles-down-on-growth-in-2026',
      },
      {
        label: 'Product Safety and Quality (ALDI US)',
        date: 'Checked November 3, 2026',
        href: 'https://corporate.aldi.us/about-us/product-safety-and-quality',
      },
      {
        label: 'In-Store Pricing vs. Online Pricing (ALDI Support)',
        date: 'Checked November 3, 2026',
        href: 'https://help.aldi.us/faqs/article/In-store-Pricing-vs-Online-Pricing',
      },
      {
        label: 'ALDI, America’s Fastest-Growing Grocer, Expands to Portland Opening First Store in Maine (ALDI US newsroom)',
        date: 'March 2, 2026',
        href: 'https://corporate.aldi.us/newsroom/news/aldi-americas-fastest-growing-grocer-expands-to-portland-opening-first-store-in-maine',
        note: 'Added on this page; not cited in the video.',
      },
      {
        label: 'ALDI History (ALDI US)',
        date: 'Checked November 3, 2026',
        href: 'https://corporate.aldi.us/about-us/aldi-history',
        note: 'Added on this page; not cited in the video.',
      },
      {
        label: 'Supplier FAQs: Display Ready Case (ALDI US)',
        date: 'Checked November 3, 2026',
        href: 'https://corporate.aldi.us/suppliers/faqs',
        note: 'Added on this page; not cited in the video.',
      },
    ],
    sourcesNote:
      'The sources cited in the video, plus three ALDI pages added here for the cart, shipping box and self-bagging details. The $9 billion figure is a five-year investment commitment through 2028. ALDI’s product page says more than 90% of products are exclusive brands; its March 2026 store announcement says nearly 90%. No cheapest-basket or shopper-savings claim is made, and prices visible in the store footage are not current offers.',
    related: [
      {
        href: '/blog/doordash-instacart-physical-layer-ai-commerce',
        title: 'DoorDash Is Buying Instacart to Win the Physical Layer of AI Commerce',
        note: 'ALDI delivers through Instacart and DoorDash. The physical work of filling a grocery order is what that deal is about.',
      },
      {
        href: '/blog/kroger-ecommerce-operating-model',
        title: 'Kroger’s Ecommerce Reset Is Becoming an Operating Model',
        note: 'Another grocer deciding who does the picking and delivering, and how the operation pays for it.',
      },
    ],
    credits:
      'Written by Robert Hu; narration uses his authorized AI voice clone. Store-tour footage is from “Is Aldi the Place for Cheap Groceries?” by the altem life, filmed in February 2026 in Mount Dora, Florida. Cart-mechanism footage is archival, from “Jon Drinks Water #3771 Aldi Shopping Carts” by Jon Drinks Water, published in 2016. Both carry Creative Commons Attribution licences and were excerpted, reframed and muted, with original narration, captions and graphics added. Prices in the footage are not current offers. The thumbnail is a designed editorial illustration. Music: “Machina” and “Filaments” by Scott Buckley, CC BY 4.0. Coin sound: “Coins #1” by Joseph Sardin / BigSoundBank, CC0, used as editorial Foley. No endorsement by ALDI or the source creators is implied.',
    feature: {
      eyebrow: 'Featured Video',
      title: 'ALDI Gives Your Quarter Back. Here’s the Real Business.',
      description:
        'ALDI asks for a quarter, then gives it back. Follow the cart, the cardboard and the bagging counter to the deal shoppers accept at the door.',
      cta: 'Watch the video',
    },
  },
  {
    slug: 'costco-membership-fee-hot-dog',
    youtubeId: 'ZM6s0gP7Rm0',
    youtubeTitle: 'Why Costco Wants You to Remember $1.50',
    h1: 'Why Costco Wants You to Remember $1.50',
    seoTitle: 'Costco’s Membership Model: What the $1.50 Hot Dog Is Selling',
    metaDescription:
      'Costco charges $65 a year before you shop and has kept its hot dog at $1.50. How the membership fee, limited selection and pallets fit the business model.',
    dek: 'A $1.50 hot dog is easy to remember. A $65 membership asks you to believe in a whole year of value, and Costco has to keep earning that belief.',
    uploadDate: '2026-11-01T16:00:35-08:00',
    duration: 'PT5M9S',
    durationLabel: '5 min 9 sec',
    topic: 'Retail strategy',
    subject: 'Costco membership',
    thumbnail: '/images/videos/costco-membership-fee-hot-dog.jpg',
    thumbnailAlt: 'Video thumbnail: a hot dog in front of a Costco food court menu board, under the words Costco $1.50 The Real Business.',
    sections: [
      {
        paragraphs: [
          'At a Costco food court, $1.50 buys a hot dog and a soda. The same company charges $65 a year for a basic U.S. membership before you can shop the warehouse. Pay first, then come shopping.',
          'That proposition brought Costco $5.907 billion in worldwide membership fee revenue in fiscal 2026, up 11%, according to its annual report. That is revenue, not profit, and behind it sits a real business to run: warehouses, employees and every other cost of keeping the promise. Follow the shopping trip from the food court to the decision that matters most: whether you pay for another year.',
        ],
      },
      {
        heading: 'A year to prove the value',
        paragraphs: [
          'Costco says the fee helps offset operating costs so it can price merchandise lower. The member pays today for value expected over the coming year. That is the deal Costco has to keep proving, and it creates a vulnerability: if prices stop feeling special, the member can start questioning the fee itself.',
          'The warehouse in the video, a store in The Villages, Florida, filmed in 2025, makes the pitch easy to feel. The shelves are huge, the packages are huge, and a grocery run can turn into a conversation about a new sofa.',
        ],
      },
      {
        heading: 'The enormous store with fewer choices',
        paragraphs: [
          'It feels like Costco sells everything. Its annual report says a core warehouse carries fewer than 4,000 active items, significantly less than other broadline retailers, while the website averages 9,000 to 11,000. Costco seeks to limit most items to fast-selling models, sizes and colors. The choice has been edited before you arrive.',
          'Fewer versions of a product let Costco concentrate its orders into larger quantities, which supports its buying power. Members accept some of those selection decisions in exchange for the value they expect. The catch: if your preferred version is missing, a bigger package of something else may be no bargain to you. The size of the building and the number of choices are different things.',
        ],
      },
      {
        heading: 'The cardboard is doing a job',
        paragraphs: [
          'The boxes are still on the floor, products sit on pallets and more inventory is stacked overhead. Costco’s annual report says merchandise is generally stored on racks above the sales floor and displayed on pallets containing large quantities, reducing the labor required. A low price has to be supported by the way the store works, and the plain displays are part of that operation.',
        ],
      },
      {
        heading: 'Does the bargain work for you?',
        paragraphs: [
          'The savings inside Costco’s business and the savings inside your household are different calculations. A huge pack helps only if you use it. If half ends up in the trash, the bargain changes, and an unplanned purchase still costs money even when it is a good deal.',
          'An illustration, not Costco’s average saving: if you genuinely save $5 per visit compared with what you would otherwise buy, 13 visits cover a $65 fee. Your result depends on what you buy, what you use and the alternatives near you. The price tag cannot answer those questions for you.',
        ],
      },
      {
        heading: 'The price that changed',
        paragraphs: [
          'The hot dog and soda price goes back to 1985, according to Costco’s historical highlights. The membership price has moved. On September 1, 2024, Costco raised the basic U.S. Gold Star fee from $60 to $65, and the Executive fee from $120 to $130.',
          'A company can protect one famous price while asking more for the annual relationship. That makes renewal more demanding, because the member needs enough reasons across the whole trip to keep saying yes. A $1.50 lunch is easy to remember. A year’s worth of value is a much bigger promise.',
        ],
      },
      {
        heading: 'The renewal decision',
        paragraphs: [
          'At the end of fiscal 2026, Costco reported a renewal rate of 92.3% in the U.S. and Canada and 89.8% worldwide. It is a trailing calculation covering renewals seven to eighteen months before the reporting date. It shows how many members stayed. It does not say why, and it does not show that the hot dog had anything to do with it.',
          'Costco credits the 11% rise in membership fee revenue to new sign-ups, the fee increase and upgrades to Executive membership. The fee makes next year’s experience part of the product. Costco is selling a reason to return, the same repeat relationship retailers worry about losing when [AI assistants become the doorway to the store](/blog/retailers-ai-traffic-customer-ownership).',
        ],
      },
      {
        heading: 'Back to the hot dog',
        paragraphs: [
          'A hot dog and a soda for $1.50 is a promise you can remember without doing any math. For the business, the interesting part is everything required to keep a promise like that believable, year after year. For a shopper, the question is whether the rest of the cart deserves the same confidence.',
          'Does your membership pay for itself?',
        ],
      },
    ],
    takeaways: [
      'Costco reported $5.907 billion in worldwide membership fee revenue for fiscal 2026, up 11%. That is revenue, not profit.',
      'A core warehouse carries fewer than 4,000 active items, which lets Costco concentrate orders into larger quantities.',
      'Pallet displays, with more stock on racks overhead, reduce the labor needed to handle merchandise, according to Costco.',
      'The $1.50 hot dog and soda price dates to 1985, while the basic U.S. membership fee rose from $60 to $65 on September 1, 2024.',
      'The 92.3% U.S. and Canada renewal rate is a company-reported trailing measure. It shows that members stayed, not why.',
    ],
    chapters: [
      { time: '0:00', label: 'The $1.50 promise' },
      { time: '0:33', label: 'A year to prove the value' },
      { time: '1:13', label: 'The enormous store with fewer choices' },
      { time: '2:03', label: 'The cardboard is doing a job' },
      { time: '2:39', label: 'Does the bargain work for you?' },
      { time: '3:22', label: 'The price that changed' },
      { time: '3:55', label: 'The renewal decision' },
      { time: '4:34', label: 'Back to the hot dog' },
    ],
    sources: [
      {
        label: 'Costco Wholesale Corporation Form 10-K, fiscal year ended August 30, 2026 (SEC)',
        date: 'Fiscal year 2026',
        href: 'https://www.sec.gov/Archives/edgar/data/909832/000090983226000093/cost-20260830.htm',
      },
      {
        label: 'Membership Fee Increase (Costco Customer Service)',
        date: 'Effective September 1, 2024',
        href: 'https://customerservice.costco.com/app/answers/answer_view/a_id/1013504/~/membership-fee-increase',
      },
      {
        label: 'Why does Costco charge an annual membership fee? (Costco Customer Service)',
        date: 'Checked November 2, 2026',
        href: 'https://customerservice.costco.com/app/answers/answer_view/a_id/845/loc/en_US',
      },
      {
        label: 'Costco membership hacks: warehouse selection and food court (Costco)',
        date: 'Checked November 2, 2026',
        href: 'https://www.costco.com/f/-/my-life-membership-hacks',
      },
      {
        label: 'Costco Historical Highlights (PDF)',
        date: 'Costco investor relations',
        href: 'https://media.corporate-ir.net/media_files/irol/83/83830/reports/HistoricalHighlights.pdf',
      },
    ],
    sourcesNote:
      'The sources cited in the video. Membership fee revenue is revenue, not profit. The $5 per visit example is an illustration, not Costco’s average saving. The renewal rate is Costco’s own trailing measure and does not explain why members renew. The item count uses the annual report’s figure of fewer than 4,000 active items per warehouse.',
    related: [
      {
        href: '/blog/retailers-ai-traffic-customer-ownership',
        title: 'Retailers Want AI Shopping Traffic. They Do Not Want to Lose the Customer.',
        note: 'A membership is one way to own the repeat relationship. AI shopping traffic tests the same question.',
      },
      {
        href: '/blog/kroger-ecommerce-operating-model',
        title: 'Kroger’s Ecommerce Reset Is Becoming an Operating Model',
        note: 'Another retailer whose promise to customers depends on how the operation behind it runs.',
      },
    ],
    credits:
      'Written by Robert Hu; narration uses his authorized AI voice clone. Warehouse footage is edited from “Full Tour of a NEW Costco Store!” by the altem life (Creative Commons Attribution), with source audio removed; the creator identifies the store as The Villages, Florida, and the footage is from 2025, not a new 2026 visit. Hot dog photograph by Matt Johnson (cornstalker), CC BY 2.0, cropped and edited. The thumbnail is an AI-assisted editorial composite using the credited photo and footage. Independent commentary; no Costco endorsement. Music and sound credits are listed in the YouTube description.',
    feature: {
      eyebrow: 'Featured Video',
      title: 'Why Costco Wants You to Remember $1.50',
      description:
        'A $1.50 hot dog is easy to remember. Follow a Costco shopping trip from the food court to the decision that pays for the whole model: renewing the membership.',
      cta: 'Watch the video',
    },
  },
  {
    slug: 'hershey-cocoa-halloween-candy-prices',
    youtubeId: 'aDa_hBaS7NM',
    youtubeTitle: "Why Cheaper Cocoa Hasn't Made Halloween Candy Cheaper",
    h1: 'Why Cheaper Cocoa Hasn’t Made Halloween Candy Cheaper',
    seoTitle: 'Why Halloween Candy Costs More When Cocoa Got Cheaper',
    metaDescription:
      'Cocoa prices fell about 20% while U.S. candy prices rose 7.7%. How hedging, pricing and shopper pushback at Hershey explain the gap between bean and bag.',
    dek: 'A key chocolate ingredient got cheaper. The candy aisle did not follow it down. The gap is made of timing, pricing decisions and shoppers who quietly buy less.',
    uploadDate: '2026-10-31T16:00:17-07:00',
    duration: 'PT5M35S',
    durationLabel: '5 min 35 sec',
    topic: 'Retail strategy',
    subject: 'Hershey and cocoa prices',
    thumbnail: '/images/videos/hershey-cocoa-halloween-candy-prices.jpg',
    thumbnailAlt: 'Video thumbnail: a broken peanut butter cup beside cocoa beans and a glowing jack-o’-lantern, under the words The Hershey Story. Cheaper Cocoa. Costlier Candy.',
    sections: [
      {
        paragraphs: [
          'The candy bowl is supposed to be the easy part of Halloween. This year it hides a puzzle. The World Bank’s cocoa benchmark averaged about 20% less in the third quarter of 2026 than a year earlier. Meanwhile, U.S. candy and chewing gum prices in September were about 7.7% higher than the previous September, according to the Bureau of Labor Statistics.',
          'Those are different measures covering different things, and neither reveals what any manufacturer actually paid for cocoa. Together they raise a reasonable shopper’s question: where did the saving go?',
        ],
      },
      {
        heading: 'Hershey’s sales-volume split',
        paragraphs: [
          'Hershey offers a way inside the problem. Its North America Confectionery segment recorded $2.17 billion in net sales in the second quarter of 2026, up 4.2%. That is one segment, not Halloween revenue and not profit. The twist is underneath: price realization rose about 14% while volume fell about 10%. Sales went up while less product went out.',
        ],
      },
      {
        heading: 'The price has a memory',
        paragraphs: [
          'A cocoa bean travels through growing, processing, manufacturing and distribution before it becomes a chocolate cup. A market quotation measures one part of that journey. It does not measure the finished bag, its packaging, the energy used to make it or the work of getting it onto a shelf.',
          'Then there is timing. Hershey says it generally hedges commodity price risks for 3- to 24-month periods, and that as a result, average market prices are not necessarily indicative of its average costs. Think of booking a flight and watching the fare drop afterward. The cheaper seat is real, but it does not rewrite the ticket you already bought.',
          'Buying ahead gives a manufacturer more certainty when prices rise and limits how quickly it benefits when they fall. That is a trade-off, not proof that every bag contains expensive old cocoa. A falling commodity chart cannot, by itself, tell us what a manufacturer paid, what a supermarket paid or what a shopper should be charged tomorrow.',
        ],
      },
      {
        heading: 'The customer gets a vote',
        paragraphs: [
          'A cost explanation is not a complete explanation of price. Competitors, retailers and shoppers all have a say. Hershey attributed its second-quarter volume decline in North America Confectionery primarily to price elasticity: people reacting to higher prices by buying less.',
          'Shoppers do not need a spreadsheet to respond. They pick a smaller bag, a different brand, something fruity instead of chocolate, or simply less candy. Higher sales help the financial result. Fewer purchases make the next sale harder to win.',
          'The pattern held after the video’s main figures. In its third-quarter results on October 29, Hershey reported North America Confectionery net sales up 1.6%, with about 13 points of price realization and volume down about 11 points, which it attributed to price elasticity and normal quarter-to-quarter shipment variability.',
        ],
      },
      {
        heading: 'Halloween before October',
        paragraphs: [
          'Hershey’s answer is to make Halloween bigger than October 31. In a company-commissioned survey with Morning Consult, released in July, 67% of parents said they had already bought Halloween candy that summer. That is self-reported behavior, not a count of Hershey sales, but it explains why a candy company wants the Halloween conversation to start while people are still on summer vacation.',
          'For 2026, Hershey announced more than 20 seasonal product innovations across chocolate, sweets and salty snacks. Reese’s Pumpkins returned, and fruity and sour options joined assorted bags. The idea is to serve different tastes and occasions, from an early treat to a party, a shared bowl and trick-or-treat night, instead of asking one chocolate product to do every job. Product announcements are not sales results.',
        ],
      },
      {
        heading: 'More occasions, not just more customers',
        paragraphs: [
          'The household wants enough candy for the people who actually show up. The company wants enough reasons for households to buy before that night arrives. One bowl, two planning problems. Buy too late and the favorite may be gone. Buy early and someone at home may help the inventory disappear.',
        ],
      },
      {
        heading: 'Who has to say yes?',
        paragraphs: [
          'Cheaper cocoa can help a manufacturer. It does not act like a refund button at checkout. Past purchasing decisions, other costs, retail decisions and what customers will accept all sit between the bean and the bag, and Hershey’s own volume decline shows shoppers are part of that calculation. The price contains timing, and the next sale depends on giving someone a reason to choose it again. The same holiday runs on a different deadline for [Spirit Halloween’s temporary stores](/videos/spirit-halloween-seasonal-stores).',
          'What changed in your candy bowl this year?',
        ],
      },
    ],
    takeaways: [
      'The World Bank cocoa benchmark averaged about 20.5% less in Q3 2026 than in Q3 2025, while U.S. candy and gum prices were about 7.7% higher in September 2026 than a year earlier. Different measures, different periods.',
      'Hershey hedges commodity risk for 3 to 24 months, so its average costs do not track market prices directly.',
      'In Q2 2026, Hershey’s North America Confectionery sales rose 4.2% on about 14% price realization, while volume fell about 10%, mainly from price elasticity.',
      'Q3 2026 continued the pattern: segment sales up 1.6%, price about 13 points higher, volume about 11 points lower.',
      'Hershey is stretching Halloween into a season: 67% of surveyed parents said they bought candy in summer, and the 2026 lineup has more than 20 seasonal innovations.',
    ],
    chapters: [
      { time: '0:00', label: 'The candy bowl puzzle' },
      { time: '0:39', label: 'Hershey’s sales-volume split' },
      { time: '1:21', label: 'The price has a memory' },
      { time: '2:25', label: 'The customer gets a vote' },
      { time: '3:27', label: 'Halloween before October' },
      { time: '4:30', label: 'More occasions, not just more customers' },
      { time: '5:12', label: 'Who has to say yes?' },
    ],
    sources: [
      {
        label: 'Commodity Markets: monthly prices (World Bank Pink Sheet)',
        date: 'Q3 2025 and Q3 2026 cocoa averages',
        href: 'https://www.worldbank.org/en/research/commodity-markets',
      },
      {
        label: 'Consumer Price Index: candy and chewing gum, U.S. city average (BLS series CUUR0000SEFR02)',
        date: 'September 2025 and September 2026',
        href: 'https://data.bls.gov/timeseries/CUUR0000SEFR02',
      },
      {
        label: 'The Hershey Company Form 10-Q, quarter ended June 28, 2026 (SEC)',
        date: 'Q2 2026',
        href: 'https://www.sec.gov/Archives/edgar/data/47111/000162828026050900/hsy-20260628.htm',
      },
      {
        label: 'The Hershey Company 2025 Form 10-K, in the 2026 annual report (PDF)',
        date: 'Fiscal year 2025',
        href: 'https://hershey.gcs-web.com/static-files/fee21938-3a8e-4d4e-8310-650b9ad85e56',
      },
      {
        label: 'Anticipation Is Reshaping America’s Halloween Season (Hershey)',
        date: 'July 29, 2026',
        href: 'https://www.thehersheycompany.com/en_us/home/newsroom/press-release/2026-07-29-Anticipation-Is-Reshaping-Americas-Halloween-Season.html',
      },
      {
        label: 'The Hershey Company Unwraps Its 2026 Halloween Portfolio (Hershey)',
        date: 'August 13, 2026',
        href: 'https://www.thehersheycompany.com/en_us/home/newsroom/press-release/2026-08-13-The-Hershey-Company-Unwraps-Its-2026-Halloween-Portfolio.html',
      },
      {
        label: 'Hershey Reports Third-Quarter 2026 Financial Results (SEC, exhibit 99.1)',
        date: 'October 29, 2026',
        href: 'https://www.sec.gov/Archives/edgar/data/47111/000162828026068046/exhibit991_2026xq3.htm',
        note: 'Added on this page; not cited in the video.',
      },
    ],
    sourcesNote:
      'The sources cited in the video, plus Hershey’s third-quarter release. The cocoa and candy comparisons use different measures and periods, and neither reveals Hershey’s actual ingredient costs. Segment figures are net sales, not profit or Halloween revenue. Price realization and volume are company segment measures, not changes to every store ticket. The July survey is self-reported and company-commissioned.',
    related: [
      {
        href: '/blog/instacart-clementine-ask-shipt-ai-basket',
        title: 'The Assistant Builds the Cart. Brands Now Compete to Be in It.',
        note: 'When shoppers trade down or buy less, brands compete harder for the places left in the basket.',
      },
    ],
    credits:
      'Written by Robert Hu; narration uses his authorized AI voice clone. Chocolate and shopping scenes are illustrative Pexels stock, not identified Hershey facilities or customers. Product photographs by Evan-Amos (Wikimedia Commons, public domain) are archive images from 2010 and 2011, not 2026 campaign footage. Cocoa-drying photograph by Chuck Moravec (CC BY 2.0), cropped and animated. The cover artwork is illustrative, not a photograph of an actual event. Independent editorial production; no brand endorsement. Music and sound credits are listed in the YouTube description.',
    feature: {
      eyebrow: 'Featured Video',
      title: 'Why Cheaper Cocoa Hasn’t Made Halloween Candy Cheaper',
      description:
        'Cocoa got cheaper. Halloween candy did not. Follow Hershey’s buying decisions, a quarter where sales rose while volume fell, and the push to start Halloween in summer.',
      cta: 'Watch the video',
    },
  },
  {
    slug: 'spirit-halloween-seasonal-stores',
    youtubeId: 'wvDNgTh9QFk',
    youtubeTitle: 'Why Spirit Halloween Keeps Taking Over Dead Stores',
    h1: 'Why Spirit Halloween Keeps Taking Over Dead Stores',
    seoTitle: 'How Spirit Halloween’s Pop-Up Store Business Works',
    metaDescription:
      'Spirit Halloween leases empty stores for a few months, opens against a fixed deadline and closes again. How the seasonal model works, and its Christmas test.',
    dek: 'An empty shop looks like an ending. Spirit Halloween sees a temporary opening, with a deadline that cannot move and a store that has to close again.',
    uploadDate: '2026-10-30T16:00:12-07:00',
    duration: 'PT7M0S',
    durationLabel: '7 min',
    topic: 'Retail strategy',
    subject: 'Spirit Halloween',
    thumbnail: '/images/videos/spirit-halloween-seasonal-stores.jpg',
    thumbnailAlt: 'Video thumbnail: illustrative artwork of a large empty store at dusk with a Spirit Halloween banner, under the words Dead Stores. Live Business.',
    sections: [
      {
        paragraphs: [
          'An empty store looks like an ending. Spirit Halloween sees a possible opening.',
          'Most retailers open a store hoping it will stay open for years. Spirit opens seasonal stores knowing they will close after Halloween. The deadline is part of the design. Behind the orange banner is a harder problem than it looks: finding the right space, filling it, staffing it and selling enough before the holiday passes. Halloween cannot move back a week.',
        ],
      },
      {
        heading: 'The $13.5 billion opportunity',
        paragraphs: [
          'The National Retail Federation expects Americans to spend $13.5 billion on Halloween in 2026, close to last year’s record $13.1 billion. That is spending across the entire holiday, not Spirit’s revenue. Spirit has to compete for its share while paying for every step of opening and closing.',
        ],
      },
      {
        heading: 'Somebody else’s empty box',
        paragraphs: [
          'The answer starts with something another retailer no longer wants. One photograph in the video shows Spirit in a former Babies "R" Us in Reynoldsburg, Ohio, in September 2023. The building was designed for a different business. Spirit only needs a usable place where customers can find it, park, walk in and shop.',
          'For a landlord, a vacant shop produces no rent. A temporary tenant brings income while the search for a long-term occupant continues. Spirit’s leasing page asks for temporary leases of about three months, ideally from mid-July to mid-November, with a kick-out clause if the landlord secures a permanent deal by June. Stores open around September 1 and stay open through November 1.',
          'The page is specific about what makes a space useful: power centers, strip centers, free-standing stores and malls, roughly 35,000 people within three to five miles, at least 25,000 cars a day and, ideally, 5,000 to 50,000 square feet of sales floor with strong visibility. A cheap building is no bargain if customers never see the sign. Spirit turns a space with no tenant into a location with a deadline.',
        ],
      },
      {
        heading: 'Opening against the clock',
        paragraphs: [
          'In June, Spirit announced plans to hire more than 52,000 seasonal associates for 2026, for more than 1,500 locations across the United States and Canada. The roles include managers who lead store setup, merchandising, operations and teardown. A store that looks ready but cannot trade is still burning time.',
          'One store manager quoted in the announcement, in Silverdale, Washington, was returning for her sixth season. Temporary stores still benefit from people who have done the work before. The building changes. The experience can come back.',
        ],
      },
      {
        heading: 'The attraction and the sales floor',
        paragraphs: [
          'Spirit’s 2023 press footage shows a large themed display among aisles of merchandise. My read of the layout is that the display gives people a reason to explore, and the racks around it give them things to buy. That does not prove how much extra revenue a display produces. It shows a shop that combines an attraction with a sales floor.',
          'Footage of a 2023 flagship grand opening shows a crowd. That is evidence of interest in that event, not proof that every store gets the same reception.',
        ],
      },
      {
        heading: 'The inventory problem',
        paragraphs: [
          'No retailer can stock every costume in every size everywhere at exactly the right moment. Too little stock means missed sales. Too much ties up cash in things that did not sell, and a holiday deadline makes either mistake harder to recover from.',
          'Sales alone do not settle the business case. Merchandise, people, space, setup, freight and teardown all have to be paid for. I have not verified Spirit’s revenue or store-level profit, so I do not estimate either here. A busy checkout and a profitable season are different things.',
        ],
      },
      {
        heading: 'Halloween arrives',
        paragraphs: [
          'Then Halloween arrives, the moment the store has been racing toward. Spirit’s own shopping advice points to store sales on November 1 and 2, and says stores close a few days after Halloween, while spirithalloween.com stays open all year. Individual closing dates vary. The work includes getting out of the building, not just getting in.',
        ],
      },
      {
        heading: 'The Christmas twist',
        paragraphs: [
          'On October 8, Spirit announced that Spirit Christmas is returning for a third season at 44 locations across 15 states, turning familiar spaces from spooky to merry. It is a logical test for a retailer that knows how to create a temporary destination. Forty-four locations do not prove the concept will match Halloween’s scale or economics.',
        ],
      },
      {
        heading: 'What repeats next season',
        paragraphs: [
          'The valuable capability is finding a space, bringing it to life, serving a surge of customers and finishing the job. The costumes are what shoppers see. The repeatable operation is what makes the next season possible, the same reason [the physical layer matters in DoorDash’s Instacart deal](/blog/doordash-instacart-physical-layer-ai-commerce).',
          'Which empty building in your town has become a Spirit store?',
        ],
      },
    ],
    takeaways: [
      'NRF expects $13.5 billion in U.S. Halloween spending in 2026. That is the whole holiday market, not Spirit’s revenue.',
      'Spirit seeks temporary leases of about three months with a kick-out clause, in sites with roughly 35,000 nearby residents, 25,000 cars a day and 5,000 to 50,000 square feet of sales floor.',
      'Spirit planned to hire more than 52,000 seasonal associates for 2026 across more than 1,500 locations, including teams for setup and teardown.',
      'Stores close a few days after Halloween, after sales on November 1 and 2, while the website sells year-round.',
      'Spirit Christmas returns for a third season at 44 locations in 15 states, a test of reusing the same temporary-store capability.',
    ],
    chapters: [
      { time: '0:00', label: 'A store built to disappear' },
      { time: '0:36', label: 'The $13.5 billion opportunity' },
      { time: '1:06', label: 'Somebody else’s empty box' },
      { time: '2:29', label: 'Opening against the clock' },
      { time: '3:33', label: 'The attraction and the sales floor' },
      { time: '4:23', label: 'The inventory problem' },
      { time: '5:01', label: 'Halloween arrives' },
      { time: '5:37', label: 'The Christmas twist' },
      { time: '6:11', label: 'What repeats next season' },
    ],
    sources: [
      {
        label: 'NRF Halloween survey: consumer spending expected to reach $13.5 billion',
        date: 'September 22, 2026',
        href: 'https://nrf.com/media-center/press-releases/nrf-halloween-survey-shows-consumer-spending-expected-to-reach-13-5-billion',
      },
      {
        label: 'Spirit Halloween, Store Opportunities: Real Estate Leasing',
        date: 'Checked October 31, 2026',
        href: 'https://www.spirithalloween.com/content.jsp?pageName=RealEst',
      },
      {
        label: 'Spirit Summons 52,000 Seasonal Associates (Spirit Halloween)',
        date: 'June 11, 2026',
        href: 'https://www.spirithalloween.com/content.jsp?pageName=PressRelSpiritSummons52k',
      },
      {
        label: '10 Mistakes to Avoid While Shopping at Spirit Halloween (Spirit Halloween blog)',
        date: 'Checked October 31, 2026',
        href: 'https://www.spirithalloween.com/blog/10-mistakes-to-avoid-while-shopping-at-spirit-halloween/',
      },
      {
        label: 'Spirit Christmas Returns for Its Third Season (PR Newswire)',
        date: 'October 8, 2026',
        href: 'https://www.prnewswire.com/news-releases/spirit-christmas-returns-for-its-third-season-bringing-holiday-magic-and-festive-discoveries-to-44-locations-302902653.html',
      },
    ],
    sourcesNote:
      'The sources cited in the video. The $13.5 billion is NRF’s forecast for total U.S. Halloween spending, not Spirit revenue or profit. The 52,000-plus figure is Spirit’s announced hiring target. The 44 Christmas locations are a 2026 company announcement, not evidence of financial results.',
    related: [
      {
        href: '/blog/doordash-instacart-physical-layer-ai-commerce',
        title: 'DoorDash Is Buying Instacart to Win the Physical Layer of AI Commerce',
        note: 'Another case where the repeatable physical operation, not the storefront, is the asset.',
      },
      {
        href: '/blog/kroger-ecommerce-operating-model',
        title: 'Kroger’s Ecommerce Reset Is Becoming an Operating Model',
        note: 'Owning capabilities and running them as one repeatable system are different achievements.',
      },
    ],
    credits:
      'Written by Robert Hu; narration uses an authorized AI clone of his voice. Store-tour footage from That Nate Guy On YouTube (Creative Commons Attribution), photographs by Dan Keck (CC0), JJBers (CC BY 2.0) and Aidman16 (CC BY 4.0), and limited 2023 Spirit Halloween press-room excerpts used for analysis, with no license or endorsement claimed. Atmosphere and warehouse footage is illustrative Pexels stock, not Spirit employees or facilities. The thumbnail is AI-assisted illustrative artwork. Independent commentary. Music and sound credits are listed in the YouTube description.',
    feature: {
      eyebrow: 'Featured Video',
      title: 'Why Spirit Halloween Keeps Taking Over Dead Stores',
      description:
        'An empty shop looks like an ending. Follow Spirit Halloween from a vacant building to a store with a deadline it cannot move, and the Christmas test that comes next.',
      cta: 'Watch the video',
    },
  },
  {
    slug: 'doordash-instacart-acquisition',
    youtubeId: 'r9WhkOkaFd4',
    youtubeTitle: 'DoorDash’s $17B Instacart Deal Is Really About AI’s Hardest Job',
    h1: 'DoorDash’s $17B Instacart Deal Is Really About AI’s Hardest Job',
    seoTitle: 'DoorDash Instacart Deal: Why AI Still Needs Fulfillment',
    metaDescription:
      'DoorDash’s proposed $17B Instacart deal bets on the physical work behind AI shopping: picking, substitutions and delivery, and what still has to happen.',
    dek: 'An AI can plan dinner. Someone still has to pick the avocado. DoorDash’s proposed Instacart acquisition is a bet on the physical work that turns a recommendation into groceries at the door.',
    uploadDate: '2026-10-29T16:00:29-07:00',
    duration: 'PT4M7S',
    durationLabel: '4 min 7 sec',
    topic: 'Delivery and logistics',
    subject: 'DoorDash and Instacart',
    thumbnail: '/images/videos/doordash-instacart-acquisition.jpg',
    thumbnailAlt: 'Video thumbnail: illustrative artwork of a hand holding an avocado in a grocery aisle under the words DoorDash plus Instacart, $17B, AI Still Needs This, Proposed Deal.',
    sections: [
      {
        paragraphs: [
          'An AI assistant can plan your dinner. It still needs someone to pick the avocado.',
          'On October 29, 2026, DoorDash and Instacart announced a definitive agreement for DoorDash to acquire Instacart at $65.00 a share, an equity value of about $17 billion. It is a proposed deal, not a completed one. It needs Instacart shareholder approval and regulatory approvals in the United States, Canada and Israel, and the companies expect to close at the end of 2027 or in the first half of 2028. Until then, they operate as separate and independent companies.',
          'DoorDash has already explained the bet. While other companies compete to build your personal AI assistant, its shareholder letter says it wants to be the physical network that gets tasks done in the real world.',
        ],
      },
      {
        heading: 'Follow one grocery order',
        paragraphs: [
          'Imagine asking an assistant for dinner ingredients. It builds a list, and a few taps later the order is on its way. On the screen, that looks almost finished. In the store, the work is just beginning.',
          'A shopper has to find the right products, judge whether an avocado is ready for tonight and decide what to do about the item missing from the shelf. A convincing answer in a chat window cannot tell you whether the replacement that reaches your kitchen will work for dinner. The promise only becomes real when the bag reaches your door.',
        ],
      },
      {
        heading: 'More than a shopping app',
        paragraphs: [
          'DoorDash’s third quarter shareholder letter calls this the battle for atoms. The company still builds AI ordering tools, including Ask DoorDash, Text DoorDash and a Model Context Protocol interface for external AI agents, including workplace tools for corporate ordering. Its stated strategic priority is the physical network those tools can reach.',
          'Instacart would bring more than a second shopping app. Its Enterprise technology runs more than 380 grocers’ ecommerce sites and adds fulfillment, in-store tools and Carrot Ads for retailers’ own sites. DoorDash brings its delivery network and DashMart Fulfillment Services. DoorDash says it expects to keep Instacart’s brand, app and enterprise technology products after closing.',
          'So imagine the same dinner order starts somewhere different tomorrow: in a grocery app, on a supermarket’s website or with an assistant. The front door changes. The physical jobs behind it do not. I make the longer case in [DoorDash, Instacart and the physical layer of AI commerce](/blog/doordash-instacart-physical-layer-ai-commerce).',
        ],
      },
      {
        heading: 'Why the money might work',
        paragraphs: [
          'A warehouse needs space and people before the next order arrives. Running more orders through the same operation spreads those fixed costs across more baskets, and delivery routes become denser. DoorDash’s letter names that scale as one reason Instacart appeals, and says that when it manages a grocer’s inventory itself through DashMart, fulfillment accuracy exceeds 99%.',
          'Scale is an attraction and a challenge. Combining two companies does not automatically make a difficult grocery order easier to fill.',
        ],
      },
      {
        heading: 'The synergy target and reinvestment',
        paragraphs: [
          'DoorDash says it sees a multi-year path to at least $500 million in annual synergies, net of investments. That is a target, not savings already delivered. It also expects to reinvest more than 100% of the synergies in the first year after closing, with positive net synergies from the second year. The early plan is to spend on improving the business rather than treat every projected efficiency as immediate profit.',
        ],
      },
      {
        heading: 'The local grocer’s choice',
        paragraphs: [
          'For a local grocer, renting online ordering, delivery and advertising can be the practical way to compete with retailers that build their own. But when more of the software, advertising and fulfillment comes from one provider, switching becomes a bigger business decision.',
          'DoorDash has committed that grocers will remain free to work with any delivery platform, with no grocery exclusivity. That commitment matters. So will the terms and performance retailers actually experience.',
        ],
      },
      {
        heading: 'What still has to happen',
        paragraphs: [
          'Shareholders and regulators have decisions ahead. The merger agreement allows extra time if antitrust reviews run long, and DoorDash would owe Instacart $1.25 billion if antitrust obstacles end the deal. Until it closes, a proposed combination is a plan.',
          'My test is whether orders arrive more reliably, whether retailers get useful tools at economics that work for them, and whether outside AI assistants send meaningful business through the network. Those results will say more than a launch presentation.',
        ],
      },
      {
        heading: 'The business behind the screen',
        paragraphs: [
          'Come back to the avocado. The assistant may help you decide what to buy. The valuable business could be the one that makes sure the right thing arrives. The shopping screen can keep changing while the physical work becomes more important.',
          'Would you let an AI assistant choose your grocery substitutions?',
        ],
      },
    ],
    takeaways: [
      'DoorDash and Instacart announced a definitive agreement on October 29, 2026 for DoorDash to acquire Instacart at about a $17 billion equity value. It is pending, with closing expected at the end of 2027 or in the first half of 2028.',
      'DoorDash describes its AI strategy as winning the physical network, the “battle for atoms,” while it still builds AI ordering tools.',
      'Instacart would bring Enterprise technology behind more than 380 grocers’ websites, plus fulfillment, in-store tools and retail media. DoorDash expects to keep Instacart’s brand, app and enterprise products.',
      'The $500 million-plus annual synergy figure is a multi-year target, net of investments, with more than 100% reinvested in the first year after closing.',
      'DoorDash commits to no grocery exclusivity. Approvals, retailer terms and post-close performance will decide whether the bet works.',
    ],
    chapters: [
      { time: '0:00', label: 'Who picks the avocado?' },
      { time: '0:30', label: 'Follow one grocery order' },
      { time: '1:23', label: 'More than a shopping app' },
      { time: '1:54', label: 'Why the money might work' },
      { time: '2:15', label: 'The synergy target and reinvestment' },
      { time: '2:38', label: 'The local grocer’s choice' },
      { time: '3:10', label: 'What still has to happen' },
      { time: '3:44', label: 'The business behind the screen' },
    ],
    sources: [
      {
        label: 'DoorDash to Acquire Instacart to Help Local Stores Win (Instacart)',
        date: 'October 29, 2026',
        href: 'https://company.instacart.com/pressreleases/doordash-to-acquire-instacart-to-help-local-stores-win',
      },
      {
        label: 'DoorDash third quarter 2026 financial results and shareholder letter',
        date: 'October 29, 2026',
        href: 'https://ir.doordash.com/news/news-details/2026/DoorDash-Releases-Third-Quarter-2026-Financial-Results/default.aspx',
      },
      {
        label: 'DoorDash Form 8-K, Agreement and Plan of Merger',
        date: 'October 29, 2026',
        href: 'https://www.sec.gov/Archives/edgar/data/1792789/000114036126041111/ef20084547_8k.htm',
      },
      {
        label: 'Instacart Annual Report on Form 10-K for 2025',
        date: 'February 26, 2026',
        href: 'https://www.sec.gov/Archives/edgar/data/1579091/000157909126000018/cart-20251231.htm',
      },
    ],
    sourcesNote:
      'The sources cited in the video, plus the merger filing and Instacart’s annual report for details on this page. The $17 billion is equity value at $65.00 a share. The $500 million figure is DoorDash’s multi-year synergy target, net of investments, not realized savings. The 99% accuracy figure is DoorDash’s own, for inventory it manages through DashMart.',
    related: [
      {
        href: '/blog/doordash-instacart-physical-layer-ai-commerce',
        title: 'DoorDash Is Buying Instacart to Win the Physical Layer of AI Commerce',
        note: 'The full business analysis: what each company would bring and what would prove the thesis.',
      },
      {
        href: '/blog/doordash-ai-shopping-messy-middle-discovery',
        title: 'AI Did Not Kill the Messy Middle. It Moved It Into the Machine.',
        note: 'What DoorDash’s own assistant data shows about discovery moving into software.',
      },
      {
        href: '/blog/instacart-gopuff-carrot-ads-retail-media-infrastructure',
        title: 'Retail Media Is Becoming Infrastructure, Not a Network Every Retailer Builds',
        note: 'Why retailers increasingly rent the stack, and what renting it costs.',
      },
    ],
    credits:
      'Written by Robert Hu; narration uses an authorized AI clone of his voice. Grocery and delivery scenes are licensed illustrative stock from Pexels and do not depict DoorDash or Instacart employees, facilities or an actual customer order. Original diagrams illustrate the business logic. The thumbnail is an AI-created conceptual illustration. Independent commentary; no endorsement implied. Music credits are listed in the YouTube description.',
    feature: {
      eyebrow: 'Featured Video',
      title: 'DoorDash’s $17B Instacart Deal Is Really About AI’s Hardest Job',
      description:
        'An AI can plan your dinner. Someone still has to pick the avocado. Why DoorDash’s proposed Instacart deal is a bet on the physical work behind every grocery order.',
      cta: 'Watch the video',
    },
  },
  {
    slug: 'schaeffler-humanoid-robot-actuators',
    youtubeId: 'sc0bkdImVrg',
    youtubeTitle: 'Robots Are Building Robot Parts. Who Gets Paid?',
    h1: 'Robots Are Building Robot Parts. Who Gets Paid?',
    seoTitle: 'Schaeffler’s Humanoid Robot Bet: Why the Joints Matter',
    metaDescription:
      'Schaeffler has humanoids assembling actuators for other humanoids and about EUR400 million in robotics orders. Why the joint may be the real business.',
    dek: 'A robot helping make the joints for the next robot is a wonderfully strange pitch. The people standing beside it, and the orders behind it, tell the real story.',
    uploadDate: '2026-10-28T16:00:36-07:00',
    duration: 'PT4M7S',
    durationLabel: '4 min 7 sec',
    topic: 'Manufacturing',
    subject: 'Schaeffler humanoid robots',
    thumbnail: '/images/videos/schaeffler-humanoid-robot-actuators.jpg',
    thumbnailAlt: 'Video thumbnail: a humanoid robot working at a factory bench with a person behind it, under the words Who Gets Paid? and approximately $450M in robot orders.',
    sections: [
      {
        paragraphs: [
          'This robot is helping make parts for other robots: the joints that let the next robot move. Build the parts, put them inside robots, then put robots to work building more parts. It is a wonderfully strange sales pitch.',
          'But watch the people standing beside the machines. This is not a factory that has learned to reproduce itself. It is a company trying to turn a very difficult piece of engineering into a business.',
        ],
      },
      {
        heading: 'The $450 million question',
        paragraphs: [
          'The company is Schaeffler. On October 13, 2026, it said orders in its humanoid robotics business had grown to approximately EUR400 million, helped by two new customers in the Greater China region in the third quarter. At the European Central Bank reference rate of October 23, 2026, that is about $450 million.',
          'Orders are not revenue already earned, not profit and not the price of a factory. The question is whether the least glamorous part of the robot could become one of the most valuable places to be.',
        ],
      },
      {
        heading: 'Follow the joint',
        paragraphs: [
          'Forget the face and follow the arm. Software can decide where a hand should go. A physical mechanism still has to move it there, control the force and repeat the job without damaging what it holds. That is an actuator’s job: turning energy into controlled movement, some in a straight line and some by rotating. In a humanoid, actuators turn an instruction into a useful action.',
          'Schaeffler already makes motion technology for demanding industrial applications. Its wager is that the humanoid boom will need that expertise, whichever robot gets the attention. On October 20, it announced a facility in Taicang, China, where six humanoids work across five stations assembling key joint modules, including linear and rotary actuators. Schaeffler describes it as the start of mass production of these components.',
          'A short factory film cannot tell us how often the line stops, how many parts pass inspection or what each finished module costs. Those questions separate a compelling announcement from a proven business.',
        ],
      },
      {
        heading: 'The people training the machines',
        paragraphs: [
          'The next obstacle is in Erlangen, Germany. At its Humanoid Gym, Schaeffler is working with Hexagon Robotics to prepare a different robot, AEON, for manufacturing work. This is a training environment, not the Taicang production line.',
          'In the footage, a person wearing a headset guides the task while the robot reaches for parts. Teams practice representative production scenarios and validate new capabilities before they reach the factory floor. People are learning how to integrate the robot while the robot is being trained, which is a more useful picture of industrial AI than one impressive move on a stage.',
          'In August, the partners described a planned rollout of at least 1,000 AEON humanoids across Schaeffler’s manufacturing operations in the coming years. A planned deployment is not 1,000 robots already working.',
        ],
      },
      {
        heading: 'Supplier, customer and the business test',
        paragraphs: [
          'Schaeffler will also supply actuator technology to AEON. It wants to help build the machine, use the machine and learn from what happens when the machine meets a real job. That puts it on both sides, as component supplier and as user, which could give it valuable feedback: where a motion fails, what has to be redesigned and what the next application demands.',
          'Buying robots and selling parts do not prove that the economics work. The public materials do not include the operating data needed to calculate a verified factory payback, and orders still have to become deliveries and profitable business. The same gap between an impressive capability and a business result runs through [ABB’s decision to sell its robotics division to SoftBank](/videos/softbank-abb-robotics-acquisition).',
        ],
      },
      {
        heading: 'Look past the face',
        paragraphs: [
          'The real test comes after the announcement: consistent quality, useful output and customers ordering again. The next time you watch a humanoid demonstration, look past the face at the joint doing the work. There may be a much bigger business hiding in that ordinary-looking movement.',
          'Who has the stronger position in the robot business: the company building the machine or the company supplying the components?',
        ],
      },
    ],
    takeaways: [
      'Schaeffler reported approximately EUR400 million (about $450 million) in humanoid robotics orders in October 2026. Orders, not revenue or profit.',
      'In Taicang, China, six humanoids work across five stations assembling joint modules, including linear and rotary actuators.',
      'At its Humanoid Gym in Erlangen, Germany, Schaeffler and Hexagon Robotics train AEON on representative tasks before factory deployment.',
      'The rollout of at least 1,000 AEON robots is a plan for the coming years, not a deployed count.',
      'Schaeffler is both an actuator supplier to AEON and a user of it. The public materials do not support a verified factory payback.',
    ],
    chapters: [
      { time: '0:00', label: 'The $450 million question' },
      { time: '0:48', label: 'Follow the joint' },
      { time: '1:55', label: 'The people training the machines' },
      { time: '2:59', label: 'Supplier, customer and the business test' },
      { time: '3:45', label: 'Look past the face' },
    ],
    sources: [
      {
        label: 'Schaeffler press release: humanoid robots assembling joint modules in Taicang (Schaeffler)',
        date: 'October 20, 2026',
        href: 'https://www.schaeffler.com/en/media/press-releases/press-releases-detail.jsp?id=88222851',
      },
      {
        label: 'Schaeffler preliminary financial update, including humanoid robotics orders (Schaeffler)',
        date: 'October 13, 2026',
        href: 'https://www.schaeffler.de/en/news_media/press_releases/press_releases_detail.jsp?id=88222017',
      },
      {
        label: 'Towards factory deployment: How AEON is trained to perform (Hexagon)',
        date: 'August 19, 2026',
        href: 'https://hexagon.com/company/newsroom/press-releases/2026/towards-factory-deployment-how-aeon-is-trained-to-perform',
      },
      {
        label: 'Schaeffler: Building the capabilities to deploy humanoid robotics at scale (Hexagon Robotics)',
        date: 'October 15, 2026',
        href: 'https://robotics.hexagon.com/schaeffler-humanoid-robotics-at-scale/',
      },
      {
        label: 'Euro foreign exchange reference rates (European Central Bank)',
        date: 'October 23, 2026: EUR1 = USD1.1193',
        href: 'https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html',
      },
    ],
    sourcesNote:
      'The sources cited in the video. The EUR400 million is humanoid robotics orders, converted at the ECB reference rate and rounded; it is not revenue, factory investment, profit or a verified payback. Taicang and Erlangen are different sites, robots and stages of deployment. The 1,000-robot figure is a planned rollout.',
    related: [
      {
        href: '/blog/ai-wont-fix-broken-work',
        title: 'AI Won’t Fix Broken Work',
        note: 'A capable machine still depends on the work and the people around it.',
      },
      {
        href: '/blog/noibu-ai-agents-closed-loop-ecommerce',
        title: 'AI Gets Interesting When It Has to Prove the Change Worked',
        note: 'Proving the result, not showing the capability, is the test after an announcement.',
      },
    ],
    credits:
      'Written by Robert Hu; narration uses his authorized AI voice clone. Selected company-published excerpts and frame grabs from Schaeffler and Hexagon Robotics films are used for commentary on the actions and claims shown; footage copyright remains with Schaeffler Group, Hexagon Robotics and their respective owners. Some frames are reframed and annotated, and the conceptual motion illustrations are not Schaeffler product drawings. The thumbnail is an AI-assisted editorial treatment of an actual factory frame. Independent editorial analysis, not sponsored or endorsed. Music and sound credits are listed in the YouTube description.',
    feature: {
      eyebrow: 'Featured Video',
      title: 'Robots Are Building Robot Parts. Who Gets Paid?',
      description:
        'Schaeffler has humanoids assembling the joints for other humanoids. Follow the actuator from a factory in China to a training gym in Germany, and the orders behind it.',
      cta: 'Watch the video',
    },
  },
  {
    slug: 'on-lightspray-running-shoe-manufacturing',
    youtubeId: 'aoYU4ZRP1CE',
    youtubeTitle: 'Why On Is Spraying Its Running Shoes',
    h1: 'Why On Is Spraying Its Running Shoes',
    seoTitle: 'On LightSpray: Why On Is Spraying Its Running Shoes',
    metaDescription:
      'On’s LightSpray robots spray a one-piece shoe upper in about three minutes. How a glue-gun experiment became factories, and what On has not disclosed.',
    dek: 'A robot can spray a shoe upper in about three minutes. The harder job is turning a Halloween-inspired experiment into factories that repeat it, and a product people choose to buy.',
    uploadDate: '2026-10-27T16:00:10-07:00',
    duration: 'PT4M44S',
    durationLabel: '4 min 44 sec',
    topic: 'Manufacturing',
    subject: 'On LightSpray',
    thumbnail: '/images/videos/on-lightspray-running-shoe-manufacturing.jpg',
    thumbnailAlt: 'Video thumbnail: illustrative artwork of a robot arm holding an On running shoe under the words Sprayed. Not Sewn.',
    sections: [
      {
        paragraphs: [
          'This robot is spraying a running shoe, and the idea started with a Halloween decoration. A continuous filament wraps around a foot-shaped mold and becomes a one-piece upper, the part that holds your foot. On says that takes around three minutes.',
          'I bought Cloud 6 shoes last year, and recently the waterproof version for a trip to Japan. Those are not LightSpray models, but they made me curious about what On is actually changing in the way shoes get made. The robot is the eye-catching part. The bigger story is whether a strange experiment can become a repeatable business.',
          'In September 2026, On set a company-wide ambition of at least CHF 5.6 billion in annual net sales by 2029, which it described as approaching $7 billion at current exchange rates. That is a future target for the whole company, not money already earned by these robots.',
        ],
      },
      {
        heading: 'The Halloween experiment',
        paragraphs: [
          'According to On, a member of its innovation team saw a video of a hot glue gun making fake spiderwebs. Most of us would have seen a Halloween decoration. The team saw a fast way to form fabric around a complicated shape. They started with a modified handheld glue gun and a simple prototype upper, then developed a unit that produces a continuous filament and the robot programming to place it where it was needed.',
          'The important move was changing the product and the process together. On says traditional upper production involves roughly 200 steps, from making the yarn to sewing and assembly, often across several factories. Instead of asking a robot to imitate every cut and stitch, On developed an upper a robot could spray, with its structure engineered through programmed movement.',
          'On says the technology took four years and a team of about 20 people to reach product maturity. The three minutes on the machine came after years of work behind it.',
        ],
      },
      {
        heading: 'The factory is the next invention',
        paragraphs: [
          'On introduced LightSpray publicly in July 2024, in the Cloudboom Strike LS racing shoe. In July 2025 it opened a dedicated LightSpray factory in Zurich with four robots. Look at what happens around the robot: shoes waiting, a controlled work area, automated ink-jet branding and people handling the finished product. The spray is one operation inside a production system, the same lesson as [how Intel makes chips](/videos/intel-chip-manufacturing).',
          'In February 2026, On announced a second facility near Busan, South Korea, adding 32 robots, and said global LightSpray production capacity would rise 30-fold in 2026. That is a capacity claim, not a statement that sales grew 30-fold. On also said there was no existing blueprint for scaling robot-sprayed uppers, so it had to build systems to coordinate many robots at once and quality protocols for automated production.',
          'That is where the challenge changes. The motion has to work consistently across sizes, materials and production runs, and quality has to hold from one demonstration to the next customer order. Busan also brought LightSpray to the Cloudmonster 3 Hyper, a training shoe, moving the technology beyond its original racing launch. On is trying to turn a headline into a product platform.',
        ],
      },
      {
        heading: 'Faster does not automatically mean cheaper',
        paragraphs: [
          'A faster process is not the same as a cheaper shoe. The robot still needs equipment, material, programming, maintenance and a factory around it. The sole does not appear when the spray starts, and an efficient upper does not tell us what the whole shoe costs to make. On has not published the LightSpray factory economics needed to judge a payback period, so I do not claim the factories have paid for themselves. Whether a working technology makes money is [a separate question](/videos/ai-business-roi-payback).',
          'What On has shown is a premium strategy. In its second quarter 2026 results, it reported a group gross profit margin of 65.4%, while emphasizing full-price selling and growth in its own direct channels. That is a company-wide figure, not a LightSpray margin, and gross profit still has to cover research, stores, marketing and other operating costs. This is not a robot replacing a sewing machine to sell the same thing for less. On is trying to make a distinctive product and give customers a reason to pay for it.',
        ],
      },
      {
        heading: 'Back to the customer',
        paragraphs: [
          'I bought Cloud 6 shoes, then chose the waterproof version for my Japan trip. That is a far more ordinary decision than watching a robot spray a shoe, but it is the decision the business eventually has to win. LightSpray has to earn its place through what someone actually wants to wear, and a manufacturing video cannot answer that for every foot or every run.',
          'What I find most interesting is how On approached the problem. It did not just automate the old sequence. It designed a different upper around a different production method, then started building the system to repeat it. The robot makes a great opening shot. The real story is what happens when that shot has to become thousands of reliable products.',
          'Would the way a shoe is made influence your next purchase?',
        ],
      },
    ],
    takeaways: [
      'On says LightSpray sprays a one-piece upper from a continuous filament in around three minutes. That covers the upper, not the whole shoe made from raw materials.',
      'The idea came from a video of a hot glue gun making Halloween spiderwebs. On says it took four years and about 20 people to reach product maturity.',
      'On opened a four-robot LightSpray factory in Zurich in July 2025 and announced a 32-robot facility near Busan in February 2026, targeting a 30-fold capacity increase in 2026. That is capacity, not sales.',
      'On reported a 65.4% group gross margin in Q2 2026. It is a company-wide figure, not a LightSpray margin, and On has not disclosed LightSpray factory economics.',
      'On’s 2029 ambition of at least CHF 5.6 billion in net sales, approaching $7 billion, is a company-wide target, not LightSpray revenue.',
    ],
    chapters: [
      { time: '0:00', label: 'A shoe sprayed into existence' },
      { time: '0:56', label: 'The Halloween experiment' },
      { time: '1:42', label: 'The factory is the next invention' },
      { time: '2:49', label: 'Faster does not automatically mean cheaper' },
      { time: '3:48', label: 'Back to the customer' },
    ],
    sources: [
      {
        label: 'On unveils LightSpray upper technology (On press release)',
        date: 'July 15, 2024',
        href: 'https://press.on-running.com/swiss-sportswear-brand-on-unveils-lightspray-a-new-high-performance-upper-technology-crafted-by-a-revolutionary-single-step-manufacturing-process-rvo865',
      },
      {
        label: 'On opens LightSpray production facility in Zurich (On press release)',
        date: 'July 3, 2025',
        href: 'https://press.on-running.com/on-opens-the-worlds-first-lightspray-production-facility-in-zurich',
      },
      {
        label: 'On scales LightSpray with new South Korea factory (On press release)',
        date: 'February 25, 2026',
        href: 'https://press.on-running.com/-1wgx4h',
      },
      {
        label: 'On unveils strategy and 2029 financial targets (On press release)',
        date: 'September 22, 2026',
        href: 'https://press.on-running.com/on-enters-next-chapter-unveils-strategy-to-redefine-what-a-sportswear-brand-can-be-alongside-2029-financial-targets',
      },
      {
        label: 'On reports results for the second quarter 2026',
        date: 'August 11, 2026',
        href: 'https://s21.q4cdn.com/241001792/files/doc_financials/2026/q2/2026-08-11_On-Reports-Results-for-the-Second-Quarter-1.pdf',
      },
      {
        label: 'The On Cloud evolution continues with the Cloud 6 (On press release)',
        date: 'March 12, 2025',
        href: 'https://press.on-running.com/the-on-cloud-evolution-continues-with-the-cloud-6',
      },
    ],
    sourcesNote:
      'The sources cited in the video. The approaching $7 billion figure is On’s own USD estimate of its CHF 5.6 billion 2029 net sales ambition at September 2026 exchange rates. The 30-fold figure is stated capacity, not realized sales. The 65.4% figure is On Group’s Q2 2026 gross margin, not a LightSpray product margin or net profit.',
    related: [
      {
        href: '/blog/ai-wont-fix-broken-work',
        title: 'AI Won’t Fix Broken Work',
        note: 'On redesigned the product around the process instead of automating the old sequence.',
      },
      {
        href: '/blog/kroger-ecommerce-operating-model',
        title: 'Kroger’s Ecommerce Reset Is Becoming an Operating Model',
        note: 'Owning capabilities and running them as one repeatable system are different achievements.',
      },
      {
        href: '/blog/noibu-ai-agents-closed-loop-ecommerce',
        title: 'AI Gets Interesting When It Has to Prove the Change Worked',
        note: 'A faster process matters only if the result shows up in the business.',
      },
    ],
    credits:
      'Written by Robert Hu; narration uses an authorized AI clone of his voice. Official footage and product photography courtesy of On, and Busan factory footage by SeongYoun Vhae / On, used for independent editorial reporting from On’s press resources. The Cloud 6 image is illustrative of the model, not a photograph of Robert’s own pair, and historical prototype details are attributed to On. The thumbnail is edited illustrative artwork derived from an official On robot photograph. Added sound design is not a recording of On’s machinery. Independent commentary; no endorsement implied. Music and sound credits are listed in the YouTube description.',
    feature: {
      eyebrow: 'Featured Video',
      title: 'Why On Is Spraying Its Running Shoes',
      description:
        'A Halloween decoration helped inspire a new way to make a running shoe. Follow On’s LightSpray from a glue-gun experiment to robot factories, and the economics still undisclosed.',
      cta: 'Watch the video',
    },
  },
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
    slug: 'softbank-abb-robotics-acquisition',
    youtubeId: 'yRjoUPE7f3E',
    youtubeTitle: "SoftBank's $5.4 Billion Robot Bet: Why Is ABB Selling?",
    h1: 'SoftBank’s $5.4 Billion Robot Bet: Why Is ABB Selling?',
    seoTitle: 'Why ABB Is Selling Its Robotics Division to SoftBank',
    metaDescription:
      'SoftBank agreed to pay $5.375 billion for ABB Robotics. What the money buys, why AI setup costs matter, and why ABB is betting on data center power instead.',
    dek: 'If AI is about to make robots more valuable, why would ABB sell its robotics business? The answer is in what it costs to get a robot working, and where ABB wants its next dollar.',
    uploadDate: '2026-10-22T16:00:23-07:00',
    duration: 'PT5M7S',
    durationLabel: '5 min 7 sec',
    topic: 'AI in practice',
    subject: 'SoftBank and ABB Robotics',
    thumbnail: '/images/videos/softbank-abb-robotics-acquisition.jpg',
    thumbnailAlt: 'Video thumbnail: an ABB robot arm lifting a bagged garment above a conveyor, under the words ABB Robotics $5.4B Why Sell?',
    sections: [
      {
        paragraphs: [
          'A robot lifts a bag of clothes. A small movement, and a very big business bet. SoftBank agreed to pay $5.375 billion for ABB’s robotics division. If AI is about to make robots more valuable, why would ABB sell?',
          'SoftBank wants a foothold in the physical world. ABB already has one and is choosing where to put its next dollar. The agreement was announced in October 2025. In its third-quarter report on October 20, 2026, ABB still expected completion in the fourth quarter of 2026, so the deal remains pending.',
        ],
      },
      {
        heading: 'What the money buys',
        paragraphs: [
          'The division generated $2.3 billion in revenue in 2024, about 7% of ABB Group revenues, with a workforce of approximately 7,000. It comes with factories, engineering expertise and existing customers. One is a Shanghai factory that opened in 2022 after a $150 million investment, where mobile robots move materials and robotic systems handle tasks such as screwdriving and assembly. Another is Auburn Hills, Michigan, ABB Robotics’ refitted U.S. headquarters and manufacturing facility.',
          'Those details matter. An AI company entering industry has to get its technology into a customer’s operation. Someone has to install the equipment, train the people and keep the system useful. SoftBank is buying a business that already does that work.',
        ],
      },
      {
        heading: 'The cost of adapting robots',
        paragraphs: [
          'A rigid part sitting in the same position is one problem. Apparel in changing bags, orientations and packaging is another. The machine has to work out what it sees and how to handle it, and then the products change again. The business case turns on two questions: how much work does it take to get a robot ready, and how much more will the next change require?',
        ],
      },
      {
        heading: 'ABB’s AI Robot Trainer',
        paragraphs: [
          'In October 2026, ABB added AI Robot Trainer to its Fashion Inductor application. Operators work with training images, monitor performance and retrain the system as requirements change. ABB says the approach can reduce engineering and commissioning effort, the work of getting a system ready to run, by up to 75% in that fashion logistics application.',
          'That is a manufacturer’s claim about one application. It is not a 75% cut in a customer’s total costs, and it does not say when the investment pays back. For a buyer, the questions are practical: how much setup time is actually saved, how often a person intervenes and what happens when new packaging arrives. The same claim comes up in the documentary on [why AI that works does not always make a business more money](/videos/ai-business-roi-payback).',
        ],
      },
      {
        heading: 'NVIDIA and simulation',
        paragraphs: [
          'ABB is also integrating NVIDIA simulation technology into RobotStudio HyperReality, announced in March 2026. Engineers can build virtual workcells and generate training data before deploying to physical equipment, testing more situations before asking a real machine to do the job.',
          'Lighting, surfaces, materials and movement all have to translate into the actual workspace, and a virtual success still needs validation on the floor. For a manufacturer, the useful result would be less disruption while bringing a process online.',
        ],
      },
      {
        heading: 'Why ABB would sell',
        paragraphs: [
          'ABB says there are limited business and technology synergies between robotics and the rest of the company, which have different demand and market characteristics. It had already planned to spin the division off as a separately listed company before SoftBank’s offer replaced that plan. Selling a promising division can still make sense if the money and management attention have better uses elsewhere.',
          'ABB’s AI exposure continues through the infrastructure that powers data centers. In September 2026, it introduced Infinitus, a direct current power portfolio for AI data centers, with some of the equipment still to come to market. In its October 20 results, ABB reported a triple-digit increase in data center orders. ABB can pursue AI spending through power infrastructure while SoftBank pursues machines that perform work.',
        ],
      },
      {
        heading: 'What SoftBank needs to prove',
        paragraphs: [
          'For SoftBank, the attraction is the combination of AI investment, industrial equipment and a route into customers’ operations. The hard part is making that combination earn more than the pieces would separately. A better model has to survive real product changes, a useful robot has to be supportable, and an easier installation has to produce enough value for the customer to order the next one.',
          'If AI cuts the work needed to deploy and adapt these machines, the opportunity could extend across more applications. If that work stays expensive, the ambition runs into the same operational limits.',
        ],
      },
      {
        heading: 'Beyond the demo',
        paragraphs: [
          'So watch what happens after the demonstration: repeat orders, reliable operation and the cost of adapting to change. That is where a $5 billion bet becomes a business.',
          'Would you rather own the robots doing the work or the power infrastructure behind AI?',
        ],
      },
    ],
    takeaways: [
      'SoftBank agreed to buy ABB Robotics for an enterprise value of $5.375 billion. As of October 20, 2026, ABB expected closing in the fourth quarter of 2026.',
      'The division had $2.3 billion in 2024 revenue and about 7,000 employees, with factories including a $150 million Shanghai site and Auburn Hills, Michigan.',
      'ABB says AI Robot Trainer can cut engineering and commissioning effort by up to 75% in its fashion logistics application. That is not a total-cost reduction or a proven payback.',
      'ABB cites limited synergies between robotics and its other businesses, and had planned a spin-off before SoftBank’s offer.',
      'ABB keeps AI exposure through data center power: Infinitus launched in September 2026, and data center orders grew at a triple-digit rate in the third quarter.',
    ],
    chapters: [
      { time: '0:00', label: 'A small movement, a $5.375 billion bet' },
      { time: '0:36', label: 'What the money buys' },
      { time: '1:01', label: 'Auburn Hills: robotics manufacturing in the U.S.' },
      { time: '1:21', label: 'The cost of adapting robots' },
      { time: '1:44', label: 'ABB’s AI Robot Trainer' },
      { time: '2:36', label: 'NVIDIA and simulation' },
      { time: '3:19', label: 'Why ABB would sell' },
      { time: '4:07', label: 'What SoftBank needs to prove' },
      { time: '4:54', label: 'Beyond the demo' },
    ],
    sources: [
      {
        label: 'ABB to divest Robotics division to SoftBank Group (ABB)',
        date: 'October 8, 2025',
        href: 'https://new.abb.com/news/detail/129776/abb-to-divest-robotics-division-to-softbank-group',
      },
      {
        label: 'Acquisition of ABB Ltd’s Robotics Business (SoftBank Group)',
        date: 'October 8, 2025',
        href: 'https://group.softbank/en/news/press/20251008',
      },
      {
        label: 'ABB Q3 2026 results (ABB, PDF)',
        date: 'October 20, 2026',
        href: 'https://search.abb.com/library/Download.aspx?DocumentID=9AKK108473A4462&LanguageCode=en&DocumentPartId=&Action=Launch',
      },
      {
        label: 'ABB opens state-of-the-art robotics mega factory in Shanghai (ABB)',
        date: 'December 2, 2022',
        href: 'https://www.abb.com/global/en/news/97670/abb-opens-state-of-the-art-robotics-mega-factory-in-shanghai',
        note: 'The link in the YouTube description no longer loads; this is the same release on ABB’s current site.',
      },
      {
        label: 'ABB opens refitted, state-of-the-art US robotics facility (ABB)',
        date: 'March 13, 2024',
        href: 'https://new.abb.com/news/detail/113579/abb-opens-refitted-state-of-the-art-us-robotics-facility-reaffirming-commitment-to-us-customers',
      },
      {
        label: 'ABB Robotics brings industrial-grade physical AI to fashion logistics',
        date: 'October 15, 2026',
        href: 'https://www.abb.com/global/en/news/139480/prsrl-abb-robotics-brings-industrial-grade-physical-ai-to-fashion-logistics',
      },
      {
        label: 'ABB Robotics partners with NVIDIA to deliver industrial-grade physical AI at scale',
        date: 'March 9, 2026',
        href: 'https://www.abb.com/global/en/news/134030/prsrl-abb-robotics-partners-with-nvidia-to-deliver-industrial-grade-physical-ai-at-scale',
      },
      {
        label: 'ABB’s new direct current portfolio aims to rewire AI data center energy infrastructure',
        date: 'September 21, 2026',
        href: 'https://www.abb.com/global/en/news/138900/abbs-new-direct-current-portfolio-aims-to-rewire-ai-data-center-energy-infrastructure',
      },
    ],
    sourcesNote:
      'The sources cited in the video. The $5.375 billion is the agreed enterprise value, rounded to $5.4 billion in the title, and the deal had not closed as of ABB’s October 20, 2026 report. The up to 75% figure is ABB’s claim for one application, not a verified reduction in customer costs or a proven payback.',
    related: [
      {
        href: '/blog/noibu-ai-agents-closed-loop-ecommerce',
        title: 'AI Gets Interesting When It Has to Prove the Change Worked',
        note: 'Proving the change worked, not the demo, decides the next order.',
      },
      {
        href: '/blog/ai-wont-fix-broken-work',
        title: 'AI Won’t Fix Broken Work',
        note: 'Automation pays only when the work around it changes too.',
      },
    ],
    credits:
      'Written by Robert Hu; narration uses his authorized AI voice clone. ABB Robotics footage © ABB or its licensors, used in independent editorial reporting under ABB’s published editorial exception; archive, manufacturer demonstrations, simulation and the Infinitus concept illustration are labeled on screen. Mechanical sound effects are added sound design, not recordings of the machines shown. The map uses public-domain Natural Earth boundaries. The thumbnail is an AI-assisted illustrative cover based on the opening apparel-handling demonstration, not a photograph of an acquisition event. Company logos identify the subjects of this independent report; no sponsorship or endorsement implied. Music credits are listed in the YouTube description.',
    feature: {
      eyebrow: 'Featured Video',
      title: 'SoftBank’s $5.4 Billion Robot Bet: Why Is ABB Selling?',
      description:
        'SoftBank agreed to pay $5.375 billion for ABB Robotics. Follow what the money buys, what it costs to get a robot working, and why ABB is putting its next dollar into power.',
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
export const FEATURED_VIDEO_SLUG: string | null = 'boston-dynamics-atlas-humanoid-twist'

export function getVideo(slug: string): VideoEntry | undefined {
  return VIDEOS.find((v) => v.slug === slug)
}

/**
 * Blog post slug -> companion page slugs, shown as "Related documentary" cards
 * after the article. Hand-picked, usually one per post, and only where the
 * documentary genuinely extends the article's argument. Most posts get none.
 */
export const POST_VIDEOS: Record<string, string[]> = {
  'kroger-ecommerce-operating-model': ['walmart-jet-acquisition'],
  'walmart-people-led-tech-powered-operating-model': ['walmart-jet-acquisition'],
  'albertsons-ai-planning-task-depth': ['ikea-billie-ai-reskilling'],
  'ai-wont-fix-broken-work': ['dominos-turnaround', 'on-lightspray-running-shoe-manufacturing'],
  'noibu-ai-agents-closed-loop-ecommerce': ['ai-business-roi-payback'],
  'uber-chatgpt-work-enterprise-ai-adoption': ['ai-business-roi-payback'],
  'ai-checkout-interface-commerce-infrastructure': ['fedex-overnight-delivery-promise'],
  'retailers-ai-traffic-customer-ownership': ['royal-caribbean-sandals-vacation-strategy'],
  'walmart-sparky-ai-personalization-pricing-governance': ['chatgpt-workout-plan-trust'],
  'anthropic-project-swap-agentic-commerce-shopper-preferences': ['chatgpt-workout-plan-trust'],
  'doordash-instacart-physical-layer-ai-commerce': ['doordash-instacart-acquisition'],
}

export function videosForPost(postSlug: string): VideoEntry[] {
  return (POST_VIDEOS[postSlug] ?? []).flatMap((slug) => getVideo(slug) ?? [])
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
  { youtubeId: 'YTNVhHycUgg', title: 'Getting Onto the Box Is Only Half the Trick', uploadDate: '2026-11-10T17:00:33-08:00', durationLabel: '0:34', thumbnail: '/images/shorts/YTNVhHycUgg.jpg', related: ['boston-dynamics-atlas-humanoid-twist'] },
  { youtubeId: '8erxzgpG_3w', title: 'AI Tied These Desk Brands on Mentions. Only One Ranked First.', uploadDate: '2026-11-10T15:11:01-08:00', durationLabel: '0:45', thumbnail: '/images/shorts/8erxzgpG_3w.jpg' },
  { youtubeId: 'ZukmqALUgLs', title: 'Watch Where BMW’s Humanoid Puts the Metal', uploadDate: '2026-11-10T09:00:27-08:00', durationLabel: '0:35', thumbnail: '/images/shorts/ZukmqALUgLs.jpg', related: ['boston-dynamics-atlas-humanoid-twist'] },
  { youtubeId: 'vVVJX8tayUE', title: 'This Robot Vacuum Unfolds an Arm', uploadDate: '2026-11-09T17:00:29-08:00', durationLabel: '0:29', thumbnail: '/images/shorts/vVVJX8tayUE.jpg', related: ['1x-neo-home-robot-human-backup'] },
  { youtubeId: 'K9JnWETbmVw', title: 'Most Mentioned. But Read the Context. | AI Protein Powder Benchmark', uploadDate: '2026-11-09T13:45:20-08:00', durationLabel: '0:55', thumbnail: '/images/shorts/K9JnWETbmVw.jpg' },
  { youtubeId: 'jDWHodtvxkw', title: 'This Home Robot Has a Human Backup', uploadDate: '2026-11-09T09:00:13-08:00', durationLabel: '0:30', thumbnail: '/images/shorts/jDWHodtvxkw.jpg', related: ['1x-neo-home-robot-human-backup'] },
  { youtubeId: '26owiRnjwQY', title: 'This Robot’s Hand Is Made of Suction Cups', uploadDate: '2026-11-08T17:00:19-08:00', durationLabel: '0:38', thumbnail: '/images/shorts/26owiRnjwQY.jpg', related: ['dhl-stretch-robot-warehouse-handoff'] },
  { youtubeId: 'tqyCURWJ8II', title: 'DHL’s Robot Moves the Box. What Happens Next?', uploadDate: '2026-11-08T10:00:32-08:00', durationLabel: '0:45', thumbnail: '/images/shorts/tqyCURWJ8II.jpg', related: ['dhl-stretch-robot-warehouse-handoff'] },
  { youtubeId: 'KPvBegiLBUM', title: 'Apple Made the Top 3 in All Four AI Rankings. Never First.', uploadDate: '2026-11-08T07:00:55-08:00', durationLabel: '0:47', thumbnail: '/images/shorts/KPvBegiLBUM.jpg' },
  { youtubeId: '8iFZfW9N_pI', title: 'Why Duolingo Is Moving AI Calls Beyond Its Top Tier', uploadDate: '2026-11-07T18:00:05-08:00', durationLabel: '0:57', thumbnail: '/images/shorts/8iFZfW9N_pI.jpg', related: ['duolingo-streak-revival-comeback'] },
  { youtubeId: 'jRSIZ4NMo9M', title: 'AI Ranked Roborock First. The Models Still Split.', uploadDate: '2026-11-07T12:11:29-08:00', durationLabel: '0:59', thumbnail: '/images/shorts/jRSIZ4NMo9M.jpg' },
  { youtubeId: 'VzL2gPE2jsg', title: 'Duolingo’s Streak Comeback Had One Catch: 3 Lessons', uploadDate: '2026-11-07T10:00:20-08:00', durationLabel: '0:54', thumbnail: '/images/shorts/VzL2gPE2jsg.jpg', related: ['duolingo-streak-revival-comeback'] },
  { youtubeId: 'O9lxTgawfvQ', title: 'Spotify’s Monday Playlist Passed 100 Billion Plays', uploadDate: '2026-11-06T18:00:03-08:00', durationLabel: '0:56', thumbnail: '/images/shorts/O9lxTgawfvQ.jpg', related: ['spotify-taste-profile-recommendations'] },
  { youtubeId: 'kOQpEoSL6hk', title: 'AI Mentioned Brooks Every Time. First Place Was Split.', uploadDate: '2026-11-06T16:06:27-08:00', durationLabel: '0:49', thumbnail: '/images/shorts/kOQpEoSL6hk.jpg' },
  { youtubeId: 'LyuNlrC8IHk', title: 'Spotify Got Your Taste Wrong? Tell It.', uploadDate: '2026-11-06T10:00:38-08:00', durationLabel: '0:54', thumbnail: '/images/shorts/LyuNlrC8IHk.jpg', related: ['spotify-taste-profile-recommendations'] },
  { youtubeId: '1_zXLV4q8s8', title: 'Starbucks’ $500,000,000 Bet Was on People', uploadDate: '2026-11-05T17:00:24-08:00', durationLabel: '0:55', thumbnail: '/images/shorts/1_zXLV4q8s8.jpg', related: ['starbucks-smart-queue-staffing-investment'] },
  { youtubeId: 'BRly024dFAw', title: 'AI Mentioned Branch Most. Steelcase Ranked First.', uploadDate: '2026-11-05T16:19:55-08:00', durationLabel: '0:50', thumbnail: '/images/shorts/BRly024dFAw.jpg' },
  { youtubeId: 'L4JWyZPWrBc', title: 'The Starbucks Line You Can’t See', uploadDate: '2026-11-05T09:00:28-08:00', durationLabel: '0:50', thumbnail: '/images/shorts/L4JWyZPWrBc.jpg', related: ['starbucks-smart-queue-staffing-investment'] },
  { youtubeId: 'ekOpbJLPIoU', title: 'LEGO’s $400,000,000 Packing Bet', uploadDate: '2026-11-04T17:00:17-08:00', durationLabel: '0:55', thumbnail: '/images/shorts/ekOpbJLPIoU.jpg', related: ['lego-monterrey-packing-investment'] },
  { youtubeId: 'SmOjhALD8JU', title: 'Four AIs Ranked Purina Pro Plan First. Then Came the $70 Prompt.', uploadDate: '2026-11-04T16:37:40-08:00', durationLabel: '0:53', thumbnail: '/images/shorts/SmOjhALD8JU.jpg' },
  { youtubeId: 'XpcMZYYE54c', title: 'A LEGO Brick From 1958 Still Fits?', uploadDate: '2026-11-04T09:00:08-08:00', durationLabel: '0:52', thumbnail: '/images/shorts/XpcMZYYE54c.jpg', related: ['lego-monterrey-packing-investment'] },
  { youtubeId: 'TjPeCbhDH8w', title: 'This Amazon Robot Is Fast. What Happens Next?', uploadDate: '2026-11-03T17:00:11-08:00', durationLabel: '0:47', thumbnail: '/images/shorts/TjPeCbhDH8w.jpg', related: ['amazon-robots-deepfleet-warehouse-traffic'] },
  { youtubeId: 'vpBgv9i2F-I', title: 'Why More Robots Can Make a Warehouse Slower', uploadDate: '2026-11-03T09:00:24-08:00', durationLabel: '0:56', thumbnail: '/images/shorts/vpBgv9i2F-I.jpg', related: ['amazon-robots-deepfleet-warehouse-traffic'] },
  { youtubeId: 'cwpqS-oSa3k', title: 'Why ALDI Skips the Pharmacy', uploadDate: '2026-11-02T17:00:23-08:00', durationLabel: '0:53', thumbnail: '/images/shorts/cwpqS-oSa3k.jpg', related: ['aldi-quarter-cart-business-model'] },
  { youtubeId: 'fLn888FJHxY', title: 'Four AIs Ranked Breville First. Then Came the $500 Budget.', uploadDate: '2026-11-02T16:02:39-08:00', durationLabel: '0:57', thumbnail: '/images/shorts/fLn888FJHxY.jpg' },
  { youtubeId: 'e2TFIeTTUxk', title: 'Why ALDI Gives Your Quarter Back', uploadDate: '2026-11-02T09:00:23-08:00', durationLabel: '0:57', thumbnail: '/images/shorts/e2TFIeTTUxk.jpg', related: ['aldi-quarter-cart-business-model'] },
  { youtubeId: 'vtWtIyGPZtg', title: "Why Costco's Giant Stores Sell So Few Choices", uploadDate: '2026-11-01T17:00:39-08:00', durationLabel: '0:53', thumbnail: '/images/shorts/vtWtIyGPZtg.jpg', related: ['costco-membership-fee-hot-dog'] },
  { youtubeId: 'Sfvu4OZ6_8c', title: 'Costco Kept $1.50. The Other Price Changed.', uploadDate: '2026-11-01T09:00:28-08:00', durationLabel: '0:59', thumbnail: '/images/shorts/Sfvu4OZ6_8c.jpg', related: ['costco-membership-fee-hot-dog'] },
  { youtubeId: 'bYDzy0dzT3s', title: 'AI Ranked EltaMD First. Then the Budget Answers Left It Out.', uploadDate: '2026-11-01T06:49:58-08:00', durationLabel: '0:53', thumbnail: '/images/shorts/bYDzy0dzT3s.jpg' },
  { youtubeId: 'rTDa7c-5e8c', title: 'Why Hershey Wants Halloween to Start in July', uploadDate: '2026-10-31T17:00:08-07:00', durationLabel: '0:53', thumbnail: '/images/shorts/rTDa7c-5e8c.jpg', related: ['hershey-cocoa-halloween-candy-prices'] },
  { youtubeId: 's3KHQuZXSvI', title: 'AI Mentioned Levoit Every Time. Coway Ranked First More Often.', uploadDate: '2026-10-31T12:59:30-07:00', durationLabel: '0:50', thumbnail: '/images/shorts/s3KHQuZXSvI.jpg' },
  { youtubeId: 'tk2OiRW6wBM', title: "Cocoa Got Cheaper. Why Didn't Your Chocolate?", uploadDate: '2026-10-31T09:00:24-07:00', durationLabel: '0:49', thumbnail: '/images/shorts/tk2OiRW6wBM.jpg', related: ['hershey-cocoa-halloween-candy-prices'] },
  { youtubeId: 'bOJmCrpOqTY', title: 'Why Spirit Halloween Closes Its Stores on Purpose', uploadDate: '2026-10-30T17:00:12-07:00', durationLabel: '0:55', thumbnail: '/images/shorts/bOJmCrpOqTY.jpg', related: ['spirit-halloween-seasonal-stores'] },
  { youtubeId: 'fziqEXtW4uk', title: 'Why Spirit Halloween Loves Dead Stores', uploadDate: '2026-10-30T09:00:14-07:00', durationLabel: '0:53', thumbnail: '/images/shorts/fziqEXtW4uk.jpg', related: ['spirit-halloween-seasonal-stores'] },
  { youtubeId: 'adN5PGp_IQw', title: 'AI Mentioned CeraVe Most. First Place Still Split.', uploadDate: '2026-10-30T07:15:47-07:00', durationLabel: '0:50', thumbnail: '/images/shorts/adN5PGp_IQw.jpg' },
  { youtubeId: '7sQ3OuD--jM', title: 'DoorDash’s $500M Promise Has a Catch', uploadDate: '2026-10-29T17:00:28-07:00', durationLabel: '0:56', thumbnail: '/images/shorts/7sQ3OuD--jM.jpg', related: ['doordash-instacart-acquisition'] },
  { youtubeId: 'yuemBuR_8_o', title: 'AI Can Plan Dinner. Who Picks the Avocado?', uploadDate: '2026-10-29T15:00:29-07:00', durationLabel: '0:51', thumbnail: '/images/shorts/yuemBuR_8_o.jpg', related: ['doordash-instacart-acquisition'] },
  { youtubeId: 'MyHSRv9C6eM', title: 'Walmart Wants AI to Shop. I Still Want the Final Say.', uploadDate: '2026-10-29T09:00:10-07:00', durationLabel: '0:49', thumbnail: '/images/shorts/MyHSRv9C6eM.jpg' },
  { youtubeId: 'oXfBcLFbtuA', title: 'Two Brands Appeared in Every AI Answer. Only One Ranked First.', uploadDate: '2026-10-29T06:09:59-07:00', durationLabel: '0:57', thumbnail: '/images/shorts/oXfBcLFbtuA.jpg' },
  { youtubeId: 'PQ9fwkLRdEI', title: 'CERN Wants AI to Learn From Billions of Particle Collisions', uploadDate: '2026-10-28T17:00:14-07:00', durationLabel: '0:59', thumbnail: '/images/shorts/PQ9fwkLRdEI.jpg' },
  { youtubeId: 'VFlJNXBNcL4', title: 'AI Mentioned This Brand Most. Was It the First Choice?', uploadDate: '2026-10-28T16:00:41-07:00', durationLabel: '0:56', thumbnail: '/images/shorts/VFlJNXBNcL4.jpg' },
  { youtubeId: '5SHmdIxl9OM', title: 'An AI Lost a Ring. Then It Built a Memorial.', uploadDate: '2026-10-28T09:00:05-07:00', durationLabel: '0:57', thumbnail: '/images/shorts/5SHmdIxl9OM.jpg' },
  { youtubeId: 'GpnmmEujiUk', title: 'Why McDonald’s Is Showing You Car Insurance', uploadDate: '2026-10-27T17:00:37-07:00', durationLabel: '0:55', thumbnail: '/images/shorts/GpnmmEujiUk.jpg' },
  { youtubeId: 'Lh1MZx7F9o8', title: 'This Running Shoe Started With a Glue Gun', uploadDate: '2026-10-27T09:00:02-07:00', durationLabel: '0:52', thumbnail: '/images/shorts/Lh1MZx7F9o8.jpg', related: ['on-lightspray-running-shoe-manufacturing'] },
  { youtubeId: 'gGjWbdE90fU', title: 'IBM Wants AI to Spot Fraud Before Your Money Leaves', uploadDate: '2026-10-26T17:00:22-07:00', durationLabel: '0:51', thumbnail: '/images/shorts/gGjWbdE90fU.jpg' },
  { youtubeId: 'O-eEMtETYxQ', title: 'This Flying Robot Weighs Less Than a Gram. Battery Included.', uploadDate: '2026-10-26T09:00:20-07:00', durationLabel: '0:51', thumbnail: '/images/shorts/O-eEMtETYxQ.jpg' },
  { youtubeId: 'RbEGpMcUQag', title: 'Why Intel Asked Washington for a Robot Exception', uploadDate: '2026-10-25T17:00:26-07:00', durationLabel: '0:58', thumbnail: '/images/shorts/RbEGpMcUQag.jpg', related: ['intel-chip-manufacturing'] },
  { youtubeId: 'CCZVT8yf0mE', title: 'This Tiny Robot Has Muscles Grown From Mouse Cells', uploadDate: '2026-10-25T09:00:05-07:00', durationLabel: '0:54', thumbnail: '/images/shorts/CCZVT8yf0mE.jpg' },
  { youtubeId: 'BqoMSfQ5laY', title: 'This Robot Gets Hired for One Thing: Your Attention', uploadDate: '2026-10-24T17:00:28-07:00', durationLabel: '0:54', thumbnail: '/images/shorts/BqoMSfQ5laY.jpg' },
  { youtubeId: 'lSq4QLsbP0w', title: "Alabama's AI Play: Shorter Lines, More Football", uploadDate: '2026-10-24T10:59:06-07:00', durationLabel: '0:50', thumbnail: '/images/shorts/lSq4QLsbP0w.jpg' },
  { youtubeId: 'm_RQj5lvi0Y', title: 'Before AI Can Work, Someone Has to Deliver This', uploadDate: '2026-10-24T09:00:18-07:00', durationLabel: '0:55', thumbnail: '/images/shorts/m_RQj5lvi0Y.jpg' },
  { youtubeId: 'Z8-efcDaMXc', title: "This Robot Has Laptop DNA. Here's Why.", uploadDate: '2026-10-23T16:00:00-07:00', durationLabel: '0:55', thumbnail: '/images/shorts/Z8-efcDaMXc.jpg' },
  { youtubeId: 'q4zsspHfZLQ', title: 'Muse vs Dot vs Grok Bot: Which AI Saves You Work?', uploadDate: '2026-10-23T14:00:23-07:00', durationLabel: '0:58', thumbnail: '/images/shorts/q4zsspHfZLQ.jpg' },
  { youtubeId: 'Xu7qe2-ulyM', title: 'Why Picking Up Clothes Is So Hard for Robots', uploadDate: '2026-10-22T18:00:15-07:00', durationLabel: '0:49', thumbnail: '/images/shorts/Xu7qe2-ulyM.jpg', related: ['ai-business-roi-payback', 'softbank-abb-robotics-acquisition'] },
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
