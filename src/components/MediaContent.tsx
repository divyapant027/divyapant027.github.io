"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import {
  videos,
  articles,
  oped,
  featuredOutlets,
} from "@/data/media";
import {
  createScrollReveal,
  createStaggerReveal,
} from "@/lib/animations";
import VideoCard from "@/components/VideoCard";
import ArticleCard from "@/components/ArticleCard";

export default function MediaContent() {
  const videosRef = useRef<HTMLDivElement>(null);
  const articlesRef = useRef<HTMLDivElement>(null);
  const opedRef = useRef<HTMLDivElement>(null);
  const outletRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (videosRef.current) {
      const cards = videosRef.current.querySelectorAll("[data-video-card]");
      createStaggerReveal(Array.from(cards), videosRef.current, {
        stagger: 0.12,
      });
    }

    if (articlesRef.current) {
      const cards = articlesRef.current.querySelectorAll("[data-article-card]");
      createStaggerReveal(Array.from(cards), articlesRef.current, {
        stagger: 0.12,
      });
    }

    if (opedRef.current) createScrollReveal(opedRef.current);
    if (outletRef.current) createScrollReveal(outletRef.current, { delay: 0.1 });
  }, []);

  return (
    <>
      {/* YouTube Interviews */}
      <section className="bg-navy py-28 text-cream md:py-36">
        <div className="section-padding mx-auto max-w-6xl">
          <div className="text-center">
            <span className="section-label text-gold/70">Interviews</span>
            <h2
              className="mt-3 font-heading leading-[1.15]"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Video Interviews
            </h2>
            <p className="mx-auto mt-4 max-w-md text-[0.9375rem] text-cream/65" style={{ lineHeight: 1.6 }}>
              Featured on channels reaching over 5 million subscribers combined.
            </p>
          </div>

          <div
            ref={videosRef}
            className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {videos.map((video) => (
              <div key={video.id + video.channel} data-video-card style={{ opacity: 0 }}>
                <VideoCard {...video} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Articles */}
      <section className="bg-cream py-28 md:py-36">
        <div className="section-padding mx-auto max-w-5xl">
          <div className="text-center">
            <span className="section-label">Press</span>
            <h2
              className="mt-3 font-heading text-navy leading-[1.15]"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              News Coverage
            </h2>
          </div>

          <div
            ref={articlesRef}
            className="mt-16 grid gap-6 md:grid-cols-3"
          >
            {articles.map((article) => (
              <div key={article.title} data-article-card style={{ opacity: 0 }}>
                <ArticleCard {...article} dark={false} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Op-Ed — brief card linking to Research page for the full piece */}
      <section className="bg-navy py-28 text-cream md:py-36">
        <div
          ref={opedRef}
          className="section-padding mx-auto max-w-3xl text-center"
          style={{ opacity: 0 }}
        >
          <span className="section-label">Op-Ed</span>

          <h2
            className="mt-4 font-heading leading-[1.15]"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
          >
            {oped.title}
          </h2>

          <p className="mt-3 text-[0.8125rem] text-cream/60">
            {oped.outlet} &middot; {oped.date} &middot; Co-authored with {oped.coAuthor}
          </p>

          <p className="mx-auto mt-6 max-w-xl text-[0.9375rem] leading-relaxed text-cream/65" style={{ lineHeight: 1.8 }}>
            {oped.excerpt}
          </p>

          <Link
            href="/research"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-medium tracking-wide text-gold transition-colors hover:text-gold-light"
          >
            Read the full analysis on the Research page
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              &rarr;
            </span>
          </Link>
        </div>
      </section>

      {/* As Featured In */}
      <section className="bg-cream py-16 md:py-20">
        <div
          ref={outletRef}
          className="section-padding mx-auto max-w-4xl text-center"
          style={{ opacity: 0 }}
        >
          <p className="text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-text-light/60">
            As Featured In
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {featuredOutlets.map((outlet, i) => (
              <span key={outlet} className="flex items-center gap-x-6">
                <span className="text-[0.9375rem] font-semibold tracking-wide text-navy/50">
                  {outlet}
                </span>
                {/* Separator dot between items */}
                {i < featuredOutlets.length - 1 && (
                  <span className="hidden h-1 w-1 rounded-full bg-navy/15 sm:inline-block" />
                )}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
