import { useEffect, useState } from 'react'
import NodeGraph from './NodeGraph.jsx'
import { profile } from '../data/portfolioData.js'

const roles = ['AI/ML Engineer', 'Data Analyst', 'Python Developer', 'GenAI Builder']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [display, setDisplay] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    const speed = deleting ? 45 : 80
    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, display.length + 1)
        setDisplay(next)
        if (next === current) setTimeout(() => setDeleting(true), 1100)
      } else {
        const next = current.slice(0, display.length - 1)
        setDisplay(next)
        if (next === '') {
          setDeleting(false)
          setRoleIndex((i) => (i + 1) % roles.length)
        }
      }
    }, speed)
    return () => clearTimeout(timeout)
  }, [display, deleting, roleIndex])

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden bg-ink">
      <div className="absolute inset-0 bg-grid bg-[size:44px_44px] opacity-40" />
      <div className="absolute inset-0">
        <NodeGraph />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/20" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-24">
        <p className="eyebrow mb-5">Portfolio · {profile.location}</p>
        <h1 className="font-display text-5xl font-semibold leading-[1.05] text-textHi sm:text-6xl md:text-7xl">
          {profile.name}
        </h1>
        <div className="mt-4 h-9 font-mono text-lg text-mint sm:text-xl">
          {display}
          <span className="animate-pulse">_</span>
        </div>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-textLo sm:text-lg">
          {profile.pitch}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-mint px-6 py-3 font-mono text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-line px-6 py-3 font-mono text-sm text-textHi transition-colors hover:border-mint hover:text-mint"
          >
            Get in Touch
          </a>
        </div>

        <div className="mt-16 grid max-w-xl grid-cols-2 gap-6 sm:grid-cols-4">
          {profile.stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-2xl text-textHi">{s.value}</div>
              <div className="font-mono text-[11px] uppercase tracking-wide text-textLo">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 font-mono text-xs text-textLo transition-colors hover:text-mint"
      >
        scroll ↓
      </a>
    </section>
  )
}
