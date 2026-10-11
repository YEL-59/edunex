"use client";

import Image from "next/image";
import Link from "next/link";
import { CourseItem } from "@/types";

interface CourseCardProps {
  course: CourseItem;
  isWishlisted: boolean;
  onToggleWishlist: (id: number) => void;
  viewMode?: "grid" | "list";
}

export default function CourseCard({
  course,
  isWishlisted,
  onToggleWishlist,
  viewMode = "grid",
}: CourseCardProps) {
  const authorName = course.author?.name || course.instructor?.name || "Expert Instructor";
  const authorAvatar = course.author?.avatar || course.instructor?.avatar || "/assets/images/users/user-img-1.png";
  const courseLink = course.href || "/courses-details";

  if (viewMode === "list") {
    return (
      <div className="col-12 course-col mb-4">
        <div
          className="tj-course-item d-flex flex-column flex-md-row gap-4 p-3 rounded"
          style={{
            background: "var(--tj-color-common-white, #fff)",
            border: "1px solid var(--tj-color-border-1, #e6e8ec)",
          }}
        >
          <div
            className="tj-course-img position-relative flex-shrink-0"
            style={{ width: "100%", maxWidth: "320px", height: "220px", borderRadius: "12px", overflow: "hidden" }}
          >
            <Link href={courseLink} className="d-block w-100 h-100 position-relative">
              <Image
                src={course.image}
                alt={course.title}
                fill
                sizes="(max-width: 768px) 100vw, 320px"
                className="object-fit-cover"
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
                className={isWishlisted ? "active text-danger" : ""}
                onClick={() => onToggleWishlist(course.id)}
                aria-label="Wishlist"
              >
                <i className="tji-heart"></i>
              </button>
            </div>
          </div>

          <div className="tj-course-content d-flex flex-column justify-content-between flex-grow-1 p-0">
            <div>
              <div className="tj-cat-level-wrap mb-2">
                <div className="tj-categories">
                  <Link className="tj-cat" href={courseLink}>
                    {course.category}
                  </Link>
                </div>
                <div className="tj-level">
                  <span>{course.level}</span>
                </div>
              </div>

              <h3 className="title tj-fs-h6 mb-2">
                <Link href={courseLink}>{course.title}</Link>
              </h3>

              <span className="author d-inline-flex align-items-center gap-2 mb-3">
                <Link href="/instructor" className="d-inline-flex align-items-center gap-2">
                  <Image
                    src={authorAvatar}
                    alt={authorName}
                    width={32}
                    height={32}
                    className="rounded-circle"
                  />
                  <span>{authorName}</span>
                </Link>
              </span>

              <div className="course-meta mb-3">
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
            </div>

            <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 pt-2 border-top">
              <div className="d-flex align-items-center gap-3">
                <div className="single-rating d-inline-flex align-items-center gap-1" style={{ color: "#ffb800" }}>
                  <i className="tji-star"></i>
                  <span className="label text-dark fw-semibold">
                    {course.rating.score}{" "}
                    <span className="text-muted fw-normal">({course.rating.count})</span>
                  </span>
                </div>
                <div className="course-price tj-fs-h6 m-0">
                  {course.price.original && <del className="me-1">{course.price.original}</del>}
                  {course.price.current}
                </div>
              </div>

              <Link
                className="tj-btn-primary tj-btn-primary-sm flip-text-wrap"
                href={courseLink}
              >
                <span className="btn-text">Start learning</span>
                <span className="btn-icon">
                  <i className="tji-arrow-right-2"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="col-xl-4 col-md-6 course-col">
      <div className="tj-course-item">
        <div className="tj-course-img position-relative" style={{ height: "240px", overflow: "hidden" }}>
          <Link href={courseLink} className="d-block w-100 h-100 position-relative">
            <Image
              src={course.image}
              alt={course.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-fit-cover"
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
              className={isWishlisted ? "active text-danger" : ""}
              onClick={() => onToggleWishlist(course.id)}
              aria-label="Wishlist"
            >
              <i className="tji-heart"></i>
            </button>
          </div>
        </div>
        <div className="tj-course-content">
          <div className="tj-cat-level-wrap">
            <div className="tj-categories">
              <Link className="tj-cat" href={courseLink}>
                {course.category}
              </Link>
            </div>
            <div className="tj-level">
              <span>{course.level}</span>
            </div>
          </div>
          <h3 className="title tj-fs-h6">
            <Link href={courseLink}>{course.title}</Link>
          </h3>
          <span className="author">
            <Link href="/instructor">
              <Image
                src={authorAvatar}
                alt={authorName}
                width={30}
                height={30}
                className="rounded-circle me-1"
              />
              {authorName}
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
                <span>({course.rating.count})</span>
              </span>
            </div>
            <div className="course-price tj-fs-h6">
              {course.price.original && <del>{course.price.original}</del>}{" "}
              {course.price.current}
            </div>
          </div>
          <Link
            className="tj-btn-primary tj-btn-primary-sm tj-btn-full flip-text-wrap"
            href={courseLink}
          >
            <span className="btn-text">Start learning</span>
            <span className="btn-icon">
              <i className="tji-arrow-right-2"></i>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
