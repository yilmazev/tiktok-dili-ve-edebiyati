"use client"

import IconLogo from "@/assets/icons/logo.svg"
import Button from "@/components/Button"
import Link from "next/link"
import { useEffect, useState } from "react"

const Hero = () => {
  const [ shareText, setShareText ] = useState("")

  useEffect(() => {
    if (typeof window !== "undefined") {
      setShareText(`tiktok dili ve edebiyatı ${window.location.href}`)
    }
  }, [])

  return (
    <div className="flex min-h-[calc(100vh-60px)] w-full items-center justify-center">
      <div className="w-full">
        <h1 className="flex flex-col gap-4">
          <IconLogo className="w-80 fill-white" />
          <span className="text-7xl font-bold text-white">Dili ve Edebiyatı</span>
        </h1>
        <p className="mb-8 mt-4 text-xl text-[#ffffffe6]">Tuvallete bile TikTok izleyenler için özel olarak hazırlanmış sınava hemen başlayın!</p>
        <div className="flex gap-3">
          <Button size="large">Teste Başla</Button>
          <Link href={`https://twitter.com/intent/tweet?text=${shareText}`} target="_blank" title="Paylaş">
            <Button size="large" buttonType="secondary">Paylaş</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero