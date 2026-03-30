/**
 * Shown only below the hero on small screens — between hero and sticky nav strip.
 */
export function HeroMobileCTAs() {
  return (
    <div className="md:hidden">
      <div className="border-t border-white/10 bg-[#0A0A0C] px-4 py-4">
        <div className="mx-auto flex max-w-lg flex-col gap-3">
          <a
            href="#location"
            className="flex min-h-12 w-full items-center justify-center rounded-lg bg-[#E67A2E] px-5 font-bold text-[#0A0A0C] text-sm uppercase tracking-wide shadow-[0_0_24px_rgba(230,122,46,0.25)] transition-[filter] hover:brightness-110 active:brightness-95"
          >
            Visit Us Today
          </a>
          <a
            href="#gallery"
            className="flex min-h-12 w-full items-center justify-center rounded-lg border-2 border-[#E67A2E]/55 bg-transparent px-5 font-bold text-[#E67A2E] text-sm uppercase tracking-wide transition-colors hover:border-[#E67A2E] hover:bg-[#E67A2E]/10"
          >
            View Gallery
          </a>
        </div>
      </div>
    </div>
  );
}
