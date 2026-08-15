import Reveal from './Reveal.jsx'
import { education } from '../data/portfolioData.js'

export default function Education() {
  return (
    <section id="education" className="border-t border-line bg-surface/40 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="eyebrow mb-3">06 · Education</p>
          <h2 className="font-display text-3xl font-semibold text-textHi sm:text-4xl">
            Academic background.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {education.map((e, i) => (
            <Reveal key={e.degree} delay={i * 80}>
              <div className="h-full rounded-2xl border border-line bg-surface p-6">
                <p className="font-display text-base text-textHi">{e.degree}</p>
                <p className="mt-2 text-sm text-textLo">{e.school}</p>
                <p className="mt-4 font-mono text-xs text-mint">{e.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
