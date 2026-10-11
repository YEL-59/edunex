"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface TopBarCountdownProps {
  onClose?: () => void;
}

export default function TopBarCountdown({ onClose }: TopBarCountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: "42",
    hours: "18",
    minutes: "29",
    seconds: "54",
  });
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    // Target date: Dec 30, 2026
    const targetDate = Date.parse("2026-12-30T12:00:00Z");

    const updateCountdown = () => {
      const now = Date.now();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      const pad = (num: number) => String(num).padStart(2, "0");

      setTimeLeft({
        days: pad(days),
        hours: pad(hours),
        minutes: pad(minutes),
        seconds: pad(seconds),
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="header-top d-lg-block d-none">
      <div className="bg-noise"></div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="header-top-content">
              <div className="countdown">
                <div className="countdown-container days">
                  <span className="countdown-value">{timeLeft.days}</span>
                  <span className="countdown-heading">d</span>
                </div>

                <span className="divider">:</span>

                <div className="countdown-container hours">
                  <span className="countdown-value">{timeLeft.hours}</span>
                  <span className="countdown-heading">h</span>
                </div>

                <span className="divider">:</span>

                <div className="countdown-container minutes">
                  <span className="countdown-value">{timeLeft.minutes}</span>
                  <span className="countdown-heading">m</span>
                </div>

                <span className="divider">:</span>

                <div className="countdown-container seconds">
                  <span className="countdown-value">{timeLeft.seconds}</span>
                  <span className="countdown-heading">s</span>
                </div>
              </div>
              <p className="topbar-text">
                <Image
                  src="/assets/images/icons/fire.svg"
                  alt="Fire"
                  width={16}
                  height={16}
                  style={{ display: "inline-block", verticalAlign: "middle", marginRight: "6px" }}
                />
                ENDS SATURDAY • Get 50% Off annual Pro membership
              </p>
              <Link href="/contact">Claim offer</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="topbar-close">
        <button
          className="close-btn"
          onClick={() => {
            setIsOpen(false);
            if (onClose) onClose();
          }}
          aria-label="Close Announcement"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M17 1L1 17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1 1L17 17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
