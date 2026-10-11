import Link from "next/link";

interface FaqBreadcrumbProps {
  currentPage?: string;
}

export default function FaqBreadcrumb({
  currentPage = "FAQs",
}: FaqBreadcrumbProps) {
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
