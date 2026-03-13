"use client";

import { useRef, useEffect } from "react";
import {
  createCountUp,
  createStaggerReveal,
} from "@/lib/animations";

interface Stat {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
}

interface StatBarProps {
  stats: Stat[];
  dark?: boolean;
}

export default function StatBar({ stats, dark = false }: StatBarProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const statEls = ref.current.querySelectorAll("[data-stat]");
    statEls.forEach((el) => {
      const value = parseInt(el.getAttribute("data-stat") || "0", 10);
      const suffix = el.getAttribute("data-suffix") || "";
      createCountUp(el, value, suffix);
    });

    const containers = ref.current.querySelectorAll("[data-stat-container]");
    createStaggerReveal(Array.from(containers), ref.current, {
      stagger: 0.1,
    });
  }, []);

  const numColor = dark ? "text-cream" : "text-navy";
  const labelColor = dark ? "text-cream/60" : "text-text-light";

  const mdColsMap: Record<number, string> = {
    1: "md:grid-cols-1",
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
    5: "md:grid-cols-5",
  };
  const mdCols = mdColsMap[Math.min(stats.length, 5)] || "md:grid-cols-4";

  return (
    <div ref={ref} className="relative">
      {/* Gold accent line above */}
      <div
        className={`mb-12 h-px ${dark ? "bg-gold/20" : "bg-gold/30"}`}
      />

      <div
        className={`grid grid-cols-2 gap-8 ${mdCols}`}
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            data-stat-container
            className="text-center"
            style={{ opacity: 0 }}
          >
            <span
              data-stat={stat.value}
              data-suffix={stat.suffix}
              className={`stat-value text-4xl md:text-5xl ${numColor}`}
            >
              {stat.prefix || ""}0{stat.suffix}
            </span>
            <p className={`stat-label mt-3 ${labelColor}`}>
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
