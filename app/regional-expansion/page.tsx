import PageShell from "@/components/page-shell";

const regionRows = [
  {
    region: "Sub-Saharan Africa",
    whyItMatters:
      "Strong stablecoin relevance, FX pressure, mobile-first behavior, and practical digital spend needs",
    leadCountries: "Nigeria, Kenya, Ghana",
    leadWedge: "Mobile top up, data, utility-like digital spend",
    bestChannels: "Partner-native surfaces, creators, communities, referral loops",
    risk: "Regulatory variance, support load, traffic quality inconsistency",
    priority: "Very High",
  },
  {
    region: "Latin America",
    whyItMatters:
      "Inflation-sensitive markets, strong crypto familiarity, gift-card and stablecoin utility logic",
    leadCountries: "Argentina, Brazil, Colombia",
    leadWedge: "Stablecoin-preserving spend, local gift cards, utility-led categories",
    bestChannels: "Search intent, creators, exchange-native campaigns",
    risk: "Country-level payment and redemption fit varies sharply",
    priority: "High",
  },
  {
    region: "Southeast Asia",
    whyItMatters:
      "Mobile-first usage, strong digital goods demand, exchange familiarity, cross-border relevance",
    leadCountries: "Philippines, Vietnam, Indonesia",
    leadWedge: "Top up, gaming, digital goods, eSIM, selected utility categories",
    bestChannels: "Creators, wallet-native surfaces, communities",
    risk: "Need sharper category sequencing by country",
    priority: "High",
  },
  {
    region: "Turkey / MENA-adjacent corridor",
    whyItMatters:
      "Stablecoin interest, inflation sensitivity, and high crypto awareness in select markets",
    leadCountries: "Turkey, UAE-adjacent traveler segments",
    leadWedge: "Stablecoin utility spend and selected travel/eSIM flows",
    bestChannels: "Partner campaigns, search, targeted creators",
    risk: "Can become too broad if not tightly segmented",
    priority: "Medium to High",
  },
  {
    region: "Europe / Mature crypto markets",
    whyItMatters:
      "Higher-value travel and premium spend cohorts, but weaker everyday utility wedge versus emerging markets",
    leadCountries: "Italy, Netherlands, Germany, Spain",
    leadWedge: "Travel, eSIM, premium digital spend",
    bestChannels: "Search, partner campaigns, brand/travel content",
    risk: "Harder to win through utility-led wedge alone",
    priority: "Selective",
  },
];

const countryRows = [
  {
    country: "Nigeria",
    fit: "Excellent",
    whyNow: "Strong crypto adoption + stablecoin utility + existing product coverage",
    leadCategory: "Mobile top up / data",
    channelPriority: "Partners + creators + search",
    role: "First deep activation playbook",
  },
  {
    country: "Argentina",
    fit: "Strong",
    whyNow: "Inflation and stablecoin-preserving spend logic",
    leadCategory: "Gift cards + practical digital spend",
    channelPriority: "Search + creators + exchange-native campaigns",
    role: "High-priority LATAM wedge",
  },
  {
    country: "Philippines",
    fit: "Strong",
    whyNow: "Mobile-first, remittance-adjacent behavior, digital utility relevance",
    leadCategory: "Top up + digital goods + eSIM",
    channelPriority: "Creators + wallets + communities",
    role: "SEA activation candidate",
  },
  {
    country: "Vietnam",
    fit: "Strong",
    whyNow: "Digital goods and crypto-savvy consumer behavior",
    leadCategory: "Gaming + digital goods + top up",
    channelPriority: "Creators + partner-native surfaces",
    role: "SEA growth candidate",
  },
  {
    country: "Turkey",
    fit: "Moderate to Strong",
    whyNow: "Stablecoin and inflation relevance",
    leadCategory: "Stablecoin utility spend + eSIM/travel crossover",
    channelPriority: "Search + partner campaigns",
    role: "Targeted market, not broad wedge",
  },
  {
    country: "Brazil",
    fit: "Moderate to Strong",
    whyNow: "Large market with crypto familiarity, but needs sharper local fit validation",
    leadCategory: "Gift cards + selected utility use cases",
    channelPriority: "Search + creators + partners",
    role: "Research-to-pilot market",
  },
];

const selectionPrinciples = [
  "Do not rank markets only by crypto adoption. Rank them by crypto spend usefulness.",
  "A good market is one where held crypto naturally converts into practical digital utility.",
  "Country activation should begin where product coverage already exists and the use case is obvious.",
  "The first country in a region should be a learnable wedge, not the biggest theoretical TAM.",
  "Regional expansion should follow repeat-prone categories, not just traffic opportunity.",
];

