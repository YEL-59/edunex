"use client";

import { useState } from "react";
import { EventAgendaItem } from "@/types";

interface EventAgendaTabProps {
  meta: string;
  items: EventAgendaItem[];
}

export default function EventAgendaTab({
  meta,
  items,
}: EventAgendaTabProps) {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div id="agenda" className="tj-course-curriculum">
      <div className="tj-course-curriculum-title-wrap">
        <h3 className="title">Event agenda</h3>
        <div className="curriculum-title-meta">{meta}</div>
      </div>
      <div className="tj-course-curriculum-inner">
        <div className="tutor-accordion">
          <div className="tj-course-accordion">
            {items.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div className="tj-course-accordion-item" key={item.id}>
                  <h4
                    className="tj-course-accordion-header tutor-accordion-item-header"
                    style={{ cursor: "pointer" }}
                    onClick={() => toggle(item.id)}
                  >
                    <span className="event-time">{item.time}</span>
                    <span className="tj-course-accordion-title-wrap">
                      <span className="tj-course-accordion-title">{item.title}</span>
                      <span className="tj-course-accordion-meta">{item.meta}</span>
                    </span>
                  </h4>
                  <div
                    className="tj-course-accordion-content"
                    style={{ display: isOpen ? "block" : "none" }}
                  >
                    <p className="desc">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
