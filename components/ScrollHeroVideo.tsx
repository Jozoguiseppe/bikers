"use client";

import { useCallback, useEffect, useRef, useSyncExternalStore } from "react";

/** Pinned hero band height (16:9 sits inside this, shorter than full viewport) */
const HERO_BAND_DVH = 72;
/** Outer scroll runway: smaller = less scrolling before the next section */
const HERO_SCROLL_VH = 165;
/** Scroll progress (0–1) where headline / copy start to appear */
const TEXT_START = 0.76;

const HERO_FRAME_COUNT = 20;
const HERO_FRAME_SRC = (index: number) =>
  `/media/hero-frames/frame-${String(index + 1).padStart(4, "0")}.webp`;

function subscribeReducedMotion(cb: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getServerSnapshot() {
  return false;
}

function smoothstep01(t: number) {
  const x = Math.min(1, Math.max(0, t));
  return x * x * (3 - 2 * x);
}

export function ScrollHeroVideo() {
  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getServerSnapshot
  );

  const containerRef = useRef<HTMLDivElement>(null);
  const frameImgRef = useRef<HTMLImageElement>(null);
  const scrollProgressRef = useRef(0);
  const rafRef = useRef(0);
  const lastFrameIndexRef = useRef(-1);
  const preloadedRef = useRef<HTMLImageElement[]>([]);

  const scrimRef = useRef<HTMLDivElement>(null);
  const textLayerRef = useRef<HTMLDivElement>(null);

  const updateScrollProgress = useCallback(() => {
    const el = containerRef.current;
    if (!el || prefersReducedMotion) {
      scrollProgressRef.current = 0;
      return;
    }
    const scrollable = Math.max(1, el.offsetHeight - window.innerHeight);
    const rect = el.getBoundingClientRect();
    const scrolled = Math.min(scrollable, Math.max(0, -rect.top));
    scrollProgressRef.current = scrolled / scrollable;
  }, [prefersReducedMotion]);

  const applyOverlayStyles = useCallback(
    (p: number) => {
      if (prefersReducedMotion) {
        if (scrimRef.current) {
          scrimRef.current.style.opacity = "0.5";
        }
        if (textLayerRef.current) {
          textLayerRef.current.style.opacity = "1";
          textLayerRef.current.style.transform = "translate3d(0, 0, 0)";
        }
        return;
      }

      const rawT =
        p <= TEXT_START ? 0 : (p - TEXT_START) / (1 - TEXT_START);
      const t = smoothstep01(rawT);

      if (scrimRef.current) {
        scrimRef.current.style.opacity = String(t * 0.75);
      }
      if (textLayerRef.current) {
        textLayerRef.current.style.opacity = String(t);
        textLayerRef.current.style.transform = `translate3d(0, ${(1 - t) * 28}px, 0) scale(${0.9 + t * 0.1})`;
      }
    },
    [prefersReducedMotion]
  );

  const showFrame = useCallback((index: number) => {
    const img = frameImgRef.current;
    if (!img) return;
    const clamped = Math.max(0, Math.min(HERO_FRAME_COUNT - 1, index));
    if (clamped === lastFrameIndexRef.current) return;
    lastFrameIndexRef.current = clamped;

    const cached = preloadedRef.current[clamped];
    if (cached?.complete && cached.naturalWidth > 0) {
      img.src = cached.src;
      return;
    }
    img.src = HERO_FRAME_SRC(clamped);
  }, []);

  useEffect(() => {
    const images: HTMLImageElement[] = [];
    for (let i = 0; i < HERO_FRAME_COUNT; i++) {
      const image = new Image();
      image.decoding = "async";
      image.src = HERO_FRAME_SRC(i);
      images.push(image);
    }
    preloadedRef.current = images;
    return () => {
      preloadedRef.current = [];
    };
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      showFrame(HERO_FRAME_COUNT - 1);
      applyOverlayStyles(0);
      return;
    }

    showFrame(0);

    const tick = () => {
      updateScrollProgress();
      const p = scrollProgressRef.current;
      applyOverlayStyles(p);
      showFrame(Math.round(p * (HERO_FRAME_COUNT - 1)));
      rafRef.current = requestAnimationFrame(tick);
    };

    const onScroll = () => {
      updateScrollProgress();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    updateScrollProgress();
    applyOverlayStyles(scrollProgressRef.current);
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [prefersReducedMotion, updateScrollProgress, applyOverlayStyles, showFrame]);

  const heroHeight = prefersReducedMotion
    ? `${HERO_BAND_DVH}dvh`
    : `${HERO_SCROLL_VH}vh`;

  return (
    <div
      ref={containerRef}
      className="relative w-full shrink-0"
      style={{ height: heroHeight, minHeight: heroHeight }}
      suppressHydrationWarning
    >
      <div
        className="sticky top-0 flex w-full items-center justify-center overflow-hidden bg-[#0A0A0C]"
        style={{ height: `${HERO_BAND_DVH}dvh`, minHeight: `${HERO_BAND_DVH}dvh` }}
      >
        <div
          className="relative mx-auto w-full max-w-none shrink-0 px-0"
          style={{
            aspectRatio: "16 / 9",
            width: `min(100vw, calc(${HERO_BAND_DVH}dvh * 16 / 9))`,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- scroll-scrubbed WebP frame sequence */}
          <img
            ref={frameImgRef}
            className="absolute inset-0 h-full w-full object-contain [-webkit-transform:translateZ(0)]"
            src={HERO_FRAME_SRC(0)}
            alt=""
            decoding="async"
            fetchPriority="high"
            aria-hidden
          />
        </div>

        <div
          ref={scrimRef}
          className="pointer-events-none absolute inset-0 bg-[#0A0A0C]/80 opacity-0 transition-opacity duration-100"
          aria-hidden
        />

        <div
          ref={textLayerRef}
          className="pointer-events-none absolute inset-0 flex items-center justify-center px-6 text-center opacity-0"
        >
          <div>
            <p className="mb-4 font-semibold uppercase tracking-[0.35em] text-[#E67A2E] text-sm drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
              Bikers Cafe Dubrovnik
            </p>
            <h1 className="text-balance font-black uppercase tracking-tight text-[#F5F5F5] text-4xl leading-none drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] sm:text-6xl md:text-7xl">
              Best place for bikers
              <br />
              <span className="text-[#E67A2E]">in Dubrovnik</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-[#F5F5F5]/90 drop-shadow-[0_2px_16px_rgba(0,0,0,0.9)] sm:text-xl">
              Bikers Cafe Dubrovnik is the ultimate rider stop for great coffee,
              cold drinks, real road spirit, and the perfect place to park up and
              enjoy the city.
            </p>
          </div>
        </div>

        <div
          className="pointer-events-none absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 text-[#E67A2E] sm:bottom-6"
          aria-hidden
        >
          <span className="font-bold text-[0.65rem] uppercase tracking-[0.45em] drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] sm:text-xs">
            Scroll
          </span>
          <svg
            className={`h-6 w-6 shrink-0 drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)] sm:h-7 sm:w-7 ${prefersReducedMotion ? "" : "hero-scroll-hint-arrow"}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.25}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 4v11" />
            <path d="m6 12 6 6 6-6" />
          </svg>
        </div>
      </div>
    </div>
  );
}
