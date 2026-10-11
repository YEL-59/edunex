"use client";

import React from "react";
import FlipButton from "@/components/common/FlipButton";
import AboutBreadcrumb from "./subcomponents/AboutBreadcrumb";
import AboutBannerElements from "./subcomponents/AboutBannerElements";

export default function AboutPageHeader() {
  return (
    <section className="tj-page-header tj-page-header-2">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tj-page-header-content">
              {/* Sub-component: Breadcrumb */}
              <AboutBreadcrumb currentPage="About us" />

              {/* Centered Heading Content */}
              <div className="sec-heading sec-heading-center">
                <span className="sec-subtitle tj-fade-anim" data-direction="top">
                  <i className="tji-subtitle"></i> About our Platform
                </span>
                <h1 className="sec-title tj-fade-anim" data-delay=".3">
                  Empowering Our Learner into{" "}
                  <span>Career-focused</span> Online Education.
                </h1>
                <p className="desc tj-fade-anim" data-delay=".5">
                  Master modern digital and tech skills through AI-powered learning
                  paths and structured designed for 2026 and beyond. Master modern
                  digital and tech skills through.
                </p>
                <div
                  className="btn-area justify-content-center tj-fade-anim"
                  data-delay=".7"
                >
                  <FlipButton href="/courses" icon="tji-arrow-right-2">
                    Start learning free
                  </FlipButton>
                  <FlipButton
                    href="/courses"
                    className="tj-btn-primary tj-btn-primary-light flip-text-wrap"
                    icon="tji-arrow-right-2"
                  >
                    Explore courses
                  </FlipButton>
                </div>
              </div>

              {/* Sub-component: Decorative floating dots & sparkles */}
              <AboutBannerElements />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
