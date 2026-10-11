"use client";

import React from "react";
import Link from "next/link";
import FlipButton from "../common/FlipButton";
import { categoriesData } from "@/data/categories";

export default function CategoriesSection() {
  return (
    <section className="tj-categories-section section-gap-bottom fix">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec-heading">
              <span className="sec-subtitle tj-fade-anim" data-direction="top">
                <i className="tji-subtitle"></i> Chose categories
              </span>
              <div className="sec-heading-inner">
                <div className="sec-heading-inner-left">
                  <h2 className="sec-title tj-fade-anim" data-delay=".3">
                    Browse Categories.
                  </h2>
                  <p className="desc tj-fade-anim" data-delay=".4">
                    Choose from thousands courses across multiple.
                  </p>
                </div>
                <div className="tj-fade-anim" data-delay=".5">
                  <FlipButton href="/courses" icon="tji-arrow-right-2">
                    Start learning free
                  </FlipButton>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row rg-30">
          {categoriesData.map((cat, idx) => (
            <div
              className="col-xl-3 col-lg-4 col-sm-6 tj-fade-anim"
              data-delay={(((idx % 4) + 1) * 0.2).toFixed(1)}
              key={cat.id}
            >
              <div className={`tj-categories-item ${cat.bgClass}`}>
                <div className="tj-categories-icon">
                  <i className={cat.iconClass}></i>
                </div>
                <div className="tj-categories-content">
                  <h3 className="title tj-fs-h5">
                    <Link href={cat.href}>{cat.title}</Link>
                  </h3>
                  <div className="courses">{cat.coursesCount}</div>
                  <div className="btn-area tj-border-top">
                    <Link
                      className="tj-text-btn flip-text-wrap"
                      href={cat.href}
                    >
                      <span className="btn-text">
                        <span className="btn-text-inner">
                          <span>Start learning</span>
                          <span>Start learning</span>
                        </span>
                      </span>
                      <span className="btn-icon">
                        <i className="tji-arrow-right-2"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
