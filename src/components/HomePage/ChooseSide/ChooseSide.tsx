import styles from "./ChooseSide.module.css"
import darkIcon from "./img/droid.svg"
import lightIcon from "./img/lightsaber.svg"
import neutralIcon from "./img/space-station.svg"
import { useThemeContext } from "@/context/ThemeContext"

const ChooseSide: React.FC = () => {
  const { theme, setTheme } = useThemeContext()
  return (
    <div>
      <h1>Theme: {theme}</h1>
      <button onClick={() => setTheme("dark")}>Dark</button>
      <button onClick={() => setTheme("light")}>light</button>
      <button onClick={() => setTheme("neutral")}>neutral</button>
    </div>
  )
}

export default ChooseSide
