"use client";

import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap-config";
import {
  createLineReveal,
  prefersReducedMotion,
} from "@/lib/animations";

interface TimelineEntry {
  year: string;
  title: string;
  org: string;
  description: string;
}

interface TimelineProps {
  entries: TimelineEntry[];
  dark?: boolean;
}

export default function Timeline({ entries, dark = false }: TimelineProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    if (lineRef.current) {
      createLineReveal(lineRef.current, sectionRef.current);
    }

    const entryEls = sectionRef.current.querySelectorAll("[data-entry]");
    if (prefersReducedMotion()) {
      gsap.set(entryEls, { opacity: 1, x: 0 });
    } else {
      entryEls.forEach((entry, i) => {
        const isLeft = i % 2 === 0;
        gsap.fromTo(
          entry,
          { opacity: 0, x: isLeft ? -30 : 30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: entry,
              start: "top 85%",
            },
          }
        );
      });
    }
  }, []);

  const textColor = dark ? "text-cream" : "text-navy";
  const textMuted = dark ? "text-cream/60" : "text-text-light";

  return (
    <div ref={sectionRef} className="relative">
      {/* Center line (desktop) */}
      <div
        ref={lineRef}
        className="absolute top-0 left-1/2 hidden h-full w-px origin-top -translate-x-1/2 md:block"
        style={{
          transform: "scaleY(0)",
          background: "linear-gradient(to bottom, var(--color-gold), rgba(201,169,110,0.15))",
        }}
      />

      <div className="space-y-14 md:space-y-0">
        {entries.map((entry, i) => {
          const isLeft = i % 2 === 0;
          return (
            <div
              key={i}
              data-entry
              className={`relative md:flex md:items-start ${
                isLeft ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              style={{ opacity: 0 }}
            >
              <div
                className={`md:w-1/2 ${
                  isLeft ? "md:pr-14 md:text-right" : "md:pl-14"
                }`}
              >
                {/* Year badge */}
                <span className="inline-block rounded-full border border-gold/30 bg-gold/10 px-4 py-1 text-[0.6875rem] font-semibold tracking-[0.12em] text-gold">
                  {entry.year}
                </span>

                <h3
                  className={`mt-4 font-heading text-xl font-semibold leading-snug md:text-2xl ${textColor}`}
                >
                  {entry.title}
                </h3>

                <p className="mt-1.5 text-sm font-medium text-gold-light/80">
                  {entry.org}
                </p>

                <p
                  className={`mt-3 text-sm leading-relaxed md:text-[0.9375rem] ${textMuted}`}
                  style={{ lineHeight: 1.7 }}
                >
                  {entry.description}
                </p>
              </div>

              {/* Center dot — refined with gold ring */}
              <div className="absolute top-2 left-1/2 hidden -translate-x-1/2 md:block">
                <div className="relative flex h-4 w-4 items-center justify-center">
                  <div className="absolute h-4 w-4 rounded-full border border-gold/40" />
                  <div className="h-2 w-2 rounded-full bg-gold" />
                </div>
              </div>

              <div className="hidden md:block md:w-1/2" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
