import Navbar from "@/components/Navbar"
import "@/styles/globals.css"
import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "TikTok Dili ve Edebiyatı",
  description: "TikTok genel kültürünüzü test edin."
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body className="bg-[#121212] font-tiktokFont text-[#ffffffe6] antialiased">
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
