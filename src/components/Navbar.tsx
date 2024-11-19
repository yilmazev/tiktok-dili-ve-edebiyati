import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

const Navbar = () => {
  return (
    <nav className="flex h-[60px] items-center justify-center border-b border-[#ffffff1f]">
      <div className="container flex items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <Image src="/images/avatar.jpeg" alt="Yılmaz Ev" width={36} height={36} className="rounded-full" />
          <span className="font-bold">Yılmaz Ev</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="https://yilmazev.dev" target="_blank" title="Yılmaz Ev Portfolyo">
            <Button>Portfolyo</Button>
          </Link>
          <Link href="https://buymeacoffee.com/yilmazev" target="_blank" title="Bağış Yap">
            <Button buttonType="secondary">Bağış Yap</Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar