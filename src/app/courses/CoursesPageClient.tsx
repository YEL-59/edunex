"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import StickyHeader from "@/components/layout/StickyHeader";
import HamburgerMenu from "@/components/layout/HamburgerMenu";
import Footer from "@/components/layout/Footer";
import CoursesPageHeader from "@/components/sections/courses/CoursesPageHeader";
import CoursesListSection from "@/components/sections/courses/CoursesListSection";

export default function CoursesPageClient() {
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

            {/* Courses Page Header with Breadcrumbs & Counters */}
            <CoursesPageHeader />

            {/* Courses List Section with Interactive Sidebar Filters */}
            <CoursesListSection />
          </main>

          {/* Footer Section */}
          <Footer />
        </div>
      </div>
    </>
  );
}
