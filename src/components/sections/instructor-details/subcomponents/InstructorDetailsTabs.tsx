"use client";

interface InstructorDetailsTabsProps {
  activeTab: string;
  onTabClick: (tabId: string) => void;
}

export default function InstructorDetailsTabs({
  activeTab,
  onTabClick,
}: InstructorDetailsTabsProps) {
  const tabs = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "courses", label: "Courses" },
    { id: "reviews", label: "Reviews" },
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
