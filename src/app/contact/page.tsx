import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactContent from "@/components/ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Connect with Divya Pant for research partnerships, speaking engagements, community projects, or media inquiries. Email: dzp5431@psu.edu",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Get in Touch"
        subtitle="Let's connect and collaborate"
      />
      <ContactContent />
    </>
  );
}
