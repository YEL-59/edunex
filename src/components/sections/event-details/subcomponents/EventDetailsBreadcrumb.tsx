import Link from "next/link";

interface EventDetailsBreadcrumbProps {
  currentPage?: string;
}

export default function EventDetailsBreadcrumb({
  currentPage = "Event details",
}: EventDetailsBreadcrumbProps) {
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
        <Link href="/event">Events</Link>
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
