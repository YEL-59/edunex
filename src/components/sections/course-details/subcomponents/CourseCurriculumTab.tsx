"use client";

import { useState } from "react";
import { CourseModuleItem, CourseLessonItem } from "@/types";

interface CourseCurriculumTabProps {
  curriculum?: CourseModuleItem[];
  metaText?: string;
  onPlayLessonVideo?: (lesson: CourseLessonItem) => void;
}

export default function CourseCurriculumTab({
  curriculum = [],
  metaText = "12 modules • 33 lessons • 6h 30m total",
  onPlayLessonVideo,
}: CourseCurriculumTabProps) {
  // Module accordion open state
  const [openModules, setOpenModules] = useState<string[]>(["01"]);

  const toggleModule = (moduleNumber: string) => {
    setOpenModules((prev) =>
      prev.includes(moduleNumber)
        ? prev.filter((m) => m !== moduleNumber)
        : [...prev, moduleNumber]
    );
  };

  return (
    <div id="curriculum" className="tj-course-curriculum mb-5">
      <div className="tj-course-curriculum-title-wrap mb-4">
        <h3 className="title">Course curriculum</h3>
        <div className="curriculum-title-meta text-muted">{metaText}</div>
      </div>

      <div className="tj-course-curriculum-inner">
        <div className="tutor-accordion">
          <div className="tj-course-accordion">
            {curriculum.map((module) => {
              const isOpen = openModules.includes(module.moduleNumber);
              return (
                <div
                  key={module.moduleNumber}
                  className={`tj-course-accordion-item mb-3 rounded-3 overflow-hidden border ${
                    isOpen ? "active" : ""
                  }`}
                  style={{ borderColor: "#e6e8ec" }}
                >
                  <h4
                    className="tj-course-accordion-header tutor-accordion-item-header d-flex align-items-center p-3 m-0 bg-light"
                    onClick={() => toggleModule(module.moduleNumber)}
                    style={{ cursor: "pointer", userSelect: "none" }}
                  >
                    <span className="sl-no fw-bold text-primary me-3">
                      {module.moduleNumber}
                    </span>
                    <span className="tj-course-accordion-title-wrap flex-grow-1">
                      <span className="tj-course-accordion-title fw-bold d-block text-dark">
                        {module.title}
                      </span>
                      <span className="tj-course-accordion-meta text-muted small">
                        {module.meta}
                      </span>
                    </span>
                    <span className="accordion-arrow ms-2 text-muted">
                      <i className={`tji-arrow-${isOpen ? "up" : "down"}-2`}></i>
                    </span>
                  </h4>

                  {isOpen && (
                    <div className="tj-course-accordion-content p-3 bg-white">
                      <ul className="course-content-lists list-unstyled m-0">
                        {module.lessons.map((lesson, idx) => {
                          const isDone = lesson.completed;
                          const isLocked = lesson.locked;
                          const hasPreview = lesson.preview;

                          return (
                            <li
                              key={idx}
                              className={`tutor-course-content-list-item d-flex align-items-center justify-content-between py-2 border-bottom ${
                                isDone ? "done" : ""
                              } ${isLocked ? "locked" : ""}`}
                              style={{
                                cursor: hasPreview ? "pointer" : "default",
                              }}
                              onClick={() => {
                                if (hasPreview && onPlayLessonVideo) {
                                  onPlayLessonVideo(lesson);
                                }
                              }}
                            >
                              <div className="course-content-left d-flex align-items-center gap-2">
                                <span className="course-icon text-primary">
                                  <i className={isDone ? "tji-check" : "tji-play"}></i>
                                </span>
                                <h5 className="tutor-course-content-list-item-title m-0 small fw-medium">
                                  {lesson.title}
                                </h5>
                                {hasPreview && (
                                  <span
                                    className="preview-badge badge bg-primary text-white ms-2"
                                    style={{ fontSize: "11px", cursor: "pointer" }}
                                  >
                                    <i className="tji-play me-1"></i> Preview
                                  </span>
                                )}
                              </div>
                              <div className="course-content-right d-flex align-items-center gap-2">
                                <span className="course-duration text-muted small">
                                  {lesson.duration}
                                </span>
                                {isLocked && (
                                  <span className="course-lock text-muted">
                                    <i className="tji-lock"></i>
                                  </span>
                                )}
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
