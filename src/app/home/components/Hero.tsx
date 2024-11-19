"use client"

import IconLogo from "@/assets/icons/logo.svg"
import IconNarrowRight from "@/assets/icons/narrow-right.svg"
import Button from "@/components/Button"
import useScreenWidth from "@/hooks/useScreenWidth"
import Link from "next/link"
import { useEffect, useState } from "react"

const Hero = () => {
  const [ shareText, setShareText ] = useState("")

  const screenWidth = useScreenWidth()
  const buttonSize = screenWidth > 768 ? "large" : "medium"

  useEffect(() => {
    if (typeof window !== "undefined") {
      setShareText(`tiktok dili ve edebiyatı ${window.location.href}`)
    }
  }, [])

  return (
    <div className="flex size-full items-center justify-center">
      <div className="flex w-full flex-col items-center">
        <Link href="https://www.linkedin.com/in/yilmazev" target="_blank" title="Benimle iletişime geç" className="mb-5 flex items-center rounded-full border border-[#fe2c55]/30 bg-[#fe2c55]/15 px-4 py-1.5 md:mb-10">
          <p className="mr-2 text-sm font-semibold text-[#fe2c55]">Benimle iletişime geç</p>
          <IconNarrowRight className="size-4 fill-[#fe2c55]" />
        </Link>
        <h1 className="flex flex-wrap items-center justify-center gap-2 md:flex-col md:gap-4">
          <IconLogo className="w-32 fill-white md:w-80" />
          <span className="pt-1.5 text-2xl font-bold text-white md:pt-0 md:text-7xl">Dili ve Edebiyatı</span>
        </h1>
        <p className="mb-4 mt-2 max-w-[420px] text-center text-base text-[#ffffffe6] md:mb-8 md:mt-4 md:max-w-none md:text-xl">Tuvallete bile TikTok izleyenler için özel olarak hazırlanmış sınava hemen başlayın!</p>
        <div className="flex justify-center gap-3">
          <Link href="/start" title="Teste Başla">
            <Button size={buttonSize}>Teste Başla</Button>
          </Link>
          <Link href={`https://twitter.com/intent/tweet?text=${shareText}`} target="_blank" title="Paylaş">
            <Button size={buttonSize} buttonType="secondary">Paylaş</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero