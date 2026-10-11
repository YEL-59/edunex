"use client";

import RatingStars from "@/components/common/RatingStars";

interface InstructorFilterSidebarProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedCategories: string[];
  onToggleCategory: (cat: string) => void;
  priceRange: number;
  onPriceChange: (p: number) => void;
  selectedRating: number | null;
  onSelectRating: (r: number | null) => void;
  onReset: () => void;
  onApply: () => void;
}

const expertiseOptions = [
  { name: "Design", count: 62 },
  { name: "Development", count: 48 },
  { name: "AI & Machine learning", count: 34 },
  { name: "Marketing", count: 29 },
  { name: "Business", count: 25 },
  { name: "Data science", count: 21 },
];

const ratingOptions = [
  { rating: 4.5, label: "4.5 & up" },
  { rating: 4.0, label: "4.0 & up" },
  { rating: 3.5, label: "3.5 & up" },
  { rating: 3.0, label: "3.0 & up" },
];

export default function InstructorFilterSidebar({
  searchQuery,
  onSearchChange,
  selectedCategories,
  onToggleCategory,
  priceRange,
  onPriceChange,
  selectedRating,
  onSelectRating,
  onReset,
  onApply,
}: InstructorFilterSidebarProps) {
  return (
    <div className="tj-filter-sidebar">
      {/* Top Filter Header */}
      <div className="filter-sidebar-top">
        <div className="filter-title">
          <span>
            <i className="tji-filter"></i>
          </span>
          Filter
        </div>
        <div className="filter-reset">
          <button
            type="button"
            className="tj-reset"
            onClick={onReset}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <i className="tji-reset"></i>Reset filters
          </button>
        </div>
      </div>

      {/* Search Filter Widget */}
      <div className="tj-filter-widget tj-filter-widget-search">
        <div className="search-box">
          <form onSubmit={(e) => { e.preventDefault(); onApply(); }}>
            <input
              type="search"
              name="search"
              placeholder="Search filter..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
            />
            <button type="submit" value="search" aria-label="Search">
              <i className="tji-search"></i>
            </button>
          </form>
        </div>
      </div>

      {/* Expertise Categories Widget */}
      <div className="tj-filter-widget tj-filter-widget-categories">
        <h3 className="filter-widget-title">Expertise</h3>
        {expertiseOptions.map((item) => {
          const isChecked = selectedCategories.includes(item.name);
          return (
            <div className="filter-check-item" key={item.name}>
              <label style={{ cursor: "pointer" }}>
                <input
                  type="checkbox"
                  name="category"
                  checked={isChecked}
                  onChange={() => onToggleCategory(item.name)}
                />
                <span>{item.name}</span>
              </label>
              <span className="count">{item.count}</span>
            </div>
          );
        })}
      </div>

      {/* Price Range Widget */}
      <div className="tj-filter-widget tj-filter-widget-price">
        <h3 className="filter-widget-title">Rate per hour</h3>
        <div className="price-label">
          <span className="from">$0</span> &mdash;{" "}
          <span className="to">${priceRange}</span>
        </div>
        <div className="price-slider-wrapper" style={{ marginTop: "12px" }}>
          <input
            type="range"
            min="0"
            max="135"
            value={priceRange}
            onChange={(e) => onPriceChange(Number(e.target.value))}
            style={{ width: "100%", accentColor: "var(--tj-color-theme-primary, #2b61ff)" }}
          />
          <div className="price-slider-amount d-flex justify-content-between mt-2">
            <span>Free</span>
            <span>$135+</span>
          </div>
        </div>
      </div>

      {/* Rating Filter Widget */}
      <div className="tj-filter-widget tj-filter-widget-rating">
        <h3 className="filter-widget-title">Rating</h3>
        {ratingOptions.map((opt) => {
          const isChecked = selectedRating === opt.rating;
          return (
            <div className="filter-check-item" key={opt.rating}>
              <label style={{ cursor: "pointer" }}>
                <input
                  type="checkbox"
                  name="rating"
                  checked={isChecked}
                  onChange={() => onSelectRating(isChecked ? null : opt.rating)}
                />
                <div style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                  <RatingStars score={opt.rating} maxScore={5} />
                  <span className="label">{opt.label}</span>
                </div>
              </label>
            </div>
          );
        })}
      </div>

      {/* Filter Action Buttons */}
      <div className="tj-filter-btn-area">
        <button
          type="button"
          className="tj-btn-primary tj-btn-full flip-text-wrap"
          onClick={onApply}
        >
          <span className="btn-text">Apply</span>
        </button>
        <button
          type="button"
          className="tj-btn-primary tj-btn-primary-border flip-text-wrap mt-2"
          onClick={onReset}
        >
          <span className="btn-text">Reset</span>
        </button>
      </div>
    </div>
  );
}
