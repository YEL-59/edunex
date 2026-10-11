"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import FlipButton from "../common/FlipButton";
import { eventsData } from "@/data/events";

export default function EventSection() {
  return (
    <div className="tj-event-section section-gap fix">
      <div className="bg-noise"></div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec-heading sec-heading-center">
              <span className="sec-subtitle tj-fade-anim" data-direction="top">
                <i className="tji-subtitle"></i> Live &amp; Upcoming
              </span>
              <h2 className="sec-title tj-text-light-1 tj-fade-anim" data-delay=".3">
                Upcoming Events For Career Growth.
              </h2>
            </div>
          </div>

          <div className="col-12">
            <div className="tj-event-wrapper">
              {eventsData.map((event) => (
                <div className="tj-event-item tj-fade-anim" key={event.id}>
                  <div className="tj-event-img">
                    <Link href={event.href}>
                      <Image
                        src={event.image}
                        alt={event.title}
                        width={280}
                        height={180}
                        style={{ width: "100%", height: "auto" }}
                      />
                    </Link>
                  </div>

                  <div className="tj-event-content">
                    <div className="tj-categories">
                      <Link className="tj-cat-2" href={event.href}>
                        {event.category}
                      </Link>
                    </div>
                    <h3 className="title">
                      <Link href={event.href}>{event.title}</Link>
                    </h3>
                    <p className="desc">{event.description}</p>
                    <div className="course-meta">
                      <span>
                        <i className="tji-location"></i>
                        {event.location}
                      </span>
                      <span>
                        <i className="tji-clock"></i>
                        {event.time}
                      </span>
                    </div>
                  </div>

                  <div className="tj-event-book">
                    <div className="tj-book-meta">
                      <span className="month">{event.date.month}</span>
                      <span className="date">{event.date.day}</span>
                    </div>
                    <div>
                      <FlipButton href={event.href} icon="tji-arrow-right-2">
                        Book seat now
                      </FlipButton>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
