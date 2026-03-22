import PageShell from "@/components/page-shell";

const kpis = [
  {
    label: "Growth Budget",
    value: "$50K",
    note: "Apr–Dec 2026 modeled rollout",
  },
  {
    label: "First-Purchase Users",
    value: "12,426",
    note: "Base case from current workbook",
  },
  {
    label: "30d Repeat Users",
    value: "3,488",
    note: "Repeat signal from first-purchase cohorts",
  },
  {
    label: "Blended CAC",
    value: "$4.02",
    note: "Base case across all modeled channels",
  },
];

const assumptions = [
  {
    metric: "Average Order Value",
    value: "$37.31",
    notes: "Weighted blended AOV from current channel/category mix",
  },
  {
    metric: "Take Rate",
    value: "8.25%",
    notes: "Weighted blended take rate from modeled category mix",
  },
  {
    metric: "Gross Margin on Revenue",
    value: "79.17%",
    notes: "Weighted blended margin after supplier / delivery economics",
  },
  {
    metric: "Gross Profit per Order",
    value: "$1.82",
    notes: "Weighted across top up/data, gift cards, eSIM, and travel",
  },
  {
    metric: "Year-1 GP per User",
    value: "$10.13",
    notes: "Weighted current cohort contribution estimate",
  },
  {
    metric: "30-Day Repeat Rate",
    value: "27.4%",
    notes: "Weighted repeat rate across modeled channels",
  },
  {
    metric: "Year-1 Orders per User",
    value: "5.74",
    notes: "Weighted order frequency assumption from the workbook",
  },
];

const channelEconomics = [
  {
    channel: "Partner campaign placements",
    budget: 16000,
    cac: 2.75,
    quality: "Very High",
    role: "Primary acquisition layer through exchanges and wallets",
    fpu: 5818,
    gpPerUser: 10.74,
    payback: 3.07,
  },
  {
    channel: "Utility-led creators",
    budget: 10000,
    cac: 4.5,
    quality: "High",
    role: "Localized trust, proof, and use-case education",
    fpu: 2222,
    gpPerUser: 8.46,
    payback: 6.38,
  },
  {
    channel: "Search intent capture",
    budget: 8000,
    cac: 5.5,
    quality: "High",
    role: "Captures already-formed practical demand",
    fpu: 1455,
    gpPerUser: 9.91,
    payback: 6.66,
  },
  {
    channel: "Referral & community incentives",
    budget: 5000,
    cac: 3.25,
    quality: "Medium to High",
    role: "Compounding layer tied to second-purchase quality",
    fpu: 1538,
    gpPerUser: 11.31,
    payback: 3.45,
  },
  {
    channel: "Nigeria activation",
    budget: 7000,
    cac: 3.75,
    quality: "High",
    role: "Localized utility wedge and fast learning loop",
    fpu: 1867,
    gpPerUser: 10.94,
    payback: 4.11,
  },
  {
    channel: "World Cup burst",
    budget: 4000,
    cac: 4.25,
    quality: "Event-driven",
    role: "Seasonal utility, gifting, and travel burst",
    fpu: 941,
    gpPerUser: 9.45,
    payback: 5.4,
  },
];

const monthlyRamp = [
  { month: "Apr", spend: 4460, fpu: 877, repeat: 261, gmv: 38132, gp: 1914 },
  { month: "May", spend: 5070, fpu: 1109, repeat: 328, gmv: 48573, gp: 2432 },
  { month: "Jun", spend: 6990, fpu: 1652, repeat: 455, gmv: 78850, gp: 3853 },
  { month: "Jul", spend: 8460, fpu: 2388, repeat: 634, gmv: 119004, gp: 5750 },
  { month: "Aug", spend: 6640, fpu: 1723, repeat: 473, gmv: 82431, gp: 4030 },
  { month: "Sep", spend: 5290, fpu: 1312, repeat: 375, gmv: 60506, gp: 2990 },
  { month: "Oct", spend: 4720, fpu: 1174, repeat: 338, gmv: 54018, gp: 2674 },
  { month: "Nov", spend: 4350, fpu: 1125, repeat: 320, gmv: 52281, gp: 2582 },
  { month: "Dec", spend: 4020, fpu: 1066, repeat: 303, gmv: 49513, gp: 2443 },
].map((row) => ({
  ...row,
  cac: Number((row.spend / row.fpu).toFixed(2)),
}));

