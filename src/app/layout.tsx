import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://divyapant027.github.io"),
  title: {
    default: "Divya Pant | Climate Scientist & Sustainability Advocate",
    template: "%s | Divya Pant",
  },
  description:
    "Divya Pant is a climate scientist, NSF Fellow, doctoral candidate at Penn State, and Carbon Away founder. Miss Nepal North America 2022 2nd Runner Up turning research into real-world impact.",
  keywords: [
    "Divya Pant",
    "climate scientist",
    "Penn State",
    "Carbon Away",
    "sustainability",
    "Miss Nepal North America",
  ],
  openGraph: {
    title: "Divya Pant | Climate Scientist & Sustainability Advocate",
    description:
      "Climate scientist, NSF Fellow, Carbon Away founder, and Penn State doctoral candidate turning research into real-world impact.",
    type: "website",
    images: [
      {
        url: "/images/IMG_4302.jpg",
        width: 1200,
        height: 630,
        alt: "Divya Pant at the United Nations",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <SmoothScrollProvider>
          <Navigation />
          <main id="main-content">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
