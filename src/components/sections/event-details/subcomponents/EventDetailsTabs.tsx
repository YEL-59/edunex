"use client";

interface EventDetailsTabsProps {
  activeTab: string;
  onTabClick: (tabId: string) => void;
}

export default function EventDetailsTabs({
  activeTab,
  onTabClick,
}: EventDetailsTabsProps) {
  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "agenda", label: "Agenda" },
    { id: "speakers", label: "Speakers" },
    { id: "venue", label: "Venue" },
    { id: "faqs", label: "FAQs" },
  ];

  return (
    <div className="tj-course-tab-wrap tj-sticky-item-2">
      <div className="tj-course-tab">
        {tabs.map((tab) => (
          <a
            key={tab.id}
            className={`tab-nav tj-scroll-btn ${activeTab === tab.id ? "active" : ""}`}
            href={`#${tab.id}`}
            onClick={(e) => {
              e.preventDefault();
              onTabClick(tab.id);
            }}
          >
            {tab.label}
          </a>
        ))}
      </div>
    </div>
  );
}
