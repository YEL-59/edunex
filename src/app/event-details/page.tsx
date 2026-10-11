import type { Metadata } from "next";
import { eventDetailsData } from "@/data/eventDetails";
import EventDetailsClient from "./EventDetailsClient";

export const metadata: Metadata = {
  title: `${eventDetailsData.title} - Edunex`,
  description: eventDetailsData.description,
  openGraph: {
    title: `${eventDetailsData.title} - Edunex`,
    description: eventDetailsData.description,
    url: "https://edunex.themejunction.net/event-details",
    siteName: "Edunex",
    images: [
      {
        url: eventDetailsData.image,
        width: 1200,
        height: 630,
        alt: eventDetailsData.title,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function EventDetailsPage() {
  return <EventDetailsClient />;
}
