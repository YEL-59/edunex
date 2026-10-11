"use client";

import { blogFilterTabs } from "@/data/blogs";

interface BlogFilterTabsProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export default function BlogFilterTabs({
  activeFilter,
  onFilterChange,
}: BlogFilterTabsProps) {
  return (
    <div className="tj-filter-btn-wrap mb-5">
      <div className="tj_filter_btn_group d-flex flex-wrap justify-content-center gap-2">
        {blogFilterTabs.map((tab) => {
          const isActive = activeFilter === tab.filter;
          return (
            <button
              key={tab.filter}
              type="button"
              className={`tj_filter_btn ${isActive ? "active" : ""}`}
              onClick={() => onFilterChange(tab.filter)}
            >
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
