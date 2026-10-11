"use client";

import { useState } from "react";
import { EventDetailsData } from "@/types";
import EventDetailsImage from "./subcomponents/EventDetailsImage";
import EventDetailsTabs from "./subcomponents/EventDetailsTabs";
import EventOverviewTab from "./subcomponents/EventOverviewTab";
import EventAgendaTab from "./subcomponents/EventAgendaTab";
import EventSpeakersTab from "./subcomponents/EventSpeakersTab";
import EventVenueTab from "./subcomponents/EventVenueTab";
import EventFaqTab from "./subcomponents/EventFaqTab";
import EventBookingSidebar from "./subcomponents/EventBookingSidebar";

interface EventDetailsMainProps {
  event: EventDetailsData;
}

export default function EventDetailsMain({ event }: EventDetailsMainProps) {
  const [activeTab, setActiveTab] = useState("overview");

  const scrollToTab = (tabId: string) => {
    setActiveTab(tabId);
    const element = document.getElementById(tabId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="tj-course-details section-gap-bottom fix tj-sticky-container-2">
      <div className="container">
        <div className="row">
          {/* Left Column (8 cols): Event Image, Tabs, and Content Panes */}
          <div className="col-lg-8">
            <div className="tj-course-details-wrapper tj-tab-sticky-wrapper">
              {/* Sub-component: Event Header Image */}
              <EventDetailsImage imageSrc={event.image} title={event.title} />

              {/* Sub-component: Tabs */}
              <EventDetailsTabs
                activeTab={activeTab}
                onTabClick={scrollToTab}
              />

              {/* Sub-component: Overview Pane */}
              <EventOverviewTab
                paragraphs={event.overview.paragraphs}
                skills={event.overview.skills}
              />

              {/* Sub-component: Agenda Curriculum Pane */}
              <EventAgendaTab
                meta={event.agenda.meta}
                items={event.agenda.items}
              />

              {/* Sub-component: Speakers & Facilitators Pane */}
              <EventSpeakersTab speakers={event.speakers} />

              {/* Sub-component: Venue & Map Pane */}
              <EventVenueTab venue={event.venue} />

              {/* Sub-component: FAQs Accordion Pane */}
              <EventFaqTab faqs={event.faqs} />
            </div>
          </div>

          {/* Right Column (4 cols): Sticky Booking Sidebar */}
          <div className="col-lg-4">
            <EventBookingSidebar sidebar={event.sidebar} />
          </div>
        </div>
      </div>
    </section>
  );
}
