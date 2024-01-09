import styles from "./Button.module.css"
import "../index.css"
import cn from "classnames"
import { ReactNode } from "react"

export type ButtonTheme = "dark" | "light"

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  theme?: ButtonTheme
  classes?: string
}

const Button = (props: IButtonProps) => {
  const { children, onClick, theme = "dark", classes = "" } = props

  return (
    <button
      onClick={onClick}
      {...props}
      className={cn(styles.button, styles[theme], classes)}
    >
      {children}
    </button>
  )
}

export default Button
