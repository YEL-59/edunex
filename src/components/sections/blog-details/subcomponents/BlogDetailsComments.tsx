"use client";

import Image from "next/image";
import { BlogComment } from "@/types";

interface BlogDetailsCommentsProps {
  comments: BlogComment[];
  onReply?: (authorName: string) => void;
}

export default function BlogDetailsComments({
  comments,
  onReply,
}: BlogDetailsCommentsProps) {
  return (
    <div className="tj_wpost_comment_area my-5">
      <div className="tj-comments-wrap">
        <h3 className="tj_wpost_comment_title tj-fs-h5 mb-4">
          Top comments ({comments.length.toString().padStart(2, "0")})
        </h3>
        <div className="tj_wpost_latest_comment">
          <ul className="list-unstyled d-flex flex-column gap-4 p-0 m-0">
            {comments.map((comment) => (
              <li key={comment.id} className="tj_wpost_comment">
                <div className="tj_wpost_comment_inner d-flex gap-3 p-3 p-md-4 rounded-4 bg-light border">
                  <div
                    className="tj_wpost_comment_thumb position-relative rounded-circle overflow-hidden flex-shrink-0"
                    style={{ width: "50px", height: "50px" }}
                  >
                    <Image
                      src={comment.author.avatar}
                      alt={comment.author.name}
                      fill
                      sizes="50px"
                      className="object-fit-cover"
                    />
                  </div>
                  <div className="tj_wpost_comment_content flex-grow-1">
                    <div className="tj_wpost_comment_author d-flex justify-content-between align-items-center mb-2">
                      <h6 className="name m-0 fw-bold">{comment.author.name}</h6>
                      <span className="date text-muted small">{comment.author.date}</span>
                    </div>
                    <div className="tj_wpost_comment_text mb-2 text-muted">
                      <p className="m-0 small">{comment.content}</p>
                    </div>
                    <div className="tj_wpost_comment_reply">
                      <button
                        type="button"
                        className="btn btn-sm btn-link p-0 text-primary text-decoration-none fw-semibold"
                        onClick={() => onReply && onReply(comment.author.name)}
                      >
                        <i className="tji-reply me-1"></i> Reply
                      </button>
                    </div>
                  </div>
                </div>

                {/* Nested child replies */}
                {comment.replies && comment.replies.length > 0 && (
                  <ul className="children list-unstyled ms-4 ms-md-5 mt-3 d-flex flex-column gap-3 p-0">
                    {comment.replies.map((reply) => (
                      <li key={reply.id} className="tj_wpost_comment">
                        <div className="tj_wpost_comment_inner d-flex gap-3 p-3 p-md-4 rounded-4 bg-white border">
                          <div
                            className="tj_wpost_comment_thumb position-relative rounded-circle overflow-hidden flex-shrink-0"
                            style={{ width: "44px", height: "44px" }}
                          >
                            <Image
                              src={reply.author.avatar}
                              alt={reply.author.name}
                              fill
                              sizes="44px"
                              className="object-fit-cover"
                            />
                          </div>
                          <div className="tj_wpost_comment_content flex-grow-1">
                            <div className="tj_wpost_comment_author d-flex justify-content-between align-items-center mb-2">
                              <h6 className="name m-0 fw-bold">{reply.author.name}</h6>
                              <span className="date text-muted small">{reply.author.date}</span>
                            </div>
                            <div className="tj_wpost_comment_text mb-2 text-muted">
                              <p className="m-0 small">{reply.content}</p>
                            </div>
                            <div className="tj_wpost_comment_reply">
                              <button
                                type="button"
                                className="btn btn-sm btn-link p-0 text-primary text-decoration-none fw-semibold"
                                onClick={() => onReply && onReply(reply.author.name)}
                              >
                                <i className="tji-reply me-1"></i> Reply
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
