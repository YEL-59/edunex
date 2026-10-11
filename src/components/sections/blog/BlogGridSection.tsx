"use client";

import { useState } from "react";
import BlogFilterTabs from "./subcomponents/BlogFilterTabs";
import BlogCard from "./subcomponents/BlogCard";
import BlogPagination from "./subcomponents/BlogPagination";
import { gridBlogs } from "@/data/blogs";

export default function BlogGridSection() {
  const [activeFilter, setActiveFilter] = useState("*");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts =
    activeFilter === "*"
      ? gridBlogs
      : gridBlogs.filter((post) => {
          const matchCategory = post.category.toLowerCase() === activeFilter.toLowerCase();
          const matchTag = post.filterTags?.includes(activeFilter.toLowerCase());
          return matchCategory || matchTag;
        });

  return (
    <section className="tj-blog-section section-gap-bottom fix">
      <div className="container">
        {/* Section Heading */}
        <div className="row">
          <div className="col-12">
            <div className="sec-heading sec-heading-center text-center mb-4">
              <span className="sec-subtitle tj-fade-anim d-inline-block" data-direction="top">
                <i className="tji-subtitle"></i>Latest blogs
              </span>
              <h2 className="sec-title tj-fade-anim">Explore Latest Blog and Insights.</h2>
            </div>

            {/* Category Filter Buttons */}
            <BlogFilterTabs
              activeFilter={activeFilter}
              onFilterChange={(filter) => {
                setActiveFilter(filter);
                setCurrentPage(1);
              }}
            />
          </div>
        </div>

        {/* Filtered Posts Grid */}
        <div className="row tj-course-filter tj_filter_item_wrapper tj-fade-anim">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* Pagination */}
        <BlogPagination
          currentPage={currentPage}
          totalPages={3}
          onPageChange={setCurrentPage}
        />
      </div>
    </section>
  );
}
