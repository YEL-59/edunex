"use client";

import { useState } from "react";
import CourseVideoPreview from "./subcomponents/CourseVideoPreview";
import CourseTabs from "./subcomponents/CourseTabs";
import CourseOverviewTab from "./subcomponents/CourseOverviewTab";
import CourseCurriculumTab from "./subcomponents/CourseCurriculumTab";
import CourseInstructorTab from "./subcomponents/CourseInstructorTab";
import CourseReviewsTab from "./subcomponents/CourseReviewsTab";
import CourseFaqTab from "./subcomponents/CourseFaqTab";
import CourseBookingSidebar from "./subcomponents/CourseBookingSidebar";
import CourseVideoModal from "./subcomponents/CourseVideoModal";
import { CourseItem, CourseLessonItem } from "@/types";

interface CourseDetailsMainProps {
  course: CourseItem;
}

export default function CourseDetailsMain({ course }: CourseDetailsMainProps) {
  const [activeTab, setActiveTab] = useState("overview");

  // Video modal state
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState(
    course.videoUrl || "https://www.youtube.com/embed/MLpWrANjFbI?autoplay=1"
  );
  const [videoModalTitle, setVideoModalTitle] = useState(course.title);

  const handlePlayTrailer = () => {
    setCurrentVideoUrl(course.videoUrl || "https://www.youtube.com/embed/MLpWrANjFbI?autoplay=1");
    setVideoModalTitle(`${course.title} - Preview Trailer`);
    setIsVideoModalOpen(true);
  };

  const handlePlayLessonVideo = (lesson: CourseLessonItem) => {
    if (lesson.videoUrl) {
      setCurrentVideoUrl(lesson.videoUrl);
      setVideoModalTitle(`Lesson Preview: ${lesson.title}`);
      setIsVideoModalOpen(true);
    }
  };

  const handleScrollToTab = (tabId: string) => {
    setActiveTab(tabId);
    const element = document.getElementById(tabId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* Video Modal Player */}
      <CourseVideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl={currentVideoUrl}
        title={videoModalTitle}
      />

      <section className="tj-course-details section-gap-bottom fix tj-sticky-container-2">
        <div className="container">
          <div className="row">
            {/* Left Main Content */}
            <div className="col-lg-8">
              <div className="tj-course-details-wrapper tj-tab-sticky-wrapper">
                {/* 1. Hero Video Thumbnail */}
                <CourseVideoPreview
                  image={course.image}
                  title={course.title}
                  onPlay={handlePlayTrailer}
                />

                {/* 2. Navigation Tabs */}
                <CourseTabs
                  activeTab={activeTab}
                  onTabChange={handleScrollToTab}
                />

                {/* 3. Overview Tab Content */}
                <CourseOverviewTab
                  learningGoals={course.overview?.learningGoals}
                  skills={course.overview?.skills}
                  description={course.description}
                  requirements={course.overview?.requirements}
                  intendedAudience={course.overview?.intendedAudience}
                />

                {/* 4. Curriculum Tab Content */}
                <CourseCurriculumTab
                  curriculum={course.curriculum}
                  onPlayLessonVideo={handlePlayLessonVideo}
                />

                {/* 5. Instructor Tab Content */}
                <CourseInstructorTab author={course.author} />

                {/* 6. Student Reviews Tab Content */}
                <CourseReviewsTab
                  score={course.rating.score}
                  totalRatings={course.rating.totalRatings}
                  breakdown={course.rating.breakdown}
                  reviews={course.reviewsList}
                />

                {/* 7. FAQs Tab Content */}
                <CourseFaqTab faqs={course.faqs} />
              </div>
            </div>

            {/* Right Sticky Sidebar */}
            <div className="col-lg-4">
              <CourseBookingSidebar
                originalPrice={course.price.original}
                currentPrice={course.price.current}
                discountBadge={course.price.discount || "38% off"}
                onStartLearning={handlePlayTrailer}
                onBuyNow={() => alert("Redirecting to checkout...")}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
