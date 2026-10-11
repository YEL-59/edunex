import type { Metadata } from "next";
import CoursesPageClient from "./CoursesPageClient";

export const metadata: Metadata = {
  title: "Our Courses - Edunex Education LMS & Online Courses",
  description: "Explore 300+ professional courses in Development, Design, AI & Machine Learning, Data Science, and Business. Learn from expert instructors with hands-on projects.",
  openGraph: {
    title: "Our Courses - Edunex",
    description: "Explore 300+ online courses taught by expert instructors. Transform your skills and career with Edunex.",
    url: "https://edunex.themejunction.net/courses",
    siteName: "Edunex",
    locale: "en_US",
    type: "website",
  },
};

export default function CoursesPage() {
  return <CoursesPageClient />;
}
