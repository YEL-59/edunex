import { InstructorDetailsData } from "@/types";

export const instructorDetailsData: InstructorDetailsData = {
  id: 1,
  name: "Devoin Lanee",
  designation: "Lead AI Engineer & Educator",
  image: "/assets/images/instructor/instructor-4.webp",
  category: "Ai & Machine learning",
  rating: {
    score: 4.9,
    count: "3K+",
  },
  lessonsCount: "33 Lesson",
  studentsCount: "2.1k Students",
  hourlyRate: "$20.00/h",
  sessionsCount: "200",
  responseRate: "98%",
  replyTime: "< 2h",
  bio: [
    "Devoin is a Lead AI Engineer with over a decade building machine learning systems at scale — from recommendation engines serving millions to production LLM pipelines. He has trained 140,000+ students worldwide and specializes in making complex AI concepts practical, approachable and career-focused.",
    "His teaching philosophy is simple: build real things from day one. Every course pairs the intuition behind a concept with hands-on projects you can put straight into a portfolio.",
  ],
  skills: [
    "Python",
    "TensorFlow",
    "PyTorch",
    "Deep Learning",
    "MLOps",
    "Data Wrangling",
    "NLP",
    "Model Deployment",
    "Generative AI",
    "Computer Vision",
  ],
  experiences: [
    {
      id: 1,
      title: "Lead AI Engineer",
      companyAndYear: "Anthropic Labs • 2021 – Present",
      description:
        "Leads a team building production LLM pipelines and evaluation systems serving.",
    },
    {
      id: 2,
      title: "Senior ML Engineer",
      companyAndYear: "Google Brain • 2016 – 2021",
      description:
        "Shipped recommendation and ranking models, and mentored dozens of junior engineers.",
    },
    {
      id: 3,
      title: "Data Scientist",
      companyAndYear: "Spotify • 2013 – 2016",
      description:
        "Built the first generation of personalized playlist models used by tens of millions of listeners.",
    },
  ],
  reviews: [
    {
      id: 1,
      author: {
        name: "Brooklyn Simmons",
        avatar: "/assets/images/users/user-img-1.png",
        date: "2 weeks ago",
      },
      rating: 5,
      content:
        "“The platform transformed complex analytics into simple actions, helping our team make faster, smarter deep technical expertise daily.”",
    },
    {
      id: 2,
      author: {
        name: "Cody Fisher",
        avatar: "/assets/images/users/user-img-2.png",
        date: "1 weeks ago",
      },
      rating: 5,
      content:
        "“Our team reduced manual reporting time drastically and now focuses on strategy instead of repetitive data tasks thanks to AI insights.”",
    },
    {
      id: 3,
      author: {
        name: "Jenny Wilson",
        avatar: "/assets/images/users/user-img-3.png",
        date: "1 month ago",
      },
      rating: 5,
      content:
        "“We improved marketing performance significantly using AI-driven recommendations that optimize campaigns, consistent results.”",
    },
    {
      id: 4,
      author: {
        name: "Bessie Cooper",
        avatar: "/assets/images/users/user-img-4.png",
        date: "2 months ago",
      },
      rating: 5,
      content:
        "“The platform transformed complex analytics into simple actions, helping our team make faster, smarter deep technical expertise daily.”",
    },
  ],
};
