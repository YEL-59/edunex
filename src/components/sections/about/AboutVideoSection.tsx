"use client";

import { useState } from "react";
import AboutVideoThumbnail from "./subcomponents/AboutVideoThumbnail";
import AboutVideoModal from "./subcomponents/AboutVideoModal";

export default function AboutVideoSection() {
  const [isOpen, setIsOpen] = useState(false);

  const videoUrl =
    "https://www.youtube.com/watch?v=MLpWrANjFbI&ab_channel=eidelchteinadvogados";
  const embedUrl =
    "https://www.youtube.com/embed/MLpWrANjFbI?autoplay=1&rel=0&modestbranding=1";

  return (
    <>
      <section className="about-video-section section-gap-bottom fix">
        <div className="container">
          <div className="row flex-xl-row flex-column-reverse">
            <div className="col-12">
              {/* Sub-component: Video Thumbnail */}
              <AboutVideoThumbnail
                imageSrc="/assets/images/about/video-img.webp"
                videoUrl={videoUrl}
                onOpenVideo={() => setIsOpen(true)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sub-component: Video Modal */}
      <AboutVideoModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        videoSrc={embedUrl}
      />
    </>
  );
}
