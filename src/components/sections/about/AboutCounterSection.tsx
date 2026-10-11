"use client";

import React from "react";
import { aboutCountersData } from "@/data/about";
import AboutCounterCard from "./subcomponents/AboutCounterCard";
import AboutReviewCard from "./subcomponents/AboutReviewCard";

export default function AboutCounterSection() {
  return (
    <section className="about-counter-section section-gap-bottom fix">
      <div className="container">
        <div className="row rg-30">
          {/* Sub-component: Animated Counter Cards */}
          {aboutCountersData.map((item) => (
            <AboutCounterCard
              key={item.id}
              target={item.target}
              suffix={item.suffix}
              label={item.label}
              bgClass={item.bgClass}
              delay={item.delay}
            />
          ))}

          {/* Sub-component: Google Reviews User Card */}
          <AboutReviewCard delay=".5" reviewsCount="2,540 Google reviews" />
        </div>
      </div>
    </section>
  );
}
