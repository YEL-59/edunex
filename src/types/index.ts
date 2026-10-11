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

export interface CourseLessonItem {
  title: string;
  duration: string;
  completed?: boolean;
  locked?: boolean;
  preview?: boolean;
  videoUrl?: string;
}

export interface CourseModuleItem {
  moduleNumber: string;
  title: string;
  meta: string;
  lessons: CourseLessonItem[];
}

export interface CourseReviewItem {
  id: number;
  author: {
    name: string;
    avatar: string;
    date: string;
  };
  rating: number;
  content: string;
}

export interface CourseFaqItem {
  id: number;
  question: string;
  answer: string;
}

export interface CourseRatingBreakdown {
  "5": number;
  "4": number;
  "3": number;
  "2": number;
  "1": number;
}

export interface CourseAuthor {
  name: string;
  avatar: string;
  role?: string;
  instructorImage?: string;
  rating?: number;
  reviews?: string;
  students?: string;
  courses?: string;
  bio?: string;
  href?: string;
}

export interface CourseItem {
  id: number;
  title: string;
  image: string;
  videoUrl?: string;
  category: string;
  filterCategories: string[];
  level: string;
  badge?: string;
  instructor: {
    name: string;
    avatar: string;
    href: string;
  };
  author?: CourseAuthor;
  meta: {
    lessons: string;
    duration: string;
    students: string;
    modules?: string;
  };
  rating: {
    score: number;
    count: string;
    totalRatings?: string;
    breakdown?: CourseRatingBreakdown;
  };
  price: {
    original?: string;
    current: string;
    discount?: string;
    isFree?: boolean;
  };
  href: string;
  description?: string;
  overview?: {
    learningGoals: string[];
    skills: string[];
    requirements: string[];
    intendedAudience: string[];
  };
  curriculum?: CourseModuleItem[];
  reviewsList?: CourseReviewItem[];
  faqs?: CourseFaqItem[];
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

export interface BlogComment {
  id: number;
  author: {
    name: string;
    avatar: string;
    date: string;
  };
  content: string;
  replies?: BlogComment[];
}

export interface BlogItem {
  id: number;
  title: string;
  thumbnail: string;
  category: string;
  date: string;
  href: string;
  isLarge?: boolean;
  description?: string;
  filterTags?: string[];
  commentsCount?: string;
  author?: {
    name: string;
    avatar: string;
    role?: string;
  };
}

export interface BlogRecentPost {
  id: number;
  title: string;
  thumbnail: string;
  date: string;
  href: string;
}

export interface BlogDetailsData {
  id: number;
  title: string;
  thumbnail: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  date: string;
  commentsCount: string;
  paragraphs: string[];
  checklist: string[];
  quote: {
    text: string;
    author: string;
    role: string;
    avatar: string;
  };
  video: {
    thumbnail: string;
    videoUrl: string;
  };
  table: {
    headers: string[];
    rows: {
      element: string;
      question: string;
      purpose: string;
    }[];
  };
  tags: string[];
  comments: BlogComment[];
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

export interface FaqQuestionItem {
  id: number;
  question: string;
  answer: string;
  delay?: string;
}

export interface FaqTabCategory {
  id: string;
  label: string;
  items: FaqQuestionItem[];
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

export interface EventGridItem {
  id: number;
  title: string;
  image: string;
  location: string;
  time: string;
  day: string;
  month: string;
  delay?: string;
  href: string;
}

export interface EventAgendaItem {
  id: number;
  time: string;
  title: string;
  meta: string;
  description: string;
}

export interface EventSpeakerItem {
  id: number;
  name: string;
  role: string;
  designation: string;
  avatar: string;
  linkedin: string;
}

export interface EventDetailsData {
  id: number;
  title: string;
  category: string;
  description: string;
  date: string;
  location: string;
  time: string;
  seatsLeft: string;
  image: string;
  host: {
    name: string;
    avatar: string;
    designation: string;
    href: string;
  };
  overview: {
    paragraphs: string[];
    skills: string[];
  };
  agenda: {
    meta: string;
    items: EventAgendaItem[];
  };
  speakers: EventSpeakerItem[];
  venue: {
    name: string;
    address: string;
    timeNotes: string;
    parkingNotes: string;
    mapUrl: string;
    embedUrl: string;
  };
  faqs: {
    id: number;
    question: string;
    answer: string;
  }[];
  sidebar: {
    price: string;
    originalPrice: string;
    discountBadge: string;
    pricingEndText: string;
    countdownDate: string;
    seatsBookedText: string;
    seatsBookedPercent: string;
    includes: string[];
  };
}

