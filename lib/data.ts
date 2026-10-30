// ---------------------------------------------------------------------------
// Central content file. All copy on the site is sourced from Zain's resume
// and the SEO performance screenshots he provided. Update this file to
// change site content — no other files need to change.
// ---------------------------------------------------------------------------

export const siteConfig = {
  name: "Zain Hasnat",
  title: "Zain Hasnat — SEO Specialist | Technical SEO, Local SEO & AI Search",
  description:
    "Zain Hasnat is an SEO Specialist with 2+ years of experience across technical, local, content and e-commerce SEO — helping businesses grow through Technical SEO, Local SEO, Content Strategy and AI Search Optimization (AEO/GEO).",
  // TODO: update to your real production domain before deploying
  url: "https://www.zainhasnat.com",
  email: "zainmg77@gmail.com",
  phone: "+92-3046946242",
  whatsapp: "https://wa.me/923046946242",
  linkedin: "https://www.linkedin.com/in/zain-hasnat-97679b207",
  // TODO: add a resume PDF at /public/resume/zain-hasnat-resume.pdf
  resumeUrl: "/resume/zain-hasnat-resume.pdf",
  location: "Pakistan — Open to Remote",
};

export const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Case Studies", href: "/#case-studies" },
  { label: "Experience", href: "/#experience" },
  { label: "Skills", href: "/#skills" },
  { label: "Certifications", href: "/#certifications" },
  { label: "Contact", href: "/#contact" },
];

export const hero = {
  badge: "SEO Specialist • Technical SEO • Local SEO • AI Search",
  heading: "Hi, I'm Zain Hasnat",
  subheading:
    "Helping businesses grow organic visibility through technical SEO, local search, content strategy, and AI search optimization.",
  intro:
    "I'm an SEO Specialist with 2+ years of hands-on experience turning search data into practical improvements. I combine technical analysis, search-intent-led content, and local SEO to strengthen rankings and help websites get discovered across traditional and AI-powered search.",
  image: {
    src: "/images/zain-hasnat-profile.jpg",
    alt: "Portrait of Zain Hasnat, SEO Specialist",
  },
};

export const keyResults = [
  { value: "3,000+", label: "Organic Keywords Ranked" },
  { value: "58,000+", label: "Search Impressions Generated" },
  { value: "7+", label: "Industries Worked With" },
  { value: "2+", label: "Years Professional Experience" },
];

export const about = {
  heading: "About",
  paragraphs: [
    "I'm an SEO Specialist based in Pakistan with 2+ years of hands-on experience across technical, local, content and e-commerce SEO. I combine technical problem-solving, search-intent-led content, and performance analysis to identify practical opportunities for organic growth.",
    "My experience spans asphalt and paving, industrial equipment, HVAC and home services, automotive, pet care, home retail, and healthcare. Across these industries, I've worked on keyword research, on-page improvements, technical audits, and local SEO campaigns.",
    "I also apply semantic SEO and Answer Engine Optimization (AEO) principles to help websites communicate expertise clearly and improve their visibility across traditional search and AI-driven experiences such as ChatGPT, Gemini, and Google AI Overviews.",
  ],
  highlights: [
    "Technical SEO & site health audits",
    "Local SEO & Google Business Profile optimization",
    "Content strategy & topical authority",
    "AI Search Optimization — AEO & GEO",
  ],
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  achievements: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "Alev Digital",
    role: "SEO Specialist",
    period: "2025 — Present",
    location: "Digital Marketing Agency",
    summary:
      "Planning and executing SEO strategy across client accounts — from keyword research through technical audits to on-page execution and reporting.",
    achievements: [
      "Plan and execute keyword research strategies, identifying ranking opportunities aligned with client objectives.",
      "Implement on-page optimizations — title tags, meta descriptions, heading structures and internal linking.",
      "Conduct technical audits covering crawl errors, indexing gaps, site speed and structured data.",
      "Optimize site architecture for topical authority and entity relevance to support stronger SERP positioning.",
      "Prepare monthly performance reports and contribute to client strategic planning discussions.",
    ],
  },
  {
    company: "ELANDS",
    role: "SEO Specialist",
    period: "Oct 2024 — Mar 2025",
    location: "Digital Marketing Agency",
    summary:
      "Delivered on-page, technical and content SEO across client websites, alongside off-page link building and outreach.",
    achievements: [
      "Executed on-page SEO, keyword research and technical SEO audits across client websites.",
      "Developed and implemented content strategies, including copywriting and content brief creation.",
      "Built backlink profiles through targeted link building and outreach activities.",
    ],
  },
  {
    company: "Digital Sleek",
    role: "SEO Intern",
    period: "Jul 2024 — Sep 2024",
    location: "Digital Marketing Agency",
    summary:
      "Supported off-page SEO campaigns, focused on link building and outreach to grow client domain authority.",
    achievements: [
      "Supported off-page SEO through link building, backlink acquisition and outreach activities.",
      "Assisted in identifying link opportunities and executing outreach campaigns to grow domain authority.",
    ],
  },
];

