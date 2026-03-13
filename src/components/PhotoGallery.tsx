"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { createStaggerReveal } from "@/lib/animations";

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

interface PhotoGalleryProps {
  images: GalleryImage[];
  columns?: 2 | 3;
}

export default function PhotoGallery({
  images,
  columns = 3,
}: PhotoGalleryProps) {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;
    const items = gridRef.current.querySelectorAll("[data-gallery-item]");
    createStaggerReveal(Array.from(items), gridRef.current, {
      stagger: 0.1,
      y: 30,
    });
  }, []);

  const colClass =
    columns === 2
      ? "sm:grid-cols-2"
      : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div ref={gridRef} className={`grid gap-4 ${colClass}`}>
      {images.map((img, i) => (
        <div
          key={i}
          data-gallery-item
          className="group relative overflow-hidden rounded-lg"
          style={{ opacity: 0 }}
        >
          <div className="relative aspect-[4/3] bg-navy-light">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes={columns === 2 ? "(max-width: 640px) 100vw, 50vw" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"}
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>

          {/* Overlay that fades in on hover — always present for captions */}
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-navy/70 via-navy/20 to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100">
            {img.caption && (
              <div className="w-full px-5 pb-5">
                <div className="mb-2 h-px w-6 bg-gold/60" />
                <p className="text-[0.8125rem] font-medium tracking-wide text-cream">
                  {img.caption}
                </p>
              </div>
            )}
          </div>

          {/* Subtle border overlay for definition */}
          <div className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-inset ring-white/[0.06]" />
        </div>
      ))}
    </div>
  );
}
