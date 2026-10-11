"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import StickyHeader from "@/components/layout/StickyHeader";
import HamburgerMenu from "@/components/layout/HamburgerMenu";
import Footer from "@/components/layout/Footer";
import CourseDetailsHeader from "@/components/sections/course-details/CourseDetailsHeader";
import CourseDetailsMain from "@/components/sections/course-details/CourseDetailsMain";
import CourseRelatedSection from "@/components/sections/course-details/CourseRelatedSection";
import { mainCourseDetails } from "@/data/courses";

export default function CourseDetailsClient() {
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

            {/* 1. Course Details Header Banner */}
            <CourseDetailsHeader course={mainCourseDetails} />

            {/* 2. Course Details Main Section (Overview, Curriculum, Instructor, Reviews, FAQs & Sticky Sidebar) */}
            <CourseDetailsMain course={mainCourseDetails} />

            {/* 3. Related Courses Slider Section */}
            <CourseRelatedSection />
          </main>

          {/* Footer Section */}
          <Footer />
        </div>
      </div>
    </>
  );
}
