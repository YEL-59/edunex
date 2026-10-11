import {
  AboutCounterItem,
  AboutFeatureItem,
  AboutCoachItem,
  AboutTestimonialItem,
  AboutFaqItem,
} from "@/types";

export const aboutCountersData: AboutCounterItem[] = [
  {
    id: 1,
    target: 300,
    displayNumber: "300",
    suffix: "+",
    label: "Live, mentored courses",
    bgClass: "tj-theme-bg-6",
    delay: ".4",
  },
  {
    id: 2,
    target: 8000,
    displayNumber: "8,000",
    suffix: "+",
    label: "Online sessions",
    bgClass: "tj-theme-bg-2",
    delay: ".3",
  },
  {
    id: 3,
    target: 100,
    displayNumber: "100",
    suffix: "K",
    label: "Learners in the community",
    bgClass: "tj-theme-bg-5",
    delay: ".5",
  },
];

export const aboutFeaturesData: AboutFeatureItem[] = [
  {
    id: 1,
    title: "Expert-Led learning",
    description:
      "Connect with experienced mentors and coaches who help you achieve personal growth, career success.",
    iconClass: "tji-user-duo",
    delay: ".2",
  },
  {
    id: 2,
    title: "Personalized paths",
    description:
      "Connect with experienced mentors and coaches who help you achieve personal growth, career success.",
    iconClass: "tji-book-2",
    delay: ".4",
  },
];

export const aboutCoachesData: AboutCoachItem[] = [
  {
    id: 1,
    name: "Devoin Lanee",
    designation: "Chief design director",
    image: "/assets/images/instructor/instructor-4.webp",
    rating: 4.9,
    sessions: "200 sessions",
    price: "$20/h",
    href: "/instructor-details",
  },
  {
    id: 2,
    name: "Dianne Russell",
    designation: "Chief design director",
    image: "/assets/images/instructor/instructor-5.webp",
    rating: 4.9,
    sessions: "210 sessions",
    price: "$18/h",
    href: "/instructor-details",
  },
  {
    id: 3,
    name: "Marvin McKinney",
    designation: "Chief design director",
    image: "/assets/images/instructor/instructor-6.webp",
    rating: 4.9,
    sessions: "180 sessions",
    price: "$25/h",
    href: "/instructor-details",
  },
  {
    id: 4,
    name: "Darrell Steward",
    designation: "Chief design director",
    image: "/assets/images/instructor/instructor-7.webp",
    rating: 4.9,
    sessions: "170 sessions",
    price: "$15/h",
    href: "/instructor-details",
  },
];

export const aboutTestimonialsData: AboutTestimonialItem[] = [
  {
    id: 1,
    quote:
      "I'd bought courses for years and finished none. Edunex was different — the staircase made every step small enough to take today. Ten months later I closed my first design contract, and the certificate actually meant something in the interview.",
    author: {
      name: "Brooklyn Simmons",
      designation: "Co. Founder",
      avatar: "/assets/images/users/user-img-1.png",
    },
    hiredAt: "Hired at NOVA",
    rating: 4.6,
  },
  {
    id: 2,
    quote:
      "I'd bought courses for years and finished none. Edunex was different — the staircase made every step small enough to take today. Ten months later I closed my first design contract, and the certificate actually meant something in the interview.",
    author: {
      name: "Cody Fisher",
      designation: "Co. Founder",
      avatar: "/assets/images/users/user-img-2.png",
    },
    hiredAt: "Hired at NOVA",
    rating: 4.6,
  },
  {
    id: 3,
    quote:
      "I'd bought courses for years and finished none. Edunex was different — the staircase made every step small enough to take today. Ten months later I closed my first design contract, and the certificate actually meant something in the interview.",
    author: {
      name: "Jenny Wilson",
      designation: "Co. Founder",
      avatar: "/assets/images/users/user-img-4.png",
    },
    hiredAt: "Hired at NOVA",
    rating: 4.6,
  },
];

export const aboutFaqsData: AboutFaqItem[] = [
  {
    id: 1,
    question: "Can I host live coaching sessions?",
    answer:
      "Clients can view your availability, choose a suitable time slot, and book sessions online through the built-in scheduling system. Organize and manage all your projects effortlessly in one place. From initial planning to the finalized. Organize and manage all your projects effortlessly.",
    delay: ".3",
  },
  {
    id: 2,
    question: "How do clients book coaching sessions?",
    answer:
      "Clients can view your availability, choose a suitable time slot, and book sessions online through the built-in scheduling system. Organize and manage all your projects effortlessly in one place. From initial planning to the finalized. Organize and manage all your projects effortlessly.",
    delay: ".3",
  },
  {
    id: 3,
    question: "Can I sell courses and coaching programs?",
    answer:
      "Clients can view your availability, choose a suitable time slot, and book sessions online through the built-in scheduling system. Organize and manage all your projects effortlessly in one place. From initial planning to the finalized. Organize and manage all your projects effortlessly.",
    delay: ".3",
  },
  {
    id: 4,
    question: "Does the platform support progress tracking?",
    answer:
      "Clients can view your availability, choose a suitable time slot, and book sessions online through the built-in scheduling system. Organize and manage all your projects effortlessly in one place. From initial planning to the finalized. Organize and manage all your projects effortlessly.",
    delay: ".3",
  },
  {
    id: 5,
    question: "Do I need technical skills to get started?",
    answer:
      "Clients can view your availability, choose a suitable time slot, and book sessions online through the built-in scheduling system. Organize and manage all your projects effortlessly in one place. From initial planning to the finalized. Organize and manage all your projects effortlessly.",
    delay: ".3",
  },
];
