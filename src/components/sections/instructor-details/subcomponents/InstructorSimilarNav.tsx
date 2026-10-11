interface InstructorSimilarNavProps {
  onPrev: () => void;
  onNext: () => void;
}

export default function InstructorSimilarNav({
  onPrev,
  onNext,
}: InstructorSimilarNavProps) {
  return (
    <div className="slider-navigation">
      <div
        className="slider-prev slider-prev-1"
        onClick={onPrev}
        role="button"
        tabIndex={0}
        aria-label="Previous Similar Instructor"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") onPrev();
        }}
      >
        <span className="anim-icon">
          <i className="tji-arrow-left-3"></i>
          <i className="tji-arrow-left-3"></i>
        </span>
      </div>
      <div
        className="slider-next slider-next-1"
        onClick={onNext}
        role="button"
        tabIndex={0}
        aria-label="Next Similar Instructor"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") onNext();
        }}
      >
        <span className="anim-icon">
          <i className="tji-arrow-right-3"></i>
          <i className="tji-arrow-right-3"></i>
        </span>
      </div>
    </div>
  );
}
