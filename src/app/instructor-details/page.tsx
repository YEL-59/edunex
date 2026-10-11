import type { Metadata } from "next";
import { instructorDetailsData } from "@/data/instructorDetails";
import InstructorDetailsClient from "./InstructorDetailsClient";

export const metadata: Metadata = {
  title: `${instructorDetailsData.name} - Expert Instructor - Edunex`,
  description: `${instructorDetailsData.name} is a ${instructorDetailsData.designation}. Learn through personalized 1-on-1 mentorship, live sessions, and practical courses.`,
  openGraph: {
    title: `${instructorDetailsData.name} - Instructor Details - Edunex`,
    description: `${instructorDetailsData.name} is a ${instructorDetailsData.designation}. Learn through personalized 1-on-1 mentorship, live sessions, and practical courses.`,
    url: "https://edunex.themejunction.net/instructor-details",
    siteName: "Edunex",
    images: [
      {
        url: instructorDetailsData.image,
        width: 1200,
        height: 630,
        alt: instructorDetailsData.name,
      },
    ],
    locale: "en_US",
    type: "profile",
  },
};

export default function InstructorDetailsPage() {
  return <InstructorDetailsClient />;
}
