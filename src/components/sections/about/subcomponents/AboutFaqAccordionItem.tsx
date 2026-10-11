import React from "react";
import { AboutFaqItem } from "@/types";

interface AboutFaqAccordionItemProps {
  faq: AboutFaqItem;
  isOpen: boolean;
  onToggle: () => void;
}

export default function AboutFaqAccordionItem({
  faq,
  isOpen,
  onToggle,
}: AboutFaqAccordionItemProps) {
  return (
    <div
      className="tj-accordion-item tj-fade-anim"
      data-delay={faq.delay}
      data-duration="0.6"
    >
      <button
        className={`tj-accordion-title ${isOpen ? "" : "collapsed"}`}
        type="button"
        onClick={onToggle}
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
        <div className="accordion-body tj-accordion-content">{faq.answer}</div>
      </div>
    </div>
  );
}
