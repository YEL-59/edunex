"use client";

interface ActiveFilterItem {
  id: string;
  label: string;
  onRemove: () => void;
}

interface CoursesActiveFiltersProps {
  filters: ActiveFilterItem[];
}

export default function CoursesActiveFilters({ filters }: CoursesActiveFiltersProps) {
  if (filters.length === 0) return null;

  return (
    <div className="course-active-filters-wrap">
      <div className="course-active-filters d-flex flex-wrap align-items-center gap-2">
        <span>Active:</span>
        {filters.map((filter) => (
          <span key={filter.id} className="filter-active">
            {filter.label}
            <span
              className="close ms-1"
              role="button"
              tabIndex={0}
              onClick={filter.onRemove}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") filter.onRemove();
              }}
            >
              <i className="tji-close"></i>
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
