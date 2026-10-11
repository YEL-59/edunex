"use client";

import Image from "next/image";
import FlipButton from "../common/FlipButton";

export default function AboutSection() {
  return (
    <section className="tj-about-section section-gap fix">
      <div className="container">
        <div className="row align-items-center flex-xl-row flex-column-reverse">
          <div className="col-xl-6">
            <div className="about-img-area tj-fade-anim" data-delay="0.3">
              <div className="about-img">
                <Image
                  src="/assets/images/about/about-img.webp"
                  alt="About Edunex Platform"
                  width={600}
                  height={550}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>

              {/* Learners Badge Box */}
              <div className="learners-box">
                <ul className="tj-users-list">
                  <li>
                    <Image
                      src="/assets/images/users/user-img-1.png"
                      alt="Learner"
                      width={38}
                      height={38}
                    />
                  </li>
                  <li>
                    <Image
                      src="/assets/images/users/user-img-2.png"
                      alt="Learner"
                      width={38}
                      height={38}
                    />
                  </li>
                  <li>
                    <Image
                      src="/assets/images/users/user-img-3.png"
                      alt="Learner"
                      width={38}
                      height={38}
                    />
                  </li>
                  <li>
                    <span>7K+</span>
                  </li>
                </ul>
                <div className="text">
                  Join <span>180,000+</span> learners already on their path
                </div>
              </div>

              {/* Dotted Decorative Shape */}
              <div className="shape tj-bounce">
                <Image
                  src="/assets/images/shapes/dotted-shape.svg"
                  alt="Decorative dots"
                  width={140}
                  height={140}
                />
              </div>
            </div>
          </div>

          <div className="col-xl-6">
            <div className="sec-heading about-heading">
              <span className="sec-subtitle tj-fade-anim" data-direction="top">
                <i className="tji-subtitle"></i>About our Platform
              </span>
              <h2 className="sec-title tj-fade-anim" data-delay="0.3">
                Transforming knowledge into career opportunities through{" "}
                <span>Edunex.</span>
              </h2>
            </div>
            <div className="about-content">
              <p className="desc tj-fade-anim">
                Master modern digital and tech skills through AI-powered learning
                paths and structured designed for 2026 and beyond. Master modern
                digital and tech skills through.
              </p>
              <div className="about-list tj-fade-anim">
                <ul className="tj-list">
                  <li>
                    <span className="icon">
                      <i className="tji-check"></i>
                    </span>
                    <span className="text">Expert learning programs.</span>
                  </li>
                  <li>
                    <span className="icon">
                      <i className="tji-check"></i>
                    </span>
                    <span className="text">Relevant course content.</span>
                  </li>
                  <li>
                    <span className="icon">
                      <i className="tji-check"></i>
                    </span>
                    <span className="text">Flexible learning experience.</span>
                  </li>
                  <li>
                    <span className="icon">
                      <i className="tji-check"></i>
                    </span>
                    <span className="text">Lifetime access to courses.</span>
                  </li>
                </ul>
              </div>
              <div className="btn-area tj-fade-anim" data-delay=".5">
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
          </div>
        </div>
      </div>
    </section>
  );
}
