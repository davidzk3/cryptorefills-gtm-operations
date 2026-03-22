import PageShell from "@/components/page-shell";
import AccordionCard from "@/components/accordion-card";

const competitionSignals = [
  {
    area: "Where Cryptorefills should win",
    insight: "Utility-led spend through partner distribution and country-specific activation",
  },
  {
    area: "Where not to fight head-on",
    insight: "Broad SEO and generic direct-spend competition against stronger incumbents",
  },
  {
    area: "Main strategic gap",
    insight: "Weaker direct brand pull and weaker direct onboarding than category leaders",
  },
  {
    area: "Main strategic edge",
    insight: "Existing partner surfaces and stronger practical utility fit in emerging markets",
  },
];

const ecosystemSignals = [
  {
    metric: "Products",
    value: "Gift cards, top up, eSIM, flights, stays",
    meaning: "Broad catalog, but the entry wedge should stay utility-led",
  },
  {
    metric: "Partner Surfaces",
    value: "Binance, Gate, KuCoin, World App, Bitget Wallet, Krak",
    meaning: "Best existing leverage for new-user growth",
  },
  {
    metric: "Priority Regions",
    value: "Sub-Saharan Africa, LATAM, Southeast Asia",
    meaning: "Best fit for crypto-to-utility conversion",
  },
  {
    metric: "Core User Types",
    value: "Stablecoin spenders, exchange-native users, diaspora support, freelancers/creators",
    meaning: "Behavioral segments matter more than broad demographics",
  },
];

const channelSignals = [
  {
    channel: "Partner-native acquisition",
    quality: "Highest",
    reason: "Funded crypto users with the lowest education burden",
    action: "Push utility-led campaign asks partner by partner",
  },
  {
    channel: "Utility-led creators",
    quality: "High",
    reason: "Fast local proof and strong market-specific storytelling",
    action: "Run creator cohorts by country and compare quality, not just traffic",
  },
  {
    channel: "Search intent capture",
    quality: "High",
    reason: "Best for already-formed practical demand",
    action: "Build narrow use-case landing pages and keyword clusters",
  },
  {
    channel: "Referral / ambassador",
    quality: "Medium",
    reason: "Can compound, but only after high-quality first cohorts exist",
    action: "Tie incentives to second-purchase quality",
  },
  {
    channel: "Broad paid social",
    quality: "Low",
    reason: "Weak intent and expensive education burden",
    action: "Do not lead here",
  },
];

const countryBoard = [
  {
    country: "Nigeria",
    status: "High Priority",
    wedge: "Top up, data, practical digital utility",
    nextMove: "Build partner, creator, diaspora, and search motions around utility pain",
  },
  {
    country: "Argentina",
    status: "High Priority",
    wedge: "Stablecoin-preserving spend and practical digital value",
    nextMove: "Build the LATAM version of the utility-led model after Nigeria",
  },
  {
    country: "Philippines",
    status: "Build Next",
    wedge: "Mobile-first utility, digital goods, remittance-adjacent relevance",
    nextMove: "Prepare creator and wallet-native playbook",
  },
  {
    country: "Vietnam",
    status: "Build Next",
    wedge: "Digital goods, gaming, mobile-first spend",
    nextMove: "Research local category ordering and creator fit",
  },
  {
    country: "Turkey",
    status: "Selective",
    wedge: "Stablecoin utility and selected travel/eSIM crossover",
    nextMove: "Keep narrow, do not over-generalize",
  },
  {
    country: "Brazil",
    status: "Research to Pilot",
    wedge: "Gift cards plus selected practical spend categories",
    nextMove: "Validate local fit before deep activation",
  },
];

const decisionsNeeded = [
  {
    type: "Founder / CEO",
    item: "Which partner relationship should be pushed first for a Nigeria utility campaign?",
  },
  {
    type: "Product / Growth",
    item: "Should Nigeria utility landing pages be created as distinct acquisition pages rather than routing traffic to broad category pages?",
  },
  {
    type: "Marketing / GTM",
    item: "Which creator cohort structure should be used first: crypto educators, side-hustle creators, or freelancer / creator earners?",
  },
  {
    type: "Commercial",
    item: "What level of first-purchase utility incentive is acceptable without damaging margin quality?",
  },
];

const redFlags = [
  "Too much traffic entering through generic gift-card breadth rather than local utility wedge",
  "High click volume but weak checkout completion due to rail or message mismatch",
  "Creators generating attention but poor useful first-purchase quality",
  "Partner integrations existing passively without active campaign leverage",
  "Country expansion chosen by abstract TAM instead of usable product-market fit",
];

