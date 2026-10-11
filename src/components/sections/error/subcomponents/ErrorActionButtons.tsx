import Link from "next/link";

export default function ErrorActionButtons() {
  return (
    <div className="error-btn d-flex flex-wrap align-items-center justify-content-center gap-3 mt-4">
      <Link className="tj-btn-primary flip-text-wrap" href="/">
        <span className="btn-text">Back to home</span>
        <span className="btn-icon">
          <i className="tji-arrow-right-2"></i>
        </span>
      </Link>
      <Link className="tj-btn-primary tj-btn-primary-light flip-text-wrap" href="/courses">
        <span className="btn-text">Explore courses</span>
        <span className="btn-icon">
          <i className="tji-arrow-right-2"></i>
        </span>
      </Link>
    </div>
  );
}
