import type { Review } from "@/data/reviews";

function Stars({ rating }: { rating: number }) {
  return (
    <p
      className="flex gap-0.5"
      aria-label={`${rating} out of 5 stars`}
      role="img"
    >
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          className={
            i < rating ? "text-[#E67A2E]" : "text-[#F5F5F5]/18"
          }
          aria-hidden
        >
          ★
        </span>
      ))}
    </p>
  );
}

export function ReviewCard({ review }: { review: Review }) {
  return (
    <article
      className="flex w-[min(100vw-3rem,22rem)] shrink-0 flex-col rounded-2xl border border-white/[0.09] bg-gradient-to-b from-[#15151c] to-[#0e0e12] p-5 shadow-[0_0_0_1px_rgba(230,122,46,0.07),0_20px_50px_rgba(0,0,0,0.45)] sm:w-[22rem]"
      aria-label={`Review from ${review.name}`}
    >
      <div className="flex items-start gap-3">
        <div
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-[#E67A2E]/50 bg-[#0A0A0C] font-black text-[#E67A2E] text-lg shadow-[0_0_20px_rgba(230,122,46,0.15)]"
          aria-hidden
        >
          {review.avatarInitial}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="truncate font-bold text-[#F5F5F5] text-sm">
              {review.name}
            </h3>
            <span className="text-[#F5F5F5]/40 text-xs">·</span>
            <span className="text-[#F5F5F5]/45 text-xs">{review.date}</span>
          </div>
          <div className="mt-1.5">
            <Stars rating={review.rating} />
          </div>
        </div>
      </div>
      <blockquote className="mt-4 border-[#E67A2E]/10 border-l-2 pl-3">
        <p className="text-pretty font-medium text-[#F5F5F5]/78 text-sm leading-relaxed">
          “{review.text}”
        </p>
      </blockquote>
    </article>
  );
}
