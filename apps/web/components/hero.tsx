"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const ticker = [
  "Рынок коммерческой медицины +43% за три года",
  "CAGR 13% до 2030 года",
  "14+ компаний готовятся к IPO",
  "ИИ используют 65% врачей",
  "Объём рынка медуслуг — 8,5 трлн руб.",
  "Топ-50 компаний растут 18,5% в год",
]

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] bg-white flex flex-col overflow-hidden">

      {/* 1. Фото появляется первым — scale из 1.08 → 1 */}
      {/* Фото Москва-Сити: Wikimedia Commons, автор Ludvig14, CC BY-SA 4.0 — https://commons.wikimedia.org/wiki/File:Moscow_Business_Center_5073-84.jpg */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <Image
          src="/hero/moscow-city.jpg"
          alt="Москва-Сити"
          fill
          priority
          sizes="100vw"
          quality={75}
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* 2. Overlay затемняется после фото */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
        style={{
          background: "linear-gradient(105deg, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.92) 45%, rgba(255,255,255,0.35) 75%, rgba(255,255,255,0.08) 100%)"
        }}
      />

      {/* 3. Контент — элементы выплывают поочерёдно */}
      <div className="relative flex-1 max-w-[1400px] mx-auto px-6 lg:px-16 w-full pt-28 pb-16 flex flex-col justify-center">
        <div className="max-w-[640px]">

          {/* Лейбл */}
          <motion.div
            className="flex items-center gap-3 mb-8"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0, ease: "easeOut" }}
          >
            <div className="w-8 h-0.5 bg-blue-600" />
            <p className="text-blue-600 text-[11px] tracking-[0.3em] uppercase font-semibold">
              Инвестиционный фонд · Медицина и здравоохранение
            </p>
          </motion.div>

          {/* Заголовок — строки по очереди */}
          <div className="mb-8 overflow-hidden">
            {["Мы — фонд,", "работающий в сфере"].map((line, i) => (
              <motion.div
                key={i}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="block font-light text-slate-900 leading-[1.0] tracking-tight"
                  style={{ fontSize: "clamp(40px, 6vw, 88px)" }}>
                  {line}
                </span>
              </motion.div>
            ))}
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="block font-light text-blue-600 leading-[1.0] tracking-tight"
                style={{ fontSize: "clamp(40px, 6vw, 88px)" }}>
                медицины
              </span>
            </motion.div>
          </div>

          {/* Подпись */}
          <motion.p
            className="text-slate-600 text-lg leading-relaxed mb-10 max-w-[50ch]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.75, ease: "easeOut" }}
          >
            Занимаемся поиском, покупкой и продажей перспективных активов,
            глубоким анализом и оценкой бизнеса, а также его стратегическим управлением.
          </motion.p>

          {/* Кнопки */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 2.0, ease: "easeOut" }}
          >
            <a href="#services"
              className="inline-flex items-center gap-3 bg-blue-600 text-white text-sm font-medium px-8 py-4 hover:bg-blue-700 transition-colors duration-200 shadow-lg shadow-blue-600/20">
              Наши услуги
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#contact"
              className="inline-flex items-center gap-3 text-slate-700 border border-slate-300 text-sm px-8 py-4 hover:border-blue-600 hover:text-blue-600 transition-all duration-200 bg-white/80 backdrop-blur-sm">
              Получить консультацию
            </a>
          </motion.div>
        </div>

        {/* Метрики справа — появляются последними */}
        <div className="hidden lg:flex absolute right-16 bottom-24 flex-col gap-3 w-[260px]">
          {[
            { value: "8,5 трлн ₽", label: "Объём рынка медуслуг России" },
            { value: "CAGR 13%", label: "Прогнозный рост до 2030 года" },
            { value: "14+", label: "Компаний готовятся к IPO" },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white/95 backdrop-blur-sm border border-slate-200 px-5 py-4 shadow-sm"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 1.8 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-slate-900 text-2xl font-light tracking-tight mb-0.5">{item.value}</p>
              <p className="text-slate-500 text-xs">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Бегущая строка */}
      <motion.div
        className="relative border-t border-slate-200 bg-white overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2.3 }}
      >
        <div className="py-3 flex" style={{ whiteSpace: "nowrap" }}>
          <div
            className="inline-flex animate-[marquee_22s_linear_infinite] motion-reduce:animate-none"
            style={{ willChange: "transform" }}
          >
            {[...ticker, ...ticker].map((t, i) => (
              <span key={i} className="inline-flex items-center gap-5 text-slate-500 text-[11px] tracking-widest uppercase px-8">
                {t} <span className="text-blue-400">◆</span>
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
