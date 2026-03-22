type PageTopHeaderProps = {
  eyebrow?: string;
  title: string;
  summary: string;
  status?: string;
};

export default function PageTopHeader({
  eyebrow,
  title,
  summary,
  status,
}: PageTopHeaderProps) {
  return (
    <section className="sticky top-0 z-20 mb-8 rounded-2xl border border-white/10 bg-slate-950/85 p-6 shadow-xl backdrop-blur-md">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-5xl">
          {eyebrow ? (
            <div className="text-sm uppercase tracking-[0.25em] text-blue-300">
              {eyebrow}
            </div>
          ) : null}
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            {title}
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-300">{summary}</p>
        </div>

        {status ? (
          <div className="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-200">
            {status}
          </div>
        ) : null}
      </div>
    </section>
  );
}