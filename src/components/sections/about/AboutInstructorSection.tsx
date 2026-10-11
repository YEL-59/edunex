"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import FlipButton from "@/components/common/FlipButton";
import { aboutCoachesData } from "@/data/about";

export default function AboutInstructorSection() {
  return (
    <section className="tj-instructor-section section-gap fix">
      <div className="container">
        {/* Section Heading */}
        <div className="row">
          <div className="col-12">
            <div className="sec-heading">
              <span className="sec-subtitle tj-fade-anim" data-direction="top">
                <i className="tji-subtitle"></i> Featured Coaches
              </span>
              <div className="sec-heading-inner">
                <h2 className="sec-title tj-fade-anim" data-delay=".3">
                  Learn From Our Expert on Instructors.
                </h2>
                <div className="tj-fade-anim" data-duration="0.5">
                  <FlipButton href="/instructor" icon="tji-arrow-right-2">
                    Find more coach
                  </FlipButton>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Instructors 4-Column Grid */}
        <div className="row rg-30">
          {aboutCoachesData.map((coach) => (
            <div className="col-lg-3 col-sm-6" key={coach.id}>
              <div className="tj-instructor-item tj-instructor-item-2">
                <div className="tj-instructor-img">
                  <Link href={coach.href}>
                    <Image
                      src={coach.image}
                      alt={coach.name}
                      width={310}
                      height={320}
                      style={{ width: "100%", height: "auto" }}
                    />
                  </Link>
                  <div className="single-rating">
                    <i className="tji-star"></i>
                    <span className="label">{coach.rating}</span>
                  </div>
                </div>

                <div className="tj-instructor-content">
                  <div className="name-area">
                    <h3 className="name tj-fs-h5">
                      <Link href={coach.href}>{coach.name}</Link>
                    </h3>
                    <span className="designation">{coach.designation}</span>
                  </div>

                  <div className="tj-instructor-info">
                    <div className="course-meta">
                      <span>
                        <i className="tji-book"></i>
                        {coach.sessions}
                      </span>
                    </div>
                    <div className="course-price tj-fs-h5">{coach.price}</div>
                  </div>

                  <div className="btn-area">
                    <Link
                      className="tj-btn-primary-2 tj-btn-primary-3 tj-btn-full"
                      href={coach.href}
                    >
                      <span className="btn-inner">
                        <span className="btn-text">
                          <span>Book session</span>
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
