import type { CSSProperties } from "react";

interface RatingStarsProps {
  score?: number;
  maxScore?: number;
}

interface CustomRatingStyle extends CSSProperties {
  "--r-rating-icon-marked-width"?: string;
}

export default function RatingStars({ score = 5, maxScore = 5 }: RatingStarsProps) {
  return (
    <div
      className="tj-rating-wrapper rating"
      role="img"
      aria-label={`Rated ${score} out of ${maxScore}`}
    >
      {[...Array(maxScore)].map((_, i) => {
        const starNumber = i + 1;
        let markedWidth = "100%";

        if (score >= starNumber) {
          markedWidth = "100%";
        } else if (score > i) {
          const remainder = Math.round((score - i) * 100);
          markedWidth = `${remainder}%`;
        } else {
          markedWidth = "0%";
        }

        const starStyle: CustomRatingStyle = {
          "--r-rating-icon-marked-width": markedWidth,
        };

        return (
          <div className="r-icon" key={i}>
            <div className="r-icon-wrapper r-icon-marked" style={starStyle}>
              <i aria-hidden="true" className="tji-star"></i>
            </div>
            <div className="r-icon-wrapper r-icon-unmarked">
              <i aria-hidden="true" className="tji-star"></i>
            </div>
          </div>
        );
      })}
    </div>
  );
}
