import Image from "next/image";
import Link from "next/link";
import { BlogItem } from "@/types";

interface BlogFeaturedHeroProps {
  posts: BlogItem[];
}

export default function BlogFeaturedHero({ posts }: BlogFeaturedHeroProps) {
  if (posts.length === 0) return null;

  return (
    <div className="col-12 inner-gap-top">
      <div className="tj-blog-wrap tj-fade-anim">
        {posts.map((post, idx) => {
          const isFirst = idx === 0;
          return (
            <article key={post.id} className="blog-item">
              <div
                className="blog-thumb position-relative overflow-hidden rounded-3"
                style={{ height: isFirst ? "340px" : "200px" }}
              >
                <Link href={post.href || "/blog-details"} className="d-block w-100 h-100 position-relative">
                  <Image
                    src={post.thumbnail}
                    alt={post.title}
                    fill
                    sizes={isFirst ? "(max-width: 991px) 100vw, 550px" : "(max-width: 991px) 100vw, 360px"}
                    className="object-fit-cover"
                    priority={isFirst}
                  />
                </Link>
              </div>
              <div className="blog-content">
                <div className="blog-meta d-flex align-items-center gap-3 mb-2">
                  <div className="tj-categories">
                    <Link className="blog-category" href={post.href || "/blog-details"}>
                      {post.category}
                    </Link>
                  </div>
                  <div className="blog-meta-item date text-muted small d-inline-flex align-items-center gap-1">
                    <i className="tji-calendar"></i>
                    <span>{post.date}</span>
                  </div>
                </div>
                {isFirst ? (
                  <h3 className="blog-title tj-fs-h4">
                    <Link href={post.href || "/blog-details"}>{post.title}</Link>
                  </h3>
                ) : (
                  <h4 className="blog-title tj-fs-h5">
                    <Link href={post.href || "/blog-details"}>{post.title}</Link>
                  </h4>
                )}
                <div className="blog-btn mt-3">
                  <Link className="tj-text-btn flip-text-wrap" href={post.href || "/blog-details"}>
                    <span className="btn-text">Read more</span>
                    <span className="btn-icon">
                      <i className="tji-arrow-right-2"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
