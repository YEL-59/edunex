import { BlogItem, BlogDetailsData, BlogRecentPost } from "@/types";

export const blogFilterTabs = [
  { label: "All", filter: "*" },
  { label: "Career", filter: "career" },
  { label: "Learning", filter: "learning" },
  { label: "Skills", filter: "skills" },
  { label: "Design", filter: "design" },
  { label: "Marketing", filter: "marketing" },
];

export const featuredBlogs: BlogItem[] = [
  {
    id: 1,
    title: "How online learning is transforming modern career paths.",
    thumbnail: "/assets/images/blog/blog-img-1.webp",
    category: "Design",
    date: "Feb - 20 - 2026",
    href: "/blog-details",
    isLarge: true,
  },
  {
    id: 2,
    title: "Why online learning is the future of our education.",
    thumbnail: "/assets/images/blog/blog-img-2.webp",
    category: "Learning",
    date: "Feb - 20 - 2026",
    href: "/blog-details",
  },
  {
    id: 3,
    title: "How to choose the right online course for your goals.",
    thumbnail: "/assets/images/blog/blog-img-3.webp",
    category: "Career",
    date: "Feb - 20 - 2026",
    href: "/blog-details",
  },
];

export const gridBlogs: BlogItem[] = [
  {
    id: 4,
    title: "Top 10 benefits of learning new skills online free.",
    thumbnail: "/assets/images/blog/blog-img-4.webp",
    category: "Design",
    filterTags: ["learning", "design"],
    date: "Feb - 20 - 2026",
    description: "Online education offers flexibility, affordability, & access to world-class instructors.",
    href: "/blog-details",
  },
  {
    id: 5,
    title: "From beginner to expert: Your learning journey starts.",
    thumbnail: "/assets/images/blog/blog-img-5.webp",
    category: "Skills",
    filterTags: ["design", "marketing", "skills"],
    date: "Feb - 20 - 2026",
    description: "Every expert was once a beginner. The right learning path, consistent practice.",
    href: "/blog-details",
  },
  {
    id: 6,
    title: "The best online courses to boost your resume forever.",
    thumbnail: "/assets/images/blog/blog-img-6.webp",
    category: "Design",
    filterTags: ["skills", "career", "design"],
    date: "Feb - 20 - 2026",
    description: "Employers value candidates who continuously improve their skills discovered.",
    href: "/blog-details",
  },
  {
    id: 7,
    title: "How online certifications can help advance your career.",
    thumbnail: "/assets/images/blog/blog-img-7.webp",
    category: "Learning",
    filterTags: ["learning", "skills", "career"],
    date: "Feb - 20 - 2026",
    description: "Professional certifications can showcase your expertise and help you stand out.",
    href: "/blog-details",
  },
  {
    id: 8,
    title: "10 common mistakes online learners should avoid in 2026.",
    thumbnail: "/assets/images/blog/blog-img-8.webp",
    category: "Marketing",
    filterTags: ["design", "career", "marketing"],
    date: "Feb - 20 - 2026",
    description: "Success in online learning requires more than simply enrolling in a course.",
    href: "/blog-details",
  },
  {
    id: 9,
    title: "Why online course marketplace Is the perfect place to learn.",
    thumbnail: "/assets/images/blog/blog-img-9.webp",
    category: "Career",
    filterTags: ["learning", "career"],
    date: "Feb - 20 - 2026",
    description: "Finding quality education shouldn't be difficult. Our marketplace brings together.",
    href: "/blog-details",
  },
];

// Home page compatibility export
export const blogsData: BlogItem[] = featuredBlogs;

export const blogCategories = [
  { name: "Career", count: 3 },
  { name: "Learning", count: 2 },
  { name: "Skills", count: 3 },
  { name: "Design", count: 6 },
  { name: "Marketing", count: 4 },
];

