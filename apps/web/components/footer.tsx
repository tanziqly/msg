export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-10 md:gap-8 mb-14">
          <div>
            <p className="text-white font-bold text-xl tracking-widest uppercase mb-3">MSG</p>
            <p className="text-slate-500 text-sm leading-relaxed max-w-[30ch] mb-4">
              Инвестиции и решения для рынка здравоохранения России.
            </p>
            <a href="https://msgco.ru" className="text-slate-500 text-xs hover:text-blue-400 transition-colors">
              msgco.ru →
            </a>
          </div>

          {[
            { title: "Компания", links: [{ l: "О компании", h: "#about" }, { l: "Направления", h: "#services" }, { l: "Команда", h: "#team" }, { l: "Аналитика", h: "#insights" }] },
            { title: "Направления", links: [{ l: "Медуслуги", h: "#services" }, { l: "Диагностика", h: "#services" }, { l: "Медтех", h: "#services" }, { l: "Инвестиции", h: "#services" }] },
            { title: "Контакты", links: [{ l: "info@msgco.ru", h: "mailto:info@msgco.ru" }, { l: "+7 (495) 123-45-67", h: "tel:+74951234567" }, { l: "Москва, Россия", h: undefined }] },
          ].map((col) => (
            <div key={col.title}>
              <p className="text-slate-400 text-[10px] tracking-[0.25em] uppercase mb-4">{col.title}</p>
              <ul className="flex flex-col gap-3">
                {col.links.map((l) => (
                  <li key={l.l}>
                    {l.h ? (
                      <a href={l.h} className="text-slate-600 text-sm hover:text-white transition-colors duration-200">{l.l}</a>
                    ) : (
                      <span className="text-slate-700 text-sm">{l.l}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-700 text-xs">© 2025 MSG. Все права защищены.</p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-700 text-xs hover:text-slate-400 transition-colors">Политика конфиденциальности</a>
            <a href="#" className="text-slate-700 text-xs hover:text-slate-400 transition-colors">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
