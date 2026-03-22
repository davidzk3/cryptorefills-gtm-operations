import PageShell from "@/components/page-shell";

export default function PositioningPage() {
  return (
    <PageShell>
      <div className="space-y-8">
        <section className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-xl">
          <div className="text-sm uppercase tracking-[0.25em] text-blue-300">
            Page 2
          </div>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Positioning
          </h1>
          <p className="mt-4 max-w-5xl text-base leading-7 text-slate-300">
            Cryptorefills is a crypto spend engine that lets people use crypto for real world
            needs like mobile data, gift cards, and travel.
          </p>
        </section>

        <section className="grid gap-6 xl:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-xl">
            <h2 className="text-2xl font-semibold text-white">What problem we solve</h2>

            <div className="mt-6 space-y-4">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm leading-7 text-slate-300">
                  Most crypto users can earn, hold, or trade, but they still cannot easily spend
                  crypto on everyday needs.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm leading-7 text-slate-300">
                  In many markets, bank cards do not work reliably for international payments,
                  access to USD is limited, and cashing out crypto can be slow, expensive, or
                  restricted.
                </p>
              </div>

              <div className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-500/10 p-4">
                <p className="text-sm leading-7 text-slate-300">
                  Cryptorefills removes that friction by letting users spend crypto directly on
                  things they already need, like airtime, data, digital services, and travel.
                </p>
              </div>
            </div>
          </div>

<div className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-xl">
  <h2 className="text-2xl font-semibold text-white">Where we should win</h2>

  <div className="mt-6 rounded-xl border border-emerald-400/20 bg-emerald-500/10 p-5">
    <p className="text-base leading-8 text-slate-200">
      The clearest lane is practical crypto spend centered on utility, stablecoin usage, and partner distribution.
    </p>
  </div>

  <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-5">
    <div className="space-y-4">
      <div className="flex items-start gap-3">
        <span className="mt-2 h-2 w-2 rounded-full bg-emerald-400" />
        <p className="text-sm leading-7 text-slate-300">
          Utility-first spend such as airtime, data, and essential digital goods
        </p>
      </div>

      <div className="flex items-start gap-3">
        <span className="mt-2 h-2 w-2 rounded-full bg-emerald-400" />
        <p className="text-sm leading-7 text-slate-300">
          Stablecoin usage with USDT and USDC as natural spending currencies
        </p>
      </div>

      <div className="flex items-start gap-3">
        <span className="mt-2 h-2 w-2 rounded-full bg-emerald-400" />
        <p className="text-sm leading-7 text-slate-300">
          Distribution through wallets and exchanges, not just direct web traffic
        </p>
      </div>
    </div>
  </div>

  <div className="mt-5 rounded-xl border border-emerald-400/20 bg-emerald-500/10 p-5">
    <p className="text-sm leading-7 text-slate-200">
      This position is strongest in markets where users already hold crypto, local payment rails are weak, and digital utility is part of everyday life.
    </p>
  </div>
</div>

<div className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-xl">
  <h2 className="text-2xl font-semibold text-white">Execution focus</h2>

  <div className="mt-6 space-y-4">
    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      <p className="text-sm leading-7 text-slate-300">
        Push users into clear first-use cases.
      </p>
    </div>

    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      <p className="text-sm leading-7 text-slate-300">
        Build growth on repeat quality, not just volume.
      </p>
    </div>

    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      <p className="text-sm leading-7 text-slate-300">
        Prioritize partner-native and in-app distribution over direct traffic competition.
      </p>
    </div>

    <div className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-500/10 p-4">
      <p className="text-sm leading-7 text-slate-200">
        Prioritize markets with real spend pressure, not just crypto ownership.
      </p>
    </div>
  </div>
</div>
        </section>
      </div>
    </PageShell>
  );
}