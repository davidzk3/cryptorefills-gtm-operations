import PageShell from "@/components/page-shell";

const actionBlocks = [
  {
    title: "Why Nigeria",
    text: "Nigeria is not just a high-crypto market. It is a market where FX friction, unstable access to global payments, and mobile-first digital behavior create a real need for practical crypto spend.",
  },
  {
    title: "Core Local Pain",
    text: "The problem is not only holding dollar value. The problem is converting that value into useful purchases without relying on inconsistent international card access, domiciliary setup, or merchant crypto acceptance.",
  },
  {
    title: "Lead Wedge",
    text: "Lead with practical digital utility: mobile top up, data, selected local gift cards, and real-life digital support use cases. Do not lead with generic global crypto-spend language.",
  },
  {
    title: "GTM Thesis",
    text: "Acquire Nigerians where they already hold or receive crypto-like dollar value, route them into utility-led first purchases, and judge channels by repeat quality, not shallow first-order conversion.",
  },
];

const painPointRows = [
  {
    pain: "Inconsistent access to global card payments",
    reality:
      "International card access is improving again, but still varies sharply by bank, setup, and limits. Many users still face friction paying for global digital services reliably.",
    cryptorefillsSolve:
      "Offer a spend path that does not depend entirely on traditional bank card reliability for every cross-border digital need.",
  },
  {
    pain: "Dollar value is easier to hold than to spend",
    reality:
      "Users can increasingly hold USDT, USDC, Payoneer balances, or other external earnings, but clean day-to-day spend remains awkward.",
    cryptorefillsSolve:
      "Turn held value into direct digital utility rather than forcing users through multiple conversion layers first.",
  },
  {
    pain: "Diaspora support is often practical, not abstract",
    reality:
      "Family support is frequently about immediate needs like airtime, data, and useful digital value, not only large bank transfers.",
    cryptorefillsSolve:
      "Position top up, data, and selected local gift cards as a faster support rail for family and friends.",
  },
  {
    pain: "Freelancers and creators need spend rails",
    reality:
      "Receiving international income is only half the problem. The other half is using that value easily for tools, digital services, and local support.",
    cryptorefillsSolve:
      "Frame Cryptorefills as a practical spend bridge for globally earned income.",
  },
  {
    pain: "Direct merchant crypto acceptance is still fragmented",
    reality:
      "Many Nigerian merchants and everyday businesses still do not offer smooth direct crypto checkout.",
    cryptorefillsSolve:
      "Bypass weak merchant adoption through top up, digital utility, and catalog-based spend flows.",
  },
];

const segmentRows = [
  {
    segment: "Stablecoin Utility Spenders",
    profile:
      "Users already holding USDT / USDC who want to spend useful value without first converting through multiple banking steps",
    entry: "MTN / Airtel / Glo / 9mobile top up and data",
    message: "Spend your dollar crypto value directly on daily digital needs",
    repeat: "High",
  },
  {
    segment: "Freelancers, Remote Earners, and Creators",
    profile:
      "Users earning from global work, creator platforms, Payoneer-like flows, or crypto-native income streams",
    entry: "Digital utility, app store / selected gift cards, top up, data",
    message: "Turn globally earned value into practical spend without card stress",
    repeat: "Medium to High",
  },
  {
    segment: "Exchange-Native Users",
    profile:
      "Users active on Binance, KuCoin, Gate, World App, Bitget Wallet, or similar surfaces",
    entry: "Partner-led utility offer from in-app balance to first purchase",
    message: "From held crypto to instant utility in one flow",
    repeat: "High",
  },
  {
    segment: "Diaspora Support / Gifting",
    profile:
      "Users outside Nigeria supporting relatives or friends with useful daily value",
    entry: "Data gifting, top up, selected local gift cards",
    message: "Send something useful fast, not just money slowly",
    repeat: "Medium to High",
  },
  {
    segment: "Crypto-Native Youth / Creator Audience",
    profile:
      "Mobile-first users influenced by local crypto, business, and side-hustle creators",
    entry: "Creator-led top up / data demos with promo code",
    message: "Here is how I use USDT for real life, not just trading",
    repeat: "Medium",
  },
];

