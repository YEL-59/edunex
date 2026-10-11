import type { Metadata } from "next";
import FaqPageClient from "./FaqPageClient";

export const metadata: Metadata = {
  title: "FAQs - Edunex - Education LMS & Online Course Next.js Template",
  description:
    "Browse frequently asked questions across General, Courses, Payments, Accounts, and Support to find instant answers.",
  openGraph: {
    title: "FAQs - Edunex",
    description:
      "Browse frequently asked questions across General, Courses, Payments, Accounts, and Support to find instant answers.",
    url: "https://edunex.themejunction.net/faq",
    siteName: "Edunex",
    locale: "en_US",
    type: "website",
  },
};

export default function FaqPage() {
  return <FaqPageClient />;
}
