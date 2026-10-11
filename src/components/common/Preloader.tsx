"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="preloader is-loading" style={{ transition: "opacity 0.4s ease" }}>
      <div className="loading-container">
        <div className="loading"></div>
        <div id="loading-icon">
          <Image
            src="/assets/images/logos/logo-icon.png"
            alt="Loading"
            width={40}
            height={40}
            priority
          />
        </div>
      </div>
    </div>
  );
}
