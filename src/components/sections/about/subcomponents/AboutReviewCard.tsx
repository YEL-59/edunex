import React from "react";
import Image from "next/image";

interface AboutReviewCardProps {
  delay?: string;
  reviewsCount?: string;
}

export default function AboutReviewCard({
  delay = ".5",
  reviewsCount = "2,540 Google reviews",
}: AboutReviewCardProps) {
  const avatars = [
    "/assets/images/users/user-img-1.png",
    "/assets/images/users/user-img-2.png",
    "/assets/images/users/user-img-3.png",
  ];

  return (
    <div className="col-xl-3 col-sm-6 tj-fade-anim" data-delay={delay}>
      <div className="tj-reviews-item tj-theme-bg-7">
        <ul className="tj-users-list">
          {avatars.map((src, index) => (
            <li key={index}>
              <Image
                src={src}
                alt={`Reviewer ${index + 1}`}
                width={38}
                height={38}
              />
            </li>
          ))}
          <li>
            <span>7K+</span>
          </li>
        </ul>
        <div className="reviews-label">{reviewsCount}</div>
      </div>
    </div>
  );
}
