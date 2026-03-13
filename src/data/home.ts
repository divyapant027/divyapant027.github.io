// ─── Home Page Data ─────────────────────────────────────

export const hero = {
  name: "Divya Pant",
  tagline:
    "NSF Fellow · Carbon Away Founder · Penn State Doctoral Candidate",
  cta: { label: "Explore My Work", href: "/research" },
};

export const heroImages = [
  {
    src: "/images/IMG_4302.jpg",
    alt: "Divya Pant at UN headquarters with Miss Nepal NA sash",
    role: "Global Advocate",
  },
  {
    src: "/images/IMG_7362.jpg",
    alt: "Divya presenting at an academic conference",
    role: "Researcher",
  },
  {
    src: "/images/IMG_0255.jpg",
    alt: "Divya training farmers in Kathmandu, Nepal",
    role: "Sustainability Champion",
  },
  {
    src: "/images/IMG_2781.jpg",
    alt: "Divya at an academic ceremony",
    role: "Scholar",
  },
];

export const introSnapshot = {
  heading: "From Jhalari to the World Stage",
  text: "From a small farming village in Nepal to leading life-cycle assessment for $11.7M in federal bioeconomy research at Penn State. Divya Pant has published 12 papers (110+ citations), founded Carbon Away, trained 350+ people across three countries, and led Nepal's only team in the $100M XPRIZE Carbon Removal competition.",
};

export const impactPillars = [
  {
    title: "Climate & Carbon Markets",
    description:
      "Leading Carbon Away's ISO-compliant LCA work and MRV framework development, demonstrating 65% emissions reduction.",
    icon: "leaf" as const,
    href: "/research",
  },
  {
    title: "Research & Academia",
    description:
      "Leading LCA for $11.7M in federal bioeconomy research (NSF ECO-CBET, USDA C-CHANGE). 12 publications, 110+ citations.",
    icon: "flask" as const,
    href: "/research",
  },
  {
    title: "Women's Empowerment",
    description:
      "Advocating for women in agriculture from rural Nepal to global stages.",
    icon: "users" as const,
    href: "/about",
  },
  {
    title: "Cultural Bridge-Building",
    description:
      "Fostering exchange between the U.S. and Nepal through leadership.",
    icon: "globe" as const,
    href: "/recognition",
  },
];

export const featuredPress = [
  { outlet: "Penn State News", href: "/media" },
  { outlet: "The Daily Collegian", href: "/media" },
  { outlet: "The Rising Nepal", href: "/media" },
  { outlet: "News24 Nepal", href: "/media" },
  { outlet: "Prime Times HD", href: "/media" },
];

export const stats = [
  { value: 12, suffix: "", label: "Publications" },
  { value: 110, suffix: "+", label: "Citations" },
  { value: 15, suffix: "+", label: "Conferences" },
  { value: 5, suffix: "M+", label: "Media Reach" },
];
