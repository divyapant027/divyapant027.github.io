"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Research", href: "/research" },
  { label: "Recognition", href: "/recognition" },
  { label: "Media", href: "/media" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close mobile menu on route change */
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  /* Lock body scroll when menu is open */
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
          scrolled && !menuOpen
            ? "bg-navy/95 shadow-lg backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <nav className="section-padding mx-auto flex max-w-7xl items-center justify-between py-5">
          {/* Logo — elegant monogram with gold accent */}
          <Link
            href="/"
            className="relative z-[60] group font-heading text-xl font-bold tracking-wide text-cream transition-colors duration-300 hover:text-gold"
          >
            <span className="relative">
              DP
              {/* Subtle gold dot after monogram */}
              <span className="absolute -right-2 -top-0.5 h-1 w-1 rounded-full bg-gold opacity-80 transition-transform duration-300 group-hover:scale-150" />
            </span>
          </Link>

          {/* Desktop links — wider letter-spacing, refined active states */}
          <ul className="hidden gap-10 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`link-gold-underline relative flex flex-col items-center gap-1.5 text-[0.8125rem] font-medium uppercase tracking-[0.12em] transition-colors duration-300 hover:text-gold ${
                    isActive(link.href)
                      ? "text-gold"
                      : "text-cream/70"
                  }`}
                >
                  {link.label}
                  {/* Active indicator: small dot below */}
                  {isActive(link.href) && (
                    <span className="nav-dot absolute -bottom-2" />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            className="relative z-[60] flex h-11 w-11 flex-col items-center justify-center gap-1.5 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span
              className={`h-px w-6 bg-cream transition-all duration-300 ${
                menuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-6 bg-cream transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-px w-6 bg-cream transition-all duration-300 ${
                menuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile fullscreen overlay — outside header to avoid backdrop-filter containing block */}
      <div
        className={`fixed inset-0 z-[55] flex items-center justify-center bg-navy transition-all duration-500 md:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        {/* Decorative gold line */}
        <div className="absolute top-1/4 left-1/2 h-px w-16 -translate-x-1/2 bg-gold/30" />

        <ul className="flex flex-col items-center gap-8">
          <li
            className="transition-all duration-300"
            style={{
              transitionDelay: menuOpen ? "0ms" : "0ms",
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? "translateY(0)" : "translateY(20px)",
            }}
          >
            <Link
              href="/"
              aria-current={pathname === "/" ? "page" : undefined}
              className={`font-heading text-3xl tracking-wide transition-colors duration-300 hover:text-gold ${
                pathname === "/" ? "text-gold" : "text-cream"
              }`}
            >
              Home
            </Link>
          </li>
          {navLinks.map((link, i) => (
            <li
              key={link.href}
              className="transition-all duration-300"
              style={{
                transitionDelay: menuOpen ? `${(i + 1) * 80}ms` : "0ms",
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(20px)",
              }}
            >
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`font-heading text-3xl tracking-wide transition-colors duration-300 hover:text-gold ${
                  isActive(link.href) ? "text-gold" : "text-cream"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Decorative gold line */}
        <div className="absolute bottom-1/4 left-1/2 h-px w-16 -translate-x-1/2 bg-gold/30" />
      </div>
    </>
  );
}