const ltvCac = [
  { label: "CAC", value: "$4.02", note: "Blended acquisition cost" },
  { label: "Year-1 GP / User", value: "$10.13", note: "Current modeled cohort contribution" },
  { label: "GP / CAC", value: "2.52x", note: "Using year-1 GP per user divided by blended CAC" },
];

const nigeriaMetrics = [
  { label: "Modeled Budget", value: "$7K" },
  { label: "FPUs", value: "1,859" },
  { label: "30d Repeat Users", value: "543" },
  { label: "Year-1 Cohort GP", value: "$15.1K" },
];

const growthLogic = [
  "This model is intentionally conservative and is meant to become more precise once current channel, product, and regional performance data is available.",
  "The economics are driven less by raw traffic and more by first-purchase quality, repeat behavior, and category mix.",
  "Partner campaign placements carry the strongest first-purchase volume at the lowest CAC in the current base case.",
  "The World Cup burst adds useful seasonal volume, but it is not the core engine. The long-term economics still depend on repeat-prone utility behavior.",
];

const googleSheetUrl = "https://docs.google.com/spreadsheets/d/1NIqRxXUEXI8IZeCHFkk3yIAET9AmjaDySQ8Rl9nzE10/edit?usp=sharing";

function formatMoney(value: number) {
  return `$${value.toLocaleString()}`;
}

