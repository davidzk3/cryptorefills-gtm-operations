import PageShell from "@/components/page-shell";

const revenueEngines = [
  {
    title: "Direct Consumer Transaction Margin",
    description:
      "Revenue generated when users buy gift cards, mobile top up, eSIMs, flights, and stays through Cryptorefills.",
    implication:
      "Growth quality matters more than raw traffic because not all categories have the same repeat profile or margin profile.",
  },
  {
    title: "Partner-Distributed Revenue Share",
    description:
      "Wallets, exchanges, and app partners can distribute the catalog and participate in transaction economics.",
    implication:
      "Partner integrations are not just visibility channels. They are acquisition + monetization channels.",
  },
  {
    title: "Infrastructure / B2B Commerce Enablement",
    description:
      "APIs, direct integrations, and infrastructure layers can extend Cryptorefills beyond direct B2C commerce.",
    implication:
      "This creates an additional moat beyond consumer traffic alone and strengthens ecosystem leverage.",
  },
];

const categoryRows = [
  {
    category: "Mobile Top Up / Data",
    frequency: "High",
    aov: "Low to Medium",
    repeat: "High",
    gtmValue: "Best utility-led acquisition wedge",
    risk: "Needs strong local-market fit and low abuse",
  },
  {
    category: "Gift Cards",
    frequency: "Medium",
    aov: "Medium",
    repeat: "Medium",
    gtmValue: "Broadest catalog and flexible market entry",
    risk: "Too generic if not localized by use case",
  },
  {
    category: "eSIM",
    frequency: "Medium",
    aov: "Medium",
    repeat: "Medium",
    gtmValue: "Strong travel and cross-border utility bridge",
    risk: "Less effective as universal first-purchase wedge",
  },
  {
    category: "Flights",
    frequency: "Low",
    aov: "High",
    repeat: "Low to Medium",
    gtmValue: "Strong ticket size and premium user signal",
    risk: "Too episodic to anchor core acquisition motion",
  },
  {
    category: "Stays",
    frequency: "Low",
    aov: "High",
    repeat: "Low to Medium",
    gtmValue: "Useful for high-value travel cohorts",
    risk: "Higher funnel friction and lower frequency",
  },
];

const growthQualityRows = [
  {
    source: "Exchange-native partner traffic",
    intent: "High",
    expectedPayback: "High",
    verdict: "Best early priority",
  },
  {
    source: "Wallet-native partner traffic",
    intent: "High",
    expectedPayback: "High",
    verdict: "Strong if surfaced natively",
  },
  {
    source: "Utility-led creators",
    intent: "Medium",
    expectedPayback: "Medium to High",
    verdict: "Fast learning channel",
  },
  {
    source: "Search intent capture",
    intent: "High",
    expectedPayback: "Medium to High",
    verdict: "Good for narrow use-case capture",
  },
  {
    source: "Broad paid social",
    intent: "Low",
    expectedPayback: "Low",
    verdict: "Avoid as lead channel",
  },
];

const operatorRules = [
  "Do not optimize for raw GMV alone.",
  "Prioritize repeat-prone utility categories before episodic categories.",
  "Treat partner channels as monetization surfaces, not only awareness surfaces.",
  "A good acquisition source creates users who are likely to repeat with low support burden.",
  "A bad acquisition source looks cheap upfront but produces weak cohorts or margin-destructive behavior.",
];

export default function BusinessModelPage() {
  return (
    <PageShell>
      <section className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-xl">
        <div className="text-sm uppercase tracking-[0.25em] text-blue-300">
          Page 4
        </div>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Business Model and Revenue Logic
        </h1>
        <p className="mt-4 max-w-4xl text-base leading-7 text-slate-300">
          This page explains how Cryptorefills likely makes money, which categories are
          most valuable for repeat behavior, and what kind of growth actually improves
          profitability instead of just adding traffic.
        </p>
      </section>

      <section className="mt-8 grid gap-6 md:grid-cols-3">
        {revenueEngines.map((engine) => (
          <div
            key={engine.title}
            className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-xl"
          >
            <h2 className="text-xl font-semibold text-white">{engine.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {engine.description}
            </p>
            <div className="mt-4 rounded-xl border border-blue-400/20 bg-blue-500/10 p-4 text-sm leading-6 text-blue-100">
              {engine.implication}
            </div>
          </div>
        ))}
      </section>

      <section className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 shadow-xl">
        <div className="border-b border-white/10 px-6 py-5">
          <h2 className="text-2xl font-semibold text-white">Category Economics Logic</h2>
          <p className="mt-2 text-sm text-slate-400">
            Which categories are frequency-led versus ticket-size-led, and how that should
            shape GTM.
          </p>
        </div>

        <table className="min-w-full text-left text-sm">
          <thead className="bg-white/5 text-slate-300">
            <tr>
              <th className="px-6 py-4 font-medium">Category</th>
              <th className="px-6 py-4 font-medium">Frequency</th>
              <th className="px-6 py-4 font-medium">AOV</th>
              <th className="px-6 py-4 font-medium">Repeat Quality</th>
              <th className="px-6 py-4 font-medium">GTM Value</th>
              <th className="px-6 py-4 font-medium">Risk</th>
            </tr>
          </thead>
          <tbody>
            {categoryRows.map((row, idx) => (
              <tr
                key={row.category}
                className={idx === 0 ? "bg-blue-500/10" : "border-t border-white/5"}
              >
                <td className="px-6 py-5 font-medium text-white">{row.category}</td>
                <td className="px-6 py-5 text-slate-300">{row.frequency}</td>
                <td className="px-6 py-5 text-slate-300">{row.aov}</td>
                <td className="px-6 py-5 text-slate-300">{row.repeat}</td>
                <td className="px-6 py-5 text-slate-200">{row.gtmValue}</td>
                <td className="px-6 py-5 text-slate-300">{row.risk}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 shadow-xl">
          <div className="border-b border-white/10 px-6 py-5">
            <h2 className="text-2xl font-semibold text-white">Growth Quality Logic</h2>
            <p className="mt-2 text-sm text-slate-400">
              Not all traffic is equal. Rank channels by likely payback quality, not just top-of-funnel volume.
            </p>
          </div>

          <table className="min-w-full text-left text-sm">
            <thead className="bg-white/5 text-slate-300">
              <tr>
                <th className="px-6 py-4 font-medium">Acquisition Source</th>
                <th className="px-6 py-4 font-medium">Intent</th>
                <th className="px-6 py-4 font-medium">Expected Payback</th>
                <th className="px-6 py-4 font-medium">Verdict</th>
              </tr>
            </thead>
            <tbody>
              {growthQualityRows.map((row, idx) => (
                <tr
                  key={row.source}
                  className={idx === 0 ? "bg-blue-500/10" : "border-t border-white/5"}
                >
                  <td className="px-6 py-5 font-medium text-white">{row.source}</td>
                  <td className="px-6 py-5 text-slate-300">{row.intent}</td>
                  <td className="px-6 py-5 text-slate-300">{row.expectedPayback}</td>
                  <td className="px-6 py-5 text-slate-200">{row.verdict}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-xl">
          <h2 className="text-2xl font-semibold text-white">Operator Rules</h2>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
            {operatorRules.map((rule) => (
              <li key={rule}>• {rule}</li>
            ))}
          </ul>
        </div>
      </section>
    </PageShell>
  );
}