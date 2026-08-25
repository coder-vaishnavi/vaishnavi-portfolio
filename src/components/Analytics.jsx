import Reveal from './Reveal.jsx'
import { internshipExperience } from '../data/portfolioData.js'

export default function Internship() {
  return (
    <section id="experience" className="border-t border-line bg-surface/40 py-28">
      <div className="mx-auto max-w-6xl px-6">

        <Reveal>
          <p className="eyebrow mb-3">04 · Experience</p>

          <h2 className="font-display text-3xl font-semibold text-textHi sm:text-4xl">
            Building, learning, and contributing.
          </h2>
          <h1 className="font-display text-3xl font-semibold text-textHi sm:text-4xl">
            IBM SkillsBuild — Data Analytics with AI Intern | Aug 2026 – Present
Selected for the 6-week Virtual IBM SkillsBuild Data Analytics with AI Internship 2026, offered in collaboration with
AICTE, designed to build foundational knowledge in Data Science and Data Analytics.
          </h1>
        </Reveal>

        <div className="mt-10">
          {internshipExperience.map((internship, i) => (
            <Reveal key={internship.company} delay={i * 80}>
              <article className="card-hover rounded-2xl border border-line bg-surface p-6 md:p-8">

                <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">

                  <div>
                    <p className="font-mono text-xs text-mint">
                      {internship.duration}
                    </p>

                    <h3 className="mt-2 font-display text-2xl font-semibold text-textHi">
                      {internship.role}
                    </h3>

                    <p className="mt-1 text-base text-textLo">
                      {internship.company}
                    </p>
                  </div>

                  <span className="w-fit rounded-full border border-mint/30 bg-mint/10 px-3 py-1 font-mono text-xs text-mint">
                    {internship.status}
                  </span>

                </div>

                <p className="mt-6 max-w-3xl text-sm leading-relaxed text-textLo">
                  {internship.description}
                </p>

                <div className="mt-6">
                  <p className="mb-3 font-mono text-xs uppercase tracking-wider text-textLo">
                    Technologies
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {internship.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full bg-ink px-3 py-1.5 font-mono text-[10px] text-textLo"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <p className="mb-3 font-mono text-xs uppercase tracking-wider text-textLo">
                    What I worked on
                  </p>

                  <ul className="space-y-2 text-sm text-textLo">
                    {internship.work.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="text-mint">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </article>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}