export const skillGroups = [
  {
    title: "Technical & On-Page",
    skills: [
      "On-Page SEO",
      "Technical SEO",
      "Advanced Technical Auditing",
      "Crawlability & Indexing",
      "Metadata",
      "Internal Linking",
    ],
  },
  {
    title: "Content & Semantic",
    skills: [
      "Content SEO",
      "Content Brief Creation",
      "Semantic SEO",
      "Topical Authority",
      "Featured Snippet Optimization",
      "Search Intent Optimization",
    ],
  },
  {
    title: "AEO & AI Search",
    skills: [
      "Answer Engine Optimization (AEO)",
      "Generative Engine Optimization (GEO)",
      "AI Search Visibility",
      "Entity-Based SEO",
    ],
  },
  {
    title: "Local & E-commerce",
    skills: ["Local SEO", "GMB Optimization", "E-commerce SEO", "Location-Based Pages"],
  },
  {
    title: "Off-Page & Research",
    skills: ["Link Building", "Outreach", "Keyword Research", "Competitor Analysis"],
  },
  {
    title: "Analytics",
    skills: ["GA4", "Google Search Console", "SERP Analysis", "Monthly Reporting"],
  },
];

export const tools = [
  "Ahrefs",
  "SEMrush",
  "Screaming Frog",
  "Google Keyword Planner",
  "GA4",
  "Google Search Console",
  "WordPress",
  "Google Sheets",
  "Canva",
  "ChatGPT",
  "Claude AI",
];

export type CaseStudyImage = {
  src: string;
  caption: string;
};

