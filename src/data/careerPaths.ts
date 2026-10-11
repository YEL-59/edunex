import { CareerPathItem } from "@/types";

export const careerPathsData: CareerPathItem[] = [
  {
    id: 1,
    stepNumber: "01.",
    title: "Search Skill",
    description: "Find the perfect course with ease. Browse thousands of expert-led courses.",
    iconClass: "tji-search",
    bgClass: "tj-theme-bg-2",
    isFirst: true,
  },
  {
    id: 2,
    stepNumber: "02.",
    title: "Chose course",
    description: "Select the course that fits your needs. Compare course details, instructor profiles.",
    iconClass: "tji-book",
    bgClass: "tj-theme-bg-3",
  },
  {
    id: 3,
    stepNumber: "03.",
    title: "Learn at your pace",
    description: "Study anytime, anywhere. Access lessons on your own schedule and progress.",
    iconClass: "tji-book-3",
    bgClass: "tj-theme-bg-6",
  },
  {
    id: 4,
    stepNumber: "04.",
    title: "Get certificate",
    description: "Showcase your achievement. Earn a verified certificate upon successful completion.",
    iconClass: "tji-check-2",
    bgClass: "tj-theme-bg",
  },
];