const channelRows = [
  {
    channel: "Partner-native exchange / wallet campaigns",
    why: "Best fit for users who already hold crypto and need minimal education",
    examples: "Binance, KuCoin, Gate, World App, Bitget Wallet, Krak",
    role: "Primary acquisition engine",
    priority: "Very High",
  },
  {
    channel: "Utility-led micro creators",
    why: "Nigeria responds strongly to trust-led demonstrations and practical proof",
    examples: "Crypto educators, side-hustle creators, finance creators, youth tech creators",
    role: "Localized proof and category education",
    priority: "High",
  },
  {
    channel: "Search intent capture",
    why: "Users already search for ways to top up, buy data, or pay for digital services with crypto or dollar value",
    examples: "buy airtime with crypto nigeria, buy data with usdt nigeria, pay for gift cards with crypto nigeria",
    role: "Demand capture",
    priority: "High",
  },
  {
    channel: "Diaspora-targeted campaigns",
    why: "Support flows are emotional, practical, and recurring",
    examples: "Send airtime to family, send data to Nigeria, support-from-abroad use cases",
    role: "Cross-border support wedge",
    priority: "High",
  },
  {
    channel: "Referral / ambassador loops",
    why: "Useful once first-purchase cohorts show good repeat quality",
    examples: "Campus reps, crypto communities, creator-affiliate loops",
    role: "Supportive compounding channel",
    priority: "Medium",
  },
];

const offerRows = [
  {
    offer: "First utility purchase incentive",
    useCase: "Top up / data first order",
    objective: "Reduce first-purchase hesitation in the clearest category",
    caution: "Keep it utility-led so traffic quality stays high",
  },
  {
    offer: "Partner-exclusive Nigeria utility promo",
    useCase: "Exchange or wallet-native campaign",
    objective: "Give Binance / KuCoin / World-type surfaces a clear local hook",
    caution: "Must route into Nigeria-specific landing page and code tracking",
  },
  {
    offer: "Creator code on practical spend",
    useCase: "Micro creator campaigns",
    objective: "Measure creator quality by useful first purchases, not vanity clicks",
    caution: "Do not reward generic traffic with sitewide discounts",
  },
  {
    offer: "Diaspora support promo",
    useCase: "Cross-border gifting / support narrative",
    objective: "Turn family support into repeatable top up / data behavior",
    caution: "Keep messaging practical, not abstract remittance rhetoric",
  },
];

const funnelRows = [
  {
    stage: "Discovery",
    detail:
      "User encounters Nigeria-specific utility messaging through partner, creator, search, or diaspora-oriented campaign",
    success: "Qualified click into Nigeria page",
  },
  {
    stage: "Nigeria Landing Page",
    detail:
      "Page leads with top up / data first, explains supported operators, shows stablecoin compatibility, and reinforces instant delivery",
    success: "Landing-to-category progression",
  },
  {
    stage: "Category / Product Selection",
    detail:
      "User sees the most obvious local need first: operator, data bundle, top up amount, or selected local gift card",
    success: "Category-to-checkout rate",
  },
  {
    stage: "Payment / Rail Selection",
    detail:
      "User chooses the most natural crypto asset and wallet rail for their balance",
    success: "Checkout completion rate",
  },
  {
    stage: "Order Success",
    detail:
      "The experience confirms value was delivered quickly and cleanly",
    success: "Delivered paid order",
  },
  {
    stage: "Repeat / Expansion",
    detail:
      "User returns for next utility need or adjacent spend category",
    success: "Second purchase within 30 days",
  },
];

const metricRows = [
  {
    metric: "Cost per first quality purchase",
    why: "Avoid judging Nigeria by cheap clicks or broad signups",
  },
  {
    metric: "% first orders in top up / data",
    why: "Confirms whether the wedge is landing correctly",
  },
  {
    metric: "Landing-to-checkout rate",
    why: "Shows whether local message and page structure are working",
  },
  {
    metric: "Checkout completion rate",
    why: "Reveals asset / rail friction",
  },
  {
    metric: "Stablecoin share of first purchases",
    why: "Tracks alignment with strongest Cryptorefills wedge",
  },
  {
    metric: "Second purchase within 30 days",
    why: "Best early test of whether Nigeria acquisition is actually good",
  },
  {
    metric: "Diaspora-to-purchase conversion",
    why: "Measures whether support-led narratives are commercially real",
  },
  {
    metric: "Creator-to-purchase conversion",
    why: "Separates creators with trust and local fit from noise",
  },
];

