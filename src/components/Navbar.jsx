import { useEffect, useState } from 'react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#analytics', label: 'Analytics' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? 'bg-ink/90 backdrop-blur border-b border-line' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-lg font-semibold tracking-tight text-textHi">
          VD<span className="text-mint">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 font-mono text-sm text-textLo">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-mint">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/resume.pdf"
          download
          className="hidden md:inline-flex items-center rounded-full border border-mint/40 px-4 py-2 font-mono text-xs uppercase tracking-wide text-mint transition-colors hover:bg-mint hover:text-ink"
        >
          Resume
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-textHi"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-line bg-ink px-6 py-4">
          <ul className="flex flex-col gap-4 font-mono text-sm text-textLo">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="hover:text-mint">
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href="/resume.pdf" download className="text-mint">
                Download Résumé
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
