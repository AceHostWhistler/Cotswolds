export type BlogSection =
  | { type: 'paragraph'; content: string }
  | { type: 'heading'; content: string }
  | { type: 'image'; src: string; alt: string; caption?: string }
  | { type: 'list'; items: string[] }
  | { type: 'quote'; content: string };

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  keywords: string;
  publishedAt: string;
  readTimeMinutes: number;
  heroImage: string;
  ogImage: string;
  sections: BlogSection[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'dcp-screening-rental-vancouver-reel-room',
    title: 'Why The Reel Room Is Vancouver\u2019s Go-To DCP Screening Rental',
    excerpt:
      'From locked KDM playback to cast-and-crew premieres, here is why filmmakers rent our Mount Pleasant screen room when picture and sound have to read true.',
    description:
      'Rent a DCP-capable private screening room in Vancouver. The Reel Room in Mount Pleasant offers reference-grade projection, professional sound, and lounge hospitality for premieres, QC passes, and distributor-ready playback.',
    keywords:
      'DCP screening Vancouver, DCP rental Vancouver, private cinema DCP, film premiere venue Vancouver, KDM screening room, Mount Pleasant screening rental, Reel Room DCP',
    publishedAt: '2026-07-31',
    readTimeMinutes: 6,
    heroImage: '/photos/originals/homepage/DSC03125-Enhanced-NR.jpg',
    ogImage: '/photos/optimized/DSC03125-Enhanced-NR-1280.jpg',
    sections: [
      {
        type: 'paragraph',
        content:
          'A DCP is not a file you casually double-click on a laptop. It is the delivery format distributors, festivals, and finishing teams expect when they say they want to see your film on a screen—not in a grading suite, not on a TV in a boardroom. When playback has to match what audiences will see in theatres, you need a room built for it.',
      },
      {
        type: 'paragraph',
        content:
          'The Reel Room is a private screening and production studio in Mount Pleasant, minutes from downtown Vancouver. We rent the full facility—cinema-scale screen room, reference audio path, and lounge—for DCP screenings, premiere runs, technical QC, and client-facing playbacks. This is a working screening facility first: playback stays the priority, not banquet-hall programming.',
      },
      {
        type: 'image',
        src: '/photos/originals/homepage/DSC03125-Enhanced-NR.jpg',
        alt: 'Private screening room at The Reel Room Vancouver with cinema-scale projection',
        caption: 'The screen room is purpose-built for critical viewing—not a repurposed event hall.',
      },
      {
        type: 'heading',
        content: 'What a DCP screening actually demands',
      },
      {
        type: 'paragraph',
        content:
          'Digital Cinema Package playback requires more than a bright projector and a HDMI cable. You need stable server or IMF workflow support, correct colour space and luminance, sync between picture and surround beds, and a room where creatives can trust what they are seeing. That is especially true for:',
      },
      {
        type: 'list',
        items: [
          'Cast, crew, and investor premieres before festival or theatrical release',
          'Distributor and sales-agent screenings with controlled guest lists',
          'Final QC and sign-off passes after the online',
          'KDM-locked previews when time windows and security matter',
          'Comparing DCP against ProRes or IMF references in the same room',
        ],
      },
      {
        type: 'paragraph',
        content:
          'We configure the room around your technical brief. DCP playback is available upon request—tell us your package type, frame rate, and audio layout when you inquire so we can confirm compatibility before you hold dates.',
      },
      {
        type: 'heading',
        content: 'Why rent The Reel Room instead of a generic event space',
      },
      {
        type: 'image',
        src: '/photos/originals/homepage/DSC03066-Enhanced-NR.jpg',
        alt: 'Film premiere and DCP screening setup at The Reel Room',
        caption: 'Present your locked cut the way it was meant to be seen—for cast, crew, investors, and press.',
      },
      {
        type: 'paragraph',
        content:
          'Many Vancouver venues can hang a sheet and play a file. Few are set up for filmmakers who need reference-grade image and audio in a controlled environment. The Reel Room difference:',
      },
      {
        type: 'list',
        items: [
          'Cinema-scale projection and sound tuned for critical viewing—not background playback at a party',
          'Private facility buyout: your run-of-show, your guest list, your schedule',
          'Secondary lounge feed for overflow, hospitality, or separate review areas',
          'On-site coordination so technical prep and room turnover stay on track',
          'Mount Pleasant location with straightforward access for crews coming from Gastown, Burnaby, or the studios',
        ],
      },
      {
        type: 'quote',
        content:
          'DCP available upon request. We will confirm format, KDM windows, and audio layout before you lock your rental block.',
      },
      {
        type: 'heading',
        content: 'Who books DCP screenings here',
      },
      {
        type: 'paragraph',
        content:
          'Independent features, documentary teams, post houses, agencies, and in-house studio groups rent the room when a laptop-and-projector setup will not cut it. Typical bookings include premiere nights for cast and crew, distributor review sessions, agency client approvals on a theatrical scale, and festival submission check passes before delivery.',
      },
      {
        type: 'image',
        src: '/photos/originals/homepage/DSC03060-Enhanced-NR.jpg',
        alt: 'Lounge and bar area at The Reel Room for premiere hospitality',
        caption: 'The lounge supports hospitality and secondary viewing—scoped to your screening, not a preset party package.',
      },
      {
        type: 'heading',
        content: 'How booking works',
      },
      {
        type: 'paragraph',
        content:
          'Studio rentals run in four-hour blocks from $2,300, with additional hours available. Email info@reelroom.ca with your dates, headcount, and DCP specs—or book directly online if you are ready to hold time. We reply within one to two business days with availability and next steps.',
      },
      {
        type: 'paragraph',
        content:
          'If you are finishing a film in Vancouver and need a room where DCP playback is taken seriously, The Reel Room is built for exactly that. Your premiere. Your crew. Your room.',
      },
    ],
  },
  {
    slug: 'reference-playback-private-screening-room-vancouver',
    title: 'Reference Playback at Cinema Scale: A Private Screening Room for Vancouver Productions',
    excerpt:
      'Colour-critical reviews, client approvals, and finishing playbacks deserve more than a monitor wall. Here is how teams use The Reel Room when picture and sound have to land.',
    description:
      'Rent a private screening room in Vancouver for reference playback, client reviews, and finishing sessions. Cinema-scale image and audio in Mount Pleasant for post-production teams and agencies.',
    keywords:
      'reference playback Vancouver, private screening room rental, client review cinema Vancouver, finishing playback studio, post-production screening Mount Pleasant, production studio rental Vancouver',
    publishedAt: '2026-07-31',
    readTimeMinutes: 5,
    heroImage: '/photos/originals/homepage/DSC03110-Enhanced-NR.jpg',
    ogImage: '/photos/optimized/DSC03110-Enhanced-NR-1280.jpg',
    sections: [
      {
        type: 'paragraph',
        content:
          'There is a moment in every finishing schedule when the grade has to leave the suite and survive a big screen. Agency stakeholders want to sign off. The director wants one last pass before delivery. Sound needs to read in a room with real dynamics—not just on nearfields. That is reference playback, and it needs a proper screening environment.',
      },
      {
        type: 'paragraph',
        content:
          'The Reel Room is a private cinema and production studio in Mount Pleasant, Vancouver. Teams rent it for cinema-scale client reviews, QC playbacks, internal sign-offs, and press-screening workflows where image, audio, and hospitality all have to align with a professional brief.',
      },
      {
        type: 'image',
        src: '/photos/originals/homepage/DSC03110-Enhanced-NR.jpg',
        alt: 'Reference playback and client review session at The Reel Room Vancouver',
        caption: 'Finishing-suite energy, cinema-scale picture—built for reviews that actually mean something.',
      },
      {
        type: 'heading',
        content: 'When a grading suite is not enough',
      },
      {
        type: 'paragraph',
        content:
          'Suites are essential for precision work. But clients, executives, and non-technical stakeholders interpret quality on scale. A private screening room bridges that gap without the logistics of a public theatre rental or the compromises of a corporate boardroom:',
      },
      {
        type: 'list',
        items: [
          'Colour and contrast read differently at cinema scale—catch issues before delivery',
          'Surround and LFE playback reveals mix problems a stereo bus will hide',
          'Controlled lighting and seating keep attention on the work, not the venue',
          'Private access means unfinished cuts stay unfinished in the room',
          'Lounge space supports notes sessions, select hospitality, or a secondary feed',
        ],
      },
      {
        type: 'heading',
        content: 'Productions we see in the room',
      },
      {
        type: 'paragraph',
        content:
          'Commercial directors, documentary teams, streaming originals, and agency producers book half-day and full-day blocks for review cycles. Common setups include IMF or ProRes playback for internal QC, split sessions where picture plays in the screen room while stakeholders network in the lounge, and back-to-back client passes during a delivery week.',
      },
      {
        type: 'image',
        src: '/photos/originals/homepage/DSC03167-Enhanced-NR.jpg',
        alt: 'Corporate and brand production screening at The Reel Room Vancouver',
        caption: 'Executive presentations, launch films, and shareholder streams—all with cinema-calibre AV.',
      },
      {
        type: 'quote',
        content:
          'Service style follows your technical brief—not a preset social package. Tell us how you run reviews and we will align the room.',
      },
      {
        type: 'heading',
        content: 'Technical support without the theatre rental headache',
      },
      {
        type: 'paragraph',
        content:
          'Public theatre bookings come with rigid schedules, union rules, and limited flexibility for crew setup. The Reel Room is a dedicated rental facility: you get the screen room, AV path, and lounge on your block, with on-site coordination to help room turnover, guest flow, and playback prep stay smooth.',
      },
      {
        type: 'list',
        items: [
          'Optional DCP audio-visual enhancements ($100/hour) for specialized lighting, sound, and projection add-ons',
          'Capacity from intimate five-person reviews to 120+ guest premieres',
          'Four-hour base rental from $2,300; additional hours at $400/hour',
          'Email info@reelroom.ca for specs, or use our online booking flow to request dates',
        ],
      },
      {
        type: 'image',
        src: '/photos/originals/homepage/DSC03106-Enhanced-NR.jpg',
        alt: 'Lobby and staircase at The Reel Room Mount Pleasant studio',
        caption: 'Minutes from downtown Vancouver—easy for clients flying in for a single review session.',
      },
      {
        type: 'heading',
        content: 'Book a reference playback session',
      },
      {
        type: 'paragraph',
        content:
          'If your next milestone is a client approval, a director sign-off, or a final pass before masters ship, rent a room where playback is the point—not the afterthought. The Reel Room is Mount Pleasant\u2019s private screening facility for teams that take picture and sound seriously.',
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}
