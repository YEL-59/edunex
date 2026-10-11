import type { Metadata } from "next";
import ErrorPageClient from "@/components/sections/error/ErrorPageClient";

export const metadata: Metadata = {
  title: "404 - Page Not Found - Edunex",
  description: "The page you're looking for was moved, renamed or never enrolled.",
};

export default function NotFound() {
  return <ErrorPageClient />;
}
