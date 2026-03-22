"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Sidebar() {
  const pathname = usePathname();
  const [openGTM, setOpenGTM] = useState(true);

  const isActive = (href: string) => pathname === href;

  return (
    <aside className="border-r border-white/10 bg-slate-950/90 p-6">
      {/* HEADER */}
      <div className="mb-8">
        <div className="text-xs uppercase tracking-[0.2em] text-slate-400">
          Cryptorefills
        </div>
        <div className="mt-2 text-2xl font-semibold text-white">
          GTM Operations
        </div>
        <p className="mt-3 text-sm leading-6 text-slate-400">
          Competitive position, business logic, and GTM execution.
        </p>
      </div>

      <nav className="space-y-2">
        {/* CORE PAGES */}
        <NavItem label="Overview" href="/" active={isActive("/")} />
        <NavItem
          label="Competitive Landscape"
          href="/competitive"
          active={isActive("/competitive")}
        />
        <NavItem
          label="Positioning"
          href="/positioning"
          active={isActive("/positioning")}
        />
        <NavItem
          label="Ecosystem Map"
          href="/ecosystem"
          active={isActive("/ecosystem")}
        />
        <NavItem
          label="Business Model"
          href="/business-model"
          active={isActive("/business-model")}
        />

        {/* GTM GROUP */}
        <div className="pt-4">
          <button
            onClick={() => setOpenGTM(!openGTM)}
            className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm text-slate-400 transition hover:bg-white/5 hover:text-slate-200"
          >
            <span>GTM Strategy</span>
            <span className="text-xs">{openGTM ? "−" : "+"}</span>
          </button>

          {openGTM && (
            <div className="mt-2 ml-3 space-y-2 border-l border-white/10 pl-3">
              <NavItem
                label="Distribution Surfaces"
                href="/distribution"
                active={isActive("/distribution")}
                sub
              />
              <NavItem
                label="Funnel & Segments"
                href="/funnel-segments"
                active={isActive("/funnel-segments")}
                sub
              />
              <NavItem
                label="Acquisition Engine"
                href="/acquisition-engine"
                active={isActive("/acquisition-engine")}
                sub
              />
              <NavItem
                label="Regional Expansion"
                href="/regional-expansion"
                active={isActive("/regional-expansion")}
                sub
              />
              <NavItem
                label="Nigeria Playbook"
                href="/nigeria"
                active={isActive("/nigeria")}
                sub
              />
              <NavItem
                label="Unit Economics"
                href="/unit-economics"
                active={isActive("/unit-economics")}
                sub
              />
            </div>
          )}
        </div>
      </nav>
    </aside>
  );
}

/* REUSABLE NAV ITEM */
function NavItem({
  label,
  href,
  active,
  sub = false,
}: {
  label: string;
  href: string;
  active: boolean;
  sub?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`block rounded-xl px-4 py-3 text-sm transition ${
        active
          ? "border border-blue-400/30 bg-blue-500/15 text-white"
          : sub
          ? "text-slate-500 hover:bg-white/5 hover:text-slate-200"
          : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
      }`}
    >
      {label}
    </Link>
  );
}