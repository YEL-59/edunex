import Image from "next/image";

interface EventDetailsImageProps {
  imageSrc: string;
  title: string;
}

export default function EventDetailsImage({
  imageSrc,
  title,
}: EventDetailsImageProps) {
  return (
    <div className="tj-course-details-img">
      <Image
        src={imageSrc}
        alt={title}
        width={850}
        height={460}
        style={{ width: "100%", height: "auto" }}
        priority
      />
    </div>
  );
}
