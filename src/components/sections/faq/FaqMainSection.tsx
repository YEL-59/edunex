"use client";

import { useState } from "react";
import { faqCategoriesData } from "@/data/faqs";
import FaqCategoryTabs from "./subcomponents/FaqCategoryTabs";
import FaqAccordionList from "./subcomponents/FaqAccordionList";
import FaqSupportBanner from "./subcomponents/FaqSupportBanner";

export default function FaqMainSection() {
  const [activeCategoryId, setActiveCategoryId] = useState("general");

  const activeCategory =
    faqCategoriesData.find((cat) => cat.id === activeCategoryId) ||
    faqCategoriesData[0];

  return (
    <section className="tj-faq-section-4 section-gap-bottom fix">
      <div className="container">
        {/* Section Heading */}
        <div className="row">
          <div className="col-12">
            <div className="sec-heading sec-heading-center">
              <span className="sec-subtitle">
                <i className="tji-subtitle"></i> Support center
              </span>
              <h2 className="sec-title tj-fade-anim" data-delay="0.3">
                Browse FAQs to Get Quick answers.
              </h2>
            </div>

            <div className="tj-faq-wrapper-3">
              {/* Sub-component: Category Tabs */}
              <FaqCategoryTabs
                categories={faqCategoriesData}
                activeCategoryId={activeCategoryId}
                onSelectCategory={setActiveCategoryId}
              />

              {/* Sub-component: Accordion Questions List */}
              <div className="tab-content" id="faq-tabContent">
                <FaqAccordionList
                  key={activeCategory.id}
                  items={activeCategory.items}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Sub-component: Bottom Support Banner */}
        <FaqSupportBanner />
      </div>
    </section>
  );
}
