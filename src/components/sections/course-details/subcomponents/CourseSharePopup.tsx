"use client";

import { useState } from "react";

interface CourseSharePopupProps {
  buttonText?: string;
  shareUrl?: string;
}

export default function CourseSharePopup({
  buttonText = "Share",
  shareUrl = "edunex.com/courses/complete-ai-machine-learning",
}: CourseSharePopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="tj-share-btn share-popup position-relative d-inline-block">
      <button
        type="button"
        className="btn-share-trigger d-inline-flex align-items-center gap-2 border-0 bg-transparent text-reset"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="btn-icon">
          <i className="tji-share"></i>
        </span>
        <span className="btn-text">{buttonText}</span>
      </button>

      {isOpen && (
        <div
          className="share-wrap position-absolute rounded-3 shadow p-3"
          style={{
            zIndex: 100,
            bottom: "100%",
            left: "50%",
            transform: "translateX(-50%)",
            marginBottom: "12px",
            minWidth: "260px",
            background: "#ffffff",
            border: "1px solid #e6e8ec",
          }}
        >
          <div className="share-title fw-bold mb-2 text-dark">Share this course</div>
          <ul className="tj-socials tj-socials-2 d-flex list-unstyled gap-2 mb-3">
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="d-flex align-items-center justify-content-center rounded-circle border"
                style={{ width: "34px", height: "34px" }}
              >
                <i className="tji-facebook"></i>
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="d-flex align-items-center justify-content-center rounded-circle border"
                style={{ width: "34px", height: "34px" }}
              >
                <i className="tji-instagram"></i>
              </a>
            </li>
            <li>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="d-flex align-items-center justify-content-center rounded-circle border"
                style={{ width: "34px", height: "34px" }}
              >
                <i className="tji-x-twitter"></i>
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="d-flex align-items-center justify-content-center rounded-circle border"
                style={{ width: "34px", height: "34px" }}
              >
                <i className="tji-linkedin"></i>
              </a>
            </li>
          </ul>

          <div
            className="tj-copy d-flex align-items-center justify-content-between p-2 rounded bg-light"
            onClick={handleCopy}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") handleCopy();
            }}
            style={{ cursor: "pointer", fontSize: "12px" }}
          >
            <span className="copy-icon me-1 text-muted">
              <i className="tji-link"></i>
            </span>
            <span
              className="copy-text text-truncate flex-grow-1 text-muted"
              style={{ maxWidth: "160px" }}
            >
              {shareUrl}
            </span>
            <span className="copy-icon ms-1 text-primary">
              <i className={copied ? "tji-check" : "tji-copy"}></i>
            </span>
            {copied && (
              <span className="badge bg-success ms-1" style={{ fontSize: "10px" }}>
                Copied!
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
