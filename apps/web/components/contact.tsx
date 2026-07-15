"use client"

import { useState, type FormEvent } from "react"

import { Animate } from "@/components/animate"

type FormStatus = "idle" | "submitting" | "success" | "error"

const inputClassName =
  "border border-slate-200 px-4 py-3 text-sm text-slate-900 transition-colors placeholder:text-slate-300 focus:border-blue-400 focus:outline-none disabled:cursor-not-allowed disabled:bg-slate-100"

export function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle")
  const [feedback, setFeedback] = useState("")

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (status === "submitting") return

    const form = event.currentTarget
    const formData = new FormData(form)

    setStatus("submitting")
    setFeedback("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          company: formData.get("company"),
          message: formData.get("message"),
          website: formData.get("website"),
        }),
      })
      const result = (await response.json()) as {
        success?: boolean
        error?: string
      }

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Не удалось отправить заявку.")
      }

      form.reset()
      setStatus("success")
      setFeedback("Заявка отправлена. Мы свяжемся с вами в ближайшее время.")
    } catch (error) {
      setStatus("error")
      setFeedback(
        error instanceof Error
          ? error.message
          : "Не удалось отправить заявку. Попробуйте ещё раз.",
      )
    }
  }

  const isSubmitting = status === "submitting"

  return (
    <section id="contact" className="bg-slate-900 py-20 sm:py-28 lg:py-36">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-16">
        <div className="grid min-w-0 grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
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
                    href: "mailto:General@msgco.ru",
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
              className="flex min-w-0 flex-col gap-5 bg-white p-5 sm:p-8 lg:p-10"
              onSubmit={handleSubmit}
            >
              <h3 className="mb-2 text-xl font-medium text-slate-900">
                Оставьте заявку
              </h3>
              <div className="absolute -left-[9999px]" aria-hidden="true">
                <label htmlFor="contact-website">Сайт</label>
                <input
                  id="contact-website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-name"
                    className="text-xs tracking-wide text-slate-500 uppercase"
                  >
                    Имя
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    maxLength={100}
                    autoComplete="name"
                    placeholder="Иван Иванов"
                    disabled={isSubmitting}
                    className={inputClassName}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-email"
                    className="text-xs tracking-wide text-slate-500 uppercase"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    maxLength={254}
                    autoComplete="email"
                    placeholder="ivan@company.ru"
                    disabled={isSubmitting}
                    className={inputClassName}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-company"
                  className="text-xs tracking-wide text-slate-500 uppercase"
                >
                  Компания
                </label>
                <input
                  id="contact-company"
                  name="company"
                  type="text"
                  maxLength={150}
                  autoComplete="organization"
                  placeholder="Название организации"
                  disabled={isSubmitting}
                  className={inputClassName}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-message"
                  className="text-xs tracking-wide text-slate-500 uppercase"
                >
                  Сообщение
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  maxLength={2000}
                  placeholder="Расскажите о вашем проекте или активе..."
                  disabled={isSubmitting}
                  className={`${inputClassName} resize-none`}
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 flex items-center justify-center gap-3 bg-blue-600 py-4 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-400"
              >
                {isSubmitting ? "Отправляем..." : "Отправить заявку"}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2.5 7h9M8 3.5L11.5 7 8 10.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div aria-live="polite" aria-atomic="true" className="min-h-6">
                {feedback ? (
                  <p
                    className={`text-sm leading-relaxed ${
                      status === "success" ? "text-blue-700" : "text-red-700"
                    }`}
                  >
                    {feedback}
                  </p>
                ) : null}
              </div>
            </form>
          </Animate>
        </div>
      </div>
    </section>
  )
}
