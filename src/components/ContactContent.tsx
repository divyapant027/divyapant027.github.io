"use client";

import { useRef, useEffect } from "react";
import { contactInfo, collaborationAreas } from "@/data/contact";
import {
  createScrollReveal,
  createStaggerReveal,
} from "@/lib/animations";

const icons: Record<string, React.ReactNode> = {
  flask: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
      <path d="M9 3h6M10 3v6.5L4 20h16l-6-10.5V3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.5 16h9" strokeLinecap="round" />
    </svg>
  ),
  mic: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
      <rect x="9" y="2" width="6" height="11" rx="3" />
      <path d="M5 10a7 7 0 0 0 14 0" strokeLinecap="round" />
      <path d="M12 17v4M8 21h8" strokeLinecap="round" />
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

export default function ContactContent() {
  const infoRef = useRef<HTMLDivElement>(null);
  const areasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (infoRef.current) createScrollReveal(infoRef.current);
    if (areasRef.current) {
      const cards = areasRef.current.querySelectorAll("[data-area]");
      createStaggerReveal(Array.from(cards), areasRef.current, {
        stagger: 0.12,
        y: 50,
      });
    }
  }, []);

  return (
    <>
      {/* Contact Info */}
      <section className="bg-cream py-28 md:py-36">
        <div
          ref={infoRef}
          className="section-padding mx-auto max-w-2xl text-center"
          style={{ opacity: 0 }}
        >
          <p className="text-[0.9375rem] leading-relaxed text-text-light md:text-base" style={{ lineHeight: 1.7 }}>
            Whether you&apos;re interested in collaboration, speaking engagements, or
            simply want to say hello, I&apos;d love to hear from you.
          </p>

          <div className="mt-12 space-y-8">
            {/* Email — visually prominent */}
            <div>
              <div className="mx-auto mb-4 h-px w-8 bg-gold/40" />
              <a
                href={`mailto:${contactInfo.email}`}
                className="group inline-block text-xl font-semibold text-navy transition-colors duration-300 hover:text-gold md:text-2xl"
              >
                <span className="relative">
                  {contactInfo.email}
                  <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-100 bg-gold/50 transition-all duration-400 group-hover:bg-gold group-hover:scale-x-100" />
                </span>
              </a>
            </div>

            {/* Socials */}
            <div className="flex items-center justify-center gap-8">
              {contactInfo.socials.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-gold-underline text-[0.8125rem] font-medium tracking-wide text-text-light transition-colors duration-300 hover:text-gold"
                >
                  {social.label}
                </a>
              ))}
            </div>

            {/* CV Download — refined button */}
            <div className="pt-2">
              <a
                href={contactInfo.cvUrl}
                download
                className="group inline-flex items-center gap-2 rounded-lg border border-navy bg-navy px-8 py-3.5 text-[0.8125rem] font-semibold tracking-[0.08em] text-cream transition-all duration-400 hover:border-gold hover:bg-gold hover:text-navy"
              >
                {contactInfo.cvLabel}
                <svg
                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-y-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Areas */}
      <section className="bg-white py-28 md:py-36">
        <div className="section-padding mx-auto max-w-5xl">
          <div className="text-center">
            <span className="section-label">Partnership</span>
            <h2
              className="mt-3 font-heading text-navy leading-[1.15]"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Areas for Collaboration
            </h2>
          </div>

          <div
            ref={areasRef}
            className="mt-16 grid gap-6 sm:grid-cols-2"
          >
            {collaborationAreas.map((area) => (
              <div
                key={area.title}
                data-area
                className="card-elegant group relative overflow-hidden rounded-lg border border-cream-dark/70 bg-white p-8"
                style={{ opacity: 0 }}
              >
                {/* Gold top accent */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-gold/40 via-gold/20 to-transparent" />

                {/* Icon */}
                <div className="text-gold/70 transition-colors duration-300 group-hover:text-gold">
                  {icons[area.icon]}
                </div>

                <h3 className="mt-5 font-heading text-xl font-semibold text-navy">
                  {area.title}
                </h3>

                <p className="mt-3 text-[0.8125rem] leading-relaxed text-text-light md:text-[0.9375rem]" style={{ lineHeight: 1.7 }}>
                  {area.description}
                </p>

                {/* Bottom accent line slides in on hover */}
                <div className="absolute right-0 bottom-0 left-0 h-px origin-left scale-x-0 bg-gold/50 transition-transform duration-500 group-hover:scale-x-100" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
