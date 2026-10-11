"use client";

import React from "react";
import Link from "next/link";
import FlipButton from "@/components/common/FlipButton";

export default function AboutPageHeader() {
  return (
    <section className="tj-page-header tj-page-header-2">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tj-page-header-content">
              {/* Breadcrumb Navigation */}
              <div className="tj-page-link">
                <span>
                  <i className="tji-home"></i>
                </span>
                <span>
                  <Link href="/">Home</Link>
                </span>
                <span>
                  <i className="tji-arrow-right-4"></i>
                </span>
                <span>
                  <span>About us</span>
                </span>
              </div>

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

              {/* Decorative Floating Dots & Sparkles */}
              <div className="about-banner-elements">
                <span className="banner-4-dot banner-4-dot-green"></span>
                <span className="banner-4-dot banner-4-dot-orange"></span>
                <span className="banner-4-dot banner-4-dot-red"></span>
                <span className="banner-4-spark banner-4-spark-1"></span>
                <span className="banner-4-spark banner-4-spark-2"></span>
                <span className="banner-4-spark banner-4-spark-3"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
