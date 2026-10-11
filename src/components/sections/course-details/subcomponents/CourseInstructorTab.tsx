import Image from "next/image";
import Link from "next/link";
import { CourseAuthor } from "@/types";

interface CourseInstructorTabProps {
  author?: CourseAuthor;
}

export default function CourseInstructorTab({ author }: CourseInstructorTabProps) {
  const name = author?.name || "Emmielar Josan";
  const role = author?.role || "Lead AI Engineer & Educator";
  const image = author?.instructorImage || author?.avatar || "/assets/images/instructor/instructor-8.webp";
  const rating = author?.rating || 4.9;
  const reviews = author?.reviews || "18,204";
  const students = author?.students || "142K";
  const courses = author?.courses || "24";
  const bio =
    author?.bio ||
    "Emmielar is a Lead AI Engineer with over a decade building machine learning systems at scale. He has trained 140,000+ students worldwide and specializes in making complex concepts approachable.";

  return (
    <div id="instructor" className="tj-course-instructor mb-5">
      <h3 className="title mb-4">Meet your instructor</h3>
      <div className="tj-course-instructor-wrap d-flex flex-column flex-md-row gap-4 p-4 rounded-4 bg-light">
        <div
          className="tj-course-instructor-img flex-shrink-0 position-relative rounded-3 overflow-hidden"
          style={{ width: "160px", height: "180px" }}
        >
          <Image
            src={image}
            alt={name}
            fill
            sizes="160px"
            className="object-fit-cover"
          />
        </div>
        <div className="tj-course-instructor-content flex-grow-1">
          <div className="name-area mb-3">
            <h4 className="name tj-fs-h6 mb-1">
              <Link href="/instructor">{name}</Link>
            </h4>
            <span className="designation text-muted small">{role}</span>
          </div>

          <div className="tj-instructor-info d-flex flex-wrap gap-4 mb-3">
            <div className="info-item">
              <div className="single-rating d-inline-flex align-items-center gap-1" style={{ color: "#ffb800" }}>
                <i className="tji-star"></i>
                <span className="label fw-bold text-dark">{rating}</span>
              </div>
              <span className="text d-block text-muted small">Rating</span>
            </div>
            <div className="info-item">
              <span className="title fw-bold d-block text-dark">{reviews}</span>
              <span className="text text-muted small">Reviews</span>
            </div>
            <div className="info-item">
              <span className="title fw-bold d-block text-dark">{students}</span>
              <span className="text text-muted small">Student</span>
            </div>
            <div className="info-item">
              <span className="title fw-bold d-block text-dark">{courses}</span>
              <span className="text text-muted small">Course</span>
            </div>
          </div>

          <p className="desc text-muted mb-3">{bio}</p>

          <ul className="tj-socials d-flex list-unstyled gap-2 m-0">
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="d-flex align-items-center justify-content-center rounded-circle border bg-white"
                style={{ width: "32px", height: "32px" }}
              >
                <i className="tji-facebook"></i>
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="d-flex align-items-center justify-content-center rounded-circle border bg-white"
                style={{ width: "32px", height: "32px" }}
              >
                <i className="tji-instagram"></i>
              </a>
            </li>
            <li>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="d-flex align-items-center justify-content-center rounded-circle border bg-white"
                style={{ width: "32px", height: "32px" }}
              >
                <i className="tji-x-twitter"></i>
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="d-flex align-items-center justify-content-center rounded-circle border bg-white"
                style={{ width: "32px", height: "32px" }}
              >
                <i className="tji-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
