import Image from "next/image";

export default function ErrorIllustration() {
  return (
    <div className="error-img mb-4" style={{ maxWidth: "680px", margin: "0 auto" }}>
      <Image
        src="/assets/images/404/error.webp"
        alt="404 Page Skipped Class"
        width={680}
        height={380}
        style={{ width: "100%", height: "auto", borderRadius: "16px" }}
        priority
      />
    </div>
  );
}
