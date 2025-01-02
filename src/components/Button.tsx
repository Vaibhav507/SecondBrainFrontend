import { ReactElement } from "react"

 interface ButtonProps {
    variant: 'primary' | 'secondary',
    text: string,
    startIcon?: ReactElement,
    onClick?: () => void
}

const variantStyles = {
    "primary": "bg-blue-600 text-blue-100",
    "secondary": "bg-blue-500 text-blue-200"
}

const defaultStyles = "flex jsutify-center items-center gap-2 rounded-md px-4 py-2"

const Button = ( {variant, text, startIcon, onClick}: ButtonProps ) => {
  return (
    <button className={`${variantStyles[variant]} ${defaultStyles} `} onClick={onClick}>
      {startIcon}
      <p>{text}</p>
    </button>
  )
}

export default Button