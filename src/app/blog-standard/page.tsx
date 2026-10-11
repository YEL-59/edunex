import type { Metadata } from "next";
import BlogPageClient from "../blog/BlogPageClient";

export const metadata: Metadata = {
  title: "Blog Standard - Edunex",
  description: "Browse education and career development articles on Edunex.",
  openGraph: {
    title: "Blog Standard - Edunex",
    description: "Browse education and career development articles on Edunex.",
    url: "https://edunex.themejunction.net/blog-standard",
    siteName: "Edunex",
    locale: "en_US",
    type: "website",
  },
};

export default function BlogStandardPage() {
  return <BlogPageClient />;
}
