"use client";

import { useState } from "react";
import Image from "next/image";
import BlogDetailsMeta from "./subcomponents/BlogDetailsMeta";
import BlogDetailsBlockquote from "./subcomponents/BlogDetailsBlockquote";
import BlogDetailsVideo from "./subcomponents/BlogDetailsVideo";
import BlogDetailsTable from "./subcomponents/BlogDetailsTable";
import BlogDetailsTagsShare from "./subcomponents/BlogDetailsTagsShare";
import BlogDetailsNavigation from "./subcomponents/BlogDetailsNavigation";
import BlogDetailsComments from "./subcomponents/BlogDetailsComments";
import BlogDetailsCommentForm from "./subcomponents/BlogDetailsCommentForm";
import BlogDetailsSidebar from "./subcomponents/BlogDetailsSidebar";
import { BlogDetailsData, BlogComment } from "@/types";

interface BlogDetailsMainProps {
  post: BlogDetailsData;
}

export default function BlogDetailsMain({ post }: BlogDetailsMainProps) {
  const [comments, setComments] = useState<BlogComment[]>(post.comments);
  const [replyTo, setReplyTo] = useState<string | null>(null);

  const handleAddComment = (newCommentData: {
    name: string;
    email: string;
    website?: string;
    message: string;
  }) => {
    const newComment: BlogComment = {
      id: Date.now(),
      author: {
        name: newCommentData.name,
        avatar: "/assets/images/users/user-img-4.png",
        date: "Just now",
      },
      content: newCommentData.message,
    };

    if (replyTo) {
      setComments((prev) =>
        prev.map((c) => {
          if (c.author.name === replyTo) {
            return {
              ...c,
              replies: [...(c.replies || []), newComment],
            };
          }
          return c;
        })
      );
      setReplyTo(null);
    } else {
      setComments((prev) => [...prev, newComment]);
    }
  };

  return (
    <section className="tj-blog-section section-gap-bottom">
      <div className="container">
        <div className="row rg-60">
          {/* Main Article Content Column */}
          <div className="col-lg-8">
            <div className="tj_wpost_wrapper">
              <div className="tj_wpost_singular">
                {/* 1. Featured Image */}
                <div
                  className="tj_wpost_thumb tj-fade-anim position-relative rounded-4 overflow-hidden mb-4"
                  style={{ minHeight: "380px" }}
                >
                  <Image
                    src={post.thumbnail}
                    alt={post.title}
                    fill
                    sizes="(max-width: 991px) 100vw, 800px"
                    className="object-fit-cover"
                    priority
                  />
                </div>

                {/* 2. Article Title */}
                <h2 className="tj_wpost_title tj-fs-h3 mb-3">{post.title}</h2>

                {/* 3. Post Meta Bar */}
                <BlogDetailsMeta
                  author={post.author}
                  date={post.date}
                  commentsCount={`${comments.length.toString().padStart(2, "0")} Comments`}
                />

                {/* 4. Entry Content */}
                <div className="tj_wpost_entry_content">
                  {post.paragraphs.map((p, idx) => (
                    <p key={idx} className="tj-fade-anim mb-3 text-muted">
                      {p}
                    </p>
                  ))}

                  {/* Checklist */}
                  <ul className="tj_list tj-fade-anim list-unstyled d-flex flex-column gap-2 my-4 p-0">
                    {post.checklist.map((item, idx) => (
                      <li key={idx} className="d-flex align-items-center gap-2">
                        <i className="tji-check text-primary"></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Blockquote */}
                  <BlogDetailsBlockquote quote={post.quote} />

                  {/* Subheading 1 */}
                  <h3 className="tj-fade-anim tj-fs-h4 my-4">Key lessons of career potential</h3>
                  <p className="tj-fade-anim text-muted">
                    The digital economy has created thousands of new career opportunities that didn&apos;t exist
                    just a few years ago. Companies now value practical skills, real-world experience, and
                    problem-solving abilities as much as traditional degrees. Online education enables learners to
                    quickly adapt to these changes by offering specialized courses designed around current industry
                    demands. Instead of spending years waiting.
                  </p>

                  {/* Video Section with Play Button */}
                  <BlogDetailsVideo
                    thumbnail={post.video.thumbnail}
                    videoUrl={post.video.videoUrl}
                  />

                  {/* Subheading 2 & Table */}
                  <h3 className="tj-fade-anim tj-fs-h4 my-4">Table of content</h3>
                  <p className="tj-fade-anim text-muted">
                    Modern employers increasingly recognize online certifications from reputable learning platforms
                    because they demonstrate initiative, discipline, and self-motivation. Candidates who
                    consistently upgrade their skills often stand out because they show a commitment to personal
                    development. Many hiring managers are more interested in portfolios, practical projects, and
                    problem-solving abilities than where the education was completed.
                  </p>

                  <BlogDetailsTable headers={post.table.headers} rows={post.table.rows} />

                  {/* Subheading 3: Conclusions */}
                  <h3 className="tj-fade-anim tj-fs-h4 my-4">Conclusions</h3>
                  <p className="tj-fade-anim text-muted">
                    Online learning has transformed education from a fixed destination into an ongoing journey. It
                    empowers individuals to acquire new skills, explore different career paths, and remain
                    competitive in an ever-changing job market. As industries continue to evolve through technology
                    and innovation, professionals.
                  </p>
                  <p className="tj-fade-anim text-muted">
                    Embracing lifelong learning will ensure you are better equipped to seize new opportunities,
                    adapt to changing demands, and achieve sustainable career growth. The future of work belongs to
                    those who never stop learning.
                  </p>
                </div>
              </div>

              {/* 5. Tags & Social Share */}
              <BlogDetailsTagsShare tags={post.tags} />

              {/* 6. Navigation (Previous / Next) */}
              <BlogDetailsNavigation />

              {/* 7. Comments Tree */}
              <BlogDetailsComments
                comments={comments}
                onReply={(name) => {
                  setReplyTo(name);
                  document.getElementById("comment")?.focus();
                }}
              />

              {/* 8. Leave a Comment Form */}
              <BlogDetailsCommentForm
                replyTo={replyTo}
                onCancelReply={() => setReplyTo(null)}
                onSubmitComment={handleAddComment}
              />
            </div>
          </div>

          {/* Sidebar Column */}
          <div className="col-lg-4">
            <BlogDetailsSidebar />
          </div>
        </div>
      </div>
    </section>
  );
}
