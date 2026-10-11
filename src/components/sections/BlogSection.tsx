"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import FlipButton from "../common/FlipButton";
import { blogsData } from "@/data/blogs";

export default function BlogSection() {
  return (
    <section className="tj-blog-section section-gap fix">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec-heading">
              <span className="sec-subtitle tj-fade-anim" data-direction="top">
                <i className="tji-subtitle"></i>Explore Blogs
              </span>
              <div className="sec-heading-inner">
                <h2 className="sec-title tj-fade-anim" data-delay=".3">
                  Explore Latest Blog and Insights.
                </h2>
                <div className="tj-fade-anim" data-delay=".4">
                  <FlipButton href="/blog" icon="tji-arrow-right-2">
                    See more blogs
                  </FlipButton>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12">
            <div className="tj-blog-wrap tj-fade-anim">
              {blogsData.map((blog) => (
                <article className="blog-item" key={blog.id}>
                  <div className="blog-thumb">
                    <Link href={blog.href}>
                      <Image
                        src={blog.thumbnail}
                        alt={blog.title}
                        width={400}
                        height={260}
                        style={{ width: "100%", height: "auto" }}
                      />
                    </Link>
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <div className="tj-categories">
                        <Link className="blog-category" href={blog.href}>
                          {blog.category}
                        </Link>
                      </div>
                      <div className="blog-meta-item date">
                        <i className="tji-calendar"></i>
                        <span>{blog.date}</span>
                      </div>
                    </div>

                    {blog.isLarge ? (
                      <h3 className="blog-title">
                        <Link href={blog.href}>{blog.title}</Link>
                      </h3>
                    ) : (
                      <h4 className="blog-title tj-fs-h5">
                        <Link href={blog.href}>{blog.title}</Link>
                      </h4>
                    )}

                    <div className="blog-btn">
                      <Link
                        className="tj-text-btn flip-text-wrap"
                        href={blog.href}
                      >
                        <span className="btn-text">
                          <span className="btn-text-inner">
                            <span>Read more</span>
                            <span>Read more</span>
                          </span>
                        </span>
                        <span className="btn-icon">
                          <i className="tji-arrow-right-2"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
