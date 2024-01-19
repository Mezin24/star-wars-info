import styles from "./ChooseSide.module.css"
import { useThemeContext } from "@/context/ThemeContext"

const ChooseSide: React.FC = () => {
  const { theme, changeTheme } = useThemeContext()

  return (
    <div>
      <h1>Theme: {theme}</h1>
      <button onClick={() => changeTheme("dark")}>Dark</button>
      <button onClick={() => changeTheme("light")}>light</button>
      <button onClick={() => changeTheme("neutral")}>neutral</button>
    </div>
  )
}

export default ChooseSide
