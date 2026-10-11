interface CoursesStatsCounterProps {
  stats: {
    onlineCourses: string;
    expertInstructors: string;
    onlineLearners: string;
  };
}

export default function CoursesStatsCounter({ stats }: CoursesStatsCounterProps) {
  return (
    <div className="tj-counter-wrapper tj-counter-wrapper-3">
      <div className="tj-counter-item tj-counter-item-3">
        <div className="tj-counter">
          <div className="counter-number">
            <span className="counter">{stats.onlineCourses.replace(/[^0-9]/g, "") || "300"}</span>
            <span className="suffix">+</span>
          </div>
          <div className="counter-label">Online courses</div>
        </div>
      </div>
      <div className="tj-counter-item tj-counter-item-3">
        <div className="tj-counter">
          <div className="counter-number">
            <span className="counter">{stats.expertInstructors.replace(/[^0-9]/g, "") || "100"}</span>
            <span className="suffix">+</span>
          </div>
          <div className="counter-label">Expert Instructors</div>
        </div>
      </div>
      <div className="tj-counter-item tj-counter-item-3">
        <div className="tj-counter">
          <div className="counter-number">
            <span className="counter">{stats.onlineLearners.replace(/[^0-9]/g, "") || "180"}</span>
            <span className="suffix">K</span>
          </div>
          <div className="counter-label">Online Learners</div>
        </div>
      </div>
    </div>
  );
}
