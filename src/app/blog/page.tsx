import type { Metadata } from "next";
import BlogPageClient from "./BlogPageClient";

export const metadata: Metadata = {
  title: "Latest Blogs & Educational Insights - Edunex",
  description: "Read the latest blogs, articles, and career insights on online learning, technology, UI/UX design, and professional development from Edunex.",
  openGraph: {
    title: "Latest Blogs & Educational Insights - Edunex",
    description: "Read the latest blogs and articles on online learning, tech, and skill development from Edunex.",
    url: "https://edunex.themejunction.net/blog",
    siteName: "Edunex",
    locale: "en_US",
    type: "website",
  },
};

export default function BlogPage() {
  return <BlogPageClient />;
}
