import React from "react";
import Image from "next/image";
import FlipButton from "@/components/common/FlipButton";

interface AboutFaqSupportCardProps {
  iconSrc?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function AboutFaqSupportCard({
  iconSrc = "/assets/images/icons/support.png",
  title = "Need support?",
  description = "Connect with experienced mentors and coaches who help you achieve.",
  buttonText = "Find a coach",
  buttonHref = "/contact",
}: AboutFaqSupportCardProps) {
  return (
    <div className="col-12 col-xl-4 col-lg-5">
      <div className="support-box tj-fade-anim" data-duration=".6">
        <div className="support-icon">
          <Image
            src={iconSrc}
            alt="Support Icon"
            width={60}
            height={60}
          />
        </div>
        <div className="support-content">
          <h3 className="support-title tj-fs-h4">{title}</h3>
          <p className="support-desc">{description}</p>
        </div>
        <div className="support-btn">
          <FlipButton href={buttonHref} icon="tji-arrow-right-2">
            {buttonText}
          </FlipButton>
        </div>
      </div>
    </div>
  );
}
