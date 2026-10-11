"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CourseDetailsBreadcrumb from "./subcomponents/CourseDetailsBreadcrumb";
import CourseSharePopup from "./subcomponents/CourseSharePopup";
import { CourseItem } from "@/types";

interface CourseDetailsHeaderProps {
  course: CourseItem;
}

export default function CourseDetailsHeader({ course }: CourseDetailsHeaderProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const authorName = course.author?.name || course.instructor?.name || "Emmielar Josan";
  const authorAvatar = course.author?.instructorImage || course.author?.avatar || "/assets/images/instructor/instructor-4.webp";

  return (
    <section className="tj-page-header tj-page-header-2 position-relative overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tj-page-header-content position-relative">
              {/* Breadcrumb */}
              <CourseDetailsBreadcrumb category={course.category} title="Course details" />

              {/* Category */}
              <div className="tj-categories mb-2">
                <Link className="tj-cat" href="/courses">
                  {course.category}
                </Link>
              </div>

              {/* Title & Desc */}
              <h1 className="tj-page-title mb-3">{course.title}</h1>
              <p className="tj-page-desc mb-4 text-muted" style={{ maxWidth: "800px" }}>
                {course.description ||
                  "Build real-world AI systems from neural networks to deployment. Master Python, TensorFlow and MLOps through hands-on projects designed."}
              </p>

              {/* Meta */}
              <div className="course-meta d-flex flex-wrap align-items-center gap-3 gap-md-4 mb-4">
                <div className="single-rating d-inline-flex align-items-center gap-1" style={{ color: "#ffb800" }}>
                  <i className="tji-star"></i>
                  <span className="label fw-bold text-dark">
                    {course.rating.score}
                    <span className="text-muted fw-normal">({course.rating.count})</span>
                  </span>
                </div>
                <span>
                  <i className="tji-book me-1"></i>
                  {course.meta.lessons}
                </span>
                <span>
                  <i className="tji-clock me-1"></i>
                  {course.meta.duration}
                </span>
                <span>
                  <i className="tji-user-duo me-1"></i>
                  {course.meta.students} Students
                </span>
                <span>
                  <i className="tji-layers me-1"></i>
                  {course.level}
                </span>
              </div>

              {/* Header Bottom (Instructor + Actions) */}
              <div className="tj-page-header-bottom d-flex flex-wrap align-items-center justify-content-between gap-3 pt-3 border-top">
                <div className="author-wrap d-flex align-items-center gap-3">
                  <div
                    className="author-avatar position-relative rounded-circle overflow-hidden flex-shrink-0"
                    style={{ width: "48px", height: "48px" }}
                  >
                    <Image
                      src={authorAvatar}
                      alt={authorName}
                      fill
                      sizes="48px"
                      className="object-fit-cover"
                    />
                  </div>
                  <div className="author-info">
                    <span className="designation text-muted small d-block">Created by</span>
                    <h3 className="name tj-fs-h6 m-0">
                      <Link href="/instructor">{authorName}</Link>
                    </h3>
                  </div>
                </div>

                <div className="btn-area d-flex align-items-center gap-3">
                  <CourseSharePopup buttonText="Share" />

                  <button
                    type="button"
                    className={`tj-wishlist-btn-2 btn border d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill ${
                      isWishlisted ? "btn-danger text-white border-danger" : "btn-outline-secondary"
                    }`}
                    onClick={() => setIsWishlisted(!isWishlisted)}
                  >
                    <span className="btn-icon">
                      <i className="tji-heart"></i>
                    </span>
                    <span className="btn-text">{isWishlisted ? "Wishlisted" : "Wishlist"}</span>
                  </button>
                </div>
              </div>

              {/* Background Shapes */}
              <div className="shape position-absolute end-0 top-0 d-none d-lg-block opacity-50" style={{ pointerEvents: "none" }}>
                <Image
                  src="/assets/images/shapes/stars.png"
                  alt="Decorative Stars"
                  width={140}
                  height={140}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
