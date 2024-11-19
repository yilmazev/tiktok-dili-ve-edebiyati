import { useEffect, useState } from "react"

const useScreenWidth = () => {
  const [ screenWidth, setScreenWidth ] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  )

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth)

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return screenWidth
}

export default useScreenWidth