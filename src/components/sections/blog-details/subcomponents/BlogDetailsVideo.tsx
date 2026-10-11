"use client";

import { useState } from "react";
import Image from "next/image";
import CourseVideoModal from "@/components/sections/course-details/subcomponents/CourseVideoModal";

interface BlogDetailsVideoProps {
  thumbnail: string;
  videoUrl: string;
}

export default function BlogDetailsVideo({
  thumbnail,
  videoUrl,
}: BlogDetailsVideoProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <CourseVideoModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        videoUrl={videoUrl}
        title="Educational Insights Video"
      />

      <div
        className="tj_wpost_video tj-fade-anim position-relative rounded-4 overflow-hidden my-4"
        style={{ minHeight: "360px" }}
      >
        <Image
          src={thumbnail}
          alt="Video Thumbnail"
          fill
          sizes="(max-width: 991px) 100vw, 800px"
          className="object-fit-cover"
        />
        <button
          type="button"
          className="tj_video_btn video-btn video-popup border-0 position-absolute top-50 start-50 translate-middle"
          onClick={() => setIsOpen(true)}
          aria-label="Play Video"
          style={{ cursor: "pointer" }}
        >
          <span>
            <i className="tji-play"></i>
          </span>
        </button>
      </div>
    </>
  );
}
