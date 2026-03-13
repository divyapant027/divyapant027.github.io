import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import RecognitionContent from "@/components/RecognitionContent";

export const metadata: Metadata = {
  title: "Recognition",
  description:
    "Divya Pant's awards and recognition: Miss Nepal North America 2022, NSF Fellowship, Gamma Sigma Delta, UN Forum on Forests, NYC Public Advocate, and academic honors.",
};

export default function RecognitionPage() {
  return (
    <>
      <PageHero
        title="Recognition & Awards"
        subtitle="From academic honors to international stages"
      />
      <RecognitionContent />
    </>
  );
}
