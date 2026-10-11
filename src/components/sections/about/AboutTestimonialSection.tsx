"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import RatingStars from "@/components/common/RatingStars";
import FlipButton from "@/components/common/FlipButton";
import { aboutTestimonialsData } from "@/data/about";
import { useIsClient } from "@/hooks/useIsClient";

export default function AboutTestimonialSection() {
  const swiperRef = useRef<SwiperType | null>(null);
  const isClient = useIsClient();

  return (
    <section className="tj-testimonial-section-4 section-gap section-gap-x fix">
      <div className="container">
        <div className="row rg-30">
          {/* Left Heading & CTA Column */}
          <div className="col-12 col-lg-5">
            <div className="sec-heading about-testimonial-heading">
              <span className="sec-subtitle tj-fade-anim" data-direction="top">
                <i className="tji-subtitle"></i>Students feedback
              </span>
              <h2 className="sec-title tj-fade-anim" data-delay=".3">
                Explore our students users feedback.
              </h2>
              <p className="desc tj-fade-anim" data-delay=".4">
                We help people build{" "}
                <strong>strong, marketable creative practice</strong> — through
                hand-on projects, one-to-one mentorship, and a community.
              </p>
              <div className="btn-wrap tj-fade-anim" data-delay=".5">
                <FlipButton href="/courses" icon="tji-arrow-right-2">
                  Start learning free
                </FlipButton>
              </div>
            </div>
          </div>

          {/* Right Swiper Slider Column */}
          <div className="col-12 col-lg-7">
            <div className="tj-testimonial-wrapper-4 tj__slider-wrapper">
              <div
                className="tj-testimonial-slider-3 swiper swiper-container tj-fade-anim"
                data-delay=".3"
              >
                {isClient ? (
                  <Swiper
                    modules={[Navigation, Autoplay]}
                    onBeforeInit={(swiper) => {
                      swiperRef.current = swiper;
                    }}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                      delay: 5000,
                      disableOnInteraction: false,
                    }}
                  >
                    {aboutTestimonialsData.map((item) => (
                      <SwiperSlide key={item.id}>
                        <div className="tj-testimonial-item tj-testimonial-item-4">
                          <div className="tj-testimonial-top">
                            <div className="tj-quote">
                              <i className="tji-quote"></i>
                            </div>
                            <RatingStars score={item.rating} maxScore={5} />
                          </div>

                          <div className="desc">
                            <p>{item.quote}</p>
                          </div>

                          <div className="tj-testimonial-bottom">
                            <div className="author-wrap">
                              <div className="author-avatar">
                                <Image
                                  src={item.author.avatar}
                                  alt={item.author.name}
                                  width={50}
                                  height={50}
                                />
                              </div>
                              <div className="author-info">
                                <h3 className="name tj-fs-h6">
                                  {item.author.name}
                                </h3>
                                <span className="designation">
                                  {item.author.designation}
                                </span>
                              </div>
                            </div>
                            <div className="hired">
                              <span>
                                <i className="tji-check"></i>
                              </span>
                              {item.hiredAt}
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                ) : (
                  <div className="swiper-wrapper">
                    {aboutTestimonialsData.slice(0, 1).map((item) => (
                      <div className="swiper-slide" key={item.id}>
                        <div className="tj-testimonial-item tj-testimonial-item-4">
                          <div className="tj-testimonial-top">
                            <div className="tj-quote">
                              <i className="tji-quote"></i>
                            </div>
                            <RatingStars score={item.rating} maxScore={5} />
                          </div>
                          <div className="desc">
                            <p>{item.quote}</p>
                          </div>
                          <div className="tj-testimonial-bottom">
                            <div className="author-wrap">
                              <div className="author-avatar">
                                <Image
                                  src={item.author.avatar}
                                  alt={item.author.name}
                                  width={50}
                                  height={50}
                                />
                              </div>
                              <div className="author-info">
                                <h3 className="name tj-fs-h6">
                                  {item.author.name}
                                </h3>
                                <span className="designation">
                                  {item.author.designation}
                                </span>
                              </div>
                            </div>
                            <div className="hired">
                              <span>
                                <i className="tji-check"></i>
                              </span>
                              {item.hiredAt}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Slider Navigation Buttons */}
                <div className="slider-navigation justify-content-center">
                  <button
                    type="button"
                    className="slider-prev slider-prev-1"
                    onClick={() => swiperRef.current?.slidePrev()}
                    aria-label="Previous Slide"
                  >
                    <span className="anim-icon">
                      <i className="tji-arrow-left-3"></i>
                      <i className="tji-arrow-left-3"></i>
                    </span>
                  </button>
                  <button
                    type="button"
                    className="slider-next slider-next-1"
                    onClick={() => swiperRef.current?.slideNext()}
                    aria-label="Next Slide"
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
      </div>
    </section>
  );
}
