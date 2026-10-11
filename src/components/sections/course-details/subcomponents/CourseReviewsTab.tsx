import Image from "next/image";
import { CourseReviewItem, CourseRatingBreakdown } from "@/types";

interface CourseReviewsTabProps {
  score?: number;
  totalRatings?: string;
  breakdown?: CourseRatingBreakdown;
  reviews?: CourseReviewItem[];
}

export default function CourseReviewsTab({
  score = 4.9,
  totalRatings = "3,214 ratings",
  breakdown = { "5": 86, "4": 10, "3": 3, "2": 1, "1": 0 },
  reviews = [
    {
      id: 1,
      author: {
        name: "Brooklyn Simmons",
        avatar: "/assets/images/users/user-img-1.png",
        date: "2 weeks ago",
      },
      rating: 5,
      content:
        "“The platform transformed complex analytics into simple actions, helping our team make faster, smarter deep technical expertise daily.”",
    },
    {
      id: 2,
      author: {
        name: "Cody Fisher",
        avatar: "/assets/images/users/user-img-2.png",
        date: "1 weeks ago",
      },
      rating: 5,
      content:
        "“Our team reduced manual reporting time drastically and now focuses on strategy instead of repetitive data tasks thanks to AI insights.”",
    },
    {
      id: 3,
      author: {
        name: "Jenny Wilson",
        avatar: "/assets/images/users/user-img-3.png",
        date: "1 month ago",
      },
      rating: 5,
      content:
        "“We improved marketing performance significantly using AI-driven recommendations that optimize campaigns, consistent results.”",
    },
    {
      id: 4,
      author: {
        name: "Bessie Cooper",
        avatar: "/assets/images/users/user-img-4.png",
        date: "2 months ago",
      },
      rating: 5,
      content:
        "“The platform transformed complex analytics into simple actions, helping our team make faster, smarter deep technical expertise daily.”",
    },
  ],
}: CourseReviewsTabProps) {
  return (
    <div id="reviews" className="tj-course-reviews mb-5">
      <h3 className="title mb-4">Student reviews</h3>

      {/* Summary Box */}
      <div className="tj-course-reviews-summary p-4 rounded-4 bg-light mb-4">
        <div className="tj-reviews-rating-wrap d-flex flex-column flex-md-row gap-4 align-items-center">
          {/* Big Score */}
          <div className="tj-reviews-rating text-center pe-md-4 border-end-md">
            <div className="tutor-review-summary-average-rating display-4 fw-bold text-dark">
              {score}
            </div>
            <div className="tj-rating-wrapper rating my-2 d-inline-flex gap-1" style={{ color: "#ffb800" }}>
              {[...Array(5)].map((_, i) => (
                <i key={i} className="tji-star fs-5"></i>
              ))}
            </div>
            <div className="tj-rating-count text-muted small">{totalRatings}</div>
          </div>

          {/* Breakdown Bars */}
          <div className="tutor-review-summary-ratings flex-grow-1 w-100">
            {([5, 4, 3, 2, 1] as const).map((stars) => {
              const pct = breakdown[String(stars) as keyof CourseRatingBreakdown] ?? 0;
              return (
                <div
                  key={stars}
                  className="tutor-review-summary-rating d-flex align-items-center gap-3 mb-2"
                >
                  <div className="tutor-ratings d-flex align-items-center gap-1 text-muted small" style={{ minWidth: "35px" }}>
                    <span>{stars}</span>
                    <i className="tji-star text-warning" style={{ fontSize: "12px" }}></i>
                  </div>
                  <div
                    className="progress flex-grow-1"
                    style={{ height: "8px", backgroundColor: "#e2e6ea" }}
                  >
                    <div
                      className="progress-bar bg-warning"
                      role="progressbar"
                      style={{ width: `${pct}%` }}
                      aria-valuenow={pct}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                  <span className="tutor-individual-star-rating text-muted small" style={{ minWidth: "35px" }}>
                    {pct}%
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Individual Student Review Items */}
      <div className="student-reviews d-flex flex-column gap-3">
        {reviews.map((rev) => (
          <div
            key={rev.id}
            className="student-reviews-item p-4 rounded-4 border bg-white"
            style={{ borderColor: "#e6e8ec" }}
          >
            <div className="author-wrap d-flex align-items-center gap-3 mb-3">
              <div
                className="author-avatar position-relative rounded-circle overflow-hidden flex-shrink-0"
                style={{ width: "46px", height: "46px" }}
              >
                <Image
                  src={rev.author.avatar}
                  alt={rev.author.name}
                  fill
                  sizes="46px"
                  className="object-fit-cover"
                />
              </div>
              <div className="author-info">
                <h4 className="name tj-fs-h6 m-0">{rev.author.name}</h4>
                <span className="designation text-muted small">{rev.author.date}</span>
              </div>
            </div>

            <div className="student-reviews-content">
              <div className="tj-rating-wrapper rating mb-2 d-inline-flex gap-1" style={{ color: "#ffb800" }}>
                {[...Array(rev.rating)].map((_, i) => (
                  <i key={i} className="tji-star" style={{ fontSize: "14px" }}></i>
                ))}
              </div>
              <p className="desc text-muted m-0">{rev.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
