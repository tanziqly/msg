"use client"

import { Animate } from "@/components/animate"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

import document from "@/public/about/team.jpg"
import Image from "next/image"

const stats = [
  { value: "2012", label: "Год основания" },
  { value: "15", label: "Экспертов в команде" },
  { value: "M&A", label: "Ключевая компетенция" },
  { value: "13%", label: "CAGR рынка до 2030" },
]

export function About() {
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const imgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="overflow-hidden bg-white py-28 lg:py-36"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-16">
        <Animate>
          <div className="mb-16 flex items-center gap-4">
            <div className="h-0.5 w-8 bg-blue-600" />
            <p className="text-[11px] font-semibold tracking-[0.3em] text-blue-600 uppercase">
              О фонде
            </p>
          </div>
        </Animate>

        <div className="mb-20 grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <Animate direction="left" duration={0.9}>
            <div>
              <h2
                className="mb-8 leading-[1.1] font-light tracking-tight text-slate-900"
                style={{ fontSize: "clamp(32px,4vw,56px)" }}
              >
                Наш приоритет —
                <br />
                <span className="text-blue-600">
                  повышение стоимости
                  <br />
                  компаний
                </span>
              </h2>

              <p className="mb-5 text-base leading-relaxed text-slate-600">
                MSG — инвестиционный фонд, работающий в сфере медицины и
                здравоохранения. Мы занимаемся поиском, покупкой и продажей
                перспективных активов, глубоким анализом и оценкой бизнеса.
              </p>

              <p className="mb-10 text-base leading-relaxed text-slate-500">
                Наш приоритет — повышение стоимости компаний и развитие
                инновационных проектов в медицинской отрасли. Мы сопровождаем
                сделки M&A, формируем стратегию роста и управляем портфельными
                активами.
              </p>

              <a
                href="#services"
                className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 transition-all duration-300 hover:gap-4"
              >
                Смотреть услуги
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M2.5 7h9M8 3.5L11.5 7 8 10.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </Animate>

          <Animate direction="right" duration={0.9}>
            <div className="relative w-full">
              {/* Контейнер с сохранением пропорций 16:9 */}
              <div className="relative w-full pb-[56.25%]">
                <motion.div
                  style={{ y: imgY }}
                  className="absolute inset-0 overflow-hidden rounded-sm shadow-2xl"
                >
                  <Image
                    src={document}
                    alt="Investment team"
                    className="h-full w-full object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </motion.div>
              </div>

              <motion.div
                className="absolute right-4 -bottom-22 w-[140px] bg-blue-600 p-4 text-white shadow-2xl sm:right-6 sm:-bottom-22 sm:w-[160px] sm:p-5 md:right-8 md:-bottom-22 md:w-[180px] md:p-6 lg:-right-4 lg:-bottom-28 lg:w-[200px] lg:p-7"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <p className="mb-1 text-2xl font-light sm:text-3xl md:text-4xl">
                  +43%
                </p>
                <p className="text-xs leading-snug text-blue-100 sm:text-sm">
                  рост рынка
                  <br />
                  за последние три года
                </p>
              </motion.div>
            </div>
          </Animate>
        </div>

        <Animate direction="scale">
          <div className="mb-16 border border-slate-200 bg-slate-50 p-8 lg:p-12">
            <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[1fr_auto]">
              <p className="text-xl leading-relaxed font-light text-slate-700 lg:text-2xl">
                «Российский рынок коммерческой медицины демонстрирует CAGR 13% и
                обладает уникальным потенциалом для консолидации и роста»
              </p>

              <p className="text-xs whitespace-nowrap text-slate-400">
                Газпромбанк, 2026
              </p>
            </div>
          </div>
        </Animate>

        <div className="grid grid-cols-2 border border-slate-100 md:grid-cols-4">
          {stats.map((s, i) => (
            <Animate key={s.label} delay={i * 120} direction="up">
              <div
                className={`h-full px-6 py-8 sm:px-8 sm:py-10 ${
                  i !== 0 ? "border-l border-slate-100" : ""
                } ${i >= 2 ? "border-t border-slate-100 md:border-t-0" : ""}`}
              >
                <motion.p
                  className="mb-1 font-light tracking-tight text-slate-900"
                  style={{ fontSize: "clamp(28px,3.5vw,50px)" }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.1 + i * 0.12,
                  }}
                >
                  {s.value}
                </motion.p>

                <p className="text-xs text-slate-500 sm:text-sm">{s.label}</p>
              </div>
            </Animate>
          ))}
        </div>
      </div>
    </section>
  )
}
