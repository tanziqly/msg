"use client"

import { Animate } from "@/components/animate"

export function Contact() {
  return (
    <section id="contact" className="bg-slate-900 py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-16">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
          <Animate direction="left">
            <div>
              <div className="mb-8 flex items-center gap-4">
                <div className="h-0.5 w-8 bg-blue-400" />
                <p className="text-[11px] font-semibold tracking-[0.3em] text-blue-400 uppercase">
                  Контакты
                </p>
              </div>
              <h2
                className="mb-6 leading-tight font-light tracking-tight text-white"
                style={{ fontSize: "clamp(36px, 5vw, 68px)" }}
              >
                Мы открыты к
                <br />
                сотрудничеству
              </h2>
              <p className="mb-12 max-w-[44ch] text-base leading-relaxed text-slate-400">
                MSG - партнеры и эксперты в области медицинских активов.
              </p>
              <div className="flex flex-col gap-5">
                {[
                  {
                    label: "Email",
                    value: "General@msgco.ru",
                    href: "mailto:General @msgco.ru",
                  },
                  {
                    label: "Телефон",
                    value: "+7 (499) 648-84-40",
                    href: "tel:+74996488440",
                  },
                  {
                    label: "Адрес",
                    value: "Воробьевское шоссе, 6",
                    href: undefined,
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-6 border-b border-slate-800 pb-5"
                  >
                    <span className="w-16 shrink-0 text-xs tracking-wider text-slate-600 uppercase">
                      {item.label}
                    </span>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm text-slate-300 transition-colors hover:text-blue-400"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-sm text-slate-400">
                        {item.value}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Animate>

          <Animate direction="right">
            <form
              className="flex flex-col gap-5 bg-white p-8 lg:p-10"
              onSubmit={(e) => e.preventDefault()}
            >
              <h3 className="mb-2 text-xl font-medium text-slate-900">
                Оставьте заявку
              </h3>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="text-xs tracking-wide text-slate-500 uppercase">
                    Имя
                  </label>
                  <input
                    type="text"
                    placeholder="Иван Иванов"
                    className="border border-slate-200 px-4 py-3 text-sm text-slate-900 transition-colors placeholder:text-slate-300 focus:border-blue-400 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs tracking-wide text-slate-500 uppercase">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="ivan@company.ru"
                    className="border border-slate-200 px-4 py-3 text-sm text-slate-900 transition-colors placeholder:text-slate-300 focus:border-blue-400 focus:outline-none"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs tracking-wide text-slate-500 uppercase">
                  Компания
                </label>
                <input
                  type="text"
                  placeholder="Название организации"
                  className="border border-slate-200 px-4 py-3 text-sm text-slate-900 transition-colors placeholder:text-slate-300 focus:border-blue-400 focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs tracking-wide text-slate-500 uppercase">
                  Сообщение
                </label>
                <textarea
                  rows={4}
                  placeholder="Расскажите о вашем проекте или активе..."
                  className="resize-none border border-slate-200 px-4 py-3 text-sm text-slate-900 transition-colors placeholder:text-slate-300 focus:border-blue-400 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="mt-2 flex items-center justify-center gap-3 bg-blue-600 py-4 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-700"
              >
                Отправить заявку
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M2.5 7h9M8 3.5L11.5 7 8 10.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </form>
          </Animate>
        </div>
      </div>
    </section>
  )
}
