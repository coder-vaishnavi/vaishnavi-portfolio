import Reveal from './Reveal.jsx'
import { profile } from '../data/portfolioData.js'

export default function Contact() {
  return (
    <section id="contact" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="eyebrow mb-3">07 · Contact</p>
          <h2 className="font-display text-3xl font-semibold text-textHi sm:text-4xl">
            Let's build something.
          </h2>
          <p className="mt-4 max-w-xl text-textLo">
            Open to internships and entry-level roles in AI/ML and data analytics. Reach out directly, or connect on
            LinkedIn / GitHub.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <a
              href={`mailto:${profile.email}`}
              className="card-hover rounded-2xl border border-line bg-surface p-6 text-center"
            >
              <p className="font-mono text-xs text-textLo">Email</p>
              <p className="mt-2 text-sm text-textHi break-all">{profile.email}</p>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="card-hover rounded-2xl border border-line bg-surface p-6 text-center"
            >
              <p className="font-mono text-xs text-textLo">LinkedIn</p>
              <p className="mt-2 text-sm text-mint">vaishnavideshmukh01</p>
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="card-hover rounded-2xl border border-line bg-surface p-6 text-center"
            >
              <p className="font-mono text-xs text-textLo">GitHub</p>
              <p className="mt-2 text-sm text-mint">coder-vaishnavi</p>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
