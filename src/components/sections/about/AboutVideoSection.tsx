"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { useIsClient } from "@/hooks/useIsClient";

export default function AboutVideoSection() {
  const [isOpen, setIsOpen] = useState(false);
  const isClient = useIsClient();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setIsOpen(false);
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <>
      <section className="about-video-section section-gap-bottom fix">
        <div className="container">
          <div className="row flex-xl-row flex-column-reverse">
            <div className="col-12">
              <div className="about-video-img">
                <Image
                  src="/assets/images/about/video-img.webp"
                  alt="About Video Preview"
                  width={1290}
                  height={560}
                  style={{ width: "100%", height: "auto" }}
                  priority
                />
                <a
                  className="video-btn video-popup"
                  href="https://www.youtube.com/watch?v=MLpWrANjFbI&ab_channel=eidelchteinadvogados"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(true);
                  }}
                  role="button"
                  aria-label="Play Overview Video"
                >
                  <span>
                    <i className="tji-play"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal Popup with Portal */}
      {isClient &&
        isOpen &&
        createPortal(
          <div
            className="video-modal-backdrop"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor: "rgba(0, 0, 0, 0.88)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 999999,
              padding: "20px",
            }}
            onClick={() => setIsOpen(false)}
          >
            <div
              className="video-modal-container"
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "1000px",
                aspectRatio: "16 / 9",
                backgroundColor: "#000",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 25px 60px rgba(0, 0, 0, 0.5)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                  zIndex: 10,
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "26px",
                  lineHeight: "1",
                  border: "none",
                  cursor: "pointer",
                  transition: "background-color 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    "rgba(255, 255, 255, 0.4)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    "rgba(255, 255, 255, 0.2)")
                }
                aria-label="Close video"
              >
                &times;
              </button>

              <iframe
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                }}
                src="https://www.youtube.com/embed/MLpWrANjFbI?autoplay=1&rel=0&modestbranding=1"
                title="Edunex Overview Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
