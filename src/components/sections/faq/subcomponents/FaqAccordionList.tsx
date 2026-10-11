"use client";

import { useState } from "react";
import { FaqQuestionItem } from "@/types";
import FaqAccordionItem from "./FaqAccordionItem";

interface FaqAccordionListProps {
  items: FaqQuestionItem[];
}

export default function FaqAccordionList({ items }: FaqAccordionListProps) {
  const [activeId, setActiveId] = useState<number | null>(items[0]?.id || 1);

  const toggle = (id: number) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="tab-pane fade show active" role="tabpanel">
      <div className="tj-faq tj-faq-3">
        {items.map((item) => (
          <FaqAccordionItem
            key={item.id}
            item={item}
            isOpen={activeId === item.id}
            onToggle={() => toggle(item.id)}
          />
        ))}
      </div>
    </div>
  );
}
