type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export function SectionHeading({ eyebrow, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="font-semibold uppercase tracking-[0.3em] text-[#E67A2E] text-sm">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-black uppercase tracking-tight text-[#F5F5F5] text-3xl sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-[#F5F5F5]/70">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
