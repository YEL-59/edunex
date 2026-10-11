"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import FlipButton from "@/components/common/FlipButton";
import { aboutTestimonialsData } from "@/data/about";
import { useIsClient } from "@/hooks/useIsClient";
import AboutTestimonialCard from "./subcomponents/AboutTestimonialCard";
import AboutTestimonialNav from "./subcomponents/AboutTestimonialNav";

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

          {/* Right Swiper Slider Column calling Sub-components */}
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
                        {/* Sub-component: Testimonial Card */}
                        <AboutTestimonialCard item={item} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                ) : (
                  <AboutTestimonialCard item={aboutTestimonialsData[0]} />
                )}

                {/* Sub-component: Slider Nav Prev & Next */}
                <AboutTestimonialNav
                  onPrev={() => swiperRef.current?.slidePrev()}
                  onNext={() => swiperRef.current?.slideNext()}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
