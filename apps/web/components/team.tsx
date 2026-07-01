"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Animate } from "@/components/animate"

const expertCompetencies = [
  {
    title: "Стратегия фонда",
    eyebrow: "инвестиционное управление",
    points: [
      "Разработка и реализация инвестиционной стратегии фонда",
      "Принятие ключевых решений по сделкам M&A",
      "Управление отношениями с крупными инвесторами и партнёрами",
      "Контроль эффективности портфельных компаний",
      "Развитие команды и корпоративной культуры",
    ],
  },
  {
    title: "Финансовый контроль",
    eyebrow: "система и отчётность",
    points: [
      "Организация системы финансового контроля и отчётности",
      "Контроль движения денежных средств фонда",
      "Оценка финансовых рисков инвестиционных проектов",
      "Разработка и внедрение систем внутреннего контроля",
      "Управление налоговым планированием",
    ],
  },
  {
    title: "Аналитика сделок",
    eyebrow: "данные и due diligence",
    points: [
      "Финансовое моделирование и оценка активов",
      "Анализ больших массивов рыночных данных",
      "Due diligence сделок M&A",
      "Прогнозирование роста портфельных компаний",
    ],
  },
  {
    title: "Технологическое развитие",
    eyebrow: "it и цифровые платформы",
    points: [
      "Цифровая трансформация портфельных компаний",
      "Внедрение медтех-платформ и телемедицины",
      "Архитектура ИТ-инфраструктуры фонда",
      "Кибербезопасность и защита данных",
    ],
  },
  {
    title: "Операционное управление",
    eyebrow: "процессы и команда",
    points: [
      "Настройка управленческой отчётности",
      "Сопровождение операционных изменений",
      "Координация проектных команд",
      "Контроль исполнения стратегических инициатив",
    ],
  },
]

const gallery = Array.from(
  { length: 14 },
  (_, i) => `/team/gallery/team-${String(i + 1).padStart(2, "0")}.jpg`
)

const workSlides = [
  { src: gallery[0]!, competencies: expertCompetencies[1]! },
  { src: gallery[1]!, competencies: expertCompetencies[0]! },
  { src: gallery[2]!, competencies: expertCompetencies[2]! },
  { src: gallery[3]!, competencies: expertCompetencies[3]! },
  { src: gallery[4]!, competencies: expertCompetencies[4]! },
  { src: gallery[5]!, competencies: expertCompetencies[1]! },
]

const VARIANTS = [
  { id: 1, label: "1. Классика + галерея" },
  { id: 2, label: "2. Мозаика и компетенции" },
  { id: 3, label: "3. Горизонтальный слайдер" },
  { id: 4, label: "4. Лента и компетенции" },
] as const

type VariantId = (typeof VARIANTS)[number]["id"]

