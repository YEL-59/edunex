import Link from "next/link";
import Image from "next/image";
import { EventGridItem } from "@/types";

interface EventGridCardProps {
  event: EventGridItem;
}

export default function EventGridCard({ event }: EventGridCardProps) {
  return (
    <div
      className="col-md-6 tj-fade-anim"
      data-delay={event.delay || ".2"}
    >
      <div className="tj-event-item-2">
        <div className="tj-event-img">
          <Link href={event.href}>
            <Image
              src={event.image}
              alt={event.title}
              width={410}
              height={260}
              style={{ width: "100%", height: "auto" }}
            />
          </Link>
          <div className="tj-book-meta">
            <span className="date">{event.day}</span>
            <span className="month">{event.month}</span>
          </div>
        </div>
        <div className="tj-event-content">
          <h3 className="title">
            <Link href={event.href}>{event.title}</Link>
          </h3>
          <div className="course-meta">
            <span>
              <i className="tji-location"></i>
              {event.location}
            </span>
            <span>
              <i className="tji-clock"></i>
              {event.time}
            </span>
          </div>
          <Link className="tj-text-btn flip-text-wrap" href={event.href}>
            <span className="btn-text">Book a seat</span>
            <span className="btn-icon">
              <i className="tji-arrow-right-2"></i>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
