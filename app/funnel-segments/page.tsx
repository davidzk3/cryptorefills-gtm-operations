import PageShell from "@/components/page-shell";

const segmentRows = [
  {
    segment: "Stablecoin Utility Spenders",
    profile: "Users already holding USDT / USDC who want practical spend without cashing out",
    bestEntry: "Mobile top up, data, utility-like digital spend",
    bestChannels: "Exchange-native surfaces, wallet-native surfaces, search intent",
    repeatQuality: "High",
    risk: "Can drop if landing pages are too generic",
  },
  {
    segment: "Exchange-Native Spenders",
    profile: "Users active inside Binance, KuCoin, Gate, Krak, Bitget Wallet, or similar surfaces",
    bestEntry: "Partner-led spend flow from held balance to first purchase",
    bestChannels: "Partner placements, co-marketing, in-app discovery",
    repeatQuality: "High",
    risk: "Dependent on active featuring, not passive integration",
  },
  {
    segment: "Diaspora Support / Gifting Users",
    profile: "Users sending practical value across borders to friends or family",
    bestEntry: "Mobile top up, data bundles, selected local gift cards",
    bestChannels: "Search, creators, partner-led utility campaigns",
    repeatQuality: "Medium to High",
    risk: "Needs clear gifting / support use-case framing",
  },
  {
    segment: "Travel-Heavy Crypto Users",
    profile: "Users who want flights, stays, eSIM, and travel utility paid with crypto",
    bestEntry: "Flights, hotels, eSIM",
    bestChannels: "Travel content, partner campaigns, search intent",
    repeatQuality: "Low to Medium",
    risk: "Higher AOV but lower frequency and higher friction",
  },
  {
    segment: "Gaming / Digital Goods Users",
    profile: "Users drawn by app store, gaming, and digital entertainment categories",
    bestEntry: "Gift cards and digital goods",
    bestChannels: "Creators, communities, localized campaigns",
    repeatQuality: "Medium",
    risk: "Can be noisy and lower-LTV if used as broad wedge",
  },
];

const funnelRows = [
  {
    stage: "1. Discovery / Entry",
    definition: "User first encounters Cryptorefills through owned, partner, creator, search, or community surfaces",
    successMetric: "Qualified visits",
    commonBreak: "Wrong channel or low-intent traffic",
    operatorQuestion: "Is this source bringing people with actual spend intent?",
  },
  {
    stage: "2. Country / Use-Case Landing",
    definition: "User lands on the page that frames the right market, product, and use case",
    successMetric: "Landing-to-category progression",
    commonBreak: "Message too broad, weak localization, wrong category emphasis",
    operatorQuestion: "Does the page immediately show the most relevant spend use case?",
  },
  {
    stage: "3. Category Selection",
    definition: "User chooses a category such as top up, gift card, eSIM, flights, or stays",
    successMetric: "Category click-through",
    commonBreak: "Too many choices, weak wedge, bad product ordering",
    operatorQuestion: "Are we leading with the category most likely to convert this segment?",
  },
  {
    stage: "4. Product Selection",
    definition: "User chooses the specific brand, operator, bundle, or booking flow",
    successMetric: "Product-to-checkout start rate",
    commonBreak: "Wrong product mix or unclear next step",
    operatorQuestion: "Does the product clearly match the user's immediate need?",
  },
  {
    stage: "5. Rail / Payment Selection",
    definition: "User picks asset, wallet, or rail to complete purchase",
    successMetric: "Checkout completion rate",
    commonBreak: "Rail confusion, wallet friction, fee concerns, asset mismatch",
    operatorQuestion: "Are we reducing friction for the most likely asset/rail combination?",
  },
  {
    stage: "6. Payment Success / Order Delivery",
    definition: "User completes purchase and receives the product successfully",
    successMetric: "Successful paid orders",
    commonBreak: "Payment failure, trust concerns, delivery uncertainty",
    operatorQuestion: "Is the post-payment experience clean and confidence-building?",
  },
  {
    stage: "7. Repeat Window / Expansion",
    definition: "User returns for a second purchase or expands into another category",
    successMetric: "Second purchase within 30 days",
    commonBreak: "No follow-up loop, weak habit category, poor lifecycle nudge",
    operatorQuestion: "Did the first order create a reason to come back?",
  },
];

const dropoffRows = [
  {
    area: "Entry → Landing",
    whyItFails: "Low-intent traffic or bad campaign-message fit",
    whatToDo: "Tighten channel targeting and campaign narrative",
  },
  {
    area: "Landing → Category",
    whyItFails: "Too broad, wrong category emphasis, weak localization",
    whatToDo: "Build country / use-case specific landing pages",
  },
  {
    area: "Category → Product",
    whyItFails: "User cannot quickly identify the most relevant option",
    whatToDo: "Lead with strongest use case per segment and market",
  },
  {
    area: "Product → Checkout",
    whyItFails: "Unclear next step or weak trust layer",
    whatToDo: "Simplify CTA structure and reinforce instant delivery / no-friction utility",
  },
  {
    area: "Checkout → Payment Success",
    whyItFails: "Rail friction, asset mismatch, wallet confusion",
    whatToDo: "Prioritize the rails and assets most native to the source segment",
  },
  {
    area: "First Purchase → Second Purchase",
    whyItFails: "Wrong acquisition source or wrong first category",
    whatToDo: "Acquire through repeat-prone categories and add lifecycle nudges",
  },
];

