"use client";

import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap-config";
import { prefersReducedMotion } from "@/lib/animations";

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

export default function PageTransition({
  children,
  className = "",
}: PageTransitionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    if (prefersReducedMotion()) {
      gsap.set(ref.current, { opacity: 1 });
      return;
    }

    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    );
  }, []);

  return (
    <div ref={ref} className={className} style={{ opacity: 0 }}>
      {children}
    </div>
  );
}
