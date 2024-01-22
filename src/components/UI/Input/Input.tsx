import { useCallback } from "react"
import cn from "classnames"
import styles from "./Input.module.css"
import clearIcon from "./img/cancel.svg"

export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string
  handleChange: (value: string) => void
  placeholder?: string
  classes?: string
}

const Input = (props: IInputProps) => {
  const {
    value,
    handleChange,
    placeholder = "Placeholder",
    classes,
    ...other
  } = props

  const handleClear = useCallback(() => {
    value && handleChange("")
  }, [handleChange, value])

  return (
    <div className={cn(styles.wrapper, classes)}>
      <input
        type="text"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        placeholder={placeholder}
        className={styles.input}
        {...other}
      />
      <img
        src={clearIcon}
        alt="clear"
        className={cn(styles.clear, !value && styles.clear__disabled)}
        onClick={handleClear}
      />
    </div>
  )
}

export default Input
