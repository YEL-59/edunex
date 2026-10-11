"use client";

import { aboutFeaturesData } from "@/data/about";
import AboutAcademyGallery from "./subcomponents/AboutAcademyGallery";
import AboutAcademyFeatureCard from "./subcomponents/AboutAcademyFeatureCard";

export default function AboutAcademySection() {
  return (
    <section className="tj-about-section-4 section-gap-bottom fix">
      <div className="container">
        <div className="row align-items-center flex-column-reverse flex-lg-row rg-50">
          {/* Left Column Sub-component: Gallery */}
          <div className="col-lg-6">
            <AboutAcademyGallery />
          </div>

          {/* Right Column: Headings & Sub-components: Features */}
          <div className="col-lg-6">
            <div className="about-3-content">
              <div className="sec-heading">
                <span className="sec-subtitle tj-fade-anim" data-direction="top">
                  <i className="tji-subtitle"></i> About Academy
                </span>
                <h2 className="sec-title tj-fade-anim" data-delay=".3">
                  Transforming knowledge into career opportunities through{" "}
                  <span>Edunex.</span>
                </h2>
              </div>

              <div className="about-3-feature-list row rg-20 gx-0">
                {aboutFeaturesData.map((feature) => (
                  <AboutAcademyFeatureCard
                    key={feature.id}
                    title={feature.title}
                    description={feature.description}
                    iconClass={feature.iconClass}
                    delay={feature.delay}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
