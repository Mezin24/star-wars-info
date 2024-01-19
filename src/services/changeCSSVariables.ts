import { Theme } from "@/context/types"

export const changeCSSVariables = (theme: Theme) => {
  const root = document.querySelector(":root")! as HTMLHtmlElement

  const cssVariables = ["header", "bgimage"]

  cssVariables.forEach((element) =>
    root.style.setProperty(
      `--theme-default-${element}`,
      `var(--theme-${theme}-${element})`,
    ),
  )
}