const activationTiers = [
  {
    tier: "Tier 1: Activate Now",
    definition: "Clear product-market fit, strong utility wedge, and immediate GTM learnings available",
    countries: "Nigeria, Argentina",
  },
  {
    tier: "Tier 2: Build Next",
    definition: "High-potential markets that should follow once operating patterns are proven",
    countries: "Philippines, Vietnam",
  },
  {
    tier: "Tier 3: Selective Expansion",
    definition: "Valuable but needs narrower positioning or more local validation",
    countries: "Turkey, Brazil",
  },
];

export default function RegionalExpansionPage() {
  return (
    <PageShell>
      <section className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-xl">
        <div className="text-sm uppercase tracking-[0.25em] text-blue-300">
          Page 8
        </div>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Regional Expansion
        </h1>
        <p className="mt-4 max-w-4xl text-base leading-7 text-slate-300">
          This page defines where Cryptorefills should expand with intention. The goal is
          not to chase every country equally, but to identify regions where stablecoin-held
          value can naturally become practical digital spend, then choose the right country
          wedge inside each region.
        </p>
      </section>

      <section className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 shadow-xl">
        <div className="border-b border-white/10 px-6 py-5">
          <h2 className="text-2xl font-semibold text-white">Regional Prioritization Map</h2>
          <p className="mt-2 text-sm text-slate-400">
            Regions should be judged by spend utility, category fit, and GTM realism, not just crypto popularity.
          </p>
        </div>

        <table className="min-w-full text-left text-sm">
          <thead className="bg-white/5 text-slate-300">
            <tr>
              <th className="px-6 py-4 font-medium">Region</th>
              <th className="px-6 py-4 font-medium">Why It Matters</th>
              <th className="px-6 py-4 font-medium">Lead Countries</th>
              <th className="px-6 py-4 font-medium">Lead Wedge</th>
              <th className="px-6 py-4 font-medium">Best Channels</th>
              <th className="px-6 py-4 font-medium">Risk</th>
              <th className="px-6 py-4 font-medium">Priority</th>
            </tr>
          </thead>
          <tbody>
            {regionRows.map((row, idx) => (
              <tr
                key={row.region}
                className={idx === 0 || idx === 1 || idx === 2 ? "bg-blue-500/10" : "border-t border-white/5"}
              >
                <td className="px-6 py-5 font-medium text-white">{row.region}</td>
                <td className="px-6 py-5 text-slate-300">{row.whyItMatters}</td>
                <td className="px-6 py-5 text-slate-300">{row.leadCountries}</td>
                <td className="px-6 py-5 text-slate-200">{row.leadWedge}</td>
                <td className="px-6 py-5 text-slate-300">{row.bestChannels}</td>
                <td className="px-6 py-5 text-slate-300">{row.risk}</td>
                <td className="px-6 py-5 text-slate-200">{row.priority}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 shadow-xl">
          <div className="border-b border-white/10 px-6 py-5">
            <h2 className="text-2xl font-semibold text-white">Priority Countries</h2>
            <p className="mt-2 text-sm text-slate-400">
              Country selection should follow category clarity, product coverage, and GTM learnability.
            </p>
          </div>

          <table className="min-w-full text-left text-sm">
            <thead className="bg-white/5 text-slate-300">
              <tr>
                <th className="px-6 py-4 font-medium">Country</th>
                <th className="px-6 py-4 font-medium">Fit</th>
                <th className="px-6 py-4 font-medium">Why Now</th>
                <th className="px-6 py-4 font-medium">Lead Category</th>
                <th className="px-6 py-4 font-medium">Channel Priority</th>
                <th className="px-6 py-4 font-medium">Role</th>
              </tr>
            </thead>
            <tbody>
              {countryRows.map((row, idx) => (
                <tr
                  key={row.country}
                  className={idx === 0 || idx === 1 ? "bg-blue-500/10" : "border-t border-white/5"}
                >
                  <td className="px-6 py-5 font-medium text-white">{row.country}</td>
                  <td className="px-6 py-5 text-slate-300">{row.fit}</td>
                  <td className="px-6 py-5 text-slate-300">{row.whyNow}</td>
                  <td className="px-6 py-5 text-slate-200">{row.leadCategory}</td>
                  <td className="px-6 py-5 text-slate-300">{row.channelPriority}</td>
                  <td className="px-6 py-5 text-slate-300">{row.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-xl">
            <h2 className="text-2xl font-semibold text-white">Selection Principles</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
              {selectionPrinciples.map((rule) => (
                <li key={rule}>• {rule}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-xl">
            <h2 className="text-2xl font-semibold text-white">Activation Tiers</h2>
            <div className="mt-4 space-y-4">
              {activationTiers.map((tier) => (
                <div key={tier.tier} className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="text-sm font-medium text-white">{tier.tier}</div>
                  <div className="mt-2 text-sm leading-6 text-slate-300">{tier.definition}</div>
                  <div className="mt-2 text-sm text-blue-300">{tier.countries}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}