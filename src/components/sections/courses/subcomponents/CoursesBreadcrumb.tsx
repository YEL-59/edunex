import Link from "next/link";

interface CoursesBreadcrumbProps {
  title?: string;
}

export default function CoursesBreadcrumb({ title = "Courses" }: CoursesBreadcrumbProps) {
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
        <span>{title}</span>
      </span>
    </div>
  );
}
