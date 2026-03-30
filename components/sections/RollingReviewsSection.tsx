"use client";

import { ReviewCard } from "@/components/ui/ReviewCard";
import { reviews } from "@/data/reviews";

function MarqueeRow({
  items,
  direction,
  durationSec,
  ariaHidden,
}: {
  items: typeof reviews;
  direction: "left" | "right";
  durationSec: number;
  ariaHidden?: boolean;
}) {
  const doubled = [...items, ...items];
  return (
    <div
      className="rolling-reviews-row flex w-max gap-5 py-2"
      style={{
        animationDuration: `${durationSec}s`,
        animationDirection: direction === "left" ? "normal" : "reverse",
      }}
      aria-hidden={ariaHidden ? true : undefined}
    >
      {doubled.map((review, i) => (
        <ReviewCard key={`${review.id}-${i}`} review={review} />
      ))}
    </div>
  );
}

export function RollingReviewsSection() {
  const rowB = [
    ...reviews.slice(5),
    ...reviews.slice(0, 5),
  ];

  return (
    <section
      id="reviews"
      className="scroll-mt-14 overflow-hidden border-t border-white/[0.08] bg-[#0A0A0C] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
        <p className="font-semibold uppercase tracking-[0.35em] text-[#E67A2E] text-xs">
          Reviews
        </p>
        <h2 className="mt-4 font-black uppercase tracking-tight text-[#F5F5F5] text-3xl sm:text-4xl md:text-5xl">
          What riders say
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-[#F5F5F5]/65 text-lg">
          Real words from locals and travelers—rolling by like neon on chrome.
          Pause on hover to read.
        </p>
      </div>

      <div className="relative mt-14">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#0A0A0C] to-transparent sm:w-28"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#0A0A0C] to-transparent sm:w-28"
          aria-hidden
        />

        <div className="rolling-reviews-fallback hidden flex-wrap justify-center gap-5 px-4 py-6">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        <div className="rolling-reviews-marquee space-y-5">
          <div className="overflow-hidden">
            <MarqueeRow items={reviews} direction="left" durationSec={70} />
          </div>
          <div className="overflow-hidden">
            <MarqueeRow
              items={rowB}
              direction="right"
              durationSec={85}
              aria-hidden
            />
          </div>
        </div>
      </div>
    </section>
  );
}
