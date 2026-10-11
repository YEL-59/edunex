"use client";

interface CoursesFilterBarProps {
  totalCount: number;
  currentCount: number;
  sortBy: string;
  onSortChange: (sort: string) => void;
  viewMode: "grid" | "list";
  onViewModeChange: (mode: "grid" | "list") => void;
}

export default function CoursesFilterBar({
  totalCount,
  currentCount,
  sortBy,
  onSortChange,
  viewMode,
  onViewModeChange,
}: CoursesFilterBarProps) {
  return (
    <div className="tj-course-filter-wrap">
      <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
        <div className="tj-show-results">
          <span className="course-show">
            Showing <strong>1-{currentCount}</strong> of <strong>{totalCount}</strong> courses
          </span>
        </div>
        <div className="tj-course-view-wrap">
          <div className="tj-course-ordering d-flex align-items-center gap-2">
            <span className="select-label">Sort by</span>
            <div className="tj-select">
              <select
                value={sortBy}
                onChange={(e) => onSortChange(e.target.value)}
                className="form-select form-select-sm"
                style={{
                  padding: "6px 30px 6px 12px",
                  borderRadius: "8px",
                  border: "1px solid var(--tj-color-border-1, #e6e8ec)",
                  fontWeight: 500,
                  fontSize: "14px",
                  cursor: "pointer",
                }}
              >
                <option value="popular">Popular</option>
                <option value="new">New</option>
                <option value="trending">Trending</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
          <div className="tj-course-switch">
            <button
              type="button"
              className={`grid-view ${viewMode === "grid" ? "active" : ""}`}
              onClick={() => onViewModeChange("grid")}
              aria-label="Grid View"
            >
              <i className="tji-grid-2"></i>
            </button>
            <button
              type="button"
              className={`list-view ${viewMode === "list" ? "active" : ""}`}
              onClick={() => onViewModeChange("list")}
              aria-label="List View"
            >
              <i className="tji-list"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
