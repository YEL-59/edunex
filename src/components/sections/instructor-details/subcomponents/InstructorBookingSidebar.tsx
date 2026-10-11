import Link from "next/link";
import { InstructorDetailsData } from "@/types";

interface InstructorBookingSidebarProps {
  instructor: InstructorDetailsData;
}

export default function InstructorBookingSidebar({
  instructor,
}: InstructorBookingSidebarProps) {
  return (
    <div className="tj-sticky-item-2">
      <div className="tj-course-sidebar">
        <div className="tj-course-widget-price">
          <div className="price-wrap">
            <div className="course-price tj-fs-h6">{instructor.hourlyRate}</div>
          </div>
          <div className="course-end">1-on-1 mentorship & live sessions</div>
          <div className="tj-instructor-info">
            <div className="info-item">
              <div className="single-rating">
                <i className="tji-star"></i>
                <span className="label">{instructor.rating.score}</span>
              </div>
              <span className="text">Rating</span>
            </div>
            <div className="info-item">
              <span className="title">{instructor.sessionsCount}</span>
              <span className="text">Sessions</span>
            </div>
            <div className="info-item">
              <span className="title">{instructor.responseRate}</span>
              <span className="text">Response</span>
            </div>
            <div className="info-item">
              <span className="title">{instructor.replyTime}</span>
              <span className="text">Replies in</span>
            </div>
          </div>

          <Link
            className="tj-btn-primary tj-btn-primary-md tj-btn-full flip-text-wrap"
            href="/contact"
          >
            <span className="btn-text">Book session</span>
            <span className="btn-icon">
              <i className="tji-arrow-right-2"></i>
            </span>
          </Link>
          <Link
            className="tj-btn-primary tj-btn-primary-light tj-btn-primary-md tj-btn-full flip-text-wrap"
            href="/contact"
          >
            <span className="btn-text">Send message</span>
            <span className="btn-icon">
              <i className="tji-envelope"></i>
            </span>
          </Link>
          <div className="guarantee-text">
            <i className="tji-guarantee"></i>Free intro call available
          </div>
        </div>

        <div className="tj-course-share">
          <h3 className="course-widget-title">Connect social</h3>
          <ul className="tj-socials tj-socials-2">
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="tji-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="tji-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                <i className="tji-x-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="tji-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
