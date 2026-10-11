"use client";

import Image from "next/image";
import Link from "next/link";
import { CourseItem } from "@/types";

interface CourseCardProps {
  course: CourseItem;
  isWishlisted: boolean;
  onToggleWishlist: (id: number) => void;
}

// Some data entries already include "( )" around the count — normalize it.
const formatCount = (count: string) => count.replace(/[()]/g, "");

export default function CourseCard({
  course,
  isWishlisted,
  onToggleWishlist,
}: CourseCardProps) {
  const authorName = course.author?.name || course.instructor?.name || "Expert Instructor";
  const authorAvatar =
    course.author?.avatar || course.instructor?.avatar || "/assets/images/users/user-img-1.png";
  const courseLink = course.href || "/courses-details";

  return (
    <div className="col-xl-4 col-md-6 course-col">
      <div className="tj-course-item">
        {/* Thumbnail — sizing handled by theme `.tj-course-img` (aspect-ratio + overflow hidden) */}
        <div className="tj-course-img">
          <Link href={courseLink}>
            <Image
              src={course.image}
              alt={course.title}
              width={400}
              height={226}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
              className={isWishlisted ? "active" : ""}
              onClick={() => onToggleWishlist(course.id)}
              aria-label="Save to Wishlist"
            >
              <i
                className="tji-heart"
                style={{ color: isWishlisted ? "#ff4d00" : undefined }}
              ></i>
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

          <h3 className="title tj-fs-h5">
            <Link href={courseLink}>{course.title}</Link>
          </h3>

          <span className="author">
            <Link href="/instructor">
              <Image
                src={authorAvatar}
                alt={authorName}
                width={28}
                height={28}
                style={{ display: "inline-block", marginRight: "6px", borderRadius: "50%" }}
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
                <span>({formatCount(course.rating.count)})</span>
              </span>
            </div>
            <div className="course-price tj-fs-h6">
              {course.price.isFree ? (
                "Free"
              ) : (
                <>
                  {course.price.original && <del>{course.price.original}</del>}
                  {course.price.current}
                </>
              )}
            </div>
          </div>

          <Link className="tj-btn-primary tj-btn-primary-sm flip-text-wrap" href={courseLink}>
            <span className="btn-text">
              <span>Start learning</span>
            </span>
            <span className="btn-icon">
              <i className="tji-arrow-right-2"></i>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
