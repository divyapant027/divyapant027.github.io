import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AboutContent from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "Divya Pant's journey from Jhalari, Nepal to Penn State. Academic timeline, advisors, origin story, and the mission driving her work in climate science and sustainability.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Divya"
        subtitle="From Jhalari to the World Stage"
        image="/images/divya-portrait.jpg"
        imageAlt="Divya Pant portrait"
      />
      <AboutContent />
    </>
  );
}
