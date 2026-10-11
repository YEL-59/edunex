import Link from "next/link";
import Image from "next/image";
import { EventDetailsData } from "@/types";
import EventDetailsBreadcrumb from "./subcomponents/EventDetailsBreadcrumb";
import EventSharePopup from "./subcomponents/EventSharePopup";

interface EventDetailsHeaderProps {
  event: EventDetailsData;
}

export default function EventDetailsHeader({
  event,
}: EventDetailsHeaderProps) {
  return (
    <section className="tj-page-header tj-page-header-2">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tj-page-header-content">
              {/* Sub-component: Breadcrumb */}
              <EventDetailsBreadcrumb currentPage="Event details" />

              <div className="tj-categories">
                <Link className="tj-cat" href="/event-details">
                  {event.category}
                </Link>
              </div>

              <h1 className="tj-page-title">{event.title}</h1>
              <p className="tj-page-desc">{event.description}</p>

              <div className="course-meta">
                <span>
                  <i className="tji-calendar"></i>
                  {event.date}
                </span>
                <span>
                  <i className="tji-location"></i>
                  {event.location}
                </span>
                <span>
                  <i className="tji-clock"></i>
                  {event.time}
                </span>
                <span>
                  <i className="tji-seat"></i>
                  {event.seatsLeft}
                </span>
              </div>

              <div className="tj-page-header-bottom">
                <div className="author-wrap">
                  <div className="author-avatar">
                    <Image
                      src={event.host.avatar}
                      alt={event.host.name}
                      width={44}
                      height={44}
                    />
                  </div>
                  <div className="author-info">
                    <span className="designation">{event.host.designation}</span>
                    <h3 className="name tj-fs-h6">
                      <Link href={event.host.href}>{event.host.name}</Link>
                    </h3>
                  </div>
                </div>

                {/* Sub-component: Share Popup */}
                <EventSharePopup shareTitle="Share this event" />
              </div>

              {/* Decorative Stars Shape */}
              <div className="shape">
                <Image
                  src="/assets/images/shapes/stars.png"
                  alt="Decorative Stars"
                  width={32}
                  height={32}
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
