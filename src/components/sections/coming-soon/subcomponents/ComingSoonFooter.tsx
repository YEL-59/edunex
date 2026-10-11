import Link from "next/link";

export default function ComingSoonFooter() {
  return (
    <div className="coming-soon-copyright d-flex justify-content-center mt-5">
      <div className="tj-copyright-text">
        <p style={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "0.9rem" }}>
          &copy;<span>2026</span>{" "}
          <Link
            href="/"
            style={{ color: "#fff", textDecoration: "underline" }}
          >
            Edunex
          </Link>
          . All rights reserved
        </p>
      </div>
    </div>
  );
}
