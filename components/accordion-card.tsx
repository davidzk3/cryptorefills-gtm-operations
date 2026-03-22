"use client";

import { useState } from "react";

type AccordionCardProps = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
};

export default function AccordionCard({
  title,
  subtitle,
  children,
  defaultOpen = false,
}: AccordionCardProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="self-start rounded-2xl border border-white/10 bg-slate-900/70 shadow-xl">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <div>
          <div className="text-lg font-semibold text-white">{title}</div>
          {subtitle ? (
            <div className="mt-1 text-sm text-slate-400">{subtitle}</div>
          ) : null}
        </div>
        <div className="text-2xl leading-none text-slate-300">
          {open ? "−" : "+"}
        </div>
      </button>

      {open ? (
        <div className="border-t border-white/10 px-6 py-5">{children}</div>
      ) : null}
    </div>
  );
}