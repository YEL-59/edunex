import Image from "next/image";
import Link from "next/link";

interface BlogDetailsMetaProps {
  author: {
    name: string;
    avatar: string;
    role?: string;
  };
  date: string;
  commentsCount: string;
}

export default function BlogDetailsMeta({
  author,
  date,
  commentsCount,
}: BlogDetailsMetaProps) {
  return (
    <div className="blog-category-two tj-fade-anim d-flex flex-wrap gap-4 align-items-center mb-4 py-3 border-top border-bottom">
      {/* Author */}
      <div className="category-item d-flex align-items-center gap-3">
        <div
          className="cate-images position-relative rounded-circle overflow-hidden flex-shrink-0"
          style={{ width: "42px", height: "42px" }}
        >
          <Image
            src={author.avatar}
            alt={author.name}
            fill
            sizes="42px"
            className="object-fit-cover"
          />
        </div>
        <div className="cate-text">
          <span className="designation text-muted small d-block">Authored by</span>
          <h6 className="title m-0 tj-fs-h6">
            <Link href="/instructor">{author.name}</Link>
          </h6>
        </div>
      </div>

      {/* Date */}
      <div className="category-item d-flex align-items-center gap-3">
        <div
          className="cate-icons d-flex align-items-center justify-content-center rounded-circle bg-light text-primary"
          style={{ width: "42px", height: "42px" }}
        >
          <i className="tji-calendar-2 fs-5"></i>
        </div>
        <div className="cate-text">
          <span className="designation text-muted small d-block">Date Released</span>
          <h6 className="text m-0 fw-semibold">{date}</h6>
        </div>
      </div>

      {/* Comments */}
      <div className="category-item d-flex align-items-center gap-3">
        <div
          className="cate-icons d-flex align-items-center justify-content-center rounded-circle bg-light text-primary"
          style={{ width: "42px", height: "42px" }}
        >
          <i className="tji-comment fs-5"></i>
        </div>
        <div className="cate-text">
          <span className="designation text-muted small d-block">Comments</span>
          <h6 className="text m-0 fw-semibold">{commentsCount}</h6>
        </div>
      </div>
    </div>
  );
}
