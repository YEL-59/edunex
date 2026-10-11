"use client";

import { FaqTabCategory } from "@/types";

interface FaqCategoryTabsProps {
  categories: FaqTabCategory[];
  activeCategoryId: string;
  onSelectCategory: (id: string) => void;
}

export default function FaqCategoryTabs({
  categories,
  activeCategoryId,
  onSelectCategory,
}: FaqCategoryTabsProps) {
  return (
    <div className="d-flex justify-content-center tj-fade-anim" data-delay="0.4">
      <ul className="nav nav-tabs tj-faq-tab" id="faq-tab" role="tablist">
        {categories.map((cat) => {
          const isActive = activeCategoryId === cat.id;
          return (
            <li className="nav-item" role="presentation" key={cat.id}>
              <button
                className={`nav-link ${isActive ? "active" : ""}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => onSelectCategory(cat.id)}
              >
                {cat.label}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
