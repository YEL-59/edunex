"use client";

import { useState } from "react";

interface BlogDetailsCommentFormProps {
  replyTo?: string | null;
  onCancelReply?: () => void;
  onSubmitComment?: (comment: {
    name: string;
    email: string;
    website?: string;
    message: string;
  }) => void;
}

export default function BlogDetailsCommentForm({
  replyTo,
  onCancelReply,
  onSubmitComment,
}: BlogDetailsCommentFormProps) {
  const [formData, setFormData] = useState({
    message: "",
    name: "",
    email: "",
    website: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }
    if (onSubmitComment) {
      onSubmitComment(formData);
    }
    setSubmitted(true);
    setFormData({ message: "", name: "", email: "", website: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="comment-respond mt-5 p-4 rounded-4 bg-light border">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="comment-reply-title tj-fs-h5 m-0">
          {replyTo ? `Reply to ${replyTo}` : "Leave a comment"}
        </h3>
        {replyTo && onCancelReply && (
          <button
            type="button"
            className="btn btn-sm btn-outline-secondary"
            onClick={onCancelReply}
          >
            Cancel reply
          </button>
        )}
      </div>

      {submitted && (
        <div className="alert alert-success alert-dismissible fade show" role="alert">
          <i className="tji-check me-2"></i>
          Thank you! Your comment has been posted and will appear shortly.
        </div>
      )}

      <form className="tj_wpost_comment_form" onSubmit={handleSubmit}>
        <div className="row g-3">
          <div className="col-12">
            <div className="form-input">
              <textarea
                id="comment"
                name="message"
                placeholder="Write Your Comment *"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="form-control"
              ></textarea>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="form-input">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Full Name *"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="form-control"
              />
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="form-input">
              <input
                type="email"
                id="emailOne"
                name="email"
                placeholder="Your Email *"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="form-control"
              />
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="form-input">
              <input
                type="text"
                id="website"
                name="website"
                placeholder="Website (Optional)"
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                className="form-control"
              />
            </div>
          </div>
          <div className="col-12 mt-3">
            <div className="comments-btn">
              <button className="tj-btn-primary flip-text-wrap border-0" type="submit">
                <span className="btn-text">
                  <span>Submit comment</span>
                </span>
                <span className="btn-icon">
                  <i className="tji-arrow-right-2"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
