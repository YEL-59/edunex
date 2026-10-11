"use client";

import { useState } from "react";
import { CourseFaqItem } from "@/types";

interface CourseFaqTabProps {
  faqs?: CourseFaqItem[];
}

const DEFAULT_FAQS: CourseFaqItem[] = [
  {
    id: 1,
    question: "Q1. Can I host live coaching sessions?",
    answer:
      "Clients can view your availability, choose a suitable time slot, and book sessions online through the built-in scheduling system. Organize and manage all your projects effortlessly in one place.",
  },
  {
    id: 2,
    question: "Q2. How do clients book coaching sessions?",
    answer:
      "Clients can view your availability, choose a suitable time slot, and book sessions online through the built-in scheduling system. Organize and manage all your projects effortlessly in one place.",
  },
  {
    id: 3,
    question: "Q3. Can I sell courses and coaching programs?",
    answer:
      "Clients can view your availability, choose a suitable time slot, and book sessions online through the built-in scheduling system. Organize and manage all your projects effortlessly in one place.",
  },
  {
    id: 4,
    question: "Q4. Does the platform support progress tracking?",
    answer:
      "Clients can view your availability, choose a suitable time slot, and book sessions online through the built-in scheduling system. Organize and manage all your projects effortlessly in one place.",
  },
  {
    id: 5,
    question: "05. Do I need technical skills to get started?",
    answer:
      "Clients can view your availability, choose a suitable time slot, and book sessions online through the built-in scheduling system. Organize and manage all your projects effortlessly in one place.",
  },
];

export default function CourseFaqTab({ faqs = DEFAULT_FAQS }: CourseFaqTabProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenFaq((prev) => (prev === id ? null : id));
  };

  return (
    <div id="faqs" className="tj-course-faqs mb-5">
      <h3 className="title mb-4">Frequently asked questions</h3>
      <div className="tj-faq tj-faq-4 d-flex flex-column gap-3">
        {faqs.map((faq) => {
          const isOpen = openFaq === faq.id;
          return (
            <div
              key={faq.id}
              className={`tj-accordion-item rounded-3 border overflow-hidden ${
                isOpen ? "active" : ""
              }`}
              style={{ borderColor: "#e6e8ec" }}
            >
              <button
                className={`tj-accordion-title w-100 text-start p-3 fw-bold d-flex justify-content-between align-items-center bg-light border-0 ${
                  isOpen ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => toggleFaq(faq.id)}
                aria-expanded={isOpen}
              >
                <span>{faq.question}</span>
                <i className={`tji-arrow-${isOpen ? "up" : "down"}-2 text-muted ms-2`}></i>
              </button>
              {isOpen && (
                <div className="accordion-body tj-accordion-content p-3 bg-white text-muted">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
