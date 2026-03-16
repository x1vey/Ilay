// ─────────────────────────────────────────────
//  SITE CONTENT — edit everything here
//
//  IMAGES/VIDEO: drop files into public/assets/
//  then update the path string below.
//  External URLs (Cloudinary etc.) work too.
// ─────────────────────────────────────────────

// ── Global ────────────────────────────────────
export const SITE = {
  name:      "Ilay Sales",
  logo:      "/assets/ilay-logo.svg",
  ctaUrl:    "https://calendly.com/ilaykazav/45min",
  copyright: "©2025 Ilay Sales. All rights reserved.",
};

// ── Announcement Bar ──────────────────────────
export const ANNOUNCEMENT = {
  text: "Free Sales Strategy Session — Limited Spots This Month.",
  cta:  "Book now →",
  url:  SITE.ctaUrl,
};

// ── Navbar ────────────────────────────────────
export const NAV_LINKS = [
  { label: "Home",     href: "#" },
  { label: "Training", href: "#training" },
  { label: "Programs", href: "#programs" },
  { label: "Results",  href: "#results" },
  { label: "About",    href: "#story" },
];

export const NAV_CTA = { label: "Apply Now", url: SITE.ctaUrl };

// ── Hero ──────────────────────────────────────
export const HERO = {
  eyebrow:        "Identity-Based Sales System",
  headline:       "Stop Losing Deals.",
  headlineGold:   "2×–3× Your Income",
  headlineSuffix: "as a Coach.",
  subheadline:    "For coaches closing 10–30% who are tired of losing deals. Close confidently, without pressure or endless follow-ups.",
  socialProof: [
    "150+ Coaches Mentored",
    "Avg. 2×–3× Close Rate",
    "Results in 30 Days",
  ],
  primaryCta:   { label: "Book Your Free Strategy Session", url: SITE.ctaUrl },
  secondaryCta: { label: "Watch Free Training →", href: "#training" },
  image:       "/assets/608000702_748907048251344_2890355767283491827_n.jpg",
  imageAlt:    "Ilay Kasav — Sales Mentor",
  quote:       "Sales isn't about convincing — it's about leadership.",
  quoteAuthor: "— Ilay Kasav",
  // ↓ bgVideo: mp4 path/URL for video bg. Set to "" to use bg image instead.
  bgVideo: "/assets/9694807-hd_1920_1080_25fps.mp4",
  // ↓ bg: fallback image shown while video loads (or when bgVideo is "")
  bg:      "/assets/hero-bg.jpg",
};

// ── Video Section ─────────────────────────────
export const VIDEO = {
  heading:    "Watch The Free Training",
  subheading: "Discover the exact Identity-Based Sales System that helps coaches 2×–3× their close rate — without scripts or pressure tactics.",
  // ↓ Supported formats:
  //   Wistia:     "https://fast.wistia.net/embed/iframe/ID?seo=true&videoFoam=true"
  //   YouTube:    "https://www.youtube.com/embed/ID"
  //   Vimeo:      "https://player.vimeo.com/video/ID"
  //   Direct mp4: "https://res.cloudinary.com/YOUR_CLOUD/video/upload/video.mp4"
  embedUrl:   "https://fast.wistia.net/embed/iframe/2261586?seo=true&videoFoam=true",
  embedTitle: "Ilay Sales Training",
  cta:        { label: "Book A 1-On-1 With Ilay →", url: SITE.ctaUrl },
  ctaCaption: "Get A Personalised Breakdown Of Your Sales Process",
};

// ── Why I Built This ──────────────────────────
export const WHY = {
  heading: "Why I Built This",
  body: [
    "Most sales training online is noise — recycled scripts, surface-level tactics, and cookie-cutter frameworks that don't actually work on real sales calls.",
    "I built the Identity-Based Sales System to fix that. Everything I teach comes from real experience: managing sales teams at 17, closing 6-figure deals across multiple countries, and mentoring coaches who went from struggling to thriving.",
    "If you're already getting on calls but want to close consistently, confidently, and without feeling pushy — you're in the right place.",
  ],
  image:    "/assets/651915567_18310099108257845_6492334486756279102_n.jpg",
  imageAlt: "Ilay Kasav - Sales Mentor",
};

// ── Programs ──────────────────────────────────
export const PROGRAMS = {
  eyebrow: "How We Work Together",
  heading: "Choose Your Path",
  cta:     { label: "Apply Now", url: SITE.ctaUrl },
  items: [
    {
      name:     "Sales Breakthrough",
      target:   "For coaches closing under 30% who need a complete sales overhaul.",
      features: ["Identity-Based Sales Framework", "Objection Psychology Mastery", "Personalised Call Reviews"],
    },
    {
      name:     "Scale & Close",
      target:   "For coaches already closing 30%+ who want to reach 60–75% consistently.",
      features: ["Advanced Closing Techniques", "Frame Control & Leadership", "High-Ticket Positioning"],
    },
    {
      name:     "Inner Circle",
      target:   "Invite-only for top performers who want direct ongoing access to Ilay.",
      features: ["Unlimited 1-on-1 Access", "Deal Strategy Support", "Private Community"],
    },
  ],
};

