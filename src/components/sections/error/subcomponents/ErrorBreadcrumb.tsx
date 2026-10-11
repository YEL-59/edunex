import Link from "next/link";

interface ErrorBreadcrumbProps {
  currentPage?: string;
}

export default function ErrorBreadcrumb({
  currentPage = "Error 404",
}: ErrorBreadcrumbProps) {
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
        <span>{currentPage}</span>
      </span>
    </div>
  );
}
