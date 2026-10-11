interface EventVenueTabProps {
  venue: {
    name: string;
    address: string;
    timeNotes: string;
    parkingNotes: string;
    mapUrl: string;
    embedUrl: string;
  };
}

export default function EventVenueTab({ venue }: EventVenueTabProps) {
  return (
    <div id="venue" className="tj-venue-wrapper">
      <h3 className="title">Venue</h3>
      <div className="tj-venue-area">
        <div className="tj-venue-map">
          <iframe
            src={venue.embedUrl}
            title={venue.name}
            style={{ width: "100%", height: "260px", border: "0" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="tj-venue-content">
          <h5 className="venue-title">{venue.name}</h5>
          <div className="event-meta-wrap">
            <div className="event-meta">
              <i className="tji-location"></i> <span>{venue.address}</span>
            </div>
            <div className="event-meta">
              <i className="tji-clock"></i> <span>{venue.timeNotes}</span>
            </div>
            <div className="event-meta">
              <i className="tji-clock"></i> <span>{venue.parkingNotes}</span>
            </div>
          </div>
          <a
            className="tj-text-btn flip-text-wrap"
            target="_blank"
            rel="noopener noreferrer"
            href={venue.mapUrl}
          >
            <span className="btn-text">Get directions</span>
            <span className="btn-icon">
              <i className="tji-arrow-right-2"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
