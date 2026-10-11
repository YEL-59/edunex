import { CourseItem } from "@/types";
import coursesRawData from "./data.json";

export interface CoursesDataPayload {
  stats: {
    onlineCourses: string;
    expertInstructors: string;
    onlineLearners: string;
  };
  courses: CourseItem[];
}

export const coursesJsonData = coursesRawData as unknown as CoursesDataPayload;

export const courseStats = coursesJsonData.stats;

export const courseFilterTabs = [
  { label: "All", filter: "*" },
  { label: "Design", filter: "design" },
  { label: "Development", filter: "development" },
  { label: "Business", filter: "business" },
  { label: "AI & ML", filter: "ai-ml" },
  { label: "Data science", filter: "data-science" },
];

export const allCourses: CourseItem[] = coursesJsonData.courses.map((course) => ({
  ...course,
  filterCategories: course.filterCategories || [course.category.toLowerCase().replace(/[^a-z0-9]/g, "-")],
  instructor: course.instructor || {
    name: course.author?.name || "Expert Instructor",
    avatar: course.author?.avatar || "/assets/images/users/user-img-1.png",
    href: "/instructor",
  },
}));

// Backward compatibility with home page CoursesSection
export const coursesData: CourseItem[] = allCourses.slice(0, 6);

export const mainCourseDetails: CourseItem = allCourses[0];

export function getCourseById(id: number): CourseItem | undefined {
  return allCourses.find((c) => c.id === id);
}
