"use client";

import React, { useEffect, useState, useRef } from "react";

interface AboutCounterCardProps {
  target: number;
  suffix: string;
  label: string;
  bgClass: string;
  delay: string;
}

export default function AboutCounterCard({
  target,
  suffix,
  label,
  bgClass,
  delay,
}: AboutCounterCardProps) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const duration = 1500;
    const steps = 40;
    const increment = target / steps;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [hasStarted, target]);

  const formattedCount =
    target >= 1000 ? count.toLocaleString() : count.toString();

  return (
    <div
      ref={elementRef}
      className="col-xl-3 col-sm-6 tj-fade-anim"
      data-delay={delay}
    >
      <div
        className={`tj-counter-item tj-counter-item-2 skill-counter-item ${bgClass}`}
      >
        <div className="tj-counter">
          <div className="counter-number">
            <span className="counter">{formattedCount}</span>
            <span className="suffix">{suffix}</span>
          </div>
          <div className="counter-label">{label}</div>
        </div>
      </div>
    </div>
  );
}
