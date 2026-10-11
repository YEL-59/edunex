import Image from "next/image";
import { EventSpeakerItem } from "@/types";

interface EventSpeakersTabProps {
  speakers: EventSpeakerItem[];
}

export default function EventSpeakersTab({
  speakers,
}: EventSpeakersTabProps) {
  return (
    <div id="speakers" className="tj-speaker-wrapper">
      <h3 className="title">Speakers & facilitators</h3>
      <div className="tj-speaker-wrap">
        {speakers.map((sp) => (
          <div className="tj-speaker-item" key={sp.id}>
            <div className="author-wrap">
              <div className="author-avatar">
                <Image
                  src={sp.avatar}
                  alt={sp.name}
                  width={50}
                  height={50}
                />
              </div>
              <div className="author-info">
                <h4 className="name">{sp.name}</h4>
                <span className="role">{sp.role}</span>
                <span className="designation">{sp.designation}</span>
              </div>
            </div>
            <ul className="tj-socials">
              <li>
                <a
                  href={sp.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${sp.name} LinkedIn`}
                >
                  <i className="tji-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
