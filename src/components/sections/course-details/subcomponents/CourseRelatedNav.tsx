interface CourseRelatedNavProps {
  onPrev: () => void;
  onNext: () => void;
}

export default function CourseRelatedNav({ onPrev, onNext }: CourseRelatedNavProps) {
  return (
    <div className="slider-navigation d-flex gap-2">
      <button
        type="button"
        className="slider-prev slider-prev-1 border-0"
        onClick={onPrev}
        aria-label="Previous Course Slide"
      >
        <span className="anim-icon">
          <i className="tji-arrow-left-3"></i>
          <i className="tji-arrow-left-3"></i>
        </span>
      </button>
      <button
        type="button"
        className="slider-next slider-next-1 border-0"
        onClick={onNext}
        aria-label="Next Course Slide"
      >
        <span className="anim-icon">
          <i className="tji-arrow-right-3"></i>
          <i className="tji-arrow-right-3"></i>
        </span>
      </button>
    </div>
  );
}
