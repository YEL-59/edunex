"use client";

import { FaqQuestionItem } from "@/types";

interface FaqAccordionItemProps {
  item: FaqQuestionItem;
  isOpen: boolean;
  onToggle: () => void;
}

export default function FaqAccordionItem({
  item,
  isOpen,
  onToggle,
}: FaqAccordionItemProps) {
  return (
    <div
      className="tj-accordion-item tj-fade-anim"
      data-delay={item.delay || ".3"}
      data-duration="0.6"
    >
      <button
        className={`tj-accordion-title ${isOpen ? "" : "collapsed"}`}
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        {item.question}
      </button>
      <div
        className={`collapse ${isOpen ? "show" : ""}`}
        style={{ display: isOpen ? "block" : "none" }}
      >
        <div className="accordion-body tj-accordion-content">{item.answer}</div>
      </div>
    </div>
  );
}
