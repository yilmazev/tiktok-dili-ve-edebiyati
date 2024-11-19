import clsx from "clsx"
import React from "react"

interface IButton {
  buttonType?: "primary" | "secondary" | "borderless"
  variant?: "default"
  size?: "large" | "medium" | "small"
  isFull?: boolean
  disabled?: boolean
  buttonColor?: string
  className?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  children?: React.ReactNode
}

const Button: React.FC<IButton> = ({
  buttonType = "primary",
  variant = "default",
  size = "medium",
  isFull = false,
  disabled = false,
  className,
  onClick,
  children
}) => {
  const sizeClasses = {
    large: "h-12 min-w-[124px] px-3 rounded-lg",
    medium: "h-10 min-w-[108px] px-4 rounded-md",
    small: "h-8 min-w-24 px-3 rounded-[5px] text-[15px]"
  }

  const typeClasses = {
    primary: "",
    secondary: "",
    borderless: "!px-0 !min-w-0"
  }

  const variantClasses = {
    primary_default: "bg-[#fe2c55] text-white hover:bg-[#ea284e] active:bg-[#e0274b]",
    secondary_default: "bg-[#ffffff21] text-[#f6f6f6] hover:bg-[#ffffff30] active:bg-[#00000024]",
    borderless_default: "bg-transparent text-[#ff3b5c] hover:text-[#ea284e] active:text-[#e0274b]"
  }

  const variantClassKey = `${buttonType}_${variant}` as keyof typeof variantClasses

  return (
    <button
      className={clsx(
        "flex items-center justify-center font-medium tracking-[0.15px] disabled:bg-[#ffffff14] disabled:text-[#ffffff57]",
        sizeClasses[size],
        typeClasses[buttonType],
        variantClasses[variantClassKey],
        className,
        { "!min-w-full px-0": isFull }
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button