import { ScrollHeroVideo } from "@/components/ScrollHeroVideo";

export default function Home() {
  return (
    <>
      <a
        href="#about"
        className="focus:not-sr-only sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-[#E67A2E] focus:px-4 focus:py-2 focus:text-[#0A0A0C] focus:outline focus:outline-2 focus:outline-offset-2"
      >
        Skip to content
      </a>

      <ScrollHeroVideo />

      <section
        id="about"
        className="scroll-mt-0 border-t border-white/[0.08] bg-[#0A0A0C] px-6 py-24 sm:py-32"
      >
        <div className="mx-auto max-w-3xl">
          <p className="font-semibold uppercase tracking-[0.3em] text-[#E67A2E] text-sm">
            About us
          </p>
          <h2 className="mt-4 font-black uppercase tracking-tight text-[#F5F5F5] text-3xl sm:text-4xl md:text-5xl">
            Built for the road
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[#F5F5F5]/72">
            You&apos;ve reached the next section—where the landing page keeps
            going with About, Gallery, Location, and Reviews per the project
            PRD. The hero video scrubbed from start to end as you scrolled; the
            pin released and this block flows naturally after it.
          </p>
        </div>
      </section>
    </>
  );
}
