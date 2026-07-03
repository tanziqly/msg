"use client"

import { Animate } from "@/components/animate"
import { motion } from "framer-motion"

import buildingImage from "@/public/services/building.png"

const services = [
  {
    number: "01",
    title: "Инвестиции в состоявшиеся проекты",
    description:
      "Приобретение действующих медицинских центров и клиник с устойчивой бизнес-моделью и потенциалом роста.",
    points: [
      "Приобретение медицинских центров и клиник",
      "Стратегическое партнёрство с лидерами рынка",
      "Масштабирование успешных бизнес-моделей",
      "Оптимизация операционной деятельности",
      "Внедрение новых технологий и методик",
    ],
    img: buildingImage, // ← теперь локальная картинка
    metric: "EV/EBITDA 6,7×",
    metricNote: "оценка лидеров отрасли",
  },
  {
    number: "02",
    title: "Стратегическое консультирование",
    description:
      "Глубокий анализ, оценка бизнеса и разработка стратегии роста для медицинских организаций.",
    points: [
      "Анализ и оценка медицинского бизнеса",
      "Разработка инвестиционной стратегии",
      "Сопровождение сделок M&A",
      "Подготовка к IPO и привлечению капитала",
      "Управление портфельными компаниями",
    ],
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=80&auto=format&fit=crop",
    metric: "14+",
    metricNote: "компаний готовятся к IPO",
  },
  {
    number: "03",
    title: "Медтех и цифровые инвестиции",
    description:
      "Инвестиции в медицинские технологии, телемедицину и цифровые платформы здравоохранения.",
    points: [
      "Инвестиции в телемедицинские платформы",
      "Финансирование ИИ-диагностики",
      "Поддержка медтех-стартапов",
      "Цифровая трансформация клиник",
      "Развитие лабораторных сетей",
    ],
    img: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=700&q=80&auto=format&fit=crop",
    metric: "CAGR 23%+",
    metricNote: "рост платформенных моделей",
  },
]

const keyMetrics = [
  { value: "8,5 трлн ₽", label: "Общий рынок медуслуг РФ, 2024" },
  { value: "2,1 трлн ₽", label: "Рынок платных медуслуг" },
  { value: "16,2 млрд ₽", label: "Медтех-рынок топ-75 компаний" },
  { value: "155 млрд ₽", label: "Рынок лабдиагностики, 2024" },
]

export function Services() {
  return (
    <section
      id="services"
      className="bg-slate-50 pt-28 pb-16 lg:pt-36 lg:pb-20"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-16">
        <div className="mb-16 grid grid-cols-1 items-end gap-10 lg:grid-cols-2">
          <Animate direction="left">
            <div>
              <div className="mb-6 flex items-center gap-4">
                <div className="h-0.5 w-8 bg-blue-600" />
                <p className="text-[11px] font-semibold tracking-[0.3em] text-blue-600 uppercase">
                  Услуги
                </p>
              </div>
              <h2
                className="leading-tight font-light tracking-tight text-slate-900"
                style={{ fontSize: "clamp(30px, 4vw, 52px)" }}
              >
                Что мы делаем
                <br />
                для инвесторов
              </h2>
            </div>
          </Animate>
          <Animate direction="right">
            <p className="text-base leading-relaxed text-slate-500 lg:max-w-[44ch] lg:self-end">
              Каждое направление — подтверждённая бизнес-модель с понятной
              экономикой и высоким потенциалом роста на российском рынке.
            </p>
          </Animate>
        </div>

        <div className="flex flex-col gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <motion.div
                className="overflow-hidden border border-slate-200 bg-white"
                whileHover={{
                  borderColor: "#bfdbfe",
                  boxShadow: "0 20px 40px -12px rgba(37,99,235,0.08)",
                }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 ${i % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
                >
                  {/* Фото */}
                  <div
                    className={`relative h-[260px] overflow-hidden lg:h-auto ${i % 2 === 1 ? "lg:order-2" : ""}`}
                  >
                    <motion.img
                      src={typeof s.img === "string" ? s.img : s.img.src} // ← важная строка
                      alt={s.title}
                      className="h-full w-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.7 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                    <motion.div
                      className="absolute bottom-4 left-4"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    >
                      <p className="text-2xl font-light text-white">
                        {s.metric}
                      </p>
                      <p className="text-xs text-white/60">{s.metricNote}</p>
                    </motion.div>
                  </div>

                  {/* Контент */}
                  <div
                    className={`m-8 flex flex-col justify-center p-2 lg:p-10 ${i % 2 === 1 ? "lg:order-1 lg:pl-0" : ""}`}
                  >
                    <span className="mb-4 font-mono text-xs text-slate-400">
                      {s.number}
                    </span>
                    <h3 className="mb-4 text-xl font-light text-slate-900 transition-colors duration-200 lg:text-2xl">
                      {s.title}
                    </h3>
                    <p className="mb-6 text-sm leading-relaxed text-slate-500">
                      {s.description}
                    </p>
                    <ul className="flex flex-col gap-2">
                      {s.points.map((p, pi) => (
                        <motion.li
                          key={p}
                          className="flex items-start gap-3 text-sm text-slate-600"
                          initial={{ opacity: 0, x: -12 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.2 + pi * 0.07 }}
                        >
                          <span className="mt-0.5 shrink-0 text-blue-500">
                            →
                          </span>
                          {p}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
        <div className="my-8 grid grid-cols-2 border border-slate-200 bg-white md:grid-cols-4">
          {keyMetrics.map((item, i) => (
            <Animate key={i} delay={i * 100}>
              <div
                className={`h-full p-6 lg:p-8 ${i !== 0 ? "border-l border-slate-100" : ""} ${i >= 2 ? "border-t border-slate-100 md:border-t-0" : ""}`}
              >
                <p className="mb-1 text-2xl font-light tracking-tight text-slate-900 lg:text-3xl">
                  {item.value}
                </p>
                <p className="text-xs leading-snug text-slate-500">
                  {item.label}
                </p>
              </div>
            </Animate>
          ))}
        </div>
      </div>
    </section>
  )
}
