"use client";

interface BlogPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function BlogPagination({
  currentPage,
  totalPages,
  onPageChange,
}: BlogPaginationProps) {
  return (
    <div className="tj-pagination justify-content-center tj-fade-anim d-flex gap-2 mt-4">
      {[...Array(totalPages)].map((_, i) => {
        const pageNum = i + 1;
        const isCurrent = pageNum === currentPage;
        return (
          <button
            key={pageNum}
            type="button"
            className={`page-numbers border-0 ${isCurrent ? "current" : ""}`}
            onClick={() => onPageChange(pageNum)}
            style={{ cursor: "pointer" }}
            aria-current={isCurrent ? "page" : undefined}
          >
            {pageNum}
          </button>
        );
      })}
      {currentPage < totalPages && (
        <button
          type="button"
          className="next page-numbers border-0"
          onClick={() => onPageChange(currentPage + 1)}
          style={{ cursor: "pointer" }}
          aria-label="Next Page"
        >
          <i className="tji-arrow-right-3"></i>
        </button>
      )}
    </div>
  );
}
