import Reveal from './Reveal.jsx'
import { profile, strengths } from '../data/portfolioData.js'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <p className="eyebrow mb-3">01 · About</p>
        <h2 className="font-display text-3xl font-semibold text-textHi sm:text-4xl">
          Building at the edge of AI and data.
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-12 md:grid-cols-5">
        <Reveal className="md:col-span-3" delay={80}>
          <p className="text-base leading-relaxed text-textLo sm:text-lg">{profile.about}</p>
        </Reveal>

        <Reveal className="md:col-span-2" delay={160}>
          <div className="rounded-2xl border border-line bg-surface p-6">
            <p className="eyebrow mb-4">Strengths</p>
            <ul className="flex flex-wrap gap-2">
              {strengths.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-line px-3 py-1.5 font-mono text-xs text-textLo"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
