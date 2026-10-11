import { InstructorExperienceItem } from "@/types";

interface InstructorExperienceSectionProps {
  experiences: InstructorExperienceItem[];
}

export default function InstructorExperienceSection({
  experiences,
}: InstructorExperienceSectionProps) {
  return (
    <div id="experience" className="tj-instructor-experience">
      <h3 className="title">Experience</h3>
      <div className="tj-instructor-experience-wrap">
        {experiences.map((exp) => (
          <div className="tj-experience-item" key={exp.id}>
            <div className="experience-icon">
              <i className="tji-briefcase"></i>
            </div>
            <div className="experience-content">
              <h4 className="experience-title">{exp.title}</h4>
              <span className="experience-year">{exp.companyAndYear}</span>
              <p className="desc">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
