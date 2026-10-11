"use client";

import Image from "next/image";

interface CourseVideoPreviewProps {
  image: string;
  title: string;
  onPlay: () => void;
}

export default function CourseVideoPreview({
  image,
  title,
  onPlay,
}: CourseVideoPreviewProps) {
  return (
    <div
      className="tj-course-details-img position-relative overflow-hidden rounded-4 mb-4"
      style={{ minHeight: "380px" }}
    >
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 991px) 100vw, 800px"
        className="object-fit-cover"
        priority
      />
      <button
        type="button"
        className="video-btn video-popup border-0"
        onClick={onPlay}
        aria-label="Play Course Video Preview"
        style={{
          cursor: "pointer",
        }}
      >
        <span>
          <i className="tji-play"></i>
        </span>
      </button>
    </div>
  );
}
