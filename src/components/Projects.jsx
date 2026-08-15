import { useState } from 'react'
import Reveal from './Reveal.jsx'
import { projects } from '../data/portfolioData.js'

const filters = ['All', 'AI/ML', 'Web/Backend']

export default function Projects() {
  const [active, setActive] = useState('All')
  const visible = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="projects" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="eyebrow mb-3">03 · Projects</p>
          <h2 className="font-display text-3xl font-semibold text-textHi sm:text-4xl">
            Things I've shipped.
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-8 flex gap-2 font-mono text-xs">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`rounded-full border px-4 py-2 transition-colors ${
                  active === f
                    ? 'border-mint bg-mint text-ink'
                    : 'border-line text-textLo hover:border-mint hover:text-mint'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {visible.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <article className="card-hover flex h-full flex-col rounded-2xl border border-line bg-surface p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-lg text-textHi">{p.title}</h3>
                  <span className="font-mono text-[10px] uppercase text-textLo">{p.period}</span>
                </div>
                <p className="mt-1 font-mono text-xs text-mint">{p.subtitle}</p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-textLo">{p.summary}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="rounded-full bg-ink px-2.5 py-1 font-mono text-[10px] text-textLo">
                      {s}
                    </span>
                  ))}
                </div>

                {p.result && (
                  <p className="mt-4 rounded-lg border border-amber/30 bg-amber/5 px-3 py-2 font-mono text-[11px] text-amber">
                    🏆 {p.result}
                  </p>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
