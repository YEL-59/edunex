"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import StickyHeader from "@/components/layout/StickyHeader";
import HamburgerMenu from "@/components/layout/HamburgerMenu";
import Footer from "@/components/layout/Footer";
import BlogPageHeaderSection from "@/components/sections/blog/BlogPageHeaderSection";
import BlogGridSection from "@/components/sections/blog/BlogGridSection";

export default function BlogPageClient() {
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

            {/* 1. Page Header & Featured Posts Banner */}
            <BlogPageHeaderSection />

            {/* 2. Blog Grid Section with Category Filtering & Pagination */}
            <BlogGridSection />
          </main>

          {/* Footer Section */}
          <Footer />
        </div>
      </div>
    </>
  );
}
