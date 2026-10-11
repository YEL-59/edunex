import Image from "next/image";

export default function AboutAcademyGallery() {
  return (
    <div
      className="about-3-gallery tj-fade-anim"
      data-direction="left"
      data-delay=".2"
    >
      <div className="about-3-gallery-col">
        <div className="about-3-img about-3-img-1">
          <Image
            src="/assets/images/about/h3-about-grid-1.png"
            alt="Student learning with headphones"
            width={260}
            height={260}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className="about-3-img about-3-img-2">
          <Image
            src="/assets/images/about/h3-about-grid-3.png"
            alt="Happy student"
            width={260}
            height={260}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>

      <div className="about-3-gallery-col about-3-gallery-col-wide">
        <div className="about-3-img about-3-img-3">
          <Image
            src="/assets/images/about/h3-about-grid-2.png"
            alt="Student attending an online class"
            width={364}
            height={356}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div
          className="about-3-course-card"
          style={{
            backgroundImage: "url('/assets/images/about/h3-about-grid-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <span className="about-3-course-icon">
            <Image
              src="/assets/images/icons/tj-award.png"
              alt="Award Icon"
              width={80}
              height={80}
            />
          </span>
          <h4 className="about-3-course-title">
            Business growth strate masterclass 2026.
          </h4>
        </div>
      </div>
    </div>
  );
}
