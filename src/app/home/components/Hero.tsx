"use client"

import IconLogo from "@/assets/icons/logo.svg"
import Button from "@/components/Button"
import Link from "next/link"

const Hero = () => {
  const shareText = `tiktok dili ve edebiyatı ${window.location}`

  return (
    <div className="min-h-[calc(100vh-60px)] w-full flex items-center justify-center">
      <div className="w-full">
        <h1 className="flex flex-col gap-4">
          <IconLogo className="w-80 fill-white" />
          <span className="text-white text-7xl font-bold">Dili ve Edebiyatı</span>
        </h1>
        <p className="text-xl text-[#ffffffe6] mt-4 mb-8">Tuvallete bile TikTok izleyenler için özel olarak hazırlanmış sınava hemen başlayın!</p>
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