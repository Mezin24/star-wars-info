import { Theme } from "@/context/types"

export const changeCSSVariables = (theme: Theme) => {
  const root = document.querySelector(":root")! as HTMLHtmlElement

  root.style.setProperty(
    "--theme-default-header",
    `var(--theme-${theme}-header)`,
  )
}
