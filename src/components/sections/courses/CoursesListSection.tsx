"use client";

import { useState, useMemo } from "react";
import CoursesFilterBar from "./subcomponents/CoursesFilterBar";
import CoursesSidebar from "./subcomponents/CoursesSidebar";
import CoursesActiveFilters from "./subcomponents/CoursesActiveFilters";
import CourseCard from "./subcomponents/CourseCard";
import CoursesPagination from "./subcomponents/CoursesPagination";
import { allCourses } from "@/data/courses";

interface CoursesListSectionProps {
  initialCategory?: string;
}

export default function CoursesListSection({ initialCategory }: CoursesListSectionProps) {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    initialCategory ? [initialCategory] : ["Design"]
  );
  const [selectedLevels, setSelectedLevels] = useState<string[]>(["Beginner"]);
  const [selectedRating, setSelectedRating] = useState<number | null>(4.5);
  const [maxPrice, setMaxPrice] = useState<number>(135);
  const [sortBy, setSortBy] = useState("popular");
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const toggleCategory = (cat: string) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
    setCurrentPage(1);
  };

  const toggleLevel = (lvl: string) => {
    setSelectedLevels((prev) =>
      prev.includes(lvl) ? prev.filter((l) => l !== lvl) : [...prev, lvl]
    );
    setCurrentPage(1);
  };

  const toggleWishlist = (id: number) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCategories([]);
    setSelectedLevels([]);
    setSelectedRating(null);
    setMaxPrice(135);
    setCurrentPage(1);
  };

  // Filter and sort courses
  const filteredCourses = useMemo(() => {
    return allCourses
      .filter((course) => {
        // Search query
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchTitle = course.title.toLowerCase().includes(q);
          const matchCategory = course.category.toLowerCase().includes(q);
          const matchAuthor = course.author?.name?.toLowerCase().includes(q) || course.instructor?.name?.toLowerCase().includes(q);
          if (!matchTitle && !matchCategory && !matchAuthor) return false;
        }

        // Categories
        if (selectedCategories.length > 0) {
          const matchCat = selectedCategories.some((cat) =>
            course.category.toLowerCase().includes(cat.toLowerCase())
          );
          if (!matchCat) return false;
        }

        // Levels
        if (selectedLevels.length > 0 && !selectedLevels.includes("All levels")) {
          const matchLevel = selectedLevels.some(
            (lvl) => course.level.toLowerCase() === lvl.toLowerCase()
          );
          if (!matchLevel) return false;
        }

        // Rating
        if (selectedRating !== null) {
          if (course.rating.score < selectedRating) return false;
        }

        // Price
        const priceNum = course.price.isFree ? 0 : parseFloat(course.price.current.replace(/[^0-9.]/g, "")) || 0;
        if (priceNum > maxPrice) return false;

        return true;
      })
      .sort((a, b) => {
        if (sortBy === "new") return b.id - a.id;
        if (sortBy === "trending") return (b.badge === "Trending" || b.badge === "trending") ? 1 : -1;
        if (sortBy === "price-low") {
          const pA = a.price.isFree ? 0 : parseFloat(a.price.current.replace(/[^0-9.]/g, "")) || 0;
          const pB = b.price.isFree ? 0 : parseFloat(b.price.current.replace(/[^0-9.]/g, "")) || 0;
          return pA - pB;
        }
        if (sortBy === "price-high") {
          const pA = a.price.isFree ? 0 : parseFloat(a.price.current.replace(/[^0-9.]/g, "")) || 0;
          const pB = b.price.isFree ? 0 : parseFloat(b.price.current.replace(/[^0-9.]/g, "")) || 0;
          return pB - pA;
        }
        // default "popular"
        return b.rating.score - a.rating.score;
      });
  }, [searchQuery, selectedCategories, selectedLevels, selectedRating, maxPrice, sortBy]);

  // Active filter tags for chip display
  const activeChips = useMemo(() => {
    const list: { id: string; label: string; onRemove: () => void }[] = [];
    selectedCategories.forEach((cat) => {
      list.push({
        id: `cat-${cat}`,
        label: cat,
        onRemove: () => toggleCategory(cat),
      });
    });
    selectedLevels.forEach((lvl) => {
      list.push({
        id: `lvl-${lvl}`,
        label: lvl,
        onRemove: () => toggleLevel(lvl),
      });
    });
    if (selectedRating !== null) {
      list.push({
        id: `rating-${selectedRating}`,
        label: `${selectedRating} & up`,
        onRemove: () => setSelectedRating(null),
      });
    }
    if (searchQuery.trim()) {
      list.push({
        id: `q-${searchQuery}`,
        label: `"${searchQuery}"`,
        onRemove: () => setSearchQuery(""),
      });
    }
    if (maxPrice < 135) {
      list.push({
        id: `price-${maxPrice}`,
        label: `Under $${maxPrice}`,
        onRemove: () => setMaxPrice(135),
      });
    }
    return list;
  }, [selectedCategories, selectedLevels, selectedRating, searchQuery, maxPrice]);

  // Display all matching courses (or paginated slice)
  const coursesToDisplay = filteredCourses;

  return (
    <section className="tj-course-section section-gap-bottom fix">
      <div className="container">
        {/* Filter bar */}
        <div className="row">
          <div className="col-12">
            <CoursesFilterBar
              totalCount={allCourses.length}
              currentCount={coursesToDisplay.length}
              sortBy={sortBy}
              onSortChange={setSortBy}
              viewMode={viewMode}
              onViewModeChange={setViewMode}
            />
          </div>
        </div>

        {/* Sidebar + Main Grid */}
        <div className="row flex-lg-row flex-column-reverse">
          <div className="col-xl-3 col-lg-4">
            <CoursesSidebar
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              selectedCategories={selectedCategories}
              onToggleCategory={toggleCategory}
              selectedLevels={selectedLevels}
              onToggleLevel={toggleLevel}
              selectedRating={selectedRating}
              onSelectRating={setSelectedRating}
              maxPrice={maxPrice}
              onMaxPriceChange={setMaxPrice}
              onResetFilters={resetFilters}
              onApplyFilters={() => setCurrentPage(1)}
            />
          </div>

          <div className="col-xl-9 col-lg-8">
            <CoursesActiveFilters filters={activeChips} />

            {coursesToDisplay.length === 0 ? (
              <div className="text-center py-5 bg-light rounded-4 my-4">
                <i className="tji-search fs-1 text-muted mb-3 d-inline-block"></i>
                <h4 className="tj-fs-h6 mb-2">No courses found matching your criteria</h4>
                <p className="text-muted mb-4">
                  Try adjusting your filter settings or search query to find available courses.
                </p>
                <button
                  type="button"
                  className="tj-btn-primary tj-btn-primary-sm flip-text-wrap"
                  onClick={resetFilters}
                >
                  <span className="btn-text">Reset all filters</span>
                </button>
              </div>
            ) : (
              <div
                className={`row tj-course-wrapper rg-30 ${
                  viewMode === "list" ? "list-view-active" : ""
                }`}
              >
                {coursesToDisplay.map((course) => (
                  <CourseCard
                    key={course.id}
                    course={course}
                    isWishlisted={wishlist.includes(course.id)}
                    onToggleWishlist={toggleWishlist}
                  />
                ))}
              </div>
            )}

            <CoursesPagination
              currentPage={currentPage}
              totalPages={3}
              onPageChange={setCurrentPage}
              totalCourses={300}
              currentCount={coursesToDisplay.length}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
