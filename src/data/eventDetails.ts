import { EventDetailsData } from "@/types";

export const eventDetailsData: EventDetailsData = {
  id: 1,
  title: "Design better digital products for creative problem solving.",
  category: "Design workshop",
  description:
    "Build real-world AI systems from neural networks to deployment. Master Python, TensorFlow and MLOps through hands-on projects designed.",
  date: "Feb - 20 - 2026",
  location: "Miami, Florida, USA",
  time: "10:00am - 12:00am",
  seatsLeft: "43 seats left",
  image: "/assets/images/event/event-img-1.webp",
  host: {
    name: "Emmielar Josan",
    avatar: "/assets/images/users/user-img-7.png",
    designation: "Hosted by",
    href: "/instructor",
  },
  overview: {
    paragraphs: [
      "Great products come from teams that can frame the right problem before jumping to solutions. In this hands-on workshop you'll work in small groups through a complete creative problem-solving cycle: mapping user pain points, reframing challenges, sketching divergent options and pressure-testing ideas with rapid prototypes.",
      "You'll leave with a repeatable toolkit — worksheets, templates and facilitation techniques — that you can bring back to your team on Monday. Coffee, snacks and all materials are included.",
    ],
    skills: [
      "Build and train neural networks from scratch in Python.",
      "Master TensorFlow, PyTorch and scikit-learn workflows.",
      "Fine-tune large language models and generative AI",
      "Build a career-ready portfolio of 8 deployed projects.",
      "Deploy machine learning models to production with MLOps",
      "Work with real datasets: cleaning, features and pipelines",
      "Evaluate models with the right metrics and validation",
      "Understand the math behind gradient descent and backprop",
    ],
  },
  agenda: {
    meta: "12 modules • 33 lessons • 6h 30m total",
    items: [
      {
        id: 1,
        time: "10:00am",
        title: "Foundations of Machine Learning",
        meta: "45 min • workshop",
        description:
          "We kick off with problem-framing exercises: mapping user pain points, separating symptoms from causes, and writing sharp \"How might we\" statements your group will build on all morning.",
      },
      {
        id: 2,
        time: "10:45am",
        title: "Divergent thinking sprints",
        meta: "45 min • workshop",
        description:
          "We kick off with problem-framing exercises: mapping user pain points, separating symptoms from causes, and writing sharp \"How might we\" statements your group will build on all morning.",
      },
      {
        id: 3,
        time: "11:15am",
        title: "Rapid prototyping & testing",
        meta: "30 min • Hands-on",
        description:
          "We kick off with problem-framing exercises: mapping user pain points, separating symptoms from causes, and writing sharp \"How might we\" statements your group will build on all morning.",
      },
      {
        id: 4,
        time: "11:45am",
        title: "Showcase & next steps",
        meta: "15 min • Panel",
        description:
          "We kick off with problem-framing exercises: mapping user pain points, separating symptoms from causes, and writing sharp \"How might we\" statements your group will build on all morning.",
      },
    ],
  },
  speakers: [
    {
      id: 1,
      name: "Brooklyn Simmons",
      role: "Lead facilitator",
      designation: "Head of Design, Edunex",
      avatar: "/assets/images/instructor/instructor-4.webp",
      linkedin: "https://linkedin.com/",
    },
    {
      id: 2,
      name: "Emmielar Josan",
      role: "Lead facilitator",
      designation: "Principal Designer, Nova Labs",
      avatar: "/assets/images/instructor/instructor-5.webp",
      linkedin: "https://linkedin.com/",
    },
    {
      id: 3,
      name: "Sarah Whitfield",
      role: "Workshop coach",
      designation: "Principal Designer, Nova Labs",
      avatar: "/assets/images/instructor/instructor-7.webp",
      linkedin: "https://linkedin.com/",
    },
    {
      id: 4,
      name: "Prinnac Nannido",
      role: "Panel speaker",
      designation: "Design Director, Loop",
      avatar: "/assets/images/instructor/instructor-6.webp",
      linkedin: "https://linkedin.com/",
    },
  ],
  venue: {
    name: "The Lab Miami — Creative Campus",
    address: "400 NW 26th St, Miami, Florida, USA",
    timeNotes: "Doors open 9:30am • Room B, 2nd floor",
    parkingNotes: "Free parking on site",
    mapUrl: "https://maps.app.goo.gl/atM8DyLTPi25AwLDA",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d74543.12974582508!2d-80.22131448324834!3d25.785820821128443!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1785065196592!5m2!1sen!2sbd",
  },
  faqs: [
    {
      id: 1,
      question: "Q1. Can I host live coaching sessions?",
      answer:
        "Clients can view your availability, choose a suitable time slot, and book sessions online through the built-in scheduling system. Organize and manage all your projects effortlessly in one place. From initial planning to the finalized. Organize and manage all your projects effortlessly.",
    },
    {
      id: 2,
      question: "Q2. How do clients book coaching sessions?",
      answer:
        "Clients can view your availability, choose a suitable time slot, and book sessions online through the built-in scheduling system. Organize and manage all your projects effortlessly in one place. From initial planning to the finalized. Organize and manage all your projects effortlessly.",
    },
    {
      id: 3,
      question: "Q3. Can I sell courses and coaching programs?",
      answer:
        "Clients can view your availability, choose a suitable time slot, and book sessions online through the built-in scheduling system. Organize and manage all your projects effortlessly in one place. From initial planning to the finalized. Organize and manage all your projects effortlessly.",
    },
    {
      id: 4,
      question: "Q4. Does the platform support progress tracking?",
      answer:
        "Clients can view your availability, choose a suitable time slot, and book sessions online through the built-in scheduling system. Organize and manage all your projects effortlessly in one place. From initial planning to the finalized. Organize and manage all your projects effortlessly.",
    },
    {
      id: 5,
      question: "Q5. Do I need technical skills to get started?",
      answer:
        "Clients can view your availability, choose a suitable time slot, and book sessions online through the built-in scheduling system. Organize and manage all your projects effortlessly in one place. From initial planning to the finalized. Organize and manage all your projects effortlessly.",
    },
  ],
  sidebar: {
    price: "$49.00",
    originalPrice: "$90.00",
    discountBadge: "Early bird",
    pricingEndText: "Early bird pricing ends 16 Nov",
    countdownDate: "2027-01-31T12:00:00",
    seatsBookedText: "187 of 230 seats booked",
    seatsBookedPercent: "81%",
    includes: [
      "Full access to all 4 sessions",
      "Workshop kit & templates",
      "Session recording afterwards",
      "Certificate of attendance",
      "Networking mixer & refreshments",
    ],
  },
};
