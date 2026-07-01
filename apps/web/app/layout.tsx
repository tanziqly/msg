import { Geist } from "next/font/google"
import type { Metadata } from "next"

import "@workspace/ui/globals.css"
import { cn } from "@workspace/ui/lib/utils"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "MSG — Инвестиционный фонд в сфере здравоохранения",
  description: "Инвестиционный фонд, работающий в сфере медицины и здравоохранения. Поиск, покупка и продажа перспективных активов, глубокий анализ и стратегическое управление.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={cn("antialiased", geist.variable, "font-sans")}>
      <body>{children}</body>
    </html>
  )
}
