"use client";

import React from "react";
import Image from "next/image";
import { clientsData } from "@/data/clients";

export default function ClientMarquee() {
  // Duplicate logos for seamless infinite scrolling loop
  const duplicatedClients = [
    ...clientsData,
    ...clientsData,
    ...clientsData,
  ];

  return (
    <div id="scroll-target" className="tj-client-section tj-fade-anim section-gap">
      <div className="container-fluid px-0">
        <div className="row">
          <div className="col">
            <div className="tj-client-heading tj-fs-h5">
              Trusted more than <span>2000+</span> companies and millions of learners.
            </div>
            <div className="tj-client-marquee-wrapper" style={{ overflow: "hidden" }}>
              <div className="tj-marquee tj-client-marquee edunex-marquee-track">
                {duplicatedClients.map((client, idx) => (
                  <div className="tj-marquee-item tj-client-item" key={idx}>
                    <span>
                      <Image
                        src={client.image}
                        alt={client.name}
                        width={140}
                        height={40}
                        style={{ height: "auto" }}
                      />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
