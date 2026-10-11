import Link from "next/link";

interface BlogDetailsTagsShareProps {
  tags: string[];
}

export default function BlogDetailsTagsShare({ tags }: BlogDetailsTagsShareProps) {
  return (
    <div className="tj_wpost_tags_share tj-fade-anim d-flex flex-wrap justify-content-between align-items-center gap-3 my-4 py-3 border-top border-bottom">
      <div className="tagcloud d-flex flex-wrap align-items-center gap-2">
        <span className="fw-bold me-1">Tags:</span>
        {tags.map((tag, idx) => (
          <Link
            key={idx}
            href="/blog"
            className="badge rounded-pill bg-light text-dark border text-decoration-none px-3 py-2 fw-medium"
          >
            {tag}
          </Link>
        ))}
      </div>

      <div className="tj_social_share d-flex align-items-center gap-2">
        <span className="fw-bold me-1">Share:</span>
        <ul className="d-flex list-unstyled gap-2 m-0 p-0">
          <li>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="d-flex align-items-center justify-content-center rounded-circle border bg-white"
              style={{ width: "34px", height: "34px" }}
            >
              <i className="tji-facebook"></i>
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="d-flex align-items-center justify-content-center rounded-circle border bg-white"
              style={{ width: "34px", height: "34px" }}
            >
              <i className="tji-instagram"></i>
            </a>
          </li>
          <li>
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              className="d-flex align-items-center justify-content-center rounded-circle border bg-white"
              style={{ width: "34px", height: "34px" }}
            >
              <i className="tji-x-twitter"></i>
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="d-flex align-items-center justify-content-center rounded-circle border bg-white"
              style={{ width: "34px", height: "34px" }}
            >
              <i className="tji-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
