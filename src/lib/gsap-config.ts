import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugins once — all components import gsap from this file
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };
