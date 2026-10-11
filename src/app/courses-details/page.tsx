import type { Metadata } from "next";
import { mainCourseDetails } from "@/data/courses";
import CourseDetailsClient from "./CourseDetailsClient";

export const metadata: Metadata = {
  title: `${mainCourseDetails.title} - Edunex`,
  description: mainCourseDetails.description || "Master professional development, AI & machine learning, data science, and design with Edunex.",
  openGraph: {
    title: `${mainCourseDetails.title} - Edunex`,
    description: mainCourseDetails.description || "Master skills through hands-on projects designed by industry leaders.",
    url: "https://edunex.themejunction.net/courses-details",
    siteName: "Edunex",
    images: [
      {
        url: mainCourseDetails.image,
        width: 1200,
        height: 630,
        alt: mainCourseDetails.title,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function CourseDetailsPage() {
  return <CourseDetailsClient />;
}
