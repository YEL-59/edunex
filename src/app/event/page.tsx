import type { Metadata } from "next";
import EventPageClient from "./EventPageClient";

export const metadata: Metadata = {
  title: "Events Grid - Edunex - Education LMS & Online Course Next.js Template",
  description:
    "Explore upcoming hands-on workshops, webinars, and masterclasses to advance your tech and design skills.",
  openGraph: {
    title: "Events Grid - Edunex",
    description:
      "Explore upcoming hands-on workshops, webinars, and masterclasses to advance your tech and design skills.",
    url: "https://edunex.themejunction.net/event",
    siteName: "Edunex",
    images: [
      {
        url: "/assets/images/event/event-img-1.webp",
        width: 1200,
        height: 630,
        alt: "Edunex Events Grid",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function EventPage() {
  return <EventPageClient />;
}
