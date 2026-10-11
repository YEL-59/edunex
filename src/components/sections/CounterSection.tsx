"use client";

import React, { useEffect, useState, useRef } from "react";
import { countersData } from "@/data/counters";

function CounterItemBox({
  iconClass,
  target,
  displayNumber,
  suffix,
  label,
}: {
  iconClass: string;
  target: number;
  displayNumber: string;
  suffix: string;
  label: string;
}) {
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
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [hasStarted, target]);

  const formattedCount = () => {
    if (!hasStarted) return "0";
    if (target % 1 !== 0) {
      return count.toFixed(1);
    }
    return Math.floor(count).toLocaleString();
  };

  return (
    <div className="tj-counter-item" ref={elementRef}>
      <div className="tj-counter">
        <div className="counter-icon">
          <i className={iconClass}></i>
        </div>
        <div className="counter-number">
          <span className="counter" data-target={target}>
            {hasStarted ? formattedCount() : displayNumber}
          </span>
          <span className="suffix">{suffix}</span>
        </div>
        <div className="counter-label">{label}</div>
      </div>
    </div>
  );
}

export default function CounterSection() {
  return (
    <div className="tj-counter-section fix">
      <div className="bg-noise"></div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tj-counter-wrapper">
              {countersData.map((item) => (
                <CounterItemBox
                  key={item.id}
                  iconClass={item.iconClass}
                  target={item.target}
                  displayNumber={item.displayNumber}
                  suffix={item.suffix}
                  label={item.label}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
