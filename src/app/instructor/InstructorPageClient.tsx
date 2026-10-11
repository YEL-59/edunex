"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import StickyHeader from "@/components/layout/StickyHeader";
import HamburgerMenu from "@/components/layout/HamburgerMenu";
import Footer from "@/components/layout/Footer";
import InstructorPageHeader from "@/components/sections/instructor/InstructorPageHeader";
import InstructorListSection from "@/components/sections/instructor/InstructorListSection";

export default function InstructorPageClient() {
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

            {/* Page Header Banner */}
            <InstructorPageHeader
              title="Expert Instructor"
              currentPage="Instructor"
            />

            {/* Instructors Directory with Interactive Sidebar Filters */}
            <InstructorListSection />
          </main>

          {/* Site Footer */}
          <Footer />
        </div>
      </div>
    </>
  );
}
