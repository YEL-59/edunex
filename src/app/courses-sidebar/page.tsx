import type { Metadata } from "next";
import CoursesPageClient from "../courses/CoursesPageClient";

export const metadata: Metadata = {
  title: "Courses with Sidebar - Edunex Education LMS & Online Courses",
  description: "Browse online courses with interactive filters by category, level, rating, and price. Find the perfect course for your career path.",
  openGraph: {
    title: "Courses with Sidebar - Edunex",
    description: "Browse courses with sidebar filter controls on Edunex.",
    url: "https://edunex.themejunction.net/courses-sidebar",
    siteName: "Edunex",
    locale: "en_US",
    type: "website",
  },
};

export default function CoursesSidebarPage() {
  return <CoursesPageClient />;
}
