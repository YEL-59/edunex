export interface NavSubItem {
  title: string;
  href: string;
}

export interface NavItem {
  title: string;
  href: string;
  hasDropdown?: boolean;
  subItems?: {
    title: string;
    href: string;
    subItems?: NavSubItem[];
  }[];
}

export interface ClientLogo {
  id: number;
  name: string;
  image: string;
}

export interface CategoryItem {
  id: number;
  title: string;
  coursesCount: string;
  iconClass: string;
  bgClass: string;
  href: string;
}

export interface CourseItem {
  id: number;
  title: string;
  image: string;
  category: string;
  filterCategories: string[];
  level: string;
  badge?: string;
  instructor: {
    name: string;
    avatar: string;
    href: string;
  };
  meta: {
    lessons: string;
    duration: string;
    students: string;
  };
  rating: {
    score: number;
    count: string;
  };
  price: {
    original?: string;
    current: string;
    isFree?: boolean;
  };
  href: string;
}

export interface CounterItem {
  id: number;
  iconClass: string;
  target: number;
  displayNumber: string;
  suffix: string;
  label: string;
}

export interface TestimonialItem {
  id: number;
  quote: string;
  author: {
    name: string;
    designation: string;
    avatar: string;
  };
  rating: number;
  bgClass: string;
}

export interface EventItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  location: string;
  time: string;
  date: {
    month: string;
    day: string;
  };
  href: string;
}

export interface InstructorItem {
  id: number;
  name: string;
  designation: string;
  image: string;
  badge: string;
  coursesCount: string;
  studentsCount: string;
  rating: number;
  bgClass: string;
  href: string;
}

export interface CareerPathItem {
  id: number;
  stepNumber: string;
  title: string;
  description: string;
  iconClass: string;
  bgClass: string;
  isFirst?: boolean;
}

export interface BlogItem {
  id: number;
  title: string;
  thumbnail: string;
  category: string;
  date: string;
  href: string;
  isLarge?: boolean;
}

export interface AboutCounterItem {
  id: number;
  target: number;
  displayNumber?: string;
  suffix: string;
  label: string;
  bgClass: string;
  delay: string;
}

export interface AboutFeatureItem {
  id: number;
  title: string;
  description: string;
  iconClass: string;
  delay: string;
}

export interface AboutCoachItem {
  id: number;
  name: string;
  designation: string;
  image: string;
  rating: number;
  sessions: string;
  price: string;
  href: string;
}

export interface AboutTestimonialItem {
  id: number;
  quote: string;
  author: {
    name: string;
    designation: string;
    avatar: string;
  };
  hiredAt: string;
  rating: number;
}

export interface AboutFaqItem {
  id: number;
  question: string;
  answer: string;
  delay: string;
}

export interface InstructorListItem {
  id: number;
  name: string;
  designation: string;
  image: string;
  rating: number;
  sessions: string;
  price: string;
  hourlyRate: number;
  expertise: string;
  href: string;
}

export interface InstructorExperienceItem {
  id: number;
  title: string;
  companyAndYear: string;
  description: string;
}

export interface InstructorReviewItem {
  id: number;
  author: {
    name: string;
    avatar: string;
    date: string;
  };
  rating: number;
  content: string;
}

export interface InstructorDetailsData {
  id: number;
  name: string;
  designation: string;
  image: string;
  category: string;
  rating: {
    score: number;
    count: string;
  };
  lessonsCount: string;
  studentsCount: string;
  hourlyRate: string;
  sessionsCount: string;
  responseRate: string;
  replyTime: string;
  bio: string[];
  skills: string[];
  experiences: InstructorExperienceItem[];
  reviews: InstructorReviewItem[];
}

