"use client";

import React, { useState } from "react";
import Image from "next/image";
import FlipButton from "@/components/common/FlipButton";
import { aboutFaqsData } from "@/data/about";

export default function AboutFaqSection() {
  const [activeId, setActiveId] = useState<number | null>(1);

  const toggleAccordion = (id: number) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="tj-faq-section section-gap fix">
      <div className="container">
        {/* Section Heading */}
        <div className="row">
          <div className="col-12">
            <div className="sec-heading tj-faq-heading">
              <h2 className="sec-title sec-title-faq tj-fade-anim" data-delay=".3">
                FAQS
              </h2>
            </div>
          </div>
        </div>

        <div className="row rg-20 flex-lg-row flex-column-reverse">
          {/* Support Info Box Column */}
          <div className="col-12 col-xl-4 col-lg-5">
            <div className="support-box tj-fade-anim" data-duration=".6">
              <div className="support-icon">
                <Image
                  src="/assets/images/icons/support.png"
                  alt="Support Icon"
                  width={60}
                  height={60}
                />
              </div>
              <div className="support-content">
                <h3 className="support-title tj-fs-h4">Need support?</h3>
                <p className="support-desc">
                  Connect with experienced mentors and coaches who help you achieve.
                </p>
              </div>
              <div className="support-btn">
                <FlipButton href="/contact" icon="tji-arrow-right-2">
                  Find a coach
                </FlipButton>
              </div>
            </div>
          </div>

          {/* FAQ Accordion Column */}
          <div className="col-12 col-xl-8 col-lg-7">
            <div className="tj-faq-wrapper">
              <div className="tj-faq" id="tjAccordion01">
                {aboutFaqsData.map((faq) => {
                  const isOpen = activeId === faq.id;
                  return (
                    <div
                      key={faq.id}
                      className="tj-accordion-item tj-fade-anim"
                      data-delay={faq.delay}
                      data-duration="0.6"
                    >
                      <button
                        className={`tj-accordion-title ${isOpen ? "" : "collapsed"}`}
                        type="button"
                        onClick={() => toggleAccordion(faq.id)}
                        aria-expanded={isOpen}
                      >
                        {faq.question}
                      </button>
                      <div
                        className={`collapse ${isOpen ? "show" : ""}`}
                        style={{
                          display: isOpen ? "block" : "none",
                        }}
                      >
                        <div className="accordion-body tj-accordion-content">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
