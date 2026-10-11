"use client";

import { useState } from "react";

export default function ComingSoonForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <div className="query_form text-center">
      {submitted ? (
        <div
          className="alert alert-success d-inline-flex align-items-center gap-2 p-3"
          style={{
            background: "rgba(34, 197, 94, 0.15)",
            border: "1px solid rgba(34, 197, 94, 0.4)",
            borderRadius: "12px",
            color: "#4ade80",
            maxWidth: "480px",
          }}
        >
          <i className="tji-check" style={{ fontSize: "1.2rem" }}></i>
          <span>
            <strong>You&apos;re on the VIP list!</strong> We&apos;ll notify you
            the moment we launch.
          </span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ maxWidth: "520px", margin: "0 auto" }}>
          <span className="icon">
            <i className="tji-envelope"></i>
          </span>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="tj-btn-primary tj-btn-primary-sm flip-text-wrap"
          >
            <span className="btn-text">Notify me</span>
            <span className="btn-icon">
              <i className="tji-arrow-right-2"></i>
            </span>
          </button>
        </form>
      )}

      <span className="form_note d-block mt-3" style={{ color: "rgba(255, 255, 255, 0.65)" }}>
        <i className="tji-guarantee" style={{ marginRight: "6px" }}></i> No spam —
        just one launch email.
      </span>
    </div>
  );
}