export type CaseStudy = {
  slug: string;
  name: string;
  industry: string;
  description: string;
  results: { label: string; value: string }[];
  disciplines: string[];
  overview: string;
  challenge: string;
  approach: string[];
  outcome: string;
  images: CaseStudyImage[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "seal-daddy",
    name: "Seal Daddy",
    industry: "Home Services — Asphalt & Paving",
    description:
      "Delivered full-scope local SEO — GBP optimization, backlink strategy and content structuring — for a residential and commercial asphalt sealcoating company competing in a crowded local market.",
    results: [
      { label: "GBP Website Clicks (May)", value: "137 (+153.7%)" },
      { label: "GBP Interactions (Apr)", value: "178 (+196.7%)" },
      { label: "Local Keyword Rankings", value: "#1" },
    ],
    disciplines: ["Local SEO", "GBP Optimization", "Off-Page SEO", "AI Search Visibility"],
    overview:
      "Seal Daddy is an asphalt sealcoating and driveway repair company serving North Tonawanda, Niagara County and Wheatfield, NY. The goal was to win local visibility against established competitors across multiple service areas.",
    challenge:
      "Local search results in the asphalt and paving space were dominated by long-established competitors, and Seal Daddy needed to build both organic and Google Business Profile visibility across several nearby service areas at once.",
    approach: [
      "Optimized the Google Business Profile and built a targeted local backlink strategy.",
      "Structured location-specific content around competitive keywords like \u201casphalt sealcoating\u201d and \u201casphalt maintenance.\u201d",
      "Tracked keyword and GBP performance across North Tonawanda, Niagara County and Wheatfield to guide ongoing optimization.",
    ],
    outcome:
      "Seal Daddy now holds #1\u2013#2 Google Business Profile positions for core keywords across all three service areas, ranks organically for competitive local terms, and is being surfaced directly in ChatGPT and Gemini responses for local sealcoating searches \u2014 alongside a 153.7% increase in GBP website clicks and a 196.7% increase in profile interactions.",
    images: [
      { src: "/images/case-studies/seal-daddy-gbp-rank-north-tonawanda.png", caption: "Google Business Profile — ranked #1 for \u201casphalt maintenance\u201d in North Tonawanda, NY" },
      { src: "/images/case-studies/seal-daddy-gbp-rank-niagara-county.png", caption: "Google Business Profile — ranked #1 for \u201casphalt sealcoating\u201d in Niagara County, NY" },
      { src: "/images/case-studies/seal-daddy-keyword-rank-asphalt-maintenance.png", caption: "Organic ranking — #2 for \u201casphalt maintenance\u201d in North Tonawanda, NY" },
      { src: "/images/case-studies/seal-daddy-gbp-rank-wheatfield-repair.png", caption: "Google Business Profile — ranked #1 for \u201casphalt repair services\u201d in Wheatfield, NY" },
      { src: "/images/case-studies/seal-daddy-gbp-rank-wheatfield-sealcoating.png", caption: "Google Business Profile — holding #2 for \u201casphalt sealcoating services\u201d in Wheatfield, NY" },
      { src: "/images/case-studies/seal-daddy-keyword-rank-driveway-repair.png", caption: "Organic ranking — #2 for \u201casphalt driveway repair services\u201d in Niagara County, NY" },
      { src: "/images/case-studies/seal-daddy-ai-chatgpt-north-tonawanda.png", caption: "Seal Daddy referenced in ChatGPT for local asphalt sealcoating and maintenance queries in North Tonawanda" },
      { src: "/images/case-studies/seal-daddy-ai-chatgpt-wheatfield.png", caption: "Seal Daddy referenced in ChatGPT for asphalt maintenance and sealcoating queries in Wheatfield, NY" },
      { src: "/images/case-studies/seal-daddy-ai-gemini-wheatfield.png", caption: "Seal Daddy referenced in Gemini for driveway sealcoating searches in Wheatfield, NY" },
      { src: "/images/case-studies/seal-daddy-ai-gemini-north-tonawanda.png", caption: "Seal Daddy referenced in Gemini for asphalt sealcoating and driveway sealing searches in North Tonawanda" },
      { src: "/images/case-studies/seal-daddy-gbp-clicks-may.png", caption: "Google Business Profile website clicks — 137 clicks in May, up 153.7% year-over-year" },
      { src: "/images/case-studies/seal-daddy-gbp-performance-april.png", caption: "Google Business Profile interactions — 178 interactions in April, up 196.7% year-over-year" },
    ],
  },
  {
    slug: "mhs-crane",
    name: "MHS Crane",
    industry: "Industrial Equipment — Crane & Hoist Services",
    description:
      "On-page, off-page and technical SEO for a multi-location industrial crane and hoist service company, with per-location Google Business Profile optimization.",
    results: [
      { label: "Search Impressions", value: "250K+" },
      { label: "US Traffic", value: "1.2K" },
      { label: "Daily Clicks", value: "20–30" },
    ],
    disciplines: ["Technical SEO", "On-Page SEO", "Off-Page SEO", "Local SEO (Multi-Location)"],
    overview:
      "MHS Crane provides crane, hoist and overhead lifting equipment services out of Pompano Beach, FL. As a multi-location, industrial B2B business, the SEO scope covered on-page, off-page and technical work across service and blog content, plus per-location GBP optimization.",
    challenge:
      "Ranking for competitive, high-intent industrial keywords (crane repair, hoist repair, crane modernization, OSHA inspection services) required both strong on-page and technical foundations and content built to compete in an authority-driven B2B niche.",
    approach: [
      "Optimized service pages for high-intent keywords like \u201cEmergency Crane Repair,\u201d \u201cElectric Hoist Repair\u201d and \u201cIndustrial Crane Modernization Services.\u201d",
      "Built out blog content covering topics like overhead bridge crane selection, supporting both organic rankings and AI Overview visibility.",
      "Optimized the Google Business Profile per location and ran technical audits to support indexing and crawl health.",
    ],
    outcome:
      "MHS Crane's service pages have achieved #1 rankings for keywords including \u201cElectric Hoist Repair,\u201d \u201cIndustrial Crane Modernization Services\u201d and \u201cOSHA Crane Inspection Services,\u201d with visibility in Google AI Overviews. Current reported performance includes 250K search impressions, approximately 1.2K in US traffic, and 20–30 clicks per day.",
    images: [
      { src: "/images/case-studies/mhs-crane-keyword-rank-emergency-repair-april.png", caption: "April — ranked #2 for \u201cEmergency Crane Repair\u201d in Pompano Beach, FL" },
      { src: "/images/case-studies/mhs-crane-keyword-rank-modernization-may.png", caption: "May — ranked #1 for \u201cIndustrial Crane Modernization Services\u201d in Pompano Beach, FL" },
      { src: "/images/case-studies/mhs-crane-keyword-rank-hoist-repair-april.png", caption: "April — ranked #1 for \u201cElectric Hoist Repair\u201d in Pompano Beach, FL" },
      { src: "/images/case-studies/mhs-crane-keyword-rank-osha-inspection-june.png", caption: "June — ranked #1 for \u201cOSHA Crane Inspection Services,\u201d also featured in Google AI Overviews" },
      { src: "/images/case-studies/mhs-crane-keyword-rank-emergency-repair-june.png", caption: "June — ranked #2 for \u201cEmergency Crane Repair,\u201d also appearing in Google AI Overviews" },
      { src: "/images/case-studies/mhs-crane-keyword-rank-hoist-repair-june.png", caption: "June — ranked #1 for \u201cExpert Hoist Repair Services\u201d" },
      { src: "/images/case-studies/mhs-crane-blog-performance-june.png", caption: "MHS Crane blog ranked #1 and featured in Google AI Overviews for \u201cHow to Choose the Right Overhead Bridge Crane\u201d" },
      { src: "/images/case-studies/mhs-crane-gbp-rank-hoist-repair-june.png", caption: "Google Business Profile ranked #1 for \u201celectric hoist repair\u201d" },
      { src: "/images/case-studies/mhs-crane-domain-performance-overview.png", caption: "Historical domain performance comparison — organic keyword and AI-citation growth" },
      { src: "/images/case-studies/mhs-crane-search-console-top-pages.png", caption: "Search Console — top pages by clicks and impressions" },
      { src: "/images/case-studies/mhs-crane-search-console-performance-trend.png", caption: "Historical Search Console performance snapshot — 90-day period" },
    ],
  },
  {
    slug: "freedom-air",
    name: "Freedom Air",
    industry: "HVAC & Home Services",
    description:
      "Created and optimized location-based landing pages alongside technical SEO, strengthening local presence and geo-targeted keyword coverage across multiple service areas.",
    results: [
      { label: "Service Areas Ranking Top 10", value: "4" },
      { label: "Best Ranking Achieved", value: "#1" },
      { label: "AI Overview Features", value: "2" },
    ],
    disciplines: ["Local SEO", "Technical SEO", "Location-Based Pages"],
    overview:
      "Freedom Air is an HVAC company serving multiple towns across Western New York, including Wheatfield, Lewiston, Lockport and Niagara Falls. The work focused on building and optimizing location-specific landing pages so the business could compete for HVAC searches across each service area.",
    challenge:
      "HVAC search demand is highly localized, and Freedom Air needed dedicated, technically sound landing pages for each town it serves rather than a single generic service page competing everywhere at once.",
    approach: [
      "Built and optimized location-based landing pages for Wheatfield, Lewiston, Lockport and Niagara Falls.",
      "Paired each page with technical SEO improvements to support crawlability and indexing.",
      "Targeted geo-specific, high-intent keywords such as \u201csame-day HVAC repair\u201d and \u201cfurnace installation\u201d per location.",
    ],
    outcome:
      "Freedom Air now ranks #1 for \u201cSame-day HVAC repair\u201d in Wheatfield and \u201cExpert HVAC Installation\u201d in Niagara Falls (also featured in Google AI Overviews), with additional top-10 rankings across Lewiston and Lockport.",
    images: [
      { src: "/images/case-studies/freedom-air-wheatfield-same-day-repair.png", caption: "Wheatfield, NY — ranked #1 for \u201cSame-day HVAC repair\u201d" },
      { src: "/images/case-studies/freedom-air-wheatfield-hvac-service.png", caption: "Wheatfield, NY — ranked #2 for \u201cHVAC Service\u201d" },
      { src: "/images/case-studies/freedom-air-lewiston-heating-cooling.png", caption: "Lewiston, NY — ranked #4 for \u201cHeating and Cooling\u201d" },
      { src: "/images/case-studies/freedom-air-lewiston-affordable-hvac.png", caption: "Lewiston, NY — ranked #2 for \u201cAffordable HVAC Services\u201d" },
      { src: "/images/case-studies/freedom-air-lockport-emergency-hvac.png", caption: "Lockport, NY — ranked #6 for \u201cEmergency HVAC Services\u201d" },
      { src: "/images/case-studies/freedom-air-niagara-falls-heating-services.png", caption: "Niagara Falls, NY — ranked #10 for \u201cHeating Services,\u201d also featured in Google AI Overviews" },
      { src: "/images/case-studies/freedom-air-niagara-falls-furnace-installation.png", caption: "Niagara Falls, NY — ranked #4 for \u201cFurnace Installation\u201d" },
      { src: "/images/case-studies/freedom-air-niagara-falls-hvac-installation.png", caption: "Niagara Falls, NY — ranked #1 for \u201cExpert HVAC Installation,\u201d also featured in Google AI Overviews" },
    ],
  },
  {
    slug: "barberino-nissan",
    name: "Barberino Nissan",
    industry: "Automotive Dealership",
    description:
      "SEO and AI search visibility work for a Nissan dealership, strengthening organic rankings and building visibility across ChatGPT and Gemini for local dealership searches.",
    results: [
      { label: "AI Search Mentions", value: "0 → 37" },
      { label: "AI Cited Pages", value: "1 → 64" },
      { label: "Nissan Dealership Ranking", value: "#2 → #1" },
    ],
    disciplines: ["Local SEO", "AI Search Visibility", "On-Page SEO"],
    overview:
      "Barberino Nissan is a Nissan dealership serving the Hamden, Wallingford and North Haven, CT area. The focus of this engagement was strengthening both traditional organic rankings and visibility in AI-driven search tools like ChatGPT and Gemini.",
    challenge:
      "Barberino Nissan was competing against established dealerships for high-intent local keywords, and had almost no presence in AI-driven search tools, which are an increasingly important discovery channel for local service searches.",
    approach: [
      "Optimized dealership and service pages for core local keywords such as \u201cNissan Dealership\u201d and \u201cNissan Tire Service.\u201d",
      "Structured content and local signals to improve visibility in AI Overviews, ChatGPT and Gemini.",
      "Monitored organic and AI search visibility to guide ongoing content and optimization decisions.",
    ],
    outcome:
      "Barberino Nissan moved from #2 to the #1 organic ranking for \u201cNissan Dealership\u201d in Hamden, CT, and now appears in ChatGPT for \u201cBest Nissan Dealership in Wallingford\u201d and in Gemini for \u201cCertified EV Dealerships Near North Haven\u201d \u2014 with AI search mentions growing from 0 to 37 and AI-cited pages from 1 to 64.",
    images: [
      { src: "/images/case-studies/barberino-nissan-ai-search-before-after.png", caption: "AI search visibility before/after — mentions grew from 0 to 37 and cited pages from 1 to 64" },
      { src: "/images/case-studies/barberino-nissan-domain-before-after.png", caption: "Domain performance before/after — organic traffic and keyword visibility" },
      { src: "/images/case-studies/barberino-nissan-hamden-dealership-rank2.png", caption: "Hamden, CT — ranked #2 organically for \u201cNissan Dealership\u201d" },
      { src: "/images/case-studies/barberino-nissan-hamden-dealership-rank1.png", caption: "Hamden, CT — moved up to #1 organically for \u201cNissan Dealership\u201d" },
      { src: "/images/case-studies/barberino-nissan-hamden-tire-service-rank3.png", caption: "Hamden, CT — ranked #3 organically for \u201cNissan Tire Service\u201d" },
      { src: "/images/case-studies/barberino-nissan-ai-chatgpt-wallingford.png", caption: "Featured in ChatGPT for \u201cBest Nissan Dealership in Wallingford\u201d" },
      { src: "/images/case-studies/barberino-nissan-ai-gemini-north-haven.png", caption: "Featured in Gemini for \u201cCertified EV Dealerships Near North Haven\u201d" },
    ],
  },
  {
    slug: "focus-pet-care",
    name: "Focus Pet Care",
    industry: "Pet Care",
    description:
      "Built a full SEO and content workflow from scratch for a pet care brand — keyword research, content briefs, on-page optimization and internal linking, structured around topical authority.",
    results: [{ label: "Ranking Keywords", value: "4,000+" }],
    disciplines: ["Content SEO", "Blogging", "Topical Authority"],
    overview:
      "Focus Pet Care needed an SEO and content foundation built from the ground up. I set up the full workflow \u2014 from keyword research through content briefs to on-page execution \u2014 so the site could be built for topical authority from day one.",
    challenge:
      "The site had no structured SEO or content process in place, making it difficult to target the right search intent or build authority around pet care topics.",
    approach: [
      "Conducted keyword research to map out content opportunities across the site's core topics.",
      "Wrote content briefs and structured pages around search intent and topical relevance.",
      "Implemented on-page optimization and internal linking to reinforce topical authority.",
    ],
    outcome:
      "The site's content and internal linking structure supports rankings across 2,000+ keywords, with a repeatable content workflow in place to expand topical coverage over time.",
    images: [],
  },
  {
    slug: "yamazaki-home",
    name: "Yamazaki Home",
    industry: "Home & Lifestyle Retail",
    description:
      "Optimized product and category pages for a home brand \u2014 metadata, SEO-driven descriptions and crawlability improvements to support transactional search visibility.",
    results: [],
    disciplines: ["E-commerce SEO", "On-Page SEO", "Technical SEO"],
    overview:
      "Yamazaki Home needed its e-commerce catalog optimized for search \u2014 product and category pages weren't fully set up to capture transactional, high-intent search traffic.",
    challenge:
      "Product and category pages needed clearer metadata, more search-friendly descriptions, and improved crawlability to be found for the keywords customers actually search.",
    approach: [
      "Rewrote metadata and product descriptions with transactional keyword targeting in mind.",
      "Optimized category page structure and internal linking for crawlability.",
      "Reviewed technical SEO factors affecting indexing across the product catalog.",
    ],
    outcome:
      "Product and category pages became easier to crawl and better aligned with the keywords shoppers use, strengthening the site's e-commerce SEO foundation.",
    images: [],
  },
  {
    slug: "healthcare-dental-seo",
    name: "Healthcare & Dental SEO",
    industry: "Healthcare & Dental",
    description:
      "Optimized service and location pages for a healthcare and dental client, applying YMYL-aware content practices and location-based structuring for a regulated vertical.",
    results: [],
    disciplines: ["Healthcare SEO", "Local SEO", "Content Strategy"],
    overview:
      "This engagement covered SEO for a healthcare and dental client \u2014 a YMYL (\u201cYour Money or Your Life\u201d) vertical where content accuracy and trust signals carry extra weight in search.",
    challenge:
      "Healthcare and dental content needs to meet a higher bar for accuracy and trustworthiness, while service and location pages needed clearer structure for local visibility.",
    approach: [
      "Applied YMYL-aware content practices to service and location pages.",
      "Conducted keyword research specific to healthcare and dental search behavior.",
      "Structured location pages to strengthen visibility for regulated-vertical, location-based search.",
    ],
    outcome:
      "Service and location pages were restructured for both compliance-conscious content quality and stronger local search visibility.",
    images: [],
  },
];

export const certifications = [
  {
    name: "Enterprise AEO Certification",
    issuer: "seoClarity",
    year: "",
  },
  {
    name: "HubSpot Digital Marketing",
    issuer: "HubSpot Academy",
    year: "",
  },
  {
    name: "HubSpot Social Media Marketing",
    issuer: "HubSpot Academy",
    year: "",
  },
];
