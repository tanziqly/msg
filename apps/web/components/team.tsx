"use client"
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
    eyebrow: "данные и юридическая экспертиза",
    points: [
      "Финансовое моделирование и оценка активов",
      "Анализ больших массивов рыночных данных",
      "Юридическая экспертиза сделок M&A",
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
] as const

const gallery = Array.from(
  { length: 14 },
  (_, i) => `/team/gallery/team-${String(i + 1).padStart(2, "0")}.jpg`
)

const workSlides = [
  { src: gallery[0]!, competencies: expertCompetencies[0]! },
  { src: gallery[1]!, competencies: expertCompetencies[1]! },
  { src: gallery[2]!, competencies: expertCompetencies[2]! },
  { src: gallery[6]!, competencies: expertCompetencies[3]! },
  { src: gallery[4]!, competencies: expertCompetencies[4]! },
] as const

export function Team() {
  return (
    <section id="team" className="bg-white pt-16 pb-28 lg:pt-20 lg:pb-36">
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

        <VariantClassic />
      </div>
    </section>
  )
}

/* ---------------------------------------------------------------- */
/* Вариант 1 — командная галерея с компетенциями поверх фото         */
/* ---------------------------------------------------------------- */

function VariantClassic() {
  const hero = workSlides[0]!
  const bottomLeft = workSlides[2]! // "Аналитика сделок"
  const bottomRight = workSlides[3]! // "Технологическое развитие"

  return (
    <>
      {/* Верхний блок: большое фото + текстовая колонка */}
      <div className="mb-16 grid grid-cols-1 items-start gap-10 border-b border-slate-100 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <Animate direction="left">
          <TeamPhotoCard
            src={hero.src}
            alt="Команда обсуждает финансовую модель"
            competencies={hero.competencies}
          />
        </Animate>
        <Animate direction="right">
          <div className="flex flex-col justify-center">
            <span className="mb-3 text-[11px] font-semibold tracking-[0.28em] text-blue-600 uppercase">
              экспертиза в команде
            </span>
            <h3 className="mb-5 text-3xl leading-tight font-light text-slate-900">
              Стратегия, которая определяет решения фонда
            </h3>
            <p className="mb-8 max-w-xl text-base leading-7 text-slate-600">
              Команда обеспечивает прозрачность финансовых потоков фонда и
              контролирует риски на каждом этапе инвестиционного процесса.
            </p>
            <ul className="flex flex-col gap-3">
              {hero.competencies.points.map((p, i) => (
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

      {/* Нижний ряд: ровно 2 фото, у обеих одинаковый hover-оверлей */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <Animate delay={0}>
          <TeamPhotoCard
            src={bottomLeft.src}
            alt="Команда за анализом сделок"
            competencies={bottomLeft.competencies}
          />
        </Animate>
        <Animate delay={100}>
          <TeamPhotoCard
            src={bottomRight.src}
            alt="Команда обсуждает технологические решения"
            competencies={bottomRight.competencies}
          />
        </Animate>
      </div>
    </>
  )
}

function TeamPhotoCard({
  src,
  alt,
  competencies,
}: {
  src: string
  alt: string
  competencies: (typeof expertCompetencies)[number]
}) {
  return (
    <div
      tabIndex={0}
      className="group relative aspect-[16/10] overflow-hidden bg-slate-100 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none"
    >
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
      />
      <CompetencyOverlay group={competencies} />
    </div>
  )
}

function CompetencyOverlay({
  group,
}: {
  group: (typeof expertCompetencies)[number]
}) {
  return (
    <div className="absolute inset-0 flex items-end bg-slate-950/10 opacity-0 transition-opacity duration-500 group-focus-within:opacity-100 group-hover:opacity-100">
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/88 via-slate-950/45 to-slate-950/10" />
      <div className="relative w-full p-5 text-white sm:p-7">
        <p className="mb-2 text-[11px] font-semibold tracking-[0.24em] text-blue-200 uppercase">
          {group.eyebrow}
        </p>
        <h3 className="mb-4 text-xl leading-tight font-medium">
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
