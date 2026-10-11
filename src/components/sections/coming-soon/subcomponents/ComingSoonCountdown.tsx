"use client";

import { useState, useEffect } from "react";

export default function ComingSoonCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: "45",
    hours: "18",
    minutes: "32",
    seconds: "10",
  });

  useEffect(() => {
    // Target 45 days into the future from current time for a vibrant, active countdown
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 45);
    const target = targetDate.getTime();

    const timer = setInterval(() => {
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

    return () => clearInterval(timer);
  }, []);

  const timeBlocks = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Mins", value: timeLeft.minutes },
    { label: "Sec", value: timeLeft.seconds, isSec: true },
  ];

  return (
    <div
      className="countdown d-flex justify-content-center align-items-center flex-wrap gap-3 my-4"
      data-day_label="Days"
      data-hour_label="Hours"
      data-min_label="Mins"
      data-sec_label="Sec"
    >
      {timeBlocks.map((block) => (
        <div
          key={block.label}
          className={`countdown-container ${block.label.toLowerCase()}`}
          style={{
            background: "rgba(255, 255, 255, 0.08)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            borderRadius: "16px",
            padding: "18px 24px",
            minWidth: "90px",
            textAlign: "center",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.25)",
            transition: "transform 0.3s ease, border-color 0.3s ease",
          }}
        >
          <span
            className="countdown-value"
            style={{
              fontSize: "2.4rem",
              fontWeight: 800,
              color: "#fff",
              display: "block",
              lineHeight: 1.1,
              letterSpacing: "-0.5px",
            }}
          >
            {block.value}
          </span>
          <span
            className="countdown-heading"
            style={{
              fontSize: "0.85rem",
              color: "rgba(255, 255, 255, 0.75)",
              textTransform: "uppercase",
              letterSpacing: "1.5px",
              marginTop: "4px",
              display: "block",
              fontWeight: 600,
            }}
          >
            {block.label}
          </span>
        </div>
      ))}
    </div>
  );
}
