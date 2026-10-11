"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import StickyHeader from "@/components/layout/StickyHeader";
import HamburgerMenu from "@/components/layout/HamburgerMenu";
import Footer from "@/components/layout/Footer";
import { instructorDetailsData } from "@/data/instructorDetails";
import InstructorDetailsHeader from "@/components/sections/instructor-details/InstructorDetailsHeader";
import InstructorDetailsMain from "@/components/sections/instructor-details/InstructorDetailsMain";
import InstructorSimilarSection from "@/components/sections/instructor-details/InstructorSimilarSection";

export default function InstructorDetailsClient() {
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

            {/* Profile Overview Banner */}
            <InstructorDetailsHeader instructor={instructorDetailsData} />

            {/* 2-Column Tabs & Booking Section */}
            <InstructorDetailsMain instructor={instructorDetailsData} />

            {/* Similar Instructors Carousel */}
            <InstructorSimilarSection />
          </main>

          {/* Site Footer */}
          <Footer />
        </div>
      </div>
    </>
  );
}
