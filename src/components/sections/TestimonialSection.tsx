"use client";

import { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import RatingStars from "../common/RatingStars";
import { testimonialsData } from "@/data/testimonials";
import { useIsClient } from "@/hooks/useIsClient";

export default function TestimonialSection() {
  const swiperRef = useRef<SwiperType | null>(null);
  const isClient = useIsClient();

  return (
    <section className="tj-testimonial-section section-gap fix">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec-heading">
              <span className="sec-subtitle tj-fade-anim" data-direction="top">
                <i className="tji-subtitle"></i>Students feedback
              </span>
              <div className="sec-heading-inner">
                <h2 className="sec-title tj-fade-anim" data-delay="0.3">
                  Explore our students users feedback.
                </h2>
                <div className="tj-fade-anim" data-delay="0.5">
                  <div className="slider-navigation">
                    <button
                      type="button"
                      className="slider-prev slider-prev-1"
                      onClick={() => swiperRef.current?.slidePrev()}
                      aria-label="Previous Testimonial"
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
                      aria-label="Next Testimonial"
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
      </div>

      <div className="container-fluid testimonial-container">
        <div className="row">
          <div className="col">
            <div className="tj__slider-wrapper tj-fade-anim" data-delay=".5">
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
                    el: ".testimonial-pagination-1",
                  }}
                  breakpoints={{
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    992: {
                      slidesPerView: 2.6,
                      spaceBetween: 20,
                    },
                    1200: {
                      slidesPerView: 3.2,
                      spaceBetween: 30,
                    },
                    1550: {
                      slidesPerView: 3.65,
                      spaceBetween: 30,
                    },
                  }}
                  className="tj-testimonial-slider"
                >
                  {testimonialsData.map((item) => (
                    <SwiperSlide key={item.id}>
                      <div className={`tj-testimonial-item ${item.bgClass}`}>
                        <div className="tj-testimonial-top">
                          <div className="tj-quote">
                            <i className="tji-quote"></i>
                          </div>
                          <RatingStars score={item.rating} />
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
                                width={48}
                                height={48}
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
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <div className="tj-testimonial-slider swiper swiper-container">
                  <div className="swiper-wrapper">
                    {testimonialsData.map((item) => (
                      <div className="swiper-slide" key={item.id}>
                        <div className={`tj-testimonial-item ${item.bgClass}`}>
                          <div className="tj-testimonial-top">
                            <div className="tj-quote">
                              <i className="tji-quote"></i>
                            </div>
                            <RatingStars score={item.rating} />
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
                                  width={48}
                                  height={48}
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
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              <div className="swiper-pagination-area testimonial-pagination-1"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
