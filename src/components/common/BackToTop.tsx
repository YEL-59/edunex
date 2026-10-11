"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={`back-to-top-wrapper ${show ? "back-to-top-btn-show" : ""}`}>
      <button
        id="back-to-top"
        type="button"
        className="back-to-top-btn"
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <span className="back-to-top-icon">
          <i className="tji-arrow-up-2"></i>
        </span>
      </button>
    </div>
  );
}
