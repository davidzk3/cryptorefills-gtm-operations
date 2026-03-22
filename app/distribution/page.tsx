import PageShell from "@/components/page-shell";

const distributionRows = [
  {
    surface: "Website",
    type: "Owned",
    role: "Conversion + direct discovery",
    audience: "Direct visitors / branded demand",
    leverage: "Full control over narrative and funnel",
    weakness: "Weaker direct brand pull versus category leaders",
    priority: "Medium",
  },
  {
    surface: "Mobile App",
    type: "Owned",
    role: "Conversion + retention",
    audience: "Returning users",
    leverage: "Better lifecycle and repeat behavior potential",
    weakness: "Needs stronger acquisition feed into app usage",
    priority: "Medium",
  },
  {
    surface: "Binance App / Mini Program",
    type: "Partner-native",
    role: "Discovery + acquisition",
    audience: "Exchange-native spenders",
    leverage: "Highest-intent funded crypto users",
    weakness: "Partner dependency and placement access",
    priority: "Very High",
  },
  {
    surface: "KuCoin Pay",
    type: "Partner-native",
    role: "Discovery + acquisition",
    audience: "Crypto traders / exchange users",
    leverage: "Good fit for spend conversion from held assets",
    weakness: "Needs active campaign motion, not passive presence",
    priority: "High",
  },
  {
    surface: "Gate App / Gate Pay",
    type: "Partner-native",
    role: "Discovery + acquisition",
    audience: "Exchange-native users",
    leverage: "Strong fit for in-app spend use cases",
    weakness: "Requires coordinated GTM asks",
    priority: "High",
  },
  {
    surface: "World App",
    type: "Partner-native",
    role: "Discovery + conversion",
    audience: "Mobile-first wallet users",
    leverage: "Good emerging-market relevance",
    weakness: "Needs market-specific use case framing",
    priority: "High",
  },
  {
    surface: "Bitget Wallet",
    type: "Partner-native",
    role: "Discovery + conversion",
    audience: "Wallet-native crypto users",
    leverage: "Good native spend entry point",
    weakness: "Lower leverage if not actively featured",
    priority: "High",
  },
  {
    surface: "Krak / Krak Pay",
    type: "Partner-native",
    role: "Discovery + conversion",
    audience: "Payment-ready exchange or app users",
    leverage: "Potentially strong spend-adjacent flow",
    weakness: "Needs tighter campaign structure",
    priority: "Medium",
  },
  {
    surface: "Search Intent",
    type: "Paid / organic",
    role: "Demand capture",
    audience: "Problem-aware users",
    leverage: "High-intent use-case traffic",
    weakness: "Can get expensive if too broad",
    priority: "High",
  },
  {
    surface: "Country / Category Landing Pages",
    type: "Owned",
    role: "Conversion + SEO support",
    audience: "Use-case specific visitors",
    leverage: "Essential for regional GTM and campaign routing",
    weakness: "Needs localized message discipline",
    priority: "Very High",
  },
  {
    surface: "Creators / Micro Influencers",
    type: "Partner-led media",
    role: "Awareness + acquisition",
    audience: "Country-specific trust communities",
    leverage: "Fast testing and localized social proof",
    weakness: "Quality variance and tracking discipline needed",
    priority: "High",
  },
  {
    surface: "Referral / Ambassador Program",
    type: "Owned + community",
    role: "Acquisition + retention",
    audience: "Existing users and advocates",
    leverage: "Can lower CAC if tied to second purchase quality",
    weakness: "Weak if unstructured or spammy",
    priority: "Medium",
  },
  {
    surface: "Telegram / WhatsApp Communities",
    type: "Community",
    role: "Awareness + local spread",
    audience: "Crypto-native and local trust circles",
    leverage: "Strong in certain emerging markets",
    weakness: "High spam risk and weak attribution if unmanaged",
    priority: "Selective",
  },
  {
    surface: "Checkout Rails",
    type: "Conversion infrastructure",
    role: "Payment success",
    audience: "Users already in funnel",
    leverage: "Improves completion and rail flexibility",
    weakness: "Not true acquisition on its own",
    priority: "Critical, but not discovery-led",
  },
];

const newSurfaceRows = [
  {
    surface: "OKX ecosystem placements",
    why: "Exchange-native users with funded balances and natural spend adjacency",
    value: "High-intent new-user source",
    effort: "Medium",
    verdict: "Priority target",
  },
  {
    surface: "Bybit Pay / app ecosystem",
    why: "Another strong exchange-native discovery surface",
    value: "Partner-led acquisition + spend enablement",
    effort: "Medium",
    verdict: "Priority target",
  },
  {
    surface: "Additional wallet discovery placements",
    why: "Wallets with native spend / discover tabs can route users directly into utility use cases",
    value: "High relevance in mobile-first markets",
    effort: "Medium",
    verdict: "Good expansion path",
  },
  {
    surface: "Telegram mini app commerce surfaces",
    why: "Strong fit in mobile and community-heavy crypto environments",
    value: "Potential country-led discovery surface",
    effort: "Medium to High",
    verdict: "Test selectively",
  },
  {
    surface: "Localized creator affiliate network",
    why: "Turns creators from awareness partners into measurable acquisition surfaces",
    value: "Fast experiments and local proof loops",
    effort: "Low to Medium",
    verdict: "Build now",
  },
];

