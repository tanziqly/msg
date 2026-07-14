import { NextResponse } from "next/server"
import { fetch as proxyFetch, ProxyAgent } from "undici"

export const runtime = "nodejs"

const telegramProxyUrl = process.env.TELEGRAM_PROXY_URL?.trim()
const telegramProxyAgent = telegramProxyUrl
  ? new ProxyAgent(telegramProxyUrl)
  : undefined

const limits = {
  name: 100,
  email: 254,
  company: 150,
  message: 2000,
} as const

type ContactPayload = {
  name?: unknown
  email?: unknown
  company?: unknown
  message?: unknown
  website?: unknown
}

function cleanField(value: unknown, maxLength: number) {
  if (typeof value !== "string") return null

  const cleaned = value.trim()
  return cleaned.length <= maxLength ? cleaned : null
}

function escapeTelegramHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
}

function getRecipientIds() {
  return (process.env.TELEGRAM_RECIPIENT_IDS ?? "")
    .split(",")
    .map((id) => id.trim())
    .filter((id) => /^-?\d+$/.test(id))
}

export async function POST(request: Request) {
  let payload: ContactPayload

  try {
    payload = (await request.json()) as ContactPayload
  } catch {
    return NextResponse.json(
      { error: "Некорректный формат запроса." },
      { status: 400 },
    )
  }

  if (typeof payload.website === "string" && payload.website.trim()) {
    return NextResponse.json({ success: true })
  }

  const name = cleanField(payload.name, limits.name)
  const email = cleanField(payload.email, limits.email)
  const company = cleanField(payload.company, limits.company)
  const message = cleanField(payload.message, limits.message)

  if (!name || !email || company === null || message === null) {
    return NextResponse.json(
      { error: "Проверьте заполнение и длину полей." },
      { status: 400 },
    )
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailPattern.test(email)) {
    return NextResponse.json(
      { error: "Укажите корректный email." },
      { status: 400 },
    )
  }

  const token = process.env.TELEGRAM_BOT_TOKEN
  const recipientIds = getRecipientIds()

  if (!token || recipientIds.length === 0) {
    return NextResponse.json(
      { error: "Сервис отправки временно не настроен." },
      { status: 503 },
    )
  }

  const text = [
    "<b>Новая заявка с сайта MSG</b>",
    "",
    `<b>Имя:</b> ${escapeTelegramHtml(name)}`,
    `<b>Email:</b> ${escapeTelegramHtml(email)}`,
    `<b>Компания:</b> ${escapeTelegramHtml(company || "Не указана")}`,
    `<b>Сообщение:</b> ${escapeTelegramHtml(message || "Не указано")}`,
  ].join("\n")

  try {
    const results = await Promise.all(
      recipientIds.map(async (chatId) => {
        const response = await proxyFetch(
          `https://api.telegram.org/bot${token}/sendMessage`,
          {
            method: "POST",
            dispatcher: telegramProxyAgent,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              chat_id: chatId,
              text,
              parse_mode: "HTML",
              disable_web_page_preview: true,
            }),
            cache: "no-store",
          },
        )

        if (!response.ok) {
          throw new Error("Telegram delivery failed")
        }
      }),
    )

    void results
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: "Не удалось отправить заявку. Попробуйте ещё раз." },
      { status: 502 },
    )
  }
}
