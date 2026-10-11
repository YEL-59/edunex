import Link from "next/link";
import Image from "next/image";

export default function FaqSupportBanner() {
  return (
    <div className="row">
      <div className="col-12">
        <div className="course-bottom-content style-3">
          <span>
            <Image
              src="/assets/images/icons/fire.svg"
              alt="Fire Icon"
              width={18}
              height={18}
              style={{ display: "inline-block", marginRight: "6px" }}
            />{" "}
            Support
          </span>
          <p>Our support team is here to help.</p>
          <div>
            <Link className="tj-text-btn-2" href="/contact">
              <span className="btn-text">
                <span>Still Have a Question?</span>
              </span>
              <span className="btn-icon">
                <i className="tji-arrow-right-2"></i>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
