import type { Meta, StoryObj } from "@storybook/react"
import Loader, { ILoaderProps } from "./Loader"

const meta = {
  title: "UI-KIT/Loader",
  component: Loader,
  parameters: {
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Loader>

export default meta
type Story = StoryObj<typeof meta>

const props: ILoaderProps = {
  theme: "dark",
  hasShadow: true,
}

export const Dark: Story = {
  args: {
    ...props,
  },
}

export const Light: Story = {
  args: {
    ...props,
    theme: "white",
    hasShadow: true,
  },
}

export const Blue: Story = {
  args: {
    ...props,
    theme: "blue",
  },
}
