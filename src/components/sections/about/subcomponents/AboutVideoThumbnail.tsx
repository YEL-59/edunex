import React from "react";
import Image from "next/image";

interface AboutVideoThumbnailProps {
  imageSrc: string;
  videoUrl: string;
  onOpenVideo: () => void;
}

export default function AboutVideoThumbnail({
  imageSrc,
  videoUrl,
  onOpenVideo,
}: AboutVideoThumbnailProps) {
  return (
    <div className="about-video-img">
      <Image
        src={imageSrc}
        alt="About Video Preview"
        width={1290}
        height={560}
        style={{ width: "100%", height: "auto" }}
        priority
      />
      <a
        className="video-btn video-popup"
        href={videoUrl}
        onClick={(e) => {
          e.preventDefault();
          onOpenVideo();
        }}
        role="button"
        aria-label="Play Overview Video"
      >
        <span>
          <i className="tji-play"></i>
        </span>
      </a>
    </div>
  );
}
