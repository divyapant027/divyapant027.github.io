"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { introSnapshot, impactPillars, featuredPress, stats } from "@/data/home";
import {
  createScrollReveal,
  createStaggerReveal,
  createCountUp,
} from "@/lib/animations";

const icons: Record<string, React.ReactNode> = {
  leaf: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
      <path d="M12 21c0 0-8-4-8-11a8 8 0 0 1 16 0c0 7-8 11-8 11Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 21V10" strokeLinecap="round" />
      <path d="M8 14c2-2 4-2.5 4-4" strokeLinecap="round" />
    </svg>
  ),
  flask: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
      <path d="M9 3h6M10 3v6.5L4 20h16l-6-10.5V3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.5 16h9" strokeLinecap="round" />
    </svg>
  ),
  users: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
      <circle cx="9" cy="7" r="3" />
      <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="17" cy="8" r="2.5" />
      <path d="M21 21v-1.5a3 3 0 0 0-2-2.83" strokeLinecap="round" />
    </svg>
  ),
  globe: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
      <circle cx="12" cy="12" r="10" />
      <ellipse cx="12" cy="12" rx="4" ry="10" />
      <path d="M2 12h20" strokeLinecap="round" />
    </svg>
  ),
};

export default function HomeContent() {
  const introRef = useRef<HTMLDivElement>(null);
  const pillarsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const pressRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (introRef.current) createScrollReveal(introRef.current);

    if (pillarsRef.current) {
      const cards = pillarsRef.current.querySelectorAll("[data-card]");
      createStaggerReveal(Array.from(cards), pillarsRef.current, {
        stagger: 0.12,
        y: 50,
      });
    }

    if (statsRef.current) {
      const statEls = statsRef.current.querySelectorAll("[data-stat]");
      statEls.forEach((el) => {
        const value = parseInt(el.getAttribute("data-stat") || "0", 10);
        const suffix = el.getAttribute("data-suffix") || "";
        createCountUp(el, value, suffix);
      });
      const containers =
        statsRef.current.querySelectorAll("[data-stat-container]");
      createStaggerReveal(Array.from(containers), statsRef.current, {
        stagger: 0.1,
      });
    }

    if (pressRef.current) createScrollReveal(pressRef.current, { delay: 0.1 });
    if (ctaRef.current) createScrollReveal(ctaRef.current);
  }, []);

  return (
    <>
      {/* ─── Intro Snapshot ─────────────────────────────────── */}
      <section className="bg-cream py-28 md:py-36">
        <div
          ref={introRef}
          className="section-padding mx-auto max-w-2xl text-center"
          style={{ opacity: 0 }}
        >
          {/* Small decorative gold line */}
          <span className="gold-line mx-auto mb-8" />
          <h2
            className="font-heading text-navy"
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
            }}
          >
            {introSnapshot.heading}
          </h2>
          <p
            className="mt-8 text-base leading-relaxed text-text-light md:text-lg"
            style={{ lineHeight: 1.8 }}
          >
            {introSnapshot.text}
          </p>
          <Link
            href="/about"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-medium tracking-wide text-gold transition-colors hover:text-gold-light"
          >
            Read the full story
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              &rarr;
            </span>
          </Link>
        </div>
      </section>

      {/* ─── Impact Pillars ─────────────────────────────────── */}
      <section className="bg-white py-28 md:py-36">
        <div className="section-padding mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-text-light">
              What I Do
            </p>
            <h2
              className="mt-4 font-heading text-navy"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                lineHeight: 1.2,
                letterSpacing: "-0.01em",
              }}
            >
              Areas of Impact
            </h2>
          </div>
          <div
            ref={pillarsRef}
            className="mt-16 grid gap-6 sm:grid-cols-2 lg:gap-8"
          >
            {impactPillars.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                data-card
                className="impact-card group"
                style={{ opacity: 0 }}
              >
                <div className="text-gold/80 transition-colors duration-300 group-hover:text-gold">
                  {icons[card.icon]}
                </div>
                <h3 className="mt-5 font-heading text-xl font-semibold text-navy">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-light md:text-[0.9375rem]" style={{ lineHeight: 1.7 }}>
                  {card.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-xs font-medium tracking-wide text-gold opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1">
                  Learn more
                  <span>&rarr;</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Stats Strip ────────────────────────────────────── */}
      <section className="bg-navy py-20 md:py-24">
        <div
          ref={statsRef}
          className="section-padding mx-auto grid max-w-5xl grid-cols-2 gap-10 md:grid-cols-4 md:gap-8"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              data-stat-container
              className="relative text-center"
              style={{ opacity: 0 }}
            >
              {/* Subtle gold top dot */}
              <span className="mx-auto mb-4 block h-1 w-1 rounded-full bg-gold/40" />
              <span
                data-stat={stat.value}
                data-suffix={stat.suffix}
                className="stat-value text-cream block text-4xl md:text-5xl"
              >
                0{stat.suffix}
              </span>
              <p className="stat-label mt-3 text-cream">
                {stat.label}
              </p>
              {/* Vertical divider between stats (hidden on last) */}
              {i < stats.length - 1 && (
                <span className="absolute right-0 top-1/2 hidden h-10 w-px -translate-y-1/2 bg-cream/10 md:block" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ─── Featured Press Strip ───────────────────────────── */}
      <section className="bg-cream py-16 md:py-20">
        <div
          ref={pressRef}
          className="section-padding mx-auto max-w-5xl text-center"
          style={{ opacity: 0 }}
        >
          <p className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-text-light">
            As Featured In
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-y-4">
            {featuredPress.map((item, i) => (
              <span key={item.outlet} className="inline-flex items-center">
                <Link
                  href={item.href}
                  className="text-base font-semibold text-navy/50 transition-colors duration-300 hover:text-gold md:text-lg"
                >
                  {item.outlet}
                </Link>
                {/* Separator dot between items */}
                {i < featuredPress.length - 1 && (
                  <span className="press-separator mx-5 md:mx-7" />
                )}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Banner ─────────────────────────────────────── */}
      <section className="cta-pattern relative overflow-hidden bg-navy py-24 md:py-32">
        {/* Subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light/50 to-navy pointer-events-none" />
        <div
          ref={ctaRef}
          className="section-padding relative z-10 mx-auto max-w-2xl text-center"
          style={{ opacity: 0 }}
        >
          <span className="gold-line mx-auto mb-8" />
          <h2
            className="font-heading text-cream"
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
            }}
          >
            Interested in collaborating?
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-cream/65 md:text-base" style={{ lineHeight: 1.7 }}>
            Whether it&apos;s research partnerships, speaking engagements, or community projects, let&apos;s create impact together.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block rounded-sm bg-gold px-8 py-3.5 text-sm font-semibold tracking-[0.08em] uppercase text-navy transition-all duration-300 hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20"
            >
              Get in Touch
            </Link>
            <Link
              href="/research"
              className="inline-block rounded-sm border border-cream/20 px-8 py-3.5 text-sm font-semibold tracking-[0.08em] uppercase text-cream/70 transition-all duration-300 hover:border-gold/50 hover:text-gold"
            >
              Explore Research
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
