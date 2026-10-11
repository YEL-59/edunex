"use client";

import FlipButton from "@/components/common/FlipButton";
import { aboutCoachesData } from "@/data/about";
import AboutInstructorCard from "./subcomponents/AboutInstructorCard";

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

        {/* Instructors 4-Column Grid calling Sub-components */}
        <div className="row rg-30">
          {aboutCoachesData.map((coach) => (
            <AboutInstructorCard key={coach.id} coach={coach} />
          ))}
        </div>
      </div>
    </section>
  );
}
