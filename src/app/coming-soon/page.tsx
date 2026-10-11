import type { Metadata } from "next";
import ComingSoonClient from "./ComingSoonClient";

export const metadata: Metadata = {
  title: "Coming Soon - Edunex - Education LMS & Online Course Next.js Template",
  description:
    "We're putting the finishing touches on something special. Leave your email and be the first to know when we launch.",
  openGraph: {
    title: "Coming Soon - Edunex",
    description:
      "We're putting the finishing touches on something special. Leave your email and be the first to know when we launch.",
    url: "https://edunex.themejunction.net/coming-soon",
    siteName: "Edunex",
    locale: "en_US",
    type: "website",
  },
};

export default function ComingSoonPage() {
  return <ComingSoonClient />;
}
