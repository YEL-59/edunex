"use client";

import { useState } from "react";

interface EventSharePopupProps {
  shareUrl?: string;
  shareTitle?: string;
}

export default function EventSharePopup({
  shareUrl = "edunex.com/courses/complete-ai-machine-learning",
  shareTitle = "Share this event",
}: EventSharePopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className={`tj-share-btn share-popup ${isOpen ? "active" : ""}`}>
      <span
        className="btn-icon"
        style={{ cursor: "pointer" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className="tji-share"></i>
      </span>
      <span
        className="btn-text"
        style={{ cursor: "pointer" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        Share
      </span>
      <div
        className="share-wrap"
        style={{
          display: isOpen ? "block" : undefined,
          visibility: isOpen ? "visible" : undefined,
          opacity: isOpen ? 1 : undefined,
        }}
      >
        <div className="share-title">{shareTitle}</div>
        <ul className="tj-socials tj-socials-2">
          <li>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="tji-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="tji-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
              <i className="tji-x-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
              <i className="tji-linkedin"></i>
            </a>
          </li>
        </ul>
        <div
          className="tj-copy"
          onClick={handleCopy}
          role="button"
          tabIndex={0}
          style={{ cursor: "pointer" }}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") handleCopy();
          }}
        >
          <span className="copy-icon">
            <i className="tji-link"></i>
          </span>
          <span className="copy-text">
            <span>{shareUrl}</span>
          </span>
          <span className="copy-icon">
            <i className="tji-copy"></i>
          </span>
          <span
            className="copy-tooltip"
            style={{ opacity: copied ? 1 : 0, visibility: copied ? "visible" : "hidden" }}
          >
            Copied!
          </span>
        </div>
      </div>
    </div>
  );
}
