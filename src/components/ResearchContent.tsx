"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import {
  carbonAway,
  carbonMarkets,
  farmerTraining,
  academicResearch,
  publications,
  conferenceImages,
} from "@/data/research";
import {
  createScrollReveal,
  createStaggerReveal,
  createCountUp,
} from "@/lib/animations";
import PhotoGallery from "@/components/PhotoGallery";

export default function ResearchContent() {
  const carbonAwayRef = useRef<HTMLDivElement>(null);
  const carbonStatsRef = useRef<HTMLDivElement>(null);
  const marketsRef = useRef<HTMLDivElement>(null);
  const farmerRef = useRef<HTMLDivElement>(null);
  const academicRef = useRef<HTMLDivElement>(null);
  const pubsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carbonAwayRef.current)
      createScrollReveal(carbonAwayRef.current);

    if (carbonStatsRef.current) {
      const statEls = carbonStatsRef.current.querySelectorAll("[data-stat]");
      statEls.forEach((el) => {
        const value = parseInt(el.getAttribute("data-stat") || "0", 10);
        const suffix = el.getAttribute("data-suffix") || "";
        createCountUp(el, value, suffix);
      });
      const containers =
        carbonStatsRef.current.querySelectorAll("[data-stat-container]");
      createStaggerReveal(Array.from(containers), carbonStatsRef.current, {
        stagger: 0.1,
      });
    }

    if (marketsRef.current)
      createScrollReveal(marketsRef.current);
    if (farmerRef.current)
      createScrollReveal(farmerRef.current);

    if (academicRef.current) {
      const items = academicRef.current.querySelectorAll("[data-research-item]");
      createStaggerReveal(Array.from(items), academicRef.current, {
        stagger: 0.12,
      });
    }

    if (pubsRef.current) {
      const items = pubsRef.current.querySelectorAll("[data-pub]");
      createStaggerReveal(Array.from(items), pubsRef.current, {
        stagger: 0.08,
      });
    }
  }, []);

  return (
    <>
      {/* Carbon Away */}
      <section className="bg-cream py-28 md:py-36">
        <div className="section-padding mx-auto max-w-6xl">
          <div className="grid gap-14 md:grid-cols-2 md:items-start">
            <div ref={carbonAwayRef} style={{ opacity: 0 }}>
              <span className="section-label">
                Founded {carbonAway.founded}
              </span>
              <h2
                className="mt-3 font-heading text-navy leading-[1.15]"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                {carbonAway.heading}
              </h2>
              <p className="mt-2 text-base font-light tracking-wide text-text-light md:text-lg">
                {carbonAway.tagline}
              </p>

              <div className="mt-6 space-y-5">
                {carbonAway.description.map((p, i) => (
                  <p
                    key={i}
                    className="text-[0.9375rem] text-text md:text-base"
                    style={{ lineHeight: 1.8 }}
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {/* Image with elegant treatment */}
              <div className="image-refined relative aspect-[4/3]">
                <Image
                  src={carbonAway.image}
                  alt={carbonAway.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* Carbon Away Stats */}
              <div
                ref={carbonStatsRef}
                className="grid grid-cols-2 gap-4 rounded-lg bg-navy p-7 sm:grid-cols-3"
              >
                {carbonAway.stats.map((stat) => (
                  <div
                    key={stat.label}
                    data-stat-container
                    className="text-center"
                    style={{ opacity: 0 }}
                  >
                    <span
                      data-stat={stat.value}
                      data-suffix={stat.suffix}
                      className="stat-value text-2xl text-cream md:text-3xl"
                    >
                      {stat.prefix || ""}0{stat.suffix}
                    </span>
                    <p className="stat-label mt-2 text-cream/60">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carbon Markets Op-Ed */}
      <section className="bg-navy py-28 text-cream md:py-36">
        <div
          ref={marketsRef}
          className="section-padding mx-auto max-w-3xl"
          style={{ opacity: 0 }}
        >
          <span className="section-label">
            Op-Ed &middot; {carbonMarkets.source}
          </span>

          <h2
            className="mt-4 font-heading leading-[1.15]"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            {carbonMarkets.heading}
          </h2>

          <p className="mt-3 text-[0.8125rem] text-cream/60">
            Co-authored with {carbonMarkets.coAuthor}
          </p>

          <div className="mt-6 space-y-5">
            {carbonMarkets.description.map((p, i) => (
              <p
                key={i}
                className="text-[0.9375rem] leading-relaxed text-cream/70"
                style={{ lineHeight: 1.8 }}
              >
                {p}
              </p>
            ))}
          </div>

          {/* Key figure callout — editorial style */}
          <div className="mt-12 flex items-center gap-8 rounded-lg border border-gold/20 bg-navy-light/50 px-8 py-7">
            <span className="stat-value text-4xl text-gold md:text-5xl">
              {carbonMarkets.keyFigure}
            </span>
            <div>
              <div className="mb-2 h-px w-5 bg-gold/30" />
              <span className="text-[0.8125rem] leading-relaxed text-cream/60">
                {carbonMarkets.keyFigureLabel}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Farmer Training */}
      <section className="bg-cream py-28 md:py-36">
        <div className="section-padding mx-auto max-w-6xl">
          <div className="grid gap-14 md:grid-cols-2 md:items-start">
            <div ref={farmerRef} style={{ opacity: 0 }}>
              <span className="section-label">Community Impact</span>

              <h2
                className="mt-3 font-heading text-navy leading-[1.15]"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                {farmerTraining.heading}
              </h2>

              <div className="mt-6 space-y-5">
                {farmerTraining.description.map((p, i) => (
                  <p
                    key={i}
                    className="text-[0.9375rem] text-text md:text-base"
                    style={{ lineHeight: 1.8 }}
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>
            <PhotoGallery images={farmerTraining.images} columns={2} />
          </div>
        </div>
      </section>

      {/* Academic Research */}
      <section className="bg-white py-28 md:py-36">
        <div className="section-padding mx-auto max-w-5xl">
          <div className="text-center">
            <span className="section-label">Research Programs</span>
            <h2
              className="mt-3 font-heading text-navy leading-[1.15]"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              {academicResearch.heading}
            </h2>
          </div>

          <div
            ref={academicRef}
            className="mt-16 grid gap-6 md:grid-cols-2"
          >
            {academicResearch.items.map((item) => (
              <div
                key={item.title}
                data-research-item
                className="card-elegant relative overflow-hidden rounded-lg border border-cream-dark/70 bg-white p-7"
                style={{ opacity: 0 }}
              >
                {/* Gold top accent */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-gold/40 via-gold/20 to-transparent" />

                <span className="inline-block rounded-full border border-gold/25 bg-gold/8 px-3.5 py-1 text-[0.6875rem] font-semibold tracking-[0.1em] text-gold">
                  {item.year}
                </span>
                <h3 className="mt-4 font-heading text-lg font-semibold leading-snug text-navy">
                  {item.title}
                </h3>
                <p className="mt-3 text-[0.8125rem] leading-relaxed text-text-light">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="bg-cream py-28 md:py-36">
        <div className="section-padding mx-auto max-w-4xl">
          <div className="text-center">
            <span className="section-label">12 Papers &middot; 110+ Citations</span>
            <h2
              className="mt-3 font-heading text-navy leading-[1.15]"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Publications
            </h2>
          </div>

          <div ref={pubsRef} className="mt-16 space-y-4">
            {publications.map((pub) => (
              <div
                key={pub.title}
                data-pub
                className="card-elegant relative overflow-hidden rounded-lg border border-cream-dark/70 bg-white px-7 py-5"
                style={{ opacity: 0 }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    {pub.url ? (
                      <a
                        href={pub.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-heading text-[0.9375rem] font-semibold leading-snug text-navy transition-colors duration-300 hover:text-gold"
                      >
                        {pub.title}
                      </a>
                    ) : (
                      <h3 className="font-heading text-[0.9375rem] font-semibold leading-snug text-navy">
                        {pub.title}
                      </h3>
                    )}
                    <p className="mt-1.5 text-[0.8125rem] text-text-light">
                      {pub.authors}
                    </p>
                    <p className="mt-1 text-[0.75rem] italic text-text-light/70">
                      {pub.journal}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full border border-gold/25 bg-gold/8 px-3 py-0.5 text-[0.6875rem] font-semibold tracking-[0.1em] text-gold">
                    {pub.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conference Photos */}
      <section className="bg-navy py-20 md:py-24">
        <div className="section-padding mx-auto max-w-4xl">
          <div className="text-center">
            <span className="section-label text-gold/70">Presentations</span>
            <h3 className="mt-2 font-heading text-xl text-cream md:text-2xl">
              At Conferences & Presentations
            </h3>
          </div>
          <div className="mt-10">
            <PhotoGallery images={conferenceImages} columns={2} />
          </div>
        </div>
      </section>
    </>
  );
}
