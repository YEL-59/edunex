import Link from "next/link";

interface FlipButtonProps {
  href?: string;
  className?: string;
  children: React.ReactNode;
  icon?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export default function FlipButton({
  href,
  className = "tj-btn-primary flip-text-wrap",
  children,
  icon,
  onClick,
  type = "button",
}: FlipButtonProps) {
  const content = (
    <>
      <span className="btn-text">
        <span className="btn-text-inner">
          <span>{children}</span>
          <span>{children}</span>
        </span>
      </span>
      {icon && (
        <span className="btn-icon">
          <i className={icon}></i>
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={className} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={className} onClick={onClick}>
      {content}
    </button>
  );
}
