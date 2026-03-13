// Animation defaults
export const EASE = {
  smooth: "power2.out",
  entrance: "power3.out",
  bounce: "back.out(1.7)",
  elastic: "elastic.out(1, 0.5)",
} as const;

export const DURATION = {
  fast: 0.4,
  normal: 0.8,
  slow: 1.2,
  hero: 1.5,
} as const;

export const STAGGER = {
  fast: 0.03,
  normal: 0.08,
  slow: 0.15,
} as const;

// ScrollTrigger defaults
export const SCROLL_TRIGGER_DEFAULTS = {
  start: "top 85%",
  end: "bottom 15%",
  toggleActions: "play none none none",
} as const;
