interface EventOverviewTabProps {
  paragraphs: string[];
  skills: string[];
}

export default function EventOverviewTab({
  paragraphs,
  skills,
}: EventOverviewTabProps) {
  return (
    <div id="overview" className="tj-event-overview">
      <div className="tutor-course-details-content">
        <h3 className="title">Event information</h3>
        {paragraphs.map((p, idx) => (
          <p key={idx}>{p}</p>
        ))}

        <div className="tj-course-details-box">
          <h3 className="title">Skills you&apos;ll gain</h3>
          <ul className="tj-list">
            {skills.map((skill, idx) => (
              <li key={idx}>
                <span className="icon">
                  <i className="tji-check"></i>
                </span>
                <span className="text">{skill}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
