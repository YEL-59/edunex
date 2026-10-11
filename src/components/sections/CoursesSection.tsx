"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FlipButton from "../common/FlipButton";
import { coursesData, courseFilterTabs } from "@/data/courses";

export default function CoursesSection() {
  const [activeFilter, setActiveFilter] = useState("*");
  const [wishlist, setWishlist] = useState<number[]>([]);

  const toggleWishlist = (id: number) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredCourses =
    activeFilter === "*"
      ? coursesData
      : coursesData.filter((c) => c.filterCategories.includes(activeFilter));

  return (
    <section className="tj-course-section section-gap fix tj-theme-bg">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec-heading sec-heading-center">
              <span className="sec-subtitle tj-fade-anim" data-direction="top">
                <i className="tji-subtitle"></i> Top Courses
              </span>
              <h2 className="sec-title tj-fade-anim" data-delay="0.3">
                Explore Courses Built For Success.
              </h2>
            </div>

            {/* Filter Buttons */}
            <div className="tj-filter-btn-wrap tj-fade-anim" data-delay="0.5">
              <div className="tj_filter_btn_group">
                {courseFilterTabs.map((tab, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`tj_filter_btn ${
                      activeFilter === tab.filter ? "active" : ""
                    }`}
                    onClick={() => setActiveFilter(tab.filter)}
                  >
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Filtered Courses Grid */}
        <div className="row tj-course-filter tj_filter_item_wrapper tj-fade-anim" data-delay="0.5">
          {filteredCourses.map((course) => (
            <div
              className={`col-lg-4 col-md-6 tj_filter_item ${course.filterCategories.join(
                " "
              )}`}
              key={course.id}
            >
              <div className="tj-course-item">
                <div className="tj-course-img">
                  <Link href={course.href}>
                    <Image
                      src={course.image}
                      alt={course.title}
                      width={400}
                      height={240}
                      style={{ width: "100%", height: "auto" }}
                    />
                  </Link>
                  {course.badge && (
                    <div className="tj-product-badge">
                      <span>{course.badge}</span>
                    </div>
                  )}
                  <div className="tj-wishlist-btn">
                    <button
                      type="button"
                      aria-label="Save to Wishlist"
                      onClick={() => toggleWishlist(course.id)}
                      className={wishlist.includes(course.id) ? "active" : ""}
                    >
                      <i
                        className="tji-heart"
                        style={{
                          color: wishlist.includes(course.id) ? "#ff4d00" : undefined,
                        }}
                      ></i>
                    </button>
                  </div>
                </div>

                <div className="tj-course-content">
                  <div className="tj-cat-level-wrap">
                    <div className="tj-categories">
                      <Link className="tj-cat" href={course.href}>
                        {course.category}
                      </Link>
                    </div>
                    <div className="tj-level">
                      <span>{course.level}</span>
                    </div>
                  </div>

                  <h3 className="title tj-fs-h5">
                    <Link href={course.href}>{course.title}</Link>
                  </h3>

                  <span className="author">
                    <Link href={course.instructor.href}>
                      <Image
                        src={course.instructor.avatar}
                        alt={course.instructor.name}
                        width={28}
                        height={28}
                        style={{ display: "inline-block", marginRight: "6px" }}
                      />
                      {course.instructor.name}
                    </Link>
                  </span>

                  <div className="course-meta">
                    <span>
                      <i className="tji-book"></i>
                      {course.meta.lessons}
                    </span>
                    <span>
                      <i className="tji-clock"></i>
                      {course.meta.duration}
                    </span>
                    <span>
                      <i className="tji-user-duo"></i>
                      {course.meta.students}
                    </span>
                  </div>

                  <div className="tj-course-price-wrap">
                    <div className="single-rating">
                      <i className="tji-star"></i>
                      <span className="label">
                        {course.rating.score}
                        <span>{course.rating.count}</span>
                      </span>
                    </div>
                    <div className="course-price tj-fs-h6">
                      {course.price.original && (
                        <del>{course.price.original}</del>
                      )}{" "}
                      {course.price.current}
                    </div>
                  </div>

                  <FlipButton
                    href={course.href}
                    className="tj-btn-primary tj-btn-primary-md tj-btn-full flip-text-wrap"
                    icon="tji-arrow-right-2"
                  >
                    Start learning
                  </FlipButton>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="row">
          <div className="col-12">
            <div className="course-bottom-content">
              <span>
                <Image
                  src="/assets/images/icons/fire.svg"
                  alt="Popular fire"
                  width={16}
                  height={16}
                  style={{ display: "inline-block", marginRight: "6px" }}
                />{" "}
                Popular
              </span>
              <p>Learn with 200+ world-class courses.</p>
              <div>
                <Link className="tj-text-btn-2" href="/courses">
                  <span className="btn-text">
                    <span>Explore more courses</span>
                  </span>
                  <span className="btn-icon">
                    <i className="tji-arrow-right-2"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
