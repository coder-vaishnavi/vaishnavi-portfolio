export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 font-mono text-xs text-textLo sm:flex-row">
        <p>© {new Date().getFullYear()} Vaishnavi Deshmukh</p>
        <p>Built with React & Tailwind</p>
      </div>
    </footer>
  )
}
