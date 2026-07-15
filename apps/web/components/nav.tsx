"use client"

import { useState, useEffect } from "react"

const links = [
  { label: "О фонде", href: "#about" },
  { label: "Команда", href: "#team" },
  { label: "Услуги", href: "#services" },
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
          ? "border-b border-slate-200 bg-white/97 shadow-sm backdrop-blur-md"
          : "bg-white/60 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto flex h-16 w-full max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-16">
        <a
          href="#"
          className="text-xl font-bold tracking-widest text-slate-900 uppercase"
        >
          MSG
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm tracking-wide text-slate-600 transition-colors duration-200 hover:text-blue-600"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden items-center gap-2 bg-blue-600 px-6 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-700 md:inline-flex"
        >
          Получить консультацию
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1.5 p-2 md:hidden"
          aria-label="Menu"
        >
          <span
            className={`block h-0.5 w-6 bg-slate-800 transition-all duration-300 ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-slate-800 transition-all duration-300 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-slate-800 transition-all duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {open && (
        <div className="flex flex-col gap-5 border-t border-slate-200 bg-white px-6 py-6 shadow-lg md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm tracking-wide text-slate-700 transition-colors hover:text-blue-600"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-blue-600 px-5 py-3 text-center text-sm font-medium text-white"
          >
            Получить консультацию
          </a>
        </div>
      )}
    </header>
  )
}
