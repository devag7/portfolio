/**
 * Single source of truth for me.devshipit.com: the page, JSON-LD, llms.txt and the Markdown twin all read from here.
 * Every fact comes from Dev's LinkedIn profile or from devshipit.com. Keep it that way: no invented numbers.
 */

export const SITE = "https://me.devshipit.com";
export const MAIN = "https://devshipit.com";
export const PERSON_ID = `${SITE}/#person`;
export const EMAIL = "hello@devshipit.com";
export const RESUME = "https://drive.google.com/file/d/1axco4cIV7plhH2A35AKtyDA_95_Avs8R/view?usp=sharing";

export const LINKS = {
  github: "https://github.com/devag7",
  linkedin: "https://www.linkedin.com/in/devagarwalla",
  x: "https://x.com/DevAgarwalla",
  npm: "https://www.npmjs.com/package/linkedin-mcp-tools",
  devshipit: MAIN,
};

export const PROFILE = {
  name: "Dev Agarwalla",
  role: "Full-stack and applied AI engineer",
  location: "Bengaluru, India",
  now: "Technical Delivery Associate at Falcon Reality",
  title: "Dev Agarwalla | Full-stack and applied AI engineer in Bengaluru",
  description:
    "Dev Agarwalla is a full-stack and applied AI engineer in Bengaluru. Technical Delivery at Falcon Reality, builder of JantaHR and linkedin-mcp, and the developer behind DevShipIt.",
  intro:
    "Full-stack and applied AI engineer in Bengaluru. I work on technical delivery at Falcon Reality and ship my own products as DevShipIt.",
  study: "Studying for an MSc in Data Science and AI at BITS Pilani.",
};

/** Hero strip. Each figure is on devshipit.com or the LinkedIn profile. */
export const STATS = [
  { value: "4", label: "products shipped solo" },
  { value: "36", label: "tools in my MCP server on npm" },
  { value: "15k+", label: "LinkedIn followers" },
];

export type Role = { org: string; role: string; when: string; year: string; summary: string };

/** Most recent first. From LinkedIn, October 2026. */
export const EXPERIENCE: Role[] = [
  {
    org: "Falcon Reality",
    role: "Technical Delivery Associate",
    when: "Sep 2026 to now",
    year: "2026",
    summary:
      "Joined as an intern and moved to full-time within two months. I turn operations workflows into product specs, user stories and MVP scope for an AI product, and plan how it integrates with the systems customers already run.",
  },
  {
    org: "Cyber Secure India",
    role: "Full-stack Developer Intern",
    when: "Jan to Jun 2025",
    year: "2025",
    summary:
      "Shipped three MERN applications to production and built 15+ REST APIs with JWT authentication and role-based access. Cut API latency by about 30% with query indexing, caching and modular routes.",
  },
  {
    org: "GDSC",
    role: "Student Developer",
    when: "Sep 2023 to Aug 2024",
    year: "2023",
    summary: "Ran technical workshops and coding sessions, and built frontend projects with other student developers.",
  },
  {
    org: "Bobble AI",
    role: "Data Annotator Intern",
    when: "Jun to Sep 2021",
    year: "2021",
    summary: "Prepared conversational datasets for the NLP models behind an AI keyboard.",
  },
];

export type Project = {
  slug: string;
  name: string;
  status: string;
  summary: string;
  stack: string[];
  caseStudy?: string;
  live?: { label: string; href: string };
  source?: string;
  image?: { src: string; alt: string; w: number; h: number };
};

