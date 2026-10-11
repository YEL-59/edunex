import React from "react";

interface AboutAcademyFeatureCardProps {
  title: string;
  description: string;
  iconClass: string;
  delay?: string;
}

export default function AboutAcademyFeatureCard({
  title,
  description,
  iconClass,
  delay = ".2",
}: AboutAcademyFeatureCardProps) {
  return (
    <div className="col-12 tj-fade-anim" data-delay={delay}>
      <div className="about-3-feature">
        <div className="about-3-feature-head">
          <span className="about-3-feature-icon">
            <i className={iconClass}></i>
          </span>
          <h3 className="about-3-feature-title tj-fs-h5">{title}</h3>
        </div>
        <p className="about-3-feature-desc">{description}</p>
      </div>
    </div>
  );
}
