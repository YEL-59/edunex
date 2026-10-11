"use client";

import Link from "next/link";
import FlipButton from "../common/FlipButton";
import CircularProgress from "../common/CircularProgress";

export default function HeroBanner() {
  const scrollToClient = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById("scroll-target");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="tj-banner-section fix">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="banner-content">
              <span
                className="sec-subtitle tj-fade-anim"
                data-direction="top"
                data-duration="0.5"
              >
                <i className="tji-subtitle"></i> AI Featured COURSE
              </span>
              <h1 className="banner-title tj-fade-anim" data-delay="0.3">
                Transform Future Through Online Skill Building.
              </h1>
              <div className="banner-desc tj-fade-anim" data-delay="0.5">
                Master modern digital and tech skills through AI-powered
                learning paths and structured designed for 2026 and beyond.
              </div>
              <div className="btn-area tj-fade-anim" data-delay=".6">
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
              <div
                className="list-area tj-fade-anim"
                data-delay=".6"
                data-duration="1"
                data-direction="left"
              >
                <ul className="tj-list">
                  <li>
                    <span className="icon">
                      <i className="tji-check"></i>
                    </span>
                    <span className="text">200k+ learners</span>
                  </li>
                  <li>
                    <span className="icon">
                      <i className="tji-check"></i>
                    </span>
                    <span className="text">Recognized certificates</span>
                  </li>
                  <li>
                    <span className="icon">
                      <i className="tji-check"></i>
                    </span>
                    <span className="text">30-day money back</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="banner-right">
        <div className="banner-img">
          <img
            src="/assets/images/hero/hero-img.png"
            alt="Image"
          />
        </div>

        {/* Learning Progress Box */}
        <div
          className="banner-progress-box d-lg-block d-none tj-fade-anim"
          data-delay=".6"
          data-direction="right"
        >
          <h6 className="title">Learning Progress...</h6>
          <CircularProgress percent={80} />
          <span className="text">
            <strong>80%</strong> Completed. Great!
          </span>
        </div>

        {/* Launched Box */}
        <div
          className="banner-launched-box tj-fade-anim"
          data-delay=".6"
          data-direction="left"
        >
          <span className="icon">
            <img
              src="/assets/images/icons/idea.svg"
              alt=""
            />
          </span>
          <span className="text">
            <strong>Just Launched: </strong> “Mastering GenAI” Course (200 enrolled today!)
          </span>
        </div>

        {/* Floating Featured Course Item */}
        <div
          className="tj-course-item banner-feature-course d-xl-block d-none tj-fade-anim"
          data-delay=".6"
        >
          <div className="tj-course-img">
            <Link href="/courses-details">
              <img
                src="/assets/images/hero/hero-course-img.webp"
                alt=""
              />
            </Link>
            <div className="tj-product-badge">
              <span>Popular</span>
            </div>
            <div className="tj-wishlist-btn">
              <button aria-label="Add to wishlist">
                <i className="tji-heart"></i>
              </button>
            </div>
          </div>
          <div className="tj-course-content">
            <h3 className="title tj-fs-h6">
              <Link href="/courses-details">
                Complete AI UI/UX Design bootcamp 2026.
              </Link>
            </h3>
            <span className="author">
              <Link href="/instructor">
                <img
                  src="/assets/images/users/user-img-8.png"
                  alt=""
                />
                {" "}Emmielar Josan
              </Link>
            </span>
            <div className="course-meta">
              <span>
                <i className="tji-book"></i>33 Lesson
              </span>
              <span>
                <i className="tji-clock"></i>6h 30m
              </span>
              <span>
                <i className="tji-user-duo"></i>2.1k
              </span>
            </div>
            <div className="tj-course-price-wrap">
              <div className="single-rating">
                <i className="tji-star"></i>
                <span className="label">
                  4.9<span>(3K+)</span>
                </span>
              </div>
              <div className="course-price tj-fs-h6">
                <del>$30.00</del> $20.00
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Target Down Button */}
      <div
        className="banner-scroll tj-fade-anim"
        data-delay="1.2"
        data-direction="top"
      >
        <a href="#scroll-target" className="scroll-down tj-scroll-btn" onClick={scrollToClient}>
          <span className="text">Scroll Down</span>
          <span className="icon">
            <i className="tji-arrow-down-3"></i>
          </span>
        </a>
      </div>
    </section>
  );
}
