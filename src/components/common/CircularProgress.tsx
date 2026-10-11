"use client";

import { useEffect, useState } from "react";

interface CircularProgressProps {
  percent?: number;
}

export default function CircularProgress({ percent = 80 }: CircularProgressProps) {
  const [currentPercent, setCurrentPercent] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const stepTime = 20;
    const increment = percent / (duration / stepTime);

    const timer = setInterval(() => {
      start += increment;
      if (start >= percent) {
        setCurrentPercent(percent);
        clearInterval(timer);
      } else {
        setCurrentPercent(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [percent]);

  // stroke-dasharray is 320 in main.css
  const dashOffset = 320 - (currentPercent / 100) * 320;

  return (
    <div className="circle-big" data-percent={percent}>
      <span>{currentPercent}%</span>
      <svg>
        <circle className="bg" cx="52" cy="52" r="46"></circle>
        <circle
          className="progress"
          cx="52"
          cy="52"
          r="46"
          style={{ strokeDashoffset: `${dashOffset}px` }}
        ></circle>
      </svg>
    </div>
  );
}