// ── Stats ─────────────────────────────────────
export const STATS = {
  heading: "The Numbers Don't Lie.",
  items: [
    { label: "Avg Close Rate Increase",       value: "2×–3×", suffix: "" },
    { label: "Coaches Mentored",              value: 150,     suffix: "+" },
    { label: "Avg. Days To See Results",      value: 30,      suffix: "" },
    { label: "Revenue Generated For Clients", value: 500,     suffix: "K+" },
  ],
};

// ── Results Bento ─────────────────────────────
export const RESULTS = {
  heading: "Built From Real Results",
  items: [
    { title: "15% → 75% Close Rates", description: "Students consistently double and triple their close rates within 30 days using the Identity-Based system.", image: "/assets/results-dashboard.jpg", span: "md:col-span-2" },
    { title: "1-on-1 Personalised Coaching", description: "Every session is tailored to your exact sales process — no cookie-cutter group calls.", image: "/assets/coaching-call.jpg", span: "" },
    { title: "Proven Sales Frameworks", description: "Battle-tested scripts, objection-handling systems, and identity psychology frameworks.", image: "/assets/playbooks.jpg", span: "" },
    { title: "Freedom-Based Lifestyle", description: "Close deals from anywhere in the world. Sales skills equal location independence.", image: "/assets/travel-lifestyle.jpg", span: "" },
    { title: "Head of International Sales", description: "Managing global sales operations and closing 6-figure deals across multiple countries.", image: "/assets/ilay-story.webp", span: "" },
    { title: "Exclusive Mastermind Access", description: "Connect with top-performing coaches in private strategy sessions.", image: "/assets/mastermind-event.jpg", span: "md:col-span-2" },
  ],
};

// ── Testimonials ──────────────────────────────
export const TESTIMONIALS = {
  heading: "What My Students Are Saying",
  items: [
    { name: "Eli",      image: "/assets/testimonial-eli.webp",      result: "15% → 75% close rate in 30 days",    quote: "Ilay helped me go from 15% to 75% in 30 days. Super supportive and really changed the way I close." },
    { name: "Eleonora", image: "/assets/testimonial-eleonora.webp", result: "Increased confidence on calls",       quote: "Ilay helped me a lot on our call. Really recommend him." },
    { name: "Daria",    image: "/assets/testimonial-daria.webp",    result: "Closing way more deals",              quote: "I changed my whole view on sales. I feel way more confident on calls now. I know how to handle every objection I get, and I'm closing way more deals." },
    { name: "Violetta", image: "/assets/testimonial-violetta.webp", result: "Learned to close every client type", quote: "Ilay really taught me how to deal with every type of client. He broke down each client personality and how to actually close them." },
    { name: "Evgeniya", image: "/assets/testimonial-evgeniya.webp", result: "Now leads and closes deals",         quote: "I finally feel like I can lead the prospect, set the frame, and actually close the deal. Before, I felt too pushy to take control." },
  ],
};

// ── Story ─────────────────────────────────────
export const STORY = {
  heading: "My Story",
  body: [
    { text: "Hey! I'm Ilay,", bold: true, suffix: " a sales mentor. I went from a broke high school dropout to closing 6‑figure deals while traveling the world." },
    { text: "At 16 I left the traditional education path and went to study sales in a large retail company. After hustling every single day in 12‑hour shifts, I proved my sales skills and became the sales manager — at only 17." },
    { text: "I was managing a team of 5 people and generating over $100,000 in total monthly revenue. But I wanted freedom — to build my own business and travel the world." },
    { text: "So I quit everything, took a one‑way flight to Thailand, and invested multiple 5 figures into sales and coaching training to become a true leader." },
    { text: "Today I'm the Head of International Sales Department, traveling every month to a new country, closing 6‑figure deals, and helping others master sales too." },
  ],
  quote:    "Sales isn't about convincing people — it's about leadership, mindset, and truly helping others.",
  image:    "/assets/ilay-story.webp",
  imageAlt: "Ilay Kasav",
};

// ── FAQ ───────────────────────────────────────
export const FAQ = {
  heading: "Frequently Asked Questions",
  items: [
    { question: "Is this only for coaches?", answer: "While it's designed for coaches, the psychology applies to anyone who sells high-ticket offers or runs sales calls daily." },
    { question: "What timezone are you teaching everything in? Will it work for my schedule and location?", answer: "Yes. Since this is 1-on-1 coaching, not a group program, we adjust the times based on what's comfortable for both of us. You'll get personal access and we'll schedule sessions that fit your timezone perfectly." },
  ],
};

// ── CTA Section ───────────────────────────────
export const CTA = {
  heading:    "Ready To Close More Deals & 2×–3× Your Income?",
  subheading: "Get a personalized sales breakdown and start closing more clients this week.",
  cta:        { label: "Book Your Free Strategy Session", url: SITE.ctaUrl },
};

// ── Final CTA ─────────────────────────────────
export const FINAL_CTA = {
  heading:    "Ready To Build A Sales Process That Actually Closes?",
  subheading: "I don't work with everyone. But if you're the right fit, this will be the most valuable investment you've ever made in your sales career.",
  cta:        { label: "Book Your Free Strategy Session", url: SITE.ctaUrl },
};
