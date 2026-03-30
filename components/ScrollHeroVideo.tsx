"use client";

import { useCallback, useEffect, useRef, useSyncExternalStore } from "react";

/** Pinned hero band height (16:9 video sits inside this, shorter than full viewport) */
const HERO_BAND_DVH = 72;
/** Outer scroll runway: smaller = less scrolling before the next section */
const HERO_SCROLL_VH = 165;
const LERP = 0.18;
const SNAP_THRESHOLD = 0.45;
/** Scroll progress (0–1) where headline / copy start to appear */
const TEXT_START = 0.76;
/** Nudge past possible all-black encoder lead-in when scroll is at top */
const FIRST_FRAME_MIN_T = 0.08;

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
  const videoRef = useRef<HTMLVideoElement>(null);
  const durationRef = useRef(0);
  const scrollProgressRef = useRef(0);
  const rafRef = useRef(0);
  const videoPrimedRef = useRef(false);

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

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const syncDuration = () => {
      const d = video.duration;
      if (Number.isFinite(d) && d > 0) {
        durationRef.current = d;
      }
    };

    const primePlayback = async () => {
      if (videoPrimedRef.current || prefersReducedMotion) return;
      video.muted = true;
      try {
        await video.play();
        video.pause();
        video.currentTime = 0;
        videoPrimedRef.current = true;
      } catch {
        /* Autoplay / decode policies (esp. mobile): still allow scroll scrub */
        videoPrimedRef.current = true;
      }
    };

    const onLoadedData = () => {
      syncDuration();
      void primePlayback();
    };

    video.addEventListener("loadedmetadata", syncDuration);
    video.addEventListener("durationchange", syncDuration);
    video.addEventListener("loadeddata", onLoadedData);
    video.addEventListener("canplay", syncDuration);
    video.addEventListener("canplaythrough", onLoadedData);

    return () => {
      video.removeEventListener("loadedmetadata", syncDuration);
      video.removeEventListener("durationchange", syncDuration);
      video.removeEventListener("loadeddata", onLoadedData);
      video.removeEventListener("canplay", syncDuration);
      video.removeEventListener("canplaythrough", onLoadedData);
    };
  }, [prefersReducedMotion]);

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

    video.muted = true;
    video.pause();

    const unlockOnScroll = () => {
      if (videoPrimedRef.current) return;
      void video
        .play()
        .then(() => {
          video.pause();
          video.currentTime =
            scrollProgressRef.current * (durationRef.current || 0);
          videoPrimedRef.current = true;
        })
        .catch(() => {});
    };

    const tick = () => {
      updateScrollProgress();
      const p = scrollProgressRef.current;
      applyOverlayStyles(p);

      const dur = durationRef.current;
      if (Number.isFinite(dur) && dur > 0) {
        let target = p * dur;
        if (p < 0.002 && dur > FIRST_FRAME_MIN_T * 2) {
          target = Math.min(FIRST_FRAME_MIN_T, dur * 0.04);
        }
        const cur = video.currentTime;
        if (!Number.isNaN(cur)) {
          try {
            if (Math.abs(target - cur) > SNAP_THRESHOLD) {
              video.currentTime = target;
            } else if (Math.abs(target - cur) > 0.03) {
              video.currentTime = cur + (target - cur) * LERP;
            } else {
              video.currentTime = target;
            }
          } catch {
            /* seek before buffer ready — next frames will retry */
          }
        }
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    const onScroll = () => {
      unlockOnScroll();
      updateScrollProgress();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("wheel", unlockOnScroll, { passive: true });
    window.addEventListener("touchstart", unlockOnScroll, { passive: true });
    window.addEventListener("pointerdown", unlockOnScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    updateScrollProgress();
    applyOverlayStyles(scrollProgressRef.current);
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("wheel", unlockOnScroll);
      window.removeEventListener("touchstart", unlockOnScroll);
      window.removeEventListener("pointerdown", unlockOnScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [prefersReducedMotion, updateScrollProgress, applyOverlayStyles]);

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
        {/* True 16:9 frame, full frame visible (letterboxing only inside this band if needed) */}
        <div
          className="relative mx-auto w-full max-w-none shrink-0 px-0"
          style={{
            aspectRatio: "16 / 9",
            width: `min(100vw, calc(${HERO_BAND_DVH}dvh * 16 / 9))`,
          }}
        >
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-contain"
            src="/media/hero.mp4"
            poster="/content/gallery/20210912_185902.jpg"
            muted
            playsInline
            preload="auto"
            aria-hidden
          />
        </div>

        {/* Darkening + headline only after scroll nears end */}
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
      </div>
    </div>
  );
}
