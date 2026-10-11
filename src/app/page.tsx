"use client";

import React, { useState } from "react";
import Header from "@/components/layout/Header";
import StickyHeader from "@/components/layout/StickyHeader";
import HamburgerMenu from "@/components/layout/HamburgerMenu";
import Footer from "@/components/layout/Footer";
import HeroBanner from "@/components/sections/HeroBanner";
import ClientMarquee from "@/components/sections/ClientMarquee";
import CategoriesSection from "@/components/sections/CategoriesSection";
import CoursesSection from "@/components/sections/CoursesSection";
import AboutSection from "@/components/sections/AboutSection";
import CounterSection from "@/components/sections/CounterSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import EventSection from "@/components/sections/EventSection";
import InstructorSection from "@/components/sections/InstructorSection";
import CareerPathSection from "@/components/sections/CareerPathSection";
import BlogSection from "@/components/sections/BlogSection";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Offcanvas Drawer Menu */}
      <HamburgerMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />

      {/* Primary Fixed Header */}
      <Header onOpenMobileMenu={() => setMobileMenuOpen(true)} />

      {/* Sticky Header Revealed on Scroll */}
      <StickyHeader onOpenMobileMenu={() => setMobileMenuOpen(true)} />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main id="primary" className="site-main">
            <div className="space-for-header"></div>

            {/* 1. Banner / Hero Section */}
            <HeroBanner />

            {/* 2. Client Marquee Section */}
            <ClientMarquee />

            {/* 3. Categories Section */}
            <CategoriesSection />

            {/* 4. Top Courses Section with Tab Filter */}
            <CoursesSection />

            {/* 5. About Platform Section */}
            <AboutSection />

            {/* 6. Animated Counter Section */}
            <CounterSection />

            {/* 7. Student Feedback Testimonial Slider */}
            <TestimonialSection />

            {/* 8. Live & Upcoming Events Section */}
            <EventSection />

            {/* 9. Expert Instructors Slider */}
            <InstructorSection />

            {/* 10. Structured Career Paths Section */}
            <CareerPathSection />

            {/* 11. Latest Blogs & Insights Section */}
            <BlogSection />
          </main>

          {/* 12. Footer with CTA and Newsletter */}
          <Footer />
        </div>
      </div>
    </>
  );
}
