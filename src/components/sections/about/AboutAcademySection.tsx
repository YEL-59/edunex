"use client";

import React from "react";
import Image from "next/image";
import { aboutFeaturesData } from "@/data/about";

export default function AboutAcademySection() {
  return (
    <section className="tj-about-section-4 section-gap-bottom fix">
      <div className="container">
        <div className="row align-items-center flex-column-reverse flex-lg-row rg-50">
          {/* Left Gallery Column */}
          <div className="col-lg-6">
            <div
              className="about-3-gallery tj-fade-anim"
              data-direction="left"
              data-delay=".2"
            >
              <div className="about-3-gallery-col">
                <div className="about-3-img about-3-img-1">
                  <Image
                    src="/assets/images/about/h3-about-grid-1.png"
                    alt="Student learning with headphones"
                    width={260}
                    height={260}
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
                <div className="about-3-img about-3-img-2">
                  <Image
                    src="/assets/images/about/h3-about-grid-3.png"
                    alt="Happy student"
                    width={260}
                    height={260}
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
              </div>

              <div className="about-3-gallery-col about-3-gallery-col-wide">
                <div className="about-3-img about-3-img-3">
                  <Image
                    src="/assets/images/about/h3-about-grid-2.png"
                    alt="Student attending an online class"
                    width={364}
                    height={356}
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
                <div
                  className="about-3-course-card"
                  style={{
                    backgroundImage:
                      "url('/assets/images/about/h3-about-grid-bg.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <span className="about-3-course-icon">
                    <Image
                      src="/assets/images/icons/tj-award.png"
                      alt="Award Icon"
                      width={80}
                      height={80}
                    />
                  </span>
                  <h4 className="about-3-course-title">
                    Business growth strate masterclass 2026.
                  </h4>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content Column */}
          <div className="col-lg-6">
            <div className="about-3-content">
              <div className="sec-heading">
                <span className="sec-subtitle tj-fade-anim" data-direction="top">
                  <i className="tji-subtitle"></i> About Academy
                </span>
                <h2 className="sec-title tj-fade-anim" data-delay=".3">
                  Transforming knowledge into career opportunities through{" "}
                  <span>Edunex.</span>
                </h2>
              </div>

              <div className="about-3-feature-list row rg-20 gx-0">
                {aboutFeaturesData.map((feature) => (
                  <div
                    key={feature.id}
                    className="col-12 tj-fade-anim"
                    data-delay={feature.delay}
                  >
                    <div className="about-3-feature">
                      <div className="about-3-feature-head">
                        <span className="about-3-feature-icon">
                          <i className={feature.iconClass}></i>
                        </span>
                        <h3 className="about-3-feature-title tj-fs-h5">
                          {feature.title}
                        </h3>
                      </div>
                      <p className="about-3-feature-desc">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
