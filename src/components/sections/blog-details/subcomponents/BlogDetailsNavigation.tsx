import Link from "next/link";

interface BlogDetailsNavigationProps {
  prevHref?: string;
  nextHref?: string;
  homeHref?: string;
}

export default function BlogDetailsNavigation({
  prevHref = "/blog-details",
  nextHref = "/blog-details",
  homeHref = "/blog",
}: BlogDetailsNavigationProps) {
  return (
    <div className="tj_wpost_navigation tj-fade-anim d-flex align-items-center justify-content-between p-3 rounded-4 bg-light my-4">
      {/* Previous post */}
      <div className="tj_prev">
        <Link
          className="navigation_prev d-inline-flex align-items-center gap-2 fw-semibold text-dark text-decoration-none"
          href={prevHref}
        >
          <span className="navigation_icon">
            <i className="tji-arrow-left-4"></i>
          </span>
          <span className="navigation_text">Previous</span>
        </Link>
      </div>

      {/* Grid Home */}
      <div className="navigation_home">
        <Link
          href={homeHref}
          className="d-flex align-items-center justify-content-center rounded-circle border bg-white shadow-sm"
          style={{ width: "42px", height: "42px" }}
          aria-label="Back to Blog Grid"
        >
          <i className="tji-grid fs-6 text-dark"></i>
        </Link>
      </div>

      {/* Next post */}
      <div className="tj_next">
        <Link
          className="navigation_next d-inline-flex align-items-center gap-2 fw-semibold text-dark text-decoration-none"
          href={nextHref}
        >
          <span className="navigation_text">Next</span>
          <span className="navigation_icon">
            <i className="tji-arrow-right-4"></i>
          </span>
        </Link>
      </div>
    </div>
  );
}
