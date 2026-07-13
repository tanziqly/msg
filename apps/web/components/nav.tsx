"use client"

import { useState, useEffect } from "react"

const links = [
  { label: "О фонде", href: "#about" },
  { label: "Команда", href: "#team" },
  { label: "Услуги", href: "#services" },
  { label: "Аналитика", href: "#insights" },
  { label: "Контакты", href: "#contact" },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-400 ${
        scrolled
          ? "bg-white/97 backdrop-blur-md border-b border-slate-200 shadow-sm"
          : "bg-white/60 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto flex h-16 w-full max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-16">
        <a href="#" className="text-slate-900 font-bold text-xl tracking-widest uppercase">
          MSG
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href}
                className="text-slate-600 hover:text-blue-600 text-sm tracking-wide transition-colors duration-200">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact"
          className="hidden md:inline-flex items-center gap-2 text-sm text-white bg-blue-600 px-6 py-2.5 hover:bg-blue-700 transition-colors duration-200 font-medium">
          Получить консультацию
        </a>

        <button onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2" aria-label="Menu">
          <span className={`block h-0.5 w-6 bg-slate-800 transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-6 bg-slate-800 transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-slate-800 transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-white border-t border-slate-200 px-6 py-6 flex flex-col gap-5 shadow-lg">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-slate-700 text-sm tracking-wide hover:text-blue-600 transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="text-sm text-white bg-blue-600 px-5 py-3 text-center font-medium">
            Получить консультацию
          </a>
        </div>
      )}
    </header>
  )
}
