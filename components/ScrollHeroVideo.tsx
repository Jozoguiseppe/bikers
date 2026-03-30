"use client";

import { useCallback, useEffect, useRef, useSyncExternalStore } from "react";

const HERO_SCROLL_VH = 280;
const LERP = 0.14;

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

export function ScrollHeroVideo() {
  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getServerSnapshot
  );

  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const durationRef = useRef(0);
  const scrollProgressRef = useRef(0);
  const rafRef = useRef(0);

  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);

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
      const headlineOpacity = Math.max(0.2, 1 - p * 0.55);
      const subOpacity = Math.max(0.15, 1 - p * 0.65);
      const hintOpacity = Math.max(0, 1 - p * 4);

      if (eyebrowRef.current) {
        eyebrowRef.current.style.opacity = String(headlineOpacity);
      }
      if (headlineRef.current) {
        headlineRef.current.style.opacity = String(headlineOpacity);
        headlineRef.current.style.transform = `translate3d(0, ${p * -28}px, 0) scale(${1 - p * 0.04})`;
      }
      if (subRef.current) {
        subRef.current.style.opacity = String(subOpacity);
        subRef.current.style.transform = `translate3d(0, ${p * -18}px, 0)`;
      }
      if (hintRef.current) {
        hintRef.current.style.opacity = String(hintOpacity);
      }
    },
    []
  );

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onMeta = () => {
      durationRef.current = video.duration || 0;
    };
    video.addEventListener("loadedmetadata", onMeta);
    return () => video.removeEventListener("loadedmetadata", onMeta);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (prefersReducedMotion) {
      video.loop = true;
      video.muted = true;
      video.play().catch(() => {});
      applyOverlayStyles(0);
      return;
    }

    video.pause();
    video.currentTime = 0;

    const tick = () => {
      updateScrollProgress();
      const p = scrollProgressRef.current;
      applyOverlayStyles(p);

      const dur = durationRef.current;
      if (dur > 0 && video.readyState >= 1) {
        const target = p * dur;
        const cur = video.currentTime;
        const next = cur + (target - cur) * LERP;
        if (Math.abs(target - cur) > 0.02) {
          video.currentTime = Math.min(dur, Math.max(0, next));
        } else {
          video.currentTime = target;
        }
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    const onScroll = () => updateScrollProgress();
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
  }, [prefersReducedMotion, updateScrollProgress, applyOverlayStyles]);

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      style={{
        height: prefersReducedMotion ? "100vh" : `${HERO_SCROLL_VH}vh`,
      }}
    >
      <div className="sticky top-0 flex h-screen w-full items-stretch justify-center overflow-hidden bg-[#0A0A0C]">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          src="/media/hero.mp4"
          muted
          playsInline
          preload="auto"
          aria-hidden
        />

        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0A0A0C]/55 via-[#0A0A0C]/35 to-[#0A0A0C]/90"
          aria-hidden
        />

        <div className="relative z-10 flex w-full max-w-5xl flex-col items-center justify-center px-6 text-center">
          <p
            ref={eyebrowRef}
            className="mb-4 font-semibold uppercase tracking-[0.35em] text-[#E67A2E] text-sm"
          >
            Bikers Cafe Dubrovnik
          </p>
          <h1
            ref={headlineRef}
            className="text-balance font-black uppercase tracking-tight text-[#F5F5F5] text-4xl leading-none will-change-transform sm:text-6xl md:text-7xl"
          >
            Best place for bikers
            <br />
            <span className="text-[#E67A2E]">in Dubrovnik</span>
          </h1>
          <p
            ref={subRef}
            className="mt-6 max-w-xl text-pretty text-lg text-[#F5F5F5]/75 will-change-transform sm:text-xl"
          >
            Cinematic rides meet the Adriatic. Scroll to unfold the story—then
            step inside.
          </p>
          <div
            ref={hintRef}
            className="pointer-events-none mt-14 flex flex-col items-center gap-2 text-[#F5F5F5]/45 text-xs uppercase tracking-widest"
            aria-hidden
          >
            <span className="inline-block h-8 w-px bg-gradient-to-b from-[#E67A2E] to-transparent" />
            Scroll
          </div>
        </div>
      </div>
    </div>
  );
}