export function Team() {
  const [variant, setVariant] = useState<VariantId>(1)

  return (
    <section id="team" className="bg-white py-28 lg:py-36">
      {/* Временный переключатель для демонстрации вариантов заказчику */}
      <div className="sticky top-2 z-30 mb-14 flex justify-center px-6">
        <div className="flex flex-wrap items-center justify-center gap-1 rounded-full border border-slate-200 bg-white/95 p-1.5 shadow-lg shadow-slate-900/5 backdrop-blur">
          <span className="hidden pr-2 pl-3 text-[10px] font-semibold tracking-[0.15em] text-slate-400 uppercase sm:inline">
            Демо-режим:
          </span>
          {VARIANTS.map((v) => (
            <button
              key={v.id}
              onClick={() => setVariant(v.id)}
              className={`rounded-full px-4 py-2 text-xs font-medium whitespace-nowrap transition-colors duration-200 ${
                variant === v.id
                  ? "bg-blue-600 text-white"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              {v.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 lg:px-16">
        <Animate>
          <div className="mb-6 flex items-center gap-4">
            <div className="h-0.5 w-8 bg-blue-600" />
            <p className="text-[11px] font-semibold tracking-[0.3em] text-blue-600 uppercase">
              Команда
            </p>
          </div>
          <h2
            className="mb-16 leading-tight font-light tracking-tight text-slate-900"
            style={{ fontSize: "clamp(30px, 4vw, 52px)" }}
          >
            Эксперты рынка —<br />
            залог нашего успеха
          </h2>
        </Animate>

        {variant === 1 && <VariantClassic />}
        {variant === 2 && <VariantMosaic />}
        {variant === 3 && <VariantCards />}
        {variant === 4 && <VariantCarousel />}
      </div>
    </section>
  )
}

/* ---------------------------------------------------------------- */
/* Вариант 1 — командная галерея с компетенциями без одиночных портретов */
/* ---------------------------------------------------------------- */

function VariantClassic() {
  return (
    <>
      <div className="mb-16 grid grid-cols-1 items-start gap-10 border-b border-slate-100 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <Animate direction="left">
          <div
            tabIndex={0}
            className="group relative aspect-[16/9] overflow-hidden bg-slate-100 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none"
          >
            <img
              src={workSlides[0].src}
              alt="Команда обсуждает финансовую модель"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <CompetencyOverlay group={workSlides[0].competencies} />
          </div>
        </Animate>
        <Animate direction="right">
          <div className="flex flex-col justify-center">
            <span className="mb-3 text-[11px] font-semibold tracking-[0.28em] text-blue-600 uppercase">
              экспертиза в команде
            </span>
            <h3 className="mb-5 text-3xl leading-tight font-light text-slate-900">
              Компетенции появляются поверх рабочих фотографий
            </h3>
            <p className="mb-8 max-w-xl text-base leading-7 text-slate-600">
              В блоке остаются только командные сцены. При наведении на фото
              раскрывается близкий по смыслу набор компетенций.
            </p>
            <ul className="flex flex-col gap-3">
              {expertCompetencies[1].points.slice(0, 5).map((p, i) => (
                <Animate key={p} delay={i * 80}>
                  <li className="flex items-start gap-3 text-base text-slate-700">
                    <span className="mt-1 shrink-0 text-blue-500">→</span>
                    {p}
                  </li>
                </Animate>
              ))}
            </ul>
          </div>
        </Animate>
      </div>

      <div className="mb-20 grid grid-cols-1 gap-5 md:grid-cols-2">
        {workSlides.slice(1, 5).map((slide, i) => (
          <Animate key={slide.src} delay={i * 100}>
            <TeamPhotoCard slide={slide} compact />
          </Animate>
        ))}
      </div>
    </>
  )
}

/* ---------------------------------------------------------------- */
/* Вариант 2 — мозаика рабочих фото и короткие компетенции по наведению */
/* ---------------------------------------------------------------- */

function VariantMosaic() {
  return (
    <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.15fr]">
      <Animate direction="left" duration={0.9}>
        <div className="relative h-[420px] lg:sticky lg:top-28 lg:h-[560px]">
          <div
            tabIndex={0}
            className="group absolute top-0 left-0 h-[62%] w-[68%] overflow-hidden shadow-xl focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none"
          >
            <img
              src={gallery[8]}
              alt="Команда за работой"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <CompetencyChips
              points={expertCompetencies[0].points.slice(0, 2)}
            />
          </div>
          <div
            tabIndex={0}
            className="group absolute right-0 bottom-0 h-[54%] w-[58%] overflow-hidden border-4 border-white shadow-xl focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none"
          >
            <img
              src={gallery[2]}
              alt="Команда за работой"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <CompetencyChips
              points={expertCompetencies[2].points.slice(0, 2)}
            />
          </div>
          <div
            tabIndex={0}
            className="group absolute top-[8%] right-[2%] h-[34%] w-[34%] overflow-hidden border-4 border-white shadow-lg focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none"
          >
            <img
              src={gallery[12]}
              alt="Команда за работой"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <CompetencyChips
              points={expertCompetencies[3].points.slice(0, 1)}
            />
          </div>
        </div>
      </Animate>

      <div className="flex flex-col divide-y divide-slate-100">
        {expertCompetencies.map((group, i) => (
          <Animate key={group.title} delay={i * 100} direction="right">
            <div className="py-7 first:pt-0">
              <p className="mb-2 text-[11px] font-semibold tracking-[0.24em] text-blue-600 uppercase">
                {group.eyebrow}
              </p>
              <h3 className="mb-4 text-xl font-medium text-slate-900">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.points.slice(0, 3).map((p) => (
                  <span
                    key={p}
                    className="border border-slate-200 px-3 py-1.5 text-xs leading-5 text-slate-600"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </Animate>
        ))}
      </div>
    </div>
  )
}

/* ---------------------------------------------------------------- */
/* Вариант 3 — горизонтальный слайдер: одна командная фото и компетенции поверх */
/* ---------------------------------------------------------------- */

function VariantCards() {
  const [index, setIndex] = useState(0)
  const slide = workSlides[index]!
  const prev = () =>
    setIndex((i) => (i - 1 + workSlides.length) % workSlides.length)
  const next = () => setIndex((i) => (i + 1) % workSlides.length)

  return (
    <div>
      <Animate>
        <div className="relative">
          <div
            tabIndex={0}
            className="group relative aspect-[16/9] overflow-hidden bg-slate-900 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={slide.src}
                src={slide.src}
                alt="Команда фонда в рабочем обсуждении"
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </AnimatePresence>
            <CompetencyOverlay group={slide.competencies} large />
          </div>

          <button
            onClick={prev}
            aria-label="Предыдущее фото"
            className="absolute top-1/2 left-3 flex h-11 w-11 -translate-y-1/2 items-center justify-center bg-white/95 text-slate-700 shadow-lg shadow-slate-900/10 transition-colors hover:bg-white focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none lg:left-5"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            aria-label="Следующее фото"
            className="absolute top-1/2 right-3 flex h-11 w-11 -translate-y-1/2 items-center justify-center bg-white/95 text-slate-700 shadow-lg shadow-slate-900/10 transition-colors hover:bg-white focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none lg:right-5"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </Animate>

      <div className="mt-5 flex items-center justify-center gap-2">
        {workSlides.map((item, i) => (
          <button
            key={item.src}
            onClick={() => setIndex(i)}
            aria-label={`Показать фото ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index
                ? "w-9 bg-blue-600"
                : "w-2 bg-slate-200 hover:bg-slate-300"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

function TeamPhotoCard({
  slide,
  compact = false,
}: {
  slide: (typeof workSlides)[number]
  compact?: boolean
}) {
  return (
    <div
      tabIndex={0}
      className="group relative aspect-[16/10] overflow-hidden bg-slate-100 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none"
    >
      <img
        src={slide.src}
        alt="Команда за работой"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
      />
      {compact ? (
        <CompetencyChips points={slide.competencies.points.slice(0, 2)} />
      ) : (
        <CompetencyOverlay group={slide.competencies} />
      )}
    </div>
  )
}

function CompetencyOverlay({
  group,
  large = false,
}: {
  group: (typeof expertCompetencies)[number]
  large?: boolean
}) {
  return (
    <div className="absolute inset-0 flex items-end bg-slate-950/10 opacity-0 transition-opacity duration-500 group-focus-within:opacity-100 group-hover:opacity-100">
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/88 via-slate-950/45 to-slate-950/10" />
      <div
        className={`relative w-full p-5 text-white sm:p-7 ${
          large ? "lg:max-w-3xl lg:p-10" : ""
        }`}
      >
        <p className="mb-2 text-[11px] font-semibold tracking-[0.24em] text-blue-200 uppercase">
          {group.eyebrow}
        </p>
        <h3
          className={`${large ? "text-3xl" : "text-xl"} mb-4 leading-tight font-medium`}
        >
          {group.title}
        </h3>
        <ul className="grid gap-2 sm:grid-cols-2">
          {group.points.map((point) => (
            <li
              key={point}
              className="flex items-start gap-2 text-sm leading-5 text-slate-100"
            >
              <span className="mt-1 shrink-0 text-blue-300">→</span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function CompetencyChips({ points }: { points: string[] }) {
  return (
    <div className="absolute inset-x-3 bottom-3 flex translate-y-2 flex-wrap gap-2 opacity-0 transition-all duration-300 group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:translate-y-0 group-hover:opacity-100">
      {points.map((point) => (
        <span
          key={point}
          className="bg-white/92 px-3 py-1.5 text-[11px] leading-4 font-medium text-slate-700 shadow-sm backdrop-blur"
        >
          {point}
        </span>
      ))}
    </div>
  )
}

/* ---------------------------------------------------------------- */
/* Вариант 4 — слайдер компетенций и горизонтальная лента рабочих фото */
/* ---------------------------------------------------------------- */

function VariantCarousel() {
  const [index, setIndex] = useState(0)
  const group = expertCompetencies[index]!
  const slide = workSlides[index % workSlides.length]!
  const prev = () =>
    setIndex(
      (i) => (i - 1 + expertCompetencies.length) % expertCompetencies.length
    )
  const next = () => setIndex((i) => (i + 1) % expertCompetencies.length)

  return (
    <div>
      <div className="relative mb-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
          <AnimatePresence mode="wait">
            <motion.img
              key={slide.src}
              src={slide.src}
              alt="Команда фонда за работой"
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="h-full w-full object-cover"
            />
          </AnimatePresence>
        </div>

        <div className="min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="mb-3 inline-block bg-blue-50 px-2.5 py-1 text-[10px] font-semibold tracking-wider text-blue-600 uppercase">
                {group.eyebrow}
              </span>
              <h3 className="mb-8 text-2xl font-medium text-blue-600">
                {group.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {group.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-3 text-base text-slate-700"
                  >
                    <span className="mt-1 shrink-0 text-blue-500">→</span>
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={prev}
          aria-label="Предыдущая компетенция"
          className="absolute top-1/2 left-2 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-slate-200 bg-white text-slate-600 shadow-md transition-colors hover:bg-slate-50 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none lg:-left-5"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={next}
          aria-label="Следующая компетенция"
          className="absolute top-1/2 right-2 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-slate-200 bg-white text-slate-600 shadow-md transition-colors hover:bg-slate-50 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none lg:-right-5"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="mb-20 flex items-center justify-center gap-2">
        {expertCompetencies.map((item, i) => (
          <button
            key={item.title}
            onClick={() => setIndex(i)}
            aria-label={item.title}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index
                ? "w-8 bg-blue-600"
                : "w-1.5 bg-slate-200 hover:bg-slate-300"
            }`}
          />
        ))}
      </div>

      <Animate>
        <div className="mb-8 flex items-center gap-4">
          <div className="h-0.5 w-8 bg-blue-600" />
          <p className="text-[11px] font-semibold tracking-[0.3em] text-blue-600 uppercase">
            Команда в работе
          </p>
        </div>
      </Animate>
      <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {gallery.map((src, i) => (
          <button
            key={src}
            onClick={() => setIndex(i % expertCompetencies.length)}
            className="group relative aspect-[4/3] w-[280px] shrink-0 snap-start overflow-hidden bg-slate-100 text-left sm:w-[340px]"
          >
            <img
              src={src}
              alt="Команда за работой"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <CompetencyChips
              points={expertCompetencies[
                i % expertCompetencies.length
              ]!.points.slice(0, 2)}
            />
          </button>
        ))}
      </div>
    </div>
  )
}
