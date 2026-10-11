import Link from "next/link";
import Image from "next/image";
import { InstructorListItem } from "@/types";

interface InstructorSimilarSlideProps {
  instructor: InstructorListItem;
}

export default function InstructorSimilarSlide({
  instructor,
}: InstructorSimilarSlideProps) {
  return (
    <div className="tj-instructor-item tj-instructor-item-2">
      <div className="tj-instructor-img">
        <Link href={instructor.href}>
          <Image
            src={instructor.image}
            alt={instructor.name}
            width={310}
            height={320}
            style={{ width: "100%", height: "auto" }}
          />
        </Link>
        <div className="single-rating">
          <i className="tji-star"></i>
          <span className="label">{instructor.rating}</span>
        </div>
      </div>

      <div className="tj-instructor-content">
        <div className="name-area">
          <h3 className="name tj-fs-h5">
            <Link href={instructor.href}>{instructor.name}</Link>
          </h3>
          <span className="designation">{instructor.designation}</span>
        </div>

        <div className="tj-instructor-info">
          <div className="course-meta">
            <span>
              <i className="tji-book"></i>
              {instructor.sessions}
            </span>
          </div>
          <div className="course-price tj-fs-h5">{instructor.price}</div>
        </div>

        <div className="btn-area">
          <Link
            className="tj-btn-primary-2 tj-btn-primary-3 tj-btn-full"
            href={instructor.href}
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
  );
}