function VerticalBarChart({
  title,
  subtitle,
  data,
  colorClass,
  valueKey,
  format,
}: {
  title: string;
  subtitle: string;
  data: { month: string; [key: string]: number | string }[];
  colorClass: string;
  valueKey: string;
  format?: (v: number) => string;
}) {
  const max = Math.max(...data.map((d) => Number(d[valueKey])));
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-xl">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-400">{subtitle}</p>

      <div className="mt-6 flex h-64 items-end gap-3">
        {data.map((item) => {
          const value = Number(item[valueKey]);
          const height = `${(value / max) * 100}%`;
          return (
            <div key={`${title}-${item.month}`} className="flex flex-1 flex-col items-center">
              <div className="mb-2 text-xs text-slate-400">
                {format ? format(value) : value.toLocaleString()}
              </div>
              <div className="flex h-44 w-full items-end">
                <div
                  className={`w-full rounded-t-md ${colorClass}`}
                  style={{ height }}
                />
              </div>
              <div className="mt-3 text-xs uppercase tracking-[0.2em] text-slate-500">
                {item.month}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function HorizontalBarChart({
  title,
  subtitle,
  data,
}: {
  title: string;
  subtitle: string;
  data: { channel: string; budget: number }[];
}) {
  const max = Math.max(...data.map((d) => d.budget));
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-xl">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-400">{subtitle}</p>

      <div className="mt-6 space-y-4">
        {data.map((item) => (
          <div key={item.channel}>
            <div className="mb-2 flex items-center justify-between gap-4 text-sm">
              <span className="text-slate-200">{item.channel}</span>
              <span className="text-slate-400">{formatMoney(item.budget)}</span>
            </div>
            <div className="h-3 rounded-full bg-white/5">
              <div
                className="h-3 rounded-full bg-blue-500/70"
                style={{ width: `${(item.budget / max) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function UnitEconomicsPage() {
  return (
    <PageShell>
      <div className="space-y-8">
        <section className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-xl">
          <div className="text-sm uppercase tracking-[0.25em] text-blue-300">
            Page 10
          </div>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Unit Economics & Growth Model
          </h1>
          <p className="mt-4 max-w-5xl text-base leading-7 text-slate-300">
            A conservative operating model for acquisition cost, first purchase conversion,
            repeat behavior, and revenue logic. The aim is not perfect precision today, but
            a clear baseline that becomes more robust with live performance data.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {kpis.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-xl"
            >
              <div className="text-xs uppercase tracking-[0.2em] text-slate-400">
                {item.label}
              </div>
              <div className="mt-3 text-2xl font-semibold text-white">{item.value}</div>
              <div className="mt-2 text-sm leading-6 text-slate-400">{item.note}</div>
            </div>
          ))}
        </section>

        <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 shadow-xl">
            <div className="border-b border-white/10 px-6 py-5">
              <h2 className="text-2xl font-semibold text-white">Key Assumptions</h2>
              <p className="mt-2 text-sm text-slate-400">
                Current weighted assumptions pulled from the workbook model.
              </p>
            </div>

            <table className="min-w-full text-left text-sm">
              <thead className="bg-white/5 text-slate-300">
                <tr>
                  <th className="px-6 py-4 font-medium">Metric</th>
                  <th className="px-6 py-4 font-medium">Value</th>
                  <th className="px-6 py-4 font-medium">Notes</th>
                </tr>
              </thead>
              <tbody>
                {assumptions.map((row, idx) => (
                  <tr
                    key={row.metric}
                    className={idx % 2 === 0 ? "bg-blue-500/10" : "border-t border-white/5"}
                  >
                    <td className="px-6 py-5 font-medium text-white">{row.metric}</td>
                    <td className="px-6 py-5 text-slate-200">{row.value}</td>
                    <td className="px-6 py-5 text-slate-300">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="rounded-2xl border border-indigo-400/20 bg-indigo-500/10 p-6 shadow-xl">
            <div className="text-xs uppercase tracking-[0.2em] text-indigo-300">
              Full Model
            </div>
            <h2 className="mt-3 text-2xl font-semibold text-white">Google Sheets</h2>
            <p className="mt-4 text-sm leading-7 text-slate-200">
              The full working model includes assumptions, channel CAC, monthly ramp,
              Nigeria economics, dashboard outputs, and scenario analysis.
            </p>
            <a
              href={googleSheetUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex rounded-xl border border-indigo-300/30 bg-indigo-400/10 px-4 py-3 text-sm font-medium text-indigo-200 transition hover:bg-indigo-400/20"
            >
              Open full model →
            </a>
          </div>
        </section>

        <section className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 shadow-xl">
          <div className="border-b border-white/10 px-6 py-5">
            <h2 className="text-2xl font-semibold text-white">Channel Economics</h2>
            <p className="mt-2 text-sm text-slate-400">
              Growth budget should follow payback quality, not just raw reach.
            </p>
          </div>

          <table className="min-w-full text-left text-sm">
            <thead className="bg-white/5 text-slate-300">
              <tr>
                <th className="px-6 py-4 font-medium">Channel</th>
                <th className="px-6 py-4 font-medium">Budget</th>
                <th className="px-6 py-4 font-medium">CAC</th>
                <th className="px-6 py-4 font-medium">FPUs</th>
                <th className="px-6 py-4 font-medium">Year-1 GP / User</th>
                <th className="px-6 py-4 font-medium">Payback (months)</th>
                <th className="px-6 py-4 font-medium">Role</th>
              </tr>
            </thead>
            <tbody>
              {channelEconomics.map((row, idx) => (
                <tr
                  key={row.channel}
                  className={idx % 2 === 0 ? "bg-blue-500/10" : "border-t border-white/5"}
                >
                  <td className="px-6 py-5 font-medium text-white">{row.channel}</td>
                  <td className="px-6 py-5 text-slate-200">{formatMoney(row.budget)}</td>
                  <td className="px-6 py-5 text-slate-200">${row.cac.toFixed(2)}</td>
                  <td className="px-6 py-5 text-slate-200">{row.fpu.toLocaleString()}</td>
                  <td className="px-6 py-5 text-slate-200">${row.gpPerUser.toFixed(2)}</td>
                  <td className="px-6 py-5 text-slate-300">{row.payback.toFixed(2)}</td>
                  <td className="px-6 py-5 text-slate-300">{row.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="grid gap-6 xl:grid-cols-2">
          <VerticalBarChart
            title="Monthly Spend"
            subtitle="Actual monthly budget deployment from the current base case"
            data={monthlyRamp}
            colorClass="bg-blue-500/70"
            valueKey="spend"
            format={(v) => formatMoney(v)}
          />

          <VerticalBarChart
            title="First-Purchase Users"
            subtitle="First-purchase output by month from the current model"
            data={monthlyRamp}
            colorClass="bg-emerald-500/70"
            valueKey="fpu"
            format={(v) => `${v.toLocaleString()}`}
          />
        </section>

        <section className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 shadow-xl">
            <div className="border-b border-white/10 px-6 py-5">
              <h2 className="text-2xl font-semibold text-white">Monthly Ramp</h2>
              <p className="mt-2 text-sm text-slate-400">
                Spend, first purchases, 30d repeat users, and CAC by month.
              </p>
            </div>

            <table className="min-w-full text-left text-sm">
              <thead className="bg-white/5 text-slate-300">
                <tr>
                  <th className="px-6 py-4 font-medium">Month</th>
                  <th className="px-6 py-4 font-medium">Spend</th>
                  <th className="px-6 py-4 font-medium">FPUs</th>
                  <th className="px-6 py-4 font-medium">30d Repeat</th>
                  <th className="px-6 py-4 font-medium">CAC</th>
                </tr>
              </thead>
              <tbody>
                {monthlyRamp.map((row, idx) => (
                  <tr
                    key={row.month}
                    className={idx % 2 === 0 ? "bg-blue-500/10" : "border-t border-white/5"}
                  >
                    <td className="px-6 py-5 font-medium text-white">{row.month}-26</td>
                    <td className="px-6 py-5 text-slate-200">{formatMoney(row.spend)}</td>
                    <td className="px-6 py-5 text-slate-200">{row.fpu.toLocaleString()}</td>
                    <td className="px-6 py-5 text-slate-200">{row.repeat.toLocaleString()}</td>
                    <td className="px-6 py-5 text-slate-300">${row.cac.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <HorizontalBarChart
            title="Budget by Channel"
            subtitle="Most capital sits in partner placements, creators, and Nigeria/search layers"
            data={channelEconomics.map((row) => ({
              channel: row.channel,
              budget: row.budget,
            }))}
          />
        </section>

        <section className="grid gap-6 xl:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-xl">
            <h2 className="text-2xl font-semibold text-white">LTV vs CAC</h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              High-level unit economics view based on the current workbook assumptions.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {ltvCac.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    {item.label}
                  </div>
                  <div className="mt-3 text-2xl font-semibold text-white">{item.value}</div>
                  <div className="mt-2 text-sm leading-6 text-slate-400">{item.note}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-emerald-400/20 bg-emerald-500/10 p-5">
              <p className="text-sm leading-7 text-slate-200">
                The base case is intentionally conservative. With current live data on channels,
                regional cohorts, product mix, and repeat performance, the model becomes a more
                realistic operating tool rather than just a planning baseline.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-xl">
            <h2 className="text-2xl font-semibold text-white">Nigeria Economics</h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Nigeria is modeled as a lower-ticket but faster-learning utility market.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {nigeriaMetrics.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    {item.label}
                  </div>
                  <div className="mt-3 text-xl font-semibold text-white">{item.value}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-blue-400/20 bg-blue-500/10 p-5">
              <p className="text-sm leading-7 text-slate-200">
                The weighted Nigeria cohort currently models about <strong>$8.15</strong> of year-1 GP
                per user. The value of the market is less about headline ticket size and more about
                repeat-prone utility behavior and fast GTM learning.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-xl">
          <h2 className="text-2xl font-semibold text-white">Operating Notes</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {growthLogic.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-white/10 bg-white/5 p-4"
              >
                <p className="text-sm leading-7 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageShell>
  );
}