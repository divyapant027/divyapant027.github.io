import { gsap, ScrollTrigger } from "./gsap-config";
import { EASE, DURATION, STAGGER, SCROLL_TRIGGER_DEFAULTS } from "./constants";

/** Check if user prefers reduced motion */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Fade-up scroll reveal for a single element */
export function createScrollReveal(
  element: Element,
  options?: { delay?: number; y?: number; duration?: number }
) {
  if (prefersReducedMotion()) {
    gsap.set(element, { opacity: 1, y: 0 });
    return;
  }

  gsap.fromTo(
    element,
    { opacity: 0, y: options?.y ?? 40 },
    {
      opacity: 1,
      y: 0,
      duration: options?.duration ?? DURATION.normal,
      delay: options?.delay ?? 0,
      ease: EASE.entrance,
      scrollTrigger: {
        trigger: element,
        ...SCROLL_TRIGGER_DEFAULTS,
      },
    }
  );
}

/** Staggered reveal for a group of children */
export function createStaggerReveal(
  elements: Element[],
  trigger: Element,
  options?: { stagger?: number; y?: number }
) {
  if (prefersReducedMotion()) {
    gsap.set(elements, { opacity: 1, y: 0 });
    return;
  }

  gsap.fromTo(
    elements,
    { opacity: 0, y: options?.y ?? 40 },
    {
      opacity: 1,
      y: 0,
      duration: DURATION.normal,
      stagger: options?.stagger ?? STAGGER.normal,
      ease: EASE.entrance,
      scrollTrigger: {
        trigger,
        ...SCROLL_TRIGGER_DEFAULTS,
      },
    }
  );
}

/** Count-up animation for numeric stats */
export function createCountUp(
  element: Element,
  endValue: number,
  suffix: string = ""
) {
  if (prefersReducedMotion()) {
    element.textContent = `${endValue}${suffix}`;
    return;
  }

  const obj = { value: 0 };
  gsap.to(obj, {
    value: endValue,
    duration: DURATION.slow,
    ease: EASE.smooth,
    scrollTrigger: {
      trigger: element,
      ...SCROLL_TRIGGER_DEFAULTS,
    },
    onUpdate: () => {
      element.textContent = `${Math.round(obj.value)}${suffix}`;
    },
  });
}

/** Animate a vertical line's scaleY on scroll (for timeline) */
export function createLineReveal(element: Element, trigger: Element) {
  if (prefersReducedMotion()) {
    gsap.set(element, { scaleY: 1 });
    return;
  }

  gsap.fromTo(
    element,
    { scaleY: 0 },
    {
      scaleY: 1,
      ease: "none",
      scrollTrigger: {
        trigger,
        start: "top 80%",
        end: "bottom 20%",
        scrub: 0.5,
      },
    }
  );
}

/** Clean up ScrollTrigger instances scoped to a container */
export function killScrollTriggers(trigger: Element) {
  ScrollTrigger.getAll()
    .filter((st) => st.trigger === trigger)
    .forEach((st) => st.kill());
}
