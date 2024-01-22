import Favorites from "@components/Favorites"
import { ReactNode, useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import styles from "./Header.module.css"
import darkIcon from "./img/droid.svg"
import lightIcon from "./img/lightsaber.svg"
import neutralIcon from "./img/space-station.svg"
import { useThemeContext } from "@/context/ThemeContext"

const Header: React.FC = () => {
  const { theme, setTheme } = useThemeContext()
  const [themeIcon, setThemeIcon] = useState<string>(darkIcon)

  useEffect(() => {
    switch (theme) {
      case "dark":
        setThemeIcon(darkIcon)
        break
      case "light":
        setThemeIcon(lightIcon)
        break
      case "neutral":
        setThemeIcon(neutralIcon)
        break

      default:
        setThemeIcon(darkIcon)
        break
    }
  }, [theme])

  return (
    <header className={styles.container}>
      <div className={styles.iconContainer}>
        <img src={themeIcon} alt="icon" className={styles.icon} />
      </div>
      <ul className={styles.list__container}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/people?page=1">People</NavLink>
        </li>
        <li>
          <NavLink to="/not-found">Not Found</NavLink>
        </li>
        <li>
          <NavLink to="/search">Search</NavLink>
        </li>
        <li>
          <NavLink to="/fail">Fail</NavLink>
        </li>
      </ul>
      <Favorites />
    </header>
  )
}

export default Header