export default function ExecutiveSummaryPage() {
  return (
    <PageShell>
      <div className="space-y-8">
        {/* Keep this top section exactly as your current overview area */}
        <section className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-xl">
          <div className="text-sm uppercase tracking-[0.25em] text-blue-300">
            Executive Summary
          </div>

          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Cryptorefills GTM System
          </h1>

          <p className="mt-4 max-w-5xl text-base leading-7 text-slate-300">
            Cryptorefills already has product-market fit.
            The challenge is bringing in new users in a consistent and scalable way.
          </p>
        </section>

        <section className="grid gap-6 xl:grid-cols-3">
          <div className="rounded-2xl border border-emerald-400/20 bg-emerald-500/10 p-6 shadow-xl">
            <h2 className="text-xl font-semibold text-white">Core insight</h2>
            <p className="mt-4 text-sm leading-7 text-slate-200">
              The opportunity is to turn existing crypto users into active spenders through the right surfaces, focusing on where crypto naturally converts into real usage.
            </p>
          </div>

          <div className="rounded-2xl border border-blue-400/20 bg-blue-500/10 p-6 shadow-xl">
            <h2 className="text-xl font-semibold text-white">Strategic wedge</h2>
            <p className="mt-4 text-sm leading-7 text-slate-200">
              Utility-led crypto spend driven by stablecoins and partner-native distribution.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-400/20 bg-slate-500/10 p-6 shadow-xl">
            <h2 className="text-xl font-semibold text-white">Primary risk</h2>
            <p className="mt-4 text-sm leading-7 text-slate-200">
              User access exists, but without strong conversion into first purchase and repeat spend, growth will not compound.
            </p>
          </div>
        </section>
<div className="text-xs uppercase tracking-[0.2em] text-indigo-300">
  Core Metric
</div>
        <section className="rounded-2xl border border-purple-400/20 bg-purple-500/10 p-6 shadow-xl">
          <h2 className="text-xl font-semibold text-white">North star</h2>
          <p className="mt-4 text-sm leading-7 text-slate-100">
            Share of new users who complete a first utility-driven purchase and return within 30 days.
          </p>
        </section>

        {/* Add the 6 boxes below, without changing the top section */}
        <section className="grid gap-6 xl:grid-cols-2">
          <AccordionCard
            title="Strategic Readout"
            subtitle="Competitive and positioning truths that shape the GTM plan"
          >
            <div className="space-y-4">
              {competitionSignals.map((row) => (
                <div
                  key={row.area}
                  className="rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="text-sm font-medium text-white">{row.area}</div>
                  <div className="mt-2 text-sm leading-6 text-slate-300">
                    {row.insight}
                  </div>
                </div>
              ))}
            </div>
          </AccordionCard>

          <AccordionCard
            title="Ecosystem Readout"
            subtitle="What the business already has working in its favor"
          >
            <div className="space-y-4">
              {ecosystemSignals.map((row) => (
                <div
                  key={row.metric}
                  className="rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="text-sm font-medium text-white">{row.metric}</div>
                  <div className="mt-2 text-sm text-blue-300">{row.value}</div>
                  <div className="mt-2 text-sm leading-6 text-slate-300">
                    {row.meaning}
                  </div>
                </div>
              ))}
            </div>
          </AccordionCard>

          <AccordionCard
            title="Channel Priority Board"
            subtitle="Where budget, attention, and campaign energy should go first"
          >
            <div className="space-y-4">
              {channelSignals.map((row) => (
                <div
                  key={row.channel}
                  className="rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="text-sm font-medium text-white">{row.channel}</div>
                    <div className="text-xs uppercase tracking-[0.2em] text-blue-300">
                      {row.quality}
                    </div>
                  </div>
                  <div className="mt-2 text-sm leading-6 text-slate-300">
                    {row.reason}
                  </div>
                  <div className="mt-3 text-sm leading-6 text-slate-200">
                    Action: {row.action}
                  </div>
                </div>
              ))}
            </div>
          </AccordionCard>

          <AccordionCard
            title="Country Activation Board"
            subtitle="Markets ranked by practical GTM fit"
          >
            <div className="space-y-4">
              {countryBoard.map((row) => (
                <div
                  key={row.country}
                  className="rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="text-sm font-medium text-white">{row.country}</div>
                    <div className="text-xs uppercase tracking-[0.2em] text-blue-300">
                      {row.status}
                    </div>
                  </div>
                  <div className="mt-2 text-sm leading-6 text-slate-300">
                    Wedge: {row.wedge}
                  </div>
                  <div className="mt-2 text-sm leading-6 text-slate-200">
                    Next move: {row.nextMove}
                  </div>
                </div>
              ))}
            </div>
          </AccordionCard>

        </section>
      </div>
    </PageShell>
  );
}