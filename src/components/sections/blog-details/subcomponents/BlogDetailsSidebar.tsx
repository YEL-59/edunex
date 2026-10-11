"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { blogCategories, blogRecentPosts, blogTags } from "@/data/blogs";

interface BlogDetailsSidebarProps {
  onSearch?: (query: string) => void;
}

export default function BlogDetailsSidebar({ onSearch }: BlogDetailsSidebarProps) {
  const [searchVal, setSearchVal] = useState("");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) onSearch(searchVal);
  };

  return (
    <div className="tj_wpost_sidebar d-flex flex-column gap-4">
      {/* 1. Search Widget */}
      <div className="tj_wpost_widget tj_widget_search tj-fade-anim p-4 rounded-4 bg-light border">
        <h4 className="widget_title tj-fs-h6 mb-3 fw-bold">Search here</h4>
        <div className="search-box">
          <form onSubmit={handleSearchSubmit} className="position-relative">
            <input
              type="search"
              name="search"
              id="searchTwo"
              placeholder="Search..."
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
              className="form-control pe-5"
            />
            <button
              type="submit"
              value="search"
              className="btn position-absolute top-50 end-0 translate-middle-y border-0 text-muted"
            >
              <i className="tji-search"></i>
            </button>
          </form>
        </div>
      </div>

      {/* 2. Categories Widget */}
      <div className="tj_wpost_widget tj_widget_categories tj-fade-anim p-4 rounded-4 bg-light border">
        <h4 className="widget_title tj-fs-h6 mb-3 fw-bold">Categories</h4>
        <ul className="list-unstyled m-0 d-flex flex-column gap-2">
          {blogCategories.map((cat, idx) => (
            <li key={idx} className="border-bottom pb-2">
              <Link
                href="/blog"
                className="d-flex justify-content-between align-items-center text-dark text-decoration-none"
              >
                <span>{cat.name}</span>
                <span className="number text-muted small">
                  ({cat.count.toString().padStart(2, "0")})
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* 3. Related Posts Widget */}
      <div className="tj_wpost_widget tj_recent_posts tj-fade-anim p-4 rounded-4 bg-light border">
        <h4 className="widget_title tj-fs-h6 mb-3 fw-bold">Related post</h4>
        <ul className="list-unstyled m-0 d-flex flex-column gap-3">
          {blogRecentPosts.map((post) => (
            <li key={post.id} className="d-flex gap-3 align-items-center">
              <div
                className="post-thumb position-relative rounded-3 overflow-hidden flex-shrink-0"
                style={{ width: "70px", height: "70px" }}
              >
                <Link href={post.href}>
                  <Image
                    src={post.thumbnail}
                    alt={post.title}
                    fill
                    sizes="70px"
                    className="object-fit-cover"
                  />
                </Link>
              </div>
              <div className="post-content flex-grow-1">
                <h6 className="post-title m-0 mb-1 tj-fs-h6" style={{ fontSize: "14px" }}>
                  <Link href={post.href} className="text-dark text-decoration-none">
                    {post.title}
                  </Link>
                </h6>
                <div className="post-meta text-muted small d-inline-flex align-items-center gap-1">
                  <i className="tji-calendar"></i>
                  <span>{post.date}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* 4. Tags Widget */}
      <div className="tj_wpost_widget widget_tag_cloud tj-fade-anim p-4 rounded-4 bg-light border">
        <h4 className="widget_title tj-fs-h6 mb-3 fw-bold">Tags</h4>
        <nav>
          <div className="tagcloud d-flex flex-wrap gap-2">
            {blogTags.map((tag, idx) => (
              <Link
                key={idx}
                href="/blog"
                className="badge rounded-pill bg-white text-dark border text-decoration-none px-3 py-2 fw-medium"
              >
                {tag}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}
