import PageShell from "@/components/page-shell";

const competitors = [
  {
    company: "Cryptorefills",
    category: "Embedded crypto spend (partner-led)",
    wedge: "Utility-first spend through wallets and exchanges",
    strength: "Native distribution inside partner apps + broad utility catalog",
    gap: "Weaker brand pull vs incumbents and onboarding polish",
    attack: "Drive growth through partner surfaces and country-specific utility campaigns",
  },
  {
    company: "Bitrefill",
    category: "Direct crypto spend (brand-led)",
    wedge: "Brand, SEO, mature direct consumer motion",
    strength: "Entrenched category leadership, strong direct acquisition engine and habit formation",
    gap: "Limited leverage in partner-native distribution",
    attack: "Avoid competing on SEO and direct traffic, focus on embedded channels",
  },
  {
    company: "Coinsbee",
    category: "Direct crypto spend (catalog-led)",
    wedge: "Broad gift card access and vast support for over 200 cryptocurrencies",
    strength: "Catalog breadth and broad token support",
    gap: "Weak ecosystem positioning and limited distribution leverage",
    attack: "Win on use case clarity and partner-driven access, not catalog size",
  },
  {
    company: "Travala",
    category: "Travel commerce",
    wedge: "Travel bookings with crypto",
    strength: "Travel-specific focus",
    gap: "Narrower everyday utility story",
    attack: "Use travel as secondary, not core wedge",
  },
  {
    company: "MoonPay Commerce",
    category: "Commerce infrastructure",
    wedge: "On and off ramp + checkout enablement",
    strength: "Infra credibility and distribution partnerships",
    gap: "Not a consumer destination for spend",
    attack: "Separate infra from consumer GTM battle (Use infra partners, but do not compete at infra level)",
  },
];

export default function CompetitivePage() {
  return (
    <PageShell>
      <section className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-xl">
        <div className="text-sm uppercase tracking-[0.25em] text-blue-300">
          Page 1
        </div>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Competitive Landscape
        </h1>
        <p className="mt-4 max-w-4xl text-base leading-7 text-slate-300">
          This page maps the competitive field, the players, and defines where Cryptorefills should focus to win without competing everywhere.
        </p>
      </section>

      <section className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 shadow-xl">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-white/5 text-slate-300">
            <tr>
              <th className="px-6 py-4 font-medium">Company</th>
              <th className="px-6 py-4 font-medium">Category</th>
              <th className="px-6 py-4 font-medium">Primary Wedge</th>
              <th className="px-6 py-4 font-medium">Strength</th>
              <th className="px-6 py-4 font-medium">Gap</th>
              <th className="px-6 py-4 font-medium">Best Attack</th>
            </tr>
          </thead>
          <tbody>
            {competitors.map((row, idx) => (
              <tr
                key={row.company}
                className={idx === 0 ? "bg-blue-500/10" : "border-t border-white/5"}
              >
                <td className="px-6 py-5 font-medium text-white">{row.company}</td>
                <td className="px-6 py-5 text-slate-300">{row.category}</td>
                <td className="px-6 py-5 text-slate-300">{row.wedge}</td>
                <td className="px-6 py-5 text-slate-300">{row.strength}</td>
                <td className="px-6 py-5 text-slate-300">{row.gap}</td>
                <td className="px-6 py-5 text-slate-200">{row.attack}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </PageShell>
  );
}