"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import {
  missNepal,
  academicHonors,
  internationalRecognition,
  communityLeadership,
  galleryImages,
} from "@/data/recognition";
import {
  createScrollReveal,
  createStaggerReveal,
} from "@/lib/animations";
import PhotoGallery from "@/components/PhotoGallery";

export default function RecognitionContent() {
  const missNepalRef = useRef<HTMLDivElement>(null);
  const honorsRef = useRef<HTMLDivElement>(null);
  const internationalRef = useRef<HTMLDivElement>(null);
  const communityRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (missNepalRef.current) createScrollReveal(missNepalRef.current);

    if (honorsRef.current) {
      const cards = honorsRef.current.querySelectorAll("[data-honor]");
      createStaggerReveal(Array.from(cards), honorsRef.current, {
        stagger: 0.1,
      });
    }

    if (internationalRef.current) {
      const cards =
        internationalRef.current.querySelectorAll("[data-intl]");
      createStaggerReveal(Array.from(cards), internationalRef.current, {
        stagger: 0.12,
      });
    }

    if (communityRef.current) {
      const cards =
        communityRef.current.querySelectorAll("[data-community]");
      createStaggerReveal(Array.from(cards), communityRef.current, {
        stagger: 0.12,
      });
    }
  }, []);

  return (
    <>
      {/* Miss Nepal Feature */}
      <section className="bg-cream py-28 md:py-36">
        <div className="section-padding mx-auto max-w-6xl">
          <div className="grid gap-14 md:grid-cols-2 md:items-start">
            <div ref={missNepalRef} style={{ opacity: 0 }}>
              <span className="section-label">
                {missNepal.date} &middot; {missNepal.venue}
              </span>

              <h2
                className="mt-3 font-heading text-navy leading-[1.15]"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                {missNepal.heading}
              </h2>

              <p className="mt-2 text-lg font-medium text-gold">
                {missNepal.title}
              </p>

              <div className="mt-6 space-y-5">
                {missNepal.description.map((p, i) => (
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

            {/* Image stack with refined treatment */}
            <div className="space-y-4">
              {missNepal.images.map((img, i) => (
                <div
                  key={i}
                  className={`image-refined relative ${
                    i === 0 ? "aspect-[4/3]" : "aspect-[16/9]"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority={i === 0}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Academic Honors */}
      <section className="bg-navy py-28 text-cream md:py-36">
        <div className="section-padding mx-auto max-w-5xl">
          <div className="text-center">
            <span className="section-label text-gold/70">Achievements</span>
            <h2
              className="mt-3 font-heading leading-[1.15]"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Academic Honors
            </h2>
          </div>

          <div
            ref={honorsRef}
            className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {academicHonors.map((honor, i) => (
              <div
                key={i}
                data-honor
                className="card-elegant-dark relative overflow-hidden rounded-lg border border-cream/[0.08] bg-navy-light p-7"
                style={{ opacity: 0 }}
              >
                {/* Gold top accent */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-gold/30 via-gold/15 to-transparent" />

                <span className="inline-block rounded-full border border-gold/25 bg-gold/10 px-3.5 py-1 text-[0.6875rem] font-semibold tracking-[0.1em] text-gold">
                  {honor.year}
                </span>
                <h3 className="mt-4 font-heading text-lg font-semibold leading-snug">
                  {honor.title}
                </h3>
                <p className="mt-1.5 text-[0.8125rem] text-cream/60">
                  {honor.org}
                </p>
                <p className="mt-3 text-[0.8125rem] leading-relaxed text-cream/65">
                  {honor.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* International Recognition */}
      <section className="bg-white py-28 md:py-36">
        <div className="section-padding mx-auto max-w-3xl">
          <div className="text-center">
            <span className="section-label">Global Impact</span>
            <h2
              className="mt-3 font-heading text-navy leading-[1.15]"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              International Recognition
            </h2>
          </div>

          <div
            ref={internationalRef}
            className="mt-16 space-y-6"
          >
            {internationalRecognition.map((item, i) => (
              <div
                key={i}
                data-intl
                className="card-elegant relative overflow-hidden rounded-lg border border-cream-dark/70 bg-white p-8"
                style={{ opacity: 0 }}
              >
                {/* Gold left accent */}
                <div className="absolute top-0 left-0 bottom-0 w-px bg-gradient-to-b from-gold/50 via-gold/20 to-transparent" />

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-heading text-xl font-semibold leading-snug text-navy">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-[0.8125rem] text-text-light/70">
                      {item.org}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full border border-gold/25 bg-gold/8 px-3.5 py-1 text-[0.6875rem] font-semibold tracking-[0.1em] text-gold">
                    {item.year}
                  </span>
                </div>
                <p className="mt-4 text-[0.9375rem] leading-relaxed text-text" style={{ lineHeight: 1.7 }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Leadership */}
      <section className="bg-cream py-28 md:py-36">
        <div className="section-padding mx-auto max-w-3xl">
          <div className="text-center">
            <span className="section-label">Leadership</span>
            <h2
              className="mt-3 font-heading text-navy leading-[1.15]"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Community Leadership
            </h2>
          </div>

          <div
            ref={communityRef}
            className="mt-16 space-y-6"
          >
            {communityLeadership.map((item, i) => (
              <div
                key={i}
                data-community
                className="card-elegant relative overflow-hidden rounded-lg border border-cream-dark/70 bg-white p-8"
                style={{ opacity: 0 }}
              >
                {/* Gold left accent */}
                <div className="absolute top-0 left-0 bottom-0 w-px bg-gradient-to-b from-gold/50 via-gold/20 to-transparent" />

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-heading text-xl font-semibold leading-snug text-navy">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-[0.8125rem] text-text-light/70">
                      {item.org}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full border border-gold/25 bg-gold/8 px-3.5 py-1 text-[0.6875rem] font-semibold tracking-[0.1em] text-gold">
                    {item.year}
                  </span>
                </div>
                <p className="mt-4 text-[0.9375rem] leading-relaxed text-text" style={{ lineHeight: 1.7 }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="bg-navy py-20 md:py-24">
        <div className="section-padding mx-auto max-w-5xl">
          <div className="text-center">
            <span className="section-label text-gold/70">Moments</span>
            <h3 className="mt-2 font-heading text-xl text-cream md:text-2xl">
              Gallery
            </h3>
          </div>
          <div className="mt-10">
            <PhotoGallery images={galleryImages} columns={3} />
          </div>
        </div>
      </section>
    </>
  );
}
