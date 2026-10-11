"use client";

interface InstructorActiveFiltersProps {
  activeCategories: string[];
  activeRating: number | null;
  onRemoveCategory: (cat: string) => void;
  onRemoveRating: () => void;
}

export default function InstructorActiveFilters({
  activeCategories,
  activeRating,
  onRemoveCategory,
  onRemoveRating,
}: InstructorActiveFiltersProps) {
  const hasFilters = activeCategories.length > 0 || activeRating !== null;

  if (!hasFilters) return null;

  return (
    <div className="course-active-filters-wrap">
      <div className="course-active-filters">
        <span>Active:</span>
        {activeCategories.map((cat) => (
          <span className="filter-active" key={cat}>
            {cat}
            <span
              className="close"
              role="button"
              tabIndex={0}
              onClick={() => onRemoveCategory(cat)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") onRemoveCategory(cat);
              }}
            >
              <i className="tji-close"></i>
            </span>
          </span>
        ))}
        {activeRating !== null && (
          <span className="filter-active">
            {activeRating}.0 & up
            <span
              className="close"
              role="button"
              tabIndex={0}
              onClick={onRemoveRating}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") onRemoveRating();
              }}
            >
              <i className="tji-close"></i>
            </span>
          </span>
        )}
      </div>
    </div>
  );
}
