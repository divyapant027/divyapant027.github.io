"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap-config";
import { prefersReducedMotion } from "@/lib/animations";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
}

export default function PageHero({
  title,
  subtitle,
  image,
  imageAlt,
}: PageHeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const accentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) {
      if (titleRef.current) gsap.set(titleRef.current, { opacity: 1 });
      if (subtitleRef.current) gsap.set(subtitleRef.current, { opacity: 1 });
      if (imageRef.current) gsap.set(imageRef.current, { opacity: 1 });
      if (accentRef.current) gsap.set(accentRef.current, { opacity: 1, scaleX: 1 });
      return;
    }

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    /* Gold accent line draws in first */
    if (accentRef.current) {
      tl.fromTo(
        accentRef.current,
        { opacity: 0, scaleX: 0 },
        { opacity: 1, scaleX: 1, duration: 0.6, transformOrigin: "left center" }
      );
    }

    /* Title fades up */
    if (titleRef.current) {
      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.9 },
        "-=0.3"
      );
    }

    /* Subtitle fades up */
    if (subtitleRef.current) {
      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.5"
      );
    }

    /* Hero image scales in gently */
    if (imageRef.current) {
      tl.fromTo(
        imageRef.current,
        { opacity: 0, scale: 1.04 },
        { opacity: 1, scale: 1, duration: 1.1 },
        "-=0.6"
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="hero-grain hero-vignette relative overflow-hidden bg-navy pt-36 pb-24 text-cream md:pt-44 md:pb-32"
    >

      <div className="section-padding relative z-10 mx-auto max-w-6xl">
        <div
          className={
            image
              ? "grid gap-12 md:grid-cols-2 md:items-center"
              : ""
          }
        >
          <div>
            {/* Gold accent line above title */}
            <div
              ref={accentRef}
              className="mb-6 h-px w-12 bg-gold"
              style={{ opacity: 0, transform: "scaleX(0)" }}
            />

            <h1
              ref={titleRef}
              className="font-heading leading-[1.1] tracking-[-0.01em]"
              style={{
                fontSize: "clamp(2.75rem, 5.5vw, 4.5rem)",
                opacity: 0,
              }}
            >
              {title}
            </h1>

            {subtitle && (
              <p
                ref={subtitleRef}
                className="mt-5 max-w-lg text-base font-light tracking-wide text-cream/60 md:text-lg"
                style={{ opacity: 0, lineHeight: 1.6 }}
              >
                {subtitle}
              </p>
            )}
          </div>

          {image && (
            <div
              ref={imageRef}
              className="relative aspect-[4/3] overflow-hidden rounded-lg"
              style={{ opacity: 0 }}
            >
              <Image
                src={image}
                alt={imageAlt || title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
