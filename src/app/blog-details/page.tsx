import type { Metadata } from "next";
import { blogDetailsData } from "@/data/blogs";
import BlogDetailsClient from "./BlogDetailsClient";

export const metadata: Metadata = {
  title: `${blogDetailsData.title} - Edunex`,
  description: "Explore how online education and continuous learning are reshaping professional career trajectories and empowering lifelong learners worldwide.",
  openGraph: {
    title: `${blogDetailsData.title} - Edunex`,
    description: "Explore how online education and continuous learning are reshaping professional career trajectories.",
    url: "https://edunex.themejunction.net/blog-details",
    siteName: "Edunex",
    images: [
      {
        url: blogDetailsData.thumbnail,
        width: 1200,
        height: 630,
        alt: blogDetailsData.title,
      },
    ],
    locale: "en_US",
    type: "article",
  },
};

export default function BlogDetailsPage() {
  return <BlogDetailsClient />;
}
