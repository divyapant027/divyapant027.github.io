import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import MediaContent from "@/components/MediaContent";

export const metadata: Metadata = {
  title: "Media",
  description:
    "Divya Pant in the media: YouTube interviews on News24 Nepal, Ramailo Chha, Prime Times HD, news articles, op-eds, and press features reaching over 5 million viewers.",
};

export default function MediaPage() {
  return (
    <>
      <PageHero
        title="Media & Press"
        subtitle="Interviews, articles, and features reaching millions"
      />
      <MediaContent />
    </>
  );
}
