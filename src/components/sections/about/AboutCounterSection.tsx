"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { aboutCountersData } from "@/data/about";

function AnimatedCounterBox({
  target,
  suffix,
  label,
  bgClass,
  delay,
}: {
  target: number;
  suffix: string;
  label: string;
  bgClass: string;
  delay: string;
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

export default function AboutCounterSection() {
  return (
    <section className="about-counter-section section-gap-bottom fix">
      <div className="container">
        <div className="row rg-30">
          {aboutCountersData.map((item) => (
            <AnimatedCounterBox
              key={item.id}
              target={item.target}
              suffix={item.suffix}
              label={item.label}
              bgClass={item.bgClass}
              delay={item.delay}
            />
          ))}

          {/* Google Reviews Card */}
          <div className="col-xl-3 col-sm-6 tj-fade-anim" data-delay=".5">
            <div className="tj-reviews-item tj-theme-bg-7">
              <ul className="tj-users-list">
                <li>
                  <Image
                    src="/assets/images/users/user-img-1.png"
                    alt="Reviewer"
                    width={38}
                    height={38}
                  />
                </li>
                <li>
                  <Image
                    src="/assets/images/users/user-img-2.png"
                    alt="Reviewer"
                    width={38}
                    height={38}
                  />
                </li>
                <li>
                  <Image
                    src="/assets/images/users/user-img-3.png"
                    alt="Reviewer"
                    width={38}
                    height={38}
                  />
                </li>
                <li>
                  <span>7K+</span>
                </li>
              </ul>
              <div className="reviews-label">2,540 Google reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
