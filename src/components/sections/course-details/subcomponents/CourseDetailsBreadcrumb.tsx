import Link from "next/link";

interface CourseDetailsBreadcrumbProps {
  category?: string;
  title?: string;
}

export default function CourseDetailsBreadcrumb({
  category = "Courses",
  title = "Course details",
}: CourseDetailsBreadcrumbProps) {
  return (
    <div className="tj-page-link">
      <span>
        <i className="tji-home"></i>
      </span>
      <span>
        <Link href="/">Home</Link>
      </span>
      <span>
        <i className="tji-arrow-right-4"></i>
      </span>
      <span>
        <Link href="/courses">{category}</Link>
      </span>
      <span>
        <i className="tji-arrow-right-4"></i>
      </span>
      <span>
        <span>{title}</span>
      </span>
    </div>
  );
}