const surfacePrinciples = [
  "Not every partner is a distribution surface. Some improve acquisition, others only improve conversion.",
  "The best surfaces are where users already hold crypto and need minimal education to spend it.",
  "Country and category landing pages are not cosmetic. They are routing infrastructure for GTM.",
  "Owned traffic matters, but partner-native discovery should carry more of the new-user burden.",
  "A surface is valuable only if it can be measured, activated, and tied to user quality.",
];

export default function DistributionPage() {
  return (
    <PageShell>
      <section className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-xl">
        <div className="text-sm uppercase tracking-[0.25em] text-blue-300">
          Page 5
        </div>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Distribution Surfaces
        </h1>
        <p className="mt-4 max-w-4xl text-base leading-7 text-slate-300">
          This page maps where Cryptorefills can actually acquire users, where it only
          improves conversion, and which missing surfaces should be added next. The goal
          is to separate real discovery leverage from rails and infrastructure that only
          help once the user is already in the funnel.
        </p>
      </section>

      <section className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 shadow-xl">
        <div className="border-b border-white/10 px-6 py-5">
          <h2 className="text-2xl font-semibold text-white">Current Distribution Surfaces</h2>
          <p className="mt-2 text-sm text-slate-400">
            The surfaces Cryptorefills currently uses or can activate across owned, partner, community, and conversion layers.
          </p>
        </div>

        <table className="min-w-full text-left text-sm">
          <thead className="bg-white/5 text-slate-300">
            <tr>
              <th className="px-6 py-4 font-medium">Surface</th>
              <th className="px-6 py-4 font-medium">Type</th>
              <th className="px-6 py-4 font-medium">Primary Role</th>
              <th className="px-6 py-4 font-medium">Audience</th>
              <th className="px-6 py-4 font-medium">Leverage</th>
              <th className="px-6 py-4 font-medium">Weakness</th>
              <th className="px-6 py-4 font-medium">Priority</th>
            </tr>
          </thead>
          <tbody>
            {distributionRows.map((row, idx) => (
              <tr
                key={row.surface}
                className={idx === 2 || idx === 9 ? "bg-blue-500/10" : "border-t border-white/5"}
              >
                <td className="px-6 py-5 font-medium text-white">{row.surface}</td>
                <td className="px-6 py-5 text-slate-300">{row.type}</td>
                <td className="px-6 py-5 text-slate-300">{row.role}</td>
                <td className="px-6 py-5 text-slate-300">{row.audience}</td>
                <td className="px-6 py-5 text-slate-200">{row.leverage}</td>
                <td className="px-6 py-5 text-slate-300">{row.weakness}</td>
                <td className="px-6 py-5 text-slate-200">{row.priority}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 shadow-xl">
          <div className="border-b border-white/10 px-6 py-5">
            <h2 className="text-2xl font-semibold text-white">Next Surfaces to Add</h2>
            <p className="mt-2 text-sm text-slate-400">
              Expansion targets that fit the current business and strengthen acquisition without diluting the wedge.
            </p>
          </div>

          <table className="min-w-full text-left text-sm">
            <thead className="bg-white/5 text-slate-300">
              <tr>
                <th className="px-6 py-4 font-medium">Target Surface</th>
                <th className="px-6 py-4 font-medium">Why It Matters</th>
                <th className="px-6 py-4 font-medium">Value</th>
                <th className="px-6 py-4 font-medium">Effort</th>
                <th className="px-6 py-4 font-medium">Verdict</th>
              </tr>
            </thead>
            <tbody>
              {newSurfaceRows.map((row, idx) => (
                <tr
                  key={row.surface}
                  className={idx === 0 || idx === 1 ? "bg-blue-500/10" : "border-t border-white/5"}
                >
                  <td className="px-6 py-5 font-medium text-white">{row.surface}</td>
                  <td className="px-6 py-5 text-slate-300">{row.why}</td>
                  <td className="px-6 py-5 text-slate-300">{row.value}</td>
                  <td className="px-6 py-5 text-slate-300">{row.effort}</td>
                  <td className="px-6 py-5 text-slate-200">{row.verdict}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-xl">
          <h2 className="text-2xl font-semibold text-white">Surface Principles</h2>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
            {surfacePrinciples.map((rule) => (
              <li key={rule}>• {rule}</li>
            ))}
          </ul>
        </div>
      </section>
    </PageShell>
  );
}