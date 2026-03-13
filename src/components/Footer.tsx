import Link from "next/link";

const footerLinks = [
  {
    heading: "Explore",
    links: [
      { label: "About", href: "/about" },
      { label: "Research", href: "/research" },
      { label: "Recognition", href: "/recognition" },
    ],
  },
  {
    heading: "Connect",
    links: [
      { label: "Media", href: "/media" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "External",
    links: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/divyapant",
        external: true,
      },
      {
        label: "Twitter / X",
        href: "https://twitter.com/divyapant20",
        external: true,
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy pt-20 pb-10">
      <div className="section-padding mx-auto max-w-6xl">
        {/* Gold accent line at top */}
        <div className="mb-16 h-px w-12 bg-gold opacity-50" />

        {/* Links grid */}
        <div className="grid gap-10 sm:grid-cols-3">
          {footerLinks.map((group) => (
            <div key={group.heading}>
              <h4 className="text-[0.6875rem] font-semibold uppercase tracking-[0.15em] text-cream/55">
                {group.heading}
              </h4>
              <ul className="mt-5 space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    {"external" in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-gold-underline text-[0.8125rem] text-cream/65 transition-colors duration-300 hover:text-gold"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="link-gold-underline text-[0.8125rem] text-cream/65 transition-colors duration-300 hover:text-gold"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider + copyright */}
        <div className="mt-16 border-t border-cream/[0.06] pt-8 flex flex-wrap items-center justify-between gap-2">
          <p className="text-[0.75rem] tracking-wide text-cream/50">
            &copy; {new Date().getFullYear()} Divya Pant
          </p>
          <p className="text-[0.6875rem] tracking-wider text-cream/40">
            Crafted with purpose
          </p>
        </div>
      </div>
    </footer>
  );
}
