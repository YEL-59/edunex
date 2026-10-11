"use client";

import { useEffect } from "react";

interface CourseVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title?: string;
}

export default function CourseVideoModal({
  isOpen,
  onClose,
  videoUrl,
  title = "Course Video Preview",
}: CourseVideoModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Ensure embed format
  const embedUrl = videoUrl.includes("watch?v=")
    ? videoUrl.replace("watch?v=", "embed/")
    : videoUrl;

  return (
    <div
      className="course-video-modal-backdrop position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
      style={{
        zIndex: 9999,
        backgroundColor: "rgba(0, 0, 0, 0.85)",
        backdropFilter: "blur(6px)",
      }}
      onClick={onClose}
    >
      <div
        className="course-video-modal-content position-relative w-100 p-2 p-md-3"
        style={{ maxWidth: "900px" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="d-flex align-items-center justify-content-between mb-2 px-1">
          <h4 className="text-white tj-fs-h6 m-0">{title}</h4>
          <button
            type="button"
            className="btn btn-sm btn-outline-light rounded-circle p-2 d-flex align-items-center justify-content-center"
            style={{ width: "36px", height: "36px" }}
            onClick={onClose}
            aria-label="Close video"
          >
            <i className="tji-close"></i>
          </button>
        </div>

        <div
          className="ratio ratio-16x9 rounded-3 overflow-hidden shadow-lg"
          style={{ backgroundColor: "#000" }}
        >
          <iframe
            src={`${embedUrl}${embedUrl.includes("?") ? "&" : "?"}autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-100 h-100 border-0"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
