"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import FlipButton from "../common/FlipButton";

export default function Footer() {
  const [agreed, setAgreed] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) {
      alert("Please agree to our Terms & Conditions.");
      return;
    }
    alert(`Thank you for subscribing with: ${email}`);
    setEmail("");
  };

  return (
    <footer className="footer-section footer-1 section-gap-top">
      <div className="footer-inner">
        {/* Footer Top CTA Banner */}
        <div className="footer-cta">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="cta-area">
                  <div className="sec-heading sec-heading-center">
                    <span className="sec-subtitle">
                      <i className="tji-subtitle"></i> Chose categories
                    </span>
                    <h2 className="sec-title">Transform Future Using Online.</h2>
                    <div className="btn-area">
                      <FlipButton href="/courses" icon="tji-arrow-right-2">
                        Start learning free
                      </FlipButton>
                      <FlipButton
                        href="/courses"
                        className="tj-btn-primary tj-btn-primary-light flip-text-wrap"
                        icon="tji-arrow-right-2"
                      >
                        Explore courses
                      </FlipButton>
                    </div>
                  </div>

                  {/* Floating CTA User Avatars */}
                  <div className="cta-user-img cta-user-1 tj-fade-anim" data-direction="right">
                    <img src="/assets/images/users/user-img-1.png" alt="" />
                  </div>
                  <div className="cta-user-img cta-user-2 tj-fade-anim" data-direction="right">
                    <img src="/assets/images/users/user-img-2.png" alt="" />
                  </div>
                  <div className="cta-user-img cta-user-3 tj-fade-anim" data-direction="right">
                    <img src="/assets/images/users/user-img-6.png" alt="" />
                  </div>
                  <div className="cta-user-img cta-user-4 tj-fade-anim" data-direction="left">
                    <img src="/assets/images/users/user-img-3.png" alt="" />
                  </div>
                  <div className="cta-user-img cta-user-5 tj-fade-anim" data-direction="left" data-offset="80">
                    <img src="/assets/images/users/user-img-5.png" alt="" />
                  </div>
                  <div className="cta-user-img cta-user-6 tj-fade-anim" data-direction="left" data-offset="100">
                    <img src="/assets/images/users/user-img-4.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Main Content */}
        <div className="footer-main-wrapper">
          <div
            className="bg-img"
            style={{ backgroundImage: "url('/assets/images/footer/footer-bg.png')" }}
          ></div>
          <div className="footer-main-area">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="footer-widget-wrapper">
                    {/* Subscribe Widget */}
                    <div className="footer-widget footer-widget-subscribe tj-fade-anim">
                      <h3 className="title">Subscribe for Latest Learning Update.</h3>
                      <div className="subscribe-form">
                        <form onSubmit={handleSubscribe}>
                          <span className="icon">
                            <i className="tji-envelope"></i>
                          </span>
                          <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter email"
                            required
                          />
                          <button type="submit" aria-label="Subscribe">
                            <i className="tji-arrow-right-2"></i>
                          </button>
                          <label htmlFor="agree">
                            <input
                              id="agree"
                              type="checkbox"
                              checked={agreed}
                              onChange={(e) => setAgreed(e.target.checked)}
                            />
                            agree to our <Link href="/privacy-policy">Terms &amp; Condition?</Link>
                          </label>
                        </form>
                      </div>
                    </div>

                    {/* Programs Nav Widget */}
                    <div className="footer-widget footer-widget-nav-menu tj-fade-anim" data-delay=".3">
                      <div className="title">Programs</div>
                      <ul>
                        <li>
                          <Link href="/courses-details">
                            <span>Financial planning</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/courses-details">
                            <span>Web development</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/courses-details">
                            <span>Digital marketing</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/courses-details">
                            <span>Graphic design</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/courses-details">
                            <span>Business strategy</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/courses-details">
                            <span>Content writing</span>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Resources Nav Widget */}
                    <div className="footer-widget footer-widget-nav-menu tj-fade-anim" data-delay=".5">
                      <div className="title">Resourses</div>
                      <ul>
                        <li>
                          <Link href="/contact">
                            <span>Contact us</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/privacy-policy">
                            <span>Privacy policy</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/about">
                            <span>Recognitions</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/contact">
                            <span>Careers</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/courses">
                            <span>Course</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/blog">
                            <span>News</span>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Contact Widget */}
                    <div className="footer-widget footer-widget-contact tj-fade-anim" data-delay=".7">
                      <div className="title">Contact us</div>
                      <div className="footer-contact">
                        <div className="footer-info">
                          189 Congress, Suite 300 TX 78701, USA
                        </div>
                        <a href="tel:+1(009)544-7818" className="footer-info">
                          +1 (009) 544-7818
                        </a>
                        <a href="mailto:hello@edunex.com" className="footer-info">
                          hello@edunex.com
                        </a>
                      </div>
                      <div className="footer-socials">
                        <ul className="tj-socials tj-socials-dark">
                          <li>
                            <a
                              href="https://facebook.com"
                              target="_blank"
                              rel="noreferrer"
                              aria-label="Facebook"
                            >
                              <i className="tji-facebook"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://instagram.com"
                              target="_blank"
                              rel="noreferrer"
                              aria-label="Instagram"
                            >
                              <i className="tji-instagram"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://x.com"
                              target="_blank"
                              rel="noreferrer"
                              aria-label="Twitter"
                            >
                              <i className="tji-x-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://linkedin.com/"
                              target="_blank"
                              rel="noreferrer"
                              aria-label="LinkedIn"
                            >
                              <i className="tji-linkedin"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright Area */}
          <div className="tj-copyright-area">
            <div className="tj-copyright-wrap">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="tj-copyright-content-area tj-fade-anim" data-delay=".3">
                      <div className="footer-logo">
                        <Link href="/">
                          <Image
                            src="/assets/images/logos/logo-2.png"
                            alt="Logo"
                            width={130}
                            height={38}
                            style={{ height: "auto" }}
                          />
                        </Link>
                      </div>
                      <div className="tj-copyright-text-wrapper">
                        <div className="tj-copyright-text">
                          <p>
                            &copy;<span>2026</span>{" "}
                            <a
                              href="https://themeforest.net/user/theme-junction/portfolio"
                              target="_blank"
                              rel="noreferrer"
                            >
                              Edunex
                            </a>
                            . All rights reserved
                          </p>
                        </div>
                      </div>
                      <div className="download-buttons">
                        <a
                          href="https://play.google.com/store"
                          target="_blank"
                          rel="noreferrer"
                          aria-label="Play Store"
                        >
                          <Image
                            src="/assets/images/footer/play-store.svg"
                            alt="Play Store"
                            width={140}
                            height={42}
                          />
                        </a>
                        <a
                          href="https://www.apple.com/app-store"
                          target="_blank"
                          rel="noreferrer"
                          aria-label="App Store"
                        >
                          <Image
                            src="/assets/images/footer/app-store.svg"
                            alt="App Store"
                            width={140}
                            height={42}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
