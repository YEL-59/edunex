"use client";

import { useState } from "react";
import { InstructorDetailsData } from "@/types";
import InstructorDetailsTabs from "./subcomponents/InstructorDetailsTabs";
import InstructorBioSection from "./subcomponents/InstructorBioSection";
import InstructorExperienceSection from "./subcomponents/InstructorExperienceSection";
import InstructorCoursesSection from "./subcomponents/InstructorCoursesSection";
import InstructorReviewsSection from "./subcomponents/InstructorReviewsSection";
import InstructorBookingSidebar from "./subcomponents/InstructorBookingSidebar";

interface InstructorDetailsMainProps {
  instructor: InstructorDetailsData;
}

export default function InstructorDetailsMain({
  instructor,
}: InstructorDetailsMainProps) {
  const [activeTab, setActiveTab] = useState("about");

  const scrollToTab = (tabId: string) => {
    setActiveTab(tabId);
    const element = document.getElementById(tabId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="tj-details section-gap-bottom fix tj-sticky-container-2">
      <div className="container">
        <div className="row">
          {/* Left Column (8 cols): Tabs, Bio, Experience, Courses, Reviews */}
          <div className="col-lg-8">
            <div className="tj-course-details-wrapper tj-tab-sticky-wrapper">
              {/* Sub-component: Tabs */}
              <InstructorDetailsTabs
                activeTab={activeTab}
                onTabClick={scrollToTab}
              />

              {/* Sub-component: Bio & Skills */}
              <InstructorBioSection
                bio={instructor.bio}
                skills={instructor.skills}
              />

              {/* Sub-component: Experience */}
              <InstructorExperienceSection
                experiences={instructor.experiences}
              />

              {/* Sub-component: Courses by Instructor */}
              <InstructorCoursesSection
                instructorName={instructor.name}
              />

              {/* Sub-component: Student Reviews */}
              <InstructorReviewsSection
                reviews={instructor.reviews}
              />
            </div>
          </div>

          {/* Right Column (4 cols): Sub-component Booking Sidebar */}
          <div className="col-lg-4">
            <InstructorBookingSidebar instructor={instructor} />
          </div>
        </div>
      </div>
    </section>
  );
}
