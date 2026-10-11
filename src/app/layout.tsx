import type { Metadata, Viewport } from "next";
import { Manrope, Urbanist } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/common/Preloader";
import BackToTop from "@/components/common/BackToTop";
import GsapAnimation from "@/components/common/GsapAnimation";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--tj-ff-body",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--tj-ff-heading",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#723ec3",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://edunex.themejunction.net"),
  title: "Edunex - Education LMS & Online Course Next.js Template",
  description:
    "Master modern digital and tech skills through AI-powered learning paths and structured curricula designed for 2026 and beyond.",
  keywords: [
    "education",
    "lms",
    "online courses",
    "e-learning",
    "next.js",
    "react",
    "tailwind css",
    "typescript",
  ],
  authors: [{ name: "ThemeJunction", url: "https://themejunction.net" }],
  openGraph: {
    title: "Edunex - Education LMS & Online Course Next.js Template",
    description:
      "Transform Future Through Online Skill Building. Master modern digital and tech skills with AI-powered learning paths.",
    url: "https://edunex.themejunction.net",
    siteName: "Edunex",
    images: [
      {
        url: "/assets/images/hero/hero-img.png",
        width: 1200,
        height: 630,
        alt: "Edunex Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Edunex - Education LMS & Online Course Next.js Template",
    description:
      "Transform Future Through Online Skill Building. Master modern digital and tech skills with AI-powered learning paths.",
    images: ["/assets/images/hero/hero-img.png"],
  },
  icons: {
    icon: "/assets/images/favicon.png",
    shortcut: "/assets/images/favicon.png",
    apple: "/assets/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="no-js">
      <body className={`${manrope.variable} ${urbanist.variable} top-space`}>
        <Preloader />
        <BackToTop />
        <GsapAnimation />
        {children}
      </body>
    </html>
  );
}
