import { site } from "@/content/site";

export function AboutSection() {
  const { about } = site;
  return (
    <section
      id="about"
      className="scroll-mt-14 border-t border-white/[0.08] bg-[#0A0A0C] px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-semibold uppercase tracking-[0.3em] text-[#E67A2E] text-sm">
          {about.eyebrow}
        </p>
        <h2 className="mt-4 font-black uppercase tracking-tight text-[#F5F5F5] text-3xl sm:text-4xl md:text-5xl">
          {about.title}
        </h2>
        <div className="mt-8 space-y-5 text-left text-lg leading-relaxed text-[#F5F5F5]/72 sm:text-center">
          {about.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
        <dl className="mt-14 grid gap-6 sm:grid-cols-3">
          {about.stats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-white/[0.08] bg-[#12121A] px-5 py-6 shadow-[0_0_0_1px_rgba(230,122,46,0.08)]"
            >
              <dt className="font-semibold uppercase tracking-wider text-[#E67A2E] text-xs">
                {s.label}
              </dt>
              <dd className="mt-2 text-balance font-semibold text-[#F5F5F5] text-base leading-snug sm:text-lg">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
