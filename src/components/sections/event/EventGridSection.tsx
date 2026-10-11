"use client";

import { useState, useMemo } from "react";
import { eventGridData } from "@/data/events";
import EventGridCard from "./subcomponents/EventGridCard";
import EventPagination from "./subcomponents/EventPagination";
import EventSidebar from "./subcomponents/EventSidebar";

export default function EventGridSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredEvents = useMemo(() => {
    if (!searchQuery) return eventGridData;
    return eventGridData.filter(
      (ev) =>
        ev.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ev.location.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const displayEvents = filteredEvents.length > 0 ? filteredEvents : eventGridData;

  return (
    <section className="tj-event-section-2 section-gap-bottom fix">
      <div className="container">
        <div className="row rg-50">
          {/* Left Column (8 cols): Event Cards Grid & Pagination */}
          <div className="col-lg-8">
            <div className="row rg-30">
              {displayEvents.map((event) => (
                <EventGridCard key={event.id} event={event} />
              ))}
            </div>

            {/* Sub-component: Pagination */}
            <EventPagination
              currentPage={currentPage}
              totalPages={3}
              onPageChange={setCurrentPage}
            />
          </div>

          {/* Right Column (4 cols): Sub-component Sidebar */}
          <div className="col-lg-4">
            <EventSidebar
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              onSearchSubmit={() => {}}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
