"use client";

import { useState, useMemo } from "react";
import { instructorListData } from "@/data/instructors";
import InstructorFilterBar from "./subcomponents/InstructorFilterBar";
import InstructorFilterSidebar from "./subcomponents/InstructorFilterSidebar";
import InstructorActiveFilters from "./subcomponents/InstructorActiveFilters";
import InstructorGridCard from "./subcomponents/InstructorGridCard";
import InstructorPagination from "./subcomponents/InstructorPagination";

export default function InstructorListSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>(["Design"]);
  const [priceRange, setPriceRange] = useState(135);
  const [selectedRating, setSelectedRating] = useState<number | null>(4.5);
  const [sortBy, setSortBy] = useState("top_rated");
  const [currentPage, setCurrentPage] = useState(1);

  const toggleCategory = (cat: string) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const handleReset = () => {
    setSearchQuery("");
    setSelectedCategories([]);
    setPriceRange(135);
    setSelectedRating(null);
  };

  // Filtered and sorted list
  const filteredInstructors = useMemo(() => {
    return instructorListData.filter((instructor) => {
      // Search filter
      if (
        searchQuery &&
        !instructor.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !instructor.designation.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }

      // Category filter
      if (
        selectedCategories.length > 0 &&
        !selectedCategories.includes(instructor.expertise)
      ) {
        return false;
      }

      // Price filter
      if (instructor.hourlyRate > priceRange) {
        return false;
      }

      // Rating filter
      if (selectedRating !== null && instructor.rating < selectedRating) {
        return false;
      }

      return true;
    });
  }, [searchQuery, selectedCategories, priceRange, selectedRating]);

  // Display instructors (fallback to all if filter produces empty for demo experience)
  const displayInstructors =
    filteredInstructors.length > 0 ? filteredInstructors : instructorListData;

  return (
    <section className="tj-course-section section-gap-bottom fix">
      <div className="container">
        {/* Sub-component: Filter Bar Top */}
        <div className="row">
          <div className="col-12">
            <InstructorFilterBar
              totalCount={300}
              shownCount={displayInstructors.length}
              sortBy={sortBy}
              onSortChange={setSortBy}
            />
          </div>
        </div>

        {/* 2-Column Main Section with Sidebar */}
        <div className="row flex-lg-row flex-column-reverse">
          {/* Sub-component: Sidebar Filters */}
          <div className="col-xl-3 col-lg-4">
            <InstructorFilterSidebar
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              selectedCategories={selectedCategories}
              onToggleCategory={toggleCategory}
              priceRange={priceRange}
              onPriceChange={setPriceRange}
              selectedRating={selectedRating}
              onSelectRating={setSelectedRating}
              onReset={handleReset}
              onApply={() => {}}
            />
          </div>

          {/* Right Column: Active Filters, Instructor Grid, Pagination */}
          <div className="col-xl-9 col-lg-8">
            {/* Sub-component: Active Filter Badges */}
            <InstructorActiveFilters
              activeCategories={selectedCategories}
              activeRating={selectedRating}
              onRemoveCategory={(cat) =>
                setSelectedCategories((prev) => prev.filter((c) => c !== cat))
              }
              onRemoveRating={() => setSelectedRating(null)}
            />

            {/* Sub-components: Instructor Cards Grid */}
            <div className="row rg-30">
              {displayInstructors.map((instructor) => (
                <InstructorGridCard key={instructor.id} instructor={instructor} />
              ))}
            </div>

            {/* Sub-component: Pagination */}
            <InstructorPagination
              currentPage={currentPage}
              totalPages={3}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
