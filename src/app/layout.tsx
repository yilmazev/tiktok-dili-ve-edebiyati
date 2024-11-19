import Navbar from "@/components/Navbar"
import "@/styles/globals.css"
import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next"
import NextTopLoader from "nextjs-toploader"

export const metadata: Metadata = {
  title: "TikTok Dili ve Edebiyatı",
  description: "TikTok genel kültürünüzü test edin."
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className="h-screen bg-[#121212] font-tiktokFont text-[#ffffffe6] antialiased">
        <NextTopLoader
          color="#fe2c55"
          initialPosition={0.08}
          crawlSpeed={200}
          height={4}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #fe2c55,0 0 5px #fe2c55"
        />
        <Navbar />
        <div className="h-[calc(100%-60px)]">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  )
}
