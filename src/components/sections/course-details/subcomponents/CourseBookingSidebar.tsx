import CourseSharePopup from "./CourseSharePopup";

interface CourseBookingSidebarProps {
  originalPrice?: string;
  currentPrice?: string;
  discountBadge?: string;
  onStartLearning?: () => void;
  onBuyNow?: () => void;
}

export default function CourseBookingSidebar({
  originalPrice = "$30.00",
  currentPrice = "$20.00",
  discountBadge = "38% off",
  onStartLearning,
  onBuyNow,
}: CourseBookingSidebarProps) {
  return (
    <div className="tj-sticky-item-2">
      <div className="tj-course-sidebar p-4 rounded-4 border bg-white shadow-sm" style={{ borderColor: "#e6e8ec" }}>
        {/* Price Card */}
        <div className="tj-course-widget-price mb-4">
          <div className="price-wrap d-flex align-items-center justify-content-between mb-3">
            <div className="course-price tj-fs-h6 fs-3 fw-bold text-dark m-0">
              {currentPrice} {originalPrice && <del className="fs-6 text-muted ms-2">{originalPrice}</del>}
            </div>
            {discountBadge && (
              <div className="discount-badge badge bg-danger text-white px-2 py-1">
                {discountBadge}
              </div>
            )}
          </div>

          <div className="course-end text-danger small mb-3 d-flex align-items-center gap-2">
            <i className="tji-clock"></i> Sale ends in 3 days — price goes back to {originalPrice || "$30"}
          </div>

          <button
            type="button"
            className="tj-btn-primary tj-btn-primary-md tj-btn-full flip-text-wrap w-100 mb-2 border-0"
            onClick={onStartLearning}
          >
            <span className="btn-text">Start learning</span>
            <span className="btn-icon">
              <i className="tji-arrow-right-2"></i>
            </span>
          </button>

          <button
            type="button"
            className="tj-btn-primary tj-btn-primary-light tj-btn-primary-md tj-btn-full flip-text-wrap w-100 mb-3 border-0"
            onClick={onBuyNow}
          >
            <span className="btn-text">Buy now</span>
          </button>

          <div className="guarantee-text text-muted small text-center d-flex align-items-center justify-content-center gap-2 pt-2 border-top">
            <i className="tji-guarantee text-success fs-6"></i> 30-day money-back guarantee
          </div>
        </div>

        {/* Course Includes List */}
        <div className="tj-course-widget-list pt-3 border-top mb-4">
          <h3 className="course-widget-title tj-fs-h6 mb-3">This course includes</h3>
          <div className="tj-course-widget-list-inner d-flex flex-column gap-3">
            <div className="tj-course-widget-list-item d-flex align-items-center gap-3">
              <span className="icon text-primary">
                <i className="tji-clock"></i>
              </span>
              <span className="text small">Lifetime access to all lessons</span>
            </div>
            <div className="tj-course-widget-list-item d-flex align-items-center gap-3">
              <span className="icon text-primary">
                <i className="tji-certified"></i>
              </span>
              <span className="text small">Certificate of completion</span>
            </div>
            <div className="tj-course-widget-list-item d-flex align-items-center gap-3">
              <span className="icon text-primary">
                <i className="tji-download"></i>
              </span>
              <span className="text small">33 downloadable resources</span>
            </div>
            <div className="tj-course-widget-list-item d-flex align-items-center gap-3">
              <span className="icon text-primary">
                <i className="tji-smartphone"></i>
              </span>
              <span className="text small">Access on mobile & desktop</span>
            </div>
            <div className="tj-course-widget-list-item d-flex align-items-center gap-3">
              <span className="icon text-primary">
                <i className="tji-file"></i>
              </span>
              <span className="text small">8 hands-on capstone projects</span>
            </div>
          </div>
        </div>

        {/* Share Section */}
        <div className="tj-course-share pt-3 border-top text-center">
          <CourseSharePopup buttonText="Share this course" />
        </div>
      </div>
    </div>
  );
}
