import cn from "classnames"
import styles from "./Loader.module.css"
import loaderWhite from "./img/loaderWhite.svg"
import loaderBlack from "./img/loaderBlack.svg"
import loaderBlue from "./img/loaderBlue.svg"

type LoaderTheme = "dark" | "white" | "blue"

export interface ILoaderProps {
  theme?: LoaderTheme
  hasShadow?: boolean
  classes?: string
}

const Loader = (props: ILoaderProps) => {
  const { theme = "white", hasShadow = true, classes = "" } = props

  let loader

  switch (theme) {
    case "blue":
      loader = loaderBlue
      break
    case "dark":
      loader = loaderBlack
      break
    case "white":
      loader = loaderWhite
      break
    default:
      loader = loaderWhite
      break
  }

  return (
    <img
      src={loader}
      alt="loader"
      className={cn(styles.loader, hasShadow && styles.shadow, classes)}
    />
  )
}

export default Loader
