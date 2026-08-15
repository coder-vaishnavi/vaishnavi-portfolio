import Reveal from './Reveal.jsx'
import { skills } from '../data/portfolioData.js'

export default function Skills() {
  return (
    <section id="skills" className="border-t border-line bg-surface/40 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="eyebrow mb-3">02 · Skills</p>
          <h2 className="font-display text-3xl font-semibold text-textHi sm:text-4xl">
            Tools I reach for.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <Reveal key={group.category} delay={i * 60}>
              <div className="card-hover h-full rounded-2xl border border-line bg-surface p-6">
                <h3 className="font-display text-base text-textHi">{group.category}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-ink px-3 py-1.5 font-mono text-xs text-mint"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
