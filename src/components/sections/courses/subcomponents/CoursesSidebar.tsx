"use client";

interface CoursesSidebarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategories: string[];
  onToggleCategory: (category: string) => void;
  selectedLevels: string[];
  onToggleLevel: (level: string) => void;
  selectedRating: number | null;
  onSelectRating: (rating: number | null) => void;
  maxPrice: number;
  onMaxPriceChange: (price: number) => void;
  onResetFilters: () => void;
  onApplyFilters: () => void;
}

const CATEGORIES = [
  { id: "Design", name: "Design", count: 62 },
  { id: "Development", name: "Development", count: 48 },
  { id: "AI & ML", name: "AI & Machine learning", count: 34 },
  { id: "Marketing", name: "Marketing", count: 29 },
  { id: "Business", name: "Business", count: 25 },
  { id: "Data Science", name: "Data science", count: 21 },
];

const LEVELS = [
  { id: "Beginner", name: "Beginner", count: 88 },
  { id: "Intermediate", name: "Intermediate", count: 96 },
  { id: "Advanced", name: "Advanced", count: 64 },
  { id: "All levels", name: "All levels", count: 248 },
];

const RATINGS = [
  { value: 4.5, label: "4.5 & up", markedStars: 5, lastWidth: "50%" },
  { value: 4.0, label: "4.0 & up", markedStars: 4, lastWidth: "0%" },
  { value: 3.5, label: "3.5 & up", markedStars: 3, lastWidth: "50%" },
  { value: 3.0, label: "3.0 & up", markedStars: 3, lastWidth: "0%" },
];

export default function CoursesSidebar({
  searchQuery,
  onSearchChange,
  selectedCategories,
  onToggleCategory,
  selectedLevels,
  onToggleLevel,
  selectedRating,
  onSelectRating,
  maxPrice,
  onMaxPriceChange,
  onResetFilters,
  onApplyFilters,
}: CoursesSidebarProps) {
  return (
    <div className="tj-filter-sidebar">
      {/* Top Header */}
      <div className="filter-sidebar-top">
        <div className="filter-title">
          <span>
            <i className="tji-filter"></i>
          </span>
          Filter
        </div>
        <div className="filter-reset">
          <button type="button" className="tj-reset" onClick={onResetFilters}>
            <i className="tji-reset"></i>Reset filters
          </button>
        </div>
      </div>

      {/* Search Widget */}
      <div className="tj-filter-widget tj-filter-widget-search">
        <div className="search-box">
          <form onSubmit={(e) => { e.preventDefault(); onApplyFilters(); }}>
            <input
              type="search"
              name="search"
              placeholder="Search filter..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
            />
            <button type="submit" value="search">
              <i className="tji-search"></i>
            </button>
          </form>
        </div>
      </div>

      {/* Categories Widget */}
      <div className="tj-filter-widget tj-filter-widget-categories">
        <h3 className="filter-widget-title">Categories</h3>
        {CATEGORIES.map((cat) => (
          <div key={cat.id} className="filter-check-item">
            <label>
              <input
                type="checkbox"
                name="category"
                checked={selectedCategories.includes(cat.id)}
                onChange={() => onToggleCategory(cat.id)}
              />
              <span>{cat.name}</span>
            </label>
            <span className="count">{cat.count}</span>
          </div>
        ))}
      </div>

      {/* Price Range Widget */}
      <div className="tj-filter-widget tj-filter-widget-price">
        <h3 className="filter-widget-title">Price range</h3>
        <div className="price-label">
          <span className="from">$0</span> &mdash;
          <span className="to">${maxPrice}</span>
        </div>
        <div className="price-slider-wrapper">
          <input
            type="range"
            min="0"
            max="135"
            step="5"
            value={maxPrice}
            onChange={(e) => onMaxPriceChange(Number(e.target.value))}
            className="w-100"
            style={{ accentColor: "var(--tj-color-theme-primary, #1e60f2)" }}
          />
          <div className="price-slider-amount d-flex justify-content-between mt-2">
            <span>Free ($0)</span>
            <span>$135</span>
          </div>
        </div>
      </div>

      {/* Levels Widget */}
      <div className="tj-filter-widget tj-filter-widget-levels">
        <h3 className="filter-widget-title">Levels</h3>
        {LEVELS.map((lvl) => (
          <div key={lvl.id} className="filter-check-item">
            <label>
              <input
                type="checkbox"
                name="level"
                checked={selectedLevels.includes(lvl.id)}
                onChange={() => onToggleLevel(lvl.id)}
              />
              <span>{lvl.name}</span>
            </label>
            <span className="count">{lvl.count}</span>
          </div>
        ))}
      </div>

      {/* Rating Widget */}
      <div className="tj-filter-widget tj-filter-widget-rating">
        <h3 className="filter-widget-title">Rating</h3>
        {RATINGS.map((item) => {
          const isChecked = selectedRating === item.value;
          return (
            <div key={item.value} className="filter-check-item">
              <label>
                <input
                  type="checkbox"
                  name="rating"
                  checked={isChecked}
                  onChange={() => onSelectRating(isChecked ? null : item.value)}
                />
                <div
                  className="tj-rating-wrapper rating d-inline-flex align-items-center gap-1"
                  role="img"
                  aria-label={`Rated ${item.value} and up`}
                >
                  <div className="stars-mini d-inline-flex" style={{ color: "#ffb800" }}>
                    {[...Array(5)].map((_, i) => (
                      <i
                        key={i}
                        className={i < Math.floor(item.value) ? "tji-star" : "tji-star"}
                        style={{ opacity: i < item.value ? 1 : 0.25, fontSize: "14px" }}
                      />
                    ))}
                  </div>
                  <span className="label ms-2">{item.label}</span>
                </div>
              </label>
            </div>
          );
        })}
      </div>

      {/* Action Buttons */}
      <div className="tj-filter-btn-area">
        <button
          type="button"
          className="tj-btn-primary tj-btn-full flip-text-wrap"
          onClick={onApplyFilters}
        >
          <span className="btn-text">Apply</span>
        </button>
        <button
          type="button"
          className="tj-btn-primary tj-btn-primary-border flip-text-wrap"
          onClick={onResetFilters}
        >
          <span className="btn-text">Reset</span>
        </button>
      </div>
    </div>
  );
}
