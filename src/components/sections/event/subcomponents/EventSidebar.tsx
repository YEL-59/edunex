"use client";

import Link from "next/link";
import { eventCategoriesData, eventRelatedData, eventTagsData } from "@/data/events";

interface EventSidebarProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onSearchSubmit: () => void;
}

export default function EventSidebar({
  searchQuery,
  onSearchChange,
  onSearchSubmit,
}: EventSidebarProps) {
  return (
    <div className="tj_wpost_sidebar">
      {/* 1. Search Box Widget */}
      <div className="tj_wpost_widget tj_widget_search tj-fade-anim">
        <h4 className="widget_title">Search here</h4>
        <div className="search-box">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSearchSubmit();
            }}
          >
            <input
              type="search"
              name="search"
              id="searchTwo"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
            />
            <button type="submit" value="search" aria-label="Search events">
              <i className="tji-search"></i>
            </button>
          </form>
        </div>
      </div>

      {/* 2. Categories Widget */}
      <div className="tj_wpost_widget tj_widget_categories tj-fade-anim">
        <h4 className="widget_title">Categories</h4>
        <ul>
          {eventCategoriesData.map((cat) => (
            <li key={cat.name}>
              <Link href={cat.href}>
                {cat.name}
                <span className="number">({cat.count})</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* 3. Related Events Widget */}
      <div className="tj_wpost_widget tj_related_events tj-fade-anim">
        <h4 className="widget_title">Related events</h4>
        <ul>
          {eventRelatedData.map((item) => (
            <li key={item.id}>
              <div className="event-date">
                <span className="date">{item.day}</span>
                <span className="month">{item.month}</span>
              </div>
              <div className="event-content">
                <h6 className="event-title">
                  <Link href={item.href}>
                    {item.title.length > 38 ? `${item.title.slice(0, 38)}...` : item.title}
                  </Link>
                </h6>
                <div className="event-meta">
                  <span>Sat • 10:00am</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* 4. Tag Cloud Widget */}
      <div className="tj_wpost_widget widget_tag_cloud tj-fade-anim">
        <h4 className="widget_title">Tags</h4>
        <nav>
          <div className="tagcloud">
            {eventTagsData.map((tag) => (
              <Link href="/event" key={tag}>
                {tag}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}
