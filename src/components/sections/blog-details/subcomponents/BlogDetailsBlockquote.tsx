import Image from "next/image";

interface BlogDetailsBlockquoteProps {
  quote: {
    text: string;
    author: string;
    role: string;
    avatar: string;
  };
}

export default function BlogDetailsBlockquote({ quote }: BlogDetailsBlockquoteProps) {
  return (
    <div className="tj-blockquote tj-fade-anim p-4 p-md-5 my-4 rounded-4 bg-light border-start border-4 border-primary">
      <p className="fs-5 fst-italic text-dark mb-4">{quote.text}</p>
      <div className="tj-blog-author d-flex align-items-center gap-3">
        <div
          className="author-avatar position-relative rounded-circle overflow-hidden flex-shrink-0"
          style={{ width: "46px", height: "46px" }}
        >
          <Image
            src={quote.avatar}
            alt={quote.author}
            fill
            sizes="46px"
            className="object-fit-cover"
          />
        </div>
        <div className="author-info">
          <div className="name fw-bold text-dark">
            By <span className="text-primary">{quote.author}</span>
          </div>
          <span className="text text-muted small">{quote.role}</span>
        </div>
      </div>
    </div>
  );
}
