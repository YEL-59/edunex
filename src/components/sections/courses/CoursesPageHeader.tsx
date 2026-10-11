import CoursesBreadcrumb from "./subcomponents/CoursesBreadcrumb";
import CoursesStatsCounter from "./subcomponents/CoursesStatsCounter";
import { courseStats } from "@/data/courses";

interface CoursesPageHeaderProps {
  title?: string;
}

export default function CoursesPageHeader({ title = "Our Courses" }: CoursesPageHeaderProps) {
  return (
    <section className="tj-page-header">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6">
            <div className="tj-page-header-content">
              <h1 className="tj-page-title">{title}</h1>
              <CoursesBreadcrumb title={title} />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <CoursesStatsCounter stats={courseStats} />
          </div>
        </div>
      </div>
    </section>
  );
}
