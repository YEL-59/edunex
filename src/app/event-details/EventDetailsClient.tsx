"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import StickyHeader from "@/components/layout/StickyHeader";
import HamburgerMenu from "@/components/layout/HamburgerMenu";
import Footer from "@/components/layout/Footer";
import { eventDetailsData } from "@/data/eventDetails";
import EventDetailsHeader from "@/components/sections/event-details/EventDetailsHeader";
import EventDetailsMain from "@/components/sections/event-details/EventDetailsMain";
import EventRelatedSection from "@/components/sections/event-details/EventRelatedSection";

export default function EventDetailsClient() {
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

            {/* Event Details Banner Header */}
            <EventDetailsHeader event={eventDetailsData} />

            {/* Event Tabs & Sticky Booking Section */}
            <EventDetailsMain event={eventDetailsData} />

            {/* Related Events Carousel */}
            <EventRelatedSection />
          </main>

          {/* Site Footer */}
          <Footer />
        </div>
      </div>
    </>
  );
}
