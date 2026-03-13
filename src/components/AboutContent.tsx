"use client";

import { useRef, useEffect } from "react";
import {
  originStory,
  academicJourney,
  advisors,
  expandedStats,
  quotes,
} from "@/data/about";
import {
  createScrollReveal,
  createStaggerReveal,
} from "@/lib/animations";
import Timeline from "@/components/Timeline";
import StatBar from "@/components/StatBar";

export default function AboutContent() {
  const originRef = useRef<HTMLDivElement>(null);
  const advisorsRef = useRef<HTMLDivElement>(null);
  const quotesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (originRef.current) {
      const paragraphs = originRef.current.querySelectorAll("[data-para]");
      createStaggerReveal(Array.from(paragraphs), originRef.current, {
        stagger: 0.15,
      });
    }

    if (advisorsRef.current) {
      const cards = advisorsRef.current.querySelectorAll("[data-advisor]");
      createStaggerReveal(Array.from(cards), advisorsRef.current, {
        stagger: 0.1,
      });
    }

    if (quotesRef.current) createScrollReveal(quotesRef.current);
  }, []);

  return (
    <>
      {/* Origin Story */}
      <section className="bg-cream py-28 md:py-36">
        <div className="section-padding mx-auto max-w-3xl">
          {/* Section label */}
          <span className="section-label">The Beginning</span>

          <h2
            className="mt-3 font-heading text-navy leading-[1.15]"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            {originStory.heading}
          </h2>

          <div ref={originRef} className="mt-8 space-y-6">
            {originStory.paragraphs.map((p, i) => (
              <p
                key={i}
                data-para
                className="text-[0.9375rem] text-text md:text-base"
                style={{ lineHeight: 1.8, opacity: 0 }}
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Key Quotes */}
      <section className="bg-navy py-20 md:py-28">
        <div
          ref={quotesRef}
          className="section-padding mx-auto max-w-3xl"
          style={{ opacity: 0 }}
        >
          {quotes.map((q, i) => (
            <blockquote
              key={i}
              className={`blockquote-elegant ${
                i > 0 ? "mt-12 border-t border-cream/[0.06] pt-12" : ""
              }`}
            >
              <p
                className="font-heading text-xl leading-relaxed text-cream italic md:text-2xl"
                style={{ lineHeight: 1.5 }}
              >
                &ldquo;{q.text}&rdquo;
              </p>
              <footer className="mt-5 flex items-center gap-3">
                <div className="h-px w-4 bg-gold/40" />
                <div>
                  <cite className="text-[0.8125rem] font-medium not-italic text-gold">
                    {q.attribution}
                  </cite>
                  <p className="mt-0.5 text-[0.75rem] text-cream/55">
                    {q.source}
                  </p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* Academic Timeline */}
      <section className="bg-cream py-28 md:py-36">
        <div className="section-padding mx-auto max-w-5xl">
          <div className="text-center">
            <span className="section-label">Education</span>
            <h2
              className="mt-3 font-heading text-navy leading-[1.15]"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              {academicJourney.heading}
            </h2>
          </div>
          <div className="mt-16">
            <Timeline entries={academicJourney.entries} />
          </div>
        </div>
      </section>

      {/* Advisors & Collaborators */}
      <section className="bg-white py-28 md:py-36">
        <div className="section-padding mx-auto max-w-5xl">
          <div className="text-center">
            <span className="section-label">Mentorship</span>
            <h2
              className="mt-3 font-heading text-navy leading-[1.15]"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Advisors & Collaborators
            </h2>
          </div>

          <div
            ref={advisorsRef}
            className="mt-16 grid gap-6 md:grid-cols-3"
          >
            {advisors.map((advisor) => (
              <div
                key={advisor.name}
                data-advisor
                className="card-elegant relative overflow-hidden rounded-lg border border-cream-dark/70 bg-white p-7"
                style={{ opacity: 0 }}
              >
                {/* Gold top accent */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-gold/40 via-gold/20 to-transparent" />

                <h3 className="font-heading text-lg font-semibold text-navy">
                  {advisor.name}
                </h3>
                <p className="mt-1.5 text-[0.8125rem] font-medium text-gold">
                  {advisor.role}
                </p>
                <p className="mt-0.5 text-[0.75rem] text-text-light/70">
                  {advisor.org}
                </p>
                <p className="mt-4 text-[0.8125rem] leading-relaxed text-text-light">
                  {advisor.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expanded Stats */}
      <section className="bg-navy py-20 md:py-24">
        <div className="section-padding mx-auto max-w-5xl">
          <StatBar stats={expandedStats} dark />
        </div>
      </section>
    </>
  );
}
