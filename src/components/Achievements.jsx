import Reveal from './Reveal.jsx'
import { achievements, certifications } from '../data/portfolioData.js'

export default function Achievements() {
  return (
    <section id="achievements" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="eyebrow mb-3">05 · Achievements & Certifications</p>
          <h2 className="font-display text-3xl font-semibold text-textHi sm:text-4xl">
            Recognition along the way.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-12 md:grid-cols-2">
          <Reveal delay={60}>
            <h3 className="font-mono text-xs uppercase tracking-wide text-textLo">Achievements</h3>
            <ol className="mt-5 space-y-5 border-l border-line pl-6">
              {achievements.map((a) => (
                <li key={a.title} className="relative">
                  <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-amber" />
                  <p className="text-sm leading-relaxed text-textHi">{a.title}</p>
                  <p className="font-mono text-[11px] text-textLo">{a.year}</p>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={120}>
            <h3 className="font-mono text-xs uppercase tracking-wide text-textLo">Certifications</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {certifications.map((c) => (
                <div key={c.title} className="rounded-xl border border-line bg-surface p-4">
                  <p className="text-sm text-textHi">{c.title}</p>
                  <p className="mt-1 font-mono text-[11px] text-mint">
                    {c.issuer}
                    {c.year ? ` · ${c.year}` : ''}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
