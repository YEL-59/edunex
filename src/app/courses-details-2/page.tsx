import type { Metadata } from "next";
import { mainCourseDetails } from "@/data/courses";
import CourseDetailsClient from "../courses-details/CourseDetailsClient";

export const metadata: Metadata = {
  title: `${mainCourseDetails.title} - Course Details 2 - Edunex`,
  description: mainCourseDetails.description || "Master professional development, AI & machine learning, data science, and design with Edunex.",
  openGraph: {
    title: `${mainCourseDetails.title} - Edunex`,
    description: mainCourseDetails.description || "Master skills through hands-on projects designed by industry leaders.",
    url: "https://edunex.themejunction.net/courses-details-2",
    siteName: "Edunex",
    locale: "en_US",
    type: "website",
  },
};

export default function CourseDetailsPage2() {
  return <CourseDetailsClient />;
}