const funnelPrinciples = [
  "The funnel is not generic ecommerce. It must be read through source, country, category, and rail.",
  "The biggest GTM failure is often not first purchase, but weak second purchase quality.",
  "Different segments should enter through different categories. One homepage cannot carry the whole GTM system.",
  "Landing pages are part of the acquisition engine, not a passive content layer.",
  "A good funnel does not just convert. It routes users into repeat-prone behavior.",
];

export default function FunnelSegmentsPage() {
  return (
    <PageShell>
      <section className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-xl">
        <div className="text-sm uppercase tracking-[0.25em] text-blue-300">
          Page 6
        </div>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Funnel and Segments
        </h1>
        <p className="mt-4 max-w-4xl text-base leading-7 text-slate-300">
          This page defines who Cryptorefills actually serves, what entry use case fits
          each user type, and where the real funnel breaks. The goal is to move beyond
          generic traffic thinking and build acquisition around high-fit segments and
          repeat-prone flows.
        </p>
      </section>

      <section className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 shadow-xl">
        <div className="border-b border-white/10 px-6 py-5">
          <h2 className="text-2xl font-semibold text-white">Core User Segments</h2>
          <p className="mt-2 text-sm text-slate-400">
            Behavioral segments matter more than broad demographics because GTM, category
            entry, and repeat quality differ sharply by user type.
          </p>
        </div>

        <table className="min-w-full text-left text-sm">
          <thead className="bg-white/5 text-slate-300">
            <tr>
              <th className="px-6 py-4 font-medium">Segment</th>
              <th className="px-6 py-4 font-medium">Profile</th>
              <th className="px-6 py-4 font-medium">Best Entry</th>
              <th className="px-6 py-4 font-medium">Best Channels</th>
              <th className="px-6 py-4 font-medium">Repeat Quality</th>
              <th className="px-6 py-4 font-medium">Risk</th>
            </tr>
          </thead>
          <tbody>
            {segmentRows.map((row, idx) => (
              <tr
                key={row.segment}
                className={idx === 0 || idx === 1 ? "bg-blue-500/10" : "border-t border-white/5"}
              >
                <td className="px-6 py-5 font-medium text-white">{row.segment}</td>
                <td className="px-6 py-5 text-slate-300">{row.profile}</td>
                <td className="px-6 py-5 text-slate-200">{row.bestEntry}</td>
                <td className="px-6 py-5 text-slate-300">{row.bestChannels}</td>
                <td className="px-6 py-5 text-slate-300">{row.repeatQuality}</td>
                <td className="px-6 py-5 text-slate-300">{row.risk}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 shadow-xl">
        <div className="border-b border-white/10 px-6 py-5">
          <h2 className="text-2xl font-semibold text-white">Real Funnel Architecture</h2>
          <p className="mt-2 text-sm text-slate-400">
            The funnel should be read as a sequence of routing decisions, not just a generic conversion path.
          </p>
        </div>

        <table className="min-w-full text-left text-sm">
          <thead className="bg-white/5 text-slate-300">
            <tr>
              <th className="px-6 py-4 font-medium">Stage</th>
              <th className="px-6 py-4 font-medium">Definition</th>
              <th className="px-6 py-4 font-medium">Success Metric</th>
              <th className="px-6 py-4 font-medium">Common Break</th>
              <th className="px-6 py-4 font-medium">Operator Question</th>
            </tr>
          </thead>
          <tbody>
            {funnelRows.map((row, idx) => (
              <tr
                key={row.stage}
                className={idx === 1 || idx === 6 ? "bg-blue-500/10" : "border-t border-white/5"}
              >
                <td className="px-6 py-5 font-medium text-white">{row.stage}</td>
                <td className="px-6 py-5 text-slate-300">{row.definition}</td>
                <td className="px-6 py-5 text-slate-200">{row.successMetric}</td>
                <td className="px-6 py-5 text-slate-300">{row.commonBreak}</td>
                <td className="px-6 py-5 text-slate-300">{row.operatorQuestion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 shadow-xl">
          <div className="border-b border-white/10 px-6 py-5">
            <h2 className="text-2xl font-semibold text-white">Where the Funnel Breaks</h2>
            <p className="mt-2 text-sm text-slate-400">
              The most valuable diagnosis is where quality falls apart, especially between first and second purchase.
            </p>
          </div>

          <table className="min-w-full text-left text-sm">
            <thead className="bg-white/5 text-slate-300">
              <tr>
                <th className="px-6 py-4 font-medium">Break Point</th>
                <th className="px-6 py-4 font-medium">Why It Fails</th>
                <th className="px-6 py-4 font-medium">What To Do</th>
              </tr>
            </thead>
            <tbody>
              {dropoffRows.map((row, idx) => (
                <tr
                  key={row.area}
                  className={idx === 1 || idx === 5 ? "bg-blue-500/10" : "border-t border-white/5"}
                >
                  <td className="px-6 py-5 font-medium text-white">{row.area}</td>
                  <td className="px-6 py-5 text-slate-300">{row.whyItFails}</td>
                  <td className="px-6 py-5 text-slate-200">{row.whatToDo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-xl">
          <h2 className="text-2xl font-semibold text-white">Funnel Principles</h2>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
            {funnelPrinciples.map((rule) => (
              <li key={rule}>• {rule}</li>
            ))}
          </ul>
        </div>
      </section>
    </PageShell>
  );
}