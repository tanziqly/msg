const token = process.env.TELEGRAM_BOT_TOKEN

if (!token) {
  console.error("TELEGRAM_BOT_TOKEN is not set")
  process.exit(1)
}

const apiUrl = `https://api.telegram.org/bot${token}`
const getIdCallback = "get_tg_id"
let offset = 0
let isStopping = false

async function callTelegram(method, payload = {}) {
  const response = await fetch(`${apiUrl}/${method}`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload),
  })

  const result = await response.json()

  if (!response.ok || !result.ok) {
    throw new Error(
      result.description ?? `Telegram API request failed (${response.status})`,
    )
  }

  return result.result
}

function idMessage(user) {
  const name = user?.first_name ? `, ${user.first_name}` : ""
  return `Готово${name}. Ваш Telegram ID: ${user.id}`
}

async function sendId(chatId, user) {
  await callTelegram("sendMessage", {
    chat_id: chatId,
    text: idMessage(user),
  })
}

async function handleUpdate(update) {
  const message = update.message

  if (message?.text) {
    const command = message.text.trim().split(/\s+/)[0].split("@")[0]

    if (command === "/start") {
      await callTelegram("sendMessage", {
        chat_id: message.chat.id,
        text: "Нажмите кнопку ниже или отправьте команду /get_id, чтобы получить ваш Telegram ID.",
        reply_markup: {
          inline_keyboard: [
            [{ text: "Получить TG ID", callback_data: getIdCallback }],
          ],
        },
      })
      return
    }

    if (command === "/get_id") {
      await sendId(message.chat.id, message.from)
    }
  }

  const callback = update.callback_query

  if (callback?.data === getIdCallback) {
    await callTelegram("answerCallbackQuery", {
      callback_query_id: callback.id,
    })

    if (callback.message?.chat?.id) {
      await sendId(callback.message.chat.id, callback.from)
    }
  }
}

async function poll() {
  console.log("Telegram bot is running in polling mode")

  while (!isStopping) {
    try {
      const updates = await callTelegram("getUpdates", {
        offset,
        timeout: 30,
        allowed_updates: ["message", "callback_query"],
      })

      for (const update of updates) {
        offset = update.update_id + 1

        try {
          await handleUpdate(update)
        } catch (error) {
          console.error(`Failed to handle update ${update.update_id}:`, error)
        }
      }
    } catch (error) {
      if (!isStopping) {
        console.error("Polling failed; retrying in 3 seconds:", error)
        await new Promise((resolve) => setTimeout(resolve, 3000))
      }
    }
  }
}

function stop() {
  isStopping = true
}

process.once("SIGINT", stop)
process.once("SIGTERM", stop)

await callTelegram("deleteWebhook", { drop_pending_updates: false })
await callTelegram("setMyCommands", {
  commands: [
    { command: "start", description: "Открыть меню" },
    { command: "get_id", description: "Получить Telegram ID" },
  ],
})
await poll()
