import ChooseSideItem from "../ChooseSideItem"
import styles from "./ChooseSide.module.css"
import lightSide from "./img/light-side.jpg"
import darktSide from "./img/dark-side.jpg"
import neutralSide from "./img/falcon.jpg"
import { Theme } from "@/context/types"

const ChooseSide: React.FC = () => {
  const sideItems: {
    img: string
    title: string
    theme: Theme
    classes: string
  }[] = [
    {
      img: lightSide,
      title: "Light Side",
      theme: "light",
      classes: styles.item_light,
    },
    {
      img: darktSide,
      title: "Dark Side",
      theme: "dark",
      classes: styles.item_dark,
    },
    {
      img: neutralSide,
      title: "I'm Han Solo",
      theme: "neutral",
      classes: styles.item_neutral,
    },
  ]

  return (
    <div className={styles.container}>
      {sideItems.map(({ img, theme, title, classes }) => (
        <ChooseSideItem
          img={img}
          theme={theme}
          title={title}
          key={title}
          classes={classes}
        />
      ))}
    </div>
  )
}

export default ChooseSide
