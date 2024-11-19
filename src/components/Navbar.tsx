"use client"

import IconExternalLink from "@/assets/icons/external-link.svg"
import IconHeart from "@/assets/icons/heart.svg"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import useScreenWidth from "../hooks/useScreenWidth"
import Button from "./Button"

const Navbar = () => {
  const screenWidth = useScreenWidth()
  const [ isDesktop, setIsDesktop ] = useState(false)

  useEffect(() => {
    setIsDesktop(screenWidth > 768)
  }, [ isDesktop ])

  return (
    <nav className="flex h-[60px] items-center justify-center border-b border-[#ffffff1f]">
      <div className="container flex justify-between gap-3 px-3 md:items-center">
        <div className="flex items-center gap-2">
          <Image src="/images/avatar.jpeg" alt="Yılmaz Ev" width={36} height={36} quality={100} className="shrink-0 rounded-full bg-[#ffffff1f]" />
          <span className="font-bold">Yılmaz Ev</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="https://yilmazev.dev" target="_blank" title="Yılmaz Ev Portfolyo">
            <Button size="medium" className={!isDesktop ? "w-10 min-w-0 !px-0" : ""}>
              <IconExternalLink className="block size-5 fill-[#ffffffe6] md:hidden" />
              <p className="hidden md:block">Portfolyo</p>
            </Button>
          </Link>
          <Link href="https://buymeacoffee.com/yilmazev" target="_blank" title="Bağış Yap">
            <Button size="medium" buttonType="secondary" className={!isDesktop ? "w-10 min-w-0 !px-0" : ""}>
              <IconHeart className="block size-5 fill-[#ffffffe6] md:hidden" />
              <p className="hidden md:block">Bağış Yap</p>
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar