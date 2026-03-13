import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ResearchContent from "@/components/ResearchContent";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Divya Pant's research: Carbon Away waste-to-energy venture, carbon markets in Nepal, farmer training in rural communities, and NSF-funded doctoral research at Penn State.",
};

export default function ResearchPage() {
  return (
    <>
      <PageHero
        title="Research & Innovation"
        subtitle="From waste-to-energy startups to carbon market policy"
      />
      <ResearchContent />
    </>
  );
}
