import type { Metadata } from "next";
import ErrorPageClient from "@/components/sections/error/ErrorPageClient";

export const metadata: Metadata = {
  title: "Error 404 - Edunex - Education LMS & Online Course Next.js Template",
  description: "The page you're looking for was moved, renamed or never enrolled.",
};

export default function Error404Page() {
  return <ErrorPageClient />;
}
