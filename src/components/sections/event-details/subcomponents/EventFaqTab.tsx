"use client";

import { useState } from "react";

interface EventFaqTabProps {
  faqs: {
    id: number;
    question: string;
    answer: string;
  }[];
}

export default function EventFaqTab({ faqs }: EventFaqTabProps) {
  const [activeId, setActiveId] = useState<number | null>(1);

  const toggle = (id: number) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <div id="faqs" className="tj-course-faqs">
      <h3 className="title">Frequently asked questions</h3>
      <div className="tj-faq tj-faq-4" id="tjAccordion01">
        {faqs.map((faq) => {
          const isOpen = activeId === faq.id;
          return (
            <div
              className="tj-accordion-item tj-fade-anim"
              data-delay=".3"
              data-duration="0.6"
              key={faq.id}
            >
              <button
                className={`tj-accordion-title ${isOpen ? "" : "collapsed"}`}
                type="button"
                onClick={() => toggle(faq.id)}
                aria-expanded={isOpen}
              >
                {faq.question}
              </button>
              <div
                className={`collapse ${isOpen ? "show" : ""}`}
                style={{ display: isOpen ? "block" : "none" }}
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
  );
}