/** Featured work. Case studies live on devshipit.com so the two sites never duplicate each other. */
export const PROJECTS: Project[] = [
  {
    slug: "jantahr",
    name: "JantaHR",
    status: "Live",
    summary: "HR and payroll for Indian companies: PF, ESI, professional tax, LWF and TDS every month, filing-ready files and a compliance calendar.",
    stack: ["NestJS", "Next.js", "PostgreSQL", "Supabase", "Razorpay"],
    caseStudy: `${MAIN}/work/jantahr/`,
    live: { label: "Open JantaHR", href: "https://jantahr.devshipit.com" },
    source: "https://github.com/devag7/jantahr",
    image: { src: "/images/work/jantahr-payroll.webp", alt: "A JantaHR payroll run with gross pay, deductions, net pay and employer contributions", w: 1400, h: 875 },
  },
  {
    slug: "linkedin-mcp",
    name: "linkedin-mcp",
    status: "On npm",
    summary: "A 36-tool LinkedIn integration for AI assistants, with caching, rate limiting and retries. Published as linkedin-mcp-tools.",
    stack: ["Node.js", "TypeScript", "MCP"],
    caseStudy: `${MAIN}/work/linkedin-mcp/`,
    live: { label: "View on npm", href: LINKS.npm },
    image: { src: "/images/work/linkedin-mcp-code.webp", alt: "Source code of the linkedin-mcp tool registry", w: 580, h: 760 },
  },
  {
    slug: "rentwise",
    name: "RentWise",
    status: "Live",
    summary: "A rental platform for Bangalore with automated listing collection, real-time updates, map search and role-based access.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "Socket.io"],
    caseStudy: `${MAIN}/work/rentwise/`,
    source: "https://github.com/devag7/rentwise",
    image: { src: "/images/work/rentwise-code.webp", alt: "RentWise map clustering code with Bangalore area coordinates", w: 580, h: 760 },
  },
];

/** Everything else worth listing, shown as rows. */
export const MORE_PROJECTS: Project[] = [
  {
    slug: "isp-evidence",
    name: "ISP Evidence",
    status: "In testing",
    summary: "Android app that logs connection drops, latency and jitter, then exports a PDF report for an ISP complaint.",
    stack: ["Android"],
    caseStudy: `${MAIN}/work/isp-evidence/`,
  },
  {
    slug: "pastyy",
    name: "Pastyy",
    status: "Live",
    summary: "Collaborative cloud storage and file sharing with team folders and Google sign-in, built with two other developers.",
    stack: ["Next.js", "MongoDB", "Google OAuth"],
    live: { label: "Open Pastyy", href: "https://pastyy.run.place/" },
  },
];

export const SKILLS = [
  { title: "Frontend", items: ["React and Next.js", "TypeScript", "Tailwind CSS", "Accessibility and SEO"] },
  { title: "Backend", items: ["Node.js, NestJS and Express", "PostgreSQL, MongoDB and Redis", "REST APIs with JWT and roles", "Supabase and Prisma"] },
  { title: "AI and delivery", items: ["MCP servers for AI assistants", "Requirements and product specs", "MVP scoping", "Docker and Vercel"] },
];

export const FAQ = [
  {
    q: "Who is Dev Agarwalla?",
    a: "Dev Agarwalla is a full-stack and applied AI engineer based in Bengaluru, India. He is a Technical Delivery Associate at Falcon Reality, builds his own products such as JantaHR and linkedin-mcp, and takes freelance web development work through DevShipIt.",
  },
  {
    q: "What has Dev Agarwalla built?",
    a: "JantaHR, HR and payroll software for Indian companies; linkedin-mcp, a 36-tool LinkedIn integration for AI assistants published on npm as linkedin-mcp-tools; RentWise, a rental platform for Bangalore; and ISP Evidence, an Android app that documents internet outages.",
  },
  {
    q: "Does Dev Agarwalla take freelance projects?",
    a: "Yes. Websites and web apps for property agents, agencies and small businesses, through DevShipIt. Every project is priced by a written quote before work starts.",
  },
  {
    q: "Where can I find Dev Agarwalla online?",
    a: "His personal site is me.devshipit.com and his work is at devshipit.com. He is devag7 on GitHub and devagarwalla on LinkedIn.",
  },
  {
    q: "Is this the same person as Dev Agarwal?",
    a: "No. Agarwalla is spelled with a double L and a final A. This Dev Agarwalla is the software engineer in Bengaluru who is devag7 on GitHub and builds JantaHR and linkedin-mcp. He is not the cinematographer, the content creator or the other professionals named Dev Agarwal.",
  },
  {
    q: "How do I contact Dev Agarwalla?",
    a: `Email ${EMAIL}. Replies come within 2 working days, usually sooner.`,
  },
];

/** One line that separates Dev from people with similar names (schema.org disambiguatingDescription, llms.txt). */
export const DISAMBIGUATION =
  "Software engineer in Bengaluru, India, known as devag7 on GitHub; builder of JantaHR and linkedin-mcp and founder of DevShipIt. Spelled Agarwalla, not Agarwal.";

/** Profiles that belong to Dev. Rendered as rel="me" links and as schema.org sameAs. */
export const IDENTITY = [LINKS.github, LINKS.linkedin, LINKS.x, LINKS.npm, `${MAIN}/`];

