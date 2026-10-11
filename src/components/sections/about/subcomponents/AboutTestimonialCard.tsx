import React from "react";
import Image from "next/image";
import RatingStars from "@/components/common/RatingStars";
import { AboutTestimonialItem } from "@/types";

interface AboutTestimonialCardProps {
  item: AboutTestimonialItem;
}

export default function AboutTestimonialCard({
  item,
}: AboutTestimonialCardProps) {
  return (
    <div className="tj-testimonial-item tj-testimonial-item-4">
      <div className="tj-testimonial-top">
        <div className="tj-quote">
          <i className="tji-quote"></i>
        </div>
        <RatingStars score={item.rating} maxScore={5} />
      </div>

      <div className="desc">
        <p>{item.quote}</p>
      </div>

      <div className="tj-testimonial-bottom">
        <div className="author-wrap">
          <div className="author-avatar">
            <Image
              src={item.author.avatar}
              alt={item.author.name}
              width={50}
              height={50}
            />
          </div>
          <div className="author-info">
            <h3 className="name tj-fs-h6">{item.author.name}</h3>
            <span className="designation">{item.author.designation}</span>
          </div>
        </div>
        {item.hiredAt && (
          <div className="hired">
            <span>
              <i className="tji-check"></i>
            </span>
            {item.hiredAt}
          </div>
        )}
      </div>
    </div>
  );
}
