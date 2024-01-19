import { Theme } from "./types"
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react"
import { changeCSSVariables } from "@/services/changeCSSVariables"

interface IThemeContext {
  theme: Theme
  changeTheme: (theme: Theme) => void
}

const ThemeContext = createContext<IThemeContext>({
  theme: "dark",
  changeTheme: (theme: Theme) => {},
})

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("dark")

  const changeTheme = useCallback(
    (theme: Theme) => {
      setTheme(theme)
      changeCSSVariables(theme)
    },
    [setTheme],
  )

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
