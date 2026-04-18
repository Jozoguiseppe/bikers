"use client";

import Link from "next/link";

/** PNG s pravom transparentnošću (bijelo uklonjeno flood-fillom od rubova) */
const LOGO_SRC = "/brand/site-logo.png?cb=20260419";
const LOGO_W = 3231;
const LOGO_H = 2743;

type BrandLogoLinkProps = {
  /** Nav bar: 40px; footer: veći */
  size?: "nav" | "footer";
  className?: string;
};

const px = { nav: 40, footer: 112 } as const;

export function BrandLogoLink({
  size = "nav",
  className = "",
}: BrandLogoLinkProps) {
  const dim = px[size];
  return (
    <Link
      href="/"
      className={`relative block shrink-0 bg-transparent outline-offset-4 focus-visible:outline-2 focus-visible:outline-[#E67A2E] ${className}`}
      style={{ width: dim, height: dim }}
      aria-label="Bikers Cafe Dubrovnik — Home"
    >
      <span className="absolute inset-0 overflow-hidden rounded-full bg-transparent">
        {/* eslint-disable-next-line @next/next/no-img-element -- PNG alpha; izbjegavamo next/image wrapper */}
        <img
          src={LOGO_SRC}
          alt=""
          width={LOGO_W}
          height={LOGO_H}
          className="h-full w-full object-contain object-center"
          decoding="async"
          fetchPriority={size === "nav" ? "high" : "auto"}
        />
      </span>
    </Link>
  );
}
