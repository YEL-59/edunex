"use client";

import React from "react";
import { careerPathsData } from "@/data/careerPaths";

export default function CareerPathSection() {
  return (
    <section className="tj-career-path-section section-gap fix">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec-heading sec-heading-center">
              <span className="sec-subtitle tj-fade-anim" data-direction="top">
                <i className="tji-subtitle"></i> Career paths
              </span>
              <h2 className="sec-title tj-fade-anim" data-delay=".3">
                Structured Paths for Future Careers
              </h2>
            </div>
          </div>

          <div className="col-12">
            <div className="tj-career-path-wrapper">
              {careerPathsData.map((item, idx) => {
                const isLast = idx === careerPathsData.length - 1;

                return (
                  <div
                    className="tj-career-path-item tj-fade-anim"
                    data-delay={`0.${3 + idx}`}
                    key={item.id}
                  >
                    {item.isFirst && (
                      <div
                        className="path-arrow-start"
                        style={{
                          backgroundImage:
                            "url('/assets/images/shapes/career-path-arrow-start.svg')",
                        }}
                      ></div>
                    )}
                    {!isLast && (
                      <div
                        className="path-arrow"
                        style={{
                          backgroundImage:
                            "url('/assets/images/shapes/career-path-arrow.svg')",
                        }}
                      ></div>
                    )}
                    <div className="sl-no">{item.stepNumber}</div>
                    <div className="tj-career-path-item-inner">
                      <div className={`tj-career-path-icon ${item.bgClass}`}>
                        <i className={item.iconClass}></i>
                      </div>
                      <div className="tj-career-path-content">
                        <h3 className="title tj-fs-h6">{item.title}</h3>
                        <p className="desc">{item.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
