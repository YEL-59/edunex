"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { instructorListData } from "@/data/instructors";
import { useIsClient } from "@/hooks/useIsClient";
import InstructorSimilarNav from "./subcomponents/InstructorSimilarNav";
import InstructorSimilarSlide from "./subcomponents/InstructorSimilarSlide";

export default function InstructorSimilarSection() {
  const swiperRef = useRef<SwiperType | null>(null);
  const isClient = useIsClient();

  const similarInstructors = instructorListData.slice(0, 4);

  return (
    <section className="tj-instructor-section section-gap section-separator fix">
      <div className="container">
        {/* Section Heading with Prev/Next Navigation */}
        <div className="row">
          <div className="col-12">
            <div className="sec-heading">
              <span className="sec-subtitle tj-fade-anim" data-direction="top">
                <i className="tji-subtitle"></i>Keep learning
              </span>
              <div className="sec-heading-inner">
                <h2 className="sec-title tj-fade-anim" data-delay="0.3">
                  Similar instructors.
                </h2>
                <div className="tj-fade-anim" data-duration="0.5">
                  <InstructorSimilarNav
                    onPrev={() => swiperRef.current?.slidePrev()}
                    onNext={() => swiperRef.current?.slideNext()}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Instructors Slider */}
        <div className="row">
          <div className="col-12">
            <div className="tj__slider-wrapper">
              <div className="tj-instructor-slider-2 swiper swiper-container tj-fade-anim" data-delay=".3">
                {isClient ? (
                  <Swiper
                    modules={[Navigation, Autoplay]}
                    onBeforeInit={(swiper) => {
                      swiperRef.current = swiper;
                    }}
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                      576: { slidesPerView: 2 },
                      992: { slidesPerView: 3 },
                      1200: { slidesPerView: 4 },
                    }}
                    loop={true}
                    autoplay={{
                      delay: 4500,
                      disableOnInteraction: false,
                    }}
                  >
                    {similarInstructors.map((item) => (
                      <SwiperSlide key={item.id}>
                        <InstructorSimilarSlide instructor={item} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                ) : (
                  <div className="row rg-30">
                    {similarInstructors.map((item) => (
                      <div className="col-lg-3 col-sm-6" key={item.id}>
                        <InstructorSimilarSlide instructor={item} />
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
