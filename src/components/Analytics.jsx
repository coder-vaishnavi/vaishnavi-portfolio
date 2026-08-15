import Reveal from './Reveal.jsx'
import { analyticsCaseStudies } from '../data/portfolioData.js'

export default function Analytics() {
  return (
    <section id="analytics" className="border-t border-line bg-surface/40 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="eyebrow mb-3">04 · Data Analytics</p>
          <h2 className="font-display text-3xl font-semibold text-textHi sm:text-4xl">
            Case studies, not just charts.
          </h2>
          <p className="mt-4 max-w-2xl text-textLo">
            Each case study follows: business question → data source → method → insight → recommendation.
            Replace the placeholder below with your own SQL / Power BI / Python analyses.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {analyticsCaseStudies.map((c, i) => (
            <Reveal key={c.title} delay={i * 80}>
              <article className="card-hover h-full rounded-2xl border border-dashed border-line bg-surface p-6">
                <h3 className="font-display text-lg text-textHi">{c.title}</h3>
                <p className="mt-2 font-mono text-xs text-mint">{c.question}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {c.tools.map((t) => (
                    <span key={t} className="rounded-full bg-ink px-2.5 py-1 font-mono text-[10px] text-textLo">
                      {t}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-textLo">{c.insight}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
