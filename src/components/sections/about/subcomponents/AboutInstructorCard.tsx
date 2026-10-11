import React from "react";
import Link from "next/link";
import Image from "next/image";
import { AboutCoachItem } from "@/types";

interface AboutInstructorCardProps {
  coach: AboutCoachItem;
}

export default function AboutInstructorCard({
  coach,
}: AboutInstructorCardProps) {
  return (
    <div className="col-lg-3 col-sm-6">
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
  );
}
