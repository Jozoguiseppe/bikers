"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import { GALLERY_HOMEPAGE_FILES } from "@/content/gallery-files";
import { site } from "@/content/site";
import { SectionHeading } from "./SectionHeading";

function ChevronLeft({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      width={28}
      height={28}
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      width={28}
      height={28}
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

export function GallerySection() {
  const { gallery } = site;
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const dialogTitleId = useId();
  const thumbBtnRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const homeItems = useMemo(() => {
    const srcByOrder = GALLERY_HOMEPAGE_FILES.map(
      (f) => `/content/gallery/${encodeURIComponent(f)}`
    );
    return srcByOrder
      .map((src) => gallery.items.find((i) => i.src === src))
      .filter((x): x is NonNullable<typeof x> => x != null);
  }, [gallery.items]);

  const total = gallery.items.length;

  const close = useCallback(() => setOpenIndex(null), []);

  const goNext = useCallback(() => {
    setOpenIndex((i) =>
      i === null ? null : i + 1 >= total ? 0 : i + 1
    );
  }, [total]);

  const goPrev = useCallback(() => {
    setOpenIndex((i) =>
      i === null ? null : i - 1 < 0 ? total - 1 : i - 1
    );
  }, [total]);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex, close, goNext, goPrev]);

  useEffect(() => {
    if (openIndex === null) return;
    const el = thumbBtnRefs.current[openIndex];
    el?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [openIndex]);

  const openFullGalleryAt = useCallback(
    (itemSrc: string) => {
      const idx = gallery.items.findIndex((i) => i.src === itemSrc);
      if (idx !== -1) setOpenIndex(idx);
    },
    [gallery.items]
  );

  return (
    <section
      id="gallery"
      className="scroll-mt-14 border-t border-white/[0.08] bg-[#0A0A0C] px-4 py-24 sm:px-6 sm:py-32"
    >
      <SectionHeading
        eyebrow={gallery.eyebrow}
        title={gallery.title}
        subtitle={gallery.subtitle}
      />

      <div className="mx-auto mt-14 grid max-w-6xl gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
        {homeItems.map((item) => (
          <button
            key={item.src}
            type="button"
            onClick={() => openFullGalleryAt(item.src)}
            className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-white/[0.08] bg-[#12121A] text-left shadow-[0_0_0_1px_rgba(230,122,46,0.06)] transition-transform hover:scale-[1.02] hover:border-[#E67A2E]/45 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E67A2E] motion-reduce:transition-none motion-reduce:hover:scale-100"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover transition-[transform,filter] duration-500 group-hover:brightness-110 motion-reduce:transition-none"
              loading="lazy"
            />
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0A0A0C]/70 via-transparent to-transparent opacity-80" />
            <span className="pointer-events-none absolute bottom-3 left-3 right-3 font-medium text-[#F5F5F5] text-xs uppercase tracking-wider opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
              View gallery
            </span>
          </button>
        ))}
      </div>

      {openIndex !== null ? (
        <div
          className="fixed inset-0 z-[210] flex flex-col bg-[#0A0A0C]/95 backdrop-blur-md"
          role="dialog"
          aria-modal
          aria-labelledby={dialogTitleId}
        >
          <button
            type="button"
            className="absolute inset-0 z-0 cursor-default"
            aria-label="Close gallery"
            onClick={close}
          />

          <div
            className="relative z-10 flex min-h-0 flex-1 flex-col p-3 sm:p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex shrink-0 items-center justify-between gap-2 pb-3">
              <p id={dialogTitleId} className="font-semibold text-[#E67A2E] text-sm">
                Gallery{" "}
                <span className="text-[#F5F5F5]/60">
                  {openIndex + 1} / {total}
                </span>
              </p>
              <button
                type="button"
                onClick={close}
                className="rounded-lg border border-white/20 px-4 py-2 font-semibold text-[#F5F5F5] text-sm hover:border-[#E67A2E]/50 hover:text-[#E67A2E]"
              >
                Close
              </button>
            </div>

            <div className="relative flex min-h-0 flex-1 items-center justify-center gap-2">
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous photo"
                className="flex h-12 w-10 shrink-0 items-center justify-center rounded-lg border border-[#E67A2E]/40 text-[#E67A2E] transition-colors hover:bg-[#E67A2E]/15 sm:h-14 sm:w-12"
              >
                <ChevronLeft />
              </button>

              <div className="relative min-h-0 w-full max-w-5xl flex-1">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/10 bg-black sm:aspect-video">
                  <Image
                    src={gallery.items[openIndex]!.src}
                    alt={gallery.items[openIndex]!.alt}
                    fill
                    className="object-contain"
                    sizes="100vw"
                    priority
                  />
                </div>
              </div>

              <button
                type="button"
                onClick={goNext}
                aria-label="Next photo"
                className="flex h-12 w-10 shrink-0 items-center justify-center rounded-lg border border-[#E67A2E]/40 text-[#E67A2E] transition-colors hover:bg-[#E67A2E]/15 sm:h-14 sm:w-12"
              >
                <ChevronRight />
              </button>
            </div>

            <div className="shrink-0 pt-4">
              <p className="mb-2 font-medium text-[#F5F5F5]/45 text-xs uppercase tracking-wider">
                All photos — scroll sideways
              </p>
              <div
                className="flex gap-2 overflow-x-auto overscroll-x-contain pb-2 [-ms-overflow-style:none] [scrollbar-width:thin]"
                style={{ scrollbarColor: "#E67A2E33 #0A0A0C" }}
              >
                {gallery.items.map((item, index) => (
                  <button
                    key={item.src}
                    type="button"
                    ref={(el) => {
                      thumbBtnRefs.current[index] = el;
                    }}
                    onClick={() => setOpenIndex(index)}
                    className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-lg border-2 transition-[border-color,opacity] sm:h-20 sm:w-32 ${
                      index === openIndex
                        ? "border-[#E67A2E] opacity-100"
                        : "border-white/10 opacity-70 hover:opacity-100"
                    }`}
                    aria-label={`Show photo ${index + 1}`}
                    aria-current={index === openIndex ? "true" : undefined}
                  >
                    <Image
                      src={item.src}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="128px"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
