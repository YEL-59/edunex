import Image from "next/image";

interface AboutClientLogoItemProps {
  image: string;
  name: string;
}

export default function AboutClientLogoItem({
  image,
  name,
}: AboutClientLogoItemProps) {
  return (
    <div className="tj-marquee-item tj-client-item">
      <span>
        <Image
          src={image}
          alt={name}
          width={140}
          height={40}
          style={{ height: "auto" }}
        />
      </span>
    </div>
  );
}
