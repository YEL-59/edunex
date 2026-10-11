import Link from "next/link";

interface BlogBreadcrumbProps {
  currentTitle?: string;
}

export default function BlogBreadcrumb({ currentTitle = "Blog" }: BlogBreadcrumbProps) {
  return (
    <div className="tj-page-link">
      <span>
        <i className="tji-home"></i>
      </span>
      <span>
        <Link href="/">Home</Link>
      </span>
      <span>
        <i className="tji-arrow-right-4"></i>
      </span>
      <span>
        <span>{currentTitle}</span>
      </span>
    </div>
  );
}
