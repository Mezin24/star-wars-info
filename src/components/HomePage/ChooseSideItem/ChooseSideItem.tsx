import cn from "classnames"
import styles from "../ChooseSide/ChooseSide.module.css"
import { Theme } from "@/context/types"
import { useThemeContext } from "@/context/ThemeContext"

export interface IChooseSideItemProps {
  theme: Theme
  img: string
  title: string
  classes: string
}

const ChooseSideItem = (props: IChooseSideItemProps) => {
  const { img, theme, title, classes } = props
  const { changeTheme } = useThemeContext()

  return (
    <div
      onClick={() => changeTheme(theme)}
      className={cn(styles.item, classes)}
    >
      <div className={styles.title}>{title}</div>
      <img src={img} alt={title} className={styles.img} />
    </div>
  )
}

export default ChooseSideItem
