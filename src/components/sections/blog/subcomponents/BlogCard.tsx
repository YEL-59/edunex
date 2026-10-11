import Image from "next/image";
import Link from "next/link";
import { BlogItem } from "@/types";

interface BlogCardProps {
  post: BlogItem;
}

export default function BlogCard({ post }: BlogCardProps) {
  const postLink = post.href || "/blog-details";

  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <article className="blog-item h-100 d-flex flex-column rounded-3 overflow-hidden border bg-white shadow-sm" style={{ borderColor: "#e6e8ec" }}>
        <div className="blog-thumb position-relative overflow-hidden" style={{ height: "240px" }}>
          <Link href={postLink} className="d-block w-100 h-100 position-relative">
            <Image
              src={post.thumbnail}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-fit-cover"
            />
          </Link>
        </div>
        <div className="blog-content p-4 d-flex flex-column justify-content-between flex-grow-1">
          <div>
            <div className="blog-meta d-flex align-items-center gap-3 mb-2">
              <div className="tj-categories">
                <Link className="blog-category" href={postLink}>
                  {post.category}
                </Link>
              </div>
              <div className="blog-meta-item date text-muted small d-inline-flex align-items-center gap-1">
                <i className="tji-calendar"></i>
                <span>{post.date}</span>
              </div>
            </div>

            <h4 className="blog-title tj-fs-h5 mb-2">
              <Link href={postLink}>{post.title}</Link>
            </h4>

            {post.description && (
              <p className="blog-desc text-muted mb-3 small">{post.description}</p>
            )}
          </div>

          <div className="blog-btn pt-2">
            <Link className="tj-text-btn flip-text-wrap" href={postLink}>
              <span className="btn-text">Read more</span>
              <span className="btn-icon">
                <i className="tji-arrow-right-2"></i>
              </span>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
