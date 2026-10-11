"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import FlipButton from "../common/FlipButton";
import { instructorsData } from "@/data/instructors";
import { useIsClient } from "@/hooks/useIsClient";

export default function InstructorSection() {
  const swiperRef = useRef<SwiperType | null>(null);
  const isClient = useIsClient();

  return (
    <section className="tj-instructor-section section-gap fix">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec-heading">
              <span className="sec-subtitle tj-fade-anim" data-direction="top">
                <i className="tji-subtitle"></i>Meet our Experts
              </span>
              <div className="sec-heading-inner">
                <h2 className="sec-title tj-fade-anim" data-delay=".3">
                  Learn From Our Expert on Instructors.
                </h2>
                <div className="tj-fade-anim" data-delay="0.5">
                  <div className="slider-navigation">
                    <button
                      type="button"
                      className="slider-prev slider-prev-2"
                      onClick={() => swiperRef.current?.slidePrev()}
                      aria-label="Previous Instructor"
                    >
                      <span className="anim-icon">
                        <i className="tji-arrow-left-3"></i>
                        <i className="tji-arrow-left-3"></i>
                      </span>
                    </button>
                    <button
                      type="button"
                      className="slider-next slider-next-2"
                      onClick={() => swiperRef.current?.slideNext()}
                      aria-label="Next Instructor"
                    >
                      <span className="anim-icon">
                        <i className="tji-arrow-right-3"></i>
                        <i className="tji-arrow-right-3"></i>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12">
            <div className="tj__slider-wrapper tj-fade-anim" data-delay=".3">
              {isClient ? (
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                  }}
                  slidesPerView={1}
                  spaceBetween={15}
                  loop={true}
                  speed={1000}
                  autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                    el: ".instructor-pagination-1",
                  }}
                  breakpoints={{
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    992: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                    1200: {
                      slidesPerView: 3,
                      spaceBetween: 30,
                    },
                  }}
                  className="tj-instructor-slider"
                >
                  {instructorsData.map((item) => (
                    <SwiperSlide key={item.id}>
                      <div className={`tj-instructor-item ${item.bgClass}`}>
                        <div className="tj-instructor-img">
                          <Link href={item.href}>
                            <Image
                              src={item.image}
                              alt={item.name}
                              width={350}
                              height={320}
                              style={{ width: "100%", height: "auto" }}
                            />
                          </Link>
                        </div>

                        <div className="tj-instructor-content">
                          <span className="tj-badge">{item.badge}</span>
                          <div className="name-area">
                            <h3 className="name">
                              <Link href={item.href}>{item.name}</Link>
                            </h3>
                            <span className="designation">
                              {item.designation}
                            </span>
                          </div>

                          <div className="tj-instructor-info tj-border-top">
                            <div className="info-item">
                              <span className="title">{item.coursesCount}</span>
                              <span className="text">Course</span>
                            </div>
                            <div className="info-item">
                              <span className="title">{item.studentsCount}</span>
                              <span className="text">Student</span>
                            </div>
                            <div className="info-item">
                              <div className="single-rating">
                                <i className="tji-star"></i>
                                <span className="label">{item.rating}</span>
                              </div>
                              <span className="text">Rating</span>
                            </div>
                          </div>

                          <div className="btn-area">
                            <FlipButton
                              href={item.href}
                              className="tj-btn-primary tj-btn-full flip-text-wrap"
                              icon="tji-arrow-right-2"
                            >
                              See profile
                            </FlipButton>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <div className="tj-instructor-slider swiper swiper-container">
                  <div className="swiper-wrapper">
                    {instructorsData.map((item) => (
                      <div className="swiper-slide" key={item.id}>
                        <div className={`tj-instructor-item ${item.bgClass}`}>
                          <div className="tj-instructor-img">
                            <Link href={item.href}>
                              <Image
                                src={item.image}
                                alt={item.name}
                                width={350}
                                height={320}
                                style={{ width: "100%", height: "auto" }}
                              />
                            </Link>
                          </div>

                          <div className="tj-instructor-content">
                            <span className="tj-badge">{item.badge}</span>
                            <div className="name-area">
                              <h3 className="name">
                                <Link href={item.href}>{item.name}</Link>
                              </h3>
                              <span className="designation">
                                {item.designation}
                              </span>
                            </div>

                            <div className="tj-instructor-info tj-border-top">
                              <div className="info-item">
                                <span className="title">{item.coursesCount}</span>
                                <span className="text">Course</span>
                              </div>
                              <div className="info-item">
                                <span className="title">{item.studentsCount}</span>
                                <span className="text">Student</span>
                              </div>
                              <div className="info-item">
                                <div className="single-rating">
                                  <i className="tji-star"></i>
                                  <span className="label">{item.rating}</span>
                                </div>
                                <span className="text">Rating</span>
                              </div>
                            </div>

                            <div className="btn-area">
                              <FlipButton
                                href={item.href}
                                className="tj-btn-primary tj-btn-full flip-text-wrap"
                                icon="tji-arrow-right-2"
                              >
                                See profile
                              </FlipButton>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              <div className="swiper-pagination-area instructor-pagination-1"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
