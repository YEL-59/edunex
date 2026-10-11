"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { allCourses } from "@/data/courses";
import { useIsClient } from "@/hooks/useIsClient";
import CourseRelatedNav from "./subcomponents/CourseRelatedNav";

export default function CourseRelatedSection() {
  const swiperRef = useRef<SwiperType | null>(null);
  const isClient = useIsClient();
  const [wishlist, setWishlist] = useState<number[]>([]);

  const toggleWishlist = (id: number) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const relatedCourses = allCourses.slice(0, 6);

  return (
    <section className="tj-course-section section-gap section-separator fix">
      <div className="container">
        {/* Section Heading */}
        <div className="row">
          <div className="col-12">
            <div className="sec-heading">
              <span className="sec-subtitle tj-fade-anim" data-direction="top">
                <i className="tji-subtitle"></i>Keep learning
              </span>
              <div className="sec-heading-inner d-flex flex-wrap align-items-center justify-content-between">
                <h2 className="sec-title tj-fade-anim m-0" data-delay="0.3">
                  Related Courses.
                </h2>
                <div className="tj-fade-anim" data-duration="0.5">
                  <CourseRelatedNav
                    onPrev={() => swiperRef.current?.slidePrev()}
                    onNext={() => swiperRef.current?.slideNext()}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Courses Swiper Slider */}
        <div className="row">
          <div className="col-12">
            <div className="tj__slider-wrapper">
              <div className="tj-course-slider swiper swiper-container tj-fade-anim" data-delay=".3">
                {isClient ? (
                  <Swiper
                    modules={[Navigation, Autoplay]}
                    onBeforeInit={(swiper) => {
                      swiperRef.current = swiper;
                    }}
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                      768: { slidesPerView: 2 },
                      1200: { slidesPerView: 3 },
                    }}
                    loop={true}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                  >
                    {relatedCourses.map((course) => {
                      const isWishlisted = wishlist.includes(course.id);
                      const authorName = course.author?.name || course.instructor?.name || "Expert Instructor";
                      const authorAvatar =
                        course.author?.avatar || course.instructor?.avatar || "/assets/images/users/user-img-1.png";

                      return (
                        <SwiperSlide key={course.id}>
                          <div className="tj-course-item h-100">
                            <div className="tj-course-img position-relative" style={{ height: "240px" }}>
                              <Link href="/courses-details" className="d-block w-100 h-100 position-relative">
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
                                  onClick={() => toggleWishlist(course.id)}
                                  aria-label="Wishlist"
                                >
                                  <i className="tji-heart"></i>
                                </button>
                              </div>
                            </div>
                            <div className="tj-course-content">
                              <div className="tj-cat-level-wrap">
                                <div className="tj-categories">
                                  <Link className="tj-cat" href="/courses-details">
                                    {course.category}
                                  </Link>
                                </div>
                                <div className="tj-level">
                                  <span>{course.level}</span>
                                </div>
                              </div>
                              <h3 className="title tj-fs-h5">
                                <Link href="/courses-details">{course.title}</Link>
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
                                className="tj-btn-primary tj-btn-primary-md flip-text-wrap"
                                href="/courses-details"
                              >
                                <span className="btn-text">Start learning</span>
                                <span className="btn-icon">
                                  <i className="tji-arrow-right-2"></i>
                                </span>
                              </Link>
                            </div>
                          </div>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                ) : (
                  <div className="row g-4">
                    {relatedCourses.slice(0, 3).map((course) => (
                      <div key={course.id} className="col-lg-4 col-md-6">
                        <div className="tj-course-item">
                          <div className="tj-course-img position-relative" style={{ height: "240px" }}>
                            <Image
                              src={course.image}
                              alt={course.title}
                              fill
                              sizes="(max-width: 768px) 100vw, 33vw"
                              className="object-fit-cover"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
