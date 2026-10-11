import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About Us - Edunex - Education LMS & Online Course Next.js Template",
  description:
    "Empowering Our Learner into Career-focused Online Education. Master modern digital and tech skills through AI-powered learning paths.",
  openGraph: {
    title: "About Us - Edunex",
    description:
      "Empowering Our Learner into Career-focused Online Education. Master modern digital and tech skills through AI-powered learning paths.",
    url: "https://edunex.themejunction.net/about",
    siteName: "Edunex",
    images: [
      {
        url: "/assets/images/about/video-img.webp",
        width: 1200,
        height: 630,
        alt: "Edunex About Us",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
