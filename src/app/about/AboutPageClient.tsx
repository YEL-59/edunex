"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import StickyHeader from "@/components/layout/StickyHeader";
import HamburgerMenu from "@/components/layout/HamburgerMenu";
import Footer from "@/components/layout/Footer";
import AboutPageHeader from "@/components/sections/about/AboutPageHeader";
import AboutVideoSection from "@/components/sections/about/AboutVideoSection";
import AboutCounterSection from "@/components/sections/about/AboutCounterSection";
import AboutAcademySection from "@/components/sections/about/AboutAcademySection";
import AboutClientMarquee from "@/components/sections/about/AboutClientMarquee";
import AboutInstructorSection from "@/components/sections/about/AboutInstructorSection";
import AboutTestimonialSection from "@/components/sections/about/AboutTestimonialSection";
import AboutFaqSection from "@/components/sections/about/AboutFaqSection";

export default function AboutPageClient() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Drawer Menu */}
      <HamburgerMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />

      {/* Primary Fixed Header */}
      <Header onOpenMobileMenu={() => setMobileMenuOpen(true)} />

      {/* Sticky Duplicate Header on Scroll */}
      <StickyHeader onOpenMobileMenu={() => setMobileMenuOpen(true)} />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main id="primary" className="site-main">
            <div className="space-for-header"></div>

            {/* 1. Page Header & Breadcrumbs */}
            <AboutPageHeader />

            {/* 2. Video Preview Section */}
            <AboutVideoSection />

            {/* 3. Metrics & Reviews Counter Section */}
            <AboutCounterSection />

            {/* 4. About Academy Gallery & Features */}
            <AboutAcademySection />

            {/* 5. Client Logos Infinite Marquee */}
            <AboutClientMarquee />

            {/* 6. Featured Coaches / Instructors Grid */}
            <AboutInstructorSection />

            {/* 7. Student Feedback Testimonial Slider */}
            <AboutTestimonialSection />

            {/* 8. Frequently Asked Questions Accordion */}
            <AboutFaqSection />
          </main>

          {/* Site Footer with CTA and Newsletter */}
          <Footer />
        </div>
      </div>
    </>
  );
}
