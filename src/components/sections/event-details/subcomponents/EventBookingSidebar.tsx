"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import EventSharePopup from "./EventSharePopup";

interface EventBookingSidebarProps {
  sidebar: {
    price: string;
    originalPrice: string;
    discountBadge: string;
    pricingEndText: string;
    countdownDate: string;
    seatsBookedText: string;
    seatsBookedPercent: string;
    includes: string[];
  };
}

export default function EventBookingSidebar({
  sidebar,
}: EventBookingSidebarProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: "28",
    hours: "14",
    minutes: "35",
    seconds: "42",
  });

  useEffect(() => {
    const target = new Date("2027-01-31T12:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        const d = Math.floor(difference / (1000 * 60 * 60 * 24));
        const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({
          days: d < 10 ? `0${d}` : `${d}`,
          hours: h < 10 ? `0${h}` : `${h}`,
          minutes: m < 10 ? `0${m}` : `${m}`,
          seconds: s < 10 ? `0${s}` : `${s}`,
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="tj-sticky-item-2">
      <div className="tj-course-sidebar">
        {/* Pricing & Booking Widget */}
        <div className="tj-course-widget-price">
          <div className="price-wrap">
            <div className="course-price tj-fs-h6">
              {sidebar.price} <del>{sidebar.originalPrice}</del>
            </div>
            <div className="discount-badge">{sidebar.discountBadge}</div>
          </div>
          <div className="course-end">
            <i className="tji-clock"></i> {sidebar.pricingEndText}
          </div>

          {/* Countdown Timer */}
          <div className="event-countdown">
            <div className="event-start">
              <i className="tji-clock"></i> Events start in
            </div>
            <div className="countdown">
              <div className="countdown-container days">
                <span className="countdown-value">{timeLeft.days}</span>
                <span className="countdown-heading">Days</span>
              </div>
              <div className="countdown-container hours">
                <span className="countdown-value">{timeLeft.hours}</span>
                <span className="countdown-heading">Hours</span>
              </div>
              <div className="countdown-container minutes">
                <span className="countdown-value">{timeLeft.minutes}</span>
                <span className="countdown-heading">Mins</span>
              </div>
              <div className="countdown-container seconds">
                <span className="countdown-value">{timeLeft.seconds}</span>
                <span className="countdown-heading">Secs</span>
              </div>
            </div>
          </div>

          {/* Seat Booked Progress Bar */}
          <div className="seat-booked-wrap">
            <div className="seat-booked-title-wrap">
              <span className="seat-booked-title">{sidebar.seatsBookedText}</span>
              <span className="seat-booked-percent">{sidebar.seatsBookedPercent}</span>
            </div>
            <div
              className="seat-booked-progress-bar"
              style={{
                width: "100%",
                height: "8px",
                backgroundColor: "#e2e8f0",
                borderRadius: "4px",
                overflow: "hidden",
                marginTop: "6px",
              }}
            >
              <span
                className="seat-booked-progress-value"
                aria-hidden="true"
                style={{
                  display: "block",
                  width: sidebar.seatsBookedPercent,
                  height: "100%",
                  backgroundColor: "var(--tj-color-theme-primary, #2b61ff)",
                  borderRadius: "4px",
                }}
              ></span>
            </div>
          </div>

          <Link
            className="tj-btn-primary tj-btn-primary-md tj-btn-full flip-text-wrap"
            href="/contact"
          >
            <span className="btn-text">Book seat now</span>
            <span className="btn-icon">
              <i className="tji-arrow-right-2"></i>
            </span>
          </Link>

          <Link
            className="tj-btn-primary tj-btn-primary-light tj-btn-primary-md tj-btn-full flip-text-wrap mt-2"
            href="/contact"
          >
            <span className="btn-text">Add to calendar</span>
          </Link>

          <div className="guarantee-text">
            <i className="tji-guarantee"></i>Free cancellation until 16 Nov
          </div>
        </div>

        {/* What is Included Widget */}
        <div className="tj-course-widget-list">
          <h3 className="course-widget-title">This course includes</h3>
          <div className="tj-course-widget-list-inner">
            {sidebar.includes.map((item, idx) => {
              const icons = ["tji-check-4", "tji-file", "tji-download", "tji-certified", "tji-user-duo"];
              const icon = icons[idx % icons.length];
              return (
                <div className="tj-course-widget-list-item" key={idx}>
                  <span className="icon">
                    <i className={icon}></i>
                  </span>
                  <span className="text">{item}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Share Widget */}
        <div className="tj-course-share">
          <EventSharePopup shareTitle="Share this event" />
        </div>
      </div>
    </div>
  );
}
