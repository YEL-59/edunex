"use client";

import { clientsData } from "@/data/clients";
import AboutClientLogoItem from "./subcomponents/AboutClientLogoItem";

export default function AboutClientMarquee() {
  const duplicatedClients = [
    ...clientsData,
    ...clientsData,
    ...clientsData,
  ];

  return (
    <div className="tj-client-section tj-client-section-4 section-gap-x tj-fade-anim fix">
      <div className="container-fluid px-0">
        <div className="row">
          <div className="col">
            <div className="tj-client-heading tj-fs-h5">
              Trusted more than <span>2000+</span> companies and millions of online learners.
            </div>
            <div
              className="tj-client-marquee-wrapper"
              style={{ overflow: "hidden" }}
            >
              <div className="tj-marquee tj-client-marquee tj-client-marquee-4 edunex-marquee-track">
                {duplicatedClients.map((client, idx) => (
                  <AboutClientLogoItem
                    key={idx}
                    image={client.image}
                    name={client.name}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
