import PageShell from "@/components/page-shell";
import AccordionCard from "@/components/accordion-card";

const ecosystemCards = [
  { label: "Products", value: "Gift Cards, Top Up, eSIM, Flights, Stays" },
  { label: "Coverage", value: "180+ countries / territories" },
  { label: "Catalog", value: "5,000+ brands" },
  {
    label: "Core Users",
    value: "Stablecoin spenders, exchange-native users, diaspora support, travel users",
  },
  {
    label: "Live Partner Surfaces",
    value: "Binance, Gate, World, Krak, KuCoin, Bitget Wallet",
  },
  {
    label: "Key GTM Priority",
    value: "Partner-native and utility-led acquisition",
  },
];

const productStack = [
  "Gift Cards",
  "Mobile Top Up",
  "eSIM",
  "Flights",
  "Stays",
  "Infrastructure / Integrations",
];

const discoverySurfaces = [
  "Binance App / Mini Program",
  "Gate App / Gate Pay",
  "World App",
  "KuCoin Pay",
  "Bitget Wallet",
  "Krak / Krak Pay",
];

const conversionSurfaces = [
  "Website",
  "Mobile app",
  "Country landing pages",
  "Category landing pages",
  "Checkout rails",
  "Instant delivery trust layer",
  "No-KYC message where relevant",
];

const partnerBuckets = [
  {
    bucket: "Exchange-native",
    items: "Binance, Gate, KuCoin, Krak",
  },
  {
    bucket: "Wallet / app-native",
    items: "World App, Bitget Wallet",
  },
  {
    bucket: "Conversion / rail support",
    items: "Wallets, chain rails, checkout support",
  },
  {
    bucket: "Infrastructure / B2B",
    items: "API, direct integrations, Atomicrails, MCP commerce layer",
  },
];

const segmentBuckets = [
  "Stablecoin utility spenders",
  "Exchange-native spenders",
  "Diaspora support / gifting users",
  "Freelancers / creators spending global earnings",
  "Travel-heavy crypto users",
  "Gaming / digital goods users",
];

const regionBuckets = [
  "Tier 1: Nigeria, Argentina",
  "Tier 2: Philippines, Vietnam",
  "Tier 3: Turkey, Brazil",
];

const leverageItems = [
  "Strong partner-native discovery base already exists",
  "Stablecoin and multi-rail support fits emerging-market utility needs",
  "Broad product stack allows multiple wedges by segment",
];

const gapItems = [
  "Needs clearer wedge versus stronger direct-spend incumbents",
  "Direct onboarding and demand capture weaker than Bitrefill",
  "Partner presence must become active campaign leverage, not passive integration",
  "Country-specific landing and activation discipline must improve",
];

export default function EcosystemPage() {
  return (
    <PageShell>
      <div className="space-y-8">
        <section className="sticky top-0 z-20 -mx-2 border-b border-white/10 bg-slate-950/80 px-2 pb-6 pt-2 backdrop-blur-md">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-4xl">
                <div className="text-sm uppercase tracking-[0.25em] text-blue-300">
                  Page 3
                </div>
                <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  Cryptorefills Ecosystem Map
                </h1>
                <p className="mt-4 text-base leading-7 text-slate-300">
                  The system view of Cryptorefills: how value moves from held crypto to real spend, how users are acquired and routed, which partners create leverage, and where to focus GTM execution.
                </p>
              </div>

              <div className="flex shrink-0 items-center gap-3">
                <span className="rounded-full border border-emerald-400/30 bg-emerald-500/15 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-emerald-300">
                  Active
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {ecosystemCards.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-xl"
            >
              <div className="text-xs uppercase tracking-[0.2em] text-slate-400">
                {item.label}
              </div>
              <div className="mt-3 text-lg font-medium leading-7 text-white">
                {item.value}
              </div>
            </div>
          ))}
        </section>

        <section className="grid items-start gap-6 xl:grid-cols-2">
          <AccordionCard
            title="Product Stack"
            subtitle="What the ecosystem is actually distributing"
            defaultOpen
          >
            <ul className="space-y-3 text-sm leading-6 text-slate-300">
              {productStack.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </AccordionCard>

          <AccordionCard
            title="Discovery Surfaces"
            subtitle="Where new users can actually find Cryptorefills"
            defaultOpen
          >
            <ul className="space-y-3 text-sm leading-6 text-slate-300">
              {discoverySurfaces.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </AccordionCard>

          <AccordionCard
            title="Conversion Surfaces"
            subtitle="What helps users once they are already in the funnel"
          >
            <ul className="space-y-3 text-sm leading-6 text-slate-300">
              {conversionSurfaces.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </AccordionCard>

          <AccordionCard
            title="Partner Map"
            subtitle="How partners should be mentally grouped"
          >
            <div className="space-y-4">
              {partnerBuckets.map((item) => (
                <div
                  key={item.bucket}
                  className="rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="text-sm font-medium text-white">{item.bucket}</div>
                  <div className="mt-2 text-sm leading-6 text-slate-300">
                    {item.items}
                  </div>
                </div>
              ))}
            </div>
          </AccordionCard>

          <AccordionCard
            title="User Segments Served"
            subtitle="Behavioral users the ecosystem can serve well"
          >
            <ul className="space-y-3 text-sm leading-6 text-slate-300">
              {segmentBuckets.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </AccordionCard>

          <AccordionCard
            title="Regional Activation View"
            subtitle="How the ecosystem maps to near-term market expansion"
          >
            <ul className="space-y-3 text-sm leading-6 text-slate-300">
              {regionBuckets.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </AccordionCard>

          <AccordionCard
            title="Current Leverage"
            subtitle="What the company already has working in its favor"
          >
            <ul className="space-y-3 text-sm leading-6 text-slate-300">
              {leverageItems.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </AccordionCard>

          <AccordionCard
            title="Current Gaps"
            subtitle="What still weakens GTM and competitive position"
          >
            <ul className="space-y-3 text-sm leading-6 text-slate-300">
              {gapItems.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </AccordionCard>
        </section>
      </div>
    </PageShell>
  );
}