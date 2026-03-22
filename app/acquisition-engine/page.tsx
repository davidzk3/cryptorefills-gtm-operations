import PageShell from "@/components/page-shell";

const engineRows = [
  {
    engine: "Partner-Led Acquisition",
    purpose: "Turn exchange, wallet, and app surfaces into measurable new-user channels",
    channels: "Binance, KuCoin, Gate, World App, Bitget Wallet, Krak",
    bestFor: "Stablecoin utility spenders and exchange-native users",
    strength: "Highest-intent funded users with low education burden",
    weakness: "Requires active relationship management and campaign asks",
    priority: "Very High",
  },
  {
    engine: "Utility-Led Creator Campaigns",
    purpose: "Use local creators to demonstrate practical crypto spend use cases",
    channels: "X, TikTok, YouTube, Instagram, local creator cohorts",
    bestFor: "Nigeria and other emerging-market activation plays",
    strength: "Fast testing, local trust, strong use-case storytelling",
    weakness: "High variance in creator quality and noisy attribution if unmanaged",
    priority: "High",
  },
  {
    engine: "Search Intent Capture",
    purpose: "Capture users already searching for practical crypto spend solutions",
    channels: "Google search, localized landing pages, category pages",
    bestFor: "Problem-aware users and high-intent use cases",
    strength: "Strong fit for narrow, practical use cases",
    weakness: "Can become expensive if broadened too far",
    priority: "High",
  },
  {
    engine: "Referral / Ambassador Loops",
    purpose: "Turn satisfied users and community advocates into additional acquisition",
    channels: "Referral links, promo codes, ambassadors, student / community reps",
    bestFor: "Repeat-prone categories and community-led markets",
    strength: "Can reduce CAC if tied to second-purchase quality",
    weakness: "Weak if incentives attract low-quality or spammy traffic",
    priority: "Medium",
  },
  {
    engine: "Lifecycle Reactivation",
    purpose: "Increase second purchase and category expansion after first conversion",
    channels: "Email, app prompts, follow-up sequences, product nudges",
    bestFor: "Users already converted through utility, gift card, or travel categories",
    strength: "Improves payback quality and retention economics",
    weakness: "Not a top-of-funnel engine by itself",
    priority: "Critical support layer",
  },
  {
    engine: "Broad Paid Social",
    purpose: "Drive scale through cold paid awareness",
    channels: "Meta, TikTok ads, broad social paid",
    bestFor: "Very broad awareness or brand campaigns",
    strength: "Fast reach if budget is large",
    weakness: "Low intent, weak repeat quality, high CAC risk",
    priority: "Low",
  },
];

const campaignRows = [
  {
    motion: "Partner utility campaigns",
    hypothesis: "Users already holding crypto in-app will convert better than cold traffic",
    keyMetric: "Cost per first quality purchase",
    successSignal: "High stablecoin share and strong first-purchase rate",
    risk: "Partner placement delays",
  },
  {
    motion: "Country-specific creator waves",
    hypothesis: "Localized utility demos convert better than generic brand messaging",
    keyMetric: "Creator-to-purchase conversion",
    successSignal: "Utility-led first orders and early repeat signal",
    risk: "Creator quality variance",
  },
  {
    motion: "Use-case search capture",
    hypothesis: "Narrow problem-aware search terms produce strong initial conversion",
    keyMetric: "Landing-to-checkout rate",
    successSignal: "High-intent traffic with lower education burden",
    risk: "Keyword expansion too broad",
  },
  {
    motion: "Referral loop tied to second purchase",
    hypothesis: "Users who liked first utility spend will invite peers if incentive is disciplined",
    keyMetric: "Referral-to-second-purchase rate",
    successSignal: "Good referral quality, not just cheap traffic",
    risk: "Incentive abuse",
  },
  {
    motion: "Lifecycle category nudges",
    hypothesis: "Utility-first entrants can be expanded into other relevant categories",
    keyMetric: "Second purchase and category expansion rate",
    successSignal: "Repeat behavior without large promo cost",
    risk: "Wrong follow-up timing or wrong next category",
  },
];

const budgetRows = [
  {
    channel: "Partner-led acquisition",
    costProfile: "Low to Medium",
    efficiencyView: "Best expected payback",
    why: "Distribution already contains funded crypto users",
    verdict: "Fund first",
  },
  {
    channel: "Utility-led creators",
    costProfile: "Medium",
    efficiencyView: "Good learning-adjusted CAC",
    why: "Fast feedback and strong local storytelling",
    verdict: "Fund selectively and compare cohorts",
  },
  {
    channel: "Search intent",
    costProfile: "Medium",
    efficiencyView: "Efficient if narrow",
    why: "Captures already-formed demand",
    verdict: "Use for narrow use-case capture",
  },
  {
    channel: "Referral / ambassador",
    costProfile: "Low to Medium",
    efficiencyView: "Potentially strong if quality-gated",
    why: "Can compound if tied to repeat-prone users",
    verdict: "Build carefully",
  },
  {
    channel: "Broad paid social",
    costProfile: "High",
    efficiencyView: "Weak expected payback",
    why: "Low-intent users and high education burden",
    verdict: "Do not lead here",
  },
];

