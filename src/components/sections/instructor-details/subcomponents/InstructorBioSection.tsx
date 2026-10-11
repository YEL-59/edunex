interface InstructorBioSectionProps {
  bio: string[];
  skills: string[];
}

export default function InstructorBioSection({
  bio,
  skills,
}: InstructorBioSectionProps) {
  return (
    <div id="about" className="tj-instructor-about">
      <h3 className="title">Instructor bio</h3>
      {bio.map((paragraph, idx) => (
        <p key={idx}>{paragraph}</p>
      ))}

      <h3 className="title">Core expertise</h3>
      <div className="tj-skill-lists">
        {skills.map((skill, idx) => (
          <span className="tj-skill-item" key={idx}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
