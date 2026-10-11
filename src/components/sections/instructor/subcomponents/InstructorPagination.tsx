"use client";

interface InstructorPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function InstructorPagination({
  currentPage,
  totalPages,
  onPageChange,
}: InstructorPaginationProps) {
  return (
    <div className="row">
      <div className="col-12">
        <div className="course-pagination-area d-flex flex-wrap align-items-center justify-content-between tj-fade-anim gap-3">
          <div className="tj-show-results">
            <span className="course-show">
              Showing <strong>1-6</strong> of <strong>300</strong> instructor
            </span>
          </div>
          <div className="tj-pagination">
            {[1, 2, 3].map((page) => (
              <span
                key={page}
                className={`page-numbers ${currentPage === page ? "current" : ""}`}
                style={{ cursor: "pointer" }}
                onClick={() => onPageChange(page)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") onPageChange(page);
                }}
              >
                {page}
              </span>
            ))}
            <span
              className="next page-numbers"
              style={{ cursor: "pointer" }}
              onClick={() => {
                if (currentPage < totalPages) onPageChange(currentPage + 1);
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  if (currentPage < totalPages) onPageChange(currentPage + 1);
                }
              }}
            >
              <i className="tji-arrow-right-3"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
