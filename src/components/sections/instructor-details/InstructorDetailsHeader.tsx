import Image from "next/image";
import Link from "next/link";
import { InstructorDetailsData } from "@/types";
import InstructorDetailsBreadcrumb from "./subcomponents/InstructorDetailsBreadcrumb";

interface InstructorDetailsHeaderProps {
  instructor: InstructorDetailsData;
}

export default function InstructorDetailsHeader({
  instructor,
}: InstructorDetailsHeaderProps) {
  return (
    <section className="tj-page-header tj-page-header-2">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tj-page-header-content">
              {/* Sub-component: Breadcrumb */}
              <InstructorDetailsBreadcrumb currentPage="Instructor details" />

              {/* Profile Overview Card Header */}
              <div className="tj-page-header-instructor">
                <div className="tj-instructor-img">
                  <Image
                    src={instructor.image}
                    alt={instructor.name}
                    width={180}
                    height={180}
                    style={{ width: "auto", height: "auto" }}
                    priority
                  />
                </div>
                <div className="tj-instructor-content">
                  <div className="tj-categories">
                    <Link className="tj-cat" href="/courses">
                      {instructor.category}
                    </Link>
                  </div>
                  <div className="name-area">
                    <h1 className="name tj-fs-h2">{instructor.name}</h1>
                    <span className="designation">{instructor.designation}</span>
                  </div>
                  <div className="course-meta">
                    <div className="single-rating">
                      <i className="tji-star"></i>
                      <span className="label">
                        {instructor.rating.score}
                        <span>({instructor.rating.count})</span>
                      </span>
                    </div>
                    <span>
                      <i className="tji-book"></i>
                      {instructor.lessonsCount}
                    </span>
                    <span>
                      <i className="tji-user-duo"></i>
                      {instructor.studentsCount}
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative Shape */}
              <div className="shape">
                <Image
                  src="/assets/images/shapes/stars.png"
                  alt="Decorative Stars"
                  width={32}
                  height={32}
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
