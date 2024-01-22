import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react"
import { THEME_STORAGE_KEY } from "./constants"
import { Theme } from "./types"
import { changeCSSVariables } from "@/services/changeCSSVariables"

interface IThemeContext {
  theme: Theme
  changeTheme: (theme: Theme) => void
}

const ThemeContext = createContext<IThemeContext>({
  theme: "dark",
  changeTheme: (theme: Theme) => {},
})

const initialTheme = localStorage.getItem(THEME_STORAGE_KEY) as Theme

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(initialTheme || "dark")

  const changeTheme = useCallback(
    (theme: Theme) => {
      setTheme(theme)
      changeCSSVariables(theme)
    },
    [setTheme],
  )

  useEffect(() => {
    localStorage.setItem(THEME_STORAGE_KEY, theme)
    changeCSSVariables(theme)
  }, [theme])

  return (
    <ThemeContext.Provider
      value={{
        theme,
        changeTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => useContext(ThemeContext)
