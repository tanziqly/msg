const innovations = [
  {
    stat: "65%",
    statNote: "врачей используют ИИ",
    title: "Искусственный интеллект",
    body: "СППВР, ИИ-диагностика снимков (МРТ, КТ, рентген), онкоскрининг. Рост сегмента CAGR 32,9% — самый быстрорастущий сектор медтеха.",
    color: "bg-blue-600",
  },
  {
    stat: "19,5%",
    statNote: "CAGR телемедицины",
    title: "Телемедицина",
    body: "Дистанционные консультации и мониторинг расширяют охват на сельские регионы. Главный драйвер роста медтех-рынка по данным Smart Ranking.",
    color: "bg-slate-800",
  },
  {
    stat: "323 млрд",
    statNote: "рынок диагностики к 2030 ₽",
    title: "Лабораторная диагностика",
    body: "Генетические, молекулярные и превентивные тесты — смещение фокуса от лечения к профилактике. CAGR 13% за счёт цифровизации и ИИ.",
    color: "bg-blue-500",
  },
  {
    stat: "+49,6%",
    statNote: "рост IoMT квартал к кварталу",
    title: "Интернет медицинских вещей",
    body: "Носимые устройства, умные сенсоры и подключённое оборудование формируют непрерывный контур наблюдения за здоровьем пациента.",
    color: "bg-slate-700",
  },
]

export function Innovation() {
  return (
    <section id="innovation" className="bg-white py-28 lg:py-36 border-t border-slate-100">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">

        {/* header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end mb-16">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-0.5 bg-blue-600" />
              <p className="text-blue-600 text-[11px] tracking-[0.3em] uppercase font-semibold">Инновации</p>
            </div>
            <h2 className="font-light text-slate-900 tracking-tight leading-tight"
              style={{ fontSize: "clamp(30px, 4vw, 52px)" }}>
              Технологии,<br />меняющие медицину
            </h2>
          </div>
          <p className="text-slate-500 text-base leading-relaxed lg:max-w-[44ch] lg:self-end">
            Компании, внедряющие цифровые решения, растут в 2–3 раза быстрее классических
            игроков. Это формирует привлекательную инвестиционную возможность.
          </p>
        </div>

        {/* big photo + cards layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-6 mb-6">
          {/* left big photo with overlay */}
          <div className="relative overflow-hidden min-h-[400px] lg:row-span-2">
            <img
              src="https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=900&q=80&auto=format&fit=crop"
              alt="Medical technology"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="text-blue-300 text-xs tracking-widest uppercase mb-2">Цифровая трансформация</p>
              <p className="text-white text-2xl font-light leading-snug mb-3">
                Платформенные игроки<br />растут на CAGR 23%+
              </p>
              <p className="text-slate-300 text-sm">
                Против 13% у классических медицинских компаний
              </p>
            </div>
          </div>

          {/* right 2x2 grid */}
          {innovations.map((item) => (
            <div key={item.title}
              className={`${item.color} text-white p-7 flex flex-col justify-between min-h-[190px] group hover:opacity-95 transition-opacity duration-200`}>
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-3xl font-light tracking-tight">{item.stat}</p>
                    <p className="text-white/50 text-xs mt-0.5">{item.statNote}</p>
                  </div>
                </div>
                <p className="text-white/70 text-xs tracking-widest uppercase mb-2">{item.title}</p>
                <p className="text-white/80 text-sm leading-relaxed">{item.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* bottom: second photo strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative overflow-hidden h-[220px]">
            <img
              src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=600&q=80&auto=format&fit=crop"
              alt="Lab diagnostics"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-slate-900/30" />
            <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Лабораторная диагностика</p>
          </div>
          <div className="relative overflow-hidden h-[220px]">
            <img
              src="https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=600&q=80&auto=format&fit=crop"
              alt="Telemedicine"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-slate-900/30" />
            <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Телемедицина</p>
          </div>
          <div className="relative overflow-hidden h-[220px]">
            <img
              src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&q=80&auto=format&fit=crop"
              alt="AI diagnostics"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-slate-900/30" />
            <p className="absolute bottom-4 left-4 text-white text-sm font-medium">ИИ-диагностика</p>
          </div>
        </div>
      </div>
    </section>
  )
}
