"use client";

import { BrandLogoLink } from "@/components/BrandLogoLink";
import { useCallback, useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";

const links = [
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Gallery" },
  { href: "#location", label: "Location" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
] as const;

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg
      width={26}
      height={26}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      aria-hidden
      className="text-[#E67A2E] transition-transform duration-200"
    >
      {open ? (
        <>
          <path d="M6 6l12 12M18 6L6 18" />
        </>
      ) : (
        <>
          <path d="M4 7h16M4 12h16M4 17h16" />
        </>
      )}
    </svg>
  );
}

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const titleId = useId();
  const close = useCallback(() => setOpen(false), []);
  const toggle = useCallback(() => setOpen((v) => !v), []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  return (
    <>
      <nav
        className="sticky top-0 z-40 border-b border-white/[0.08] bg-[#0A0A0C]/85 backdrop-blur-md supports-backdrop-filter:backdrop-blur-md"
        aria-label="Page sections"
      >
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
          <BrandLogoLink size="nav" />

          <ul className="hidden items-center gap-6 text-sm md:flex">
            {links.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-[#F5F5F5]/65 transition-colors hover:text-[#E67A2E] focus-visible:rounded focus-visible:text-[#E67A2E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E67A2E]"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-[#E67A2E]/35 bg-[#E67A2E]/10 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav-panel"
            aria-haspopup="true"
            onClick={toggle}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <HamburgerIcon open={open} />
          </button>
        </div>
      </nav>

      {mounted && open
        ? createPortal(
            <div
              id="mobile-nav-panel"
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              className="fixed inset-0 z-[200] md:hidden"
            >
              <button
                type="button"
                className="absolute inset-0 bg-[#0A0A0C]/55 backdrop-blur-md"
                aria-label="Close menu"
                onClick={close}
              />

              <div
                className="pointer-events-none absolute inset-0 flex h-dvh min-h-0 flex-col border-[#E67A2E]/20 border-t border-b bg-[rgba(10,10,12,0.72)] shadow-[0_25px_80px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.07)] backdrop-blur-2xl backdrop-saturate-[1.8]"
                style={{
                  WebkitBackdropFilter: "blur(24px) saturate(180%)",
                }}
              >
                <div className="pointer-events-auto flex shrink-0 items-center justify-between border-[#E67A2E]/15 border-b px-4 py-4">
                  <p
                    id={titleId}
                    className="font-bold uppercase tracking-[0.25em] text-[#E67A2E] text-xs"
                  >
                    Menu
                  </p>
                  <button
                    type="button"
                    onClick={close}
                    className="min-h-11 rounded-lg border border-[#E67A2E]/40 px-4 py-2 text-[#E67A2E] text-sm font-semibold uppercase tracking-wide transition-colors hover:bg-[#E67A2E]/15"
                  >
                    Close
                  </button>
                </div>

                <ul className="pointer-events-auto flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto overscroll-contain p-4 pb-[max(2.5rem,env(safe-area-inset-bottom,0px))]">
                  {links.map(({ href, label }) => (
                    <li key={href}>
                      <a
                        href={href}
                        onClick={close}
                        className="block rounded-xl border border-[#E67A2E]/20 bg-[rgba(230,122,46,0.06)] px-4 py-4 font-bold text-[#E67A2E] text-lg uppercase tracking-[0.12em] transition-[background,border-color,box-shadow] hover:border-[#E67A2E]/45 hover:bg-[#E67A2E]/12 hover:text-[#ff9a4a] hover:shadow-[0_0_24px_rgba(230,122,46,0.15)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E67A2E]"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  );
}
