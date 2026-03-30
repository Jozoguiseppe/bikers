import { site } from "@/content/site";

export function LocationSection() {
  const { location } = site;
  return (
    <section
      id="location"
      className="scroll-mt-14 border-t border-white/[0.08] bg-[#0A0A0C] px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-[#E67A2E] text-sm">
            Location
          </p>
          <h2 className="mt-4 font-black uppercase tracking-tight text-[#F5F5F5] text-3xl sm:text-4xl md:text-5xl">
            Find us
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-[#F5F5F5]/70">
            One tap to directions—save the ride for the road, not the map
            hunt.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:items-stretch">
          <div className="flex flex-col justify-center rounded-2xl border border-white/[0.08] bg-[#12121A] p-8 shadow-[0_0_0_1px_rgba(230,122,46,0.08)]">
            <h3 className="font-bold text-[#F5F5F5] text-lg">Address</h3>
            <address className="mt-3 not-italic leading-relaxed text-[#F5F5F5]/75">
              {location.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <p className="mt-6 font-semibold text-[#E67A2E] text-sm uppercase tracking-wider">
              Hours
            </p>
            <p className="mt-2 whitespace-pre-line text-[#F5F5F5]/80">
              {location.hours}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={location.mapDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 flex-1 items-center justify-center rounded-lg bg-[#E67A2E] px-6 font-bold text-[#0A0A0C] text-sm uppercase tracking-wide transition-[filter] hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5F5F5]"
              >
                Get directions
              </a>
              <a
                href={`tel:${site.phoneE164}`}
                className="inline-flex min-h-12 flex-1 items-center justify-center rounded-lg border border-white/20 bg-transparent px-6 font-bold text-[#F5F5F5] text-sm uppercase tracking-wide transition-colors hover:border-[#E67A2E]/60 hover:text-[#E67A2E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E67A2E]"
              >
                Call {site.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="relative min-h-[280px] overflow-hidden rounded-2xl border border-white/[0.08] bg-[#12121A] lg:min-h-[360px]">
            {location.mapEmbedUrl ? (
              <iframe
                title="Map — Bikers Cafe Dubrovnik"
                src={location.mapEmbedUrl}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            ) : (
              <a
                href={location.mapDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full min-h-[280px] flex-col items-center justify-center bg-gradient-to-br from-[#12121A] to-[#0A0A0C] p-8 text-center transition-[box-shadow] hover:shadow-[inset_0_0_0_1px_rgba(230,122,46,0.35)] lg:min-h-0"
              >
                <span className="font-black text-[#F5F5F5] text-xl uppercase tracking-tight group-hover:text-[#E67A2E]">
                  Open in Google Maps
                </span>
                <span className="mt-3 max-w-xs text-[#F5F5F5]/60 text-sm">
                  Tap to launch directions. Add a Google Maps embed URL in{" "}
                  <code className="rounded bg-white/5 px-1.5 py-0.5 text-xs">
                    content/site.ts
                  </code>{" "}
                  when you have one.
                </span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
