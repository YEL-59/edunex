"use client";

interface InstructorFilterBarProps {
  totalCount: number;
  shownCount: number;
  sortBy: string;
  onSortChange: (val: string) => void;
}

export default function InstructorFilterBar({
  totalCount,
  shownCount,
  sortBy,
  onSortChange,
}: InstructorFilterBarProps) {
  return (
    <div className="tj-course-filter-wrap">
      <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
        <div className="tj-show-results">
          <span className="course-show">
            Showing <strong>1-{shownCount}</strong> of <strong>{totalCount}</strong> instructor
          </span>
        </div>
        <div className="tj-course-view-wrap">
          <div className="tj-course-ordering">
            <div className="select-label">Sort by</div>
            <div className="tj-select">
              <select
                value={sortBy}
                onChange={(e) => onSortChange(e.target.value)}
                style={{
                  background: "transparent",
                  border: "none",
                  fontWeight: 600,
                  cursor: "pointer",
                  outline: "none",
                }}
              >
                <option value="top_rated">Top rated</option>
                <option value="newest">Newest</option>
                <option value="highest_rated">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
