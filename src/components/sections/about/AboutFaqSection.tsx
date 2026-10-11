"use client";

import { useState } from "react";
import { aboutFaqsData } from "@/data/about";
import AboutFaqSupportCard from "./subcomponents/AboutFaqSupportCard";
import AboutFaqAccordionItem from "./subcomponents/AboutFaqAccordionItem";

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
          {/* Sub-component: Support Info Box */}
          <AboutFaqSupportCard
            iconSrc="/assets/images/icons/support.png"
            title="Need support?"
            description="Connect with experienced mentors and coaches who help you achieve."
            buttonText="Find a coach"
            buttonHref="/contact"
          />

          {/* Sub-components: FAQ Accordion Column */}
          <div className="col-12 col-xl-8 col-lg-7">
            <div className="tj-faq-wrapper">
              <div className="tj-faq" id="tjAccordion01">
                {aboutFaqsData.map((faq) => (
                  <AboutFaqAccordionItem
                    key={faq.id}
                    faq={faq}
                    isOpen={activeId === faq.id}
                    onToggle={() => toggleAccordion(faq.id)}
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
