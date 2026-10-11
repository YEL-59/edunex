"use client";

interface EventPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (p: number) => void;
}

export default function EventPagination({
  currentPage,
  totalPages,
  onPageChange,
}: EventPaginationProps) {
  return (
    <div className="tj-pagination mt-4">
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
  );
}
