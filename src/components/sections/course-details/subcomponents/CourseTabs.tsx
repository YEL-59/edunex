"use client";

interface CourseTabsProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "curriculum", label: "Curriculum" },
  { id: "instructor", label: "Instructor" },
  { id: "reviews", label: "Reviews" },
  { id: "faqs", label: "FAQs" },
];

export default function CourseTabs({ activeTab, onTabChange }: CourseTabsProps) {
  return (
    <div className="tj-course-tab-wrap tj-sticky-item-2 mb-4">
      <div className="tj-course-tab d-flex flex-wrap gap-2">
        {TABS.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              className={`tab-nav tj-scroll-btn border-0 bg-transparent ${
                isActive ? "active" : ""
              }`}
              onClick={() => onTabChange(tab.id)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
