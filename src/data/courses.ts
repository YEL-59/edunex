import { CourseItem } from "@/types";

export const courseFilterTabs = [
  { label: "All", filter: "*" },
  { label: "Design", filter: "design" },
  { label: "Development", filter: "development" },
  { label: "Business", filter: "business" },
  { label: "AI & ML", filter: "ai-ml" },
  { label: "Data science", filter: "data-science" },
];

export const coursesData: CourseItem[] = [
  {
    id: 1,
    title: "Professional full-stack web development course.",
    image: "/assets/images/course/course-img-1.webp",
    category: "Development",
    filterCategories: ["development", "design"],
    level: "Intermediate",
    badge: "Popular",
    instructor: {
      name: "Emmielar Josan",
      avatar: "/assets/images/users/user-img-8.png",
      href: "/instructor",
    },
    meta: {
      lessons: "33 Lesson",
      duration: "6h 30m",
      students: "2.1k",
    },
    rating: {
      score: 4.9,
      count: "(3K+)",
    },
    price: {
      original: "$30.00",
      current: "$20.00",
    },
    href: "/courses-details",
  },
  {
    id: 2,
    title: "Business growth and strategy masterclass 2026.",
    image: "/assets/images/course/course-img-2.webp",
    category: "Business",
    filterCategories: ["business", "ai-ml", "data-science"],
    level: "Beginner",
    badge: "New",
    instructor: {
      name: "Ronald Richards",
      avatar: "/assets/images/users/user-img-7.png",
      href: "/instructor",
    },
    meta: {
      lessons: "26 Lesson",
      duration: "3h 20m",
      students: "12.4K",
    },
    rating: {
      score: 4.7,
      count: "(2K+)",
    },
    price: {
      original: "$20.00",
      current: "$10.00",
    },
    href: "/courses-details",
  },
  {
    id: 3,
    title: "Complete UI/UX Design with AI prompt in 2026.",
    image: "/assets/images/course/course-img-3.webp",
    category: "Design",
    filterCategories: ["design", "ai-ml"],
    level: "All levels",
    badge: "Trending",
    instructor: {
      name: "Floyd Miles",
      avatar: "/assets/images/users/user-img-4.png",
      href: "/instructor",
    },
    meta: {
      lessons: "12 Lesson",
      duration: "2h 30m",
      students: "30.1K",
    },
    rating: {
      score: 4.8,
      count: "(10K+)",
    },
    price: {
      original: "$26.00",
      current: "$18.00",
    },
    href: "/courses-details",
  },
  {
    id: 4,
    title: "AI & Machine learning course for beginner.",
    image: "/assets/images/course/course-img-4.webp",
    category: "AI & ML",
    filterCategories: ["business", "ai-ml", "data-science"],
    level: "All levels",
    badge: "Free",
    instructor: {
      name: "Devon Lane",
      avatar: "/assets/images/users/user-img-3.png",
      href: "/instructor",
    },
    meta: {
      lessons: "12 Lesson",
      duration: "2h 30m",
      students: "30.6K",
    },
    rating: {
      score: 4.9,
      count: "(12K+)",
    },
    price: {
      current: "Free",
      isFree: true,
    },
    href: "/courses-details",
  },
  {
    id: 5,
    title: "Complete future graphic design masterclass.",
    image: "/assets/images/course/course-img-5.webp",
    category: "Design",
    filterCategories: ["design", "development"],
    level: "Advance",
    badge: "Popular",
    instructor: {
      name: "Annette Black",
      avatar: "/assets/images/users/user-img-1.png",
      href: "/instructor",
    },
    meta: {
      lessons: "18 Lesson",
      duration: "5h 10m",
      students: "22.4K",
    },
    rating: {
      score: 4.6,
      count: "(16K+)",
    },
    price: {
      original: "$30.00",
      current: "$20.00",
    },
    href: "/courses-details",
  },
  {
    id: 6,
    title: "Complete data science training programming.",
    image: "/assets/images/course/course-img-6.webp",
    category: "Data Science",
    filterCategories: ["data-science", "business"],
    level: "Intermediate",
    badge: "New",
    instructor: {
      name: "Ralph Edwards",
      avatar: "/assets/images/users/user-img-2.png",
      href: "/instructor",
    },
    meta: {
      lessons: "12 Lesson",
      duration: "2h 20m",
      students: "8.3K",
    },
    rating: {
      score: 4.7,
      count: "(2K+)",
    },
    price: {
      original: "$20.00",
      current: "$9.00",
    },
    href: "/courses-details",
  },
];
