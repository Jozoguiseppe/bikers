"use client";

import Image from "next/image";
import Link from "next/link";

const LOGO_SRC = "/brand/logo.jpg";

type BrandLogoLinkProps = {
  /** Nav bar: 40px; footer: larger mark */
  size?: "nav" | "footer";
  className?: string;
};

const px = { nav: 40, footer: 112 } as const;

/**
 * Circular mark + radial mask hides light JPEG matte outside the round emblem.
 */
export function BrandLogoLink({
  size = "nav",
  className = "",
}: BrandLogoLinkProps) {
  const dim = px[size];
  return (
    <Link
      href="/"
      className={`relative block shrink-0 outline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#E67A2E] ${className}`}
      style={{ width: dim, height: dim }}
      aria-label="Bikers Cafe Dubrovnik — Home"
    >
      <span className="absolute inset-0 overflow-hidden rounded-full bg-[#0A0A0C] ring-1 ring-white/10">
        <Image
          src={LOGO_SRC}
          alt=""
          width={1024}
          height={901}
          className="h-full w-full object-cover object-[50%_47%] scale-[1.28]"
          style={{
            maskImage:
              "radial-gradient(circle at 50% 47%, black 52%, transparent 56%)",
            WebkitMaskImage:
              "radial-gradient(circle at 50% 47%, black 52%, transparent 56%)",
          }}
          sizes={size === "nav" ? "40px" : "112px"}
          priority={size === "nav"}
        />
      </span>
    </Link>
  );
}
