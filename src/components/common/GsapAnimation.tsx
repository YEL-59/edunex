"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GsapAnimation() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        // 1. Fade Animations (.tj-fade-anim)
        const fadeElements = gsap.utils.toArray<HTMLElement>(".tj-fade-anim");
        fadeElements.forEach((item) => {
          const onscrollValue = item.getAttribute("data-on-scroll") || "1";
          const fadeOffset = parseFloat(item.getAttribute("data-offset") || "50");
          const delayValue = parseFloat(item.getAttribute("data-delay") || "0.15");
          const durationValue = parseFloat(
            item.getAttribute("data-duration") || "1.15"
          );
          const fadeDirection = item.getAttribute("data-direction") || "bottom";
          const easeValue = item.getAttribute("data-ease") || "power2.out";

          const isRTL = document.documentElement.dir === "rtl";
          const rtlValue = (val: number) => (isRTL ? -val : val);

          let x = 0;
          let y = 0;
          if (fadeDirection === "left") {
            x = rtlValue(-fadeOffset);
          } else if (fadeDirection === "right") {
            x = rtlValue(fadeOffset);
          } else if (fadeDirection === "top") {
            y = -fadeOffset;
          } else if (fadeDirection === "bottom") {
            y = fadeOffset;
          }

          const animationSetting: gsap.TweenVars = {
            opacity: 0,
            ease: easeValue,
            duration: durationValue,
            delay: delayValue,
            x,
            y,
          };

          if (onscrollValue === "1") {
            animationSetting.scrollTrigger = {
              trigger: item,
              start: "top 95%",
              once: true,
            };
          }

          gsap.from(item, animationSetting);
        });

        // 2. Zoom Animations (.tj-zoom-anim)
        const zoomElements = gsap.utils.toArray<HTMLElement>(".tj-zoom-anim");
        zoomElements.forEach((item) => {
          const onscrollValue = item.getAttribute("data-on-scroll") || "1";
          const delayValue = parseFloat(item.getAttribute("data-delay") || "0.15");
          const durationValue = parseFloat(
            item.getAttribute("data-duration") || "1.15"
          );
          const zoomValue = parseFloat(
            item.getAttribute("data-zoom-value") || "0"
          );
          const easeValue = item.getAttribute("data-ease") || "power2.out";

          const animationSetting: gsap.TweenVars = {
            opacity: 0,
            ease: easeValue,
            duration: durationValue,
            delay: delayValue,
            scale: zoomValue,
          };

          if (onscrollValue === "1") {
            animationSetting.scrollTrigger = {
              trigger: item,
              start: "top 90%",
              once: true,
            };
          }

          gsap.from(item, animationSetting);
        });

        ScrollTrigger.refresh();
      });

      return () => {
        ctx.revert();
      };
    }, 120);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return null;
}