export const blogRecentPosts: BlogRecentPost[] = [
  {
    id: 1,
    title: "How online learning is transforming modern...",
    thumbnail: "/assets/images/blog/post-1.png",
    date: "Feb - 20 - 2026",
    href: "/blog-details",
  },
  {
    id: 2,
    title: "From beginner to expert: Your learning...",
    thumbnail: "/assets/images/blog/post-2.png",
    date: "Feb - 20 - 2026",
    href: "/blog-details",
  },
  {
    id: 3,
    title: "The best online courses to boost your resume...",
    thumbnail: "/assets/images/blog/post-3.png",
    date: "Feb - 20 - 2026",
    href: "/blog-details",
  },
];

export const blogTags = [
  "Career",
  "Business",
  "Finance",
  "Growth",
  "Digital",
  "Transform",
  "Tech",
  "Data",
  "Innovation",
  "Drive",
];

export const blogDetailsData: BlogDetailsData = {
  id: 1,
  title: "How online learning is transforming modern career paths.",
  thumbnail: "/assets/images/blog/blog-img-1.webp",
  author: {
    name: "Burdee Nicolas",
    avatar: "/assets/images/instructor/instructor-4.webp",
    role: "Co founder",
  },
  date: "08 September, 2026",
  commentsCount: "03 Comments",
  paragraphs: [
    "The way people build careers has changed dramatically over the past decade. Traditional education is no longer the only route to professional success. Today, online learning provides flexible, affordable, and industry-focused education that helps individuals develop practical skills from anywhere in the world. Whether you're a student, working professional, freelancer, or entrepreneur, online courses allow you to learn at your own pace while keeping up with rapidly evolving industries. From programming and UI/UX design to digital",
    "Marketing and artificial intelligence, learners can gain job-ready expertise without leaving their homes. As our technology continues to reshape every learning industry, continuous learning has become one of the most valuable investments anyone can make in their career.",
  ],
  checklist: [
    "Personalization at Scale",
    "Improved Customer Retention",
    "Data-Driven Insights",
    "Omni-channel Integration",
    "Customer Retention",
    "Support Optimization",
    "Proactive Engagement",
  ],
  quote: {
    text: "“In a world full of noise, thoughtful design creates clarity and connection. Great brands are designed, not discovered. The future belongs to brands that design with intention.”",
    author: "Burdee Nicolas",
    role: "Co founder",
    avatar: "/assets/images/users/user-img-7.png",
  },
  video: {
    thumbnail: "/assets/images/blog/blog-video.webp",
    videoUrl: "https://www.youtube.com/embed/MLpWrANjFbI?autoplay=1",
  },
  table: {
    headers: ["Design Element", "Design Element", "Purpose"],
    rows: [
      { element: "Empathize", question: "Who are our users?", purpose: "Understand real needs" },
      { element: "Define", question: "What problems matter most?", purpose: "Focus on impact" },
      { element: "Ideate", question: "What solutions make sense?", purpose: "Encourage creativity" },
      { element: "Prototype", question: "How does it work in reality?", purpose: "Test assumptions" },
      { element: "Test", question: "Does this help users?", purpose: "Validate decisions" },
    ],
  },
  tags: ["Growth", "Success", "Innovate"],
  comments: [
    {
      id: 1,
      author: {
        name: "Eleanor Pena",
        avatar: "/assets/images/users/user-img-2.png",
        date: "June 18, 2026 at 08:00 pm",
      },
      content:
        '"I completely agree that embracing innovation and leveraging data are crucial for any business looking to stay competitive in today\'s market. The focus on leadership and adaptability really resonated with me. Looking forward to implementing these strategies"',
      replies: [
        {
          id: 2,
          author: {
            name: "Emine Fiser",
            avatar: "/assets/images/users/user-img-1.png",
            date: "June 18, 2026 at 08:00 pm",
          },
          content:
            '"I completely agree that embracing innovation and leveraging data are crucial for any business looking to stay competitive in today\'s market. The focus on leadership and adaptability really resonated with me. Looking forward to implementing these strategies"',
        },
      ],
    },
    {
      id: 3,
      author: {
        name: "Darrell Steward",
        avatar: "/assets/images/users/user-img-3.png",
        date: "June 18, 2026 at 08:00 pm",
      },
      content:
        '"I completely agree that embracing innovation and leveraging data are crucial for any business looking to stay competitive in today\'s market. The focus on leadership and adaptability really resonated with me. Looking forward to implementing these strategies"',
    },
  ],
};
