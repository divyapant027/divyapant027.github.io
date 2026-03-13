"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "@/lib/gsap-config";
import { prefersReducedMotion } from "@/lib/animations";
import { hero, heroImages } from "@/data/home";

const SLIDE_DURATION = 4500;

export default function HeroCollage() {
  const sectionRef = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const accentLineRef = useRef<HTMLSpanElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const showcaseRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const images = heroImages;
  const [activeIndex, setActiveIndex] = useState(0);

  /* Auto-advance slideshow */
  useEffect(() => {
    if (prefersReducedMotion()) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, SLIDE_DURATION);
    return () => clearInterval(interval);
  }, [images.length]);

  /* Entrance animations */
  useEffect(() => {
    if (
      !nameRef.current ||
      !taglineRef.current ||
      !ctaRef.current ||
      !showcaseRef.current ||
      !accentLineRef.current
    )
      return;

    if (prefersReducedMotion()) {
      gsap.set(
        [nameRef.current, taglineRef.current, ctaRef.current, accentLineRef.current],
        { opacity: 1 }
      );
      gsap.set(showcaseRef.current, { opacity: 1 });
      if (scrollRef.current) gsap.set(scrollRef.current, { opacity: 1 });
      return;
    }

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    /* Name character stagger */
    nameRef.current.innerHTML = hero.name
      .split("")
      .map(
        (char) =>
          `<span class="inline-block" style="opacity:0;transform:translateY(50px)">${char === " " ? "&nbsp;" : char}</span>`
      )
      .join("");
    nameRef.current.style.opacity = "1";
    const chars = nameRef.current.querySelectorAll("span");

    tl.to(chars, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.05,
      ease: "power4.out",
    });

    tl.fromTo(
      accentLineRef.current,
      { opacity: 0, scaleX: 0 },
      { opacity: 1, scaleX: 1, duration: 0.6, ease: "power2.out" },
      "-=0.3"
    );

    tl.fromTo(
      taglineRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "-=0.3"
    );

    tl.fromTo(
      ctaRef.current,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
      "-=0.4"
    );

    /* Image showcase reveals with cinematic clip-path */
    tl.fromTo(
      showcaseRef.current,
      { opacity: 0, clipPath: "inset(0 100% 0 0)" },
      {
        opacity: 1,
        clipPath: "inset(0 0% 0 0)",
        duration: 1.2,
        ease: "power3.inOut",
      },
      "-=0.5"
    );

    if (scrollRef.current) {
      tl.fromTo(
        scrollRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8 },
        "-=0.3"
      );
    }

    /* Parallax on scroll */
    if (sectionRef.current && showcaseRef.current) {
      gsap.to(showcaseRef.current, {
        y: "-25px",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
        },
      });
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="hero-grain hero-vignette relative min-h-screen overflow-hidden bg-navy text-cream"
    >
      <div className="relative z-10 mx-auto flex min-h-screen max-w-[90rem] items-center px-6 py-24 sm:px-10 lg:px-16 xl:px-20">
        <div className="flex w-full flex-col gap-10 lg:flex-row lg:items-center lg:gap-12 xl:gap-16">

          {/* ─── Left: Typography & CTA ─── */}
          <div className="relative z-20 flex shrink-0 flex-col lg:w-[38%] xl:w-[36%]">
            <h1
              ref={nameRef}
              className="font-heading leading-[0.95]"
              style={{
                fontSize: "clamp(2.5rem, 4.5vw, 4.5rem)",
                letterSpacing: "0.04em",
                opacity: 0,
              }}
            >
              {hero.name}
            </h1>

            <span
              ref={accentLineRef}
              className="gold-line mt-6 md:mt-8"
              style={{ opacity: 0, transformOrigin: "left" }}
            />

            <p
              ref={taglineRef}
              className="mt-4 max-w-sm text-sm font-light tracking-[0.08em] uppercase text-cream/65 md:text-base"
              style={{ opacity: 0, lineHeight: 1.7 }}
            >
              {hero.tagline}
            </p>

            <div ref={ctaRef} className="mt-10 flex flex-col gap-5" style={{ opacity: 0 }}>
              <Link
                href={hero.cta.href}
                className="group inline-flex items-center gap-3 text-sm font-medium tracking-[0.1em] uppercase text-gold transition-colors duration-300 hover:text-gold-light"
              >
                {hero.cta.label}
                <span className="inline-block h-px w-8 bg-gold transition-all duration-300 group-hover:w-12 group-hover:bg-gold-light" />
              </Link>
              <a
                href="/divya-pant-cv.docx"
                download
                className="group inline-flex items-center gap-2.5 text-[0.8125rem] font-medium tracking-[0.08em] uppercase text-cream/60 transition-colors duration-300 hover:text-cream/80"
              >
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-y-0.5">
                  <path d="M8 2v9M4.5 7.5 8 11l3.5-3.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3 13h10" strokeLinecap="round" />
                </svg>
                Download Resume
              </a>
            </div>
          </div>

          {/* ─── Right: Animated image showcase ─── */}
          <div className="relative flex-1">
            {/* Gold corner accents */}
            <span className="absolute -top-3 -right-3 hidden h-5 w-px bg-gold/25 lg:block" />
            <span className="absolute -top-3 -right-3 hidden h-px w-5 bg-gold/25 lg:block" />
            <span className="absolute -bottom-3 -left-3 hidden h-5 w-px bg-gold/25 lg:block" />
            <span className="absolute -bottom-3 -left-3 hidden h-px w-5 bg-gold/25 lg:block" />

            <div
              ref={showcaseRef}
              className="hero-showcase relative overflow-hidden rounded-lg"
              style={{ opacity: 0 }}
            >
              <div className="relative aspect-[3/4] sm:aspect-[3/4] lg:aspect-auto lg:h-[calc(100vh-11rem)]">
                {/* Stacked images — crossfade with scale */}
                {images.map((img, i) => (
                  <Image
                    key={img.src}
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    priority={i === 0}
                    className={`object-cover transition-all duration-1000 ease-in-out ${
                      i === activeIndex
                        ? "opacity-100 scale-100 hero-showcase-active"
                        : "opacity-0 scale-105"
                    }`}
                  />
                ))}

                {/* Bottom gradient for caption readability */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />

                {/* Editorial slide counter — top right */}
                <div className="absolute top-5 right-5 z-10 flex items-baseline gap-1 sm:top-6 sm:right-6">
                  <span className="text-sm font-light tabular-nums text-cream/70">
                    {String(activeIndex + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[0.6rem] text-cream/50">/</span>
                  <span className="text-[0.6rem] tabular-nums text-cream/50">
                    {String(images.length).padStart(2, "0")}
                  </span>
                </div>

                {/* Role captions — stacked, only active shown */}
                <div className="absolute inset-x-0 bottom-0 z-10 px-5 pb-5 sm:px-6 sm:pb-6">
                  {images.map((img, i) => (
                    <p
                      key={i}
                      className={`absolute bottom-5 left-5 text-[0.65rem] font-medium tracking-[0.15em] uppercase transition-all duration-700 sm:bottom-6 sm:left-6 ${
                        i === activeIndex
                          ? "translate-y-0 text-cream/80 opacity-100"
                          : "translate-y-2 text-cream/80 opacity-0"
                      }`}
                    >
                      {img.role}
                    </p>
                  ))}
                </div>

                {/* Progress dots */}
                <div className="absolute bottom-5 right-5 z-10 flex items-center gap-1 sm:bottom-6 sm:right-6">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIndex(i)}
                      className="flex h-8 w-8 items-center justify-center"
                      aria-label={`Show image ${i + 1}`}
                    >
                      <span
                        className={`block rounded-full transition-all duration-500 ${
                          i === activeIndex
                            ? "h-1.5 w-6 bg-gold/80"
                            : "h-1.5 w-1.5 bg-cream/25 hover:bg-cream/50"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Scroll indicator ─── */}
      <div
        ref={scrollRef}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3"
        style={{ opacity: 0 }}
      >
        <span className="text-[0.6rem] font-medium uppercase tracking-[0.25em] text-cream/60">
          Scroll
        </span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
