"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navigationData } from "@/data/navigation";

interface HamburgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HamburgerMenu({ isOpen, onClose }: HamburgerMenuProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [openSubIndex, setOpenSubIndex] = useState<number | null>(null);

  const toggleMenu = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
    setOpenSubIndex(null);
  };

  const toggleSubMenu = (subIndex: number) => {
    setOpenSubIndex(openSubIndex === subIndex ? null : subIndex);
  };

  return (
    <>
      {/* Background Overlay */}
      <div
        className={`body-overlay ${isOpen ? "opened" : ""}`}
        onClick={onClose}
      ></div>

      {/* Offcanvas Drawer */}
      <div className={`hamburger-area ${isOpen ? "opened" : ""}`}>
        <div className="hamburger_bg"></div>
        <div className="hamburger_wrapper">
          <div className="hamburger_inner">
            <div className="hamburger_top d-flex align-items-center justify-content-between">
              <div className="hamburger_logo">
                <Link href="/" className="mobile_logo" onClick={onClose}>
                  <Image
                    src="/assets/images/logos/logo.png"
                    alt="Logo"
                    width={130}
                    height={38}
                    style={{ height: "auto" }}
                  />
                </Link>
              </div>
              <div className="hamburger_close">
                <button
                  className="hamburger_close_btn"
                  onClick={onClose}
                  aria-label="Close Mobile Menu"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 1L1 17"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1 1L17 17"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="hamburger-text d-none d-lg-block">
              <p>
                Developing personalize our customer journeys to increase
                satisfaction &amp; loyalty of our expansion recognized by industry
                leaders.
              </p>
            </div>

            <div className="hamburger-search-area">
              <h5 className="hamburger-title">Search now</h5>
              <div className="hamburger_search">
                <form onSubmit={(e) => e.preventDefault()}>
                  <button type="submit" aria-label="Search">
                    <i className="tji-search"></i>
                  </button>
                  <input
                    type="search"
                    autoComplete="off"
                    name="s"
                    placeholder="Search here..."
                  />
                </form>
              </div>
            </div>

            {/* Mobile Navigation List with Accordion */}
            <div className="hamburger_menu">
              <div className="mobile_menu">
                <nav className="mean-nav">
                  <ul>
                    {navigationData.map((item, idx) => (
                      <li key={idx} className={item.hasDropdown ? "has-dropdown" : ""}>
                        <div className="d-flex align-items-center justify-content-between">
                          <Link href={item.href} onClick={item.hasDropdown ? undefined : onClose}>
                            {item.title}
                          </Link>
                          {item.hasDropdown && (
                            <button
                              type="button"
                              className="mean-expand"
                              onClick={() => toggleMenu(idx)}
                              style={{
                                background: "none",
                                border: "none",
                                cursor: "pointer",
                                padding: "8px 12px",
                              }}
                              aria-label={`Expand ${item.title}`}
                            >
                              <i
                                className={`tji-arrow-down ${
                                  openIndex === idx ? "rotate-180" : ""
                                }`}
                                style={{
                                  display: "inline-block",
                                  transition: "transform 0.3s ease",
                                  transform: openIndex === idx ? "rotate(180deg)" : "rotate(0deg)",
                                }}
                              ></i>
                            </button>
                          )}
                        </div>

                        {item.subItems && openIndex === idx && (
                          <ul
                            className="sub-menu"
                            style={{ display: "block", paddingLeft: "15px" }}
                          >
                            {item.subItems.map((sub, sIdx) => (
                              <li key={sIdx}>
                                <div className="d-flex align-items-center justify-content-between">
                                  <Link
                                    href={sub.href}
                                    onClick={sub.subItems ? undefined : onClose}
                                  >
                                    {sub.title}
                                  </Link>
                                  {sub.subItems && (
                                    <button
                                      type="button"
                                      className="mean-expand"
                                      onClick={() => toggleSubMenu(sIdx)}
                                      style={{
                                        background: "none",
                                        border: "none",
                                        cursor: "pointer",
                                        padding: "6px 10px",
                                      }}
                                    >
                                      <i
                                        className="tji-arrow-down"
                                        style={{
                                          display: "inline-block",
                                          transition: "transform 0.3s ease",
                                          transform:
                                            openSubIndex === sIdx
                                              ? "rotate(180deg)"
                                              : "rotate(0deg)",
                                        }}
                                      ></i>
                                    </button>
                                  )}
                                </div>
                                {sub.subItems && openSubIndex === sIdx && (
                                  <ul
                                    className="sub-menu"
                                    style={{
                                      display: "block",
                                      paddingLeft: "15px",
                                    }}
                                  >
                                    {sub.subItems.map((nested, nIdx) => (
                                      <li key={nIdx}>
                                        <Link href={nested.href} onClick={onClose}>
                                          {nested.title}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>

            <div className="hamburger-infos">
              <h5 className="hamburger-title">Contact info</h5>
              <div className="contact-info">
                <div className="contact-item">
                  <span className="subtitle">Phone:</span>
                  <a className="contact-link" href="tel:+1(009)544-7818">
                    +1 (009) 544-7818
                  </a>
                </div>
                <div className="contact-item">
                  <span className="subtitle">Email:</span>
                  <a className="contact-link" href="mailto:support@edunex.com">
                    support@edunex.com
                  </a>
                </div>
                <div className="contact-item">
                  <span className="subtitle">Location:</span>
                  <span className="contact-link">
                    189 Congress, Suite 300 TX 78701, USA
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="hamburger-socials">
            <h5 className="hamburger-title">Follow us</h5>
            <div className="social-links">
              <ul className="tj-socials">
                <li>
                  <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                    <i className="tji-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                    <i className="tji-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="X Twitter">
                    <i className="tji-x-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    <i className="tji-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