const risks = [
  "Traffic can look strong on first purchase but fail on second purchase.",
  "Broad incentives can attract weak bargain-hunting cohorts.",
  "Poor Nigeria page structure can bury the strongest local wedge under generic catalog breadth.",
  "Rail friction can waste otherwise strong partner or creator traffic.",
  "Community distribution becomes spam quickly if not anchored by proof, codes, and quality filters.",
];

export default function NigeriaPage() {
  return (
    <PageShell>
      <section className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-xl">
        <div className="text-sm uppercase tracking-[0.25em] text-blue-300">
          Page 9
        </div>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Nigeria Activation Playbook
        </h1>
        <p className="mt-4 max-w-4xl text-base leading-7 text-slate-300">
          Nigeria is the first deep market case because the pain is concrete: FX friction,
          uneven global payment access, strong stablecoin behavior, practical family-support
          flows, and real demand for digital utility. The goal is not to “enter Africa.”
          The goal is to route existing crypto and dollar-value behavior into useful, repeatable spend.
        </p>
      </section>

      <section className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {actionBlocks.map((block) => (
          <div
            key={block.title}
            className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-xl"
          >
            <div className="text-sm font-medium text-white">{block.title}</div>
            <p className="mt-3 text-sm leading-6 text-slate-300">{block.text}</p>
          </div>
        ))}
      </section>

      <section className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 shadow-xl">
        <div className="border-b border-white/10 px-6 py-5">
          <h2 className="text-2xl font-semibold text-white">Real Local Pain Points</h2>
          <p className="mt-2 text-sm text-slate-400">
            This is the heart of the Nigeria case: specific frictions Cryptorefills can actually relieve.
          </p>
        </div>

        <table className="min-w-full text-left text-sm">
          <thead className="bg-white/5 text-slate-300">
            <tr>
              <th className="px-6 py-4 font-medium">Pain Point</th>
              <th className="px-6 py-4 font-medium">Local Reality</th>
              <th className="px-6 py-4 font-medium">How Cryptorefills Helps</th>
            </tr>
          </thead>
          <tbody>
            {painPointRows.map((row, idx) => (
              <tr
                key={row.pain}
                className={idx === 0 || idx === 1 ? "bg-blue-500/10" : "border-t border-white/5"}
              >
                <td className="px-6 py-5 font-medium text-white">{row.pain}</td>
                <td className="px-6 py-5 text-slate-300">{row.reality}</td>
                <td className="px-6 py-5 text-slate-200">{row.cryptorefillsSolve}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 shadow-xl">
        <div className="border-b border-white/10 px-6 py-5">
          <h2 className="text-2xl font-semibold text-white">Target Segments</h2>
          <p className="mt-2 text-sm text-slate-400">
            The Nigeria motion should be built around people with real spend pain, not generic crypto audiences.
          </p>
        </div>

        <table className="min-w-full text-left text-sm">
          <thead className="bg-white/5 text-slate-300">
            <tr>
              <th className="px-6 py-4 font-medium">Segment</th>
              <th className="px-6 py-4 font-medium">Profile</th>
              <th className="px-6 py-4 font-medium">Best Entry</th>
              <th className="px-6 py-4 font-medium">Message</th>
              <th className="px-6 py-4 font-medium">Repeat Quality</th>
            </tr>
          </thead>
          <tbody>
            {segmentRows.map((row, idx) => (
              <tr
                key={row.segment}
                className={idx === 0 || idx === 1 || idx === 2 ? "bg-blue-500/10" : "border-t border-white/5"}
              >
                <td className="px-6 py-5 font-medium text-white">{row.segment}</td>
                <td className="px-6 py-5 text-slate-300">{row.profile}</td>
                <td className="px-6 py-5 text-slate-200">{row.entry}</td>
                <td className="px-6 py-5 text-slate-300">{row.message}</td>
                <td className="px-6 py-5 text-slate-300">{row.repeat}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 shadow-xl">
        <div className="border-b border-white/10 px-6 py-5">
          <h2 className="text-2xl font-semibold text-white">Channel Strategy</h2>
          <p className="mt-2 text-sm text-slate-400">
            Nigeria should be won through partner-native utility acquisition first, then reinforced by creators, search, and diaspora narratives.
          </p>
        </div>

        <table className="min-w-full text-left text-sm">
          <thead className="bg-white/5 text-slate-300">
            <tr>
              <th className="px-6 py-4 font-medium">Channel</th>
              <th className="px-6 py-4 font-medium">Why</th>
              <th className="px-6 py-4 font-medium">Examples</th>
              <th className="px-6 py-4 font-medium">Role</th>
              <th className="px-6 py-4 font-medium">Priority</th>
            </tr>
          </thead>
          <tbody>
            {channelRows.map((row, idx) => (
              <tr
                key={row.channel}
                className={idx === 0 || idx === 1 || idx === 2 || idx === 3 ? "bg-blue-500/10" : "border-t border-white/5"}
              >
                <td className="px-6 py-5 font-medium text-white">{row.channel}</td>
                <td className="px-6 py-5 text-slate-300">{row.why}</td>
                <td className="px-6 py-5 text-slate-300">{row.examples}</td>
                <td className="px-6 py-5 text-slate-200">{row.role}</td>
                <td className="px-6 py-5 text-slate-300">{row.priority}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 shadow-xl">
          <div className="border-b border-white/10 px-6 py-5">
            <h2 className="text-2xl font-semibold text-white">Offer Logic</h2>
            <p className="mt-2 text-sm text-slate-400">
              Offers should make the first useful spend easier, not attract the wrong crowd.
            </p>
          </div>

          <table className="min-w-full text-left text-sm">
            <thead className="bg-white/5 text-slate-300">
              <tr>
                <th className="px-6 py-4 font-medium">Offer</th>
                <th className="px-6 py-4 font-medium">Use Case</th>
                <th className="px-6 py-4 font-medium">Objective</th>
                <th className="px-6 py-4 font-medium">Caution</th>
              </tr>
            </thead>
            <tbody>
              {offerRows.map((row, idx) => (
                <tr
                  key={row.offer}
                  className={idx === 0 || idx === 1 || idx === 3 ? "bg-blue-500/10" : "border-t border-white/5"}
                >
                  <td className="px-6 py-5 font-medium text-white">{row.offer}</td>
                  <td className="px-6 py-5 text-slate-300">{row.useCase}</td>
                  <td className="px-6 py-5 text-slate-200">{row.objective}</td>
                  <td className="px-6 py-5 text-slate-300">{row.caution}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-xl">
          <h2 className="text-2xl font-semibold text-white">Core Risks</h2>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
            {risks.map((risk) => (
              <li key={risk}>• {risk}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 shadow-xl">
        <div className="border-b border-white/10 px-6 py-5">
          <h2 className="text-2xl font-semibold text-white">Nigeria Funnel Design</h2>
          <p className="mt-2 text-sm text-slate-400">
            The funnel should look like a utility solution, not a generic crypto catalog.
          </p>
        </div>

        <table className="min-w-full text-left text-sm">
          <thead className="bg-white/5 text-slate-300">
            <tr>
              <th className="px-6 py-4 font-medium">Stage</th>
              <th className="px-6 py-4 font-medium">Detail</th>
              <th className="px-6 py-4 font-medium">Success Metric</th>
            </tr>
          </thead>
          <tbody>
            {funnelRows.map((row, idx) => (
              <tr
                key={row.stage}
                className={idx === 1 || idx === 5 ? "bg-blue-500/10" : "border-t border-white/5"}
              >
                <td className="px-6 py-5 font-medium text-white">{row.stage}</td>
                <td className="px-6 py-5 text-slate-300">{row.detail}</td>
                <td className="px-6 py-5 text-slate-200">{row.success}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 shadow-xl">
        <div className="border-b border-white/10 px-6 py-5">
          <h2 className="text-2xl font-semibold text-white">Success Metrics</h2>
          <p className="mt-2 text-sm text-slate-400">
            Nigeria should be judged by useful first purchase quality and repeat signal.
          </p>
        </div>

        <table className="min-w-full text-left text-sm">
          <thead className="bg-white/5 text-slate-300">
            <tr>
              <th className="px-6 py-4 font-medium">Metric</th>
              <th className="px-6 py-4 font-medium">Why It Matters</th>
            </tr>
          </thead>
          <tbody>
            {metricRows.map((row, idx) => (
              <tr
                key={row.metric}
                className={idx === 0 || idx === 5 || idx === 6 ? "bg-blue-500/10" : "border-t border-white/5"}
              >
                <td className="px-6 py-5 font-medium text-white">{row.metric}</td>
                <td className="px-6 py-5 text-slate-300">{row.why}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </PageShell>
  );
}