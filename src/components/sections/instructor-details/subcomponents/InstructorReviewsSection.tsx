import Image from "next/image";
import RatingStars from "@/components/common/RatingStars";
import { InstructorReviewItem } from "@/types";

interface InstructorReviewsSectionProps {
  reviews: InstructorReviewItem[];
}

export default function InstructorReviewsSection({
  reviews,
}: InstructorReviewsSectionProps) {
  return (
    <div id="reviews" className="tj-course-reviews">
      <h3 className="title">Student reviews</h3>
      <div className="student-reviews">
        {reviews.map((rev) => (
          <div className="student-reviews-item" key={rev.id}>
            <div className="author-wrap">
              <div className="author-avatar">
                <Image
                  src={rev.author.avatar}
                  alt={rev.author.name}
                  width={50}
                  height={50}
                />
              </div>
              <div className="author-info">
                <h4 className="name tj-fs-h6">{rev.author.name}</h4>
                <span className="designation">{rev.author.date}</span>
              </div>
            </div>
            <div className="student-reviews-content">
              <RatingStars score={rev.rating} maxScore={5} />
              <p className="desc">{rev.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
