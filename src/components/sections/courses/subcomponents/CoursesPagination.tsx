"use client";

interface CoursesPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  totalCourses: number;
  currentCount: number;
}

export default function CoursesPagination({
  currentPage,
  totalPages,
  onPageChange,
  totalCourses,
  currentCount,
}: CoursesPaginationProps) {
  return (
    <div className="row">
      <div className="col-12">
        <div className="course-pagination-area d-flex flex-wrap align-items-center justify-content-between tj-fade-anim gap-3 mt-4">
          <div className="tj-show-results">
            <span className="course-show">
              Showing <strong>1-{currentCount}</strong> of <strong>{totalCourses}</strong> courses
            </span>
          </div>
          <div className="tj-pagination">
            {[...Array(totalPages)].map((_, i) => {
              const pageNum = i + 1;
              const isCurrent = pageNum === currentPage;
              return (
                <button
                  key={pageNum}
                  type="button"
                  className={`page-numbers ${isCurrent ? "current" : ""}`}
                  onClick={() => onPageChange(pageNum)}
                  style={{
                    border: "none",
                    cursor: "pointer",
                  }}
                  aria-current={isCurrent ? "page" : undefined}
                >
                  {pageNum}
                </button>
              );
            })}
            {currentPage < totalPages && (
              <button
                type="button"
                className="next page-numbers"
                onClick={() => onPageChange(currentPage + 1)}
                style={{ border: "none", cursor: "pointer" }}
                aria-label="Next Page"
              >
                <i className="tji-arrow-right-3"></i>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
