"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { eventRelatedData } from "@/data/events";
import { useIsClient } from "@/hooks/useIsClient";
import EventRelatedNav from "./subcomponents/EventRelatedNav";
import EventRelatedSlide from "./subcomponents/EventRelatedSlide";

export default function EventRelatedSection() {
  const swiperRef = useRef<SwiperType | null>(null);
  const isClient = useIsClient();

  return (
    <section className="related-event-section section-gap section-separator fix">
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
                  Related Events.
                </h2>
                <div className="tj-fade-anim" data-duration="0.5">
                  <EventRelatedNav
                    onPrev={() => swiperRef.current?.slidePrev()}
                    onNext={() => swiperRef.current?.slideNext()}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel / Slider Container */}
        <div className="row">
          <div className="col-12">
            <div className="tj__slider-wrapper">
              <div className="tj-event-slider swiper swiper-container tj-fade-anim" data-delay=".3">
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
                    }}
                    loop={true}
                    autoplay={{
                      delay: 4500,
                      disableOnInteraction: false,
                    }}
                  >
                    {eventRelatedData.map((item) => (
                      <SwiperSlide key={item.id}>
                        <EventRelatedSlide event={item} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                ) : (
                  <div className="row rg-30">
                    {eventRelatedData.map((item) => (
                      <div className="col-md-4" key={item.id}>
                        <EventRelatedSlide event={item} />
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
