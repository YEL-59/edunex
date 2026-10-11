"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import StickyHeader from "@/components/layout/StickyHeader";
import HamburgerMenu from "@/components/layout/HamburgerMenu";
import Footer from "@/components/layout/Footer";
import BlogDetailsHeader from "@/components/sections/blog-details/BlogDetailsHeader";
import BlogDetailsMain from "@/components/sections/blog-details/BlogDetailsMain";
import { blogDetailsData } from "@/data/blogs";

export default function BlogDetailsClient() {
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

            {/* 1. Page Header with Breadcrumb & Star Shapes */}
            <BlogDetailsHeader title="Blog Details" />

            {/* 2. Main Article Content & Sidebar */}
            <BlogDetailsMain post={blogDetailsData} />
          </main>

          {/* Footer Section */}
          <Footer />
        </div>
      </div>
    </>
  );
}