const enginePrinciples = [
  "Acquisition should follow where users already hold crypto, not where attention is cheapest.",
  "Every engine should be judged on user quality, not just first-order volume.",
  "Country-specific activation is a GTM engine, not an optional localization layer.",
  "Partner motions should be run like a campaign pipeline, not passive integrations.",
  "A strong engine reduces education burden and increases repeat probability.",
];

export default function AcquisitionEnginePage() {
  return (
    <PageShell>
      <section className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-xl">
        <div className="text-sm uppercase tracking-[0.25em] text-blue-300">
          Page 7
        </div>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Acquisition Engine
        </h1>
        <p className="mt-4 max-w-4xl text-base leading-7 text-slate-300">
          This page lays out the actual growth engines Cryptorefills should run. It turns GTM into a clear system across partner campaigns, creators, search, referrals, and lifecycle, all judged by user quality and payback.
        </p>
      </section>

      <section className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 shadow-xl">
        <div className="border-b border-white/10 px-6 py-5">
          <h2 className="text-2xl font-semibold text-white">Core Acquisition Engines</h2>
          <p className="mt-2 text-sm text-slate-400">
            The engines that should actually power new-user growth, ranked by strategic fit and likely economics.
          </p>
        </div>

        <table className="min-w-full text-left text-sm">
          <thead className="bg-white/5 text-slate-300">
            <tr>
              <th className="px-6 py-4 font-medium">Engine</th>
              <th className="px-6 py-4 font-medium">Purpose</th>
              <th className="px-6 py-4 font-medium">Channels</th>
              <th className="px-6 py-4 font-medium">Best For</th>
              <th className="px-6 py-4 font-medium">Strength</th>
              <th className="px-6 py-4 font-medium">Weakness</th>
              <th className="px-6 py-4 font-medium">Priority</th>
            </tr>
          </thead>
          <tbody>
            {engineRows.map((row, idx) => (
              <tr
                key={row.engine}
                className={idx === 0 || idx === 1 || idx === 2 ? "bg-blue-500/10" : "border-t border-white/5"}
              >
                <td className="px-6 py-5 font-medium text-white">{row.engine}</td>
                <td className="px-6 py-5 text-slate-300">{row.purpose}</td>
                <td className="px-6 py-5 text-slate-300">{row.channels}</td>
                <td className="px-6 py-5 text-slate-300">{row.bestFor}</td>
                <td className="px-6 py-5 text-slate-200">{row.strength}</td>
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
            <h2 className="text-2xl font-semibold text-white">Core Campaign Motions</h2>
            <p className="mt-2 text-sm text-slate-400">
              The GTM motions that translate engines into actual experiments and campaigns.
            </p>
          </div>

          <table className="min-w-full text-left text-sm">
            <thead className="bg-white/5 text-slate-300">
              <tr>
                <th className="px-6 py-4 font-medium">Motion</th>
                <th className="px-6 py-4 font-medium">Hypothesis</th>
                <th className="px-6 py-4 font-medium">Key Metric</th>
                <th className="px-6 py-4 font-medium">Success Signal</th>
                <th className="px-6 py-4 font-medium">Risk</th>
              </tr>
            </thead>
            <tbody>
              {campaignRows.map((row, idx) => (
                <tr
                  key={row.motion}
                  className={idx === 0 || idx === 1 ? "bg-blue-500/10" : "border-t border-white/5"}
                >
                  <td className="px-6 py-5 font-medium text-white">{row.motion}</td>
                  <td className="px-6 py-5 text-slate-300">{row.hypothesis}</td>
                  <td className="px-6 py-5 text-slate-200">{row.keyMetric}</td>
                  <td className="px-6 py-5 text-slate-300">{row.successSignal}</td>
                  <td className="px-6 py-5 text-slate-300">{row.risk}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-xl">
          <h2 className="text-2xl font-semibold text-white">Acquisition Principles</h2>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
            {enginePrinciples.map((rule) => (
              <li key={rule}>• {rule}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 shadow-xl">
        <div className="border-b border-white/10 px-6 py-5">
          <h2 className="text-2xl font-semibold text-white">Budget and CAC Logic by Engine</h2>
          <p className="mt-2 text-sm text-slate-400">
            Not every acquisition engine deserves equal funding. Budget should follow expected payback quality.
          </p>
        </div>

        <table className="min-w-full text-left text-sm">
          <thead className="bg-white/5 text-slate-300">
            <tr>
              <th className="px-6 py-4 font-medium">Channel</th>
              <th className="px-6 py-4 font-medium">Cost Profile</th>
              <th className="px-6 py-4 font-medium">Efficiency View</th>
              <th className="px-6 py-4 font-medium">Why</th>
              <th className="px-6 py-4 font-medium">Verdict</th>
            </tr>
          </thead>
          <tbody>
            {budgetRows.map((row, idx) => (
              <tr
                key={row.channel}
                className={idx === 0 || idx === 1 ? "bg-blue-500/10" : "border-t border-white/5"}
              >
                <td className="px-6 py-5 font-medium text-white">{row.channel}</td>
                <td className="px-6 py-5 text-slate-300">{row.costProfile}</td>
                <td className="px-6 py-5 text-slate-300">{row.efficiencyView}</td>
                <td className="px-6 py-5 text-slate-300">{row.why}</td>
                <td className="px-6 py-5 text-slate-200">{row.verdict}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </PageShell>
  );
}