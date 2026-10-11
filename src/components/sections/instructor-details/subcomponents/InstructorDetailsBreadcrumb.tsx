import Link from "next/link";

interface InstructorDetailsBreadcrumbProps {
  currentPage?: string;
}

export default function InstructorDetailsBreadcrumb({
  currentPage = "Instructor details",
}: InstructorDetailsBreadcrumbProps) {
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
        <Link href="/instructor">Instructor</Link>
      </span>
      <span>
        <i className="tji-arrow-right-4"></i>
      </span>
      <span>
        <span>{currentPage}</span>
      </span>
    </div>
  );
}
