import type { Metadata } from "next";
import InstructorPageClient from "./InstructorPageClient";

export const metadata: Metadata = {
  title: "Expert Instructors - Edunex - Education LMS & Online Course Next.js Template",
  description:
    "Learn from our world-class coaches and educators. Filter by expertise, rating, and rate per hour to find your ideal mentor.",
  openGraph: {
    title: "Expert Instructors - Edunex",
    description:
      "Learn from our world-class coaches and educators. Filter by expertise, rating, and rate per hour to find your ideal mentor.",
    url: "https://edunex.themejunction.net/instructor",
    siteName: "Edunex",
    images: [
      {
        url: "/assets/images/instructor/instructor-4.webp",
        width: 1200,
        height: 630,
        alt: "Edunex Instructors",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function InstructorPage() {
  return <InstructorPageClient />;
}
